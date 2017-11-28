var labels = ["Company Information", "Business Category", "Business Type", "Year Of Filing", "Address"];
var ids = ["compinfo", "buscat", "bustype", "fileyear", "address"];
var categories = ["Retail", "Wholesale", "Manufacturing", "Service", "Leasing/Rental", "Farming", "Other"];
var types = ["Corporation", "Sole Proprietorship", "Partnership", "Unincorporated Association", "Other"];

function buildinfo(){

}

function buildtable() {
    var container = $("#businfo");
    var table = $("<table>");
    for (var i = 0; i < labels.length; i++)
    {
        var row = $("<tr>");

        var input = $("<input>", {id: ids[i]});
    }

}

function init() {
    buildtable();
}

window.onload = init;
