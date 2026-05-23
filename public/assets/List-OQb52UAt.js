import{$ as e,Et as t,G as n,H as r,K as i,Ot as a,Tt as o,W as s,_t as c,d as l,j as u,k as d,kt as f,l as p,q as m,t as h,tt as g,xt as _}from"./vapor-runtime-EUvELKQT.js";import{a as v,n as y}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as b,t as x}from"./src-BI4ToZNE.js";import{n as S}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as C}from"./Code-BdVklNCb.js";import{t as w}from"./tabs-Brdd3EMz.js";var T=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,E=e=>typeof e==`number`?`${e}px`:e,D=(e,t)=>e<=1?1:e>=t?t:e,O=e=>!!(e&&typeof e==`object`&&(e.type===`item`||e.type===`row`||e.cols||e.content!==void 0||e.normal!==void 0||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0)),k=e=>{if(e==null||typeof e==`boolean`||Array.isArray(e)||typeof e!=`object`)return e;for(let t of[`content`,`children`,`title`,`label`,`text`,`name`,`description`]){let n=e[t];if(n!=null)return n}try{return JSON.stringify(e)}catch{return String(e)}},A=e=>e==null||Array.isArray(e)&&e.length===0,j=e=>{switch(e){case`small`:case`sm`:return`text-sm`;case`large`:case`lg`:return`text-lg`;default:return}},M=e=>typeof e==`object`?{spinning:e.spinning!==!1,tip:e.tip,indicator:e.indicator}:{spinning:!!e},N=(e,t,n)=>typeof n==`function`?n(e,t):n&&e&&typeof e==`object`?e[n]:e&&typeof e==`object`&&e.key!=null?e.key:`list-item-${t}`,P=e=>{if(e)return e.xxxl??e.xxl??e.xl??e.lg??e.md??e.sm??e.xs??e.column},F=(e,t)=>{if(!e)return t;let n=P(e);return{...t,display:`grid`,gridTemplateColumns:n?`repeat(${n}, minmax(0, 1fr))`:void 0,gap:E(e.gutter)}},I=(e,t,n,r)=>{if(!e)return null;let i=typeof e==`object`?e:{},a=Math.max(1,i.pageSize??r??i.defaultPageSize??10),o=Math.max(1,Math.ceil((i.total??t)/a)),s=D(i.current??n??i.defaultCurrent??1,o);return{...i,current:s,pageSize:a,total:i.total??t,position:i.position??`bottom`,align:i.align??`end`}},L=e=>e?e.map((e,t)=>e.type===`grow`?x(V,{as:e.as,className:e.className,children:e.content},t):x(H,{as:e.as,className:e.className,children:e.content},t)):null,ee=(e,t)=>{let n=e.key??t;return(e.type??(e.cols||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0?`row`:`item`))===`item`?x(W,{className:e.className,children:e.content},n):e.title||e.description||e.avatar||e.actions||e.extra?b(W,{actions:e.actions,className:e.className,extra:e.extra,children:[x(U,{avatar:e.avatar,title:e.title,description:e.description,children:e.content}),L(e.cols)]},n):b(B,{normal:e.normal,className:e.className,children:[e.content,L(e.cols)]},n)},te=e=>e.spinning?b(`li`,{className:`flex min-h-24 items-center justify-center gap-3 p-6 text-sm opacity-70`,children:[e.indicator??x(`span`,{className:`loading loading-spinner loading-sm`}),e.tip?x(`span`,{children:e.tip}):null]}):null,ne=e=>x(`li`,{className:`p-8 text-center text-sm opacity-60`,children:e??`No data`}),R=(e,t)=>A(e)?null:x(`li`,{className:t,children:e}),re=(e,t,n=`li`)=>{if(!e)return null;let r=n,i=Math.max(1,Math.ceil(e.total/e.pageSize));if(e.hideOnSinglePage&&i<=1)return null;let a=Array.from({length:i},(e,t)=>t+1),o=e.total===0?0:(e.current-1)*e.pageSize+1,s=Math.min(e.current*e.pageSize,e.total);return b(r,{className:T(`flex flex-wrap items-center gap-3 p-3`,e.align===`start`?`justify-start`:e.align===`center`?`justify-center`:`justify-end`),children:[e.showTotal?x(`span`,{className:`mr-auto text-xs opacity-60`,children:e.showTotal(e.total,[o,s])}):null,b(`div`,{className:`join`,children:[x(`button`,{className:T(`join-item btn btn-sm`,e.current<=1&&`btn-disabled`),disabled:e.current<=1,onClick:()=>t(e.current-1),type:`button`,children:`Prev`}),a.map(n=>x(`button`,{className:T(`join-item btn btn-sm`,n===e.current&&`btn-active`),onClick:()=>t(n),type:`button`,children:n},n)),x(`button`,{className:T(`join-item btn btn-sm`,e.current>=i&&`btn-disabled`),disabled:e.current>=i,onClick:()=>t(e.current+1),type:`button`,children:`Next`})]})]})},z=({bordered:e,className:t,children:n,dataSource:r,emptyText:i,footer:s,grid:l,header:f,itemLayout:p=`horizontal`,items:m,loading:h,loadMore:g,locale:_,pagination:v,renderItem:y,rowKey:S,size:C,split:w=!0,style:E,...P})=>{let L=M(h),z=c(typeof v==`object`?v.defaultCurrent??v.current??1:1),B=c(typeof v==`object`?v.defaultPageSize??v.pageSize??10:10),V=o(),H=o(),U=o(),G=Array.isArray(r),K=G?r:m,q=!!v,J=`list`;e&&(J+=` border border-base-300 rounded-box overflow-hidden`),l&&(J+=` grid`),w||(J+=` list-no-split`),p===`vertical`&&(J+=` list-vertical`),J=T(J,j(C),t)??`list`;let Y=(e,t)=>e?.map((e,n)=>{let r=t?(t.current-1)*t.pageSize+n:n,i=N(e,r,S);return G&&y?y(e,r):O(e)?ee(e,r):x(W,{itemLayout:p,children:k(e)},i)}),X=()=>I(v,K?.length??0,z.value,B.value),ie=e=>!K||!e?K:K.slice((e.current-1)*e.pageSize,e.current*e.pageSize),Z=()=>{if(!q)return;let e=X(),t=L.spinning?te(L):K&&K.length===0?ne(_?.emptyText??i):Y(ie(e),e);V.current&&u(t??null,V.current),H.current&&u(e&&(e.position===`top`||e.position===`both`)?re(e,Q,`div`):null,H.current),U.current&&u(e&&(e.position===`bottom`||e.position===`both`)?re(e,Q,`div`):null,U.current)},Q=e=>{let t=X();if(!t)return;let n=D(e,Math.max(1,Math.ceil(t.total/t.pageSize)));typeof v==`object`&&v.current===void 0&&(z.value=n),B.value=t.pageSize,t.onChange&&t.onChange(n,t.pageSize),Z()};if(d(Z),a(()=>[z.value,B.value,K?.length,L.spinning],Z),q){let n=T(`rue-list`,e&&`border border-base-300 rounded-box overflow-hidden`,t),r=T(`list`,l&&`grid`,!w&&`list-no-split`,p===`vertical`&&`list-vertical`,j(C));return b(`div`,{...P,className:n,style:l?void 0:E,children:[x(`div`,{ref:H}),A(f)?null:x(`div`,{className:`p-4 pb-2 text-sm font-medium opacity-70`,children:f}),x(`ul`,{ref:V,className:r,style:F(l,l?E:void 0)}),A(s)?null:x(`div`,{className:`p-4 pt-2 text-sm opacity-70`,children:s}),A(g)?null:x(`div`,{className:`p-3 text-center`,children:g}),x(`div`,{ref:U})]})}return b(`ul`,{...P,className:J,style:F(l,E),children:[R(f,`p-4 pb-2 text-sm font-medium opacity-70`),L.spinning?te(L):null,!L.spinning&&K&&K.length===0?ne(_?.emptyText??i):null,!L.spinning&&K&&K.length>0&&Y(K,null),!G&&!m?n:null,R(s,`p-4 pt-2 text-sm opacity-70`),R(g,`p-3 text-center`)]})},B=({normal:e,className:t,children:n,...r})=>e?x(`li`,{...r,className:t||void 0,children:n}):x(`li`,{...r,className:T(`list-row`,t),children:n}),V=({as:e=`div`,className:t,children:n,...r})=>x(e,{...r,className:T(`list-col-grow`,t),children:n}),H=({as:e=`div`,className:t,children:n,...r})=>x(e,{...r,className:T(`list-col-wrap`,t),children:n}),U=({avatar:e,className:t,description:n,title:r,children:i,...a})=>b(`div`,{...a,className:T(`flex min-w-0 flex-1 items-start gap-3`,t),children:[e?x(`div`,{className:`shrink-0`,children:e}):null,b(`div`,{className:`min-w-0 flex-1`,children:[r?x(`div`,{className:`font-medium`,children:r}):null,n?x(`div`,{className:`text-sm opacity-70`,children:n}):null,i]})]}),W=({actions:e,className:t,classNames:n,extra:r,itemLayout:i=`horizontal`,styles:a,children:o,...s})=>{let c=!!e&&e.length>0,l=!A(r);if(!c&&!l)return x(`li`,{...s,className:t||void 0,children:o});let u=i===`vertical`;return b(`li`,{...s,className:T(`list-row`,u&&`items-start`,l&&!u&&`grid-cols-[1fr_auto]`,t),children:[b(`div`,{className:`min-w-0 flex-1`,children:[o,c?x(`ul`,{className:T(`mt-3 flex flex-wrap items-center gap-2 text-sm opacity-80`,n?.actions),style:a?.actions,children:e.map((e,t)=>x(`li`,{children:e},t))}):null]}),l?x(`div`,{className:T(`list-col-wrap`,n?.extra),style:a?.extra,children:r}):null]})},G=Object.assign(W,{Meta:U}),K=Object.assign(z,{Row:B,ColGrow:V,ColWrap:H,Item:G}),q=e=>l(t=>{let a=i(`div`,t);g(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=i(`div`,a);r(a,o),g(o,`flex flex-wrap items-start justify-between gap-3`);let c=i(`div`,o);r(o,c);let u=i(`h2`,c);r(c,u),g(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(u,m(`# `));let d=s(`rue:slot:anchor`);r(u,d),f(()=>{let t=e.title;_(()=>p(t,u,d))});let v=s(`rue:slot:anchor`);r(c,v),f(()=>{let t=e.summary?l(()=>{let t=n(),a=i(`p`,t);r(t,a),g(a,`m-0 text-sm opacity-70`);let o=s(`rue:slot:anchor`);return r(a,o),f(()=>{let t=e.summary;_(()=>p(t,a,o))}),t}):``;_(()=>p(t,c,v))});let y=s(`rue:component:anchor`);r(a,y),f(()=>{let t=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});_(()=>p(t,a,y))});let b=s(`rue:slot:anchor`);return r(a,b),f(()=>{let t=e.tab.value===`preview`?e.preview():l(()=>{let t=n(),i=s(`rue:component:anchor`);return r(t,i),f(()=>{let n=h(C,{className:`mt-2`,lang:`tsx`,code:e.code});_(()=>p(n,t,i))}),t});_(()=>p(t,a,b))}),a}),J=t=>l(a=>{let o=i(`div`,a);g(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=i(`table`,o);r(o,c),g(c,`table table-zebra`);let u=i(`thead`,c);r(c,u);let d=i(`tr`,u);r(u,d);let h=i(`th`,d);r(d,h),r(h,m(`属性`));let v=i(`th`,d);r(d,v),r(v,m(`说明`));let b=i(`th`,d);r(d,b),r(b,m(`类型`));let x=i(`th`,d);r(d,x),r(x,m(`默认值`));let S=i(`tbody`,c);r(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return f(()=>{T=y({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,a,o,c,u)=>{p(l(()=>{let a=n(),o=i(`tr`,a);r(a,o),f(()=>{e(o,`key`,String(t.prop))});let c=i(`td`,o);r(o,c);let l=i(`code`,c);r(c,l);let u=s(`rue:slot:anchor`);r(l,u),f(()=>{let e=t.prop;_(()=>p(e,l,u))});let d=i(`td`,o);r(o,d);let m=s(`rue:slot:anchor`);r(d,m),f(()=>{let e=t.description;_(()=>p(e,d,m))});let h=i(`td`,o);r(o,h);let g=i(`code`,h);r(h,g);let v=s(`rue:slot:anchor`);r(g,v),f(()=>{let e=t.type;_(()=>p(e,g,v))});let y=i(`td`,o);r(o,y);let b=i(`code`,y);r(y,b);let x=s(`rue:slot:anchor`);return r(b,x),f(()=>{let e=t.defaultValue;_(()=>p(e,b,x))}),a}),a,o)}})}),o}),Y=()=>l(t=>{let n=i(`svg`,t);g(n,`size-[1.2em]`),e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`);let a=i(`path`,n);return r(n,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`M6 3 20 12 6 21V3Z`),n}),X=()=>l(t=>{let n=i(`svg`,t);g(n,`size-[1.2em]`),e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`);let a=i(`path`,n);return r(n,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`),n}),ie=()=>l(t=>{let n=i(`svg`,t);g(n,`size-[1.2em]`),e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`);let a=i(`path`,n);return r(n,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`M12 12h.01M19 12h.01M5 12h.01`),n}),Z=t=>l(n=>{let r=i(`img`,n);return g(r,`size-10 rounded-box object-cover`),f(()=>{e(r,`src`,String(t.src))}),f(()=>{e(r,`alt`,String(t.alt))}),r}),Q=()=>l(t=>{let a=n(),o=i(`button`,a);r(a,o),g(o,`btn btn-square btn-ghost`),e(o,`type`,`button`),e(o,`aria-label`,`Play`);let c=s(`rue:component:anchor`);r(o,c),p(h(Y,{}),o,c);let l=i(`button`,a);r(a,l),g(l,`btn btn-square btn-ghost`),e(l,`type`,`button`),e(l,`aria-label`,`Favorite`);let u=s(`rue:component:anchor`);return r(l,u),p(h(X,{}),l,u),a}),$=[{id:`dio-lupa`,rank:`01`,artist:`Dio Lupa`,title:`Remaining Reason`,image:`https://img.daisyui.com/images/profile/demo/1@94.webp`,note:`Remaining Reason became an instant hit, praised for its haunting sound and emotional depth.`,duration:`3:42`,plays:`248K`},{id:`ellie-beilish`,rank:`02`,artist:`Ellie Beilish`,title:`Bears of a fever`,image:`https://img.daisyui.com/images/profile/demo/4@94.webp`,note:`Bears of a Fever pairs restless percussion with a chorus built for repeat plays.`,duration:`4:05`,plays:`221K`},{id:`sabrino-gardener`,rank:`03`,artist:`Sabrino Gardener`,title:`Cappuccino`,image:`https://img.daisyui.com/images/profile/demo/3@94.webp`,note:`Cappuccino keeps the melody smooth while the hook does the heavy lifting.`,duration:`2:58`,plays:`198K`},{id:`mira-lane`,rank:`04`,artist:`Mira Lane`,title:`Window Seat`,image:`https://img.daisyui.com/images/profile/demo/2@94.webp`,note:`Window Seat turns a late train ride into a tiny cinematic pop song.`,duration:`3:16`,plays:`166K`},{id:`noah-drift`,rank:`05`,artist:`Noah Drift`,title:`Low Tide Letters`,image:`https://img.daisyui.com/images/profile/demo/5@94.webp`,note:`Low Tide Letters is quiet, patient, and built around a warm guitar loop.`,duration:`3:37`,plays:`152K`}],ae=[{type:`item`,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,content:`Most played songs this week`},...$.slice(0,3).map(e=>({type:`row`,content:[x(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})})],cols:[{type:`grow`,content:b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]})}]}))],oe=[{type:`item`,content:x(`div`,{className:`px-4 pt-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`})},...$.slice(0,3).map(e=>({key:e.id,className:`px-4 py-3`,title:e.artist,description:`${e.title} \xb7 ${e.duration}`,extra:`${e.plays} plays`}))],se=[{prop:`children`,description:`直接传入自定义 li、List.Row、List.Item 等内容`,type:`any`,defaultValue:`-`},{prop:`items`,description:`兼容旧版 Rue 数据结构，支持 item、row、cols`,type:`ListDataItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据源驱动的数组入口，通常搭配 renderItem`,type:`any[]`,defaultValue:`-`},{prop:`renderItem`,description:`自定义 dataSource 中每一项的渲染内容`,type:`(item, index) => any`,defaultValue:`-`},{prop:`rowKey`,description:`列表项 key，可传字段名或函数`,type:`string | (item, index) => string | number`,defaultValue:`key`},{prop:`header / footer`,description:`列表头部和底部内容`,type:`any`,defaultValue:`-`},{prop:`loading`,description:`加载态，支持 boolean 或 { spinning, tip, indicator }`,type:`boolean | object`,defaultValue:`false`},{prop:`pagination`,description:`分页配置，支持 current、pageSize、position、align、showTotal`,type:`boolean | ListPaginationConfig | false`,defaultValue:`false`},{prop:`grid`,description:`网格列表配置，支持 column 与 gutter`,type:`{ column?: number; gutter?: number | string }`,defaultValue:`-`},{prop:`itemLayout`,description:`列表项布局语义，vertical 会让 extra/actions 更适合图文内容`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`bordered / split / size`,description:`边框、分割与尺寸控制`,type:`boolean / boolean / ListSize`,defaultValue:`false / true / default`},{prop:`List.Item`,description:`支持 actions、extra、classNames、styles，并包含 List.Item.Meta`,type:`compound component`,defaultValue:`-`}],ce=`import { List } from '@rue-js/design';

<List className="bg-base-100 rounded-box shadow-md">
  <List.Row normal className="p-4 pb-2 text-xs opacity-60 tracking-wide">
    Most played songs this week
  </List.Row>
  <List.Row>
    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
    <div>
      <div>Dio Lupa</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <button className="btn btn-square btn-ghost" type="button" aria-label="Play">
      <PlayIcon />
    </button>
    <button className="btn btn-square btn-ghost" type="button" aria-label="Favorite">
      <HeartIcon />
    </button>
  </List.Row>
</List>`,le=`<List className="bg-base-100 rounded-box shadow-md">
  <List.Row normal className="p-4 pb-2 text-xs opacity-60 tracking-wide">
    Most played songs this week
  </List.Row>
  <List.Row>
    <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
    <List.ColGrow>
      <div>Dio Lupa</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </List.ColGrow>
    <button className="btn btn-square btn-ghost" type="button" aria-label="Play">
      <PlayIcon />
    </button>
  </List.Row>
</List>`,ue=`const listItems = [
  {
    type: 'item',
    className: 'p-4 pb-2 text-xs opacity-60 tracking-wide',
    content: 'Most played songs this week',
  },
  ...songs.slice(0, 3).map(song => ({
    key: song.id,
    type: 'row',
    content: [
      <div className="text-4xl font-thin opacity-30 tabular-nums">{song.rank}</div>,
      <img className="size-10 rounded-box" src={song.image} alt={\`\${song.artist} cover\`} />,
    ],
    cols: [
      {
        type: 'grow',
        content: (
          <div>
            <div>{song.artist}</div>
            <div className="text-xs uppercase font-semibold opacity-60">{song.title}</div>
          </div>
        ),
      },
      {
        type: 'wrap',
        content: (
          <button className="btn btn-square btn-ghost" type="button" aria-label="Play">
            <PlayIcon />
          </button>
        ),
      },
    ],
  })),
];

<List className="bg-base-100 rounded-box shadow-md">
  {listItems.map((item, index) =>
    item.type === 'item' ? (
      <List.Item className={item.className} key={index}>{item.content}</List.Item>
    ) : (
      <List.Row key={index}>
        {item.content}
        {item.cols.map(col => <List.ColGrow>{col.content}</List.ColGrow>)}
      </List.Row>
    ),
  )}
</List>`,de=`const listItems = [
  {
    type: 'item',
    className: 'px-4 pt-4 pb-2 text-xs opacity-60 tracking-wide',
    content: 'Most played songs this week',
  },
  ...songs.slice(0, 3).map(song => ({
    key: song.id,
    className: 'px-4 py-3',
    title: song.artist,
    description: \`\${song.title} · \${song.duration}\`,
    extra: \`\${song.plays} plays\`,
  })),
];

<List items={listItems} className="bg-base-100 rounded-box shadow-md" />`,fe=`<List className="bg-base-100 rounded-box shadow-md">
  <List.Item className="p-4 pb-2 text-xs opacity-60 tracking-wide">
    Most played songs this week
  </List.Item>
  <List.Row>
    <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
    <div>
      <div>Dio Lupa</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <List.ColWrap as="p" className="text-xs">
      Remaining Reason became an instant hit, praised for its haunting sound and emotional depth.
    </List.ColWrap>
    <button className="btn btn-square btn-ghost" type="button" aria-label="More">
      <MoreIcon />
    </button>
  </List.Row>
</List>`,pe=`<List
  bordered
  header={<span>Release queue</span>}
  dataSource={songs}
  rowKey="id"
  renderItem={song => (
    <List.Item
      key={song.id}
      actions={[<a>Review</a>, <a>Publish</a>]}
      extra={<span className="badge badge-soft">{song.duration}</span>}
    >
      <List.Item.Meta
        avatar={<img className="size-10 rounded-box" src={song.image} />}
        title={song.artist}
        description={song.title}
      />
    </List.Item>
  )}
/>`,me=`<List itemLayout="vertical" className="bg-base-100 rounded-box shadow-md">
  <List.Item
    actions={[<button className="btn btn-xs">Share</button>, <button className="btn btn-xs btn-ghost">Save</button>]}
    extra={<div className="stats shadow"><div className="stat"><div className="stat-value text-sm">248K</div></div></div>}
  >
    <List.Item.Meta
      avatar={<img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />}
      title="Dio Lupa"
      description="Remaining Reason"
    />
    <p className="mt-3 text-sm opacity-70">A richer vertical item with actions and extra content.</p>
  </List.Item>
</List>`,he=`<List
  bordered
  dataSource={songs}
  rowKey="id"
  pagination={{
    defaultPageSize: 2,
    position: 'bottom',
    align: 'center',
    showTotal: (total, range) => \`\${range[0]}-\${range[1]} of \${total}\`,
  }}
                loadMore={
                  <div className="py-1">
                    <button className="btn btn-sm btn-outline" type="button">
                      Load more
                    </button>
                  </div>
                }
  renderItem={song => (
                  <List.Item key={song.id} className="px-4 py-3">
      <List.Item.Meta title={song.artist} description={song.title} />
    </List.Item>
  )}
/>`,ge=`<List
  grid={{ column: 3, gutter: 16 }}
  dataSource={songs.slice(0, 3)}
  rowKey="id"
  renderItem={song => (
    <List.Item key={song.id} className="rounded-box border border-base-300 bg-base-100 p-4">
      <List.Item.Meta
        avatar={<img className="size-10 rounded-box" src={song.image} />}
        title={song.artist}
        description={song.title}
      />
    </List.Item>
  )}
/>`,_e=`<div className="grid gap-4 md:grid-cols-2">
  <List bordered loading={{ spinning: true, tip: 'Loading tracks' }} />
  <List bordered dataSource={[]} locale={{ emptyText: 'No tracks yet' }} />
</div>`,ve=()=>{let{tabBasic:e,tabGrow:a,tabManualArray:o,tabInternalArray:u,tabWrap:d,tabDataSource:y,tabVertical:C,tabPagination:w,tabGrid:T,tabState:E}=v(`useSetup:0:0`,()=>t(()=>({tabBasic:v(`ref:1:0`,()=>c(`preview`)),tabGrow:v(`ref:1:1`,()=>c(`preview`)),tabManualArray:v(`ref:1:2`,()=>c(`preview`)),tabInternalArray:v(`ref:1:3`,()=>c(`preview`)),tabWrap:v(`ref:1:4`,()=>c(`preview`)),tabDataSource:v(`ref:1:5`,()=>c(`preview`)),tabVertical:v(`ref:1:6`,()=>c(`preview`)),tabPagination:v(`ref:1:7`,()=>c(`preview`)),tabGrid:v(`ref:1:8`,()=>c(`preview`)),tabState:v(`ref:1:9`,()=>c(`preview`))})));return l(t=>{let c=n(),v=s(`rue:component:anchor`);return r(c,v),p(h(S,{children:l(()=>{let t=n(),c=i(`div`,t);r(t,c),g(c,`max-w-none prose prose-sm md:prose-base`);let l=i(`h1`,c);r(c,l),r(l,m(`List 列表`));let v=i(`p`,c);r(c,v),g(v,`text-sm mt-3 mb-3`),r(v,m(`列表用于以行或网格的形式展示同类信息。Rue 的 List 保留 daisyUI 的轻量视觉，并补充 dataSource、renderItem、Meta、actions、extra、分页、加载和空态等能力。`));let S=s(`rue:component:anchor`);r(c,S),f(()=>{let t=h(q,{title:`List（第二列默认填充剩余空间）`,summary:`保留原始组合式写法，适合快速拼装一组紧凑行。`,tab:e,code:ce,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(K,{className:`bg-base-100 rounded-box shadow-md`,children:[x(K.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(K.Row,{children:[x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(Q,{})]},e.id))]})})});_(()=>p(t,c,S))});let D=s(`rue:component:anchor`);r(c,D),f(()=>{let e=h(q,{title:`List（第三列填充剩余空间）`,summary:`使用 List.ColGrow 显式控制哪一列占据剩余宽度。`,tab:a,code:le,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(K,{className:`bg-base-100 rounded-box shadow-md`,children:[x(K.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(K.Row,{children:[x(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(K.ColGrow,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(`button`,{className:`btn btn-square btn-ghost`,type:`button`,"aria-label":`Play`,children:x(Y,{})})]},e.id))]})})});_(()=>p(e,c,D))});let O=s(`rue:component:anchor`);r(c,O),f(()=>{let e=h(q,{title:`List 通过数据渲染（数组）`,summary:`保留旧 demo 的手动 map 方式，适合完全掌控每一行结构。`,tab:o,code:ue,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:x(K,{className:`bg-base-100 rounded-box shadow-md`,children:ae.map((e,t)=>e.type===`item`?x(K.Item,{className:e.className,children:e.content},t):b(K.Row,{children:[e.content,e.cols?.map((e,t)=>e.type===`grow`?x(K.ColGrow,{as:e.as,className:e.className,children:e.content},t):x(K.ColWrap,{as:e.as,className:e.className,children:e.content},t))]},t))})})});_(()=>p(e,c,O))});let k=s(`rue:component:anchor`);r(c,k),f(()=>{let e=h(q,{title:`List 通过数据渲染（数组，组件内部）`,summary:`items 仍然可用，适合用纯数据配置直接生成 Meta 与侧边信息。`,tab:u,code:de,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:x(K,{items:oe,className:`bg-base-100 rounded-box shadow-md`})})});_(()=>p(e,c,k))});let A=s(`rue:component:anchor`);r(c,A),f(()=>{let e=h(q,{title:`List（第三列换行至下一行）`,summary:`List.ColWrap 用于长文本、说明或次级信息换行展示。`,tab:d,code:fe,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(K,{className:`bg-base-100 rounded-box shadow-md`,children:[x(K.Item,{className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(K.Row,{children:[x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(K.ColWrap,{as:`p`,className:`text-xs`,children:e.note}),x(Q,{})]},e.id))]})})});_(()=>p(e,c,A))});let j=s(`rue:component:anchor`);r(c,j),f(()=>{let e=h(q,{title:`dataSource 与 renderItem`,summary:`新增数据源驱动的列表 API，适合业务列表统一从数据源渲染。`,tab:y,code:pe,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(K,{bordered:!0,header:x(`span`,{children:`Release queue`}),footer:x(`span`,{children:`Synced 2 minutes ago`}),dataSource:$.slice(0,4),rowKey:`id`,className:`bg-base-100 shadow-sm`,renderItem:e=>x(K.Item,{actions:[x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Review`}),x(`button`,{className:`btn btn-xs btn-primary`,type:`button`,children:`Publish`})],extra:x(`span`,{className:`badge badge-soft`,children:e.duration}),children:x(K.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title})},e.id)})})});_(()=>p(e,c,j))});let M=s(`rue:component:anchor`);r(c,M),f(()=>{let e=h(q,{title:`Meta、actions 与 extra`,summary:`List.Item.Meta 管标题、描述和头像，actions/extra 放操作与侧边内容。`,tab:C,code:me,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(K,{itemLayout:`vertical`,className:`bg-base-100 rounded-box shadow-md`,children:$.slice(0,2).map(e=>b(K.Item,{actions:[x(`button`,{className:`btn btn-xs`,type:`button`,children:`Share`}),x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Save`})],extra:x(`div`,{className:`stats bg-base-200 shadow-sm`,children:b(`div`,{className:`stat py-2 px-4`,children:[x(`div`,{className:`stat-title text-xs`,children:`Plays`}),x(`div`,{className:`stat-value text-sm`,children:e.plays})]})}),children:[x(K.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),x(`p`,{className:`mt-3 mb-0 text-sm opacity-70`,children:e.note})]},e.id))})})});_(()=>p(e,c,M))});let N=s(`rue:component:anchor`);r(c,N),f(()=>{let e=h(q,{title:`分页与加载更多`,summary:`pagination 内置简单分页；loadMore 可放在列表底部承载自定义加载动作。`,tab:w,code:he,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(K,{bordered:!0,className:`bg-base-100 shadow-sm`,dataSource:$,rowKey:`id`,loadMore:x(`div`,{className:`py-1`,children:x(`button`,{className:`btn btn-sm btn-outline`,type:`button`,children:`Load more`})}),pagination:{defaultPageSize:2,position:`bottom`,align:`center`,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e}`},renderItem:e=>x(K.Item,{className:`px-4 py-3`,children:x(K.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:`${e.title} \xb7 ${e.duration}`})},e.id)})})});_(()=>p(e,c,N))});let P=s(`rue:component:anchor`);r(c,P),f(()=>{let e=h(q,{title:`Grid 网格列表`,summary:`grid 提供 column/gutter，用于把同类条目排成卡片网格。`,tab:T,code:ge,preview:()=>x(`div`,{className:`w-full max-w-3xl`,children:x(K,{grid:{column:3,gutter:16},dataSource:$.slice(0,3),rowKey:`id`,renderItem:e=>b(K.Item,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,children:[x(K.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),b(`div`,{className:`mt-4 flex items-center justify-between text-xs opacity-70`,children:[b(`span`,{children:[e.plays,` plays`]}),x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,"aria-label":`More`,children:x(ie,{})})]})]},e.id)})})});_(()=>p(e,c,P))});let F=s(`rue:component:anchor`);r(c,F),f(()=>{let e=h(q,{title:`Loading 与 Empty`,summary:`空数据和加载中状态直接由 List 承接，便于异步列表先搭好骨架。`,tab:E,code:_e,preview:()=>b(`div`,{className:`grid w-full gap-4 md:grid-cols-2`,children:[x(K,{bordered:!0,loading:{spinning:!0,tip:`Loading tracks`},className:`bg-base-100 shadow-sm`}),x(K,{bordered:!0,dataSource:[],locale:{emptyText:`No tracks yet`},className:`bg-base-100 shadow-sm`})]})});_(()=>p(e,c,F))});let I=i(`h2`,c);r(c,I),r(I,m(`API`));let L=s(`rue:component:anchor`);return r(c,L),f(()=>{let e=h(J,{rows:se});_(()=>p(e,c,L))}),t})}),c,v),c})};export{ve as default};