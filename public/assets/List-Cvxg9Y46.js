import{$ as e,B as t,Ct as n,D as r,Dt as i,Et as a,G as o,H as s,U as c,W as l,Z as u,ht as d,k as f,l as p,s as m,t as h,wt as g,yt as _}from"./vapor-runtime-C1rlwc61.js";import{a as v,n as y}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as b}from"./Code-BCLFq1E3.js";import{n as x,t as S}from"./src-BLzF0BqW.js";import{n as C}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as w}from"./tabs-BOxm6iIN.js";var T=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,E=e=>typeof e==`number`?`${e}px`:e,D=(e,t)=>e<=1?1:e>=t?t:e,O=e=>!!(e&&typeof e==`object`&&(e.type===`item`||e.type===`row`||e.cols||e.content!==void 0||e.normal!==void 0||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0)),k=e=>{if(e==null||typeof e==`boolean`||Array.isArray(e)||typeof e!=`object`)return e;for(let t of[`content`,`children`,`title`,`label`,`text`,`name`,`description`]){let n=e[t];if(n!=null)return n}try{return JSON.stringify(e)}catch{return String(e)}},A=e=>e==null||Array.isArray(e)&&e.length===0,j=e=>{switch(e){case`small`:case`sm`:return`text-sm`;case`large`:case`lg`:return`text-lg`;default:return}},M=e=>typeof e==`object`?{spinning:e.spinning!==!1,tip:e.tip,indicator:e.indicator}:{spinning:!!e},N=(e,t,n)=>typeof n==`function`?n(e,t):n&&e&&typeof e==`object`?e[n]:e&&typeof e==`object`&&e.key!=null?e.key:`list-item-${t}`,P=e=>{if(e)return e.xxxl??e.xxl??e.xl??e.lg??e.md??e.sm??e.xs??e.column},F=(e,t)=>{if(!e)return t;let n=P(e);return{...t,display:`grid`,gridTemplateColumns:n?`repeat(${n}, minmax(0, 1fr))`:void 0,gap:E(e.gutter)}},I=(e,t,n,r)=>{if(!e)return null;let i=typeof e==`object`?e:{},a=Math.max(1,i.pageSize??r??i.defaultPageSize??10),o=Math.max(1,Math.ceil((i.total??t)/a)),s=D(i.current??n??i.defaultCurrent??1,o);return{...i,current:s,pageSize:a,total:i.total??t,position:i.position??`bottom`,align:i.align??`end`}},L=e=>e?e.map((e,t)=>e.type===`grow`?S(V,{as:e.as,className:e.className,children:e.content},t):S(H,{as:e.as,className:e.className,children:e.content},t)):null,ee=(e,t)=>{let n=e.key??t;return(e.type??(e.cols||e.title!==void 0||e.description!==void 0||e.avatar!==void 0||e.actions!==void 0||e.extra!==void 0?`row`:`item`))===`item`?S(W,{className:e.className,children:e.content},n):e.title||e.description||e.avatar||e.actions||e.extra?x(W,{actions:e.actions,className:e.className,extra:e.extra,children:[S(U,{avatar:e.avatar,title:e.title,description:e.description,children:e.content}),L(e.cols)]},n):x(B,{normal:e.normal,className:e.className,children:[e.content,L(e.cols)]},n)},te=e=>e.spinning?x(`li`,{className:`flex min-h-24 items-center justify-center gap-3 p-6 text-sm opacity-70`,children:[e.indicator??S(`span`,{className:`loading loading-spinner loading-sm`}),e.tip?S(`span`,{children:e.tip}):null]}):null,ne=e=>S(`li`,{className:`p-8 text-center text-sm opacity-60`,children:e??`No data`}),R=(e,t)=>A(e)?null:S(`li`,{className:t,children:e}),re=(e,t,n=`li`)=>{if(!e)return null;let r=n,i=Math.max(1,Math.ceil(e.total/e.pageSize));if(e.hideOnSinglePage&&i<=1)return null;let a=Array.from({length:i},(e,t)=>t+1),o=e.total===0?0:(e.current-1)*e.pageSize+1,s=Math.min(e.current*e.pageSize,e.total);return x(r,{className:T(`flex flex-wrap items-center gap-3 p-3`,e.align===`start`?`justify-start`:e.align===`center`?`justify-center`:`justify-end`),children:[e.showTotal?S(`span`,{className:`mr-auto text-xs opacity-60`,children:e.showTotal(e.total,[o,s])}):null,x(`div`,{className:`join`,children:[S(`button`,{className:T(`join-item btn btn-sm`,e.current<=1&&`btn-disabled`),disabled:e.current<=1,onClick:()=>t(e.current-1),type:`button`,children:`Prev`}),a.map(n=>S(`button`,{className:T(`join-item btn btn-sm`,n===e.current&&`btn-active`),onClick:()=>t(n),type:`button`,children:n},n)),S(`button`,{className:T(`join-item btn btn-sm`,e.current>=i&&`btn-disabled`),disabled:e.current>=i,onClick:()=>t(e.current+1),type:`button`,children:`Next`})]})]})},z=({bordered:e,className:t,children:i,dataSource:o,emptyText:s,footer:c,grid:l,header:u,itemLayout:p=`horizontal`,items:m,loading:h,loadMore:g,locale:_,pagination:v,renderItem:y,rowKey:b,size:C,split:w=!0,style:E,...P})=>{let L=M(h),z=d(typeof v==`object`?v.defaultCurrent??v.current??1:1),B=d(typeof v==`object`?v.defaultPageSize??v.pageSize??10:10),V=n(),H=n(),U=n(),G=Array.isArray(o),K=G?o:m,q=!!v,J=`list`;e&&(J+=` border border-base-300 rounded-box overflow-hidden`),l&&(J+=` grid`),w||(J+=` list-no-split`),p===`vertical`&&(J+=` list-vertical`),J=T(J,j(C),t)??`list`;let Y=(e,t)=>e?.map((e,n)=>{let r=t?(t.current-1)*t.pageSize+n:n,i=N(e,r,b);return G&&y?y(e,r):O(e)?ee(e,r):S(W,{itemLayout:p,children:k(e)},i)}),X=()=>I(v,K?.length??0,z.value,B.value),ie=e=>!K||!e?K:K.slice((e.current-1)*e.pageSize,e.current*e.pageSize),Z=()=>{if(!q)return;let e=X(),t=L.spinning?te(L):K&&K.length===0?ne(_?.emptyText??s):Y(ie(e),e);V.current&&f(t??null,V.current),H.current&&f(e&&(e.position===`top`||e.position===`both`)?re(e,Q,`div`):null,H.current),U.current&&f(e&&(e.position===`bottom`||e.position===`both`)?re(e,Q,`div`):null,U.current)},Q=e=>{let t=X();if(!t)return;let n=D(e,Math.max(1,Math.ceil(t.total/t.pageSize)));typeof v==`object`&&v.current===void 0&&(z.value=n),B.value=t.pageSize,t.onChange&&t.onChange(n,t.pageSize),Z()};if(r(Z),a(()=>[z.value,B.value,K?.length,L.spinning],Z),q){let n=T(`rue-list`,e&&`border border-base-300 rounded-box overflow-hidden`,t),r=T(`list`,l&&`grid`,!w&&`list-no-split`,p===`vertical`&&`list-vertical`,j(C));return x(`div`,{...P,className:n,style:l?void 0:E,children:[S(`div`,{ref:H}),A(u)?null:S(`div`,{className:`p-4 pb-2 text-sm font-medium opacity-70`,children:u}),S(`ul`,{ref:V,className:r,style:F(l,l?E:void 0)}),A(c)?null:S(`div`,{className:`p-4 pt-2 text-sm opacity-70`,children:c}),A(g)?null:S(`div`,{className:`p-3 text-center`,children:g}),S(`div`,{ref:U})]})}return x(`ul`,{...P,className:J,style:F(l,E),children:[R(u,`p-4 pb-2 text-sm font-medium opacity-70`),L.spinning?te(L):null,!L.spinning&&K&&K.length===0?ne(_?.emptyText??s):null,!L.spinning&&K&&K.length>0&&Y(K,null),!G&&!m?i:null,R(c,`p-4 pt-2 text-sm opacity-70`),R(g,`p-3 text-center`)]})},B=({normal:e,className:t,children:n,...r})=>e?S(`li`,{...r,className:t||void 0,children:n}):S(`li`,{...r,className:T(`list-row`,t),children:n}),V=({as:e=`div`,className:t,children:n,...r})=>S(e,{...r,className:T(`list-col-grow`,t),children:n}),H=({as:e=`div`,className:t,children:n,...r})=>S(e,{...r,className:T(`list-col-wrap`,t),children:n}),U=({avatar:e,className:t,description:n,title:r,children:i,...a})=>x(`div`,{...a,className:T(`flex min-w-0 flex-1 items-start gap-3`,t),children:[e?S(`div`,{className:`shrink-0`,children:e}):null,x(`div`,{className:`min-w-0 flex-1`,children:[r?S(`div`,{className:`font-medium`,children:r}):null,n?S(`div`,{className:`text-sm opacity-70`,children:n}):null,i]})]}),W=({actions:e,className:t,classNames:n,extra:r,itemLayout:i=`horizontal`,styles:a,children:o,...s})=>{let c=!!e&&e.length>0,l=!A(r);if(!c&&!l)return S(`li`,{...s,className:t||void 0,children:o});let u=i===`vertical`;return x(`li`,{...s,className:T(`list-row`,u&&`items-start`,l&&!u&&`grid-cols-[1fr_auto]`,t),children:[x(`div`,{className:`min-w-0 flex-1`,children:[o,c?S(`ul`,{className:T(`mt-3 flex flex-wrap items-center gap-2 text-sm opacity-80`,n?.actions),style:a?.actions,children:e.map((e,t)=>S(`li`,{children:e},t))}):null]}),l?S(`div`,{className:T(`list-col-wrap`,n?.extra),style:a?.extra,children:r}):null]})},G=Object.assign(W,{Meta:U}),K=Object.assign(z,{Row:B,ColGrow:V,ColWrap:H,Item:G}),q=n=>p(r=>{let a=l(`div`,r);e(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=l(`div`,a);t(a,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=l(`div`,u);t(u,d);let f=l(`h2`,d);t(d,f),e(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(f,o(`# `));let g=s(`rue:slot:anchor`);t(f,g),i(()=>{let e=n.title;_(()=>m(e,f,g))});let v=s(`rue:slot:anchor`);t(d,v),i(()=>{let r=n.summary?p(()=>{let r=c(),a=l(`p`,r);t(r,a),e(a,`m-0 text-sm opacity-70`);let o=s(`rue:slot:anchor`);return t(a,o),i(()=>{let e=n.summary;_(()=>m(e,a,o))}),r}):``;_(()=>m(r,d,v))});let y=s(`rue:component:anchor`);t(a,y),i(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});_(()=>m(e,a,y))});let x=s(`rue:slot:anchor`);return t(a,x),i(()=>{let e=n.tab.value===`preview`?n.preview():p(()=>{let e=c(),r=s(`rue:component:anchor`);return t(e,r),i(()=>{let t=h(b,{className:`mt-2`,lang:`tsx`,code:n.code});_(()=>m(t,e,r))}),e});_(()=>m(e,a,x))}),a}),J=n=>p(r=>{let a=l(`div`,r);e(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=l(`table`,a);t(a,d),e(d,`table table-zebra`);let f=l(`thead`,d);t(d,f);let h=l(`tr`,f);t(f,h);let g=l(`th`,h);t(h,g),t(g,o(`属性`));let v=l(`th`,h);t(h,v),t(v,o(`说明`));let b=l(`th`,h);t(h,b),t(b,o(`类型`));let x=l(`th`,h);t(h,x),t(x,o(`默认值`));let S=l(`tbody`,d);t(d,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return i(()=>{T=y({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,a,o)=>{m(p(()=>{let n=c(),r=l(`tr`,n);t(n,r),i(()=>{u(r,`key`,String(e.prop))});let a=l(`td`,r);t(r,a);let o=l(`code`,a);t(a,o);let d=s(`rue:slot:anchor`);t(o,d),i(()=>{let t=e.prop;_(()=>m(t,o,d))});let f=l(`td`,r);t(r,f);let p=s(`rue:slot:anchor`);t(f,p),i(()=>{let t=e.description;_(()=>m(t,f,p))});let h=l(`td`,r);t(r,h);let g=l(`code`,h);t(h,g);let v=s(`rue:slot:anchor`);t(g,v),i(()=>{let t=e.type;_(()=>m(t,g,v))});let y=l(`td`,r);t(r,y);let b=l(`code`,y);t(y,b);let x=s(`rue:slot:anchor`);return t(b,x),i(()=>{let t=e.defaultValue;_(()=>m(t,b,x))}),n}),n,r)}})}),a}),Y=()=>p(n=>{let r=l(`svg`,n);e(r,`size-[1.2em]`),u(r,`xmlns`,`http://www.w3.org/2000/svg`),u(r,`viewBox`,`0 0 24 24`),u(r,`fill`,`none`),u(r,`stroke`,`currentColor`),u(r,`strokeWidth`,`2`);let i=l(`path`,r);return t(r,i),u(i,`strokeLinecap`,`round`),u(i,`strokeLinejoin`,`round`),u(i,`d`,`M6 3 20 12 6 21V3Z`),r}),X=()=>p(n=>{let r=l(`svg`,n);e(r,`size-[1.2em]`),u(r,`xmlns`,`http://www.w3.org/2000/svg`),u(r,`viewBox`,`0 0 24 24`),u(r,`fill`,`none`),u(r,`stroke`,`currentColor`),u(r,`strokeWidth`,`2`);let i=l(`path`,r);return t(r,i),u(i,`strokeLinecap`,`round`),u(i,`strokeLinejoin`,`round`),u(i,`d`,`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`),r}),ie=()=>p(n=>{let r=l(`svg`,n);e(r,`size-[1.2em]`),u(r,`xmlns`,`http://www.w3.org/2000/svg`),u(r,`viewBox`,`0 0 24 24`),u(r,`fill`,`none`),u(r,`stroke`,`currentColor`),u(r,`strokeWidth`,`2`);let i=l(`path`,r);return t(r,i),u(i,`strokeLinecap`,`round`),u(i,`strokeLinejoin`,`round`),u(i,`d`,`M12 12h.01M19 12h.01M5 12h.01`),r}),Z=t=>p(n=>{let r=l(`img`,n);return e(r,`size-10 rounded-box object-cover`),i(()=>{u(r,`src`,String(t.src))}),i(()=>{u(r,`alt`,String(t.alt))}),r}),Q=()=>p(n=>{let r=c(),i=l(`button`,r);t(r,i),e(i,`btn btn-square btn-ghost`),u(i,`type`,`button`),u(i,`aria-label`,`Play`);let a=s(`rue:component:anchor`);t(i,a),m(h(Y,{}),i,a);let o=l(`button`,r);t(r,o),e(o,`btn btn-square btn-ghost`),u(o,`type`,`button`),u(o,`aria-label`,`Favorite`);let d=s(`rue:component:anchor`);return t(o,d),m(h(X,{}),o,d),r}),$=[{id:`dio-lupa`,rank:`01`,artist:`Dio Lupa`,title:`Remaining Reason`,image:`https://img.daisyui.com/images/profile/demo/1@94.webp`,note:`Remaining Reason became an instant hit, praised for its haunting sound and emotional depth.`,duration:`3:42`,plays:`248K`},{id:`ellie-beilish`,rank:`02`,artist:`Ellie Beilish`,title:`Bears of a fever`,image:`https://img.daisyui.com/images/profile/demo/4@94.webp`,note:`Bears of a Fever pairs restless percussion with a chorus built for repeat plays.`,duration:`4:05`,plays:`221K`},{id:`sabrino-gardener`,rank:`03`,artist:`Sabrino Gardener`,title:`Cappuccino`,image:`https://img.daisyui.com/images/profile/demo/3@94.webp`,note:`Cappuccino keeps the melody smooth while the hook does the heavy lifting.`,duration:`2:58`,plays:`198K`},{id:`mira-lane`,rank:`04`,artist:`Mira Lane`,title:`Window Seat`,image:`https://img.daisyui.com/images/profile/demo/2@94.webp`,note:`Window Seat turns a late train ride into a tiny cinematic pop song.`,duration:`3:16`,plays:`166K`},{id:`noah-drift`,rank:`05`,artist:`Noah Drift`,title:`Low Tide Letters`,image:`https://img.daisyui.com/images/profile/demo/5@94.webp`,note:`Low Tide Letters is quiet, patient, and built around a warm guitar loop.`,duration:`3:37`,plays:`152K`}],ae=[{type:`item`,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,content:`Most played songs this week`},...$.slice(0,3).map(e=>({type:`row`,content:[S(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),S(`div`,{children:S(Z,{src:e.image,alt:`${e.artist} cover`})})],cols:[{type:`grow`,content:x(`div`,{children:[S(`div`,{children:e.artist}),S(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]})}]}))],oe=[{type:`item`,content:S(`div`,{className:`px-4 pt-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`})},...$.slice(0,3).map(e=>({key:e.id,className:`px-4 py-3`,title:e.artist,description:`${e.title} \xb7 ${e.duration}`,extra:`${e.plays} plays`}))],se=[{prop:`children`,description:`直接传入自定义 li、List.Row、List.Item 等内容`,type:`any`,defaultValue:`-`},{prop:`items`,description:`兼容旧版 Rue 数据结构，支持 item、row、cols`,type:`ListDataItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据源驱动的数组入口，通常搭配 renderItem`,type:`any[]`,defaultValue:`-`},{prop:`renderItem`,description:`自定义 dataSource 中每一项的渲染内容`,type:`(item, index) => any`,defaultValue:`-`},{prop:`rowKey`,description:`列表项 key，可传字段名或函数`,type:`string | (item, index) => string | number`,defaultValue:`key`},{prop:`header / footer`,description:`列表头部和底部内容`,type:`any`,defaultValue:`-`},{prop:`loading`,description:`加载态，支持 boolean 或 { spinning, tip, indicator }`,type:`boolean | object`,defaultValue:`false`},{prop:`pagination`,description:`分页配置，支持 current、pageSize、position、align、showTotal`,type:`boolean | ListPaginationConfig | false`,defaultValue:`false`},{prop:`grid`,description:`网格列表配置，支持 column 与 gutter`,type:`{ column?: number; gutter?: number | string }`,defaultValue:`-`},{prop:`itemLayout`,description:`列表项布局语义，vertical 会让 extra/actions 更适合图文内容`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`bordered / split / size`,description:`边框、分割与尺寸控制`,type:`boolean / boolean / ListSize`,defaultValue:`false / true / default`},{prop:`List.Item`,description:`支持 actions、extra、classNames、styles，并包含 List.Item.Meta`,type:`compound component`,defaultValue:`-`}],ce=`import { List } from '@rue-js/design';

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
</div>`,ve=()=>{let{tabBasic:n,tabGrow:r,tabManualArray:a,tabInternalArray:u,tabWrap:f,tabDataSource:y,tabVertical:b,tabPagination:w,tabGrid:T,tabState:E}=v(`useSetup:0:0`,()=>g(()=>({tabBasic:v(`ref:1:0`,()=>d(`preview`)),tabGrow:v(`ref:1:1`,()=>d(`preview`)),tabManualArray:v(`ref:1:2`,()=>d(`preview`)),tabInternalArray:v(`ref:1:3`,()=>d(`preview`)),tabWrap:v(`ref:1:4`,()=>d(`preview`)),tabDataSource:v(`ref:1:5`,()=>d(`preview`)),tabVertical:v(`ref:1:6`,()=>d(`preview`)),tabPagination:v(`ref:1:7`,()=>d(`preview`)),tabGrid:v(`ref:1:8`,()=>d(`preview`)),tabState:v(`ref:1:9`,()=>d(`preview`))})));return p(d=>{let g=c(),v=s(`rue:component:anchor`);return t(g,v),m(h(C,{children:p(()=>{let d=c(),p=l(`div`,d);t(d,p),e(p,`max-w-none prose prose-sm md:prose-base`);let g=l(`h1`,p);t(p,g),t(g,o(`List 列表`));let v=l(`p`,p);t(p,v),e(v,`text-sm mt-3 mb-3`),t(v,o(`列表用于以行或网格的形式展示同类信息。Rue 的 List 保留 daisyUI 的轻量视觉，并补充 dataSource、renderItem、Meta、actions、extra、分页、加载和空态等能力。`));let C=s(`rue:component:anchor`);t(p,C),i(()=>{let e=h(q,{title:`List（第二列默认填充剩余空间）`,summary:`保留原始组合式写法，适合快速拼装一组紧凑行。`,tab:n,code:ce,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:x(K,{className:`bg-base-100 rounded-box shadow-md`,children:[S(K.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>x(K.Row,{children:[S(`div`,{children:S(Z,{src:e.image,alt:`${e.artist} cover`})}),x(`div`,{children:[S(`div`,{children:e.artist}),S(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),S(Q,{})]},e.id))]})})});_(()=>m(e,p,C))});let D=s(`rue:component:anchor`);t(p,D),i(()=>{let e=h(q,{title:`List（第三列填充剩余空间）`,summary:`使用 List.ColGrow 显式控制哪一列占据剩余宽度。`,tab:r,code:le,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:x(K,{className:`bg-base-100 rounded-box shadow-md`,children:[S(K.Row,{normal:!0,className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>x(K.Row,{children:[S(`div`,{className:`text-4xl font-thin opacity-30 tabular-nums`,children:e.rank}),S(`div`,{children:S(Z,{src:e.image,alt:`${e.artist} cover`})}),x(K.ColGrow,{children:[S(`div`,{children:e.artist}),S(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),S(`button`,{className:`btn btn-square btn-ghost`,type:`button`,"aria-label":`Play`,children:S(Y,{})})]},e.id))]})})});_(()=>m(e,p,D))});let O=s(`rue:component:anchor`);t(p,O),i(()=>{let e=h(q,{title:`List 通过数据渲染（数组）`,summary:`保留旧 demo 的手动 map 方式，适合完全掌控每一行结构。`,tab:a,code:ue,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:S(K,{className:`bg-base-100 rounded-box shadow-md`,children:ae.map((e,t)=>e.type===`item`?S(K.Item,{className:e.className,children:e.content},t):x(K.Row,{children:[e.content,e.cols?.map((e,t)=>e.type===`grow`?S(K.ColGrow,{as:e.as,className:e.className,children:e.content},t):S(K.ColWrap,{as:e.as,className:e.className,children:e.content},t))]},t))})})});_(()=>m(e,p,O))});let k=s(`rue:component:anchor`);t(p,k),i(()=>{let e=h(q,{title:`List 通过数据渲染（数组，组件内部）`,summary:`items 仍然可用，适合用纯数据配置直接生成 Meta 与侧边信息。`,tab:u,code:de,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:S(K,{items:oe,className:`bg-base-100 rounded-box shadow-md`})})});_(()=>m(e,p,k))});let A=s(`rue:component:anchor`);t(p,A),i(()=>{let e=h(q,{title:`List（第三列换行至下一行）`,summary:`List.ColWrap 用于长文本、说明或次级信息换行展示。`,tab:f,code:fe,preview:()=>S(`div`,{className:`w-full max-w-lg`,children:x(K,{className:`bg-base-100 rounded-box shadow-md`,children:[S(K.Item,{className:`p-4 pb-2 text-xs opacity-60 tracking-wide`,children:`Most played songs this week`}),$.slice(0,3).map(e=>x(K.Row,{children:[S(`div`,{children:S(Z,{src:e.image,alt:`${e.artist} cover`})}),x(`div`,{children:[S(`div`,{children:e.artist}),S(`div`,{className:`text-xs uppercase font-semibold opacity-60`,children:e.title})]}),S(K.ColWrap,{as:`p`,className:`text-xs`,children:e.note}),S(Q,{})]},e.id))]})})});_(()=>m(e,p,A))});let j=s(`rue:component:anchor`);t(p,j),i(()=>{let e=h(q,{title:`dataSource 与 renderItem`,summary:`新增数据源驱动的列表 API，适合业务列表统一从数据源渲染。`,tab:y,code:pe,preview:()=>S(`div`,{className:`w-full max-w-2xl`,children:S(K,{bordered:!0,header:S(`span`,{children:`Release queue`}),footer:S(`span`,{children:`Synced 2 minutes ago`}),dataSource:$.slice(0,4),rowKey:`id`,className:`bg-base-100 shadow-sm`,renderItem:e=>S(K.Item,{actions:[S(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Review`}),S(`button`,{className:`btn btn-xs btn-primary`,type:`button`,children:`Publish`})],extra:S(`span`,{className:`badge badge-soft`,children:e.duration}),children:S(K.Item.Meta,{avatar:S(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title})},e.id)})})});_(()=>m(e,p,j))});let M=s(`rue:component:anchor`);t(p,M),i(()=>{let e=h(q,{title:`Meta、actions 与 extra`,summary:`List.Item.Meta 管标题、描述和头像，actions/extra 放操作与侧边内容。`,tab:b,code:me,preview:()=>S(`div`,{className:`w-full max-w-2xl`,children:S(K,{itemLayout:`vertical`,className:`bg-base-100 rounded-box shadow-md`,children:$.slice(0,2).map(e=>x(K.Item,{actions:[S(`button`,{className:`btn btn-xs`,type:`button`,children:`Share`}),S(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,children:`Save`})],extra:S(`div`,{className:`stats bg-base-200 shadow-sm`,children:x(`div`,{className:`stat py-2 px-4`,children:[S(`div`,{className:`stat-title text-xs`,children:`Plays`}),S(`div`,{className:`stat-value text-sm`,children:e.plays})]})}),children:[S(K.Item.Meta,{avatar:S(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-70`,children:e.note})]},e.id))})})});_(()=>m(e,p,M))});let N=s(`rue:component:anchor`);t(p,N),i(()=>{let e=h(q,{title:`分页与加载更多`,summary:`pagination 内置简单分页；loadMore 可放在列表底部承载自定义加载动作。`,tab:w,code:he,preview:()=>S(`div`,{className:`w-full max-w-2xl`,children:S(K,{bordered:!0,className:`bg-base-100 shadow-sm`,dataSource:$,rowKey:`id`,loadMore:S(`div`,{className:`py-1`,children:S(`button`,{className:`btn btn-sm btn-outline`,type:`button`,children:`Load more`})}),pagination:{defaultPageSize:2,position:`bottom`,align:`center`,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e}`},renderItem:e=>S(K.Item,{className:`px-4 py-3`,children:S(K.Item.Meta,{avatar:S(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:`${e.title} \xb7 ${e.duration}`})},e.id)})})});_(()=>m(e,p,N))});let P=s(`rue:component:anchor`);t(p,P),i(()=>{let e=h(q,{title:`Grid 网格列表`,summary:`grid 提供 column/gutter，用于把同类条目排成卡片网格。`,tab:T,code:ge,preview:()=>S(`div`,{className:`w-full max-w-3xl`,children:S(K,{grid:{column:3,gutter:16},dataSource:$.slice(0,3),rowKey:`id`,renderItem:e=>x(K.Item,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,children:[S(K.Item.Meta,{avatar:S(Z,{src:e.image,alt:`${e.artist} cover`}),title:e.artist,description:e.title}),x(`div`,{className:`mt-4 flex items-center justify-between text-xs opacity-70`,children:[x(`span`,{children:[e.plays,` plays`]}),S(`button`,{className:`btn btn-xs btn-ghost`,type:`button`,"aria-label":`More`,children:S(ie,{})})]})]},e.id)})})});_(()=>m(e,p,P))});let F=s(`rue:component:anchor`);t(p,F),i(()=>{let e=h(q,{title:`Loading 与 Empty`,summary:`空数据和加载中状态直接由 List 承接，便于异步列表先搭好骨架。`,tab:E,code:_e,preview:()=>x(`div`,{className:`grid w-full gap-4 md:grid-cols-2`,children:[S(K,{bordered:!0,loading:{spinning:!0,tip:`Loading tracks`},className:`bg-base-100 shadow-sm`}),S(K,{bordered:!0,dataSource:[],locale:{emptyText:`No tracks yet`},className:`bg-base-100 shadow-sm`})]})});_(()=>m(e,p,F))});let I=l(`h2`,p);t(p,I),t(I,o(`API`));let L=s(`rue:component:anchor`);return t(p,L),i(()=>{let e=h(J,{rows:se});_(()=>m(e,p,L))}),d})}),g,v),g})};export{ve as default};