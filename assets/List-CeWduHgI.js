import{C as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,ft as u,j as d,lt as f,pt as p,rt as m,t as h,u as g,ut as _,x as v}from"./vapor-runtime-BZZbPG7x.js";import{a as y,n as b}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as x,t as S}from"./src-DP0sEeZS.js";import{n as C}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as w}from"./Code-C8wy38VS.js";import{t as T}from"./tabs-B-QPmbH8.js";var E=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,D=e=>typeof e==`number`?`${e}px`:e,O=(e,t)=>e<=1?1:e>=t?t:e,k=e=>!!(e&&typeof e==`object`&&(e.type===`item`||e.type===`row`||e.cols||e.content!==void 0||e.normal!==void 0||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0)),A=e=>{if(e==null||typeof e==`boolean`||Array.isArray(e)||typeof e!=`object`)return e;for(let t of[`content`,`children`,`title`,`label`,`text`,`name`,`description`]){let n=e[t];if(n!=null)return n}try{return JSON.stringify(e)}catch{return String(e)}},j=e=>e==null||Array.isArray(e)&&e.length===0,M=e=>{switch(e){case`small`:case`sm`:return`text-sm`;case`large`:case`lg`:return`text-lg`;default:return}},N=e=>typeof e==`object`?{spinning:e.spinning!==!1,tip:e.tip,indicator:e.indicator}:{spinning:!!e},ee=(e,t,n)=>typeof n==`function`?n(e,t):n&&e&&typeof e==`object`?e[n]:e&&typeof e==`object`&&e.key!=null?e.key:`list-item-${t}`,P=e=>{if(e)return e.xxxl??e.xxl??e.xl??e.lg??e.md??e.sm??e.xs??e.column},F=(e,t)=>{if(!e)return t;let n=P(e);return{...t,display:`grid`,gridTemplateColumns:n?`repeat(${n}, minmax(0, 1fr))`:void 0,gap:D(e.gutter)}},I=(e,t,n,r)=>{if(!e)return null;let i=typeof e==`object`?e:{},a=Math.max(1,i.pageSize??r??i.defaultPageSize??10),o=Math.max(1,Math.ceil((i.total??t)/a)),s=O(i.current??n??i.defaultCurrent??1,o);return{...i,current:s,pageSize:a,total:i.total??t,position:i.position??`bottom`,align:i.align??`end`}},L=e=>e?e.map((e,t)=>e.type===`grow`?S(H,{as:e.as,className:e.className,children:e.content},t):S(U,{as:e.as,className:e.className,children:e.content},t)):null,R=(e,t)=>{let n=e.key??t;return(e.type??(e.cols||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0?`row`:`item`))===`item`?S(G,{className:e.className,children:e.content},n):e.title||e.description||e.avatar||e.actions||e.extra?x(G,{actions:e.actions,className:e.className,extra:e.extra,children:[S(W,{avatar:e.avatar,title:e.title,description:e.description,children:e.content}),L(e.cols)]},n):x(V,{normal:e.normal,className:e.className,children:[e.content,L(e.cols)]},n)},te=e=>e.spinning?x(`li`,{className:`flex min-h-24 items-center justify-center gap-3 p-6 text-sm opacity-70`,children:[e.indicator??S(`span`,{className:`loading loading-spinner loading-sm`}),e.tip?S(`span`,{children:e.tip}):null]}):null,ne=e=>S(`li`,{className:`p-8 text-center text-sm opacity-60`,children:e??`No data`}),z=(e,t)=>j(e)?null:S(`li`,{className:t,children:e}),re=(e,t,n=`li`)=>{if(!e)return null;let r=n,i=Math.max(1,Math.ceil(e.total/e.pageSize));if(e.hideOnSinglePage&&i<=1)return null;let a=Array.from({length:i},(e,t)=>t+1),o=e.total===0?0:(e.current-1)*e.pageSize+1,s=Math.min(e.current*e.pageSize,e.total);return x(r,{className:E(`flex flex-wrap items-center gap-3 p-3`,e.align===`start`?`justify-start`:e.align===`center`?`justify-center`:`justify-end`),children:[e.showTotal?S(`span`,{className:`mr-auto text-xs opacity-60`,children:e.showTotal(e.total,[o,s])}):null,x(`div`,{className:`join`,children:[S(`button`,{className:E(`join-item btn btn-sm`,e.current<=1&&`btn-disabled`),disabled:e.current<=1,onClick:()=>t(e.current-1),type:`button`,children:`Prev`}),a.map(n=>S(`button`,{className:E(`join-item btn btn-sm`,n===e.current&&`btn-active`),onClick:()=>t(n),type:`button`,children:n},n)),S(`button`,{className:E(`join-item btn btn-sm`,e.current>=i&&`btn-disabled`),disabled:e.current>=i,onClick:()=>t(e.current+1),type:`button`,children:`Next`})]})]})},B=({bordered:t,className:n,children:r,dataSource:i,emptyText:a,footer:o,grid:s,header:c,itemLayout:l=`horizontal`,items:d,loading:p,loadMore:h,locale:g,pagination:_,renderItem:y,rowKey:b,size:C,split:w=!0,style:T,...D})=>{let P=N(p),L=m(typeof _==`object`?_.defaultCurrent??_.current??1:1),B=m(typeof _==`object`?_.defaultPageSize??_.pageSize??10:10),V=f(),H=f(),U=f(),W=Array.isArray(i),K=W?i:d,q=!!_,J=`list`;t&&(J+=` border border-base-300 rounded-box overflow-hidden`),s&&(J+=` grid`),w||(J+=` list-no-split`),l===`vertical`&&(J+=` list-vertical`),J=E(J,M(C),n)??`list`;let Y=(e,t)=>e?.map((e,n)=>{let r=t?(t.current-1)*t.pageSize+n:n,i=ee(e,r,b);return W&&y?y(e,r):k(e)?R(e,r):S(G,{itemLayout:l,children:A(e)},i)}),X=()=>I(_,K?.length??0,L.value,B.value),ie=e=>!K||!e?K:K.slice((e.current-1)*e.pageSize,e.current*e.pageSize),Z=()=>{if(!q)return;let t=X(),n=P.spinning?te(P):K&&K.length===0?ne(g?.emptyText??a):Y(ie(t),t);V.current&&e(n??null,V.current),H.current&&e(t&&(t.position===`top`||t.position===`both`)?re(t,Q,`div`):null,H.current),U.current&&e(t&&(t.position===`bottom`||t.position===`both`)?re(t,Q,`div`):null,U.current)},Q=e=>{let t=X();if(!t)return;let n=O(e,Math.max(1,Math.ceil(t.total/t.pageSize)));typeof _==`object`&&_.current===void 0&&(L.value=n),B.value=t.pageSize,t.onChange&&t.onChange(n,t.pageSize),Z()};if(v(Z),u(()=>[L.value,B.value,K?.length,P.spinning],Z),q){let e=E(`rue-list`,t&&`border border-base-300 rounded-box overflow-hidden`,n),r=E(`list`,s&&`grid`,!w&&`list-no-split`,l===`vertical`&&`list-vertical`,M(C));return x(`div`,{...D,className:e,style:s?void 0:T,children:[S(`div`,{ref:H}),j(c)?null:S(`div`,{className:`p-4 pb-2 text-sm font-medium opacity-70`,children:c}),S(`ul`,{ref:V,className:r,style:F(s,s?T:void 0)}),j(o)?null:S(`div`,{className:`p-4 pt-2 text-sm opacity-70`,children:o}),j(h)?null:S(`div`,{className:`p-3 text-center`,children:h}),S(`div`,{ref:U})]})}return x(`ul`,{...D,className:J,style:F(s,T),children:[z(c,`p-4 pb-2 text-sm font-medium opacity-70`),P.spinning?te(P):null,!P.spinning&&K&&K.length===0?ne(g?.emptyText??a):null,!P.spinning&&K&&K.length>0&&Y(K,null),!W&&!d?r:null,z(o,`p-4 pt-2 text-sm opacity-70`),z(h,`p-3 text-center`)]})},V=({normal:e,className:t,children:n,...r})=>e?S(`li`,{...r,className:t||void 0,children:n}):S(`li`,{...r,className:E(`list-row`,t),children:n}),H=({as:e=`div`,className:t,children:n,...r})=>S(e,{...r,className:E(`list-col-grow`,t),children:n}),U=({as:e=`div`,className:t,children:n,...r})=>S(e,{...r,className:E(`list-col-wrap`,t),children:n}),W=({avatar:e,className:t,description:n,title:r,children:i,...a})=>x(`div`,{...a,className:E(`flex min-w-0 flex-1 items-start gap-3`,t),children:[e?S(`div`,{className:`shrink-0`,children:e}):null,x(`div`,{className:`min-w-0 flex-1`,children:[r?S(`div`,{className:`font-medium`,children:r}):null,n?S(`div`,{className:`text-sm opacity-70`,children:n}):null,i]})]}),G=({actions:e,className:t,classNames:n,extra:r,itemLayout:i=`horizontal`,styles:a,children:o,...s})=>{let c=!!e&&e.length>0,l=!j(r);if(!c&&!l)return S(`li`,{...s,className:t||void 0,children:o});let u=i===`vertical`;return x(`li`,{...s,className:E(`list-row`,u&&`items-start`,l&&!u&&`grid-cols-[1fr_auto]`,t),children:[x(`div`,{className:`min-w-0 flex-1`,children:[o,c?S(`ul`,{className:E(`mt-3 flex flex-wrap items-center gap-2 text-sm opacity-80`,n?.actions),style:a?.actions,children:e.map((e,t)=>S(`li`,{children:e},t))}):null]}),l?S(`div`,{className:E(`list-col-wrap`,n?.extra),style:a?.extra,children:r}):null]})},K=Object.assign(G,{Meta:W}),q=Object.assign(B,{Row:V,ColGrow:H,ColWrap:U,Item:K}),J=({title:e,summary:n,tab:u,preview:f,code:m})=>g(()=>{let _=t(`div`);s(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=t(`div`);d(_,v),s(v,`flex flex-wrap items-start justify-between gap-3`);let y=t(`div`);d(v,y);let b=t(`h2`);d(y,b),s(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(b,r(`# `));let x=i(b);d(b,x),p(()=>{c(x,e)});let S=a(`rue:slot:anchor`);d(y,S),p(()=>{l(n?g(()=>{let e=o(),r=t(`p`);d(e,r),s(r,`m-0 text-sm opacity-70`);let a=i(r);return d(r,a),p(()=>{c(a,n)}),e}):``,y,S)});let C=a(`rue:component:anchor`);d(_,C),p(()=>{l(h(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:u.value,onChange:e=>u.value=e,className:`mb-3 mt-4`}),_,C)});let E=a(`rue:slot:anchor`);return d(_,E),p(()=>{l(u.value===`preview`?f():g(()=>{let e=o(),t=a(`rue:component:anchor`);return d(e,t),p(()=>{l(h(w,{className:`mt-2`,lang:`tsx`,code:m}),e,t)}),e}),_,E)}),_}),Y=({rows:e})=>g(()=>{let i=t(`div`);s(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=t(`table`);d(i,c),s(c,`table table-zebra`);let u=t(`thead`);d(c,u);let f=t(`tr`);d(u,f);let m=t(`th`);d(f,m),d(m,r(`属性`));let h=t(`th`);d(f,h),d(h,r(`说明`));let _=t(`th`);d(f,_),d(_,r(`类型`));let v=t(`th`);d(f,v),d(v,r(`默认值`));let y=t(`tbody`);d(c,y);let x=a(`rue:list:start`),S=a(`rue:list:end`);d(y,x),d(y,S);let C=new Map;return p(()=>{C=b({items:e||[],getKey:(e,t)=>e.prop,elements:C,parent:y,before:S,singleRoot:!0,start:x,renderItem:(e,r,i,s,c)=>{l(g(()=>{let r=o(),i=t(`tr`);d(r,i),p(()=>{n(i,`key`,String(e.prop))});let s=t(`td`);d(i,s);let c=t(`code`);d(s,c);let u=a(`rue:slot:anchor`);d(c,u),p(()=>{let t=e.prop;l(t,c,u)});let f=t(`td`);d(i,f);let m=a(`rue:slot:anchor`);d(f,m),p(()=>{let t=e.description;l(t,f,m)});let h=t(`td`);d(i,h);let g=t(`code`);d(h,g);let _=a(`rue:slot:anchor`);d(g,_),p(()=>{let t=e.type;l(t,g,_)});let v=t(`td`);d(i,v);let y=t(`code`);d(v,y);let b=a(`rue:slot:anchor`);return d(y,b),p(()=>{let t=e.defaultValue;l(t,y,b)}),r}),r,i)}})}),i}),X=()=>g(()=>{let e=t(`svg`);s(e,`size-[1.2em]`),n(e,`xmlns`,`http://www.w3.org/2000/svg`),n(e,`viewBox`,`0 0 24 24`),n(e,`fill`,`none`),n(e,`stroke`,`currentColor`),n(e,`strokeWidth`,`2`);let r=t(`path`);return d(e,r),n(r,`strokeLinecap`,`round`),n(r,`strokeLinejoin`,`round`),n(r,`d`,`M6 3 20 12 6 21V3Z`),e}),ie=()=>g(()=>{let e=t(`svg`);s(e,`size-[1.2em]`),n(e,`xmlns`,`http://www.w3.org/2000/svg`),n(e,`viewBox`,`0 0 24 24`),n(e,`fill`,`none`),n(e,`stroke`,`currentColor`),n(e,`strokeWidth`,`2`);let r=t(`path`);return d(e,r),n(r,`strokeLinecap`,`round`),n(r,`strokeLinejoin`,`round`),n(r,`d`,`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`),e}),Z=()=>g(()=>{let e=t(`svg`);s(e,`size-[1.2em]`),n(e,`xmlns`,`http://www.w3.org/2000/svg`),n(e,`viewBox`,`0 0 24 24`),n(e,`fill`,`none`),n(e,`stroke`,`currentColor`),n(e,`strokeWidth`,`2`);let r=t(`path`);return d(e,r),n(r,`strokeLinecap`,`round`),n(r,`strokeLinejoin`,`round`),n(r,`d`,`M12 12h.01M19 12h.01M5 12h.01`),e}),Q=({src:e,alt:r})=>g(()=>{let i=t(`img`);return s(i,`size-10 rounded-box object-cover`),p(()=>{n(i,`src`,String(e))}),p(()=>{n(i,`alt`,String(r))}),i}),ae=()=>g(()=>{let e=o(),r=t(`button`);d(e,r),s(r,`btn btn-square btn-ghost`),n(r,`type`,`button`),n(r,`aria-label`,`Play`);let i=a(`rue:component:anchor`);d(r,i),l(h(X,{}),r,i);let c=t(`button`);d(e,c),s(c,`btn btn-square btn-ghost`),n(c,`type`,`button`),n(c,`aria-label`,`Favorite`);let u=a(`rue:component:anchor`);return d(c,u),l(h(ie,{}),c,u),e}),$=[{id:`dio-lupa`,rank:`01`,artist:`Dio Lupa`,title:`Remaining Reason`,image:`https://img.daisyui.com/images/profile/demo/1@94.webp`,note:`Remaining Reason became an instant hit, praised for its haunting sound and emotional depth.`,duration:`3:42`,plays:`248K`},{id:`ellie-beilish`,rank:`02`,artist:`Ellie Beilish`,title:`Bears of a fever`,image:`https://img.daisyui.com/images/profile/demo/4@94.webp`,note:`Bears of a Fever pairs restless percussion with a chorus built for repeat plays.`,duration:`4:05`,plays:`221K`},{id:`sabrino-gardener`,rank:`03`,artist:`Sabrino Gardener`,title:`Cappuccino`,image:`https://img.daisyui.com/images/profile/demo/3@94.webp`,note:`Cappuccino keeps the melody smooth while the hook does the heavy lifting.`,duration:`2:58`,plays:`198K`},{id:`mira-lane`,rank:`04`,artist:`Mira Lane`,title:`Window Seat`,image:`https://img.daisyui.com/images/profile/demo/2@94.webp`,note:`Window Seat turns a late train ride into a tiny cinematic pop song.`,duration:`3:16`,plays:`166K`},{id:`noah-drift`,rank:`05`,artist:`Noah Drift`,title:`Low Tide Letters`,image:`https://img.daisyui.com/images/profile/demo/5@94.webp`,note:`Low Tide Letters is quiet, patient, and built around a warm guitar loop.`,duration:`3:37`,plays:`152K`}],oe=[{type:`item`,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,content:`Most played songs this week`},...$.slice(0,3).map(e=>({type:`row`,content:[S(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),S(`div`,{children:S(Q,{src:e.image,alt:`${e.artist} cover`})})],cols:[{type:`grow`,content:x(`div`,{children:[S(`div`,{children:e.artist}),S(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]})}]}))],se=[{type:`item`,content:S(`div`,{className:`px-4 pt-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`})},...$.slice(0,3).map(e=>({key:e.id,className:`px-4 py-3`,title:e.artist,description:`${e.title} \xb7 ${e.duration}`,extra:`${e.plays} plays`}))],ce=[{prop:`children`,description:`直接传入自定义 li、List.Row、List.Item 等内容`,type:`any`,defaultValue:`-`},{prop:`items`,description:`兼容旧版 Rue 数据结构，支持 item、row、cols`,type:`ListDataItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据源驱动的数组入口，通常搭配 renderItem`,type:`any[]`,defaultValue:`-`},{prop:`renderItem`,description:`自定义 dataSource 中每一项的渲染内容`,type:`(item, index) => any`,defaultValue:`-`},{prop:`rowKey`,description:`列表项 key，可传字段名或函数`,type:`string | (item, index) => string | number`,defaultValue:`key`},{prop:`header / footer`,description:`列表头部和底部内容`,type:`any`,defaultValue:`-`},{prop:`loading`,description:`加载态，支持 boolean 或 { spinning, tip, indicator }`,type:`boolean | object`,defaultValue:`false`},{prop:`pagination`,description:`分页配置，支持 current、pageSize、position、align、showTotal`,type:`boolean | ListPaginationConfig | false`,defaultValue:`false`},{prop:`grid`,description:`网格列表配置，支持 column 与 gutter`,type:`{ column?: number; gutter?: number | string }`,defaultValue:`-`},{prop:`itemLayout`,description:`列表项布局语义，vertical 会让 extra/actions 更适合图文内容`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`bordered / split / size`,description:`边框、分割与尺寸控制`,type:`boolean / boolean / ListSize`,defaultValue:`false / true / default`},{prop:`List.Item`,description:`支持 actions、extra、classNames、styles，并包含 List.Item.Meta`,type:`compound component`,defaultValue:`-`}],le=`import { List } from '@rue-js/design';

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
</List>`,ue=`<List className="bg-base-100 rounded-box shadow-md">
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
</List>`,de=`const listItems = [
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
</List>`,fe=`const listItems = [
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

<List items={listItems} className="bg-base-100 rounded-box shadow-md" />`,pe=`<List className="bg-base-100 rounded-box shadow-md">
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
</List>`,me=`<List
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
/>`,he=`<List itemLayout="vertical" className="bg-base-100 rounded-box shadow-md">
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
</List>`,ge=`<List
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
/>`,_e=`<List
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
/>`,ve=`<div className="grid gap-4 md:grid-cols-2">
  <List bordered loading={{ spinning: true, tip: 'Loading tracks' }} />
  <List bordered dataSource={[]} locale={{ emptyText: 'No tracks yet' }} />
</div>`,ye=()=>{let{tabBasic:e,tabGrow:i,tabManualArray:c,tabInternalArray:u,tabWrap:f,tabDataSource:v,tabVertical:b,tabPagination:w,tabGrid:T,tabState:E}=y(`useSetup:0:0`,()=>_(()=>({tabBasic:y(`ref:1:0`,()=>m(`preview`)),tabGrow:y(`ref:1:1`,()=>m(`preview`)),tabManualArray:y(`ref:1:2`,()=>m(`preview`)),tabInternalArray:y(`ref:1:3`,()=>m(`preview`)),tabWrap:y(`ref:1:4`,()=>m(`preview`)),tabDataSource:y(`ref:1:5`,()=>m(`preview`)),tabVertical:y(`ref:1:6`,()=>m(`preview`)),tabPagination:y(`ref:1:7`,()=>m(`preview`)),tabGrid:y(`ref:1:8`,()=>m(`preview`)),tabState:y(`ref:1:9`,()=>m(`preview`))})));return g(()=>{let m=o(),_=a(`rue:component:anchor`);return d(m,_),l(h(C,{children:g(()=>{let m=o(),g=t(`div`);d(m,g),s(g,`max-w-none prose prose-sm md:prose-base`);let _=t(`h1`);d(g,_),d(_,r(`List 列表`));let y=t(`p`);d(g,y),s(y,`text-sm mt-3 mb-3`),d(y,r(`列表用于以行或网格的形式展示同类信息。Rue 的 List 保留 daisyUI 的轻量视觉，并补充 dataSource、renderItem、Meta、actions、extra、分页、加载和空态等能力。`));let C=t(`div`);d(g,C),s(C,`text-sm`);let D=t(`a`);d(C,D),n(D,`href`,`https://daisyui.com/components/list/`),n(D,`target`,`_blank`),d(D,r(`查看 List 静态样式`));let O=a(`rue:component:anchor`);d(g,O),p(()=>{l(h(J,{title:`List（第二列默认填充剩余空间）`,summary:`保留原始组合式写法，适合快速拼装一组紧凑行。`,tab:e,code:le,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:x(q,{className:`bg-base-100 rounded-box shadow-md`,children:[S(q.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>x(q.Row,{children:[S(`div`,{children:S(Q,{src:e.image,alt:`${e.artist} cover`})}),x(`div`,{children:[S(`div`,{children:e.artist}),S(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),S(ae,{})]},e.id))]})})}),g,O)});let k=a(`rue:component:anchor`);d(g,k),p(()=>{l(h(J,{title:`List（第三列填充剩余空间）`,summary:`使用 List.ColGrow 显式控制哪一列占据剩余宽度。`,tab:i,code:ue,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:x(q,{className:`bg-base-100 rounded-box shadow-md`,children:[S(q.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>x(q.Row,{children:[S(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),S(`div`,{children:S(Q,{src:e.image,alt:`${e.artist} cover`})}),x(q.ColGrow,{children:[S(`div`,{children:e.artist}),S(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),S(`button`,{className:`btn btn-square btn-ghost`,type:`button`,"aria-label":`Play`,children:S(X,{})})]},e.id))]})})}),g,k)});let A=a(`rue:component:anchor`);d(g,A),p(()=>{l(h(J,{title:`List 通过数据渲染（数组）`,summary:`保留旧 demo 的手动 map 方式，适合完全掌控每一行结构。`,tab:c,code:de,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:S(q,{className:`bg-base-100 rounded-box shadow-md`,children:oe.map((e,t)=>e.type===`item`?S(q.Item,{className:e.className,children:e.content},t):x(q.Row,{children:[e.content,e.cols?.map((e,t)=>e.type===`grow`?S(q.ColGrow,{as:e.as,className:e.className,children:e.content},t):S(q.ColWrap,{as:e.as,className:e.className,children:e.content},t))]},t))})})}),g,A)});let j=a(`rue:component:anchor`);d(g,j),p(()=>{l(h(J,{title:`List 通过数据渲染（数组，组件内部）`,summary:`items 仍然可用，适合用纯数据配置直接生成 Meta 与侧边信息。`,tab:u,code:fe,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:S(q,{items:se,className:`bg-base-100 rounded-box shadow-md`})})}),g,j)});let M=a(`rue:component:anchor`);d(g,M),p(()=>{l(h(J,{title:`List（第三列换行至下一行）`,summary:`List.ColWrap 用于长文本、说明或次级信息换行展示。`,tab:f,code:pe,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:x(q,{className:`bg-base-100 rounded-box shadow-md`,children:[S(q.Item,{className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>x(q.Row,{children:[S(`div`,{children:S(Q,{src:e.image,alt:`${e.artist} cover`})}),x(`div`,{children:[S(`div`,{children:e.artist}),S(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),S(q.ColWrap,{as:`p`,className:`text-xs`,children:e.note}),S(ae,{})]},e.id))]})})}),g,M)});let N=a(`rue:component:anchor`);d(g,N),p(()=>{l(h(J,{title:`dataSource 与 renderItem`,summary:`新增数据源驱动的列表 API，适合业务列表统一从数据源渲染。`,tab:v,code:me,preview:()=>S(`div`,{className:`w-full max-w-2xl`,children:S(q,{bordered:!0,header:S(`span`,{children:`Release queue`}),footer:S(`span`,{children:`Synced 2 minutes ago`}),dataSource:$.slice(0,4),rowKey:`id`,className:`bg-base-100 shadow-sm`,renderItem:e=>S(q.Item,{actions:[S(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Review`}),S(`button`,{className:`btn btn-xs btn-primary`,type:`button`,children:`Publish`})],extra:S(`span`,{className:`badge badge-soft`,children:e.duration}),children:S(q.Item.Meta,{avatar:S(Q,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title})},e.id)})})}),g,N)});let ee=a(`rue:component:anchor`);d(g,ee),p(()=>{l(h(J,{title:`Meta、actions 与 extra`,summary:`List.Item.Meta 管标题、描述和头像，actions/extra 放操作与侧边内容。`,tab:b,code:he,preview:()=>S(`div`,{className:`w-full max-w-2xl`,children:S(q,{itemLayout:`vertical`,className:`bg-base-100 rounded-box shadow-md`,children:$.slice(0,2).map(e=>x(q.Item,{actions:[S(`button`,{className:`btn btn-xs`,type:`button`,children:`Share`}),S(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Save`})],extra:S(`div`,{className:`stats bg-base-200 shadow-sm`,children:x(`div`,{className:`stat py-2 px-4`,children:[S(`div`,{className:`stat-title text-xs`,children:`Plays`}),S(`div`,{className:`stat-value text-sm`,children:e.plays})]})}),children:[S(q.Item.Meta,{avatar:S(Q,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-70`,children:e.note})]},e.id))})})}),g,ee)});let P=a(`rue:component:anchor`);d(g,P),p(()=>{l(h(J,{title:`分页与加载更多`,summary:`pagination 内置简单分页；loadMore 可放在列表底部承载自定义加载动作。`,tab:w,code:ge,preview:()=>S(`div`,{className:`w-full max-w-2xl`,children:S(q,{bordered:!0,className:`bg-base-100 shadow-sm`,dataSource:$,rowKey:`id`,loadMore:S(`div`,{className:`py-1`,children:S(`button`,{className:`btn btn-sm btn-outline`,type:`button`,children:`Load more`})}),pagination:{defaultPageSize:2,position:`bottom`,align:`center`,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e}`},renderItem:e=>S(q.Item,{className:`px-4 py-3`,children:S(q.Item.Meta,{avatar:S(Q,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:`${e.title} \xb7 ${e.duration}`})},e.id)})})}),g,P)});let F=a(`rue:component:anchor`);d(g,F),p(()=>{l(h(J,{title:`Grid 网格列表`,summary:`grid 提供 column/gutter，用于把同类条目排成卡片网格。`,tab:T,code:_e,preview:()=>S(`div`,{className:`w-full max-w-3xl`,children:S(q,{grid:{column:3,gutter:16},dataSource:$.slice(0,3),rowKey:`id`,renderItem:e=>x(q.Item,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,children:[S(q.Item.Meta,{avatar:S(Q,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),x(`div`,{className:`mt-4 flex items-center justify-between text-xs opacity-70`,children:[x(`span`,{children:[e.plays,` plays`]}),S(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,"aria-label":`More`,children:S(Z,{})})]})]},e.id)})})}),g,F)});let I=a(`rue:component:anchor`);d(g,I),p(()=>{l(h(J,{title:`Loading 与 Empty`,summary:`空数据和加载中状态直接由 List 承接，便于异步列表先搭好骨架。`,tab:E,code:ve,preview:()=>x(`div`,{className:`grid w-full gap-4 md:grid-cols-2`,children:[S(q,{bordered:!0,loading:{spinning:!0,tip:`Loading tracks`},className:`bg-base-100 shadow-sm`}),S(q,{bordered:!0,dataSource:[],locale:{emptyText:`No tracks yet`},className:`bg-base-100 shadow-sm`})]})}),g,I)});let L=t(`h2`);d(g,L),d(L,r(`API`));let R=a(`rue:component:anchor`);return d(g,R),p(()=>{l(h(Y,{rows:ce}),g,R)}),m})}),m,_),m})};export{ye as default};