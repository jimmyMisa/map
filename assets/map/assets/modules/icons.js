
function getIcon(type){
	var icon=globs.icons[type];
	if(!icon){
		icon="default.png"
	}
	return BASE_URL+"/assets/map/assets/icons/"+icon;
}


globs.getIcons=function(){
	$.get(BASE_URL+"/app/categoriesicons",function(r){
		globs.icons={};
		var datas=JSON.parse(r);
		for(var i in datas){
			globs.icons[datas[i].categorie_nom]=datas[i].icon_nom;
			addMenu(datas[i].categorie_nom);
		}
		if(globs.f){
			globs.f();
		}
		globs.h=true;
	});
}
