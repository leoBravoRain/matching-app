(this["webpackJsonpmatching-app"]=this["webpackJsonpmatching-app"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(1),i=a.n(s),r=a(15),o=a.n(r),c=(a(98),a(26)),l=a(27),d=a(31),u=a(29),h=a(67),p=a(16),m=a(143),j=a(144),b=a(140),g=a(63),f=a.n(g),x=a(142),O=a(82),y=Object(O.a)({overrides:{MuiButton:{root:{margin:"10px",padding:"10px"}}},palette:{primary:{main:"#4361EE"},secondary:{main:"#66FBD1"}}}),v=a(112),k=a(137),C=a(148),U=a(147),I=a(141),A=a(70),w=A.a.initializeApp({apiKey:"AIzaSyBhNGtVFx1xv5gcttMEoELyH-Dmevhuu3g",authDomain:"matchingapp-a4647.firebaseapp.com",projectId:"matchingapp-a4647",storageBucket:"matchingapp-a4647.appspot.com",messagingSenderId:"1024906637874",appId:"1:1024906637874:web:32d49c97a58af611a5422b"}),S=w.firestore(),T=w.auth();A.a.analytics();var q=a(42),F=a.n(q),_=a(79),E=a.n(_),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loading:!0,matchesWithUsers:[],likesFromUsers:0},n}return Object(l.a)(a,[{key:"logout",value:function(){T.signOut().then((function(){})).catch((function(e){}))}},{key:"componentDidMount",value:function(){var e=this;T.onAuthStateChanged((function(t){t?S.collection("users").doc(t.uid).get().then((function(a){if(a.exists){var n=a.data().likesFromUsers.length,s=[];a.data().matches.length>0?S.collection("users").where("__name__","in",a.data().matches).get().then((function(a){a.forEach((function(e){s.push(e.data())})),console.log(s),e.setState({matchesWithUsers:s,likesFromUsers:n,loading:!1,userId:t.uid})})):e.setState({likesFromUsers:n,loading:!1,userId:t.uid})}else e.setState({loading:!1,userId:t.uid})})):e.props.history.push("/login")}))}},{key:"render",value:function(){var e=this;return Object(n.jsx)(k.a,{style:{},children:this.state.loading?Object(n.jsx)(I.a,{}):Object(n.jsx)(k.a,{children:Object(n.jsxs)(v.a,{style:{margin:15,padding:5},elevation:5,children:[Object(n.jsxs)(C.a,{variant:"contained",color:"primary",onClick:function(){return e.props.history.push("/publicProfile/"+e.state.userId)},children:[Object(n.jsx)(F.a,{style:{margin:5}}),"Ver mi perfil p\xfablico"]}),Object(n.jsxs)(C.a,{variant:"contained",color:"primary",onClick:function(){return e.logout()},children:[Object(n.jsx)(E.a,{style:{margin:5}}),"Cerrar sesi\xf3n"]}),Object(n.jsxs)(b.a,{children:['Personas que te han dado "Me gustas": ',this.state.likesFromUsers]}),Object(n.jsx)(b.a,{variant:"h6",component:"h6",style:{textAlign:"center"},children:"Tus matches"}),this.state.matchesWithUsers.length>0?this.state.matchesWithUsers.map((function(e){return Object(n.jsxs)(U.a,{children:[Object(n.jsx)(b.a,{variant:"body2",children:e.name}),Object(n.jsx)(b.a,{variant:"body2",onClick:function(){window.open(e.linkToProfile)},children:"Hablemos!"})]})})):Object(n.jsxs)(b.a,{children:[Object(n.jsx)("p",{children:"Aun no tienes matches"}),Object(n.jsx)("p",{children:"Comparte y difunde tu link de tu perfil p\xfablico en tus redes sociales, as\xed las personas lo podr\xe1n ver!"})]})]})})})}}]),a}(i.a.Component),D=a(33),M=a(145),N=a(80),B=a.n(N),L=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loading:!1,email:"",password:""},n.on_submit=n.on_submit.bind(Object(D.a)(n)),n.on_register=n.on_register.bind(Object(D.a)(n)),n}return Object(l.a)(a,[{key:"on_register",value:function(){this.props.history.push("/register")}},{key:"on_submit",value:function(){var e=this,t=this.state.email,a=this.state.password;T.signInWithEmailAndPassword(t,a).then((function(t){e.props.history.push("/")})).catch((function(e){alert("Ups, la informaci\xf3n es incorrecta! Intentalo de nuevo!")}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(n.jsx)(k.a,{style:{},children:this.state.loading?Object(n.jsx)(I.a,{}):Object(n.jsx)(k.a,{children:Object(n.jsxs)(v.a,{style:{margin:15,padding:5,display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",textAlign:"center"},elevation:5,children:[Object(n.jsx)(b.a,{variant:"h6",component:"h6",children:"Bienvenido a LikeMe"}),Object(n.jsxs)(b.a,{variant:"body2",component:"p",children:[Object(n.jsx)("p",{children:"Aqu\xed puedes darle like a la persona que te gusta, y si ella tambi\xe9n te da like, entonces har\xe1n match! Si la otra persona no te da like, ella NUNCA sabr\xe1 que le diste like! Asi que no te preocupes si no hacen match! Ella nunca sabr\xe1!"}),Object(n.jsx)("p",{children:"Esto NO es como Tinder, ya que no hay un marketplace de personas! Ac\xe1 solo le puedes dar like al link de esta persona, no encontrar\xe1s mas personas! Esto es mas personal!"}),Object(n.jsx)("p",{children:"Puedes pegar el link de tu perfil publico de esta p\xe1gina en tu Instagram, Whatsapp, Facebook, Tiktok o donde quieras!"})]}),Object(n.jsx)(b.a,{variant:"h5",component:"h5",children:"Ingresar"}),Object(n.jsx)(M.a,{id:"standard-uncontrolled",label:"Email",margin:"normal",onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email}),Object(n.jsx)(M.a,{id:"standard-uncontrolled",label:"Contrase\xf1a",type:"password",margin:"normal",onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password}),Object(n.jsxs)(C.a,{align:"center",variant:"contained",color:"primary",onClick:this.on_submit,children:[Object(n.jsx)(B.a,{style:{margin:5}}),"Ingresar"]}),Object(n.jsxs)(C.a,{align:"center",variant:"contained",color:"secondary",onClick:this.on_register,children:[Object(n.jsx)(F.a,{style:{margin:5}}),"Registrarme"]})]})})})}}]),a}(i.a.Component),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loading:!1,email:"",password:""},n.on_register=n.on_register.bind(Object(D.a)(n)),n}return Object(l.a)(a,[{key:"on_register",value:function(){var e=this,t=this.state.email.trim(),a=this.state.password;T.createUserWithEmailAndPassword(t,a).then((function(a){console.log(a.user.uid);var n={email:t,name:e.state.name,linkToProfile:e.state.linkToProfile,likesToUsers:[],likesFromUsers:[],matches:[]};S.collection("users").doc(a.user.uid).set(n).then((function(t){alert("Registro exitoso"),e.props.history.push("/")}))})).catch((function(e){alert(e)}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(n.jsx)(k.a,{style:{},children:this.state.loading?Object(n.jsx)(I.a,{}):Object(n.jsx)(k.a,{children:Object(n.jsxs)(v.a,{style:{margin:15,padding:5,display:"flex",flexDirection:"column"},elevation:5,children:[Object(n.jsx)(b.a,{variant:"h6",component:"h6",children:"Registrate"}),Object(n.jsx)(b.a,{variant:"body2",component:"p",children:"Ingresa tu informaci\xf3n"}),Object(n.jsx)(M.a,{id:"standard-uncontrolled",label:"Nombre",margin:"normal",onChange:function(t){return e.setState({name:t.target.value})},value:this.state.name}),Object(n.jsx)(M.a,{id:"standard-uncontrolled",label:"Link a un perfil que uses normalmente",margin:"normal",helperText:"Puede ser el link a tu Instagram o Whatsapp, ya que si haces match, la persona te hablar\xe1 a este perfil",onChange:function(t){return e.setState({linkToProfile:t.target.value})},value:this.state.linkToProfile}),Object(n.jsx)(M.a,{id:"standard-uncontrolled",label:"Email",margin:"normal",onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email}),Object(n.jsx)(M.a,{id:"standard-uncontrolled",label:"Contrase\xf1a para esta plataforma",type:"password",margin:"normal",onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password}),Object(n.jsx)(C.a,{align:"center",variant:"contained",color:"secondary",onClick:this.on_register,children:"Registrar"})]})})})}}]),a}(i.a.Component),R=a(81),z=a.n(R),H=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loading:!0,userName:"",userIsLoggedUser:!1},n.likeToUser=n.likeToUser.bind(Object(D.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.collection("users").doc(this.props.match.params.userId).get().then((function(t){e.setState({loading:!1,userName:t.exists?t.data().name:""})})).catch((function(e){console.log(e)})),T.onAuthStateChanged((function(t){t&&t.uid==e.props.match.params.userId&&e.setState({userIsLoggedUser:!0})}))}},{key:"likeToUser",value:function(){var e=this;T.onAuthStateChanged((function(t){if(t)if(t.uid!=e.props.match.params.userId){var a=S.collection("users").doc(t.uid),n=S.collection("users").doc(e.props.match.params.userId);a.get().then((function(t){var s=t.data();s.id=t.id,s.likesToUsers.includes(e.props.match.params.userId)?alert("Ya le diste like a esta persona! Ahora debes esperar a que te de like! Buena suerte!"):(s.likesToUsers.push(e.props.match.params.userId),n.get().then((function(e){var t=e.data();t.id=e.id,t.likesFromUsers.includes(s.id)||t.likesFromUsers.push(s.id),t.matches.includes(s.id)&s.matches.includes(t.id)?alert("Ya hicieron match! Anda a tu perfil y comienza a hablar con esta persona!"):t.likesToUsers.includes(s.id)&s.likesToUsers.includes(t.id)?(t.matches.push(s.id),s.matches.push(t.id),alert("Felicitaciones! Acabas de hacer match con esta persona! Anda a tu perfil para poder comenzar a hablar!"),S.collection("matches").add({user1:t.id,user2:s.id,notified:!1}).then((function(e){}))):alert("Tu like fue guardado, ahora debes esperar a que la otra persona te de like tambi\xe9n! Buena suerte!"),a.update(s).then((function(e){console.log("logged user updated successfully")})).catch((function(e){console.log(e)})),n.update(t).then((function(e){console.log("like user updated successfully")})).catch((function(e){console.log(e)}))})))}))}else alert("Ups! No puedes darte like a ti mismo!");else console.log("user not logged"),alert("Necesitas una cuenta en nuestra plataforma para poder dar y recibir likes de otras personas!")}))}},{key:"render",value:function(){var e=this;return Object(n.jsx)(k.a,{style:{},children:this.state.loading?Object(n.jsx)(I.a,{}):Object(n.jsx)(k.a,{children:Object(n.jsxs)(v.a,{style:{margin:15,padding:5,display:"flex",flexDirection:"column",justifyContent:"center"},elevation:5,children:[Object(n.jsxs)(b.a,{variant:"h6",component:"h6",style:{textAlign:"center"},children:["Hola soy ",this.state.userName,"!"]}),Object(n.jsxs)(b.a,{variant:"p",component:"body2",style:{textAlign:"center"},children:[Object(n.jsx)("p",{children:'Puedes darme "me gusta" si es que te gusto :) y si yo tambi\xe9n te doy "me gustas", entonces haremos match y podremos hablar!'}),Object(n.jsx)("p",{children:'Si es que no te doy "me gustas", yo nunca sabr\xe9 que me diste "me gustas"! Asi que no te preocupes, nadie sabr\xe1! Solo t\xfa!'})]}),Object(n.jsxs)(C.a,{variant:"contained",color:"primary",onClick:function(){e.likeToUser()},children:[Object(n.jsx)(f.a,{style:{margin:4}}),"Me gustas"]}),Object(n.jsx)(b.a,{variant:"p",component:"body2",style:{textAlign:"center"},children:"Si no estas registrado, click aqu\xed"}),Object(n.jsxs)(C.a,{variant:"contained",color:"secondary",onClick:function(){e.props.history.push("/login")},children:[Object(n.jsx)(F.a,{style:{margin:4}}),"Registrarse"]}),this.state.userIsLoggedUser&&Object(n.jsxs)(k.a,{style:{justifyContent:"center",flexDirection:"column",display:"flex",textAlign:"center"},children:[Object(n.jsx)("p",{children:"Este bot\xf3n solo lo puedes ver t\xfa"}),Object(n.jsxs)(C.a,{variant:"contained",color:"primary",onClick:function(){var e=document.createElement("textarea");e.value=window.location.href,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Link copiado!")},children:[Object(n.jsx)(z.a,{style:{margin:4}}),"Copiar este link en mis redes sociales"]})]})]})})})}}]),a}(i.a.Component),J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(x.a,{theme:y,children:[Object(n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(m.a,{position:"static",children:Object(n.jsx)(j.a,{children:Object(n.jsx)(h.b,{to:"/",className:"nav-link",style:{flex:1,color:"white",textDecoration:"none"},children:Object(n.jsxs)(b.a,{gutterBottom:!0,variant:"h4",component:"h2",children:[Object(n.jsx)(f.a,{style:{margin:4}}),"LikeMe"]})})})}),Object(n.jsx)(p.a,{path:"/login",exact:!0,component:L}),Object(n.jsx)(p.a,{path:"/register",exact:!0,component:W}),Object(n.jsx)(p.a,{path:"/",exact:!0,component:P}),Object(n.jsx)(p.a,{path:"/publicProfile/:userId",component:H})]})]})}}]),a}(s.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,150)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root")),V()},98:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.817c7f1b.chunk.js.map