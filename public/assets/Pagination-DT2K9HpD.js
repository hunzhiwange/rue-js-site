import{$ as e,Gt as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,t as h,tt as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _,n as v}from"./vapor-helpers-vapor-DkadWylb.js";import{i as y,r as b}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as x}from"./tabs-DMHgT-aV.js";import{n as S}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as C}from"./Code-B_4lzH85.js";var w=(e,t)=>t?`${e} ${t}`:e,T=(...e)=>e.filter(Boolean).join(` `),E=(e,t,n)=>Math.min(Math.max(e,t),n),D=(e,t)=>{let n=Number(e);return!Number.isFinite(n)||n<=0?t:Math.floor(n)},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},k=e=>{switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}},A=e=>{let t=`join`;return e&&(t+=` join-${e}`),t},j=(e,t,n,r)=>{let i=O(e),a=`join-item btn`;return i&&(a+=` btn-${i}`),t&&(a+=` btn-active`),n&&(a+=` btn-disabled`),r&&(a+=` ${r}`),a},M=(e,t)=>{let n=O(e),r=`select select-bordered`;return n&&(r+=` select-${n}`),t&&(r+=` ${t}`),r},ee=(e,t)=>{let n=O(e),r=`input input-bordered`;return n&&(r+=` input-${n}`),t&&(r+=` ${t}`),r},te=(e,t)=>T(ee(e),`appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,t),N=(e,t)=>{let n=String(Math.max(1,e)).length;return t===`simple`?n<=2?`w-10`:n===3?`w-12`:`w-14`:n<=2?`w-14`:n===3?`w-16`:`w-20`},P=e=>{let t=e.reduce((e,t)=>Math.max(e,String(t).length),2);return t<=2?`w-16`:t===3?`w-18`:`w-20`},ne=e=>e.current!==void 0||e.defaultCurrent!==void 0||e.total!==void 0||e.pageSize!==void 0||e.defaultPageSize!==void 0||e.simple!==void 0||e.showSizeChanger!==void 0||e.showQuickJumper!==void 0||e.showLessItems!==void 0||e.hideOnSinglePage!==void 0||e.showTotal!==void 0||e.itemRender!==void 0||e.align!==void 0||e.size!==void 0||e.disabled!==void 0||e.onChange!==void 0||e.onShowSizeChange!==void 0||e.pageSizeOptions!==void 0||e.locale!==void 0,re=(e,t,n)=>n<=0?[0,0]:[(e-1)*t+1,Math.min(n,e*t)],ie=(e,t,n)=>{if(t<=0)return[];let r=[],i=n?1:2,a=n?3:5;if(t<=5+i*2){for(let e=1;e<=t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r}let o=Math.max(1,e-i),s=Math.min(t,e+i);if(r.push({type:`page`,page:1,label:`1`}),o>2)r.push({type:`jump-prev`,page:Math.max(1,e-a),label:`•••`});else for(let e=2;e<o;e+=1)r.push({type:`page`,page:e,label:String(e)});for(let e=Math.max(2,o);e<=Math.min(t-1,s);e+=1)r.push({type:`page`,page:e,label:String(e)});if(s<t-1)r.push({type:`jump-next`,page:Math.min(t,e+a),label:`•••`});else for(let e=s+1;e<t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r.push({type:`page`,page:t,label:String(t)}),r},F=Object.assign(({direction:e,align:n,size:i,className:a,children:o,current:s,defaultCurrent:c,total:l,pageSize:u,defaultPageSize:d,disabled:f,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTitle:x=!0,showTotal:S,itemRender:C,onChange:j,onShowSizeChange:I,locale:L,...ae})=>{if(!ne({direction:e,align:n,size:i,className:a,children:o,current:s,defaultCurrent:c,total:l,pageSize:u,defaultPageSize:d,disabled:f,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTotal:S,itemRender:C,onChange:j,onShowSizeChange:I,locale:L}))return b(`div`,{...ae,className:w(A(e),a),children:o});let R=r(D(c??s??1,1)),z=r(D(d??u??10,10)),B=D(u??z.value,10),V=Math.max(0,Number(l)||0),H=Math.max(1,Math.ceil(V/B)),U=E(D(s??R.value,1),1,H),oe=re(U,B,V),W=h&&h.length>0?h.map(e=>D(e,B)):[10,20,50,100],G=typeof p==`object`?p:p?{}:void 0,K=typeof g==`object`&&g?g:g?{}:void 0,q=ie(U,H,_),J=t();if(!J.current){let e=String(U);J.current={page:U,simple:e,quick:e}}else if(J.current.page!==U){let e=String(U);J.current.page=U,J.current.simple=e,J.current.quick=e}let Y=J.current,X={prev:L?.prev??`‹`,next:L?.next??`›`,jumpPrev:L?.jumpPrev??`•••`,jumpNext:L?.jumpNext??`•••`,pageSuffix:L?.pageSuffix??`/ page`,itemsPerPage:L?.itemsPerPage??`items / page`,pageTitle:L?.pageTitle??(e=>`Page ${e}`),jumpTo:L?.jumpTo??`Go to`,previousPage:L?.previousPage??`Previous Page`,nextPage:L?.nextPage??`Next Page`,jumpPrevTitle:L?.jumpPrevTitle??`Jump Previous Pages`,jumpNextTitle:L?.jumpNextTitle??`Jump Next Pages`};if(v&&H<=1)return null;let Z=(e,t=B)=>{let n=Math.max(1,Math.ceil(V/t)),r=E(D(e,1),1,n);s===void 0&&(R.value=r),u===void 0&&t!==B&&(z.value=t),j&&j(r,t)},se=e=>{let t=D(e,B),n=E(U,1,Math.max(1,Math.ceil(V/t)));u===void 0&&(z.value=t),s===void 0&&(R.value=n),I&&I(n,t),j&&j(n,t)},Q=(e,t,n,r)=>{let a=!!f||!!r?.disabled,o=n,s=C?C(e,t,o):o;return b(F.Item,{size:i,active:r?.active,disabled:a,"aria-label":t===`page`?X.pageTitle(e):void 0,title:x?r?.title??(t===`page`?X.pageTitle(e):void 0):void 0,onClick:()=>{a||r?.active||Z(e)},children:s})},ce=G?y(`div`,{className:A(),children:[Q(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),y(`div`,{className:ee(i,`join-item inline-flex shrink-0 items-center gap-1 px-2 text-sm`),children:[G.readOnly?b(`span`,{className:`tabular-nums`,children:U}):b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.simple,disabled:f,className:T(`border-0 bg-transparent p-0 text-right outline-none appearance-none [appearance:textfield] tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,N(H,`simple`)),onInput:e=>{Y.simple=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))},onBlur:e=>{if(f)return;let t=e.currentTarget;if(t.value===``){t.value=String(U),Y.simple=t.value;return}Z(Number(t.value))}},`simple-${U}-${H}`),b(`span`,{className:`inline-flex items-center opacity-60`,children:X.pageSuffix===`/ page`?`/ ${H}`:`${X.pageSuffix} ${H}`})]}),Q(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]}):y(`div`,{className:A(e),children:[Q(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),q.map(e=>{let t=e.type===`jump-prev`?X.jumpPrev:e.type===`jump-next`?X.jumpNext:e.label;return Q(e.page,e.type,t,{active:e.type===`page`&&e.page===U,disabled:e.type===`page`?!1:!!f,title:e.type===`page`?X.pageTitle(e.page):e.type===`jump-prev`?X.jumpPrevTitle:X.jumpNextTitle})}),Q(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]});return y(`div`,{...ae,className:T(`flex flex-wrap items-center gap-3`,k(n),a),children:[S?b(`div`,{className:`text-sm opacity-70`,"aria-live":`polite`,children:S(V,oe)}):null,ce,m?y(`label`,{className:`flex items-center gap-2 text-sm opacity-80`,children:[b(`select`,{value:String(B),disabled:f,className:M(i,`${P(W)} text-center tabular-nums`),onChange:e=>se(Number(e.currentTarget.value)),children:W.map(e=>b(`option`,{value:String(e),children:e},e))}),b(`span`,{children:X.itemsPerPage})]}):null,K?y(`div`,{className:`flex items-center gap-2 text-sm`,children:[b(`span`,{className:`opacity-70`,children:X.jumpTo}),b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.quick,disabled:f,className:te(i,`${N(H,`quick`)} text-center tabular-nums`),onInput:e=>{Y.quick=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))}},`quick-${U}-${H}`),K.goButton==null?null:b(`button`,{type:`button`,disabled:f,className:T(`btn`,O(i)?`btn-${O(i)}`:void 0),onClick:e=>{let t=e.currentTarget.parentElement?.querySelector(`input`);t&&Z(Number(t.value))},children:K.goButton})]}):null]})},{Item:({tag:e=`button`,active:t,disabled:n,size:r,className:i,children:a,...o})=>{let s=e,c={...o,className:j(r,t,n,i)};return t&&(c[`aria-current`]=o[`aria-current`]??`page`),n&&(c[`aria-disabled`]=o[`aria-disabled`]??!0,e===`button`||e===`input`?c.disabled=o.disabled??!0:(c.role=o.role??`button`,c.tabIndex=o.tabIndex??-1)),b(s,{...c,children:a})}}),I=p=>{let{tabRef:m,tab:g}=_(`useSetup:0:0`,()=>n(()=>{let e=_(`useRef:1:0`,()=>t());return e.current||=_(`ref:1:1`,()=>r(`preview`)),{tabRef:e,tab:e.current}}));return u(t=>{let n=e(`div`,t);l(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=e(`div`,n);o(n,r),l(r,`flex flex-wrap items-start justify-between gap-3`);let m=e(`div`,r);o(r,m);let _=e(`h2`,m);o(m,_),l(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(_,d(`# `));let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=p.title;a(()=>f(e,_,v))});let y=c(`rue:slot:anchor`);o(m,y),s(()=>{let t=p.summary?u(()=>{let t=i(),n=e(`p`,t);o(t,n),l(n,`m-0 text-sm opacity-70`);let r=c(`rue:slot:anchor`);return o(n,r),s(()=>{let e=p.summary;a(()=>f(e,n,r))}),t}):``;a(()=>f(t,m,y))});let b=c(`rue:component:anchor`);o(n,b),s(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:g.value,onChange:e=>g.value=e,className:`mb-3 mt-4`});a(()=>f(e,n,b))});let S=c(`rue:slot:anchor`);return o(n,S),s(()=>{let e=g.value===`preview`?p.preview():u(()=>{let e=i(),t=c(`rue:component:anchor`);return o(e,t),s(()=>{let n=h(C,{className:`mt-2`,lang:`tsx`,code:p.code});a(()=>f(n,e,t))}),e});a(()=>f(e,n,S))}),n})},L=t=>u(n=>{let r=e(`div`,n);l(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,r);o(r,p),l(p,`table table-zebra`);let h=e(`thead`,p);o(p,h);let g=e(`tr`,h);o(h,g);let _=e(`th`,g);o(g,_),o(_,d(`属性`));let y=e(`th`,g);o(g,y),o(y,d(`说明`));let b=e(`th`,g);o(g,b),o(b,d(`类型`));let x=e(`th`,g);o(g,x),o(x,d(`默认值`));let S=e(`tbody`,p);o(p,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,l,d)=>{f(u(()=>{let n=i(),r=e(`tr`,n);o(n,r),s(()=>{m(r,`key`,String(t.prop))});let l=e(`td`,r);o(r,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>f(e,u,d))});let p=e(`td`,r);o(r,p);let h=c(`rue:slot:anchor`);o(p,h),s(()=>{let e=t.description;a(()=>f(e,p,h))});let g=e(`td`,r);o(r,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>f(e,_,v))});let y=e(`td`,r);o(r,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>f(e,b,x))}),n}),n,r)}})}),r}),ae=[{prop:`current / defaultCurrent`,description:`受控或非受控的当前页码。`,type:`number`,defaultValue:`1`},{prop:`total`,description:`数据总条数；传入后自动计算页码按钮。`,type:`number`,defaultValue:`0`},{prop:`pageSize / defaultPageSize`,description:`每页条数，配合 total 共同决定总页数。`,type:`number`,defaultValue:`10`},{prop:`simple`,description:`切换为简洁模式；可传 { readOnly: true } 关闭中间输入。`,type:`boolean | { readOnly?: boolean }`,defaultValue:`false`},{prop:`showSizeChanger / pageSizeOptions`,description:`展示每页条数切换，并自定义可选项。`,type:`boolean / Array<number | string>`,defaultValue:`false / [10, 20, 50, 100]`},{prop:`showQuickJumper`,description:`展示快速跳页输入框；可传 { goButton } 自定义确认按钮。`,type:`boolean | { goButton?: any }`,defaultValue:`false`},{prop:`showTotal`,description:`自定义总数与区间文案。`,type:`(total: number, range: [number, number]) => any`,defaultValue:`-`},{prop:`itemRender`,description:`自定义页码、上一页、下一页、跳转项的渲染内容。`,type:`(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', original: any) => any`,defaultValue:`-`},{prop:`align / size / disabled`,description:`控制对齐、尺寸和禁用态。`,type:`'start' | 'center' | 'end' / 'xs' | 'sm' | 'md' | 'lg' | 'xl' / boolean`,defaultValue:`'start' / 'md' / false`},{prop:`showLessItems / hideOnSinglePage`,description:`控制页码折叠密度，以及单页时是否隐藏。`,type:`boolean`,defaultValue:`false`},{prop:`onChange / onShowSizeChange`,description:`页码变化、每页条数变化时的回调。`,type:`(page: number, pageSize: number) => void`,defaultValue:`-`}],R=()=>{let{stateRef:v,drivenPrimaryPage:x,drivenSecondaryPage:C,controlledPage:w,controlledPageSize:T,simplePage:E,simpleReadonlyPage:D,advancedPage:O,advancedPageSize:k,advancedCompactPage:A,advancedCompactPageSize:j,customPage:M}=_(`useSetup:0:0:dup1`,()=>n(()=>{let e=_(`useRef:1:2`,()=>t());return e.current||={drivenPrimaryPage:_(`ref:1:3`,()=>r(2)),drivenSecondaryPage:_(`ref:1:4`,()=>r(6)),controlledPage:_(`ref:1:5`,()=>r(4)),controlledPageSize:_(`ref:1:6`,()=>r(10)),simplePage:_(`ref:1:7`,()=>r(2)),simpleReadonlyPage:_(`ref:1:8`,()=>r(2)),advancedPage:_(`ref:1:9`,()=>r(3)),advancedPageSize:_(`ref:1:10`,()=>r(20)),advancedCompactPage:_(`ref:1:11`,()=>r(3)),advancedCompactPageSize:_(`ref:1:12`,()=>r(10)),customPage:_(`ref:1:13`,()=>r(6))},{stateRef:e,drivenPrimaryPage:e.current.drivenPrimaryPage,drivenSecondaryPage:e.current.drivenSecondaryPage,controlledPage:e.current.controlledPage,controlledPageSize:e.current.controlledPageSize,simplePage:e.current.simplePage,simpleReadonlyPage:e.current.simpleReadonlyPage,advancedPage:e.current.advancedPage,advancedPageSize:e.current.advancedPageSize,advancedCompactPage:e.current.advancedCompactPage,advancedCompactPageSize:e.current.advancedCompactPageSize,customPage:e.current.customPage}}));return u(t=>{let n=i(),r=c(`rue:component:anchor`);return o(n,r),f(h(S,{children:u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`max-w-none prose prose-sm md:prose-base`);let r=e(`h1`,n);o(n,r),o(r,d(`Pagination 分页`));let u=e(`p`,n);o(n,u),l(u,`text-sm mt-3 mb-3`),o(u,d(`Pagination 现在同时支持两类用法：保留原有的静态组合模式，以及更贴近业务组件习惯的 的数据驱动模式。 视觉仍基于 Rue 当前的 join 与 btn 体系，但补齐了页码计算、受控/非受控、简单模式、页容量切换、快捷跳转和自定义渲染。`));let _=e(`h2`,n);o(n,_),o(_,d(`何时使用`));let v=e(`ul`,n);o(n,v);let S=e(`li`,v);o(v,S),o(S,d(`需要保留 Rue 现有 join + btn 分页视觉，但希望组件自己计算页码与跳转逻辑。`));let ee=e(`li`,v);o(v,ee),o(ee,d(`需要受控/非受控分页、简单模式、页容量切换、快捷跳页等更完整的交互能力。`));let te=e(`li`,v);o(v,te),o(te,d(`需要在静态拼装和数据驱动两种模式间切换，并逐步迁移旧用法。`));let N=e(`h2`,n);o(n,N),l(N,`mt-8`),o(N,d(`静态组合模式`));let P=e(`p`,n);o(n,P),l(P,`text-sm opacity-80`),o(P,d(`适合完全自定义节点结构的场景。以下示例保留原有 compound 用法，只补齐说明与可复制代码。`));let ne=c(`rue:component:anchor`);o(n,ne),s(()=>{let e=h(I,{title:`Basic pagination`,summary:`最基础的静态拼装方式，适合完全由业务侧决定按钮内容和顺序。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{className:`w-fit`,"data-testid":`pagination-basic`,children:[b(F.Item,{"aria-label":`Previous page`,children:`«`}),b(F.Item,{children:`1`}),b(F.Item,{children:`2`}),b(F.Item,{children:`3`}),b(F.Item,{"aria-label":`Next page`,children:`»`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item aria-label="Previous page">«</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item aria-label="Next page">»</Pagination.Item>
</Pagination>`});a(()=>f(e,n,ne))});let re=c(`rue:component:anchor`);o(n,re),s(()=>{let e=h(I,{title:`Vertical pagination`,summary:"继续沿用 `direction='vertical'`，适合侧栏步骤、目录或分段导航。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{direction:`vertical`,className:`w-fit`,"data-testid":`pagination-vertical`,children:[b(F.Item,{children:`Overview`}),b(F.Item,{children:`Updates`}),b(F.Item,{children:`Logs`})]})})}),code:`<Pagination direction="vertical" className="w-fit">
  <Pagination.Item>Overview</Pagination.Item>
  <Pagination.Item>Updates</Pagination.Item>
  <Pagination.Item>Logs</Pagination.Item>
</Pagination>`});a(()=>f(e,n,re))});let ie=c(`rue:component:anchor`);o(n,ie),s(()=>{let e=h(I,{title:`Current and disabled items`,summary:"静态模式下仍可通过 `active`、`disabled` 和 `tag='a'` 控制语义与状态。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{className:`w-fit`,"data-testid":`pagination-stateful`,children:[b(F.Item,{disabled:!0,children:`Prev`}),b(F.Item,{children:`1`}),b(F.Item,{active:!0,children:`2`}),b(F.Item,{children:`3`}),b(F.Item,{tag:`a`,href:`#next`,children:`Next`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item disabled>Prev</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item active>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item tag="a" href="#next">Next</Pagination.Item>
</Pagination>`});a(()=>f(e,n,ie))});let R=c(`rue:component:anchor`);o(n,R),s(()=>{let e=h(I,{title:`Data driven basic`,summary:"传入 `total` 后由组件自动计算页码；这里改成受控版本，便于在设计页直接切换和观察当前页变化。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:x.value,total:120,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:e=>{x.value=e}}),b(F,{current:C.value,total:500,size:`sm`,align:`center`,onChange:e=>{C.value=e}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：默认尺寸第 `,x.value,` 页，小尺寸第`,` `,C.value,` 页`]})]})}),code:`const primaryPage = ref(2)
const secondaryPage = ref(6)

<>
  <Pagination
    current={primaryPage.value}
    total={120}
    showTotal={(total, range) => \`\${range[0]}-\${range[1]} / \${total}\`}
    onChange={page => {
      primaryPage.value = page
    }}
  />

  <Pagination
    current={secondaryPage.value}
    total={500}
    size="sm"
    align="center"
    onChange={page => {
      secondaryPage.value = page
    }}
  />
</>`});a(()=>f(e,n,R))});let z=c(`rue:component:anchor`);o(n,z),s(()=>{let e=h(I,{title:`Controlled pagination`,summary:"通过 `current` 与 `pageSize` 接管状态，适合和表格、请求参数或 URL 查询同步。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:w.value,pageSize:T.value,total:185,showSizeChanger:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`,onChange:(e,t)=>{w.value=e,T.value=t},onShowSizeChange:(e,t)=>{w.value=e,T.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前第 `,w.value,` 页，每页 `,T.value,` 条`]})]})}),code:`const current = ref(4)
const pageSize = ref(10)

<Pagination
  current={current.value}
  pageSize={pageSize.value}
  total={185}
  showSizeChanger
  showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
  onChange={(page, nextPageSize) => {
    current.value = page
    pageSize.value = nextPageSize
  }}
  onShowSizeChange={(page, nextPageSize) => {
    current.value = page
    pageSize.value = nextPageSize
  }}
/>`});a(()=>f(e,n,z))});let B=c(`rue:component:anchor`);o(n,B),s(()=>{let e=h(I,{title:`Simple mode`,summary:`简洁模式只保留上一页、页码输入和下一页，适合空间紧张的工具栏。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{simple:!0,current:E.value,total:50,onChange:e=>{E.value=e}}),b(F,{simple:{readOnly:!0},current:D.value,total:50,onChange:e=>{D.value=e}}),b(F,{simple:!0,total:50,defaultCurrent:2,disabled:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：可输入第 `,E.value,` 页，只读第 `,D.value,` 页`]})]})}),code:`const simplePage = ref(2)
const simpleReadonlyPage = ref(2)

<>
  <Pagination
    simple
    current={simplePage.value}
    total={50}
    onChange={page => {
      simplePage.value = page
    }}
  />
  <Pagination
    simple={{ readOnly: true }}
    current={simpleReadonlyPage.value}
    total={50}
    onChange={page => {
      simpleReadonlyPage.value = page
    }}
  />
  <Pagination simple total={50} defaultCurrent={2} disabled />
</>`});a(()=>f(e,n,B))});let V=c(`rue:component:anchor`);o(n,V),s(()=>{let e=h(I,{title:`Page size and quick jumper`,summary:`页容量切换与快捷跳页现在默认更紧凑，页数较少时输入框不会显得过宽。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:O.value,pageSize:k.value,total:120,showSizeChanger:!0,pageSizeOptions:[10,20,50],showQuickJumper:{goButton:`Go`},showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:(e,t)=>{O.value=e,k.value=t},onShowSizeChange:(e,t)=>{O.value=e,k.value=t}}),b(F,{current:A.value,pageSize:j.value,total:500,size:`sm`,showSizeChanger:!0,showQuickJumper:!0,align:`end`,onChange:(e,t)=>{A.value=e,j.value=t},onShowSizeChange:(e,t)=>{A.value=e,j.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`紧凑版当前第 `,A.value,` 页，每页 `,j.value,` `,`条`]})]})}),code:`const current = ref(3)
const pageSize = ref(20)
const compactPage = ref(3)
const compactPageSize = ref(10)

<>
  <Pagination
    current={current.value}
    pageSize={pageSize.value}
    total={120}
    showSizeChanger
    pageSizeOptions={[10, 20, 50]}
    showQuickJumper={{ goButton: 'Go' }}
    showTotal={(total, range) => \`\${range[0]}-\${range[1]} / \${total}\`}
    onChange={(page, nextPageSize) => {
      current.value = page
      pageSize.value = nextPageSize
    }}
    onShowSizeChange={(page, nextPageSize) => {
      current.value = page
      pageSize.value = nextPageSize
    }}
  />

  <Pagination
    current={compactPage.value}
    pageSize={compactPageSize.value}
    total={500}
    size="sm"
    showSizeChanger
    showQuickJumper
    align="end"
    onChange={(page, nextPageSize) => {
      compactPage.value = page
      compactPageSize.value = nextPageSize
    }}
    onShowSizeChange={(page, nextPageSize) => {
      compactPage.value = page
      compactPageSize.value = nextPageSize
    }}
  />
</>`});a(()=>f(e,n,V))});let H=c(`rue:component:anchor`);o(n,H),s(()=>{let e=h(I,{title:`Custom item render`,summary:"通过 `itemRender` 重写上一页、下一页或跳转项文本，保留默认交互逻辑。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:M.value,total:500,showLessItems:!0,onChange:e=>{M.value=e},itemRender:(e,t,n)=>t===`prev`?b(`span`,{className:`font-medium`,children:`Previous`}):t===`next`?b(`span`,{className:`font-medium`,children:`Next`}):n}),b(F,{total:8,defaultCurrent:1,hideOnSinglePage:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`自定义文案示例当前位于第 `,M.value,` 页`]})]})}),code:`const current = ref(6)

<Pagination
  current={current.value}
  total={500}
  showLessItems
  onChange={page => {
    current.value = page
  }}
  itemRender={(_, type, original) => {
    if (type === 'prev') {
      return <span className="font-medium">Previous</span>
    }
    if (type === 'next') {
      return <span className="font-medium">Next</span>
    }
    return original
  }}
/>

<Pagination total={8} defaultCurrent={1} hideOnSinglePage />`});a(()=>f(e,n,H))});let U=e(`h2`,n);o(n,U),m(U,`id`,`pagination-api`),o(U,d(`API`));let oe=c(`rue:component:anchor`);o(n,oe),s(()=>{let e=h(L,{rows:ae});a(()=>f(e,n,oe))});let W=e(`h2`,n);o(n,W),o(W,d(`FAQ`));let G=e(`div`,n);o(n,G),l(G,`space-y-4 text-sm leading-6`);let K=e(`div`,G);o(G,K);let q=e(`h3`,K);o(K,q),l(q,`mb-1 text-base font-semibold`),o(q,d(`什么时候用静态组合，什么时候用数据驱动？`));let J=e(`p`,K);o(K,J),l(J,`m-0 opacity-80`),o(J,d("当按钮结构、文案和链接完全由业务自定义时，用 `Pagination.Item` 静态组合更直接；只要你已经有 `total`、`current`、`pageSize` 这些分页信息，优先使用数据驱动模式，省去页码计算与边界处理。"));let Y=e(`div`,G);o(G,Y);let X=e(`h3`,Y);o(Y,X),l(X,`mb-1 text-base font-semibold`),o(X,d("`simple` 适合什么场景？"));let Z=e(`p`,Y);o(Y,Z),l(Z,`m-0 opacity-80`),o(Z,d("`simple` 适合工具栏、卡片头部、移动端等横向空间有限的区域；如果只想展示当前页而不允许直接输入， 可以传 `simple="));let se=g(Z);o(Z,se),s(()=>{p(se,{readOnly:!0})}),o(Z,d("`。"));let Q=e(`div`,G);o(G,Q);let ce=e(`h3`,Q);o(Q,ce),l(ce,`mb-1 text-base font-semibold`),o(ce,d(`切换每页条数时会触发哪些回调？`));let le=e(`p`,Q);o(Q,le),l(le,`m-0 opacity-80`),o(le,d("`onShowSizeChange` 专门用于处理页容量变更；为了保持外部状态同步，`onChange` 也会收到新的页码和 `pageSize`，所以受控场景通常同时兼容这两个回调。"));let $=e(`div`,G);o(G,$);let ue=e(`h3`,$);o($,ue),l(ue,`mb-1 text-base font-semibold`),o(ue,d(`如何把上一页、下一页改成业务文案？`));let de=e(`p`,$);return o($,de),l(de,`m-0 opacity-80`),o(de,d("轻量替换可以用 `itemRender` 改写 `prev`、`next`、`jump-prev`、`jump-next` 的内容；如果还要替换 aria/title 文案，可以继续传 `locale`。")),t})}),n,r),n})};export{R as default};