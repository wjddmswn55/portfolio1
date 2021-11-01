//////////////////// scroll ///////////////////////////
$(function(){
    var menu = $('#header_in > ul > li');
    var contents = $('#scroll > *');
    
    menu.click(function(event){
       event.preventDefault();
       
       var tg = $(this);
       var i = tg.index();
       
       var section = contents.eq(i);
       var tt = section.offset().top;
       
       $('html, body').stop().animate({scrollTop:tt});
    });
    
     $(window).scroll(function(){
       var sct = $(window).scrollTop();
      
       contents.each(function(){
         var tg = $(this);
         var i = tg.index();
          if(tg.offset().top <= sct){
              menu.removeClass('on');
              menu.eq(i).addClass('on');
          }
      });
    });
});

//////////////////////////// project1 /////////////////////////////////
$(function(){
  $('.project1_2').hide();
  
  $('.project1').click(function(){
         $('.project1_2').hide(500);
         $(this).next('.project1_2').show(500);

  });
  });

