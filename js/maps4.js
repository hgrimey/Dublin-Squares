function generateMapHTML(map) {
    //FUNCTION TO GENERATE HTML FOR MAP
    //debugger;
    var html = '';
    html += '<div>'
    html += '<img src="' + map.imageURL + '" usemap="#' + map.name + '">\r\n'
    html += '<map name="' + map.name + '">\r\n'
    for (var x = 0; x < map.areas.length; x++) {
        var currentArea = map.areas[x];

        html += '<area class="maplink" shape="' + currentArea.shape + '" coords="' +
            currentArea.coords + '" data-destination="' + currentArea.destination + '" data-linkType="' + currentArea.linkType + '">\r\n'
    }
    html += '</map>\r\n'
    html += '</div>'

    return html;
}


$(document).ready(function () {
    $('html').on('click', '.maplink', function (e) {

        e.preventDefault();

        var dataDestination = $(this).data('destination');
        var linkType = $(this).data('linktype');
        console.log(dataDestination);
        console.log('linkType', linkType);

        if (linkType == 'map') {

            loadMapPage(dataDestination);

        } else if (linkType == 'house') {

            loadHousePage(dataDestination);

        } else {
            alert('Unrecognised linkType! ' + linkType);
        }

    });

    //debugger;
    loadMainMapPage();
    //getBirdsEyeMap();

})

// php page getMapById, which will get map by mapId
