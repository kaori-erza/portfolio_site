$(function(){

// $topBtnにback-to-topボタンのjQueryオブジェクトを代入
var topBtn = $('#page_up');

// 最初はボタンを隠しておく
$('#page_up').hide();

// ボタンの表示条件
$(window).scroll(function () {

    if ($(this).scrollTop() > 1000) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});

$('#page_up').click(function() {
    
    var h3 = $('body').offset().top;
    $('html, body').animate({scrollTop:h3});
    console.log(h3);
    // $('#arrow_pink').hide();
});

console.log("aaaaaaaaaaa");

    $('.graphic_box').css("opacity","0");
    $('.editorial_box').css("opacity","0");
    $('.web_box').css("opacity","0");

    $(window).scroll(function (){
        $(".work_box").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >  imgPos - windowHeight + windowHeight/4){
            $(".graphic_box",this).css("opacity","1" );
            // $(".editorial_box",this).css("opacity","1" );
            // $(".description",this).css("opacity","1" );
        } else {
            $(".graphic_box",this).css("opacity","0" );
            // $(".editorial_box",this).css("opacity","0" );
            // $(".description",this).css("opacity","0" );
        }
        if (scroll >  imgPos - windowHeight + 2*windowHeight/3){
            // $(".graphic_box",this).css("opacity","1" );
            $(".editorial_box",this).css("opacity","1" );
            // $(".description",this).css("opacity","1" );
        } else {
            // $(".graphic_box",this).css("opacity","0" );
            $(".editorial_box",this).css("opacity","0" );
            // $(".description",this).css("opacity","0" );
        }
        

        if (scroll >  imgPos - windowHeight + 3*windowHeight/4){
            // $(".graphic_box",this).css("opacity","1" );
            // $(".editorial_box",this).css("opacity","1" );
            $(".web_box",this).css("opacity","1" );
        } else {
            // $(".graphic_box",this).css("opacity","0" );
            // $(".editorial_box",this).css("opacity","0" );
            $(".web_box",this).css("opacity","0" );
        }
        });

        $(".skill_box").each(function(){
            var imgPos = $(this).offset().top;    
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >  imgPos - windowHeight + windowHeight/3){
                barAI.animate(0.9);
                barPS.animate(0.5);
                barHTML.animate(0.2);
            } else {
            }
        });
        
});

$(".na_main_photo").css("opacity","0");
$(".main_text").css("opacity","0" );
$(".color_box").css("opacity","0" );
$(".main_font").css("opacity","0" );
$(".na_photo1").css("opacity","0" );
$(".na_photo2").css("opacity","0" );
$(".na_photo3").css("opacity","0" );

$(window).scroll(function (){
    $(".nagomi_main").each(function(){
    var imgPos = $(this).offset().top;    
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >  imgPos - windowHeight + 2*windowHeight/3){
        $(".na_main_photo",this).css("opacity","1" );
    } else {
        $(".na_main_photo",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 3*windowHeight/3){
        $(".main_text",this).css("opacity","1" );
    } else {
        $(".main_text",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 4*windowHeight/3){
        $(".color_box",this).css("opacity","1" );
    } else {
        $(".color_box",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 5*windowHeight/3){
        $(".main_font",this).css("opacity","1" );
    } else {
        $(".main_font",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 6*windowHeight/3){
        $(".na_photo1",this).css("opacity","1" );
    } else {
        $(".na_photo1",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 9*windowHeight/3){
        $(".na_photo2",this).css("opacity","1" );
    } else {
        $(".na_photo2",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 12*windowHeight/3){
        $(".na_photo3",this).css("opacity","1" );
    } else {
        $(".na_photo3",this).css("opacity","0" );
    }
    
    });
    
});

$(".tf_main_photo1").css("opacity","0");
$(".tf_main_photo2").css("opacity","0" );
$(".main_text").css("opacity","0" );
$

$(window).scroll(function (){
    $(".tf_main").each(function(){
    var imgPos = $(this).offset().top;    
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >  imgPos - windowHeight + windowHeight/3){
        $(".tf_main_photo1",this).css("opacity","1" );
    } else {
        $(".tf_main_photo1",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 4*windowHeight/3){
        $(".tf_main_photo2",this).css("opacity","1" );
    } else {
        $(".tf_main_photo2",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 6*windowHeight/3){
        $(".main_text",this).css("opacity","1" );
    } else {
        $(".main_text",this).css("opacity","0" );
    }
    
    });
    
});

$(".nov_main_photo").css("opacity","0");
$(".nov_main_text").css("opacity","0" );
$(".nov_color_box").css("opacity","0" );
$(".nov_main_font").css("opacity","0" );
$(".nov_photo1").css("opacity","0" );
$(".nov_photo2").css("opacity","0" );
$(".nov_photo3").css("opacity","0" );

$(window).scroll(function (){
    $(".noveler_main").each(function(){
    var imgPos = $(this).offset().top;    
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >  imgPos - windowHeight + 2*windowHeight/3){
        $(".nov_main_photo",this).css("opacity","1" );
    } else {
        $(".nov_main_photo",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 3*windowHeight/3){
        $(".nov_main_text",this).css("opacity","1" );
    } else {
        $(".nov_main_text",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 4*windowHeight/3){
        $(".nov_color_box",this).css("opacity","1" );
    } else {
        $(".nov_color_box",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 5*windowHeight/3){
        $(".nov_main_font",this).css("opacity","1" );
    } else {
        $(".nov_main_font",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 6*windowHeight/3){
        $(".nov_photo1",this).css("opacity","1" );
    } else {
        $(".nov_photo1",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 9*windowHeight/3){
        $(".nov_photo2",this).css("opacity","1" );
    } else {
        $(".nov_photo2",this).css("opacity","0" );
    }

    if (scroll >  imgPos - windowHeight + 12*windowHeight/3){
        $(".nov_photo3",this).css("opacity","1" );
    } else {
        $(".nov_photo3",this).css("opacity","0" );
    }
    
    });
    
});


});