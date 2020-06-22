/* rotation et couleur */
$(document).ready(function(){
    $(".animated").mouseover(function(){
        
        $('.animated').animate({
            paddingTop: '5px',
        }, 300);
        
        $(".rotationR355").toggleClass("rotationB0");

        $(".rotate").toggleClass("rotationG5");

        $('.animated').animate({
            paddingTop: '0px',
        }, 300);

        $(".rotationG5").toggleClass("rotationR355");       

});
$(".animated2").mouseover(function(){
        
    $('.animated2').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationR355").toggleClass("rotationB0");

    $(".rotate2").toggleClass("rotationG5");

    $('.animated2').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationG5").toggleClass("rotationR355");       

});

$(".animated3").mouseover(function(){
        
    $('.animated2').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationG355").toggleClass("rotationB0");

    $(".rotate3").toggleClass("rotationY5");

    $('.animated2').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationY5").toggleClass("rotationG355");         

});

$(".animated4").mouseover(function(){
        
    $('.animated4').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationR355").toggleClass("rotationB0");

    $(".rotate4").toggleClass("rotationB5");

    $('.animated4').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationB5").toggleClass("rotationR355");        

});

$(".animated5").mouseover(function(){
        
    $('.animated5').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationR355").toggleClass("rotationB0");

    $(".rotate5").toggleClass("rotationG5");

    $('.animated5').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationG5").toggleClass("rotationR355");        

});

$(".animated6").mouseover(function(){
        
    $('.animated6').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationR355").toggleClass("rotationB0");

    $(".rotate6").toggleClass("rotationB5");

    $('.animated6').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationB5").toggleClass("rotationR355");       

});

$(".animated7").mouseover(function(){
        
    $('.animated7').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationY355").toggleClass("rotationB0");

    $(".rotate7").toggleClass("rotationB5");

    $('.animated7').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationB5").toggleClass("rotationY355");       

});

$(".animated8").mouseover(function(){
        
    $('.animated8').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationR355").toggleClass("rotationB0");

    $(".rotate8").toggleClass("rotationB5");

    $('.animated8').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationB5").toggleClass("rotationR355");       

});

$(".animated9").mouseover(function(){
        
    $('.animated9').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationY355").toggleClass("rotationB0");

    $(".rotate9").toggleClass("rotationB5");

    $('.animated9').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationB5").toggleClass("rotationY355");        

});

$(".animated10").mouseover(function(){
        
    $('.animated10').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationG355").toggleClass("rotationB0");

    $(".rotate10").toggleClass("rotationY5");

    $('.animated10').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationY5").toggleClass("rotationG355");       

});

$(".animated11").mouseover(function(){
        
    $('.animated11').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationR355").toggleClass("rotationB0");

    $(".rotate11").toggleClass("rotationB5");

    $('.animated11').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationB5").toggleClass("rotationR355");       

});

$(".animated12").mouseover(function(){
        
    $('.animated12').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationR355").toggleClass("rotationB0");

    $(".rotate12").toggleClass("rotationG5");

    $('.animated12').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationG5").toggleClass("rotationR355");       

});

$(".animated13").mouseover(function(){
        
    $('.animated13').animate({
        paddingTop: '5px',
    }, 300);
    
    $(".rotationY355").toggleClass("rotationB0");

    $(".rotate13").toggleClass("rotationB5");

    $('.animated13').animate({
        paddingTop: '0px',
    }, 300);

    $(".rotationB5").toggleClass("rotationY355");        

});


/** scroll vision apparition */

    $(window).on('scroll', function () {
    
    var elmt   = $('.from-left, .from-right, h2, h3, .btn, .card-title');
    var topImg = $('.from-left, .from-right, h2, h3, .btn, .card-title').offset().top;
    var scroll = $(window).scrollTop();
    
        $(elmt).each(function() {
            
            var topImg = $(this).offset().top - 700;
            
                if ( topImg < scroll ) {
                
                $(this).css("transform", "translate(0,0)");
                $(this).css("opacity", "1");
                
                };
        });
    });


/*Divers changement de couleur de background et de couleur de texte*/
    $(".Me").mouseover(function(){

        $(".bg-about").toggleClass("bg-about2");
        $(".bg-skills").toggleClass("bg-skills2"); 
        $(".bg-cv").toggleClass("bg-cv2"); 
        $(".gradient").toggleClass("gradientA"); 
        $("h2").toggleClass("mimosa");      

});
    $(".text-nav").mouseover(function(){

        $(".text-nav").toggleClass("mimosa");      

    });
});