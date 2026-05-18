import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m,z as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g,n as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as v,t as y}from"./src-BQwLQD8R.js";import{n as b}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as x}from"./Code-DQxnq0in.js";import{t as S}from"./tabs-DqfJzZfa.js";var C=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),w=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:C(e)}:${String(t)}`).join(`; `):``,T=(...e)=>e.map(e=>w(e)).filter(Boolean).join(`; `),E={display:`grid`,justifyContent:`normal`,alignItems:`stretch`},D=(e,t,n)=>e<t?t:e>n?n:e,O=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},k=(e,t)=>{let n=O(e,0),r=O(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},ee=e=>{let t=O(e,1);return t>0?t:1},A=(e,t,n,r)=>D(O(e,r),t,n),j=(e,t,n)=>(e-t)/(n-t)*100,M=(e,t)=>t?`${e} ${t}`:e,N=e=>y(`div`,{className:`relative h-full [&>*]:h-full [&>*]:w-full [&>*]:max-w-none`,children:e}),te=e=>e==null?!1:Array.isArray(e)?e.length>0:!0,P=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},F=({className:e,style:t,role:n,tabIndex:r,label:i,labelClassName:a,children:o,...s})=>{let c=s.ref;`ref`in s&&delete s.ref;let l=w(t),u=e=>{e&&(l?e.setAttribute(`style`,l):e.removeAttribute(`style`)),P(c,e)};return v(`div`,{...s,ref:u,className:M(`diff-item-1 relative`,e),role:n,tabIndex:r,children:[i==null?null:y(`span`,{className:M(`pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,a),children:i}),o]})},I=({className:e,style:t,role:n,tabIndex:r,label:i,labelClassName:a,children:o,...s})=>{let c=s.ref;`ref`in s&&delete s.ref;let l=w(t),u=e=>{e&&(l?e.setAttribute(`style`,l):e.removeAttribute(`style`)),P(c,e)};return v(`div`,{...s,ref:u,className:M(`diff-item-2 relative`,e),role:n,tabIndex:r,children:[i==null?null:y(`span`,{className:M(`pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,a),children:i}),o]})},L=({className:e,style:t,children:n,...r})=>{let i=r.ref;`ref`in r&&delete r.ref;let a=w(t),o=e=>{e&&(a?e.setAttribute(`style`,a):e.removeAttribute(`style`)),P(i,e)};return y(`div`,{...r,ref:o,className:M(`diff-resizer`,e),children:n})},R=Object.assign(({className:e,style:t,tabIndex:n,value:r,defaultValue:i,min:a,max:o,step:s,disabled:c,item1:l,item2:u,item1Label:d,item2Label:p,resizerContent:m,children:h,onChange:g,..._})=>{let b=_.ref;`ref`in _&&delete _.ref;let x=k(a,o),S=ee(s),C=f(A(i??r??50,x.min,x.max,50)),D=r!==void 0,O=D?A(r,x.min,x.max,C.value):A(C.value,x.min,x.max,50),R=j(O,x.min,x.max),z=!te(h)&&(l!==void 0||u!==void 0),B=M(z?`diff relative isolate overflow-hidden select-none`:`diff`,e),ne=T(t,E),V=null,H=null,U=null,W=null,G=null,K=e=>{e&&(ne?e.setAttribute(`style`,ne):e.removeAttribute(`style`)),P(b,e)},q=e=>{let t=j(e,x.min,x.max);V&&V.setAttribute(`style`,w({clipPath:`inset(0 ${100-t}% 0 0)`})),H&&H.setAttribute(`style`,w({clipPath:`inset(0 0 0 ${t}%)`})),U&&U.setAttribute(`style`,w({left:`${t}%`,width:0,minWidth:0,maxWidth:0,clipPath:`none`,overflow:`visible`,opacity:1,resize:`none`,transform:`translateX(-50%)`})),W&&(W.style.left=`${t}%`),G&&(G.setAttribute(`aria-valuenow`,String(e)),G.value=String(e))},J=e=>{let t=e.target,n=A(t?.value,x.min,x.max,O);D||(C.value=n),q(n),g&&g(n,e)};if(!z)return y(`figure`,{..._,ref:K,className:B,tabIndex:n,"aria-disabled":c?`true`:void 0,children:h});let Y=_[`aria-label`]??`Diff position`;return v(`figure`,{..._,ref:K,className:B,tabIndex:void 0,"aria-disabled":c?`true`:void 0,children:[y(F,{className:`absolute inset-0 z-10 overflow-hidden`,role:`img`,ref:e=>{V=e,q(O)},children:N(l)}),y(I,{className:`absolute inset-0 overflow-hidden after:hidden`,role:`img`,ref:e=>{H=e,q(O)},children:N(u)}),d==null?null:y(`span`,{className:`pointer-events-none absolute left-4 top-4 z-30 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,children:d}),p==null?null:y(`span`,{className:`pointer-events-none absolute right-4 top-4 z-30 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,children:p}),y(L,{className:`pointer-events-none absolute inset-y-0 z-20`,ref:e=>{U=e,q(O)},style:{left:`${R}%`,width:0,minWidth:0,maxWidth:0,clipPath:`none`,overflow:`visible`,opacity:1,resize:`none`,transform:`translateX(-50%)`},children:y(`span`,{className:`absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-base-100 shadow-sm`})}),m==null?null:y(`span`,{ref:e=>{W=e,q(O)},className:`pointer-events-none absolute top-1/2 z-30 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-base-300 bg-base-100/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content shadow-sm backdrop-blur`,style:{left:`${R}%`},children:m}),y(`input`,{type:`range`,className:`absolute inset-0 z-30 h-full w-full cursor-col-resize opacity-0 disabled:cursor-not-allowed`,ref:e=>{G=e,q(O)},min:String(x.min),max:String(x.max),step:String(S),value:String(O),disabled:c,tabIndex:n,"aria-label":Y,"aria-valuemin":String(x.min),"aria-valuemax":String(x.max),"aria-valuenow":String(O),onInput:J,onChange:J})]})},{Item1:F,Item2:I,Resizer:L}),z=a=>c(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,f);i(f,h);let g=r(`h2`,h);i(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),m(()=>{let e=a.title;l(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);i(h,v),m(()=>{let o=a.summary?c(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return i(s,c),m(()=>{let e=a.summary;l(()=>d(e,s,c))}),o}):``;l(()=>d(o,h,v))});let y=e(`rue:component:anchor`);i(u,y),m(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});l(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),m(()=>{let n=a.tab.value===`preview`?a.preview():c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),m(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:a.code});l(()=>d(e,n,r))}),n});l(()=>d(n,u,b))}),u}),B=a=>c(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let h=r(`thead`,p);i(p,h);let g=r(`tr`,h);i(h,g);let v=r(`th`,g);i(g,v),i(v,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return m(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(c(()=>{let a=t(),o=r(`tr`,a);i(a,o),m(()=>{s(o,`key`,String(n.prop))});let c=r(`td`,o);i(o,c);let u=r(`code`,c);i(c,u);let f=e(`rue:slot:anchor`);i(u,f),m(()=>{let e=n.prop;l(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let h=e(`rue:slot:anchor`);i(p,h),m(()=>{let e=n.description;l(()=>d(e,p,h))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),m(()=>{let e=n.type;l(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),m(()=>{let e=n.defaultValue;l(()=>d(e,b,x))}),a}),a,o)}})}),f}),ne=[{prop:`item1`,description:`快捷模式下的左侧内容`,type:`any`,defaultValue:`-`},{prop:`item2`,description:`快捷模式下的右侧内容`,type:`any`,defaultValue:`-`},{prop:`item1Label`,description:`左侧角标文案或节点`,type:`any`,defaultValue:`-`},{prop:`item2Label`,description:`右侧角标文案或节点`,type:`any`,defaultValue:`-`},{prop:`resizerContent`,description:`手柄中央的自定义内容`,type:`any`,defaultValue:`-`},{prop:`value`,description:`受控位置值，仅快捷模式生效`,type:`number`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始位置，仅快捷模式生效`,type:`number`,defaultValue:`50`},{prop:`min`,description:`最小值，仅快捷模式生效`,type:`number`,defaultValue:`0`},{prop:`max`,description:`最大值，仅快捷模式生效`,type:`number`,defaultValue:`100`},{prop:`step`,description:`步进值，仅快捷模式生效`,type:`number`,defaultValue:`1`},{prop:`onChange`,description:`拖动或键盘调整时回调当前值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`disabled`,description:`禁用快捷模式拖动能力`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入子节点后优先使用旧的组合式结构`,type:`any`,defaultValue:`-`}],V=[{prop:`Diff.Item1`,description:`左侧内容区，兼容 role、tabIndex、label 和 style`,type:`component`,defaultValue:`-`},{prop:`Diff.Item2`,description:`右侧内容区，兼容 role、tabIndex、label 和 style`,type:`component`,defaultValue:`-`},{prop:`Diff.Resizer`,description:`分隔条，可继续自定义 className、style 和 children`,type:`component`,defaultValue:`-`},{prop:`tabIndex`,description:`旧结构模式下继续透传到根节点`,type:`number`,defaultValue:`-`}],H=()=>{let{tabEnhanced:_,tabControlled:x,tabReadonly:S,tabLegacyImage:C,tabLegacyText:w,controlledValue:T}=g(`useSetup:0:0`,()=>u(()=>({tabEnhanced:g(`ref:1:0`,()=>f(`preview`)),tabControlled:g(`ref:1:1`,()=>f(`preview`)),tabReadonly:g(`ref:1:2`,()=>f(`preview`)),tabLegacyImage:g(`ref:1:3`,()=>f(`preview`)),tabLegacyText:g(`ref:1:4`,()=>f(`preview`)),controlledValue:g(`ref:1:5`,()=>f(38))})));return c(u=>{let f=t(),g=e(`rue:component:anchor`);return i(f,g),d(p(b,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,u);i(u,f),i(f,o(`Diff 对比`));let g=r(`p`,u);i(u,g),n(g,`text-sm mt-3 mb-3`),i(g,o(`Diff 现在除了保留原来的组合式结构，还补上一套更顺手的快捷 API。可以直接传内容和位置值，也可以继续用`));let b=r(`code`,g);i(g,b),i(b,o(`Diff.Item1`)),i(g,o(`、`));let E=r(`code`,g);i(g,E),i(E,o(`Diff.Item2`)),i(g,o(`、`));let D=r(`code`,g);i(g,D),i(D,o(`Diff.Resizer`)),i(g,o(`自己拼装。`));let O=r(`div`,u);i(u,O),n(O,`text-sm flex flex-wrap gap-4`);let k=r(`a`,O);i(O,k),s(k,`href`,`https://daisyui.com/components/diff/`),s(k,`target`,`_blank`),s(k,`rel`,`noreferrer`),i(k,o(`查看 Diff 静态样式`));let ee=r(`h2`,u);i(u,ee),i(ee,o(`何时使用`));let A=r(`ul`,u);i(u,A);let j=r(`li`,A);i(A,j),i(j,o(`需要比较两个版本、两套视觉稿或两段内容，并让用户自己拖动查看差异。`));let M=r(`li`,A);i(A,M),i(M,o(`想要一个更轻的 API，直接传左右内容和默认位置，而不是每次都手写三段结构。`));let N=e(`rue:component:anchor`);i(u,N),m(()=>{let e=p(z,{title:`增强写法`,summary:`直接用 item1、item2、item1Label、item2Label 和 resizerContent 就能得到可拖动的对比区域。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(R,{className:`rounded-box aspect-[16/9] border border-base-300`,defaultValue:44,item1Label:`V1`,item2Label:`V2`,resizerContent:`new`,"aria-label":`首页头图改版对比`,item1:y(`div`,{className:`h-full w-full bg-[#112031] p-6 text-white`,children:v(`div`,{className:`flex h-full flex-col justify-between`,children:[v(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.3em] text-cyan-200/80`,children:`Rue Cloud`}),y(`div`,{className:`max-w-[14rem] text-3xl font-semibold leading-tight`,children:`Ship design changes with one source of truth`}),y(`div`,{className:`max-w-[16rem] text-sm text-slate-300`,children:`聚焦深色界面和强对比 CTA，强调协作与发布节奏。`})]}),v(`div`,{className:`flex gap-2`,children:[y(`span`,{className:`rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950`,children:`Publish faster`}),y(`span`,{className:`rounded-full border border-white/20 px-3 py-1 text-xs text-white/80`,children:`Team sync`})]})]})}),item2:y(`div`,{className:`h-full w-full bg-base-200 p-6 text-base-content`,children:v(`div`,{className:`flex h-full flex-col justify-between rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`,children:[v(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Rue Cloud`}),y(`div`,{className:`max-w-[14rem] text-3xl font-semibold leading-tight`,children:`Design review feels calmer and more editorial`}),y(`div`,{className:`max-w-[16rem] text-sm opacity-70`,children:`同一套信息结构，但把密度降下来，强调留白、节奏和可读性。`})]}),v(`div`,{className:`grid grid-cols-2 gap-2 text-xs`,children:[y(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Clear sections`}),y(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Softer contrast`}),y(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Readable text`}),y(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Stable hierarchy`})]})]})})}),y(`div`,{className:`text-sm opacity-70`,children:`快捷模式下内部会自动生成拖动层，键盘聚焦后也能直接调整位置。`})]})}),code:`<Diff
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
/>`});l(()=>d(e,u,N))});let te=e(`rue:component:anchor`);i(u,te),m(()=>{let e=p(z,{title:`受控位置`,summary:`value 和 onChange 可以把 Diff 变成受控组件，适合和外部滑杆、表单或讲解步骤联动。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap items-center gap-3 text-sm`,children:[v(`span`,{className:`badge badge-outline`,children:[`当前值 `,T.value]}),y(`button`,{className:`btn btn-xs`,onClick:()=>T.value=20,children:`20`}),y(`button`,{className:`btn btn-xs`,onClick:()=>T.value=50,children:`50`}),y(`button`,{className:`btn btn-xs`,onClick:()=>T.value=80,children:`80`})]}),y(`input`,{type:`range`,className:`range range-primary`,min:`0`,max:`100`,value:String(T.value),onInput:e=>{let t=e.target;T.value=Number(t.value)}}),y(R,{className:`rounded-box aspect-[16/9] border border-base-300`,value:T.value,onChange:e=>{T.value=e},item1Label:`Before`,item2Label:`After`,resizerContent:`${T.value}%`,"aria-label":`品牌色调整对比`,item1:y(`div`,{className:`grid h-full w-full place-content-center bg-slate-950 text-center text-white`,children:v(`div`,{className:`space-y-2`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.35em] text-fuchsia-200/70`,children:`Old palette`}),y(`div`,{className:`text-5xl font-black`,children:`RUE`}),y(`div`,{className:`mx-auto h-2 w-28 rounded-full bg-fuchsia-500`})]})}),item2:y(`div`,{className:`grid h-full w-full place-content-center bg-neutral-100 text-center text-slate-900`,children:v(`div`,{className:`space-y-2`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.35em] text-cyan-700/60`,children:`New palette`}),y(`div`,{className:`text-5xl font-black`,children:`RUE`}),y(`div`,{className:`mx-auto h-2 w-28 rounded-full bg-cyan-500`})]})})})]})}),code:`const value = ref(38)

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
/>`});l(()=>d(e,u,te))});let P=e(`rue:component:anchor`);i(u,P),m(()=>{let e=p(z,{title:`只读模式`,summary:`disabled 会保留当前可视结果，但不再允许拖动，适合说明文档、快照回顾或固定审稿视角。`,tab:S,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(R,{className:`rounded-box aspect-[16/9] border border-base-300`,value:62,disabled:!0,item1Label:`Dense`,item2Label:`Comfort`,resizerContent:`lock`,"aria-label":`信息密度对比`,item1:y(`div`,{className:`h-full w-full bg-base-300 p-4 text-xs text-base-content`,children:y(`div`,{className:`grid h-full grid-cols-3 gap-2`,children:Array.from({length:12}).map((e,t)=>v(`div`,{className:`rounded-box border border-base-100 bg-base-100 p-2`,children:[y(`div`,{className:`h-2 w-8 rounded-full bg-primary/70`}),v(`div`,{className:`mt-2 space-y-1`,children:[y(`div`,{className:`h-1.5 rounded-full bg-base-300`}),y(`div`,{className:`h-1.5 rounded-full bg-base-300`}),y(`div`,{className:`h-1.5 w-3/4 rounded-full bg-base-300`})]})]},t))})}),item2:y(`div`,{className:`h-full w-full bg-base-200 p-6 text-base-content`,children:v(`div`,{className:`grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-5`,children:[y(`div`,{className:`h-3 w-24 rounded-full bg-primary/70`}),v(`div`,{className:`mt-4 space-y-3`,children:[y(`div`,{className:`h-3 rounded-full bg-base-200`}),y(`div`,{className:`h-3 rounded-full bg-base-200`}),y(`div`,{className:`h-3 w-4/5 rounded-full bg-base-200`})]})]}),v(`div`,{className:`grid gap-3`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`})]})]})})}),y(`div`,{className:`text-sm opacity-70`,children:`固定为 62%，用来展示最终审稿视角。`})]})}),code:`<Diff
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
/>`});l(()=>d(e,u,P))});let F=e(`rue:component:anchor`);i(u,F),m(()=>{let e=p(z,{title:`图片对比`,summary:`组合式写法示例。`,tab:C,preview:()=>v(R,{className:`rounded-field aspect-16/9`,tabIndex:0,children:[y(R.Item1,{role:`img`,tabIndex:0,children:y(`img`,{alt:`daisy`,src:`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp`})}),y(R.Item2,{role:`img`,children:y(`img`,{alt:`daisy`,src:`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp`})}),y(R.Resizer,{})]}),code:`<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </Diff.Item1>
  <Diff.Item2 role="img">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`});l(()=>d(e,u,F))});let I=e(`rue:component:anchor`);i(u,I),m(()=>{let e=p(z,{title:`文本对比`,summary:`增强 API 不是替代，而是补齐。`,tab:w,preview:()=>v(R,{className:`rounded-field aspect-16/9`,tabIndex:0,children:[y(R.Item1,{role:`img`,tabIndex:0,children:y(`div`,{className:`bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center`,children:`DAISY`})}),y(R.Item2,{role:`img`,children:y(`div`,{className:`bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center`,children:`DAISY`})}),y(R.Resizer,{})]}),code:`<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </Diff.Item1>
  <Diff.Item2 role="img">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`});l(()=>d(e,u,I))});let L=r(`h2`,u);i(u,L),s(L,`id`,`diff-api`),i(L,o(`API`));let H=r(`p`,u);i(u,H),i(H,o(`Diff 现在同时支持快捷模式和组合式模式，下面按根组件和子组件拆开列出。`));let U=e(`rue:component:anchor`);i(u,U),m(()=>{let e=p(B,{rows:ne});l(()=>d(e,u,U))});let W=r(`div`,u);i(u,W),n(W,`not-prose mt-6`);let G=e(`rue:component:anchor`);i(u,G),m(()=>{let e=p(B,{rows:V});l(()=>d(e,u,G))});let K=r(`div`,u);i(u,K),n(K,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let q=r(`div`,K);i(K,q),n(q,`font-semibold`),i(q,o(`模式选择建议`));let J=r(`div`,K);i(K,J),n(J,`mt-2 grid gap-2 md:grid-cols-2`);let Y=r(`div`,J);i(J,Y);let re=r(`code`,Y);i(Y,re),i(re,o(`item1 / item2`)),i(Y,o(`适合快速搭 demo、做受控联动、补标签和默认手柄内容。`));let X=r(`div`,J);i(J,X);let ie=r(`code`,X);i(X,ie),i(ie,o(`children + Diff.Item1 / Item2 / Resizer`));let ae=h(X);i(X,ae),a(ae,` `),i(X,o(`适合保留旧结构，或自己完全掌控内部布局。`));let oe=r(`h2`,u);i(u,oe),i(oe,o(`FAQ`));let se=r(`h3`,u);i(u,se),i(se,o(`快捷模式和组合式模式怎么选？`));let Z=r(`p`,u);i(u,Z),i(Z,o(`如果你只是想比较两个内容块，优先用`));let ce=r(`code`,Z);i(Z,ce),i(ce,o(`item1`)),i(Z,o(`和`));let le=r(`code`,Z);i(Z,le),i(le,o(`item2`)),i(Z,o(`。如果你已经有现成结构， 或者需要完全接管内部节点顺序，就继续用旧的组合式写法。`));let ue=r(`h3`,u);i(u,ue),i(ue,o(`value 和 defaultValue 有什么区别？`));let Q=r(`p`,u);i(u,Q);let de=r(`code`,Q);i(Q,de),i(de,o(`value`)),i(Q,o(`是受控值，外部状态说了算；`));let fe=r(`code`,Q);i(Q,fe),i(fe,o(`defaultValue`));let pe=h(Q);i(Q,pe),a(pe,` `),i(Q,o(`只决定初始位置，之后由组件内部维护。`));let me=r(`h3`,u);i(u,me),i(me,o(`传了 children 之后 value 还会生效吗？`));let $=r(`p`,u);i(u,$),i($,o(`当前版本里，`));let he=r(`code`,$);i($,he),i(he,o(`children`)),i($,o(`会切换到组合式模式，因此`));let ge=r(`code`,$);i($,ge),i(ge,o(`value`)),i($,o(`、`));let _e=r(`code`,$);i($,_e),i(_e,o(`defaultValue`)),i($,o(`这些快捷模式能力不会接管内部布局。需要受控拖动时，优先使用`));let ve=r(`code`,$);i($,ve),i(ve,o(`item1`)),i($,o(`/`));let ye=h($);i($,ye),a(ye,` `);let be=r(`code`,$);return i($,be),i(be,o(`item2`)),i($,o(`。`)),c})}),f,g),f})};export{H as default};