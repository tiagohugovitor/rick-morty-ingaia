(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[4],{206:function(n,e,t){"use strict";t.r(e);var i,o,a=t(175),r=t(174),c=t(4),d=t(151),l=t(205),s=t(204),p=t(78),x=t(54),h=t(202),u=t(209),b=Object(x.d)(h.a)(i||(i=Object(p.a)(["\n  padding: 0px !important;\n  border-radius: 16px;\n  @media(max-width: 800px) {\n    width: 80vw;\n  }\n"]))),g=Object(x.d)(u.a)(o||(o=Object(p.a)(["\n  overflow-x: hidden !important;\n  border-radius: 16px;\n  @media(max-width: 800px) {\n    margin-top: 100px;\n  }\n"]))),m=t(24),j=Object(s.a)((function(n){return{dialogPaper:{borderRadius:"16px"}}})),f=Object(c.forwardRef)((function(n,e){return Object(m.jsx)(l.a,Object(a.a)({direction:"up",ref:e},n))}));f.displayName="Transition";var O,v=function(n){return function(e){var t=j(),i=Object(c.useState)(!1),o=Object(r.a)(i,2),d=o[0],l=o[1],s=Object(c.useState)({body:null,bodyProps:{}}),p=Object(r.a)(s,2),x=p[0],h=p[1],u=Object(c.useCallback)((function(){return l(!1)}),[]),O=Object(c.useCallback)((function(n){var e=n.body,t=void 0===e?null:e,i=n.bodyProps;h({body:t,bodyProps:void 0===i?{}:i}),l(!0)}),[]),v=x.body,w=x.bodyProps,y=x.body?Object(m.jsx)(b,{children:Object(m.jsx)(v,Object(a.a)({closeModal:u},w))}):Object(m.jsx)(m.Fragment,{});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n,Object(a.a)(Object(a.a)({},e),{},{closeModal:u,showModal:O})),Object(m.jsx)(g,{PaperProps:{classes:{root:t.dialogPaper}},disableBackdropClick:!1,keepMounted:!0,maxWidth:"xl",open:d,onClose:u,TransitionComponent:f,children:y})]})}},w=x.d.span(O||(O=Object(p.a)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.palette.text[n.color]}),(function(n){return n.theme.typography.size[n.size]}),(function(n){return n.theme.typography.weight[n.fontWeight]})),y=function(n){var e=n.text,t=n.color,i=n.size,o=n.fontWeight;return Object(m.jsx)(w,{color:t,size:i,fontWeight:o,children:e})};y.defaultProps={text:"",color:"white",size:"small",fontWeight:"normal"};var k,C,z,S,W=y,N=t.p+"static/media/loading-icon.fd752ea1.svg",P=x.d.div(k||(k=Object(p.a)(["\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.5);\n  align-items: center;\n  z-index: 100;\n"]))),T=x.d.img(C||(C=Object(p.a)(["\n  width: 184px;\n  height: 184px;\n  margin-bottom: 30px;\n"]))),R=x.d.div(z||(z=Object(p.a)(["\n  overflow: hidden;\n  border-right: .15em solid ",";\n  white-space: nowrap;\n  margin: 0 auto; \n  letter-spacing: .15em; \n  animation:\n    typing 2.5s steps(20, end) infinite,\n    blink-caret .75s step-end infinite;\n\n  @keyframes typing {\n    from { width: 0 }\n    to { width: 110px }\n  }\n\n  @keyframes blink-caret {\n    from, to { border-color: transparent }\n    50% { border-color: ","; }\n  }\n"])),(function(n){return n.theme.palette.primary.main}),(function(n){return n.theme.palette.primary.main})),M=function(){return Object(m.jsxs)(P,{children:[Object(m.jsx)(T,{src:N}),Object(m.jsx)(R,{children:Object(m.jsx)(W,{text:"Loading",color:"white",size:"huge"})})]})},I=t(178),D=t.n(I),F=x.d.button(S||(S=Object(p.a)(["\n  border: 2px solid ",";\n  box-sizing: border-box;\n  border-radius: 8px;\n  color: ",";\n  align-items: center;\n  height: 100%;\n  background: transparent;\n  cursor: pointer;\n  font-weight: ",";;\n  font-size: ",";\n  line-height: 22px;\n  width: 100%;\n"])),(function(n){return n.theme.palette.white.main}),(function(n){return n.theme.palette.text.white}),(function(n){return n.theme.typography.weight[n.fontWeight]}),(function(n){return n.theme.typography.size[n.fontSize]})),U=function(n){var e=n.label,t=n.id,i=n.name,o=n.disabled,a=n.onClick,r=n.fontSize,c=n.fontWeight;return Object(m.jsx)(F,{id:t,name:i,disabled:o,onClick:a,fontSize:r,fontWeight:c,children:e})};U.defaultProps={label:"",id:"button-id",name:"button-name",onClick:function(){},fontSize:"small",fontWeight:"normal",disabled:!1};var L,A,$,B,q,G,J,X,Y,_,E,H,Q,K,V,Z,nn,en,tn,on,an,rn,cn,dn,ln,sn,pn,xn,hn,un,bn,gn,mn=U,jn=x.d.div(L||(L=Object(p.a)(["\n  position: fixed;\n  display: flex;\n  max-height: 70vh;\n  width: 22vw;\n  max-width: 400px;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 8px;\n  margin-left: -100px;\n  vertical-align: middle;\n  margin-top: 65px;\n"]))),fn=x.d.div(A||(A=Object(p.a)(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  background: ",";\n  border: 2px solid ",";\n  box-sizing: border-box;\n  border-radius: 8px;\n"])),(function(n){return n.theme.palette.background.tertiary}),(function(n){return n.theme.palette.border.primary})),On=x.d.div($||($=Object(p.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n  border-radius: 8px 8px 0px 0px;\n  box-sizing: border-box;\n"])),(function(n){return n.src})),vn=x.d.div(B||(B=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0px 7px 13px; \n  height: 55px;\n"]))),wn=x.d.div(q||(q=Object(p.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: 25px;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.palette.text.white}),(function(n){return n.theme.typography.size.large}),(function(n){return n.theme.typography.weight.bold})),yn=x.d.div(G||(G=Object(p.a)(["\n  line-height: 15px;\n"]))),kn=function(n){var e=n.image,t=n.name,i=n.type;return Object(m.jsx)(jn,{children:Object(m.jsxs)(fn,{children:[Object(m.jsx)(On,{src:e}),Object(m.jsxs)(vn,{children:[Object(m.jsx)(wn,{children:Object(m.jsx)(W,{text:t,color:"white",size:"large",fontWeight:"bold"})}),Object(m.jsx)(yn,{children:Object(m.jsx)(W,{text:i,color:"white",size:"mini",fontWeight:"normal"})})]})]})})},Cn=x.d.div(J||(J=Object(p.a)(["\n  height: 224px;\n  width: 224px;\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  border: 2px solid ",";\n  box-sizing: border-box;\n  border-radius: 8px;\n  cursor: pointer;\n\n","\n\n@media(max-width: 800px) {\n  width: 255px;\n  height: 223px;\n\n  ","\n}\n"])),(function(n){return n.theme.palette.background.tertiary}),(function(n){return n.theme.palette.border.primary}),(function(n){return"true"===n.selected&&Object(x.c)(X||(X=Object(p.a)(["\n  border: 2px solid ",";;\n  box-sizing: border-box;\n  box-shadow: '0px 0px 0px 3px\n    ",";,\n    0px 0px 5px 4px ",";,\n    inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6)\n  ';\n  border-radius: 8px;\n"])),(function(n){return n.theme.palette.primary.main}),(function(n){return n.theme.palette.primary.secondary}),(function(n){return n.theme.palette.primary.secondary}))}),(function(n){return"true"===n.isMiniCard&&Object(x.c)(Y||(Y=Object(p.a)(["\n    height: 173px;\n    width: 178px;\n  "])))})),zn=x.d.img(_||(_=Object(p.a)(["\n  width: 100%;\n  height: 169px;\n  border-radius: 6px 6px 0px 0px;\n\n  @media(max-width: 800px) {\n  ","\n}\n"])),(function(n){return"true"===n.isMiniCard&&Object(x.c)(E||(E=Object(p.a)(["\n    height: 120px;\n  "])))})),Sn=x.d.div(H||(H=Object(p.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: 25px;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.palette.text.white}),(function(n){return n.theme.typography.size.large}),(function(n){return n.theme.typography.weight.bold})),Wn=x.d.div(Q||(Q=Object(p.a)(["\n  line-height: 15px;\n"]))),Nn=x.d.div(K||(K=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 13px;\n  height: 55px;\n  padding-top: 5px;\n"]))),Pn=function(n){var e=n.characterName,t=n.characterType,i=n.characterImage,o=n.onClickCard,a=n.isSelected,r=n.isMiniCard;return Object(m.jsxs)(Cn,{onClick:o,selected:a?"true":"false",isMiniCard:r?"true":"false",children:[Object(m.jsx)(zn,{src:i,isMiniCard:r?"true":"false"}),Object(m.jsxs)(Nn,{children:[Object(m.jsx)(Sn,{children:Object(m.jsx)(W,{text:e,color:"white",size:"large",fontWeight:"bold"})}),Object(m.jsx)(Wn,{children:Object(m.jsx)(W,{text:t,color:"white",size:"mini",fontWeight:"normal"})})]})]})},Tn=x.d.div(V||(V=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Rn=x.d.div(Z||(Z=Object(p.a)(["\n  line-height: 18px;\n  letter-spacing: 0.65em;\n"]))),Mn=x.d.div(nn||(nn=Object(p.a)(["\n  padding-top: 8px;\n  line-height: 22px;\n"]))),In=function(n){var e=n.title,t=n.characterDescription;return Object(m.jsxs)(Tn,{children:[Object(m.jsx)(Rn,{children:Object(m.jsx)(W,{text:e,color:"tertiary",size:"tiny",fontWeight:"normal"})}),Object(m.jsx)(Mn,{children:Object(m.jsx)(W,{text:t,color:"grey",size:"mediumSmall",fontWeight:"normal"})})]})},Dn=t.p+"static/media/residents-icon.ab287e80.svg",Fn=x.d.div(en||(en=Object(p.a)(["\n  margin-top: 60px;\n  display: flex;\n  flex-direction: column;  \n"]))),Un=x.d.div(tn||(tn=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 17px;\n\n  @media(max-width: 800px) {\n    display: none;\n  }\n"]))),Ln=x.d.div(on||(on=Object(p.a)(["\n  display: none;\n  flex-direction: column;\n  padding-top: 17px;\n\n  @media(max-width: 800px) {\n    display: flex;\n  }\n"]))),An=x.d.div(an||(an=Object(p.a)(["\n  letter-spacing: 0.65em;\n  line-height: 18px;\n"]))),$n=x.d.div(rn||(rn=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  padding-top: 12px;\n"]))),Bn=x.d.img(cn||(cn=Object(p.a)(["\n  padding-right: 10px;\n"]))),qn=function(n){var e=n.title,t=n.locationType,i=n.locationName,o=n.locationSubtitle,a=n.locationResidents;return Object(m.jsxs)(Fn,{children:[Object(m.jsx)(An,{children:Object(m.jsx)(W,{text:e,color:"tertiary",size:"tiny",fontWeight:"normal"})}),Object(m.jsxs)(Un,{children:[Object(m.jsx)(W,{text:t,color:"secondary",size:"small",fontWeight:"normal"}),Object(m.jsx)(W,{text:i,color:"white",size:"extra",fontWeight:"normal"}),Object(m.jsx)(W,{text:o,color:"grey",size:"medium",fontWeight:"normal"})]}),Object(m.jsxs)(Ln,{children:[Object(m.jsx)(W,{text:t,color:"secondary",size:"mini",fontWeight:"normal"}),Object(m.jsx)(W,{text:i,color:"white",size:"large",fontWeight:"normal"}),Object(m.jsx)(W,{text:o,color:"grey",size:"mediumSmall",fontWeight:"normal"})]}),!!a&&Object(m.jsxs)($n,{children:[Object(m.jsx)(Bn,{src:Dn}),Object(m.jsx)(W,{text:"".concat(a," residents"),color:"secondary",size:"small",fontWeight:"normal"})]})]})},Gn=x.d.div(dn||(dn=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 90vh;\n  width: 65vw;\n  max-width: 1200px;\n  margin-left: -20px;\n  border-radius: 16px;\n\n  @media(max-width: 800px) {\n    display: none;\n  }\n"]))),Jn=x.d.div(ln||(ln=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-image: url(",");\n  background-size: cover;\n  filter: blur(15px);\n  width: 100%;\n  height: 100%;\n  border-radius: 16px 0px 0px 16px;\n  \n  @media(max-width: 800px) {\n    bottom: 0px;\n    width: 100%;\n    height: 75%;\n    padding: 0px;\n    border-radius: 16px 16px 0px 0px;\n  }\n"])),(function(n){return n.image})),Xn=x.d.div(sn||(sn=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 16px 0px 0px 16px;\n\n  @media(max-width: 800px) {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0px;\n    border-radius: 16px 16px 0px 0px;\n  }\n"]))),Yn=x.d.div(pn||(pn=Object(p.a)(["\n  position: relative;\n  width: 30%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 16px 0px 0px 16px;\n\n  @media(max-width: 800px) {\n    position: relative;\n    width: 100%;\n    height: 60px;\n    padding: 0px;\n    display: flex;\n    flex-direction: row;\n    border-radius: 16px 16px 0px 0px;\n  }\n"]))),_n=x.d.div(xn||(xn=Object(p.a)(["\n  z-index: 100;\n  background-color: ",";\n  padding: 70px 55px;\n  width: 60%;\n\n  @media(max-width: 800px) {\n    width: 60vw;\n    padding-left: 20px;\n    padding-top: 50px;\n  }\n"])),(function(n){return n.theme.palette.black.main})),En=x.d.div(hn||(hn=Object(p.a)(["\n  z-index: 100;\n  height: 100%;\n  width: 84px;\n  height: 42px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n\n  @media(max-width: 800px) {\n    position: fixed;\n    padding: 0px;\n    display: flex;\n    flex-direction: column;\n    margin-top: -120px;\n  }\n"]))),Hn=x.d.div(un||(un=Object(p.a)(["\n  color: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.palette.white.main})),Qn=x.d.div(bn||(bn=Object(p.a)(["\n  width: 85vw;\n  top: 35px;\n  position: absolute;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]))),Kn=x.d.div(gn||(gn=Object(p.a)(["\n  display: none;\n  width: 80vw;\n  height: 100%;\n  border-radius: 16px;\n  overflow-x: hidden !important;\n\n  @media(max-width: 800px) {\n    display: block;\n  }\n"]))),Vn=function(n){var e=n.onClose,t=n.characterName,i=n.characterType,o=n.image,a=n.characterDescription,r=n.originType,c=n.originName,d=n.originSubtitle,l=n.originResidents,s=n.locationType,p=n.locationName,x=n.locationSubtitle,h=n.locationResidents;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(Gn,{children:[Object(m.jsxs)(Yn,{children:[Object(m.jsx)(Jn,{image:o}),Object(m.jsx)(Xn,{}),Object(m.jsxs)(En,{children:[Object(m.jsx)(mn,{label:"Close",id:"close-button",name:"close-button",disabled:!1,onClick:e,fontSize:"mediumSmall",fontWeight:"bold"}),Object(m.jsx)(kn,{image:o,name:t,type:i})]})]}),Object(m.jsxs)(_n,{children:[Object(m.jsx)(In,{title:"ABOUT",characterDescription:a}),Object(m.jsx)(qn,{title:"ORIGIN",locationType:r,locationName:c,locationSubtitle:d,locationResidents:l}),Object(m.jsx)(qn,{title:"LOCATION",locationType:s,locationName:p,locationSubtitle:x,locationResidents:h})]})]}),Object(m.jsxs)(Kn,{children:[Object(m.jsxs)(Yn,{children:[Object(m.jsx)(Jn,{image:o}),Object(m.jsx)(Xn,{}),Object(m.jsxs)(En,{children:[Object(m.jsx)(Hn,{onClick:e,children:Object(m.jsx)(D.a,{fontSize:"large"})}),Object(m.jsx)(Qn,{children:Object(m.jsx)(Pn,{characterName:t,characterType:i,characterImage:o,isMiniCard:!0,onClickCard:function(){},isSelected:!1})})]})]}),Object(m.jsxs)(_n,{children:[Object(m.jsx)(In,{title:"ABOUT",characterDescription:a}),Object(m.jsx)(qn,{title:"ORIGIN",locationType:r,locationName:c,locationSubtitle:d,locationResidents:l}),Object(m.jsx)(qn,{title:"LOCATION",locationType:s,locationName:p,locationSubtitle:x,locationResidents:h})]})]})]})},Zn=function(n){var e,t,i,o,a,r,c,d,l,s,p=n.closeModal,x=n.character;return Object(m.jsx)(Vn,{onClose:p,characterName:null===x||void 0===x?void 0:x.name,characterType:null===x||void 0===x?void 0:x.species,image:null===x||void 0===x?void 0:x.image,characterDescription:null===x||void 0===x?void 0:x.description,originType:(null===x||void 0===x||null===(e=x.origin)||void 0===e?void 0:e.type)||"Unknown Planet",originName:(null===x||void 0===x||null===(t=x.origin)||void 0===t?void 0:t.name)||"Unknown",originSubtitle:(null===x||void 0===x||null===(i=x.origin)||void 0===i?void 0:i.dimension)||"Unknown dimension",originResidents:null===x||void 0===x||null===(o=x.origin)||void 0===o||null===(a=o.residents)||void 0===a?void 0:a.length,locationType:(null===x||void 0===x||null===(r=x.location)||void 0===r?void 0:r.type)||"Unknown Planet",locationName:(null===x||void 0===x||null===(c=x.location)||void 0===c?void 0:c.name)||"Unknown",locationSubtitle:(null===x||void 0===x||null===(d=x.location)||void 0===d?void 0:d.dimension)||"Unknown dimension",locationResidents:null===x||void 0===x||null===(l=x.location)||void 0===l||null===(s=l.residents)||void 0===s?void 0:s.length})},ne=t(208),ee=Object(s.a)((function(n){return{root:{"& .Mui-selected":{backgroundColor:"transparent",color:n.palette.primary.main}}}})),te=function(n){var e=n.page,t=n.pages,i=n.onChangePage,o=ee();return Object(m.jsx)(ne.a,{color:"primary",className:o.root,count:t,onChange:i,page:e})};te.defaultProps={page:1,pages:1,onChangePage:function(){}};var ie,oe=te,ae=x.d.input(ie||(ie=Object(p.a)(["\n  border: 2px solid ",";\n  box-sizing: border-box;\n  border-radius: 8px;\n  color: ",";\n  padding: 10px 14px;\n  background: transparent;\n  font-style: normal;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 22px;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(n){return n.theme.palette.white.main}),(function(n){return n.theme.palette.text.primary}),(function(n){return n.theme.typography.weight[n.fontWeight]}),(function(n){return n.theme.typography.size[n.fontSize]})),re=function(n){var e=n.id,t=n.type,i=n.name,o=n.placeholder,a=n.onChange,r=n.value,c=n.fontSize,d=n.fontWeight;return Object(m.jsx)(ae,{id:e,type:t,name:i,onChange:function(n){return a(n.target.value)},value:r,fontSize:c,fontWeight:d,placeholder:o})};re.defaultProps={id:"input-id",type:"text",name:"input-name",placeholder:"",onChange:function(){},value:"",fontSize:"small",fontWeight:"normal"};var ce,de,le,se,pe,xe,he,ue,be,ge,me,je,fe,Oe=re,ve=x.d.div(ce||(ce=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  max-width: 350px;\n"]))),we=x.d.div(de||(de=Object(p.a)(["\n  margin: 0px 8px;\n  max-width: 245px;\n  min-width: 164px;\n  width: 45vw;\n\n  @media(max-width: 800px) {\n    margin: 0px 4px;\n  }\n"]))),ye=x.d.div(le||(le=Object(p.a)(["\n  margin: 0px 8px;\n  max-width: 92px;\n  min-width: 84px;\n  width: 20vw;\n\n  @media(max-width: 800px) {\n    margin: 0px 4px;\n  }\n"]))),ke=function(n){var e=n.onChange,t=n.onClick,i=n.value;return Object(m.jsxs)(ve,{children:[Object(m.jsx)(we,{children:Object(m.jsx)(Oe,{id:"search-bar-input",type:"text",name:"search-characters-input",placeholder:"Search characters",onChange:e,value:i,fontSize:"mediumSmall",fontWeight:"bold"})}),Object(m.jsx)(ye,{children:Object(m.jsx)(mn,{label:"Search",id:"search-bar-button",name:"search-characters-button",disabled:!1,onClick:t,fontSize:"mediumSmall",fontWeight:"bold"})})]})},Ce=x.d.img(se||(se=Object(p.a)(["\n  height: auto;\n  max-width: 502px;\n  width: 70vw;\n  animation: topDown 2s ease;\n  transform-origin: left top;\n  \n  @keyframes topDown{\n    0%{\n      transform: scaleY(0);\n    }\n    100%{\n      transform: scaleY(1);\n    }\n  }\n"]))),ze=x.d.div(pe||(pe=Object(p.a)(["\n  padding-top: 75px;\n  animation: leftRight 2s ease;\n  transform-origin: left top;\n  \n  @keyframes leftRight{\n    0%{\n      transform: scaleX(0);\n    }\n    100%{\n      transform: scaleX(1);\n    }\n  }\n\n  @media(max-width: 800px) {\n    padding-top: 50px;\n  }\n"]))),Se=x.d.div(xe||(xe=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),We=function(n){var e=n.onChange,t=n.onClick,i=n.value;return Object(m.jsxs)(Se,{children:[Object(m.jsx)(Ce,{src:"../../../../rick-morty-ingaia/assets/logo.svg"}),Object(m.jsx)(ze,{children:Object(m.jsx)(ke,{onChange:e,onClick:t,value:i})})]})},Ne=x.d.div(he||(he=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  max-width: 1100px;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  justify-content: center;\n"]))),Pe=x.d.div(ue||(ue=Object(p.a)(["\n  margin: 24px;\n\n  @media(max-width: 800px) {\n    margin: 12px;\n  }\n"]))),Te=function(n){var e=n.characters,t=n.onClickCard;return Object(m.jsx)(Ne,{children:e.map((function(n){return Object(m.jsx)(Pe,{children:Object(m.jsx)(Pn,{onClickCard:function(){return t(n)},characterName:null===n||void 0===n?void 0:n.name,characterType:null===n||void 0===n?void 0:n.species,characterImage:null===n||void 0===n?void 0:n.image,isSelected:!1})},n.id)}))})},Re=x.d.div(be||(be=Object(p.a)(['\n  background-image: url("../../../../rick-morty-ingaia/assets/home-background.svg");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  height: auto;\n  min-height: 100vh;\n  width: 100%;\n  filter: ',";\n\n  @media(max-width: 800px) {\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n  }\n"])),(function(n){return"true"===n.loading?"blur(15px)":"none"})),Me=x.d.div(ge||(ge=Object(p.a)(["\n  margin-top: 100px;\n\n  @media(max-width: 800px) {\n    margin-top: 50px;\n  }\n"]))),Ie=x.d.div(me||(me=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 100px;\n  margin-bottom: 200px;\n\n  @media(max-width: 800px) {\n    margin-top: 40px;\n    padding-bottom: 60px;\n  }\n"]))),De=x.d.div(je||(je=Object(p.a)(["\n  text-align: center;\n"]))),Fe=function(n){var e=n.onChange,t=n.onClickSearch,i=n.value,o=n.searchResult,a=n.onClickCard,r=n.loading,c=n.page,d=n.pages,l=n.onChangePage,s=n.emptyResult;return Object(m.jsxs)(Re,{loading:r?"true":"false",children:[Object(m.jsx)(We,{onChange:e,onClick:t,value:i}),Object(m.jsxs)(Me,{children:[!!(null===o||void 0===o?void 0:o.length)&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Te,{onClickCard:a,characters:o}),Object(m.jsx)(Ie,{children:Object(m.jsx)(oe,{page:c,pages:d,onChangePage:l})})]}),s&&Object(m.jsx)(De,{children:Object(m.jsx)(W,{text:"Characters Not Found",color:"tertiary",size:"mediumSmall",fontWeight:"normal"})})]})]})},Ue=t(74),Le=Object(Ue.gql)(fe||(fe=Object(p.a)(["\n  query Characters($page: Int, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      info {\n        count\n        pages\n      }\n      results {\n        id\n        name\n        status\n        species\n        gender\n        type\n        created\n        episode {\n          air_date\n        }\n        origin {\n          name \n          type\n          dimension\n          residents {\n            id\n          }\n        }\n        location {\n          name \n          type\n          dimension\n          residents {\n            id\n          }\n        }\n        image\n      }\n    }\n  }\n"]))),Ae={Male:{pronoum:"He"},Female:{pronoum:"She"},Dead:{verb:"was",status:"is dead"},Alive:{verb:"is",status:"is alive and well"}};e.default=v((function(n){var e,t=n.showModal,i=Object(c.useState)(""),o=Object(r.a)(i,2),l=o[0],s=o[1],p=Object(c.useState)(!1),x=Object(r.a)(p,2),h=x[0],u=x[1],b=Object(c.useState)({page:1,pages:0}),g=Object(r.a)(b,2),j=g[0],f=g[1],O=Object(d.useLazyQuery)(Le,{errorPolicy:"all"}),v=Object(r.a)(O,2),w=v[0],y=v[1],k=y.data,C=y.loading;Object(c.useEffect)((function(){var n,e=null===k||void 0===k||null===(n=k.characters)||void 0===n?void 0:n.info.pages,t=null===k||void 0===k?void 0:k.characters;e!==j.pages&&f((function(n){return Object(a.a)(Object(a.a)({},n),{},{pages:e})})),u(!(!k||t))}),[k,j.pages]);var z=function(n,e){f((function(e){return Object(a.a)(Object(a.a)({},e),{},{page:n})})),w({variables:{page:n,filter:{name:e}}})},S=function(n){var e,t,i,o,a="".concat(n.name,"\n     ").concat(null===(e=Ae[n.status])||void 0===e?void 0:e.verb,"\n     a ").concat(null===n||void 0===n?void 0:n.gender.toLowerCase()," ").concat(null===n||void 0===n?void 0:n.species.toLowerCase(),".\n     ").concat(null===(t=Ae[n.gender])||void 0===t?void 0:t.pronoum,"\n     ").concat(null===(i=Ae[n.status])||void 0===i?void 0:i.status,".\n     Last seen in\n     ").concat(null===n||void 0===n||null===(o=n.episode[(null===n||void 0===n?void 0:n.episode.length)-1])||void 0===o?void 0:o.air_date,".");return console.log(a),a};return Object(m.jsxs)(m.Fragment,{children:[C&&Object(m.jsx)(M,{}),Object(m.jsx)(Fe,{loading:C,onChange:s,onClickSearch:function(){return z(1,l)},onClickCard:function(n){var e=Object(a.a)(Object(a.a)({},n),{},{description:S(n)});t({body:Zn,bodyProps:{character:e}})},value:l,searchResult:(null===k||void 0===k||null===(e=k.characters)||void 0===e?void 0:e.results)||[],emptyResult:h,page:j.page,pages:j.pages,onChangePage:function(n,e){z(e,l)}})]})}))}}]);
//# sourceMappingURL=4.88202f68.chunk.js.map