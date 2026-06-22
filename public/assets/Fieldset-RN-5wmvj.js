import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,m as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as y,o as b}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as x}from"./Code-C5NjdoiC.js";import{t as S}from"./button-CgV0EoO3.js";import{t as C}from"./tabs-C4UF43sZ.js";import{t as w}from"./fieldset-CkYBhlq8.js";import{t as T}from"./input-CouJaqB5.js";import{r as E}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var D=n=>s(r=>{let i=p(`div`,r);f(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=p(`div`,i);e(i,a),f(a,`flex flex-wrap items-start justify-between gap-3`);let c=p(`div`,a);e(a,c);let d=p(`h2`,c);e(c,d),f(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(d,o(`# `));let _=g(`rue:slot:anchor`);e(d,_),t(()=>{let e=n.title;h(()=>u(e,d,_))});let v=g(`rue:slot:anchor`);e(c,v),t(()=>{let r=n.summary?s(()=>{let r=l(),i=p(`p`,r);e(r,i),f(i,`m-0 text-sm opacity-70`);let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;h(()=>u(e,i,a))}),r}):``;h(()=>u(r,c,v))});let y=g(`rue:component:anchor`);e(i,y),t(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});h(()=>u(e,i,y))});let b=g(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?n.preview():s(()=>{let r=l(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(x,{className:`mt-2`,lang:`tsx`,code:n.code});h(()=>u(e,r,i))}),r});h(()=>u(r,i,b))}),i}),O=n=>s(r=>{let i=p(`div`,r);f(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=p(`table`,i);e(i,c),f(c,`table table-zebra`);let d=p(`thead`,c);e(c,d);let m=p(`tr`,d);e(d,m);let _=p(`th`,m);e(m,_),e(_,o(`属性`));let y=p(`th`,m);e(m,y),e(y,o(`说明`));let b=p(`th`,m);e(m,b),e(b,o(`类型`));let x=p(`th`,m);e(m,x),e(x,o(`默认值`));let S=p(`tbody`,c);e(c,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,c)=>{u(s(()=>{let r=l(),i=p(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=p(`td`,i);e(i,o);let s=p(`code`,o);e(o,s);let c=g(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;h(()=>u(e,s,c))});let d=p(`td`,i);e(i,d);let f=g(`rue:slot:anchor`);e(d,f),t(()=>{let e=n.description;h(()=>u(e,d,f))});let m=p(`td`,i);e(i,m);let _=p(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>u(e,_,v))});let y=p(`td`,i);e(i,y);let b=p(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>u(e,b,x))}),r}),r,i)}})}),i}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，使用 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`展示基础 legend 组合写法，并支持 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`支持 label / p / span / div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:x,tabStates:C,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>d(()=>({tabRecommended:_(`ref:1:0`,()=>n(`preview`)),tabItem:_(`ref:1:1`,()=>n(`preview`)),tabStates:_(`ref:1:2`,()=>n(`preview`)),tabBasic:_(`ref:1:3`,()=>n(`preview`)),tabBorder:_(`ref:1:4`,()=>n(`preview`)),tabMultiple:_(`ref:1:5`,()=>n(`preview`)),tabJoin:_(`ref:1:6`,()=>n(`preview`)),tabLogin:_(`ref:1:7`,()=>n(`preview`))})));return s(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(E,{children:s(()=>{let n=l(),s=p(`div`,n);e(n,s),f(s,`max-w-none prose prose-sm md:prose-base`);let d=p(`h1`,s);e(s,d),e(d,o(`Fieldset 字段集`));let _=p(`p`,s);e(s,_),f(_,`text-sm mt-3 mb-3`),e(_,o(`Fieldset 现在同时支持两类用法：展示基础的`));let E=p(`code`,_);e(_,E),e(E,o(`Fieldset.Legend`)),e(_,o(`/`));let ce=r(_);e(_,ce),i(ce,` `);let le=p(`code`,_);e(_,le),e(le,o(`Fieldset.Label`)),e(_,o(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=r(_);e(_,ue),i(ue,` `);let de=p(`code`,_);e(_,de),e(de,o(`Fieldset.Item`)),e(_,o(`。`));let fe=p(`h2`,s);e(s,fe),e(fe,o(`何时使用`));let k=p(`ul`,s);e(s,k);let A=p(`li`,k);e(k,A),e(A,o(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=p(`li`,k);e(k,j),e(j,o(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=p(`li`,k);e(k,M),e(M,o(`希望小表单走结构化 props，大表单展示基础 JSX 组合写法。`));let N=g(`rue:component:anchor`);e(s,N),t(()=>{let e=m(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>y(w,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:y(T,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:y(T,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:y(T,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:b(c,{children:[y(S,{type:`text`,children:`Cancel`}),y(S,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});h(()=>u(e,s,N))});let P=g(`rue:component:anchor`);e(s,P),t(()=>{let e=m(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，可以用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:x,preview:()=>b(w,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[y(w.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),y(w.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),y(w.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:y(T,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),y(w.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:y(T,{placeholder:`https://rue.design/workspace`})}),y(w.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:y(T,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});h(()=>u(e,s,P))});let F=g(`rue:component:anchor`);e(s,F),t(()=>{let e=m(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:C,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[y(w,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:y(T,{placeholder:`main`})},{label:`Region`,optional:!0,control:y(T,{placeholder:`Hangzhou`})}]}),y(w,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:y(T,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:y(T,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});h(()=>u(e,s,F))});let I=g(`rue:component:anchor`);e(s,I),t(()=>{let e=m(D,{title:`Fieldset fieldset-legend and label`,summary:`基础示例保持不变，展示最轻量的组合写法。`,tab:re,preview:()=>b(w,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[y(w.Legend,{children:`Page title`}),y(T,{placeholder:`My awesome page`}),y(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});h(()=>u(e,s,I))});let L=g(`rue:component:anchor`);e(s,L),t(()=>{let e=m(D,{title:`Fieldset with background and border`,summary:`展示手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>b(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[y(w.Legend,{children:`Page title`}),y(T,{placeholder:`My awesome page`}),y(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});h(()=>u(e,s,L))});let R=g(`rue:component:anchor`);e(s,R),t(()=>{let e=m(D,{title:`Fieldset with multiple inputs`,summary:`基础多输入框示例保持，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>b(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[y(w.Legend,{children:`Page details`}),y(w.Label,{children:`Title`}),y(T,{placeholder:`My awesome page`}),y(w.Label,{children:`Slug`}),y(T,{placeholder:`my-awesome-page`}),y(w.Label,{children:`Author`}),y(T,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});h(()=>u(e,s,R))});let z=g(`rue:component:anchor`);e(s,z),t(()=>{let e=m(D,{title:`Fieldset with multiple join items`,summary:`基础 join 场景保持，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>b(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[y(w.Legend,{children:`Settings`}),b(`div`,{className:`join`,children:[y(T,{className:`join-item`,placeholder:`Product name`}),y(S,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});h(()=>u(e,s,z))});let B=g(`rue:component:anchor`);e(s,B),t(()=>{let e=m(D,{title:`Login form with fieldset`,summary:`登录表单示例展示，能直接对照推荐结构。`,tab:se,preview:()=>b(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[y(w.Legend,{children:`Login`}),y(w.Label,{children:`Email`}),y(T,{type:`email`,placeholder:`Email`}),y(w.Label,{children:`Password`}),y(T,{type:`password`,placeholder:`Password`}),y(S,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});h(()=>u(e,s,B))});let V=p(`h2`,s);e(s,V),a(V,`id`,`fieldset-api`),e(V,o(`API`));let H=p(`p`,s);e(s,H),e(H,o(`当前页面展示的是语义化的完整可用 API，同时展示基础 children 组合写法。`));let pe=p(`h3`,s);e(s,pe),e(pe,o(`Fieldset`));let me=g(`rue:component:anchor`);e(s,me),t(()=>{let e=m(O,{rows:ee});h(()=>u(e,s,me))});let he=p(`h3`,s);e(s,he),e(he,o(`Fieldset.Item`));let ge=g(`rue:component:anchor`);e(s,ge),t(()=>{let e=m(O,{rows:te});h(()=>u(e,s,ge))});let _e=p(`h3`,s);e(s,_e),e(_e,o(`复合子组件`));let ve=g(`rue:component:anchor`);e(s,ve),t(()=>{let e=m(O,{rows:ne});h(()=>u(e,s,ve))});let U=p(`div`,s);e(s,U),f(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=p(`h3`,U);e(U,W),f(W,`mt-0 mb-3 text-base font-semibold`),e(W,o(`推荐用法总结`));let G=p(`div`,U);e(U,G),f(G,`grid gap-2 text-sm md:grid-cols-2`);let K=p(`div`,G);e(G,K);let ye=p(`code`,K);e(K,ye),e(ye,o(`legend + items`)),e(K,o(`适合直接搭一整块表单`));let q=p(`div`,G);e(G,q);let be=p(`code`,q);e(q,be),e(be,o(`Fieldset.Item`)),e(q,o(`适合沉淀复用字段行`));let J=p(`div`,G);e(G,J);let xe=p(`code`,J);e(J,xe),e(xe,o(`children + Legend/Label`)),e(J,o(`支持基础写法`));let Y=p(`div`,G);e(G,Y);let Se=p(`code`,Y);e(Y,Se),e(Se,o(`variant / tone / invalid`)),e(Y,o(`用来表达区块层级和状态`));let Ce=p(`h2`,s);e(s,Ce),e(Ce,o(`FAQ`));let we=p(`h3`,s);e(s,we),e(we,o(`结构化 props 和 children 可以同时用吗？`));let X=p(`p`,s);e(s,X),e(X,o(`当前组件里，`));let Te=p(`code`,X);e(X,Te),e(Te,o(`children`)),e(X,o(`仍然是最高优先级。想走推荐写法时使用`));let Ee=p(`code`,X);e(X,Ee),e(Ee,o(`legend`)),e(X,o(`、`));let De=p(`code`,X);e(X,De),e(De,o(`description`)),e(X,o(`、`));let Oe=p(`code`,X);e(X,Oe),e(Oe,o(`items`)),e(X,o(`；想自由拼装时继续直接写`));let ke=r(X);e(X,ke),i(ke,` `);let Z=p(`code`,X);e(X,Z),e(Z,o(`children`)),e(X,o(`。`));let Ae=p(`h3`,s);e(s,Ae),e(Ae,o(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=p(`p`,s);e(s,Q),e(Q,o(`简单表单优先用`));let je=p(`code`,Q);e(Q,je),e(je,o(`items`)),e(Q,o(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=r(Q);e(Q,Me),i(Me,` `);let Ne=p(`code`,Q);e(Q,Ne),e(Ne,o(`Fieldset.Item`)),e(Q,o(`。`));let Pe=p(`h3`,s);e(s,Pe),e(Pe,o(`variant 和手写 className 会冲突吗？`));let $=p(`p`,s);e(s,$),e($,o(`不会。`));let Fe=p(`code`,$);e($,Fe),e(Fe,o(`variant`)),e($,o(`只是给出一套推荐容器样式，仍然可以继续叠加当前的`));let Ie=p(`code`,$);e($,Ie),e(Ie,o(`rounded-box`)),e($,o(`、`));let Le=p(`code`,$);e($,Le),e(Le,o(`border`)),e($,o(`、`));let Re=p(`code`,$);return e($,Re),e(Re,o(`bg-*`)),e($,o(`等类名做局部覆盖。`)),n})}),d,_),d})};export{re as default};