(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[94942,72575],{678853:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var o=r(672652),n=r(780277),i=r(684404),a=r(44801),u=r(216167),s=r(140017),c=r(5859),l=r(149722),d=r(198705),f=r(955367),p=r(511034),b=r(772575),h=r(819267);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function m(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,C(o.key),o)}}function v(e,t){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return(t=C(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==y(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}var j={dropdown:{alignItems:"center",backgroundColor:"#efefef",border:"none",cursor:"pointer",display:"flex",flexGrow:1,height:40,justifyContent:"space-between",minWidth:0,outline:0,padding:"0 14px",position:"relative"},button:{backgroundColor:a.x_d,border:"none",cursor:"pointer",flex:"none",height:40,outline:0,padding:"0 14px"}},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,r,n,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=S(c);if(t){var o=S(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return x(e)}(this,e)});function c(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return O(x(e=s.call.apply(s,[this].concat(r))),"state",{selectedBoard:null,showBoardCreate:!1,showFlyout:!1,suggestedBoardName:""}),O(x(e),"_setDefaultBoard",function(){u.Z.create("BoardPickerBoardsResource",{field_set_key:"board_picker",sort:"last_pinned_to",onlyFetchBoards:!0}).callGet({showError:!1}).then(function(t){var r=(((t||{}).resource_response||{}).data||{}).all_boards;if(r&&r.length>0){var o=r[0],n=o.id,i=o.image_cover_url,a=o.owner,u=o.privacy,s=o.name,c=o.url;if(e.props.selectedItem)return;e.handleItemChosen({boardId:n,imageCoverUrl:i,ownerUsername:null==a?void 0:a.username,privacy:u,title:s||"",url:c},!1)}})}),O(x(e),"setButtonRef",function(t){e.buttonRef=t}),O(x(e),"handleBoardDropdownClick",function(){e.setState(function(e){return{showFlyout:!e.showFlyout}})}),O(x(e),"handleSaveButtonClick",function(){var t=e.props,r=t.onSaveClick,o=t.selectedItem,n=t.disabledBoardPicker;(o||n)&&r?r():e.setState({showFlyout:!0})}),O(x(e),"handleFlyoutClose",function(){e.setState({showFlyout:!1})}),O(x(e),"handleItemChosen",function(t){var r=!(arguments.length>1)||void 0===arguments[1]||arguments[1];(0,e.props.onItemChosen)(t),r&&e.handleFlyoutClose()}),O(x(e),"handleCreateSection",function(t){var r=e.state.selectedBoard;if(r){var o=r.id,n=r.privacy,i=t.id,a=t.title;e.handleItemChosen({boardId:o,privacy:n,sectionId:i,title:a||""})}e.handleBoardCreateClose()}),O(x(e),"handleBoardCreateShow",function(t){var r=t.title;e.setState({showBoardCreate:!0,showFlyout:!1,suggestedBoardName:r})}),O(x(e),"handleBoardCreateClose",function(){e.setState({showBoardCreate:!1,selectedBoard:null})}),O(x(e),"handleBoardCreate",function(t){e.props.invalidateBoardPickerBoardsResource();var r=t.id,o=t.name,n=t.privacy,i=t.url;e.handleItemChosen({boardId:r,privacy:n,title:o||"",url:i}),e.handleBoardCreateClose()}),O(x(e),"handleSetBoardWithSection",function(t){e.setState({selectedBoard:t})}),e}return r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.selectedItem,r=e.useDefaultBoard,o=e.disableDefaultBoard;void 0!==o&&o||(void 0!==r&&r?this._setDefaultBoard():t||this._setDefaultBoard())}},{key:"render",value:function(){var e=this.props,t=e.accessibilityLabelText,r=e.buttonText,n=e.customItem,u=e.disabled,s=e.disabledBoardPicker,c=e.flyoutSize,l=e.flyoutZIndex,d=e.hasError,y=e.idealDirection,_=e.onSaveClick,m=e.placeholder,v=e.requestContext,x=e.selectedItem,S=e.showBoardCover,O=e.showButton,C=e.showCreateBoardButton,w=e.showFlyoutSaveButton,P=e.showSections,E=e.showSectionSaveButton,B=e.boardFilter,A=e.useLayer,R=e.useStoryboardStyle,I=e.useCreateModalWithNoLayer,D=e.showSaveToProfile,N=this.state,T=N.selectedBoard,k=N.showBoardCreate,L=N.showFlyout,M=N.suggestedBoardName,z=v.isRTL,F=R?16:8,U="".concat(F,"px 0 0 ").concat(F,"px"),Z="0 ".concat(F,"px ").concat(F,"px 0"),G=(x||{}).title,W=S&&!!x&&G,K=u||s,H=g(g({},R?({dropdown:{alignItems:"center",backgroundColor:"".concat(K?"#efefef":"#ffffff"),border:"2px solid ".concat(d?a.LyT:a.z5V),cursor:"pointer",display:"flex",flexGrow:1,height:48,justifyContent:"space-between",minWidth:0,outline:0,position:"relative",borderRadius:16}}).dropdown:j.dropdown),{},{borderRadius:L||!O?F:z?Z:U,padding:W?"0 14px 0 7px":"0 14px",cursor:K?"default":"pointer",pointerEvents:K?"none":"auto"}),q=g(g(g({},j.button),{},{borderRadius:z?U:Z},u?{backgroundColor:"#efefef",cursor:"default"}:{}),{},{pointerEvents:u?"none":"auto"});return(0,h.jsxs)(i.xu,{column:12,dangerouslySetInlineStyle:{__style:{borderRadius:8,boxShadow:d&&!R?"0 0 0 1px #e60023":void 0,zIndex:L?l:void 0}},position:"relative",children:[(0,h.jsxs)(i.kC,{alignItems:"center",justifyContent:"start",width:"100%",children:[(0,h.jsxs)("button",{ref:this.setButtonRef,"aria-disabled":u,"data-test-id":"board-dropdown-select-button",disabled:u,onClick:this.handleBoardDropdownClick,style:H,children:[(0,h.jsxs)(i.xu,{alignItems:"center","data-test-id":x?"board-dropdown-item-selected":"board-dropdown-placeholder",display:"flex",marginEnd:2,minWidth:0,overflow:"hidden",children:[W&&(0,h.jsx)(i.xu,{marginEnd:2,children:(0,h.jsx)(i.zd,{height:32,rounding:2,width:32,children:null!=x&&x.imageCoverUrl?(0,h.jsx)(i.Ee,{alt:this.props.i18n._('Board cover', 'boardDropdown.button.selectedBoard.boardCover', 'Board cover image for selected board'),color:"lightGray",fit:"cover",naturalHeight:1,naturalWidth:1,src:x.imageCoverUrl||""}):(0,h.jsx)(i.xu,{color:"secondary",height:"100%",width:"100%"})})}),(0,h.jsx)(i.xv,{lineClamp:1,children:(0,h.jsx)("span",{style:{color:x?"#111":"#6c6c6c"},children:x&&G?G:m})})]}),(0,h.jsx)(i.xu,{flex:"none",marginEnd:-1,children:(0,h.jsx)(i.JO,{accessibilityLabel:this.props.i18n._('Choose a board', 'Instructions to open board picker', 'Instructions to open board picker'),color:K?"subtle":"default",icon:"arrow-down",size:12})})]}),!L&&O&&(0,h.jsx)("button",{"aria-disabled":u,"data-test-id":"board-dropdown-save-button",disabled:u,onClick:this.handleSaveButtonClick,style:q,children:(0,h.jsx)(i.xv,{color:u?"subtle":"inverse",weight:"bold",children:r||this.props.i18n._('Save', 'Button to create new Pin', 'Button to create new Pin')})})]}),L&&(0,h.jsx)(i.J2,{anchor:this.buttonRef,idealDirection:y||"down",onDismiss:this.handleFlyoutClose,size:c,children:(0,h.jsx)(p.sR,{accessibilityLabelText:t,boardFilter:B,buttonText:r,customItem:n&&(0,o.cloneElement)(n,{onItemChosen:this.handleFlyoutClose}),onBoardCreate:this.handleBoardCreateShow,onButtonClick:_,onItemChosen:this.handleItemChosen,paneWidth:"number"==typeof c?c:void 0,setBoardWithSection:this.handleSetBoardWithSection,showCreateBoardButton:C,showFlyoutSaveButton:w,showSaveToProfile:D,showSections:P,showSectionSaveButton:E,useLegoLayout:!1,useStoryboardStyle:R})}),k&&!T&&(0,h.jsx)(f.Z,{onBoardCreate:this.handleBoardCreate,onClose:this.handleBoardCreateClose,showSecretBoardCreateToggle:"public"===B,suggestedBoardName:M,useModalWithNoLayer:I}),k&&!!T&&(0,h.jsx)(b.default,{onClose:this.handleBoardCreateClose,onSectionCreate:this.handleCreateSection,selectedBoard:T,useLayer:A})]})}}],m(c.prototype,r),n&&m(c,n),Object.defineProperty(c,"prototype",{writable:!1}),c}(o.Component);function P(e){var t=(0,s.ZP)(),r=(0,n.useDispatch)(),o=(0,l.Z)(),i=(0,d.Z)();return(0,h.jsx)(w,g(g({},e),{},{i18n:t,invalidateBoardPickerBoardsResource:function(){return r((0,p.DR)(o,i))},requestContext:(0,c.B)()}))}O(w,"defaultProps",{flyoutSize:"lg",flyoutZIndex:1,showButton:!0,disabled:!1})},604625:function(e,t,r){"use strict";r.d(t,{Cq:function(){return l},Dk:function(){return f},Fk:function(){return n},fS:function(){return c},km:function(){return d},lI:function(){return a},lJ:function(){return i},mS:function(){return s},qW:function(){return u}});var o=r(684404),n=new o.Ry(1),i=3,a=new o.Ry(i),u=2,s=new o.Ry(u),c=3,l=4,d=new o.Ry(5),f=new o.Ry(100)},317985:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var o=r(684404),n=r(819267),i={__style:{margin:"0 10px",borderRight:"3px solid transparent",borderTop:"3px solid #fff",animation:"spin .8s linear infinite"}};function a(){return(0,n.jsx)(o.xu,{alignItems:"center",color:"primary",display:"flex",height:"100%",justifyContent:"center",position:"absolute",rounding:8,width:"100%",children:(0,n.jsx)(o.xu,{dangerouslySetInlineStyle:i,"data-test-id":"submit-button-spinner",display:"inlineBlock",height:18,position:"relative",rounding:"circle",width:18})})}function u(e){var t=e.disabled,r=e.name,i=e.onClick,u=e.size,s=e.submitting,c=e.text;return(0,n.jsxs)(o.xu,{"data-test-id":"submit-button",display:"flex",position:"relative",children:[s&&(0,n.jsx)(a,{}),(0,n.jsx)(o.zx,{color:"red",disabled:t||s,name:r,onClick:i,size:u,text:c,type:"submit"})]})}},879932:function(e,t,r){"use strict";r.d(t,{Az:function(){return _},DI:function(){return x},Gl:function(){return C},Hl:function(){return R},Kb:function(){return N},NA:function(){return o},NG:function(){return c},OC:function(){return B},Pq:function(){return P},QM:function(){return b},Sk:function(){return O},UF:function(){return m},Uo:function(){return E},WF:function(){return u},Xm:function(){return l},Zf:function(){return i},_D:function(){return D},_N:function(){return p},ac:function(){return a},dt:function(){return y},e_:function(){return f},gf:function(){return g},hf:function(){return j},i_:function(){return s},jY:function(){return v},ni:function(){return S},qg:function(){return d},rX:function(){return n},vX:function(){return w},wO:function(){return I},yG:function(){return h},yq:function(){return A}});var o="10",n=1,i=365,a=64,u=8,s=9,c=11,l=15,d=16,f=17,p=18,b=19,h=20,y=22,_=1e6,g=1e6,m="US";function v(e){var t="USD",r="$";switch(e){case"AT":case"BE":case"DE":case"ES":case"FI":case"FR":case"IE":case"IT":case"NL":case"PT":t="EUR",r="€";break;case"AU":t="AUD",r="$";break;case"CA":t="CAD",r="$";break;case"CH":t="CHF",r="CHF";break;case"DK":t="DKK",r="kr";break;case"GB":t="GBP",r="\xa3";break;case"NO":t="NOK",r="kr";break;case"NZ":t="NZD",r="$";break;case"SE":t="SEK",r="kr"}return[t,r]}var x={AU:{budget:1,duration:"10"},CA:{budget:1,duration:"10"},CZ:{budget:80,duration:"10"},FR:{budget:1,duration:"10"},GB:{budget:1,duration:"10"},IE:{budget:1,duration:"10"},NZ:{budget:1,duration:"10"},US:{budget:3,duration:"10"},AT:{budget:1,duration:"10"},DE:{budget:1,duration:"10"},IT:{budget:1,duration:"10"},ES:{budget:1,duration:"10"},NL:{budget:1,duration:"10"},PT:{budget:1,duration:"10"},BE:{budget:1,duration:"10"},CH:{budget:1,duration:"10"},SE:{budget:10,duration:"30"},NO:{budget:10,duration:"30"},DK:{budget:10,duration:"30"},FI:{budget:1,duration:"10"}},S={AU:{budget:10,duration:"10"},CA:{budget:9,duration:"10"},CZ:{budget:150,duration:"10"},FR:{budget:7,duration:"10"},GB:{budget:5,duration:"10"},IE:{budget:7,duration:"10"},NZ:{budget:10,duration:"10"},US:{budget:7,duration:"10"},AT:{budget:7,duration:"10"},DE:{budget:7,duration:"10"},IT:{budget:7,duration:"10"},ES:{budget:7,duration:"10"},NL:{budget:7,duration:"10"},PT:{budget:7,duration:"10"},BE:{budget:7,duration:"10"},CH:{budget:7,duration:"10"},SE:{budget:70,duration:"30"},NO:{budget:70,duration:"30"},DK:{budget:50,duration:"30"},FI:{budget:7,duration:"10"}},O={AT:1,AU:1,BE:1,CA:1,CH:1,CZ:11,DE:1,ES:1,DK:1,FI:1,FR:1,GB:1,IE:1,IT:1,NO:1,NZ:1,NL:1,PT:1,SE:1,US:1},C={PIN_SELECTION_MODAL:"PIN_SELECTION_MODAL",BUSINESS_FORM:"QUICK_PROMOTE_BUSINESS_FORM",BILLING_FORM:"QUICK_PROMOTE_BILLING_FORM",SUCCESS_MODAL:"SUCCESS_MODAL",ERROR_MODAL:"ERROR_MODAL",TAG_MODAL:"TAG_MODAL",GDPR_MODAL:"GDPR_MODAL"},j="QUICK_PROMOTE_PAGE",w=[C.GDPR_MODAL,C.PIN_SELECTION_MODAL,j,C.BUSINESS_FORM,C.BILLING_FORM,C.SUCCESS_MODAL,C.ERROR_MODAL],P={NARROW:"NARROW",MEDIUM:"MEDIUM",WIDE:"WIDE"},E=function(e){return e>=1&&e<=2},B="qp-fac-education-id",A="qp-fac-modal-education-id",R={CONSIDERATION:"CONSIDERATION",WEB_CONVERSION:"WEB_CONVERSION",CATALOG_SALES:"CATALOG_SALES"},I={PINS:0,PRODUCT_GROUPS:1,BOARDS:2,SELECTED:3,SEARCH_RESULTS:4},D={MOST_RECENT:"RECENT",PROMOTED_PINS:"PROMOTED"},N=300},772575:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var o=r(684404),n=r(930837),i=r(140017),a=r(5859),u=r(916964),s=r(819267);function c(e){var t=(0,i.ZP)(),r=e.onSectionCreate,c=e.onClose,l=e.selectedBoard,d=e.useLayer,f=(0,a.B)().isRTL,p=void 0===d||d?n.ZP:o.u_,b=(0,s.jsx)(o.xu,{paddingX:4,paddingY:6,position:"relative",children:(0,s.jsxs)(o.kC,{alignItems:"center",justifyContent:"center",children:[(0,s.jsx)(o.xu,{maxWidth:400,children:(0,s.jsx)(o.X6,{align:"center",size:"500",children:t._('Add section', 'Modal header for adding a section', 'Modal header for adding a section')})}),(0,s.jsx)(o.xu,{left:f,paddingX:6,paddingY:5,position:"absolute",right:!f,top:!0,children:(0,s.jsx)(o.hU,{accessibilityLabel:t._('Close', 'CreateSection.Modal.Icon', 'Icon to close section create modal'),icon:"cancel",iconColor:"darkGray",onClick:c,size:"lg"})})]})});return(0,s.jsx)(p,{accessibilityModalLabel:t._('Add a section to the board', 'modal to add a section to a board', 'modal to add a section to a board'),heading:b,onDismiss:c,size:"sm",children:(0,s.jsx)(o.xu,{color:"default",display:"flex",rounding:2,children:(0,s.jsx)(u.Z,{board:l,completeCreateSectionAction:r,onClearModal:c,positionRelative:!0,showTitle:!1})})})}},916964:function(e,t,r){"use strict";var o=r(672652),n=r(780277),i=r(684404),a=r(587703),u=r(140017),s=r(317540),c=r(149722),l=r(785059),d=r(199677),f=r(317985),p=r(402287),b=r(819267);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){S(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function g(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,O(o.key),o)}}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,r){return(t=O(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==h(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===h(t)?t:String(t)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(n,e);var t,r,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=x(n);if(t){var o=x(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return v(e)}(this,e)});function n(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,n),S(v(t=o.call(this,e)),"onCreateSection",function(){var e=t.props,r=e.board,o=e.sourceBoard,n=e.sourceSection,i=e.dispatch,a=e.completeCreateSectionAction,u=e.pinImport,s=e.viewer,c=e.orbacActingAs,l=e.logContextEvent,f=(0,d.lJ)(s,c);return t.setState({isSaving:!0}),i((0,p.vB)({boardId:r.id,sourceBoardId:o&&o.id,sourceSectionId:n&&n.id,name:t.state.inputName.trim(),pinImport:u},t.props.i18n,f,l)).then(function(e){t.setState({isSaving:!1}),a(e)}).catch(function(e){t.setState({createError:e.message_detail||e.message,isSaving:!1})})}),S(v(t),"handleKeyDown",function(e){var r=e.event,o=t.state,n=o.createError,i=o.inputName;[s.Z.ENTER,s.Z.NUMPAD_ENTER].includes(r.which)&&!n&&i.trim()&&t.onCreateSection()}),S(v(t),"handleChangeName",function(e){var r=e.value;t.setState({createError:null,inputName:r})}),S(v(t),"handleInputRef",function(e){t.setState({inputRef:e})}),t.state={createError:null,inputName:e.initialName||"",inputRef:null,isSaving:!1},t}return g(n.prototype,[{key:"componentDidUpdate",value:function(e,t){var r=this.state,o=r.createError,n=r.inputRef;n&&(!t.inputRef||o)&&n.focus()}},{key:"render",value:function(){var e=this.props,t=e.showTitle,r=e.positionRelative,o=this.state,n=o.createError,a=o.inputName,u=o.isSaving,s=!!a.trim()&&!n;return(0,b.jsxs)(i.xu,{bottom:!0,color:"default",dangerouslySetInlineStyle:{__style:{borderLeft:"1px solid #f5f5f5"}},direction:"column",display:"flex",flex:"grow",position:r?"relative":"absolute",right:!0,rounding:2,top:!0,width:"100%",children:[t&&(0,b.jsx)(i.xu,{marginTop:3,paddingX:6,paddingY:3,children:(0,b.jsx)(i.X6,{size:"400",children:this.props.i18n._('Add section', 'Title in the add section modal', 'Title in the add section modal')})}),(0,b.jsxs)(i.xu,{padding:4,children:[(0,b.jsx)(i.xu,{marginBottom:2,children:(0,b.jsx)(i.__,{htmlFor:"sectionEditName",children:(0,b.jsx)(i.xv,{color:n?"error":"subtle",size:"200",children:this.props.i18n._('Name', 'Board section name', 'Board section name')})})}),(0,b.jsx)(i.xu,{children:(0,b.jsx)(i.xu,{ref:this.handleInputRef,children:(0,b.jsx)(i.nv,{errorMessage:n||"",id:"sectionEditName",name:"sectionName",onChange:this.handleChangeName,onKeyDown:this.handleKeyDown,placeholder:this.props.i18n._('Like "Lighting"', 'Placeholder for board section name', 'Placeholder for board section name'),size:"lg",type:"text",value:a})})})]}),(0,b.jsx)(i.kC,{alignItems:"stretch",flex:"grow",justifyContent:"start"}),(0,b.jsx)(i.xu,{padding:4,children:(0,b.jsx)(i.kC,{alignItems:"stretch",justifyContent:"end",children:(0,b.jsx)(f.Z,{disabled:!s||u,onClick:this.onCreateSection,submitting:u,text:this.props.i18n._('Add', 'add a new section', 'add a new section')})})})]})}}]),r&&g(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}(o.Component);t.Z=function(e){var t=(0,n.useDispatch)(),r=(0,u.ZP)(),o=(0,c.Z)(),i=(0,l.Z)();return(0,b.jsx)(C,_(_({},e),{},{dispatch:t,i18n:r,logContextEvent:(0,a.Z)(),orbacActingAs:i,viewer:o}))}},372587:function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=[],o=[];e.exports=/**
 * Checks if two values are equal. Values may be primitives, arrays, or objects.
 * Returns true if both arguments have the same keys and values.
 *
 * @see http://underscorejs.org
 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * @license MIT
 */function(e,n){var i=r.length?r.pop():[],a=o.length?o.pop():[],u=function e(r,o,n,i){if(r===o)return 0!==r||1/r==1/o;if(null==r||null==o||"object"!=t(r)||"object"!=t(o))return!1;var a=Object.prototype.toString,u=a.call(r);if(u!=a.call(o))return!1;switch(u){case"[object String]":return r==String(o);case"[object Number]":return!(isNaN(r)||isNaN(o))&&r==Number(o);case"[object Date]":case"[object Boolean]":return+r==+o;case"[object RegExp]":return r.source==o.source&&r.global==o.global&&r.multiline==o.multiline&&r.ignoreCase==o.ignoreCase}for(var s=n.length;s--;)if(n[s]==r)return i[s]==o;n.push(r),i.push(o);var c=0;if("[object Array]"===u){if((c=r.length)!==o.length)return!1;for(;c--;)if(!e(r[c],o[c],n,i))return!1}else{if(r.constructor!==o.constructor)return!1;if(r.hasOwnProperty("valueOf")&&o.hasOwnProperty("valueOf"))return r.valueOf()==o.valueOf();var l=Object.keys(r);if(l.length!=Object.keys(o).length)return!1;for(var d=0;d<l.length;d++)if(!e(r[l[d]],o[l[d]],n,i))return!1}return n.pop(),i.pop(),!0}(e,n,i,a);return i.length=0,a.length=0,r.push(i),o.push(a),u}},324549:function(e){"use strict";function t(e){return function(){return e}}var r=function(){};r.thatReturns=t,r.thatReturnsFalse=t(!1),r.thatReturnsTrue=t(!0),r.thatReturnsNull=t(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},111230:function(e,t,r){"use strict";var o=r(324549);e.exports=o},755879:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},859135:function(e,t,r){var o=r(755879);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},63503:function(e,t,r){var o=r(918216);e.exports=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=o(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){s=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw a}}}},e.exports.__esModule=!0,e.exports.default=e.exports},734764:function(e,t,r){var o=r(989925);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},647189:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},655570:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},145106:function(e){e.exports=function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},245600:function(e,t,r){var o=r(734764);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e},e.exports.__esModule=!0,e.exports.default=e.exports},187403:function(e,t,r){var o=r(859135),n=r(655570),i=r(918216),a=r(145106);e.exports=function(e){return o(e)||n(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},764841:function(e,t,r){var o=r(566942).default;e.exports=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},989925:function(e,t,r){var o=r(566942).default,n=r(764841);e.exports=function(e){var t=n(e,"string");return"symbol"==o(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},566942:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},918216:function(e,t,r){var o=r(755879);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/94942-8edb2a403f9f0269.js.map