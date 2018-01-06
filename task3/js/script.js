(function () {
    "use strict"

    let kids = []

    const toHTML = list => ` <div class="kid col-md-6 mb-5">
        <div class="card">
            <div class="card-heading bg-info text-white">
<h3 class="m-3">${list.name}</h3>
    </div>
    <div class="card-body row">
        <div class="col-lg-4">
<img class="img-fluid" src="${list.image}">
                </div>
    <div class="col-lg-8">
        <ul class="my-4">
<li><h5>Години: ${list.age}</h5></li>
<li><h5>Любим цвят: ${list.color}</h5></li>
<li><h5>Любима игра: ${list.game}</h5></li>
<li><h5>Любима храна: ${list.food}</h5></li>
                            </ul>
    <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#kidModal">Още</button>
    </div>
    </div>
    </div>
    </div>`

    $.getJSON("js/kids.json", data => {
        kids = data
        displayKids(kids)
    })

    const displayKids = data => {

        data.forEach(el => {
            $("#kids").append(toHTML(el))
        })
    }


    const loadPartial = _partialName => {
        $("#" + _partialName).load("html/_" + _partialName + ".html", () => console.log(_partialName, " is loaded!"))
    }

    loadPartial("about")
    loadPartial("contact")
    loadPartial("kid-modal")


    $("#keywords").keyup(() => {
        const keywords = $("#keywords").val()
        const regEx = new RegExp(keywords, "i")

        const filtered = kids.filter(el => el.name.match(regEx))

        $("#kids").empty()
        displayKids(filtered)
    })


    $("#sortByNameAZ").click(() => {
        const sorted = kids.sort((a, b) => a.name > b.name)

        $("#kids").empty()
        displayKids(sorted)
    })

    $("#sortByNameZA").click(() => {
        const sorted = kids.sort((a, b) => a.name < b.name)

        $("#kids").empty()
        displayKids(sorted)
    })

    $("#sortByAgeASC").click(() => {
        const sorted = kids.sort((a, b) => a.age - b.age)

        $("#kids").empty()
        displayKids(sorted)
    })

    $("#sortByAgeDESC").click(() => {
        const sorted = kids.sort((a, b) => b.age - a.age)

        $("#kids").empty()
        displayKids(sorted)
    })


})()
