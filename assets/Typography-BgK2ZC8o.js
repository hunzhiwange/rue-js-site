import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,lt as u,pt as d,t as f,u as p}from"./vapor-runtime-D3a-68js.js";import{a as m,n as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as g,t as _}from"./src-BfQKH6_d.js";import{n as v}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./tabs-BgQmsOey.js";import{n as x,t as S}from"./text-rotate-BwFPAdT6.js";var C=r=>p(()=>{let o=n(`div`);t(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=n(`h2`);i(o,s),t(s,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let u=a(`rue:slot:anchor`);i(s,u),c(()=>{let e=r.title;d(()=>l(e,s,u))});let m=n(`p`);i(o,m),t(m,`text-sm mt-3 mb-3`);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=r.description;d(()=>l(e,m,h))});let g=a(`rue:component:anchor`);i(o,g),c(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.activeKey.value,onChange:e=>r.activeKey.value=e,className:`mb-3`});d(()=>l(e,o,g))});let _=a(`rue:slot:anchor`);return i(o,_),c(()=>{let t=r.activeKey.value===`preview`?r.preview:p(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),c(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:r.code});d(()=>l(e,t,n))}),t});d(()=>l(t,o,_))}),o}),w=s=>p(()=>{let u=n(`div`);t(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=n(`table`);i(u,f),t(f,`table table-zebra`);let m=n(`thead`);i(f,m);let g=n(`tr`);i(m,g);let _=n(`th`);i(g,_),i(_,r(`属性`));let v=n(`th`);i(g,v),i(v,r(`说明`));let y=n(`th`);i(g,y),i(y,r(`类型`));let b=n(`th`);i(g,b),i(b,r(`默认值`));let x=n(`tbody`);i(f,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return c(()=>{w=h({items:s.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,s,u,f)=>{l(p(()=>{let r=e(),s=n(`tr`);i(r,s),c(()=>{o(s,`key`,String(t.prop))});let u=n(`td`);i(s,u);let f=n(`code`);i(u,f);let p=a(`rue:slot:anchor`);i(f,p),c(()=>{let e=t.prop;d(()=>l(e,f,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=t.description;d(()=>l(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),c(()=>{let e=t.type;d(()=>l(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),c(()=>{let e=t.defaultValue;d(()=>l(e,b,x))}),r}),r,s)}})}),u}),ee=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</div>`,te=`<Typography className="space-y-4">
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
</Typography>`,ne=`<div className="space-y-3">
  <Typography.Title level={1}>Heading 1</Typography.Title>
  <Typography.Title level={2}>Heading 2</Typography.Title>
  <Typography.Title level={3}>Heading 3</Typography.Title>
  <Typography.Title level={4}>Heading 4</Typography.Title>
  <Typography.Title level={5}>Heading 5</Typography.Title>
