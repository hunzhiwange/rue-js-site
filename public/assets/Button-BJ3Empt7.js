import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,s as p,t as m,tt as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g,n as _}from"./vapor-helpers-vapor-CJFAWine.js";import{a as v,i as y}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as b}from"./Code-Ds9lKLk6.js";import{t as x}from"./button-Cy4xZBmC.js";import{t as S}from"./tabs-DSy0eY-V.js";import{n as C}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as w}from"./preview-test-gate-CxeqnU1g.js";var T=t=>u(n=>{let d=e(`div`,n);c(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),c(f,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,f);a(f,h);let g=e(`h2`,h);a(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,l(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>p(e,g,_))});let v=s(`rue:slot:anchor`);a(h,v),o(()=>{let n=t.summary?u(()=>{let n=r(),l=e(`p`,n);a(n,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(l,u),o(()=>{let e=t.summary;i(()=>p(e,l,u))}),n}):``;i(()=>p(n,h,v))});let y=s(`rue:component:anchor`);a(d,y),o(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>p(e,d,y))});let x=s(`rue:slot:anchor`);return a(d,x),o(()=>{let e=t.tab.value===`preview`?w(t.title,t.preview):u(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=m(b,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>p(r,e,n))}),e});i(()=>p(e,d,x))}),d}),ee=t=>u(n=>{let d=e(`div`,n);c(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,d);a(d,m),c(m,`table table-zebra`);let h=e(`thead`,m);a(m,h);let g=e(`tr`,h);a(h,g);let v=e(`th`,g);a(g,v),a(v,l(`属性`));let y=e(`th`,g);a(g,y),a(y,l(`说明`));let b=e(`th`,g);a(g,b),a(b,l(`类型`));let x=e(`th`,g);a(g,x),a(x,l(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,l,d)=>{p(u(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{f(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=s(`rue:slot:anchor`);a(u,d),o(()=>{let e=t.prop;i(()=>p(e,u,d))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>p(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>p(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>p(e,b,x))}),n}),n,c)}})}),d}),te=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);return a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M12 5v14M5 12h14`),n}),E=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M5 12h14`);let i=e(`path`,n);return a(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`m13 6 6 6-6 6`),n}),D=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);return a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),n}),O=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M4.5 19.5 9 15l6 6`);let i=e(`path`,n);a(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let o=e(`path`,n);a(n,o),f(o,`strokeLinecap`,`round`),f(o,`strokeLinejoin`,`round`),f(o,`d`,`M15 9 9 15`);let s=e(`circle`,n);return a(n,s),f(s,`cx`,`14`),f(s,`cy`,`10`),f(s,`r`,`1`),f(s,`fill`,`currentColor`),f(s,`stroke`,`none`),n}),ne=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`rect`,n);a(n,r),f(r,`x`,`3`),f(r,`y`,`5`),f(r,`width`,`18`),f(r,`height`,`14`),f(r,`rx`,`2`);let i=e(`path`,n);return a(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`m4 7 8 6 8-6`),n}),k=()=>u(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`viewBox`,`0 0 24 24`),f(n,`fill`,`none`),f(n,`stroke`,`currentColor`),f(n,`strokeWidth`,`2`),c(n,`size-[1.05em]`);let r=e(`path`,n);a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let i=e(`path`,n);return a(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),re=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ie=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],ae=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],oe=t=>u(n=>{let r=e(`span`,n);o(()=>{c(r,String(`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${t.className??`bg-base-200 text-base-content`}`))});let l=s(`rue:slot:anchor`);return a(r,l),o(()=>{let e=t.text;i(()=>p(e,r,l))}),r}),se=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],ce=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],le=()=>{let{tabTypes:_,tabResponsive:b,tabPalette:S,tabVariants:w,tabDanger:le,tabIcons:ue,tabLoading:de,tabClick:fe,tabSizes:pe,tabGroup:me,tabStates:he,tabFormLink:ge,tabRecipes:_e,tabLogin:ve,submitCount:A,clickCount:j,lastAction:M}=g(`useSetup:0:0`,()=>t(()=>({tabTypes:g(`ref:1:0`,()=>n(`preview`)),tabResponsive:g(`ref:1:1`,()=>n(`preview`)),tabPalette:g(`ref:1:2`,()=>n(`preview`)),tabVariants:g(`ref:1:3`,()=>n(`preview`)),tabDanger:g(`ref:1:4`,()=>n(`preview`)),tabIcons:g(`ref:1:5`,()=>n(`preview`)),tabLoading:g(`ref:1:6`,()=>n(`preview`)),tabClick:g(`ref:1:7`,()=>n(`preview`)),tabSizes:g(`ref:1:8`,()=>n(`preview`)),tabGroup:g(`ref:1:9`,()=>n(`preview`)),tabStates:g(`ref:1:10`,()=>n(`preview`)),tabFormLink:g(`ref:1:11`,()=>n(`preview`)),tabRecipes:g(`ref:1:12`,()=>n(`preview`)),tabLogin:g(`ref:1:13`,()=>n(`preview`)),submitCount:g(`ref:1:14`,()=>n(0)),clickCount:g(`ref:1:15`,()=>n(0)),lastAction:g(`ref:1:16`,()=>n(`未触发`))})));return u(t=>{let n=r(),g=s(`rue:component:anchor`);return a(n,g),p(m(C,{children:u(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,n);a(n,u),a(u,l(`Button 按钮`));let g=e(`p`,n);a(n,g),c(g,`text-sm mt-3 mb-3`);let C=e(`code`,g);a(g,C),a(C,l(`type`)),a(g,l(`负责视觉类型，`));let N=e(`code`,g);a(g,N),a(N,l(`color`)),a(g,l(`负责主题色，再用`));let P=e(`code`,g);a(g,P),a(P,l(`shape`)),a(g,l(`、`));let F=e(`code`,g);a(g,F),a(F,l(`icon`)),a(g,l(`、`));let I=e(`code`,g);a(g,I),a(I,l(`loading`)),a(g,l(`补足交互细节。`));let L=e(`h2`,n);a(n,L),a(L,l(`何时使用`));let R=e(`ul`,n);a(n,R);let z=e(`li`,R);a(R,z),a(z,l(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let B=e(`li`,R);a(R,B),a(B,l(`需要在表单里区分视觉类型`));let V=e(`code`,B);a(B,V),a(V,l(`type`)),a(B,l(`和原生提交类型`));let H=e(`code`,B);a(B,H),a(H,l(`htmlType`)),a(B,l(`。`));let U=e(`li`,R);a(R,U),a(U,l(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let W=s(`rue:component:anchor`);a(n,W),o(()=>{let e=m(T,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(x,{children:`Solid`}),y(x,{type:`outlined`,children:`Outlined`}),y(x,{type:`dashed`,children:`Dashed`}),y(x,{type:`filled`,children:`Filled`}),y(x,{type:`text`,children:`Text`}),y(x,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});i(()=>p(e,n,W))});let ye=s(`rue:component:anchor`);a(n,ye),o(()=>{let e=m(T,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:b,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:y(x,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});i(()=>p(e,n,ye))});let be=s(`rue:component:anchor`);a(n,be),o(()=>{let e=m(T,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:S,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:re.map(e=>y(x,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});i(()=>p(e,n,be))});let xe=s(`rue:component:anchor`);a(n,xe),o(()=>{let e=m(T,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[ie.map(e=>v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),y(`div`,{className:`flex flex-wrap gap-2`,children:re.map(t=>y(x,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),v(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),v(`div`,{className:`flex flex-wrap gap-2`,children:[y(x,{color:`neutral`,type:`outlined`,children:`Outline`}),y(x,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});i(()=>p(e,n,xe))});let Se=s(`rue:component:anchor`);a(n,Se),o(()=>{let e=m(T,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:le,preview:()=>y(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(x,{color:`danger`,children:`Delete forever`}),y(x,{color:`danger`,type:`outlined`,children:`Remove access`}),y(x,{color:`danger`,type:`filled`,children:`Archive branch`}),y(x,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});i(()=>p(e,n,Se))});let Ce=s(`rue:component:anchor`);a(n,Ce),o(()=>{let e=m(T,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ue,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(x,{color:`primary`,icon:y(te,{}),children:`Create project`}),y(x,{color:`secondary`,type:`outlined`,icon:y(E,{}),iconPlacement:`end`,children:`Continue`}),y(x,{color:`accent`,shape:`circle`,icon:y(D,{}),"aria-label":`收藏`}),y(x,{color:`info`,shape:`square`,icon:y(k,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});i(()=>p(e,n,Ce))});let we=s(`rue:component:anchor`);a(n,we),o(()=>{let e=m(T,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:de,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(x,{color:`primary`,loading:!0,children:`Saving`}),y(x,{type:`outlined`,loading:{icon:y(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),y(x,{color:`success`,icon:y(O,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});i(()=>p(e,n,we))});let Te=s(`rue:component:anchor`);a(n,Te),o(()=>{let e=m(T,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:fe,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(x,{color:`primary`,onClick:e=>{j.value+=1,M.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),y(x,{type:`outlined`,onClick:e=>{j.value+=1,M.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),y(x,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),j.value+=1,M.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),v(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[v(`div`,{children:[`click count: `,j.value]}),v(`div`,{children:[`last action: `,M.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});i(()=>p(e,n,Te))});let Ee=s(`rue:component:anchor`);a(n,Ee),o(()=>{let e=m(T,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:pe,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(x,{size:`small`,children:`Small`}),y(x,{children:`Default`}),y(x,{size:`large`,color:`primary`,children:`Large`}),y(x,{size:`xs`,type:`outlined`,children:`XS`}),y(x,{size:`xl`,color:`secondary`,children:`XL`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(x,{color:`primary`,shape:`round`,children:`Round action`}),y(x,{color:`secondary`,shape:`square`,icon:y(k,{}),"aria-label":`square`}),y(x,{color:`accent`,shape:`circle`,icon:y(D,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});i(()=>p(e,n,Ee))});let De=s(`rue:component:anchor`);a(n,De),o(()=>{let e=m(T,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:me,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6`,children:[v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(x.Group,{children:[y(x,{children:`Cancel`}),y(x,{color:`primary`,children:`Confirm`})]}),v(x.Group,{children:[y(x,{disabled:!0,children:`Yesterday`}),y(x,{disabled:!0,children:`Today`}),y(x,{disabled:!0,children:`Tomorrow`})]}),v(x.Group,{children:[y(x,{color:`primary`,children:`L`}),y(x,{children:`M`}),y(x,{children:`M`}),y(x,{type:`dashed`,children:`R`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(x.Group,{children:[y(x,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),y(x,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),v(x.Group,{children:[y(x,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),y(x,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),v(x.Group,{children:[y(x,{icon:y(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),y(x,{icon:y(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),y(x,{icon:y(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),y(x,{icon:y(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(x.Group,{shape:`circle`,children:[y(x,{color:`primary`,children:`Backward`}),y(x,{color:`primary`,children:`Forward`})]}),v(x.Group,{shape:`circle`,children:[y(x,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),y(x,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),v(x.Group,{shape:`circle`,children:[y(x,{icon:y(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),y(x,{icon:y(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),y(x,{icon:y(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),y(x,{icon:y(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),v(`div`,{className:`space-y-3`,children:[v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(x.Group,{size:`large`,children:[y(x,{children:`Large`}),y(x,{children:`Large`})]}),v(x.Group,{children:[y(x,{children:`Default`}),y(x,{children:`Default`})]}),v(x.Group,{size:`small`,children:[y(x,{children:`Small`}),y(x,{children:`Small`})]})]}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(x.Group,{size:`large`,shape:`circle`,children:[y(x,{children:`Large`}),y(x,{children:`Large`})]}),v(x.Group,{shape:`circle`,children:[y(x,{children:`Default`}),y(x,{children:`Default`})]}),v(x.Group,{size:`small`,shape:`circle`,children:[y(x,{children:`Small`}),y(x,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});i(()=>p(e,n,De))});let Oe=s(`rue:component:anchor`);a(n,Oe),o(()=>{let e=m(T,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:he,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),v(`div`,{className:`flex flex-wrap gap-2`,children:[y(x,{active:!0,children:`Active`}),y(x,{color:`primary`,active:!0,children:`Primary active`}),y(x,{disabled:!0,children:`Disabled`}),y(x,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),v(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[y(x,{wide:!0,children:`Wide button`}),y(x,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});i(()=>p(e,n,Oe))});let ke=s(`rue:component:anchor`);a(n,ke),o(()=>{let e=m(T,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:ge,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap gap-2`,children:[y(x,{children:`Native button`}),y(x,{href:`#button-api`,children:`Anchor`}),y(x,{as:`div`,type:`text`,children:`Div button`})]}),v(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,A.value]}),v(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),A.value+=1},children:[y(x,{color:`primary`,htmlType:`submit`,children:`Submit form`}),y(x,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),y(x,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});i(()=>p(e,n,ke))});let Ae=s(`rue:component:anchor`);a(n,Ae),o(()=>{let e=m(T,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:_e,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap gap-2`,children:[y(x,{color:`primary`,icon:y(O,{}),children:`Publish`}),y(x,{type:`outlined`,icon:y(E,{}),iconPlacement:`end`,children:`Preview`}),y(x,{type:`text`,icon:y(k,{}),children:`Save draft`})]}),v(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[y(x,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:y(ne,{}),children:`Continue with Email`}),y(x,{block:!0,color:`primary`,className:`justify-start`,icon:y(k,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});i(()=>p(e,n,Ae))});let je=s(`rue:component:anchor`);a(n,je),o(()=>{let e=m(T,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ve,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:ae.map(e=>y(x,{block:!0,className:`justify-start ${e.className}`,icon:y(oe,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});i(()=>p(e,n,je))});let G=e(`h2`,n);a(n,G),f(G,`id`,`button-api`),a(G,l(`API`));let Me=e(`p`,n);a(n,Me),a(Me,l(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let K=e(`p`,n);a(n,K),a(K,l(`推荐使用顺序：`));let Ne=e(`code`,K);a(K,Ne),a(Ne,l(`type`)),a(K,l(`->`));let Pe=e(`code`,K);a(K,Pe),a(Pe,l(`color`)),a(K,l(`->`));let Fe=e(`code`,K);a(K,Fe),a(Fe,l(`shape`)),a(K,l(`->`));let Ie=h(K);a(K,Ie),d(Ie,` `);let Le=e(`code`,K);a(K,Le),a(Le,l(`size`)),a(K,l(`->`));let Re=e(`code`,K);a(K,Re),a(Re,l(`loading`)),a(K,l(`->`));let ze=e(`code`,K);a(K,ze),a(ze,l(`disabled`)),a(K,l(`。`));let Be=e(`h3`,n);a(n,Be),a(Be,l(`Button`));let Ve=s(`rue:component:anchor`);a(n,Ve),o(()=>{let e=m(ee,{rows:se});i(()=>p(e,n,Ve))});let He=e(`h3`,n);a(n,He),a(He,l(`Button.Group`));let Ue=s(`rue:component:anchor`);a(n,Ue),o(()=>{let e=m(ee,{rows:ce});i(()=>p(e,n,Ue))});let We=e(`h2`,n);a(n,We),a(We,l(`FAQ`));let Ge=e(`h3`,n);a(n,Ge),a(Ge,l(`为什么有 type 还需要 htmlType？`));let q=e(`p`,n);a(n,q);let Ke=e(`code`,q);a(q,Ke),a(Ke,l(`type`)),a(q,l(`负责按钮视觉类型，`));let qe=e(`code`,q);a(q,qe),a(qe,l(`htmlType`)),a(q,l(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let Je=e(`h3`,n);a(n,Je),a(Je,l(`type 和 color 应该怎么分工？`));let J=e(`p`,n);a(n,J);let Ye=e(`code`,J);a(J,Ye),a(Ye,l(`type`)),a(J,l(`负责视觉类型，比如`));let Xe=e(`code`,J);a(J,Xe),a(Xe,l(`outlined`)),a(J,l(`、`));let Ze=e(`code`,J);a(J,Ze),a(Ze,l(`filled`)),a(J,l(`、`));let Qe=e(`code`,J);a(J,Qe),a(Qe,l(`text`)),a(J,l(`。`));let $e=e(`code`,J);a(J,$e),a($e,l(`color`)),a(J,l(`负责主题色，比如`));let et=e(`code`,J);a(J,et),a(et,l(`primary`)),a(J,l(`、`));let tt=e(`code`,J);a(J,tt),a(tt,l(`secondary`)),a(J,l(`、`));let nt=e(`code`,J);a(J,nt),a(nt,l(`danger`)),a(J,l(`。`));let Y=e(`p`,n);a(n,Y),a(Y,l(`大多数场景可以先定颜色， 再根据密度和层级选择`));let rt=e(`code`,Y);a(Y,rt),a(rt,l(`solid`)),a(Y,l(`、`));let it=e(`code`,Y);a(Y,it),a(it,l(`outlined`)),a(Y,l(`、`));let X=e(`code`,Y);a(Y,X),a(X,l(`filled`)),a(Y,l(`或`));let at=e(`code`,Y);a(Y,at),a(at,l(`text`)),a(Y,l(`。`));let ot=e(`h3`,n);a(n,ot),a(ot,l(`loading 对象里的 delay 会生效吗？`));let Z=e(`p`,n);a(n,Z),a(Z,l(`当前版本已经支持`));let st=e(`code`,Z);a(Z,st),a(st,l(`loading`)),a(Z,l(`的对象写法和自定义`));let ct=e(`code`,Z);a(Z,ct),a(ct,l(`icon`)),a(Z,l(`。`));let lt=e(`code`,Z);a(Z,lt),a(lt,l(`delay`)),a(Z,l(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let ut=e(`h3`,n);a(n,ut),a(ut,l(`Button.Group 会覆盖子按钮哪些属性？`));let Q=e(`p`,n);a(n,Q),a(Q,l(`组级只会统一同步`));let dt=e(`code`,Q);a(Q,dt),a(dt,l(`size`)),a(Q,l(`和`));let ft=e(`code`,Q);a(Q,ft),a(ft,l(`shape`)),a(Q,l(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let pt=e(`code`,Q);a(Q,pt),a(pt,l(`color`)),a(Q,l(`、`));let mt=e(`code`,Q);a(Q,mt),a(mt,l(`type`)),a(Q,l(`、`));let ht=e(`code`,Q);a(Q,ht),a(ht,l(`disabled`)),a(Q,l(`、`));let gt=e(`code`,Q);a(Q,gt),a(gt,l(`onClick`)),a(Q,l(`仍然在各自的`));let _t=h(Q);a(Q,_t),d(_t,` `);let $=e(`code`,Q);return a(Q,$),a($,l(`Button`)),a(Q,l(`上配置。`)),t})}),n,g),n})};export{le as default};