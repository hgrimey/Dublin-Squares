function aboutMerrionSection(id) {
    var viewport = '<div id="viewport"></div>';
    $('#mapViewport').html(viewport);
    loadMapPageJSON(id, function (features) {
        d3.xml(features.imageURL).mimeType("image/svg+xml").get(function (error, xml) {

            if (error) throw error;
            //loadArchitecturalFeaturesContainer(features);
            //add the loaded svg 
            document.querySelector('#viewport').appendChild(xml.documentElement.cloneNode(true));

            let map = d3.select('#viewport').select('svg');

            $('#exampleModalCenter').modal({
                keyboard: false,
                show: false //only show when click on the svg element
            })

            modalJSON(function (data) {


                for (var x = 0; x < data.length; x++) {
                    var currentItem = data[x];
                    //console.log(currentItem);

                    (function (currentItem) {
                        //d3.select('#' + currentItem.SVGelementId)
                        d3.select('#' + currentItem.SVGelementId)
                            .on("click", function (d, i) {

                                alert('#' + currentItem.SVGelementId + currentItem.modalTitle + currentItem.modalText);
                                $('.modal-title').html(currentItem.modalTitle)
                                $('.modal-body').html(currentItem.modalText)
                                $('#exampleModalCenter').modal('show')
                            })
                    })(currentItem)
                    //anonymous self executing function / closure
                    //so you're not only getting the last element of the array
                }
            })

            //            modalJSON(function (data) {
            //                for (var x = 0; x < data.length; x++) {
            //                    var currentItem = data[x];
            //                    //console.log(currentItem);
            //
            //                    (function (currentItem) {
            //                        console.log(currentItem.SVGelementId);
            //                        d3.select('#' + currentItem.SVGelementId)
            //                            .on("click", function (d, i) {
            //
            //
            //                                //alert(currentItem.SVGelementId);
            //                                $('#viewport').html(currentItem.modalText);
            //                                $('#hotspots g circle').css('fill', '#729AA1');
            //                                $('g#' + currentItem.SVGelementId + ' g circle').css('fill', '#F0F0F0');
            //                            })
            //                    })(currentItem)
            //                    //anonymous self executing function / closure
            //                    //so you're not only getting the last element of the array
            //                }
            //            })
        });




    });
}




//        var viewport = '<div id="viewport"></div>';
//        $('#mapViewport').html(viewport);
//
//        getSectionsForScollingJSON(function (sections) {
//    
//            console.log(sections);
//    
//            var sectionIndex = 0;
//            var progress = 0;
//            var progressAddition = 100 / sections.length;
//    
//            var html = '<div id="superContainer" class="scrollContainer"><div>';
//    
//            for (var x = 0; x < sections.length; x++) {
//                var currentSection = sections[x];
//                console.log(currentSection);
//                html += createSection(currentSection);
//            }
//            html += '</div></div>';
//    
//            $('#viewport').append(html);
//    
//            setTimeout(function () {
//
//                var controller = new ScrollMagic.Controller({
//                    globalSceneOptions: {
//                        triggerHook: 'onLeave',
//                    }
//                });
//
//                var myScroll = new IScroll('#superContainer', {
//                    scrollX: false,
//                    scrollY: true,
//                    scrollbars: true,
//                    useTransform: false,
//                    useTransition: false,
//                    probeType: 3,
//                    click: true
//                })
//    //
//                controller.scrollPos(function () {
//                    return -myScroll.y;
//                });
//                myScroll.on('scroll', function () {
//                    console.log('scroll detected')
//                    controller.update();
//                });
//    //
//                for (var x = 0; x < sections.length; x++) {
//                    var currentSection = sections[x];
//
//                    progress += progressAddition;
//                    //console.log(addSectionSM(currentSection, controller, progress));
//
//                    addSectionSM(currentSection, controller, sections.length)
//                }
//
//                }, 500);
//
//                })


function addSectionSM(section, controller, length) {
    //alert('hello!!! ' + section.pageId);
    //return;
    var sectionScrollMagic = new ScrollMagic.Scene({
            triggerElement: '#' + section.pageId,
        })
        .addTo(controller)
        //.addIndicators() // add indicators (requires plugin)
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
    addToHistory(loadMapAndMiniMapPage, 3);
    $('#mapViewport').html(aboutMerrionHTML());
}

