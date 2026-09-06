import{An as e,At as t,Dn as n,Dt as r,E as i,Et as a,Mt as o,Ot as s,P as c,Pt as l,Q as u,Qt as d,Sn as f,T as p,Vt as m,Zt as h,_n as g,_t as _,at as v,b as y,bt as ee,ct as b,dt as x,et as S,gn as C,gt as w,hn as T,kn as E,pn as D,qt as O,rt as k,st as A,tn as j,ut as M,vn as N,vt as P,w as F,wn as I,x as L,xn as R,yn as z,yt as B}from"./rue-runtime-HIMg8Lz8.js";import{t as V}from"./button-wFg2EV7R.js";import{t as H}from"./card-ChdV0iIA.js";import{t as te}from"./badge-ho--XXs0.js";import{t as U}from"./range-Cbwrabh5.js";import{r as W}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as G}from"./PreviewBlock-Dc0KnPUP.js";var ne=N(`<div data-rue-watermark-root="true"><div aria-hidden="true" data-rue-watermark-overlay="true"></div><!--rue:text-hole:0--></div>`),K=100,re=100,ie=9,ae=1,q=.2,J=.28,Y=`rgba(15, 23, 42, ${q})`,oe=`rgba(248, 250, 252, ${J})`,se=`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,ce=120,le=64,ue=32,de=24,fe=80,pe=new Map,me=new Map,he=(...e)=>e.filter(Boolean).join(` `),ge=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},_e=e=>e.startsWith(`--`)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),ve=e=>Object.entries(e).filter(([,e])=>e!==void 0).map(([e,t])=>`${_e(e)}: ${String(t)}`).join(`; `),ye=(e,t)=>{let n=ve(e);if(!t)return n;if(typeof t==`string`)return n?`${n}; ${t}`:t;let r=ve(t);return n?r?`${n}; ${r}`:n:r},X=(e,t,n)=>Math.min(n,Math.max(t,e)),be=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),xe=e=>{if(!e)return 1;let t=e.trim();if(!t||t===`none`)return 1;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?X(n/100,0,1):X(n,0,1):1},Se=e=>{let t=e.trim();if(t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?X(Math.round(n/100*255),0,255):X(Math.round(n),0,255):0},Ce=(e,t=1)=>{let n=e.trim();if(n===`none`)return 0;let r=Number.parseFloat(n);return Number.isFinite(r)?n.endsWith(`%`)?r/100*t:r:0},we=e=>{if(!e)return 0;let t=e.trim();if(!t||t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`rad`)?n*180/Math.PI:t.endsWith(`grad`)?n*.9:t.endsWith(`turn`)?n*360:n:0},Te=(e,t,n,r)=>{let i=n*Math.PI/180,a=t*Math.cos(i),o=t*Math.sin(i),s=e+.3963377774*a+.2158037573*o,c=e-.1055613458*a-.0638541728*o,l=e-.0894841775*a-1.291485548*o,u=s**3,d=c**3,f=l**3,p=e=>{let t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return X(Math.round(t*255),0,255)};return{r:p(4.0767416621*u-3.3077115913*d+.2309699292*f),g:p(-1.2684380046*u+2.6097574011*d-.3413193965*f),b:p(-.0041960863*u-.7034186147*d+1.707614701*f),a:r}},Ee=e=>{if(!e)return null;let t=e.trim().toLowerCase();if(!t||t===`transparent`)return null;let n=t.match(/^rgba?\((.+)\)$/);if(n){let[e,t]=n[1].split(/\s*\/\s*/),r=e.includes(`,`),i=r?e.split(`,`).map(e=>e.trim()):e.trim().split(/\s+/),a=t??(r?i[3]:void 0);if(i.length>=3)return{r:Se(i[0]),g:Se(i[1]),b:Se(i[2]),a:xe(a)}}let r=t.match(/^oklch\((.+)\)$/);if(r){let[e,t]=r[1].split(/\s*\/\s*/),n=e.trim().split(/\s+/);if(n.length>=3)return Te(X(Ce(n[0]),0,1),Math.max(Ce(n[1],.4),0),we(n[2]),xe(t))}let i=t.match(/^#([0-9a-f]{3,8})$/);if(!i)return null;let a=i[1];return a.length===3||a.length===4?{r:Number.parseInt(a[0]+a[0],16),g:Number.parseInt(a[1]+a[1],16),b:Number.parseInt(a[2]+a[2],16),a:a.length===4?Number.parseInt(a[3]+a[3],16)/255:1}:a.length===6||a.length===8?{r:Number.parseInt(a.slice(0,2),16),g:Number.parseInt(a.slice(2,4),16),b:Number.parseInt(a.slice(4,6),16),a:a.length===8?Number.parseInt(a.slice(6,8),16)/255:1}:null},De=({r:e,g:t,b:n})=>{let r=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4},i=r(e),a=r(t),o=r(n);return i*.2126+a*.7152+o*.0722},Oe=(e,t)=>`rgba(${e.r}, ${e.g}, ${e.b}, ${t})`,ke=(e,t)=>{let n=e.getAttribute(`data-rue-appearance`)??e.getAttribute(`data-theme`);return n===`dark`||n===`night`||n===`coffee`||t.colorScheme.split(/\s+/).includes(`dark`)},Ae=(e,t)=>{let n=De(e)<.35;return t?Oe(t,n?J:q):n?oe:Y},je=e=>{if(!e||typeof window>`u`||!(e instanceof window.Element))return Y;let t=!1,n=null,r=e;for(;r;){let e=window.getComputedStyle(r),i=Ee(e.getPropertyValue(`--color-base-content`));i&&i.a>.01&&(n=i);let a=Ee(e.backgroundColor);if(a&&a.a>.01)return Ae(a,n);let o=Ee(e.getPropertyValue(`--color-base-100`));if(o&&o.a>.01)return Ae(o,n);ke(r,e)&&(t=!0),r=r.parentElement}let i=Ee(window.getComputedStyle(e).color);return i?De(i)>.6?Oe(i,J):Oe(i,q):t?n?Oe(n,J):oe:Y},Me=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=Number.parseFloat(e);if(Number.isFinite(t))return e.endsWith(`rem`)?t*16:t}return 16},Ne=e=>e==null?[]:(Array.isArray(e)?e:[e]).flatMap(e=>String(e).split(/\r?\n/)),Pe=e=>e.some(e=>e.trim().length>0),Fe=(e,t,n,r,i)=>{let a=Me(t.fontSize),o=Math.max(Math.round(a*1.45),a+6);if(i)return{markWidth:Math.max(n??ce,ue),markHeight:Math.max(r??le,de),lineHeight:o,fontSizePx:a};if(n!=null&&r!=null)return{markWidth:Math.max(n,ue),markHeight:Math.max(r,de),lineHeight:o,fontSizePx:a};let s=t.fontFamily??se,c=t.fontWeight??`normal`,l=t.fontStyle&&t.fontStyle!==`none`?t.fontStyle:`normal`,u=0;if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);t&&(t.font=`${l} ${c} ${a}px ${s}`,u=Math.ceil(e.reduce((e,n)=>Math.max(e,t.measureText(n).width),0)))}u||=Math.ceil(e.reduce((e,t)=>Math.max(e,t.length*a*.62),0));let d=Math.max(e.length,1),f=Math.ceil(a+(d-1)*o);return{markWidth:Math.max(n??u,ue),markHeight:Math.max(r??f,de),lineHeight:o,fontSizePx:a}},Ie=e=>{switch(e){case`left`:case`start`:return{anchor:`start`,xRatio:0};case`right`:case`end`:return{anchor:`end`,xRatio:1};default:return{anchor:`middle`,xRatio:.5}}},Le=e=>[e.color??``,e.fontSize??``,e.fontWeight??``,e.fontStyle??``,e.fontFamily??``,e.textAlign??``],Re=({image:e,lines:t,font:n,width:r,height:i})=>JSON.stringify([e??``,t,Le(n),r??``,i??``]),ze=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>JSON.stringify([e??``,t,n,Le(r),i,a,o.markWidth,o.markHeight,o.lineHeight,o.fontSizePx,s]),Be=(e,t)=>{let n=e.get(t);return n!==void 0&&(e.delete(t),e.set(t,n)),n},Ve=(e,t,n)=>{for(e.delete(t),e.set(t,n);e.size>fe;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}return n},He=(e,t,n)=>{let r=e/2,i=t/2,a=n?.[0]??r,o=n?.[1]??i,s=a-r,c=o-i,l=`0px`,u=`0px`,d=`100%`,f=`100%`;return s>0&&(l=`${s}px`,d=`calc(100% - ${s}px)`,s=0),c>0&&(u=`${c}px`,f=`calc(100% - ${c}px)`,c=0),{left:l,top:u,width:d,height:f,backgroundPosition:`${s}px ${c}px`}},Ue=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>{let{markWidth:c,markHeight:l,lineHeight:u,fontSizePx:d}=o,f=c+i,p=l+a,m=i/2,h=a/2,g=m+c/2,_=h+l/2,v=r.color??Y,y=r.fontWeight??`normal`,ee=r.fontStyle&&r.fontStyle!==`none`?r.fontStyle:`normal`,b=r.fontFamily??se,{anchor:x,xRatio:S}=Ie(r.textAlign),C=``;if(e)C=`<image href="${be(e)}" x="${m}" y="${h}" width="${c}" height="${l}" preserveAspectRatio="xMidYMid meet" />`;else{let e=d+(Math.max(t.length,1)-1)*u,n=h+Math.max((l-e)/2,0),r=m+c*S;C=t.map((e,t)=>{let i=n+t*u;return`<text x="${r}" y="${i}" fill="${be(v)}" font-size="${d}" font-weight="${be(String(y))}" font-style="${be(ee)}" font-family="${be(b)}" text-anchor="${x}" dominant-baseline="hanging">${be(e)}</text>`}).join(``)}let w=`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${p}" viewBox="0 0 ${f} ${p}"><g opacity="${s}" transform="rotate(${n} ${g} ${_})">${C}</g></svg>`;return{url:`url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(w)}")`,tileWidth:f,tileHeight:p}},Z=t=>{let r=v(t.children),i=v(t.className),o=v(t.content),s=v(t.font),u=v(t.gap),d=v(t.height),f=v(t.image),g=v(t.inherit),_=v(t.offset),y=v(t.opacity),ee=v(t.overlayClassName),x=v(t.overlayStyle),C=v(t.ref),w=v(t.rootClassName),T=v(t.rotate),E=v(t.style),D=v(t.width),k=v(t.zIndex),A=v(z(t,[`children`,`className`,`content`,`font`,`gap`,`height`,`image`,`inherit`,`offset`,`opacity`,`overlayClassName`,`overlayStyle`,`ref`,`rootClassName`,`rotate`,`style`,`width`,`zIndex`])),M=j(void 0),N=null,P=null,F=null,L=``,R=()=>Ne(o.get()),B=()=>(u.get()===void 0?[K,re]:u.get())?.[0]??K,V=()=>(u.get()===void 0?[K,re]:u.get())?.[1]??re,H=()=>!!f.get()||Pe(R()),te=()=>!f.get()&&!(s.get()===void 0?{}:s.get()).color&&Pe(R())&&M.value?{...s.get()===void 0?{}:s.get(),color:M.value}:s.get()===void 0?{}:s.get(),U=e=>{let t=Re({image:f.get(),lines:R(),font:e,width:D.get(),height:d.get()});return Be(pe,t)||Ve(pe,t,Fe(R(),e,D.get(),d.get(),f.get()))},W=(e,t)=>{let n=R(),r=n.length?n:[``],i=X(y.get()===void 0?ae:y.get(),0,1),a=ze({image:f.get(),lines:r,rotate:T.get()===void 0?-22:T.get(),font:e,gapX:B(),gapY:V(),dimensions:t,opacity:i});return Be(me,a)||Ve(me,a,Ue({image:f.get(),lines:r,rotate:T.get()===void 0?-22:T.get(),font:e,gapX:B(),gapY:V(),dimensions:t,opacity:i}))},G=()=>{let e=te(),t=He(B(),V(),_.get()),n=U(e);return{placement:t,pattern:H()?W(e,n):null}},q=(e,t)=>{let n={position:E.get()?.position??`relative`,overflow:E.get()?.overflow??`hidden`,isolation:E.get()?.isolation??`isolate`};return t?(n[`--rue-watermark-image`]=t.url,n[`--rue-watermark-size`]=`${t.tileWidth}px ${t.tileHeight}px`,n[`--rue-watermark-position`]=e.backgroundPosition,n[`--rue-watermark-left`]=e.left,n[`--rue-watermark-top`]=e.top,n[`--rue-watermark-width`]=e.width,n[`--rue-watermark-height`]=e.height,n[`--rue-watermark-z-index`]=String(k.get()??ie)):g.get()===void 0||g.get()||(n[`--rue-watermark-image`]=`none`,n[`--rue-watermark-size`]=`auto`,n[`--rue-watermark-position`]=`0px 0px`,n[`--rue-watermark-left`]=`0px`,n[`--rue-watermark-top`]=`0px`,n[`--rue-watermark-width`]=`100%`,n[`--rue-watermark-height`]=`100%`,n[`--rue-watermark-z-index`]=`0`),ye(n,E.get())},J=(e,t)=>ye({position:`absolute`,left:t?e.left:`var(--rue-watermark-left, 0px)`,top:t?e.top:`var(--rue-watermark-top, 0px)`,width:t?e.width:`var(--rue-watermark-width, 100%)`,height:t?e.height:`var(--rue-watermark-height, 100%)`,pointerEvents:`none`,backgroundRepeat:`repeat`,backgroundImage:t||g.get()===void 0||g.get()?`var(--rue-watermark-image, none)`:`none`,backgroundSize:t||g.get()===void 0||g.get()?`var(--rue-watermark-size, auto)`:`auto`,backgroundPosition:t||g.get()===void 0||g.get()?`var(--rue-watermark-position, 0px 0px)`:`0px 0px`,zIndex:t||g.get()===void 0||g.get()?`var(--rue-watermark-z-index, 9)`:0},x.get()),Y=()=>{let e=typeof E.get()==`string`?E.get():[E.get()?.background,E.get()?.backgroundColor,E.get()?.color,E.get()?.colorScheme,E.get()?.[`--color-base-100`],E.get()?.[`--color-base-content`]].join(`|`);return JSON.stringify([R(),i.get()??``,w.get()??``,e])},oe=c(()=>G()),se=c(()=>{let e=oe.get();return q(e.placement,e.pattern)}),ce=c(()=>{let e=oe.get();return J(e.placement,e.pattern)}),le=(e,t)=>{e&&(t?e.setAttribute(`style`,t):e.removeAttribute(`style`))},ue=()=>{let e=G();le(N,q(e.placement,e.pattern)),le(P,J(e.placement,e.pattern))},de=(e=!1)=>{if(f.get()||(s.get()===void 0?{}:s.get()).color||!Pe(R()))return;let t=Y();if(!e&&N===F&&t===L)return;if(N){let e=G();le(N,q(e.placement,e.pattern))}let n=je(N);F=N,L=t,M.value!==n&&(M.value=n,ue())},fe=e=>{N!==e&&(N=e,ge(C.get(),e),de(!0))},_e=e=>{P=e},ve=()=>{let e=()=>de(!0);if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)};return e(()=>{ue()}),h(()=>{de(!0),ve()}),O(()=>b(m(Object.assign(e=>{let t=ne().content.cloneNode(!0).firstChild,o=t,s=t.childNodes[0],c=t.childNodes[1],u=c.parentNode;l(o,()=>A.get(),[`ref`,`className`,`style`,`data-rue-watermark-root`,`data-rue-watermark-inherit`,`__rue_static_template_id__`]);let d=fe;typeof d==`function`?d(o):d&&typeof d==`object`&&`current`in d&&(d.current=o),n(()=>{typeof d==`function`?d(null):d&&typeof d==`object`&&`current`in d&&(d.current=null)});let f;I(()=>{let e=he(`rue-watermark`,i.get(),w.get()),t=e==null?``:String(e);Object.is(f,t)||(f=t,o.className=t)});let m;I(()=>{let e=se.get();Object.is(m,e)||(m=e,a(o,e))}),o.setAttribute(`data-rue-watermark-root`,`true`);let h;I(()=>{let e=g.get()===void 0||g.get()?`true`:`false`;Object.is(h,e)||(h=e,e==null||e===!1?o.removeAttribute(`data-rue-watermark-inherit`):o.setAttribute(`data-rue-watermark-inherit`,String(e)))}),s.setAttribute(`aria-hidden`,`true`);let _=_e;typeof _==`function`?_(s):_&&typeof _==`object`&&`current`in _&&(_.current=s),n(()=>{typeof _==`function`?_(null):_&&typeof _==`object`&&`current`in _&&(_.current=null)});let v;I(()=>{let e=he(`rue-watermark-overlay`,ee.get()),t=e==null?``:String(e);Object.is(v,t)||(v=t,s.className=t)});let y;return I(()=>{let e=ce.get();Object.is(y,e)||(y=e,a(s,e))}),s.setAttribute(`data-rue-watermark-overlay`,`true`),p({parent:u,before:c},()=>r.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>S(()=>{r.set(e.children),i.set(e.className),o.set(e.content),s.set(e.font),u.set(e.gap),d.set(e.height),f.set(e.image),g.set(e.inherit),_.set(e.offset),y.set(e.opacity),ee.set(e.overlayClassName),x.set(e.overlayStyle),C.set(e.ref),w.set(e.rootClassName),T.set(e.rotate),E.set(e.style),D.set(e.width),k.set(e.zIndex),A.set(z(e,[`children`,`className`,`content`,`font`,`gap`,`height`,`image`,`inherit`,`offset`,`opacity`,`overlayClassName`,`overlayStyle`,`ref`,`rootClassName`,`rotate`,`style`,`width`,`zIndex`]))}),()=>t))},We=N(`<div class="grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-8"><div class="space-y-4"><!--rue:opaque-hole:0--><h3 class="m-0 text-3xl font-black tracking-tight text-base-content md:text-4xl">协作面板正在生成新一轮可共享快照</h3><p class="m-0 max-w-2xl text-sm leading-7 text-base-content/70">水印覆盖层默认在视觉上方，但采用 pointer-events none，不会挡住卡片、按钮和其它交互控件。</p><div class="flex flex-wrap gap-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div></div><!--rue:opaque-hole:3--></div>`),Ge=N(`<div class="grid gap-4 p-5 md:grid-cols-3 md:p-6"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Ke=N(`<div class="grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_18rem] md:p-6"><!--rue:opaque-hole:0--><div class="rounded-[1.25rem] bg-gradient-to-br from-neutral to-slate-900 p-5 text-neutral-content shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-70">Delivery</div><div class="mt-4 text-3xl font-black">5 Files</div><div class="mt-2 text-sm leading-6 opacity-75">SVG / PDF / PNG / dark / light</div></div></div>`),qe=N(`<div class="grid gap-4 p-5 md:grid-cols-2 md:p-6"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Je=N(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),Ye=N(`<div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Xe=N(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Watermark 水印</h1><p class="mt-3 mb-3 text-sm">Rue 的 Watermark 不照搬其他组件库的视觉，而是把能力落成更适合当前设计站点的轻量覆盖层。 你可以直接给任意容器加文字或图片水印，同时保持按钮、卡片、统计区这些内容本身的交互。</p><h2>何时使用</h2><ul><li>需要给卡片、报表、详情页加上“内部预览”“草稿”“仅限共享”等视觉标记。</li><li>需要图片或文字水印覆盖在任意内容上，但又不希望阻断按钮、链接和表单的交互。</li><li>需要局部容器继承上层水印图案，而不是为每一块内容重复写一遍配置。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>API</h2><!--rue:opaque-hole:5--></div>`),Ze=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22196%22%20height%3D%2272%22%20viewBox%3D%220%200%20196%2072%22%3E%3Crect%20width%3D%22196%22%20height%3D%2272%22%20rx%3D%2218%22%20fill%3D%22%230f172a%22%2F%3E%3Cpath%20d%3D%22M30%2019h22c12%200%2019%206%2019%2017%200%2011-7%2017-19%2017H45v14H30V19Zm22%2022c4%200%206-2%206-5s-2-5-6-5H45v10h7Zm35-22h15l10%2031%2010-31h15l-17%2048H104L87%2019Zm60%200h18l15%2048h-15l-2.2-7.5h-13.7L147%2067h-15l15-48Zm13%2029-4-14-4%2014h8Z%22%20fill%3D%22%23f8fafc%22%2F%3E%3C%2Fsvg%3E`,Qe=[{label:`共享链接`,value:`1.8k`,detail:`过去 24 小时`},{label:`导出快照`,value:`312`,detail:`包含 38 个外部成员`},{label:`访问终端`,value:`57`,detail:`待二次确认设备 5 台`}],$e=[{prop:`content`,description:`文字水印内容，支持字符串或多行数组。`,type:`string | string[]`,defaultValue:`-`},{prop:`image`,description:`图片水印地址，适合 logo、签章、业务标记。`,type:`string`,defaultValue:`-`},{prop:`font`,description:`文字水印的颜色、字号、字重、字体和对齐方式。`,type:`{ color?: string; fontSize?: number | string; fontWeight?: number | string; fontStyle?: string; fontFamily?: string; textAlign?: string }`,defaultValue:`{ color: 自动按宿主背景明暗推导, fontSize: 16 }`},{prop:`rotate`,description:`单个水印块的旋转角度。`,type:`number`,defaultValue:`-22`},{prop:`width / height`,description:`单个水印内容块的尺寸；不传时文本会按内容估算。`,type:`number`,defaultValue:`文本自动测量 / 图片 120 x 64`},{prop:`gap`,description:`水印块之间的水平与垂直间距。`,type:`[number, number]`,defaultValue:`[100, 100]`},{prop:`offset`,description:`起始铺设偏移量，便于与卡片头部或图像对齐。`,type:`[number, number]`,defaultValue:`[gapX / 2, gapY / 2]`},{prop:`zIndex`,description:`覆盖层层级，保持视觉上方但不阻断交互。`,type:`number`,defaultValue:`9`},{prop:`inherit`,description:`是否让后代 Watermark 复用当前图案与铺设参数。`,type:`boolean`,defaultValue:`true`},{prop:`className / rootClassName`,description:`根容器类名，便于直接叠加 Rue 的布局与视觉类。`,type:`string`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`覆盖层类名和样式，适合与圆角、混合模式、局部调优配合。`,type:`string / any`,defaultValue:`-`},{prop:`style`,description:`根容器行内样式；默认会自动补 position、overflow、isolation。`,type:`any`,defaultValue:`-`}],et=e=>{let t=v(e.rows);return b(m(Object.assign(e=>{let r=Je().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=N(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return I(()=>{let e=t.get()||[];s=F(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return L(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=g(``);a.insertBefore(f,n),a.removeChild(n);let p;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}let m;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}let h=g(``);l.insertBefore(h,c),l.removeChild(c);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(h.textContent=e,_=e)}let v=g(``);d.insertBefore(v,u),d.removeChild(u);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(h.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>y(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>S(()=>{t.set(e.rows)}),()=>e)},Q={rotate:-22,gapX:120,gapY:96,offsetX:48,offsetY:48,fontSize:18,zIndex:12},tt={rotate:-8,gapX:156,gapY:124,offsetX:64,offsetY:32,fontSize:14,zIndex:10},nt=e=>typeof requestAnimationFrame==`function`?{type:`frame`,id:requestAnimationFrame(e)}:{type:`timeout`,id:setTimeout(e,0)},rt=e=>{if(e.type===`frame`){typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(e.id);return}clearTimeout(e.id)},$=e=>{let t=v(e.label),n=v(e.max),r=v(e.min),i=v(e.onValueChange),a=v(e.onValueCommit),o=v(e.value);return b(k(U,()=>({className:`range-sm`,rootClassName:`space-y-2`,valueClassName:`min-w-12 text-center tabular-nums`,label:t.get(),min:r.get(),max:n.get(),value:o.get(),showValue:{formatter:e=>String(e)},onValueChange:i.get(),onValueCommit:a.get()})),e=>S(()=>{t.set(e.label),n.set(e.max),r.set(e.min),i.set(e.onValueChange),a.set(e.onValueCommit),o.set(e.value)}),()=>e)},it=()=>{let e=j(`Rue Design`),a=j(Q.rotate),c=j(Q.gapX),l=j(Q.gapY),p=j(Q.offsetX),h=j(Q.offsetY),v=j(Q.fontSize),y=j(Q.zIndex),T=j(Q.rotate),k=j(Q.gapX),N=j(Q.gapY),F=j(Q.offsetX),L=j(Q.offsetY),z=j(Q.fontSize),U=j(Q.zIndex),W=j(``),G={rotate:T,gapX:k,gapY:N,offsetX:F,offsetY:L,fontSize:z,zIndex:U},ne={...Q},K=null,re=e=>{a.value=e.rotate,c.value=e.gapX,l.value=e.gapY,p.value=e.offsetX,h.value=e.offsetY,v.value=e.fontSize,y.value=e.zIndex},ie=e=>{T.value=e.rotate,k.value=e.gapX,N.value=e.gapY,F.value=e.offsetX,L.value=e.offsetY,z.value=e.fontSize,U.value=e.zIndex},ae=()=>{K&&=(rt(K),null)},q=()=>{K=null,f(()=>{re(ne)})},J=(e,t)=>{ne[e]=t,!K&&(K=nt(q))},Y=(e,t)=>{ne[e]=t,ae(),f(()=>{re(ne),G[e].value=t})},oe=({nextContent:t,nextColor:n,nextControls:r})=>{ae(),ne={...r},f(()=>{e.value=t,W.value=n,re(r),ie(r)})},se=()=>oe({nextContent:`Rue Design`,nextColor:``,nextControls:Q}),ce=()=>oe({nextContent:`Shared with Partner`,nextColor:`rgba(34, 197, 94, 0.22)`,nextControls:tt});return d(ae),O(()=>b(t(()=>{let d=_(),f=Ye().content.cloneNode(!0),b=f.firstChild,S=b.childNodes[0],O=S.parentNode,j=b.childNodes[1],G=j.parentNode;return d.appendChild(f),I(()=>{let n=t(()=>{let t=_(),n=P(`div`,t);x(t,n),u(n,`space-y-4 p-5 md:p-6`);let r=P(`div`,n);x(n,r),u(r,`flex flex-wrap items-center justify-between gap-3`);let a=P(`div`,r);x(r,a);let c=P(`div`,a);x(a,c),u(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`),x(c,B(`Scenario Sandbox`));let l=P(`div`,a);x(a,l),u(l,`mt-2 text-2xl font-semibold text-base-content`),x(l,B(`参数调整后的实时预览`)),A(r,te,()=>({outline:!0,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_(),n=g(``);return D(t,n),R(n,()=>`z-index ${y.value}`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}));let d=P(`p`,n);x(n,d),u(d,`m-0 max-w-2xl text-sm leading-7 text-base-content/65`),x(d,B(`这里故意放了文字、徽标和按钮，方便观察水印对不同内容密度与层次关系的影响。`));let f=P(`div`,n);x(n,f),u(f,`grid gap-4 md:grid-cols-3`);let p=w(`rue:component:anchor`);x(f,p),I(()=>{let e=o(H.Body,()=>({children:[m(Object.assign(e=>{let t=C(`div`,e);return t.className=`text-sm font-semibold text-base-content`,D(t,g(`内容流`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),m(Object.assign(e=>{let t=C(`p`,e);return t.className=`m-0 text-sm leading-7 text-base-content/65`,D(t,g(`Rue Watermark 会把铺设逻辑限制在当前容器内部，圆角、阴影和内容布局都可以继续由宿主容器控制。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),t=o(H,()=>({className:`bg-base-100/90 shadow-sm md:col-span-2`,children:e}));E(()=>M(t,f,p))});let h=P(`div`,f);x(f,h),u(h,`rounded-[1.25rem] bg-accent px-4 py-5 text-accent-content shadow-sm`);let v=P(`div`,h);x(h,v),u(v,`text-xs uppercase tracking-[0.2em] opacity-70`),x(v,B(`Preset`));let b=P(`div`,h);x(h,b),u(b,`mt-2 text-2xl font-black`);let S=ee(b);x(b,S),I(()=>{s(S,e.value)});let T=P(`div`,n);return x(n,T),u(T,`flex flex-wrap gap-3`),A(T,V,()=>({size:`sm`,color:`primary`,onClick:se,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_();return D(t,g(`重置参数`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),A(T,V,()=>({size:`sm`,type:`outlined`,onClick:ce,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_();return D(t,g(`切换到稀疏模式`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),t}),r=o(Z,()=>({content:[e.value,`Scenario Sandbox`],rotate:a.value,gap:[c.value,l.value],offset:[p.value,h.value],zIndex:y.value,width:180,height:72,font:{color:W.value||void 0,fontSize:v.value,fontWeight:700,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:n}));E(()=>M(r,O,S))}),I(()=>{let t=o($,()=>({label:`Rotate`,min:-90,max:90,value:T,onValueChange:e=>J(`rotate`,e),onValueCommit:e=>Y(`rotate`,e)})),i=o($,()=>({label:`Font size`,min:12,max:28,value:z,onValueChange:e=>J(`fontSize`,e),onValueCommit:e=>Y(`fontSize`,e)})),a=o($,()=>({label:`Gap X`,min:72,max:180,value:k,onValueChange:e=>J(`gapX`,e),onValueCommit:e=>Y(`gapX`,e)})),s=o($,()=>({label:`Gap Y`,min:72,max:180,value:N,onValueChange:e=>J(`gapY`,e),onValueCommit:e=>Y(`gapY`,e)})),c=o($,()=>({label:`Offset X`,min:0,max:120,value:F,onValueChange:e=>J(`offsetX`,e),onValueCommit:e=>Y(`offsetX`,e)})),l=o($,()=>({label:`Offset Y`,min:0,max:120,value:L,onValueChange:e=>J(`offsetY`,e),onValueCommit:e=>Y(`offsetY`,e)})),u=o($,()=>({label:`z-index`,min:1,max:24,value:U,onValueChange:e=>J(`zIndex`,e),onValueCommit:e=>Y(`zIndex`,e)})),d=o(H.Body,()=>({className:`gap-4`,children:[m(Object.assign(t=>{let i=C(`div`,t),a=C(`div`,i);D(i,a),a.className=`text-sm font-semibold text-base-content`,D(a,g(`文本`));let o=C(`input`,i);D(i,o),o.className=`input input-bordered mt-2 w-full`;let s;I(()=>{let t=e.value,n=t==null?``:String(t);Object.is(s,n)||(s=n,r(o,n))});let c=t=>{let n=t=>{e.value=t.currentTarget.value};typeof n==`function`&&n(t)};return o.addEventListener(`input`,c),n(()=>o.removeEventListener(`input`,c)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),t,i,a,s,c,l,u,m(Object.assign(e=>{let t=C(`div`,e),i=C(`div`,t);D(t,i),i.className=`text-sm font-medium text-base-content`,D(i,g(`Color override`));let a=C(`input`,t);D(t,a),a.className=`input input-bordered mt-2 w-full`,a.setAttribute(`placeholder`,`auto`);let o;I(()=>{let e=W.value,t=e==null?``:String(e);Object.is(o,t)||(o=t,r(a,t))});let s=e=>{let t=e=>{W.value=e.currentTarget.value};typeof t==`function`&&t(e)};return a.addEventListener(`input`,s),n(()=>a.removeEventListener(`input`,s)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),f=o(H,()=>({className:`bg-base-100 shadow-sm`,children:d}));E(()=>M(f,G,j))}),d},!0),e=>S(()=>{})))},at=`const WatermarkCustomControlsDemo = () => {
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
}`,ot=()=>{let e={basic:j(`preview`),multiline:j(`preview`),image:j(`preview`),inherit:j(`preview`),custom:j(`preview`)};return O(()=>b(k(W,()=>({children:(n,r,a)=>i(n,a,()=>m(Object.assign(n=>{let r=_(),a=Xe().content.cloneNode(!0),c=a.firstChild,l=c.childNodes[4],d=l.parentNode,f=c.childNodes[5],p=f.parentNode,h=c.childNodes[6],v=h.parentNode,y=c.childNodes[7],b=y.parentNode,S=c.childNodes[8],O=S.parentNode,j=c.childNodes[10],N=j.parentNode;r.appendChild(a);let F=T(d);A(F,G,()=>({title:`Basic text watermark`,summary:`最直接的用法：给一个内容容器加上文本水印，按钮仍然可以正常点击。`,tab:e.basic,preview:(()=>{let e=t(()=>{let e=_(),n=We().content.cloneNode(!0),r=n.firstChild,a=r.childNodes[0].childNodes[0],c=a.parentNode,l=r.childNodes[0].childNodes[3].childNodes[0],d=l.parentNode,f=r.childNodes[0].childNodes[3].childNodes[1],p=f.parentNode,h=r.childNodes[1],v=h.parentNode;e.appendChild(n);let y=T(c);A(y,te,()=>({variant:`secondary`,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_();return D(t,g(`Internal Preview`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(y,a);let b=T(d);A(b,V,()=>({color:`primary`,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_();return D(t,g(`导出摘要`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(b,l);let S=T(p);return A(S,V,()=>({type:`outlined`,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_();return D(t,g(`查看访问日志`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(S,f),I(()=>{let e=o(H.Body,()=>({className:`gap-4`,children:Qe.map(e=>t(()=>{let t=_(),n=P(`div`,t);x(t,n),u(n,`rounded-box border border-base-300/70 bg-base-100/70 px-4 py-3`);let r=P(`div`,n);x(n,r),u(r,`text-xs uppercase tracking-[0.2em] text-base-content/50`);let i=w(`rue:slot:anchor`);x(r,i),I(()=>{let t=e.label;E(()=>M(t,r,i))});let a=P(`div`,n);x(n,a),u(a,`mt-2 text-2xl font-bold text-base-content`);let o=ee(a);x(a,o),I(()=>{s(o,e.value)});let c=P(`div`,n);x(n,c),u(c,`mt-1 text-sm text-base-content/60`);let l=w(`rue:slot:anchor`);return x(c,l),I(()=>{let t=e.detail;E(()=>M(t,c,l))}),t},!0))})),n=o(H,()=>({className:`bg-base-100/85 shadow-sm backdrop-blur-sm`,children:e}));E(()=>M(n,v,h))}),e});return o(Z,()=>({content:`Rue Design`,className:`rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:e}))})(),code:`const stats = [
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
</Watermark>`})),d.insertBefore(F,l);let L=T(p);A(L,G,()=>({title:`Multiline typography and tuned spacing`,summary:`支持多行内容、字族和铺设参数调优，更适合仪表盘、稿件和审批流页面。`,tab:e.multiline,preview:(()=>{let e=t(()=>{let e=_(),t=Ge().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],a=r.parentNode,s=n.childNodes[1],c=s.parentNode;return e.appendChild(t),I(()=>{let e=o(H.Body,()=>({children:[m(Object.assign(e=>{let t=C(`div`,e);return t.className=`text-xs uppercase tracking-[0.18em] text-base-content/45`,D(t,g(`Draft`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),m(Object.assign(e=>{let t=C(`div`,e);return t.className=`text-lg font-semibold text-base-content`,D(t,g(`产品评审结论`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),m(Object.assign(e=>{let t=C(`p`,e);return t.className=`m-0 text-sm leading-6 text-base-content/65`,D(t,g(`用多行水印把容器语义说清楚，而不是只放一个模糊 logo。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),t=o(H,()=>({className:`bg-base-100/90 shadow-sm`,children:e}));E(()=>M(t,a,r))}),I(()=>{let e=o(H.Body,()=>({className:`gap-4`,children:[m(Object.assign(e=>{let t=C(`div`,e);t.className=`flex flex-wrap items-center justify-between gap-3`;let n=C(`div`,t);D(t,n);let r=C(`div`,n);D(n,r),r.className=`text-xs uppercase tracking-[0.16em] text-base-content/45`,D(r,g(`Access Scope`));let a=C(`div`,n);return D(n,a),a.className=`text-xl font-semibold text-base-content`,D(a,g(`仅限设计与法务同步窗口`)),A(t,te,()=>({outline:!0,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_();return D(t,g(`Version 15`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),m(Object.assign(e=>{let t=C(`p`,e);return t.className=`m-0 text-sm leading-7 text-base-content/65`,D(t,g(`通过 width、height、gap 和 font 组合，可以让文字块更像“签章”而不是背景噪音。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),t=o(H,()=>({className:`bg-base-100/90 shadow-sm md:col-span-2`,children:e}));E(()=>M(t,c,s))}),e});return o(Z,()=>({content:[`Confidential Build`,`Rue Design System`],rotate:-16,gap:[132,116],width:168,height:72,font:{color:`rgba(13, 22, 39, 0.15)`,fontSize:15,fontWeight:700,fontFamily:`Georgia, Times New Roman, serif`,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.88))] shadow-sm`,children:e}))})(),code:`<Watermark
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
</Watermark>`})),p.insertBefore(L,f);let R=T(v);A(R,G,()=>({title:`Image watermark`,summary:`图片模式适合品牌 logo、部门印记或业务章；Rue 这边建议把它用在局部容器，而不是整页满屏。`,tab:e.image,preview:(()=>{let e=t(()=>{let e=_(),t=Ke().content.cloneNode(!0),n=t.firstChild.childNodes[0],r=n.parentNode;return e.appendChild(t),I(()=>{let e=o(H.Body,()=>({className:`gap-4`,children:[m(Object.assign(e=>{let t=C(`div`,e);return t.className=`text-xs uppercase tracking-[0.18em] text-base-content/45`,D(t,g(`Media Kit`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),m(Object.assign(e=>{let t=C(`div`,e);return t.className=`text-2xl font-semibold text-base-content`,D(t,g(`品牌资产导出包`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),m(Object.assign(e=>{let t=C(`p`,e);return t.className=`m-0 text-sm leading-7 text-base-content/65`,D(t,g(`图片水印不会吞掉原内容的层级信息，更适合 logo、组织印章和明确的来源标识。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),t=o(H,()=>({className:`overflow-hidden bg-base-200/70 shadow-none`,children:e}));E(()=>M(t,r,n))}),e});return o(Z,()=>({image:Ze,width:156,height:58,rotate:-18,gap:[140,112],className:`rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`,children:e}))})(),code:`const logo = 'https://dummyimage.com/312x116/0f172a/f8fafc.png&text=RUE'

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
</Watermark>`})),v.insertBefore(R,h);let z=T(b);A(z,G,()=>({title:`Inherited local scope`,summary:`父级配置一次，子级局部容器可以继续复用；不想继承时再显式关掉。`,tab:e.inherit,preview:k(Z,()=>({content:[`Team Only`,`Rue Preview`],rotate:-14,width:148,height:64,gap:[128,108],className:`rounded-[1.75rem] border border-base-300 bg-base-100 shadow-sm`,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_(),n=qe().content.cloneNode(!0),r=n.firstChild,a=r.childNodes[0],o=a.parentNode,s=r.childNodes[1],c=s.parentNode;t.appendChild(n);let l=T(o);A(l,Z,()=>({className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-100/80`,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_(),n=C(`div`,t);D(t,n),n.className=`space-y-3 p-4`;let r=C(`div`,n);D(n,r),r.className=`text-sm font-semibold text-base-content`,D(r,g(`继承父级水印`));let i=C(`p`,n);return D(n,i),i.className=`m-0 text-sm leading-6 text-base-content/65`,D(i,g(`这个局部容器没有重新写 content 和 image，会直接复用外层图案与铺设参数。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(l,a);let u=T(c);return A(u,Z,()=>({inherit:!1,className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/60`,children:(e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=_(),n=C(`div`,t);D(t,n),n.className=`space-y-3 p-4`;let r=C(`div`,n);D(n,r),r.className=`text-sm font-semibold text-base-content`,D(r,g(`关闭继承`));let i=C(`p`,n);return D(n,i),i.className=`m-0 text-sm leading-6 text-base-content/65`,D(i,g(`当局部容器不需要上层水印时，直接把 inherit 设为 false 即可回到纯净内容区。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(u,s),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),code:`<Watermark
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
</Watermark>`})),b.insertBefore(z,y);let B=T(O);A(B,G,()=>({title:`Custom controls`,summary:`把可调示例 落到 Rue 风格里，用 Range 的按帧更新快速调整排版参数。`,tab:e.custom,preview:k(it,()=>({})),code:at})),O.insertBefore(B,S);let U=T(N);return A(U,et,()=>({rows:$e})),N.insertBefore(U,j),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),e=>S(()=>{})))};export{ot as default};