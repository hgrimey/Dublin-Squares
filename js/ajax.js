console.log('HELLO')

//var baseURL = 'http://localhost:8888/php1/';

var hostingURL = 'http://dublinsquares.codeprimer.net/php/'

var newHostingURL = 'http://d1519085-109992.blacknighthosting.com/php/';


//var baseURL = hostingURL;

baseURL = newHostingURL;



function getImageUrl(path) {
    return path;
}

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
*/
function getHouseById(id, callback) {
    var data = {
        ID: id
    }
    $.getJSON(baseURL + 'houseById.php', data).then(function (thing) {
        callback(thing);
    });
}


function loadHeadersJSON(callback) {
    $.getJSON(baseURL + 'notableFigures1.php', function (thing) {
        console.log(thing);
        callback(thing);
    });
}

function loadNotableFiguresJSON(id, callback) {
    var data = {
        notFigID: id
    }
    $.getJSON(baseURL + 'notableFigures.php', data).then(function (thing) {

        console.log(thing);
        callback(thing);
    });
}

function imageMapAreaJSON(callback) {
    $.getJSON(baseURL + 'imageMA2.php', function (thing) {
        //console.log(thing);
        callback(thing);
    });
}

function loadMapPageJSON(id, callback) {
    var data = {
        mapID: id
    }
    $.getJSON(baseURL + 'mapById.php', data).then(function (thing) {
        //console.log(thing);
        callback(thing);
    })
}

function landingPageMapJSON(callback) {
    $.getJSON(baseURL + 'mainMap.php', function (thing) {
        //console.log(thing);
        callback(thing);
    });
}

function modalJSON(callback) {
    $.getJSON(baseURL + 'mapModals.php', function (thing) {
        callback(thing);
    });
}

function getSectionsForScollingJSON(callback) {
    $.getJSON(baseURL + 'merrionSections.php', function (section) {
        callback(section);
    });
}

function architecturalFeaturesJSON(callback) {
    $.getJSON(baseURL + 'architecturalFeatures.php', function (features) {
        callback(features);
    })
}

function loadMenuButtons(callback) {

    $.getJSON(baseURL + 'housesInMenu.php').then(function (buttons) {
        callback(buttons);
    })
}
