(this.webpackJsonpvreacte=this.webpackJsonpvreacte||[]).push([[0],{47:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e(3),i=e(4),c=e(0),s=e(18),o=e(26),d=e(16),u=e(10);function b(){var t=Object(a.a)(["\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return t},t}function j(){var t=Object(a.a)(["\n  color: black;\n  text-decoration: none;\n  height: 40px;\n  width: 40px;\n  margin: 10px;\n"]);return j=function(){return t},t}var x=Object(i.b)(u.b)(j()),l=i.b.img(b()),p=function(t){return Object(r.jsx)(x,{to:"/user/"+t.userId,children:Object(r.jsx)(l,{src:t.src})})};function f(){var t=Object(a.a)(["\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n"]);return f=function(){return t},t}var h=Object(i.b)(u.b)(f()),m=function(t){return Object(r.jsx)(h,{to:"/user/"+t.userId,children:t.name})},O=e.p+"static/media/heart.b0e6508e.svg",g=e.p+"static/media/message.e5053226.svg";function v(){var t=Object(a.a)(["\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  margin: 6px 12px 12px 12px;\n"]);return v=function(){return t},t}function w(){var t=Object(a.a)(["\n  height: 300px;\n  width: 100%;\n  object-fit: cover;\n"]);return w=function(){return t},t}function _(){var t=Object(a.a)(["\n  margin: 12px -4px 0 4px;\n"]);return _=function(){return t},t}function y(){var t=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return y=function(){return t},t}function I(){var t=Object(a.a)(["\n  color: #999;\n  font-size: 14px;\n  margin-left: 12px;\n"]);return I=function(){return t},t}function M(){var t=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return M=function(){return t},t}function k(){var t=Object(a.a)(["\n  margin: 12px auto;\n  border: 1px solid gainsboro;\n  border-radius: 4px;\n  min-width: 360px;\n  width: 100%;\n  max-width: 600px;\n"]);return k=function(){return t},t}var z=i.b.div(k()),H=i.b.div(M()),D=i.b.p(I()),S=i.b.div(y()),B=i.b.button(_()),U=i.b.img(w()),W=i.b.pre(v());function F(t){return Object(r.jsxs)(z,{children:[Object(r.jsxs)(H,{children:[Object(r.jsx)(p,{src:t.avatar,userId:t.id}),Object(r.jsx)(m,{userId:t.id,name:t.name}),Object(r.jsx)(D,{children:t.date})]}),Object(r.jsx)(U,{src:"https://images.unsplash.com/photo-1612367197703-1e9839b09f63?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),Object(r.jsxs)(S,{children:[Object(r.jsx)(B,{children:Object(r.jsx)("img",{src:O,alt:""})}),Object(r.jsx)(B,{children:Object(r.jsx)("img",{src:g,alt:""})})]}),Object(r.jsx)(W,{children:t.text})]})}var Z=e(31),A=e(11),P=A.b.model({sender_id:A.b.number,text:A.b.string,date:A.b.string}),E=A.b.model({posts:A.b.map(P)}).actions((function(t){return{createPost:function(n,e,r){t.posts.set(Math.floor(100*Math.random()).toString(),P.create({sender_id:n,text:e,date:r})),console.log(Object(A.a)(E))}}})).create({posts:{}}),G=E;function N(){var t=Object(a.a)(["\n  width: 100%;\n  padding: 6px 12px;\n"]);return N=function(){return t},t}var q=i.b.div(N()),J=Object(Z.a)((function(t){return Object(r.jsxs)(q,{children:[Object(r.jsx)("button",{onClick:function(){return G.createPost(2,"ban","1 april")},children:"Add post"}),Object.values(Object(A.a)(G).posts).map((function(t,n){return Object(r.jsx)(F,{id:n,name:"vpech",avatar:"a",text:t.text,date:t.date},n)}))]})}));function V(){var t=Object(a.a)(["\n  color: #999;\n  font-size: 15px;\n  grid-area: status;\n"]);return V=function(){return t},t}function X(){var t=Object(a.a)(["\n  font-size: 18px;\n  font-weight: normal;\n"]);return X=function(){return t},t}function Y(){var t=Object(a.a)(["\n  display: flex;\n"]);return Y=function(){return t},t}var C=i.b.div(Y()),Q=i.b.h2(X()),T=i.b.p(V());function K(t){return document.title=t.data.users[t.userId].username+"profile",Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(C,{children:[Object(r.jsx)(p,{src:t.data.users[t.userId].avatar,userId:t.userId}),Object(r.jsx)(Q,{children:t.data.users[t.userId].username}),Object(r.jsx)(T,{children:"Ban"})]}),t.getPosts(t.userId).map((function(t,n){return Object(r.jsx)(F,{id:n,name:t.name,avatar:t.avatar,text:t.text,date:t.date},n)}))]})}function L(){var t=Object(a.a)(["\n  width: 220px;\n  height: 26px;\n  padding: 4px 12px;\n  display: block;\n  font-size: 15px;\n  text-align: center;\n  margin: 8px auto;\n  border: 1px solid gainsboro;\n  border-radius: 4px;\n  :focus {\n    text-align: left;\n  }\n"]);return L=function(){return t},t}var R=i.b.input(L());function $(){return Object(r.jsx)(R,{type:"text",placeholder:"Search"})}function tt(){var t=Object(a.a)(["\n  color: #999;\n  grid-area: date;\n  align-self: end;\n  font-size: 14px;\n  text-align: end;\n  margin: 12px;\n"]);return tt=function(){return t},t}function nt(){var t=Object(a.a)(["\n  color: #999;\n  grid-area: text;\n  align-self: end;\n  font-size: 15px;\n"]);return nt=function(){return t},t}function et(){var t=Object(a.a)(["\n  grid-area: name;\n  align-self: start;\n"]);return et=function(){return t},t}function rt(){var t=Object(a.a)(["\n  height: 74px;\n  width: 100%;\n  text-decoration: none;\n  color: black;\n  display: grid;\n  grid-template-areas: 'avatar name date' 'avatar text text';\n  grid-template-columns: 74px 1fr 148px;\n  grid-template-rows: 37px 37px;\n"]);return rt=function(){return t},t}function at(){var t=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return at=function(){return t},t}function it(){var t=Object(a.a)(["\n  display: flex;\n"]);return it=function(){return t},t}var ct=i.b.div(it()),st=i.b.div(at()),ot=Object(i.b)(u.b)(rt()),dt=i.b.p(et()),ut=i.b.p(nt()),bt=i.b.p(tt());function jt(t){return document.title="Chats",Object(r.jsx)(ct,{children:Object(r.jsxs)(st,{children:[Object(r.jsx)($,{}),t.getDialogs().map((function(t,n){return Object(r.jsxs)(ot,{to:"/dialog/"+t.sender_id,children:[Object(r.jsx)(p,{src:t.avatar,userId:t.sender_id}),Object(r.jsx)(dt,{children:t.name}),Object(r.jsx)(bt,{children:t.date}),Object(r.jsx)(ut,{children:t.text})]},n)}))]})})}var xt=e(5);function lt(){var t=Object(a.a)(["\n  color: #333;\n  grid-area: text;\n  white-space: pre-wrap;\n  align-self: center;\n  padding-right: 6px;\n"]);return lt=function(){return t},t}function pt(){var t=Object(a.a)(["\n  color: #999;\n  font-size: 14px;\n  grid-area: date;\n  text-align: end;\n  margin: 12px;\n"]);return pt=function(){return t},t}function ft(){var t=Object(a.a)(["\n  grid-area: name;\n  align-self: start;\n"]);return ft=function(){return t},t}function ht(){var t=Object(a.a)(["\n  width: 100%;\n  height: auto;\n  text-decoration: none;\n  color: black;\n  display: grid;\n  grid-template-areas: 'avatar name date' 'avatar text text';\n  grid-template-columns: 74px 1fr 148px;\n  grid-template-rows: 37px 1fr;\n"]);return ht=function(){return t},t}function mt(){var t=Object(a.a)([""]);return mt=function(){return t},t}function Ot(){var t=Object(a.a)(["\n  margin-top: 6px;\n  display: flex;\n  flex-direction: column;\n"]);return Ot=function(){return t},t}var gt=i.b.div(Ot()),vt=i.b.div(mt()),wt=i.b.div(ht()),_t=i.b.p(ft()),yt=i.b.p(pt()),It=i.b.pre(lt());function Mt(t){return document.title="Dialog with "+t.data.users[t.userId].username,Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(gt,{children:Object(r.jsx)(vt,{children:t.getMessages(parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1))).map((function(t,n){return Object(r.jsxs)(wt,{children:[Object(r.jsx)(p,{src:t.avatar,userId:t.sender_id}),Object(r.jsx)(_t,{children:t.name}),Object(r.jsx)(It,{children:t.text}),Object(r.jsx)(yt,{children:t.date})]},n)}))})})})}var kt={currentUserId:0,users:[{id:0,username:"vpech",avatar:"https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60"},{id:1,username:"nnull",avatar:"https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"},{id:2,username:"sergejar",avatar:"https://images.unsplash.com/photo-1500389723459-ca24a5564899?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBzaGFkb3d8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60"}],messages:[{sender_id:0,recipient_id:1,text:"Sup",date:"11 Nov, 10:08"},{sender_id:1,recipient_id:0,text:"Hey",date:"11 Nov, 10:47"}],posts:[{sender_id:0,text:"Sample post, u know",date:"11 Nov, 17:08"},{sender_id:1,text:"Another sample post",date:"12 Nov, 17:42"}]};function zt(){return new Intl.DateTimeFormat("en-GB",{month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(Date.now())}function Ht(t){return document.title="Search people",Object(r.jsx)(r.Fragment,{children:Object(r.jsx)($,{})})}var Dt=e.p+"static/media/profile.cce85dcf.svg",St=e.p+"static/media/home.12653022.svg",Bt=e.p+"static/media/search.9e893c64.svg",Ut=e.p+"static/media/logo.3a1ea0a8.svg";function Wt(){var t=Object(a.a)(["\n  border-bottom: ",";\n  padding: 13px;\n"]);return Wt=function(){return t},t}function Ft(){var t=Object(a.a)(["\n  width: 200px;\n  height: 100%;\n  display: flex;\n"]);return Ft=function(){return t},t}function Zt(){var t=Object(a.a)(["\n  width: 200px;\n  height: 100%;\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]);return Zt=function(){return t},t}function At(){var t=Object(a.a)(["\n  height: 50px;\n  width: 100%;\n  margin: 0 auto;\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-evenly;\n  z-index: 10;\n  background: white;\n  border-bottom: 1px solid gainsboro;\n"]);return At=function(){return t},t}var Pt=i.b.header(At()),Et=Object(i.b)(u.b)(Zt()),Gt=i.b.nav(Ft()),Nt=Object(i.b)(u.b)(Wt(),(function(t){return t.active&&"2px solid black"})),qt=function(t){var n=Object(c.useState)(window.location.pathname),e=Object(d.a)(n,2),a=e[0],i=e[1];return Object(xt.e)().listen((function(t){i(t.pathname)})),Object(r.jsxs)(Pt,{children:[Object(r.jsxs)(Et,{to:"/",children:[Object(r.jsx)("img",{src:Ut,alt:""}),"Social network"]}),Object(r.jsxs)(Gt,{children:[Object(r.jsx)(Nt,{to:"/",active:"/"===a,children:Object(r.jsx)("img",{src:St,alt:""})}),Object(r.jsx)(Nt,{to:"/search",active:a.includes("/search"),children:Object(r.jsx)("img",{src:Bt,alt:""})}),Object(r.jsx)(Nt,{to:"/messenger",active:a.includes("/messenger"),children:Object(r.jsx)("img",{src:g,alt:""})}),Object(r.jsx)(Nt,{to:"/user/"+t.currentUserId,active:a.includes("/user"),children:Object(r.jsx)("img",{src:Dt,alt:""})})]})]})};function Jt(){var t=Object(a.a)(["\n  display: flex;\n"]);return Jt=function(){return t},t}function Vt(){var t=Object(a.a)(["\n  max-width: 800px;\n  width: 100%;\n  height: ",";\n  margin: 0 auto;\n  display: flex;\n"]);return Vt=function(){return t},t}var Xt=i.b.div(Vt(),(function(t){return t.height})),Yt=i.b.div(Jt());function Ct(){var t=Object(c.useState)(kt.posts),n=Object(d.a)(t,2),e=n[0],a=n[1],i=Object(c.useState)(kt.messages),s=Object(d.a)(i,2),b=s[0],j=s[1];function x(t){t&&a((function(n){return[].concat(Object(o.a)(n),[{sender_id:kt.currentUserId,text:t,date:zt()}])}))}function l(t){t&&j((function(n){return[].concat(Object(o.a)(n),[{sender_id:kt.currentUserId,recipient_id:1,text:t,date:zt()}])}))}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,n=[];return e.forEach((function(r,a){-1===t?n.push({sender_id:e[a].sender_id,name:kt.users[e[a].sender_id].username,avatar:kt.users[e[a].sender_id].avatar,text:e[a].text,date:e[a].date}):e[a].sender_id===t&&n.push({sender_id:e[a].sender_id,name:kt.users[t].username,avatar:kt.users[t].avatar,text:e[a].text,date:e[a].date})})),n}function f(t){var n=[];return b.forEach((function(e,r){(b[r].sender_id===t&&b[r].recipient_id===kt.currentUserId||b[r].sender_id===kt.currentUserId&&b[r].recipient_id===t)&&n.push({sender_id:b[r].sender_id,name:kt.users[b[r].sender_id].username,avatar:kt.users[b[r].sender_id].avatar,text:b[r].text,date:b[r].date})})),n}function h(){var t=[];return b.forEach((function(n,e){b[e].recipient_id===kt.currentUserId&&t.push({sender_id:b[e].sender_id,name:kt.users[b[e].sender_id].username,avatar:kt.users[b[e].sender_id].avatar,text:b[e].text,date:b[e].date})})),t}return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(qt,{currentUserId:kt.currentUserId}),Object(r.jsxs)(Xt,{height:window.innerHeight+"px",children:[Object(r.jsx)(xt.a,{path:"/",exact:!0,component:function(){return Object(r.jsx)(J,{getPosts:p,addPost:x})}}),Object(r.jsx)(xt.a,{path:"/search",component:function(){return Object(r.jsx)(Ht,{data:kt})}}),Object(r.jsx)(xt.a,{path:"/messenger",render:function(){return Object(r.jsxs)(Yt,{children:[Object(r.jsx)(jt,{data:kt,getDialogs:h}),Object(r.jsx)(Mt,{data:kt,userId:0,getMessages:f,addMessage:l})]})}}),Object(r.jsx)(xt.a,{path:"/user/",component:function(){return Object(r.jsx)(K,{data:kt,userId:parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)),getPosts:p})}}),Object(r.jsx)(xt.a,{path:"/dialog/",component:function(){return Object(r.jsx)(Mt,{data:kt,userId:parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)),getMessages:f,addMessage:l})}})]})]})}function Qt(){var t=Object(a.a)(["\n\tbody {\n\t\tmargin: 0;\n\t\tfont-family: sans-serif;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t}\n\n\t:focus {\n\t\toutline: none;\n\t}\n\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tpadding: none;\n\t}\n\n\ttextarea, pre {\n\t\tresize: none;\n\t\toverflow: auto;\n\t\tfont-family: sans-serif;\n\t\tfont-style: normal;\n\t}\n"]);return Qt=function(){return t},t}var Tt=Object(i.a)(Qt());s.render(Object(r.jsxs)(c.StrictMode,{children:[Object(r.jsx)(Ct,{}),Object(r.jsx)(Tt,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e11f580f.chunk.js.map