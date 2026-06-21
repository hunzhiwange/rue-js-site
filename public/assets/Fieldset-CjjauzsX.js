import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,it as o,l as s,lt as c,m as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as x}from"./Code-4SUSUwRg.js";import{t as S}from"./button-COZLI6MM.js";import{t as C}from"./tabs-Duzh3URW.js";import{t as w}from"./fieldset-DZVXbJox.js";import{t as T}from"./input-ey-wzC3N.js";import{r as E}from"./SidebarPlaygroundDesign-EU389JDE.js";var D=t=>s(a=>{let o=u(`div`,a);r(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=u(`div`,o);n(o,c),r(c,`flex flex-wrap items-start justify-between gap-3`);let l=u(`div`,c);n(c,l);let h=u(`h2`,l);n(l,h),r(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(h,f(`# `));let _=i(`rue:slot:anchor`);n(h,_),g(()=>{let n=t.title;e(()=>d(n,h,_))});let v=i(`rue:slot:anchor`);n(l,v),g(()=>{let a=t.summary?s(()=>{let a=m(),o=u(`p`,a);n(a,o),r(o,`m-0 text-sm opacity-70`);let s=i(`rue:slot:anchor`);return n(o,s),g(()=>{let n=t.summary;e(()=>d(n,o,s))}),a}):``;e(()=>d(a,l,v))});let y=i(`rue:component:anchor`);n(o,y),g(()=>{let n=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>d(n,o,y))});let b=i(`rue:slot:anchor`);return n(o,b),g(()=>{let r=t.tab.value===`preview`?t.preview():s(()=>{let r=m(),a=i(`rue:component:anchor`);return n(r,a),g(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>d(n,r,a))}),r});e(()=>d(r,o,b))}),o}),O=t=>s(a=>{let o=u(`div`,a);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=u(`table`,o);n(o,l),r(l,`table table-zebra`);let p=u(`thead`,l);n(l,p);let h=u(`tr`,p);n(p,h);let _=u(`th`,h);n(h,_),n(_,f(`属性`));let y=u(`th`,h);n(h,y),n(y,f(`说明`));let b=u(`th`,h);n(h,b),n(b,f(`类型`));let x=u(`th`,h);n(h,x),n(x,f(`默认值`));let S=u(`tbody`,l);n(l,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,o,l)=>{d(s(()=>{let r=m(),a=u(`tr`,r);n(r,a),g(()=>{c(a,`key`,String(t.prop))});let o=u(`td`,a);n(a,o);let s=u(`code`,o);n(o,s);let l=i(`rue:slot:anchor`);n(s,l),g(()=>{let n=t.prop;e(()=>d(n,s,l))});let f=u(`td`,a);n(a,f);let p=i(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>d(n,f,p))});let h=u(`td`,a);n(a,h);let _=u(`code`,h);n(h,_);let v=i(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,a);n(a,y);let b=u(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,a)}})}),o}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，使用 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`展示基础 legend 组合写法，并支持 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`支持 label / p / span / div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:x,tabStates:C,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>a(()=>({tabRecommended:_(`ref:1:0`,()=>t(`preview`)),tabItem:_(`ref:1:1`,()=>t(`preview`)),tabStates:_(`ref:1:2`,()=>t(`preview`)),tabBasic:_(`ref:1:3`,()=>t(`preview`)),tabBorder:_(`ref:1:4`,()=>t(`preview`)),tabMultiple:_(`ref:1:5`,()=>t(`preview`)),tabJoin:_(`ref:1:6`,()=>t(`preview`)),tabLogin:_(`ref:1:7`,()=>t(`preview`))})));return s(t=>{let a=m(),_=i(`rue:component:anchor`);return n(a,_),d(p(E,{children:s(()=>{let t=m(),a=u(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let s=u(`h1`,a);n(a,s),n(s,f(`Fieldset 字段集`));let _=u(`p`,a);n(a,_),r(_,`text-sm mt-3 mb-3`),n(_,f(`Fieldset 现在同时支持两类用法：展示基础的`));let E=u(`code`,_);n(_,E),n(E,f(`Fieldset.Legend`)),n(_,f(`/`));let ce=o(_);n(_,ce),h(ce,` `);let le=u(`code`,_);n(_,le),n(le,f(`Fieldset.Label`)),n(_,f(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=o(_);n(_,ue),h(ue,` `);let de=u(`code`,_);n(_,de),n(de,f(`Fieldset.Item`)),n(_,f(`。`));let fe=u(`h2`,a);n(a,fe),n(fe,f(`何时使用`));let k=u(`ul`,a);n(a,k);let A=u(`li`,k);n(k,A),n(A,f(`需要把一组相关输入控件组织成一个明确的表单区块。`));let j=u(`li`,k);n(k,j),n(j,f(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let M=u(`li`,k);n(k,M),n(M,f(`希望小表单走结构化 props，大表单展示基础 JSX 组合写法。`));let N=i(`rue:component:anchor`);n(a,N),g(()=>{let t=p(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(w,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(T,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(T,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(T,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(l,{children:[b(S,{type:`text`,children:`Cancel`}),b(S,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});e(()=>d(t,a,N))});let P=i(`rue:component:anchor`);n(a,P),g(()=>{let t=p(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，可以用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:x,preview:()=>y(w,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(w.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(w.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(w.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(T,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(w.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(T,{placeholder:`https://rue.design/workspace`})}),b(w.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(T,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});e(()=>d(t,a,P))});let F=i(`rue:component:anchor`);n(a,F),g(()=>{let t=p(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:C,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(w,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(T,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(T,{placeholder:`Hangzhou`})}]}),b(w,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(T,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(T,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});e(()=>d(t,a,F))});let I=i(`rue:component:anchor`);n(a,I),g(()=>{let t=p(D,{title:`Fieldset fieldset-legend and label`,summary:`基础示例保持不变，展示最轻量的组合写法。`,tab:re,preview:()=>y(w,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});e(()=>d(t,a,I))});let L=i(`rue:component:anchor`);n(a,L),g(()=>{let t=p(D,{title:`Fieldset with background and border`,summary:`展示手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});e(()=>d(t,a,L))});let R=i(`rue:component:anchor`);n(a,R),g(()=>{let t=p(D,{title:`Fieldset with multiple inputs`,summary:`基础多输入框示例保持，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Page details`}),b(w.Label,{children:`Title`}),b(T,{placeholder:`My awesome page`}),b(w.Label,{children:`Slug`}),b(T,{placeholder:`my-awesome-page`}),b(w.Label,{children:`Author`}),b(T,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});e(()=>d(t,a,R))});let z=i(`rue:component:anchor`);n(a,z),g(()=>{let t=p(D,{title:`Fieldset with multiple join items`,summary:`基础 join 场景保持，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(T,{className:`join-item`,placeholder:`Product name`}),b(S,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});e(()=>d(t,a,z))});let B=i(`rue:component:anchor`);n(a,B),g(()=>{let t=p(D,{title:`Login form with fieldset`,summary:`登录表单示例展示，能直接对照推荐结构。`,tab:se,preview:()=>y(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(w.Legend,{children:`Login`}),b(w.Label,{children:`Email`}),b(T,{type:`email`,placeholder:`Email`}),b(w.Label,{children:`Password`}),b(T,{type:`password`,placeholder:`Password`}),b(S,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});e(()=>d(t,a,B))});let V=u(`h2`,a);n(a,V),c(V,`id`,`fieldset-api`),n(V,f(`API`));let H=u(`p`,a);n(a,H),n(H,f(`当前页面展示的是语义化的完整可用 API，同时展示基础 children 组合写法。`));let pe=u(`h3`,a);n(a,pe),n(pe,f(`Fieldset`));let me=i(`rue:component:anchor`);n(a,me),g(()=>{let t=p(O,{rows:ee});e(()=>d(t,a,me))});let he=u(`h3`,a);n(a,he),n(he,f(`Fieldset.Item`));let ge=i(`rue:component:anchor`);n(a,ge),g(()=>{let t=p(O,{rows:te});e(()=>d(t,a,ge))});let _e=u(`h3`,a);n(a,_e),n(_e,f(`复合子组件`));let ve=i(`rue:component:anchor`);n(a,ve),g(()=>{let t=p(O,{rows:ne});e(()=>d(t,a,ve))});let U=u(`div`,a);n(a,U),r(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=u(`h3`,U);n(U,W),r(W,`mt-0 mb-3 text-base font-semibold`),n(W,f(`推荐用法总结`));let G=u(`div`,U);n(U,G),r(G,`grid gap-2 text-sm md:grid-cols-2`);let K=u(`div`,G);n(G,K);let ye=u(`code`,K);n(K,ye),n(ye,f(`legend + items`)),n(K,f(`适合直接搭一整块表单`));let q=u(`div`,G);n(G,q);let be=u(`code`,q);n(q,be),n(be,f(`Fieldset.Item`)),n(q,f(`适合沉淀复用字段行`));let J=u(`div`,G);n(G,J);let xe=u(`code`,J);n(J,xe),n(xe,f(`children + Legend/Label`)),n(J,f(`支持基础写法`));let Y=u(`div`,G);n(G,Y);let Se=u(`code`,Y);n(Y,Se),n(Se,f(`variant / tone / invalid`)),n(Y,f(`用来表达区块层级和状态`));let Ce=u(`h2`,a);n(a,Ce),n(Ce,f(`FAQ`));let we=u(`h3`,a);n(a,we),n(we,f(`结构化 props 和 children 可以同时用吗？`));let X=u(`p`,a);n(a,X),n(X,f(`当前组件里，`));let Te=u(`code`,X);n(X,Te),n(Te,f(`children`)),n(X,f(`仍然是最高优先级。想走推荐写法时使用`));let Ee=u(`code`,X);n(X,Ee),n(Ee,f(`legend`)),n(X,f(`、`));let De=u(`code`,X);n(X,De),n(De,f(`description`)),n(X,f(`、`));let Oe=u(`code`,X);n(X,Oe),n(Oe,f(`items`)),n(X,f(`；想自由拼装时继续直接写`));let ke=o(X);n(X,ke),h(ke,` `);let Z=u(`code`,X);n(X,Z),n(Z,f(`children`)),n(X,f(`。`));let Ae=u(`h3`,a);n(a,Ae),n(Ae,f(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=u(`p`,a);n(a,Q),n(Q,f(`简单表单优先用`));let je=u(`code`,Q);n(Q,je),n(je,f(`items`)),n(Q,f(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Me=o(Q);n(Q,Me),h(Me,` `);let Ne=u(`code`,Q);n(Q,Ne),n(Ne,f(`Fieldset.Item`)),n(Q,f(`。`));let Pe=u(`h3`,a);n(a,Pe),n(Pe,f(`variant 和手写 className 会冲突吗？`));let $=u(`p`,a);n(a,$),n($,f(`不会。`));let Fe=u(`code`,$);n($,Fe),n(Fe,f(`variant`)),n($,f(`只是给出一套推荐容器样式，仍然可以继续叠加当前的`));let Ie=u(`code`,$);n($,Ie),n(Ie,f(`rounded-box`)),n($,f(`、`));let Le=u(`code`,$);n($,Le),n(Le,f(`border`)),n($,f(`、`));let Re=u(`code`,$);return n($,Re),n(Re,f(`bg-*`)),n($,f(`等类名做局部覆盖。`)),t})}),a,_),a})};export{re as default};