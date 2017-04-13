//setTimeout- 1x only setInterval- over and over()
$(document).ready(function(){
    
    $(document).ready(function() {
    $('.box').fadeIn(3000);
});
      $(document).ready(function() {
    $('.hey').fadeIn(6000);
});
 
        $(document).ready(function() {
    $('.bold').fadeIn(6000);
});
          $(document).ready(function() {
    $('.hey2').fadeIn(6000);
});
    
    $(".bold").hover(function(){
    $('html').css('background-color', 'firebrick');
    $('.hey2').css('color', 'firebrick');
    $('.hey').css('color', 'firebrick');
        
},function(){
    $('.flyout').addClass('hidden');
});
    $('.bold').mouseover(function(){
    $('.hey3').fadeIn(1000);
    $('.unicorn').fadeIn(1000);
})
  
  
});