import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{a as m,n as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{n as _,t as v}from"./src-BLzF0BqW.js";import{n as y}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as b}from"./tabs-BOxm6iIN.js";import{t as x}from"./text-rotate-BEWWPlHU.js";var S=r=>l(s=>{let c=o(`div`,s);e(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=o(`h2`,c);t(c,f),e(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let e=r.title;p(()=>u(e,f,m))});let h=o(`p`,c);t(c,h),e(h,`text-sm mt-3 mb-3`);let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=r.description;p(()=>u(e,h,_))});let v=i(`rue:component:anchor`);t(c,v),n(()=>{let e=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.activeKey.value,onChange:e=>r.activeKey.value=e,className:`mb-3`});p(()=>u(e,c,v))});let y=i(`rue:slot:anchor`);return t(c,y),n(()=>{let e=r.activeKey.value===`preview`?r.preview:l(()=>{let e=a(),o=i(`rue:component:anchor`);return t(e,o),n(()=>{let t=d(g,{className:`mt-2`,lang:`tsx`,code:r.code});p(()=>u(t,e,o))}),e});p(()=>u(e,c,y))}),c}),C=c=>l(d=>{let f=o(`div`,d);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);t(f,m),e(m,`table table-zebra`);let g=o(`thead`,m);t(m,g);let _=o(`tr`,g);t(g,_);let v=o(`th`,_);t(_,v),t(v,r(`属性`));let y=o(`th`,_);t(_,y),t(y,r(`说明`));let b=o(`th`,_);t(_,b),t(b,r(`类型`));let x=o(`th`,_);t(_,x),t(x,r(`默认值`));let S=o(`tbody`,m);t(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=h({items:c.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),f}),w=`<TextRotate>
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
</TextRotate>`,E=`<span>
  Providing AI Agents for{' '}
  <TextRotate>
    <span>
      <span className="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span className="bg-red-400 text-red-800 px-2">Developers</span>
      <span className="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </TextRotate>
</span>`,D=`<TextRotate className="max-md:text-3xl text-7xl font-title duration-6000">
  <span className="justify-items-center">
    <span>BLAZING</span>
    <span className="font-bold italic px-2">FAST ▶︎▶︎</span>
  </span>
</TextRotate>`,O=`<TextRotate className="max-md:text-3xl text-7xl font-title leading-[2]">
  <span className="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</TextRotate>`,k=`<div className="space-y-4">
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
</div>`,A=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],j=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],M=()=>{let{tabBasic:s,tabArray:h,tabSix:g,tabSentence:b,tabDuration:M,tabLineHeight:te,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>f(()=>({tabBasic:m(`ref:1:0`,()=>c(`preview`)),tabArray:m(`ref:1:1`,()=>c(`preview`)),tabSix:m(`ref:1:2`,()=>c(`preview`)),tabSentence:m(`ref:1:3`,()=>c(`preview`)),tabDuration:m(`ref:1:4`,()=>c(`preview`)),tabLineHeight:m(`ref:1:5`,()=>c(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>c(`preview`))})));return l(c=>{let f=a(),m=i(`rue:component:anchor`);return t(f,m),u(d(y,{children:l(()=>{let c=a(),l=o(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,l);t(l,f),t(f,r(`Text Rotate 文本轮播`));let m=o(`p`,l);t(l,m),e(m,`text-sm mt-3 mb-3`),t(m,r(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let y=i(`rue:component:anchor`);t(l,y),n(()=>{let e=d(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:s,preview:v(x,{children:_(`span`,{children:[v(`span`,{children:`ONE`}),v(`span`,{children:`TWO`}),v(`span`,{children:`THREE`})]})}),code:w});p(()=>u(e,l,y))});let N=i(`rue:component:anchor`);t(l,N),n(()=>{let e=d(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:v(x,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});p(()=>u(e,l,N))});let P=i(`rue:component:anchor`);t(l,P),n(()=>{let e=d(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:g,preview:v(x,{className:`max-md:text-3xl text-7xl font-title`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`DESIGN`}),v(`span`,{children:`DEVELOP`}),v(`span`,{children:`DEPLOY`}),v(`span`,{children:`SCALE`}),v(`span`,{children:`MAINTAIN`}),v(`span`,{children:`REPEAT`})]})}),code:ee});p(()=>u(e,l,P))});let F=i(`rue:component:anchor`);t(l,F),n(()=>{let e=d(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:b,preview:_(`span`,{children:[`Providing AI Agents for`,` `,v(x,{children:_(`span`,{children:[v(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),v(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),v(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:E});p(()=>u(e,l,F))});let I=i(`rue:component:anchor`);t(l,I),n(()=>{let e=d(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:M,preview:v(x,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`BLAZING`}),v(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:D});p(()=>u(e,l,I))});let L=i(`rue:component:anchor`);t(l,L),n(()=>{let e=d(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:te,preview:v(x,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`📐 DESIGN`}),v(`span`,{children:`⌨️ DEVELOP`}),v(`span`,{children:`🌎 DEPLOY`}),v(`span`,{children:`🌱 SCALE`}),v(`span`,{children:`🔧 MAINTAIN`}),v(`span`,{children:`♻️ REPEAT`})]})}),code:O});p(()=>u(e,l,L))});let R=i(`rue:component:anchor`);t(l,R),n(()=>{let e=d(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:_(`div`,{className:`space-y-4`,children:[v(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),v(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:k});p(()=>u(e,l,R))});let z=o(`h2`,l);t(l,z),t(z,r(`API`));let B=o(`p`,l);t(l,B),e(B,`text-sm opacity-80`),t(B,r(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=o(`div`,l);t(l,V),e(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=o(`div`,V);t(V,H),e(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=o(`div`,H);t(H,U),e(U,`text-sm font-medium`),t(U,r(`TextRotate Root`));let W=o(`p`,H);t(H,W),e(W,`mt-2 text-sm opacity-70`),t(W,r(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=o(`div`,V);t(V,G),e(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=o(`div`,G);t(G,K),e(K,`text-sm font-medium`),t(K,r(`TextRotateItem`));let q=o(`p`,G);t(G,q),e(q,`mt-2 text-sm opacity-70`),t(q,r(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=o(`h3`,l);t(l,J),e(J,`mt-8`),t(J,r(`TextRotate`));let Y=o(`p`,l);t(l,Y),e(Y,`text-sm opacity-70`),t(Y,r(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=i(`rue:component:anchor`);t(l,X),n(()=>{let e=d(C,{rows:A});p(()=>u(e,l,X))});let Z=o(`h3`,l);t(l,Z),t(Z,r(`TextRotateItem`));let Q=o(`p`,l);t(l,Q),e(Q,`text-sm opacity-70`),t(Q,r(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=i(`rue:component:anchor`);return t(l,$),n(()=>{let e=d(C,{rows:j});p(()=>u(e,l,$))}),c})}),f,m),f})};export{M as default};