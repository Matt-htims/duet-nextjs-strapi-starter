"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4263],{50935:(R,l,e)=>{e.d(l,{R:()=>c});var t=e(60698),a=e(80129),n=e(88767);function c(m={},i={}){const{id:s="",...u}=m,d=(0,a.stringify)(u,{encode:!1}),{get:o}=(0,t.kY)(),{data:r,isError:h,isLoading:D,refetch:L}=(0,n.useQuery)(["users",s,u],async()=>{const{data:{data:O}}=await o(`/admin/users/${s}${d?`?${d}`:""}`);return O},i);let g=[];return s&&r?g=[r]:Array.isArray(r?.results)&&(g=r.results),{users:g,pagination:r?.pagination??null,isLoading:D,isError:h,refetch:L}}},22282:(R,l,e)=>{e.r(l),e.d(l,{default:()=>Ee});var t=e(67294),a=e(60698),n=e(16550),c=e(87751),m=e(87462),i=e(15861),s=e(70885),u=e(64687),d=e.n(u),o=e(185),r=e(53979),h=e(29728),D=e(49066),L=e(41580),g=e(11047),O=e(75515),B=e(11276),U=e(67819),$=e(85018),x=e(67109),X=e(14916),Y=e(27361),T=e.n(Y),G=e(57557),V=e.n(G),w=e(78718),F=e.n(w),Q=e(45697),y=e.n(Q),le=e(86896),ie=e(50935),b=e(19631),de=e(81288),ce=e(17405);const me=async(W,K)=>{const{put:A}=(0,a.tg)(),{data:Z}=await A(`/admin/users/${W}`,K);return Z.data},ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]];var ge=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),_=["email","firstname","lastname","username","isActive","roles"],q=function(K){var A=K.canUpdate,Z=(0,le.Z)(),p=Z.formatMessage,J=(0,n.$B)("/settings/users/:id"),S=J.params.id,fe=(0,n.k6)(),ve=fe.push,Me=(0,a.L7)(),he=Me.setUserDisplayName,N=(0,a.lm)(),ee=(0,a.o1)(),Pe=ee.lockApp,ye=ee.unlockApp;(0,a.go)();var te=(0,ie.R)({id:S},{onError:function(v){var E=v.response.status;E===403?(N({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),ve("/")):N({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Le=(0,s.Z)(te.users,1),P=Le[0],ae=te.isLoading,Ae=function(){var f=(0,i.Z)(d().mark(function v(E,I){var z,H,C,k,ne;return d().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return Pe(),M.prev=1,M.next=4,me(S,V()(E,"confirmPassword"));case 4:z=M.sent,N({type:"success",message:p({id:"notification.success.saved",defaultMessage:"Saved"})}),H=a.I8.getUserInfo(),S.toString()===H.id.toString()&&(a.I8.setUserInfo(z),C=T()(E,"username")||(0,b.Pp)(E.firstname,E.lastname),he(C)),I.setValues(F()(E,_)),M.next=17;break;case 11:M.prev=11,M.t0=M.catch(1),k=(0,b.Iz)(M.t0.response.data),ne=Object.keys(k).reduce(function(re,oe){return re[oe]=k[oe].id,re},{}),I.setErrors(ne),N({type:"warning",message:T()(M.t0,"response.data.error.message","notification.error")});case 17:ye();case 18:case"end":return M.stop()}},v,null,[[1,11]])}));return function(E,I){return f.apply(this,arguments)}}(),De=ae?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},j=Object.keys(F()(P,_)).reduce(function(f,v){return v==="roles"?(f[v]=(P?.roles||[]).map(function(E){var I=E.id;return I}),f):(f[v]=P?.[v],f)},{}),Oe=j.username||(0,b.Pp)(j.firstname,j.lastname),se=p(De,{name:Oe});return ae?t.createElement(o.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"Users"}),t.createElement(r.T,{primaryAction:t.createElement(h.z,{disabled:!0,startIcon:t.createElement($.Z,null),type:"button",size:"L"},p({id:"global.save",defaultMessage:"Save"})),title:se,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(x.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},p({id:"global.back",defaultMessage:"Back"}))}),t.createElement(D.D,null,t.createElement(a.dO,null))):t.createElement(o.o,null,t.createElement(a.SL,{name:"Users"}),t.createElement(X.J9,{onSubmit:Ae,initialValues:j,validateOnChange:!1,validationSchema:ce.YM},function(f){var v=f.errors,E=f.values,I=f.handleChange,z=f.isSubmitting;return t.createElement(a.l0,null,t.createElement(r.T,{primaryAction:t.createElement(h.z,{disabled:z||!A,startIcon:t.createElement($.Z,null),loading:z,type:"submit",size:"L"},p({id:"global.save",defaultMessage:"Save"})),title:se,navigationAction:t.createElement(a.rU,{startIcon:t.createElement(x.Z,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},p({id:"global.back",defaultMessage:"Back"}))}),t.createElement(D.D,null,P?.registrationToken&&t.createElement(L.x,{paddingBottom:6},t.createElement(ge,{registrationToken:P.registrationToken})),t.createElement(g.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(L.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(g.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(O.Z,{variant:"delta",as:"h2"},p({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(B.r,{gap:5},ue.map(function(H){return H.map(function(C){return t.createElement(U.P,(0,m.Z)({key:C.name},C.size),t.createElement(a.jm,(0,m.Z)({},C,{disabled:!A,error:v[C.name],onChange:I,value:E[C.name]||""})))})})))),t.createElement(L.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(g.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(O.Z,{variant:"delta",as:"h2"},p({id:"global.roles",defaultMessage:"User's role"})),t.createElement(B.r,{gap:5},t.createElement(U.P,{col:6,xs:12},t.createElement(de.Z,{disabled:!A,error:v.roles,onChange:I,value:E.roles}))))))))}))};q.propTypes={canUpdate:y().bool.isRequired};const pe=q,Ee=()=>{const W=(0,a.lm)(),K=(0,t.useMemo)(()=>({read:c.Z.settings.users.read,update:c.Z.settings.users.update}),[]),{isLoading:A,allowedActions:{canRead:Z,canUpdate:p}}=(0,a.ss)(K),{state:J}=(0,n.TH)(),S=J?.from??"/";return(0,t.useEffect)(()=>{A||!Z&&!p&&W({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[A,Z,p,W]),A?t.createElement(a.dO,null):!Z&&!p?t.createElement(n.l_,{to:S}):t.createElement(pe,{canUpdate:p})}},82464:(R,l,e)=>{e.d(l,{Z:()=>d});var t=e(67294),a=e(12028),n=e(60698),c=e(65186),m=e(45697),i=e.n(m),s=e(86896);const u=({children:o,target:r})=>{const h=(0,n.lm)(),{formatMessage:D}=(0,s.Z)(),{copy:L}=(0,n.VP)(),g=D({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),O=async()=>{await L(r)&&h({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(n.Y_,{endAction:t.createElement(a.h,{label:g,noBorder:!0,icon:t.createElement(c.Z,null),onClick:O}),title:r,titleEllipsis:!0,subtitle:o,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};u.propTypes={children:i().oneOfType([i().element,i().string]).isRequired,target:i().string.isRequired};const d=u},31605:(R,l,e)=>{e.d(l,{Z:()=>u});var t=e(67294),a=e(45697),n=e.n(a),c=e(86896),m=e(63871),i=e(82464);const s=({registrationToken:d})=>{const{formatMessage:o}=(0,c.Z)(),r=`${window.location.origin}${m.Z}auth/register?registrationToken=${d}`;return t.createElement(i.Z,{target:r},o({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:n().string};const u=s},81288:(R,l,e)=>{e.d(l,{Z:()=>O});var t=e(67294),a=e(40619),n=e(82562),c=e(60698),m=e(86647),i=e(45697),s=e.n(i),u=e(86896),d=e(88767),o=e(71997);const r=(0,o.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,h=o.ZP.div`
  animation: ${r} 2s infinite linear;
