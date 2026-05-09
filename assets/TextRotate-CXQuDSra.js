import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h,n as g}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as _,t as v}from"./src-CqIWk1va.js";import{n as y}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as b}from"./Code-B1JFTu6m.js";import{t as x}from"./tabs-BbiCzXqJ.js";import{t as S}from"./text-rotate-CKDcMTR_.js";var C=({title:t,description:n,activeKey:d,preview:m,code:h})=>p(()=>{let g=e(`div`);o(g,`component-preview not-prose text-base-content my-6 lg:my-12`);let _=e(`h2`);l(g,_),o(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let v=r(_);l(_,v),u(()=>{s(v,t)});let y=e(`p`);l(g,y),o(y,`text-sm mt-3 mb-3`);let S=r(y);l(y,S),u(()=>{s(S,n)});let C=i(`rue:component:anchor`);l(g,C),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:d.value,onChange:e=>d.value=e,className:`mb-3`}),g,C)});let w=i(`rue:slot:anchor`);return l(g,w),u(()=>{c(d.value===`preview`?m:p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:h}),e,t)}),e}),g,w)}),g}),w=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),ee=`<TextRotate>
  <span>
    <span>ONE</span>
    <span>TWO</span>
    <span>THREE</span>
  </span>
</TextRotate>`,te=`<TextRotate
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
/>`,ne=`<TextRotate className="max-md:text-3xl text-7xl font-title">
  <span className="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</TextRotate>`,re=`<span>
  Providing AI Agents for{' '}
  <TextRotate>
    <span>
      <span className="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span className="bg-red-400 text-red-800 px-2">Developers</span>
      <span className="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </TextRotate>
</span>`,ie=`<TextRotate className="max-md:text-3xl text-7xl font-title duration-6000">
  <span className="justify-items-center">
    <span>BLAZING</span>
    <span className="font-bold italic px-2">FAST ▶︎▶︎</span>
  </span>
</TextRotate>`,T=`<TextRotate className="max-md:text-3xl text-7xl font-title leading-[2]">
  <span className="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</TextRotate>`,E=`<div className="space-y-4">
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
</div>`,D=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],O=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],k=()=>{let{tabBasic:r,tabArray:s,tabSix:g,tabSentence:b,tabDuration:x,tabLineHeight:k,tabSemanticItems:A}=h(`useSetup:0:0`,()=>m(()=>({tabBasic:h(`ref:1:0`,()=>d(`preview`)),tabArray:h(`ref:1:1`,()=>d(`preview`)),tabSix:h(`ref:1:2`,()=>d(`preview`)),tabSentence:h(`ref:1:3`,()=>d(`preview`)),tabDuration:h(`ref:1:4`,()=>d(`preview`)),tabLineHeight:h(`ref:1:5`,()=>d(`preview`)),tabSemanticItems:h(`ref:1:6`,()=>d(`preview`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Text Rotate 文本轮播`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let y=e(`div`);l(p,y),o(y,`text-sm flex flex-wrap gap-4`);let j=e(`a`);l(y,j),t(j,`href`,`https://daisyui.com/components/text-rotate/`),t(j,`target`,`_blank`),l(j,n(`查看 Text Rotate 静态样式`));let M=i(`rue:component:anchor`);l(p,M),u(()=>{c(f(C,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:r,preview:v(S,{children:_(`span`,{children:[v(`span`,{children:`ONE`}),v(`span`,{children:`TWO`}),v(`span`,{children:`THREE`})]})}),code:ee}),p,M)});let N=i(`rue:component:anchor`);l(p,N),u(()=>{c(f(C,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:s,preview:v(S,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:te}),p,N)});let P=i(`rue:component:anchor`);l(p,P),u(()=>{c(f(C,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:g,preview:v(S,{className:`max-md:text-3xl text-7xl font-title`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`DESIGN`}),v(`span`,{children:`DEVELOP`}),v(`span`,{children:`DEPLOY`}),v(`span`,{children:`SCALE`}),v(`span`,{children:`MAINTAIN`}),v(`span`,{children:`REPEAT`})]})}),code:ne}),p,P)});let F=i(`rue:component:anchor`);l(p,F),u(()=>{c(f(C,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:b,preview:_(`span`,{children:[`Providing AI Agents for`,` `,v(S,{children:_(`span`,{children:[v(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),v(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),v(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:re}),p,F)});let I=i(`rue:component:anchor`);l(p,I),u(()=>{c(f(C,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:x,preview:v(S,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`BLAZING`}),v(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:ie}),p,I)});let L=i(`rue:component:anchor`);l(p,L),u(()=>{c(f(C,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:k,preview:v(S,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:_(`span`,{className:`justify-items-center`,children:[v(`span`,{children:`📐 DESIGN`}),v(`span`,{children:`⌨️ DEVELOP`}),v(`span`,{children:`🌎 DEPLOY`}),v(`span`,{children:`🌱 SCALE`}),v(`span`,{children:`🔧 MAINTAIN`}),v(`span`,{children:`♻️ REPEAT`})]})}),code:T}),p,L)});let R=i(`rue:component:anchor`);l(p,R),u(()=>{c(f(C,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:A,preview:_(`div`,{className:`space-y-4`,children:[v(S,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),v(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:E}),p,R)});let z=e(`h2`);l(p,z),l(z,n(`API`));let B=e(`p`);l(p,B),o(B,`text-sm opacity-80`),l(B,n(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=e(`div`);l(p,V),o(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=e(`div`);l(V,H),o(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=e(`div`);l(H,U),o(U,`text-sm font-medium`),l(U,n(`TextRotate Root`));let W=e(`p`);l(H,W),o(W,`mt-2 text-sm opacity-70`),l(W,n(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=e(`div`);l(V,G),o(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=e(`div`);l(G,K),o(K,`text-sm font-medium`),l(K,n(`TextRotateItem`));let q=e(`p`);l(G,q),o(q,`mt-2 text-sm opacity-70`),l(q,n(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=e(`h3`);l(p,J),o(J,`mt-8`),l(J,n(`TextRotate`));let Y=e(`p`);l(p,Y),o(Y,`text-sm opacity-70`),l(Y,n(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=i(`rue:component:anchor`);l(p,X),u(()=>{c(f(w,{rows:D}),p,X)});let Z=e(`h3`);l(p,Z),l(Z,n(`TextRotateItem`));let Q=e(`p`);l(p,Q),o(Q,`text-sm opacity-70`),l(Q,n(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=i(`rue:component:anchor`);return l(p,$),u(()=>{c(f(w,{rows:O}),p,$)}),d})}),d,m),d})};export{k as default};