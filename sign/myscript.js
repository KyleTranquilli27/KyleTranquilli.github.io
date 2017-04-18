
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
    $('html').css('background-color', 'rgba(245, 0, 0, 1)');
    $('.hey2').css('color', 'rgba(245, 0, 0, 1)');
    $('.hey').css('color', 'rgba(245, 0, 0, 1)');
        
},function(){
    $('.flyout').addClass('hidden');
});
    $('.bold').mouseover(function(){
    $('.hey3').fadeIn(1000);
    $('.surround').fadeIn(4600);
})
     $('.surround').mouseover(function(){
    $('.hey4').fadeIn(1000);
})
      $('.surround').mouseover(function(){
    $('.attack').fadeIn(1000);
})
        $('.attack').mouseover(function(){
    $('.hey5').fadeIn(1000);
})
         $('.attack').mouseover(function(){
    $('.chaos').fadeIn(1000);
})
            $('.chaos').mouseover(function(){
    $('.hey6').fadeIn(1000);
})
    $('.chaos').mouseover(function(){
    $('.defend').fadeIn(4500);
})
      $('.castle').mouseover(function(){
    $('.unicorn').fadeIn(4500);
    $('.desc').fadeIn(4500);
})
      $('.defend').mouseover(function(){
    $('.hey7').fadeIn(4500);
    $('.castle').fadeIn(4500);
    
    
})
    $(".bold").mouseover(function(){
    $(".hey3").animate({left: '37%'}, 1500);
}); 
     $(".chaos").mouseover(function(){
    $(".hey6").animate({marginTop: '25%'}, 1500);
}); 
    $(".surround").hover(function(){
      $('.hey3').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
       $(".castle").hover(function(){
      $('.hey7').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
    
    $(".defend").hover(function(){
      $('.hey6').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
      $(".chaos").hover(function(){
      $('.hey5').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
   $(".attack").hover(function(){
      $('.hey4').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
});