import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,W as c,X as l,Z as u,_t as d,bt as f,c as p,j as m,lt as h,pt as g,t as _,u as v}from"./vapor-runtime-D3a-68js.js";import{a as y}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as ee}from"./Code-2C2psoH3.js";import{t as b}from"./SidebarPlaygroundExample-DKa0aI1C.js";var x=e=>v(()=>{let r=n(`label`);t(r,`floating-label`);let o=n(`input`);i(r,o),t(o,`input input-bordered w-full`),f(()=>{l(o,e.modelValue??``)}),m(o,`input`,t=>{e.onUpdateModelValue?.(t.target.value)});let s=n(`span`);i(r,s);let c=a(`rue:slot:anchor`);return i(s,c),f(()=>{let t=e.label;g(()=>p(t,s,c))}),r}),te=e=>{let{emitTitleUpdate:a}=y(`useSetup:0:0`,()=>d(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return v(()=>{let o=n(`label`);t(o,`floating-label`);let s=n(`input`);i(o,s),t(s,`input input-bordered w-full`),f(()=>{l(s,e.title??``)}),m(s,`input`,e.titleModifiers?.lazy?void 0:a),m(s,`change`,e.titleModifiers?.lazy?a:void 0);let c=n(`span`);return i(o,c),i(c,r(`title`)),o})},ne=e=>{let{emitFirstNameUpdate:a,emitLastNameUpdate:o}=y(`useSetup:0:0:dup1`,()=>d(()=>({emitFirstNameUpdate:t=>{let n=t.target.value;e.onUpdateFirstName?.(e.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:t=>{let n=t.target.value;e.onUpdateLastName?.(e.lastNameModifiers?.trim?n.trim():n)}})));return v(()=>{let s=n(`div`);t(s,`grid gap-3 md:grid-cols-2`);let c=n(`label`);i(s,c),t(c,`floating-label`);let u=n(`input`);i(c,u),t(u,`input input-bordered w-full`),f(()=>{l(u,e.firstName??``)}),m(u,`input`,e.firstNameModifiers?.lazy?void 0:a),m(u,`change`,e.firstNameModifiers?.lazy?a:void 0);let d=n(`span`);i(c,d),i(d,r(`firstName`));let p=n(`label`);i(s,p),t(p,`floating-label`);let h=n(`input`);i(p,h),t(h,`input input-bordered w-full`),f(()=>{l(h,e.lastName??``)}),m(h,`input`,e.lastNameModifiers?.lazy?void 0:o),m(h,`change`,e.lastNameModifiers?.lazy?o:void 0);let g=n(`span`);return i(p,g),i(g,r(`lastName`)),s})},S=[`v`,`-model`].join(``),C=[`v`,`-model`,`:trim`].join(``),w=[`r`,`-model`,`:number`].join(``),T=[`r`,`-model`,`:lazy`].join(``),E=[`v`,`-model`,`:trim-title`].join(``),D=[`v`,`-model`,`:trim-first-name`].join(``),O=[`v`,`-model`,`:lazy-last-name`].join(``),k=[`import { type FC, ref } from '@rue-js/rue'`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+C+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+w+`={age.value} />`,`      <input className="input input-bordered" `+T+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+E+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+D+`={firstName.value}`,`        `+O+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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

export default Demo`,A=[`// TSX-safe 内建修饰符写法`,`<input `+C+`={message.value} />`,`<input `+w+`={age.value} />`,`<input `+T+`={lazyNote.value} />`,`<TitleField `+E+`={articleTitle.value} />`,`<UserNameEditor `+D+`={firstName.value} />`,`<UserNameEditor `+O+`={lastName.value} />`,``,`// 冒号后的前导内建修饰符会映射到 xxxModifiers，并在原生元素上切换 input/change 等行为`].join(`
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
/>`,ae=(e,t)=>{e.value=t.target.value},oe=(e,t)=>{e.value=t.target.value.trim()},se=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},ce=(e,t)=>{e.value=t.target.checked},le=()=>{let{activeTab:S,message:C,trimmedMessage:w,age:T,lazyNote:E,accepted:D,title:O,articleTitle:le,firstName:ue,lastName:de,manualMessage:fe,manualTrimmedMessage:pe,manualAge:me,manualLazyNote:he,manualAccepted:ge}=y(`useSetup:0:0:dup2`,()=>d(()=>({activeTab:y(`ref:1:0`,()=>h(`preview`)),message:y(`ref:1:1`,()=>h(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>h(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>h(`18`)),lazyNote:y(`ref:1:4`,()=>h(`blur to sync`)),accepted:y(`ref:1:5`,()=>h(!1)),title:y(`ref:1:6`,()=>h(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>h(`Inside Rue`)),firstName:y(`ref:1:8`,()=>h(`Rue`)),lastName:y(`ref:1:9`,()=>h(`JSX`)),manualMessage:y(`ref:1:10`,()=>h(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>h(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>h(`18`)),manualLazyNote:y(`ref:1:13`,()=>h(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>h(!1))})));return v(()=>{let d=e(),h=a(`rue:component:anchor`);return i(d,h),p(_(b,{children:v(()=>{let d=e(),h=n(`div`);i(d,h),t(h,`space-y-6`);let y=n(`div`);i(h,y),t(y,`space-y-3`);let b=n(`h1`);i(y,b),t(b,`text-5xl font-semibold`),i(b,r(`v-model / r-model`));let j=n(`p`);i(y,j),t(j,`text-base-content/70 max-w-3xl`),i(j,r(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let M=n(`div`);i(h,M),s(M,`role`,`tablist`),t(M,`tabs tabs-box w-fit`);let N=n(`button`);i(M,N),s(N,`role`,`tab`),f(()=>{t(N,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),m(N,`click`,()=>{S.value=`preview`}),i(N,r(`效果`));let P=n(`button`);i(M,P),s(P,`role`,`tab`),f(()=>{t(P,String(`tab ${S.value===`code`?`tab-active`:``}`))}),m(P,`click`,()=>{S.value=`code`}),i(P,r(`代码`));let F=a(`rue:slot:anchor`);i(h,F),f(()=>{let d=S.value===`preview`?v(()=>{let d=e(),h=n(`div`);i(d,h),t(h,`card bg-base-100 shadow`);let v=n(`div`);i(h,v),t(v,`card-body gap-6`);let y=n(`div`);i(v,y),s(y,`role`,`alert`),t(y,`alert alert-info`);let b=n(`span`);i(y,b),i(b,r(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=n(`section`);i(v,S),t(S,`space-y-3`);let k=n(`div`);i(S,k),t(k,`flex flex-wrap items-center justify-between gap-3`);let re=n(`h2`);i(k,re),t(re,`text-xl font-semibold`),i(re,r(`原生输入：真实指令 vs 手写等价`));let A=n(`div`);i(k,A),t(A,`flex flex-wrap gap-2`);let j=n(`span`);i(A,j),t(j,`badge badge-primary`),i(j,r(`directive`));let M=n(`span`);i(A,M),t(M,`badge badge-secondary`),i(M,r(`manual`));let N=n(`div`);i(S,N),t(N,`grid gap-4 xl:grid-cols-2 items-start`);let P=n(`div`);i(N,P),t(P,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let F=n(`div`);i(P,F),t(F,`flex items-center justify-between gap-3`);let I=n(`h3`);i(F,I),t(I,`font-semibold`),i(I,r(`Rue TSX 实际写法`));let _e=n(`span`);i(F,_e),t(_e,`badge badge-primary`),i(_e,r(`v-model / r-model`));let ve=n(`label`);i(P,ve),t(ve,`floating-label`);let ye=n(`input`);i(ve,ye),t(ye,`input input-bordered w-full`),f(()=>{l(ye,C.value)}),m(ye,`input`,e=>{C.value=e.target.value});let be=n(`span`);i(ve,be),i(be,r(`v-model`));let xe=n(`label`);i(P,xe),t(xe,`floating-label`);let Se=n(`input`);i(xe,Se),t(Se,`input input-bordered w-full`),f(()=>{l(Se,w.value)}),m(Se,`input`,e=>{let t=e.target.value;t=t.trim(),w.value=t});let Ce=n(`span`);i(xe,Ce),i(Ce,r(`v-model:trim`));let we=n(`label`);i(P,we),t(we,`floating-label`);let L=n(`input`);i(we,L),s(L,`type`,`number`),t(L,`input input-bordered w-full`),f(()=>{l(L,T.value)}),m(L,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,T.value=t});let Te=n(`span`);i(we,Te),i(Te,r(`r-model:number`));let Ee=n(`label`);i(P,Ee),t(Ee,`floating-label`);let De=n(`input`);i(Ee,De),t(De,`input input-bordered w-full`),f(()=>{l(De,E.value)}),m(De,`change`,e=>{E.value=e.target.value});let Oe=n(`span`);i(Ee,Oe),i(Oe,r(`r-model:lazy`));let ke=n(`label`);i(P,ke),t(ke,`label cursor-pointer justify-start gap-3`);let R=n(`input`);i(ke,R),s(R,`type`,`checkbox`),t(R,`checkbox`),f(()=>{c(R,!!(Array.isArray(D.value)?D.value.includes(`on`):D.value instanceof Set?D.value.has(`on`):D.value))}),m(R,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(D.value)){D.value=t?D.value.includes(n)?D.value:D.value.concat([n]):D.value.filter(e=>e!==n);return}if(D.value instanceof Set){D.value=t?new Set([...D.value,n]):new Set(Array.from(D.value).filter(e=>e!==n));return}D.value=!!t});let Ae=n(`span`);i(ke,Ae),t(Ae,`label-text`),i(Ae,r(`v-model checkbox`));let z=n(`div`);i(P,z),t(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let B=n(`p`);i(z,B),i(B,r(`message: `));let je=o(B);i(B,je),f(()=>{u(je,C.value||`空`)});let V=n(`p`);i(z,V),i(V,r(`trimmed: `));let Me=o(V);i(V,Me),f(()=>{u(Me,w.value||`空`)});let H=n(`p`);i(z,H),i(H,r(`age: `));let Ne=o(H);i(H,Ne),f(()=>{u(Ne,String(T.value))});let U=n(`p`);i(z,U),i(U,r(`lazy: `));let Pe=o(U);i(U,Pe),f(()=>{u(Pe,E.value||`空`)});let Fe=n(`p`);i(z,Fe),i(Fe,r(`accepted: `));let Ie=o(Fe);i(Fe,Ie),f(()=>{u(Ie,D.value?`true`:`false`)});let W=n(`div`);i(N,W),t(W,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let Le=n(`div`);i(W,Le),t(Le,`flex items-center justify-between gap-3`);let Re=n(`h3`);i(Le,Re),t(Re,`font-semibold`),i(Re,r(`手写 value / checked 对照`));let ze=n(`span`);i(Le,ze),t(ze,`badge badge-secondary`),i(ze,r(`manual`));let Be=n(`label`);i(W,Be),t(Be,`floating-label`);let Ve=n(`input`);i(Be,Ve),t(Ve,`input input-bordered w-full`),f(()=>{l(Ve,fe.value)}),m(Ve,`input`,e=>{ae(fe,e)});let He=n(`span`);i(Be,He),i(He,r(`value + onInput`));let Ue=n(`label`);i(W,Ue),t(Ue,`floating-label`);let We=n(`input`);i(Ue,We),t(We,`input input-bordered w-full`),f(()=>{l(We,pe.value)}),m(We,`input`,e=>{oe(pe,e)});let Ge=n(`span`);i(Ue,Ge),i(Ge,r(`trim 后手写写回`));let Ke=n(`label`);i(W,Ke),t(Ke,`floating-label`);let G=n(`input`);i(Ke,G),s(G,`type`,`number`),t(G,`input input-bordered w-full`),f(()=>{l(G,String(me.value))}),m(G,`input`,e=>{se(me,e)});let qe=n(`span`);i(Ke,qe),i(qe,r(`parseFloat 后手写写回`));let Je=n(`label`);i(W,Je),t(Je,`floating-label`);let Ye=n(`input`);i(Je,Ye),t(Ye,`input input-bordered w-full`),f(()=>{l(Ye,he.value)}),m(Ye,`change`,e=>{ae(he,e)});let Xe=n(`span`);i(Je,Xe),i(Xe,r(`onChange 延迟同步`));let Ze=n(`label`);i(W,Ze),t(Ze,`label cursor-pointer justify-start gap-3`);let K=n(`input`);i(Ze,K),s(K,`type`,`checkbox`),t(K,`checkbox`),f(()=>{c(K,!!ge.value)}),m(K,`change`,e=>{ce(ge,e)});let Qe=n(`span`);i(Ze,Qe),t(Qe,`label-text`),i(Qe,r(`checked + onChange`));let q=n(`div`);i(W,q),t(q,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let $e=n(`p`);i(q,$e),i($e,r(`message: `));let et=o($e);i($e,et),f(()=>{u(et,fe.value||`空`)});let tt=n(`p`);i(q,tt),i(tt,r(`trimmed: `));let nt=o(tt);i(tt,nt),f(()=>{u(nt,pe.value||`空`)});let rt=n(`p`);i(q,rt),i(rt,r(`age: `));let it=o(rt);i(rt,it),f(()=>{u(it,String(me.value))});let at=n(`p`);i(q,at),i(at,r(`lazy: `));let ot=o(at);i(at,ot),f(()=>{u(ot,he.value||`空`)});let st=n(`p`);i(q,st),i(st,r(`accepted: `));let ct=o(st);i(st,ct),f(()=>{u(ct,ge.value?`true`:`false`)});let J=n(`section`);i(v,J),t(J,`space-y-3`);let lt=n(`div`);i(J,lt),t(lt,`flex flex-wrap items-center justify-between gap-3`);let ut=n(`h2`);i(lt,ut),t(ut,`text-xl font-semibold`),i(ut,r(`组件：真实 v-model vs 等价 props`));let dt=n(`span`);i(lt,dt),t(dt,`badge badge-info badge-lg`),i(dt,r(`component compare`));let ft=n(`div`);i(J,ft),t(ft,`grid gap-4 xl:grid-cols-2 items-start`);let Y=n(`div`);i(ft,Y),t(Y,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let pt=n(`div`);i(Y,pt),t(pt,`flex items-center justify-between gap-3`);let mt=n(`h3`);i(pt,mt),t(mt,`font-semibold`),i(mt,r(`Rue TSX 实际组件写法`));let ht=n(`span`);i(pt,ht),t(ht,`badge badge-primary`),i(ht,r(`v-model`));let gt=a(`rue:component:anchor`);i(Y,gt),f(()=>{let e=_(x,{label:`v-model={title.value}`,modelValue:O.value,onUpdateModelValue:e=>O.value=e});g(()=>p(e,Y,gt))});let _t=a(`rue:component:anchor`);i(Y,_t),f(()=>{let e=_(te,{title:le.value,onUpdateTitle:e=>le.value=e,titleModifiers:{trim:!0}});g(()=>p(e,Y,_t))});let vt=a(`rue:component:anchor`);i(Y,vt),f(()=>{let e=_(ne,{firstName:ue.value,onUpdateFirstName:e=>ue.value=e,firstNameModifiers:{trim:!0},lastName:de.value,onUpdateLastName:e=>de.value=e,lastNameModifiers:{lazy:!0}});g(()=>p(e,Y,vt))});let X=n(`div`);i(Y,X),t(X,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let yt=n(`p`);i(X,yt),i(yt,r(`title: `));let bt=o(yt);i(yt,bt),f(()=>{u(bt,O.value||`空`)});let xt=n(`p`);i(X,xt),i(xt,r(`articleTitle: `));let St=o(xt);i(xt,St),f(()=>{u(St,le.value||`空`)});let Z=n(`p`);i(X,Z),i(Z,r(`firstName / lastName: `));let Ct=o(Z);i(Z,Ct),f(()=>{u(Ct,ue.value)}),i(Z,r(` `));let wt=o(Z);i(Z,wt),f(()=>{u(wt,de.value)});let Q=n(`div`);i(ft,Q),t(Q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Tt=n(`div`);i(Q,Tt),t(Tt,`flex items-center justify-between gap-3`);let Et=n(`h3`);i(Tt,Et),t(Et,`font-semibold`),i(Et,r(`等价手写 props`));let Dt=n(`span`);i(Tt,Dt),t(Dt,`badge badge-secondary`),i(Dt,r(`modelValue / onUpdateX`));let Ot=a(`rue:component:anchor`);i(Q,Ot),f(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:ie});g(()=>p(e,Q,Ot))});let $=n(`div`);i(Q,$),t($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=n(`p`);i($,kt);let At=n(`strong`);i(kt,At),i(At,r(`v-model`)),i(kt,r(`-> modelValue + onUpdateModelValue`));let jt=n(`p`);i($,jt);let Mt=n(`strong`);i(jt,Mt),i(Mt,r(`v-model:trim-title`)),i(jt,r(`-> title + titleModifiers + onUpdateTitle`));let Nt=n(`p`);i($,Nt);let Pt=n(`strong`);i(Nt,Pt),i(Pt,r(`v-model:trim-first-name`)),i(Nt,r(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=n(`p`);i($,Ft);let It=n(`strong`);return i(Ft,It),i(It,r(`v-model:lazy-last-name`)),i(Ft,r(`-> lastName + lastNameModifiers + onUpdateLastName`)),d}):``;g(()=>p(d,h,F))}),i(h,r(` `));let I=a(`rue:slot:anchor`);return i(h,I),f(()=>{let o=S.value===`code`?v(()=>{let o=e(),s=n(`div`);i(o,s),t(s,`grid gap-6`);let c=n(`div`);i(s,c),t(c,`card bg-base-100 shadow overflow-auto`);let l=n(`div`);i(c,l),t(l,`card-body gap-3`);let u=n(`h2`);i(l,u),t(u,`card-title`),i(u,r(`Rue TSX 实际源码`));let d=a(`rue:component:anchor`);i(l,d),f(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:k});g(()=>p(e,l,d))});let m=n(`div`);i(s,m),t(m,`card bg-base-100 shadow overflow-auto`);let h=n(`div`);i(m,h),t(h,`card-body gap-3`);let v=n(`h2`);i(h,v),t(v,`card-title`),i(v,r(`手写 modelValue / value 对照`));let y=a(`rue:component:anchor`);i(h,y),f(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:re});g(()=>p(e,h,y))});let b=n(`div`);i(s,b),t(b,`card bg-base-100 shadow overflow-auto`);let x=n(`div`);i(b,x),t(x,`card-body gap-3`);let te=n(`h2`);i(x,te),t(te,`card-title`),i(te,r(`TSX-safe 修饰符写法`));let ne=a(`rue:component:anchor`);return i(x,ne),f(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:A});g(()=>p(e,x,ne))}),o}):``;g(()=>p(o,h,I))}),d})}),d,h),d})};export{le as default};