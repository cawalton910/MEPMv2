let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 36.560, lng: -82.206 },
        zoom: 10,
    });
    new google.maps.Marker({
        position: { lat: 36.560, lng: -82.206 },
        map,
        title: "Mountain Empire Piping & Mechanical",
      });
}
