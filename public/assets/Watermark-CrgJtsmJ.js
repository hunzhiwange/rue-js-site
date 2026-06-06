import{$ as e,Et as t,G as n,H as r,K as i,Ot as a,Tt as o,W as s,_t as c,d as l,k as u,kt as d,l as f,q as p,t as m,tt as h,xt as g}from"./vapor-runtime-ACs_OvwU.js";import{a as _,n as v}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as y,t as b}from"./src-B0RvnZVV.js";import{n as x}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as S}from"./button-C6eHAAtW.js";import{t as C}from"./card-DEH9g--0.js";import{t as w}from"./badge-BuRROX_W.js";import{t as T}from"./PreviewBlock-BkL9wNXA.js";var E=100,D=100,O=9,k=1,A=`rgba(15, 23, 42, 0.14)`,j=`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,M=120,N=64,P=32,F=24,I=(...e)=>e.filter(Boolean).join(` `),L=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},R=e=>e.startsWith(`--`)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),z=e=>Object.entries(e).filter(([,e])=>e!==void 0).map(([e,t])=>`${R(e)}: ${String(t)}`).join(`; `),B=(e,t)=>{let n=z(e);if(!t)return n;if(typeof t==`string`)return n?`${n}; ${t}`:t;let r=z(t);return n?r?`${n}; ${r}`:n:r},V=(e,t,n)=>Math.min(n,Math.max(t,e)),H=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&apos;`),U=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=Number.parseFloat(e);if(Number.isFinite(t))return e.endsWith(`rem`)?t*16:t}return 16},W=e=>e==null?[]:(Array.isArray(e)?e:[e]).flatMap(e=>String(e).split(/\r?\n/)),G=e=>e.some(e=>e.trim().length>0),K=(e,t,n,r,i)=>{let a=U(t.fontSize),o=Math.max(Math.round(a*1.45),a+6);if(i)return{markWidth:Math.max(n??M,P),markHeight:Math.max(r??N,F),lineHeight:o,fontSizePx:a};if(n!=null&&r!=null)return{markWidth:Math.max(n,P),markHeight:Math.max(r,F),lineHeight:o,fontSizePx:a};let s=t.fontFamily??j,c=t.fontWeight??`normal`,l=t.fontStyle&&t.fontStyle!==`none`?t.fontStyle:`normal`,u=0;if(typeof document<`u`){let t=document.createElement(`canvas`).getContext(`2d`);t&&(t.font=`${l} ${c} ${a}px ${s}`,u=Math.ceil(e.reduce((e,n)=>Math.max(e,t.measureText(n).width),0)))}u||=Math.ceil(e.reduce((e,t)=>Math.max(e,t.length*a*.62),0));let d=Math.max(e.length,1),f=Math.ceil(a+(d-1)*o);return{markWidth:Math.max(n??u,P),markHeight:Math.max(r??f,F),lineHeight:o,fontSizePx:a}},q=e=>{switch(e){case`left`:case`start`:return{anchor:`start`,xRatio:0};case`right`:case`end`:return{anchor:`end`,xRatio:1};default:return{anchor:`middle`,xRatio:.5}}},J=(e,t,n)=>{let r=e/2,i=t/2,a=n?.[0]??r,o=n?.[1]??i,s=a-r,c=o-i,l=`0px`,u=`0px`,d=`100%`,f=`100%`;return s>0&&(l=`${s}px`,d=`calc(100% - ${s}px)`,s=0),c>0&&(u=`${c}px`,f=`calc(100% - ${c}px)`,c=0),{left:l,top:u,width:d,height:f,backgroundPosition:`${s}px ${c}px`}},Y=({image:e,lines:t,rotate:n,font:r,gapX:i,gapY:a,dimensions:o,opacity:s})=>{let{markWidth:c,markHeight:l,lineHeight:u,fontSizePx:d}=o,f=c+i,p=l+a,m=i/2,h=a/2,g=m+c/2,_=h+l/2,v=r.color??A,y=r.fontWeight??`normal`,b=r.fontStyle&&r.fontStyle!==`none`?r.fontStyle:`normal`,x=r.fontFamily??j,{anchor:S,xRatio:C}=q(r.textAlign),w=``;if(e)w=`<image href="${H(e)}" x="${m}" y="${h}" width="${c}" height="${l}" preserveAspectRatio="xMidYMid meet" />`;else{let e=d+(Math.max(t.length,1)-1)*u,n=h+Math.max((l-e)/2,0),r=m+c*C;w=t.map((e,t)=>`<text x="${r}" y="${n+t*u}" fill="${H(v)}" font-size="${d}" font-weight="${H(String(y))}" font-style="${H(b)}" font-family="${H(x)}" text-anchor="${S}" dominant-baseline="hanging">${H(e)}</text>`).join(``)}let T=`<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${p}" viewBox="0 0 ${f} ${p}"><g opacity="${s}" transform="rotate(${n} ${g} ${_})">${w}</g></svg>`;return{url:`url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(T)}")`,tileWidth:f,tileHeight:p}},X=({zIndex:e,rotate:t=-22,width:n,height:r,image:i,content:s,font:c={},className:l,rootClassName:d,overlayClassName:f,style:p,overlayStyle:m,gap:h=[E,D],offset:g,opacity:_=k,children:v,inherit:x=!0,...S})=>{let C=S.ref,w=o(null),T=o(null);`ref`in S&&delete S.ref;let A=W(s),[j=E,M=D]=h,N=!!i||G(A),P=K(A,c,n,r,i),F=J(j,M,g),R=V(_,0,1),z=N?Y({image:i,lines:A.length?A:[``],rotate:t,font:c,gapX:j,gapY:M,dimensions:P,opacity:R}):null,H={position:p?.position??`relative`,overflow:p?.overflow??`hidden`,isolation:p?.isolation??`isolate`};z?(H[`--rue-watermark-image`]=z.url,H[`--rue-watermark-size`]=`${z.tileWidth}px ${z.tileHeight}px`,H[`--rue-watermark-position`]=F.backgroundPosition,H[`--rue-watermark-left`]=F.left,H[`--rue-watermark-top`]=F.top,H[`--rue-watermark-width`]=F.width,H[`--rue-watermark-height`]=F.height,H[`--rue-watermark-z-index`]=String(e??O)):x||(H[`--rue-watermark-image`]=`none`,H[`--rue-watermark-size`]=`auto`,H[`--rue-watermark-position`]=`0px 0px`,H[`--rue-watermark-left`]=`0px`,H[`--rue-watermark-top`]=`0px`,H[`--rue-watermark-width`]=`100%`,H[`--rue-watermark-height`]=`100%`,H[`--rue-watermark-z-index`]=`0`);let U=B(H,p),q=B({position:`absolute`,left:z?F.left:`var(--rue-watermark-left, 0px)`,top:z?F.top:`var(--rue-watermark-top, 0px)`,width:z?F.width:`var(--rue-watermark-width, 100%)`,height:z?F.height:`var(--rue-watermark-height, 100%)`,pointerEvents:`none`,backgroundRepeat:`repeat`,backgroundImage:z?z.url:x?`var(--rue-watermark-image, none)`:`none`,backgroundSize:z?`${z.tileWidth}px ${z.tileHeight}px`:x?`var(--rue-watermark-size, auto)`:`auto`,backgroundPosition:z?F.backgroundPosition:x?`var(--rue-watermark-position, 0px 0px)`:`0px 0px`,zIndex:z?e??O:x?`var(--rue-watermark-z-index, 9)`:0},m),X=(e,t)=>{e&&(t?e.setAttribute(`style`,t):e.removeAttribute(`style`))},Z=e=>{w.current=e,X(e,U),L(C,e)},Q=e=>{T.current=e,X(e,q)};return u(()=>{X(w.current,U),X(T.current,q)}),a(()=>U,e=>{X(w.current,e)},{immediate:!0}),a(()=>q,e=>{X(T.current,e)},{immediate:!0}),y(`div`,{...S,ref:Z,className:I(`rue-watermark`,l,d),"data-rue-watermark-root":`true`,"data-rue-watermark-inherit":x?`true`:`false`,children:[b(`div`,{"aria-hidden":`true`,ref:Q,className:I(`rue-watermark-overlay`,f),"data-rue-watermark-overlay":`true`}),v]})},Z=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22196%22%20height%3D%2272%22%20viewBox%3D%220%200%20196%2072%22%3E%3Crect%20width%3D%22196%22%20height%3D%2272%22%20rx%3D%2218%22%20fill%3D%22%230f172a%22%2F%3E%3Cpath%20d%3D%22M30%2019h22c12%200%2019%206%2019%2017%200%2011-7%2017-19%2017H45v14H30V19Zm22%2022c4%200%206-2%206-5s-2-5-6-5H45v10h7Zm35-22h15l10%2031%2010-31h15l-17%2048H104L87%2019Zm60%200h18l15%2048h-15l-2.2-7.5h-13.7L147%2067h-15l15-48Zm13%2029-4-14-4%2014h8Z%22%20fill%3D%22%23f8fafc%22%2F%3E%3C%2Fsvg%3E`,Q=[{label:`共享链接`,value:`1.8k`,detail:`过去 24 小时`},{label:`导出快照`,value:`312`,detail:`包含 38 个外部成员`},{label:`访问终端`,value:`57`,detail:`待二次确认设备 5 台`}],$=[{prop:`content`,description:`文字水印内容，支持字符串或多行数组。`,type:`string | string[]`,defaultValue:`-`},{prop:`image`,description:`图片水印地址，适合 logo、签章、业务标记。`,type:`string`,defaultValue:`-`},{prop:`font`,description:`文字水印的颜色、字号、字重、字体和对齐方式。`,type:`{ color?: string; fontSize?: number | string; fontWeight?: number | string; fontStyle?: string; fontFamily?: string; textAlign?: string }`,defaultValue:`{ color: rgba(15,23,42,0.14), fontSize: 16 }`},{prop:`rotate`,description:`单个水印块的旋转角度。`,type:`number`,defaultValue:`-22`},{prop:`width / height`,description:`单个水印内容块的尺寸；不传时文本会按内容估算。`,type:`number`,defaultValue:`文本自动测量 / 图片 120 x 64`},{prop:`gap`,description:`水印块之间的水平与垂直间距。`,type:`[number, number]`,defaultValue:`[100, 100]`},{prop:`offset`,description:`起始铺设偏移量，便于与卡片头部或图像对齐。`,type:`[number, number]`,defaultValue:`[gapX / 2, gapY / 2]`},{prop:`zIndex`,description:`覆盖层层级，保持视觉上方但不阻断交互。`,type:`number`,defaultValue:`9`},{prop:`inherit`,description:`是否让后代 Watermark 复用当前图案与铺设参数。`,type:`boolean`,defaultValue:`true`},{prop:`className / rootClassName`,description:`根容器类名，便于直接叠加 Rue 的布局与视觉类。`,type:`string`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`覆盖层类名和样式，适合与圆角、混合模式、局部调优配合。`,type:`string / any`,defaultValue:`-`},{prop:`style`,description:`根容器行内样式；默认会自动补 position、overflow、isolation。`,type:`any`,defaultValue:`-`}],ee=t=>l(a=>{let o=i(`div`,a);h(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=i(`table`,o);r(o,c),h(c,`table table-zebra`);let u=i(`thead`,c);r(c,u);let m=i(`tr`,u);r(u,m);let _=i(`th`,m);r(m,_),r(_,p(`属性`));let y=i(`th`,m);r(m,y),r(y,p(`说明`));let b=i(`th`,m);r(m,b),r(b,p(`类型`));let x=i(`th`,m);r(m,x),r(x,p(`默认值`));let S=i(`tbody`,c);r(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return d(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,a,o,c,u)=>{f(l(()=>{let a=n(),o=i(`tr`,a);r(a,o),d(()=>{e(o,`key`,String(t.prop))});let c=i(`td`,o);r(o,c);let l=i(`code`,c);r(c,l);let u=s(`rue:slot:anchor`);r(l,u),d(()=>{let e=t.prop;g(()=>f(e,l,u))});let p=i(`td`,o);r(o,p);let m=s(`rue:slot:anchor`);r(p,m),d(()=>{let e=t.description;g(()=>f(e,p,m))});let h=i(`td`,o);r(o,h);let _=i(`code`,h);r(h,_);let v=s(`rue:slot:anchor`);r(_,v),d(()=>{let e=t.type;g(()=>f(e,_,v))});let y=i(`td`,o);r(o,y);let b=i(`code`,y);r(y,b);let x=s(`rue:slot:anchor`);return r(b,x),d(()=>{let e=t.defaultValue;g(()=>f(e,b,x))}),a}),a,o)}})}),o}),te=()=>{let{tabs:e,content:a,rotate:o,gapX:u,gapY:v,offsetX:E,offsetY:D,fontSize:O,zIndex:k,color:A}=_(`useSetup:0:0`,()=>t(()=>({tabs:{basic:_(`ref:1:0`,()=>c(`preview`)),multiline:_(`ref:1:1`,()=>c(`preview`)),image:_(`ref:1:2`,()=>c(`preview`)),inherit:_(`ref:1:3`,()=>c(`preview`)),custom:_(`ref:1:4`,()=>c(`preview`))},content:_(`ref:1:5`,()=>c(`Rue Design`)),rotate:_(`ref:1:6`,()=>c(-22)),gapX:_(`ref:1:7`,()=>c(120)),gapY:_(`ref:1:8`,()=>c(96)),offsetX:_(`ref:1:9`,()=>c(48)),offsetY:_(`ref:1:10`,()=>c(48)),fontSize:_(`ref:1:11`,()=>c(18)),zIndex:_(`ref:1:12`,()=>c(12)),color:_(`ref:1:13`,()=>c(`rgba(15, 23, 42, 0.16)`))})));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),f(m(x,{children:l(()=>{let t=n(),c=i(`div`,t);r(t,c),h(c,`max-w-none prose prose-sm md:prose-base`);let l=i(`h1`,c);r(c,l),r(l,p(`Watermark 水印`));let _=i(`p`,c);r(c,_),h(_,`mt-3 mb-3 text-sm`),r(_,p(`Rue 的 Watermark 不照搬其他组件库的视觉，而是把能力落成更适合当前设计站点的轻量覆盖层。 你可以直接给任意容器加文字或图片水印，同时保留按钮、卡片、统计区这些内容本身的交互。`));let x=i(`h2`,c);r(c,x),r(x,p(`何时使用`));let j=i(`ul`,c);r(c,j);let M=i(`li`,j);r(j,M),r(M,p(`需要给卡片、报表、详情页加上“内部预览”“草稿”“仅限共享”等视觉标记。`));let N=i(`li`,j);r(j,N),r(N,p(`需要图片或文字水印覆盖在任意内容上，但又不希望阻断按钮、链接和表单的交互。`));let P=i(`li`,j);r(j,P),r(P,p(`需要局部容器继承上层水印图案，而不是为每一块内容重复写一遍配置。`));let F=s(`rue:component:anchor`);r(c,F),d(()=>{let t=m(T,{title:`Basic text watermark`,summary:`最直接的用法：给一个内容容器加上文本水印，按钮仍然可以正常点击。`,tab:e.basic,preview:b(X,{content:`Rue Design`,className:`rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:y(`div`,{className:`grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-8`,children:[y(`div`,{className:`space-y-4`,children:[b(w,{variant:`secondary`,children:`Internal Preview`}),b(`h3`,{className:`m-0 text-3xl font-black tracking-tight text-base-content md:text-4xl`,children:`协作面板正在生成新一轮可共享快照`}),b(`p`,{className:`m-0 max-w-2xl text-sm leading-7 text-base-content/70`,children:`水印覆盖层默认在视觉上方，但采用 pointer-events none，不会挡住卡片、按钮和其它交互控件。`}),y(`div`,{className:`flex flex-wrap gap-3`,children:[b(S,{color:`primary`,children:`导出摘要`}),b(S,{type:`outlined`,children:`查看访问日志`})]})]}),b(C,{className:`bg-base-100/85 shadow-sm backdrop-blur-sm`,children:b(C.Body,{className:`gap-4`,children:Q.map(e=>y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100/70 px-4 py-3`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] text-base-content/50`,children:e.label}),b(`div`,{className:`mt-2 text-2xl font-bold text-base-content`,children:e.value}),b(`div`,{className:`mt-1 text-sm text-base-content/60`,children:e.detail})]},e.label))})})]})}),code:`const stats = [
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
</Watermark>`});g(()=>f(t,c,F))});let I=s(`rue:component:anchor`);r(c,I),d(()=>{let t=m(T,{title:`Multiline typography and tuned spacing`,summary:`支持多行内容、字族和铺设参数调优，更适合仪表盘、稿件和审批流页面。`,tab:e.multiline,preview:b(X,{content:[`Confidential Build`,`Rue Design System`],rotate:-16,gap:[132,116],width:168,height:72,font:{color:`rgba(13, 22, 39, 0.15)`,fontSize:15,fontWeight:700,fontFamily:`Georgia, Times New Roman, serif`,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.88))] shadow-sm`,children:y(`div`,{className:`grid gap-4 p-5 md:grid-cols-3 md:p-6`,children:[b(C,{className:`bg-base-100/90 shadow-sm`,children:y(C.Body,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`Draft`}),b(`div`,{className:`text-lg font-semibold text-base-content`,children:`产品评审结论`}),b(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`用多行水印把容器语义说清楚，而不是只放一个模糊 logo。`})]})}),b(C,{className:`bg-base-100/90 shadow-sm md:col-span-2`,children:y(C.Body,{className:`gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.16em] text-base-content/45`,children:`Access Scope`}),b(`div`,{className:`text-xl font-semibold text-base-content`,children:`仅限设计与法务同步窗口`})]}),b(w,{outline:!0,children:`Version 15`})]}),b(`p`,{className:`m-0 text-sm leading-7 text-base-content/65`,children:`通过 width、height、gap 和 font 组合，可以让文字块更像“签章”而不是背景噪音。`})]})})]})}),code:`<Watermark
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
</Watermark>`});g(()=>f(t,c,I))});let L=s(`rue:component:anchor`);r(c,L),d(()=>{let t=m(T,{title:`Image watermark`,summary:`图片模式适合品牌 logo、部门印记或业务章；Rue 这边建议把它用在局部容器，而不是整页满屏。`,tab:e.image,preview:b(X,{image:Z,width:156,height:58,rotate:-18,gap:[140,112],className:`rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`grid gap-5 p-5 md:grid-cols-[minmax(0,1fr)_18rem] md:p-6`,children:[b(C,{className:`overflow-hidden bg-base-200/70 shadow-none`,children:y(C.Body,{className:`gap-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`Media Kit`}),b(`div`,{className:`text-2xl font-semibold text-base-content`,children:`品牌资产导出包`}),b(`p`,{className:`m-0 text-sm leading-7 text-base-content/65`,children:`图片水印不会吞掉原内容的层级信息，更适合 logo、组织印章和明确的来源标识。`})]})}),y(`div`,{className:`rounded-[1.25rem] bg-gradient-to-br from-neutral to-slate-900 p-5 text-neutral-content shadow-sm`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-70`,children:`Delivery`}),b(`div`,{className:`mt-4 text-3xl font-black`,children:`5 Files`}),b(`div`,{className:`mt-2 text-sm leading-6 opacity-75`,children:`SVG / PDF / PNG / dark / light`})]})]})}),code:`const logo = 'https://dummyimage.com/312x116/0f172a/f8fafc.png&text=RUE'

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
</Watermark>`});g(()=>f(t,c,L))});let R=s(`rue:component:anchor`);r(c,R),d(()=>{let t=m(T,{title:`Inherited local scope`,summary:`父级配置一次，子级局部容器可以继续复用；不想继承时再显式关掉。`,tab:e.inherit,preview:b(X,{content:[`Team Only`,`Rue Preview`],rotate:-14,width:148,height:64,gap:[128,108],className:`rounded-[1.75rem] border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`grid gap-4 p-5 md:grid-cols-2 md:p-6`,children:[b(X,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-100/80`,children:y(`div`,{className:`space-y-3 p-4`,children:[b(`div`,{className:`text-sm font-semibold text-base-content`,children:`继承父级水印`}),b(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`这个局部容器没有重新写 content 和 image，会直接复用外层图案与铺设参数。`})]})}),b(X,{inherit:!1,className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/60`,children:y(`div`,{className:`space-y-3 p-4`,children:[b(`div`,{className:`text-sm font-semibold text-base-content`,children:`关闭继承`}),b(`p`,{className:`m-0 text-sm leading-6 text-base-content/65`,children:`当局部容器不需要上层水印时，直接把 inherit 设为 false 即可回到纯净内容区。`})]})})]})}),code:`<Watermark
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
</Watermark>`});g(()=>f(t,c,R))});let z=s(`rue:component:anchor`);r(c,z),d(()=>{let t=m(T,{title:`Custom controls`,summary:`把可调 demo 落到 Rue 风格里，用原生表单快速调整排版参数。`,tab:e.custom,preview:y(`div`,{className:`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`,children:[b(X,{content:[a.value,`Scenario Sandbox`],rotate:o.value,gap:[u.value,v.value],offset:[E.value,D.value],zIndex:k.value,width:180,height:72,font:{color:A.value,fontSize:O.value,fontWeight:700,textAlign:`center`},className:`rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200 shadow-sm`,children:y(`div`,{className:`space-y-4 p-5 md:p-6`,children:[y(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`Scenario Sandbox`}),b(`div`,{className:`mt-2 text-2xl font-semibold text-base-content`,children:`参数调整后的实时预览`})]}),y(w,{outline:!0,children:[`z-index `,k.value]})]}),b(`p`,{className:`m-0 max-w-2xl text-sm leading-7 text-base-content/65`,children:`这里故意放了文字、徽标和按钮，方便观察水印对不同内容密度与层次关系的影响。`}),y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(C,{className:`bg-base-100/90 shadow-sm md:col-span-2`,children:y(C.Body,{children:[b(`div`,{className:`text-sm font-semibold text-base-content`,children:`内容流`}),b(`p`,{className:`m-0 text-sm leading-7 text-base-content/65`,children:`Rue Watermark 会把铺设逻辑限制在当前容器内部，圆角、阴影和内容布局都可以继续由宿主容器控制。`})]})}),y(`div`,{className:`rounded-[1.25rem] bg-accent px-4 py-5 text-accent-content shadow-sm`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-70`,children:`Preset`}),b(`div`,{className:`mt-2 text-2xl font-black`,children:a.value})]})]}),y(`div`,{className:`flex flex-wrap gap-3`,children:[b(S,{size:`sm`,color:`primary`,onClick:()=>{a.value=`Rue Design`,o.value=-22,u.value=120,v.value=96,E.value=48,D.value=48,O.value=18,k.value=12,A.value=`rgba(15, 23, 42, 0.16)`},children:`重置参数`}),b(S,{size:`sm`,type:`outlined`,onClick:()=>{a.value=`Shared with Partner`,o.value=-8,u.value=156,v.value=124,E.value=64,D.value=32,O.value=14,k.value=10,A.value=`rgba(20, 83, 45, 0.16)`},children:`切换到稀疏模式`})]})]})}),b(C,{className:`bg-base-100 shadow-sm`,children:y(C.Body,{className:`gap-4`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-semibold text-base-content`,children:`文本`}),b(`input`,{className:`input input-bordered mt-2 w-full`,value:a.value,onInput:e=>{a.value=e.currentTarget.value}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Rotate `,o.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`-90`,max:`90`,value:String(o.value),onInput:e=>{o.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Font size `,O.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`12`,max:`28`,value:String(O.value),onInput:e=>{O.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Gap X `,u.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`72`,max:`180`,value:String(u.value),onInput:e=>{u.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Gap Y `,v.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`72`,max:`180`,value:String(v.value),onInput:e=>{v.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Offset X `,E.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`0`,max:`120`,value:String(E.value),onInput:e=>{E.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`Offset Y `,D.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`0`,max:`120`,value:String(D.value),onInput:e=>{D.value=Number(e.currentTarget.value)}})]}),y(`label`,{className:`grid gap-2`,children:[y(`span`,{className:`text-sm font-medium text-base-content`,children:[`z-index `,k.value]}),b(`input`,{className:`range range-sm`,type:`range`,min:`1`,max:`24`,value:String(k.value),onInput:e=>{k.value=Number(e.currentTarget.value)}})]}),y(`div`,{children:[b(`div`,{className:`text-sm font-medium text-base-content`,children:`Color`}),b(`input`,{className:`input input-bordered mt-2 w-full`,value:A.value,onInput:e=>{A.value=e.currentTarget.value}})]})]})})]}),code:`const content = ref('Rue Design')
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
</div>`});g(()=>f(t,c,z))});let B=i(`h2`,c);r(c,B),r(B,p(`API`));let V=s(`rue:component:anchor`);return r(c,V),d(()=>{let e=m(ee,{rows:$});g(()=>f(e,c,V))}),t})}),c,_),c})};export{te as default};