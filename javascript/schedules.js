var totalcost = parseInt(0);
var totaladd = parseInt(0);
var totaldel = parseInt(0);
var totalb = parseInt(0);
    
var headA = ["Year Acquired", "Cost", "Additions", "Deletions"];
var headB = ["Year", "Make", "Model", "Body/Size", "Title #", "Vehicle Identification Number", "Year Purchased", "Purchase Price"];
var headB4 = ["Type", "Cost"];
var headC = ["Name And Address Of Owner", "Description Of The Property", "Lease # Or Account #", "Monthly Payment", "Cost New (Quoted)", "Start Lease Date", "End Lease Date"];

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
        var del = $("<td class = 'delclr'>");
        var delbutton = $("<button class = 'delrow' onclick='deleteRow(this)'>");
        delbutton.text("DEL");
        delbutton.appendTo(del);
        del.appendTo(row);
        var clear = $("<td class ='delclr'>");
        var clearbutton = $("<button class = 'clrrow' onclick='clearRow(this)'>");
        clearbutton.text("CLR");
        clearbutton.appendTo(clear);
        clear.appendTo(row);
        table.appendChild(row);
}

function makeGroup(array)
{
    var container = document.getElementById("schedule");
    var newtable = document.createElement("table");
    var headerrow = document.createElement("tr");
    headerrow.setAttribute("id", "header");
    for (var i = 0; i < array.length; i++)
    {
        var input = document.createTextNode(array[i]);
        var cell = document.createElement("th");
        cell.appendChild(input);
        headerrow.appendChild(cell);
    }
    newtable.appendChild(headerrow);
    newtable.setAttribute("id", "group");
    var saved = JSON.parse(localStorage.getItem(pageid));
    var savedlength = Object.keys(saved).length;
    for(var i = 0; i < (savedlength + 1); i++)
    {
        makerow(newtable, array);
    }
    var totalrow = document.createElement("tr");
    totalrow.setAttribute("id", "total");
    newtable.appendChild(totalrow);
    container.replaceChild(newtable, container.getElementsByTagName("table")[0]);
    loadfields();
    updateTotal();
}

function scheduleA()
{
    makeGroup(headA);
}

function scheduleB()
{
    makeGroup(headB);
}

function scheduleB4()
{
    makeGroup(headB4);
}

function scheduleC()
{
    makeGroup(headC);
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

