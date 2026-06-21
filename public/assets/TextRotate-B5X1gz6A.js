import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,l as o,lt as s,nt as c,o as l,rt as u,t as d,tt as f,zt as p}from"./vapor-runtime-DsQWl-IB.js";import{a as m,n as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as g,i as _}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as v}from"./Code-4SUSUwRg.js";import{t as y}from"./tabs-Duzh3URW.js";import{t as b}from"./text-rotate-BXH8eaNX.js";import{r as x}from"./SidebarPlaygroundDesign-EU389JDE.js";var S=t=>o(a=>{let s=c(`div`,a);r(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=c(`h2`,s);n(s,u),r(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=i(`rue:slot:anchor`);n(u,m),p(()=>{let n=t.title;e(()=>l(n,u,m))});let h=c(`p`,s);n(s,h),r(h,`text-sm mt-3 mb-3`);let g=i(`rue:slot:anchor`);n(h,g),p(()=>{let n=t.description;e(()=>l(n,h,g))});let _=i(`rue:component:anchor`);n(s,_),p(()=>{let n=d(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.activeKey.value,onChange:e=>t.activeKey.value=e,className:`mb-3`});e(()=>l(n,s,_))});let b=i(`rue:slot:anchor`);return n(s,b),p(()=>{let r=t.activeKey.value===`preview`?t.preview:o(()=>{let r=f(),a=i(`rue:component:anchor`);return n(r,a),p(()=>{let n=d(v,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>l(n,r,a))}),r});e(()=>l(r,s,b))}),s}),C=t=>o(a=>{let d=c(`div`,a);r(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=c(`table`,d);n(d,m),r(m,`table table-zebra`);let g=c(`thead`,m);n(m,g);let _=c(`tr`,g);n(g,_);let v=c(`th`,_);n(_,v),n(v,u(`属性`));let y=c(`th`,_);n(_,y),n(y,u(`说明`));let b=c(`th`,_);n(_,b),n(b,u(`类型`));let x=c(`th`,_);n(_,x),n(x,u(`默认值`));let S=c(`tbody`,m);n(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return p(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,u,d)=>{l(o(()=>{let r=f(),a=c(`tr`,r);n(r,a),p(()=>{s(a,`key`,String(t.prop))});let o=c(`td`,a);n(a,o);let u=c(`code`,o);n(o,u);let d=i(`rue:slot:anchor`);n(u,d),p(()=>{let n=t.prop;e(()=>l(n,u,d))});let m=c(`td`,a);n(a,m);let h=i(`rue:slot:anchor`);n(m,h),p(()=>{let n=t.description;e(()=>l(n,m,h))});let g=c(`td`,a);n(a,g);let _=c(`code`,g);n(g,_);let v=i(`rue:slot:anchor`);n(_,v),p(()=>{let n=t.type;e(()=>l(n,_,v))});let y=c(`td`,a);n(a,y);let b=c(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),p(()=>{let n=t.defaultValue;e(()=>l(n,b,x))}),r}),r,a)}})}),d}),w=`<TextRotate>
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
</div>`,k=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],A=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],j=()=>{let{tabBasic:s,tabArray:h,tabSix:v,tabSentence:y,tabDuration:j,tabLineHeight:M,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>a(()=>({tabBasic:m(`ref:1:0`,()=>t(`preview`)),tabArray:m(`ref:1:1`,()=>t(`preview`)),tabSix:m(`ref:1:2`,()=>t(`preview`)),tabSentence:m(`ref:1:3`,()=>t(`preview`)),tabDuration:m(`ref:1:4`,()=>t(`preview`)),tabLineHeight:m(`ref:1:5`,()=>t(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>t(`preview`))})));return o(t=>{let a=f(),m=i(`rue:component:anchor`);return n(a,m),l(d(x,{children:o(()=>{let t=f(),a=c(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let o=c(`h1`,a);n(a,o),n(o,u(`Text Rotate 文本轮播`));let m=c(`p`,a);n(a,m),r(m,`text-sm mt-3 mb-3`),n(m,u(`Text Rotate 继续专注于轮播结构本身：使用 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let x=i(`rue:component:anchor`);n(a,x),p(()=>{let t=d(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:s,preview:_(b,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});e(()=>l(t,a,x))});let N=i(`rue:component:anchor`);n(a,N),p(()=>{let t=d(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});e(()=>l(t,a,N))});let P=i(`rue:component:anchor`);n(a,P),p(()=>{let t=d(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:v,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:ee});e(()=>l(t,a,P))});let F=i(`rue:component:anchor`);n(a,F),p(()=>{let t=d(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:y,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(b,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});e(()=>l(t,a,F))});let I=i(`rue:component:anchor`);n(a,I),p(()=>{let t=d(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:j,preview:_(b,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:E});e(()=>l(t,a,I))});let L=i(`rue:component:anchor`);n(a,L),p(()=>{let t=d(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:M,preview:_(b,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:D});e(()=>l(t,a,L))});let R=i(`rue:component:anchor`);n(a,R),p(()=>{let t=d(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:g(`div`,{className:`space-y-4`,children:[_(b,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:O});e(()=>l(t,a,R))});let z=c(`h2`,a);n(a,z),n(z,u(`API`));let B=c(`p`,a);n(a,B),r(B,`text-sm opacity-80`),n(B,u(`Text Rotate 现在只保持和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=c(`div`,a);n(a,V),r(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=c(`div`,V);n(V,H),r(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=c(`div`,H);n(H,U),r(U,`text-sm font-medium`),n(U,u(`TextRotate Root`));let W=c(`p`,H);n(H,W),r(W,`mt-2 text-sm opacity-70`),n(W,u(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=c(`div`,V);n(V,G),r(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=c(`div`,G);n(G,K),r(K,`text-sm font-medium`),n(K,u(`TextRotateItem`));let q=c(`p`,G);n(G,q),r(q,`mt-2 text-sm opacity-70`),n(q,u(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=c(`h3`,a);n(a,J),r(J,`mt-8`),n(J,u(`TextRotate`));let Y=c(`p`,a);n(a,Y),r(Y,`text-sm opacity-70`),n(Y,u(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走基础 children 还是数据驱动的 items 模式。`));let X=i(`rue:component:anchor`);n(a,X),p(()=>{let t=d(C,{rows:k});e(()=>l(t,a,X))});let Z=c(`h3`,a);n(a,Z),n(Z,u(`TextRotateItem`));let Q=c(`p`,a);n(a,Q),r(Q,`text-sm opacity-70`),n(Q,u(`items 数组中的单项既可以是普通文本，也可以组织成带链接和语义修饰的轮播项。`));let $=i(`rue:component:anchor`);return n(a,$),p(()=>{let t=d(C,{rows:A});e(()=>l(t,a,$))}),t})}),a,m),a})};export{j as default};