import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,qt as u,s as d,st as f,t as p}from"./vapor-runtime-iQZthBPQ.js";import{a as m,n as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as g,i as _}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as v}from"./Code-CZqShVUj.js";import{t as y}from"./tabs-BBuGEPV7.js";import{t as b}from"./text-rotate--C1iRau1.js";import{r as x}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var S=e=>l(r=>{let c=i(`div`,r);f(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`h2`,c);n(c,u),f(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=a(`rue:slot:anchor`);n(u,m),o(()=>{let n=e.title;t(()=>d(n,u,m))});let h=i(`p`,c);n(c,h),f(h,`text-sm mt-3 mb-3`);let g=a(`rue:slot:anchor`);n(h,g),o(()=>{let n=e.description;t(()=>d(n,h,g))});let _=a(`rue:component:anchor`);n(c,_),o(()=>{let n=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.activeKey.value,onChange:t=>e.activeKey.value=t,className:`mb-3`});t(()=>d(n,c,_))});let b=a(`rue:slot:anchor`);return n(c,b),o(()=>{let r=e.activeKey.value===`preview`?e.preview:l(()=>{let r=s(),i=a(`rue:component:anchor`);return n(r,i),o(()=>{let n=p(v,{className:`mt-2`,lang:`tsx`,code:e.code});t(()=>d(n,r,i))}),r});t(()=>d(r,c,b))}),c}),C=r=>l(u=>{let p=i(`div`,u);f(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,p);n(p,m),f(m,`table table-zebra`);let g=i(`thead`,m);n(m,g);let _=i(`tr`,g);n(g,_);let v=i(`th`,_);n(_,v),n(v,e(`属性`));let y=i(`th`,_);n(_,y),n(y,e(`说明`));let b=i(`th`,_);n(_,b),n(b,e(`类型`));let x=i(`th`,_);n(_,x),n(x,e(`默认值`));let S=i(`tbody`,m);n(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=h({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,u,f,p)=>{d(l(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let f=i(`code`,u);n(u,f);let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let n=e.prop;t(()=>d(n,f,p))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>d(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>d(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>d(n,b,x))}),r}),r,u)}})}),p}),w=`<TextRotate>
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
</div>`,k=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],A=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],j=()=>{let{tabBasic:c,tabArray:h,tabSix:v,tabSentence:y,tabDuration:j,tabLineHeight:M,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>u(()=>({tabBasic:m(`ref:1:0`,()=>r(`preview`)),tabArray:m(`ref:1:1`,()=>r(`preview`)),tabSix:m(`ref:1:2`,()=>r(`preview`)),tabSentence:m(`ref:1:3`,()=>r(`preview`)),tabDuration:m(`ref:1:4`,()=>r(`preview`)),tabLineHeight:m(`ref:1:5`,()=>r(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>r(`preview`))})));return l(r=>{let u=s(),m=a(`rue:component:anchor`);return n(u,m),d(p(x,{children:l(()=>{let r=s(),l=i(`div`,r);n(r,l),f(l,`max-w-none prose prose-sm md:prose-base`);let u=i(`h1`,l);n(l,u),n(u,e(`Text Rotate 文本轮播`));let m=i(`p`,l);n(l,m),f(m,`text-sm mt-3 mb-3`),n(m,e(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let x=a(`rue:component:anchor`);n(l,x),o(()=>{let e=p(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:c,preview:_(b,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});t(()=>d(e,l,x))});let N=a(`rue:component:anchor`);n(l,N),o(()=>{let e=p(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});t(()=>d(e,l,N))});let P=a(`rue:component:anchor`);n(l,P),o(()=>{let e=p(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:v,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:ee});t(()=>d(e,l,P))});let F=a(`rue:component:anchor`);n(l,F),o(()=>{let e=p(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:y,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(b,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});t(()=>d(e,l,F))});let I=a(`rue:component:anchor`);n(l,I),o(()=>{let e=p(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:j,preview:_(b,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:E});t(()=>d(e,l,I))});let L=a(`rue:component:anchor`);n(l,L),o(()=>{let e=p(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:M,preview:_(b,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:D});t(()=>d(e,l,L))});let R=a(`rue:component:anchor`);n(l,R),o(()=>{let e=p(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:g(`div`,{className:`space-y-4`,children:[_(b,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:O});t(()=>d(e,l,R))});let z=i(`h2`,l);n(l,z),n(z,e(`API`));let B=i(`p`,l);n(l,B),f(B,`text-sm opacity-80`),n(B,e(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=i(`div`,l);n(l,V),f(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=i(`div`,V);n(V,H),f(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=i(`div`,H);n(H,U),f(U,`text-sm font-medium`),n(U,e(`TextRotate Root`));let W=i(`p`,H);n(H,W),f(W,`mt-2 text-sm opacity-70`),n(W,e(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=i(`div`,V);n(V,G),f(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=i(`div`,G);n(G,K),f(K,`text-sm font-medium`),n(K,e(`TextRotateItem`));let q=i(`p`,G);n(G,q),f(q,`mt-2 text-sm opacity-70`),n(q,e(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=i(`h3`,l);n(l,J),f(J,`mt-8`),n(J,e(`TextRotate`));let Y=i(`p`,l);n(l,Y),f(Y,`text-sm opacity-70`),n(Y,e(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=a(`rue:component:anchor`);n(l,X),o(()=>{let e=p(C,{rows:k});t(()=>d(e,l,X))});let Z=i(`h3`,l);n(l,Z),n(Z,e(`TextRotateItem`));let Q=i(`p`,l);n(l,Q),f(Q,`text-sm opacity-70`),n(Q,e(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=a(`rue:component:anchor`);return n(l,$),o(()=>{let e=p(C,{rows:A});t(()=>d(e,l,$))}),r})}),u,m),u})};export{j as default};