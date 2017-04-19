

var map = L.map( 'map', {
    center: [20.5937,78.9629],
    minZoom: 2,
    zoom: 2
});
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );



var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );
 var mywms = L.tileLayer.wms("http://localhost:8880/geoserver/march_demo/wms", {
    layers: 'march_demo:dist_reproject',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "myattribution"
});
mywms.addTo(map);
var myIcon = L.icon({
    iconUrl: myURL + 'images/mark.png',
    iconRetinaUrl: myURL + 'images/mark.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});
 
for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
      .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
      .addTo( map );
}

 