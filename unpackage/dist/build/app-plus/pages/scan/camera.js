!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){"use strict";var r=n(5),i=n(2),o=n(7);var a=Object(o.a)(i.default,r.b,r.c,!1,null,null,"75188308",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(6).default,this.options.style):Object.assign(this.options.style,n(6).default)}).call(a),e.default=a.exports},function(t,e){t.exports={"@VERSION":2}},function(t,e,n){"use strict";var r=n(3),i=n.n(r);e.default=i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=null,i={data:function(){return{dotype:"idphoto",message:"",aspect:"2:3",cameraWidth:"",cameraHeight:"",windowWidth:"",windowHeight:"",camerastate:!1,livePusher:null,snapshotsrc:null}},onLoad:function(t){r=this,null!=t.dotype&&(this.dotype=t.dotype),this.initCamera()},onReady:function(){this.livePusher=uni.createLivePusherContext("livePusher",this),this.startPreview(),this.poenCarme()},methods:{poenCarme:function(){"Android"==plus.os.name&&(this.poenCarmeInterval=setInterval((function(){r.camerastate||r.startPreview()}),2500))},initCamera:function(){uni.getSystemInfo({success:function(t){r.windowWidth=t.windowWidth,r.windowHeight=t.windowHeight,r.cameraWidth=t.windowWidth,r.cameraHeight=1.5*t.windowWidth}})},startPreview:function(){this.livePusher.startPreview({success:function(t){}})},stopPreview:function(){this.livePusher.stopPreview({success:function(t){r.camerastate=!1}})},statechange:function(t){1007==t.detail.code?r.camerastate=!0:-1301==t.detail.code&&(r.camerastate=!1)},back:function(){uni.navigateBack()},snapshot:function(){this.livePusher.snapshot({success:function(t){r.snapshotsrc=t.message.tempImagePath,r.stopPreview(),r.setImage(),uni.navigateBack()}})},flip:function(){this.livePusher.switchCamera()},setImage:function(){var t=getCurrentPages();t[t.length-2].$vm.setImage({path:r.snapshotsrc,dotype:this.dotype})}}};e.default=i},function(t,e){t.exports={".music-camera":{"":{zIndex:[99999,0,0,16]}},".preview":{".music-camera ":{justifyContent:["center",0,1,17],alignItems:["center",0,1,17]}},".outline-box":{".music-camera .preview ":{position:["absolute",0,2,18],top:[0,0,2,18],left:[0,0,2,18],bottom:[0,0,2,18],zIndex:[99,0,2,18],alignItems:["center",0,2,18],justifyContent:["center",0,2,18]}},".outline-img":{".music-camera .preview .outline-box ":{width:["750rpx",0,3,19],height:["1125rpx",0,3,19]}},".remind":{".music-camera .preview ":{position:["absolute",0,2,20],top:["880rpx",0,2,20],width:["750rpx",0,2,20],zIndex:[100,0,2,20],alignItems:["center",0,2,20],justifyContent:["center",0,2,20]}},".remind-text":{".music-camera .preview .remind ":{color:["#dddddd",0,3,21],fontWeight:["bold",0,3,21]}},".menu":{".music-camera ":{position:["absolute",0,1,22],left:[0,0,1,22],bottom:[0,0,1,22],width:["750rpx",0,1,22],height:["550rpx",0,1,22],zIndex:[98,0,1,22],alignItems:["center",0,1,22],justifyContent:["center",0,1,22]}},".menu-mask":{".music-camera .menu ":{position:["absolute",0,2,23],left:[0,0,2,23],bottom:[0,0,2,23],width:["750rpx",0,2,23],height:["550rpx",0,2,23],zIndex:[98,0,2,23]}},".menu-back":{".music-camera .menu ":{position:["absolute",0,2,24],left:["60rpx",0,2,24],bottom:["100rpx",0,2,24],width:["80rpx",0,2,24],height:["80rpx",0,2,24],zIndex:[99,0,2,24],alignItems:["center",0,2,24],justifyContent:["center",0,2,24]}},".menu-snapshot":{".music-camera .menu ":{width:["130rpx",0,2,25],height:["130rpx",0,2,25],zIndex:[99,0,2,25]}},".menu-flip":{".music-camera .menu ":{position:["absolute",0,2,26],right:["60rpx",0,2,26],bottom:["100rpx",0,2,26],width:["80rpx",0,2,26],height:["80rpx",0,2,26],zIndex:[99,0,2,26],alignItems:["center",0,2,26],justifyContent:["center",0,2,26]}},"@VERSION":2}},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["music-camera"],style:{width:t.windowWidth,height:t.windowHeight}},[n("view",{staticClass:["preview"],style:{width:t.windowWidth,height:t.windowHeight-80}},[n("live-pusher",{ref:"livePusher",staticClass:["livePusher"],style:{width:t.cameraWidth,height:t.cameraHeight},attrs:{id:"livePusher",mode:"FHD",beauty:"1",whiteness:"0",aspect:t.aspect,minBitrate:"1000",audioQuality:"16KHz",devicePosition:"front",autoFocus:!0,muted:!0,enableCamera:!0,enableMic:!1,zoom:!1},on:{statechange:t.statechange}}),n("cover-view",{staticClass:["remind"]},[n("u-text",{staticClass:["remind-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.message))])]),n("cover-view",{staticClass:["outline-box"],style:{width:t.windowWidth,height:t.windowHeight-255}},[n("cover-image",{staticClass:["outline-img"],attrs:{src:"/static/scan/photoskin.png"}})],1)],1),n("view",{staticClass:["menu"]},[n("cover-image",{staticClass:["menu-mask"],attrs:{src:"/static/scan/bar.png"}}),n("cover-image",{staticClass:["menu-back"],attrs:{src:"/static/scan/back.png"},on:{click:t.back}}),n("cover-image",{staticClass:["menu-snapshot"],attrs:{src:"/static/scan/shutter.png"},on:{click:t.snapshot}}),n("cover-image",{staticClass:["menu-flip"],attrs:{src:"/static/scan/flip.png"},on:{click:t.flip}})],1)])])},i=[]},function(t,e,n){"use strict";n.r(e);var r=n(4),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=i.a},function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s,c,u){var l,p="function"==typeof t?t.options:t;if(c){p.components||(p.components={});var d=Object.prototype.hasOwnProperty;for(var f in c)d.call(c,f)&&!d.call(p.components,f)&&(p.components[f]=c[f])}if(u&&("function"==typeof u.beforeCreate&&(u.beforeCreate=[u.beforeCreate]),(u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(p.mixins||(p.mixins=[])).push(u)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),r&&(p.functional=!0),o&&(p._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(p.functional){p._injectStyles=l;var m=p.render;p.render=function(t,e){return l.call(e),m(t,e)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:p}}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.r(e);n(9),n(11);var r=n(0);r.default.mpType="page",r.default.route="pages/scan/camera",r.default.el="#root",new Vue(r.default)},function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(10).default,Vue.prototype.__$appStyle__)},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=i.a},function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}}]);