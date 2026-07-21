import{Cn as e,Ct as t,Lt as n,Mt as r,Nt as i,Tt as a,dt as o,ft as s,ht as c,mt as l,pn as u,pt as d,s as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{n as S,t as C}from"./src-CCTNpCXV.js";import{t as w}from"./tabs-B1XdBEJF.js";import{r as T}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as ee}from"./preview-test-gate-DVT0twjZ.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},O=e=>{if(!(!e||e==="default"))return`border-${e}`},k=t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,rest:s}=y(`useSetup:0:0`,()=>e(()=>{let{className:e,children:n,...r}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,rest:r}}));return g(e=>{let n=d(`div`,e);m(()=>{i(n,s)}),m(()=>{a(n,E(`mockup-phone-camera`,t.className))});let r=o(`rue:children:anchor`);return p(n,r),m(()=>{let e=t.children;h(()=>_(e,n,r))}),n})},A=t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,rest:s}=y(`useSetup:0:0:dup1`,()=>e(()=>{let{className:e,children:n,...r}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,rest:r}}));return g(e=>{let n=d(`div`,e);m(()=>{i(n,s)}),m(()=>{a(n,E(`mockup-phone-display`,t.className))});let r=o(`rue:children:anchor`);return p(n,r),m(()=>{let e=t.children;h(()=>_(e,n,r))}),n})},j=Object.assign(r=>{let c=y(`useSetup:0:0:dup2`,()=>e(()=>{let{className:e,size:t,color:i,camera:a,display:o,children:s,...c}=r,l=`mockup-phone`,u=y(`computed:1:0`,()=>n(()=>D(r.size))),d=u,f=y(`computed:1:1`,()=>n(()=>O(r.color))),p=f;return d.get()&&(l+=` ${d.get()}`),p.get()&&(l+=` ${p.get()}`),r.className&&(l+=` ${r.className}`),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,rest:c,sizeClass:u,toneClass:f,showCamera:y(`computed:1:2`,()=>n(()=>r.camera!==!1)),cameraProps:y(`computed:1:3`,()=>n(()=>typeof r.camera==`object`?r.camera:void 0)),displayAlt:r.display?.alt??`mockup phone wallpaper`,hasDisplayChildren:r.display?.children!=null,cls:l}})),{__rue_rest_omit_0:u,__rue_rest_omit_1:f,__rue_rest_omit_2:b,__rue_rest_omit_3:x,__rue_rest_omit_4:S,__rue_rest_omit_5:C,rest:w,sizeClass:T,toneClass:ee,showCamera:E,cameraProps:j,displayAlt:M,hasDisplayChildren:N}=c,{cls:P}=c;return g(e=>{let n=d(`div`,e);m(()=>{i(n,w)}),m(()=>{a(n,P)});let c=o(`rue:slot:anchor`);return p(n,c),m(()=>{let e=r.display?g(()=>{let e=s();p(e,l(` `));let n=o(`rue:slot:anchor`);p(e,n),m(()=>{let t=E.get()?g(()=>{let e=s(),t=o(`rue:component:anchor`);return p(e,t),m(()=>{let n=v(k,{...j.get()});h(()=>_(n,e,t))}),e}):``;h(()=>_(t,e,n))}),p(e,l(` `));let i=o(`rue:component:anchor`);p(e,i);let c=g(()=>{let e=s(),n=o(`rue:slot:anchor`);p(e,n),m(()=>{let i=r.display.src?g(()=>{let e=s(),n=d(`img`,e);return p(e,n),m(()=>{t(n,`alt`,String(M))}),m(()=>{t(n,`src`,String(r.display.src))}),m(()=>{a(n,r.display.imgClassName)}),e}):``;h(()=>_(i,e,n))}),p(e,l(` `));let i=o(`rue:slot:anchor`);return p(e,i),m(()=>{let t=N?r.display.contentClassName?g(()=>{let e=s(),t=d(`div`,e);p(e,t),m(()=>{a(t,r.display.contentClassName)});let n=o(`rue:children:anchor`);return p(t,n),m(()=>{let e=r.display.children;h(()=>_(e,t,n))}),e}):r.display.children:``;h(()=>_(t,e,i))}),e});return m(()=>{let t=v(A,{className:r.display.className,children:c});h(()=>_(t,e,i))}),p(e,l(` `)),e}):r.children;h(()=>_(e,n,c))}),n})},{Camera:k,Display:A}),M=`https://img.daisyui.com/images/stock/453966.webp?1`,N=e=>g(t=>{let n=d(`div`,t);a(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=d(`div`,n);p(n,r),a(r,`flex flex-wrap items-start justify-between gap-3`);let i=d(`div`,r);p(r,i);let c=d(`h2`,i);p(i,c),a(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`),p(c,l(`# `));let u=o(`rue:slot:anchor`);p(c,u),m(()=>{let t=e.title;h(()=>_(t,c,u))});let f=o(`rue:slot:anchor`);p(i,f),m(()=>{let t=e.summary?g(()=>{let t=s(),n=d(`p`,t);p(t,n),a(n,`m-0 text-sm opacity-70`);let r=o(`rue:slot:anchor`);return p(n,r),m(()=>{let t=e.summary;h(()=>_(t,n,r))}),t}):``;h(()=>_(t,i,f))});let y=o(`rue:component:anchor`);p(n,y),m(()=>{let t=v(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>_(t,n,y))});let b=o(`rue:slot:anchor`);return p(n,b),m(()=>{let t=e.tab.value===`preview`?ee(e.title,e.preview):g(()=>{let t=s(),n=o(`rue:component:anchor`);return p(t,n),m(()=>{let r=v(x,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>_(r,t,n))}),t});h(()=>_(t,n,b))}),n}),P=e=>g(n=>{let r=d(`div`,n);a(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=d(`table`,r);p(r,i),a(i,`table table-zebra`);let c=d(`thead`,i);p(i,c);let u=d(`tr`,c);p(c,u);let f=d(`th`,u);p(u,f),p(f,l(`属性`));let v=d(`th`,u);p(u,v),p(v,l(`说明`));let y=d(`th`,u);p(u,y),p(y,l(`类型`));let x=d(`th`,u);p(u,x),p(x,l(`默认值`));let S=d(`tbody`,i);p(i,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);p(S,C),p(S,w);let T=new Map;return m(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,a)=>{_(g(()=>{let n=s(),r=d(`tr`,n);p(n,r),m(()=>{t(r,`key`,String(e.prop))});let i=d(`td`,r);p(r,i);let a=d(`code`,i);p(i,a);let c=o(`rue:slot:anchor`);p(a,c),m(()=>{let t=e.prop;h(()=>_(t,a,c))});let l=d(`td`,r);p(r,l);let u=o(`rue:slot:anchor`);p(l,u),m(()=>{let t=e.description;h(()=>_(t,l,u))});let f=d(`td`,r);p(r,f);let g=d(`code`,f);p(f,g);let v=o(`rue:slot:anchor`);p(g,v),m(()=>{let t=e.type;h(()=>_(t,g,v))});let y=d(`td`,r);p(r,y);let b=d(`code`,y);p(y,b);let x=o(`rue:slot:anchor`);return p(b,x),m(()=>{let t=e.defaultValue;h(()=>_(t,b,x))}),n}),n,r)}})}),r}),F=e=>g(t=>{let n=d(`span`,t);m(()=>{a(n,`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${e.tone??`bg-white/10 text-white/85`}`)});let r=o(`rue:slot:anchor`);return p(n,r),m(()=>{let t=e.label;h(()=>_(t,n,r))}),n}),I=e=>g(t=>{let n=d(`div`,t);a(n,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let r=d(`div`,n);p(n,r),m(()=>{a(r,`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${e.className}`)});let i=o(`rue:slot:anchor`);p(r,i),m(()=>{let t=e.label;h(()=>_(t,r,i))});let s=d(`span`,n);p(n,s);let c=o(`rue:slot:anchor`);return p(s,c),m(()=>{let t=e.label;h(()=>_(t,s,c))}),n}),te=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`组合 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],ne=[{prop:`MockupPhone.Camera`,description:`摄像头部件，展示基础结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],re=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],L=()=>{let{tabRecommended:n,tabBasic:i,tabWallpaper:b,tabSizes:x,tabLayouts:w,tabCamera:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>e(()=>({tabRecommended:y(`ref:1:0`,()=>u(`preview`)),tabBasic:y(`ref:1:1`,()=>u(`preview`)),tabWallpaper:y(`ref:1:2`,()=>u(`preview`)),tabSizes:y(`ref:1:3`,()=>u(`preview`)),tabLayouts:y(`ref:1:4`,()=>u(`preview`)),tabCamera:y(`ref:1:5`,()=>u(`preview`)),tabRecipes:y(`ref:1:6`,()=>u(`preview`))})));return g(e=>{let u=s(),y=o(`rue:component:anchor`);return p(u,y),_(v(T,{children:g(()=>{let e=s(),u=d(`div`,e);p(e,u),a(u,`max-w-none prose prose-sm md:prose-base`);let g=d(`h1`,u);p(u,g),p(g,l(`Mockup Phone 手机外框`));let y=d(`p`,u);p(u,y),a(y,`text-sm mt-3 mb-3`),p(y,l(`MockupPhone 可以使用 Rue 基础的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let T=d(`code`,y);p(y,T),p(T,l(`display`)),p(y,l(`、`));let D=d(`code`,y);p(y,D),p(D,l(`size`)),p(y,l(`、`));let O=d(`code`,y);p(y,O),p(O,l(`color`)),p(y,l(`和`));let k=d(`code`,y);p(y,k),p(k,l(`camera`)),p(y,l(`，在快速搭示例 时不用每次都手写完整骨架。`));let A=d(`h2`,u);p(u,A),p(A,l(`何时使用`));let L=d(`ul`,u);p(u,L);let ie=d(`li`,L);p(L,ie),p(ie,l(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let ae=d(`li`,L);p(L,ae),p(ae,l(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let oe=d(`li`,L);p(L,oe),p(oe,l(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let se=o(`rue:component:anchor`);p(u,se),m(()=>{let e=v(N,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:n,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[C(j,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:S(`div`,{children:[C(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),C(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),C(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),C(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:S(`div`,{className:`space-y-3`,children:[C(F,{label:`9:41`}),S(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[C(`div`,{className:`text-sm font-medium`,children:`Today`}),C(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),C(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
  size="sm"
  color="primary"
  display={{
    className: 'bg-neutral-950 text-white grid place-content-center px-6 text-center',
    children: (
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-white/50">Rue OS</div>
        <div className="mt-3 text-2xl font-semibold">It's Glowtime.</div>
        <div className="mt-2 text-sm text-white/65">根级 display API</div>
      </div>
    ),
  }}
