"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[18787],{214274:function(e,t){t.Z='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,"ＭＳ Ｐゴシック",Arial,sans-serif'},509550:function(e,t){t.Z=function(e,t){var n=new Date(e);return n.setDate(e.getDate()+t),n}},135839:function(e,t,n){n.d(t,{Z:function(){return o},k:function(){return r}});var r={LONG:"long",YEAR:"year",WEEKDAY_DATE:"weekday_date",WEEKDAY_DATE_TIME_TIMEZONE:"weekday_date_time_timezone",SHORT_WEEKDAY_DATE:"short_weekday_date",LONG_MONTH_YEAR:"long_month_year",NUMERIC:"numeric",MONTH_DAY:"month_day",SHORT_MONTH:"short_month",SHORT_MONTH_DAY:"short_month_day",DAY:"day",YEAR_SHORT_MONTH_DAY:"year_short_month_day",YEAR_SHORT_MONTH_DAY_HOUR:"year_short_month_day_hour",TIME:"time",TIME_TIMEZONE:"time_timezone",HOUR:"hour",TWO_DIGIT:"two_digit",TWO_DIGIT_YEAR:"two_digit_year"},i=function(e){switch(e){case r.YEAR:return{year:"numeric"};case r.LONG:return{year:"numeric",month:"long",day:"numeric"};case r.NUMERIC:return{year:"numeric",month:"numeric",day:"numeric"};case r.TWO_DIGIT:return{year:"numeric",month:"2-digit",day:"2-digit"};case r.TWO_DIGIT_YEAR:return{year:"2-digit",month:"2-digit",day:"2-digit"};case r.WEEKDAY_DATE:return{weekday:"long",month:"long",day:"numeric",year:"numeric"};case r.SHORT_WEEKDAY_DATE:return{weekday:"short",month:"numeric",day:"numeric"};case r.WEEKDAY_DATE_TIME_TIMEZONE:return{weekday:"short",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"};case r.MONTH_DAY:return{month:"long",day:"numeric"};case r.SHORT_MONTH:return{month:"short"};case r.SHORT_MONTH_DAY:return{month:"short",day:"numeric"};case r.DAY:return{day:"numeric"};case r.LONG_MONTH_YEAR:return{month:"long",year:"numeric"};case r.YEAR_SHORT_MONTH_DAY:return{year:"numeric",month:"short",day:"numeric"};case r.YEAR_SHORT_MONTH_DAY_HOUR:return{month:"short",year:"numeric",day:"numeric",hour:"numeric"};case r.TIME:return{hour:"numeric",minute:"2-digit"};case r.TIME_TIMEZONE:return{hour:"numeric",minute:"2-digit",timeZoneName:"short"};case r.HOUR:return{hour:"numeric"};default:throw Error('invalid dateFormatType "'+e+'"')}};function o(e,t,n){var r=!(arguments.length>3)||void 0===arguments[3]||arguments[3],o=i(n);return r&&(o.timeZone="UTC"),new Intl.DateTimeFormat(e,o).format(t)}},72461:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(140017),i=n(427514);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l=function(e,t){var n=t||0,r=Math.pow(10,n),i=+(n?e*r:e).toFixed(8),o=Math.floor(i),a=i-o,u=a>.49999999&&a<.50000001?o%2==0?o:o+1:Math.round(i);return n?u/r:u},s=function(e){var t=e.maximumFractionDigits,n=e.minimumFractionDigits,r=e.style,i=e.currency,o={maximumFractionDigits:t,minimumFractionDigits:n};return r?u(u({},o),{},{style:r},"currency"===r?{currency:i,currencyDisplay:"symbol"}:{}):o},c=function(e){try{0..toLocaleString([e])}catch(e){return!1}return!0},m=function(e,t){if(t){var n=new Intl.NumberFormat(e,{style:"currency",currency:t}).resolvedOptions(),r=n.minimumFractionDigits,i=n.maximumFractionDigits;if(void 0!==r&&void 0!==i)return{minimumFractionDigits:r,maximumFractionDigits:i}}return{minimumFractionDigits:2,maximumFractionDigits:2}};function d(){var e=(0,r.ZP)();return function(t,n,r){var o=0,a=0,u=r&&r.style||void 0,d=r&&r.shortform||!1,f=r&&r.uplimit||void 0,y=r&&r.currency||void 0,h=!!f&&n>=f,p=f&&h?f:n;if("currency"===u){var b=m(t,y),v=b.minimumFractionDigits,g=b.maximumFractionDigits;o=void 0===r||void 0===r.maximum_fraction_digits?g:r.maximum_fraction_digits,a=void 0===r||void 0===r.minimum_fraction_digits?v:r.minimum_fraction_digits}else o=void 0===r||void 0===r.maximum_fraction_digits?0:r.maximum_fraction_digits,a=void 0===r||void 0===r.minimum_fraction_digits?0:r.minimum_fraction_digits;if(d&&p>999&&(o=void 0===r||void 0===r.shortform_maximum_fraction_digits?2:r.shortform_maximum_fraction_digits,a=0),o<a)return String(p);var _=p,x="",A=[{"100M":{value:1e8,localeKey:e._('億', 'Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.', 'Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.')}},{"10k":{value:1e4,localeKey:e._('万', 'Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.', 'Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.')}}],O=[{b:{value:1e9,localeKey:e._('B', 'Abbreviation for one billion.', 'Abbreviation for one billion.')}},{m:{value:1e6,localeKey:e._('M', 'Abbreviation for one million.', 'Abbreviation for one million.')}},{k:{value:1e3,localeKey:e._('k', 'Abbreviation for one thousand.', 'Abbreviation for one thousand.')}}],j=/^zh|ja|ko/.test(t);if(d&&p>999)for(var D=j?A:O,w=0;w<D.length;w+=1){var S=Object.keys(D[w])[0],T=D[w][S].value;if(p>=T){_=l(p/T*Math.pow(10,o))/Math.pow(10,o),x=D[w][S].localeKey;break}}if(null==_)return"";var k=_.toLocaleString([c(t)&&"ar-SA"!==t?t:"en-US"],s({maximumFractionDigits:o,minimumFractionDigits:a,currency:y,style:u}));return x&&x.length>0?(0,i.Z)(e._('{{formattedNumber}}{{numberSuffix}}', 'i18n.usePrettyNumberFormat.prettyNumberFormat', 'String used to concatenate formatted number and localized number suffix'),{formattedNumber:k,numberSuffix:x})+(h?"+":""):k+(h?"+":"")}}},195600:function(e,t,n){var r=n(684404),i=n(140017),o=n(819267);t.Z=function(e){var t=e.height,n=e.border,a=(0,i.ZP)();return(0,o.jsx)(r.xu,{alignItems:"center",borderStyle:n?"sm":"none",display:"flex",height:t,justifyContent:"center",children:(0,o.jsx)(r.$j,{accessibilityLabel:a._('Graph is loading', 'timeSeriesGraph.loadingState.loadingAccessibilityLabel', 'Accessibility label for loading icon on time series graph'),show:!0})})}},359570:function(e,t,n){var r=n(684404),i=n(844916),o=n(819267);t.Z=function(){return(0,o.jsx)(r.xu,{height:"0",width:"0",children:(0,o.jsx)("svg",{height:"10",version:"1.1",width:"10",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("defs",{children:(0,o.jsxs)("pattern",{height:"10",id:"missing-data-pattern",patternUnits:"userSpaceOnUse",width:"10",children:[(0,o.jsx)("rect",{fill:i.u1.white,height:"10",width:"10"}),(0,o.jsx)("path",{d:"M11,1 l-2,-2 M10,10 l-10,-10 M1,11 l-2,-2",stroke:i.u1.lightGray,strokeWidth:"2"})]})})})})}},921789:function(e,t,n){n.d(t,{Z:function(){return F}});var r=n(195600),i=n(477868),o=n(672652),a=n(16628),u=n(29805),l=n(702808),s=n(60387),c=n(92699),m=n(795837),d=n(403226),f=n(478082),y=n(341523),h=n(790738),p=n(684404),b=n(72461),v=n(819267),g=function(e){var t=e.start,n=e.end,r=e.fill,i=e.scale,o=e.domain;if(!i||!o)return null;var a=i.x(t),u=Math.max(0,(n?i.x(n):i.x(o.x[1]))-a),l=i.y(o.y[1]),s=Math.max(0,i.y(o.y[0])-l);return(0,v.jsx)("rect",{fill:r,fillOpacity:.5,height:s,width:u,x:a,y:l})},_=n(314886),x=n(893208),A=n(844916),O=n(5859),j=n(983983);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==D(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===D(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function T(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var M=function(e){var t,n=e.setActiveData,r=e.x,i=e.datum,a=e.scale;(0,o.useEffect)(function(){return"number"==typeof(null==i?void 0:i.index)&&"number"==typeof r&&n({xPosition:r,index:i.index}),function(){n(null)}},[]);var u=null==a?void 0:null===(t=a.y)||void 0===t?void 0:t.range();return(0,v.jsx)("line",{style:{strokeWidth:1,stroke:A.qA.darkGray},x1:r,x2:r,y1:u?Math.max.apply(Math,T(u)):0,y2:u?Math.min.apply(Math,T(u)):0})},P=function(e){return"number"==typeof e.value&&e.status.key===A.bd.ESTIMATE},Z=function(e){return"number"==typeof e.value&&e.status.key===A.bd.READY},I=function(e,t){return e[t]&&P(e[t])},C=function(e,t,n){if("number"!=typeof e.value)return!1;var r=P(e),i=Z(e),o=i&&I(n,t+1),a=i&&I(n,t-1);return r||o||a},N=function(e){var t,n,r,i=(0,b.Z)(),D=e.width,w=e.height,T=e.primaryYAxis,E=e.secondaryYAxis,I=e.xAxis,N=e.shadedRegions,F=e.getTooltipContent,L=e.tooltipZIndex,Y=e.accessibilityLabel,H=e.accessibilityDescription,R=e.useDomain,z=(0,O.B)(),U=z.locale,G=z.userAgent,W=(0,o.useRef)(null),K=function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(null))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,u=[],l=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){s=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return u}}(t,2)||k(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),q=K[0],V=K[1],B=W&&W.current?W.current.offsetTop:0,J=W&&W.current?W.current.offsetLeft:0,X=q&&T.lines.length>0&&q.index<T.lines[0].data.length/2?J+10+((null==q?void 0:q.xPosition)||0):J+((null==q?void 0:q.xPosition)||0)-10-280,$=T.lines.length>0&&T.lines[0].data.length>0,Q=$?new Date(T.lines[0].data[0].date):null,ee=$?new Date(T.lines[0].data[T.lines[0].data.length-1].date):null;ee&&(ee.setUTCHours(23),ee.setUTCMinutes(59));var et=function(e){return e.maxValue?e.maxValue:e.lines?(0,x.io)((0,x.MN)(e.lines),5,e.units):4},en=et(T),er=E?et(E):0,ei=Math.max(en,er),eo=!!T&&!!E&&T.units===E.units,ea=T&&E&&eo&&Math.abs(en-er)/((en+er)/2)<=1.25,eu=ea?ei:en,el=ea?ei:er,es=E?S(S({},T),{},{lines:(0,x.GW)(T.lines,eu)}):void 0,ec=E?S(S({},E),{},{lines:(0,x.GW)(E.lines,el)}):void 0,em=es&&ec?[es,ec]:[T],ed=(0,v.jsx)(a.Z,{crossAxis:null===(n=T.crossAxis)||void 0===n||n,dependentAxis:!0,domain:void 0!==R&&R&&!E?[0,en]:void 0,scale:"linear",style:T.style,tickFormat:function(e){return T.valueFormatter(E?e*eu:e,U,i)},tickLabelComponent:T.style?void 0:(0,v.jsx)(u.Z,{dx:14,dy:10,textAnchor:"start"}),tickValues:T.ticks}),ef=E?(0,v.jsx)(a.Z,{crossAxis:null===(r=E.crossAxis)||void 0===r||r,dependentAxis:!0,offsetX:D,scale:"linear",style:E.style,tickFormat:function(e){return E.valueFormatter(e*el,U,i)},tickLabelComponent:(0,v.jsx)(u.Z,{dx:-40,textAnchor:"start"}),tickValues:E.ticks}):null,ey=E?(0,v.jsx)(p.xu,{marginTop:2,children:(0,v.jsxs)(p.kC,{alignItems:"center",justifyContent:"between",children:[(0,v.jsxs)(p.kC,{alignItems:"center",gap:1,justifyContent:"start",children:[(0,v.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:A.qA[em[0].lines[0].color]}},height:12,rounding:1,width:12}),(0,v.jsx)(p.xu,{"data-test-id":"primary-dual-axis-label",children:(0,v.jsx)(p.xv,{size:"200",children:T.lines[0].label})})]}),(0,v.jsxs)(p.kC,{alignItems:"center",gap:1,justifyContent:"start",children:[(0,v.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:A.qA[em[1].lines[0].color]}},height:12,rounding:1,width:12}),(0,v.jsx)(p.xu,{"data-test-id":"secondary-dual-axis-label",children:(0,v.jsx)(p.xv,{size:"200",children:E.lines[0].label})})]})]})}):null,eh=em.map(function(e){return 0===e.lines[0].data.filter(P).length?null:e.lines.map(function(e){return e.data?(0,v.jsx)(l.Z,{data:e.data.filter(P),size:6,style:{data:{fill:A.qA[e.color]}},x:"date",y:"value"},"estimated-".concat(e.key)):null})}),ep=eh.every(function(e){return null===e})?null:em.map(function(e,t){return e.lines.map(function(e,n){if(!e.data)return e.data;var r=e.data.map(function(e,t,n){return C(e,t,n)?e:S(S({},e),{},{value:null})});return(0,v.jsx)(m.Z,{data:r,dataComponent:(0,v.jsx)(d.Z,{className:"time-series-graph-line"}),name:"estimated-".concat(t,"-").concat(n),style:{data:{stroke:A.qA[e.color],strokeWidth:3,strokeOpacity:.4,strokeDasharray:"3 6",strokeLinecap:"round"}},x:"date",y:"value"},e.key)})});return(0,v.jsxs)(p.xu,{ref:W,"data-test-id":"time-series-graph",children:[F&&q?(0,v.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{top:G.isMobile?"50%":B+50,left:G.isMobile?"25%":X,pointerEvents:"none",boxShadow:"rgba(0, 0, 0, .25) 0 1px 5px 0"}},position:"absolute",rounding:2,width:280,zIndex:null!=L?L:new p.Ry(j.fe-1),children:F(q.index)}):null,(0,v.jsxs)(f.Z,{containerComponent:F?(0,v.jsx)(y.Z,{desc:H,labelComponent:(0,v.jsx)(M,{setActiveData:V}),labels:function(){return"placeholder"},responsive:!1,title:Y,voronoiDimension:"x"}):(0,v.jsx)(h.Z,{desc:H,responsive:!1,title:Y}),domain:E?{y:[0,1]}:void 0,height:w,maxDomain:!E&&T.maxValue?{y:T.maxValue}:void 0,minDomain:E?void 0:{y:0},padding:T.style?{left:55,right:E?55:12,top:E?0:12,bottom:25}:void 0,theme:_.Z,width:D,children:[(0,v.jsx)(a.Z,{fixLabelOverlap:!0,scale:"time",style:I.style,tickCount:I.maxTickCount,tickFormat:function(e){return Q&&e<Q||ee&&e>ee?"":I.dateFormatter(e,U)},tickValues:I.ticks}),T?ed:null,E?ef:null,(void 0===N?[]:N).map(function(e,t){return(0,v.jsx)(g,{end:e.end,fill:e.fill,start:e.start},t)}),em.map(function(e,t){return e.lines.map(function(e){var n=e.data.map(function(e,t){return S(S({},e),{},{index:t})});return(0,v.jsx)(l.Z,{data:n,dataComponent:(0,v.jsx)(s.Z,{children:(0,v.jsx)(c.Z,{})}),name:"points-".concat(t),size:function(t){return t.active||(0,x.XA)(e.data)?6:0},style:{data:{fill:A.qA[e.color]}},x:"date",y:"value"},e.key)})}),eh,em.map(function(e,t){return e.lines.map(function(e,n){if(!e.data)return e.data;var r=e.data.map(function(e){return Z(e)?e:S(S({},e),{},{value:null})});return(0,v.jsx)(m.Z,{data:r,dataComponent:(0,v.jsx)(d.Z,{className:"time-series-graph-line"}),name:"line-".concat(t,"-").concat(n),style:{data:{stroke:A.qA[e.color],strokeWidth:3,strokeLinecap:"round"}},x:"date",y:"value"},e.key)})}),ep]}),E?ey:null]})},F=function(e){var t=e.height,n=e.primaryYAxis,o=e.secondaryYAxis,a=e.xAxis,u=e.isLoading,l=e.shadedRegions,s=e.getTooltipContent,c=e.tooltipZIndex,m=e.accessibilityLabel,d=e.accessibilityDescription,f=e.border,y=void 0===f||f,h=e.useDomain;return(0,v.jsx)(i.Z,{children:function(e){return e&&!u&&n?(0,v.jsx)(N,{accessibilityDescription:d,accessibilityLabel:m,getTooltipContent:s,height:t,primaryYAxis:n,secondaryYAxis:o,shadedRegions:l,tooltipZIndex:c,useDomain:h,width:e,xAxis:a}):(0,v.jsx)(r.Z,{border:y,height:t})}})}},314886:function(e,t,n){var r=n(214274),i={lightGray:"#EFEFEF",darkGray:"#333",midnight:"#133A5E"},o={stroke:"transparent",fill:i.darkGray,fontFamily:r.Z,fontSize:12,padding:8},a={axis:{style:{axis:{fill:"transparent",strokeWidth:1,strokeLinecap:"round"},axisLabel:o,tickLabels:o}},chart:{padding:{top:0,left:1,bottom:28,right:0},domainPadding:{x:50,y:[0,30]}},dependentAxis:{style:{grid:{fill:"none",stroke:i.lightGray,strokeWidth:1},tickLabels:o}},independentAxis:{style:{grid:{fill:"none",stroke:"none"},tickLabels:o}},line:{style:{data:{fill:"transparent",stroke:i.midnight,strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}}}};t.Z=a},893208:function(e,t,n){n.d(t,{GW:function(){return f},L0:function(){return s},MN:function(){return c},Pq:function(){return l},TI:function(){return d},XA:function(){return m},io:function(){return p},qH:function(){return h}});var r=n(509550),i=n(844916);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l=function(e){var t=e.date,n=e.locale,r=e.hourFormatter,i=e.dayFormatter,o=e.hourlyMetricTimestamps,a=new Date(t),u=new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours()));return o.has(u.getTime())?r(a,n):i(a,n)},s=function(e){var t=e.date,n=e.locale;return(0,e.graphDateFormatter)(new Date(t),n)},c=function(e){return e.reduce(function(e,t){return Math.max(t.data.reduce(function(e,t){return"number"==typeof t.value&&t.value>=e?t.value:e},0),e)},0)},m=function(e){return 1===e.filter(function(e){return"number"==typeof e.value}).length},d=function(e,t){for(var n=e?e.getTime():t-864e5,r=Math.floor((t-n)/144e5),i=[],o=0;o<=r;o+=1){var a=t-144e5*o;i.unshift(new Date(a))}return i},f=function(e,t){return e.map(function(e){return u(u({},e),{},{data:e.data.map(function(e){if("number"!=typeof e.value)return u(u({},e),{},{value:null});var n=e.value/t;return u(u({},e),{},{value:n})})})})},y=function(e,t){for(var n=new Date(e),i=[];n<=t;)i.push(n),n=(0,r.Z)(n,1);return i},h=function(e,t,n){var r=y(e,t).map(function(e){return{date:e,value:null,status:{key:i.bd.READY,message:null}}});return[{key:n._('empty graph', '[m10n] performanceSummaryModule.emptyGraphState.lineKey', 'key for empty graph state on time series graph for campaign insights'),label:n._('label for empty graph', '[m10n] performanceSummaryModule.emptyGraphState.lineLabel', 'label for empty graph state on time series graph for campaign insights'),data:r,color:"gray",total:null}]},p=function(e,t,n){var r="percent"===n,i=r?100:1,o=t-1,a=(e+.05*e)*i/o,u=Math.pow(10,Math.max(Math.floor(Math.log(Math.abs(a))*Math.LOG10E),0)),l=Math.ceil(a/u*o)/o*u;return r||(l=Math.ceil(l)),l*o/i}},598228:function(e,t,n){n.d(t,{Ag:function(){return o},C0:function(){return l},L1:function(){return d},Vi:function(){return a},YD:function(){return m},kS:function(){return i},oo:function(){return u},p3:function(){return f},vC:function(){return s},vI:function(){return c}});var r=n(244413),i="https://www.pinterest.com/business/hub/",o="https://www.pinterest.com/homefeed/",a="www.pinterest.com",u="https://help.pinterest.com",l="".concat((0,r.Z)({site:"www"})),s=(0,r.Z)({site:"developers"}),c="".concat((0,r.Z)({site:"sterling"})),m="".concat((0,r.Z)({site:"analytics"})),d="".concat((0,r.Z)({site:"trends"})),f="".concat((0,r.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="}))},983983:function(e,t,n){n.d(t,{L1:function(){return o},Rz:function(){return l},WZ:function(){return a},cI:function(){return i},fe:function(){return u},hu:function(){return r}});var r=64,i=80,o=22,a="HeaderContent",u=671,l={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/18787-2a056914d3c0b4e7.js.map