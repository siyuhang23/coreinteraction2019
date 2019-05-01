//check if document is ready
$(document).ready(function(){

    var width = $(document).width() - 40;
    var height = $(document).height() - 40;
    var colors = ["orange", " #75a3a3", "green", "blue", "brown"]

    var squarecolor = ["#888844", " #75a3a3", " #2e2eb8", "#ccff33", "brown"]
    var big =["150px","160px","170px"]

    var circle3color = ["#bf4080", "#8080ff", "#66d9ff", "orange", "#a64dff"]

    setInterval(function(){
    var positionLeft = Math.random() * width + "px";
    var positionTop = Math.random() * height + "px";

    var randomNumber = Math.random()*colors.length;
    var randomColor = colors[Math.floor(randomNumber)];

    $('#circle').css("left", positionLeft)
    $('#circle').css("top", positionTop)
    $('#circle').css("background-color", randomColor)

    $('#diamond').css("top", positionTop)
    $('#diamond').css("left", positionLeft)

    var positionTop = Math.random() * big + "px";
    var randomNumber = Math.random()*colors.length;
    var randomColor = squarecolor[Math.floor(randomNumber)];

    $('#square').css("top", positionTop)
    $('#square').css("left", positionLeft)
    $('#square').css("background-color", randomColor)

  var randomColor = circle3color[Math.floor(randomNumber)];
    $('#circle3').css("top", positionTop)
    $('#circle3').css("left", positionLeft)
    $('#circle3').css("color", randomColor)

    $('#circleone').css("left", positionLeft)
    $('#circleone').css("top", positionTop)

    $('#circlefour').css("left", positionLeft)
    $('#circlefour').css("top", positionTop)

    $('#circletwo').css("left", positionLeft)
    $('#circletwo').css("top", positionTop)
    $('#circletwo').css("background-color", randomColor)
  },1500)


//end document ready function
})
