import{$ as e,D as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,ft as f,gt as p,l as m,ot as h,t as g,y as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v,n as y}from"./vapor-helpers-vapor-DkadWylb.js";import{i as b,r as x}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as S}from"./button-BDcuIfPi.js";import{n as C}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as w}from"./PreviewBlock-DNT1sEzZ.js";var T=`暂无数据`,E=(e,t)=>e?t?`${e} ${t}`:e:t??``,D=(...e)=>Object.assign({},...e.filter(Boolean)),O=`text-base-content`,k=`text-primary`,A=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),j=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),M=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{switch(e){case`small`:return`sm`;case`large`:return`lg`;case`default`:return`md`;case`sm`:case`lg`:return e;default:return`md`}},P=e=>{switch(e){case`soft`:return`border border-base-300/60 bg-base-200/55 shadow-inner`;case`outline`:return`border border-dashed border-base-300/75 bg-base-100/45 shadow-none`;default:return`border border-base-300/70 bg-base-100 shadow-[0_28px_70px_-48px_hsl(var(--bc)/0.24)]`}},F=e=>{switch(e){case`sm`:return`rounded-[1.5rem] px-4 py-5`;case`lg`:return`rounded-[2rem] px-8 py-9`;default:return`rounded-[1.75rem] px-6 py-7`}},I=e=>{switch(e){case`sm`:return`gap-3`;case`lg`:return`gap-5`;default:return`gap-4`}},L=e=>{switch(e){case`sm`:return`text-sm leading-6`;case`lg`:return`text-base leading-7`;default:return`text-sm leading-6 sm:text-[0.95rem]`}},R=e=>e===`start`?`flex flex-wrap items-center justify-start gap-3`:`flex flex-wrap items-center justify-center gap-3`,z=e=>{switch(e){case`sm`:return`w-[9.5rem]`;case`lg`:return`w-[16rem]`;default:return`w-[12rem]`}},B=(e,t)=>{if(t===`simple`)switch(e){case`sm`:return`w-[6.5rem]`;case`lg`:return`w-[9.5rem]`;default:return`w-[8rem]`}switch(e){case`sm`:return`w-[9rem]`;case`lg`:return`w-[14rem]`;default:return`w-[11rem]`}},V=(e,t)=>typeof t==`string`&&t.trim()?t:typeof e==`string`||typeof e==`number`?String(e):`empty`,H=t=>{let{normalizedSize:r,widthClass:i}=v(`useSetup:0:0`,()=>n(()=>{let e=v(`computed:1:0`,()=>p(()=>N(t.size))),n=e;return{normalizedSize:e,widthClass:v(`computed:1:1`,()=>p(()=>B(n.get(),`default`)))}}));return u(n=>{let r=e(`svg`,n);h(r,`viewBox`,`0 0 220 164`),h(r,`fill`,`none`),h(r,`xmlns`,`http://www.w3.org/2000/svg`),s(()=>{l(r,String(E(`${i.get()} h-auto`,t.className)))}),s(()=>{let e=t.style;f(r,e)}),h(r,`data-rue-empty-illustration`,`default`),h(r,`aria-hidden`,`true`);let a=e(`rect`,r);o(r,a),h(a,`x`,`18`),h(a,`y`,`38`),h(a,`width`,`184`),h(a,`height`,`98`),h(a,`rx`,`26`),s(()=>{l(a,String(O))}),s(()=>{f(a,A(6))});let c=e(`rect`,r);o(r,c),h(c,`x`,`18.75`),h(c,`y`,`38.75`),h(c,`width`,`182.5`),h(c,`height`,`96.5`),h(c,`rx`,`25.25`),s(()=>{l(c,String(O))}),s(()=>{f(c,j(14))}),h(c,`strokeWidth`,`1.5`);let u=e(`rect`,r);o(r,u),h(u,`x`,`49`),h(u,`y`,`24`),h(u,`width`,`122`),h(u,`height`,`18`),h(u,`rx`,`9`),s(()=>{l(u,String(O))}),s(()=>{f(u,A(10))});let d=e(`rect`,r);o(r,d),h(d,`x`,`52`),h(d,`y`,`63`),h(d,`width`,`48`),h(d,`height`,`48`),h(d,`rx`,`18`),s(()=>{l(d,String(k))}),s(()=>{f(d,A(14))});let p=e(`circle`,r);o(r,p),h(p,`cx`,`82`),h(p,`cy`,`77.5`),h(p,`r`,`8`),s(()=>{l(p,String(k))}),s(()=>{f(p,A(36))});let m=e(`path`,r);o(r,m),h(m,`d`,`M67 96.5c8.4-11.5 15.7-17.2 22-17.2 6.6 0 14.4 6 23.4 18`),s(()=>{l(m,String(O))}),s(()=>{f(m,j(16))}),h(m,`strokeWidth`,`6`),h(m,`strokeLinecap`,`round`);let g=e(`rect`,r);o(r,g),h(g,`x`,`116`),h(g,`y`,`70`),h(g,`width`,`56`),h(g,`height`,`10`),h(g,`rx`,`5`),s(()=>{l(g,String(O))}),s(()=>{f(g,A(16))});let _=e(`rect`,r);o(r,_),h(_,`x`,`116`),h(_,`y`,`90`),h(_,`width`,`40`),h(_,`height`,`10`),h(_,`rx`,`5`),s(()=>{l(_,String(O))}),s(()=>{f(_,A(10))});let v=e(`rect`,r);o(r,v),h(v,`x`,`122`),h(v,`y`,`116`),h(v,`width`,`54`),h(v,`height`,`8`),h(v,`rx`,`4`),s(()=>{l(v,String(k))}),s(()=>{f(v,A(14))});let y=e(`circle`,r);o(r,y),h(y,`cx`,`180`),h(y,`cy`,`54`),h(y,`r`,`10`),s(()=>{l(y,String(O))}),s(()=>{f(y,A(10))});let b=e(`path`,r);o(r,b),h(b,`d`,`M176 54h8M180 50v8`),s(()=>{l(b,String(k))}),s(()=>{f(b,j(66))}),h(b,`strokeWidth`,`3`),h(b,`strokeLinecap`,`round`);let x=e(`path`,r);return o(r,x),h(x,`d`,`M38 124c12.2-7.3 22.4-11 30.6-11 8.5 0 19.6 4.6 33.4 13.8`),s(()=>{l(x,String(O))}),s(()=>{f(x,j(10))}),h(x,`strokeWidth`,`4`),h(x,`strokeLinecap`,`round`),r})},U=t=>{let{normalizedSize:r,widthClass:i}=v(`useSetup:0:0:dup1`,()=>n(()=>{let e=v(`computed:1:2`,()=>p(()=>N(t.size))),n=e;return{normalizedSize:e,widthClass:v(`computed:1:3`,()=>p(()=>B(n.get(),`simple`)))}}));return u(n=>{let r=e(`svg`,n);h(r,`viewBox`,`0 0 120 120`),h(r,`fill`,`none`),h(r,`xmlns`,`http://www.w3.org/2000/svg`),s(()=>{l(r,String(E(`${i.get()} h-auto`,t.className)))}),s(()=>{let e=t.style;f(r,e)}),h(r,`data-rue-empty-illustration`,`simple`),h(r,`aria-hidden`,`true`);let a=e(`circle`,r);o(r,a),h(a,`cx`,`60`),h(a,`cy`,`60`),h(a,`r`,`34`),s(()=>{l(a,String(O))}),s(()=>{f(a,A(6))});let c=e(`circle`,r);o(r,c),h(c,`cx`,`60`),h(c,`cy`,`60`),h(c,`r`,`34`),s(()=>{l(c,String(O))}),s(()=>{f(c,j(14))}),h(c,`strokeWidth`,`1.5`);let u=e(`circle`,r);o(r,u),h(u,`cx`,`60`),h(u,`cy`,`60`),h(u,`r`,`23`),s(()=>{l(u,String(k))}),s(()=>{f(u,j(36))}),h(u,`strokeWidth`,`8`);let d=e(`circle`,r);o(r,d),h(d,`cx`,`60`),h(d,`cy`,`60`),h(d,`r`,`6`),s(()=>{l(d,String(k))}),s(()=>{f(d,A(66))});let p=e(`path`,r);o(r,p),h(p,`d`,`M43 60h34`),s(()=>{l(p,String(O))}),s(()=>{f(p,j(16))}),h(p,`strokeWidth`,`6`),h(p,`strokeLinecap`,`round`);let m=e(`circle`,r);o(r,m),h(m,`cx`,`32`),h(m,`cy`,`45`),h(m,`r`,`4`),s(()=>{l(m,String(k))}),s(()=>{f(m,A(36))});let g=e(`circle`,r);return o(r,g),h(g,`cx`,`90`),h(g,`cy`,`78`),h(g,`r`,`4`),s(()=>{l(g,String(k))}),s(()=>{f(g,A(36))}),r})},W=({image:e,description:n,imageStyle:r,imageAlt:i,children:a,size:o,align:s=`center`,variant:c=`surface`,className:l,rootClassName:u,style:d,classNames:f,styles:p,role:m=`status`,...h})=>{let g=N(o),v=n===void 0?T:n,y=e===void 0?H:e,S=M(y),C=M(v),w=M(a),O=E(E(`rue-empty relative isolate overflow-hidden ${P(c)} ${F(g)}`,s===`start`?`text-left`:`text-center`),E(E(u,f?.root),l)),k=E(`${z(g)} max-w-full shrink-0`,f?.image),A=E(`max-w-[34rem] text-base-content/68 ${L(g)}`,f?.description),j=E(R(s),f?.footer),B=D(p?.root,d),W=D(p?.image,r),G=D(p?.description),K=D(p?.footer),q=typeof y==`string`?x(`img`,{src:y,alt:V(v,i),draggable:!1,className:`block h-auto w-full object-contain`}):y===H||y===U?t(y,{size:g}):typeof y==`function`?t(y,{}):y;return t(`div`,{...h,role:m,className:O,style:B,"data-rue-empty":`true`,"data-rue-empty-align":s,"data-rue-empty-size":g,"data-rue-empty-variant":c},b(_,{children:[x(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-x-8 top-0 h-20 rounded-full bg-primary/10 blur-3xl`}),b(`div`,{className:E(`relative z-[1] flex ${I(g)} w-full flex-col`,s===`start`?`items-start`:`items-center`),children:[S?x(`div`,{"data-rue-empty-image":`true`,className:k,style:W,children:x(_,{children:q})}):null,C?x(`div`,{"data-rue-empty-description":`true`,className:A,style:G,children:x(_,{children:v})}):null,w?x(`div`,{"data-rue-empty-footer":`true`,className:j,style:K,children:x(_,{children:a})}):null]})]}))};W.PRESENTED_IMAGE_DEFAULT=H,W.PRESENTED_IMAGE_SIMPLE=U;var G=t=>u(n=>{let r=e(`div`,n);l(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,r);o(r,f),l(f,`table table-zebra`);let p=e(`thead`,f);o(f,p);let g=e(`tr`,p);o(p,g);let _=e(`th`,g);o(g,_),o(_,d(`属性`));let v=e(`th`,g);o(g,v),o(v,d(`说明`));let b=e(`th`,g);o(g,b),o(b,d(`类型`));let x=e(`th`,g);o(g,x),o(x,d(`默认值`));let S=e(`tbody`,f);o(f,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=y({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,l,d)=>{m(u(()=>{let n=i(),r=e(`tr`,n);o(n,r),s(()=>{h(r,`key`,String(t.prop))});let l=e(`td`,r);o(r,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>m(e,u,d))});let f=e(`td`,r);o(r,f);let p=c(`rue:slot:anchor`);o(f,p),s(()=>{let e=t.description;a(()=>m(e,f,p))});let g=e(`td`,r);o(r,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>m(e,_,v))});let y=e(`td`,r);o(r,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>m(e,b,x))}),n}),n,r)}})}),r}),K=`text-base-content`,q=`text-primary`,J=e=>({fill:`color-mix(in oklab, currentColor ${e}%, transparent)`}),Y=e=>({stroke:`color-mix(in oklab, currentColor ${e}%, transparent)`}),X=()=>u(t=>{let n=e(`svg`,t);h(n,`viewBox`,`0 0 180 140`),h(n,`fill`,`none`),h(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`w-[12rem] max-w-full`);let r=e(`rect`,n);o(n,r),h(r,`x`,`18`),h(r,`y`,`22`),h(r,`width`,`144`),h(r,`height`,`96`),h(r,`rx`,`24`),s(()=>{l(r,String(K))}),s(()=>{f(r,J(8))});let i=e(`rect`,n);o(n,i),h(i,`x`,`18.75`),h(i,`y`,`22.75`),h(i,`width`,`142.5`),h(i,`height`,`94.5`),h(i,`rx`,`23.25`),s(()=>{l(i,String(K))}),s(()=>{f(i,Y(18))}),h(i,`strokeWidth`,`1.5`);let a=e(`rect`,n);o(n,a),h(a,`x`,`34`),h(a,`y`,`36`),h(a,`width`,`112`),h(a,`height`,`14`),h(a,`rx`,`7`),s(()=>{l(a,String(K))}),s(()=>{f(a,J(14))});let c=e(`rect`,n);o(n,c),h(c,`x`,`38`),h(c,`y`,`62`),h(c,`width`,`34`),h(c,`height`,`34`),h(c,`rx`,`12`),s(()=>{l(c,String(q))}),s(()=>{f(c,J(14))});let u=e(`rect`,n);o(n,u),h(u,`x`,`46`),h(u,`y`,`70`),h(u,`width`,`18`),h(u,`height`,`18`),h(u,`rx`,`9`),s(()=>{l(u,String(q))}),s(()=>{f(u,J(34))});let d=e(`rect`,n);o(n,d),h(d,`x`,`79`),h(d,`y`,`62`),h(d,`width`,`62`),h(d,`height`,`10`),h(d,`rx`,`5`),s(()=>{l(d,String(K))}),s(()=>{f(d,J(14))});let p=e(`rect`,n);o(n,p),h(p,`x`,`79`),h(p,`y`,`82`),h(p,`width`,`48`),h(p,`height`,`10`),h(p,`rx`,`5`),s(()=>{l(p,String(q))}),s(()=>{f(p,J(14))});let m=e(`path`,n);o(n,m),h(m,`d`,`M52 108c8.4-8.2 16.3-12.3 23.8-12.3 7.8 0 15.7 4.1 23.7 12.3`),s(()=>{l(m,String(K))}),s(()=>{f(m,Y(16))}),h(m,`strokeWidth`,`5`),h(m,`strokeLinecap`,`round`);let g=e(`circle`,n);o(n,g),h(g,`cx`,`132`),h(g,`cy`,`54`),h(g,`r`,`10`),s(()=>{l(g,String(K))}),s(()=>{f(g,J(14))});let _=e(`path`,n);return o(n,_),h(_,`d`,`M128 54h8M132 50v8`),s(()=>{l(_,String(q))}),s(()=>{f(_,Y(66))}),h(_,`strokeWidth`,`3`),h(_,`strokeLinecap`,`round`),n}),Z=v(`ref:1:0`,()=>r(`preview`)),Q=v(`ref:1:1`,()=>r(`preview`)),$=v(`ref:1:2`,()=>r(`preview`)),ee=v(`ref:1:3`,()=>r(`preview`)),te=[{prop:`image`,description:`空状态插画，支持字符串地址、预设插画组件函数或任意 JSX 节点。`,type:`string | FC | any`,defaultValue:`Empty.PRESENTED_IMAGE_DEFAULT`},{prop:`description`,description:`文案区，可传字符串、富文本节点；显式传 false / null 可隐藏。`,type:`any`,defaultValue:`暂无数据`},{prop:`children`,description:`底部动作区，适合放按钮、链接、过滤器重置等后续动作。`,type:`any`,defaultValue:`-`},{prop:`imageStyle / imageAlt`,description:`控制插画容器样式与 img 的 alt 文案，兼容字符串图片场景。`,type:`any / string`,defaultValue:`- / empty`},{prop:`size`,description:`统一调整容器、插画与文案尺度，支持 sm / md / lg 及 small / default / large 别名。`,type:`'sm' | 'md' | 'lg' | 'small' | 'default' | 'large'`,defaultValue:`md`},{prop:`align`,description:`内容布局方向，支持居中空态和左对齐嵌入式空态。`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`variant`,description:`Rue 风格表面层级，适合页面主空态、嵌入卡片与轻量占位区。`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`},{prop:`className / rootClassName / style`,description:`根节点扩展类名和样式，rootClassName 便于兼容旧代码中的根节点类名分工。`,type:`string / string / any`,defaultValue:`-`},{prop:`classNames / styles`,description:`语义插槽扩展，覆盖 root、image、description、footer 四个区域。`,type:`object / object`,defaultValue:`-`},{prop:`role`,description:`根节点无障碍角色，默认以 status 暴露空状态反馈。`,type:`string`,defaultValue:`status`}],ne=[{prop:`Empty.PRESENTED_IMAGE_DEFAULT`,description:`默认插画，适合页面级空状态。可直接作为 image 传入，或单独渲染。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`},{prop:`Empty.PRESENTED_IMAGE_SIMPLE`,description:`简洁插画，适合表格、筛选区和紧凑卡片。`,type:`FC<EmptyPresentedImageProps>`,defaultValue:`-`}],re=`import { Button, Empty } from '@rue-js/design'

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
`,se=()=>u(t=>{let n=i(),r=c(`rue:component:anchor`);return o(n,r),m(g(C,{children:u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`max-w-none prose prose-sm md:prose-base`);let r=e(`h1`,n);o(n,r),o(r,d(`Empty 空状态`));let u=e(`p`,n);o(n,u),l(u,`text-sm mt-3 mb-3`),o(u,d(`Empty 用来承接列表、筛选、面板和工作流中的无数据状态。它保留了 Rue 一贯的轻量卡片语言，同时补齐了空状态组件最核心的 image、description、children 和预设插画能力。`));let f=e(`p`,n);o(n,f),l(f,`text-sm opacity-75`),o(f,d(`这次不是在旧实现上打补丁，而是补了一个真正可复用的组件：默认插画适合页面主体，simple 插画适合嵌入式空态，语义插槽则方便你在卡片、筛选器、列表面板里继续细调样式。`));let p=c(`rue:component:anchor`);o(n,p),s(()=>{let e=g(w,{title:`基础空状态`,summary:`默认插画、文案和动作区已经能覆盖大多数页面级空态。`,tab:Z,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-4 sm:p-6`,children:b(W,{description:`当前筛选条件下还没有上线中的条目。你可以放宽条件，或者直接创建新内容。`,children:[x(S,{color:`primary`,size:`sm`,children:`创建条目`}),x(S,{type:`outlined`,size:`sm`,children:`重置筛选`})]})}),code:re});a(()=>m(e,n,p))});let h=c(`rue:component:anchor`);o(n,h),s(()=>{let e=g(w,{title:`预设插画与变体`,summary:`default 与 simple 两套预设插画覆盖页面主空态和紧凑容器；surface、soft、outline 对应不同层级。`,tab:Q,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[x(W,{size:`sm`,description:`默认插画适合页面主体空态。`}),x(W,{size:`sm`,variant:`soft`,image:W.PRESENTED_IMAGE_SIMPLE,description:`简洁插画适合表格、筛选或紧凑容器。`}),x(W,{size:`sm`,align:`start`,variant:`outline`,image:W.PRESENTED_IMAGE_SIMPLE,description:`outline 更适合嵌入次级区域。`,children:x(S,{type:`outlined`,size:`sm`,children:`查看模板`})})]}),code:ie});a(()=>m(e,n,h))});let _=c(`rue:component:anchor`);o(n,_),s(()=>{let e=g(w,{title:`自定义插画与左对齐布局`,summary:`需要更贴近业务语义时，可以直接传自定义节点，并切到 start 布局承接更多说明。`,tab:$,preview:()=>x(`div`,{className:`rounded-[2rem] border border-base-300/70 bg-base-100 p-6`,children:b(W,{align:`start`,size:`large`,image:x(X,{}),description:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`text-base font-semibold text-base-content`,children:`同步队列还是空的`}),x(`div`,{children:`把素材从个人工作台加入同步清单后，这里会自动生成批次并持续追踪状态。`})]}),classNames:{footer:`justify-start`},children:[x(S,{color:`primary`,children:`添加首批素材`}),x(S,{type:`outlined`,children:`查看同步规则`})]})}),code:ae});a(()=>m(e,n,_))});let v=c(`rue:component:anchor`);o(n,v),s(()=>{let e=g(w,{title:`嵌入式空态与语义插槽`,summary:`classNames 和 styles 让 empty 可以自然嵌进列表、筛选面板和卡片，而不需要额外包一层 if。`,tab:ee,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`成员视图`}),x(`span`,{className:`badge badge-ghost badge-sm`,children:`0 records`})]}),x(W,{align:`start`,size:`sm`,image:W.PRESENTED_IMAGE_SIMPLE,description:`筛选结果为空，先移除状态过滤器再试一次。`,styles:{root:{paddingTop:`1.25rem`,paddingBottom:`1.25rem`},description:{maxWidth:`18rem`}},classNames:{footer:`justify-start`},children:x(S,{size:`sm`,type:`outlined`,children:`清空筛选`})})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 flex items-center justify-between text-sm text-base-content/65`,children:[x(`span`,{children:`素材库`}),x(`span`,{className:`badge badge-outline badge-sm`,children:`草稿区`})]}),b(W,{size:`sm`,variant:`soft`,image:!1,description:`这里也可以只保留文案与动作区，不一定强制带插画。`,classNames:{root:`border-0 bg-transparent px-0 py-2 shadow-none`,footer:`justify-start`},children:[x(S,{size:`sm`,color:`primary`,children:`上传文件`}),x(S,{size:`sm`,type:`outlined`,children:`从模板创建`})]})]})]}),code:oe});a(()=>m(e,n,v))});let y=e(`h2`,n);o(n,y),o(y,d(`API`));let C=e(`p`,n);o(n,C),l(C,`text-sm opacity-75`),o(C,d(`保留易迁移的属性组织方式，同时补一层更贴近 Rue 页面编排的尺寸、变体和语义插槽。`));let T=c(`rue:component:anchor`);o(n,T),s(()=>{let e=g(G,{rows:te});a(()=>m(e,n,T))});let E=e(`h2`,n);o(n,E),o(E,d(`静态成员`));let D=e(`p`,n);o(n,D),l(D,`text-sm opacity-75`),o(D,d(`预设插画可以直接作为 image 传入，也可以在别的容器里独立复用。`));let O=c(`rue:component:anchor`);return o(n,O),s(()=>{let e=g(G,{rows:ne});a(()=>m(e,n,O))}),t})}),n,r),n});export{se as default};