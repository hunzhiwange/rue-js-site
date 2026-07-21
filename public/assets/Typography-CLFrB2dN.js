import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,pn as o,pt as s,st as c,tn as l,vn as u}from"./context-8lXZvIn-.js";import{l as d,o as f,t as p}from"./vapor-runtime-ygJWVcNn.js";import{a as m,n as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./Code-DhoWkRkB.js";import{n as _,t as v}from"./src-CCTNpCXV.js";import{t as y}from"./tabs-B1XdBEJF.js";import{n as b,t as x}from"./text-rotate-vbZkTv-M.js";import{r as S}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var C=e=>d(t=>{let a=s(`div`,t);n(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=s(`h2`,a);c(a,o),n(o,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let m=r(`rue:slot:anchor`);c(o,m),l(()=>{let t=e.title;u(()=>f(t,o,m))});let h=s(`p`,a);c(a,h),n(h,`text-sm mt-3 mb-3`);let _=r(`rue:slot:anchor`);c(h,_),l(()=>{let t=e.description;u(()=>f(t,h,_))});let v=r(`rue:component:anchor`);c(a,v),l(()=>{let t=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.activeKey.value,onChange:t=>e.activeKey.value=t,className:`mb-3`});u(()=>f(t,a,v))});let b=r(`rue:slot:anchor`);return c(a,b),l(()=>{let t=e.activeKey.value===`preview`?e.preview:d(()=>{let t=i(),n=r(`rue:component:anchor`);return c(t,n),l(()=>{let r=p(g,{className:`mt-2`,lang:`tsx`,code:e.code});u(()=>f(r,t,n))}),t});u(()=>f(t,a,b))}),a}),w=e=>d(o=>{let p=s(`div`,o);n(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=s(`table`,p);c(p,m),n(m,`table table-zebra`);let g=s(`thead`,m);c(m,g);let _=s(`tr`,g);c(g,_);let v=s(`th`,_);c(_,v),c(v,a(`属性`));let y=s(`th`,_);c(_,y),c(y,a(`说明`));let b=s(`th`,_);c(_,b),c(b,a(`类型`));let x=s(`th`,_);c(_,x),c(x,a(`默认值`));let S=s(`tbody`,m);c(m,S);let C=r(`rue:list:start`),w=r(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return l(()=>{T=h({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,a,o,p)=>{f(d(()=>{let n=i(),a=s(`tr`,n);c(n,a),l(()=>{t(a,`key`,String(e.prop))});let o=s(`td`,a);c(a,o);let d=s(`code`,o);c(o,d);let p=r(`rue:slot:anchor`);c(d,p),l(()=>{let t=e.prop;u(()=>f(t,d,p))});let m=s(`td`,a);c(a,m);let h=r(`rue:slot:anchor`);c(m,h),l(()=>{let t=e.description;u(()=>f(t,m,h))});let g=s(`td`,a);c(a,g);let _=s(`code`,g);c(g,_);let v=r(`rue:slot:anchor`);c(_,v),l(()=>{let t=e.type;u(()=>f(t,_,v))});let y=s(`td`,a);c(a,y);let b=s(`code`,y);c(y,b);let x=r(`rue:slot:anchor`);return c(b,x),l(()=>{let t=e.defaultValue;u(()=>f(t,b,x))}),n}),n,a)}})}),p}),T=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,re=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],E=()=>{let{tabInline:t,tabHierarchy:h,tabLevels:g,tabRotate:y}=m(`useSetup:0:0`,()=>e(()=>({tabInline:m(`ref:1:0`,()=>o(`preview`)),tabHierarchy:m(`ref:1:1`,()=>o(`preview`)),tabLevels:m(`ref:1:2`,()=>o(`preview`)),tabRotate:m(`ref:1:3`,()=>o(`preview`))})));return d(e=>{let o=i(),m=r(`rue:component:anchor`);return c(o,m),f(p(S,{children:d(()=>{let e=i(),o=s(`div`,e);c(e,o),n(o,`max-w-none prose prose-sm md:prose-base`);let d=s(`h1`,o);c(o,d),c(d,a(`Typography 排版`));let m=s(`p`,o);c(o,m),n(m,`text-sm mt-3 mb-3`),c(m,a(`Typography 采用常见业务排版组件的组织方式，提供`));let S=s(`code`,m);c(m,S),c(S,a(`Text`)),c(m,a(`、`));let E=s(`code`,m);c(m,E),c(E,a(`Link`)),c(m,a(`、`));let D=s(`code`,m);c(m,D),c(D,a(`Title`)),c(m,a(`、`));let O=s(`code`,m);c(m,O),c(O,a(`Paragraph`)),c(m,a(`这组复合 API。`));let k=s(`p`,o);c(o,k),n(k,`text-sm mb-3 opacity-80`),c(k,a(`它使用 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let A=r(`rue:component:anchor`);c(o,A),l(()=>{let e=p(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:t,preview:_(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[v(b.Text,{children:`Rue`}),v(b.Text,{type:`secondary`,children:`Secondary`}),v(b.Text,{type:`success`,strong:!0,children:`Success`}),v(b.Text,{type:`warning`,mark:!0,children:`Highlight`}),v(b.Text,{code:!0,children:`pnpm dev`}),v(b.Text,{keyboard:!0,children:`Esc`}),v(b.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:T});u(()=>f(e,o,A))});let j=r(`rue:component:anchor`);c(o,j),l(()=>{let e=p(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:_(b,{className:`space-y-4`,children:[v(b.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),_(b.Paragraph,{children:[`Use `,v(b.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,v(b.Text,{code:!0,children:`code`}),` for commands, and`,` `,v(b.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),v(b.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:ee});u(()=>f(e,o,j))});let M=r(`rue:component:anchor`);c(o,M),l(()=>{let e=p(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:g,preview:_(`div`,{className:`space-y-3`,children:[v(b.Title,{level:1,children:`Heading 1`}),v(b.Title,{level:2,children:`Heading 2`}),v(b.Title,{level:3,children:`Heading 3`}),v(b.Title,{level:4,children:`Heading 4`}),v(b.Title,{level:5,children:`Heading 5`})]}),code:te});u(()=>f(e,o,M))});let N=r(`rue:component:anchor`);c(o,N),l(()=>{let e=p(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:y,preview:_(b,{className:`space-y-4`,children:[_(b.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,v(x,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),v(b.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),v(x,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:ne});u(()=>f(e,o,N))});let P=s(`h2`,o);c(o,P),c(P,a(`API`));let F=s(`p`,o);c(o,F),n(F,`text-sm opacity-80`),c(F,a(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let I=s(`div`,o);c(o,I),n(I,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let L=s(`div`,I);c(I,L),n(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=s(`div`,L);c(L,R),n(R,`text-sm font-medium`),c(R,a(`Typography Root`));let z=s(`p`,L);c(L,z),n(z,`mt-2 text-sm opacity-70`),c(z,a(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let B=s(`div`,I);c(I,B),n(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let V=s(`div`,B);c(B,V),n(V,`text-sm font-medium`),c(V,a(`Text / Link`));let H=s(`p`,B);c(B,H),n(H,`mt-2 text-sm opacity-70`),c(H,a(`这组组件偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let U=s(`div`,I);c(I,U),n(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=s(`div`,U);c(U,W),n(W,`text-sm font-medium`),c(W,a(`Title / Paragraph`));let G=s(`p`,U);c(U,G),n(G,`mt-2 text-sm opacity-70`),c(G,a(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let K=s(`h3`,o);c(o,K),n(K,`mt-8`),c(K,a(`Typography`));let q=s(`p`,o);c(o,q),n(q,`text-sm opacity-70`),c(q,a(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let J=r(`rue:component:anchor`);c(o,J),l(()=>{let e=p(w,{rows:re});u(()=>f(e,o,J))});let Y=s(`h3`,o);c(o,Y),c(Y,a(`Typography.Text / Typography.Link`));let X=s(`p`,o);c(o,X),n(X,`text-sm opacity-70`),c(X,a(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let Z=r(`rue:component:anchor`);c(o,Z),l(()=>{let e=p(w,{rows:ie});u(()=>f(e,o,Z))});let Q=s(`h3`,o);c(o,Q),c(Q,a(`Typography.Title / Typography.Paragraph`));let $=s(`p`,o);c(o,$),n($,`text-sm opacity-70`),c($,a(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let oe=r(`rue:component:anchor`);return c(o,oe),l(()=>{let e=p(w,{rows:ae});u(()=>f(e,o,oe))}),e})}),o,m),o})};export{E as default};