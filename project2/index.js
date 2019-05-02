$(document).ready(function(){

   var shapeWidth=$('#five').width();
   var shapeWidth=$('#twotwo').width();

   var width=$(document).width()-shapeWidth;
   var height=$(document).height()-shapeWidth;

   var speedX=2;
   var speedY=10;

   var positionLeft=0;
   var positionTop=0;

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

     $('#five').css("left",positionLeft)
     $('#five').css("top",positionTop)

     $('#twotwo').css("left",positionLeft)
     $('#twotwo').css("top",positionTop)

     window.requestAnimationFrame(step);
   }
     window.requestAnimationFrame(step);

     setInterval(function(){

     getTime(10);

   },800)

})
