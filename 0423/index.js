//check if document is ready
$(document).ready(function(){

//get our dic size
var doc = $(document);

var width = $(document).width()-100;
var height = $(document).height()-100;

// console.log($(".circle"));
//target our shapes
var shapes=[$(".circle"),$(".trangle"),$(".square")]

//create a random shape and position
setInterval(function randomStuff(){
var randomShape = shapes[Math.floor(Math.random()*shapes.length)]
var clone = randomShape.clone().appendTo('body');
// console.log(clone)

clone.last().css('left',Math.random()*width)
clone.last().css('top',Math.random()*height)
},200)



















})
