(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[48310],{927361:function(e,t,o){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/about/copyright/music-appeal"]=function(){return o(280958).Z}},384307:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var r=o(672652),i=o(684404),a=o(32906),s=o(819267);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}function n(){var e,t=function(e){if(Array.isArray(e))return e}(e=(0,r.useState)(""))||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,i,a,s,l=[],n=!0,c=!1;try{if(a=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;n=!1}else for(;!(n=(r=a.call(o)).done)&&(l.push(r.value),l.length!==t);n=!0);}catch(e){c=!0,i=e}finally{try{if(!n&&null!=o.return&&(s=o.return(),Object(s)!==s))return}finally{if(c)throw i}}return l}}(e,2)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=t[0],n=t[1];return(0,s.jsxs)(i.xu,{column:12,flex:"grow",padding:2,smColumn:6,children:[(0,s.jsx)(i.xu,{direction:"row",display:"flex",marginEnd:1,padding:1,children:(0,s.jsx)(i.xu,{children:(0,s.jsx)(i.__,{htmlFor:"country",children:(0,s.jsx)(i.xv,{size:"100",children:"Country"})})})}),(0,s.jsx)(a.Z,{id:"country",name:"country",onChange:function(e){return n(e.value)},resourceName:"CountriesResource",value:o})]})}},707170:function(e,t,o){"use strict";var r=o(672652),i=o(724418),a=o(684404),s=o(44801),l=o(140017),n=o(819267);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach(function(t){var r,i;r=t,i=o[t],(r=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==c(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var _={alignItems:"center",border:"3px dashed #e0e0e0",borderRadius:"10px",cursor:"pointer",display:"flex",height:"120px",justifyContent:"center",overflowY:"scroll",padding:"10px",margin:"8px"},h=function(e){var t=e.errorMessage;return(0,n.jsxs)(a.kC,{alignItems:"start",gap:2,children:[(0,n.jsx)(a.JO,{accessibilityLabel:"ValidationErrorsTakedownsFormFileUpload",color:"error",icon:"workflow-status-problem",size:16}),(0,n.jsx)(a.xv,{color:"error",size:"100",children:t})]})};t.Z=function(e){var t=e.dispatch,o=void 0===t?function(e){return e}:t,c=e.attachment,d=e.isSubmitting,m=e.acceptedFileTypes,p=e.law,f=e.item,b=void 0===f?0:f,y=e.onFileSelected,x=void 0===y?function(){}:y,A=e.onFileRemoved,g=void 0===A?function(){}:A,v=e.validationErrors,j=void 0===v?[]:v,P=e.name,z=void 0===P?"":P,w=(0,r.useMemo)(function(){return j.find(function(e){return e.field===z})},[j,z]),F=(null==w?void 0:w.message)||null,O=(0,l.ZP)(),S=O._('File exceeds maximum allowed size of 5 MB!', 'Takedowns.AttachmentErr', 'Accessibility text for a file being too large');return(0,n.jsx)(i.Z,{accept:m,maxSize:5e6,noKeyboard:!0,onDrop:function(e){e&&(x(e),"radtc"===p?e.forEach(function(e){o({type:"SET_STATE",payload:{field:"attachment",value:e}})}):"dsa"===p&&e.forEach(function(e){o({type:"SET_DSA_STATE",payload:{item:b,field:"attachment",value:e}})}))},children:function(e){var t=e.getRootProps,r=e.getInputProps,i=e.fileRejections;return(0,n.jsxs)(a.xu,{column:12,children:[c?(0,n.jsx)(a.xu,{alignItems:"center",direction:"column",display:"flex",paddingY:1,children:(0,n.jsx)(a.ci,{iconAccessibilityLabel:O._('Remove file icon', 'TakedownsForm.RemoveFileIconAccessibility', 'Remove file icon accessibility label'),message:(0,n.jsx)(a.xv,{children:c.name},"attachment-name"),primaryAction:{accessibilityLabel:O._('Remove file button', 'TakedownsForm.RemoveFileButtonAccessibility', 'Remove file button accessibility label'),label:O._('Remove', 'TakedownsForm.RemoveFileApplication', 'Remove file button label'),disabled:d,onClick:function(){g(),"radtc"===p?o({type:"SET_STATE",payload:{field:"attachment",value:null}}):"dsa"===p&&o({type:"SET_DSA_STATE",payload:{item:b,field:"attachment",value:null}})}},title:O._('Attachment', 'TakedownsForm.AttachmentApplication', 'Attachment callout title'),type:"info"})}):(0,n.jsxs)("div",u(u({},t({style:u(u({},_),i.length||F?{borderColor:s.LyT}:{})})),{},{children:[(0,n.jsx)("input",u(u({},r()),{},{"data-test-id":"file-input",name:"attachment"})),(0,n.jsxs)(a.kC,{alignItems:"center",direction:"column",justifyContent:"start",children:["radtc"===p&&(0,n.jsx)(a.xv,{children:O._('Please attach the removal order if applicable (optional)', 'TakedownsForm.AttachRemovalOrderApplication', 'Attach removal order optional text')}),(0,n.jsx)(a.xu,{display:"flex",justifyContent:"center",padding:2,children:(0,n.jsx)(a.zx,{text:O._('Add attachment', 'TakedownsForm.AddAttachmentApplication', 'Add attachment button text')})})]})]})),(i.length||F)&&(0,n.jsx)(h,{errorMessage:i.length?S:F})]})}})}},656084:function(e,t){"use strict";t.Z=function(e){return new Promise(function(t,o){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return o(e)}})}},280958:function(e,t,o){"use strict";o.d(t,{Z:function(){return w}});var r=o(672652),i=o(325714),a=o(684404),s=o(107366),l=o(140017),n=o(384307),c=o(404097),d=o(170696),u=o(289155),_=o(656084),h=o(930837),m=o(819267),p=function(e){var t=e.setErrorModal,o=e.errorMessage,r=(0,l.ZP)();return(0,m.jsx)(h.ZP,{accessibilityModalLabel:r._('Error Submitting Music Appeal', 'MusicAppealForm.ErrorModal', 'accessibility label for error modal'),footer:(0,m.jsx)(a.xu,{children:(0,m.jsx)(a.xu,{direction:"row",display:"flex",justifyContent:"end",marginBottom:2,children:(0,m.jsx)(a.xu,{column:12,children:(0,m.jsx)(a.zx,{color:"red",fullWidth:!0,onClick:function(){return t("")},text:r._('Okay', 'MusicAppealForm.ErrorModalOkButton', 'accessibility label for music modal confirm button')})})})}),heading:r._('Music Appeal Form Error', 'MusicAppealForm.ModalHeader', 'Header for modal'),onDismiss:function(){return t("")},children:(0,m.jsx)(a.xu,{display:"flex",justifyContent:"center",marginEnd:2,marginStart:2,padding:4,children:(0,m.jsx)(a.xv,{size:"300",children:o})})})},f=function(e){var t=e.setModal,o=e.message,r=(0,l.ZP)();return(0,m.jsx)(h.ZP,{accessibilityModalLabel:r._('Success Submitting Music Appeal', 'MusicAppealForm.SuccessModal', 'accessibility label for success modal'),footer:(0,m.jsx)(a.xu,{children:(0,m.jsx)(a.xu,{direction:"row",display:"flex",justifyContent:"end",marginBottom:2,children:(0,m.jsx)(a.xu,{column:12,children:(0,m.jsx)(a.zx,{color:"red",fullWidth:!0,onClick:function(){t(""),window.location.href="/"},text:r._('Okay', 'MusicAppealForm.SuccessModalOkButton', 'accessibility label for reinstate modal confirm button')})})})}),heading:r._('Music Appeal Form Confirmation', 'MusicAppealForm.ModalHeaderSubmitted', 'Header for modal'),onDismiss:function(){t(""),window.location.href="/"},children:(0,m.jsx)(a.xu,{display:"flex",justifyContent:"center",marginEnd:2,marginStart:2,padding:4,children:(0,m.jsx)(a.xv,{size:"300",children:o})})})},b=o(960270),y=function(e){var t=e.required,o=e.boolean,r=e.maxLength,i=e.namesNotMatching,a=e.email,s=e.booleanMutedReason;return b.Ry().shape({accept_jurisdiction:b.O7().required(t).oneOf([!0],o),accept_processes_served:b.O7().required(t).oneOf([!0],o),country:b.Z_(),is_good_faith:b.O7().required(t).oneOf([!0],o),muted_object_id:b.Z_().required(t),is_authorized_to_use_music:b.O7().when("other_reason",{is:!0,then:b.O7(),otherwise:b.O7().required(t).oneOf([!0],s)}),attachment:b.O7().when("is_authorized_to_use_music",{is:!0,then:b.O7().required(t).oneOf([!0],t),otherwise:b.O7()}),other_reason:b.O7().when("is_authorized_to_use_music",{is:!0,then:b.O7(),otherwise:b.O7().required(t).oneOf([!0],s)}),other_reason_additional_context:b.Z_().when("other_reason",{is:!0,then:b.Z_().required(t),otherwise:b.Z_()}),city:b.Z_().required(t),company:b.Z_(),email:b.Z_().email(a).required(t),name:b.Z_().required(t),phone:b.Z_().required(t),state:b.Z_(),street_address:b.Z_().required(t),zipcode:b.Z_(),signed_name:b.Z_().max(255,r).oneOf([b.iH("name"),null],i).required(t)},[["is_authorized_to_use_music","other_reason"],["other_reason","is_authorized_to_use_music"],["attachment","is_authorized_to_use_music"],["other_reason_additional_context","other_reason"]])},x=o(707170);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(Object(o),!0).forEach(function(t){var r,i;r=t,i=o[t],(r=function(e){var t=function(e,t){if("object"!==A(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==A(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===A(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function j(e,t,o,r,i,a,s){try{var l=e[a](s),n=l.value}catch(e){o(e);return}l.done?t(n):Promise.resolve(n).then(r,i)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,i,a,s,l=[],n=!0,c=!1;try{if(a=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;n=!1}else for(;!(n=(r=a.call(o)).done)&&(l.push(r.value),l.length!==t);n=!0);}catch(e){c=!0,i=e}finally{try{if(!n&&null!=o.return&&(s=o.return(),Object(s)!==s))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return z(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}var w=function(){var e,t,o=(0,l.ZP)(),h={warnings:{title:o._('If you believe your Pin was muted in error, you can submit an appeal.\n               Be sure to provide your complete contact information below.\n               Failure to do so may affect the processing of your appeal.', 'MusicAppealForm.FormTitleWarning', 'Form Request Warning'),request:o._('Please clarify why you believe your Pin was muted in error.', 'MusicAppealForm.FormRequestWarning', 'Form Request Warning'),acknowledge:o._('By checking the following boxes, I confirm:', 'MusicAppealForm.LabelForCheckboxes', 'Label describing the checkboxes')},successModal:o._('Thank you. We\'ve received your request and your confirmation number is', 'MusicAppealForm.SuccessMessage', 'Success message shown to the user'),validationMessages:{required:o._('Required', 'MusicAppealForm.ValidationRequired', 'The error message for a required field is emtpy/missing'),boolean:o._('Field must be checked', 'MusicAppealForm.ValidationBooleanRequired', 'The error message when a required field is unchecked/missing'),maxLength:o._('Please enter no more than 255 characters', 'MusicAppealForm.ValidationMaxLength255Characters', 'The error message when an input field max length 255 characters is surpassed'),namesNotMatching:o._('Names don\'t match!', 'MusicAppealForm.ValidationNamesNotMatching', 'The error message when Full Legal Name & Signed Name dont match'),email:o._('Must be a valid email', 'MusicAppealForm.ValidationValidEmail', 'The error message when is not a valid email'),booleanMutedReason:o._('One of these 2 options must be checked', 'MusicAppealForm.ValidationMutedReason', 'The error message when "I have authorization to use this music" or "other" fields are unchecked/missing')}},b={form_title:o._('Music Appeal Form', 'MusicAppealForm.FormTitle', 'Form title'),contact_information:o._('Contact Information', 'MusicAppealForm.OwnerInformationHeading', 'Heading with the words Contact Information'),address:o._('Address', 'MusicAppealForm.AddressHeading', 'Heading with the word Address'),request:o._('Request', 'MusicAppealForm.RequestHeader', 'Header with the word Request'),acknowledge:o._('Acknowledge', 'MusicAppealForm.AcknowledgeLabel', 'Header with the word Acknowledge')},A={name:o._('Full Legal Name', 'MusicAppealForm.NameField', 'User\'s name'),company:o._('Company', 'MusicAppealForm.CompanyField', 'User\'s company name'),email:o._('Email', 'MusicAppealForm.EmailField', 'User\'s email address'),phone:o._('Phone', 'MusicAppealForm.PhoneField', 'Users phone number'),address:o._('Street Address', 'MusicAppealForm.AddressField', 'User address'),city:o._('City', 'MusicAppealForm.CityField', 'The users city'),state:o._('State', 'MusicAppealForm.StateField', 'The users state'),zip:o._('Zip/Postal code', 'MusicAppealForm.ZipCodeField', 'The users zip code'),is_authorized_to_use_music:o._('I have authorization to use this music', 'MusicAppealForm.IHaveAuthorizationToUseMusicField', 'Checkbox to confirm if the user is authorized to use the music'),attachment:o._('Please upload proof that demonstrates that you have authorization to use this music on your Pin.\n       This can include documentation such as proof of a license agreement or any relevant authorization\n       you have received to use the music.', 'MusicAppealForm.AttachmentProofText', 'Attachment label to explain the user what is required to be uploaded'),other_reason:o._('Other', 'MusicAppealForm.OtherField', 'Checkbox to select other Other reason'),other_reason_additional_context:o._('Please provide additional information that clarifies the reason for your\n       belief the action taken on your Pin was in error. This can include details\n       about the justification for using the music on your Pin', 'MusicAppealForm.OtherReasonAdditionalContext', 'TextArea Field to allow user to explain why they think their music should be un muted'),other_reason_additional_context_placeholder:o._('Provide additional details here', 'MusicAppealForm.OtherReasonAdditionalContextPlaceholder', 'TextArea Field placeholder'),muted_object_id:o._('ID number of the Pin that was muted', 'MusicAppealForm.MutedObjectId', 'Input containing the ID of the Pin that was muted'),signed_name:o._('Signed Name', 'MusicAppealForm.SignedNameField', 'Confirm your name to submit form'),isGoodFaith:o._('I state, under penalty of perjury, that I have a good faith belief that the material in question was removed in error.', 'MusicAppealForm.IsGoodFaithBoolean', 'Boolean for good faith confirmation about information provided in form'),processServed:o._('I consent to the jurisdiction of the Federal District Court for the judicial district in which my address is located, or if my address is outside the United States, for any judicial district in which Pinterest may be found.', 'MusicAppealForm.ConsentBoolean', 'Checkbox to confirm they consent to our terms'),accept_jurisdiction:o._('I accept the legal jurisdiction of my location.', 'MusicAppealForm.JurisdictionBoolean', 'Checkbox to confirm they accept the process'),submit_form:o._('Submit Music Appeal', 'MusicAppealForm.SubmitButton', 'Form submit button')},g=(0,r.useRef)(null),z=P((0,r.useState)(!1),2),w=z[0],F=z[1],O=P((0,r.useState)(null),2),S=O[0],M=O[1],E=P((0,r.useState)(!1),2),k=E[0],Z=E[1],T=P((0,r.useState)(!1),2),C=T[0],R=T[1],q=P((0,r.useState)(""),2),D=q[0],I=q[1],L=P((0,r.useState)(""),2),B=L[0],N=L[1],H=P((0,r.useState)([]),2),U=H[0],Y=H[1],W=P((0,r.useState)(null),2),V=W[0],X=W[1],G=P((0,i.lr)(),1)[0].get("pinID");(0,r.useEffect)(function(){return X(G)},[G]);var J=(e=regeneratorRuntime.mark(function e(t){var o,r,i,a,l,n,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(o=g.current)){e.next=3;break}return e.abrupt("return");case 3:return F(!0),t.preventDefault(),i=v(v({},r=Object.fromEntries(new FormData(o).entries())),{is_good_faith:!!r.is_good_faith,accept_processes_served:!!r.accept_processes_served,accept_jurisdiction:!!r.accept_jurisdiction,other_reason:C,is_authorized_to_use_music:k,attachment:!!S}),e.prev=7,e.next=10,y(h.validationMessages).validate(i,{abortEarly:!1});case 10:Y([]),e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(7),F(!1),Y(null===e.t0||void 0===e.t0?void 0:null===(a=e.t0.inner)||void 0===a?void 0:a.map(function(e){return{field:e.path,message:e.message}})),e.abrupt("return");case 18:if(e.prev=18,l={},!(k&&S)){e.next=25;break}return e.next=23,(0,_.Z)(S);case 23:e.t1=e.sent,l={attachment:e.t1};case 25:return n={owner:{city:i.city,company:i.company,email:i.email,name:i.name,phone:i.phone,state:i.state,street_address:i.street_address,zipcode:i.zipcode,country:i.country},appeal_reason:{is_authorized_to_use_music:k,other_reason_additional_context:i.other_reason_additional_context,other_reason:C},accept_jurisdiction:i.accept_jurisdiction,accept_processes_served:i.accept_processes_served,is_good_faith:i.is_good_faith,muted_object_id:i.muted_object_id,signed_name:i.signed_name},e.next=28,(0,s.Z)({url:"/v3/legal/takedowns/music_appeal/",method:"POST",data:v({data:JSON.stringify(n)},l)});case 28:c=e.sent.resource_response,I("".concat(h.successModal," ").concat(c.data)),e.next=36;break;case 33:e.prev=33,e.t2=e.catch(18),N((null===e.t2||void 0===e.t2?void 0:e.t2.message_detail)||(null===e.t2||void 0===e.t2?void 0:e.t2.message)||"");case 36:return e.prev=36,F(!1),e.finish(36);case 39:case"end":return e.stop()}},e,null,[[7,13],[18,33,36,39]])}),t=function(){var t=this,o=arguments;return new Promise(function(r,i){var a=e.apply(t,o);function s(e){j(a,r,i,s,l,"next",e)}function l(e){j(a,r,i,s,l,"throw",e)}s(void 0)})},function(e){return t.apply(this,arguments)});return(0,m.jsx)(a.xu,{column:12,display:"flex",justifyContent:"center",marginBottom:8,paddingX:10,children:(0,m.jsxs)(a.xu,{color:"default",column:12,lgColumn:8,smColumn:10,children:[(0,m.jsxs)(a.xu,{color:"default",padding:2,paddingY:4,children:[(0,m.jsx)(a.xu,{"data-test-id":"music-appeal-header",children:(0,m.jsx)(a.X6,{accessibilityLevel:1,color:"default",size:"600",children:b.form_title})}),(0,m.jsx)(a.iz,{}),(0,m.jsx)(a.xu,{paddingY:1,children:(0,m.jsx)(a.xv,{color:"error",size:"200",children:h.warnings.title})})]}),(0,m.jsx)(a.xu,{color:"default",padding:2,paddingY:4,children:(0,m.jsxs)("form",{ref:g,id:"music-appeal-form",onSubmit:J,children:[(0,m.jsxs)(a.kC,{alignItems:"stretch",justifyContent:"start",wrap:!0,children:[(0,m.jsxs)(a.xu,{column:12,paddingY:3,children:[(0,m.jsx)(a.X6,{accessibilityLevel:2,color:"subtle",size:"400",children:b.contact_information}),(0,m.jsx)(a.iz,{})]}),(0,m.jsx)(u.Z,{col:5,label:A.name,name:"name",validationErrors:U}),(0,m.jsx)(u.Z,{col:5,label:A.company,name:"company",validationErrors:U}),(0,m.jsx)(u.Z,{label:A.email,name:"email",validationErrors:U}),(0,m.jsx)(u.Z,{label:A.phone,name:"phone",validationErrors:U}),(0,m.jsxs)(a.xu,{column:12,paddingY:3,children:[(0,m.jsx)(a.X6,{accessibilityLevel:2,color:"subtle",size:"400",children:b.address}),(0,m.jsx)(a.iz,{})]}),(0,m.jsx)(u.Z,{col:12,label:A.address,name:"street_address",validationErrors:U}),(0,m.jsx)(u.Z,{label:A.city,name:"city",validationErrors:U}),(0,m.jsx)(u.Z,{label:A.state,name:"state",validationErrors:U}),(0,m.jsx)(u.Z,{label:A.zip,name:"zipcode",validationErrors:U}),(0,m.jsx)(n.Z,{}),(0,m.jsxs)(a.xu,{column:12,paddingY:3,children:[(0,m.jsx)(a.X6,{accessibilityLevel:2,color:"subtle",size:"400",children:b.request}),(0,m.jsx)(a.iz,{}),(0,m.jsx)(a.xu,{paddingY:1,children:(0,m.jsx)(a.xv,{color:"error",size:"200",children:h.warnings.request})})]}),(0,m.jsxs)(a.xu,{column:12,children:[(0,m.jsx)(c.Z,{label:A.is_authorized_to_use_music,name:"is_authorized_to_use_music",onClick:function(e){var t=e.checked;Z(t),t&&R(!1)},validationErrors:U,value:k}),k&&(0,m.jsxs)(a.xu,{column:12,marginTop:4,children:[(0,m.jsx)(a.xu,{column:12,padding:2,children:(0,m.jsx)(a.xv,{size:"200",weight:"bold",children:A.attachment})}),(0,m.jsx)(a.xu,{marginBottom:4,children:(0,m.jsx)(x.Z,{acceptedFileTypes:"application/pdf,image/jpeg,image/jpg,image/png",attachment:S,isSubmitting:w,law:"",name:"attachment",onFileRemoved:function(){return M(null)},onFileSelected:function(e){return M(Array.isArray(e)&&e.length>0&&e[0]||null)},validationErrors:U})})]})]}),(0,m.jsxs)(a.xu,{column:12,children:[(0,m.jsx)(c.Z,{label:A.other_reason,name:"other_reason",onClick:function(e){var t=e.checked;R(t),t&&Z(!1)},validationErrors:U,value:C}),C&&(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(a.xu,{column:12,marginTop:4,padding:2,children:(0,m.jsx)(a.xv,{size:"200",weight:"bold",children:A.other_reason_additional_context})}),(0,m.jsx)(d.Z,{col:12,name:"other_reason_additional_context",placeholder:A.other_reason_additional_context_placeholder,validationErrors:U})]})]}),(0,m.jsx)(a.xu,{column:12,children:(0,m.jsx)(u.Z,{col:12,label:A.muted_object_id,name:"muted_object_id",overrideValue:V||"",validationErrors:U})}),(0,m.jsx)(a.xu,{column:12,children:(0,m.jsx)(u.Z,{col:12,label:A.signed_name,name:"signed_name",validationErrors:U})}),(0,m.jsxs)(a.xu,{column:12,paddingY:3,children:[(0,m.jsx)(a.X6,{accessibilityLevel:2,color:"subtle",size:"400",children:b.acknowledge}),(0,m.jsx)(a.iz,{}),(0,m.jsx)(a.xu,{paddingY:1,children:(0,m.jsx)(a.xv,{color:"error",size:"200",children:h.warnings.acknowledge})})]}),(0,m.jsx)(c.Z,{label:A.isGoodFaith,name:"is_good_faith",validationErrors:U}),(0,m.jsx)(c.Z,{label:A.processServed,name:"accept_processes_served",validationErrors:U}),(0,m.jsx)(c.Z,{label:A.accept_jurisdiction,name:"accept_jurisdiction",validationErrors:U})]}),(0,m.jsx)(a.iz,{}),(0,m.jsx)(a.xu,{marginBottom:10,padding:2,children:(0,m.jsx)(a.zx,{color:"red",disabled:w,fullWidth:!0,text:A.submit_form,type:"submit"})})]})}),B&&(0,m.jsx)(p,{errorMessage:B,setErrorModal:N}),D&&(0,m.jsx)(f,{message:D,setModal:I})]})})}}},function(e){e.O(0,[97270,84404,61013,28038,24797,55169,88166,44801,70808,60270,88306,24851,24418,25714],function(){return e(e.s=927361)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/about/copyright/music-appeal-b3b3bb8be9d6e7eb.js.map