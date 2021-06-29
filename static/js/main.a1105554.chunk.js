(this["webpackJsonpreact-epic-spinners"]=this["webpackJsonpreact-epic-spinners"]||[]).push([[0],{42:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var i,r,o,a,c,d,s,l,u,b,p,h,x,f,j,m,v,g,O,z,y,w,k,Z=e(0),S=e(23),A=e.n(S),T=e(15),X=e(5),R=e(13),C=e(2),B=e(3),F=B.a.main(i||(i=Object(C.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0;\n"]))),W=B.a.section(r||(r=Object(C.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),E=B.a.p(o||(o=Object(C.a)(["\n  font-size: 19px;\n  margin: 0;\n  padding: 0 20px;\n  font-family: 'Titillium Web', sans-serif;\n"]))),I=e(1),J=function(n){var t=n.children,e=n.style;return Object(I.jsx)(E,{style:e,children:t})},H=e(19),N=e.n(H),q=e(27),D=e(28),G=B.a.button(a||(a=Object(C.a)(["\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: max-content;\n  /* padding: 0 3rem; */\n  font-size: 1.25rem;\n  border: 1px solid transparent;\n  background: transparent;\n  outline: none;\n  /* transition-property: background, box-shadow; */\n  /* transition-duration: 0.35s; */\n  cursor: pointer;\n  transition: filter 0.5s ease, box-shadow 0.2s ease-in;\n\n  &:focus {\n    /* box-shadow: 0 0 0 1px transparent, 0 0 10px 0 var(--background-color); */\n    outline: none;\n  }\n\n  &:hover {\n    filter: brightness(1.1);\n  }\n\n  &:active {\n    background-color: var(--hover-code);\n    filter: brightness(0.9);\n  }\n\n  &:disabled {\n    color: #555455;\n    background-color: #302e30;\n    cursor: not-allowed;\n  }\n"]))),K=B.a.section(c||(c=Object(C.a)(["\n  width: 100%;\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n"]))),L=B.a.div(d||(d=Object(C.a)(["\n  width: 500px;\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 5px;\n  background-color: var(--background-color-code);\n\n  @media screen and (max-width: 600px) {\n    width: 60%;\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 90%;\n  }\n"]))),M=Object(B.a)(G)(s||(s=Object(C.a)(["\n  padding: 5px 7px;\n  color: white;\n  border-radius: 5px;\n\n  &:hover {\n    border-color: var(--hover-code);\n  }\n\n  &:focus {\n    border-color: var(--hover-code);\n  }\n"]))),P=B.a.div(l||(l=Object(C.a)(["\n  display: flex;\n  align-items: center;\n"]))),Q=function(){var n=Object(Z.useRef)(null),t=function(){var t=Object(q.a)(N.a.mark((function t(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.current.textContent,t.next=3,navigator.clipboard.writeText(e);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.jsx)(K,{children:Object(I.jsxs)(L,{children:[Object(I.jsx)(P,{children:Object(I.jsx)("code",{ref:n,children:"npm i react-epic-spinners"})}),Object(I.jsx)(M,{onClick:t,children:Object(I.jsx)(D.a,{color:"white",size:20})})]})})},U={size:20,color:"red",duration:1e3},V=[{z:"120deg",x:"66deg",z2:"0deg"},{z:"240deg",x:"66deg",z2:"0deg"},{z:"360deg",x:"66deg",z2:"0deg"}],Y=[{z:"120deg",x:"66deg",z2:"360deg"},{z:"240deg",x:"66deg",z2:"360deg"},{z:"360deg",x:"66deg",z2:"360deg"}],$=function(n){var t=n.size;return"".concat(void 0===t?60:t,"px")},_=function(n){var t=n.color;return void 0===t?"#ff1d5e":t},nn=function(n){var t=n.size;return"calc(".concat(void 0===t?60:t,"px / 25)")},tn=B.a.div(u||(u=Object(C.a)(["\n  width: ",";\n  height: ",";\n  overflow: hidden;\n"])),$,$),en=B.a.div(b||(b=Object(C.a)(["\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n"]))),rn=B.a.div(p||(p=Object(C.a)(["\n  display: block;\n  position: absolute;\n  color: ",";\n  font-size: ",";\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),_,(function(n){var t=n.size;return"calc(".concat($({size:void 0===t?60:t})," * 0.24)")})),on=B.a.div(h||(h=Object(C.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  animation-duration: ",";\n  border-top-color: transparent;\n  border-top-width: ",";\n  border-left-width: ",";\n  border-left-color: ",";\n  border-left-style: solid;\n  border-top-style: solid;\n\n  ","\n\n  ","\n"])),(function(n){var t=n.duration;return"".concat(void 0===t?1e3:t,"ms")}),nn,nn,_,(function(n){var t=n.duration;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return V.reduce((function(t,e,i){var r=e.x,o=e.z,a=e.z2;return"object"===typeof t?"&:nth-child(1) {\n        animation: atomSpinnerAnimation-1 ".concat(n,"ms linear infinite;\n        transform: rotateZ(").concat(t.z,") rotateX(").concat(t.x,") rotateZ(").concat(t.z2,");\n      }\n      &:nth-child(2) {\n        animation: atomSpinnerAnimation-2 ").concat(n,"ms linear infinite;\n        transform: rotateZ(").concat(o,") rotateX(").concat(r,") rotateZ(").concat(a,");\n      }"):"".concat(t,"\n\n    &:nth-child(").concat(i+1,") {\n      animation: atomSpinnerAnimation-").concat(i+1," ").concat(n,"ms linear infinite;\n      transform: rotateZ(").concat(o,") rotateX(").concat(r,") rotateZ(").concat(a,");\n    }")}))}(void 0===t?1e3:t)}),Y.reduce((function(n,t,e){var i=t.x,r=t.z,o=t.z2;return"object"===typeof n?"@keyframes atomSpinnerAnimation-1 {\n  100% {\n    transform: rotateZ(".concat(n.z,") rotateX(").concat(n.x,") rotateZ(").concat(n.z2,");\n  }\n}\n@keyframes atomSpinnerAnimation-2 {\n  100% {\n    transform: rotateZ(").concat(r,") rotateX(").concat(i,") rotateZ(").concat(o,");\n  }\n}"):"".concat(n,"\n\n@keyframes atomSpinnerAnimation-").concat(e+1," {\n  100% {\n    transform: rotateZ(").concat(r,") rotateX(").concat(i,") rotateZ(").concat(o,");\n  }\n}")}))),an=e(29),cn=function(n){var t=n.x,e=n.y,i=n.id;return"@keyframes breeding-rhombus-spinner-animation-child-".concat(i," {\n  50% {\n    transform: translate(").concat(t,",").concat(e,");\n  }\n}\n")},dn=function(n){var t=n.size,e=void 0===t?65:t,i=n.other,r=void 0===i?7.5:i;return"calc(".concat(e,"px / ").concat(r,")")},sn=function(n){var t=n.size,e=void 0===t?65:t,i=n.other,r=void 0===i?2.3077:i;return"calc(".concat(e,"px / ").concat(r,")")},ln=function(n){var t=n.duration;return"".concat(void 0===t?2e3:t,"ms")},un=function(n){var t=n.color;return void 0===t?"#ff1d5e":t},bn=B.a.div(x||(x=Object(C.a)(["\n  width: ",";\n  height: ",";\n  position: relative;\n  transform: rotate(45deg);\n"])),(function(n){return"".concat(n.size,"px")}),(function(n){return"".concat(n.size,"px")})),pn=B.a.div(f||(f=Object(C.a)(["\n  width: ",";\n  height: ",";\n  position: absolute;\n  animation-duration: ",";\n  top: ",";\n  left: ",";\n  background-color: ",";\n  box-sizing: border-box;\n  animation-iteration-count: infinite;\n\n  &:nth-child(2n + 0) {\n    margin-right: 0;\n  }\n  animation-name: breeding-rhombus-spinner-animation-child-",";\n  animation-delay: calc(100ms * ",");\n\n  ","\n"])),dn,dn,ln,sn,sn,un,(function(n){return n.id}),(function(n){return n.id}),function(){for(var n="",t=0,e=[{id:1,x:"-225%",y:"-225%"},{id:2,x:"0",y:"-225%"},{id:3,x:"225%",y:"-225%"},{id:4,x:"225%",y:"0"},{id:5,x:"225%",y:"225%"},{id:6,x:"0",y:"225%"},{id:7,x:"-225%",y:"225%"},{id:8,x:"-225%",y:"0"}];t<e.length;t++){var i=e[t];n+=cn(Object(an.a)({},i))}return n}()),hn=B.a.div(j||(j=Object(C.a)(["\n  width: ",";\n  height: ",";\n  animation-duration: ",";\n  top: ",";\n  left: ",";\n  background-color: ",";\n  box-sizing: border-box;\n  animation: breeding-rhombus-spinner-big 2s infinite;\n  animation-delay: 0.5s;\n\n  @keyframes breeding-rhombus-spinner-big {\n    50% {\n      transform: scale(0.5);\n    }\n  }\n"])),(function(n){var t=n.size;return dn({size:t,other:3})}),(function(n){var t=n.size;return dn({size:t,other:3})}),ln,(function(n){var t=n.size;return sn({size:t,other:3})}),(function(n){var t=n.size;return sn({size:t,other:3})}),un),xn=function(n){var t=n.size;return"".concat(void 0===t?15:t,"px")},fn=B.a.div(m||(m=Object(C.a)(["\n  box-sizing: border-box;\n  width: ",";\n  height: auto;\n  display: flex;\n  align-items: center;\n  padding-top: 30px;\n  justify-content: center;\n  .div {\n    box-sizing: border-box;\n  }\n"])),(function(n){var t=n.size,e=void 0===t?15:t;return"calc((".concat(e,"px + ").concat(e,"px * 1.125) * 3)")})),jn=B.a.div(v||(v=Object(C.a)(["\n  width: ",";\n  height: ",";\n  margin-left: calc("," * 1.125);\n  transform: rotate(45deg);\n  border-radius: 10%;\n  border: 3px solid ",";\n  overflow: hidden;\n  background-color: transparent;\n\n  animation: circles-to-rhobuses-animation "," linear infinite;\n\n  &:nth-child(1) {\n    animation-delay: calc(150ms * 1);\n    margin-left: 0;\n  }\n\n  &:nth-child(2) {\n    animation-delay: calc(150ms * 2);\n  }\n\n  &:nth-child(3) {\n    animation-delay: calc(150ms * 3);\n  }\n\n  @keyframes circles-to-rhobuses-animation {\n    0% {\n      border-radius: 10%;\n    }\n\n    17.5% {\n      border-radius: 10%;\n    }\n\n    50% {\n      border-radius: 100%;\n    }\n\n    93.5% {\n      border-radius: 10%;\n    }\n\n    100% {\n      border-radius: 10%;\n    }\n  }\n"])),xn,xn,xn,(function(n){var t=n.color;return void 0===t?"#ff1d5e":t}),(function(n){var t=n.duration;return"".concat(void 0===t?1200:t,"ms")})),mn=function(n){var t=n.size;return"".concat(void 0===t?64:t,"px")},vn=function(n){var t=n.size,e=void 0===t?64:t,i=n.index;return"".concat((e-4)/9+((void 0===i?0:i)+2)*((e-4)/9),"px")},gn=function(n){var t=n.duration;return"".concat(void 0===t?1500:t,"ms")},On=B.a.div(g||(g=Object(C.a)(["\n  height: ",";\n  width: ",";\n  padding: 2px;\n  overflow: hidden;\n  position: relative;\n  box-sizing: border-box;\n"])),mn,mn),zn=B.a.div(O||(O=Object(C.a)(["\n  width: ",";\n  height: ",";\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  border-top-color: ",";\n  animation: fingerprint-spinner-animation ","\n    cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;\n  margin: auto;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  right: 0;\n  animation-duration: ",";\n  animation-delay: ",";\n  box-sizing: border-box;\n\n  ","\n\n  @keyframes fingerprint-spinner-animation {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),vn,vn,(function(n){var t=n.color;return void 0===t?"#ff1d5e":t}),gn,gn,(function(n){var t=n.index;return"".concat(50*t,"ms")}),function(n){for(var t,e="",i=1;i>=9;i++)e+="&:nth-child(".concat(t=i,") {\n  width: calc(60px / 9 + ").concat(t-1," * 60px / 9);\n  height: calc(60px / 9 + ").concat(t-1," * 60px / 9);\n  animation-delay: calc(50 * ").concat(t,")ms;\n}\n");return e}()),yn=["Atom spinner","Breeding Rhombus","Circle to rhumbuses","Fingerprint spinner"],wn={AtomSpinner:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=n.size,e=n.color,i=n.duration,r=["","",""];return Object(I.jsx)(tn,{size:t,children:Object(I.jsxs)(en,{children:[r.map((function(n,r){return Object(I.jsx)(on,{size:t,color:e,duration:i},r)})),Object(I.jsx)(rn,{size:t,color:e,children:"\u25cf"})]})})},BreedingSpinner:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=n.size,e=n.color,i=n.duration,r=["","","","","","","",""];return Object(I.jsxs)(bn,{size:t,children:[r.map((function(n,r){return Object(I.jsx)(pn,{size:t,color:e,duration:i,id:r+1},r)})),Object(I.jsx)(hn,{size:t,color:e,duration:i})]})},CirclesRhumbusesSpinner:function(n){var t=n.color,e=n.duration;return Object(I.jsx)(fn,{children:["","",""].map((function(n,i){return Object(I.jsx)(jn,{color:t,duration:e},i)}))})},FingerprintSpinner:function(n){var t=n.size,e=n.duration,i=n.color;return Object(I.jsx)(On,{size:t,children:["","","","","","","","",""].map((function(n,r){return Object(I.jsx)(zn,{size:t,duration:e,color:i,index:r+1},r)}))})}},kn=B.a.article(z||(z=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 10px;\n  padding-top: 20px;\n"]))),Zn=B.a.div(y||(y=Object(C.a)(["\n  width: calc(100% / 4);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  padding-top: 25px;\n"]))),Sn=function(){var n=Object.keys(wn);return Object(I.jsx)(kn,{children:n.map((function(n,t){var e=wn[[n]];return Object(I.jsxs)(Zn,{children:[Object(I.jsx)(e,{color:"#09f",size:80}),Object(I.jsx)(J,{style:{marginTop:10},children:yn[t]})]},t)}))})};function An(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(R.a,{children:Object(I.jsx)("title",{children:"Home"})}),Object(I.jsxs)(F,{children:[Object(I.jsx)(W,{children:Object(I.jsx)(J,{children:"This components epic spinners implemented for use in React."})}),Object(I.jsx)(Q,{}),Object(I.jsx)(Sn,{})]})]})}var Tn,Xn=B.a.main(w||(w=Object(C.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Rn=B.a.figure(k||(k=Object(C.a)(["\n  width: 50%;\n  height: 50%;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),Cn=e.p+"static/media/not-found.0c32b540.svg";function Bn(){return Object(I.jsx)(Xn,{children:Object(I.jsx)(Rn,{children:Object(I.jsx)("img",{src:Cn,alt:"not found"})})})}var Fn,Wn,En,In=B.a.h1(Tn||(Tn=Object(C.a)(["\n  color: var(--color-text-title);\n  font-family: 'Titillium Web', sans-serif;\n  text-align: center;\n"]))),Jn=function(n){var t=n.children;return Object(I.jsx)(In,{children:t})},Hn=B.a.header(Fn||(Fn=Object(C.a)(["\n  width: 100%;\n  min-height: 45px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  padding: 10px 5%;\n  border-bottom: 1px solid var(--hover-code);\n"]))),Nn=B.a.div(Wn||(Wn=Object(C.a)([""]))),qn=Object(B.a)(T.b)(En||(En=Object(C.a)(["\n  color: white;\n  text-decoration: none;\n  font-size: 18px;\n  font-family: 'Titillium Web', sans-serif;\n  cursor: pointer;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  padding: 0px 10px;\n\n  &:hover {\n    border-color: var(--hover-code);\n    background-color: var(--hover-code);\n  }\n"]))),Dn=function(){return Object(I.jsxs)(Hn,{children:[Object(I.jsx)(Nn,{children:Object(I.jsx)(Jn,{children:"React Epic Spinners"})}),Object(I.jsx)(Nn,{children:Object(I.jsx)("nav",{children:Object(I.jsx)("ul",{children:Object(I.jsx)("li",{children:Object(I.jsx)(qn,{to:"/",children:"Inicio"})})})})})]})};e(42);var Gn=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(R.b,{children:Object(I.jsxs)(T.a,{children:[Object(I.jsx)(Dn,{}),Object(I.jsxs)(X.c,{children:[Object(I.jsx)(X.a,{exact:!0,path:"/",component:An}),Object(I.jsx)(X.a,{path:"*",component:Bn})]})]})})})};A.a.render(Object(I.jsx)(Gn,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a1105554.chunk.js.map