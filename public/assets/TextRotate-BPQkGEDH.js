import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,ot as d,s as f,t as p}from"./vapor-runtime-DHPuOjqh.js";import{a as m,n as h}from"./vapor-helpers-vapor-CJFAWine.js";import{a as g,i as _}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as v}from"./Code-Ds9lKLk6.js";import{t as y}from"./tabs-DSy0eY-V.js";import{t as b}from"./text-rotate-8n1neG6k.js";import{n as x}from"./SidebarPlaygroundDesign-DMSFSCs3.js";var S=t=>u(n=>{let l=e(`div`,n);c(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=e(`h2`,l);a(l,d),c(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=s(`rue:slot:anchor`);a(d,m),o(()=>{let e=t.title;i(()=>f(e,d,m))});let h=e(`p`,l);a(l,h),c(h,`text-sm mt-3 mb-3`);let g=s(`rue:slot:anchor`);a(h,g),o(()=>{let e=t.description;i(()=>f(e,h,g))});let _=s(`rue:component:anchor`);a(l,_),o(()=>{let e=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.activeKey.value,onChange:e=>t.activeKey.value=e,className:`mb-3`});i(()=>f(e,l,_))});let b=s(`rue:slot:anchor`);return a(l,b),o(()=>{let e=t.activeKey.value===`preview`?t.preview:u(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=p(v,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>f(r,e,n))}),e});i(()=>f(e,l,b))}),l}),C=t=>u(n=>{let p=e(`div`,n);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),c(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,l(`属性`));let y=e(`th`,_);a(_,y),a(y,l(`说明`));let b=e(`th`,_);a(_,b),a(b,l(`类型`));let x=e(`th`,_);a(_,x),a(x,l(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,l,p)=>{f(u(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{d(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let p=s(`rue:slot:anchor`);a(u,p),o(()=>{let e=t.prop;i(()=>f(e,u,p))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>f(e,b,x))}),n}),n,c)}})}),p}),w=`<TextRotate>
  <span>
    <span>ONE</span>
    <span>TWO</span>
    <span>THREE</span>
  </span>
</TextRotate>`,T=`<TextRotate
  className="max-md:text-3xl text-7xl font-title"
  innerClassName="justify-items-center"
  items={[
    { text: 'DESIGN' },
    { text: 'DEVELOP' },
    { text: 'DEPLOY' },
    { text: 'SCALE' },
    { text: 'MAINTAIN' },
    { text: 'REPEAT' },
  ]}
/>`,ee=`<TextRotate className="max-md:text-3xl text-7xl font-title">
  <span className="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</TextRotate>`,te=`<span>
  Providing AI Agents for{' '}
  <TextRotate>
    <span>
      <span className="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span className="bg-red-400 text-red-800 px-2">Developers</span>
      <span className="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </TextRotate>
</span>`,E=`<TextRotate className="max-md:text-3xl text-7xl font-title duration-6000">
  <span className="justify-items-center">
    <span>BLAZING</span>
    <span className="font-bold italic px-2">FAST ▶︎▶︎</span>
  </span>
</TextRotate>`,D=`<TextRotate className="max-md:text-3xl text-7xl font-title leading-[2]">
  <span className="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</TextRotate>`,O=`<div className="space-y-4">
  <TextRotate
    className="text-2xl font-title"
    innerClassName="justify-items-start"
    items={[
      { text: 'Readable', strong: true },
      { text: 'Reviewable', type: 'secondary', underline: true },
      { text: 'Deployable', href: 'https://rue.dev', type: 'danger' },
    ]}
  />

  <p className="text-sm text-base-content/70">
    items 会自动复用 Typography.Text / Typography.Link 的语义属性。
  </p>
</div>`,k=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],A=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],j=()=>{let{tabBasic:d,tabArray:h,tabSix:v,tabSentence:y,tabDuration:j,tabLineHeight:M,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>t(()=>({tabBasic:m(`ref:1:0`,()=>n(`preview`)),tabArray:m(`ref:1:1`,()=>n(`preview`)),tabSix:m(`ref:1:2`,()=>n(`preview`)),tabSentence:m(`ref:1:3`,()=>n(`preview`)),tabDuration:m(`ref:1:4`,()=>n(`preview`)),tabLineHeight:m(`ref:1:5`,()=>n(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>n(`preview`))})));return u(t=>{let n=r(),m=s(`rue:component:anchor`);return a(n,m),f(p(x,{children:u(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,n);a(n,u),a(u,l(`Text Rotate 文本轮播`));let m=e(`p`,n);a(n,m),c(m,`text-sm mt-3 mb-3`),a(m,l(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let x=s(`rue:component:anchor`);a(n,x),o(()=>{let e=p(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:d,preview:_(b,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});i(()=>f(e,n,x))});let N=s(`rue:component:anchor`);a(n,N),o(()=>{let e=p(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});i(()=>f(e,n,N))});let P=s(`rue:component:anchor`);a(n,P),o(()=>{let e=p(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:v,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:ee});i(()=>f(e,n,P))});let F=s(`rue:component:anchor`);a(n,F),o(()=>{let e=p(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:y,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(b,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});i(()=>f(e,n,F))});let I=s(`rue:component:anchor`);a(n,I),o(()=>{let e=p(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:j,preview:_(b,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:E});i(()=>f(e,n,I))});let L=s(`rue:component:anchor`);a(n,L),o(()=>{let e=p(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:M,preview:_(b,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:D});i(()=>f(e,n,L))});let R=s(`rue:component:anchor`);a(n,R),o(()=>{let e=p(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:g(`div`,{className:`space-y-4`,children:[_(b,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:O});i(()=>f(e,n,R))});let z=e(`h2`,n);a(n,z),a(z,l(`API`));let B=e(`p`,n);a(n,B),c(B,`text-sm opacity-80`),a(B,l(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=e(`div`,n);a(n,V),c(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=e(`div`,V);a(V,H),c(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=e(`div`,H);a(H,U),c(U,`text-sm font-medium`),a(U,l(`TextRotate Root`));let W=e(`p`,H);a(H,W),c(W,`mt-2 text-sm opacity-70`),a(W,l(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=e(`div`,V);a(V,G),c(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=e(`div`,G);a(G,K),c(K,`text-sm font-medium`),a(K,l(`TextRotateItem`));let q=e(`p`,G);a(G,q),c(q,`mt-2 text-sm opacity-70`),a(q,l(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=e(`h3`,n);a(n,J),c(J,`mt-8`),a(J,l(`TextRotate`));let Y=e(`p`,n);a(n,Y),c(Y,`text-sm opacity-70`),a(Y,l(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=s(`rue:component:anchor`);a(n,X),o(()=>{let e=p(C,{rows:k});i(()=>f(e,n,X))});let Z=e(`h3`,n);a(n,Z),a(Z,l(`TextRotateItem`));let Q=e(`p`,n);a(n,Q),c(Q,`text-sm opacity-70`),a(Q,l(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=s(`rue:component:anchor`);return a(n,$),o(()=>{let e=p(C,{rows:A});i(()=>f(e,n,$))}),t})}),n,m),n})};export{j as default};