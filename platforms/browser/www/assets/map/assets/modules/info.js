
function cleanInformation(){
	infodiv.classList.remove("shown");
}

function completeInformation(data,append,i,clsm){
	if(window.free && !append){
		window.free=false;
		infodiv.innerHTML="";
	
		setTimeout(_prego,100);
	}
	else{
		_go();
	}
	function _prego(){
		cleanInformation();
		setTimeout(_prepgo,200);
	}
	function _prepgo(){
		infodiv.classList.add("shown");
		setTimeout(_go,100);
	}
	function _go(){
		window.free=true;
		addLine("<img src=\""+getIcon(data.categorie)+"\"/>",{
			"a":"c",
			"f":"20px",
		},"h1");
		addLine(get("nom_officiel") + "("+get("nom_connu")+")",{
			"a":"c",
			"f":"20px",
		},"h1");
		addLine("<div>("+get("longitude")+" , "+get("latitude")+")</div>",{
			"a":"c",
			"f":"11px",
		});
		addLine("<b class=\"t_beg\">Categorie</b><span class=\"tr_beg htag\" data-categ=\""+get("categorie")+"\">#"+get("categorie")+"</span>",{
			"f":"14px",
		});
		addLine("<b class=\"t_beg\">Sous categorie</b><span class=\"tr_beg\">"+get("sous_categorie")+"</span>",{
			"f":"14px",
		});
		addLine("<b class=\"t_beg\">Info</b><span class=\"tr_beg\">"+get("localisation_pratique")+"</span>",{
			"f":"14px",
		});
		addLine("<br/>");
		addLine("<br/>");
		
		var htags=infodiv.querySelectorAll(".htag[data-categ=\""+get("categorie")+"\"]");
		if(htags.length){
			for(var k=0;k<htags.length;k++){
				addEv(k);
			}
		}
		function addEv(k){
			htags[k].addEventListener("click",function(){
				cleanCategs();
				var htc=globs.htag[data.categorie];
				htc.select();
				
				//clsm();
				infodiv.classList.remove("shown");
			});
		}
		
		
		function addLine(txt,options,tag){
			if(!tag){
				tag="div";
			}
			var div=document.createElement(tag);
			div.classList.add("t_top");
			var assoc={
				"f":"font-size",
				"a":"text-align",
				"c":"center",
			};
			div.innerHTML=txt;
			infodiv.appendChild(div);
			if(options){
				for(var i in options){
					div.style[getV(i)]=getV(options[i]);
				}
			}
			function getV(smt){
				if(assoc[smt]){
					return assoc[smt];
				}
				return smt;
			}
		}
		function get(smt){
			if(data[smt]){
				return data[smt];
			}
			return "---";
		}
	}
}
