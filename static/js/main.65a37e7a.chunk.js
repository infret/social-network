(this["webpackJsonpsocial network"]=this["webpackJsonpsocial network"]||[]).push([[0],{47:function(e,t,n){"use strict";n.r(t);var r=n(12),s=n(22),i=n.n(s),o=n(27),a=n(3),c=n(2),d=n(18),u=n.n(d),l=n(1),b=n.n(l),p=n.p+"static/media/heart.d2ce417e.svg",x=n.p+"static/media/heart-fill.b74f501e.svg",h=n(5),j=h.a.model({id:h.a.number,img:h.a.string,date:h.a.number}),f=h.a.model({recipient_id:h.a.number,text:h.a.string,date:h.a.number}),m=h.a.model({post_id:h.a.number,text:h.a.string,date:h.a.number}),g=h.a.model({id:h.a.number,username:h.a.string,avatar:h.a.string,status:h.a.string,posts:h.a.array(j),messages:h.a.array(f),comments:h.a.array(m),following:h.a.array(h.a.number),likedPosts:h.a.array(h.a.number)});function w(e){var t=Math.round((Date.now()/1e3-e)/60);return t<=1?"just now":t>1&&t<60?Math.round(t)+" minutes ago":t>60&&t<1440?1===Math.round(t/60)?"1 hour ago":Math.round(t/60)+" hours ago":t>1440&&t<43829.1?1===Math.round(t/1440)?"1 day ago":Math.round(t/1440)+" days ago":t>43829.1&&t<525949.2?1===Math.round(t/43829.1)?"1 month ago":Math.round(t/43829.1)+" months ago":t>525949.2?1===Math.round(t/525949.2)?"1 year ago":Math.round(t/525949.2)+"years ago":void 0}var O,k,v,y=h.a.model({currentUserId:h.a.number,searchBy:h.a.string,users:h.a.array(g)}).actions((function(e){return{createUser:function(t,n,r){""!==n?e.users.push({id:e.users.length,username:t,avatar:n,status:r,posts:[],messages:[],comments:[],following:[],likedPosts:[]}):e.users.push({id:e.users.length,username:t,avatar:"https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1427&q=80",status:r,posts:[],messages:[],comments:[],following:[],likedPosts:[]})},createPost:function(t){t?e.users[e.currentUserId].posts.push({id:e.users[e.currentUserId].posts.length+1,img:t,date:Date.now()/1e3}):alert("No image provided")},createMessage:function(t,n){e.users[e.currentUserId].messages.push({recipient_id:n,text:t,date:Date.now()/1e3})},createComment:function(t,n){e.users[e.currentUserId].comments.push({post_id:n,text:t,date:Date.now()/1e3})},toggleLike:function(t){e.users[e.currentUserId].likedPosts.includes(t)?e.users[e.currentUserId].likedPosts.splice(e.users[e.currentUserId].likedPosts.indexOf(t),1):e.users[e.currentUserId].likedPosts.push(t)},toggleFollow:function(t){e.users[e.currentUserId].following.includes(t)?e.users[e.currentUserId].following.splice(e.users[e.currentUserId].following.indexOf(t),1):e.users[e.currentUserId].following.push(t)},setSearch:function(t){e.searchBy=t},setCurrentUser:function(t){e.currentUserId=t?e.users.filter((function(e){return e.username===t}))[0].id:-1},loadStore:function(){var t=JSON.parse(localStorage.getItem("store"));e.users=t.users,e.currentUserId=t.currentUserId,e.searchBy=t.searchBy}}})).create({currentUserId:-1,searchBy:"",users:[{id:0,username:"infret",avatar:"https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60",status:"The Creator in person",posts:[{id:0,date:161384e4,img:"https://images.unsplash.com/photo-1613572596126-23969094b944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},{id:4,date:1613849e3,img:"https://images.unsplash.com/photo-1613586020253-fb6fe0b04269?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"}],messages:[{recipient_id:1,text:"Sup",date:1613847e3},{recipient_id:2,text:"How are you?",date:161384e4}],comments:[{post_id:0,text:"Sample post with text and image",date:161384e4},{post_id:3,text:"Sample comment with a ton of post-related text. There are so many words that they look like they wouldn't fit, but they do with some text wrapping and comment sizing.",date:1613899e3},{post_id:2,text:"Sample comment",date:1613847e3}],following:[1,2,3,4],likedPosts:[3,4]},{id:1,username:"ryanmiller",avatar:"https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",status:"Somewhat busy nowadays",posts:[{id:1,date:161382e4,img:"https://images.unsplash.com/photo-1613568409506-e70370442e6e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"}],messages:[{recipient_id:0,text:"Hey",date:1613848e3}],comments:[{post_id:1,text:"Sample post from me",date:161382e4}],following:[0],likedPosts:[1]},{id:2,username:"russelcooper",avatar:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",status:"All everybody wants is to drink molten chocolate in front of the window in the rainy day",posts:[{id:2,date:16137e5,img:"https://images.unsplash.com/photo-1564869115811-96da66f0557f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwZ3JlZW58ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"}],messages:[{recipient_id:0,text:"I'm fine. What's about you?",date:1613848e3}],comments:[{post_id:3,text:"Another sample comment",date:1613847e3}],following:[0,1,4],likedPosts:[3]},{id:3,username:"anastasialeonore",avatar:"https://images.unsplash.com/photo-1511963211013-83bba110595d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",status:"Self-taught photographer",posts:[],messages:[],comments:[{post_id:3,text:"More sample comments on this post!",date:1613849e3}],following:[0,2],likedPosts:[1,3,4]},{id:4,username:"alicehierro",avatar:"https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2lsaG91ZXR0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",status:"be better than you were yesterday!",posts:[{id:3,text:"",date:1613841e3,img:"https://images.unsplash.com/photo-1613591767283-c120294bb16b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"}],messages:[],comments:[{post_id:3,text:"Post with some text about this and that",date:1614e6},{post_id:4,text:"Sample comment from sample user",date:1613847e3}],following:[0,1],likedPosts:[]}]}),I=n(9),M=n(0),U=Object(c.b)(I.b)(O||(O=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n"]))),H=c.b.p(k||(k=Object(a.a)(["\n  color: black;\n  text-decoration: none;\n  font-weight: 600;\n"]))),D=c.b.img(v||(v=Object(a.a)(["\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n  object-fit: cover;\n"])));function z(e){return Object(M.jsxs)(U,{to:e.link+e.user.id,children:[Object(M.jsx)(D,{src:e.user.avatar}),Object(M.jsx)(H,{children:e.user.username})]})}var B,S,P,C,_,Z,W,A,G,X,L,Y,q,V,J,F=n(6),N=n.p+"static/media/confirm.68abc7e1.svg",E=c.b.div(B||(B=Object(a.a)(["\n  display: flex;\n  height: ",";\n  align-items: center;\n  padding: 16px 0 4px 0;\n  width: 100%;\n"])),(function(e){return e.height+"px"})),$=c.b.textarea(S||(S=Object(a.a)(["\n  width: 100%;\n  font-size: 15px;\n  height: 100%;\n  vertical-align: middle;\n  margin: 0 0 0 12px;\n"]))),R=c.b.button(P||(P=Object(a.a)(["\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100%;\n  width: 40px;\n  margin: 0 8px 12px 4px;\n  background-image: url(",");\n  cursor: pointer;\n"])),N);function T(e){var t=Object(l.useRef)(),n=Object(l.useState)(30),s=Object(r.a)(n,2),i=s[0],o=s[1];return Object(M.jsxs)(E,{height:i,children:[Object(M.jsx)($,{ref:t,onChange:function(){i<100&&o(t.current.scrollHeight),""===t.current.value&&o(30)},placeholder:e.placeholder}),Object(M.jsx)(R,{onClick:function(){t.current.value&&e.onclick(t.current.value,e.id),t.current.value="",o(30)}})]})}var K,Q,ee,te,ne,re,se,ie,oe,ae,ce,de,ue,le,be,pe,xe,he,je,fe,me,ge,we,Oe,ke,ve,ye,Ie,Me,Ue,He,De,ze,Be,Se,Pe,Ce,_e,Ze,We=c.b.div(C||(C=Object(a.a)(["\n  margin: 10px auto;\n  border: 1px solid gainsboro;\n  display: inline-flex;\n  flex-wrap: wrap;\n  height: 640px;\n  box-sizing: border-box;\n\n  @media (max-width: 640px) {\n    height: auto;\n    border-left: none;\n    border-right: none;\n  }\n"]))),Ae=c.b.img(_||(_=Object(a.a)(["\n  height: 100%;\n  max-width: 678px;\n  width: 50vw;\n  object-fit: cover;\n\n  @media (max-width: 640px) {\n    width: 100%;\n    max-height: 480px;\n  }\n"]))),Ge=c.b.div(Z||(Z=Object(a.a)(["\n  width: 320px;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media (max-width: 640px) {\n    max-height: 280px;\n    width: 100%;\n    height: auto;\n  }\n"]))),Xe=c.b.div(W||(W=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]))),Le=c.b.p(A||(A=Object(a.a)(["\n  color: grey;\n  font-size: 13px;\n  white-space: nowrap;\n  margin-right: 10px;\n"]))),Ye=c.b.div(G||(G=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  background: white;\n  border-top: 1px solid gainsboro;\n  width: 100%;\n  margin-top: 4px;\n"]))),qe=c.b.button(X||(X=Object(a.a)(["\n  margin: 0 0 0 8px;\n  cursor: pointer;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100%;\n  width: 40px;\n"])),(function(e){return e.icon})),Ve=c.b.div(L||(L=Object(a.a)(["\n  padding: 6px 12px;\n"]))),Je=Object(c.b)(I.b)(Y||(Y=Object(a.a)(["\n  font-size: 14px;\n  font-weight: bold;\n  margin-right: 6px;\n"]))),Fe=c.b.p(q||(q=Object(a.a)(["\n  font-size: 14px;\n  word-break: break-word;\n  white-space: pre-wrap;\n"]))),Ne=c.b.p(V||(V=Object(a.a)(["\n  color: grey;\n  font-size: 12px;\n  white-space: nowrap;\n  margin-left: 6px;\n  display: inline;\n"]))),Ee=c.b.div(J||(J=Object(a.a)(["\n  overflow: auto;\n  max-height: 560px;\n  @media (max-width: 640px) {\n    max-height: 160px;\n  }\n"]))),$e=Object(F.a)((function(e){var t=[];return e.store.users.map((function(n){return n.comments.filter((function(t){return t.post_id===e.id})).sort((function(e,t){return t.date-e.date})).map((function(e){return t.push({user:n,text:e.text,date:e.date})}))})),Object(M.jsxs)(We,{children:[e.img&&Object(M.jsx)(Ae,{src:e.img}),Object(M.jsxs)(Ge,{children:[Object(M.jsxs)("div",{children:[Object(M.jsxs)(Xe,{children:[Object(M.jsx)(z,{user:e.user,link:"/social-network/user/"}),Object(M.jsx)(Le,{children:w(e.date)})]}),t&&Object(M.jsx)(Ee,{children:t.sort((function(e,t){return e.date-t.date})).map((function(e){return Object(M.jsx)(Ve,{children:Object(M.jsxs)(Fe,{children:[Object(M.jsx)(Je,{to:"/social-network/user/"+e.user.id,children:e.user.username}),e.text,Object(M.jsx)(Ne,{children:w(e.date).match(/^[0-9]*\s[a-z]/)})]})})}))})]}),Object(M.jsxs)(Ye,{children:[Object(M.jsx)(qe,{onClick:function(){return e.store.toggleLike(e.id)},icon:e.store.users[e.store.currentUserId].likedPosts.includes(e.id)?x:p}),e.likes>0&&e.likes,Object(M.jsx)(T,{onclick:e.store.createComment,id:e.id,placeholder:"Add a comment"})]})]})]})})),Re=c.b.div(K||(K=Object(a.a)(["\n  width: 100%;\n  padding: 5px 0;\n  display: flex;\n  flex-direction: column;\n"]))),Te=c.b.h1(Q||(Q=Object(a.a)(["\n  font-size: 18px;\n  margin: 10px 0;\n  text-align: center;\n"]))),Ke=Object(c.b)(I.b)(ee||(ee=Object(a.a)(["\n  color: dodgerblue;\n"]))),Qe=Object(F.a)((function(e){document.title="Social network";var t=[];return e.store.users.map((function(n){return e.store.users[e.store.currentUserId].following.includes(n.id)&&n.posts.map((function(r){return t.push({id:r.id,user:e.store.users[n.id],date:r.date,img:r.img,likes:e.store.users.filter((function(e){return e.likedPosts.includes(r.id)})).length})}))})),Object(M.jsx)(Re,{children:e.store.users[e.store.currentUserId].following.length?t.sort((function(e,t){return t.date-e.date})).map((function(t){return Object(M.jsx)($e,{id:t.id,user:t.user,date:t.date,img:t.img,likes:t.likes,store:e.store})})):Object(M.jsxs)(Te,{children:["You don't follow anyone yet, consider",Object(M.jsxs)(Ke,{to:"/social-network/explore",children:[" ","searching for posts and people to follow"]})]})})})),et=c.b.div(te||(te=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px 0;\n"]))),tt=c.b.div(ne||(ne=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),nt=c.b.img(re||(re=Object(a.a)(["\n  height: 30vw;\n  width: 30vw;\n  max-width: 120px;\n  max-height: 120px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 12px;\n"]))),rt=c.b.div(se||(se=Object(a.a)(["\n  width: 100%;\n  max-width: 320px;\n"]))),st=c.b.h2(ie||(ie=Object(a.a)(["\n  font-size: 20px;\n"]))),it=c.b.button(oe||(oe=Object(a.a)(["\n  border-radius: 4px;\n  border: 1px solid gainsboro;\n  padding: 0 12px;\n  height: 30px;\n  margin: 6px;\n  font-size: 14px;\n  cursor: pointer;\n"]))),ot=Object(c.b)(I.b)(ae||(ae=Object(a.a)(["\n  border-radius: 4px;\n  border: 1px solid gainsboro;\n  padding: 6px 12px;\n  margin: 6px;\n  font-size: 14px;\n"]))),at=c.b.pre(ce||(ce=Object(a.a)(["\n  word-break: break-word;\n  white-space: pre-wrap;\n  margin: 6px 12px;\n"]))),ct=c.b.div(de||(de=Object(a.a)(["\n  width: 100%;\n"]))),dt=c.b.div(ue||(ue=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 0 12px;\n"]))),ut=Object(F.a)((function(e){return document.title=e.store.users[e.userId].username+" profile",Object(M.jsxs)(et,{children:[Object(M.jsxs)(tt,{children:[Object(M.jsx)(nt,{src:e.store.users[e.userId].avatar}),Object(M.jsxs)(rt,{children:[Object(M.jsxs)(dt,{children:[Object(M.jsx)(st,{children:e.store.users[e.userId].username}),e.userId!==e.store.currentUserId?Object(M.jsxs)("div",{children:[Object(M.jsx)(ot,{to:"/social-network/chat/"+e.userId,children:"Message"}),Object(M.jsx)(it,{onClick:function(){return e.store.toggleFollow(e.userId)},children:e.store.users[e.store.currentUserId].following.includes(e.userId)?"Unfollow":"Follow"})]}):Object(M.jsx)(it,{onClick:function(){return e.store.setCurrentUser()},children:"Logout"})]}),Object(M.jsx)(at,{children:e.store.users[e.userId].status}),Object(M.jsxs)(dt,{children:[e.store.users[e.userId].posts.length," post",1!=e.store.users[e.userId].posts.length&&"s",Object(M.jsxs)(I.b,{to:"/social-network/user/"+e.userId+"/followers",children:[e.store.users.filter((function(t){return t.following.includes(e.userId)})).length," ","follower",1!=e.store.users.filter((function(t){return t.following.includes(e.userId)})).length&&"s"]}),Object(M.jsxs)(I.b,{to:"/social-network/user/"+e.userId+"/following",children:[e.store.users[e.userId].following.length," following"]})]})]})]}),Object(M.jsx)(ct,{children:e.store.users[e.userId].posts.slice().sort((function(e,t){return t.date-e.date})).map((function(t){return Object(M.jsx)($e,{id:t.id,user:e.store.users[e.userId],date:t.date,img:t.img,likes:e.store.users.filter((function(e){return e.likedPosts.includes(t.id)})).length,store:e.store})}))})]})})),lt=c.b.div(le||(le=Object(a.a)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 5px 0;\n  grid-area: 'chats';\n  @media (min-width: 640px) {\n    width: 320px;\n    border-left: 1px solid gainsboro;\n  }\n"]))),bt=Object(F.a)((function(e){var t=[];return e.store.users.filter((function(n){return n.id!==e.store.currentUserId&&n.messages.filter((function(r){return r.recipient_id===e.store.currentUserId&&t.push(n)}))})),e.store.users[e.store.currentUserId].messages.map((function(n){return t.push(e.store.users[n.recipient_id])})),document.title="Chats",Object(M.jsx)(lt,{children:t.filter((function(e,n){return t.indexOf(e)===n})).map((function(e){return Object(M.jsx)(z,{user:e,link:"/social-network/chat/"})}))})})),pt=n(7),xt=c.b.div(be||(be=Object(a.a)(["\n  height: ",";\n  width: 100%;\n  grid-area: 'chat';\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  border-left: 1px solid gainsboro;\n  border-right: 1px solid gainsboro;\n"])),(function(e){return e.height})),ht=c.b.div(pe||(pe=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid gainsboro;\n"]))),jt=c.b.div(xe||(xe=Object(a.a)(["\n  max-width: 680px;\n  min-width: 320px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  overflow: auto;\n"]))),ft=c.b.div(he||(he=Object(a.a)(["\n  border: 1px solid gainsboro;\n  border-radius: 15px;\n  max-width: 320px;\n  padding: 10px 14px;\n  margin: 2px 12px;\n  word-break: break-word;\n  white-space: pre-wrap;\n"]))),mt=c.b.div(je||(je=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),gt=c.b.p(fe||(fe=Object(a.a)(["\n  color: grey;\n  font-size: 13px;\n  white-space: nowrap;\n  margin: 15px;\n"]))),wt=c.b.div(me||(me=Object(a.a)(["\n  width: 100%;\n  max-width: 680px;\n  border-top: 1px solid gainsboro;\n"]))),Ot=c.b.h2(ge||(ge=Object(a.a)(["\n  height: 50px;\n  width: 100%;\n  margin: auto 0;\n  text-align: center;\n"]))),kt=Object(F.a)((function(e){return e.userId>=0?document.title="Chat with "+e.store.users[e.userId].username:document.title="Chats",Object(M.jsxs)(xt,{height:window.innerHeight-52+"px",children:[e.userId>=0&&Object(M.jsx)(ht,{children:Object(M.jsx)(z,{user:e.store.users[e.userId],link:"/social-network/user/"})}),Object(M.jsx)(jt,{children:e.userId>=0?function(){var t=[];return e.userId>=0&&e.store.users[e.store.currentUserId].messages.map((function(n){return n.recipient_id===e.userId&&t.push(n)}))&&e.store.users[e.userId].messages.map((function(n){return n.recipient_id===e.store.currentUserId&&t.push(n)})),t}().sort((function(e,t){return t.date-e.date})).map((function(t){return t.recipient_id!==e.store.currentUserId?Object(M.jsxs)(mt,{children:[Object(M.jsx)(gt,{children:w(t.date)}),Object(M.jsx)(ft,{children:t.text})]}):Object(M.jsxs)(mt,{children:[Object(M.jsx)(ft,{children:t.text}),Object(M.jsx)(gt,{children:w(t.date)})]})})):Object(M.jsx)(Ot,{children:"Select chat"})}),e.userId>=0&&Object(M.jsx)(wt,{children:Object(M.jsx)(T,{onclick:e.store.createMessage,id:e.userId,placeholder:"Add a message"})})]})})),vt=n.p+"static/media/close.002509ae.svg",yt=c.b.div(we||(we=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 6px;\n  position: relative;\n"]))),It=c.b.div(Oe||(Oe=Object(a.a)(["\n  width: 300px;\n  height: 36px;\n  margin: 8px auto;\n  border: 1px solid gainsboro;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n"]))),Mt=c.b.input(ke||(ke=Object(a.a)(["\n  width: calc(100% - 30px);\n  height: 100%;\n  font-size: 15px;\n  margin-left: 10px;\n"]))),Ut=c.b.button(ve||(ve=Object(a.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 22px;\n  width: 22px;\n  justify-self: end;\n  margin-right: 10px;\n"])),vt),Ht=c.b.div(ye||(ye=Object(a.a)(["\n  width: 300px;\n  margin: 0 auto;\n  max-height: 500px;\n  overflow-x: auto;\n  background-color: white;\n  border: 1px solid gainsboro;\n  position: absolute;\n  top: 50px;\n"]))),Dt=c.b.div(Ie||(Ie=Object(a.a)(["\n  width: 100%;\n"]))),zt=Object(F.a)((function(e){return document.title="Search and explore",Object(M.jsxs)(yt,{children:[Object(M.jsxs)(It,{children:[Object(M.jsx)(Mt,{type:"search",placeholder:"Search",value:e.store.searchBy,onChange:function(t){return e.store.setSearch(t.target.value.toLowerCase())}}),e.store.searchBy&&Object(M.jsx)(Ut,{onClick:function(){return e.store.setSearch("")}})]}),e.store.searchBy&&Object(M.jsx)(Ht,{children:e.store.users.filter((function(t){return t.username.includes(e.store.searchBy)})).map((function(e){return Object(M.jsx)(z,{user:e,link:"/social-network/user/"})}))}),Object(M.jsx)(Dt,{children:e.store.users.map((function(t){return t.posts.map((function(n){return Object(M.jsx)($e,{id:n.id,user:e.store.users[t.id],date:n.date,img:n.img,likes:e.store.users.filter((function(e){return e.likedPosts.includes(n.id)})).length,store:e.store})}))}))})]})})),Bt=n.p+"static/media/profile.93d9f700.svg",St=n.p+"static/media/home.799802eb.svg",Pt=n.p+"static/media/message.7b1bbd1c.svg",Ct=n.p+"static/media/search.a0e0f0d9.svg",_t=n.p+"static/media/plus.25b758c5.svg",Zt=c.b.header(Me||(Me=Object(a.a)(["\n  height: 50px;\n  width: 100%;\n  margin: 0 auto;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: white;\n  border-bottom: 1px solid gainsboro;\n  @media (max-width: 639px) {\n    border-top: 1px solid gainsboro;\n    position: fixed;\n    margin-top: auto;\n    bottom: 0;\n  }\n"]))),Wt=c.b.div(Ue||(Ue=Object(a.a)(["\n  display: flex;\n  width: 100%;\n  max-width: 1000px;\n  align-items: center;\n  height: 100%;\n  justify-content: space-between;\n  margin: 0 auto;\n\n  @media (max-width: 639px) {\n    display: flex;\n    justify-content: space-evenly;\n  }\n"]))),At=Object(c.b)(I.b)(He||(He=Object(a.a)(["\n  height: 100%;\n  color: black;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 22px;\n  display: flex;\n  margin-left: 12px;\n  align-items: center;\n  font-family: 'Lobster Two';\n\n  @media (max-width: 639px) {\n    display: none;\n  }\n"]))),Gt=c.b.nav(De||(De=Object(a.a)(["\n  height: 100%;\n  display: flex;\n"]))),Xt=Object(c.b)(I.b)(ze||(ze=Object(a.a)(["\n  border-bottom: ",";\n  padding: 13px;\n"])),(function(e){return e.$active&&"2px solid black"})),Lt=c.b.button(Be||(Be=Object(a.a)(["\n  border-bottom: ",";\n  padding: 13px;\n"])),(function(e){return e.$active&&"2px solid black"})),Yt=c.b.div(Se||(Se=Object(a.a)(["\n  position: fixed;\n  top: 50px;\n  width: 300px;\n  margin: 0 auto;\n  overflow-x: auto;\n  background-color: white;\n  border: 1px solid gainsboro;\n"]))),qt=Object(F.a)((function(e){var t=Object(l.useState)(window.location.pathname),n=Object(r.a)(t,2),s=n[0],i=n[1],o=Object(l.useState)(!1),a=Object(r.a)(o,2),c=a[0],d=a[1];return Object(pt.f)().listen((function(e){i(e.pathname)})),Object(M.jsx)(Zt,{children:Object(M.jsxs)(Wt,{children:[Object(M.jsx)(At,{to:"/social-network",children:"social network"}),Object(M.jsxs)(Gt,{children:[Object(M.jsx)(Xt,{to:"/social-network",$active:"/social-network"===s,children:Object(M.jsx)("img",{src:St,alt:""})}),Object(M.jsx)(Xt,{to:"/social-network/explore",$active:s.includes("/explore"),children:Object(M.jsx)("img",{src:Ct,alt:""})}),Object(M.jsx)(Lt,{$active:c,onClick:function(){return d(!c)},children:Object(M.jsx)("img",{src:_t,alt:""})}),c&&Object(M.jsx)(Yt,{children:Object(M.jsx)(T,{onclick:e.store.createPost,placeholder:"Enter link to image"})}),Object(M.jsx)(Xt,{to:"/social-network/chats",$active:s.includes("/chat"),children:Object(M.jsx)("img",{src:Pt,alt:""})}),Object(M.jsx)(Xt,{to:"/social-network/liked",$active:s.includes("/liked"),children:Object(M.jsx)("img",{src:p,alt:""})}),Object(M.jsx)(Xt,{to:"/social-network/user/"+e.store.currentUserId,$active:s.includes("/user"),children:Object(M.jsx)("img",{src:Bt,alt:""})})]})]})})})),Vt=c.b.div(Pe||(Pe=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 24px auto;\n  align-items: center;\n"]))),Jt=c.b.h1(Ce||(Ce=Object(a.a)(["\n  font-size: 18px;\n  margin: 10px 0;\n  text-align: center;\n"])));function Ft(e){return document.title=e.store.users[e.userId].username+"'s followers",Object(M.jsxs)(Vt,{children:[Object(M.jsx)(Jt,{children:e.store.users.filter((function(t){return t.following.includes(e.userId)})).length>0?e.store.users[e.userId].username+"'s followers":e.store.users[e.userId].username+" has no followers"}),e.store.users.filter((function(t){return t.following.includes(e.userId)})).map((function(e){return Object(M.jsx)(z,{user:e,link:"/social-network/user/"})}))]})}var Nt,Et,$t=c.b.div(_e||(_e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 24px auto;\n  align-items: center;\n"]))),Rt=c.b.h1(Ze||(Ze=Object(a.a)(["\n  font-size: 18px;\n  margin: 10px 0;\n  text-align: center;\n"])));function Tt(e){return document.title=e.store.users[e.userId].username+" is following",Object(M.jsxs)($t,{children:[Object(M.jsx)(Rt,{children:e.store.users[e.userId].following.length>0?e.store.users[e.userId].username+" is following":e.store.users[e.userId].username+" doesn't follow anyone"}),e.store.users[e.userId].following.map((function(t){return Object(M.jsx)(z,{user:e.store.users[t],link:"/social-network/user/"})}))]})}var Kt,Qt,en,tn,nn,rn,sn,on,an,cn,dn,un,ln,bn,pn,xn=c.b.div(Nt||(Nt=Object(a.a)(["\n  width: 100%;\n  padding: 5px 0;\n"]))),hn=c.b.h1(Et||(Et=Object(a.a)(["\n  font-size: 18px;\n  margin: 10px 0;\n  text-align: center;\n"]))),jn=Object(F.a)((function(e){return document.title="Liked posts",Object(M.jsx)(xn,{children:e.store.users[e.store.currentUserId].likedPosts.length?e.store.users.map((function(t){return t.posts.map((function(n){return e.store.users[e.store.currentUserId].likedPosts.includes(n.id)&&Object(M.jsx)($e,{id:n.id,user:t,date:n.date,img:n.img,likes:e.store.users.filter((function(e){return e.likedPosts.includes(n.id)})).length,store:e.store})}))})):Object(M.jsx)(hn,{children:"You haven't liked any posts yet"})})})),fn=c.b.div(Kt||(Kt=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  padding-top: 10vh;\n"]))),mn=c.b.h1(Qt||(Qt=Object(a.a)(["\n  margin: 10px 0;\n  font-family: 'Lobster Two';\n  text-align: center;\n"]))),gn=c.b.div(en||(en=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n"]))),wn=c.b.div(tn||(tn=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 240px;\n  padding: 20px;\n"]))),On=c.b.input(nn||(nn=Object(a.a)(["\n  height: 36px;\n  border: 1px solid gainsboro;\n  border-radius: 4px;\n  font-size: 15px;\n  height: 36px;\n  min-width: 120px;\n  padding: 0 12px;\n  margin: 8px 0;\n"]))),kn=(c.b.input(rn||(rn=Object(a.a)(["\n  height: 36px;\n  padding: 0 12px;\n"]))),c.b.p(sn||(sn=Object(a.a)(["\n  padding: 20px 12px;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 540px;\n"])))),vn=c.b.a(on||(on=Object(a.a)(["\n  display: block;\n  text-transform: lowercase;\n  font-family: serif;\n  margin: 20px auto;\n"]))),yn=Object(F.a)((function(e){var t=Object(l.useState)(!1),n=Object(r.a)(t,2),s=n[0],i=n[1];Object(l.useEffect)((function(){setTimeout((function(){i(!0)}),1e3)}));var o=Object(l.useRef)(),a=Object(l.useRef)(),c=Object(l.useRef)(),d=Object(l.useRef)();return document.title="Login or register",s?Object(M.jsxs)(fn,{children:[Object(M.jsx)(mn,{children:"social network"}),Object(M.jsxs)(gn,{children:[Object(M.jsxs)(wn,{children:[Object(M.jsx)(On,{type:"text",placeholder:"Username",ref:o}),Object(M.jsx)(On,{type:"submit",value:"Login",onClick:function(){o.current.value&&(e.store.users.filter((function(e){return e.username===o.current.value})).length?e.store.setCurrentUser(o.current.value):alert("Incorrect username"))}})]}),Object(M.jsxs)(wn,{children:[Object(M.jsx)(On,{type:"text",placeholder:"Username",ref:a}),Object(M.jsx)(On,{type:"text",placeholder:"Link to profile picture",ref:c}),Object(M.jsx)(On,{type:"text",placeholder:"Profile status",ref:d}),Object(M.jsx)(On,{type:"submit",value:"Register",onClick:function(){a.current.value&&(e.store.users.filter((function(e){return e.username===a.current.value})).length?alert("User already exists"):(e.store.createUser(a.current.value,c.current.value,d.current.value),e.store.setCurrentUser(a.current.value)))}})]})]}),Object(M.jsxs)(kn,{children:["This website is not real. Users are fictional, photos are copyright-free. All data (messages, posts, etc.) is not sent anywhere and exist only in your browser. No password is required, you can log in with any existing username (try ",Object(M.jsx)("b",{children:" infret"}),") or register a new one."]}),Object(M.jsx)(vn,{href:"https://infret.github.io",children:Object(M.jsx)("i",{children:"by Infret"})})]}):Object(M.jsx)(M.Fragment,{})})),In=n.p+"static/media/back.0862ef31.svg",Mn=c.b.div(an||(an=Object(a.a)(["\n  background-color: white;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid gainsboro;\n  position: sticky;\n"]))),Un=c.b.h1(cn||(cn=Object(a.a)(["\n  font-size: 20px;\n  margin: 0 auto;\n"]))),Hn=c.b.button(dn||(dn=Object(a.a)(["\n  height: 100%;\n  width: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(",");\n  position: absolute;\n"])),In),Dn=Object(F.a)((function(){var e=Object(l.useState)(window.location.pathname),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(l.useState)(document.title),o=Object(r.a)(i,2),a=o[0],c=o[1],d=Object(pt.f)();return Object(l.useEffect)((function(){c(document.title)})),d.listen((function(e){s(e.pathname)})),Object(M.jsxs)(Mn,{children:["social-network"!==n.split("/")[n.split("/").length-1]&&Object(M.jsx)(Hn,{onClick:function(){return d.goBack()}}),Object(M.jsx)(Un,{children:a})]})})),zn=Object(pt.g)(Dn),Bn=Object(c.a)(un||(un=Object(a.a)(["\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: none;\n\t\tfont-family: sans-serif;\n\t\tresize: none;\n\t\toutline: none;\n\t\tbackground-color: transparent;\n    color: black;\n    text-decoration: none;\n\t}\n"]))),Sn=c.b.div(ln||(ln=Object(a.a)(["\n  @media (max-width: 640px) {\n    padding-bottom: 50px;\n  }\n"]))),Pn=c.b.div(bn||(bn=Object(a.a)(["\n  max-width: 1000px;\n  width: 100%;\n  margin: 0 auto;\n"]))),Cn=c.b.div(pn||(pn=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  grid-template-areas: 'chats chat';\n  width: 100%;\n\n  @media (max-width: 640px) {\n    grid-template-columns: 1fr;\n  }\n"]))),_n=Object(F.a)((function(e){Object(pt.f)();Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("store");case 2:t=e.sent,localStorage.setItem("store",JSON.stringify(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e.store.currentUserId]);var t=Object(l.useState)(window.innerWidth),n=Object(r.a)(t,2),s=n[0],a=n[1];return Object(l.useLayoutEffect)((function(){return window.addEventListener("resize",(function(){return a(window.innerWidth)})),function(){return window.removeEventListener("resize",(function(){return a(window.innerWidth)}))}}),[]),Object(M.jsx)(I.a,{children:e.store.currentUserId>=0?Object(M.jsxs)(Sn,{children:[s>=640?Object(M.jsx)(qt,{store:e.store}):Object(M.jsx)(zn,{}),!window.location.pathname.includes("/social-network")&&Object(M.jsx)(pt.a,{to:"/social-network"}),Object(M.jsxs)(Pn,{children:[Object(M.jsx)(pt.b,{path:"/social-network/explore",component:function(){return Object(M.jsx)(zt,{store:e.store})}}),Object(M.jsx)(pt.b,{path:"/social-network",exact:!0,component:function(){return Object(M.jsx)(Qe,{store:e.store})}}),Object(M.jsx)(pt.b,{path:"/social-network/chats",render:function(){return Object(M.jsxs)(Cn,{children:[Object(M.jsx)(bt,{store:e.store}),s>=640&&Object(M.jsx)(kt,{store:e.store,userId:-1})]})}}),Object(M.jsx)(pt.b,{exact:!0,path:"/social-network/user/:userId",component:function(){return Object(M.jsx)(ut,{userId:parseInt(window.location.pathname.replace(/[^0-9\.]+/g,"")),store:e.store})}}),Object(M.jsx)(pt.b,{exact:!0,path:"/social-network/user/:userId/followers",component:function(){return Object(M.jsx)(Ft,{userId:parseInt(window.location.pathname.replace(/[^0-9\.]+/g,"")),store:e.store})}}),Object(M.jsx)(pt.b,{exact:!0,path:"/social-network/user/:userId/following",component:function(){return Object(M.jsx)(Tt,{userId:parseInt(window.location.pathname.replace(/[^0-9\.]+/g,"")),store:e.store})}}),Object(M.jsx)(pt.b,{path:"/social-network/chat/:userId",component:function(){return Object(M.jsxs)(Cn,{children:[s>=640&&Object(M.jsx)(bt,{store:e.store}),Object(M.jsx)(kt,{store:e.store,userId:parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1))})]})}}),Object(M.jsx)(pt.b,{exact:!0,path:"/social-network/liked",component:function(){return Object(M.jsx)(jn,{store:e.store})}}),s<640&&Object(M.jsx)(qt,{store:e.store})]})]}):Object(M.jsx)(yn,{store:e.store})})}));u.a.render(Object(M.jsxs)(b.a.StrictMode,{children:[Object(M.jsx)(Bn,{}),Object(M.jsx)(_n,{store:y})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.65a37e7a.chunk.js.map