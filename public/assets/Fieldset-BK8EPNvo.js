import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,m as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as x}from"./Code-5DOEyGxf.js";import{t as S}from"./button-DL6BQoU1.js";import{t as C}from"./tabs-CWmjyn0I.js";import{t as w}from"./fieldset-Bp40oANr.js";import{t as T}from"./input-pRJNGvOG.js";import{r as E}from"./SidebarPlaygroundDesign-CS11MI8e.js";var D=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),s(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);a(f,p);let g=e(`h2`,p);a(p,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let _=o(`rue:slot:anchor`);a(g,_),i(()=>{let e=r.title;t(()=>m(e,g,_))});let v=o(`rue:slot:anchor`);a(p,v),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>m(e,l,u))}),c}):``;t(()=>m(c,p,v))});let y=o(`rue:component:anchor`);a(d,y),i(()=>{let e=h(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>m(e,d,y))});let b=o(`rue:slot:anchor`);return a(d,b),i(()=>{let e=r.tab.value===`preview`?r.preview():l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=h(x,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,s))}),e});t(()=>m(e,d,b))}),d}),O=r=>l(u=>{let d=e(`div`,u);s(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);a(d,p),s(p,`table table-zebra`);let h=e(`thead`,p);a(p,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,c(`属性`));let y=e(`th`,g);a(g,y),a(y,c(`说明`));let b=e(`th`,g);a(g,b),a(b,c(`类型`));let x=e(`th`,g);a(g,x),a(x,c(`默认值`));let S=e(`tbody`,p);a(p,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,u,d)=>{m(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{f(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=o(`rue:slot:anchor`);a(u,d),i(()=>{let e=r.prop;t(()=>m(e,u,d))});let p=e(`td`,c);a(c,p);let h=o(`rue:slot:anchor`);a(p,h),i(()=>{let e=r.description;t(()=>m(e,p,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>m(e,b,x))}),s}),s,c)}})}),d}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:x,tabStates:C,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>p(()=>({tabRecommended:_(`ref:1:0`,()=>r(`preview`)),tabItem:_(`ref:1:1`,()=>r(`preview`)),tabStates:_(`ref:1:2`,()=>r(`preview`)),tabBasic:_(`ref:1:3`,()=>r(`preview`)),tabBorder:_(`ref:1:4`,()=>r(`preview`)),tabMultiple:_(`ref:1:5`,()=>r(`preview`)),tabJoin:_(`ref:1:6`,()=>r(`preview`)),tabLogin:_(`ref:1:7`,()=>r(`preview`))})));return l(r=>{let p=n(),_=o(`rue:component:anchor`);return a(p,_),m(h(E,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,l);a(l,p),a(p,c(`Fieldset 字段集`));let _=e(`p`,l);a(l,_),s(_,`text-sm mt-3 mb-3`),a(_,c(`Fieldset 现在同时支持两类用法：保留原有的`));let E=e(`code`,_);a(_,E),a(E,c(`Fieldset.Legend`)),a(_,c(`/`));let ce=g(_);a(_,ce),d(ce,` `);let le=e(`code`,_);a(_,le),a(le,c(`Fieldset.Label`)),a(_,c(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=g(_);a(_,ue),d(ue,` `);let de=e(`code`,_);a(_,de),a(de,c(`Fieldset.Item`)),a(_,c(`。`));let fe=e(`h2`,l);a(l,fe),a(fe,c(`何时使用`));let k=e(`ul`,l);a(l,k);let A=e(`li`,k);a(k,A),a(A,c(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=e(`li`,k);a(k,j),a(j,c(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=e(`li`,k);a(k,M),a(M,c(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let N=o(`rue:component:anchor`);a(l,N),i(()=>{let e=h(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(w,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(T,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(T,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(T,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(u,{children:[b(S,{type:`text`,children:`Cancel`}),b(S,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});t(()=>m(e,l,N))});let P=o(`rue:component:anchor`);a(l,P),i(()=>{let e=h(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:x,preview:()=>y(w,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(w.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(w.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(w.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(T,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(w.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(T,{placeholder:`https://rue.design/workspace`})}),b(w.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(T,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});t(()=>m(e,l,P))});let F=o(`rue:component:anchor`);a(l,F),i(()=>{let e=h(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:C,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(w,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(T,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(T,{placeholder:`Hangzhou`})}]}),b(w,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(T,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(T,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});t(()=>m(e,l,F))});let I=o(`rue:component:anchor`);a(l,I),i(()=>{let e=h(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>y(w,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});t(()=>m(e,l,I))});let L=o(`rue:component:anchor`);a(l,L),i(()=>{let e=h(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});t(()=>m(e,l,L))});let R=o(`rue:component:anchor`);a(l,R),i(()=>{let e=h(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page details`}),b(w.Label,{children:`Title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{children:`Slug`}),b(T,{placeholder:`my-awesome-page`}),b(w.Label,{children:`Author`}),b(T,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});t(()=>m(e,l,R))});let z=o(`rue:component:anchor`);a(l,z),i(()=>{let e=h(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(T,{className:`join-item`,placeholder:`Product name`}),b(S,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});t(()=>m(e,l,z))});let B=o(`rue:component:anchor`);a(l,B),i(()=>{let e=h(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Login`}),b(w.Label,{children:`Email`}),b(T,{type:`email`,placeholder:`Email`}),b(w.Label,{children:`Password`}),b(T,{type:`password`,placeholder:`Password`}),b(S,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});t(()=>m(e,l,B))});let V=e(`h2`,l);a(l,V),f(V,`id`,`fieldset-api`),a(V,c(`API`));let H=e(`p`,l);a(l,H),a(H,c(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let pe=e(`h3`,l);a(l,pe),a(pe,c(`Fieldset`));let me=o(`rue:component:anchor`);a(l,me),i(()=>{let e=h(O,{rows:ee});t(()=>m(e,l,me))});let he=e(`h3`,l);a(l,he),a(he,c(`Fieldset.Item`));let ge=o(`rue:component:anchor`);a(l,ge),i(()=>{let e=h(O,{rows:te});t(()=>m(e,l,ge))});let _e=e(`h3`,l);a(l,_e),a(_e,c(`复合子组件`));let ve=o(`rue:component:anchor`);a(l,ve),i(()=>{let e=h(O,{rows:ne});t(()=>m(e,l,ve))});let U=e(`div`,l);a(l,U),s(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`h3`,U);a(U,W),s(W,`mt-0 mb-3 text-base font-semibold`),a(W,c(`推荐用法总结`));let G=e(`div`,U);a(U,G),s(G,`grid gap-2 text-sm md:grid-cols-2`);let K=e(`div`,G);a(G,K);let ye=e(`code`,K);a(K,ye),a(ye,c(`legend + items`)),a(K,c(`适合直接搭一整块表单`));let q=e(`div`,G);a(G,q);let be=e(`code`,q);a(q,be),a(be,c(`Fieldset.Item`)),a(q,c(`适合沉淀复用字段行`));let J=e(`div`,G);a(G,J);let xe=e(`code`,J);a(J,xe),a(xe,c(`children + Legend/Label`)),a(J,c(`继续兼容原有写法`));let Y=e(`div`,G);a(G,Y);let Se=e(`code`,Y);a(Y,Se),a(Se,c(`variant / tone / invalid`)),a(Y,c(`用来表达区块层级和状态`));let Ce=e(`h2`,l);a(l,Ce),a(Ce,c(`FAQ`));let we=e(`h3`,l);a(l,we),a(we,c(`结构化 props 和 children 可以同时用吗？`));let X=e(`p`,l);a(l,X),a(X,c(`当前实现里，`));let Te=e(`code`,X);a(X,Te),a(Te,c(`children`)),a(X,c(`仍然是最高优先级。想走推荐写法时使用`));let Ee=e(`code`,X);a(X,Ee),a(Ee,c(`legend`)),a(X,c(`、`));let De=e(`code`,X);a(X,De),a(De,c(`description`)),a(X,c(`、`));let Oe=e(`code`,X);a(X,Oe),a(Oe,c(`items`)),a(X,c(`；想自由拼装时继续直接写`));let ke=g(X);a(X,ke),d(ke,` `);let Z=e(`code`,X);a(X,Z),a(Z,c(`children`)),a(X,c(`。`));let Ae=e(`h3`,l);a(l,Ae),a(Ae,c(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=e(`p`,l);a(l,Q),a(Q,c(`简单表单优先用`));let je=e(`code`,Q);a(Q,je),a(je,c(`items`)),a(Q,c(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=g(Q);a(Q,Me),d(Me,` `);let Ne=e(`code`,Q);a(Q,Ne),a(Ne,c(`Fieldset.Item`)),a(Q,c(`。`));let Pe=e(`h3`,l);a(l,Pe),a(Pe,c(`variant 和手写 className 会冲突吗？`));let $=e(`p`,l);a(l,$),a($,c(`不会。`));let Fe=e(`code`,$);a($,Fe),a(Fe,c(`variant`)),a($,c(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Ie=e(`code`,$);a($,Ie),a(Ie,c(`rounded-box`)),a($,c(`、`));let Le=e(`code`,$);a($,Le),a(Le,c(`border`)),a($,c(`、`));let Re=e(`code`,$);return a($,Re),a(Re,c(`bg-*`)),a($,c(`等类名做局部覆盖。`)),r})}),p,_),p})};export{re as default};