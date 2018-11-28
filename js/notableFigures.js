function loadHeadersHTML(notableFiguresParam) {
    var html = '';
    html += '<h1 id="name" class="title-name one" data-id="' + notableFiguresParam[0].ID + '">' + notableFiguresParam[0].personName + '</h1>\r\n'

    html += '<h1 id="name" class="title-name two" data-id="' + notableFiguresParam[1].ID + '">' + notableFiguresParam[1].personName + '</h1>\r\n'

    html += '<h1 id="name" class="title-name three" data-id="' + notableFiguresParam[2].ID + '">' + notableFiguresParam[2].personName + '</h1>\r\n'

    html += '<h1 id="name" class="title-name four" data-id="' + notableFiguresParam[3].ID + '">' + notableFiguresParam[3].personName + '</h1>'

    return html;
}

//images from the database
function loadNotableFiguresContainer(notableFig) {
    var html = '';
    html += '<div class="image">'
    html += '<img class="sticky" src="' + notableFig.notableFigImgURL + '" width="200px" height="300px">'
    html += '</div>'
    html += '<div class="text">'
    html += '<p style="width: 375px">' + notableFig.notableFigText + '</p>'
    html += '</div>'
    return html;
}

//when the user clicks on the name the info appears
$(document).ready(function () {
    console.log('hello');
    loadHeadersJSON(function (thing) {
        console.log(loadHeadersHTML(thing));
        $('#notableFigureContainer').html(loadHeadersHTML(thing));
    });

    $('html').on('click', '#name', function (e) {
        console.log('name clicked');
        e.preventDefault();

        var containerID = $(this).data('id');
        loadNotableFiguresJSON(containerID, function (thing) {
            $('#notableFigureContainer').append(loadNotableFiguresContainer(thing));

        });
    });

});
