import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,ot as u,qt as d,s as f,t as p}from"./vapor-runtime-aZAg0Qkw.js";import{a as m,n as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as g,i as _}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as v}from"./Code-5DOEyGxf.js";import{t as y}from"./tabs-CWmjyn0I.js";import{n as b,t as x}from"./text-rotate-Dn26xPHq.js";import{r as S}from"./SidebarPlaygroundDesign-CS11MI8e.js";var C=r=>l(c=>{let u=e(`div`,c);s(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=e(`h2`,u);a(u,d),s(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=o(`rue:slot:anchor`);a(d,m),i(()=>{let e=r.title;t(()=>f(e,d,m))});let h=e(`p`,u);a(u,h),s(h,`text-sm mt-3 mb-3`);let g=o(`rue:slot:anchor`);a(h,g),i(()=>{let e=r.description;t(()=>f(e,h,g))});let _=o(`rue:component:anchor`);a(u,_),i(()=>{let e=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.activeKey.value,onChange:e=>r.activeKey.value=e,className:`mb-3`});t(()=>f(e,u,_))});let b=o(`rue:slot:anchor`);return a(u,b),i(()=>{let e=r.activeKey.value===`preview`?r.preview:l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=p(v,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>f(n,e,s))}),e});t(()=>f(e,u,b))}),u}),w=r=>l(d=>{let p=e(`div`,d);s(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),s(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,c(`属性`));let y=e(`th`,_);a(_,y),a(y,c(`说明`));let b=e(`th`,_);a(_,b),a(b,c(`类型`));let x=e(`th`,_);a(_,x),a(x,c(`默认值`));let S=e(`tbody`,m);a(m,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=h({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,d,p)=>{f(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{u(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let d=e(`code`,l);a(l,d);let p=o(`rue:slot:anchor`);a(d,p),i(()=>{let e=r.prop;t(()=>f(e,d,p))});let m=e(`td`,c);a(c,m);let h=o(`rue:slot:anchor`);a(m,h),i(()=>{let e=r.description;t(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>f(e,b,x))}),s}),s,c)}})}),p}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:u,tabHierarchy:h,tabLevels:v,tabRotate:y}=m(`useSetup:0:0`,()=>d(()=>({tabInline:m(`ref:1:0`,()=>r(`preview`)),tabHierarchy:m(`ref:1:1`,()=>r(`preview`)),tabLevels:m(`ref:1:2`,()=>r(`preview`)),tabRotate:m(`ref:1:3`,()=>r(`preview`))})));return l(r=>{let d=n(),m=o(`rue:component:anchor`);return a(d,m),f(p(S,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,l);a(l,d),a(d,c(`Typography 排版`));let m=e(`p`,l);a(l,m),s(m,`text-sm mt-3 mb-3`),a(m,c(`Typography 采用常见业务排版组件的组织方式，提供`));let S=e(`code`,m);a(m,S),a(S,c(`Text`)),a(m,c(`、`));let E=e(`code`,m);a(m,E),a(E,c(`Link`)),a(m,c(`、`));let D=e(`code`,m);a(m,D),a(D,c(`Title`)),a(m,c(`、`));let O=e(`code`,m);a(m,O),a(O,c(`Paragraph`)),a(m,c(`这组复合 API。`));let k=e(`p`,l);a(l,k),s(k,`text-sm mb-3 opacity-80`),a(k,c(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=o(`rue:component:anchor`);a(l,A),i(()=>{let e=p(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:u,preview:g(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[_(b.Text,{children:`Rue`}),_(b.Text,{type:`secondary`,children:`Secondary`}),_(b.Text,{type:`success`,strong:!0,children:`Success`}),_(b.Text,{type:`warning`,mark:!0,children:`Highlight`}),_(b.Text,{code:!0,children:`pnpm dev`}),_(b.Text,{keyboard:!0,children:`Esc`}),_(b.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});t(()=>f(e,l,A))});let j=o(`rue:component:anchor`);a(l,j),i(()=>{let e=p(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:g(b,{className:`space-y-4`,children:[_(b.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),g(b.Paragraph,{children:[`Use `,_(b.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,_(b.Text,{code:!0,children:`code`}),` for commands, and`,` `,_(b.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),_(b.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});t(()=>f(e,l,j))});let M=o(`rue:component:anchor`);a(l,M),i(()=>{let e=p(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:v,preview:g(`div`,{className:`space-y-3`,children:[_(b.Title,{level:1,children:`Heading 1`}),_(b.Title,{level:2,children:`Heading 2`}),_(b.Title,{level:3,children:`Heading 3`}),_(b.Title,{level:4,children:`Heading 4`}),_(b.Title,{level:5,children:`Heading 5`})]}),code:te});t(()=>f(e,l,M))});let N=o(`rue:component:anchor`);a(l,N),i(()=>{let e=p(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:y,preview:g(b,{className:`space-y-4`,children:[g(b.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,_(x,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),_(b.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),_(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});t(()=>f(e,l,N))});let P=e(`h2`,l);a(l,P),a(P,c(`API`));let F=e(`p`,l);a(l,F),s(F,`text-sm opacity-80`),a(F,c(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=e(`div`,l);a(l,I),s(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=e(`div`,I);a(I,L),s(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=e(`div`,L);a(L,R),s(R,`text-sm font-medium`),a(R,c(`Typography Root`));let z=e(`p`,L);a(L,z),s(z,`mt-2 text-sm opacity-70`),a(z,c(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=e(`div`,I);a(I,B),s(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=e(`div`,B);a(B,V),s(V,`text-sm font-medium`),a(V,c(`Text / Link`));let H=e(`p`,B);a(B,H),s(H,`mt-2 text-sm opacity-70`),a(H,c(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=e(`div`,I);a(I,U),s(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=e(`div`,U);a(U,W),s(W,`text-sm font-medium`),a(W,c(`Title / Paragraph`));let G=e(`p`,U);a(U,G),s(G,`mt-2 text-sm opacity-70`),a(G,c(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=e(`h3`,l);a(l,K),s(K,`mt-8`),a(K,c(`Typography`));let q=e(`p`,l);a(l,q),s(q,`text-sm opacity-70`),a(q,c(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=o(`rue:component:anchor`);a(l,J),i(()=>{let e=p(w,{rows:re});t(()=>f(e,l,J))});let Y=e(`h3`,l);a(l,Y),a(Y,c(`Typography.Text / Typography.Link`));let X=e(`p`,l);a(l,X),s(X,`text-sm opacity-70`),a(X,c(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=o(`rue:component:anchor`);a(l,Z),i(()=>{let e=p(w,{rows:ie});t(()=>f(e,l,Z))});let Q=e(`h3`,l);a(l,Q),a(Q,c(`Typography.Title / Typography.Paragraph`));let $=e(`p`,l);a(l,$),s($,`text-sm opacity-70`),a($,c(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=o(`rue:component:anchor`);return a(l,oe),i(()=>{let e=p(w,{rows:ae});t(()=>f(e,l,oe))}),r})}),d,m),d})};export{E as default};