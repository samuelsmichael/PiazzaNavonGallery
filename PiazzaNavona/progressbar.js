// Progressbar - Version 2.0
// Author: Brian Gosselin of http://scriptasylum.com
// Featured on Dynamic Drive (http://www.dynamicdrive.com)
// PUT THE NAMES OF ALL YOUR IMAGES THAT NEED TO BE "CACHED" IN THE "imagenames" ARRAY.
// DONT FORGET THE COMMA BETWEEN EACH ENTRY, OR THE TICK MARKS AROUND EACH NAME.
// WHEN ALL THE IMAGES ARE DONE LOADING, THE "imagesdone" VARIABLE IS SET TO "TRUE"

var imagenames=new Array
(
'web/headshot/thumbs/1.jpg',
	'web/headshot/thumbs/2.jpg',
	'web/headshot/thumbs/3.jpg',
	'web/headshot/thumbs/4.jpg',
	'web/headshot/thumbs/5.jpg',
	'web/headshot/thumbs/6.jpg',
	'web/headshot/thumbs/7.jpg',
	'web/headshot/thumbs/8.jpg',
	'web/headshot/thumbs/9.jpg',
	'web/headshot/thumbs/10.jpg',
	'web/headshot/thumbs/11.jpg',
	'web/headshot/thumbs/12.jpg',
	'web/headshot/thumbs/13.jpg',
	'web/headshot/thumbs/14.jpg',
	'web/headshot/thumbs/15.jpg',
	'web/headshot/thumbs/16.jpg',
	'web/headshot/thumbs/17.jpg',
	'web/headshot/thumbs/18.jpg',
	'web/headshot/thumbs/19.jpg',
	'web/headshot/thumbs/20.jpg',
	'web/headshot/thumbs/21.jpg',
	'web/headshot/thumbs/22.jpg',
	'web/headshot/thumbs/23.jpg',
	'web/headshot/thumbs/24.jpg',
	'web/headshot/thumbs/25.jpg',
	'web/headshot/thumbs/26.jpg',
	'web/headshot/thumbs/27.jpg',
	'web/headshot/thumbs/28.jpg',
	'web/headshot/thumbs/29.jpg',
	'web/headshot/thumbs/30.jpg',
	'web/headshot/thumbs/31.jpg',
	'web/headshot/thumbs/32.jpg',
	'web/headshot/thumbs/33.jpg',
	'web/headshot/thumbs/34.jpg',
	'web/headshot/thumbs/35.jpg',
	'web/headshot/thumbs/36.jpg',
	'web/headshot/thumbs/37.jpg',
	'web/headshot/thumbs/38.jpg',
	'web/headshot/thumbs/39.jpg',
	'web/headshot/thumbs/40.jpg',
	'web/headshot/thumbs/41.jpg',
	'web/headshot/thumbs/42.jpg',
	'web/headshot/thumbs/43.jpg',
	'web/headshot/thumbs/44.jpg',
	'web/headshot/thumbs/45.jpg',
	'web/headshot/thumbs/46.jpg',
	'web/headshot/thumbs/47.jpg',
	'web/headshot/thumbs/48.jpg',
	'web/headshot/thumbs/49.jpg',
	'web/headshot/thumbs/50.jpg',
	'web/headshot/thumbs/51.jpg',
	'web/headshot/thumbs/52.jpg',
	'web/headshot/thumbs/53.jpg',
	'web/headshot/thumbs/54.jpg',
	'web/headshot/thumbs/55.jpg',
	'web/headshot/thumbs/56.jpg',
	'web/headshot/thumbs/57.jpg',
	'web/headshot/thumbs/58.jpg',
	'web/headshot/thumbs/59.jpg',
	'web/headshot/thumbs/60.jpg',
	'web/headshot/thumbs/61.jpg',
	'web/headshot/thumbs/62.jpg',
	'web/headshot/thumbs/63.jpg',
	'web/headshot/thumbs/64.jpg',
	'web/headshot/thumbs/65.jpg',
	'web/headshot/thumbs/66.jpg',
	'web/headshot/thumbs/67.jpg',
	'web/headshot/thumbs/68.jpg',
	'web/headshot/thumbs/69.jpg',
	'web/headshot/thumbs/70.jpg',
	'web/headshot/thumbs/71.jpg',
	'web/headshot/thumbs/72.jpg',
	'web/headshot/thumbs/73.jpg',
	'web/headshot/thumbs/74.jpg'
);

