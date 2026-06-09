import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as x}from"./Code-5DOEyGxf.js";import{t as S}from"./button-DL6BQoU1.js";import{r as C}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as w}from"./preview-test-gate-DdwKChL0.js";var T=[`preview`,`code`],ee=(t,i)=>u(l=>{let p=e(`div`,l);f(p,`role`,`tablist`),c(p,`tabs tabs-box mb-3 mt-4`);let h=s(`rue:list:start`),_=s(`rue:list:end`);o(p,h),o(p,_);let y=new Map;return a(()=>{y=v({items:T||[],getKey:(e,t)=>t,elements:y,parent:h.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(s,l,p,h,_)=>{m(u(()=>{let l=r(),u=t===s,p=e(`button`,l);o(l,p),f(p,`type`,`button`),f(p,`role`,`tab`),a(()=>{f(p,`aria-selected`,String(u?`true`:`false`))}),a(()=>{c(p,String(`tab ${u?`tab-active`:``}`))}),n(p,`click`,()=>i(s));let m=g(p);return o(p,m),a(()=>{d(m,s===`preview`?`预览`:`JSX代码`)}),l}),l,p)}})}),p}),E=n=>u(i=>{let d=e(`div`,i);c(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);o(d,f),c(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);o(f,p);let g=e(`h2`,p);o(p,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(g,l(`# `));let _=s(`rue:slot:anchor`);o(g,_),a(()=>{let e=n.title;t(()=>m(e,g,_))});let v=s(`rue:slot:anchor`);o(p,v),a(()=>{let i=n.summary?u(()=>{let i=r(),l=e(`p`,i);o(i,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return o(l,u),a(()=>{let e=n.summary;t(()=>m(e,l,u))}),i}):``;t(()=>m(i,p,v))});let y=s(`rue:slot:anchor`);o(d,y),a(()=>{let e=ee(n.tab.value,e=>n.tab.value=e);t(()=>m(e,d,y))}),o(d,l(` `));let b=s(`rue:slot:anchor`);return o(d,b),a(()=>{let e=n.tab.value===`preview`?w(n.title,n.preview):u(()=>{let e=r(),i=s(`rue:component:anchor`);return o(e,i),a(()=>{let r=h(x,{className:`mt-2`,lang:`tsx`,code:n.code});t(()=>m(r,e,i))}),e});t(()=>m(e,d,b))}),d}),D=n=>u(i=>{let d=e(`div`,i);c(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);o(d,p),c(p,`table table-zebra`);let h=e(`thead`,p);o(p,h);let g=e(`tr`,h);o(h,g);let _=e(`th`,g);o(g,_),o(_,l(`属性`));let y=e(`th`,g);o(g,y),o(y,l(`说明`));let b=e(`th`,g);o(g,b),o(b,l(`类型`));let x=e(`th`,g);o(g,x),o(x,l(`默认值`));let S=e(`tbody`,p);o(p,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return a(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{m(u(()=>{let i=r(),c=e(`tr`,i);o(i,c),a(()=>{f(c,`key`,String(n.prop))});let l=e(`td`,c);o(c,l);let u=e(`code`,l);o(l,u);let d=s(`rue:slot:anchor`);o(u,d),a(()=>{let e=n.prop;t(()=>m(e,u,d))});let p=e(`td`,c);o(c,p);let h=s(`rue:slot:anchor`);o(p,h),a(()=>{let e=n.description;t(()=>m(e,p,h))});let g=e(`td`,c);o(c,g);let _=e(`code`,g);o(g,_);let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=n.type;t(()=>m(e,_,v))});let y=e(`td`,c);o(c,y);let b=e(`code`,y);o(y,b);let x=s(`rue:slot:anchor`);return o(b,x),a(()=>{let e=n.defaultValue;t(()=>m(e,b,x))}),i}),i,c)}})}),d}),te=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);return o(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M12 5v14M5 12h14`),n}),O=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);o(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M5 12h14`);let i=e(`path`,n);return o(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`m13 6 6 6-6 6`),n}),k=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);return o(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),n}),ne=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);o(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M4.5 19.5 9 15l6 6`);let i=e(`path`,n);o(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let a=e(`path`,n);o(n,a),f(a,`strokeLinecap`,`round`),f(a,`strokeLinejoin`,`round`),f(a,`d`,`M15 9 9 15`);let s=e(`circle`,n);return o(n,s),f(s,`cx`,`14`),f(s,`cy`,`10`),f(s,`r`,`1`),f(s,`fill`,`currentColor`),f(s,`stroke`,`none`),n}),re=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`rect`,n);o(n,r),f(r,`x`,`3`),f(r,`y`,`5`),f(r,`width`,`18`),f(r,`height`,`14`),f(r,`rx`,`2`);let i=e(`path`,n);return o(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`m4 7 8 6 8-6`),n}),A=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);o(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let i=e(`path`,n);return o(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ie=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ae=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],oe=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],se=n=>u(r=>{let i=e(`span`,r);a(()=>{c(i,String(`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${n.className??`bg-base-200 text-base-content`}`))});let l=s(`rue:slot:anchor`);return o(i,l),a(()=>{let e=n.text;t(()=>m(e,i,l))}),i}),ce=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],le=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],j=()=>{let{tabTypes:n,tabResponsive:v,tabPalette:x,tabVariants:w,tabDanger:T,tabIcons:ee,tabLoading:j,tabClick:ue,tabSizes:de,tabGroup:fe,tabStates:pe,tabFormLink:me,tabRecipes:he,tabLogin:ge,submitCount:M,clickCount:N,lastAction:P}=_(`useSetup:0:0`,()=>p(()=>({tabTypes:_(`ref:1:0`,()=>i(`preview`)),tabResponsive:_(`ref:1:1`,()=>i(`preview`)),tabPalette:_(`ref:1:2`,()=>i(`preview`)),tabVariants:_(`ref:1:3`,()=>i(`preview`)),tabDanger:_(`ref:1:4`,()=>i(`preview`)),tabIcons:_(`ref:1:5`,()=>i(`preview`)),tabLoading:_(`ref:1:6`,()=>i(`preview`)),tabClick:_(`ref:1:7`,()=>i(`preview`)),tabSizes:_(`ref:1:8`,()=>i(`preview`)),tabGroup:_(`ref:1:9`,()=>i(`preview`)),tabStates:_(`ref:1:10`,()=>i(`preview`)),tabFormLink:_(`ref:1:11`,()=>i(`preview`)),tabRecipes:_(`ref:1:12`,()=>i(`preview`)),tabLogin:_(`ref:1:13`,()=>i(`preview`)),submitCount:_(`ref:1:14`,()=>i(0)),clickCount:_(`ref:1:15`,()=>i(0)),lastAction:_(`ref:1:16`,()=>i(`未触发`))})));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(C,{children:u(()=>{let i=r(),u=e(`div`,i);o(i,u),c(u,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,u);o(u,p),o(p,l(`Button 按钮`));let _=e(`p`,u);o(u,_),c(_,`text-sm mt-3 mb-3`);let C=e(`code`,_);o(_,C),o(C,l(`type`)),o(_,l(`负责视觉类型，`));let F=e(`code`,_);o(_,F),o(F,l(`color`)),o(_,l(`负责主题色，再用`));let I=e(`code`,_);o(_,I),o(I,l(`shape`)),o(_,l(`、`));let L=e(`code`,_);o(_,L),o(L,l(`icon`)),o(_,l(`、`));let R=e(`code`,_);o(_,R),o(R,l(`loading`)),o(_,l(`补足交互细节。`));let z=e(`h2`,u);o(u,z),o(z,l(`何时使用`));let B=e(`ul`,u);o(u,B);let V=e(`li`,B);o(B,V),o(V,l(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let H=e(`li`,B);o(B,H),o(H,l(`需要在表单里区分视觉类型`));let U=e(`code`,H);o(H,U),o(U,l(`type`)),o(H,l(`和原生提交类型`));let W=e(`code`,H);o(H,W),o(W,l(`htmlType`)),o(H,l(`。`));let G=e(`li`,B);o(B,G),o(G,l(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let _e=s(`rue:component:anchor`);o(u,_e),a(()=>{let e=h(E,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:n,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{children:`Solid`}),b(S,{type:`outlined`,children:`Outlined`}),b(S,{type:`dashed`,children:`Dashed`}),b(S,{type:`filled`,children:`Filled`}),b(S,{type:`text`,children:`Text`}),b(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});t(()=>m(e,u,_e))});let ve=s(`rue:component:anchor`);o(u,ve),a(()=>{let e=h(E,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:b(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});t(()=>m(e,u,ve))});let ye=s(`rue:component:anchor`);o(u,ye),a(()=>{let e=h(E,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ie.map(e=>b(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
  { label: 'Default' },
  { label: 'Neutral', color: 'neutral' },
  { label: 'Primary', color: 'primary' },
  { label: 'Secondary', color: 'secondary' },
  { label: 'Accent', color: 'accent' },
  { label: 'Info', color: 'info' },
  { label: 'Success', color: 'success' },
  { label: 'Warning', color: 'warning' },
  { label: 'Error', color: 'error' },
] as const

<div className="flex flex-wrap gap-2">
  {tones.map(tone => (
    <Button key={tone.label} color={tone.color}>
      {tone.label}
    </Button>
  ))}
</div>`});t(()=>m(e,u,ye))});let be=s(`rue:component:anchor`);o(u,be),a(()=>{let e=h(E,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[ae.map(e=>y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),b(`div`,{className:`flex flex-wrap gap-2`,children:ie.map(t=>b(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),y(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`neutral`,type:`outlined`,children:`Outline`}),b(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
  { label: 'Default' },
  { label: 'Neutral', color: 'neutral' },
  { label: 'Primary', color: 'primary' },
  { label: 'Secondary', color: 'secondary' },
  { label: 'Accent', color: 'accent' },
  { label: 'Info', color: 'info' },
  { label: 'Success', color: 'success' },
  { label: 'Warning', color: 'warning' },
  { label: 'Error', color: 'error' },
] as const

const styles = [
  { label: 'Filled', variant: 'filled' },
  { label: 'Outlined', variant: 'outlined' },
  { label: 'Dashed', variant: 'dashed' },
] as const

{styles.map(style => (
  <div key={style.label}>
    <div className="flex flex-wrap gap-2">
      {tones.map(tone => (
        <Button key={style.label + '-' + tone.label} color={tone.color} type={style.variant}>
          {tone.label}
        </Button>
      ))}
    </div>
  </div>
))}

<div className="bg-white p-4 rounded-box">
  <Button color="neutral" type="outlined">Outline</Button>
  <Button color="neutral" type="dashed">Dash</Button>
</div>`});t(()=>m(e,u,be))});let xe=s(`rue:component:anchor`);o(u,xe),a(()=>{let e=h(E,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:T,preview:()=>b(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`danger`,children:`Delete forever`}),b(S,{color:`danger`,type:`outlined`,children:`Remove access`}),b(S,{color:`danger`,type:`filled`,children:`Archive branch`}),b(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});t(()=>m(e,u,xe))});let Se=s(`rue:component:anchor`);o(u,Se),a(()=>{let e=h(E,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,icon:b(te,{}),children:`Create project`}),b(S,{color:`secondary`,type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Continue`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`收藏`}),b(S,{color:`info`,shape:`square`,icon:b(A,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});t(()=>m(e,u,Se))});let Ce=s(`rue:component:anchor`);o(u,Ce),a(()=>{let e=h(E,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:j,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,loading:!0,children:`Saving`}),b(S,{type:`outlined`,loading:{icon:b(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),b(S,{color:`success`,icon:b(ne,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});t(()=>m(e,u,Ce))});let we=s(`rue:component:anchor`);o(u,we),a(()=>{let e=h(E,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:ue,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,onClick:e=>{N.value+=1,P.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),b(S,{type:`outlined`,onClick:e=>{N.value+=1,P.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),b(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),N.value+=1,P.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),y(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[y(`div`,{children:[`click count: `,N.value]}),y(`div`,{children:[`last action: `,P.value]})]})]})}),code:`const clickCount = ref(0)
const lastAction = ref('未触发')

<div className="flex flex-wrap items-center gap-2">
  <Button
    color="primary"
    onClick={event => {
      clickCount.value = clickCount.value + 1
      lastAction.value = 'save:' + (event.currentTarget as HTMLElement).tagName.toLowerCase()
    }}
  >
    Trigger save
  </Button>

  <Button
    type="outlined"
    onClick={event => {
      clickCount.value = clickCount.value + 1
      lastAction.value = 'preview:' + (event.currentTarget as HTMLElement).tagName.toLowerCase()
    }}
  >
    Preview draft
  </Button>

  <Button
    href="#button-api"
    type="link"
    onClick={event => {
      event.preventDefault()
      clickCount.value = clickCount.value + 1
      lastAction.value = 'link:' + (event.currentTarget as HTMLElement).tagName.toLowerCase()
    }}
  >
    Track jump
  </Button>
</div>

<div className="rounded-box bg-base-200/70 px-4 py-3 text-sm">
  <div>click count: {clickCount.value}</div>
  <div>last action: {lastAction.value}</div>
</div>`});t(()=>m(e,u,we))});let Te=s(`rue:component:anchor`);o(u,Te),a(()=>{let e=h(E,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:de,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{size:`small`,children:`Small`}),b(S,{children:`Default`}),b(S,{size:`large`,color:`primary`,children:`Large`}),b(S,{size:`xs`,type:`outlined`,children:`XS`}),b(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,shape:`round`,children:`Round action`}),b(S,{color:`secondary`,shape:`square`,icon:b(A,{}),"aria-label":`square`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});t(()=>m(e,u,Te))});let Ee=s(`rue:component:anchor`);o(u,Ee),a(()=>{let e=h(E,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:fe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{children:`Cancel`}),b(S,{color:`primary`,children:`Confirm`})]}),y(S.Group,{children:[b(S,{disabled:!0,children:`Yesterday`}),b(S,{disabled:!0,children:`Today`}),b(S,{disabled:!0,children:`Tomorrow`})]}),y(S.Group,{children:[b(S,{color:`primary`,children:`L`}),b(S,{children:`M`}),b(S,{children:`M`}),b(S,{type:`dashed`,children:`R`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),y(S.Group,{children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,children:`Backward`}),b(S,{color:`primary`,children:`Forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,shape:`circle`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{shape:`circle`,children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,shape:`circle`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
  <div>
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Basic</div>
    <div className="flex flex-wrap items-center gap-3">
      <Button.Group>
        <Button>Cancel</Button>
        <Button color="primary">Confirm</Button>
      </Button.Group>
      <Button.Group>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
      </Button.Group>
      <Button.Group>
        <Button color="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
      </Button.Group>
    </div>
  </div>

  <div>
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Icons</div>
    <div className="flex flex-wrap items-center gap-3">
      <Button.Group>
        <Button color="primary" icon={<span aria-hidden="true">←</span>}>Backward</Button>
        <Button color="primary" icon={<span aria-hidden="true">→</span>} iconPlacement="end">
          Forward
        </Button>
      </Button.Group>
      <Button.Group>
        <Button color="primary" icon={<span aria-hidden="true">«</span>} aria-label="skip backward" />
        <Button color="primary" icon={<span aria-hidden="true">»</span>} aria-label="skip forward" />
      </Button.Group>
      <Button.Group>
        <Button icon={<span aria-hidden="true">✦</span>} aria-label="magic" />
        <Button icon={<span aria-hidden="true">☀</span>} aria-label="sunny" />
        <Button icon={<span aria-hidden="true">✂</span>} aria-label="crop" />
        <Button icon={<span aria-hidden="true">⛶</span>} aria-label="filter" />
      </Button.Group>
    </div>
  </div>

  <div>
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Circle</div>
    <div className="flex flex-wrap items-center gap-3">
      <Button.Group shape="circle">
        <Button color="primary">Backward</Button>
        <Button color="primary">Forward</Button>
      </Button.Group>
      <Button.Group shape="circle">
        <Button color="primary" icon={<span aria-hidden="true">«</span>} aria-label="circle backward" />
        <Button color="primary" icon={<span aria-hidden="true">»</span>} aria-label="circle forward" />
      </Button.Group>
      <Button.Group shape="circle">
        <Button icon={<span aria-hidden="true">✦</span>} aria-label="circle magic" />
        <Button icon={<span aria-hidden="true">☀</span>} aria-label="circle sunny" />
        <Button icon={<span aria-hidden="true">✂</span>} aria-label="circle crop" />
        <Button icon={<span aria-hidden="true">⛶</span>} aria-label="circle filter" />
      </Button.Group>
    </div>
  </div>

  <div>
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Size</div>
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button.Group size="large">
          <Button>Large</Button>
          <Button>Large</Button>
        </Button.Group>
        <Button.Group>
          <Button>Default</Button>
          <Button>Default</Button>
        </Button.Group>
        <Button.Group size="small">
          <Button>Small</Button>
          <Button>Small</Button>
        </Button.Group>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button.Group size="large" shape="circle">
          <Button>Large</Button>
          <Button>Large</Button>
        </Button.Group>
        <Button.Group shape="circle">
          <Button>Default</Button>
          <Button>Default</Button>
        </Button.Group>
        <Button.Group size="small" shape="circle">
          <Button>Small</Button>
          <Button>Small</Button>
        </Button.Group>
      </div>
    </div>
  </div>
</div>`});t(()=>m(e,u,Ee))});let De=s(`rue:component:anchor`);o(u,De),a(()=>{let e=h(E,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:pe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{active:!0,children:`Active`}),b(S,{color:`primary`,active:!0,children:`Primary active`}),b(S,{disabled:!0,children:`Disabled`}),b(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),y(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[b(S,{wide:!0,children:`Wide button`}),b(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});t(()=>m(e,u,De))});let Oe=s(`rue:component:anchor`);o(u,Oe),a(()=>{let e=h(E,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:me,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{children:`Native button`}),b(S,{href:`#button-api`,children:`Anchor`}),b(S,{as:`div`,type:`text`,children:`Div button`})]}),y(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,M.value]}),y(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),M.value+=1},children:[b(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),b(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),b(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

<div className="flex flex-wrap gap-2">
  <Button>Native button</Button>
  <Button href="#button-api">Anchor</Button>
  <Button as="div" type="text">Div button</Button>
</div>

<form
  onSubmit={event => {
    event.preventDefault()
    submitCount.value = submitCount.value + 1
  }}
>
  <Button color="primary" htmlType="submit">Submit form</Button>
  <Button type="outlined" htmlType="reset">Reset form</Button>
  <Button href="#button-api" type="link">Jump to API</Button>
</form>`});t(()=>m(e,u,Oe))});let ke=s(`rue:component:anchor`);o(u,ke),a(()=>{let e=h(E,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:he,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`primary`,icon:b(ne,{}),children:`Publish`}),b(S,{type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Preview`}),b(S,{type:`text`,icon:b(A,{}),children:`Save draft`})]}),y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[b(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:b(re,{}),children:`Continue with Email`}),b(S,{block:!0,color:`primary`,className:`justify-start`,icon:b(A,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button color="primary" icon={<span>🚀</span>}>Publish</Button>
  <Button type="outlined" icon={<span>→</span>} iconPlacement="end">Preview</Button>
  <Button type="text" icon={<span>✦</span>}>Save draft</Button>
</div>

<div className="grid gap-2 md:grid-cols-2">
  <Button block className="justify-start bg-white text-base-content border-base-300" icon={<span>✉</span>}>
    Continue with Email
  </Button>
  <Button block color="primary" className="justify-start" icon={<span>✦</span>}>
    Continue with Rue ID
  </Button>
</div>`});t(()=>m(e,u,ke))});let Ae=s(`rue:component:anchor`);o(u,Ae),a(()=>{let e=h(E,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ge,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(`div`,{className:`grid gap-2 md:grid-cols-2`,children:oe.map(e=>b(S,{block:!0,className:`justify-start ${e.className}`,icon:b(se,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
  { label: 'Login with Email', icon: '@', className: 'bg-white text-base-content border-base-300', iconClassName: 'bg-base-200 text-base-content' },
  { label: 'Login with GitHub', icon: 'GH', className: 'bg-neutral text-neutral-content border-neutral', iconClassName: 'bg-white/15 text-white' },
  { label: 'Login with Google', icon: 'G', className: 'bg-white text-base-content border-base-300', iconClassName: 'bg-red-100 text-red-700' },
  { label: 'Login with Slack', icon: 'S', className: 'bg-[#622069] text-white border-[#591660]', iconClassName: 'bg-white/15 text-white' },
] as const

<div className="grid gap-2 md:grid-cols-2">
  {loginButtons.map(item => (
    <Button
      key={item.label}
      block
      className={'justify-start ' + item.className}
      icon={<BrandMark text={item.icon} className={item.iconClassName} />}
    >
      {item.label}
    </Button>
  ))}
</div>`});t(()=>m(e,u,Ae))});let K=e(`h2`,u);o(u,K),f(K,`id`,`button-api`),o(K,l(`API`));let je=e(`p`,u);o(u,je),o(je,l(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let q=e(`p`,u);o(u,q),o(q,l(`推荐使用顺序：`));let Me=e(`code`,q);o(q,Me),o(Me,l(`type`)),o(q,l(`->`));let Ne=e(`code`,q);o(q,Ne),o(Ne,l(`color`)),o(q,l(`->`));let Pe=e(`code`,q);o(q,Pe),o(Pe,l(`shape`)),o(q,l(`->`));let Fe=g(q);o(q,Fe),d(Fe,` `);let Ie=e(`code`,q);o(q,Ie),o(Ie,l(`size`)),o(q,l(`->`));let Le=e(`code`,q);o(q,Le),o(Le,l(`loading`)),o(q,l(`->`));let Re=e(`code`,q);o(q,Re),o(Re,l(`disabled`)),o(q,l(`。`));let ze=e(`h3`,u);o(u,ze),o(ze,l(`Button`));let Be=s(`rue:component:anchor`);o(u,Be),a(()=>{let e=h(D,{rows:ce});t(()=>m(e,u,Be))});let Ve=e(`h3`,u);o(u,Ve),o(Ve,l(`Button.Group`));let He=s(`rue:component:anchor`);o(u,He),a(()=>{let e=h(D,{rows:le});t(()=>m(e,u,He))});let Ue=e(`h2`,u);o(u,Ue),o(Ue,l(`FAQ`));let We=e(`h3`,u);o(u,We),o(We,l(`为什么有 type 还需要 htmlType？`));let J=e(`p`,u);o(u,J);let Ge=e(`code`,J);o(J,Ge),o(Ge,l(`type`)),o(J,l(`负责按钮视觉类型，`));let Ke=e(`code`,J);o(J,Ke),o(Ke,l(`htmlType`)),o(J,l(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let qe=e(`h3`,u);o(u,qe),o(qe,l(`type 和 color 应该怎么分工？`));let Y=e(`p`,u);o(u,Y);let Je=e(`code`,Y);o(Y,Je),o(Je,l(`type`)),o(Y,l(`负责视觉类型，比如`));let Ye=e(`code`,Y);o(Y,Ye),o(Ye,l(`outlined`)),o(Y,l(`、`));let Xe=e(`code`,Y);o(Y,Xe),o(Xe,l(`filled`)),o(Y,l(`、`));let Ze=e(`code`,Y);o(Y,Ze),o(Ze,l(`text`)),o(Y,l(`。`));let Qe=e(`code`,Y);o(Y,Qe),o(Qe,l(`color`)),o(Y,l(`负责主题色，比如`));let $e=e(`code`,Y);o(Y,$e),o($e,l(`primary`)),o(Y,l(`、`));let et=e(`code`,Y);o(Y,et),o(et,l(`secondary`)),o(Y,l(`、`));let tt=e(`code`,Y);o(Y,tt),o(tt,l(`danger`)),o(Y,l(`。`));let X=e(`p`,u);o(u,X),o(X,l(`大多数场景可以先定颜色， 再根据密度和层级选择`));let nt=e(`code`,X);o(X,nt),o(nt,l(`solid`)),o(X,l(`、`));let rt=e(`code`,X);o(X,rt),o(rt,l(`outlined`)),o(X,l(`、`));let Z=e(`code`,X);o(X,Z),o(Z,l(`filled`)),o(X,l(`或`));let it=e(`code`,X);o(X,it),o(it,l(`text`)),o(X,l(`。`));let at=e(`h3`,u);o(u,at),o(at,l(`loading 对象里的 delay 会生效吗？`));let Q=e(`p`,u);o(u,Q),o(Q,l(`当前版本已经支持`));let ot=e(`code`,Q);o(Q,ot),o(ot,l(`loading`)),o(Q,l(`的对象写法和自定义`));let st=e(`code`,Q);o(Q,st),o(st,l(`icon`)),o(Q,l(`。`));let ct=e(`code`,Q);o(Q,ct),o(ct,l(`delay`)),o(Q,l(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let lt=e(`h3`,u);o(u,lt),o(lt,l(`Button.Group 会覆盖子按钮哪些属性？`));let $=e(`p`,u);o(u,$),o($,l(`组级只会统一同步`));let ut=e(`code`,$);o($,ut),o(ut,l(`size`)),o($,l(`和`));let dt=e(`code`,$);o($,dt),o(dt,l(`shape`)),o($,l(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ft=e(`code`,$);o($,ft),o(ft,l(`color`)),o($,l(`、`));let pt=e(`code`,$);o($,pt),o(pt,l(`type`)),o($,l(`、`));let mt=e(`code`,$);o($,mt),o(mt,l(`disabled`)),o($,l(`、`));let ht=e(`code`,$);o($,ht),o(ht,l(`onClick`)),o($,l(`仍然在各自的`));let gt=g($);o($,gt),d(gt,` `);let _t=e(`code`,$);return o($,_t),o(_t,l(`Button`)),o($,l(`上配置。`)),i})}),p,_),p})};export{j as default};