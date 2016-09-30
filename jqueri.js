/* pre hover */
jQuery(document).ready(function(){jQuery("pre").hover(function(){var width=jQuery("codec",this).width();var pad=width+5;if(width>635){jQuery(this).stop(true,false).css({zIndex:"100",position:"relative"}).animate({width:pad+"px"});}},function(){jQuery(this).stop(true,false).animate({width:635});});});
/* simple-tabs */
jQuery(function($){$('.simple-tabs').each(function(){var container=$(this);container.find('> ul li a').click(function(){$(this).parent().addClass('selected-tab').siblings().removeClass('selected-tab');container.find('.tab-panel').hide().filter(this.hash).show();return false;}).eq(0).click();});});
/* message rss */
$(document).ready(function()
{$("#object").animate({bottom:"-15px"},2500).fadeOut(400).fadeIn(400).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);$("#close_message").click(function()
{$("#object").fadeOut("slow");});
$("img").each(function(index,elem){var title=$(this).attr("alt");$(this).attr("title",title);});});
/* slide-toggle */
function showSliding(){$(".minipost").animate({"height":"toggle"},{duration:700});}
/* show-hide */
$(document).ready(function(){$('#ShowHide').hide();$('a.BukaTutup').click(function(){var id=$(this).attr('id');$('#ShowHide'+id).toggle(700);return false;});});
/* slideshow header */
$(function(){$('#slideshow img:gt(0)').hide();setInterval(function(){$('#slideshow :first-child').fadeOut().next('img').fadeIn().end().appendTo('#slideshow');},9000);});
/* toolbar static */
$(document).ready(function(){(function(){var fadeSpeed=500,fadeTo=0.5,topDistance=30;var topbarME=function(){$('#kabur').fadeTo(fadeSpeed,1);},topbarML=function(){$('#kabur').fadeTo(fadeSpeed,fadeTo);};var inside=false;$(window).scroll(function(){position=$(window).scrollTop();if(position>topDistance&&!inside){topbarML();$('#kabur').bind('mouseenter',topbarME);$('#kabur').bind('mouseleave',topbarML);inside=true;}
else if(position<topDistance){topbarME();$('#kabur').unbind('mouseenter',topbarME);$('#kabur').unbind('mouseleave',topbarML);inside=false;}});})();});
/* toolbar static */
$(function(){var $elem=$('#abah');$('#nav_up').fadeIn('slow');$('#nav_down').fadeIn('slow');$(window).bind('scrollstart',function(){$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});});$(window).bind('scrollstop',function(){$('#nav_up,#nav_down').stop().animate({'opacity':'1'});});$('#nav_down').click(function(e){$('html, body').animate({scrollTop:$elem.height()},800);});$('#nav_up').click(function(e){$('html, body').animate({scrollTop:'0px'},800);});});
/* nongol digigir */
$(function(){$(window).scroll(function(){var distanceTop=$('#last').offset().top-$(window).height();if($(window).scrollTop()>distanceTop)
$('#slidebox').animate({'right':'0px'},600);else
$('#slidebox').stop(true).animate({'right':'-325px'},150);});$('#slidebox .close').bind('click',function(){$(this).parent().remove();});});
/* lightbox */
jQuery(document).ready(function($){$('.lightbox_img').click(function(e){e.preventDefault();var image_href=$(this).attr("href");if($('#lightbox').length>0){$('#boxIMG').html('<img src="'+image_href+'" />');$('#lightbox').show();}
else{var lightbox='<div id="lightbox">'+'<div id="boxIMG">'+'<img src="'+image_href+'" />'+'</div>'+'</div>';$('body').append(lightbox);}});$('#lightbox').live('click',function(){$('#lightbox').hide();});});
/* popper */
$(function(){$('a.b-pop').click(function(){var href=$(this).attr('href');window.open(href,'popup','height=450,width=400,toolbar=0,location=0,statusbar=1,menubar=0,scrollbars=yes');return false;});});
/* query link */
$(function(){$('q').each(function(){$(this).replaceWith(function(){return $('<a href="http://www.google.com/cse?q='+$(this).text()+'&cx=010449103265333969281:_1pbzcoer4w'+'"><q>'+$(this).html()+'</q></a>');});});});
