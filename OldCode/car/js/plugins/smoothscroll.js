!function(){var c,e={frameRate:150,animationTime:600,stepSize:80,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},g=e,i=!1,l=!1,o={x:0,y:0},u=!1,s=document.documentElement,n=[120,120,120],d={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};g=e;function f(){g.keyboardSupport&&r("keydown",t)}function h(){if(document.body){var e=document.body,t=document.documentElement,a=window.innerHeight,r=e.scrollHeight;if(s=0<=document.compatMode.indexOf("CSS")?t:e,c=e,f(),u=!0,top!=self)l=!0;else if(a<r&&(e.offsetHeight<=a||t.offsetHeight<=a)){var o=!1;if(t.style.height="auto",setTimeout(function(){o||t.scrollHeight==document.height||(o=!0,setTimeout(function(){t.style.height=document.height+"px",o=!1},500))},10),s.offsetHeight<=a){var n=document.createElement("div");n.style.clear="both",e.appendChild(n)}}g.fixedBackground||i||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var v=[],b=!1,y=+new Date;function m(d,f,h,m){var e,t;if(m||(m=1e3),e=0<(e=f)?1:-1,t=0<(t=h)?1:-1,(o.x!==e||o.y!==t)&&(o.x=e,o.y=t,v=[],y=0),1!=g.accelerationMax){var a=+new Date-y;if(a<g.accelerationDelta){var r=(1+30/a)/2;1<r&&(r=Math.min(r,g.accelerationMax),f*=r,h*=r)}y=+new Date}if(v.push({x:f,y:h,lastX:f<0?.99:-.99,lastY:h<0?.99:-.99,start:+new Date}),!b){var p=d===document.body,w=function(e){for(var t=+new Date,a=0,r=0,o=0;o<v.length;o++){var n=v[o],i=t-n.start,l=i>=g.animationTime,c=l?1:i/g.animationTime;g.pulseAlgorithm&&(c=C(c));var u=n.x*c-n.lastX>>0,s=n.y*c-n.lastY>>0;a+=u,r+=s,n.lastX+=u,n.lastY+=s,l&&(v.splice(o,1),o--)}p?window.scrollBy(a,r):(a&&(d.scrollLeft+=a),r&&(d.scrollTop+=r)),f||h||(v=[]),v.length?M(w,d,m/g.frameRate+1):b=!1};M(w,d,0),b=!0}}function t(e){var t=e.target,a=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==d.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||a)return!0;if(D(t,"button")&&e.keyCode===d.spacebar)return!0;var r=0,o=0,n=S(c),i=n.clientHeight;switch(n==document.body&&(i=window.innerHeight),e.keyCode){case d.up:o=-g.arrowScroll;break;case d.down:o=g.arrowScroll;break;case d.spacebar:o=-(e.shiftKey?1:-1)*i*.9;break;case d.pageup:o=.9*-i;break;case d.pagedown:o=.9*i;break;case d.home:o=-n.scrollTop;break;case d.end:var l=n.scrollHeight-n.scrollTop-i;o=0<l?l+10:0;break;case d.left:r=-g.arrowScroll;break;case d.right:r=g.arrowScroll;break;default:return!0}m(n,r,o),e.preventDefault()}var p={};setInterval(function(){p={}},1e4);var a,w,k=(a=0,function(e){return e.uniqueID||(e.uniqueID=a++)});function x(e,t){for(var a=e.length;a--;)p[k(e[a])]=t;return t}function S(e){var t=[],a=s.scrollHeight;do{var r=p[k(e)];if(r)return x(t,r);if(t.push(e),a===e.scrollHeight){if(!l||s.clientHeight+10<a)return x(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return x(t,e)}while(e=e.parentNode)}function r(e,t,a){window.addEventListener(e,t,a||!1)}function D(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function H(e,t){return Math.floor(e/t)==e/t}var M=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,a){window.setTimeout(e,a||1e3/60)};function T(e){var t;return((e*=g.pulseScale)<1?e-(1-Math.exp(-e)):(e-=1,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*g.pulseNormalize}function C(e){return 1<=e?1:e<=0?0:(1==g.pulseNormalize&&(g.pulseNormalize/=T(1)),T(e))}var z=/chrome/i.test(window.navigator.userAgent),A=null;"onwheel"in document.createElement("div")?A="wheel":"onmousewheel"in document.createElement("div")&&(A="mousewheel"),A&&z&&(r(A,function(e){u||h();var t=e.target,a=S(t);if(!a||e.defaultPrevented||D(c,"embed")||D(t,"embed")&&/\.pdf/i.test(t.src))return!0;var r=e.wheelDeltaX||0,o=e.wheelDeltaY||0;if(r||o||(o=e.wheelDelta||0),!g.touchpadSupport&&function(e){if(e)return e=Math.abs(e),n.push(e),n.shift(),clearTimeout(w),!(H(n[0],120)&&H(n[1],120)&&H(n[2],120))}(o))return!0;1.2<Math.abs(r)&&(r*=g.stepSize/120),1.2<Math.abs(o)&&(o*=g.stepSize/120),m(a,-r,-o),e.preventDefault()}),r("mousedown",function(e){c=e.target}),r("load",h))}();