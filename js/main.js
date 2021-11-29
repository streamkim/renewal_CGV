// 메인페이지
$(function(){
    // 팝업
    $(function () {
        $("#close").click(function () {
            $("#popup").fadeOut();
        });
    });
    

    // 메뉴
    $('.mainmenu > li').hover(function(){
        $(this).children('.submenu').show();
    },function(){
        $(this).children('.submenu').hide();
    });

    // 박스오피스 좌우전환
    // setInterval(function(){
    //     $('.hero-imgs').animate({
    //         marginLeft: '-250px'
    //     },500,function(){
    //         $('.hero-imgs li').eq(0).appendTo('.hero-imgs');
    //         $('.hero-imgs').css({marginLeft: 0});
    //     });
    // },3000);

    // $('.hero-imgs').animate({left: '-270px', zoom: 1.22},500,function(){
    //     $('.hero-imgs li').eq(0).animate({zoom: 0.78}).appendTo('.hero-imgs');
    //     $('.hero-imgs').css({left:0});
    // });

    // setInterval(function(){
    //     $('.hero-imgs').animate({left: '-250px'
    //     },500,function(){
    //         $('.hero-imgs li').eq(0).appendTo('.hero-imgs');
    //         $('.hero-imgs').css({left:0});
    //         $('.hero-imgs li').eq(1).animate({left: '200px',zoom: 1.22});
    //         $('.hero-imgs li').eq(0).animate({zoom: 1});
    //     });
    // },3000);
    // $('.hero-imgs li').eq(0).appendTo('.hero-imgs');
    
    // 공지사항
    setInterval(function(){
        $('.notice-list').animate({marginTop:'-63px'},600,function(){
            $('.notice-list li').eq(0).appendTo('.notice-list');
            $('.notice-list').css({marginTop: 0});
        });
    },3000);
});


// movie/index.html

// sub_title 클릭시
$(function(){
    // 박스오피스 클릭시
    $('.bo1').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.box_office_wrap').siblings().hide();
        $('.box_office_wrap').show();
        $('.close').hide();
        $('.more2').show();
    });

    // 개봉예정작 클릭시
    $('.bo2').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.coming_soon_wrap').siblings().hide();
        $('.coming_soon_wrap').show();
        $('.close').hide();
        $('.more2').show();
    });

    // 아트하우스 클릭시
    $('.bo3').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.art_house_wrap').siblings().hide();
        $('.art_house_wrap').show();
        $('.close').hide();
        $('.more2').show();
    });
});

// 더보기 클릭시
$(function(){
    // 박스오피스 더보기 클릭시
    $('.more1').click(function(){
        $('.box_office_wrap2').siblings().hide();
        $('.box_office_wrap').show();
        $('.box_office_wrap2').show();
        $('.more1').hide();
        $('.close1').show();
        $('.close2').hide();
        $('.close3').hide();
    });

    // 개봉예정작 더보기 클릭시
    $('.more2').click(function(){
        $('.coming_soon_wrap2').siblings().hide();
        $('.coming_soon_wrap').show();
        $('.coming_soon_wrap2').show();
        $('.more2').hide();
        $('.close1').hide();
        $('.close2').show();
        $('.close3').hide();
    });

    // 아트하우스 더보기 클릭시
    $('.more3').click(function(){
        $('.art_house_wrap2').siblings().hide();
        $('.art_house_wrap').show();
        $('.art_house_wrap2').show();
        $('.more3').hide();
        $('.close2').hide();
        $('.close1').hide();
        $('.close3').show();
    });
});

// 접기 클릭시
$(function(){
    // 박스오피스 접기 클릭시
    $('.close1').click(function(){
        $('.box_office_wrap').siblings().hide();
        $('.close1').hide();
        $('.close2').hide();
        $('.close3').hide();
        $('.more1').show();
    });

    // 개봉예정작 접기 클릭시
    $('.close2').click(function(){
        $('.coming_soon_wrap').siblings().hide();
        $('.more2').show();
        $('.close1').hide();
        $('.close2').hide();
        $('.close3').hide();
    });

    // 아트하우스 접기 클릭시
    $('.close3').click(function(){
        $('.art_house_wrap').siblings().hide();
        $('.more3').show();
        $('.close1').hide();
        $('.close2').hide();
        $('.close3').hide();
    });
});

// movie/detail.html

// 상세페이지 탭 전환
$(function(){
    $('.bo_tab1').click(function(){
        $('.detail_wrap1').show();
        $('.review_wrap1').hide();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    $('.bo_tab2').click(function(){
        $('.detail_wrap1').hide();
        $('.review_wrap1').show();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});

// 상세페이지 스틸컷 슬라이드
$(function(){
    setInterval(function(){
        $('.photo-imgs').animate({
            marginLeft: '-727px'
        },1000,function(){
            $('.photo-imgs li').eq(0).appendTo('.photo-imgs');
            $('.photo-imgs').css({marginLeft:0});
        });
    },3000);
})


// theater/special.html
$(function(){
    $('.st-slide li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.btn-slide-right').click(function(){
        $('.st-slide').animate({
            marginLeft: '-270px'
        },400,function(){
            $('.st-slide li').eq(0).appendTo('.st-slide');
            $('.st-slide').css({marginLeft: 0});
        });
    });

    // $('.btn-slide-left').click(function(){
    //     $('.st-slide').animate({
    //         marginLeft: '270px'
    //     },1000,function(){
    //         $('.st-slide li').eq(12).prependTo('.st-slide');
    //         $('.st-slide').css({marginLeft: 0});
    //     });
    // });
});

// event
$(function(){
    setInterval(function(){
        $(".slide-imgs").animate({
            marginLeft:'-490px'
        },1000,function(){
            $(".slide-imgs li").eq(0).appendTo(".slide-imgs");
            $(".slide-imgs").css({marginLeft: 0});
        });
    },3000);
});