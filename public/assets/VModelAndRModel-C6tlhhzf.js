import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,et as u,kt as d,l as f,ot as p,q as m,st as h,t as g,tt as _,xt as v}from"./vapor-runtime-BAZOdMd8.js";import{a as y}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as ee}from"./Code-DY4Ua5uc.js";import{t as b}from"./SidebarPlaygroundExample-B8LFNSBu.js";var x=e=>l(t=>{let n=a(`label`,t);_(n,`floating-label`);let i=a(`input`,n);r(n,i),_(i,`input input-bordered w-full`),d(()=>{p(i,e.modelValue??``)}),o(i,`input`,t=>{e.onUpdateModelValue?.(t.target.value)});let c=a(`span`,n);r(n,c);let l=s(`rue:slot:anchor`);return r(c,l),d(()=>{let t=e.label;v(()=>f(t,c,l))}),n}),te=e=>{let{emitTitleUpdate:n}=y(`useSetup:0:0`,()=>t(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return l(t=>{let i=a(`label`,t);_(i,`floating-label`);let s=a(`input`,i);r(i,s),_(s,`input input-bordered w-full`),d(()=>{p(s,e.title??``)}),o(s,`input`,e.titleModifiers?.lazy?void 0:n),o(s,`change`,e.titleModifiers?.lazy?n:void 0);let c=a(`span`,i);return r(i,c),r(c,m(`title`)),i})},ne=e=>{let{emitFirstNameUpdate:n,emitLastNameUpdate:i}=y(`useSetup:0:0:dup1`,()=>t(()=>({emitFirstNameUpdate:t=>{let n=t.target.value;e.onUpdateFirstName?.(e.firstNameModifiers?.trim?n.trim():n)},emitLastNameUpdate:t=>{let n=t.target.value;e.onUpdateLastName?.(e.lastNameModifiers?.trim?n.trim():n)}})));return l(t=>{let s=a(`div`,t);_(s,`grid gap-3 md:grid-cols-2`);let c=a(`label`,s);r(s,c),_(c,`floating-label`);let l=a(`input`,c);r(c,l),_(l,`input input-bordered w-full`),d(()=>{p(l,e.firstName??``)}),o(l,`input`,e.firstNameModifiers?.lazy?void 0:n),o(l,`change`,e.firstNameModifiers?.lazy?n:void 0);let u=a(`span`,c);r(c,u),r(u,m(`firstName`));let f=a(`label`,s);r(s,f),_(f,`floating-label`);let h=a(`input`,f);r(f,h),_(h,`input input-bordered w-full`),d(()=>{p(h,e.lastName??``)}),o(h,`input`,e.lastNameModifiers?.lazy?void 0:i),o(h,`change`,e.lastNameModifiers?.lazy?i:void 0);let g=a(`span`,f);return r(f,g),r(g,m(`lastName`)),s})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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
/>`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>t(()=>({activeTab:y(`ref:1:0`,()=>c(`preview`)),message:y(`ref:1:1`,()=>c(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>c(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>c(`18`)),lazyNote:y(`ref:1:4`,()=>c(`blur to sync`)),accepted:y(`ref:1:5`,()=>c(!1)),title:y(`ref:1:6`,()=>c(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>c(`Inside Rue`)),firstName:y(`ref:1:8`,()=>c(`Rue`)),lastName:y(`ref:1:9`,()=>c(`JSX`)),manualMessage:y(`ref:1:10`,()=>c(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>c(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>c(`18`)),manualLazyNote:y(`ref:1:13`,()=>c(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>c(!1))})));return l(t=>{let c=n(),y=s(`rue:component:anchor`);return r(c,y),f(g(b,{children:l(()=>{let t=n(),c=a(`div`,t);r(t,c),_(c,`space-y-6`);let y=a(`div`,c);r(c,y),_(y,`space-y-3`);let b=a(`h1`,y);r(y,b),_(b,`text-5xl font-semibold`),r(b,m(`v-model / r-model`));let Se=a(`p`,y);r(y,Se),_(Se,`text-base-content/70 max-w-3xl`),r(Se,m(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=a(`div`,c);r(c,E),e(E,`role`,`tablist`),_(E,`tabs tabs-box w-fit`);let D=a(`button`,E);r(E,D),e(D,`role`,`tab`),d(()=>{_(D,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),o(D,`click`,()=>{S.value=`preview`}),r(D,m(`效果`));let O=a(`button`,E);r(E,O),e(O,`role`,`tab`),d(()=>{_(O,String(`tab ${S.value===`code`?`tab-active`:``}`))}),o(O,`click`,()=>{S.value=`code`}),r(O,m(`代码`));let k=s(`rue:slot:anchor`);r(c,k),d(()=>{let t=S.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),_(c,`card bg-base-100 shadow`);let l=a(`div`,c);r(c,l),_(l,`card-body gap-6`);let y=a(`div`,l);r(l,y),e(y,`role`,`alert`),_(y,`alert alert-info`);let b=a(`span`,y);r(y,b),r(b,m(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=a(`section`,l);r(l,S),_(S,`space-y-3`);let w=a(`div`,S);r(S,w),_(w,`flex flex-wrap items-center justify-between gap-3`);let ce=a(`h2`,w);r(w,ce),_(ce,`text-xl font-semibold`),r(ce,m(`原生输入：真实指令 vs 手写等价`));let T=a(`div`,w);r(w,T),_(T,`flex flex-wrap gap-2`);let Se=a(`span`,T);r(T,Se),_(Se,`badge badge-primary`),r(Se,m(`directive`));let E=a(`span`,T);r(T,E),_(E,`badge badge-secondary`),r(E,m(`manual`));let D=a(`div`,S);r(S,D),_(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=a(`div`,D);r(D,O),_(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=a(`div`,O);r(O,k),_(k,`flex items-center justify-between gap-3`);let Ce=a(`h3`,k);r(k,Ce),_(Ce,`font-semibold`),r(Ce,m(`Rue TSX 实际写法`));let we=a(`span`,k);r(k,we),_(we,`badge badge-primary`),r(we,m(`v-model / r-model`));let A=a(`label`,O);r(O,A),_(A,`floating-label`);let Te=a(`input`,A);r(A,Te),_(Te,`input input-bordered w-full`),d(()=>{p(Te,re.value)}),o(Te,`input`,e=>{re.value=e.target.value});let Ee=a(`span`,A);r(A,Ee),r(Ee,m(`v-model`));let j=a(`label`,O);r(O,j),_(j,`floating-label`);let De=a(`input`,j);r(j,De),_(De,`input input-bordered w-full`),d(()=>{p(De,ie.value)}),o(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=a(`span`,j);r(j,Oe),r(Oe,m(`v-model:trim`));let M=a(`label`,O);r(O,M),_(M,`floating-label`);let ke=a(`input`,M);r(M,ke),e(ke,`type`,`number`),_(ke,`input input-bordered w-full`),d(()=>{p(ke,ae.value)}),o(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=a(`span`,M);r(M,Ae),r(Ae,m(`r-model:number`));let N=a(`label`,O);r(O,N),_(N,`floating-label`);let je=a(`input`,N);r(N,je),_(je,`input input-bordered w-full`),d(()=>{p(je,oe.value)}),o(je,`change`,e=>{oe.value=e.target.value});let Me=a(`span`,N);r(N,Me),r(Me,m(`r-model:lazy`));let P=a(`label`,O);r(O,P),_(P,`label cursor-pointer justify-start gap-3`);let Ne=a(`input`,P);r(P,Ne),e(Ne,`type`,`checkbox`),_(Ne,`checkbox`),d(()=>{u(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),o(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=a(`span`,P);r(P,Pe),_(Pe,`label-text`),r(Pe,m(`v-model checkbox`));let F=a(`div`,O);r(O,F),_(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=a(`p`,F);r(F,Fe),r(Fe,m(`message: `));let Ie=i(Fe);r(Fe,Ie),d(()=>{h(Ie,re.value||`空`)});let Le=a(`p`,F);r(F,Le),r(Le,m(`trimmed: `));let Re=i(Le);r(Le,Re),d(()=>{h(Re,ie.value||`空`)});let ze=a(`p`,F);r(F,ze),r(ze,m(`age: `));let Be=i(ze);r(ze,Be),d(()=>{h(Be,String(ae.value))});let Ve=a(`p`,F);r(F,Ve),r(Ve,m(`lazy: `));let He=i(Ve);r(Ve,He),d(()=>{h(He,oe.value||`空`)});let Ue=a(`p`,F);r(F,Ue),r(Ue,m(`accepted: `));let We=i(Ue);r(Ue,We),d(()=>{h(We,C.value?`true`:`false`)});let I=a(`div`,D);r(D,I),_(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=a(`div`,I);r(I,L),_(L,`flex items-center justify-between gap-3`);let Ge=a(`h3`,L);r(L,Ge),_(Ge,`font-semibold`),r(Ge,m(`手写 value / checked 对照`));let Ke=a(`span`,L);r(L,Ke),_(Ke,`badge badge-secondary`),r(Ke,m(`manual`));let R=a(`label`,I);r(I,R),_(R,`floating-label`);let qe=a(`input`,R);r(R,qe),_(qe,`input input-bordered w-full`),d(()=>{p(qe,_e.value)}),o(qe,`input`,e=>{ue(_e,e)});let Je=a(`span`,R);r(R,Je),r(Je,m(`value + onInput`));let z=a(`label`,I);r(I,z),_(z,`floating-label`);let Ye=a(`input`,z);r(z,Ye),_(Ye,`input input-bordered w-full`),d(()=>{p(Ye,ve.value)}),o(Ye,`input`,e=>{de(ve,e)});let Xe=a(`span`,z);r(z,Xe),r(Xe,m(`trim 后手写写回`));let B=a(`label`,I);r(I,B),_(B,`floating-label`);let Ze=a(`input`,B);r(B,Ze),e(Ze,`type`,`number`),_(Ze,`input input-bordered w-full`),d(()=>{p(Ze,String(ye.value))}),o(Ze,`input`,e=>{fe(ye,e)});let Qe=a(`span`,B);r(B,Qe),r(Qe,m(`parseFloat 后手写写回`));let V=a(`label`,I);r(I,V),_(V,`floating-label`);let $e=a(`input`,V);r(V,$e),_($e,`input input-bordered w-full`),d(()=>{p($e,be.value)}),o($e,`change`,e=>{ue(be,e)});let et=a(`span`,V);r(V,et),r(et,m(`onChange 延迟同步`));let H=a(`label`,I);r(I,H),_(H,`label cursor-pointer justify-start gap-3`);let tt=a(`input`,H);r(H,tt),e(tt,`type`,`checkbox`),_(tt,`checkbox`),d(()=>{u(tt,!!xe.value)}),o(tt,`change`,e=>{pe(xe,e)});let nt=a(`span`,H);r(H,nt),_(nt,`label-text`),r(nt,m(`checked + onChange`));let U=a(`div`,I);r(I,U),_(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=a(`p`,U);r(U,rt),r(rt,m(`message: `));let it=i(rt);r(rt,it),d(()=>{h(it,_e.value||`空`)});let at=a(`p`,U);r(U,at),r(at,m(`trimmed: `));let ot=i(at);r(at,ot),d(()=>{h(ot,ve.value||`空`)});let st=a(`p`,U);r(U,st),r(st,m(`age: `));let ct=i(st);r(st,ct),d(()=>{h(ct,String(ye.value))});let lt=a(`p`,U);r(U,lt),r(lt,m(`lazy: `));let ut=i(lt);r(lt,ut),d(()=>{h(ut,be.value||`空`)});let dt=a(`p`,U);r(U,dt),r(dt,m(`accepted: `));let ft=i(dt);r(dt,ft),d(()=>{h(ft,xe.value?`true`:`false`)});let W=a(`section`,l);r(l,W),_(W,`space-y-3`);let G=a(`div`,W);r(W,G),_(G,`flex flex-wrap items-center justify-between gap-3`);let pt=a(`h2`,G);r(G,pt),_(pt,`text-xl font-semibold`),r(pt,m(`组件：真实 v-model vs 等价 props`));let mt=a(`span`,G);r(G,mt),_(mt,`badge badge-info badge-lg`),r(mt,m(`component compare`));let K=a(`div`,W);r(W,K),_(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=a(`div`,K);r(K,q),_(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=a(`div`,q);r(q,J),_(J,`flex items-center justify-between gap-3`);let ht=a(`h3`,J);r(J,ht),_(ht,`font-semibold`),r(ht,m(`Rue TSX 实际组件写法`));let gt=a(`span`,J);r(J,gt),_(gt,`badge badge-primary`),r(gt,m(`v-model`));let _t=s(`rue:component:anchor`);r(q,_t),d(()=>{let e=g(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});v(()=>f(e,q,_t))});let vt=s(`rue:component:anchor`);r(q,vt),d(()=>{let e=g(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});v(()=>f(e,q,vt))});let yt=s(`rue:component:anchor`);r(q,yt),d(()=>{let e=g(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});v(()=>f(e,q,yt))});let Y=a(`div`,q);r(q,Y),_(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=a(`p`,Y);r(Y,bt),r(bt,m(`title: `));let xt=i(bt);r(bt,xt),d(()=>{h(xt,se.value||`空`)});let St=a(`p`,Y);r(Y,St),r(St,m(`articleTitle: `));let Ct=i(St);r(St,Ct),d(()=>{h(Ct,me.value||`空`)});let X=a(`p`,Y);r(Y,X),r(X,m(`firstName / lastName: `));let wt=i(X);r(X,wt),d(()=>{h(wt,he.value)}),r(X,m(` `));let Tt=i(X);r(X,Tt),d(()=>{h(Tt,ge.value)});let Z=a(`div`,K);r(K,Z),_(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=a(`div`,Z);r(Z,Q),_(Q,`flex items-center justify-between gap-3`);let Et=a(`h3`,Q);r(Q,Et),_(Et,`font-semibold`),r(Et,m(`等价手写 props`));let Dt=a(`span`,Q);r(Q,Dt),_(Dt,`badge badge-secondary`),r(Dt,m(`modelValue / onUpdateX`));let Ot=s(`rue:component:anchor`);r(Z,Ot),d(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:le});v(()=>f(e,Z,Ot))});let $=a(`div`,Z);r(Z,$),_($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=a(`p`,$);r($,kt);let At=a(`strong`,kt);r(kt,At),r(At,m(`v-model`)),r(kt,m(`-> modelValue + onUpdateModelValue`));let jt=a(`p`,$);r($,jt);let Mt=a(`strong`,jt);r(jt,Mt),r(Mt,m(`v-model:trim-title`)),r(jt,m(`-> title + titleModifiers + onUpdateTitle`));let Nt=a(`p`,$);r($,Nt);let Pt=a(`strong`,Nt);r(Nt,Pt),r(Pt,m(`v-model:trim-first-name`)),r(Nt,m(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=a(`p`,$);r($,Ft);let It=a(`strong`,Ft);return r(Ft,It),r(It,m(`v-model:lazy-last-name`)),r(Ft,m(`-> lastName + lastNameModifiers + onUpdateLastName`)),t}):``;v(()=>f(t,c,k))}),r(c,m(` `));let Ce=s(`rue:slot:anchor`);return r(c,Ce),d(()=>{let e=S.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),_(t,`grid gap-6`);let i=a(`div`,t);r(t,i),_(i,`card bg-base-100 shadow overflow-auto`);let o=a(`div`,i);r(i,o),_(o,`card-body gap-3`);let c=a(`h2`,o);r(o,c),_(c,`card-title`),r(c,m(`Rue TSX 实际源码`));let l=s(`rue:component:anchor`);r(o,l),d(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:w});v(()=>f(e,o,l))});let u=a(`div`,t);r(t,u),_(u,`card bg-base-100 shadow overflow-auto`);let p=a(`div`,u);r(u,p),_(p,`card-body gap-3`);let h=a(`h2`,p);r(p,h),_(h,`card-title`),r(h,m(`手写 modelValue / value 对照`));let y=s(`rue:component:anchor`);r(p,y),d(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:ce});v(()=>f(e,p,y))});let b=a(`div`,t);r(t,b),_(b,`card bg-base-100 shadow overflow-auto`);let x=a(`div`,b);r(b,x),_(x,`card-body gap-3`);let te=a(`h2`,x);r(x,te),_(te,`card-title`),r(te,m(`TSX-safe 修饰符写法`));let ne=s(`rue:component:anchor`);return r(x,ne),d(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:T});v(()=>f(e,x,ne))}),e}):``;v(()=>f(e,c,Ce))}),t})}),c,y),c})};export{me as default};