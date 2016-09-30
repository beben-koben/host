/* anchorCloud */
!function(t){t.fn.anchorCloud=function(e){$this=t(this);var o="",i="",r=[],n="",a=t.extend({},t.fn.anchorCloud.defaults,e);return $this.each(function(e,c){o=t(c).find("a.judul").get(),n=$this.selector.replace("#","");var l=t.meta?t.extend({},a,$this.data()):a;t.each(o,function(e,o){$description=t("<div/>").addClass("anchorDescription").css({"font-size":"11px",color:l.description_color,"border-top":"1px solid #520","padding-top":"3px",margin:"5px"}),$title=t("<div/>").addClass("anchorTitle").css({"font-size":"13px","font-weight":"bold",color:l.title_color,padding:"0",margin:"5px"}).after($description),$arrow=t("<span/>").css({"border-bottom":"10px solid "+l.background,"border-left":"10px solid transparent","border-right":"10px solid transparent",height:"0",width:"0",position:"absolute",top:"-11px",left:"10px"}).addClass("upArrow"),$append=t("<div/>").css({border:"1px solid "+l.background,position:"absolute",width:"250px","font-size":"10px",height:"auto","background-color":l.background,padding:"3px",margin:"0",left:"100px","font-family":"arial","border-radius":"10px","box-shadow":"0px 3px 5px #000"}).addClass("ancSite").html($title.before($arrow)),t(o).bind("mouseover",function(){var e=t(this).position(),a=Math.round(e.left+5),c=Math.round(e.top+25);if($append.css({left:a+"px",top:c+"px"}),$link=t(this).attr("href"),i=$link.replace(/[^a-zA-Z 0-9]+/g,""),i+="_"+n,-1!=$link.search("youtu")){if(-1!=$link.search("v="))var d=$link.split("=");else var d=$link.split("be/");var s='<center><iframe width="240" height="160" src="http://www.youtube.com/embed/'+d[1]+'" frameborder="0"></iframe></center>';$append.find(".anchorDescription").html("<center>"+l.loading_text+"</center>")}else if(-1!=$link.search("vimeo"))var d=$link.split("com/"),s='<center><iframe src="http://player.vimeo.com/video/'+d[1]+'?title=0&amp;byline=0&amp;portrait=0" width="240" height="160" frameborder="0"></iframe></center>';if(void 0==r[i]){var p="http://query.yahooapis.com/v1/public/yql?q=",h='select * from html where url="'+$link+"\" and (xpath='//meta[@name=\"description\"]' or xpath='//title')",f=p+encodeURI(h)+"&format=json";$append.find(".anchorDescription").html("<center>"+l.loading_text+"</center>"),$append.find(".anchorTitle").html(""),t.getJSON(f,function(e){var o=[];if(t.each(e,function(t,e){o[t]=e}),o){var n=o.query.results.title,a=o.query.results.meta.content;if($append.attr("id",i),n)$this.find(".anchorTitle").html(n),s?($this.find(".anchorDescription").html(s),r[i]=[n,s]):($this.find(".anchorDescription").html(a),r[i]=[n,a]);else{var c="<center style='"+l.title_color+"'>No data available</center>";r[i]=["",c],$this.html(c)}}}),t(o).css("color",l.anchor_hover_color).after($append.show())}else $this.find(".anchorTitle").html(r[i][0]),$this.find(".anchorDescription").html(r[i][1]),t(o).css("color","red").after($append.show())}).mouseout(function(){t(this).css("color",l.anchor_default_color)})}),t(document).click(function(e){0==t(e.target).hasClass("ancSite")&&t(".ancSite").fadeOut()})})},t.fn.anchorCloud.defaults={background:"#debe94",title_color:"#FFF",loading_text:"Fetching load data ...",description_color:"#530"}}(jQuery),$(document).ready(function(){$(".judul").anchorCloud()});
/* var text */
function replaceText(){if(!document.getElementById){return;}
bodyText=document.getElementById("media");theText=bodyText.innerHTML;theText=theText.replace(/\[bq\]/gi,"<marquee behavior='alternate'>");theText=theText.replace(/\[\/bq\]/gi,"</marquee>");theText=theText.replace(/\[bb\=\"/gi,"<font size='");theText=theText.replace(/\[\/bb\]/gi,"</font>");theText=theText.replace(/\[bc=\"/gi,"<font color='");theText=theText.replace(/\[\/bc\]/gi,"</font>");theText=theText.replace(/\[bh\=\"/gi,"<span style='background-color:");theText=theText.replace(/\[\/bh\]/gi,"</span>");theText=theText.replace(/\"\]/gi,"'>");bodyText.innerHTML=theText;}
replaceText();