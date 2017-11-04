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
        //affirmation();
    }
    makeTableScroll();
}

function makeTableScroll() {
    // Constant retrieved from server-side via JSP
    var maxRows = 8;

    var table = document.getElementById("group");
    var wrapper = table.parentNode;
    var rowsInTable = table.rows.length;
    var height = 0;
    if (rowsInTable > maxRows) {
        for (var i = 0; i < maxRows; i++) {
            height += table.rows[i].clientHeight;
        }
        wrapper.style.height = height + "px";
    }
}

function scheduleA()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var totalcost = 0;
    var totaladd = 0;
    var totaldel = 0;
    var headerrow = document.createElement("tr");
    var head = ["Year Acquired", "Cost", "Additions", "Deletions"];
    for (var i = 0; i < head.length; i++)
    {
        var input = document.createTextNode(head[i]);
        var cell = document.createElement("th");
        cell.appendChild(input);
        headerrow.appendChild(cell);
    }
    newtable.appendChild(headerrow);
    newtable.setAttribute("id", "group");
    //loop through local storage and output the table row appending the child.
    for(var i = 0; i < 5; i++)
    {
        var row = document.createElement("tr");
        for(var j = 0; j < head.length; j++)
        {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("class", head[j]);
            cell.appendChild(input);
            row.appendChild(cell);
        }
        newtable.appendChild(row);
    }
    var totalrow = document.createElement("tr");
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Total"));
    totalrow.appendChild(cell);
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(totalcost));
    totalrow.appendChild(cell);
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(totaladd));
    totalrow.appendChild(cell);
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(totaldel));
    totalrow.appendChild(cell);
    newtable.appendChild(totalrow);
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
}

function scheduleB()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var headerrow = document.createElement("tr");
    var head = ["Year", "Make", "Model", "Body/Size", "Title #", "Vehicle Identification Number", "Year Purchased", "Purchase Price"];
    for (var i = 0; i < head.length; i++)
    {
        var input = document.createTextNode(head[i]);
        var cell = document.createElement("th");
        cell.appendChild(input);
        headerrow.appendChild(cell);
    }
    newtable.appendChild(headerrow);
    newtable.setAttribute("id", "group");
    //loop through local storage and output the table row appending the child.
    for(var i = 0; i < 5; i++)
    {
        var row = document.createElement("tr");
        for(var j = 0; j < head.length; j++)
        {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("class", head[j]);
            cell.appendChild(input);
            row.appendChild(cell);
        }
        newtable.appendChild(row);
    }
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
}

function scheduleB4()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var headerrow = document.createElement("tr");
    var total = 0;
    var head = ["Type", "Cost"];
    for (var i = 0; i < head.length; i++)
    {
        var input = document.createTextNode(head[i]);
        var cell = document.createElement("th");
        cell.appendChild(input);
        headerrow.appendChild(cell);
    }
    newtable.appendChild(headerrow);
    newtable.setAttribute("id", "group");
    //loop through local storage and output the table row appending the child.
    for(var i = 0; i < 5; i++)
    {
        var row = document.createElement("tr");
        for(var j = 0; j < head.length; j++)
        {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("class", head[j]);
            cell.appendChild(input);
            row.appendChild(cell);
        }
        newtable.appendChild(row);
    }
    var totalrow = document.createElement("tr");
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Total"));
    totalrow.appendChild(cell);
    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(total));
    totalrow.appendChild(cell);
    newtable.appendChild(totalrow);
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
}

function scheduleC()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var headerrow = document.createElement("tr");
    var head = ["Name And Address Of Owner", "Description Of The Property", "Lease # Or Account #", "Monthly Payment", "Cost New (Quoted)", "Start Lease Date", "End Lease Date"];
    for (var i = 0; i < head.length; i++)
    {
        var input = document.createTextNode(head[i]);
        var cell = document.createElement("th");
        cell.appendChild(input);
        headerrow.appendChild(cell);
    }
    newtable.appendChild(headerrow);
    newtable.setAttribute("id", "group");
    //loop through local storage and output the table row appending the child.
    for(var i = 0; i < 5; i++)
    {
        var row = document.createElement("tr");
        for(var j = 0; j < head.length; j++)
        {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("class", head[j]);
            cell.appendChild(input);
            row.appendChild(cell);
        }
        newtable.appendChild(row);
    }
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
}

function affirmation()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var head = ["Signature (Type Full Name)", "Title", "Address", "Preparer Other Than Taxpayer", "Date"];
    for (var i = 0; i < head.length; i++)
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
    debugger;
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

window.addEventListener("load", initPage);
window.addEventListener("click", clickHandler);
