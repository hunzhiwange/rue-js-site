import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,pt as h,st as g,t as _,tt as v}from"./vapor-runtime-BR_2rwNk.js";import{a as y}from"./vapor-helpers-vapor-DkadWylb.js";import{t as ee}from"./Code-B_4lzH85.js";import{t as b}from"./SidebarPlaygroundExample-CtM-WHq_.js";var x=n=>u(r=>{let i=e(`label`,r);l(i,`floating-label`);let u=e(`input`,i);o(i,u),l(u,`input input-bordered w-full`),s(()=>{h(u,n.modelValue??``)}),t(u,`input`,e=>{n.onUpdateModelValue?.(e.target.value)});let d=e(`span`,i);o(i,d);let p=c(`rue:slot:anchor`);return o(d,p),s(()=>{let e=n.label;a(()=>f(e,d,p))}),i}),te=r=>{let{emitTitleUpdate:i}=y(`useSetup:0:0`,()=>n(()=>({emitTitleUpdate:e=>{let t=e.target.value;r.onUpdateTitle?.(r.titleModifiers?.trim?t.trim():t)}})));return u(n=>{let a=e(`label`,n);l(a,`floating-label`);let c=e(`input`,a);o(a,c),l(c,`input input-bordered w-full`),s(()=>{h(c,r.title??``)}),t(c,`input`,r.titleModifiers?.lazy?void 0:i),t(c,`change`,r.titleModifiers?.lazy?i:void 0);let u=e(`span`,a);return o(a,u),o(u,d(`title`)),a})},ne=r=>{let{emitFirstNameUpdate:i,emitLastNameUpdate:a}=y(`useSetup:0:0:dup1`,()=>n(()=>({emitFirstNameUpdate:e=>{let t=e.target.value;r.onUpdateFirstName?.(r.firstNameModifiers?.trim?t.trim():t)},emitLastNameUpdate:e=>{let t=e.target.value;r.onUpdateLastName?.(r.lastNameModifiers?.trim?t.trim():t)}})));return u(n=>{let c=e(`div`,n);l(c,`grid gap-3 md:grid-cols-2`);let u=e(`label`,c);o(c,u),l(u,`floating-label`);let f=e(`input`,u);o(u,f),l(f,`input input-bordered w-full`),s(()=>{h(f,r.firstName??``)}),t(f,`input`,r.firstNameModifiers?.lazy?void 0:i),t(f,`change`,r.firstNameModifiers?.lazy?i:void 0);let p=e(`span`,u);o(u,p),o(p,d(`firstName`));let m=e(`label`,c);o(c,m),l(m,`floating-label`);let g=e(`input`,m);o(m,g),l(g,`input input-bordered w-full`),s(()=>{h(g,r.lastName??``)}),t(g,`input`,r.lastNameModifiers?.lazy?void 0:a),t(g,`change`,r.lastNameModifiers?.lazy?a:void 0);let _=e(`span`,m);return o(m,_),o(_,d(`lastName`)),c})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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
/>`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>n(()=>({activeTab:y(`ref:1:0`,()=>r(`preview`)),message:y(`ref:1:1`,()=>r(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>r(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>r(`18`)),lazyNote:y(`ref:1:4`,()=>r(`blur to sync`)),accepted:y(`ref:1:5`,()=>r(!1)),title:y(`ref:1:6`,()=>r(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>r(`Inside Rue`)),firstName:y(`ref:1:8`,()=>r(`Rue`)),lastName:y(`ref:1:9`,()=>r(`JSX`)),manualMessage:y(`ref:1:10`,()=>r(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>r(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>r(`18`)),manualLazyNote:y(`ref:1:13`,()=>r(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>r(!1))})));return u(n=>{let r=i(),y=c(`rue:component:anchor`);return o(r,y),f(_(b,{children:u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`space-y-6`);let y=e(`div`,r);o(r,y),l(y,`space-y-3`);let b=e(`h1`,y);o(y,b),l(b,`text-5xl font-semibold`),o(b,d(`v-model / r-model`));let Se=e(`p`,y);o(y,Se),l(Se,`text-base-content/70 max-w-3xl`),o(Se,d(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=e(`div`,r);o(r,E),m(E,`role`,`tablist`),l(E,`tabs tabs-box w-fit`);let D=e(`button`,E);o(E,D),m(D,`role`,`tab`),s(()=>{l(D,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),t(D,`click`,()=>{S.value=`preview`}),o(D,d(`效果`));let O=e(`button`,E);o(E,O),m(O,`role`,`tab`),s(()=>{l(O,String(`tab ${S.value===`code`?`tab-active`:``}`))}),t(O,`click`,()=>{S.value=`code`}),o(O,d(`代码`));let k=c(`rue:slot:anchor`);o(r,k),s(()=>{let n=S.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let u=e(`div`,r);o(r,u),l(u,`card-body gap-6`);let y=e(`div`,u);o(u,y),m(y,`role`,`alert`),l(y,`alert alert-info`);let b=e(`span`,y);o(y,b),o(b,d(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=e(`section`,u);o(u,S),l(S,`space-y-3`);let w=e(`div`,S);o(S,w),l(w,`flex flex-wrap items-center justify-between gap-3`);let ce=e(`h2`,w);o(w,ce),l(ce,`text-xl font-semibold`),o(ce,d(`原生输入：真实指令 vs 手写等价`));let T=e(`div`,w);o(w,T),l(T,`flex flex-wrap gap-2`);let Se=e(`span`,T);o(T,Se),l(Se,`badge badge-primary`),o(Se,d(`directive`));let E=e(`span`,T);o(T,E),l(E,`badge badge-secondary`),o(E,d(`manual`));let D=e(`div`,S);o(S,D),l(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=e(`div`,D);o(D,O),l(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=e(`div`,O);o(O,k),l(k,`flex items-center justify-between gap-3`);let Ce=e(`h3`,k);o(k,Ce),l(Ce,`font-semibold`),o(Ce,d(`Rue TSX 实际写法`));let we=e(`span`,k);o(k,we),l(we,`badge badge-primary`),o(we,d(`v-model / r-model`));let A=e(`label`,O);o(O,A),l(A,`floating-label`);let Te=e(`input`,A);o(A,Te),l(Te,`input input-bordered w-full`),s(()=>{h(Te,re.value)}),t(Te,`input`,e=>{re.value=e.target.value});let Ee=e(`span`,A);o(A,Ee),o(Ee,d(`v-model`));let j=e(`label`,O);o(O,j),l(j,`floating-label`);let De=e(`input`,j);o(j,De),l(De,`input input-bordered w-full`),s(()=>{h(De,ie.value)}),t(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=e(`span`,j);o(j,Oe),o(Oe,d(`v-model:trim`));let M=e(`label`,O);o(O,M),l(M,`floating-label`);let ke=e(`input`,M);o(M,ke),m(ke,`type`,`number`),l(ke,`input input-bordered w-full`),s(()=>{h(ke,ae.value)}),t(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=e(`span`,M);o(M,Ae),o(Ae,d(`r-model:number`));let N=e(`label`,O);o(O,N),l(N,`floating-label`);let je=e(`input`,N);o(N,je),l(je,`input input-bordered w-full`),s(()=>{h(je,oe.value)}),t(je,`change`,e=>{oe.value=e.target.value});let Me=e(`span`,N);o(N,Me),o(Me,d(`r-model:lazy`));let P=e(`label`,O);o(O,P),l(P,`label cursor-pointer justify-start gap-3`);let Ne=e(`input`,P);o(P,Ne),m(Ne,`type`,`checkbox`),l(Ne,`checkbox`),s(()=>{g(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),t(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=e(`span`,P);o(P,Pe),l(Pe,`label-text`),o(Pe,d(`v-model checkbox`));let F=e(`div`,O);o(O,F),l(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=e(`p`,F);o(F,Fe),o(Fe,d(`message: `));let Ie=v(Fe);o(Fe,Ie),s(()=>{p(Ie,re.value||`空`)});let Le=e(`p`,F);o(F,Le),o(Le,d(`trimmed: `));let Re=v(Le);o(Le,Re),s(()=>{p(Re,ie.value||`空`)});let ze=e(`p`,F);o(F,ze),o(ze,d(`age: `));let Be=v(ze);o(ze,Be),s(()=>{p(Be,String(ae.value))});let Ve=e(`p`,F);o(F,Ve),o(Ve,d(`lazy: `));let He=v(Ve);o(Ve,He),s(()=>{p(He,oe.value||`空`)});let Ue=e(`p`,F);o(F,Ue),o(Ue,d(`accepted: `));let We=v(Ue);o(Ue,We),s(()=>{p(We,C.value?`true`:`false`)});let I=e(`div`,D);o(D,I),l(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=e(`div`,I);o(I,L),l(L,`flex items-center justify-between gap-3`);let Ge=e(`h3`,L);o(L,Ge),l(Ge,`font-semibold`),o(Ge,d(`手写 value / checked 对照`));let Ke=e(`span`,L);o(L,Ke),l(Ke,`badge badge-secondary`),o(Ke,d(`manual`));let R=e(`label`,I);o(I,R),l(R,`floating-label`);let qe=e(`input`,R);o(R,qe),l(qe,`input input-bordered w-full`),s(()=>{h(qe,_e.value)}),t(qe,`input`,e=>{ue(_e,e)});let Je=e(`span`,R);o(R,Je),o(Je,d(`value + onInput`));let z=e(`label`,I);o(I,z),l(z,`floating-label`);let Ye=e(`input`,z);o(z,Ye),l(Ye,`input input-bordered w-full`),s(()=>{h(Ye,ve.value)}),t(Ye,`input`,e=>{de(ve,e)});let Xe=e(`span`,z);o(z,Xe),o(Xe,d(`trim 后手写写回`));let B=e(`label`,I);o(I,B),l(B,`floating-label`);let Ze=e(`input`,B);o(B,Ze),m(Ze,`type`,`number`),l(Ze,`input input-bordered w-full`),s(()=>{h(Ze,String(ye.value))}),t(Ze,`input`,e=>{fe(ye,e)});let Qe=e(`span`,B);o(B,Qe),o(Qe,d(`parseFloat 后手写写回`));let V=e(`label`,I);o(I,V),l(V,`floating-label`);let $e=e(`input`,V);o(V,$e),l($e,`input input-bordered w-full`),s(()=>{h($e,be.value)}),t($e,`change`,e=>{ue(be,e)});let et=e(`span`,V);o(V,et),o(et,d(`onChange 延迟同步`));let H=e(`label`,I);o(I,H),l(H,`label cursor-pointer justify-start gap-3`);let tt=e(`input`,H);o(H,tt),m(tt,`type`,`checkbox`),l(tt,`checkbox`),s(()=>{g(tt,!!xe.value)}),t(tt,`change`,e=>{pe(xe,e)});let nt=e(`span`,H);o(H,nt),l(nt,`label-text`),o(nt,d(`checked + onChange`));let U=e(`div`,I);o(I,U),l(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=e(`p`,U);o(U,rt),o(rt,d(`message: `));let it=v(rt);o(rt,it),s(()=>{p(it,_e.value||`空`)});let at=e(`p`,U);o(U,at),o(at,d(`trimmed: `));let ot=v(at);o(at,ot),s(()=>{p(ot,ve.value||`空`)});let st=e(`p`,U);o(U,st),o(st,d(`age: `));let ct=v(st);o(st,ct),s(()=>{p(ct,String(ye.value))});let lt=e(`p`,U);o(U,lt),o(lt,d(`lazy: `));let ut=v(lt);o(lt,ut),s(()=>{p(ut,be.value||`空`)});let dt=e(`p`,U);o(U,dt),o(dt,d(`accepted: `));let ft=v(dt);o(dt,ft),s(()=>{p(ft,xe.value?`true`:`false`)});let W=e(`section`,u);o(u,W),l(W,`space-y-3`);let G=e(`div`,W);o(W,G),l(G,`flex flex-wrap items-center justify-between gap-3`);let pt=e(`h2`,G);o(G,pt),l(pt,`text-xl font-semibold`),o(pt,d(`组件：真实 v-model vs 等价 props`));let mt=e(`span`,G);o(G,mt),l(mt,`badge badge-info badge-lg`),o(mt,d(`component compare`));let K=e(`div`,W);o(W,K),l(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=e(`div`,K);o(K,q),l(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=e(`div`,q);o(q,J),l(J,`flex items-center justify-between gap-3`);let ht=e(`h3`,J);o(J,ht),l(ht,`font-semibold`),o(ht,d(`Rue TSX 实际组件写法`));let gt=e(`span`,J);o(J,gt),l(gt,`badge badge-primary`),o(gt,d(`v-model`));let _t=c(`rue:component:anchor`);o(q,_t),s(()=>{let e=_(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});a(()=>f(e,q,_t))});let vt=c(`rue:component:anchor`);o(q,vt),s(()=>{let e=_(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});a(()=>f(e,q,vt))});let yt=c(`rue:component:anchor`);o(q,yt),s(()=>{let e=_(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});a(()=>f(e,q,yt))});let Y=e(`div`,q);o(q,Y),l(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=e(`p`,Y);o(Y,bt),o(bt,d(`title: `));let xt=v(bt);o(bt,xt),s(()=>{p(xt,se.value||`空`)});let St=e(`p`,Y);o(Y,St),o(St,d(`articleTitle: `));let Ct=v(St);o(St,Ct),s(()=>{p(Ct,me.value||`空`)});let X=e(`p`,Y);o(Y,X),o(X,d(`firstName / lastName: `));let wt=v(X);o(X,wt),s(()=>{p(wt,he.value)}),o(X,d(` `));let Tt=v(X);o(X,Tt),s(()=>{p(Tt,ge.value)});let Z=e(`div`,K);o(K,Z),l(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=e(`div`,Z);o(Z,Q),l(Q,`flex items-center justify-between gap-3`);let Et=e(`h3`,Q);o(Q,Et),l(Et,`font-semibold`),o(Et,d(`等价手写 props`));let Dt=e(`span`,Q);o(Q,Dt),l(Dt,`badge badge-secondary`),o(Dt,d(`modelValue / onUpdateX`));let Ot=c(`rue:component:anchor`);o(Z,Ot),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:le});a(()=>f(e,Z,Ot))});let $=e(`div`,Z);o(Z,$),l($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=e(`p`,$);o($,kt);let At=e(`strong`,kt);o(kt,At),o(At,d(`v-model`)),o(kt,d(`-> modelValue + onUpdateModelValue`));let jt=e(`p`,$);o($,jt);let Mt=e(`strong`,jt);o(jt,Mt),o(Mt,d(`v-model:trim-title`)),o(jt,d(`-> title + titleModifiers + onUpdateTitle`));let Nt=e(`p`,$);o($,Nt);let Pt=e(`strong`,Nt);o(Nt,Pt),o(Pt,d(`v-model:trim-first-name`)),o(Nt,d(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=e(`p`,$);o($,Ft);let It=e(`strong`,Ft);return o(Ft,It),o(It,d(`v-model:lazy-last-name`)),o(Ft,d(`-> lastName + lastNameModifiers + onUpdateLastName`)),n}):``;a(()=>f(n,r,k))}),o(r,d(` `));let Ce=c(`rue:slot:anchor`);return o(r,Ce),s(()=>{let t=S.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`grid gap-6`);let r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow overflow-auto`);let u=e(`div`,r);o(r,u),l(u,`card-body gap-3`);let p=e(`h2`,u);o(u,p),l(p,`card-title`),o(p,d(`Rue TSX 实际源码`));let m=c(`rue:component:anchor`);o(u,m),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:w});a(()=>f(e,u,m))});let h=e(`div`,n);o(n,h),l(h,`card bg-base-100 shadow overflow-auto`);let g=e(`div`,h);o(h,g),l(g,`card-body gap-3`);let v=e(`h2`,g);o(g,v),l(v,`card-title`),o(v,d(`手写 modelValue / value 对照`));let y=c(`rue:component:anchor`);o(g,y),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:ce});a(()=>f(e,g,y))});let b=e(`div`,n);o(n,b),l(b,`card bg-base-100 shadow overflow-auto`);let x=e(`div`,b);o(b,x),l(x,`card-body gap-3`);let te=e(`h2`,x);o(x,te),l(te,`card-title`),o(te,d(`TSX-safe 修饰符写法`));let ne=c(`rue:component:anchor`);return o(x,ne),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:T});a(()=>f(e,x,ne))}),t}):``;a(()=>f(t,r,Ce))}),n})}),r,y),r})};export{me as default};