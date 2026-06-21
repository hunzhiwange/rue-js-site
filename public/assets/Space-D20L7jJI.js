import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,gt as o,in as s,l as c,lt as l,nt as u,o as d,rt as f,s as p,t as m,tt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as x}from"./button-COZLI6MM.js";import{t as S}from"./badge-rO8-umnf.js";import{t as C}from"./dropdown-BDZWqPCG.js";import{t as w}from"./tooltip-CYIAYVmq.js";import{t as T}from"./input-ey-wzC3N.js";import{r as E}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as D}from"./PreviewBlock-wHSyDiek.js";var O={small:`var(--rue-theme-space-sm, 8px)`,middle:`var(--rue-theme-space-md, 16px)`,large:`var(--rue-theme-space-lg, 24px)`},k=(...e)=>e.filter(Boolean).join(` `),A=(...e)=>{let t={};return e.forEach(e=>{!e||typeof e!=`object`||Array.isArray(e)||Object.assign(t,e)}),Object.keys(t).length>0?t:void 0},j=e=>Array.isArray(e)?e.flatMap(e=>j(e)):e==null||typeof e==`boolean`?[]:[e],M=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e===`small`||e===`middle`||e===`large`?O[e]:e},N=e=>{if(Array.isArray(e))return{columnGap:M(e[0]),rowGap:M(e[1])};let t=M(e??`small`);return{columnGap:t,rowGap:t}},P=(e,t,n)=>n?`vertical`:e??t??`horizontal`,F=(e,t,n)=>{let r=t===0,i=t===n-1;return e===`vertical`?k(`rue-space-compact-item relative overflow-hidden`,!r&&`-mt-px rounded-t-none`,!i&&`rounded-b-none`):k(`rue-space-compact-item relative overflow-hidden`,!r&&`-ml-px rounded-l-none`,!i&&`rounded-r-none`)},I=e=>typeof e==`function`?e():e,L=e=>{if(e!=null){if(typeof e==`number`)return{minHeight:`${e}px`};if(e===`small`)return{fontSize:`0.875rem`};if(e===`large`)return{fontSize:`1rem`};if(/^\d/.test(e))return{minHeight:e}}},R=(t,r)=>c(o=>{let s=u(`span`,o);l(s,`aria-hidden`,`true`),g(()=>{i(s,k(`rue-space-separator shrink-0 select-none text-base-content/45`,r===`vertical`&&`leading-none`))});let c=a(`rue:slot:anchor`);return n(s,c),g(()=>{let n=t;e(()=>d(n,s,c))}),s}),z=t=>c(r=>{let s=u(`div`,r);g(()=>{i(s,k(`rue-space-item min-w-0 max-w-full`,t.itemClassName))}),g(()=>{o(s,A({display:`flex`,flexDirection:t.direction===`vertical`?`column`:`row`,alignItems:t.align,minWidth:0,maxWidth:`100%`,...t.showSeparator?t.direction===`vertical`?{rowGap:t.separatorGap}:{columnGap:t.separatorGap}:{}},t.itemStyle))});let c=a(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.child;e(()=>d(n,s,c))}),n(s,f(` `));let l=a(`rue:slot:anchor`);return n(s,l),g(()=>{let n=t.showSeparator?R(I(t.separator),t.direction):``;e(()=>d(n,s,l))}),s}),B=t=>c(r=>{let s=u(`div`,r);l(s,`data-rue-space-compact-item`,``),g(()=>{i(s,k(F(t.direction,t.index,t.total),t.block&&(t.direction===`vertical`?`w-full`:`flex-1`)))}),g(()=>{o(s,A({display:`flex`,minWidth:0,maxWidth:`100%`},t.blockItemStyle,t.compactShellStyle))});let c=a(`rue:slot:anchor`);return n(s,c),g(()=>{let n=t.child;e(()=>d(n,s,c))}),s}),V=Object.assign(t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:o,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:f,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,__rue_rest_omit_8:S,__rue_rest_omit_9:C,__rue_rest_omit_10:w,__rue_rest_omit_11:T,__rue_rest_omit_12:E,__rue_rest_omit_13:D,__rue_rest_omit_14:O,rest:M,Component:F,childNodes:I,resolvedDirection:L,resolvedAlign:R,gap:B,mergedSeparator:V,separatorGap:H}=_(`useSetup:0:0`,()=>s(()=>{let{as:e,size:n,direction:i,orientation:a,vertical:o,align:s,split:c,separator:l,wrap:u,block:d,className:f,style:p,itemClassName:m,itemStyle:h,children:g,...v}=t,y=t.as===void 0?`div`:t.as,b=_(`computed:1:0`,()=>r(()=>j(t.children))),x=_(`computed:1:1`,()=>r(()=>P(t.orientation,t.direction,t.vertical))),S=x,C=_(`computed:1:2`,()=>r(()=>t.align??(S.get()===`horizontal`?`center`:void 0))),w=_(`computed:1:3`,()=>r(()=>N(t.size))),T=w;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,__rue_rest_omit_14:g,rest:v,Component:y,childNodes:b,resolvedDirection:x,resolvedAlign:C,gap:w,mergedSeparator:_(`computed:1:4`,()=>r(()=>t.separator??t.split)),separatorGap:_(`computed:1:5`,()=>r(()=>S.get()===`vertical`?T.get().rowGap:T.get().columnGap))}}));return c(r=>{let i=h(),o=a(`rue:component:anchor`);return n(i,o),g(()=>{let r=m(F,{...M,className:k(`rue-space min-w-0 max-w-full`,t.className),style:A({display:t.block!==void 0&&t.block?`flex`:`inline-flex`,flexDirection:L.get()===`vertical`?`column`:`row`,flexWrap:t.wrap!==void 0&&t.wrap?`wrap`:`nowrap`,alignItems:R.get(),width:t.block!==void 0&&t.block?`100%`:void 0,maxWidth:`100%`,columnGap:B.get().columnGap,rowGap:B.get().rowGap},t.style),"data-rue-space":``,"data-rue-space-direction":L.get(),"aria-orientation":L.get(),children:c(()=>{let e=h(),r=a(`rue:list:start`),i=a(`rue:list:end`);n(e,r),n(e,i);let o=new Map;return g(()=>{o=v({items:I.get()||[],getKey:(e,t)=>e?.key??e?.props?.key??t,elements:o,parent:r.parentNode,before:i,start:r,renderItem:(e,n,r,i,a)=>{p(m(z,{key:e?.key??e?.props?.key??a,child:e,direction:L.get(),align:R.get(),itemClassName:t.itemClassName,itemStyle:t.itemStyle,showSeparator:V.get()!=null&&a<I.get().length-1,separator:V.get(),separatorGap:H.get()}),n,r,i)}})}),e})});e(()=>d(r,i,o))}),i})},{Compact:t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:o,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:f,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,__rue_rest_omit_8:S,rest:C,Component:w,childNodes:T}=_(`useSetup:0:0:dup1`,()=>s(()=>{let{as:e,size:n,direction:i,orientation:a,vertical:o,block:s,className:c,style:l,children:u,...d}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:d,Component:t.as===void 0?`div`:t.as,childNodes:_(`computed:1:6`,()=>r(()=>j(t.children)))}}));if(T.get().length===0)return null;let E=P(t.orientation,t.direction,t.vertical),D=t.block!==void 0&&t.block?E===`vertical`?{width:`100%`}:{flex:`1 1 0%`}:void 0,O=L(t.size);return c(r=>{let i=h(),o=a(`rue:component:anchor`);return n(i,o),g(()=>{let r=m(w,{...C,className:k(`rue-space-compact max-w-full`,t.className),style:A({display:`flex`,flexDirection:E===`vertical`?`column`:`row`,width:t.block!==void 0&&t.block?`100%`:void 0,maxWidth:`100%`},t.style),"data-rue-space-compact":``,"data-rue-space-direction":E,"aria-orientation":E,children:c(()=>{let e=h(),r=a(`rue:list:start`),i=a(`rue:list:end`);n(e,r),n(e,i);let o=new Map;return g(()=>{o=v({items:T.get()||[],getKey:(e,t)=>t,elements:o,parent:r.parentNode,before:i,start:r,renderItem:(e,n,r,i,a)=>{p(m(B,{key:a,child:e,direction:E,index:a,total:T.get().length,block:t.block===void 0?!1:t.block,blockItemStyle:D,compactShellStyle:O}),n,r,i)}})}),e})});e(()=>d(r,i,o))}),i})}}),H=t=>c(r=>{let o=u(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,o);n(o,s),i(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let m=u(`tr`,p);n(p,m);let _=u(`th`,m);n(m,_),n(_,f(`属性`));let y=u(`th`,m);n(m,y),n(y,f(`说明`));let b=u(`th`,m);n(m,b),n(b,f(`类型`));let x=u(`th`,m);n(m,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=h(),i=u(`tr`,r);n(r,i),g(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>d(n,f,p))});let m=u(`td`,i);n(i,m);let _=u(`code`,m);n(m,_);let v=a(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),o}),U=t=>c(r=>{let o=u(`span`,r);l(o,`aria-hidden`,`true`),i(o,`text-[10px] font-semibold uppercase tracking-[0.12em]`);let s=a(`rue:slot:anchor`);return n(o,s),g(()=>{let n=t.label;e(()=>d(n,o,s))}),o}),W=[{key:`report`,label:`Report`,icon:b(U,{label:`RP`})},{key:`mail`,label:`Mail`,icon:b(U,{label:`ML`})},{key:`mobile`,label:`Mobile`,icon:b(U,{label:`MB`})}],G=[{key:`first`,label:`1st item`},{key:`second`,label:`2nd item`},{key:`third`,label:`3rd item`}],K=[{prop:`as`,description:`指定根节点标签或组件，适合 section、nav、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`主轴与交叉轴间距，支持 small / middle / large、数字像素值和 [columnGap, rowGap]。`,type:`'small' | 'middle' | 'large' | number | string | [SpaceSize, SpaceSize]`,defaultValue:`'small'`},{prop:`direction`,description:`主轴方向，保持 horizontal / vertical 两种布局。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`orientation`,description:`direction 的同义增强写法，适合和其他 Rue 组件保持语义一致。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`vertical`,description:`纵向快捷开关，传入 true 时直接切为 vertical。`,type:`boolean`,defaultValue:`false`},{prop:`align`,description:`交叉轴对齐，水平布局默认 center，垂直布局按内容自然拉伸。`,type:`'start' | 'end' | 'center' | 'baseline' | 'stretch'`,defaultValue:`'center'（horizontal）`},{prop:`separator / split`,description:`在相邻项之间插入分隔内容；自定义节点推荐传函数，确保每次都生成新的分隔符实例。`,type:`any | (() => any)`,defaultValue:`-`},{prop:`wrap`,description:`允许水平排列在空间不足时自动换行。`,type:`boolean`,defaultValue:`false`},{prop:`block`,description:`让容器使用 flex 并占满可用宽度，适合工具条和过滤区。`,type:`boolean`,defaultValue:`false`},{prop:`itemClassName / itemStyle`,description:`补充每个子项包装层的类名和内联样式，适合卡片、徽标和统计组。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],q=[{prop:`as`,description:`指定根节点标签或组件。`,type:`any`,defaultValue:`'div'`},{prop:`direction / orientation / vertical`,description:`Compact 的横向或纵向编排方式。`,type:`'horizontal' | 'vertical' | boolean`,defaultValue:`'horizontal'`},{prop:`block`,description:`让 Compact 组占满宽度，适合表单工具条和移动端批量操作。`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`用于调整 Compact 壳层的密度，适合文本段、标签组或自定义内容；不会生成子项间距。`,type:`'small' | 'middle' | 'large' | number | string`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],J=`<Space>
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
</Space>`,Z=()=>{let{tabs:r}=_(`useSetup:0:0`,()=>s(()=>({tabs:{basic:_(`ref:1:0`,()=>t(`preview`)),direction:_(`ref:1:1`,()=>t(`preview`)),size:_(`ref:1:2`,()=>t(`preview`)),wrap:_(`ref:1:3`,()=>t(`preview`)),separator:_(`ref:1:4`,()=>t(`preview`)),compactToolbar:_(`ref:1:5`,()=>t(`preview`)),compactButtons:_(`ref:1:6`,()=>t(`preview`)),compactVerticalButtons:_(`ref:1:7`,()=>t(`preview`)),compactVertical:_(`ref:1:8`,()=>t(`preview`)),scene:_(`ref:1:9`,()=>t(`preview`))}})));return c(t=>{let o=h(),s=a(`rue:component:anchor`);return n(o,s),d(m(E,{children:c(()=>{let t=h(),o=u(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let s=u(`h1`,o);n(o,s),n(s,f(`Space 间距容器`));let c=u(`p`,o);n(o,c),i(c,`text-sm mt-3 mb-3`),n(c,f(`Space 现在不再只是“自己写 gap”的占位组件，而是补成了一个完整的布局原语。它使用 Rue 自己干净直接的视觉，不抢内容本身的风头，同时把常用的水平/垂直编排、对齐、换行、分隔符和 Compact 紧凑组合一次覆盖。`));let l=u(`h2`,o);n(o,l),n(l,f(`何时使用`));let p=u(`ul`,o);n(o,p);let _=u(`li`,p);n(p,_),n(_,f(`需要把按钮、标签、统计块、输入控件排成一致的节奏，而不想在每个页面重复手写 gap。`));let v=u(`li`,p);n(p,v),n(v,f(`需要在同一套 API 下切换 horizontal、vertical、wrap 和 separator，保持布局表达统一。`));let E=u(`li`,p);n(p,E),n(E,f(`需要工具条、搜索栏、批量操作区这类更紧凑的组合时，可以直接切到 Space.Compact。`));let O=u(`h2`,o);n(o,O),n(O,f(`推荐用法`));let k=a(`rue:component:anchor`);n(o,k),g(()=>{let t=m(D,{title:`基础间距`,summary:`最小可用写法，适合动作按钮、标签和轻量操作组。`,tab:r.basic,code:J,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{children:[b(x,{color:`primary`,children:`Run build`}),b(x,{color:`secondary`,variant:`outline`,children:`Preview`}),b(S,{color:`neutral`,children:`workspace`})]})})});e(()=>d(t,o,k))});let A=a(`rue:component:anchor`);n(o,A),g(()=>{let t=m(D,{title:`方向与对齐`,summary:`主轴方向和交叉轴对齐都在 Space 本身表达，不需要额外写 flex 类。`,tab:r.direction,code:Y,preview:y(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[y(V,{align:`baseline`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(S,{color:`primary`,children:`baseline`}),b(`span`,{className:`text-2xl font-semibold`,children:`24h`}),b(`span`,{className:`text-sm opacity-60`,children:`fresh`})]}),y(V,{vertical:!0,align:`stretch`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Upload assets`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Sync routes`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Publish preview`})]})]})});e(()=>d(t,o,A))});let j=a(`rue:component:anchor`);n(o,j),g(()=>{let t=m(D,{title:`尺寸与自定义 Gap`,summary:`使用 small / middle / large 预设，也支持 tuple 间距覆盖列距与行距。`,tab:r.size,code:X,preview:y(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[y(V,{size:`small`,children:[b(S,{color:`primary`,children:`small`}),b(S,{color:`secondary`,children:`8px token`}),b(S,{color:`accent`,children:`dense`})]}),y(V,{size:`middle`,children:[b(S,{color:`primary`,children:`middle`}),b(S,{color:`secondary`,children:`balanced`}),b(S,{color:`accent`,children:`12px token`})]}),y(V,{size:[28,14],wrap:!0,className:`max-w-xl`,children:[b(S,{color:`neutral`,children:`tuple gap`}),b(S,{color:`info`,children:`column 28`}),b(S,{color:`success`,children:`row 14`}),b(S,{color:`warning`,children:`wrap aware`}),b(S,{color:`error`,children:`custom density`})]})]})});e(()=>d(t,o,j))});let M=a(`rue:component:anchor`);n(o,M),g(()=>{let t=m(D,{title:`自动换行`,summary:`用 wrap 处理标签墙、筛选条件和批量状态块，保持行距稳定。`,tab:r.wrap,code:ee,preview:y(V,{wrap:!0,size:[16,12],className:`max-w-2xl rounded-[1.5rem] border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(S,{color:`primary`,children:`router`}),b(S,{color:`secondary`,children:`runtime-vapor`}),b(S,{color:`accent`,children:`design-system`}),b(S,{color:`neutral`,children:`sfc playground`}),b(S,{color:`info`,children:`bench`}),b(S,{color:`success`,children:`release`}),b(S,{color:`warning`,children:`compat`}),b(S,{color:`error`,children:`incident`})]})});e(()=>d(t,o,M))});let N=a(`rue:component:anchor`);n(o,N),g(()=>{let t=m(D,{title:`Separator / Split`,summary:`分隔符适合 breadcrumb、命令路径和键值对；自定义节点推荐传函数。`,tab:r.separator,code:te,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{separator:()=>b(`span`,{className:`text-xs uppercase tracking-[0.2em] opacity-35`,children:`/`}),children:[b(`a`,{className:`link link-hover`,children:`Workspace`}),b(`a`,{className:`link link-hover`,children:`Design`}),b(`span`,{className:`font-medium`,children:`Space`})]})})});e(()=>d(t,o,N))});let P=a(`rue:component:anchor`);n(o,P),g(()=>{let t=m(D,{title:`Compact 横向工具条`,summary:`把输入、筛选和提交动作收成一个连续控制带，适合搜索栏与操作条；Compact 默认就是无间距拼接。`,tab:r.compactToolbar,code:ne,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V.Compact,{className:`w-full max-w-3xl`,children:[b(T,{className:`w-full`,placeholder:`Search component or token`}),y(`select`,{className:`select w-full min-w-40`,children:[b(`option`,{children:`All teams`}),b(`option`,{children:`Design infra`}),b(`option`,{children:`Runtime`})]}),b(x,{className:`w-full lg:w-auto`,color:`primary`,children:`Search`})]})})});e(()=>d(t,o,P))});let F=a(`rue:component:anchor`);n(o,F),g(()=>{let t=m(D,{title:`Compact 按钮拼接`,summary:`补一组更接近操作面板的按钮拼接示例：图标轨道、主色动作条和带下拉收口的混合按钮组。`,tab:r.compactButtons,code:ie,preview:y(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[y(V.Compact,{block:!0,children:[b(w,{title:`Like`,children:b(x,{shape:`square`,"aria-label":`Like`,icon:b(U,{label:`LK`})})}),b(w,{title:`Comment`,children:b(x,{shape:`square`,"aria-label":`Comment`,icon:b(U,{label:`CM`})})}),b(w,{title:`Star`,children:b(x,{shape:`square`,"aria-label":`Star`,icon:b(U,{label:`ST`})})}),b(w,{title:`Heart`,children:b(x,{shape:`square`,"aria-label":`Heart`,icon:b(U,{label:`HT`})})}),b(w,{title:`Share`,children:b(x,{shape:`square`,"aria-label":`Share`,icon:b(U,{label:`SH`})})}),b(w,{title:`Download`,children:b(x,{shape:`square`,"aria-label":`Download`,icon:b(U,{label:`DL`})})}),b(C,{trigger:`click`,placement:`bottomRight`,items:W,children:b(x,{shape:`square`,"aria-label":`More actions`,icon:b(U,{label:`...`})})})]}),y(V.Compact,{block:!0,children:[b(x,{color:`primary`,children:`Button 1`}),b(x,{color:`primary`,children:`Button 2`}),b(x,{color:`primary`,children:`Button 3`}),b(x,{color:`primary`,children:`Button 4`}),b(x,{color:`primary`,disabled:!0,title:`Disabled download`,icon:b(U,{label:`DL`})}),b(x,{color:`primary`,title:`Download`,icon:b(U,{label:`DL`})})]}),y(V.Compact,{block:!0,children:[b(x,{children:`Button 1`}),b(x,{children:`Button 2`}),b(x,{children:`Button 3`}),b(x,{disabled:!0,title:`Disabled download`,icon:b(U,{label:`DL`})}),b(x,{title:`Download`,icon:b(U,{label:`DL`})}),b(x,{color:`primary`,children:`Button 4`}),b(C,{trigger:`click`,placement:`bottomRight`,items:G,children:b(x,{color:`primary`,title:`More actions`,icon:b(U,{label:`...`})})})]})]})});e(()=>d(t,o,F))});let I=a(`rue:component:anchor`);n(o,I),g(()=>{let t=m(D,{title:`Compact 垂直按钮组`,summary:`再补一组纵向按钮拼接，直接把默认、dashed、primary 和 outlined 四种按钮风格摆在一起。`,tab:r.compactVerticalButtons,code:ae,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{size:`large`,wrap:!0,children:[y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 3`})]})]})})});e(()=>d(t,o,I))});let L=a(`rue:component:anchor`);n(o,L),g(()=>{let t=m(D,{title:`Compact 纵向表单`,summary:`纵向 Compact 更适合移动端或窄侧栏里的批量录入。`,tab:r.compactVertical,code:re,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V.Compact,{vertical:!0,block:!0,className:`w-full max-w-sm`,children:[b(T,{className:`w-full`,placeholder:`Campaign title`}),b(T,{className:`w-full`,placeholder:`Owner`}),b(x,{className:`w-full`,color:`primary`,children:`Create workspace`})]})})});e(()=>d(t,o,L))});let R=a(`rue:component:anchor`);n(o,R),g(()=>{let t=m(D,{title:`场景化组合`,summary:`Space 负责主节奏，Space.Compact 负责局部收口，适合真实工作台头部。`,tab:r.scene,code:oe,preview:y(V,{block:!0,align:`center`,wrap:!0,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[y(V,{vertical:!0,className:`min-w-52`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:`release room`}),y(`div`,{children:[b(`div`,{className:`text-lg font-semibold`,children:`Weekly rollout`}),b(`div`,{className:`text-sm text-base-content/60`,children:`3 streams waiting for approval`})]})]}),y(V,{size:`large`,wrap:!0,className:`flex-1 justify-end`,children:[b(S,{color:`primary`,children:`preview ready`}),b(S,{color:`secondary`,children:`7 checks`}),b(S,{color:`accent`,children:`2 owners`}),y(V.Compact,{children:[b(x,{variant:`outline`,children:`Draft`}),b(x,{color:`primary`,children:`Publish`})]})]})]})});e(()=>d(t,o,R))});let z=u(`h2`,o);n(o,z),n(z,f(`API`));let B=a(`rue:component:anchor`);n(o,B),g(()=>{let t=m(H,{rows:K});e(()=>d(t,o,B))});let Z=u(`h2`,o);n(o,Z),i(Z,`mt-10`),n(Z,f(`Space.Compact API`));let Q=u(`p`,o);n(o,Q),i(Q,`text-sm opacity-70`),n(Q,f(`Space.Compact 对应的是 compact 语义：它负责把控件压成连续组，默认不提供 gap；如果你要的是普通留白，请可以使用 Space。`));let $=a(`rue:component:anchor`);return n(o,$),g(()=>{let t=m(H,{rows:q});e(()=>d(t,o,$))}),t})}),o,s),o})};export{Z as default};