function aboutMerrionSection() {
    //debugger;
    addToHistory(aboutMerrionSection);
    var viewport = '<div id="viewport"></div>';
    $('#mapViewport').html(viewport);
    //$('#menuwrapper').hide();
    //$('#viewport').show();

    getSectionsForScollingJSON(function (sections) {

        console.log(sections);

        var sectionIndex = 0;
        var progress = 0;
        var progressAddition = 100 / sections.length;


        for (var x = 0; x < sections.length; x++) {
            var currentSection = sections[x];
            console.log(currentSection);
            createSection(currentSection);
        }

        setTimeout(function () {

            var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave',
                }
            });

            for (var x = 0; x < sections.length; x++) {
                var currentSection = sections[x];

                progress += progressAddition;
                //console.log(addSectionSM(currentSection, controller, progress));

                addSectionSM(currentSection, controller, sections.length)
            }
        }, 500);

    })
}

function addSectionSM(section, controller, length) {
    //alert('hello!!! ' + section.pageId);

    var sectionScrollMagic = new ScrollMagic.Scene({
            triggerElement: '#' + section.pageId,
        })
        .addTo(controller)
        .addIndicators() // add indicators (requires plugin)
        //.setPin('#' + section.pageId) //everything added to scene needs to go before
        .on('update', function (event) {
            var p = event.target.controller().info('scrollPos');
            var size = event.target.controller().info('size');
            var info = event.target.controller().info();

            var total = (size * (length - 1));
            var one = total / 100;
            var current = (p / one).toFixed(0);

            $('.progress-bar').css('width', current + '%')
            //console.log(event.target.controller().info("scrollPos"))
        })
    /////// if max = something (400px) - how to access max//////

    sectionScrollMagic.update();
}


function createAboutMerrionSection() {
    addToHistory(createAboutMerrionSection);
    $('#mapViewport').html(aboutMerrionHTML());
}

function createMerrionHistorySection() {
    addToHistory(createMerrionHistorySection);
    $('#mapViewport').html(historyOfMerrionSection());

    //
    //maybe set timeout?
    setTimeout(function () {
        initComparisons();
    }, 500);

}

function createMerrionArchitecturalFeaturesSection() {
    addToHistory(createMerrionArchitecturalFeaturesSection);
    $('#mapViewport').html(architecturalFeaturesMerrionHTML());
}

function aboutMerrionHTML() {
    var html = '';
    html += '<div id="aboutMenu">';
    html += '<div id="architecturalFeatures" class="aboutMenuButton"><img src="img/about_georgian.jpg"/><div class="centeredText">Architectural Features</div></div>';
    html += '<div id="aboutMerrion" class="aboutMenuButton"><img src="img/about_history.jpg" /><div class="centeredText">About Merrion Square</div></div>';
    html += '<div id="historyMerrion" class="aboutMenuButton"><img src="img/about_events.jpg" /><div class="centeredText">History of Merrion Square</div></div>';
    return html;
}

function historyOfMerrionSection() {
    var html = '';
    // html += '<div id="history">';
    //html += '<div id="" class="" ><h3>MERRION SQUARE HISTORY</h3></div></div>';
    html += '<div class="img-comp-container">';
    html += '<div class="img-comp-img">';
    html += '<img src="img/test/img_snow.jpg" width="1366" height="1024">';
    html += '</div>';
    html += '<div class="img-comp-img img-comp-overlay">';
    html += '<img src="img/test/img_forest.jpg" width="1366" height="1024">';
    html += '</div>';
    html += '</div>';

    return html;
}

function architecturalFeaturesMerrionHTML(features) {
    var html = '';
    html += '<div id="architecture">';
    html += '<div id="" class="" ><h3>MERRION SQUARE ARCHITECTURAL FEATURES</h3></div>'
    html += '<div><a class="intExt" class="" data-features="5">Exterior</a></div>\r\n'
    //    html += '<div id="intExt" class="" data-features="' + features.ID + '">Interior</div>\r\n'
    html += '<div><a class="intExt" class="" data-features="17">Interior</a></div>\r\n'
    html += '</div>';
    html += '<div id="architectural_features"></div>';
    return html;
}

