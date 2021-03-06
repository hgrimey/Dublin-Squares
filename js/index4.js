//about Merrion Square Section
function addSectionHTML(page) {
    //$('.SideTab').css('display', 'none');
    //$('.SideTab').hide();
    var html = '';
    //html += '<div id="viewport">'
    html += '<section class="' + page.sectionClass + '" id="' + page.pageId + '" style="background-image: url(' + getImageUrl(page.pageImgURL) + ')">'
    html += '<h1>' + page.pageHeader + '</h1>'
    html += '<button class="sectionButton" onclick="sectionButtonClick(' + '&#39;sidetab-' + page.pageId + '&#39;)"> More Info </button>';
    html += '<div class="SideTab" id="sidetab-' + page.pageId + '"><p class="aboutMerrionText">' + page.pageText + '</p></div>';
    html += '</section>'
    //html += '</div>'
    console.log(html);
    return html;
}

function sectionButtonClick(elementid) {
    console.log(elementid);

    //$('#' + elementid).toggleClass('d-none');
    //$('.SideTab').toggle();
    $('.SideTab').toggleClass('SideTab-view');
}

function createSection(section) {
    return addSectionHTML(section);
}


//notable figures html
function loadHeadersHTML(notableFiguresParam) {
    // addToHistory(loadHeadersHTML);
    var html = '';
    html += '<div class="buttonGroup" style="position:fixed; z-index:2;background-color:white;">'
    //html += '<div id="notableFiguresSection">'
    for (var x = 0; x < notableFiguresParam.length; x++) {
        var currentNotableFigure = notableFiguresParam[x];
        html += '<button id="name" class="title-name" data-container="' + currentNotableFigure.ID + '">' + currentNotableFigure.personName + '</button>\r\n'
    }
    html += '</div>'
    html += '<div id="notableFigureToggle"></div>'
    console.log(html);
    return html;
}

function loadNotableFiguresContainer(notableFig) {
    var html = '';
    html += '<div class="image">'
    html += '<img class="sticky" src="' + getImageUrl(notableFig.notableFigImgURL) + '">'
    html += '</div>'
    html += '<div class="text">'
    html += '<p>' + notableFig.notableFigText + '</p>'
    html += '</div>'
    return html;
}

function loadNotableFiguresSection() {
    loadHeadersJSON(function (thing) {
        console.log(loadHeadersHTML(thing));
        addToHistory(loadHeadersHTML);
        $('.progress').hide();
        $('#notableFigureContainer').html(loadHeadersHTML(thing));
    })
}

function loadNotableFiguresPage() {
    html = '';
    html += '<div id="notableFigureContainer">'
    html += '</div>'
    return html;
}

function notableFigures() {
    $('#mapViewport').html(loadNotableFiguresPage());
    loadNotableFiguresSection();
}

//map and modal html
function mapAndModalHTML(map) {
    var html = '';

    html += '<div id="map"></div><div id="minimap"></div>'
    html += '<div id="leftButton" style="display:none"><button>Left</button></div>'
    html += '<div id="rightButton" style = "display:none"><button>Right</button></div>'
    html += '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">';
    html += '<div class="modal-dialog modal-dialog-centered" role="document">';
    html += '<div class="modal-content" >';
    html += '<div class="modal-header">';
    html += '<h3 class="modal-title" id="exampleModalCenterTitle" ></h3>';
    html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    html += '<span aria-hidden="true">&times;</span></button></div>';
    html += '<div class="modal-body"></div>';
    html += '</div></div>';

    html += '</div>';
    return html;


}

//landing page modal - dublin city map page
function landingPageModal() {
    var html = '';

    html += '<div class="modal fade" id="landingPageModalCenter" tabindex="-1" role="dialog" aria-labelledby="landingPageModalCenterTitle" aria-hidden="true">';
    html += '<div class="modal-dialog modal-dialog-centered" role="document">';
    html += '<div class="modal-content" >';


    html += '<div class="welcome-modal-header">';
    html += '<h3 class="welcome-modal-title" id="welcome-landingPageModalCenterTitle" >Welcome to Dublin Squares</h3>';
    html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    html += '<span aria-hidden="true">&times;</span></button></div>';
    html += '<div class="welcome-modal-body">Explore Dublin City by tapping on the interactive points on the map. <br> To discover the hidden details and history of a Georgian Square, simply tap on a Square. Currently, Merrion Square is the only available option but we are working to add content to the other Georgian Squares of Dublin. <br> Bain Sult! (Enjoy!)</div>';

    html += '</div></div>';

    return html;

}


function merrionModal() {
    var html = '';

    html += '<div class="modal fade" id="MerrionModalCenter" tabindex="-1" role="dialog" aria-labelledby="MerrionModalCenterTitle" aria-hidden="true">';
    html += '<div class="modal-dialog modal-dialog-centered" style="max-width: 1000px; max-height: 1000px" role="document">';
    html += '<div class="modal-content" >';
    html += '<div class="merrion-modal-header">';
    //    html += '<h3 class="modal-title" id="MerrionModalCenterTitle" ></h3>';
    html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    html += '<span aria-hidden="true">&times;</span></button></div>';
    html += '<div class="merrion-modal-body"><img id="merrionOnboarding" style="width: 100%; height: 300%;" src="img/onboardingMS.png"/></div>';
    html += '<div class="merrion-modal-body"></div>';
    html += '</div></div>';

    return html;
}



