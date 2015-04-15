google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(20.817741, 77.427977),
        zoom: 5,
        zoomControl: false,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: true,
        panControl: false,
        streetViewControl: false,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapElement = document.getElementById('locations');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
        ['Chennai', 'undefined', 'undefined', 'undefined', 'undefined', 13.0826802, 80.2707184, 'images/mapmarker.png'],
        ['Auroville', 'undefined', 'undefined', 'undefined', 'undefined', 12.006944, 79.810556, 'images/mapmarker.png'],
        ['Bangalore', 'undefined', 'undefined', 'undefined', 'undefined', 12.9715987, 77.5945627, 'images/mapmarker.png'],
        ['Mysore', 'undefined', 'undefined', 'undefined', 'undefined', 12.2958104, 76.6393805, 'images/mapmarker.png'],
        ['Ahemedabad', 'May 21-25 2015', 'undefined', 'undefined', 'undefined', 23.022505, 72.5713621, 'images/mapmarker.png'],
        ['Surat', 'undefined', 'undefined', 'undefined', 'undefined', 21.1702401, 72.8310607, 'images/mapmarker.png'],
        ['Pune', 'undefined', 'undefined', 'undefined', 'undefined', 18.5204303, 73.8567437, 'images/mapmarker.png'],
        ['Bhopal', 'undefined', 'undefined', 'undefined', 'undefined', 23.2599333, 77.412615, 'images/mapmarker.png'],
        ['Hyderabad', 'undefined', 'undefined', 'undefined', 'undefined', 17.385044, 78.486671, 'images/mapmarker.png'],
        ['Kundapura', 'undefined', 'undefined', 'undefined', 'undefined', 13.6315963, 74.6899917, 'images/mapmarker.png'],
        ['Gudalur', 'undefined', 'undefined', 'undefined', 'undefined', 11.152778, 76.926389, 'images/mapmarker.png']
    ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] == 'undefined') {
            description = '';
        } else {
            description = locations[i][1];
        }
        if (locations[i][2] == 'undefined') {
            telephone = '';
        } else {
            telephone = locations[i][2];
        }
        if (locations[i][3] == 'undefined') {
            email = '';
        } else {
            email = locations[i][3];
        }
        if (locations[i][4] == 'undefined') {
            web = '';
        } else {
            web = locations[i][4];
        }
        if (locations[i][7] == 'undefined') {
            markericon = '';
        } else {
            markericon = locations[i][7];
        }
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
        link = '';
        bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
    }
    function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
        var infoWindowVisible = (function () {
            var currentlyVisible = false;
            return function (visible) {
                if (visible !== undefined) {
                    currentlyVisible = visible;
                }
                return currentlyVisible;
            };
        }());
        iw = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function () {
            if (infoWindowVisible()) {
                iw.close();
                infoWindowVisible(false);
            } else {
                var html = "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>" + title + "</h4><p>" + desc + "<p></div>";
                iw = new google.maps.InfoWindow({content: html});
                iw.open(map, marker);
                infoWindowVisible(true);
            }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
    }
}