function loadArchitecturalFeaturesContainer(features) {
    var html = '';
    html += '<div class="image">'
    //html += '<img class="sticky" src="">'
    html += '</div>'
    html += '<div class="text">'
    html += '<p id="testingText" style="width: 375px">what</p>'
    html += '</div>'
    return html;
}

function generateSideMenuHTML(buttonArray) {
    var html = '';
    html += '<div>'
    html += '<ul id="sidemenu">\r\n'
    html += '<li><a  class="backButton" href="#">Back</a></li>\r\n'
    html += '<li><a href="#">Terrace</a>\r\n'
    html += '<ul>\r\n'
    html += '<li id="container1">Terraces\r\n'
    html += '<div class="btn-group">\r\n'
    html += '<button id="northBtn" class="terraceBtn" data-inline="true" data-terrace="N">North</button>'
    html += '<button id="southBtn" class="terraceBtn" data-inline="true" data-terrace="S">South</button>'
    html += '<button id="eastBtn" class="terraceBtn" data-inline="true" data-terrace="E">East</button>'
    html += '<button id="westBtn" class="terraceBtn" data-inline="true" data-terrace="W">West</button>'
    html += '</div><div id="menuButtons"></div>'
    html += '</li></ul></li>\r\n'
    html += '<li><a class="aboutMerrion" href="#">About</a>\r\n'
    html += '</li>\r\n'
    html += '<li><a class="witnessLetter" href="#">Letter</a>\r\n'
    html += '</li>\r\n'
    html += '<li><a class="notableFigures" href="#">NF</a></li>\r\n'
    html += '</ul>\r\n'
    html += '</div>'
    return html;
}

/*
function load() {
    modalJSON(function (data) {
        for (var x = 0; x < data.length; x++) {
            var currentItem = data[x];
            //console.log(currentItem);

            (function (currentItem) {
                d3.select('#' + currentItem.SVGelementId)
                    .on("click", function (d, i) {
                        console.log('Current item' + currentItem);
                        $('#architecturalFeatures').html(currentItem.modalText)
                    })
            })(currentItem)
            //anonymous self executing function / closure
            //so you're not only getting the last element of the array
        }
    })
}
*/

function architecturalSection(id, callback) {

    loadMapPageJSON(id, function (features) {
        d3.xml(features.imageURL).mimeType("image/svg+xml").get(function (error, xml) {

            if (error) throw error;
            //loadArchitecturalFeaturesContainer(features);
            //add the loaded svg 
            document.querySelector('#architectural_features').appendChild(xml.documentElement.cloneNode(true));

            let map = d3.select('#architectural_features').select('svg');

            modalJSON(function (data) {
                for (var x = 0; x < data.length; x++) {
                    var currentItem = data[x];
                    //console.log(currentItem);

                    (function (currentItem) {
                        d3.select('#' + currentItem.SVGelementId)
                            .on("click", function (d, i) {
                                //console.log('Current item' + currentItem);
                                //alert(currentItem.SVGelementId)
                                $('#archText').html(currentItem.modalText);
                            })
                    })(currentItem)
                    //anonymous self executing function / closure
                    //so you're not only getting the last element of the array
                }
            })
        });
    });
}



function renderHouseMenuItem(menuItems) {
    var html = '';
    html = '<td';
    /*
    if (menuItems.available) {
        html += ' class="active"';
    }
    */
    html += '><a class="tableBtn" href="#" data-destination="' + menuItems.destination + '" data-house="' + menuItems.houseNumber + '">' + menuItems.houseNumber + '</a></td>';
    console.log(html);
    return html;
}

function loadMenu() {
    console.log('menu buttons loaded');
    loadMenuButtons(function (buttons) {
        renderHouseMenuItem(buttons);
        console.log(renderHouseMenuItem(buttons));
    });
}

