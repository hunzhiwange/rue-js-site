import{Bt as e,C as t,Et as n,G as r,H as i,K as a,Mt as o,S as s,V as c,W as l,Y as u,_n as d,_t as f,b as p,bn as m,fn as h,gn as g,hn as _,ht as v,kn as y,mn as b,nt as x,q as S,wn as C,x as w,z as T}from"./rue-runtime-CwEGJ854.js";import{t as E}from"./Code-B3jCYMAr.js";import{t as D}from"./tabs-DUviBzjL.js";import{t as O}from"./text-rotate-DxYeMGru.js";import{r as k}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var ee=d(`<span><span>ONE</span><span>TWO</span><span>THREE</span></span>`),te=d(`<span class="justify-items-center"><span>DESIGN</span><span>DEVELOP</span><span>DEPLOY</span><span>SCALE</span><span>MAINTAIN</span><span>REPEAT</span></span>`),A=d(`<span>Providing AI Agents for <!--rue:opaque-hole:0--></span>`),j=d(`<span class="justify-items-center"><span>BLAZING</span><span class="font-bold italic px-2">FAST ▶︎▶︎</span></span>`),M=d(`<span class="justify-items-center"><span>📐 DESIGN</span><span>⌨️ DEVELOP</span><span>🌎 DEPLOY</span><span>🌱 SCALE</span><span>🔧 MAINTAIN</span><span>♻️ REPEAT</span></span>`),N=d(`<div class="space-y-4"><!--rue:opaque-hole:0--><p class="m-0 text-sm text-base-content/70">items 会自动复用 Typography 的语义属性，所以轮播词条和正文排版可以保持同一套表达。</p></div>`),P=d(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"><!--rue:text-hole:0--></h2><p class="text-sm mt-3 mb-3"><!--rue:text-hole:1--></p><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),F=d(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),I=d(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Text Rotate 文本轮播</h1><p class="text-sm mt-3 mb-3">Text Rotate 继续专注于轮播结构本身：使用 Rue 当前的视觉和 daisyUI 的 text-rotate class 用法。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><h2>API</h2><p class="text-sm opacity-80">Text Rotate 现在只保持和轮播结构直接相关的 API；排版语义统一由 Typography 组件承担。</p><div class="not-prose mt-4 grid gap-4 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-sm font-medium">TextRotate Root</div><p class="mt-2 text-sm opacity-70">根组件负责 children 和 items 两种模式的切换，并承接根节点、内部包裹层和统一项样式。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-sm font-medium">TextRotateItem</div><p class="mt-2 text-sm opacity-70">数据项负责单词条的内容和语义修饰；普通项走 Typography.Text，带 href 的项走 Typography.Link。</p></div></div><h3 class="mt-8">TextRotate</h3><p class="text-sm opacity-70">根组件负责维持 daisyUI 的 text-rotate 结构，同时决定走基础 children 还是数据驱动的 items 模式。</p><!--rue:opaque-hole:7--><h3>TextRotateItem</h3><p class="text-sm opacity-70">items 数组中的单项既可以是普通文本，也可以组织成带链接和语义修饰的轮播项。</p><!--rue:opaque-hole:8--></div>`),L=e=>n(Object.assign(t=>{let n=P().content.cloneNode(!0).firstChild,o=n.childNodes[0].childNodes[0],s=o.parentNode,l=n.childNodes[1].childNodes[0],u=l.parentNode,d=n.childNodes[2],f=d.parentNode,m=n.childNodes[3],h=m.parentNode;p({parent:s,before:o},()=>e.title,()=>({})),p({parent:u,before:l},()=>e.description,()=>({}));let g=b(f);return a(g,D,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.activeKey.value,onChange:t=>e.activeKey.value=t,className:`mb-3`})),f.insertBefore(g,d),c(h,m,()=>e.activeKey.value===`preview`?{__rue_compiled_branch_key:!0,create:()=>r(()=>e.preview)}:{__rue_compiled_branch_key:!1,create:()=>i(E,()=>({className:`mt-2`,lang:`tsx`,code:e.code}))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),R=e=>{let r=l(e.rows);return S(n(Object.assign(e=>{let i=F().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,c=[];return C(()=>{let e=r.get()||[];c=t(o,a,c,e,(e,t)=>e.prop,(e,t)=>{let r=l(e),i=l(t);return s((e,t,i)=>w(e,i,()=>n(Object.assign(e=>{let t=_(`tr`,e),n=_(`td`,t);h(t,n);let i=_(`code`,n);h(n,i);let a=g(``);h(i,a),m(a,()=>r.get().prop);let o=_(`td`,t);h(t,o);let s=g(``);h(o,s),m(s,()=>r.get().description);let c=_(`td`,t);h(t,c);let l=_(`code`,c);h(c,l);let u=g(``);h(l,u),m(u,()=>r.get().type);let d=_(`td`,t);h(t,d);let f=_(`code`,d);h(d,f);let p=g(``);return h(f,p),m(p,()=>r.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{r.set(e.rows)}),()=>e)},z=`<TextRotate>
  <span>
    <span>ONE</span>
    <span>TWO</span>
    <span>THREE</span>
  </span>
</TextRotate>`,B=`<TextRotate
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
/>`,V=`<TextRotate className="max-md:text-3xl text-7xl font-title">
  <span className="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</TextRotate>`,H=`<span>
  Providing AI Agents for{' '}
  <TextRotate>
    <span>
      <span className="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span className="bg-red-400 text-red-800 px-2">Developers</span>
      <span className="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </TextRotate>
</span>`,U=`<TextRotate className="max-md:text-3xl text-7xl font-title duration-6000">
  <span className="justify-items-center">
    <span>BLAZING</span>
    <span className="font-bold italic px-2">FAST ▶︎▶︎</span>
  </span>
</TextRotate>`,W=`<TextRotate className="max-md:text-3xl text-7xl font-title leading-[2]">
  <span className="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</TextRotate>`,ne=`<div className="space-y-4">
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
</div>`,re=[{prop:`as`,description:`根节点标签，可在 inline 的 span 和 block 的 div 之间切换。`,type:`'span' | 'div'`,defaultValue:`'span'`},{prop:`children`,description:`直接传入 daisyUI 原生 text-rotate 结构。`,type:`any`,defaultValue:`-`},{prop:`items`,description:`通过数据项数组生成轮播内容；传入后优先于 children。`,type:`ReadonlyArray<TextRotateItem>`,defaultValue:`-`},{prop:`innerClassName / innerStyle`,description:`作用于内部包裹层，常用于设置对齐方式与局部样式。`,type:`string / any`,defaultValue:`-`},{prop:`itemClassName / itemStyle`,description:`为 items 渲染出的每一项补充统一类名和样式。`,type:`string / any`,defaultValue:`-`},{prop:`className / style`,description:`补充根节点样式，常用于字号、颜色和 duration 类。`,type:`string / any`,defaultValue:`-`}],ie=[{prop:`key`,description:`自定义列表 key，未传时回退为当前索引。`,type:`string | number`,defaultValue:`-`},{prop:`text / children`,description:`单项内容，优先读取 children，再回退到 text。`,type:`any`,defaultValue:`-`},{prop:`href / target / rel`,description:`声明后会按 Typography.Link 渲染该项。`,type:`string`,defaultValue:`-`},{prop:`as`,description:`非链接项输出标签，适合在行内文本和块级文本之间切换。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`语义色调，支持 default、secondary、success、warning、danger。`,type:`TextRotateTone`,defaultValue:`'default'`},{prop:`disabled / mark / code / keyboard / underline / delete / strong / italic`,description:`单项文本修饰能力，与 Typography.Text / Typography.Link 的布尔语义属性保持一致。`,type:`boolean`,defaultValue:`false`}],G=()=>{let t=e(`preview`),r=e(`preview`),s=e(`preview`),c=e(`preview`),l=e(`preview`),d=e(`preview`),p=e(`preview`);return o(()=>S((()=>{let e=v(()=>{let e=x(),o=I().content.cloneNode(!0),m=o.firstChild,v=m.childNodes[2],S=v.parentNode,T=m.childNodes[3],E=T.parentNode,D=m.childNodes[4],k=D.parentNode,P=m.childNodes[5],F=P.parentNode,G=m.childNodes[6],ae=G.parentNode,K=m.childNodes[7],oe=K.parentNode,q=m.childNodes[8],se=q.parentNode,J=m.childNodes[14],Y=J.parentNode,X=m.childNodes[17],Z=X.parentNode;e.appendChild(o),C(()=>{let e=f(L,()=>({title:`# Text Rotate`,description:`Rotates through 3 words, in 10 seconds`,activeKey:t,preview:i(O,()=>({children:(e,t,r)=>w(e,r,()=>n(Object.assign(e=>{let t=x();return t.appendChild(ee().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),code:z}));y(()=>u(e,S,v))}),C(()=>{let e=f(L,()=>({title:`# Using items array`,description:`Pass an array of items and let TextRotate render the inner structure for you`,activeKey:r,preview:i(O,()=>({className:`max-md:text-3xl text-7xl font-title`,innerClassName:`justify-items-center`,items:[{text:`DESIGN`},{text:`DEVELOP`},{text:`DEPLOY`},{text:`SCALE`},{text:`MAINTAIN`},{text:`REPEAT`}]})),code:B}));y(()=>u(e,E,T))}),C(()=>{let e=f(L,()=>({title:`# Rotating 6 words`,description:`Big font size, horizontally centered`,activeKey:s,preview:i(O,()=>({className:`max-md:text-3xl text-7xl font-title`,children:(e,t,r)=>w(e,r,()=>n(Object.assign(e=>{let t=x();return t.appendChild(te().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),code:V}));y(()=>u(e,k,D))}),C(()=>{let e=f(L,()=>({title:`# Rotating words in a sentence`,description:`Different colors for each word`,activeKey:c,preview:n(Object.assign(e=>{let t=A().content.cloneNode(!0).firstChild,r=t.childNodes[1],i=r.parentNode,o=b(i);return a(o,O,()=>({children:(e,t,r)=>w(e,r,()=>n(Object.assign(e=>{let t=x(),n=_(`span`,t);h(t,n);let r=_(`span`,n);h(n,r),r.className=`bg-teal-400 text-teal-800 px-2`,h(r,g(`Designers`));let i=_(`span`,n);h(n,i),i.className=`bg-red-400 text-red-800 px-2`,h(i,g(`Developers`));let a=_(`span`,n);return h(n,a),a.className=`bg-blue-400 text-blue-800 px-2`,h(a,g(`Managers`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),code:H}));y(()=>u(e,F,P))}),C(()=>{let e=f(L,()=>({title:`# Rotating 3 words with custom duration`,description:`Big font size, horizontally centered, 6 seconds duration instead of 10 seconds`,activeKey:l,preview:i(O,()=>({className:`max-md:text-3xl text-7xl font-title duration-6000`,children:(e,t,r)=>w(e,r,()=>n(Object.assign(e=>{let t=x();return t.appendChild(j().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),code:U}));y(()=>u(e,ae,G))}),C(()=>{let e=f(L,()=>({title:`# Custom line height`,description:`In case you have a tall font or need more vertical spacing between lines`,activeKey:d,preview:i(O,()=>({className:`max-md:text-3xl text-7xl font-title leading-[2]`,children:(e,t,r)=>w(e,r,()=>n(Object.assign(e=>{let t=x();return t.appendChild(M().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),code:W}));y(()=>u(e,oe,K))}),C(()=>{let e=f(L,()=>({title:`# Semantic items`,description:`Items inherit Typography.Text / Typography.Link semantics, so tone and emphasis stay consistent`,activeKey:p,preview:n(Object.assign(e=>{let t=N().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=b(r);return a(i,O,()=>({className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),code:ne}));y(()=>u(e,se,q))});let Q=b(Y);a(Q,R,()=>({rows:re})),Y.insertBefore(Q,J);let $=b(Z);return a($,R,()=>({rows:ie})),Z.insertBefore($,X),e});return f(k,()=>({children:e}))})(),e=>T(()=>{})))};export{G as default};