"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[39322],{420097:function(e,t,n){n.d(t,{Z:function(){return G}});var o=n(672652),r=n(780277),i=n(214877),a=n(658583),l=n(622541),u=n(353971),s=n(175324),c=n(239493),f=n(322079),p=n(614792),d=n(140017),h=n(96452),g=n(640258),b=n(897650),y=n(974371),m=n(602377),v=n(508218),_=n(516256),w=n(237856),O=n(340523),S=n(306775),x=n(5859),P=n(217058),j=n(623409),A=n(472980),T=n(149722),C=n(819267);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function D(e,t,n,o,r,i,a){try{var l=e[i](a),u=l.value}catch(e){n(e);return}l.done?t(u):Promise.resolve(u).then(o,r)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,N(o.key),o)}}function L(e,t){return(L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,n){return(t=N(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==E(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===E(t)?t:String(t)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(p,e);var t,n,o,r,i,f=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=U(p);if(t){var o=U(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return Z(e)}(this,e)});function p(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,p);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return R(Z(e=f.call.apply(f,[this].concat(n))),"state",{modal:null}),R(Z(e),"annotateOneTapStopwatch",function(e){return(0,S.M3)("google_autologin",e)}),R(Z(e),"abortOneTapStopwatch",function(e){return(0,S.RP)("google_autologin",e)}),R(Z(e),"stopOneTapStopwatch",function(){return(0,S.PA)("google_autologin")}),R(Z(e),"trackAutologin",function(e){return(0,P.dy)({event:e,provider:"google"})}),R(Z(e),"deferredHandleOneTapResponse",function(t){setTimeout(function(){e.handleOneTapResponse(t)},5e3)}),R(Z(e),"handleOneTapResponse",function(t){var n=e.props,o=n.autologinDisabled,r=n.login,i=n.viewer;if(t){var a=t.credential,l=t.select_by,u=(0,b.PL)(l),s="AUTO_LOGIN"===u;if(e.annotateOneTapStopwatch("autoLoginGoogleEnd"),e.stopOneTapStopwatch(),!s||!o){s&&e.trackAutologin("pinterest_login_start");var f=e.props.pageContext;r({creds:{google_open_id_token:a,autologin:s},loggingOptions:{loggingData:{container:"google_one_tap_modal",page:null==f?void 0:f.pageType,trigger:(0,b.mK)(u)},loginAttemptContextEvent:{event_type:7534,element:"SIGN_IN_WITH_GOOGLE_BUTTON"===u?12981:"ONE_TAP_PROMPT"===u?12982:null,aux_data:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(t){R(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({signup_login_method:_.Z.GOOGLE_ONE_TAP,upsell_reason:s?"autologin_google":"google_one_tap"},i.isAuth?{login_state:i.isLimitedLogin?m.Z.LIMITED:m.Z.DEFAULT}:{})}}}).then(function(){var t=e.props.nextUrl;s&&e.trackAutologin("pinterest_login_success"),t?v.ZP.handleRedirect(t):v.ZP.handleRedirectWithFallbackWindowLocation(),s&&e.trackAutologin("end")},function(t){var n=e.props,o=n.hide,r=n.handleLoginWithMfa;if(s&&e.trackAutologin("pinterest_login_failure"),(null==t?void 0:t.api_error_code)===h.xN){if("SIGN_IN_WITH_GOOGLE_BUTTON"===u)e.attemptSignup({googleOpenId:a});else{var i="business_login_page"===e.props.container;e.setState({modal:{type:"confirmSignup",step:i?s&&"staticSignupLogin"||"delayedSignupLoadingSpinner":"staticSignupLoginWithTOS",handleConfirmSignup:function(){return e.attemptSignup({googleOpenId:a})}}})}}else if((null==t?void 0:t.api_error_code)===h.Zn)r(a);else if((null==t?void 0:t.api_error_code)===h.an)e.setState({modal:{type:"accountSuspended"}});else{var l=e.props.i18n._('We couldn\u2019t log you in with that account. Try the Google button!', ' - ', ' -- ');(0,c.x)(l),o()}s&&e.trackAutologin("end")})}}}),R(Z(e),"attemptSignup",function(t){var n=t.googleOpenId,o=e.props,r=o.handleGdprRequiresAge,i=o.pageContext,a=(0,g.Z)(n);r({options:{type:"google",google_open_id_token:n,first_name:a.given_name,last_name:a.family_name,image_url:a.picture},context:{container:"google_one_tap_modal",page:null==i?void 0:i.pageType}}),(0,P.NC)("check_age_with_one_tap_from_one_tap_dweb")}),e}return r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.requestContext,n=e.webGoogleDisabled;a.U2(l.e7)&&(0,P.My)("pcons.google_autologin_disabled_cookie.login_page.".concat((0,w.M)())),n||a.U2(l.e7)&&t.isBot?this.abortOneTapStopwatch("disabled"):(this.setupGoogleOneTap(),t.isBot||(0,P.My)("unauth_web_container.google_one_tap_modal.tier1.other.shown"))}},{key:"setupGoogleOneTap",value:(n=regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.googleSignInApi,e.next=3,null==n?void 0:n.ensureInit("oneTap",this.deferredHandleOneTapResponse);case 3:this.trackAutologin("show_ui"),null===(t=(0,b.Fm)())||void 0===t||t.prompt(function(){});case 5:case"end":return e.stop()}},e,this)}),o=function(){var e=this,t=arguments;return new Promise(function(o,r){var i=n.apply(e,t);function a(e){D(i,o,r,a,l,"next",e)}function l(e){D(i,o,r,a,l,"throw",e)}a(void 0)})},function(){return o.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.requestContext,o=t.webGoogleDisabled,r=t.hide,i=this.state.modal;if(n.isBot||o||!i)return null;switch(i.type){case"accountSuspended":return(0,C.jsx)(u.Z,{onClose:function(){return e.setState({modal:null})}});case"confirmSignup":return(0,C.jsx)(s.Z,{handleCancelClick:function(){return e.setState({modal:null})},handleConfirmSignup:i.handleConfirmSignup,handleShowLogin:r,step:i.step});default:return null}}}],M(p.prototype,r),i&&M(p,i),Object.defineProperty(p,"prototype",{writable:!1}),p}(o.Component);function G(e){var t,n=e.container,a=e.handleGdprRequiresAge,l=e.handleLoginWithMfa,u=e.nextUrl,s=(0,f.Z)(),c=(0,i.v)().logContextEvent,h=(0,d.ZP)(),g=(0,r.useDispatch)(),b=(0,T.Z)(),m=function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(!0))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(t,2)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),v=m[0],_=m[1],w=(0,O.F)().checkExperiment,S=w("web_google_disabled").anyEnabled,P=(0,x.B)(),E=(0,p.lO)(),D=P.country,I=(0,y.M)(),M=(0,A.Z)(),L=(0,j.Z)();if(!v||M)return null;var Z=function(){return _(!1)};return(0,C.jsx)(z,{autologinDisabled:"CH"===D,checkExperiment:w,container:n,dispatch:g,googleSignInApi:I,handleEmptyCredentials:Z,handleGdprRequiresAge:function(e){Z(),a(e)},handleLoginWithMfa:function(e){Z(),l(e)},hide:Z,i18n:h,logContextEvent:c,login:s,nextUrl:u,pageContext:E,requestContext:P,trackInteraction:L,viewer:b,webGoogleDisabled:S})}},473289:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(672652),r=n(328038),i=n(684404),a=n(612435),l=n(420097),u=n(29156),s=n(549629),c=n(287759),f=n(999586),p=n(876569),d=n(273523),h=n(454514),g=n(140017),b=n(406893),y=n(857916),m=n(5859),v=n(702497),_=n(13848),w=n(624797),O=n(598228),S=n(531486),x=n(678379),P=n(819267);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var T="".concat(O.C0).concat(v.Hm8);function C(e){var t=e.redirectToBusinessForSignup,n=e.isForLimitedLogin,v=e.attributionLabel;(0,s.Q)({view_type:9});var O=(0,g.ZP)(),A=(0,r.TH)(),C=(0,w.mB)(A.search),E=(0,_.F9)(),k=j((0,o.useState)({type:"login"}),2),D=k[0],I=k[1],M=j((0,o.useState)(!1),2),L=M[0],Z=M[1],U=(0,m.B)().userAgent.isMobile,R=C.next&&(0,S.Z)(C.next)?C.next:"/",N=n||"true"!==C.board_invite?"login":"boardInvite",z=function(e){e&&E.showOneToast(function(t){var n=t.hideToast;return(0,P.jsx)(h.ZP,{duration:y.Jl,onHide:n,text:e})})};(0,o.useEffect)(function(){z((0,y.ZP)(O,A))},[]);var G="signup"===D.type;return(0,o.useEffect)(function(){t&&G&&(0,u.Z)(T,!1)},[t,G]),(0,P.jsx)(a.Z,{page:"login",children:(0,P.jsxs)(i.xu,{height:"100%",position:"absolute",top:!0,width:"100%",children:[(0,P.jsx)(i.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{overflowY:"hidden"}},left:!0,position:"absolute",right:!0,top:!0,children:(0,P.jsx)(x.default,{})}),(0,P.jsx)(i.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{background:"rgba(0, 0, 0, .5)"}},left:!0,position:"fixed",right:!0,top:!0}),L?(0,P.jsx)(p.Z,{}):(0,P.jsxs)(o.Fragment,{children:[(0,P.jsxs)(i.xu,{dangerouslySetInlineStyle:{__style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},position:"absolute",children:[(0,P.jsx)(b.Z,{unsafeCSS:d.Z+f.C}),(0,P.jsx)(c.default,{attributionLabel:v,container:"login_page",handleShowingSignupWelcomeLoading:function(e){e!==L&&Z(e)},nextUrlParam:R,signupFlow:D,signupRedirectUrl:t?T:"",signupSource:N,toggleType:"SMALL_TOGGLE"})]}),!U&&(0,P.jsx)(i.xu,{"data-test-id":"login"===D.type?"simple-signup-button":"simple-login-button",left:!0,marginStart:6,marginTop:12,position:"absolute",top:!0,children:(0,P.jsx)(i.zx,{color:"white",fullWidth:!0,onClick:function(){I("login"===D.type?{type:"signup"}:{type:"login"})},text:"login"===D.type?O._('Sign up', 'sign up for account toggle on homepage', 'sign up for account toggle on homepage'):O._('Log in', 'Label for log in button', 'Label for log in button')})}),(0,P.jsx)(l.Z,{container:"login_page",handleGdprRequiresAge:function(e){var t=e.options;I({type:"socialSignupWithAge",registrationCredentials:{type:"google_one_tap",context:e.context,signupOptions:t}})},handleLoginWithMfa:function(e){I({type:"loginMfa",creds:{google_open_id_token:e}})},nextUrl:R})]})]})})}},886569:function(e,t){t.Z=function(e){var t=new Date(e);return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())}},175324:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(672652),r=n(684404),i=n(587703),a=n(140017),l=n(494125),u=n(819267);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function c(e){var t,n=e.handleSignup,i=e.handleLogin,c=(0,a.ZP)(),f=function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(t,2)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),p=f[0],d=f[1],h=(0,o.useRef)(null);return(0,l.Z)(function(){var e;return h.current=window.setTimeout(function(){e=window.requestAnimationFrame(function(){d(!0)}),n()},2e3),function(){h.current&&window.clearTimeout(h.current),e&&window.cancelAnimationFrame(e)}}),(0,u.jsxs)(r.kC,{alignItems:"center",direction:"column",flex:"grow",justifyContent:"center",children:[(0,u.jsx)(r.xu,{children:(0,u.jsx)(r.xv,{align:"center",size:"400",weight:"bold",children:p?c._('Finishing up...', 'Title of a dialog telling the user that an account is almost done being created.', 'Title of a dialog telling the user that an account is almost done being created.'):c._('Creating your account...', 'Title of a dialog telling the user that an account is being created.', 'Title of a dialog telling the user that an account is being created.')})}),(0,u.jsx)(r.xu,{paddingY:4,children:(0,u.jsx)(r.$j,{accessibilityLabel:c._('Account is being created', 'Accessibility label for account creation loading dialog', 'Accessibility label for account creation loading dialog'),show:!0})}),p?null:(0,u.jsx)(r.xu,{marginTop:2,children:(0,u.jsx)(r.xv,{align:"center",inline:!0,children:c._('Didn\u2019t mean to create a new account?', 'Description text telling the user that they can log in if they did not intend to create a new account', 'Description text telling the user that they can log in if they did not intend to create a new account')})}),p?null:(0,u.jsx)(r.xu,{children:(0,u.jsx)(r.xv,{align:"center",inline:!0,children:(0,u.jsx)(r.rU,{display:"inlineBlock",href:"/login",onClick:function(e){var t=e.event;(0,e.dangerouslyDisableOnNavigation)(),h.current&&window.clearTimeout(h.current),t&&(t.preventDefault(),t.stopPropagation()),i()},underline:"hover",children:c._('Click here to log in.', 'Login button which will show the login modal and enable the user to log in', 'Login button which will show the login modal and enable the user to log in')})})})]})}var f=n(120726),p=n(610954);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){var o,r;o=t,r=n[t],(o=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==d(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var y=function(e){var t=e.children;return(0,u.jsx)(r.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, 0.6)"}},left:!0,opacity:1,position:"fixed",right:!0,top:!0,zIndex:new r.Ry(1e3),children:(0,u.jsx)(r.xu,{color:"default",direction:"column",display:"flex",margin:6,padding:7,position:"fixed",right:!0,rounding:2,top:!0,width:376,children:t})})};function m(e){var t,n=e.handleCancelClick,s=e.handleConfirmSignup,d=e.handleShowLogin,h=e.step,m=(0,a.ZP)(),v=function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return l}}(t,2)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),_=v[0],w=v[1],O=(0,i.Z)(),S={view_type:10,view_parameter:3202};(0,l.Z)(function(){return O({event_type:120,view_parameter:S.view_parameter}),document.body&&(document.body.style.overflow="hidden"),function(){document.body&&(document.body.style.overflow="")}});var x=function(){O(g(g({},S),{},{event_type:101,element:30})),d()};return(0,u.jsx)(y,{children:"delayedSignupLoadingSpinner"===h?(0,u.jsx)(c,{handleLogin:x,handleSignup:function(){O(g(g({},S),{},{event_type:101,element:31})),s()}}):(0,u.jsxs)(r.xu,{children:[_?(0,u.jsx)(p.Z,{}):null,(0,u.jsx)(r.xu,{display:"inlineBlock",marginEnd:2,marginTop:2,position:"absolute",right:!0,top:!0,children:(0,u.jsx)(r.hU,{accessibilityLabel:m._('Cancel', 'Button to close the signup/login modal', 'Button to close the signup/login modal'),icon:"cancel",iconColor:"gray",onClick:function(){O(g(g({},S),{},{event_type:101,element:73})),n()},size:"sm"})}),(0,u.jsx)(r.xv,{align:"start",size:"400",weight:"bold",children:m._('Continue to Pinterest', 'Title of a dialog telling enabling the user to continue with sign up or log in', 'Title of a dialog telling enabling the user to continue with sign up or log in')}),(0,u.jsx)(r.xu,{marginTop:2,children:(0,u.jsx)(r.xv,{align:"start",children:m._('Hmm, it looks like you don\'t have an account yet. Let\'s get started!', 'Description text of a dialog asking the user to sign up for a Pinterest account', 'Description text of a dialog asking the user to sign up for a Pinterest account')})}),(0,u.jsx)(r.xu,{marginTop:5,children:(0,u.jsx)(r.zx,{color:"red",fullWidth:!0,onClick:function(){O(g(g({},S),{},{event_type:101,element:31})),w(!0),s()},text:m._('Sign up', 'Text on a button which will create an account when clicked', 'Text on a button which will create an account when clicked')})}),(0,u.jsx)(r.xu,{marginTop:2,children:(0,u.jsx)(r.zx,{color:"gray",fullWidth:!0,onClick:x,text:m._('Log in using a different method', 'Text on a button which will take the user to login when clicked.', 'Text on a button which will take the user to login when clicked.')})}),"staticSignupLoginWithTOS"===h?(0,u.jsx)(r.xu,{marginEnd:4,marginStart:4,marginTop:4,children:(0,u.jsx)(f.Z,{dark:!0})}):null]})})}},307772:function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function i(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}n.d(t,{Z3:function(){return m},LU:function(){return v},ZP:function(){return _}});var l,u=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,s={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},c={},f={background:"#FF8A8A",transform:"scale(.98)"},p=(i(l={init:function(e){return{transform:"scale(".concat(c[e]?.8:.99,")"),transition:"transform .2s ease-in-out",background:"#8E8E8E"}}},s.enter,{background:"#A0DCC8",transform:"scale(.99)"}),i(l,s.exit,f),i(l,s.stopped,f),i(l,s.paused,f),i(l,s.resumed,{background:"#0FA573",transform:"scale(.99)"}),l),d=function(){var e,t;function n(e){var t=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n),i(this,"setMutationObserver",function(e){return t.mutationObserver=e,t}),i(this,"startMutationObserver",function(e){t.mutationObserver&&t.mutationObserver.observe(t.node,e)}),i(this,"stopMutationObserver",function(){t.mutationObserver&&t.mutationObserver.disconnect()}),i(this,"handleIntersectionChange",function(e){var n=e.intersectionRatio>0||e.isIntersecting;if(n&&!t.inViewport){var o=Date.now();t.startTime=o,t._debug(s.enter,{startTime:o,node:t.node}),t.enterCallbacks.forEach(function(e){return e()})}else!n&&t.inViewport&&(t._debug(s.exit,!0),t.exitCallbacks.forEach(function(e){return e(t.toJSON())}));t.inViewport=n}),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId=""}return e=[{key:"onEnterViewport",value:function(e){return this.enterCallbacks.push(e),this}},{key:"onExitViewport",value:function(e){return this.exitCallbacks.push(e),this}},{key:"setDebugId",value:function(e){return this.debugId=e,u&&Object.assign(this.node.style,p.init(e)),this}},{key:"pause",value:function(){var e=this;return this.inViewport&&(this._debug(s.paused,!0),this.exitCallbacks.forEach(function(t){return t(e.toJSON())})),this}},{key:"resume",value:function(){if(this.inViewport){var e=Date.now();this._debug(s.resumed,{startTime:e}),this.startTime=e}return this}},{key:"stop",value:function(e){var t=this;return this.inViewport&&(this._debug(s.stopped,!0),this.exitCallbacks.forEach(function(n){return n(t.toJSON(e))})),this}},{key:"toJSON",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{startTime:1e6*this.startTime,endTime:1e6*Date.now(),forcedExit:e}}},{key:"toDebugJSON",value:function(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:"".concat((Date.now()-this.startTime)/1e3," seconds")}}},{key:"_debug",value:function(e,t){if(u)switch(window.console.log("\uD83D\uDCCC ".concat(e," -- ").concat(this.debugId)),!0===t&&window.console.log(this.toDebugJSON()),"object"===o(t)&&window.console.log(t),p[e]&&Object.assign(this.node.style,p[e]),e){case s.flushed:case s.paused:case s.exit:c[this.debugId]=!0}}}],r(n.prototype,e),t&&r(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,y(o.key),o)}}function b(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==h(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===h(t)?t:String(t)}var m=!0,v=!1,_=function(){var e,t;function n(){var e=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n),b(this,"_delegateChange",function(t){t.forEach(function(t){var n=e.activeImpressions.get(t.target);n&&n.handleIntersectionChange(t)})}),b(this,"_handleMutations",function(t,n){var o=e.mutationObservers.get(n);o&&o.offsetHeight<1&&o&&e.stop(o,"removed")}),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=v,this.observer=new window.IntersectionObserver(this._delegateChange),window.Cypress&&!window.activeImpressions&&(window.activeImpressions=new Map),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}return e=[{key:"setExperimentStatus",value:function(e){this.inExperiment!==e&&(this.inExperiment=e)}},{key:"stop",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=this.activeImpressions.get(e);o&&(o.stop(n),this.mutationObservers.delete(o.mutationObserver),o.stopMutationObserver(),this.activeImpressions.delete(e),null===(t=window.activeImpressions)||void 0===t||t.delete(e),this.observer.unobserve(e))}},{key:"start",value:function(e){var t,n=this,o=this.activeImpressions.get(e);return o||(o=new d(e),this.activeImpressions.set(e,o),null===(t=window.activeImpressions)||void 0===t||t.set(e,o),this.observer.observe(e),o.setMutationObserver(new window.MutationObserver(function(e,t){return n._handleMutations(e,t)})),this.mutationObservers.set(o.mutationObserver,e),o.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})),o}},{key:"pause",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;this.paused||(Array.from(this.activeImpressions.values()).forEach(function(e){return e.pause()}),this.paused=!0,this.pausePriority!==v||(this.pausePriority=e))}},{key:"resume",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;(e!==v||this.pausePriority!==m)&&this.paused&&(Array.from(this.activeImpressions.values()).forEach(function(e){return e.resume()}),this.paused=!1,this.pausePriority=v)}},{key:"addObstruction",value:function(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}},{key:"removeObstruction",value:function(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}},{key:"updateObstructions",value:function(){this._calculateRootMargins()}},{key:"_calculateRootMargins",value:function(){var e=this,t=Array.from(this.topObstructions).reduce(function(e,t){var n=t.getBoundingClientRect().bottom;return n>e?n:e},0),n=window.innerHeight-Array.from(this.bottomObstructions).reduce(function(e,t){var n=t.getBoundingClientRect().top;return n<e?n:e},window.innerHeight);if(t!==this.topHeight||n!==this.bottomHeight){var o={rootMargin:"".concat(-t,"px 0px ").concat(-n,"px")};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,o),Array.from(this.activeImpressions.values()).forEach(function(t){return e.observer.observe(t.node)}),this.topHeight=t,this.bottomHeight=n}}}],g(n.prototype,e),t&&g(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}()},30378:function(e,t,n){var o=n(307772);t.Z=new o.ZP},317540:function(e,t){t.Z={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},237856:function(e,t,n){n.d(t,{H:function(){return l},M:function(){return a}});var o=n(658583),r=n(622541),i=n(217058),a=function(){var e=o.U2(r.yu);return e?Math.floor((new Date().getTime()-new Date(e).getTime())/864e5):-1},l=function(){return o.U2(r.e7)&&(0,i.My)("pcons.non_google_autologin_disabled_cookie.".concat(a())),!!o.U2(r.x3)||!!o.U2(r.e7)}},14583:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(672652),r=n(819267);function i(e){var t=e.children,n=e.fallback;return(0,r.jsx)(o.Suspense,{fallback:n||null,children:t})}},608516:function(e,t,n){var o=n(14583);t.Z=o.Z},55202:function(e,t,n){n.d(t,{U:function(){return a},Z:function(){return l}});var o=n(317540),r=n(819267),i=function(){},a=function(e){e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function l(e){var t=e.allowClickAndDrag,n=e.allowEsc,l=e.allowMediaPlay,u=e.allowScroll,s=e.children,c=function(e){n&&e.keyCode===o.Z.ESCAPE||a(e)};return(0,r.jsx)("div",{onAbort:a,onAnimationEnd:a,onAnimationIteration:a,onAnimationStart:a,onBlur:i,onCanPlay:l?i:a,onCanPlayThrough:a,onChange:a,onClick:t?i:a,onCompositionEnd:a,onCompositionStart:a,onCompositionUpdate:a,onContextMenu:a,onCopy:a,onCut:a,onDoubleClick:a,onDurationChange:a,onEmptied:a,onEncrypted:a,onEnded:a,onError:a,onFocus:i,onInput:a,onInvalid:a,onKeyDown:c,onKeyPress:c,onKeyUp:c,onLoad:a,onLoadedData:a,onLoadedMetadata:a,onLoadStart:a,onMouseDown:a,onMouseEnter:a,onMouseLeave:a,onMouseMove:t?i:a,onMouseOut:a,onMouseOver:a,onMouseUp:t?i:a,onPaste:a,onPause:a,onPlay:a,onPlaying:a,onProgress:a,onRateChange:a,onScroll:u?i:a,onSeeked:a,onSeeking:a,onSelect:a,onStalled:a,onSubmit:a,onSuspend:a,onTimeUpdate:a,onTouchCancel:a,onTouchEnd:t?i:a,onTouchMove:t?i:a,onTouchStart:t?i:a,onTransitionEnd:a,onVolumeChange:a,onWaiting:a,onWheel:a,children:s})}},552228:function(e,t,n){var o=[".at",".com.au",".ca",".ch",".cl",".de",".dk",".es",".fr",".co.uk",".ie",".it",".jp",".co.kr",".com.mx",".nz",".ph",".pt",".ru",".se"],r=new RegExp(/^(.+\.)?(pinterest|pinterdev)\.com$/);t.C=function(e){return r.test(e)||o.some(function(t){return e==="pinterest".concat(t)||e.endsWith(".pinterest".concat(t))})}},531486:function(e,t,n){var o=n(552228);t.Z=function(e){if(e.startsWith("//"))return!1;if(e.startsWith("/"))return!0;if(e.startsWith("http://")||e.startsWith("https://"))try{var t=new URL(e);if(t.username)return!1;return(0,o.C)(t.host)}catch(e){}return!1}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/39322-62c78dd5ae8bc233.js.map