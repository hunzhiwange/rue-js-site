import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,_t as o,ct as s,et as c,l,nt as u,o as d,t as f,tt as p,ut as m,yt as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g,n as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as v,i as y}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as b}from"./Code-D5UqTwV6.js";import{t as x}from"./tabs-DRfs918f.js";import{r as S}from"./SidebarPlaygroundDesign-CWudvLqE.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>Array.isArray(e)?e.some(e=>w(e)):e!=null&&e!==!1,T=e=>{if(e)return e===`start`?`1`:e===`end`?`2`:e},E=e=>{switch(e){case`xs`:return`size-12`;case`sm`:case`small`:return`size-16`;case`md`:case`middle`:case`medium`:return`size-24`;case`lg`:case`large`:return`size-32`;case`xl`:return`size-40`;case`2xl`:return`size-52`;case`3xl`:return`size-64`;default:return}},D=e=>{switch(e){case`top`:return`object-top`;case`bottom`:return`object-bottom`;case`left`:return`object-left`;case`right`:return`object-right`;case`top-left`:return`object-left-top`;case`top-right`:return`object-right-top`;case`bottom-left`:return`object-left-bottom`;case`bottom-right`:return`object-right-bottom`;default:return e?`object-center`:void 0}},O=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},k=e=>{switch(e){case`neutral`:return`bg-neutral text-neutral-content`;case`primary`:return`bg-primary text-primary-content`;case`secondary`:return`bg-secondary text-secondary-content`;case`accent`:return`bg-accent text-accent-content`;case`info`:return`bg-info text-info-content`;case`success`:return`bg-success text-success-content`;case`warning`:return`bg-warning text-warning-content`;case`error`:return`bg-error text-error-content`;case`base`:return`bg-base-200 text-base-content`;default:return}},A=e=>{switch(e){case`neutral`:return`ring-neutral/35`;case`primary`:return`ring-primary/35`;case`secondary`:return`ring-secondary/35`;case`accent`:return`ring-accent/35`;case`info`:return`ring-info/35`;case`success`:return`ring-success/35`;case`warning`:return`ring-warning/35`;case`error`:return`ring-error/35`;default:return`ring-base-300`}},j=({shape:e,half:t,size:n,fit:r,position:i,tone:a,bordered:o,ring:s,shadow:c,interactive:l})=>{let u=`mask mask-${e??`squircle`}`,d=T(t),f=E(n),p=O(r),m=D(i),h=k(a);return d&&(u+=` mask-half-${d}`),f&&(u+=` ${f}`),p&&(u+=` ${p}`),m&&(u+=` ${m}`),h&&(u+=` ${h}`),o&&(u+=` ring-1 ring-inset ring-base-300/80`),s&&(u+=` ring-2 ring-offset-2 ring-offset-base-100 ${A(a)}`),c&&(u+=` shadow-xl shadow-base-content/10`),l&&(u+=` transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl`),u},M=n=>{let{__rue_rest_omit_0:u,__rue_rest_omit_1:f,__rue_rest_omit_2:_,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:T,__rue_rest_omit_9:E,__rue_rest_omit_10:D,__rue_rest_omit_11:O,__rue_rest_omit_12:k,__rue_rest_omit_13:A,__rue_rest_omit_14:M,__rue_rest_omit_15:N,__rue_rest_omit_16:P,__rue_rest_omit_17:F,__rue_rest_omit_18:I,__rue_rest_omit_19:L,__rue_rest_omit_20:R,__rue_rest_omit_21:z,rest:B,cls:V,contentNode:H,mediaMode:U}=g(`useSetup:0:0`,()=>i(()=>{let{as:e,shape:t,half:r,size:i,fit:a,position:o,tone:s,bordered:c,ring:l,shadow:u,interactive:d,src:f,alt:p,imageProps:m,wrapperClassName:_,imageClassName:v,content:y,contentClassName:b,caption:x,captionClassName:S,className:C,children:T,...E}=n,D=g(`computed:1:0`,()=>h(()=>j({shape:n.shape===void 0?`squircle`:n.shape,half:n.half,size:n.size,fit:n.fit===void 0?`cover`:n.fit,position:n.position,tone:n.tone,bordered:n.bordered,ring:n.ring,shadow:n.shadow,interactive:n.interactive}))),O=g(`computed:1:1`,()=>h(()=>n.content??n.children)),k=O;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:T,rest:E,cls:D,contentNode:O,mediaMode:g(`computed:1:2`,()=>h(()=>!!n.src&&(w(k.get())||n.caption!=null||n.wrapperClassName!=null||n.imageClassName!=null||n.contentClassName!=null||n.captionClassName!=null||(n.as===void 0?`img`:n.as)===`figure`)))}}));if(U.get()){let i=C(`relative inline-flex flex-col items-center gap-3`,n.wrapperClassName);return(n.as===void 0?`img`:n.as)===`div`?l(u=>{let f=p(`div`,u);t(()=>{o(f,B)}),t(()=>{m(f,i)});let h=p(`div`,f);a(f,h),m(h,`relative inline-flex`);let g=p(`img`,h);a(h,g),t(()=>{o(g,n.imageProps)}),t(()=>{s(g,`src`,String(n.src))}),t(()=>{s(g,`alt`,String(n.alt))}),t(()=>{m(g,C(C(V.get(),n.className),n.imageClassName))});let _=e(`rue:slot:anchor`);a(h,_),t(()=>{let i=w(H.get())?l(()=>{let i=c(),o=p(`div`,i);a(i,o),t(()=>{m(o,C(`absolute inset-0 grid place-items-center p-4 text-center`,n.contentClassName))});let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=H.get();r(()=>d(e,o,s))}),i}):``;r(()=>d(i,h,_))});let v=e(`rue:slot:anchor`);return a(f,v),t(()=>{let i=n.caption==null?``:l(()=>{let i=c(),o=p(`div`,i);a(i,o),t(()=>{m(o,C(`text-center text-sm opacity-70`,n.captionClassName))});let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.caption;r(()=>d(e,o,s))}),i});r(()=>d(i,f,v))}),f}):l(u=>{let f=p(`figure`,u);t(()=>{o(f,B)}),t(()=>{m(f,i)});let h=p(`div`,f);a(f,h),m(h,`relative inline-flex`);let g=p(`img`,h);a(h,g),t(()=>{o(g,n.imageProps)}),t(()=>{s(g,`src`,String(n.src))}),t(()=>{s(g,`alt`,String(n.alt))}),t(()=>{m(g,C(C(V.get(),n.className),n.imageClassName))});let _=e(`rue:slot:anchor`);a(h,_),t(()=>{let i=w(H.get())?l(()=>{let i=c(),o=p(`div`,i);a(i,o),t(()=>{m(o,C(`absolute inset-0 grid place-items-center p-4 text-center`,n.contentClassName))});let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=H.get();r(()=>d(e,o,s))}),i}):``;r(()=>d(i,h,_))});let v=e(`rue:slot:anchor`);return a(f,v),t(()=>{let i=n.caption==null?``:l(()=>{let i=c(),o=p(`figcaption`,i);a(i,o),t(()=>{m(o,C(`text-center text-sm opacity-70`,n.captionClassName))});let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.caption;r(()=>d(e,o,s))}),i});r(()=>d(i,f,v))}),f})}let W=C(V.get(),n.className);return(n.as===void 0?`img`:n.as)===`div`?l(i=>{let s=p(`div`,i);t(()=>{o(s,B)}),t(()=>{m(s,W)});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s}):(n.as===void 0?`img`:n.as)===`span`?l(i=>{let s=p(`span`,i);t(()=>{o(s,B)}),t(()=>{m(s,W)});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s}):(n.as===void 0?`img`:n.as)===`figure`?l(i=>{let s=p(`figure`,i);t(()=>{o(s,B)}),t(()=>{m(s,W)});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s}):(n.as===void 0?`img`:n.as)===`section`?l(i=>{let s=p(`section`,i);t(()=>{o(s,B)}),t(()=>{m(s,W)});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s}):(n.as===void 0?`img`:n.as)===`article`?l(i=>{let s=p(`article`,i);t(()=>{o(s,B)}),t(()=>{m(s,W)});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s}):(n.as===void 0?`img`:n.as)===`a`?l(i=>{let s=p(`a`,i);t(()=>{o(s,B)}),t(()=>{m(s,W)});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s}):(n.as===void 0?`img`:n.as)===`button`?l(i=>{let s=p(`button`,i);t(()=>{o(s,B)}),t(()=>{m(s,W)});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s}):l(e=>{let r=p(`img`,e);return t(()=>{o(r,B)}),t(()=>{s(r,`src`,String(n.src))}),t(()=>{s(r,`alt`,String(n.alt))}),t(()=>{m(r,W)}),r})},N=`https://picsum.photos/320/320?grayscale`,P=`https://picsum.photos/420/240?grayscale`,F=`https://picsum.photos/240/420?grayscale`,I=[`squircle`,`heart`,`hexagon`,`hexagon-2`,`decagon`,`pentagon`,`diamond`,`square`,`circle`],L=[`star`,`star-2`],R=[`triangle`,`triangle-2`,`triangle-3`,`triangle-4`],z=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],B=[{label:`cover`,fit:`cover`,src:P},{label:`contain`,fit:`contain`,src:F},{label:`fill`,fit:`fill`,src:P}],V=[{label:`Base`,tone:`base`},{label:`Primary`,tone:`primary`},{label:`Secondary`,tone:`secondary`},{label:`Accent`,tone:`accent`},{label:`Success`,tone:`success`},{label:`Warning`,tone:`warning`}],H=[{prop:`as`,description:`指定渲染标签，默认输出 img，也可渲染 div、figure 等任意宿主元素`,type:`string`,defaultValue:`'img'`},{prop:`shape`,description:`遮罩形状，覆盖当前支持的全部 mask-* 造型`,type:`'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,defaultValue:`'squircle'`},{prop:`half`,description:`半边遮罩；支持数字写法，也支持 start / end 语义别名`,type:`'1' | '2' | 'start' | 'end'`,defaultValue:`-`},{prop:`size`,description:`语义尺寸，映射到一组常用正方形尺寸 class`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,defaultValue:`-`},{prop:`fit`,description:`媒体内容适配模式，输出 object-* 类名`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`'cover'`},{prop:`tone`,description:`给非图片宿主补齐背景与前景色，方便做头像牌、数字徽记和内容卡片`,type:`'base' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`-`},{prop:`bordered`,description:`追加轻量内描边，适合浅背景图片或卡片`,type:`boolean`,defaultValue:`false`},{prop:`ring`,description:`追加 ring 与 offset，tone 存在时会自动继承对应的环颜色`,type:`boolean`,defaultValue:`false`},{prop:`shadow`,description:`追加投影，适合头像、封面和内容模块`,type:`boolean`,defaultValue:`false`},{prop:`interactive`,description:`追加轻量 hover 动效，方便做可点击素材墙或精选卡片`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`透传自定义样式类，可与组件生成的 mask 类叠加`,type:`string`,defaultValue:`-`}],U=n=>l(i=>{let o=p(`div`,i);m(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=p(`div`,o);a(o,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let h=p(`div`,s);a(s,h);let g=p(`h2`,h);a(h,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=n.title;r(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);a(h,v),t(()=>{let i=n.summary?l(()=>{let i=c(),o=p(`p`,i);a(i,o),m(o,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.summary;r(()=>d(e,o,s))}),i}):``;r(()=>d(i,h,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,o,y))});let S=e(`rue:slot:anchor`);return a(o,S),t(()=>{let i=n.tab.value===`preview`?n.preview():l(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=f(b,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>d(e,i,o))}),i});r(()=>d(i,o,S))}),o}),W=n=>l(i=>{let o=p(`div`,i);m(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=p(`table`,o);a(o,f),m(f,`table table-zebra`);let h=p(`thead`,f);a(f,h);let g=p(`tr`,h);a(h,g);let v=p(`th`,g);a(g,v),a(v,u(`属性`));let y=p(`th`,g);a(g,y),a(y,u(`说明`));let b=p(`th`,g);a(g,b),a(b,u(`类型`));let x=p(`th`,g);a(g,x),a(x,u(`默认值`));let S=p(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,u,f)=>{d(l(()=>{let i=c(),o=p(`tr`,i);a(i,o),t(()=>{s(o,`key`,String(n.prop))});let l=p(`td`,o);a(o,l);let u=p(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let m=p(`td`,o);a(o,m);let h=e(`rue:slot:anchor`);a(m,h),t(()=>{let e=n.description;r(()=>d(e,m,h))});let g=p(`td`,o);a(o,g);let _=p(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=p(`td`,o);a(o,y);let b=p(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,o)}})}),o}),G=()=>{let{tabShapes:o,tabStars:s,tabTriangles:h,tabHalf:_,tabSize:b,tabFit:x,tabTone:C}=g(`useSetup:0:0`,()=>i(()=>({tabShapes:g(`ref:1:0`,()=>n(`preview`)),tabStars:g(`ref:1:1`,()=>n(`preview`)),tabTriangles:g(`ref:1:2`,()=>n(`preview`)),tabHalf:g(`ref:1:3`,()=>n(`preview`)),tabSize:g(`ref:1:4`,()=>n(`preview`)),tabFit:g(`ref:1:5`,()=>n(`preview`)),tabTone:g(`ref:1:6`,()=>n(`preview`))})));return l(n=>{let i=c(),g=e(`rue:component:anchor`);return a(i,g),d(f(S,{children:l(()=>{let n=c(),i=p(`div`,n);a(n,i),m(i,`max-w-none prose prose-sm md:prose-base`);let l=p(`h1`,i);a(i,l),a(l,u(`Mask 形状裁切`));let g=p(`p`,i);a(i,g),m(g,`text-sm mt-3 mb-3`),a(g,u(`Mask 现在不只是原始 class 的薄封装。它保留 Rue 的轻量视觉路线，同时补上尺寸、fit、tone、ring 与交互态这些更适合实际页面搭建的语义化能力。`));let S=e(`rue:component:anchor`);a(i,S),t(()=>{let e=f(U,{title:`Core shapes`,summary:`保留原有基础形状示例，并统一到更整洁的卡片布局里。`,tab:o,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-4`,"data-testid":`mask-shapes-demo`,children:I.map(e=>y(M,{shape:e,src:N,alt:e,size:`md`,bordered:!0},e))})}),code:`<Mask shape="squircle" src="${N}" alt="squircle" size="md" bordered />
<Mask shape="heart" src="${N}" alt="heart" size="md" bordered />
<Mask shape="hexagon" src="${N}" alt="hexagon" size="md" bordered />
<Mask shape="hexagon-2" src="${N}" alt="hexagon-2" size="md" bordered />
<Mask shape="decagon" src="${N}" alt="decagon" size="md" bordered />
<Mask shape="pentagon" src="${N}" alt="pentagon" size="md" bordered />
<Mask shape="diamond" src="${N}" alt="diamond" size="md" bordered />
<Mask shape="square" src="${N}" alt="square" size="md" bordered />
<Mask shape="circle" src="${N}" alt="circle" size="md" bordered />`});r(()=>d(e,i,S))});let w=e(`rue:component:anchor`);a(i,w),t(()=>{let e=f(U,{title:`Star variants`,summary:`保留星形与粗星形示例，增加 ring 和 hover，适合头像墙或精选内容。`,tab:s,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-5`,children:L.map(e=>y(M,{shape:e,src:N,alt:e,size:`lg`,ring:!0,shadow:!0,interactive:!0},e))})}),code:`<Mask shape="star" src="${N}" alt="star" size="lg" ring shadow interactive />
<Mask shape="star-2" src="${N}" alt="star-2" size="lg" ring shadow interactive />`});r(()=>d(e,i,w))});let T=e(`rue:component:anchor`);a(i,T),t(()=>{let e=f(U,{title:`Triangle variants`,summary:`保留四向三角形示例，并通过统一尺寸让方向差异更好观察。`,tab:h,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-5`,children:R.map(e=>y(M,{shape:e,src:N,alt:e,size:`lg`,bordered:!0,shadow:!0},e))})}),code:`<Mask shape="triangle" src="${N}" alt="triangle" size="lg" bordered shadow />
<Mask shape="triangle-2" src="${N}" alt="triangle-2" size="lg" bordered shadow />
<Mask shape="triangle-3" src="${N}" alt="triangle-3" size="lg" bordered shadow />
<Mask shape="triangle-4" src="${N}" alt="triangle-4" size="lg" bordered shadow />`});r(()=>d(e,i,T))});let E=e(`rue:component:anchor`);a(i,E),t(()=>{let e=f(U,{title:`Half modifiers and arbitrary host`,summary:`保留 half modifier 与任意宿主演示，并补上 start / end 语义别名。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap items-center gap-6`,children:[y(M,{shape:`star`,half:`1`,src:N,alt:`star half 1`,size:`lg`,ring:!0}),y(M,{shape:`star`,half:`2`,src:N,alt:`star half 2`,size:`lg`,ring:!0}),y(M,{shape:`diamond`,half:`start`,src:N,alt:`diamond start`,size:`lg`,bordered:!0}),y(M,{as:`div`,shape:`diamond`,tone:`primary`,size:`lg`,ring:!0,shadow:!0,className:`grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]`,"data-testid":`mask-host-demo`,children:`Host`})]})}),code:`<Mask shape="star" half="1" src="${N}" alt="star half 1" size="lg" ring />
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
</Mask>`});r(()=>d(e,i,E))});let D=e(`rue:component:anchor`);a(i,D),t(()=>{let e=f(U,{title:`Semantic sizes`,summary:`新增尺寸别名，常见头像和封面尺寸不再需要每次都手写宽高 class。`,tab:b,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap items-end gap-5`,children:z.map(e=>v(`div`,{className:`flex flex-col items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-80`,children:[y(M,{shape:`circle`,src:N,alt:e,size:e,ring:!0}),y(`span`,{children:e})]},e))})}),code:`<Mask shape="circle" src="${N}" alt="xs" size="xs" ring />
<Mask shape="circle" src="${N}" alt="sm" size="sm" ring />
<Mask shape="circle" src="${N}" alt="md" size="md" ring />
<Mask shape="circle" src="${N}" alt="lg" size="lg" ring />
<Mask shape="circle" src="${N}" alt="xl" size="xl" ring />
<Mask shape="circle" src="${N}" alt="2xl" size="2xl" ring />`});r(()=>d(e,i,D))});let O=e(`rue:component:anchor`);a(i,O),t(()=>{let e=f(U,{title:`Fit modes`,summary:`新增 fit 语义，宽图、竖图和封面图都能直接得到明确的裁切策略。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 md:grid-cols-3`,children:B.map(e=>v(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-xs font-semibold uppercase tracking-[0.18em] opacity-70`,children:e.label}),y(`div`,{className:`rounded-box bg-base-200 p-4`,children:y(M,{shape:`hexagon-2`,src:e.src,alt:e.label,size:`xl`,fit:e.fit,bordered:!0,className:`mx-auto`})})]},e.label))})}),code:`<Mask shape="hexagon-2" src="${P}" alt="cover" size="xl" fit="cover" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${F}" alt="contain" size="xl" fit="contain" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${P}" alt="fill" size="xl" fit="fill" bordered className="mx-auto" />`});r(()=>d(e,i,O))});let k=e(`rue:component:anchor`);a(i,k),t(()=>{let e=f(U,{title:`Tone surfaces`,summary:`新增 tone、ring、shadow 组合后，Mask 也能承担数字徽记、内容牌和亮点卡片的职责。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6`,children:[y(`div`,{className:`flex flex-wrap gap-4`,children:V.map(e=>y(M,{as:`div`,shape:`squircle`,tone:e.tone,size:`md`,ring:!0,className:`grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]`,children:e.label},e.label))}),v(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(M,{as:`div`,shape:`hexagon`,tone:`secondary`,size:`xl`,ring:!0,shadow:!0,interactive:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-3xl font-black`,children:`24`}),y(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-80`,children:`Launches`})]})}),y(M,{as:`div`,shape:`diamond`,tone:`accent`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-sm font-semibold uppercase tracking-[0.18em]`,children:`Featured`}),y(`div`,{className:`text-xs opacity-80`,children:`Rue Studio`})]})}),y(M,{as:`div`,shape:`circle`,tone:`success`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-2xl font-black`,children:`98%`}),y(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-80`,children:`Approval`})]})})]})]})}),code:`<div className="flex flex-wrap gap-4">
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
</div>`});r(()=>d(e,i,k))});let A=p(`div`,i);a(i,A),m(A,`my-8`);let j=p(`h2`,A);a(A,j),m(j,`mt-0`),a(j,u(`API`));let G=e(`rue:component:anchor`);return a(A,G),t(()=>{let e=f(W,{rows:H});r(()=>d(e,A,G))}),n})}),i,g),i})};export{G as default};