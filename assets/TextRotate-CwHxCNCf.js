import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,_t as s,d as c,l,mt as u,ot as d,t as f,ut as p}from"./vapor-runtime-Bp8DIxJg.js";import{a as m,n as h}from"./vapor-helpers-vapor-D3i3KBBg.js";import{n as g,t as _}from"./src-Cl1DK5fX.js";import{n as v}from"./SidebarPlaygroundDesign-CIhn6bFh.js";import{t as y}from"./Code-D55WiaDx.js";import{t as b}from"./tabs-CrC7r95z.js";import{t as x}from"./text-rotate-nSCc4jQc.js";var S=a=>c(o=>{let u=r(`div`,o);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=r(`h2`,u);i(u,d),n(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=e(`rue:slot:anchor`);i(d,m),s(()=>{let e=a.title;p(()=>l(e,d,m))});let h=r(`p`,u);i(u,h),n(h,`text-sm mt-3 mb-3`);let g=e(`rue:slot:anchor`);i(h,g),s(()=>{let e=a.description;p(()=>l(e,h,g))});let _=e(`rue:component:anchor`);i(u,_),s(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.activeKey.value,onChange:e=>a.activeKey.value=e,className:`mb-3`});p(()=>l(e,u,_))});let v=e(`rue:slot:anchor`);return i(u,v),s(()=>{let n=a.activeKey.value===`preview`?a.preview:c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),s(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:a.code});p(()=>l(e,n,r))}),n});p(()=>l(n,u,v))}),u}),C=u=>c(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=r(`table`,f);i(f,m),n(m,`table table-zebra`);let g=r(`thead`,m);i(m,g);let _=r(`tr`,g);i(g,_);let v=r(`th`,_);i(_,v),i(v,a(`属性`));let y=r(`th`,_);i(_,y),i(y,a(`说明`));let b=r(`th`,_);i(_,b),i(b,a(`类型`));let x=r(`th`,_);i(_,x),i(x,a(`默认值`));let S=r(`tbody`,m);i(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return s(()=>{T=h({items:u.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,u,d,f)=>{l(c(()=>{let a=t(),c=r(`tr`,a);i(a,c),s(()=>{o(c,`key`,String(n.prop))});let u=r(`td`,c);i(c,u);let d=r(`code`,u);i(u,d);let f=e(`rue:slot:anchor`);i(d,f),s(()=>{let e=n.prop;p(()=>l(e,d,f))});let m=r(`td`,c);i(c,m);let h=e(`rue:slot:anchor`);i(m,h),s(()=>{let e=n.description;p(()=>l(e,m,h))});let g=r(`td`,c);i(c,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),s(()=>{let e=n.type;p(()=>l(e,_,v))});let y=r(`td`,c);i(c,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),s(()=>{let e=n.defaultValue;p(()=>l(e,b,x))}),a}),a,u)}})}),f}),w=`<TextRotate>
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
</span>`,ne=`<TextRotate className="max-md:text-3xl text-7xl font-title duration-6000">
  <span className="justify-items-center">
    <span>BLAZING</span>
    <span className="font-bold italic px-2">FAST ▶︎▶︎</span>
  </span>
</TextRotate>`,E=`<TextRotate className="max-md:text-3xl text-7xl font-title leading-[2]">
  <span className="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</TextRotate>`,D=`<div className="space-y-4">
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
</div>`,O=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],k=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],A=()=>{let{tabBasic:h,tabArray:y,tabSix:b,tabSentence:A,tabDuration:re,tabLineHeight:ie,tabSemanticItems:ae}=m(`useSetup:0:0`,()=>u(()=>({tabBasic:m(`ref:1:0`,()=>d(`preview`)),tabArray:m(`ref:1:1`,()=>d(`preview`)),tabSix:m(`ref:1:2`,()=>d(`preview`)),tabSentence:m(`ref:1:3`,()=>d(`preview`)),tabDuration:m(`ref:1:4`,()=>d(`preview`)),tabLineHeight:m(`ref:1:5`,()=>d(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>d(`preview`))})));return c(u=>{let d=t(),m=e(`rue:component:anchor`);return i(d,m),l(f(v,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let d=r(`h1`,u);i(u,d),i(d,a(`Text Rotate 文本轮播`));let m=r(`p`,u);i(u,m),n(m,`text-sm mt-3 mb-3`),i(m,a(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let v=r(`div`,u);i(u,v),n(v,`text-sm flex flex-wrap gap-4`);let j=r(`a`,v);i(v,j),o(j,`href`,`https://daisyui.com/components/text-rotate/`),o(j,`target`,`_blank`),i(j,a(`查看 Text Rotate 静态样式`));let M=e(`rue:component:anchor`);i(u,M),s(()=>{let e=f(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:h,preview:_(x,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});p(()=>l(e,u,M))});let N=e(`rue:component:anchor`);i(u,N),s(()=>{let e=f(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:y,preview:_(x,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});p(()=>l(e,u,N))});let P=e(`rue:component:anchor`);i(u,P),s(()=>{let e=f(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:b,preview:_(x,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:ee});p(()=>l(e,u,P))});let F=e(`rue:component:anchor`);i(u,F),s(()=>{let e=f(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:A,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(x,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});p(()=>l(e,u,F))});let I=e(`rue:component:anchor`);i(u,I),s(()=>{let e=f(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:re,preview:_(x,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:ne});p(()=>l(e,u,I))});let L=e(`rue:component:anchor`);i(u,L),s(()=>{let e=f(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:ie,preview:_(x,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:E});p(()=>l(e,u,L))});let R=e(`rue:component:anchor`);i(u,R),s(()=>{let e=f(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ae,preview:g(`div`,{className:`space-y-4`,children:[_(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:D});p(()=>l(e,u,R))});let z=r(`h2`,u);i(u,z),i(z,a(`API`));let B=r(`p`,u);i(u,B),n(B,`text-sm opacity-80`),i(B,a(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=r(`div`,u);i(u,V),n(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=r(`div`,V);i(V,H),n(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=r(`div`,H);i(H,U),n(U,`text-sm font-medium`),i(U,a(`TextRotate Root`));let W=r(`p`,H);i(H,W),n(W,`mt-2 text-sm opacity-70`),i(W,a(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=r(`div`,V);i(V,G),n(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=r(`div`,G);i(G,K),n(K,`text-sm font-medium`),i(K,a(`TextRotateItem`));let q=r(`p`,G);i(G,q),n(q,`mt-2 text-sm opacity-70`),i(q,a(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=r(`h3`,u);i(u,J),n(J,`mt-8`),i(J,a(`TextRotate`));let Y=r(`p`,u);i(u,Y),n(Y,`text-sm opacity-70`),i(Y,a(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=e(`rue:component:anchor`);i(u,X),s(()=>{let e=f(C,{rows:O});p(()=>l(e,u,X))});let Z=r(`h3`,u);i(u,Z),i(Z,a(`TextRotateItem`));let Q=r(`p`,u);i(u,Q),n(Q,`text-sm opacity-70`),i(Q,a(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=e(`rue:component:anchor`);return i(u,$),s(()=>{let e=f(C,{rows:k});p(()=>l(e,u,$))}),c})}),d,m),d})};export{A as default};