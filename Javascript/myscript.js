//$(document).ready(function(){

//for (i=0; i<=selection.[1]; i++){
//	$(".content").append("<div><div class='box1'><img src='"+selection[i].img+"'<div class='box2'><h1>"+selection[i].movieName+"</h1>"+'<br>'+"<p>"+selection[i].description+"</p><div class='box3'><p></p><div class='box4'></div></div></div></div>");

//	$(".content > div:eq("+(i)+")").addClass("box");
//}}

$(document).ready(function(){
// use a for loop which selects the array of the json file from the index 0 and stops the loop after it reach the the last index of the array
	for(i=0; i<selection.length; i++){
//use the Id content to append the div from html and add the json variable with its attributes to get the Image+Movie Name+Description +like numbers
		$("#content").append(
			`<div class='col-lg-5 col-md-5 film row'>
				<div class=" col-lg-5 col-md-5 film-img"><img src="${selection[i].img}"></div>
				<div class="col-lg-7 col-md-7 description"><h2>${selection[i].movieName}</h2><p>${selection[i].release}</p><br><p>${selection[i].description}</p></div>
					<button class="btn" store="thumb_up` + i + `"><h4>Like</h4>
					<span class="glyphicon glyphicon-thumbs-up" style="font-size:30px;color:green;margin-top:8px" aria-hidden="true"></span></button>
					<button class="include" id="thumb_up` + i + `"><p>${selection[i].likes}</p></button></div>`);
    }
    //use click function on the button class btn
    $(".btn").on("click", function() {
    	// store the attributes of the store class in a variable a
        var a = $(this).attr('store');
        var thumb_up = $("#" + a).html();
        // add +1 likes to the likes before
        thumb_up++;
        $("#" + a).html(thumb_up);
    });
//year 2019
     $("#year2019").on("click",function(){
     		var b = $(".marvel");
     		var c = $(".aquaMan");
     		var d = $(".spiderMan");
     		var e = $(".superMan");
     		var f = $(".greenLantern");
     		var g = $(".avengers");
     		b.fadeIn(1000);
     		c.fadeOut(1000);
     		d.fadeOut(1000);
     		e.fadeOut(1000);
     		f.fadeOut(1000);
     		g.fadeOut(1000);
     });
     //year 2018
      $("#year2018").on("click",function(){
     		var b = $(".marvel");
     		var c = $(".aquaMan");
     		var d = $(".spiderMan");
     		var e = $(".superMan");
     		var f = $(".greenLantern");
     		var g = $(".avengers");
     		b.fadeOut(1000);
     		c.fadeIn(1000);
     		d.fadeOut(1000);
     		e.fadeOut(1000);
     		f.fadeOut(1000);
     		g.fadeOut(1000);
     });
      //year 2017
      $("#year2017").on("click",function(){
     		var b = $(".marvel");
     		var c = $(".aquaMan");
     		var d = $(".spiderMan");
     		var e = $(".superMan");
     		var f = $(".greenLantern");
     		var g = $(".avengers");
     		b.fadeOut(1000);
     		c.fadeOut(1000);
     		d.fadeIn(1000);
     		e.fadeOut(1000);
     		f.fadeOut(1000);
     		g.fadeOut(1000);
     });
      //year 2016
      $("#year2016").on("click",function(){
     		var b = $(".marvel");
     		var c = $(".aquaMan");
     		var d = $(".spiderMan");
     		var e = $(".superMan");
     		var f = $(".greenLantern");
     		var g = $(".avengers");
     		b.fadeOut(1000);
     		c.fadeOut(1000);
     		d.fadeOut(1000);
     		e.fadeIn(1000);
     		f.fadeOut(1000);
     		g.fadeOut(1000);
     });

      //year 2015
      $("#year2015").on("click",function(){
     		var b = $(".marvel");
     		var c = $(".aquaMan");
     		var d = $(".spiderMan");
     		var e = $(".superMan");
     		var f = $(".greenLantern");
     		var g = $(".avengers");
     		b.fadeOut(1000);
     		c.fadeOut(1000);
     		d.fadeOut(1000);
     		e.fadeOut(1000);
     		f.fadeIn(1000);
     		g.fadeOut(1000);
     });

      //year 2014
      $("#year2014").on("click",function(){
     		var b = $(".marvel");
     		var c = $(".aquaMan");
     		var d = $(".spiderMan");
     		var e = $(".superMan");
     		var f = $(".greenLantern");
     		var g = $(".avengers");
     		b.fadeOut(1000);
     		c.fadeOut(1000);
     		d.fadeOut(1000);
     		e.fadeOut(1000);
     		f.fadeOut(1000);
     		g.fadeIn(1000);
     });
    // use click function on the button class sort 
   // $(".sort").on("click",function(){
    //		var likes1= $("5");
    //		var likes2= $("10");
    //		var likes3= $("8");
    //		var likes4= $("15");
    //		var likes5= $("20");
    //		var likes6= $("11");
    		
   // })
    
});

