(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{888:function(e,a,s){"use strict";var r=s(9047);function t(){}function i(){}i.resetWarningCache=t,e.exports=function(){function e(e,a,s,t,i,n){if(n!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:t};return s.PropTypes=s,s}},2007:function(e,a,s){e.exports=s(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},473:function(e,a,s){"use strict";var r=s(1413),t=s(5987),i=s(2007),n=s.n(i),o=s(2791),l=s(1694),c=s.n(l),d=s(184),f=["className","variant"],u={"aria-label":n().string,onClick:n().func,variant:n().oneOf(["white"])},m=o.forwardRef((function(e,a){var s=e.className,i=e.variant,n=(0,t.Z)(e,f);return(0,d.jsx)("button",(0,r.Z)({ref:a,type:"button",className:c()("btn-close",i&&"btn-close-".concat(i),s)},n))}));m.displayName="CloseButton",m.propTypes=u,m.defaultProps={"aria-label":"Close"},a.Z=m},2709:function(e,a,s){"use strict";var r,t=s(1413),i=s(5987),n=s(4942),o=s(1694),l=s.n(o),c=s(2791),d=s(5090),f=s(1380),u=s(7202),m=s(4083),v=s(184),p=["className","children","transitionClasses"],b=(r={},(0,n.Z)(r,d.d0,"show"),(0,n.Z)(r,d.cn,"show"),r),Z=c.forwardRef((function(e,a){var s=e.className,r=e.children,n=e.transitionClasses,o=void 0===n?{}:n,d=(0,i.Z)(e,p),Z=(0,c.useCallback)((function(e,a){(0,u.Z)(e),null==d.onEnter||d.onEnter(e,a)}),[d]);return(0,v.jsx)(m.Z,(0,t.Z)((0,t.Z)({ref:a,addEndListener:f.Z},d),{},{onEnter:Z,childRef:r.ref,children:function(e,a){return c.cloneElement(r,(0,t.Z)((0,t.Z)({},a),{},{className:l()("fade",s,r.props.className,b[e],o[e])}))}}))}));Z.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Z.displayName="Fade",a.Z=Z},3053:function(e,a,s){"use strict";var r=s(1413),t=s(5987),i=s(1694),n=s.n(i),o=s(2791),l=s(323),c=s(162),d=s(184),f=["bsPrefix","className","children","controlId","label"],u=o.forwardRef((function(e,a){var s=e.bsPrefix,i=e.className,o=e.children,u=e.controlId,m=e.label,v=(0,t.Z)(e,f);return s=(0,c.vE)(s,"form-floating"),(0,d.jsxs)(l.Z,(0,r.Z)((0,r.Z)({ref:a,className:n()(i,s),controlId:u},v),{},{children:[o,(0,d.jsx)("label",{htmlFor:u,children:m})]}))}));u.displayName="FloatingLabel",a.Z=u},7121:function(e,a,s){"use strict";s.d(a,{Z:function(){return se}});var r=s(1413),t=s(5987),i=s(1694),n=s.n(i),o=s(2007),l=s.n(o),c=s(2791),d=s(184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},m=c.forwardRef((function(e,a){var s=e.as,i=void 0===s?"div":s,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,m=void 0!==u&&u,v=(0,t.Z)(e,f);return(0,d.jsx)(i,(0,r.Z)((0,r.Z)({},v),{},{ref:a,className:n()(o,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=u;var v=m,p=s(4934),b=s(162),Z=["id","bsPrefix","className","type","isValid","isInvalid","as"],x=c.forwardRef((function(e,a){var s=e.id,i=e.bsPrefix,o=e.className,l=e.type,f=void 0===l?"checkbox":l,u=e.isValid,m=void 0!==u&&u,v=e.isInvalid,x=void 0!==v&&v,h=e.as,y=void 0===h?"input":h,N=(0,t.Z)(e,Z),w=(0,c.useContext)(p.Z).controlId;return i=(0,b.vE)(i,"form-check-input"),(0,d.jsx)(y,(0,r.Z)((0,r.Z)({},N),{},{ref:a,type:f,id:s||w,className:n()(o,i,m&&"is-valid",x&&"is-invalid")}))}));x.displayName="FormCheckInput";var h=x,y=["bsPrefix","className","htmlFor"],N=c.forwardRef((function(e,a){var s=e.bsPrefix,i=e.className,o=e.htmlFor,l=(0,t.Z)(e,y),f=(0,c.useContext)(p.Z).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,r.Z)((0,r.Z)({},l),{},{ref:a,htmlFor:o||f,className:n()(i,s)}))}));N.displayName="FormCheckLabel";var w=N,P=s(1701),j=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],k=c.forwardRef((function(e,a){var s=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.reverse,m=void 0!==u&&u,Z=e.disabled,x=void 0!==Z&&Z,y=e.isValid,N=void 0!==y&&y,k=e.isInvalid,I=void 0!==k&&k,C=e.feedbackTooltip,F=void 0!==C&&C,R=e.feedback,g=e.feedbackType,E=e.className,T=e.style,O=e.title,S=void 0===O?"":O,_=e.type,z=void 0===_?"checkbox":_,L=e.label,V=e.children,H=e.as,W=void 0===H?"input":H,G=(0,t.Z)(e,j);i=(0,b.vE)(i,"form-check"),o=(0,b.vE)(o,"form-switch");var B=(0,c.useContext)(p.Z).controlId,D=(0,c.useMemo)((function(){return{controlId:s||B}}),[B,s]),M=!V&&null!=L&&!1!==L||(0,P.XW)(V,w),U=(0,d.jsx)(h,(0,r.Z)((0,r.Z)({},G),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:N,isInvalid:I,disabled:x,as:W}));return(0,d.jsx)(p.Z.Provider,{value:D,children:(0,d.jsx)("div",{style:T,className:n()(E,M&&i,f&&"".concat(i,"-inline"),m&&"".concat(i,"-reverse"),"switch"===z&&o),children:V||(0,d.jsxs)(d.Fragment,{children:[U,M&&(0,d.jsx)(w,{title:S,children:L}),R&&(0,d.jsx)(v,{type:g,tooltip:F,children:R})]})})})}));k.displayName="FormCheck";var I=Object.assign(k,{Input:h,Label:w}),C=s(4942),F=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),R=c.forwardRef((function(e,a){var s,i,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,m=e.id,v=e.className,Z=e.isValid,x=void 0!==Z&&Z,h=e.isInvalid,y=void 0!==h&&h,N=e.plaintext,w=e.readOnly,P=e.as,j=void 0===P?"input":P,k=(0,t.Z)(e,F),I=(0,c.useContext)(p.Z).controlId;(o=(0,b.vE)(o,"form-control"),N)?s=(0,C.Z)({},"".concat(o,"-plaintext"),!0):(i={},(0,C.Z)(i,o,!0),(0,C.Z)(i,"".concat(o,"-").concat(f),f),s=i);return(0,d.jsx)(j,(0,r.Z)((0,r.Z)({},k),{},{type:l,size:u,ref:a,readOnly:w,id:m||I,className:n()(v,s,x&&"is-valid",y&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));R.displayName="FormControl";var g=Object.assign(R,{Feedback:v}),E=(0,s(6543).Z)("form-floating"),T=s(323),O=s(885),S=["as","bsPrefix","className"],_=["className"];var z=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,i=e.className,o=(0,t.Z)(e,S);s=(0,b.vE)(s,"col");var l=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return l.forEach((function(e){var a,r,t,i=o[e];delete o[e],"object"===typeof i&&null!=i?(a=i.span,r=i.offset,t=i.order):a=i;var n=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(s).concat(n):"".concat(s).concat(n,"-").concat(a)),null!=t&&f.push("order".concat(n,"-").concat(t)),null!=r&&f.push("offset".concat(n,"-").concat(r))})),[(0,r.Z)((0,r.Z)({},o),{},{className:n().apply(void 0,[i].concat(d,f))}),{as:a,bsPrefix:s,spans:d}]}(e),i=(0,O.Z)(s,2),o=i[0],l=o.className,c=(0,t.Z)(o,_),f=i[1],u=f.as,m=void 0===u?"div":u,v=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:n()(l,!p.length&&v)}))}));z.displayName="Col";var L=z,V=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],H=c.forwardRef((function(e,a){var s=e.as,i=void 0===s?"label":s,o=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,m=e.htmlFor,v=(0,t.Z)(e,V),Z=(0,c.useContext)(p.Z).controlId;o=(0,b.vE)(o,"form-label");var x="col-form-label";"string"===typeof l&&(x="".concat(x," ").concat(x,"-").concat(l));var h=n()(u,o,f&&"visually-hidden",l&&x);return m=m||Z,l?(0,d.jsx)(L,(0,r.Z)({ref:a,as:"label",className:h,htmlFor:m},v)):(0,d.jsx)(i,(0,r.Z)({ref:a,className:h,htmlFor:m},v))}));H.displayName="FormLabel",H.defaultProps={column:!1,visuallyHidden:!1};var W=H,G=["bsPrefix","className","id"],B=c.forwardRef((function(e,a){var s=e.bsPrefix,i=e.className,o=e.id,l=(0,t.Z)(e,G),f=(0,c.useContext)(p.Z).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,r.Z)((0,r.Z)({},l),{},{type:"range",ref:a,className:n()(i,s),id:o||f}))}));B.displayName="FormRange";var D=B,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],U=c.forwardRef((function(e,a){var s=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,m=e.isInvalid,v=void 0!==m&&m,Z=e.id,x=(0,t.Z)(e,M),h=(0,c.useContext)(p.Z).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,r.Z)((0,r.Z)({},x),{},{size:o,ref:a,className:n()(l,s,i&&"".concat(s,"-").concat(i),u&&"is-valid",v&&"is-invalid"),id:Z||h}))}));U.displayName="FormSelect";var q=U,A=["bsPrefix","className","as","muted"],X=c.forwardRef((function(e,a){var s=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,t.Z)(e,A);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},f),{},{ref:a,className:n()(i,s,c&&"text-muted")}))}));X.displayName="FormText";var Y=X,J=c.forwardRef((function(e,a){return(0,d.jsx)(I,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));J.displayName="Switch";var K=Object.assign(J,{Input:I.Input,Label:I.Label}),Q=s(3053),$=["className","validated","as"],ee={_ref:l().any,validated:l().bool,as:l().elementType},ae=c.forwardRef((function(e,a){var s=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,t.Z)(e,$);return(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:n()(s,i&&"was-validated")}))}));ae.displayName="Form",ae.propTypes=ee;var se=Object.assign(ae,{Group:T.Z,Control:g,Floating:E,Check:I,Switch:K,Label:W,Text:Y,Range:D,Select:q,FloatingLabel:Q.Z})},4934:function(e,a,s){"use strict";var r=s(2791).createContext({});a.Z=r},323:function(e,a,s){"use strict";var r=s(1413),t=s(5987),i=s(2791),n=s(4934),o=s(184),l=["controlId","as"],c=i.forwardRef((function(e,a){var s=e.controlId,c=e.as,d=void 0===c?"div":c,f=(0,t.Z)(e,l),u=(0,i.useMemo)((function(){return{controlId:s}}),[s]);return(0,o.jsx)(n.Z.Provider,{value:u,children:(0,o.jsx)(d,(0,r.Z)((0,r.Z)({},f),{},{ref:a}))})}));c.displayName="FormGroup",a.Z=c},7472:function(e,a,s){"use strict";var r=s(1413),t=s(2791),i=s(1694),n=s.n(i),o=s(184);a.Z=function(e){return t.forwardRef((function(a,s){return(0,o.jsx)("div",(0,r.Z)((0,r.Z)({},a),{},{ref:s,className:n()(a.className,e)}))}))}},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=748.1780bccc.chunk.js.map