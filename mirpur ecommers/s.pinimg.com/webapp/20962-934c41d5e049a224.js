"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[20962],{922719:function(t,e,n){n.d(e,{CC:function(){return r},Ll:function(){return o},XF:function(){return i}});var r=function(t,e){var n;return{x:Math.floor(e/2*Math.cos(n=2*Math.random()*Math.PI)),y:Math.floor(t/2*Math.sin(n))}},i=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},o=function(t){return["@-webkit-keyframes","@keyframes"].map(function(e){return t.map(function(t){return e+" "+t}).join("\n")}).join("\n")}},549629:function(t,e,n){n.d(e,{Q:function(){return f},Z:function(){return p}});var r=n(672652),i=n(587703),o=n(525364),a=n(996523),s=n(5859);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach(function(e){var r,i;r=e,i=n[e],(r=function(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==c(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===c(e)?e:String(e)}(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function f(t,e){var n=(0,o.sV)().setViewContextData,c=(0,s.B)().requestIdentifier,u=(0,i.Z)(),f=(0,o.SU)().viewData;(0,r.useEffect)(function(){if(t){var e;n({viewType:null!==(e=t.view_type)&&void 0!==e?e:1,viewParameter:t.view_parameter,viewData:t.view_data?(0,a.Z)(f,t.view_data):f,component:t.component,element:t.element,objectIdStr:t.object_id_str,auxData:t.aux_data,clientTrackingParams:t.clientTrackingParams}),u(l(l({},t),{},{event_type:13,request_identifier:c}))}},[e])}function p(t){var e=t.children;return f(t.log),e||null}},454514:function(t,e,n){n.d(e,{UZ:function(){return f},Vg:function(){return l},ZP:function(){return p}});var r=n(672652),i=n(684404),o=n(554786),a=n(494125),s=n(819267);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,a,s=[],c=!0,u=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){u=!0,i=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var l=200,f=function(t){var e=t.deviceType,n=t.hiding,r=t.visible,i="desktop"===e,o=0,a=i?"translateY(200px)":"translateY(-200px)",s="opacity 0.1s ease-in-out",c="hidden";return r&&!n&&(o=1,a="translateY(0)",s="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",c="visible"),r&&n&&(a="scale(1.1)",s="opacity transform ".concat(.2,"s")),{opacity:o,pointerEvents:"auto",position:"relative",marginTop:i?10:0,transform:a,transition:s,visibility:c}};function p(t){var e,n,u=t._dangerouslySetThumbnail,p=t._dangerouslySetPrimaryAction,d=t.text,y=t.primaryAction,b=t.dismissButton,m=t.helperLink,h=t.thumbnail,g=t.type,v=t.dataTestId,_=t.duration,w=void 0===_?2e3:_,j=t.onHide,S=t.href,x=t.onClick,O=t.openNewPage,P=t.imageUrl,E=(0,o.ZP)(),A=c((0,r.useState)(!1),2),C=A[0],I=A[1],k=c((0,r.useState)(!1),2),T=k[0],D=k[1],Z=(0,r.useRef)(),R=function(){I(!0),Z.current=setTimeout(j,l)},z=function(){Z.current=setTimeout(R,w)},F=function(){Z.current&&clearTimeout(Z.current)};(0,a.Z)(function(){return setTimeout(function(){return D(!0)},100),z(),F}),P&&(n={image:(0,s.jsx)(i.Ee,{alt:"string"==typeof d?d:"".concat(d[0]," ").concat(d[1]),fit:"cover",naturalHeight:1,naturalWidth:1,src:P})});var M=(0,s.jsx)(i.FN,{_dangerouslySetPrimaryAction:p,_dangerouslySetThumbnail:u,dismissButton:b,helperLink:m,primaryAction:y,text:d,thumbnail:null!==(e=n)&&void 0!==e?e:h,type:g}),B=f({deviceType:E,hiding:C,visible:T}),L=B.marginTop,H=B.opacity,U=B.pointerEvents,N=B.position,Y=B.transform,K=B.transition,W=B.visibility;return(0,s.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{transform:Y,transition:K,visibility:W,pointerEvents:U}},"data-test-id":null!=v?v:"toast",display:"flex",marginTop:L,onMouseEnter:F,onMouseLeave:z,opacity:H,position:N,children:S?(0,s.jsx)(i.Tg,{href:S,onTap:function(t){var e=t.event,n=t.dangerouslyDisableOnNavigation;S.startsWith("#")&&(e.preventDefault(),n()),null==x||x(e)},rounding:"pill",target:O?"blank":null,children:M}):M})}},407996:function(t,e,n){var r=n(684404),i=n(140017),o=n(819267);e.Z=function(t){var e=t.isInModal,n=(0,i.ZP)();return(0,o.jsx)(r.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new r.Ry(1),children:(0,o.jsx)(r.$j,{accessibilityLabel:n._('Loading', 'Full page loading state', 'Full page loading state'),show:!0})})}},295923:function(t,e,n){n.d(e,{Z:function(){return x}});var r,i=n(672652),o=n(684404),a=n(922719),s=n(406893);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var u={yellow:"#FAB904",orange:"#FF6400",green:"#0FA573",blue:"#0074e8",purple:"#B469EB"},l="DelightfulBubbles__",f=function(t,e){var n=t.length,r=t.indexOf(e)+1>=n?0:t.indexOf(e)+1;return t[r]},p=["".concat(l,"fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n"),"".concat(l,"growShrink {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n"),"".concat(l,"swirl {\n  0% {\n    transform: rotate(0deg) translateX(-50%);\n  }\n  100% {\n    transform: rotate(-360deg) translateX(-50%);\n  }\n}\n")].concat(function(t){if(Array.isArray(t))return c(t)}(r=Object.keys(u).map(function(t){var e=f(Object.keys(u),t);return"".concat(l,"colorChange_").concat(t," {\n      0% {\n        background-color: ").concat(u[t],";\n      }\n      50% {\n        background-color: ").concat(u[e],";\n      }\n    }\n    ")}))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=(0,a.Ll)(p),y=n(819267);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function h(t,e){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function g(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,n){return(e=w(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==b(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===b(e)?e:String(e)}var j=function(t){var e,n=t.delay,r=t.diameter,i=t.height,a=t.initialColor,s=t.width,c=t.xOffset,f=t.yOffset,p=(e=Math.floor(r/2),{bubblePositionStyles:{position:"absolute",marginLeft:"".concat(s/2-e,"px"),marginTop:"".concat(i/2-e,"px"),left:"".concat(c,"px"),top:"".concat(f,"px")},bubbleSwirlStyles:{animation:"".concat(l,"swirl 6s ease-in-out ").concat(n,"s infinite forwards"),WebkitAnimation:"".concat(l,"swirl 6s ease-in-out ").concat(n,"s infinite forwards")},bubbleGrowShrinkStyles:{transform:"scale(0)",WebkitTransform:"scale(0)",animation:"".concat(l,"growShrink 6s ease-in-out ").concat(n,"s infinite alternate"),WebkitAnimation:"".concat(l,"growShrink 6s ease-in-out ").concat(n,"s infinite alternate")},bubbleShapeStyles:{height:"".concat(r,"px"),width:"".concat(r,"px"),borderRadius:"50%",backgroundColor:u[a],opacity:0,animation:"".concat(l,"colorChange_").concat(a," 12s steps(1, start) ").concat(n,"s infinite forwards,\n      ").concat(l,"fadeIn 3s linear ").concat(n,"s 1 forwards"),WebkitAnimation:"".concat(l,"colorChange_").concat(a," 12s steps(1, start) ").concat(n,"s infinite forwards,\n      ").concat(l,"fadeIn 3s linear ").concat(n,"s 1 forwards")}});return(0,y.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:p.bubblePositionStyles},children:(0,y.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:p.bubbleSwirlStyles},children:(0,y.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:p.bubbleGrowShrinkStyles},children:(0,y.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:p.bubbleShapeStyles}})})})})},S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(c,t);var e,n,r,i=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=v(c);if(e){var r=v(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return g(t)}(this,t)});function c(){var t;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,c);for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return _(g(t=i.call.apply(i,[this].concat(n))),"state",{isInitialized:!1}),t}return n=[{key:"componentDidMount",value:function(){var t=this;window.requestAnimationFrame(function(){t.setState({isInitialized:!0})})}},{key:"shouldComponentUpdate",value:function(t,e){return!t.numBubbles===this.props.numBubbles||!e.isInitialized===this.state.isInitialized}},{key:"getSize",value:function(){var t=this.props,e=t.width,n=t.height;return void 0!==e&&void 0!==n?{width:e,height:n}:this.containerElement?{height:this.containerElement.offsetHeight,width:this.containerElement.offsetWidth}:{height:void 0,width:void 0}}},{key:"createBubbles",value:function(t,e){for(var n=this.props,r=n.delayFactor,i=n.delayOffset,o=n.numBubbles,s=n.xRadiusAdjustment,c=t+2*n.yRadiusAdjustment,l=e+2*s,f=[],p=Object.keys(u),d=0;d<o;d+=1){var b=16+(0,a.XF)(-4,4),m=p[d%p.length],h=(0,a.CC)(c,l),g=h.x,v=h.y;f.push((0,y.jsx)(j,{delay:d*r+i,diameter:b,height:t,initialColor:m,width:e,xOffset:g,yOffset:v},d))}return f}},{key:"render",value:function(){var t=this,e=this.props.isDesktop,n=this.getSize(),r=n.height,i=n.width;return(0,y.jsxs)(o.xu,{height:r,position:"relative",width:i,children:[(0,y.jsx)(s.Z,{unsafeCSS:d}),(0,y.jsxs)(o.xu,{ref:function(e){return t.containerElement=e},position:e?void 0:"absolute",children:[this.state.isInitialized&&this.createBubbles(r||0,i||0),(0,y.jsx)(o.xu,{position:"relative",children:this.props.children})]})]})}}],m(c.prototype,n),r&&m(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}(i.Component);_(S,"defaultProps",{numBubbles:10,xRadiusAdjustment:0,yRadiusAdjustment:0,delayFactor:1,delayOffset:0});var x=S},310822:function(t,e,n){n.d(e,{R:function(){return b},Z:function(){return m}});var r=n(672652),i=n(684404),o=n(22724),a=n(549629),s=n(140017),c=n(5859),u=n(407996),l=n(407053),f=n(295923),p=n(819267);function d(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var b=function(t){return new Set([].concat(d(l.EU),d(l.rT),d(l.IO))).has(t)};function m(t){var e=t.isReducedHeader,n=t.progressBarAnimationDuration,l=(0,s.ZP)(),d=b((0,c.B)().country);return(0,p.jsx)(r.Fragment,{children:d?(0,p.jsx)(a.Z,{log:{view_type:10,view_parameter:259},children:(0,p.jsxs)(i.xu,{bottom:!0,color:"default",left:!0,position:"fixed",right:!0,top:!0,width:"100%",children:[(0,p.jsx)(o.Z,{color:"dark",duration:n||3e3,finalProgress:95}),(0,p.jsxs)(i.kC,{alignItems:"stretch",direction:"column",height:"100%",justifyContent:"start",children:[(0,p.jsxs)(i.xu,{"data-test-id":"account-creation-heading",margin:10,children:[(0,p.jsx)(i.X6,{overflow:"normal",size:e?"500":"600",children:l._('Your account is being created!', 'account created heading', 'account created heading')}),(0,p.jsx)(i.xv,{overflow:"normal",children:l._('You can now save ideas, get personalized recommendations, and more', 'loading state description while waiting for any sign up registration to complete', 'loading state description while waiting for any sign up registration to complete')})]}),(0,p.jsx)(i.kC,{alignItems:"center",flex:"grow",justifyContent:"center",children:(0,p.jsx)(f.Z,{delayOffset:-5,isDesktop:!1,xRadiusAdjustment:40,yRadiusAdjustment:40,children:(0,p.jsx)(i.xu,{alignItems:"center",color:"lightWash",direction:"column",display:"flex",height:120,justifyContent:"end",overflow:"hidden",rounding:"circle",width:120,children:(0,p.jsx)(i.JO,{accessibilityLabel:l._('Loading', 'Loading state for any sign up registration', 'Loading state for any sign up registration'),color:"subtle",icon:"person",size:"90"})})})})]})]})}):(0,p.jsx)(u.Z,{})})}},615208:function(t,e,n){n.d(e,{m:function(){return T}});var r=n(780277),i=n(216167),o=n(224796),a=n(324358),s=n(587703),c=n(658583),u=n(622541),l=n(957753),f=n(820428),p=n(96452),d=n(321725),y=n(340523),b=n(182962),m=n(891276),h=n(5859),g=n(666698),v=n(731714),_=n(573810),w=n(217058),j=n(722363),S=n(758939),x=n(546689),O=n(191313),P=n(407053),E=n(310822),A=n(953565);function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach(function(e){var r,i;r=e,i=n[e],(r=function(t){var e=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==C(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===C(e)?e:String(e)}(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var T=function(){var t=(0,y.F)(),e=(0,r.useDispatch)(),n=(0,h.B)(),C=n.country,I=n.countryFromHostName,T=n.countryFromIp,D=n.regionFromIp,Z=n.isAuthenticated,R=(0,b.Z)(),z=(0,s.Z)(),F=(0,j.Z)();return function(n,r){var s=r.signupAttemptContextEvent,y=(0,d.yV)(n),b=function(t){var e;z(k(k({},s),{},{event_type:t,aux_data:k(k({},s.aux_data),{},{upsell_reason:(null===(e=s.aux_data)||void 0===e?void 0:e.upsell_reason)||v.Z.getItem(o.bg)||null,upsell_view_count:v.Z.getItem(o.w0)||0})})),7487===t&&v.Z.setItem(o.w0,0)};b(7537),F({action:"signup",event:"attempt",type:y}),R();var h=0,j=(0,E.R)(C),M=new Promise(function(t){j?setTimeout(function(){t(void 0)},3e3):t(void 0)});return new Promise(function(r,o){!function s(){var v,j,E=(0,x.t_)(),R=(0,x.OJ)(),z=k(k({},n),{},{user_behavior_data:(v={},[P.E9].forEach(function(t){var e=JSON.parse((0,O.qn)(t));e&&(v[t]=e)}),JSON.stringify(v)),visited_pages:E});R&&(z.referrer=R),(0,A.nP)("webapp.debug_signup_type.redux_registration",{sampleRate:1,tags:{CHECK_TYPE:null!==(j=(0,d.Eh)(z,"CHECK_TYPE"))&&void 0!==j?j:"none",CHECK_EXISTS:(0,d.Eh)(z,"DEPRECATED_CHECK_EXISTS"),CHECK_TRUTHY:(0,d.Eh)(z,"DEPRECATED_CHECK_TRUTHY")}}),i.Z.create("UserRegisterResource",k(k({},z),{},{get_user:!0})).callCreate().then(function(i){return M.then(function(){(0,_.L_)("d_pif_invite");var o=i.client_context;e({type:"REGISTER_USER",payload:{user:i.resource_response.data.user}});var s=i.resource_response.data.user.gatekeeper_experiments;if(s){var c=s.active,u=s.triggerable;c&&u||(0,A.nP)("webapp.registration.emptyExperimentsDebug",{sampleRate:1,tags:{active:String(!!c),triggerable:String(!!u)}}),t.updateExperiments(c,u)}else(0,A.nP)("webapp.registration.updateExperimentsFailed");o&&o.placed_experiences&&e((0,l.OD)(o.placed_experiences)),Z&&(0,S.Z)("registration.signup_success");var p=n.email||n.username||null,d=n.password||null,h=navigator.credentials;if(h&&p&&d)try{var v=new window.PasswordCredential({id:p,password:d});(0,w.My)("unauth_mweb.navigatorCredentials.store.attempt"),h.store(v).then(function(){(0,w.My)("unauth_mweb.navigatorCredentials.store.success")})}catch(t){(0,w.My)("unauth_mweb.navigatorCredentials.store.error")}b(7487),F({action:"signup",event:"success",type:y}),(0,a.Z)(),(0,f.Z)(),Z&&(0,g.Dm)(),(0,m.ko)({country:C,countryFromHostName:I,countryFromIp:T,regionFromIp:D,deviceType:"Mobile",eventCategory:"NewUsers"}),r()})}).catch(function(t){(null==t?void 0:t.api_error_code)===p.tz&&((0,w.My)("multi_step_set_age_restrict_cookie"),c.t8(u.It,"1",(0,c.kZ)(u.It))),h<3&&[p.dO,p.cZ].includes(null==t?void 0:t.api_error_code)?(h+=1,s()):(b(7488),F({action:"signup",event:"fail",type:y}),Z&&(0,S.Z)("registration.signup_error"),o(t))})}()})}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/20962-934c41d5e049a224.js.map