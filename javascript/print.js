function buildpdf() {
    var page = $("#page");
    $("<p>").text("WATAUGA COUNTY TAX OFFICE - 842 WEST KING STREET - BOONE, NC 28607").appendTo(page);
    for (var pageid = 1; pageid < 16; pageid++)
    {
        var table = $("<table id = 'table" + pageid + "'>");
        var data = JSON.parse(localStorage.getItem(pageid));
        $.each(data, function(num, vals) {
            var row = $("<tr class = 'row" + num + "'>");
            $.each(vals, function(i, data) {
                $("<td>>").text(data).appendTo(row);
            });
            row.appendTo(table);
        });
        table.appendTo(page);
    }
}

function getschedule(id) {
    {
    var pageid = id;
    var schedule = $("<div id = 'schedule'>");
    $("<table>").appendTo(schedule);
    schedule.appendTo(page);
        if(pageid <= 12)
        {
            scheduleA();
        }
            $("#total")[0].id = "total" + pageid;
            $("#schedule")[0].id = pageid;
    }
}

function printform()
{
    var printWindow = window.open("html/print.html", "printpdf", "width = 800px; height = 400px;");
    printWindow.print();
    printWindow.close();
}
