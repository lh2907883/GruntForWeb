/**
 * Created by lihao on 14-7-11.
 */
"use strict";
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            "jquery.tmpl"
        ], factory);
    } else {
        // Browser globals:
        factory(window.jQuery, tmpl);
    }
})(function($, tmpl){
    var system = {
        tmpl: tmpl
    };

/************************************************************ notify *************************************************************/
    (function(system){
        var Notice = function() {};
        Notice.prototype = {

            setHtmlElem:function(a, b) {
                var c;
                if (a.toLowerCase() =='loading'){
                    c = '<img alt="" src="images/loading.gif">'+(b ? b : '正在提交您的请求，请稍候...');
                } else if (a.toLowerCase() =='warn'){
                    c = '<span class="gtl_ico_hits"></span>'+ b;
                } else if (a.toLowerCase() =='warm'){
                    c = '<span class="gtl_ico_hits"></span>'+ b;
                } else if (a.toLowerCase() =='error'){
                    c = '<span class="gtl_ico_fail"></span>'+ b;
                } else if (a.toLowerCase() =='success'){
                    c = '<span class="gtl_ico_succ"></span>'+ b;
                }
                this._$htmlElem = $('<div class="msgbox_layer_wrap">' + '<span id="mode_tips_v2" style="z-index: 10000;" class="msgbox_layer"><span class="gtl_ico_clear"></span>' + c + '<span class="gtl_end"></span></span></div>');
            },
            getHtmlElem:function() {
                return this._$htmlElem
            },
            alreadyExist:function() {
                if($("body").find(".msgbox_layer_wrap").length > 0){
                    return $("body").find(".msgbox_layer_wrap").is(":visible");
                } else {
                    return false;
                };
            },
            _timeOutFn:function(a) {
                var b = this;
                this._timeOut = setTimeout(function() {
                        b.hide(function() {
                            b._timeOut = 0
                        })
                    },
                    a)
            },
            show:function(a, b) {
                var c = this;
                var d = this._$htmlElem;
                $("body").append(d);
                d.hide().stop().slideDown(500,
                    function() {

                    })
            },
            update:function(a, b) {
                var sel = this._$htmlElem;
                if (this._timeOut) clearTimeout(this._timeOut);

                var c;
                if (a.toLowerCase() =='loading'){
                    c = '<img alt="" src="images/loading.gif">'+(b ? b : '正在提交您的请求，请稍候...');
                } else if (a.toLowerCase() =='warn'){
                    c = '<span class="gtl_ico_hits"></span>'+ b;
                } else if (a.toLowerCase() =='warm'){
                    c = '<span class="gtl_ico_hits"></span>'+ b;
                } else if (a.toLowerCase() =='error'){
                    c = '<span class="gtl_ico_fail"></span>'+ b;
                } else if (a.toLowerCase() =='success'){
                    c = '<span class="gtl_ico_succ"></span>'+ b;
                }
                sel.html('<div class="msgbox_layer_wrap">' + '<span id="mode_tips_v2" style="z-index: 10000;" class="msgbox_layer"><span class="gtl_ico_clear"></span>' + c + '<span class="gtl_end"></span></span></div>');
            },
            hide:function(a) {
                var b = this._$htmlElem;
                b.slideUp(500,
                    function() {
                        b.remove();
                        if (a instanceof Function) a()
                    })
            }
        }
        function Notices(a, b, c, d, e) {
            if (a.alreadyExist()) {
                a.update(b, c);
                a.show(d, e)
            } else
            {
                a.setHtmlElem(b, c);
                a.show(d, e)
            }
        }
        var notice = new Notice();
        system.notify = function(type,msg,mSec){
            if(notice)
                Notices(notice, type, msg, "", mSec || 800000);
        }
    })(system);


    window.system = system;
});
