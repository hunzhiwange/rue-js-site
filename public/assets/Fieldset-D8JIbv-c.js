import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,t as m,tt as h,y as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _,n as v}from"./vapor-helpers-vapor-DkadWylb.js";import{i as y,r as b}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as x}from"./button-BDcuIfPi.js";import{t as S}from"./tabs-DMHgT-aV.js";import{t as C}from"./fieldset-CENUOPFq.js";import{t as w}from"./input-BfzrfJFV.js";import{n as T}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as E}from"./Code-B_4lzH85.js";var D=t=>l(n=>{let f=e(`div`,n);c(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let p=e(`div`,f);a(f,p),c(p,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,p);a(p,h);let g=e(`h2`,h);a(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>d(e,g,_))});let v=s(`rue:slot:anchor`);a(h,v),o(()=>{let n=t.summary?l(()=>{let n=r(),l=e(`p`,n);a(n,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(l,u),o(()=>{let e=t.summary;i(()=>d(e,l,u))}),n}):``;i(()=>d(n,h,v))});let y=s(`rue:component:anchor`);a(f,y),o(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>d(e,f,y))});let b=s(`rue:slot:anchor`);return a(f,b),o(()=>{let e=t.tab.value===`preview`?t.preview():l(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=m(E,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>d(r,e,n))}),e});i(()=>d(e,f,b))}),f}),O=t=>l(n=>{let f=e(`div`,n);c(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,f);a(f,m),c(m,`table table-zebra`);let h=e(`thead`,m);a(m,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,u(`属性`));let y=e(`th`,g);a(g,y),a(y,u(`说明`));let b=e(`th`,g);a(g,b),a(b,u(`类型`));let x=e(`th`,g);a(g,x),a(x,u(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,u,f)=>{d(l(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{p(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let f=s(`rue:slot:anchor`);a(u,f),o(()=>{let e=t.prop;i(()=>d(e,u,f))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>d(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>d(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>d(e,b,x))}),n}),n,c)}})}),f}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:S,tabStates:E,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>t(()=>({tabRecommended:_(`ref:1:0`,()=>n(`preview`)),tabItem:_(`ref:1:1`,()=>n(`preview`)),tabStates:_(`ref:1:2`,()=>n(`preview`)),tabBasic:_(`ref:1:3`,()=>n(`preview`)),tabBorder:_(`ref:1:4`,()=>n(`preview`)),tabMultiple:_(`ref:1:5`,()=>n(`preview`)),tabJoin:_(`ref:1:6`,()=>n(`preview`)),tabLogin:_(`ref:1:7`,()=>n(`preview`))})));return l(t=>{let n=r(),_=s(`rue:component:anchor`);return a(n,_),d(m(T,{children:l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let l=e(`h1`,n);a(n,l),a(l,u(`Fieldset 字段集`));let _=e(`p`,n);a(n,_),c(_,`text-sm mt-3 mb-3`),a(_,u(`Fieldset 现在同时支持两类用法：保留原有的`));let T=e(`code`,_);a(_,T),a(T,u(`Fieldset.Legend`)),a(_,u(`/`));let ce=h(_);a(_,ce),f(ce,` `);let le=e(`code`,_);a(_,le),a(le,u(`Fieldset.Label`)),a(_,u(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=h(_);a(_,ue),f(ue,` `);let de=e(`code`,_);a(_,de),a(de,u(`Fieldset.Item`)),a(_,u(`。`));let fe=e(`h2`,n);a(n,fe),a(fe,u(`何时使用`));let k=e(`ul`,n);a(n,k);let A=e(`li`,k);a(k,A),a(A,u(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=e(`li`,k);a(k,j),a(j,u(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=e(`li`,k);a(k,M),a(M,u(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let N=s(`rue:component:anchor`);a(n,N),o(()=>{let e=m(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(C,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(w,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(w,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(w,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(g,{children:[b(x,{type:`text`,children:`Cancel`}),b(x,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});i(()=>d(e,n,N))});let P=s(`rue:component:anchor`);a(n,P),o(()=>{let e=m(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:S,preview:()=>y(C,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(C.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(C.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(C.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(w,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(C.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(w,{placeholder:`https://rue.design/workspace`})}),b(C.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(w,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});i(()=>d(e,n,P))});let F=s(`rue:component:anchor`);a(n,F),o(()=>{let e=m(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:E,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(C,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(w,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(w,{placeholder:`Hangzhou`})}]}),b(C,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(w,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(w,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});i(()=>d(e,n,F))});let I=s(`rue:component:anchor`);a(n,I),o(()=>{let e=m(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>y(C,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(C.Legend,{children:`Page title`}),b(w,{placeholder:`My awesome page`}),b(C.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});i(()=>d(e,n,I))});let L=s(`rue:component:anchor`);a(n,L),o(()=>{let e=m(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(C,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(C.Legend,{children:`Page title`}),b(w,{placeholder:`My awesome page`}),b(C.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});i(()=>d(e,n,L))});let R=s(`rue:component:anchor`);a(n,R),o(()=>{let e=m(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(C,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(C.Legend,{children:`Page details`}),b(C.Label,{children:`Title`}),b(w,{placeholder:`My awesome page`}),b(C.Label,{children:`Slug`}),b(w,{placeholder:`my-awesome-page`}),b(C.Label,{children:`Author`}),b(w,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});i(()=>d(e,n,R))});let z=s(`rue:component:anchor`);a(n,z),o(()=>{let e=m(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(C,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(C.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(w,{className:`join-item`,placeholder:`Product name`}),b(x,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});i(()=>d(e,n,z))});let B=s(`rue:component:anchor`);a(n,B),o(()=>{let e=m(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>y(C,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(C.Legend,{children:`Login`}),b(C.Label,{children:`Email`}),b(w,{type:`email`,placeholder:`Email`}),b(C.Label,{children:`Password`}),b(w,{type:`password`,placeholder:`Password`}),b(x,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});i(()=>d(e,n,B))});let V=e(`h2`,n);a(n,V),p(V,`id`,`fieldset-api`),a(V,u(`API`));let H=e(`p`,n);a(n,H),a(H,u(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let pe=e(`h3`,n);a(n,pe),a(pe,u(`Fieldset`));let me=s(`rue:component:anchor`);a(n,me),o(()=>{let e=m(O,{rows:ee});i(()=>d(e,n,me))});let he=e(`h3`,n);a(n,he),a(he,u(`Fieldset.Item`));let ge=s(`rue:component:anchor`);a(n,ge),o(()=>{let e=m(O,{rows:te});i(()=>d(e,n,ge))});let _e=e(`h3`,n);a(n,_e),a(_e,u(`复合子组件`));let ve=s(`rue:component:anchor`);a(n,ve),o(()=>{let e=m(O,{rows:ne});i(()=>d(e,n,ve))});let U=e(`div`,n);a(n,U),c(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`h3`,U);a(U,W),c(W,`mt-0 mb-3 text-base font-semibold`),a(W,u(`推荐用法总结`));let G=e(`div`,U);a(U,G),c(G,`grid gap-2 text-sm md:grid-cols-2`);let K=e(`div`,G);a(G,K);let ye=e(`code`,K);a(K,ye),a(ye,u(`legend + items`)),a(K,u(`适合直接搭一整块表单`));let q=e(`div`,G);a(G,q);let be=e(`code`,q);a(q,be),a(be,u(`Fieldset.Item`)),a(q,u(`适合沉淀复用字段行`));let J=e(`div`,G);a(G,J);let xe=e(`code`,J);a(J,xe),a(xe,u(`children + Legend/Label`)),a(J,u(`继续兼容原有写法`));let Y=e(`div`,G);a(G,Y);let Se=e(`code`,Y);a(Y,Se),a(Se,u(`variant / tone / invalid`)),a(Y,u(`用来表达区块层级和状态`));let Ce=e(`h2`,n);a(n,Ce),a(Ce,u(`FAQ`));let we=e(`h3`,n);a(n,we),a(we,u(`结构化 props 和 children 可以同时用吗？`));let X=e(`p`,n);a(n,X),a(X,u(`当前实现里，`));let Te=e(`code`,X);a(X,Te),a(Te,u(`children`)),a(X,u(`仍然是最高优先级。想走推荐写法时使用`));let Ee=e(`code`,X);a(X,Ee),a(Ee,u(`legend`)),a(X,u(`、`));let De=e(`code`,X);a(X,De),a(De,u(`description`)),a(X,u(`、`));let Oe=e(`code`,X);a(X,Oe),a(Oe,u(`items`)),a(X,u(`；想自由拼装时继续直接写`));let ke=h(X);a(X,ke),f(ke,` `);let Z=e(`code`,X);a(X,Z),a(Z,u(`children`)),a(X,u(`。`));let Ae=e(`h3`,n);a(n,Ae),a(Ae,u(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=e(`p`,n);a(n,Q),a(Q,u(`简单表单优先用`));let je=e(`code`,Q);a(Q,je),a(je,u(`items`)),a(Q,u(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=h(Q);a(Q,Me),f(Me,` `);let Ne=e(`code`,Q);a(Q,Ne),a(Ne,u(`Fieldset.Item`)),a(Q,u(`。`));let Pe=e(`h3`,n);a(n,Pe),a(Pe,u(`variant 和手写 className 会冲突吗？`));let $=e(`p`,n);a(n,$),a($,u(`不会。`));let Fe=e(`code`,$);a($,Fe),a(Fe,u(`variant`)),a($,u(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Ie=e(`code`,$);a($,Ie),a(Ie,u(`rounded-box`)),a($,u(`、`));let Le=e(`code`,$);a($,Le),a(Le,u(`border`)),a($,u(`、`));let Re=e(`code`,$);return a($,Re),a(Re,u(`bg-*`)),a($,u(`等类名做局部覆盖。`)),t})}),n,_),n})};export{re as default};