$(document).ready(function(){

   var shapeWidth=$('#onetwo').width();
   var shapeWidth=$('#onethree').width();
   var shapeWidth=$('#onefour').width();
   var shapeWidth=$('#onefive').width();
   var shapeWidth=$('#onesix').width();

   var width=$(document).width()-shapeWidth;
   var height=$(document).height()-shapeWidth;

   var speedX=2;
   var speedY=2;
   var positionLeft=0;
   var positionTop=0;

   var speeda=4;
   var speedb=2;
   var positionleft=0;
   var positiontop=0;

   var speedc=1;
   var speedd=2;
   var positionlef=0;
   var positionto=0;

   var speedfive=4;
   var speedffive=7;
   var positionfive=0;
   var positionffive=0;

   var speedxx=6;
   var speedyy=2;
   var positionLeftt=0;
   var positionTopp=0;

   function step(timestamp){

     positionLeft +=speedX;
     positionTop +=speedY;

     if(positionLeft>width){
       speedX= speedX * -1;
     }

     if(positionLeft<0){
       speedX=speedX * -1;
     }

     if(positionTop>height){
       speedY=speedY * -1;
     }

     if(positionTop<0){
       speedY=speedY * -1;
     }

     $('#onetwo').css("left",positionLeft)
     $('#onetwo').css("top",positionTop)



     positionLeftt +=speedxx;
     positionTopp +=speedyy;

     if(positionLeftt>width){
       speedxx= speedxx * -1;
     }

     if(positionLeftt<0){
       speedxx=speedxx * -1;
     }

     if(positionTopp>height){
       speedyy=speedyy * -1;
     }

     if(positionTopp<0){
       speedyy=speedyy * -1;
     }

     $('#onesix').css("left",positionLeftt)
     $('#onesix').css("top",positionTopp)



     positionleft +=speeda;
     positiontop +=speedb;

     if(positionleft>width){
       speeda= speeda * -1;
     }

     if(positionleft<0){
       speeda=speeda * -1;
     }

     if(positiontop>height){
       speedb=speedb * -1;
     }

     if(positiontop<0){
       speedb=speedb * -1;
     }

     $('#onethree').css("left",positionleft)
     $('#onethree').css("top",positiontop)



          positionlef +=speedc;
          positionto +=speedd;

          if(positionlef>width){
            speedc= speedc * -1;
          }

          if(positionlef<0){
            speedc=speedc * -1;
          }

          if(positionto>height){
            speedd=speedd * -1;
          }

          if(positionto<0){
            speedd=speedd * -1;
          }

     $('#onefour').css("left",positionlef)
     $('#onefour').css("top",positionto)


     positionfive +=speedfive;
     positionffive +=speedffive;

     if(positionfive>width){
       speedfive= speedfive * -1;
     }

     if(positionfive<0){
       speedfive=speedfive * -1;
     }

     if(positionffive>height){
       speedffive=speedffive * -1;
     }

     if(positionffive<0){
       speedffive=speedffive * -1;
     }

$('#onefive').css("left",positionfive)
$('#onefive').css("top",positionffive)

     window.requestAnimationFrame(step);
   }
     window.requestAnimationFrame(step);

     setInterval(function(){

   },1000)

})
