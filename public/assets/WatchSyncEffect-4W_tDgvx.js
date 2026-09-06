import{An as e,C as t,Dn as n,E as r,Ln as i,Q as a,Qt as o,Vt as s,_n as c,_t as l,at as u,b as d,ct as f,et as p,gn as m,nt as h,pn as g,qt as _,rt as v,st as y,tn as b,vn as x,w as S,wn as C,x as ee,xn as w,xt as T}from"./rue-runtime-HIMg8Lz8.js";import{t as E}from"./Code-DpH7u0gk.js";import{r as D}from"./SidebarPlaygroundExample-BCPRe0hA.js";var te=x('<div class="card bg-base-100 shadow"><div class="card-body gap-5"><p class="text-base-content/70 leading-7">`watchSyncEffect()` 是 `watchEffect(..., { flush: \'sync\' })` 的便捷别名。下面模拟活动名额池：一次导入多个候选时，同步 watcher 会在每一次写入后立即更新提交开关，而默认 `watchEffect()` 会按响应式队列批处理。</p><div class="grid gap-3 lg:grid-cols-3"><!--rue:text-hole:0--></div><div class="grid gap-4 md:grid-cols-[1fr_1.2fr]"><div class="rounded-box border border-base-300 bg-base-200/40 p-5"><div class="text-sm uppercase tracking-[0.24em] text-base-content/50">capacity</div><div class="mt-4 grid grid-cols-3 gap-3 text-center"><div class="rounded-box bg-base-100 p-4"><div class="text-sm text-base-content/60">总名额</div><div class="mt-1 text-3xl font-semibold text-primary"><!--rue:text-hole:1--></div></div><div class="rounded-box bg-base-100 p-4"><div class="text-sm text-base-content/60">已确认</div><div class="mt-1 text-3xl font-semibold"><!--rue:text-hole:2--></div></div><div class="rounded-box bg-base-100 p-4"><div class="text-sm text-base-content/60">候选</div><div class="mt-1 text-3xl font-semibold text-secondary"><!--rue:text-hole:3--></div></div></div></div><div><div class="text-sm uppercase tracking-[0.24em] opacity-70">sync guard</div><div class="mt-3 text-3xl font-semibold"><!--rue:text-hole:4--></div><div class="mt-3 text-sm opacity-80">提交按钮当前状态：<!--rue:text-hole:5--></div></div></div><div class="flex flex-wrap gap-3"><button class="btn btn-primary">导入 1 个候选</button><button class="btn btn-secondary">连续导入 3 个</button><button class="btn btn-outline">释放 1 个名额</button><button class="btn btn-outline">移除 1 个候选</button><button class="btn btn-success">提交候选</button><button class="btn btn-ghost">重置</button></div><div class="rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70"><!--rue:text-hole:6--></div><div class="grid gap-4 xl:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">watchSyncEffect 记录</div><ul class="mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80"><!--rue:text-hole:7--></ul></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">watchEffect flush: \'sync\'</div><ul class="mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80"><!--rue:text-hole:8--></ul></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="text-sm font-medium text-base-content/70">默认 watchEffect 批处理记录</div><ul class="mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80"><!--rue:text-hole:9--></ul></div></div></div></div>'),O=x(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">watchSyncEffect 同步业务防线</h1>`),k=x(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),A=x(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),j=`import { type FC, ref, watchEffect, watchSyncEffect } from '@rue-js/rue';

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

export default WatchSyncEffectDemo;`,ne=[{title:`同步业务防线`,text:`连续写入后，同一调用栈里能立刻读到最新 canCommit，提交动作不会拿到过期判断。`},{title:`即时派生状态`,text:`适合维护轻量状态机、按钮禁用态、校验结果这类需要马上可读的派生值。`},{title:`谨慎使用范围`,text:`同步 watcher 不会合并多次触发，适合简单布尔值或小型派生值，避免监听大数组高频写入。`}],M=()=>{let a=b(12),o=b(8),l=b(0),h=b(!0),v=b(`等待首次同步检查`),y=b(`success`),T=b(`导入候选后，同步防线会立刻判断是否仍可提交。`),E=b([]),D=b([]),O=b([]),k=[],A=[],j=[],M=0,N=0,P=0;i(()=>{let e=o.value+l.value,t=a.value-e;M+=1,h.value=t>=0,y.value=t<0?`error`:t<=2?`warning`:`success`,v.value=t>=0?`还可确认 ${t} 个名额`:`超出 ${Math.abs(t)} 个名额`,k.unshift(`sync #${M}: pending=${l.value}, total=${e}, ok=${t>=0}`),E.value=k.slice(0,6)}),e(()=>{let e=o.value+l.value;N+=1,A.unshift(`flush sync #${N}: pending=${l.value}, total=${e}`),D.value=A.slice(0,6)},{flush:`sync`}),e(()=>{let e=o.value+l.value;P+=1,j.unshift(`batch #${P}: total=${e}`),O.value=j.slice(0,6)});let F=e=>{for(let t=0;t<e;t+=1)l.value+=1;T.value=h.value?`已导入 ${e} 个候选，本轮仍可提交。`:`已导入 ${e} 个候选，同步防线立即阻止提交。`},re=()=>{if(o.value<=0){T.value=`当前没有已确认名额可释放。`;return}--o.value,T.value=`已释放 1 个已确认名额。`},ie=()=>{if(l.value<=0){T.value=`当前没有候选需要移除。`;return}--l.value,T.value=`已移除 1 个候选。`},ae=()=>{if(!h.value){T.value=`提交被同步拦截，请先释放名额或减少候选。`;return}if(l.value===0){T.value=`没有待确认候选。`;return}o.value+=l.value,l.value=0,T.value=`提交成功，候选已转为已确认名额。`},oe=()=>{a.value=12,o.value=8,l.value=0,T.value=`已重置为默认名额池。`},se=y.value===`error`?`border-error/40 bg-error/10 text-error`:y.value===`warning`?`border-warning/40 bg-warning/10 text-warning`:`border-success/40 bg-success/10 text-success`;return _(()=>f(s(Object.assign(e=>{let i=te().content.cloneNode(!0).firstChild,f=i.childNodes[0].childNodes[2].childNodes[1],p=i.childNodes[0].childNodes[3].childNodes[0],_=i.childNodes[0].childNodes[3].childNodes[1],y=i.childNodes[0].childNodes[3].childNodes[2],b=i.childNodes[0].childNodes[3].childNodes[3],k=i.childNodes[0].childNodes[3].childNodes[4],A=i.childNodes[0].childNodes[3].childNodes[5],j=i.childNodes[0].childNodes[1].childNodes[0],M=j.parentNode,N=i.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],P=N.parentNode,I=i.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],ce=I.parentNode,L=i.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0],R=L.parentNode,z=i.childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],B=z.parentNode,V=i.childNodes[0].childNodes[2].childNodes[1].childNodes[2].childNodes[1],H=V.parentNode,U=i.childNodes[0].childNodes[4].childNodes[0],W=U.parentNode,G=i.childNodes[0].childNodes[5].childNodes[0].childNodes[1].childNodes[0],le=G.parentNode,K=i.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[0],ue=K.parentNode,q=i.childNodes[0].childNodes[5].childNodes[2].childNodes[1].childNodes[0],de=q.parentNode,fe;C(()=>{let e=`rounded-box border p-5 ${se}`,t=e==null?``:String(e);Object.is(fe,t)||(fe=t,f.className=t)}),p.className=`btn btn-primary`;let pe=e=>{let t=()=>F(1);typeof t==`function`&&t(e)};p.addEventListener(`click`,pe),n(()=>p.removeEventListener(`click`,pe)),_.className=`btn btn-secondary`;let me=e=>{let t=()=>F(3);typeof t==`function`&&t(e)};_.addEventListener(`click`,me),n(()=>_.removeEventListener(`click`,me)),y.className=`btn btn-outline`;let he=e=>{let t=re;typeof t==`function`&&t(e)};y.addEventListener(`click`,he),n(()=>y.removeEventListener(`click`,he)),b.className=`btn btn-outline`;let ge=e=>{let t=ie;typeof t==`function`&&t(e)};b.addEventListener(`click`,ge),n(()=>b.removeEventListener(`click`,ge)),k.className=`btn btn-success`;let _e;C(()=>{let e=!h.value;Object.is(_e,e)||(_e=e,k.disabled=e)});let ve=e=>{let t=ae;typeof t==`function`&&t(e)};k.addEventListener(`click`,ve),n(()=>k.removeEventListener(`click`,ve)),A.className=`btn btn-ghost`;let J=e=>{let t=oe;typeof t==`function`&&t(e)};A.addEventListener(`click`,J),n(()=>A.removeEventListener(`click`,J));let ye=x(`<div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm font-semibold text-base-content/80">rue:row-text</div><div class="mt-2 text-sm leading-6 text-base-content/65">rue:row-text</div></div>`),Y=[];C(()=>{Y=S(M,j,Y,ne||[],(e,t)=>e.title,(e,t,n)=>{let r=e,i;return ee(e=>{let t=ye().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0];n.data=``,n.parentNode;let a=t.childNodes[1].childNodes[0];a.data=``,a.parentNode;let o;{let e=r.title==null||typeof r.title==`boolean`?``:String(r.title);Object.is(o,e)||(n.textContent=e,o=e)}let s;{let e=r.text==null||typeof r.text==`boolean`?``:String(r.text);Object.is(s,e)||(a.textContent=e,s=e)}return i=()=>{{let e=r.title==null||typeof r.title==`boolean`?``:String(r.title);Object.is(o,e)||(n.textContent=e,o=e)}{let e=r.text==null||typeof r.text==`boolean`?``:String(r.text);Object.is(s,e)||(a.textContent=e,s=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>d(Y));let be=c(``);P.insertBefore(be,N),P.removeChild(N),w(be,()=>a.value);let xe=c(``);ce.insertBefore(xe,I),ce.removeChild(I),w(xe,()=>o.value);let Se=c(``);R.insertBefore(Se,L),R.removeChild(L),w(Se,()=>l.value);let Ce=c(``);B.insertBefore(Ce,z),B.removeChild(z),w(Ce,()=>v.value);let we=c(``);H.insertBefore(we,V),H.removeChild(V),w(we,()=>h.value?`允许提交`:`同步拦截`);let X=c(``);W.insertBefore(X,U),W.removeChild(U),w(X,()=>T.value);let Z=[];C(()=>{let e=E.value||[];Z=S(le,G,Z,e,(e,t)=>e,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=m(`li`,e),n=c(``);return g(t,n),w(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(Z));let Q=[];C(()=>{let e=D.value||[];Q=S(ue,K,Q,e,(e,t)=>e,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=m(`li`,e),n=c(``);return g(t,n),w(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(Q));let $=[];return C(()=>{let e=O.value||[];$=S(de,q,$,e,(e,t)=>e,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=m(`li`,e),n=c(``);return g(t,n),w(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d($)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{})))},N=()=>{let e=b(`preview`);return _(()=>f(v(D,()=>({children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return t.appendChild(O().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n,i)=>r(t,i,()=>s(Object.assign(t=>{let n=l(),r=k().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[0],c=i.childNodes[1];n.appendChild(r),T(s,`role`,`tab`),C(()=>{a(s,`tab ${e.value===`preview`?`tab-active`:``}`)});let u=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};s.addEventListener(`click`,u),o(()=>s.removeEventListener(`click`,u)),T(c,`role`,`tab`),C(()=>{a(c,`tab ${e.value===`code`?`tab-active`:``}`)});let d=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return c.addEventListener(`click`,d),o(()=>c.removeEventListener(`click`,d)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(t,n,i)=>r(t,i,()=>s(Object.assign(t=>{let n=l(),r=A().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],o=a.parentNode,u=i.childNodes[1],d=u.parentNode;return n.appendChild(r),h(o,a,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=m(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=m(`div`,t);return g(t,n),n.className=`card-body p-0`,y(n,E,()=>({className:`h-full`,lang:`tsx`,code:j})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>s(Object.assign(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),h(d,u,()=>{let t=e.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>v(M,()=>({}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>s(Object.assign(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>p(()=>{})))};export{N as default};