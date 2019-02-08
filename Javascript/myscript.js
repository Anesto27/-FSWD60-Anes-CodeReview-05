for (i=0; i<selcetion.length; i++){
	$(".content").append("<div><div class='box1'><img src='"+selection[i].img+"'<div class='box2'><h1>"+selection[i].movieName+"</h1>"+'<br>'+"<p>"+selection[i].description+"</p><div class='box3'><p></p><div class='box4'></div></div></div></div>");

	$(".content > div:eq("+(i)+")").addClass("box");
}
