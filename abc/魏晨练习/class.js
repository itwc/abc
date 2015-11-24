// JavaScript Document
function removeClass(obj,sClassName){
	if(obj.className){
		var reg=new RegExp('\\b'+sClassName+'\\b'+'g')
		if(obj.className.search(reg)!=-1){
			obj.className=obj.className.replace(reg,'').replace(/^\s|\s$/,'').replace(/\s+/g,' ');	
		}		
	}	
}
function getByClass(obj,sClassName){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}else{
			var aResult=[];
			var aEle=obj.getElementsByTagName('*');
			var reg=new RegExp
		}
}
