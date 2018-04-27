$(function() {
    function a() {
        var a = {
                left: ".js-f3-l",
                right: ".js-f3-r",
                wrap: ".js-f3-wrap",
                margin: "30",
                width: "362",
                page: 1,
                pageNum: 3,
                pageSize: 3
            },
            t = $(a.wrap).children();
        a.width = t.first().outerWidth(), a.margin = parseInt(t.first().css("marginLeft")), a.pageSize = Math.ceil(t.length / 3), $(a.left).on("click", function() {
            n(1)
        }), $(a.right).on("click", function() {
            n(0)
        });
        var n = function(t) {
            var n = $(a.wrap),
                r = -a.margin - a.width;
            if (r = t ? Math.abs(r) : r, r *= !t && a.page == a.pageSize - 1 || t && a.page == a.pageSize ? parseInt(n.children().length % a.pageNum) : a.pageNum, 1 == a.page && t || a.page == a.pageSize && !t) return !1;
            var c = parseInt(n.css("marginLeft")) + r;
            n.is(":animated") || (n.animate({
                marginLeft: c
            }, 600), t ? a.page-- : a.page++)
        }
    }
    var t = [{
        wrapper: "#actBan",
        box: "#actBanBox",
        auto: !0,
        type: 1,
        cb: function(a) {
            var t = $("#actBanBox .active"),
                n = $("#actBan").children().eq(a).data("type");
            t.hasClass(n) && t.addClass(n), $("#actBanBg").attr({
                "class": "m-ban wrap " + n
            }), $(".m-hd").attr("class", "m-hd " + n)
        }
    }, {
        wrapper: "#actF2",
        box: "#actF2Box",
        type: 1,
        cb: function(a) {
            var t = ["bg_ds", "bg_cy", "bg_ls", "bg_xy", "bg_my", "bg_jy", "bg_fc", "bg_hssy", "bg_zx", "bg_qc"];
            $("#actF2Bg").attr("class", $("#actF2Bg").attr("class").replace(/\s+bg_.+/, " " + t[a]))
        }
    }, {
        wrapper: ".js-actF3"
    }, {
        wrapper: "#actF4"
    }];
    for (var n in t) new actAm(t[n]);
    a()
});
var countScroll = [];
$("[data-count]").each(function(a, t) {
    var n = $(t).offset().top - $(window).height(),
        r = new CountUp(t, 0, $(t).data("count"));
    countScroll[a] = {
        top: n,
        countUp: r
    }
}), $(window).scroll(function() {
    var a = $(window).scrollTop();
    for (var t in countScroll) a > countScroll[t].top && countScroll[t].countUp.start()
});