function elsieLetterPage() {
    addToHistory(elsieLetterPage);
    $('#mapViewport').html('<div id="viewport"><section class="panel one"><div class="introTextBlock "><p id="introText "> On Wednesday, 27th May 2015, Dublin City Council\'s Public Library Service took possession of a copy of a rare eye-witness account of the outbreak of the 1916 Easter Rising. The account was in the form of a letter written by Elsie McDermid, a popular opera singer of the era, to her mother in England on the occasion of Elsie\'s visit to Dublin. <br> <br> She was in Dublin to perform in Gilbert and Sullivan shows at Dublin’s Gaiety Theatre with the D\'Oyly Carte Opera Company. However, the performances were cancelled as a result of the dramatic outbreak of the Easter Rising on Monday 24th April 1916.</p></div><div class="scrollAnimation"></div></section><section class="panel one" id="sec1"><div class="sectionTextBlock"><p id="sec1Text"></p></div></section><section class="panel two" id="sec2"><div class="sectionTextBlock"><p id="sec2Text"></p></div></section><section class="panel three" id="sec3"><div class="sectionTextBlock"><p id="sec3Text"></p></div></section><section class="panel four" id="sec4"><div class="sectionTextBlock"><p id="sec4Text"></p></div></section><section class="panel five" id="sec5"><div class="sectionTextBlock"><p id="sec5Text"></p></div></section><section class="panel six" id="sec6"><div class="sectionTextBlock"><p id="sec6Text"></p></div></section><section class="panel seven" id="sec7"><div class="sectionTextBlock"><p id="sec7Text"></p></div></section></div>');
    setUpElsiePage();
}


