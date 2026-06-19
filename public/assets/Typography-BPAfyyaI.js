import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,l as c,nt as l,o as u,t as d,tt as f,ut as p}from"./vapor-runtime-CKrmRMZX.js";import{a as m,n as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as g,i as _}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as v}from"./Code-D5UqTwV6.js";import{t as y}from"./tabs-DRfs918f.js";import{n as b,t as x}from"./text-rotate-Ce6XmkFh.js";import{r as S}from"./SidebarPlaygroundDesign-CWudvLqE.js";var C=n=>c(i=>{let o=f(`div`,i);p(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=f(`h2`,o);a(o,l),p(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=e(`rue:slot:anchor`);a(l,m),t(()=>{let e=n.title;r(()=>u(e,l,m))});let h=f(`p`,o);a(o,h),p(h,`text-sm mt-3 mb-3`);let g=e(`rue:slot:anchor`);a(h,g),t(()=>{let e=n.description;r(()=>u(e,h,g))});let _=e(`rue:component:anchor`);a(o,_),t(()=>{let e=d(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.activeKey.value,onChange:e=>n.activeKey.value=e,className:`mb-3`});r(()=>u(e,o,_))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.activeKey.value===`preview`?n.preview:c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=d(v,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>u(e,i,o))}),i});r(()=>u(i,o,b))}),o}),w=n=>c(i=>{let d=f(`div`,i);p(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=f(`table`,d);a(d,m),p(m,`table table-zebra`);let g=f(`thead`,m);a(m,g);let _=f(`tr`,g);a(g,_);let v=f(`th`,_);a(_,v),a(v,l(`属性`));let y=f(`th`,_);a(_,y),a(y,l(`说明`));let b=f(`th`,_);a(_,b),a(b,l(`类型`));let x=f(`th`,_);a(_,x),a(x,l(`默认值`));let S=f(`tbody`,m);a(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=h({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,l,d,p)=>{u(c(()=>{let i=s(),c=f(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=f(`td`,c);a(c,l);let d=f(`code`,l);a(l,d);let p=e(`rue:slot:anchor`);a(d,p),t(()=>{let e=n.prop;r(()=>u(e,d,p))});let m=f(`td`,c);a(c,m);let h=e(`rue:slot:anchor`);a(m,h),t(()=>{let e=n.description;r(()=>u(e,m,h))});let g=f(`td`,c);a(c,g);let _=f(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>u(e,_,v))});let y=f(`td`,c);a(c,y);let b=f(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>u(e,b,x))}),i}),i,l)}})}),d}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:o,tabHierarchy:h,tabLevels:v,tabRotate:y}=m(`useSetup:0:0`,()=>i(()=>({tabInline:m(`ref:1:0`,()=>n(`preview`)),tabHierarchy:m(`ref:1:1`,()=>n(`preview`)),tabLevels:m(`ref:1:2`,()=>n(`preview`)),tabRotate:m(`ref:1:3`,()=>n(`preview`))})));return c(n=>{let i=s(),m=e(`rue:component:anchor`);return a(i,m),u(d(S,{children:c(()=>{let n=s(),i=f(`div`,n);a(n,i),p(i,`max-w-none prose prose-sm md:prose-base`);let c=f(`h1`,i);a(i,c),a(c,l(`Typography 排版`));let m=f(`p`,i);a(i,m),p(m,`text-sm mt-3 mb-3`),a(m,l(`Typography 采用常见业务排版组件的组织方式，提供`));let S=f(`code`,m);a(m,S),a(S,l(`Text`)),a(m,l(`、`));let E=f(`code`,m);a(m,E),a(E,l(`Link`)),a(m,l(`、`));let D=f(`code`,m);a(m,D),a(D,l(`Title`)),a(m,l(`、`));let O=f(`code`,m);a(m,O),a(O,l(`Paragraph`)),a(m,l(`这组复合 API。`));let k=f(`p`,i);a(i,k),p(k,`text-sm mb-3 opacity-80`),a(k,l(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=e(`rue:component:anchor`);a(i,A),t(()=>{let e=d(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:o,preview:g(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[_(b.Text,{children:`Rue`}),_(b.Text,{type:`secondary`,children:`Secondary`}),_(b.Text,{type:`success`,strong:!0,children:`Success`}),_(b.Text,{type:`warning`,mark:!0,children:`Highlight`}),_(b.Text,{code:!0,children:`pnpm dev`}),_(b.Text,{keyboard:!0,children:`Esc`}),_(b.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});r(()=>u(e,i,A))});let j=e(`rue:component:anchor`);a(i,j),t(()=>{let e=d(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:g(b,{className:`space-y-4`,children:[_(b.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),g(b.Paragraph,{children:[`Use `,_(b.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,_(b.Text,{code:!0,children:`code`}),` for commands, and`,` `,_(b.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),_(b.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});r(()=>u(e,i,j))});let M=e(`rue:component:anchor`);a(i,M),t(()=>{let e=d(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:v,preview:g(`div`,{className:`space-y-3`,children:[_(b.Title,{level:1,children:`Heading 1`}),_(b.Title,{level:2,children:`Heading 2`}),_(b.Title,{level:3,children:`Heading 3`}),_(b.Title,{level:4,children:`Heading 4`}),_(b.Title,{level:5,children:`Heading 5`})]}),code:te});r(()=>u(e,i,M))});let N=e(`rue:component:anchor`);a(i,N),t(()=>{let e=d(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:y,preview:g(b,{className:`space-y-4`,children:[g(b.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,_(x,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),_(b.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),_(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});r(()=>u(e,i,N))});let P=f(`h2`,i);a(i,P),a(P,l(`API`));let F=f(`p`,i);a(i,F),p(F,`text-sm opacity-80`),a(F,l(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=f(`div`,i);a(i,I),p(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=f(`div`,I);a(I,L),p(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=f(`div`,L);a(L,R),p(R,`text-sm font-medium`),a(R,l(`Typography Root`));let z=f(`p`,L);a(L,z),p(z,`mt-2 text-sm opacity-70`),a(z,l(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=f(`div`,I);a(I,B),p(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=f(`div`,B);a(B,V),p(V,`text-sm font-medium`),a(V,l(`Text / Link`));let H=f(`p`,B);a(B,H),p(H,`mt-2 text-sm opacity-70`),a(H,l(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=f(`div`,I);a(I,U),p(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=f(`div`,U);a(U,W),p(W,`text-sm font-medium`),a(W,l(`Title / Paragraph`));let G=f(`p`,U);a(U,G),p(G,`mt-2 text-sm opacity-70`),a(G,l(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=f(`h3`,i);a(i,K),p(K,`mt-8`),a(K,l(`Typography`));let q=f(`p`,i);a(i,q),p(q,`text-sm opacity-70`),a(q,l(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=e(`rue:component:anchor`);a(i,J),t(()=>{let e=d(w,{rows:re});r(()=>u(e,i,J))});let Y=f(`h3`,i);a(i,Y),a(Y,l(`Typography.Text / Typography.Link`));let X=f(`p`,i);a(i,X),p(X,`text-sm opacity-70`),a(X,l(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=e(`rue:component:anchor`);a(i,Z),t(()=>{let e=d(w,{rows:ie});r(()=>u(e,i,Z))});let Q=f(`h3`,i);a(i,Q),a(Q,l(`Typography.Title / Typography.Paragraph`));let $=f(`p`,i);a(i,$),p($,`text-sm opacity-70`),a($,l(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=e(`rue:component:anchor`);return a(i,oe),t(()=>{let e=d(w,{rows:ae});r(()=>u(e,i,oe))}),n})}),i,m),i})};export{E as default};