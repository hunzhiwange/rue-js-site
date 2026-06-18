import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,p as d,pt as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as y,i as b}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as x}from"./Code-CZqShVUj.js";import{t as S}from"./button-CyhsFe_V.js";import{t as C}from"./tabs-BBuGEPV7.js";import{t as w}from"./fieldset-CXBmdGMT.js";import{t as T}from"./input-2bBycoUP.js";import{r as E}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var D=r=>u(c=>{let l=i(`div`,c);h(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=i(`div`,l);n(l,d),h(d,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,d);n(d,f);let p=i(`h2`,f);n(f,p),h(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let _=a(`rue:slot:anchor`);n(p,_),o(()=>{let e=r.title;t(()=>m(e,p,_))});let v=a(`rue:slot:anchor`);n(f,v),o(()=>{let e=r.summary?u(()=>{let e=s(),c=i(`p`,e);n(e,c),h(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>m(e,c,l))}),e}):``;t(()=>m(e,f,v))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=g(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>m(e,l,y))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?r.preview():u(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=g(x,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,i))}),e});t(()=>m(e,l,b))}),l}),O=r=>u(l=>{let d=i(`div`,l);h(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,d);n(d,f),h(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let g=i(`tr`,p);n(p,g);let _=i(`th`,g);n(g,_),n(_,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,d,f)=>{m(u(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>m(n,d,f))});let p=i(`td`,l);n(l,p);let h=a(`rue:slot:anchor`);n(p,h),o(()=>{let n=e.description;t(()=>m(n,p,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>m(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>m(n,b,x))}),r}),r,l)}})}),d}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:x,tabStates:C,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>p(()=>({tabRecommended:_(`ref:1:0`,()=>r(`preview`)),tabItem:_(`ref:1:1`,()=>r(`preview`)),tabStates:_(`ref:1:2`,()=>r(`preview`)),tabBasic:_(`ref:1:3`,()=>r(`preview`)),tabBorder:_(`ref:1:4`,()=>r(`preview`)),tabMultiple:_(`ref:1:5`,()=>r(`preview`)),tabJoin:_(`ref:1:6`,()=>r(`preview`)),tabLogin:_(`ref:1:7`,()=>r(`preview`))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(E,{children:u(()=>{let r=s(),u=i(`div`,r);n(r,u),h(u,`max-w-none prose prose-sm md:prose-base`);let p=i(`h1`,u);n(u,p),n(p,e(`Fieldset 字段集`));let _=i(`p`,u);n(u,_),h(_,`text-sm mt-3 mb-3`),n(_,e(`Fieldset 现在同时支持两类用法：保留原有的`));let E=i(`code`,_);n(_,E),n(E,e(`Fieldset.Legend`)),n(_,e(`/`));let ce=l(_);n(_,ce),f(ce,` `);let le=i(`code`,_);n(_,le),n(le,e(`Fieldset.Label`)),n(_,e(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=l(_);n(_,ue),f(ue,` `);let de=i(`code`,_);n(_,de),n(de,e(`Fieldset.Item`)),n(_,e(`。`));let fe=i(`h2`,u);n(u,fe),n(fe,e(`何时使用`));let k=i(`ul`,u);n(u,k);let A=i(`li`,k);n(k,A),n(A,e(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=i(`li`,k);n(k,j),n(j,e(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=i(`li`,k);n(k,M),n(M,e(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let N=a(`rue:component:anchor`);n(u,N),o(()=>{let e=g(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(w,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(T,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(T,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(T,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(d,{children:[b(S,{type:`text`,children:`Cancel`}),b(S,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});t(()=>m(e,u,N))});let P=a(`rue:component:anchor`);n(u,P),o(()=>{let e=g(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:x,preview:()=>y(w,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(w.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(w.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(w.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(T,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(w.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(T,{placeholder:`https://rue.design/workspace`})}),b(w.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(T,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});t(()=>m(e,u,P))});let F=a(`rue:component:anchor`);n(u,F),o(()=>{let e=g(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:C,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(w,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(T,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(T,{placeholder:`Hangzhou`})}]}),b(w,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(T,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(T,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});t(()=>m(e,u,F))});let I=a(`rue:component:anchor`);n(u,I),o(()=>{let e=g(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>y(w,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});t(()=>m(e,u,I))});let L=a(`rue:component:anchor`);n(u,L),o(()=>{let e=g(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});t(()=>m(e,u,L))});let R=a(`rue:component:anchor`);n(u,R),o(()=>{let e=g(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page details`}),b(w.Label,{children:`Title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{children:`Slug`}),b(T,{placeholder:`my-awesome-page`}),b(w.Label,{children:`Author`}),b(T,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});t(()=>m(e,u,R))});let z=a(`rue:component:anchor`);n(u,z),o(()=>{let e=g(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(T,{className:`join-item`,placeholder:`Product name`}),b(S,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});t(()=>m(e,u,z))});let B=a(`rue:component:anchor`);n(u,B),o(()=>{let e=g(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Login`}),b(w.Label,{children:`Email`}),b(T,{type:`email`,placeholder:`Email`}),b(w.Label,{children:`Password`}),b(T,{type:`password`,placeholder:`Password`}),b(S,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});t(()=>m(e,u,B))});let V=i(`h2`,u);n(u,V),c(V,`id`,`fieldset-api`),n(V,e(`API`));let H=i(`p`,u);n(u,H),n(H,e(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let pe=i(`h3`,u);n(u,pe),n(pe,e(`Fieldset`));let me=a(`rue:component:anchor`);n(u,me),o(()=>{let e=g(O,{rows:ee});t(()=>m(e,u,me))});let he=i(`h3`,u);n(u,he),n(he,e(`Fieldset.Item`));let ge=a(`rue:component:anchor`);n(u,ge),o(()=>{let e=g(O,{rows:te});t(()=>m(e,u,ge))});let _e=i(`h3`,u);n(u,_e),n(_e,e(`复合子组件`));let ve=a(`rue:component:anchor`);n(u,ve),o(()=>{let e=g(O,{rows:ne});t(()=>m(e,u,ve))});let U=i(`div`,u);n(u,U),h(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=i(`h3`,U);n(U,W),h(W,`mt-0 mb-3 text-base font-semibold`),n(W,e(`推荐用法总结`));let G=i(`div`,U);n(U,G),h(G,`grid gap-2 text-sm md:grid-cols-2`);let K=i(`div`,G);n(G,K);let ye=i(`code`,K);n(K,ye),n(ye,e(`legend + items`)),n(K,e(`适合直接搭一整块表单`));let q=i(`div`,G);n(G,q);let be=i(`code`,q);n(q,be),n(be,e(`Fieldset.Item`)),n(q,e(`适合沉淀复用字段行`));let J=i(`div`,G);n(G,J);let xe=i(`code`,J);n(J,xe),n(xe,e(`children + Legend/Label`)),n(J,e(`继续兼容原有写法`));let Y=i(`div`,G);n(G,Y);let Se=i(`code`,Y);n(Y,Se),n(Se,e(`variant / tone / invalid`)),n(Y,e(`用来表达区块层级和状态`));let Ce=i(`h2`,u);n(u,Ce),n(Ce,e(`FAQ`));let we=i(`h3`,u);n(u,we),n(we,e(`结构化 props 和 children 可以同时用吗？`));let X=i(`p`,u);n(u,X),n(X,e(`当前实现里，`));let Te=i(`code`,X);n(X,Te),n(Te,e(`children`)),n(X,e(`仍然是最高优先级。想走推荐写法时使用`));let Ee=i(`code`,X);n(X,Ee),n(Ee,e(`legend`)),n(X,e(`、`));let De=i(`code`,X);n(X,De),n(De,e(`description`)),n(X,e(`、`));let Oe=i(`code`,X);n(X,Oe),n(Oe,e(`items`)),n(X,e(`；想自由拼装时继续直接写`));let ke=l(X);n(X,ke),f(ke,` `);let Z=i(`code`,X);n(X,Z),n(Z,e(`children`)),n(X,e(`。`));let Ae=i(`h3`,u);n(u,Ae),n(Ae,e(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=i(`p`,u);n(u,Q),n(Q,e(`简单表单优先用`));let je=i(`code`,Q);n(Q,je),n(je,e(`items`)),n(Q,e(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=l(Q);n(Q,Me),f(Me,` `);let Ne=i(`code`,Q);n(Q,Ne),n(Ne,e(`Fieldset.Item`)),n(Q,e(`。`));let Pe=i(`h3`,u);n(u,Pe),n(Pe,e(`variant 和手写 className 会冲突吗？`));let $=i(`p`,u);n(u,$),n($,e(`不会。`));let Fe=i(`code`,$);n($,Fe),n(Fe,e(`variant`)),n($,e(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Ie=i(`code`,$);n($,Ie),n(Ie,e(`rounded-box`)),n($,e(`、`));let Le=i(`code`,$);n($,Le),n(Le,e(`border`)),n($,e(`、`));let Re=i(`code`,$);return n($,Re),n(Re,e(`bg-*`)),n($,e(`等类名做局部覆盖。`)),r})}),p,_),p})};export{re as default};