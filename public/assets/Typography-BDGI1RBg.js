import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,t as d,tn as f,tt as p}from"./vapor-runtime-x7F5M-49.js";import{a as m,n as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as g,o as _}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as v}from"./Code-C5NjdoiC.js";import{t as y}from"./tabs-C4UF43sZ.js";import{n as b,t as x}from"./text-rotate-CzO1l1Ce.js";import{r as S}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var C=n=>a(r=>{let i=u(`div`,r);l(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=u(`h2`,i);e(i,c),l(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=p(`rue:slot:anchor`);e(c,m),t(()=>{let e=n.title;f(()=>s(e,c,m))});let h=u(`p`,i);e(i,h),l(h,`text-sm mt-3 mb-3`);let g=p(`rue:slot:anchor`);e(h,g),t(()=>{let e=n.description;f(()=>s(e,h,g))});let _=p(`rue:component:anchor`);e(i,_),t(()=>{let e=d(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.activeKey.value,onChange:e=>n.activeKey.value=e,className:`mb-3`});f(()=>s(e,i,_))});let b=p(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.activeKey.value===`preview`?n.preview:a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(v,{className:`mt-2`,lang:`tsx`,code:n.code});f(()=>s(e,r,i))}),r});f(()=>s(r,i,b))}),i}),w=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=u(`table`,d);e(d,m),l(m,`table table-zebra`);let g=u(`thead`,m);e(m,g);let _=u(`tr`,g);e(g,_);let v=u(`th`,_);e(_,v),e(v,i(`属性`));let y=u(`th`,_);e(_,y),e(y,i(`说明`));let b=u(`th`,_);e(_,b),e(b,i(`类型`));let x=u(`th`,_);e(_,x),e(x,i(`默认值`));let S=u(`tbody`,m);e(m,S);let C=p(`rue:list:start`),w=p(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=h({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=p(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;f(()=>s(e,l,d))});let m=u(`td`,a);e(a,m);let h=p(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.description;f(()=>s(e,m,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;f(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=p(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;f(()=>s(e,b,x))}),i}),i,c)}})}),d}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
  <Typography.Text>Rue</Typography.Text>
  <Typography.Text type="secondary">Secondary</Typography.Text>
  <Typography.Text type="success" strong>
    Success
  </Typography.Text>
  <Typography.Text type="warning" mark>
    Highlight
  </Typography.Text>
  <Typography.Text code>pnpm dev</Typography.Text>
  <Typography.Text keyboard>Esc</Typography.Text>
  <Typography.Link href="https://rue.dev" target="_blank" type="danger">
    Danger Link
  </Typography.Link>
</div>`,ee=`<Typography className="space-y-4">
  <Typography.Title level={2} className="font-title">
    Release notes that stay readable
  </Typography.Title>

  <Typography.Paragraph>
    Use <Typography.Text strong>Text</Typography.Text> for emphasis,{' '}
    <Typography.Text code>code</Typography.Text> for commands, and{' '}
    <Typography.Link href="https://rue.dev" target="_blank">
      Typography.Link
    </Typography.Link>{' '}
    for inline actions.
  </Typography.Paragraph>

  <Typography.Paragraph type="secondary">
    Paragraph keeps the reading rhythm while letting inline semantics stay expressive.
  </Typography.Paragraph>
</Typography>`,te=`<div className="space-y-3">
  <Typography.Title level={1}>Heading 1</Typography.Title>
  <Typography.Title level={2}>Heading 2</Typography.Title>
  <Typography.Title level={3}>Heading 3</Typography.Title>
  <Typography.Title level={4}>Heading 4</Typography.Title>
  <Typography.Title level={5}>Heading 5</Typography.Title>
