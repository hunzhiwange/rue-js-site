import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,dt as l,gt as u,l as d,p as f,qt as p,s as m,st as h,t as g,x as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v,n as y}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as b,i as x}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as S}from"./button-CyhsFe_V.js";import{r as C}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as w}from"./PreviewBlock-DJFn4Hia.js";var T=`暂无数据`,E=(e,t)=>e?t?`${e} ${t}`:e:t??``,D=(...e)=>Object.assign({},...e.filter(Boolean)),O=`text-base-content`,k=`text-primary`,A=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),j=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),M=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{switch(e){case`small`:return`sm`;case`large`:return`lg`;case`default`:return`md`;case`sm`:case`lg`:return e;default:return`md`}},P=e=>{switch(e){case`soft`:return`border border-base-300/60 bg-base-200/55 shadow-inner`;case`outline`:return`border border-dashed border-base-300/75 bg-base-100/45 shadow-none`;default:return`border border-base-300/70 bg-base-100 shadow-[0_28px_70px_-48px_hsl(var(--bc)/0.24)]`}},F=e=>{switch(e){case`sm`:return`rounded-[1.5rem] px-4 py-5`;case`lg`:return`rounded-[2rem] px-8 py-9`;default:return`rounded-[1.75rem] px-6 py-7`}},I=e=>{switch(e){case`sm`:return`gap-3`;case`lg`:return`gap-5`;default:return`gap-4`}},L=e=>{switch(e){case`sm`:return`text-sm leading-6`;case`lg`:return`text-base leading-7`;default:return`text-sm leading-6 sm:text-[0.95rem]`}},R=e=>e===`start`?`flex flex-wrap items-center justify-start gap-3`:`flex flex-wrap items-center justify-center gap-3`,z=e=>{switch(e){case`sm`:return`w-[9.5rem]`;case`lg`:return`w-[16rem]`;default:return`w-[12rem]`}},B=(e,t)=>{if(t===`simple`)switch(e){case`sm`:return`w-[6.5rem]`;case`lg`:return`w-[9.5rem]`;default:return`w-[8rem]`}switch(e){case`sm`:return`w-[9rem]`;case`lg`:return`w-[14rem]`;default:return`w-[11rem]`}},V=(e,t)=>typeof t==`string`&&t.trim()?t:typeof e==`string`||typeof e==`number`?String(e):`empty`,H=e=>{let{normalizedSize:t,widthClass:r}=v(`useSetup:0:0`,()=>p(()=>{let t=v(`computed:1:0`,()=>u(()=>N(e.size))),n=t;return{normalizedSize:t,widthClass:v(`computed:1:1`,()=>u(()=>B(n.get(),`default`)))}}));return d(t=>{let a=i(`svg`,t);c(a,`viewBox`,`0 0 220 164`),c(a,`fill`,`none`),c(a,`xmlns`,`http://www.w3.org/2000/svg`),o(()=>{h(a,E(`${r.get()} h-auto`,e.className))}),o(()=>{let t=e.style;l(a,t)}),c(a,`data-rue-empty-illustration`,`default`),c(a,`aria-hidden`,`true`);let s=i(`rect`,a);n(a,s),c(s,`x`,`18`),c(s,`y`,`38`),c(s,`width`,`184`),c(s,`height`,`98`),c(s,`rx`,`26`),o(()=>{h(s,O)}),o(()=>{l(s,A(6))});let u=i(`rect`,a);n(a,u),c(u,`x`,`18.75`),c(u,`y`,`38.75`),c(u,`width`,`182.5`),c(u,`height`,`96.5`),c(u,`rx`,`25.25`),o(()=>{h(u,O)}),o(()=>{l(u,j(14))}),c(u,`strokeWidth`,`1.5`);let d=i(`rect`,a);n(a,d),c(d,`x`,`49`),c(d,`y`,`24`),c(d,`width`,`122`),c(d,`height`,`18`),c(d,`rx`,`9`),o(()=>{h(d,O)}),o(()=>{l(d,A(10))});let f=i(`rect`,a);n(a,f),c(f,`x`,`52`),c(f,`y`,`63`),c(f,`width`,`48`),c(f,`height`,`48`),c(f,`rx`,`18`),o(()=>{h(f,k)}),o(()=>{l(f,A(14))});let p=i(`circle`,a);n(a,p),c(p,`cx`,`82`),c(p,`cy`,`77.5`),c(p,`r`,`8`),o(()=>{h(p,k)}),o(()=>{l(p,A(36))});let m=i(`path`,a);n(a,m),c(m,`d`,`M67 96.5c8.4-11.5 15.7-17.2 22-17.2 6.6 0 14.4 6 23.4 18`),o(()=>{h(m,O)}),o(()=>{l(m,j(16))}),c(m,`strokeWidth`,`6`),c(m,`strokeLinecap`,`round`);let g=i(`rect`,a);n(a,g),c(g,`x`,`116`),c(g,`y`,`70`),c(g,`width`,`56`),c(g,`height`,`10`),c(g,`rx`,`5`),o(()=>{h(g,O)}),o(()=>{l(g,A(16))});let _=i(`rect`,a);n(a,_),c(_,`x`,`116`),c(_,`y`,`90`),c(_,`width`,`40`),c(_,`height`,`10`),c(_,`rx`,`5`),o(()=>{h(_,O)}),o(()=>{l(_,A(10))});let v=i(`rect`,a);n(a,v),c(v,`x`,`122`),c(v,`y`,`116`),c(v,`width`,`54`),c(v,`height`,`8`),c(v,`rx`,`4`),o(()=>{h(v,k)}),o(()=>{l(v,A(14))});let y=i(`circle`,a);n(a,y),c(y,`cx`,`180`),c(y,`cy`,`54`),c(y,`r`,`10`),o(()=>{h(y,O)}),o(()=>{l(y,A(10))});let b=i(`path`,a);n(a,b),c(b,`d`,`M176 54h8M180 50v8`),o(()=>{h(b,k)}),o(()=>{l(b,j(66))}),c(b,`strokeWidth`,`3`),c(b,`strokeLinecap`,`round`);let x=i(`path`,a);return n(a,x),c(x,`d`,`M38 124c12.2-7.3 22.4-11 30.6-11 8.5 0 19.6 4.6 33.4 13.8`),o(()=>{h(x,O)}),o(()=>{l(x,j(10))}),c(x,`strokeWidth`,`4`),c(x,`strokeLinecap`,`round`),a})},U=e=>{let{normalizedSize:t,widthClass:r}=v(`useSetup:0:0:dup1`,()=>p(()=>{let t=v(`computed:1:2`,()=>u(()=>N(e.size))),n=t;return{normalizedSize:t,widthClass:v(`computed:1:3`,()=>u(()=>B(n.get(),`simple`)))}}));return d(t=>{let a=i(`svg`,t);c(a,`viewBox`,`0 0 120 120`),c(a,`fill`,`none`),c(a,`xmlns`,`http://www.w3.org/2000/svg`),o(()=>{h(a,E(`${r.get()} h-auto`,e.className))}),o(()=>{let t=e.style;l(a,t)}),c(a,`data-rue-empty-illustration`,`simple`),c(a,`aria-hidden`,`true`);let s=i(`circle`,a);n(a,s),c(s,`cx`,`60`),c(s,`cy`,`60`),c(s,`r`,`34`),o(()=>{h(s,O)}),o(()=>{l(s,A(6))});let u=i(`circle`,a);n(a,u),c(u,`cx`,`60`),c(u,`cy`,`60`),c(u,`r`,`34`),o(()=>{h(u,O)}),o(()=>{l(u,j(14))}),c(u,`strokeWidth`,`1.5`);let d=i(`circle`,a);n(a,d),c(d,`cx`,`60`),c(d,`cy`,`60`),c(d,`r`,`23`),o(()=>{h(d,k)}),o(()=>{l(d,j(36))}),c(d,`strokeWidth`,`8`);let f=i(`circle`,a);n(a,f),c(f,`cx`,`60`),c(f,`cy`,`60`),c(f,`r`,`6`),o(()=>{h(f,k)}),o(()=>{l(f,A(66))});let p=i(`path`,a);n(a,p),c(p,`d`,`M43 60h34`),o(()=>{h(p,O)}),o(()=>{l(p,j(16))}),c(p,`strokeWidth`,`6`),c(p,`strokeLinecap`,`round`);let m=i(`circle`,a);n(a,m),c(m,`cx`,`32`),c(m,`cy`,`45`),c(m,`r`,`4`),o(()=>{h(m,k)}),o(()=>{l(m,A(36))});let g=i(`circle`,a);return n(a,g),c(g,`cx`,`90`),c(g,`cy`,`78`),c(g,`r`,`4`),o(()=>{h(g,k)}),o(()=>{l(g,A(36))}),a})},W=({image:e,description:t,imageStyle:n,imageAlt:r,children:i,size:a,align:o=`center`,variant:s=`surface`,className:c,rootClassName:l,style:u,classNames:d,styles:p,role:m=`status`,...h})=>{let g=N(a),v=t===void 0?T:t,y=e===void 0?H:e,S=M(y),C=M(v),w=M(i),O=E(E(`rue-empty relative isolate overflow-hidden ${P(s)} ${F(g)}`,o===`start`?`text-left`:`text-center`),E(E(l,d?.root),c)),k=E(`${z(g)} max-w-full shrink-0`,d?.image),A=E(`max-w-[34rem] text-base-content/68 ${L(g)}`,d?.description),j=E(R(o),d?.footer),B=D(p?.root,u),W=D(p?.image,n),G=D(p?.description),K=D(p?.footer),q=typeof y==`string`?x(`img`,{src:y,alt:V(v,r),draggable:!1,className:`block h-auto w-full object-contain`}):y===H||y===U?_(y,{size:g}):typeof y==`function`?_(y,{}):y;return _(`div`,{...h,role:m,className:O,style:B,"data-rue-empty":`true`,"data-rue-empty-align":o,"data-rue-empty-size":g,"data-rue-empty-variant":s},b(f,{children:[x(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-x-8 top-0 h-20 rounded-full bg-primary/10 blur-3xl`}),b(`div`,{className:E(`relative z-[1] flex ${I(g)} w-full flex-col`,o===`start`?`items-start`:`items-center`),children:[S?x(`div`,{"data-rue-empty-image":`true`,className:k,style:W,children:x(f,{children:q})}):null,C?x(`div`,{"data-rue-empty-description":`true`,className:A,style:G,children:x(f,{children:v})}):null,w?x(`div`,{"data-rue-empty-footer":`true`,className:j,style:K,children:x(f,{children:i})}):null]})]}))};W.PRESENTED_IMAGE_DEFAULT=H,W.PRESENTED_IMAGE_SIMPLE=U;var G=r=>d(l=>{let u=i(`div`,l);h(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),h(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let g=i(`tr`,p);n(p,g);let _=i(`th`,g);n(g,_),n(_,e(`属性`));let v=i(`th`,g);n(g,v),n(v,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=y({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{m(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>m(n,d,f))});let p=i(`td`,l);n(l,p);let h=a(`rue:slot:anchor`);n(p,h),o(()=>{let n=e.description;t(()=>m(n,p,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>m(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>m(n,b,x))}),r}),r,l)}})}),u}),K=`text-base-content`,q=`text-primary`,J=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),Y=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),X=()=>d(e=>{let t=i(`svg`,e);c(t,`viewBox`,`0 0 180 140`),c(t,`fill`,`none`),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`w-[12rem] max-w-full`);let r=i(`rect`,t);n(t,r),c(r,`x`,`18`),c(r,`y`,`22`),c(r,`width`,`144`),c(r,`height`,`96`),c(r,`rx`,`24`),o(()=>{h(r,K)}),o(()=>{l(r,J(8))});let a=i(`rect`,t);n(t,a),c(a,`x`,`18.75`),c(a,`y`,`22.75`),c(a,`width`,`142.5`),c(a,`height`,`94.5`),c(a,`rx`,`23.25`),o(()=>{h(a,K)}),o(()=>{l(a,Y(18))}),c(a,`strokeWidth`,`1.5`);let s=i(`rect`,t);n(t,s),c(s,`x`,`34`),c(s,`y`,`36`),c(s,`width`,`112`),c(s,`height`,`14`),c(s,`rx`,`7`),o(()=>{h(s,K)}),o(()=>{l(s,J(14))});let u=i(`rect`,t);n(t,u),c(u,`x`,`38`),c(u,`y`,`62`),c(u,`width`,`34`),c(u,`height`,`34`),c(u,`rx`,`12`),o(()=>{h(u,q)}),o(()=>{l(u,J(14))});let d=i(`rect`,t);n(t,d),c(d,`x`,`46`),c(d,`y`,`70`),c(d,`width`,`18`),c(d,`height`,`18`),c(d,`rx`,`9`),o(()=>{h(d,q)}),o(()=>{l(d,J(34))});let f=i(`rect`,t);n(t,f),c(f,`x`,`79`),c(f,`y`,`62`),c(f,`width`,`62`),c(f,`height`,`10`),c(f,`rx`,`5`),o(()=>{h(f,K)}),o(()=>{l(f,J(14))});let p=i(`rect`,t);n(t,p),c(p,`x`,`79`),c(p,`y`,`82`),c(p,`width`,`48`),c(p,`height`,`10`),c(p,`rx`,`5`),o(()=>{h(p,q)}),o(()=>{l(p,J(14))});let m=i(`path`,t);n(t,m),c(m,`d`,`M52 108c8.4-8.2 16.3-12.3 23.8-12.3 7.8 0 15.7 4.1 23.7 12.3`),o(()=>{h(m,K)}),o(()=>{l(m,Y(16))}),c(m,`strokeWidth`,`5`),c(m,`strokeLinecap`,`round`);let g=i(`circle`,t);n(t,g),c(g,`cx`,`132`),c(g,`cy`,`54`),c(g,`r`,`10`),o(()=>{h(g,K)}),o(()=>{l(g,J(14))});let _=i(`path`,t);return n(t,_),c(_,`d`,`M128 54h8M132 50v8`),o(()=>{h(_,q)}),o(()=>{l(_,Y(66))}),c(_,`strokeWidth`,`3`),c(_,`strokeLinecap`,`round`),t}),Z=v(`ref:1:0`,()=>r(`preview`)),Q=v(`ref:1:1`,()=>r(`preview`)),$=v(`ref:1:2`,()=>r(`preview`)),ee=v(`ref:1:3`,()=>r(`preview`)),te=[{prop:`image`,description:`空状态插画，支持字符串地址、预设插画组件函数或任意 JSX 节点。`,type:`string | FC | any`,defaultValue:`Empty.PRESENTED_IMAGE_DEFAULT`},{prop:`description`,description:`文案区，可传字符串、富文本节点；显式传 false / null 可隐藏。`,type:`any`,defaultValue:`暂无数据`},{prop:`children`,description:`底部动作区，适合放按钮、链接、过滤器重置等后续动作。`,type:`any`,defaultValue:`-`},{prop:`imageStyle / imageAlt`,description:`控制插画容器样式与 img 的 alt 文案，兼容字符串图片场景。`,type:`any / string`,defaultValue:`- / empty`},{prop:`size`,description:`统一调整容器、插画与文案尺度，支持 sm / md / lg 及 small / default / large 别名。`,type:`'sm' | 'md' | 'lg' | 'small' | 'default' | 'large'`,defaultValue:`md`},{prop:`align`,description:`内容布局方向，支持居中空态和左对齐嵌入式空态。`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`variant`,description:`Rue 风格表面层级，适合页面主空态、嵌入卡片与轻量占位区。`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`},{prop:`className / rootClassName / style`,description:`根节点扩展类名和样式，rootClassName 便于兼容旧代码中的根节点类名分工。`,type:`string / string / any`,defaultValue:`-`},{prop:`classNames / styles`,description:`语义插槽扩展，覆盖 root、image、description、footer 四个区域。`,type:`object / object`,defaultValue:`-`},{prop:`role`,description:`根节点无障碍角色，默认以 status 暴露空状态反馈。`,type:`string`,defaultValue:`status`}],ne=[{prop:`Empty.PRESENTED_IMAGE_DEFAULT`,description:`默认插画，适合页面级空状态。可直接作为 image 传入，或单独渲染。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`},{prop:`Empty.PRESENTED_IMAGE_SIMPLE`,description:`简洁插画，适合表格、筛选区和紧凑卡片。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`}],re=`import { Button, Empty } from '@rue-js/design'

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
`,se=()=>d(r=>{let c=s(),l=a(`rue:component:anchor`);return n(c,l),m(g(C,{children:d(()=>{let r=s(),c=i(`div`,r);n(r,c),h(c,`max-w-none prose prose-sm md:prose-base`);let l=i(`h1`,c);n(c,l),n(l,e(`Empty 空状态`));let u=i(`p`,c);n(c,u),h(u,`text-sm mt-3 mb-3`),n(u,e(`Empty 用来承接列表、筛选、面板和工作流中的无数据状态。它保留了 Rue 一贯的轻量卡片语言，同时补齐了空状态组件最核心的 image、description、children 和预设插画能力。`));let d=i(`p`,c);n(c,d),h(d,`text-sm opacity-75`),n(d,e(`这次不是在旧实现上打补丁，而是补了一个真正可复用的组件：默认插画适合页面主体，simple 插画适合嵌入式空态，语义插槽则方便你在卡片、筛选器、列表面板里继续细调样式。`));let f=a(`rue:component:anchor`);n(c,f),o(()=>{let e=g(w,{title:`基础空状态`,summary:`默认插画、文案和动作区已经能覆盖大多数页面级空态。`,tab:Z,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-4 sm:p-6`,children:b(W,{description:`当前筛选条件下还没有上线中的条目。你可以放宽条件，或者直接创建新内容。`,children:[x(S,{color:`primary`,size:`sm`,children:`创建条目`}),x(S,{type:`outlined`,size:`sm`,children:`重置筛选`})]})}),code:re});t(()=>m(e,c,f))});let p=a(`rue:component:anchor`);n(c,p),o(()=>{let e=g(w,{title:`预设插画与变体`,summary:`default 与 simple 两套预设插画覆盖页面主空态和紧凑容器；surface、soft、outline 对应不同层级。`,tab:Q,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[x(W,{size:`sm`,description:`默认插画适合页面主体空态。`}),x(W,{size:`sm`,variant:`soft`,image:W.PRESENTED_IMAGE_SIMPLE,description:`简洁插画适合表格、筛选或紧凑容器。`}),x(W,{size:`sm`,align:`start`,variant:`outline`,image:W.PRESENTED_IMAGE_SIMPLE,description:`outline 更适合嵌入次级区域。`,children:x(S,{type:`outlined`,size:`sm`,children:`查看模板`})})]}),code:ie});t(()=>m(e,c,p))});let _=a(`rue:component:anchor`);n(c,_),o(()=>{let e=g(w,{title:`自定义插画与左对齐布局`,summary:`需要更贴近业务语义时，可以直接传自定义节点，并切到 start 布局承接更多说明。`,tab:$,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-6`,children:b(W,{align:`start`,size:`large`,image:x(X,{}),description:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`text-base font-semibold text-base-content`,children:`同步队列还是空的`}),x(`div`,{children:`把素材从个人工作台加入同步清单后，这里会自动生成批次并持续追踪状态。`})]}),classNames:{footer:`justify-start`},children:[x(S,{color:`primary`,children:`添加首批素材`}),x(S,{type:`outlined`,children:`查看同步规则`})]})}),code:ae});t(()=>m(e,c,_))});let v=a(`rue:component:anchor`);n(c,v),o(()=>{let e=g(w,{title:`嵌入式空态与语义插槽`,summary:`classNames 和 styles 让 empty 可以自然嵌进列表、筛选面板和卡片，而不需要额外包一层 if。`,tab:ee,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`成员视图`}),x(`span`,{className:`badge badge-ghost badge-sm`,children:`0 records`})]}),x(W,{align:`start`,size:`sm`,image:W.PRESENTED_IMAGE_SIMPLE,description:`筛选结果为空，先移除状态过滤器再试一次。`,styles:{root:{paddingTop:`1.25rem`,paddingBottom:`1.25rem`},description:{maxWidth:`18rem`}},classNames:{footer:`justify-start`},children:x(S,{size:`sm`,type:`outlined`,children:`清空筛选`})})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`素材库`}),x(`span`,{className:`badge badge-outline badge-sm`,children:`草稿区`})]}),b(W,{size:`sm`,variant:`soft`,image:!1,description:`这里也可以只保留文案与动作区，不一定强制带插画。`,classNames:{root:`border-0 bg-transparent px-0 py-2 shadow-none`,footer:`justify-start`},children:[x(S,{size:`sm`,color:`primary`,children:`上传文件`}),x(S,{size:`sm`,type:`outlined`,children:`从模板创建`})]})]})]}),code:oe});t(()=>m(e,c,v))});let y=i(`h2`,c);n(c,y),n(y,e(`API`));let C=i(`p`,c);n(c,C),h(C,`text-sm opacity-75`),n(C,e(`保留易迁移的属性组织方式，同时补一层更贴近 Rue 页面编排的尺寸、变体和语义插槽。`));let T=a(`rue:component:anchor`);n(c,T),o(()=>{let e=g(G,{rows:te});t(()=>m(e,c,T))});let E=i(`h2`,c);n(c,E),n(E,e(`静态成员`));let D=i(`p`,c);n(c,D),h(D,`text-sm opacity-75`),n(D,e(`预设插画可以直接作为 image 传入，也可以在别的容器里独立复用。`));let O=a(`rue:component:anchor`);return n(c,O),o(()=>{let e=g(G,{rows:ne});t(()=>m(e,c,O))}),r})}),c,l),c});export{se as default};