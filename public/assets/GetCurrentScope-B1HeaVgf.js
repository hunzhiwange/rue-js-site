import{Et as e,Q as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,it as c,jt as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,t as g,tn as _,tt as v,wt as y}from"./vapor-runtime-x7F5M-49.js";import{a as b,n as x}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as S}from"./Code-BoXKy3gJ.js";import{r as C}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var w=t=>u(()=>{let r=e();t.scopeRef.value=r;let i=document.createElement(`section`),a=document.createElement(`h2`),o=document.createElement(`p`),s=document.createElement(`p`);return i.className=`rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3`,a.className=`text-xl font-semibold`,o.className=`text-sm text-base-content/70`,s.className=`font-mono text-sm`,a.textContent=`Vapor scope probe`,i.append(a,o,s),l(()=>{t.report(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),b(`watchEffect:1:0`,()=>n(()=>{let n=e()===r,i=r?.active===!0?`active`:`stopped`;o.textContent=n?`watchEffect 重跑时仍处于同一个 scope（${i}）`:`watchEffect 没有读到创建时的 scope`,s.textContent=`count = ${t.count.value}`})),i}),T=()=>{let{activeTab:l,count:T,mounted:E,scopeRef:D,sequence:O,logs:k,report:A,checkOutsideScope:j,runInsideCapturedScope:M,toggleProbe:N,scopeLabel:P}=b(`useSetup:0:0`,()=>p(()=>{let t=b(`ref:1:1`,()=>r(`preview`)),n=b(`ref:1:2`,()=>r(0)),i=b(`ref:1:3`,()=>r(!0)),a=b(`ref:1:4`,()=>r(void 0)),o=b(`ref:1:5`,()=>r(0)),s=b(`ref:1:6`,()=>r([`等待操作：点击按钮观察当前 effect scope`])),c=e=>{o.value+=1,s.value=[`${o.value}. ${e}`,...s.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)};return{activeTab:t,count:n,mounted:i,scopeRef:a,sequence:o,logs:s,report:c,checkOutsideScope:()=>{c(e()?`事件处理器中意外读到了 active scope`:`事件处理器默认没有 active scope，getCurrentScope() 返回 undefined`)},runInsideCapturedScope:()=>{let t=a.value;if(!t?.active){c(`没有可用的 active scope，请先挂载 probe`);return}t.run(()=>{c(e()===t?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},toggleProbe:()=>{i.value=!i.value,c(i.value?`probe 已重新挂载`:`probe 已卸载`)},scopeLabel:b(`computed:1:7`,()=>y(()=>a.value?a.value.active?`active`:`stopped`:`未捕获`))}}));return u(e=>{let r=d(),p=v(`rue:component:anchor`);return t(r,p),f(g(C,{children:u(()=>{let e=d(),r=h(`h1`,e);t(e,r),m(r,`text-5xl font-semibold mb-4 md:mb-4`),t(r,c(`getCurrentScope 作用域探针`));let p=h(`div`,e);t(e,p),s(p,`role`,`tablist`),m(p,`tabs tabs-box`);let y=h(`button`,p);t(p,y),s(y,`role`,`tab`),n(()=>{m(y,`tab ${l.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{l.value=`preview`}),t(y,c(`效果`));let b=h(`button`,p);t(p,b),s(b,`role`,`tab`),n(()=>{m(b,`tab ${l.value===`code`?`tab-active`:``}`)}),i(b,`click`,()=>{l.value=`code`}),t(b,c(`代码`));let C=h(`div`,e);t(e,C),m(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=v(`rue:slot:anchor`);t(C,O),n(()=>{let e=l.value===`code`?u(()=>{let e=d(),r=h(`div`,e);t(e,r),m(r,`card bg-base-100 shadow overflow-auto`);let i=h(`div`,r);t(r,i),m(i,`card-body p-0`);let a=v(`rue:component:anchor`);return t(i,a),n(()=>{let e=g(S,{className:`h-full`,lang:`tsx`,code:`import {
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
};`});_(()=>f(e,i,a))}),e}):``;_(()=>f(e,C,O))}),t(C,c(` `));let F=v(`rue:slot:anchor`);return t(C,F),n(()=>{let e=l.value===`preview`?u(()=>{let e=d(),r=h(`div`,e);t(e,r),m(r,`card bg-base-100 shadow`);let l=h(`div`,r);t(r,l),m(l,`card-body gap-5`);let p=h(`div`,l);t(l,p),m(p,`flex flex-wrap items-center gap-3`);let y=h(`button`,p);t(p,y),m(y,`btn btn-primary`),i(y,`click`,()=>T.value++),t(y,c(`更新 count`));let b=h(`button`,p);t(p,b),m(b,`btn`),i(b,`click`,M),t(b,c(`scope.run()`));let S=h(`button`,p);t(p,S),m(S,`btn`),i(S,`click`,j),t(S,c(`事件中读取`));let C=h(`button`,p);t(p,C),m(C,`btn btn-outline`),i(C,`click`,N);let O=a(C);t(C,O),n(()=>{o(O,E.value?`卸载 probe`:`重新挂载 probe`)});let F=h(`span`,p);t(p,F),m(F,`badge badge-soft`),t(F,c(`scope: `));let I=v(`rue:slot:anchor`);t(F,I),n(()=>{let e=P.get();_(()=>f(e,F,I))});let L=v(`rue:slot:anchor`);t(l,L),n(()=>{let e=E.value?u(()=>{let e=d(),r=v(`rue:component:anchor`);return t(e,r),n(()=>{let t=g(w,{count:T,scopeRef:D,report:A});_(()=>f(t,e,r))}),e}):u(()=>{let e=d(),n=h(`section`,e);return t(e,n),m(n,`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`),t(n,c(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),e});_(()=>f(e,l,L))});let R=h(`div`,l);t(l,R),m(R,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let z=h(`h2`,R);t(R,z),m(z,`text-lg font-semibold mb-3`),t(z,c(`运行记录`));let B=h(`ul`,R);t(R,B),m(B,`space-y-2 text-sm`);let V=v(`rue:list:start`),H=v(`rue:list:end`);t(B,V),t(B,H);let U=new Map;return n(()=>{U=x({items:k.value||[],getKey:(e,t)=>e,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(e,r,i,c,l)=>{f(u(()=>{let r=d(),i=h(`li`,r);t(r,i),m(i,`font-mono`),n(()=>{s(i,`key`,String(e))});let c=a(i);return t(i,c),n(()=>{o(c,e)}),r}),r,i)}})}),e}):``;_(()=>f(e,C,F))}),e})}),r,p),r})};export{T as default};