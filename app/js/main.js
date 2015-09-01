/**
 * Created by lihao on 14-7-10.
 */
//JS库配置
"use strict";
requirejs.config({
    baseUrl: "js",
    waitSeconds:20,
    paths: {
        'jquery':'./lib/jquery',
        'jquery-json':'./lib/json',
        'jquery-ui':'./lib/jquery-ui',
        'jquery.layout':'./lib/jquery.layout-latest',
        'jquery.tmpl':'./lib/jquery.tmpl'
    },
    shim: { 
        'jquery-json': {
            deps: ['jquery'],
            exports: 'jQuery-json'
        },
        'jquery-ui': {
            deps: ['jquery'],
            exports: 'jQuery-ui'
        },
        'jquery.layout': {
            deps: ['jquery','jquery-ui'],
            exports: 'jQuery.layout'
        },
        'jquery.tmpl': {
            deps: ['jquery'],
            exports: 'jQuery.tmpl'
        }
    }
});

require(["system", "jquery.layout"], function() {

    
});


