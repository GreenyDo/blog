$(function(){
	$articleTag=$("#accordion .submenu li");
	$articleTag.click(function(){
		var id=this.id;
		var idUrl="tpls/"+id+".html";
		$("article").load(idUrl);
	});
});