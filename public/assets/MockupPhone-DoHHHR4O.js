import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,_ as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./tabs-BOxm6iIN.js";import{t as w}from"./preview-test-gate-DtKtoe96.js";var T=(e,t)=>t?`${e} ${t}`:e,ee=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},E=e=>{if(!(!e||e===`default`))return`border-${e}`},D=({className:e,children:t,...n})=>x(`div`,{...n,className:T(`mockup-phone-camera`,e),children:t}),O=({className:e,children:t,...n})=>x(`div`,{...n,className:T(`mockup-phone-display`,e),children:t}),k=e=>{let{src:t,alt:n=`mockup phone wallpaper`,imgClassName:r,children:i,contentClassName:a}=e;return b(l,{children:[t?x(`img`,{alt:n,src:t,className:r}):null,i==null?null:a?x(`div`,{className:a,children:i}):i]})},A=Object.assign(({className:e,size:t,color:n,camera:r,display:i,children:a,...o})=>{let s=`mockup-phone`,c=ee(t),l=E(n);if(c&&(s+=` ${c}`),l&&(s+=` ${l}`),e&&(s+=` ${e}`),!i)return x(`div`,{...o,className:s,children:a});let u=r!==!1,d=typeof r==`object`?r:void 0;return b(`div`,{...o,className:s,children:[u?x(D,{...d}):null,x(O,{className:i.className,children:k(i)})]})},{Camera:D,Display:O}),j=`https://img.daisyui.com/images/stock/453966.webp?1`,M=a=>f(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=s(`div`,u);t(u,d);let h=s(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,r(`# `));let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=a.title;g(()=>p(e,h,_))});let v=i(`rue:slot:anchor`);t(d,v),n(()=>{let r=a.summary?f(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;g(()=>p(e,c,l))}),r}):``;g(()=>p(r,d,v))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?w(a.title,a.preview):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:a.code});g(()=>p(t,e,r))}),e});g(()=>p(e,l,x))}),l}),te=a=>f(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,u);t(u,d),e(d,`table table-zebra`);let m=s(`thead`,d);t(d,m);let h=s(`tr`,m);t(m,h);let _=s(`th`,h);t(h,_),t(_,r(`属性`));let y=s(`th`,h);t(h,y),t(y,r(`说明`));let b=s(`th`,h);t(h,b),t(b,r(`类型`));let x=s(`th`,h);t(h,x),t(x,r(`默认值`));let S=s(`tbody`,d);t(d,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{p(f(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=s(`td`,a);t(a,f);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let t=e.description;g(()=>p(t,f,m))});let h=s(`td`,a);t(a,h);let _=s(`code`,h);t(h,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;g(()=>p(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),r}),r,a)}})}),u}),N=r=>f(a=>{let o=s(`span`,a);n(()=>{e(o,String(`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${r.tone??`bg-white/10 text-white/85`}`))});let c=i(`rue:slot:anchor`);return t(o,c),n(()=>{let e=r.label;g(()=>p(e,o,c))}),o}),P=r=>f(a=>{let o=s(`div`,a);e(o,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let c=s(`div`,o);t(o,c),n(()=>{e(c,String(`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${r.className}`))});let l=i(`rue:slot:anchor`);t(c,l),n(()=>{let e=r.label;g(()=>p(e,c,l))});let u=s(`span`,o);t(o,u);let d=i(`rue:slot:anchor`);return t(u,d),n(()=>{let e=r.label;g(()=>p(e,u,d))}),o}),ne=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],re=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],ie=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],F=()=>{let{tabRecommended:v,tabBasic:y,tabWallpaper:C,tabSizes:w,tabLayouts:T,tabCamera:ee,tabRecipes:E}=_(`useSetup:0:0`,()=>h(()=>({tabRecommended:_(`ref:1:0`,()=>d(`preview`)),tabBasic:_(`ref:1:1`,()=>d(`preview`)),tabWallpaper:_(`ref:1:2`,()=>d(`preview`)),tabSizes:_(`ref:1:3`,()=>d(`preview`)),tabLayouts:_(`ref:1:4`,()=>d(`preview`)),tabCamera:_(`ref:1:5`,()=>d(`preview`)),tabRecipes:_(`ref:1:6`,()=>d(`preview`))})));return f(d=>{let h=o(),_=i(`rue:component:anchor`);return t(h,_),p(m(S,{children:f(()=>{let d=o(),f=s(`div`,d);t(d,f),e(f,`max-w-none prose prose-sm md:prose-base`);let h=s(`h1`,f);t(f,h),t(h,r(`Mockup Phone 手机外框`));let _=s(`p`,f);t(f,_),e(_,`text-sm mt-3 mb-3`),t(_,r(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let S=s(`code`,_);t(_,S),t(S,r(`display`)),t(_,r(`、`));let D=s(`code`,_);t(_,D),t(D,r(`size`)),t(_,r(`、`));let O=s(`code`,_);t(_,O),t(O,r(`color`)),t(_,r(`和`));let k=s(`code`,_);t(_,k),t(k,r(`camera`)),t(_,r(`，在快速搭 demo 时不用每次都手写完整骨架。`));let F=s(`h2`,f);t(f,F),t(F,r(`何时使用`));let I=s(`ul`,f);t(f,I);let ae=s(`li`,I);t(I,ae),t(ae,r(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let oe=s(`li`,I);t(I,oe),t(oe,r(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let se=s(`li`,I);t(I,se),t(se,r(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let ce=i(`rue:component:anchor`);t(f,ce),n(()=>{let e=m(M,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:v,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[x(A,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:b(`div`,{children:[x(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),x(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),x(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),x(A,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:j,children:b(`div`,{className:`space-y-3`,children:[x(N,{label:`9:41`}),b(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[x(`div`,{className:`text-sm font-medium`,children:`Today`}),x(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),x(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});g(()=>p(e,f,ce))});let le=i(`rue:component:anchor`);t(f,le),n(()=>{let e=m(M,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:y,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body items-start`,children:b(A,{"data-testid":`mockup-phone-basic`,children:[x(A.Camera,{}),x(A.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});g(()=>p(e,f,le))});let ue=i(`rue:component:anchor`);t(f,ue),n(()=>{let e=m(M,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:C,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body items-start`,children:b(A,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[x(A.Camera,{}),x(A.Display,{children:x(`img`,{alt:`wallpaper`,src:j})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});g(()=>p(e,f,ue))});let de=i(`rue:component:anchor`);t(f,de),n(()=>{let e=m(M,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:w,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:ie.map(e=>b(`div`,{className:`space-y-3 text-center`,children:[x(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),x(`div`,{className:`flex justify-center`,children:x(A,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:b(`div`,{children:[x(`div`,{className:`text-xs opacity-60`,children:e.size}),x(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});g(()=>p(e,f,de))});let fe=i(`rue:component:anchor`);t(f,fe),n(()=>{let e=m(M,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:T,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[x(A,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:b(l,{children:[b(`div`,{className:`flex items-center justify-between`,children:[x(N,{label:`Recording`,tone:`bg-error/85 text-white`}),x(N,{label:`14m left`})]}),b(`div`,{children:[x(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),x(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),x(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:x(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),x(A,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:b(`div`,{className:`space-y-3`,children:[b(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),x(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),b(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[x(`div`,{className:`text-sm font-medium`,children:`Notes`}),x(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),b(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[x(`div`,{className:`text-sm font-medium`,children:`Next`}),x(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});g(()=>p(e,f,fe))});let L=i(`rue:component:anchor`);t(f,L),n(()=>{let e=m(M,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[x(A,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:b(`div`,{children:[b(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),x(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),x(A,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:b(`div`,{className:`space-y-3`,children:[x(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),x(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});g(()=>p(e,f,L))});let R=i(`rue:component:anchor`);t(f,R),n(()=>{let e=m(M,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[x(`div`,{className:`flex justify-center`,children:x(A,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:j,children:b(`div`,{className:`grid gap-3`,children:[b(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),x(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),x(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),b(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[x(`div`,{className:`text-sm font-medium`,children:`Next up`}),x(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),x(`div`,{className:`flex justify-center`,children:x(A,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:b(`div`,{className:`flex h-full flex-col justify-between`,children:[b(`div`,{children:[x(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),x(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),b(`div`,{className:`grid grid-cols-3 gap-3`,children:[x(P,{label:`Mail`,className:`bg-sky-500 text-white`}),x(P,{label:`AI`,className:`bg-fuchsia-500 text-white`}),x(P,{label:`Cam`,className:`bg-emerald-500 text-white`}),x(P,{label:`Map`,className:`bg-amber-400 text-slate-950`}),x(P,{label:`Docs`,className:`bg-white text-slate-950`}),x(P,{label:`Pay`,className:`bg-rose-500 text-white`})]}),x(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});g(()=>p(e,f,R))});let z=s(`h2`,f);t(f,z),c(z,`id`,`mockup-phone-api`),t(z,r(`API`));let B=s(`p`,f);t(f,B),t(B,r(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let V=s(`h3`,f);t(f,V),t(V,r(`MockupPhone`));let pe=i(`rue:component:anchor`);t(f,pe),n(()=>{let e=m(te,{rows:ne});g(()=>p(e,f,pe))});let H=s(`h3`,f);t(f,H),e(H,`mt-6`),t(H,r(`Compound Parts`));let me=i(`rue:component:anchor`);t(f,me),n(()=>{let e=m(te,{rows:re});g(()=>p(e,f,me))});let U=s(`div`,f);t(f,U),e(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=s(`h3`,U);t(U,W),e(W,`mt-0 mb-3 text-base font-semibold`),t(W,r(`display 对象结构`));let G=s(`div`,U);t(U,G),e(G,`grid gap-2 text-sm md:grid-cols-2`);let K=s(`div`,G);t(G,K);let he=s(`code`,K);t(K,he),t(he,r(`className`)),t(K,r(`：显示区根节点类名`));let q=s(`div`,G);t(G,q);let ge=s(`code`,q);t(q,ge),t(ge,r(`src`)),t(q,r(`/`));let _e=s(`code`,q);t(q,_e),t(_e,r(`alt`)),t(q,r(`/`));let ve=s(`code`,q);t(q,ve),t(ve,r(`imgClassName`)),t(q,r(`：内置壁纸图`));let J=s(`div`,G);t(G,J);let ye=s(`code`,J);t(J,ye),t(ye,r(`children`)),t(J,r(`：显示区内容`));let Y=s(`div`,G);t(G,Y);let be=s(`code`,Y);t(Y,be),t(be,r(`contentClassName`)),t(Y,r(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let xe=s(`h2`,f);t(f,xe),t(xe,r(`FAQ`));let Se=s(`h3`,f);t(f,Se),t(Se,r(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let X=s(`p`,f);t(f,X),t(X,r(`如果只是想快速搭一个手机画面，优先用`));let Ce=s(`code`,X);t(X,Ce),t(Ce,r(`display`)),t(X,r(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let we=s(`code`,X);t(X,we),t(we,r(`MockupPhone.Camera`)),t(X,r(`和`));let Te=s(`code`,X);t(X,Te),t(Te,r(`MockupPhone.Display`)),t(X,r(`会更直观。`));let Ee=s(`h3`,f);t(f,Ee),t(Ee,r(`color 和 className 应该怎么选？`));let Z=s(`p`,f);t(f,Z);let De=s(`code`,Z);t(Z,De),t(De,r(`color`)),t(Z,r(`负责常用边框主题色，适合快速选主色；`));let Oe=s(`code`,Z);t(Z,Oe),t(Oe,r(`className`));let Q=a(Z);t(Z,Q),u(Q,` `),t(Z,r(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let ke=s(`h3`,f);t(f,ke),t(ke,r(`如何在壁纸上叠加浮层内容？`));let $=s(`p`,f);t(f,$),t($,r(`让`));let Ae=s(`code`,$);t($,Ae),t(Ae,r(`display.className`)),t($,r(`具备`));let je=s(`code`,$);t($,je),t(je,r(`relative`)),t($,r(`和`));let Me=a($);t($,Me),u(Me,` `);let Ne=s(`code`,$);t($,Ne),t(Ne,r(`overflow-hidden`)),t($,r(`，再把浮层内容放进`));let Pe=s(`code`,$);t($,Pe),t(Pe,r(`children`)),t($,r(`，通过`));let Fe=s(`code`,$);t($,Fe),t(Fe,r(`contentClassName`)),t($,r(`设置`));let Ie=a($);t($,Ie),u(Ie,` `);let Le=s(`code`,$);return t($,Le),t(Le,r(`absolute inset-0`)),t($,r(`即可。`)),d})}),h,_),h})};export{F as default};