
function mark(data,map,i,datas){
	if(!globs.closeInfoWindow){
		globs.closeInfoWindow=function(){
			if(globs.InfoWindow){
				globs.InfoWindow.close();
				globs.InfoWindow=null;
			}
		}
	}
	if(globs.info===undefined){
		globs.info=false;
	}
	var icons=globs.icons;
	var icon=getIcon(data.categorie);
	var position=new google.maps.LatLng(data.latitude,data.longitude);
	console.log([data.latitude,data.longitude]);
	var marker = new google.maps.Marker({
          label:{
          	"text": (data.nom_officiel?data.nom_officiel:" "),
          	"color": (data.repere?"#077":"#555"),
          	"fontSize": (data.repere?"15px":"9px"),
          },
          map: map,
          position: position,
          icon:{
			url: icon,
   			scaledSize: new google.maps.Size(20, 20), // scaled size
            fillOpacity: 1,
            labelOrigin: new google.maps.Point(10, 30)
          },

        });
        var infowindow = new google.maps.InfoWindow({
			content: (data.nom_connu?(data.nom_officiel+"("+data.nom_connu+")"):data.nom_officiel),
		  });
  
  	globs.markers.push(marker);
		  marker.addListener('click', function() {
		  		setTimeout(function(){
			  		globs.info=true;
					infowindow.open(map, marker);
		  		},500);
				
				
			});
		  marker.addListener('click', function() {
		  		setTimeout(function(){
			  		globs.info=true;
			  		globs.infowindow=infowindow;
			  		if(window.free){
						completeInformation(data,false,0,clsm);
						for(var j=0;j<datas.length;j++){
							if(
								i!=j &&
								sameAs(datas[j].latitude,data.latitude) &&
								sameAs(datas[j].longitude,data.longitude)
							){
								completeInformation(datas[j],true,j+1,clsm);
							}
						}
			  		}
			  	},500);
				
			});
			function clsm(){
				infowindow.close();
				//cleanInformation();
			}

			// assuming you also want to hide the infowindow when user mouses-out
			marker.addListener('mouseout', clsm);
  
        
	
}
function cleanMarkers(){
	if(!Array.isArray(globs.markers)){
		globs.markers=[];
	}
	for(var i in globs.markers){
		globs.markers[i].setMap(null);
	}
	globs.markers=[];
}