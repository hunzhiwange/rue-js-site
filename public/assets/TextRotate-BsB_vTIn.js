import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,l as c,nt as l,o as u,t as d,tt as f,ut as p}from"./vapor-runtime-CKrmRMZX.js";import{a as m,n as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as g,i as _}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as v}from"./Code-D5UqTwV6.js";import{t as y}from"./tabs-DRfs918f.js";import{t as b}from"./text-rotate-Ce6XmkFh.js";import{r as x}from"./SidebarPlaygroundDesign-CWudvLqE.js";var S=n=>c(i=>{let o=f(`div`,i);p(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=f(`h2`,o);a(o,l),p(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=e(`rue:slot:anchor`);a(l,m),t(()=>{let e=n.title;r(()=>u(e,l,m))});let h=f(`p`,o);a(o,h),p(h,`text-sm mt-3 mb-3`);let g=e(`rue:slot:anchor`);a(h,g),t(()=>{let e=n.description;r(()=>u(e,h,g))});let _=e(`rue:component:anchor`);a(o,_),t(()=>{let e=d(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.activeKey.value,onChange:e=>n.activeKey.value=e,className:`mb-3`});r(()=>u(e,o,_))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.activeKey.value===`preview`?n.preview:c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=d(v,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>u(e,i,o))}),i});r(()=>u(i,o,b))}),o}),C=n=>c(i=>{let d=f(`div`,i);p(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=f(`table`,d);a(d,m),p(m,`table table-zebra`);let g=f(`thead`,m);a(m,g);let _=f(`tr`,g);a(g,_);let v=f(`th`,_);a(_,v),a(v,l(`属性`));let y=f(`th`,_);a(_,y),a(y,l(`说明`));let b=f(`th`,_);a(_,b),a(b,l(`类型`));let x=f(`th`,_);a(_,x),a(x,l(`默认值`));let S=f(`tbody`,m);a(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=h({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,l,d,p)=>{u(c(()=>{let i=s(),c=f(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=f(`td`,c);a(c,l);let d=f(`code`,l);a(l,d);let p=e(`rue:slot:anchor`);a(d,p),t(()=>{let e=n.prop;r(()=>u(e,d,p))});let m=f(`td`,c);a(c,m);let h=e(`rue:slot:anchor`);a(m,h),t(()=>{let e=n.description;r(()=>u(e,m,h))});let g=f(`td`,c);a(c,g);let _=f(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>u(e,_,v))});let y=f(`td`,c);a(c,y);let b=f(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>u(e,b,x))}),i}),i,l)}})}),d}),w=`<TextRotate>
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
</div>`,k=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],A=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],j=()=>{let{tabBasic:o,tabArray:h,tabSix:v,tabSentence:y,tabDuration:j,tabLineHeight:M,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>i(()=>({tabBasic:m(`ref:1:0`,()=>n(`preview`)),tabArray:m(`ref:1:1`,()=>n(`preview`)),tabSix:m(`ref:1:2`,()=>n(`preview`)),tabSentence:m(`ref:1:3`,()=>n(`preview`)),tabDuration:m(`ref:1:4`,()=>n(`preview`)),tabLineHeight:m(`ref:1:5`,()=>n(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>n(`preview`))})));return c(n=>{let i=s(),m=e(`rue:component:anchor`);return a(i,m),u(d(x,{children:c(()=>{let n=s(),i=f(`div`,n);a(n,i),p(i,`max-w-none prose prose-sm md:prose-base`);let c=f(`h1`,i);a(i,c),a(c,l(`Text Rotate 文本轮播`));let m=f(`p`,i);a(i,m),p(m,`text-sm mt-3 mb-3`),a(m,l(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let x=e(`rue:component:anchor`);a(i,x),t(()=>{let e=d(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:o,preview:_(b,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});r(()=>u(e,i,x))});let N=e(`rue:component:anchor`);a(i,N),t(()=>{let e=d(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});r(()=>u(e,i,N))});let P=e(`rue:component:anchor`);a(i,P),t(()=>{let e=d(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:v,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:ee});r(()=>u(e,i,P))});let F=e(`rue:component:anchor`);a(i,F),t(()=>{let e=d(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:y,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(b,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});r(()=>u(e,i,F))});let I=e(`rue:component:anchor`);a(i,I),t(()=>{let e=d(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:j,preview:_(b,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:E});r(()=>u(e,i,I))});let L=e(`rue:component:anchor`);a(i,L),t(()=>{let e=d(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:M,preview:_(b,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:D});r(()=>u(e,i,L))});let R=e(`rue:component:anchor`);a(i,R),t(()=>{let e=d(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:g(`div`,{className:`space-y-4`,children:[_(b,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:O});r(()=>u(e,i,R))});let z=f(`h2`,i);a(i,z),a(z,l(`API`));let B=f(`p`,i);a(i,B),p(B,`text-sm opacity-80`),a(B,l(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=f(`div`,i);a(i,V),p(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=f(`div`,V);a(V,H),p(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=f(`div`,H);a(H,U),p(U,`text-sm font-medium`),a(U,l(`TextRotate Root`));let W=f(`p`,H);a(H,W),p(W,`mt-2 text-sm opacity-70`),a(W,l(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=f(`div`,V);a(V,G),p(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=f(`div`,G);a(G,K),p(K,`text-sm font-medium`),a(K,l(`TextRotateItem`));let q=f(`p`,G);a(G,q),p(q,`mt-2 text-sm opacity-70`),a(q,l(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=f(`h3`,i);a(i,J),p(J,`mt-8`),a(J,l(`TextRotate`));let Y=f(`p`,i);a(i,Y),p(Y,`text-sm opacity-70`),a(Y,l(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=e(`rue:component:anchor`);a(i,X),t(()=>{let e=d(C,{rows:k});r(()=>u(e,i,X))});let Z=f(`h3`,i);a(i,Z),a(Z,l(`TextRotateItem`));let Q=f(`p`,i);a(i,Q),p(Q,`text-sm opacity-70`),a(Q,l(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=e(`rue:component:anchor`);return a(i,$),t(()=>{let e=d(C,{rows:A});r(()=>u(e,i,$))}),n})}),i,m),i})};export{j as default};