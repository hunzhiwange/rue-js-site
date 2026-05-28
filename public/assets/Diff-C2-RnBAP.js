import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,t as m,tt as h}from"./vapor-runtime-BR_2rwNk.js";import{a as g,n as _}from"./vapor-helpers-vapor-DkadWylb.js";import{i as v,r as y}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as b}from"./tabs-DMHgT-aV.js";import{n as x}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as S}from"./Code-B_4lzH85.js";var C=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),w=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:C(e)}:${String(t)}`).join(`; `):``,T=(...e)=>e.map(e=>w(e)).filter(Boolean).join(`; `),ee={display:`grid`,justifyContent:`normal`,alignItems:`stretch`},E=(e,t,n)=>e<t?t:e>n?n:e,D=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},O=(e,t)=>{let n=D(e,0),r=D(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},k=e=>{let t=D(e,1);return t>0?t:1},A=(e,t,n,r)=>E(D(e,r),t,n),j=(e,t,n)=>(e-t)/(n-t)*100,M=(e,t)=>t?`${e} ${t}`:e,N=e=>y(`div`,{className:`relative h-full [&>*]:h-full [&>*]:w-full [&>*]:max-w-none`,children:e}),te=e=>e==null?!1:Array.isArray(e)?e.length>0:!0,P=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},F=({className:e,style:t,role:n,tabIndex:r,label:i,labelClassName:a,children:o,...s})=>{let c=s.ref;`ref`in s&&delete s.ref;let l=w(t),u=e=>{e&&(l?e.setAttribute(`style`,l):e.removeAttribute(`style`)),P(c,e)};return v(`div`,{...s,ref:u,className:M(`diff-item-1 relative`,e),role:n,tabIndex:r,children:[i==null?null:y(`span`,{className:M(`pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,a),children:i}),o]})},I=({className:e,style:t,role:n,tabIndex:r,label:i,labelClassName:a,children:o,...s})=>{let c=s.ref;`ref`in s&&delete s.ref;let l=w(t),u=e=>{e&&(l?e.setAttribute(`style`,l):e.removeAttribute(`style`)),P(c,e)};return v(`div`,{...s,ref:u,className:M(`diff-item-2 relative`,e),role:n,tabIndex:r,children:[i==null?null:y(`span`,{className:M(`pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,a),children:i}),o]})},L=({className:e,style:t,children:n,...r})=>{let i=r.ref;`ref`in r&&delete r.ref;let a=w(t),o=e=>{e&&(a?e.setAttribute(`style`,a):e.removeAttribute(`style`)),P(i,e)};return y(`div`,{...r,ref:o,className:M(`diff-resizer`,e),children:n})},R=Object.assign(({className:e,style:t,tabIndex:r,value:i,defaultValue:a,min:o,max:s,step:c,disabled:l,item1:u,item2:d,item1Label:f,item2Label:p,resizerContent:m,children:h,onChange:g,..._})=>{let b=_.ref;`ref`in _&&delete _.ref;let x=O(o,s),S=k(c),C=n(A(a??i??50,x.min,x.max,50)),E=i!==void 0,D=E?A(i,x.min,x.max,C.value):A(C.value,x.min,x.max,50),R=j(D,x.min,x.max),z=!te(h)&&(u!==void 0||d!==void 0),B=M(z?`diff relative isolate overflow-hidden select-none`:`diff`,e),V=T(t,ee),H=null,U=null,W=null,G=null,K=null,q=e=>{e&&(V?e.setAttribute(`style`,V):e.removeAttribute(`style`)),P(b,e)},J=e=>{let t=j(e,x.min,x.max);H&&H.setAttribute(`style`,w({clipPath:`inset(0 ${100-t}% 0 0)`})),U&&U.setAttribute(`style`,w({clipPath:`inset(0 0 0 ${t}%)`})),W&&W.setAttribute(`style`,w({left:`${t}%`,width:0,minWidth:0,maxWidth:0,clipPath:`none`,overflow:`visible`,opacity:1,resize:`none`,transform:`translateX(-50%)`})),G&&(G.style.left=`${t}%`),K&&(K.setAttribute(`aria-valuenow`,String(e)),K.value=String(e))},Y=e=>{let t=e.target,n=A(t?.value,x.min,x.max,D);E||(C.value=n),J(n),g&&g(n,e)};if(!z)return y(`figure`,{..._,ref:q,className:B,tabIndex:r,"aria-disabled":l?`true`:void 0,children:h});let X=_[`aria-label`]??`Diff position`;return v(`figure`,{..._,ref:q,className:B,tabIndex:void 0,"aria-disabled":l?`true`:void 0,children:[y(F,{className:`absolute inset-0 z-10 overflow-hidden`,role:`img`,ref:e=>{H=e,J(D)},children:N(u)}),y(I,{className:`absolute inset-0 overflow-hidden after:hidden`,role:`img`,ref:e=>{U=e,J(D)},children:N(d)}),f==null?null:y(`span`,{className:`pointer-events-none absolute left-4 top-4 z-30 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,children:f}),p==null?null:y(`span`,{className:`pointer-events-none absolute right-4 top-4 z-30 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,children:p}),y(L,{className:`pointer-events-none absolute inset-y-0 z-20`,ref:e=>{W=e,J(D)},style:{left:`${R}%`,width:0,minWidth:0,maxWidth:0,clipPath:`none`,overflow:`visible`,opacity:1,resize:`none`,transform:`translateX(-50%)`},children:y(`span`,{className:`absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-base-100 shadow-sm`})}),m==null?null:y(`span`,{ref:e=>{G=e,J(D)},className:`pointer-events-none absolute top-1/2 z-30 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-base-300 bg-base-100/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content shadow-sm backdrop-blur`,style:{left:`${R}%`},children:m}),y(`input`,{type:`range`,className:`absolute inset-0 z-30 h-full w-full cursor-col-resize opacity-0 disabled:cursor-not-allowed`,ref:e=>{K=e,J(D)},min:String(x.min),max:String(x.max),step:String(S),value:String(D),disabled:l,tabIndex:r,"aria-label":X,"aria-valuemin":String(x.min),"aria-valuemax":String(x.max),"aria-valuenow":String(D),onInput:Y,onChange:Y})]})},{Item1:F,Item2:I,Resizer:L}),z=t=>l(n=>{let f=e(`div`,n);c(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let p=e(`div`,f);a(f,p),c(p,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,p);a(p,h);let g=e(`h2`,h);a(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>d(e,g,_))});let v=s(`rue:slot:anchor`);a(h,v),o(()=>{let n=t.summary?l(()=>{let n=r(),l=e(`p`,n);a(n,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(l,u),o(()=>{let e=t.summary;i(()=>d(e,l,u))}),n}):``;i(()=>d(n,h,v))});let y=s(`rue:component:anchor`);a(f,y),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>d(e,f,y))});let x=s(`rue:slot:anchor`);return a(f,x),o(()=>{let e=t.tab.value===`preview`?t.preview():l(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=m(S,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>d(r,e,n))}),e});i(()=>d(e,f,x))}),f}),B=t=>l(n=>{let f=e(`div`,n);c(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,f);a(f,m),c(m,`table table-zebra`);let h=e(`thead`,m);a(m,h);let g=e(`tr`,h);a(h,g);let v=e(`th`,g);a(g,v),a(v,u(`属性`));let y=e(`th`,g);a(g,y),a(y,u(`说明`));let b=e(`th`,g);a(g,b),a(b,u(`类型`));let x=e(`th`,g);a(g,x),a(x,u(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,u,f)=>{d(l(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{p(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let f=s(`rue:slot:anchor`);a(u,f),o(()=>{let e=t.prop;i(()=>d(e,u,f))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>d(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>d(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>d(e,b,x))}),n}),n,c)}})}),f}),V=[{prop:`item1`,description:`快捷模式下的左侧内容`,type:`any`,defaultValue:`-`},{prop:`item2`,description:`快捷模式下的右侧内容`,type:`any`,defaultValue:`-`},{prop:`item1Label`,description:`左侧角标文案或节点`,type:`any`,defaultValue:`-`},{prop:`item2Label`,description:`右侧角标文案或节点`,type:`any`,defaultValue:`-`},{prop:`resizerContent`,description:`手柄中央的自定义内容`,type:`any`,defaultValue:`-`},{prop:`value`,description:`受控位置值，仅快捷模式生效`,type:`number`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始位置，仅快捷模式生效`,type:`number`,defaultValue:`50`},{prop:`min`,description:`最小值，仅快捷模式生效`,type:`number`,defaultValue:`0`},{prop:`max`,description:`最大值，仅快捷模式生效`,type:`number`,defaultValue:`100`},{prop:`step`,description:`步进值，仅快捷模式生效`,type:`number`,defaultValue:`1`},{prop:`onChange`,description:`拖动或键盘调整时回调当前值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`disabled`,description:`禁用快捷模式拖动能力`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入子节点后优先使用旧的组合式结构`,type:`any`,defaultValue:`-`}],H=[{prop:`Diff.Item1`,description:`左侧内容区，兼容 role、tabIndex、label 和 style`,type:`component`,defaultValue:`-`},{prop:`Diff.Item2`,description:`右侧内容区，兼容 role、tabIndex、label 和 style`,type:`component`,defaultValue:`-`},{prop:`Diff.Resizer`,description:`分隔条，可继续自定义 className、style 和 children`,type:`component`,defaultValue:`-`},{prop:`tabIndex`,description:`旧结构模式下继续透传到根节点`,type:`number`,defaultValue:`-`}],U=()=>{let{tabEnhanced:_,tabControlled:b,tabReadonly:S,tabLegacyImage:C,tabLegacyText:w,controlledValue:T}=g(`useSetup:0:0`,()=>t(()=>({tabEnhanced:g(`ref:1:0`,()=>n(`preview`)),tabControlled:g(`ref:1:1`,()=>n(`preview`)),tabReadonly:g(`ref:1:2`,()=>n(`preview`)),tabLegacyImage:g(`ref:1:3`,()=>n(`preview`)),tabLegacyText:g(`ref:1:4`,()=>n(`preview`)),controlledValue:g(`ref:1:5`,()=>n(38))})));return l(t=>{let n=r(),g=s(`rue:component:anchor`);return a(n,g),d(m(x,{children:l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let l=e(`h1`,n);a(n,l),a(l,u(`Diff 对比`));let g=e(`p`,n);a(n,g),c(g,`text-sm mt-3 mb-3`),a(g,u(`Diff 现在除了保留原来的组合式结构，还补上一套更顺手的快捷 API。可以直接传内容和位置值，也可以继续用`));let x=e(`code`,g);a(g,x),a(x,u(`Diff.Item1`)),a(g,u(`、`));let ee=e(`code`,g);a(g,ee),a(ee,u(`Diff.Item2`)),a(g,u(`、`));let E=e(`code`,g);a(g,E),a(E,u(`Diff.Resizer`)),a(g,u(`自己拼装。`));let D=e(`h2`,n);a(n,D),a(D,u(`何时使用`));let O=e(`ul`,n);a(n,O);let k=e(`li`,O);a(O,k),a(k,u(`需要比较两个版本、两套视觉稿或两段内容，并让用户自己拖动查看差异。`));let A=e(`li`,O);a(O,A),a(A,u(`想要一个更轻的 API，直接传左右内容和默认位置，而不是每次都手写三段结构。`));let j=s(`rue:component:anchor`);a(n,j),o(()=>{let e=m(z,{title:`增强写法`,summary:`直接用 item1、item2、item1Label、item2Label 和 resizerContent 就能得到可拖动的对比区域。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(R,{className:`rounded-box aspect-[16/9] border border-base-300`,defaultValue:44,item1Label:`V1`,item2Label:`V2`,resizerContent:`new`,"aria-label":`首页头图改版对比`,item1:y(`div`,{className:`h-full w-full bg-[#112031] p-6 text-white`,children:v(`div`,{className:`flex h-full flex-col justify-between`,children:[v(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.3em] text-cyan-200/80`,children:`Rue Cloud`}),y(`div`,{className:`max-w-[14rem] text-3xl font-semibold leading-tight`,children:`Ship design changes with one source of truth`}),y(`div`,{className:`max-w-[16rem] text-sm text-slate-300`,children:`聚焦深色界面和强对比 CTA，强调协作与发布节奏。`})]}),v(`div`,{className:`flex gap-2`,children:[y(`span`,{className:`rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950`,children:`Publish faster`}),y(`span`,{className:`rounded-full border border-white/20 px-3 py-1 text-xs text-white/80`,children:`Team sync`})]})]})}),item2:y(`div`,{className:`h-full w-full bg-base-200 p-6 text-base-content`,children:v(`div`,{className:`flex h-full flex-col justify-between rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`,children:[v(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Rue Cloud`}),y(`div`,{className:`max-w-[14rem] text-3xl font-semibold leading-tight`,children:`Design review feels calmer and more editorial`}),y(`div`,{className:`max-w-[16rem] text-sm opacity-70`,children:`同一套信息结构，但把密度降下来，强调留白、节奏和可读性。`})]}),v(`div`,{className:`grid grid-cols-2 gap-2 text-xs`,children:[y(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Clear sections`}),y(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Softer contrast`}),y(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Readable text`}),y(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Stable hierarchy`})]})]})})}),y(`div`,{className:`text-sm opacity-70`,children:`快捷模式下内部会自动生成拖动层，键盘聚焦后也能直接调整位置。`})]})}),code:`<Diff
  className="rounded-box aspect-[16/9] border border-base-300"
  defaultValue={44}
  item1Label="V1"
  item2Label="V2"
  resizerContent="new"
  aria-label="首页头图改版对比"
  item1={
    <div className="h-full w-full bg-[#112031] p-6 text-white">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Rue Cloud</div>
          <div className="max-w-[14rem] text-3xl font-semibold leading-tight">
            Ship design changes with one source of truth
          </div>
          <div className="max-w-[16rem] text-sm text-slate-300">
            聚焦深色界面和强对比 CTA，强调协作与发布节奏。
          </div>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
            Publish faster
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
            Team sync
          </span>
        </div>
      </div>
    </div>
  }
  item2={
    <div className="h-full w-full bg-base-200 p-6 text-base-content">
      <div className="flex h-full flex-col justify-between rounded-box border border-base-300 bg-base-100 p-5 shadow-sm">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] opacity-60">Rue Cloud</div>
          <div className="max-w-[14rem] text-3xl font-semibold leading-tight">
            Design review feels calmer and more editorial
          </div>
          <div className="max-w-[16rem] text-sm opacity-70">
            同一套信息结构，但把密度降下来，强调留白、节奏和可读性。
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-box bg-base-200 px-3 py-2">Clear sections</div>
          <div className="rounded-box bg-base-200 px-3 py-2">Softer contrast</div>
          <div className="rounded-box bg-base-200 px-3 py-2">Readable text</div>
          <div className="rounded-box bg-base-200 px-3 py-2">Stable hierarchy</div>
        </div>
      </div>
    </div>
  }
/>`});i(()=>d(e,n,j))});let M=s(`rue:component:anchor`);a(n,M),o(()=>{let e=m(z,{title:`受控位置`,summary:`value 和 onChange 可以把 Diff 变成受控组件，适合和外部滑杆、表单或讲解步骤联动。`,tab:b,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap items-center gap-3 text-sm`,children:[v(`span`,{className:`badge badge-outline`,children:[`当前值 `,T.value]}),y(`button`,{className:`btn btn-xs`,onClick:()=>T.value=20,children:`20`}),y(`button`,{className:`btn btn-xs`,onClick:()=>T.value=50,children:`50`}),y(`button`,{className:`btn btn-xs`,onClick:()=>T.value=80,children:`80`})]}),y(`input`,{type:`range`,className:`range range-primary`,min:`0`,max:`100`,value:String(T.value),onInput:e=>{let t=e.target;T.value=Number(t.value)}}),y(R,{className:`rounded-box aspect-[16/9] border border-base-300`,value:T.value,onChange:e=>{T.value=e},item1Label:`Before`,item2Label:`After`,resizerContent:`${T.value}%`,"aria-label":`品牌色调整对比`,item1:y(`div`,{className:`grid h-full w-full place-content-center bg-slate-950 text-center text-white`,children:v(`div`,{className:`space-y-2`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.35em] text-fuchsia-200/70`,children:`Old palette`}),y(`div`,{className:`text-5xl font-black`,children:`RUE`}),y(`div`,{className:`mx-auto h-2 w-28 rounded-full bg-fuchsia-500`})]})}),item2:y(`div`,{className:`grid h-full w-full place-content-center bg-neutral-100 text-center text-slate-900`,children:v(`div`,{className:`space-y-2`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.35em] text-cyan-700/60`,children:`New palette`}),y(`div`,{className:`text-5xl font-black`,children:`RUE`}),y(`div`,{className:`mx-auto h-2 w-28 rounded-full bg-cyan-500`})]})})})]})}),code:`const value = ref(38)

<input
  type="range"
  className="range range-primary"
  min="0"
  max="100"
  value={String(value.value)}
  onInput={event => {
    const target = event.target as HTMLInputElement
    value.value = Number(target.value)
  }}
/>

<Diff
  className="rounded-box aspect-[16/9] border border-base-300"
  value={value.value}
  onChange={nextValue => {
    value.value = nextValue
  }}
  item1Label="Before"
  item2Label="After"
  resizerContent={\`\${value.value}%\`}
  aria-label="品牌色调整对比"
  item1={
    <div className="grid h-full w-full place-content-center bg-slate-950 text-center text-white">
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-[0.35em] text-fuchsia-200/70">Old palette</div>
        <div className="text-5xl font-black">RUE</div>
        <div className="mx-auto h-2 w-28 rounded-full bg-fuchsia-500" />
      </div>
    </div>
  }
  item2={
    <div className="grid h-full w-full place-content-center bg-neutral-100 text-center text-slate-900">
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-[0.35em] text-cyan-700/60">New palette</div>
        <div className="text-5xl font-black">RUE</div>
        <div className="mx-auto h-2 w-28 rounded-full bg-cyan-500" />
      </div>
    </div>
  }
/>`});i(()=>d(e,n,M))});let N=s(`rue:component:anchor`);a(n,N),o(()=>{let e=m(z,{title:`只读模式`,summary:`disabled 会保留当前可视结果，但不再允许拖动，适合说明文档、快照回顾或固定审稿视角。`,tab:S,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(R,{className:`rounded-box aspect-[16/9] border border-base-300`,value:62,disabled:!0,item1Label:`Dense`,item2Label:`Comfort`,resizerContent:`lock`,"aria-label":`信息密度对比`,item1:y(`div`,{className:`h-full w-full bg-base-300 p-4 text-xs text-base-content`,children:y(`div`,{className:`grid h-full grid-cols-3 gap-2`,children:Array.from({length:12}).map((e,t)=>v(`div`,{className:`rounded-box border border-base-100 bg-base-100 p-2`,children:[y(`div`,{className:`h-2 w-8 rounded-full bg-primary/70`}),v(`div`,{className:`mt-2 space-y-1`,children:[y(`div`,{className:`h-1.5 rounded-full bg-base-300`}),y(`div`,{className:`h-1.5 rounded-full bg-base-300`}),y(`div`,{className:`h-1.5 w-3/4 rounded-full bg-base-300`})]})]},t))})}),item2:y(`div`,{className:`h-full w-full bg-base-200 p-6 text-base-content`,children:v(`div`,{className:`grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-5`,children:[y(`div`,{className:`h-3 w-24 rounded-full bg-primary/70`}),v(`div`,{className:`mt-4 space-y-3`,children:[y(`div`,{className:`h-3 rounded-full bg-base-200`}),y(`div`,{className:`h-3 rounded-full bg-base-200`}),y(`div`,{className:`h-3 w-4/5 rounded-full bg-base-200`})]})]}),v(`div`,{className:`grid gap-3`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`})]})]})})}),y(`div`,{className:`text-sm opacity-70`,children:`固定为 62%，用来展示最终审稿视角。`})]})}),code:`<Diff
  className="rounded-box aspect-[16/9] border border-base-300"
  value={62}
  disabled
  item1Label="Dense"
  item2Label="Comfort"
  resizerContent="lock"
  aria-label="信息密度对比"
  item1={
    <div className="h-full w-full bg-base-300 p-4 text-xs text-base-content">
      <div className="grid h-full grid-cols-3 gap-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="rounded-box border border-base-100 bg-base-100 p-2">
            <div className="h-2 w-8 rounded-full bg-primary/70" />
            <div className="mt-2 space-y-1">
              <div className="h-1.5 rounded-full bg-base-300" />
              <div className="h-1.5 rounded-full bg-base-300" />
              <div className="h-1.5 w-3/4 rounded-full bg-base-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  }
  item2={
    <div className="h-full w-full bg-base-200 p-6 text-base-content">
      <div className="grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-box border border-base-300 bg-base-100 p-5">
          <div className="h-3 w-24 rounded-full bg-primary/70" />
          <div className="mt-4 space-y-3">
            <div className="h-3 rounded-full bg-base-200" />
            <div className="h-3 rounded-full bg-base-200" />
            <div className="h-3 w-4/5 rounded-full bg-base-200" />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-box border border-base-300 bg-base-100 p-4" />
          <div className="rounded-box border border-base-300 bg-base-100 p-4" />
          <div className="rounded-box border border-base-300 bg-base-100 p-4" />
        </div>
      </div>
    </div>
  }
/>`});i(()=>d(e,n,N))});let te=s(`rue:component:anchor`);a(n,te),o(()=>{let e=m(z,{title:`图片对比`,summary:`组合式写法示例。`,tab:C,preview:()=>v(R,{className:`rounded-field aspect-16/9`,tabIndex:0,children:[y(R.Item1,{role:`img`,tabIndex:0,children:y(`img`,{alt:`daisy`,src:`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp`})}),y(R.Item2,{role:`img`,children:y(`img`,{alt:`daisy`,src:`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp`})}),y(R.Resizer,{})]}),code:`<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </Diff.Item1>
  <Diff.Item2 role="img">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`});i(()=>d(e,n,te))});let P=s(`rue:component:anchor`);a(n,P),o(()=>{let e=m(z,{title:`文本对比`,summary:`增强 API 不是替代，而是补齐。`,tab:w,preview:()=>v(R,{className:`rounded-field aspect-16/9`,tabIndex:0,children:[y(R.Item1,{role:`img`,tabIndex:0,children:y(`div`,{className:`bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center`,children:`DAISY`})}),y(R.Item2,{role:`img`,children:y(`div`,{className:`bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center`,children:`DAISY`})}),y(R.Resizer,{})]}),code:`<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </Diff.Item1>
  <Diff.Item2 role="img">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`});i(()=>d(e,n,P))});let F=e(`h2`,n);a(n,F),p(F,`id`,`diff-api`),a(F,u(`API`));let I=e(`p`,n);a(n,I),a(I,u(`Diff 现在同时支持快捷模式和组合式模式，下面按根组件和子组件拆开列出。`));let L=s(`rue:component:anchor`);a(n,L),o(()=>{let e=m(B,{rows:V});i(()=>d(e,n,L))});let U=e(`div`,n);a(n,U),c(U,`not-prose mt-6`);let W=s(`rue:component:anchor`);a(n,W),o(()=>{let e=m(B,{rows:H});i(()=>d(e,n,W))});let G=e(`div`,n);a(n,G),c(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let K=e(`div`,G);a(G,K),c(K,`font-semibold`),a(K,u(`模式选择建议`));let q=e(`div`,G);a(G,q),c(q,`mt-2 grid gap-2 md:grid-cols-2`);let J=e(`div`,q);a(q,J);let Y=e(`code`,J);a(J,Y),a(Y,u(`item1 / item2`)),a(J,u(`适合快速搭 demo、做受控联动、补标签和默认手柄内容。`));let X=e(`div`,q);a(q,X);let ne=e(`code`,X);a(X,ne),a(ne,u(`children + Diff.Item1 / Item2 / Resizer`));let re=h(X);a(X,re),f(re,` `),a(X,u(`适合保留旧结构，或自己完全掌控内部布局。`));let ie=e(`h2`,n);a(n,ie),a(ie,u(`FAQ`));let ae=e(`h3`,n);a(n,ae),a(ae,u(`快捷模式和组合式模式怎么选？`));let Z=e(`p`,n);a(n,Z),a(Z,u(`如果你只是想比较两个内容块，优先用`));let oe=e(`code`,Z);a(Z,oe),a(oe,u(`item1`)),a(Z,u(`和`));let se=e(`code`,Z);a(Z,se),a(se,u(`item2`)),a(Z,u(`。如果你已经有现成结构， 或者需要完全接管内部节点顺序，就继续用旧的组合式写法。`));let ce=e(`h3`,n);a(n,ce),a(ce,u(`value 和 defaultValue 有什么区别？`));let Q=e(`p`,n);a(n,Q);let le=e(`code`,Q);a(Q,le),a(le,u(`value`)),a(Q,u(`是受控值，外部状态说了算；`));let ue=e(`code`,Q);a(Q,ue),a(ue,u(`defaultValue`));let de=h(Q);a(Q,de),f(de,` `),a(Q,u(`只决定初始位置，之后由组件内部维护。`));let fe=e(`h3`,n);a(n,fe),a(fe,u(`传了 children 之后 value 还会生效吗？`));let $=e(`p`,n);a(n,$),a($,u(`当前版本里，`));let pe=e(`code`,$);a($,pe),a(pe,u(`children`)),a($,u(`会切换到组合式模式，因此`));let me=e(`code`,$);a($,me),a(me,u(`value`)),a($,u(`、`));let he=e(`code`,$);a($,he),a(he,u(`defaultValue`)),a($,u(`这些快捷模式能力不会接管内部布局。需要受控拖动时，优先使用`));let ge=e(`code`,$);a($,ge),a(ge,u(`item1`)),a($,u(`/`));let _e=h($);a($,_e),f(_e,` `);let ve=e(`code`,$);return a($,ve),a(ve,u(`item2`)),a($,u(`。`)),t})}),n,g),n})};export{U as default};