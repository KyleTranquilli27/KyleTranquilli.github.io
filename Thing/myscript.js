//setTimeout- 1x only setInterval- over and over()
$(document).ready(function(){ 
    "use strict"; 

setInterval(function() {
    $(".first").removeClass("hidden");
    setTimeout(function() {
        $(".first").addClass("hidden");
    }, 100);
    }, 3000);


setTimeout(function() {
    $(".hidden").addClass("second");
    }, 12000);

setTimeout(function() {
    $(".second").addClass("third");
    }, 28000);

setTimeout(function() {
    $(".third").addClass("fourth");
    }, 48000);

    
    
    
setInterval(function() {
    $(".second").removeClass("secondhidden");
    setTimeout(function() {
        $(".second").addClass("secondhidden");
    }, 100);
    }, 3000);
    

setInterval(function() {
    $(".third").removeClass("thirdhidden");
    setTimeout(function() {
        $(".third").addClass("thirdhidden");
    }, 120);
    }, 2000);
    
 setInterval(function() {
    $(".fourth").removeClass("fourthidden");
    setTimeout(function() {
        $(".fourth").addClass("fourthidden");
    }, 120);
    }, 2000);






});