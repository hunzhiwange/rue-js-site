import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,m as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,wt as _,xt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-BoXKy3gJ.js";import{n as S,t as C}from"./src-Dlanwp1X.js";import{t as w}from"./tabs-C7cPs47_.js";import{r as T}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as ee}from"./preview-test-gate-CiW-xKNr.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},O=e=>{if(!(!e||e===`default`))return`border-${e}`},k=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,rest:a}=y(`useSetup:0:0`,()=>d(()=>{let{className:e,children:t,...r}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,rest:r}}));return s(r=>{let i=p(`div`,r);t(()=>{v(i,a)}),t(()=>{f(i,E(`mockup-phone-camera`,n.className))});let o=g(`rue:children:anchor`);return e(i,o),t(()=>{let e=n.children;h(()=>u(e,i,o))}),i})},A=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,rest:a}=y(`useSetup:0:0:dup1`,()=>d(()=>{let{className:e,children:t,...r}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,rest:r}}));return s(r=>{let i=p(`div`,r);t(()=>{v(i,a)}),t(()=>{f(i,E(`mockup-phone-display`,n.className))});let o=g(`rue:children:anchor`);return e(i,o),t(()=>{let e=n.children;h(()=>u(e,i,o))}),i})},j=Object.assign(n=>{let r=y(`useSetup:0:0:dup2`,()=>d(()=>{let{className:e,size:t,color:r,camera:i,display:a,children:o,...s}=n,c=`mockup-phone`,l=y(`computed:1:0`,()=>_(()=>D(n.size))),u=l,d=y(`computed:1:1`,()=>_(()=>O(n.color))),f=d;return u.get()&&(c+=` ${u.get()}`),f.get()&&(c+=` ${f.get()}`),n.className&&(c+=` ${n.className}`),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,sizeClass:l,toneClass:d,showCamera:y(`computed:1:2`,()=>_(()=>n.camera!==!1)),cameraProps:y(`computed:1:3`,()=>_(()=>typeof n.camera==`object`?n.camera:void 0)),displayAlt:n.display?.alt??`mockup phone wallpaper`,hasDisplayChildren:n.display?.children!=null,cls:c}})),{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:b,__rue_rest_omit_3:x,__rue_rest_omit_4:S,__rue_rest_omit_5:C,rest:w,sizeClass:T,toneClass:ee,showCamera:E,cameraProps:j,displayAlt:M,hasDisplayChildren:N}=r,{cls:P}=r;return s(r=>{let i=p(`div`,r);t(()=>{v(i,w)}),t(()=>{f(i,P)});let c=g(`rue:slot:anchor`);return e(i,c),t(()=>{let r=n.display?s(()=>{let r=l();e(r,o(` `));let i=g(`rue:slot:anchor`);e(r,i),t(()=>{let n=E.get()?s(()=>{let n=l(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(k,{...j.get()});h(()=>u(e,n,r))}),n}):``;h(()=>u(n,r,i))}),e(r,o(` `));let c=g(`rue:component:anchor`);e(r,c);let d=s(()=>{let r=l(),i=g(`rue:slot:anchor`);e(r,i),t(()=>{let o=n.display.src?s(()=>{let r=l(),i=p(`img`,r);return e(r,i),t(()=>{a(i,`alt`,String(M))}),t(()=>{a(i,`src`,String(n.display.src))}),t(()=>{f(i,n.display.imgClassName)}),r}):``;h(()=>u(o,r,i))}),e(r,o(` `));let c=g(`rue:slot:anchor`);return e(r,c),t(()=>{let i=N?n.display.contentClassName?s(()=>{let r=l(),i=p(`div`,r);e(r,i),t(()=>{f(i,n.display.contentClassName)});let a=g(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.display.children;h(()=>u(e,i,a))}),r}):n.display.children:``;h(()=>u(i,r,c))}),r});return t(()=>{let e=m(A,{className:n.display.className,children:d});h(()=>u(e,r,c))}),e(r,o(` `)),r}):n.children;h(()=>u(r,i,c))}),i})},{Camera:k,Display:A}),M=`https://img.daisyui.com/images/stock/453966.webp?1`,N=n=>s(r=>{let i=p(`div`,r);f(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=p(`div`,i);e(i,a),f(a,`flex flex-wrap items-start justify-between gap-3`);let c=p(`div`,a);e(a,c);let d=p(`h2`,c);e(c,d),f(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(d,o(`# `));let _=g(`rue:slot:anchor`);e(d,_),t(()=>{let e=n.title;h(()=>u(e,d,_))});let v=g(`rue:slot:anchor`);e(c,v),t(()=>{let r=n.summary?s(()=>{let r=l(),i=p(`p`,r);e(r,i),f(i,`m-0 text-sm opacity-70`);let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;h(()=>u(e,i,a))}),r}):``;h(()=>u(r,c,v))});let y=g(`rue:component:anchor`);e(i,y),t(()=>{let e=m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});h(()=>u(e,i,y))});let b=g(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?ee(n.title,n.preview):s(()=>{let r=l(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(x,{className:`mt-2`,lang:`tsx`,code:n.code});h(()=>u(e,r,i))}),r});h(()=>u(r,i,b))}),i}),P=n=>s(r=>{let i=p(`div`,r);f(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=p(`table`,i);e(i,c),f(c,`table table-zebra`);let d=p(`thead`,c);e(c,d);let m=p(`tr`,d);e(d,m);let _=p(`th`,m);e(m,_),e(_,o(`属性`));let v=p(`th`,m);e(m,v),e(v,o(`说明`));let y=p(`th`,m);e(m,y),e(y,o(`类型`));let x=p(`th`,m);e(m,x),e(x,o(`默认值`));let S=p(`tbody`,c);e(c,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,c)=>{u(s(()=>{let r=l(),i=p(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=p(`td`,i);e(i,o);let s=p(`code`,o);e(o,s);let c=g(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;h(()=>u(e,s,c))});let d=p(`td`,i);e(i,d);let f=g(`rue:slot:anchor`);e(d,f),t(()=>{let e=n.description;h(()=>u(e,d,f))});let m=p(`td`,i);e(i,m);let _=p(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>u(e,_,v))});let y=p(`td`,i);e(i,y);let b=p(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>u(e,b,x))}),r}),r,i)}})}),i}),F=n=>s(r=>{let i=p(`span`,r);t(()=>{f(i,`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${n.tone??`bg-white/10 text-white/85`}`)});let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.label;h(()=>u(e,i,a))}),i}),I=n=>s(r=>{let i=p(`div`,r);f(i,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let a=p(`div`,i);e(i,a),t(()=>{f(a,`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${n.className}`)});let o=g(`rue:slot:anchor`);e(a,o),t(()=>{let e=n.label;h(()=>u(e,a,o))});let s=p(`span`,i);e(i,s);let c=g(`rue:slot:anchor`);return e(s,c),t(()=>{let e=n.label;h(()=>u(e,s,c))}),i}),te=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`组合 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],ne=[{prop:`MockupPhone.Camera`,description:`摄像头部件，展示基础结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],re=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],L=()=>{let{tabRecommended:_,tabBasic:v,tabWallpaper:b,tabSizes:x,tabLayouts:w,tabCamera:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>d(()=>({tabRecommended:y(`ref:1:0`,()=>n(`preview`)),tabBasic:y(`ref:1:1`,()=>n(`preview`)),tabWallpaper:y(`ref:1:2`,()=>n(`preview`)),tabSizes:y(`ref:1:3`,()=>n(`preview`)),tabLayouts:y(`ref:1:4`,()=>n(`preview`)),tabCamera:y(`ref:1:5`,()=>n(`preview`)),tabRecipes:y(`ref:1:6`,()=>n(`preview`))})));return s(n=>{let d=l(),y=g(`rue:component:anchor`);return e(d,y),u(m(T,{children:s(()=>{let n=l(),s=p(`div`,n);e(n,s),f(s,`max-w-none prose prose-sm md:prose-base`);let d=p(`h1`,s);e(s,d),e(d,o(`Mockup Phone 手机外框`));let y=p(`p`,s);e(s,y),f(y,`text-sm mt-3 mb-3`),e(y,o(`MockupPhone 可以使用 Rue 基础的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let T=p(`code`,y);e(y,T),e(T,o(`display`)),e(y,o(`、`));let D=p(`code`,y);e(y,D),e(D,o(`size`)),e(y,o(`、`));let O=p(`code`,y);e(y,O),e(O,o(`color`)),e(y,o(`和`));let k=p(`code`,y);e(y,k),e(k,o(`camera`)),e(y,o(`，在快速搭示例 时不用每次都手写完整骨架。`));let A=p(`h2`,s);e(s,A),e(A,o(`何时使用`));let L=p(`ul`,s);e(s,L);let ie=p(`li`,L);e(L,ie),e(ie,o(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let ae=p(`li`,L);e(L,ae),e(ae,o(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let oe=p(`li`,L);e(L,oe),e(oe,o(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let se=g(`rue:component:anchor`);e(s,se),t(()=>{let e=m(N,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:_,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[C(j,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:S(`div`,{children:[C(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),C(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),C(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),C(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:S(`div`,{className:`space-y-3`,children:[C(F,{label:`9:41`}),S(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[C(`div`,{className:`text-sm font-medium`,children:`Today`}),C(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),C(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});h(()=>u(e,s,se))});let ce=g(`rue:component:anchor`);e(s,ce),t(()=>{let e=m(N,{title:`iPhone mockup`,summary:`展示 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:v,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body items-start`,children:S(j,{"data-testid":`mockup-phone-basic`,children:[C(j.Camera,{}),C(j.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});h(()=>u(e,s,ce))});let le=g(`rue:component:anchor`);e(s,le),t(()=>{let e=m(N,{title:`With color and wallpaper`,summary:`基础壁纸示例 展示，同时说明 className 仍然是最高自由度的扩展入口。`,tab:b,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body items-start`,children:S(j,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[C(j.Camera,{}),C(j.Display,{children:C(`img`,{alt:`wallpaper`,src:M})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});h(()=>u(e,s,le))});let ue=g(`rue:component:anchor`);e(s,ue),t(()=>{let e=m(N,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:x,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:re.map(e=>S(`div`,{className:`space-y-3 text-center`,children:[C(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),C(`div`,{className:`flex justify-center`,children:C(j,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:S(`div`,{children:[C(`div`,{className:`text-xs opacity-60`,children:e.size}),C(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue 示例`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});h(()=>u(e,s,ue))});let de=g(`rue:component:anchor`);e(s,de),t(()=>{let e=m(N,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:w,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[C(j,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:S(c,{children:[S(`div`,{className:`flex items-center justify-between`,children:[C(F,{label:`Recording`,tone:`bg-error/85 text-white`}),C(F,{label:`14m left`})]}),S(`div`,{children:[C(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),C(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),C(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:C(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),C(j,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:S(`div`,{className:`space-y-3`,children:[S(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),C(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),S(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[C(`div`,{className:`text-sm font-medium`,children:`Notes`}),C(`div`,{className:`mt-1 text-xs opacity-70`,children:`保持 compound，同时用 display 简写快速搭状态屏。`})]}),S(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[C(`div`,{className:`text-sm font-medium`,children:`Next`}),C(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});h(()=>u(e,s,de))});let fe=g(`rue:component:anchor`);e(s,fe),t(()=>{let e=m(N,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[C(j,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:S(`div`,{children:[S(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),C(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),C(j,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:S(`div`,{className:`space-y-3`,children:[C(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),C(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});h(()=>u(e,s,fe))});let pe=g(`rue:component:anchor`);e(s,pe),t(()=>{let e=m(N,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[C(`div`,{className:`flex justify-center`,children:C(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:S(`div`,{className:`grid gap-3`,children:[S(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),C(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),C(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),S(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[C(`div`,{className:`text-sm font-medium`,children:`Next up`}),C(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),C(`div`,{className:`flex justify-center`,children:C(j,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:S(`div`,{className:`flex h-full flex-col justify-between`,children:[S(`div`,{children:[C(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),C(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),S(`div`,{className:`grid grid-cols-3 gap-3`,children:[C(I,{label:`Mail`,className:`bg-sky-500 text-white`}),C(I,{label:`AI`,className:`bg-fuchsia-500 text-white`}),C(I,{label:`Cam`,className:`bg-emerald-500 text-white`}),C(I,{label:`Map`,className:`bg-amber-400 text-slate-950`}),C(I,{label:`Docs`,className:`bg-white text-slate-950`}),C(I,{label:`Pay`,className:`bg-rose-500 text-white`})]}),C(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});h(()=>u(e,s,pe))});let R=p(`h2`,s);e(s,R),a(R,`id`,`mockup-phone-api`),e(R,o(`API`));let z=p(`p`,s);e(s,z),e(z,o(`MockupPhone 现在支持“根级简写模式”和“组合 compound 模式”两套写法。`));let B=p(`h3`,s);e(s,B),e(B,o(`MockupPhone`));let me=g(`rue:component:anchor`);e(s,me),t(()=>{let e=m(P,{rows:te});h(()=>u(e,s,me))});let V=p(`h3`,s);e(s,V),f(V,`mt-6`),e(V,o(`Compound Parts`));let he=g(`rue:component:anchor`);e(s,he),t(()=>{let e=m(P,{rows:ne});h(()=>u(e,s,he))});let H=p(`div`,s);e(s,H),f(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let U=p(`h3`,H);e(H,U),f(U,`mt-0 mb-3 text-base font-semibold`),e(U,o(`display 对象结构`));let W=p(`div`,H);e(H,W),f(W,`grid gap-2 text-sm md:grid-cols-2`);let G=p(`div`,W);e(W,G);let ge=p(`code`,G);e(G,ge),e(ge,o(`className`)),e(G,o(`：显示区根节点类名`));let K=p(`div`,W);e(W,K);let _e=p(`code`,K);e(K,_e),e(_e,o(`src`)),e(K,o(`/`));let ve=p(`code`,K);e(K,ve),e(ve,o(`alt`)),e(K,o(`/`));let ye=p(`code`,K);e(K,ye),e(ye,o(`imgClassName`)),e(K,o(`：内置壁纸图`));let q=p(`div`,W);e(W,q);let be=p(`code`,q);e(q,be),e(be,o(`children`)),e(q,o(`：显示区内容`));let J=p(`div`,W);e(W,J);let xe=p(`code`,J);e(J,xe),e(xe,o(`contentClassName`)),e(J,o(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Se=p(`h2`,s);e(s,Se),e(Se,o(`FAQ`));let Ce=p(`h3`,s);e(s,Ce),e(Ce,o(`什么时候用 display，什么时候可以写 MockupPhone.Display？`));let Y=p(`p`,s);e(s,Y),e(Y,o(`如果只是想快速搭一个手机画面，优先用`));let we=p(`code`,Y);e(Y,we),e(we,o(`display`)),e(Y,o(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用基础示例，可以用`));let Te=p(`code`,Y);e(Y,Te),e(Te,o(`MockupPhone.Camera`)),e(Y,o(`和`));let Ee=p(`code`,Y);e(Y,Ee),e(Ee,o(`MockupPhone.Display`)),e(Y,o(`会更直观。`));let De=p(`h3`,s);e(s,De),e(De,o(`color 和 className 应该怎么选？`));let X=p(`p`,s);e(s,X);let Oe=p(`code`,X);e(X,Oe),e(Oe,o(`color`)),e(X,o(`负责常用边框主题色，适合快速选主色；`));let ke=p(`code`,X);e(X,ke),e(ke,o(`className`));let Z=r(X);e(X,Z),i(Z,` `),e(X,o(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let Ae=p(`h3`,s);e(s,Ae),e(Ae,o(`如何在壁纸上叠加浮层内容？`));let Q=p(`p`,s);e(s,Q),e(Q,o(`让`));let je=p(`code`,Q);e(Q,je),e(je,o(`display.className`)),e(Q,o(`具备`));let Me=p(`code`,Q);e(Q,Me),e(Me,o(`relative`)),e(Q,o(`和`));let Ne=r(Q);e(Q,Ne),i(Ne,` `);let Pe=p(`code`,Q);e(Q,Pe),e(Pe,o(`overflow-hidden`)),e(Q,o(`，再把浮层内容放进`));let Fe=p(`code`,Q);e(Q,Fe),e(Fe,o(`children`)),e(Q,o(`，通过`));let Ie=p(`code`,Q);e(Q,Ie),e(Ie,o(`contentClassName`)),e(Q,o(`设置`));let Le=r(Q);e(Q,Le),i(Le,` `);let $=p(`code`,Q);return e(Q,$),e($,o(`absolute inset-0`)),e(Q,o(`即可。`)),n})}),d,y),d})};export{L as default};