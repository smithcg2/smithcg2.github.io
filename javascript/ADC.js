function addRow()
{
    var table = document.getElementById('group');
    var totalbackup = $("#total")[0];
    table.deleteRow(table.rows.length - 1);
    if(pageid <= 9)
    {
        makerow(table, headA);
    }
    else if (pageid <= 12)
    {
        makerow(table, headB);
    }
    else if (pageid == 13)
    {
        makerow(table, headB4);
    }
    else if (pageid == 14)
    {
        makerow(table, headC);
    }
    if(totalbackup != null)
    {
    table.appendChild(totalbackup);
    }
    updateTotal();

}

//delete a specific row
function deleteRow(row)
{
    var i = row.parentNode.parentNode.rowIndex;
    var table = $("#group")[0];
    if(table.rows[i - 1].id == "header" && table.rows[i + 1].id == "total")
    {
        alert("You cannot delete the only row in this table. Use the clear button if you would like to remove the current values.");
    }
    else
    {
        table.deleteRow(i);
        updateTotal();
    }
}

function clearRow(row)
{
    var i = row.parentNode.parentNode;
    for(var cell = 0; cell < i.getElementsByTagName("input").length; cell++)
    {
        i.getElementsByTagName("input")[cell].value = "";
    }
    updateTotal();
}

function appendAddButton()
{
    if(pageid < 15)
    {
        if($("#addrow")[0] == null)
        {
            var section = $("#section")[0];
            var button = $("<button id='addrow'>");
            button.text("Add Row");
            button.appendTo(section);
        }
    }
    else
    {
        var addbutton = $("#addrow")[0];
        if(addbutton != null)
        {
            $("#section")[0].removeChild(addbutton);
        }
    }
}

