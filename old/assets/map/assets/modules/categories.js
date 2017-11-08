
function cleanCategs(){
	for(var i in globs.htag){
		if(globs.htag[i]){
			globs.htag[i].unselect(true);
		}
	}
}
function removeCategSearch(c){
	if(!Array.isArray(globs.categs)){
		globs.categs=[];
	}
	var categs=[];
	for(var i in globs.categs){
		if(globs.categs[i]!=c){
			categs.push(globs.categs[i]);
		}
	}
	globs.categs=categs;
}
function addCategSearch(c){
	if(!Array.isArray(globs.categs)){
		globs.categs=[];
	}
	if(globs.categs.indexOf(c)==-1){
		globs.categs.push(c);
	}
}
function selectCategorie(){
	cleanMarkers()
	var formData=new FormData();
	formData.append("categorie",JSON.stringify(globs.categs));
	$.ajax({
			url: BASE_URL+"/app/reperes_categ",
			type: 'POST',
			data:  formData,
			mimeType:"multipart/form-data",
			contentType: false,
			cache: false,
			processData:false,
			success:action,
			error:fail_action         
		});
	
	function fail_action(jqXHR, textStatus, errorThrown) 
	{
		$("#status").hide();
		console.log(jqXHR);
	}         
	function action(data, textStatus, jqXHR){
		var r=data;
		var datas=JSON.parse(r);
		for(var i in datas){
			mark(datas[i],globs.map,i,datas);
		}
		//test();
	}
}