//homepage
$(function () {
        $.getJSON("data/employees.js", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#list").append("<li><a href='#emp-details' id='" + value.id + "'><img src='" + value.imagePath + "'><h4>" + value.name + "</h4><p>" + value.title + "</p><span class='ui-li-count'>" + value.subs + "</span></a></li>");
                });
            });

            $("#list").listview("refresh");
        });


    }) //---------------end ready function home page






//detail page