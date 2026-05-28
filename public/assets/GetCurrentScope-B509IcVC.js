import{$ as e,It as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,_t as u,ct as d,d as f,et as p,l as m,mt as h,ot as g,t as _,tt as v}from"./vapor-runtime-BR_2rwNk.js";import{a as y,n as b}from"./vapor-helpers-vapor-DkadWylb.js";import{t as x}from"./Code-B_4lzH85.js";import{t as S}from"./SidebarPlaygroundExample-CtM-WHq_.js";var C=e=>f(()=>{let n=u();e.scopeRef.value=n;let r=document.createElement(`section`),i=document.createElement(`h2`),a=document.createElement(`p`),o=document.createElement(`p`);return r.className=`rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3`,i.className=`text-xl font-semibold`,a.className=`text-sm text-base-content/70`,o.className=`font-mono text-sm`,i.textContent=`Vapor scope probe`,r.append(i,a,o),t(()=>{e.report(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),y(`watchEffect:1:0`,()=>c(()=>{let t=u()===n,r=n?.active===!0?`active`:`stopped`;a.textContent=t?`watchEffect 重跑时仍处于同一个 scope（${r}）`:`watchEffect 没有读到创建时的 scope`,o.textContent=`count = ${e.count.value}`})),r}),w=()=>{let{activeTab:t,count:w,mounted:T,scopeRef:E,sequence:D,logs:O,report:k,checkOutsideScope:A,runInsideCapturedScope:j,toggleProbe:M,scopeLabel:N}=y(`useSetup:0:0`,()=>r(()=>{let e=y(`ref:1:1`,()=>i(`preview`)),t=y(`ref:1:2`,()=>i(0)),n=y(`ref:1:3`,()=>i(!0)),r=y(`ref:1:4`,()=>i(void 0)),a=y(`ref:1:5`,()=>i(0)),o=y(`ref:1:6`,()=>i([`等待操作：点击按钮观察当前 effect scope`])),s=e=>{a.value+=1,o.value=[`${a.value}. ${e}`,...o.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)};return{activeTab:e,count:t,mounted:n,scopeRef:r,sequence:a,logs:o,report:s,checkOutsideScope:()=>{s(u()?`事件处理器中读到了 active scope`:`事件处理器中没有 active scope，返回 undefined`)},runInsideCapturedScope:()=>{let e=r.value;if(!e?.active){s(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{s(u()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},toggleProbe:()=>{n.value=!n.value,s(n.value?`probe 已重新挂载`:`probe 已卸载`)},scopeLabel:r.value?r.value.active?`active`:`stopped`:`未捕获`}}));return f(r=>{let i=a(),u=l(`rue:component:anchor`);return s(i,u),m(_(S,{children:f(()=>{let r=a(),i=e(`h1`,r);s(r,i),d(i,`text-5xl font-semibold mb-4 md:mb-4`),s(i,p(`getCurrentScope 作用域探针`));let u=e(`div`,r);s(r,u),g(u,`role`,`tablist`),d(u,`tabs tabs-box`);let y=e(`button`,u);s(u,y),g(y,`role`,`tab`),c(()=>{d(y,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{t.value=`preview`}),s(y,p(`效果`));let S=e(`button`,u);s(u,S),g(S,`role`,`tab`),c(()=>{d(S,String(`tab ${t.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{t.value=`code`}),s(S,p(`代码`));let D=e(`div`,r);s(r,D),d(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let P=l(`rue:slot:anchor`);s(D,P),c(()=>{let n=t.value===`code`?f(()=>{let t=a(),n=e(`div`,t);s(t,n),d(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);s(n,r),d(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:`import {
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
};`});o(()=>m(e,r,i))}),t}):``;o(()=>m(n,D,P))}),s(D,p(` `));let F=l(`rue:slot:anchor`);return s(D,F),c(()=>{let r=t.value===`preview`?f(()=>{let t=a(),r=e(`div`,t);s(t,r),d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body gap-5`);let u=e(`div`,i);s(i,u),d(u,`flex flex-wrap items-center gap-3`);let y=e(`button`,u);s(u,y),d(y,`btn btn-primary`),n(y,`click`,()=>w.value++),s(y,p(`更新 count`));let x=e(`button`,u);s(u,x),d(x,`btn`),n(x,`click`,j),s(x,p(`scope.run()`));let S=e(`button`,u);s(u,S),d(S,`btn`),n(S,`click`,A),s(S,p(`事件中读取`));let D=e(`button`,u);s(u,D),d(D,`btn btn-outline`),n(D,`click`,M);let P=v(D);s(D,P),c(()=>{h(P,T.value?`卸载 probe`:`重新挂载 probe`)});let F=e(`span`,u);s(u,F),d(F,`badge badge-soft`),s(F,p(`scope: `));let I=v(F);s(F,I),c(()=>{h(I,N)});let L=l(`rue:slot:anchor`);s(i,L),c(()=>{let t=T.value?f(()=>{let e=a(),t=l(`rue:component:anchor`);return s(e,t),c(()=>{let n=_(C,{count:w,scopeRef:E,report:k});o(()=>m(n,e,t))}),e}):f(()=>{let t=a(),n=e(`section`,t);return s(t,n),d(n,`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`),s(n,p(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),t});o(()=>m(t,i,L))});let R=e(`div`,i);s(i,R),d(R,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let z=e(`h2`,R);s(R,z),d(z,`text-lg font-semibold mb-3`),s(z,p(`运行记录`));let B=e(`ul`,R);s(R,B),d(B,`space-y-2 text-sm`);let V=l(`rue:list:start`),H=l(`rue:list:end`);s(B,V),s(B,H);let U=new Map;return c(()=>{U=b({items:O.value||[],getKey:(e,t)=>e,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(t,n,r,i,o)=>{m(f(()=>{let n=a(),r=e(`li`,n);s(n,r),d(r,`font-mono`),c(()=>{g(r,`key`,String(t))});let i=v(r);return s(r,i),c(()=>{h(i,t)}),n}),n,r)}})}),t}):``;o(()=>m(r,D,F))}),r})}),i,u),i})};export{w as default};