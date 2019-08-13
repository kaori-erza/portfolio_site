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
    // $('.description').css("opacity","0");

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

});