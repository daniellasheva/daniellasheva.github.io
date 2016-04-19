$(function() {

  window.onload = function() {
     alert( "welcome" );
 }

//have the letters of header turn to black when hovered

$("submit").click(function( event ) {
  event.preventDefault();
});

$("#submitButton").click(function(){
    alert("Thank you!");
});

$(".header .a").css("text-shadow: 2px 2px black");

$(".donateButton").click(function() {
$(".billing").css("display", "block");

});

});