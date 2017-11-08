
function myMap() {


var myStyles =[
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
    },
    {
            featureType: "transit.station.bus",
            stylers: [
              { visibility: "off" }
            ]
          }
];



var mapProp= {
    center:new google.maps.LatLng(-18.908431, 47.535145),
    zoom:17,
    styles: myStyles 
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var geocoder = new google.maps.Geocoder;
    
	globs.f=function(){
		globs.main(map);
	}
	if(globs.h){
		globs.f();
	}


}