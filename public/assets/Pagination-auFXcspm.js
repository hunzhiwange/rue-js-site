import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,d as c,dt as l,ht as u,l as d,mt as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,n as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as y,t as b}from"./src-BQwLQD8R.js";import{n as x}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as S}from"./Code-DQxnq0in.js";import{t as C}from"./tabs-DqfJzZfa.js";var w=(e,t)=>t?`${e} ${t}`:e,T=(...e)=>e.filter(Boolean).join(` `),E=(e,t,n)=>Math.min(Math.max(e,t),n),D=(e,t)=>{let n=Number(e);return!Number.isFinite(n)||n<=0?t:Math.floor(n)},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},k=e=>{switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}},A=e=>{let t=`join`;return e&&(t+=` join-${e}`),t},j=(e,t,n,r)=>{let i=O(e),a=`join-item btn`;return i&&(a+=` btn-${i}`),t&&(a+=` btn-active`),n&&(a+=` btn-disabled`),r&&(a+=` ${r}`),a},M=(e,t)=>{let n=O(e),r=`select select-bordered`;return n&&(r+=` select-${n}`),t&&(r+=` ${t}`),r},N=(e,t)=>{let n=O(e),r=`input input-bordered`;return n&&(r+=` input-${n}`),t&&(r+=` ${t}`),r},ee=(e,t)=>T(N(e),`appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,t),te=(e,t)=>{let n=String(Math.max(1,e)).length;return t===`simple`?n<=2?`w-10`:n===3?`w-12`:`w-14`:n<=2?`w-14`:n===3?`w-16`:`w-20`},ne=e=>{let t=e.reduce((e,t)=>Math.max(e,String(t).length),2);return t<=2?`w-16`:t===3?`w-18`:`w-20`},re=e=>e.current!==void 0||e.defaultCurrent!==void 0||e.total!==void 0||e.pageSize!==void 0||e.defaultPageSize!==void 0||e.simple!==void 0||e.showSizeChanger!==void 0||e.showQuickJumper!==void 0||e.showLessItems!==void 0||e.hideOnSinglePage!==void 0||e.showTotal!==void 0||e.itemRender!==void 0||e.align!==void 0||e.size!==void 0||e.disabled!==void 0||e.onChange!==void 0||e.onShowSizeChange!==void 0||e.pageSizeOptions!==void 0||e.locale!==void 0,ie=(e,t,n)=>n<=0?[0,0]:[(e-1)*t+1,Math.min(n,e*t)],ae=(e,t,n)=>{if(t<=0)return[];let r=[],i=n?1:2,a=n?3:5;if(t<=5+i*2){for(let e=1;e<=t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r}let o=Math.max(1,e-i),s=Math.min(t,e+i);if(r.push({type:`page`,page:1,label:`1`}),o>2)r.push({type:`jump-prev`,page:Math.max(1,e-a),label:`•••`});else for(let e=2;e<o;e+=1)r.push({type:`page`,page:e,label:String(e)});for(let e=Math.max(2,o);e<=Math.min(t-1,s);e+=1)r.push({type:`page`,page:e,label:String(e)});if(s<t-1)r.push({type:`jump-next`,page:Math.min(t,e+a),label:`•••`});else for(let e=s+1;e<t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r.push({type:`page`,page:t,label:String(t)}),r},P=Object.assign(({direction:e,align:t,size:n,className:r,children:i,current:a,defaultCurrent:o,total:s,pageSize:c,defaultPageSize:l,disabled:u,simple:d,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTitle:x=!0,showTotal:S,itemRender:C,onChange:j,onShowSizeChange:F,locale:I,...oe})=>{if(!re({direction:e,align:t,size:n,className:r,children:i,current:a,defaultCurrent:o,total:s,pageSize:c,defaultPageSize:l,disabled:u,simple:d,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTotal:S,itemRender:C,onChange:j,onShowSizeChange:F,locale:I}))return b(`div`,{...oe,className:w(A(e),r),children:i});let L=p(D(o??a??1,1)),R=p(D(l??c??10,10)),z=D(c??R.value,10),B=Math.max(0,Number(s)||0),V=Math.max(1,Math.ceil(B/z)),H=E(D(a??L.value,1),1,V),se=ie(H,z,B),U=h&&h.length>0?h.map(e=>D(e,z)):[10,20,50,100],W=typeof d==`object`?d:d?{}:void 0,G=typeof g==`object`&&g?g:g?{}:void 0,K=ae(H,V,_),q=f();if(!q.current){let e=String(H);q.current={page:H,simple:e,quick:e}}else if(q.current.page!==H){let e=String(H);q.current.page=H,q.current.simple=e,q.current.quick=e}let J=q.current,Y={prev:I?.prev??`‹`,next:I?.next??`›`,jumpPrev:I?.jumpPrev??`•••`,jumpNext:I?.jumpNext??`•••`,pageSuffix:I?.pageSuffix??`/ page`,itemsPerPage:I?.itemsPerPage??`items / page`,pageTitle:I?.pageTitle??(e=>`Page ${e}`),jumpTo:I?.jumpTo??`Go to`,previousPage:I?.previousPage??`Previous Page`,nextPage:I?.nextPage??`Next Page`,jumpPrevTitle:I?.jumpPrevTitle??`Jump Previous Pages`,jumpNextTitle:I?.jumpNextTitle??`Jump Next Pages`};if(v&&V<=1)return null;let X=(e,t=z)=>{let n=Math.max(1,Math.ceil(B/t)),r=E(D(e,1),1,n);a===void 0&&(L.value=r),c===void 0&&t!==z&&(R.value=t),j&&j(r,t)},ce=e=>{let t=D(e,z),n=E(H,1,Math.max(1,Math.ceil(B/t)));c===void 0&&(R.value=t),a===void 0&&(L.value=n),F&&F(n,t),j&&j(n,t)},Z=(e,t,r,i)=>{let a=!!u||!!i?.disabled,o=r,s=C?C(e,t,o):o;return b(P.Item,{size:n,active:i?.active,disabled:a,"aria-label":t===`page`?Y.pageTitle(e):void 0,title:x?i?.title??(t===`page`?Y.pageTitle(e):void 0):void 0,onClick:()=>{a||i?.active||X(e)},children:s})},le=W?y(`div`,{className:A(),children:[Z(Math.max(1,H-1),`prev`,Y.prev,{disabled:H<=1,title:Y.previousPage}),y(`div`,{className:N(n,`join-item inline-flex shrink-0 items-center gap-1 px-2 text-sm`),children:[W.readOnly?b(`span`,{className:`tabular-nums`,children:H}):b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(V),value:J.simple,disabled:u,className:T(`border-0 bg-transparent p-0 text-right outline-none appearance-none [appearance:textfield] tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,te(V,`simple`)),onInput:e=>{J.simple=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;X(Number(t.value))},onBlur:e=>{if(u)return;let t=e.currentTarget;if(t.value===``){t.value=String(H),J.simple=t.value;return}X(Number(t.value))}},`simple-${H}-${V}`),b(`span`,{className:`inline-flex items-center opacity-60`,children:Y.pageSuffix===`/ page`?`/ ${V}`:`${Y.pageSuffix} ${V}`})]}),Z(Math.min(V,H+1),`next`,Y.next,{disabled:H>=V,title:Y.nextPage})]}):y(`div`,{className:A(e),children:[Z(Math.max(1,H-1),`prev`,Y.prev,{disabled:H<=1,title:Y.previousPage}),K.map(e=>{let t=e.type===`jump-prev`?Y.jumpPrev:e.type===`jump-next`?Y.jumpNext:e.label;return Z(e.page,e.type,t,{active:e.type===`page`&&e.page===H,disabled:e.type===`page`?!1:!!u,title:e.type===`page`?Y.pageTitle(e.page):e.type===`jump-prev`?Y.jumpPrevTitle:Y.jumpNextTitle})}),Z(Math.min(V,H+1),`next`,Y.next,{disabled:H>=V,title:Y.nextPage})]});return y(`div`,{...oe,className:T(`flex flex-wrap items-center gap-3`,k(t),r),children:[S?b(`div`,{className:`text-sm opacity-70`,"aria-live":`polite`,children:S(B,se)}):null,le,m?y(`label`,{className:`flex items-center gap-2 text-sm opacity-80`,children:[b(`select`,{value:String(z),disabled:u,className:M(n,`${ne(U)} text-center tabular-nums`),onChange:e=>ce(Number(e.currentTarget.value)),children:U.map(e=>b(`option`,{value:String(e),children:e},e))}),b(`span`,{children:Y.itemsPerPage})]}):null,G?y(`div`,{className:`flex items-center gap-2 text-sm`,children:[b(`span`,{className:`opacity-70`,children:Y.jumpTo}),b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(V),value:J.quick,disabled:u,className:ee(n,`${te(V,`quick`)} text-center tabular-nums`),onInput:e=>{J.quick=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;X(Number(t.value))}},`quick-${H}-${V}`),G.goButton==null?null:b(`button`,{type:`button`,disabled:u,className:T(`btn`,O(n)?`btn-${O(n)}`:void 0),onClick:e=>{let t=e.currentTarget.parentElement?.querySelector(`input`);t&&X(Number(t.value))},children:G.goButton})]}):null]})},{Item:({tag:e=`button`,active:t,disabled:n,size:r,className:i,children:a,...o})=>{let s=e,c={...o,className:j(r,t,n,i)};return t&&(c[`aria-current`]=o[`aria-current`]??`page`),n&&(c[`aria-disabled`]=o[`aria-disabled`]??!0,e===`button`||e===`input`?c.disabled=o.disabled??!0:(c.role=o.role??`button`,c.tabIndex=o.tabIndex??-1)),b(s,{...c,children:a})}}),F=a=>{let{tabRef:s,tab:g}=_(`useSetup:0:0`,()=>u(()=>{let e=_(`useRef:1:0`,()=>f());return e.current||=_(`ref:1:1`,()=>p(`preview`)),{tabRef:e,tab:e.current}}));return c(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let p=r(`div`,f);i(f,p);let _=r(`h2`,p);i(p,_),n(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(_,o(`# `));let v=e(`rue:slot:anchor`);i(_,v),h(()=>{let e=a.title;l(()=>d(e,_,v))});let y=e(`rue:slot:anchor`);i(p,y),h(()=>{let o=a.summary?c(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return i(s,c),h(()=>{let e=a.summary;l(()=>d(e,s,c))}),o}):``;l(()=>d(o,p,y))});let b=e(`rue:component:anchor`);i(u,b),h(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:g.value,onChange:e=>g.value=e,className:`mb-3 mt-4`});l(()=>d(e,u,b))});let x=e(`rue:slot:anchor`);return i(u,x),h(()=>{let n=g.value===`preview`?a.preview():c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),h(()=>{let e=m(S,{className:`mt-2`,lang:`tsx`,code:a.code});l(()=>d(e,n,r))}),n});l(()=>d(n,u,x))}),u})},I=a=>c(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return h(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(c(()=>{let a=t(),o=r(`tr`,a);i(a,o),h(()=>{s(o,`key`,String(n.prop))});let c=r(`td`,o);i(o,c);let u=r(`code`,c);i(c,u);let f=e(`rue:slot:anchor`);i(u,f),h(()=>{let e=n.prop;l(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),h(()=>{let e=n.description;l(()=>d(e,p,m))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),h(()=>{let e=n.type;l(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),h(()=>{let e=n.defaultValue;l(()=>d(e,b,x))}),a}),a,o)}})}),f}),oe=[{prop:`current / defaultCurrent`,description:`受控或非受控的当前页码。`,type:`number`,defaultValue:`1`},{prop:`total`,description:`数据总条数；传入后自动计算页码按钮。`,type:`number`,defaultValue:`0`},{prop:`pageSize / defaultPageSize`,description:`每页条数，配合 total 共同决定总页数。`,type:`number`,defaultValue:`10`},{prop:`simple`,description:`切换为简洁模式；可传 { readOnly: true } 关闭中间输入。`,type:`boolean | { readOnly?: boolean }`,defaultValue:`false`},{prop:`showSizeChanger / pageSizeOptions`,description:`展示每页条数切换，并自定义可选项。`,type:`boolean / Array<number | string>`,defaultValue:`false / [10, 20, 50, 100]`},{prop:`showQuickJumper`,description:`展示快速跳页输入框；可传 { goButton } 自定义确认按钮。`,type:`boolean | { goButton?: any }`,defaultValue:`false`},{prop:`showTotal`,description:`自定义总数与区间文案。`,type:`(total: number, range: [number, number]) => any`,defaultValue:`-`},{prop:`itemRender`,description:`自定义页码、上一页、下一页、跳转项的渲染内容。`,type:`(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', original: any) => any`,defaultValue:`-`},{prop:`align / size / disabled`,description:`控制对齐、尺寸和禁用态。`,type:`'start' | 'center' | 'end' / 'xs' | 'sm' | 'md' | 'lg' | 'xl' / boolean`,defaultValue:`'start' / 'md' / false`},{prop:`showLessItems / hideOnSinglePage`,description:`控制页码折叠密度，以及单页时是否隐藏。`,type:`boolean`,defaultValue:`false`},{prop:`onChange / onShowSizeChange`,description:`页码变化、每页条数变化时的回调。`,type:`(page: number, pageSize: number) => void`,defaultValue:`-`}],L=()=>{let{stateRef:v,drivenPrimaryPage:S,drivenSecondaryPage:C,controlledPage:w,controlledPageSize:T,simplePage:E,simpleReadonlyPage:D,advancedPage:O,advancedPageSize:k,advancedCompactPage:A,advancedCompactPageSize:j,customPage:M}=_(`useSetup:0:0:dup1`,()=>u(()=>{let e=_(`useRef:1:2`,()=>f());return e.current||={drivenPrimaryPage:_(`ref:1:3`,()=>p(2)),drivenSecondaryPage:_(`ref:1:4`,()=>p(6)),controlledPage:_(`ref:1:5`,()=>p(4)),controlledPageSize:_(`ref:1:6`,()=>p(10)),simplePage:_(`ref:1:7`,()=>p(2)),simpleReadonlyPage:_(`ref:1:8`,()=>p(2)),advancedPage:_(`ref:1:9`,()=>p(3)),advancedPageSize:_(`ref:1:10`,()=>p(20)),advancedCompactPage:_(`ref:1:11`,()=>p(3)),advancedCompactPageSize:_(`ref:1:12`,()=>p(10)),customPage:_(`ref:1:13`,()=>p(6))},{stateRef:e,drivenPrimaryPage:e.current.drivenPrimaryPage,drivenSecondaryPage:e.current.drivenSecondaryPage,controlledPage:e.current.controlledPage,controlledPageSize:e.current.controlledPageSize,simplePage:e.current.simplePage,simpleReadonlyPage:e.current.simpleReadonlyPage,advancedPage:e.current.advancedPage,advancedPageSize:e.current.advancedPageSize,advancedCompactPage:e.current.advancedCompactPage,advancedCompactPageSize:e.current.advancedCompactPageSize,customPage:e.current.customPage}}));return c(u=>{let f=t(),p=e(`rue:component:anchor`);return i(f,p),d(m(x,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,u);i(u,f),i(f,o(`Pagination 分页`));let p=r(`p`,u);i(u,p),n(p,`text-sm mt-3 mb-3`),i(p,o(`Pagination 现在同时支持两类用法：保留原有的静态组合模式，以及更贴近业务组件习惯的 的数据驱动模式。 视觉仍基于 Rue 当前的 join 与 btn 体系，但补齐了页码计算、受控/非受控、简单模式、页容量切换、快捷跳转和自定义渲染。`));let _=r(`div`,u);i(u,_),n(_,`text-sm flex flex-wrap gap-4`);let v=r(`a`,_);i(_,v),s(v,`href`,`https://daisyui.com/components/pagination/`),s(v,`target`,`_blank`),i(v,o(`查看 Pagination 静态样式`));let x=r(`h2`,u);i(u,x),i(x,o(`何时使用`));let N=r(`ul`,u);i(u,N);let ee=r(`li`,N);i(N,ee),i(ee,o(`需要保留 Rue 现有 join + btn 分页视觉，但希望组件自己计算页码与跳转逻辑。`));let te=r(`li`,N);i(N,te),i(te,o(`需要受控/非受控分页、简单模式、页容量切换、快捷跳页等更完整的交互能力。`));let ne=r(`li`,N);i(N,ne),i(ne,o(`需要在静态拼装和数据驱动两种模式间切换，并逐步迁移旧用法。`));let re=r(`h2`,u);i(u,re),n(re,`mt-8`),i(re,o(`静态组合模式`));let ie=r(`p`,u);i(u,ie),n(ie,`text-sm opacity-80`),i(ie,o(`适合完全自定义节点结构的场景。以下示例保留原有 compound 用法，只补齐说明与可复制代码。`));let ae=e(`rue:component:anchor`);i(u,ae),h(()=>{let e=m(F,{title:`Basic pagination`,summary:`最基础的静态拼装方式，适合完全由业务侧决定按钮内容和顺序。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`w-fit`,"data-testid":`pagination-basic`,children:[b(P.Item,{"aria-label":`Previous page`,children:`«`}),b(P.Item,{children:`1`}),b(P.Item,{children:`2`}),b(P.Item,{children:`3`}),b(P.Item,{"aria-label":`Next page`,children:`»`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item aria-label="Previous page">«</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item aria-label="Next page">»</Pagination.Item>
</Pagination>`});l(()=>d(e,u,ae))});let L=e(`rue:component:anchor`);i(u,L),h(()=>{let e=m(F,{title:`Vertical pagination`,summary:"继续沿用 `direction='vertical'`，适合侧栏步骤、目录或分段导航。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{direction:`vertical`,className:`w-fit`,"data-testid":`pagination-vertical`,children:[b(P.Item,{children:`Overview`}),b(P.Item,{children:`Updates`}),b(P.Item,{children:`Logs`})]})})}),code:`<Pagination direction="vertical" className="w-fit">
  <Pagination.Item>Overview</Pagination.Item>
  <Pagination.Item>Updates</Pagination.Item>
  <Pagination.Item>Logs</Pagination.Item>
</Pagination>`});l(()=>d(e,u,L))});let R=e(`rue:component:anchor`);i(u,R),h(()=>{let e=m(F,{title:`Current and disabled items`,summary:"静态模式下仍可通过 `active`、`disabled` 和 `tag='a'` 控制语义与状态。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`w-fit`,"data-testid":`pagination-stateful`,children:[b(P.Item,{disabled:!0,children:`Prev`}),b(P.Item,{children:`1`}),b(P.Item,{active:!0,children:`2`}),b(P.Item,{children:`3`}),b(P.Item,{tag:`a`,href:`#next`,children:`Next`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item disabled>Prev</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item active>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item tag="a" href="#next">Next</Pagination.Item>
</Pagination>`});l(()=>d(e,u,R))});let z=e(`rue:component:anchor`);i(u,z),h(()=>{let e=m(F,{title:`Data driven basic`,summary:"传入 `total` 后由组件自动计算页码；这里改成受控版本，便于在设计页直接切换和观察当前页变化。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(P,{current:S.value,total:120,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:e=>{S.value=e}}),b(P,{current:C.value,total:500,size:`sm`,align:`center`,onChange:e=>{C.value=e}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：默认尺寸第 `,S.value,` 页，小尺寸第`,` `,C.value,` 页`]})]})}),code:`const primaryPage = ref(2)
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
</>`});l(()=>d(e,u,z))});let B=e(`rue:component:anchor`);i(u,B),h(()=>{let e=m(F,{title:`Controlled pagination`,summary:"通过 `current` 与 `pageSize` 接管状态，适合和表格、请求参数或 URL 查询同步。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(P,{current:w.value,pageSize:T.value,total:185,showSizeChanger:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`,onChange:(e,t)=>{w.value=e,T.value=t},onShowSizeChange:(e,t)=>{w.value=e,T.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前第 `,w.value,` 页，每页 `,T.value,` 条`]})]})}),code:`const current = ref(4)
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
/>`});l(()=>d(e,u,B))});let V=e(`rue:component:anchor`);i(u,V),h(()=>{let e=m(F,{title:`Simple mode`,summary:`简洁模式只保留上一页、页码输入和下一页，适合空间紧张的工具栏。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(P,{simple:!0,current:E.value,total:50,onChange:e=>{E.value=e}}),b(P,{simple:{readOnly:!0},current:D.value,total:50,onChange:e=>{D.value=e}}),b(P,{simple:!0,total:50,defaultCurrent:2,disabled:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：可输入第 `,E.value,` 页，只读第 `,D.value,` 页`]})]})}),code:`const simplePage = ref(2)
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
</>`});l(()=>d(e,u,V))});let H=e(`rue:component:anchor`);i(u,H),h(()=>{let e=m(F,{title:`Page size and quick jumper`,summary:`页容量切换与快捷跳页现在默认更紧凑，页数较少时输入框不会显得过宽。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(P,{current:O.value,pageSize:k.value,total:120,showSizeChanger:!0,pageSizeOptions:[10,20,50],showQuickJumper:{goButton:`Go`},showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:(e,t)=>{O.value=e,k.value=t},onShowSizeChange:(e,t)=>{O.value=e,k.value=t}}),b(P,{current:A.value,pageSize:j.value,total:500,size:`sm`,showSizeChanger:!0,showQuickJumper:!0,align:`end`,onChange:(e,t)=>{A.value=e,j.value=t},onShowSizeChange:(e,t)=>{A.value=e,j.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`紧凑版当前第 `,A.value,` 页，每页 `,j.value,` `,`条`]})]})}),code:`const current = ref(3)
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
</>`});l(()=>d(e,u,H))});let se=e(`rue:component:anchor`);i(u,se),h(()=>{let e=m(F,{title:`Custom item render`,summary:"通过 `itemRender` 重写上一页、下一页或跳转项文本，保留默认交互逻辑。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(P,{current:M.value,total:500,showLessItems:!0,onChange:e=>{M.value=e},itemRender:(e,t,n)=>t===`prev`?b(`span`,{className:`font-medium`,children:`Previous`}):t===`next`?b(`span`,{className:`font-medium`,children:`Next`}):n}),b(P,{total:8,defaultCurrent:1,hideOnSinglePage:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`自定义文案示例当前位于第 `,M.value,` 页`]})]})}),code:`const current = ref(6)

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

<Pagination total={8} defaultCurrent={1} hideOnSinglePage />`});l(()=>d(e,u,se))});let U=r(`h2`,u);i(u,U),s(U,`id`,`pagination-api`),i(U,o(`API`));let W=e(`rue:component:anchor`);i(u,W),h(()=>{let e=m(I,{rows:oe});l(()=>d(e,u,W))});let G=r(`h2`,u);i(u,G),i(G,o(`FAQ`));let K=r(`div`,u);i(u,K),n(K,`space-y-4 text-sm leading-6`);let q=r(`div`,K);i(K,q);let J=r(`h3`,q);i(q,J),n(J,`mb-1 text-base font-semibold`),i(J,o(`什么时候用静态组合，什么时候用数据驱动？`));let Y=r(`p`,q);i(q,Y),n(Y,`m-0 opacity-80`),i(Y,o("当按钮结构、文案和链接完全由业务自定义时，用 `Pagination.Item` 静态组合更直接；只要你已经有 `total`、`current`、`pageSize` 这些分页信息，优先使用数据驱动模式，省去页码计算与边界处理。"));let X=r(`div`,K);i(K,X);let ce=r(`h3`,X);i(X,ce),n(ce,`mb-1 text-base font-semibold`),i(ce,o("`simple` 适合什么场景？"));let Z=r(`p`,X);i(X,Z),n(Z,`m-0 opacity-80`),i(Z,o("`simple` 适合工具栏、卡片头部、移动端等横向空间有限的区域；如果只想展示当前页而不允许直接输入， 可以传 `simple="));let le=g(Z);i(Z,le),h(()=>{a(le,{readOnly:!0})}),i(Z,o("`。"));let Q=r(`div`,K);i(K,Q);let ue=r(`h3`,Q);i(Q,ue),n(ue,`mb-1 text-base font-semibold`),i(ue,o(`切换每页条数时会触发哪些回调？`));let de=r(`p`,Q);i(Q,de),n(de,`m-0 opacity-80`),i(de,o("`onShowSizeChange` 专门用于处理页容量变更；为了保持外部状态同步，`onChange` 也会收到新的页码和 `pageSize`，所以受控场景通常同时兼容这两个回调。"));let $=r(`div`,K);i(K,$);let fe=r(`h3`,$);i($,fe),n(fe,`mb-1 text-base font-semibold`),i(fe,o(`如何把上一页、下一页改成业务文案？`));let pe=r(`p`,$);return i($,pe),n(pe,`m-0 opacity-80`),i(pe,o("轻量替换可以用 `itemRender` 改写 `prev`、`next`、`jump-prev`、`jump-next` 的内容；如果还要替换 aria/title 文案，可以继续传 `locale`。")),c})}),f,p),f})};export{L as default};