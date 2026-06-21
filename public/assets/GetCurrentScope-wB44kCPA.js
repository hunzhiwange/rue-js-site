import{$t as e,Jt as t,Q as n,St as r,Z as i,dt as a,et as o,in as s,it as c,kt as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,vt as _,wt as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b,n as x}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as S}from"./Code-4SUSUwRg.js";import{r as C}from"./SidebarPlaygroundExample-BEWYUWOl.js";var w=e=>u(()=>{let t=v();e.scopeRef.value=t;let n=document.createElement(`section`),r=document.createElement(`h2`),i=document.createElement(`p`),a=document.createElement(`p`);return n.className=`rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3`,r.className=`text-xl font-semibold`,i.className=`text-sm text-base-content/70`,a.className=`font-mono text-sm`,r.textContent=`Vapor scope probe`,n.append(r,i,a),l(()=>{e.report(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),b(`watchEffect:1:0`,()=>y(()=>{let n=v()===t,r=t?.active===!0?`active`:`stopped`;i.textContent=n?`watchEffect 重跑时仍处于同一个 scope（${r}）`:`watchEffect 没有读到创建时的 scope`,a.textContent=`count = ${e.count.value}`})),n}),T=()=>{let{activeTab:l,count:T,mounted:E,scopeRef:D,sequence:O,logs:k,report:A,checkOutsideScope:j,runInsideCapturedScope:M,toggleProbe:N,scopeLabel:P}=b(`useSetup:0:0`,()=>s(()=>{let e=b(`ref:1:1`,()=>t(`preview`)),n=b(`ref:1:2`,()=>t(0)),i=b(`ref:1:3`,()=>t(!0)),a=b(`ref:1:4`,()=>t(void 0)),o=b(`ref:1:5`,()=>t(0)),s=b(`ref:1:6`,()=>t([`等待操作：点击按钮观察当前 effect scope`])),c=e=>{o.value+=1,s.value=[`${o.value}. ${e}`,...s.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)};return{activeTab:e,count:n,mounted:i,scopeRef:a,sequence:o,logs:s,report:c,checkOutsideScope:()=>{c(v()?`事件处理器中意外读到了 active scope`:`事件处理器默认没有 active scope，getCurrentScope() 返回 undefined`)},runInsideCapturedScope:()=>{let e=a.value;if(!e?.active){c(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{c(v()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},toggleProbe:()=>{i.value=!i.value,c(i.value?`probe 已重新挂载`:`probe 已卸载`)},scopeLabel:b(`computed:1:7`,()=>r(()=>a.value?a.value.active?`active`:`stopped`:`未捕获`))}}));return u(t=>{let r=g(),s=o(`rue:component:anchor`);return n(r,s),p(h(C,{children:u(()=>{let t=g(),r=f(`h1`,t);n(t,r),a(r,`text-5xl font-semibold mb-4 md:mb-4`),n(r,m(`getCurrentScope 作用域探针`));let s=f(`div`,t);n(t,s),d(s,`role`,`tablist`),a(s,`tabs tabs-box`);let v=f(`button`,s);n(s,v),d(v,`role`,`tab`),y(()=>{a(v,`tab ${l.value===`preview`?`tab-active`:``}`)}),i(v,`click`,()=>{l.value=`preview`}),n(v,m(`效果`));let b=f(`button`,s);n(s,b),d(b,`role`,`tab`),y(()=>{a(b,`tab ${l.value===`code`?`tab-active`:``}`)}),i(b,`click`,()=>{l.value=`code`}),n(b,m(`代码`));let C=f(`div`,t);n(t,C),a(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=o(`rue:slot:anchor`);n(C,O),y(()=>{let t=l.value===`code`?u(()=>{let t=g(),r=f(`div`,t);n(t,r),a(r,`card bg-base-100 shadow overflow-auto`);let i=f(`div`,r);n(r,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return n(i,s),y(()=>{let t=h(S,{className:`h-full`,lang:`tsx`,code:`import {
  type EffectScope,
  type FC,
  getCurrentScope,
  onScopeDispose,
  ref,
  vapor,
  watchEffect,
} from '@rue-js/rue';

const ScopeProbe: FC<{
  count: { value: number };
  scopeRef: { value: EffectScope | undefined };
  report: (message: string) => void;
}> = props => {
  return vapor(() => {
    const scope = getCurrentScope();
    props.scopeRef.value = scope;

    const root = document.createElement('section');
    const status = document.createElement('p');
    const countText = document.createElement('p');
    root.append(status, countText);

    onScopeDispose(() => {
      props.report('scope disposed');
    });

    watchEffect(() => {
      status.textContent =
        getCurrentScope() === scope ? 'same active scope' : 'missing scope';
      countText.textContent = \`count = \${props.count.value}\`;
    });

    return root;
  });
};

const GetCurrentScopeDemo: FC = () => {
  const count = ref(0);
  const scopeRef = ref<EffectScope | undefined>(undefined);

  return (
    <div>
      <button onClick={() => count.value++}>更新 count</button>
      <button
        onClick={() => {
          scopeRef.value?.run(() => {
            console.log(getCurrentScope() === scopeRef.value);
          });
        }}
      >
        scope.run()
      </button>
      <ScopeProbe count={count} scopeRef={scopeRef} report={console.log} />
    </div>
  );
};`});e(()=>p(t,i,s))}),t}):``;e(()=>p(t,C,O))}),n(C,m(` `));let F=o(`rue:slot:anchor`);return n(C,F),y(()=>{let t=l.value===`preview`?u(()=>{let t=g(),r=f(`div`,t);n(t,r),a(r,`card bg-base-100 shadow`);let s=f(`div`,r);n(r,s),a(s,`card-body gap-5`);let l=f(`div`,s);n(s,l),a(l,`flex flex-wrap items-center gap-3`);let v=f(`button`,l);n(l,v),a(v,`btn btn-primary`),i(v,`click`,()=>T.value++),n(v,m(`更新 count`));let b=f(`button`,l);n(l,b),a(b,`btn`),i(b,`click`,M),n(b,m(`scope.run()`));let S=f(`button`,l);n(l,S),a(S,`btn`),i(S,`click`,j),n(S,m(`事件中读取`));let C=f(`button`,l);n(l,C),a(C,`btn btn-outline`),i(C,`click`,N);let O=c(C);n(C,O),y(()=>{_(O,E.value?`卸载 probe`:`重新挂载 probe`)});let F=f(`span`,l);n(l,F),a(F,`badge badge-soft`),n(F,m(`scope: `));let I=o(`rue:slot:anchor`);n(F,I),y(()=>{let t=P.get();e(()=>p(t,F,I))});let L=o(`rue:slot:anchor`);n(s,L),y(()=>{let t=E.value?u(()=>{let t=g(),r=o(`rue:component:anchor`);return n(t,r),y(()=>{let n=h(w,{count:T,scopeRef:D,report:A});e(()=>p(n,t,r))}),t}):u(()=>{let e=g(),t=f(`section`,e);return n(e,t),a(t,`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`),n(t,m(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),e});e(()=>p(t,s,L))});let R=f(`div`,s);n(s,R),a(R,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let z=f(`h2`,R);n(R,z),a(z,`text-lg font-semibold mb-3`),n(z,m(`运行记录`));let B=f(`ul`,R);n(R,B),a(B,`space-y-2 text-sm`);let V=o(`rue:list:start`),H=o(`rue:list:end`);n(B,V),n(B,H);let U=new Map;return y(()=>{U=x({items:k.value||[],getKey:(e,t)=>e,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(e,t,r,i,o)=>{p(u(()=>{let t=g(),r=f(`li`,t);n(t,r),a(r,`font-mono`),y(()=>{d(r,`key`,String(e))});let i=c(r);return n(r,i),y(()=>{_(i,e)}),t}),t,r)}})}),t}):``;e(()=>p(t,C,F))}),t})}),r,s),r})};export{T as default};