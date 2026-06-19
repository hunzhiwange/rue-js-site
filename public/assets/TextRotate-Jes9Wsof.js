import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,l as s,lt as c,o as l,st as u,t as d,tt as f,zt as p}from"./vapor-runtime-CXIalONM.js";import{a as m,n as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as g,i as _}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as v}from"./Code-BIscIyEp.js";import{t as y}from"./tabs-CZWMQq5i.js";import{t as b}from"./text-rotate-DpRbe4uw.js";import{r as x}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var S=a=>s(u=>{let f=o(`div`,u);c(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let p=o(`h2`,f);i(f,p),c(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=t(`rue:slot:anchor`);i(p,m),n(()=>{let e=a.title;r(()=>l(e,p,m))});let h=o(`p`,f);i(f,h),c(h,`text-sm mt-3 mb-3`);let g=t(`rue:slot:anchor`);i(h,g),n(()=>{let e=a.description;r(()=>l(e,h,g))});let _=t(`rue:component:anchor`);i(f,_),n(()=>{let e=d(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.activeKey.value,onChange:e=>a.activeKey.value=e,className:`mb-3`});r(()=>l(e,f,_))});let b=t(`rue:slot:anchor`);return i(f,b),n(()=>{let o=a.activeKey.value===`preview`?a.preview:s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=d(v,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>l(e,o,s))}),o});r(()=>l(o,f,b))}),f}),C=a=>s(d=>{let p=o(`div`,d);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,p);i(p,m),c(m,`table table-zebra`);let g=o(`thead`,m);i(m,g);let _=o(`tr`,g);i(g,_);let v=o(`th`,_);i(_,v),i(v,f(`属性`));let y=o(`th`,_);i(_,y),i(y,f(`说明`));let b=o(`th`,_);i(_,b),i(b,f(`类型`));let x=o(`th`,_);i(_,x),i(x,f(`默认值`));let S=o(`tbody`,m);i(m,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=h({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,c,d,f,p)=>{l(s(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{u(c,`key`,String(a.prop))});let d=o(`td`,c);i(c,d);let f=o(`code`,d);i(d,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.prop;r(()=>l(e,f,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>l(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>l(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>l(e,b,x))}),s}),c,d)}})}),p}),w=`<TextRotate>
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
</div>`,A=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],j=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],M=()=>{let{tabBasic:u,tabArray:h,tabSix:v,tabSentence:y,tabDuration:M,tabLineHeight:te,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>a(()=>({tabBasic:m(`ref:1:0`,()=>p(`preview`)),tabArray:m(`ref:1:1`,()=>p(`preview`)),tabSix:m(`ref:1:2`,()=>p(`preview`)),tabSentence:m(`ref:1:3`,()=>p(`preview`)),tabDuration:m(`ref:1:4`,()=>p(`preview`)),tabLineHeight:m(`ref:1:5`,()=>p(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>p(`preview`))})));return s(a=>{let p=e(),m=t(`rue:component:anchor`);return i(p,m),l(d(x,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`max-w-none prose prose-sm md:prose-base`);let p=o(`h1`,s);i(s,p),i(p,f(`Text Rotate 文本轮播`));let m=o(`p`,s);i(s,m),c(m,`text-sm mt-3 mb-3`),i(m,f(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let x=t(`rue:component:anchor`);i(s,x),n(()=>{let e=d(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:u,preview:_(b,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});r(()=>l(e,s,x))});let N=t(`rue:component:anchor`);i(s,N),n(()=>{let e=d(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});r(()=>l(e,s,N))});let P=t(`rue:component:anchor`);i(s,P),n(()=>{let e=d(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:v,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:ee});r(()=>l(e,s,P))});let F=t(`rue:component:anchor`);i(s,F),n(()=>{let e=d(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:y,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(b,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:E});r(()=>l(e,s,F))});let I=t(`rue:component:anchor`);i(s,I),n(()=>{let e=d(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:M,preview:_(b,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:D});r(()=>l(e,s,I))});let L=t(`rue:component:anchor`);i(s,L),n(()=>{let e=d(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:te,preview:_(b,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:O});r(()=>l(e,s,L))});let R=t(`rue:component:anchor`);i(s,R),n(()=>{let e=d(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:g(`div`,{className:`space-y-4`,children:[_(b,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:k});r(()=>l(e,s,R))});let z=o(`h2`,s);i(s,z),i(z,f(`API`));let B=o(`p`,s);i(s,B),c(B,`text-sm opacity-80`),i(B,f(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=o(`div`,s);i(s,V),c(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=o(`div`,V);i(V,H),c(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=o(`div`,H);i(H,U),c(U,`text-sm font-medium`),i(U,f(`TextRotate Root`));let W=o(`p`,H);i(H,W),c(W,`mt-2 text-sm opacity-70`),i(W,f(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=o(`div`,V);i(V,G),c(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=o(`div`,G);i(G,K),c(K,`text-sm font-medium`),i(K,f(`TextRotateItem`));let q=o(`p`,G);i(G,q),c(q,`mt-2 text-sm opacity-70`),i(q,f(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=o(`h3`,s);i(s,J),c(J,`mt-8`),i(J,f(`TextRotate`));let Y=o(`p`,s);i(s,Y),c(Y,`text-sm opacity-70`),i(Y,f(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=t(`rue:component:anchor`);i(s,X),n(()=>{let e=d(C,{rows:A});r(()=>l(e,s,X))});let Z=o(`h3`,s);i(s,Z),i(Z,f(`TextRotateItem`));let Q=o(`p`,s);i(s,Q),c(Q,`text-sm opacity-70`),i(Q,f(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=t(`rue:component:anchor`);return i(s,$),n(()=>{let e=d(C,{rows:j});r(()=>l(e,s,$))}),a})}),p,m),p})};export{M as default};