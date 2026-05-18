import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,d as c,dt as l,f as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,n as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as y,t as b}from"./src-BQwLQD8R.js";import{n as x}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as S}from"./Code-DQxnq0in.js";import{t as C}from"./button-BlewusST.js";import{t as w}from"./tabs-DqfJzZfa.js";import{t as T}from"./fieldset-BtRZ016d.js";import{t as E}from"./input-BU-TVJFw.js";var D=a=>c(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=r(`div`,u);i(u,d),n(d,`flex flex-wrap items-start justify-between gap-3`);let p=r(`div`,d);i(d,p);let g=r(`h2`,p);i(p,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),h(()=>{let e=a.title;l(()=>f(e,g,_))});let v=e(`rue:slot:anchor`);i(p,v),h(()=>{let o=a.summary?c(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return i(s,c),h(()=>{let e=a.summary;l(()=>f(e,s,c))}),o}):``;l(()=>f(o,p,v))});let y=e(`rue:component:anchor`);i(u,y),h(()=>{let e=m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});l(()=>f(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),h(()=>{let n=a.tab.value===`preview`?a.preview():c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),h(()=>{let e=m(S,{className:`mt-2`,lang:`tsx`,code:a.code});l(()=>f(e,n,r))}),n});l(()=>f(n,u,b))}),u}),O=a=>c(u=>{let d=r(`div`,u);n(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,d);i(d,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return h(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,d)=>{f(c(()=>{let a=t(),o=r(`tr`,a);i(a,o),h(()=>{s(o,`key`,String(n.prop))});let c=r(`td`,o);i(o,c);let u=r(`code`,c);i(c,u);let d=e(`rue:slot:anchor`);i(u,d),h(()=>{let e=n.prop;l(()=>f(e,u,d))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),h(()=>{let e=n.description;l(()=>f(e,p,m))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),h(()=>{let e=n.type;l(()=>f(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),h(()=>{let e=n.defaultValue;l(()=>f(e,b,x))}),a}),a,o)}})}),d}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:S,tabStates:w,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>d(()=>({tabRecommended:_(`ref:1:0`,()=>p(`preview`)),tabItem:_(`ref:1:1`,()=>p(`preview`)),tabStates:_(`ref:1:2`,()=>p(`preview`)),tabBasic:_(`ref:1:3`,()=>p(`preview`)),tabBorder:_(`ref:1:4`,()=>p(`preview`)),tabMultiple:_(`ref:1:5`,()=>p(`preview`)),tabJoin:_(`ref:1:6`,()=>p(`preview`)),tabLogin:_(`ref:1:7`,()=>p(`preview`))})));return c(d=>{let p=t(),_=e(`rue:component:anchor`);return i(p,_),f(m(x,{children:c(()=>{let c=t(),d=r(`div`,c);i(c,d),n(d,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,d);i(d,p),i(p,o(`Fieldset 字段集`));let _=r(`p`,d);i(d,_),n(_,`text-sm mt-3 mb-3`),i(_,o(`Fieldset 现在同时支持两类用法：保留原有的`));let x=r(`code`,_);i(_,x),i(x,o(`Fieldset.Legend`)),i(_,o(`/`));let ce=g(_);i(_,ce),a(ce,` `);let le=r(`code`,_);i(_,le),i(le,o(`Fieldset.Label`)),i(_,o(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=g(_);i(_,ue),a(ue,` `);let de=r(`code`,_);i(_,de),i(de,o(`Fieldset.Item`)),i(_,o(`。`));let k=r(`div`,d);i(d,k),n(k,`text-sm flex flex-wrap gap-4`);let A=r(`a`,k);i(k,A),s(A,`href`,`https://daisyui.com/components/fieldset/`),s(A,`target`,`_blank`),i(A,o(`查看 Fieldset 静态样式`));let fe=r(`h2`,d);i(d,fe),i(fe,o(`何时使用`));let j=r(`ul`,d);i(d,j);let M=r(`li`,j);i(j,M),i(M,o(`需要把一组相关输入控件组织成一个明确的表单区块。`));let N=r(`li`,j);i(j,N),i(N,o(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let P=r(`li`,j);i(j,P),i(P,o(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let F=e(`rue:component:anchor`);i(d,F),h(()=>{let e=m(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(T,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(E,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(E,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(E,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(u,{children:[b(C,{type:`text`,children:`Cancel`}),b(C,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});l(()=>f(e,d,F))});let I=e(`rue:component:anchor`);i(d,I),h(()=>{let e=m(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:S,preview:()=>y(T,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(T.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(T.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(T.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(E,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(T.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(E,{placeholder:`https://rue.design/workspace`})}),b(T.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(E,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});l(()=>f(e,d,I))});let L=e(`rue:component:anchor`);i(d,L),h(()=>{let e=m(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:w,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(T,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(E,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(E,{placeholder:`Hangzhou`})}]}),b(T,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(E,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(E,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});l(()=>f(e,d,L))});let R=e(`rue:component:anchor`);i(d,R),h(()=>{let e=m(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>y(T,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(T.Legend,{children:`Page title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});l(()=>f(e,d,R))});let z=e(`rue:component:anchor`);i(d,z),h(()=>{let e=m(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Page title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});l(()=>f(e,d,z))});let B=e(`rue:component:anchor`);i(d,B),h(()=>{let e=m(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Page details`}),b(T.Label,{children:`Title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{children:`Slug`}),b(E,{placeholder:`my-awesome-page`}),b(T.Label,{children:`Author`}),b(E,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});l(()=>f(e,d,B))});let V=e(`rue:component:anchor`);i(d,V),h(()=>{let e=m(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(E,{className:`join-item`,placeholder:`Product name`}),b(C,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});l(()=>f(e,d,V))});let pe=e(`rue:component:anchor`);i(d,pe),h(()=>{let e=m(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Login`}),b(T.Label,{children:`Email`}),b(E,{type:`email`,placeholder:`Email`}),b(T.Label,{children:`Password`}),b(E,{type:`password`,placeholder:`Password`}),b(C,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});l(()=>f(e,d,pe))});let H=r(`h2`,d);i(d,H),s(H,`id`,`fieldset-api`),i(H,o(`API`));let me=r(`p`,d);i(d,me),i(me,o(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let he=r(`h3`,d);i(d,he),i(he,o(`Fieldset`));let ge=e(`rue:component:anchor`);i(d,ge),h(()=>{let e=m(O,{rows:ee});l(()=>f(e,d,ge))});let _e=r(`h3`,d);i(d,_e),i(_e,o(`Fieldset.Item`));let ve=e(`rue:component:anchor`);i(d,ve),h(()=>{let e=m(O,{rows:te});l(()=>f(e,d,ve))});let ye=r(`h3`,d);i(d,ye),i(ye,o(`复合子组件`));let be=e(`rue:component:anchor`);i(d,be),h(()=>{let e=m(O,{rows:ne});l(()=>f(e,d,be))});let U=r(`div`,d);i(d,U),n(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=r(`h3`,U);i(U,W),n(W,`mt-0 mb-3 text-base font-semibold`),i(W,o(`推荐用法总结`));let G=r(`div`,U);i(U,G),n(G,`grid gap-2 text-sm md:grid-cols-2`);let K=r(`div`,G);i(G,K);let xe=r(`code`,K);i(K,xe),i(xe,o(`legend + items`)),i(K,o(`适合直接搭一整块表单`));let q=r(`div`,G);i(G,q);let Se=r(`code`,q);i(q,Se),i(Se,o(`Fieldset.Item`)),i(q,o(`适合沉淀复用字段行`));let J=r(`div`,G);i(G,J);let Ce=r(`code`,J);i(J,Ce),i(Ce,o(`children + Legend/Label`)),i(J,o(`继续兼容原有写法`));let Y=r(`div`,G);i(G,Y);let we=r(`code`,Y);i(Y,we),i(we,o(`variant / tone / invalid`)),i(Y,o(`用来表达区块层级和状态`));let Te=r(`h2`,d);i(d,Te),i(Te,o(`FAQ`));let Ee=r(`h3`,d);i(d,Ee),i(Ee,o(`结构化 props 和 children 可以同时用吗？`));let X=r(`p`,d);i(d,X),i(X,o(`当前实现里，`));let De=r(`code`,X);i(X,De),i(De,o(`children`)),i(X,o(`仍然是最高优先级。想走推荐写法时使用`));let Oe=r(`code`,X);i(X,Oe),i(Oe,o(`legend`)),i(X,o(`、`));let ke=r(`code`,X);i(X,ke),i(ke,o(`description`)),i(X,o(`、`));let Ae=r(`code`,X);i(X,Ae),i(Ae,o(`items`)),i(X,o(`；想自由拼装时继续直接写`));let je=g(X);i(X,je),a(je,` `);let Me=r(`code`,X);i(X,Me),i(Me,o(`children`)),i(X,o(`。`));let Z=r(`h3`,d);i(d,Z),i(Z,o(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=r(`p`,d);i(d,Q),i(Q,o(`简单表单优先用`));let Ne=r(`code`,Q);i(Q,Ne),i(Ne,o(`items`)),i(Q,o(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Pe=g(Q);i(Q,Pe),a(Pe,` `);let Fe=r(`code`,Q);i(Q,Fe),i(Fe,o(`Fieldset.Item`)),i(Q,o(`。`));let Ie=r(`h3`,d);i(d,Ie),i(Ie,o(`variant 和手写 className 会冲突吗？`));let $=r(`p`,d);i(d,$),i($,o(`不会。`));let Le=r(`code`,$);i($,Le),i(Le,o(`variant`)),i($,o(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Re=r(`code`,$);i($,Re),i(Re,o(`rounded-box`)),i($,o(`、`));let ze=r(`code`,$);i($,ze),i(ze,o(`border`)),i($,o(`、`));let Be=r(`code`,$);return i($,Be),i(Be,o(`bg-*`)),i($,o(`等类名做局部覆盖。`)),c})}),p,_),p})};export{re as default};