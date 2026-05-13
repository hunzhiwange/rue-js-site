import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,lt as u,pt as d,t as f,u as p}from"./vapor-runtime-D3a-68js.js";import{a as m,n as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as g,t as _}from"./src-BfQKH6_d.js";import{n as v}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./tabs-BgQmsOey.js";import{t as x}from"./text-rotate-BwFPAdT6.js";var S=r=>p(()=>{let o=n(`div`);t(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=n(`h2`);i(o,s),t(s,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let u=a(`rue:slot:anchor`);i(s,u),c(()=>{let e=r.title;d(()=>l(e,s,u))});let m=n(`p`);i(o,m),t(m,`text-sm mt-3 mb-3`);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=r.description;d(()=>l(e,m,h))});let g=a(`rue:component:anchor`);i(o,g),c(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.activeKey.value,onChange:e=>r.activeKey.value=e,className:`mb-3`});d(()=>l(e,o,g))});let _=a(`rue:slot:anchor`);return i(o,_),c(()=>{let t=r.activeKey.value===`preview`?r.preview:p(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),c(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:r.code});d(()=>l(e,t,n))}),t});d(()=>l(t,o,_))}),o}),C=s=>p(()=>{let u=n(`div`);t(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=n(`table`);i(u,f),t(f,`table table-zebra`);let m=n(`thead`);i(f,m);let g=n(`tr`);i(m,g);let _=n(`th`);i(g,_),i(_,r(`属性`));let v=n(`th`);i(g,v),i(v,r(`说明`));let y=n(`th`);i(g,y),i(y,r(`类型`));let b=n(`th`);i(g,b),i(b,r(`默认值`));let x=n(`tbody`);i(f,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return c(()=>{w=h({items:s.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,s,u,f)=>{l(p(()=>{let r=e(),s=n(`tr`);i(r,s),c(()=>{o(s,`key`,String(t.prop))});let u=n(`td`);i(s,u);let f=n(`code`);i(u,f);let p=a(`rue:slot:anchor`);i(f,p),c(()=>{let e=t.prop;d(()=>l(e,f,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=t.description;d(()=>l(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),c(()=>{let e=t.type;d(()=>l(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),c(()=>{let e=t.defaultValue;d(()=>l(e,b,x))}),r}),r,s)}})}),u}),w=`<TextRotate>
  <span>
    <span>ONE</span>
    <span>TWO</span>
    <span>THREE</span>
  </span>
</TextRotate>`,ee=`<TextRotate
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
/>`,te=`<TextRotate className="max-md:text-3xl text-7xl font-title">
  <span className="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</TextRotate>`,ne=`<span>
  Providing AI Agents for{' '}
  <TextRotate>
    <span>
      <span className="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span className="bg-red-400 text-red-800 px-2">Developers</span>
      <span className="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </TextRotate>
