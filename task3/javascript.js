/*globals window, $ */
(function () {
        "use strict";

        var kids;

        $.getJSON("./js/kids.json", function (data) {
            kids = data;
            displayKids(kids);
            });

            var kids_container = $('.kids_container');


            function displayKids(kids) {
                kids_container.empty();
                kids.forEach(function (kid) {
                    var kidHtml = kid_html
                        .replace("%name%", kid.name)
                        .replace("%age%", kid.age)
                        .replace("%color%", kid.color)
                        .replace("%game%", kid.game)
                        .replace("%food%", kid.food)
                        .replace("%image%", kid.image);
                    kids_container.append(kidHtml);
                });
            }

            var kid_html = "<div class=\"kid col-md-6 mb-5\">\n" +
                "          <div class=\"card\">\n" +
                "            <div class=\"card-heading bg-info text-white\">\n" +
                "              <h3 class=\"m-3\">%name%</h3>\n" +
                "            </div>\n" +
                "            <div class=\"card-body row\">\n" +
                "              <div class=\"col-lg-4\">\n" +
                "                <img class=\"img-fluid\" src=\"%image%\">\n" +
                "              </div>\n" +
                "              <div class=\"col-lg-8\">\n" +
                "                <ul class=\"my-4\">\n" +
                "                  <li><h5>Години: %age%</h5></li>\n" +
                "                  <li><h5>Любим цвят: %color%</h5></li>\n" +
                "                  <li><h5>Любима игра: %game%</h5></li>\n" +
                "                  <li><h5>Любима храна: %food%</h5></li>\n" +
                "                </ul>\n" +
                "                <button type=\"button\" class=\"btn btn-outline-info modalBut\" data-toggle=\"modal\" data-target=\"#kidModal\">Още</button>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "        </div>\n";

            $(".onlyinput").on("keyup", function (event) {
                var value = event.target.value.toLocaleLowerCase();
                if (value.length > 0) {
                    var filtered = kids.filter(function (kid) {
                        return (kid.name + " " + kid.age + " " + kid.color + " " + kid.game + " " + kid.food).toLocaleLowerCase().indexOf(value) > -1;
                    });
                    displayKids(filtered);
                } else {
                    displayKids(kids);
                }
            });

            function fetch(partialName) {
                var template = "./html/_%PARTIAL%.html".replace("%PARTIAL%", partialName);

                $(".infostack").addClass("loading");

                window.setTimeout(function () {
                    $(".infostack").load(template, function () {
                        $(".infostack").removeClass("loading");
                    });
                }, 50);
            }

            $("a[data-filed='about']").on("click", function () {
                fetch("about");
            });

            $("a[data-filed='contacts']").on("click", function () {
                fetch("contact");
            });

            $("a[data-filed='home']").on("click", function () {
                $(".infostack").empty();
            });

            $('.buttontwo').on('click', function () {
                var wow = kids.sort(function (a, b) {
                    return a.age - b.age;
                });
                displayKids(wow);
            });

            $('.buttonone').on('click', function () {
                var lol = kids.sort(function (a, b) {
                    return a.name == b.name ? 0 : +(a.name > b.name) || -1;
                });
                displayKids(lol);
            });


            function filterByGame(kids, game) {
                return kids.filter(function (kid) {
                    return kid.game === game;
                });
            }

            $(".lista").change(function (event) {
                event.preventDefault();
                var option = $('option:selected', this).attr("data-category");
                var filteredKids = filterByGame(kids, option);
                displayKids(filteredKids);
            });


      $('.modalBut').on('click', function () {
                $(".modalloader").load("./html/_kid-modal.json");
           $(".modal-body").innerHTML = displayKids(kids);            });
    


        })();
