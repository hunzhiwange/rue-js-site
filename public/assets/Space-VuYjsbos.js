import{$ as e,B as t,C as n,Dt as r,G as i,H as a,U as o,W as s,Z as c,ht as l,l as u,s as d,t as f,wt as p,yt as m}from"./vapor-runtime-C1rlwc61.js";import{a as h,n as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as _,t as v}from"./src-BLzF0BqW.js";import{n as y}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as b}from"./button-B1PhsXzm.js";import{t as x}from"./badge-brlKCV7x.js";import{t as S}from"./dropdown-BcbhaTo5.js";import{t as C}from"./tooltip-CeiUPXC_.js";import{t as w}from"./input-B3nHDIiJ.js";import{t as T}from"./PreviewBlock-CfdDuiov.js";var E={small:`var(--rue-theme-space-sm, 8px)`,middle:`var(--rue-theme-space-md, 16px)`,large:`var(--rue-theme-space-lg, 24px)`},D=(...e)=>e.filter(Boolean).join(` `),O=(...e)=>{let t={};return e.forEach(e=>{!e||typeof e!=`object`||Array.isArray(e)||Object.assign(t,e)}),Object.keys(t).length>0?t:void 0},k=e=>Array.isArray(e)?e.flatMap(e=>k(e)):e==null||typeof e==`boolean`?[]:[e],A=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e===`small`||e===`middle`||e===`large`?E[e]:e},j=e=>{if(Array.isArray(e))return{columnGap:A(e[0]),rowGap:A(e[1])};let t=A(e??`small`);return{columnGap:t,rowGap:t}},M=(e,t,n)=>n?`vertical`:e??t??`horizontal`,N=(e,t,n)=>{let r=t===0,i=t===n-1;return e===`vertical`?D(`rue-space-compact-item relative overflow-hidden`,!r&&`-mt-px rounded-t-none`,!i&&`rounded-b-none`):D(`rue-space-compact-item relative overflow-hidden`,!r&&`-ml-px rounded-l-none`,!i&&`rounded-r-none`)},P=e=>typeof e==`function`?e():e,F=e=>{if(e!=null){if(typeof e==`number`)return{minHeight:`${e}px`};if(e===`small`)return{fontSize:`0.875rem`};if(e===`large`)return{fontSize:`1rem`};if(/^\d/.test(e))return{minHeight:e}}},I=(e,t)=>v(`span`,{"aria-hidden":`true`,className:D(`rue-space-separator shrink-0 select-none text-base-content/45`,t===`vertical`&&`leading-none`),children:e}),L=Object.assign(({as:e=`div`,size:t,direction:r,orientation:i,vertical:a,align:o,split:s,separator:c,wrap:l=!1,block:u=!1,className:d,style:f,itemClassName:p,itemStyle:m,children:h,...g})=>{let v=e,y=k(h),b=M(i,r,a),x=o??(b===`horizontal`?`center`:void 0),S=j(t),C=c??s,w=b===`vertical`?S.rowGap:S.columnGap;return n(v,{...g,className:D(`rue-space min-w-0 max-w-full`,d),style:O({display:u?`flex`:`inline-flex`,flexDirection:b===`vertical`?`column`:`row`,flexWrap:l?`wrap`:`nowrap`,alignItems:x,width:u?`100%`:void 0,maxWidth:`100%`,columnGap:S.columnGap,rowGap:S.rowGap},f),"data-rue-space":``,"data-rue-space-direction":b,"aria-orientation":b},...y.map((e,t)=>{let n=e?.key??e?.props?.key??t,r=C!=null&&t<y.length-1;return _(`div`,{className:D(`rue-space-item min-w-0 max-w-full`,p),style:O({display:`flex`,flexDirection:b===`vertical`?`column`:`row`,alignItems:x,minWidth:0,maxWidth:`100%`,...r?b===`vertical`?{rowGap:w}:{columnGap:w}:{}},m),children:[e,r?I(P(C),b):null]},n)}))},{Compact:({as:e=`div`,size:t,direction:r,orientation:i,vertical:a,block:o=!1,className:s,style:c,children:l,...u})=>{let d=e,f=k(l);if(f.length===0)return null;let p=M(i,r,a),m=o?p===`vertical`?{width:`100%`}:{flex:`1 1 0%`}:void 0,h=F(t);return n(d,{...u,className:D(`rue-space-compact max-w-full`,s),style:O({display:`flex`,flexDirection:p===`vertical`?`column`:`row`,width:o?`100%`:void 0,maxWidth:`100%`},c),"data-rue-space-compact":``,"data-rue-space-direction":p,"aria-orientation":p},...f.map((e,t)=>v(`div`,{"data-rue-space-compact-item":``,className:D(N(p,t,f.length),o&&(p===`vertical`?`w-full`:`flex-1`)),style:O({display:`flex`,minWidth:0,maxWidth:`100%`},m,h),children:e},t)))}}),R=n=>u(l=>{let f=s(`div`,l);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,f);t(f,p),e(p,`table table-zebra`);let h=s(`thead`,p);t(p,h);let _=s(`tr`,h);t(h,_);let v=s(`th`,_);t(_,v),t(v,i(`属性`));let y=s(`th`,_);t(_,y),t(y,i(`说明`));let b=s(`th`,_);t(_,b),t(b,i(`类型`));let x=s(`th`,_);t(_,x),t(x,i(`默认值`));let S=s(`tbody`,p);t(p,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=g({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,l,f)=>{d(u(()=>{let n=o(),i=s(`tr`,n);t(n,i),r(()=>{c(i,`key`,String(e.prop))});let l=s(`td`,i);t(i,l);let u=s(`code`,l);t(l,u);let f=a(`rue:slot:anchor`);t(u,f),r(()=>{let t=e.prop;m(()=>d(t,u,f))});let p=s(`td`,i);t(i,p);let h=a(`rue:slot:anchor`);t(p,h),r(()=>{let t=e.description;m(()=>d(t,p,h))});let g=s(`td`,i);t(i,g);let _=s(`code`,g);t(g,_);let v=a(`rue:slot:anchor`);t(_,v),r(()=>{let t=e.type;m(()=>d(t,_,v))});let y=s(`td`,i);t(i,y);let b=s(`code`,y);t(y,b);let x=a(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;m(()=>d(t,b,x))}),n}),n,i)}})}),f}),z=n=>u(i=>{let o=s(`span`,i);c(o,`aria-hidden`,`true`),e(o,`text-[10px] font-semibold uppercase tracking-[0.12em]`);let l=a(`rue:slot:anchor`);return t(o,l),r(()=>{let e=n.label;m(()=>d(e,o,l))}),o}),B=[{key:`report`,label:`Report`,icon:v(z,{label:`RP`})},{key:`mail`,label:`Mail`,icon:v(z,{label:`ML`})},{key:`mobile`,label:`Mobile`,icon:v(z,{label:`MB`})}],V=[{key:`first`,label:`1st item`},{key:`second`,label:`2nd item`},{key:`third`,label:`3rd item`}],H=[{prop:`as`,description:`指定根节点标签或组件，适合 section、nav、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`主轴与交叉轴间距，支持 small / middle / large、数字像素值和 [columnGap, rowGap]。`,type:`'small' | 'middle' | 'large' | number | string | [SpaceSize, SpaceSize]`,defaultValue:`'small'`},{prop:`direction`,description:`主轴方向，保留 horizontal / vertical 两种布局。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`orientation`,description:`direction 的同义增强写法，适合和其他 Rue 组件保持语义一致。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`vertical`,description:`纵向快捷开关，传入 true 时直接切为 vertical。`,type:`boolean`,defaultValue:`false`},{prop:`align`,description:`交叉轴对齐，水平布局默认 center，垂直布局按内容自然拉伸。`,type:`'start' | 'end' | 'center' | 'baseline' | 'stretch'`,defaultValue:`'center'（horizontal）`},{prop:`separator / split`,description:`在相邻项之间插入分隔内容；自定义节点推荐传函数，确保每次都生成新的分隔符实例。`,type:`any | (() => any)`,defaultValue:`-`},{prop:`wrap`,description:`允许水平排列在空间不足时自动换行。`,type:`boolean`,defaultValue:`false`},{prop:`block`,description:`让容器使用 flex 并占满可用宽度，适合工具条和过滤区。`,type:`boolean`,defaultValue:`false`},{prop:`itemClassName / itemStyle`,description:`补充每个子项包装层的类名和内联样式，适合卡片、徽标和统计组。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],U=[{prop:`as`,description:`指定根节点标签或组件。`,type:`any`,defaultValue:`'div'`},{prop:`direction / orientation / vertical`,description:`Compact 的横向或纵向编排方式。`,type:`'horizontal' | 'vertical' | boolean`,defaultValue:`'horizontal'`},{prop:`block`,description:`让 Compact 组占满宽度，适合表单工具条和移动端批量操作。`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`用于调整 Compact 壳层的密度，适合文本段、标签组或自定义内容；不会生成子项间距。`,type:`'small' | 'middle' | 'large' | number | string`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],W=`<Space>
  <Button color="primary">Run build</Button>
  <Button color="secondary" variant="outline">Preview</Button>
  <Badge color="neutral">workspace</Badge>
</Space>`,G=`<div className="grid gap-4 lg:grid-cols-2">
  <Space align="start" className="rounded-box border border-base-300 bg-base-100 p-4">
    <Badge color="primary">baseline</Badge>
    <span className="text-2xl font-semibold">24h</span>
    <span className="text-sm opacity-60">fresh</span>
  </Space>

  <Space vertical align="stretch" className="rounded-box border border-base-300 bg-base-100 p-4">
    <div className="rounded-box bg-base-200 px-3 py-2">Upload assets</div>
    <div className="rounded-box bg-base-200 px-3 py-2">Sync routes</div>
    <div className="rounded-box bg-base-200 px-3 py-2">Publish preview</div>
  </Space>
</div>`,K=`<div className="space-y-4">
  <Space size="small">
    <Badge color="primary">small</Badge>
    <Badge color="secondary">8px token</Badge>
    <Badge color="accent">dense</Badge>
  </Space>

  <Space size="middle">
    <Badge color="primary">middle</Badge>
    <Badge color="secondary">balanced</Badge>
    <Badge color="accent">12px token</Badge>
  </Space>

  <Space size={[28, 14]} wrap className="max-w-xl">
    <Badge color="neutral">tuple gap</Badge>
    <Badge color="info">column 28</Badge>
    <Badge color="success">row 14</Badge>
    <Badge color="warning">wrap aware</Badge>
    <Badge color="error">custom density</Badge>
  </Space>
</div>`,ee=`<Space wrap size={[16, 12]} className="max-w-2xl rounded-box border border-dashed border-base-300 bg-base-100 p-4">
  <Badge color="primary">router</Badge>
  <Badge color="secondary">runtime-vapor</Badge>
  <Badge color="accent">design-system</Badge>
  <Badge color="neutral">sfc playground</Badge>
  <Badge color="info">bench</Badge>
  <Badge color="success">release</Badge>
  <Badge color="warning">compat</Badge>
  <Badge color="error">incident</Badge>
</Space>`,te=`<Space separator={() => <span className="text-xs uppercase tracking-[0.2em] opacity-35">/</span>}>
  <a className="link link-hover">Workspace</a>
  <a className="link link-hover">Design</a>
  <span className="font-medium">Space</span>
</Space>`,ne=`<Space.Compact className="w-full max-w-3xl">
  <Input className="w-full" placeholder="Search component or token" />
  <select className="select w-full min-w-40">
    <option>All teams</option>
    <option>Design infra</option>
    <option>Runtime</option>
  </select>
  <Button className="w-full lg:w-auto" color="primary">Search</Button>
</Space.Compact>`,re=`<Space.Compact vertical block className="w-full max-w-sm">
  <Input className="w-full" placeholder="Campaign title" />
  <Input className="w-full" placeholder="Owner" />
  <Button className="w-full" color="primary">Create workspace</Button>
</Space.Compact>`,ie=`<div className="space-y-4">
  <Space.Compact block>
    <Tooltip title="Like">
      <Button shape="square" aria-label="Like" icon={<span aria-hidden="true">LK</span>} />
    </Tooltip>
    <Tooltip title="Comment">
      <Button shape="square" aria-label="Comment" icon={<span aria-hidden="true">CM</span>} />
    </Tooltip>
    <Tooltip title="Star">
      <Button shape="square" aria-label="Star" icon={<span aria-hidden="true">ST</span>} />
    </Tooltip>
    <Tooltip title="Heart">
      <Button shape="square" aria-label="Heart" icon={<span aria-hidden="true">HT</span>} />
    </Tooltip>
    <Tooltip title="Share">
      <Button shape="square" aria-label="Share" icon={<span aria-hidden="true">SH</span>} />
    </Tooltip>
    <Tooltip title="Download">
      <Button shape="square" aria-label="Download" icon={<span aria-hidden="true">DL</span>} />
    </Tooltip>
    <Dropdown trigger="click" placement="bottomRight" items={compactRailMenuItems}>
      <Button shape="square" aria-label="More actions" icon={<span aria-hidden="true">...</span>} />
    </Dropdown>
  </Space.Compact>

  <Space.Compact block>
    <Button color="primary">Button 1</Button>
    <Button color="primary">Button 2</Button>
    <Button color="primary">Button 3</Button>
    <Button color="primary">Button 4</Button>
    <Tooltip title="Download disabled">
      <Button color="primary" shape="square" disabled aria-label="Download disabled" icon={<span aria-hidden="true">DL</span>} />
    </Tooltip>
    <Tooltip title="Download">
      <Button color="primary" shape="square" aria-label="Download" icon={<span aria-hidden="true">DL</span>} />
    </Tooltip>
  </Space.Compact>

  <Space.Compact block>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
    <Tooltip title="Download disabled">
      <Button shape="square" disabled aria-label="Download disabled" icon={<span aria-hidden="true">DL</span>} />
    </Tooltip>
    <Tooltip title="Download">
      <Button shape="square" aria-label="Download" icon={<span aria-hidden="true">DL</span>} />
    </Tooltip>
    <Button color="primary">Button 4</Button>
    <Dropdown trigger="click" placement="bottomRight" items={compactPrimaryMenuItems}>
      <Button color="primary" shape="square" aria-label="More actions" icon={<span aria-hidden="true">...</span>} />
    </Dropdown>
  </Space.Compact>
</div>`,ae=`<Space size="large" wrap>
  <Space.Compact orientation="vertical" className="w-40">
    <Button block className="justify-start">Button 1</Button>
    <Button block className="justify-start">Button 2</Button>
    <Button block className="justify-start">Button 3</Button>
  </Space.Compact>

  <Space.Compact orientation="vertical" className="w-40">
    <Button block type="dashed" className="justify-start">Button 1</Button>
    <Button block type="dashed" className="justify-start">Button 2</Button>
    <Button block type="dashed" className="justify-start">Button 3</Button>
  </Space.Compact>

  <Space.Compact orientation="vertical" className="w-40">
    <Button block color="primary" className="justify-start">Button 1</Button>
    <Button block color="primary" className="justify-start">Button 2</Button>
    <Button block color="primary" className="justify-start">Button 3</Button>
  </Space.Compact>

  <Space.Compact orientation="vertical" className="w-40">
    <Button block type="outlined" className="justify-start">Button 1</Button>
    <Button block type="outlined" className="justify-start">Button 2</Button>
    <Button block type="outlined" className="justify-start">Button 3</Button>
  </Space.Compact>
</Space>`,oe=`<Space block align="center" wrap className="rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm">
  <Space vertical className="min-w-52">
    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45">release room</span>
    <div>
      <div className="text-lg font-semibold">Weekly rollout</div>
      <div className="text-sm text-base-content/60">3 streams waiting for approval</div>
    </div>
  </Space>

  <Space size="large" wrap className="flex-1 justify-end">
    <Badge color="primary">preview ready</Badge>
    <Badge color="secondary">7 checks</Badge>
    <Badge color="accent">2 owners</Badge>
    <Space.Compact>
      <Button variant="outline">Draft</Button>
      <Button color="primary">Publish</Button>
    </Space.Compact>
  </Space>
</Space>`,q=()=>{let{tabs:n}=h(`useSetup:0:0`,()=>p(()=>({tabs:{basic:h(`ref:1:0`,()=>l(`preview`)),direction:h(`ref:1:1`,()=>l(`preview`)),size:h(`ref:1:2`,()=>l(`preview`)),wrap:h(`ref:1:3`,()=>l(`preview`)),separator:h(`ref:1:4`,()=>l(`preview`)),compactToolbar:h(`ref:1:5`,()=>l(`preview`)),compactButtons:h(`ref:1:6`,()=>l(`preview`)),compactVerticalButtons:h(`ref:1:7`,()=>l(`preview`)),compactVertical:h(`ref:1:8`,()=>l(`preview`)),scene:h(`ref:1:9`,()=>l(`preview`))}})));return u(c=>{let l=o(),p=a(`rue:component:anchor`);return t(l,p),d(f(y,{children:u(()=>{let c=o(),l=s(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let u=s(`h1`,l);t(l,u),t(u,i(`Space 间距容器`));let p=s(`p`,l);t(l,p),e(p,`text-sm mt-3 mb-3`),t(p,i(`Space 现在不再只是“自己写 gap”的占位组件，而是补成了一个完整的布局原语。它保留 Rue 自己干净直接的视觉，不抢内容本身的风头，同时把常用的水平/垂直编排、对齐、换行、分隔符和 Compact 紧凑组合一次补齐。`));let h=s(`h2`,l);t(l,h),t(h,i(`何时使用`));let g=s(`ul`,l);t(l,g);let y=s(`li`,g);t(g,y),t(y,i(`需要把按钮、标签、统计块、输入控件排成一致的节奏，而不想在每个页面重复手写 gap。`));let E=s(`li`,g);t(g,E),t(E,i(`需要在同一套 API 下切换 horizontal、vertical、wrap 和 separator，保持布局表达统一。`));let D=s(`li`,g);t(g,D),t(D,i(`需要工具条、搜索栏、批量操作区这类更紧凑的组合时，可以直接切到 Space.Compact。`));let O=s(`h2`,l);t(l,O),t(O,i(`推荐用法`));let k=a(`rue:component:anchor`);t(l,k),r(()=>{let e=f(T,{title:`基础间距`,summary:`最小可用写法，适合动作按钮、标签和轻量操作组。`,tab:n.basic,code:W,preview:v(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:_(L,{children:[v(b,{color:`primary`,children:`Run build`}),v(b,{color:`secondary`,variant:`outline`,children:`Preview`}),v(x,{color:`neutral`,children:`workspace`})]})})});m(()=>d(e,l,k))});let A=a(`rue:component:anchor`);t(l,A),r(()=>{let e=f(T,{title:`方向与对齐`,summary:`主轴方向和交叉轴对齐都在 Space 本身表达，不需要额外写 flex 类。`,tab:n.direction,code:G,preview:_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(L,{align:`baseline`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[v(x,{color:`primary`,children:`baseline`}),v(`span`,{className:`text-2xl font-semibold`,children:`24h`}),v(`span`,{className:`text-sm opacity-60`,children:`fresh`})]}),_(L,{vertical:!0,align:`stretch`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[v(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Upload assets`}),v(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Sync routes`}),v(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Publish preview`})]})]})});m(()=>d(e,l,A))});let j=a(`rue:component:anchor`);t(l,j),r(()=>{let e=f(T,{title:`尺寸与自定义 Gap`,summary:`延续 small / middle / large 预设，也支持 tuple 间距覆盖列距与行距。`,tab:n.size,code:K,preview:_(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[_(L,{size:`small`,children:[v(x,{color:`primary`,children:`small`}),v(x,{color:`secondary`,children:`8px token`}),v(x,{color:`accent`,children:`dense`})]}),_(L,{size:`middle`,children:[v(x,{color:`primary`,children:`middle`}),v(x,{color:`secondary`,children:`balanced`}),v(x,{color:`accent`,children:`12px token`})]}),_(L,{size:[28,14],wrap:!0,className:`max-w-xl`,children:[v(x,{color:`neutral`,children:`tuple gap`}),v(x,{color:`info`,children:`column 28`}),v(x,{color:`success`,children:`row 14`}),v(x,{color:`warning`,children:`wrap aware`}),v(x,{color:`error`,children:`custom density`})]})]})});m(()=>d(e,l,j))});let M=a(`rue:component:anchor`);t(l,M),r(()=>{let e=f(T,{title:`自动换行`,summary:`用 wrap 处理标签墙、筛选条件和批量状态块，保持行距稳定。`,tab:n.wrap,code:ee,preview:_(L,{wrap:!0,size:[16,12],className:`max-w-2xl rounded-[1.5rem] border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`,children:[v(x,{color:`primary`,children:`router`}),v(x,{color:`secondary`,children:`runtime-vapor`}),v(x,{color:`accent`,children:`design-system`}),v(x,{color:`neutral`,children:`sfc playground`}),v(x,{color:`info`,children:`bench`}),v(x,{color:`success`,children:`release`}),v(x,{color:`warning`,children:`compat`}),v(x,{color:`error`,children:`incident`})]})});m(()=>d(e,l,M))});let N=a(`rue:component:anchor`);t(l,N),r(()=>{let e=f(T,{title:`Separator / Split`,summary:`分隔符适合 breadcrumb、命令路径和键值对；自定义节点推荐传函数。`,tab:n.separator,code:te,preview:v(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:_(L,{separator:()=>v(`span`,{className:`text-xs uppercase tracking-[0.2em] opacity-35`,children:`/`}),children:[v(`a`,{className:`link link-hover`,children:`Workspace`}),v(`a`,{className:`link link-hover`,children:`Design`}),v(`span`,{className:`font-medium`,children:`Space`})]})})});m(()=>d(e,l,N))});let P=a(`rue:component:anchor`);t(l,P),r(()=>{let e=f(T,{title:`Compact 横向工具条`,summary:`把输入、筛选和提交动作收成一个连续控制带，适合搜索栏与操作条；Compact 默认就是无间距拼接。`,tab:n.compactToolbar,code:ne,preview:v(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:_(L.Compact,{className:`w-full max-w-3xl`,children:[v(w,{className:`w-full`,placeholder:`Search component or token`}),_(`select`,{className:`select w-full min-w-40`,children:[v(`option`,{children:`All teams`}),v(`option`,{children:`Design infra`}),v(`option`,{children:`Runtime`})]}),v(b,{className:`w-full lg:w-auto`,color:`primary`,children:`Search`})]})})});m(()=>d(e,l,P))});let F=a(`rue:component:anchor`);t(l,F),r(()=>{let e=f(T,{title:`Compact 按钮拼接`,summary:`补一组更接近操作面板的按钮拼接示例：图标轨道、主色动作条和带下拉收口的混合按钮组。`,tab:n.compactButtons,code:ie,preview:_(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[_(L.Compact,{block:!0,children:[v(C,{title:`Like`,children:v(b,{shape:`square`,"aria-label":`Like`,icon:v(z,{label:`LK`})})}),v(C,{title:`Comment`,children:v(b,{shape:`square`,"aria-label":`Comment`,icon:v(z,{label:`CM`})})}),v(C,{title:`Star`,children:v(b,{shape:`square`,"aria-label":`Star`,icon:v(z,{label:`ST`})})}),v(C,{title:`Heart`,children:v(b,{shape:`square`,"aria-label":`Heart`,icon:v(z,{label:`HT`})})}),v(C,{title:`Share`,children:v(b,{shape:`square`,"aria-label":`Share`,icon:v(z,{label:`SH`})})}),v(C,{title:`Download`,children:v(b,{shape:`square`,"aria-label":`Download`,icon:v(z,{label:`DL`})})}),v(S,{trigger:`click`,placement:`bottomRight`,items:B,children:v(b,{shape:`square`,"aria-label":`More actions`,icon:v(z,{label:`...`})})})]}),_(L.Compact,{block:!0,children:[v(b,{color:`primary`,children:`Button 1`}),v(b,{color:`primary`,children:`Button 2`}),v(b,{color:`primary`,children:`Button 3`}),v(b,{color:`primary`,children:`Button 4`}),v(b,{color:`primary`,disabled:!0,title:`Disabled download`,icon:v(z,{label:`DL`})}),v(b,{color:`primary`,title:`Download`,icon:v(z,{label:`DL`})})]}),_(L.Compact,{block:!0,children:[v(b,{children:`Button 1`}),v(b,{children:`Button 2`}),v(b,{children:`Button 3`}),v(b,{disabled:!0,title:`Disabled download`,icon:v(z,{label:`DL`})}),v(b,{title:`Download`,icon:v(z,{label:`DL`})}),v(b,{color:`primary`,children:`Button 4`}),v(S,{trigger:`click`,placement:`bottomRight`,items:V,children:v(b,{color:`primary`,title:`More actions`,icon:v(z,{label:`...`})})})]})]})});m(()=>d(e,l,F))});let I=a(`rue:component:anchor`);t(l,I),r(()=>{let e=f(T,{title:`Compact 垂直按钮组`,summary:`再补一组纵向按钮拼接，直接把默认、dashed、primary 和 outlined 四种按钮风格摆在一起。`,tab:n.compactVerticalButtons,code:ae,preview:v(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:_(L,{size:`large`,wrap:!0,children:[_(L.Compact,{orientation:`vertical`,className:`w-40`,children:[v(b,{block:!0,className:`justify-start`,children:`Button 1`}),v(b,{block:!0,className:`justify-start`,children:`Button 2`}),v(b,{block:!0,className:`justify-start`,children:`Button 3`})]}),_(L.Compact,{orientation:`vertical`,className:`w-40`,children:[v(b,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 1`}),v(b,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 2`}),v(b,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 3`})]}),_(L.Compact,{orientation:`vertical`,className:`w-40`,children:[v(b,{block:!0,color:`primary`,className:`justify-start`,children:`Button 1`}),v(b,{block:!0,color:`primary`,className:`justify-start`,children:`Button 2`}),v(b,{block:!0,color:`primary`,className:`justify-start`,children:`Button 3`})]}),_(L.Compact,{orientation:`vertical`,className:`w-40`,children:[v(b,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 1`}),v(b,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 2`}),v(b,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 3`})]})]})})});m(()=>d(e,l,I))});let q=a(`rue:component:anchor`);t(l,q),r(()=>{let e=f(T,{title:`Compact 纵向表单`,summary:`纵向 Compact 更适合移动端或窄侧栏里的批量录入。`,tab:n.compactVertical,code:re,preview:v(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:_(L.Compact,{vertical:!0,block:!0,className:`w-full max-w-sm`,children:[v(w,{className:`w-full`,placeholder:`Campaign title`}),v(w,{className:`w-full`,placeholder:`Owner`}),v(b,{className:`w-full`,color:`primary`,children:`Create workspace`})]})})});m(()=>d(e,l,q))});let J=a(`rue:component:anchor`);t(l,J),r(()=>{let e=f(T,{title:`场景化组合`,summary:`Space 负责主节奏，Space.Compact 负责局部收口，适合真实工作台头部。`,tab:n.scene,code:oe,preview:_(L,{block:!0,align:`center`,wrap:!0,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[_(L,{vertical:!0,className:`min-w-52`,children:[v(`span`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:`release room`}),_(`div`,{children:[v(`div`,{className:`text-lg font-semibold`,children:`Weekly rollout`}),v(`div`,{className:`text-sm text-base-content/60`,children:`3 streams waiting for approval`})]})]}),_(L,{size:`large`,wrap:!0,className:`flex-1 justify-end`,children:[v(x,{color:`primary`,children:`preview ready`}),v(x,{color:`secondary`,children:`7 checks`}),v(x,{color:`accent`,children:`2 owners`}),_(L.Compact,{children:[v(b,{variant:`outline`,children:`Draft`}),v(b,{color:`primary`,children:`Publish`})]})]})]})});m(()=>d(e,l,J))});let Y=s(`h2`,l);t(l,Y),t(Y,i(`API`));let X=a(`rue:component:anchor`);t(l,X),r(()=>{let e=f(R,{rows:H});m(()=>d(e,l,X))});let Z=s(`h2`,l);t(l,Z),e(Z,`mt-10`),t(Z,i(`Space.Compact API`));let Q=s(`p`,l);t(l,Q),e(Q,`text-sm opacity-70`),t(Q,i(`Space.Compact 对应的是 compact 语义：它负责把控件压成连续组，默认不提供 gap；如果你要的是普通留白，请继续使用 Space。`));let $=a(`rue:component:anchor`);return t(l,$),r(()=>{let e=f(R,{rows:U});m(()=>d(e,l,$))}),c})}),l,p),l})};export{q as default};