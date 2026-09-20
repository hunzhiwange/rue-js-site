import{B as e,Bt as t,Ht as n,I as r,Jt as i,M as a,P as o,Vt as s,W as c,Wt as l,en as u,fn as d,gn as f,hn as p,mn as m,mt as h,nt as g,on as _,pn as v,sn as y,u as b,un as x,yn as S,z as C,zt as w}from"./rue-runtime-BWbIfNT8.js";import{r as T}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var E=S(`<div class="mx-auto max-w-5xl py-8"><div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><div class="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Experimental Compiler Demo</div><h1 class="mt-2 text-4xl font-semibold text-base-content">Compiled setup regions</h1><p class="mt-3 max-w-3xl text-base leading-7 text-base-content/70">入口、中段和末段 region 首次可达时分别初始化；离开后缓存保留，compiled signal 与普通 Rue ref 继续直接驱动控制流 DOM。</p></div><div class="rounded-2xl border border-primary/25 bg-primary/10 px-5 py-3 text-sm text-primary"><!--rue:text-hole:0--></div></div><div class="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]"><div class="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm"><div class="flex flex-wrap gap-2"><button class="btn btn-success">显示 A</button><button class="btn btn-warning">显示 B</button><button class="btn btn-secondary">显示 C</button><button class="btn btn-outline">修改当前 region 状态</button></div><div class="mt-6"><!--rue:opaque-hole:1--></div><div class="mt-5 rounded-xl bg-base-200 px-4 py-3 text-sm text-base-content/70">先修改 A，再切换到 B/C 并修改，最后返回旧分支：状态文本会保留，顶部每个 region 的 setup 次数仍为 1。</div></div><div class="rounded-3xl border border-slate-800 bg-slate-950 p-5 text-slate-100 shadow-sm"><div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Supported Shape</div><pre class="mt-4 overflow-x-auto whitespace-pre-wrap text-sm leading-6"><code><!--rue:text-hole:2--></code></pre></div></div><div class="mt-6 rounded-2xl border border-warning/40 bg-warning/10 p-5 text-sm leading-6 text-base-content/80">当前边界：仅分析顶层 early-return 可达区域；循环、switch、try/catch 等任意嵌套区域分析不在本示例支持范围内。依赖 props 的实时派生表达式不会冻结为 setup 快照。</div></div>`),D=x({entry:0,middle:0,final:0,total:0}),O={0:()=>{},1:()=>{},2:()=>{}},k=e=>{let t=0;return D.update(n=>(t=n.total+1,{...n,[e]:n[e]+1,total:t})),console.info(`[compiled-control-flow] ${e} setup region #${t}`),_(()=>console.info(`[compiled-control-flow] ${e} setup region cleanup`)),t},A=(a,o,s)=>{let m=c(C(a,`label`)),_=c(C(a,`mode`));return g(()=>r(n(()=>{let{bumpEntryValue:e,entryCompiled:n,entryRef:r}=i(`CompiledBranchCard:setup-region:0`,()=>(k(`entry`),{bumpEntryValue:e=>e+1,entryCompiled:x(1),entryRef:h(10)})),a=0;if(O[0]=()=>{a===0?n.update(e):r.value+=10,a+=1},_.get()===0&&n.get()===1&&r.value===10)return{__rue_compiled_branch_key:0,create:()=>l(e=>{let n=p(`div`,e);n.setAttribute(`class`,`rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-emerald-950`),n.setAttribute(`data-branch`,`a`),n.setAttribute(`data-state`,`initial`),d(n,f(`A initial · `));let r=v(`rue:compiled-slot`);return d(n,r),t({parent:n,before:r},()=>w(m.get()),()=>({})),[n,n]})};if(_.get()===0&&r.value===10)return{__rue_compiled_branch_key:1,create:()=>l(e=>{let n=p(`div`,e);n.setAttribute(`class`,`rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-emerald-950`),n.setAttribute(`data-branch`,`a`),n.setAttribute(`data-state`,`compiled`),d(n,f(`A compiled signal changed · `));let r=v(`rue:compiled-slot`);return d(n,r),t({parent:n,before:r},()=>w(m.get()),()=>({})),[n,n]})};if(_.get()===0)return{__rue_compiled_branch_key:2,create:()=>l(e=>{let n=p(`div`,e);n.setAttribute(`class`,`rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-emerald-950`),n.setAttribute(`data-branch`,`a`),n.setAttribute(`data-state`,`changed`),d(n,f(`A Rue ref changed · `));let r=v(`rue:compiled-slot`);return d(n,r),t({parent:n,before:r},()=>w(m.get()),()=>({})),[n,n]})};let{bumpMiddleValue:o,middleCompiled:s,middleRef:c}=i(`CompiledBranchCard:setup-region:3`,()=>{k(`middle`);function e(e){return e+1}let t=x(2),n=h(20);return O[1]=()=>{t.update(e),n.value+=10},{bumpMiddleValue:e,middleCompiled:t,middleRef:n}});if(_.get()===1&&s.get()===2&&c.value===20)return{__rue_compiled_branch_key:3,create:()=>l(e=>{let n=p(`section`,e);n.setAttribute(`class`,`rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-950`),n.setAttribute(`data-branch`,`b`),n.setAttribute(`data-state`,`initial`),d(n,f(`B initial · `));let r=v(`rue:compiled-slot`);return d(n,r),t({parent:n,before:r},()=>w(m.get()),()=>({})),[n,n]})};if(_.get()===1)return{__rue_compiled_branch_key:4,create:()=>l(e=>{let n=p(`section`,e);n.setAttribute(`class`,`rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-950`),n.setAttribute(`data-branch`,`b`),n.setAttribute(`data-state`,`changed`),d(n,f(`B state retained · `));let r=v(`rue:compiled-slot`);return d(n,r),t({parent:n,before:r},()=>w(m.get()),()=>({})),[n,n]})};let{bumpFinalValue:u,finalCompiled:g,finalRef:y}=i(`CompiledBranchCard:setup-region:5`,()=>{k(`final`);let e=e=>e+1,t=x(3),n=h(30);return O[2]=()=>{t.update(e),n.value+=10},{bumpFinalValue:e,finalCompiled:t,finalRef:n}});return g.get()===3&&y.value===30?{__rue_compiled_branch_key:5,create:()=>l(e=>{let n=p(`article`,e);n.setAttribute(`class`,`rounded-2xl border border-violet-300 bg-violet-50 p-6 text-violet-950`),n.setAttribute(`data-branch`,`c`),n.setAttribute(`data-state`,`initial`),d(n,f(`C initial · `));let r=v(`rue:compiled-slot`);return d(n,r),t({parent:n,before:r},()=>w(m.get()),()=>({})),[n,n]})}:{__rue_compiled_branch_key:6,create:()=>l(e=>{let n=p(`article`,e);n.setAttribute(`class`,`rounded-2xl border border-violet-300 bg-violet-50 p-6 text-violet-950`),n.setAttribute(`data-branch`,`c`),n.setAttribute(`data-state`,`changed`),d(n,f(`C state retained · `));let r=v(`rue:compiled-slot`);return d(n,r),t({parent:n,before:r},()=>w(m.get()),()=>({})),[n,n]})}}),e=>u(()=>{m.set(e.label),_.set(e.mode)}),()=>e(a)))},j=`const CompiledBranchCard = props => {
  const entrySetupId = beginRegion('entry')
  const entryPrefix = 'entry'
  const entrySuffix = 'state'
  const bumpEntryValue = value => value + 1
  const entryCompiled = compiledSignal(1)
  const entryRef = ref(10)
  let entryStep = 0
  regionControls[0] = () => {
    if (entryStep === 0) entryCompiled.update(bumpEntryValue)
    else entryRef.value += 10
    entryStep += 1
  }

  if (props.mode === 0 && entryCompiled.get() === 1 && entryRef.value === 10)
    return <div>A initial · {props.label}</div>
  if (props.mode === 0 && entryRef.value === 10)
    return <div>A compiled signal changed · {props.label}</div>
  if (props.mode === 0) return <div>A Rue ref changed · {props.label}</div>

  const middleSetupId = beginRegion('middle')
  const hello = 'hello'
  const middleSuffix = 'region'
  function bumpMiddleValue(value) { return value + 1 }
  const middleCompiled = compiledSignal(2)
  const middleRef = ref(20)
  regionControls[1] = () => {
    middleCompiled.update(bumpMiddleValue)
    middleRef.value += 10
  }
  if (props.mode === 1 && middleCompiled.get() === 2 && middleRef.value === 20)
    return <section>B initial · {props.label}</section>
  if (props.mode === 1) return <section>B state retained · {props.label}</section>

  const finalSetupId = beginRegion('final')
  const world = 'world'
  const finalSuffix = 'region'
  const bumpFinalValue = value => value + 1
  const finalCompiled = compiledSignal(3)
  const finalRef = ref(30)
  regionControls[2] = () => {
    finalCompiled.update(bumpFinalValue)
    finalRef.value += 10
  }
  if (finalCompiled.get() === 3 && finalRef.value === 30)
    return <article>C initial · {props.label}</article>
  return <article>C state retained · {props.label}</article>
}`,M=(e,n,r)=>{let i=x({label:`首次挂载`,mode:0,updates:0}),c=e=>{i.update(t=>({label:`父级属性更新 #${t.updates+1}`,mode:e,updates:t.updates+1}))},u=()=>O[i.peek().mode]();return(()=>{let e=l(e=>{let n=m(),r=E().content.cloneNode(!0),a=r.firstChild,l=a.childNodes[1].childNodes[0].childNodes[0].childNodes[0],d=a.childNodes[1].childNodes[0].childNodes[0].childNodes[1],p=a.childNodes[1].childNodes[0].childNodes[0].childNodes[2],h=a.childNodes[1].childNodes[0].childNodes[0].childNodes[3],g=a.childNodes[0].childNodes[1].childNodes[0],_=g.parentNode,v=a.childNodes[1].childNodes[0].childNodes[1].childNodes[0],x=v.parentNode,S=a.childNodes[1].childNodes[1].childNodes[1].childNodes[0].childNodes[0],C=S.parentNode;n.appendChild(r),l.setAttribute(`class`,`btn btn-success`),y(b(e,l,`click`,()=>()=>c(0))),d.setAttribute(`class`,`btn btn-warning`),y(b(e,d,`click`,()=>()=>c(1))),p.setAttribute(`class`,`btn btn-secondary`),y(b(e,p,`click`,()=>()=>c(2))),h.setAttribute(`class`,`btn btn-outline`);let T=e=>{let t=u;typeof t==`function`&&t(e)};h.addEventListener(`click`,T),y(()=>h.removeEventListener(`click`,T)),t({parent:_,before:g},()=>w(`region setup 次数：入口 ${D.get().entry} / 中段 ${D.get().middle} / 末段 ${D.get().final}`),()=>({}));let O=(e,t,n)=>{let r=()=>o(A,()=>({mode:i.get().mode,label:i.get().label}));return e==null?r():s(e,n,r)},k=v.nextSibling;x.removeChild(v),t({parent:x,before:k},()=>O,()=>({})),t({parent:C,before:S},()=>w(j),()=>({}));let M=f(``),N=f(``);return n.insertBefore(M,n.firstChild),n.appendChild(N),[n.firstChild,n.lastChild]});return a(T,()=>({children:e}))})()};export{M as default};