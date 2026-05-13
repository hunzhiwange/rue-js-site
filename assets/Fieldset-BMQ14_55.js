import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,d as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as y,t as b}from"./src-BfQKH6_d.js";import{n as x}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as S}from"./Code-2C2psoH3.js";import{t as C}from"./button-DroKVuaU.js";import{t as w}from"./tabs-BgQmsOey.js";import{t as T}from"./fieldset-gE9vdPU4.js";import{t as E}from"./input-D_T0Xhpz.js";var D=o=>g(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let f=n(`h2`);i(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,r(`# `));let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=o.title;m(()=>d(e,f,p))});let _=a(`rue:slot:anchor`);i(l,_),u(()=>{let r=o.summary?g(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;m(()=>d(e,s,c))}),r}):``;m(()=>d(r,l,_))});let v=a(`rue:component:anchor`);i(s,v),u(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});m(()=>d(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),u(()=>{let t=o.tab.value===`preview`?o.preview():g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(S,{className:`mt-2`,lang:`tsx`,code:o.code});m(()=>d(e,t,n))}),t});m(()=>d(t,s,y))}),s}),O=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let y=n(`th`);i(p,y),i(y,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=v({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:v,tabItem:S,tabStates:w,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=_(`useSetup:0:0`,()=>l(()=>({tabRecommended:_(`ref:1:0`,()=>p(`preview`)),tabItem:_(`ref:1:1`,()=>p(`preview`)),tabStates:_(`ref:1:2`,()=>p(`preview`)),tabBasic:_(`ref:1:3`,()=>p(`preview`)),tabBorder:_(`ref:1:4`,()=>p(`preview`)),tabMultiple:_(`ref:1:5`,()=>p(`preview`)),tabJoin:_(`ref:1:6`,()=>p(`preview`)),tabLogin:_(`ref:1:7`,()=>p(`preview`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(x,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let g=n(`h1`);i(p,g),i(g,r(`Fieldset 字段集`));let _=n(`p`);i(p,_),t(_,`text-sm mt-3 mb-3`),i(_,r(`Fieldset 现在同时支持两类用法：保留原有的`));let x=n(`code`);i(_,x),i(x,r(`Fieldset.Legend`)),i(_,r(`/`));let ce=o(_);i(_,ce),c(ce,` `);let le=n(`code`);i(_,le),i(le,r(`Fieldset.Label`)),i(_,r(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=o(_);i(_,ue),c(ue,` `);let de=n(`code`);i(_,de),i(de,r(`Fieldset.Item`)),i(_,r(`。`));let k=n(`div`);i(p,k),t(k,`text-sm flex flex-wrap gap-4`);let A=n(`a`);i(k,A),s(A,`href`,`https://daisyui.com/components/fieldset/`),s(A,`target`,`_blank`),i(A,r(`查看 Fieldset 静态样式`));let fe=n(`h2`);i(p,fe),i(fe,r(`何时使用`));let j=n(`ul`);i(p,j);let M=n(`li`);i(j,M),i(M,r(`需要把一组相关输入控件组织成一个明确的表单区块。`));let N=n(`li`);i(j,N),i(N,r(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let P=n(`li`);i(j,P),i(P,r(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let F=a(`rue:component:anchor`);i(p,F),u(()=>{let e=h(D,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:v,preview:()=>b(T,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:b(E,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:b(E,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:b(E,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:y(f,{children:[b(C,{type:`text`,children:`Cancel`}),b(C,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`});m(()=>d(e,p,F))});let I=a(`rue:component:anchor`);i(p,I),u(()=>{let e=h(D,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:S,preview:()=>y(T,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[b(T.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),b(T.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),b(T.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:b(E,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),b(T.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:b(E,{placeholder:`https://rue.design/workspace`})}),b(T.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:b(E,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`});m(()=>d(e,p,I))});let L=a(`rue:component:anchor`);i(p,L),u(()=>{let e=h(D,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:w,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(T,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:b(E,{placeholder:`main`})},{label:`Region`,optional:!0,control:b(E,{placeholder:`Hangzhou`})}]}),b(T,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:b(E,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:b(E,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`});m(()=>d(e,p,L))});let R=a(`rue:component:anchor`);i(p,R),u(()=>{let e=h(D,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>y(T,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[b(T.Legend,{children:`Page title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});m(()=>d(e,p,R))});let z=a(`rue:component:anchor`);i(p,z),u(()=>{let e=h(D,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Page title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`});m(()=>d(e,p,z))});let B=a(`rue:component:anchor`);i(p,B),u(()=>{let e=h(D,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Page details`}),b(T.Label,{children:`Title`}),b(E,{placeholder:`My awesome page`}),b(T.Label,{children:`Slug`}),b(E,{placeholder:`my-awesome-page`}),b(T.Label,{children:`Author`}),b(E,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`});m(()=>d(e,p,B))});let V=a(`rue:component:anchor`);i(p,V),u(()=>{let e=h(D,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Settings`}),y(`div`,{className:`join`,children:[b(E,{className:`join-item`,placeholder:`Product name`}),b(C,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`});m(()=>d(e,p,V))});let pe=a(`rue:component:anchor`);i(p,pe),u(()=>{let e=h(D,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>y(T,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[b(T.Legend,{children:`Login`}),b(T.Label,{children:`Email`}),b(E,{type:`email`,placeholder:`Email`}),b(T.Label,{children:`Password`}),b(E,{type:`password`,placeholder:`Password`}),b(C,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`});m(()=>d(e,p,pe))});let H=n(`h2`);i(p,H),s(H,`id`,`fieldset-api`),i(H,r(`API`));let me=n(`p`);i(p,me),i(me,r(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let he=n(`h3`);i(p,he),i(he,r(`Fieldset`));let ge=a(`rue:component:anchor`);i(p,ge),u(()=>{let e=h(O,{rows:ee});m(()=>d(e,p,ge))});let _e=n(`h3`);i(p,_e),i(_e,r(`Fieldset.Item`));let ve=a(`rue:component:anchor`);i(p,ve),u(()=>{let e=h(O,{rows:te});m(()=>d(e,p,ve))});let ye=n(`h3`);i(p,ye),i(ye,r(`复合子组件`));let be=a(`rue:component:anchor`);i(p,be),u(()=>{let e=h(O,{rows:ne});m(()=>d(e,p,be))});let U=n(`div`);i(p,U),t(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=n(`h3`);i(U,W),t(W,`mt-0 mb-3 text-base font-semibold`),i(W,r(`推荐用法总结`));let G=n(`div`);i(U,G),t(G,`grid gap-2 text-sm md:grid-cols-2`);let K=n(`div`);i(G,K);let xe=n(`code`);i(K,xe),i(xe,r(`legend + items`)),i(K,r(`适合直接搭一整块表单`));let q=n(`div`);i(G,q);let Se=n(`code`);i(q,Se),i(Se,r(`Fieldset.Item`)),i(q,r(`适合沉淀复用字段行`));let J=n(`div`);i(G,J);let Ce=n(`code`);i(J,Ce),i(Ce,r(`children + Legend/Label`)),i(J,r(`继续兼容原有写法`));let Y=n(`div`);i(G,Y);let we=n(`code`);i(Y,we),i(we,r(`variant / tone / invalid`)),i(Y,r(`用来表达区块层级和状态`));let Te=n(`h2`);i(p,Te),i(Te,r(`FAQ`));let Ee=n(`h3`);i(p,Ee),i(Ee,r(`结构化 props 和 children 可以同时用吗？`));let X=n(`p`);i(p,X),i(X,r(`当前实现里，`));let De=n(`code`);i(X,De),i(De,r(`children`)),i(X,r(`仍然是最高优先级。想走推荐写法时使用`));let Oe=n(`code`);i(X,Oe),i(Oe,r(`legend`)),i(X,r(`、`));let ke=n(`code`);i(X,ke),i(ke,r(`description`)),i(X,r(`、`));let Ae=n(`code`);i(X,Ae),i(Ae,r(`items`)),i(X,r(`；想自由拼装时继续直接写`));let je=o(X);i(X,je),c(je,` `);let Me=n(`code`);i(X,Me),i(Me,r(`children`)),i(X,r(`。`));let Z=n(`h3`);i(p,Z),i(Z,r(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=n(`p`);i(p,Q),i(Q,r(`简单表单优先用`));let Ne=n(`code`);i(Q,Ne),i(Ne,r(`items`)),i(Q,r(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Pe=o(Q);i(Q,Pe),c(Pe,` `);let Fe=n(`code`);i(Q,Fe),i(Fe,r(`Fieldset.Item`)),i(Q,r(`。`));let Ie=n(`h3`);i(p,Ie),i(Ie,r(`variant 和手写 className 会冲突吗？`));let $=n(`p`);i(p,$),i($,r(`不会。`));let Le=n(`code`);i($,Le),i(Le,r(`variant`)),i($,r(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Re=n(`code`);i($,Re),i(Re,r(`rounded-box`)),i($,r(`、`));let ze=n(`code`);i($,ze),i(ze,r(`border`)),i($,r(`、`));let Be=n(`code`);return i($,Be),i(Be,r(`bg-*`)),i($,r(`等类名做局部覆盖。`)),l})}),l,p),l})};export{re as default};