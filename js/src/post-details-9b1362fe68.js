"use strict";$(document).ready(function(){function i(){$(e+" "+o).removeClass(o.substring(1))}var e,t,o,s,a,n;function c(t){t=t||"auto",$(".post-toc").css("max-height",t)}e=".post-toc",t=$(e),o=".active-current",t.on("activate.bs.scrollspy",function(){var t=$(e+" .active").last();i(),t.addClass("active-current")}).on("clear.bs.scrollspy",i),$("body").scrollspy({target:e}),NexT.utils.needAffix()&&(s=$(".header-inner").height(),a=parseInt($(".main").css("padding-bottom"),10),n=0===CONFIG.sidebar.offset_float?s+CONFIG.sidebar.offset:s,$(".sidebar-inner").affix({offset:{top:n,bottom:a}}),$(document).on("affixed.bs.affix",function(){c(document.body.clientHeight-100)})),function(){var t;$(window).on("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){var t=document.body.clientHeight-100;c(t)},0)}),c(document.body.clientHeight-100);var i=NexT.utils.getScrollbarWidth();$(".post-toc").css("width","calc(100% + "+i+"px)")}()}),$(document).ready(function(){var o=$("html"),a=200,n=$.isFunction(o.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this),i="sidebar-nav-active",e="sidebar-panel-active";if(!t.hasClass(i)){var o=$("."+e),s=$("."+t.data("target"));n?o.velocity("transition.slideUpOut",a,function(){s.velocity("stop").velocity("transition.slideDownIn",a).addClass(e)}):o.animate({opacity:0},a,function(){o.hide(),s.stop().css({opacity:0,display:"block"}).animate({opacity:1},a,function(){o.removeClass(e),s.addClass(e)})}),t.siblings().removeClass(i),t.addClass(i)}}),$(".post-toc a").on("click",function(t){t.preventDefault();var i=NexT.utils.escapeSelector(this.getAttribute("href")),e=$(i).offset().top;n?o.velocity("stop").velocity("scroll",{offset:e+"px",mobileHA:!1}):$("html, body").stop().animate({scrollTop:e},500)});var t=$(".post-toc-content"),i="post"===CONFIG.sidebar.display||"always"===CONFIG.sidebar.display,e=0<t.length&&0<t.html().trim().length;i&&e&&(CONFIG.motion?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar())});