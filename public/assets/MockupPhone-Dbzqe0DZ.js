import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,m as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _,n as v}from"./vapor-helpers-vapor-CJFAWine.js";import{a as y,i as b}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as x}from"./Code-Ds9lKLk6.js";import{t as S}from"./tabs-DSy0eY-V.js";import{n as C}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as w}from"./preview-test-gate-CxeqnU1g.js";var T=(e,t)=>t?`${e} ${t}`:e,ee=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},E=e=>{if(!(!e||e===`default`))return`border-${e}`},D=({className:e,children:t,...n})=>b(`div`,{...n,className:T(`mockup-phone-camera`,e),children:t}),O=({className:e,children:t,...n})=>b(`div`,{...n,className:T(`mockup-phone-display`,e),children:t}),k=e=>{let{src:t,alt:n=`mockup phone wallpaper`,imgClassName:r,children:i,contentClassName:a}=e;return y(d,{children:[t?b(`img`,{alt:n,src:t,className:r}):null,i==null?null:a?b(`div`,{className:a,children:i}):i]})},A=Object.assign(({className:e,size:t,color:n,camera:r,display:i,children:a,...o})=>{let s=`mockup-phone`,c=ee(t),l=E(n);if(c&&(s+=` ${c}`),l&&(s+=` ${l}`),e&&(s+=` ${e}`),!i)return b(`div`,{...o,className:s,children:a});let u=r!==!1,d=typeof r==`object`?r:void 0;return y(`div`,{...o,className:s,children:[u?b(D,{...d}):null,b(O,{className:i.className,children:k(i)})]})},{Camera:D,Display:O}),j=`https://img.daisyui.com/images/stock/453966.webp?1`,M=t=>u(n=>{let d=e(`div`,n);c(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),c(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);a(f,p);let g=e(`h2`,p);a(p,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,l(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>m(e,g,_))});let v=s(`rue:slot:anchor`);a(p,v),o(()=>{let n=t.summary?u(()=>{let n=r(),l=e(`p`,n);a(n,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(l,u),o(()=>{let e=t.summary;i(()=>m(e,l,u))}),n}):``;i(()=>m(n,p,v))});let y=s(`rue:component:anchor`);a(d,y),o(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>m(e,d,y))});let b=s(`rue:slot:anchor`);return a(d,b),o(()=>{let e=t.tab.value===`preview`?w(t.title,t.preview):u(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=h(x,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>m(r,e,n))}),e});i(()=>m(e,d,b))}),d}),te=t=>u(n=>{let d=e(`div`,n);c(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,d);a(d,f),c(f,`table table-zebra`);let h=e(`thead`,f);a(f,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,l(`属性`));let y=e(`th`,g);a(g,y),a(y,l(`说明`));let b=e(`th`,g);a(g,b),a(b,l(`类型`));let x=e(`th`,g);a(g,x),a(x,l(`默认值`));let S=e(`tbody`,f);a(f,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,l,d)=>{m(u(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{p(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=s(`rue:slot:anchor`);a(u,d),o(()=>{let e=t.prop;i(()=>m(e,u,d))});let f=e(`td`,c);a(c,f);let h=s(`rue:slot:anchor`);a(f,h),o(()=>{let e=t.description;i(()=>m(e,f,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>m(e,b,x))}),n}),n,c)}})}),d}),N=t=>u(n=>{let r=e(`span`,n);o(()=>{c(r,String(`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${t.tone??`bg-white/10 text-white/85`}`))});let l=s(`rue:slot:anchor`);return a(r,l),o(()=>{let e=t.label;i(()=>m(e,r,l))}),r}),P=t=>u(n=>{let r=e(`div`,n);c(r,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let l=e(`div`,r);a(r,l),o(()=>{c(l,String(`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${t.className}`))});let u=s(`rue:slot:anchor`);a(l,u),o(()=>{let e=t.label;i(()=>m(e,l,u))});let d=e(`span`,r);a(r,d);let f=s(`rue:slot:anchor`);return a(d,f),o(()=>{let e=t.label;i(()=>m(e,d,f))}),r}),ne=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],re=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],ie=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],F=()=>{let{tabRecommended:v,tabBasic:x,tabWallpaper:S,tabSizes:w,tabLayouts:T,tabCamera:ee,tabRecipes:E}=_(`useSetup:0:0`,()=>t(()=>({tabRecommended:_(`ref:1:0`,()=>n(`preview`)),tabBasic:_(`ref:1:1`,()=>n(`preview`)),tabWallpaper:_(`ref:1:2`,()=>n(`preview`)),tabSizes:_(`ref:1:3`,()=>n(`preview`)),tabLayouts:_(`ref:1:4`,()=>n(`preview`)),tabCamera:_(`ref:1:5`,()=>n(`preview`)),tabRecipes:_(`ref:1:6`,()=>n(`preview`))})));return u(t=>{let n=r(),_=s(`rue:component:anchor`);return a(n,_),m(h(C,{children:u(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,n);a(n,u),a(u,l(`Mockup Phone 手机外框`));let _=e(`p`,n);a(n,_),c(_,`text-sm mt-3 mb-3`),a(_,l(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let C=e(`code`,_);a(_,C),a(C,l(`display`)),a(_,l(`、`));let D=e(`code`,_);a(_,D),a(D,l(`size`)),a(_,l(`、`));let O=e(`code`,_);a(_,O),a(O,l(`color`)),a(_,l(`和`));let k=e(`code`,_);a(_,k),a(k,l(`camera`)),a(_,l(`，在快速搭 demo 时不用每次都手写完整骨架。`));let F=e(`h2`,n);a(n,F),a(F,l(`何时使用`));let I=e(`ul`,n);a(n,I);let ae=e(`li`,I);a(I,ae),a(ae,l(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let oe=e(`li`,I);a(I,oe),a(oe,l(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let se=e(`li`,I);a(I,se),a(se,l(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let ce=s(`rue:component:anchor`);a(n,ce),o(()=>{let e=h(M,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(A,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),b(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),b(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),b(A,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:j,children:y(`div`,{className:`space-y-3`,children:[b(N,{label:`9:41`}),y(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[b(`div`,{className:`text-sm font-medium`,children:`Today`}),b(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),b(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});i(()=>m(e,n,ce))});let le=s(`rue:component:anchor`);a(n,le),o(()=>{let e=h(M,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body items-start`,children:y(A,{"data-testid":`mockup-phone-basic`,children:[b(A.Camera,{}),b(A.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});i(()=>m(e,n,le))});let ue=s(`rue:component:anchor`);a(n,ue),o(()=>{let e=h(M,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body items-start`,children:y(A,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[b(A.Camera,{}),b(A.Display,{children:b(`img`,{alt:`wallpaper`,src:j})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});i(()=>m(e,n,ue))});let de=s(`rue:component:anchor`);a(n,de),o(()=>{let e=h(M,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:ie.map(e=>y(`div`,{className:`space-y-3 text-center`,children:[b(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),b(`div`,{className:`flex justify-center`,children:b(A,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:y(`div`,{children:[b(`div`,{className:`text-xs opacity-60`,children:e.size}),b(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});i(()=>m(e,n,de))});let fe=s(`rue:component:anchor`);a(n,fe),o(()=>{let e=h(M,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(A,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:y(d,{children:[y(`div`,{className:`flex items-center justify-between`,children:[b(N,{label:`Recording`,tone:`bg-error/85 text-white`}),b(N,{label:`14m left`})]}),y(`div`,{children:[b(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),b(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),b(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:b(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),b(A,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),b(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),y(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Notes`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),y(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Next`}),b(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});i(()=>m(e,n,fe))});let L=s(`rue:component:anchor`);a(n,L),o(()=>{let e=h(M,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[b(A,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:y(`div`,{children:[y(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),b(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),b(A,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),b(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});i(()=>m(e,n,L))});let R=s(`rue:component:anchor`);a(n,R),o(()=>{let e=h(M,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[b(`div`,{className:`flex justify-center`,children:b(A,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:j,children:y(`div`,{className:`grid gap-3`,children:[y(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),b(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),y(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[b(`div`,{className:`text-sm font-medium`,children:`Next up`}),b(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),b(`div`,{className:`flex justify-center`,children:b(A,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:y(`div`,{className:`flex h-full flex-col justify-between`,children:[y(`div`,{children:[b(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),b(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),y(`div`,{className:`grid grid-cols-3 gap-3`,children:[b(P,{label:`Mail`,className:`bg-sky-500 text-white`}),b(P,{label:`AI`,className:`bg-fuchsia-500 text-white`}),b(P,{label:`Cam`,className:`bg-emerald-500 text-white`}),b(P,{label:`Map`,className:`bg-amber-400 text-slate-950`}),b(P,{label:`Docs`,className:`bg-white text-slate-950`}),b(P,{label:`Pay`,className:`bg-rose-500 text-white`})]}),b(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});i(()=>m(e,n,R))});let z=e(`h2`,n);a(n,z),p(z,`id`,`mockup-phone-api`),a(z,l(`API`));let B=e(`p`,n);a(n,B),a(B,l(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let V=e(`h3`,n);a(n,V),a(V,l(`MockupPhone`));let pe=s(`rue:component:anchor`);a(n,pe),o(()=>{let e=h(te,{rows:ne});i(()=>m(e,n,pe))});let H=e(`h3`,n);a(n,H),c(H,`mt-6`),a(H,l(`Compound Parts`));let me=s(`rue:component:anchor`);a(n,me),o(()=>{let e=h(te,{rows:re});i(()=>m(e,n,me))});let U=e(`div`,n);a(n,U),c(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`h3`,U);a(U,W),c(W,`mt-0 mb-3 text-base font-semibold`),a(W,l(`display 对象结构`));let G=e(`div`,U);a(U,G),c(G,`grid gap-2 text-sm md:grid-cols-2`);let K=e(`div`,G);a(G,K);let he=e(`code`,K);a(K,he),a(he,l(`className`)),a(K,l(`：显示区根节点类名`));let q=e(`div`,G);a(G,q);let ge=e(`code`,q);a(q,ge),a(ge,l(`src`)),a(q,l(`/`));let _e=e(`code`,q);a(q,_e),a(_e,l(`alt`)),a(q,l(`/`));let ve=e(`code`,q);a(q,ve),a(ve,l(`imgClassName`)),a(q,l(`：内置壁纸图`));let J=e(`div`,G);a(G,J);let ye=e(`code`,J);a(J,ye),a(ye,l(`children`)),a(J,l(`：显示区内容`));let Y=e(`div`,G);a(G,Y);let be=e(`code`,Y);a(Y,be),a(be,l(`contentClassName`)),a(Y,l(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let xe=e(`h2`,n);a(n,xe),a(xe,l(`FAQ`));let Se=e(`h3`,n);a(n,Se),a(Se,l(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let X=e(`p`,n);a(n,X),a(X,l(`如果只是想快速搭一个手机画面，优先用`));let Ce=e(`code`,X);a(X,Ce),a(Ce,l(`display`)),a(X,l(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let we=e(`code`,X);a(X,we),a(we,l(`MockupPhone.Camera`)),a(X,l(`和`));let Te=e(`code`,X);a(X,Te),a(Te,l(`MockupPhone.Display`)),a(X,l(`会更直观。`));let Ee=e(`h3`,n);a(n,Ee),a(Ee,l(`color 和 className 应该怎么选？`));let Z=e(`p`,n);a(n,Z);let De=e(`code`,Z);a(Z,De),a(De,l(`color`)),a(Z,l(`负责常用边框主题色，适合快速选主色；`));let Oe=e(`code`,Z);a(Z,Oe),a(Oe,l(`className`));let Q=g(Z);a(Z,Q),f(Q,` `),a(Z,l(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let ke=e(`h3`,n);a(n,ke),a(ke,l(`如何在壁纸上叠加浮层内容？`));let $=e(`p`,n);a(n,$),a($,l(`让`));let Ae=e(`code`,$);a($,Ae),a(Ae,l(`display.className`)),a($,l(`具备`));let je=e(`code`,$);a($,je),a(je,l(`relative`)),a($,l(`和`));let Me=g($);a($,Me),f(Me,` `);let Ne=e(`code`,$);a($,Ne),a(Ne,l(`overflow-hidden`)),a($,l(`，再把浮层内容放进`));let Pe=e(`code`,$);a($,Pe),a(Pe,l(`children`)),a($,l(`，通过`));let Fe=e(`code`,$);a($,Fe),a(Fe,l(`contentClassName`)),a($,l(`设置`));let Ie=g($);a($,Ie),f(Ie,` `);let Le=e(`code`,$);return a($,Le),a(Le,l(`absolute inset-0`)),a($,l(`即可。`)),t})}),n,_),n})};export{F as default};