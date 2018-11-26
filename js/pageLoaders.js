var historyStack = [];

function addToHistory(func, id) {
    var historyItem = {
        func: func,
        id: id
    };
    console.log('current history stack', historyStack);
    console.log('adding to history', historyItem);
    historyStack.push(historyItem);
    console.log('new history stack', historyStack);

}

function goBack() {
    var currentPage = historyStack.pop();
    console.log('this is my current page', currentPage);
    var previousPage = historyStack.pop();
    console.log('this is my previous page', previousPage);

    if (previousPage === undefined) {
        loadLandingPage();
    } else {
        var loadFunction = previousPage.func;
        console.log('loading my previous page');
        loadFunction(previousPage.id);
    }

}
/*
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



*/

function loadLandingPage() {
    addToHistory(loadLandingPage);
    $('#menuwrapper').hide();
    $('#progress').hide();
    $('.progress').hide();
    console.log('landing page loaded');
    $('#mapViewport').html(mapAndModalHTML());
    $('#mapViewport').css('left', 0);
    landingPageMapJSON(function (map) {
        d3.xml(map.imageURL).mimeType("image/svg+xml").get(function (error, xml) {
            if (error) throw error;

            document.querySelector('#map').appendChild(xml.documentElement.cloneNode(true));
            let map = d3.select('#map').select('svg');
            let mapWidth = parseFloat(map.style('width'));
            let mapHeight = parseFloat(map.style('height'));
            let transform = d3.zoomIdentity.translate(0, 0).scale(3);
            let zoom = d3.zoom()
                .scaleExtent([2, 5])
                .translateExtent([
                                        [0, 0],
                                        [mapWidth, mapHeight]
                                    ])
                .on('zoom', zoomed);

            map.call(zoom)
                .call(zoom.transform, transform);

            function zoomed() {
                //console.log(d3.event.transform);
                let transform = d3.event.transform;
                //saves everything in the modifiedTransform
                let modifiedTransform = d3.zoomIdentity.scale(1 / transform.k).translate(-transform.x, -transform.y);

                let mapMainContainer = map.select('#main_container')
                    .attr('transform', transform);
            }

            /* click event to change page */
            imageMapAreaJSON(function (mapData) {
                for (var x = 0; x < mapData.length; x++) {
                    var currentMapItem = mapData[x];
                    //console.log(currentMapItem);
                    (function (currentMapItem) {
                        d3.select('#' + currentMapItem.mapSvgElementId).on("click", function (d, i) {
                            console.log('Current item svgElementid' + currentMapItem.mapSvgElementId);
                            console.log('Current item is miniMap? ' + currentMapItem.miniMap);
                            console.log('Current item destination id = ' + currentMapItem.destination);
                            console.log('Current item linkType ' + currentMapItem.linkType);

                            if (currentMapItem.linkType == 'map' && currentMapItem.miniMap == 1) {

                                loadMapAndMiniMapPage(currentMapItem.destination);

                            } else if (currentMapItem.linkType == 'map' && currentMapItem.miniMap == 0) {

                                loadMapPage(currentMapItem.destination);

                            } else if (currentMapItem.linkType == 'house') {

                                loadHousePage(currentMapItem.destination);

                            } else {
                                alert('Unrecognised linkType! ' + linkType);
                            }

                        });
                    })(currentMapItem);
                }
            })

            $('#exampleModalCenter').modal({
                keyboard: false,
                show: false //only show when click on the svg element
            })

            modalJSON(attachModals)
        });

    });
}

