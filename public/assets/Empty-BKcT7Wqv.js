import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,b as o,ct as s,et as c,l,mt as u,nt as d,o as f,p,t as m,tt as h,ut as g,yt as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v,n as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as b,i as x}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as S}from"./button-CiwrjbTY.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as w}from"./PreviewBlock-xsXk-Jrr.js";var T=`暂无数据`,E=(e,t)=>e?t?`${e} ${t}`:e:t??``,D=(...e)=>Object.assign({},...e.filter(Boolean)),O=`text-base-content`,k=`text-primary`,A=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),j=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),M=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{switch(e){case`small`:return`sm`;case`large`:return`lg`;case`default`:return`md`;case`sm`:case`lg`:return e;default:return`md`}},P=e=>{switch(e){case`soft`:return`border border-base-300/60 bg-base-200/55 shadow-inner`;case`outline`:return`border border-dashed border-base-300/75 bg-base-100/45 shadow-none`;default:return`border border-base-300/70 bg-base-100 shadow-[0_28px_70px_-48px_hsl(var(--bc)/0.24)]`}},F=e=>{switch(e){case`sm`:return`rounded-[1.5rem] px-4 py-5`;case`lg`:return`rounded-[2rem] px-8 py-9`;default:return`rounded-[1.75rem] px-6 py-7`}},I=e=>{switch(e){case`sm`:return`gap-3`;case`lg`:return`gap-5`;default:return`gap-4`}},L=e=>{switch(e){case`sm`:return`text-sm leading-6`;case`lg`:return`text-base leading-7`;default:return`text-sm leading-6 sm:text-[0.95rem]`}},R=e=>e===`start`?`flex flex-wrap items-center justify-start gap-3`:`flex flex-wrap items-center justify-center gap-3`,z=e=>{switch(e){case`sm`:return`w-[9.5rem]`;case`lg`:return`w-[16rem]`;default:return`w-[12rem]`}},B=(e,t)=>{if(t===`simple`)switch(e){case`sm`:return`w-[6.5rem]`;case`lg`:return`w-[9.5rem]`;default:return`w-[8rem]`}switch(e){case`sm`:return`w-[9rem]`;case`lg`:return`w-[14rem]`;default:return`w-[11rem]`}},V=(e,t)=>typeof t==`string`&&t.trim()?t:typeof e==`string`||typeof e==`number`?String(e):`empty`,H=e=>{let{normalizedSize:n,widthClass:r}=v(`useSetup:0:0`,()=>i(()=>{let t=v(`computed:1:0`,()=>_(()=>N(e.size))),n=t;return{normalizedSize:t,widthClass:v(`computed:1:1`,()=>_(()=>B(n.get(),`default`)))}}));return l(n=>{let i=h(`svg`,n);s(i,`viewBox`,`0 0 220 164`),s(i,`fill`,`none`),s(i,`xmlns`,`http://www.w3.org/2000/svg`),t(()=>{g(i,E(`${r.get()} h-auto`,e.className))}),t(()=>{let t=e.style;u(i,t)}),s(i,`data-rue-empty-illustration`,`default`),s(i,`aria-hidden`,`true`);let o=h(`rect`,i);a(i,o),s(o,`x`,`18`),s(o,`y`,`38`),s(o,`width`,`184`),s(o,`height`,`98`),s(o,`rx`,`26`),t(()=>{g(o,O)}),t(()=>{u(o,A(6))});let c=h(`rect`,i);a(i,c),s(c,`x`,`18.75`),s(c,`y`,`38.75`),s(c,`width`,`182.5`),s(c,`height`,`96.5`),s(c,`rx`,`25.25`),t(()=>{g(c,O)}),t(()=>{u(c,j(14))}),s(c,`strokeWidth`,`1.5`);let l=h(`rect`,i);a(i,l),s(l,`x`,`49`),s(l,`y`,`24`),s(l,`width`,`122`),s(l,`height`,`18`),s(l,`rx`,`9`),t(()=>{g(l,O)}),t(()=>{u(l,A(10))});let d=h(`rect`,i);a(i,d),s(d,`x`,`52`),s(d,`y`,`63`),s(d,`width`,`48`),s(d,`height`,`48`),s(d,`rx`,`18`),t(()=>{g(d,k)}),t(()=>{u(d,A(14))});let f=h(`circle`,i);a(i,f),s(f,`cx`,`82`),s(f,`cy`,`77.5`),s(f,`r`,`8`),t(()=>{g(f,k)}),t(()=>{u(f,A(36))});let p=h(`path`,i);a(i,p),s(p,`d`,`M67 96.5c8.4-11.5 15.7-17.2 22-17.2 6.6 0 14.4 6 23.4 18`),t(()=>{g(p,O)}),t(()=>{u(p,j(16))}),s(p,`strokeWidth`,`6`),s(p,`strokeLinecap`,`round`);let m=h(`rect`,i);a(i,m),s(m,`x`,`116`),s(m,`y`,`70`),s(m,`width`,`56`),s(m,`height`,`10`),s(m,`rx`,`5`),t(()=>{g(m,O)}),t(()=>{u(m,A(16))});let _=h(`rect`,i);a(i,_),s(_,`x`,`116`),s(_,`y`,`90`),s(_,`width`,`40`),s(_,`height`,`10`),s(_,`rx`,`5`),t(()=>{g(_,O)}),t(()=>{u(_,A(10))});let v=h(`rect`,i);a(i,v),s(v,`x`,`122`),s(v,`y`,`116`),s(v,`width`,`54`),s(v,`height`,`8`),s(v,`rx`,`4`),t(()=>{g(v,k)}),t(()=>{u(v,A(14))});let y=h(`circle`,i);a(i,y),s(y,`cx`,`180`),s(y,`cy`,`54`),s(y,`r`,`10`),t(()=>{g(y,O)}),t(()=>{u(y,A(10))});let b=h(`path`,i);a(i,b),s(b,`d`,`M176 54h8M180 50v8`),t(()=>{g(b,k)}),t(()=>{u(b,j(66))}),s(b,`strokeWidth`,`3`),s(b,`strokeLinecap`,`round`);let x=h(`path`,i);return a(i,x),s(x,`d`,`M38 124c12.2-7.3 22.4-11 30.6-11 8.5 0 19.6 4.6 33.4 13.8`),t(()=>{g(x,O)}),t(()=>{u(x,j(10))}),s(x,`strokeWidth`,`4`),s(x,`strokeLinecap`,`round`),i})},U=e=>{let{normalizedSize:n,widthClass:r}=v(`useSetup:0:0:dup1`,()=>i(()=>{let t=v(`computed:1:2`,()=>_(()=>N(e.size))),n=t;return{normalizedSize:t,widthClass:v(`computed:1:3`,()=>_(()=>B(n.get(),`simple`)))}}));return l(n=>{let i=h(`svg`,n);s(i,`viewBox`,`0 0 120 120`),s(i,`fill`,`none`),s(i,`xmlns`,`http://www.w3.org/2000/svg`),t(()=>{g(i,E(`${r.get()} h-auto`,e.className))}),t(()=>{let t=e.style;u(i,t)}),s(i,`data-rue-empty-illustration`,`simple`),s(i,`aria-hidden`,`true`);let o=h(`circle`,i);a(i,o),s(o,`cx`,`60`),s(o,`cy`,`60`),s(o,`r`,`34`),t(()=>{g(o,O)}),t(()=>{u(o,A(6))});let c=h(`circle`,i);a(i,c),s(c,`cx`,`60`),s(c,`cy`,`60`),s(c,`r`,`34`),t(()=>{g(c,O)}),t(()=>{u(c,j(14))}),s(c,`strokeWidth`,`1.5`);let l=h(`circle`,i);a(i,l),s(l,`cx`,`60`),s(l,`cy`,`60`),s(l,`r`,`23`),t(()=>{g(l,k)}),t(()=>{u(l,j(36))}),s(l,`strokeWidth`,`8`);let d=h(`circle`,i);a(i,d),s(d,`cx`,`60`),s(d,`cy`,`60`),s(d,`r`,`6`),t(()=>{g(d,k)}),t(()=>{u(d,A(66))});let f=h(`path`,i);a(i,f),s(f,`d`,`M43 60h34`),t(()=>{g(f,O)}),t(()=>{u(f,j(16))}),s(f,`strokeWidth`,`6`),s(f,`strokeLinecap`,`round`);let p=h(`circle`,i);a(i,p),s(p,`cx`,`32`),s(p,`cy`,`45`),s(p,`r`,`4`),t(()=>{g(p,k)}),t(()=>{u(p,A(36))});let m=h(`circle`,i);return a(i,m),s(m,`cx`,`90`),s(m,`cy`,`78`),s(m,`r`,`4`),t(()=>{g(m,k)}),t(()=>{u(m,A(36))}),i})},W=({image:e,description:t,imageStyle:n,imageAlt:r,children:i,size:a,align:s=`center`,variant:c=`surface`,className:l,rootClassName:u,style:d,classNames:f,styles:m,role:h=`status`,...g})=>{let _=N(a),v=t===void 0?T:t,y=e===void 0?H:e,S=M(y),C=M(v),w=M(i),O=E(E(`rue-empty relative isolate overflow-hidden ${P(c)} ${F(_)}`,s===`start`?`text-left`:`text-center`),E(E(u,f?.root),l)),k=E(`${z(_)} max-w-full shrink-0`,f?.image),A=E(`max-w-[34rem] text-base-content/68 ${L(_)}`,f?.description),j=E(R(s),f?.footer),B=D(m?.root,d),W=D(m?.image,n),G=D(m?.description),K=D(m?.footer),q=typeof y==`string`?x(`img`,{src:y,alt:V(v,r),draggable:`false`,className:`block h-auto w-full object-contain`}):y===H||y===U?o(y,{size:_}):typeof y==`function`?o(y,{}):y;return o(`div`,{...g,role:h,className:O,style:B,"data-rue-empty":`true`,"data-rue-empty-align":s,"data-rue-empty-size":_,"data-rue-empty-variant":c},b(p,{children:[x(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-x-8 top-0 h-20 rounded-full bg-primary/10 blur-3xl`}),b(`div`,{className:E(`relative z-[1] flex ${I(_)} w-full flex-col`,s===`start`?`items-start`:`items-center`),children:[S?x(`div`,{"data-rue-empty-image":`true`,className:k,style:W,children:x(p,{children:q})}):null,C?x(`div`,{"data-rue-empty-description":`true`,className:A,style:G,children:x(p,{children:v})}):null,w?x(`div`,{"data-rue-empty-footer":`true`,className:j,style:K,children:x(p,{children:i})}):null]})]}))};W.PRESENTED_IMAGE_DEFAULT=H,W.PRESENTED_IMAGE_SIMPLE=U;var G=n=>l(i=>{let o=h(`div`,i);g(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=h(`table`,o);a(o,u),g(u,`table table-zebra`);let p=h(`thead`,u);a(u,p);let m=h(`tr`,p);a(p,m);let _=h(`th`,m);a(m,_),a(_,d(`属性`));let v=h(`th`,m);a(m,v),a(v,d(`说明`));let b=h(`th`,m);a(m,b),a(b,d(`类型`));let x=h(`th`,m);a(m,x),a(x,d(`默认值`));let S=h(`tbody`,u);a(u,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=y({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,u,d)=>{f(l(()=>{let i=c(),o=h(`tr`,i);a(i,o),t(()=>{s(o,`key`,String(n.prop))});let l=h(`td`,o);a(o,l);let u=h(`code`,l);a(l,u);let d=e(`rue:slot:anchor`);a(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=h(`td`,o);a(o,p);let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.description;r(()=>f(e,p,m))});let g=h(`td`,o);a(o,g);let _=h(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=h(`td`,o);a(o,y);let b=h(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,o)}})}),o}),K=`text-base-content`,q=`text-primary`,J=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),Y=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),X=()=>l(e=>{let n=h(`svg`,e);s(n,`viewBox`,`0 0 180 140`),s(n,`fill`,`none`),s(n,`xmlns`,`http://www.w3.org/2000/svg`),g(n,`w-[12rem] max-w-full`);let r=h(`rect`,n);a(n,r),s(r,`x`,`18`),s(r,`y`,`22`),s(r,`width`,`144`),s(r,`height`,`96`),s(r,`rx`,`24`),t(()=>{g(r,K)}),t(()=>{u(r,J(8))});let i=h(`rect`,n);a(n,i),s(i,`x`,`18.75`),s(i,`y`,`22.75`),s(i,`width`,`142.5`),s(i,`height`,`94.5`),s(i,`rx`,`23.25`),t(()=>{g(i,K)}),t(()=>{u(i,Y(18))}),s(i,`strokeWidth`,`1.5`);let o=h(`rect`,n);a(n,o),s(o,`x`,`34`),s(o,`y`,`36`),s(o,`width`,`112`),s(o,`height`,`14`),s(o,`rx`,`7`),t(()=>{g(o,K)}),t(()=>{u(o,J(14))});let c=h(`rect`,n);a(n,c),s(c,`x`,`38`),s(c,`y`,`62`),s(c,`width`,`34`),s(c,`height`,`34`),s(c,`rx`,`12`),t(()=>{g(c,q)}),t(()=>{u(c,J(14))});let l=h(`rect`,n);a(n,l),s(l,`x`,`46`),s(l,`y`,`70`),s(l,`width`,`18`),s(l,`height`,`18`),s(l,`rx`,`9`),t(()=>{g(l,q)}),t(()=>{u(l,J(34))});let d=h(`rect`,n);a(n,d),s(d,`x`,`79`),s(d,`y`,`62`),s(d,`width`,`62`),s(d,`height`,`10`),s(d,`rx`,`5`),t(()=>{g(d,K)}),t(()=>{u(d,J(14))});let f=h(`rect`,n);a(n,f),s(f,`x`,`79`),s(f,`y`,`82`),s(f,`width`,`48`),s(f,`height`,`10`),s(f,`rx`,`5`),t(()=>{g(f,q)}),t(()=>{u(f,J(14))});let p=h(`path`,n);a(n,p),s(p,`d`,`M52 108c8.4-8.2 16.3-12.3 23.8-12.3 7.8 0 15.7 4.1 23.7 12.3`),t(()=>{g(p,K)}),t(()=>{u(p,Y(16))}),s(p,`strokeWidth`,`5`),s(p,`strokeLinecap`,`round`);let m=h(`circle`,n);a(n,m),s(m,`cx`,`132`),s(m,`cy`,`54`),s(m,`r`,`10`),t(()=>{g(m,K)}),t(()=>{u(m,J(14))});let _=h(`path`,n);return a(n,_),s(_,`d`,`M128 54h8M132 50v8`),t(()=>{g(_,q)}),t(()=>{u(_,Y(66))}),s(_,`strokeWidth`,`3`),s(_,`strokeLinecap`,`round`),n}),Z=v(`ref:1:0`,()=>n(`preview`)),Q=v(`ref:1:1`,()=>n(`preview`)),$=v(`ref:1:2`,()=>n(`preview`)),ee=v(`ref:1:3`,()=>n(`preview`)),te=[{prop:`image`,description:`空状态插画，支持字符串地址、预设插画组件函数或任意 JSX 节点。`,type:`string | FC | any`,defaultValue:`Empty.PRESENTED_IMAGE_DEFAULT`},{prop:`description`,description:`文案区，可传字符串、富文本节点；显式传 false / null 可隐藏。`,type:`any`,defaultValue:`暂无数据`},{prop:`children`,description:`底部动作区，适合放按钮、链接、过滤器重置等后续动作。`,type:`any`,defaultValue:`-`},{prop:`imageStyle / imageAlt`,description:`控制插画容器样式与 img 的 alt 文案，兼容字符串图片场景。`,type:`any / string`,defaultValue:`- / empty`},{prop:`size`,description:`统一调整容器、插画与文案尺度，支持 sm / md / lg 及 small / default / large 别名。`,type:`'sm' | 'md' | 'lg' | 'small' | 'default' | 'large'`,defaultValue:`md`},{prop:`align`,description:`内容布局方向，支持居中空态和左对齐嵌入式空态。`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`variant`,description:`Rue 风格表面层级，适合页面主空态、嵌入卡片与轻量占位区。`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`},{prop:`className / rootClassName / style`,description:`根节点扩展类名和样式，rootClassName 便于兼容旧代码中的根节点类名分工。`,type:`string / string / any`,defaultValue:`-`},{prop:`classNames / styles`,description:`语义插槽扩展，覆盖 root、image、description、footer 四个区域。`,type:`object / object`,defaultValue:`-`},{prop:`role`,description:`根节点无障碍角色，默认以 status 暴露空状态反馈。`,type:`string`,defaultValue:`status`}],ne=[{prop:`Empty.PRESENTED_IMAGE_DEFAULT`,description:`默认插画，适合页面级空状态。可直接作为 image 传入，或单独渲染。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`},{prop:`Empty.PRESENTED_IMAGE_SIMPLE`,description:`简洁插画，适合表格、筛选区和紧凑卡片。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`}],re=`import { Button, Empty } from '@rue-js/design'

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
`,se=()=>l(n=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),f(m(C,{children:l(()=>{let n=c(),i=h(`div`,n);a(n,i),g(i,`max-w-none prose prose-sm md:prose-base`);let o=h(`h1`,i);a(i,o),a(o,d(`Empty 空状态`));let s=h(`p`,i);a(i,s),g(s,`text-sm mt-3 mb-3`),a(s,d(`Empty 用来承接列表、筛选、面板和工作流中的无数据状态。它保留了 Rue 一贯的轻量卡片语言，同时补齐了空状态组件最核心的 image、description、children 和预设插画能力。`));let l=h(`p`,i);a(i,l),g(l,`text-sm opacity-75`),a(l,d(`这次不是在旧实现上打补丁，而是补了一个真正可复用的组件：默认插画适合页面主体，simple 插画适合嵌入式空态，语义插槽则方便你在卡片、筛选器、列表面板里继续细调样式。`));let u=e(`rue:component:anchor`);a(i,u),t(()=>{let e=m(w,{title:`基础空状态`,summary:`默认插画、文案和动作区已经能覆盖大多数页面级空态。`,tab:Z,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-4 sm:p-6`,children:b(W,{description:`当前筛选条件下还没有上线中的条目。你可以放宽条件，或者直接创建新内容。`,children:[x(S,{color:`primary`,size:`sm`,children:`创建条目`}),x(S,{type:`outlined`,size:`sm`,children:`重置筛选`})]})}),code:re});r(()=>f(e,i,u))});let p=e(`rue:component:anchor`);a(i,p),t(()=>{let e=m(w,{title:`预设插画与变体`,summary:`default 与 simple 两套预设插画覆盖页面主空态和紧凑容器；surface、soft、outline 对应不同层级。`,tab:Q,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[x(W,{size:`sm`,description:`默认插画适合页面主体空态。`}),x(W,{size:`sm`,variant:`soft`,image:W.PRESENTED_IMAGE_SIMPLE,description:`简洁插画适合表格、筛选或紧凑容器。`}),x(W,{size:`sm`,align:`start`,variant:`outline`,image:W.PRESENTED_IMAGE_SIMPLE,description:`outline 更适合嵌入次级区域。`,children:x(S,{type:`outlined`,size:`sm`,children:`查看模板`})})]}),code:ie});r(()=>f(e,i,p))});let _=e(`rue:component:anchor`);a(i,_),t(()=>{let e=m(w,{title:`自定义插画与左对齐布局`,summary:`需要更贴近业务语义时，可以直接传自定义节点，并切到 start 布局承接更多说明。`,tab:$,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-6`,children:b(W,{align:`start`,size:`large`,image:x(X,{}),description:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`text-base font-semibold text-base-content`,children:`同步队列还是空的`}),x(`div`,{children:`把素材从个人工作台加入同步清单后，这里会自动生成批次并持续追踪状态。`})]}),classNames:{footer:`justify-start`},children:[x(S,{color:`primary`,children:`添加首批素材`}),x(S,{type:`outlined`,children:`查看同步规则`})]})}),code:ae});r(()=>f(e,i,_))});let v=e(`rue:component:anchor`);a(i,v),t(()=>{let e=m(w,{title:`嵌入式空态与语义插槽`,summary:`classNames 和 styles 让 empty 可以自然嵌进列表、筛选面板和卡片，而不需要额外包一层 if。`,tab:ee,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`成员视图`}),x(`span`,{className:`badge badge-ghost badge-sm`,children:`0 records`})]}),x(W,{align:`start`,size:`sm`,image:W.PRESENTED_IMAGE_SIMPLE,description:`筛选结果为空，先移除状态过滤器再试一次。`,styles:{root:{paddingTop:`1.25rem`,paddingBottom:`1.25rem`},description:{maxWidth:`18rem`}},classNames:{footer:`justify-start`},children:x(S,{size:`sm`,type:`outlined`,children:`清空筛选`})})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`素材库`}),x(`span`,{className:`badge badge-outline badge-sm`,children:`草稿区`})]}),b(W,{size:`sm`,variant:`soft`,image:!1,description:`这里也可以只保留文案与动作区，不一定强制带插画。`,classNames:{root:`border-0 bg-transparent px-0 py-2 shadow-none`,footer:`justify-start`},children:[x(S,{size:`sm`,color:`primary`,children:`上传文件`}),x(S,{size:`sm`,type:`outlined`,children:`从模板创建`})]})]})]}),code:oe});r(()=>f(e,i,v))});let y=h(`h2`,i);a(i,y),a(y,d(`API`));let C=h(`p`,i);a(i,C),g(C,`text-sm opacity-75`),a(C,d(`保留易迁移的属性组织方式，同时补一层更贴近 Rue 页面编排的尺寸、变体和语义插槽。`));let T=e(`rue:component:anchor`);a(i,T),t(()=>{let e=m(G,{rows:te});r(()=>f(e,i,T))});let E=h(`h2`,i);a(i,E),a(E,d(`静态成员`));let D=h(`p`,i);a(i,D),g(D,`text-sm opacity-75`),a(D,d(`预设插画可以直接作为 image 传入，也可以在别的容器里独立复用。`));let O=e(`rue:component:anchor`);return a(i,O),t(()=>{let e=m(G,{rows:ne});r(()=>f(e,i,O))}),n})}),i,o),i});export{se as default};