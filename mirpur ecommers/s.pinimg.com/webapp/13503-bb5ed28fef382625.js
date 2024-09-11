"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[13503],{628596:function(e,o,t){t.r(o);var l,n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FollowButton_pin",selections:[{alias:null,args:null,concreteType:"Domain",kind:"LinkedField",name:"linkDomain",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"officialUser",plural:!1,selections:l=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nativeCreator",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:l,storageKey:null}],type:"Pin",abstractKey:null};n.hash="cabaa35ed7d59dee006897bf3ef32e3d",o.default=n},877457:function(e,o,t){t.d(o,{g:function(){return i},t:function(){return r}});var l=t(672652),n=(0,l.createContext)(null),r=n.Provider,i=function(){return(0,l.useContext)(n)}},241552:function(e,o,t){t.d(o,{l:function(){return r},r:function(){return i}});var l=t(672652),n=(0,l.createContext)(null),r=function(){return(0,l.useContext)(n)},i=n.Provider},48481:function(e,o,t){var l=t(877457),n=t(241552);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,l)}return t}o.Z=function(){var e=(0,l.g)(),o=(0,n.l)();return function(t){var l,n=t.mobileOptions,a=t.desktopOptions,u=t.reason,s=t.attributionLabel,c=t.pinId;e?e.showDesktopSignupModal(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach(function(o){var l,n;l=o,n=t[o],(l=function(e){var o=function(e,o){if("object"!==r(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,o||"default");if("object"!==r(l))return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)}(e,"string");return"symbol"===r(o)?o:String(o)}(l))in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}({signupFlow:(null==a?void 0:a.modalType)==="login"?{type:"login"}:{type:"signup"},reason:u,attributionLabel:s},null==a?void 0:a.modalOptions)):o&&o.showMobileSignupModal({reason:u,attributionLabel:s,headingType:null!==(l=null==n?void 0:n.headingType)&&void 0!==l?l:"none",pinId:c})}}},623409:function(e,o,t){t.d(o,{Z:function(){return a}});var l=t(672652),n=t(328038),r=t(96157),i=t(217058);function a(){var e=(0,n.TH)();return(0,l.useCallback)(function(o){var t=o.action,l=o.item,n=o.within,a=(0,r.L6)(e)?"pin":(0,r.am)(e)?"board":(0,r.Xn)(e)?"login":(0,r.C$)(e)?"home":(0,r.cD)(e)?"profile":(0,r.dr)(e)?"ideas":(0,r.gT)(e)?"ideas-root":(0,r.tZ)(e)?"videos":(0,r.Q0)(e)?"videos-category":(0,r.$Y)(e)?"article":(0,r.E0)(e)?"shopping-spotlight":(0,r.Zz)(e)?"today":(0,r.j8)(e)?"unauth-profile":(0,r.f1)(e)?"shopping-root":(0,r.OX)(e)?"shopping-category":"other";(0,i.My)("logged_out_product.interaction.".concat(a,".").concat(t),{item:l||"none",within:n||"none"})},[e])}},213503:function(e,o,t){t.d(o,{Z:function(){return j}}),t(42279);var l,n=t(684404),r=t(587703),i=t(207012),a=t(140017),u=t(340523),s=t(48481),c=t(217058),d=t(623409),f=t(13848),_=t(554786),p=t(494125),m=t(149722),h=t(735728),g=t(358589),v=t(386008),b=t(155087),w=t(155117),y=t(819267),P=function(e){var o=e.children,t=e.pulsar,l=e.testId;return t.show?(0,y.jsx)(n.xu,{"data-test-id":l,position:"relative",children:(0,y.jsxs)(n.iP,{onTap:t.onClick,tapStyle:"none",children:[(0,y.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},marginTop:-5,position:"absolute",children:o}),(0,y.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},marginTop:-12,position:"absolute",children:(0,y.jsx)(n.o3,{})})]})}):(0,y.jsx)(n.xu,{"data-test-id":l,children:o})},x=void 0!==l?l:l=t(628596);function j(e){var o,t=e.auxData,l=e.disabled,j=e.disableLog,k=e.followEventType,A=e.id,T=e.inline,F=e.invertColors,S=e.isFollowed,L=e.isIdeaPin,O=e.isLegoEnabled,I=e.isSecondaryButton,U=e.isUserFollowButton,z=e.isUserMe,C=e.onFollow,E=e.onUnfollow,D=e.pinKey,Z=e.shouldUseLegoColors,H=e.showPulsar,M=e.size,N=e.textType,K=void 0===N?"FollowFollowing":N,B=e.unfollowEventType,R=e.viewParameter,G=e.viewType,W=e.clientTrackingParams,$=(0,a.ZP)(),Q=(0,_.HG)(),X=(0,f.F9)().showToast,Y=(0,d.Z)(),V=(0,r.Z)(),q=(0,s.Z)(),J=(0,u.F)().checkExperiment,ee=(0,g.Z)(),eo=(0,m.Z)(),et=eo&&eo.isAuth,el=(0,w.f)(),en=el.unauthFollowUserId,er=el.setUnauthFollowUserId,ei=(0,v.mN)()(A),ea=ei&&{imageMediumUrl:ei.image_medium_url,username:ei.username},eu=(0,i.Z)(x,D),es=null==eu?void 0:eu.linkDomain,ec=null==eu?void 0:eu.nativeCreator,ed=null==eu?void 0:eu.originPinner,ef=null==eu?void 0:eu.pinner;o=ec||(es?es.officialUser:ed||ef);var e_=null!=ea?ea:o;(0,p.Z)(function(){!Q&&et&&en&&A&&en===A&&C(A)});var ep=ee({fn:function(){et?S?(E(A),j||V({event_type:B,view_type:G,view_parameter:R,object_id_str:A,aux_data:t,clientTrackingParams:W})):(C(A),U&&X(function(e){var o=e.hideToast,t=null!=e_&&e_.username?"/".concat(e_.username,"/"):"";return(0,y.jsx)(b.Z,{handleHide:o,href:t,imageUrl:(null==e_?void 0:e_.imageMediumUrl)||"",text:$._('Following! Their created Pins will show up in your home feed!', 'followButton.follow.informationalToastText', 'Text explaining that a creator\'s Pins will show up in home feed after follow'),userId:A})}),j||V({event_type:k,view_type:G,view_parameter:R,object_id_str:A,aux_data:t,clientTrackingParams:W})):((0,c.NC)(S?"press_profile_unfollow":"press_profile_follow"),Y({action:"click",item:S?"unfollow-button":"follow-button"}),q({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:L?"click_idea_pin_follow":"click_follow",desktopOptions:{modalType:"signup",modalOptions:Q&&J("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!Q&&J("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),Q||er(null!=A?A:""),(0,c.NC)("clickthrough"))},modalHeader:(0,h.N4)({i18n:$,toFollow:!S})}),em=!S&&!!H,eh=function(){if(z)return $._('That\'s you!', 'Follow button is disabled because this is you', 'Follow button is disabled because this is you');if("AddRemove"===K)return S?$._('Remove', 'unfollowButton.removeText', 'Follow button label - followed state, so user can click to "remove" the follow'):$._('Add', 'followButton.addText', 'Follow button label - unfollowed state, so user can click to "add" the follow');var e="FollowUnfollow"===K?$._('Unfollow', 'unfollowButton.unfollowText', 'Follow button label - followed state, so user can click to "unfollow" the follow'):$._('Following', 'Follow button label - followed state', 'Follow button label - followed state');return S?e:$._('Follow', 'Follow button label - unfollowed state', 'Follow button label - unfollowed state')};return(0,y.jsx)(P,{pulsar:em?{show:!0,onClick:ep}:{show:!1},testId:z||S?"board-unfollow-button":"board-follow-button",children:(0,y.jsx)(n.zx,{accessibilityLabel:eh(),color:Z||"AddRemove"===K||!O&&I||F?"gray":"red",disabled:z||l,fullWidth:T,onClick:em?void 0:function(e){var o=e.event;o.preventDefault(),o.stopPropagation(),j||V({event_type:101,component:13672,element:11951,object_id_str:A,view_type:G,view_parameter:R,aux_data:t,clientTrackingParams:W}),ep()},selected:S||!1,size:M,text:eh()})})}},155117:function(e,o,t){t.d(o,{f:function(){return s},w:function(){return c}});var l=t(672652),n=t(342513),r=t(819267);function i(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,l=Array(o);t<o;t++)l[t]=e[t];return l}var a=(0,n.Z)("Session"),u=a.Provider,s=a.useHook;function c(e){var o,t=e.children,n=function(e){if(Array.isArray(e))return e}(o=(0,l.useState)(void 0))||function(e,o){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var l,n,r,i,a=[],u=!0,s=!1;try{if(r=(t=t.call(e)).next,0===o){if(Object(t)!==t)return;u=!1}else for(;!(u=(l=r.call(t)).done)&&(a.push(l.value),a.length!==o);u=!0);}catch(e){s=!0,n=e}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw n}}return a}}(o,2)||function(e,o){if(e){if("string"==typeof e)return i(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,o)}}(o,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=n[0],s=n[1],c=(0,l.useCallback)(function(){return s(void 0)},[]),d=(0,l.useMemo)(function(){return{unauthFollowUserId:a,setUnauthFollowUserId:s,removeUnauthFollowUserId:c}},[a,c]);return(0,r.jsx)(u,{value:d,children:t})}},735728:function(e,o,t){t.d(o,{N4:function(){return r},Wh:function(){return l},hr:function(){return n}});var l=function(e){return e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal')},n=function(e){return e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in')},r=function(e){var o=e.i18n;return e.toFollow?o._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):o._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')}},358589:function(e,o,t){var l=t(140017),n=t(554786),r=t(166770),i=t(735728);o.Z=function(){var e=(0,l.ZP)(),o=(0,n.HG)(),t=(0,r.H)(),a=t.viewer,u=t.loginForMore,s=t.limitedLoginModalSubheader,c=t.limitedLoginModalNextLocation;return"LIMITED_LOGIN"===a.type?function(t){var l=t.modalHeader,n=t.nextLocation;return function(t){var r=null;t&&(t.nativeEvent&&t.nativeEvent instanceof Event?r=t:t.event&&(r=t.event)),r&&(r.preventDefault&&r.preventDefault(),r.stopPropagation&&r.stopPropagation()),null==u||u.setVisible(!0),null==s||s.setText(l||(o?(0,i.hr)(e):(0,i.Wh)(e))),n&&(null==c||c.setRoute(n))}}:function(e){return e.fn}}},155087:function(e,o,t){t.d(o,{Z:function(){return c}});var l=t(684404),n=t(454514),r=t(140017),i=t(757640),a=t(554786),u=t(819267);function s(e){var o=e.ideaPinImages,t=o.map(function(e,o){var t,n,r;return(0,u.jsx)(l.xu,{borderStyle:"sm",color:"default",dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:o}},height:48,overflow:"hidden",rounding:2,width:28,children:(0,u.jsx)(l.Ee,{alt:"",color:"#696969",fit:"cover",naturalHeight:null!==(t=null==e?void 0:e.height)&&void 0!==t?t:1,naturalWidth:null!==(n=null==e?void 0:e.width)&&void 0!==n?n:1,src:null!==(r=null==e?void 0:e.url)&&void 0!==r?r:""})},o)});return(0,u.jsx)(l.kC,{justifyContent:"center",children:(0,u.jsx)(l.kC,{justifyContent:"start",width:{1:28,2:40,3:48}[o.length],children:t})})}function c(e){var o=e.handleHide,t=e.text,c=e.userId,d=e.href,f=e.imageUrl,_=(0,r.ZP)(),p=(0,a.HG)(),m=(0,i.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:c}}),h=Array.isArray(t)?t.join(" "):t;if(0===(m.data||[]).length)return(0,u.jsx)(n.ZP,{duration:5e3,href:d,onHide:o,text:h,thumbnail:f?{image:(0,u.jsx)(l.Ee,{alt:_._('Image of who you followed', 'userFollowingToast.thumbnail.userImage', 'Profile thumbnail of the user you followed'),fit:"cover",naturalHeight:1,naturalWidth:1,src:f})}:void 0});var g=(m.data||[]).slice(0,3).map(function(e){var o;return null===(o=e.images)||void 0===o?void 0:o[p?"236x":"170x"]}),v=(0,u.jsx)(s,{ideaPinImages:g});return(0,u.jsx)(n.ZP,{_dangerouslySetThumbnail:v,duration:5e3,href:d,onHide:o,text:h})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/13503-bb5ed28fef382625.js.map