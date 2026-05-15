import{F as e,I as t,K as n,L as r,N as i,R as a,S as o,W as s,_t as c,d as l,gt as u,l as d,mt as f,ot as p,pt as m,t as h,ut as g,w as _}from"./vapor-runtime-Bp8DIxJg.js";import{a as v,n as y}from"./vapor-helpers-vapor-D3i3KBBg.js";import{n as b,t as x}from"./src-Cl1DK5fX.js";import{n as S}from"./SidebarPlaygroundDesign-CIhn6bFh.js";import{t as C}from"./Code-D55WiaDx.js";import{t as w}from"./tabs-CrC7r95z.js";var T=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,E=e=>typeof e==`number`?`${e}px`:e,ee=(e,t)=>e<=1?1:e>=t?t:e,D=e=>!!(e&&typeof e==`object`&&(e.type===`item`||e.type===`row`||e.cols||e.content!==void 0||e.normal!==void 0||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0)),O=e=>{if(e==null||typeof e==`boolean`||Array.isArray(e)||typeof e!=`object`)return e;for(let t of[`content`,`children`,`title`,`label`,`text`,`name`,`description`]){let n=e[t];if(n!=null)return n}try{return JSON.stringify(e)}catch{return String(e)}},k=e=>e==null||Array.isArray(e)&&e.length===0,A=e=>{switch(e){case`small`:case`sm`:return`text-sm`;case`large`:case`lg`:return`text-lg`;default:return}},j=e=>typeof e==`object`?{spinning:e.spinning!==!1,tip:e.tip,indicator:e.indicator}:{spinning:!!e},M=(e,t,n)=>typeof n==`function`?n(e,t):n&&e&&typeof e==`object`?e[n]:e&&typeof e==`object`&&e.key!=null?e.key:`list-item-${t}`,N=e=>{if(e)return e.xxxl??e.xxl??e.xl??e.lg??e.md??e.sm??e.xs??e.column},P=(e,t)=>{if(!e)return t;let n=N(e);return{...t,display:`grid`,gridTemplateColumns:n?`repeat(${n}, minmax(0, 1fr))`:void 0,gap:E(e.gutter)}},F=(e,t,n,r)=>{if(!e)return null;let i=typeof e==`object`?e:{},a=Math.max(1,i.pageSize??r??i.defaultPageSize??10),o=Math.max(1,Math.ceil((i.total??t)/a)),s=ee(i.current??n??i.defaultCurrent??1,o);return{...i,current:s,pageSize:a,total:i.total??t,position:i.position??`bottom`,align:i.align??`end`}},I=e=>e?e.map((e,t)=>e.type===`grow`?x(H,{as:e.as,className:e.className,children:e.content},t):x(U,{as:e.as,className:e.className,children:e.content},t)):null,te=(e,t)=>{let n=e.key??t;return(e.type??(e.cols||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0?`row`:`item`))===`item`?x(G,{className:e.className,children:e.content},n):e.title||e.description||e.avatar||e.actions||e.extra?b(G,{actions:e.actions,className:e.className,extra:e.extra,children:[x(W,{avatar:e.avatar,title:e.title,description:e.description,children:e.content}),I(e.cols)]},n):b(V,{normal:e.normal,className:e.className,children:[e.content,I(e.cols)]},n)},L=e=>e.spinning?b(`li`,{className:`flex min-h-24 items-center justify-center gap-3 p-6 text-sm opacity-70`,children:[e.indicator??x(`span`,{className:`loading loading-spinner loading-sm`}),e.tip?x(`span`,{children:e.tip}):null]}):null,R=e=>x(`li`,{className:`p-8 text-center text-sm opacity-60`,children:e??`No data`}),z=(e,t)=>k(e)?null:x(`li`,{className:t,children:e}),ne=(e,t,n=`li`)=>{if(!e)return null;let r=n,i=Math.max(1,Math.ceil(e.total/e.pageSize));if(e.hideOnSinglePage&&i<=1)return null;let a=Array.from({length:i},(e,t)=>t+1),o=e.total===0?0:(e.current-1)*e.pageSize+1,s=Math.min(e.current*e.pageSize,e.total);return b(r,{className:T(`flex flex-wrap items-center gap-3 p-3`,e.align===`start`?`justify-start`:e.align===`center`?`justify-center`:`justify-end`),children:[e.showTotal?x(`span`,{className:`mr-auto text-xs opacity-60`,children:e.showTotal(e.total,[o,s])}):null,b(`div`,{className:`join`,children:[x(`button`,{className:T(`join-item btn btn-sm`,e.current<=1&&`btn-disabled`),disabled:e.current<=1,onClick:()=>t(e.current-1),type:`button`,children:`Prev`}),a.map(n=>x(`button`,{className:T(`join-item btn btn-sm`,n===e.current&&`btn-active`),onClick:()=>t(n),type:`button`,children:n},n)),x(`button`,{className:T(`join-item btn btn-sm`,e.current>=i&&`btn-disabled`),disabled:e.current>=i,onClick:()=>t(e.current+1),type:`button`,children:`Next`})]})]})},B=({bordered:e,className:t,children:n,dataSource:r,emptyText:i,footer:a,grid:s,header:c,itemLayout:l=`horizontal`,items:d,loading:f,loadMore:h,locale:g,pagination:v,renderItem:y,rowKey:S,size:C,split:w=!0,style:E,...N})=>{let I=j(f),B=p(typeof v==`object`?v.defaultCurrent??v.current??1:1),V=p(typeof v==`object`?v.defaultPageSize??v.pageSize??10:10),H=m(),U=m(),W=m(),K=Array.isArray(r),q=K?r:d,J=!!v,Y=`list`;e&&(Y+=` border border-base-300 rounded-box overflow-hidden`),s&&(Y+=` grid`),w||(Y+=` list-no-split`),l===`vertical`&&(Y+=` list-vertical`),Y=T(Y,A(C),t)??`list`;let X=(e,t)=>e?.map((e,n)=>{let r=t?(t.current-1)*t.pageSize+n:n,i=M(e,r,S);return K&&y?y(e,r):D(e)?te(e,r):x(G,{itemLayout:l,children:O(e)},i)}),re=()=>F(v,q?.length??0,B.value,V.value),ie=e=>!q||!e?q:q.slice((e.current-1)*e.pageSize,e.current*e.pageSize),Z=()=>{if(!J)return;let e=re(),t=I.spinning?L(I):q&&q.length===0?R(g?.emptyText??i):X(ie(e),e);H.current&&_(t??null,H.current),U.current&&_(e&&(e.position===`top`||e.position===`both`)?ne(e,Q,`div`):null,U.current),W.current&&_(e&&(e.position===`bottom`||e.position===`both`)?ne(e,Q,`div`):null,W.current)},Q=e=>{let t=re();if(!t)return;let n=ee(e,Math.max(1,Math.ceil(t.total/t.pageSize)));typeof v==`object`&&v.current===void 0&&(B.value=n),V.value=t.pageSize,t.onChange&&t.onChange(n,t.pageSize),Z()};if(o(Z),u(()=>[B.value,V.value,q?.length,I.spinning],Z),J){let n=T(`rue-list`,e&&`border border-base-300 rounded-box overflow-hidden`,t),r=T(`list`,s&&`grid`,!w&&`list-no-split`,l===`vertical`&&`list-vertical`,A(C));return b(`div`,{...N,className:n,style:s?void 0:E,children:[x(`div`,{ref:U}),k(c)?null:x(`div`,{className:`p-4 pb-2 text-sm font-medium opacity-70`,children:c}),x(`ul`,{ref:H,className:r,style:P(s,s?E:void 0)}),k(a)?null:x(`div`,{className:`p-4 pt-2 text-sm opacity-70`,children:a}),k(h)?null:x(`div`,{className:`p-3 text-center`,children:h}),x(`div`,{ref:W})]})}return b(`ul`,{...N,className:Y,style:P(s,E),children:[z(c,`p-4 pb-2 text-sm font-medium opacity-70`),I.spinning?L(I):null,!I.spinning&&q&&q.length===0?R(g?.emptyText??i):null,!I.spinning&&q&&q.length>0&&X(q,null),!K&&!d?n:null,z(a,`p-4 pt-2 text-sm opacity-70`),z(h,`p-3 text-center`)]})},V=({normal:e,className:t,children:n,...r})=>e?x(`li`,{...r,className:t||void 0,children:n}):x(`li`,{...r,className:T(`list-row`,t),children:n}),H=({as:e=`div`,className:t,children:n,...r})=>x(e,{...r,className:T(`list-col-grow`,t),children:n}),U=({as:e=`div`,className:t,children:n,...r})=>x(e,{...r,className:T(`list-col-wrap`,t),children:n}),W=({avatar:e,className:t,description:n,title:r,children:i,...a})=>b(`div`,{...a,className:T(`flex min-w-0 flex-1 items-start gap-3`,t),children:[e?x(`div`,{className:`shrink-0`,children:e}):null,b(`div`,{className:`min-w-0 flex-1`,children:[r?x(`div`,{className:`font-medium`,children:r}):null,n?x(`div`,{className:`text-sm opacity-70`,children:n}):null,i]})]}),G=({actions:e,className:t,classNames:n,extra:r,itemLayout:i=`horizontal`,styles:a,children:o,...s})=>{let c=!!e&&e.length>0,l=!k(r);if(!c&&!l)return x(`li`,{...s,className:t||void 0,children:o});let u=i===`vertical`;return b(`li`,{...s,className:T(`list-row`,u&&`items-start`,l&&!u&&`grid-cols-[1fr_auto]`,t),children:[b(`div`,{className:`min-w-0 flex-1`,children:[o,c?x(`ul`,{className:T(`mt-3 flex flex-wrap items-center gap-2 text-sm opacity-80`,n?.actions),style:a?.actions,children:e.map((e,t)=>x(`li`,{children:e},t))}):null]}),l?x(`div`,{className:T(`list-col-wrap`,n?.extra),style:a?.extra,children:r}):null]})},K=Object.assign(G,{Meta:W}),q=Object.assign(B,{Row:V,ColGrow:H,ColWrap:U,Item:K}),J=o=>l(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let p=r(`div`,f);i(f,p);let m=r(`h2`,p);i(p,m),n(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,a(`# `));let _=e(`rue:slot:anchor`);i(m,_),c(()=>{let e=o.title;g(()=>d(e,m,_))});let v=e(`rue:slot:anchor`);i(p,v),c(()=>{let a=o.summary?l(()=>{let a=t(),s=r(`p`,a);i(a,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),c(()=>{let e=o.summary;g(()=>d(e,s,l))}),a}):``;g(()=>d(a,p,v))});let y=e(`rue:component:anchor`);i(u,y),c(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});g(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),c(()=>{let n=o.tab.value===`preview`?o.preview():l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:o.code});g(()=>d(e,n,r))}),n});g(()=>d(n,u,b))}),u}),Y=o=>l(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let h=r(`tr`,m);i(m,h);let _=r(`th`,h);i(h,_),i(_,a(`属性`));let v=r(`th`,h);i(h,v),i(v,a(`说明`));let b=r(`th`,h);i(h,b),i(b,a(`类型`));let x=r(`th`,h);i(h,x),i(x,a(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=y({items:o.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let u=r(`code`,l);i(l,u);let f=e(`rue:slot:anchor`);i(u,f),c(()=>{let e=n.prop;g(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),c(()=>{let e=n.description;g(()=>d(e,p,m))});let h=r(`td`,o);i(o,h);let _=r(`code`,h);i(h,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;g(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;g(()=>d(e,b,x))}),a}),a,o)}})}),f}),X=()=>l(e=>{let t=r(`svg`,e);n(t,`size-[1.2em]`),s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`);let a=r(`path`,t);return i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M6 3 20 12 6 21V3Z`),t}),re=()=>l(e=>{let t=r(`svg`,e);n(t,`size-[1.2em]`),s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`);let a=r(`path`,t);return i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`),t}),ie=()=>l(e=>{let t=r(`svg`,e);n(t,`size-[1.2em]`),s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`);let a=r(`path`,t);return i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M12 12h.01M19 12h.01M5 12h.01`),t}),Z=e=>l(t=>{let i=r(`img`,t);return n(i,`size-10 rounded-box object-cover`),c(()=>{s(i,`src`,String(e.src))}),c(()=>{s(i,`alt`,String(e.alt))}),i}),Q=()=>l(a=>{let o=t(),c=r(`button`,o);i(o,c),n(c,`btn btn-square btn-ghost`),s(c,`type`,`button`),s(c,`aria-label`,`Play`);let l=e(`rue:component:anchor`);i(c,l),d(h(X,{}),c,l);let u=r(`button`,o);i(o,u),n(u,`btn btn-square btn-ghost`),s(u,`type`,`button`),s(u,`aria-label`,`Favorite`);let f=e(`rue:component:anchor`);return i(u,f),d(h(re,{}),u,f),o}),$=[{id:`dio-lupa`,rank:`01`,artist:`Dio Lupa`,title:`Remaining Reason`,image:`https://img.daisyui.com/images/profile/demo/1@94.webp`,note:`Remaining Reason became an instant hit, praised for its haunting sound and emotional depth.`,duration:`3:42`,plays:`248K`},{id:`ellie-beilish`,rank:`02`,artist:`Ellie Beilish`,title:`Bears of a fever`,image:`https://img.daisyui.com/images/profile/demo/4@94.webp`,note:`Bears of a Fever pairs restless percussion with a chorus built for repeat plays.`,duration:`4:05`,plays:`221K`},{id:`sabrino-gardener`,rank:`03`,artist:`Sabrino Gardener`,title:`Cappuccino`,image:`https://img.daisyui.com/images/profile/demo/3@94.webp`,note:`Cappuccino keeps the melody smooth while the hook does the heavy lifting.`,duration:`2:58`,plays:`198K`},{id:`mira-lane`,rank:`04`,artist:`Mira Lane`,title:`Window Seat`,image:`https://img.daisyui.com/images/profile/demo/2@94.webp`,note:`Window Seat turns a late train ride into a tiny cinematic pop song.`,duration:`3:16`,plays:`166K`},{id:`noah-drift`,rank:`05`,artist:`Noah Drift`,title:`Low Tide Letters`,image:`https://img.daisyui.com/images/profile/demo/5@94.webp`,note:`Low Tide Letters is quiet, patient, and built around a warm guitar loop.`,duration:`3:37`,plays:`152K`}],ae=[{type:`item`,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,content:`Most played songs this week`},...$.slice(0,3).map(e=>({type:`row`,content:[x(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})})],cols:[{type:`grow`,content:b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]})}]}))],oe=[{type:`item`,content:x(`div`,{className:`px-4 pt-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`})},...$.slice(0,3).map(e=>({key:e.id,className:`px-4 py-3`,title:e.artist,description:`${e.title} \xb7 ${e.duration}`,extra:`${e.plays} plays`}))],se=[{prop:`children`,description:`直接传入自定义 li、List.Row、List.Item 等内容`,type:`any`,defaultValue:`-`},{prop:`items`,description:`兼容旧版 Rue 数据结构，支持 item、row、cols`,type:`ListDataItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据源驱动的数组入口，通常搭配 renderItem`,type:`any[]`,defaultValue:`-`},{prop:`renderItem`,description:`自定义 dataSource 中每一项的渲染内容`,type:`(item, index) => any`,defaultValue:`-`},{prop:`rowKey`,description:`列表项 key，可传字段名或函数`,type:`string | (item, index) => string | number`,defaultValue:`key`},{prop:`header / footer`,description:`列表头部和底部内容`,type:`any`,defaultValue:`-`},{prop:`loading`,description:`加载态，支持 boolean 或 { spinning, tip, indicator }`,type:`boolean | object`,defaultValue:`false`},{prop:`pagination`,description:`分页配置，支持 current、pageSize、position、align、showTotal`,type:`boolean | ListPaginationConfig | false`,defaultValue:`false`},{prop:`grid`,description:`网格列表配置，支持 column 与 gutter`,type:`{ column?: number; gutter?: number | string }`,defaultValue:`-`},{prop:`itemLayout`,description:`列表项布局语义，vertical 会让 extra/actions 更适合图文内容`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`bordered / split / size`,description:`边框、分割与尺寸控制`,type:`boolean / boolean / ListSize`,defaultValue:`false / true / default`},{prop:`List.Item`,description:`支持 actions、extra、classNames、styles，并包含 List.Item.Meta`,type:`compound component`,defaultValue:`-`}],ce=`import { List } from '@rue-js/design';

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
</div>`,ve=()=>{let{tabBasic:o,tabGrow:u,tabManualArray:m,tabInternalArray:_,tabWrap:y,tabDataSource:C,tabVertical:w,tabPagination:T,tabGrid:E,tabState:ee}=v(`useSetup:0:0`,()=>f(()=>({tabBasic:v(`ref:1:0`,()=>p(`preview`)),tabGrow:v(`ref:1:1`,()=>p(`preview`)),tabManualArray:v(`ref:1:2`,()=>p(`preview`)),tabInternalArray:v(`ref:1:3`,()=>p(`preview`)),tabWrap:v(`ref:1:4`,()=>p(`preview`)),tabDataSource:v(`ref:1:5`,()=>p(`preview`)),tabVertical:v(`ref:1:6`,()=>p(`preview`)),tabPagination:v(`ref:1:7`,()=>p(`preview`)),tabGrid:v(`ref:1:8`,()=>p(`preview`)),tabState:v(`ref:1:9`,()=>p(`preview`))})));return l(f=>{let p=t(),v=e(`rue:component:anchor`);return i(p,v),d(h(S,{children:l(()=>{let l=t(),f=r(`div`,l);i(l,f),n(f,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,f);i(f,p),i(p,a(`List 列表`));let v=r(`p`,f);i(f,v),n(v,`text-sm mt-3 mb-3`),i(v,a(`列表用于以行或网格的形式展示同类信息。Rue 的 List 保留 daisyUI 的轻量视觉，并补充 dataSource、renderItem、Meta、actions、extra、分页、加载和空态等能力。`));let S=r(`div`,f);i(f,S),n(S,`text-sm`);let D=r(`a`,S);i(S,D),s(D,`href`,`https://daisyui.com/components/list/`),s(D,`target`,`_blank`),i(D,a(`查看 List 静态样式`));let O=e(`rue:component:anchor`);i(f,O),c(()=>{let e=h(J,{title:`List（第二列默认填充剩余空间）`,summary:`保留原始组合式写法，适合快速拼装一组紧凑行。`,tab:o,code:ce,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(q,{className:`bg-base-100 rounded-box shadow-md`,children:[x(q.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(q.Row,{children:[x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(Q,{})]},e.id))]})})});g(()=>d(e,f,O))});let k=e(`rue:component:anchor`);i(f,k),c(()=>{let e=h(J,{title:`List（第三列填充剩余空间）`,summary:`使用 List.ColGrow 显式控制哪一列占据剩余宽度。`,tab:u,code:le,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(q,{className:`bg-base-100 rounded-box shadow-md`,children:[x(q.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(q.Row,{children:[x(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(q.ColGrow,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(`button`,{className:`btn btn-square btn-ghost`,type:`button`,"aria-label":`Play`,children:x(X,{})})]},e.id))]})})});g(()=>d(e,f,k))});let A=e(`rue:component:anchor`);i(f,A),c(()=>{let e=h(J,{title:`List 通过数据渲染（数组）`,summary:`保留旧 demo 的手动 map 方式，适合完全掌控每一行结构。`,tab:m,code:ue,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:x(q,{className:`bg-base-100 rounded-box shadow-md`,children:ae.map((e,t)=>e.type===`item`?x(q.Item,{className:e.className,children:e.content},t):b(q.Row,{children:[e.content,e.cols?.map((e,t)=>e.type===`grow`?x(q.ColGrow,{as:e.as,className:e.className,children:e.content},t):x(q.ColWrap,{as:e.as,className:e.className,children:e.content},t))]},t))})})});g(()=>d(e,f,A))});let j=e(`rue:component:anchor`);i(f,j),c(()=>{let e=h(J,{title:`List 通过数据渲染（数组，组件内部）`,summary:`items 仍然可用，适合用纯数据配置直接生成 Meta 与侧边信息。`,tab:_,code:de,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:x(q,{items:oe,className:`bg-base-100 rounded-box shadow-md`})})});g(()=>d(e,f,j))});let M=e(`rue:component:anchor`);i(f,M),c(()=>{let e=h(J,{title:`List（第三列换行至下一行）`,summary:`List.ColWrap 用于长文本、说明或次级信息换行展示。`,tab:y,code:fe,preview:()=>x(`div`,{className:`w-full max-w-lg`,children:b(q,{className:`bg-base-100 rounded-box shadow-md`,children:[x(q.Item,{className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>b(q.Row,{children:[x(`div`,{children:x(Z,{src:e.image,alt:`${e.artist} cover`})}),b(`div`,{children:[x(`div`,{children:e.artist}),x(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),x(q.ColWrap,{as:`p`,className:`text-xs`,children:e.note}),x(Q,{})]},e.id))]})})});g(()=>d(e,f,M))});let N=e(`rue:component:anchor`);i(f,N),c(()=>{let e=h(J,{title:`dataSource 与 renderItem`,summary:`新增数据源驱动的列表 API，适合业务列表统一从数据源渲染。`,tab:C,code:pe,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(q,{bordered:!0,header:x(`span`,{children:`Release queue`}),footer:x(`span`,{children:`Synced 2 minutes ago`}),dataSource:$.slice(0,4),rowKey:`id`,className:`bg-base-100 shadow-sm`,renderItem:e=>x(q.Item,{actions:[x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Review`}),x(`button`,{className:`btn btn-xs btn-primary`,type:`button`,children:`Publish`})],extra:x(`span`,{className:`badge badge-soft`,children:e.duration}),children:x(q.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title})},e.id)})})});g(()=>d(e,f,N))});let P=e(`rue:component:anchor`);i(f,P),c(()=>{let e=h(J,{title:`Meta、actions 与 extra`,summary:`List.Item.Meta 管标题、描述和头像，actions/extra 放操作与侧边内容。`,tab:w,code:me,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(q,{itemLayout:`vertical`,className:`bg-base-100 rounded-box shadow-md`,children:$.slice(0,2).map(e=>b(q.Item,{actions:[x(`button`,{className:`btn btn-xs`,type:`button`,children:`Share`}),x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Save`})],extra:x(`div`,{className:`stats bg-base-200 shadow-sm`,children:b(`div`,{className:`stat py-2 px-4`,children:[x(`div`,{className:`stat-title text-xs`,children:`Plays`}),x(`div`,{className:`stat-value text-sm`,children:e.plays})]})}),children:[x(q.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),x(`p`,{className:`mt-3 mb-0 text-sm opacity-70`,children:e.note})]},e.id))})})});g(()=>d(e,f,P))});let F=e(`rue:component:anchor`);i(f,F),c(()=>{let e=h(J,{title:`分页与加载更多`,summary:`pagination 内置简单分页；loadMore 可放在列表底部承载自定义加载动作。`,tab:T,code:he,preview:()=>x(`div`,{className:`w-full max-w-2xl`,children:x(q,{bordered:!0,className:`bg-base-100 shadow-sm`,dataSource:$,rowKey:`id`,loadMore:x(`div`,{className:`py-1`,children:x(`button`,{className:`btn btn-sm btn-outline`,type:`button`,children:`Load more`})}),pagination:{defaultPageSize:2,position:`bottom`,align:`center`,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e}`},renderItem:e=>x(q.Item,{className:`px-4 py-3`,children:x(q.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:`${e.title} \xb7 ${e.duration}`})},e.id)})})});g(()=>d(e,f,F))});let I=e(`rue:component:anchor`);i(f,I),c(()=>{let e=h(J,{title:`Grid 网格列表`,summary:`grid 提供 column/gutter，用于把同类条目排成卡片网格。`,tab:E,code:ge,preview:()=>x(`div`,{className:`w-full max-w-3xl`,children:x(q,{grid:{column:3,gutter:16},dataSource:$.slice(0,3),rowKey:`id`,renderItem:e=>b(q.Item,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,children:[x(q.Item.Meta,{avatar:x(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),b(`div`,{className:`mt-4 flex items-center justify-between text-xs opacity-70`,children:[b(`span`,{children:[e.plays,` plays`]}),x(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,"aria-label":`More`,children:x(ie,{})})]})]},e.id)})})});g(()=>d(e,f,I))});let te=e(`rue:component:anchor`);i(f,te),c(()=>{let e=h(J,{title:`Loading 与 Empty`,summary:`空数据和加载中状态直接由 List 承接，便于异步列表先搭好骨架。`,tab:ee,code:_e,preview:()=>b(`div`,{className:`grid w-full gap-4 md:grid-cols-2`,children:[x(q,{bordered:!0,loading:{spinning:!0,tip:`Loading tracks`},className:`bg-base-100 shadow-sm`}),x(q,{bordered:!0,dataSource:[],locale:{emptyText:`No tracks yet`},className:`bg-base-100 shadow-sm`})]})});g(()=>d(e,f,te))});let L=r(`h2`,f);i(f,L),i(L,a(`API`));let R=e(`rue:component:anchor`);return i(f,R),c(()=>{let e=h(Y,{rows:se});g(()=>d(e,f,R))}),l})}),p,v),p})};export{ve as default};