var actAm = function(t) {
    var e = this.opt = {
        type: 0,
        wrapper: "",
        box: "",
        active: "active",
        event: "hover",
        current: 0,
        auto: !1,
        autoTime: 5e3,
        interval: 0,
        cb: function() {}
    };
    $.extend(this.opt, t);
    var n = this;
    this.init = function() {
        $(e.wrapper).length > 1 ? $(e.wrapper).each(function(t, i) {
            n.eventInit($(i), $(e.box).eq(t))
        }) : n.eventInit($(e.wrapper), $(e.box))
    }, this.eventInit = function(t, i) {
        t.children().on(e.event, function() {
            var r = $(this),
                a = r.index();
            n.wrapChange(this, t), e.type && n.boxChange(a, i), e.current = a, e.cb(a), clearInterval(e.interval), n.timeInit(t, i)
        }), n.timeInit(t, i)
    }, this.timeInit = function(t, i) {
        e.auto && (e.interval = setInterval(function() {
            e.current == t.children().length - 1 ? e.current = 0 : e.current++, n.boxChange(e.current, i), n.boxChange(e.current, t), e.cb(e.current)
        }, e.autoTime))
    }, this.boxChange = function(t, n) {
        n.children("." + e.active).removeClass(e.active), n.children().eq(t).addClass(e.active)
    }, this.wrapChange = function(t, n) {
        n.children("." + e.active).removeClass(e.active), $(t).addClass(e.active)
    }, this.init()
};