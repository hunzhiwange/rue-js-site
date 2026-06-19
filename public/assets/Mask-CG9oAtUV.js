import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,gt as s,l as c,lt as l,o as u,st as d,t as f,tt as p,vt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g,n as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as v,i as y}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as b}from"./Code-BIscIyEp.js";import{t as x}from"./tabs-CZWMQq5i.js";import{r as S}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>Array.isArray(e)?e.some(e=>w(e)):e!=null&&e!==!1,T=e=>{if(e)return e===`start`?`1`:e===`end`?`2`:e},E=e=>{switch(e){case`xs`:return`size-12`;case`sm`:case`small`:return`size-16`;case`md`:case`middle`:case`medium`:return`size-24`;case`lg`:case`large`:return`size-32`;case`xl`:return`size-40`;case`2xl`:return`size-52`;case`3xl`:return`size-64`;default:return}},D=e=>{switch(e){case`top`:return`object-top`;case`bottom`:return`object-bottom`;case`left`:return`object-left`;case`right`:return`object-right`;case`top-left`:return`object-left-top`;case`top-right`:return`object-right-top`;case`bottom-left`:return`object-left-bottom`;case`bottom-right`:return`object-right-bottom`;default:return e?`object-center`:void 0}},O=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},k=e=>{switch(e){case`neutral`:return`bg-neutral text-neutral-content`;case`primary`:return`bg-primary text-primary-content`;case`secondary`:return`bg-secondary text-secondary-content`;case`accent`:return`bg-accent text-accent-content`;case`info`:return`bg-info text-info-content`;case`success`:return`bg-success text-success-content`;case`warning`:return`bg-warning text-warning-content`;case`error`:return`bg-error text-error-content`;case`base`:return`bg-base-200 text-base-content`;default:return}},A=e=>{switch(e){case`neutral`:return`ring-neutral/35`;case`primary`:return`ring-primary/35`;case`secondary`:return`ring-secondary/35`;case`accent`:return`ring-accent/35`;case`info`:return`ring-info/35`;case`success`:return`ring-success/35`;case`warning`:return`ring-warning/35`;case`error`:return`ring-error/35`;default:return`ring-base-300`}},j=({shape:e,half:t,size:n,fit:r,position:i,tone:a,bordered:o,ring:s,shadow:c,interactive:l})=>{let u=`mask mask-${e??`squircle`}`,d=T(t),f=E(n),p=O(r),m=D(i),h=k(a);return d&&(u+=` mask-half-${d}`),f&&(u+=` ${f}`),p&&(u+=` ${p}`),m&&(u+=` ${m}`),h&&(u+=` ${h}`),o&&(u+=` ring-1 ring-inset ring-base-300/80`),s&&(u+=` ring-2 ring-offset-2 ring-offset-base-100 ${A(a)}`),c&&(u+=` shadow-xl shadow-base-content/10`),l&&(u+=` transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl`),u},M=f=>{let{__rue_rest_omit_0:p,__rue_rest_omit_1:h,__rue_rest_omit_2:_,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:T,__rue_rest_omit_9:E,__rue_rest_omit_10:D,__rue_rest_omit_11:O,__rue_rest_omit_12:k,__rue_rest_omit_13:A,__rue_rest_omit_14:M,__rue_rest_omit_15:N,__rue_rest_omit_16:P,__rue_rest_omit_17:F,__rue_rest_omit_18:I,__rue_rest_omit_19:L,__rue_rest_omit_20:R,__rue_rest_omit_21:z,rest:B,cls:V,contentNode:H,mediaMode:U}=g(`useSetup:0:0`,()=>a(()=>{let{as:e,shape:t,half:n,size:r,fit:i,position:a,tone:o,bordered:s,ring:c,shadow:l,interactive:u,src:d,alt:p,imageProps:h,wrapperClassName:_,imageClassName:v,content:y,contentClassName:b,caption:x,captionClassName:S,className:C,children:T,...E}=f,D=g(`computed:1:0`,()=>m(()=>j({shape:f.shape===void 0?`squircle`:f.shape,half:f.half,size:f.size,fit:f.fit===void 0?`cover`:f.fit,position:f.position,tone:f.tone,bordered:f.bordered,ring:f.ring,shadow:f.shadow,interactive:f.interactive}))),O=g(`computed:1:1`,()=>m(()=>f.content??f.children)),k=O;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:o,__rue_rest_omit_7:s,__rue_rest_omit_8:c,__rue_rest_omit_9:l,__rue_rest_omit_10:u,__rue_rest_omit_11:d,__rue_rest_omit_12:p,__rue_rest_omit_13:h,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:T,rest:E,cls:D,contentNode:O,mediaMode:g(`computed:1:2`,()=>m(()=>!!f.src&&(w(k.get())||f.caption!=null||f.wrapperClassName!=null||f.imageClassName!=null||f.contentClassName!=null||f.captionClassName!=null||(f.as===void 0?`img`:f.as)===`figure`)))}}));if(U.get()){let a=C(`relative inline-flex flex-col items-center gap-3`,f.wrapperClassName);return(f.as===void 0?`img`:f.as)===`div`?c(p=>{let m=o(`div`,p);n(()=>{s(m,B)}),n(()=>{l(m,a)});let h=o(`div`,m);i(m,h),l(h,`relative inline-flex`);let g=o(`img`,h);i(h,g),n(()=>{s(g,f.imageProps)}),n(()=>{d(g,`src`,String(f.src))}),n(()=>{d(g,`alt`,String(f.alt))}),n(()=>{l(g,C(C(V.get(),f.className),f.imageClassName))});let _=t(`rue:slot:anchor`);i(h,_),n(()=>{let a=w(H.get())?c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,C(`absolute inset-0 grid place-items-center p-4 text-center`,f.contentClassName))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=H.get();r(()=>u(e,s,c))}),a}):``;r(()=>u(a,h,_))});let v=t(`rue:slot:anchor`);return i(m,v),n(()=>{let a=f.caption==null?``:c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,C(`text-center text-sm opacity-70`,f.captionClassName))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=f.caption;r(()=>u(e,s,c))}),a});r(()=>u(a,m,v))}),m}):c(p=>{let m=o(`figure`,p);n(()=>{s(m,B)}),n(()=>{l(m,a)});let h=o(`div`,m);i(m,h),l(h,`relative inline-flex`);let g=o(`img`,h);i(h,g),n(()=>{s(g,f.imageProps)}),n(()=>{d(g,`src`,String(f.src))}),n(()=>{d(g,`alt`,String(f.alt))}),n(()=>{l(g,C(C(V.get(),f.className),f.imageClassName))});let _=t(`rue:slot:anchor`);i(h,_),n(()=>{let a=w(H.get())?c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,C(`absolute inset-0 grid place-items-center p-4 text-center`,f.contentClassName))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=H.get();r(()=>u(e,s,c))}),a}):``;r(()=>u(a,h,_))});let v=t(`rue:slot:anchor`);return i(m,v),n(()=>{let a=f.caption==null?``:c(()=>{let a=e(),s=o(`figcaption`,a);i(a,s),n(()=>{l(s,C(`text-center text-sm opacity-70`,f.captionClassName))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=f.caption;r(()=>u(e,s,c))}),a});r(()=>u(a,m,v))}),m})}let W=C(V.get(),f.className);return(f.as===void 0?`img`:f.as)===`div`?c(e=>{let a=o(`div`,e);n(()=>{s(a,B)}),n(()=>{l(a,W)});let c=t(`rue:children:anchor`);return i(a,c),n(()=>{let e=f.children;r(()=>u(e,a,c))}),a}):(f.as===void 0?`img`:f.as)===`span`?c(e=>{let a=o(`span`,e);n(()=>{s(a,B)}),n(()=>{l(a,W)});let c=t(`rue:children:anchor`);return i(a,c),n(()=>{let e=f.children;r(()=>u(e,a,c))}),a}):(f.as===void 0?`img`:f.as)===`figure`?c(e=>{let a=o(`figure`,e);n(()=>{s(a,B)}),n(()=>{l(a,W)});let c=t(`rue:children:anchor`);return i(a,c),n(()=>{let e=f.children;r(()=>u(e,a,c))}),a}):(f.as===void 0?`img`:f.as)===`section`?c(e=>{let a=o(`section`,e);n(()=>{s(a,B)}),n(()=>{l(a,W)});let c=t(`rue:children:anchor`);return i(a,c),n(()=>{let e=f.children;r(()=>u(e,a,c))}),a}):(f.as===void 0?`img`:f.as)===`article`?c(e=>{let a=o(`article`,e);n(()=>{s(a,B)}),n(()=>{l(a,W)});let c=t(`rue:children:anchor`);return i(a,c),n(()=>{let e=f.children;r(()=>u(e,a,c))}),a}):(f.as===void 0?`img`:f.as)===`a`?c(e=>{let a=o(`a`,e);n(()=>{s(a,B)}),n(()=>{l(a,W)});let c=t(`rue:children:anchor`);return i(a,c),n(()=>{let e=f.children;r(()=>u(e,a,c))}),a}):(f.as===void 0?`img`:f.as)===`button`?c(e=>{let a=o(`button`,e);n(()=>{s(a,B)}),n(()=>{l(a,W)});let c=t(`rue:children:anchor`);return i(a,c),n(()=>{let e=f.children;r(()=>u(e,a,c))}),a}):c(e=>{let t=o(`img`,e);return n(()=>{s(t,B)}),n(()=>{d(t,`src`,String(f.src))}),n(()=>{d(t,`alt`,String(f.alt))}),n(()=>{l(t,W)}),t})},N=`https://picsum.photos/320/320?grayscale`,P=`https://picsum.photos/420/240?grayscale`,F=`https://picsum.photos/240/420?grayscale`,I=[`squircle`,`heart`,`hexagon`,`hexagon-2`,`decagon`,`pentagon`,`diamond`,`square`,`circle`],L=[`star`,`star-2`],R=[`triangle`,`triangle-2`,`triangle-3`,`triangle-4`],z=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],B=[{label:`cover`,fit:`cover`,src:P},{label:`contain`,fit:`contain`,src:F},{label:`fill`,fit:`fill`,src:P}],V=[{label:`Base`,tone:`base`},{label:`Primary`,tone:`primary`},{label:`Secondary`,tone:`secondary`},{label:`Accent`,tone:`accent`},{label:`Success`,tone:`success`},{label:`Warning`,tone:`warning`}],H=[{prop:`as`,description:`指定渲染标签，默认输出 img，也可渲染 div、figure 等任意宿主元素`,type:`string`,defaultValue:`'img'`},{prop:`shape`,description:`遮罩形状，覆盖当前支持的全部 mask-* 造型`,type:`'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,defaultValue:`'squircle'`},{prop:`half`,description:`半边遮罩；支持数字写法，也支持 start / end 语义别名`,type:`'1' | '2' | 'start' | 'end'`,defaultValue:`-`},{prop:`size`,description:`语义尺寸，映射到一组常用正方形尺寸 class`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,defaultValue:`-`},{prop:`fit`,description:`媒体内容适配模式，输出 object-* 类名`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`'cover'`},{prop:`tone`,description:`给非图片宿主补齐背景与前景色，方便做头像牌、数字徽记和内容卡片`,type:`'base' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`-`},{prop:`bordered`,description:`追加轻量内描边，适合浅背景图片或卡片`,type:`boolean`,defaultValue:`false`},{prop:`ring`,description:`追加 ring 与 offset，tone 存在时会自动继承对应的环颜色`,type:`boolean`,defaultValue:`false`},{prop:`shadow`,description:`追加投影，适合头像、封面和内容模块`,type:`boolean`,defaultValue:`false`},{prop:`interactive`,description:`追加轻量 hover 动效，方便做可点击素材墙或精选卡片`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`透传自定义样式类，可与组件生成的 mask 类叠加`,type:`string`,defaultValue:`-`}],U=a=>c(s=>{let d=o(`div`,s);l(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,d);i(d,m),l(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);i(m,h);let g=o(`h2`,h);i(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,p(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>u(e,g,_))});let v=t(`rue:slot:anchor`);i(h,v),n(()=>{let s=a.summary?c(()=>{let s=e(),c=o(`p`,s);i(s,c),l(c,`m-0 text-sm opacity-70`);let d=t(`rue:slot:anchor`);return i(c,d),n(()=>{let e=a.summary;r(()=>u(e,c,d))}),s}):``;r(()=>u(s,h,v))});let y=t(`rue:component:anchor`);i(d,y),n(()=>{let e=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>u(e,d,y))});let S=t(`rue:slot:anchor`);return i(d,S),n(()=>{let o=a.tab.value===`preview`?a.preview():c(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=f(b,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>u(e,o,s))}),o});r(()=>u(o,d,S))}),d}),W=a=>c(s=>{let f=o(`div`,s);l(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);i(f,m),l(m,`table table-zebra`);let h=o(`thead`,m);i(m,h);let g=o(`tr`,h);i(h,g);let v=o(`th`,g);i(g,v),i(v,p(`属性`));let y=o(`th`,g);i(g,y),i(y,p(`说明`));let b=o(`th`,g);i(g,b),i(b,p(`类型`));let x=o(`th`,g);i(g,x),i(x,p(`默认值`));let S=o(`tbody`,m);i(m,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,l,f,p)=>{u(c(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{d(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let f=o(`code`,l);i(l,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.prop;r(()=>u(e,f,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>u(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>u(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>u(e,b,x))}),s}),s,l)}})}),f}),G=()=>{let{tabShapes:s,tabStars:d,tabTriangles:m,tabHalf:_,tabSize:b,tabFit:x,tabTone:C}=g(`useSetup:0:0`,()=>a(()=>({tabShapes:g(`ref:1:0`,()=>h(`preview`)),tabStars:g(`ref:1:1`,()=>h(`preview`)),tabTriangles:g(`ref:1:2`,()=>h(`preview`)),tabHalf:g(`ref:1:3`,()=>h(`preview`)),tabSize:g(`ref:1:4`,()=>h(`preview`)),tabFit:g(`ref:1:5`,()=>h(`preview`)),tabTone:g(`ref:1:6`,()=>h(`preview`))})));return c(a=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),u(f(S,{children:c(()=>{let a=e(),c=o(`div`,a);i(a,c),l(c,`max-w-none prose prose-sm md:prose-base`);let h=o(`h1`,c);i(c,h),i(h,p(`Mask 形状裁切`));let g=o(`p`,c);i(c,g),l(g,`text-sm mt-3 mb-3`),i(g,p(`Mask 现在不只是原始 class 的薄封装。它保留 Rue 的轻量视觉路线，同时补上尺寸、fit、tone、ring 与交互态这些更适合实际页面搭建的语义化能力。`));let S=t(`rue:component:anchor`);i(c,S),n(()=>{let e=f(U,{title:`Core shapes`,summary:`保留原有基础形状示例，并统一到更整洁的卡片布局里。`,tab:s,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-4`,"data-testid":`mask-shapes-demo`,children:I.map(e=>y(M,{shape:e,src:N,alt:e,size:`md`,bordered:!0},e))})}),code:`<Mask shape="squircle" src="${N}" alt="squircle" size="md" bordered />
<Mask shape="heart" src="${N}" alt="heart" size="md" bordered />
<Mask shape="hexagon" src="${N}" alt="hexagon" size="md" bordered />
<Mask shape="hexagon-2" src="${N}" alt="hexagon-2" size="md" bordered />
<Mask shape="decagon" src="${N}" alt="decagon" size="md" bordered />
<Mask shape="pentagon" src="${N}" alt="pentagon" size="md" bordered />
<Mask shape="diamond" src="${N}" alt="diamond" size="md" bordered />
<Mask shape="square" src="${N}" alt="square" size="md" bordered />
<Mask shape="circle" src="${N}" alt="circle" size="md" bordered />`});r(()=>u(e,c,S))});let w=t(`rue:component:anchor`);i(c,w),n(()=>{let e=f(U,{title:`Star variants`,summary:`保留星形与粗星形示例，增加 ring 和 hover，适合头像墙或精选内容。`,tab:d,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-5`,children:L.map(e=>y(M,{shape:e,src:N,alt:e,size:`lg`,ring:!0,shadow:!0,interactive:!0},e))})}),code:`<Mask shape="star" src="${N}" alt="star" size="lg" ring shadow interactive />
<Mask shape="star-2" src="${N}" alt="star-2" size="lg" ring shadow interactive />`});r(()=>u(e,c,w))});let T=t(`rue:component:anchor`);i(c,T),n(()=>{let e=f(U,{title:`Triangle variants`,summary:`保留四向三角形示例，并通过统一尺寸让方向差异更好观察。`,tab:m,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-5`,children:R.map(e=>y(M,{shape:e,src:N,alt:e,size:`lg`,bordered:!0,shadow:!0},e))})}),code:`<Mask shape="triangle" src="${N}" alt="triangle" size="lg" bordered shadow />
<Mask shape="triangle-2" src="${N}" alt="triangle-2" size="lg" bordered shadow />
<Mask shape="triangle-3" src="${N}" alt="triangle-3" size="lg" bordered shadow />
<Mask shape="triangle-4" src="${N}" alt="triangle-4" size="lg" bordered shadow />`});r(()=>u(e,c,T))});let E=t(`rue:component:anchor`);i(c,E),n(()=>{let e=f(U,{title:`Half modifiers and arbitrary host`,summary:`保留 half modifier 与任意宿主演示，并补上 start / end 语义别名。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap items-center gap-6`,children:[y(M,{shape:`star`,half:`1`,src:N,alt:`star half 1`,size:`lg`,ring:!0}),y(M,{shape:`star`,half:`2`,src:N,alt:`star half 2`,size:`lg`,ring:!0}),y(M,{shape:`diamond`,half:`start`,src:N,alt:`diamond start`,size:`lg`,bordered:!0}),y(M,{as:`div`,shape:`diamond`,tone:`primary`,size:`lg`,ring:!0,shadow:!0,className:`grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]`,"data-testid":`mask-host-demo`,children:`Host`})]})}),code:`<Mask shape="star" half="1" src="${N}" alt="star half 1" size="lg" ring />
<Mask shape="star" half="2" src="${N}" alt="star half 2" size="lg" ring />
<Mask shape="diamond" half="start" src="${N}" alt="diamond start" size="lg" bordered />
<Mask
  as="div"
  shape="diamond"
  tone="primary"
  size="lg"
  ring
  shadow
  className="grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]"
>
  Host
</Mask>`});r(()=>u(e,c,E))});let D=t(`rue:component:anchor`);i(c,D),n(()=>{let e=f(U,{title:`Semantic sizes`,summary:`新增尺寸别名，常见头像和封面尺寸不再需要每次都手写宽高 class。`,tab:b,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap items-end gap-5`,children:z.map(e=>v(`div`,{className:`flex flex-col items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-80`,children:[y(M,{shape:`circle`,src:N,alt:e,size:e,ring:!0}),y(`span`,{children:e})]},e))})}),code:`<Mask shape="circle" src="${N}" alt="xs" size="xs" ring />
<Mask shape="circle" src="${N}" alt="sm" size="sm" ring />
<Mask shape="circle" src="${N}" alt="md" size="md" ring />
<Mask shape="circle" src="${N}" alt="lg" size="lg" ring />
<Mask shape="circle" src="${N}" alt="xl" size="xl" ring />
<Mask shape="circle" src="${N}" alt="2xl" size="2xl" ring />`});r(()=>u(e,c,D))});let O=t(`rue:component:anchor`);i(c,O),n(()=>{let e=f(U,{title:`Fit modes`,summary:`新增 fit 语义，宽图、竖图和封面图都能直接得到明确的裁切策略。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 md:grid-cols-3`,children:B.map(e=>v(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-xs font-semibold uppercase tracking-[0.18em] opacity-70`,children:e.label}),y(`div`,{className:`rounded-box bg-base-200 p-4`,children:y(M,{shape:`hexagon-2`,src:e.src,alt:e.label,size:`xl`,fit:e.fit,bordered:!0,className:`mx-auto`})})]},e.label))})}),code:`<Mask shape="hexagon-2" src="${P}" alt="cover" size="xl" fit="cover" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${F}" alt="contain" size="xl" fit="contain" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${P}" alt="fill" size="xl" fit="fill" bordered className="mx-auto" />`});r(()=>u(e,c,O))});let k=t(`rue:component:anchor`);i(c,k),n(()=>{let e=f(U,{title:`Tone surfaces`,summary:`新增 tone、ring、shadow 组合后，Mask 也能承担数字徽记、内容牌和亮点卡片的职责。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6`,children:[y(`div`,{className:`flex flex-wrap gap-4`,children:V.map(e=>y(M,{as:`div`,shape:`squircle`,tone:e.tone,size:`md`,ring:!0,className:`grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]`,children:e.label},e.label))}),v(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(M,{as:`div`,shape:`hexagon`,tone:`secondary`,size:`xl`,ring:!0,shadow:!0,interactive:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-3xl font-black`,children:`24`}),y(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-80`,children:`Launches`})]})}),y(M,{as:`div`,shape:`diamond`,tone:`accent`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-sm font-semibold uppercase tracking-[0.18em]`,children:`Featured`}),y(`div`,{className:`text-xs opacity-80`,children:`Rue Studio`})]})}),y(M,{as:`div`,shape:`circle`,tone:`success`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-2xl font-black`,children:`98%`}),y(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-80`,children:`Approval`})]})})]})]})}),code:`<div className="flex flex-wrap gap-4">
  <Mask
    as="div"
    shape="squircle"
    tone="base"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Base
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="primary"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Primary
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="secondary"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Secondary
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="accent"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Accent
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="success"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Success
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="warning"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Warning
  </Mask>
</div>

<div className="grid gap-4 md:grid-cols-3">
  <Mask
    as="div"
    shape="hexagon"
    tone="secondary"
    size="xl"
    ring
    shadow
    interactive
    className="mx-auto grid place-content-center p-6 text-center"
  >
    <div className="space-y-1">
      <div className="text-3xl font-black">24</div>
      <div className="text-xs uppercase tracking-[0.22em] opacity-80">Launches</div>
    </div>
  </Mask>

  <Mask
    as="div"
    shape="diamond"
    tone="accent"
    size="xl"
    ring
    shadow
    className="mx-auto grid place-content-center p-6 text-center"
  >
    <div className="space-y-1">
      <div className="text-sm font-semibold uppercase tracking-[0.18em]">
        Featured
      </div>
      <div className="text-xs opacity-80">Rue Studio</div>
    </div>
  </Mask>

  <Mask
    as="div"
    shape="circle"
    tone="success"
    size="xl"
    ring
    shadow
    className="mx-auto grid place-content-center p-6 text-center"
  >
    <div className="space-y-1">
      <div className="text-2xl font-black">98%</div>
      <div className="text-xs uppercase tracking-[0.18em] opacity-80">Approval</div>
    </div>
  </Mask>
</div>`});r(()=>u(e,c,k))});let A=o(`div`,c);i(c,A),l(A,`my-8`);let j=o(`h2`,A);i(A,j),l(j,`mt-0`),i(j,p(`API`));let G=t(`rue:component:anchor`);return i(A,G),n(()=>{let e=f(W,{rows:H});r(()=>u(e,A,G))}),a})}),h,g),h})};export{G as default};