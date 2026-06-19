import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,gt as s,ht as c,l,lt as u,nt as d,o as f,p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x,i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./Code-BIscIyEp.js";import{t as w}from"./tabs-CZWMQq5i.js";import{r as T}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as ee}from"./preview-test-gate-DumhDfV7.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},O=e=>{if(!(!e||e===`default`))return`border-${e}`},k=e=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:d,rest:p}=y(`useSetup:0:0`,()=>a(()=>{let{className:t,children:n,...r}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,rest:r}}));return l(a=>{let c=o(`div`,a);n(()=>{s(c,p)}),n(()=>{u(c,E(`mockup-phone-camera`,e.className))});let l=t(`rue:children:anchor`);return i(c,l),n(()=>{let t=e.children;r(()=>f(t,c,l))}),c})},A=e=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:d,rest:p}=y(`useSetup:0:0:dup1`,()=>a(()=>{let{className:t,children:n,...r}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,rest:r}}));return l(a=>{let c=o(`div`,a);n(()=>{s(c,p)}),n(()=>{u(c,E(`mockup-phone-display`,e.className))});let l=t(`rue:children:anchor`);return i(c,l),n(()=>{let t=e.children;r(()=>f(t,c,l))}),c})},j=Object.assign(c=>{let d=y(`useSetup:0:0:dup2`,()=>a(()=>{let{className:e,size:t,color:n,camera:r,display:i,children:a,...o}=c,s=`mockup-phone`,l=y(`computed:1:0`,()=>_(()=>D(c.size))),u=l,d=y(`computed:1:1`,()=>_(()=>O(c.color))),f=d;return u.get()&&(s+=` ${u.get()}`),f.get()&&(s+=` ${f.get()}`),c.className&&(s+=` ${c.className}`),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,rest:o,sizeClass:l,toneClass:d,showCamera:y(`computed:1:2`,()=>_(()=>c.camera!==!1)),cameraProps:y(`computed:1:3`,()=>_(()=>typeof c.camera==`object`?c.camera:void 0)),displayAlt:c.display?.alt??`mockup phone wallpaper`,hasDisplayChildren:c.display?.children!=null,cls:s}})),{__rue_rest_omit_0:p,__rue_rest_omit_1:v,__rue_rest_omit_2:b,__rue_rest_omit_3:x,__rue_rest_omit_4:S,__rue_rest_omit_5:C,rest:w,sizeClass:T,toneClass:ee,showCamera:E,cameraProps:j,displayAlt:M,hasDisplayChildren:N}=d,{cls:P}=d;return l(a=>{let d=o(`div`,a);n(()=>{s(d,w)}),n(()=>{u(d,P)});let p=t(`rue:slot:anchor`);return i(d,p),n(()=>{let a=c.display?l(()=>{let a=e();i(a,g(` `));let s=t(`rue:slot:anchor`);i(a,s),n(()=>{let o=E.get()?l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=h(k,{...j.get()});r(()=>f(e,a,o))}),a}):``;r(()=>f(o,a,s))}),i(a,g(` `));let d=t(`rue:component:anchor`);i(a,d);let p=l(()=>{let a=e(),s=t(`rue:slot:anchor`);i(a,s),n(()=>{let t=c.display.src?l(()=>{let t=e(),r=o(`img`,t);return i(t,r),n(()=>{m(r,`alt`,String(M))}),n(()=>{m(r,`src`,String(c.display.src))}),n(()=>{u(r,c.display.imgClassName)}),t}):``;r(()=>f(t,a,s))}),i(a,g(` `));let d=t(`rue:slot:anchor`);return i(a,d),n(()=>{let s=N?c.display.contentClassName?l(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{u(s,c.display.contentClassName)});let l=t(`rue:children:anchor`);return i(s,l),n(()=>{let e=c.display.children;r(()=>f(e,s,l))}),a}):c.display.children:``;r(()=>f(s,a,d))}),a});return n(()=>{let e=h(A,{className:c.display.className,children:p});r(()=>f(e,a,d))}),i(a,g(` `)),a}):c.children;r(()=>f(a,d,p))}),d})},{Camera:k,Display:A}),M=`https://img.daisyui.com/images/stock/453966.webp?1`,N=a=>l(s=>{let c=o(`div`,s);u(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=o(`div`,c);i(c,d),u(d,`flex flex-wrap items-start justify-between gap-3`);let p=o(`div`,d);i(d,p);let m=o(`h2`,p);i(p,m),u(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,g(`# `));let _=t(`rue:slot:anchor`);i(m,_),n(()=>{let e=a.title;r(()=>f(e,m,_))});let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let s=a.summary?l(()=>{let s=e(),c=o(`p`,s);i(s,c),u(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>f(e,c,l))}),s}):``;r(()=>f(s,p,v))});let y=t(`rue:component:anchor`);i(c,y),n(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,c,y))});let b=t(`rue:slot:anchor`);return i(c,b),n(()=>{let o=a.tab.value===`preview`?ee(a.title,a.preview):l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>f(e,o,s))}),o});r(()=>f(o,c,b))}),c}),P=a=>l(s=>{let c=o(`div`,s);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=o(`table`,c);i(c,d),u(d,`table table-zebra`);let p=o(`thead`,d);i(d,p);let h=o(`tr`,p);i(p,h);let _=o(`th`,h);i(h,_),i(_,g(`属性`));let v=o(`th`,h);i(h,v),i(v,g(`说明`));let y=o(`th`,h);i(h,y),i(y,g(`类型`));let x=o(`th`,h);i(h,x),i(x,g(`默认值`));let S=o(`tbody`,d);i(d,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,c,u,d)=>{f(l(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{m(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>f(e,u,d))});let p=o(`td`,c);i(c,p);let h=t(`rue:slot:anchor`);i(p,h),n(()=>{let e=a.description;r(()=>f(e,p,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>f(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>f(e,b,x))}),s}),s,c)}})}),c}),F=e=>l(a=>{let s=o(`span`,a);n(()=>{u(s,`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${e.tone??`bg-white/10 text-white/85`}`)});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let t=e.label;r(()=>f(t,s,c))}),s}),I=e=>l(a=>{let s=o(`div`,a);u(s,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let c=o(`div`,s);i(s,c),n(()=>{u(c,`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${e.className}`)});let l=t(`rue:slot:anchor`);i(c,l),n(()=>{let t=e.label;r(()=>f(t,c,l))});let d=o(`span`,s);i(s,d);let p=t(`rue:slot:anchor`);return i(d,p),n(()=>{let t=e.label;r(()=>f(t,d,p))}),s}),te=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`经典 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],ne=[{prop:`MockupPhone.Camera`,description:`摄像头部件，保留原始结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],re=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],L=()=>{let{tabRecommended:s,tabBasic:_,tabWallpaper:b,tabSizes:C,tabLayouts:w,tabCamera:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>a(()=>({tabRecommended:y(`ref:1:0`,()=>v(`preview`)),tabBasic:y(`ref:1:1`,()=>v(`preview`)),tabWallpaper:y(`ref:1:2`,()=>v(`preview`)),tabSizes:y(`ref:1:3`,()=>v(`preview`)),tabLayouts:y(`ref:1:4`,()=>v(`preview`)),tabCamera:y(`ref:1:5`,()=>v(`preview`)),tabRecipes:y(`ref:1:6`,()=>v(`preview`))})));return l(a=>{let v=e(),y=t(`rue:component:anchor`);return i(v,y),f(h(T,{children:l(()=>{let a=e(),l=o(`div`,a);i(a,l),u(l,`max-w-none prose prose-sm md:prose-base`);let v=o(`h1`,l);i(l,v),i(v,g(`Mockup Phone 手机外框`));let y=o(`p`,l);i(l,y),u(y,`text-sm mt-3 mb-3`),i(y,g(`MockupPhone 继续保留 Rue 原本的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let T=o(`code`,y);i(y,T),i(T,g(`display`)),i(y,g(`、`));let D=o(`code`,y);i(y,D),i(D,g(`size`)),i(y,g(`、`));let O=o(`code`,y);i(y,O),i(O,g(`color`)),i(y,g(`和`));let k=o(`code`,y);i(y,k),i(k,g(`camera`)),i(y,g(`，在快速搭 demo 时不用每次都手写完整骨架。`));let A=o(`h2`,l);i(l,A),i(A,g(`何时使用`));let L=o(`ul`,l);i(l,L);let ie=o(`li`,L);i(L,ie),i(ie,g(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let ae=o(`li`,L);i(L,ae),i(ae,g(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let oe=o(`li`,L);i(L,oe),i(oe,g(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let se=t(`rue:component:anchor`);i(l,se),n(()=>{let e=h(N,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:s,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:x(`div`,{children:[S(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),S(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),S(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),S(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:x(`div`,{className:`space-y-3`,children:[S(F,{label:`9:41`}),x(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[S(`div`,{className:`text-sm font-medium`,children:`Today`}),S(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),S(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});r(()=>f(e,l,se))});let ce=t(`rue:component:anchor`);i(l,ce),n(()=>{let e=h(N,{title:`iPhone mockup`,summary:`保留原来的 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:_,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body items-start`,children:x(j,{"data-testid":`mockup-phone-basic`,children:[S(j.Camera,{}),S(j.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});r(()=>f(e,l,ce))});let le=t(`rue:component:anchor`);i(l,le),n(()=>{let e=h(N,{title:`With color and wallpaper`,summary:`原有壁纸 demo 继续保留，同时说明 className 仍然是最高自由度的扩展入口。`,tab:b,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body items-start`,children:x(j,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[S(j.Camera,{}),S(j.Display,{children:S(`img`,{alt:`wallpaper`,src:M})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});r(()=>f(e,l,le))});let ue=t(`rue:component:anchor`);i(l,ue),n(()=>{let e=h(N,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:C,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:re.map(e=>x(`div`,{className:`space-y-3 text-center`,children:[S(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),S(`div`,{className:`flex justify-center`,children:S(j,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:x(`div`,{children:[S(`div`,{className:`text-xs opacity-60`,children:e.size}),S(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue Demo`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});r(()=>f(e,l,ue))});let de=t(`rue:component:anchor`);i(l,de),n(()=>{let e=h(N,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:w,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:x(p,{children:[x(`div`,{className:`flex items-center justify-between`,children:[S(F,{label:`Recording`,tone:`bg-error/85 text-white`}),S(F,{label:`14m left`})]}),x(`div`,{children:[S(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),S(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),S(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:S(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),S(j,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:x(`div`,{className:`space-y-3`,children:[x(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),S(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),x(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Notes`}),S(`div`,{className:`mt-1 text-xs opacity-70`,children:`保留 compound，同时用 display 简写快速搭状态屏。`})]}),x(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Next`}),S(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});r(()=>f(e,l,de))});let fe=t(`rue:component:anchor`);i(l,fe),n(()=>{let e=h(N,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:x(`div`,{children:[x(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),S(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),S(j,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:x(`div`,{className:`space-y-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),S(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});r(()=>f(e,l,fe))});let pe=t(`rue:component:anchor`);i(l,pe),n(()=>{let e=h(N,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[S(`div`,{className:`flex justify-center`,children:S(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:x(`div`,{className:`grid gap-3`,children:[x(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),S(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),S(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),x(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[S(`div`,{className:`text-sm font-medium`,children:`Next up`}),S(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),S(`div`,{className:`flex justify-center`,children:S(j,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:x(`div`,{className:`flex h-full flex-col justify-between`,children:[x(`div`,{children:[S(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),S(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),x(`div`,{className:`grid grid-cols-3 gap-3`,children:[S(I,{label:`Mail`,className:`bg-sky-500 text-white`}),S(I,{label:`AI`,className:`bg-fuchsia-500 text-white`}),S(I,{label:`Cam`,className:`bg-emerald-500 text-white`}),S(I,{label:`Map`,className:`bg-amber-400 text-slate-950`}),S(I,{label:`Docs`,className:`bg-white text-slate-950`}),S(I,{label:`Pay`,className:`bg-rose-500 text-white`})]}),S(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});r(()=>f(e,l,pe))});let R=o(`h2`,l);i(l,R),m(R,`id`,`mockup-phone-api`),i(R,g(`API`));let z=o(`p`,l);i(l,z),i(z,g(`MockupPhone 现在支持“根级简写模式”和“经典 compound 模式”两套写法。`));let B=o(`h3`,l);i(l,B),i(B,g(`MockupPhone`));let me=t(`rue:component:anchor`);i(l,me),n(()=>{let e=h(P,{rows:te});r(()=>f(e,l,me))});let V=o(`h3`,l);i(l,V),u(V,`mt-6`),i(V,g(`Compound Parts`));let he=t(`rue:component:anchor`);i(l,he),n(()=>{let e=h(P,{rows:ne});r(()=>f(e,l,he))});let H=o(`div`,l);i(l,H),u(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let U=o(`h3`,H);i(H,U),u(U,`mt-0 mb-3 text-base font-semibold`),i(U,g(`display 对象结构`));let W=o(`div`,H);i(H,W),u(W,`grid gap-2 text-sm md:grid-cols-2`);let G=o(`div`,W);i(W,G);let ge=o(`code`,G);i(G,ge),i(ge,g(`className`)),i(G,g(`：显示区根节点类名`));let K=o(`div`,W);i(W,K);let _e=o(`code`,K);i(K,_e),i(_e,g(`src`)),i(K,g(`/`));let ve=o(`code`,K);i(K,ve),i(ve,g(`alt`)),i(K,g(`/`));let ye=o(`code`,K);i(K,ye),i(ye,g(`imgClassName`)),i(K,g(`：内置壁纸图`));let q=o(`div`,W);i(W,q);let be=o(`code`,q);i(q,be),i(be,g(`children`)),i(q,g(`：显示区内容`));let J=o(`div`,W);i(W,J);let xe=o(`code`,J);i(J,xe),i(xe,g(`contentClassName`)),i(J,g(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Se=o(`h2`,l);i(l,Se),i(Se,g(`FAQ`));let Ce=o(`h3`,l);i(l,Ce),i(Ce,g(`什么时候用 display，什么时候继续写 MockupPhone.Display？`));let Y=o(`p`,l);i(l,Y),i(Y,g(`如果只是想快速搭一个手机画面，优先用`));let we=o(`code`,Y);i(Y,we),i(we,g(`display`)),i(Y,g(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用旧 demo，继续用`));let Te=o(`code`,Y);i(Y,Te),i(Te,g(`MockupPhone.Camera`)),i(Y,g(`和`));let Ee=o(`code`,Y);i(Y,Ee),i(Ee,g(`MockupPhone.Display`)),i(Y,g(`会更直观。`));let De=o(`h3`,l);i(l,De),i(De,g(`color 和 className 应该怎么选？`));let X=o(`p`,l);i(l,X);let Oe=o(`code`,X);i(X,Oe),i(Oe,g(`color`)),i(X,g(`负责常用边框主题色，适合快速选主色；`));let ke=o(`code`,X);i(X,ke),i(ke,g(`className`));let Z=d(X);i(X,Z),c(Z,` `),i(X,g(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let Ae=o(`h3`,l);i(l,Ae),i(Ae,g(`如何在壁纸上叠加浮层内容？`));let Q=o(`p`,l);i(l,Q),i(Q,g(`让`));let je=o(`code`,Q);i(Q,je),i(je,g(`display.className`)),i(Q,g(`具备`));let Me=o(`code`,Q);i(Q,Me),i(Me,g(`relative`)),i(Q,g(`和`));let Ne=d(Q);i(Q,Ne),c(Ne,` `);let Pe=o(`code`,Q);i(Q,Pe),i(Pe,g(`overflow-hidden`)),i(Q,g(`，再把浮层内容放进`));let Fe=o(`code`,Q);i(Q,Fe),i(Fe,g(`children`)),i(Q,g(`，通过`));let Ie=o(`code`,Q);i(Q,Ie),i(Ie,g(`contentClassName`)),i(Q,g(`设置`));let Le=d(Q);i(Q,Le),c(Le,` `);let $=o(`code`,Q);return i(Q,$),i($,g(`absolute inset-0`)),i(Q,g(`即可。`)),a})}),v,y),v})};export{L as default};