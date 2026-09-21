import{B as e,Bt as t,Ct as n,F as r,G as i,I as a,J as o,L as s,P as c,Qt as l,St as u,V as d,Vt as f,W as p,Wt as m,ct as h,dt as g,en as _,f as v,fn as y,g as b,gn as x,hn as S,in as C,m as w,mn as T,mt as E,nt as D,pn as O,q as k,qt as A,sn as j,yn as M,yt as N,z as P}from"./rue-runtime-BWbIfNT8.js";import{t as F}from"./button-ClgxZHRf.js";import{t as I}from"./card-fLEIUH_b.js";import{t as ee}from"./badge-Dx_KNAlU.js";import{t as L}from"./range-IyGNhVf4.js";import{r as R}from"./SidebarPlaygroundDesign-DS4naa5t.js";import{t as z}from"./PreviewBlock-B_T3fLnN.js";var B=M(`<div data-rue-watermark-root="true"><div aria-hidden="true" data-rue-watermark-overlay="true"></div><!--rue:text-hole:0--></div>`),V=100,H=100,te=9,ne=1,U=.2,W=.28,G=`rgba(15, 23, 42, ${U})`,K=`rgba(248, 250, 252, ${W})`,q=`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,re=120,ie=64,ae=32,oe=24,se=80,ce=new Map,le=new Map,ue=(...e)=>e.filter(Boolean).join(` `),de=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},fe=e=>e.startsWith(`--`)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),pe=e=>Object.entries(e).filter(([,e])=>e!==void 0).map(([e,t])=>`${fe(e)}: ${String(t)}`).join(`; `),me=(e,t)=>{let n=pe(e);if(!t)return n;if(typeof t==`string`)return n?`${n}; ${t}`:t;let r=pe(t);return n?r?`${n}; ${r}`:n:r},J=(e,t,n)=>Math.min(n,Math.max(t,e)),Y=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),he=e=>{if(!e)return 1;let t=e.trim();if(!t||t===`none`)return 1;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?J(n/100,0,1):J(n,0,1):1},ge=e=>{let t=e.trim();if(t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?J(Math.round(n/100*255),0,255):J(Math.round(n),0,255):0},_e=(e,t=1)=>{let n=e.trim();if(n===`none`)return 0;let r=Number.parseFloat(n);return Number.isFinite(r)?n.endsWith(`%`)?r/100*t:r:0},ve=e=>{if(!e)return 0;let t=e.trim();if(!t||t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`rad`)?n*180/Math.PI:t.endsWith(`grad`)?n*.9:t.endsWith(`turn`)?n*360:n:0},ye=(e,t,n,r)=>{let i=n*Math.PI/180,a=t*Math.cos(i),o=t*Math.sin(i),s=e+.3963377774*a+.2158037573*o,c=e-.1055613458*a-.0638541728*o,l=e-.0894841775*a-1.291485548*o,u=s**3,d=c**3,f=l**3,p=e=>{let t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return J(Math.round(t*255),0,255)};return{r:p(4.0767416621*u-3.3077115913*d+.2309699292*f),g:p(-1.2684380046*u+2.6097574011*d-.3413193965*f),b:p(-.0041960863*u-.7034186147*d+1.707614701*f),a:r}},X=e=>{if(!e)return null;let t=e.trim().toLowerCase();if(!t||t===`transparent`)return null;let n=t.match(/^rgba?\((.+)\)$/);if(n){let[e,t]=n[1].split(/\s*\/\s*/),r=e.includes(`,`),i=r?e.split(`,`).map(e=>e.trim()):e.trim().split(/\s+/),a=t??(r?i[3]:void 0);if(i.length>=3)return{r:ge(i[0]),g:ge(i[1]),b:ge(i[2]),a:he(a)}}let r=t.match(/^oklch\((.+)\)$/);if(r){let[e,t]=r[1].split(/\s*\/\s*/),n=e.trim().split(/\s+/);if(n.length>=3)return ye(J(_e(n[0]),0,1),Math.max(_e(n[1],.4),0),ve(n[2]),he(t))}let i=t.match(/^#([0-9a-f]{3,8})$/);if(!i)return null;let a=i[1];return a.length===3||a.length===4?{r:Number.parseInt(a[0]+a[0],16),g:Number.parseInt(a[1]+a[1],16),b:Number.parseInt(a[2]+a[2],16),a:a.length===4?Number.parseInt(a[3]+a[3],16)/255:1}:a.length===6||a.length===8?{r:Number.parseInt(a.slice(0,2),16),g:Number.parseInt(a.slice(2,4),16),b:Number.parseInt(a.slice(4,6),16),a:a.length===8?Number.parseInt(a.slice(6,8),16)/255:1}:null},be=({r:e,g:t,b:n})=>{let r=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4},i=r(e),a=r(t),o=r(n);return i*.2126+a*.7152+o*.0722},xe=(e,t)=>`rgba(${e.r}, ${e.g}, ${e.b}, ${t})`,Se=(e,t)=>{let n=e.getAttribute(`data-rue-appearance`)??e.getAttribute(`data-theme`);return n===`dark`||n===`night`||n===`coffee`||t.colorScheme.split(/\s+/).includes(`dark`)},Ce=(e,t)=>{let n=be(e)<.35;return t?xe(t,n?W:U):n?K:G},we=e=>{if(!e||typeof window>`u`||!(e instanceof window.Element))return G;let t=!1,n=null,r=e;for(;r;){let e=window.getComputedStyle(r),i=X(e.getPropertyValue(`--color-base-content`));i&&i.a>.01&&(n=i);let a=X(e.backgroundColor);if(a&&a.a>.01)return Ce(a,n);let o=X(e.getPropertyValue(`--color-base-100`));if(o&&o.a>.01)return Ce(o,n);Se(r,e)&&(t=!0),r=r.parentElement}let i=X(window.getComputedStyle(e).color);return i?be(i)>.6?xe(i,W):xe(i,U):t?n?xe(n,W):K:G},Te=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=Number.parseFloat(e);if(Number.isFinite(t))return e.endsWith(`rem`)?t*16:t}return 16},Ee=e=>e==null?[]:(Array.isArray(e)?e:[e]).flatMap(e=>String(e).split(/\r?\n/)),De=e=>e.some(e=>e.trim().length>0),Oe=(e,t,n,r,i)=>{let a=Te(t.fontSize),o=Math.max(Math.round(a*1.45),a+6);if(i)return{markWidth:Math.max(n??re,ae),markHeight:Math.max(r??ie,oe),lineHeight:o,fontSizePx:a};if(n!=null&&r!=null)return{markWidth:Math.max(n,ae),markHeight:Math.max(r,oe),lineHeight:o,fontSizePx:a};let s=t.fontFamily??q,c=t.fontWeight??`normal`,l=t.fontStyle&&t.fontStyle!==`none`?t.fontStyle:`normal`,u=0;if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);t&&(t.font=`${l} ${c} ${a}px ${s}`,u=Math.ceil(e.reduce((e,n)=>Math.max(e,t.measureText(n).width),0)))}u||=Math.ceil(e.reduce((e,t)=>Math.max(e,t.length*a*.62),0));let d=Math.max(e.length,1),f=Math.ceil(a+(d-1)*o);return{markWidth:Math.max(n??u,ae),markHeight:Math.max(r??f,oe),lineHeight:o,fontSizePx:a}},ke=e=>{switch(e){case`left`:case`start`:return{anchor:`start`,xRatio:0};case`right`:case`end`:return{anchor:`end`,xRatio:1};default:return{anchor:`middle`,xRatio:.5}}},Ae=e=>[e.color??``,e.fontSize??``,e.fontWeight??``,e.fontStyle??``,e.fontFamily??``,e.textAlign??``],je=({image:e,lines:t,font:n,width:r,height:i})=>JSON.stringify([e??``,t,Ae(n),r??``,i??``]),Me=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>JSON.stringify([e??``,t,n,Ae(r),i,a,o.markWidth,o.markHeight,o.lineHeight,o.fontSizePx,s]),Ne=(e,t)=>{let n=e.get(t);return n!==void 0&&(e.delete(t),e.set(t,n)),n},Pe=(e,t,n)=>{for(e.delete(t),e.set(t,n);e.size>se;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}return n},Fe=(e,t,n)=>{let r=e/2,i=t/2,a=n?.[0]??r,o=n?.[1]??i,s=a-r,c=o-i,l=`0px`,u=`0px`,d=`100%`,f=`100%`;return s>0&&(l=`${s}px`,d=`calc(100% - ${s}px)`,s=0),c>0&&(u=`${c}px`,f=`calc(100% - ${c}px)`,c=0),{left:l,top:u,width:d,height:f,backgroundPosition:`${s}px ${c}px`}},Ie=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>{let{markWidth:c,markHeight:l,lineHeight:u,fontSizePx:d}=o,f=c+i,p=l+a,m=i/2,h=a/2,g=m+c/2,_=h+l/2,v=r.color??G,y=r.fontWeight??`normal`,b=r.fontStyle&&r.fontStyle!==`none`?r.fontStyle:`normal`,x=r.fontFamily??q,{anchor:S,xRatio:C}=ke(r.textAlign),w=``;if(e)w=`<image href="${Y(e)}" x="${m}" y="${h}" width="${c}" height="${l}" preserveAspectRatio="xMidYMid meet" />`;else{let e=d+(Math.max(t.length,1)-1)*u,n=h+Math.max((l-e)/2,0),r=m+c*C;w=t.map((e,t)=>{let i=n+t*u;return`<text x="${r}" y="${i}" fill="${Y(v)}" font-size="${d}" font-weight="${Y(String(y))}" font-style="${Y(b)}" font-family="${Y(x)}" text-anchor="${S}" dominant-baseline="hanging">${Y(e)}</text>`}).join(``)}let T=`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${p}" viewBox="0 0 ${f} ${p}"><g opacity="${s}" transform="rotate(${n} ${g} ${_})">${w}</g></svg>`;return{url:`url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(T)}")`,tileWidth:f,tileHeight:p}},Z=(r,i,o)=>{let c=p(P(r,`children`)),l=p(P(r,`className`)),d=p(P(r,`content`)),f=p(P(r,`font`)),v=p(P(r,`gap`)),y=p(P(r,`height`)),b=p(P(r,`image`)),x=p(P(r,`inherit`)),S=p(P(r,`offset`)),w=p(P(r,`opacity`)),T=p(P(r,`overlayClassName`)),O=p(P(r,`overlayStyle`)),k=p(P(r,`ref`)),A=p(P(r,`rootClassName`)),M=p(P(r,`rotate`)),F=p(P(r,`style`)),I=p(P(r,`width`)),ee=p(P(r,`zIndex`)),L=p(s(e(r),[`children`,`className`,`content`,`font`,`gap`,`height`,`image`,`inherit`,`offset`,`opacity`,`overlayClassName`,`overlayStyle`,`ref`,`rootClassName`,`rotate`,`style`,`width`,`zIndex`])),R=E(void 0),z=null,U=null,W=null,G=``,K=()=>Ee(d.get()),q=()=>(v.get()===void 0?[V,H]:v.get())?.[0]??V,re=()=>(v.get()===void 0?[V,H]:v.get())?.[1]??H,ie=()=>!!b.get()||De(K()),ae=()=>!b.get()&&!(f.get()===void 0?{}:f.get()).color&&De(K())&&R.value?{...f.get()===void 0?{}:f.get(),color:R.value}:f.get()===void 0?{}:f.get(),oe=e=>{let t=je({image:b.get(),lines:K(),font:e,width:I.get(),height:y.get()});return Ne(ce,t)||Pe(ce,t,Oe(K(),e,I.get(),y.get(),b.get()))},se=(e,t)=>{let n=K(),r=n.length?n:[``],i=J(w.get()===void 0?ne:w.get(),0,1),a=Me({image:b.get(),lines:r,rotate:M.get()===void 0?-22:M.get(),font:e,gapX:q(),gapY:re(),dimensions:t,opacity:i});return Ne(le,a)||Pe(le,a,Ie({image:b.get(),lines:r,rotate:M.get()===void 0?-22:M.get(),font:e,gapX:q(),gapY:re(),dimensions:t,opacity:i}))},fe=()=>{let e=ae(),t=Fe(q(),re(),S.get()),n=oe(e);return{placement:t,pattern:ie()?se(e,n):null}},pe=(e,t)=>{let n={position:F.get()?.position??`relative`,overflow:F.get()?.overflow??`hidden`,isolation:F.get()?.isolation??`isolate`};return t?(n[`--rue-watermark-image`]=t.url,n[`--rue-watermark-size`]=`${t.tileWidth}px ${t.tileHeight}px`,n[`--rue-watermark-position`]=e.backgroundPosition,n[`--rue-watermark-left`]=e.left,n[`--rue-watermark-top`]=e.top,n[`--rue-watermark-width`]=e.width,n[`--rue-watermark-height`]=e.height,n[`--rue-watermark-z-index`]=String(ee.get()??te)):x.get()===void 0||x.get()||(n[`--rue-watermark-image`]=`none`,n[`--rue-watermark-size`]=`auto`,n[`--rue-watermark-position`]=`0px 0px`,n[`--rue-watermark-left`]=`0px`,n[`--rue-watermark-top`]=`0px`,n[`--rue-watermark-width`]=`100%`,n[`--rue-watermark-height`]=`100%`,n[`--rue-watermark-z-index`]=`0`),me(n,F.get())},Y=(e,t)=>me({position:`absolute`,left:t?e.left:`var(--rue-watermark-left, 0px)`,top:t?e.top:`var(--rue-watermark-top, 0px)`,width:t?e.width:`var(--rue-watermark-width, 100%)`,height:t?e.height:`var(--rue-watermark-height, 100%)`,pointerEvents:`none`,backgroundRepeat:`repeat`,backgroundImage:t||x.get()===void 0||x.get()?`var(--rue-watermark-image, none)`:`none`,backgroundSize:t||x.get()===void 0||x.get()?`var(--rue-watermark-size, auto)`:`auto`,backgroundPosition:t||x.get()===void 0||x.get()?`var(--rue-watermark-position, 0px 0px)`:`0px 0px`,zIndex:t||x.get()===void 0||x.get()?`var(--rue-watermark-z-index, 9)`:0},O.get()),he=()=>{let e=typeof F.get()==`string`?F.get():[F.get()?.background,F.get()?.backgroundColor,F.get()?.color,F.get()?.colorScheme,F.get()?.[`--color-base-100`],F.get()?.[`--color-base-content`]].join(`|`);return JSON.stringify([K(),l.get()??``,A.get()??``,e])},ge=h(()=>fe()),_e=h(()=>{let e=ge.get();return pe(e.placement,e.pattern)}),ve=h(()=>{let e=ge.get();return Y(e.placement,e.pattern)}),ye=(e,t)=>{e&&(t?e.setAttribute(`style`,t):e.removeAttribute(`style`))},X=()=>{let e=fe();ye(z,pe(e.placement,e.pattern)),ye(U,Y(e.placement,e.pattern))},be=(e=!1)=>{if(b.get()||(f.get()===void 0?{}:f.get()).color||!De(K()))return;let t=he();if(!e&&z===W&&t===G)return;if(z){let e=fe();ye(z,pe(e.placement,e.pattern))}let n=we(z);W=z,G=t,R.value!==n&&(R.value=n,X())},xe=e=>{z!==e&&(z=e,de(k.get(),e),be(!0))},Se=e=>{U=e},Ce=()=>{let e=()=>be(!0);if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)};return N(()=>{X()}),g(()=>{be(!0),Ce()}),D(()=>a(m(e=>{let r=B().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=r.childNodes[1],s=o.parentNode;n(i,()=>L.get(),[`ref`,`className`,`style`,`data-rue-watermark-root`,`data-rue-watermark-inherit`,`__rue_static_template_id__`]);let d=xe;typeof d==`function`?d(i):d&&typeof d==`object`&&`current`in d&&(d.current=i),j(()=>{typeof d==`function`?d(null):d&&typeof d==`object`&&`current`in d&&(d.current=null)});let f;C(()=>{let e=ue(`rue-watermark`,l.get(),A.get()),t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,i.setAttribute(`class`,t))});let p;C(()=>{let e=_e.get(),t=u(e);Object.is(p,t)||(p=t,i.style.cssText=t)}),i.setAttribute(`data-rue-watermark-root`,`true`);let m;C(()=>{let e=x.get()===void 0||x.get()?`true`:`false`;Object.is(m,e)||(m=e,e==null?i.removeAttribute(`data-rue-watermark-inherit`):i.setAttribute(`data-rue-watermark-inherit`,String(e)))}),a.setAttribute(`aria-hidden`,`true`);let h=Se;typeof h==`function`?h(a):h&&typeof h==`object`&&`current`in h&&(h.current=a),j(()=>{typeof h==`function`?h(null):h&&typeof h==`object`&&`current`in h&&(h.current=null)});let g;C(()=>{let e=ue(`rue-watermark-overlay`,T.get()),t=e===!1||e==null?``:String(e);Object.is(g,t)||(g=t,a.setAttribute(`class`,t))});let _;return C(()=>{let e=ve.get(),t=u(e);Object.is(_,t)||(_=t,a.style.cssText=t)}),a.setAttribute(`data-rue-watermark-overlay`,`true`),t({parent:s,before:o},()=>c.get(),()=>({})),[r,r]}),e=>_(()=>{c.set(e.children),l.set(e.className),d.set(e.content),f.set(e.font),v.set(e.gap),y.set(e.height),b.set(e.image),x.set(e.inherit),S.set(e.offset),w.set(e.opacity),T.set(e.overlayClassName),O.set(e.overlayStyle),k.set(e.ref),A.set(e.rootClassName),M.set(e.rotate),F.set(e.style),I.set(e.width),ee.set(e.zIndex),L.set(s(e,[`children`,`className`,`content`,`font`,`gap`,`height`,`image`,`inherit`,`offset`,`opacity`,`overlayClassName`,`overlayStyle`,`ref`,`rootClassName`,`rotate`,`style`,`width`,`zIndex`]))}),()=>e(r)))},Le=M(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),Re=M(`<div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),ze=M(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Watermark 水印</h1><p class="mt-3 mb-3 text-sm">Rue 的 Watermark 不照搬其他组件库的视觉，而是把能力落成更适合当前设计站点的轻量覆盖层。 你可以直接给任意容器加文字或图片水印，同时保持按钮、卡片、统计区这些内容本身的交互。</p><h2>何时使用</h2><ul><li>需要给卡片、报表、详情页加上“内部预览”“草稿”“仅限共享”等视觉标记。</li><li>需要图片或文字水印覆盖在任意内容上，但又不希望阻断按钮、链接和表单的交互。</li><li>需要局部容器继承上层水印图案，而不是为每一块内容重复写一遍配置。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>API</h2><!--rue:opaque-hole:5--></div>`),Be=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22196%22%20height%3D%2272%22%20viewBox%3D%220%200%20196%2072%22%3E%3Crect%20width%3D%22196%22%20height%3D%2272%22%20rx%3D%2218%22%20fill%3D%22%230f172a%22%2F%3E%3Cpath%20d%3D%22M30%2019h22c12%200%2019%206%2019%2017%200%2011-7%2017-19%2017H45v14H30V19Zm22%2022c4%200%206-2%206-5s-2-5-6-5H45v10h7Zm35-22h15l10%2031%2010-31h15l-17%2048H104L87%2019Zm60%200h18l15%2048h-15l-2.2-7.5h-13.7L147%2067h-15l15-48Zm13%2029-4-14-4%2014h8Z%22%20fill%3D%22%23f8fafc%22%2F%3E%3C%2Fsvg%3E`,Ve=[{label:`共享链接`,value:`1.8k`,detail:`过去 24 小时`},{label:`导出快照`,value:`312`,detail:`包含 38 个外部成员`},{label:`访问终端`,value:`57`,detail:`待二次确认设备 5 台`}],He=[{prop:`content`,description:`文字水印内容，支持字符串或多行数组。`,type:`string | string[]`,defaultValue:`-`},{prop:`image`,description:`图片水印地址，适合 logo、签章、业务标记。`,type:`string`,defaultValue:`-`},{prop:`font`,description:`文字水印的颜色、字号、字重、字体和对齐方式。`,type:`{ color?: string; fontSize?: number | string; fontWeight?: number | string; fontStyle?: string; fontFamily?: string; textAlign?: string }`,defaultValue:`{ color: 自动按宿主背景明暗推导, fontSize: 16 }`},{prop:`rotate`,description:`单个水印块的旋转角度。`,type:`number`,defaultValue:`-22`},{prop:`width / height`,description:`单个水印内容块的尺寸；不传时文本会按内容估算。`,type:`number`,defaultValue:`文本自动测量 / 图片 120 x 64`},{prop:`gap`,description:`水印块之间的水平与垂直间距。`,type:`[number, number]`,defaultValue:`[100, 100]`},{prop:`offset`,description:`起始铺设偏移量，便于与卡片头部或图像对齐。`,type:`[number, number]`,defaultValue:`[gapX / 2, gapY / 2]`},{prop:`zIndex`,description:`覆盖层层级，保持视觉上方但不阻断交互。`,type:`number`,defaultValue:`9`},{prop:`inherit`,description:`是否让后代 Watermark 复用当前图案与铺设参数。`,type:`boolean`,defaultValue:`true`},{prop:`className / rootClassName`,description:`根容器类名，便于直接叠加 Rue 的布局与视觉类。`,type:`string`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`覆盖层类名和样式，适合与圆角、混合模式、局部调优配合。`,type:`string / any`,defaultValue:`-`},{prop:`style`,description:`根容器行内样式；默认会自动补 position、overflow、isolation。`,type:`any`,defaultValue:`-`}],Ue=(t,n,r)=>{let s=p(P(t,`rows`));return a(i(e=>{let t=Le().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,i=M(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),a=[];return o(()=>{let e=s.get()||[];a=b(r,n,a,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,a;return w(e=>{let t=i().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=x(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=x(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=x(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,a=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,i)=>{e=n,t=i,r=n,a()},void 0,n)},!1,!0)}),k(()=>v(a)),[t,t]}),e=>_(()=>{s.set(e.rows)}),()=>e(t))},Q={rotate:-22,gapX:120,gapY:96,offsetX:48,offsetY:48,fontSize:18,zIndex:12},We={rotate:-8,gapX:156,gapY:124,offsetX:64,offsetY:32,fontSize:14,zIndex:10},Ge=e=>typeof requestAnimationFrame==`function`?{type:`frame`,id:requestAnimationFrame(e)}:{type:`timeout`,id:setTimeout(e,0)},Ke=e=>{if(e.type===`frame`){typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(e.id);return}clearTimeout(e.id)},$=(t,n,r)=>{let i=p(P(t,`label`)),o=p(P(t,`max`)),s=p(P(t,`min`)),l=p(P(t,`onValueChange`)),u=p(P(t,`onValueCommit`)),d=p(P(t,`value`));return a(c(L,()=>({className:`range-sm`,rootClassName:`space-y-2`,valueClassName:`min-w-12 text-center tabular-nums`,label:i.get(),min:s.get(),max:o.get(),value:d.get(),showValue:{formatter:e=>String(e)},onValueChange:l.get(),onValueCommit:u.get()})),e=>_(()=>{i.set(e.label),o.set(e.max),s.set(e.min),l.set(e.onValueChange),u.set(e.onValueCommit),d.set(e.value)}),()=>e(t))},qe=(e,n,a)=>{let o=E(`Rue Design`),s=E(Q.rotate),u=E(Q.gapX),p=E(Q.gapY),h=E(Q.offsetX),g=E(Q.offsetY),v=E(Q.fontSize),b=E(Q.zIndex),w=E(Q.rotate),O=E(Q.gapX),k=E(Q.gapY),A=E(Q.offsetX),M=E(Q.offsetY),N=E(Q.fontSize),P=E(Q.zIndex),L=E(``),R={rotate:w,gapX:O,gapY:k,offsetX:A,offsetY:M,fontSize:N,zIndex:P},z={...Q},B=null,V=e=>{s.value=e.rotate,u.value=e.gapX,p.value=e.gapY,h.value=e.offsetX,g.value=e.offsetY,v.value=e.fontSize,b.value=e.zIndex},H=e=>{w.value=e.rotate,O.value=e.gapX,k.value=e.gapY,A.value=e.offsetX,M.value=e.offsetY,N.value=e.fontSize,P.value=e.zIndex},te=()=>{B&&=(Ke(B),null)},ne=()=>{B=null,_(()=>{V(z)})},U=(e,t)=>{z[e]=t,!B&&(B=Ge(ne))},W=(e,t)=>{z[e]=t,te(),_(()=>{V(z),R[e].value=t})},G=({nextContent:e,nextColor:t,nextControls:n})=>{te(),z={...n},_(()=>{o.value=e,L.value=t,V(n),H(n)})},K=()=>G({nextContent:`Rue Design`,nextColor:``,nextControls:Q}),q=()=>G({nextContent:`Shared with Partner`,nextColor:`rgba(34, 197, 94, 0.22)`,nextControls:We});return j(te),D(()=>i(e=>{let n=Re().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,_=n.childNodes[1],E=_.parentNode,D=(e,t,n)=>{let i=()=>c(Z,()=>({content:[o.value,`Scenario Sandbox`],rotate:s.value,gap:[u.value,p.value],offset:[h.value,g.value],zIndex:b.value,width:180,height:72,font:{color:L.value||void 0,fontSize:v.value,fontWeight:700,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`space-y-4 p-5 md:p-6`);let i=S(`div`,n);y(n,i),i.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let a=S(`div`,i);y(i,a);let s=S(`div`,a);y(a,s),s.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`),y(s,x(`Scenario Sandbox`));let c=S(`div`,a);y(a,c),c.setAttribute(`class`,`mt-2 text-2xl font-semibold text-base-content`),y(c,x(`参数调整后的实时预览`)),r(i,ee,()=>({outline:!0,children:(e,t,n)=>{let r=()=>m(e=>{let t=T(),n=x(``);y(t,n),l(n,()=>`z-index ${b.value}`);let r=x(``),i=x(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let u=S(`p`,n);y(n,u),u.setAttribute(`class`,`m-0 max-w-2xl text-sm leading-7 text-base-content/65`),y(u,x(`这里故意放了文字、徽标和按钮，方便观察水印对不同内容密度与层次关系的影响。`));let p=S(`div`,n);y(n,p),p.setAttribute(`class`,`grid gap-4 md:grid-cols-3`),r(p,I,()=>({className:`bg-base-100/90 shadow-sm md:col-span-2`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T();r(t,I.Body,()=>({children:(e,t,n)=>{let r=()=>d(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`text-sm font-semibold text-base-content`),y(n,x(`内容流`));let r=S(`p`,t);y(t,r),r.setAttribute(`class`,`m-0 text-sm leading-7 text-base-content/65`),y(r,x(`Rue Watermark 会把铺设逻辑限制在当前容器内部，圆角、阴影和内容布局都可以继续由宿主容器控制。`));let i=x(``),a=x(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));let h=S(`div`,p);y(p,h),h.setAttribute(`class`,`rounded-[1.25rem] bg-accent px-4 py-5 text-accent-content shadow-sm`);let g=S(`div`,h);y(h,g),g.setAttribute(`class`,`text-xs uppercase tracking-[0.2em] opacity-70`),y(g,x(`Preset`));let _=S(`div`,h);y(h,_),_.setAttribute(`class`,`mt-2 text-2xl font-black`);let v=x(``);y(_,v),l(v,()=>o.value);let C=S(`div`,n);y(n,C),C.setAttribute(`class`,`flex flex-wrap gap-3`),r(C,F,()=>({size:`sm`,color:`primary`,onClick:K,children:(e,t,n)=>{let r=()=>d(e=>{let t=T();y(t,x(`重置参数`));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}})),r(C,F,()=>({size:`sm`,type:`outlined`,onClick:q,children:(e,t,n)=>{let r=()=>d(e=>{let t=T();y(t,x(`切换到稀疏模式`));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let w=x(``),E=x(``);return t.insertBefore(w,t.firstChild),t.appendChild(E),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));return e==null?i():f(e,n,i)},R=i.nextSibling;a.removeChild(i),t({parent:a,before:R},()=>D,()=>({}));let z=(e,t,n)=>{let i=()=>c(I,()=>({className:`bg-base-100 shadow-sm`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T();r(t,I.Body,()=>({className:`gap-4`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T(),n=S(`div`,t);y(t,n);let i=S(`div`,n);y(n,i),i.setAttribute(`class`,`text-sm font-semibold text-base-content`),y(i,x(`文本`));let a=S(`input`,n);y(n,a),a.setAttribute(`class`,`input input-bordered mt-2 w-full`);let s;C(()=>{let e=o.value,t=e==null?``:String(e);Object.is(s,t)||(s=t,a.value=t)});let c=e=>{let t=e=>{o.value=e.currentTarget.value};typeof t==`function`&&t(e)};a.addEventListener(`input`,c),j(()=>a.removeEventListener(`input`,c)),r(t,$,()=>({label:`Rotate`,min:-90,max:90,value:w,onValueChange:e=>U(`rotate`,e),onValueCommit:e=>W(`rotate`,e)})),r(t,$,()=>({label:`Font size`,min:12,max:28,value:N,onValueChange:e=>U(`fontSize`,e),onValueCommit:e=>W(`fontSize`,e)})),r(t,$,()=>({label:`Gap X`,min:72,max:180,value:O,onValueChange:e=>U(`gapX`,e),onValueCommit:e=>W(`gapX`,e)})),r(t,$,()=>({label:`Gap Y`,min:72,max:180,value:k,onValueChange:e=>U(`gapY`,e),onValueCommit:e=>W(`gapY`,e)})),r(t,$,()=>({label:`Offset X`,min:0,max:120,value:A,onValueChange:e=>U(`offsetX`,e),onValueCommit:e=>W(`offsetX`,e)})),r(t,$,()=>({label:`Offset Y`,min:0,max:120,value:M,onValueChange:e=>U(`offsetY`,e),onValueCommit:e=>W(`offsetY`,e)})),r(t,$,()=>({label:`z-index`,min:1,max:24,value:P,onValueChange:e=>U(`zIndex`,e),onValueCommit:e=>W(`zIndex`,e)}));let l=S(`div`,t);y(t,l);let u=S(`div`,l);y(l,u),u.setAttribute(`class`,`text-sm font-medium text-base-content`),y(u,x(`Color override`));let d=S(`input`,l);y(l,d),d.setAttribute(`class`,`input input-bordered mt-2 w-full`),d.setAttribute(`placeholder`,`auto`);let f;C(()=>{let e=L.value,t=e==null?``:String(e);Object.is(f,t)||(f=t,d.value=t)});let p=e=>{let t=e=>{L.value=e.currentTarget.value};typeof t==`function`&&t(e)};d.addEventListener(`input`,p),j(()=>d.removeEventListener(`input`,p));let m=x(``),h=x(``);return t.insertBefore(m,t.firstChild),t.appendChild(h),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));return e==null?i():f(e,n,i)},B=_.nextSibling;return E.removeChild(_),t({parent:E,before:B},()=>z,()=>({})),[n,n]}))},Je=`const WatermarkCustomControlsDemo = () => {
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
}`,Ye=(e,n,i)=>{let a={basic:E(`preview`),multiline:E(`preview`),image:E(`preview`),inherit:E(`preview`),custom:E(`preview`)};return D(()=>c(R,()=>({children:(e,n,i)=>{let o=()=>m(e=>{let n=T(),i=ze().content.cloneNode(!0),o=i.firstChild,s=o.childNodes[4],l=s.parentNode,u=o.childNodes[5],p=u.parentNode,h=o.childNodes[6],g=h.parentNode,_=o.childNodes[7],C=_.parentNode,E=o.childNodes[8],D=E.parentNode,k=o.childNodes[10],N=k.parentNode;n.appendChild(i);let P=(e,t,n)=>{let i=()=>c(z,()=>({title:`Basic text watermark`,summary:`最直接的用法：给一个内容容器加上文本水印，按钮仍然可以正常点击。`,tab:a.basic,preview:(e,t,n)=>{let i=()=>c(Z,()=>({content:`Rue Design`,className:`rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-8`);let i=S(`div`,n);y(n,i),i.setAttribute(`class`,`space-y-4`),r(i,ee,()=>({variant:`secondary`,children:(e,t,n)=>{let r=()=>d(e=>{let t=T();y(t,x(`Internal Preview`));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let a=S(`h3`,i);y(i,a),a.setAttribute(`class`,`m-0 text-3xl font-black tracking-tight text-base-content md:text-4xl`),y(a,x(`协作面板正在生成新一轮可共享快照`));let o=S(`p`,i);y(i,o),o.setAttribute(`class`,`m-0 max-w-2xl text-sm leading-7 text-base-content/70`),y(o,x(`水印覆盖层默认在视觉上方，但采用 pointer-events none，不会挡住卡片、按钮和其它交互控件。`));let s=S(`div`,i);y(i,s),s.setAttribute(`class`,`flex flex-wrap gap-3`),r(s,F,()=>({color:`primary`,children:(e,t,n)=>{let r=()=>d(e=>{let t=T();y(t,x(`导出摘要`));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}})),r(s,F,()=>({type:`outlined`,children:(e,t,n)=>{let r=()=>d(e=>{let t=T();y(t,x(`查看访问日志`));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}})),r(n,I,()=>({className:`bg-base-100/85 shadow-sm backdrop-blur-sm`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T();r(t,I.Body,()=>({className:`gap-4`,children:(e,t,n)=>{let r=()=>m(e=>{let t=T(),n=M(`<div class="rounded-box border border-base-300/70 bg-base-100/70 px-4 py-3"><div class="text-xs uppercase tracking-[0.2em] text-base-content/50"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-bold text-base-content"><!--rue:text-hole:1--></div><div class="mt-1 text-sm text-base-content/60">rue:row-text</div></div>`),r=O(`rue:list:end`);y(t,r);let i=[];A(()=>{let e=Ve||[];i=b(r.parentNode,r,i,e,(e,t)=>e.label,(e,t,r)=>{let i=e,a;return w(e=>{let t=n().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0],o=r.parentNode,s=t.childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[2].childNodes[0];l.parentNode;let u=x(``);o.insertBefore(u,r),o.removeChild(r);let d=i.label==null||typeof i.label==`boolean`?``:String(i.label);u.textContent=d;let f=x(``);c.insertBefore(f,s),c.removeChild(s);let p=i.value==null||typeof i.value==`boolean`?``:String(i.value);f.textContent=p;let m=i.detail==null||typeof i.detail==`boolean`?``:String(i.detail);return l.textContent=m,a=()=>{{let e=i.label==null||typeof i.label==`boolean`?``:String(i.label);Object.is(d,e)||(u.textContent=e,d=e)}{let e=i.value==null||typeof i.value==`boolean`?``:String(i.value);Object.is(p,e)||(f.textContent=e,p=e)}{let e=i.detail==null||typeof i.detail==`boolean`?``:String(i.detail);Object.is(m,e)||(l.textContent=e,m=e)}},[t,t]},(n,r)=>{e=n,t=r,i=n,a()},void 0,r)},!1,!0)}),j(()=>v(i));let a=x(``),o=x(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));let c=x(``),l=x(``);return t.insertBefore(c,t.firstChild),t.appendChild(l),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));return e==null?i():f(e,n,i)},code:`const stats = [
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
</Watermark>`}));return e==null?i():f(e,n,i)},L=s.nextSibling;l.removeChild(s),t({parent:l,before:L},()=>P,()=>({}));let R=(e,t,n)=>{let i=()=>c(z,()=>({title:`Multiline typography and tuned spacing`,summary:`支持多行内容、字族和铺设参数调优，更适合仪表盘、稿件和审批流页面。`,tab:a.multiline,preview:(e,t,n)=>{let i=()=>c(Z,()=>({content:[`Confidential Build`,`Rue Design System`],rotate:-16,gap:[132,116],width:168,height:72,font:{color:`rgba(13, 22, 39, 0.15)`,fontSize:15,fontWeight:700,fontFamily:`Georgia, Times New Roman, serif`,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.88))] shadow-sm`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`grid gap-4 p-5 md:grid-cols-3 md:p-6`),r(n,I,()=>({className:`bg-base-100/90 shadow-sm`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T();r(t,I.Body,()=>({children:(e,t,n)=>{let r=()=>d(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`),y(n,x(`Draft`));let r=S(`div`,t);y(t,r),r.setAttribute(`class`,`text-lg font-semibold text-base-content`),y(r,x(`产品评审结论`));let i=S(`p`,t);y(t,i),i.setAttribute(`class`,`m-0 text-sm leading-6 text-base-content/65`),y(i,x(`用多行水印把容器语义说清楚，而不是只放一个模糊 logo。`));let a=x(``),o=x(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}})),r(n,I,()=>({className:`bg-base-100/90 shadow-sm md:col-span-2`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T();r(t,I.Body,()=>({className:`gap-4`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let i=S(`div`,n);y(n,i);let a=S(`div`,i);y(i,a),a.setAttribute(`class`,`text-xs uppercase tracking-[0.16em] text-base-content/45`),y(a,x(`Access Scope`));let o=S(`div`,i);y(i,o),o.setAttribute(`class`,`text-xl font-semibold text-base-content`),y(o,x(`仅限设计与法务同步窗口`)),r(n,ee,()=>({outline:!0,children:(e,t,n)=>{let r=()=>d(e=>{let t=T();y(t,x(`Version 15`));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let s=S(`p`,t);y(t,s),s.setAttribute(`class`,`m-0 text-sm leading-7 text-base-content/65`),y(s,x(`通过 width、height、gap 和 font 组合，可以让文字块更像“签章”而不是背景噪音。`));let c=x(``),l=x(``);return t.insertBefore(c,t.firstChild),t.appendChild(l),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));let i=x(``),a=x(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));return e==null?i():f(e,n,i)},code:`<Watermark
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
</Watermark>`}));return e==null?i():f(e,n,i)},B=u.nextSibling;p.removeChild(u),t({parent:p,before:B},()=>R,()=>({}));let V=(e,t,n)=>{let i=()=>c(z,()=>({title:`Image watermark`,summary:`图片模式适合品牌 logo、部门印记或业务章；Rue 这边建议把它用在局部容器，而不是整页满屏。`,tab:a.image,preview:(e,t,n)=>{let i=()=>c(Z,()=>({image:Be,width:156,height:58,rotate:-18,gap:[140,112],className:`rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_18rem] md:p-6`),r(n,I,()=>({className:`overflow-hidden bg-base-200/70 shadow-none`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T();r(t,I.Body,()=>({className:`gap-4`,children:(e,t,n)=>{let r=()=>d(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`),y(n,x(`Media Kit`));let r=S(`div`,t);y(t,r),r.setAttribute(`class`,`text-2xl font-semibold text-base-content`),y(r,x(`品牌资产导出包`));let i=S(`p`,t);y(t,i),i.setAttribute(`class`,`m-0 text-sm leading-7 text-base-content/65`),y(i,x(`图片水印不会吞掉原内容的层级信息，更适合 logo、组织印章和明确的来源标识。`));let a=x(``),o=x(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));let i=S(`div`,n);y(n,i),i.setAttribute(`class`,`rounded-[1.25rem] bg-gradient-to-br from-neutral to-slate-900 p-5 text-neutral-content shadow-sm`);let a=S(`div`,i);y(i,a),a.setAttribute(`class`,`text-xs uppercase tracking-[0.22em] opacity-70`),y(a,x(`Delivery`));let o=S(`div`,i);y(i,o),o.setAttribute(`class`,`mt-4 text-3xl font-black`),y(o,x(`5 Files`));let s=S(`div`,i);y(i,s),s.setAttribute(`class`,`mt-2 text-sm leading-6 opacity-75`),y(s,x(`SVG / PDF / PNG / dark / light`));let c=x(``),l=x(``);return t.insertBefore(c,t.firstChild),t.appendChild(l),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));return e==null?i():f(e,n,i)},code:`const logo = 'https://dummyimage.com/312x116/0f172a/f8fafc.png&text=RUE'

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
</Watermark>`}));return e==null?i():f(e,n,i)},H=h.nextSibling;g.removeChild(h),t({parent:g,before:H},()=>V,()=>({}));let te=(e,t,n)=>{let i=()=>c(z,()=>({title:`Inherited local scope`,summary:`父级配置一次，子级局部容器可以继续复用；不想继承时再显式关掉。`,tab:a.inherit,preview:(e,t,n)=>{let i=()=>c(Z,()=>({content:[`Team Only`,`Rue Preview`],rotate:-14,width:148,height:64,gap:[128,108],className:`rounded-[1.75rem] border border-base-300 bg-base-100 shadow-sm`,children:(e,t,n)=>{let i=()=>m(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`grid gap-4 p-5 md:grid-cols-2 md:p-6`),r(n,Z,()=>({className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-100/80`,children:(e,t,n)=>{let r=()=>d(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`space-y-3 p-4`);let r=S(`div`,n);y(n,r),r.setAttribute(`class`,`text-sm font-semibold text-base-content`),y(r,x(`继承父级水印`));let i=S(`p`,n);y(n,i),i.setAttribute(`class`,`m-0 text-sm leading-6 text-base-content/65`),y(i,x(`这个局部容器没有重新写 content 和 image，会直接复用外层图案与铺设参数。`));let a=x(``),o=x(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}})),r(n,Z,()=>({inherit:!1,className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/60`,children:(e,t,n)=>{let r=()=>d(e=>{let t=T(),n=S(`div`,t);y(t,n),n.setAttribute(`class`,`space-y-3 p-4`);let r=S(`div`,n);y(n,r),r.setAttribute(`class`,`text-sm font-semibold text-base-content`),y(r,x(`关闭继承`));let i=S(`p`,n);y(n,i),i.setAttribute(`class`,`m-0 text-sm leading-6 text-base-content/65`),y(i,x(`当局部容器不需要上层水印时，直接把 inherit 设为 false 即可回到纯净内容区。`));let a=x(``),o=x(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():f(e,n,r)}}));let i=x(``),a=x(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():f(e,n,i)}}));return e==null?i():f(e,n,i)},code:`<Watermark
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
</Watermark>`}));return e==null?i():f(e,n,i)},ne=_.nextSibling;C.removeChild(_),t({parent:C,before:ne},()=>te,()=>({}));let U=(e,t,n)=>{let r=()=>c(z,()=>({title:`Custom controls`,summary:`把可调示例 落到 Rue 风格里，用 Range 的按帧更新快速调整排版参数。`,tab:a.custom,preview:(e,t,n)=>{let r=()=>c(qe,()=>({}));return e==null?r():f(e,n,r)},code:Je}));return e==null?r():f(e,n,r)},W=E.nextSibling;D.removeChild(E),t({parent:D,before:W},()=>U,()=>({}));let G=(e,t,n)=>{let r=()=>c(Ue,()=>({rows:He}));return e==null?r():f(e,n,r)},K=k.nextSibling;N.removeChild(k),t({parent:N,before:K},()=>G,()=>({}));let q=x(``),re=x(``);return n.insertBefore(q,n.firstChild),n.appendChild(re),[n.firstChild,n.lastChild]});return e==null?o():f(e,i,o)}})))};export{Ye as default};