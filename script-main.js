window.onload=function(){

  //loading
  $(".menu-item").click(function() {
	window.history.pushState('obj', 'Submissions', '/staff');
    $("body").load("staff.html");
        return false;
  });
	$(".menu-item").animate({"opacity": "1"}, 1000);
	$(".menu-item").hover(function(){
		$(this).filter(':not(:animated)').animate({ letterSpacing: "1px" });
	}, function() {
		$(this).animate({ letterSpacing: "0px" });
	});

	$(".menu-item:odd").css({
	  "backgroundColor": "#d2303f",
	  "color": "#ffffff"
	});

	$(".menu-item:odd").hover(function() {
	  $(this).css({
		"backgroundColor": "#b82735",
		"color": "#fff"
	  });
	}, function() {
	  $(this).css({
		"backgroundColor": "#d2303f",
		"color": "#fff"
	  });
	});

	$(".menu-item:even").hover(function() {

	  $(this).css({
		"backgroundColor": "#2e2b2b",
		"color": "#d2303f"
	  });
	}, function() {
	  $(this).css({
		"backgroundColor": "#1e1e1e",
		"color": "#d2303f"
	  });
	});
}