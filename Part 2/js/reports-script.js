$(function () {
    $("body").on("click", "a", function (e) {
        var currentid = e.currentTarget.id;

        $.getJSON("data/employees.js", function (data) {
            var json = ""

            $.each(data, function () {
                $.each(this, function (key, value) {
                    if (value.manager == currentid) {
                        json += "<li><a href='#emp-details' class='ui-btn ui-btn-icon-right ui-icon-carat-r' id='" + value.id + "'><img src='" + value.imagePath + "' class='ui-mini'><h4>" + value.name + "</h4><p>" + value.title + "</p><span class='ui-li-count'>" + value.subs + "</span></a></li>";
                    };

                    $("#reports-list").html(json);
                });
            });
        });
    })
}); //-------end ready function