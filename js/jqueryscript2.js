// this fires the javascript into the document when the document is ready, it calls a function
$(document).ready(function(){
	
//	$("body").hide();
	
//this looks for the body in the html file, when clicked it activates the function where this, the body, fades out in one second	
	$("body").click(function(){
			$(this).fadeOut(1000);
	});

//this looks for the body and upon click, will check to see if the body is faded out, where if it is faded out, it shall fade back in half a second to full view	
	$("body").click(function(){
		$(this).fadeIn(500);
	});

//this looks for figure tags in the html, where if clicked, shall slide up -1000
	$("figure").click(function(){
		$(this).slideUp(-1000);
		});

//this looks for the section tags, such that when clicked, brings up an alert box with a string message
	$("section").click(function(){
		alert("Don't touch me again!");
		});

//this looks for the footer tags, such that when clicked, slides up 1000px,
	$("footer").click(function(){
		$(this).slideUp(1000);
		});

//this looks for the nav tags with the id toggle, such that when clicked, will animate the width to 30 percent of the page, 20% of the viewport height, reduce it opacity to half, margin to half inch from the right, font size to 2ems and change border width to 30px
	$("nav").click(function(){
		$("#toggle").animate({
			width:"30%",
			height:"20%",
			opacity: 0.5,
			marginRight:"0.5in",
			fontSize:"2em",
			borderWidth:"30px"
		})
	});

//this looks for all img tags, such that when clicked, uses the function which creates an alert followed by an animation of the image to 50% the viewport, and make its margin .75in
	$("img").click(function(){
		alert("Don't mess with me. I'm having a bad day.");
		$(this).animate({
		width:"50%",
		marginRight:"0.75in",
		})
	});

//this looks for the aside tags, such that when the aside is clicked, bring up an alert box with a string message
	$("aside").click(function(){
		alert("This is an aside, but please, do not touch me.");
	});

});