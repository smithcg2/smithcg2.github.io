function addRow()
{
    var table = document.getElementById('group');

    var row = tbl.insertRow(table.rows.length - 1);

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


