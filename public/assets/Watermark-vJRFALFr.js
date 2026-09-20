import{Bt as e,Ct as t,H as n,N as r,P as i,Qt as a,St as o,U as s,V as c,Vt as l,Wt as u,Y as d,_t as f,en as p,f as m,fn as h,ft as g,g as _,gn as v,gt as y,hn as b,in as x,it as S,j as C,m as w,mn as T,mt as E,pn as D,qt as O,sn as k,st as A,tt as j,vt as M,yn as N,yt as P}from"./rue-runtime-Cv6BZekS.js";import{t as F}from"./button-CA4Ckf85.js";import{t as I}from"./card-B9AXy5ta.js";import{t as L}from"./badge-B7HOdV7h.js";import{t as R}from"./range-DzFQsNOV.js";import{r as z}from"./SidebarPlaygroundDesign-CoDFHXQl.js";import{t as B}from"./PreviewBlock-CeK_jzYH.js";var V=N(`<div data-rue-watermark-root="true"><div aria-hidden="true" data-rue-watermark-overlay="true"></div><!--rue:text-hole:0--></div>`),H=100,ee=100,te=9,ne=1,U=.2,W=.28,G=`rgba(15, 23, 42, ${U})`,K=`rgba(248, 250, 252, ${W})`,q=`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,re=120,ie=64,ae=32,oe=24,se=80,ce=new Map,le=new Map,ue=(...e)=>e.filter(Boolean).join(` `),de=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},fe=e=>e.startsWith(`--`)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),pe=e=>Object.entries(e).filter(([,e])=>e!==void 0).map(([e,t])=>`${fe(e)}: ${String(t)}`).join(`; `),me=(e,t)=>{let n=pe(e);if(!t)return n;if(typeof t==`string`)return n?`${n}; ${t}`:t;let r=pe(t);return n?r?`${n}; ${r}`:n:r},J=(e,t,n)=>Math.min(n,Math.max(t,e)),Y=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),he=e=>{if(!e)return 1;let t=e.trim();if(!t||t===`none`)return 1;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?J(n/100,0,1):J(n,0,1):1},ge=e=>{let t=e.trim();if(t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?J(Math.round(n/100*255),0,255):J(Math.round(n),0,255):0},_e=(e,t=1)=>{let n=e.trim();if(n===`none`)return 0;let r=Number.parseFloat(n);return Number.isFinite(r)?n.endsWith(`%`)?r/100*t:r:0},ve=e=>{if(!e)return 0;let t=e.trim();if(!t||t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`rad`)?n*180/Math.PI:t.endsWith(`grad`)?n*.9:t.endsWith(`turn`)?n*360:n:0},ye=(e,t,n,r)=>{let i=n*Math.PI/180,a=t*Math.cos(i),o=t*Math.sin(i),s=e+.3963377774*a+.2158037573*o,c=e-.1055613458*a-.0638541728*o,l=e-.0894841775*a-1.291485548*o,u=s**3,d=c**3,f=l**3,p=e=>{let t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return J(Math.round(t*255),0,255)};return{r:p(4.0767416621*u-3.3077115913*d+.2309699292*f),g:p(-1.2684380046*u+2.6097574011*d-.3413193965*f),b:p(-.0041960863*u-.7034186147*d+1.707614701*f),a:r}},X=e=>{if(!e)return null;let t=e.trim().toLowerCase();if(!t||t===`transparent`)return null;let n=t.match(/^rgba?\((.+)\)$/);if(n){let[e,t]=n[1].split(/\s*\/\s*/),r=e.includes(`,`),i=r?e.split(`,`).map(e=>e.trim()):e.trim().split(/\s+/),a=t??(r?i[3]:void 0);if(i.length>=3)return{r:ge(i[0]),g:ge(i[1]),b:ge(i[2]),a:he(a)}}let r=t.match(/^oklch\((.+)\)$/);if(r){let[e,t]=r[1].split(/\s*\/\s*/),n=e.trim().split(/\s+/);if(n.length>=3)return ye(J(_e(n[0]),0,1),Math.max(_e(n[1],.4),0),ve(n[2]),he(t))}let i=t.match(/^#([0-9a-f]{3,8})$/);if(!i)return null;let a=i[1];return a.length===3||a.length===4?{r:Number.parseInt(a[0]+a[0],16),g:Number.parseInt(a[1]+a[1],16),b:Number.parseInt(a[2]+a[2],16),a:a.length===4?Number.parseInt(a[3]+a[3],16)/255:1}:a.length===6||a.length===8?{r:Number.parseInt(a.slice(0,2),16),g:Number.parseInt(a.slice(2,4),16),b:Number.parseInt(a.slice(4,6),16),a:a.length===8?Number.parseInt(a.slice(6,8),16)/255:1}:null},be=({r:e,g:t,b:n})=>{let r=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4},i=r(e),a=r(t),o=r(n);return i*.2126+a*.7152+o*.0722},xe=(e,t)=>`rgba(${e.r}, ${e.g}, ${e.b}, ${t})`,Se=(e,t)=>{let n=e.getAttribute(`data-rue-appearance`)??e.getAttribute(`data-theme`);return n===`dark`||n===`night`||n===`coffee`||t.colorScheme.split(/\s+/).includes(`dark`)},Ce=(e,t)=>{let n=be(e)<.35;return t?xe(t,n?W:U):n?K:G},we=e=>{if(!e||typeof window>`u`||!(e instanceof window.Element))return G;let t=!1,n=null,r=e;for(;r;){let e=window.getComputedStyle(r),i=X(e.getPropertyValue(`--color-base-content`));i&&i.a>.01&&(n=i);let a=X(e.backgroundColor);if(a&&a.a>.01)return Ce(a,n);let o=X(e.getPropertyValue(`--color-base-100`));if(o&&o.a>.01)return Ce(o,n);Se(r,e)&&(t=!0),r=r.parentElement}let i=X(window.getComputedStyle(e).color);return i?be(i)>.6?xe(i,W):xe(i,U):t?n?xe(n,W):K:G},Te=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=Number.parseFloat(e);if(Number.isFinite(t))return e.endsWith(`rem`)?t*16:t}return 16},Ee=e=>e==null?[]:(Array.isArray(e)?e:[e]).flatMap(e=>String(e).split(/\r?\n/)),De=e=>e.some(e=>e.trim().length>0),Oe=(e,t,n,r,i)=>{let a=Te(t.fontSize),o=Math.max(Math.round(a*1.45),a+6);if(i)return{markWidth:Math.max(n??re,ae),markHeight:Math.max(r??ie,oe),lineHeight:o,fontSizePx:a};if(n!=null&&r!=null)return{markWidth:Math.max(n,ae),markHeight:Math.max(r,oe),lineHeight:o,fontSizePx:a};let s=t.fontFamily??q,c=t.fontWeight??`normal`,l=t.fontStyle&&t.fontStyle!==`none`?t.fontStyle:`normal`,u=0;if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);t&&(t.font=`${l} ${c} ${a}px ${s}`,u=Math.ceil(e.reduce((e,n)=>Math.max(e,t.measureText(n).width),0)))}u||=Math.ceil(e.reduce((e,t)=>Math.max(e,t.length*a*.62),0));let d=Math.max(e.length,1),f=Math.ceil(a+(d-1)*o);return{markWidth:Math.max(n??u,ae),markHeight:Math.max(r??f,oe),lineHeight:o,fontSizePx:a}},ke=e=>{switch(e){case`left`:case`start`:return{anchor:`start`,xRatio:0};case`right`:case`end`:return{anchor:`end`,xRatio:1};default:return{anchor:`middle`,xRatio:.5}}},Ae=e=>[e.color??``,e.fontSize??``,e.fontWeight??``,e.fontStyle??``,e.fontFamily??``,e.textAlign??``],je=({image:e,lines:t,font:n,width:r,height:i})=>JSON.stringify([e??``,t,Ae(n),r??``,i??``]),Me=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>JSON.stringify([e??``,t,n,Ae(r),i,a,o.markWidth,o.markHeight,o.lineHeight,o.fontSizePx,s]),Ne=(e,t)=>{let n=e.get(t);return n!==void 0&&(e.delete(t),e.set(t,n)),n},Pe=(e,t,n)=>{for(e.delete(t),e.set(t,n);e.size>se;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}return n},Fe=(e,t,n)=>{let r=e/2,i=t/2,a=n?.[0]??r,o=n?.[1]??i,s=a-r,c=o-i,l=`0px`,u=`0px`,d=`100%`,f=`100%`;return s>0&&(l=`${s}px`,d=`calc(100% - ${s}px)`,s=0),c>0&&(u=`${c}px`,f=`calc(100% - ${c}px)`,c=0),{left:l,top:u,width:d,height:f,backgroundPosition:`${s}px ${c}px`}},Ie=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>{let{markWidth:c,markHeight:l,lineHeight:u,fontSizePx:d}=o,f=c+i,p=l+a,m=i/2,h=a/2,g=m+c/2,_=h+l/2,v=r.color??G,y=r.fontWeight??`normal`,b=r.fontStyle&&r.fontStyle!==`none`?r.fontStyle:`normal`,x=r.fontFamily??q,{anchor:S,xRatio:C}=ke(r.textAlign),w=``;if(e)w=`<image href="${Y(e)}" x="${m}" y="${h}" width="${c}" height="${l}" preserveAspectRatio="xMidYMid meet" />`;else{let e=d+(Math.max(t.length,1)-1)*u,n=h+Math.max((l-e)/2,0),r=m+c*C;w=t.map((e,t)=>{let i=n+t*u;return`<text x="${r}" y="${i}" fill="${Y(v)}" font-size="${d}" font-weight="${Y(String(y))}" font-style="${Y(b)}" font-family="${Y(x)}" text-anchor="${S}" dominant-baseline="hanging">${Y(e)}</text>`}).join(``)}let T=`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${p}" viewBox="0 0 ${f} ${p}"><g opacity="${s}" transform="rotate(${n} ${g} ${_})">${w}</g></svg>`;return{url:`url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(T)}")`,tileWidth:f,tileHeight:p}},Z=(n,r,i)=>{let a=M(y(n,`children`)),c=M(y(n,`className`)),l=M(y(n,`content`)),m=M(y(n,`font`)),h=M(y(n,`gap`)),_=M(y(n,`height`)),v=M(y(n,`image`)),b=M(y(n,`inherit`)),C=M(y(n,`offset`)),w=M(y(n,`opacity`)),T=M(y(n,`overlayClassName`)),D=M(y(n,`overlayStyle`)),O=M(y(n,`ref`)),N=M(y(n,`rootClassName`)),P=M(y(n,`rotate`)),F=M(y(n,`style`)),I=M(y(n,`width`)),L=M(y(n,`zIndex`)),R=M(E(f(n),[`children`,`className`,`content`,`font`,`gap`,`height`,`image`,`inherit`,`offset`,`opacity`,`overlayClassName`,`overlayStyle`,`ref`,`rootClassName`,`rotate`,`style`,`width`,`zIndex`])),z=A(void 0),B=null,U=null,W=null,G=``,K=()=>Ee(l.get()),q=()=>(h.get()===void 0?[H,ee]:h.get())?.[0]??H,re=()=>(h.get()===void 0?[H,ee]:h.get())?.[1]??ee,ie=()=>!!v.get()||De(K()),ae=()=>!v.get()&&!(m.get()===void 0?{}:m.get()).color&&De(K())&&z.value?{...m.get()===void 0?{}:m.get(),color:z.value}:m.get()===void 0?{}:m.get(),oe=e=>{let t=je({image:v.get(),lines:K(),font:e,width:I.get(),height:_.get()});return Ne(ce,t)||Pe(ce,t,Oe(K(),e,I.get(),_.get(),v.get()))},se=(e,t)=>{let n=K(),r=n.length?n:[``],i=J(w.get()===void 0?ne:w.get(),0,1),a=Me({image:v.get(),lines:r,rotate:P.get()===void 0?-22:P.get(),font:e,gapX:q(),gapY:re(),dimensions:t,opacity:i});return Ne(le,a)||Pe(le,a,Ie({image:v.get(),lines:r,rotate:P.get()===void 0?-22:P.get(),font:e,gapX:q(),gapY:re(),dimensions:t,opacity:i}))},fe=()=>{let e=ae(),t=Fe(q(),re(),C.get()),n=oe(e);return{placement:t,pattern:ie()?se(e,n):null}},pe=(e,t)=>{let n={position:F.get()?.position??`relative`,overflow:F.get()?.overflow??`hidden`,isolation:F.get()?.isolation??`isolate`};return t?(n[`--rue-watermark-image`]=t.url,n[`--rue-watermark-size`]=`${t.tileWidth}px ${t.tileHeight}px`,n[`--rue-watermark-position`]=e.backgroundPosition,n[`--rue-watermark-left`]=e.left,n[`--rue-watermark-top`]=e.top,n[`--rue-watermark-width`]=e.width,n[`--rue-watermark-height`]=e.height,n[`--rue-watermark-z-index`]=String(L.get()??te)):b.get()===void 0||b.get()||(n[`--rue-watermark-image`]=`none`,n[`--rue-watermark-size`]=`auto`,n[`--rue-watermark-position`]=`0px 0px`,n[`--rue-watermark-left`]=`0px`,n[`--rue-watermark-top`]=`0px`,n[`--rue-watermark-width`]=`100%`,n[`--rue-watermark-height`]=`100%`,n[`--rue-watermark-z-index`]=`0`),me(n,F.get())},Y=(e,t)=>me({position:`absolute`,left:t?e.left:`var(--rue-watermark-left, 0px)`,top:t?e.top:`var(--rue-watermark-top, 0px)`,width:t?e.width:`var(--rue-watermark-width, 100%)`,height:t?e.height:`var(--rue-watermark-height, 100%)`,pointerEvents:`none`,backgroundRepeat:`repeat`,backgroundImage:t||b.get()===void 0||b.get()?`var(--rue-watermark-image, none)`:`none`,backgroundSize:t||b.get()===void 0||b.get()?`var(--rue-watermark-size, auto)`:`auto`,backgroundPosition:t||b.get()===void 0||b.get()?`var(--rue-watermark-position, 0px 0px)`:`0px 0px`,zIndex:t||b.get()===void 0||b.get()?`var(--rue-watermark-z-index, 9)`:0},D.get()),he=()=>{let e=typeof F.get()==`string`?F.get():[F.get()?.background,F.get()?.backgroundColor,F.get()?.color,F.get()?.colorScheme,F.get()?.[`--color-base-100`],F.get()?.[`--color-base-content`]].join(`|`);return JSON.stringify([K(),c.get()??``,N.get()??``,e])},ge=j(()=>fe()),_e=j(()=>{let e=ge.get();return pe(e.placement,e.pattern)}),ve=j(()=>{let e=ge.get();return Y(e.placement,e.pattern)}),ye=(e,t)=>{e&&(t?e.setAttribute(`style`,t):e.removeAttribute(`style`))},X=()=>{let e=fe();ye(B,pe(e.placement,e.pattern)),ye(U,Y(e.placement,e.pattern))},be=(e=!1)=>{if(v.get()||(m.get()===void 0?{}:m.get()).color||!De(K()))return;let t=he();if(!e&&B===W&&t===G)return;if(B){let e=fe();ye(B,pe(e.placement,e.pattern))}let n=we(B);W=B,G=t,z.value!==n&&(z.value=n,X())},xe=e=>{B!==e&&(B=e,de(O.get(),e),be(!0))},Se=e=>{U=e},Ce=()=>{let e=()=>be(!0);if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)};return g(()=>{X()}),S(()=>{be(!0),Ce()}),d(()=>s(u(n=>{let r=V().content.cloneNode(!0).firstChild,i=r,s=r.childNodes[0],l=r.childNodes[1],u=l.parentNode;t(i,()=>R.get(),[`ref`,`className`,`style`,`data-rue-watermark-root`,`data-rue-watermark-inherit`,`__rue_static_template_id__`]);let d=xe;typeof d==`function`?d(i):d&&typeof d==`object`&&`current`in d&&(d.current=i),k(()=>{typeof d==`function`?d(null):d&&typeof d==`object`&&`current`in d&&(d.current=null)});let f;x(()=>{let e=ue(`rue-watermark`,c.get(),N.get()),t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,i.setAttribute(`class`,t))});let p;x(()=>{let e=_e.get(),t=o(e);Object.is(p,t)||(p=t,i.style.cssText=t)}),i.setAttribute(`data-rue-watermark-root`,`true`);let m;x(()=>{let e=b.get()===void 0||b.get()?`true`:`false`;Object.is(m,e)||(m=e,e==null?i.removeAttribute(`data-rue-watermark-inherit`):i.setAttribute(`data-rue-watermark-inherit`,String(e)))}),s.setAttribute(`aria-hidden`,`true`);let h=Se;typeof h==`function`?h(s):h&&typeof h==`object`&&`current`in h&&(h.current=s),k(()=>{typeof h==`function`?h(null):h&&typeof h==`object`&&`current`in h&&(h.current=null)});let g;x(()=>{let e=ue(`rue-watermark-overlay`,T.get()),t=e===!1||e==null?``:String(e);Object.is(g,t)||(g=t,s.setAttribute(`class`,t))});let _;return x(()=>{let e=ve.get(),t=o(e);Object.is(_,t)||(_=t,s.style.cssText=t)}),s.setAttribute(`data-rue-watermark-overlay`,`true`),e({parent:u,before:l},()=>a.get(),()=>({})),[r,r]}),e=>p(()=>{a.set(e.children),c.set(e.className),l.set(e.content),m.set(e.font),h.set(e.gap),_.set(e.height),v.set(e.image),b.set(e.inherit),C.set(e.offset),w.set(e.opacity),T.set(e.overlayClassName),D.set(e.overlayStyle),O.set(e.ref),N.set(e.rootClassName),P.set(e.rotate),F.set(e.style),I.set(e.width),L.set(e.zIndex),R.set(E(e,[`children`,`className`,`content`,`font`,`gap`,`height`,`image`,`inherit`,`offset`,`opacity`,`overlayClassName`,`overlayStyle`,`ref`,`rootClassName`,`rotate`,`style`,`width`,`zIndex`]))}),()=>f(n)))},Le=N(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),Re=N(`<div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),ze=N(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Watermark 水印</h1><p class="mt-3 mb-3 text-sm">Rue 的 Watermark 不照搬其他组件库的视觉，而是把能力落成更适合当前设计站点的轻量覆盖层。 你可以直接给任意容器加文字或图片水印，同时保持按钮、卡片、统计区这些内容本身的交互。</p><h2>何时使用</h2><ul><li>需要给卡片、报表、详情页加上“内部预览”“草稿”“仅限共享”等视觉标记。</li><li>需要图片或文字水印覆盖在任意内容上，但又不希望阻断按钮、链接和表单的交互。</li><li>需要局部容器继承上层水印图案，而不是为每一块内容重复写一遍配置。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>API</h2><!--rue:opaque-hole:5--></div>`),Be=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22196%22%20height%3D%2272%22%20viewBox%3D%220%200%20196%2072%22%3E%3Crect%20width%3D%22196%22%20height%3D%2272%22%20rx%3D%2218%22%20fill%3D%22%230f172a%22%2F%3E%3Cpath%20d%3D%22M30%2019h22c12%200%2019%206%2019%2017%200%2011-7%2017-19%2017H45v14H30V19Zm22%2022c4%200%206-2%206-5s-2-5-6-5H45v10h7Zm35-22h15l10%2031%2010-31h15l-17%2048H104L87%2019Zm60%200h18l15%2048h-15l-2.2-7.5h-13.7L147%2067h-15l15-48Zm13%2029-4-14-4%2014h8Z%22%20fill%3D%22%23f8fafc%22%2F%3E%3C%2Fsvg%3E`,Ve=[{label:`共享链接`,value:`1.8k`,detail:`过去 24 小时`},{label:`导出快照`,value:`312`,detail:`包含 38 个外部成员`},{label:`访问终端`,value:`57`,detail:`待二次确认设备 5 台`}],He=[{prop:`content`,description:`文字水印内容，支持字符串或多行数组。`,type:`string | string[]`,defaultValue:`-`},{prop:`image`,description:`图片水印地址，适合 logo、签章、业务标记。`,type:`string`,defaultValue:`-`},{prop:`font`,description:`文字水印的颜色、字号、字重、字体和对齐方式。`,type:`{ color?: string; fontSize?: number | string; fontWeight?: number | string; fontStyle?: string; fontFamily?: string; textAlign?: string }`,defaultValue:`{ color: 自动按宿主背景明暗推导, fontSize: 16 }`},{prop:`rotate`,description:`单个水印块的旋转角度。`,type:`number`,defaultValue:`-22`},{prop:`width / height`,description:`单个水印内容块的尺寸；不传时文本会按内容估算。`,type:`number`,defaultValue:`文本自动测量 / 图片 120 x 64`},{prop:`gap`,description:`水印块之间的水平与垂直间距。`,type:`[number, number]`,defaultValue:`[100, 100]`},{prop:`offset`,description:`起始铺设偏移量，便于与卡片头部或图像对齐。`,type:`[number, number]`,defaultValue:`[gapX / 2, gapY / 2]`},{prop:`zIndex`,description:`覆盖层层级，保持视觉上方但不阻断交互。`,type:`number`,defaultValue:`9`},{prop:`inherit`,description:`是否让后代 Watermark 复用当前图案与铺设参数。`,type:`boolean`,defaultValue:`true`},{prop:`className / rootClassName`,description:`根容器类名，便于直接叠加 Rue 的布局与视觉类。`,type:`string`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`覆盖层类名和样式，适合与圆角、混合模式、局部调优配合。`,type:`string / any`,defaultValue:`-`},{prop:`style`,description:`根容器行内样式；默认会自动补 position、overflow、isolation。`,type:`any`,defaultValue:`-`}],Ue=(e,t,n)=>{let a=M(y(e,`rows`));return s(C(e=>{let t=Le().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],o=n.parentNode,s=N(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),c=[];return i(()=>{let e=a.get()||[];c=_(o,n,c,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return w(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,o=t.childNodes[1].childNodes[0];o.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=v(``);a.insertBefore(f,n),a.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);o.textContent=m;let h=v(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=v(``);d.insertBefore(_,u),d.removeChild(u);let y=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=y,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(o.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(_.textContent=e,y=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),r(()=>m(c)),[t,t]}),e=>p(()=>{a.set(e.rows)}),()=>f(e))},Q={rotate:-22,gapX:120,gapY:96,offsetX:48,offsetY:48,fontSize:18,zIndex:12},We={rotate:-8,gapX:156,gapY:124,offsetX:64,offsetY:32,fontSize:14,zIndex:10},Ge=e=>typeof requestAnimationFrame==`function`?{type:`frame`,id:requestAnimationFrame(e)}:{type:`timeout`,id:setTimeout(e,0)},Ke=e=>{if(e.type===`frame`){typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(e.id);return}clearTimeout(e.id)},$=(e,t,n)=>{let r=M(y(e,`label`)),i=M(y(e,`max`)),a=M(y(e,`min`)),o=M(y(e,`onValueChange`)),l=M(y(e,`onValueCommit`)),u=M(y(e,`value`));return s(c(R,()=>({className:`range-sm`,rootClassName:`space-y-2`,valueClassName:`min-w-12 text-center tabular-nums`,label:r.get(),min:a.get(),max:i.get(),value:u.get(),showValue:{formatter:e=>String(e)},onValueChange:o.get(),onValueCommit:l.get()})),e=>p(()=>{r.set(e.label),i.set(e.max),a.set(e.min),o.set(e.onValueChange),l.set(e.onValueCommit),u.set(e.value)}),()=>f(e))},qe=(t,r,i)=>{let o=A(`Rue Design`),s=A(Q.rotate),f=A(Q.gapX),m=A(Q.gapY),g=A(Q.offsetX),_=A(Q.offsetY),y=A(Q.fontSize),S=A(Q.zIndex),w=A(Q.rotate),E=A(Q.gapX),D=A(Q.gapY),O=A(Q.offsetX),j=A(Q.offsetY),M=A(Q.fontSize),N=A(Q.zIndex),R=A(``),z={rotate:w,gapX:E,gapY:D,offsetX:O,offsetY:j,fontSize:M,zIndex:N},B={...Q},V=null,H=e=>{s.value=e.rotate,f.value=e.gapX,m.value=e.gapY,g.value=e.offsetX,_.value=e.offsetY,y.value=e.fontSize,S.value=e.zIndex},ee=e=>{w.value=e.rotate,E.value=e.gapX,D.value=e.gapY,O.value=e.offsetX,j.value=e.offsetY,M.value=e.fontSize,N.value=e.zIndex},te=()=>{V&&=(Ke(V),null)},ne=()=>{V=null,p(()=>{H(B)})},U=(e,t)=>{B[e]=t,!V&&(V=Ge(ne))},W=(e,t)=>{B[e]=t,te(),p(()=>{H(B),z[e].value=t})},G=({nextContent:e,nextColor:t,nextControls:n})=>{te(),B={...n},p(()=>{o.value=e,R.value=t,H(n),ee(n)})},K=()=>G({nextContent:`Rue Design`,nextColor:``,nextControls:Q}),q=()=>G({nextContent:`Shared with Partner`,nextColor:`rgba(34, 197, 94, 0.22)`,nextControls:We});return k(te),d(()=>C(t=>{let r=Re().content.cloneNode(!0).firstChild,i=r.childNodes[0],d=i.parentNode,p=r.childNodes[1],C=p.parentNode,A=(e,t,r)=>{let i=()=>c(Z,()=>({content:[o.value,`Scenario Sandbox`],rotate:s.value,gap:[f.value,m.value],offset:[g.value,_.value],zIndex:S.value,width:180,height:72,font:{color:R.value||void 0,fontSize:y.value,fontWeight:700,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T(),r=b(`div`,t);h(t,r),r.setAttribute(`class`,`space-y-4 p-5 md:p-6`);let i=b(`div`,r);h(r,i),i.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let s=b(`div`,i);h(i,s);let c=b(`div`,s);h(s,c),c.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`),h(c,v(`Scenario Sandbox`));let d=b(`div`,s);h(s,d),d.setAttribute(`class`,`mt-2 text-2xl font-semibold text-base-content`),h(d,v(`参数调整后的实时预览`)),n(i,L,()=>({outline:!0,children:(e,t,n)=>{let r=()=>u(e=>{let t=T(),n=v(``);h(t,n),a(n,()=>`z-index ${S.value}`);let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let f=b(`p`,r);h(r,f),f.setAttribute(`class`,`m-0 max-w-2xl text-sm leading-7 text-base-content/65`),h(f,v(`这里故意放了文字、徽标和按钮，方便观察水印对不同内容密度与层次关系的影响。`));let p=b(`div`,r);h(r,p),p.setAttribute(`class`,`grid gap-4 md:grid-cols-3`),n(p,I,()=>({className:`bg-base-100/90 shadow-sm md:col-span-2`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T();n(t,I.Body,()=>({children:(e,t,n)=>{let r=()=>P(e=>{let t=T(),n=b(`div`,t);h(t,n),n.setAttribute(`class`,`text-sm font-semibold text-base-content`),h(n,v(`内容流`));let r=b(`p`,t);h(t,r),r.setAttribute(`class`,`m-0 text-sm leading-7 text-base-content/65`),h(r,v(`Rue Watermark 会把铺设逻辑限制在当前容器内部，圆角、阴影和内容布局都可以继续由宿主容器控制。`));let i=v(``),a=v(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));let m=b(`div`,p);h(p,m),m.setAttribute(`class`,`rounded-[1.25rem] bg-accent px-4 py-5 text-accent-content shadow-sm`);let g=b(`div`,m);h(m,g),g.setAttribute(`class`,`text-xs uppercase tracking-[0.2em] opacity-70`),h(g,v(`Preset`));let _=b(`div`,m);h(m,_),_.setAttribute(`class`,`mt-2 text-2xl font-black`);let y=v(``);h(_,y),a(y,()=>o.value);let x=b(`div`,r);h(r,x),x.setAttribute(`class`,`flex flex-wrap gap-3`),n(x,F,()=>({size:`sm`,color:`primary`,onClick:K,children:(e,t,n)=>{let r=()=>P(e=>{let t=T();h(t,v(`重置参数`));let n=v(``),r=v(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(x,F,()=>({size:`sm`,type:`outlined`,onClick:q,children:(e,t,n)=>{let r=()=>P(e=>{let t=T();h(t,v(`切换到稀疏模式`));let n=v(``),r=v(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let C=v(``),w=v(``);return t.insertBefore(C,t.firstChild),t.appendChild(w),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},z=i.nextSibling;d.removeChild(i),e({parent:d,before:z},()=>A,()=>({}));let B=(e,t,r)=>{let i=()=>c(I,()=>({className:`bg-base-100 shadow-sm`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T();n(t,I.Body,()=>({className:`gap-4`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T(),r=b(`div`,t);h(t,r);let i=b(`div`,r);h(r,i),i.setAttribute(`class`,`text-sm font-semibold text-base-content`),h(i,v(`文本`));let a=b(`input`,r);h(r,a),a.setAttribute(`class`,`input input-bordered mt-2 w-full`);let s;x(()=>{let e=o.value,t=e==null?``:String(e);Object.is(s,t)||(s=t,a.value=t)});let c=e=>{let t=e=>{o.value=e.currentTarget.value};typeof t==`function`&&t(e)};a.addEventListener(`input`,c),k(()=>a.removeEventListener(`input`,c)),n(t,$,()=>({label:`Rotate`,min:-90,max:90,value:w,onValueChange:e=>U(`rotate`,e),onValueCommit:e=>W(`rotate`,e)})),n(t,$,()=>({label:`Font size`,min:12,max:28,value:M,onValueChange:e=>U(`fontSize`,e),onValueCommit:e=>W(`fontSize`,e)})),n(t,$,()=>({label:`Gap X`,min:72,max:180,value:E,onValueChange:e=>U(`gapX`,e),onValueCommit:e=>W(`gapX`,e)})),n(t,$,()=>({label:`Gap Y`,min:72,max:180,value:D,onValueChange:e=>U(`gapY`,e),onValueCommit:e=>W(`gapY`,e)})),n(t,$,()=>({label:`Offset X`,min:0,max:120,value:O,onValueChange:e=>U(`offsetX`,e),onValueCommit:e=>W(`offsetX`,e)})),n(t,$,()=>({label:`Offset Y`,min:0,max:120,value:j,onValueChange:e=>U(`offsetY`,e),onValueCommit:e=>W(`offsetY`,e)})),n(t,$,()=>({label:`z-index`,min:1,max:24,value:N,onValueChange:e=>U(`zIndex`,e),onValueCommit:e=>W(`zIndex`,e)}));let l=b(`div`,t);h(t,l);let u=b(`div`,l);h(l,u),u.setAttribute(`class`,`text-sm font-medium text-base-content`),h(u,v(`Color override`));let d=b(`input`,l);h(l,d),d.setAttribute(`class`,`input input-bordered mt-2 w-full`),d.setAttribute(`placeholder`,`auto`);let f;x(()=>{let e=R.value,t=e==null?``:String(e);Object.is(f,t)||(f=t,d.value=t)});let p=e=>{let t=e=>{R.value=e.currentTarget.value};typeof t==`function`&&t(e)};d.addEventListener(`input`,p),k(()=>d.removeEventListener(`input`,p));let m=v(``),g=v(``);return t.insertBefore(m,t.firstChild),t.appendChild(g),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},V=p.nextSibling;return C.removeChild(p),e({parent:C,before:V},()=>B,()=>({})),[r,r]}))},Je=`const WatermarkCustomControlsDemo = () => {
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
}`,Ye=(t,r,i)=>{let a={basic:A(`preview`),multiline:A(`preview`),image:A(`preview`),inherit:A(`preview`),custom:A(`preview`)};return d(()=>c(z,()=>({children:(t,r,i)=>{let o=()=>u(t=>{let r=T(),i=ze().content.cloneNode(!0),o=i.firstChild,s=o.childNodes[4],d=s.parentNode,f=o.childNodes[5],p=f.parentNode,g=o.childNodes[6],y=g.parentNode,x=o.childNodes[7],S=x.parentNode,C=o.childNodes[8],E=C.parentNode,A=o.childNodes[10],j=A.parentNode;r.appendChild(i);let M=(e,t,r)=>{let i=()=>c(B,()=>({title:`Basic text watermark`,summary:`最直接的用法：给一个内容容器加上文本水印，按钮仍然可以正常点击。`,tab:a.basic,preview:(e,t,r)=>{let i=()=>c(Z,()=>({content:`Rue Design`,className:`rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T(),r=b(`div`,t);h(t,r),r.setAttribute(`class`,`grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-8`);let i=b(`div`,r);h(r,i),i.setAttribute(`class`,`space-y-4`),n(i,L,()=>({variant:`secondary`,children:(e,t,n)=>{let r=()=>P(e=>{let t=T();h(t,v(`Internal Preview`));let n=v(``),r=v(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let a=b(`h3`,i);h(i,a),a.setAttribute(`class`,`m-0 text-3xl font-black tracking-tight text-base-content md:text-4xl`),h(a,v(`协作面板正在生成新一轮可共享快照`));let o=b(`p`,i);h(i,o),o.setAttribute(`class`,`m-0 max-w-2xl text-sm leading-7 text-base-content/70`),h(o,v(`水印覆盖层默认在视觉上方，但采用 pointer-events none，不会挡住卡片、按钮和其它交互控件。`));let s=b(`div`,i);h(i,s),s.setAttribute(`class`,`flex flex-wrap gap-3`),n(s,F,()=>({color:`primary`,children:(e,t,n)=>{let r=()=>P(e=>{let t=T();h(t,v(`导出摘要`));let n=v(``),r=v(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(s,F,()=>({type:`outlined`,children:(e,t,n)=>{let r=()=>P(e=>{let t=T();h(t,v(`查看访问日志`));let n=v(``),r=v(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(r,I,()=>({className:`bg-base-100/85 shadow-sm backdrop-blur-sm`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T();n(t,I.Body,()=>({className:`gap-4`,children:(e,t,n)=>{let r=()=>u(e=>{let t=T(),n=N(`<div class="rounded-box border border-base-300/70 bg-base-100/70 px-4 py-3"><div class="text-xs uppercase tracking-[0.2em] text-base-content/50"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-bold text-base-content"><!--rue:text-hole:1--></div><div class="mt-1 text-sm text-base-content/60">rue:row-text</div></div>`),r=D(`rue:list:end`);h(t,r);let i=[];O(()=>{let e=Ve||[];i=_(r.parentNode,r,i,e,(e,t)=>e.label,(e,t,r)=>{let i=e,a;return w(e=>{let t=n().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0],o=r.parentNode,s=t.childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[2].childNodes[0];l.parentNode;let u=v(``);o.insertBefore(u,r),o.removeChild(r);let d=i.label==null||typeof i.label==`boolean`?``:String(i.label);u.textContent=d;let f=v(``);c.insertBefore(f,s),c.removeChild(s);let p=i.value==null||typeof i.value==`boolean`?``:String(i.value);f.textContent=p;let m=i.detail==null||typeof i.detail==`boolean`?``:String(i.detail);return l.textContent=m,a=()=>{{let e=i.label==null||typeof i.label==`boolean`?``:String(i.label);Object.is(d,e)||(u.textContent=e,d=e)}{let e=i.value==null||typeof i.value==`boolean`?``:String(i.value);Object.is(p,e)||(f.textContent=e,p=e)}{let e=i.detail==null||typeof i.detail==`boolean`?``:String(i.detail);Object.is(m,e)||(l.textContent=e,m=e)}},[t,t]},(n,r)=>{e=n,t=r,i=n,a()},void 0,r)},!1,!0)}),k(()=>m(i));let a=v(``),o=v(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));let c=v(``),d=v(``);return t.insertBefore(c,t.firstChild),t.appendChild(d),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},code:`const stats = [
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
</Watermark>`}));return e==null?i():l(e,r,i)},R=s.nextSibling;d.removeChild(s),e({parent:d,before:R},()=>M,()=>({}));let z=(e,t,r)=>{let i=()=>c(B,()=>({title:`Multiline typography and tuned spacing`,summary:`支持多行内容、字族和铺设参数调优，更适合仪表盘、稿件和审批流页面。`,tab:a.multiline,preview:(e,t,r)=>{let i=()=>c(Z,()=>({content:[`Confidential Build`,`Rue Design System`],rotate:-16,gap:[132,116],width:168,height:72,font:{color:`rgba(13, 22, 39, 0.15)`,fontSize:15,fontWeight:700,fontFamily:`Georgia, Times New Roman, serif`,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.88))] shadow-sm`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T(),r=b(`div`,t);h(t,r),r.setAttribute(`class`,`grid gap-4 p-5 md:grid-cols-3 md:p-6`),n(r,I,()=>({className:`bg-base-100/90 shadow-sm`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T();n(t,I.Body,()=>({children:(e,t,n)=>{let r=()=>P(e=>{let t=T(),n=b(`div`,t);h(t,n),n.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`),h(n,v(`Draft`));let r=b(`div`,t);h(t,r),r.setAttribute(`class`,`text-lg font-semibold text-base-content`),h(r,v(`产品评审结论`));let i=b(`p`,t);h(t,i),i.setAttribute(`class`,`m-0 text-sm leading-6 text-base-content/65`),h(i,v(`用多行水印把容器语义说清楚，而不是只放一个模糊 logo。`));let a=v(``),o=v(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}})),n(r,I,()=>({className:`bg-base-100/90 shadow-sm md:col-span-2`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T();n(t,I.Body,()=>({className:`gap-4`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T(),r=b(`div`,t);h(t,r),r.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let i=b(`div`,r);h(r,i);let a=b(`div`,i);h(i,a),a.setAttribute(`class`,`text-xs uppercase tracking-[0.16em] text-base-content/45`),h(a,v(`Access Scope`));let o=b(`div`,i);h(i,o),o.setAttribute(`class`,`text-xl font-semibold text-base-content`),h(o,v(`仅限设计与法务同步窗口`)),n(r,L,()=>({outline:!0,children:(e,t,n)=>{let r=()=>P(e=>{let t=T();h(t,v(`Version 15`));let n=v(``),r=v(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let s=b(`p`,t);h(t,s),s.setAttribute(`class`,`m-0 text-sm leading-7 text-base-content/65`),h(s,v(`通过 width、height、gap 和 font 组合，可以让文字块更像“签章”而不是背景噪音。`));let c=v(``),u=v(``);return t.insertBefore(c,t.firstChild),t.appendChild(u),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));let i=v(``),a=v(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},code:`<Watermark
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
</Watermark>`}));return e==null?i():l(e,r,i)},V=f.nextSibling;p.removeChild(f),e({parent:p,before:V},()=>z,()=>({}));let H=(e,t,r)=>{let i=()=>c(B,()=>({title:`Image watermark`,summary:`图片模式适合品牌 logo、部门印记或业务章；Rue 这边建议把它用在局部容器，而不是整页满屏。`,tab:a.image,preview:(e,t,r)=>{let i=()=>c(Z,()=>({image:Be,width:156,height:58,rotate:-18,gap:[140,112],className:`rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T(),r=b(`div`,t);h(t,r),r.setAttribute(`class`,`grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_18rem] md:p-6`),n(r,I,()=>({className:`overflow-hidden bg-base-200/70 shadow-none`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T();n(t,I.Body,()=>({className:`gap-4`,children:(e,t,n)=>{let r=()=>P(e=>{let t=T(),n=b(`div`,t);h(t,n),n.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`),h(n,v(`Media Kit`));let r=b(`div`,t);h(t,r),r.setAttribute(`class`,`text-2xl font-semibold text-base-content`),h(r,v(`品牌资产导出包`));let i=b(`p`,t);h(t,i),i.setAttribute(`class`,`m-0 text-sm leading-7 text-base-content/65`),h(i,v(`图片水印不会吞掉原内容的层级信息，更适合 logo、组织印章和明确的来源标识。`));let a=v(``),o=v(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));let i=b(`div`,r);h(r,i),i.setAttribute(`class`,`rounded-[1.25rem] bg-gradient-to-br from-neutral to-slate-900 p-5 text-neutral-content shadow-sm`);let a=b(`div`,i);h(i,a),a.setAttribute(`class`,`text-xs uppercase tracking-[0.22em] opacity-70`),h(a,v(`Delivery`));let o=b(`div`,i);h(i,o),o.setAttribute(`class`,`mt-4 text-3xl font-black`),h(o,v(`5 Files`));let s=b(`div`,i);h(i,s),s.setAttribute(`class`,`mt-2 text-sm leading-6 opacity-75`),h(s,v(`SVG / PDF / PNG / dark / light`));let c=v(``),d=v(``);return t.insertBefore(c,t.firstChild),t.appendChild(d),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},code:`const logo = 'https://dummyimage.com/312x116/0f172a/f8fafc.png&text=RUE'

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
</Watermark>`}));return e==null?i():l(e,r,i)},ee=g.nextSibling;y.removeChild(g),e({parent:y,before:ee},()=>H,()=>({}));let te=(e,t,r)=>{let i=()=>c(B,()=>({title:`Inherited local scope`,summary:`父级配置一次，子级局部容器可以继续复用；不想继承时再显式关掉。`,tab:a.inherit,preview:(e,t,r)=>{let i=()=>c(Z,()=>({content:[`Team Only`,`Rue Preview`],rotate:-14,width:148,height:64,gap:[128,108],className:`rounded-[1.75rem] border border-base-300 bg-base-100 shadow-sm`,children:(e,t,r)=>{let i=()=>u(e=>{let t=T(),r=b(`div`,t);h(t,r),r.setAttribute(`class`,`grid gap-4 p-5 md:grid-cols-2 md:p-6`),n(r,Z,()=>({className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-100/80`,children:(e,t,n)=>{let r=()=>P(e=>{let t=T(),n=b(`div`,t);h(t,n),n.setAttribute(`class`,`space-y-3 p-4`);let r=b(`div`,n);h(n,r),r.setAttribute(`class`,`text-sm font-semibold text-base-content`),h(r,v(`继承父级水印`));let i=b(`p`,n);h(n,i),i.setAttribute(`class`,`m-0 text-sm leading-6 text-base-content/65`),h(i,v(`这个局部容器没有重新写 content 和 image，会直接复用外层图案与铺设参数。`));let a=v(``),o=v(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(r,Z,()=>({inherit:!1,className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/60`,children:(e,t,n)=>{let r=()=>P(e=>{let t=T(),n=b(`div`,t);h(t,n),n.setAttribute(`class`,`space-y-3 p-4`);let r=b(`div`,n);h(n,r),r.setAttribute(`class`,`text-sm font-semibold text-base-content`),h(r,v(`关闭继承`));let i=b(`p`,n);h(n,i),i.setAttribute(`class`,`m-0 text-sm leading-6 text-base-content/65`),h(i,v(`当局部容器不需要上层水印时，直接把 inherit 设为 false 即可回到纯净内容区。`));let a=v(``),o=v(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let i=v(``),a=v(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},code:`<Watermark
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
</Watermark>`}));return e==null?i():l(e,r,i)},ne=x.nextSibling;S.removeChild(x),e({parent:S,before:ne},()=>te,()=>({}));let U=(e,t,n)=>{let r=()=>c(B,()=>({title:`Custom controls`,summary:`把可调示例 落到 Rue 风格里，用 Range 的按帧更新快速调整排版参数。`,tab:a.custom,preview:(e,t,n)=>{let r=()=>c(qe,()=>({}));return e==null?r():l(e,n,r)},code:Je}));return e==null?r():l(e,n,r)},W=C.nextSibling;E.removeChild(C),e({parent:E,before:W},()=>U,()=>({}));let G=(e,t,n)=>{let r=()=>c(Ue,()=>({rows:He}));return e==null?r():l(e,n,r)},K=A.nextSibling;j.removeChild(A),e({parent:j,before:K},()=>G,()=>({}));let q=v(``),re=v(``);return r.insertBefore(q,r.firstChild),r.appendChild(re),[r.firstChild,r.lastChild]});return t==null?o():l(t,i,o)}})))};export{Ye as default};