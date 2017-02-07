$(document).ready(function(){ 
    "use strict"; 
    
 $("#first").on("mouseover", function(evt){
    $(this).css("color","red");
});
    
$("#first2").on("mouseover", function(evt){
    $(this).css("color","red");
});
 $("#first4").on("mouseover", function(evt){
    $(this).css("color","red");
});
$("#first3").on("mouseover", function(evt){
    $(this).css("color","red");
});
$("#third3").mouseover(function(){
    $("#results").fadeIn();
    $("#results").fadeIn("slow");
    $("#results").fadeIn(10000);
});
$("#third4").mouseover(function(){
    $("#results").fadeIn();
    $("#results").fadeIn("slow");
    $("#results").fadeIn(10000);
});
 $('#first').mouseover(function(){
    $('#second').show();
})
  $('#results').mouseover(function(){
    $('#button6').show();
})
  $('#results').mouseover(function(){
    $('#button7').show();
})
   $('#results').mouseover(function(){
    $('.button2').show();
})
  $('#first2').mouseover(function(){
    $('#second2').show();
})
  $('#first3').mouseover(function(){
    $('#second2').show();
})
  $('#second').mouseover(function(){
    $('#third').show();
})
$('#first4').mouseover(function(){
    $('#second').show();
})
  $('#third').mouseover(function(){
    $('#fourth').show();
})
   $('#fourth').mouseover(function(){
    $('.button').show();
})
   $("#second").on("mouseover", function(evt){
    $(this).css("color","red");
});
   $("#second2").on("mouseover", function(evt){
    $(this).css("color","red");
});
 $('#second2').mouseover(function(){
    $('.button2').show();
})
  $('#second3').mouseover(function(){
    $('#third3').show();
})
   $('#second3').mouseover(function(){
    $('#third4').show();
})
 $("#third").on("mouseover", function(evt){
    $(this).css("color","red");
})
 
  $('#first4').mouseover(function(){
    $('#second3').show();

});
 $("#fourth").on("mouseover", function(evt){
    $(this).css("color","red");
});

$("#first").hover(myFunction3);
$("#first2").hover(myFunction3);
$(".button").hover(myFunction4);
$(".button2").hover(myFunction5);
$(".button3").hover(myFunction6);
$(".button4").hover(myFunction7);
$(".button5").hover(myFunction8);
$("#button6").hover(myFunction9);


});

function myFunction3() {
    $(this).css("position","inline");
    $(this).css({"text-shadow":"6px 2px #efdc86"});
};
function myFunction4() {
    $(this).toggleClass("buttoncolor");
};
function myFunction5() {
    $(this).toggleClass("buttoncolor2");
};
function myFunction6() {
    $(this).toggleClass("buttoncolor3");
};
function myFunction7() {
    $(this).toggleClass("buttoncolor4");
};
function myFunction9() {
    $(this).toggleClass("#buttoncolor6");
};
function myFunction8() {
    $(this).toggleClass("buttoncolor5");
};


