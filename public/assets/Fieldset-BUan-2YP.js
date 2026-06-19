import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,ht as s,l as c,lt as l,nt as u,o as d,p as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as y,i as b}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as x}from"./Code-BIscIyEp.js";import{t as S}from"./button-CeShl0h_.js";import{t as C}from"./tabs-CZWMQq5i.js";import{t as w}from"./fieldset-DUJObilR.js";import{t as T}from"./input-DiGoZI6O.js";import{r as E}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var D=a=>c(s=>{let u=o(`div`,s);l(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=o(`div`,u);i(u,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let p=o(`div`,f);i(f,p);let g=o(`h2`,p);i(p,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,h(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>d(e,g,_))});let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let s=a.summary?c(()=>{let s=e(),c=o(`p`,s);i(s,c),l(c,`m-0 text-sm opacity-70`);let u=t(`rue:slot:anchor`);return i(c,u),n(()=>{let e=a.summary;r(()=>d(e,c,u))}),s}):``;r(()=>d(s,p,v))});let y=t(`rue:component:anchor`);i(u,y),n(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,u,y))});let b=t(`rue:slot:anchor`);return i(u,b),n(()=>{let o=a.tab.value===`preview`?a.preview():c(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=m(x,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>d(e,o,s))}),o});r(()=>d(o,u,b))}),u}),O=a=>c(s=>{let u=o(`div`,s);l(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=o(`table`,u);i(u,f),l(f,`table table-zebra`);let m=o(`thead`,f);i(f,m);let g=o(`tr`,m);i(m,g);let _=o(`th`,g);i(g,_),i(_,h(`属性`));let y=o(`th`,g);i(g,y),i(y,h(`说明`));let b=o(`th`,g);i(g,b),i(b,h(`类型`));let x=o(`th`,g);i(g,x),i(x,h(`默认值`));let S=o(`tbody`,f);i(f,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,l,u,f)=>{d(c(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{p(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let f=t(`rue:slot:anchor`);i(u,f),n(()=>{let e=a.prop;r(()=>d(e,u,f))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>d(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>d(e,b,x))}),s}),s,l)}})}),u}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:x,tabStates:C,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>a(()=>({tabRecommended:_(`ref:1:0`,()=>g(`preview`)),tabItem:_(`ref:1:1`,()=>g(`preview`)),tabStates:_(`ref:1:2`,()=>g(`preview`)),tabBasic:_(`ref:1:3`,()=>g(`preview`)),tabBorder:_(`ref:1:4`,()=>g(`preview`)),tabMultiple:_(`ref:1:5`,()=>g(`preview`)),tabJoin:_(`ref:1:6`,()=>g(`preview`)),tabLogin:_(`ref:1:7`,()=>g(`preview`))})));return c(a=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),d(m(E,{children:c(()=>{let a=e(),c=o(`div`,a);i(a,c),l(c,`max-w-none prose prose-sm md:prose-base`);let g=o(`h1`,c);i(c,g),i(g,h(`Fieldset 字段集`));let _=o(`p`,c);i(c,_),l(_,`text-sm mt-3 mb-3`),i(_,h(`Fieldset 现在同时支持两类用法：保留原有的`));let E=o(`code`,_);i(_,E),i(E,h(`Fieldset.Legend`)),i(_,h(`/`));let ce=u(_);i(_,ce),s(ce,` `);let le=o(`code`,_);i(_,le),i(le,h(`Fieldset.Label`)),i(_,h(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=u(_);i(_,ue),s(ue,` `);let de=o(`code`,_);i(_,de),i(de,h(`Fieldset.Item`)),i(_,h(`。`));let fe=o(`h2`,c);i(c,fe),i(fe,h(`何时使用`));let k=o(`ul`,c);i(c,k);let A=o(`li`,k);i(k,A),i(A,h(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=o(`li`,k);i(k,j),i(j,h(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=o(`li`,k);i(k,M),i(M,h(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let N=t(`rue:component:anchor`);i(c,N),n(()=>{let e=m(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(w,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(T,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(T,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(T,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(f,{children:[b(S,{type:`text`,children:`Cancel`}),b(S,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
  legend="Project details"
  description="用结构化 props 组织标题、说明、字段和动作。"
  variant="outlined"
  tone="primary"
  items={[
    {
      label: 'Project name',
      required: true,
      control: <Input placeholder="My awesome page" />,
      hint: '名称会显示在应用导航和工作区列表中。',
    },
    {
      label: 'Slug',
      description: '用于生成可读 URL，保存后可再次修改。',
      control: <Input placeholder="my-awesome-page" />,
    },
  ]}
  hint="保存后仍可在设置里继续调整这些字段。"
  actions={
    <>
      <Button type="text">Cancel</Button>
      <Button color="primary">Save project</Button>
    </>
  }
/>`});r(()=>d(e,c,N))});let P=t(`rue:component:anchor`);i(c,P),n(()=>{let e=m(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:x,preview:()=>y(w,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(w.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(w.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(w.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(T,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(w.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(T,{placeholder:`https://rue.design/workspace`})}),b(w.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(T,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
  <Fieldset.Legend aside="Autosave enabled">Profile settings</Fieldset.Legend>
  <Fieldset.Label as="p" className="mt-0 min-h-0 px-0 text-sm opacity-70">
    组合写法仍然可用，适合逐块拼装复杂表单。
  </Fieldset.Label>

  <Fieldset.Item
    horizontal
    label="Display name"
    required
    description="团队和评论区会优先显示这个名称。"
    control={<Input placeholder="Rue Design" />}
    hint="建议控制在 2 到 24 个字符。"
  />

  <Fieldset.Item
    horizontal
    label="Support email"
    optional
    hint="用于接收账单和故障通知。"
  >
    <Input type="email" placeholder="team@rue.design" />
  </Fieldset.Item>
</Fieldset>`});r(()=>d(e,c,P))});let F=t(`rue:component:anchor`);i(c,F),n(()=>{let e=m(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:C,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(w,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(T,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(T,{placeholder:`Hangzhou`})}]}),b(w,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(T,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(T,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
  legend="Compact settings"
  description="适合侧栏或弹窗里的轻量配置。"
  variant="outlined"
  size="small"
  items={[
    { label: 'Branch', control: <Input placeholder="main" /> },
    { label: 'Region', optional: true, control: <Input placeholder="Hangzhou" /> },
  ]}
/>

<Fieldset
  legend="Verification"
  invalid
  disabled
  items={[
    {
      label: 'Email',
      invalid: true,
      control: <Input type="email" placeholder="team@rue.design" />,
      hint: '当前邮箱尚未完成验证，请先检查收件箱。',
    },
  ]}
  hint="只读模式下仍可展示当前表单结构与校验上下文。"
/>`});r(()=>d(e,c,F))});let I=t(`rue:component:anchor`);i(c,I),n(()=>{let e=m(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>y(w,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});r(()=>d(e,c,I))});let L=t(`rue:component:anchor`);i(c,L),n(()=>{let e=m(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});r(()=>d(e,c,L))});let R=t(`rue:component:anchor`);i(c,R),n(()=>{let e=m(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page details`}),b(w.Label,{children:`Title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{children:`Slug`}),b(T,{placeholder:`my-awesome-page`}),b(w.Label,{children:`Author`}),b(T,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});r(()=>d(e,c,R))});let z=t(`rue:component:anchor`);i(c,z),n(()=>{let e=m(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(T,{className:`join-item`,placeholder:`Product name`}),b(S,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});r(()=>d(e,c,z))});let B=t(`rue:component:anchor`);i(c,B),n(()=>{let e=m(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Login`}),b(w.Label,{children:`Email`}),b(T,{type:`email`,placeholder:`Email`}),b(w.Label,{children:`Password`}),b(T,{type:`password`,placeholder:`Password`}),b(S,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});r(()=>d(e,c,B))});let V=o(`h2`,c);i(c,V),p(V,`id`,`fieldset-api`),i(V,h(`API`));let H=o(`p`,c);i(c,H),i(H,h(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let pe=o(`h3`,c);i(c,pe),i(pe,h(`Fieldset`));let me=t(`rue:component:anchor`);i(c,me),n(()=>{let e=m(O,{rows:ee});r(()=>d(e,c,me))});let he=o(`h3`,c);i(c,he),i(he,h(`Fieldset.Item`));let ge=t(`rue:component:anchor`);i(c,ge),n(()=>{let e=m(O,{rows:te});r(()=>d(e,c,ge))});let _e=o(`h3`,c);i(c,_e),i(_e,h(`复合子组件`));let ve=t(`rue:component:anchor`);i(c,ve),n(()=>{let e=m(O,{rows:ne});r(()=>d(e,c,ve))});let U=o(`div`,c);i(c,U),l(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=o(`h3`,U);i(U,W),l(W,`mt-0 mb-3 text-base font-semibold`),i(W,h(`推荐用法总结`));let G=o(`div`,U);i(U,G),l(G,`grid gap-2 text-sm md:grid-cols-2`);let K=o(`div`,G);i(G,K);let ye=o(`code`,K);i(K,ye),i(ye,h(`legend + items`)),i(K,h(`适合直接搭一整块表单`));let q=o(`div`,G);i(G,q);let be=o(`code`,q);i(q,be),i(be,h(`Fieldset.Item`)),i(q,h(`适合沉淀复用字段行`));let J=o(`div`,G);i(G,J);let xe=o(`code`,J);i(J,xe),i(xe,h(`children + Legend/Label`)),i(J,h(`继续兼容原有写法`));let Y=o(`div`,G);i(G,Y);let Se=o(`code`,Y);i(Y,Se),i(Se,h(`variant / tone / invalid`)),i(Y,h(`用来表达区块层级和状态`));let Ce=o(`h2`,c);i(c,Ce),i(Ce,h(`FAQ`));let we=o(`h3`,c);i(c,we),i(we,h(`结构化 props 和 children 可以同时用吗？`));let X=o(`p`,c);i(c,X),i(X,h(`当前实现里，`));let Te=o(`code`,X);i(X,Te),i(Te,h(`children`)),i(X,h(`仍然是最高优先级。想走推荐写法时使用`));let Ee=o(`code`,X);i(X,Ee),i(Ee,h(`legend`)),i(X,h(`、`));let De=o(`code`,X);i(X,De),i(De,h(`description`)),i(X,h(`、`));let Oe=o(`code`,X);i(X,Oe),i(Oe,h(`items`)),i(X,h(`；想自由拼装时继续直接写`));let ke=u(X);i(X,ke),s(ke,` `);let Z=o(`code`,X);i(X,Z),i(Z,h(`children`)),i(X,h(`。`));let Ae=o(`h3`,c);i(c,Ae),i(Ae,h(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=o(`p`,c);i(c,Q),i(Q,h(`简单表单优先用`));let je=o(`code`,Q);i(Q,je),i(je,h(`items`)),i(Q,h(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=u(Q);i(Q,Me),s(Me,` `);let Ne=o(`code`,Q);i(Q,Ne),i(Ne,h(`Fieldset.Item`)),i(Q,h(`。`));let Pe=o(`h3`,c);i(c,Pe),i(Pe,h(`variant 和手写 className 会冲突吗？`));let $=o(`p`,c);i(c,$),i($,h(`不会。`));let Fe=o(`code`,$);i($,Fe),i(Fe,h(`variant`)),i($,h(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Ie=o(`code`,$);i($,Ie),i(Ie,h(`rounded-box`)),i($,h(`、`));let Le=o(`code`,$);i($,Le),i(Le,h(`border`)),i($,h(`、`));let Re=o(`code`,$);return i($,Re),i(Re,h(`bg-*`)),i($,h(`等类名做局部覆盖。`)),a})}),g,_),g})};export{re as default};