import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h,n as g}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as _,t as v}from"./src-CqIWk1va.js";import{n as y}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as b}from"./Code-B1JFTu6m.js";import{t as x}from"./button-Doo7Wv3K.js";import{t as S}from"./tabs-BbiCzXqJ.js";var C=({title:t,summary:d,tab:m,preview:h,code:g})=>p(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);l(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);l(v,y);let x=e(`h2`);l(y,x),o(x,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(x,n(`# `));let C=r(x);l(x,C),u(()=>{s(C,t)});let w=i(`rue:slot:anchor`);l(y,w),u(()=>{c(d?p(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),u(()=>{s(i,d)}),t}):``,y,w)});let T=i(`rue:component:anchor`);l(_,T),u(()=>{c(f(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return l(_,E),u(()=>{c(m.value===`preview`?h():p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),w=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),T=()=>p(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`path`);return l(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`M12 5v14M5 12h14`),n}),E=()=>p(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`path`);l(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`M5 12h14`);let i=e(`path`);return l(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`m13 6 6 6-6 6`),n}),D=()=>p(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`path`);return l(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),n}),O=()=>p(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`path`);l(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`M4.5 19.5 9 15l6 6`);let i=e(`path`);l(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let a=e(`path`);l(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`M15 9 9 15`);let s=e(`circle`);return l(n,s),t(s,`cx`,`14`),t(s,`cy`,`10`),t(s,`r`,`1`),t(s,`fill`,`currentColor`),t(s,`stroke`,`none`),n}),ee=()=>p(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`rect`);l(n,r),t(r,`x`,`3`),t(r,`y`,`5`),t(r,`width`,`18`),t(r,`height`,`14`),t(r,`rx`,`2`);let i=e(`path`);return l(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`m4 7 8 6 8-6`),n}),k=()=>p(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`path`);l(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let i=e(`path`);return l(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),A=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],te=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],ne=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],re=({text:t,className:n})=>p(()=>{let r=e(`span`);u(()=>{o(r,String(`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${n??`bg-base-200 text-base-content`}`))});let a=i(`rue:slot:anchor`);return l(r,a),u(()=>{c(t,r,a)}),r}),ie=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],ae=()=>{let{tabTypes:g,tabResponsive:b,tabPalette:S,tabVariants:ae,tabDanger:oe,tabIcons:se,tabLoading:ce,tabSizes:le,tabStates:ue,tabFormLink:de,tabRecipes:fe,tabLogin:pe,submitCount:j}=h(`useSetup:0:0`,()=>m(()=>({tabTypes:h(`ref:1:0`,()=>d(`preview`)),tabResponsive:h(`ref:1:1`,()=>d(`preview`)),tabPalette:h(`ref:1:2`,()=>d(`preview`)),tabVariants:h(`ref:1:3`,()=>d(`preview`)),tabDanger:h(`ref:1:4`,()=>d(`preview`)),tabIcons:h(`ref:1:5`,()=>d(`preview`)),tabLoading:h(`ref:1:6`,()=>d(`preview`)),tabSizes:h(`ref:1:7`,()=>d(`preview`)),tabStates:h(`ref:1:8`,()=>d(`preview`)),tabFormLink:h(`ref:1:9`,()=>d(`preview`)),tabRecipes:h(`ref:1:10`,()=>d(`preview`)),tabLogin:h(`ref:1:11`,()=>d(`preview`)),submitCount:h(`ref:1:12`,()=>d(0))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Button 按钮`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`);let y=e(`code`);l(h,y),l(y,n(`type`)),l(h,n(`负责视觉类型，`));let M=e(`code`);l(h,M),l(M,n(`color`)),l(h,n(`负责主题色，再用`));let N=e(`code`);l(h,N),l(N,n(`shape`)),l(h,n(`、`));let P=e(`code`);l(h,P),l(P,n(`icon`)),l(h,n(`、`));let F=e(`code`);l(h,F),l(F,n(`loading`)),l(h,n(`补足交互细节。`));let I=e(`div`);l(p,I),o(I,`text-sm flex flex-wrap gap-4`);let L=e(`a`);l(I,L),t(L,`href`,`https://daisyui.com/components/button/`),t(L,`target`,`_blank`),l(L,n(`查看 Button 静态样式`));let R=e(`h2`);l(p,R),l(R,n(`何时使用`));let z=e(`ul`);l(p,z);let B=e(`li`);l(z,B),l(B,n(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let V=e(`li`);l(z,V),l(V,n(`需要在表单里区分视觉类型`));let H=e(`code`);l(V,H),l(H,n(`type`)),l(V,n(`和原生提交类型`));let U=e(`code`);l(V,U),l(U,n(`htmlType`)),l(V,n(`。`));let W=e(`li`);l(z,W),l(W,n(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let G=i(`rue:component:anchor`);l(p,G),u(()=>{c(f(C,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:g,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[v(x,{children:`Solid`}),v(x,{type:`outlined`,children:`Outlined`}),v(x,{type:`dashed`,children:`Dashed`}),v(x,{type:`filled`,children:`Filled`}),v(x,{type:`text`,children:`Text`}),v(x,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`}),p,G)});let me=i(`rue:component:anchor`);l(p,me),u(()=>{c(f(C,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:b,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:v(x,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`}),p,me)});let he=i(`rue:component:anchor`);l(p,he),u(()=>{c(f(C,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:S,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:A.map(e=>v(x,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`}),p,he)});let ge=i(`rue:component:anchor`);l(p,ge),u(()=>{c(f(C,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:ae,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-5`,children:[te.map(e=>_(`div`,{children:[v(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),v(`div`,{className:`flex flex-wrap gap-2`,children:A.map(t=>v(x,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),_(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[v(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),_(`div`,{className:`flex flex-wrap gap-2`,children:[v(x,{color:`neutral`,type:`outlined`,children:`Outline`}),v(x,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`}),p,ge)});let _e=i(`rue:component:anchor`);l(p,_e),u(()=>{c(f(C,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:oe,preview:()=>v(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:_(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[v(x,{color:`danger`,children:`Delete forever`}),v(x,{color:`danger`,type:`outlined`,children:`Remove access`}),v(x,{color:`danger`,type:`filled`,children:`Archive branch`}),v(x,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`}),p,_e)});let ve=i(`rue:component:anchor`);l(p,ve),u(()=>{c(f(C,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:se,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[v(x,{color:`primary`,icon:v(T,{}),children:`Create project`}),v(x,{color:`secondary`,type:`outlined`,icon:v(E,{}),iconPlacement:`end`,children:`Continue`}),v(x,{color:`accent`,shape:`circle`,icon:v(D,{}),"aria-label":`收藏`}),v(x,{color:`info`,shape:`square`,icon:v(k,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`}),p,ve)});let ye=i(`rue:component:anchor`);l(p,ye),u(()=>{c(f(C,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:ce,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[v(x,{color:`primary`,loading:!0,children:`Saving`}),v(x,{type:`outlined`,loading:{icon:v(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),v(x,{color:`success`,icon:v(O,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`}),p,ye)});let be=i(`rue:component:anchor`);l(p,be),u(()=>{c(f(C,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:le,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-5`,children:[_(`div`,{children:[v(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),_(`div`,{className:`flex flex-wrap items-center gap-2`,children:[v(x,{size:`small`,children:`Small`}),v(x,{children:`Default`}),v(x,{size:`large`,color:`primary`,children:`Large`}),v(x,{size:`xs`,type:`outlined`,children:`XS`}),v(x,{size:`xl`,color:`secondary`,children:`XL`})]})]}),_(`div`,{children:[v(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),_(`div`,{className:`flex flex-wrap items-center gap-2`,children:[v(x,{color:`primary`,shape:`round`,children:`Round action`}),v(x,{color:`secondary`,shape:`square`,icon:v(k,{}),"aria-label":`square`}),v(x,{color:`accent`,shape:`circle`,icon:v(D,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`}),p,be)});let xe=i(`rue:component:anchor`);l(p,xe),u(()=>{c(f(C,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:ue,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-5`,children:[_(`div`,{children:[v(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),_(`div`,{className:`flex flex-wrap gap-2`,children:[v(x,{active:!0,children:`Active`}),v(x,{color:`primary`,active:!0,children:`Primary active`}),v(x,{disabled:!0,children:`Disabled`}),v(x,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),_(`div`,{children:[v(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),_(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[v(x,{wide:!0,children:`Wide button`}),v(x,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`}),p,xe)});let Se=i(`rue:component:anchor`);l(p,Se),u(()=>{c(f(C,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:de,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-4`,children:[_(`div`,{className:`flex flex-wrap gap-2`,children:[v(x,{children:`Native button`}),v(x,{href:`#button-api`,children:`Anchor`}),v(x,{as:`div`,type:`text`,children:`Div button`})]}),_(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,j.value]}),_(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),j.value+=1},children:[v(x,{color:`primary`,htmlType:`submit`,children:`Submit form`}),v(x,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),v(x,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`}),p,Se)});let Ce=i(`rue:component:anchor`);l(p,Ce),u(()=>{c(f(C,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:fe,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-4`,children:[_(`div`,{className:`flex flex-wrap gap-2`,children:[v(x,{color:`primary`,icon:v(O,{}),children:`Publish`}),v(x,{type:`outlined`,icon:v(E,{}),iconPlacement:`end`,children:`Preview`}),v(x,{type:`text`,icon:v(k,{}),children:`Save draft`})]}),_(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[v(x,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:v(ee,{}),children:`Continue with Email`}),v(x,{block:!0,color:`primary`,className:`justify-start`,icon:v(k,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`}),p,Ce)});let we=i(`rue:component:anchor`);l(p,we),u(()=>{c(f(C,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:pe,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body`,children:v(`div`,{className:`grid gap-2 md:grid-cols-2`,children:ne.map(e=>v(x,{block:!0,className:`justify-start ${e.className}`,icon:v(re,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`}),p,we)});let K=e(`h2`);l(p,K),t(K,`id`,`button-api`),l(K,n(`API`));let Te=e(`p`);l(p,Te),l(Te,n(`当前页面展示的是 Button 的完整可用 API。`));let q=e(`p`);l(p,q),l(q,n(`推荐使用顺序：`));let Ee=e(`code`);l(q,Ee),l(Ee,n(`type`)),l(q,n(`->`));let De=e(`code`);l(q,De),l(De,n(`color`)),l(q,n(`->`));let Oe=e(`code`);l(q,Oe),l(Oe,n(`shape`)),l(q,n(`->`));let ke=r(q);l(q,ke),s(ke,` `);let Ae=e(`code`);l(q,Ae),l(Ae,n(`size`)),l(q,n(`->`));let je=e(`code`);l(q,je),l(je,n(`loading`)),l(q,n(`->`));let Me=e(`code`);l(q,Me),l(Me,n(`disabled`)),l(q,n(`。`));let Ne=i(`rue:component:anchor`);l(p,Ne),u(()=>{c(f(w,{rows:ie}),p,Ne)});let Pe=e(`h2`);l(p,Pe),l(Pe,n(`FAQ`));let Fe=e(`h3`);l(p,Fe),l(Fe,n(`为什么有 type 还需要 htmlType？`));let J=e(`p`);l(p,J);let Ie=e(`code`);l(J,Ie),l(Ie,n(`type`)),l(J,n(`负责按钮视觉类型，`));let Le=e(`code`);l(J,Le),l(Le,n(`htmlType`)),l(J,n(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let Re=e(`h3`);l(p,Re),l(Re,n(`type 和 color 应该怎么分工？`));let Y=e(`p`);l(p,Y);let ze=e(`code`);l(Y,ze),l(ze,n(`type`)),l(Y,n(`负责视觉类型，比如`));let Be=e(`code`);l(Y,Be),l(Be,n(`outlined`)),l(Y,n(`、`));let Ve=e(`code`);l(Y,Ve),l(Ve,n(`filled`)),l(Y,n(`、`));let He=e(`code`);l(Y,He),l(He,n(`text`)),l(Y,n(`。`));let Ue=e(`code`);l(Y,Ue),l(Ue,n(`color`)),l(Y,n(`负责主题色，比如`));let We=e(`code`);l(Y,We),l(We,n(`primary`)),l(Y,n(`、`));let X=e(`code`);l(Y,X),l(X,n(`secondary`)),l(Y,n(`、`));let Ge=e(`code`);l(Y,Ge),l(Ge,n(`danger`)),l(Y,n(`。`));let Z=e(`p`);l(p,Z),l(Z,n(`大多数场景可以先定颜色， 再根据密度和层级选择`));let Ke=e(`code`);l(Z,Ke),l(Ke,n(`solid`)),l(Z,n(`、`));let qe=e(`code`);l(Z,qe),l(qe,n(`outlined`)),l(Z,n(`、`));let Je=e(`code`);l(Z,Je),l(Je,n(`filled`)),l(Z,n(`或`));let Ye=e(`code`);l(Z,Ye),l(Ye,n(`text`)),l(Z,n(`。`));let Xe=e(`h3`);l(p,Xe),l(Xe,n(`loading 对象里的 delay 会生效吗？`));let Q=e(`p`);l(p,Q),l(Q,n(`当前版本已经支持`));let Ze=e(`code`);l(Q,Ze),l(Ze,n(`loading`)),l(Q,n(`的对象写法和自定义`));let Qe=e(`code`);l(Q,Qe),l(Qe,n(`icon`)),l(Q,n(`。`));let $=e(`code`);return l(Q,$),l($,n(`delay`)),l(Q,n(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`)),d})}),d,m),d})};export{ae as default};