function loadMapAndMiniMapPage(id) {

    initializeSideMenu();
    //console.log(addToHistory(loadMapAndMiniMapPage, id)); console.log was adding to history twice
    addToHistory(loadMapAndMiniMapPage, id);
    $('#menuwrapper').show();
    $('#progress').hide();
    $('.progress').hide();
    console.log('next map page loaded');

    loadMapPageJSON(id, function (map) {
        $('#mapViewport').html(mapAndModalHTML(map));
        $('#mapViewport').css('left', '55px');
        d3.xml(map.imageURL).mimeType("image/svg+xml").get(function (error, xml) {

            if (error) throw error;

            //add the loaded svg 
            document.querySelector('#map').appendChild(xml.documentElement.cloneNode(true));
            document.querySelector('#minimap').appendChild(xml.documentElement.cloneNode(true));

            //use d3 to select the svg element
            //use the main map svg image and use it for the minimap image but a smaller size
            let map = d3.select('#map').select('svg');
            let minimap = d3.select('#minimap').select('svg')
                .attr('width', 200);

            let minimapRect = minimap.append('rect')
                .attr('id', 'minimapRect');

            //converts a dtring to a number.
            let mapWidth = parseFloat(map.style('width'));
            let mapHeight = parseFloat(map.style('height'));

            let transform = d3.zoomIdentity.translate(0, 0).scale(3);

            //using d3 zoom to create a max zoom in and out
            let zoom = d3.zoom()
                .scaleExtent([2, 5]) //maximun level of zoom out, maximum level of zoom in
                //x and y are positioned at 0 by using the map width and height. Limit panning.
                .translateExtent([
                            [0, 0],
                            [mapWidth, mapHeight]
                        ])
                .on('zoom', zoomed);

            //call to zoom for map
            map.call(zoom)
                .call(zoom.transform, transform);


            function zoomed() {
                //console.log(d3.event.transform);
                let transform = d3.event.transform;
                //saves everything in the modifiedTransform
                let modifiedTransform = d3.zoomIdentity.scale(1 / transform.k).translate(-transform.x, -transform.y);

                //panning and zooming
                let mapMainContainer = map.select('#main_container')
                    .attr('transform', transform);


                minimapRect
                    //get the bounding box
                    .attr('width', mapMainContainer.node().getBBox().width)
                    .attr('height', mapMainContainer.node().getBBox().height)
                    .attr('stroke', '#E45B5F')
                    .attr('stroke-width', 18 / modifiedTransform.k)
                    .attr('stroke-dasharray', 0 / modifiedTransform.k)
                    .attr('fill', 'none')
                    //number is stored within the dollar sign - changes dynamically
                    .attr('transform', modifiedTransform);
            }



            // click event to change page  
            imageMapAreaJSON(function (mapData) {
                for (var x = 0; x < mapData.length; x++) {
                    var currentMapItem = mapData[x];
                    //console.log(currentMapItem);
                    (function (currentMapItem) {
                        d3.select('#' + currentMapItem.mapSvgElementId).on("click", function (d, i) {
                            console.log('clicked on west terrace');
                            console.log('Current item ' + currentMapItem.mapSvgElementId);
                            console.log('Current item destination id = ' + currentMapItem.destination);
                            console.log('Current item linkType ' + currentMapItem.linkType);
                            if (currentMapItem.linkType == 'map' && currentMapItem.miniMap == 1) {

                                loadMapAndMiniMapPage(currentMapItem.destination);
                                //addToHistory(loadMapAndMiniMapPage, currentMapItem.destination);

                            } else if (currentMapItem.linkType == 'map' && currentMapItem.miniMap == 0) {

                                loadMapPage(currentMapItem.destination);
                                //addToHistory(loadMapPage, currentMapItem.destination);

                            } else if (currentMapItem.linkType == 'house') {
                                console.log('I am a house');
                                loadHouse(currentMapItem.destination, function (house) {
                                    $('#mapViewport').html(buildHouseHTML(house));
                                });

                            } else {
                                alert('Unrecognised linkType! ' + linkType);
                            }

                        })
                    })(currentMapItem);
                }
            })

            //using bootstrap modal to create a dialog box
            $('#exampleModalCenter').modal({
                keyboard: false,
                show: false //only show when click on the svg element
            })

            modalJSON(attachModals)
        });
    });
}

function attachModals(data) {
    for (var x = 0; x < data.length; x++) {
        var currentItem = data[x];
        //console.log(currentItem);

        (function (currentItem) {
            d3.select('#' + currentItem.SVGelementId)
                .on("click", function (d, i) {
                    console.log('Current item' + currentItem);
                    $('.modal-title').html(currentItem.modalTitle)
                    $('.modal-body').html(currentItem.modalText)
                    $('#exampleModalCenter').modal('show')
                })
        })(currentItem)
        //anonymous self executing function / closure
        //so you're not only getting the last element of the array
    }
}