//house page html
function findImage(imageArray, imageLocation) {
    for (var x = 0; x < imageArray.length; x++) {
        var currentImage = imageArray[x];
        if (currentImage.imagePlacement == imageLocation) {
            return currentImage;
        }
    }
    return null;
}

//function buildTimeline(timelineArray) {
//    var html = '';
//    html += '<div class="timeline"><ul>\r\n'
//    for (var x = 0; x < timelineArray.length; x++) {
//        var timelineThing = timelineArray[x];
//        html += '<li><div><h2>' + timelineThing.houseTime + '</h2><br><p>' + timelineThing.timelineText + '</p></div></li>\r\n'
//    }
//    html += '</ul></div>'
//    console.log(html);
//    return html;
//}


function buildHouseHTML(house) {
    console.log(house);
    var html = '';
    html += '<div class="content-text">\r\n'
    html += '<h1 class="top">' + house.houseTitle + '</h1>\r\n'

    //    html += '<div class="imgHouse" data-img-url="' + getImageUrl(house.houseImgURL) + '"></div>'
    //    var timeline = house.houseTimeline;
    var images = house.houseImages;



    var titleImage = findImage(images, 'titleImage');

    if (titleImage != null) {
        html += '<div class="imgHouse" data-img-url="' + getImageUrl(titleImage.houseImageURL) + '"></div>\r\n';

        console.log(getImageUrl(titleImage.houseImageURL));
        //<img class="titleImage" src="' + getImageUrl(titleImage.houseImageURL) + '"/></div><div id="callToAction"></div>\r\n'
    }
    //html += '<img id="scrollUp" style="margin-top:-120px" src="img/scrollUp2.gif"/>'
    //html += '<h4 id="placeHolderScroll">Scroll Up</h4>'
    html += '<h2 id="91one"></h2>\r\n'
    html += '<div class="houseInfo">' + house.houseInfo + '</div>\r\n'
    //html += '<h2 id="' + '91two' + '"></h2>\r\n'
    //html += '<p><a href="#91top"></a></p>\r\n'
    //html += '<div class="houseInfo">' + house.houseInfo + '</div>\r\n'
    //html += '<h2 id="91three"></h2>\r\n'
    //html += '<p><a href="#91top"></a></p>\r\n'

    var secondImage = findImage(images, 'secondImage');

    if (secondImage != null) {
        html += '<div class="imgHouse"><img src="' + getImageUrl(secondImage.houseImageURL) + '" class="contentImg"/></div>\r\n'
    }

    html += '<div class="houseFamily">' + house.family + '</div>\r\n'
    //html += '<h2 id="91four"></h2>\r\n'
    // html += '<p><a href="#91top"></a></p>\r\n'

    var thirdImage = findImage(images, 'thirdImage');

    if (thirdImage != null) {
        html += '<div class="imgHouse"><img src="' + getImageUrl(thirdImage.houseImageURL) + '" class="contentImg"/></div>\r\n'
    }


    html += '<div class="houseStories">' + house.stories + '</div>\r\n'

    var fourthImage = findImage(images, 'fourthImage');
    if (fourthImage != null) {
        html += '<div class="imgHouse"><img src="' + getImageUrl(fourthImage.houseImageURL) + '" class="contentImg"/></div>\r\n'
    }
    //debugger;
    //    html += buildTimeline(timeline);

    html += '</div>'
    console.log(html);
    return html;
}

function loadHouse(id, callback) {
    getHouseById(id, function (housey) {
        console.log('this is my housey', housey);
        //var returnedHTML = buildHouseHTML(housey);
        addToHistory(loadMapAndMiniMapPage, 3);
        callback(housey);
        //$('#houseDetails').html(returnedHTML);
    });
}

//animated SVGs on each house page
function createHouseSVG(id, callback) {

    loadMapPageJSON(id, function (features) {
        var url = $('#mapViewport .imgHouse').data('img-url');
        console.log(url);
        d3.xml(features.imageURL).mimeType('image/svg+xml').get(function (error, xml) {
            if (error) throw error;

            //$('#mapViewport .imgHouse').html( )
            document.querySelector('#mapViewport .imgHouse').appendChild(xml.documentElement.cloneNode(true));

            //svg is attached to DOM

            var houseSVG = $('.imgHouse svg')

            var windowContainer = houseSVG.find('#windows');

            var windows = windowContainer.children();

            var random = _.random(0, windows.length - 1);

            windows.each(function (index) {
                if (index === random) {

                    var window = $(this);
                    var toToggle = window.find('.lightOn');
                    //toToggle.toggleClass('lightsOn');

                    setTimeout(function () {
                        toToggle.css('fill', '#FFD052');
                    }, 2500);

                    //setInterval for on and off not working

                }
            })

        })
    })
}
