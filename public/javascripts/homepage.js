$(document).ready(function(){
	var $ring=$("#ring")
	$("#githubicon").mouseover(function(){
		$ring.stop().animate({'display':'show'},500);
	}).mouseout(function(){
		$ring.stop().animate({'display':'none'},500);
	});
});