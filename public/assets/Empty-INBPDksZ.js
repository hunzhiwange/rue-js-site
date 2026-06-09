import{$ as e,Ht as t,Q as n,Rt as r,S as i,Xt as a,Y as o,Z as s,_t as c,ct as l,et as u,ft as d,l as f,m as p,ot as m,qt as h,s as g,t as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v,n as y}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as b,i as x}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as S}from"./button-DL6BQoU1.js";import{r as C}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as w}from"./PreviewBlock-Byu5jIqR.js";var T=`暂无数据`,E=(e,t)=>e?t?`${e} ${t}`:e:t??``,D=(...e)=>Object.assign({},...e.filter(Boolean)),O=`text-base-content`,k=`text-primary`,A=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),j=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),M=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{switch(e){case`small`:return`sm`;case`large`:return`lg`;case`default`:return`md`;case`sm`:case`lg`:return e;default:return`md`}},P=e=>{switch(e){case`soft`:return`border border-base-300/60 bg-base-200/55 shadow-inner`;case`outline`:return`border border-dashed border-base-300/75 bg-base-100/45 shadow-none`;default:return`border border-base-300/70 bg-base-100 shadow-[0_28px_70px_-48px_hsl(var(--bc)/0.24)]`}},F=e=>{switch(e){case`sm`:return`rounded-[1.5rem] px-4 py-5`;case`lg`:return`rounded-[2rem] px-8 py-9`;default:return`rounded-[1.75rem] px-6 py-7`}},I=e=>{switch(e){case`sm`:return`gap-3`;case`lg`:return`gap-5`;default:return`gap-4`}},L=e=>{switch(e){case`sm`:return`text-sm leading-6`;case`lg`:return`text-base leading-7`;default:return`text-sm leading-6 sm:text-[0.95rem]`}},R=e=>e===`start`?`flex flex-wrap items-center justify-start gap-3`:`flex flex-wrap items-center justify-center gap-3`,z=e=>{switch(e){case`sm`:return`w-[9.5rem]`;case`lg`:return`w-[16rem]`;default:return`w-[12rem]`}},B=(e,t)=>{if(t===`simple`)switch(e){case`sm`:return`w-[6.5rem]`;case`lg`:return`w-[9.5rem]`;default:return`w-[8rem]`}switch(e){case`sm`:return`w-[9rem]`;case`lg`:return`w-[14rem]`;default:return`w-[11rem]`}},V=(e,t)=>typeof t==`string`&&t.trim()?t:typeof e==`string`||typeof e==`number`?String(e):`empty`,H=t=>{let{normalizedSize:n,widthClass:r}=v(`useSetup:0:0`,()=>h(()=>{let e=v(`computed:1:0`,()=>c(()=>N(t.size))),n=e;return{normalizedSize:e,widthClass:v(`computed:1:1`,()=>c(()=>B(n.get(),`default`)))}}));return f(n=>{let i=e(`svg`,n);m(i,`viewBox`,`0 0 220 164`),m(i,`fill`,`none`),m(i,`xmlns`,`http://www.w3.org/2000/svg`),a(()=>{l(i,String(E(`${r.get()} h-auto`,t.className)))}),a(()=>{let e=t.style;d(i,e)}),m(i,`data-rue-empty-illustration`,`default`),m(i,`aria-hidden`,`true`);let s=e(`rect`,i);o(i,s),m(s,`x`,`18`),m(s,`y`,`38`),m(s,`width`,`184`),m(s,`height`,`98`),m(s,`rx`,`26`),a(()=>{l(s,String(O))}),a(()=>{d(s,A(6))});let c=e(`rect`,i);o(i,c),m(c,`x`,`18.75`),m(c,`y`,`38.75`),m(c,`width`,`182.5`),m(c,`height`,`96.5`),m(c,`rx`,`25.25`),a(()=>{l(c,String(O))}),a(()=>{d(c,j(14))}),m(c,`strokeWidth`,`1.5`);let u=e(`rect`,i);o(i,u),m(u,`x`,`49`),m(u,`y`,`24`),m(u,`width`,`122`),m(u,`height`,`18`),m(u,`rx`,`9`),a(()=>{l(u,String(O))}),a(()=>{d(u,A(10))});let f=e(`rect`,i);o(i,f),m(f,`x`,`52`),m(f,`y`,`63`),m(f,`width`,`48`),m(f,`height`,`48`),m(f,`rx`,`18`),a(()=>{l(f,String(k))}),a(()=>{d(f,A(14))});let p=e(`circle`,i);o(i,p),m(p,`cx`,`82`),m(p,`cy`,`77.5`),m(p,`r`,`8`),a(()=>{l(p,String(k))}),a(()=>{d(p,A(36))});let h=e(`path`,i);o(i,h),m(h,`d`,`M67 96.5c8.4-11.5 15.7-17.2 22-17.2 6.6 0 14.4 6 23.4 18`),a(()=>{l(h,String(O))}),a(()=>{d(h,j(16))}),m(h,`strokeWidth`,`6`),m(h,`strokeLinecap`,`round`);let g=e(`rect`,i);o(i,g),m(g,`x`,`116`),m(g,`y`,`70`),m(g,`width`,`56`),m(g,`height`,`10`),m(g,`rx`,`5`),a(()=>{l(g,String(O))}),a(()=>{d(g,A(16))});let _=e(`rect`,i);o(i,_),m(_,`x`,`116`),m(_,`y`,`90`),m(_,`width`,`40`),m(_,`height`,`10`),m(_,`rx`,`5`),a(()=>{l(_,String(O))}),a(()=>{d(_,A(10))});let v=e(`rect`,i);o(i,v),m(v,`x`,`122`),m(v,`y`,`116`),m(v,`width`,`54`),m(v,`height`,`8`),m(v,`rx`,`4`),a(()=>{l(v,String(k))}),a(()=>{d(v,A(14))});let y=e(`circle`,i);o(i,y),m(y,`cx`,`180`),m(y,`cy`,`54`),m(y,`r`,`10`),a(()=>{l(y,String(O))}),a(()=>{d(y,A(10))});let b=e(`path`,i);o(i,b),m(b,`d`,`M176 54h8M180 50v8`),a(()=>{l(b,String(k))}),a(()=>{d(b,j(66))}),m(b,`strokeWidth`,`3`),m(b,`strokeLinecap`,`round`);let x=e(`path`,i);return o(i,x),m(x,`d`,`M38 124c12.2-7.3 22.4-11 30.6-11 8.5 0 19.6 4.6 33.4 13.8`),a(()=>{l(x,String(O))}),a(()=>{d(x,j(10))}),m(x,`strokeWidth`,`4`),m(x,`strokeLinecap`,`round`),i})},U=t=>{let{normalizedSize:n,widthClass:r}=v(`useSetup:0:0:dup1`,()=>h(()=>{let e=v(`computed:1:2`,()=>c(()=>N(t.size))),n=e;return{normalizedSize:e,widthClass:v(`computed:1:3`,()=>c(()=>B(n.get(),`simple`)))}}));return f(n=>{let i=e(`svg`,n);m(i,`viewBox`,`0 0 120 120`),m(i,`fill`,`none`),m(i,`xmlns`,`http://www.w3.org/2000/svg`),a(()=>{l(i,String(E(`${r.get()} h-auto`,t.className)))}),a(()=>{let e=t.style;d(i,e)}),m(i,`data-rue-empty-illustration`,`simple`),m(i,`aria-hidden`,`true`);let s=e(`circle`,i);o(i,s),m(s,`cx`,`60`),m(s,`cy`,`60`),m(s,`r`,`34`),a(()=>{l(s,String(O))}),a(()=>{d(s,A(6))});let c=e(`circle`,i);o(i,c),m(c,`cx`,`60`),m(c,`cy`,`60`),m(c,`r`,`34`),a(()=>{l(c,String(O))}),a(()=>{d(c,j(14))}),m(c,`strokeWidth`,`1.5`);let u=e(`circle`,i);o(i,u),m(u,`cx`,`60`),m(u,`cy`,`60`),m(u,`r`,`23`),a(()=>{l(u,String(k))}),a(()=>{d(u,j(36))}),m(u,`strokeWidth`,`8`);let f=e(`circle`,i);o(i,f),m(f,`cx`,`60`),m(f,`cy`,`60`),m(f,`r`,`6`),a(()=>{l(f,String(k))}),a(()=>{d(f,A(66))});let p=e(`path`,i);o(i,p),m(p,`d`,`M43 60h34`),a(()=>{l(p,String(O))}),a(()=>{d(p,j(16))}),m(p,`strokeWidth`,`6`),m(p,`strokeLinecap`,`round`);let h=e(`circle`,i);o(i,h),m(h,`cx`,`32`),m(h,`cy`,`45`),m(h,`r`,`4`),a(()=>{l(h,String(k))}),a(()=>{d(h,A(36))});let g=e(`circle`,i);return o(i,g),m(g,`cx`,`90`),m(g,`cy`,`78`),m(g,`r`,`4`),a(()=>{l(g,String(k))}),a(()=>{d(g,A(36))}),i})},W=({image:e,description:t,imageStyle:n,imageAlt:r,children:a,size:o,align:s=`center`,variant:c=`surface`,className:l,rootClassName:u,style:d,classNames:f,styles:m,role:h=`status`,...g})=>{let _=N(o),v=t===void 0?T:t,y=e===void 0?H:e,S=M(y),C=M(v),w=M(a),O=E(E(`rue-empty relative isolate overflow-hidden ${P(c)} ${F(_)}`,s===`start`?`text-left`:`text-center`),E(E(u,f?.root),l)),k=E(`${z(_)} max-w-full shrink-0`,f?.image),A=E(`max-w-[34rem] text-base-content/68 ${L(_)}`,f?.description),j=E(R(s),f?.footer),B=D(m?.root,d),W=D(m?.image,n),G=D(m?.description),K=D(m?.footer),q=typeof y==`string`?x(`img`,{src:y,alt:V(v,r),draggable:!1,className:`block h-auto w-full object-contain`}):y===H||y===U?i(y,{size:_}):typeof y==`function`?i(y,{}):y;return i(`div`,{...g,role:h,className:O,style:B,"data-rue-empty":`true`,"data-rue-empty-align":s,"data-rue-empty-size":_,"data-rue-empty-variant":c},b(p,{children:[x(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-x-8 top-0 h-20 rounded-full bg-primary/10 blur-3xl`}),b(`div`,{className:E(`relative z-[1] flex ${I(_)} w-full flex-col`,s===`start`?`items-start`:`items-center`),children:[S?x(`div`,{"data-rue-empty-image":`true`,className:k,style:W,children:x(p,{children:q})}):null,C?x(`div`,{"data-rue-empty-description":`true`,className:A,style:G,children:x(p,{children:v})}):null,w?x(`div`,{"data-rue-empty-footer":`true`,className:j,style:K,children:x(p,{children:a})}):null]})]}))};W.PRESENTED_IMAGE_DEFAULT=H,W.PRESENTED_IMAGE_SIMPLE=U;var G=r=>f(i=>{let c=e(`div`,i);l(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`,c);o(c,d),l(d,`table table-zebra`);let p=e(`thead`,d);o(d,p);let h=e(`tr`,p);o(p,h);let _=e(`th`,h);o(h,_),o(_,u(`属性`));let v=e(`th`,h);o(h,v),o(v,u(`说明`));let b=e(`th`,h);o(h,b),o(b,u(`类型`));let x=e(`th`,h);o(h,x),o(x,u(`默认值`));let S=e(`tbody`,d);o(d,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return a(()=>{T=y({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,i,c,l,u)=>{g(f(()=>{let i=n(),c=e(`tr`,i);o(i,c),a(()=>{m(c,`key`,String(r.prop))});let l=e(`td`,c);o(c,l);let u=e(`code`,l);o(l,u);let d=s(`rue:slot:anchor`);o(u,d),a(()=>{let e=r.prop;t(()=>g(e,u,d))});let f=e(`td`,c);o(c,f);let p=s(`rue:slot:anchor`);o(f,p),a(()=>{let e=r.description;t(()=>g(e,f,p))});let h=e(`td`,c);o(c,h);let _=e(`code`,h);o(h,_);let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=r.type;t(()=>g(e,_,v))});let y=e(`td`,c);o(c,y);let b=e(`code`,y);o(y,b);let x=s(`rue:slot:anchor`);return o(b,x),a(()=>{let e=r.defaultValue;t(()=>g(e,b,x))}),i}),i,c)}})}),c}),K=`text-base-content`,q=`text-primary`,J=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),Y=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),X=()=>f(t=>{let n=e(`svg`,t);m(n,`viewBox`,`0 0 180 140`),m(n,`fill`,`none`),m(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`w-[12rem] max-w-full`);let r=e(`rect`,n);o(n,r),m(r,`x`,`18`),m(r,`y`,`22`),m(r,`width`,`144`),m(r,`height`,`96`),m(r,`rx`,`24`),a(()=>{l(r,String(K))}),a(()=>{d(r,J(8))});let i=e(`rect`,n);o(n,i),m(i,`x`,`18.75`),m(i,`y`,`22.75`),m(i,`width`,`142.5`),m(i,`height`,`94.5`),m(i,`rx`,`23.25`),a(()=>{l(i,String(K))}),a(()=>{d(i,Y(18))}),m(i,`strokeWidth`,`1.5`);let s=e(`rect`,n);o(n,s),m(s,`x`,`34`),m(s,`y`,`36`),m(s,`width`,`112`),m(s,`height`,`14`),m(s,`rx`,`7`),a(()=>{l(s,String(K))}),a(()=>{d(s,J(14))});let c=e(`rect`,n);o(n,c),m(c,`x`,`38`),m(c,`y`,`62`),m(c,`width`,`34`),m(c,`height`,`34`),m(c,`rx`,`12`),a(()=>{l(c,String(q))}),a(()=>{d(c,J(14))});let u=e(`rect`,n);o(n,u),m(u,`x`,`46`),m(u,`y`,`70`),m(u,`width`,`18`),m(u,`height`,`18`),m(u,`rx`,`9`),a(()=>{l(u,String(q))}),a(()=>{d(u,J(34))});let f=e(`rect`,n);o(n,f),m(f,`x`,`79`),m(f,`y`,`62`),m(f,`width`,`62`),m(f,`height`,`10`),m(f,`rx`,`5`),a(()=>{l(f,String(K))}),a(()=>{d(f,J(14))});let p=e(`rect`,n);o(n,p),m(p,`x`,`79`),m(p,`y`,`82`),m(p,`width`,`48`),m(p,`height`,`10`),m(p,`rx`,`5`),a(()=>{l(p,String(q))}),a(()=>{d(p,J(14))});let h=e(`path`,n);o(n,h),m(h,`d`,`M52 108c8.4-8.2 16.3-12.3 23.8-12.3 7.8 0 15.7 4.1 23.7 12.3`),a(()=>{l(h,String(K))}),a(()=>{d(h,Y(16))}),m(h,`strokeWidth`,`5`),m(h,`strokeLinecap`,`round`);let g=e(`circle`,n);o(n,g),m(g,`cx`,`132`),m(g,`cy`,`54`),m(g,`r`,`10`),a(()=>{l(g,String(K))}),a(()=>{d(g,J(14))});let _=e(`path`,n);return o(n,_),m(_,`d`,`M128 54h8M132 50v8`),a(()=>{l(_,String(q))}),a(()=>{d(_,Y(66))}),m(_,`strokeWidth`,`3`),m(_,`strokeLinecap`,`round`),n}),Z=v(`ref:1:0`,()=>r(`preview`)),Q=v(`ref:1:1`,()=>r(`preview`)),$=v(`ref:1:2`,()=>r(`preview`)),ee=v(`ref:1:3`,()=>r(`preview`)),te=[{prop:`image`,description:`空状态插画，支持字符串地址、预设插画组件函数或任意 JSX 节点。`,type:`string | FC | any`,defaultValue:`Empty.PRESENTED_IMAGE_DEFAULT`},{prop:`description`,description:`文案区，可传字符串、富文本节点；显式传 false / null 可隐藏。`,type:`any`,defaultValue:`暂无数据`},{prop:`children`,description:`底部动作区，适合放按钮、链接、过滤器重置等后续动作。`,type:`any`,defaultValue:`-`},{prop:`imageStyle / imageAlt`,description:`控制插画容器样式与 img 的 alt 文案，兼容字符串图片场景。`,type:`any / string`,defaultValue:`- / empty`},{prop:`size`,description:`统一调整容器、插画与文案尺度，支持 sm / md / lg 及 small / default / large 别名。`,type:`'sm' | 'md' | 'lg' | 'small' | 'default' | 'large'`,defaultValue:`md`},{prop:`align`,description:`内容布局方向，支持居中空态和左对齐嵌入式空态。`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`variant`,description:`Rue 风格表面层级，适合页面主空态、嵌入卡片与轻量占位区。`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`},{prop:`className / rootClassName / style`,description:`根节点扩展类名和样式，rootClassName 便于兼容旧代码中的根节点类名分工。`,type:`string / string / any`,defaultValue:`-`},{prop:`classNames / styles`,description:`语义插槽扩展，覆盖 root、image、description、footer 四个区域。`,type:`object / object`,defaultValue:`-`},{prop:`role`,description:`根节点无障碍角色，默认以 status 暴露空状态反馈。`,type:`string`,defaultValue:`status`}],ne=[{prop:`Empty.PRESENTED_IMAGE_DEFAULT`,description:`默认插画，适合页面级空状态。可直接作为 image 传入，或单独渲染。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`},{prop:`Empty.PRESENTED_IMAGE_SIMPLE`,description:`简洁插画，适合表格、筛选区和紧凑卡片。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`}],re=`import { Button, Empty } from '@rue-js/design'

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
`,se=()=>f(r=>{let i=n(),c=s(`rue:component:anchor`);return o(i,c),g(_(C,{children:f(()=>{let r=n(),i=e(`div`,r);o(r,i),l(i,`max-w-none prose prose-sm md:prose-base`);let c=e(`h1`,i);o(i,c),o(c,u(`Empty 空状态`));let d=e(`p`,i);o(i,d),l(d,`text-sm mt-3 mb-3`),o(d,u(`Empty 用来承接列表、筛选、面板和工作流中的无数据状态。它保留了 Rue 一贯的轻量卡片语言，同时补齐了空状态组件最核心的 image、description、children 和预设插画能力。`));let f=e(`p`,i);o(i,f),l(f,`text-sm opacity-75`),o(f,u(`这次不是在旧实现上打补丁，而是补了一个真正可复用的组件：默认插画适合页面主体，simple 插画适合嵌入式空态，语义插槽则方便你在卡片、筛选器、列表面板里继续细调样式。`));let p=s(`rue:component:anchor`);o(i,p),a(()=>{let e=_(w,{title:`基础空状态`,summary:`默认插画、文案和动作区已经能覆盖大多数页面级空态。`,tab:Z,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-4 sm:p-6`,children:b(W,{description:`当前筛选条件下还没有上线中的条目。你可以放宽条件，或者直接创建新内容。`,children:[x(S,{color:`primary`,size:`sm`,children:`创建条目`}),x(S,{type:`outlined`,size:`sm`,children:`重置筛选`})]})}),code:re});t(()=>g(e,i,p))});let m=s(`rue:component:anchor`);o(i,m),a(()=>{let e=_(w,{title:`预设插画与变体`,summary:`default 与 simple 两套预设插画覆盖页面主空态和紧凑容器；surface、soft、outline 对应不同层级。`,tab:Q,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[x(W,{size:`sm`,description:`默认插画适合页面主体空态。`}),x(W,{size:`sm`,variant:`soft`,image:W.PRESENTED_IMAGE_SIMPLE,description:`简洁插画适合表格、筛选或紧凑容器。`}),x(W,{size:`sm`,align:`start`,variant:`outline`,image:W.PRESENTED_IMAGE_SIMPLE,description:`outline 更适合嵌入次级区域。`,children:x(S,{type:`outlined`,size:`sm`,children:`查看模板`})})]}),code:ie});t(()=>g(e,i,m))});let h=s(`rue:component:anchor`);o(i,h),a(()=>{let e=_(w,{title:`自定义插画与左对齐布局`,summary:`需要更贴近业务语义时，可以直接传自定义节点，并切到 start 布局承接更多说明。`,tab:$,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-6`,children:b(W,{align:`start`,size:`large`,image:x(X,{}),description:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`text-base font-semibold text-base-content`,children:`同步队列还是空的`}),x(`div`,{children:`把素材从个人工作台加入同步清单后，这里会自动生成批次并持续追踪状态。`})]}),classNames:{footer:`justify-start`},children:[x(S,{color:`primary`,children:`添加首批素材`}),x(S,{type:`outlined`,children:`查看同步规则`})]})}),code:ae});t(()=>g(e,i,h))});let v=s(`rue:component:anchor`);o(i,v),a(()=>{let e=_(w,{title:`嵌入式空态与语义插槽`,summary:`classNames 和 styles 让 empty 可以自然嵌进列表、筛选面板和卡片，而不需要额外包一层 if。`,tab:ee,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`成员视图`}),x(`span`,{className:`badge badge-ghost badge-sm`,children:`0 records`})]}),x(W,{align:`start`,size:`sm`,image:W.PRESENTED_IMAGE_SIMPLE,description:`筛选结果为空，先移除状态过滤器再试一次。`,styles:{root:{paddingTop:`1.25rem`,paddingBottom:`1.25rem`},description:{maxWidth:`18rem`}},classNames:{footer:`justify-start`},children:x(S,{size:`sm`,type:`outlined`,children:`清空筛选`})})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`素材库`}),x(`span`,{className:`badge badge-outline badge-sm`,children:`草稿区`})]}),b(W,{size:`sm`,variant:`soft`,image:!1,description:`这里也可以只保留文案与动作区，不一定强制带插画。`,classNames:{root:`border-0 bg-transparent px-0 py-2 shadow-none`,footer:`justify-start`},children:[x(S,{size:`sm`,color:`primary`,children:`上传文件`}),x(S,{size:`sm`,type:`outlined`,children:`从模板创建`})]})]})]}),code:oe});t(()=>g(e,i,v))});let y=e(`h2`,i);o(i,y),o(y,u(`API`));let C=e(`p`,i);o(i,C),l(C,`text-sm opacity-75`),o(C,u(`保留易迁移的属性组织方式，同时补一层更贴近 Rue 页面编排的尺寸、变体和语义插槽。`));let T=s(`rue:component:anchor`);o(i,T),a(()=>{let e=_(G,{rows:te});t(()=>g(e,i,T))});let E=e(`h2`,i);o(i,E),o(E,u(`静态成员`));let D=e(`p`,i);o(i,D),l(D,`text-sm opacity-75`),o(D,u(`预设插画可以直接作为 image 传入，也可以在别的容器里独立复用。`));let O=s(`rue:component:anchor`);return o(i,O),a(()=>{let e=_(G,{rows:ne});t(()=>g(e,i,O))}),r})}),i,c),i});export{se as default};