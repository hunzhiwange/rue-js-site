import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h,y as g}from"./vapor-runtime-EUvELKQT.js";import{a as _,n as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as y,t as b}from"./src-BI4ToZNE.js";import{n as x}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as S}from"./Code-BdVklNCb.js";import{t as C}from"./button-XeSvxSnH.js";import{t as w}from"./tabs-Brdd3EMz.js";import{t as T}from"./fieldset-BqrI1BdQ.js";import{t as E}from"./input-Bzhj1mgb.js";var D=e=>c(t=>{let i=a(`div`,t);m(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=a(`div`,i);r(i,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let f=a(`div`,s);r(s,f);let g=a(`h2`,f);r(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;h(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(f,v),l(()=>{let t=e.summary?c(()=>{let t=n(),i=a(`p`,t);r(t,i),m(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(i,s),l(()=>{let t=e.summary;h(()=>u(t,i,s))}),t}):``;h(()=>u(t,f,v))});let y=o(`rue:component:anchor`);r(i,y),l(()=>{let t=p(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>u(t,i,y))});let b=o(`rue:slot:anchor`);return r(i,b),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=p(S,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>u(n,t,i))}),t});h(()=>u(t,i,b))}),i}),O=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let _=a(`th`,g);r(g,_),r(_,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:S,tabStates:w,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>t(()=>({tabRecommended:_(`ref:1:0`,()=>s(`preview`)),tabItem:_(`ref:1:1`,()=>s(`preview`)),tabStates:_(`ref:1:2`,()=>s(`preview`)),tabBasic:_(`ref:1:3`,()=>s(`preview`)),tabBorder:_(`ref:1:4`,()=>s(`preview`)),tabMultiple:_(`ref:1:5`,()=>s(`preview`)),tabJoin:_(`ref:1:6`,()=>s(`preview`)),tabLogin:_(`ref:1:7`,()=>s(`preview`))})));return c(t=>{let s=n(),_=o(`rue:component:anchor`);return r(s,_),u(p(x,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Fieldset 字段集`));let _=a(`p`,s);r(s,_),m(_,`text-sm mt-3 mb-3`),r(_,d(`Fieldset 现在同时支持两类用法：保留原有的`));let x=a(`code`,_);r(_,x),r(x,d(`Fieldset.Legend`)),r(_,d(`/`));let ce=i(_);r(_,ce),f(ce,` `);let le=a(`code`,_);r(_,le),r(le,d(`Fieldset.Label`)),r(_,d(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=i(_);r(_,ue),f(ue,` `);let de=a(`code`,_);r(_,de),r(de,d(`Fieldset.Item`)),r(_,d(`。`));let fe=a(`h2`,s);r(s,fe),r(fe,d(`何时使用`));let k=a(`ul`,s);r(s,k);let A=a(`li`,k);r(k,A),r(A,d(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=a(`li`,k);r(k,j),r(j,d(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=a(`li`,k);r(k,M),r(M,d(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let N=o(`rue:component:anchor`);r(s,N),l(()=>{let e=p(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(T,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(E,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(E,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(E,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(g,{children:[b(C,{type:`text`,children:`Cancel`}),b(C,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});h(()=>u(e,s,N))});let P=o(`rue:component:anchor`);r(s,P),l(()=>{let e=p(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:S,preview:()=>y(T,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(T.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(T.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(T.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(E,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(T.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(E,{placeholder:`https://rue.design/workspace`})}),b(T.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(E,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});h(()=>u(e,s,P))});let F=o(`rue:component:anchor`);r(s,F),l(()=>{let e=p(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:w,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(T,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(E,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(E,{placeholder:`Hangzhou`})}]}),b(T,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(E,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(E,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});h(()=>u(e,s,F))});let I=o(`rue:component:anchor`);r(s,I),l(()=>{let e=p(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>y(T,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(T.Legend,{children:`Page title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});h(()=>u(e,s,I))});let L=o(`rue:component:anchor`);r(s,L),l(()=>{let e=p(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Page title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});h(()=>u(e,s,L))});let R=o(`rue:component:anchor`);r(s,R),l(()=>{let e=p(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Page details`}),b(T.Label,{children:`Title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{children:`Slug`}),b(E,{placeholder:`my-awesome-page`}),b(T.Label,{children:`Author`}),b(E,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});h(()=>u(e,s,R))});let z=o(`rue:component:anchor`);r(s,z),l(()=>{let e=p(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(E,{className:`join-item`,placeholder:`Product name`}),b(C,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});h(()=>u(e,s,z))});let B=o(`rue:component:anchor`);r(s,B),l(()=>{let e=p(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Login`}),b(T.Label,{children:`Email`}),b(E,{type:`email`,placeholder:`Email`}),b(T.Label,{children:`Password`}),b(E,{type:`password`,placeholder:`Password`}),b(C,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});h(()=>u(e,s,B))});let V=a(`h2`,s);r(s,V),e(V,`id`,`fieldset-api`),r(V,d(`API`));let H=a(`p`,s);r(s,H),r(H,d(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let pe=a(`h3`,s);r(s,pe),r(pe,d(`Fieldset`));let me=o(`rue:component:anchor`);r(s,me),l(()=>{let e=p(O,{rows:ee});h(()=>u(e,s,me))});let he=a(`h3`,s);r(s,he),r(he,d(`Fieldset.Item`));let ge=o(`rue:component:anchor`);r(s,ge),l(()=>{let e=p(O,{rows:te});h(()=>u(e,s,ge))});let _e=a(`h3`,s);r(s,_e),r(_e,d(`复合子组件`));let ve=o(`rue:component:anchor`);r(s,ve),l(()=>{let e=p(O,{rows:ne});h(()=>u(e,s,ve))});let U=a(`div`,s);r(s,U),m(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=a(`h3`,U);r(U,W),m(W,`mt-0 mb-3 text-base font-semibold`),r(W,d(`推荐用法总结`));let G=a(`div`,U);r(U,G),m(G,`grid gap-2 text-sm md:grid-cols-2`);let K=a(`div`,G);r(G,K);let ye=a(`code`,K);r(K,ye),r(ye,d(`legend + items`)),r(K,d(`适合直接搭一整块表单`));let q=a(`div`,G);r(G,q);let be=a(`code`,q);r(q,be),r(be,d(`Fieldset.Item`)),r(q,d(`适合沉淀复用字段行`));let J=a(`div`,G);r(G,J);let xe=a(`code`,J);r(J,xe),r(xe,d(`children + Legend/Label`)),r(J,d(`继续兼容原有写法`));let Y=a(`div`,G);r(G,Y);let Se=a(`code`,Y);r(Y,Se),r(Se,d(`variant / tone / invalid`)),r(Y,d(`用来表达区块层级和状态`));let Ce=a(`h2`,s);r(s,Ce),r(Ce,d(`FAQ`));let we=a(`h3`,s);r(s,we),r(we,d(`结构化 props 和 children 可以同时用吗？`));let X=a(`p`,s);r(s,X),r(X,d(`当前实现里，`));let Te=a(`code`,X);r(X,Te),r(Te,d(`children`)),r(X,d(`仍然是最高优先级。想走推荐写法时使用`));let Ee=a(`code`,X);r(X,Ee),r(Ee,d(`legend`)),r(X,d(`、`));let De=a(`code`,X);r(X,De),r(De,d(`description`)),r(X,d(`、`));let Oe=a(`code`,X);r(X,Oe),r(Oe,d(`items`)),r(X,d(`；想自由拼装时继续直接写`));let ke=i(X);r(X,ke),f(ke,` `);let Z=a(`code`,X);r(X,Z),r(Z,d(`children`)),r(X,d(`。`));let Ae=a(`h3`,s);r(s,Ae),r(Ae,d(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=a(`p`,s);r(s,Q),r(Q,d(`简单表单优先用`));let je=a(`code`,Q);r(Q,je),r(je,d(`items`)),r(Q,d(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=i(Q);r(Q,Me),f(Me,` `);let Ne=a(`code`,Q);r(Q,Ne),r(Ne,d(`Fieldset.Item`)),r(Q,d(`。`));let Pe=a(`h3`,s);r(s,Pe),r(Pe,d(`variant 和手写 className 会冲突吗？`));let $=a(`p`,s);r(s,$),r($,d(`不会。`));let Fe=a(`code`,$);r($,Fe),r(Fe,d(`variant`)),r($,d(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Ie=a(`code`,$);r($,Ie),r(Ie,d(`rounded-box`)),r($,d(`、`));let Le=a(`code`,$);r($,Le),r(Le,d(`border`)),r($,d(`、`));let Re=a(`code`,$);return r($,Re),r(Re,d(`bg-*`)),r($,d(`等类名做局部覆盖。`)),t})}),s,_),s})};export{re as default};