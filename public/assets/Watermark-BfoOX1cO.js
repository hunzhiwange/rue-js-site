import{$ as e,Ht as t,J as n,Lt as r,Mt as i,Q as a,St as o,X as s,Xt as c,Z as l,at as u,dt as d,et as f,ft as p,gt as m,i as h,l as g,mt as _,pt as v,q as y,qt as b,r as x,s as S,st as C,t as w}from"./vapor-runtime-iQZthBPQ.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as O,i as k}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as A}from"./button-CyhsFe_V.js";import{t as j}from"./card-ChtpCSVB.js";import{t as M}from"./badge-BBo7V0Er.js";import{t as N}from"./range-DKDXCA21.js";import{r as P}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as F}from"./PreviewBlock-DJFn4Hia.js";var I=100,ee=100,te=9,ne=1,L=.2,R=.28,z=`rgba(15, 23, 42, ${L})`,B=`rgba(248, 250, 252, ${R})`,V=`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,re=120,H=64,U=32,W=24,G=80,ie=new Map,ae=new Map,K=(...e)=>e.filter(Boolean).join(` `),oe=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},q=e=>e.startsWith(`--`)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),se=e=>Object.entries(e).filter(([,e])=>e!==void 0).map(([e,t])=>`${q(e)}: ${String(t)}`).join(`; `),ce=(e,t)=>{let n=se(e);if(!t)return n;if(typeof t==`string`)return n?`${n}; ${t}`:t;let r=se(t);return n?r?`${n}; ${r}`:n:r},J=(e,t,n)=>Math.min(n,Math.max(t,e)),Y=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),X=e=>{if(!e)return 1;let t=e.trim();if(!t||t===`none`)return 1;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?J(n/100,0,1):J(n,0,1):1},le=e=>{let t=e.trim();if(t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?J(Math.round(n/100*255),0,255):J(Math.round(n),0,255):0},ue=(e,t=1)=>{let n=e.trim();if(n===`none`)return 0;let r=Number.parseFloat(n);return Number.isFinite(r)?n.endsWith(`%`)?r/100*t:r:0},de=e=>{if(!e)return 0;let t=e.trim();if(!t||t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`rad`)?n*180/Math.PI:t.endsWith(`grad`)?n*.9:t.endsWith(`turn`)?n*360:n:0},fe=(e,t,n,r)=>{let i=n*Math.PI/180,a=t*Math.cos(i),o=t*Math.sin(i),s=e+.3963377774*a+.2158037573*o,c=e-.1055613458*a-.0638541728*o,l=e-.0894841775*a-1.291485548*o,u=s**3,d=c**3,f=l**3,p=e=>{let t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return J(Math.round(t*255),0,255)};return{r:p(4.0767416621*u-3.3077115913*d+.2309699292*f),g:p(-1.2684380046*u+2.6097574011*d-.3413193965*f),b:p(-.0041960863*u-.7034186147*d+1.707614701*f),a:r}},pe=e=>{if(!e)return null;let t=e.trim().toLowerCase();if(!t||t===`transparent`)return null;let n=t.match(/^rgba?\((.+)\)$/);if(n){let[e,t]=n[1].split(/\s*\/\s*/),r=e.includes(`,`),i=r?e.split(`,`).map(e=>e.trim()):e.trim().split(/\s+/),a=t??(r?i[3]:void 0);if(i.length>=3)return{r:le(i[0]),g:le(i[1]),b:le(i[2]),a:X(a)}}let r=t.match(/^oklch\((.+)\)$/);if(r){let[e,t]=r[1].split(/\s*\/\s*/),n=e.trim().split(/\s+/);if(n.length>=3)return fe(J(ue(n[0]),0,1),Math.max(ue(n[1],.4),0),de(n[2]),X(t))}let i=t.match(/^#([0-9a-f]{3,8})$/);if(!i)return null;let a=i[1];return a.length===3||a.length===4?{r:Number.parseInt(a[0]+a[0],16),g:Number.parseInt(a[1]+a[1],16),b:Number.parseInt(a[2]+a[2],16),a:a.length===4?Number.parseInt(a[3]+a[3],16)/255:1}:a.length===6||a.length===8?{r:Number.parseInt(a.slice(0,2),16),g:Number.parseInt(a.slice(2,4),16),b:Number.parseInt(a.slice(4,6),16),a:a.length===8?Number.parseInt(a.slice(6,8),16)/255:1}:null},me=({r:e,g:t,b:n})=>{let r=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4},i=r(e),a=r(t),o=r(n);return i*.2126+a*.7152+o*.0722},he=(e,t)=>`rgba(${e.r}, ${e.g}, ${e.b}, ${t})`,ge=(e,t)=>{let n=e.getAttribute(`data-rue-appearance`)??e.getAttribute(`data-theme`);return n===`dark`||n===`night`||n===`coffee`?!0:t.colorScheme.split(/\s+/).includes(`dark`)},_e=(e,t)=>{let n=me(e)<.35;return t?he(t,n?R:L):n?B:z},ve=e=>{if(!e||typeof window>`u`)return z;let t=!1,n=null,r=e;for(;r;){let e=window.getComputedStyle(r),i=pe(e.getPropertyValue(`--color-base-content`));i&&i.a>.01&&(n=i);let a=pe(e.backgroundColor);if(a&&a.a>.01)return _e(a,n);let o=pe(e.getPropertyValue(`--color-base-100`));if(o&&o.a>.01)return _e(o,n);ge(r,e)&&(t=!0),r=r.parentElement}let i=pe(window.getComputedStyle(e).color);return i?me(i)>.6?he(i,R):he(i,L):t?n?he(n,R):B:z},ye=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=Number.parseFloat(e);if(Number.isFinite(t))return e.endsWith(`rem`)?t*16:t}return 16},be=e=>e==null?[]:(Array.isArray(e)?e:[e]).flatMap(e=>String(e).split(/\r?\n/)),xe=e=>e.some(e=>e.trim().length>0),Se=(e,t,n,r,i)=>{let a=ye(t.fontSize),o=Math.max(Math.round(a*1.45),a+6);if(i)return{markWidth:Math.max(n??re,U),markHeight:Math.max(r??H,W),lineHeight:o,fontSizePx:a};if(n!=null&&r!=null)return{markWidth:Math.max(n,U),markHeight:Math.max(r,W),lineHeight:o,fontSizePx:a};let s=t.fontFamily??V,c=t.fontWeight??`normal`,l=t.fontStyle&&t.fontStyle!==`none`?t.fontStyle:`normal`,u=0;if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);t&&(t.font=`${l} ${c} ${a}px ${s}`,u=Math.ceil(e.reduce((e,n)=>Math.max(e,t.measureText(n).width),0)))}u||=Math.ceil(e.reduce((e,t)=>Math.max(e,t.length*a*.62),0));let d=Math.max(e.length,1),f=Math.ceil(a+(d-1)*o);return{markWidth:Math.max(n??u,U),markHeight:Math.max(r??f,W),lineHeight:o,fontSizePx:a}},Ce=e=>{switch(e){case`left`:case`start`:return{anchor:`start`,xRatio:0};case`right`:case`end`:return{anchor:`end`,xRatio:1};default:return{anchor:`middle`,xRatio:.5}}},we=e=>[e.color??``,e.fontSize??``,e.fontWeight??``,e.fontStyle??``,e.fontFamily??``,e.textAlign??``],Te=({image:e,lines:t,font:n,width:r,height:i})=>JSON.stringify([e??``,t,we(n),r??``,i??``]),Ee=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>JSON.stringify([e??``,t,n,we(r),i,a,o.markWidth,o.markHeight,o.lineHeight,o.fontSizePx,s]),De=(e,t)=>{let n=e.get(t);return n!==void 0&&(e.delete(t),e.set(t,n)),n},Oe=(e,t,n)=>{for(e.delete(t),e.set(t,n);e.size>G;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}return n},ke=(e,t,n)=>{let r=e/2,i=t/2,a=n?.[0]??r,o=n?.[1]??i,s=a-r,c=o-i,l=`0px`,u=`0px`,d=`100%`,f=`100%`;return s>0&&(l=`${s}px`,d=`calc(100% - ${s}px)`,s=0),c>0&&(u=`${c}px`,f=`calc(100% - ${c}px)`,c=0),{left:l,top:u,width:d,height:f,backgroundPosition:`${s}px ${c}px`}},Ae=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>{let{markWidth:c,markHeight:l,lineHeight:u,fontSizePx:d}=o,f=c+i,p=l+a,m=i/2,h=a/2,g=m+c/2,_=h+l/2,v=r.color??z,y=r.fontWeight??`normal`,b=r.fontStyle&&r.fontStyle!==`none`?r.fontStyle:`normal`,x=r.fontFamily??V,{anchor:S,xRatio:C}=Ce(r.textAlign),w=``;if(e)w=`<image href="${Y(e)}" x="${m}" y="${h}" width="${c}" height="${l}" preserveAspectRatio="xMidYMid meet" />`;else{let e=d+(Math.max(t.length,1)-1)*u,n=h+Math.max((l-e)/2,0),r=m+c*C;w=t.map((e,t)=>`<text x="${r}" y="${n+t*u}" fill="${Y(v)}" font-size="${d}" font-weight="${Y(String(y))}" font-style="${Y(b)}" font-family="${Y(x)}" text-anchor="${S}" dominant-baseline="hanging">${Y(e)}</text>`).join(``)}let T=`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${p}" viewBox="0 0 ${f} ${p}"><g opacity="${s}" transform="rotate(${n} ${g} ${_})">${w}</g></svg>`;return{url:`url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(T)}")`,tileWidth:f,tileHeight:p}},Z=e=>{let i=T(`useSetup:0:0`,()=>b(()=>{let{zIndex:t,rotate:n,width:i,height:a,image:o,content:s,font:c,className:l,rootClassName:u,overlayClassName:d,style:f,overlayStyle:p,gap:g,offset:_,opacity:v,children:y,inherit:b,ref:x,...S}=e,C=T(`ref:1:0`,()=>r(void 0)),w=null,E=null,D=null,O=``,k=T(`computed:1:1`,()=>m(()=>be(e.content))),A=k,[j=I,M=ee]=e.gap===void 0?[I,ee]:e.gap,N=T(`computed:1:2`,()=>m(()=>!!e.image||xe(A.get()))),P=N,F=()=>!e.image&&!(e.font===void 0?{}:e.font).color&&xe(A.get())&&C.value?{...e.font===void 0?{}:e.font,color:C.value}:e.font===void 0?{}:e.font,L=t=>{let n=Te({image:e.image,lines:A.get(),font:t,width:e.width,height:e.height});return De(ie,n)||Oe(ie,n,Se(A.get(),t,e.width,e.height,e.image))},R=(t,n)=>{let r=A.get().length?A.get():[``],i=J(e.opacity===void 0?ne:e.opacity,0,1),a=Ee({image:e.image,lines:r,rotate:e.rotate===void 0?-22:e.rotate,font:t,gapX:j,gapY:M,dimensions:n,opacity:i});return De(ae,a)||Oe(ae,a,Ae({image:e.image,lines:r,rotate:e.rotate===void 0?-22:e.rotate,font:t,gapX:j,gapY:M,dimensions:n,opacity:i}))},z=()=>{let t=F(),n=ke(j,M,e.offset),r=L(t);return{placement:n,pattern:P.get()?R(t,r):null}},B=(t,n)=>{let r={position:e.style?.position??`relative`,overflow:e.style?.overflow??`hidden`,isolation:e.style?.isolation??`isolate`};return n?(r[`--rue-watermark-image`]=n.url,r[`--rue-watermark-size`]=`${n.tileWidth}px ${n.tileHeight}px`,r[`--rue-watermark-position`]=t.backgroundPosition,r[`--rue-watermark-left`]=t.left,r[`--rue-watermark-top`]=t.top,r[`--rue-watermark-width`]=t.width,r[`--rue-watermark-height`]=t.height,r[`--rue-watermark-z-index`]=String(e.zIndex??te)):e.inherit===void 0||e.inherit||(r[`--rue-watermark-image`]=`none`,r[`--rue-watermark-size`]=`auto`,r[`--rue-watermark-position`]=`0px 0px`,r[`--rue-watermark-left`]=`0px`,r[`--rue-watermark-top`]=`0px`,r[`--rue-watermark-width`]=`100%`,r[`--rue-watermark-height`]=`100%`,r[`--rue-watermark-z-index`]=`0`),ce(r,e.style)},V=(t,n)=>ce({position:`absolute`,left:n?t.left:`var(--rue-watermark-left, 0px)`,top:n?t.top:`var(--rue-watermark-top, 0px)`,width:n?t.width:`var(--rue-watermark-width, 100%)`,height:n?t.height:`var(--rue-watermark-height, 100%)`,pointerEvents:`none`,backgroundRepeat:`repeat`,backgroundImage:n||e.inherit===void 0||e.inherit?`var(--rue-watermark-image, none)`:`none`,backgroundSize:n||e.inherit===void 0||e.inherit?`var(--rue-watermark-size, auto)`:`auto`,backgroundPosition:n||e.inherit===void 0||e.inherit?`var(--rue-watermark-position, 0px 0px)`:`0px 0px`,zIndex:n||e.inherit===void 0||e.inherit?`var(--rue-watermark-z-index, 9)`:0},e.overlayStyle),re=()=>{let t=typeof e.style==`string`?e.style:[e.style?.background,e.style?.backgroundColor,e.style?.color,e.style?.colorScheme,e.style?.[`--color-base-100`],e.style?.[`--color-base-content`]].join(`|`);return JSON.stringify([A.get(),e.className??``,e.rootClassName??``,t])},H=T(`computed:1:3`,()=>m(()=>z())),U=T(`computed:1:4`,()=>m(()=>{let e=H.get();return B(e.placement,e.pattern)})),W=T(`computed:1:5`,()=>m(()=>{let e=H.get();return V(e.placement,e.pattern)})),G=(e,t)=>{e&&(t?e.setAttribute(`style`,t):e.removeAttribute(`style`))},K=()=>{let e=z();G(w,B(e.placement,e.pattern)),G(E,V(e.placement,e.pattern))},q=(t=!1)=>{if(e.image||(e.font===void 0?{}:e.font).color||!xe(A.get()))return;let n=re();if(!t&&w===D&&n===O)return;if(w){let e=z();G(w,B(e.placement,e.pattern))}let r=ve(w);D=w,O=n,C.value!==r&&(C.value=r,K())},se=t=>{w!==t&&(w=t,oe(e.ref,t),q(!0))},Y=e=>{E=e},X=()=>{let e=()=>q(!0);if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)};return h(()=>{q(!0),X()}),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:g,__rue_rest_omit_13:_,__rue_rest_omit_14:v,__rue_rest_omit_15:y,__rue_rest_omit_16:b,__rue_rest_omit_17:x,rest:S,autoTextColor:C,lines:k,gapX:j,gapY:M,hasLocalPattern:N,getResolvedFont:F,getCachedDimensions:L,getCachedPattern:R,getPatternState:z,createRootStyleText:B,createOverlayStyleText:V,createAutoTextColorSignature:re,patternState:H,rootStyleText:U,overlayStyleText:W,syncStyleText:G,syncPatternStyles:K,syncAutoTextColor:q,applyRootRef:se,applyOverlayRef:Y,scheduleAutoTextColorSync:X,rootElement:w,overlayElement:E,lastAutoTextColorElement:D,lastAutoTextColorSignature:O}})),{__rue_rest_omit_0:o,__rue_rest_omit_1:l,__rue_rest_omit_2:f,__rue_rest_omit_3:p,__rue_rest_omit_4:v,__rue_rest_omit_5:y,__rue_rest_omit_6:w,__rue_rest_omit_7:E,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,__rue_rest_omit_14:P,__rue_rest_omit_15:F,__rue_rest_omit_16:L,__rue_rest_omit_17:R,rest:z,autoTextColor:B,lines:V,gapX:re,gapY:H,hasLocalPattern:U,getResolvedFont:W,getCachedDimensions:G,getCachedPattern:q,getPatternState:se,createRootStyleText:Y,createOverlayStyleText:X,createAutoTextColorSignature:le,patternState:ue,rootStyleText:de,overlayStyleText:fe,syncStyleText:pe,syncPatternStyles:me,syncAutoTextColor:he,applyRootRef:ge,applyOverlayRef:_e,scheduleAutoTextColorSync:ye}=i,{rootElement:Ce,overlayElement:we,lastAutoTextColorElement:Z,lastAutoTextColorSignature:je}=i;return g(r=>{let i=a(`div`,r);c(()=>{_(i,z)});let o=D(i,()=>ge);x(()=>{o()}),c(()=>{C(i,K(`rue-watermark`,e.className,e.rootClassName))}),c(()=>{d(i,de.get())}),u(i,`data-rue-watermark-root`,`true`),c(()=>{u(i,`data-rue-watermark-inherit`,String(e.inherit===void 0||e.inherit?`true`:`false`))});let l=a(`div`,i);n(i,l),u(l,`aria-hidden`,`true`);let f=D(l,()=>_e);x(()=>{f()}),c(()=>{C(l,K(`rue-watermark-overlay`,e.overlayClassName))}),c(()=>{d(l,fe.get())}),u(l,`data-rue-watermark-overlay`,`true`);let p=s(`rue:children:anchor`);return n(i,p),c(()=>{let n=e.children;t(()=>S(n,i,p))}),i})},je=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22196%22%20height%3D%2272%22%20viewBox%3D%220%200%20196%2072%22%3E%3Crect%20width%3D%22196%22%20height%3D%2272%22%20rx%3D%2218%22%20fill%3D%22%230f172a%22%2F%3E%3Cpath%20d%3D%22M30%2019h22c12%200%2019%206%2019%2017%200%2011-7%2017-19%2017H45v14H30V19Zm22%2022c4%200%206-2%206-5s-2-5-6-5H45v10h7Zm35-22h15l10%2031%2010-31h15l-17%2048H104L87%2019Zm60%200h18l15%2048h-15l-2.2-7.5h-13.7L147%2067h-15l15-48Zm13%2029-4-14-4%2014h8Z%22%20fill%3D%22%23f8fafc%22%2F%3E%3C%2Fsvg%3E`,Me=[{label:`共享链接`,value:`1.8k`,detail:`过去 24 小时`},{label:`导出快照`,value:`312`,detail:`包含 38 个外部成员`},{label:`访问终端`,value:`57`,detail:`待二次确认设备 5 台`}],Ne=[{prop:`content`,description:`文字水印内容，支持字符串或多行数组。`,type:`string | string[]`,defaultValue:`-`},{prop:`image`,description:`图片水印地址，适合 logo、签章、业务标记。`,type:`string`,defaultValue:`-`},{prop:`font`,description:`文字水印的颜色、字号、字重、字体和对齐方式。`,type:`{ color?: string; fontSize?: number | string; fontWeight?: number | string; fontStyle?: string; fontFamily?: string; textAlign?: string }`,defaultValue:`{ color: 自动按宿主背景明暗推导, fontSize: 16 }`},{prop:`rotate`,description:`单个水印块的旋转角度。`,type:`number`,defaultValue:`-22`},{prop:`width / height`,description:`单个水印内容块的尺寸；不传时文本会按内容估算。`,type:`number`,defaultValue:`文本自动测量 / 图片 120 x 64`},{prop:`gap`,description:`水印块之间的水平与垂直间距。`,type:`[number, number]`,defaultValue:`[100, 100]`},{prop:`offset`,description:`起始铺设偏移量，便于与卡片头部或图像对齐。`,type:`[number, number]`,defaultValue:`[gapX / 2, gapY / 2]`},{prop:`zIndex`,description:`覆盖层层级，保持视觉上方但不阻断交互。`,type:`number`,defaultValue:`9`},{prop:`inherit`,description:`是否让后代 Watermark 复用当前图案与铺设参数。`,type:`boolean`,defaultValue:`true`},{prop:`className / rootClassName`,description:`根容器类名，便于直接叠加 Rue 的布局与视觉类。`,type:`string`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`覆盖层类名和样式，适合与圆角、混合模式、局部调优配合。`,type:`string / any`,defaultValue:`-`},{prop:`style`,description:`根容器行内样式；默认会自动补 position、overflow、isolation。`,type:`any`,defaultValue:`-`}],Pe=r=>g(i=>{let o=a(`div`,i);C(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=a(`table`,o);n(o,d),C(d,`table table-zebra`);let f=a(`thead`,d);n(d,f);let p=a(`tr`,f);n(f,p);let m=a(`th`,p);n(p,m),n(m,e(`属性`));let h=a(`th`,p);n(p,h),n(h,e(`说明`));let _=a(`th`,p);n(p,_),n(_,e(`类型`));let v=a(`th`,p);n(p,v),n(v,e(`默认值`));let y=a(`tbody`,d);n(d,y);let b=s(`rue:list:start`),x=s(`rue:list:end`);n(y,b),n(y,x);let w=new Map;return c(()=>{w=E({items:r.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,r,i,o,d)=>{S(g(()=>{let r=l(),i=a(`tr`,r);n(r,i),c(()=>{u(i,`key`,String(e.prop))});let o=a(`td`,i);n(i,o);let d=a(`code`,o);n(o,d);let f=s(`rue:slot:anchor`);n(d,f),c(()=>{let n=e.prop;t(()=>S(n,d,f))});let p=a(`td`,i);n(i,p);let m=s(`rue:slot:anchor`);n(p,m),c(()=>{let n=e.description;t(()=>S(n,p,m))});let h=a(`td`,i);n(i,h);let g=a(`code`,h);n(h,g);let _=s(`rue:slot:anchor`);n(g,_),c(()=>{let n=e.type;t(()=>S(n,g,_))});let v=a(`td`,i);n(i,v);let y=a(`code`,v);n(v,y);let b=s(`rue:slot:anchor`);return n(y,b),c(()=>{let n=e.defaultValue;t(()=>S(n,y,b))}),r}),r,i)}})}),o}),Q={rotate:-22,gapX:120,gapY:96,offsetX:48,offsetY:48,fontSize:18,zIndex:12},Fe={rotate:-8,gapX:156,gapY:124,offsetX:64,offsetY:32,fontSize:14,zIndex:10},Ie=e=>typeof requestAnimationFrame==`function`?{type:`frame`,id:requestAnimationFrame(e)}:{type:`timeout`,id:setTimeout(e,0)},Le=e=>{if(e.type===`frame`){typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(e.id);return}clearTimeout(e.id)},$=e=>g(r=>{let i=l(),a=s(`rue:component:anchor`);return n(i,a),c(()=>{let n=w(N,{className:`range-sm`,rootClassName:`space-y-2`,valueClassName:`min-w-12 text-center tabular-nums`,label:e.label,min:e.min,max:e.max,value:e.value,showValue:{formatter:e=>String(e)},onValueChange:e.onValueChange,onValueCommit:e.onValueCommit});t(()=>S(n,i,a))}),i}),Re=()=>{let d=T(`useSetup:0:0`,()=>b(()=>{let e=T(`ref:1:0`,()=>r(`Rue Design`)),t=T(`ref:1:1`,()=>r(Q.rotate)),n=T(`ref:1:2`,()=>r(Q.gapX)),a=T(`ref:1:3`,()=>r(Q.gapY)),s=T(`ref:1:4`,()=>r(Q.offsetX)),c=T(`ref:1:5`,()=>r(Q.offsetY)),l=T(`ref:1:6`,()=>r(Q.fontSize)),u=T(`ref:1:7`,()=>r(Q.zIndex)),d=T(`ref:1:8`,()=>r(Q.rotate)),f=T(`ref:1:9`,()=>r(Q.gapX)),p=T(`ref:1:10`,()=>r(Q.gapY)),m=T(`ref:1:11`,()=>r(Q.offsetX)),h=T(`ref:1:12`,()=>r(Q.offsetY)),g=T(`ref:1:13`,()=>r(Q.fontSize)),_=T(`ref:1:14`,()=>r(Q.zIndex)),v=T(`ref:1:15`,()=>r(``)),y={rotate:d,gapX:f,gapY:p,offsetX:m,offsetY:h,fontSize:g,zIndex:_},b={...Q},x=null,S=e=>{t.value=e.rotate,n.value=e.gapX,a.value=e.gapY,s.value=e.offsetX,c.value=e.offsetY,l.value=e.fontSize,u.value=e.zIndex},C=e=>{d.value=e.rotate,f.value=e.gapX,p.value=e.gapY,m.value=e.offsetX,h.value=e.offsetY,g.value=e.fontSize,_.value=e.zIndex},w=()=>{x&&=(Le(x),null)},E=()=>{x=null,i(()=>{S(b)})},D=(e,t)=>{b[e]=t,!x&&(x=Ie(E))},O=(e,t)=>{b[e]=t,w(),i(()=>{S(b),y[e].value=t})},k=({nextContent:t,nextColor:n,nextControls:r})=>{w(),b={...r},i(()=>{e.value=t,v.value=n,S(r),C(r)})};return o(w),{content:e,rotate:t,gapX:n,gapY:a,offsetX:s,offsetY:c,fontSize:l,zIndex:u,rotateControl:d,gapXControl:f,gapYControl:p,offsetXControl:m,offsetYControl:h,fontSizeControl:g,zIndexControl:_,color:v,controlRefs:y,writePreviewControls:S,writeRangeControls:C,clearControlFlush:w,flushPreviewControls:E,queuePreviewControl:D,commitPreviewControl:O,applyWatermarkState:k,reset:()=>k({nextContent:`Rue Design`,nextColor:``,nextControls:Q}),applySparse:()=>k({nextContent:`Shared with Partner`,nextColor:`rgba(34, 197, 94, 0.22)`,nextControls:Fe}),pendingControls:b,controlFlush:x}})),{content:m,rotate:h,gapX:_,gapY:x,offsetX:E,offsetY:D,fontSize:O,zIndex:k,rotateControl:N,gapXControl:P,gapYControl:F,offsetXControl:I,offsetYControl:ee,fontSizeControl:te,zIndexControl:ne,color:L,controlRefs:R,writePreviewControls:z,writeRangeControls:B,clearControlFlush:V,flushPreviewControls:re,queuePreviewControl:H,commitPreviewControl:U,applyWatermarkState:W,reset:G,applySparse:ie}=d,{pendingControls:ae,controlFlush:K}=d;return g(r=>{let i=a(`div`,r);C(i,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let o=s(`rue:component:anchor`);n(i,o);let d=g(()=>{let r=l(),i=a(`div`,r);n(r,i),C(i,`space-y-4 p-5 md:p-6`);let o=a(`div`,i);n(i,o),C(o,`flex flex-wrap items-center justify-between gap-3`);let u=a(`div`,o);n(o,u);let d=a(`div`,u);n(u,d),C(d,`text-xs uppercase tracking-[0.18em] text-base-content/45`),n(d,e(`Scenario Sandbox`));let p=a(`div`,u);n(u,p),C(p,`mt-2 text-2xl font-semibold text-base-content`),n(p,e(`参数调整后的实时预览`));let h=s(`rue:component:anchor`);n(o,h);let _=g(()=>{let t=l();n(t,e(`z-index `));let r=f(t);return n(t,r),c(()=>{v(r,k.value)}),t});c(()=>{let e=w(M,{outline:!0,children:_});t(()=>S(e,o,h))});let y=a(`p`,i);n(i,y),C(y,`m-0 max-w-2xl text-sm leading-7 text-base-content/65`),n(y,e(`这里故意放了文字、徽标和按钮，方便观察水印对不同内容密度与层次关系的影响。`));let b=a(`div`,i);n(i,b),C(b,`grid gap-4 md:grid-cols-3`);let x=s(`rue:component:anchor`);n(b,x);let T=g(()=>{let t=l(),r=a(`div`,t);n(t,r),C(r,`text-sm font-semibold text-base-content`),n(r,e(`内容流`));let i=a(`p`,t);return n(t,i),C(i,`m-0 text-sm leading-7 text-base-content/65`),n(i,e(`Rue Watermark 会把铺设逻辑限制在当前容器内部，圆角、阴影和内容布局都可以继续由宿主容器控制。`)),t});S(w(j,{className:`bg-base-100/90 shadow-sm md:col-span-2`,children:w(j.Body,{children:T})}),b,x);let E=a(`div`,b);n(b,E),C(E,`rounded-[1.25rem] bg-accent px-4 py-5 text-accent-content shadow-sm`);let D=a(`div`,E);n(E,D),C(D,`text-xs uppercase tracking-[0.2em] opacity-70`),n(D,e(`Preset`));let O=a(`div`,E);n(E,O),C(O,`mt-2 text-2xl font-black`);let N=f(O);n(O,N),c(()=>{v(N,m.value)});let P=a(`div`,i);n(i,P),C(P,`flex flex-wrap gap-3`);let F=s(`rue:component:anchor`);n(P,F),S(w(A,{size:`sm`,color:`primary`,onClick:G,children:`重置参数`}),P,F);let I=s(`rue:component:anchor`);return n(P,I),S(w(A,{size:`sm`,type:`outlined`,onClick:ie,children:`切换到稀疏模式`}),P,I),r});c(()=>{let e=w(Z,{content:[m.value,`Scenario Sandbox`],rotate:h.value,gap:[_.value,x.value],offset:[E.value,D.value],zIndex:k.value,width:180,height:72,font:{color:L.value||void 0,fontSize:O.value,fontWeight:700,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:d});t(()=>S(e,i,o))});let b=s(`rue:component:anchor`);n(i,b);let T=g(()=>{let r=l(),i=a(`div`,r);n(r,i);let o=a(`div`,i);n(i,o),C(o,`text-sm font-semibold text-base-content`),n(o,e(`文本`));let d=a(`input`,i);n(i,d),C(d,`input input-bordered mt-2 w-full`),c(()=>{p(d,m.value)}),y(d,`input`,e=>{m.value=e.currentTarget.value});let f=s(`rue:component:anchor`);n(r,f),c(()=>{let e=w($,{label:`Rotate`,min:-90,max:90,value:N,onValueChange:e=>H(`rotate`,e),onValueCommit:e=>U(`rotate`,e)});t(()=>S(e,r,f))});let h=s(`rue:component:anchor`);n(r,h),c(()=>{let e=w($,{label:`Font size`,min:12,max:28,value:te,onValueChange:e=>H(`fontSize`,e),onValueCommit:e=>U(`fontSize`,e)});t(()=>S(e,r,h))});let g=s(`rue:component:anchor`);n(r,g),c(()=>{let e=w($,{label:`Gap X`,min:72,max:180,value:P,onValueChange:e=>H(`gapX`,e),onValueCommit:e=>U(`gapX`,e)});t(()=>S(e,r,g))});let _=s(`rue:component:anchor`);n(r,_),c(()=>{let e=w($,{label:`Gap Y`,min:72,max:180,value:F,onValueChange:e=>H(`gapY`,e),onValueCommit:e=>U(`gapY`,e)});t(()=>S(e,r,_))});let v=s(`rue:component:anchor`);n(r,v),c(()=>{let e=w($,{label:`Offset X`,min:0,max:120,value:I,onValueChange:e=>H(`offsetX`,e),onValueCommit:e=>U(`offsetX`,e)});t(()=>S(e,r,v))});let b=s(`rue:component:anchor`);n(r,b),c(()=>{let e=w($,{label:`Offset Y`,min:0,max:120,value:ee,onValueChange:e=>H(`offsetY`,e),onValueCommit:e=>U(`offsetY`,e)});t(()=>S(e,r,b))});let x=s(`rue:component:anchor`);n(r,x),c(()=>{let e=w($,{label:`z-index`,min:1,max:24,value:ne,onValueChange:e=>H(`zIndex`,e),onValueCommit:e=>U(`zIndex`,e)});t(()=>S(e,r,x))});let T=a(`div`,r);n(r,T);let E=a(`div`,T);n(T,E),C(E,`text-sm font-medium text-base-content`),n(E,e(`Color override`));let D=a(`input`,T);return n(T,D),C(D,`input input-bordered mt-2 w-full`),u(D,`placeholder`,`auto`),c(()=>{p(D,L.value)}),y(D,`input`,e=>{L.value=e.currentTarget.value}),r});return S(w(j,{className:`bg-base-100 shadow-sm`,children:w(j.Body,{className:`gap-4`,children:T})}),i,b),i})},ze=`const WatermarkCustomControlsDemo = () => {
  const content = ref('Rue Design')
  const rotate = ref(-22)
  const rotateControl = ref(-22)
  const gapX = ref(120)
  const gapXControl = ref(120)
  const gapY = ref(96)
  const offsetX = ref(48)
  const offsetY = ref(48)
  const fontSize = ref(18)
  const zIndex = ref(12)
  const color = ref('')
  let pendingFrame = 0
  let pendingRotate = rotate.value
  let pendingGapX = gapX.value

  const flushPreview = () => {
    pendingFrame = 0
    batch(() => {
      rotate.value = pendingRotate
      gapX.value = pendingGapX
    })
  }

  const queuePreview = () => {
    if (pendingFrame) return
    pendingFrame = requestAnimationFrame(flushPreview)
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]">
      <Watermark
        content={[content.value, 'Scenario Sandbox']}
        rotate={rotate.value}
        gap={[gapX.value, gapY.value]}
        offset={[offsetX.value, offsetY.value]}
        zIndex={zIndex.value}
        width={180}
        height={72}
        font={{
          color: color.value || undefined,
          fontSize: fontSize.value,
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        {/* preview content */}
      </Watermark>

      <Card>
        <Card.Body>
          <Range
            className="range-sm"
            min={-90}
            max={90}
            label="Rotate"
            value={rotateControl}
            showValue
            onValueChange={value => {
              pendingRotate = value
              queuePreview()
            }}
            onValueCommit={value => {
              pendingRotate = value
              rotate.value = value
              rotateControl.value = value
            }}
          />
          <Range
            className="range-sm"
            min={72}
            max={180}
            label="Gap X"
            value={gapXControl}
            showValue
            onValueChange={value => {
              pendingGapX = value
              queuePreview()
            }}
            onValueCommit={value => {
              pendingGapX = value
              gapX.value = value
              gapXControl.value = value
            }}
          />
          <input
            className="input input-bordered"
            placeholder="auto"
            value={color.value}
            onInput={(event: Event) => {
              color.value = (event.currentTarget as HTMLInputElement).value
            }}
          />
        </Card.Body>
      </Card>
    </div>
  )
}`,Be=()=>{let{tabs:i}=T(`useSetup:0:0:dup1`,()=>b(()=>({tabs:{basic:T(`ref:1:16`,()=>r(`preview`)),multiline:T(`ref:1:17`,()=>r(`preview`)),image:T(`ref:1:18`,()=>r(`preview`)),inherit:T(`ref:1:19`,()=>r(`preview`)),custom:T(`ref:1:20`,()=>r(`preview`))}})));return g(r=>{let o=l(),u=s(`rue:component:anchor`);return n(o,u),S(w(P,{children:g(()=>{let r=l(),o=a(`div`,r);n(r,o),C(o,`max-w-none prose prose-sm md:prose-base`);let u=a(`h1`,o);n(o,u),n(u,e(`Watermark 水印`));let d=a(`p`,o);n(o,d),C(d,`mt-3 mb-3 text-sm`),n(d,e(`Rue 的 Watermark 不照搬其他组件库的视觉，而是把能力落成更适合当前设计站点的轻量覆盖层。 你可以直接给任意容器加文字或图片水印，同时保留按钮、卡片、统计区这些内容本身的交互。`));let f=a(`h2`,o);n(o,f),n(f,e(`何时使用`));let p=a(`ul`,o);n(o,p);let m=a(`li`,p);n(p,m),n(m,e(`需要给卡片、报表、详情页加上“内部预览”“草稿”“仅限共享”等视觉标记。`));let h=a(`li`,p);n(p,h),n(h,e(`需要图片或文字水印覆盖在任意内容上，但又不希望阻断按钮、链接和表单的交互。`));let g=a(`li`,p);n(p,g),n(g,e(`需要局部容器继承上层水印图案，而不是为每一块内容重复写一遍配置。`));let _=s(`rue:component:anchor`);n(o,_),c(()=>{let e=w(F,{title:`Basic text watermark`,summary:`最直接的用法：给一个内容容器加上文本水印，按钮仍然可以正常点击。`,tab:i.basic,preview:k(Z,{content:`Rue Design`,className:`rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:O(`div`,{className:`grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-8`,children:[O(`div`,{className:`space-y-4`,children:[k(M,{variant:`secondary`,children:`Internal Preview`}),k(`h3`,{className:`m-0 text-3xl font-black tracking-tight text-base-content md:text-4xl`,children:`协作面板正在生成新一轮可共享快照`}),k(`p`,{className:`m-0 max-w-2xl text-sm leading-7 text-base-content/70`,children:`水印覆盖层默认在视觉上方，但采用 pointer-events none，不会挡住卡片、按钮和其它交互控件。`}),O(`div`,{className:`flex flex-wrap gap-3`,children:[k(A,{color:`primary`,children:`导出摘要`}),k(A,{type:`outlined`,children:`查看访问日志`})]})]}),k(j,{className:`bg-base-100/85 shadow-sm backdrop-blur-sm`,children:k(j.Body,{className:`gap-4`,children:Me.map(e=>O(`div`,{className:`rounded-box border border-base-300/70 bg-base-100/70 px-4 py-3`,children:[k(`div`,{className:`text-xs uppercase tracking-[0.2em] text-base-content/50`,children:e.label}),k(`div`,{className:`mt-2 text-2xl font-bold text-base-content`,children:e.value}),k(`div`,{className:`mt-1 text-sm text-base-content/60`,children:e.detail})]},e.label))})})]})}),code:`const stats = [
  { label: '共享链接', value: '1.8k', detail: '过去 24 小时' },
  { label: '导出快照', value: '312', detail: '包含 38 个外部成员' },
  { label: '访问终端', value: '57', detail: '待二次确认设备 5 台' },
]

<Watermark
  content="Rue Design"
  className="rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm"
>
  <div className="grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-8">
    <div className="space-y-4">
      <Badge variant="secondary">Internal Preview</Badge>
      <h3 className="m-0 text-3xl font-black tracking-tight text-base-content md:text-4xl">
        协作面板正在生成新一轮可共享快照
      </h3>
      <p className="m-0 max-w-2xl text-sm leading-7 text-base-content/70">
        水印覆盖层默认在视觉上方，但采用 pointer-events none，不会挡住卡片、按钮和其它交互控件。
      </p>
      <div className="flex flex-wrap gap-3">
        <Button color="primary">导出摘要</Button>
        <Button type="outlined">查看访问日志</Button>
      </div>
    </div>

    <Card className="bg-base-100/85 shadow-sm backdrop-blur-sm">
      <Card.Body className="gap-4">
        {stats.map(item => (
          <div
            key={item.label}
            className="rounded-box border border-base-300/70 bg-base-100/70 px-4 py-3"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-base-content/50">
              {item.label}
            </div>
            <div className="mt-2 text-2xl font-bold text-base-content">{item.value}</div>
            <div className="mt-1 text-sm text-base-content/60">{item.detail}</div>
          </div>
        ))}
      </Card.Body>
    </Card>
  </div>
</Watermark>`});t(()=>S(e,o,_))});let v=s(`rue:component:anchor`);n(o,v),c(()=>{let e=w(F,{title:`Multiline typography and tuned spacing`,summary:`支持多行内容、字族和铺设参数调优，更适合仪表盘、稿件和审批流页面。`,tab:i.multiline,preview:k(Z,{content:[`Confidential Build`,`Rue Design System`],rotate:-16,gap:[132,116],width:168,height:72,font:{color:`rgba(13, 22, 39, 0.15)`,fontSize:15,fontWeight:700,fontFamily:`Georgia, Times New Roman, serif`,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.88))] shadow-sm`,children:O(`div`,{className:`grid gap-4 p-5 md:grid-cols-3 md:p-6`,children:[k(j,{className:`bg-base-100/90 shadow-sm`,children:O(j.Body,{children:[k(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`Draft`}),k(`div`,{className:`text-lg font-semibold text-base-content`,children:`产品评审结论`}),k(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`用多行水印把容器语义说清楚，而不是只放一个模糊 logo。`})]})}),k(j,{className:`bg-base-100/90 shadow-sm md:col-span-2`,children:O(j.Body,{className:`gap-4`,children:[O(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[O(`div`,{children:[k(`div`,{className:`text-xs uppercase tracking-[0.16em] text-base-content/45`,children:`Access Scope`}),k(`div`,{className:`text-xl font-semibold text-base-content`,children:`仅限设计与法务同步窗口`})]}),k(M,{outline:!0,children:`Version 15`})]}),k(`p`,{className:`m-0 text-sm leading-7 text-base-content/65`,children:`通过 width、height、gap 和 font 组合，可以让文字块更像“签章”而不是背景噪音。`})]})})]})}),code:`<Watermark
  content={['Confidential Build', 'Rue Design System']}
  rotate={-16}
  gap={[132, 116]}
  width={168}
  height={72}
  font={{
    color: 'rgba(13, 22, 39, 0.15)',
    fontSize: 15,
    fontWeight: 700,
    fontFamily: 'Georgia, Times New Roman, serif',
    textAlign: 'center',
  }}
  className="rounded-[1.75rem] border border-base-300 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.88))] shadow-sm"
>
  <div className="grid gap-4 p-5 md:grid-cols-3 md:p-6">
    <Card className="bg-base-100/90 shadow-sm">
      <Card.Body>
        <div className="text-xs uppercase tracking-[0.18em] text-base-content/45">Draft</div>
        <div className="text-lg font-semibold text-base-content">产品评审结论</div>
        <p className="m-0 text-sm leading-6 text-base-content/65">
          用多行水印把容器语义说清楚，而不是只放一个模糊 logo。
        </p>
      </Card.Body>
    </Card>

    <Card className="bg-base-100/90 shadow-sm md:col-span-2">
      <Card.Body className="gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-base-content/45">
              Access Scope
            </div>
            <div className="text-xl font-semibold text-base-content">仅限设计与法务同步窗口</div>
          </div>
          <Badge outline>Version 15</Badge>
        </div>
        <p className="m-0 text-sm leading-7 text-base-content/65">
          通过 width、height、gap 和 font 组合，可以让文字块更像“签章”而不是背景噪音。
        </p>
      </Card.Body>
    </Card>
  </div>
</Watermark>`});t(()=>S(e,o,v))});let y=s(`rue:component:anchor`);n(o,y),c(()=>{let e=w(F,{title:`Image watermark`,summary:`图片模式适合品牌 logo、部门印记或业务章；Rue 这边建议把它用在局部容器，而不是整页满屏。`,tab:i.image,preview:k(Z,{image:je,width:156,height:58,rotate:-18,gap:[140,112],className:`rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`,children:O(`div`,{className:`grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_18rem] md:p-6`,children:[k(j,{className:`overflow-hidden bg-base-200/70 shadow-none`,children:O(j.Body,{className:`gap-4`,children:[k(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`Media Kit`}),k(`div`,{className:`text-2xl font-semibold text-base-content`,children:`品牌资产导出包`}),k(`p`,{className:`m-0 text-sm leading-7 text-base-content/65`,children:`图片水印不会吞掉原内容的层级信息，更适合 logo、组织印章和明确的来源标识。`})]})}),O(`div`,{className:`rounded-[1.25rem] bg-gradient-to-br from-neutral to-slate-900 p-5 text-neutral-content shadow-sm`,children:[k(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-70`,children:`Delivery`}),k(`div`,{className:`mt-4 text-3xl font-black`,children:`5 Files`}),k(`div`,{className:`mt-2 text-sm leading-6 opacity-75`,children:`SVG / PDF / PNG / dark / light`})]})]})}),code:`const logo = 'https://dummyimage.com/312x116/0f172a/f8fafc.png&text=RUE'

<Watermark
  image={logo}
  width={156}
  height={58}
  rotate={-18}
  gap={[140, 112]}
  className="rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"
>
  <div className="grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_18rem] md:p-6">
    <Card className="overflow-hidden bg-base-200/70 shadow-none">
      <Card.Body className="gap-4">
        <div className="text-xs uppercase tracking-[0.18em] text-base-content/45">Media Kit</div>
        <div className="text-2xl font-semibold text-base-content">品牌资产导出包</div>
        <p className="m-0 text-sm leading-7 text-base-content/65">
          图片水印不会吞掉原内容的层级信息，更适合 logo、组织印章和明确的来源标识。
        </p>
      </Card.Body>
    </Card>

    <div className="rounded-[1.25rem] bg-gradient-to-br from-neutral to-slate-900 p-5 text-neutral-content shadow-sm">
      <div className="text-xs uppercase tracking-[0.22em] opacity-70">Delivery</div>
      <div className="mt-4 text-3xl font-black">5 Files</div>
      <div className="mt-2 text-sm leading-6 opacity-75">SVG / PDF / PNG / dark / light</div>
    </div>
  </div>
</Watermark>`});t(()=>S(e,o,y))});let b=s(`rue:component:anchor`);n(o,b),c(()=>{let e=w(F,{title:`Inherited local scope`,summary:`父级配置一次，子级局部容器可以继续复用；不想继承时再显式关掉。`,tab:i.inherit,preview:k(Z,{content:[`Team Only`,`Rue Preview`],rotate:-14,width:148,height:64,gap:[128,108],className:`rounded-[1.75rem] border border-base-300 bg-base-100 shadow-sm`,children:O(`div`,{className:`grid gap-4 p-5 md:grid-cols-2 md:p-6`,children:[k(Z,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-100/80`,children:O(`div`,{className:`space-y-3 p-4`,children:[k(`div`,{className:`text-sm font-semibold text-base-content`,children:`继承父级水印`}),k(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`这个局部容器没有重新写 content 和 image，会直接复用外层图案与铺设参数。`})]})}),k(Z,{inherit:!1,className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/60`,children:O(`div`,{className:`space-y-3 p-4`,children:[k(`div`,{className:`text-sm font-semibold text-base-content`,children:`关闭继承`}),k(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`当局部容器不需要上层水印时，直接把 inherit 设为 false 即可回到纯净内容区。`})]})})]})}),code:`<Watermark
  content={['Team Only', 'Rue Preview']}
  rotate={-14}
  width={148}
  height={64}
  gap={[128, 108]}
  className="rounded-[1.75rem] border border-base-300 bg-base-100 shadow-sm"
>
  <div className="grid gap-4 p-5 md:grid-cols-2 md:p-6">
    <Watermark className="rounded-[1.25rem] border border-dashed border-base-300 bg-base-100/80">
      <div className="space-y-3 p-4">
        <div className="text-sm font-semibold text-base-content">继承父级水印</div>
        <p className="m-0 text-sm leading-6 text-base-content/65">
          这个局部容器没有重新写 content 和 image，会直接复用外层图案与铺设参数。
        </p>
      </div>
    </Watermark>

    <Watermark
      inherit={false}
      className="rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/60"
    >
      <div className="space-y-3 p-4">
        <div className="text-sm font-semibold text-base-content">关闭继承</div>
        <p className="m-0 text-sm leading-6 text-base-content/65">
          当局部容器不需要上层水印时，直接把 inherit 设为 false 即可回到纯净内容区。
        </p>
      </div>
    </Watermark>
  </div>
</Watermark>`});t(()=>S(e,o,b))});let x=s(`rue:component:anchor`);n(o,x),c(()=>{let e=w(F,{title:`Custom controls`,summary:`把可调 demo 落到 Rue 风格里，用 Range 的按帧更新快速调整排版参数。`,tab:i.custom,preview:k(Re,{}),code:ze});t(()=>S(e,o,x))});let T=a(`h2`,o);n(o,T),n(T,e(`API`));let E=s(`rue:component:anchor`);return n(o,E),c(()=>{let e=w(Pe,{rows:Ne});t(()=>S(e,o,E))}),r})}),o,u),o})};export{Be as default};