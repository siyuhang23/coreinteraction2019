$(document).ready(function(){



var bwidth=['200px','190px'];
var bheight=['120px','110px'];

var zwidth=['150px','110px'];
var zheight=['200px','160px'];


var number= -1;

var time = new Date();
var ticker = 0;
var ticker2 = 0;

$('#time').text(time);
$('#ticker').text(ticker);
$('#ticker2').text(ticker2);

setInterval(function(){
number+=1;

if(number>=bwidth.length){
  number=0;
}


$('#two').css('width',bwidth[number]);
$('#two').css('height',bheight[number]);

$('#elevenfive').css('width',zwidth[number]);
$('#elevenfive').css('height',zheight[number]);

$('#time').text(time);
$('#ticker').text(ticker);
$('#ticker2').text(ticker2);

function getTime(){
time=new Date();

var rotate = 'rotate('+ ticker + 'deg)';
$('.yuan').css("transform", rotate);

ticker += 10;
ticker2 += 1;
if(ticker2 >=4)  {
ticker2=0;
}

}

getTime();

setInterval(function(){

getTime();

},100)
})
