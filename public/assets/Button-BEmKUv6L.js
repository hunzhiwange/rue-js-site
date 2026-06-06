import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{n as y,t as b}from"./src-BLzF0BqW.js";import{n as x}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as S}from"./button-B1PhsXzm.js";import{t as C}from"./tabs-BOxm6iIN.js";import{t as w}from"./preview-test-gate-DtKtoe96.js";var T=a=>d(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let m=s(`div`,u);t(u,m);let g=s(`h2`,m);t(m,g),e(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(g,r(`# `));let _=i(`rue:slot:anchor`);t(g,_),n(()=>{let e=a.title;h(()=>f(e,g,_))});let y=i(`rue:slot:anchor`);t(m,y),n(()=>{let r=a.summary?d(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;h(()=>f(e,c,l))}),r}):``;h(()=>f(r,m,y))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});h(()=>f(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?w(a.title,a.preview):d(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=p(v,{className:`mt-2`,lang:`tsx`,code:a.code});h(()=>f(t,e,r))}),e});h(()=>f(e,l,x))}),l}),ee=a=>d(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,u);t(u,p),e(p,`table table-zebra`);let m=s(`thead`,p);t(p,m);let g=s(`tr`,m);t(m,g);let v=s(`th`,g);t(g,v),t(v,r(`属性`));let y=s(`th`,g);t(g,y),t(y,r(`说明`));let b=s(`th`,g);t(g,b),t(b,r(`类型`));let x=s(`th`,g);t(g,x),t(x,r(`默认值`));let S=s(`tbody`,p);t(p,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{f(d(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;h(()=>f(t,u,d))});let p=s(`td`,a);t(a,p);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let t=e.description;h(()=>f(t,p,m))});let g=s(`td`,a);t(a,g);let _=s(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>f(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>f(t,b,x))}),r}),r,a)}})}),u}),te=()=>d(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`viewBox`,`0 0 24 24`),c(r,`fill`,`none`),c(r,`stroke`,`currentColor`),c(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M12 5v14M5 12h14`),r}),E=()=>d(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`viewBox`,`0 0 24 24`),c(r,`fill`,`none`),c(r,`stroke`,`currentColor`),c(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=s(`path`,r);t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M5 12h14`);let a=s(`path`,r);return t(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`m13 6 6 6-6 6`),r}),D=()=>d(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`viewBox`,`0 0 24 24`),c(r,`fill`,`none`),c(r,`stroke`,`currentColor`),c(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),r}),O=()=>d(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`viewBox`,`0 0 24 24`),c(r,`fill`,`none`),c(r,`stroke`,`currentColor`),c(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=s(`path`,r);t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M4.5 19.5 9 15l6 6`);let a=s(`path`,r);t(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let o=s(`path`,r);t(r,o),c(o,`strokeLinecap`,`round`),c(o,`strokeLinejoin`,`round`),c(o,`d`,`M15 9 9 15`);let l=s(`circle`,r);return t(r,l),c(l,`cx`,`14`),c(l,`cy`,`10`),c(l,`r`,`1`),c(l,`fill`,`currentColor`),c(l,`stroke`,`none`),r}),ne=()=>d(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`viewBox`,`0 0 24 24`),c(r,`fill`,`none`),c(r,`stroke`,`currentColor`),c(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=s(`rect`,r);t(r,i),c(i,`x`,`3`),c(i,`y`,`5`),c(i,`width`,`18`),c(i,`height`,`14`),c(i,`rx`,`2`);let a=s(`path`,r);return t(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`m4 7 8 6 8-6`),r}),k=()=>d(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`viewBox`,`0 0 24 24`),c(r,`fill`,`none`),c(r,`stroke`,`currentColor`),c(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=s(`path`,r);t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=s(`path`,r);return t(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),r}),re=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ie=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],ae=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],oe=r=>d(a=>{let o=s(`span`,a);n(()=>{e(o,String(`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${r.className??`bg-base-200 text-base-content`}`))});let c=i(`rue:slot:anchor`);return t(o,c),n(()=>{let e=r.text;h(()=>f(e,o,c))}),o}),se=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],ce=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],le=()=>{let{tabTypes:_,tabResponsive:v,tabPalette:C,tabVariants:w,tabDanger:le,tabIcons:ue,tabLoading:de,tabClick:fe,tabSizes:pe,tabGroup:me,tabStates:he,tabFormLink:ge,tabRecipes:_e,tabLogin:ve,submitCount:A,clickCount:j,lastAction:M}=g(`useSetup:0:0`,()=>m(()=>({tabTypes:g(`ref:1:0`,()=>u(`preview`)),tabResponsive:g(`ref:1:1`,()=>u(`preview`)),tabPalette:g(`ref:1:2`,()=>u(`preview`)),tabVariants:g(`ref:1:3`,()=>u(`preview`)),tabDanger:g(`ref:1:4`,()=>u(`preview`)),tabIcons:g(`ref:1:5`,()=>u(`preview`)),tabLoading:g(`ref:1:6`,()=>u(`preview`)),tabClick:g(`ref:1:7`,()=>u(`preview`)),tabSizes:g(`ref:1:8`,()=>u(`preview`)),tabGroup:g(`ref:1:9`,()=>u(`preview`)),tabStates:g(`ref:1:10`,()=>u(`preview`)),tabFormLink:g(`ref:1:11`,()=>u(`preview`)),tabRecipes:g(`ref:1:12`,()=>u(`preview`)),tabLogin:g(`ref:1:13`,()=>u(`preview`)),submitCount:g(`ref:1:14`,()=>u(0)),clickCount:g(`ref:1:15`,()=>u(0)),lastAction:g(`ref:1:16`,()=>u(`未触发`))})));return d(u=>{let m=o(),g=i(`rue:component:anchor`);return t(m,g),f(p(x,{children:d(()=>{let u=o(),d=s(`div`,u);t(u,d),e(d,`max-w-none prose prose-sm md:prose-base`);let m=s(`h1`,d);t(d,m),t(m,r(`Button 按钮`));let g=s(`p`,d);t(d,g),e(g,`text-sm mt-3 mb-3`);let x=s(`code`,g);t(g,x),t(x,r(`type`)),t(g,r(`负责视觉类型，`));let N=s(`code`,g);t(g,N),t(N,r(`color`)),t(g,r(`负责主题色，再用`));let P=s(`code`,g);t(g,P),t(P,r(`shape`)),t(g,r(`、`));let F=s(`code`,g);t(g,F),t(F,r(`icon`)),t(g,r(`、`));let I=s(`code`,g);t(g,I),t(I,r(`loading`)),t(g,r(`补足交互细节。`));let L=s(`h2`,d);t(d,L),t(L,r(`何时使用`));let R=s(`ul`,d);t(d,R);let z=s(`li`,R);t(R,z),t(z,r(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let B=s(`li`,R);t(R,B),t(B,r(`需要在表单里区分视觉类型`));let V=s(`code`,B);t(B,V),t(V,r(`type`)),t(B,r(`和原生提交类型`));let H=s(`code`,B);t(B,H),t(H,r(`htmlType`)),t(B,r(`。`));let U=s(`li`,R);t(R,U),t(U,r(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let W=i(`rue:component:anchor`);t(d,W),n(()=>{let e=p(T,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:_,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{children:`Solid`}),b(S,{type:`outlined`,children:`Outlined`}),b(S,{type:`dashed`,children:`Dashed`}),b(S,{type:`filled`,children:`Filled`}),b(S,{type:`text`,children:`Text`}),b(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});h(()=>f(e,d,W))});let ye=i(`rue:component:anchor`);t(d,ye),n(()=>{let e=p(T,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:b(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});h(()=>f(e,d,ye))});let be=i(`rue:component:anchor`);t(d,be),n(()=>{let e=p(T,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:re.map(e=>b(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});h(()=>f(e,d,be))});let xe=i(`rue:component:anchor`);t(d,xe),n(()=>{let e=p(T,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[ie.map(e=>y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),b(`div`,{className:`flex flex-wrap gap-2`,children:re.map(t=>b(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),y(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`neutral`,type:`outlined`,children:`Outline`}),b(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});h(()=>f(e,d,xe))});let Se=i(`rue:component:anchor`);t(d,Se),n(()=>{let e=p(T,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:le,preview:()=>b(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`danger`,children:`Delete forever`}),b(S,{color:`danger`,type:`outlined`,children:`Remove access`}),b(S,{color:`danger`,type:`filled`,children:`Archive branch`}),b(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});h(()=>f(e,d,Se))});let Ce=i(`rue:component:anchor`);t(d,Ce),n(()=>{let e=p(T,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ue,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,icon:b(te,{}),children:`Create project`}),b(S,{color:`secondary`,type:`outlined`,icon:b(E,{}),iconPlacement:`end`,children:`Continue`}),b(S,{color:`accent`,shape:`circle`,icon:b(D,{}),"aria-label":`收藏`}),b(S,{color:`info`,shape:`square`,icon:b(k,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});h(()=>f(e,d,Ce))});let we=i(`rue:component:anchor`);t(d,we),n(()=>{let e=p(T,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:de,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,loading:!0,children:`Saving`}),b(S,{type:`outlined`,loading:{icon:b(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),b(S,{color:`success`,icon:b(O,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});h(()=>f(e,d,we))});let Te=i(`rue:component:anchor`);t(d,Te),n(()=>{let e=p(T,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:fe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,onClick:e=>{j.value+=1,M.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),b(S,{type:`outlined`,onClick:e=>{j.value+=1,M.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),b(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),j.value+=1,M.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),y(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[y(`div`,{children:[`click count: `,j.value]}),y(`div`,{children:[`last action: `,M.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});h(()=>f(e,d,Te))});let Ee=i(`rue:component:anchor`);t(d,Ee),n(()=>{let e=p(T,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:pe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{size:`small`,children:`Small`}),b(S,{children:`Default`}),b(S,{size:`large`,color:`primary`,children:`Large`}),b(S,{size:`xs`,type:`outlined`,children:`XS`}),b(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,shape:`round`,children:`Round action`}),b(S,{color:`secondary`,shape:`square`,icon:b(k,{}),"aria-label":`square`}),b(S,{color:`accent`,shape:`circle`,icon:b(D,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});h(()=>f(e,d,Ee))});let De=i(`rue:component:anchor`);t(d,De),n(()=>{let e=p(T,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:me,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{children:`Cancel`}),b(S,{color:`primary`,children:`Confirm`})]}),y(S.Group,{children:[b(S,{disabled:!0,children:`Yesterday`}),b(S,{disabled:!0,children:`Today`}),b(S,{disabled:!0,children:`Tomorrow`})]}),y(S.Group,{children:[b(S,{color:`primary`,children:`L`}),b(S,{children:`M`}),b(S,{children:`M`}),b(S,{type:`dashed`,children:`R`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),y(S.Group,{children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,children:`Backward`}),b(S,{color:`primary`,children:`Forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,shape:`circle`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{shape:`circle`,children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,shape:`circle`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});h(()=>f(e,d,De))});let Oe=i(`rue:component:anchor`);t(d,Oe),n(()=>{let e=p(T,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:he,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{active:!0,children:`Active`}),b(S,{color:`primary`,active:!0,children:`Primary active`}),b(S,{disabled:!0,children:`Disabled`}),b(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),y(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[b(S,{wide:!0,children:`Wide button`}),b(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});h(()=>f(e,d,Oe))});let ke=i(`rue:component:anchor`);t(d,ke),n(()=>{let e=p(T,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:ge,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{children:`Native button`}),b(S,{href:`#button-api`,children:`Anchor`}),b(S,{as:`div`,type:`text`,children:`Div button`})]}),y(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,A.value]}),y(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),A.value+=1},children:[b(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),b(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),b(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});h(()=>f(e,d,ke))});let Ae=i(`rue:component:anchor`);t(d,Ae),n(()=>{let e=p(T,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:_e,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`primary`,icon:b(O,{}),children:`Publish`}),b(S,{type:`outlined`,icon:b(E,{}),iconPlacement:`end`,children:`Preview`}),b(S,{type:`text`,icon:b(k,{}),children:`Save draft`})]}),y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[b(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:b(ne,{}),children:`Continue with Email`}),b(S,{block:!0,color:`primary`,className:`justify-start`,icon:b(k,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});h(()=>f(e,d,Ae))});let je=i(`rue:component:anchor`);t(d,je),n(()=>{let e=p(T,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ve,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(`div`,{className:`grid gap-2 md:grid-cols-2`,children:ae.map(e=>b(S,{block:!0,className:`justify-start ${e.className}`,icon:b(oe,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});h(()=>f(e,d,je))});let G=s(`h2`,d);t(d,G),c(G,`id`,`button-api`),t(G,r(`API`));let Me=s(`p`,d);t(d,Me),t(Me,r(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let K=s(`p`,d);t(d,K),t(K,r(`推荐使用顺序：`));let Ne=s(`code`,K);t(K,Ne),t(Ne,r(`type`)),t(K,r(`->`));let Pe=s(`code`,K);t(K,Pe),t(Pe,r(`color`)),t(K,r(`->`));let Fe=s(`code`,K);t(K,Fe),t(Fe,r(`shape`)),t(K,r(`->`));let Ie=a(K);t(K,Ie),l(Ie,` `);let Le=s(`code`,K);t(K,Le),t(Le,r(`size`)),t(K,r(`->`));let Re=s(`code`,K);t(K,Re),t(Re,r(`loading`)),t(K,r(`->`));let ze=s(`code`,K);t(K,ze),t(ze,r(`disabled`)),t(K,r(`。`));let Be=s(`h3`,d);t(d,Be),t(Be,r(`Button`));let Ve=i(`rue:component:anchor`);t(d,Ve),n(()=>{let e=p(ee,{rows:se});h(()=>f(e,d,Ve))});let He=s(`h3`,d);t(d,He),t(He,r(`Button.Group`));let Ue=i(`rue:component:anchor`);t(d,Ue),n(()=>{let e=p(ee,{rows:ce});h(()=>f(e,d,Ue))});let We=s(`h2`,d);t(d,We),t(We,r(`FAQ`));let Ge=s(`h3`,d);t(d,Ge),t(Ge,r(`为什么有 type 还需要 htmlType？`));let q=s(`p`,d);t(d,q);let Ke=s(`code`,q);t(q,Ke),t(Ke,r(`type`)),t(q,r(`负责按钮视觉类型，`));let qe=s(`code`,q);t(q,qe),t(qe,r(`htmlType`)),t(q,r(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let Je=s(`h3`,d);t(d,Je),t(Je,r(`type 和 color 应该怎么分工？`));let J=s(`p`,d);t(d,J);let Ye=s(`code`,J);t(J,Ye),t(Ye,r(`type`)),t(J,r(`负责视觉类型，比如`));let Xe=s(`code`,J);t(J,Xe),t(Xe,r(`outlined`)),t(J,r(`、`));let Ze=s(`code`,J);t(J,Ze),t(Ze,r(`filled`)),t(J,r(`、`));let Qe=s(`code`,J);t(J,Qe),t(Qe,r(`text`)),t(J,r(`。`));let $e=s(`code`,J);t(J,$e),t($e,r(`color`)),t(J,r(`负责主题色，比如`));let et=s(`code`,J);t(J,et),t(et,r(`primary`)),t(J,r(`、`));let tt=s(`code`,J);t(J,tt),t(tt,r(`secondary`)),t(J,r(`、`));let nt=s(`code`,J);t(J,nt),t(nt,r(`danger`)),t(J,r(`。`));let Y=s(`p`,d);t(d,Y),t(Y,r(`大多数场景可以先定颜色， 再根据密度和层级选择`));let rt=s(`code`,Y);t(Y,rt),t(rt,r(`solid`)),t(Y,r(`、`));let it=s(`code`,Y);t(Y,it),t(it,r(`outlined`)),t(Y,r(`、`));let X=s(`code`,Y);t(Y,X),t(X,r(`filled`)),t(Y,r(`或`));let at=s(`code`,Y);t(Y,at),t(at,r(`text`)),t(Y,r(`。`));let ot=s(`h3`,d);t(d,ot),t(ot,r(`loading 对象里的 delay 会生效吗？`));let Z=s(`p`,d);t(d,Z),t(Z,r(`当前版本已经支持`));let st=s(`code`,Z);t(Z,st),t(st,r(`loading`)),t(Z,r(`的对象写法和自定义`));let ct=s(`code`,Z);t(Z,ct),t(ct,r(`icon`)),t(Z,r(`。`));let lt=s(`code`,Z);t(Z,lt),t(lt,r(`delay`)),t(Z,r(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let ut=s(`h3`,d);t(d,ut),t(ut,r(`Button.Group 会覆盖子按钮哪些属性？`));let Q=s(`p`,d);t(d,Q),t(Q,r(`组级只会统一同步`));let dt=s(`code`,Q);t(Q,dt),t(dt,r(`size`)),t(Q,r(`和`));let ft=s(`code`,Q);t(Q,ft),t(ft,r(`shape`)),t(Q,r(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let pt=s(`code`,Q);t(Q,pt),t(pt,r(`color`)),t(Q,r(`、`));let mt=s(`code`,Q);t(Q,mt),t(mt,r(`type`)),t(Q,r(`、`));let ht=s(`code`,Q);t(Q,ht),t(ht,r(`disabled`)),t(Q,r(`、`));let gt=s(`code`,Q);t(Q,gt),t(gt,r(`onClick`)),t(Q,r(`仍然在各自的`));let _t=a(Q);t(Q,_t),l(_t,` `);let $=s(`code`,Q);return t(Q,$),t($,r(`Button`)),t(Q,r(`上配置。`)),u})}),m,g),m})};export{le as default};