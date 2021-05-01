$(function() {
  if ($( window ).width() >= 720) {
		!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e){var n,i,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(t){i=s}}();var u,c=[],l=!1,h=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&f())}function f(){if(!l){var t=a(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||a(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)s.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return s};Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),a=n(6),u=function(t){function e(e){var n=void 0===e?{}:e,i=(n.scrollAmount,n.scrollAmountStep,n.container),r=void 0===i?document.documentElement:i,s=n.showScrollbars,u=void 0!==s&&s,c=n.preventVerticalScroll,l=void 0!==c&&c,h=t.call(this)||this;if(h.observer=null,h.containerIsIntersecting=!1,h.style=null,h.cssClass="__horizontal-container-"+Math.round(1e5*Math.random()),h.preventVerticalScroll=!1,h.blacklist=["input","select","textarea"],h.wheel=function(t){t.preventDefault();var e=Math.atan2(t.deltaY,t.deltaX)/Math.PI,n=!(e<.675&&e>-.375),i=Math.sqrt(Math.pow(t.deltaX,2)+Math.pow(t.deltaY,2));if(!h.preventVerticalScroll){switch(t.deltaMode){case WheelEvent.DOM_DELTA_LINE:i*=100;break;case WheelEvent.DOM_DELTA_PAGE:i*=1e3}n&&(i*=-1);var r=Math.max(h.container.scrollLeft+i,0);r<h.container.scrollWidth-h.container.clientWidth&&(t.deltaMode===WheelEvent.DOM_DELTA_PIXEL?h.spring.setCurrentValue(r):h.spring.setEndValue(r))}},h.keydown=function(t){if(!h.observer||h.containerIsIntersecting){var e=t.target;if(!e||e===document.body||!h.blacklist.includes(e.nodeName.toLowerCase())){var n=h.container.scrollLeft,i=h.container.scrollWidth-h.container.clientWidth,r=!0;switch(t.code){case"Home":n=0;break;case"End":n=i;break;case"ArrowUp":if(h.preventVerticalScroll){r=!0;break}n-=100;break;case"ArrowDown":if(h.preventVerticalScroll){r=!0;break}n+=100;break;case"ArrowLeft":n-=100;break;case"ArrowRight":n+=100;break;case"PageUp":n-=1e3;break;case"PageDown":case"Space":n+=1e3;break;default:r=!1}n=Math.max(n,0),(n=Math.min(n,i))!==h.spring.getEndValue()&&(r&&t.preventDefault(),h.spring&&(h.spring.isAtRest()&&h.spring.setCurrentValue(h.container.scrollLeft),h.spring.setEndValue(n)))}}},void 0===r)return h;if(h.preventVerticalScroll=l,h.container=r,h.container.addEventListener("wheel",h.wheel),document.addEventListener("keydown",h.keydown),h.container!==document.documentElement&&("IntersectionObserver"in window?(h.observer=new IntersectionObserver((function(t){var e=o(t,1)[0];h.containerIsIntersecting=e.isIntersecting})),h.observer.observe(h.container)):console.warn("[horizontal-scroll] WARN: IntersectionObserver not available, assuming key navigation is always applicable to your container.")),!u){h.container.classList.add(h.cssClass),h.style=document.createElement("style"),document.head.appendChild(h.style);var p=h.style.sheet;if(p){p.insertRule("\n                        ."+h.cssClass+" {\n                            overflow-y: hidden;\n                            overflow-x: auto;\n\n                            /* prevents unwanted gestures and bounce effects */\n                            overscroll-behavior: auto;\n\n                            /* vendor specific hacks to hide scrollbars */\n                            scrollbar-width: none;\n                            -ms-overflow-style: none;\n                        }\n                    ");var f="::-webkit-scrollbar { display: none; }";h.container!==document.documentElement&&(f="."+h.cssClass+f),p.insertRule(f)}}return h.springSystem=new a.SpringSystem,h.spring=h.springSystem.createSpring(),h.spring.setCurrentValue(h.container.scrollLeft),h.spring.setOvershootClampingEnabled(!0),h.spring.addListener({onSpringUpdate:function(t){var e=t.getCurrentValue();h.emit("scroll",e),h.container.style.overscrollBehaviorY="none",h.container.style.overscrollBehaviorX=e>0?"none":"auto",h.container.scrollLeft=e}}),h.spring.notifyPositionUpdated(),h}return r(e,t),e.prototype.destroy=function(){void 0!==this.container&&(this.container.removeEventListener("wheel",this.wheel),document.removeEventListener("keydown",this.keydown),this.style&&this.style.remove(),this.container.classList.remove(this.cssClass),this.spring.destroy(),this.springSystem.removeAllListeners(),this.observer&&this.observer.disconnect())},e}(s.EventEmitter);e.default=u},function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";n.r(e);var i=n(2);new(n.n(i).a)({container:document.querySelector("#scrollWrapper")})},function(t,e,n){"use strict";var i,r="object"==typeof Reflect?Reflect:null,o=r&&"function"==typeof r.apply?r.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};i=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var s=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,t.exports.once=function(t,e){return new Promise((function(n,i){function r(){void 0!==o&&t.removeListener("error",o),n([].slice.call(arguments))}var o;"error"!==e&&(o=function(n){t.removeListener(e,r),i(n)},t.once("error",o)),t.once(e,r)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function c(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function l(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function h(t,e,n,i){var r,o,s,a;if(c(n),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),s=o[e]),void 0===s)s=o[e]=n,++t._eventsCount;else if("function"==typeof s?s=o[e]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=l(t))>0&&s.length>r&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=s.length,a=u,console&&console.warn&&console.warn(a)}return t}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=p.bind(i);return r.listener=n,i.wrapFn=r,r}function d(t,e,n){var i=t._events;if(void 0===i)return[];var r=i[e];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(r):g(r,r.length)}function v(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");u=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||s(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return l(this)},a.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var i="error"===t,r=this._events;if(void 0!==r)i=i&&void 0===r.error;else if(!i)return!1;if(i){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=r[t];if(void 0===u)return!1;if("function"==typeof u)o(u,this,e);else{var c=u.length,l=g(u,c);for(n=0;n<c;++n)o(l[n],this,e)}return!0},a.prototype.addListener=function(t,e){return h(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return h(this,t,e,!0)},a.prototype.once=function(t,e){return c(e),this.on(t,f(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){return c(e),this.prependListener(t,f(this,t,e)),this},a.prototype.removeListener=function(t,e){var n,i,r,o,s;if(c(e),void 0===(i=this._events))return this;if(void 0===(n=i[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){s=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,r),1===n.length&&(i[t]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",t,s||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this},a.prototype.listeners=function(t){return d(this,t,!0)},a.prototype.rawListeners=function(t){return d(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):v.call(t,e)},a.prototype.listenerCount=v,a.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},function(t,e,n){(function(e,n){t.exports=function(){"use strict";var t=void 0;"undefined"!=typeof window&&(t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame),t||void 0===e||"node"!==e.title||(t=n);var i=t=t||function(t){window.setTimeout(t,1e3/60)},r=Array.prototype.concat,o=Array.prototype.slice;function s(t){return i(t)}function a(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}var u={};function c(t){if(u[t])return u[t];var e=t.replace("#","");3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=e.match(/.{2}/g);if(!n||n.length<3)throw new Error("Expected a color string of format #rrggbb");var i={r:parseInt(n[0],16),g:parseInt(n[1],16),b:parseInt(n[2],16)};return u[t]=i,i}function l(t,e,n){var i=t.toString(16),r=e.toString(16),o=n.toString(16);return"#"+(i=i.length<2?"0"+i:i)+(r=r.length<2?"0"+r:r)+(o=o.length<2?"0"+o:o)}var h=Object.freeze({bind:function(t,e){for(var n=arguments.length,i=Array(n>2?n-2:0),s=2;s<n;s++)i[s-2]=arguments[s];return function(){for(var n=arguments.length,s=Array(n),a=0;a<n;a++)s[a]=arguments[a];t.apply(e,r.call(i,o.call(s)))}},extend:function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},onFrame:s,removeFirst:a,hexToRGB:c,rgbToHex:l});function p(t,e,n,i,r){return i+(t-e)/(n-e)*(r-i)}var f=Object.freeze({mapValueInRange:p,interpolateColor:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments[5],s=c(e),a=c(n),u=Math.floor(p(t,i,r,s.r,a.r)),h=Math.floor(p(t,i,r,s.g,a.g)),f=Math.floor(p(t,i,r,s.b,a.b));return o?"rgb("+u+","+h+","+f+")":l(u,h,f)},degreesToRadians:function(t){return t*Math.PI/180},radiansToDegrees:function(t){return 180*t/Math.PI}});function d(t){return 3.62*(t-30)+194}function v(t){return 3*(t-8)+25}var g=Object.freeze({tensionFromOrigamiValue:d,origamiValueFromTension:function(t){return(t-194)/3.62+30},frictionFromOrigamiValue:v,origamiFromFriction:function(t){return(t-25)/3+8}}),m=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_=function(){function t(){m(this,t),this.springSystem=null}return t.prototype.run=function(){var t=b.call(this);s((function(){t.loop(Date.now())}))},t}(),S=function(){function t(e){m(this,t),this.springSystem=null,this.time=0,this.running=!1,this.timestep=e||16.667}return t.prototype.run=function(){var t=b.call(this);if(!this.running){for(this.running=!0;!t.getIsIdle();)t.loop(this.time+=this.timestep);this.running=!1}},t}(),w=function(){function t(){m(this,t),this.springSystem=null,this.time=0,this.running=!1}return t.prototype.run=function(){},t.prototype.step=function(t){b.call(this).loop(this.time+=t)},t}();function b(){if(null==this.springSystem)throw new Error("cannot run looper without a springSystem");return this.springSystem}var E=Object.freeze({AnimationLooper:_,SimulationLooper:S,SteppingSimulationLooper:w}),T=function(){function t(e,n){m(this,t),this.bounciness=e,this.speed=n;var i=this.normalize(e/1.7,0,20);i=this.projectNormal(i,0,.8);var r=this.normalize(n/1.7,0,20);this.bouncyTension=this.projectNormal(r,.5,200),this.bouncyFriction=this.quadraticOutInterpolation(i,this.b3Nobounce(this.bouncyTension),.01)}return t.prototype.normalize=function(t,e,n){return(t-e)/(n-e)},t.prototype.projectNormal=function(t,e,n){return e+t*(n-e)},t.prototype.linearInterpolation=function(t,e,n){return t*n+(1-t)*e},t.prototype.quadraticOutInterpolation=function(t,e,n){return this.linearInterpolation(2*t-t*t,e,n)},t.prototype.b3Friction1=function(t){return 7e-4*Math.pow(t,3)-.031*Math.pow(t,2)+.64*t+1.28},t.prototype.b3Friction2=function(t){return 44e-6*Math.pow(t,3)-.006*Math.pow(t,2)+.36*t+2},t.prototype.b3Friction3=function(t){return 45e-8*Math.pow(t,3)-332e-6*Math.pow(t,2)+.1078*t+5.84},t.prototype.b3Nobounce=function(t){return t<=18?this.b3Friction1(t):t>18&&t<=44?this.b3Friction2(t):this.b3Friction3(t)},t}(),I=function(){function t(e,n){m(this,t),this.tension=e,this.friction=n}return t.fromOrigamiTensionAndFriction=function(e,n){return new t(d(e),v(n))},t.fromBouncinessAndSpeed=function(e,n){var i=new T(e,n);return t.fromOrigamiTensionAndFriction(i.bouncyTension,i.bouncyFriction)},t.coastingConfigWithOrigamiFriction=function(e){return new t(0,v(e))},t}();I.DEFAULT_ORIGAMI_SPRING_CONFIG=I.fromOrigamiTensionAndFriction(40,7);var L=function t(){m(this,t),this.position=0,this.velocity=0},O=function(){function t(e){m(this,t),this.listeners=[],this._startValue=0,this._currentState=new L,this._displacementFromRestThreshold=.001,this._endValue=0,this._overshootClampingEnabled=!1,this._previousState=new L,this._restSpeedThreshold=.001,this._tempState=new L,this._timeAccumulator=0,this._wasAtRest=!0,this._id="s"+t._ID++,this._springSystem=e}return t.prototype.destroy=function(){this.listeners=[],this._springSystem.deregisterSpring(this)},t.prototype.getId=function(){return this._id},t.prototype.setSpringConfig=function(t){return this._springConfig=t,this},t.prototype.getSpringConfig=function(){return this._springConfig},t.prototype.setCurrentValue=function(t,e){return this._startValue=t,this._currentState.position=t,e||this.setAtRest(),this.notifyPositionUpdated(!1,!1),this},t.prototype.getStartValue=function(){return this._startValue},t.prototype.getCurrentValue=function(){return this._currentState.position},t.prototype.getCurrentDisplacementDistance=function(){return this.getDisplacementDistanceForState(this._currentState)},t.prototype.getDisplacementDistanceForState=function(t){return Math.abs(this._endValue-t.position)},t.prototype.setEndValue=function(t){if(this._endValue===t&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=t,this._springSystem.activateSpring(this.getId());for(var e=0,n=this.listeners.length;e<n;e++){var i=this.listeners[e].onSpringEndStateChange;i&&i(this)}return this},t.prototype.getEndValue=function(){return this._endValue},t.prototype.setVelocity=function(t){return t===this._currentState.velocity||(this._currentState.velocity=t,this._springSystem.activateSpring(this.getId())),this},t.prototype.getVelocity=function(){return this._currentState.velocity},t.prototype.setRestSpeedThreshold=function(t){return this._restSpeedThreshold=t,this},t.prototype.getRestSpeedThreshold=function(){return this._restSpeedThreshold},t.prototype.setRestDisplacementThreshold=function(t){this._displacementFromRestThreshold=t},t.prototype.getRestDisplacementThreshold=function(){return this._displacementFromRestThreshold},t.prototype.setOvershootClampingEnabled=function(t){return this._overshootClampingEnabled=t,this},t.prototype.isOvershootClampingEnabled=function(){return this._overshootClampingEnabled},t.prototype.isOvershooting=function(){var t=this._startValue,e=this._endValue;return this._springConfig.tension>0&&(t<e&&this.getCurrentValue()>e||t>e&&this.getCurrentValue()<e)},t.prototype.advance=function(e,n){var i=this.isAtRest();if(!i||!this._wasAtRest){var r=n;n>t.MAX_DELTA_TIME_SEC&&(r=t.MAX_DELTA_TIME_SEC),this._timeAccumulator+=r;for(var o=this._springConfig.tension,s=this._springConfig.friction,a=this._currentState.position,u=this._currentState.velocity,c=this._tempState.position,l=this._tempState.velocity,h=void 0,p=void 0,f=void 0,d=void 0,v=void 0,g=void 0,m=void 0,y=void 0;this._timeAccumulator>=t.SOLVER_TIMESTEP_SEC;)this._timeAccumulator-=t.SOLVER_TIMESTEP_SEC,this._timeAccumulator<t.SOLVER_TIMESTEP_SEC&&(this._previousState.position=a,this._previousState.velocity=u),h=u,p=o*(this._endValue-c)-s*u,c=a+h*t.SOLVER_TIMESTEP_SEC*.5,f=l=u+p*t.SOLVER_TIMESTEP_SEC*.5,d=o*(this._endValue-c)-s*l,c=a+f*t.SOLVER_TIMESTEP_SEC*.5,v=l=u+d*t.SOLVER_TIMESTEP_SEC*.5,g=o*(this._endValue-c)-s*l,c=a+v*t.SOLVER_TIMESTEP_SEC,m=l=u+g*t.SOLVER_TIMESTEP_SEC,y=1/6*(p+2*(d+g)+(o*(this._endValue-c)-s*l)),a+=1/6*(h+2*(f+v)+m)*t.SOLVER_TIMESTEP_SEC,u+=y*t.SOLVER_TIMESTEP_SEC;this._tempState.position=c,this._tempState.velocity=l,this._currentState.position=a,this._currentState.velocity=u,this._timeAccumulator>0&&this._interpolate(this._timeAccumulator/t.SOLVER_TIMESTEP_SEC),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._springConfig.tension>0?(this._startValue=this._endValue,this._currentState.position=this._endValue):(this._endValue=this._currentState.position,this._startValue=this._endValue),this.setVelocity(0),i=!0);var _=!1;this._wasAtRest&&(this._wasAtRest=!1,_=!0);var S=!1;i&&(this._wasAtRest=!0,S=!0),this.notifyPositionUpdated(_,S)}},t.prototype.notifyPositionUpdated=function(t,e){for(var n=0,i=this.listeners.length;n<i;n++){var r=this.listeners[n];t&&r.onSpringActivate&&r.onSpringActivate(this),r.onSpringUpdate&&r.onSpringUpdate(this),e&&r.onSpringAtRest&&r.onSpringAtRest(this)}},t.prototype.systemShouldAdvance=function(){return!this.isAtRest()||!this.wasAtRest()},t.prototype.wasAtRest=function(){return this._wasAtRest},t.prototype.isAtRest=function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||0===this._springConfig.tension)},t.prototype.setAtRest=function(){return this._endValue=this._currentState.position,this._tempState.position=this._currentState.position,this._currentState.velocity=0,this},t.prototype._interpolate=function(t){this._currentState.position=this._currentState.position*t+this._previousState.position*(1-t),this._currentState.velocity=this._currentState.velocity*t+this._previousState.velocity*(1-t)},t.prototype.getListeners=function(){return this.listeners},t.prototype.addListener=function(t){return this.listeners.push(t),this},t.prototype.removeListener=function(t){return a(this.listeners,t),this},t.prototype.removeAllListeners=function(){return this.listeners=[],this},t.prototype.currentValueIsApproximately=function(t){return Math.abs(this.getCurrentValue()-t)<=this.getRestDisplacementThreshold()},t}();O._ID=0,O.MAX_DELTA_TIME_SEC=.064,O.SOLVER_TIMESTEP_SEC=.001;var A=function(){function t(e){m(this,t),this.listeners=[],this._activeSprings=[],this._idleSpringIndices=[],this._isIdle=!0,this._lastTimeMillis=-1,this._springRegistry={},this.looper=e||new _,this.looper.springSystem=this}return t.prototype.setLooper=function(t){this.looper=t,t.springSystem=this},t.prototype.createSpring=function(t,e){var n=void 0;return n=void 0===t||void 0===e?I.DEFAULT_ORIGAMI_SPRING_CONFIG:I.fromOrigamiTensionAndFriction(t,e),this.createSpringWithConfig(n)},t.prototype.createSpringWithBouncinessAndSpeed=function(t,e){var n=void 0;return n=void 0===t||void 0===e?I.DEFAULT_ORIGAMI_SPRING_CONFIG:I.fromBouncinessAndSpeed(t,e),this.createSpringWithConfig(n)},t.prototype.createSpringWithConfig=function(t){var e=new O(this);return this.registerSpring(e),e.setSpringConfig(t),e},t.prototype.getIsIdle=function(){return this._isIdle},t.prototype.getSpringById=function(t){return this._springRegistry[t]},t.prototype.getAllSprings=function(){var t=[];for(var e in this._springRegistry)this._springRegistry.hasOwnProperty(e)&&t.push(this._springRegistry[e]);return t},t.prototype.registerSpring=function(t){this._springRegistry[t.getId()]=t},t.prototype.deregisterSpring=function(t){a(this._activeSprings,t),delete this._springRegistry[t.getId()]},t.prototype.advance=function(t,e){for(;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(var n=0,i=this._activeSprings.length;n<i;n++){var r=this._activeSprings[n];r.systemShouldAdvance()?r.advance(t/1e3,e/1e3):this._idleSpringIndices.push(this._activeSprings.indexOf(r))}for(;this._idleSpringIndices.length>0;){var o=this._idleSpringIndices.pop();o>=0&&this._activeSprings.splice(o,1)}},t.prototype.loop=function(t){var e=void 0;-1===this._lastTimeMillis&&(this._lastTimeMillis=t-1);var n=t-this._lastTimeMillis;this._lastTimeMillis=t;var i=0,r=this.listeners.length;for(i=0;i<r;i++)(e=this.listeners[i]).onBeforeIntegrate&&e.onBeforeIntegrate(this);for(this.advance(t,n),0===this._activeSprings.length&&(this._isIdle=!0,this._lastTimeMillis=-1),i=0;i<r;i++)(e=this.listeners[i]).onAfterIntegrate&&e.onAfterIntegrate(this);this._isIdle||this.looper.run()},t.prototype.activateSpring=function(t){var e=this._springRegistry[t];-1===this._activeSprings.indexOf(e)&&this._activeSprings.push(e),this.getIsIdle()&&(this._isIdle=!1,this.looper.run())},t.prototype.addListener=function(t){this.listeners.push(t)},t.prototype.removeListener=function(t){a(this.listeners,t)},t.prototype.removeAllListeners=function(){this.listeners=[]},t}();return y({},E,{OrigamiValueConverter:g,MathUtil:f,Spring:O,SpringConfig:I,SpringSystem:A,util:y({},h,f)})}()}).call(this,n(0),n(7).setImmediate)},function(t,e,n){(function(t){var i=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(r.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(8),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var i,r,o,s,a,u=1,c={},l=!1,h=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?i=function(t){e.nextTick((function(){d(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){d(t.data)},i=function(t){o.port2.postMessage(t)}):h&&"onreadystatechange"in h.createElement("script")?(r=h.documentElement,i=function(t){var e=h.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,r.removeChild(e),e=null},r.appendChild(e)}):i=function(t){setTimeout(d,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&d(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),i=function(e){t.postMessage(s+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return c[u]=r,i(u),u++},p.clearImmediate=f}function f(t){delete c[t]}function d(t){if(l)setTimeout(d,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{f(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(1),n(0))}]);
 	}
 });