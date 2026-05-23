import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h,y as g}from"./vapor-runtime-BAZOdMd8.js";import{a as _,n as v}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as y,t as b}from"./src-DZJ4J6sD.js";import{n as x}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as S}from"./Code-DY4Ua5uc.js";import{t as C}from"./tabs-Casd077O.js";var w=(e,t)=>t?`${e} ${t}`:e,T=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},ee=e=>{if(!(!e||e===`default`))return`border-${e}`},E=({className:e,children:t,...n})=>b(`div`,{...n,className:w(`mockup-phone-camera`,e),children:t}),D=({className:e,children:t,...n})=>b(`div`,{...n,className:w(`mockup-phone-display`,e),children:t}),O=e=>{let{src:t,alt:n=`mockup phone wallpaper`,imgClassName:r,children:i,contentClassName:a}=e;return y(g,{children:[t?b(`img`,{alt:n,src:t,className:r}):null,i==null?null:a?b(`div`,{className:a,children:i}):i]})},k=Object.assign(({className:e,size:t,color:n,camera:r,display:i,children:a,...o})=>{let s=`mockup-phone`,c=T(t),l=ee(n);if(c&&(s+=` ${c}`),l&&(s+=` ${l}`),e&&(s+=` ${e}`),!i)return b(`div`,{...o,className:s,children:a});let u=r!==!1,d=typeof r==`object`?r:void 0;return y(`div`,{...o,className:s,children:[u?b(E,{...d}):null,b(D,{className:i.className,children:O(i)})]})},{Camera:E,Display:D}),A=`https://img.daisyui.com/images/stock/453966.webp?1`,j=e=>c(t=>{let i=a(`div`,t);m(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=a(`div`,i);r(i,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let f=a(`div`,s);r(s,f);let g=a(`h2`,f);r(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;h(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(f,v),l(()=>{let t=e.summary?c(()=>{let t=n(),i=a(`p`,t);r(t,i),m(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(i,s),l(()=>{let t=e.summary;h(()=>u(t,i,s))}),t}):``;h(()=>u(t,f,v))});let y=o(`rue:component:anchor`);r(i,y),l(()=>{let t=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>u(t,i,y))});let b=o(`rue:slot:anchor`);return r(i,b),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=p(S,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>u(n,t,i))}),t});h(()=>u(t,i,b))}),i}),te=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let _=a(`th`,g);r(g,_),r(_,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),M=e=>c(t=>{let n=a(`span`,t);l(()=>{m(n,String(`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${e.tone??`bg-white/10 text-white/85`}`))});let i=o(`rue:slot:anchor`);return r(n,i),l(()=>{let t=e.label;h(()=>u(t,n,i))}),n}),N=e=>c(t=>{let n=a(`div`,t);m(n,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let i=a(`div`,n);r(n,i),l(()=>{m(i,String(`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${e.className}`))});let s=o(`rue:slot:anchor`);r(i,s),l(()=>{let t=e.label;h(()=>u(t,i,s))});let c=a(`span`,n);r(n,c);let d=o(`rue:slot:anchor`);return r(c,d),l(()=>{let t=e.label;h(()=>u(t,c,d))}),n}),ne=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],re=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],ie=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],P=()=>{let{tabRecommended:v,tabBasic:S,tabWallpaper:C,tabSizes:w,tabLayouts:T,tabCamera:ee,tabRecipes:E}=_(`useSetup:0:0`,()=>t(()=>({tabRecommended:_(`ref:1:0`,()=>s(`preview`)),tabBasic:_(`ref:1:1`,()=>s(`preview`)),tabWallpaper:_(`ref:1:2`,()=>s(`preview`)),tabSizes:_(`ref:1:3`,()=>s(`preview`)),tabLayouts:_(`ref:1:4`,()=>s(`preview`)),tabCamera:_(`ref:1:5`,()=>s(`preview`)),tabRecipes:_(`ref:1:6`,()=>s(`preview`))})));return c(t=>{let s=n(),_=o(`rue:component:anchor`);return r(s,_),u(p(x,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Mockup Phone 手机外框`));let _=a(`p`,s);r(s,_),m(_,`text-sm mt-3 mb-3`),r(_,d(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let x=a(`code`,_);r(_,x),r(x,d(`display`)),r(_,d(`、`));let D=a(`code`,_);r(_,D),r(D,d(`size`)),r(_,d(`、`));let O=a(`code`,_);r(_,O),r(O,d(`color`)),r(_,d(`和`));let P=a(`code`,_);r(_,P),r(P,d(`camera`)),r(_,d(`，在快速搭 demo 时不用每次都手写完整骨架。`));let ae=a(`h2`,s);r(s,ae),r(ae,d(`何时使用`));let F=a(`ul`,s);r(s,F);let oe=a(`li`,F);r(F,oe),r(oe,d(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let se=a(`li`,F);r(F,se),r(se,d(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let ce=a(`li`,F);r(F,ce),r(ce,d(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let le=o(`rue:component:anchor`);r(s,le),l(()=>{let e=p(j,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(k,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),b(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),b(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),b(k,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:A,children:y(`div`,{className:`space-y-3`,children:[b(M,{label:`9:41`}),y(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[b(`div`,{className:`text-sm font-medium`,children:`Today`}),b(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),b(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});h(()=>u(e,s,le))});let ue=o(`rue:component:anchor`);r(s,ue),l(()=>{let e=p(j,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body items-start`,children:y(k,{"data-testid":`mockup-phone-basic`,children:[b(k.Camera,{}),b(k.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});h(()=>u(e,s,ue))});let de=o(`rue:component:anchor`);r(s,de),l(()=>{let e=p(j,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body items-start`,children:y(k,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[b(k.Camera,{}),b(k.Display,{children:b(`img`,{alt:`wallpaper`,src:A})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});h(()=>u(e,s,de))});let fe=o(`rue:component:anchor`);r(s,fe),l(()=>{let e=p(j,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:ie.map(e=>y(`div`,{className:`space-y-3 text-center`,children:[b(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),b(`div`,{className:`flex justify-center`,children:b(k,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:y(`div`,{children:[b(`div`,{className:`text-xs opacity-60`,children:e.size}),b(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});h(()=>u(e,s,fe))});let pe=o(`rue:component:anchor`);r(s,pe),l(()=>{let e=p(j,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(k,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:y(g,{children:[y(`div`,{className:`flex items-center justify-between`,children:[b(M,{label:`Recording`,tone:`bg-error/85 text-white`}),b(M,{label:`14m left`})]}),y(`div`,{children:[b(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),b(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),b(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:b(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),b(k,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),b(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),y(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Notes`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),y(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Next`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});h(()=>u(e,s,pe))});let I=o(`rue:component:anchor`);r(s,I),l(()=>{let e=p(j,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(k,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:y(`div`,{children:[y(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),b(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),b(k,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),b(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});h(()=>u(e,s,I))});let L=o(`rue:component:anchor`);r(s,L),l(()=>{let e=p(j,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[b(`div`,{className:`flex justify-center`,children:b(k,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:A,children:y(`div`,{className:`grid gap-3`,children:[y(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),b(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),y(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[b(`div`,{className:`text-sm font-medium`,children:`Next up`}),b(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),b(`div`,{className:`flex justify-center`,children:b(k,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:y(`div`,{className:`flex h-full flex-col justify-between`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),b(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),y(`div`,{className:`grid grid-cols-3 gap-3`,children:[b(N,{label:`Mail`,className:`bg-sky-500 text-white`}),b(N,{label:`AI`,className:`bg-fuchsia-500 text-white`}),b(N,{label:`Cam`,className:`bg-emerald-500 text-white`}),b(N,{label:`Map`,className:`bg-amber-400 text-slate-950`}),b(N,{label:`Docs`,className:`bg-white text-slate-950`}),b(N,{label:`Pay`,className:`bg-rose-500 text-white`})]}),b(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});h(()=>u(e,s,L))});let R=a(`h2`,s);r(s,R),e(R,`id`,`mockup-phone-api`),r(R,d(`API`));let z=a(`p`,s);r(s,z),r(z,d(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let B=a(`h3`,s);r(s,B),r(B,d(`MockupPhone`));let V=o(`rue:component:anchor`);r(s,V),l(()=>{let e=p(te,{rows:ne});h(()=>u(e,s,V))});let H=a(`h3`,s);r(s,H),m(H,`mt-6`),r(H,d(`Compound Parts`));let me=o(`rue:component:anchor`);r(s,me),l(()=>{let e=p(te,{rows:re});h(()=>u(e,s,me))});let U=a(`div`,s);r(s,U),m(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=a(`h3`,U);r(U,W),m(W,`mt-0 mb-3 text-base font-semibold`),r(W,d(`display 对象结构`));let G=a(`div`,U);r(U,G),m(G,`grid gap-2 text-sm md:grid-cols-2`);let K=a(`div`,G);r(G,K);let he=a(`code`,K);r(K,he),r(he,d(`className`)),r(K,d(`：显示区根节点类名`));let q=a(`div`,G);r(G,q);let ge=a(`code`,q);r(q,ge),r(ge,d(`src`)),r(q,d(`/`));let _e=a(`code`,q);r(q,_e),r(_e,d(`alt`)),r(q,d(`/`));let ve=a(`code`,q);r(q,ve),r(ve,d(`imgClassName`)),r(q,d(`：内置壁纸图`));let J=a(`div`,G);r(G,J);let ye=a(`code`,J);r(J,ye),r(ye,d(`children`)),r(J,d(`：显示区内容`));let Y=a(`div`,G);r(G,Y);let be=a(`code`,Y);r(Y,be),r(be,d(`contentClassName`)),r(Y,d(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let xe=a(`h2`,s);r(s,xe),r(xe,d(`FAQ`));let Se=a(`h3`,s);r(s,Se),r(Se,d(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let X=a(`p`,s);r(s,X),r(X,d(`如果只是想快速搭一个手机画面，优先用`));let Ce=a(`code`,X);r(X,Ce),r(Ce,d(`display`)),r(X,d(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let we=a(`code`,X);r(X,we),r(we,d(`MockupPhone.Camera`)),r(X,d(`和`));let Te=a(`code`,X);r(X,Te),r(Te,d(`MockupPhone.Display`)),r(X,d(`会更直观。`));let Ee=a(`h3`,s);r(s,Ee),r(Ee,d(`color 和 className 应该怎么选？`));let Z=a(`p`,s);r(s,Z);let De=a(`code`,Z);r(Z,De),r(De,d(`color`)),r(Z,d(`负责常用边框主题色，适合快速选主色；`));let Oe=a(`code`,Z);r(Z,Oe),r(Oe,d(`className`));let Q=i(Z);r(Z,Q),f(Q,` `),r(Z,d(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let ke=a(`h3`,s);r(s,ke),r(ke,d(`如何在壁纸上叠加浮层内容？`));let $=a(`p`,s);r(s,$),r($,d(`让`));let Ae=a(`code`,$);r($,Ae),r(Ae,d(`display.className`)),r($,d(`具备`));let je=a(`code`,$);r($,je),r(je,d(`relative`)),r($,d(`和`));let Me=i($);r($,Me),f(Me,` `);let Ne=a(`code`,$);r($,Ne),r(Ne,d(`overflow-hidden`)),r($,d(`，再把浮层内容放进`));let Pe=a(`code`,$);r($,Pe),r(Pe,d(`children`)),r($,d(`，通过`));let Fe=a(`code`,$);r($,Fe),r(Fe,d(`contentClassName`)),r($,d(`设置`));let Ie=i($);r($,Ie),f(Ie,` `);let Le=a(`code`,$);return r($,Le),r(Le,d(`absolute inset-0`)),r($,d(`即可。`)),t})}),s,_),s})};export{P as default};