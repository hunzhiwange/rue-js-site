import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,pn as o,pt as s,st as c,tn as l,vn as u}from"./context-8lXZvIn-.js";import{l as d,o as f,t as p}from"./vapor-runtime-ygJWVcNn.js";import{a as m,n as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./Code-DhoWkRkB.js";import{n as _,t as v}from"./src-CCTNpCXV.js";import{t as y}from"./tabs-B1XdBEJF.js";import{t as b}from"./text-rotate-vbZkTv-M.js";import{r as x}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var S=e=>d(t=>{let a=s(`div`,t);n(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=s(`h2`,a);c(a,o),n(o,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=r(`rue:slot:anchor`);c(o,m),l(()=>{let t=e.title;u(()=>f(t,o,m))});let h=s(`p`,a);c(a,h),n(h,`text-sm mt-3 mb-3`);let _=r(`rue:slot:anchor`);c(h,_),l(()=>{let t=e.description;u(()=>f(t,h,_))});let v=r(`rue:component:anchor`);c(a,v),l(()=>{let t=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.activeKey.value,onChange:t=>e.activeKey.value=t,className:`mb-3`});u(()=>f(t,a,v))});let b=r(`rue:slot:anchor`);return c(a,b),l(()=>{let t=e.activeKey.value===`preview`?e.preview:d(()=>{let t=i(),n=r(`rue:component:anchor`);return c(t,n),l(()=>{let r=p(g,{className:`mt-2`,lang:`tsx`,code:e.code});u(()=>f(r,t,n))}),t});u(()=>f(t,a,b))}),a}),C=e=>d(o=>{let p=s(`div`,o);n(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=s(`table`,p);c(p,m),n(m,`table table-zebra`);let g=s(`thead`,m);c(m,g);let _=s(`tr`,g);c(g,_);let v=s(`th`,_);c(_,v),c(v,a(`属性`));let y=s(`th`,_);c(_,y),c(y,a(`说明`));let b=s(`th`,_);c(_,b),c(b,a(`类型`));let x=s(`th`,_);c(_,x),c(x,a(`默认值`));let S=s(`tbody`,m);c(m,S);let C=r(`rue:list:start`),w=r(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return l(()=>{T=h({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,a,o,p)=>{f(d(()=>{let n=i(),a=s(`tr`,n);c(n,a),l(()=>{t(a,`key`,String(e.prop))});let o=s(`td`,a);c(a,o);let d=s(`code`,o);c(o,d);let p=r(`rue:slot:anchor`);c(d,p),l(()=>{let t=e.prop;u(()=>f(t,d,p))});let m=s(`td`,a);c(a,m);let h=r(`rue:slot:anchor`);c(m,h),l(()=>{let t=e.description;u(()=>f(t,m,h))});let g=s(`td`,a);c(a,g);let _=s(`code`,g);c(g,_);let v=r(`rue:slot:anchor`);c(_,v),l(()=>{let t=e.type;u(()=>f(t,_,v))});let y=s(`td`,a);c(a,y);let b=s(`code`,y);c(y,b);let x=r(`rue:slot:anchor`);return c(b,x),l(()=>{let t=e.defaultValue;u(()=>f(t,b,x))}),n}),n,a)}})}),p}),w=`<TextRotate>
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
</div>`,k=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],A=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],j=()=>{let{tabBasic:t,tabArray:h,tabSix:g,tabSentence:y,tabDuration:j,tabLineHeight:M,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>e(()=>({tabBasic:m(`ref:1:0`,()=>o(`preview`)),tabArray:m(`ref:1:1`,()=>o(`preview`)),tabSix:m(`ref:1:2`,()=>o(`preview`)),tabSentence:m(`ref:1:3`,()=>o(`preview`)),tabDuration:m(`ref:1:4`,()=>o(`preview`)),tabLineHeight:m(`ref:1:5`,()=>o(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>o(`preview`))})));return d(e=>{let o=i(),m=r(`rue:component:anchor`);return c(o,m),f(p(x,{children:d(()=>{let e=i(),o=s(`div`,e);c(e,o),n(o,`max-w-none prose prose-sm md:prose-base`);let d=s(`h1`,o);c(o,d),c(d,a(`Text Rotate 文本轮播`));let m=s(`p`,o);c(o,m),n(m,`text-sm mt-3 mb-3`),c(m,a(`Text Rotate 继续专注于轮播结构本身：使用 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let x=r(`rue:component:anchor`);c(o,x),l(()=>{let e=p(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:t,preview:v(b,{children:_(`span`,{children:[v(`span`,{children:`ONE`}),v(`span`,{children:`TWO`}),v(`span`,{children:`THREE`})]})}),code:w});u(()=>f(e,o,x))});let N=r(`rue:component:anchor`);c(o,N),l(()=>{let e=p(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:v(b,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});u(()=>f(e,o,N))});let P=r(`rue:component:anchor`);c(o,P),l(()=>{let e=p(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:g,preview:v(b,{className:`max-md:text-3xl text-7xl font-title`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`DESIGN`}),v(`span`,{children:`DEVELOP`}),v(`span`,{children:`DEPLOY`}),v(`span`,{children:`SCALE`}),v(`span`,{children:`MAINTAIN`}),v(`span`,{children:`REPEAT`})]})}),code:ee});u(()=>f(e,o,P))});let F=r(`rue:component:anchor`);c(o,F),l(()=>{let e=p(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:y,preview:_(`span`,{children:[`Providing AI Agents for`,` `,v(b,{children:_(`span`,{children:[v(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),v(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),v(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});u(()=>f(e,o,F))});let I=r(`rue:component:anchor`);c(o,I),l(()=>{let e=p(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:j,preview:v(b,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`BLAZING`}),v(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:E});u(()=>f(e,o,I))});let L=r(`rue:component:anchor`);c(o,L),l(()=>{let e=p(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:M,preview:v(b,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`📐 DESIGN`}),v(`span`,{children:`⌨️ DEVELOP`}),v(`span`,{children:`🌎 DEPLOY`}),v(`span`,{children:`🌱 SCALE`}),v(`span`,{children:`🔧 MAINTAIN`}),v(`span`,{children:`♻️ REPEAT`})]})}),code:D});u(()=>f(e,o,L))});let R=r(`rue:component:anchor`);c(o,R),l(()=>{let e=p(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:_(`div`,{className:`space-y-4`,children:[v(b,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),v(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:O});u(()=>f(e,o,R))});let z=s(`h2`,o);c(o,z),c(z,a(`API`));let B=s(`p`,o);c(o,B),n(B,`text-sm opacity-80`),c(B,a(`Text Rotate 现在只保持和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=s(`div`,o);c(o,V),n(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=s(`div`,V);c(V,H),n(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=s(`div`,H);c(H,U),n(U,`text-sm font-medium`),c(U,a(`TextRotate Root`));let W=s(`p`,H);c(H,W),n(W,`mt-2 text-sm opacity-70`),c(W,a(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=s(`div`,V);c(V,G),n(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=s(`div`,G);c(G,K),n(K,`text-sm font-medium`),c(K,a(`TextRotateItem`));let q=s(`p`,G);c(G,q),n(q,`mt-2 text-sm opacity-70`),c(q,a(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=s(`h3`,o);c(o,J),n(J,`mt-8`),c(J,a(`TextRotate`));let Y=s(`p`,o);c(o,Y),n(Y,`text-sm opacity-70`),c(Y,a(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走基础 children 还是数据驱动的 items 模式。`));let X=r(`rue:component:anchor`);c(o,X),l(()=>{let e=p(C,{rows:k});u(()=>f(e,o,X))});let Z=s(`h3`,o);c(o,Z),c(Z,a(`TextRotateItem`));let Q=s(`p`,o);c(o,Q),n(Q,`text-sm opacity-70`),c(Q,a(`items 数组中的单项既可以是普通文本，也可以组织成带链接和语义修饰的轮播项。`));let $=r(`rue:component:anchor`);return c(o,$),l(()=>{let e=p(C,{rows:A});u(()=>f(e,o,$))}),e})}),o,m),o})};export{j as default};