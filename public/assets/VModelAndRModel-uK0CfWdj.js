import{F as e,G as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,Z as u,d,dt as f,ht as p,l as m,st as h,t as g,vt as _,z as v}from"./vapor-runtime-BuwLbCGk.js";import{a as y}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as ee}from"./Code-DQxnq0in.js";import{t as b}from"./SidebarPlaygroundExample-BwOo72z2.js";var x=t=>d(n=>{let s=i(`label`,n);r(s,`floating-label`);let c=i(`input`,s);o(s,c),r(c,`input input-bordered w-full`),_(()=>{u(c,t.modelValue??``)}),a(c,`input`,e=>{t.onUpdateModelValue?.(e.target.value)});let l=i(`span`,s);o(s,l);let d=e(`rue:slot:anchor`);return o(l,d),_(()=>{let e=t.label;f(()=>m(e,l,d))}),s}),te=e=>{let{emitTitleUpdate:t}=y(`useSetup:0:0`,()=>p(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return d(n=>{let s=i(`label`,n);r(s,`floating-label`);let l=i(`input`,s);o(s,l),r(l,`input input-bordered w-full`),_(()=>{u(l,e.title??``)}),a(l,`input`,e.titleModifiers?.lazy?void 0:t),a(l,`change`,e.titleModifiers?.lazy?t:void 0);let d=i(`span`,s);return o(s,d),o(d,c(`title`)),s})},ne=e=>{let{emitFirstNameUpdate:t,emitLastNameUpdate:n}=y(`useSetup:0:0:dup1`,()=>p(()=>({emitFirstNameUpdate:t=>{let n=t.target.value;e.onUpdateFirstName?.(e.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:t=>{let n=t.target.value;e.onUpdateLastName?.(e.lastNameModifiers?.trim?n.trim():n)}})));return d(s=>{let l=i(`div`,s);r(l,`grid gap-3 md:grid-cols-2`);let d=i(`label`,l);o(l,d),r(d,`floating-label`);let f=i(`input`,d);o(d,f),r(f,`input input-bordered w-full`),_(()=>{u(f,e.firstName??``)}),a(f,`input`,e.firstNameModifiers?.lazy?void 0:t),a(f,`change`,e.firstNameModifiers?.lazy?t:void 0);let p=i(`span`,d);o(d,p),o(p,c(`firstName`));let m=i(`label`,l);o(l,m),r(m,`floating-label`);let h=i(`input`,m);o(m,h),r(h,`input input-bordered w-full`),_(()=>{u(h,e.lastName??``)}),a(h,`input`,e.lastNameModifiers?.lazy?void 0:n),a(h,`change`,e.lastNameModifiers?.lazy?n:void 0);let g=i(`span`,m);return o(m,g),o(g,c(`lastName`)),l})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
`),ce=`import { type FC, ref } from '@rue-js/rue'

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

export default Demo`,T=[`// TSX-safe 内建修饰符写法`,`<input `+re+`={message.value} />`,`<input `+ie+`={age.value} />`,`<input `+ae+`={lazyNote.value} />`,`<TitleField `+oe+`={articleTitle.value} />`,`<UserNameEditor `+C+`={firstName.value} />`,`<UserNameEditor `+se+`={lastName.value} />`,``,`// 冒号后的前导内建修饰符会映射到 xxxModifiers，并在原生元素上切换 input/change 等行为`].join(`
`),le=`// 实际 Rue TSX
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
/>`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>p(()=>({activeTab:y(`ref:1:0`,()=>h(`preview`)),message:y(`ref:1:1`,()=>h(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>h(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>h(`18`)),lazyNote:y(`ref:1:4`,()=>h(`blur to sync`)),accepted:y(`ref:1:5`,()=>h(!1)),title:y(`ref:1:6`,()=>h(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>h(`Inside Rue`)),firstName:y(`ref:1:8`,()=>h(`Rue`)),lastName:y(`ref:1:9`,()=>h(`JSX`)),manualMessage:y(`ref:1:10`,()=>h(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>h(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>h(`18`)),manualLazyNote:y(`ref:1:13`,()=>h(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>h(!1))})));return d(p=>{let h=n(),y=e(`rue:component:anchor`);return o(h,y),m(g(b,{children:d(()=>{let p=n(),h=i(`div`,p);o(p,h),r(h,`space-y-6`);let y=i(`div`,h);o(h,y),r(y,`space-y-3`);let b=i(`h1`,y);o(y,b),r(b,`text-5xl font-semibold`),o(b,c(`v-model / r-model`));let Se=i(`p`,y);o(y,Se),r(Se,`text-base-content/70 max-w-3xl`),o(Se,c(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=i(`div`,h);o(h,E),l(E,`role`,`tablist`),r(E,`tabs tabs-box w-fit`);let D=i(`button`,E);o(E,D),l(D,`role`,`tab`),_(()=>{r(D,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),a(D,`click`,()=>{S.value=`preview`}),o(D,c(`效果`));let O=i(`button`,E);o(E,O),l(O,`role`,`tab`),_(()=>{r(O,String(`tab ${S.value===`code`?`tab-active`:``}`))}),a(O,`click`,()=>{S.value=`code`}),o(O,c(`代码`));let k=e(`rue:slot:anchor`);o(h,k),_(()=>{let p=S.value===`preview`?d(()=>{let d=n(),p=i(`div`,d);o(d,p),r(p,`card bg-base-100 shadow`);let h=i(`div`,p);o(p,h),r(h,`card-body gap-6`);let y=i(`div`,h);o(h,y),l(y,`role`,`alert`),r(y,`alert alert-info`);let b=i(`span`,y);o(y,b),o(b,c(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=i(`section`,h);o(h,S),r(S,`space-y-3`);let w=i(`div`,S);o(S,w),r(w,`flex flex-wrap items-center justify-between gap-3`);let ce=i(`h2`,w);o(w,ce),r(ce,`text-xl font-semibold`),o(ce,c(`原生输入：真实指令 vs 手写等价`));let T=i(`div`,w);o(w,T),r(T,`flex flex-wrap gap-2`);let Se=i(`span`,T);o(T,Se),r(Se,`badge badge-primary`),o(Se,c(`directive`));let E=i(`span`,T);o(T,E),r(E,`badge badge-secondary`),o(E,c(`manual`));let D=i(`div`,S);o(S,D),r(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=i(`div`,D);o(D,O),r(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=i(`div`,O);o(O,k),r(k,`flex items-center justify-between gap-3`);let Ce=i(`h3`,k);o(k,Ce),r(Ce,`font-semibold`),o(Ce,c(`Rue TSX 实际写法`));let we=i(`span`,k);o(k,we),r(we,`badge badge-primary`),o(we,c(`v-model / r-model`));let A=i(`label`,O);o(O,A),r(A,`floating-label`);let Te=i(`input`,A);o(A,Te),r(Te,`input input-bordered w-full`),_(()=>{u(Te,re.value)}),a(Te,`input`,e=>{re.value=e.target.value});let Ee=i(`span`,A);o(A,Ee),o(Ee,c(`v-model`));let j=i(`label`,O);o(O,j),r(j,`floating-label`);let De=i(`input`,j);o(j,De),r(De,`input input-bordered w-full`),_(()=>{u(De,ie.value)}),a(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=i(`span`,j);o(j,Oe),o(Oe,c(`v-model:trim`));let M=i(`label`,O);o(O,M),r(M,`floating-label`);let ke=i(`input`,M);o(M,ke),l(ke,`type`,`number`),r(ke,`input input-bordered w-full`),_(()=>{u(ke,ae.value)}),a(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=i(`span`,M);o(M,Ae),o(Ae,c(`r-model:number`));let N=i(`label`,O);o(O,N),r(N,`floating-label`);let je=i(`input`,N);o(N,je),r(je,`input input-bordered w-full`),_(()=>{u(je,oe.value)}),a(je,`change`,e=>{oe.value=e.target.value});let Me=i(`span`,N);o(N,Me),o(Me,c(`r-model:lazy`));let P=i(`label`,O);o(O,P),r(P,`label cursor-pointer justify-start gap-3`);let Ne=i(`input`,P);o(P,Ne),l(Ne,`type`,`checkbox`),r(Ne,`checkbox`),_(()=>{t(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),a(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=i(`span`,P);o(P,Pe),r(Pe,`label-text`),o(Pe,c(`v-model checkbox`));let F=i(`div`,O);o(O,F),r(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=i(`p`,F);o(F,Fe),o(Fe,c(`message: `));let Ie=v(Fe);o(Fe,Ie),_(()=>{s(Ie,re.value||`空`)});let Le=i(`p`,F);o(F,Le),o(Le,c(`trimmed: `));let Re=v(Le);o(Le,Re),_(()=>{s(Re,ie.value||`空`)});let ze=i(`p`,F);o(F,ze),o(ze,c(`age: `));let Be=v(ze);o(ze,Be),_(()=>{s(Be,String(ae.value))});let Ve=i(`p`,F);o(F,Ve),o(Ve,c(`lazy: `));let He=v(Ve);o(Ve,He),_(()=>{s(He,oe.value||`空`)});let Ue=i(`p`,F);o(F,Ue),o(Ue,c(`accepted: `));let We=v(Ue);o(Ue,We),_(()=>{s(We,C.value?`true`:`false`)});let I=i(`div`,D);o(D,I),r(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=i(`div`,I);o(I,L),r(L,`flex items-center justify-between gap-3`);let Ge=i(`h3`,L);o(L,Ge),r(Ge,`font-semibold`),o(Ge,c(`手写 value / checked 对照`));let Ke=i(`span`,L);o(L,Ke),r(Ke,`badge badge-secondary`),o(Ke,c(`manual`));let R=i(`label`,I);o(I,R),r(R,`floating-label`);let qe=i(`input`,R);o(R,qe),r(qe,`input input-bordered w-full`),_(()=>{u(qe,_e.value)}),a(qe,`input`,e=>{ue(_e,e)});let Je=i(`span`,R);o(R,Je),o(Je,c(`value + onInput`));let z=i(`label`,I);o(I,z),r(z,`floating-label`);let Ye=i(`input`,z);o(z,Ye),r(Ye,`input input-bordered w-full`),_(()=>{u(Ye,ve.value)}),a(Ye,`input`,e=>{de(ve,e)});let Xe=i(`span`,z);o(z,Xe),o(Xe,c(`trim 后手写写回`));let B=i(`label`,I);o(I,B),r(B,`floating-label`);let Ze=i(`input`,B);o(B,Ze),l(Ze,`type`,`number`),r(Ze,`input input-bordered w-full`),_(()=>{u(Ze,String(ye.value))}),a(Ze,`input`,e=>{fe(ye,e)});let Qe=i(`span`,B);o(B,Qe),o(Qe,c(`parseFloat 后手写写回`));let V=i(`label`,I);o(I,V),r(V,`floating-label`);let $e=i(`input`,V);o(V,$e),r($e,`input input-bordered w-full`),_(()=>{u($e,be.value)}),a($e,`change`,e=>{ue(be,e)});let et=i(`span`,V);o(V,et),o(et,c(`onChange 延迟同步`));let H=i(`label`,I);o(I,H),r(H,`label cursor-pointer justify-start gap-3`);let tt=i(`input`,H);o(H,tt),l(tt,`type`,`checkbox`),r(tt,`checkbox`),_(()=>{t(tt,!!xe.value)}),a(tt,`change`,e=>{pe(xe,e)});let nt=i(`span`,H);o(H,nt),r(nt,`label-text`),o(nt,c(`checked + onChange`));let U=i(`div`,I);o(I,U),r(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=i(`p`,U);o(U,rt),o(rt,c(`message: `));let it=v(rt);o(rt,it),_(()=>{s(it,_e.value||`空`)});let at=i(`p`,U);o(U,at),o(at,c(`trimmed: `));let ot=v(at);o(at,ot),_(()=>{s(ot,ve.value||`空`)});let st=i(`p`,U);o(U,st),o(st,c(`age: `));let ct=v(st);o(st,ct),_(()=>{s(ct,String(ye.value))});let lt=i(`p`,U);o(U,lt),o(lt,c(`lazy: `));let ut=v(lt);o(lt,ut),_(()=>{s(ut,be.value||`空`)});let dt=i(`p`,U);o(U,dt),o(dt,c(`accepted: `));let ft=v(dt);o(dt,ft),_(()=>{s(ft,xe.value?`true`:`false`)});let W=i(`section`,h);o(h,W),r(W,`space-y-3`);let G=i(`div`,W);o(W,G),r(G,`flex flex-wrap items-center justify-between gap-3`);let pt=i(`h2`,G);o(G,pt),r(pt,`text-xl font-semibold`),o(pt,c(`组件：真实 v-model vs 等价 props`));let mt=i(`span`,G);o(G,mt),r(mt,`badge badge-info badge-lg`),o(mt,c(`component compare`));let K=i(`div`,W);o(W,K),r(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=i(`div`,K);o(K,q),r(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=i(`div`,q);o(q,J),r(J,`flex items-center justify-between gap-3`);let ht=i(`h3`,J);o(J,ht),r(ht,`font-semibold`),o(ht,c(`Rue TSX 实际组件写法`));let gt=i(`span`,J);o(J,gt),r(gt,`badge badge-primary`),o(gt,c(`v-model`));let _t=e(`rue:component:anchor`);o(q,_t),_(()=>{let e=g(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});f(()=>m(e,q,_t))});let vt=e(`rue:component:anchor`);o(q,vt),_(()=>{let e=g(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});f(()=>m(e,q,vt))});let yt=e(`rue:component:anchor`);o(q,yt),_(()=>{let e=g(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});f(()=>m(e,q,yt))});let Y=i(`div`,q);o(q,Y),r(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=i(`p`,Y);o(Y,bt),o(bt,c(`title: `));let xt=v(bt);o(bt,xt),_(()=>{s(xt,se.value||`空`)});let St=i(`p`,Y);o(Y,St),o(St,c(`articleTitle: `));let Ct=v(St);o(St,Ct),_(()=>{s(Ct,me.value||`空`)});let X=i(`p`,Y);o(Y,X),o(X,c(`firstName / lastName: `));let wt=v(X);o(X,wt),_(()=>{s(wt,he.value)}),o(X,c(` `));let Tt=v(X);o(X,Tt),_(()=>{s(Tt,ge.value)});let Z=i(`div`,K);o(K,Z),r(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=i(`div`,Z);o(Z,Q),r(Q,`flex items-center justify-between gap-3`);let Et=i(`h3`,Q);o(Q,Et),r(Et,`font-semibold`),o(Et,c(`等价手写 props`));let Dt=i(`span`,Q);o(Q,Dt),r(Dt,`badge badge-secondary`),o(Dt,c(`modelValue / onUpdateX`));let Ot=e(`rue:component:anchor`);o(Z,Ot),_(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:le});f(()=>m(e,Z,Ot))});let $=i(`div`,Z);o(Z,$),r($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=i(`p`,$);o($,kt);let At=i(`strong`,kt);o(kt,At),o(At,c(`v-model`)),o(kt,c(`-> modelValue + onUpdateModelValue`));let jt=i(`p`,$);o($,jt);let Mt=i(`strong`,jt);o(jt,Mt),o(Mt,c(`v-model:trim-title`)),o(jt,c(`-> title + titleModifiers + onUpdateTitle`));let Nt=i(`p`,$);o($,Nt);let Pt=i(`strong`,Nt);o(Nt,Pt),o(Pt,c(`v-model:trim-first-name`)),o(Nt,c(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=i(`p`,$);o($,Ft);let It=i(`strong`,Ft);return o(Ft,It),o(It,c(`v-model:lazy-last-name`)),o(Ft,c(`-> lastName + lastNameModifiers + onUpdateLastName`)),d}):``;f(()=>m(p,h,k))}),o(h,c(` `));let Ce=e(`rue:slot:anchor`);return o(h,Ce),_(()=>{let t=S.value===`code`?d(()=>{let t=n(),a=i(`div`,t);o(t,a),r(a,`grid gap-6`);let s=i(`div`,a);o(a,s),r(s,`card bg-base-100 shadow overflow-auto`);let l=i(`div`,s);o(s,l),r(l,`card-body gap-3`);let u=i(`h2`,l);o(l,u),r(u,`card-title`),o(u,c(`Rue TSX 实际源码`));let d=e(`rue:component:anchor`);o(l,d),_(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:w});f(()=>m(e,l,d))});let p=i(`div`,a);o(a,p),r(p,`card bg-base-100 shadow overflow-auto`);let h=i(`div`,p);o(p,h),r(h,`card-body gap-3`);let v=i(`h2`,h);o(h,v),r(v,`card-title`),o(v,c(`手写 modelValue / value 对照`));let y=e(`rue:component:anchor`);o(h,y),_(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:ce});f(()=>m(e,h,y))});let b=i(`div`,a);o(a,b),r(b,`card bg-base-100 shadow overflow-auto`);let x=i(`div`,b);o(b,x),r(x,`card-body gap-3`);let te=i(`h2`,x);o(x,te),r(te,`card-title`),o(te,c(`TSX-safe 修饰符写法`));let ne=e(`rue:component:anchor`);return o(x,ne),_(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:T});f(()=>m(e,x,ne))}),t}):``;f(()=>m(t,h,Ce))}),p})}),h,y),h})};export{me as default};