import{At as e,Cn as t,Ct as n,Lt as r,Tt as i,dt as a,ft as o,mt as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,s as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as y,t as b}from"./src-CCTNpCXV.js";import{t as x}from"./button-CvwbmGA0.js";import{t as S}from"./badge-B-YHGclR.js";import{t as C}from"./dropdown-DerWX1J1.js";import{t as w}from"./tooltip-B0P-stJp.js";import{t as T}from"./input-X8WmXKJB.js";import{r as E}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as D}from"./PreviewBlock-ARp---67.js";var O={small:`var(--rue-theme-space-sm, 8px)`,middle:`var(--rue-theme-space-md, 16px)`,large:`var(--rue-theme-space-lg, 24px)`},k=(...e)=>e.filter(Boolean).join(` `),A=(...e)=>{let t={};return e.forEach(e=>{!e||typeof e!=`object`||Array.isArray(e)||Object.assign(t,e)}),Object.keys(t).length>0?t:void 0},j=e=>Array.isArray(e)?e.flatMap(e=>j(e)):e==null||typeof e==`boolean`?[]:[e],M=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e===`small`||e===`middle`||e===`large`?O[e]:e},N=e=>{if(Array.isArray(e))return{columnGap:M(e[0]),rowGap:M(e[1])};let t=M(e??`small`);return{columnGap:t,rowGap:t}},P=(e,t,n)=>n?`vertical`:e??t??`horizontal`,F=(e,t,n)=>{let r=t===0,i=t===n-1;return e===`vertical`?k(`rue-space-compact-item relative overflow-hidden`,!r&&`-mt-px rounded-t-none`,!i&&`rounded-b-none`):k(`rue-space-compact-item relative overflow-hidden`,!r&&`-ml-px rounded-l-none`,!i&&`rounded-r-none`)},I=e=>typeof e==`function`?e():e,L=e=>{if(e!=null){if(typeof e==`number`)return{minHeight:`${e}px`};if(e===`small`)return{fontSize:`0.875rem`};if(e===`large`)return{fontSize:`1rem`};if(/^\d/.test(e))return{minHeight:e}}},R=(e,t)=>p(r=>{let o=l(`span`,r);n(o,`aria-hidden`,`true`),d(()=>{i(o,k(`rue-space-separator shrink-0 select-none text-base-content/45`,t===`vertical`&&`leading-none`))});let s=a(`rue:slot:anchor`);return u(o,s),d(()=>{let t=e;f(()=>m(t,o,s))}),o}),z=t=>p(n=>{let r=l(`div`,n);d(()=>{i(r,k(`rue-space-item min-w-0 max-w-full`,t.itemClassName))}),d(()=>{let n=A({display:`flex`,flexDirection:t.direction===`vertical`?`column`:`row`,alignItems:t.align,minWidth:0,maxWidth:`100%`,...t.showSeparator?t.direction===`vertical`?{rowGap:t.separatorGap}:{columnGap:t.separatorGap}:{}},t.itemStyle);e(r,n)});let o=a(`rue:slot:anchor`);u(r,o),d(()=>{let e=t.child;f(()=>m(e,r,o))}),u(r,s(` `));let c=a(`rue:slot:anchor`);return u(r,c),d(()=>{let e=t.showSeparator?R(I(t.separator),t.direction):``;f(()=>m(e,r,c))}),r}),B=t=>p(r=>{let o=l(`div`,r);n(o,`data-rue-space-compact-item`,``),d(()=>{i(o,k(F(t.direction,t.index,t.total),t.block&&(t.direction===`vertical`?`w-full`:`flex-1`)))}),d(()=>{let n=A({display:`flex`,minWidth:0,maxWidth:`100%`},t.blockItemStyle,t.compactShellStyle);e(o,n)});let s=a(`rue:slot:anchor`);return u(o,s),d(()=>{let e=t.child;f(()=>m(e,o,s))}),o}),V=Object.assign(e=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:i,__rue_rest_omit_2:s,__rue_rest_omit_3:c,__rue_rest_omit_4:l,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,__rue_rest_omit_8:S,__rue_rest_omit_9:C,__rue_rest_omit_10:w,__rue_rest_omit_11:T,__rue_rest_omit_12:E,__rue_rest_omit_13:D,__rue_rest_omit_14:O,rest:M,Component:F,childNodes:I,resolvedDirection:L,resolvedAlign:R,gap:B,mergedSeparator:V,separatorGap:H}=_(`useSetup:0:0`,()=>t(()=>{let{as:t,size:n,direction:i,orientation:a,vertical:o,align:s,split:c,separator:l,wrap:u,block:d,className:f,style:p,itemClassName:m,itemStyle:h,children:g,...v}=e,y=e.as===void 0?`div`:e.as,b=_(`computed:1:0`,()=>r(()=>j(e.children))),x=_(`computed:1:1`,()=>r(()=>P(e.orientation,e.direction,e.vertical))),S=x,C=_(`computed:1:2`,()=>r(()=>e.align??(S.get()===`horizontal`?`center`:void 0))),w=_(`computed:1:3`,()=>r(()=>N(e.size))),T=w;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,__rue_rest_omit_14:g,rest:v,Component:y,childNodes:b,resolvedDirection:x,resolvedAlign:C,gap:w,mergedSeparator:_(`computed:1:4`,()=>r(()=>e.separator??e.split)),separatorGap:_(`computed:1:5`,()=>r(()=>S.get()===`vertical`?T.get().rowGap:T.get().columnGap))}}));return p(t=>{let n=o(),r=a(`rue:component:anchor`);return u(n,r),d(()=>{let t=g(F,{...M,className:k(`rue-space min-w-0 max-w-full`,e.className),style:A({display:e.block!==void 0&&e.block?`flex`:`inline-flex`,flexDirection:L.get()===`vertical`?`column`:`row`,flexWrap:e.wrap!==void 0&&e.wrap?`wrap`:`nowrap`,alignItems:R.get(),width:e.block!==void 0&&e.block?`100%`:void 0,maxWidth:`100%`,columnGap:B.get().columnGap,rowGap:B.get().rowGap},e.style),"data-rue-space":``,"data-rue-space-direction":L.get(),"aria-orientation":L.get(),children:p(()=>{let t=o(),n=a(`rue:list:start`),r=a(`rue:list:end`);u(t,n),u(t,r);let i=new Map;return d(()=>{i=v({items:I.get()||[],getKey:(e,t)=>e?.key??e?.props?.key??t,elements:i,parent:n.parentNode,before:r,start:n,renderItem:(t,n,r,i,a)=>{h(g(z,{key:t?.key??t?.props?.key??a,child:t,direction:L.get(),align:R.get(),itemClassName:e.itemClassName,itemStyle:e.itemStyle,showSeparator:V.get()!=null&&a<I.get().length-1,separator:V.get(),separatorGap:H.get()}),n,r,i)}})}),t})});f(()=>m(t,n,r))}),n})},{Compact:e=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:i,__rue_rest_omit_2:s,__rue_rest_omit_3:c,__rue_rest_omit_4:l,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,__rue_rest_omit_8:S,rest:C,Component:w,childNodes:T}=_(`useSetup:0:0:dup1`,()=>t(()=>{let{as:t,size:n,direction:i,orientation:a,vertical:o,block:s,className:c,style:l,children:u,...d}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,rest:d,Component:e.as===void 0?`div`:e.as,childNodes:_(`computed:1:6`,()=>r(()=>j(e.children)))}}));if(T.get().length===0)return null;let E=P(e.orientation,e.direction,e.vertical),D=e.block!==void 0&&e.block?E===`vertical`?{width:`100%`}:{flex:`1 1 0%`}:void 0,O=L(e.size);return p(t=>{let n=o(),r=a(`rue:component:anchor`);return u(n,r),d(()=>{let t=g(w,{...C,className:k(`rue-space-compact max-w-full`,e.className),style:A({display:`flex`,flexDirection:E===`vertical`?`column`:`row`,width:e.block!==void 0&&e.block?`100%`:void 0,maxWidth:`100%`},e.style),"data-rue-space-compact":``,"data-rue-space-direction":E,"aria-orientation":E,children:p(()=>{let t=o(),n=a(`rue:list:start`),r=a(`rue:list:end`);u(t,n),u(t,r);let i=new Map;return d(()=>{i=v({items:T.get()||[],getKey:(e,t)=>t,elements:i,parent:n.parentNode,before:r,start:n,renderItem:(t,n,r,i,a)=>{h(g(B,{key:a,child:t,direction:E,index:a,total:T.get().length,block:e.block!==void 0&&e.block,blockItemStyle:D,compactShellStyle:O}),n,r,i)}})}),t})});f(()=>m(t,n,r))}),n})}}),H=e=>p(t=>{let r=l(`div`,t);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,r);u(r,c),i(c,`table table-zebra`);let h=l(`thead`,c);u(c,h);let g=l(`tr`,h);u(h,g);let _=l(`th`,g);u(g,_),u(_,s(`属性`));let y=l(`th`,g);u(g,y),u(y,s(`说明`));let b=l(`th`,g);u(g,b),u(b,s(`类型`));let x=l(`th`,g);u(g,x),u(x,s(`默认值`));let S=l(`tbody`,c);u(c,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);u(S,C),u(S,w);let T=new Map;return d(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,t,r,i,s)=>{m(p(()=>{let t=o(),r=l(`tr`,t);u(t,r),d(()=>{n(r,`key`,String(e.prop))});let i=l(`td`,r);u(r,i);let s=l(`code`,i);u(i,s);let c=a(`rue:slot:anchor`);u(s,c),d(()=>{let t=e.prop;f(()=>m(t,s,c))});let p=l(`td`,r);u(r,p);let h=a(`rue:slot:anchor`);u(p,h),d(()=>{let t=e.description;f(()=>m(t,p,h))});let g=l(`td`,r);u(r,g);let _=l(`code`,g);u(g,_);let v=a(`rue:slot:anchor`);u(_,v),d(()=>{let t=e.type;f(()=>m(t,_,v))});let y=l(`td`,r);u(r,y);let b=l(`code`,y);u(y,b);let x=a(`rue:slot:anchor`);return u(b,x),d(()=>{let t=e.defaultValue;f(()=>m(t,b,x))}),t}),t,r)}})}),r}),U=e=>p(t=>{let r=l(`span`,t);n(r,`aria-hidden`,`true`),i(r,`text-[10px] font-semibold uppercase tracking-[0.12em]`);let o=a(`rue:slot:anchor`);return u(r,o),d(()=>{let t=e.label;f(()=>m(t,r,o))}),r}),W=[{key:`report`,label:`Report`,icon:b(U,{label:`RP`})},{key:`mail`,label:`Mail`,icon:b(U,{label:`ML`})},{key:`mobile`,label:`Mobile`,icon:b(U,{label:`MB`})}],G=[{key:`first`,label:`1st item`},{key:`second`,label:`2nd item`},{key:`third`,label:`3rd item`}],K=[{prop:`as`,description:`指定根节点标签或组件，适合 section、nav、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`主轴与交叉轴间距，支持 small / middle / large、数字像素值和 [columnGap, rowGap]。`,type:`'small' | 'middle' | 'large' | number | string | [SpaceSize, SpaceSize]`,defaultValue:`'small'`},{prop:`direction`,description:`主轴方向，保持 horizontal / vertical 两种布局。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`orientation`,description:`direction 的同义增强写法，适合和其他 Rue 组件保持语义一致。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`vertical`,description:`纵向快捷开关，传入 true 时直接切为 vertical。`,type:`boolean`,defaultValue:`false`},{prop:`align`,description:`交叉轴对齐，水平布局默认 center，垂直布局按内容自然拉伸。`,type:`'start' | 'end' | 'center' | 'baseline' | 'stretch'`,defaultValue:`'center'（horizontal）`},{prop:`separator / split`,description:`在相邻项之间插入分隔内容；自定义节点推荐传函数，确保每次都生成新的分隔符实例。`,type:`any | (() => any)`,defaultValue:`-`},{prop:`wrap`,description:`允许水平排列在空间不足时自动换行。`,type:`boolean`,defaultValue:`false`},{prop:`block`,description:`让容器使用 flex 并占满可用宽度，适合工具条和过滤区。`,type:`boolean`,defaultValue:`false`},{prop:`itemClassName / itemStyle`,description:`补充每个子项包装层的类名和内联样式，适合卡片、徽标和统计组。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],q=[{prop:`as`,description:`指定根节点标签或组件。`,type:`any`,defaultValue:`'div'`},{prop:`direction / orientation / vertical`,description:`Compact 的横向或纵向编排方式。`,type:`'horizontal' | 'vertical' | boolean`,defaultValue:`'horizontal'`},{prop:`block`,description:`让 Compact 组占满宽度，适合表单工具条和移动端批量操作。`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`用于调整 Compact 壳层的密度，适合文本段、标签组或自定义内容；不会生成子项间距。`,type:`'small' | 'middle' | 'large' | number | string`,defaultValue:`-`},{prop:`className / style`,description:`补充根容器样式。`,type:`string / Record<string, any>`,defaultValue:`-`}],J=`<Space>
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
</Space>`,Z=()=>{let{tabs:e}=_(`useSetup:0:0`,()=>t(()=>({tabs:{basic:_(`ref:1:0`,()=>c(`preview`)),direction:_(`ref:1:1`,()=>c(`preview`)),size:_(`ref:1:2`,()=>c(`preview`)),wrap:_(`ref:1:3`,()=>c(`preview`)),separator:_(`ref:1:4`,()=>c(`preview`)),compactToolbar:_(`ref:1:5`,()=>c(`preview`)),compactButtons:_(`ref:1:6`,()=>c(`preview`)),compactVerticalButtons:_(`ref:1:7`,()=>c(`preview`)),compactVertical:_(`ref:1:8`,()=>c(`preview`)),scene:_(`ref:1:9`,()=>c(`preview`))}})));return p(t=>{let n=o(),r=a(`rue:component:anchor`);return u(n,r),m(g(E,{children:p(()=>{let t=o(),n=l(`div`,t);u(t,n),i(n,`max-w-none prose prose-sm md:prose-base`);let r=l(`h1`,n);u(n,r),u(r,s(`Space 间距容器`));let c=l(`p`,n);u(n,c),i(c,`text-sm mt-3 mb-3`),u(c,s(`Space 现在不再只是“自己写 gap”的占位组件，而是补成了一个完整的布局原语。它使用 Rue 自己干净直接的视觉，不抢内容本身的风头，同时把常用的水平/垂直编排、对齐、换行、分隔符和 Compact 紧凑组合一次覆盖。`));let p=l(`h2`,n);u(n,p),u(p,s(`何时使用`));let h=l(`ul`,n);u(n,h);let _=l(`li`,h);u(h,_),u(_,s(`需要把按钮、标签、统计块、输入控件排成一致的节奏，而不想在每个页面重复手写 gap。`));let v=l(`li`,h);u(h,v),u(v,s(`需要在同一套 API 下切换 horizontal、vertical、wrap 和 separator，保持布局表达统一。`));let E=l(`li`,h);u(h,E),u(E,s(`需要工具条、搜索栏、批量操作区这类更紧凑的组合时，可以直接切到 Space.Compact。`));let O=l(`h2`,n);u(n,O),u(O,s(`推荐用法`));let k=a(`rue:component:anchor`);u(n,k),d(()=>{let t=g(D,{title:`基础间距`,summary:`最小可用写法，适合动作按钮、标签和轻量操作组。`,tab:e.basic,code:J,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{children:[b(x,{color:`primary`,children:`Run build`}),b(x,{color:`secondary`,variant:`outline`,children:`Preview`}),b(S,{color:`neutral`,children:`workspace`})]})})});f(()=>m(t,n,k))});let A=a(`rue:component:anchor`);u(n,A),d(()=>{let t=g(D,{title:`方向与对齐`,summary:`主轴方向和交叉轴对齐都在 Space 本身表达，不需要额外写 flex 类。`,tab:e.direction,code:Y,preview:y(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[y(V,{align:`baseline`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(S,{color:`primary`,children:`baseline`}),b(`span`,{className:`text-2xl font-semibold`,children:`24h`}),b(`span`,{className:`text-sm opacity-60`,children:`fresh`})]}),y(V,{vertical:!0,align:`stretch`,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Upload assets`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Sync routes`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Publish preview`})]})]})});f(()=>m(t,n,A))});let j=a(`rue:component:anchor`);u(n,j),d(()=>{let t=g(D,{title:`尺寸与自定义 Gap`,summary:`使用 small / middle / large 预设，也支持 tuple 间距覆盖列距与行距。`,tab:e.size,code:X,preview:y(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[y(V,{size:`small`,children:[b(S,{color:`primary`,children:`small`}),b(S,{color:`secondary`,children:`8px token`}),b(S,{color:`accent`,children:`dense`})]}),y(V,{size:`middle`,children:[b(S,{color:`primary`,children:`middle`}),b(S,{color:`secondary`,children:`balanced`}),b(S,{color:`accent`,children:`12px token`})]}),y(V,{size:[28,14],wrap:!0,className:`max-w-xl`,children:[b(S,{color:`neutral`,children:`tuple gap`}),b(S,{color:`info`,children:`column 28`}),b(S,{color:`success`,children:`row 14`}),b(S,{color:`warning`,children:`wrap aware`}),b(S,{color:`error`,children:`custom density`})]})]})});f(()=>m(t,n,j))});let M=a(`rue:component:anchor`);u(n,M),d(()=>{let t=g(D,{title:`自动换行`,summary:`用 wrap 处理标签墙、筛选条件和批量状态块，保持行距稳定。`,tab:e.wrap,code:ee,preview:y(V,{wrap:!0,size:[16,12],className:`max-w-2xl rounded-[1.5rem] border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`,children:[b(S,{color:`primary`,children:`router`}),b(S,{color:`secondary`,children:`runtime-vapor`}),b(S,{color:`accent`,children:`design-system`}),b(S,{color:`neutral`,children:`sfc playground`}),b(S,{color:`info`,children:`bench`}),b(S,{color:`success`,children:`release`}),b(S,{color:`warning`,children:`compat`}),b(S,{color:`error`,children:`incident`})]})});f(()=>m(t,n,M))});let N=a(`rue:component:anchor`);u(n,N),d(()=>{let t=g(D,{title:`Separator / Split`,summary:`分隔符适合 breadcrumb、命令路径和键值对；自定义节点推荐传函数。`,tab:e.separator,code:te,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{separator:()=>b(`span`,{className:`text-xs uppercase tracking-[0.2em] opacity-35`,children:`/`}),children:[b(`a`,{className:`link link-hover`,children:`Workspace`}),b(`a`,{className:`link link-hover`,children:`Design`}),b(`span`,{className:`font-medium`,children:`Space`})]})})});f(()=>m(t,n,N))});let P=a(`rue:component:anchor`);u(n,P),d(()=>{let t=g(D,{title:`Compact 横向工具条`,summary:`把输入、筛选和提交动作收成一个连续控制带，适合搜索栏与操作条；Compact 默认就是无间距拼接。`,tab:e.compactToolbar,code:ne,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V.Compact,{className:`w-full max-w-3xl`,children:[b(T,{className:`w-full`,placeholder:`Search component or token`}),y(`select`,{className:`select w-full min-w-40`,children:[b(`option`,{children:`All teams`}),b(`option`,{children:`Design infra`}),b(`option`,{children:`Runtime`})]}),b(x,{className:`w-full lg:w-auto`,color:`primary`,children:`Search`})]})})});f(()=>m(t,n,P))});let F=a(`rue:component:anchor`);u(n,F),d(()=>{let t=g(D,{title:`Compact 按钮拼接`,summary:`补一组更接近操作面板的按钮拼接示例：图标轨道、主色动作条和带下拉收口的混合按钮组。`,tab:e.compactButtons,code:ie,preview:y(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm space-y-4`,children:[y(V.Compact,{block:!0,children:[b(w,{title:`Like`,children:b(x,{shape:`square`,"aria-label":`Like`,icon:b(U,{label:`LK`})})}),b(w,{title:`Comment`,children:b(x,{shape:`square`,"aria-label":`Comment`,icon:b(U,{label:`CM`})})}),b(w,{title:`Star`,children:b(x,{shape:`square`,"aria-label":`Star`,icon:b(U,{label:`ST`})})}),b(w,{title:`Heart`,children:b(x,{shape:`square`,"aria-label":`Heart`,icon:b(U,{label:`HT`})})}),b(w,{title:`Share`,children:b(x,{shape:`square`,"aria-label":`Share`,icon:b(U,{label:`SH`})})}),b(w,{title:`Download`,children:b(x,{shape:`square`,"aria-label":`Download`,icon:b(U,{label:`DL`})})}),b(C,{trigger:`click`,placement:`bottomRight`,items:W,children:b(x,{shape:`square`,"aria-label":`More actions`,icon:b(U,{label:`...`})})})]}),y(V.Compact,{block:!0,children:[b(x,{color:`primary`,children:`Button 1`}),b(x,{color:`primary`,children:`Button 2`}),b(x,{color:`primary`,children:`Button 3`}),b(x,{color:`primary`,children:`Button 4`}),b(x,{color:`primary`,disabled:!0,title:`Disabled download`,icon:b(U,{label:`DL`})}),b(x,{color:`primary`,title:`Download`,icon:b(U,{label:`DL`})})]}),y(V.Compact,{block:!0,children:[b(x,{children:`Button 1`}),b(x,{children:`Button 2`}),b(x,{children:`Button 3`}),b(x,{disabled:!0,title:`Disabled download`,icon:b(U,{label:`DL`})}),b(x,{title:`Download`,icon:b(U,{label:`DL`})}),b(x,{color:`primary`,children:`Button 4`}),b(C,{trigger:`click`,placement:`bottomRight`,items:G,children:b(x,{color:`primary`,title:`More actions`,icon:b(U,{label:`...`})})})]})]})});f(()=>m(t,n,F))});let I=a(`rue:component:anchor`);u(n,I),d(()=>{let t=g(D,{title:`Compact 垂直按钮组`,summary:`再补一组纵向按钮拼接，直接把默认、dashed、primary 和 outlined 四种按钮风格摆在一起。`,tab:e.compactVerticalButtons,code:ae,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V,{size:`large`,wrap:!0,children:[y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,type:`dashed`,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,color:`primary`,className:`justify-start`,children:`Button 3`})]}),y(V.Compact,{orientation:`vertical`,className:`w-40`,children:[b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 1`}),b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 2`}),b(x,{block:!0,type:`outlined`,className:`justify-start`,children:`Button 3`})]})]})})});f(()=>m(t,n,I))});let L=a(`rue:component:anchor`);u(n,L),d(()=>{let t=g(D,{title:`Compact 纵向表单`,summary:`纵向 Compact 更适合移动端或窄侧栏里的批量录入。`,tab:e.compactVertical,code:re,preview:b(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:y(V.Compact,{vertical:!0,block:!0,className:`w-full max-w-sm`,children:[b(T,{className:`w-full`,placeholder:`Campaign title`}),b(T,{className:`w-full`,placeholder:`Owner`}),b(x,{className:`w-full`,color:`primary`,children:`Create workspace`})]})})});f(()=>m(t,n,L))});let R=a(`rue:component:anchor`);u(n,R),d(()=>{let t=g(D,{title:`场景化组合`,summary:`Space 负责主节奏，Space.Compact 负责局部收口，适合真实工作台头部。`,tab:e.scene,code:oe,preview:y(V,{block:!0,align:`center`,wrap:!0,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[y(V,{vertical:!0,className:`min-w-52`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:`release room`}),y(`div`,{children:[b(`div`,{className:`text-lg font-semibold`,children:`Weekly rollout`}),b(`div`,{className:`text-sm text-base-content/60`,children:`3 streams waiting for approval`})]})]}),y(V,{size:`large`,wrap:!0,className:`flex-1 justify-end`,children:[b(S,{color:`primary`,children:`preview ready`}),b(S,{color:`secondary`,children:`7 checks`}),b(S,{color:`accent`,children:`2 owners`}),y(V.Compact,{children:[b(x,{variant:`outline`,children:`Draft`}),b(x,{color:`primary`,children:`Publish`})]})]})]})});f(()=>m(t,n,R))});let z=l(`h2`,n);u(n,z),u(z,s(`API`));let B=a(`rue:component:anchor`);u(n,B),d(()=>{let e=g(H,{rows:K});f(()=>m(e,n,B))});let Z=l(`h2`,n);u(n,Z),i(Z,`mt-10`),u(Z,s(`Space.Compact API`));let Q=l(`p`,n);u(n,Q),i(Q,`text-sm opacity-70`),u(Q,s(`Space.Compact 对应的是 compact 语义：它负责把控件压成连续组，默认不提供 gap；如果你要的是普通留白，请可以使用 Space。`));let $=a(`rue:component:anchor`);return u(n,$),d(()=>{let e=g(H,{rows:q});f(()=>m(e,n,$))}),t})}),n,r),n})};export{Z as default};