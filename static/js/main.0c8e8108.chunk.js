(this["webpackJsonpreact-epic-spinners"]=this["webpackJsonpreact-epic-spinners"]||[]).push([[0],{40:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var i,r,o,a,c,d,s,l,u,b,p,f,x,h,m,j,v,g,O,z,y,w,k=e(0),Z=e(22),S=e.n(Z),A=e(27),X=e(5),R=e(13),T=e(3),C=e(4),B=C.a.main(i||(i=Object(T.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0;\n"]))),F=C.a.section(r||(r=Object(T.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),E=C.a.h1(o||(o=Object(T.a)(["\n  color: var(--color-text-title);\n  font-family: 'Titillium Web', sans-serif;\n  text-align: center;\n  padding: 20px 0;\n"]))),J=e(1),W=function(n){var t=n.children;return Object(J.jsx)(E,{children:t})},H=C.a.p(a||(a=Object(T.a)(["\n  font-size: 19px;\n  margin: 0;\n  padding: 0 20px;\n  font-family: 'Titillium Web', sans-serif;\n"]))),I=function(n){var t=n.children,e=n.style;return Object(J.jsx)(H,{style:e,children:t})},N=e(18),q=e.n(N),D=e(26),G=e(28),K=C.a.button(c||(c=Object(T.a)(["\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: max-content;\n  /* padding: 0 3rem; */\n  font-size: 1.25rem;\n  border: 1px solid transparent;\n  background: transparent;\n  outline: none;\n  /* transition-property: background, box-shadow; */\n  /* transition-duration: 0.35s; */\n  cursor: pointer;\n  transition: filter 0.5s ease, box-shadow 0.2s ease-in;\n\n  &:focus {\n    /* box-shadow: 0 0 0 1px transparent, 0 0 10px 0 var(--background-color); */\n    outline: none;\n  }\n\n  &:hover {\n    filter: brightness(1.1);\n  }\n\n  &:active {\n    background-color: var(--hover-code);\n    filter: brightness(0.9);\n  }\n\n  &:disabled {\n    color: #555455;\n    background-color: #302e30;\n    cursor: not-allowed;\n  }\n"]))),L=C.a.section(d||(d=Object(T.a)(["\n  width: 100%;\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n"]))),M=C.a.div(s||(s=Object(T.a)(["\n  width: 500px;\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 5px;\n  background-color: var(--background-color-code);\n\n  @media screen and (max-width: 600px) {\n    width: 60%;\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 90%;\n  }\n"]))),P=Object(C.a)(K)(l||(l=Object(T.a)(["\n  padding: 5px 7px;\n  color: white;\n  border-radius: 5px;\n\n  &:hover {\n    border-color: var(--hover-code);\n  }\n\n  &:focus {\n    border-color: var(--hover-code);\n  }\n"]))),Q=C.a.div(u||(u=Object(T.a)(["\n  display: flex;\n  align-items: center;\n"]))),U=function(){var n=Object(k.useRef)(null),t=function(){var t=Object(D.a)(q.a.mark((function t(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.current.textContent,t.next=3,navigator.clipboard.writeText(e);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(J.jsx)(L,{children:Object(J.jsxs)(M,{children:[Object(J.jsx)(Q,{children:Object(J.jsx)("code",{ref:n,children:"npm i react-epic-spinners"})}),Object(J.jsx)(P,{onClick:t,children:Object(J.jsx)(G.a,{color:"white",size:20})})]})})},V={size:20,color:"red",duration:1e3},Y=[{z:"120deg",x:"66deg",z2:"0deg"},{z:"240deg",x:"66deg",z2:"0deg"},{z:"360deg",x:"66deg",z2:"0deg"}],$=[{z:"120deg",x:"66deg",z2:"360deg"},{z:"240deg",x:"66deg",z2:"360deg"},{z:"360deg",x:"66deg",z2:"360deg"}],_=function(n){var t=n.size;return"".concat(void 0===t?60:t,"px")},nn=function(n){var t=n.color;return void 0===t?"#ff1d5e":t},tn=function(n){var t=n.size;return"calc(".concat(void 0===t?60:t,"px / 25)")},en=C.a.div(b||(b=Object(T.a)(["\n  width: ",";\n  height: ",";\n  overflow: hidden;\n"])),_,_),rn=C.a.div(p||(p=Object(T.a)(["\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n"]))),on=C.a.div(f||(f=Object(T.a)(["\n  display: block;\n  position: absolute;\n  color: ",";\n  font-size: ",";\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),nn,(function(n){var t=n.size;return"calc(".concat(_({size:void 0===t?60:t})," * 0.24)")})),an=C.a.div(x||(x=Object(T.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  animation-duration: ",";\n  border-top-color: transparent;\n  border-top-width: ",";\n  border-left-width: ",";\n  border-left-color: ",";\n  border-left-style: solid;\n  border-top-style: solid;\n\n  ","\n\n  ","\n"])),(function(n){var t=n.duration;return"".concat(void 0===t?1e3:t,"ms")}),tn,tn,nn,(function(n){var t=n.duration;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return Y.reduce((function(t,e,i){var r=e.x,o=e.z,a=e.z2;return"object"===typeof t?"&:nth-child(1) {\n        animation: atomSpinnerAnimation-1 ".concat(n,"ms linear infinite;\n        transform: rotateZ(").concat(t.z,") rotateX(").concat(t.x,") rotateZ(").concat(t.z2,");\n      }\n      &:nth-child(2) {\n        animation: atomSpinnerAnimation-2 ").concat(n,"ms linear infinite;\n        transform: rotateZ(").concat(o,") rotateX(").concat(r,") rotateZ(").concat(a,");\n      }"):"".concat(t,"\n\n    &:nth-child(").concat(i+1,") {\n      animation: atomSpinnerAnimation-").concat(i+1," ").concat(n,"ms linear infinite;\n      transform: rotateZ(").concat(o,") rotateX(").concat(r,") rotateZ(").concat(a,");\n    }")}))}(void 0===t?1e3:t)}),$.reduce((function(n,t,e){var i=t.x,r=t.z,o=t.z2;return"object"===typeof n?"@keyframes atomSpinnerAnimation-1 {\n  100% {\n    transform: rotateZ(".concat(n.z,") rotateX(").concat(n.x,") rotateZ(").concat(n.z2,");\n  }\n}\n@keyframes atomSpinnerAnimation-2 {\n  100% {\n    transform: rotateZ(").concat(r,") rotateX(").concat(i,") rotateZ(").concat(o,");\n  }\n}"):"".concat(n,"\n\n@keyframes atomSpinnerAnimation-").concat(e+1," {\n  100% {\n    transform: rotateZ(").concat(r,") rotateX(").concat(i,") rotateZ(").concat(o,");\n  }\n}")}))),cn=e(29),dn=function(n){var t=n.x,e=n.y,i=n.id;return"@keyframes breeding-rhombus-spinner-animation-child-".concat(i," {\n  50% {\n    transform: translate(").concat(t,",").concat(e,");\n  }\n}\n")},sn=function(n){var t=n.size,e=void 0===t?65:t,i=n.other,r=void 0===i?7.5:i;return"calc(".concat(e,"px / ").concat(r,")")},ln=function(n){var t=n.size,e=void 0===t?65:t,i=n.other,r=void 0===i?2.3077:i;return"calc(".concat(e,"px / ").concat(r,")")},un=function(n){var t=n.duration;return"".concat(void 0===t?2e3:t,"ms")},bn=function(n){var t=n.color;return void 0===t?"#ff1d5e":t},pn=C.a.div(h||(h=Object(T.a)(["\n  width: ",";\n  height: ",";\n  position: relative;\n  transform: rotate(45deg);\n"])),(function(n){return"".concat(n.size,"px")}),(function(n){return"".concat(n.size,"px")})),fn=C.a.div(m||(m=Object(T.a)(["\n  width: ",";\n  height: ",";\n  position: absolute;\n  animation-duration: ",";\n  top: ",";\n  left: ",";\n  background-color: ",";\n  box-sizing: border-box;\n  animation-iteration-count: infinite;\n\n  &:nth-child(2n + 0) {\n    margin-right: 0;\n  }\n  animation-name: breeding-rhombus-spinner-animation-child-",";\n  animation-delay: calc(100ms * ",");\n\n  ","\n"])),sn,sn,un,ln,ln,bn,(function(n){return n.id}),(function(n){return n.id}),function(){for(var n="",t=0,e=[{id:1,x:"-225%",y:"-225%"},{id:2,x:"0",y:"-225%"},{id:3,x:"225%",y:"-225%"},{id:4,x:"225%",y:"0"},{id:5,x:"225%",y:"225%"},{id:6,x:"0",y:"225%"},{id:7,x:"-225%",y:"225%"},{id:8,x:"-225%",y:"0"}];t<e.length;t++){var i=e[t];n+=dn(Object(cn.a)({},i))}return n}()),xn=C.a.div(j||(j=Object(T.a)(["\n  width: ",";\n  height: ",";\n  animation-duration: ",";\n  top: ",";\n  left: ",";\n  background-color: ",";\n  box-sizing: border-box;\n  animation: breeding-rhombus-spinner-big 2s infinite;\n  animation-delay: 0.5s;\n\n  @keyframes breeding-rhombus-spinner-big {\n    50% {\n      transform: scale(0.5);\n    }\n  }\n"])),(function(n){var t=n.size;return sn({size:t,other:3})}),(function(n){var t=n.size;return sn({size:t,other:3})}),un,(function(n){var t=n.size;return ln({size:t,other:3})}),(function(n){var t=n.size;return ln({size:t,other:3})}),bn),hn=function(n){var t=n.size;return"".concat(void 0===t?15:t,"px")},mn=C.a.div(v||(v=Object(T.a)(["\n  box-sizing: border-box;\n  width: ",";\n  height: auto;\n  display: flex;\n  align-items: center;\n  padding-top: 30px;\n  justify-content: center;\n  .div {\n    box-sizing: border-box;\n  }\n"])),(function(n){var t=n.size,e=void 0===t?15:t;return"calc((".concat(e,"px + ").concat(e,"px * 1.125) * 3)")})),jn=C.a.div(g||(g=Object(T.a)(["\n  width: ",";\n  height: ",";\n  margin-left: calc("," * 1.125);\n  transform: rotate(45deg);\n  border-radius: 10%;\n  border: 3px solid ",";\n  overflow: hidden;\n  background-color: transparent;\n\n  animation: circles-to-rhobuses-animation "," linear infinite;\n\n  &:nth-child(1) {\n    animation-delay: calc(150ms * 1);\n    margin-left: 0;\n  }\n\n  &:nth-child(2) {\n    animation-delay: calc(150ms * 2);\n  }\n\n  &:nth-child(3) {\n    animation-delay: calc(150ms * 3);\n  }\n\n  @keyframes circles-to-rhobuses-animation {\n    0% {\n      border-radius: 10%;\n    }\n\n    17.5% {\n      border-radius: 10%;\n    }\n\n    50% {\n      border-radius: 100%;\n    }\n\n    93.5% {\n      border-radius: 10%;\n    }\n\n    100% {\n      border-radius: 10%;\n    }\n  }\n"])),hn,hn,hn,(function(n){var t=n.color;return void 0===t?"#ff1d5e":t}),(function(n){var t=n.duration;return"".concat(void 0===t?1200:t,"ms")})),vn=function(n){var t=n.size;return"".concat(void 0===t?64:t,"px")},gn=function(n){var t=n.size,e=void 0===t?64:t,i=n.index;return"".concat((e-4)/9+((void 0===i?0:i)+2)*((e-4)/9),"px")},On=function(n){var t=n.duration;return"".concat(void 0===t?1500:t,"ms")},zn=C.a.div(O||(O=Object(T.a)(["\n  height: ",";\n  width: ",";\n  padding: 2px;\n  overflow: hidden;\n  position: relative;\n  box-sizing: border-box;\n"])),vn,vn),yn=C.a.div(z||(z=Object(T.a)(["\n  width: ",";\n  height: ",";\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  border-top-color: ",";\n  animation: fingerprint-spinner-animation ","\n    cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;\n  margin: auto;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  right: 0;\n  animation-duration: ",";\n  animation-delay: ",";\n  box-sizing: border-box;\n\n  ","\n\n  @keyframes fingerprint-spinner-animation {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),gn,gn,(function(n){var t=n.color;return void 0===t?"#ff1d5e":t}),On,On,(function(n){var t=n.index;return"".concat(50*t,"ms")}),function(n){for(var t,e="",i=1;i>=9;i++)e+="&:nth-child(".concat(t=i,") {\n  width: calc(60px / 9 + ").concat(t-1," * 60px / 9);\n  height: calc(60px / 9 + ").concat(t-1," * 60px / 9);\n  animation-delay: calc(50 * ").concat(t,")ms;\n}\n");return e}()),wn=["Atom spinner","Breeding Rhombus","Circle to rhumbuses","Fingerprint spinner"],kn={AtomSpinner:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=n.size,e=n.color,i=n.duration,r=["","",""];return Object(J.jsx)(en,{size:t,children:Object(J.jsxs)(rn,{children:[r.map((function(n,r){return Object(J.jsx)(an,{size:t,color:e,duration:i},r)})),Object(J.jsx)(on,{size:t,color:e,children:"\u25cf"})]})})},BreedingSpinner:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=n.size,e=n.color,i=n.duration,r=["","","","","","","",""];return Object(J.jsxs)(pn,{size:t,children:[r.map((function(n,r){return Object(J.jsx)(fn,{size:t,color:e,duration:i,id:r+1},r)})),Object(J.jsx)(xn,{size:t,color:e,duration:i})]})},CirclesRhumbusesSpinner:function(n){var t=n.color,e=n.duration;return Object(J.jsx)(mn,{children:["","",""].map((function(n,i){return Object(J.jsx)(jn,{color:t,duration:e},i)}))})},FingerprintSpinner:function(n){var t=n.size,e=n.duration,i=n.color;return Object(J.jsx)(zn,{size:t,children:["","","","","","","","",""].map((function(n,r){return Object(J.jsx)(yn,{size:t,duration:e,color:i,index:r+1},r)}))})}},Zn=C.a.article(y||(y=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 10px;\n  padding-top: 20px;\n"]))),Sn=C.a.div(w||(w=Object(T.a)(["\n  width: calc(100% / 4);\n  border: 1px solid red;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  padding-top: 25px;\n"]))),An=function(){var n=Object.keys(kn);return Object(J.jsx)(Zn,{children:n.map((function(n,t){var e=kn[[n]];return Object(J.jsxs)(Sn,{children:[Object(J.jsx)(e,{color:"#09f",size:80}),Object(J.jsx)(I,{style:{marginTop:10},children:wn[t]})]},t)}))})};function Xn(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(R.a,{children:Object(J.jsx)("title",{children:"Home"})}),Object(J.jsxs)(B,{children:[Object(J.jsxs)(F,{children:[Object(J.jsx)(W,{children:"React Epic Spinners"}),Object(J.jsx)(I,{children:"This components epic spinners implemented for use in React."})]}),Object(J.jsx)(U,{}),Object(J.jsx)(An,{})]})]})}e(40);var Rn=function(){return Object(J.jsx)("div",{className:"App",children:Object(J.jsx)(R.b,{children:Object(J.jsx)(A.a,{children:Object(J.jsx)(X.c,{children:Object(J.jsx)(X.a,{exact:!0,path:"/",component:Xn})})})})})};S.a.render(Object(J.jsx)(Rn,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.0c8e8108.chunk.js.map