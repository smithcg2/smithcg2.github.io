var labels = ["Company Information", "Business Category", "Business Type", "Year Of Filing", "Address"];
var ids = ["compinfo", "buscat", "bustype", "fileyear", "address"];
var categories = ["Retail", "Wholesale", "Manufacturing", "Service", "Leasing/Rental", "Farming", "Other"];
var types = ["Corporation", "Sole Proprietorship", "Partnership", "Unincorporated Association", "Other"];

function buildinfo(){

}

function buildtable() {
    var container = $("#businfo");
    var table = $("<table>", {id: "bustable"});
    for (var i = 0; i < labels.length; i++)
    {
        var row = $("<tr>");
        var cell1 = $("<td>");
        cell1.text(labels[i]);
        cell1.appendTo(row);
        var cell2 = $("<td>");
        
        var input;
        if (ids[i] == "bustype")
        {
            input = $("<select>", {id: ids[i]});
            $.each(types, function(i, option) {
                input.append("<option>" + option + "</option>");
            });
        }
        else if (ids[i] == "buscat")
        {
            input = $("<select>", {id: ids[i]});
            $.each(categories, function(i, option) {
                input.append("<option>" + option + "</option>");
            });
        }
        else
        {
            input = $("<input>", {id: ids[i]});
        }
        input.appendTo(cell2);
        cell2.appendTo(row);
        row.appendTo(table);
    }

    table.appendTo(container);
    var button = $("<button>", {id: "SaveInfo", class: "savebutton"});
    button.text("Save Information");
    button.appendTo(container);
}

function init() {
    buildtable();
}

window.onload = init;
