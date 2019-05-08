$(document).ready(function(){

var zwidth=['100px','120px'];
var zheight=['150px','170px'];

var number= -1;



setInterval(function(){
number+=1;

if(number>=zwidth.length){
  number=0;
}



$('#elevenfive').css('width',zwidth[number]);
$('#elevenfive').css('height',zheight[number]);


},1000)
})
