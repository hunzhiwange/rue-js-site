import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,b as o,et as s,l as c,lt as l,o as u,p as d,pt as f,st as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v,n as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as b,i as x}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as S}from"./button-CeShl0h_.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as w}from"./PreviewBlock-RQJhyX9w.js";var T=`暂无数据`,E=(e,t)=>e?t?`${e} ${t}`:e:t??``,D=(...e)=>Object.assign({},...e.filter(Boolean)),O=`text-base-content`,k=`text-primary`,A=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),j=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),M=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{switch(e){case`small`:return`sm`;case`large`:return`lg`;case`default`:return`md`;case`sm`:case`lg`:return e;default:return`md`}},P=e=>{switch(e){case`soft`:return`border border-base-300/60 bg-base-200/55 shadow-inner`;case`outline`:return`border border-dashed border-base-300/75 bg-base-100/45 shadow-none`;default:return`border border-base-300/70 bg-base-100 shadow-[0_28px_70px_-48px_hsl(var(--bc)/0.24)]`}},F=e=>{switch(e){case`sm`:return`rounded-[1.5rem] px-4 py-5`;case`lg`:return`rounded-[2rem] px-8 py-9`;default:return`rounded-[1.75rem] px-6 py-7`}},I=e=>{switch(e){case`sm`:return`gap-3`;case`lg`:return`gap-5`;default:return`gap-4`}},L=e=>{switch(e){case`sm`:return`text-sm leading-6`;case`lg`:return`text-base leading-7`;default:return`text-sm leading-6 sm:text-[0.95rem]`}},R=e=>e===`start`?`flex flex-wrap items-center justify-start gap-3`:`flex flex-wrap items-center justify-center gap-3`,z=e=>{switch(e){case`sm`:return`w-[9.5rem]`;case`lg`:return`w-[16rem]`;default:return`w-[12rem]`}},B=(e,t)=>{if(t===`simple`)switch(e){case`sm`:return`w-[6.5rem]`;case`lg`:return`w-[9.5rem]`;default:return`w-[8rem]`}switch(e){case`sm`:return`w-[9rem]`;case`lg`:return`w-[14rem]`;default:return`w-[11rem]`}},V=(e,t)=>typeof t==`string`&&t.trim()?t:typeof e==`string`||typeof e==`number`?String(e):`empty`,H=e=>{let{normalizedSize:t,widthClass:r}=v(`useSetup:0:0`,()=>a(()=>{let t=v(`computed:1:0`,()=>g(()=>N(e.size))),n=t;return{normalizedSize:t,widthClass:v(`computed:1:1`,()=>g(()=>B(n.get(),`default`)))}}));return c(t=>{let a=s(`svg`,t);p(a,`viewBox`,`0 0 220 164`),p(a,`fill`,`none`),p(a,`xmlns`,`http://www.w3.org/2000/svg`),n(()=>{l(a,E(`${r.get()} h-auto`,e.className))}),n(()=>{let t=e.style;f(a,t)}),p(a,`data-rue-empty-illustration`,`default`),p(a,`aria-hidden`,`true`);let o=s(`rect`,a);i(a,o),p(o,`x`,`18`),p(o,`y`,`38`),p(o,`width`,`184`),p(o,`height`,`98`),p(o,`rx`,`26`),n(()=>{l(o,O)}),n(()=>{f(o,A(6))});let c=s(`rect`,a);i(a,c),p(c,`x`,`18.75`),p(c,`y`,`38.75`),p(c,`width`,`182.5`),p(c,`height`,`96.5`),p(c,`rx`,`25.25`),n(()=>{l(c,O)}),n(()=>{f(c,j(14))}),p(c,`strokeWidth`,`1.5`);let u=s(`rect`,a);i(a,u),p(u,`x`,`49`),p(u,`y`,`24`),p(u,`width`,`122`),p(u,`height`,`18`),p(u,`rx`,`9`),n(()=>{l(u,O)}),n(()=>{f(u,A(10))});let d=s(`rect`,a);i(a,d),p(d,`x`,`52`),p(d,`y`,`63`),p(d,`width`,`48`),p(d,`height`,`48`),p(d,`rx`,`18`),n(()=>{l(d,k)}),n(()=>{f(d,A(14))});let m=s(`circle`,a);i(a,m),p(m,`cx`,`82`),p(m,`cy`,`77.5`),p(m,`r`,`8`),n(()=>{l(m,k)}),n(()=>{f(m,A(36))});let h=s(`path`,a);i(a,h),p(h,`d`,`M67 96.5c8.4-11.5 15.7-17.2 22-17.2 6.6 0 14.4 6 23.4 18`),n(()=>{l(h,O)}),n(()=>{f(h,j(16))}),p(h,`strokeWidth`,`6`),p(h,`strokeLinecap`,`round`);let g=s(`rect`,a);i(a,g),p(g,`x`,`116`),p(g,`y`,`70`),p(g,`width`,`56`),p(g,`height`,`10`),p(g,`rx`,`5`),n(()=>{l(g,O)}),n(()=>{f(g,A(16))});let _=s(`rect`,a);i(a,_),p(_,`x`,`116`),p(_,`y`,`90`),p(_,`width`,`40`),p(_,`height`,`10`),p(_,`rx`,`5`),n(()=>{l(_,O)}),n(()=>{f(_,A(10))});let v=s(`rect`,a);i(a,v),p(v,`x`,`122`),p(v,`y`,`116`),p(v,`width`,`54`),p(v,`height`,`8`),p(v,`rx`,`4`),n(()=>{l(v,k)}),n(()=>{f(v,A(14))});let y=s(`circle`,a);i(a,y),p(y,`cx`,`180`),p(y,`cy`,`54`),p(y,`r`,`10`),n(()=>{l(y,O)}),n(()=>{f(y,A(10))});let b=s(`path`,a);i(a,b),p(b,`d`,`M176 54h8M180 50v8`),n(()=>{l(b,k)}),n(()=>{f(b,j(66))}),p(b,`strokeWidth`,`3`),p(b,`strokeLinecap`,`round`);let x=s(`path`,a);return i(a,x),p(x,`d`,`M38 124c12.2-7.3 22.4-11 30.6-11 8.5 0 19.6 4.6 33.4 13.8`),n(()=>{l(x,O)}),n(()=>{f(x,j(10))}),p(x,`strokeWidth`,`4`),p(x,`strokeLinecap`,`round`),a})},U=e=>{let{normalizedSize:t,widthClass:r}=v(`useSetup:0:0:dup1`,()=>a(()=>{let t=v(`computed:1:2`,()=>g(()=>N(e.size))),n=t;return{normalizedSize:t,widthClass:v(`computed:1:3`,()=>g(()=>B(n.get(),`simple`)))}}));return c(t=>{let a=s(`svg`,t);p(a,`viewBox`,`0 0 120 120`),p(a,`fill`,`none`),p(a,`xmlns`,`http://www.w3.org/2000/svg`),n(()=>{l(a,E(`${r.get()} h-auto`,e.className))}),n(()=>{let t=e.style;f(a,t)}),p(a,`data-rue-empty-illustration`,`simple`),p(a,`aria-hidden`,`true`);let o=s(`circle`,a);i(a,o),p(o,`cx`,`60`),p(o,`cy`,`60`),p(o,`r`,`34`),n(()=>{l(o,O)}),n(()=>{f(o,A(6))});let c=s(`circle`,a);i(a,c),p(c,`cx`,`60`),p(c,`cy`,`60`),p(c,`r`,`34`),n(()=>{l(c,O)}),n(()=>{f(c,j(14))}),p(c,`strokeWidth`,`1.5`);let u=s(`circle`,a);i(a,u),p(u,`cx`,`60`),p(u,`cy`,`60`),p(u,`r`,`23`),n(()=>{l(u,k)}),n(()=>{f(u,j(36))}),p(u,`strokeWidth`,`8`);let d=s(`circle`,a);i(a,d),p(d,`cx`,`60`),p(d,`cy`,`60`),p(d,`r`,`6`),n(()=>{l(d,k)}),n(()=>{f(d,A(66))});let m=s(`path`,a);i(a,m),p(m,`d`,`M43 60h34`),n(()=>{l(m,O)}),n(()=>{f(m,j(16))}),p(m,`strokeWidth`,`6`),p(m,`strokeLinecap`,`round`);let h=s(`circle`,a);i(a,h),p(h,`cx`,`32`),p(h,`cy`,`45`),p(h,`r`,`4`),n(()=>{l(h,k)}),n(()=>{f(h,A(36))});let g=s(`circle`,a);return i(a,g),p(g,`cx`,`90`),p(g,`cy`,`78`),p(g,`r`,`4`),n(()=>{l(g,k)}),n(()=>{f(g,A(36))}),a})},W=({image:e,description:t,imageStyle:n,imageAlt:r,children:i,size:a,align:s=`center`,variant:c=`surface`,className:l,rootClassName:u,style:f,classNames:p,styles:m,role:h=`status`,...g})=>{let _=N(a),v=t===void 0?T:t,y=e===void 0?H:e,S=M(y),C=M(v),w=M(i),O=E(E(`rue-empty relative isolate overflow-hidden ${P(c)} ${F(_)}`,s===`start`?`text-left`:`text-center`),E(E(u,p?.root),l)),k=E(`${z(_)} max-w-full shrink-0`,p?.image),A=E(`max-w-[34rem] text-base-content/68 ${L(_)}`,p?.description),j=E(R(s),p?.footer),B=D(m?.root,f),W=D(m?.image,n),G=D(m?.description),K=D(m?.footer),q=typeof y==`string`?x(`img`,{src:y,alt:V(v,r),draggable:`false`,className:`block h-auto w-full object-contain`}):y===H||y===U?o(y,{size:_}):typeof y==`function`?o(y,{}):y;return o(`div`,{...g,role:h,className:O,style:B,"data-rue-empty":`true`,"data-rue-empty-align":s,"data-rue-empty-size":_,"data-rue-empty-variant":c},b(d,{children:[x(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-x-8 top-0 h-20 rounded-full bg-primary/10 blur-3xl`}),b(`div`,{className:E(`relative z-[1] flex ${I(_)} w-full flex-col`,s===`start`?`items-start`:`items-center`),children:[S?x(`div`,{"data-rue-empty-image":`true`,className:k,style:W,children:x(d,{children:q})}):null,C?x(`div`,{"data-rue-empty-description":`true`,className:A,style:G,children:x(d,{children:v})}):null,w?x(`div`,{"data-rue-empty-footer":`true`,className:j,style:K,children:x(d,{children:i})}):null]})]}))};W.PRESENTED_IMAGE_DEFAULT=H,W.PRESENTED_IMAGE_SIMPLE=U;var G=a=>c(o=>{let d=s(`div`,o);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=s(`table`,d);i(d,f),l(f,`table table-zebra`);let m=s(`thead`,f);i(f,m);let g=s(`tr`,m);i(m,g);let _=s(`th`,g);i(g,_),i(_,h(`属性`));let v=s(`th`,g);i(g,v),i(v,h(`说明`));let b=s(`th`,g);i(g,b),i(b,h(`类型`));let x=s(`th`,g);i(g,x),i(x,h(`默认值`));let S=s(`tbody`,f);i(f,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=y({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,o,l,d,f)=>{u(c(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{p(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let d=s(`code`,l);i(l,d);let f=t(`rue:slot:anchor`);i(d,f),n(()=>{let e=a.prop;r(()=>u(e,d,f))});let m=s(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>u(e,m,h))});let g=s(`td`,c);i(c,g);let _=s(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>u(e,_,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>u(e,b,x))}),o}),o,l)}})}),d}),K=`text-base-content`,q=`text-primary`,J=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),Y=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),X=()=>c(e=>{let t=s(`svg`,e);p(t,`viewBox`,`0 0 180 140`),p(t,`fill`,`none`),p(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`w-[12rem] max-w-full`);let r=s(`rect`,t);i(t,r),p(r,`x`,`18`),p(r,`y`,`22`),p(r,`width`,`144`),p(r,`height`,`96`),p(r,`rx`,`24`),n(()=>{l(r,K)}),n(()=>{f(r,J(8))});let a=s(`rect`,t);i(t,a),p(a,`x`,`18.75`),p(a,`y`,`22.75`),p(a,`width`,`142.5`),p(a,`height`,`94.5`),p(a,`rx`,`23.25`),n(()=>{l(a,K)}),n(()=>{f(a,Y(18))}),p(a,`strokeWidth`,`1.5`);let o=s(`rect`,t);i(t,o),p(o,`x`,`34`),p(o,`y`,`36`),p(o,`width`,`112`),p(o,`height`,`14`),p(o,`rx`,`7`),n(()=>{l(o,K)}),n(()=>{f(o,J(14))});let c=s(`rect`,t);i(t,c),p(c,`x`,`38`),p(c,`y`,`62`),p(c,`width`,`34`),p(c,`height`,`34`),p(c,`rx`,`12`),n(()=>{l(c,q)}),n(()=>{f(c,J(14))});let u=s(`rect`,t);i(t,u),p(u,`x`,`46`),p(u,`y`,`70`),p(u,`width`,`18`),p(u,`height`,`18`),p(u,`rx`,`9`),n(()=>{l(u,q)}),n(()=>{f(u,J(34))});let d=s(`rect`,t);i(t,d),p(d,`x`,`79`),p(d,`y`,`62`),p(d,`width`,`62`),p(d,`height`,`10`),p(d,`rx`,`5`),n(()=>{l(d,K)}),n(()=>{f(d,J(14))});let m=s(`rect`,t);i(t,m),p(m,`x`,`79`),p(m,`y`,`82`),p(m,`width`,`48`),p(m,`height`,`10`),p(m,`rx`,`5`),n(()=>{l(m,q)}),n(()=>{f(m,J(14))});let h=s(`path`,t);i(t,h),p(h,`d`,`M52 108c8.4-8.2 16.3-12.3 23.8-12.3 7.8 0 15.7 4.1 23.7 12.3`),n(()=>{l(h,K)}),n(()=>{f(h,Y(16))}),p(h,`strokeWidth`,`5`),p(h,`strokeLinecap`,`round`);let g=s(`circle`,t);i(t,g),p(g,`cx`,`132`),p(g,`cy`,`54`),p(g,`r`,`10`),n(()=>{l(g,K)}),n(()=>{f(g,J(14))});let _=s(`path`,t);return i(t,_),p(_,`d`,`M128 54h8M132 50v8`),n(()=>{l(_,q)}),n(()=>{f(_,Y(66))}),p(_,`strokeWidth`,`3`),p(_,`strokeLinecap`,`round`),t}),Z=v(`ref:1:0`,()=>_(`preview`)),Q=v(`ref:1:1`,()=>_(`preview`)),$=v(`ref:1:2`,()=>_(`preview`)),ee=v(`ref:1:3`,()=>_(`preview`)),te=[{prop:`image`,description:`空状态插画，支持字符串地址、预设插画组件函数或任意 JSX 节点。`,type:`string | FC | any`,defaultValue:`Empty.PRESENTED_IMAGE_DEFAULT`},{prop:`description`,description:`文案区，可传字符串、富文本节点；显式传 false / null 可隐藏。`,type:`any`,defaultValue:`暂无数据`},{prop:`children`,description:`底部动作区，适合放按钮、链接、过滤器重置等后续动作。`,type:`any`,defaultValue:`-`},{prop:`imageStyle / imageAlt`,description:`控制插画容器样式与 img 的 alt 文案，兼容字符串图片场景。`,type:`any / string`,defaultValue:`- / empty`},{prop:`size`,description:`统一调整容器、插画与文案尺度，支持 sm / md / lg 及 small / default / large 别名。`,type:`'sm' | 'md' | 'lg' | 'small' | 'default' | 'large'`,defaultValue:`md`},{prop:`align`,description:`内容布局方向，支持居中空态和左对齐嵌入式空态。`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`variant`,description:`Rue 风格表面层级，适合页面主空态、嵌入卡片与轻量占位区。`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`},{prop:`className / rootClassName / style`,description:`根节点扩展类名和样式，rootClassName 便于兼容旧代码中的根节点类名分工。`,type:`string / string / any`,defaultValue:`-`},{prop:`classNames / styles`,description:`语义插槽扩展，覆盖 root、image、description、footer 四个区域。`,type:`object / object`,defaultValue:`-`},{prop:`role`,description:`根节点无障碍角色，默认以 status 暴露空状态反馈。`,type:`string`,defaultValue:`status`}],ne=[{prop:`Empty.PRESENTED_IMAGE_DEFAULT`,description:`默认插画，适合页面级空状态。可直接作为 image 传入，或单独渲染。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`},{prop:`Empty.PRESENTED_IMAGE_SIMPLE`,description:`简洁插画，适合表格、筛选区和紧凑卡片。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`}],re=`import { Button, Empty } from '@rue-js/design'

