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


// theater/special.html
$(function(){
    $('.st-slide li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.btn-slide-right').click(function(){
        $('.st-slide').animate({
            'margin-right': '-270px'
        },1000,function(){
            $('.st-slide li').eq(0).appendTo('.st-slide');
            $('.st-slide').css({marginLeft: 0});
        })
    })
});