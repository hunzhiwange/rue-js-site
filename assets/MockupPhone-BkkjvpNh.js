import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,d as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as v,t as y}from"./src-DP0sEeZS.js";import{n as b}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as x}from"./Code-C8wy38VS.js";import{t as S}from"./tabs-B-QPmbH8.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},T=e=>{if(!(!e||e===`default`))return`border-${e}`},E=({className:e,children:t,...n})=>y(`div`,{...n,className:C(`mockup-phone-camera`,e),children:t}),D=({className:e,children:t,...n})=>y(`div`,{...n,className:C(`mockup-phone-display`,e),children:t}),O=e=>{let{src:t,alt:n=`mockup phone wallpaper`,imgClassName:r,children:i,contentClassName:a}=e;return v(l,{children:[t?y(`img`,{alt:n,src:t,className:r}):null,i==null?null:a?y(`div`,{className:a,children:i}):i]})},k=Object.assign(({className:e,size:t,color:n,camera:r,display:i,children:a,...o})=>{let s=`mockup-phone`,c=w(t),l=T(n);if(c&&(s+=` ${c}`),l&&(s+=` ${l}`),e&&(s+=` ${e}`),!i)return y(`div`,{...o,className:s,children:a});let u=r!==!1,d=typeof r==`object`?r:void 0;return v(`div`,{...o,className:s,children:[u?y(E,{...d}):null,y(D,{className:i.className,children:O(i)})]})},{Camera:E,Display:D}),A=`https://img.daisyui.com/images/stock/453966.webp?1`,j=({title:t,summary:l,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let C=r(b);u(b,C),d(()=>{s(C,t)});let w=i(`rue:slot:anchor`);u(y,w),d(()=>{c(l?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),d(()=>{s(i,l)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),d(()=>{c(p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),d(()=>{c(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{c(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),M=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let f=e(`thead`);u(l,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let f=i(`rue:slot:anchor`);u(l,f),d(()=>{let e=n.prop;c(e,l,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),N=({label:t,tone:n})=>m(()=>{let r=e(`span`);d(()=>{o(r,String(`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${n??`bg-white/10 text-white/85`}`))});let a=i(`rue:slot:anchor`);return u(r,a),d(()=>{c(t,r,a)}),r}),P=({label:t,className:n})=>m(()=>{let i=e(`div`);o(i,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let a=e(`div`);u(i,a),d(()=>{o(a,String(`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${n}`))});let c=r(a);u(a,c),d(()=>{s(c,t)});let l=e(`span`);u(i,l);let f=r(l);return u(l,f),d(()=>{s(f,t)}),i}),ee=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],te=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],ne=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],F=()=>{let{tabRecommended:_,tabBasic:x,tabWallpaper:S,tabSizes:C,tabLayouts:w,tabCamera:T,tabRecipes:E}=g(`useSetup:0:0`,()=>h(()=>({tabRecommended:g(`ref:1:0`,()=>f(`preview`)),tabBasic:g(`ref:1:1`,()=>f(`preview`)),tabWallpaper:g(`ref:1:2`,()=>f(`preview`)),tabSizes:g(`ref:1:3`,()=>f(`preview`)),tabLayouts:g(`ref:1:4`,()=>f(`preview`)),tabCamera:g(`ref:1:5`,()=>f(`preview`)),tabRecipes:g(`ref:1:6`,()=>f(`preview`))})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),c(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Mockup Phone 手机外框`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let b=e(`code`);u(g,b),u(b,n(`display`)),u(g,n(`、`));let D=e(`code`);u(g,D),u(D,n(`size`)),u(g,n(`、`));let O=e(`code`);u(g,O),u(O,n(`color`)),u(g,n(`和`));let F=e(`code`);u(g,F),u(F,n(`camera`)),u(g,n(`，在快速搭 demo 时不用每次都手写完整骨架。`));let I=e(`div`);u(m,I),o(I,`text-sm flex flex-wrap gap-4`);let L=e(`a`);u(I,L),t(L,`href`,`https://daisyui.com/components/mockup-phone/`),t(L,`target`,`_blank`),u(L,n(`查看 Mockup Phone 静态样式`));let re=e(`h2`);u(m,re),u(re,n(`何时使用`));let R=e(`ul`);u(m,R);let ie=e(`li`);u(R,ie),u(ie,n(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let ae=e(`li`);u(R,ae),u(ae,n(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let oe=e(`li`);u(R,oe),u(oe,n(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let se=i(`rue:component:anchor`);u(m,se),d(()=>{c(p(j,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[y(k,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:v(`div`,{children:[y(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),y(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),y(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),y(k,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:A,children:v(`div`,{className:`space-y-3`,children:[y(N,{label:`9:41`}),v(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[y(`div`,{className:`text-sm font-medium`,children:`Today`}),y(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),y(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`}),m,se)});let ce=i(`rue:component:anchor`);u(m,ce),d(()=>{c(p(j,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body items-start`,children:v(k,{"data-testid":`mockup-phone-basic`,children:[y(k.Camera,{}),y(k.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`}),m,ce)});let le=i(`rue:component:anchor`);u(m,le),d(()=>{c(p(j,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:S,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body items-start`,children:v(k,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[y(k.Camera,{}),y(k.Display,{children:y(`img`,{alt:`wallpaper`,src:A})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`}),m,le)});let ue=i(`rue:component:anchor`);u(m,ue),d(()=>{c(p(j,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:ne.map(e=>v(`div`,{className:`space-y-3 text-center`,children:[y(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),y(`div`,{className:`flex justify-center`,children:y(k,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:v(`div`,{children:[y(`div`,{className:`text-xs opacity-60`,children:e.size}),y(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`}),m,ue)});let de=i(`rue:component:anchor`);u(m,de),d(()=>{c(p(j,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:w,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[y(k,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:v(l,{children:[v(`div`,{className:`flex items-center justify-between`,children:[y(N,{label:`Recording`,tone:`bg-error/85 text-white`}),y(N,{label:`14m left`})]}),v(`div`,{children:[y(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),y(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),y(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:y(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),y(k,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:v(`div`,{className:`space-y-3`,children:[v(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),y(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),v(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[y(`div`,{className:`text-sm font-medium`,children:`Notes`}),y(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),v(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[y(`div`,{className:`text-sm font-medium`,children:`Next`}),y(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`}),m,de)});let fe=i(`rue:component:anchor`);u(m,fe),d(()=>{c(p(j,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:T,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[y(k,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:v(`div`,{children:[v(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),y(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),y(k,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:v(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),y(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`}),m,fe)});let z=i(`rue:component:anchor`);u(m,z),d(()=>{c(p(j,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[y(`div`,{className:`flex justify-center`,children:y(k,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:A,children:v(`div`,{className:`grid gap-3`,children:[v(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),y(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),y(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),v(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[y(`div`,{className:`text-sm font-medium`,children:`Next up`}),y(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),y(`div`,{className:`flex justify-center`,children:y(k,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:v(`div`,{className:`flex h-full flex-col justify-between`,children:[v(`div`,{children:[y(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),y(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),v(`div`,{className:`grid grid-cols-3 gap-3`,children:[y(P,{label:`Mail`,className:`bg-sky-500 text-white`}),y(P,{label:`AI`,className:`bg-fuchsia-500 text-white`}),y(P,{label:`Cam`,className:`bg-emerald-500 text-white`}),y(P,{label:`Map`,className:`bg-amber-400 text-slate-950`}),y(P,{label:`Docs`,className:`bg-white text-slate-950`}),y(P,{label:`Pay`,className:`bg-rose-500 text-white`})]}),y(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`}),m,z)});let B=e(`h2`);u(m,B),t(B,`id`,`mockup-phone-api`),u(B,n(`API`));let V=e(`p`);u(m,V),u(V,n(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let pe=e(`h3`);u(m,pe),u(pe,n(`MockupPhone`));let me=i(`rue:component:anchor`);u(m,me),d(()=>{c(p(M,{rows:ee}),m,me)});let H=e(`h3`);u(m,H),o(H,`mt-6`),u(H,n(`Compound Parts`));let he=i(`rue:component:anchor`);u(m,he),d(()=>{c(p(M,{rows:te}),m,he)});let U=e(`div`);u(m,U),o(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`h3`);u(U,W),o(W,`mt-0 mb-3 text-base font-semibold`),u(W,n(`display 对象结构`));let G=e(`div`);u(U,G),o(G,`grid gap-2 text-sm md:grid-cols-2`);let K=e(`div`);u(G,K);let ge=e(`code`);u(K,ge),u(ge,n(`className`)),u(K,n(`：显示区根节点类名`));let q=e(`div`);u(G,q);let _e=e(`code`);u(q,_e),u(_e,n(`src`)),u(q,n(`/`));let ve=e(`code`);u(q,ve),u(ve,n(`alt`)),u(q,n(`/`));let ye=e(`code`);u(q,ye),u(ye,n(`imgClassName`)),u(q,n(`：内置壁纸图`));let J=e(`div`);u(G,J);let be=e(`code`);u(J,be),u(be,n(`children`)),u(J,n(`：显示区内容`));let Y=e(`div`);u(G,Y);let xe=e(`code`);u(Y,xe),u(xe,n(`contentClassName`)),u(Y,n(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Se=e(`h2`);u(m,Se),u(Se,n(`FAQ`));let Ce=e(`h3`);u(m,Ce),u(Ce,n(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let X=e(`p`);u(m,X),u(X,n(`如果只是想快速搭一个手机画面，优先用`));let we=e(`code`);u(X,we),u(we,n(`display`)),u(X,n(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let Te=e(`code`);u(X,Te),u(Te,n(`MockupPhone.Camera`)),u(X,n(`和`));let Ee=e(`code`);u(X,Ee),u(Ee,n(`MockupPhone.Display`)),u(X,n(`会更直观。`));let De=e(`h3`);u(m,De),u(De,n(`color 和 className 应该怎么选？`));let Z=e(`p`);u(m,Z);let Oe=e(`code`);u(Z,Oe),u(Oe,n(`color`)),u(Z,n(`负责常用边框主题色，适合快速选主色；`));let Q=e(`code`);u(Z,Q),u(Q,n(`className`));let ke=r(Z);u(Z,ke),s(ke,` `),u(Z,n(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let Ae=e(`h3`);u(m,Ae),u(Ae,n(`如何在壁纸上叠加浮层内容？`));let $=e(`p`);u(m,$),u($,n(`让`));let je=e(`code`);u($,je),u(je,n(`display.className`)),u($,n(`具备`));let Me=e(`code`);u($,Me),u(Me,n(`relative`)),u($,n(`和`));let Ne=r($);u($,Ne),s(Ne,` `);let Pe=e(`code`);u($,Pe),u(Pe,n(`overflow-hidden`)),u($,n(`，再把浮层内容放进`));let Fe=e(`code`);u($,Fe),u(Fe,n(`children`)),u($,n(`，通过`));let Ie=e(`code`);u($,Ie),u(Ie,n(`contentClassName`)),u($,n(`设置`));let Le=r($);u($,Le),s(Le,` `);let Re=e(`code`);return u($,Re),u(Re,n(`absolute inset-0`)),u($,n(`即可。`)),f})}),f,h),f})};export{F as default};