`,D=()=>t.createElement(h,null,t.createElement(m.Z,null)),L=async()=>{const{get:B}=(0,c.tg)(),{data:U}=await B("/admin/roles");return U.data},g=({disabled:B,error:U,onChange:$,value:x})=>{const{status:X,data:Y}=(0,d.useQuery)(["roles"],L,{staleTime:5e4}),{formatMessage:T}=(0,u.Z)(),G=U?T({id:U,defaultMessage:U}):"",V=T({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),w=T({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),F=T({id:"app.components.Select.placeholder",defaultMessage:"Select"}),Q=X==="loading"?t.createElement(D,null):void 0;return t.createElement(a.P,{id:"roles",disabled:B,error:G,hint:w,label:V,name:"roles",onChange:y=>{$({target:{name:"roles",value:y}})},placeholder:F,multi:!0,startIcon:Q,value:x.map(y=>y.toString()),withTags:!0,required:!0},(Y||[]).map(y=>t.createElement(n.W,{key:y.id,value:y.id.toString()},T({id:`global.${y.code}`,defaultMessage:y.name}))))};g.defaultProps={disabled:!1,error:void 0},g.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const O=g},17405:(R,l,e)=>{e.d(l,{YM:()=>d,Rw:()=>m});var t=e(87561),a=e(60698);const n={firstname:t.Z_().trim().required(a.I0.required),lastname:t.Z_(),email:t.Z_().email(a.I0.email).lowercase().required(a.I0.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.I0.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(o,r)=>o?r.required(a.I0.required):r)},m={...n,currentPassword:t.Z_().when(["password","confirmPassword"],(o,r,h)=>o||r?h.required(a.I0.required):h),preferedLanguage:t.Z_().nullable()},s={roles:t.IX().min(1,a.I0.required).required(a.I0.required)},d=t.Ry().shape({...n,isActive:t.Xg(),...s})},12201:(R,l,e)=>{e.d(l,{Z:()=>u});var t=e(67294),a=e(45697),n=e.n(a),c=e(86896),m=e(63871),i=e(82464);const s=({registrationToken:d})=>{const{formatMessage:o}=(0,c.Z)();return d?t.createElement(i.Z,{target:`${window.location.origin}${m.Z}auth/register?registrationToken=${d}`},o({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(i.Z,{target:`${window.location.origin}${m.Z}auth/login`},o({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:n().string};const u=s},67109:(R,l,e)=>{e.d(l,{Z:()=>n});var t=e(85893);const a=c=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=a}}]);