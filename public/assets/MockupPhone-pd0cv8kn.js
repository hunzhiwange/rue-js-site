import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,gt as u,l as d,mt as f,p,pt as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as x,i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as C}from"./Code-CZqShVUj.js";import{t as w}from"./tabs-BBuGEPV7.js";import{r as T}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as ee}from"./preview-test-gate-PvTX1w6L.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},O=e=>{if(!(!e||e===`default`))return`border-${e}`},k=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,rest:c}=y(`useSetup:0:0`,()=>h(()=>{let{className:t,children:n,...r}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,rest:r}}));return d(r=>{let s=i(`div`,r);o(()=>{f(s,c)}),o(()=>{_(s,E(`mockup-phone-camera`,e.className))});let l=a(`rue:children:anchor`);return n(s,l),o(()=>{let n=e.children;t(()=>g(n,s,l))}),s})},A=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,rest:c}=y(`useSetup:0:0:dup1`,()=>h(()=>{let{className:t,children:n,...r}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,rest:r}}));return d(r=>{let s=i(`div`,r);o(()=>{f(s,c)}),o(()=>{_(s,E(`mockup-phone-display`,e.className))});let l=a(`rue:children:anchor`);return n(s,l),o(()=>{let n=e.children;t(()=>g(n,s,l))}),s})},j=Object.assign(r=>{let l=y(`useSetup:0:0:dup2`,()=>h(()=>{let{className:e,size:t,color:n,camera:i,display:a,children:o,...s}=r,c=`mockup-phone`,l=y(`computed:1:0`,()=>u(()=>D(r.size))),d=l,f=y(`computed:1:1`,()=>u(()=>O(r.color))),p=f;return d.get()&&(c+=` ${d.get()}`),p.get()&&(c+=` ${p.get()}`),r.className&&(c+=` ${r.className}`),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,sizeClass:l,toneClass:f,showCamera:y(`computed:1:2`,()=>u(()=>r.camera!==!1)),cameraProps:y(`computed:1:3`,()=>u(()=>typeof r.camera==`object`?r.camera:void 0)),displayAlt:r.display?.alt??`mockup phone wallpaper`,hasDisplayChildren:r.display?.children!=null,cls:c}})),{__rue_rest_omit_0:p,__rue_rest_omit_1:m,__rue_rest_omit_2:b,__rue_rest_omit_3:x,__rue_rest_omit_4:S,__rue_rest_omit_5:C,rest:w,sizeClass:T,toneClass:ee,showCamera:E,cameraProps:j,displayAlt:M,hasDisplayChildren:N}=l,{cls:P}=l;return d(l=>{let u=i(`div`,l);o(()=>{f(u,w)}),o(()=>{_(u,P)});let p=a(`rue:slot:anchor`);return n(u,p),o(()=>{let l=r.display?d(()=>{let l=s();n(l,e(` `));let u=a(`rue:slot:anchor`);n(l,u),o(()=>{let e=E.get()?d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=v(k,{...j.get()});t(()=>g(n,e,r))}),e}):``;t(()=>g(e,l,u))}),n(l,e(` `));let f=a(`rue:component:anchor`);n(l,f);let p=d(()=>{let l=s(),u=a(`rue:slot:anchor`);n(l,u),o(()=>{let e=r.display.src?d(()=>{let e=s(),t=i(`img`,e);return n(e,t),o(()=>{c(t,`alt`,String(M))}),o(()=>{c(t,`src`,String(r.display.src))}),o(()=>{_(t,r.display.imgClassName)}),e}):``;t(()=>g(e,l,u))}),n(l,e(` `));let f=a(`rue:slot:anchor`);return n(l,f),o(()=>{let e=N?r.display.contentClassName?d(()=>{let e=s(),c=i(`div`,e);n(e,c),o(()=>{_(c,r.display.contentClassName)});let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let e=r.display.children;t(()=>g(e,c,l))}),e}):r.display.children:``;t(()=>g(e,l,f))}),l});return o(()=>{let e=v(A,{className:r.display.className,children:p});t(()=>g(e,l,f))}),n(l,e(` `)),l}):r.children;t(()=>g(l,u,p))}),u})},{Camera:k,Display:A}),M=`https://img.daisyui.com/images/stock/453966.webp?1`,N=r=>d(c=>{let l=i(`div`,c);_(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),_(u,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,u);n(u,f);let p=i(`h2`,f);n(f,p),_(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let e=r.title;t(()=>g(e,p,m))});let h=a(`rue:slot:anchor`);n(f,h),o(()=>{let e=r.summary?d(()=>{let e=s(),c=i(`p`,e);n(e,c),_(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>g(e,c,l))}),e}):``;t(()=>g(e,f,h))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=v(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>g(e,l,y))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?ee(r.title,r.preview):d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(C,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>g(n,e,i))}),e});t(()=>g(e,l,b))}),l}),P=r=>d(l=>{let u=i(`div`,l);_(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),_(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let m=i(`tr`,p);n(p,m);let h=i(`th`,m);n(m,h),n(h,e(`属性`));let v=i(`th`,m);n(m,v),n(v,e(`说明`));let y=i(`th`,m);n(m,y),n(y,e(`类型`));let x=i(`th`,m);n(m,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=b({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{g(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>g(n,d,f))});let p=i(`td`,l);n(l,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>g(n,p,m))});let h=i(`td`,l);n(l,h);let _=i(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>g(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>g(n,b,x))}),r}),r,l)}})}),u}),F=e=>d(r=>{let s=i(`span`,r);o(()=>{_(s,`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${e.tone??`bg-white/10 text-white/85`}`)});let c=a(`rue:slot:anchor`);return n(s,c),o(()=>{let n=e.label;t(()=>g(n,s,c))}),s}),I=e=>d(r=>{let s=i(`div`,r);_(s,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let c=i(`div`,s);n(s,c),o(()=>{_(c,`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${e.className}`)});let l=a(`rue:slot:anchor`);n(c,l),o(()=>{let n=e.label;t(()=>g(n,c,l))});let u=i(`span`,s);n(s,u);let d=a(`rue:slot:anchor`);return n(u,d),o(()=>{let n=e.label;t(()=>g(n,u,d))}),s}),te=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],ne=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],re=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],L=()=>{let{tabRecommended:u,tabBasic:f,tabWallpaper:b,tabSizes:C,tabLayouts:w,tabCamera:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>h(()=>({tabRecommended:y(`ref:1:0`,()=>r(`preview`)),tabBasic:y(`ref:1:1`,()=>r(`preview`)),tabWallpaper:y(`ref:1:2`,()=>r(`preview`)),tabSizes:y(`ref:1:3`,()=>r(`preview`)),tabLayouts:y(`ref:1:4`,()=>r(`preview`)),tabCamera:y(`ref:1:5`,()=>r(`preview`)),tabRecipes:y(`ref:1:6`,()=>r(`preview`))})));return d(r=>{let h=s(),y=a(`rue:component:anchor`);return n(h,y),g(v(T,{children:d(()=>{let r=s(),d=i(`div`,r);n(r,d),_(d,`max-w-none prose prose-sm md:prose-base`);let h=i(`h1`,d);n(d,h),n(h,e(`Mockup Phone 手机外框`));let y=i(`p`,d);n(d,y),_(y,`text-sm mt-3 mb-3`),n(y,e(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let T=i(`code`,y);n(y,T),n(T,e(`display`)),n(y,e(`、`));let D=i(`code`,y);n(y,D),n(D,e(`size`)),n(y,e(`、`));let O=i(`code`,y);n(y,O),n(O,e(`color`)),n(y,e(`和`));let k=i(`code`,y);n(y,k),n(k,e(`camera`)),n(y,e(`，在快速搭 demo 时不用每次都手写完整骨架。`));let A=i(`h2`,d);n(d,A),n(A,e(`何时使用`));let L=i(`ul`,d);n(d,L);let ie=i(`li`,L);n(L,ie),n(ie,e(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let ae=i(`li`,L);n(L,ae),n(ae,e(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let oe=i(`li`,L);n(L,oe),n(oe,e(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let se=a(`rue:component:anchor`);n(d,se),o(()=>{let e=v(N,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:u,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:x(`div`,{children:[S(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),S(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),S(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),S(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:x(`div`,{className:`space-y-3`,children:[S(F,{label:`9:41`}),x(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[S(`div`,{className:`text-sm font-medium`,children:`Today`}),S(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),S(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});t(()=>g(e,d,se))});let ce=a(`rue:component:anchor`);n(d,ce),o(()=>{let e=v(N,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:f,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body items-start`,children:x(j,{"data-testid":`mockup-phone-basic`,children:[S(j.Camera,{}),S(j.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});t(()=>g(e,d,ce))});let le=a(`rue:component:anchor`);n(d,le),o(()=>{let e=v(N,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:b,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body items-start`,children:x(j,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[S(j.Camera,{}),S(j.Display,{children:S(`img`,{alt:`wallpaper`,src:M})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});t(()=>g(e,d,le))});let ue=a(`rue:component:anchor`);n(d,ue),o(()=>{let e=v(N,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:C,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:re.map(e=>x(`div`,{className:`space-y-3 text-center`,children:[S(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),S(`div`,{className:`flex justify-center`,children:S(j,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:x(`div`,{children:[S(`div`,{className:`text-xs opacity-60`,children:e.size}),S(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});t(()=>g(e,d,ue))});let de=a(`rue:component:anchor`);n(d,de),o(()=>{let e=v(N,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:w,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:x(p,{children:[x(`div`,{className:`flex items-center justify-between`,children:[S(F,{label:`Recording`,tone:`bg-error/85 text-white`}),S(F,{label:`14m left`})]}),x(`div`,{children:[S(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),S(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),S(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:S(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),S(j,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:x(`div`,{className:`space-y-3`,children:[x(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),S(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),x(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Notes`}),S(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),x(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Next`}),S(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});t(()=>g(e,d,de))});let fe=a(`rue:component:anchor`);n(d,fe),o(()=>{let e=v(N,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:x(`div`,{children:[x(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),S(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),S(j,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:x(`div`,{className:`space-y-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),S(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});t(()=>g(e,d,fe))});let pe=a(`rue:component:anchor`);n(d,pe),o(()=>{let e=v(N,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[S(`div`,{className:`flex justify-center`,children:S(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:x(`div`,{className:`grid gap-3`,children:[x(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),S(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),S(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),x(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[S(`div`,{className:`text-sm font-medium`,children:`Next up`}),S(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),S(`div`,{className:`flex justify-center`,children:S(j,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:x(`div`,{className:`flex h-full flex-col justify-between`,children:[x(`div`,{children:[S(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),S(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),x(`div`,{className:`grid grid-cols-3 gap-3`,children:[S(I,{label:`Mail`,className:`bg-sky-500 text-white`}),S(I,{label:`AI`,className:`bg-fuchsia-500 text-white`}),S(I,{label:`Cam`,className:`bg-emerald-500 text-white`}),S(I,{label:`Map`,className:`bg-amber-400 text-slate-950`}),S(I,{label:`Docs`,className:`bg-white text-slate-950`}),S(I,{label:`Pay`,className:`bg-rose-500 text-white`})]}),S(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});t(()=>g(e,d,pe))});let R=i(`h2`,d);n(d,R),c(R,`id`,`mockup-phone-api`),n(R,e(`API`));let z=i(`p`,d);n(d,z),n(z,e(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let B=i(`h3`,d);n(d,B),n(B,e(`MockupPhone`));let me=a(`rue:component:anchor`);n(d,me),o(()=>{let e=v(P,{rows:te});t(()=>g(e,d,me))});let V=i(`h3`,d);n(d,V),_(V,`mt-6`),n(V,e(`Compound Parts`));let he=a(`rue:component:anchor`);n(d,he),o(()=>{let e=v(P,{rows:ne});t(()=>g(e,d,he))});let H=i(`div`,d);n(d,H),_(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let U=i(`h3`,H);n(H,U),_(U,`mt-0 mb-3 text-base font-semibold`),n(U,e(`display 对象结构`));let W=i(`div`,H);n(H,W),_(W,`grid gap-2 text-sm md:grid-cols-2`);let G=i(`div`,W);n(W,G);let ge=i(`code`,G);n(G,ge),n(ge,e(`className`)),n(G,e(`：显示区根节点类名`));let K=i(`div`,W);n(W,K);let _e=i(`code`,K);n(K,_e),n(_e,e(`src`)),n(K,e(`/`));let ve=i(`code`,K);n(K,ve),n(ve,e(`alt`)),n(K,e(`/`));let ye=i(`code`,K);n(K,ye),n(ye,e(`imgClassName`)),n(K,e(`：内置壁纸图`));let q=i(`div`,W);n(W,q);let be=i(`code`,q);n(q,be),n(be,e(`children`)),n(q,e(`：显示区内容`));let J=i(`div`,W);n(W,J);let xe=i(`code`,J);n(J,xe),n(xe,e(`contentClassName`)),n(J,e(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Se=i(`h2`,d);n(d,Se),n(Se,e(`FAQ`));let Ce=i(`h3`,d);n(d,Ce),n(Ce,e(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let Y=i(`p`,d);n(d,Y),n(Y,e(`如果只是想快速搭一个手机画面，优先用`));let we=i(`code`,Y);n(Y,we),n(we,e(`display`)),n(Y,e(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let Te=i(`code`,Y);n(Y,Te),n(Te,e(`MockupPhone.Camera`)),n(Y,e(`和`));let Ee=i(`code`,Y);n(Y,Ee),n(Ee,e(`MockupPhone.Display`)),n(Y,e(`会更直观。`));let De=i(`h3`,d);n(d,De),n(De,e(`color 和 className 应该怎么选？`));let X=i(`p`,d);n(d,X);let Oe=i(`code`,X);n(X,Oe),n(Oe,e(`color`)),n(X,e(`负责常用边框主题色，适合快速选主色；`));let ke=i(`code`,X);n(X,ke),n(ke,e(`className`));let Z=l(X);n(X,Z),m(Z,` `),n(X,e(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let Ae=i(`h3`,d);n(d,Ae),n(Ae,e(`如何在壁纸上叠加浮层内容？`));let Q=i(`p`,d);n(d,Q),n(Q,e(`让`));let je=i(`code`,Q);n(Q,je),n(je,e(`display.className`)),n(Q,e(`具备`));let Me=i(`code`,Q);n(Q,Me),n(Me,e(`relative`)),n(Q,e(`和`));let Ne=l(Q);n(Q,Ne),m(Ne,` `);let Pe=i(`code`,Q);n(Q,Pe),n(Pe,e(`overflow-hidden`)),n(Q,e(`，再把浮层内容放进`));let Fe=i(`code`,Q);n(Q,Fe),n(Fe,e(`children`)),n(Q,e(`，通过`));let Ie=i(`code`,Q);n(Q,Ie),n(Ie,e(`contentClassName`)),n(Q,e(`设置`));let Le=l(Q);n(Q,Le),m(Le,` `);let $=i(`code`,Q);return n(Q,$),n($,e(`absolute inset-0`)),n(Q,e(`即可。`)),r})}),h,y),h})};export{L as default};