var labels = ["Company Information", "Business Category", "Business Type", "Year Of Filing", "Address"];
var ids = ["compinfo", "buscat", "bustype", "fileyear", "address"];
var categories = ["Retail", "Wholesale", "Manufacturing", "Service", "Leasing/Rental", "Farming", "Other"];
var types = ["Corporation", "Sole Proprietorship", "Partnership", "Unincorporated Association", "Other"];

function buildinfo(){
    var container = $("#businfo");
    var subel = $("<div>");
    $.each(labels, function(i, el) {
        var line = $("<p>");
        line.text(el + " : " + localStorage.getItem(ids[i]));
        line.appendTo(subel);
    });
    var button = $("<button>", {id: "updateinfo", class: "wide"});
    button.text("Update Information");
    button.appendTo(subel);
    button.click(function() { 
        buildtable();
    });
    container.replaceWith(subel);
}

function saveinfo() {
    $.each(ids, function(i, el) {
        var field = $("#" + el)[0];
        localStorage.setItem(el, field.value);  
    });
}

function buildtable() {
    var container = $("#businfo");
    var subel = $("<div>");
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

    table.appendTo(subel);
    var button = $("<button>", {id: "SaveInfo", class: "savebutton"});
    button.text("Save Information");
    button.appendTo(subel);
    button.click(function() { 
        saveinfo();
        buildinfo();
    });
    container.replaceWith(subel);
}

function init() {
 //   buildtable();
 //   buildinfo();
   var needinfo = false;
   $.each(ids, function(key, value) {
         if (localStorage.getItem(value) == null)
         {
             needinfo = true;
         }
         if (needinfo)
         {
             buildtable();
         }
         else
         {
             buildinfo();
         }
    });
}

window.onload = init;
