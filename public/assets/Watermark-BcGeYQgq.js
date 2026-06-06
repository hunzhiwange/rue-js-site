import{$ as e,Gt as t,Jt as n,Kt as r,Lt as i,O as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,et as f,l as p,ot as m,s as h,t as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _,n as v}from"./vapor-helpers-vapor-CJFAWine.js";import{a as y,i as b}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as x}from"./button-Cy4xZBmC.js";import{t as S}from"./card-BqlEmwPT.js";import{t as C}from"./badge-D84isAR2.js";import{n as w}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as T}from"./PreviewBlock-BYaG1RFO.js";var E=100,D=100,O=9,k=1,A=`rgba(15, 23, 42, 0.2)`,j=`rgba(248, 250, 252, 0.28)`,M=`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,N=120,P=64,F=32,I=24,L=(...e)=>e.filter(Boolean).join(` `),R=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},z=e=>e.startsWith(`--`)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),B=e=>Object.entries(e).filter(([,e])=>e!==void 0).map(([e,t])=>`${z(e)}: ${String(t)}`).join(`; `),V=(e,t)=>{let n=B(e);if(!t)return n;if(typeof t==`string`)return n?`${n}; ${t}`:t;let r=B(t);return n?r?`${n}; ${r}`:n:r},H=(e,t,n)=>Math.min(n,Math.max(t,e)),U=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),W=e=>{if(!e)return 1;let t=e.trim();if(!t||t===`none`)return 1;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?H(n/100,0,1):H(n,0,1):1},G=e=>{let t=e.trim();if(t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`%`)?H(Math.round(n/100*255),0,255):H(Math.round(n),0,255):0},K=(e,t=1)=>{let n=e.trim();if(n===`none`)return 0;let r=Number.parseFloat(n);return Number.isFinite(r)?n.endsWith(`%`)?r/100*t:r:0},q=e=>{if(!e)return 0;let t=e.trim();if(!t||t===`none`)return 0;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`rad`)?n*180/Math.PI:t.endsWith(`grad`)?n*.9:t.endsWith(`turn`)?n*360:n:0},J=(e,t,n,r)=>{let i=n*Math.PI/180,a=t*Math.cos(i),o=t*Math.sin(i),s=e+.3963377774*a+.2158037573*o,c=e-.1055613458*a-.0638541728*o,l=e-.0894841775*a-1.291485548*o,u=s**3,d=c**3,f=l**3,p=e=>{let t=e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055;return H(Math.round(t*255),0,255)};return{r:p(4.0767416621*u-3.3077115913*d+.2309699292*f),g:p(-1.2684380046*u+2.6097574011*d-.3413193965*f),b:p(-.0041960863*u-.7034186147*d+1.707614701*f),a:r}},Y=e=>{if(!e)return null;let t=e.trim().toLowerCase();if(!t||t===`transparent`)return null;let n=t.match(/^rgba?\((.+)\)$/);if(n){let[e,t]=n[1].split(/\s*\/\s*/),r=e.includes(`,`),i=r?e.split(`,`).map(e=>e.trim()):e.trim().split(/\s+/),a=t??(r?i[3]:void 0);if(i.length>=3)return{r:G(i[0]),g:G(i[1]),b:G(i[2]),a:W(a)}}let r=t.match(/^oklch\((.+)\)$/);if(r){let[e,t]=r[1].split(/\s*\/\s*/),n=e.trim().split(/\s+/);if(n.length>=3)return J(H(K(n[0]),0,1),Math.max(K(n[1],.4),0),q(n[2]),W(t))}let i=t.match(/^#([0-9a-f]{3,8})$/);if(!i)return null;let a=i[1];return a.length===3||a.length===4?{r:Number.parseInt(a[0]+a[0],16),g:Number.parseInt(a[1]+a[1],16),b:Number.parseInt(a[2]+a[2],16),a:a.length===4?Number.parseInt(a[3]+a[3],16)/255:1}:a.length===6||a.length===8?{r:Number.parseInt(a.slice(0,2),16),g:Number.parseInt(a.slice(2,4),16),b:Number.parseInt(a.slice(4,6),16),a:a.length===8?Number.parseInt(a.slice(6,8),16)/255:1}:null},X=({r:e,g:t,b:n})=>{let r=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4},i=r(e),a=r(t),o=r(n);return i*.2126+a*.7152+o*.0722},ee=e=>{if(!e||typeof window>`u`)return A;let t=e;for(;t;){let e=Y(window.getComputedStyle(t).backgroundColor);if(e&&e.a>.01)return X(e)<.35?j:A;t=t.parentElement}let n=Y(window.getComputedStyle(e).color);return n&&X(n)>.6?j:A},Z=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=Number.parseFloat(e);if(Number.isFinite(t))return e.endsWith(`rem`)?t*16:t}return 16},te=e=>e==null?[]:(Array.isArray(e)?e:[e]).flatMap(e=>String(e).split(/\r?\n/)),Q=e=>e.some(e=>e.trim().length>0),ne=(e,t,n,r,i)=>{let a=Z(t.fontSize),o=Math.max(Math.round(a*1.45),a+6);if(i)return{markWidth:Math.max(n??N,F),markHeight:Math.max(r??P,I),lineHeight:o,fontSizePx:a};if(n!=null&&r!=null)return{markWidth:Math.max(n,F),markHeight:Math.max(r,I),lineHeight:o,fontSizePx:a};let s=t.fontFamily??M,c=t.fontWeight??`normal`,l=t.fontStyle&&t.fontStyle!==`none`?t.fontStyle:`normal`,u=0;if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);t&&(t.font=`${l} ${c} ${a}px ${s}`,u=Math.ceil(e.reduce((e,n)=>Math.max(e,t.measureText(n).width),0)))}u||=Math.ceil(e.reduce((e,t)=>Math.max(e,t.length*a*.62),0));let d=Math.max(e.length,1),f=Math.ceil(a+(d-1)*o);return{markWidth:Math.max(n??u,F),markHeight:Math.max(r??f,I),lineHeight:o,fontSizePx:a}},re=e=>{switch(e){case`left`:case`start`:return{anchor:`start`,xRatio:0};case`right`:case`end`:return{anchor:`end`,xRatio:1};default:return{anchor:`middle`,xRatio:.5}}},ie=(e,t,n)=>{let r=e/2,i=t/2,a=n?.[0]??r,o=n?.[1]??i,s=a-r,c=o-i,l=`0px`,u=`0px`,d=`100%`,f=`100%`;return s>0&&(l=`${s}px`,d=`calc(100% - ${s}px)`,s=0),c>0&&(u=`${c}px`,f=`calc(100% - ${c}px)`,c=0),{left:l,top:u,width:d,height:f,backgroundPosition:`${s}px ${c}px`}},ae=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>{let{markWidth:c,markHeight:l,lineHeight:u,fontSizePx:d}=o,f=c+i,p=l+a,m=i/2,h=a/2,g=m+c/2,_=h+l/2,v=r.color??A,y=r.fontWeight??`normal`,b=r.fontStyle&&r.fontStyle!==`none`?r.fontStyle:`normal`,x=r.fontFamily??M,{anchor:S,xRatio:C}=re(r.textAlign),w=``;if(e)w=`<image href="${U(e)}" x="${m}" y="${h}" width="${c}" height="${l}" preserveAspectRatio="xMidYMid meet" />`;else{let e=d+(Math.max(t.length,1)-1)*u,n=h+Math.max((l-e)/2,0),r=m+c*C;w=t.map((e,t)=>`<text x="${r}" y="${n+t*u}" fill="${U(v)}" font-size="${d}" font-weight="${U(String(y))}" font-style="${U(b)}" font-family="${U(x)}" text-anchor="${S}" dominant-baseline="hanging">${U(e)}</text>`).join(``)}let T=`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${p}" viewBox="0 0 ${f} ${p}"><g opacity="${s}" transform="rotate(${n} ${g} ${_})">${w}</g></svg>`;return{url:`url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(T)}")`,tileWidth:f,tileHeight:p}},$=({zIndex:e,rotate:r=-22,width:o,height:s,image:c,content:l,font:u={},className:d,rootClassName:f,overlayClassName:p,style:m,overlayStyle:h,gap:g=[E,D],offset:_,opacity:v=k,children:x,inherit:S=!0,...C})=>{let w=C.ref,T=t(null),A=t(null),j=i(void 0);`ref`in C&&delete C.ref;let M=te(l),[N=E,P=D]=g,F=!!c||Q(M),I=()=>!c&&!u.color&&Q(M)&&j.value?{...u,color:j.value}:u,z=()=>{let e=I(),t=ie(N,P,_),n=ne(M,e,o,s,c);return{placement:t,pattern:F?ae({image:c,lines:M.length?M:[``],rotate:r,font:e,gapX:N,gapY:P,dimensions:n,opacity:H(v,0,1)}):null}},B=(t,n)=>{let r={position:m?.position??`relative`,overflow:m?.overflow??`hidden`,isolation:m?.isolation??`isolate`};return n?(r[`--rue-watermark-image`]=n.url,r[`--rue-watermark-size`]=`${n.tileWidth}px ${n.tileHeight}px`,r[`--rue-watermark-position`]=t.backgroundPosition,r[`--rue-watermark-left`]=t.left,r[`--rue-watermark-top`]=t.top,r[`--rue-watermark-width`]=t.width,r[`--rue-watermark-height`]=t.height,r[`--rue-watermark-z-index`]=String(e??O)):S||(r[`--rue-watermark-image`]=`none`,r[`--rue-watermark-size`]=`auto`,r[`--rue-watermark-position`]=`0px 0px`,r[`--rue-watermark-left`]=`0px`,r[`--rue-watermark-top`]=`0px`,r[`--rue-watermark-width`]=`100%`,r[`--rue-watermark-height`]=`100%`,r[`--rue-watermark-z-index`]=`0`),V(r,m)},U=(t,n)=>V({position:`absolute`,left:n?t.left:`var(--rue-watermark-left, 0px)`,top:n?t.top:`var(--rue-watermark-top, 0px)`,width:n?t.width:`var(--rue-watermark-width, 100%)`,height:n?t.height:`var(--rue-watermark-height, 100%)`,pointerEvents:`none`,backgroundRepeat:`repeat`,backgroundImage:n?n.url:S?`var(--rue-watermark-image, none)`:`none`,backgroundSize:n?`${n.tileWidth}px ${n.tileHeight}px`:S?`var(--rue-watermark-size, auto)`:`auto`,backgroundPosition:n?t.backgroundPosition:S?`var(--rue-watermark-position, 0px 0px)`:`0px 0px`,zIndex:n?e??O:S?`var(--rue-watermark-z-index, 9)`:0},h),{placement:W,pattern:G}=z(),K=B(W,G),q=U(W,G),J=(e,t)=>{e&&(t?e.setAttribute(`style`,t):e.removeAttribute(`style`))},Y=()=>{let e=z();J(T.current,B(e.placement,e.pattern)),J(A.current,U(e.placement,e.pattern))},X=()=>{if(c||u.color||!Q(M))return;let e=ee(T.current??null);j.value!==e&&(j.value=e,Y())},Z=e=>{T.current=e,J(e,K),R(w,e)},re=e=>{A.current=e,J(e,q)};return a(()=>{J(T.current,K),J(A.current,q),X()}),n(()=>K,e=>{J(T.current,e),X()},{immediate:!0}),n(()=>q,e=>{J(A.current,e)},{immediate:!0}),y(`div`,{...C,ref:Z,className:L(`rue-watermark`,d,f),"data-rue-watermark-root":`true`,"data-rue-watermark-inherit":S?`true`:`false`,children:[b(`div`,{"aria-hidden":`true`,ref:re,className:L(`rue-watermark-overlay`,p),"data-rue-watermark-overlay":`true`}),x]})},oe=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22196%22%20height%3D%2272%22%20viewBox%3D%220%200%20196%2072%22%3E%3Crect%20width%3D%22196%22%20height%3D%2272%22%20rx%3D%2218%22%20fill%3D%22%230f172a%22%2F%3E%3Cpath%20d%3D%22M30%2019h22c12%200%2019%206%2019%2017%200%2011-7%2017-19%2017H45v14H30V19Zm22%2022c4%200%206-2%206-5s-2-5-6-5H45v10h7Zm35-22h15l10%2031%2010-31h15l-17%2048H104L87%2019Zm60%200h18l15%2048h-15l-2.2-7.5h-13.7L147%2067h-15l15-48Zm13%2029-4-14-4%2014h8Z%22%20fill%3D%22%23f8fafc%22%2F%3E%3C%2Fsvg%3E`,se=[{label:`共享链接`,value:`1.8k`,detail:`过去 24 小时`},{label:`导出快照`,value:`312`,detail:`包含 38 个外部成员`},{label:`访问终端`,value:`57`,detail:`待二次确认设备 5 台`}],ce=[{prop:`content`,description:`文字水印内容，支持字符串或多行数组。`,type:`string | string[]`,defaultValue:`-`},{prop:`image`,description:`图片水印地址，适合 logo、签章、业务标记。`,type:`string`,defaultValue:`-`},{prop:`font`,description:`文字水印的颜色、字号、字重、字体和对齐方式。`,type:`{ color?: string; fontSize?: number | string; fontWeight?: number | string; fontStyle?: string; fontFamily?: string; textAlign?: string }`,defaultValue:`{ color: 自动按宿主背景明暗推导, fontSize: 16 }`},{prop:`rotate`,description:`单个水印块的旋转角度。`,type:`number`,defaultValue:`-22`},{prop:`width / height`,description:`单个水印内容块的尺寸；不传时文本会按内容估算。`,type:`number`,defaultValue:`文本自动测量 / 图片 120 x 64`},{prop:`gap`,description:`水印块之间的水平与垂直间距。`,type:`[number, number]`,defaultValue:`[100, 100]`},{prop:`offset`,description:`起始铺设偏移量，便于与卡片头部或图像对齐。`,type:`[number, number]`,defaultValue:`[gapX / 2, gapY / 2]`},{prop:`zIndex`,description:`覆盖层层级，保持视觉上方但不阻断交互。`,type:`number`,defaultValue:`9`},{prop:`inherit`,description:`是否让后代 Watermark 复用当前图案与铺设参数。`,type:`boolean`,defaultValue:`true`},{prop:`className / rootClassName`,description:`根容器类名，便于直接叠加 Rue 的布局与视觉类。`,type:`string`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`覆盖层类名和样式，适合与圆角、混合模式、局部调优配合。`,type:`string / any`,defaultValue:`-`},{prop:`style`,description:`根容器行内样式；默认会自动补 position、overflow、isolation。`,type:`any`,defaultValue:`-`}],le=t=>p(n=>{let r=e(`div`,n);d(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);c(r,i),d(i,`table table-zebra`);let a=e(`thead`,i);c(i,a);let g=e(`tr`,a);c(a,g);let _=e(`th`,g);c(g,_),c(_,f(`属性`));let y=e(`th`,g);c(g,y),c(y,f(`说明`));let b=e(`th`,g);c(g,b),c(b,f(`类型`));let x=e(`th`,g);c(g,x),c(x,f(`默认值`));let S=e(`tbody`,i);c(i,S);let C=u(`rue:list:start`),w=u(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return l(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,a)=>{h(p(()=>{let n=o(),r=e(`tr`,n);c(n,r),l(()=>{m(r,`key`,String(t.prop))});let i=e(`td`,r);c(r,i);let a=e(`code`,i);c(i,a);let d=u(`rue:slot:anchor`);c(a,d),l(()=>{let e=t.prop;s(()=>h(e,a,d))});let f=e(`td`,r);c(r,f);let p=u(`rue:slot:anchor`);c(f,p),l(()=>{let e=t.description;s(()=>h(e,f,p))});let g=e(`td`,r);c(r,g);let _=e(`code`,g);c(g,_);let v=u(`rue:slot:anchor`);c(_,v),l(()=>{let e=t.type;s(()=>h(e,_,v))});let y=e(`td`,r);c(r,y);let b=e(`code`,y);c(y,b);let x=u(`rue:slot:anchor`);return c(b,x),l(()=>{let e=t.defaultValue;s(()=>h(e,b,x))}),n}),n,r)}})}),r}),ue=()=>{let{tabs:t,content:n,rotate:a,gapX:m,gapY:v,offsetX:E,offsetY:D,fontSize:O,zIndex:k,color:A}=_(`useSetup:0:0`,()=>r(()=>({tabs:{basic:_(`ref:1:0`,()=>i(`preview`)),multiline:_(`ref:1:1`,()=>i(`preview`)),image:_(`ref:1:2`,()=>i(`preview`)),inherit:_(`ref:1:3`,()=>i(`preview`)),custom:_(`ref:1:4`,()=>i(`preview`))},content:_(`ref:1:5`,()=>i(`Rue Design`)),rotate:_(`ref:1:6`,()=>i(-22)),gapX:_(`ref:1:7`,()=>i(120)),gapY:_(`ref:1:8`,()=>i(96)),offsetX:_(`ref:1:9`,()=>i(48)),offsetY:_(`ref:1:10`,()=>i(48)),fontSize:_(`ref:1:11`,()=>i(18)),zIndex:_(`ref:1:12`,()=>i(12)),color:_(`ref:1:13`,()=>i(`rgba(15, 23, 42, 0.16)`))})));return p(r=>{let i=o(),_=u(`rue:component:anchor`);return c(i,_),h(g(w,{children:p(()=>{let r=o(),i=e(`div`,r);c(r,i),d(i,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,i);c(i,p),c(p,f(`Watermark 水印`));let _=e(`p`,i);c(i,_),d(_,`mt-3 mb-3 text-sm`),c(_,f(`Rue 的 Watermark 不照搬其他组件库的视觉，而是把能力落成更适合当前设计站点的轻量覆盖层。 你可以直接给任意容器加文字或图片水印，同时保留按钮、卡片、统计区这些内容本身的交互。`));let w=e(`h2`,i);c(i,w),c(w,f(`何时使用`));let j=e(`ul`,i);c(i,j);let M=e(`li`,j);c(j,M),c(M,f(`需要给卡片、报表、详情页加上“内部预览”“草稿”“仅限共享”等视觉标记。`));let N=e(`li`,j);c(j,N),c(N,f(`需要图片或文字水印覆盖在任意内容上，但又不希望阻断按钮、链接和表单的交互。`));let P=e(`li`,j);c(j,P),c(P,f(`需要局部容器继承上层水印图案，而不是为每一块内容重复写一遍配置。`));let F=u(`rue:component:anchor`);c(i,F),l(()=>{let e=g(T,{title:`Basic text watermark`,summary:`最直接的用法：给一个内容容器加上文本水印，按钮仍然可以正常点击。`,tab:t.basic,preview:b($,{content:`Rue Design`,className:`rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:y(`div`,{className:`grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-8`,children:[y(`div`,{className:`space-y-4`,children:[b(C,{variant:`secondary`,children:`Internal Preview`}),b(`h3`,{className:`m-0 text-3xl font-black tracking-tight text-base-content md:text-4xl`,children:`协作面板正在生成新一轮可共享快照`}),b(`p`,{className:`m-0 max-w-2xl text-sm leading-7 text-base-content/70`,children:`水印覆盖层默认在视觉上方，但采用 pointer-events none，不会挡住卡片、按钮和其它交互控件。`}),y(`div`,{className:`flex flex-wrap gap-3`,children:[b(x,{color:`primary`,children:`导出摘要`}),b(x,{type:`outlined`,children:`查看访问日志`})]})]}),b(S,{className:`bg-base-100/85 shadow-sm backdrop-blur-sm`,children:b(S.Body,{className:`gap-4`,children:se.map(e=>y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100/70 px-4 py-3`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] text-base-content/50`,children:e.label}),b(`div`,{className:`mt-2 text-2xl font-bold text-base-content`,children:e.value}),b(`div`,{className:`mt-1 text-sm text-base-content/60`,children:e.detail})]},e.label))})})]})}),code:`const stats = [
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
</Watermark>`});s(()=>h(e,i,F))});let I=u(`rue:component:anchor`);c(i,I),l(()=>{let e=g(T,{title:`Multiline typography and tuned spacing`,summary:`支持多行内容、字族和铺设参数调优，更适合仪表盘、稿件和审批流页面。`,tab:t.multiline,preview:b($,{content:[`Confidential Build`,`Rue Design System`],rotate:-16,gap:[132,116],width:168,height:72,font:{color:`rgba(13, 22, 39, 0.15)`,fontSize:15,fontWeight:700,fontFamily:`Georgia, Times New Roman, serif`,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.88))] shadow-sm`,children:y(`div`,{className:`grid gap-4 p-5 md:grid-cols-3 md:p-6`,children:[b(S,{className:`bg-base-100/90 shadow-sm`,children:y(S.Body,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`Draft`}),b(`div`,{className:`text-lg font-semibold text-base-content`,children:`产品评审结论`}),b(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`用多行水印把容器语义说清楚，而不是只放一个模糊 logo。`})]})}),b(S,{className:`bg-base-100/90 shadow-sm md:col-span-2`,children:y(S.Body,{className:`gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.16em] text-base-content/45`,children:`Access Scope`}),b(`div`,{className:`text-xl font-semibold text-base-content`,children:`仅限设计与法务同步窗口`})]}),b(C,{outline:!0,children:`Version 15`})]}),b(`p`,{className:`m-0 text-sm leading-7 text-base-content/65`,children:`通过 width、height、gap 和 font 组合，可以让文字块更像“签章”而不是背景噪音。`})]})})]})}),code:`<Watermark
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
</Watermark>`});s(()=>h(e,i,I))});let L=u(`rue:component:anchor`);c(i,L),l(()=>{let e=g(T,{title:`Image watermark`,summary:`图片模式适合品牌 logo、部门印记或业务章；Rue 这边建议把它用在局部容器，而不是整页满屏。`,tab:t.image,preview:b($,{image:oe,width:156,height:58,rotate:-18,gap:[140,112],className:`rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_18rem] md:p-6`,children:[b(S,{className:`overflow-hidden bg-base-200/70 shadow-none`,children:y(S.Body,{className:`gap-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`Media Kit`}),b(`div`,{className:`text-2xl font-semibold text-base-content`,children:`品牌资产导出包`}),b(`p`,{className:`m-0 text-sm leading-7 text-base-content/65`,children:`图片水印不会吞掉原内容的层级信息，更适合 logo、组织印章和明确的来源标识。`})]})}),y(`div`,{className:`rounded-[1.25rem] bg-gradient-to-br from-neutral to-slate-900 p-5 text-neutral-content shadow-sm`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-70`,children:`Delivery`}),b(`div`,{className:`mt-4 text-3xl font-black`,children:`5 Files`}),b(`div`,{className:`mt-2 text-sm leading-6 opacity-75`,children:`SVG / PDF / PNG / dark / light`})]})]})}),code:`const logo = 'https://dummyimage.com/312x116/0f172a/f8fafc.png&text=RUE'

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
</Watermark>`});s(()=>h(e,i,L))});let R=u(`rue:component:anchor`);c(i,R),l(()=>{let e=g(T,{title:`Inherited local scope`,summary:`父级配置一次，子级局部容器可以继续复用；不想继承时再显式关掉。`,tab:t.inherit,preview:b($,{content:[`Team Only`,`Rue Preview`],rotate:-14,width:148,height:64,gap:[128,108],className:`rounded-[1.75rem] border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`grid gap-4 p-5 md:grid-cols-2 md:p-6`,children:[b($,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-100/80`,children:y(`div`,{className:`space-y-3 p-4`,children:[b(`div`,{className:`text-sm font-semibold text-base-content`,children:`继承父级水印`}),b(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`这个局部容器没有重新写 content 和 image，会直接复用外层图案与铺设参数。`})]})}),b($,{inherit:!1,className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/60`,children:y(`div`,{className:`space-y-3 p-4`,children:[b(`div`,{className:`text-sm font-semibold text-base-content`,children:`关闭继承`}),b(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`当局部容器不需要上层水印时，直接把 inherit 设为 false 即可回到纯净内容区。`})]})})]})}),code:`<Watermark
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
</Watermark>`});s(()=>h(e,i,R))});let z=u(`rue:component:anchor`);c(i,z),l(()=>{let e=g(T,{title:`Custom controls`,summary:`把可调 demo 落到 Rue 风格里，用原生表单快速调整排版参数。`,tab:t.custom,preview:y(`div`,{className:`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`,children:[b($,{content:[n.value,`Scenario Sandbox`],rotate:a.value,gap:[m.value,v.value],offset:[E.value,D.value],zIndex:k.value,width:180,height:72,font:{color:A.value,fontSize:O.value,fontWeight:700,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:y(`div`,{className:`space-y-4 p-5 md:p-6`,children:[y(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`Scenario Sandbox`}),b(`div`,{className:`mt-2 text-2xl font-semibold text-base-content`,children:`参数调整后的实时预览`})]}),y(C,{outline:!0,children:[`z-index `,k.value]})]}),b(`p`,{className:`m-0 max-w-2xl text-sm leading-7 text-base-content/65`,children:`这里故意放了文字、徽标和按钮，方便观察水印对不同内容密度与层次关系的影响。`}),y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(S,{className:`bg-base-100/90 shadow-sm md:col-span-2`,children:y(S.Body,{children:[b(`div`,{className:`text-sm font-semibold text-base-content`,children:`内容流`}),b(`p`,{className:`m-0 text-sm leading-7 text-base-content/65`,children:`Rue Watermark 会把铺设逻辑限制在当前容器内部，圆角、阴影和内容布局都可以继续由宿主容器控制。`})]})}),y(`div`,{className:`rounded-[1.25rem] bg-accent px-4 py-5 text-accent-content shadow-sm`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-70`,children:`Preset`}),b(`div`,{className:`mt-2 text-2xl font-black`,children:n.value})]})]}),y(`div`,{className:`flex flex-wrap gap-3`,children:[b(x,{size:`sm`,color:`primary`,onClick:()=>{n.value=`Rue Design`,a.value=-22,m.value=120,v.value=96,E.value=48,D.value=48,O.value=18,k.value=12,A.value=`rgba(15, 23, 42, 0.16)`},children:`重置参数`}),b(x,{size:`sm`,type:`outlined`,onClick:()=>{n.value=`Shared with Partner`,a.value=-8,m.value=156,v.value=124,E.value=64,D.value=32,O.value=14,k.value=10,A.value=`rgba(20, 83, 45, 0.16)`},children:`切换到稀疏模式`})]})]})}),b(S,{className:`bg-base-100 shadow-sm`,children:y(S.Body,{className:`gap-4`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-semibold text-base-content`,children:`文本`}),b(`input`,{className:`input input-bordered mt-2 w-full`,value:n.value,onInput:e=>{n.value=e.currentTarget.value}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Rotate `,a.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`-90`,max:`90`,value:String(a.value),onInput:e=>{a.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Font size `,O.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`12`,max:`28`,value:String(O.value),onInput:e=>{O.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Gap X `,m.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`72`,max:`180`,value:String(m.value),onInput:e=>{m.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Gap Y `,v.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`72`,max:`180`,value:String(v.value),onInput:e=>{v.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Offset X `,E.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`0`,max:`120`,value:String(E.value),onInput:e=>{E.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Offset Y `,D.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`0`,max:`120`,value:String(D.value),onInput:e=>{D.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`z-index `,k.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`1`,max:`24`,value:String(k.value),onInput:e=>{k.value=Number(e.currentTarget.value)}})]}),y(`div`,{children:[b(`div`,{className:`text-sm font-medium text-base-content`,children:`Color`}),b(`input`,{className:`input input-bordered mt-2 w-full`,value:A.value,onInput:e=>{A.value=e.currentTarget.value}})]})]})})]}),code:`const content = ref('Rue Design')
const rotate = ref(-22)
const gapX = ref(120)
const gapY = ref(96)
const offsetX = ref(48)
const offsetY = ref(48)
const fontSize = ref(18)
const zIndex = ref(12)
const color = ref('rgba(15, 23, 42, 0.16)')

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
      color: color.value,
      fontSize: fontSize.value,
      fontWeight: 700,
      textAlign: 'center',
    }}
    className="rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm"
  >
    <div className="space-y-4 p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-base-content/45">
            Scenario Sandbox
          </div>
          <div className="mt-2 text-2xl font-semibold text-base-content">参数调整后的实时预览</div>
        </div>
        <Badge outline>z-index {zIndex.value}</Badge>
      </div>

      <p className="m-0 max-w-2xl text-sm leading-7 text-base-content/65">
        这里故意放了文字、徽标和按钮，方便观察水印对不同内容密度与层次关系的影响。
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-base-100/90 shadow-sm md:col-span-2">
          <Card.Body>
            <div className="text-sm font-semibold text-base-content">内容流</div>
            <p className="m-0 text-sm leading-7 text-base-content/65">
              Rue Watermark 会把铺设逻辑限制在当前容器内部，圆角、阴影和内容布局都可以继续由宿主容器控制。
            </p>
          </Card.Body>
        </Card>

        <div className="rounded-[1.25rem] bg-accent px-4 py-5 text-accent-content shadow-sm">
          <div className="text-xs uppercase tracking-[0.2em] opacity-70">Preset</div>
          <div className="mt-2 text-2xl font-black">{content.value}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          size="sm"
          color="primary"
          onClick={() => {
            content.value = 'Rue Design'
            rotate.value = -22
            gapX.value = 120
            gapY.value = 96
            offsetX.value = 48
            offsetY.value = 48
            fontSize.value = 18
            zIndex.value = 12
            color.value = 'rgba(15, 23, 42, 0.16)'
          }}
        >
          重置参数
        </Button>

        <Button
          size="sm"
          type="outlined"
          onClick={() => {
            content.value = 'Shared with Partner'
            rotate.value = -8
            gapX.value = 156
            gapY.value = 124
            offsetX.value = 64
            offsetY.value = 32
            fontSize.value = 14
            zIndex.value = 10
            color.value = 'rgba(20, 83, 45, 0.16)'
          }}
        >
          切换到稀疏模式
        </Button>
      </div>
    </div>
  </Watermark>

  <Card className="bg-base-100 shadow-sm">
    <Card.Body className="gap-4">
      <div>
        <div className="text-sm font-semibold text-base-content">文本</div>
        <input
          className="input input-bordered mt-2 w-full"
          value={content.value}
          onInput={(event: Event) => {
            content.value = (event.currentTarget as HTMLInputElement).value
          }}
        />
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-base-content">Rotate {rotate.value}</span>
        <input
          className="range range-sm"
          type="range"
          min="-90"
          max="90"
          value={String(rotate.value)}
          onInput={(event: Event) => {
            rotate.value = Number((event.currentTarget as HTMLInputElement).value)
          }}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-base-content">Font size {fontSize.value}</span>
        <input
          className="range range-sm"
          type="range"
          min="12"
          max="28"
          value={String(fontSize.value)}
          onInput={(event: Event) => {
            fontSize.value = Number((event.currentTarget as HTMLInputElement).value)
          }}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-base-content">Gap X {gapX.value}</span>
        <input
          className="range range-sm"
          type="range"
          min="72"
          max="180"
          value={String(gapX.value)}
          onInput={(event: Event) => {
            gapX.value = Number((event.currentTarget as HTMLInputElement).value)
          }}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-base-content">Gap Y {gapY.value}</span>
        <input
          className="range range-sm"
          type="range"
          min="72"
          max="180"
          value={String(gapY.value)}
          onInput={(event: Event) => {
            gapY.value = Number((event.currentTarget as HTMLInputElement).value)
          }}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-base-content">Offset X {offsetX.value}</span>
        <input
          className="range range-sm"
          type="range"
          min="0"
          max="120"
          value={String(offsetX.value)}
          onInput={(event: Event) => {
            offsetX.value = Number((event.currentTarget as HTMLInputElement).value)
          }}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-base-content">Offset Y {offsetY.value}</span>
        <input
          className="range range-sm"
          type="range"
          min="0"
          max="120"
          value={String(offsetY.value)}
          onInput={(event: Event) => {
            offsetY.value = Number((event.currentTarget as HTMLInputElement).value)
          }}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-base-content">z-index {zIndex.value}</span>
        <input
          className="range range-sm"
          type="range"
          min="1"
          max="24"
          value={String(zIndex.value)}
          onInput={(event: Event) => {
            zIndex.value = Number((event.currentTarget as HTMLInputElement).value)
          }}
        />
      </label>

      <div>
        <div className="text-sm font-medium text-base-content">Color</div>
        <input
          className="input input-bordered mt-2 w-full"
          value={color.value}
          onInput={(event: Event) => {
            color.value = (event.currentTarget as HTMLInputElement).value
          }}
        />
      </div>
    </Card.Body>
  </Card>
</div>`});s(()=>h(e,i,z))});let B=e(`h2`,i);c(i,B),c(B,f(`API`));let V=u(`rue:component:anchor`);return c(i,V),l(()=>{let e=g(le,{rows:ce});s(()=>h(e,i,V))}),r})}),i,_),i})};export{ue as default};