/>

<MockupPhone
  size="sm"
  color="secondary"
  display={{
    className: 'relative overflow-hidden bg-neutral-950',
    src: 'https://img.daisyui.com/images/stock/453966.webp?1',
    children: (
      <div className="space-y-3">
        <span className="rounded-full bg-white/10 px-2 py-1 text-[0.65rem] font-medium text-white/85 backdrop-blur">
          9:41
        </span>
        <div className="rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10">
          <div className="text-sm font-medium">Today</div>
          <div className="mt-1 text-2xl font-semibold">3 meetings</div>
          <div className="mt-2 text-xs text-white/70">
            Design sync, API review, launch checklist
          </div>
        </div>
      </div>
    ),
    contentClassName: 'absolute inset-0 flex flex-col justify-between p-4 text-white',
  }}
/>`});h(()=>_(e,u,se))});let ce=o(`rue:component:anchor`);p(u,ce),m(()=>{let e=v(N,{title:`iPhone mockup`,summary:`展示 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:i,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body items-start`,children:S(j,{"data-testid":`mockup-phone-basic`,children:[C(j.Camera,{}),C(j.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});h(()=>_(e,u,ce))});let le=o(`rue:component:anchor`);p(u,le),m(()=>{let e=v(N,{title:`With color and wallpaper`,summary:`基础壁纸示例 展示，同时说明 className 仍然是最高自由度的扩展入口。`,tab:b,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body items-start`,children:S(j,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[C(j.Camera,{}),C(j.Display,{children:C(`img`,{alt:`wallpaper`,src:M})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});h(()=>_(e,u,le))});let ue=o(`rue:component:anchor`);p(u,ue),m(()=>{let e=v(N,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:x,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:re.map(e=>S(`div`,{className:`space-y-3 text-center`,children:[C(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),C(`div`,{className:`flex justify-center`,children:C(j,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:S(`div`,{children:[C(`div`,{className:`text-xs opacity-60`,children:e.size}),C(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue 示例`})]})}})})]},e.label))})}),code:`const phones = [
  { label: 'XS', size: 'xs' },
  { label: 'SM', size: 'sm', color: 'primary' },
  { label: 'MD', size: 'md', color: 'secondary' },
  { label: 'LG', size: 'lg', color: 'accent' },
] as const

{phones.map(item => (
  <MockupPhone
    key={item.label}
    size={item.size}
    color={item.color}
    display={{
      className: 'grid place-content-center bg-base-200 text-base-content text-center px-4',
      children: (
        <div>
          <div className="text-xs opacity-60">{item.size}</div>
          <div className="mt-2 text-sm font-semibold">Rue 示例</div>
        </div>
      ),
    }}
  />
))}`});h(()=>_(e,u,ue))});let de=o(`rue:component:anchor`);p(u,de),m(()=>{let e=v(N,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:w,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[C(j,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:S(f,{children:[S(`div`,{className:`flex items-center justify-between`,children:[C(F,{label:`Recording`,tone:`bg-error/85 text-white`}),C(F,{label:`14m left`})]}),S(`div`,{children:[C(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),C(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),C(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:C(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),C(j,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:S(`div`,{className:`space-y-3`,children:[S(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),C(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),S(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[C(`div`,{className:`text-sm font-medium`,children:`Notes`}),C(`div`,{className:`mt-1 text-xs opacity-70`,children:`保持 compound，同时用 display 简写快速搭状态屏。`})]}),S(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[C(`div`,{className:`text-sm font-medium`,children:`Next`}),C(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
  size="sm"
  color="accent"
  display={{
    className: 'relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400',
    children: (
      <>
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-error/85 px-2 py-1 text-[0.65rem] font-medium text-white backdrop-blur">
            Recording
          </span>
          <span className="rounded-full bg-white/10 px-2 py-1 text-[0.65rem] font-medium text-white/85 backdrop-blur">
            14m left
          </span>
        </div>
        <div>
          <div className="text-sm text-white/75">Weekly launch</div>
          <div className="mt-2 text-3xl font-semibold">84%</div>
          <div className="mt-2 h-2 rounded-full bg-white/15">
            <div className="h-full w-[84%] rounded-full bg-white" />
          </div>
        </div>
      </>
    ),
    contentClassName: 'flex h-full flex-col justify-between p-5 text-white',
  }}
/>

<MockupPhone
  size="sm"
  color="success"
  display={{
    className: 'bg-base-100 p-4',
    children: (
      <div className="space-y-3">
        <div className="rounded-2xl bg-success/10 p-3 text-success">
          <div className="text-xs uppercase tracking-[0.2em]">Focus</div>
          <div className="mt-1 text-lg font-semibold">2h 18m</div>
        </div>
        <div className="rounded-2xl bg-base-200 p-3">
          <div className="text-sm font-medium">Notes</div>
          <div className="mt-1 text-xs opacity-70">
            保持 compound，同时用 display 简写快速搭状态屏。
          </div>
        </div>
        <div className="rounded-2xl bg-base-200 p-3">
          <div className="text-sm font-medium">Next</div>
          <div className="mt-1 text-xs opacity-70">Ship Mockup Phone API</div>
        </div>
      </div>
    ),
  }}
/>`});h(()=>_(e,u,de))});let fe=o(`rue:component:anchor`);p(u,fe),m(()=>{let e=v(N,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[C(j,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:S(`div`,{children:[S(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),C(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),C(j,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:S(`div`,{className:`space-y-3`,children:[C(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),C(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
  size="sm"
  camera={false}
  display={{
    className: 'grid place-content-center bg-base-200 text-base-content text-center px-6',
    children: (
      <div>
        <div className="text-sm font-semibold">camera={false}</div>
        <div className="mt-2 text-xs opacity-60">适合更像产品卡片的展示。</div>
      </div>
    ),
  }}
/>

<MockupPhone
  size="sm"
  color="primary"
  camera={{ className: 'bg-primary/20 ring-2 ring-primary/40' }}
  display={{
    className: 'bg-neutral-950 text-white p-4',
    children: (
      <div className="space-y-3">
        <div className="text-sm font-medium">Custom camera</div>
        <div className="rounded-2xl bg-white/5 p-3 text-xs text-white/75">
          用对象写法继续给摄像头节点补 className 或测试属性。
        </div>
      </div>
    ),
  }}
/>`});h(()=>_(e,u,fe))});let pe=o(`rue:component:anchor`);p(u,pe),m(()=>{let e=v(N,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[C(`div`,{className:`flex justify-center`,children:C(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:S(`div`,{className:`grid gap-3`,children:[S(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),C(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),C(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),S(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[C(`div`,{className:`text-sm font-medium`,children:`Next up`}),C(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),C(`div`,{className:`flex justify-center`,children:C(j,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:S(`div`,{className:`flex h-full flex-col justify-between`,children:[S(`div`,{children:[C(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),C(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),S(`div`,{className:`grid grid-cols-3 gap-3`,children:[C(I,{label:`Mail`,className:`bg-sky-500 text-white`}),C(I,{label:`AI`,className:`bg-fuchsia-500 text-white`}),C(I,{label:`Cam`,className:`bg-emerald-500 text-white`}),C(I,{label:`Map`,className:`bg-amber-400 text-slate-950`}),C(I,{label:`Docs`,className:`bg-white text-slate-950`}),C(I,{label:`Pay`,className:`bg-rose-500 text-white`})]}),C(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
  size="sm"
  color="secondary"
  display={{
    className: 'relative overflow-hidden bg-neutral-950',
    src: 'https://img.daisyui.com/images/stock/453966.webp?1',
    children: (
      <div className="grid gap-3">
        <div className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur">
          <div className="text-xs uppercase tracking-[0.2em] text-white/60">Now Playing</div>
          <div className="mt-2 text-lg font-semibold">Midnight Route</div>
          <div className="text-sm text-white/70">Rue FM</div>
        </div>
        <div className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur">
          <div className="text-sm font-medium">Next up</div>
          <div className="mt-1 text-xs text-white/70">3 new product updates</div>
        </div>
      </div>
    ),
    contentClassName: 'absolute inset-0 flex flex-col justify-end p-4 text-white',
  }}
/>

<MockupPhone
  size="sm"
  color="accent"
  display={{
    className: 'bg-slate-950 px-4 py-5',
    children: (
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="text-sm font-medium text-white">Home</div>
          <div className="mt-1 text-xs text-white/55">6 apps pinned</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-500 text-sm font-semibold text-white shadow-sm">
              Mail
            </div>
            <span>Mail</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-fuchsia-500 text-sm font-semibold text-white shadow-sm">
              AI
            </div>
            <span>AI</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500 text-sm font-semibold text-white shadow-sm">
              Cam
            </div>
            <span>Cam</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-400 text-sm font-semibold text-slate-950 shadow-sm">
              Map
            </div>
            <span>Map</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-sm font-semibold text-slate-950 shadow-sm">
              Docs
            </div>
            <span>Docs</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-500 text-sm font-semibold text-white shadow-sm">
              Pay
            </div>
            <span>Pay</span>
          </div>
        </div>
        <div className="rounded-full bg-white/10 p-2 text-center text-xs text-white/70">
          Swipe up for more
        </div>
      </div>
    ),
  }}
/>`});h(()=>_(e,u,pe))});let R=d(`h2`,u);p(u,R),t(R,`id`,`mockup-phone-api`),p(R,l(`API`));let z=d(`p`,u);p(u,z),p(z,l(`MockupPhone 现在支持“根级简写模式”和“组合 compound 模式”两套写法。`));let B=d(`h3`,u);p(u,B),p(B,l(`MockupPhone`));let me=o(`rue:component:anchor`);p(u,me),m(()=>{let e=v(P,{rows:te});h(()=>_(e,u,me))});let V=d(`h3`,u);p(u,V),a(V,`mt-6`),p(V,l(`Compound Parts`));let he=o(`rue:component:anchor`);p(u,he),m(()=>{let e=v(P,{rows:ne});h(()=>_(e,u,he))});let H=d(`div`,u);p(u,H),a(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let U=d(`h3`,H);p(H,U),a(U,`mt-0 mb-3 text-base font-semibold`),p(U,l(`display 对象结构`));let W=d(`div`,H);p(H,W),a(W,`grid gap-2 text-sm md:grid-cols-2`);let G=d(`div`,W);p(W,G);let ge=d(`code`,G);p(G,ge),p(ge,l(`className`)),p(G,l(`：显示区根节点类名`));let K=d(`div`,W);p(W,K);let _e=d(`code`,K);p(K,_e),p(_e,l(`src`)),p(K,l(`/`));let ve=d(`code`,K);p(K,ve),p(ve,l(`alt`)),p(K,l(`/`));let ye=d(`code`,K);p(K,ye),p(ye,l(`imgClassName`)),p(K,l(`：内置壁纸图`));let q=d(`div`,W);p(W,q);let be=d(`code`,q);p(q,be),p(be,l(`children`)),p(q,l(`：显示区内容`));let J=d(`div`,W);p(W,J);let xe=d(`code`,J);p(J,xe),p(xe,l(`contentClassName`)),p(J,l(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Se=d(`h2`,u);p(u,Se),p(Se,l(`FAQ`));let Ce=d(`h3`,u);p(u,Ce),p(Ce,l(`什么时候用 display，什么时候可以写 MockupPhone.Display？`));let Y=d(`p`,u);p(u,Y),p(Y,l(`如果只是想快速搭一个手机画面，优先用`));let we=d(`code`,Y);p(Y,we),p(we,l(`display`)),p(Y,l(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用基础示例，可以用`));let Te=d(`code`,Y);p(Y,Te),p(Te,l(`MockupPhone.Camera`)),p(Y,l(`和`));let Ee=d(`code`,Y);p(Y,Ee),p(Ee,l(`MockupPhone.Display`)),p(Y,l(`会更直观。`));let De=d(`h3`,u);p(u,De),p(De,l(`color 和 className 应该怎么选？`));let X=d(`p`,u);p(u,X);let Oe=d(`code`,X);p(X,Oe),p(Oe,l(`color`)),p(X,l(`负责常用边框主题色，适合快速选主色；`));let ke=d(`code`,X);p(X,ke),p(ke,l(`className`));let Z=c(X);p(X,Z),r(Z,` `),p(X,l(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let Ae=d(`h3`,u);p(u,Ae),p(Ae,l(`如何在壁纸上叠加浮层内容？`));let Q=d(`p`,u);p(u,Q),p(Q,l(`让`));let je=d(`code`,Q);p(Q,je),p(je,l(`display.className`)),p(Q,l(`具备`));let Me=d(`code`,Q);p(Q,Me),p(Me,l(`relative`)),p(Q,l(`和`));let Ne=c(Q);p(Q,Ne),r(Ne,` `);let Pe=d(`code`,Q);p(Q,Pe),p(Pe,l(`overflow-hidden`)),p(Q,l(`，再把浮层内容放进`));let Fe=d(`code`,Q);p(Q,Fe),p(Fe,l(`children`)),p(Q,l(`，通过`));let Ie=d(`code`,Q);p(Q,Ie),p(Ie,l(`contentClassName`)),p(Q,l(`设置`));let Le=c(Q);p(Q,Le),r(Le,` `);let $=d(`code`,Q);return p(Q,$),p($,l(`absolute inset-0`)),p(Q,l(`即可。`)),e})}),u,y),u})};export{L as default};