<div className="rounded-[2rem] border border-base-300/70 bg-base-100 p-4 sm:p-6">
  <Empty description="当前筛选条件下还没有上线中的条目。你可以放宽条件，或者直接创建新内容。">
    <Button color="primary" size="sm">
      创建条目
    </Button>
    <Button type="outlined" size="sm">
      重置筛选
    </Button>
  </Empty>
</div>
`,ie=`import { Button, Empty } from '@rue-js/design'

<div className="grid gap-4 xl:grid-cols-3">
  <Empty size="sm" description="默认插画适合页面主体空态。" />

  <Empty
    size="sm"
    variant="soft"
    image={Empty.PRESENTED_IMAGE_SIMPLE}
    description="简洁插画适合表格、筛选或紧凑容器。"
  />

  <Empty
    size="sm"
    align="start"
    variant="outline"
    image={Empty.PRESENTED_IMAGE_SIMPLE}
    description="outline 更适合嵌入次级区域。"
  >
    <Button type="outlined" size="sm">
      查看模板
    </Button>
  </Empty>
</div>
`,ae=`import { Button, Empty } from '@rue-js/design'

const SVG_NEUTRAL_CLASS = 'text-base-content'
const SVG_ACCENT_CLASS = 'text-primary'

const svgFillMixStyle = (strength: number) => ({
  fill: \`color-mix(in oklab, currentColor \${strength}%, transparent)\`,
})

const svgStrokeMixStyle = (strength: number) => ({
  stroke: \`color-mix(in oklab, currentColor \${strength}%, transparent)\`,
})

const SyncRackIllustration = () => (
  <svg
    viewBox="0 0 180 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[12rem] max-w-full"
  >
    <rect
      x="18"
      y="22"
      width="144"
      height="96"
      rx="24"
      className={SVG_NEUTRAL_CLASS}
      style={svgFillMixStyle(8)}
    />
    <rect
      x="18.75"
      y="22.75"
      width="142.5"
      height="94.5"
      rx="23.25"
      className={SVG_NEUTRAL_CLASS}
      style={svgStrokeMixStyle(18)}
      strokeWidth="1.5"
    />
    <rect x="34" y="36" width="112" height="14" rx="7" className={SVG_NEUTRAL_CLASS} style={svgFillMixStyle(14)} />
    <rect x="38" y="62" width="34" height="34" rx="12" className={SVG_ACCENT_CLASS} style={svgFillMixStyle(14)} />
    <rect x="46" y="70" width="18" height="18" rx="9" className={SVG_ACCENT_CLASS} style={svgFillMixStyle(34)} />
    <rect x="79" y="62" width="62" height="10" rx="5" className={SVG_NEUTRAL_CLASS} style={svgFillMixStyle(14)} />
    <rect x="79" y="82" width="48" height="10" rx="5" className={SVG_ACCENT_CLASS} style={svgFillMixStyle(14)} />
    <path
      d="M52 108c8.4-8.2 16.3-12.3 23.8-12.3 7.8 0 15.7 4.1 23.7 12.3"
      className={SVG_NEUTRAL_CLASS}
      style={svgStrokeMixStyle(16)}
      strokeWidth="5"
      strokeLinecap="round"
    />
    <circle cx="132" cy="54" r="10" className={SVG_NEUTRAL_CLASS} style={svgFillMixStyle(14)} />
    <path
      d="M128 54h8M132 50v8"
      className={SVG_ACCENT_CLASS}
      style={svgStrokeMixStyle(66)}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

<div className="rounded-[2rem] border border-base-300/70 bg-base-100 p-6">
  <Empty
    align="start"
    size="large"
    image={<SyncRackIllustration />}
    description={
      <div className="space-y-2">
        <div className="text-base font-semibold text-base-content">同步队列还是空的</div>
        <div>把素材从个人工作台加入同步清单后，这里会自动生成批次并持续追踪状态。</div>
      </div>
    }
    classNames={{ footer: 'justify-start' }}
  >
    <Button color="primary">添加首批素材</Button>
    <Button type="outlined">查看同步规则</Button>
  </Empty>
</div>
`,oe=`import { Button, Empty } from '@rue-js/design'

<div className="grid gap-4 xl:grid-cols-2">
  <div className="rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4">
    <div className="mb-3 flex items-center justify-between text-sm text-base-content/65">
      <span>成员视图</span>
      <span className="badge badge-ghost badge-sm">0 records</span>
    </div>
    <Empty
      align="start"
      size="sm"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="筛选结果为空，先移除状态过滤器再试一次。"
      styles={{
        root: { paddingTop: '1.25rem', paddingBottom: '1.25rem' },
        description: { maxWidth: '18rem' },
      }}
      classNames={{ footer: 'justify-start' }}
    >
      <Button size="sm" type="outlined">
        清空筛选
      </Button>
    </Empty>
  </div>

  <div className="rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4">
    <div className="mb-3 flex items-center justify-between text-sm text-base-content/65">
      <span>素材库</span>
      <span className="badge badge-outline badge-sm">草稿区</span>
    </div>
    <Empty
      size="sm"
      variant="soft"
      image={false}
      description="这里也可以只保留文案与动作区，不一定强制带插画。"
      classNames={{
        root: 'border-0 bg-transparent px-0 py-2 shadow-none',
        footer: 'justify-start',
      }}
    >
      <Button size="sm" color="primary">
        上传文件
      </Button>
      <Button size="sm" type="outlined">
        从模板创建
      </Button>
    </Empty>
  </div>
</div>
`,se=()=>c(a=>{let o=e(),d=t(`rue:component:anchor`);return i(o,d),u(m(C,{children:c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`max-w-none prose prose-sm md:prose-base`);let c=s(`h1`,o);i(o,c),i(c,h(`Empty 空状态`));let d=s(`p`,o);i(o,d),l(d,`text-sm mt-3 mb-3`),i(d,h(`Empty 用来承接列表、筛选、面板和工作流中的无数据状态。它保留了 Rue 一贯的轻量卡片语言，同时补齐了空状态组件最核心的 image、description、children 和预设插画能力。`));let f=s(`p`,o);i(o,f),l(f,`text-sm opacity-75`),i(f,h(`这次不是在旧实现上打补丁，而是补了一个真正可复用的组件：默认插画适合页面主体，simple 插画适合嵌入式空态，语义插槽则方便你在卡片、筛选器、列表面板里继续细调样式。`));let p=t(`rue:component:anchor`);i(o,p),n(()=>{let e=m(w,{title:`基础空状态`,summary:`默认插画、文案和动作区已经能覆盖大多数页面级空态。`,tab:Z,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-4 sm:p-6`,children:b(W,{description:`当前筛选条件下还没有上线中的条目。你可以放宽条件，或者直接创建新内容。`,children:[x(S,{color:`primary`,size:`sm`,children:`创建条目`}),x(S,{type:`outlined`,size:`sm`,children:`重置筛选`})]})}),code:re});r(()=>u(e,o,p))});let g=t(`rue:component:anchor`);i(o,g),n(()=>{let e=m(w,{title:`预设插画与变体`,summary:`default 与 simple 两套预设插画覆盖页面主空态和紧凑容器；surface、soft、outline 对应不同层级。`,tab:Q,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[x(W,{size:`sm`,description:`默认插画适合页面主体空态。`}),x(W,{size:`sm`,variant:`soft`,image:W.PRESENTED_IMAGE_SIMPLE,description:`简洁插画适合表格、筛选或紧凑容器。`}),x(W,{size:`sm`,align:`start`,variant:`outline`,image:W.PRESENTED_IMAGE_SIMPLE,description:`outline 更适合嵌入次级区域。`,children:x(S,{type:`outlined`,size:`sm`,children:`查看模板`})})]}),code:ie});r(()=>u(e,o,g))});let _=t(`rue:component:anchor`);i(o,_),n(()=>{let e=m(w,{title:`自定义插画与左对齐布局`,summary:`需要更贴近业务语义时，可以直接传自定义节点，并切到 start 布局承接更多说明。`,tab:$,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-6`,children:b(W,{align:`start`,size:`large`,image:x(X,{}),description:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`text-base font-semibold text-base-content`,children:`同步队列还是空的`}),x(`div`,{children:`把素材从个人工作台加入同步清单后，这里会自动生成批次并持续追踪状态。`})]}),classNames:{footer:`justify-start`},children:[x(S,{color:`primary`,children:`添加首批素材`}),x(S,{type:`outlined`,children:`查看同步规则`})]})}),code:ae});r(()=>u(e,o,_))});let v=t(`rue:component:anchor`);i(o,v),n(()=>{let e=m(w,{title:`嵌入式空态与语义插槽`,summary:`classNames 和 styles 让 empty 可以自然嵌进列表、筛选面板和卡片，而不需要额外包一层 if。`,tab:ee,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`成员视图`}),x(`span`,{className:`badge badge-ghost badge-sm`,children:`0 records`})]}),x(W,{align:`start`,size:`sm`,image:W.PRESENTED_IMAGE_SIMPLE,description:`筛选结果为空，先移除状态过滤器再试一次。`,styles:{root:{paddingTop:`1.25rem`,paddingBottom:`1.25rem`},description:{maxWidth:`18rem`}},classNames:{footer:`justify-start`},children:x(S,{size:`sm`,type:`outlined`,children:`清空筛选`})})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`素材库`}),x(`span`,{className:`badge badge-outline badge-sm`,children:`草稿区`})]}),b(W,{size:`sm`,variant:`soft`,image:!1,description:`这里也可以只保留文案与动作区，不一定强制带插画。`,classNames:{root:`border-0 bg-transparent px-0 py-2 shadow-none`,footer:`justify-start`},children:[x(S,{size:`sm`,color:`primary`,children:`上传文件`}),x(S,{size:`sm`,type:`outlined`,children:`从模板创建`})]})]})]}),code:oe});r(()=>u(e,o,v))});let y=s(`h2`,o);i(o,y),i(y,h(`API`));let C=s(`p`,o);i(o,C),l(C,`text-sm opacity-75`),i(C,h(`保留易迁移的属性组织方式，同时补一层更贴近 Rue 页面编排的尺寸、变体和语义插槽。`));let T=t(`rue:component:anchor`);i(o,T),n(()=>{let e=m(G,{rows:te});r(()=>u(e,o,T))});let E=s(`h2`,o);i(o,E),i(E,h(`静态成员`));let D=s(`p`,o);i(o,D),l(D,`text-sm opacity-75`),i(D,h(`预设插画可以直接作为 image 传入，也可以在别的容器里独立复用。`));let O=t(`rue:component:anchor`);return i(o,O),n(()=>{let e=m(G,{rows:ne});r(()=>u(e,o,O))}),a})}),o,d),o});export{se as default};