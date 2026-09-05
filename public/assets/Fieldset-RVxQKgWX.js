import{Bt as e,C as t,Et as n,H as r,K as i,Kt as a,Mt as o,S as s,V as c,W as l,Y as u,_n as d,_t as f,b as p,bn as m,fn as h,gn as g,hn as _,ht as v,kn as y,mn as b,nt as x,pn as S,q as C,wn as w,x as T,z as E}from"./rue-runtime-CwEGJ854.js";import{t as D}from"./Code-DUvGro8N.js";import{t as O}from"./button-BlvcsWE0.js";import{t as k}from"./tabs-DUviBzjL.js";import{t as A}from"./fieldset-BLBrKC3n.js";import{t as j}from"./input-Bm2FiP-g.js";import{r as M}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var N=d(`<div class="grid gap-4 xl:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),P=d(`<div class="join"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),F=d(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),I=d(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),L=d(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Fieldset 字段集</h1><p class="text-sm mt-3 mb-3">Fieldset 现在同时支持两类用法：展示基础的 <code>Fieldset.Legend</code> / <code>Fieldset.Label</code> 组合写法，也补上更适合表单场景的结构化 props 与 <code>Fieldset.Item</code>。</p><h2>何时使用</h2><ul><li>需要把一组相关输入控件组织成一个明确的表单区块。</li><li>需要同时表达标题、说明、字段提示、操作区和错误态。</li><li>希望小表单走结构化 props，大表单展示基础 JSX 组合写法。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><h2 id="fieldset-api">API</h2><p>当前页面展示的是语义化的完整可用 API，同时展示基础 children 组合写法。</p><h3>Fieldset</h3><!--rue:opaque-hole:8--><h3>Fieldset.Item</h3><!--rue:opaque-hole:9--><h3>复合子组件</h3><!--rue:opaque-hole:10--><div class="not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4"><h3 class="mt-0 mb-3 text-base font-semibold">推荐用法总结</h3><div class="grid gap-2 text-sm md:grid-cols-2"><div><code>legend + items</code> 适合直接搭一整块表单</div><div><code>Fieldset.Item</code> 适合沉淀复用字段行</div><div><code>children + Legend/Label</code> 支持基础写法</div><div><code>variant / tone / invalid</code> 用来表达区块层级和状态</div></div></div><h2>FAQ</h2><h3>结构化 props 和 children 可以同时用吗？</h3><p>当前组件里，<code>children</code> 仍然是最高优先级。想走推荐写法时使用 <code>legend</code> 、<code>description</code>、<code>items</code>；想自由拼装时继续直接写 <code>children</code>。</p><h3>什么时候该用 items，什么时候该用 Fieldset.Item？</h3><p>简单表单优先用 <code>items</code> ，这样信息更集中；字段布局开始变复杂、需要横向排版或局部复用时， 更适合切到 <code>Fieldset.Item</code>。</p><h3>variant 和手写 className 会冲突吗？</h3><p>不会。<code>variant</code> 只是给出一套推荐容器样式，仍然可以继续叠加当前的 <code>rounded-box</code>、<code>border</code>、<code>bg-*</code> 等类名做局部覆盖。</p></div>`),R=e=>v(t=>{let a=F().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,l=a.childNodes[0].childNodes[0].childNodes[1],d=l.parentNode,f=a.childNodes[1],m=f.parentNode,g=a.childNodes[2],v=g.parentNode;p({parent:s,before:o},()=>e.title,()=>({})),c(d,l,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(t=>{let n=_(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=S(`rue:compiled-slot`);return h(n,r),p({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let C=b(m);return i(C,k,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),m.insertBefore(C,f),w(()=>{let t=e.tab.value===`preview`?e.preview():r(D,()=>({className:`mt-2`,lang:`tsx`,code:e.code}));y(()=>u(t,v,g))}),a}),z=e=>{let r=l(e.rows);return C(n(Object.assign(e=>{let i=I().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,c=[];return w(()=>{let e=r.get()||[];c=t(o,a,c,e,(e,t)=>e.prop,(e,t)=>{let r=l(e),i=l(t);return s((e,t,i)=>T(e,i,()=>n(Object.assign(e=>{let t=_(`tr`,e),n=_(`td`,t);h(t,n);let i=_(`code`,n);h(n,i);let a=g(``);h(i,a),m(a,()=>r.get().prop);let o=_(`td`,t);h(t,o);let s=g(``);h(o,s),m(s,()=>r.get().description);let c=_(`td`,t);h(t,c);let l=_(`code`,c);h(c,l);let u=g(``);h(l,u),m(u,()=>r.get().type);let d=_(`td`,t);h(t,d);let f=_(`code`,d);h(d,f);let p=g(``);return h(f,p),m(p,()=>r.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>E(()=>{r.set(e.rows)}),()=>e)},B=[{prop:`legend`,description:`推荐写法的标题内容；未传 children 时会自动渲染到 Fieldset.Legend`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文本`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动字段项，内部自动映射为 Fieldset.Item`,type:`ReadonlyArray<FieldsetItemData>`,defaultValue:`[]`},{prop:`content`,description:`自定义主体内容；适合放复杂布局`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`底部提示文本`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`底部操作区，默认右对齐`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`容器表现层，使用 Rue 当前视觉风格`,type:`'default' | 'soft' | 'outlined'`,defaultValue:`'default'`},{prop:`tone`,description:`容器主题色，主要影响 soft / outlined 分支`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`size`,description:`控制字段间距和说明文字密度，支持语义别名`,type:`'sm' | 'md' | 'lg' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`bordered`,description:`默认分支下快速补一层边框和内边距`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`错误态容器，输出错误色并补 aria-invalid`,type:`boolean`,defaultValue:`false`}],ee=[{prop:`label`,description:`字段标题`,type:`any`,defaultValue:`-`},{prop:`description`,description:`字段标题下的补充说明`,type:`any`,defaultValue:`-`},{prop:`control`,description:`字段控件内容；不传时回退到 children`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`字段底部提示，可用于校验说明`,type:`any`,defaultValue:`-`},{prop:`required`,description:`显示“必填”标识`,type:`boolean`,defaultValue:`false`},{prop:`optional`,description:`显示“可选”标识`,type:`boolean`,defaultValue:`false`},{prop:`horizontal`,description:`切换为左右两列的字段布局`,type:`boolean`,defaultValue:`false`},{prop:`invalid`,description:`字段级错误态，会把标题和提示切成错误色`,type:`boolean`,defaultValue:`false`}],te=[{prop:`Fieldset.Legend`,description:`展示基础 legend 组合写法，并支持 aside 右侧辅助信息`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Label`,description:`支持 label / p / span / div 与 tone`,type:`component`,defaultValue:`-`},{prop:`Fieldset.Item`,description:`复合字段项，适合复用字段布局与提示文案`,type:`component`,defaultValue:`-`}],V=()=>{let t=e(`preview`),s=e(`preview`),c=e(`preview`),l=e(`preview`),d=e(`preview`),p=e(`preview`),m=e(`preview`),_=e(`preview`);return o(()=>C((()=>{let e=v(()=>{let e=x(),o=L().content.cloneNode(!0),v=o.firstChild,S=v.childNodes[4],C=S.parentNode,E=v.childNodes[5],D=E.parentNode,k=v.childNodes[6],M=k.parentNode,F=v.childNodes[7],I=F.parentNode,V=v.childNodes[8],ne=V.parentNode,H=v.childNodes[9],re=H.parentNode,U=v.childNodes[10],ie=U.parentNode,W=v.childNodes[11],ae=W.parentNode,G=v.childNodes[15],K=G.parentNode,q=v.childNodes[17],J=q.parentNode,Y=v.childNodes[19],X=Y.parentNode;e.appendChild(o),w(()=>{let e=f(R,()=>({title:`推荐写法`,summary:`legend / description / items / hint / actions 适合直接搭表单区块。`,tab:t,preview:a(()=>r(A,()=>({legend:`Project details`,description:`用结构化 props 组织标题、说明、字段和动作。`,variant:`outlined`,tone:`primary`,className:`w-full max-w-xl`,items:[{label:`Project name`,required:!0,control:r(j,()=>({placeholder:`My awesome page`})),hint:`名称会显示在应用导航和工作区列表中。`},{label:`Slug`,description:`用于生成可读 URL，保存后可再次修改。`,control:r(j,()=>({placeholder:`my-awesome-page`}))},{label:`Owner`,optional:!0,control:r(j,()=>({placeholder:`dyhb`}))}],hint:`保存后仍可在设置里继续调整这些字段。`,actions:n(Object.assign(e=>{let t=x();return i(t,O,()=>({type:`text`,children:(e,t,r)=>T(e,r,()=>n(Object.assign(e=>{let t=x();return h(t,g(`Cancel`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i(t,O,()=>({color:`primary`,children:(e,t,r)=>T(e,r,()=>n(Object.assign(e=>{let t=x();return h(t,g(`Save project`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}))),code:`<Fieldset
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
/>`}));y(()=>u(e,C,S))}),w(()=>{let e=f(R,()=>({title:`Fieldset.Item 复合字段`,summary:`当字段布局更复杂时，可以用 children 组合，但把重复行收敛到 Fieldset.Item。`,tab:s,preview:a(()=>(()=>{let e=f(A.Legend,()=>({aside:`Autosave enabled`,children:`Profile settings`})),t=f(A.Label,()=>({as:`p`,className:`mt-0 min-h-0 px-0 text-sm opacity-70`,children:`组合写法仍然可用，适合逐块拼装复杂表单。`})),n=f(A.Item,()=>({horizontal:!0,label:`Display name`,required:!0,description:`团队和评论区会优先显示这个名称。`,control:r(j,()=>({placeholder:`Rue Design`})),hint:`建议控制在 2 到 24 个字符。`})),i=f(A.Item,()=>({horizontal:!0,label:`Workspace URL`,description:`公开访问地址，可在发布前再次调整。`,control:r(j,()=>({placeholder:`https://rue.design/workspace`}))})),a=f(j,()=>({type:`email`,placeholder:`team@rue.design`})),o=f(A.Item,()=>({horizontal:!0,label:`Support email`,optional:!0,hint:`用于接收账单和故障通知。`,children:a}));return f(A,()=>({variant:`soft`,tone:`neutral`,size:`large`,className:`w-full max-w-2xl`,children:[e,t,n,i,o]}))})()),code:`<Fieldset variant="soft" tone="neutral" size="large" className="w-full max-w-2xl">
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
</Fieldset>`}));y(()=>u(e,D,E))}),w(()=>{let e=f(R,()=>({title:`尺寸与状态`,summary:`size 管信息密度，invalid 管容器错误态；原生 disabled 仍透传给 fieldset。`,tab:c,preview:a(()=>n(Object.assign(e=>{let t=N().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,o=t.childNodes[1],s=o.parentNode,c=b(a);i(c,A,()=>({legend:`Compact settings`,description:`适合侧栏或弹窗里的轻量配置。`,variant:`outlined`,size:`small`,className:`w-full`,items:[{label:`Branch`,control:r(j,()=>({placeholder:`main`}))},{label:`Region`,optional:!0,control:r(j,()=>({placeholder:`Hangzhou`}))}]})),a.insertBefore(c,n);let l=b(s);return i(l,A,()=>({legend:`Verification`,description:`错误态会统一强调标题、底部提示和边框。`,invalid:!0,className:`w-full`,items:[{label:`Email`,invalid:!0,control:r(j,()=>({type:`email`,placeholder:`team@rue.design`})),hint:`当前邮箱尚未完成验证，请先检查收件箱。`},{label:`Backup email`,optional:!0,control:r(j,()=>({disabled:!0,placeholder:`disabled by parent fieldset`}))}],disabled:!0,hint:`只读模式下仍可展示当前表单结构与校验上下文。`})),s.insertBefore(l,o),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Fieldset
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
/>`}));y(()=>u(e,M,k))}),w(()=>{let e=f(R,()=>({title:`Fieldset fieldset-legend and label`,summary:`基础示例保持不变，展示最轻量的组合写法。`,tab:l,preview:a(()=>(()=>{let e=f(A.Legend,()=>({children:`Page title`})),t=f(j,()=>({placeholder:`My awesome page`})),n=f(A.Label,()=>({as:`p`,children:`You can edit page title later on from settings`}));return f(A,()=>({className:`w-xs rounded-box bg-base-100 p-4 shadow-sm`,children:[e,t,n]}))})()),code:`<Fieldset className="w-xs rounded-box bg-base-100 p-4 shadow-sm">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`}));y(()=>u(e,I,F))}),w(()=>{let e=f(R,()=>({title:`Fieldset with background and border`,summary:`展示手动 className 覆盖方式，和新 variant 可以自由混用。`,tab:d,preview:a(()=>(()=>{let e=f(A.Legend,()=>({children:`Page title`})),t=f(j,()=>({placeholder:`My awesome page`})),n=f(A.Label,()=>({as:`p`,children:`You can edit page title later on from settings`}));return f(A,()=>({className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[e,t,n]}))})()),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page title</Fieldset.Legend>
  <Input placeholder="My awesome page" />
  <Fieldset.Label as="p">You can edit page title later on from settings</Fieldset.Label>
</Fieldset>`}));y(()=>u(e,ne,V))}),w(()=>{let e=f(R,()=>({title:`Fieldset with multiple inputs`,summary:`基础多输入框示例保持，适合对比 items 写法和纯 JSX 写法。`,tab:p,preview:a(()=>(()=>{let e=f(A.Legend,()=>({children:`Page details`})),t=f(A.Label,()=>({children:`Title`})),n=f(j,()=>({placeholder:`My awesome page`})),r=f(A.Label,()=>({children:`Slug`})),i=f(j,()=>({placeholder:`my-awesome-page`})),a=f(A.Label,()=>({children:`Author`})),o=f(j,()=>({placeholder:`Name`}));return f(A,()=>({className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[e,t,n,r,i,a,o]}))})()),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Page details</Fieldset.Legend>
  <Fieldset.Label>Title</Fieldset.Label>
  <Input placeholder="My awesome page" />
  <Fieldset.Label>Slug</Fieldset.Label>
  <Input placeholder="my-awesome-page" />
  <Fieldset.Label>Author</Fieldset.Label>
  <Input placeholder="Name" />
</Fieldset>`}));y(()=>u(e,re,H))}),w(()=>{let e=f(R,()=>({title:`Fieldset with multiple join items`,summary:`基础 join 场景保持，适合放紧凑操作条或搜索表单。`,tab:m,preview:a(()=>(()=>{let e=f(A.Legend,()=>({children:`Settings`}));return f(A,()=>({className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[e,n(Object.assign(e=>{let t=P().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,o=t.childNodes[1],s=o.parentNode,c=b(a);i(c,j,()=>({className:`join-item`,placeholder:`Product name`})),a.insertBefore(c,r);let l=b(s);return i(l,O,()=>({className:`join-item`,children:(e,t,r)=>T(e,r,()=>n(Object.assign(e=>{let t=x();return h(t,g(`save`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(l,o),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]}))})()),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Settings</Fieldset.Legend>
  <div className="join">
    <Input className="join-item" placeholder="Product name" />
    <Button className="join-item">save</Button>
  </div>
</Fieldset>`}));y(()=>u(e,ie,U))}),w(()=>{let e=f(R,()=>({title:`Login form with fieldset`,summary:`登录表单示例展示，能直接对照推荐结构。`,tab:_,preview:a(()=>(()=>{let e=f(A.Legend,()=>({children:`Login`})),t=f(A.Label,()=>({children:`Email`})),n=f(j,()=>({type:`email`,placeholder:`Email`})),r=f(A.Label,()=>({children:`Password`})),i=f(j,()=>({type:`password`,placeholder:`Password`})),a=f(O,()=>({color:`neutral`,className:`mt-4`,children:`Login`}));return f(A,()=>({className:`w-xs rounded-box border border-base-300 bg-base-200 p-4`,children:[e,t,n,r,i,a]}))})()),code:`<Fieldset className="w-xs rounded-box border border-base-300 bg-base-200 p-4">
  <Fieldset.Legend>Login</Fieldset.Legend>
  <Fieldset.Label>Email</Fieldset.Label>
  <Input type="email" placeholder="Email" />
  <Fieldset.Label>Password</Fieldset.Label>
  <Input type="password" placeholder="Password" />
  <Button color="neutral" className="mt-4">Login</Button>
</Fieldset>`}));y(()=>u(e,ae,W))});let Z=b(K);i(Z,z,()=>({rows:B})),K.insertBefore(Z,G);let Q=b(J);i(Q,z,()=>({rows:ee})),J.insertBefore(Q,q);let $=b(X);return i($,z,()=>({rows:te})),X.insertBefore($,Y),e});return f(M,()=>({children:e}))})(),e=>E(()=>{})))};export{V as default};