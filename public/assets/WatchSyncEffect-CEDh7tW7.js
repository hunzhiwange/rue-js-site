import{An as e,Bt as t,C as n,Dn as r,Et as i,H as a,K as o,L as s,Ln as c,Lt as l,Mt as u,S as d,V as f,W as p,_n as m,bn as h,fn as g,gn as _,hn as v,nt as y,ot as b,q as x,wn as S,x as C,z as w}from"./rue-runtime-CwEGJ854.js";import{t as T}from"./Code-B3jCYMAr.js";import{r as E}from"./SidebarPlaygroundExample-EGR0CyDT.js";var ee=m('<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">`watchSyncEffect()` 是 `watchEffect(..., { flush: \'sync\' })` 的便捷别名。下面模拟活动名额池：一次导入多个候选时，同步 watcher 会在每一次写入后立即更新提交开关，而默认 `watchEffect()` 会按响应式队列批处理。</p><div class="grid gap-3 lg:grid-cols-3"><!--rue:text-hole:0--></div><div class="grid gap-4 md:grid-cols-[1fr_1.2fr]"><div class="rounded-box border border-base-300 bg-base-200/40 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">capacity</div><div class="mt-4 grid grid-cols-3 gap-3 text-center"><div class="rounded-box bg-base-100 p-4"><div class="text-sm text-base-content/60">总名额</div><div class="mt-1 text-3xl font-semibold text-primary"><!--rue:text-hole:1--></div></div><div class="rounded-box bg-base-100 p-4"><div class="text-sm text-base-content/60">已确认</div><div class="mt-1 text-3xl font-semibold"><!--rue:text-hole:2--></div></div><div class="rounded-box bg-base-100 p-4"><div class="text-sm text-base-content/60">候选</div><div class="mt-1 text-3xl font-semibold text-secondary"><!--rue:text-hole:3--></div></div></div></div><div><div class="text-sm uppercase tracking-[0.24em] opacity-70">sync guard</div><div class="mt-3 text-3xl font-semibold"><!--rue:text-hole:4--></div><div class="mt-3 text-sm opacity-80">提交按钮当前状态：<!--rue:text-hole:5--></div></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">导入 1 个候选</button><button class="btn btn-secondary">连续导入 3 个</button><button class="btn btn-outline">释放 1 个名额</button><button class="btn btn-outline">移除 1 个候选</button><button class="btn btn-success">提交候选</button><button class="btn btn-ghost">重置</button></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70"><!--rue:text-hole:6--></div><div class="grid gap-4 xl:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">watchSyncEffect 记录</div><ul class="mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80"><!--rue:text-hole:7--></ul></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">watchEffect flush: \'sync\'</div><ul class="mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80"><!--rue:text-hole:8--></ul></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">默认 watchEffect 批处理记录</div><ul class="mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80"><!--rue:text-hole:9--></ul></div></div></div></div>'),D=m(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">watchSyncEffect 同步业务防线</h1>`),O=m(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=m(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=`import { type FC, ref, watchEffect, watchSyncEffect } from '@rue-js/rue';

const useCases = [
  '同步业务防线：连续写入后，同一调用栈里能立刻读到最新 canCommit。',
  '即时派生状态：把轻量状态机、按钮禁用态、校验状态保持为当前值。',
  '谨慎范围：适合简单布尔值或小型派生值，不适合大数组的高频同步变更。',
] as const;

const WatchSyncEffectDemo: FC = () => {
  const capacity = ref(12);
  const confirmed = ref(8);
  const incoming = ref(0);
  const canCommit = ref(true);
  const guardText = ref('等待变更');
  const syncLog = ref<string[]>([]);
  const flushSyncLog = ref<string[]>([]);
  const batchedLog = ref<string[]>([]);
  const actionResult = ref('尝试导入候选或提交名额。');
  const syncRecords: string[] = [];
  const flushSyncRecords: string[] = [];
  const batchedRecords: string[] = [];
  let syncRun = 0;
  let flushSyncRun = 0;
  let batchedRun = 0;

  watchSyncEffect(() => {
    const total = confirmed.value + incoming.value;
    const free = capacity.value - total;
    syncRun += 1;
    canCommit.value = free >= 0;
    guardText.value = free >= 0 ? \`还可确认 \${free} 个名额\` : \`超出 \${Math.abs(free)} 个名额\`;
    syncRecords.unshift(\`sync #\${syncRun}: pending=\${incoming.value}, total=\${total}, ok=\${free >= 0}\`);
    syncLog.value = syncRecords.slice(0, 6);
  });

  watchEffect(() => {
    const total = confirmed.value + incoming.value;
    flushSyncRun += 1;
    flushSyncRecords.unshift(\`flush sync #\${flushSyncRun}: pending=\${incoming.value}, total=\${total}\`);
    flushSyncLog.value = flushSyncRecords.slice(0, 6);
  }, { flush: 'sync' });

  watchEffect(() => {
    const total = confirmed.value + incoming.value;
    batchedRun += 1;
    batchedRecords.unshift(\`batch #\${batchedRun}: total=\${total}\`);
    batchedLog.value = batchedRecords.slice(0, 6);
  });

  const importCandidates = (amount: number) => {
    for (let i = 0; i < amount; i += 1) {
      incoming.value += 1;
    }
    actionResult.value = canCommit.value
      ? \`已导入 \${amount} 个候选，本轮仍可提交。\`
      : \`已导入 \${amount} 个候选，同步防线立即阻止提交。\`;
  };

  const commit = () => {
    if (!canCommit.value) {
      actionResult.value = '提交被同步拦截，请先释放名额或减少候选。';
      return;
    }
    confirmed.value += incoming.value;
    incoming.value = 0;
    actionResult.value = '提交成功，候选已转为已确认名额。';
  };

  return (
    <div>
      <ul>
        {useCases.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div>{guardText.value}</div>
      <button onClick={() => importCandidates(3)}>导入 3 个候选</button>
      <button disabled={!canCommit.value} onClick={commit}>提交</button>
      <div>{actionResult.value}</div>
    </div>
  );
};

export default WatchSyncEffectDemo;`,te=[{title:`同步业务防线`,text:`连续写入后，同一调用栈里能立刻读到最新 canCommit，提交动作不会拿到过期判断。`},{title:`即时派生状态`,text:`适合维护轻量状态机、按钮禁用态、校验结果这类需要马上可读的派生值。`},{title:`谨慎使用范围`,text:`同步 watcher 不会合并多次触发，适合简单布尔值或小型派生值，避免监听大数组高频写入。`}],j=()=>{let a=t(12),o=t(8),s=t(0),l=t(!0),f=t(`等待首次同步检查`),m=t(`success`),y=t(`导入候选后，同步防线会立刻判断是否仍可提交。`),b=t([]),T=t([]),E=t([]),D=[],O=[],k=[],A=0,j=0,M=0;c(()=>{let e=o.value+s.value,t=a.value-e;A+=1,l.value=t>=0,m.value=t<0?`error`:t<=2?`warning`:`success`,f.value=t>=0?`还可确认 ${t} 个名额`:`超出 ${Math.abs(t)} 个名额`,D.unshift(`sync #${A}: pending=${s.value}, total=${e}, ok=${t>=0}`),b.value=D.slice(0,6)}),e(()=>{let e=o.value+s.value;j+=1,O.unshift(`flush sync #${j}: pending=${s.value}, total=${e}`),T.value=O.slice(0,6)},{flush:`sync`}),e(()=>{let e=o.value+s.value;M+=1,k.unshift(`batch #${M}: total=${e}`),E.value=k.slice(0,6)});let N=e=>{for(let t=0;t<e;t+=1)s.value+=1;y.value=l.value?`已导入 ${e} 个候选，本轮仍可提交。`:`已导入 ${e} 个候选，同步防线立即阻止提交。`},ne=()=>{if(o.value<=0){y.value=`当前没有已确认名额可释放。`;return}--o.value,y.value=`已释放 1 个已确认名额。`},re=()=>{if(s.value<=0){y.value=`当前没有候选需要移除。`;return}--s.value,y.value=`已移除 1 个候选。`},ie=()=>{if(!l.value){y.value=`提交被同步拦截，请先释放名额或减少候选。`;return}if(s.value===0){y.value=`没有待确认候选。`;return}o.value+=s.value,s.value=0,y.value=`提交成功，候选已转为已确认名额。`},ae=()=>{a.value=12,o.value=8,s.value=0,y.value=`已重置为默认名额池。`},oe=m.value===`error`?`border-error/40 bg-error/10 text-error`:m.value===`warning`?`border-warning/40 bg-warning/10 text-warning`:`border-success/40 bg-success/10 text-success`;return u(()=>x(i(Object.assign(e=>{let t=ee().content.cloneNode(!0).firstChild,c=t.childNodes[0].childNodes[2].childNodes[1],u=t.childNodes[0].childNodes[3].childNodes[0],m=t.childNodes[0].childNodes[3].childNodes[1],x=t.childNodes[0].childNodes[3].childNodes[2],w=t.childNodes[0].childNodes[3].childNodes[3],D=t.childNodes[0].childNodes[3].childNodes[4],O=t.childNodes[0].childNodes[3].childNodes[5],k=t.childNodes[0].childNodes[1].childNodes[0],A=k.parentNode,j=t.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],M=j.parentNode,P=t.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],F=P.parentNode,I=t.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0],L=I.parentNode,R=t.childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],z=R.parentNode,B=t.childNodes[0].childNodes[2].childNodes[1].childNodes[2].childNodes[1],V=B.parentNode,H=t.childNodes[0].childNodes[4].childNodes[0],U=H.parentNode,W=t.childNodes[0].childNodes[5].childNodes[0].childNodes[1].childNodes[0],se=W.parentNode,G=t.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[0],ce=G.parentNode,K=t.childNodes[0].childNodes[5].childNodes[2].childNodes[1].childNodes[0],le=K.parentNode,q;S(()=>{let e=`rounded-box border p-5 ${oe}`,t=e==null?``:String(e);Object.is(q,t)||(q=t,c.className=t)}),u.className=`btn btn-primary`;let J=e=>{let t=()=>N(1);typeof t==`function`&&t(e)};u.addEventListener(`click`,J),r(()=>u.removeEventListener(`click`,J)),m.className=`btn btn-secondary`;let Y=e=>{let t=()=>N(3);typeof t==`function`&&t(e)};m.addEventListener(`click`,Y),r(()=>m.removeEventListener(`click`,Y)),x.className=`btn btn-outline`;let X=e=>{let t=ne;typeof t==`function`&&t(e)};x.addEventListener(`click`,X),r(()=>x.removeEventListener(`click`,X)),w.className=`btn btn-outline`;let Z=e=>{let t=re;typeof t==`function`&&t(e)};w.addEventListener(`click`,Z),r(()=>w.removeEventListener(`click`,Z)),D.className=`btn btn-success`;let ue;S(()=>{let e=!l.value;Object.is(ue,e)||(ue=e,D.disabled=e)});let de=e=>{let t=ie;typeof t==`function`&&t(e)};D.addEventListener(`click`,de),r(()=>D.removeEventListener(`click`,de)),O.className=`btn btn-ghost`;let fe=e=>{let t=ae;typeof t==`function`&&t(e)};O.addEventListener(`click`,fe),r(()=>O.removeEventListener(`click`,fe));let pe=[];S(()=>{pe=n(A,k,pe,te||[],(e,t)=>e.title,(e,t)=>{let n=p(e),r=p(t);return d((e,t,r)=>C(e,r,()=>i(Object.assign(e=>{let t=v(`div`,e);t.className=`rounded-box border border-base-300 bg-base-200/40 p-4`;let r=v(`div`,t);g(t,r),r.className=`text-sm font-semibold text-base-content/80`;let i=_(``);g(r,i),h(i,()=>n.get().title);let a=v(`div`,t);g(t,a),a.className=`mt-2 text-sm leading-6 text-base-content/65`;let o=_(``);return g(a,o),h(o,()=>n.get().text),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let me=_(``);M.insertBefore(me,j),M.removeChild(j),h(me,()=>a.value);let Q=_(``);F.insertBefore(Q,P),F.removeChild(P),h(Q,()=>o.value);let he=_(``);L.insertBefore(he,I),L.removeChild(I),h(he,()=>s.value);let ge=_(``);z.insertBefore(ge,R),z.removeChild(R),h(ge,()=>f.value);let _e=_(``);V.insertBefore(_e,B),V.removeChild(B),h(_e,()=>l.value?`允许提交`:`同步拦截`);let ve=_(``);U.insertBefore(ve,H),U.removeChild(H),h(ve,()=>y.value);let ye=[];S(()=>{let e=b.value||[];ye=n(se,W,ye,e,(e,t)=>e,(e,t)=>{let n=p(e),r=p(t);return d((e,t,r)=>C(e,r,()=>i(Object.assign(e=>{let t=v(`li`,e),r=_(``);return g(t,r),h(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let be=[];S(()=>{let e=T.value||[];be=n(ce,G,be,e,(e,t)=>e,(e,t)=>{let n=p(e),r=p(t);return d((e,t,r)=>C(e,r,()=>i(Object.assign(e=>{let t=v(`li`,e),r=_(``);return g(t,r),h(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let $=[];return S(()=>{let e=E.value||[];$=n(le,K,$,e,(e,t)=>e,(e,t)=>{let n=p(e),r=p(t);return d((e,t,r)=>C(e,r,()=>i(Object.assign(e=>{let t=v(`li`,e),r=_(``);return g(t,r),h(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})))},M=()=>{let e=t(`preview`);return u(()=>x(a(E,()=>({children:[(e,t,n)=>C(e,n,()=>i(Object.assign(e=>{let t=y();return t.appendChild(D().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n,r)=>C(t,r,()=>i(Object.assign(t=>{let n=y(),r=O().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],o=i.childNodes[1];n.appendChild(r),b(a,`role`,`tab`),S(()=>{s(a,`tab ${e.value===`preview`?`tab-active`:``}`)});let c=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};a.addEventListener(`click`,c),l(()=>a.removeEventListener(`click`,c)),b(o,`role`,`tab`),S(()=>{s(o,`tab ${e.value===`code`?`tab-active`:``}`)});let u=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return o.addEventListener(`click`,u),l(()=>o.removeEventListener(`click`,u)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(t,n,r)=>C(t,r,()=>i(Object.assign(t=>{let n=y(),r=k().content.cloneNode(!0),s=r.firstChild,c=s.childNodes[0],l=c.parentNode,u=s.childNodes[1],d=u.parentNode;return n.appendChild(r),f(l,c,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=v(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=v(`div`,t);return g(t,n),n.className=`card-body p-0`,o(n,T,()=>({className:`h-full`,lang:`tsx`,code:A})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=_(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),f(d,u,()=>{let t=e.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>a(j,()=>({}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=_(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>w(()=>{})))};export{M as default};