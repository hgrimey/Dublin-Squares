/*function getHouseById(id, callback) {
    var data = {
        ID: id
    }
    debugger;
    $.getJSON('http://localhost:8888/php1/houseById.php', data).then(function (house) {
        callback(house);
    });
}

$(document).ready(function () {

    function findMyImagePlease(myImageArray, myImagePagePlacement) {
        for (var x = 0; x < myImageArray.length; x++) {
            var currentImageThing = myImageArray[x];
            if (currentImageThing.imagePlacement = myImagePagePlacement) {
                return currentImageThing;
            }
            return null;
        }
    }

    function generateMyHouseHTML(stuff) {

        var html = '';
        html += '<div class="content-text">\r\n'
        html += '<div><h1>' + stuff.houseTitle + '</h1></div>\r\n'

        var images = stuff.houseImages;

        var myFirstImage = findMyImagePlease(images, 'titleImage');

        if (myFirstImage != null) {

            html += '<div class="imgHouse"><img src="' + myFirstImage.houseImageURL + '"/></div>\r\n'
        }
        /*
        var titleImage = findMyImagePlease(images, 'titleImage');

        if (titleImage != null) {
            html += '<div class="imgHouse"><img src="' + titleImage.houseImageURL + '"/></div>\r\n'
        }


        html += '<div><p>' + stuff.houseInfo + '</p></div>\r\n'
        html += '<div><p>' + stuff.family + '</p></div>\r\n'
        html += '<div><p>' + stuff.stories + '</p></div>\r\n'
        html += '</div>'

        return html;
    }


    function loadMyHouse(id) {
        //debugger;
        getHouseById(id, function (returnedStuff) {
            var returnedStuffAsHouseHtml = generateMyHouseHTML(returnedStuff);
            $('#houseDetails').html(returnedStuffAsHouseHtml);
        })

    }

    loadMyHouse(1);

})
*/

function getHouseById(id, callback) {
    var data = {
        ID: id
    }
    $.getJSON('http://localhost:8888/php1/houseById.php', data).then(function (thing) {
        callback(thing);
    });
}


$(document).ready(function () {

    function findImage(imageArray, imageLocation) {
        for (var x = 0; x < imageArray.length; x++) {
            var currentImage = imageArray[x];
            if (currentImage.imagePlacement == imageLocation) {
                return currentImage;
            }
        }
        return null;
    }

    function generateHouseHTML(house) {
        var html = '';
        html += '<div>'
        html += '<div class="content-text">\r\n'
        html += '<div class="houseInfo">' + house.houseInfo + '</div>\r\n'
        var images = house.houseImages;
        var fourthImage = findImage(images, 'fourthImage');

        if (fourthImage != null) {
            html += '<div class="imgHouse"><img src="' + fourthImage.houseImageURL + '"/></div>\r\n'
        }
        html += '<div>' + house.stories + '</div>\r\n'
        html += '<div>' + house.family + '</div>\r\n'
        html += '</div>'
        console.log(html);
        return html;
    }

    function loadMyHouse(id) {
        getHouseById(id, function (house) {
            var myHouseHTML = generateHouseHTML(house);
            $('#houseDetails').html(myHouseHTML);
        })
    }
    loadMyHouse(1);



})
