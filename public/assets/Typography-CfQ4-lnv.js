import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,_t as s,d as c,l,mt as u,ot as d,t as f,ut as p}from"./vapor-runtime-B3ypJaOM.js";import{a as m,n as h}from"./vapor-helpers-vapor-CER7Yupw.js";import{n as g,t as _}from"./src-BhCwGZbQ.js";import{n as v}from"./SidebarPlaygroundDesign-DJJx0NbZ.js";import{t as y}from"./Code-DOCCgQFa.js";import{t as b}from"./tabs-Cu0uJJtf.js";import{n as x,t as S}from"./text-rotate-C8gLMo6e.js";var C=a=>c(o=>{let u=r(`div`,o);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=r(`h2`,u);i(u,d),n(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=e(`rue:slot:anchor`);i(d,m),s(()=>{let e=a.title;p(()=>l(e,d,m))});let h=r(`p`,u);i(u,h),n(h,`text-sm mt-3 mb-3`);let g=e(`rue:slot:anchor`);i(h,g),s(()=>{let e=a.description;p(()=>l(e,h,g))});let _=e(`rue:component:anchor`);i(u,_),s(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.activeKey.value,onChange:e=>a.activeKey.value=e,className:`mb-3`});p(()=>l(e,u,_))});let v=e(`rue:slot:anchor`);return i(u,v),s(()=>{let n=a.activeKey.value===`preview`?a.preview:c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),s(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:a.code});p(()=>l(e,n,r))}),n});p(()=>l(n,u,v))}),u}),w=u=>c(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=r(`table`,f);i(f,m),n(m,`table table-zebra`);let g=r(`thead`,m);i(m,g);let _=r(`tr`,g);i(g,_);let v=r(`th`,_);i(_,v),i(v,a(`属性`));let y=r(`th`,_);i(_,y),i(y,a(`说明`));let b=r(`th`,_);i(_,b),i(b,a(`类型`));let x=r(`th`,_);i(_,x),i(x,a(`默认值`));let S=r(`tbody`,m);i(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return s(()=>{T=h({items:u.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,u,d,f)=>{l(c(()=>{let a=t(),c=r(`tr`,a);i(a,c),s(()=>{o(c,`key`,String(n.prop))});let u=r(`td`,c);i(c,u);let d=r(`code`,u);i(u,d);let f=e(`rue:slot:anchor`);i(d,f),s(()=>{let e=n.prop;p(()=>l(e,d,f))});let m=r(`td`,c);i(c,m);let h=e(`rue:slot:anchor`);i(m,h),s(()=>{let e=n.description;p(()=>l(e,m,h))});let g=r(`td`,c);i(c,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),s(()=>{let e=n.type;p(()=>l(e,_,v))});let y=r(`td`,c);i(c,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),s(()=>{let e=n.defaultValue;p(()=>l(e,b,x))}),a}),a,u)}})}),f}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:o,tabHierarchy:h,tabLevels:y,tabRotate:b}=m(`useSetup:0:0`,()=>u(()=>({tabInline:m(`ref:1:0`,()=>d(`preview`)),tabHierarchy:m(`ref:1:1`,()=>d(`preview`)),tabLevels:m(`ref:1:2`,()=>d(`preview`)),tabRotate:m(`ref:1:3`,()=>d(`preview`))})));return c(u=>{let d=t(),m=e(`rue:component:anchor`);return i(d,m),l(f(v,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let d=r(`h1`,u);i(u,d),i(d,a(`Typography 排版`));let m=r(`p`,u);i(u,m),n(m,`text-sm mt-3 mb-3`),i(m,a(`Typography 采用常见业务排版组件的组织方式，提供`));let v=r(`code`,m);i(m,v),i(v,a(`Text`)),i(m,a(`、`));let E=r(`code`,m);i(m,E),i(E,a(`Link`)),i(m,a(`、`));let D=r(`code`,m);i(m,D),i(D,a(`Title`)),i(m,a(`、`));let O=r(`code`,m);i(m,O),i(O,a(`Paragraph`)),i(m,a(`这组复合 API。`));let k=r(`p`,u);i(u,k),n(k,`text-sm mb-3 opacity-80`),i(k,a(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=e(`rue:component:anchor`);i(u,A),s(()=>{let e=f(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:o,preview:g(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[_(x.Text,{children:`Rue`}),_(x.Text,{type:`secondary`,children:`Secondary`}),_(x.Text,{type:`success`,strong:!0,children:`Success`}),_(x.Text,{type:`warning`,mark:!0,children:`Highlight`}),_(x.Text,{code:!0,children:`pnpm dev`}),_(x.Text,{keyboard:!0,children:`Esc`}),_(x.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});p(()=>l(e,u,A))});let j=e(`rue:component:anchor`);i(u,j),s(()=>{let e=f(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:g(x,{className:`space-y-4`,children:[_(x.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),g(x.Paragraph,{children:[`Use `,_(x.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,_(x.Text,{code:!0,children:`code`}),` for commands, and`,` `,_(x.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),_(x.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});p(()=>l(e,u,j))});let M=e(`rue:component:anchor`);i(u,M),s(()=>{let e=f(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:y,preview:g(`div`,{className:`space-y-3`,children:[_(x.Title,{level:1,children:`Heading 1`}),_(x.Title,{level:2,children:`Heading 2`}),_(x.Title,{level:3,children:`Heading 3`}),_(x.Title,{level:4,children:`Heading 4`}),_(x.Title,{level:5,children:`Heading 5`})]}),code:te});p(()=>l(e,u,M))});let N=e(`rue:component:anchor`);i(u,N),s(()=>{let e=f(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:b,preview:g(x,{className:`space-y-4`,children:[g(x.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,_(S,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),_(x.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),_(S,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});p(()=>l(e,u,N))});let P=r(`h2`,u);i(u,P),i(P,a(`API`));let F=r(`p`,u);i(u,F),n(F,`text-sm opacity-80`),i(F,a(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=r(`div`,u);i(u,I),n(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=r(`div`,I);i(I,L),n(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=r(`div`,L);i(L,R),n(R,`text-sm font-medium`),i(R,a(`Typography Root`));let z=r(`p`,L);i(L,z),n(z,`mt-2 text-sm opacity-70`),i(z,a(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=r(`div`,I);i(I,B),n(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=r(`div`,B);i(B,V),n(V,`text-sm font-medium`),i(V,a(`Text / Link`));let H=r(`p`,B);i(B,H),n(H,`mt-2 text-sm opacity-70`),i(H,a(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=r(`div`,I);i(I,U),n(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=r(`div`,U);i(U,W),n(W,`text-sm font-medium`),i(W,a(`Title / Paragraph`));let G=r(`p`,U);i(U,G),n(G,`mt-2 text-sm opacity-70`),i(G,a(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=r(`h3`,u);i(u,K),n(K,`mt-8`),i(K,a(`Typography`));let q=r(`p`,u);i(u,q),n(q,`text-sm opacity-70`),i(q,a(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=e(`rue:component:anchor`);i(u,J),s(()=>{let e=f(w,{rows:re});p(()=>l(e,u,J))});let Y=r(`h3`,u);i(u,Y),i(Y,a(`Typography.Text / Typography.Link`));let X=r(`p`,u);i(u,X),n(X,`text-sm opacity-70`),i(X,a(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=e(`rue:component:anchor`);i(u,Z),s(()=>{let e=f(w,{rows:ie});p(()=>l(e,u,Z))});let Q=r(`h3`,u);i(u,Q),i(Q,a(`Typography.Title / Typography.Paragraph`));let $=r(`p`,u);i(u,$),n($,`text-sm opacity-70`),i($,a(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=e(`rue:component:anchor`);return i(u,oe),s(()=>{let e=f(w,{rows:ae});p(()=>l(e,u,oe))}),c})}),d,m),d})};export{E as default};