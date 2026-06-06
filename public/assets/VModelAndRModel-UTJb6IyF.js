import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,pt as m,s as h,st as g,t as _,tt as v}from"./vapor-runtime-DHPuOjqh.js";import{a as y}from"./vapor-helpers-vapor-CJFAWine.js";import{t as ee}from"./Code-Ds9lKLk6.js";import{t as b}from"./SidebarPlaygroundExample-KML-rOvA.js";var x=n=>d(r=>{let i=e(`label`,r);l(i,`floating-label`);let u=e(`input`,i);o(i,u),l(u,`input input-bordered w-full`),s(()=>{m(u,n.modelValue??``)}),t(u,`input`,e=>{n.onUpdateModelValue?.(e.target.value)});let d=e(`span`,i);o(i,d);let f=c(`rue:slot:anchor`);return o(d,f),s(()=>{let e=n.label;a(()=>h(e,d,f))}),i}),te=r=>{let{emitTitleUpdate:i}=y(`useSetup:0:0`,()=>n(()=>({emitTitleUpdate:e=>{let t=e.target.value;r.onUpdateTitle?.(r.titleModifiers?.trim?t.trim():t)}})));return d(n=>{let a=e(`label`,n);l(a,`floating-label`);let c=e(`input`,a);o(a,c),l(c,`input input-bordered w-full`),s(()=>{m(c,r.title??``)}),t(c,`input`,r.titleModifiers?.lazy?void 0:i),t(c,`change`,r.titleModifiers?.lazy?i:void 0);let d=e(`span`,a);return o(a,d),o(d,u(`title`)),a})},ne=r=>{let{emitFirstNameUpdate:i,emitLastNameUpdate:a}=y(`useSetup:0:0:dup1`,()=>n(()=>({emitFirstNameUpdate:e=>{let t=e.target.value;r.onUpdateFirstName?.(r.firstNameModifiers?.trim?t.trim():t)},emitLastNameUpdate:e=>{let t=e.target.value;r.onUpdateLastName?.(r.lastNameModifiers?.trim?t.trim():t)}})));return d(n=>{let c=e(`div`,n);l(c,`grid gap-3 md:grid-cols-2`);let d=e(`label`,c);o(c,d),l(d,`floating-label`);let f=e(`input`,d);o(d,f),l(f,`input input-bordered w-full`),s(()=>{m(f,r.firstName??``)}),t(f,`input`,r.firstNameModifiers?.lazy?void 0:i),t(f,`change`,r.firstNameModifiers?.lazy?i:void 0);let p=e(`span`,d);o(d,p),o(p,u(`firstName`));let h=e(`label`,c);o(c,h),l(h,`floating-label`);let g=e(`input`,h);o(h,g),l(g,`input input-bordered w-full`),s(()=>{m(g,r.lastName??``)}),t(g,`input`,r.lastNameModifiers?.lazy?void 0:a),t(g,`change`,r.lastNameModifiers?.lazy?a:void 0);let _=e(`span`,h);return o(h,_),o(_,u(`lastName`)),c})},S=[`v`,`-model`].join(``),re=[`v`,`-model`,`:trim`].join(``),ie=[`r`,`-model`,`:number`].join(``),ae=[`r`,`-model`,`:lazy`].join(``),oe=[`v`,`-model`,`:trim-title`].join(``),C=[`v`,`-model`,`:trim-first-name`].join(``),se=[`v`,`-model`,`:lazy-last-name`].join(``),w=[`import { type FC, ref } from '@rue-js/rue'`,``,`const Demo: FC = () => {`,`  const message = ref('  Rue model  ')`,`  const trimmed = ref('  keep edges tidy  ')`,`  const age = ref<string | number>('18')`,`  const lazyNote = ref('blur to sync')`,`  const accepted = ref(false)`,`  const title = ref('Guide draft')`,`  const articleTitle = ref('Inside Rue')`,`  const firstName = ref('Rue')`,`  const lastName = ref('JSX')`,``,`  return (`,`    <section className="grid gap-4">`,`      <input className="input input-bordered" `+S+`={message.value} />`,`      <input className="input input-bordered" `+re+`={trimmed.value} />`,`      <input type="number" className="input input-bordered" `+ie+`={age.value} />`,`      <input className="input input-bordered" `+ae+`={lazyNote.value} />`,`      <input type="checkbox" className="checkbox" `+S+`={accepted.value} />`,``,`      <ModelField label="默认组件 model" `+S+`={title.value} />`,`      <TitleField `+oe+`={articleTitle.value} />`,`      <UserNameEditor`,`        `+C+`={firstName.value}`,`        `+se+`={lastName.value}`,`      />`,`    </section>`,`  )`,`}`,``,`export default Demo`].join(`
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
/>`,ue=(e,t)=>{e.value=t.target.value},de=(e,t)=>{e.value=t.target.value.trim()},fe=(e,t)=>{let n=t.target.value,r=parseFloat(n);e.value=Number.isNaN(r)?n:r},pe=(e,t)=>{e.value=t.target.checked},me=()=>{let{activeTab:S,message:re,trimmedMessage:ie,age:ae,lazyNote:oe,accepted:C,title:se,articleTitle:me,firstName:he,lastName:ge,manualMessage:_e,manualTrimmedMessage:ve,manualAge:ye,manualLazyNote:be,manualAccepted:xe}=y(`useSetup:0:0:dup2`,()=>n(()=>({activeTab:y(`ref:1:0`,()=>r(`preview`)),message:y(`ref:1:1`,()=>r(`  Rue model  `)),trimmedMessage:y(`ref:1:2`,()=>r(`  keep edges tidy  `)),age:y(`ref:1:3`,()=>r(`18`)),lazyNote:y(`ref:1:4`,()=>r(`blur to sync`)),accepted:y(`ref:1:5`,()=>r(!1)),title:y(`ref:1:6`,()=>r(`Guide draft`)),articleTitle:y(`ref:1:7`,()=>r(`Inside Rue`)),firstName:y(`ref:1:8`,()=>r(`Rue`)),lastName:y(`ref:1:9`,()=>r(`JSX`)),manualMessage:y(`ref:1:10`,()=>r(`  Rue model  `)),manualTrimmedMessage:y(`ref:1:11`,()=>r(`  keep edges tidy  `)),manualAge:y(`ref:1:12`,()=>r(`18`)),manualLazyNote:y(`ref:1:13`,()=>r(`blur to sync`)),manualAccepted:y(`ref:1:14`,()=>r(!1))})));return d(n=>{let r=i(),y=c(`rue:component:anchor`);return o(r,y),h(_(b,{children:d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`space-y-6`);let y=e(`div`,r);o(r,y),l(y,`space-y-3`);let b=e(`h1`,y);o(y,b),l(b,`text-5xl font-semibold`),o(b,u(`v-model / r-model`));let Se=e(`p`,y);o(y,Se),l(Se,`text-base-content/70 max-w-3xl`),o(Se,u(`这页直接对齐 v-on 页面：一边给真实 Rue TSX 写法，一边给手写 value / checked / modelValue 的等价实现，预览里也直接跑真实 v-model / r-model。`));let E=e(`div`,r);o(r,E),p(E,`role`,`tablist`),l(E,`tabs tabs-box w-fit`);let D=e(`button`,E);o(E,D),p(D,`role`,`tab`),s(()=>{l(D,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),t(D,`click`,()=>{S.value=`preview`}),o(D,u(`效果`));let O=e(`button`,E);o(E,O),p(O,`role`,`tab`),s(()=>{l(O,String(`tab ${S.value===`code`?`tab-active`:``}`))}),t(O,`click`,()=>{S.value=`code`}),o(O,u(`代码`));let k=c(`rue:slot:anchor`);o(r,k),s(()=>{let n=S.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let d=e(`div`,r);o(r,d),l(d,`card-body gap-6`);let y=e(`div`,d);o(d,y),p(y,`role`,`alert`),l(y,`alert alert-info`);let b=e(`span`,y);o(y,b),o(b,u(`左列是当前真实可写进 TSX 的 v-model / r-model，右列是手写等价实现。组件部分则把真实指令预览和等价 props 写法并排展示。`));let S=e(`section`,d);o(d,S),l(S,`space-y-3`);let w=e(`div`,S);o(S,w),l(w,`flex flex-wrap items-center justify-between gap-3`);let ce=e(`h2`,w);o(w,ce),l(ce,`text-xl font-semibold`),o(ce,u(`原生输入：真实指令 vs 手写等价`));let T=e(`div`,w);o(w,T),l(T,`flex flex-wrap gap-2`);let Se=e(`span`,T);o(T,Se),l(Se,`badge badge-primary`),o(Se,u(`directive`));let E=e(`span`,T);o(T,E),l(E,`badge badge-secondary`),o(E,u(`manual`));let D=e(`div`,S);o(S,D),l(D,`grid gap-4 xl:grid-cols-2 items-start`);let O=e(`div`,D);o(D,O),l(O,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let k=e(`div`,O);o(O,k),l(k,`flex items-center justify-between gap-3`);let Ce=e(`h3`,k);o(k,Ce),l(Ce,`font-semibold`),o(Ce,u(`Rue TSX 实际写法`));let we=e(`span`,k);o(k,we),l(we,`badge badge-primary`),o(we,u(`v-model / r-model`));let A=e(`label`,O);o(O,A),l(A,`floating-label`);let Te=e(`input`,A);o(A,Te),l(Te,`input input-bordered w-full`),s(()=>{m(Te,re.value)}),t(Te,`input`,e=>{re.value=e.target.value});let Ee=e(`span`,A);o(A,Ee),o(Ee,u(`v-model`));let j=e(`label`,O);o(O,j),l(j,`floating-label`);let De=e(`input`,j);o(j,De),l(De,`input input-bordered w-full`),s(()=>{m(De,ie.value)}),t(De,`input`,e=>{let t=e.target.value;t=t.trim(),ie.value=t});let Oe=e(`span`,j);o(j,Oe),o(Oe,u(`v-model:trim`));let M=e(`label`,O);o(O,M),l(M,`floating-label`);let ke=e(`input`,M);o(M,ke),p(ke,`type`,`number`),l(ke,`input input-bordered w-full`),s(()=>{m(ke,ae.value)}),t(ke,`input`,e=>{let t=e.target.value,n=parseFloat(t);t=Number.isNaN(n)?t:n,ae.value=t});let Ae=e(`span`,M);o(M,Ae),o(Ae,u(`r-model:number`));let N=e(`label`,O);o(O,N),l(N,`floating-label`);let je=e(`input`,N);o(N,je),l(je,`input input-bordered w-full`),s(()=>{m(je,oe.value)}),t(je,`change`,e=>{oe.value=e.target.value});let Me=e(`span`,N);o(N,Me),o(Me,u(`r-model:lazy`));let P=e(`label`,O);o(O,P),l(P,`label cursor-pointer justify-start gap-3`);let Ne=e(`input`,P);o(P,Ne),p(Ne,`type`,`checkbox`),l(Ne,`checkbox`),s(()=>{g(Ne,!!(Array.isArray(C.value)?C.value.includes(`on`):C.value instanceof Set?C.value.has(`on`):C.value))}),t(Ne,`change`,e=>{let t=e.target.checked,n=e.target.value;if(Array.isArray(C.value)){C.value=t?C.value.includes(n)?C.value:C.value.concat([n]):C.value.filter(e=>e!==n);return}if(C.value instanceof Set){C.value=t?new Set([...C.value,n]):new Set(Array.from(C.value).filter(e=>e!==n));return}C.value=!!t});let Pe=e(`span`,P);o(P,Pe),l(Pe,`label-text`),o(Pe,u(`v-model checkbox`));let F=e(`div`,O);o(O,F),l(F,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let Fe=e(`p`,F);o(F,Fe),o(Fe,u(`message: `));let Ie=v(Fe);o(Fe,Ie),s(()=>{f(Ie,re.value||`空`)});let Le=e(`p`,F);o(F,Le),o(Le,u(`trimmed: `));let Re=v(Le);o(Le,Re),s(()=>{f(Re,ie.value||`空`)});let ze=e(`p`,F);o(F,ze),o(ze,u(`age: `));let Be=v(ze);o(ze,Be),s(()=>{f(Be,String(ae.value))});let Ve=e(`p`,F);o(F,Ve),o(Ve,u(`lazy: `));let He=v(Ve);o(Ve,He),s(()=>{f(He,oe.value||`空`)});let Ue=e(`p`,F);o(F,Ue),o(Ue,u(`accepted: `));let We=v(Ue);o(Ue,We),s(()=>{f(We,C.value?`true`:`false`)});let I=e(`div`,D);o(D,I),l(I,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-3`);let L=e(`div`,I);o(I,L),l(L,`flex items-center justify-between gap-3`);let Ge=e(`h3`,L);o(L,Ge),l(Ge,`font-semibold`),o(Ge,u(`手写 value / checked 对照`));let Ke=e(`span`,L);o(L,Ke),l(Ke,`badge badge-secondary`),o(Ke,u(`manual`));let R=e(`label`,I);o(I,R),l(R,`floating-label`);let qe=e(`input`,R);o(R,qe),l(qe,`input input-bordered w-full`),s(()=>{m(qe,_e.value)}),t(qe,`input`,e=>{ue(_e,e)});let Je=e(`span`,R);o(R,Je),o(Je,u(`value + onInput`));let z=e(`label`,I);o(I,z),l(z,`floating-label`);let Ye=e(`input`,z);o(z,Ye),l(Ye,`input input-bordered w-full`),s(()=>{m(Ye,ve.value)}),t(Ye,`input`,e=>{de(ve,e)});let Xe=e(`span`,z);o(z,Xe),o(Xe,u(`trim 后手写写回`));let B=e(`label`,I);o(I,B),l(B,`floating-label`);let Ze=e(`input`,B);o(B,Ze),p(Ze,`type`,`number`),l(Ze,`input input-bordered w-full`),s(()=>{m(Ze,String(ye.value))}),t(Ze,`input`,e=>{fe(ye,e)});let Qe=e(`span`,B);o(B,Qe),o(Qe,u(`parseFloat 后手写写回`));let V=e(`label`,I);o(I,V),l(V,`floating-label`);let $e=e(`input`,V);o(V,$e),l($e,`input input-bordered w-full`),s(()=>{m($e,be.value)}),t($e,`change`,e=>{ue(be,e)});let et=e(`span`,V);o(V,et),o(et,u(`onChange 延迟同步`));let H=e(`label`,I);o(I,H),l(H,`label cursor-pointer justify-start gap-3`);let tt=e(`input`,H);o(H,tt),p(tt,`type`,`checkbox`),l(tt,`checkbox`),s(()=>{g(tt,!!xe.value)}),t(tt,`change`,e=>{pe(xe,e)});let nt=e(`span`,H);o(H,nt),l(nt,`label-text`),o(nt,u(`checked + onChange`));let U=e(`div`,I);o(I,U),l(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let rt=e(`p`,U);o(U,rt),o(rt,u(`message: `));let it=v(rt);o(rt,it),s(()=>{f(it,_e.value||`空`)});let at=e(`p`,U);o(U,at),o(at,u(`trimmed: `));let ot=v(at);o(at,ot),s(()=>{f(ot,ve.value||`空`)});let st=e(`p`,U);o(U,st),o(st,u(`age: `));let ct=v(st);o(st,ct),s(()=>{f(ct,String(ye.value))});let lt=e(`p`,U);o(U,lt),o(lt,u(`lazy: `));let ut=v(lt);o(lt,ut),s(()=>{f(ut,be.value||`空`)});let dt=e(`p`,U);o(U,dt),o(dt,u(`accepted: `));let ft=v(dt);o(dt,ft),s(()=>{f(ft,xe.value?`true`:`false`)});let W=e(`section`,d);o(d,W),l(W,`space-y-3`);let G=e(`div`,W);o(W,G),l(G,`flex flex-wrap items-center justify-between gap-3`);let pt=e(`h2`,G);o(G,pt),l(pt,`text-xl font-semibold`),o(pt,u(`组件：真实 v-model vs 等价 props`));let mt=e(`span`,G);o(G,mt),l(mt,`badge badge-info badge-lg`),o(mt,u(`component compare`));let K=e(`div`,W);o(W,K),l(K,`grid gap-4 xl:grid-cols-2 items-start`);let q=e(`div`,K);o(K,q),l(q,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let J=e(`div`,q);o(q,J),l(J,`flex items-center justify-between gap-3`);let ht=e(`h3`,J);o(J,ht),l(ht,`font-semibold`),o(ht,u(`Rue TSX 实际组件写法`));let gt=e(`span`,J);o(J,gt),l(gt,`badge badge-primary`),o(gt,u(`v-model`));let _t=c(`rue:component:anchor`);o(q,_t),s(()=>{let e=_(x,{label:`v-model={title.value}`,modelValue:se.value,onUpdateModelValue:e=>se.value=e});a(()=>h(e,q,_t))});let vt=c(`rue:component:anchor`);o(q,vt),s(()=>{let e=_(te,{title:me.value,onUpdateTitle:e=>me.value=e,titleModifiers:{trim:!0}});a(()=>h(e,q,vt))});let yt=c(`rue:component:anchor`);o(q,yt),s(()=>{let e=_(ne,{firstName:he.value,onUpdateFirstName:e=>he.value=e,firstNameModifiers:{trim:!0},lastName:ge.value,onUpdateLastName:e=>ge.value=e,lastNameModifiers:{lazy:!0}});a(()=>h(e,q,yt))});let Y=e(`div`,q);o(q,Y),l(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let bt=e(`p`,Y);o(Y,bt),o(bt,u(`title: `));let xt=v(bt);o(bt,xt),s(()=>{f(xt,se.value||`空`)});let St=e(`p`,Y);o(Y,St),o(St,u(`articleTitle: `));let Ct=v(St);o(St,Ct),s(()=>{f(Ct,me.value||`空`)});let X=e(`p`,Y);o(Y,X),o(X,u(`firstName / lastName: `));let wt=v(X);o(X,wt),s(()=>{f(wt,he.value)}),o(X,u(` `));let Tt=v(X);o(X,Tt),s(()=>{f(Tt,ge.value)});let Z=e(`div`,K);o(K,Z),l(Z,`rounded-box border border-base-300 bg-base-100 p-4 grid gap-4`);let Q=e(`div`,Z);o(Z,Q),l(Q,`flex items-center justify-between gap-3`);let Et=e(`h3`,Q);o(Q,Et),l(Et,`font-semibold`),o(Et,u(`等价手写 props`));let Dt=e(`span`,Q);o(Q,Dt),l(Dt,`badge badge-secondary`),o(Dt,u(`modelValue / onUpdateX`));let Ot=c(`rue:component:anchor`);o(Z,Ot),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:le});a(()=>h(e,Z,Ot))});let $=e(`div`,Z);o(Z,$),l($,`rounded-box border border-base-300 bg-base-200 p-4 text-sm`);let kt=e(`p`,$);o($,kt);let At=e(`strong`,kt);o(kt,At),o(At,u(`v-model`)),o(kt,u(`-> modelValue + onUpdateModelValue`));let jt=e(`p`,$);o($,jt);let Mt=e(`strong`,jt);o(jt,Mt),o(Mt,u(`v-model:trim-title`)),o(jt,u(`-> title + titleModifiers + onUpdateTitle`));let Nt=e(`p`,$);o($,Nt);let Pt=e(`strong`,Nt);o(Nt,Pt),o(Pt,u(`v-model:trim-first-name`)),o(Nt,u(`-> firstName + firstNameModifiers + onUpdateFirstName`));let Ft=e(`p`,$);o($,Ft);let It=e(`strong`,Ft);return o(Ft,It),o(It,u(`v-model:lazy-last-name`)),o(Ft,u(`-> lastName + lastNameModifiers + onUpdateLastName`)),n}):``;a(()=>h(n,r,k))}),o(r,u(` `));let Ce=c(`rue:slot:anchor`);return o(r,Ce),s(()=>{let t=S.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`grid gap-6`);let r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow overflow-auto`);let d=e(`div`,r);o(r,d),l(d,`card-body gap-3`);let f=e(`h2`,d);o(d,f),l(f,`card-title`),o(f,u(`Rue TSX 实际源码`));let p=c(`rue:component:anchor`);o(d,p),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:w});a(()=>h(e,d,p))});let m=e(`div`,n);o(n,m),l(m,`card bg-base-100 shadow overflow-auto`);let g=e(`div`,m);o(m,g),l(g,`card-body gap-3`);let v=e(`h2`,g);o(g,v),l(v,`card-title`),o(v,u(`手写 modelValue / value 对照`));let y=c(`rue:component:anchor`);o(g,y),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:ce});a(()=>h(e,g,y))});let b=e(`div`,n);o(n,b),l(b,`card bg-base-100 shadow overflow-auto`);let x=e(`div`,b);o(b,x),l(x,`card-body gap-3`);let te=e(`h2`,x);o(x,te),l(te,`card-title`),o(te,u(`TSX-safe 修饰符写法`));let ne=c(`rue:component:anchor`);return o(x,ne),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:T});a(()=>h(e,x,ne))}),t}):``;a(()=>h(t,r,Ce))}),n})}),r,y),r})};export{me as default};