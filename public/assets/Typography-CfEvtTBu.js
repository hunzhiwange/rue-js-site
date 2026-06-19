import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,l as s,lt as c,o as l,st as u,t as d,tt as f,zt as p}from"./vapor-runtime-CXIalONM.js";import{a as m,n as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as g,i as _}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as v}from"./Code-BIscIyEp.js";import{t as y}from"./tabs-CZWMQq5i.js";import{n as b,t as x}from"./text-rotate-DpRbe4uw.js";import{r as S}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var C=a=>s(u=>{let f=o(`div`,u);c(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let p=o(`h2`,f);i(f,p),c(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=t(`rue:slot:anchor`);i(p,m),n(()=>{let e=a.title;r(()=>l(e,p,m))});let h=o(`p`,f);i(f,h),c(h,`text-sm mt-3 mb-3`);let g=t(`rue:slot:anchor`);i(h,g),n(()=>{let e=a.description;r(()=>l(e,h,g))});let _=t(`rue:component:anchor`);i(f,_),n(()=>{let e=d(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.activeKey.value,onChange:e=>a.activeKey.value=e,className:`mb-3`});r(()=>l(e,f,_))});let b=t(`rue:slot:anchor`);return i(f,b),n(()=>{let o=a.activeKey.value===`preview`?a.preview:s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=d(v,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>l(e,o,s))}),o});r(()=>l(o,f,b))}),f}),w=a=>s(d=>{let p=o(`div`,d);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,p);i(p,m),c(m,`table table-zebra`);let g=o(`thead`,m);i(m,g);let _=o(`tr`,g);i(g,_);let v=o(`th`,_);i(_,v),i(v,f(`属性`));let y=o(`th`,_);i(_,y),i(y,f(`说明`));let b=o(`th`,_);i(_,b),i(b,f(`类型`));let x=o(`th`,_);i(_,x),i(x,f(`默认值`));let S=o(`tbody`,m);i(m,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=h({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,c,d,f,p)=>{l(s(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{u(c,`key`,String(a.prop))});let d=o(`td`,c);i(c,d);let f=o(`code`,d);i(d,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.prop;r(()=>l(e,f,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>l(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>l(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>l(e,b,x))}),s}),c,d)}})}),p}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:u,tabHierarchy:h,tabLevels:v,tabRotate:y}=m(`useSetup:0:0`,()=>a(()=>({tabInline:m(`ref:1:0`,()=>p(`preview`)),tabHierarchy:m(`ref:1:1`,()=>p(`preview`)),tabLevels:m(`ref:1:2`,()=>p(`preview`)),tabRotate:m(`ref:1:3`,()=>p(`preview`))})));return s(a=>{let p=e(),m=t(`rue:component:anchor`);return i(p,m),l(d(S,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`max-w-none prose prose-sm md:prose-base`);let p=o(`h1`,s);i(s,p),i(p,f(`Typography 排版`));let m=o(`p`,s);i(s,m),c(m,`text-sm mt-3 mb-3`),i(m,f(`Typography 采用常见业务排版组件的组织方式，提供`));let S=o(`code`,m);i(m,S),i(S,f(`Text`)),i(m,f(`、`));let E=o(`code`,m);i(m,E),i(E,f(`Link`)),i(m,f(`、`));let D=o(`code`,m);i(m,D),i(D,f(`Title`)),i(m,f(`、`));let O=o(`code`,m);i(m,O),i(O,f(`Paragraph`)),i(m,f(`这组复合 API。`));let k=o(`p`,s);i(s,k),c(k,`text-sm mb-3 opacity-80`),i(k,f(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=t(`rue:component:anchor`);i(s,A),n(()=>{let e=d(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:u,preview:g(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[_(b.Text,{children:`Rue`}),_(b.Text,{type:`secondary`,children:`Secondary`}),_(b.Text,{type:`success`,strong:!0,children:`Success`}),_(b.Text,{type:`warning`,mark:!0,children:`Highlight`}),_(b.Text,{code:!0,children:`pnpm dev`}),_(b.Text,{keyboard:!0,children:`Esc`}),_(b.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});r(()=>l(e,s,A))});let j=t(`rue:component:anchor`);i(s,j),n(()=>{let e=d(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:g(b,{className:`space-y-4`,children:[_(b.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),g(b.Paragraph,{children:[`Use `,_(b.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,_(b.Text,{code:!0,children:`code`}),` for commands, and`,` `,_(b.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),_(b.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});r(()=>l(e,s,j))});let M=t(`rue:component:anchor`);i(s,M),n(()=>{let e=d(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:v,preview:g(`div`,{className:`space-y-3`,children:[_(b.Title,{level:1,children:`Heading 1`}),_(b.Title,{level:2,children:`Heading 2`}),_(b.Title,{level:3,children:`Heading 3`}),_(b.Title,{level:4,children:`Heading 4`}),_(b.Title,{level:5,children:`Heading 5`})]}),code:te});r(()=>l(e,s,M))});let N=t(`rue:component:anchor`);i(s,N),n(()=>{let e=d(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:y,preview:g(b,{className:`space-y-4`,children:[g(b.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,_(x,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),_(b.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),_(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});r(()=>l(e,s,N))});let P=o(`h2`,s);i(s,P),i(P,f(`API`));let F=o(`p`,s);i(s,F),c(F,`text-sm opacity-80`),i(F,f(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=o(`div`,s);i(s,I),c(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=o(`div`,I);i(I,L),c(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=o(`div`,L);i(L,R),c(R,`text-sm font-medium`),i(R,f(`Typography Root`));let z=o(`p`,L);i(L,z),c(z,`mt-2 text-sm opacity-70`),i(z,f(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=o(`div`,I);i(I,B),c(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=o(`div`,B);i(B,V),c(V,`text-sm font-medium`),i(V,f(`Text / Link`));let H=o(`p`,B);i(B,H),c(H,`mt-2 text-sm opacity-70`),i(H,f(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=o(`div`,I);i(I,U),c(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=o(`div`,U);i(U,W),c(W,`text-sm font-medium`),i(W,f(`Title / Paragraph`));let G=o(`p`,U);i(U,G),c(G,`mt-2 text-sm opacity-70`),i(G,f(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=o(`h3`,s);i(s,K),c(K,`mt-8`),i(K,f(`Typography`));let q=o(`p`,s);i(s,q),c(q,`text-sm opacity-70`),i(q,f(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=t(`rue:component:anchor`);i(s,J),n(()=>{let e=d(w,{rows:re});r(()=>l(e,s,J))});let Y=o(`h3`,s);i(s,Y),i(Y,f(`Typography.Text / Typography.Link`));let X=o(`p`,s);i(s,X),c(X,`text-sm opacity-70`),i(X,f(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=t(`rue:component:anchor`);i(s,Z),n(()=>{let e=d(w,{rows:ie});r(()=>l(e,s,Z))});let Q=o(`h3`,s);i(s,Q),i(Q,f(`Typography.Title / Typography.Paragraph`));let $=o(`p`,s);i(s,$),c($,`text-sm opacity-70`),i($,f(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=t(`rue:component:anchor`);return i(s,oe),n(()=>{let e=d(w,{rows:ae});r(()=>l(e,s,oe))}),a})}),p,m),p})};export{E as default};