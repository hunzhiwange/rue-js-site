import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,_t as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,p,rt as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x,i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./Code-D5UqTwV6.js";import{t as w}from"./tabs-DRfs918f.js";import{r as T}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as ee}from"./preview-test-gate-DuGL5287.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},O=e=>{if(!(!e||e===`default`))return`border-${e}`},k=n=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,rest:l}=y(`useSetup:0:0`,()=>i(()=>{let{className:e,children:t,...r}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,rest:r}}));return u(i=>{let s=g(`div`,i);t(()=>{o(s,l)}),t(()=>{_(s,E(`mockup-phone-camera`,n.className))});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>f(e,s,c))}),s})},A=n=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,rest:l}=y(`useSetup:0:0:dup1`,()=>i(()=>{let{className:e,children:t,...r}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,rest:r}}));return u(i=>{let s=g(`div`,i);t(()=>{o(s,l)}),t(()=>{_(s,E(`mockup-phone-display`,n.className))});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>f(e,s,c))}),s})},j=Object.assign(n=>{let l=y(`useSetup:0:0:dup2`,()=>i(()=>{let{className:e,size:t,color:r,camera:i,display:a,children:o,...s}=n,c=`mockup-phone`,l=y(`computed:1:0`,()=>v(()=>D(n.size))),u=l,d=y(`computed:1:1`,()=>v(()=>O(n.color))),f=d;return u.get()&&(c+=` ${u.get()}`),f.get()&&(c+=` ${f.get()}`),n.className&&(c+=` ${n.className}`),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,sizeClass:l,toneClass:d,showCamera:y(`computed:1:2`,()=>v(()=>n.camera!==!1)),cameraProps:y(`computed:1:3`,()=>v(()=>typeof n.camera==`object`?n.camera:void 0)),displayAlt:n.display?.alt??`mockup phone wallpaper`,hasDisplayChildren:n.display?.children!=null,cls:c}})),{__rue_rest_omit_0:p,__rue_rest_omit_1:m,__rue_rest_omit_2:b,__rue_rest_omit_3:x,__rue_rest_omit_4:S,__rue_rest_omit_5:C,rest:w,sizeClass:T,toneClass:ee,showCamera:E,cameraProps:j,displayAlt:M,hasDisplayChildren:N}=l,{cls:P}=l;return u(i=>{let l=g(`div`,i);t(()=>{o(l,w)}),t(()=>{_(l,P)});let p=e(`rue:slot:anchor`);return a(l,p),t(()=>{let i=n.display?u(()=>{let i=c();a(i,d(` `));let o=e(`rue:slot:anchor`);a(i,o),t(()=>{let n=E.get()?u(()=>{let n=c(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=h(k,{...j.get()});r(()=>f(e,n,i))}),n}):``;r(()=>f(n,i,o))}),a(i,d(` `));let l=e(`rue:component:anchor`);a(i,l);let p=u(()=>{let i=c(),o=e(`rue:slot:anchor`);a(i,o),t(()=>{let e=n.display.src?u(()=>{let e=c(),r=g(`img`,e);return a(e,r),t(()=>{s(r,`alt`,String(M))}),t(()=>{s(r,`src`,String(n.display.src))}),t(()=>{_(r,n.display.imgClassName)}),e}):``;r(()=>f(e,i,o))}),a(i,d(` `));let l=e(`rue:slot:anchor`);return a(i,l),t(()=>{let o=N?n.display.contentClassName?u(()=>{let i=c(),o=g(`div`,i);a(i,o),t(()=>{_(o,n.display.contentClassName)});let s=e(`rue:children:anchor`);return a(o,s),t(()=>{let e=n.display.children;r(()=>f(e,o,s))}),i}):n.display.children:``;r(()=>f(o,i,l))}),i});return t(()=>{let e=h(A,{className:n.display.className,children:p});r(()=>f(e,i,l))}),a(i,d(` `)),i}):n.children;r(()=>f(i,l,p))}),l})},{Camera:k,Display:A}),M=`https://img.daisyui.com/images/stock/453966.webp?1`,N=n=>u(i=>{let o=g(`div`,i);_(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=g(`div`,o);a(o,s),_(s,`flex flex-wrap items-start justify-between gap-3`);let l=g(`div`,s);a(s,l);let p=g(`h2`,l);a(l,p),_(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(p,d(`# `));let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.title;r(()=>f(e,p,m))});let v=e(`rue:slot:anchor`);a(l,v),t(()=>{let i=n.summary?u(()=>{let i=c(),o=g(`p`,i);a(i,o),_(o,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.summary;r(()=>f(e,o,s))}),i}):``;r(()=>f(i,l,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,o,y))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.tab.value===`preview`?ee(n.title,n.preview):u(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>f(e,i,o))}),i});r(()=>f(i,o,b))}),o}),P=n=>u(i=>{let o=g(`div`,i);_(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=g(`table`,o);a(o,l),_(l,`table table-zebra`);let p=g(`thead`,l);a(l,p);let m=g(`tr`,p);a(p,m);let h=g(`th`,m);a(m,h),a(h,d(`属性`));let v=g(`th`,m);a(m,v),a(v,d(`说明`));let y=g(`th`,m);a(m,y),a(y,d(`类型`));let x=g(`th`,m);a(m,x),a(x,d(`默认值`));let S=g(`tbody`,l);a(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,l,d)=>{f(u(()=>{let i=c(),o=g(`tr`,i);a(i,o),t(()=>{s(o,`key`,String(n.prop))});let l=g(`td`,o);a(o,l);let u=g(`code`,l);a(l,u);let d=e(`rue:slot:anchor`);a(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=g(`td`,o);a(o,p);let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.description;r(()=>f(e,p,m))});let h=g(`td`,o);a(o,h);let _=g(`code`,h);a(h,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=g(`td`,o);a(o,y);let b=g(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,o)}})}),o}),F=n=>u(i=>{let o=g(`span`,i);t(()=>{_(o,`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${n.tone??`bg-white/10 text-white/85`}`)});let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.label;r(()=>f(e,o,s))}),o}),I=n=>u(i=>{let o=g(`div`,i);_(o,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let s=g(`div`,o);a(o,s),t(()=>{_(s,`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${n.className}`)});let c=e(`rue:slot:anchor`);a(s,c),t(()=>{let e=n.label;r(()=>f(e,s,c))});let l=g(`span`,o);a(o,l);let u=e(`rue:slot:anchor`);return a(l,u),t(()=>{let e=n.label;r(()=>f(e,l,u))}),o}),te=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],ne=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],re=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],L=()=>{let{tabRecommended:o,tabBasic:v,tabWallpaper:b,tabSizes:C,tabLayouts:w,tabCamera:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>i(()=>({tabRecommended:y(`ref:1:0`,()=>n(`preview`)),tabBasic:y(`ref:1:1`,()=>n(`preview`)),tabWallpaper:y(`ref:1:2`,()=>n(`preview`)),tabSizes:y(`ref:1:3`,()=>n(`preview`)),tabLayouts:y(`ref:1:4`,()=>n(`preview`)),tabCamera:y(`ref:1:5`,()=>n(`preview`)),tabRecipes:y(`ref:1:6`,()=>n(`preview`))})));return u(n=>{let i=c(),y=e(`rue:component:anchor`);return a(i,y),f(h(T,{children:u(()=>{let n=c(),i=g(`div`,n);a(n,i),_(i,`max-w-none prose prose-sm md:prose-base`);let u=g(`h1`,i);a(i,u),a(u,d(`Mockup Phone 手机外框`));let y=g(`p`,i);a(i,y),_(y,`text-sm mt-3 mb-3`),a(y,d(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let T=g(`code`,y);a(y,T),a(T,d(`display`)),a(y,d(`、`));let D=g(`code`,y);a(y,D),a(D,d(`size`)),a(y,d(`、`));let O=g(`code`,y);a(y,O),a(O,d(`color`)),a(y,d(`和`));let k=g(`code`,y);a(y,k),a(k,d(`camera`)),a(y,d(`，在快速搭 demo 时不用每次都手写完整骨架。`));let A=g(`h2`,i);a(i,A),a(A,d(`何时使用`));let L=g(`ul`,i);a(i,L);let ie=g(`li`,L);a(L,ie),a(ie,d(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let ae=g(`li`,L);a(L,ae),a(ae,d(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let oe=g(`li`,L);a(L,oe),a(oe,d(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let se=e(`rue:component:anchor`);a(i,se),t(()=>{let e=h(N,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:o,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:x(`div`,{children:[S(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),S(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),S(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),S(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:x(`div`,{className:`space-y-3`,children:[S(F,{label:`9:41`}),x(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[S(`div`,{className:`text-sm font-medium`,children:`Today`}),S(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),S(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});r(()=>f(e,i,se))});let ce=e(`rue:component:anchor`);a(i,ce),t(()=>{let e=h(N,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:v,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body items-start`,children:x(j,{"data-testid":`mockup-phone-basic`,children:[S(j.Camera,{}),S(j.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});r(()=>f(e,i,ce))});let le=e(`rue:component:anchor`);a(i,le),t(()=>{let e=h(N,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:b,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body items-start`,children:x(j,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[S(j.Camera,{}),S(j.Display,{children:S(`img`,{alt:`wallpaper`,src:M})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});r(()=>f(e,i,le))});let ue=e(`rue:component:anchor`);a(i,ue),t(()=>{let e=h(N,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:C,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:re.map(e=>x(`div`,{className:`space-y-3 text-center`,children:[S(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),S(`div`,{className:`flex justify-center`,children:S(j,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:x(`div`,{children:[S(`div`,{className:`text-xs opacity-60`,children:e.size}),S(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
          <div className="mt-2 text-sm font-semibold">Rue Demo</div>
        </div>
      ),
    }}
  />
))}`});r(()=>f(e,i,ue))});let de=e(`rue:component:anchor`);a(i,de),t(()=>{let e=h(N,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:w,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:x(p,{children:[x(`div`,{className:`flex items-center justify-between`,children:[S(F,{label:`Recording`,tone:`bg-error/85 text-white`}),S(F,{label:`14m left`})]}),x(`div`,{children:[S(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),S(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),S(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:S(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),S(j,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:x(`div`,{className:`space-y-3`,children:[x(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),S(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),x(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Notes`}),S(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),x(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Next`}),S(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
            保留 compound，同时用 display 简写快速搭状态屏。
          </div>
        </div>
        <div className="rounded-2xl bg-base-200 p-3">
          <div className="text-sm font-medium">Next</div>
          <div className="mt-1 text-xs opacity-70">Ship Mockup Phone API</div>
        </div>
      </div>
    ),
  }}
/>`});r(()=>f(e,i,de))});let fe=e(`rue:component:anchor`);a(i,fe),t(()=>{let e=h(N,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:x(`div`,{children:[x(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),S(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),S(j,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:x(`div`,{className:`space-y-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),S(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});r(()=>f(e,i,fe))});let pe=e(`rue:component:anchor`);a(i,pe),t(()=>{let e=h(N,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[S(`div`,{className:`flex justify-center`,children:S(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:x(`div`,{className:`grid gap-3`,children:[x(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),S(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),S(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),x(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[S(`div`,{className:`text-sm font-medium`,children:`Next up`}),S(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),S(`div`,{className:`flex justify-center`,children:S(j,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:x(`div`,{className:`flex h-full flex-col justify-between`,children:[x(`div`,{children:[S(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),S(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),x(`div`,{className:`grid grid-cols-3 gap-3`,children:[S(I,{label:`Mail`,className:`bg-sky-500 text-white`}),S(I,{label:`AI`,className:`bg-fuchsia-500 text-white`}),S(I,{label:`Cam`,className:`bg-emerald-500 text-white`}),S(I,{label:`Map`,className:`bg-amber-400 text-slate-950`}),S(I,{label:`Docs`,className:`bg-white text-slate-950`}),S(I,{label:`Pay`,className:`bg-rose-500 text-white`})]}),S(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});r(()=>f(e,i,pe))});let R=g(`h2`,i);a(i,R),s(R,`id`,`mockup-phone-api`),a(R,d(`API`));let z=g(`p`,i);a(i,z),a(z,d(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let B=g(`h3`,i);a(i,B),a(B,d(`MockupPhone`));let me=e(`rue:component:anchor`);a(i,me),t(()=>{let e=h(P,{rows:te});r(()=>f(e,i,me))});let V=g(`h3`,i);a(i,V),_(V,`mt-6`),a(V,d(`Compound Parts`));let he=e(`rue:component:anchor`);a(i,he),t(()=>{let e=h(P,{rows:ne});r(()=>f(e,i,he))});let H=g(`div`,i);a(i,H),_(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let U=g(`h3`,H);a(H,U),_(U,`mt-0 mb-3 text-base font-semibold`),a(U,d(`display 对象结构`));let W=g(`div`,H);a(H,W),_(W,`grid gap-2 text-sm md:grid-cols-2`);let G=g(`div`,W);a(W,G);let ge=g(`code`,G);a(G,ge),a(ge,d(`className`)),a(G,d(`：显示区根节点类名`));let K=g(`div`,W);a(W,K);let _e=g(`code`,K);a(K,_e),a(_e,d(`src`)),a(K,d(`/`));let ve=g(`code`,K);a(K,ve),a(ve,d(`alt`)),a(K,d(`/`));let ye=g(`code`,K);a(K,ye),a(ye,d(`imgClassName`)),a(K,d(`：内置壁纸图`));let q=g(`div`,W);a(W,q);let be=g(`code`,q);a(q,be),a(be,d(`children`)),a(q,d(`：显示区内容`));let J=g(`div`,W);a(W,J);let xe=g(`code`,J);a(J,xe),a(xe,d(`contentClassName`)),a(J,d(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Se=g(`h2`,i);a(i,Se),a(Se,d(`FAQ`));let Ce=g(`h3`,i);a(i,Ce),a(Ce,d(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let Y=g(`p`,i);a(i,Y),a(Y,d(`如果只是想快速搭一个手机画面，优先用`));let we=g(`code`,Y);a(Y,we),a(we,d(`display`)),a(Y,d(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let Te=g(`code`,Y);a(Y,Te),a(Te,d(`MockupPhone.Camera`)),a(Y,d(`和`));let Ee=g(`code`,Y);a(Y,Ee),a(Ee,d(`MockupPhone.Display`)),a(Y,d(`会更直观。`));let De=g(`h3`,i);a(i,De),a(De,d(`color 和 className 应该怎么选？`));let X=g(`p`,i);a(i,X);let Oe=g(`code`,X);a(X,Oe),a(Oe,d(`color`)),a(X,d(`负责常用边框主题色，适合快速选主色；`));let ke=g(`code`,X);a(X,ke),a(ke,d(`className`));let Z=m(X);a(X,Z),l(Z,` `),a(X,d(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let Ae=g(`h3`,i);a(i,Ae),a(Ae,d(`如何在壁纸上叠加浮层内容？`));let Q=g(`p`,i);a(i,Q),a(Q,d(`让`));let je=g(`code`,Q);a(Q,je),a(je,d(`display.className`)),a(Q,d(`具备`));let Me=g(`code`,Q);a(Q,Me),a(Me,d(`relative`)),a(Q,d(`和`));let Ne=m(Q);a(Q,Ne),l(Ne,` `);let Pe=g(`code`,Q);a(Q,Pe),a(Pe,d(`overflow-hidden`)),a(Q,d(`，再把浮层内容放进`));let Fe=g(`code`,Q);a(Q,Fe),a(Fe,d(`children`)),a(Q,d(`，通过`));let Ie=g(`code`,Q);a(Q,Ie),a(Ie,d(`contentClassName`)),a(Q,d(`设置`));let Le=m(Q);a(Q,Le),l(Le,` `);let $=g(`code`,Q);return a(Q,$),a($,d(`absolute inset-0`)),a(Q,d(`即可。`)),n})}),i,y),i})};export{L as default};