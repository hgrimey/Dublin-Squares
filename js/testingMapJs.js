//JSON calls
/*
function getMainMap(callback) {
    $.getJSON(hostingURL + 'mainMap.php').then(function (mainMap) {
        //alert('got main map first');
        //console.log('got main map', mainMap);
        //console.log('main map id is', mainMap.id);
        //console.log('loading all areas for this map, (id=' + mainMap.id + ')');
        $.getJSON(hostingURL + 'imageMapAreas.php', {
            imageMapId: mainMap.id
        }).done(function (imageMapAreas) {
            console.log('loaded all areas for main map', imageMapAreas);
            mainMap.areas = imageMapAreas;
            //console.log('final image map', mainMap);
            callback(mainMap);
        });
    });
}


function getMapById(id, callback) {
    var data = {
        mapID: id
    }
    $.getJSON(hostingURL + 'mapById.php', data).then(function (returnedMap) {

        $.getJSON(hostingURL + 'imageMapAreas.php', {
            imageMapId: returnedMap.id
        }).done(function (imageMapAreas) {
            //confusing this part
            returnedMap.areas = imageMapAreas;

            console.log(imageMapAreas);

            callback(returnedMap);
        })
    })
}

function getHouseById(id, callback) {
    var data = {
        ID: id
    }
    $.getJSON(hostingURL + 'houseById.php', data).then(function (thing) {
        callback(thing);
    });
}

// page loaders

function loadMainMapPage() {
    addToHistory(loadMainMapPage, undefined);
    getMainMap(function (mainMap) {
        $('#mapContainer').html(generateMapHTML(mainMap));

        $.mobile.changePage('#mapContainer', {
            transition: "slideup",
            changeHash: false
        });
    });
}
function loadMapPage(mapId) {
    addToHistory(loadMapPage, mapId);
    getMapById(mapId, function (map) {
        var mapHTML = generateMapHTML(map);
        $('#mapContainer').html(mapHTML);

        $.mobile.changePage('#mapContainer', {
            transition: "slideup",
            changeHash: false
        });
    })
}
function loadHousePage(houseId) {
    addToHistory(loadHousePage, houseId);
    getHouseById(houseId, function (house) {
        var houseHTML = buildHouseHTML(house);
        $('#mapContainer').html(houseHTML);
        ///////////////////////////////////////////////
        $.mobile.changePage('#mapContainer', {
            transition: "slideup",
            changeHash: false
        });
    })
}
$(document).ready(function () {
    $('html').on('click', '.maptag', function (e) {

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
*/
