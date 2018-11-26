var menuItems = [];
menuItems[91] = {
    number: 91,
    destination: '',
    title: 'Number 91',
    available: false,
    image: 'img/gif-07.png',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    house: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud eDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    family: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolorenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    conclude: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stories: '',
    time: ['1900', '1910', '1920', '1930', '1940', '1950', '1960'],
    timeline: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
};


function getHouseById(id, callBack) {
    var theHouse = menuItems[id];
    callBack(theHouse);
}


$(document).ready(function () {
    getHouseById(91, function (house) {
        console.log(house);
        var html = '';
        html = html + '<img src="' + house.image + '"/>'
        $('#imgHouse91').html(html);

        var pIntro = '';
        pIntro += '<p>' + house.intro + '</p>'
        $('#91_intro').html(pIntro);

        var houseInfo = '';
        houseInfo += '<p>' + house.house + '</p>' +
            $('#91_house').html(houseInfo);

        var familyInfo = '';
        familyInfo += '<p>' + house.family + '</p>'
        $('#91_family').html(familyInfo);

        var conclude91 = '';
        conclude91 += '<p>' + house.conclude + '</p>'
        $('#91_conclude').html(conclude91);

        $('#timeline91_1').html('<h2>' + house.time[0] + '</h2><br><p>' + house.timeline[0] + '</p>');
        $('#timeline91_2').html('<h2>' + house.time[1] + '</h2><br><p>' + house.timeline[1] + '</p>');
        $('#timeline91_3').html('<h2>' + house.time[2] + '</h2><br><p>' + house.timeline[2] + '</p>');
        $('#timeline91_4').html('<h2>' + house.time[3] + '</h2><br><p>' + house.timeline[3] + '</p>');
        $('#timeline91_5').html('<h2>' + house.time[4] + '</h2><br><p>' + house.timeline[4] + '</p>');
        $('#timeline91_6').html('<h2>' + house.time[5] + '</h2><br><p>' + house.timeline[5] + '</p>');
        $('#timeline91_7').html('<h2>' + house.time[6] + '</h2><br><p>' + house.timeline[6] + '</p>');

    });
});