function createMerrionHistorySection() {
    addToHistory(createMerrionHistorySection);
    $('#mapViewport').html(historyOfMerrionSection());

    ////the images (comparision) on the events page will load - wasn't working without the timeout function
    setTimeout(function () {
        initComparisons();
    }, 500);

}

function createMerrionArchitecturalFeaturesSection() {
    addToHistory(createMerrionArchitecturalFeaturesSection);
    $('#mapViewport').html(architecturalFeaturesMerrionHTML());
}

//chapter headings in the About section
function aboutMerrionHTML() {
    var html = '';
    html += '<div id="aboutMenu">';
    html += '<div id="architecturalFeatures" class="aboutMenuButton"><img src="img/about_georgian.jpg"/><div class="centeredText">Architectural Features</div></div>';
    html += '<div id="aboutMerrion" class="aboutMenuButton"><img src="img/about_history.jpg" /><div class="centeredText">About Merrion Square</div></div>';
    html += '<div id="styleHistoryMerrion" class="aboutMenuButton"><img src="img/about_events.jpg" /><div class="centeredText">History of Merrion Square</div></div>';
    return html;
}


//georgian dublin - with architectural feature buttons
function architecturalFeaturesMerrionHTML(features) {
    var html = '';
    html += '<div id="architecture">';
    html += '<div id="" class="georgianTitle"><h3>Georgian Dublin</h3></div>'
    html += '<div><p id="architecturalIntro">Tap the exterior or interior button below, then tap on the hotspots found on the image to view information about a feature.</p></div>'
    html += '<div id="architecturalBtn"><button class="intExt" class="" data-features="5">Exterior</button>\r\n'
    //    html += '<div id="intExt" class="" data-features="' + features.ID + '">Interior</div>\r\n'
    html += '<button class="intExt" class="" data-features="17">Interior</button></div>\r\n'
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

//nav bar terrace 
function generateMerrionSideMenuHTML(buttonArray) {
    var html = '';
    html += '<div>'
    html += '<ul id="sidemenu">\r\n'
    html += '<li><a class="backButton" href="#"><img class="navIcons" src="img/back_icon.svg"/></a></li>\r\n'
    html += '<li><a href="#"><img class="navIcons" src="img/terrace_icon.svg"/></a>\r\n'
    html += '<ul>\r\n'
    html += '<li id="container1"><p id="flyOutText">Tap on a button below to reveal the houses of your selected Terrace. Available houses are highligted grey.</p>\r\n'
    html += '<div class="btn-group">\r\n'
    html += '<button id="northBtn" class="terraceBtn" data-inline="true" data-terrace="N">North</button>'
    html += '<button id="southBtn" class="terraceBtn" data-inline="true" data-terrace="S">South</button>'
    html += '<button id="eastBtn" class="terraceBtn" data-inline="true" data-terrace="E">East</button>'
    html += '<button id="westBtn" class="terraceBtn" data-inline="true" data-terrace="W">West</button>'
    html += '</div><div id="menuButtons"></div>'
    html += '</li></ul></li>\r\n'
    html += '<li><a class="aboutMerrion" href="#"><img class="navIcons" src="img/about_icon.svg"/></a>\r\n'
    html += '</li>\r\n'
    html += '<li><a class="witnessLetter" href="#"><img class="navIcons" src="img/letter_icon.svg"/></a>\r\n'
    html += '</li>\r\n'
    html += '<li><a class="notableFigures" href="#"><img class="navIcons" src="img/nf_icon.svg"/></a></li>\r\n'
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

            var exteriorSVG = $('svg#architecturalExterior');

            var houseHotspots = exteriorSVG.find('#hotspots');
            console.log(houseHotspots);

            var hotspots = houseHotspots.children();
            console.log(hotspots);


            modalJSON(function (data) {
                for (var x = 0; x < data.length; x++) {
                    var currentItem = data[x];
                    //console.log(currentItem);

                    (function (currentItem) {
                        console.log(currentItem.SVGelementId);
                        d3.select('#' + currentItem.SVGelementId)
                            .on("click", function (d, i) {


                                //alert(currentItem.SVGelementId);
                                $('#archText').html(currentItem.modalText);
                                $('#hotspots g circle').css('fill', '#729AA1');
                                $('g#' + currentItem.SVGelementId + ' g circle').css('fill', '#F0F0F0');
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

    if (menuItems.available == 1) {
        html += ' class="activeHouse"';
    }

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

//Witness Account
function elsieLetterPage() {

    //addToHistory(elsieLetterPage);
    $('#mapViewport').html('<div id="viewport"><section class="panel one"><img id="elsiePhoto" style="margin-top:70px" src="img/elsiePhoto.png"/><div class="introTextBlock "><p id="introText "> On Wednesday, 27th May 2015, Dublin City Council\'s Public Library Service took possession of a copy of a rare eye-witness account of the outbreak of the 1916 Easter Rising. The account was in the form of a letter written by Elsie McDermid, a popular opera singer of the era, to her mother in England on the occasion of Elsie\'s visit to Dublin. <br> <br> She was in Dublin to perform in Gilbert and Sullivan shows at Dublin’s Gaiety Theatre with the D\'Oyly Carte Opera Company. However, the performances were cancelled as a result of the dramatic outbreak of the Easter Rising on Monday 24th April 1916.</p><img id="scrollUp" style="margin-top:-120px" src="img/scrollAnimation.gif"/></div></section><section class="panel one" id="sec1"><div class="sectionTextBlock"><p id="sec1Text"></p></div></section><section class="panel two" id="sec2"><div class="sectionTextBlock"><p id="sec2Text"></p></div></section><section class="panel three" id="sec3"><div class="sectionTextBlock"><p id="sec3Text"></p></div></section><section class="panel four" id="sec4"><div class="sectionTextBlock"><p id="sec4Text"></p></div></section><section class="panel five" id="sec5"><div class="sectionTextBlock"><p id="sec5Text"></p></div></section><section class="panel six" id="sec6"><div class="sectionTextBlock"><p id="sec6Text"></p></div></section><section class="panel seven" id="sec7"><div class="sectionTextBlock"><p id="sec7Text"></p></div></section></div>');

    setUpElsiePage();
}

function loadingMenuButtons(directionTerrace) {
    loadMenuButtons(function (buttons) {
        var filtered = _.filter(buttons, function (button) {
            return button.terrace == directionTerrace
        });
        var html = '';
        html += '<table><tr>';

        for (var x = 0; x < filtered.length; x++) {
            if (x % 7 == 0 && x > 0) {
                html += '</tr><tr>';
            }
            html += renderHouseMenuItem(filtered[x]);
        }
        html += '</tr></table>';

        $('#menuButtons').html(html);
        return html;
    });
}


function initializeSideMenu() {

    $('#menuwrapper').html(generateMerrionSideMenuHTML());

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

    $('#menuwrapper').on('click', '.terraceBtn', function (e) {
        var terrace = $(this).data('terrace');
        console.log(terrace);
        $('.terraceBtn').removeClass('active');
        var thisBtn = $(this);
        thisBtn.addClass('active');
        loadingMenuButtons(terrace);
    });



    $('#menuwrapper').on('click', '.tableBtn', function (e) {
        e.preventDefault();
        var houseNumber = $(this).data('house');
        var destination = $(this).data('destination');
        console.log('Button for house ' + houseNumber);
        console.log('Button destination ' + destination);
        loadHouse(destination, function (house) {
            $('#mapViewport').html(buildHouseHTML(house));
            if (destination == 4) {
                createHouseSVG(18);
            }
            if (destination == 2) {
                createHouseSVG(19);
            }
            if (destination == 6) {
                createHouseSVG(20);
            }
            if (destination == 7) {
                createHouseSVG(21);
            }
            if (destination == 8) {
                createHouseSVG(22);
            }
        });
    });

    $('#menuwrapper').on('click', '.notableFigures', function (e) {
        e.preventDefault();
        $('#progress').hide();
        $('.progress').hide();
        //alert('notable figs clicked');

        notableFigures();
        loadNotableFiguresJSON(4, function (thing) {
            $('#notableFigureToggle').html(loadNotableFiguresContainer(thing));
            $().focus();
        });
    });


    $('#menuwrapper').on('click', '.aboutMerrion', function (e) {
        e.preventDefault();
        $('.progress').hide();
        console.log('history');
        createAboutMerrionSection();
    });

}