</div>`,re=`<Typography className="space-y-4">
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
</Typography>`,ie=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],oe=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],T=()=>{let{tabInline:o,tabHierarchy:h,tabLevels:y,tabRotate:b}=m(`useSetup:0:0`,()=>s(()=>({tabInline:m(`ref:1:0`,()=>u(`preview`)),tabHierarchy:m(`ref:1:1`,()=>u(`preview`)),tabLevels:m(`ref:1:2`,()=>u(`preview`)),tabRotate:m(`ref:1:3`,()=>u(`preview`))})));return p(()=>{let s=e(),u=a(`rue:component:anchor`);return i(s,u),l(f(v,{children:p(()=>{let s=e(),u=n(`div`);i(s,u),t(u,`max-w-none prose prose-sm md:prose-base`);let p=n(`h1`);i(u,p),i(p,r(`Typography 排版`));let m=n(`p`);i(u,m),t(m,`text-sm mt-3 mb-3`),i(m,r(`Typography 采用常见业务排版组件的组织方式，提供`));let v=n(`code`);i(m,v),i(v,r(`Text`)),i(m,r(`、`));let T=n(`code`);i(m,T),i(T,r(`Link`)),i(m,r(`、`));let E=n(`code`);i(m,E),i(E,r(`Title`)),i(m,r(`、`));let D=n(`code`);i(m,D),i(D,r(`Paragraph`)),i(m,r(`这组复合 API。`));let O=n(`p`);i(u,O),t(O,`text-sm mb-3 opacity-80`),i(O,r(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let k=a(`rue:component:anchor`);i(u,k),c(()=>{let e=f(C,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:o,preview:g(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[_(x.Text,{children:`Rue`}),_(x.Text,{type:`secondary`,children:`Secondary`}),_(x.Text,{type:`success`,strong:!0,children:`Success`}),_(x.Text,{type:`warning`,mark:!0,children:`Highlight`}),_(x.Text,{code:!0,children:`pnpm dev`}),_(x.Text,{keyboard:!0,children:`Esc`}),_(x.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:ee});d(()=>l(e,u,k))});let A=a(`rue:component:anchor`);i(u,A),c(()=>{let e=f(C,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:h,preview:g(x,{className:`space-y-4`,children:[_(x.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),g(x.Paragraph,{children:[`Use `,_(x.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,_(x.Text,{code:!0,children:`code`}),` for commands, and`,` `,_(x.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),_(x.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:te});d(()=>l(e,u,A))});let j=a(`rue:component:anchor`);i(u,j),c(()=>{let e=f(C,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:y,preview:g(`div`,{className:`space-y-3`,children:[_(x.Title,{level:1,children:`Heading 1`}),_(x.Title,{level:2,children:`Heading 2`}),_(x.Title,{level:3,children:`Heading 3`}),_(x.Title,{level:4,children:`Heading 4`}),_(x.Title,{level:5,children:`Heading 5`})]}),code:ne});d(()=>l(e,u,j))});let M=a(`rue:component:anchor`);i(u,M),c(()=>{let e=f(C,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:b,preview:g(x,{className:`space-y-4`,children:[g(x.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,_(S,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),_(x.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),_(S,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:re});d(()=>l(e,u,M))});let N=n(`h2`);i(u,N),i(N,r(`API`));let P=n(`p`);i(u,P),t(P,`text-sm opacity-80`),i(P,r(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let F=n(`div`);i(u,F),t(F,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let I=n(`div`);i(F,I),t(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=n(`div`);i(I,L),t(L,`text-sm font-medium`),i(L,r(`Typography Root`));let R=n(`p`);i(I,R),t(R,`mt-2 text-sm opacity-70`),i(R,r(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let z=n(`div`);i(F,z),t(z,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let B=n(`div`);i(z,B),t(B,`text-sm font-medium`),i(B,r(`Text / Link`));let V=n(`p`);i(z,V),t(V,`mt-2 text-sm opacity-70`),i(V,r(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let H=n(`div`);i(F,H),t(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=n(`div`);i(H,U),t(U,`text-sm font-medium`),i(U,r(`Title / Paragraph`));let W=n(`p`);i(H,W),t(W,`mt-2 text-sm opacity-70`),i(W,r(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let G=n(`h3`);i(u,G),t(G,`mt-8`),i(G,r(`Typography`));let K=n(`p`);i(u,K),t(K,`text-sm opacity-70`),i(K,r(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let q=a(`rue:component:anchor`);i(u,q),c(()=>{let e=f(w,{rows:ie});d(()=>l(e,u,q))});let J=n(`h3`);i(u,J),i(J,r(`Typography.Text / Typography.Link`));let Y=n(`p`);i(u,Y),t(Y,`text-sm opacity-70`),i(Y,r(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let X=a(`rue:component:anchor`);i(u,X),c(()=>{let e=f(w,{rows:ae});d(()=>l(e,u,X))});let Z=n(`h3`);i(u,Z),i(Z,r(`Typography.Title / Typography.Paragraph`));let Q=n(`p`);i(u,Q),t(Q,`text-sm opacity-70`),i(Q,r(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let $=a(`rue:component:anchor`);return i(u,$),c(()=>{let e=f(w,{rows:oe});d(()=>l(e,u,$))}),s})}),s,u),s})};export{T as default};