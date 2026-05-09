import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,d as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as v,t as y}from"./src-DP0sEeZS.js";import{n as b}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as x}from"./Code-C8wy38VS.js";import{t as S}from"./button-BOnbyENm.js";import{t as C}from"./tabs-B-QPmbH8.js";import{t as w}from"./fieldset-CwVMbd-Z.js";import{t as T}from"./input-BprVLhu7.js";var E=({title:t,summary:l,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let S=r(b);u(b,S),d(()=>{s(S,t)});let w=i(`rue:slot:anchor`);u(y,w),d(()=>{c(l?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),d(()=>{s(i,l)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),d(()=>{c(p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),d(()=>{c(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{c(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),D=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let f=e(`thead`);u(l,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let f=i(`rue:slot:anchor`);u(l,f),d(()=>{let e=n.prop;c(e,l,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),ee=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，保留 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],te=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],ne=[{prop:`Fieldset.Legend`,description:`保留原有 legend 组合写法，并新增 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`保留 label / p / span，并新增 div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`新增复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],re=()=>{let{tabRecommended:_,tabItem:x,tabStates:C,tabBasic:re,tabBorder:ie,tabMultiple:ae,tabJoin:oe,tabLogin:se}=g(`useSetup:0:0`,()=>h(()=>({tabRecommended:g(`ref:1:0`,()=>f(`preview`)),tabItem:g(`ref:1:1`,()=>f(`preview`)),tabStates:g(`ref:1:2`,()=>f(`preview`)),tabBasic:g(`ref:1:3`,()=>f(`preview`)),tabBorder:g(`ref:1:4`,()=>f(`preview`)),tabMultiple:g(`ref:1:5`,()=>f(`preview`)),tabJoin:g(`ref:1:6`,()=>f(`preview`)),tabLogin:g(`ref:1:7`,()=>f(`preview`))})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),c(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Fieldset 字段集`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`Fieldset 现在同时支持两类用法：保留原有的`));let b=e(`code`);u(g,b),u(b,n(`Fieldset.Legend`)),u(g,n(`/`));let ce=r(g);u(g,ce),s(ce,` `);let le=e(`code`);u(g,le),u(le,n(`Fieldset.Label`)),u(g,n(`组合写法，也补上更适合表单场景的结构化 props 与`));let ue=r(g);u(g,ue),s(ue,` `);let de=e(`code`);u(g,de),u(de,n(`Fieldset.Item`)),u(g,n(`。`));let O=e(`div`);u(m,O),o(O,`text-sm flex flex-wrap gap-4`);let k=e(`a`);u(O,k),t(k,`href`,`https://daisyui.com/components/fieldset/`),t(k,`target`,`_blank`),u(k,n(`查看 Fieldset 静态样式`));let fe=e(`h2`);u(m,fe),u(fe,n(`何时使用`));let A=e(`ul`);u(m,A);let j=e(`li`);u(A,j),u(j,n(`需要把一组相关输入控件组织成一个明确的表单区块。`));let M=e(`li`);u(A,M),u(M,n(`需要同时表达标题、说明、字段提示、操作区和错误态。`));let N=e(`li`);u(A,N),u(N,n(`希望小表单走结构化 props，大表单继续保留原有 JSX 组合写法。`));let P=i(`rue:component:anchor`);u(m,P),d(()=>{c(p(E,{title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:_,preview:()=>y(w,{legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:y(T,{placeholder:`My awesome page`}),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:y(T,{placeholder:`my-awesome-page`})},{label:`Owner`,optional:!0,control:y(T,{placeholder:`dyhb`})}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:v(l,{children:[y(S,{type:`text`,children:`Cancel`}),y(S,{color:`primary`,children:`Save project`})]})}),code:`<Fieldset
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
/>`}),m,P)});let F=i(`rue:component:anchor`);u(m,F),d(()=>{c(p(E,{title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，继续用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:x,preview:()=>v(w,{variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[y(w.Legend,{aside:`Autosave enabled`,children:`Profile settings`}),y(w.Label,{as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`}),y(w.Item,{horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:y(T,{placeholder:`Rue Design`}),hint:`建议控制在 2 到 24 个字符。`}),y(w.Item,{horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:y(T,{placeholder:`https://rue.design/workspace`})}),y(w.Item,{horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:y(T,{type:`email`,placeholder:`team@rue.design`})})]}),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`}),m,F)});let I=i(`rue:component:anchor`);u(m,I),d(()=>{c(p(E,{title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:C,preview:()=>v(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[y(w,{legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:y(T,{placeholder:`main`})},{label:`Region`,optional:!0,control:y(T,{placeholder:`Hangzhou`})}]}),y(w,{legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:y(T,{type:`email`,placeholder:`team@rue.design`}),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:y(T,{disabled:!0,placeholder:`disabled by parent fieldset`})}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})]}),code:`<Fieldset
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
/>`}),m,I)});let L=i(`rue:component:anchor`);u(m,L),d(()=>{c(p(E,{title:`Fieldset fieldset-legend and label`,summary:`原始基础示例保持不变，继续展示最轻量的组合写法。`,tab:re,preview:()=>v(w,{className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[y(w.Legend,{children:`Page title`}),y(T,{placeholder:`My awesome page`}),y(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`}),m,L)});let R=i(`rue:component:anchor`);u(m,R),d(()=>{c(p(E,{title:`Fieldset with background and border`,summary:`继续保留手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:ie,preview:()=>v(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[y(w.Legend,{children:`Page title`}),y(T,{placeholder:`My awesome page`}),y(w.Label,{as:`p`,children:`You can edit page title later on from settings`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`}),m,R)});let z=i(`rue:component:anchor`);u(m,z),d(()=>{c(p(E,{title:`Fieldset with multiple inputs`,summary:`原有多输入框示例保留，适合对比 items 写法和纯 JSX 写法。`,tab:ae,preview:()=>v(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[y(w.Legend,{children:`Page details`}),y(w.Label,{children:`Title`}),y(T,{placeholder:`My awesome page`}),y(w.Label,{children:`Slug`}),y(T,{placeholder:`my-awesome-page`}),y(w.Label,{children:`Author`}),y(T,{placeholder:`Name`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`}),m,z)});let B=i(`rue:component:anchor`);u(m,B),d(()=>{c(p(E,{title:`Fieldset with multiple join items`,summary:`原有 join 场景保留，适合放紧凑操作条或搜索表单。`,tab:oe,preview:()=>v(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[y(w.Legend,{children:`Settings`}),v(`div`,{className:`join`,children:[y(T,{className:`join-item`,placeholder:`Product name`}),y(S,{className:`join-item`,children:`save`})]})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`}),m,B)});let V=i(`rue:component:anchor`);u(m,V),d(()=>{c(p(E,{title:`Login form with fieldset`,summary:`登录表单示例继续保留，能直接对照增强后的推荐结构。`,tab:se,preview:()=>v(w,{className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[y(w.Legend,{children:`Login`}),y(w.Label,{children:`Email`}),y(T,{type:`email`,placeholder:`Email`}),y(w.Label,{children:`Password`}),y(T,{type:`password`,placeholder:`Password`}),y(S,{color:`neutral`,className:`mt-4`,children:`Login`})]}),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`}),m,V)});let H=e(`h2`);u(m,H),t(H,`id`,`fieldset-api`),u(H,n(`API`));let pe=e(`p`);u(m,pe),u(pe,n(`当前页面展示的是增强后的完整可用 API，同时保留原有 children 组合写法。`));let me=e(`h3`);u(m,me),u(me,n(`Fieldset`));let he=i(`rue:component:anchor`);u(m,he),d(()=>{c(p(D,{rows:ee}),m,he)});let ge=e(`h3`);u(m,ge),u(ge,n(`Fieldset.Item`));let _e=i(`rue:component:anchor`);u(m,_e),d(()=>{c(p(D,{rows:te}),m,_e)});let ve=e(`h3`);u(m,ve),u(ve,n(`复合子组件`));let ye=i(`rue:component:anchor`);u(m,ye),d(()=>{c(p(D,{rows:ne}),m,ye)});let U=e(`div`);u(m,U),o(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`h3`);u(U,W),o(W,`mt-0 mb-3 text-base font-semibold`),u(W,n(`推荐用法总结`));let G=e(`div`);u(U,G),o(G,`grid gap-2 text-sm md:grid-cols-2`);let K=e(`div`);u(G,K);let be=e(`code`);u(K,be),u(be,n(`legend + items`)),u(K,n(`适合直接搭一整块表单`));let q=e(`div`);u(G,q);let xe=e(`code`);u(q,xe),u(xe,n(`Fieldset.Item`)),u(q,n(`适合沉淀复用字段行`));let J=e(`div`);u(G,J);let Se=e(`code`);u(J,Se),u(Se,n(`children + Legend/Label`)),u(J,n(`继续兼容原有写法`));let Y=e(`div`);u(G,Y);let Ce=e(`code`);u(Y,Ce),u(Ce,n(`variant / tone / invalid`)),u(Y,n(`用来表达区块层级和状态`));let we=e(`h2`);u(m,we),u(we,n(`FAQ`));let Te=e(`h3`);u(m,Te),u(Te,n(`结构化 props 和 children 可以同时用吗？`));let X=e(`p`);u(m,X),u(X,n(`当前实现里，`));let Ee=e(`code`);u(X,Ee),u(Ee,n(`children`)),u(X,n(`仍然是最高优先级。想走推荐写法时使用`));let De=e(`code`);u(X,De),u(De,n(`legend`)),u(X,n(`、`));let Oe=e(`code`);u(X,Oe),u(Oe,n(`description`)),u(X,n(`、`));let ke=e(`code`);u(X,ke),u(ke,n(`items`)),u(X,n(`；想自由拼装时继续直接写`));let Z=r(X);u(X,Z),s(Z,` `);let Ae=e(`code`);u(X,Ae),u(Ae,n(`children`)),u(X,n(`。`));let je=e(`h3`);u(m,je),u(je,n(`什么时候该用 items，什么时候该用 Fieldset.Item？`));let Q=e(`p`);u(m,Q),u(Q,n(`简单表单优先用`));let Me=e(`code`);u(Q,Me),u(Me,n(`items`)),u(Q,n(`，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到`));let Ne=r(Q);u(Q,Ne),s(Ne,` `);let Pe=e(`code`);u(Q,Pe),u(Pe,n(`Fieldset.Item`)),u(Q,n(`。`));let Fe=e(`h3`);u(m,Fe),u(Fe,n(`variant 和手写 className 会冲突吗？`));let $=e(`p`);u(m,$),u($,n(`不会。`));let Ie=e(`code`);u($,Ie),u(Ie,n(`variant`)),u($,n(`只是给出一套推荐容器样式，仍然可以继续叠加现有的`));let Le=e(`code`);u($,Le),u(Le,n(`rounded-box`)),u($,n(`、`));let Re=e(`code`);u($,Re),u(Re,n(`border`)),u($,n(`、`));let ze=e(`code`);return u($,ze),u(ze,n(`bg-*`)),u($,n(`等类名做局部覆盖。`)),f})}),f,h),f})};export{re as default};