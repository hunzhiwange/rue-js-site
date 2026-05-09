import{A as e,F as t,H as n,I as r,J as i,L as a,N as o,P as s,U as c,W as l,Y as u,c as d,j as f,pt as p,rt as m,t as h,u as g,ut as _}from"./vapor-runtime-BZZbPG7x.js";import{a as v}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as ee}from"./Code-C8wy38VS.js";import{t as y}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var b=n=>g(()=>{let r=t(`label`);l(r,`floating-label`);let a=t(`input`);f(r,a),l(a,`input input-bordered w-full`),p(()=>{i(a,n.modelValue??``)}),e(a,`input`,e=>{n.onUpdateModelValue?.(e.target.value)});let s=t(`span`);f(r,s);let c=o(`rue:slot:anchor`);return f(s,c),p(()=>{let e=n.label;d(e,s,c)}),r}),te=n=>{let{emitTitleUpdate:a}=v(`useSetup:0:0`,()=>_(()=>({emitTitleUpdate:e=>{let t=e.target.value;n.onUpdateTitle?.(n.titleModifiers?.trim?t.trim():t)}})));return g(()=>{let o=t(`label`);l(o,`floating-label`);let s=t(`input`);f(o,s),l(s,`input input-bordered w-full`),p(()=>{i(s,n.title??``)}),e(s,`input`,n.titleModifiers?.lazy?void 0:a),e(s,`change`,n.titleModifiers?.lazy?a:void 0);let c=t(`span`);return f(o,c),f(c,r(`title`)),o})},ne=n=>{let{emitFirstNameUpdate:a,emitLastNameUpdate:o}=v(`useSetup:0:0`,()=>_(()=>({emitFirstNameUpdate:e=>{let t=e.target.value;n.onUpdateFirstName?.(n.firstNameModifiers?.trim?t.trim():t)},emitLastNameUpdate:e=>{let t=e.target.value;n.onUpdateLastName?.(n.lastNameModifiers?.trim?t.trim():t)}})));return g(()=>{let s=t(`div`);l(s,`grid gap-3 md:grid-cols-2`);let c=t(`label`);f(s,c),l(c,`floating-label`);let u=t(`input`);f(c,u),l(u,`input input-bordered w-full`),p(()=>{i(u,n.firstName??``)}),e(u,`input`,n.firstNameModifiers?.lazy?void 0:a),e(u,`change`,n.firstNameModifiers?.lazy?a:void 0);let d=t(`span`);f(c,d),f(d,r(`firstName`));let m=t(`label`);f(s,m),l(m,`floating-label`);let h=t(`input`);f(m,h),l(h,`input input-bordered w-full`),p(()=>{i(h,n.lastName??``)}),e(h,`input`,n.lastNameModifiers?.lazy?void 0:o),e(h,`change`,n.lastNameModifiers?.lazy?o:void 0);let g=t(`span`);return f(m,g),f(g,r(`lastName`)),s})},x=[`v`,`-model`].join(``),S=[`v`,`-model`,`:trim`].join(``),C=[`r`,`-model`,`:number`].join(``),w=[`r`,`-model`,`:lazy`].join(``),T=[`v`,`-model`,`:trim-title`].join(``),E=[`v`,`-model`,`:trim-first-name`].join(``),D=[`v`,`-model`,`:lazy-last-name`].join(``),O=[`import { type FC, ref } from '@rue-js/rue'`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+x+`={message.value} />`,`      <input className="input input-bordered" `+S+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+C+`={age.value} />`,`      <input className="input input-bordered" `+w+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+x+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+x+`={title.value} />`,`      <TitleField `+T+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+E+`={firstName.value}`,`        `+D+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
`),re=`import { type FC, ref } from '@rue-js/rue'

const Demo: FC = () => {
  const message = ref('  Rue model  ')
  const trimmed = ref('  keep edges tidy  ')
  const age = ref<string | number>('18')
  const lazyNote = ref('blur to sync')
  const accepted = ref(false)
  const title = ref('Guide draft')
  const articleTitle = ref('Inside Rue')
  const firstName = ref('Rue')
  const lastName = ref('JSX')

  return (
    <section className="grid gap-4">
      <input
        className="input input-bordered"
        value={message.value}
        onInput={event => {
          message.value = (event.target as HTMLInputElement).value
        }}
      />

      <input
        className="input input-bordered"
        value={trimmed.value}
        onInput={event => {
          trimmed.value = (event.target as HTMLInputElement).value.trim()
        }}
      />

      <input
        type="number"
        className="input input-bordered"
        value={String(age.value)}
        onInput={event => {
          const value = (event.target as HTMLInputElement).value
          const parsed = parseFloat(value)
          age.value = Number.isNaN(parsed) ? value : parsed
        }}
      />

      <input
        className="input input-bordered"
        value={lazyNote.value}
        onChange={event => {
          lazyNote.value = (event.target as HTMLInputElement).value
        }}
      />

      <input
        type="checkbox"
        className="checkbox"
        checked={accepted.value}
        onChange={event => {
          accepted.value = (event.target as HTMLInputElement).checked
        }}
      />

      <ModelField
        label="默认组件 model"
        modelValue={title.value}
        onUpdateModelValue={value => {
          title.value = value
        }}
      />

      <TitleField
        title={articleTitle.value}
        titleModifiers={{ trim: true }}
        onUpdateTitle={value => {
          articleTitle.value = value
        }}
      />

      <UserNameEditor
        firstName={firstName.value}
        lastName={lastName.value}
        firstNameModifiers={{ trim: true }}
        lastNameModifiers={{ lazy: true }}
        onUpdateFirstName={value => {
          firstName.value = value
        }}
        onUpdateLastName={value => {
          lastName.value = value
        }}
      />
    </section>
  )
}

export default Demo`,k=[`// TSX-safe 内建修饰符写法`,`<input `+S+`={message.value} />`,`<input `+C+`={age.value} />`,`<input `+w+`={lazyNote.value} />`,`<TitleField `+T+`={articleTitle.value} />`,`<UserNameEditor `+E+`={firstName.value} />`,`<UserNameEditor `+D+`={lastName.value} />`,``,`// 冒号后的前导内建修饰符会映射到 xxxModifiers，并在原生元素上切换 input/change 等行为`].join(`
`),ie=`// 实际 Rue TSX
<ModelField v-model={title.value} />
<TitleField v-model:trim-title={articleTitle.value} />
<UserNameEditor
  v-model:trim-first-name={firstName.value}
  v-model:lazy-last-name={lastName.value}
/>

// 等价手写 props
<ModelField
  modelValue={title.value}
  onUpdateModelValue={value => {
    title.value = value
  }}
/>

<TitleField
  title={articleTitle.value}
  titleModifiers={{ trim: true }}
  onUpdateTitle={value => {
    articleTitle.value = value
  }}
/>

<UserNameEditor
  firstName={firstName.value}
  lastName={lastName.value}
  firstNameModifiers={{ trim: true }}
  lastNameModifiers={{ lazy: true }}
  onUpdateFirstName={value => {
    firstName.value = value
  }}
  onUpdateLastName={value => {
    lastName.value = value
  }}
/>`,ae=(e,t)=>{e.value=t.target.value},oe=(e,t)=>{e.value=t.target.value.trim()},se=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},ce=(e,t)=>{e.value=t.target.checked},le=()=>{let{activeTab:x,message:S,trimmedMessage:C,age:w,lazyNote:T,accepted:E,title:D,articleTitle:le,firstName:ue,lastName:de,manualMessage:fe,manualTrimmedMessage:pe,manualAge:me,manualLazyNote:he,manualAccepted:ge}=v(`useSetup:0:0`,()=>_(()=>({activeTab:v(`ref:1:0`,()=>m(`preview`)),message:v(`ref:1:1`,()=>m(`  Rue model  `)),trimmedMessage:v(`ref:1:2`,()=>m(`  keep edges tidy  `)),age:v(`ref:1:3`,()=>m(`18`)),lazyNote:v(`ref:1:4`,()=>m(`blur to sync`)),accepted:v(`ref:1:5`,()=>m(!1)),title:v(`ref:1:6`,()=>m(`Guide draft`)),articleTitle:v(`ref:1:7`,()=>m(`Inside Rue`)),firstName:v(`ref:1:8`,()=>m(`Rue`)),lastName:v(`ref:1:9`,()=>m(`JSX`)),manualMessage:v(`ref:1:10`,()=>m(`  Rue model  `)),manualTrimmedMessage:v(`ref:1:11`,()=>m(`  keep edges tidy  `)),manualAge:v(`ref:1:12`,()=>m(`18`)),manualLazyNote:v(`ref:1:13`,()=>m(`blur to sync`)),manualAccepted:v(`ref:1:14`,()=>m(!1))})));return g(()=>{let m=s(),_=o(`rue:component:anchor`);return f(m,_),d(h(y,{children:g(()=>{let m=s(),_=t(`div`);f(m,_),l(_,`space-y-6`);let v=t(`div`);f(_,v),l(v,`space-y-3`);let y=t(`h1`);f(v,y),l(y,`text-5xl font-semibold`),f(y,r(`v-model / r-model`));let A=t(`p`);f(v,A),l(A,`text-base-content/70 max-w-3xl`),f(A,r(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let j=t(`div`);f(_,j),n(j,`role`,`tablist`),l(j,`tabs tabs-box w-fit`);let M=t(`button`);f(j,M),n(M,`role`,`tab`),p(()=>{l(M,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),e(M,`click`,()=>{x.value=`preview`}),f(M,r(`效果`));let N=t(`button`);f(j,N),n(N,`role`,`tab`),p(()=>{l(N,String(`tab ${x.value===`code`?`tab-active`:``}`))}),e(N,`click`,()=>{x.value=`code`}),f(N,r(`代码`));let P=o(`rue:slot:anchor`);f(_,P),p(()=>{d(x.value===`preview`?g(()=>{let m=s(),g=t(`div`);f(m,g),l(g,`card bg-base-100 shadow`);let _=t(`div`);f(g,_),l(_,`card-body gap-6`);let v=t(`div`);f(_,v),n(v,`role`,`alert`),l(v,`alert alert-info`);let y=t(`span`);f(v,y),f(y,r(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let x=t(`section`);f(_,x),l(x,`space-y-3`);let O=t(`div`);f(x,O),l(O,`flex flex-wrap items-center justify-between gap-3`);let re=t(`h2`);f(O,re),l(re,`text-xl font-semibold`),f(re,r(`原生输入：真实指令 vs 手写等价`));let k=t(`div`);f(O,k),l(k,`flex flex-wrap gap-2`);let A=t(`span`);f(k,A),l(A,`badge badge-primary`),f(A,r(`directive`));let j=t(`span`);f(k,j),l(j,`badge badge-secondary`),f(j,r(`manual`));let M=t(`div`);f(x,M),l(M,`grid gap-4 xl:grid-cols-2 items-start`);let N=t(`div`);f(M,N),l(N,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let P=t(`div`);f(N,P),l(P,`flex items-center justify-between gap-3`);let F=t(`h3`);f(P,F),l(F,`font-semibold`),f(F,r(`Rue TSX 实际写法`));let _e=t(`span`);f(P,_e),l(_e,`badge badge-primary`),f(_e,r(`v-model / r-model`));let I=t(`label`);f(N,I),l(I,`floating-label`);let L=t(`input`);f(I,L),l(L,`input input-bordered w-full`),p(()=>{i(L,S.value)}),e(L,`input`,e=>{S.value=e.target.value});let ve=t(`span`);f(I,ve),f(ve,r(`v-model`));let R=t(`label`);f(N,R),l(R,`floating-label`);let z=t(`input`);f(R,z),l(z,`input input-bordered w-full`),p(()=>{i(z,C.value)}),e(z,`input`,e=>{let t=e.target.value;t=t.trim(),C.value=t});let ye=t(`span`);f(R,ye),f(ye,r(`v-model:trim`));let B=t(`label`);f(N,B),l(B,`floating-label`);let V=t(`input`);f(B,V),n(V,`type`,`number`),l(V,`input input-bordered w-full`),p(()=>{i(V,w.value)}),e(V,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,w.value=t});let be=t(`span`);f(B,be),f(be,r(`r-model:number`));let xe=t(`label`);f(N,xe),l(xe,`floating-label`);let Se=t(`input`);f(xe,Se),l(Se,`input input-bordered w-full`),p(()=>{i(Se,T.value)}),e(Se,`change`,e=>{T.value=e.target.value});let Ce=t(`span`);f(xe,Ce),f(Ce,r(`r-model:lazy`));let we=t(`label`);f(N,we),l(we,`label cursor-pointer justify-start gap-3`);let H=t(`input`);f(we,H),n(H,`type`,`checkbox`),l(H,`checkbox`),p(()=>{c(H,!!(Array.isArray(E.value)?E.value.includes(`on`):E.value instanceof Set?E.value.has(`on`):E.value))}),e(H,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(E.value)){E.value=t?E.value.includes(n)?E.value:E.value.concat([n]):E.value.filter(e=>e!==n);return}if(E.value instanceof Set){E.value=t?new Set([...E.value,n]):new Set(Array.from(E.value).filter(e=>e!==n));return}E.value=!!t});let Te=t(`span`);f(we,Te),l(Te,`label-text`),f(Te,r(`v-model checkbox`));let U=t(`div`);f(N,U),l(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Ee=t(`p`);f(U,Ee),f(Ee,r(`message: `));let De=a(Ee);f(Ee,De),p(()=>{u(De,S.value||`空`)});let W=t(`p`);f(U,W),f(W,r(`trimmed: `));let Oe=a(W);f(W,Oe),p(()=>{u(Oe,C.value||`空`)});let ke=t(`p`);f(U,ke),f(ke,r(`age: `));let Ae=a(ke);f(ke,Ae),p(()=>{u(Ae,String(w.value))});let je=t(`p`);f(U,je),f(je,r(`lazy: `));let Me=a(je);f(je,Me),p(()=>{u(Me,T.value||`空`)});let Ne=t(`p`);f(U,Ne),f(Ne,r(`accepted: `));let Pe=a(Ne);f(Ne,Pe),p(()=>{u(Pe,E.value?`true`:`false`)});let G=t(`div`);f(M,G),l(G,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let Fe=t(`div`);f(G,Fe),l(Fe,`flex items-center justify-between gap-3`);let Ie=t(`h3`);f(Fe,Ie),l(Ie,`font-semibold`),f(Ie,r(`手写 value / checked 对照`));let Le=t(`span`);f(Fe,Le),l(Le,`badge badge-secondary`),f(Le,r(`manual`));let Re=t(`label`);f(G,Re),l(Re,`floating-label`);let ze=t(`input`);f(Re,ze),l(ze,`input input-bordered w-full`),p(()=>{i(ze,fe.value)}),e(ze,`input`,e=>{ae(fe,e)});let Be=t(`span`);f(Re,Be),f(Be,r(`value + onInput`));let Ve=t(`label`);f(G,Ve),l(Ve,`floating-label`);let He=t(`input`);f(Ve,He),l(He,`input input-bordered w-full`),p(()=>{i(He,pe.value)}),e(He,`input`,e=>{oe(pe,e)});let Ue=t(`span`);f(Ve,Ue),f(Ue,r(`trim 后手写写回`));let We=t(`label`);f(G,We),l(We,`floating-label`);let K=t(`input`);f(We,K),n(K,`type`,`number`),l(K,`input input-bordered w-full`),p(()=>{i(K,String(me.value))}),e(K,`input`,e=>{se(me,e)});let Ge=t(`span`);f(We,Ge),f(Ge,r(`parseFloat 后手写写回`));let Ke=t(`label`);f(G,Ke),l(Ke,`floating-label`);let qe=t(`input`);f(Ke,qe),l(qe,`input input-bordered w-full`),p(()=>{i(qe,he.value)}),e(qe,`change`,e=>{ae(he,e)});let Je=t(`span`);f(Ke,Je),f(Je,r(`onChange 延迟同步`));let Ye=t(`label`);f(G,Ye),l(Ye,`label cursor-pointer justify-start gap-3`);let q=t(`input`);f(Ye,q),n(q,`type`,`checkbox`),l(q,`checkbox`),p(()=>{c(q,!!ge.value)}),e(q,`change`,e=>{ce(ge,e)});let Xe=t(`span`);f(Ye,Xe),l(Xe,`label-text`),f(Xe,r(`checked + onChange`));let J=t(`div`);f(G,J),l(J,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Ze=t(`p`);f(J,Ze),f(Ze,r(`message: `));let Qe=a(Ze);f(Ze,Qe),p(()=>{u(Qe,fe.value||`空`)});let $e=t(`p`);f(J,$e),f($e,r(`trimmed: `));let et=a($e);f($e,et),p(()=>{u(et,pe.value||`空`)});let tt=t(`p`);f(J,tt),f(tt,r(`age: `));let nt=a(tt);f(tt,nt),p(()=>{u(nt,String(me.value))});let rt=t(`p`);f(J,rt),f(rt,r(`lazy: `));let it=a(rt);f(rt,it),p(()=>{u(it,he.value||`空`)});let at=t(`p`);f(J,at),f(at,r(`accepted: `));let ot=a(at);f(at,ot),p(()=>{u(ot,ge.value?`true`:`false`)});let st=t(`section`);f(_,st),l(st,`space-y-3`);let ct=t(`div`);f(st,ct),l(ct,`flex flex-wrap items-center justify-between gap-3`);let lt=t(`h2`);f(ct,lt),l(lt,`text-xl font-semibold`),f(lt,r(`组件：真实 v-model vs 等价 props`));let ut=t(`span`);f(ct,ut),l(ut,`badge badge-info badge-lg`),f(ut,r(`component compare`));let dt=t(`div`);f(st,dt),l(dt,`grid gap-4 xl:grid-cols-2 items-start`);let Y=t(`div`);f(dt,Y),l(Y,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let ft=t(`div`);f(Y,ft),l(ft,`flex items-center justify-between gap-3`);let pt=t(`h3`);f(ft,pt),l(pt,`font-semibold`),f(pt,r(`Rue TSX 实际组件写法`));let mt=t(`span`);f(ft,mt),l(mt,`badge badge-primary`),f(mt,r(`v-model`));let ht=o(`rue:component:anchor`);f(Y,ht),p(()=>{d(h(b,{label:`v-model={title.value}`,modelValue:D.value,onUpdateModelValue:e=>D.value=e}),Y,ht)});let gt=o(`rue:component:anchor`);f(Y,gt),p(()=>{d(h(te,{title:le.value,onUpdateTitle:e=>le.value=e,titleModifiers:{trim:!0}}),Y,gt)});let _t=o(`rue:component:anchor`);f(Y,_t),p(()=>{d(h(ne,{firstName:ue.value,onUpdateFirstName:e=>ue.value=e,firstNameModifiers:{trim:!0},lastName:de.value,onUpdateLastName:e=>de.value=e,lastNameModifiers:{lazy:!0}}),Y,_t)});let X=t(`div`);f(Y,X),l(X,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let vt=t(`p`);f(X,vt),f(vt,r(`title: `));let yt=a(vt);f(vt,yt),p(()=>{u(yt,D.value||`空`)});let bt=t(`p`);f(X,bt),f(bt,r(`articleTitle: `));let xt=a(bt);f(bt,xt),p(()=>{u(xt,le.value||`空`)});let Z=t(`p`);f(X,Z),f(Z,r(`firstName / lastName: `));let St=a(Z);f(Z,St),p(()=>{u(St,ue.value)}),f(Z,r(` `));let Ct=a(Z);f(Z,Ct),p(()=>{u(Ct,de.value)});let Q=t(`div`);f(dt,Q),l(Q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let wt=t(`div`);f(Q,wt),l(wt,`flex items-center justify-between gap-3`);let Tt=t(`h3`);f(wt,Tt),l(Tt,`font-semibold`),f(Tt,r(`等价手写 props`));let Et=t(`span`);f(wt,Et),l(Et,`badge badge-secondary`),f(Et,r(`modelValue / onUpdateX`));let Dt=o(`rue:component:anchor`);f(Q,Dt),p(()=>{d(h(ee,{className:`h-full`,lang:`tsx`,code:ie}),Q,Dt)});let $=t(`div`);f(Q,$),l($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Ot=t(`p`);f($,Ot);let kt=t(`strong`);f(Ot,kt),f(kt,r(`v-model`)),f(Ot,r(`-> modelValue + onUpdateModelValue`));let At=t(`p`);f($,At);let jt=t(`strong`);f(At,jt),f(jt,r(`v-model:trim-title`)),f(At,r(`-> title + titleModifiers + onUpdateTitle`));let Mt=t(`p`);f($,Mt);let Nt=t(`strong`);f(Mt,Nt),f(Nt,r(`v-model:trim-first-name`)),f(Mt,r(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Pt=t(`p`);f($,Pt);let Ft=t(`strong`);return f(Pt,Ft),f(Ft,r(`v-model:lazy-last-name`)),f(Pt,r(`-> lastName + lastNameModifiers + onUpdateLastName`)),m}):``,_,P)}),f(_,r(` `));let F=o(`rue:slot:anchor`);return f(_,F),p(()=>{d(x.value===`code`?g(()=>{let e=s(),n=t(`div`);f(e,n),l(n,`grid gap-6`);let i=t(`div`);f(n,i),l(i,`card bg-base-100 shadow overflow-auto`);let a=t(`div`);f(i,a),l(a,`card-body gap-3`);let c=t(`h2`);f(a,c),l(c,`card-title`),f(c,r(`Rue TSX 实际源码`));let u=o(`rue:component:anchor`);f(a,u),p(()=>{d(h(ee,{className:`h-full`,lang:`tsx`,code:O}),a,u)});let m=t(`div`);f(n,m),l(m,`card bg-base-100 shadow overflow-auto`);let g=t(`div`);f(m,g),l(g,`card-body gap-3`);let _=t(`h2`);f(g,_),l(_,`card-title`),f(_,r(`手写 modelValue / value 对照`));let v=o(`rue:component:anchor`);f(g,v),p(()=>{d(h(ee,{className:`h-full`,lang:`tsx`,code:re}),g,v)});let y=t(`div`);f(n,y),l(y,`card bg-base-100 shadow overflow-auto`);let b=t(`div`);f(y,b),l(b,`card-body gap-3`);let te=t(`h2`);f(b,te),l(te,`card-title`),f(te,r(`TSX-safe 修饰符写法`));let ne=o(`rue:component:anchor`);return f(b,ne),p(()=>{d(h(ee,{className:`h-full`,lang:`tsx`,code:k}),b,ne)}),e}):``,_,F)}),m})}),m,_),m})};export{le as default};