import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,pt as p,qt as m,s as h,st as g,t as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as ee}from"./Code-5DOEyGxf.js";import{r as b}from"./SidebarPlaygroundExample-cASgDpH3.js";var x=r=>u(i=>{let l=e(`label`,i);c(l,`floating-label`);let u=e(`input`,l);o(l,u),c(u,`input input-bordered w-full`),a(()=>{p(u,r.modelValue??``)}),n(u,`input`,e=>{r.onUpdateModelValue?.(e.target.value)});let d=e(`span`,l);o(l,d);let f=s(`rue:slot:anchor`);return o(d,f),a(()=>{let e=r.label;t(()=>h(e,d,f))}),l}),te=t=>{let{emitTitleUpdate:r}=y(`useSetup:0:0`,()=>m(()=>({emitTitleUpdate:e=>{let n=e.target.value;t.onUpdateTitle?.(t.titleModifiers?.trim?n.trim():n)}})));return u(i=>{let s=e(`label`,i);c(s,`floating-label`);let u=e(`input`,s);o(s,u),c(u,`input input-bordered w-full`),a(()=>{p(u,t.title??``)}),n(u,`input`,t.titleModifiers?.lazy?void 0:r),n(u,`change`,t.titleModifiers?.lazy?r:void 0);let d=e(`span`,s);return o(s,d),o(d,l(`title`)),s})},ne=t=>{let{emitFirstNameUpdate:r,emitLastNameUpdate:i}=y(`useSetup:0:0:dup1`,()=>m(()=>({emitFirstNameUpdate:e=>{let n=e.target.value;t.onUpdateFirstName?.(t.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:e=>{let n=e.target.value;t.onUpdateLastName?.(t.lastNameModifiers?.trim?n.trim():n)}})));return u(s=>{let u=e(`div`,s);c(u,`grid gap-3 md:grid-cols-2`);let d=e(`label`,u);o(u,d),c(d,`floating-label`);let f=e(`input`,d);o(d,f),c(f,`input input-bordered w-full`),a(()=>{p(f,t.firstName??``)}),n(f,`input`,t.firstNameModifiers?.lazy?void 0:r),n(f,`change`,t.firstNameModifiers?.lazy?r:void 0);let m=e(`span`,d);o(d,m),o(m,l(`firstName`));let h=e(`label`,u);o(u,h),c(h,`floating-label`);let g=e(`input`,h);o(h,g),c(g,`input input-bordered w-full`),a(()=>{p(g,t.lastName??``)}),n(g,`input`,t.lastNameModifiers?.lazy?void 0:i),n(g,`change`,t.lastNameModifiers?.lazy?i:void 0);let _=e(`span`,h);return o(h,_),o(_,l(`lastName`)),u})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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
/>`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>m(()=>({activeTab:y(`ref:1:0`,()=>i(`preview`)),message:y(`ref:1:1`,()=>i(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>i(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>i(`18`)),lazyNote:y(`ref:1:4`,()=>i(`blur to sync`)),accepted:y(`ref:1:5`,()=>i(!1)),title:y(`ref:1:6`,()=>i(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>i(`Inside Rue`)),firstName:y(`ref:1:8`,()=>i(`Rue`)),lastName:y(`ref:1:9`,()=>i(`JSX`)),manualMessage:y(`ref:1:10`,()=>i(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>i(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>i(`18`)),manualLazyNote:y(`ref:1:13`,()=>i(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>i(!1))})));return u(i=>{let m=r(),y=s(`rue:component:anchor`);return o(m,y),h(_(b,{children:u(()=>{let i=r(),m=e(`div`,i);o(i,m),c(m,`space-y-6`);let y=e(`div`,m);o(m,y),c(y,`space-y-3`);let b=e(`h1`,y);o(y,b),c(b,`text-5xl font-semibold`),o(b,l(`v-model / r-model`));let Se=e(`p`,y);o(y,Se),c(Se,`text-base-content/70 max-w-3xl`),o(Se,l(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=e(`div`,m);o(m,E),f(E,`role`,`tablist`),c(E,`tabs tabs-box w-fit`);let D=e(`button`,E);o(E,D),f(D,`role`,`tab`),a(()=>{c(D,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),n(D,`click`,()=>{S.value=`preview`}),o(D,l(`效果`));let O=e(`button`,E);o(E,O),f(O,`role`,`tab`),a(()=>{c(O,String(`tab ${S.value===`code`?`tab-active`:``}`))}),n(O,`click`,()=>{S.value=`code`}),o(O,l(`代码`));let k=s(`rue:slot:anchor`);o(m,k),a(()=>{let i=S.value===`preview`?u(()=>{let i=r(),u=e(`div`,i);o(i,u),c(u,`card bg-base-100 shadow`);let m=e(`div`,u);o(u,m),c(m,`card-body gap-6`);let y=e(`div`,m);o(m,y),f(y,`role`,`alert`),c(y,`alert alert-info`);let b=e(`span`,y);o(y,b),o(b,l(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=e(`section`,m);o(m,S),c(S,`space-y-3`);let w=e(`div`,S);o(S,w),c(w,`flex flex-wrap items-center justify-between gap-3`);let ce=e(`h2`,w);o(w,ce),c(ce,`text-xl font-semibold`),o(ce,l(`原生输入：真实指令 vs 手写等价`));let T=e(`div`,w);o(w,T),c(T,`flex flex-wrap gap-2`);let Se=e(`span`,T);o(T,Se),c(Se,`badge badge-primary`),o(Se,l(`directive`));let E=e(`span`,T);o(T,E),c(E,`badge badge-secondary`),o(E,l(`manual`));let D=e(`div`,S);o(S,D),c(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=e(`div`,D);o(D,O),c(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=e(`div`,O);o(O,k),c(k,`flex items-center justify-between gap-3`);let Ce=e(`h3`,k);o(k,Ce),c(Ce,`font-semibold`),o(Ce,l(`Rue TSX 实际写法`));let we=e(`span`,k);o(k,we),c(we,`badge badge-primary`),o(we,l(`v-model / r-model`));let A=e(`label`,O);o(O,A),c(A,`floating-label`);let Te=e(`input`,A);o(A,Te),c(Te,`input input-bordered w-full`),a(()=>{p(Te,re.value)}),n(Te,`input`,e=>{re.value=e.target.value});let Ee=e(`span`,A);o(A,Ee),o(Ee,l(`v-model`));let j=e(`label`,O);o(O,j),c(j,`floating-label`);let De=e(`input`,j);o(j,De),c(De,`input input-bordered w-full`),a(()=>{p(De,ie.value)}),n(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=e(`span`,j);o(j,Oe),o(Oe,l(`v-model:trim`));let M=e(`label`,O);o(O,M),c(M,`floating-label`);let ke=e(`input`,M);o(M,ke),f(ke,`type`,`number`),c(ke,`input input-bordered w-full`),a(()=>{p(ke,ae.value)}),n(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=e(`span`,M);o(M,Ae),o(Ae,l(`r-model:number`));let N=e(`label`,O);o(O,N),c(N,`floating-label`);let je=e(`input`,N);o(N,je),c(je,`input input-bordered w-full`),a(()=>{p(je,oe.value)}),n(je,`change`,e=>{oe.value=e.target.value});let Me=e(`span`,N);o(N,Me),o(Me,l(`r-model:lazy`));let P=e(`label`,O);o(O,P),c(P,`label cursor-pointer justify-start gap-3`);let Ne=e(`input`,P);o(P,Ne),f(Ne,`type`,`checkbox`),c(Ne,`checkbox`),a(()=>{g(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),n(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=e(`span`,P);o(P,Pe),c(Pe,`label-text`),o(Pe,l(`v-model checkbox`));let F=e(`div`,O);o(O,F),c(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=e(`p`,F);o(F,Fe),o(Fe,l(`message: `));let Ie=v(Fe);o(Fe,Ie),a(()=>{d(Ie,re.value||`空`)});let Le=e(`p`,F);o(F,Le),o(Le,l(`trimmed: `));let Re=v(Le);o(Le,Re),a(()=>{d(Re,ie.value||`空`)});let ze=e(`p`,F);o(F,ze),o(ze,l(`age: `));let Be=v(ze);o(ze,Be),a(()=>{d(Be,String(ae.value))});let Ve=e(`p`,F);o(F,Ve),o(Ve,l(`lazy: `));let He=v(Ve);o(Ve,He),a(()=>{d(He,oe.value||`空`)});let Ue=e(`p`,F);o(F,Ue),o(Ue,l(`accepted: `));let We=v(Ue);o(Ue,We),a(()=>{d(We,C.value?`true`:`false`)});let I=e(`div`,D);o(D,I),c(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=e(`div`,I);o(I,L),c(L,`flex items-center justify-between gap-3`);let Ge=e(`h3`,L);o(L,Ge),c(Ge,`font-semibold`),o(Ge,l(`手写 value / checked 对照`));let Ke=e(`span`,L);o(L,Ke),c(Ke,`badge badge-secondary`),o(Ke,l(`manual`));let R=e(`label`,I);o(I,R),c(R,`floating-label`);let qe=e(`input`,R);o(R,qe),c(qe,`input input-bordered w-full`),a(()=>{p(qe,_e.value)}),n(qe,`input`,e=>{ue(_e,e)});let Je=e(`span`,R);o(R,Je),o(Je,l(`value + onInput`));let z=e(`label`,I);o(I,z),c(z,`floating-label`);let Ye=e(`input`,z);o(z,Ye),c(Ye,`input input-bordered w-full`),a(()=>{p(Ye,ve.value)}),n(Ye,`input`,e=>{de(ve,e)});let Xe=e(`span`,z);o(z,Xe),o(Xe,l(`trim 后手写写回`));let B=e(`label`,I);o(I,B),c(B,`floating-label`);let Ze=e(`input`,B);o(B,Ze),f(Ze,`type`,`number`),c(Ze,`input input-bordered w-full`),a(()=>{p(Ze,String(ye.value))}),n(Ze,`input`,e=>{fe(ye,e)});let Qe=e(`span`,B);o(B,Qe),o(Qe,l(`parseFloat 后手写写回`));let V=e(`label`,I);o(I,V),c(V,`floating-label`);let $e=e(`input`,V);o(V,$e),c($e,`input input-bordered w-full`),a(()=>{p($e,be.value)}),n($e,`change`,e=>{ue(be,e)});let et=e(`span`,V);o(V,et),o(et,l(`onChange 延迟同步`));let H=e(`label`,I);o(I,H),c(H,`label cursor-pointer justify-start gap-3`);let tt=e(`input`,H);o(H,tt),f(tt,`type`,`checkbox`),c(tt,`checkbox`),a(()=>{g(tt,!!xe.value)}),n(tt,`change`,e=>{pe(xe,e)});let nt=e(`span`,H);o(H,nt),c(nt,`label-text`),o(nt,l(`checked + onChange`));let U=e(`div`,I);o(I,U),c(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=e(`p`,U);o(U,rt),o(rt,l(`message: `));let it=v(rt);o(rt,it),a(()=>{d(it,_e.value||`空`)});let at=e(`p`,U);o(U,at),o(at,l(`trimmed: `));let ot=v(at);o(at,ot),a(()=>{d(ot,ve.value||`空`)});let st=e(`p`,U);o(U,st),o(st,l(`age: `));let ct=v(st);o(st,ct),a(()=>{d(ct,String(ye.value))});let lt=e(`p`,U);o(U,lt),o(lt,l(`lazy: `));let ut=v(lt);o(lt,ut),a(()=>{d(ut,be.value||`空`)});let dt=e(`p`,U);o(U,dt),o(dt,l(`accepted: `));let ft=v(dt);o(dt,ft),a(()=>{d(ft,xe.value?`true`:`false`)});let W=e(`section`,m);o(m,W),c(W,`space-y-3`);let G=e(`div`,W);o(W,G),c(G,`flex flex-wrap items-center justify-between gap-3`);let pt=e(`h2`,G);o(G,pt),c(pt,`text-xl font-semibold`),o(pt,l(`组件：真实 v-model vs 等价 props`));let mt=e(`span`,G);o(G,mt),c(mt,`badge badge-info badge-lg`),o(mt,l(`component compare`));let K=e(`div`,W);o(W,K),c(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=e(`div`,K);o(K,q),c(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=e(`div`,q);o(q,J),c(J,`flex items-center justify-between gap-3`);let ht=e(`h3`,J);o(J,ht),c(ht,`font-semibold`),o(ht,l(`Rue TSX 实际组件写法`));let gt=e(`span`,J);o(J,gt),c(gt,`badge badge-primary`),o(gt,l(`v-model`));let _t=s(`rue:component:anchor`);o(q,_t),a(()=>{let e=_(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});t(()=>h(e,q,_t))});let vt=s(`rue:component:anchor`);o(q,vt),a(()=>{let e=_(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});t(()=>h(e,q,vt))});let yt=s(`rue:component:anchor`);o(q,yt),a(()=>{let e=_(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});t(()=>h(e,q,yt))});let Y=e(`div`,q);o(q,Y),c(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=e(`p`,Y);o(Y,bt),o(bt,l(`title: `));let xt=v(bt);o(bt,xt),a(()=>{d(xt,se.value||`空`)});let St=e(`p`,Y);o(Y,St),o(St,l(`articleTitle: `));let Ct=v(St);o(St,Ct),a(()=>{d(Ct,me.value||`空`)});let X=e(`p`,Y);o(Y,X),o(X,l(`firstName / lastName: `));let wt=v(X);o(X,wt),a(()=>{d(wt,he.value)}),o(X,l(` `));let Tt=v(X);o(X,Tt),a(()=>{d(Tt,ge.value)});let Z=e(`div`,K);o(K,Z),c(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=e(`div`,Z);o(Z,Q),c(Q,`flex items-center justify-between gap-3`);let Et=e(`h3`,Q);o(Q,Et),c(Et,`font-semibold`),o(Et,l(`等价手写 props`));let Dt=e(`span`,Q);o(Q,Dt),c(Dt,`badge badge-secondary`),o(Dt,l(`modelValue / onUpdateX`));let Ot=s(`rue:component:anchor`);o(Z,Ot),a(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:le});t(()=>h(e,Z,Ot))});let $=e(`div`,Z);o(Z,$),c($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=e(`p`,$);o($,kt);let At=e(`strong`,kt);o(kt,At),o(At,l(`v-model`)),o(kt,l(`-> modelValue + onUpdateModelValue`));let jt=e(`p`,$);o($,jt);let Mt=e(`strong`,jt);o(jt,Mt),o(Mt,l(`v-model:trim-title`)),o(jt,l(`-> title + titleModifiers + onUpdateTitle`));let Nt=e(`p`,$);o($,Nt);let Pt=e(`strong`,Nt);o(Nt,Pt),o(Pt,l(`v-model:trim-first-name`)),o(Nt,l(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=e(`p`,$);o($,Ft);let It=e(`strong`,Ft);return o(Ft,It),o(It,l(`v-model:lazy-last-name`)),o(Ft,l(`-> lastName + lastNameModifiers + onUpdateLastName`)),i}):``;t(()=>h(i,m,k))}),o(m,l(` `));let Ce=s(`rue:slot:anchor`);return o(m,Ce),a(()=>{let n=S.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`grid gap-6`);let u=e(`div`,i);o(i,u),c(u,`card bg-base-100 shadow overflow-auto`);let d=e(`div`,u);o(u,d),c(d,`card-body gap-3`);let f=e(`h2`,d);o(d,f),c(f,`card-title`),o(f,l(`Rue TSX 实际源码`));let p=s(`rue:component:anchor`);o(d,p),a(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:w});t(()=>h(e,d,p))});let m=e(`div`,i);o(i,m),c(m,`card bg-base-100 shadow overflow-auto`);let g=e(`div`,m);o(m,g),c(g,`card-body gap-3`);let v=e(`h2`,g);o(g,v),c(v,`card-title`),o(v,l(`手写 modelValue / value 对照`));let y=s(`rue:component:anchor`);o(g,y),a(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:ce});t(()=>h(e,g,y))});let b=e(`div`,i);o(i,b),c(b,`card bg-base-100 shadow overflow-auto`);let x=e(`div`,b);o(b,x),c(x,`card-body gap-3`);let te=e(`h2`,x);o(x,te),c(te,`card-title`),o(te,l(`TSX-safe 修饰符写法`));let ne=s(`rue:component:anchor`);return o(x,ne),a(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:T});t(()=>h(e,x,ne))}),n}):``;t(()=>h(n,m,Ce))}),i})}),m,y),m})};export{me as default};