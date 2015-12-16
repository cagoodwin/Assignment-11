$(function () {
    $("body").on("click", "a", function (e) {
        var currentid = e.currentTarget.id;

        $.getJSON("data/employees.js", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    if (value.id == currentid) {
                        $("#details").html("<img src='" + value.imagePath + "' class='detail-img'><h4>" + value.name + "</h4><p>" + value.title + "</p>")
                        $("#details-list").html("<li><a href='#emp-details' id='" + value.manager + "'><h5>View Manager</h5><p>" + value.reportsTo + "</p></a></li>" +
                            "<li><a href='#subordinates' id='" + value.id + "'><h5>View Direct Reports</h5><p>" + value.subs + "</p></a></li>" +
                            "<li><a href='tel:" + value.officeNumber + "'><h5>Call Office</h5><p>" + value.officeNumber + "</p></a></li>" +
                            "<li><a href='tel:" + value.cellNumber + "'><h5>Call Cell</h5><p>" + value.cellNumber + "</p></a></li>");
                    }
                    $("#details-list").listview("refresh");
                });
            });
        });
    })
}); //-------end ready function