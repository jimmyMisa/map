
function getMenu(){
	var infomenu=globs.menu;
	if(!infomenu){
		infomenu=document.getElementById("infomenu");
		globs.menu=infomenu;
	}
	return infomenu;
}
function addMenu(categorie){
	var menu=getMenu();
	var img=document.createElement("img");
	var info=document.createElement("div");
	var container=document.createElement("div");
	container.classList.add("menu_container");
	info.textContent=categorie;
	img.src=getIcon(categorie);
	container.appendChild(img);
	container.appendChild(info);
	menu.appendChild(container);
	var incat=false;
	if(!globs.htag){
		globs.htag={};
	}
	globs.htag[categorie]={
		select:select,
		unselect:unselect,
	}
	container.addEventListener("click",function(){
		if(incat){
			unselect();
		}
		else{
			select();
		}
	});
	function select(p){
		addCategSearch(categorie);
		incat=true;
		container.classList.add("categ_use");
		if(!p){
			selectCategorie();
		}
	}
	function unselect(p){
		incat=false;
		removeCategSearch(categorie);
		container.classList.remove("categ_use");
		if(!p){
			selectCategorie();
		}
	}
}