import{$ as e,Ct as t,Ht as n,J as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,qt as m,s as h,t as g,tt as _,vt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as b}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as x}from"./Code-5DOEyGxf.js";import{r as S}from"./SidebarPlaygroundExample-cASgDpH3.js";var C=e=>d(()=>{let n=v();e.scopeRef.value=n;let r=document.createElement(`section`),i=document.createElement(`h2`),a=document.createElement(`p`),s=document.createElement(`p`);return r.className=`rounded-lg border border-base-300 bg-base-200/60 p-5 space-y-3`,i.className=`text-xl font-semibold`,a.className=`text-sm text-base-content/70`,s.className=`font-mono text-sm`,i.textContent=`Vapor scope probe`,r.append(i,a,s),t(()=>{e.report(`onScopeDispose: probe 卸载，scope 清理回调已执行`)}),y(`watchEffect:1:0`,()=>o(()=>{let t=v()===n,r=n?.active===!0?`active`:`stopped`;a.textContent=t?`watchEffect 重跑时仍处于同一个 scope（${r}）`:`watchEffect 没有读到创建时的 scope`,s.textContent=`count = ${e.count.value}`})),r}),w=()=>{let{activeTab:t,count:w,mounted:T,scopeRef:E,sequence:D,logs:O,report:k,checkOutsideScope:A,runInsideCapturedScope:j,toggleProbe:M,scopeLabel:N}=y(`useSetup:0:0`,()=>m(()=>{let e=y(`ref:1:1`,()=>a(`preview`)),t=y(`ref:1:2`,()=>a(0)),n=y(`ref:1:3`,()=>a(!0)),r=y(`ref:1:4`,()=>a(void 0)),i=y(`ref:1:5`,()=>a(0)),o=y(`ref:1:6`,()=>a([`等待操作：点击按钮观察当前 effect scope`])),s=e=>{i.value+=1,o.value=[`${i.value}. ${e}`,...o.value.filter(e=>!e.startsWith(`等待操作`))].slice(0,6)};return{activeTab:e,count:t,mounted:n,scopeRef:r,sequence:i,logs:o,report:s,checkOutsideScope:()=>{s(v()?`事件处理器中读到了 active scope`:`事件处理器中没有 active scope，返回 undefined`)},runInsideCapturedScope:()=>{let e=r.value;if(!e?.active){s(`没有可用的 active scope，请先挂载 probe`);return}e.run(()=>{s(v()===e?`scope.run(): 临时恢复了 probe 的 active scope`:`scope.run(): 当前 scope 与 probe 不一致`)})},toggleProbe:()=>{n.value=!n.value,s(n.value?`probe 已重新挂载`:`probe 已卸载`)},scopeLabel:r.value?r.value.active?`active`:`stopped`:`未捕获`}}));return d(a=>{let m=i(),v=c(`rue:component:anchor`);return s(m,v),h(g(S,{children:d(()=>{let a=i(),m=e(`h1`,a);s(a,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),s(m,u(`getCurrentScope 作用域探针`));let v=e(`div`,a);s(a,v),p(v,`role`,`tablist`),l(v,`tabs tabs-box`);let y=e(`button`,v);s(v,y),p(y,`role`,`tab`),o(()=>{l(y,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),r(y,`click`,()=>{t.value=`preview`}),s(y,u(`效果`));let S=e(`button`,v);s(v,S),p(S,`role`,`tab`),o(()=>{l(S,String(`tab ${t.value===`code`?`tab-active`:``}`))}),r(S,`click`,()=>{t.value=`code`}),s(S,u(`代码`));let D=e(`div`,a);s(a,D),l(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let P=c(`rue:slot:anchor`);s(D,P),o(()=>{let r=t.value===`code`?d(()=>{let t=i(),r=e(`div`,t);s(t,r),l(r,`card bg-base-100 shadow overflow-auto`);let a=e(`div`,r);s(r,a),l(a,`card-body p-0`);let u=c(`rue:component:anchor`);return s(a,u),o(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:`import {
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
};`});n(()=>h(e,a,u))}),t}):``;n(()=>h(r,D,P))}),s(D,u(` `));let F=c(`rue:slot:anchor`);return s(D,F),o(()=>{let a=t.value===`preview`?d(()=>{let t=i(),a=e(`div`,t);s(t,a),l(a,`card bg-base-100 shadow`);let m=e(`div`,a);s(a,m),l(m,`card-body gap-5`);let v=e(`div`,m);s(m,v),l(v,`flex flex-wrap items-center gap-3`);let y=e(`button`,v);s(v,y),l(y,`btn btn-primary`),r(y,`click`,()=>w.value++),s(y,u(`更新 count`));let x=e(`button`,v);s(v,x),l(x,`btn`),r(x,`click`,j),s(x,u(`scope.run()`));let S=e(`button`,v);s(v,S),l(S,`btn`),r(S,`click`,A),s(S,u(`事件中读取`));let D=e(`button`,v);s(v,D),l(D,`btn btn-outline`),r(D,`click`,M);let P=_(D);s(D,P),o(()=>{f(P,T.value?`卸载 probe`:`重新挂载 probe`)});let F=e(`span`,v);s(v,F),l(F,`badge badge-soft`),s(F,u(`scope: `));let I=_(F);s(F,I),o(()=>{f(I,N)});let L=c(`rue:slot:anchor`);s(m,L),o(()=>{let t=T.value?d(()=>{let e=i(),t=c(`rue:component:anchor`);return s(e,t),o(()=>{let r=g(C,{count:w,scopeRef:E,report:k});n(()=>h(r,e,t))}),e}):d(()=>{let t=i(),n=e(`section`,t);return s(t,n),l(n,`rounded-lg border border-dashed border-base-300 bg-base-200/50 p-5 text-sm text-base-content/70`),s(n,u(`probe 已卸载。重新挂载后会创建新的 effect scope。`)),t});n(()=>h(t,m,L))});let R=e(`div`,m);s(m,R),l(R,`rounded-lg border border-base-300 bg-base-200/50 p-4`);let z=e(`h2`,R);s(R,z),l(z,`text-lg font-semibold mb-3`),s(z,u(`运行记录`));let B=e(`ul`,R);s(R,B),l(B,`space-y-2 text-sm`);let V=c(`rue:list:start`),H=c(`rue:list:end`);s(B,V),s(B,H);let U=new Map;return o(()=>{U=b({items:O.value||[],getKey:(e,t)=>e,elements:U,parent:B,before:H,singleRoot:!0,trackIndex:!1,start:V,renderItem:(t,n,r,a,c)=>{h(d(()=>{let n=i(),r=e(`li`,n);s(n,r),l(r,`font-mono`),o(()=>{p(r,`key`,String(t))});let a=_(r);return s(r,a),o(()=>{f(a,t)}),n}),n,r)}})}),t}):``;n(()=>h(a,D,F))}),a})}),m,v),m})};export{w as default};