import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,s as d,t as f,tn as p,tt as m,vt as h,wt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as y,t as b}from"./src-Dlanwp1X.js";import{t as x}from"./button-BaOJ_LfE.js";import{t as S}from"./badge-B5AIOSH2.js";import{t as C}from"./dropdown-BYa0OC3L.js";import{t as w}from"./tooltip-iAnk6pBi.js";import{t as T}from"./input-D7_ql2o3.js";import{r as E}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as D}from"./PreviewBlock-CCAV1yb7.js";var O={small:`var(--rue-theme-space-sm, 8px)`,middle:`var(--rue-theme-space-md, 16px)`,large:`var(--rue-theme-space-lg, 24px)`},k=(...e)=>e.filter(Boolean).join(` `),A=(...e)=>{let t={};return e.forEach(e=>{!e||typeof e!=`object`||Array.isArray(e)||Object.assign(t,e)}),Object.keys(t).length>0?t:void 0},j=e=>Array.isArray(e)?e.flatMap(e=>j(e)):e==null||typeof e==`boolean`?[]:[e],M=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e===`small`||e===`middle`||e===`large`?O[e]:e},N=e=>{if(Array.isArray(e))return{columnGap:M(e[0]),rowGap:M(e[1])};let t=M(e??`small`);return{columnGap:t,rowGap:t}},P=(e,t,n)=>n?`vertical`:e??t??`horizontal`,F=(e,t,n)=>{let r=t===0,i=t===n-1;return e===`vertical`?k(`rue-space-compact-item relative overflow-hidden`,!r&&`-mt-px rounded-t-none`,!i&&`rounded-b-none`):k(`rue-space-compact-item relative overflow-hidden`,!r&&`-ml-px rounded-l-none`,!i&&`rounded-r-none`)},I=e=>typeof e==`function`?e():e,L=e=>{if(e!=null){if(typeof e==`number`)return{minHeight:`${e}px`};if(e===`small`)return{fontSize:`0.875rem`};if(e===`large`)return{fontSize:`1rem`};if(/^\d/.test(e))return{minHeight:e}}},R=(n,i)=>a(a=>{let o=u(`span`,a);r(o,`aria-hidden`,`true`),t(()=>{l(o,k(`rue-space-separator shrink-0 select-none text-base-content/45`,i===`vertical`&&`leading-none`))});let c=m(`rue:slot:anchor`);return e(o,c),t(()=>{let e=n;p(()=>s(e,o,c))}),o}),z=n=>a(r=>{let a=u(`div`,r);t(()=>{l(a,k(`rue-space-item min-w-0 max-w-full`,n.itemClassName))}),t(()=>{h(a,A({display:`flex`,flexDirection:n.direction===`vertical`?`column`:`row`,alignItems:n.align,minWidth:0,maxWidth:`100%`,...n.showSeparator?n.direction===`vertical`?{rowGap:n.separatorGap}:{columnGap:n.separatorGap}:{}},n.itemStyle))});let o=m(`rue:slot:anchor`);e(a,o),t(()=>{let e=n.child;p(()=>s(e,a,o))}),e(a,i(` `));let c=m(`rue:slot:anchor`);return e(a,c),t(()=>{let e=n.showSeparator?R(I(n.separator),n.direction):``;p(()=>s(e,a,c))}),a}),B=n=>a(i=>{let a=u(`div`,i);r(a,`data-rue-space-compact-item`,``),t(()=>{l(a,k(F(n.direction,n.index,n.total),n.block&&(n.direction===`vertical`?`w-full`:`flex-1`)))}),t(()=>{h(a,A({display:`flex`,minWidth:0,maxWidth:`100%`},n.blockItemStyle,n.compactShellStyle))});let o=m(`rue:slot:anchor`);return e(a,o),t(()=>{let e=n.child;p(()=>s(e,a,o))}),a}),V=Object.assign(n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:h,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,__rue_rest_omit_8:S,__rue_rest_omit_9:C,__rue_rest_omit_10:w,__rue_rest_omit_11:T,__rue_rest_omit_12:E,__rue_rest_omit_13:D,__rue_rest_omit_14:O,rest:M,Component:F,childNodes:I,resolvedDirection:L,resolvedAlign:R,gap:B,mergedSeparator:V,separatorGap:H}=_(`useSetup:0:0`,()=>c(()=>{let{as:e,size:t,direction:r,orientation:i,vertical:a,align:o,split:s,separator:c,wrap:l,block:u,className:d,style:f,itemClassName:p,itemStyle:m,children:h,...v}=n,y=n.as===void 0?`div`:n.as,b=_(`computed:1:0`,()=>g(()=>j(n.children))),x=_(`computed:1:1`,()=>g(()=>P(n.orientation,n.direction,n.vertical))),S=x,C=_(`computed:1:2`,()=>g(()=>n.align??(S.get()===`horizontal`?`center`:void 0))),w=_(`computed:1:3`,()=>g(()=>N(n.size))),T=w;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,__rue_rest_omit_14:h,rest:v,Component:y,childNodes:b,resolvedDirection:x,resolvedAlign:C,gap:w,mergedSeparator:_(`computed:1:4`,()=>g(()=>n.separator??n.split)),separatorGap:_(`computed:1:5`,()=>g(()=>S.get()===`vertical`?T.get().rowGap:T.get().columnGap))}}));return a(r=>{let i=o(),c=m(`rue:component:anchor`);return e(i,c),t(()=>{let r=f(F,{...M,className:k(`rue-space min-w-0 max-w-full`,n.className),style:A({display:n.block!==void 0&&n.block?`flex`:`inline-flex`,flexDirection:L.get()===`vertical`?`column`:`row`,flexWrap:n.wrap!==void 0&&n.wrap?`wrap`:`nowrap`,alignItems:R.get(),width:n.block!==void 0&&n.block?`100%`:void 0,maxWidth:`100%`,columnGap:B.get().columnGap,rowGap:B.get().rowGap},n.style),"data-rue-space":``,"data-rue-space-direction":L.get(),"aria-orientation":L.get(),children:a(()=>{let r=o(),i=m(`rue:list:start`),a=m(`rue:list:end`);e(r,i),e(r,a);let s=new Map;return t(()=>{s=v({items:I.get()||[],getKey:(e,t)=>e?.key??e?.props?.key??t,elements:s,parent:i.parentNode,before:a,start:i,renderItem:(e,t,r,i,a)=>{d(f(z,{key:e?.key??e?.props?.key??a,child:e,direction:L.get(),align:R.get(),itemClassName:n.itemClassName,itemStyle:n.itemStyle,showSeparator:V.get()!=null&&a<I.get().length-1,separator:V.get(),separatorGap:H.get()}),t,r,i)}})}),r})});p(()=>s(r,i,c))}),i})},{Compact:n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:h,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,__rue_rest_omit_8:S,rest:C,Component:w,childNodes:T}=_(`useSetup:0:0:dup1`,()=>c(()=>{let{as:e,size:t,direction:r,orientation:i,vertical:a,block:o,className:s,style:c,children:l,...u}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:n.as===void 0?`div`:n.as,childNodes:_(`computed:1:6`,()=>g(()=>j(n.children)))}}));if(T.get().length===0)return null;let E=P(n.orientation,n.direction,n.vertical),D=n.block!==void 0&&n.block?E===`vertical`?{width:`100%`}:{flex:`1 1 0%`}:void 0,O=L(n.size);return a(r=>{let i=o(),c=m(`rue:component:anchor`);return e(i,c),t(()=>{let r=f(w,{...C,className:k(`rue-space-compact max-w-full`,n.className),style:A({display:`flex`,flexDirection:E===`vertical`?`column`:`row`,width:n.block!==void 0&&n.block?`100%`:void 0,maxWidth:`100%`},n.style),"data-rue-space-compact":``,"data-rue-space-direction":E,"aria-orientation":E,children:a(()=>{let r=o(),i=m(`rue:list:start`),a=m(`rue:list:end`);e(r,i),e(r,a);let s=new Map;return t(()=>{s=v({items:T.get()||[],getKey:(e,t)=>t,elements:s,parent:i.parentNode,before:a,start:i,renderItem:(e,t,r,i,a)=>{d(f(B,{key:a,child:e,direction:E,index:a,total:T.get().length,block:n.block===void 0?!1:n.block,blockItemStyle:D,compactShellStyle:O}),t,r,i)}})}),r})});p(()=>s(r,i,c))}),i})}}),H=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=u(`table`,d);e(d,f),l(f,`table table-zebra`);let h=u(`thead`,f);e(f,h);let g=u(`tr`,h);e(h,g);let _=u(`th`,g);e(g,_),e(_,i(`属性`));let y=u(`th`,g);e(g,y),e(y,i(`说明`));let b=u(`th`,g);e(g,b),e(b,i(`类型`));let x=u(`th`,g);e(g,x),e(x,i(`默认值`));let S=u(`tbody`,f);e(f,S);let C=m(`rue:list:start`),w=m(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=m(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;p(()=>s(e,l,d))});let f=u(`td`,a);e(a,f);let h=m(`rue:slot:anchor`);e(f,h),t(()=>{let e=n.description;p(()=>s(e,f,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=m(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;p(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=m(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;p(()=>s(e,b,x))}),i}),i,c)}})}),d}),U=n=>a(i=>{let a=u(`span`,i);r(a,`aria-hidden`,`true`),l(a,`text-[10px] font-semibold uppercase tracking-[0.12em]`);let o=m(`rue:slot:anchor`);return e(a,o),t(()=>{let e=n.label;p(()=>s(e,a,o))}),a}),W=[{key:`report`,label:`Report`,icon:b(U,{label:`RP`})},{key:`mail`,label:`Mail`,icon:b(U,{label:`ML`})},{key:`mobile`,label:`Mobile`,icon:b(U,{label:`MB`})}],G=[{key:`first`,label:`1st item`},{key:`second`,label:`2nd item`},{key:`third`,label:`3rd item`}],K=[{prop:`as`,description:`指定根节点标签或组件，适合 section、nav、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`主轴与交叉轴间距，支持 small / middle / large、数字像素值和 [columnGap, rowGap]。`,type:`'small' | 'middle' | 'large' | number | string | [SpaceSize, SpaceSize]`,defaultValue:`'small'`},{prop:`direction`,description:`主轴方向，保持 horizontal / vertical 两种布局。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`orientation`,description:`direction 的同义增强写法，适合和其他 Rue 组件保持语义一致。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`vertical`,description:`纵向快捷开关，传入 true 时直接切为 vertical。`,type:`boolean`,defaultValue:`false`},{prop:`align`,description:`交叉轴对齐，水平布局默认 center，垂直布局按内容自然拉伸。`,type:`'start' | 'end' | 'center' | 'baseline' | 'stretch'`,defaultValue:`'center'（horizontal）`},{prop:`separator / split`,description:`在相邻项之间插入分隔内容；自定义节点推荐传函数，确保每次都生成新的分隔符实例。`,type:`any | (() => any)`,defaultValue:`-`},{prop:`wrap`,description:`允许水平排列在空间不足时自动换行。`,type:`boolean`,defaultValue:`false`},{prop:`block`,description:`让容器使用 flex 并占满可用宽度，适合工具条和过滤区。`,type:`boolean`,defaultValue:`false`},{prop:`itemClassName / itemStyle`,description:`补充每个子项包装层的类名和内联样式，适合卡片、徽标和统计组。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],q=[{prop:`as`,description:`指定根节点标签或组件。`,type:`any`,defaultValue:`'div'`},{prop:`direction / orientation / vertical`,description:`Compact 的横向或纵向编排方式。`,type:`'horizontal' | 'vertical' | boolean`,defaultValue:`'horizontal'`},{prop:`block`,description:`让 Compact 组占满宽度，适合表单工具条和移动端批量操作。`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`用于调整 Compact 壳层的密度，适合文本段、标签组或自定义内容；不会生成子项间距。`,type:`'small' | 'middle' | 'large' | number | string`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],J=`<Space>
  <Button color="primary">Run build</Button>
  <Button color="secondary" variant="outline">Preview</Button>
  <Badge color="neutral">workspace</Badge>
</Space>`,Y=`<div className="grid gap-4 lg:grid-cols-2">
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
</div>`,X=`<div className="space-y-4">
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
</Space>`,Z=()=>{let{tabs:r}=_(`useSetup:0:0`,()=>c(()=>({tabs:{basic:_(`ref:1:0`,()=>n(`preview`)),direction:_(`ref:1:1`,()=>n(`preview`)),size:_(`ref:1:2`,()=>n(`preview`)),wrap:_(`ref:1:3`,()=>n(`preview`)),separator:_(`ref:1:4`,()=>n(`preview`)),compactToolbar:_(`ref:1:5`,()=>n(`preview`)),compactButtons:_(`ref:1:6`,()=>n(`preview`)),compactVerticalButtons:_(`ref:1:7`,()=>n(`preview`)),compactVertical:_(`ref:1:8`,()=>n(`preview`)),scene:_(`ref:1:9`,()=>n(`preview`))}})));return a(n=>{let c=o(),d=m(`rue:component:anchor`);return e(c,d),s(f(E,{children:a(()=>{let n=o(),a=u(`div`,n);e(n,a),l(a,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,a);e(a,c),e(c,i(`Space 间距容器`));let d=u(`p`,a);e(a,d),l(d,`text-sm mt-3 mb-3`),e(d,i(`Space 现在不再只是“自己写 gap”的占位组件，而是补成了一个完整的布局原语。它使用 Rue 自己干净直接的视觉，不抢内容本身的风头，同时把常用的水平/垂直编排、对齐、换行、分隔符和 Compact 紧凑组合一次覆盖。`));let h=u(`h2`,a);e(a,h),e(h,i(`何时使用`));let g=u(`ul`,a);e(a,g);let _=u(`li`,g);e(g,_),e(_,i(`需要把按钮、标签、统计块、输入控件排成一致的节奏，而不想在每个页面重复手写 gap。`));let v=u(`li`,g);e(g,v),e(v,i(`需要在同一套 API 下切换 horizontal、vertical、wrap 和 separator，保持布局表达统一。`));let E=u(`li`,g);e(g,E),e(E,i(`需要工具条、搜索栏、批量操作区这类更紧凑的组合时，可以直接切到 Space.Compact。`));let O=u(`h2`,a);e(a,O),e(O,i(`推荐用法`));let k=m(`rue:component:anchor`);e(a,k),t(()=>{let e=f(D,{title:`基础间距`,summary:`最小可用写法，适合动作按钮、标签和轻量操作组。`,tab:r.basic,code:J,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{children:[b(x,{color:`primary`,children:`Run build`}),b(x,{color:`secondary`,variant:`outline`,children:`Preview`}),b(S,{color:`neutral`,children:`workspace`})]})})});p(()=>s(e,a,k))});let A=m(`rue:component:anchor`);e(a,A),t(()=>{let e=f(D,{title:`方向与对齐`,summary:`主轴方向和交叉轴对齐都在 Space 本身表达，不需要额外写 flex 类。`,tab:r.direction,code:Y,preview:y(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[y(V,{align:`baseline`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(S,{color:`primary`,children:`baseline`}),b(`span`,{className:`text-2xl font-semibold`,children:`24h`}),b(`span`,{className:`text-sm opacity-60`,children:`fresh`})]}),y(V,{vertical:!0,align:`stretch`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Upload assets`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Sync routes`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Publish preview`})]})]})});p(()=>s(e,a,A))});let j=m(`rue:component:anchor`);e(a,j),t(()=>{let e=f(D,{title:`尺寸与自定义 Gap`,summary:`使用 small / middle / large 预设，也支持 tuple 间距覆盖列距与行距。`,tab:r.size,code:X,preview:y(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[y(V,{size:`small`,children:[b(S,{color:`primary`,children:`small`}),b(S,{color:`secondary`,children:`8px token`}),b(S,{color:`accent`,children:`dense`})]}),y(V,{size:`middle`,children:[b(S,{color:`primary`,children:`middle`}),b(S,{color:`secondary`,children:`balanced`}),b(S,{color:`accent`,children:`12px token`})]}),y(V,{size:[28,14],wrap:!0,className:`max-w-xl`,children:[b(S,{color:`neutral`,children:`tuple gap`}),b(S,{color:`info`,children:`column 28`}),b(S,{color:`success`,children:`row 14`}),b(S,{color:`warning`,children:`wrap aware`}),b(S,{color:`error`,children:`custom density`})]})]})});p(()=>s(e,a,j))});let M=m(`rue:component:anchor`);e(a,M),t(()=>{let e=f(D,{title:`自动换行`,summary:`用 wrap 处理标签墙、筛选条件和批量状态块，保持行距稳定。`,tab:r.wrap,code:ee,preview:y(V,{wrap:!0,size:[16,12],className:`max-w-2xl rounded-[1.5rem] border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(S,{color:`primary`,children:`router`}),b(S,{color:`secondary`,children:`runtime-vapor`}),b(S,{color:`accent`,children:`design-system`}),b(S,{color:`neutral`,children:`sfc playground`}),b(S,{color:`info`,children:`bench`}),b(S,{color:`success`,children:`release`}),b(S,{color:`warning`,children:`compat`}),b(S,{color:`error`,children:`incident`})]})});p(()=>s(e,a,M))});let N=m(`rue:component:anchor`);e(a,N),t(()=>{let e=f(D,{title:`Separator / Split`,summary:`分隔符适合 breadcrumb、命令路径和键值对；自定义节点推荐传函数。`,tab:r.separator,code:te,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{separator:()=>b(`span`,{className:`text-xs uppercase tracking-[0.2em] opacity-35`,children:`/`}),children:[b(`a`,{className:`link link-hover`,children:`Workspace`}),b(`a`,{className:`link link-hover`,children:`Design`}),b(`span`,{className:`font-medium`,children:`Space`})]})})});p(()=>s(e,a,N))});let P=m(`rue:component:anchor`);e(a,P),t(()=>{let e=f(D,{title:`Compact 横向工具条`,summary:`把输入、筛选和提交动作收成一个连续控制带，适合搜索栏与操作条；Compact 默认就是无间距拼接。`,tab:r.compactToolbar,code:ne,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V.Compact,{className:`w-full max-w-3xl`,children:[b(T,{className:`w-full`,placeholder:`Search component or token`}),y(`select`,{className:`select w-full min-w-40`,children:[b(`option`,{children:`All teams`}),b(`option`,{children:`Design infra`}),b(`option`,{children:`Runtime`})]}),b(x,{className:`w-full lg:w-auto`,color:`primary`,children:`Search`})]})})});p(()=>s(e,a,P))});let F=m(`rue:component:anchor`);e(a,F),t(()=>{let e=f(D,{title:`Compact 按钮拼接`,summary:`补一组更接近操作面板的按钮拼接示例：图标轨道、主色动作条和带下拉收口的混合按钮组。`,tab:r.compactButtons,code:ie,preview:y(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[y(V.Compact,{block:!0,children:[b(w,{title:`Like`,children:b(x,{shape:`square`,"aria-label":`Like`,icon:b(U,{label:`LK`})})}),b(w,{title:`Comment`,children:b(x,{shape:`square`,"aria-label":`Comment`,icon:b(U,{label:`CM`})})}),b(w,{title:`Star`,children:b(x,{shape:`square`,"aria-label":`Star`,icon:b(U,{label:`ST`})})}),b(w,{title:`Heart`,children:b(x,{shape:`square`,"aria-label":`Heart`,icon:b(U,{label:`HT`})})}),b(w,{title:`Share`,children:b(x,{shape:`square`,"aria-label":`Share`,icon:b(U,{label:`SH`})})}),b(w,{title:`Download`,children:b(x,{shape:`square`,"aria-label":`Download`,icon:b(U,{label:`DL`})})}),b(C,{trigger:`click`,placement:`bottomRight`,items:W,children:b(x,{shape:`square`,"aria-label":`More actions`,icon:b(U,{label:`...`})})})]}),y(V.Compact,{block:!0,children:[b(x,{color:`primary`,children:`Button 1`}),b(x,{color:`primary`,children:`Button 2`}),b(x,{color:`primary`,children:`Button 3`}),b(x,{color:`primary`,children:`Button 4`}),b(x,{color:`primary`,disabled:!0,title:`Disabled download`,icon:b(U,{label:`DL`})}),b(x,{color:`primary`,title:`Download`,icon:b(U,{label:`DL`})})]}),y(V.Compact,{block:!0,children:[b(x,{children:`Button 1`}),b(x,{children:`Button 2`}),b(x,{children:`Button 3`}),b(x,{disabled:!0,title:`Disabled download`,icon:b(U,{label:`DL`})}),b(x,{title:`Download`,icon:b(U,{label:`DL`})}),b(x,{color:`primary`,children:`Button 4`}),b(C,{trigger:`click`,placement:`bottomRight`,items:G,children:b(x,{color:`primary`,title:`More actions`,icon:b(U,{label:`...`})})})]})]})});p(()=>s(e,a,F))});let I=m(`rue:component:anchor`);e(a,I),t(()=>{let e=f(D,{title:`Compact 垂直按钮组`,summary:`再补一组纵向按钮拼接，直接把默认、dashed、primary 和 outlined 四种按钮风格摆在一起。`,tab:r.compactVerticalButtons,code:ae,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{size:`large`,wrap:!0,children:[y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 3`})]})]})})});p(()=>s(e,a,I))});let L=m(`rue:component:anchor`);e(a,L),t(()=>{let e=f(D,{title:`Compact 纵向表单`,summary:`纵向 Compact 更适合移动端或窄侧栏里的批量录入。`,tab:r.compactVertical,code:re,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V.Compact,{vertical:!0,block:!0,className:`w-full max-w-sm`,children:[b(T,{className:`w-full`,placeholder:`Campaign title`}),b(T,{className:`w-full`,placeholder:`Owner`}),b(x,{className:`w-full`,color:`primary`,children:`Create workspace`})]})})});p(()=>s(e,a,L))});let R=m(`rue:component:anchor`);e(a,R),t(()=>{let e=f(D,{title:`场景化组合`,summary:`Space 负责主节奏，Space.Compact 负责局部收口，适合真实工作台头部。`,tab:r.scene,code:oe,preview:y(V,{block:!0,align:`center`,wrap:!0,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[y(V,{vertical:!0,className:`min-w-52`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:`release room`}),y(`div`,{children:[b(`div`,{className:`text-lg font-semibold`,children:`Weekly rollout`}),b(`div`,{className:`text-sm text-base-content/60`,children:`3 streams waiting for approval`})]})]}),y(V,{size:`large`,wrap:!0,className:`flex-1 justify-end`,children:[b(S,{color:`primary`,children:`preview ready`}),b(S,{color:`secondary`,children:`7 checks`}),b(S,{color:`accent`,children:`2 owners`}),y(V.Compact,{children:[b(x,{variant:`outline`,children:`Draft`}),b(x,{color:`primary`,children:`Publish`})]})]})]})});p(()=>s(e,a,R))});let z=u(`h2`,a);e(a,z),e(z,i(`API`));let B=m(`rue:component:anchor`);e(a,B),t(()=>{let e=f(H,{rows:K});p(()=>s(e,a,B))});let Z=u(`h2`,a);e(a,Z),l(Z,`mt-10`),e(Z,i(`Space.Compact API`));let Q=u(`p`,a);e(a,Q),l(Q,`text-sm opacity-70`),e(Q,i(`Space.Compact 对应的是 compact 语义：它负责把控件压成连续组，默认不提供 gap；如果你要的是普通留白，请可以使用 Space。`));let $=m(`rue:component:anchor`);return e(a,$),t(()=>{let e=f(H,{rows:q});p(()=>s(e,a,$))}),n})}),c,d),c})};export{Z as default};