import{$ as e,G as t,H as n,K as r,W as i,_t as a,d as o,kt as s,l as c,q as l,t as u,tt as d,xt as f}from"./vapor-runtime-BAZOdMd8.js";import{a as p,n as m}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as h,t as g}from"./src-DZJ4J6sD.js";import{n as _}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as v}from"./Code-DY4Ua5uc.js";import{t as y}from"./button-BOkTxx3d.js";import{t as b}from"./tabs-Casd077O.js";import{t as x}from"./badge-7zWC8IcH.js";var S=(e,t)=>t?`${e} ${t}`:e,C=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>C(e)):!0,w=e=>e==null?`info`:`${e}`,T=e=>e===`403`||e===`404`||e===`500`,E=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,D=(e,t)=>{let n=``;return e===`soft`?n+=` bg-base-200/60 shadow-inner`:e===`outline`?n+=` bg-base-100/70 shadow-none`:n+=` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,e===`outline`?n+=` border-2 border-base-300/80`:t?n+=` border border-base-300/70`:n+=` border border-transparent`,n.trim()},O=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},k=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},A=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},j=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},M=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},N=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},P=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},F={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},I=({status:e,className:t})=>e===`success`?h(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:t,"data-rue-result-glyph":`success`,children:[g(`circle`,{cx:`12`,cy:`12`,r:`9`}),g(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m8.4 12.3 2.4 2.4 4.8-5.1`})]}):e===`warning`?h(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:t,"data-rue-result-glyph":`warning`,children:[g(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 4.5 20 18.5H4L12 4.5Z`}),g(`path`,{strokeLinecap:`round`,d:`M12 9.5v4.8`}),g(`circle`,{cx:`12`,cy:`16.9`,r:`0.9`,fill:`currentColor`,stroke:`none`})]}):e===`error`?h(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:t,"data-rue-result-glyph":`error`,children:[g(`circle`,{cx:`12`,cy:`12`,r:`9`}),g(`path`,{strokeLinecap:`round`,d:`m9 9 6 6M15 9l-6 6`})]}):h(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:t,"data-rue-result-glyph":`info`,children:[g(`circle`,{cx:`12`,cy:`12`,r:`9`}),g(`path`,{strokeLinecap:`round`,d:`M12 10.2v5.2`}),g(`circle`,{cx:`12`,cy:`7.4`,r:`0.9`,fill:`currentColor`,stroke:`none`})]}),L=({status:e,tone:t,className:n,style:r,size:i=`md`})=>{let a=F[e];return h(`div`,{className:S(`relative mx-auto w-full ${P(i)}`,n),style:r,"data-rue-result-illustration":e,children:[g(`div`,{"aria-hidden":`true`,className:`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${O(t)}`}),h(`div`,{className:`relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner`,children:[g(`div`,{"aria-hidden":`true`,className:`absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70`}),g(`div`,{"aria-hidden":`true`,className:`absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75`}),h(`div`,{className:`relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]`,children:[h(`div`,{className:`flex items-center justify-between gap-3`,children:[g(`span`,{className:`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${A(t)}`,children:a.label}),g(`span`,{className:`text-[0.68rem] uppercase tracking-[0.28em] opacity-50`,children:`Rue Result`})]}),h(`div`,{className:`mt-5 flex items-end justify-between gap-4`,children:[h(`div`,{className:`min-w-0`,children:[g(`div`,{className:`text-[4rem] font-black leading-none tracking-[-0.1em] ${k(t)}`,children:e}),g(`div`,{className:`mt-2 max-w-[13rem] text-xs leading-5 opacity-60`,children:a.scene})]}),g(`div`,{className:`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${A(t)}`,children:g(I,{status:t,className:`size-7`})})]})]})]})]})},R=(e,t,n)=>T(e)?g(L,{status:e,tone:t,size:n}):g(`div`,{className:`grid place-items-center border ${A(t)} ${N(n)}`,"data-rue-result-icon":`true`,children:g(I,{status:t,className:M(n)})}),z=Object.assign(({status:e=`info`,icon:t,title:n,subTitle:r,extra:i,children:a,variant:o=`surface`,size:s=`md`,align:c=`center`,showIcon:l=!0,bordered:u=!0,role:d=`status`,className:f,style:p,iconClassName:m,iconStyle:_,contentClassName:v,contentStyle:y,titleClassName:b,titleStyle:x,subTitleClassName:k,subTitleStyle:A,extraClassName:M,extraStyle:N,bodyClassName:P,bodyStyle:I,...L})=>{let z=w(e),B=E(z),V=T(z)?F[z]:void 0,H=n??V?.title,U=r??V?.subTitle,W=l===!1||t===null||t===!1,G=t!=null&&t!==!1?t:R(z,B,s),K=c===`start`?`items-start text-left`:`items-center text-center`,q=c===`start`?`items-start text-left`:`items-center text-center`,J=c===`start`?`justify-start`:`justify-center`,Y=C(a);return h(`section`,{role:d,className:S(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${c===`start`?`text-left`:`text-center`} ${D(o,u)}`,f),style:p,"data-rue-status":z,"data-rue-tone":B,...L,children:[g(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${O(B)}`}),h(`div`,{className:S(`relative flex w-full flex-col gap-5 ${K}`,v),style:y,children:[W?null:g(`div`,{className:m,style:_,"data-rue-result-icon-slot":`true`,children:G}),H!=null||U!=null?h(`div`,{className:`flex w-full max-w-3xl flex-col gap-2 ${q}`,children:[H==null?null:g(`div`,{className:S(`${j(s)} font-semibold leading-tight tracking-[-0.02em]`,b),style:x,children:H}),U==null?null:g(`div`,{className:S(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,k),style:A,children:U})]}):null,i==null?null:g(`div`,{className:S(`flex w-full flex-wrap gap-3 ${J}`,M),style:N,"data-rue-result-extra":`true`,children:i}),Y?g(`div`,{className:S(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,P),style:I,"data-rue-result-body":`true`,children:a}):null]})]})},{PRESENTED_IMAGE_403:e=>g(L,{...e,status:`403`,tone:`warning`}),PRESENTED_IMAGE_404:e=>g(L,{...e,status:`404`,tone:`info`}),PRESENTED_IMAGE_500:e=>g(L,{...e,status:`500`,tone:`error`})}),B=e=>o(a=>{let p=r(`div`,a);d(p,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=r(`div`,p);n(p,m),d(m,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,m);n(m,h);let g=r(`h2`,h);n(h,g),d(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,l(`# `));let _=i(`rue:slot:anchor`);n(g,_),s(()=>{let t=e.title;f(()=>c(t,g,_))});let y=i(`rue:slot:anchor`);n(h,y),s(()=>{let a=e.summary?o(()=>{let a=t(),o=r(`p`,a);n(a,o),d(o,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return n(o,l),s(()=>{let t=e.summary;f(()=>c(t,o,l))}),a}):``;f(()=>c(a,h,y))});let x=i(`rue:component:anchor`);n(p,x),s(()=>{let t=u(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});f(()=>c(t,p,x))});let S=i(`rue:slot:anchor`);return n(p,S),s(()=>{let r=e.tab.value===`preview`?e.preview():o(()=>{let r=t(),a=i(`rue:component:anchor`);return n(r,a),s(()=>{let t=u(v,{className:`mt-2`,lang:`tsx`,code:e.code});f(()=>c(t,r,a))}),r});f(()=>c(r,p,S))}),p}),V=a=>o(u=>{let p=r(`div`,u);d(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let h=r(`table`,p);n(p,h),d(h,`table table-zebra`);let g=r(`thead`,h);n(h,g);let _=r(`tr`,g);n(g,_);let v=r(`th`,_);n(_,v),n(v,l(`属性`));let y=r(`th`,_);n(_,y),n(y,l(`说明`));let b=r(`th`,_);n(_,b),n(b,l(`类型`));let x=r(`th`,_);n(_,x),n(x,l(`默认值`));let S=r(`tbody`,h);n(h,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return s(()=>{T=m({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,l,u,d,p)=>{c(o(()=>{let o=t(),l=r(`tr`,o);n(o,l),s(()=>{e(l,`key`,String(a.prop))});let u=r(`td`,l);n(l,u);let d=r(`code`,u);n(u,d);let p=i(`rue:slot:anchor`);n(d,p),s(()=>{let e=a.prop;f(()=>c(e,d,p))});let m=r(`td`,l);n(l,m);let h=i(`rue:slot:anchor`);n(m,h),s(()=>{let e=a.description;f(()=>c(e,m,h))});let g=r(`td`,l);n(l,g);let _=r(`code`,g);n(g,_);let v=i(`rue:slot:anchor`);n(_,v),s(()=>{let e=a.type;f(()=>c(e,_,v))});let y=r(`td`,l);n(l,y);let b=r(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),s(()=>{let e=a.defaultValue;f(()=>c(e,b,x))}),o}),l,u)}})}),p}),H=()=>o(t=>{let i=r(`svg`,t);e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`viewBox`,`0 0 24 24`),e(i,`fill`,`none`),e(i,`stroke`,`currentColor`),e(i,`strokeWidth`,`1.8`),d(i,`size-10`);let a=r(`path`,i);n(i,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let o=r(`path`,i);n(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M13.3 5.7 18.2 10.6`);let s=r(`path`,i);n(i,s),e(s,`strokeLinecap`,`round`),e(s,`strokeLinejoin`,`round`),e(s,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let c=r(`circle`,i);return n(i,c),e(c,`cx`,`14.6`),e(c,`cy`,`9.4`),e(c,`r`,`1.3`),i}),U=()=>o(t=>{let i=r(`svg`,t);e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`viewBox`,`0 0 24 24`),e(i,`fill`,`none`),e(i,`stroke`,`currentColor`),e(i,`strokeWidth`,`1.8`),d(i,`size-10`);let a=r(`circle`,i);n(i,a),e(a,`cx`,`12`),e(a,`cy`,`12`),e(a,`r`,`8.5`);let o=r(`path`,i);return n(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),i}),W=()=>o(t=>{let i=r(`svg`,t);e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`viewBox`,`0 0 24 24`),e(i,`fill`,`none`),e(i,`stroke`,`currentColor`),e(i,`strokeWidth`,`1.8`),d(i,`size-10`);let a=r(`path`,i);n(i,a),e(a,`strokeLinecap`,`round`),e(a,`strokeLinejoin`,`round`),e(a,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let o=r(`path`,i);n(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let s=r(`path`,i);return n(i,s),e(s,`strokeLinecap`,`round`),e(s,`strokeLinejoin`,`round`),e(s,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),i}),G=`const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.3 5.7 18.2 10.6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4" />
    <circle cx="14.6" cy="9.4" r="1.3" />
  </svg>
)`,K=`const CompassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <circle cx="12" cy="12" r="8.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z" />
  </svg>
)`,q=`const ShieldWaveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5" />
  </svg>
)`,J=p(`ref:1:0`,()=>a(`preview`)),Y=p(`ref:1:1`,()=>a(`preview`)),X=p(`ref:1:2`,()=>a(`preview`)),Z=p(`ref:1:3`,()=>a(`preview`)),Q=p(`ref:1:4`,()=>a(`preview`)),$=p(`ref:1:5`,()=>a(`preview`)),ee=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保留边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，兼容操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],te=()=>o(e=>{let a=t(),p=i(`rue:component:anchor`);return n(a,p),c(u(_,{children:o(()=>{let e=t(),a=r(`div`,e);n(e,a),d(a,`max-w-none prose prose-sm md:prose-base`);let o=r(`h1`,a);n(a,o),n(o,l(`Result 结果页`));let p=r(`p`,a);n(a,p),d(p,`text-sm mt-3 mb-3`),n(p,l(`Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。`));let m=r(`p`,a);n(a,m),d(m,`text-sm opacity-75`),n(m,l(`这次补齐参考了成熟结果页组件的能力面，但视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。`));let _=i(`rue:component:anchor`);n(a,_),s(()=>{let e=u(B,{title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:J,preview:()=>h(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[g(z,{size:`sm`,status:`success`,title:`发布成功`,subTitle:`新版本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`}),g(z,{size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`}),g(z,{size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`}),g(z,{size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})]}),code:`import { Result } from '@rue-js/design'

<div className="grid gap-4 xl:grid-cols-2">
  <Result
    size="sm"
    status="success"
    title="发布成功"
    subTitle="新版本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。"
  />
  <Result
    size="sm"
    status="info"
    title="等待同步"
    subTitle="任务已经入队，系统会在资源空闲时继续处理。"
  />
  <Result
    size="sm"
    status="warning"
    title="仍需人工确认"
    subTitle="检测到配置变更涉及生产环境，请由值班同学完成最终审核。"
  />
  <Result
    size="sm"
    status="error"
    title="校验失败"
    subTitle="依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。"
  />
</div>
`});f(()=>c(e,a,_))});let v=i(`rue:component:anchor`);n(a,v),s(()=>{let e=u(B,{title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:Y,preview:()=>h(`div`,{className:`grid gap-5`,children:[g(z,{status:403,extra:g(y,{color:`primary`,children:`申请访问`}),className:`min-h-[26rem]`}),h(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[g(z,{status:404,size:`sm`,extra:[g(y,{color:`primary`,children:`返回首页`},`home`),g(y,{type:`outlined`,children:`搜索文档`},`search`)]}),g(z,{status:500,size:`sm`,extra:[g(y,{color:`primary`,children:`重试请求`},`retry`),g(y,{type:`text`,children:`查看日志`},`log`)]})]})]}),code:`import { Button, Result } from '@rue-js/design'

<div className="grid gap-5">
  <Result
    status={403}
    extra={<Button color="primary">申请访问</Button>}
    className="min-h-[26rem]"
  />
  <div className="grid gap-5 xl:grid-cols-2">
    <Result
      status={404}
      size="sm"
      extra={[
        <Button color="primary" key="home">返回首页</Button>,
        <Button type="outlined" key="search">搜索文档</Button>,
      ]}
    />
    <Result
      status={500}
      size="sm"
      extra={[
        <Button color="primary" key="retry">重试请求</Button>,
        <Button type="text" key="log">查看日志</Button>,
      ]}
    />
  </div>
</div>
`});f(()=>c(e,a,v))});let b=i(`rue:component:anchor`);n(a,b),s(()=>{let e=u(B,{title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:X,preview:()=>g(z,{status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[g(y,{color:`primary`,children:`前往控制台`},`console`),g(y,{type:`outlined`,children:`配置快照`},`snapshot`)],children:h(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[h(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[g(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`实例规格`}),g(`div`,{className:`mt-2 text-lg font-semibold`,children:`4C8G / 华东 2`}),g(`div`,{className:`mt-1 text-sm opacity-65`,children:`自动扩容策略已启用`})]}),h(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[g(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`公网访问`}),h(`div`,{className:`mt-2 flex items-center gap-2 text-lg font-semibold`,children:[`已开启`,g(x,{color:`success`,children:`HTTPS`})]}),g(`div`,{className:`mt-1 text-sm opacity-65`,children:`默认指向 preview.rue.dev`})]}),h(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[g(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`提醒`}),h(`ul`,{className:`mt-2 m-0 pl-5 text-sm leading-7 opacity-80`,children:[g(`li`,{children:`建议补充管理员手机号`}),g(`li`,{children:`七天后会触发成本周报`})]})]})]})}),code:`import { Badge, Button, Result } from '@rue-js/design'

<Result
  status="success"
  title="云主机已开通"
  subTitle="订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。"
  extra={[
    <Button color="primary" key="console">前往控制台</Button>,
    <Button type="outlined" key="snapshot">配置快照</Button>,
  ]}
>
  <div className="grid gap-3 md:grid-cols-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">实例规格</div>
      <div className="mt-2 text-lg font-semibold">4C8G / 华东 2</div>
      <div className="mt-1 text-sm opacity-65">自动扩容策略已启用</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">公网访问</div>
      <div className="mt-2 flex items-center gap-2 text-lg font-semibold">
        已开启
        <Badge color="success">HTTPS</Badge>
      </div>
      <div className="mt-1 text-sm opacity-65">默认指向 preview.rue.dev</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">提醒</div>
      <ul className="mt-2 m-0 pl-5 text-sm leading-7 opacity-80">
        <li>建议补充管理员手机号</li>
        <li>七天后会触发成本周报</li>
      </ul>
    </div>
  </div>
</Result>
`});f(()=>c(e,a,b))});let S=i(`rue:component:anchor`);n(a,S),s(()=>{let e=u(B,{title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保留标题、动作和补充文案。`,tab:Z,preview:()=>h(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[g(z,{status:`info`,icon:g(H,{}),title:`迁移任务已排定`,subTitle:`冷数据会在凌晨窗口期分批迁移到对象存储，预计耗时 18 分钟。`,extra:g(y,{color:`primary`,children:`查看任务看板`}),variant:`soft`}),g(z,{status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[g(y,{type:`outlined`,children:`切换分支`},`branch`),g(y,{type:`text`,children:`申请沙箱`},`sandbox`)],variant:`outline`})]}),code:`import { Button, Result } from '@rue-js/design'

${G}

<div className="grid gap-5 xl:grid-cols-2">
  <Result
    status="info"
    icon={<RocketIcon />}
    title="迁移任务已排定"
    subTitle="冷数据会在凌晨窗口期分批迁移到对象存储，预计耗时 18 分钟。"
    extra={<Button color="primary">查看任务看板</Button>}
    variant="soft"
  />
  <Result
    status="warning"
    showIcon={false}
    title="你正在使用只读副本"
    subTitle="当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。"
    extra={[
      <Button type="outlined" key="branch">切换分支</Button>,
      <Button type="text" key="sandbox">申请沙箱</Button>,
    ]}
    variant="outline"
  />
</div>
`});f(()=>c(e,a,S))});let C=i(`rue:component:anchor`);n(a,C),s(()=>{let e=u(B,{title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:Q,preview:()=>h(`div`,{className:`grid gap-5`,children:[g(z,{status:`success`,icon:g(W,{}),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`}),h(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[g(z,{status:`info`,size:`sm`,variant:`soft`,icon:g(U,{}),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:g(y,{color:`primary`,children:`查看接入清单`})}),g(z,{status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚旧版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:g(y,{type:`outlined`,children:`打开故障时间线`}),children:h(`div`,{className:`grid gap-2 text-sm leading-7 opacity-80`,children:[g(`div`,{children:`node-sh-02: checksum mismatch`}),g(`div`,{children:`node-bj-05: waiting runtime restart`})]})})]})]}),code:`import { Button, Result } from '@rue-js/design'

${K}

${q}

<div className="grid gap-5">
  <Result
    status="success"
    icon={<ShieldWaveIcon />}
    title="安全基线已更新"
    subTitle="所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。"
    variant="surface"
  />
  <div className="grid gap-5 xl:grid-cols-2">
    <Result
      status="info"
      size="sm"
      variant="soft"
      icon={<CompassIcon />}
      title="推荐下一步：整理路由入口"
      subTitle="新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。"
      align="start"
      extra={<Button color="primary">查看接入清单</Button>}
    />
    <Result
      status="error"
      size="sm"
      variant="outline"
      title="回滚未完成"
      subTitle="2 个节点仍在回滚旧版本，建议先暂停流量切换，待日志完全一致后再继续。"
      align="start"
      extra={<Button type="outlined">打开故障时间线</Button>}
    >
      <div className="grid gap-2 text-sm leading-7 opacity-80">
        <div>node-sh-02: checksum mismatch</div>
        <div>node-bj-05: waiting runtime restart</div>
      </div>
    </Result>
  </div>
</div>
`});f(()=>c(e,a,C))});let w=i(`rue:component:anchor`);n(a,w),s(()=>{let e=u(B,{title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:$,preview:()=>h(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[h(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[g(z.PRESENTED_IMAGE_403,{size:`sm`}),g(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_403`})]}),h(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[g(z.PRESENTED_IMAGE_404,{size:`sm`}),g(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_404`})]}),h(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[g(z.PRESENTED_IMAGE_500,{size:`sm`}),g(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_500`})]})]}),code:`import { Result } from '@rue-js/design'

<div className="grid gap-4 md:grid-cols-3">
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_403 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_403</div>
  </div>
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_404 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_404</div>
  </div>
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_500 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_500</div>
  </div>
</div>
`});f(()=>c(e,a,w))});let T=r(`h2`,a);n(a,T),d(T,`mt-10`),n(T,l(`API`));let E=i(`rue:component:anchor`);n(a,E),s(()=>{let e=u(V,{rows:ee});f(()=>c(e,a,E))});let D=r(`p`,a);return n(a,D),d(D,`text-sm opacity-70 mt-4`),n(D,l(`除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。`)),e})}),a,p),a});export{te as default};