import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,l as o,lt as s,nt as c,o as l,rt as u,t as d,tt as f,zt as p}from"./vapor-runtime-DsQWl-IB.js";import{a as m,n as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as g,i as _}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as v}from"./Code-4SUSUwRg.js";import{t as y}from"./tabs-Duzh3URW.js";import{n as b,t as x}from"./text-rotate-BXH8eaNX.js";import{r as S}from"./SidebarPlaygroundDesign-EU389JDE.js";var C=t=>o(a=>{let s=c(`div`,a);r(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=c(`h2`,s);n(s,u),r(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=i(`rue:slot:anchor`);n(u,m),p(()=>{let n=t.title;e(()=>l(n,u,m))});let h=c(`p`,s);n(s,h),r(h,`text-sm mt-3 mb-3`);let g=i(`rue:slot:anchor`);n(h,g),p(()=>{let n=t.description;e(()=>l(n,h,g))});let _=i(`rue:component:anchor`);n(s,_),p(()=>{let n=d(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.activeKey.value,onChange:e=>t.activeKey.value=e,className:`mb-3`});e(()=>l(n,s,_))});let b=i(`rue:slot:anchor`);return n(s,b),p(()=>{let r=t.activeKey.value===`preview`?t.preview:o(()=>{let r=f(),a=i(`rue:component:anchor`);return n(r,a),p(()=>{let n=d(v,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>l(n,r,a))}),r});e(()=>l(r,s,b))}),s}),w=t=>o(a=>{let d=c(`div`,a);r(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=c(`table`,d);n(d,m),r(m,`table table-zebra`);let g=c(`thead`,m);n(m,g);let _=c(`tr`,g);n(g,_);let v=c(`th`,_);n(_,v),n(v,u(`属性`));let y=c(`th`,_);n(_,y),n(y,u(`说明`));let b=c(`th`,_);n(_,b),n(b,u(`类型`));let x=c(`th`,_);n(_,x),n(x,u(`默认值`));let S=c(`tbody`,m);n(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return p(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,u,d)=>{l(o(()=>{let r=f(),a=c(`tr`,r);n(r,a),p(()=>{s(a,`key`,String(t.prop))});let o=c(`td`,a);n(a,o);let u=c(`code`,o);n(o,u);let d=i(`rue:slot:anchor`);n(u,d),p(()=>{let n=t.prop;e(()=>l(n,u,d))});let m=c(`td`,a);n(a,m);let h=i(`rue:slot:anchor`);n(m,h),p(()=>{let n=t.description;e(()=>l(n,m,h))});let g=c(`td`,a);n(a,g);let _=c(`code`,g);n(g,_);let v=i(`rue:slot:anchor`);n(_,v),p(()=>{let n=t.type;e(()=>l(n,_,v))});let y=c(`td`,a);n(a,y);let b=c(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),p(()=>{let n=t.defaultValue;e(()=>l(n,b,x))}),r}),r,a)}})}),d}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:s,tabHierarchy:h,tabLevels:v,tabRotate:y}=m(`useSetup:0:0`,()=>a(()=>({tabInline:m(`ref:1:0`,()=>t(`preview`)),tabHierarchy:m(`ref:1:1`,()=>t(`preview`)),tabLevels:m(`ref:1:2`,()=>t(`preview`)),tabRotate:m(`ref:1:3`,()=>t(`preview`))})));return o(t=>{let a=f(),m=i(`rue:component:anchor`);return n(a,m),l(d(S,{children:o(()=>{let t=f(),a=c(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let o=c(`h1`,a);n(a,o),n(o,u(`Typography 排版`));let m=c(`p`,a);n(a,m),r(m,`text-sm mt-3 mb-3`),n(m,u(`Typography 采用常见业务排版组件的组织方式，提供`));let S=c(`code`,m);n(m,S),n(S,u(`Text`)),n(m,u(`、`));let E=c(`code`,m);n(m,E),n(E,u(`Link`)),n(m,u(`、`));let D=c(`code`,m);n(m,D),n(D,u(`Title`)),n(m,u(`、`));let O=c(`code`,m);n(m,O),n(O,u(`Paragraph`)),n(m,u(`这组复合 API。`));let k=c(`p`,a);n(a,k),r(k,`text-sm mb-3 opacity-80`),n(k,u(`它使用 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=i(`rue:component:anchor`);n(a,A),p(()=>{let t=d(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:s,preview:g(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[_(b.Text,{children:`Rue`}),_(b.Text,{type:`secondary`,children:`Secondary`}),_(b.Text,{type:`success`,strong:!0,children:`Success`}),_(b.Text,{type:`warning`,mark:!0,children:`Highlight`}),_(b.Text,{code:!0,children:`pnpm dev`}),_(b.Text,{keyboard:!0,children:`Esc`}),_(b.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});e(()=>l(t,a,A))});let j=i(`rue:component:anchor`);n(a,j),p(()=>{let t=d(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:g(b,{className:`space-y-4`,children:[_(b.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),g(b.Paragraph,{children:[`Use `,_(b.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,_(b.Text,{code:!0,children:`code`}),` for commands, and`,` `,_(b.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),_(b.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});e(()=>l(t,a,j))});let M=i(`rue:component:anchor`);n(a,M),p(()=>{let t=d(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:v,preview:g(`div`,{className:`space-y-3`,children:[_(b.Title,{level:1,children:`Heading 1`}),_(b.Title,{level:2,children:`Heading 2`}),_(b.Title,{level:3,children:`Heading 3`}),_(b.Title,{level:4,children:`Heading 4`}),_(b.Title,{level:5,children:`Heading 5`})]}),code:te});e(()=>l(t,a,M))});let N=i(`rue:component:anchor`);n(a,N),p(()=>{let t=d(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:y,preview:g(b,{className:`space-y-4`,children:[g(b.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,_(x,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),_(b.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),_(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});e(()=>l(t,a,N))});let P=c(`h2`,a);n(a,P),n(P,u(`API`));let F=c(`p`,a);n(a,F),r(F,`text-sm opacity-80`),n(F,u(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=c(`div`,a);n(a,I),r(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=c(`div`,I);n(I,L),r(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=c(`div`,L);n(L,R),r(R,`text-sm font-medium`),n(R,u(`Typography Root`));let z=c(`p`,L);n(L,z),r(z,`mt-2 text-sm opacity-70`),n(z,u(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=c(`div`,I);n(I,B),r(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=c(`div`,B);n(B,V),r(V,`text-sm font-medium`),n(V,u(`Text / Link`));let H=c(`p`,B);n(B,H),r(H,`mt-2 text-sm opacity-70`),n(H,u(`这组组件偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=c(`div`,I);n(I,U),r(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=c(`div`,U);n(U,W),r(W,`text-sm font-medium`),n(W,u(`Title / Paragraph`));let G=c(`p`,U);n(U,G),r(G,`mt-2 text-sm opacity-70`),n(G,u(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=c(`h3`,a);n(a,K),r(K,`mt-8`),n(K,u(`Typography`));let q=c(`p`,a);n(a,q),r(q,`text-sm opacity-70`),n(q,u(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=i(`rue:component:anchor`);n(a,J),p(()=>{let t=d(w,{rows:re});e(()=>l(t,a,J))});let Y=c(`h3`,a);n(a,Y),n(Y,u(`Typography.Text / Typography.Link`));let X=c(`p`,a);n(a,X),r(X,`text-sm opacity-70`),n(X,u(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=i(`rue:component:anchor`);n(a,Z),p(()=>{let t=d(w,{rows:ie});e(()=>l(t,a,Z))});let Q=c(`h3`,a);n(a,Q),n(Q,u(`Typography.Title / Typography.Paragraph`));let $=c(`p`,a);n(a,$),r($,`text-sm opacity-70`),n($,u(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=i(`rue:component:anchor`);return n(a,oe),p(()=>{let t=d(w,{rows:ae});e(()=>l(t,a,oe))}),t})}),a,m),a})};export{E as default};