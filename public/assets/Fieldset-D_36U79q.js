import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,pn as c,pt as l,s as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{n as b,t as x}from"./src-CCTNpCXV.js";import{t as S}from"./button-CvwbmGA0.js";import{t as C}from"./tabs-B1XdBEJF.js";import{t as w}from"./fieldset-CDa7yrbI.js";import{t as T}from"./input-X8WmXKJB.js";import{r as E}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var D=e=>m(t=>{let n=l(`div`,t);r(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=l(`div`,n);d(n,o),r(o,`flex flex-wrap items-start justify-between gap-3`);let c=l(`div`,o);d(o,c);let u=l(`h2`,c);d(c,u),r(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(u,s(`# `));let _=i(`rue:slot:anchor`);d(u,_),f(()=>{let t=e.title;p(()=>h(t,u,_))});let v=i(`rue:slot:anchor`);d(c,v),f(()=>{let t=e.summary?m(()=>{let t=a(),n=l(`p`,t);d(t,n),r(n,`m-0 text-sm opacity-70`);let o=i(`rue:slot:anchor`);return d(n,o),f(()=>{let t=e.summary;p(()=>h(t,n,o))}),t}):``;p(()=>h(t,c,v))});let b=i(`rue:component:anchor`);d(n,b),f(()=>{let t=g(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>h(t,n,b))});let x=i(`rue:slot:anchor`);return d(n,x),f(()=>{let t=e.tab.value===`preview`?e.preview():m(()=>{let t=a(),n=i(`rue:component:anchor`);return d(t,n),f(()=>{let r=g(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>h(r,t,n))}),t});p(()=>h(t,n,x))}),n}),O=e=>m(n=>{let o=l(`div`,n);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,o);d(o,c),r(c,`table table-zebra`);let u=l(`thead`,c);d(c,u);let g=l(`tr`,u);d(u,g);let _=l(`th`,g);d(g,_),d(_,s(`属性`));let y=l(`th`,g);d(g,y),d(y,s(`说明`));let b=l(`th`,g);d(g,b),d(b,s(`类型`));let x=l(`th`,g);d(g,x),d(x,s(`默认值`));let S=l(`tbody`,c);d(c,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{h(m(()=>{let n=a(),r=l(`tr`,n);d(n,r),f(()=>{t(r,`key`,String(e.prop))});let o=l(`td`,r);d(r,o);let s=l(`code`,o);d(o,s);let c=i(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.prop;p(()=>h(t,s,c))});let u=l(`td`,r);d(r,u);let m=i(`rue:slot:anchor`);d(u,m),f(()=>{let t=e.description;p(()=>h(t,u,m))});let g=l(`td`,r);d(r,g);let _=l(`code`,g);d(g,_);let v=i(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>h(t,_,v))});let y=l(`td`,r);d(r,y);let b=l(`code`,y);d(y,b);let x=i(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>h(t,b,x))}),n}),n,r)}})}),o}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，使用 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`展示基础 legend 组合写法，并支持 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`支持 label / p / span / div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:y,tabStates:C,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>e(()=>({tabRecommended:_(`ref:1:0`,()=>c(`preview`)),tabItem:_(`ref:1:1`,()=>c(`preview`)),tabStates:_(`ref:1:2`,()=>c(`preview`)),tabBasic:_(`ref:1:3`,()=>c(`preview`)),tabBorder:_(`ref:1:4`,()=>c(`preview`)),tabMultiple:_(`ref:1:5`,()=>c(`preview`)),tabJoin:_(`ref:1:6`,()=>c(`preview`)),tabLogin:_(`ref:1:7`,()=>c(`preview`))})));return m(e=>{let c=a(),_=i(`rue:component:anchor`);return d(c,_),h(g(E,{children:m(()=>{let e=a(),c=l(`div`,e);d(e,c),r(c,`max-w-none prose prose-sm md:prose-base`);let m=l(`h1`,c);d(c,m),d(m,s(`Fieldset 字段集`));let _=l(`p`,c);d(c,_),r(_,`text-sm mt-3 mb-3`),d(_,s(`Fieldset 现在同时支持两类用法：展示基础的`));let E=l(`code`,_);d(_,E),d(E,s(`Fieldset.Legend`)),d(_,s(`/`));let ce=o(_);d(_,ce),n(ce,` `);let le=l(`code`,_);d(_,le),d(le,s(`Fieldset.Label`)),d(_,s(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=o(_);d(_,ue),n(ue,` `);let de=l(`code`,_);d(_,de),d(de,s(`Fieldset.Item`)),d(_,s(`。`));let fe=l(`h2`,c);d(c,fe),d(fe,s(`何时使用`));let k=l(`ul`,c);d(c,k);let A=l(`li`,k);d(k,A),d(A,s(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=l(`li`,k);d(k,j),d(j,s(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=l(`li`,k);d(k,M),d(M,s(`希望小表单走结构化 props，大表单展示基础 JSX 组合写法。`));let N=i(`rue:component:anchor`);d(c,N),f(()=>{let e=g(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>x(w,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:x(T,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:x(T,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:x(T,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:b(u,{children:[x(S,{type:`text`,children:`Cancel`}),x(S,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});p(()=>h(e,c,N))});let P=i(`rue:component:anchor`);d(c,P),f(()=>{let e=g(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，可以用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:y,preview:()=>b(w,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[x(w.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),x(w.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),x(w.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:x(T,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),x(w.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:x(T,{placeholder:`https://rue.design/workspace`})}),x(w.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:x(T,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});p(()=>h(e,c,P))});let F=i(`rue:component:anchor`);d(c,F),f(()=>{let e=g(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:C,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(w,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:x(T,{placeholder:`main`})},{label:`Region`,optional:!0,control:x(T,{placeholder:`Hangzhou`})}]}),x(w,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:x(T,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:x(T,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});p(()=>h(e,c,F))});let I=i(`rue:component:anchor`);d(c,I),f(()=>{let e=g(D,{title:`Fieldset fieldset-legend and label`,summary:`基础示例保持不变，展示最轻量的组合写法。`,tab:re,preview:()=>b(w,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[x(w.Legend,{children:`Page title`}),x(T,{placeholder:`My awesome page`}),x(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});p(()=>h(e,c,I))});let L=i(`rue:component:anchor`);d(c,L),f(()=>{let e=g(D,{title:`Fieldset with background and border`,summary:`展示手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>b(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[x(w.Legend,{children:`Page title`}),x(T,{placeholder:`My awesome page`}),x(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});p(()=>h(e,c,L))});let R=i(`rue:component:anchor`);d(c,R),f(()=>{let e=g(D,{title:`Fieldset with multiple inputs`,summary:`基础多输入框示例保持，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>b(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[x(w.Legend,{children:`Page details`}),x(w.Label,{children:`Title`}),x(T,{placeholder:`My awesome page`}),x(w.Label,{children:`Slug`}),x(T,{placeholder:`my-awesome-page`}),x(w.Label,{children:`Author`}),x(T,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});p(()=>h(e,c,R))});let z=i(`rue:component:anchor`);d(c,z),f(()=>{let e=g(D,{title:`Fieldset with multiple join items`,summary:`基础 join 场景保持，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>b(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[x(w.Legend,{children:`Settings`}),b(`div`,{className:`join`,children:[x(T,{className:`join-item`,placeholder:`Product name`}),x(S,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});p(()=>h(e,c,z))});let B=i(`rue:component:anchor`);d(c,B),f(()=>{let e=g(D,{title:`Login form with fieldset`,summary:`登录表单示例展示，能直接对照推荐结构。`,tab:se,preview:()=>b(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[x(w.Legend,{children:`Login`}),x(w.Label,{children:`Email`}),x(T,{type:`email`,placeholder:`Email`}),x(w.Label,{children:`Password`}),x(T,{type:`password`,placeholder:`Password`}),x(S,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});p(()=>h(e,c,B))});let V=l(`h2`,c);d(c,V),t(V,`id`,`fieldset-api`),d(V,s(`API`));let H=l(`p`,c);d(c,H),d(H,s(`当前页面展示的是语义化的完整可用 API，同时展示基础 children 组合写法。`));let pe=l(`h3`,c);d(c,pe),d(pe,s(`Fieldset`));let me=i(`rue:component:anchor`);d(c,me),f(()=>{let e=g(O,{rows:ee});p(()=>h(e,c,me))});let he=l(`h3`,c);d(c,he),d(he,s(`Fieldset.Item`));let ge=i(`rue:component:anchor`);d(c,ge),f(()=>{let e=g(O,{rows:te});p(()=>h(e,c,ge))});let _e=l(`h3`,c);d(c,_e),d(_e,s(`复合子组件`));let ve=i(`rue:component:anchor`);d(c,ve),f(()=>{let e=g(O,{rows:ne});p(()=>h(e,c,ve))});let U=l(`div`,c);d(c,U),r(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=l(`h3`,U);d(U,W),r(W,`mt-0 mb-3 text-base font-semibold`),d(W,s(`推荐用法总结`));let G=l(`div`,U);d(U,G),r(G,`grid gap-2 text-sm md:grid-cols-2`);let K=l(`div`,G);d(G,K);let ye=l(`code`,K);d(K,ye),d(ye,s(`legend + items`)),d(K,s(`适合直接搭一整块表单`));let q=l(`div`,G);d(G,q);let be=l(`code`,q);d(q,be),d(be,s(`Fieldset.Item`)),d(q,s(`适合沉淀复用字段行`));let J=l(`div`,G);d(G,J);let xe=l(`code`,J);d(J,xe),d(xe,s(`children + Legend/Label`)),d(J,s(`支持基础写法`));let Y=l(`div`,G);d(G,Y);let Se=l(`code`,Y);d(Y,Se),d(Se,s(`variant / tone / invalid`)),d(Y,s(`用来表达区块层级和状态`));let Ce=l(`h2`,c);d(c,Ce),d(Ce,s(`FAQ`));let we=l(`h3`,c);d(c,we),d(we,s(`结构化 props 和 children 可以同时用吗？`));let X=l(`p`,c);d(c,X),d(X,s(`当前组件里，`));let Te=l(`code`,X);d(X,Te),d(Te,s(`children`)),d(X,s(`仍然是最高优先级。想走推荐写法时使用`));let Ee=l(`code`,X);d(X,Ee),d(Ee,s(`legend`)),d(X,s(`、`));let De=l(`code`,X);d(X,De),d(De,s(`description`)),d(X,s(`、`));let Oe=l(`code`,X);d(X,Oe),d(Oe,s(`items`)),d(X,s(`；想自由拼装时继续直接写`));let ke=o(X);d(X,ke),n(ke,` `);let Z=l(`code`,X);d(X,Z),d(Z,s(`children`)),d(X,s(`。`));let Ae=l(`h3`,c);d(c,Ae),d(Ae,s(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=l(`p`,c);d(c,Q),d(Q,s(`简单表单优先用`));let je=l(`code`,Q);d(Q,je),d(je,s(`items`)),d(Q,s(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=o(Q);d(Q,Me),n(Me,` `);let Ne=l(`code`,Q);d(Q,Ne),d(Ne,s(`Fieldset.Item`)),d(Q,s(`。`));let Pe=l(`h3`,c);d(c,Pe),d(Pe,s(`variant 和手写 className 会冲突吗？`));let $=l(`p`,c);d(c,$),d($,s(`不会。`));let Fe=l(`code`,$);d($,Fe),d(Fe,s(`variant`)),d($,s(`只是给出一套推荐容器样式，仍然可以继续叠加当前的`));let Ie=l(`code`,$);d($,Ie),d(Ie,s(`rounded-box`)),d($,s(`、`));let Le=l(`code`,$);d($,Le),d(Le,s(`border`)),d($,s(`、`));let Re=l(`code`,$);return d($,Re),d(Re,s(`bg-*`)),d($,s(`等类名做局部覆盖。`)),e})}),c,_),c})};export{re as default};