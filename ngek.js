// Developed by Hoctro - All rights reserved 2007
var cb={search:function(query,type,start,increment,func){var script=document.createElement('script');script.setAttribute('src','http://'+query+'/feeds/'+type+'/default?alt=json-in-script&amp;start-index='
+start+'&amp;max-results='+increment+'&amp;callback='+func+'&amp;orderby=published');script.setAttribute('type','text/javascript');document.documentElement.firstChild.appendChild(script);},searchLabel:function(query,label,func){var script=document.createElement('script');script.setAttribute('src','http://'+query+'/feeds/posts/default/-/'+encodeURIComponent(label)+'?alt=json-in-script&amp;callback='+func+'&amp;orderby=published');script.setAttribute('type','text/javascript');document.documentElement.firstChild.appendChild(script);},getTotalResults:function(json){return json.feed.openSearch$totalResults.$t;},getStartIndex:function(json){return json.feed.openSearch$startIndex.$t;},getLink:function(entry,name){var alturl;for(var k=0;k&lt;entry.link.length;k++){if(entry.link[k].rel==name)
alturl=entry.link[k].href;}
return alturl;},getTitle:function(entry){return entry.title.$t;},getContent:function(entry){return entry.content.$t;},getCommentAuthor:function(entry){return entry.author[0].name.$t;},getLabelFromURL:function(json){for(var l=0;l&lt;json.feed.link.length;l++){if(json.feed.link[l].rel=='alternate'){var raw=json.feed.link[l].href;
// The next two lines are borrowed from Ramani's Neo Template
var label=raw.substr(raw.lastIndexOf('/')+1);return decodeURIComponent(label);}}},txt:function(s){return s+" Widget by &lt;a href='http://hoctro.blogspot.com"+"'&gt;Hoctro&lt;/a&gt;"+"Re-Published by &lt;a href='http://beben-koben.blogspot.com"+"'&gt;BeBeN&lt;/a&gt;";}};
