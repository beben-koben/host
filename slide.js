/*
 * jScroller 0.3 - Scroller Script
 *
 * Copyright (c) 2007 Markus Bordihn (http://markusbordihn.de)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 */
$(document).ready(function(){function e(){s.scroller.interval||(s.scroller.interval=window.setInterval(o,s.scroller.refresh))}function t(){s.scroller.interval&&(window.clearInterval(s.scroller.interval),s.scroller.interval=0)}function r(){$("#scroller a").click(function(){return window.open(this.href),!1}),c.css("overflow","hidden"),s.scroller.interval||(window.attachEvent?(window.attachEvent("onfocus",e),window.attachEvent("onblur",t),window.attachEvent("onresize",e),window.attachEvent("onscroll",e)):window.addEventListener&&(window.addEventListener("focus",e,!1),window.addEventListener("blur",t,!1),window.addEventListener("resize",e,!1),window.addEventListener("scroll",e,!1)),e(),$.browser.msie&&window.focus())}function n(e){return"string"==typeof e&&document.getElementById?document.getElementById(e):e}function o(){if(scroller_dom=n(l.attr("id"))){var e=Number(/[0-9-,.]+/.exec(l.css("top"))||0),t=Number(/[0-9-,.]+/.exec(l.css("left"))||0),r=c.height(),o=c.width(),i=s.scroller.speed,d=scroller_dom.offsetHeight,a=scroller_dom.offsetWidth,w=s.scroller.direction,f=l;switch(w){case"up":e>-1*d||(e=r),f.css("top",e-i+"px");break;case"right":o>t||(t=-1*a),f.css("left",t+i+"px");break;case"left":t>-1*a||(t=o),f.css("left",t-i+"px");break;case"down":r>e||(e=-1*d),f.css("top",e+i+"px")}}}this.defaults={scroller:{interval:0,refresh:150,direction:"left",speed:5,id:"#scroller",cont_id:"#scroller_container"}};var s=$.extend(this.defaults),l=$(s.scroller.id),c=$(s.scroller.cont_id);l&&c&&(l.css({position:"absolute",left:0,top:0}),r())});