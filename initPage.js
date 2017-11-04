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
        //save.replaceChild(document.createTextNode("SUBMIT"), save.childNodes[0]);
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

function savefields()
{
    //stuff will go here to cycle through each table field and save it to local storage.
}

function loadfields()
{
    //stuff will go here to cycle through local storage and initialize the table inputs with retrieved values.
}

function goHome()
{
    location.href = "index.html";
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
        console.log(clicked.id);
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
        else if (clicked.id === "home")
        {
            goHome();
        }
        else if (clicked.parentNode.parentNode.id === "progresstable")
        {
            pageid = parseInt(clicked.id);
            initPage();
        }
    }
}

window.addEventListener("load", initPage);
window.addEventListener("click", clickHandler);
