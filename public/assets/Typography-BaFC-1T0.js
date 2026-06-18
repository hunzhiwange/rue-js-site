import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,qt as u,s as d,st as f,t as p}from"./vapor-runtime-iQZthBPQ.js";import{a as m,n as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as g,i as _}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as v}from"./Code-CZqShVUj.js";import{t as y}from"./tabs-BBuGEPV7.js";import{n as b,t as x}from"./text-rotate--C1iRau1.js";import{r as S}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var C=e=>l(r=>{let c=i(`div`,r);f(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`h2`,c);n(c,u),f(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=a(`rue:slot:anchor`);n(u,m),o(()=>{let n=e.title;t(()=>d(n,u,m))});let h=i(`p`,c);n(c,h),f(h,`text-sm mt-3 mb-3`);let g=a(`rue:slot:anchor`);n(h,g),o(()=>{let n=e.description;t(()=>d(n,h,g))});let _=a(`rue:component:anchor`);n(c,_),o(()=>{let n=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.activeKey.value,onChange:t=>e.activeKey.value=t,className:`mb-3`});t(()=>d(n,c,_))});let b=a(`rue:slot:anchor`);return n(c,b),o(()=>{let r=e.activeKey.value===`preview`?e.preview:l(()=>{let r=s(),i=a(`rue:component:anchor`);return n(r,i),o(()=>{let n=p(v,{className:`mt-2`,lang:`tsx`,code:e.code});t(()=>d(n,r,i))}),r});t(()=>d(r,c,b))}),c}),w=r=>l(u=>{let p=i(`div`,u);f(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,p);n(p,m),f(m,`table table-zebra`);let g=i(`thead`,m);n(m,g);let _=i(`tr`,g);n(g,_);let v=i(`th`,_);n(_,v),n(v,e(`属性`));let y=i(`th`,_);n(_,y),n(y,e(`说明`));let b=i(`th`,_);n(_,b),n(b,e(`类型`));let x=i(`th`,_);n(_,x),n(x,e(`默认值`));let S=i(`tbody`,m);n(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=h({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,u,f,p)=>{d(l(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let f=i(`code`,u);n(u,f);let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let n=e.prop;t(()=>d(n,f,p))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>d(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>d(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>d(n,b,x))}),r}),r,u)}})}),p}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:c,tabHierarchy:h,tabLevels:v,tabRotate:y}=m(`useSetup:0:0`,()=>u(()=>({tabInline:m(`ref:1:0`,()=>r(`preview`)),tabHierarchy:m(`ref:1:1`,()=>r(`preview`)),tabLevels:m(`ref:1:2`,()=>r(`preview`)),tabRotate:m(`ref:1:3`,()=>r(`preview`))})));return l(r=>{let u=s(),m=a(`rue:component:anchor`);return n(u,m),d(p(S,{children:l(()=>{let r=s(),l=i(`div`,r);n(r,l),f(l,`max-w-none prose prose-sm md:prose-base`);let u=i(`h1`,l);n(l,u),n(u,e(`Typography 排版`));let m=i(`p`,l);n(l,m),f(m,`text-sm mt-3 mb-3`),n(m,e(`Typography 采用常见业务排版组件的组织方式，提供`));let S=i(`code`,m);n(m,S),n(S,e(`Text`)),n(m,e(`、`));let E=i(`code`,m);n(m,E),n(E,e(`Link`)),n(m,e(`、`));let D=i(`code`,m);n(m,D),n(D,e(`Title`)),n(m,e(`、`));let O=i(`code`,m);n(m,O),n(O,e(`Paragraph`)),n(m,e(`这组复合 API。`));let k=i(`p`,l);n(l,k),f(k,`text-sm mb-3 opacity-80`),n(k,e(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=a(`rue:component:anchor`);n(l,A),o(()=>{let e=p(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:c,preview:g(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[_(b.Text,{children:`Rue`}),_(b.Text,{type:`secondary`,children:`Secondary`}),_(b.Text,{type:`success`,strong:!0,children:`Success`}),_(b.Text,{type:`warning`,mark:!0,children:`Highlight`}),_(b.Text,{code:!0,children:`pnpm dev`}),_(b.Text,{keyboard:!0,children:`Esc`}),_(b.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});t(()=>d(e,l,A))});let j=a(`rue:component:anchor`);n(l,j),o(()=>{let e=p(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:g(b,{className:`space-y-4`,children:[_(b.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),g(b.Paragraph,{children:[`Use `,_(b.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,_(b.Text,{code:!0,children:`code`}),` for commands, and`,` `,_(b.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),_(b.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});t(()=>d(e,l,j))});let M=a(`rue:component:anchor`);n(l,M),o(()=>{let e=p(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:v,preview:g(`div`,{className:`space-y-3`,children:[_(b.Title,{level:1,children:`Heading 1`}),_(b.Title,{level:2,children:`Heading 2`}),_(b.Title,{level:3,children:`Heading 3`}),_(b.Title,{level:4,children:`Heading 4`}),_(b.Title,{level:5,children:`Heading 5`})]}),code:te});t(()=>d(e,l,M))});let N=a(`rue:component:anchor`);n(l,N),o(()=>{let e=p(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:y,preview:g(b,{className:`space-y-4`,children:[g(b.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,_(x,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),_(b.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),_(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});t(()=>d(e,l,N))});let P=i(`h2`,l);n(l,P),n(P,e(`API`));let F=i(`p`,l);n(l,F),f(F,`text-sm opacity-80`),n(F,e(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=i(`div`,l);n(l,I),f(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=i(`div`,I);n(I,L),f(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=i(`div`,L);n(L,R),f(R,`text-sm font-medium`),n(R,e(`Typography Root`));let z=i(`p`,L);n(L,z),f(z,`mt-2 text-sm opacity-70`),n(z,e(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=i(`div`,I);n(I,B),f(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=i(`div`,B);n(B,V),f(V,`text-sm font-medium`),n(V,e(`Text / Link`));let H=i(`p`,B);n(B,H),f(H,`mt-2 text-sm opacity-70`),n(H,e(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=i(`div`,I);n(I,U),f(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=i(`div`,U);n(U,W),f(W,`text-sm font-medium`),n(W,e(`Title / Paragraph`));let G=i(`p`,U);n(U,G),f(G,`mt-2 text-sm opacity-70`),n(G,e(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=i(`h3`,l);n(l,K),f(K,`mt-8`),n(K,e(`Typography`));let q=i(`p`,l);n(l,q),f(q,`text-sm opacity-70`),n(q,e(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=a(`rue:component:anchor`);n(l,J),o(()=>{let e=p(w,{rows:re});t(()=>d(e,l,J))});let Y=i(`h3`,l);n(l,Y),n(Y,e(`Typography.Text / Typography.Link`));let X=i(`p`,l);n(l,X),f(X,`text-sm opacity-70`),n(X,e(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=a(`rue:component:anchor`);n(l,Z),o(()=>{let e=p(w,{rows:ie});t(()=>d(e,l,Z))});let Q=i(`h3`,l);n(l,Q),n(Q,e(`Typography.Title / Typography.Paragraph`));let $=i(`p`,l);n(l,$),f($,`text-sm opacity-70`),n($,e(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=a(`rue:component:anchor`);return n(l,oe),o(()=>{let e=p(w,{rows:ae});t(()=>d(e,l,oe))}),r})}),u,m),u})};export{E as default};