$(document).ready(function(){
	// github操作
	var $ring=$('#ring');
	var $github=$('#github');
	$github.mouseover(function(){
		$ring.stop().animate({'border-color':'#070'},400);
	}).mouseout(function(){
		$ring.stop().animate({'border-color':'#888'},200);
	});
	$github.click(function(){
		window.open('https://github.com/greenydo');
	});
	// 邮件操作
	var $email=$('#email');
	var $qemail=$('#myemail p');
	$email.mouseover(function(){
		$(this).addClass('myemaila');
		$qemail.show();
	}).mouseout(function(){
		$(this).removeClass('myemaila');
	});
});