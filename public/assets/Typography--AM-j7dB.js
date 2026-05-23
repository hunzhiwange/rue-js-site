import{$ as e,Et as t,G as n,H as r,K as i,W as a,_t as o,d as s,kt as c,l,q as u,t as d,tt as f,xt as p}from"./vapor-runtime-BAZOdMd8.js";import{a as m,n as h}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as g,t as _}from"./src-DZJ4J6sD.js";import{n as v}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as y}from"./Code-DY4Ua5uc.js";import{t as b}from"./tabs-Casd077O.js";import{n as x,t as S}from"./text-rotate-BKrizZQB.js";var C=e=>s(t=>{let o=i(`div`,t);f(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`h2`,o);r(o,u),f(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=a(`rue:slot:anchor`);r(u,m),c(()=>{let t=e.title;p(()=>l(t,u,m))});let h=i(`p`,o);r(o,h),f(h,`text-sm mt-3 mb-3`);let g=a(`rue:slot:anchor`);r(h,g),c(()=>{let t=e.description;p(()=>l(t,h,g))});let _=a(`rue:component:anchor`);r(o,_),c(()=>{let t=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.activeKey.value,onChange:t=>e.activeKey.value=t,className:`mb-3`});p(()=>l(t,o,_))});let v=a(`rue:slot:anchor`);return r(o,v),c(()=>{let t=e.activeKey.value===`preview`?e.preview:s(()=>{let t=n(),i=a(`rue:component:anchor`);return r(t,i),c(()=>{let n=d(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>l(n,t,i))}),t});p(()=>l(t,o,v))}),o}),w=t=>s(o=>{let d=i(`div`,o);f(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,d);r(d,m),f(m,`table table-zebra`);let g=i(`thead`,m);r(m,g);let _=i(`tr`,g);r(g,_);let v=i(`th`,_);r(_,v),r(v,u(`属性`));let y=i(`th`,_);r(_,y),r(y,u(`说明`));let b=i(`th`,_);r(_,b),r(b,u(`类型`));let x=i(`th`,_);r(_,x),r(x,u(`默认值`));let S=i(`tbody`,m);r(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return c(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,o,u,d,f)=>{l(s(()=>{let o=n(),s=i(`tr`,o);r(o,s),c(()=>{e(s,`key`,String(t.prop))});let u=i(`td`,s);r(s,u);let d=i(`code`,u);r(u,d);let f=a(`rue:slot:anchor`);r(d,f),c(()=>{let e=t.prop;p(()=>l(e,d,f))});let m=i(`td`,s);r(s,m);let h=a(`rue:slot:anchor`);r(m,h),c(()=>{let e=t.description;p(()=>l(e,m,h))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=a(`rue:slot:anchor`);r(_,v),c(()=>{let e=t.type;p(()=>l(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=a(`rue:slot:anchor`);return r(b,x),c(()=>{let e=t.defaultValue;p(()=>l(e,b,x))}),o}),o,u)}})}),d}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:e,tabHierarchy:h,tabLevels:y,tabRotate:b}=m(`useSetup:0:0`,()=>t(()=>({tabInline:m(`ref:1:0`,()=>o(`preview`)),tabHierarchy:m(`ref:1:1`,()=>o(`preview`)),tabLevels:m(`ref:1:2`,()=>o(`preview`)),tabRotate:m(`ref:1:3`,()=>o(`preview`))})));return s(t=>{let o=n(),m=a(`rue:component:anchor`);return r(o,m),l(d(v,{children:s(()=>{let t=n(),o=i(`div`,t);r(t,o),f(o,`max-w-none prose prose-sm md:prose-base`);let s=i(`h1`,o);r(o,s),r(s,u(`Typography 排版`));let m=i(`p`,o);r(o,m),f(m,`text-sm mt-3 mb-3`),r(m,u(`Typography 采用常见业务排版组件的组织方式，提供`));let v=i(`code`,m);r(m,v),r(v,u(`Text`)),r(m,u(`、`));let E=i(`code`,m);r(m,E),r(E,u(`Link`)),r(m,u(`、`));let D=i(`code`,m);r(m,D),r(D,u(`Title`)),r(m,u(`、`));let O=i(`code`,m);r(m,O),r(O,u(`Paragraph`)),r(m,u(`这组复合 API。`));let k=i(`p`,o);r(o,k),f(k,`text-sm mb-3 opacity-80`),r(k,u(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=a(`rue:component:anchor`);r(o,A),c(()=>{let t=d(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:e,preview:g(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[_(x.Text,{children:`Rue`}),_(x.Text,{type:`secondary`,children:`Secondary`}),_(x.Text,{type:`success`,strong:!0,children:`Success`}),_(x.Text,{type:`warning`,mark:!0,children:`Highlight`}),_(x.Text,{code:!0,children:`pnpm dev`}),_(x.Text,{keyboard:!0,children:`Esc`}),_(x.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});p(()=>l(t,o,A))});let j=a(`rue:component:anchor`);r(o,j),c(()=>{let e=d(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:g(x,{className:`space-y-4`,children:[_(x.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),g(x.Paragraph,{children:[`Use `,_(x.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,_(x.Text,{code:!0,children:`code`}),` for commands, and`,` `,_(x.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),_(x.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});p(()=>l(e,o,j))});let M=a(`rue:component:anchor`);r(o,M),c(()=>{let e=d(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:y,preview:g(`div`,{className:`space-y-3`,children:[_(x.Title,{level:1,children:`Heading 1`}),_(x.Title,{level:2,children:`Heading 2`}),_(x.Title,{level:3,children:`Heading 3`}),_(x.Title,{level:4,children:`Heading 4`}),_(x.Title,{level:5,children:`Heading 5`})]}),code:te});p(()=>l(e,o,M))});let N=a(`rue:component:anchor`);r(o,N),c(()=>{let e=d(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:b,preview:g(x,{className:`space-y-4`,children:[g(x.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,_(S,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),_(x.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),_(S,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});p(()=>l(e,o,N))});let P=i(`h2`,o);r(o,P),r(P,u(`API`));let F=i(`p`,o);r(o,F),f(F,`text-sm opacity-80`),r(F,u(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=i(`div`,o);r(o,I),f(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=i(`div`,I);r(I,L),f(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=i(`div`,L);r(L,R),f(R,`text-sm font-medium`),r(R,u(`Typography Root`));let z=i(`p`,L);r(L,z),f(z,`mt-2 text-sm opacity-70`),r(z,u(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=i(`div`,I);r(I,B),f(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=i(`div`,B);r(B,V),f(V,`text-sm font-medium`),r(V,u(`Text / Link`));let H=i(`p`,B);r(B,H),f(H,`mt-2 text-sm opacity-70`),r(H,u(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=i(`div`,I);r(I,U),f(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=i(`div`,U);r(U,W),f(W,`text-sm font-medium`),r(W,u(`Title / Paragraph`));let G=i(`p`,U);r(U,G),f(G,`mt-2 text-sm opacity-70`),r(G,u(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=i(`h3`,o);r(o,K),f(K,`mt-8`),r(K,u(`Typography`));let q=i(`p`,o);r(o,q),f(q,`text-sm opacity-70`),r(q,u(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=a(`rue:component:anchor`);r(o,J),c(()=>{let e=d(w,{rows:re});p(()=>l(e,o,J))});let Y=i(`h3`,o);r(o,Y),r(Y,u(`Typography.Text / Typography.Link`));let X=i(`p`,o);r(o,X),f(X,`text-sm opacity-70`),r(X,u(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=a(`rue:component:anchor`);r(o,Z),c(()=>{let e=d(w,{rows:ie});p(()=>l(e,o,Z))});let Q=i(`h3`,o);r(o,Q),r(Q,u(`Typography.Title / Typography.Paragraph`));let $=i(`p`,o);r(o,$),f($,`text-sm opacity-70`),r($,u(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=a(`rue:component:anchor`);return r(o,oe),c(()=>{let e=d(w,{rows:ae});p(()=>l(e,o,oe))}),t})}),o,m),o})};export{E as default};