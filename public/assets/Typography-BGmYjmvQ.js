import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{a as m,n as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{n as _,t as v}from"./src-BLzF0BqW.js";import{n as y}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as b}from"./tabs-BOxm6iIN.js";import{n as x,t as S}from"./text-rotate-BEWWPlHU.js";var C=r=>l(s=>{let c=o(`div`,s);e(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=o(`h2`,c);t(c,f),e(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let e=r.title;p(()=>u(e,f,m))});let h=o(`p`,c);t(c,h),e(h,`text-sm mt-3 mb-3`);let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=r.description;p(()=>u(e,h,_))});let v=i(`rue:component:anchor`);t(c,v),n(()=>{let e=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.activeKey.value,onChange:e=>r.activeKey.value=e,className:`mb-3`});p(()=>u(e,c,v))});let y=i(`rue:slot:anchor`);return t(c,y),n(()=>{let e=r.activeKey.value===`preview`?r.preview:l(()=>{let e=a(),o=i(`rue:component:anchor`);return t(e,o),n(()=>{let t=d(g,{className:`mt-2`,lang:`tsx`,code:r.code});p(()=>u(t,e,o))}),e});p(()=>u(e,c,y))}),c}),w=c=>l(d=>{let f=o(`div`,d);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);t(f,m),e(m,`table table-zebra`);let g=o(`thead`,m);t(m,g);let _=o(`tr`,g);t(g,_);let v=o(`th`,_);t(_,v),t(v,r(`属性`));let y=o(`th`,_);t(_,y),t(y,r(`说明`));let b=o(`th`,_);t(_,b),t(b,r(`类型`));let x=o(`th`,_);t(_,x),t(x,r(`默认值`));let S=o(`tbody`,m);t(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=h({items:c.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),f}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:s,tabHierarchy:h,tabLevels:g,tabRotate:b}=m(`useSetup:0:0`,()=>f(()=>({tabInline:m(`ref:1:0`,()=>c(`preview`)),tabHierarchy:m(`ref:1:1`,()=>c(`preview`)),tabLevels:m(`ref:1:2`,()=>c(`preview`)),tabRotate:m(`ref:1:3`,()=>c(`preview`))})));return l(c=>{let f=a(),m=i(`rue:component:anchor`);return t(f,m),u(d(y,{children:l(()=>{let c=a(),l=o(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,l);t(l,f),t(f,r(`Typography 排版`));let m=o(`p`,l);t(l,m),e(m,`text-sm mt-3 mb-3`),t(m,r(`Typography 采用常见业务排版组件的组织方式，提供`));let y=o(`code`,m);t(m,y),t(y,r(`Text`)),t(m,r(`、`));let E=o(`code`,m);t(m,E),t(E,r(`Link`)),t(m,r(`、`));let D=o(`code`,m);t(m,D),t(D,r(`Title`)),t(m,r(`、`));let O=o(`code`,m);t(m,O),t(O,r(`Paragraph`)),t(m,r(`这组复合 API。`));let k=o(`p`,l);t(l,k),e(k,`text-sm mb-3 opacity-80`),t(k,r(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=i(`rue:component:anchor`);t(l,A),n(()=>{let e=d(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:s,preview:_(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[v(x.Text,{children:`Rue`}),v(x.Text,{type:`secondary`,children:`Secondary`}),v(x.Text,{type:`success`,strong:!0,children:`Success`}),v(x.Text,{type:`warning`,mark:!0,children:`Highlight`}),v(x.Text,{code:!0,children:`pnpm dev`}),v(x.Text,{keyboard:!0,children:`Esc`}),v(x.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});p(()=>u(e,l,A))});let j=i(`rue:component:anchor`);t(l,j),n(()=>{let e=d(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:_(x,{className:`space-y-4`,children:[v(x.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),_(x.Paragraph,{children:[`Use `,v(x.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,v(x.Text,{code:!0,children:`code`}),` for commands, and`,` `,v(x.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),v(x.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});p(()=>u(e,l,j))});let M=i(`rue:component:anchor`);t(l,M),n(()=>{let e=d(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:g,preview:_(`div`,{className:`space-y-3`,children:[v(x.Title,{level:1,children:`Heading 1`}),v(x.Title,{level:2,children:`Heading 2`}),v(x.Title,{level:3,children:`Heading 3`}),v(x.Title,{level:4,children:`Heading 4`}),v(x.Title,{level:5,children:`Heading 5`})]}),code:te});p(()=>u(e,l,M))});let N=i(`rue:component:anchor`);t(l,N),n(()=>{let e=d(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:b,preview:_(x,{className:`space-y-4`,children:[_(x.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,v(S,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),v(x.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),v(S,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});p(()=>u(e,l,N))});let P=o(`h2`,l);t(l,P),t(P,r(`API`));let F=o(`p`,l);t(l,F),e(F,`text-sm opacity-80`),t(F,r(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=o(`div`,l);t(l,I),e(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=o(`div`,I);t(I,L),e(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=o(`div`,L);t(L,R),e(R,`text-sm font-medium`),t(R,r(`Typography Root`));let z=o(`p`,L);t(L,z),e(z,`mt-2 text-sm opacity-70`),t(z,r(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=o(`div`,I);t(I,B),e(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=o(`div`,B);t(B,V),e(V,`text-sm font-medium`),t(V,r(`Text / Link`));let H=o(`p`,B);t(B,H),e(H,`mt-2 text-sm opacity-70`),t(H,r(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=o(`div`,I);t(I,U),e(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=o(`div`,U);t(U,W),e(W,`text-sm font-medium`),t(W,r(`Title / Paragraph`));let G=o(`p`,U);t(U,G),e(G,`mt-2 text-sm opacity-70`),t(G,r(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=o(`h3`,l);t(l,K),e(K,`mt-8`),t(K,r(`Typography`));let q=o(`p`,l);t(l,q),e(q,`text-sm opacity-70`),t(q,r(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=i(`rue:component:anchor`);t(l,J),n(()=>{let e=d(w,{rows:re});p(()=>u(e,l,J))});let Y=o(`h3`,l);t(l,Y),t(Y,r(`Typography.Text / Typography.Link`));let X=o(`p`,l);t(l,X),e(X,`text-sm opacity-70`),t(X,r(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=i(`rue:component:anchor`);t(l,Z),n(()=>{let e=d(w,{rows:ie});p(()=>u(e,l,Z))});let Q=o(`h3`,l);t(l,Q),t(Q,r(`Typography.Title / Typography.Paragraph`));let $=o(`p`,l);t(l,$),e($,`text-sm opacity-70`),t($,r(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=i(`rue:component:anchor`);return t(l,oe),n(()=>{let e=d(w,{rows:ae});p(()=>u(e,l,oe))}),c})}),f,m),f})};export{E as default};