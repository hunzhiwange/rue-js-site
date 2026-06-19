import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,gt as c,l,nt as u,o as d,p as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as y,i as b}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as x}from"./Code-D5UqTwV6.js";import{t as S}from"./button-CiwrjbTY.js";import{t as C}from"./tabs-DRfs918f.js";import{t as w}from"./fieldset-DTE1US8N.js";import{t as T}from"./input-CRYoS0G3.js";import{r as E}from"./SidebarPlaygroundDesign-CWudvLqE.js";var D=n=>l(i=>{let o=h(`div`,i);g(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=h(`div`,o);a(o,c),g(c,`flex flex-wrap items-start justify-between gap-3`);let f=h(`div`,c);a(c,f);let p=h(`h2`,f);a(f,p),g(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(p,u(`# `));let _=e(`rue:slot:anchor`);a(p,_),t(()=>{let e=n.title;r(()=>d(e,p,_))});let v=e(`rue:slot:anchor`);a(f,v),t(()=>{let i=n.summary?l(()=>{let i=s(),o=h(`p`,i);a(i,o),g(o,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return a(o,c),t(()=>{let e=n.summary;r(()=>d(e,o,c))}),i}):``;r(()=>d(i,f,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,o,y))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.tab.value===`preview`?n.preview():l(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=m(x,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>d(e,i,o))}),i});r(()=>d(i,o,b))}),o}),O=n=>l(i=>{let c=h(`div`,i);g(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=h(`table`,c);a(c,f),g(f,`table table-zebra`);let p=h(`thead`,f);a(f,p);let m=h(`tr`,p);a(p,m);let _=h(`th`,m);a(m,_),a(_,u(`属性`));let y=h(`th`,m);a(m,y),a(y,u(`说明`));let b=h(`th`,m);a(m,b),a(b,u(`类型`));let x=h(`th`,m);a(m,x),a(x,u(`默认值`));let S=h(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,u,f)=>{d(l(()=>{let i=s(),c=h(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=h(`td`,c);a(c,l);let u=h(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let p=h(`td`,c);a(c,p);let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.description;r(()=>d(e,p,m))});let g=h(`td`,c);a(c,g);let _=h(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=h(`td`,c);a(c,y);let b=h(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,c)}})}),c}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:x,tabStates:C,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>i(()=>({tabRecommended:_(`ref:1:0`,()=>n(`preview`)),tabItem:_(`ref:1:1`,()=>n(`preview`)),tabStates:_(`ref:1:2`,()=>n(`preview`)),tabBasic:_(`ref:1:3`,()=>n(`preview`)),tabBorder:_(`ref:1:4`,()=>n(`preview`)),tabMultiple:_(`ref:1:5`,()=>n(`preview`)),tabJoin:_(`ref:1:6`,()=>n(`preview`)),tabLogin:_(`ref:1:7`,()=>n(`preview`))})));return l(n=>{let i=s(),_=e(`rue:component:anchor`);return a(i,_),d(m(E,{children:l(()=>{let n=s(),i=h(`div`,n);a(n,i),g(i,`max-w-none prose prose-sm md:prose-base`);let l=h(`h1`,i);a(i,l),a(l,u(`Fieldset 字段集`));let _=h(`p`,i);a(i,_),g(_,`text-sm mt-3 mb-3`),a(_,u(`Fieldset 现在同时支持两类用法：保留原有的`));let E=h(`code`,_);a(_,E),a(E,u(`Fieldset.Legend`)),a(_,u(`/`));let ce=p(_);a(_,ce),c(ce,` `);let le=h(`code`,_);a(_,le),a(le,u(`Fieldset.Label`)),a(_,u(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=p(_);a(_,ue),c(ue,` `);let de=h(`code`,_);a(_,de),a(de,u(`Fieldset.Item`)),a(_,u(`。`));let fe=h(`h2`,i);a(i,fe),a(fe,u(`何时使用`));let k=h(`ul`,i);a(i,k);let A=h(`li`,k);a(k,A),a(A,u(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=h(`li`,k);a(k,j),a(j,u(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=h(`li`,k);a(k,M),a(M,u(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let N=e(`rue:component:anchor`);a(i,N),t(()=>{let e=m(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(w,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(T,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(T,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(T,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(f,{children:[b(S,{type:`text`,children:`Cancel`}),b(S,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});r(()=>d(e,i,N))});let P=e(`rue:component:anchor`);a(i,P),t(()=>{let e=m(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:x,preview:()=>y(w,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(w.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(w.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(w.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(T,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(w.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(T,{placeholder:`https://rue.design/workspace`})}),b(w.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(T,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});r(()=>d(e,i,P))});let F=e(`rue:component:anchor`);a(i,F),t(()=>{let e=m(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:C,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(w,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(T,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(T,{placeholder:`Hangzhou`})}]}),b(w,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(T,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(T,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});r(()=>d(e,i,F))});let I=e(`rue:component:anchor`);a(i,I),t(()=>{let e=m(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>y(w,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});r(()=>d(e,i,I))});let L=e(`rue:component:anchor`);a(i,L),t(()=>{let e=m(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});r(()=>d(e,i,L))});let R=e(`rue:component:anchor`);a(i,R),t(()=>{let e=m(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page details`}),b(w.Label,{children:`Title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{children:`Slug`}),b(T,{placeholder:`my-awesome-page`}),b(w.Label,{children:`Author`}),b(T,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});r(()=>d(e,i,R))});let z=e(`rue:component:anchor`);a(i,z),t(()=>{let e=m(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(T,{className:`join-item`,placeholder:`Product name`}),b(S,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});r(()=>d(e,i,z))});let B=e(`rue:component:anchor`);a(i,B),t(()=>{let e=m(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Login`}),b(w.Label,{children:`Email`}),b(T,{type:`email`,placeholder:`Email`}),b(w.Label,{children:`Password`}),b(T,{type:`password`,placeholder:`Password`}),b(S,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});r(()=>d(e,i,B))});let V=h(`h2`,i);a(i,V),o(V,`id`,`fieldset-api`),a(V,u(`API`));let H=h(`p`,i);a(i,H),a(H,u(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let pe=h(`h3`,i);a(i,pe),a(pe,u(`Fieldset`));let me=e(`rue:component:anchor`);a(i,me),t(()=>{let e=m(O,{rows:ee});r(()=>d(e,i,me))});let he=h(`h3`,i);a(i,he),a(he,u(`Fieldset.Item`));let ge=e(`rue:component:anchor`);a(i,ge),t(()=>{let e=m(O,{rows:te});r(()=>d(e,i,ge))});let _e=h(`h3`,i);a(i,_e),a(_e,u(`复合子组件`));let ve=e(`rue:component:anchor`);a(i,ve),t(()=>{let e=m(O,{rows:ne});r(()=>d(e,i,ve))});let U=h(`div`,i);a(i,U),g(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=h(`h3`,U);a(U,W),g(W,`mt-0 mb-3 text-base font-semibold`),a(W,u(`推荐用法总结`));let G=h(`div`,U);a(U,G),g(G,`grid gap-2 text-sm md:grid-cols-2`);let K=h(`div`,G);a(G,K);let ye=h(`code`,K);a(K,ye),a(ye,u(`legend + items`)),a(K,u(`适合直接搭一整块表单`));let q=h(`div`,G);a(G,q);let be=h(`code`,q);a(q,be),a(be,u(`Fieldset.Item`)),a(q,u(`适合沉淀复用字段行`));let J=h(`div`,G);a(G,J);let xe=h(`code`,J);a(J,xe),a(xe,u(`children + Legend/Label`)),a(J,u(`继续兼容原有写法`));let Y=h(`div`,G);a(G,Y);let Se=h(`code`,Y);a(Y,Se),a(Se,u(`variant / tone / invalid`)),a(Y,u(`用来表达区块层级和状态`));let Ce=h(`h2`,i);a(i,Ce),a(Ce,u(`FAQ`));let we=h(`h3`,i);a(i,we),a(we,u(`结构化 props 和 children 可以同时用吗？`));let X=h(`p`,i);a(i,X),a(X,u(`当前实现里，`));let Te=h(`code`,X);a(X,Te),a(Te,u(`children`)),a(X,u(`仍然是最高优先级。想走推荐写法时使用`));let Ee=h(`code`,X);a(X,Ee),a(Ee,u(`legend`)),a(X,u(`、`));let De=h(`code`,X);a(X,De),a(De,u(`description`)),a(X,u(`、`));let Oe=h(`code`,X);a(X,Oe),a(Oe,u(`items`)),a(X,u(`；想自由拼装时继续直接写`));let ke=p(X);a(X,ke),c(ke,` `);let Z=h(`code`,X);a(X,Z),a(Z,u(`children`)),a(X,u(`。`));let Ae=h(`h3`,i);a(i,Ae),a(Ae,u(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=h(`p`,i);a(i,Q),a(Q,u(`简单表单优先用`));let je=h(`code`,Q);a(Q,je),a(je,u(`items`)),a(Q,u(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=p(Q);a(Q,Me),c(Me,` `);let Ne=h(`code`,Q);a(Q,Ne),a(Ne,u(`Fieldset.Item`)),a(Q,u(`。`));let Pe=h(`h3`,i);a(i,Pe),a(Pe,u(`variant 和手写 className 会冲突吗？`));let $=h(`p`,i);a(i,$),a($,u(`不会。`));let Fe=h(`code`,$);a($,Fe),a(Fe,u(`variant`)),a($,u(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Ie=h(`code`,$);a($,Ie),a(Ie,u(`rounded-box`)),a($,u(`、`));let Le=h(`code`,$);a($,Le),a(Le,u(`border`)),a($,u(`、`));let Re=h(`code`,$);return a($,Re),a(Re,u(`bg-*`)),a($,u(`等类名做局部覆盖。`)),n})}),i,_),i})};export{re as default};