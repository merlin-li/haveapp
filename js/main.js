$(function() {
    function i(i) {
        $(".slider .now .slider-box li").fadeOut(0, function() {
            $(".slider.jq-index").css({
                backgroundColor: a[i]
            }), $(".slider .now .slider-box li").eq(i).fadeIn(10)
        }), $(".now .slider-icons").find("img").attr("src", $("#staticUrl").val() + "/img/slider_icon.png"), $(".now .slider-icons li").eq(i).find("img").attr("src", $("#staticUrl").val() + "/img/slider_icon_now.png")
    }

    function e(s, n) {
        "next" == s ? (r++, r >= d && (r = 0)) : "pre" == s ? (r--, 0 > r && (r = d)) : r = n, clearInterval(u), i(r), u = setInterval(function() {
            e("next")
        }, 1e3 * l)
    }

    function s() {
        $(".cases-box ul").animate({
            marginLeft: -250 * g + "px"
        }, 300)
    }

    function n(i, e, s, n) {
        var t = "<li",
            o = "",
            c = $("#staticUrl").val() + "/" + s;
        return i && (o = ' class="now"', c = $("#staticUrl").val() + "/" + e), t = t + o + '><a href="javascript:;"><img src="' + c + '"><span>' + n + "</span></a></li>"
    }

    function t(i, e) {
        $(".cases-logo li").remove();
        for (var t = 0; t < i.apps.length; t++) {
            var o = t == e ? !0 : !1;
            $(n(o, i.apps[t].icon, i.apps[t].icon_shadow, i.apps[t].title)).appendTo($(".cases-logo"))
        }
        $(".cases-slider li").remove();
        for (var t = 0; t < i.apps[e].slider.length; t++) $('<li><img src="' + $("#staticUrl").val() + "/" + i.apps[e].slider[t] + '"></li>').appendTo($(".cases-slider ul"));
        $(".cases-img").attr("src", $("#staticUrl").val() + "/" + i.apps[e].er_code), $(".cases-erwei").attr("src", $("#staticUrl").val() + "/" + i.apps[e].er_code), $(".cases-txt h2").text(i.apps[e].title), $(".cases-info .cases-title").text(i.apps[e].title), $(".cases-txt p").text(i.apps[e].desc), g = 0, s()
    }

    function o() {
        $(".products-index-box ul").animate({
            marginLeft: -242 * v + "px"
        }, 300)
    }
    var c = null;
    $(".jq-drop").mouseenter(function() {
        clearTimeout(c), $(".jq-dropdown").addClass("hide"), $(this).find(".jq-dropdown").removeClass("hide")
    }).mouseleave(function() {
        $(this);
        c = setTimeout(function() {
            $(".jq-dropdown").addClass("hide")
        }, 100)
    });
    var a = ["#95aeff", "#44b6ff", "#4f68a8", "#3cb9ff", "#5fc2fd", "#1aabe6", "#9aabff", "#92b7f9", "#7bceff", "#5fe5ca", "#6dc4ff"],
        r = 0,
        l = 3,
        d = $(".now .slider-icons li").length,
        u = null,
        f = $(".jq-index .now .slider-icons").width();
    $(".jq-index .now .slider-box").css({
        width: 100 * d + "%"
    }), $(".jq-index .now .slider-box li").css({
        width: 100 / d + "%"
    }).hide().eq(0).show(), $(".jq-index .now .slider-icons").css({
        marginLeft: f / 2 * -1
    }), u = setInterval(function() {
        e("next")
    }, 1e3 * l), $(".slider-pre").click(function() {
        e("pre")
    }), $(".slider-next").click(function() {
        e("next")
    }), $(".now .slider-icons li").each(function(i) {
        $(this).click(function() {
            e("goto", i)
        })
    });
    var p = 0;
    $(".used-pre").click(function() {
        p = --p < 0 ? 3 : p--, $(".clients-display ul").animate({
            marginLeft: -100 * p + "%"
        })
    }), $(".used-next").click(function() {
        p = ++p >= 4 ? 0 : p++, $(".clients-display ul").animate({
            marginLeft: -100 * p + "%"
        })
    }), $(".jq-show").mouseenter(function() {
        $(".jq-info").addClass("hide"), $(this).parents(".jq-item").find(".jq-info").removeClass("hide").find("a").css({
            left: "-100%"
        }).animate({
            left: "0%"
        }, 100)
    }), $(".product-next").click(function() {
        $(".items-ul").animate({
            marginLeft: "-100%"
        }), $(".product-icons img").eq(1).attr("src", $("#staticUrl").val() + "/img/product_slider_icon.png"), $(".product-icons img").eq(0).attr("src", $("#staticUrl").val() + "/img/product_slider_icon_now.png"), $(this).addClass("hide"), $(".product-pre").removeClass("hide"), $(".jq-show").eq(4).trigger("mouseenter")
    }), $(".product-pre").click(function() {
        $(".items-ul").animate({
            marginLeft: "0%"
        }), $(".product-icons img").eq(1).attr("src", $("#staticUrl").val() + "/img/product_slider_icon_now.png"), $(".product-icons img").eq(0).attr("src", $("#staticUrl").val() + "/img/product_slider_icon.png"), $(this).addClass("hide"), $(".product-next").removeClass("hide"), $(".jq-show").eq(0).trigger("mouseenter")
    }), $(".product-icons img").each(function(i) {
        $(this).click(function() {
            0 == i ? $(".product-pre").trigger("click") : $(".product-next").trigger("click")
        })
    }), $(".er-a-pos a").mouseenter(function() {
        var i = $(this).attr("id");
        $("." + i).show()
    }).mouseleave(function() {
        $(".er-img-pos div,.er-img-pos span").hide()
    }), $(".jq-case").mouseenter(function() {
        $(this).find(".jq-case-info").show().animate({
            top: 0
        }, 200)
    }).mouseleave(function() {
        $(this).find(".jq-case-info").animate({
            top: "100%"
        }, 200, function() {
            $(this).find(".jq-case-info").hide()
        })
    });
    var h = $(".city-slider ul .jq-case").length - 4,
        m = 0;
    $(".ct-next").click(function() {
        m++, m > h && m--, $(".city-slider>ul").animate({
            marginLeft: -231 * m
        })
    }), $(".ct-pre").click(function() {
        m--, 0 > m && m++, $(".city-slider>ul").animate({
            marginLeft: -231 * m
        })
    }), $(".cont-a li").each(function(i) {
        $(this).click(function() {
            $(".cont").attr("src", "img/proxy/proxy3_cont" + i + ".png?20171019")
        })
    }), $(".jq-star-show").click(function() {
        $(this).parent().find(".jq-star-show,.jq-info-show").addClass("hide"), $(this).parent().find(".jq-star-hide,.jq-info-hide").removeClass("hide")
    }), $(".jq-star-hide").click(function() {
        $(this).parent().find(".jq-star-show,.jq-info-show").removeClass("hide"), $(this).parent().find(".jq-star-hide,.jq-info-hide").addClass("hide")
    }), $(".products-menus li").each(function(i) {
        $(this).click(function() {
            $(".products-menus .now").removeClass("now"), $(this).addClass("now"), 0 == i ? $(".products-cont li").show() : ($(".products-cont li").hide(), $(".products-cont .li" + i).show())
        })
    });
    var g = 0;
    $(".cases-pre").click(function() {
        g = g-- <= 0 ? 0 : g, s()
    }), $(".cases-next").click(function() {
        g = g++ >= $(".cases-box li").length - 3 ? $(".cases-box li").length - 3 : g, s()
    });
    var w = 0;
    $(".cases-menus li").each(function(i) {
        $(this).mouseenter(function() {
            $(".cases-menus .now").removeClass("now"), $(this).addClass("now");
            var e = window.casedata;
            w = i, t(e[w], 0)
        })
    }), $(".cases-logo").on("mouseenter", "li", function(i) {
        if ($(this).hasClass("now")) return !1;
        $(".cases-logo .now").removeClass("now"), $(this).addClass("now");
        var i = $(".cases-logo li").index($(this)),
            e = window.casedata;
        t(e[w], i)
    });
    var v = 0;
    $(".products-index-pre").click(function() {
        v = v-- <= 0 ? 0 : v, o()
    }), $(".products-index-next").click(function() {
        v = v++ >= $(".products-index-box li").length - 3 ? $(".products-index-box li").length - 3 : v, o()
    }), $(".jq-tab li").each(function(i) {
        $(this).click(function() {
            $(".jq-tab .now").removeClass("now"), $(this).addClass("now"), $(".jq-fx-box img").attr("src", "img/business/fx" + i + "_bg.jpg")
        })
    })
});