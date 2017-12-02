function addRow()
{
    debugger;
    var table = document.getElementById('group');

    var row = table.insertRow(table.rows.length - 1);

}

//delete a specific row
function deleteRowSpec(cr)
{
    var i = cr.parentNode.ParentNode.rowIndex;

    document.getElementById("group").deleteRow(i)
}


function addRowSpec(cr)
{
    var i = cr.parentNode.parentNode.rowIndex;
    document.getElementById("group").insertRow(i);
}


