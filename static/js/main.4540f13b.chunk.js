(this.webpackJsonpvreacte=this.webpackJsonpvreacte||[]).push([[0],{42:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e(2),i=e(3),c=e(1),s=e(23),o=e(21),d=e(14),u=e(9);function b(){var n=Object(a.a)(["\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return n},n}function j(){var n=Object(a.a)(["\n  color: black;\n  text-decoration: none;\n  height: 48px;\n  width: 48px;\n  margin: 10px;\n"]);return j=function(){return n},n}var x=Object(i.b)(u.b)(j()),l=i.b.img(b()),f=function(n){return Object(r.jsx)(x,{to:"/user/"+n.userId,children:Object(r.jsx)(l,{src:n.src})})};function p(){var n=Object(a.a)(["\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n"]);return p=function(){return n},n}var h=Object(i.b)(u.b)(p()),m=function(n){return Object(r.jsx)(h,{to:"/user/"+n.userId,children:n.name})},O=e.p+"static/media/heart.b0e6508e.svg",g=e.p+"static/media/message.e5053226.svg";function v(){var n=Object(a.a)(["\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  margin: 6px 12px 12px 12px;\n"]);return v=function(){return n},n}function w(){var n=Object(a.a)(["\n  height: 300px;\n  width: 100%;\n  object-fit: cover;\n"]);return w=function(){return n},n}function y(){var n=Object(a.a)(["\n  margin: 12px -4px 0 4px;\n"]);return y=function(){return n},n}function I(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return I=function(){return n},n}function _(){var n=Object(a.a)(["\n  color: #999;\n  font-size: 14px;\n  margin-left: 12px;\n"]);return _=function(){return n},n}function M(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return M=function(){return n},n}function k(){var n=Object(a.a)(["\n  margin: 12px auto;\n  border: 1px solid gainsboro;\n  border-radius: 4px;\n  min-width: 360px;\n  width: 100%;\n  max-width: 600px;\n"]);return k=function(){return n},n}var z=i.b.div(k()),H=i.b.div(M()),D=i.b.p(_()),B=i.b.div(I()),U=i.b.button(y()),W=i.b.img(w()),F=i.b.pre(v());function S(n){return Object(r.jsxs)(z,{children:[Object(r.jsxs)(H,{children:[Object(r.jsx)(f,{src:n.avatar,userId:n.id}),Object(r.jsx)(m,{userId:n.id,name:n.name}),Object(r.jsx)(D,{children:n.date})]}),Object(r.jsx)(W,{src:"https://images.unsplash.com/photo-1612367197703-1e9839b09f63?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),Object(r.jsxs)(B,{children:[Object(r.jsx)(U,{children:Object(r.jsx)("img",{src:O,alt:""})}),Object(r.jsx)(U,{children:Object(r.jsx)("img",{src:g,alt:""})})]}),Object(r.jsx)(F,{children:n.text})]})}function Z(){var n=Object(a.a)(["\n  width: 100%;\n  padding: 6px 12px;\n"]);return Z=function(){return n},n}var P=i.b.div(Z());function E(n){return document.title="Posts",Object(r.jsx)(P,{children:n.getPosts().map((function(n,t){return Object(r.jsx)(S,{id:t,name:n.name,avatar:n.avatar,text:n.text,date:n.date},t)}))})}function G(){var n=Object(a.a)(["\n  color: #999;\n  font-size: 15px;\n  grid-area: status;\n"]);return G=function(){return n},n}function N(){var n=Object(a.a)(["\n  font-size: 18px;\n  font-weight: normal;\n"]);return N=function(){return n},n}function q(){var n=Object(a.a)(["\n  display: flex;\n"]);return q=function(){return n},n}var A=i.b.div(q()),J=i.b.h2(N()),V=i.b.p(G());function X(n){return document.title=n.data.users[n.userId].username+"profile",Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(A,{children:[Object(r.jsx)(f,{src:n.data.users[n.userId].avatar,userId:n.userId}),Object(r.jsx)(J,{children:n.data.users[n.userId].username}),Object(r.jsx)(V,{children:"Ban"})]}),n.getPosts(n.userId).map((function(n,t){return Object(r.jsx)(S,{id:t,name:n.name,avatar:n.avatar,text:n.text,date:n.date},t)}))]})}function Y(){var n=Object(a.a)(["\n  width: 220px;\n  height: 26px;\n  padding: 4px 12px;\n  display: block;\n  font-size: 15px;\n  text-align: center;\n  margin: 8px auto;\n  border: 1px solid gainsboro;\n  border-radius: 4px;\n  :focus {\n    text-align: left;\n  }\n"]);return Y=function(){return n},n}var T=i.b.input(Y());function C(){return Object(r.jsx)(T,{type:"text",placeholder:"Search"})}function Q(){var n=Object(a.a)(["\n  color: #999;\n  grid-area: date;\n  align-self: end;\n  font-size: 14px;\n  text-align: end;\n  margin: 12px;\n"]);return Q=function(){return n},n}function K(){var n=Object(a.a)(["\n  color: #999;\n  grid-area: text;\n  align-self: end;\n  font-size: 15px;\n"]);return K=function(){return n},n}function L(){var n=Object(a.a)(["\n  grid-area: name;\n  align-self: start;\n"]);return L=function(){return n},n}function R(){var n=Object(a.a)(["\n  height: 74px;\n  width: 100%;\n  text-decoration: none;\n  color: black;\n  display: grid;\n  grid-template-areas: 'avatar name date' 'avatar text text';\n  grid-template-columns: 74px 1fr 148px;\n  grid-template-rows: 37px 37px;\n"]);return R=function(){return n},n}function $(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return $=function(){return n},n}function nn(){var n=Object(a.a)(["\n  display: flex;\n"]);return nn=function(){return n},n}var tn=i.b.div(nn()),en=i.b.div($()),rn=Object(i.b)(u.b)(R()),an=i.b.p(L()),cn=i.b.p(K()),sn=i.b.p(Q());function on(n){return document.title="Chats",Object(r.jsx)(tn,{children:Object(r.jsxs)(en,{children:[Object(r.jsx)(C,{}),n.getDialogs().map((function(n,t){return Object(r.jsxs)(rn,{to:"/dialog/"+n.sender_id,children:[Object(r.jsx)(f,{src:n.avatar,userId:n.sender_id}),Object(r.jsx)(an,{children:n.name}),Object(r.jsx)(sn,{children:n.date}),Object(r.jsx)(cn,{children:n.text})]},t)}))]})})}var dn=e(4);function un(){var n=Object(a.a)(["\n  color: #333;\n  grid-area: text;\n  white-space: pre-wrap;\n  align-self: center;\n  padding-right: 6px;\n"]);return un=function(){return n},n}function bn(){var n=Object(a.a)(["\n  color: #999;\n  font-size: 14px;\n  grid-area: date;\n  text-align: end;\n  margin: 12px;\n"]);return bn=function(){return n},n}function jn(){var n=Object(a.a)(["\n  grid-area: name;\n  align-self: start;\n"]);return jn=function(){return n},n}function xn(){var n=Object(a.a)(["\n  width: 100%;\n  height: auto;\n  text-decoration: none;\n  color: black;\n  display: grid;\n  grid-template-areas: 'avatar name date' 'avatar text text';\n  grid-template-columns: 74px 1fr 148px;\n  grid-template-rows: 37px 1fr;\n"]);return xn=function(){return n},n}function ln(){var n=Object(a.a)([""]);return ln=function(){return n},n}function fn(){var n=Object(a.a)(["\n  margin-top: 6px;\n  display: flex;\n  flex-direction: column;\n"]);return fn=function(){return n},n}var pn=i.b.div(fn()),hn=i.b.div(ln()),mn=i.b.div(xn()),On=i.b.p(jn()),gn=i.b.p(bn()),vn=i.b.pre(un());function wn(n){return document.title="Dialog with "+n.data.users[n.userId].username,Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(pn,{children:Object(r.jsx)(hn,{children:n.getMessages(parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1))).map((function(n,t){return Object(r.jsxs)(mn,{children:[Object(r.jsx)(f,{src:n.avatar,userId:n.sender_id}),Object(r.jsx)(On,{children:n.name}),Object(r.jsx)(vn,{children:n.text}),Object(r.jsx)(gn,{children:n.date})]},t)}))})})})}var yn={currentUserId:0,users:[{id:0,username:"vpech",avatar:"https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60"},{id:1,username:"nnull",avatar:"https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"},{id:2,username:"sergejar",avatar:"https://images.unsplash.com/photo-1500389723459-ca24a5564899?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBzaGFkb3d8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60"}],messages:[{sender_id:0,recipient_id:1,text:"Sup",date:"11 Nov, 10:08"},{sender_id:1,recipient_id:0,text:"Hey",date:"11 Nov, 10:47"}],posts:[{sender_id:0,text:"\u0410\u0442\u043e\u043c\u043d\u044b\u0439 \u0431\u0430\u043d",date:"11 Nov, 17:08"},{sender_id:1,text:"The world is gonna roll me",date:"12 Nov, 17:42"}]};function In(){return new Intl.DateTimeFormat("en-GB",{month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(Date.now())}function _n(n){return document.title="Search people",Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(C,{})})}var Mn=e.p+"static/media/profile.cce85dcf.svg",kn=e.p+"static/media/home.12653022.svg",zn=e.p+"static/media/search.9e893c64.svg",Hn=e.p+"static/media/logo.3a1ea0a8.svg";function Dn(){var n=Object(a.a)(["\n  border-bottom: ",";\n  padding: 13px;\n"]);return Dn=function(){return n},n}function Bn(){var n=Object(a.a)(["\n  width: 200px;\n  height: 100%;\n  display: flex;\n"]);return Bn=function(){return n},n}function Un(){var n=Object(a.a)(["\n  width: 200px;\n  height: 100%;\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]);return Un=function(){return n},n}function Wn(){var n=Object(a.a)(["\n  height: 50px;\n  width: 100%;\n  margin: 0 auto;\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-evenly;\n  z-index: 10;\n  background: white;\n  border-bottom: 1px solid gainsboro;\n"]);return Wn=function(){return n},n}var Fn=i.b.header(Wn()),Sn=Object(i.b)(u.b)(Un()),Zn=i.b.nav(Bn()),Pn=Object(i.b)(u.b)(Dn(),(function(n){return n.active&&"2px solid black"})),En=function(n){var t=Object(c.useState)(window.location.pathname),e=Object(d.a)(t,2),a=e[0],i=e[1];return Object(dn.e)().listen((function(n){i(n.pathname)})),Object(r.jsxs)(Fn,{children:[Object(r.jsxs)(Sn,{to:"/",children:[Object(r.jsx)("img",{src:Hn,alt:""}),"Social network"]}),Object(r.jsxs)(Zn,{children:[Object(r.jsx)(Pn,{to:"/",active:"/"===a,children:Object(r.jsx)("img",{src:kn,alt:""})}),Object(r.jsx)(Pn,{to:"/search",active:a.includes("/search"),children:Object(r.jsx)("img",{src:zn,alt:""})}),Object(r.jsx)(Pn,{to:"/messenger",active:a.includes("/messenger"),children:Object(r.jsx)("img",{src:g,alt:""})}),Object(r.jsx)(Pn,{to:"/user/"+n.currentUserId,active:a.includes("/user"),children:Object(r.jsx)("img",{src:Mn,alt:""})})]})]})};function Gn(){var n=Object(a.a)(["\n  display: flex;\n"]);return Gn=function(){return n},n}function Nn(){var n=Object(a.a)(["\n  max-width: 800px;\n  width: 100%;\n  height: ",";\n  margin: 0 auto;\n  display: flex;\n"]);return Nn=function(){return n},n}var qn=i.b.div(Nn(),(function(n){return n.height})),An=i.b.div(Gn());function Jn(){var n=Object(c.useState)(yn.posts),t=Object(d.a)(n,2),e=t[0],a=t[1],i=Object(c.useState)(yn.messages),s=Object(d.a)(i,2),b=s[0],j=s[1];function x(n){n&&a((function(t){return[].concat(Object(o.a)(t),[{sender_id:yn.currentUserId,text:n,date:In()}])}))}function l(n){n&&j((function(t){return[].concat(Object(o.a)(t),[{sender_id:yn.currentUserId,recipient_id:1,text:n,date:In()}])}))}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=[];return e.forEach((function(r,a){-1===n?t.push({sender_id:e[a].sender_id,name:yn.users[e[a].sender_id].username,avatar:yn.users[e[a].sender_id].avatar,text:e[a].text,date:e[a].date}):e[a].sender_id===n&&t.push({sender_id:e[a].sender_id,name:yn.users[n].username,avatar:yn.users[n].avatar,text:e[a].text,date:e[a].date})})),t}function p(n){var t=[];return b.forEach((function(e,r){(b[r].sender_id===n&&b[r].recipient_id===yn.currentUserId||b[r].sender_id===yn.currentUserId&&b[r].recipient_id===n)&&t.push({sender_id:b[r].sender_id,name:yn.users[b[r].sender_id].username,avatar:yn.users[b[r].sender_id].avatar,text:b[r].text,date:b[r].date})})),t}function h(){var n=[];return b.forEach((function(t,e){b[e].recipient_id===yn.currentUserId&&n.push({sender_id:b[e].sender_id,name:yn.users[b[e].sender_id].username,avatar:yn.users[b[e].sender_id].avatar,text:b[e].text,date:b[e].date})})),n}return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(En,{currentUserId:yn.currentUserId}),Object(r.jsxs)(qn,{height:window.innerHeight+"px",children:[Object(r.jsx)(dn.a,{path:"/",exact:!0,component:function(){return Object(r.jsx)(E,{getPosts:f,addPost:x})}}),Object(r.jsx)(dn.a,{path:"/search",component:function(){return Object(r.jsx)(_n,{data:yn})}}),Object(r.jsx)(dn.a,{path:"/messenger",render:function(){return Object(r.jsxs)(An,{children:[Object(r.jsx)(on,{data:yn,getDialogs:h}),Object(r.jsx)(wn,{data:yn,userId:0,getMessages:p,addMessage:l})]})}}),Object(r.jsx)(dn.a,{path:"/user/",component:function(){return Object(r.jsx)(X,{data:yn,userId:parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)),getPosts:f})}}),Object(r.jsx)(dn.a,{path:"/dialog/",component:function(){return Object(r.jsx)(wn,{data:yn,userId:parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)),getMessages:p,addMessage:l})}})]})]})}function Vn(){var n=Object(a.a)(["\n\tbody {\n\t\tmargin: 0;\n\t\tfont-family: sans-serif;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t}\n\n\t:focus {\n\t\toutline: none;\n\t}\n\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tpadding: none;\n\t}\n\n\ttextarea, pre {\n\t\tresize: none;\n\t\toverflow: auto;\n\t\tfont-family: sans-serif;\n\t\tfont-style: normal;\n\t}\n"]);return Vn=function(){return n},n}var Xn=Object(i.a)(Vn());s.render(Object(r.jsxs)(c.StrictMode,{children:[Object(r.jsx)(Jn,{}),Object(r.jsx)(Xn,{})]}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4540f13b.chunk.js.map