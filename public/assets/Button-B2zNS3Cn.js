import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h}from"./vapor-runtime-BAZOdMd8.js";import{a as g,n as _}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as v,t as y}from"./src-DZJ4J6sD.js";import{n as b}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as x}from"./Code-DY4Ua5uc.js";import{t as S}from"./button-BOkTxx3d.js";import{t as C}from"./tabs-Casd077O.js";var w=e=>c(t=>{let i=a(`div`,t);m(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=a(`div`,i);r(i,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let f=a(`div`,s);r(s,f);let g=a(`h2`,f);r(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;h(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(f,v),l(()=>{let t=e.summary?c(()=>{let t=n(),i=a(`p`,t);r(t,i),m(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(i,s),l(()=>{let t=e.summary;h(()=>u(t,i,s))}),t}):``;h(()=>u(t,f,v))});let y=o(`rue:component:anchor`);r(i,y),l(()=>{let t=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>u(t,i,y))});let b=o(`rue:slot:anchor`);return r(i,b),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>u(n,t,i))}),t});h(()=>u(t,i,b))}),i}),T=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let v=a(`th`,g);r(g,v),r(v,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),ee=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),m(n,`size-[1.05em]`);let i=a(`path`,n);return r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`M12 5v14M5 12h14`),n}),E=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),m(n,`size-[1.05em]`);let i=a(`path`,n);r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`M5 12h14`);let o=a(`path`,n);return r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`m13 6 6 6-6 6`),n}),D=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),m(n,`size-[1.05em]`);let i=a(`path`,n);return r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),n}),O=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),m(n,`size-[1.05em]`);let i=a(`path`,n);r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`M4.5 19.5 9 15l6 6`);let o=a(`path`,n);r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let s=a(`path`,n);r(n,s),e(s,`strokeLinecap`,`round`),e(s,`strokeLinejoin`,`round`),e(s,`d`,`M15 9 9 15`);let c=a(`circle`,n);return r(n,c),e(c,`cx`,`14`),e(c,`cy`,`10`),e(c,`r`,`1`),e(c,`fill`,`currentColor`),e(c,`stroke`,`none`),n}),te=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),m(n,`size-[1.05em]`);let i=a(`rect`,n);r(n,i),e(i,`x`,`3`),e(i,`y`,`5`),e(i,`width`,`18`),e(i,`height`,`14`),e(i,`rx`,`2`);let o=a(`path`,n);return r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`m4 7 8 6 8-6`),n}),k=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),m(n,`size-[1.05em]`);let i=a(`path`,n);r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let o=a(`path`,n);return r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ne=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],re=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],ie=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],ae=e=>c(t=>{let n=a(`span`,t);l(()=>{m(n,String(`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${e.className??`bg-base-200 text-base-content`}`))});let i=o(`rue:slot:anchor`);return r(n,i),l(()=>{let t=e.text;h(()=>u(t,n,i))}),n}),oe=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],se=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],ce=()=>{let{tabTypes:_,tabResponsive:x,tabPalette:C,tabVariants:ce,tabDanger:le,tabIcons:ue,tabLoading:de,tabClick:fe,tabSizes:pe,tabGroup:me,tabStates:he,tabFormLink:ge,tabRecipes:_e,tabLogin:ve,submitCount:A,clickCount:j,lastAction:M}=g(`useSetup:0:0`,()=>t(()=>({tabTypes:g(`ref:1:0`,()=>s(`preview`)),tabResponsive:g(`ref:1:1`,()=>s(`preview`)),tabPalette:g(`ref:1:2`,()=>s(`preview`)),tabVariants:g(`ref:1:3`,()=>s(`preview`)),tabDanger:g(`ref:1:4`,()=>s(`preview`)),tabIcons:g(`ref:1:5`,()=>s(`preview`)),tabLoading:g(`ref:1:6`,()=>s(`preview`)),tabClick:g(`ref:1:7`,()=>s(`preview`)),tabSizes:g(`ref:1:8`,()=>s(`preview`)),tabGroup:g(`ref:1:9`,()=>s(`preview`)),tabStates:g(`ref:1:10`,()=>s(`preview`)),tabFormLink:g(`ref:1:11`,()=>s(`preview`)),tabRecipes:g(`ref:1:12`,()=>s(`preview`)),tabLogin:g(`ref:1:13`,()=>s(`preview`)),submitCount:g(`ref:1:14`,()=>s(0)),clickCount:g(`ref:1:15`,()=>s(0)),lastAction:g(`ref:1:16`,()=>s(`未触发`))})));return c(t=>{let s=n(),g=o(`rue:component:anchor`);return r(s,g),u(p(b,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Button 按钮`));let g=a(`p`,s);r(s,g),m(g,`text-sm mt-3 mb-3`);let b=a(`code`,g);r(g,b),r(b,d(`type`)),r(g,d(`负责视觉类型，`));let N=a(`code`,g);r(g,N),r(N,d(`color`)),r(g,d(`负责主题色，再用`));let P=a(`code`,g);r(g,P),r(P,d(`shape`)),r(g,d(`、`));let F=a(`code`,g);r(g,F),r(F,d(`icon`)),r(g,d(`、`));let I=a(`code`,g);r(g,I),r(I,d(`loading`)),r(g,d(`补足交互细节。`));let L=a(`h2`,s);r(s,L),r(L,d(`何时使用`));let R=a(`ul`,s);r(s,R);let z=a(`li`,R);r(R,z),r(z,d(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let B=a(`li`,R);r(R,B),r(B,d(`需要在表单里区分视觉类型`));let V=a(`code`,B);r(B,V),r(V,d(`type`)),r(B,d(`和原生提交类型`));let H=a(`code`,B);r(B,H),r(H,d(`htmlType`)),r(B,d(`。`));let U=a(`li`,R);r(R,U),r(U,d(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let W=o(`rue:component:anchor`);r(s,W),l(()=>{let e=p(w,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{children:`Solid`}),y(S,{type:`outlined`,children:`Outlined`}),y(S,{type:`dashed`,children:`Dashed`}),y(S,{type:`filled`,children:`Filled`}),y(S,{type:`text`,children:`Text`}),y(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});h(()=>u(e,s,W))});let ye=o(`rue:component:anchor`);r(s,ye),l(()=>{let e=p(w,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:y(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});h(()=>u(e,s,ye))});let be=o(`rue:component:anchor`);r(s,be),l(()=>{let e=p(w,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ne.map(e=>y(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});h(()=>u(e,s,be))});let xe=o(`rue:component:anchor`);r(s,xe),l(()=>{let e=p(w,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:ce,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[re.map(e=>v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),y(`div`,{className:`flex flex-wrap gap-2`,children:ne.map(t=>y(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),v(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{color:`neutral`,type:`outlined`,children:`Outline`}),y(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});h(()=>u(e,s,xe))});let Se=o(`rue:component:anchor`);r(s,Se),l(()=>{let e=p(w,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:le,preview:()=>y(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`danger`,children:`Delete forever`}),y(S,{color:`danger`,type:`outlined`,children:`Remove access`}),y(S,{color:`danger`,type:`filled`,children:`Archive branch`}),y(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});h(()=>u(e,s,Se))});let Ce=o(`rue:component:anchor`);r(s,Ce),l(()=>{let e=p(w,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ue,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,icon:y(ee,{}),children:`Create project`}),y(S,{color:`secondary`,type:`outlined`,icon:y(E,{}),iconPlacement:`end`,children:`Continue`}),y(S,{color:`accent`,shape:`circle`,icon:y(D,{}),"aria-label":`收藏`}),y(S,{color:`info`,shape:`square`,icon:y(k,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});h(()=>u(e,s,Ce))});let we=o(`rue:component:anchor`);r(s,we),l(()=>{let e=p(w,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:de,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,loading:!0,children:`Saving`}),y(S,{type:`outlined`,loading:{icon:y(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),y(S,{color:`success`,icon:y(O,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});h(()=>u(e,s,we))});let Te=o(`rue:component:anchor`);r(s,Te),l(()=>{let e=p(w,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:fe,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,onClick:e=>{j.value+=1,M.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),y(S,{type:`outlined`,onClick:e=>{j.value+=1,M.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),y(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),j.value+=1,M.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),v(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[v(`div`,{children:[`click count: `,j.value]}),v(`div`,{children:[`last action: `,M.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});h(()=>u(e,s,Te))});let Ee=o(`rue:component:anchor`);r(s,Ee),l(()=>{let e=p(w,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:pe,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{size:`small`,children:`Small`}),y(S,{children:`Default`}),y(S,{size:`large`,color:`primary`,children:`Large`}),y(S,{size:`xs`,type:`outlined`,children:`XS`}),y(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,shape:`round`,children:`Round action`}),y(S,{color:`secondary`,shape:`square`,icon:y(k,{}),"aria-label":`square`}),y(S,{color:`accent`,shape:`circle`,icon:y(D,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});h(()=>u(e,s,Ee))});let De=o(`rue:component:anchor`);r(s,De),l(()=>{let e=p(w,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:me,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6`,children:[v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{children:[y(S,{children:`Cancel`}),y(S,{color:`primary`,children:`Confirm`})]}),v(S.Group,{children:[y(S,{disabled:!0,children:`Yesterday`}),y(S,{disabled:!0,children:`Today`}),y(S,{disabled:!0,children:`Tomorrow`})]}),v(S.Group,{children:[y(S,{color:`primary`,children:`L`}),y(S,{children:`M`}),y(S,{children:`M`}),y(S,{type:`dashed`,children:`R`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),v(S.Group,{children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),v(S.Group,{children:[y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{shape:`circle`,children:[y(S,{color:`primary`,children:`Backward`}),y(S,{color:`primary`,children:`Forward`})]}),v(S.Group,{shape:`circle`,children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),v(S.Group,{shape:`circle`,children:[y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),v(`div`,{className:`space-y-3`,children:[v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{size:`large`,children:[y(S,{children:`Large`}),y(S,{children:`Large`})]}),v(S.Group,{children:[y(S,{children:`Default`}),y(S,{children:`Default`})]}),v(S.Group,{size:`small`,children:[y(S,{children:`Small`}),y(S,{children:`Small`})]})]}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{size:`large`,shape:`circle`,children:[y(S,{children:`Large`}),y(S,{children:`Large`})]}),v(S.Group,{shape:`circle`,children:[y(S,{children:`Default`}),y(S,{children:`Default`})]}),v(S.Group,{size:`small`,shape:`circle`,children:[y(S,{children:`Small`}),y(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});h(()=>u(e,s,De))});let Oe=o(`rue:component:anchor`);r(s,Oe),l(()=>{let e=p(w,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:he,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{active:!0,children:`Active`}),y(S,{color:`primary`,active:!0,children:`Primary active`}),y(S,{disabled:!0,children:`Disabled`}),y(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),v(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[y(S,{wide:!0,children:`Wide button`}),y(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});h(()=>u(e,s,Oe))});let ke=o(`rue:component:anchor`);r(s,ke),l(()=>{let e=p(w,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:ge,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{children:`Native button`}),y(S,{href:`#button-api`,children:`Anchor`}),y(S,{as:`div`,type:`text`,children:`Div button`})]}),v(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,A.value]}),v(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),A.value+=1},children:[y(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),y(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),y(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});h(()=>u(e,s,ke))});let Ae=o(`rue:component:anchor`);r(s,Ae),l(()=>{let e=p(w,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:_e,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{color:`primary`,icon:y(O,{}),children:`Publish`}),y(S,{type:`outlined`,icon:y(E,{}),iconPlacement:`end`,children:`Preview`}),y(S,{type:`text`,icon:y(k,{}),children:`Save draft`})]}),v(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[y(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:y(te,{}),children:`Continue with Email`}),y(S,{block:!0,color:`primary`,className:`justify-start`,icon:y(k,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});h(()=>u(e,s,Ae))});let je=o(`rue:component:anchor`);r(s,je),l(()=>{let e=p(w,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ve,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:ie.map(e=>y(S,{block:!0,className:`justify-start ${e.className}`,icon:y(ae,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});h(()=>u(e,s,je))});let G=a(`h2`,s);r(s,G),e(G,`id`,`button-api`),r(G,d(`API`));let Me=a(`p`,s);r(s,Me),r(Me,d(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let K=a(`p`,s);r(s,K),r(K,d(`推荐使用顺序：`));let Ne=a(`code`,K);r(K,Ne),r(Ne,d(`type`)),r(K,d(`->`));let Pe=a(`code`,K);r(K,Pe),r(Pe,d(`color`)),r(K,d(`->`));let Fe=a(`code`,K);r(K,Fe),r(Fe,d(`shape`)),r(K,d(`->`));let Ie=i(K);r(K,Ie),f(Ie,` `);let Le=a(`code`,K);r(K,Le),r(Le,d(`size`)),r(K,d(`->`));let Re=a(`code`,K);r(K,Re),r(Re,d(`loading`)),r(K,d(`->`));let ze=a(`code`,K);r(K,ze),r(ze,d(`disabled`)),r(K,d(`。`));let Be=a(`h3`,s);r(s,Be),r(Be,d(`Button`));let Ve=o(`rue:component:anchor`);r(s,Ve),l(()=>{let e=p(T,{rows:oe});h(()=>u(e,s,Ve))});let He=a(`h3`,s);r(s,He),r(He,d(`Button.Group`));let Ue=o(`rue:component:anchor`);r(s,Ue),l(()=>{let e=p(T,{rows:se});h(()=>u(e,s,Ue))});let We=a(`h2`,s);r(s,We),r(We,d(`FAQ`));let Ge=a(`h3`,s);r(s,Ge),r(Ge,d(`为什么有 type 还需要 htmlType？`));let q=a(`p`,s);r(s,q);let Ke=a(`code`,q);r(q,Ke),r(Ke,d(`type`)),r(q,d(`负责按钮视觉类型，`));let qe=a(`code`,q);r(q,qe),r(qe,d(`htmlType`)),r(q,d(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let Je=a(`h3`,s);r(s,Je),r(Je,d(`type 和 color 应该怎么分工？`));let J=a(`p`,s);r(s,J);let Ye=a(`code`,J);r(J,Ye),r(Ye,d(`type`)),r(J,d(`负责视觉类型，比如`));let Xe=a(`code`,J);r(J,Xe),r(Xe,d(`outlined`)),r(J,d(`、`));let Ze=a(`code`,J);r(J,Ze),r(Ze,d(`filled`)),r(J,d(`、`));let Qe=a(`code`,J);r(J,Qe),r(Qe,d(`text`)),r(J,d(`。`));let $e=a(`code`,J);r(J,$e),r($e,d(`color`)),r(J,d(`负责主题色，比如`));let et=a(`code`,J);r(J,et),r(et,d(`primary`)),r(J,d(`、`));let tt=a(`code`,J);r(J,tt),r(tt,d(`secondary`)),r(J,d(`、`));let nt=a(`code`,J);r(J,nt),r(nt,d(`danger`)),r(J,d(`。`));let Y=a(`p`,s);r(s,Y),r(Y,d(`大多数场景可以先定颜色， 再根据密度和层级选择`));let rt=a(`code`,Y);r(Y,rt),r(rt,d(`solid`)),r(Y,d(`、`));let it=a(`code`,Y);r(Y,it),r(it,d(`outlined`)),r(Y,d(`、`));let X=a(`code`,Y);r(Y,X),r(X,d(`filled`)),r(Y,d(`或`));let at=a(`code`,Y);r(Y,at),r(at,d(`text`)),r(Y,d(`。`));let ot=a(`h3`,s);r(s,ot),r(ot,d(`loading 对象里的 delay 会生效吗？`));let Z=a(`p`,s);r(s,Z),r(Z,d(`当前版本已经支持`));let st=a(`code`,Z);r(Z,st),r(st,d(`loading`)),r(Z,d(`的对象写法和自定义`));let ct=a(`code`,Z);r(Z,ct),r(ct,d(`icon`)),r(Z,d(`。`));let lt=a(`code`,Z);r(Z,lt),r(lt,d(`delay`)),r(Z,d(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let ut=a(`h3`,s);r(s,ut),r(ut,d(`Button.Group 会覆盖子按钮哪些属性？`));let Q=a(`p`,s);r(s,Q),r(Q,d(`组级只会统一同步`));let dt=a(`code`,Q);r(Q,dt),r(dt,d(`size`)),r(Q,d(`和`));let ft=a(`code`,Q);r(Q,ft),r(ft,d(`shape`)),r(Q,d(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let pt=a(`code`,Q);r(Q,pt),r(pt,d(`color`)),r(Q,d(`、`));let mt=a(`code`,Q);r(Q,mt),r(mt,d(`type`)),r(Q,d(`、`));let ht=a(`code`,Q);r(Q,ht),r(ht,d(`disabled`)),r(Q,d(`、`));let gt=a(`code`,Q);r(Q,gt),r(gt,d(`onClick`)),r(Q,d(`仍然在各自的`));let _t=i(Q);r(Q,_t),f(_t,` `);let $=a(`code`,Q);return r(Q,$),r($,d(`Button`)),r(Q,d(`上配置。`)),t})}),s,g),s})};export{ce as default};