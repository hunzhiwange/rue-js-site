import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h,n as g}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as _,t as v}from"./src-CqIWk1va.js";import{n as y}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as b}from"./Code-B1JFTu6m.js";import{t as x}from"./tabs-BbiCzXqJ.js";import{n as S,t as C}from"./text-rotate-CKDcMTR_.js";var w=({title:t,description:n,activeKey:d,preview:m,code:h})=>p(()=>{let g=e(`div`);o(g,`component-preview not-prose text-base-content my-6 lg:my-12`);let _=e(`h2`);l(g,_),o(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`);let v=r(_);l(_,v),u(()=>{s(v,t)});let y=e(`p`);l(g,y),o(y,`text-sm mt-3 mb-3`);let S=r(y);l(y,S),u(()=>{s(S,n)});let C=i(`rue:component:anchor`);l(g,C),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:d.value,onChange:e=>d.value=e,className:`mb-3`}),g,C)});let w=i(`rue:slot:anchor`);return l(g,w),u(()=>{c(d.value===`preview`?m:p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:h}),e,t)}),e}),g,w)}),g}),T=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),ee=`<div className="flex flex-wrap items-center gap-4 text-lg">
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
</Typography>`,E=[{prop:`as`,description:`根节点标签，适合在 div、section、article 之间切换。`,type:`'div' | 'section' | 'article'`,defaultValue:`'div'`},{prop:`className / style`,description:`补充根节点样式；默认带有 rue-typography 与基础文本颜色。`,type:`string / any`,defaultValue:`-`},{prop:`children`,description:`放置 Text、Link、Title、Paragraph 或任意可组合内容。`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`仅 Typography.Text 支持，用于指定输出标签。`,type:`'span' | 'div' | 'p'`,defaultValue:`'span'`},{prop:`type`,description:`文本语气，默认普通文本，其余映射到语义颜色。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`禁用交互并弱化视觉，同时补充 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`将内容包装成高亮、代码片段或键帽样式。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`控制下划线、删除线、加粗和斜体等强调方式。`,type:`boolean`,defaultValue:`false`},{prop:`href / target / rel`,description:`仅 Typography.Link 支持的链接属性，target 为 _blank 时默认补 noreferrer。`,type:`string`,defaultValue:`-`}],ae=[{prop:`level`,description:`仅 Typography.Title 支持，映射 h1 到 h5 的标题层级与字号。`,type:`1 | 2 | 3 | 4 | 5`,defaultValue:`1`},{prop:`type`,description:`标题和段落都支持语义色调，便于和正文 tone 保持统一。`,type:`TypographyTone`,defaultValue:`'default'`},{prop:`disabled`,description:`弱化显示并补 aria-disabled，适合只读或禁用态文案。`,type:`boolean`,defaultValue:`false`},{prop:`mark / code / keyboard`,description:`允许标题和段落复用高亮、代码和键帽包装能力。`,type:`boolean`,defaultValue:`false`},{prop:`underline / delete / strong / italic`,description:`继续支持强调、删除和斜体等排版修饰。`,type:`boolean`,defaultValue:`false`},{prop:`className / style / children`,description:`用于补充样式和传入可组合内容，Paragraph 默认输出段落节点。`,type:`any`,defaultValue:`-`}],D=()=>{let{tabInline:t,tabHierarchy:r,tabLevels:s,tabRotate:g}=h(`useSetup:0:0`,()=>m(()=>({tabInline:h(`ref:1:0`,()=>d(`preview`)),tabHierarchy:h(`ref:1:1`,()=>d(`preview`)),tabLevels:h(`ref:1:2`,()=>d(`preview`)),tabRotate:h(`ref:1:3`,()=>d(`preview`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Typography 排版`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Typography 参考 ant-design 的组织方式，提供`));let y=e(`code`);l(h,y),l(y,n(`Text`)),l(h,n(`、`));let b=e(`code`);l(h,b),l(b,n(`Link`)),l(h,n(`、`));let x=e(`code`);l(h,x),l(x,n(`Title`)),l(h,n(`、`));let D=e(`code`);l(h,D),l(D,n(`Paragraph`)),l(h,n(`这组复合 API。`));let O=e(`p`);l(p,O),o(O,`text-sm mb-3 opacity-80`),l(O,n(`它保留 Rue 当前轻量、类名直连的风格，同时也成为 Text Rotate 等组件的语义文本底座。`));let k=i(`rue:component:anchor`);l(p,k),u(()=>{c(f(w,{title:`# Inline text states`,description:`Use Text and Link for tone, emphasis and inline semantic content`,activeKey:t,preview:_(`div`,{className:`flex flex-wrap items-center gap-4 text-lg`,children:[v(S.Text,{children:`Rue`}),v(S.Text,{type:`secondary`,children:`Secondary`}),v(S.Text,{type:`success`,strong:!0,children:`Success`}),v(S.Text,{type:`warning`,mark:!0,children:`Highlight`}),v(S.Text,{code:!0,children:`pnpm dev`}),v(S.Text,{keyboard:!0,children:`Esc`}),v(S.Link,{href:`https://rue.dev`,target:`_blank`,type:`danger`,children:`Danger Link`})]}),code:ee}),p,k)});let A=i(`rue:component:anchor`);l(p,A),u(()=>{c(f(w,{title:`# Title and paragraph composition`,description:`Organize headings, body copy and inline emphasis in one consistent text system`,activeKey:r,preview:_(S,{className:`space-y-4`,children:[v(S.Title,{level:2,className:`font-title`,children:`Release notes that stay readable`}),_(S.Paragraph,{children:[`Use `,v(S.Text,{strong:!0,children:`Text`}),` for emphasis,`,` `,v(S.Text,{code:!0,children:`code`}),` for commands, and`,` `,v(S.Link,{href:`https://rue.dev`,target:`_blank`,children:`Typography.Link`}),` `,`for inline actions.`]}),v(S.Paragraph,{type:`secondary`,children:`Paragraph keeps the reading rhythm while letting inline semantics stay expressive.`})]}),code:te}),p,A)});let j=i(`rue:component:anchor`);l(p,j),u(()=>{c(f(w,{title:`# Heading levels`,description:`Map Title level to h1 through h5 while keeping Rue's typography rhythm`,activeKey:s,preview:_(`div`,{className:`space-y-3`,children:[v(S.Title,{level:1,children:`Heading 1`}),v(S.Title,{level:2,children:`Heading 2`}),v(S.Title,{level:3,children:`Heading 3`}),v(S.Title,{level:4,children:`Heading 4`}),v(S.Title,{level:5,children:`Heading 5`})]}),code:ne}),p,j)});let M=i(`rue:component:anchor`);l(p,M),u(()=>{c(f(w,{title:`# Compose with Text Rotate`,description:`The semantic API is shared, so static copy and rotating words feel like one family`,activeKey:g,preview:_(S,{className:`space-y-4`,children:[_(S.Title,{level:3,className:`font-title`,children:[`Ship better UI for`,` `,v(C,{className:`text-primary`,innerClassName:`justify-items-start`,items:[{text:`design systems`,strong:!0},{text:`docs sites`,type:`success`,strong:!0},{text:`team workflows`,type:`warning`,mark:!0}]})]}),v(S.Paragraph,{children:`TextRotate items reuse the same semantic API, so headings, body copy and rotating words stay in one typography system.`}),v(C,{className:`text-2xl font-title`,innerClassName:`justify-items-start`,items:[{text:`Readable`,strong:!0},{text:`Reviewable`,type:`secondary`,underline:!0},{text:`Deployable`,href:`https://rue.dev`,type:`danger`}]})]}),code:re}),p,M)});let N=e(`h2`);l(p,N),l(N,n(`API`));let P=e(`p`);l(p,P),o(P,`text-sm opacity-80`),l(P,n(`API 按根组件、内联语义组件和排版语义组件拆分，便于先搭内容结构，再补细粒度的强调方式。`));let F=e(`div`);l(p,F),o(F,`not-prose mt-4 grid gap-4 md:grid-cols-3`);let I=e(`div`);l(F,I),o(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=e(`div`);l(I,L),o(L,`text-sm font-medium`),l(L,n(`Typography Root`));let R=e(`p`);l(I,R),o(R,`mt-2 text-sm opacity-70`),l(R,n(`根组件适合承接完整文案区块，本身不强加复杂布局，只提供稳定的文本基底。`));let z=e(`div`);l(F,z),o(z,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let B=e(`div`);l(z,B),o(B,`text-sm font-medium`),l(B,n(`Text / Link`));let V=e(`p`);l(z,V),o(V,`mt-2 text-sm opacity-70`),l(V,n(`这一组偏内联表达，适合补 tone、强调状态、代码语义和链接能力。`));let H=e(`div`);l(F,H),o(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=e(`div`);l(H,U),o(U,`text-sm font-medium`),l(U,n(`Title / Paragraph`));let W=e(`p`);l(H,W),o(W,`mt-2 text-sm opacity-70`),l(W,n(`用于标题层级和正文节奏，适合和其他业务组件组合成完整的内容模块。`));let G=e(`h3`);l(p,G),o(G,`mt-8`),l(G,n(`Typography`));let K=e(`p`);l(p,K),o(K,`text-sm opacity-70`),l(K,n(`根组件负责承接一整段排版内容，适合包裹标题、正文和其他语义文本节点。`));let q=i(`rue:component:anchor`);l(p,q),u(()=>{c(f(T,{rows:E}),p,q)});let J=e(`h3`);l(p,J),l(J,n(`Typography.Text / Typography.Link`));let Y=e(`p`);l(p,Y),o(Y,`text-sm opacity-70`),l(Y,n(`内联子组件负责 tone、强调和链接表达，适合放进句子、描述和其他组件的插槽里复用。`));let X=i(`rue:component:anchor`);l(p,X),u(()=>{c(f(T,{rows:ie}),p,X)});let Z=e(`h3`);l(p,Z),l(Z,n(`Typography.Title / Typography.Paragraph`));let Q=e(`p`);l(p,Q),o(Q,`text-sm opacity-70`),l(Q,n(`排版子组件负责标题层级和正文节奏，也可以直接和 Text Rotate 之类的组件组合使用。`));let $=i(`rue:component:anchor`);return l(p,$),u(()=>{c(f(T,{rows:ae}),p,$)}),d})}),d,m),d})};export{D as default};