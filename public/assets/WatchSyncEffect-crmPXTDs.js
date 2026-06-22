import{Q as e,Ut as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,ht as c,it as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,t as g,tn as _,tt as v,wt as y}from"./vapor-runtime-x7F5M-49.js";import{a as b,n as x}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as ee}from"./Code-C5NjdoiC.js";import{r as te}from"./SidebarPlaygroundExample-DpItFif-.js";var ne=`import { type FC, ref, watchEffect, watchSyncEffect } from '@rue-js/rue';

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

export default WatchSyncEffectDemo;`,re=[{title:`同步业务防线`,text:`连续写入后，同一调用栈里能立刻读到最新 canCommit，提交动作不会拿到过期判断。`},{title:`即时派生状态`,text:`适合维护轻量状态机、按钮禁用态、校验结果这类需要马上可读的派生值。`},{title:`谨慎使用范围`,text:`同步 watcher 不会合并多次触发，适合简单布尔值或小型派生值，避免监听大数组高频写入。`}],ie=()=>{let g=b(`useSetup:0:0`,()=>p(()=>{let e=b(`ref:1:0`,()=>r(12)),i=b(`ref:1:1`,()=>r(8)),a=b(`ref:1:2`,()=>r(0)),o=b(`ref:1:3`,()=>r(!0)),s=b(`ref:1:4`,()=>r(`等待首次同步检查`)),c=b(`ref:1:5`,()=>r(`success`)),l=b(`ref:1:6`,()=>r(`导入候选后，同步防线会立刻判断是否仍可提交。`)),u=b(`ref:1:7`,()=>r([])),d=b(`ref:1:8`,()=>r([])),f=b(`ref:1:9`,()=>r([])),p=[],m=[],h=[],g=0,_=0,v=0;return t(()=>{let t=i.value+a.value,n=e.value-t;g+=1,o.value=n>=0,c.value=n<0?`error`:n<=2?`warning`:`success`,s.value=n>=0?`还可确认 ${n} 个名额`:`超出 ${Math.abs(n)} 个名额`,p.unshift(`sync #${g}: pending=${a.value}, total=${t}, ok=${n>=0}`),u.value=p.slice(0,6)}),b(`watchEffect:1:10`,()=>n(()=>{let e=i.value+a.value;_+=1,m.unshift(`flush sync #${_}: pending=${a.value}, total=${e}`),d.value=m.slice(0,6)},{flush:`sync`})),b(`watchEffect:1:11`,()=>n(()=>{let e=i.value+a.value;v+=1,h.unshift(`batch #${v}: total=${e}`),f.value=h.slice(0,6)})),{capacity:e,confirmed:i,incoming:a,canCommit:o,guardText:s,guardTone:c,actionResult:l,syncLog:u,flushSyncLog:d,batchedLog:f,syncRecords:p,flushSyncRecords:m,batchedRecords:h,importCandidates:e=>{for(let t=0;t<e;t+=1)a.value+=1;l.value=o.value?`已导入 ${e} 个候选，本轮仍可提交。`:`已导入 ${e} 个候选，同步防线立即阻止提交。`},releaseSeat:()=>{if(i.value<=0){l.value=`当前没有已确认名额可释放。`;return}--i.value,l.value=`已释放 1 个已确认名额。`},trimIncoming:()=>{if(a.value<=0){l.value=`当前没有候选需要移除。`;return}--a.value,l.value=`已移除 1 个候选。`},commit:()=>{if(!o.value){l.value=`提交被同步拦截，请先释放名额或减少候选。`;return}if(a.value===0){l.value=`没有待确认候选。`;return}i.value+=a.value,a.value=0,l.value=`提交成功，候选已转为已确认名额。`},reset:()=>{e.value=12,i.value=8,a.value=0,l.value=`已重置为默认名额池。`},toneClass:b(`computed:1:12`,()=>y(()=>c.value===`error`?`border-error/40 bg-error/10 text-error`:c.value===`warning`?`border-warning/40 bg-warning/10 text-warning`:`border-success/40 bg-success/10 text-success`)),syncRun:g,flushSyncRun:_,batchedRun:v}})),{capacity:ee,confirmed:te,incoming:ne,canCommit:ie,guardText:ae,guardTone:S,actionResult:oe,syncLog:se,flushSyncLog:ce,batchedLog:le,syncRecords:ue,flushSyncRecords:de,batchedRecords:fe,importCandidates:pe,releaseSeat:me,trimIncoming:he,commit:ge,reset:_e,toneClass:ve}=g,{syncRun:C,flushSyncRun:w,batchedRun:ye}=g;return u(t=>{let r=h(`div`,t);m(r,`card bg-base-100 shadow`);let p=h(`div`,r);e(r,p),m(p,`card-body gap-5`);let g=h(`p`,p);e(p,g),m(g,`text-base-content/70 leading-7`),e(g,l("`watchSyncEffect()` 是 `watchEffect(..., "));let y=a(g);e(g,y),o(y,`{`),e(g,l(` flush: 'sync' `));let b=a(g);e(g,b),o(b,`}`),e(g,l(")` 的便捷别名。下面模拟活动名额池：一次导入多个候选时，同步 watcher 会在每一次写入后立即更新提交开关，而默认 `watchEffect()` 会按响应式队列批处理。"));let S=h(`div`,p);e(p,S),m(S,`grid gap-3 lg:grid-cols-3`);let ue=v(`rue:list:start`),de=v(`rue:list:end`);e(S,ue),e(S,de);let fe=new Map;n(()=>{fe=x({items:re||[],getKey:(e,t)=>e.title,elements:fe,parent:S,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(t,r,i,a,o)=>{f(u(()=>{let r=d(),i=h(`div`,r);e(r,i),n(()=>{s(i,`key`,String(t.title))}),m(i,`rounded-box border border-base-300 bg-base-200/40 p-4`);let a=h(`div`,i);e(i,a),m(a,`text-sm font-semibold text-base-content/80`);let o=v(`rue:slot:anchor`);e(a,o),n(()=>{let e=t.title;_(()=>f(e,a,o))});let c=h(`div`,i);e(i,c),m(c,`mt-2 text-sm leading-6 text-base-content/65`);let l=v(`rue:slot:anchor`);return e(c,l),n(()=>{let e=t.text;_(()=>f(e,c,l))}),r}),r,i)}})});let C=h(`div`,p);e(p,C),m(C,`grid gap-4 md:grid-cols-[1fr_1.2fr]`);let w=h(`div`,C);e(C,w),m(w,`rounded-box border border-base-300 bg-base-200/40 p-5`);let ye=h(`div`,w);e(w,ye),m(ye,`text-sm uppercase tracking-[0.24em] text-base-content/50`),e(ye,l(`capacity`));let T=h(`div`,w);e(w,T),m(T,`mt-4 grid grid-cols-3 gap-3 text-center`);let E=h(`div`,T);e(T,E),m(E,`rounded-box bg-base-100 p-4`);let be=h(`div`,E);e(E,be),m(be,`text-sm text-base-content/60`),e(be,l(`总名额`));let D=h(`div`,E);e(E,D),m(D,`mt-1 text-3xl font-semibold text-primary`);let xe=a(D);e(D,xe),n(()=>{o(xe,ee.value)});let O=h(`div`,T);e(T,O),m(O,`rounded-box bg-base-100 p-4`);let k=h(`div`,O);e(O,k),m(k,`text-sm text-base-content/60`),e(k,l(`已确认`));let A=h(`div`,O);e(O,A),m(A,`mt-1 text-3xl font-semibold`);let Se=a(A);e(A,Se),n(()=>{o(Se,te.value)});let j=h(`div`,T);e(T,j),m(j,`rounded-box bg-base-100 p-4`);let M=h(`div`,j);e(j,M),m(M,`text-sm text-base-content/60`),e(M,l(`候选`));let N=h(`div`,j);e(j,N),m(N,`mt-1 text-3xl font-semibold text-secondary`);let Ce=a(N);e(N,Ce),n(()=>{o(Ce,ne.value)});let P=h(`div`,C);e(C,P),n(()=>{m(P,`rounded-box border p-5 ${ve.get()}`)});let F=h(`div`,P);e(P,F),m(F,`text-sm uppercase tracking-[0.24em] opacity-70`),e(F,l(`sync guard`));let I=h(`div`,P);e(P,I),m(I,`mt-3 text-3xl font-semibold`);let we=a(I);e(I,we),n(()=>{o(we,ae.value)});let L=h(`div`,P);e(P,L),m(L,`mt-3 text-sm opacity-80`),e(L,l(`提交按钮当前状态：`));let Te=a(L);e(L,Te),n(()=>{o(Te,ie.value?`允许提交`:`同步拦截`)});let R=h(`div`,p);e(p,R),m(R,`flex flex-wrap gap-3`);let z=h(`button`,R);e(R,z),m(z,`btn btn-primary`),i(z,`click`,()=>pe(1)),e(z,l(`导入 1 个候选`));let B=h(`button`,R);e(R,B),m(B,`btn btn-secondary`),i(B,`click`,()=>pe(3)),e(B,l(`连续导入 3 个`));let V=h(`button`,R);e(R,V),m(V,`btn btn-outline`),i(V,`click`,me),e(V,l(`释放 1 个名额`));let H=h(`button`,R);e(R,H),m(H,`btn btn-outline`),i(H,`click`,he),e(H,l(`移除 1 个候选`));let U=h(`button`,R);e(R,U),m(U,`btn btn-success`),n(()=>{c(U,!ie.value)}),i(U,`click`,ge),e(U,l(`提交候选`));let W=h(`button`,R);e(R,W),m(W,`btn btn-ghost`),i(W,`click`,_e),e(W,l(`重置`));let G=h(`div`,p);e(p,G),m(G,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let Ee=a(G);e(G,Ee),n(()=>{o(Ee,oe.value)});let K=h(`div`,p);e(p,K),m(K,`grid gap-4 xl:grid-cols-3`);let q=h(`div`,K);e(K,q),m(q,`rounded-box border border-base-300 bg-base-100 p-4`);let De=h(`div`,q);e(q,De),m(De,`text-sm font-medium text-base-content/70`),e(De,l(`watchSyncEffect 记录`));let J=h(`ul`,q);e(q,J),m(J,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Oe=v(`rue:list:start`),ke=v(`rue:list:end`);e(J,Oe),e(J,ke);let Ae=new Map;n(()=>{Ae=x({items:se.value||[],getKey:(e,t)=>e,elements:Ae,parent:J,before:ke,singleRoot:!0,trackIndex:!1,start:Oe,renderItem:(t,r,i,c,l)=>{f(u(()=>{let r=d(),i=h(`li`,r);e(r,i),n(()=>{s(i,`key`,String(t))});let c=a(i);return e(i,c),n(()=>{o(c,t)}),r}),r,i)}})});let Y=h(`div`,K);e(K,Y),m(Y,`rounded-box border border-base-300 bg-base-100 p-4`);let je=h(`div`,Y);e(Y,je),m(je,`text-sm font-medium text-base-content/70`),e(je,l(`watchEffect flush: 'sync'`));let X=h(`ul`,Y);e(Y,X),m(X,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Me=v(`rue:list:start`),Ne=v(`rue:list:end`);e(X,Me),e(X,Ne);let Pe=new Map;n(()=>{Pe=x({items:ce.value||[],getKey:(e,t)=>e,elements:Pe,parent:X,before:Ne,singleRoot:!0,trackIndex:!1,start:Me,renderItem:(t,r,i,c,l)=>{f(u(()=>{let r=d(),i=h(`li`,r);e(r,i),n(()=>{s(i,`key`,String(t))});let c=a(i);return e(i,c),n(()=>{o(c,t)}),r}),r,i)}})});let Z=h(`div`,K);e(K,Z),m(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=h(`div`,Z);e(Z,Q),m(Q,`text-sm font-medium text-base-content/70`),e(Q,l(`默认 watchEffect 批处理记录`));let $=h(`ul`,Z);e(Z,$),m($,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Fe=v(`rue:list:start`),Ie=v(`rue:list:end`);e($,Fe),e($,Ie);let Le=new Map;return n(()=>{Le=x({items:le.value||[],getKey:(e,t)=>e,elements:Le,parent:$,before:Ie,singleRoot:!0,trackIndex:!1,start:Fe,renderItem:(t,r,i,c,l)=>{f(u(()=>{let r=d(),i=h(`li`,r);e(r,i),n(()=>{s(i,`key`,String(t))});let c=a(i);return e(i,c),n(()=>{o(c,t)}),r}),r,i)}})}),r})},ae=()=>{let{activeTab:t}=b(`useSetup:0:0:dup1`,()=>p(()=>({activeTab:b(`ref:1:13`,()=>r(`preview`))})));return u(r=>{let a=d(),o=v(`rue:component:anchor`);return e(a,o),f(g(te,{children:u(()=>{let r=d(),a=h(`h1`,r);e(r,a),m(a,`text-5xl font-semibold mb-4 md:mb-4`),e(a,l(`watchSyncEffect 同步业务防线`));let o=h(`div`,r);e(r,o),s(o,`role`,`tablist`),m(o,`tabs tabs-box`);let c=h(`button`,o);e(o,c),s(c,`role`,`tab`),n(()=>{m(c,`tab ${t.value===`preview`?`tab-active`:``}`)}),i(c,`click`,()=>{t.value=`preview`}),e(c,l(`效果`));let p=h(`button`,o);e(o,p),s(p,`role`,`tab`),n(()=>{m(p,`tab ${t.value===`code`?`tab-active`:``}`)}),i(p,`click`,()=>{t.value=`code`}),e(p,l(`代码`));let y=h(`div`,r);e(r,y),m(y,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=v(`rue:slot:anchor`);e(y,b),n(()=>{let r=t.value===`code`?u(()=>{let t=d(),r=h(`div`,t);e(t,r),m(r,`card bg-base-100 shadow overflow-auto`);let i=h(`div`,r);e(r,i),m(i,`card-body p-0`);let a=v(`rue:component:anchor`);return e(i,a),n(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:ne});_(()=>f(e,i,a))}),t}):``;_(()=>f(r,y,b))}),e(y,l(` `));let x=v(`rue:slot:anchor`);return e(y,x),n(()=>{let n=t.value===`preview`?u(()=>{let t=d(),n=v(`rue:component:anchor`);return e(t,n),f(g(ie,{}),t,n),t}):``;_(()=>f(n,y,x))}),r})}),a,o),a})};export{ae as default};