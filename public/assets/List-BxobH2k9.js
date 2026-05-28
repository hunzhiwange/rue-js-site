import{$ as e,Gt as t,Jt as n,Kt as r,L as i,Lt as a,N as o,Q as s,Vt as c,Y as l,Yt as u,Z as d,ct as f,d as p,et as m,l as h,ot as g,t as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v,n as y}from"./vapor-helpers-vapor-DkadWylb.js";import{i as b,r as x}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as S}from"./tabs-DMHgT-aV.js";import{n as C}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as w}from"./Code-B_4lzH85.js";var T=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,E=e=>typeof e==`number`?`${e}px`:e,D=(e,t)=>e<=1?1:e>=t?t:e,O=e=>!!(e&&typeof e==`object`&&(e.type===`item`||e.type===`row`||e.cols||e.content!==void 0||e.normal!==void 0||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0)),k=e=>{if(e==null||typeof e==`boolean`||Array.isArray(e)||typeof e!=`object`)return e;for(let t of[`content`,`children`,`title`,`label`,`text`,`name`,`description`]){let n=e[t];if(n!=null)return n}try{return JSON.stringify(e)}catch{return String(e)}},A=e=>e==null||Array.isArray(e)&&e.length===0,j=e=>{switch(e){case`small`:case`sm`:return`text-sm`;case`large`:case`lg`:return`text-lg`;default:return}},M=e=>typeof e==`object`?{spinning:e.spinning!==!1,tip:e.tip,indicator:e.indicator}:{spinning:!!e},N=(e,t,n)=>typeof n==`function`?n(e,t):n&&e&&typeof e==`object`?e[n]:e&&typeof e==`object`&&e.key!=null?e.key:`list-item-${t}`,P=e=>{if(e)return e.xxxl??e.xxl??e.xl??e.lg??e.md??e.sm??e.xs??e.column},F=(e,t)=>{if(!e)return t;let n=P(e);return{...t,display:`grid`,gridTemplateColumns:n?`repeat(${n}, minmax(0, 1fr))`:void 0,gap:E(e.gutter)}},I=(e,t,n,r)=>{if(!e)return null;let i=typeof e==`object`?e:{},a=Math.max(1,i.pageSize??r??i.defaultPageSize??10),o=Math.max(1,Math.ceil((i.total??t)/a)),s=D(i.current??n??i.defaultCurrent??1,o);return{...i,current:s,pageSize:a,total:i.total??t,position:i.position??`bottom`,align:i.align??`end`}},L=e=>e?e.map((e,t)=>e.type===`grow`?x(V,{as:e.as,className:e.className,children:e.content},t):x(H,{as:e.as,className:e.className,children:e.content},t)):null,ee=(e,t)=>{let n=e.key??t;return(e.type??(e.cols||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0?`row`:`item`))===`item`?x(W,{className:e.className,children:e.content},n):e.title||e.description||e.avatar||e.actions||e.extra?b(W,{actions:e.actions,className:e.className,extra:e.extra,children:[x(U,{avatar:e.avatar,title:e.title,description:e.description,children:e.content}),L(e.cols)]},n):b(B,{normal:e.normal,className:e.className,children:[e.content,L(e.cols)]},n)},te=e=>e.spinning?b(`li`,{className:`flex min-h-24 items-center justify-center gap-3 p-6 text-sm opacity-70`,children:[e.indicator??x(`span`,{className:`loading loading-spinner loading-sm`}),e.tip?x(`span`,{children:e.tip}):null]}):null,ne=e=>x(`li`,{className:`p-8 text-center text-sm opacity-60`,children:e??`No data`}),R=(e,t)=>A(e)?null:x(`li`,{className:t,children:e}),re=(e,t,n=`li`)=>{if(!e)return null;let r=n,i=Math.max(1,Math.ceil(e.total/e.pageSize));if(e.hideOnSinglePage&&i<=1)return null;let a=Array.from({length:i},(e,t)=>t+1),o=e.total===0?0:(e.current-1)*e.pageSize+1,s=Math.min(e.current*e.pageSize,e.total);return b(r,{className:T(`flex flex-wrap items-center gap-3 p-3`,e.align===`start`?`justify-start`:e.align===`center`?`justify-center`:`justify-end`),children:[e.showTotal?x(`span`,{className:`mr-auto text-xs opacity-60`,children:e.showTotal(e.total,[o,s])}):null,b(`div`,{className:`join`,children:[x(`button`,{className:T(`join-item btn btn-sm`,e.current<=1&&`btn-disabled`),disabled:e.current<=1,onClick:()=>t(e.current-1),type:`button`,children:`Prev`}),a.map(n=>x(`button`,{className:T(`join-item btn btn-sm`,n===e.current&&`btn-active`),onClick:()=>t(n),type:`button`,children:n},n)),x(`button`,{className:T(`join-item btn btn-sm`,e.current>=i&&`btn-disabled`),disabled:e.current>=i,onClick:()=>t(e.current+1),type:`button`,children:`Next`})]})]})},z=({bordered:e,className:r,children:s,dataSource:c,emptyText:l,footer:u,grid:d,header:f,itemLayout:p=`horizontal`,items:m,loading:h,loadMore:g,locale:_,pagination:v,renderItem:y,rowKey:S,size:C,split:w=!0,style:E,...P})=>{let L=M(h),z=a(typeof v==`object`?v.defaultCurrent??v.current??1:1),B=a(typeof v==`object`?v.defaultPageSize??v.pageSize??10:10),V=t(),H=t(),U=t(),G=Array.isArray(c),K=G?c:m,q=!!v,J=`list`;e&&(J+=` border border-base-300 rounded-box overflow-hidden`),d&&(J+=` grid`),w||(J+=` list-no-split`),p===`vertical`&&(J+=` list-vertical`),J=T(J,j(C),r)??`list`;let Y=(e,t)=>e?.map((e,n)=>{let r=t?(t.current-1)*t.pageSize+n:n,i=N(e,r,S);return G&&y?y(e,r):O(e)?ee(e,r):x(W,{itemLayout:p,children:k(e)},i)}),X=()=>I(v,K?.length??0,z.value,B.value),ie=e=>!K||!e?K:K.slice((e.current-1)*e.pageSize,e.current*e.pageSize),Z=()=>{if(!q)return;let e=X(),t=L.spinning?te(L):K&&K.length===0?ne(_?.emptyText??l):Y(ie(e),e);V.current&&i(t??null,V.current),H.current&&i(e&&(e.position===`top`||e.position===`both`)?re(e,Q,`div`):null,H.current),U.current&&i(e&&(e.position===`bottom`||e.position===`both`)?re(e,Q,`div`):null,U.current)},Q=e=>{let t=X();if(!t)return;let n=D(e,Math.max(1,Math.ceil(t.total/t.pageSize)));typeof v==`object`&&v.current===void 0&&(z.value=n),B.value=t.pageSize,t.onChange&&t.onChange(n,t.pageSize),Z()};if(o(Z),n(()=>[z.value,B.value,K?.length,L.spinning],Z),q){let t=T(`rue-list`,e&&`border border-base-300 rounded-box overflow-hidden`,r),n=T(`list`,d&&`grid`,!w&&`list-no-split`,p===`vertical`&&`list-vertical`,j(C));return b(`div`,{...P,className:t,style:d?void 0:E,children:[x(`div`,{ref:H}),A(f)?null:x(`div`,{className:`p-4 pb-2 text-sm font-medium opacity-70`,children:f}),x(`ul`,{ref:V,className:n,style:F(d,d?E:void 0)}),A(u)?null:x(`div`,{className:`p-4 pt-2 text-sm opacity-70`,children:u}),A(g)?null:x(`div`,{className:`p-3 text-center`,children:g}),x(`div`,{ref:U})]})}return b(`ul`,{...P,className:J,style:F(d,E),children:[R(f,`p-4 pb-2 text-sm font-medium opacity-70`),L.spinning?te(L):null,!L.spinning&&K&&K.length===0?ne(_?.emptyText??l):null,!L.spinning&&K&&K.length>0&&Y(K,null),!G&&!m?s:null,R(u,`p-4 pt-2 text-sm opacity-70`),R(g,`p-3 text-center`)]})},B=({normal:e,className:t,children:n,...r})=>e?x(`li`,{...r,className:t||void 0,children:n}):x(`li`,{...r,className:T(`list-row`,t),children:n}),V=({as:e=`div`,className:t,children:n,...r})=>x(e,{...r,className:T(`list-col-grow`,t),children:n}),H=({as:e=`div`,className:t,children:n,...r})=>x(e,{...r,className:T(`list-col-wrap`,t),children:n}),U=({avatar:e,className:t,description:n,title:r,children:i,...a})=>b(`div`,{...a,className:T(`flex min-w-0 flex-1 items-start gap-3`,t),children:[e?x(`div`,{className:`shrink-0`,children:e}):null,b(`div`,{className:`min-w-0 flex-1`,children:[r?x(`div`,{className:`font-medium`,children:r}):null,n?x(`div`,{className:`text-sm opacity-70`,children:n}):null,i]})]}),W=({actions:e,className:t,classNames:n,extra:r,itemLayout:i=`horizontal`,styles:a,children:o,...s})=>{let c=!!e&&e.length>0,l=!A(r);if(!c&&!l)return x(`li`,{...s,className:t||void 0,children:o});let u=i===`vertical`;return b(`li`,{...s,className:T(`list-row`,u&&`items-start`,l&&!u&&`grid-cols-[1fr_auto]`,t),children:[b(`div`,{className:`min-w-0 flex-1`,children:[o,c?x(`ul`,{className:T(`mt-3 flex flex-wrap items-center gap-2 text-sm opacity-80`,n?.actions),style:a?.actions,children:e.map((e,t)=>x(`li`,{children:e},t))}):null]}),l?x(`div`,{className:T(`list-col-wrap`,n?.extra),style:a?.extra,children:r}):null]})},G=Object.assign(W,{Meta:U}),K=Object.assign(z,{Row:B,ColGrow:V,ColWrap:H,Item:G}),q=t=>p(n=>{let r=e(`div`,n);f(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let i=e(`div`,r);l(r,i),f(i,`flex flex-wrap items-start justify-between gap-3`);let a=e(`div`,i);l(i,a);let o=e(`h2`,a);l(a,o),f(o,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(o,m(`# `));let g=d(`rue:slot:anchor`);l(o,g),u(()=>{let e=t.title;c(()=>h(e,o,g))});let v=d(`rue:slot:anchor`);l(a,v),u(()=>{let n=t.summary?p(()=>{let n=s(),r=e(`p`,n);l(n,r),f(r,`m-0 text-sm opacity-70`);let i=d(`rue:slot:anchor`);return l(r,i),u(()=>{let e=t.summary;c(()=>h(e,r,i))}),n}):``;c(()=>h(n,a,v))});let y=d(`rue:component:anchor`);l(r,y),u(()=>{let e=_(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});c(()=>h(e,r,y))});let b=d(`rue:slot:anchor`);return l(r,b),u(()=>{let e=t.tab.value===`preview`?t.preview():p(()=>{let e=s(),n=d(`rue:component:anchor`);return l(e,n),u(()=>{let r=_(w,{className:`mt-2`,lang:`tsx`,code:t.code});c(()=>h(r,e,n))}),e});c(()=>h(e,r,b))}),r}),J=t=>p(n=>{let r=e(`div`,n);f(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);l(r,i),f(i,`table table-zebra`);let a=e(`thead`,i);l(i,a);let o=e(`tr`,a);l(a,o);let _=e(`th`,o);l(o,_),l(_,m(`属性`));let v=e(`th`,o);l(o,v),l(v,m(`说明`));let b=e(`th`,o);l(o,b),l(b,m(`类型`));let x=e(`th`,o);l(o,x),l(x,m(`默认值`));let S=e(`tbody`,i);l(i,S);let C=d(`rue:list:start`),w=d(`rue:list:end`);l(S,C),l(S,w);let T=new Map;return u(()=>{T=y({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,a)=>{h(p(()=>{let n=s(),r=e(`tr`,n);l(n,r),u(()=>{g(r,`key`,String(t.prop))});let i=e(`td`,r);l(r,i);let a=e(`code`,i);l(i,a);let o=d(`rue:slot:anchor`);l(a,o),u(()=>{let e=t.prop;c(()=>h(e,a,o))});let f=e(`td`,r);l(r,f);let p=d(`rue:slot:anchor`);l(f,p),u(()=>{let e=t.description;c(()=>h(e,f,p))});let m=e(`td`,r);l(r,m);let _=e(`code`,m);l(m,_);let v=d(`rue:slot:anchor`);l(_,v),u(()=>{let e=t.type;c(()=>h(e,_,v))});let y=e(`td`,r);l(r,y);let b=e(`code`,y);l(y,b);let x=d(`rue:slot:anchor`);return l(b,x),u(()=>{let e=t.defaultValue;c(()=>h(e,b,x))}),n}),n,r)}})}),r}),Y=()=>p(t=>{let n=e(`svg`,t);f(n,`size-[1.2em]`),g(n,`xmlns`,`http://www.w3.org/2000/svg`),g(n,`viewBox`,`0 0 24 24`),g(n,`fill`,`none`),g(n,`stroke`,`currentColor`),g(n,`strokeWidth`,`2`);let r=e(`path`,n);return l(n,r),g(r,`strokeLinecap`,`round`),g(r,`strokeLinejoin`,`round`),g(r,`d`,`M6 3 20 12 6 21V3Z`),n}),X=()=>p(t=>{let n=e(`svg`,t);f(n,`size-[1.2em]`),g(n,`xmlns`,`http://www.w3.org/2000/svg`),g(n,`viewBox`,`0 0 24 24`),g(n,`fill`,`none`),g(n,`stroke`,`currentColor`),g(n,`strokeWidth`,`2`);let r=e(`path`,n);return l(n,r),g(r,`strokeLinecap`,`round`),g(r,`strokeLinejoin`,`round`),g(r,`d`,`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`),n}),ie=()=>p(t=>{let n=e(`svg`,t);f(n,`size-[1.2em]`),g(n,`xmlns`,`http://www.w3.org/2000/svg`),g(n,`viewBox`,`0 0 24 24`),g(n,`fill`,`none`),g(n,`stroke`,`currentColor`),g(n,`strokeWidth`,`2`);let r=e(`path`,n);return l(n,r),g(r,`strokeLinecap`,`round`),g(r,`strokeLinejoin`,`round`),g(r,`d`,`M12 12h.01M19 12h.01M5 12h.01`),n}),Z=t=>p(n=>{let r=e(`img`,n);return f(r,`size-10 rounded-box object-cover`),u(()=>{g(r,`src`,String(t.src))}),u(()=>{g(r,`alt`,String(t.alt))}),r}),Q=()=>p(t=>{let n=s(),r=e(`button`,n);l(n,r),f(r,`btn btn-square btn-ghost`),g(r,`type`,`button`),g(r,`aria-label`,`Play`);let i=d(`rue:component:anchor`);l(r,i),h(_(Y,{}),r,i);let a=e(`button`,n);l(n,a),f(a,`btn btn-square btn-ghost`),g(a,`type`,`button`),g(a,`aria-label`,`Favorite`);let o=d(`rue:component:anchor`);return l(a,o),h(_(X,{}),a,o),n}),$=[{id:`dio-lupa`,rank:`01`,artist:`Dio Lupa`,title:`Remaining Reason`,image:`https://img.daisyui.com/images/profile/demo/1@94.webp`,note:`Remaining Reason became an instant hit, praised for its haunting sound and emotional depth.`,duration:`3:42`,plays:`248K`},{id:`ellie-beilish`,rank:`02`,artist:`Ellie Beilish`,title:`Bears of a fever`,image:`https://img.daisyui.com/images/profile/demo/4@94.webp`,note:`Bears of a Fever pairs restless percussion with a chorus built for repeat plays.`,duration:`4:05`,plays:`221K`},{id:`sabrino-gardener`,rank:`03`,artist:`Sabrino Gardener`,title:`Cappuccino`,image:`https://img.daisyui.com/images/profile/demo/3@94.webp`,note:`Cappuccino keeps the melody smooth while the hook does the heavy lifting.`,duration:`2:58`,plays:`198K`},{id:`mira-lane`,rank:`04`,artist:`Mira Lane`,title:`Window Seat`,image:`https://img.daisyui.com/images/profile/demo/2@94.webp`,note:`Window Seat turns a late train ride into a tiny cinematic pop song.`,duration:`3:16`,plays:`166K`},{id:`noah-drift`,rank:`05`,artist:`Noah Drift`,title:`Low Tide Letters`,image:`https://img.daisyui.com/images/profile/demo/5@94.webp`,note:`Low Tide Letters is quiet, patient, and built around a warm guitar loop.`,duration:`3:37`,plays:`152K`}],ae=[{type:`item`,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,content:`Most played songs this week`},...$.slice(0,3).map(e=>({type:`row`,content:[x(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})})],cols:[{type:`grow`,content:b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]})}]}))],oe=[{type:`item`,content:x(`div`,{className:`px-4 pt-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`})},...$.slice(0,3).map(e=>({key:e.id,className:`px-4 py-3`,title:e.artist,description:`${e.title} \xb7 ${e.duration}`,extra:`${e.plays} plays`}))],se=[{prop:`children`,description:`直接传入自定义 li、List.Row、List.Item 等内容`,type:`any`,defaultValue:`-`},{prop:`items`,description:`兼容旧版 Rue 数据结构，支持 item、row、cols`,type:`ListDataItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据源驱动的数组入口，通常搭配 renderItem`,type:`any[]`,defaultValue:`-`},{prop:`renderItem`,description:`自定义 dataSource 中每一项的渲染内容`,type:`(item, index) => any`,defaultValue:`-`},{prop:`rowKey`,description:`列表项 key，可传字段名或函数`,type:`string | (item, index) => string | number`,defaultValue:`key`},{prop:`header / footer`,description:`列表头部和底部内容`,type:`any`,defaultValue:`-`},{prop:`loading`,description:`加载态，支持 boolean 或 { spinning, tip, indicator }`,type:`boolean | object`,defaultValue:`false`},{prop:`pagination`,description:`分页配置，支持 current、pageSize、position、align、showTotal`,type:`boolean | ListPaginationConfig | false`,defaultValue:`false`},{prop:`grid`,description:`网格列表配置，支持 column 与 gutter`,type:`{ column?: number; gutter?: number | string }`,defaultValue:`-`},{prop:`itemLayout`,description:`列表项布局语义，vertical 会让 extra/actions 更适合图文内容`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`bordered / split / size`,description:`边框、分割与尺寸控制`,type:`boolean / boolean / ListSize`,defaultValue:`false / true / default`},{prop:`List.Item`,description:`支持 actions、extra、classNames、styles，并包含 List.Item.Meta`,type:`compound component`,defaultValue:`-`}],ce=`import { List } from '@rue-js/design';

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
</div>`,ve=()=>{let{tabBasic:t,tabGrow:n,tabManualArray:i,tabInternalArray:o,tabWrap:g,tabDataSource:y,tabVertical:S,tabPagination:w,tabGrid:T,tabState:E}=v(`useSetup:0:0`,()=>r(()=>({tabBasic:v(`ref:1:0`,()=>a(`preview`)),tabGrow:v(`ref:1:1`,()=>a(`preview`)),tabManualArray:v(`ref:1:2`,()=>a(`preview`)),tabInternalArray:v(`ref:1:3`,()=>a(`preview`)),tabWrap:v(`ref:1:4`,()=>a(`preview`)),tabDataSource:v(`ref:1:5`,()=>a(`preview`)),tabVertical:v(`ref:1:6`,()=>a(`preview`)),tabPagination:v(`ref:1:7`,()=>a(`preview`)),tabGrid:v(`ref:1:8`,()=>a(`preview`)),tabState:v(`ref:1:9`,()=>a(`preview`))})));return p(r=>{let a=s(),v=d(`rue:component:anchor`);return l(a,v),h(_(C,{children:p(()=>{let r=s(),a=e(`div`,r);l(r,a),f(a,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,a);l(a,p),l(p,m(`List 列表`));let v=e(`p`,a);l(a,v),f(v,`text-sm mt-3 mb-3`),l(v,m(`列表用于以行或网格的形式展示同类信息。Rue 的 List 保留 daisyUI 的轻量视觉，并补充 dataSource、renderItem、Meta、actions、extra、分页、加载和空态等能力。`));let C=d(`rue:component:anchor`);l(a,C),u(()=>{let e=_(q,{title:`List（第二列默认填充剩余空间）`,summary:`保留原始组合式写法，适合快速拼装一组紧凑行。`,tab:t,code:ce,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(K,{className:`bg-base-100 rounded-box shadow-md`,children:[x(K.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(K.Row,{children:[x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(Q,{})]},e.id))]})})});c(()=>h(e,a,C))});let D=d(`rue:component:anchor`);l(a,D),u(()=>{let e=_(q,{title:`List（第三列填充剩余空间）`,summary:`使用 List.ColGrow 显式控制哪一列占据剩余宽度。`,tab:n,code:le,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(K,{className:`bg-base-100 rounded-box shadow-md`,children:[x(K.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(K.Row,{children:[x(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(K.ColGrow,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(`button`,{className:`btn btn-square btn-ghost`,type:`button`,"aria-label":`Play`,children:x(Y,{})})]},e.id))]})})});c(()=>h(e,a,D))});let O=d(`rue:component:anchor`);l(a,O),u(()=>{let e=_(q,{title:`List 通过数据渲染（数组）`,summary:`保留旧 demo 的手动 map 方式，适合完全掌控每一行结构。`,tab:i,code:ue,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:x(K,{className:`bg-base-100 rounded-box shadow-md`,children:ae.map((e,t)=>e.type===`item`?x(K.Item,{className:e.className,children:e.content},t):b(K.Row,{children:[e.content,e.cols?.map((e,t)=>e.type===`grow`?x(K.ColGrow,{as:e.as,className:e.className,children:e.content},t):x(K.ColWrap,{as:e.as,className:e.className,children:e.content},t))]},t))})})});c(()=>h(e,a,O))});let k=d(`rue:component:anchor`);l(a,k),u(()=>{let e=_(q,{title:`List 通过数据渲染（数组，组件内部）`,summary:`items 仍然可用，适合用纯数据配置直接生成 Meta 与侧边信息。`,tab:o,code:de,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:x(K,{items:oe,className:`bg-base-100 rounded-box shadow-md`})})});c(()=>h(e,a,k))});let A=d(`rue:component:anchor`);l(a,A),u(()=>{let e=_(q,{title:`List（第三列换行至下一行）`,summary:`List.ColWrap 用于长文本、说明或次级信息换行展示。`,tab:g,code:fe,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(K,{className:`bg-base-100 rounded-box shadow-md`,children:[x(K.Item,{className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(K.Row,{children:[x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(K.ColWrap,{as:`p`,className:`text-xs`,children:e.note}),x(Q,{})]},e.id))]})})});c(()=>h(e,a,A))});let j=d(`rue:component:anchor`);l(a,j),u(()=>{let e=_(q,{title:`dataSource 与 renderItem`,summary:`新增数据源驱动的列表 API，适合业务列表统一从数据源渲染。`,tab:y,code:pe,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(K,{bordered:!0,header:x(`span`,{children:`Release queue`}),footer:x(`span`,{children:`Synced 2 minutes ago`}),dataSource:$.slice(0,4),rowKey:`id`,className:`bg-base-100 shadow-sm`,renderItem:e=>x(K.Item,{actions:[x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Review`}),x(`button`,{className:`btn btn-xs btn-primary`,type:`button`,children:`Publish`})],extra:x(`span`,{className:`badge badge-soft`,children:e.duration}),children:x(K.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title})},e.id)})})});c(()=>h(e,a,j))});let M=d(`rue:component:anchor`);l(a,M),u(()=>{let e=_(q,{title:`Meta、actions 与 extra`,summary:`List.Item.Meta 管标题、描述和头像，actions/extra 放操作与侧边内容。`,tab:S,code:me,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(K,{itemLayout:`vertical`,className:`bg-base-100 rounded-box shadow-md`,children:$.slice(0,2).map(e=>b(K.Item,{actions:[x(`button`,{className:`btn btn-xs`,type:`button`,children:`Share`}),x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Save`})],extra:x(`div`,{className:`stats bg-base-200 shadow-sm`,children:b(`div`,{className:`stat py-2 px-4`,children:[x(`div`,{className:`stat-title text-xs`,children:`Plays`}),x(`div`,{className:`stat-value text-sm`,children:e.plays})]})}),children:[x(K.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),x(`p`,{className:`mt-3 mb-0 text-sm opacity-70`,children:e.note})]},e.id))})})});c(()=>h(e,a,M))});let N=d(`rue:component:anchor`);l(a,N),u(()=>{let e=_(q,{title:`分页与加载更多`,summary:`pagination 内置简单分页；loadMore 可放在列表底部承载自定义加载动作。`,tab:w,code:he,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(K,{bordered:!0,className:`bg-base-100 shadow-sm`,dataSource:$,rowKey:`id`,loadMore:x(`div`,{className:`py-1`,children:x(`button`,{className:`btn btn-sm btn-outline`,type:`button`,children:`Load more`})}),pagination:{defaultPageSize:2,position:`bottom`,align:`center`,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e}`},renderItem:e=>x(K.Item,{className:`px-4 py-3`,children:x(K.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:`${e.title} \xb7 ${e.duration}`})},e.id)})})});c(()=>h(e,a,N))});let P=d(`rue:component:anchor`);l(a,P),u(()=>{let e=_(q,{title:`Grid 网格列表`,summary:`grid 提供 column/gutter，用于把同类条目排成卡片网格。`,tab:T,code:ge,preview:()=>x(`div`,{className:`w-full max-w-3xl`,children:x(K,{grid:{column:3,gutter:16},dataSource:$.slice(0,3),rowKey:`id`,renderItem:e=>b(K.Item,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,children:[x(K.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),b(`div`,{className:`mt-4 flex items-center justify-between text-xs opacity-70`,children:[b(`span`,{children:[e.plays,` plays`]}),x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,"aria-label":`More`,children:x(ie,{})})]})]},e.id)})})});c(()=>h(e,a,P))});let F=d(`rue:component:anchor`);l(a,F),u(()=>{let e=_(q,{title:`Loading 与 Empty`,summary:`空数据和加载中状态直接由 List 承接，便于异步列表先搭好骨架。`,tab:E,code:_e,preview:()=>b(`div`,{className:`grid w-full gap-4 md:grid-cols-2`,children:[x(K,{bordered:!0,loading:{spinning:!0,tip:`Loading tracks`},className:`bg-base-100 shadow-sm`}),x(K,{bordered:!0,dataSource:[],locale:{emptyText:`No tracks yet`},className:`bg-base-100 shadow-sm`})]})});c(()=>h(e,a,F))});let I=e(`h2`,a);l(a,I),l(I,m(`API`));let L=d(`rue:component:anchor`);return l(a,L),u(()=>{let e=_(J,{rows:se});c(()=>h(e,a,L))}),r})}),a,v),a})};export{ve as default};