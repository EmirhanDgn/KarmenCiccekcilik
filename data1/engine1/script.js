// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBackCubic:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(-1.5*h*f*h+2*h*h+4*h*f+-9*h+5.5*f)}});function ws_dribbles(q,l,a){var e=jQuery;var k=e(this);var o=q.noCanvas||!document.createElement("canvas").getContext;var n=q.width,f=q.height;var j=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_dribbles").appendTo(a.parent());if(!o){var c=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(j);var p=c.get(0).getContext("2d")}var m=[["#bbbbbb",0.1,0.3,0.18],["#b3b3b3",0.9,0.8,0.15],["#b6b6b6",0.68,0.4,0.2],["#b9b9b9",0.25,0.4,0.15],["#cccccc",0.11,0.7,0.15],["#c3c3c3",0.18,0.1,0.15],["#c6c6c6",0.4,0.2,0.15],["#c9c9c9",0.55,-0.04,0.18],["#d3d3d3",0,0.95,0.13],["#d6d6d6",0.5,0.8,0.22],["#d9d9d9",0.9,0.1,0.18],["#eeeeee",0.3,0.9,0.18],["#e3e3e3",0.93,0.5,0.14],["#e6e6e6",0.7,0.9,0.15]];var d=[[[0.1,0.3,0,1],[0.9,0.8,0.15,0.85],[0.68,0.4,0,0.9],[0.25,0.4,0.21,0.79],[0.11,0.7,0.3,0.7],[0.18,0.1,0.45,0.55],[0.4,0.2,0,0.75],[0.55,-0.04,0.48,0.52],[0,0.95,0.21,0.79],[0.5,0.8,0.1,0.9],[0.9,0.1,0.25,0.75],[0.3,0.9,0.18,0.82],[0.93,0.5,0.4,0.6],[0.7,0.9,0.13,0.87]],[[-0.3,-0.2,0.06,1],[-0.1,-0.3,0.12,1],[-0.2,-0.5,0,1],[-0.1,-0.3,0.24,1],[-0.3,-0.4,0.4,1],[-0.5,-0.1,0.76,1],[-0.2,-0.1,0.62,1],[-0.3,-0.3,0.48,1],[-0.4,-0.1,0.05,1],[-0.5,-0.2,0.6,1],[-0.3,-0.25,0.75,1],[-0.1,-0.4,0.3,1],[-0.2,-0.35,0.95,1],[-0.15,-0.25,0.2,1]],[[1.3,1.2,0.06,1],[1.1,1.3,0.12,1],[1.2,1.5,0,1],[1.1,1.3,0.24,1],[1.3,1.4,0.4,1],[1.5,1.1,0.76,1],[1.2,1.1,0.62,1],[1.3,1.3,0.48,1],[1.4,1.1,0.05,1],[1.5,1.2,0.6,1],[1.3,1.25,0.75,1],[1.1,1.4,0.3,1],[1.2,1.35,0.95,1],[1.15,1.25,0.2,1]],[[0.1,1.3,0,1],[0.9,1.34,0.15,0.85],[0.68,1.23,0,0.9],[0.25,1.5,0.21,0.79],[0.11,1.2,0.3,0.7],[0.18,1.4,0.16,0.84],[0.4,1.17,0,0.75],[0.55,1.2,0,0.52],[0,1.5,0.21,0.79],[0.5,1.45,0,0.9],[0.9,1.34,0.25,0.75],[0.3,1.6,0.18,0.82],[0.93,1.2,0.09,0.91],[0.7,1.15,0.13,0.87]],[[0.1,-0.3,0,1],[0.9,-0.34,0.15,0.85],[0.68,-0.23,0,0.9],[0.25,-0.5,0.21,0.79],[0.11,-0.2,0.3,0.7],[0.18,-0.4,0.16,0.84],[0.4,-0.17,0,0.75],[0.55,-0.2,0,0.52],[0,-0.5,0.21,0.79],[0.5,-0.45,0,0.9],[0.9,-0.34,0.25,0.75],[0.3,-0.6,0.18,0.82],[0.93,-0.2,0.09,0.91],[0.7,-0.15,0.13,0.87]],[[-0.2,-0.1,0,1],[1.3,1.1,0.15,0.85],[0.48,1.4,0,0.9],[1.2,1.6,0.21,0.79],[1.11,-0.15,0.3,0.7],[0.28,1.3,0.16,0.84],[-0.1,-0.4,0,0.75],[0.15,1.3,0,0.52],[-0.5,0.85,0.21,0.79],[-0.2,0.7,0,0.9],[1.4,0.2,0.25,0.75],[1.1,1.5,0.18,0.82],[-0.43,-0.2,0.09,0.91],[0.7,1.5,0.13,0.87]]];function g(t,s,v){var u=new Date().getTime();var r=function(){var x=new Date().getTime();var w=(x-u)/t;if(w<1){s(w);requestAnimationFrame(r)}else{h(1)}};r();function h(w){cancelAnimationFrame(r);if(w){s(1)}if(v){v()}}return{stop:h}}function b(z,x,u,r){z.clearRect(0,0,n,f);for(var s=0,w=u.length;s<w;s++){var t=2-u[s][3];var y=u[s][2]*(1-x);var h=Math.max(0,Math.min(1,x*t-y));if(r&&e.easing[r]){h=e.easing[r](1,h,0,1,1,1)}var v=n;if(n/f<=1.8&&n/f>0.7){v*=2}else{if(n/f<=0.7){v=f*2}}z.beginPath();z.arc((u[s][0]+(m[s][1]-u[s][0])*h)*n,(u[s][1]+(m[s][2]-u[s][1])*h)*f,m[s][3]*h*v,0,2*Math.PI,false);z.fillStyle=m[s][0];z.fill()}}this.go=function(y,t){if(o){a.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(y?-y+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},q.duration,"easeInOutExpo",function(){k.trigger("effectEnd")})}else{n=a.width();f=a.height();var v=Math.floor(Math.random()*(d.length));var z=d[v];var s=d[Math.floor(Math.random()*(d.length))];c.attr({width:n,height:f});var w=l.get(v==0?t:y);for(var u=0,x=m.length;u<x;u++){var r=Math.abs(m[u][1]),h=Math.abs(m[u][2]);m[u][0]=i(w,{x:r*n,y:h*f,w:2,h:2})||m[u][0]}g(q.duration/2,function(A){b(p,A,z,"easeOutBackCubic")},function(){a.find(".ws_list").css({left:(y?-y+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});g(q.duration/2,function(A){b(p,1-A,s,"easeOutBackCubic")},function(){p.clearRect(0,0,n,f);k.trigger("effectEnd")})})}};function i(A,r){r=r||{};var C=1,u=r.exclude||[],z;var w=document.createElement("canvas"),t=w.getContext("2d"),s=w.width=A.naturalWidth,G=w.height=A.naturalHeight;t.drawImage(A,0,0,A.naturalWidth,A.naturalHeight);try{z=t.getImageData(r.x?r.x:0,r.y?r.y:0,r.w?r.w:A.width,r.h?r.h:A.height)["data"]}catch(B){return false}var v=(r.w?r.w:A.width*r.h?r.h:A.height)||z.length,x={},E="",D=[],h={dominant:{name:"",count:0}};var y=0;while(y<v){D[0]=z[y];D[1]=z[y+1];D[2]=z[y+2];E=D.join(",");if(E in x){x[E]=x[E]+1}else{x[E]=1}if(u.indexOf(["rgb(",E,")"].join(""))===-1){var F=x[E];if(F>h.dominant.count){h.dominant.name=E;h.dominant.count=F}}y+=C*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"dribbles",prev:"",next:"",duration:20*100,delay:20*100,width:1200,height:500,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});