<!--
//Author: Gman || http://gman-blog.blogspot.com || Special version for Gman only

function addSmileyById(str) {
	var b = document.getElementById(str);
	if(!b) return 0;
	GmanSmiley(b);
}
function addSmileyByClass(str) {
	var elemts = getElementsByClass(str);
	if(elemts.length == 0) return 0;
	for(var i=0; i<elemts.length; i++)
    GmanSmiley(elemts[i]);
}
function GmanSmiley(b) {
var s = b.innerHTML;
var p = '<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/';
var u = '.gif\" style=\"border:0; margin:0; padding:0;\"/>';

s = s.replace(/(<[^>]*:(?=(p|d|l)))/ig, "$1 ");
s = s.replace(/x_x/ig, p+"109"+u);
s = s.replace(/:!!/g, p+"110"+u);
s = s.replace(/\\m\//g, p+"111"+u);
s = s.replace(/:-q/g, p+"112"+u);
s = s.replace(/:-bd/g, p+"113"+u);
s = s.replace(/\^#\(\^/g, p+"114"+u);
s = s.replace(/:bz/g, p+"115"+u);
s = s.replace(/:\)&gt;-/g, p+"67"+u);
s = s.replace(/:o3/g, p+"108"+u);
s = s.replace(/:-\?\?/g, p+"106"+u);
s = s.replace(/%-\(/g, p+"107"+u);
s = s.replace(/:@\)/g, p+"49"+u);
s = s.replace(/3:-o/ig, p+"50"+u);
s = s.replace(/:\(\|\)/g, p+"51"+u);
s = s.replace(/~:&gt;/g, p+"52"+u);
s = s.replace(/@\};-/g, p+"53"+u);
s = s.replace(/%%-/g, p+"54"+u);
s = s.replace(/\*\*==/g, p+"55"+u);
s = s.replace(/\(~~\)/g, p+"56"+u);
s = s.replace(/~o\)/ig, p+"57"+u);
s = s.replace(/\*-:\)/g, p+"58"+u);
s = s.replace(/8-x/ig, p+"59"+u);
s = s.replace(/=:\)/g, p+"60"+u);
s = s.replace(/&gt;-\)/g, p+"61"+u);
s = s.replace(/:-?l/ig, p+"62"+u);
s = s.replace(/\[-o&lt;/ig, p+"63"+u);
s = s.replace(/\$-\)/g, p+"64"+u);
s = s.replace(/:-"/g, p+"65"+u);
s = s.replace(/b-\(/ig, p+"66"+u);
s = s.replace(/\[-x/ig, p+"68"+u);
s = s.replace(/\\:D\//ig, p+"69"+u);
s = s.replace(/&gt;:\//g, p+"70"+u);
s = s.replace(/;\)\)/g, p+"71"+u);
s = s.replace(/:-@/g, p+"76"+u);
s = s.replace(/\^:\)\^/g, p+"77"+u);
s = s.replace(/:-j/ig, p+"78"+u);
s = s.replace(/\(\*\)/g, p+"79"+u);
s = s.replace(/o-&gt;/ig, p+"72"+u);
s = s.replace(/o=&gt;/ig, p+"73"+u);
s = s.replace(/o-\+/ig, p+"74"+u);
s = s.replace(/\(%\)/g, p+"75"+u);
s = s.replace(/o:-\)/ig, p+"25"+u);
s = s.replace(/&lt;:-p/ig, p+"36"+u);
s = s.replace(/\/:\)/g, p+"23"+u);
s = s.replace(/:\)\)/g, p+"21"+u);
s = s.replace(/&gt;:\)/g, p+"19"+u);
s = s.replace(/&lt;\):\)/g, p+"48"+u);
s = s.replace(/:\)\]/g, p+"100"+u);
s = s.replace(/:-?\)/g, p+"1"+u);
s = s.replace(/:\(\(/g, p+"20"+u);
s = s.replace(/:-?\(/g, p+"2"+u);
s = s.replace(/;;\)/g, p+"5"+u);
s = s.replace(/&gt;:d&lt;/ig, p+"6"+u);
s = s.replace(/:D/ig, p+"4"+u);
s = s.replace(/:-\//g, p+"7"+u);
s = s.replace(/:-?x/ig, p+"8"+u);
s = s.replace(/:"&gt;/g, p+"9"+u);
s = s.replace(/&gt;:-?P/ig, p+"47"+u);
s = s.replace(/:-?p/ig, p+"10"+u);
s = s.replace(/:-?\*/g, p+"11"+u);
s = s.replace(/=\(\(/g, p+"12"+u);
s = s.replace(/:-o/ig, p+"13"+u);
s = s.replace(/~x\(/ig, p+"102"+u);
s = s.replace(/X\(/ig, p+"14"+u);
s = s.replace(/:-?&gt;/g, p+"15"+u);
s = s.replace(/B-\)/ig, p+"16"+u);
s = s.replace(/:-ss/ig, p+"42"+u);
s = s.replace(/#:-s/ig, p+"18"+u);
s = s.replace(/:-s/ig, p+"17"+u);
s = s.replace(/\(:\|/g, p+"37"+u);
s = s.replace(/:\|/g, p+"22"+u);
s = s.replace(/=\)\)/g, p+"24"+u);
s = s.replace(/:-b/ig, p+"26"+u);
s = s.replace(/=;/g, p+"27"+u);
s = s.replace(/:-c/ig, p+"101"+u);
s = s.replace(/:-h/ig, p+"103"+u);
s = s.replace(/:-t/ig, p+"104"+u);
s = s.replace(/8-&gt;/g, p+"105"+u);
s = s.replace(/I-\)/ig, p+"28"+u);
s = s.replace(/8-\|/g, p+"29"+u);
s = s.replace(/L-\)/ig, p+"30"+u);
s = s.replace(/:-&amp;/g, p+"31"+u);
s = s.replace(/:-\$/g, p+"32"+u);
s = s.replace(/\[-\(/g, p+"33"+u);
s = s.replace(/:o\)/ig, p+"34"+u);
s = s.replace(/8-\}/g, p+"35"+u);
s = s.replace(/=p~/ig, p+"38"+u);
s = s.replace(/:-\?/g, p+"39"+u);
s = s.replace(/#-o/ig, p+"40"+u);
s = s.replace(/=d&gt;/ig, p+"41"+u);
s = s.replace(/@-\)/g, p+"43"+u);
s = s.replace(/:\^o/ig, p+"44"+u);
s = s.replace(/:-w/ig, p+"45"+u);
s = s.replace(/:-?&lt;/g, p+"46"+u);
s = s.replace(/;-?\)/g, p+"3"+u);
b.innerHTML = s;
}

function getElementsByClass(getClass,tag,node) {
// Set optional defaults
if (tag == null)
tag = '*';
if (node == null)
node = document;
// Load constants
// const allElements2 = document.getElementsByTagName('*');
const allElements = node.getElementsByTagName(tag);
const elements = new Array();
const pattern = new RegExp("(^|\\s)"+getClass+"(\\s|$)");
// Loop allElements
var e = 0;
for (var i=0; i<allElements.length; i++) {
if (pattern.test(allElements[i].className) ) {
elements[e] = allElements[i];
e++;
}
}
// Return elemnts array
return elements;
}
addSmileyById('emoticon');
-->
