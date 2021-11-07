$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $('.atas').fadeIn('slow');
        }else{
            $('.atas').fadeOut('slow');
        }
    });
    $('.atas').click(function(){
        $('body,html').animate({
            scrollTop:0
        },1000);
        return false;
    });
});