function attachImageMapAreas(data) {
    for (var x = 0; x < mapData.length; x++) {
        var currentMapItem = mapData[x];
        //console.log(currentMapItem);
        (function (currentMapItem) {
            d3.select('#' + currentMapItem.mapSvgElementId).on("click", function (d, i) {
                console.log('clicked on west terrace');
                console.log('Current item ' + currentMapItem.mapSvgElementId);
                console.log('Current item destination id = ' + currentMapItem.destination);
                console.log('Current item linkType ' + currentMapItem.linkType);
                if (currentMapItem.linkType == 'map' && currentMapItem.miniMap == 1) {

                    loadMapAndMiniMapPage(currentMapItem.destination);
                    //addToHistory(loadMapAndMiniMapPage, currentMapItem.destination);

                } else if (currentMapItem.linkType == 'map' && currentMapItem.miniMap == 0) {

                    loadMapPage(currentMapItem.destination);
                    //addToHistory(loadMapPage, currentMapItem.destination);

                } else if (currentMapItem.linkType == 'house') {
                    console.log('I am a house');
                    loadHouse(currentMapItem.destination, function (house) {
                        $('#mapViewport').html(buildHouseHTML(house));
                    });

                } else {
                    alert('Unrecognised linkType! ' + linkType);
                }

            })
        })(currentMapItem);
    }
}

function loadMapPage(id) {
    console.log('next map page loaded');
    //console.log(addToHistory(loadMapPage, id));
    addToHistory(loadMapPage, id);
    $('#menuwrapper').show();
    $('#progress').hide();
    $('.progress').hide();

    loadMapPageJSON(id, function (map) {

        $('#mapViewport').html(mapAndModalHTML(map));
        //$('#mapViewport').html(mapAndModalHTML(map));
        if (map.name) {
            //$('#terrace').show();
            $('#map').append('<div id="terrace"><p>' + map.name + '</p></div>');
            console.log(map.name);
        }
        /*
        if (map.leftID) {
            $('#leftButton').show();

            $('#leftButton').click(function (e) {
                e.preventDefault();
                loadMapPage(map.leftID);
            })
        }
        if (map.rightID) {
            $('#rightButton').show();
            $('#rightButton').click(function (e) {
                e.preventDefault();
                loadMapPage(map.rightID);
            })
        }
*/


        $('#mapViewport').css('left', '55px');

        d3.xml(map.imageURL).mimeType("image/svg+xml").get(function (error, xml) {

            if (error) throw error;

            //add the loaded svg 
            document.querySelector('#map').appendChild(xml.documentElement.cloneNode(true));
            document.querySelector('#minimap').appendChild(xml.documentElement.cloneNode(true));

            //use d3 to select the svg element
            //use the main map svg image and use it for the minimap image but a smaller size
            let map = d3.select('#map').select('svg');
            /*
            d3.select('#leftButton').click(function (e) {
                e.preventDefault();
                loadMapPage(map.leftID);
            })
            d3.select('#rightButton').click(function (e) {
                e.preventDefault();
                loadMapPage(map.rightID);
            })
*/
            // click event to change page  
            imageMapAreaJSON(function (mapData) {
                for (var x = 0; x < mapData.length; x++) {
                    var currentMapItem = mapData[x];
                    //console.log(currentMapItem);
                    (function (currentMapItem) {
                        d3.select('#' + currentMapItem.mapSvgElementId).on("click", function (d, i) {
                            alert(currentMapItem + 'clicked');

                            if (currentMapItem.linkType == 'map' && currentMapItem.miniMap == 1) {

                                loadMapAndMiniMapPage(currentMapItem.destination);
                                addToHistory(loadMapAndMiniMapPage, currentMapItem.destination);

                            } else if (currentMapItem.linkType == 'map' && currentMapItem.miniMap == 0) {

                                loadMapPage(currentMapItem.destination);
                                addToHistory(loadMapPage, currentMapItem.destination);

                            } else if (currentMapItem.linkType == 'house') {
                                console.log('I am a house');
                                loadHouse(currentMapItem.destination, function (house) {
                                    $('#mapViewport').html(buildHouseHTML(house));
                                });

                            }

                        })
                    })(currentMapItem);
                }
            })
            modalJSON(function (map) {
                d3.select('#left').on("click", function (d, i) {
                    //e.preventDefault();
                    //alert('left');
                    loadMapPageJSON(id, function (map) {
                        console.log('left id is ' + map.leftID);
                        loadMapPage(map.leftID);
                    })
                })
                d3.select('#right').on("click", function (d, i) {
                    //e.preventDefault();
                    //alert('right');
                    loadMapPageJSON(id, function (map) {
                        loadMapPage(map.rightID);
                    })
                })
            })
        });
    });
}
