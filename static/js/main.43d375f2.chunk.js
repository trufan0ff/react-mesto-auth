(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(19),s=n.n(i),o=(n(18),n(24)),r=n(2),l=n.p+"static/media/logo.bbe2a6ea.svg",u=n(3),p=n(8),d=n(0);var h=function(e){var t=e.handleLogout,n=e.email,a=e.toggleMenu,c=e.isMenuOpen;return Object(d.jsxs)("header",{className:"header section",children:[Object(d.jsx)("button",{href:"#",target:"_blank",className:"header__logo-link link-animation",children:Object(d.jsx)("img",{src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})}),Object(d.jsxs)(u.d,{children:[Object(d.jsxs)(u.b,{exact:!0,path:"/",children:[Object(d.jsxs)("div",{className:"header__info",children:[Object(d.jsx)("span",{className:"header__email",children:n}),Object(d.jsx)(p.b,{to:"/signin",onClick:t,className:"button header__link",children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(d.jsx)("div",{className:"hamburger-menu",onClick:a,children:Object(d.jsx)("div",{className:c?"humburger-menu__menu humburger-menu__menu_clicked":"humburger-menu__menu"})})]}),Object(d.jsx)(u.b,{path:"/signin",children:Object(d.jsx)(p.b,{to:"/signup",className:"button header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{path:"/signup",children:Object(d.jsx)(p.b,{to:"/signin",className:"button header__link",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})},j=n.p+"static/media/avatar_edit.a086f758.svg",m=c.a.createContext();var b=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,i=e.onCardDelete,s=c.a.useContext(m),o=t.owner._id===s._id,r="".concat(o?"element__delete":"element__delete_type_hidden"),l=t.likes.some((function(e){return e._id===s._id})),u="".concat(l?"element__heart_type_active":"element__heart");return Object(d.jsxs)("div",{className:"element",children:[Object(d.jsx)("img",{src:t.link,style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){n(t)},className:"element__image",alt:t.name}),Object(d.jsx)("button",{className:r,type:"button",onClick:function(){i(t)}}),Object(d.jsxs)("div",{className:"element__group",children:[Object(d.jsx)("h2",{className:"element__title",children:t.name}),Object(d.jsxs)("div",{className:"element__group_likes",children:[Object(d.jsx)("button",{className:u,type:"button",onClick:function(){a(t)}}),Object(d.jsx)("h2",{className:"element__count_heart",children:t.likes.length})]})]})]})};var _=function(e){var t=e.cards,n=e.onCardLike,a=e.onCardDelete,i=e.onEditProfile,s=e.onAddPlace,o=e.onEditAvatar,r=e.handleCardClick,l=c.a.useContext(m);return Object(d.jsxs)("main",{children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__avatar-group",children:[Object(d.jsx)("img",{src:l.avatar,style:{backgroundImage:"url(".concat(l.avatar,")")},className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440",onClick:o}),Object(d.jsx)("img",{src:j,className:"profile__avatar-edit",alt:"\u041a\u0430\u0440\u0430\u043d\u0434\u0430\u0448"})]}),Object(d.jsxs)("div",{className:"profile__group",children:[Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__edit",children:[Object(d.jsx)("h1",{className:"profile__title",children:l.name}),Object(d.jsx)("button",{className:"profile__edit-button",type:"button",onClick:i})]}),Object(d.jsx)("p",{className:"profile__subtitle",children:l.about})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button",onClick:s})]})]}),Object(d.jsx)("section",{className:"elements",children:t.map((function(e){return Object(d.jsx)(b,{onCardDelete:a,onCardClick:r,onCardLike:n,card:e},e._id)}))})]})};var f=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 2020 Mesto Russia by ",Object(d.jsx)("a",{href:"https://vk.com/trufan",target:"_blank",rel:"noreferrer",className:"footer__social-link link-animation",children:"trufan"})]})})};var O=function(e){var t=e.children,n=e.title,a=e.isOpen,c=e.onClose,i=e.onSubmit;return Object(d.jsx)("section",{className:"popup  ".concat(a&&"popup_active"),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{className:"popup__close",type:"button",onClick:c}),Object(d.jsx)("h2",{className:"popup__title",children:n}),Object(d.jsxs)("form",{className:"popup__form",noValidate:!0,onSubmit:i,children:[t,Object(d.jsx)("button",{className:"popup__submit",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var v=function(e){var t=c.a.useRef();return Object(d.jsxs)(O,{onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},isOpen:e.isOpen,onClose:e.onClose,title:e.title,children:[Object(d.jsx)("input",{ref:t,className:"popup__input popup__input_type_link-avatar",id:"link-avatar-input",pattern:"https://.*",type:"url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link-avatar-input"}),Object(d.jsx)("span",{className:"link-avatar-input-error"})]})};var x=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],i=n[1],s=c.a.useState(""),o=Object(r.a)(s,2),l=o[0],u=o[1],p=c.a.useContext(m);return c.a.useEffect((function(){i(p.name),u(p.about)}),[p]),Object(d.jsxs)(O,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:l})},isOpen:e.isOpen,onClose:e.onClose,title:e.title,children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_name",value:a,onChange:function(e){i(e.target.value)},id:"name-input",minLength:"2",maxLength:"40",required:!0,type:"text",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(d.jsx)("span",{className:"name-input-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_activity",value:l,onChange:function(e){u(e.target.value)},id:"about",minLength:"2",maxLength:"200",required:!0,type:"text",name:"activity",placeholder:"\u041e \u0441\u0435\u0431\u0435"}),Object(d.jsx)("span",{className:"about-error"})]})};var g=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],i=n[1],s=c.a.useState(""),o=Object(r.a)(s,2),l=o[0],u=o[1];return Object(d.jsxs)(O,{onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:l})},isOpen:e.isOpen,onClose:e.onClose,title:e.title,children:[Object(d.jsx)("input",{onChange:function(e){i(e.target.value)},className:"popup__input popup__input_type_mesto-name",id:"name",type:"text",minLength:"2",maxLength:"30",required:!0,name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(d.jsx)("span",{className:"name-error"}),Object(d.jsx)("input",{onChange:function(e){u(e.target.value)},className:"popup__input popup__input_type_link",id:"link",pattern:"https://.*",type:"url",name:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(d.jsx)("span",{className:"link-error"})]})},N=n(22),k=n(23),C=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(N.a)(this,e),this._url=n,this._headers=a}return Object(k.a)(e,[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._resultStatus(t)}))}},{key:"addCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._resultStatus(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._resultStatus(t)}))}},{key:"updateProfile",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._resultStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._resultStatus(e)}))}},{key:"setLikeForCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._resultStatus(e)}))}},{key:"removeLikeFromCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._resultStatus(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._resultStatus(e)}))}},{key:"_resultStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"f2f1eda8-cb60-4ee0-8ee5-825fccefe6c9","Content-Type":"application/json"}});var y=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("section",{className:"popup ".concat(null!==t&&"popup_active"),id:"image-popup",children:Object(d.jsxs)("div",{className:"popup__container-image",children:[Object(d.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(d.jsx)("button",{className:"popup__close",onClick:n,type:"button"}),Object(d.jsx)("img",{src:null!==t?t.link:"#",className:"popup__image",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})]}),Object(d.jsx)("h2",{className:"popup__image-title",children:null!==t?t.name:"#"})]})})},S=n(9),L=n(25),z=["component"],w=function(e){var t=e.component,n=Object(L.a)(e,z);return Object(d.jsx)(u.b,{exect:!0,children:function(){return n.loggedIn?Object(d.jsx)(t,Object(S.a)({},n)):Object(d.jsx)(u.a,{to:"/signin"})}})},E=n(11);var A=function(e){var t=e.handleLogin,n=Object(a.useState)({email:"",password:""}),c=Object(r.a)(n,2),i=c[0],s=c[1],o=function(e){var t=e.target,n=t.name,a=t.value;s(Object(S.a)(Object(S.a)({},i),{},Object(E.a)({},n,a)))};return Object(d.jsxs)("div",{className:"authorization",children:[Object(d.jsx)("h2",{className:"authorization__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=i.email,a=i.password;t(n,a)},className:"authorization__form",children:[Object(d.jsx)("input",{className:"authorization__input",onChange:o,value:i.email,id:"email-input",name:"email",minLength:"2",maxLength:"40",required:!0,type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"}),Object(d.jsx)("input",{className:"authorization__input",name:"password",type:"password",value:i.password,onChange:o,id:"code-input",minLength:"2",maxLength:"200",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("button",{className:"authorization__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(d.jsx)("p",{className:"authorization__caption"})]})};var P=function(e){var t=e.handleRegister,n=e.isDataSet,c=Object(a.useState)({email:"",password:""}),i=Object(r.a)(c,2),s=i[0],o=i[1],l=function(e){var t=e.target,n=t.name,a=t.value;o(Object(S.a)(Object(S.a)({},s),{},Object(E.a)({},n,a)))};return Object(a.useEffect)((function(){n&&o({email:"",password:""})}),[n]),Object(d.jsxs)("section",{className:"authorization",children:[Object(d.jsx)("h2",{className:"authorization__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=s.email,a=s.password;t(a,n)},className:"authorization__form",children:[Object(d.jsx)("input",{className:"authorization__input",id:"authorization-email",name:"email",type:"email",value:s.email,onChange:l,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"}),Object(d.jsx)("input",{className:"authorization__input",id:"authorization-password",name:"password",type:"password",value:s.password,onChange:l,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("button",{type:"submit",className:"authorization__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsxs)("p",{className:"authorization__caption",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(d.jsx)(p.b,{to:"signin",className:"authorization__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},D="https://auth.nomoreparties.co",T=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},I=n.p+"static/media/icon.1b6082f8.svg",U=n.p+"static/media/Union.7c6a020b.svg";var M=function(e){var t=e.title,n=e.isOpen,a=e.onClose,c=e.icon;return Object(d.jsx)("section",{className:"popup  ".concat(n&&"popup_active"),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{className:"popup__close",type:"button",onClick:a}),Object(d.jsx)("img",{src:c?I:U,className:"popup__icon",alt:"\u0418\u043a\u043e\u043d\u043a\u0430"}),Object(d.jsx)("h2",{className:"popup__title-authorization",children:t})]})})},q=function(e){var t=e.email,n=e.isMenuOpen,a=e.handleLogout;return Object(d.jsxs)("section",{className:n?"menu_mobile":"menu_bobile menu_hidden",children:[Object(d.jsx)("span",{className:"menu__email",children:t}),Object(d.jsx)(p.b,{to:"/sign-in",onClick:a,className:"button menu__link",children:"\u0412\u044b\u0439\u0442\u0438"})]})};var J=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],s=c.a.useState(null),l=Object(r.a)(s,2),p=l[0],j=l[1],b=c.a.useState({name:"",about:"",_id:""}),O=Object(r.a)(b,2),N=O[0],k=O[1],S=c.a.useState([]),L=Object(r.a)(S,2),z=L[0],E=L[1],I=c.a.useState({email:""}),U=Object(r.a)(I,2),J=U[0],F=U[1],R=c.a.useState(!1),B=Object(r.a)(R,2),H=B[0],G=B[1],V=c.a.useState(!1),K=Object(r.a)(V,2),Q=K[0],W=K[1],X=c.a.useState({title:"",icon:""}),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=c.a.useState(!1),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],ce=Object(u.g)();function ie(e){j(e)}Object(a.useEffect)((function(){C.getInitialCards().then((function(e){E(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){C.getUserInfo().then((function(e){k(e)})).catch((function(e){console.log(e)}))}),[k]),Object(a.useEffect)((function(){n&&ce.push("/")}),[ce,n]);var se=c.a.useState(!1),oe=Object(r.a)(se,2),re=oe[0],le=oe[1],ue=c.a.useState(!1),pe=Object(r.a)(ue,2),de=pe[0],he=pe[1],je=c.a.useState(!1),me=Object(r.a)(je,2),be=me[0],_e=me[1];function fe(){he(!1),_e(!1),le(!1),j(null),W(!1)}var Oe=function(){var e=localStorage.getItem("token");e&&function(e){return fetch("".concat(D,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(T)}(e).then((function(e){e&&(F({email:e.data.email}),i(!0))})).catch((function(e){return console.log(e)}))};function ve(){W(!0)}Object(a.useEffect)((function(){Oe()}),[]);var xe=function(){localStorage.removeItem("token"),F({email:""}),i(!1)};return Object(d.jsx)(m.Provider,{value:N,children:Object(d.jsx)("div",{className:"App",background:"#000",children:Object(d.jsx)("div",{className:"body",children:Object(d.jsxs)("div",{className:"page",children:[n&&Object(d.jsx)(q,{email:J.email,handleLogout:xe,isMenuOpen:H}),Object(d.jsx)(h,{handleLogout:xe,email:J.email,toggleMenu:function(){G(!H)},isMenuOpen:H}),Object(d.jsx)(w,{exect:!0,path:"/",loggedIn:n,cards:z,onCardLike:function(e){(e.likes.some((function(e){return e._id===N._id}))?C.removeLikeFromCard(e._id):C.setLikeForCard(e._id)).then((function(t){E((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){var t=e.owner._id===N._id;C.deleteCard(e._id,t).then((function(t){E(z.filter((function(t){return t._id!==e._id}))),fe()})).catch((function(e){console.log(e)}))},handleCardClick:ie,onEditProfile:function(){he(!0)},onAddPlace:function(){_e(!0)},onEditAvatar:function(){le(!0)},component:_}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/signin",children:Object(d.jsx)(A,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(D,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(T)})(e,t).then((function(t){t.token&&(localStorage.setItem("token",t.token),F({email:e}),i(!0),G(!1),ce.push("/"))})).catch((function(e){return console.log(e)}))}})}),Object(d.jsx)(u.b,{path:"/signup",children:Object(d.jsx)(P,{handleRegister:function(e,t){(function(e,t){return fetch("".concat(D,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(T)})(e,t).then((function(e){ae(!0),ce.push("/signin"),$({icon:!0,title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),ve()})).catch((function(){ae(!1),$({icon:!1,title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),ve()})).finally((function(){ae(!1)}))},isDataSet:ne})}),Object(d.jsx)(u.b,{path:"/",children:n?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/signin"})})]}),Object(d.jsx)(v,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClose:fe,isOpen:re,onUpdateAvatar:function(e){var t=e.avatar;C.updateAvatar(t).then((function(e){k(e),fe()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(x,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onUpdateUser:function(e){var t=e.name,n=e.about;C.updateProfile(t,n).then((function(e){k(e),fe()})).catch((function(e){console.log(e)}))},onClose:fe,isOpen:de}),Object(d.jsx)(g,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onClose:fe,isOpen:be,onAddPlace:function(e){var t=e.name,n=e.link;C.addCard(t,n).then((function(e){E([e].concat(Object(o.a)(z))),fe()}))}}),Object(d.jsx)(y,{handleCardClick:ie,onClose:fe,card:p}),Object(d.jsx)(M,{isOpen:Q,onClose:fe,title:Z.title,icon:Z.icon}),Object(d.jsx)(f,{})]})})})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(J,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.43d375f2.chunk.js.map