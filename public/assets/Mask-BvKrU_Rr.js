import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,yt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g,n as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as v,i as y}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as b}from"./Code-4SUSUwRg.js";import{t as x}from"./tabs-Duzh3URW.js";import{r as S}from"./SidebarPlaygroundDesign-EU389JDE.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>Array.isArray(e)?e.some(e=>w(e)):e!=null&&e!==!1,T=e=>{if(e)return e===`start`?`1`:e===`end`?`2`:e},E=e=>{switch(e){case`xs`:return`size-12`;case`sm`:case`small`:return`size-16`;case`md`:case`middle`:case`medium`:return`size-24`;case`lg`:case`large`:return`size-32`;case`xl`:return`size-40`;case`2xl`:return`size-52`;case`3xl`:return`size-64`;default:return}},D=e=>{switch(e){case`top`:return`object-top`;case`bottom`:return`object-bottom`;case`left`:return`object-left`;case`right`:return`object-right`;case`top-left`:return`object-left-top`;case`top-right`:return`object-right-top`;case`bottom-left`:return`object-left-bottom`;case`bottom-right`:return`object-right-bottom`;default:return e?`object-center`:void 0}},O=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},k=e=>{switch(e){case`neutral`:return`bg-neutral text-neutral-content`;case`primary`:return`bg-primary text-primary-content`;case`secondary`:return`bg-secondary text-secondary-content`;case`accent`:return`bg-accent text-accent-content`;case`info`:return`bg-info text-info-content`;case`success`:return`bg-success text-success-content`;case`warning`:return`bg-warning text-warning-content`;case`error`:return`bg-error text-error-content`;case`base`:return`bg-base-200 text-base-content`;default:return}},A=e=>{switch(e){case`neutral`:return`ring-neutral/35`;case`primary`:return`ring-primary/35`;case`secondary`:return`ring-secondary/35`;case`accent`:return`ring-accent/35`;case`info`:return`ring-info/35`;case`success`:return`ring-success/35`;case`warning`:return`ring-warning/35`;case`error`:return`ring-error/35`;default:return`ring-base-300`}},j=({shape:e,half:t,size:n,fit:r,position:i,tone:a,bordered:o,ring:s,shadow:c,interactive:l})=>{let u=`mask mask-${e??`squircle`}`,d=T(t),f=E(n),p=O(r),m=D(i),h=k(a);return d&&(u+=` mask-half-${d}`),f&&(u+=` ${f}`),p&&(u+=` ${p}`),m&&(u+=` ${m}`),h&&(u+=` ${h}`),o&&(u+=` ring-1 ring-inset ring-base-300/80`),s&&(u+=` ring-2 ring-offset-2 ring-offset-base-100 ${A(a)}`),c&&(u+=` shadow-xl shadow-base-content/10`),l&&(u+=` transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl`),u},M=t=>{let{__rue_rest_omit_0:d,__rue_rest_omit_1:f,__rue_rest_omit_2:_,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:T,__rue_rest_omit_9:E,__rue_rest_omit_10:D,__rue_rest_omit_11:O,__rue_rest_omit_12:k,__rue_rest_omit_13:A,__rue_rest_omit_14:M,__rue_rest_omit_15:N,__rue_rest_omit_16:P,__rue_rest_omit_17:F,__rue_rest_omit_18:I,__rue_rest_omit_19:L,__rue_rest_omit_20:R,__rue_rest_omit_21:z,rest:B,cls:V,contentNode:H,mediaMode:U}=g(`useSetup:0:0`,()=>o(()=>{let{as:e,shape:n,half:i,size:a,fit:o,position:s,tone:c,bordered:l,ring:u,shadow:d,interactive:f,src:p,alt:m,imageProps:h,wrapperClassName:_,imageClassName:v,content:y,contentClassName:b,caption:x,captionClassName:S,className:C,children:T,...E}=t,D=g(`computed:1:0`,()=>r(()=>j({shape:t.shape===void 0?`squircle`:t.shape,half:t.half,size:t.size,fit:t.fit===void 0?`cover`:t.fit,position:t.position,tone:t.tone,bordered:t.bordered,ring:t.ring,shadow:t.shadow,interactive:t.interactive}))),O=g(`computed:1:1`,()=>r(()=>t.content??t.children)),k=O;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:T,rest:E,cls:D,contentNode:O,mediaMode:g(`computed:1:2`,()=>r(()=>!!t.src&&(w(k.get())||t.caption!=null||t.wrapperClassName!=null||t.imageClassName!=null||t.contentClassName!=null||t.captionClassName!=null||(t.as===void 0?`img`:t.as)===`figure`)))}}));if(U.get()){let r=C(`relative inline-flex flex-col items-center gap-3`,t.wrapperClassName);return(t.as===void 0?`img`:t.as)===`div`?s(o=>{let d=l(`div`,o);h(()=>{m(d,B)}),h(()=>{i(d,r)});let f=l(`div`,d);n(d,f),i(f,`relative inline-flex`);let g=l(`img`,f);n(f,g),h(()=>{m(g,t.imageProps)}),h(()=>{c(g,`src`,String(t.src))}),h(()=>{c(g,`alt`,String(t.alt))}),h(()=>{i(g,C(C(V.get(),t.className),t.imageClassName))});let _=a(`rue:slot:anchor`);n(f,_),h(()=>{let r=w(H.get())?s(()=>{let r=p(),o=l(`div`,r);n(r,o),h(()=>{i(o,C(`absolute inset-0 grid place-items-center p-4 text-center`,t.contentClassName))});let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let t=H.get();e(()=>u(t,o,s))}),r}):``;e(()=>u(r,f,_))});let v=a(`rue:slot:anchor`);return n(d,v),h(()=>{let r=t.caption==null?``:s(()=>{let r=p(),o=l(`div`,r);n(r,o),h(()=>{i(o,C(`text-center text-sm opacity-70`,t.captionClassName))});let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let n=t.caption;e(()=>u(n,o,s))}),r});e(()=>u(r,d,v))}),d}):s(o=>{let d=l(`figure`,o);h(()=>{m(d,B)}),h(()=>{i(d,r)});let f=l(`div`,d);n(d,f),i(f,`relative inline-flex`);let g=l(`img`,f);n(f,g),h(()=>{m(g,t.imageProps)}),h(()=>{c(g,`src`,String(t.src))}),h(()=>{c(g,`alt`,String(t.alt))}),h(()=>{i(g,C(C(V.get(),t.className),t.imageClassName))});let _=a(`rue:slot:anchor`);n(f,_),h(()=>{let r=w(H.get())?s(()=>{let r=p(),o=l(`div`,r);n(r,o),h(()=>{i(o,C(`absolute inset-0 grid place-items-center p-4 text-center`,t.contentClassName))});let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let t=H.get();e(()=>u(t,o,s))}),r}):``;e(()=>u(r,f,_))});let v=a(`rue:slot:anchor`);return n(d,v),h(()=>{let r=t.caption==null?``:s(()=>{let r=p(),o=l(`figcaption`,r);n(r,o),h(()=>{i(o,C(`text-center text-sm opacity-70`,t.captionClassName))});let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let n=t.caption;e(()=>u(n,o,s))}),r});e(()=>u(r,d,v))}),d})}let W=C(V.get(),t.className);return(t.as===void 0?`img`:t.as)===`div`?s(r=>{let o=l(`div`,r);h(()=>{m(o,B)}),h(()=>{i(o,W)});let s=a(`rue:children:anchor`);return n(o,s),h(()=>{let n=t.children;e(()=>u(n,o,s))}),o}):(t.as===void 0?`img`:t.as)===`span`?s(r=>{let o=l(`span`,r);h(()=>{m(o,B)}),h(()=>{i(o,W)});let s=a(`rue:children:anchor`);return n(o,s),h(()=>{let n=t.children;e(()=>u(n,o,s))}),o}):(t.as===void 0?`img`:t.as)===`figure`?s(r=>{let o=l(`figure`,r);h(()=>{m(o,B)}),h(()=>{i(o,W)});let s=a(`rue:children:anchor`);return n(o,s),h(()=>{let n=t.children;e(()=>u(n,o,s))}),o}):(t.as===void 0?`img`:t.as)===`section`?s(r=>{let o=l(`section`,r);h(()=>{m(o,B)}),h(()=>{i(o,W)});let s=a(`rue:children:anchor`);return n(o,s),h(()=>{let n=t.children;e(()=>u(n,o,s))}),o}):(t.as===void 0?`img`:t.as)===`article`?s(r=>{let o=l(`article`,r);h(()=>{m(o,B)}),h(()=>{i(o,W)});let s=a(`rue:children:anchor`);return n(o,s),h(()=>{let n=t.children;e(()=>u(n,o,s))}),o}):(t.as===void 0?`img`:t.as)===`a`?s(r=>{let o=l(`a`,r);h(()=>{m(o,B)}),h(()=>{i(o,W)});let s=a(`rue:children:anchor`);return n(o,s),h(()=>{let n=t.children;e(()=>u(n,o,s))}),o}):(t.as===void 0?`img`:t.as)===`button`?s(r=>{let o=l(`button`,r);h(()=>{m(o,B)}),h(()=>{i(o,W)});let s=a(`rue:children:anchor`);return n(o,s),h(()=>{let n=t.children;e(()=>u(n,o,s))}),o}):s(e=>{let n=l(`img`,e);return h(()=>{m(n,B)}),h(()=>{c(n,`src`,String(t.src))}),h(()=>{c(n,`alt`,String(t.alt))}),h(()=>{i(n,W)}),n})},N=`https://picsum.photos/320/320?grayscale`,P=`https://picsum.photos/420/240?grayscale`,F=`https://picsum.photos/240/420?grayscale`,I=[`squircle`,`heart`,`hexagon`,`hexagon-2`,`decagon`,`pentagon`,`diamond`,`square`,`circle`],L=[`star`,`star-2`],R=[`triangle`,`triangle-2`,`triangle-3`,`triangle-4`],z=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],B=[{label:`cover`,fit:`cover`,src:P},{label:`contain`,fit:`contain`,src:F},{label:`fill`,fit:`fill`,src:P}],V=[{label:`Base`,tone:`base`},{label:`Primary`,tone:`primary`},{label:`Secondary`,tone:`secondary`},{label:`Accent`,tone:`accent`},{label:`Success`,tone:`success`},{label:`Warning`,tone:`warning`}],H=[{prop:`as`,description:`指定渲染标签，默认输出 img，也可渲染 div、figure 等任意宿主元素`,type:`string`,defaultValue:`'img'`},{prop:`shape`,description:`遮罩形状，覆盖当前支持的全部 mask-* 造型`,type:`'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,defaultValue:`'squircle'`},{prop:`half`,description:`半边遮罩；支持数字写法，也支持 start / end 语义别名`,type:`'1' | '2' | 'start' | 'end'`,defaultValue:`-`},{prop:`size`,description:`语义尺寸，映射到一组常用正方形尺寸 class`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,defaultValue:`-`},{prop:`fit`,description:`媒体内容适配模式，输出 object-* 类名`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`'cover'`},{prop:`tone`,description:`给非图片宿主补充背景与前景色，方便做头像牌、数字徽记和内容卡片`,type:`'base' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`-`},{prop:`bordered`,description:`追加轻量内描边，适合浅背景图片或卡片`,type:`boolean`,defaultValue:`false`},{prop:`ring`,description:`追加 ring 与 offset，tone 存在时会自动继承对应的环颜色`,type:`boolean`,defaultValue:`false`},{prop:`shadow`,description:`追加投影，适合头像、封面和内容模块`,type:`boolean`,defaultValue:`false`},{prop:`interactive`,description:`追加轻量 hover 动效，方便做可点击素材墙或精选卡片`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`透传自定义样式类，可与组件生成的 mask 类叠加`,type:`string`,defaultValue:`-`}],U=t=>s(r=>{let o=l(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=l(`div`,o);n(o,c),i(c,`flex flex-wrap items-start justify-between gap-3`);let m=l(`div`,c);n(c,m);let g=l(`h2`,m);n(m,g),i(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,d(`# `));let _=a(`rue:slot:anchor`);n(g,_),h(()=>{let n=t.title;e(()=>u(n,g,_))});let v=a(`rue:slot:anchor`);n(m,v),h(()=>{let r=t.summary?s(()=>{let r=p(),o=l(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let n=t.summary;e(()=>u(n,o,s))}),r}):``;e(()=>u(r,m,v))});let y=a(`rue:component:anchor`);n(o,y),h(()=>{let n=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>u(n,o,y))});let S=a(`rue:slot:anchor`);return n(o,S),h(()=>{let r=t.tab.value===`preview`?t.preview():s(()=>{let r=p(),i=a(`rue:component:anchor`);return n(r,i),h(()=>{let n=f(b,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>u(n,r,i))}),r});e(()=>u(r,o,S))}),o}),W=t=>s(r=>{let o=l(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=l(`table`,o);n(o,f),i(f,`table table-zebra`);let m=l(`thead`,f);n(f,m);let g=l(`tr`,m);n(m,g);let v=l(`th`,g);n(g,v),n(v,d(`属性`));let y=l(`th`,g);n(g,y),n(y,d(`说明`));let b=l(`th`,g);n(g,b),n(b,d(`类型`));let x=l(`th`,g);n(g,x),n(x,d(`默认值`));let S=l(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return h(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,d)=>{u(s(()=>{let r=p(),i=l(`tr`,r);n(r,i),h(()=>{c(i,`key`,String(t.prop))});let o=l(`td`,i);n(i,o);let s=l(`code`,o);n(o,s);let d=a(`rue:slot:anchor`);n(s,d),h(()=>{let n=t.prop;e(()=>u(n,s,d))});let f=l(`td`,i);n(i,f);let m=a(`rue:slot:anchor`);n(f,m),h(()=>{let n=t.description;e(()=>u(n,f,m))});let g=l(`td`,i);n(i,g);let _=l(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),h(()=>{let n=t.type;e(()=>u(n,_,v))});let y=l(`td`,i);n(i,y);let b=l(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),h(()=>{let n=t.defaultValue;e(()=>u(n,b,x))}),r}),r,i)}})}),o}),G=()=>{let{tabShapes:r,tabStars:c,tabTriangles:m,tabHalf:_,tabSize:b,tabFit:x,tabTone:C}=g(`useSetup:0:0`,()=>o(()=>({tabShapes:g(`ref:1:0`,()=>t(`preview`)),tabStars:g(`ref:1:1`,()=>t(`preview`)),tabTriangles:g(`ref:1:2`,()=>t(`preview`)),tabHalf:g(`ref:1:3`,()=>t(`preview`)),tabSize:g(`ref:1:4`,()=>t(`preview`)),tabFit:g(`ref:1:5`,()=>t(`preview`)),tabTone:g(`ref:1:6`,()=>t(`preview`))})));return s(t=>{let o=p(),g=a(`rue:component:anchor`);return n(o,g),u(f(S,{children:s(()=>{let t=p(),o=l(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let s=l(`h1`,o);n(o,s),n(s,d(`Mask 形状裁切`));let g=l(`p`,o);n(o,g),i(g,`text-sm mt-3 mb-3`),n(g,d(`Mask 现在不只是基础 class 的薄封装。它使用 Rue 的轻量视觉路线，同时补上尺寸、fit、tone、ring 与交互态这些更适合实际页面搭建的语义化能力。`));let S=a(`rue:component:anchor`);n(o,S),h(()=>{let t=f(U,{title:`Core shapes`,summary:`展示基础形状示例，并统一到更整洁的卡片布局里。`,tab:r,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-4`,"data-testid":`mask-shapes-demo`,children:I.map(e=>y(M,{shape:e,src:N,alt:e,size:`md`,bordered:!0},e))})}),code:`<Mask shape="squircle" src="${N}" alt="squircle" size="md" bordered />
<Mask shape="heart" src="${N}" alt="heart" size="md" bordered />
<Mask shape="hexagon" src="${N}" alt="hexagon" size="md" bordered />
<Mask shape="hexagon-2" src="${N}" alt="hexagon-2" size="md" bordered />
<Mask shape="decagon" src="${N}" alt="decagon" size="md" bordered />
<Mask shape="pentagon" src="${N}" alt="pentagon" size="md" bordered />
<Mask shape="diamond" src="${N}" alt="diamond" size="md" bordered />
<Mask shape="square" src="${N}" alt="square" size="md" bordered />
<Mask shape="circle" src="${N}" alt="circle" size="md" bordered />`});e(()=>u(t,o,S))});let w=a(`rue:component:anchor`);n(o,w),h(()=>{let t=f(U,{title:`Star variants`,summary:`展示星形与粗星形示例，增加 ring 和 hover，适合头像墙或精选内容。`,tab:c,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-5`,children:L.map(e=>y(M,{shape:e,src:N,alt:e,size:`lg`,ring:!0,shadow:!0,interactive:!0},e))})}),code:`<Mask shape="star" src="${N}" alt="star" size="lg" ring shadow interactive />
<Mask shape="star-2" src="${N}" alt="star-2" size="lg" ring shadow interactive />`});e(()=>u(t,o,w))});let T=a(`rue:component:anchor`);n(o,T),h(()=>{let t=f(U,{title:`Triangle variants`,summary:`展示四向三角形示例，并通过统一尺寸让方向差异更好观察。`,tab:m,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap gap-5`,children:R.map(e=>y(M,{shape:e,src:N,alt:e,size:`lg`,bordered:!0,shadow:!0},e))})}),code:`<Mask shape="triangle" src="${N}" alt="triangle" size="lg" bordered shadow />
<Mask shape="triangle-2" src="${N}" alt="triangle-2" size="lg" bordered shadow />
<Mask shape="triangle-3" src="${N}" alt="triangle-3" size="lg" bordered shadow />
<Mask shape="triangle-4" src="${N}" alt="triangle-4" size="lg" bordered shadow />`});e(()=>u(t,o,T))});let E=a(`rue:component:anchor`);n(o,E),h(()=>{let t=f(U,{title:`Half modifiers and arbitrary host`,summary:`展示 half modifier 与任意宿主演示，并补上 start / end 语义别名。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap items-center gap-6`,children:[y(M,{shape:`star`,half:`1`,src:N,alt:`star half 1`,size:`lg`,ring:!0}),y(M,{shape:`star`,half:`2`,src:N,alt:`star half 2`,size:`lg`,ring:!0}),y(M,{shape:`diamond`,half:`start`,src:N,alt:`diamond start`,size:`lg`,bordered:!0}),y(M,{as:`div`,shape:`diamond`,tone:`primary`,size:`lg`,ring:!0,shadow:!0,className:`grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]`,"data-testid":`mask-host-demo`,children:`Host`})]})}),code:`<Mask shape="star" half="1" src="${N}" alt="star half 1" size="lg" ring />
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
</Mask>`});e(()=>u(t,o,E))});let D=a(`rue:component:anchor`);n(o,D),h(()=>{let t=f(U,{title:`Semantic sizes`,summary:`尺寸别名适合常见头像和封面场景，不必每次都手写宽高 class。`,tab:b,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap items-end gap-5`,children:z.map(e=>v(`div`,{className:`flex flex-col items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-80`,children:[y(M,{shape:`circle`,src:N,alt:e,size:e,ring:!0}),y(`span`,{children:e})]},e))})}),code:`<Mask shape="circle" src="${N}" alt="xs" size="xs" ring />
<Mask shape="circle" src="${N}" alt="sm" size="sm" ring />
<Mask shape="circle" src="${N}" alt="md" size="md" ring />
<Mask shape="circle" src="${N}" alt="lg" size="lg" ring />
<Mask shape="circle" src="${N}" alt="xl" size="xl" ring />
<Mask shape="circle" src="${N}" alt="2xl" size="2xl" ring />`});e(()=>u(t,o,D))});let O=a(`rue:component:anchor`);n(o,O),h(()=>{let t=f(U,{title:`Fit modes`,summary:`fit 语义让宽图、竖图和封面图都能直接得到明确的裁切策略。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 md:grid-cols-3`,children:B.map(e=>v(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-xs font-semibold uppercase tracking-[0.18em] opacity-70`,children:e.label}),y(`div`,{className:`rounded-box bg-base-200 p-4`,children:y(M,{shape:`hexagon-2`,src:e.src,alt:e.label,size:`xl`,fit:e.fit,bordered:!0,className:`mx-auto`})})]},e.label))})}),code:`<Mask shape="hexagon-2" src="${P}" alt="cover" size="xl" fit="cover" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${F}" alt="contain" size="xl" fit="contain" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${P}" alt="fill" size="xl" fit="fill" bordered className="mx-auto" />`});e(()=>u(t,o,O))});let k=a(`rue:component:anchor`);n(o,k),h(()=>{let t=f(U,{title:`Tone surfaces`,summary:`tone、ring、shadow 组合后，Mask 也能承担数字徽记、内容牌和亮点卡片的职责。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6`,children:[y(`div`,{className:`flex flex-wrap gap-4`,children:V.map(e=>y(M,{as:`div`,shape:`squircle`,tone:e.tone,size:`md`,ring:!0,className:`grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]`,children:e.label},e.label))}),v(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(M,{as:`div`,shape:`hexagon`,tone:`secondary`,size:`xl`,ring:!0,shadow:!0,interactive:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-3xl font-black`,children:`24`}),y(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-80`,children:`Launches`})]})}),y(M,{as:`div`,shape:`diamond`,tone:`accent`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-sm font-semibold uppercase tracking-[0.18em]`,children:`Featured`}),y(`div`,{className:`text-xs opacity-80`,children:`Rue Studio`})]})}),y(M,{as:`div`,shape:`circle`,tone:`success`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:v(`div`,{className:`space-y-1`,children:[y(`div`,{className:`text-2xl font-black`,children:`98%`}),y(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-80`,children:`Approval`})]})})]})]})}),code:`<div className="flex flex-wrap gap-4">
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
</div>`});e(()=>u(t,o,k))});let A=l(`div`,o);n(o,A),i(A,`my-8`);let j=l(`h2`,A);n(A,j),i(j,`mt-0`),n(j,d(`API`));let G=a(`rue:component:anchor`);return n(A,G),h(()=>{let t=f(W,{rows:H});e(()=>u(t,A,G))}),t})}),o,g),o})};export{G as default};