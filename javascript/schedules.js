var totalcost = parseInt(0);
var totaladd = parseInt(0);
var totaldel = parseInt(0);
var totalb = parseInt(0);
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

function makerow(table, elements)
{
        var row = document.createElement("tr");
        for(var j = 0; j < elements.length; j++)
        {
            var cell = document.createElement("td");
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("class", elements[j]);
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
}

function scheduleA()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var headerrow = document.createElement("tr");
    headerrow.setAttribute("id", "header");
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
        makerow(newtable, head);
    }
    var totalrow = document.createElement("tr");
    totalrow.setAttribute("id", "total");
    newtable.appendChild(totalrow);
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
    loadfields();
    updateTotal();
}

function scheduleB()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var headerrow = document.createElement("tr");
    headerrow.setAttribute("id", "header");
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
    loadfields();
}

function scheduleB4()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var headerrow = document.createElement("tr");
    headerrow.setAttribute("id", "header");
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
    totalrow.setAttribute("id", "total");
    newtable.appendChild(totalrow);
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
    loadfields();
    updateTotal();
}

function scheduleC()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var headerrow = document.createElement("tr");
    headerrow.setAttribute("id", "header");
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
    loadfields();
}

function affirmation()
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    newtable.setAttribute("id", "group");
    var head = ["Signature (Type Full Name)", "Title", "Address", "Preparer Other Than Taxpayer", "Date"];
    for (var i = 0; i < head.length; i++)
    {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.appendChild(document.createTextNode(head[i]));
        row.appendChild(cell);
        cell = document.createElement("td");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        cell.appendChild(input);
        row.appendChild(cell);
        newtable.appendChild(row);
    }
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
}

function updateTotal()
{
    totalcost = 0;
    totaladd = 0;
    totaldel = 0;
    totalb = 0;
    var inputs = document.getElementsByTagName("input");
    //if there is a total to update, then on input update, update value.
    if(pageid <= 9)
    {
        for (var i = 0; i < inputs.length; i++)
        {
            if(inputs[i].attributes["class"].value == "Cost" && inputs[i].value != '')
            {
                totalcost = parseInt(totalcost) + parseInt(inputs[i].value);
            }
            if(inputs[i].attributes["class"].value == "Additions" && inputs[i].value != '')
            {
                totaladd = parseInt(totaladd) + parseInt(inputs[i].value);
            }
            if(inputs[i].attributes["class"].value == "Deletions" && inputs[i].value != '')
            {
                totaldel = parseInt(totaldel) + parseInt(inputs[i].value);
            }
        }
    var totalrow = document.createElement("tr");
    totalrow.setAttribute("id", "total");
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
    var table = document.getElementById("group");
    var row = table.getElementsByTagName("tr");
    table.replaceChild(totalrow, row[row.length - 1]);
    }
    else if(pageid == 13)
    {
        for (var i = 0; i < inputs.length; i++)
        {
            if(inputs[i].attributes["class"].value == "Cost" && inputs[i].value != '')
            {
                totalb = parseInt(totalb) + parseInt(inputs[i].value);
            }
        }
    var totalrow = document.createElement("tr");
    totalrow.setAttribute("id", "total");
    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode("Total"));
    totalrow.appendChild(cell);
    cell = document.createElement("td");
    cell.setAttribute("id", "totalb");
    cell.appendChild(document.createTextNode(totalb));
    totalrow.appendChild(cell);
    var table = document.getElementById("group");
    var row = table.getElementsByTagName("tr");
    table.replaceChild(totalrow, row[row.length - 1]);
    }
}

window.addEventListener("input", updateTotal);

