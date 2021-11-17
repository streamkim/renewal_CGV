$(function(){
    // 메뉴
    $('.mainmenu > li').hover(function(){
        $(this).children('.submenu').show();
    },function(){
        $(this).children('.submenu').hide();
    });
})