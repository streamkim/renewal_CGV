$(function(){
    // 메뉴
    $('.mainmenu > li').hover(function(){
        $(this).children('.submenu').show();
    },function(){
        $(this).children('.submenu').hide();
    });

    // 박스오피스 좌우전환

    // 공지사항
    setInterval(function(){
        $('.notice-list').animate({marginTop:'-63'},1000,function(){
            $('.notice-list li').eq(0).appendTo('.notice-list');
            $('.notice-list').css({marginTop: 0});
        });
    },5000);
});