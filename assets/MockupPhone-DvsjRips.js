import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,d as l,f as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _,n as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{n as y,t as b}from"./src-BaNG2YQR.js";import{n as x}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as S}from"./Code-CLTo4rRM.js";import{t as C}from"./tabs-CxVJfyAw.js";var w=(e,t)=>t?`${e} ${t}`:e,T=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},ee=e=>{if(!(!e||e===`default`))return`border-${e}`},E=({className:e,children:t,...n})=>b(`div`,{...n,className:w(`mockup-phone-camera`,e),children:t}),D=({className:e,children:t,...n})=>b(`div`,{...n,className:w(`mockup-phone-display`,e),children:t}),O=e=>{let{src:t,alt:n=`mockup phone wallpaper`,imgClassName:r,children:i,contentClassName:a}=e;return y(u,{children:[t?b(`img`,{alt:n,src:t,className:r}):null,i==null?null:a?b(`div`,{className:a,children:i}):i]})},k=Object.assign(({className:e,size:t,color:n,camera:r,display:i,children:a,...o})=>{let s=`mockup-phone`,c=T(t),l=ee(n);if(c&&(s+=` ${c}`),l&&(s+=` ${l}`),e&&(s+=` ${e}`),!i)return b(`div`,{...o,className:s,children:a});let u=r!==!1,d=typeof r==`object`?r:void 0;return y(`div`,{...o,className:s,children:[u?b(E,{...d}):null,b(D,{className:i.className,children:O(i)})]})},{Camera:E,Display:D}),A=`https://img.daisyui.com/images/stock/453966.webp?1`,j=a=>l(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let p=r(`div`,f);i(f,p);let g=r(`h2`,p);i(p,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),c(()=>{let e=a.title;h(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);i(p,v),c(()=>{let o=a.summary?l(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),c(()=>{let e=a.summary;h(()=>d(e,s,l))}),o}):``;h(()=>d(o,p,v))});let y=e(`rue:component:anchor`);i(u,y),c(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});h(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),c(()=>{let n=a.tab.value===`preview`?a.preview():l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=m(S,{className:`mt-2`,lang:`tsx`,code:a.code});h(()=>d(e,n,r))}),n});h(()=>d(n,u,b))}),u}),te=a=>l(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let u=r(`code`,l);i(l,u);let f=e(`rue:slot:anchor`);i(u,f),c(()=>{let e=n.prop;h(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),c(()=>{let e=n.description;h(()=>d(e,p,m))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;h(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;h(()=>d(e,b,x))}),a}),a,o)}})}),f}),M=t=>l(a=>{let o=r(`span`,a);c(()=>{n(o,String(`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${t.tone??`bg-white/10 text-white/85`}`))});let s=e(`rue:slot:anchor`);return i(o,s),c(()=>{let e=t.label;h(()=>d(e,o,s))}),o}),N=t=>l(a=>{let o=r(`div`,a);n(o,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let s=r(`div`,o);i(o,s),c(()=>{n(s,String(`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${t.className}`))});let l=e(`rue:slot:anchor`);i(s,l),c(()=>{let e=t.label;h(()=>d(e,s,l))});let u=r(`span`,o);i(o,u);let f=e(`rue:slot:anchor`);return i(u,f),c(()=>{let e=t.label;h(()=>d(e,u,f))}),o}),ne=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],re=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],ie=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],P=()=>{let{tabRecommended:v,tabBasic:S,tabWallpaper:C,tabSizes:w,tabLayouts:T,tabCamera:ee,tabRecipes:E}=_(`useSetup:0:0`,()=>f(()=>({tabRecommended:_(`ref:1:0`,()=>p(`preview`)),tabBasic:_(`ref:1:1`,()=>p(`preview`)),tabWallpaper:_(`ref:1:2`,()=>p(`preview`)),tabSizes:_(`ref:1:3`,()=>p(`preview`)),tabLayouts:_(`ref:1:4`,()=>p(`preview`)),tabCamera:_(`ref:1:5`,()=>p(`preview`)),tabRecipes:_(`ref:1:6`,()=>p(`preview`))})));return l(f=>{let p=t(),_=e(`rue:component:anchor`);return i(p,_),d(m(x,{children:l(()=>{let l=t(),f=r(`div`,l);i(l,f),n(f,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,f);i(f,p),i(p,o(`Mockup Phone 手机外框`));let _=r(`p`,f);i(f,_),n(_,`text-sm mt-3 mb-3`),i(_,o(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let x=r(`code`,_);i(_,x),i(x,o(`display`)),i(_,o(`、`));let D=r(`code`,_);i(_,D),i(D,o(`size`)),i(_,o(`、`));let O=r(`code`,_);i(_,O),i(O,o(`color`)),i(_,o(`和`));let P=r(`code`,_);i(_,P),i(P,o(`camera`)),i(_,o(`，在快速搭 demo 时不用每次都手写完整骨架。`));let F=r(`div`,f);i(f,F),n(F,`text-sm flex flex-wrap gap-4`);let I=r(`a`,F);i(F,I),s(I,`href`,`https://daisyui.com/components/mockup-phone/`),s(I,`target`,`_blank`),i(I,o(`查看 Mockup Phone 静态样式`));let ae=r(`h2`,f);i(f,ae),i(ae,o(`何时使用`));let L=r(`ul`,f);i(f,L);let oe=r(`li`,L);i(L,oe),i(oe,o(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let se=r(`li`,L);i(L,se),i(se,o(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let ce=r(`li`,L);i(L,ce),i(ce,o(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let le=e(`rue:component:anchor`);i(f,le),c(()=>{let e=m(j,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(k,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),b(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),b(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),b(k,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:A,children:y(`div`,{className:`space-y-3`,children:[b(M,{label:`9:41`}),y(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[b(`div`,{className:`text-sm font-medium`,children:`Today`}),b(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),b(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});h(()=>d(e,f,le))});let ue=e(`rue:component:anchor`);i(f,ue),c(()=>{let e=m(j,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body items-start`,children:y(k,{"data-testid":`mockup-phone-basic`,children:[b(k.Camera,{}),b(k.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});h(()=>d(e,f,ue))});let de=e(`rue:component:anchor`);i(f,de),c(()=>{let e=m(j,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body items-start`,children:y(k,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[b(k.Camera,{}),b(k.Display,{children:b(`img`,{alt:`wallpaper`,src:A})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});h(()=>d(e,f,de))});let fe=e(`rue:component:anchor`);i(f,fe),c(()=>{let e=m(j,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:ie.map(e=>y(`div`,{className:`space-y-3 text-center`,children:[b(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),b(`div`,{className:`flex justify-center`,children:b(k,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:y(`div`,{children:[b(`div`,{className:`text-xs opacity-60`,children:e.size}),b(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});h(()=>d(e,f,fe))});let pe=e(`rue:component:anchor`);i(f,pe),c(()=>{let e=m(j,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(k,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:y(u,{children:[y(`div`,{className:`flex items-center justify-between`,children:[b(M,{label:`Recording`,tone:`bg-error/85 text-white`}),b(M,{label:`14m left`})]}),y(`div`,{children:[b(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),b(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),b(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:b(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),b(k,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),b(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),y(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Notes`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),y(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Next`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});h(()=>d(e,f,pe))});let R=e(`rue:component:anchor`);i(f,R),c(()=>{let e=m(j,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(k,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:y(`div`,{children:[y(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),b(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),b(k,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),b(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});h(()=>d(e,f,R))});let z=e(`rue:component:anchor`);i(f,z),c(()=>{let e=m(j,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[b(`div`,{className:`flex justify-center`,children:b(k,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:A,children:y(`div`,{className:`grid gap-3`,children:[y(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),b(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),y(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[b(`div`,{className:`text-sm font-medium`,children:`Next up`}),b(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),b(`div`,{className:`flex justify-center`,children:b(k,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:y(`div`,{className:`flex h-full flex-col justify-between`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),b(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),y(`div`,{className:`grid grid-cols-3 gap-3`,children:[b(N,{label:`Mail`,className:`bg-sky-500 text-white`}),b(N,{label:`AI`,className:`bg-fuchsia-500 text-white`}),b(N,{label:`Cam`,className:`bg-emerald-500 text-white`}),b(N,{label:`Map`,className:`bg-amber-400 text-slate-950`}),b(N,{label:`Docs`,className:`bg-white text-slate-950`}),b(N,{label:`Pay`,className:`bg-rose-500 text-white`})]}),b(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});h(()=>d(e,f,z))});let B=r(`h2`,f);i(f,B),s(B,`id`,`mockup-phone-api`),i(B,o(`API`));let V=r(`p`,f);i(f,V),i(V,o(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let me=r(`h3`,f);i(f,me),i(me,o(`MockupPhone`));let he=e(`rue:component:anchor`);i(f,he),c(()=>{let e=m(te,{rows:ne});h(()=>d(e,f,he))});let H=r(`h3`,f);i(f,H),n(H,`mt-6`),i(H,o(`Compound Parts`));let ge=e(`rue:component:anchor`);i(f,ge),c(()=>{let e=m(te,{rows:re});h(()=>d(e,f,ge))});let U=r(`div`,f);i(f,U),n(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=r(`h3`,U);i(U,W),n(W,`mt-0 mb-3 text-base font-semibold`),i(W,o(`display 对象结构`));let G=r(`div`,U);i(U,G),n(G,`grid gap-2 text-sm md:grid-cols-2`);let K=r(`div`,G);i(G,K);let _e=r(`code`,K);i(K,_e),i(_e,o(`className`)),i(K,o(`：显示区根节点类名`));let q=r(`div`,G);i(G,q);let ve=r(`code`,q);i(q,ve),i(ve,o(`src`)),i(q,o(`/`));let ye=r(`code`,q);i(q,ye),i(ye,o(`alt`)),i(q,o(`/`));let be=r(`code`,q);i(q,be),i(be,o(`imgClassName`)),i(q,o(`：内置壁纸图`));let J=r(`div`,G);i(G,J);let xe=r(`code`,J);i(J,xe),i(xe,o(`children`)),i(J,o(`：显示区内容`));let Y=r(`div`,G);i(G,Y);let Se=r(`code`,Y);i(Y,Se),i(Se,o(`contentClassName`)),i(Y,o(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Ce=r(`h2`,f);i(f,Ce),i(Ce,o(`FAQ`));let we=r(`h3`,f);i(f,we),i(we,o(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let X=r(`p`,f);i(f,X),i(X,o(`如果只是想快速搭一个手机画面，优先用`));let Te=r(`code`,X);i(X,Te),i(Te,o(`display`)),i(X,o(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let Ee=r(`code`,X);i(X,Ee),i(Ee,o(`MockupPhone.Camera`)),i(X,o(`和`));let De=r(`code`,X);i(X,De),i(De,o(`MockupPhone.Display`)),i(X,o(`会更直观。`));let Oe=r(`h3`,f);i(f,Oe),i(Oe,o(`color 和 className 应该怎么选？`));let Z=r(`p`,f);i(f,Z);let Q=r(`code`,Z);i(Z,Q),i(Q,o(`color`)),i(Z,o(`负责常用边框主题色，适合快速选主色；`));let ke=r(`code`,Z);i(Z,ke),i(ke,o(`className`));let Ae=g(Z);i(Z,Ae),a(Ae,` `),i(Z,o(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let je=r(`h3`,f);i(f,je),i(je,o(`如何在壁纸上叠加浮层内容？`));let $=r(`p`,f);i(f,$),i($,o(`让`));let Me=r(`code`,$);i($,Me),i(Me,o(`display.className`)),i($,o(`具备`));let Ne=r(`code`,$);i($,Ne),i(Ne,o(`relative`)),i($,o(`和`));let Pe=g($);i($,Pe),a(Pe,` `);let Fe=r(`code`,$);i($,Fe),i(Fe,o(`overflow-hidden`)),i($,o(`，再把浮层内容放进`));let Ie=r(`code`,$);i($,Ie),i(Ie,o(`children`)),i($,o(`，通过`));let Le=r(`code`,$);i($,Le),i(Le,o(`contentClassName`)),i($,o(`设置`));let Re=g($);i($,Re),a(Re,` `);let ze=r(`code`,$);return i($,ze),i(ze,o(`absolute inset-0`)),i($,o(`即可。`)),l})}),p,_),p})};export{P as default};