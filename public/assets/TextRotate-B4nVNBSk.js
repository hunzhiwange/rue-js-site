import{$ as e,Et as t,G as n,H as r,K as i,W as a,_t as o,d as s,kt as c,l,q as u,t as d,tt as f,xt as p}from"./vapor-runtime-BAZOdMd8.js";import{a as m,n as h}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as g,t as _}from"./src-DZJ4J6sD.js";import{n as v}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as y}from"./Code-DY4Ua5uc.js";import{t as b}from"./tabs-Casd077O.js";import{t as x}from"./text-rotate-BKrizZQB.js";var S=e=>s(t=>{let o=i(`div`,t);f(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`h2`,o);r(o,u),f(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=a(`rue:slot:anchor`);r(u,m),c(()=>{let t=e.title;p(()=>l(t,u,m))});let h=i(`p`,o);r(o,h),f(h,`text-sm mt-3 mb-3`);let g=a(`rue:slot:anchor`);r(h,g),c(()=>{let t=e.description;p(()=>l(t,h,g))});let _=a(`rue:component:anchor`);r(o,_),c(()=>{let t=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.activeKey.value,onChange:t=>e.activeKey.value=t,className:`mb-3`});p(()=>l(t,o,_))});let v=a(`rue:slot:anchor`);return r(o,v),c(()=>{let t=e.activeKey.value===`preview`?e.preview:s(()=>{let t=n(),i=a(`rue:component:anchor`);return r(t,i),c(()=>{let n=d(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>l(n,t,i))}),t});p(()=>l(t,o,v))}),o}),C=t=>s(o=>{let d=i(`div`,o);f(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,d);r(d,m),f(m,`table table-zebra`);let g=i(`thead`,m);r(m,g);let _=i(`tr`,g);r(g,_);let v=i(`th`,_);r(_,v),r(v,u(`属性`));let y=i(`th`,_);r(_,y),r(y,u(`说明`));let b=i(`th`,_);r(_,b),r(b,u(`类型`));let x=i(`th`,_);r(_,x),r(x,u(`默认值`));let S=i(`tbody`,m);r(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return c(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,o,u,d,f)=>{l(s(()=>{let o=n(),s=i(`tr`,o);r(o,s),c(()=>{e(s,`key`,String(t.prop))});let u=i(`td`,s);r(s,u);let d=i(`code`,u);r(u,d);let f=a(`rue:slot:anchor`);r(d,f),c(()=>{let e=t.prop;p(()=>l(e,d,f))});let m=i(`td`,s);r(s,m);let h=a(`rue:slot:anchor`);r(m,h),c(()=>{let e=t.description;p(()=>l(e,m,h))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=a(`rue:slot:anchor`);r(_,v),c(()=>{let e=t.type;p(()=>l(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=a(`rue:slot:anchor`);return r(b,x),c(()=>{let e=t.defaultValue;p(()=>l(e,b,x))}),o}),o,u)}})}),d}),w=`<TextRotate>
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
</div>`,k=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],A=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],j=()=>{let{tabBasic:e,tabArray:h,tabSix:y,tabSentence:b,tabDuration:j,tabLineHeight:M,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>t(()=>({tabBasic:m(`ref:1:0`,()=>o(`preview`)),tabArray:m(`ref:1:1`,()=>o(`preview`)),tabSix:m(`ref:1:2`,()=>o(`preview`)),tabSentence:m(`ref:1:3`,()=>o(`preview`)),tabDuration:m(`ref:1:4`,()=>o(`preview`)),tabLineHeight:m(`ref:1:5`,()=>o(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>o(`preview`))})));return s(t=>{let o=n(),m=a(`rue:component:anchor`);return r(o,m),l(d(v,{children:s(()=>{let t=n(),o=i(`div`,t);r(t,o),f(o,`max-w-none prose prose-sm md:prose-base`);let s=i(`h1`,o);r(o,s),r(s,u(`Text Rotate 文本轮播`));let m=i(`p`,o);r(o,m),f(m,`text-sm mt-3 mb-3`),r(m,u(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let v=a(`rue:component:anchor`);r(o,v),c(()=>{let t=d(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:e,preview:_(x,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});p(()=>l(t,o,v))});let N=a(`rue:component:anchor`);r(o,N),c(()=>{let e=d(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:_(x,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});p(()=>l(e,o,N))});let P=a(`rue:component:anchor`);r(o,P),c(()=>{let e=d(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:y,preview:_(x,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:ee});p(()=>l(e,o,P))});let F=a(`rue:component:anchor`);r(o,F),c(()=>{let e=d(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:b,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(x,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});p(()=>l(e,o,F))});let I=a(`rue:component:anchor`);r(o,I),c(()=>{let e=d(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:j,preview:_(x,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:E});p(()=>l(e,o,I))});let L=a(`rue:component:anchor`);r(o,L),c(()=>{let e=d(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:M,preview:_(x,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:D});p(()=>l(e,o,L))});let R=a(`rue:component:anchor`);r(o,R),c(()=>{let e=d(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:g(`div`,{className:`space-y-4`,children:[_(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:O});p(()=>l(e,o,R))});let z=i(`h2`,o);r(o,z),r(z,u(`API`));let B=i(`p`,o);r(o,B),f(B,`text-sm opacity-80`),r(B,u(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=i(`div`,o);r(o,V),f(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=i(`div`,V);r(V,H),f(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=i(`div`,H);r(H,U),f(U,`text-sm font-medium`),r(U,u(`TextRotate Root`));let W=i(`p`,H);r(H,W),f(W,`mt-2 text-sm opacity-70`),r(W,u(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=i(`div`,V);r(V,G),f(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=i(`div`,G);r(G,K),f(K,`text-sm font-medium`),r(K,u(`TextRotateItem`));let q=i(`p`,G);r(G,q),f(q,`mt-2 text-sm opacity-70`),r(q,u(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=i(`h3`,o);r(o,J),f(J,`mt-8`),r(J,u(`TextRotate`));let Y=i(`p`,o);r(o,Y),f(Y,`text-sm opacity-70`),r(Y,u(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=a(`rue:component:anchor`);r(o,X),c(()=>{let e=d(C,{rows:k});p(()=>l(e,o,X))});let Z=i(`h3`,o);r(o,Z),r(Z,u(`TextRotateItem`));let Q=i(`p`,o);r(o,Q),f(Q,`text-sm opacity-70`),r(Q,u(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=a(`rue:component:anchor`);return r(o,$),c(()=>{let e=d(C,{rows:A});p(()=>l(e,o,$))}),t})}),o,m),o})};export{j as default};