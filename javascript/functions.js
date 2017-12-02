var pageid = 1;
var instruction;
var header;

function initPage()
{
    setHeaderAndInstructions();
    buildProgressBar();
    var title = document.getElementById("title");
    if(title.hasChildNodes())
    {
        title.replaceChild(document.createTextNode(header), title.childNodes[0]);
    }
    else
    {
        title.appendChild(document.createTextNode(header));
    }
    var inst = document.getElementById("instructions");
    if(inst.hasChildNodes())
    {
        inst.replaceChild(document.createTextNode(instruction), inst.childNodes[0]);
    }
    else
    {
        inst.replaceChild(document.createTextNode(instruction), inst.childNodes[0]);
    }
    var back = document.getElementById("back");
    var next = document.getElementById("next");
    var save = document.getElementById("save");
    if(pageid == 1) //remove back button since you cant go back
    {
        back.style.display = "none";
    }
    else
    {
        back.style.display = "inline";
    }
    if(pageid == 15) //remove next and save buttons and replace save with submit button
    {
        next.style.display = "none";
        save.innerHTML = "SUBMIT";
        save.id = "submit";
    }
    else
    {
        var submit = $("#submit")[0];
        if (submit != null)
        {
            submit.id = "save";
    var save = document.getElementById("save");
        next.style.display = "inline";
        save.innerHTML = "SAVE";
        }
    }
    //call init Schedule A, Schedule B, Schedule C, or Affirmation depending on current pageid.
    if(pageid <= 9)
    {
        scheduleA();
    }
    else if(pageid <= 12)
    {
        scheduleB();
    }
    else if(pageid <= 13)
    {
        scheduleB4();
    }
    else if(pageid == 14)
    {
        scheduleC();
    }
    else if(pageid == 15)
    {
        affirmation();
    }
    makeTableScroll();
    dynamicElements();
}


function buildProgressBar()
{
    var container = document.getElementById("progress");
    var newtable = document.createElement("table");
    var grouprow = document.createElement("tr");
    for(var i = 1; i <= 15; i++)
    {
        var groupcell = document.createElement("td");
        groupcell.setAttribute("id", i);
        if(i < pageid)
        {
            groupcell.setAttribute("class", "complete");
        }
        else if(i == pageid)
        {
            groupcell.setAttribute("class", "current");
        }
        else
        {
            groupcell.setAttribute("class", "incomplete");
        }
        if(i <= 9)
        {
            groupcell.appendChild(document.createTextNode("A " + i));
        }
        else if (i <= 13)
        {
            groupcell.appendChild(document.createTextNode("B " + (i - 9)));
        }
        else if (i == 14)
        {
            groupcell.appendChild(document.createTextNode("C 1"));
        }
        else if (i == 15)
        {
            groupcell.appendChild(document.createTextNode("Affirmation"));
        }
        grouprow.appendChild(groupcell);
    }
    newtable.appendChild(grouprow);
    newtable.setAttribute("id", "progresstable");
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
}

/**
 * Function that will modify elements to make the page more mobile friendly or better to look at.
 */
function dynamicElements()
{
    footer();
}

function footer()
{
    var section = document.getElementById("section");
    var footer = document.getElementById("bottomnav");

    var overlap = section.getBoundingClientRect().bottom + 30 >= footer.getBoundingClientRect().top;
    if(overlap || window.innerHeight <= 600)
    {
        footer.style.position = "relative";
    }
    else
    {
        footer.style.position = "absolute";
    }
}

function savefields()
{
    var rowsToSave = {};
    var table = $("#group")[0];
    $.each(table.rows, function(key, value) {
        var saverow = false;
        if(value.id == "")
            {
            $.each(value.getElementsByTagName("td"), function(i, cell) {
               if(cell.getElementsByTagName("input").length >= 1)
               {
                    if(cell.getElementsByTagName("input")[0].value != "")
                    {
                        saverow = true;
                    }
               }
                });
                if(saverow)
                {
                    var vals = [];
                    $.each(value.getElementsByTagName("input"), function(index, val) {
                        vals[index] = val.value;
                    });
                    rowsToSave[key] = vals;
                }
            }
    });
    localStorage.setItem(pageid, JSON.stringify(rowsToSave));
}

function loadfields()
{
    if(localStorage.getItem(pageid) != null)
    {
        var data = JSON.parse(localStorage.getItem(pageid));
        var table = $("#group")[0];
        var rows = table.rows;
        for(row in data)
        {
            var curr = rows[row];
            var inputs = curr.getElementsByTagName("input");
            for(value in data[row])
            {
                inputs[value].value = data[row][value];
            }
        }
    }
}

function goHome()
{
    //create a page overlay that tells the user the information has been saved and they are being taken back to the home page.
    location.href = "../html/index.html";
}

function clickHandler(event)
{
    var containsID = false;
    for (var i = 0; i < event.target.attributes.length; i++)
        {
            if(event.target.attributes[i].nodeName === "id")
                containsID = true;
        }
    if(containsID)
    {
        var clicked = document.getElementById(event.target.id);
        if(clicked.id == "next")
        {
            savefields();
            pageid++;
            initPage();
        }
        else if (clicked.id === "back")
        {
            savefields();
            pageid--;
            initPage();
        }
        else if (clicked.id === "save")
        {
            savefields();
            goHome();
        }
        else if (clicked.id === "submit")
        {
            savefields();
            printform();
            goHome();
        }
        else if (clicked.id === "home")
        {
            savefields();
            goHome();
        }
        else if(clicked.id == "addRow");
        {
            addRow();
        }
        else if (clicked.parentNode.parentNode.id === "progresstable")
        {
            savefields();
            pageid = parseInt(clicked.id);
            initPage();
        }
    }
}

/**
 * Function to display a popup if a user tries to refresh asking them if they would like to save the information before the page is reloaded.
 */
function savepopup()
{
    alert("You are about to leave (or refresh) this page.  Would you like to save the currently stored information? You will then be taken back to home.");

}

/**
 * Handle a refresh by alerting the user and then either saving or discarding the information depending on the users choice.
 */
function refresh()
{
    
    debugger;
    var save = true;
    savepopup();
    if(save)
    {
        savefields();
    }
    pageid = pageid;
    initPage();
}
