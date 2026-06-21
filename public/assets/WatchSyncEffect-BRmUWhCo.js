import{$t as e,Jt as t,Q as n,St as r,Vt as i,Z as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,pt as m,rt as h,t as g,tt as _,vt as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b,n as x}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as ee}from"./Code-4SUSUwRg.js";import{r as te}from"./SidebarPlaygroundExample-BEWYUWOl.js";var ne=`import { type FC, ref, watchEffect, watchSyncEffect } from '@rue-js/rue';

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

export default WatchSyncEffectDemo;`,re=[{title:`同步业务防线`,text:`连续写入后，同一调用栈里能立刻读到最新 canCommit，提交动作不会拿到过期判断。`},{title:`即时派生状态`,text:`适合维护轻量状态机、按钮禁用态、校验结果这类需要马上可读的派生值。`},{title:`谨慎使用范围`,text:`同步 watcher 不会合并多次触发，适合简单布尔值或小型派生值，避免监听大数组高频写入。`}],ie=()=>{let g=b(`useSetup:0:0`,()=>c(()=>{let e=b(`ref:1:0`,()=>t(12)),n=b(`ref:1:1`,()=>t(8)),a=b(`ref:1:2`,()=>t(0)),o=b(`ref:1:3`,()=>t(!0)),s=b(`ref:1:4`,()=>t(`等待首次同步检查`)),c=b(`ref:1:5`,()=>t(`success`)),l=b(`ref:1:6`,()=>t(`导入候选后，同步防线会立刻判断是否仍可提交。`)),u=b(`ref:1:7`,()=>t([])),d=b(`ref:1:8`,()=>t([])),f=b(`ref:1:9`,()=>t([])),p=[],m=[],h=[],g=0,_=0,v=0;return i(()=>{let t=n.value+a.value,r=e.value-t;g+=1,o.value=r>=0,c.value=r<0?`error`:r<=2?`warning`:`success`,s.value=r>=0?`还可确认 ${r} 个名额`:`超出 ${Math.abs(r)} 个名额`,p.unshift(`sync #${g}: pending=${a.value}, total=${t}, ok=${r>=0}`),u.value=p.slice(0,6)}),b(`watchEffect:1:10`,()=>y(()=>{let e=n.value+a.value;_+=1,m.unshift(`flush sync #${_}: pending=${a.value}, total=${e}`),d.value=m.slice(0,6)},{flush:`sync`})),b(`watchEffect:1:11`,()=>y(()=>{let e=n.value+a.value;v+=1,h.unshift(`batch #${v}: total=${e}`),f.value=h.slice(0,6)})),{capacity:e,confirmed:n,incoming:a,canCommit:o,guardText:s,guardTone:c,actionResult:l,syncLog:u,flushSyncLog:d,batchedLog:f,syncRecords:p,flushSyncRecords:m,batchedRecords:h,importCandidates:e=>{for(let t=0;t<e;t+=1)a.value+=1;l.value=o.value?`已导入 ${e} 个候选，本轮仍可提交。`:`已导入 ${e} 个候选，同步防线立即阻止提交。`},releaseSeat:()=>{if(n.value<=0){l.value=`当前没有已确认名额可释放。`;return}--n.value,l.value=`已释放 1 个已确认名额。`},trimIncoming:()=>{if(a.value<=0){l.value=`当前没有候选需要移除。`;return}--a.value,l.value=`已移除 1 个候选。`},commit:()=>{if(!o.value){l.value=`提交被同步拦截，请先释放名额或减少候选。`;return}if(a.value===0){l.value=`没有待确认候选。`;return}n.value+=a.value,a.value=0,l.value=`提交成功，候选已转为已确认名额。`},reset:()=>{e.value=12,n.value=8,a.value=0,l.value=`已重置为默认名额池。`},toneClass:b(`computed:1:12`,()=>r(()=>c.value===`error`?`border-error/40 bg-error/10 text-error`:c.value===`warning`?`border-warning/40 bg-warning/10 text-warning`:`border-success/40 bg-success/10 text-success`)),syncRun:g,flushSyncRun:_,batchedRun:v}})),{capacity:ee,confirmed:te,incoming:ne,canCommit:ie,guardText:ae,guardTone:S,actionResult:oe,syncLog:se,flushSyncLog:ce,batchedLog:le,syncRecords:ue,flushSyncRecords:de,batchedRecords:fe,importCandidates:pe,releaseSeat:me,trimIncoming:he,commit:ge,reset:_e,toneClass:ve}=g,{syncRun:C,flushSyncRun:w,batchedRun:ye}=g;return u(t=>{let r=f(`div`,t);o(r,`card bg-base-100 shadow`);let i=f(`div`,r);n(r,i),o(i,`card-body gap-5`);let c=f(`p`,i);n(i,c),o(c,`text-base-content/70 leading-7`),n(c,h("`watchSyncEffect()` 是 `watchEffect(..., "));let g=l(c);n(c,g),v(g,`{`),n(c,h(` flush: 'sync' `));let b=l(c);n(c,b),v(b,`}`),n(c,h(")` 的便捷别名。下面模拟活动名额池：一次导入多个候选时，同步 watcher 会在每一次写入后立即更新提交开关，而默认 `watchEffect()` 会按响应式队列批处理。"));let S=f(`div`,i);n(i,S),o(S,`grid gap-3 lg:grid-cols-3`);let ue=s(`rue:list:start`),de=s(`rue:list:end`);n(S,ue),n(S,de);let fe=new Map;y(()=>{fe=x({items:re||[],getKey:(e,t)=>e.title,elements:fe,parent:S,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(t,r,i,a,c)=>{p(u(()=>{let r=_(),i=f(`div`,r);n(r,i),y(()=>{d(i,`key`,String(t.title))}),o(i,`rounded-box border border-base-300 bg-base-200/40 p-4`);let a=f(`div`,i);n(i,a),o(a,`text-sm font-semibold text-base-content/80`);let c=s(`rue:slot:anchor`);n(a,c),y(()=>{let n=t.title;e(()=>p(n,a,c))});let l=f(`div`,i);n(i,l),o(l,`mt-2 text-sm leading-6 text-base-content/65`);let u=s(`rue:slot:anchor`);return n(l,u),y(()=>{let n=t.text;e(()=>p(n,l,u))}),r}),r,i)}})});let C=f(`div`,i);n(i,C),o(C,`grid gap-4 md:grid-cols-[1fr_1.2fr]`);let w=f(`div`,C);n(C,w),o(w,`rounded-box border border-base-300 bg-base-200/40 p-5`);let ye=f(`div`,w);n(w,ye),o(ye,`text-sm uppercase tracking-[0.24em] text-base-content/50`),n(ye,h(`capacity`));let T=f(`div`,w);n(w,T),o(T,`mt-4 grid grid-cols-3 gap-3 text-center`);let E=f(`div`,T);n(T,E),o(E,`rounded-box bg-base-100 p-4`);let be=f(`div`,E);n(E,be),o(be,`text-sm text-base-content/60`),n(be,h(`总名额`));let D=f(`div`,E);n(E,D),o(D,`mt-1 text-3xl font-semibold text-primary`);let xe=l(D);n(D,xe),y(()=>{v(xe,ee.value)});let O=f(`div`,T);n(T,O),o(O,`rounded-box bg-base-100 p-4`);let k=f(`div`,O);n(O,k),o(k,`text-sm text-base-content/60`),n(k,h(`已确认`));let A=f(`div`,O);n(O,A),o(A,`mt-1 text-3xl font-semibold`);let Se=l(A);n(A,Se),y(()=>{v(Se,te.value)});let j=f(`div`,T);n(T,j),o(j,`rounded-box bg-base-100 p-4`);let M=f(`div`,j);n(j,M),o(M,`text-sm text-base-content/60`),n(M,h(`候选`));let N=f(`div`,j);n(j,N),o(N,`mt-1 text-3xl font-semibold text-secondary`);let Ce=l(N);n(N,Ce),y(()=>{v(Ce,ne.value)});let P=f(`div`,C);n(C,P),y(()=>{o(P,`rounded-box border p-5 ${ve.get()}`)});let F=f(`div`,P);n(P,F),o(F,`text-sm uppercase tracking-[0.24em] opacity-70`),n(F,h(`sync guard`));let I=f(`div`,P);n(P,I),o(I,`mt-3 text-3xl font-semibold`);let we=l(I);n(I,we),y(()=>{v(we,ae.value)});let L=f(`div`,P);n(P,L),o(L,`mt-3 text-sm opacity-80`),n(L,h(`提交按钮当前状态：`));let Te=l(L);n(L,Te),y(()=>{v(Te,ie.value?`允许提交`:`同步拦截`)});let R=f(`div`,i);n(i,R),o(R,`flex flex-wrap gap-3`);let z=f(`button`,R);n(R,z),o(z,`btn btn-primary`),a(z,`click`,()=>pe(1)),n(z,h(`导入 1 个候选`));let B=f(`button`,R);n(R,B),o(B,`btn btn-secondary`),a(B,`click`,()=>pe(3)),n(B,h(`连续导入 3 个`));let V=f(`button`,R);n(R,V),o(V,`btn btn-outline`),a(V,`click`,me),n(V,h(`释放 1 个名额`));let H=f(`button`,R);n(R,H),o(H,`btn btn-outline`),a(H,`click`,he),n(H,h(`移除 1 个候选`));let U=f(`button`,R);n(R,U),o(U,`btn btn-success`),y(()=>{m(U,!ie.value)}),a(U,`click`,ge),n(U,h(`提交候选`));let W=f(`button`,R);n(R,W),o(W,`btn btn-ghost`),a(W,`click`,_e),n(W,h(`重置`));let G=f(`div`,i);n(i,G),o(G,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let Ee=l(G);n(G,Ee),y(()=>{v(Ee,oe.value)});let K=f(`div`,i);n(i,K),o(K,`grid gap-4 xl:grid-cols-3`);let q=f(`div`,K);n(K,q),o(q,`rounded-box border border-base-300 bg-base-100 p-4`);let De=f(`div`,q);n(q,De),o(De,`text-sm font-medium text-base-content/70`),n(De,h(`watchSyncEffect 记录`));let J=f(`ul`,q);n(q,J),o(J,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Oe=s(`rue:list:start`),ke=s(`rue:list:end`);n(J,Oe),n(J,ke);let Ae=new Map;y(()=>{Ae=x({items:se.value||[],getKey:(e,t)=>e,elements:Ae,parent:J,before:ke,singleRoot:!0,trackIndex:!1,start:Oe,renderItem:(e,t,r,i,a)=>{p(u(()=>{let t=_(),r=f(`li`,t);n(t,r),y(()=>{d(r,`key`,String(e))});let i=l(r);return n(r,i),y(()=>{v(i,e)}),t}),t,r)}})});let Y=f(`div`,K);n(K,Y),o(Y,`rounded-box border border-base-300 bg-base-100 p-4`);let je=f(`div`,Y);n(Y,je),o(je,`text-sm font-medium text-base-content/70`),n(je,h(`watchEffect flush: 'sync'`));let X=f(`ul`,Y);n(Y,X),o(X,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Me=s(`rue:list:start`),Ne=s(`rue:list:end`);n(X,Me),n(X,Ne);let Pe=new Map;y(()=>{Pe=x({items:ce.value||[],getKey:(e,t)=>e,elements:Pe,parent:X,before:Ne,singleRoot:!0,trackIndex:!1,start:Me,renderItem:(e,t,r,i,a)=>{p(u(()=>{let t=_(),r=f(`li`,t);n(t,r),y(()=>{d(r,`key`,String(e))});let i=l(r);return n(r,i),y(()=>{v(i,e)}),t}),t,r)}})});let Z=f(`div`,K);n(K,Z),o(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=f(`div`,Z);n(Z,Q),o(Q,`text-sm font-medium text-base-content/70`),n(Q,h(`默认 watchEffect 批处理记录`));let $=f(`ul`,Z);n(Z,$),o($,`mt-3 space-y-2 font-mono text-sm leading-6 text-base-content/80`);let Fe=s(`rue:list:start`),Ie=s(`rue:list:end`);n($,Fe),n($,Ie);let Le=new Map;return y(()=>{Le=x({items:le.value||[],getKey:(e,t)=>e,elements:Le,parent:$,before:Ie,singleRoot:!0,trackIndex:!1,start:Fe,renderItem:(e,t,r,i,a)=>{p(u(()=>{let t=_(),r=f(`li`,t);n(t,r),y(()=>{d(r,`key`,String(e))});let i=l(r);return n(r,i),y(()=>{v(i,e)}),t}),t,r)}})}),r})},ae=()=>{let{activeTab:r}=b(`useSetup:0:0:dup1`,()=>c(()=>({activeTab:b(`ref:1:13`,()=>t(`preview`))})));return u(t=>{let i=_(),c=s(`rue:component:anchor`);return n(i,c),p(g(te,{children:u(()=>{let t=_(),i=f(`h1`,t);n(t,i),o(i,`text-5xl font-semibold mb-4 md:mb-4`),n(i,h(`watchSyncEffect 同步业务防线`));let c=f(`div`,t);n(t,c),d(c,`role`,`tablist`),o(c,`tabs tabs-box`);let l=f(`button`,c);n(c,l),d(l,`role`,`tab`),y(()=>{o(l,`tab ${r.value===`preview`?`tab-active`:``}`)}),a(l,`click`,()=>{r.value=`preview`}),n(l,h(`效果`));let m=f(`button`,c);n(c,m),d(m,`role`,`tab`),y(()=>{o(m,`tab ${r.value===`code`?`tab-active`:``}`)}),a(m,`click`,()=>{r.value=`code`}),n(m,h(`代码`));let v=f(`div`,t);n(t,v),o(v,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=s(`rue:slot:anchor`);n(v,b),y(()=>{let t=r.value===`code`?u(()=>{let t=_(),r=f(`div`,t);n(t,r),o(r,`card bg-base-100 shadow overflow-auto`);let i=f(`div`,r);n(r,i),o(i,`card-body p-0`);let a=s(`rue:component:anchor`);return n(i,a),y(()=>{let t=g(ee,{className:`h-full`,lang:`tsx`,code:ne});e(()=>p(t,i,a))}),t}):``;e(()=>p(t,v,b))}),n(v,h(` `));let x=s(`rue:slot:anchor`);return n(v,x),y(()=>{let t=r.value===`preview`?u(()=>{let e=_(),t=s(`rue:component:anchor`);return n(e,t),p(g(ie,{}),e,t),e}):``;e(()=>p(t,v,x))}),t})}),i,c),i})};export{ae as default};