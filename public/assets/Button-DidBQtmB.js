import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./Code-BoXKy3gJ.js";import{n as b,t as x}from"./src-Dlanwp1X.js";import{t as S}from"./button-BaOJ_LfE.js";import{r as C}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as w}from"./preview-test-gate-CiW-xKNr.js";var T=[`preview`,`code`],ee=(n,s)=>c(d=>{let m=p(`div`,d);o(m,`role`,`tablist`),f(m,`tabs tabs-box mb-3 mt-4`);let h=g(`rue:list:start`),_=g(`rue:list:end`);e(m,h),e(m,_);let y=new Map;return t(()=>{y=v({items:T||[],getKey:(e,t)=>t,elements:y,parent:h.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(d,m,h,g,_)=>{u(c(()=>{let c=l(),u=n===d,m=p(`button`,c);e(c,m),o(m,`type`,`button`),o(m,`role`,`tab`),t(()=>{o(m,`aria-selected`,String(u?`true`:`false`))}),t(()=>{f(m,`tab ${u?`tab-active`:``}`)}),r(m,`click`,()=>s(d));let h=i(m);return e(m,h),t(()=>{a(h,d===`preview`?`预览`:`JSX代码`)}),c}),m,h)}})}),m}),E=n=>c(r=>{let i=p(`div`,r);f(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=p(`div`,i);e(i,a),f(a,`flex flex-wrap items-start justify-between gap-3`);let o=p(`div`,a);e(a,o);let d=p(`h2`,o);e(o,d),f(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(d,s(`# `));let _=g(`rue:slot:anchor`);e(d,_),t(()=>{let e=n.title;h(()=>u(e,d,_))});let v=g(`rue:slot:anchor`);e(o,v),t(()=>{let r=n.summary?c(()=>{let r=l(),i=p(`p`,r);e(r,i),f(i,`m-0 text-sm opacity-70`);let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;h(()=>u(e,i,a))}),r}):``;h(()=>u(r,o,v))});let b=g(`rue:slot:anchor`);e(i,b),t(()=>{let e=ee(n.tab.value,e=>n.tab.value=e);h(()=>u(e,i,b))}),e(i,s(` `));let x=g(`rue:slot:anchor`);return e(i,x),t(()=>{let r=n.tab.value===`preview`?w(n.title,n.preview):c(()=>{let r=l(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(y,{className:`mt-2`,lang:`tsx`,code:n.code});h(()=>u(e,r,i))}),r});h(()=>u(r,i,x))}),i}),D=n=>c(r=>{let i=p(`div`,r);f(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=p(`table`,i);e(i,a),f(a,`table table-zebra`);let d=p(`thead`,a);e(a,d);let m=p(`tr`,d);e(d,m);let _=p(`th`,m);e(m,_),e(_,s(`属性`));let y=p(`th`,m);e(m,y),e(y,s(`说明`));let b=p(`th`,m);e(m,b),e(b,s(`类型`));let x=p(`th`,m);e(m,x),e(x,s(`默认值`));let S=p(`tbody`,a);e(a,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,a,s)=>{u(c(()=>{let r=l(),i=p(`tr`,r);e(r,i),t(()=>{o(i,`key`,String(n.prop))});let a=p(`td`,i);e(i,a);let s=p(`code`,a);e(a,s);let c=g(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;h(()=>u(e,s,c))});let d=p(`td`,i);e(i,d);let f=g(`rue:slot:anchor`);e(d,f),t(()=>{let e=n.description;h(()=>u(e,d,f))});let m=p(`td`,i);e(i,m);let _=p(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>u(e,_,v))});let y=p(`td`,i);e(i,y);let b=p(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>u(e,b,x))}),r}),r,i)}})}),i}),te=()=>c(t=>{let n=p(`svg`,t);o(n,`xmlns`,`http://www.w3.org/2000/svg`),o(n,`viewBox`,`0 0 24 24`),o(n,`fill`,`none`),o(n,`stroke`,`currentColor`),o(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`path`,n);return e(n,r),o(r,`strokeLinecap`,`round`),o(r,`strokeLinejoin`,`round`),o(r,`d`,`M12 5v14M5 12h14`),n}),O=()=>c(t=>{let n=p(`svg`,t);o(n,`xmlns`,`http://www.w3.org/2000/svg`),o(n,`viewBox`,`0 0 24 24`),o(n,`fill`,`none`),o(n,`stroke`,`currentColor`),o(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`path`,n);e(n,r),o(r,`strokeLinecap`,`round`),o(r,`strokeLinejoin`,`round`),o(r,`d`,`M5 12h14`);let i=p(`path`,n);return e(n,i),o(i,`strokeLinecap`,`round`),o(i,`strokeLinejoin`,`round`),o(i,`d`,`m13 6 6 6-6 6`),n}),k=()=>c(t=>{let n=p(`svg`,t);o(n,`xmlns`,`http://www.w3.org/2000/svg`),o(n,`viewBox`,`0 0 24 24`),o(n,`fill`,`none`),o(n,`stroke`,`currentColor`),o(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`path`,n);return e(n,r),o(r,`strokeLinecap`,`round`),o(r,`strokeLinejoin`,`round`),o(r,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),n}),ne=()=>c(t=>{let n=p(`svg`,t);o(n,`xmlns`,`http://www.w3.org/2000/svg`),o(n,`viewBox`,`0 0 24 24`),o(n,`fill`,`none`),o(n,`stroke`,`currentColor`),o(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`path`,n);e(n,r),o(r,`strokeLinecap`,`round`),o(r,`strokeLinejoin`,`round`),o(r,`d`,`M4.5 19.5 9 15l6 6`);let i=p(`path`,n);e(n,i),o(i,`strokeLinecap`,`round`),o(i,`strokeLinejoin`,`round`),o(i,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let a=p(`path`,n);e(n,a),o(a,`strokeLinecap`,`round`),o(a,`strokeLinejoin`,`round`),o(a,`d`,`M15 9 9 15`);let s=p(`circle`,n);return e(n,s),o(s,`cx`,`14`),o(s,`cy`,`10`),o(s,`r`,`1`),o(s,`fill`,`currentColor`),o(s,`stroke`,`none`),n}),re=()=>c(t=>{let n=p(`svg`,t);o(n,`xmlns`,`http://www.w3.org/2000/svg`),o(n,`viewBox`,`0 0 24 24`),o(n,`fill`,`none`),o(n,`stroke`,`currentColor`),o(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`rect`,n);e(n,r),o(r,`x`,`3`),o(r,`y`,`5`),o(r,`width`,`18`),o(r,`height`,`14`),o(r,`rx`,`2`);let i=p(`path`,n);return e(n,i),o(i,`strokeLinecap`,`round`),o(i,`strokeLinejoin`,`round`),o(i,`d`,`m4 7 8 6 8-6`),n}),A=()=>c(t=>{let n=p(`svg`,t);o(n,`xmlns`,`http://www.w3.org/2000/svg`),o(n,`viewBox`,`0 0 24 24`),o(n,`fill`,`none`),o(n,`stroke`,`currentColor`),o(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`path`,n);e(n,r),o(r,`strokeLinecap`,`round`),o(r,`strokeLinejoin`,`round`),o(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let i=p(`path`,n);return e(n,i),o(i,`strokeLinecap`,`round`),o(i,`strokeLinejoin`,`round`),o(i,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ie=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ae=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],oe=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],se=n=>c(r=>{let i=p(`span`,r);t(()=>{f(i,`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${n.className??`bg-base-200 text-base-content`}`)});let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.text;h(()=>u(e,i,a))}),i}),ce=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代基础的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],le=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],j=()=>{let{tabTypes:r,tabResponsive:v,tabPalette:y,tabVariants:w,tabDanger:T,tabIcons:ee,tabLoading:j,tabClick:ue,tabSizes:de,tabGroup:fe,tabStates:pe,tabFormLink:me,tabRecipes:he,tabLogin:ge,submitCount:M,clickCount:N,lastAction:P}=_(`useSetup:0:0`,()=>d(()=>({tabTypes:_(`ref:1:0`,()=>n(`preview`)),tabResponsive:_(`ref:1:1`,()=>n(`preview`)),tabPalette:_(`ref:1:2`,()=>n(`preview`)),tabVariants:_(`ref:1:3`,()=>n(`preview`)),tabDanger:_(`ref:1:4`,()=>n(`preview`)),tabIcons:_(`ref:1:5`,()=>n(`preview`)),tabLoading:_(`ref:1:6`,()=>n(`preview`)),tabClick:_(`ref:1:7`,()=>n(`preview`)),tabSizes:_(`ref:1:8`,()=>n(`preview`)),tabGroup:_(`ref:1:9`,()=>n(`preview`)),tabStates:_(`ref:1:10`,()=>n(`preview`)),tabFormLink:_(`ref:1:11`,()=>n(`preview`)),tabRecipes:_(`ref:1:12`,()=>n(`preview`)),tabLogin:_(`ref:1:13`,()=>n(`preview`)),submitCount:_(`ref:1:14`,()=>n(0)),clickCount:_(`ref:1:15`,()=>n(0)),lastAction:_(`ref:1:16`,()=>n(`未触发`))})));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(C,{children:c(()=>{let n=l(),c=p(`div`,n);e(n,c),f(c,`max-w-none prose prose-sm md:prose-base`);let d=p(`h1`,c);e(c,d),e(d,s(`Button 按钮`));let _=p(`p`,c);e(c,_),f(_,`text-sm mt-3 mb-3`);let C=p(`code`,_);e(_,C),e(C,s(`type`)),e(_,s(`负责视觉类型，`));let F=p(`code`,_);e(_,F),e(F,s(`color`)),e(_,s(`负责主题色，再用`));let I=p(`code`,_);e(_,I),e(I,s(`shape`)),e(_,s(`、`));let L=p(`code`,_);e(_,L),e(L,s(`icon`)),e(_,s(`、`));let R=p(`code`,_);e(_,R),e(R,s(`loading`)),e(_,s(`补足交互细节。`));let z=p(`h2`,c);e(c,z),e(z,s(`何时使用`));let B=p(`ul`,c);e(c,B);let V=p(`li`,B);e(B,V),e(V,s(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let H=p(`li`,B);e(B,H),e(H,s(`需要在表单里区分视觉类型`));let U=p(`code`,H);e(H,U),e(U,s(`type`)),e(H,s(`和原生提交类型`));let W=p(`code`,H);e(H,W),e(W,s(`htmlType`)),e(H,s(`。`));let G=p(`li`,B);e(B,G),e(G,s(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let _e=g(`rue:component:anchor`);e(c,_e),t(()=>{let e=m(E,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:r,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[x(S,{children:`Solid`}),x(S,{type:`outlined`,children:`Outlined`}),x(S,{type:`dashed`,children:`Dashed`}),x(S,{type:`filled`,children:`Filled`}),x(S,{type:`text`,children:`Text`}),x(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});h(()=>u(e,c,_e))});let ve=g(`rue:component:anchor`);e(c,ve),t(()=>{let e=m(E,{title:`响应式尺寸`,summary:`把基础的响应式按钮演示保持回来，统一改成 size + className 的方式。`,tab:v,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:x(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});h(()=>u(e,c,ve))});let ye=g(`rue:component:anchor`);e(c,ye),t(()=>{let e=m(E,{title:`颜色色板`,summary:`颜色演示展示，但统一改成 color 语义。`,tab:y,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ie.map(e=>x(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});h(()=>u(e,c,ye))});let be=g(`rue:component:anchor`);e(c,be),t(()=>{let e=m(E,{title:`风格矩阵`,summary:`把基础的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-5`,children:[ae.map(e=>b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),x(`div`,{className:`flex flex-wrap gap-2`,children:ie.map(t=>x(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),b(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),b(`div`,{className:`flex flex-wrap gap-2`,children:[x(S,{color:`neutral`,type:`outlined`,children:`Outline`}),x(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});h(()=>u(e,c,be))});let xe=g(`rue:component:anchor`);e(c,xe),t(()=>{let e=m(E,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:T,preview:()=>x(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[x(S,{color:`danger`,children:`Delete forever`}),x(S,{color:`danger`,type:`outlined`,children:`Remove access`}),x(S,{color:`danger`,type:`filled`,children:`Archive branch`}),x(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});h(()=>u(e,c,xe))});let Se=g(`rue:component:anchor`);e(c,Se),t(()=>{let e=m(E,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ee,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[x(S,{color:`primary`,icon:x(te,{}),children:`Create project`}),x(S,{color:`secondary`,type:`outlined`,icon:x(O,{}),iconPlacement:`end`,children:`Continue`}),x(S,{color:`accent`,shape:`circle`,icon:x(k,{}),"aria-label":`收藏`}),x(S,{color:`info`,shape:`square`,icon:x(A,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});h(()=>u(e,c,Se))});let Ce=g(`rue:component:anchor`);e(c,Ce),t(()=>{let e=m(E,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:j,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[x(S,{color:`primary`,loading:!0,children:`Saving`}),x(S,{type:`outlined`,loading:{icon:x(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),x(S,{color:`success`,icon:x(ne,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});h(()=>u(e,c,Ce))});let we=g(`rue:component:anchor`);e(c,we),t(()=>{let e=m(E,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:ue,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(S,{color:`primary`,onClick:e=>{N.value+=1,P.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),x(S,{type:`outlined`,onClick:e=>{N.value+=1,P.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),x(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),N.value+=1,P.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),b(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[b(`div`,{children:[`click count: `,N.value]}),b(`div`,{children:[`last action: `,P.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});h(()=>u(e,c,we))});let Te=g(`rue:component:anchor`);e(c,Te),t(()=>{let e=m(E,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:de,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-5`,children:[b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),b(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(S,{size:`small`,children:`Small`}),x(S,{children:`Default`}),x(S,{size:`large`,color:`primary`,children:`Large`}),x(S,{size:`xs`,type:`outlined`,children:`XS`}),x(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),b(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(S,{color:`primary`,shape:`round`,children:`Round action`}),x(S,{color:`secondary`,shape:`square`,icon:x(A,{}),"aria-label":`square`}),x(S,{color:`accent`,shape:`circle`,icon:x(k,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});h(()=>u(e,c,Te))});let Ee=g(`rue:component:anchor`);e(c,Ee),t(()=>{let e=m(E,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:fe,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-6`,children:[b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{children:[x(S,{children:`Cancel`}),x(S,{color:`primary`,children:`Confirm`})]}),b(S.Group,{children:[x(S,{disabled:!0,children:`Yesterday`}),x(S,{disabled:!0,children:`Today`}),x(S,{disabled:!0,children:`Tomorrow`})]}),b(S.Group,{children:[x(S,{color:`primary`,children:`L`}),x(S,{children:`M`}),x(S,{children:`M`}),x(S,{type:`dashed`,children:`R`})]})]})]}),b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{children:[x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),b(S.Group,{children:[x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),b(S.Group,{children:[x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{shape:`circle`,children:[x(S,{color:`primary`,children:`Backward`}),x(S,{color:`primary`,children:`Forward`})]}),b(S.Group,{shape:`circle`,children:[x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),b(S.Group,{shape:`circle`,children:[x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),b(`div`,{className:`space-y-3`,children:[b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{size:`large`,children:[x(S,{children:`Large`}),x(S,{children:`Large`})]}),b(S.Group,{children:[x(S,{children:`Default`}),x(S,{children:`Default`})]}),b(S.Group,{size:`small`,children:[x(S,{children:`Small`}),x(S,{children:`Small`})]})]}),b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{size:`large`,shape:`circle`,children:[x(S,{children:`Large`}),x(S,{children:`Large`})]}),b(S.Group,{shape:`circle`,children:[x(S,{children:`Default`}),x(S,{children:`Default`})]}),b(S.Group,{size:`small`,shape:`circle`,children:[x(S,{children:`Small`}),x(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});h(()=>u(e,c,Ee))});let De=g(`rue:component:anchor`);e(c,De),t(()=>{let e=m(E,{title:`状态与布局`,summary:`把基础的 active、disabled、wide、block 示例也融合到当前页面。`,tab:pe,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-5`,children:[b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),b(`div`,{className:`flex flex-wrap gap-2`,children:[x(S,{active:!0,children:`Active`}),x(S,{color:`primary`,active:!0,children:`Primary active`}),x(S,{disabled:!0,children:`Disabled`}),x(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),b(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[x(S,{wide:!0,children:`Wide button`}),x(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});h(()=>u(e,c,De))});let Oe=g(`rue:component:anchor`);e(c,Oe),t(()=>{let e=m(E,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保持链接根节点、div 根节点和表单行为示例。`,tab:me,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:[x(S,{children:`Native button`}),x(S,{href:`#button-api`,children:`Anchor`}),x(S,{as:`div`,type:`text`,children:`Div button`})]}),b(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,M.value]}),b(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),M.value+=1},children:[x(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),x(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),x(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});h(()=>u(e,c,Oe))});let ke=g(`rue:component:anchor`);e(c,ke),t(()=>{let e=m(E,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:he,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:[x(S,{color:`primary`,icon:x(ne,{}),children:`Publish`}),x(S,{type:`outlined`,icon:x(O,{}),iconPlacement:`end`,children:`Preview`}),x(S,{type:`text`,icon:x(A,{}),children:`Save draft`})]}),b(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[x(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:x(re,{}),children:`Continue with Email`}),x(S,{block:!0,color:`primary`,className:`justify-start`,icon:x(A,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});h(()=>u(e,c,ke))});let Ae=g(`rue:component:anchor`);e(c,Ae),t(()=>{let e=m(E,{title:`登录按钮`,summary:`把基础的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ge,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:x(`div`,{className:`grid gap-2 md:grid-cols-2`,children:oe.map(e=>x(S,{block:!0,className:`justify-start ${e.className}`,icon:x(se,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});h(()=>u(e,c,Ae))});let K=p(`h2`,c);e(c,K),o(K,`id`,`button-api`),e(K,s(`API`));let je=p(`p`,c);e(c,je),e(je,s(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let q=p(`p`,c);e(c,q),e(q,s(`推荐使用顺序：`));let Me=p(`code`,q);e(q,Me),e(Me,s(`type`)),e(q,s(`->`));let Ne=p(`code`,q);e(q,Ne),e(Ne,s(`color`)),e(q,s(`->`));let Pe=p(`code`,q);e(q,Pe),e(Pe,s(`shape`)),e(q,s(`->`));let Fe=i(q);e(q,Fe),a(Fe,` `);let Ie=p(`code`,q);e(q,Ie),e(Ie,s(`size`)),e(q,s(`->`));let Le=p(`code`,q);e(q,Le),e(Le,s(`loading`)),e(q,s(`->`));let Re=p(`code`,q);e(q,Re),e(Re,s(`disabled`)),e(q,s(`。`));let ze=p(`h3`,c);e(c,ze),e(ze,s(`Button`));let Be=g(`rue:component:anchor`);e(c,Be),t(()=>{let e=m(D,{rows:ce});h(()=>u(e,c,Be))});let Ve=p(`h3`,c);e(c,Ve),e(Ve,s(`Button.Group`));let He=g(`rue:component:anchor`);e(c,He),t(()=>{let e=m(D,{rows:le});h(()=>u(e,c,He))});let Ue=p(`h2`,c);e(c,Ue),e(Ue,s(`FAQ`));let We=p(`h3`,c);e(c,We),e(We,s(`为什么有 type 还需要 htmlType？`));let J=p(`p`,c);e(c,J);let Ge=p(`code`,J);e(J,Ge),e(Ge,s(`type`)),e(J,s(`负责按钮视觉类型，`));let Ke=p(`code`,J);e(J,Ke),e(Ke,s(`htmlType`)),e(J,s(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let qe=p(`h3`,c);e(c,qe),e(qe,s(`type 和 color 应该怎么分工？`));let Y=p(`p`,c);e(c,Y);let Je=p(`code`,Y);e(Y,Je),e(Je,s(`type`)),e(Y,s(`负责视觉类型，比如`));let Ye=p(`code`,Y);e(Y,Ye),e(Ye,s(`outlined`)),e(Y,s(`、`));let Xe=p(`code`,Y);e(Y,Xe),e(Xe,s(`filled`)),e(Y,s(`、`));let Ze=p(`code`,Y);e(Y,Ze),e(Ze,s(`text`)),e(Y,s(`。`));let Qe=p(`code`,Y);e(Y,Qe),e(Qe,s(`color`)),e(Y,s(`负责主题色，比如`));let $e=p(`code`,Y);e(Y,$e),e($e,s(`primary`)),e(Y,s(`、`));let et=p(`code`,Y);e(Y,et),e(et,s(`secondary`)),e(Y,s(`、`));let tt=p(`code`,Y);e(Y,tt),e(tt,s(`danger`)),e(Y,s(`。`));let X=p(`p`,c);e(c,X),e(X,s(`大多数场景可以先定颜色， 再根据密度和层级选择`));let nt=p(`code`,X);e(X,nt),e(nt,s(`solid`)),e(X,s(`、`));let rt=p(`code`,X);e(X,rt),e(rt,s(`outlined`)),e(X,s(`、`));let Z=p(`code`,X);e(X,Z),e(Z,s(`filled`)),e(X,s(`或`));let it=p(`code`,X);e(X,it),e(it,s(`text`)),e(X,s(`。`));let at=p(`h3`,c);e(c,at),e(at,s(`loading 对象里的 delay 会生效吗？`));let Q=p(`p`,c);e(c,Q),e(Q,s(`当前组件支持`));let ot=p(`code`,Q);e(Q,ot),e(ot,s(`loading`)),e(Q,s(`的对象写法和自定义`));let st=p(`code`,Q);e(Q,st),e(st,s(`icon`)),e(Q,s(`。`));let ct=p(`code`,Q);e(Q,ct),e(ct,s(`delay`)),e(Q,s(`字段已保持在配置结构里，后续如果补充延迟显示策略，可以直接在当前接口上继续扩展。`));let lt=p(`h3`,c);e(c,lt),e(lt,s(`Button.Group 会覆盖子按钮哪些属性？`));let $=p(`p`,c);e(c,$),e($,s(`组级只会统一同步`));let ut=p(`code`,$);e($,ut),e(ut,s(`size`)),e($,s(`和`));let dt=p(`code`,$);e($,dt),e(dt,s(`shape`)),e($,s(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ft=p(`code`,$);e($,ft),e(ft,s(`color`)),e($,s(`、`));let pt=p(`code`,$);e($,pt),e(pt,s(`type`)),e($,s(`、`));let mt=p(`code`,$);e($,mt),e(mt,s(`disabled`)),e($,s(`、`));let ht=p(`code`,$);e($,ht),e(ht,s(`onClick`)),e($,s(`仍然在各自的`));let gt=i($);e($,gt),a(gt,` `);let _t=p(`code`,$);return e($,_t),e(_t,s(`Button`)),e($,s(`上配置。`)),n})}),d,_),d})};export{j as default};