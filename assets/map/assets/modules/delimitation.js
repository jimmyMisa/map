
function drawContour(datas,map,color){
	console.log(datas);
	var coords=[];
	for(var i in datas){
		coords.push(new google.maps.LatLng(datas[i][0],datas[i][1]));
	}
	console.log(coords);
  var flightPath = new google.maps.Polygon({
    path: coords,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.4
  });
  flightPath.setMap(map);
}