var yposition=250;                                  //POSITION OF LOAD BAR FROM TOP OF WINDOW, IN PIXELS
var loadedcolor='gray' ;                // PROGRESS BAR COLOR
var unloadedcolor='white';                   // BGCOLOR OF UNLOADED AREA
var barheight=15;                                 // HEIGHT OF PROGRESS BAR IN PIXELS (MIN 25)
var barwidth=350;                                // WIDTH OF THE BAR IN PIXELS  
var bordercolor='black';                       // COLOR OF THE BORDER

//DO NOT EDIT BEYOND THIS POINT 
var NS4 = (navigator.appName.indexOf("Netscape")>=0 && parseFloat(navigator.appVersion) >= 4 && parseFloat(navigator.appVersion) < 5)? true : false;
var IE4 = (document.all)? true : false;
var NS6 = (parseFloat(navigator.appVersion) >= 5 && navigator.appName.indexOf("Netscape")>=0 )? true: false;
var imagesdone=false;
var blocksize=barwidth/(imagenames.length);
barheight=Math.max(barheight,25);
var loaded=0, perouter, perdone, images=new Array();
var txt=(NS4)?'<layer name="perouter" bgcolor="'+bordercolor+'" visibility="hide">' : '<div id="perouter" style="position:absolute; visibility:hidden; background-color:'+bordercolor+'">';
txt+='<table cellpadding="0" cellspacing="1" border="0"><tr><td width="'+barwidth+'" height="'+barheight+'" valign="center">';
if(NS4)txt+='<ilayer width="100%" height="100%"><layer width="100%" height="100%" bgcolor="'+unloadedcolor+'" top="0" left="0">';
txt+='<table cellpadding="0" cellspacing="0" border="0"><tr><td valign="center" width="'+barwidth+'" height="'+barheight+'" bgcolor="'+unloadedcolor+'"><center><font color="'+loadedcolor+'" size="1" face="sans-serif">Loading Images...</font></center></td></tr></table>';
if(NS4) txt+='</layer>';
txt+=(NS4)? '<layer name="perdone" width="100%" height="'+barheight+'" bgcolor="'+loadedcolor+'" top="0" left="0">' : '<div id="perdone" style="position:absolute; top:1px; left:1px; width:'+barwidth+'px; height:'+barheight+'px; background-color:'+loadedcolor+'; z-index:100">';
txt+='<table cellpadding="0" cellspacing="0" border="0"><tr><td valign="center" width="'+barwidth+'" height="'+barheight+'" bgcolor="'+loadedcolor+'"><center><font color="'+unloadedcolor+'" size="1" face="sans-serif">Loading Images...</font></center></td></tr></table>';
txt+=(NS4)? '</layer></ilayer>' : '</div>';
txt+='</td></tr></table>';
txt+=(NS4)?'</layer>' : '</div>';
document.write(txt);
function loadimages(){
if(NS4){
perouter=document.perouter;
perdone=document.perouter.document.layers[0].document.perdone;
}
if(NS6){
perouter=document.getElementById('perouter');
perdone=document.getElementById('perdone');
}
if(IE4){
perouter=document.all.perouter;
perdone=document.all.perdone;
}
cliplayer(perdone,0,0,barheight,0);
window.onresize=setouterpos;
setouterpos();
for(n=0;n<imagenames.length;n++){
images[n]=new Image();
images[n].src=imagenames[n];
setTimeout('checkload('+n+')' ,n*100);
}}
function setouterpos(){
var ww=(IE4)? document.body.clientWidth : window.innerWidth;
var x=(ww-barwidth)/2;
if(NS4){
perouter.moveTo(x,yposition);
perouter.visibility="show";
}
if(IE4||NS6){
perouter.style.left=x+'px';
perouter.style.top=yposition+'px';
perouter.style.visibility="visible";
}}
function dispbars(){
loaded++;
cliplayer(perdone, 0, blocksize*loaded, barheight, 0);
if(loaded>=imagenames.length)setTimeout('hideperouter()', 800);
}
function checkload(index){
(images[index].complete)? dispbars() : setTimeout('checkload('+index+')', 100);
}
function hideperouter(){
(NS4)? perouter.visibility="hide" : perouter.style.visibility="hidden";
imagesdone=true;
}
function cliplayer(layer, ct, cr, cb, cl){
if(NS4){
layer.clip.left=cl;
layer.clip.top=ct;
layer.clip.right=cr;
layer.clip.bottom=cb;
}
if(IE4||NS6)layer.style.clip='rect('+ct+' '+cr+' '+cb+' '+cl+')';
}
window.onload=loadimages;