function initializeSideMenu() {

    $('#menuwrapper').html(generateSideMenuHTML());

    $('#menuwrapper').off();

    $('#menuwrapper').on('click', '.backButton', function (e) {
        e.preventDefault();
        goBack();
        console.log('Back Button clicked!!');
    });

    $('#menuwrapper').on('click', '.witnessLetter', function (e) {
        e.preventDefault();
        $('#progress').show();
        $('.progress').show();
        console.log('WitnessLetter button clicked!!');
        elsieLetterPage();

    });

    $('#menuwrapper').on('click', '#westBtn', function (e) {
        e.preventDefault();

        $('#menuwrapper ul li ul li button#westBtn').addClass('active');
        $('#menuwrapper ul li ul li button#northBtn').removeClass('active');
        $('#menuwrapper ul li ul li button#southBtn').removeClass('active');
        $('#menuwrapper ul li ul li button#eastBtn').removeClass('active');
        //$('#menuwrapper ul li ul li button').css('class', 'active');

        console.log('west button clicked');
        var terrace = $(this).data('terrace');
        console.log(terrace);
        var html = '';
        html += '<table><tr>';

        loadMenuButtons(function (buttons) {

            for (var x = 0; x < buttons.length; x++) {

                if (terrace == buttons[x].terrace) {
                    console.log('west');

                    if (x % 6 == 5 && x < buttons.length) {
                        html += '</tr><tr>';
                    }
                    var currentItem = buttons[x];
                    var itemHTML = renderHouseMenuItem(currentItem);
                    html += itemHTML;

                    console.log(html);

                }
            }
            html += '</tr></table>';
            $('#menuButtons').html(html);
        })
    });
    $('#menuwrapper').on('click', '#eastBtn', function (e) {
        e.preventDefault();
        $('#menuwrapper ul li ul li button#eastBtn').addClass('active');
        $('#menuwrapper ul li ul li button#northBtn').removeClass('active');
        $('#menuwrapper ul li ul li button#southBtn').removeClass('active');
        $('#menuwrapper ul li ul li button#westBtn').removeClass('active');
        var terrace = $(this).data('terrace');
        console.log(terrace);
        var html = '';
        html += '<table><tr>';

        loadMenuButtons(function (buttons) {

            for (var x = 0; x < buttons.length; x++) {

                if (terrace == buttons[x].terrace) {
                    console.log('east');

                    if (x % 6 == 5 && x < buttons.length) {
                        html += '</tr><tr>';
                    }
                    var currentItem = buttons[x];
                    var itemHTML = renderHouseMenuItem(currentItem);
                    html += itemHTML;

                    console.log(html);

                }
            }
            html += '</tr></table>';
            $('#menuButtons').html(html);
            //$('#menuButtons').html('north button clicked!!');
            console.log('east button clicked');
        });
    });
    $('#menuwrapper').on('click', '#southBtn', function (e) {
        e.preventDefault();
        $('#menuwrapper ul li ul li button#southBtn').addClass('active');
        $('#menuwrapper ul li ul li button#northBtn').removeClass('active');
        $('#menuwrapper ul li ul li button#westBtn').removeClass('active');
        $('#menuwrapper ul li ul li button#eastBtn').removeClass('active');
        var terrace = $(this).data('terrace');
        console.log(terrace);
        var html = '';
        html += '<table><tr>';

        loadMenuButtons(function (buttons) {

            for (var x = 0; x < buttons.length; x++) {

                if (terrace == buttons[x].terrace) {
                    console.log('south');

                    if (x % 6 == 5 && x < buttons.length) {
                        html += '</tr><tr>';
                    }
                    var currentItem = buttons[x];
                    var itemHTML = renderHouseMenuItem(currentItem);
                    html += itemHTML;

                    console.log(html);

                }
            }
            html += '</tr></table>';
            $('#menuButtons').html(html);
            //$('#menuButtons').html('north button clicked!!');
            console.log('south button clicked');
        });
        console.log('south button clicked');
    });
    $('#menuwrapper').on('click', '#northBtn', function (e) {
        e.preventDefault();
        $('#menuwrapper ul li ul li button#northBtn').addClass('active');
        $('#menuwrapper ul li ul li button#westBtn').removeClass('active');
        $('#menuwrapper ul li ul li button#southBtn').removeClass('active');
        $('#menuwrapper ul li ul li button#eastBtn').removeClass('active');
        var terrace = $(this).data('terrace');
        console.log(terrace);
        var html = '';
        html += '<table><tr>';

        loadMenuButtons(function (buttons) {

            for (var x = 0; x < buttons.length; x++) {

                if (terrace == buttons[x].terrace) {
                    console.log('north');

                    if (x % 6 == 5 && x < buttons.length) {
                        html += '</tr><tr>';
                    }
                    var currentItem = buttons[x];
                    var itemHTML = renderHouseMenuItem(currentItem);
                    html += itemHTML;

                    console.log(html);

                }
            }
            html += '</tr></table>';
            $('#menuButtons').html(html);
            //$('#menuButtons').html('north button clicked!!');
            console.log('north button clicked');
        });
    });

    $('#menuwrapper').on('click', '.tableBtn', function (e) {
        e.preventDefault();
        var houseNumber = $(this).data('house');
        var destination = $(this).data('destination');
        console.log('Button for house ' + houseNumber);
        console.log('Button destination ' + destination);
        loadHouse(destination, function (house) {
            $('#mapViewport').html(buildHouseHTML(house));
        });
    });

    $('#menuwrapper').on('click', '.notableFigures', function (e) {
        e.preventDefault();
        $('#progress').hide();
        $('.progress').hide();
        console.log('Notable Figure button clicked!!');

        notableFigures();
    });
    //notable figures name click event
    $('#menuwrapper').on('click', '#name', function (e) {
        e.preventDefault();
        var containerID = $(this).data("container");
        console.log(containerID);
        loadNotableFiguresJSON(containerID, function (thing) {
            $('#notableFigureToggle').html(loadNotableFiguresContainer(thing));
        });
    });

    $('#menuwrapper').on('click', '.aboutMerrion', function (e) {
        e.preventDefault();
        $('.progress').hide();
        console.log('history');
        createAboutMerrionSection();
    });

    $('#menuwrapper').on('click', '#historyMerrion', function (e) {
        e.preventDefault();
        initComparisons();
        createMerrionHistorySection();
    });

    $('#menuwrapper').on('click', '#architecturalFeatures', function (e) {
        e.preventDefault();
        architecturalFeaturesJSON(function (features) {
            $('#mapViewport').html(architecturalFeaturesMerrionHTML(features));
        })
        //createMerrionArchitecturalFeaturesSection();
    });

    $('#menuwrapper').on('click', '.intExt', function (e) {
        e.preventDefault();
        var features = $(this).data('features');
        console.log(features);
        //$('#architectural_features').html(loadArchitecturalFeaturesContainer());

        //        architecturalFeaturesJSON(id, function (features) {
        //            console.log('IT WORKED');
        //            $('#architectural_features').html(loadArchitecturalFeaturesContainer(features));
        //        });
        architecturalSection(features);
        loadArchitecturalFeaturesContainer();

        $('#architectural_features').html('<div id="hello">' + architecturalSection(features) + '</div>');
        $('#architectural_features').append('<div id="archText"></div>');
    });

    $('#menuwrapper').on('click', '#aboutMerrion', function (e) {
        e.preventDefault();
        //////////////////////////$('.progress').show(); caused whole file to show errors in brackets/////////////
        $('.progress').show();
        aboutMerrionSection();
    });
}
