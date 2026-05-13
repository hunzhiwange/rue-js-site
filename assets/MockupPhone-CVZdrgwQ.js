import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,d as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as y,t as b}from"./src-BfQKH6_d.js";import{n as x}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as S}from"./Code-2C2psoH3.js";import{t as C}from"./tabs-BgQmsOey.js";var w=(e,t)=>t?`${e} ${t}`:e,ee=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},te=e=>{if(!(!e||e===`default`))return`border-${e}`},T=({className:e,children:t,...n})=>b(`div`,{...n,className:w(`mockup-phone-camera`,e),children:t}),E=({className:e,children:t,...n})=>b(`div`,{...n,className:w(`mockup-phone-display`,e),children:t}),D=e=>{let{src:t,alt:n=`mockup phone wallpaper`,imgClassName:r,children:i,contentClassName:a}=e;return y(f,{children:[t?b(`img`,{alt:n,src:t,className:r}):null,i==null?null:a?b(`div`,{className:a,children:i}):i]})},O=Object.assign(({className:e,size:t,color:n,camera:r,display:i,children:a,...o})=>{let s=`mockup-phone`,c=ee(t),l=te(n);if(c&&(s+=` ${c}`),l&&(s+=` ${l}`),e&&(s+=` ${e}`),!i)return b(`div`,{...o,className:s,children:a});let u=r!==!1,d=typeof r==`object`?r:void 0;return y(`div`,{...o,className:s,children:[u?b(T,{...d}):null,b(E,{className:i.className,children:D(i)})]})},{Camera:T,Display:E}),k=`https://img.daisyui.com/images/stock/453966.webp?1`,A=o=>g(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let f=n(`h2`);i(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,r(`# `));let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=o.title;m(()=>d(e,f,p))});let _=a(`rue:slot:anchor`);i(l,_),u(()=>{let r=o.summary?g(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;m(()=>d(e,s,c))}),r}):``;m(()=>d(r,l,_))});let v=a(`rue:component:anchor`);i(s,v),u(()=>{let e=h(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});m(()=>d(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),u(()=>{let t=o.tab.value===`preview`?o.preview():g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(S,{className:`mt-2`,lang:`tsx`,code:o.code});m(()=>d(e,t,n))}),t});m(()=>d(t,s,y))}),s}),ne=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let y=n(`th`);i(p,y),i(y,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=v({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),j=e=>g(()=>{let r=n(`span`);u(()=>{t(r,String(`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${e.tone??`bg-white/10 text-white/85`}`))});let o=a(`rue:slot:anchor`);return i(r,o),u(()=>{let t=e.label;m(()=>d(t,r,o))}),r}),M=e=>g(()=>{let r=n(`div`);t(r,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let o=n(`div`);i(r,o),u(()=>{t(o,String(`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${e.className}`))});let s=a(`rue:slot:anchor`);i(o,s),u(()=>{let t=e.label;m(()=>d(t,o,s))});let c=n(`span`);i(r,c);let l=a(`rue:slot:anchor`);return i(c,l),u(()=>{let t=e.label;m(()=>d(t,c,l))}),r}),re=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],ie=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],ae=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],N=()=>{let{tabRecommended:v,tabBasic:S,tabWallpaper:C,tabSizes:w,tabLayouts:ee,tabCamera:te,tabRecipes:T}=_(`useSetup:0:0`,()=>l(()=>({tabRecommended:_(`ref:1:0`,()=>p(`preview`)),tabBasic:_(`ref:1:1`,()=>p(`preview`)),tabWallpaper:_(`ref:1:2`,()=>p(`preview`)),tabSizes:_(`ref:1:3`,()=>p(`preview`)),tabLayouts:_(`ref:1:4`,()=>p(`preview`)),tabCamera:_(`ref:1:5`,()=>p(`preview`)),tabRecipes:_(`ref:1:6`,()=>p(`preview`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(x,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let g=n(`h1`);i(p,g),i(g,r(`Mockup Phone 手机外框`));let _=n(`p`);i(p,_),t(_,`text-sm mt-3 mb-3`),i(_,r(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let x=n(`code`);i(_,x),i(x,r(`display`)),i(_,r(`、`));let E=n(`code`);i(_,E),i(E,r(`size`)),i(_,r(`、`));let D=n(`code`);i(_,D),i(D,r(`color`)),i(_,r(`和`));let N=n(`code`);i(_,N),i(N,r(`camera`)),i(_,r(`，在快速搭 demo 时不用每次都手写完整骨架。`));let P=n(`div`);i(p,P),t(P,`text-sm flex flex-wrap gap-4`);let F=n(`a`);i(P,F),s(F,`href`,`https://daisyui.com/components/mockup-phone/`),s(F,`target`,`_blank`),i(F,r(`查看 Mockup Phone 静态样式`));let oe=n(`h2`);i(p,oe),i(oe,r(`何时使用`));let I=n(`ul`);i(p,I);let se=n(`li`);i(I,se),i(se,r(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let ce=n(`li`);i(I,ce),i(ce,r(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let le=n(`li`);i(I,le),i(le,r(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let ue=a(`rue:component:anchor`);i(p,ue),u(()=>{let e=h(A,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(O,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),b(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),b(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),b(O,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:k,children:y(`div`,{className:`space-y-3`,children:[b(j,{label:`9:41`}),y(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[b(`div`,{className:`text-sm font-medium`,children:`Today`}),b(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),b(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});m(()=>d(e,p,ue))});let de=a(`rue:component:anchor`);i(p,de),u(()=>{let e=h(A,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body items-start`,children:y(O,{"data-testid":`mockup-phone-basic`,children:[b(O.Camera,{}),b(O.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});m(()=>d(e,p,de))});let fe=a(`rue:component:anchor`);i(p,fe),u(()=>{let e=h(A,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body items-start`,children:y(O,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[b(O.Camera,{}),b(O.Display,{children:b(`img`,{alt:`wallpaper`,src:k})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});m(()=>d(e,p,fe))});let pe=a(`rue:component:anchor`);i(p,pe),u(()=>{let e=h(A,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:ae.map(e=>y(`div`,{className:`space-y-3 text-center`,children:[b(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),b(`div`,{className:`flex justify-center`,children:b(O,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:y(`div`,{children:[b(`div`,{className:`text-xs opacity-60`,children:e.size}),b(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});m(()=>d(e,p,pe))});let L=a(`rue:component:anchor`);i(p,L),u(()=>{let e=h(A,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(O,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:y(f,{children:[y(`div`,{className:`flex items-center justify-between`,children:[b(j,{label:`Recording`,tone:`bg-error/85 text-white`}),b(j,{label:`14m left`})]}),y(`div`,{children:[b(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),b(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),b(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:b(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),b(O,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),b(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),y(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Notes`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),y(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Next`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});m(()=>d(e,p,L))});let R=a(`rue:component:anchor`);i(p,R),u(()=>{let e=h(A,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:te,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(O,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:y(`div`,{children:[y(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),b(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),b(O,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),b(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});m(()=>d(e,p,R))});let z=a(`rue:component:anchor`);i(p,z),u(()=>{let e=h(A,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[b(`div`,{className:`flex justify-center`,children:b(O,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:k,children:y(`div`,{className:`grid gap-3`,children:[y(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),b(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),y(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[b(`div`,{className:`text-sm font-medium`,children:`Next up`}),b(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),b(`div`,{className:`flex justify-center`,children:b(O,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:y(`div`,{className:`flex h-full flex-col justify-between`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),b(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),y(`div`,{className:`grid grid-cols-3 gap-3`,children:[b(M,{label:`Mail`,className:`bg-sky-500 text-white`}),b(M,{label:`AI`,className:`bg-fuchsia-500 text-white`}),b(M,{label:`Cam`,className:`bg-emerald-500 text-white`}),b(M,{label:`Map`,className:`bg-amber-400 text-slate-950`}),b(M,{label:`Docs`,className:`bg-white text-slate-950`}),b(M,{label:`Pay`,className:`bg-rose-500 text-white`})]}),b(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});m(()=>d(e,p,z))});let B=n(`h2`);i(p,B),s(B,`id`,`mockup-phone-api`),i(B,r(`API`));let V=n(`p`);i(p,V),i(V,r(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let me=n(`h3`);i(p,me),i(me,r(`MockupPhone`));let he=a(`rue:component:anchor`);i(p,he),u(()=>{let e=h(ne,{rows:re});m(()=>d(e,p,he))});let H=n(`h3`);i(p,H),t(H,`mt-6`),i(H,r(`Compound Parts`));let ge=a(`rue:component:anchor`);i(p,ge),u(()=>{let e=h(ne,{rows:ie});m(()=>d(e,p,ge))});let U=n(`div`);i(p,U),t(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=n(`h3`);i(U,W),t(W,`mt-0 mb-3 text-base font-semibold`),i(W,r(`display 对象结构`));let G=n(`div`);i(U,G),t(G,`grid gap-2 text-sm md:grid-cols-2`);let K=n(`div`);i(G,K);let _e=n(`code`);i(K,_e),i(_e,r(`className`)),i(K,r(`：显示区根节点类名`));let q=n(`div`);i(G,q);let ve=n(`code`);i(q,ve),i(ve,r(`src`)),i(q,r(`/`));let ye=n(`code`);i(q,ye),i(ye,r(`alt`)),i(q,r(`/`));let be=n(`code`);i(q,be),i(be,r(`imgClassName`)),i(q,r(`：内置壁纸图`));let J=n(`div`);i(G,J);let xe=n(`code`);i(J,xe),i(xe,r(`children`)),i(J,r(`：显示区内容`));let Y=n(`div`);i(G,Y);let Se=n(`code`);i(Y,Se),i(Se,r(`contentClassName`)),i(Y,r(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Ce=n(`h2`);i(p,Ce),i(Ce,r(`FAQ`));let we=n(`h3`);i(p,we),i(we,r(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let X=n(`p`);i(p,X),i(X,r(`如果只是想快速搭一个手机画面，优先用`));let Te=n(`code`);i(X,Te),i(Te,r(`display`)),i(X,r(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let Ee=n(`code`);i(X,Ee),i(Ee,r(`MockupPhone.Camera`)),i(X,r(`和`));let De=n(`code`);i(X,De),i(De,r(`MockupPhone.Display`)),i(X,r(`会更直观。`));let Oe=n(`h3`);i(p,Oe),i(Oe,r(`color 和 className 应该怎么选？`));let Z=n(`p`);i(p,Z);let Q=n(`code`);i(Z,Q),i(Q,r(`color`)),i(Z,r(`负责常用边框主题色，适合快速选主色；`));let ke=n(`code`);i(Z,ke),i(ke,r(`className`));let Ae=o(Z);i(Z,Ae),c(Ae,` `),i(Z,r(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let je=n(`h3`);i(p,je),i(je,r(`如何在壁纸上叠加浮层内容？`));let $=n(`p`);i(p,$),i($,r(`让`));let Me=n(`code`);i($,Me),i(Me,r(`display.className`)),i($,r(`具备`));let Ne=n(`code`);i($,Ne),i(Ne,r(`relative`)),i($,r(`和`));let Pe=o($);i($,Pe),c(Pe,` `);let Fe=n(`code`);i($,Fe),i(Fe,r(`overflow-hidden`)),i($,r(`，再把浮层内容放进`));let Ie=n(`code`);i($,Ie),i(Ie,r(`children`)),i($,r(`，通过`));let Le=n(`code`);i($,Le),i(Le,r(`contentClassName`)),i($,r(`设置`));let Re=o($);i($,Re),c(Re,` `);let ze=n(`code`);return i($,ze),i(ze,r(`absolute inset-0`)),i($,r(`即可。`)),l})}),l,p),l})};export{N as default};