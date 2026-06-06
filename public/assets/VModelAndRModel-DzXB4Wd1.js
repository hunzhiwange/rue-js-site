import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Q as o,U as s,W as c,Z as l,at as u,ht as d,it as f,l as p,s as m,t as h,wt as g,yt as _,z as v}from"./vapor-runtime-C1rlwc61.js";import{a as y}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as ee}from"./Code-BCLFq1E3.js";import{t as b}from"./SidebarPlaygroundExample-CdMvdgT7.js";var x=r=>p(a=>{let o=c(`label`,a);e(o,`floating-label`);let s=c(`input`,o);t(o,s),e(s,`input input-bordered w-full`),n(()=>{f(s,r.modelValue??``)}),v(s,`input`,e=>{r.onUpdateModelValue?.(e.target.value)});let l=c(`span`,o);t(o,l);let u=i(`rue:slot:anchor`);return t(l,u),n(()=>{let e=r.label;_(()=>m(e,l,u))}),o}),te=i=>{let{emitTitleUpdate:a}=y(`useSetup:0:0`,()=>g(()=>({emitTitleUpdate:e=>{let t=e.target.value;i.onUpdateTitle?.(i.titleModifiers?.trim?t.trim():t)}})));return p(o=>{let s=c(`label`,o);e(s,`floating-label`);let l=c(`input`,s);t(s,l),e(l,`input input-bordered w-full`),n(()=>{f(l,i.title??``)}),v(l,`input`,i.titleModifiers?.lazy?void 0:a),v(l,`change`,i.titleModifiers?.lazy?a:void 0);let u=c(`span`,s);return t(s,u),t(u,r(`title`)),s})},ne=i=>{let{emitFirstNameUpdate:a,emitLastNameUpdate:o}=y(`useSetup:0:0:dup1`,()=>g(()=>({emitFirstNameUpdate:e=>{let t=e.target.value;i.onUpdateFirstName?.(i.firstNameModifiers?.trim?t.trim():t)},emitLastNameUpdate:e=>{let t=e.target.value;i.onUpdateLastName?.(i.lastNameModifiers?.trim?t.trim():t)}})));return p(s=>{let l=c(`div`,s);e(l,`grid gap-3 md:grid-cols-2`);let u=c(`label`,l);t(l,u),e(u,`floating-label`);let d=c(`input`,u);t(u,d),e(d,`input input-bordered w-full`),n(()=>{f(d,i.firstName??``)}),v(d,`input`,i.firstNameModifiers?.lazy?void 0:a),v(d,`change`,i.firstNameModifiers?.lazy?a:void 0);let p=c(`span`,u);t(u,p),t(p,r(`firstName`));let m=c(`label`,l);t(l,m),e(m,`floating-label`);let h=c(`input`,m);t(m,h),e(h,`input input-bordered w-full`),n(()=>{f(h,i.lastName??``)}),v(h,`input`,i.lastNameModifiers?.lazy?void 0:o),v(h,`change`,i.lastNameModifiers?.lazy?o:void 0);let g=c(`span`,m);return t(m,g),t(g,r(`lastName`)),l})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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
/>`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>g(()=>({activeTab:y(`ref:1:0`,()=>d(`preview`)),message:y(`ref:1:1`,()=>d(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>d(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>d(`18`)),lazyNote:y(`ref:1:4`,()=>d(`blur to sync`)),accepted:y(`ref:1:5`,()=>d(!1)),title:y(`ref:1:6`,()=>d(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>d(`Inside Rue`)),firstName:y(`ref:1:8`,()=>d(`Rue`)),lastName:y(`ref:1:9`,()=>d(`JSX`)),manualMessage:y(`ref:1:10`,()=>d(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>d(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>d(`18`)),manualLazyNote:y(`ref:1:13`,()=>d(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>d(!1))})));return p(d=>{let g=s(),y=i(`rue:component:anchor`);return t(g,y),m(h(b,{children:p(()=>{let d=s(),g=c(`div`,d);t(d,g),e(g,`space-y-6`);let y=c(`div`,g);t(g,y),e(y,`space-y-3`);let b=c(`h1`,y);t(y,b),e(b,`text-5xl font-semibold`),t(b,r(`v-model / r-model`));let Se=c(`p`,y);t(y,Se),e(Se,`text-base-content/70 max-w-3xl`),t(Se,r(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=c(`div`,g);t(g,E),l(E,`role`,`tablist`),e(E,`tabs tabs-box w-fit`);let D=c(`button`,E);t(E,D),l(D,`role`,`tab`),n(()=>{e(D,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),v(D,`click`,()=>{S.value=`preview`}),t(D,r(`效果`));let O=c(`button`,E);t(E,O),l(O,`role`,`tab`),n(()=>{e(O,String(`tab ${S.value===`code`?`tab-active`:``}`))}),v(O,`click`,()=>{S.value=`code`}),t(O,r(`代码`));let k=i(`rue:slot:anchor`);t(g,k),n(()=>{let d=S.value===`preview`?p(()=>{let d=s(),p=c(`div`,d);t(d,p),e(p,`card bg-base-100 shadow`);let g=c(`div`,p);t(p,g),e(g,`card-body gap-6`);let y=c(`div`,g);t(g,y),l(y,`role`,`alert`),e(y,`alert alert-info`);let b=c(`span`,y);t(y,b),t(b,r(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=c(`section`,g);t(g,S),e(S,`space-y-3`);let w=c(`div`,S);t(S,w),e(w,`flex flex-wrap items-center justify-between gap-3`);let ce=c(`h2`,w);t(w,ce),e(ce,`text-xl font-semibold`),t(ce,r(`原生输入：真实指令 vs 手写等价`));let T=c(`div`,w);t(w,T),e(T,`flex flex-wrap gap-2`);let Se=c(`span`,T);t(T,Se),e(Se,`badge badge-primary`),t(Se,r(`directive`));let E=c(`span`,T);t(T,E),e(E,`badge badge-secondary`),t(E,r(`manual`));let D=c(`div`,S);t(S,D),e(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=c(`div`,D);t(D,O),e(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=c(`div`,O);t(O,k),e(k,`flex items-center justify-between gap-3`);let Ce=c(`h3`,k);t(k,Ce),e(Ce,`font-semibold`),t(Ce,r(`Rue TSX 实际写法`));let we=c(`span`,k);t(k,we),e(we,`badge badge-primary`),t(we,r(`v-model / r-model`));let A=c(`label`,O);t(O,A),e(A,`floating-label`);let Te=c(`input`,A);t(A,Te),e(Te,`input input-bordered w-full`),n(()=>{f(Te,re.value)}),v(Te,`input`,e=>{re.value=e.target.value});let Ee=c(`span`,A);t(A,Ee),t(Ee,r(`v-model`));let j=c(`label`,O);t(O,j),e(j,`floating-label`);let De=c(`input`,j);t(j,De),e(De,`input input-bordered w-full`),n(()=>{f(De,ie.value)}),v(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=c(`span`,j);t(j,Oe),t(Oe,r(`v-model:trim`));let M=c(`label`,O);t(O,M),e(M,`floating-label`);let ke=c(`input`,M);t(M,ke),l(ke,`type`,`number`),e(ke,`input input-bordered w-full`),n(()=>{f(ke,ae.value)}),v(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=c(`span`,M);t(M,Ae),t(Ae,r(`r-model:number`));let N=c(`label`,O);t(O,N),e(N,`floating-label`);let je=c(`input`,N);t(N,je),e(je,`input input-bordered w-full`),n(()=>{f(je,oe.value)}),v(je,`change`,e=>{oe.value=e.target.value});let Me=c(`span`,N);t(N,Me),t(Me,r(`r-model:lazy`));let P=c(`label`,O);t(O,P),e(P,`label cursor-pointer justify-start gap-3`);let Ne=c(`input`,P);t(P,Ne),l(Ne,`type`,`checkbox`),e(Ne,`checkbox`),n(()=>{o(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),v(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=c(`span`,P);t(P,Pe),e(Pe,`label-text`),t(Pe,r(`v-model checkbox`));let F=c(`div`,O);t(O,F),e(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=c(`p`,F);t(F,Fe),t(Fe,r(`message: `));let Ie=a(Fe);t(Fe,Ie),n(()=>{u(Ie,re.value||`空`)});let Le=c(`p`,F);t(F,Le),t(Le,r(`trimmed: `));let Re=a(Le);t(Le,Re),n(()=>{u(Re,ie.value||`空`)});let ze=c(`p`,F);t(F,ze),t(ze,r(`age: `));let Be=a(ze);t(ze,Be),n(()=>{u(Be,String(ae.value))});let Ve=c(`p`,F);t(F,Ve),t(Ve,r(`lazy: `));let He=a(Ve);t(Ve,He),n(()=>{u(He,oe.value||`空`)});let Ue=c(`p`,F);t(F,Ue),t(Ue,r(`accepted: `));let We=a(Ue);t(Ue,We),n(()=>{u(We,C.value?`true`:`false`)});let I=c(`div`,D);t(D,I),e(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=c(`div`,I);t(I,L),e(L,`flex items-center justify-between gap-3`);let Ge=c(`h3`,L);t(L,Ge),e(Ge,`font-semibold`),t(Ge,r(`手写 value / checked 对照`));let Ke=c(`span`,L);t(L,Ke),e(Ke,`badge badge-secondary`),t(Ke,r(`manual`));let R=c(`label`,I);t(I,R),e(R,`floating-label`);let qe=c(`input`,R);t(R,qe),e(qe,`input input-bordered w-full`),n(()=>{f(qe,_e.value)}),v(qe,`input`,e=>{ue(_e,e)});let Je=c(`span`,R);t(R,Je),t(Je,r(`value + onInput`));let z=c(`label`,I);t(I,z),e(z,`floating-label`);let Ye=c(`input`,z);t(z,Ye),e(Ye,`input input-bordered w-full`),n(()=>{f(Ye,ve.value)}),v(Ye,`input`,e=>{de(ve,e)});let Xe=c(`span`,z);t(z,Xe),t(Xe,r(`trim 后手写写回`));let B=c(`label`,I);t(I,B),e(B,`floating-label`);let Ze=c(`input`,B);t(B,Ze),l(Ze,`type`,`number`),e(Ze,`input input-bordered w-full`),n(()=>{f(Ze,String(ye.value))}),v(Ze,`input`,e=>{fe(ye,e)});let Qe=c(`span`,B);t(B,Qe),t(Qe,r(`parseFloat 后手写写回`));let V=c(`label`,I);t(I,V),e(V,`floating-label`);let $e=c(`input`,V);t(V,$e),e($e,`input input-bordered w-full`),n(()=>{f($e,be.value)}),v($e,`change`,e=>{ue(be,e)});let et=c(`span`,V);t(V,et),t(et,r(`onChange 延迟同步`));let H=c(`label`,I);t(I,H),e(H,`label cursor-pointer justify-start gap-3`);let tt=c(`input`,H);t(H,tt),l(tt,`type`,`checkbox`),e(tt,`checkbox`),n(()=>{o(tt,!!xe.value)}),v(tt,`change`,e=>{pe(xe,e)});let nt=c(`span`,H);t(H,nt),e(nt,`label-text`),t(nt,r(`checked + onChange`));let U=c(`div`,I);t(I,U),e(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=c(`p`,U);t(U,rt),t(rt,r(`message: `));let it=a(rt);t(rt,it),n(()=>{u(it,_e.value||`空`)});let at=c(`p`,U);t(U,at),t(at,r(`trimmed: `));let ot=a(at);t(at,ot),n(()=>{u(ot,ve.value||`空`)});let st=c(`p`,U);t(U,st),t(st,r(`age: `));let ct=a(st);t(st,ct),n(()=>{u(ct,String(ye.value))});let lt=c(`p`,U);t(U,lt),t(lt,r(`lazy: `));let ut=a(lt);t(lt,ut),n(()=>{u(ut,be.value||`空`)});let dt=c(`p`,U);t(U,dt),t(dt,r(`accepted: `));let ft=a(dt);t(dt,ft),n(()=>{u(ft,xe.value?`true`:`false`)});let W=c(`section`,g);t(g,W),e(W,`space-y-3`);let G=c(`div`,W);t(W,G),e(G,`flex flex-wrap items-center justify-between gap-3`);let pt=c(`h2`,G);t(G,pt),e(pt,`text-xl font-semibold`),t(pt,r(`组件：真实 v-model vs 等价 props`));let mt=c(`span`,G);t(G,mt),e(mt,`badge badge-info badge-lg`),t(mt,r(`component compare`));let K=c(`div`,W);t(W,K),e(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=c(`div`,K);t(K,q),e(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=c(`div`,q);t(q,J),e(J,`flex items-center justify-between gap-3`);let ht=c(`h3`,J);t(J,ht),e(ht,`font-semibold`),t(ht,r(`Rue TSX 实际组件写法`));let gt=c(`span`,J);t(J,gt),e(gt,`badge badge-primary`),t(gt,r(`v-model`));let _t=i(`rue:component:anchor`);t(q,_t),n(()=>{let e=h(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});_(()=>m(e,q,_t))});let vt=i(`rue:component:anchor`);t(q,vt),n(()=>{let e=h(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});_(()=>m(e,q,vt))});let yt=i(`rue:component:anchor`);t(q,yt),n(()=>{let e=h(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});_(()=>m(e,q,yt))});let Y=c(`div`,q);t(q,Y),e(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=c(`p`,Y);t(Y,bt),t(bt,r(`title: `));let xt=a(bt);t(bt,xt),n(()=>{u(xt,se.value||`空`)});let St=c(`p`,Y);t(Y,St),t(St,r(`articleTitle: `));let Ct=a(St);t(St,Ct),n(()=>{u(Ct,me.value||`空`)});let X=c(`p`,Y);t(Y,X),t(X,r(`firstName / lastName: `));let wt=a(X);t(X,wt),n(()=>{u(wt,he.value)}),t(X,r(` `));let Tt=a(X);t(X,Tt),n(()=>{u(Tt,ge.value)});let Z=c(`div`,K);t(K,Z),e(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=c(`div`,Z);t(Z,Q),e(Q,`flex items-center justify-between gap-3`);let Et=c(`h3`,Q);t(Q,Et),e(Et,`font-semibold`),t(Et,r(`等价手写 props`));let Dt=c(`span`,Q);t(Q,Dt),e(Dt,`badge badge-secondary`),t(Dt,r(`modelValue / onUpdateX`));let Ot=i(`rue:component:anchor`);t(Z,Ot),n(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:le});_(()=>m(e,Z,Ot))});let $=c(`div`,Z);t(Z,$),e($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=c(`p`,$);t($,kt);let At=c(`strong`,kt);t(kt,At),t(At,r(`v-model`)),t(kt,r(`-> modelValue + onUpdateModelValue`));let jt=c(`p`,$);t($,jt);let Mt=c(`strong`,jt);t(jt,Mt),t(Mt,r(`v-model:trim-title`)),t(jt,r(`-> title + titleModifiers + onUpdateTitle`));let Nt=c(`p`,$);t($,Nt);let Pt=c(`strong`,Nt);t(Nt,Pt),t(Pt,r(`v-model:trim-first-name`)),t(Nt,r(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=c(`p`,$);t($,Ft);let It=c(`strong`,Ft);return t(Ft,It),t(It,r(`v-model:lazy-last-name`)),t(Ft,r(`-> lastName + lastNameModifiers + onUpdateLastName`)),d}):``;_(()=>m(d,g,k))}),t(g,r(` `));let Ce=i(`rue:slot:anchor`);return t(g,Ce),n(()=>{let a=S.value===`code`?p(()=>{let a=s(),o=c(`div`,a);t(a,o),e(o,`grid gap-6`);let l=c(`div`,o);t(o,l),e(l,`card bg-base-100 shadow overflow-auto`);let u=c(`div`,l);t(l,u),e(u,`card-body gap-3`);let d=c(`h2`,u);t(u,d),e(d,`card-title`),t(d,r(`Rue TSX 实际源码`));let f=i(`rue:component:anchor`);t(u,f),n(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:w});_(()=>m(e,u,f))});let p=c(`div`,o);t(o,p),e(p,`card bg-base-100 shadow overflow-auto`);let g=c(`div`,p);t(p,g),e(g,`card-body gap-3`);let v=c(`h2`,g);t(g,v),e(v,`card-title`),t(v,r(`手写 modelValue / value 对照`));let y=i(`rue:component:anchor`);t(g,y),n(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:ce});_(()=>m(e,g,y))});let b=c(`div`,o);t(o,b),e(b,`card bg-base-100 shadow overflow-auto`);let x=c(`div`,b);t(b,x),e(x,`card-body gap-3`);let te=c(`h2`,x);t(x,te),e(te,`card-title`),t(te,r(`TSX-safe 修饰符写法`));let ne=i(`rue:component:anchor`);return t(x,ne),n(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:T});_(()=>m(e,x,ne))}),a}):``;_(()=>m(a,g,Ce))}),d})}),g,y),g})};export{me as default};