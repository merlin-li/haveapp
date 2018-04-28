$(function(){
    var swiper = new Swiper('.swiper-case', {
        autoplay:4000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    $(".page_line ul li").click(function(){
        var x=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".content_flists>ul>li").eq(x).fadeIn().siblings().hide();
    });
    //量身定制
    var timer;
    $(".page_lists li").mouseenter(function(){
        var that=$(this);
        timer = setTimeout(function(){
        that.addClass("lists-active");
        that.find(".theme_img").hide();
        that.find(".check_img").fadeIn();
        that.find(".theme_bottom").hide();
        that.find(".check_sao").fadeIn();
        },100)
    }).mouseleave(function(){
        clearTimeout(timer);
        $(this).removeClass("lists-active");
        $(this).find(".check_img").hide();
        $(this).find(".theme_img").fadeIn();
        $(this).find(".check_sao").hide();
        $(this).find(".theme_bottom").fadeIn();
    });

    $(".content_tlists ul li").mouseenter(function(){
        $(this).css("background-color","#fff").siblings().css("background-color","transparent");
        $(this).addClass("first_li-img").siblings().removeClass("first_li-img");
    });
    
    $(".chacha").click(function(){
        $(".xudd_video").fadeOut();
        $("body").css("height","auto");
        $("body").css("overflow","");
        $("#play_video").get(0).pause();
    })
});
