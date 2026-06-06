import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,_ as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./button-B1PhsXzm.js";import{t as w}from"./tabs-BOxm6iIN.js";import{t as T}from"./fieldset-mezqiGsv.js";import{t as E}from"./input-B3nHDIiJ.js";var D=a=>f(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=s(`div`,u);t(u,d);let h=s(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,r(`# `));let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=a.title;g(()=>p(e,h,_))});let v=i(`rue:slot:anchor`);t(d,v),n(()=>{let r=a.summary?f(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;g(()=>p(e,c,l))}),r}):``;g(()=>p(r,d,v))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?a.preview():f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:a.code});g(()=>p(t,e,r))}),e});g(()=>p(e,l,x))}),l}),O=a=>f(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,u);t(u,d),e(d,`table table-zebra`);let m=s(`thead`,d);t(d,m);let h=s(`tr`,m);t(m,h);let _=s(`th`,h);t(h,_),t(_,r(`属性`));let y=s(`th`,h);t(h,y),t(y,r(`说明`));let b=s(`th`,h);t(h,b),t(b,r(`类型`));let x=s(`th`,h);t(h,x),t(x,r(`默认值`));let S=s(`tbody`,d);t(d,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{p(f(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=s(`td`,a);t(a,f);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let t=e.description;g(()=>p(t,f,m))});let h=s(`td`,a);t(a,h);let _=s(`code`,h);t(h,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;g(()=>p(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),r}),r,a)}})}),u}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:y,tabStates:w,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>h(()=>({tabRecommended:_(`ref:1:0`,()=>d(`preview`)),tabItem:_(`ref:1:1`,()=>d(`preview`)),tabStates:_(`ref:1:2`,()=>d(`preview`)),tabBasic:_(`ref:1:3`,()=>d(`preview`)),tabBorder:_(`ref:1:4`,()=>d(`preview`)),tabMultiple:_(`ref:1:5`,()=>d(`preview`)),tabJoin:_(`ref:1:6`,()=>d(`preview`)),tabLogin:_(`ref:1:7`,()=>d(`preview`))})));return f(d=>{let h=o(),_=i(`rue:component:anchor`);return t(h,_),p(m(S,{children:f(()=>{let d=o(),f=s(`div`,d);t(d,f),e(f,`max-w-none prose prose-sm md:prose-base`);let h=s(`h1`,f);t(f,h),t(h,r(`Fieldset 字段集`));let _=s(`p`,f);t(f,_),e(_,`text-sm mt-3 mb-3`),t(_,r(`Fieldset 现在同时支持两类用法：保留原有的`));let S=s(`code`,_);t(_,S),t(S,r(`Fieldset.Legend`)),t(_,r(`/`));let ce=a(_);t(_,ce),u(ce,` `);let le=s(`code`,_);t(_,le),t(le,r(`Fieldset.Label`)),t(_,r(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=a(_);t(_,ue),u(ue,` `);let de=s(`code`,_);t(_,de),t(de,r(`Fieldset.Item`)),t(_,r(`。`));let fe=s(`h2`,f);t(f,fe),t(fe,r(`何时使用`));let k=s(`ul`,f);t(f,k);let A=s(`li`,k);t(k,A),t(A,r(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=s(`li`,k);t(k,j),t(j,r(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=s(`li`,k);t(k,M),t(M,r(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let N=i(`rue:component:anchor`);t(f,N),n(()=>{let e=m(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>x(T,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:x(E,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:x(E,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:x(E,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:b(l,{children:[x(C,{type:`text`,children:`Cancel`}),x(C,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});g(()=>p(e,f,N))});let P=i(`rue:component:anchor`);t(f,P),n(()=>{let e=m(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:y,preview:()=>b(T,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[x(T.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),x(T.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),x(T.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:x(E,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),x(T.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:x(E,{placeholder:`https://rue.design/workspace`})}),x(T.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:x(E,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});g(()=>p(e,f,P))});let F=i(`rue:component:anchor`);t(f,F),n(()=>{let e=m(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:w,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(T,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:x(E,{placeholder:`main`})},{label:`Region`,optional:!0,control:x(E,{placeholder:`Hangzhou`})}]}),x(T,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:x(E,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:x(E,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});g(()=>p(e,f,F))});let I=i(`rue:component:anchor`);t(f,I),n(()=>{let e=m(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>b(T,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[x(T.Legend,{children:`Page title`}),x(E,{placeholder:`My awesome page`}),x(T.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});g(()=>p(e,f,I))});let L=i(`rue:component:anchor`);t(f,L),n(()=>{let e=m(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>b(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[x(T.Legend,{children:`Page title`}),x(E,{placeholder:`My awesome page`}),x(T.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});g(()=>p(e,f,L))});let R=i(`rue:component:anchor`);t(f,R),n(()=>{let e=m(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>b(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[x(T.Legend,{children:`Page details`}),x(T.Label,{children:`Title`}),x(E,{placeholder:`My awesome page`}),x(T.Label,{children:`Slug`}),x(E,{placeholder:`my-awesome-page`}),x(T.Label,{children:`Author`}),x(E,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});g(()=>p(e,f,R))});let z=i(`rue:component:anchor`);t(f,z),n(()=>{let e=m(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>b(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[x(T.Legend,{children:`Settings`}),b(`div`,{className:`join`,children:[x(E,{className:`join-item`,placeholder:`Product name`}),x(C,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});g(()=>p(e,f,z))});let B=i(`rue:component:anchor`);t(f,B),n(()=>{let e=m(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>b(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[x(T.Legend,{children:`Login`}),x(T.Label,{children:`Email`}),x(E,{type:`email`,placeholder:`Email`}),x(T.Label,{children:`Password`}),x(E,{type:`password`,placeholder:`Password`}),x(C,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});g(()=>p(e,f,B))});let V=s(`h2`,f);t(f,V),c(V,`id`,`fieldset-api`),t(V,r(`API`));let H=s(`p`,f);t(f,H),t(H,r(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let pe=s(`h3`,f);t(f,pe),t(pe,r(`Fieldset`));let me=i(`rue:component:anchor`);t(f,me),n(()=>{let e=m(O,{rows:ee});g(()=>p(e,f,me))});let he=s(`h3`,f);t(f,he),t(he,r(`Fieldset.Item`));let ge=i(`rue:component:anchor`);t(f,ge),n(()=>{let e=m(O,{rows:te});g(()=>p(e,f,ge))});let _e=s(`h3`,f);t(f,_e),t(_e,r(`复合子组件`));let ve=i(`rue:component:anchor`);t(f,ve),n(()=>{let e=m(O,{rows:ne});g(()=>p(e,f,ve))});let U=s(`div`,f);t(f,U),e(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=s(`h3`,U);t(U,W),e(W,`mt-0 mb-3 text-base font-semibold`),t(W,r(`推荐用法总结`));let G=s(`div`,U);t(U,G),e(G,`grid gap-2 text-sm md:grid-cols-2`);let K=s(`div`,G);t(G,K);let ye=s(`code`,K);t(K,ye),t(ye,r(`legend + items`)),t(K,r(`适合直接搭一整块表单`));let q=s(`div`,G);t(G,q);let be=s(`code`,q);t(q,be),t(be,r(`Fieldset.Item`)),t(q,r(`适合沉淀复用字段行`));let J=s(`div`,G);t(G,J);let xe=s(`code`,J);t(J,xe),t(xe,r(`children + Legend/Label`)),t(J,r(`继续兼容原有写法`));let Y=s(`div`,G);t(G,Y);let Se=s(`code`,Y);t(Y,Se),t(Se,r(`variant / tone / invalid`)),t(Y,r(`用来表达区块层级和状态`));let Ce=s(`h2`,f);t(f,Ce),t(Ce,r(`FAQ`));let we=s(`h3`,f);t(f,we),t(we,r(`结构化 props 和 children 可以同时用吗？`));let X=s(`p`,f);t(f,X),t(X,r(`当前实现里，`));let Te=s(`code`,X);t(X,Te),t(Te,r(`children`)),t(X,r(`仍然是最高优先级。想走推荐写法时使用`));let Ee=s(`code`,X);t(X,Ee),t(Ee,r(`legend`)),t(X,r(`、`));let De=s(`code`,X);t(X,De),t(De,r(`description`)),t(X,r(`、`));let Oe=s(`code`,X);t(X,Oe),t(Oe,r(`items`)),t(X,r(`；想自由拼装时继续直接写`));let ke=a(X);t(X,ke),u(ke,` `);let Z=s(`code`,X);t(X,Z),t(Z,r(`children`)),t(X,r(`。`));let Ae=s(`h3`,f);t(f,Ae),t(Ae,r(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=s(`p`,f);t(f,Q),t(Q,r(`简单表单优先用`));let je=s(`code`,Q);t(Q,je),t(je,r(`items`)),t(Q,r(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=a(Q);t(Q,Me),u(Me,` `);let Ne=s(`code`,Q);t(Q,Ne),t(Ne,r(`Fieldset.Item`)),t(Q,r(`。`));let Pe=s(`h3`,f);t(f,Pe),t(Pe,r(`variant 和手写 className 会冲突吗？`));let $=s(`p`,f);t(f,$),t($,r(`不会。`));let Fe=s(`code`,$);t($,Fe),t(Fe,r(`variant`)),t($,r(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Ie=s(`code`,$);t($,Ie),t(Ie,r(`rounded-box`)),t($,r(`、`));let Le=s(`code`,$);t($,Le),t(Le,r(`border`)),t($,r(`、`));let Re=s(`code`,$);return t($,Re),t(Re,r(`bg-*`)),t($,r(`等类名做局部覆盖。`)),d})}),h,_),h})};export{re as default};