</div>`,ne=`<Typography className="space-y-4">
  <Typography.Title level={3} className="font-title">
    Ship better UI for{' '}
    <TextRotate
      className="text-primary"
      innerClassName="justify-items-start"
      items={[
        { text: 'design systems', strong: true },
        { text: 'docs sites', type: 'success', strong: true },
        { text: 'team workflows', type: 'warning', mark: true },
      ]}
    />
  </Typography.Title>

  <Typography.Paragraph>
    TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.
  </Typography.Paragraph>

  <TextRotate
    className="text-2xl font-title"
    innerClassName="justify-items-start"
    items={[
      { text: 'Readable', strong: true },
      { text: 'Reviewable', type: 'secondary', underline: true },
      { text: 'Deployable', href: 'https://rue.dev', type: 'danger' },
    ]}
  />
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:r,tabHierarchy:h,tabLevels:v,tabRotate:y}=m(`useSetup:0:0`,()=>c(()=>({tabInline:m(`ref:1:0`,()=>n(`preview`)),tabHierarchy:m(`ref:1:1`,()=>n(`preview`)),tabLevels:m(`ref:1:2`,()=>n(`preview`)),tabRotate:m(`ref:1:3`,()=>n(`preview`))})));return a(n=>{let c=o(),m=p(`rue:component:anchor`);return e(c,m),s(d(S,{children:a(()=>{let n=o(),a=u(`div`,n);e(n,a),l(a,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,a);e(a,c),e(c,i(`Typography 排版`));let m=u(`p`,a);e(a,m),l(m,`text-sm mt-3 mb-3`),e(m,i(`Typography 采用常见业务排版组件的组织方式，提供`));let S=u(`code`,m);e(m,S),e(S,i(`Text`)),e(m,i(`、`));let E=u(`code`,m);e(m,E),e(E,i(`Link`)),e(m,i(`、`));let D=u(`code`,m);e(m,D),e(D,i(`Title`)),e(m,i(`、`));let O=u(`code`,m);e(m,O),e(O,i(`Paragraph`)),e(m,i(`这组复合 API。`));let k=u(`p`,a);e(a,k),l(k,`text-sm mb-3 opacity-80`),e(k,i(`它使用 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=p(`rue:component:anchor`);e(a,A),t(()=>{let e=d(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:r,preview:_(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[g(b.Text,{children:`Rue`}),g(b.Text,{type:`secondary`,children:`Secondary`}),g(b.Text,{type:`success`,strong:!0,children:`Success`}),g(b.Text,{type:`warning`,mark:!0,children:`Highlight`}),g(b.Text,{code:!0,children:`pnpm dev`}),g(b.Text,{keyboard:!0,children:`Esc`}),g(b.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});f(()=>s(e,a,A))});let j=p(`rue:component:anchor`);e(a,j),t(()=>{let e=d(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:_(b,{className:`space-y-4`,children:[g(b.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),_(b.Paragraph,{children:[`Use `,g(b.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,g(b.Text,{code:!0,children:`code`}),` for commands, and`,` `,g(b.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),g(b.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});f(()=>s(e,a,j))});let M=p(`rue:component:anchor`);e(a,M),t(()=>{let e=d(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:v,preview:_(`div`,{className:`space-y-3`,children:[g(b.Title,{level:1,children:`Heading 1`}),g(b.Title,{level:2,children:`Heading 2`}),g(b.Title,{level:3,children:`Heading 3`}),g(b.Title,{level:4,children:`Heading 4`}),g(b.Title,{level:5,children:`Heading 5`})]}),code:te});f(()=>s(e,a,M))});let N=p(`rue:component:anchor`);e(a,N),t(()=>{let e=d(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:y,preview:_(b,{className:`space-y-4`,children:[_(b.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,g(x,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),g(b.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),g(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});f(()=>s(e,a,N))});let P=u(`h2`,a);e(a,P),e(P,i(`API`));let F=u(`p`,a);e(a,F),l(F,`text-sm opacity-80`),e(F,i(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=u(`div`,a);e(a,I),l(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=u(`div`,I);e(I,L),l(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=u(`div`,L);e(L,R),l(R,`text-sm font-medium`),e(R,i(`Typography Root`));let z=u(`p`,L);e(L,z),l(z,`mt-2 text-sm opacity-70`),e(z,i(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=u(`div`,I);e(I,B),l(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=u(`div`,B);e(B,V),l(V,`text-sm font-medium`),e(V,i(`Text / Link`));let H=u(`p`,B);e(B,H),l(H,`mt-2 text-sm opacity-70`),e(H,i(`这组组件偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=u(`div`,I);e(I,U),l(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=u(`div`,U);e(U,W),l(W,`text-sm font-medium`),e(W,i(`Title / Paragraph`));let G=u(`p`,U);e(U,G),l(G,`mt-2 text-sm opacity-70`),e(G,i(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=u(`h3`,a);e(a,K),l(K,`mt-8`),e(K,i(`Typography`));let q=u(`p`,a);e(a,q),l(q,`text-sm opacity-70`),e(q,i(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=p(`rue:component:anchor`);e(a,J),t(()=>{let e=d(w,{rows:re});f(()=>s(e,a,J))});let Y=u(`h3`,a);e(a,Y),e(Y,i(`Typography.Text / Typography.Link`));let X=u(`p`,a);e(a,X),l(X,`text-sm opacity-70`),e(X,i(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=p(`rue:component:anchor`);e(a,Z),t(()=>{let e=d(w,{rows:ie});f(()=>s(e,a,Z))});let Q=u(`h3`,a);e(a,Q),e(Q,i(`Typography.Title / Typography.Paragraph`));let $=u(`p`,a);e(a,$),l($,`text-sm opacity-70`),e($,i(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=p(`rue:component:anchor`);return e(a,oe),t(()=>{let e=d(w,{rows:ae});f(()=>s(e,a,oe))}),n})}),c,m),c})};export{E as default};