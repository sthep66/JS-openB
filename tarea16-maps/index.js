// Initialize and add the map

let marker;
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: { lat:0, lng: 0},
    });
    marker = new google.maps.Marker({
        position:  { lat:41.38534799966502, lng: 2.1420669259685674},
        map: map,
    });

    const marker2 = new google.maps.Marker({
        position: { lat:52.521447, lng: 13.416801},
        map: map,
    });

    const marker1 = new google.maps.Marker({
        position:  { lat:-13.571622614557816, lng: -71.86124539796971},
        map: map,
    });

    geoPosiciona()
}
window.initMap = initMap;


// navigator.geolocation.watchPosition()

function geoPosiciona(){
    const geoLoc = navigator.geolocation
    const options = {timeout: 60000}
    const watchPos = geoLoc.watchPosition(centrar, onError, options)
}

function centrar(pos){
    const nuevaPos = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
    }
    marker.setPosition(nuevaPos)
}

function onError(){
    console.error(error)
}