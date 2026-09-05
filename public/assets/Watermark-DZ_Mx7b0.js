import{An as e,Bt as t,C as n,Dn as r,Et as i,H as a,It as o,K as s,L as c,Lt as l,Mt as u,S as d,Sn as f,W as p,X as m,Y as h,_n as g,_t as _,at as ee,b as v,bn as y,dt as b,fn as x,ft as S,gn as C,hn as w,ht as T,it as E,kn as D,mn as O,nt as k,pt as A,q as j,rt as M,tt as te,vn as N,wn as P,x as F,xn as I,yt as ne,z as L}from"./rue-runtime-CwEGJ854.js";import{t as R}from"./button-BlvcsWE0.js";import{t as z}from"./card-2x-5WZNc.js";import{t as re}from"./badge-Lxy6ry0O.js";import{t as B}from"./range-BHS4v53x.js";import{r as V}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as H}from"./PreviewBlock-Daz-jANt.js";var ie=g(`<div data-rue-watermark-root="true"><div aria-hidden="true" data-rue-watermark-overlay="true"></div><!--rue:text-hole:0--></div>`),U=100,W=100,ae=9,oe=1,G=.2,K=.28,q=`rgba(15, 23, 42, ${G})`,J=`rgba(248, 250, 252, ${K})`,se=`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,ce=120,le=64,ue=32,de=24,fe=80,pe=new Map,me=new Map,he=(...e)=>e.filter(Boolean).join(` `),ge=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},_e=e=>e.startsWith(`--`)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),ve=e=>Object.entries(e).filter(([,e])=>e!==void 0).map(([e,t])=>`${_e(e)}: ${String(t)}`).join(`; `),ye=(e,t)=>{let n=ve(e);if(!t)return n;if(typeof t==`string`)return n?`${n}; ${t}`:t;let r=ve(t);return n?r?`${n}; ${r}`:n:r},Y=(e,t,n)=>Math.min(n,Math.max(t,e)),X=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),be=e=>{if(!e)return 1;let t=e.trim();if(!t||t===`none`)return 1;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?Y(n/100,0,1):Y(n,0,1):1},xe=e=>{let t=e.trim();if(t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?Y(Math.round(n/100*255),0,255):Y(Math.round(n),0,255):0},Se=(e,t=1)=>{let n=e.trim();if(n===`none`)return 0;let r=Number.parseFloat(n);return Number.isFinite(r)?n.endsWith(`%`)?r/100*t:r:0},Ce=e=>{if(!e)return 0;let t=e.trim();if(!t||t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`rad`)?n*180/Math.PI:t.endsWith(`grad`)?n*.9:t.endsWith(`turn`)?n*360:n:0},we=(e,t,n,r)=>{let i=n*Math.PI/180,a=t*Math.cos(i),o=t*Math.sin(i),s=e+.3963377774*a+.2158037573*o,c=e-.1055613458*a-.0638541728*o,l=e-.0894841775*a-1.291485548*o,u=s**3,d=c**3,f=l**3,p=e=>{let t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return Y(Math.round(t*255),0,255)};return{r:p(4.0767416621*u-3.3077115913*d+.2309699292*f),g:p(-1.2684380046*u+2.6097574011*d-.3413193965*f),b:p(-.0041960863*u-.7034186147*d+1.707614701*f),a:r}},Te=e=>{if(!e)return null;let t=e.trim().toLowerCase();if(!t||t===`transparent`)return null;let n=t.match(/^rgba?\((.+)\)$/);if(n){let[e,t]=n[1].split(/\s*\/\s*/),r=e.includes(`,`),i=r?e.split(`,`).map(e=>e.trim()):e.trim().split(/\s+/),a=t??(r?i[3]:void 0);if(i.length>=3)return{r:xe(i[0]),g:xe(i[1]),b:xe(i[2]),a:be(a)}}let r=t.match(/^oklch\((.+)\)$/);if(r){let[e,t]=r[1].split(/\s*\/\s*/),n=e.trim().split(/\s+/);if(n.length>=3)return we(Y(Se(n[0]),0,1),Math.max(Se(n[1],.4),0),Ce(n[2]),be(t))}let i=t.match(/^#([0-9a-f]{3,8})$/);if(!i)return null;let a=i[1];return a.length===3||a.length===4?{r:Number.parseInt(a[0]+a[0],16),g:Number.parseInt(a[1]+a[1],16),b:Number.parseInt(a[2]+a[2],16),a:a.length===4?Number.parseInt(a[3]+a[3],16)/255:1}:a.length===6||a.length===8?{r:Number.parseInt(a.slice(0,2),16),g:Number.parseInt(a.slice(2,4),16),b:Number.parseInt(a.slice(4,6),16),a:a.length===8?Number.parseInt(a.slice(6,8),16)/255:1}:null},Ee=({r:e,g:t,b:n})=>{let r=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4},i=r(e),a=r(t),o=r(n);return i*.2126+a*.7152+o*.0722},De=(e,t)=>`rgba(${e.r}, ${e.g}, ${e.b}, ${t})`,Oe=(e,t)=>{let n=e.getAttribute(`data-rue-appearance`)??e.getAttribute(`data-theme`);return n===`dark`||n===`night`||n===`coffee`||t.colorScheme.split(/\s+/).includes(`dark`)},ke=(e,t)=>{let n=Ee(e)<.35;return t?De(t,n?K:G):n?J:q},Ae=e=>{if(!e||typeof window>`u`||!(e instanceof window.Element))return q;let t=!1,n=null,r=e;for(;r;){let e=window.getComputedStyle(r),i=Te(e.getPropertyValue(`--color-base-content`));i&&i.a>.01&&(n=i);let a=Te(e.backgroundColor);if(a&&a.a>.01)return ke(a,n);let o=Te(e.getPropertyValue(`--color-base-100`));if(o&&o.a>.01)return ke(o,n);Oe(r,e)&&(t=!0),r=r.parentElement}let i=Te(window.getComputedStyle(e).color);return i?Ee(i)>.6?De(i,K):De(i,G):t?n?De(n,K):J:q},je=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=Number.parseFloat(e);if(Number.isFinite(t))return e.endsWith(`rem`)?t*16:t}return 16},Me=e=>e==null?[]:(Array.isArray(e)?e:[e]).flatMap(e=>String(e).split(/\r?\n/)),Ne=e=>e.some(e=>e.trim().length>0),Pe=(e,t,n,r,i)=>{let a=je(t.fontSize),o=Math.max(Math.round(a*1.45),a+6);if(i)return{markWidth:Math.max(n??ce,ue),markHeight:Math.max(r??le,de),lineHeight:o,fontSizePx:a};if(n!=null&&r!=null)return{markWidth:Math.max(n,ue),markHeight:Math.max(r,de),lineHeight:o,fontSizePx:a};let s=t.fontFamily??se,c=t.fontWeight??`normal`,l=t.fontStyle&&t.fontStyle!==`none`?t.fontStyle:`normal`,u=0;if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);t&&(t.font=`${l} ${c} ${a}px ${s}`,u=Math.ceil(e.reduce((e,n)=>Math.max(e,t.measureText(n).width),0)))}u||=Math.ceil(e.reduce((e,t)=>Math.max(e,t.length*a*.62),0));let d=Math.max(e.length,1),f=Math.ceil(a+(d-1)*o);return{markWidth:Math.max(n??u,ue),markHeight:Math.max(r??f,de),lineHeight:o,fontSizePx:a}},Fe=e=>{switch(e){case`left`:case`start`:return{anchor:`start`,xRatio:0};case`right`:case`end`:return{anchor:`end`,xRatio:1};default:return{anchor:`middle`,xRatio:.5}}},Ie=e=>[e.color??``,e.fontSize??``,e.fontWeight??``,e.fontStyle??``,e.fontFamily??``,e.textAlign??``],Le=({image:e,lines:t,font:n,width:r,height:i})=>JSON.stringify([e??``,t,Ie(n),r??``,i??``]),Re=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>JSON.stringify([e??``,t,n,Ie(r),i,a,o.markWidth,o.markHeight,o.lineHeight,o.fontSizePx,s]),ze=(e,t)=>{let n=e.get(t);return n!==void 0&&(e.delete(t),e.set(t,n)),n},Be=(e,t,n)=>{for(e.delete(t),e.set(t,n);e.size>fe;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}return n},Ve=(e,t,n)=>{let r=e/2,i=t/2,a=n?.[0]??r,o=n?.[1]??i,s=a-r,c=o-i,l=`0px`,u=`0px`,d=`100%`,f=`100%`;return s>0&&(l=`${s}px`,d=`calc(100% - ${s}px)`,s=0),c>0&&(u=`${c}px`,f=`calc(100% - ${c}px)`,c=0),{left:l,top:u,width:d,height:f,backgroundPosition:`${s}px ${c}px`}},He=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>{let{markWidth:c,markHeight:l,lineHeight:u,fontSizePx:d}=o,f=c+i,p=l+a,m=i/2,h=a/2,g=m+c/2,_=h+l/2,ee=r.color??q,v=r.fontWeight??`normal`,y=r.fontStyle&&r.fontStyle!==`none`?r.fontStyle:`normal`,b=r.fontFamily??se,{anchor:x,xRatio:S}=Fe(r.textAlign),C=``;if(e)C=`<image href="${X(e)}" x="${m}" y="${h}" width="${c}" height="${l}" preserveAspectRatio="xMidYMid meet" />`;else{let e=d+(Math.max(t.length,1)-1)*u,n=h+Math.max((l-e)/2,0),r=m+c*S;C=t.map((e,t)=>{let i=n+t*u;return`<text x="${r}" y="${i}" fill="${X(ee)}" font-size="${d}" font-weight="${X(String(v))}" font-style="${X(y)}" font-family="${X(b)}" text-anchor="${x}" dominant-baseline="hanging">${X(e)}</text>`}).join(``)}let w=`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${p}" viewBox="0 0 ${f} ${p}"><g opacity="${s}" transform="rotate(${n} ${g} ${_})">${C}</g></svg>`;return{url:`url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(w)}")`,tileWidth:f,tileHeight:p}},Z=n=>{let a=p(n.children),s=p(n.className),c=p(n.content),l=p(n.font),d=p(n.gap),m=p(n.height),h=p(n.image),g=p(n.inherit),_=p(n.offset),ee=p(n.opacity),y=p(n.overlayClassName),x=p(n.overlayStyle),S=p(n.ref),C=p(n.rootClassName),w=p(n.rotate),T=p(n.style),E=p(n.width),D=p(n.zIndex),O=p(N(n,[`children`,`className`,`content`,`font`,`gap`,`height`,`image`,`inherit`,`offset`,`opacity`,`overlayClassName`,`overlayStyle`,`ref`,`rootClassName`,`rotate`,`style`,`width`,`zIndex`])),k=t(void 0),A=null,M=null,te=null,F=``,I=()=>Me(c.get()),R=()=>(d.get()===void 0?[U,W]:d.get())?.[0]??U,z=()=>(d.get()===void 0?[U,W]:d.get())?.[1]??W,re=()=>!!h.get()||Ne(I()),B=()=>!h.get()&&!(l.get()===void 0?{}:l.get()).color&&Ne(I())&&k.value?{...l.get()===void 0?{}:l.get(),color:k.value}:l.get()===void 0?{}:l.get(),V=e=>{let t=Le({image:h.get(),lines:I(),font:e,width:E.get(),height:m.get()});return ze(pe,t)||Be(pe,t,Pe(I(),e,E.get(),m.get(),h.get()))},H=(e,t)=>{let n=I(),r=n.length?n:[``],i=Y(ee.get()===void 0?oe:ee.get(),0,1),a=Re({image:h.get(),lines:r,rotate:w.get()===void 0?-22:w.get(),font:e,gapX:R(),gapY:z(),dimensions:t,opacity:i});return ze(me,a)||Be(me,a,He({image:h.get(),lines:r,rotate:w.get()===void 0?-22:w.get(),font:e,gapX:R(),gapY:z(),dimensions:t,opacity:i}))},G=()=>{let e=B(),t=Ve(R(),z(),_.get()),n=V(e);return{placement:t,pattern:re()?H(e,n):null}},K=(e,t)=>{let n={position:T.get()?.position??`relative`,overflow:T.get()?.overflow??`hidden`,isolation:T.get()?.isolation??`isolate`};return t?(n[`--rue-watermark-image`]=t.url,n[`--rue-watermark-size`]=`${t.tileWidth}px ${t.tileHeight}px`,n[`--rue-watermark-position`]=e.backgroundPosition,n[`--rue-watermark-left`]=e.left,n[`--rue-watermark-top`]=e.top,n[`--rue-watermark-width`]=e.width,n[`--rue-watermark-height`]=e.height,n[`--rue-watermark-z-index`]=String(D.get()??ae)):g.get()===void 0||g.get()||(n[`--rue-watermark-image`]=`none`,n[`--rue-watermark-size`]=`auto`,n[`--rue-watermark-position`]=`0px 0px`,n[`--rue-watermark-left`]=`0px`,n[`--rue-watermark-top`]=`0px`,n[`--rue-watermark-width`]=`100%`,n[`--rue-watermark-height`]=`100%`,n[`--rue-watermark-z-index`]=`0`),ye(n,T.get())},q=(e,t)=>ye({position:`absolute`,left:t?e.left:`var(--rue-watermark-left, 0px)`,top:t?e.top:`var(--rue-watermark-top, 0px)`,width:t?e.width:`var(--rue-watermark-width, 100%)`,height:t?e.height:`var(--rue-watermark-height, 100%)`,pointerEvents:`none`,backgroundRepeat:`repeat`,backgroundImage:t||g.get()===void 0||g.get()?`var(--rue-watermark-image, none)`:`none`,backgroundSize:t||g.get()===void 0||g.get()?`var(--rue-watermark-size, auto)`:`auto`,backgroundPosition:t||g.get()===void 0||g.get()?`var(--rue-watermark-position, 0px 0px)`:`0px 0px`,zIndex:t||g.get()===void 0||g.get()?`var(--rue-watermark-z-index, 9)`:0},x.get()),J=()=>{let e=typeof T.get()==`string`?T.get():[T.get()?.background,T.get()?.backgroundColor,T.get()?.color,T.get()?.colorScheme,T.get()?.[`--color-base-100`],T.get()?.[`--color-base-content`]].join(`|`);return JSON.stringify([I(),s.get()??``,C.get()??``,e])},se=f(()=>G()),ce=f(()=>{let e=se.get();return K(e.placement,e.pattern)}),le=f(()=>{let e=se.get();return q(e.placement,e.pattern)}),ue=(e,t)=>{e&&(t?e.setAttribute(`style`,t):e.removeAttribute(`style`))},de=()=>{let e=G();ue(A,K(e.placement,e.pattern)),ue(M,q(e.placement,e.pattern))},fe=(e=!1)=>{if(h.get()||(l.get()===void 0?{}:l.get()).color||!Ne(I()))return;let t=J();if(!e&&A===te&&t===F)return;if(A){let e=G();ue(A,K(e.placement,e.pattern))}let n=Ae(A);te=A,F=t,k.value!==n&&(k.value=n,de())},_e=e=>{A!==e&&(A=e,ge(S.get(),e),fe(!0))},ve=e=>{M=e},X=()=>{let e=()=>fe(!0);if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)};return e(()=>{de()}),o(()=>{fe(!0),X()}),u(()=>j(i(Object.assign(e=>{let t=ie().content.cloneNode(!0).firstChild,n=t,i=t.childNodes[0],o=t.childNodes[1],c=o.parentNode;ne(n,()=>O.get(),[`ref`,`className`,`style`,`data-rue-watermark-root`,`data-rue-watermark-inherit`,`__rue_static_template_id__`]);let l=_e;typeof l==`function`?l(n):l&&typeof l==`object`&&`current`in l&&(l.current=n),r(()=>{typeof l==`function`?l(null):l&&typeof l==`object`&&`current`in l&&(l.current=null)});let u;P(()=>{let e=he(`rue-watermark`,s.get(),C.get()),t=e==null?``:String(e);Object.is(u,t)||(u=t,n.className=t)});let d;P(()=>{let e=ce.get();Object.is(d,e)||(d=e,b(n,e))}),n.setAttribute(`data-rue-watermark-root`,`true`);let f;P(()=>{let e=g.get()===void 0||g.get()?`true`:`false`;Object.is(f,e)||(f=e,e==null||e===!1?n.removeAttribute(`data-rue-watermark-inherit`):n.setAttribute(`data-rue-watermark-inherit`,String(e)))}),i.setAttribute(`aria-hidden`,`true`);let p=ve;typeof p==`function`?p(i):p&&typeof p==`object`&&`current`in p&&(p.current=i),r(()=>{typeof p==`function`?p(null):p&&typeof p==`object`&&`current`in p&&(p.current=null)});let m;P(()=>{let e=he(`rue-watermark-overlay`,y.get()),t=e==null?``:String(e);Object.is(m,t)||(m=t,i.className=t)});let h;return P(()=>{let e=le.get();Object.is(h,e)||(h=e,b(i,e))}),i.setAttribute(`data-rue-watermark-overlay`,`true`),v({parent:c,before:o},()=>a.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>L(()=>{a.set(e.children),s.set(e.className),c.set(e.content),l.set(e.font),d.set(e.gap),m.set(e.height),h.set(e.image),g.set(e.inherit),_.set(e.offset),ee.set(e.opacity),y.set(e.overlayClassName),x.set(e.overlayStyle),S.set(e.ref),C.set(e.rootClassName),w.set(e.rotate),T.set(e.style),E.set(e.width),D.set(e.zIndex),O.set(N(e,[`children`,`className`,`content`,`font`,`gap`,`height`,`image`,`inherit`,`offset`,`opacity`,`overlayClassName`,`overlayStyle`,`ref`,`rootClassName`,`rotate`,`style`,`width`,`zIndex`]))}),()=>n))},Ue=g(`<div class="grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-8"><div class="space-y-4"><!--rue:opaque-hole:0--><h3 class="m-0 text-3xl font-black tracking-tight text-base-content md:text-4xl">协作面板正在生成新一轮可共享快照</h3><p class="m-0 max-w-2xl text-sm leading-7 text-base-content/70">水印覆盖层默认在视觉上方，但采用 pointer-events none，不会挡住卡片、按钮和其它交互控件。</p><div class="flex flex-wrap gap-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div></div><!--rue:opaque-hole:3--></div>`),We=g(`<div class="grid gap-4 p-5 md:grid-cols-3 md:p-6"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Ge=g(`<div class="grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_18rem] md:p-6"><!--rue:opaque-hole:0--><div class="rounded-[1.25rem] bg-gradient-to-br from-neutral to-slate-900 p-5 text-neutral-content shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-70">Delivery</div><div class="mt-4 text-3xl font-black">5 Files</div><div class="mt-2 text-sm leading-6 opacity-75">SVG / PDF / PNG / dark / light</div></div></div>`),Ke=g(`<div class="grid gap-4 p-5 md:grid-cols-2 md:p-6"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),qe=g(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),Je=g(`<div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Ye=g(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Watermark 水印</h1><p class="mt-3 mb-3 text-sm">Rue 的 Watermark 不照搬其他组件库的视觉，而是把能力落成更适合当前设计站点的轻量覆盖层。 你可以直接给任意容器加文字或图片水印，同时保持按钮、卡片、统计区这些内容本身的交互。</p><h2>何时使用</h2><ul><li>需要给卡片、报表、详情页加上“内部预览”“草稿”“仅限共享”等视觉标记。</li><li>需要图片或文字水印覆盖在任意内容上，但又不希望阻断按钮、链接和表单的交互。</li><li>需要局部容器继承上层水印图案，而不是为每一块内容重复写一遍配置。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>API</h2><!--rue:opaque-hole:5--></div>`),Xe=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22196%22%20height%3D%2272%22%20viewBox%3D%220%200%20196%2072%22%3E%3Crect%20width%3D%22196%22%20height%3D%2272%22%20rx%3D%2218%22%20fill%3D%22%230f172a%22%2F%3E%3Cpath%20d%3D%22M30%2019h22c12%200%2019%206%2019%2017%200%2011-7%2017-19%2017H45v14H30V19Zm22%2022c4%200%206-2%206-5s-2-5-6-5H45v10h7Zm35-22h15l10%2031%2010-31h15l-17%2048H104L87%2019Zm60%200h18l15%2048h-15l-2.2-7.5h-13.7L147%2067h-15l15-48Zm13%2029-4-14-4%2014h8Z%22%20fill%3D%22%23f8fafc%22%2F%3E%3C%2Fsvg%3E`,Ze=[{label:`共享链接`,value:`1.8k`,detail:`过去 24 小时`},{label:`导出快照`,value:`312`,detail:`包含 38 个外部成员`},{label:`访问终端`,value:`57`,detail:`待二次确认设备 5 台`}],Qe=[{prop:`content`,description:`文字水印内容，支持字符串或多行数组。`,type:`string | string[]`,defaultValue:`-`},{prop:`image`,description:`图片水印地址，适合 logo、签章、业务标记。`,type:`string`,defaultValue:`-`},{prop:`font`,description:`文字水印的颜色、字号、字重、字体和对齐方式。`,type:`{ color?: string; fontSize?: number | string; fontWeight?: number | string; fontStyle?: string; fontFamily?: string; textAlign?: string }`,defaultValue:`{ color: 自动按宿主背景明暗推导, fontSize: 16 }`},{prop:`rotate`,description:`单个水印块的旋转角度。`,type:`number`,defaultValue:`-22`},{prop:`width / height`,description:`单个水印内容块的尺寸；不传时文本会按内容估算。`,type:`number`,defaultValue:`文本自动测量 / 图片 120 x 64`},{prop:`gap`,description:`水印块之间的水平与垂直间距。`,type:`[number, number]`,defaultValue:`[100, 100]`},{prop:`offset`,description:`起始铺设偏移量，便于与卡片头部或图像对齐。`,type:`[number, number]`,defaultValue:`[gapX / 2, gapY / 2]`},{prop:`zIndex`,description:`覆盖层层级，保持视觉上方但不阻断交互。`,type:`number`,defaultValue:`9`},{prop:`inherit`,description:`是否让后代 Watermark 复用当前图案与铺设参数。`,type:`boolean`,defaultValue:`true`},{prop:`className / rootClassName`,description:`根容器类名，便于直接叠加 Rue 的布局与视觉类。`,type:`string`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`覆盖层类名和样式，适合与圆角、混合模式、局部调优配合。`,type:`string / any`,defaultValue:`-`},{prop:`style`,description:`根容器行内样式；默认会自动补 position、overflow、isolation。`,type:`any`,defaultValue:`-`}],$e=e=>{let t=p(e.rows);return j(i(Object.assign(e=>{let r=qe().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return P(()=>{let e=t.get()||[];s=n(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=p(e),r=p(t);return d((e,t,r)=>F(e,r,()=>i(Object.assign(e=>{let t=w(`tr`,e),r=w(`td`,t);x(t,r);let i=w(`code`,r);x(r,i);let a=C(``);x(i,a),y(a,()=>n.get().prop);let o=w(`td`,t);x(t,o);let s=C(``);x(o,s),y(s,()=>n.get().description);let c=w(`td`,t);x(t,c);let l=w(`code`,c);x(c,l);let u=C(``);x(l,u),y(u,()=>n.get().type);let d=w(`td`,t);x(t,d);let f=w(`code`,d);x(d,f);let p=C(``);return x(f,p),y(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>L(()=>{t.set(e.rows)}),()=>e)},Q={rotate:-22,gapX:120,gapY:96,offsetX:48,offsetY:48,fontSize:18,zIndex:12},et={rotate:-8,gapX:156,gapY:124,offsetX:64,offsetY:32,fontSize:14,zIndex:10},tt=e=>typeof requestAnimationFrame==`function`?{type:`frame`,id:requestAnimationFrame(e)}:{type:`timeout`,id:setTimeout(e,0)},nt=e=>{if(e.type===`frame`){typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(e.id);return}clearTimeout(e.id)},$=e=>{let t=p(e.label),n=p(e.max),r=p(e.min),i=p(e.onValueChange),o=p(e.onValueCommit),s=p(e.value);return j(a(B,()=>({className:`range-sm`,rootClassName:`space-y-2`,valueClassName:`min-w-12 text-center tabular-nums`,label:t.get(),min:r.get(),max:n.get(),value:s.get(),showValue:{formatter:e=>String(e)},onValueChange:i.get(),onValueCommit:o.get()})),e=>L(()=>{t.set(e.label),n.set(e.max),r.set(e.min),i.set(e.onValueChange),o.set(e.onValueCommit),s.set(e.value)}),()=>e)},rt=()=>{let e=t(`Rue Design`),n=t(Q.rotate),a=t(Q.gapX),o=t(Q.gapY),d=t(Q.offsetX),f=t(Q.offsetY),p=t(Q.fontSize),g=t(Q.zIndex),v=t(Q.rotate),b=t(Q.gapX),O=t(Q.gapY),N=t(Q.offsetX),ne=t(Q.offsetY),B=t(Q.fontSize),V=t(Q.zIndex),H=t(``),ie={rotate:v,gapX:b,gapY:O,offsetX:N,offsetY:ne,fontSize:B,zIndex:V},U={...Q},W=null,ae=e=>{n.value=e.rotate,a.value=e.gapX,o.value=e.gapY,d.value=e.offsetX,f.value=e.offsetY,p.value=e.fontSize,g.value=e.zIndex},oe=e=>{v.value=e.rotate,b.value=e.gapX,O.value=e.gapY,N.value=e.offsetX,ne.value=e.offsetY,B.value=e.fontSize,V.value=e.zIndex},G=()=>{W&&=(nt(W),null)},K=()=>{W=null,I(()=>{ae(U)})},q=(e,t)=>{U[e]=t,!W&&(W=tt(K))},J=(e,t)=>{U[e]=t,G(),I(()=>{ae(U),ie[e].value=t})},se=({nextContent:t,nextColor:n,nextControls:r})=>{G(),U={...r},I(()=>{e.value=t,H.value=n,ae(r),oe(r)})},ce=()=>se({nextContent:`Rue Design`,nextColor:``,nextControls:Q}),le=()=>se({nextContent:`Shared with Partner`,nextColor:`rgba(34, 197, 94, 0.22)`,nextControls:et});return l(G),u(()=>j(T(()=>{let t=k(),l=Je().content.cloneNode(!0),u=l.firstChild,j=u.childNodes[0],I=j.parentNode,L=u.childNodes[1],ie=L.parentNode;return t.appendChild(l),P(()=>{let t=T(()=>{let t=k(),n=M(`div`,t);m(t,n),c(n,`space-y-4 p-5 md:p-6`);let r=M(`div`,n);m(n,r),c(r,`flex flex-wrap items-center justify-between gap-3`);let a=M(`div`,r);m(r,a);let o=M(`div`,a);m(a,o),c(o,`text-xs uppercase tracking-[0.18em] text-base-content/45`),m(o,E(`Scenario Sandbox`));let l=M(`div`,a);m(a,l),c(l,`mt-2 text-2xl font-semibold text-base-content`),m(l,E(`参数调整后的实时预览`)),s(r,re,()=>({outline:!0,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k(),n=C(``);return x(t,n),y(n,()=>`z-index ${g.value}`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}));let u=M(`p`,n);m(n,u),c(u,`m-0 max-w-2xl text-sm leading-7 text-base-content/65`),m(u,E(`这里故意放了文字、徽标和按钮，方便观察水印对不同内容密度与层次关系的影响。`));let d=M(`div`,n);m(n,d),c(d,`grid gap-4 md:grid-cols-3`);let f=te(`rue:component:anchor`);m(d,f),P(()=>{let e=_(z.Body,()=>({children:[i(Object.assign(e=>{let t=w(`div`,e);return t.className=`text-sm font-semibold text-base-content`,x(t,C(`内容流`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=w(`p`,e);return t.className=`m-0 text-sm leading-7 text-base-content/65`,x(t,C(`Rue Watermark 会把铺设逻辑限制在当前容器内部，圆角、阴影和内容布局都可以继续由宿主容器控制。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),t=_(z,()=>({className:`bg-base-100/90 shadow-sm md:col-span-2`,children:e}));D(()=>h(t,d,f))});let p=M(`div`,d);m(d,p),c(p,`rounded-[1.25rem] bg-accent px-4 py-5 text-accent-content shadow-sm`);let v=M(`div`,p);m(p,v),c(v,`text-xs uppercase tracking-[0.2em] opacity-70`),m(v,E(`Preset`));let b=M(`div`,p);m(p,b),c(b,`mt-2 text-2xl font-black`);let S=ee(b);m(b,S),P(()=>{A(S,e.value)});let T=M(`div`,n);return m(n,T),c(T,`flex flex-wrap gap-3`),s(T,R,()=>({size:`sm`,color:`primary`,onClick:ce,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k();return x(t,C(`重置参数`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s(T,R,()=>({size:`sm`,type:`outlined`,onClick:le,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k();return x(t,C(`切换到稀疏模式`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),t}),r=_(Z,()=>({content:[e.value,`Scenario Sandbox`],rotate:n.value,gap:[a.value,o.value],offset:[d.value,f.value],zIndex:g.value,width:180,height:72,font:{color:H.value||void 0,fontSize:p.value,fontWeight:700,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:t}));D(()=>h(r,I,j))}),P(()=>{let t=_($,()=>({label:`Rotate`,min:-90,max:90,value:v,onValueChange:e=>q(`rotate`,e),onValueCommit:e=>J(`rotate`,e)})),n=_($,()=>({label:`Font size`,min:12,max:28,value:B,onValueChange:e=>q(`fontSize`,e),onValueCommit:e=>J(`fontSize`,e)})),a=_($,()=>({label:`Gap X`,min:72,max:180,value:b,onValueChange:e=>q(`gapX`,e),onValueCommit:e=>J(`gapX`,e)})),o=_($,()=>({label:`Gap Y`,min:72,max:180,value:O,onValueChange:e=>q(`gapY`,e),onValueCommit:e=>J(`gapY`,e)})),s=_($,()=>({label:`Offset X`,min:0,max:120,value:N,onValueChange:e=>q(`offsetX`,e),onValueCommit:e=>J(`offsetX`,e)})),c=_($,()=>({label:`Offset Y`,min:0,max:120,value:ne,onValueChange:e=>q(`offsetY`,e),onValueCommit:e=>J(`offsetY`,e)})),l=_($,()=>({label:`z-index`,min:1,max:24,value:V,onValueChange:e=>q(`zIndex`,e),onValueCommit:e=>J(`zIndex`,e)})),u=_(z.Body,()=>({className:`gap-4`,children:[i(Object.assign(t=>{let n=w(`div`,t),i=w(`div`,n);x(n,i),i.className=`text-sm font-semibold text-base-content`,x(i,C(`文本`));let a=w(`input`,n);x(n,a),a.className=`input input-bordered mt-2 w-full`;let o;P(()=>{let t=e.value,n=t==null?``:String(t);Object.is(o,n)||(o=n,S(a,n))});let s=t=>{let n=t=>{e.value=t.currentTarget.value};typeof n==`function`&&n(t)};return a.addEventListener(`input`,s),r(()=>a.removeEventListener(`input`,s)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),t,n,a,o,s,c,l,i(Object.assign(e=>{let t=w(`div`,e),n=w(`div`,t);x(t,n),n.className=`text-sm font-medium text-base-content`,x(n,C(`Color override`));let i=w(`input`,t);x(t,i),i.className=`input input-bordered mt-2 w-full`,i.setAttribute(`placeholder`,`auto`);let a;P(()=>{let e=H.value,t=e==null?``:String(e);Object.is(a,t)||(a=t,S(i,t))});let o=e=>{let t=e=>{H.value=e.currentTarget.value};typeof t==`function`&&t(e)};return i.addEventListener(`input`,o),r(()=>i.removeEventListener(`input`,o)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),d=_(z,()=>({className:`bg-base-100 shadow-sm`,children:u}));D(()=>h(d,ie,L))}),t},!0),e=>L(()=>{})))},it=`const WatermarkCustomControlsDemo = () => {
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
}`,at=()=>{let e={basic:t(`preview`),multiline:t(`preview`),image:t(`preview`),inherit:t(`preview`),custom:t(`preview`)};return u(()=>j(a(V,()=>({children:(t,n,r)=>F(t,r,()=>i(Object.assign(t=>{let n=k(),r=Ye().content.cloneNode(!0),o=r.firstChild,l=o.childNodes[4],u=l.parentNode,d=o.childNodes[5],f=d.parentNode,p=o.childNodes[6],g=p.parentNode,v=o.childNodes[7],y=v.parentNode,b=o.childNodes[8],S=b.parentNode,E=o.childNodes[10],j=E.parentNode;n.appendChild(r);let N=O(u);s(N,H,()=>({title:`Basic text watermark`,summary:`最直接的用法：给一个内容容器加上文本水印，按钮仍然可以正常点击。`,tab:e.basic,preview:(()=>{let e=T(()=>{let e=k(),t=Ue().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=n.childNodes[0].childNodes[3].childNodes[0],l=o.parentNode,u=n.childNodes[0].childNodes[3].childNodes[1],d=u.parentNode,f=n.childNodes[1],p=f.parentNode;e.appendChild(t);let g=O(a);s(g,re,()=>({variant:`secondary`,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k();return x(t,C(`Internal Preview`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(g,r);let v=O(l);s(v,R,()=>({color:`primary`,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k();return x(t,C(`导出摘要`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(v,o);let y=O(d);return s(y,R,()=>({type:`outlined`,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k();return x(t,C(`查看访问日志`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(y,u),P(()=>{let e=_(z.Body,()=>({className:`gap-4`,children:Ze.map(e=>T(()=>{let t=k(),n=M(`div`,t);m(t,n),c(n,`rounded-box border border-base-300/70 bg-base-100/70 px-4 py-3`);let r=M(`div`,n);m(n,r),c(r,`text-xs uppercase tracking-[0.2em] text-base-content/50`);let i=te(`rue:slot:anchor`);m(r,i),P(()=>{let t=e.label;D(()=>h(t,r,i))});let a=M(`div`,n);m(n,a),c(a,`mt-2 text-2xl font-bold text-base-content`);let o=ee(a);m(a,o),P(()=>{A(o,e.value)});let s=M(`div`,n);m(n,s),c(s,`mt-1 text-sm text-base-content/60`);let l=te(`rue:slot:anchor`);return m(s,l),P(()=>{let t=e.detail;D(()=>h(t,s,l))}),t},!0))})),t=_(z,()=>({className:`bg-base-100/85 shadow-sm backdrop-blur-sm`,children:e}));D(()=>h(t,p,f))}),e});return _(Z,()=>({content:`Rue Design`,className:`rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:e}))})(),code:`const stats = [
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
</Watermark>`})),u.insertBefore(N,l);let I=O(f);s(I,H,()=>({title:`Multiline typography and tuned spacing`,summary:`支持多行内容、字族和铺设参数调优，更适合仪表盘、稿件和审批流页面。`,tab:e.multiline,preview:(()=>{let e=T(()=>{let e=k(),t=We().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],a=r.parentNode,o=n.childNodes[1],c=o.parentNode;return e.appendChild(t),P(()=>{let e=_(z.Body,()=>({children:[i(Object.assign(e=>{let t=w(`div`,e);return t.className=`text-xs uppercase tracking-[0.18em] text-base-content/45`,x(t,C(`Draft`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=w(`div`,e);return t.className=`text-lg font-semibold text-base-content`,x(t,C(`产品评审结论`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=w(`p`,e);return t.className=`m-0 text-sm leading-6 text-base-content/65`,x(t,C(`用多行水印把容器语义说清楚，而不是只放一个模糊 logo。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),t=_(z,()=>({className:`bg-base-100/90 shadow-sm`,children:e}));D(()=>h(t,a,r))}),P(()=>{let e=_(z.Body,()=>({className:`gap-4`,children:[i(Object.assign(e=>{let t=w(`div`,e);t.className=`flex flex-wrap items-center justify-between gap-3`;let n=w(`div`,t);x(t,n);let r=w(`div`,n);x(n,r),r.className=`text-xs uppercase tracking-[0.16em] text-base-content/45`,x(r,C(`Access Scope`));let a=w(`div`,n);return x(n,a),a.className=`text-xl font-semibold text-base-content`,x(a,C(`仅限设计与法务同步窗口`)),s(t,re,()=>({outline:!0,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k();return x(t,C(`Version 15`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=w(`p`,e);return t.className=`m-0 text-sm leading-7 text-base-content/65`,x(t,C(`通过 width、height、gap 和 font 组合，可以让文字块更像“签章”而不是背景噪音。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),t=_(z,()=>({className:`bg-base-100/90 shadow-sm md:col-span-2`,children:e}));D(()=>h(t,c,o))}),e});return _(Z,()=>({content:[`Confidential Build`,`Rue Design System`],rotate:-16,gap:[132,116],width:168,height:72,font:{color:`rgba(13, 22, 39, 0.15)`,fontSize:15,fontWeight:700,fontFamily:`Georgia, Times New Roman, serif`,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.88))] shadow-sm`,children:e}))})(),code:`<Watermark
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
</Watermark>`})),f.insertBefore(I,d);let ne=O(g);s(ne,H,()=>({title:`Image watermark`,summary:`图片模式适合品牌 logo、部门印记或业务章；Rue 这边建议把它用在局部容器，而不是整页满屏。`,tab:e.image,preview:(()=>{let e=T(()=>{let e=k(),t=Ge().content.cloneNode(!0),n=t.firstChild.childNodes[0],r=n.parentNode;return e.appendChild(t),P(()=>{let e=_(z.Body,()=>({className:`gap-4`,children:[i(Object.assign(e=>{let t=w(`div`,e);return t.className=`text-xs uppercase tracking-[0.18em] text-base-content/45`,x(t,C(`Media Kit`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=w(`div`,e);return t.className=`text-2xl font-semibold text-base-content`,x(t,C(`品牌资产导出包`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=w(`p`,e);return t.className=`m-0 text-sm leading-7 text-base-content/65`,x(t,C(`图片水印不会吞掉原内容的层级信息，更适合 logo、组织印章和明确的来源标识。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),t=_(z,()=>({className:`overflow-hidden bg-base-200/70 shadow-none`,children:e}));D(()=>h(t,r,n))}),e});return _(Z,()=>({image:Xe,width:156,height:58,rotate:-18,gap:[140,112],className:`rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`,children:e}))})(),code:`const logo = 'https://dummyimage.com/312x116/0f172a/f8fafc.png&text=RUE'

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
</Watermark>`})),g.insertBefore(ne,p);let L=O(y);s(L,H,()=>({title:`Inherited local scope`,summary:`父级配置一次，子级局部容器可以继续复用；不想继承时再显式关掉。`,tab:e.inherit,preview:a(Z,()=>({content:[`Team Only`,`Rue Preview`],rotate:-14,width:148,height:64,gap:[128,108],className:`rounded-[1.75rem] border border-base-300 bg-base-100 shadow-sm`,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k(),n=Ke().content.cloneNode(!0),r=n.firstChild,a=r.childNodes[0],o=a.parentNode,c=r.childNodes[1],l=c.parentNode;t.appendChild(n);let u=O(o);s(u,Z,()=>({className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-100/80`,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k(),n=w(`div`,t);x(t,n),n.className=`space-y-3 p-4`;let r=w(`div`,n);x(n,r),r.className=`text-sm font-semibold text-base-content`,x(r,C(`继承父级水印`));let i=w(`p`,n);return x(n,i),i.className=`m-0 text-sm leading-6 text-base-content/65`,x(i,C(`这个局部容器没有重新写 content 和 image，会直接复用外层图案与铺设参数。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(u,a);let d=O(l);return s(d,Z,()=>({inherit:!1,className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/60`,children:(e,t,n)=>F(e,n,()=>i(Object.assign(e=>{let t=k(),n=w(`div`,t);x(t,n),n.className=`space-y-3 p-4`;let r=w(`div`,n);x(n,r),r.className=`text-sm font-semibold text-base-content`,x(r,C(`关闭继承`));let i=w(`p`,n);return x(n,i),i.className=`m-0 text-sm leading-6 text-base-content/65`,x(i,C(`当局部容器不需要上层水印时，直接把 inherit 设为 false 即可回到纯净内容区。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(d,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),code:`<Watermark
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
</Watermark>`})),y.insertBefore(L,v);let B=O(S);s(B,H,()=>({title:`Custom controls`,summary:`把可调示例 落到 Rue 风格里，用 Range 的按帧更新快速调整排版参数。`,tab:e.custom,preview:a(rt,()=>({})),code:it})),S.insertBefore(B,b);let V=O(j);return s(V,$e,()=>({rows:Qe})),j.insertBefore(V,E),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})),e=>L(()=>{})))};export{at as default};