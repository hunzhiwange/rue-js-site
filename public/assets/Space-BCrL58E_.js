import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,l as s,lt as c,o as l,pt as u,s as d,st as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as y,i as b}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as x}from"./button-CeShl0h_.js";import{t as S}from"./badge-yUyMWmRO.js";import{t as C}from"./dropdown-BPMZiCw-.js";import{t as w}from"./tooltip-Bd1mPaf6.js";import{t as T}from"./input-DiGoZI6O.js";import{r as E}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as D}from"./PreviewBlock-RQJhyX9w.js";var O={small:`var(--rue-theme-space-sm, 8px)`,middle:`var(--rue-theme-space-md, 16px)`,large:`var(--rue-theme-space-lg, 24px)`},k=(...e)=>e.filter(Boolean).join(` `),A=(...e)=>{let t={};return e.forEach(e=>{!e||typeof e!=`object`||Array.isArray(e)||Object.assign(t,e)}),Object.keys(t).length>0?t:void 0},j=e=>Array.isArray(e)?e.flatMap(e=>j(e)):e==null||typeof e==`boolean`?[]:[e],M=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e===`small`||e===`middle`||e===`large`?O[e]:e},N=e=>{if(Array.isArray(e))return{columnGap:M(e[0]),rowGap:M(e[1])};let t=M(e??`small`);return{columnGap:t,rowGap:t}},P=(e,t,n)=>n?`vertical`:e??t??`horizontal`,F=(e,t,n)=>{let r=t===0,i=t===n-1;return e===`vertical`?k(`rue-space-compact-item relative overflow-hidden`,!r&&`-mt-px rounded-t-none`,!i&&`rounded-b-none`):k(`rue-space-compact-item relative overflow-hidden`,!r&&`-ml-px rounded-l-none`,!i&&`rounded-r-none`)},I=e=>typeof e==`function`?e():e,L=e=>{if(e!=null){if(typeof e==`number`)return{minHeight:`${e}px`};if(e===`small`)return{fontSize:`0.875rem`};if(e===`large`)return{fontSize:`1rem`};if(/^\d/.test(e))return{minHeight:e}}},R=(e,a)=>s(s=>{let u=o(`span`,s);f(u,`aria-hidden`,`true`),n(()=>{c(u,k(`rue-space-separator shrink-0 select-none text-base-content/45`,a===`vertical`&&`leading-none`))});let d=t(`rue:slot:anchor`);return i(u,d),n(()=>{let t=e;r(()=>l(t,u,d))}),u}),z=e=>s(a=>{let s=o(`div`,a);n(()=>{c(s,k(`rue-space-item min-w-0 max-w-full`,e.itemClassName))}),n(()=>{u(s,A({display:`flex`,flexDirection:e.direction===`vertical`?`column`:`row`,alignItems:e.align,minWidth:0,maxWidth:`100%`,...e.showSeparator?e.direction===`vertical`?{rowGap:e.separatorGap}:{columnGap:e.separatorGap}:{}},e.itemStyle))});let d=t(`rue:slot:anchor`);i(s,d),n(()=>{let t=e.child;r(()=>l(t,s,d))}),i(s,m(` `));let f=t(`rue:slot:anchor`);return i(s,f),n(()=>{let t=e.showSeparator?R(I(e.separator),e.direction):``;r(()=>l(t,s,f))}),s}),B=e=>s(a=>{let s=o(`div`,a);f(s,`data-rue-space-compact-item`,``),n(()=>{c(s,k(F(e.direction,e.index,e.total),e.block&&(e.direction===`vertical`?`w-full`:`flex-1`)))}),n(()=>{u(s,A({display:`flex`,minWidth:0,maxWidth:`100%`},e.blockItemStyle,e.compactShellStyle))});let d=t(`rue:slot:anchor`);return i(s,d),n(()=>{let t=e.child;r(()=>l(t,s,d))}),s}),V=Object.assign(o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:f,__rue_rest_omit_3:m,__rue_rest_omit_4:g,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,__rue_rest_omit_8:S,__rue_rest_omit_9:C,__rue_rest_omit_10:w,__rue_rest_omit_11:T,__rue_rest_omit_12:E,__rue_rest_omit_13:D,__rue_rest_omit_14:O,rest:M,Component:F,childNodes:I,resolvedDirection:L,resolvedAlign:R,gap:B,mergedSeparator:V,separatorGap:H}=_(`useSetup:0:0`,()=>a(()=>{let{as:e,size:t,direction:n,orientation:r,vertical:i,align:a,split:s,separator:c,wrap:l,block:u,className:d,style:f,itemClassName:p,itemStyle:m,children:g,...v}=o,y=o.as===void 0?`div`:o.as,b=_(`computed:1:0`,()=>h(()=>j(o.children))),x=_(`computed:1:1`,()=>h(()=>P(o.orientation,o.direction,o.vertical))),S=x,C=_(`computed:1:2`,()=>h(()=>o.align??(S.get()===`horizontal`?`center`:void 0))),w=_(`computed:1:3`,()=>h(()=>N(o.size))),T=w;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,__rue_rest_omit_14:g,rest:v,Component:y,childNodes:b,resolvedDirection:x,resolvedAlign:C,gap:w,mergedSeparator:_(`computed:1:4`,()=>h(()=>o.separator??o.split)),separatorGap:_(`computed:1:5`,()=>h(()=>S.get()===`vertical`?T.get().rowGap:T.get().columnGap))}}));return s(a=>{let c=e(),u=t(`rue:component:anchor`);return i(c,u),n(()=>{let a=p(F,{...M,className:k(`rue-space min-w-0 max-w-full`,o.className),style:A({display:o.block!==void 0&&o.block?`flex`:`inline-flex`,flexDirection:L.get()===`vertical`?`column`:`row`,flexWrap:o.wrap!==void 0&&o.wrap?`wrap`:`nowrap`,alignItems:R.get(),width:o.block!==void 0&&o.block?`100%`:void 0,maxWidth:`100%`,columnGap:B.get().columnGap,rowGap:B.get().rowGap},o.style),"data-rue-space":``,"data-rue-space-direction":L.get(),"aria-orientation":L.get(),children:s(()=>{let r=e(),a=t(`rue:list:start`),s=t(`rue:list:end`);i(r,a),i(r,s);let c=new Map;return n(()=>{c=v({items:I.get()||[],getKey:(e,t)=>e?.key??e?.props?.key??t,elements:c,parent:a.parentNode,before:s,start:a,renderItem:(e,t,n,r,i)=>{d(p(z,{key:e?.key??e?.props?.key??i,child:e,direction:L.get(),align:R.get(),itemClassName:o.itemClassName,itemStyle:o.itemStyle,showSeparator:V.get()!=null&&i<I.get().length-1,separator:V.get(),separatorGap:H.get()}),t,n,r)}})}),r})});r(()=>l(a,c,u))}),c})},{Compact:o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:f,__rue_rest_omit_3:m,__rue_rest_omit_4:g,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,__rue_rest_omit_8:S,rest:C,Component:w,childNodes:T}=_(`useSetup:0:0:dup1`,()=>a(()=>{let{as:e,size:t,direction:n,orientation:r,vertical:i,block:a,className:s,style:c,children:l,...u}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,rest:u,Component:o.as===void 0?`div`:o.as,childNodes:_(`computed:1:6`,()=>h(()=>j(o.children)))}}));if(T.get().length===0)return null;let E=P(o.orientation,o.direction,o.vertical),D=o.block!==void 0&&o.block?E===`vertical`?{width:`100%`}:{flex:`1 1 0%`}:void 0,O=L(o.size);return s(a=>{let c=e(),u=t(`rue:component:anchor`);return i(c,u),n(()=>{let a=p(w,{...C,className:k(`rue-space-compact max-w-full`,o.className),style:A({display:`flex`,flexDirection:E===`vertical`?`column`:`row`,width:o.block!==void 0&&o.block?`100%`:void 0,maxWidth:`100%`},o.style),"data-rue-space-compact":``,"data-rue-space-direction":E,"aria-orientation":E,children:s(()=>{let r=e(),a=t(`rue:list:start`),s=t(`rue:list:end`);i(r,a),i(r,s);let c=new Map;return n(()=>{c=v({items:T.get()||[],getKey:(e,t)=>t,elements:c,parent:a.parentNode,before:s,start:a,renderItem:(e,t,n,r,i)=>{d(p(B,{key:i,child:e,direction:E,index:i,total:T.get().length,block:o.block===void 0?!1:o.block,blockItemStyle:D,compactShellStyle:O}),t,n,r)}})}),r})});r(()=>l(a,c,u))}),c})}}),H=a=>s(u=>{let d=o(`div`,u);c(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=o(`table`,d);i(d,p),c(p,`table table-zebra`);let h=o(`thead`,p);i(p,h);let g=o(`tr`,h);i(h,g);let _=o(`th`,g);i(g,_),i(_,m(`属性`));let y=o(`th`,g);i(g,y),i(y,m(`说明`));let b=o(`th`,g);i(g,b),i(b,m(`类型`));let x=o(`th`,g);i(g,x),i(x,m(`默认值`));let S=o(`tbody`,p);i(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,c,u,d,p)=>{l(s(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{f(c,`key`,String(a.prop))});let u=o(`td`,c);i(c,u);let d=o(`code`,u);i(u,d);let p=t(`rue:slot:anchor`);i(d,p),n(()=>{let e=a.prop;r(()=>l(e,d,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>l(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>l(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>l(e,b,x))}),s}),c,u)}})}),d}),U=e=>s(a=>{let s=o(`span`,a);f(s,`aria-hidden`,`true`),c(s,`text-[10px] font-semibold uppercase tracking-[0.12em]`);let u=t(`rue:slot:anchor`);return i(s,u),n(()=>{let t=e.label;r(()=>l(t,s,u))}),s}),W=[{key:`report`,label:`Report`,icon:b(U,{label:`RP`})},{key:`mail`,label:`Mail`,icon:b(U,{label:`ML`})},{key:`mobile`,label:`Mobile`,icon:b(U,{label:`MB`})}],G=[{key:`first`,label:`1st item`},{key:`second`,label:`2nd item`},{key:`third`,label:`3rd item`}],K=[{prop:`as`,description:`指定根节点标签或组件，适合 section、nav、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`主轴与交叉轴间距，支持 small / middle / large、数字像素值和 [columnGap, rowGap]。`,type:`'small' | 'middle' | 'large' | number | string | [SpaceSize, SpaceSize]`,defaultValue:`'small'`},{prop:`direction`,description:`主轴方向，保留 horizontal / vertical 两种布局。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`orientation`,description:`direction 的同义增强写法，适合和其他 Rue 组件保持语义一致。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`vertical`,description:`纵向快捷开关，传入 true 时直接切为 vertical。`,type:`boolean`,defaultValue:`false`},{prop:`align`,description:`交叉轴对齐，水平布局默认 center，垂直布局按内容自然拉伸。`,type:`'start' | 'end' | 'center' | 'baseline' | 'stretch'`,defaultValue:`'center'（horizontal）`},{prop:`separator / split`,description:`在相邻项之间插入分隔内容；自定义节点推荐传函数，确保每次都生成新的分隔符实例。`,type:`any | (() => any)`,defaultValue:`-`},{prop:`wrap`,description:`允许水平排列在空间不足时自动换行。`,type:`boolean`,defaultValue:`false`},{prop:`block`,description:`让容器使用 flex 并占满可用宽度，适合工具条和过滤区。`,type:`boolean`,defaultValue:`false`},{prop:`itemClassName / itemStyle`,description:`补充每个子项包装层的类名和内联样式，适合卡片、徽标和统计组。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],q=[{prop:`as`,description:`指定根节点标签或组件。`,type:`any`,defaultValue:`'div'`},{prop:`direction / orientation / vertical`,description:`Compact 的横向或纵向编排方式。`,type:`'horizontal' | 'vertical' | boolean`,defaultValue:`'horizontal'`},{prop:`block`,description:`让 Compact 组占满宽度，适合表单工具条和移动端批量操作。`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`用于调整 Compact 壳层的密度，适合文本段、标签组或自定义内容；不会生成子项间距。`,type:`'small' | 'middle' | 'large' | number | string`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],J=`<Space>
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
</Space>`,Z=()=>{let{tabs:u}=_(`useSetup:0:0`,()=>a(()=>({tabs:{basic:_(`ref:1:0`,()=>g(`preview`)),direction:_(`ref:1:1`,()=>g(`preview`)),size:_(`ref:1:2`,()=>g(`preview`)),wrap:_(`ref:1:3`,()=>g(`preview`)),separator:_(`ref:1:4`,()=>g(`preview`)),compactToolbar:_(`ref:1:5`,()=>g(`preview`)),compactButtons:_(`ref:1:6`,()=>g(`preview`)),compactVerticalButtons:_(`ref:1:7`,()=>g(`preview`)),compactVertical:_(`ref:1:8`,()=>g(`preview`)),scene:_(`ref:1:9`,()=>g(`preview`))}})));return s(a=>{let d=e(),f=t(`rue:component:anchor`);return i(d,f),l(p(E,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`max-w-none prose prose-sm md:prose-base`);let d=o(`h1`,s);i(s,d),i(d,m(`Space 间距容器`));let f=o(`p`,s);i(s,f),c(f,`text-sm mt-3 mb-3`),i(f,m(`Space 现在不再只是“自己写 gap”的占位组件，而是补成了一个完整的布局原语。它保留 Rue 自己干净直接的视觉，不抢内容本身的风头，同时把常用的水平/垂直编排、对齐、换行、分隔符和 Compact 紧凑组合一次补齐。`));let h=o(`h2`,s);i(s,h),i(h,m(`何时使用`));let g=o(`ul`,s);i(s,g);let _=o(`li`,g);i(g,_),i(_,m(`需要把按钮、标签、统计块、输入控件排成一致的节奏，而不想在每个页面重复手写 gap。`));let v=o(`li`,g);i(g,v),i(v,m(`需要在同一套 API 下切换 horizontal、vertical、wrap 和 separator，保持布局表达统一。`));let E=o(`li`,g);i(g,E),i(E,m(`需要工具条、搜索栏、批量操作区这类更紧凑的组合时，可以直接切到 Space.Compact。`));let O=o(`h2`,s);i(s,O),i(O,m(`推荐用法`));let k=t(`rue:component:anchor`);i(s,k),n(()=>{let e=p(D,{title:`基础间距`,summary:`最小可用写法，适合动作按钮、标签和轻量操作组。`,tab:u.basic,code:J,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{children:[b(x,{color:`primary`,children:`Run build`}),b(x,{color:`secondary`,variant:`outline`,children:`Preview`}),b(S,{color:`neutral`,children:`workspace`})]})})});r(()=>l(e,s,k))});let A=t(`rue:component:anchor`);i(s,A),n(()=>{let e=p(D,{title:`方向与对齐`,summary:`主轴方向和交叉轴对齐都在 Space 本身表达，不需要额外写 flex 类。`,tab:u.direction,code:Y,preview:y(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[y(V,{align:`baseline`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(S,{color:`primary`,children:`baseline`}),b(`span`,{className:`text-2xl font-semibold`,children:`24h`}),b(`span`,{className:`text-sm opacity-60`,children:`fresh`})]}),y(V,{vertical:!0,align:`stretch`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Upload assets`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Sync routes`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Publish preview`})]})]})});r(()=>l(e,s,A))});let j=t(`rue:component:anchor`);i(s,j),n(()=>{let e=p(D,{title:`尺寸与自定义 Gap`,summary:`延续 small / middle / large 预设，也支持 tuple 间距覆盖列距与行距。`,tab:u.size,code:X,preview:y(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[y(V,{size:`small`,children:[b(S,{color:`primary`,children:`small`}),b(S,{color:`secondary`,children:`8px token`}),b(S,{color:`accent`,children:`dense`})]}),y(V,{size:`middle`,children:[b(S,{color:`primary`,children:`middle`}),b(S,{color:`secondary`,children:`balanced`}),b(S,{color:`accent`,children:`12px token`})]}),y(V,{size:[28,14],wrap:!0,className:`max-w-xl`,children:[b(S,{color:`neutral`,children:`tuple gap`}),b(S,{color:`info`,children:`column 28`}),b(S,{color:`success`,children:`row 14`}),b(S,{color:`warning`,children:`wrap aware`}),b(S,{color:`error`,children:`custom density`})]})]})});r(()=>l(e,s,j))});let M=t(`rue:component:anchor`);i(s,M),n(()=>{let e=p(D,{title:`自动换行`,summary:`用 wrap 处理标签墙、筛选条件和批量状态块，保持行距稳定。`,tab:u.wrap,code:ee,preview:y(V,{wrap:!0,size:[16,12],className:`max-w-2xl rounded-[1.5rem] border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(S,{color:`primary`,children:`router`}),b(S,{color:`secondary`,children:`runtime-vapor`}),b(S,{color:`accent`,children:`design-system`}),b(S,{color:`neutral`,children:`sfc playground`}),b(S,{color:`info`,children:`bench`}),b(S,{color:`success`,children:`release`}),b(S,{color:`warning`,children:`compat`}),b(S,{color:`error`,children:`incident`})]})});r(()=>l(e,s,M))});let N=t(`rue:component:anchor`);i(s,N),n(()=>{let e=p(D,{title:`Separator / Split`,summary:`分隔符适合 breadcrumb、命令路径和键值对；自定义节点推荐传函数。`,tab:u.separator,code:te,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{separator:()=>b(`span`,{className:`text-xs uppercase tracking-[0.2em] opacity-35`,children:`/`}),children:[b(`a`,{className:`link link-hover`,children:`Workspace`}),b(`a`,{className:`link link-hover`,children:`Design`}),b(`span`,{className:`font-medium`,children:`Space`})]})})});r(()=>l(e,s,N))});let P=t(`rue:component:anchor`);i(s,P),n(()=>{let e=p(D,{title:`Compact 横向工具条`,summary:`把输入、筛选和提交动作收成一个连续控制带，适合搜索栏与操作条；Compact 默认就是无间距拼接。`,tab:u.compactToolbar,code:ne,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V.Compact,{className:`w-full max-w-3xl`,children:[b(T,{className:`w-full`,placeholder:`Search component or token`}),y(`select`,{className:`select w-full min-w-40`,children:[b(`option`,{children:`All teams`}),b(`option`,{children:`Design infra`}),b(`option`,{children:`Runtime`})]}),b(x,{className:`w-full lg:w-auto`,color:`primary`,children:`Search`})]})})});r(()=>l(e,s,P))});let F=t(`rue:component:anchor`);i(s,F),n(()=>{let e=p(D,{title:`Compact 按钮拼接`,summary:`补一组更接近操作面板的按钮拼接示例：图标轨道、主色动作条和带下拉收口的混合按钮组。`,tab:u.compactButtons,code:ie,preview:y(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[y(V.Compact,{block:!0,children:[b(w,{title:`Like`,children:b(x,{shape:`square`,"aria-label":`Like`,icon:b(U,{label:`LK`})})}),b(w,{title:`Comment`,children:b(x,{shape:`square`,"aria-label":`Comment`,icon:b(U,{label:`CM`})})}),b(w,{title:`Star`,children:b(x,{shape:`square`,"aria-label":`Star`,icon:b(U,{label:`ST`})})}),b(w,{title:`Heart`,children:b(x,{shape:`square`,"aria-label":`Heart`,icon:b(U,{label:`HT`})})}),b(w,{title:`Share`,children:b(x,{shape:`square`,"aria-label":`Share`,icon:b(U,{label:`SH`})})}),b(w,{title:`Download`,children:b(x,{shape:`square`,"aria-label":`Download`,icon:b(U,{label:`DL`})})}),b(C,{trigger:`click`,placement:`bottomRight`,items:W,children:b(x,{shape:`square`,"aria-label":`More actions`,icon:b(U,{label:`...`})})})]}),y(V.Compact,{block:!0,children:[b(x,{color:`primary`,children:`Button 1`}),b(x,{color:`primary`,children:`Button 2`}),b(x,{color:`primary`,children:`Button 3`}),b(x,{color:`primary`,children:`Button 4`}),b(x,{color:`primary`,disabled:!0,title:`Disabled download`,icon:b(U,{label:`DL`})}),b(x,{color:`primary`,title:`Download`,icon:b(U,{label:`DL`})})]}),y(V.Compact,{block:!0,children:[b(x,{children:`Button 1`}),b(x,{children:`Button 2`}),b(x,{children:`Button 3`}),b(x,{disabled:!0,title:`Disabled download`,icon:b(U,{label:`DL`})}),b(x,{title:`Download`,icon:b(U,{label:`DL`})}),b(x,{color:`primary`,children:`Button 4`}),b(C,{trigger:`click`,placement:`bottomRight`,items:G,children:b(x,{color:`primary`,title:`More actions`,icon:b(U,{label:`...`})})})]})]})});r(()=>l(e,s,F))});let I=t(`rue:component:anchor`);i(s,I),n(()=>{let e=p(D,{title:`Compact 垂直按钮组`,summary:`再补一组纵向按钮拼接，直接把默认、dashed、primary 和 outlined 四种按钮风格摆在一起。`,tab:u.compactVerticalButtons,code:ae,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{size:`large`,wrap:!0,children:[y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 3`})]})]})})});r(()=>l(e,s,I))});let L=t(`rue:component:anchor`);i(s,L),n(()=>{let e=p(D,{title:`Compact 纵向表单`,summary:`纵向 Compact 更适合移动端或窄侧栏里的批量录入。`,tab:u.compactVertical,code:re,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V.Compact,{vertical:!0,block:!0,className:`w-full max-w-sm`,children:[b(T,{className:`w-full`,placeholder:`Campaign title`}),b(T,{className:`w-full`,placeholder:`Owner`}),b(x,{className:`w-full`,color:`primary`,children:`Create workspace`})]})})});r(()=>l(e,s,L))});let R=t(`rue:component:anchor`);i(s,R),n(()=>{let e=p(D,{title:`场景化组合`,summary:`Space 负责主节奏，Space.Compact 负责局部收口，适合真实工作台头部。`,tab:u.scene,code:oe,preview:y(V,{block:!0,align:`center`,wrap:!0,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[y(V,{vertical:!0,className:`min-w-52`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:`release room`}),y(`div`,{children:[b(`div`,{className:`text-lg font-semibold`,children:`Weekly rollout`}),b(`div`,{className:`text-sm text-base-content/60`,children:`3 streams waiting for approval`})]})]}),y(V,{size:`large`,wrap:!0,className:`flex-1 justify-end`,children:[b(S,{color:`primary`,children:`preview ready`}),b(S,{color:`secondary`,children:`7 checks`}),b(S,{color:`accent`,children:`2 owners`}),y(V.Compact,{children:[b(x,{variant:`outline`,children:`Draft`}),b(x,{color:`primary`,children:`Publish`})]})]})]})});r(()=>l(e,s,R))});let z=o(`h2`,s);i(s,z),i(z,m(`API`));let B=t(`rue:component:anchor`);i(s,B),n(()=>{let e=p(H,{rows:K});r(()=>l(e,s,B))});let Z=o(`h2`,s);i(s,Z),c(Z,`mt-10`),i(Z,m(`Space.Compact API`));let Q=o(`p`,s);i(s,Q),c(Q,`text-sm opacity-70`),i(Q,m(`Space.Compact 对应的是 compact 语义：它负责把控件压成连续组，默认不提供 gap；如果你要的是普通留白，请继续使用 Space。`));let $=t(`rue:component:anchor`);return i(s,$),n(()=>{let e=p(H,{rows:q});r(()=>l(e,s,$))}),a})}),d,f),d})};export{Z as default};