</span>`,re=`<TextRotate className="max-md:text-3xl text-7xl font-title duration-6000">
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
</div>`,D=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],O=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],k=()=>{let{tabBasic:h,tabArray:y,tabSix:b,tabSentence:k,tabDuration:A,tabLineHeight:ie,tabSemanticItems:ae}=m(`useSetup:0:0`,()=>s(()=>({tabBasic:m(`ref:1:0`,()=>u(`preview`)),tabArray:m(`ref:1:1`,()=>u(`preview`)),tabSix:m(`ref:1:2`,()=>u(`preview`)),tabSentence:m(`ref:1:3`,()=>u(`preview`)),tabDuration:m(`ref:1:4`,()=>u(`preview`)),tabLineHeight:m(`ref:1:5`,()=>u(`preview`)),tabSemanticItems:m(`ref:1:6`,()=>u(`preview`))})));return p(()=>{let s=e(),u=a(`rue:component:anchor`);return i(s,u),l(f(v,{children:p(()=>{let s=e(),u=n(`div`);i(s,u),t(u,`max-w-none prose prose-sm md:prose-base`);let p=n(`h1`);i(u,p),i(p,r(`Text Rotate 文本轮播`));let m=n(`p`);i(u,m),t(m,`text-sm mt-3 mb-3`),i(m,r(`Text Rotate 继续专注于轮播结构本身：保留 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。`));let v=n(`div`);i(u,v),t(v,`text-sm flex flex-wrap gap-4`);let j=n(`a`);i(v,j),o(j,`href`,`https://daisyui.com/components/text-rotate/`),o(j,`target`,`_blank`),i(j,r(`查看 Text Rotate 静态样式`));let M=a(`rue:component:anchor`);i(u,M),c(()=>{let e=f(S,{title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:h,preview:_(x,{children:g(`span`,{children:[_(`span`,{children:`ONE`}),_(`span`,{children:`TWO`}),_(`span`,{children:`THREE`})]})}),code:w});d(()=>l(e,u,M))});let N=a(`rue:component:anchor`);i(u,N),c(()=>{let e=f(S,{title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:y,preview:_(x,{className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]}),code:ee});d(()=>l(e,u,N))});let P=a(`rue:component:anchor`);i(u,P),c(()=>{let e=f(S,{title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:b,preview:_(x,{className:`max-md:text-3xl text-7xl font-title`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`DESIGN`}),_(`span`,{children:`DEVELOP`}),_(`span`,{children:`DEPLOY`}),_(`span`,{children:`SCALE`}),_(`span`,{children:`MAINTAIN`}),_(`span`,{children:`REPEAT`})]})}),code:te});d(()=>l(e,u,P))});let F=a(`rue:component:anchor`);i(u,F),c(()=>{let e=f(S,{title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:k,preview:g(`span`,{children:[`Providing AI Agents for`,` `,_(x,{children:g(`span`,{children:[_(`span`,{className:`bg-teal-400 text-teal-800 px-2`,children:`Designers`}),_(`span`,{className:`bg-red-400 text-red-800 px-2`,children:`Developers`}),_(`span`,{className:`bg-blue-400 text-blue-800 px-2`,children:`Managers`})]})})]}),code:ne});d(()=>l(e,u,F))});let I=a(`rue:component:anchor`);i(u,I),c(()=>{let e=f(S,{title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:A,preview:_(x,{className:`max-md:text-3xl text-7xl font-title duration-6000`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`BLAZING`}),_(`span`,{className:`font-bold italic px-2`,children:`FAST ▶︎▶︎`})]})}),code:re});d(()=>l(e,u,I))});let L=a(`rue:component:anchor`);i(u,L),c(()=>{let e=f(S,{title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:ie,preview:_(x,{className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:g(`span`,{className:`justify-items-center`,children:[_(`span`,{children:`📐 DESIGN`}),_(`span`,{children:`⌨️ DEVELOP`}),_(`span`,{children:`🌎 DEPLOY`}),_(`span`,{children:`🌱 SCALE`}),_(`span`,{children:`🔧 MAINTAIN`}),_(`span`,{children:`♻️ REPEAT`})]})}),code:T});d(()=>l(e,u,L))});let R=a(`rue:component:anchor`);i(u,R),c(()=>{let e=f(S,{title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:ae,preview:g(`div`,{className:`space-y-4`,children:[_(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。`})]}),code:E});d(()=>l(e,u,R))});let z=n(`h2`);i(u,z),i(z,r(`API`));let B=n(`p`);i(u,B),t(B,`text-sm opacity-80`),i(B,r(`Text Rotate 现在只保留和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。`));let V=n(`div`);i(u,V),t(V,`not-prose mt-4 grid gap-4 md:grid-cols-2`);let H=n(`div`);i(V,H),t(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=n(`div`);i(H,U),t(U,`text-sm font-medium`),i(U,r(`TextRotate Root`));let W=n(`p`);i(H,W),t(W,`mt-2 text-sm opacity-70`),i(W,r(`根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。`));let G=n(`div`);i(V,G),t(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=n(`div`);i(G,K),t(K,`text-sm font-medium`),i(K,r(`TextRotateItem`));let q=n(`p`);i(G,q),t(q,`mt-2 text-sm opacity-70`),i(q,r(`数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。`));let J=n(`h3`);i(u,J),t(J,`mt-8`),i(J,r(`TextRotate`));let Y=n(`p`);i(u,Y),t(Y,`text-sm opacity-70`),i(Y,r(`根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走原始 children 还是数据驱动的 items 模式。`));let X=a(`rue:component:anchor`);i(u,X),c(()=>{let e=f(C,{rows:D});d(()=>l(e,u,X))});let Z=n(`h3`);i(u,Z),i(Z,r(`TextRotateItem`));let Q=n(`p`);i(u,Q),t(Q,`text-sm opacity-70`),i(Q,r(`items 数组中的单项既可以是普通文本，也可以升级成带链接和语义修饰的轮播项。`));let $=a(`rue:component:anchor`);return i(u,$),c(()=>{let e=f(C,{rows:O});d(()=>l(e,u,$))}),s})}),s,u),s})};export{k as default};