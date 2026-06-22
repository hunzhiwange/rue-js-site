import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,t as d,tn as f,tt as p}from"./vapor-runtime-x7F5M-49.js";import{a as m,n as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as g,o as _}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as v}from"./Code-C5NjdoiC.js";import{t as y}from"./tabs-C4UF43sZ.js";import{t as b}from"./text-rotate-CzO1l1Ce.js";import{r as x}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var S=n=>a(r=>{let i=u(`div`,r);l(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=u(`h2`,i);e(i,c),l(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=p(`rue:slot:anchor`);e(c,m),t(()=>{let e=n.title;f(()=>s(e,c,m))});let h=u(`p`,i);e(i,h),l(h,`text-sm mt-3 mb-3`);let g=p(`rue:slot:anchor`);e(h,g),t(()=>{let e=n.description;f(()=>s(e,h,g))});let _=p(`rue:component:anchor`);e(i,_),t(()=>{let e=d(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.activeKey.value,onChange:e=>n.activeKey.value=e,className:`mb-3`});f(()=>s(e,i,_))});let b=p(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.activeKey.value===`preview`?n.preview:a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(v,{className:`mt-2`,lang:`tsx`,code:n.code});f(()=>s(e,r,i))}),r});f(()=>s(r,i,b))}),i}),C=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=u(`table`,d);e(d,m),l(m,`table table-zebra`);let g=u(`thead`,m);e(m,g);let _=u(`tr`,g);e(g,_);let v=u(`th`,_);e(_,v),e(v,i(`属性`));let y=u(`th`,_);e(_,y),e(y,i(`说明`));let b=u(`th`,_);e(_,b),e(b,i(`类型`));let x=u(`th`,_);e(_,x),e(x,i(`默认值`));let S=u(`tbody`,m);e(m,S);let C=p(`rue:list:start`),w=p(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=h({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=p(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;f(()=>s(e,l,d))});let m=u(`td`,a);e(a,m);let h=p(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.description;f(()=>s(e,m,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;f(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=p(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;f(()=>s(e,b,x))}),i}),i,c)}})}),d}),w=`<TextRotate>
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
</div>`,k=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],A=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],j=()=>{let{tabBasic:r,tabArray:h,tabSix:v,tabSentence:y,tabDuration:j,tabLineHeight:M,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>c(()=>({tabBasic:m(`ref:1:0`,()=>n(`preview`)),tabArray:m(`ref:1:1`,()=>n(`preview`)),tabSix:m(`ref:1:2`,()=>n(`preview`)),tabSentence:m(`ref:1:3`,()=>n(`preview`)),tabDuration:m(`ref:1:4`,()=>n(`preview`)),tabLineHeight:m(`ref:1:5`,()=>n(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>n(`preview`))})));return a(n=>{let c=o(),m=p(`rue:component:anchor`);return e(c,m),s(d(x,{children:a(()=>{let n=o(),a=u(`div`,n);e(n,a),l(a,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,a);e(a,c),e(c,i(`Text Rotate 文本轮播`));let m=u(`p`,a);e(a,m),l(m,`text-sm mt-3 mb-3`),e(m,i(`Text Rotate 继续专注于轮播结构本身：使用 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let x=p(`rue:component:anchor`);e(a,x),t(()=>{let e=d(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:r,preview:g(b,{children:_(`span`,{children:[g(`span`,{children:`ONE`}),g(`span`,{children:`TWO`}),g(`span`,{children:`THREE`})]})}),code:w});f(()=>s(e,a,x))});let N=p(`rue:component:anchor`);e(a,N),t(()=>{let e=d(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:g(b,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});f(()=>s(e,a,N))});let P=p(`rue:component:anchor`);e(a,P),t(()=>{let e=d(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:v,preview:g(b,{className:`max-md:text-3xl text-7xl font-title`,children:_(`span`,{className:`justify-items-center`,children:[g(`span`,{children:`DESIGN`}),g(`span`,{children:`DEVELOP`}),g(`span`,{children:`DEPLOY`}),g(`span`,{children:`SCALE`}),g(`span`,{children:`MAINTAIN`}),g(`span`,{children:`REPEAT`})]})}),code:ee});f(()=>s(e,a,P))});let F=p(`rue:component:anchor`);e(a,F),t(()=>{let e=d(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:y,preview:_(`span`,{children:[`Providing AI Agents for`,` `,g(b,{children:_(`span`,{children:[g(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),g(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),g(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});f(()=>s(e,a,F))});let I=p(`rue:component:anchor`);e(a,I),t(()=>{let e=d(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:j,preview:g(b,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:_(`span`,{className:`justify-items-center`,children:[g(`span`,{children:`BLAZING`}),g(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:E});f(()=>s(e,a,I))});let L=p(`rue:component:anchor`);e(a,L),t(()=>{let e=d(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:M,preview:g(b,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:_(`span`,{className:`justify-items-center`,children:[g(`span`,{children:`📐 DESIGN`}),g(`span`,{children:`⌨️ DEVELOP`}),g(`span`,{children:`🌎 DEPLOY`}),g(`span`,{children:`🌱 SCALE`}),g(`span`,{children:`🔧 MAINTAIN`}),g(`span`,{children:`♻️ REPEAT`})]})}),code:D});f(()=>s(e,a,L))});let R=p(`rue:component:anchor`);e(a,R),t(()=>{let e=d(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:_(`div`,{className:`space-y-4`,children:[g(b,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),g(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:O});f(()=>s(e,a,R))});let z=u(`h2`,a);e(a,z),e(z,i(`API`));let B=u(`p`,a);e(a,B),l(B,`text-sm opacity-80`),e(B,i(`Text Rotate 现在只保持和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=u(`div`,a);e(a,V),l(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=u(`div`,V);e(V,H),l(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=u(`div`,H);e(H,U),l(U,`text-sm font-medium`),e(U,i(`TextRotate Root`));let W=u(`p`,H);e(H,W),l(W,`mt-2 text-sm opacity-70`),e(W,i(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=u(`div`,V);e(V,G),l(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=u(`div`,G);e(G,K),l(K,`text-sm font-medium`),e(K,i(`TextRotateItem`));let q=u(`p`,G);e(G,q),l(q,`mt-2 text-sm opacity-70`),e(q,i(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=u(`h3`,a);e(a,J),l(J,`mt-8`),e(J,i(`TextRotate`));let Y=u(`p`,a);e(a,Y),l(Y,`text-sm opacity-70`),e(Y,i(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走基础 children 还是数据驱动的 items 模式。`));let X=p(`rue:component:anchor`);e(a,X),t(()=>{let e=d(C,{rows:k});f(()=>s(e,a,X))});let Z=u(`h3`,a);e(a,Z),e(Z,i(`TextRotateItem`));let Q=u(`p`,a);e(a,Q),l(Q,`text-sm opacity-70`),e(Q,i(`items 数组中的单项既可以是普通文本，也可以组织成带链接和语义修饰的轮播项。`));let $=p(`rue:component:anchor`);return e(a,$),t(()=>{let e=d(C,{rows:A});f(()=>s(e,a,$))}),n})}),c,m),c})};export{j as default};