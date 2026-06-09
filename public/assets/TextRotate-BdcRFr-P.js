import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,ot as u,qt as d,s as f,t as p}from"./vapor-runtime-aZAg0Qkw.js";import{a as m,n as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as g,i as _}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as v}from"./Code-5DOEyGxf.js";import{t as y}from"./tabs-CWmjyn0I.js";import{t as b}from"./text-rotate-Dn26xPHq.js";import{r as x}from"./SidebarPlaygroundDesign-CS11MI8e.js";var S=r=>l(c=>{let u=e(`div`,c);s(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=e(`h2`,u);a(u,d),s(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=o(`rue:slot:anchor`);a(d,m),i(()=>{let e=r.title;t(()=>f(e,d,m))});let h=e(`p`,u);a(u,h),s(h,`text-sm mt-3 mb-3`);let g=o(`rue:slot:anchor`);a(h,g),i(()=>{let e=r.description;t(()=>f(e,h,g))});let _=o(`rue:component:anchor`);a(u,_),i(()=>{let e=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.activeKey.value,onChange:e=>r.activeKey.value=e,className:`mb-3`});t(()=>f(e,u,_))});let b=o(`rue:slot:anchor`);return a(u,b),i(()=>{let e=r.activeKey.value===`preview`?r.preview:l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=p(v,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>f(n,e,s))}),e});t(()=>f(e,u,b))}),u}),C=r=>l(d=>{let p=e(`div`,d);s(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),s(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,c(`属性`));let y=e(`th`,_);a(_,y),a(y,c(`说明`));let b=e(`th`,_);a(_,b),a(b,c(`类型`));let x=e(`th`,_);a(_,x),a(x,c(`默认值`));let S=e(`tbody`,m);a(m,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=h({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,d,p)=>{f(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{u(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let d=e(`code`,l);a(l,d);let p=o(`rue:slot:anchor`);a(d,p),i(()=>{let e=r.prop;t(()=>f(e,d,p))});let m=e(`td`,c);a(c,m);let h=o(`rue:slot:anchor`);a(m,h),i(()=>{let e=r.description;t(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>f(e,b,x))}),s}),s,c)}})}),p}),w=`<TextRotate>
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
</div>`,k=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],A=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],j=()=>{let{tabBasic:u,tabArray:h,tabSix:v,tabSentence:y,tabDuration:j,tabLineHeight:M,tabSemanticItems:ne}=m(`useSetup:0:0`,()=>d(()=>({tabBasic:m(`ref:1:0`,()=>r(`preview`)),tabArray:m(`ref:1:1`,()=>r(`preview`)),tabSix:m(`ref:1:2`,()=>r(`preview`)),tabSentence:m(`ref:1:3`,()=>r(`preview`)),tabDuration:m(`ref:1:4`,()=>r(`preview`)),tabLineHeight:m(`ref:1:5`,()=>r(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>r(`preview`))})));return l(r=>{let d=n(),m=o(`rue:component:anchor`);return a(d,m),f(p(x,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,l);a(l,d),a(d,c(`Text Rotate 文本轮播`));let m=e(`p`,l);a(l,m),s(m,`text-sm mt-3 mb-3`),a(m,c(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let x=o(`rue:component:anchor`);a(l,x),i(()=>{let e=p(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:u,preview:_(b,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});t(()=>f(e,l,x))});let N=o(`rue:component:anchor`);a(l,N),i(()=>{let e=p(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:h,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:T});t(()=>f(e,l,N))});let P=o(`rue:component:anchor`);a(l,P),i(()=>{let e=p(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:v,preview:_(b,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:ee});t(()=>f(e,l,P))});let F=o(`rue:component:anchor`);a(l,F),i(()=>{let e=p(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:y,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(b,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:te});t(()=>f(e,l,F))});let I=o(`rue:component:anchor`);a(l,I),i(()=>{let e=p(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:j,preview:_(b,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:E});t(()=>f(e,l,I))});let L=o(`rue:component:anchor`);a(l,L),i(()=>{let e=p(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:M,preview:_(b,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:D});t(()=>f(e,l,L))});let R=o(`rue:component:anchor`);a(l,R),i(()=>{let e=p(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ne,preview:g(`div`,{className:`space-y-4`,children:[_(b,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:O});t(()=>f(e,l,R))});let z=e(`h2`,l);a(l,z),a(z,c(`API`));let B=e(`p`,l);a(l,B),s(B,`text-sm opacity-80`),a(B,c(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=e(`div`,l);a(l,V),s(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=e(`div`,V);a(V,H),s(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=e(`div`,H);a(H,U),s(U,`text-sm font-medium`),a(U,c(`TextRotate Root`));let W=e(`p`,H);a(H,W),s(W,`mt-2 text-sm opacity-70`),a(W,c(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=e(`div`,V);a(V,G),s(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=e(`div`,G);a(G,K),s(K,`text-sm font-medium`),a(K,c(`TextRotateItem`));let q=e(`p`,G);a(G,q),s(q,`mt-2 text-sm opacity-70`),a(q,c(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=e(`h3`,l);a(l,J),s(J,`mt-8`),a(J,c(`TextRotate`));let Y=e(`p`,l);a(l,Y),s(Y,`text-sm opacity-70`),a(Y,c(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=o(`rue:component:anchor`);a(l,X),i(()=>{let e=p(C,{rows:k});t(()=>f(e,l,X))});let Z=e(`h3`,l);a(l,Z),a(Z,c(`TextRotateItem`));let Q=e(`p`,l);a(l,Q),s(Q,`text-sm opacity-70`),a(Q,c(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=o(`rue:component:anchor`);return a(l,$),i(()=>{let e=p(C,{rows:A});t(()=>f(e,l,$))}),r})}),d,m),d})};export{j as default};