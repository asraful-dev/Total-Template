(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[63671],{48337:function(e,t,o){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/about/copyright/counter-notice"]=function(){return o(157795).Z}},339001:function(e,t,o){"use strict";o.d(t,{Wc:function(){return s},bF:function(){return d},nk:function(){return l},r7:function(){return _}});var r=o(672652),n=o(819267);function i(e,t,o){return e.split(o).map(function(e){if(e.match(o)){var r=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,r))return t[r]}return e})}var a=/(\{\{\s*\w+\s*\}\})/g;function l(e,t){return i(e,t,a)}function s(e,t){return i(e,t,a).join("")}var c=/(\{\s*\w+\s*\})/g;function d(e,t){return i(e,t,c)}var _=function(e){var t=e.text;return Array.isArray(t)?t.map(function(e,t){return(0,n.jsx)(r.Fragment,{children:e},t)}):t}},340523:function(e,t,o){"use strict";o.d(t,{F:function(){return i},a:function(){return n}});var r=(0,o(342513).Z)("ExperimentContext"),n=r.Provider,i=r.useHook},384307:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var r=o(672652),n=o(684404),i=o(32906),a=o(819267);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}function s(){var e,t=function(e){if(Array.isArray(e))return e}(e=(0,r.useState)(""))||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,n,i,a,l=[],s=!0,c=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(r=i.call(o)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=o.return&&(a=o.return(),Object(a)!==a))return}finally{if(c)throw n}}return l}}(e,2)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=t[0],s=t[1];return(0,a.jsxs)(n.xu,{column:12,flex:"grow",padding:2,smColumn:6,children:[(0,a.jsx)(n.xu,{direction:"row",display:"flex",marginEnd:1,padding:1,children:(0,a.jsx)(n.xu,{children:(0,a.jsx)(n.__,{htmlFor:"country",children:(0,a.jsx)(n.xv,{size:"100",children:"Country"})})})}),(0,a.jsx)(i.Z,{id:"country",name:"country",onChange:function(e){return s(e.value)},resourceName:"CountriesResource",value:o})]})}},157795:function(e,t,o){"use strict";o.d(t,{Z:function(){return C}});var r=o(672652),n=o(328038),i=o(684404),a=o(107366),l=o(930837),s=o(140017),c=o(339001),d=o(340523),_=o(384307),u=o(819267),h=function(e){var t=e.setErrorModal,o=e.errorMessage,r=(0,s.ZP)();return(0,u.jsx)(l.ZP,{accessibilityModalLabel:r._('Error Submitting Counter Notice', 'CounterNoticeForm.ErrorModal', 'accessibility label for error modal'),footer:(0,u.jsx)(i.xu,{children:(0,u.jsx)(i.xu,{direction:"row",display:"flex",justifyContent:"end",marginBottom:2,children:(0,u.jsx)(i.xu,{column:12,children:(0,u.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:function(){return t("")},text:r._('Okay', 'CounterNoticeForm.ErrorModalOkButton', 'accessibility label for reinstate modal confirm button')})})})}),heading:r._('Counter-Notice Form Error', 'CounterNoticeForm.ModalHeader', 'Header for modal'),onDismiss:function(){return t("")},children:(0,u.jsx)(i.xu,{display:"flex",justifyContent:"center",marginEnd:2,marginStart:2,padding:4,children:(0,u.jsx)(i.xv,{size:"300",children:o})})})};function m(e){var t=e.setReInstateBoolean,o=e.setModal,r=(0,s.ZP)();return(0,u.jsx)(l.ZP,{accessibilityModalLabel:r._('Reinstate Pin Modal', 'CounterNoticeForm.ReinstatePinModal', 'accessibility label for reinstate modal'),footer:(0,u.jsx)(i.xu,{children:(0,u.jsxs)(i.xu,{direction:"row",display:"flex",marginBottom:2,children:[(0,u.jsx)(i.xu,{column:6,direction:"row",display:"flex",paddingX:2,children:(0,u.jsx)(i.zx,{fullWidth:!0,onClick:function(){t(!1),o(!1)},text:r._('Cancel', 'CounterNoticeForm.ReinstatePinModalCancel', 'accessibility label for reinstate modal cancel button')})}),(0,u.jsx)(i.xu,{column:6,paddingX:2,children:(0,u.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:function(){t(!0),o(!1)},text:r._('Confirm', 'CounterNoticeForm.ReinstatePinModalConfirm', 'accessibility label for reinstate modal confirm button')})})]})}),heading:r._('Reinstate Pin Confirmation', 'CounterNoticeForm.ModalHeader', 'Header for modal'),onDismiss:function(){return o(!1)},children:(0,u.jsxs)(i.xu,{padding:6,children:[(0,u.jsx)(i.xu,{padding:4,children:(0,u.jsx)(i.xv,{size:"300",children:r._('By clicking "Please reinstate my content" below and then submitting the form on the next page, you will be submitting a request to Pinterest asking us to reinstate your content on our platform. Before we can reinstate the content, we will need to forward a complete copy of your counter-notice (including any personal or contact information in it) to the claimant that filed the original notice. The claimant may attempt to contact you, or may file a lawsuit against you to prevent the content from being restored.', 'CounterNoticeForm.ReinstateModalMessage1', 'The message the counter notice modal will display')})}),(0,u.jsx)(i.xu,{padding:4,children:(0,u.jsx)(i.xv,{size:"300",children:r._('Once we have forwarded the counter-notice, the claimant will have 14 business days to provide us with proof that they have filed a court action to prevent the content from being restored. If the claimant does not take any action within 14 business days, we will reinstate the content.', 'CounterNoticeForm.ReinstateModalMessage2', 'The message the counter notice modal will display')})}),(0,u.jsx)(i.xu,{padding:4,children:(0,u.jsx)(i.xv,{size:"300",children:r._('Please confirm that you understand that your complete notice, including your contact information, will be forwarded to the claimant as described above, and that you are prepared to accept service of a lawsuit contesting this reinstatement.', 'CounterNoticeForm.ReinstateModalMessage3', 'The message the counter notice modal will display')})})]})})}var f=function(e){var t=e.setModal,o=e.message,r=(0,s.ZP)();return(0,u.jsx)(l.ZP,{accessibilityModalLabel:r._('Success Submitting Counter Notice', 'CounterNoticeForm.SuccessModal', 'accessibility label for success modal'),footer:(0,u.jsx)(i.xu,{children:(0,u.jsx)(i.xu,{direction:"row",display:"flex",justifyContent:"end",marginBottom:2,children:(0,u.jsx)(i.xu,{column:12,children:(0,u.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:function(){t(""),window.location.href="/"},text:r._('Okay', 'CounterNoticeForm.SuccessModalOkButton', 'accessibility label for reinstate modal confirm button')})})})}),heading:r._('Counter-Notice Form Confirmation', 'CounterNoticeForm.ModalHeaderSubmitted', 'Header for modal'),onDismiss:function(){t(""),window.location.href="/"},children:(0,u.jsx)(i.xu,{display:"flex",justifyContent:"center",marginEnd:2,marginStart:2,padding:4,children:(0,u.jsx)(i.xv,{size:"300",children:o})})})},p=o(960270),x=function(e){var t=e.required,o=e.boolean;return p.Ry().shape({owner_name:p.Z_().required(t),signed_name:p.Z_().max(255,"Please enter no more than 255 characters").oneOf([p.iH("owner_name"),null],"Names don't match!").required(t),owner_company:p.Z_(),owner_email:p.Z_().email().required(t),owner_phone:p.Z_().required(t),owner_street_address:p.Z_().required(t),owner_city:p.Z_().required(t),owner_state:p.Z_(),owner_zipcode:p.Z_(),additional_context:p.Z_().required(t),original_takedown_request_id:p.Z_().required(t).label("Pin ID"),notice_object_id:p.Z_().required(t).label("DMCA ID"),details:p.Z_(),is_good_faith:p.O7().when("reinstate_content",{is:!0,then:p.O7().required(t).oneOf([!0],o),otherwise:p.O7()}),accept_processes_served:p.O7().when("reinstate_content",{is:!0,then:p.O7().required(t).oneOf([!0],o),otherwise:p.O7()}),accept_jurisdiction:p.O7().when("reinstate_content",{is:!0,then:p.O7().required(t).oneOf([!0],o),otherwise:p.O7()}),educational_programming:p.O7().when("reinstate_content",{is:!1,then:p.O7().required(t).oneOf([!0],o),otherwise:p.O7()}),true_representations:p.O7().when("reinstate_content",{is:!1,then:p.O7().required(t).oneOf([!0],o),otherwise:p.O7()}),reinstate_content:p.O7()},[["is_good_faith","reinstate_content"],["accept_processes_served","reinstate_content"],["accept_jurisdiction","reinstate_content"],["educational_programming","reinstate_content"],["true_representations","reinstate_content"]])},y=o(404097),b=o(170696),g=o(289155);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?P(Object(o),!0).forEach(function(t){var r,n;r=t,n=o[t],(r=function(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==j(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===j(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function A(e,t,o,r,n,i,a){try{var l=e[i](a),s=l.value}catch(e){o(e);return}l.done?t(s):Promise.resolve(s).then(r,n)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,n,i,a,l=[],s=!0,c=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(r=i.call(o)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=o.return&&(a=o.return(),Object(a)!==a))return}finally{if(c)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return z(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}var C=function(){var e,t,o=(0,s.ZP)(),p=(0,d.F)().checkExperiment,j=(0,r.useRef)(null),P=w((0,r.useState)(!1),2),z=P[0],C=P[1],F=w((0,r.useState)(!1),2),O=F[0],N=F[1],k=w((0,r.useState)(!1),2),S=k[0],I=k[1],q=w((0,r.useState)(""),2),D=q[0],E=q[1],Z=w((0,r.useState)(""),2),M=Z[0],R=Z[1],T={noticeObjectID:o._('You can find this number in the takedown notice we sent. Example: 9988776655443322', 'CounterNoticeForm.TakeDownRequestId', 'Input field to provide the take down request id'),details:o._('Is there any additional information that would be helpful to us in processing your request?', 'CounterNoticeForm.TakeDownDetailsField', 'Provides a description of the item they want to take down')},L={name:o._('Full Legal Name', 'CounterNoticeForm.NameField', 'User\'s name'),company:o._('Company', 'CounterNoticeForm.CompanyField', 'User\'s company name'),email:o._('Email', 'CounterNoticeForm.EmailField', 'User\'s email address'),phone:o._('Phone', 'CounterNoticeForm.PhoneField', 'Users phone number'),address:o._('Street Address', 'CounterNoticeForm.AddressField', 'User address'),city:o._('City', 'CounterNoticeForm.CityField', 'The users city'),state:o._('State', 'CounterNoticeForm.StateField', 'The users state'),zip:o._('Zip/Postal code', 'CounterNoticeForm.ZipCodeField', 'The users zip code'),noticeObjectID:o._('ID number of the Pin removed', 'CounterNoticeForm.TakedownRequestIDField', 'ID of take down request item they are contesting'),takedownRequestID:o._('Copyright Request ID Number', 'CounterNoticeForm.NoticeObjectIDField', 'ID of the notice object they are contesting'),details:o._('Additional Information', 'CounterNoticeForm.ItemDetailsField', 'Details about the counter notice they are filing'),additionalContext:o._('Additional Context', 'CounterNoticeForm.AdditionalContextField', 'Please provide more context about why you believe this removal was in error.'),isGoodFaith:o._('I state, under penalty of perjury, that the above information is true and correct, and I have a good faith belief that the material in question was removed in error.', 'CounterNoticeForm.IsGoodFaithBoolean', 'Boolean for good faith confirmation about information provided in form'),processServed:o._('I consent to the jurisdiction of the Federal District Court for the judicial district in which my address is located, or if my address is outside the United States, for any judicial district in which Pinterest may be found.', 'CounterNoticeForm.ConsentBoolean', 'Checkbox to confirm they consent to our terms'),acceptProcess:o._('I agree to accept service of process from the party who reported my content, or that party\'s agent.', 'CounterNoticeForm.AcceptProcessBoolean', 'Checkbox to confirm they accept the process'),accept_jurisdiction:o._('I accept the legal jurisdiction of my location.', 'CounterNoticeForm.JurisdictionBoolean', 'Checkbox to confirm they accept the process'),reinstateContent:o._('Reinstate the Pin that was removed from your account', 'CounterNoticeForm.ReinstateContentBoolean', 'Boolean to reinstate the removed pin.'),trueRepresentations:o._('I state, under penalty of perjury, that the above representations are true and correct to the best of my knowledge.', 'CounterNoticeForm.trueRepresentationsBoolean', 'Checkbox to confirm that the representations provided are true'),educationalProgramming:o._('I understand that, as a condition of any copyright strike being removed from my account, I may be required to participate in educational programming or other measures.', 'CounterNoticeForm.educationalProgrammingBoolean', 'Checkbox to confirm they understand that educational program may be a condition of strike removal')},B=p("legal_forms_enable_trigger").anyEnabled,H=w((0,r.useState)(!1),2),U=H[0],W=H[1],X=w((0,r.useState)(!1),2),Y=X[0],V=X[1],G=(0,n.TH)(),K=new URLSearchParams(G.search);K.get("pinID")&&!1===U&&W(K.get("pinID")),K.get("dmcaID")&&!1===Y&&V(K.get("dmcaID"));var $=w((0,r.useState)([]),2),J=$[0],Q=$[1],ee=(e=regeneratorRuntime.mark(function e(t){var r,n,i,l,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),t.preventDefault(),r=j.current,i=v(v({},n=Object.fromEntries(new FormData(r).entries())),{is_good_faith:!!n.is_good_faith,accept_processes_served:!!n.accept_processes_served,accept_jurisdiction:!!n.accept_jurisdiction,reinstate_content:!!z,educational_programming:!!n.educational_programming,true_representations:!!n.true_representations}),l={required:o._('Required', 'CounterNoticeForm.ValidationRequired', 'The validation message for a required field'),boolean:o._('Field must be checked', 'CounterNoticeForm.ValidationBooleanRequired', 'The validation message for a required field')},e.prev=6,e.next=9,x(l).validate(i,{abortEarly:!1});case 9:Q([]),e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(6),N(!1),Q(null===e.t0||void 0===e.t0?void 0:e.t0.inner.map(function(e){return{field:e.path,message:e.message}})),e.abrupt("return",!1);case 17:return e.prev=17,e.next=20,(0,a.Z)({url:"/v3/legal/takedowns/counter_notice/",method:"POST",data:i});case 20:s=e.sent,E((0,c.nk)(o._('Thank you. We\'ve received your request and your confirmation number is {{id}}', 'Identifying a reference for a trademark violation report', 'Identifying a reference for a trademark violation report'),{id:s.resource_response.data})),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(17),R(e.t1.message_detail||e.t1.message||"");case 27:return e.prev=27,N(!1),e.finish(27);case 30:return e.abrupt("return",null);case 31:case"end":return e.stop()}},e,null,[[6,12],[17,24,27,30]])}),t=function(){var t=this,o=arguments;return new Promise(function(r,n){var i=e.apply(t,o);function a(e){A(i,r,n,a,l,"next",e)}function l(e){A(i,r,n,a,l,"throw",e)}a(void 0)})},function(e){return t.apply(this,arguments)});return(0,u.jsx)(i.xu,{column:12,marginStart:1,mdColumn:8,mdMarginStart:12,mdPaddingX:6,smColumn:10,children:(0,u.jsx)(i.kC,{alignItems:"stretch",justifyContent:"center",width:"100%",children:(0,u.jsx)(i.xu,{display:"flex",justifyContent:"center",lgColumn:6,margin:6,mdColumn:8,width:"100%",children:(0,u.jsx)(i.xu,{width:"100%",children:(0,u.jsxs)(i.xu,{marginBottom:2,width:"100%",children:[(0,u.jsx)(i.xu,{"data-test-id":"counter-notice-header",marginBottom:2,children:(0,u.jsx)(i.X6,{accessibilityLevel:1,color:"default",size:"600",children:o._('Submit a Counter Notification or Appeal a Copyright Strike', 'CounterNoticeForm.FormTitle', 'Form title')})}),(0,u.jsxs)(i.xu,{children:[(0,u.jsx)(i.iz,{}),(0,u.jsx)(i.xu,{column:9,marginStart:1,paddingY:3,children:(0,u.jsxs)(i.FX,{id:"request_type",legend:o._('Please specify the nature of your request.', 'CounterNoticeForm.RequestType.Legend', 'A11y legend to RequesterType radio group options'),children:[(0,u.jsx)(i.FX.RadioButton,{checked:z,helperText:"If you think your Pin was removed in error, you can file a counter notification to request the content to be reinstated. ",id:"reinstate_content",label:o._('Counter Notice', 'TrademarkForm.RequesterType_Other.Label', 'Label of other of radio group option'),onChange:function(){C(!0),I(!0)},value:"counter_notice"}),(0,u.jsx)(i.FX.RadioButton,{checked:!z,helperText:"If you want to appeal the application of a strike but don't wish that the content be reinstated, you can do so here by providing details on circumstances you believe warrant removing a strike. We'll review your submission and take appropriate action.",id:"appeal_strike",label:o._('Strike Appeal', 'TrademarkForm.RequesterType_Other.Label', 'Label of other of radio group option'),onChange:function(){C(!1),I(!1)},value:"strike_appeal"})]})}),(0,u.jsx)(i.iz,{})]}),(0,u.jsx)(i.xu,{color:"default",paddingY:3,children:(0,u.jsxs)("form",{ref:j,id:"counter-notice-form",onSubmit:ee,children:[(0,u.jsxs)(i.kC,{alignItems:"stretch",justifyContent:"start",wrap:!0,children:[(0,u.jsx)(i.xu,{column:12,paddingY:3,children:(0,u.jsx)(i.X6,{accessibilityLevel:2,color:"default",size:"400",children:o._('Contact Information', 'CounterNoticeForm.OwnerInformationHeading', 'Heading with the word Owner Information')})}),(0,u.jsx)(g.Z,{col:5,label:L.name,name:"owner_name",validationErrors:J}),(0,u.jsx)(g.Z,{col:5,label:L.company,name:"owner_company",validationErrors:J}),(0,u.jsx)(g.Z,{label:L.email,name:"owner_email",validationErrors:J}),(0,u.jsx)(g.Z,{label:L.phone,name:"owner_phone",validationErrors:J}),(0,u.jsx)(g.Z,{col:12,label:L.address,name:"owner_street_address",validationErrors:J}),(0,u.jsx)(g.Z,{label:L.city,name:"owner_city",validationErrors:J}),(0,u.jsx)(g.Z,{label:L.state,name:"owner_state",validationErrors:J}),(0,u.jsx)(g.Z,{label:L.zip,name:"owner_zipcode",validationErrors:J}),(0,u.jsx)(_.Z,{}),(0,u.jsx)(i.xu,{column:12,paddingY:3,children:(0,u.jsx)(i.iz,{})}),(0,u.jsx)(i.xu,{column:12,paddingY:3,children:(0,u.jsx)(i.X6,{accessibilityLevel:2,color:"default",size:"400",children:o._('Request', 'CounterNoticeForm.RequestHeader', 'Header with the word request')})}),(0,u.jsx)(i.xu,{column:12,children:(0,u.jsxs)(i.__,{htmlFor:"additional_context",children:[(0,u.jsx)(i.xv,{weight:"bold",children:L.additionalContext}),(0,u.jsx)(b.Z,{col:12,id:"additional_context",name:"additional_context",placeholder:o._('Please provide more context about why you believe this removal was in error.', 'CounterNoticeForm.SubHeadingForm', 'Section subheading that requests adding more information about the counter notice'),validationErrors:J})]})}),(0,u.jsx)(i.xu,{column:6,children:(0,u.jsxs)(i.__,{htmlFor:"notice_object_id",children:[(0,u.jsx)(i.xv,{weight:"bold",children:L.noticeObjectID}),(0,u.jsx)(g.Z,{col:12,helperText:T.noticeObjectID,id:"notice_object_id",name:"notice_object_id",overrideValue:U||"",placeholder:L.noticeObjectID,validationErrors:J})]})}),(0,u.jsx)(i.xu,{column:6,children:(0,u.jsxs)(i.__,{htmlFor:"original_takedown_request_id",children:[(0,u.jsx)(i.xv,{weight:"bold",children:L.takedownRequestID}),(0,u.jsx)(g.Z,{col:12,helperText:o._('You can find this number in the takedown notice we sent. Example: Copyright Request ID # 12345678', 'CounterNoticeForm.NoticeObjectIdPlaceholder', 'Placeholder for the counter notice object id '),id:"original_takedown_request_id",name:"original_takedown_request_id",overrideValue:Y||"",placeholder:L.takedownRequestID,validationErrors:J})]})}),(0,u.jsx)(i.xu,{column:12,children:(0,u.jsxs)(i.__,{htmlFor:"signed_name",children:[(0,u.jsx)(i.xv,{weight:"bold",children:o._('Signed Name', 'CounterNoticeForm.SignedNameField', 'Confirm your name to submit form')}),(0,u.jsx)(g.Z,{col:12,id:"signed_name",name:"signed_name",placeholder:o._('Signed Name', 'CounterNoticeForm.SignedNameField', 'Confirm your name to submit form'),validationErrors:J})]})}),(0,u.jsx)(i.xu,{column:12,children:(0,u.jsxs)(i.__,{htmlFor:"details",children:[(0,u.jsx)(i.xv,{weight:"bold",children:L.details}),(0,u.jsx)(b.Z,{id:"details",name:"details",placeholder:T.details,validationErrors:J})]})}),(0,u.jsx)(i.xu,{column:12,paddingY:3,children:(0,u.jsx)(i.iz,{})}),(0,u.jsxs)(i.xu,{column:12,paddingY:3,children:[(0,u.jsx)(i.X6,{accessibilityLevel:2,color:"default",size:"400",children:o._('Acknowledge', 'CounterNoticeForm.AcknowledgeLabel', 'The word Acknowledge')}),(0,u.jsx)(i.xu,{paddingY:1,children:(0,u.jsx)(i.xv,{color:"error",size:"200",children:o._('By checking the following boxes, I confirm:', 'CounterNoticeForm.LabelForCheckboxes', 'Label describing the checkboxes')})})]}),z&&(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(y.Z,{label:L.isGoodFaith,name:"is_good_faith",validationErrors:J}),(0,u.jsx)(y.Z,{label:L.processServed,name:"accept_processes_served",validationErrors:J}),(0,u.jsx)(y.Z,{label:L.accept_jurisdiction,name:"accept_jurisdiction",validationErrors:J})]}),!z&&(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(y.Z,{label:L.trueRepresentations,name:"true_representations",validationErrors:J}),(0,u.jsx)(y.Z,{label:L.educationalProgramming,name:"educational_programming",validationErrors:J})]})]}),(0,u.jsx)(i.xu,{padding:2,children:(0,u.jsx)(i.zx,{color:"red",disabled:O,fullWidth:!0,text:o._('Submit Counter-Notice', 'CounterNoticeForm', 'Form submit button'),type:"submit"})})]})}),S&&(0,u.jsx)(m,{setModal:I,setReInstateBoolean:C}),!!M&&(0,u.jsx)(h,{errorMessage:M,setErrorModal:R}),!!D&&(0,u.jsx)(f,{message:D,setModal:E}),B&&(0,u.jsx)(l.ZP,{accessibilityModalLabel:o._('Maintenance Mode Modal', 'CounterNoticeForm.Maintenance', 'accessibility label for maintenance modal'),heading:o._('Form Currently in Maintenance', 'CounterNoticeForm.MaintenanceModalHeader', 'Maintenance Modal Heading'),onDismiss:function(){},children:(0,u.jsx)(i.xu,{display:"flex",justifyContent:"center",marginEnd:2,marginStart:2,padding:4,children:(0,u.jsx)(i.xv,{size:"300",children:o._('This form is temporarily unavailable. Please try again later', 'CounterNoticeForm.Maintenance', 'accessibility label for maintenance modal')})})})]})})})})})}}},function(e){e.O(0,[97270,84404,28038,24797,55169,88166,70808,60270,88306,24851],function(){return e(e.s=48337)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/about/copyright/counter-notice-ca3dd3a05028b539.js.map