import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,in as o,it as s,l as c,lt as l,m as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,yt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as x,i as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as C}from"./Code-4SUSUwRg.js";import{t as w}from"./tabs-Duzh3URW.js";import{r as T}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as ee}from"./preview-test-gate-nDDBbirJ.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>{switch(e){case`xs`:return`w-52`;case`sm`:case`small`:return`w-60`;case`md`:case`medium`:case`middle`:return`w-72`;case`lg`:case`large`:return`w-80`;case`xl`:return`w-96`;default:return}},O=e=>{if(!(!e||e===`default`))return`border-${e}`},k=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,rest:l}=y(`useSetup:0:0`,()=>o(()=>{let{className:e,children:n,...r}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,rest:r}}));return c(r=>{let o=d(`div`,r);v(()=>{_(o,l)}),v(()=>{i(o,E(`mockup-phone-camera`,t.className))});let s=a(`rue:children:anchor`);return n(o,s),v(()=>{let n=t.children;e(()=>f(n,o,s))}),o})},A=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,rest:l}=y(`useSetup:0:0:dup1`,()=>o(()=>{let{className:e,children:n,...r}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,rest:r}}));return c(r=>{let o=d(`div`,r);v(()=>{_(o,l)}),v(()=>{i(o,E(`mockup-phone-display`,t.className))});let s=a(`rue:children:anchor`);return n(o,s),v(()=>{let n=t.children;e(()=>f(n,o,s))}),o})},j=Object.assign(t=>{let s=y(`useSetup:0:0:dup2`,()=>o(()=>{let{className:e,size:n,color:i,camera:a,display:o,children:s,...c}=t,l=`mockup-phone`,u=y(`computed:1:0`,()=>r(()=>D(t.size))),d=u,f=y(`computed:1:1`,()=>r(()=>O(t.color))),p=f;return d.get()&&(l+=` ${d.get()}`),p.get()&&(l+=` ${p.get()}`),t.className&&(l+=` ${t.className}`),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,rest:c,sizeClass:u,toneClass:f,showCamera:y(`computed:1:2`,()=>r(()=>t.camera!==!1)),cameraProps:y(`computed:1:3`,()=>r(()=>typeof t.camera==`object`?t.camera:void 0)),displayAlt:t.display?.alt??`mockup phone wallpaper`,hasDisplayChildren:t.display?.children!=null,cls:l}})),{__rue_rest_omit_0:u,__rue_rest_omit_1:g,__rue_rest_omit_2:b,__rue_rest_omit_3:x,__rue_rest_omit_4:S,__rue_rest_omit_5:C,rest:w,sizeClass:T,toneClass:ee,showCamera:E,cameraProps:j,displayAlt:M,hasDisplayChildren:N}=s,{cls:P}=s;return c(r=>{let o=d(`div`,r);v(()=>{_(o,w)}),v(()=>{i(o,P)});let s=a(`rue:slot:anchor`);return n(o,s),v(()=>{let r=t.display?c(()=>{let r=h();n(r,p(` `));let o=a(`rue:slot:anchor`);n(r,o),v(()=>{let t=E.get()?c(()=>{let t=h(),r=a(`rue:component:anchor`);return n(t,r),v(()=>{let n=m(k,{...j.get()});e(()=>f(n,t,r))}),t}):``;e(()=>f(t,r,o))}),n(r,p(` `));let s=a(`rue:component:anchor`);n(r,s);let u=c(()=>{let r=h(),o=a(`rue:slot:anchor`);n(r,o),v(()=>{let a=t.display.src?c(()=>{let e=h(),r=d(`img`,e);return n(e,r),v(()=>{l(r,`alt`,String(M))}),v(()=>{l(r,`src`,String(t.display.src))}),v(()=>{i(r,t.display.imgClassName)}),e}):``;e(()=>f(a,r,o))}),n(r,p(` `));let s=a(`rue:slot:anchor`);return n(r,s),v(()=>{let o=N?t.display.contentClassName?c(()=>{let r=h(),o=d(`div`,r);n(r,o),v(()=>{i(o,t.display.contentClassName)});let s=a(`rue:children:anchor`);return n(o,s),v(()=>{let n=t.display.children;e(()=>f(n,o,s))}),r}):t.display.children:``;e(()=>f(o,r,s))}),r});return v(()=>{let n=m(A,{className:t.display.className,children:u});e(()=>f(n,r,s))}),n(r,p(` `)),r}):t.children;e(()=>f(r,o,s))}),o})},{Camera:k,Display:A}),M=`https://img.daisyui.com/images/stock/453966.webp?1`,N=t=>c(r=>{let o=d(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=d(`div`,o);n(o,s),i(s,`flex flex-wrap items-start justify-between gap-3`);let l=d(`div`,s);n(s,l);let u=d(`h2`,l);n(l,u),i(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(u,p(`# `));let g=a(`rue:slot:anchor`);n(u,g),v(()=>{let n=t.title;e(()=>f(n,u,g))});let _=a(`rue:slot:anchor`);n(l,_),v(()=>{let r=t.summary?c(()=>{let r=h(),o=d(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),v(()=>{let n=t.summary;e(()=>f(n,o,s))}),r}):``;e(()=>f(r,l,_))});let y=a(`rue:component:anchor`);n(o,y),v(()=>{let n=m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>f(n,o,y))});let b=a(`rue:slot:anchor`);return n(o,b),v(()=>{let r=t.tab.value===`preview`?ee(t.title,t.preview):c(()=>{let r=h(),i=a(`rue:component:anchor`);return n(r,i),v(()=>{let n=m(C,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>f(n,r,i))}),r});e(()=>f(r,o,b))}),o}),P=t=>c(r=>{let o=d(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=d(`table`,o);n(o,s),i(s,`table table-zebra`);let u=d(`thead`,s);n(s,u);let m=d(`tr`,u);n(u,m);let g=d(`th`,m);n(m,g),n(g,p(`属性`));let _=d(`th`,m);n(m,_),n(_,p(`说明`));let y=d(`th`,m);n(m,y),n(y,p(`类型`));let x=d(`th`,m);n(m,x),n(x,p(`默认值`));let S=d(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return v(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{f(c(()=>{let r=h(),i=d(`tr`,r);n(r,i),v(()=>{l(i,`key`,String(t.prop))});let o=d(`td`,i);n(i,o);let s=d(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.prop;e(()=>f(n,s,c))});let u=d(`td`,i);n(i,u);let p=a(`rue:slot:anchor`);n(u,p),v(()=>{let n=t.description;e(()=>f(n,u,p))});let m=d(`td`,i);n(i,m);let g=d(`code`,m);n(m,g);let _=a(`rue:slot:anchor`);n(g,_),v(()=>{let n=t.type;e(()=>f(n,g,_))});let y=d(`td`,i);n(i,y);let b=d(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),v(()=>{let n=t.defaultValue;e(()=>f(n,b,x))}),r}),r,i)}})}),o}),F=t=>c(r=>{let o=d(`span`,r);v(()=>{i(o,`rounded-full px-2 py-1 text-[0.65rem] font-medium backdrop-blur ${t.tone??`bg-white/10 text-white/85`}`)});let s=a(`rue:slot:anchor`);return n(o,s),v(()=>{let n=t.label;e(()=>f(n,o,s))}),o}),I=t=>c(r=>{let o=d(`div`,r);i(o,`flex flex-col items-center gap-2 text-center text-[0.65rem] text-white/80`);let s=d(`div`,o);n(o,s),v(()=>{i(s,`grid h-11 w-11 place-items-center rounded-2xl text-sm font-semibold shadow-sm ${t.className}`)});let c=a(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.label;e(()=>f(n,s,c))});let l=d(`span`,o);n(o,l);let u=a(`rue:slot:anchor`);return n(l,u),v(()=>{let n=t.label;e(()=>f(n,l,u))}),o}),te=[{prop:`className`,description:`追加到手机外框根节点，适合细调边框、阴影、定位等样式`,type:`string`,defaultValue:`-`},{prop:`size`,description:`机身宽度预设，提供 xs 到 xl 以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`边框主色快捷语义，映射到 border-* 类名`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`camera`,description:`仅在 display 简写模式下生效；可关闭摄像头，或透传 className / attrs 给摄像头节点`,type:`boolean | MockupPhoneCameraConfig`,defaultValue:`true`},{prop:`display`,description:`根级简写模式：直接声明屏幕内容、壁纸、覆盖层与显示区类名`,type:`MockupPhoneDisplayConfig`,defaultValue:`-`},{prop:`children`,description:`组合 compound 模式内容，通常与 MockupPhone.Camera / Display 搭配使用`,type:`any`,defaultValue:`-`}],ne=[{prop:`MockupPhone.Camera`,description:`摄像头部件，展示基础结构，可自定义 className 和 attrs`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`},{prop:`MockupPhone.Display`,description:`显示区部件，适合完全自定义屏幕内部 DOM 结构`,type:`FC<MockupPhonePartProps>`,defaultValue:`-`}],re=[{label:`XS`,size:`xs`},{label:`SM`,size:`sm`,color:`primary`},{label:`MD`,size:`md`,color:`secondary`},{label:`LG`,size:`lg`,color:`accent`}],L=()=>{let{tabRecommended:r,tabBasic:_,tabWallpaper:b,tabSizes:C,tabLayouts:w,tabCamera:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>o(()=>({tabRecommended:y(`ref:1:0`,()=>t(`preview`)),tabBasic:y(`ref:1:1`,()=>t(`preview`)),tabWallpaper:y(`ref:1:2`,()=>t(`preview`)),tabSizes:y(`ref:1:3`,()=>t(`preview`)),tabLayouts:y(`ref:1:4`,()=>t(`preview`)),tabCamera:y(`ref:1:5`,()=>t(`preview`)),tabRecipes:y(`ref:1:6`,()=>t(`preview`))})));return c(t=>{let o=h(),y=a(`rue:component:anchor`);return n(o,y),f(m(T,{children:c(()=>{let t=h(),o=d(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let c=d(`h1`,o);n(o,c),n(c,p(`Mockup Phone 手机外框`));let y=d(`p`,o);n(o,y),i(y,`text-sm mt-3 mb-3`),n(y,p(`MockupPhone 可以使用 Rue 基础的 compound 结构，同时补上一层更顺手的根级 API：可以直接声明`));let T=d(`code`,y);n(y,T),n(T,p(`display`)),n(y,p(`、`));let D=d(`code`,y);n(y,D),n(D,p(`size`)),n(y,p(`、`));let O=d(`code`,y);n(y,O),n(O,p(`color`)),n(y,p(`和`));let k=d(`code`,y);n(y,k),n(k,p(`camera`)),n(y,p(`，在快速搭示例 时不用每次都手写完整骨架。`));let A=d(`h2`,o);n(o,A),n(A,p(`何时使用`));let L=d(`ul`,o);n(o,L);let ie=d(`li`,L);n(L,ie),n(ie,p(`需要在设计页、营销页或功能介绍页展示移动端界面，而不想自己维护手机边框结构。`));let ae=d(`li`,L);n(L,ae),n(ae,p(`需要在“快速搭一个手机画面”和“完全自定义显示区 DOM”之间自由切换。`));let oe=d(`li`,L);n(L,oe),n(oe,p(`需要统一控制机身尺寸、边框主色、摄像头显隐和屏幕内容布局。`));let se=a(`rue:component:anchor`);n(o,se),v(()=>{let t=m(N,{title:`推荐写法`,summary:`display 简写模式适合绝大多数展示型场景，根节点上就能把机身、摄像头和屏幕内容一次性声明完。`,tab:r,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,color:`primary`,"data-testid":`mockup-phone-recommended`,display:{className:`bg-neutral-950 text-white grid place-content-center px-6 text-center`,children:x(`div`,{children:[S(`div`,{className:`text-xs uppercase tracking-[0.3em] text-white/50`,children:`Rue OS`}),S(`div`,{className:`mt-3 text-2xl font-semibold`,children:`It's Glowtime.`}),S(`div`,{className:`mt-2 text-sm text-white/65`,children:`根级 display API`})]})}}),S(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:x(`div`,{className:`space-y-3`,children:[S(F,{label:`9:41`}),x(`div`,{className:`rounded-2xl bg-black/30 p-4 shadow-lg ring-1 ring-white/10`,children:[S(`div`,{className:`text-sm font-medium`,children:`Today`}),S(`div`,{className:`mt-1 text-2xl font-semibold`,children:`3 meetings`}),S(`div`,{className:`mt-2 text-xs text-white/70`,children:`Design sync, API review, launch checklist`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-between p-4 text-white`}})]})}),code:`<MockupPhone
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
/>`});e(()=>f(t,o,se))});let ce=a(`rue:component:anchor`);n(o,ce),v(()=>{let t=m(N,{title:`iPhone mockup`,summary:`展示 compound 写法，适合你想显式控制摄像头和显示区结构的时候。`,tab:_,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body items-start`,children:x(j,{"data-testid":`mockup-phone-basic`,children:[S(j.Camera,{}),S(j.Display,{className:`text-white bg-neutral-900 grid place-content-center`,children:`It's Glowtime.`})]})})}),code:`<MockupPhone>
  <MockupPhone.Camera />
  <MockupPhone.Display className="text-white bg-neutral-900 grid place-content-center">
    It's Glowtime.
  </MockupPhone.Display>
</MockupPhone>`});e(()=>f(t,o,ce))});let le=a(`rue:component:anchor`);n(o,le),v(()=>{let t=m(N,{title:`With color and wallpaper`,summary:`基础壁纸示例 展示，同时说明 className 仍然是最高自由度的扩展入口。`,tab:b,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body items-start`,children:x(j,{className:`border-[#ff8938]`,"data-testid":`mockup-phone-wallpaper`,children:[S(j.Camera,{}),S(j.Display,{children:S(`img`,{alt:`wallpaper`,src:M})})]})})}),code:`<MockupPhone className="border-[#ff8938]">
  <MockupPhone.Camera />
  <MockupPhone.Display>
    <img alt="wallpaper" src={wallpaperUrl} />
  </MockupPhone.Display>
</MockupPhone>`});e(()=>f(t,o,le))});let ue=a(`rue:component:anchor`);n(o,ue),v(()=>{let t=m(N,{title:`尺寸与边框色`,summary:`size 控制机身宽度，color 负责常用边框主题色；如果需要更细粒度样式，继续追加 className 即可。`,tab:C,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body grid gap-6 lg:grid-cols-4`,children:re.map(e=>x(`div`,{className:`space-y-3 text-center`,children:[S(`div`,{className:`text-xs font-medium uppercase tracking-[0.25em] opacity-60`,children:e.label}),S(`div`,{className:`flex justify-center`,children:S(j,{size:e.size,color:e.color,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-4`,children:x(`div`,{children:[S(`div`,{className:`text-xs opacity-60`,children:e.size}),S(`div`,{className:`mt-2 text-sm font-semibold`,children:`Rue 示例`})]})}})})]},e.label))})}),code:`const phones = [
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
))}`});e(()=>f(t,o,ue))});let de=a(`rue:component:anchor`);n(o,de),v(()=>{let t=m(N,{title:`屏幕内容布局`,summary:`display.contentClassName 适合把文案、状态块和浮层叠加到壁纸或纯色背景之上。`,tab:w,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,color:`accent`,display:{className:`relative overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400`,children:x(u,{children:[x(`div`,{className:`flex items-center justify-between`,children:[S(F,{label:`Recording`,tone:`bg-error/85 text-white`}),S(F,{label:`14m left`})]}),x(`div`,{children:[S(`div`,{className:`text-sm text-white/75`,children:`Weekly launch`}),S(`div`,{className:`mt-2 text-3xl font-semibold`,children:`84%`}),S(`div`,{className:`mt-2 h-2 rounded-full bg-white/15`,children:S(`div`,{className:`h-full w-[84%] rounded-full bg-white`})})]})]}),contentClassName:`flex h-full flex-col justify-between p-5 text-white`}}),S(j,{size:`sm`,color:`success`,display:{className:`bg-base-100 p-4`,children:x(`div`,{className:`space-y-3`,children:[x(`div`,{className:`rounded-2xl bg-success/10 p-3 text-success`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.2em]`,children:`Focus`}),S(`div`,{className:`mt-1 text-lg font-semibold`,children:`2h 18m`})]}),x(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Notes`}),S(`div`,{className:`mt-1 text-xs opacity-70`,children:`保持 compound，同时用 display 简写快速搭状态屏。`})]}),x(`div`,{className:`rounded-2xl bg-base-200 p-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Next`}),S(`div`,{className:`mt-1 text-xs opacity-70`,children:`Ship Mockup Phone API`})]})]})}})]})}),code:`<MockupPhone
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
/>`});e(()=>f(t,o,de))});let fe=a(`rue:component:anchor`);n(o,fe),v(()=>{let t=m(N,{title:`摄像头控制`,summary:`camera 默认开启；当画面更偏卡片展示时可以关闭，或者通过对象写法补充类名和属性。`,tab:ee,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:items-start`,children:[S(j,{size:`sm`,camera:!1,display:{className:`grid place-content-center bg-base-200 text-base-content text-center px-6`,children:x(`div`,{children:[x(`div`,{className:`text-sm font-semibold`,children:[`camera=`,!1]}),S(`div`,{className:`mt-2 text-xs opacity-60`,children:`适合更像产品卡片的展示。`})]})}}),S(j,{size:`sm`,color:`primary`,camera:{className:`bg-primary/20 ring-2 ring-primary/40`},display:{className:`bg-neutral-950 text-white p-4`,children:x(`div`,{className:`space-y-3`,children:[S(`div`,{className:`text-sm font-medium`,children:`Custom camera`}),S(`div`,{className:`rounded-2xl bg-white/5 p-3 text-xs text-white/75`,children:`用对象写法继续给摄像头节点补 className 或测试属性。`})]})}})]})}),code:`<MockupPhone
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
/>`});e(()=>f(t,o,fe))});let pe=a(`rue:component:anchor`);n(o,pe),v(()=>{let t=m(N,{title:`场景组合`,summary:`当手机只是内容容器时，可以把它当成页面模块来组合；推荐把复杂 UI 放进 display.children。`,tab:E,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-8 xl:grid-cols-2`,children:[S(`div`,{className:`flex justify-center`,children:S(j,{size:`sm`,color:`secondary`,display:{className:`relative overflow-hidden bg-neutral-950`,src:M,children:x(`div`,{className:`grid gap-3`,children:[x(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.2em] text-white/60`,children:`Now Playing`}),S(`div`,{className:`mt-2 text-lg font-semibold`,children:`Midnight Route`}),S(`div`,{className:`text-sm text-white/70`,children:`Rue FM`})]}),x(`div`,{className:`rounded-2xl bg-black/35 p-3 ring-1 ring-white/10 backdrop-blur`,children:[S(`div`,{className:`text-sm font-medium`,children:`Next up`}),S(`div`,{className:`mt-1 text-xs text-white/70`,children:`3 new product updates`})]})]}),contentClassName:`absolute inset-0 flex flex-col justify-end p-4 text-white`}})}),S(`div`,{className:`flex justify-center`,children:S(j,{size:`sm`,color:`accent`,display:{className:`bg-slate-950 px-4 py-5`,children:x(`div`,{className:`flex h-full flex-col justify-between`,children:[x(`div`,{children:[S(`div`,{className:`text-sm font-medium text-white`,children:`Home`}),S(`div`,{className:`mt-1 text-xs text-white/55`,children:`6 apps pinned`})]}),x(`div`,{className:`grid grid-cols-3 gap-3`,children:[S(I,{label:`Mail`,className:`bg-sky-500 text-white`}),S(I,{label:`AI`,className:`bg-fuchsia-500 text-white`}),S(I,{label:`Cam`,className:`bg-emerald-500 text-white`}),S(I,{label:`Map`,className:`bg-amber-400 text-slate-950`}),S(I,{label:`Docs`,className:`bg-white text-slate-950`}),S(I,{label:`Pay`,className:`bg-rose-500 text-white`})]}),S(`div`,{className:`rounded-full bg-white/10 p-2 text-center text-xs text-white/70`,children:`Swipe up for more`})]})}})})]})}),code:`<MockupPhone
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
/>`});e(()=>f(t,o,pe))});let R=d(`h2`,o);n(o,R),l(R,`id`,`mockup-phone-api`),n(R,p(`API`));let z=d(`p`,o);n(o,z),n(z,p(`MockupPhone 现在支持“根级简写模式”和“组合 compound 模式”两套写法。`));let B=d(`h3`,o);n(o,B),n(B,p(`MockupPhone`));let me=a(`rue:component:anchor`);n(o,me),v(()=>{let t=m(P,{rows:te});e(()=>f(t,o,me))});let V=d(`h3`,o);n(o,V),i(V,`mt-6`),n(V,p(`Compound Parts`));let he=a(`rue:component:anchor`);n(o,he),v(()=>{let t=m(P,{rows:ne});e(()=>f(t,o,he))});let H=d(`div`,o);n(o,H),i(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let U=d(`h3`,H);n(H,U),i(U,`mt-0 mb-3 text-base font-semibold`),n(U,p(`display 对象结构`));let W=d(`div`,H);n(H,W),i(W,`grid gap-2 text-sm md:grid-cols-2`);let G=d(`div`,W);n(W,G);let ge=d(`code`,G);n(G,ge),n(ge,p(`className`)),n(G,p(`：显示区根节点类名`));let K=d(`div`,W);n(W,K);let _e=d(`code`,K);n(K,_e),n(_e,p(`src`)),n(K,p(`/`));let ve=d(`code`,K);n(K,ve),n(ve,p(`alt`)),n(K,p(`/`));let ye=d(`code`,K);n(K,ye),n(ye,p(`imgClassName`)),n(K,p(`：内置壁纸图`));let q=d(`div`,W);n(W,q);let be=d(`code`,q);n(q,be),n(be,p(`children`)),n(q,p(`：显示区内容`));let J=d(`div`,W);n(W,J);let xe=d(`code`,J);n(J,xe),n(xe,p(`contentClassName`)),n(J,p(`：为 children 额外包一层容器，便于做绝对定位和覆盖层`));let Se=d(`h2`,o);n(o,Se),n(Se,p(`FAQ`));let Ce=d(`h3`,o);n(o,Ce),n(Ce,p(`什么时候用 display，什么时候可以写 MockupPhone.Display？`));let Y=d(`p`,o);n(o,Y),n(Y,p(`如果只是想快速搭一个手机画面，优先用`));let we=d(`code`,Y);n(Y,we),n(we,p(`display`)),n(Y,p(`。如果你需要自己决定显示区里的完整节点树，或者已经在复用基础示例，可以用`));let Te=d(`code`,Y);n(Y,Te),n(Te,p(`MockupPhone.Camera`)),n(Y,p(`和`));let Ee=d(`code`,Y);n(Y,Ee),n(Ee,p(`MockupPhone.Display`)),n(Y,p(`会更直观。`));let De=d(`h3`,o);n(o,De),n(De,p(`color 和 className 应该怎么选？`));let X=d(`p`,o);n(o,X);let Oe=d(`code`,X);n(X,Oe),n(Oe,p(`color`)),n(X,p(`负责常用边框主题色，适合快速选主色；`));let ke=d(`code`,X);n(X,ke),n(ke,p(`className`));let Z=s(X);n(X,Z),g(Z,` `),n(X,p(`负责更细的样式控制，比如任意十六进制边框色、自定义阴影或缩放。`));let Ae=d(`h3`,o);n(o,Ae),n(Ae,p(`如何在壁纸上叠加浮层内容？`));let Q=d(`p`,o);n(o,Q),n(Q,p(`让`));let je=d(`code`,Q);n(Q,je),n(je,p(`display.className`)),n(Q,p(`具备`));let Me=d(`code`,Q);n(Q,Me),n(Me,p(`relative`)),n(Q,p(`和`));let Ne=s(Q);n(Q,Ne),g(Ne,` `);let Pe=d(`code`,Q);n(Q,Pe),n(Pe,p(`overflow-hidden`)),n(Q,p(`，再把浮层内容放进`));let Fe=d(`code`,Q);n(Q,Fe),n(Fe,p(`children`)),n(Q,p(`，通过`));let Ie=d(`code`,Q);n(Q,Ie),n(Ie,p(`contentClassName`)),n(Q,p(`设置`));let Le=s(Q);n(Q,Le),g(Le,` `);let $=d(`code`,Q);return n(Q,$),n($,p(`absolute inset-0`)),n(Q,p(`即可。`)),t})}),o,y),o})};export{L as default};