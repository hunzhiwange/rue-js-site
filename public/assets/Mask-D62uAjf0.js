import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,t as d,tn as f,tt as p,wt as m,xt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g,n as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-BoXKy3gJ.js";import{n as y,t as b}from"./src-Dlanwp1X.js";import{t as x}from"./tabs-C7cPs47_.js";import{r as S}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>Array.isArray(e)?e.some(e=>w(e)):e!=null&&e!==!1,T=e=>{if(e)return e===`start`?`1`:e===`end`?`2`:e},E=e=>{switch(e){case`xs`:return`size-12`;case`sm`:case`small`:return`size-16`;case`md`:case`middle`:case`medium`:return`size-24`;case`lg`:case`large`:return`size-32`;case`xl`:return`size-40`;case`2xl`:return`size-52`;case`3xl`:return`size-64`;default:return}},D=e=>{switch(e){case`top`:return`object-top`;case`bottom`:return`object-bottom`;case`left`:return`object-left`;case`right`:return`object-right`;case`top-left`:return`object-left-top`;case`top-right`:return`object-right-top`;case`bottom-left`:return`object-left-bottom`;case`bottom-right`:return`object-right-bottom`;default:return e?`object-center`:void 0}},O=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},k=e=>{switch(e){case`neutral`:return`bg-neutral text-neutral-content`;case`primary`:return`bg-primary text-primary-content`;case`secondary`:return`bg-secondary text-secondary-content`;case`accent`:return`bg-accent text-accent-content`;case`info`:return`bg-info text-info-content`;case`success`:return`bg-success text-success-content`;case`warning`:return`bg-warning text-warning-content`;case`error`:return`bg-error text-error-content`;case`base`:return`bg-base-200 text-base-content`;default:return}},A=e=>{switch(e){case`neutral`:return`ring-neutral/35`;case`primary`:return`ring-primary/35`;case`secondary`:return`ring-secondary/35`;case`accent`:return`ring-accent/35`;case`info`:return`ring-info/35`;case`success`:return`ring-success/35`;case`warning`:return`ring-warning/35`;case`error`:return`ring-error/35`;default:return`ring-base-300`}},j=({shape:e,half:t,size:n,fit:r,position:i,tone:a,bordered:o,ring:s,shadow:c,interactive:l})=>{let u=`mask mask-${e??`squircle`}`,d=T(t),f=E(n),p=O(r),m=D(i),h=k(a);return d&&(u+=` mask-half-${d}`),f&&(u+=` ${f}`),p&&(u+=` ${p}`),m&&(u+=` ${m}`),h&&(u+=` ${h}`),o&&(u+=` ring-1 ring-inset ring-base-300/80`),s&&(u+=` ring-2 ring-offset-2 ring-offset-base-100 ${A(a)}`),c&&(u+=` shadow-xl shadow-base-content/10`),l&&(u+=` transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl`),u},M=n=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:d,__rue_rest_omit_2:_,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:T,__rue_rest_omit_9:E,__rue_rest_omit_10:D,__rue_rest_omit_11:O,__rue_rest_omit_12:k,__rue_rest_omit_13:A,__rue_rest_omit_14:M,__rue_rest_omit_15:N,__rue_rest_omit_16:P,__rue_rest_omit_17:F,__rue_rest_omit_18:I,__rue_rest_omit_19:L,__rue_rest_omit_20:R,__rue_rest_omit_21:z,rest:B,cls:V,contentNode:H,mediaMode:U}=g(`useSetup:0:0`,()=>c(()=>{let{as:e,shape:t,half:r,size:i,fit:a,position:o,tone:s,bordered:c,ring:l,shadow:u,interactive:d,src:f,alt:p,imageProps:h,wrapperClassName:_,imageClassName:v,content:y,contentClassName:b,caption:x,captionClassName:S,className:C,children:T,...E}=n,D=g(`computed:1:0`,()=>m(()=>j({shape:n.shape===void 0?`squircle`:n.shape,half:n.half,size:n.size,fit:n.fit===void 0?`cover`:n.fit,position:n.position,tone:n.tone,bordered:n.bordered,ring:n.ring,shadow:n.shadow,interactive:n.interactive}))),O=g(`computed:1:1`,()=>m(()=>n.content??n.children)),k=O;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:h,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:T,rest:E,cls:D,contentNode:O,mediaMode:g(`computed:1:2`,()=>m(()=>!!n.src&&(w(k.get())||n.caption!=null||n.wrapperClassName!=null||n.imageClassName!=null||n.contentClassName!=null||n.captionClassName!=null||(n.as===void 0?`img`:n.as)===`figure`)))}}));if(U.get()){let i=C(`relative inline-flex flex-col items-center gap-3`,n.wrapperClassName);return(n.as===void 0?`img`:n.as)===`div`?a(c=>{let d=u(`div`,c);t(()=>{h(d,B)}),t(()=>{l(d,i)});let m=u(`div`,d);e(d,m),l(m,`relative inline-flex`);let g=u(`img`,m);e(m,g),t(()=>{h(g,n.imageProps)}),t(()=>{r(g,`src`,String(n.src))}),t(()=>{r(g,`alt`,String(n.alt))}),t(()=>{l(g,C(C(V.get(),n.className),n.imageClassName))});let _=p(`rue:slot:anchor`);e(m,_),t(()=>{let r=w(H.get())?a(()=>{let r=o(),i=u(`div`,r);e(r,i),t(()=>{l(i,C(`absolute inset-0 grid place-items-center p-4 text-center`,n.contentClassName))});let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=H.get();f(()=>s(e,i,a))}),r}):``;f(()=>s(r,m,_))});let v=p(`rue:slot:anchor`);return e(d,v),t(()=>{let r=n.caption==null?``:a(()=>{let r=o(),i=u(`div`,r);e(r,i),t(()=>{l(i,C(`text-center text-sm opacity-70`,n.captionClassName))});let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.caption;f(()=>s(e,i,a))}),r});f(()=>s(r,d,v))}),d}):a(c=>{let d=u(`figure`,c);t(()=>{h(d,B)}),t(()=>{l(d,i)});let m=u(`div`,d);e(d,m),l(m,`relative inline-flex`);let g=u(`img`,m);e(m,g),t(()=>{h(g,n.imageProps)}),t(()=>{r(g,`src`,String(n.src))}),t(()=>{r(g,`alt`,String(n.alt))}),t(()=>{l(g,C(C(V.get(),n.className),n.imageClassName))});let _=p(`rue:slot:anchor`);e(m,_),t(()=>{let r=w(H.get())?a(()=>{let r=o(),i=u(`div`,r);e(r,i),t(()=>{l(i,C(`absolute inset-0 grid place-items-center p-4 text-center`,n.contentClassName))});let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=H.get();f(()=>s(e,i,a))}),r}):``;f(()=>s(r,m,_))});let v=p(`rue:slot:anchor`);return e(d,v),t(()=>{let r=n.caption==null?``:a(()=>{let r=o(),i=u(`figcaption`,r);e(r,i),t(()=>{l(i,C(`text-center text-sm opacity-70`,n.captionClassName))});let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.caption;f(()=>s(e,i,a))}),r});f(()=>s(r,d,v))}),d})}let W=C(V.get(),n.className);return(n.as===void 0?`img`:n.as)===`div`?a(r=>{let i=u(`div`,r);t(()=>{h(i,B)}),t(()=>{l(i,W)});let a=p(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;f(()=>s(e,i,a))}),i}):(n.as===void 0?`img`:n.as)===`span`?a(r=>{let i=u(`span`,r);t(()=>{h(i,B)}),t(()=>{l(i,W)});let a=p(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;f(()=>s(e,i,a))}),i}):(n.as===void 0?`img`:n.as)===`figure`?a(r=>{let i=u(`figure`,r);t(()=>{h(i,B)}),t(()=>{l(i,W)});let a=p(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;f(()=>s(e,i,a))}),i}):(n.as===void 0?`img`:n.as)===`section`?a(r=>{let i=u(`section`,r);t(()=>{h(i,B)}),t(()=>{l(i,W)});let a=p(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;f(()=>s(e,i,a))}),i}):(n.as===void 0?`img`:n.as)===`article`?a(r=>{let i=u(`article`,r);t(()=>{h(i,B)}),t(()=>{l(i,W)});let a=p(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;f(()=>s(e,i,a))}),i}):(n.as===void 0?`img`:n.as)===`a`?a(r=>{let i=u(`a`,r);t(()=>{h(i,B)}),t(()=>{l(i,W)});let a=p(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;f(()=>s(e,i,a))}),i}):(n.as===void 0?`img`:n.as)===`button`?a(r=>{let i=u(`button`,r);t(()=>{h(i,B)}),t(()=>{l(i,W)});let a=p(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;f(()=>s(e,i,a))}),i}):a(e=>{let i=u(`img`,e);return t(()=>{h(i,B)}),t(()=>{r(i,`src`,String(n.src))}),t(()=>{r(i,`alt`,String(n.alt))}),t(()=>{l(i,W)}),i})},N=`https://picsum.photos/320/320?grayscale`,P=`https://picsum.photos/420/240?grayscale`,F=`https://picsum.photos/240/420?grayscale`,I=[`squircle`,`heart`,`hexagon`,`hexagon-2`,`decagon`,`pentagon`,`diamond`,`square`,`circle`],L=[`star`,`star-2`],R=[`triangle`,`triangle-2`,`triangle-3`,`triangle-4`],z=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],B=[{label:`cover`,fit:`cover`,src:P},{label:`contain`,fit:`contain`,src:F},{label:`fill`,fit:`fill`,src:P}],V=[{label:`Base`,tone:`base`},{label:`Primary`,tone:`primary`},{label:`Secondary`,tone:`secondary`},{label:`Accent`,tone:`accent`},{label:`Success`,tone:`success`},{label:`Warning`,tone:`warning`}],H=[{prop:`as`,description:`指定渲染标签，默认输出 img，也可渲染 div、figure 等任意宿主元素`,type:`string`,defaultValue:`'img'`},{prop:`shape`,description:`遮罩形状，覆盖当前支持的全部 mask-* 造型`,type:`'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,defaultValue:`'squircle'`},{prop:`half`,description:`半边遮罩；支持数字写法，也支持 start / end 语义别名`,type:`'1' | '2' | 'start' | 'end'`,defaultValue:`-`},{prop:`size`,description:`语义尺寸，映射到一组常用正方形尺寸 class`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,defaultValue:`-`},{prop:`fit`,description:`媒体内容适配模式，输出 object-* 类名`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`'cover'`},{prop:`tone`,description:`给非图片宿主补充背景与前景色，方便做头像牌、数字徽记和内容卡片`,type:`'base' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`-`},{prop:`bordered`,description:`追加轻量内描边，适合浅背景图片或卡片`,type:`boolean`,defaultValue:`false`},{prop:`ring`,description:`追加 ring 与 offset，tone 存在时会自动继承对应的环颜色`,type:`boolean`,defaultValue:`false`},{prop:`shadow`,description:`追加投影，适合头像、封面和内容模块`,type:`boolean`,defaultValue:`false`},{prop:`interactive`,description:`追加轻量 hover 动效，方便做可点击素材墙或精选卡片`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`透传自定义样式类，可与组件生成的 mask 类叠加`,type:`string`,defaultValue:`-`}],U=n=>a(r=>{let c=u(`div`,r);l(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=u(`div`,c);e(c,m),l(m,`flex flex-wrap items-start justify-between gap-3`);let h=u(`div`,m);e(m,h);let g=u(`h2`,h);e(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(g,i(`# `));let _=p(`rue:slot:anchor`);e(g,_),t(()=>{let e=n.title;f(()=>s(e,g,_))});let y=p(`rue:slot:anchor`);e(h,y),t(()=>{let r=n.summary?a(()=>{let r=o(),i=u(`p`,r);e(r,i),l(i,`m-0 text-sm opacity-70`);let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;f(()=>s(e,i,a))}),r}):``;f(()=>s(r,h,y))});let b=p(`rue:component:anchor`);e(c,b),t(()=>{let e=d(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});f(()=>s(e,c,b))});let S=p(`rue:slot:anchor`);return e(c,S),t(()=>{let r=n.tab.value===`preview`?n.preview():a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(v,{className:`mt-2`,lang:`tsx`,code:n.code});f(()=>s(e,r,i))}),r});f(()=>s(r,c,S))}),c}),W=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=u(`table`,d);e(d,m),l(m,`table table-zebra`);let h=u(`thead`,m);e(m,h);let g=u(`tr`,h);e(h,g);let v=u(`th`,g);e(g,v),e(v,i(`属性`));let y=u(`th`,g);e(g,y),e(y,i(`说明`));let b=u(`th`,g);e(g,b),e(b,i(`类型`));let x=u(`th`,g);e(g,x),e(x,i(`默认值`));let S=u(`tbody`,m);e(m,S);let C=p(`rue:list:start`),w=p(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=p(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;f(()=>s(e,l,d))});let m=u(`td`,a);e(a,m);let h=p(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.description;f(()=>s(e,m,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;f(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=p(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;f(()=>s(e,b,x))}),i}),i,c)}})}),d}),G=()=>{let{tabShapes:r,tabStars:m,tabTriangles:h,tabHalf:_,tabSize:v,tabFit:x,tabTone:C}=g(`useSetup:0:0`,()=>c(()=>({tabShapes:g(`ref:1:0`,()=>n(`preview`)),tabStars:g(`ref:1:1`,()=>n(`preview`)),tabTriangles:g(`ref:1:2`,()=>n(`preview`)),tabHalf:g(`ref:1:3`,()=>n(`preview`)),tabSize:g(`ref:1:4`,()=>n(`preview`)),tabFit:g(`ref:1:5`,()=>n(`preview`)),tabTone:g(`ref:1:6`,()=>n(`preview`))})));return a(n=>{let c=o(),g=p(`rue:component:anchor`);return e(c,g),s(d(S,{children:a(()=>{let n=o(),a=u(`div`,n);e(n,a),l(a,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,a);e(a,c),e(c,i(`Mask 形状裁切`));let g=u(`p`,a);e(a,g),l(g,`text-sm mt-3 mb-3`),e(g,i(`Mask 现在不只是基础 class 的薄封装。它使用 Rue 的轻量视觉路线，同时补上尺寸、fit、tone、ring 与交互态这些更适合实际页面搭建的语义化能力。`));let S=p(`rue:component:anchor`);e(a,S),t(()=>{let e=d(U,{title:`Core shapes`,summary:`展示基础形状示例，并统一到更整洁的卡片布局里。`,tab:r,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap gap-4`,"data-testid":`mask-shapes-demo`,children:I.map(e=>b(M,{shape:e,src:N,alt:e,size:`md`,bordered:!0},e))})}),code:`<Mask shape="squircle" src="${N}" alt="squircle" size="md" bordered />
<Mask shape="heart" src="${N}" alt="heart" size="md" bordered />
<Mask shape="hexagon" src="${N}" alt="hexagon" size="md" bordered />
<Mask shape="hexagon-2" src="${N}" alt="hexagon-2" size="md" bordered />
<Mask shape="decagon" src="${N}" alt="decagon" size="md" bordered />
<Mask shape="pentagon" src="${N}" alt="pentagon" size="md" bordered />
<Mask shape="diamond" src="${N}" alt="diamond" size="md" bordered />
<Mask shape="square" src="${N}" alt="square" size="md" bordered />
<Mask shape="circle" src="${N}" alt="circle" size="md" bordered />`});f(()=>s(e,a,S))});let w=p(`rue:component:anchor`);e(a,w),t(()=>{let e=d(U,{title:`Star variants`,summary:`展示星形与粗星形示例，增加 ring 和 hover，适合头像墙或精选内容。`,tab:m,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap gap-5`,children:L.map(e=>b(M,{shape:e,src:N,alt:e,size:`lg`,ring:!0,shadow:!0,interactive:!0},e))})}),code:`<Mask shape="star" src="${N}" alt="star" size="lg" ring shadow interactive />
<Mask shape="star-2" src="${N}" alt="star-2" size="lg" ring shadow interactive />`});f(()=>s(e,a,w))});let T=p(`rue:component:anchor`);e(a,T),t(()=>{let e=d(U,{title:`Triangle variants`,summary:`展示四向三角形示例，并通过统一尺寸让方向差异更好观察。`,tab:h,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap gap-5`,children:R.map(e=>b(M,{shape:e,src:N,alt:e,size:`lg`,bordered:!0,shadow:!0},e))})}),code:`<Mask shape="triangle" src="${N}" alt="triangle" size="lg" bordered shadow />
<Mask shape="triangle-2" src="${N}" alt="triangle-2" size="lg" bordered shadow />
<Mask shape="triangle-3" src="${N}" alt="triangle-3" size="lg" bordered shadow />
<Mask shape="triangle-4" src="${N}" alt="triangle-4" size="lg" bordered shadow />`});f(()=>s(e,a,T))});let E=p(`rue:component:anchor`);e(a,E),t(()=>{let e=d(U,{title:`Half modifiers and arbitrary host`,summary:`展示 half modifier 与任意宿主演示，并补上 start / end 语义别名。`,tab:_,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap items-center gap-6`,children:[b(M,{shape:`star`,half:`1`,src:N,alt:`star half 1`,size:`lg`,ring:!0}),b(M,{shape:`star`,half:`2`,src:N,alt:`star half 2`,size:`lg`,ring:!0}),b(M,{shape:`diamond`,half:`start`,src:N,alt:`diamond start`,size:`lg`,bordered:!0}),b(M,{as:`div`,shape:`diamond`,tone:`primary`,size:`lg`,ring:!0,shadow:!0,className:`grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]`,"data-testid":`mask-host-demo`,children:`Host`})]})}),code:`<Mask shape="star" half="1" src="${N}" alt="star half 1" size="lg" ring />
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
</Mask>`});f(()=>s(e,a,E))});let D=p(`rue:component:anchor`);e(a,D),t(()=>{let e=d(U,{title:`Semantic sizes`,summary:`尺寸别名适合常见头像和封面场景，不必每次都手写宽高 class。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap items-end gap-5`,children:z.map(e=>y(`div`,{className:`flex flex-col items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-80`,children:[b(M,{shape:`circle`,src:N,alt:e,size:e,ring:!0}),b(`span`,{children:e})]},e))})}),code:`<Mask shape="circle" src="${N}" alt="xs" size="xs" ring />
<Mask shape="circle" src="${N}" alt="sm" size="sm" ring />
<Mask shape="circle" src="${N}" alt="md" size="md" ring />
<Mask shape="circle" src="${N}" alt="lg" size="lg" ring />
<Mask shape="circle" src="${N}" alt="xl" size="xl" ring />
<Mask shape="circle" src="${N}" alt="2xl" size="2xl" ring />`});f(()=>s(e,a,D))});let O=p(`rue:component:anchor`);e(a,O),t(()=>{let e=d(U,{title:`Fit modes`,summary:`fit 语义让宽图、竖图和封面图都能直接得到明确的裁切策略。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 md:grid-cols-3`,children:B.map(e=>y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.18em] opacity-70`,children:e.label}),b(`div`,{className:`rounded-box bg-base-200 p-4`,children:b(M,{shape:`hexagon-2`,src:e.src,alt:e.label,size:`xl`,fit:e.fit,bordered:!0,className:`mx-auto`})})]},e.label))})}),code:`<Mask shape="hexagon-2" src="${P}" alt="cover" size="xl" fit="cover" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${F}" alt="contain" size="xl" fit="contain" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${P}" alt="fill" size="xl" fit="fill" bordered className="mx-auto" />`});f(()=>s(e,a,O))});let k=p(`rue:component:anchor`);e(a,k),t(()=>{let e=d(U,{title:`Tone surfaces`,summary:`tone、ring、shadow 组合后，Mask 也能承担数字徽记、内容牌和亮点卡片的职责。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:[b(`div`,{className:`flex flex-wrap gap-4`,children:V.map(e=>b(M,{as:`div`,shape:`squircle`,tone:e.tone,size:`md`,ring:!0,className:`grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]`,children:e.label},e.label))}),y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(M,{as:`div`,shape:`hexagon`,tone:`secondary`,size:`xl`,ring:!0,shadow:!0,interactive:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:y(`div`,{className:`space-y-1`,children:[b(`div`,{className:`text-3xl font-black`,children:`24`}),b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-80`,children:`Launches`})]})}),b(M,{as:`div`,shape:`diamond`,tone:`accent`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:y(`div`,{className:`space-y-1`,children:[b(`div`,{className:`text-sm font-semibold uppercase tracking-[0.18em]`,children:`Featured`}),b(`div`,{className:`text-xs opacity-80`,children:`Rue Studio`})]})}),b(M,{as:`div`,shape:`circle`,tone:`success`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:y(`div`,{className:`space-y-1`,children:[b(`div`,{className:`text-2xl font-black`,children:`98%`}),b(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-80`,children:`Approval`})]})})]})]})}),code:`<div className="flex flex-wrap gap-4">
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
</div>`});f(()=>s(e,a,k))});let A=u(`div`,a);e(a,A),l(A,`my-8`);let j=u(`h2`,A);e(A,j),l(j,`mt-0`),e(j,i(`API`));let G=p(`rue:component:anchor`);return e(A,G),t(()=>{let e=d(W,{rows:H});f(()=>s(e,A,G))}),n})}),c,g),c})};export{G as default};