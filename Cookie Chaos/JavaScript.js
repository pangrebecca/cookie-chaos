$(document).ready(function() {

    var visibility = true;
    var count = 0;
    var score = 0;
    var cookies = 96;
    var life = 3;

    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '32') {
            alert("Objective: Aim for a High Score. Every cookie that you eat will be +100 points, but if you eat bird poo, thats -500 points! Game is over once all the cookies are gone, or if you run out of lives.  Rules: You as the Cookie Monster tries to eat as many cookies as you can. Big Bird and Count von Count are are your enemies. Big Bird will turn all the cookies she touches into poo and When Count von Count appears, he will shoot out bats in all 4 cardinal directions. Being hit by a bat will cost you 1 life (you have 3 in total). If you catch Elmo, you will earn one life.");
        }
    });
   
    $(document).mousemove(function(e) {
            $(".mallet").offset({
                left: e.pageX - 50,
                top: e.pageY -50
            });
    });

   $(document).mousedown(function(){
       $(".mallet").attr("src", "Mallets2.png");
       smackBird();
   });

   $(document).mouseup(function(){
       $(".mallet").attr("src", "Mallets.png");
   });
   
    window.setInterval(function elmoAppears() {
        $("#monster").attr("src", "monster.gif");
        var x = (Math.random() * ($(window).width() - 250)).toFixed();
        var y = (Math.random() * ($(window).height() - 250)).toFixed();
        $('img#elmo').css({ 'left': x + 'px', 'top': y + 'px' }).fadeIn('slow').delay(4000).fadeOut('fast');
    }, 14000);

   window.setInterval(function vonAppears() {
       var x = (Math.random() * ($(document).width() - 250)).toFixed();
       var y = (Math.random() * ($(document).height() - 250)).toFixed();
       $('img#von').css({ 'left': x + 'px', 'top': y + 'px' }).fadeIn('slow', function () {
           var left = $('#von').offset().left;
           var top = $('#von').offset().top;
           $("#bat1").css({ "left": left, "top": top });
           $("#bat1").animate({ left: '+=1000px' }, 2500);
           $("#bat2").css({ "left": left, "top": top });
           $("#bat2").animate({ left: '-=1000px' }, 2500);
           $("#bat3").css({ "left": left, "top": top });
           $("#bat3").animate({ top: '+=1000px' }, 2500);
           $("#bat4").css({ "left" : left, "top" : top });
           $("#bat4").animate({ top: '-=1000px' }, 2500);
       }).delay(3500).fadeOut('fast');
   }, 4000);

   window.setInterval(function bat() {
       if (Math.abs($("#bat1").offset().left - $("#monster").offset().left) <= 50 && Math.abs($("#bat1").offset().top - $("#monster").offset().top) <= 50 && $("#monster").css("height") == '100px') {
           $("#monster").animate({ height: '+=100px', width: '+=100px' }, 200).fadeOut(1000).fadeIn(1000).animate({ height: '-=100px', width: '-=100px' });
           life -= 1;
       }
       if (Math.abs($("#bat2").offset().left - $("#monster").offset().left) <= 50 && Math.abs($("#bat2").offset().top - $("#monster").offset().top) <= 50 && $("#monster").css("height") == '100px') {
           $("#monster").animate({ height: '+=100px', width: '+=100px' }, 200).fadeOut(1000).fadeIn(1000).animate({ height: '-=100px', width: '-=100px' });
           life -= 1;
       }
       if (Math.abs($("#bat3").offset().left - $("#monster").offset().left) <= 50 && Math.abs($("#bat3").offset().top - $("#monster").offset().top) <= 50 && $("#monster").css("height") == '100px') {
           $("#monster").animate({ height: '+=100px', width: '+=100px' }, 200).fadeOut(1000).fadeIn(1000).animate({ height: '-=100px', width: '-=100px' });
           life -= 1;
       }
       if (Math.abs($("#bat4").offset().left - $("#monster").offset().left) <= 50 && Math.abs($("#bat4").offset().top - $("#monster").offset().top) <= 50 && $("#monster").css("height") == '100px') {
           $("#monster").animate({ height: '+=100px', width: '+=100px' }, 200).fadeOut(1000).fadeIn(1000).animate({ height: '-=100px', width: '-=100px' });
           life -= 1;
       }
       if (life == 0) {
           $("#l3").hide();
           $("#l2").hide();
           $("#l1").hide();
           alert("Game Over! " + " Score:" + score);
           location.reload();
       }
       else if (life == 1) {
           $("#l3").hide();
           $("#l2").hide();
           $("#l1").show();
       }
       else if (life == 2) {
           $("#l2").show();
           $("#l1").show();
           $("#l3").hide();
       }
       else {
           $("#l2").show();
           $("#l1").show();
           $("#l3").show();
       }
   }, 50);

   function smackBird() {
       var bird = $("#bird").offset();
       var m = $(".mallet").offset();
       if ((Math.abs(bird.top - m.top) < 100) && (Math.abs(bird.left - m.left) < 100)) {
           $("#bird").css("visibility", "hidden");
           visibility = false;
           count = 0;
       }
   } for (var t = 1; t < 10; t++){
       $("img#bird").animate({ left: '+=400px' }, 2000);
       $("img#bird").animate({ top: '-=400px' }, 2000);
       $("img#bird").animate({ left: '-=400px' }, 2000);
       $("img#bird").animate({ top: '+=400px' }, 2000);
       $("img#bird").animate({ top: '-=400px' }, 2000);
       $("img#bird").animate({ top: '+=400px' }, 2000);
       $("img#bird").animate({ left: '+=400px' }, 2000);
   }

       window.setInterval(function changeImage() {
       var q = 96;
       var i = 1;
       var x = $("#bird").offset().left;
       var y = $("#bird").offset().top;
       if (y < 110&& y >= 10) { q = 12; i = 1; }
       if (y < 210 && y >= 110) { q = 24; i = 13; }
       if (y < 310 && y >= 210) { q = 36; i = 25; }
       if (y < 410 && y >= 310) { q = 48; i = 37; }
       if (y < 510 && y >= 410) { q = 60; i = 49; }
       if (y < 610 && y >= 510) { q = 72; i = 61; }
       if (y < 710 && y >= 610) { q = 84; i = 73; }
       if (y < 810 && y >= 710) { q = 96; i = 85; }
       
       while (i <= q) {
           var c = $("img#" + i).offset();
           if ((Math.abs(y - c.top) <= 52) && (Math.abs(x - c.left) <= 52) && visibility) {
               if ($("img#" + i).attr("src") != "http://www.clker.com/cliparts/0/1/9/4/11971498111217377622nicubunu_Feces.svg.hi.png" && $("img#" + i).css("visibility") != "hidden" ) {
                   $("img#" + i).attr("src", "http://www.clker.com/cliparts/0/1/9/4/11971498111217377622nicubunu_Feces.svg.hi.png");
                   cookies -= 1;
                }
              }
            i++;
          }
       }, 200);

       $(document).keydown(function (key) {
           
           switch (parseInt(key.which, 10)) {
               case 37:
                   if($(".monster").offset().left >=50 ){
                       $(".monster").animate({ left: '-=50px' }, 0.1); //Left
                   }
                   break;
               case 38:
                   if ($(".monster").offset().top >= 50) {
                       $(".monster").animate({ top: '-=50px' }, 0.1); //up
                   }
                   break;
               case 39:
                   if ($(".monster").offset().left <= ($(window).width() - 50)) {   
                       $(".monster").animate({ left: '+=50px' }, 0.1); //right
                   }
                   break;
               case 40:
                   if ($(".monster").offset().top <= ($(window).height() - 50 )) {
                       $(".monster").animate({ top: '+=50px' }, 0.1); //down
                   }
                   break;
           }

               var elmo = $("#elmo").offset();
               var monster = $("#monster").offset();
               $("h1").html(" " + elmo.top + " " + monster.top + " " + elmo.left + " " + monster.left);
               if ((Math.abs(elmo.top - monster.top) < 100) && (Math.abs(elmo.left - monster.left) < 100)) {
                   life += 1;
                   $("#elmo").hide();
                   if (life == 0) {
                       $("#l3").hide();
                       $("#l2").hide();
                       $("#l1").hide();
                       alert("Game Over! " + " Score:" + score);
                       location.reload();
                   }
                   else if (life == 1) {
                       $("#l3").hide();
                       $("#l2").hide();
                       $("#l1").show();
                   }

                   else if (life == 2) {
                       $("#l2").show();
                       $("#l1").show();
                       $("#l3").hide();
                   }
                   else {
                       $("#l2").show();
                       $("#l1").show();
                       $("#l3").show();        
                   }
               }

               var q = 96;
               var i = 1;
               var x = $("#monster").offset().left;
               var y = $("#monster").offset().top;
               if (y < 110 && y >= 10) { q = 12; i = 1; }
               if (y < 210 && y >= 110) { q = 24; i = 13; }
               if (y < 310 && y >= 210) { q = 36; i = 25; }
               if (y < 410 && y >= 310) { q = 48; i = 37; }
               if (y < 510 && y >= 410) { q = 60; i = 49; }
               if (y < 610 && y >= 510) { q = 72; i = 61; }
               if (y < 710 && y >= 610) { q = 84; i = 73; }
               if (y < 810 && y >= 710) { q = 96; i = 85; }

               while (i <= q) {
                   var c = $("img#" + i).offset();
                   if ((Math.abs(y - c.top) <= 52) && (Math.abs(x - c.left) <= 52)) {
                       if ($("img#" + i).css("visibility") == "hidden") {
                           break;
                       }
                       else if ($("img#" + i).attr("src") == "http://www.clker.com/cliparts/0/1/9/4/11971498111217377622nicubunu_Feces.svg.hi.png") {
                           $("img#" + i).css("visibility", "hidden");
                           score -= 500;
                       }
                       else{
                           $("img#" + i).css("visibility", "hidden");
                           score += 100;
                           cookies -= 1;
                       }  
                   }
                   i++;
                   $("#score").html("Score:" + score);

                   if (cookies == 0) {
                       alert("Complete! " + " Score:" + score);
                       location.reload();
                   }
               }
    
               if (!visibility){
                count += 1;
                if (count == 8) {
                    visibility = true;
                    $("#bird").css("visibility", "visible");
                    moveBird();
                    function moveBird(){
                    var x = (Math.random() * ($(window).width() - 250)).toFixed();
                    var y = (Math.random() * ($(window).height() - 250)).toFixed();
                    $('img#bird').css({ 'left': x + 'px', 'top': y + 'px' }).fadeIn(100, function () {
   
                        if (visible) {
                            $("#bird").animate({ left: '-=400px' }, 2000);
                            $("#bird").animate({ top: '-=400px' }, 2000);
                            $("#bird").animate({ left: '+=400px' }, 2000);
                            $("#bird").animate({ top: '+=400px' }, 2000);
                            $("#bird").fadeOut;
                            moveBird();
                        }
                    });
                 }
                }moveBird();
            }
        });
  });
