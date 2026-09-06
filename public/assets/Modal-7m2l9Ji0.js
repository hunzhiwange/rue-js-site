import{At as e,Dn as t,E as n,Mt as r,Ot as i,P as a,Q as o,Qt as s,Vt as c,_n as l,_t as u,at as d,ct as f,dt as p,et as m,g as h,gn as g,gt as _,in as v,kn as y,m as b,nt as x,pn as S,rt as C,sn as w,st as T,tn as E,tt as D,ut as O,vn as k,vt as A,wn as j,xn as M,xt as N,yt as P}from"./rue-runtime-HIMg8Lz8.js";import{t as F}from"./Code-DpH7u0gk.js";import{r as I}from"./SidebarPlaygroundExample-BCPRe0hA.js";var L=k(`<div class="modal-mask"><div class="modal-container"><div class="modal-header"><h3>Custom Header</h3></div><div class="modal-body"><p>Custom body content is rendered inside the transitioned modal.</p></div><div class="modal-footer"><button class="modal-default-button">OK</button></div></div></div>`),R=k(`<div class="mt-3 rounded-box border border-base-300 bg-base-100 p-3"><div class="text-xs font-medium uppercase tracking-wide text-base-content/50"><!--rue:text-hole:0--></div><div></div></div>`),z=k(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带过渡动效的模态框（移植自 Vue）</h1>`),B=k(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),V=k(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),H=`
.modal-mask {
  position: fixed;
  inset: 0;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(15, 23, 42, 0.45);
}

.modal-container {
  width: min(100%, 28rem);
  border-radius: 1rem;
  background: #fff;
  padding: 1.5rem;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.28);
}

.modal-header h3 {
  margin: 0;
  color: #0f172a;
}

.modal-body {
  margin: 1rem 0 1.25rem;
  color: #475569;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-default-button {
  padding: 0.5rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background: #ffffff;
  cursor: pointer;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 300ms ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 300ms ease, opacity 300ms ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(16px) scale(0.96);
  opacity: 0;
}
`,U=`import { type FC, Teleport, Transition, ref } from '@rue-js/rue';

const modalStyles = \`
.modal-mask {
  position: fixed;
  inset: 0;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(15, 23, 42, 0.45);
}

.modal-container {
  width: min(100%, 28rem);
  border-radius: 1rem;
  background: #fff;
  padding: 1.5rem;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.28);
}

.modal-header h3 {
  margin: 0;
  color: #0f172a;
}

.modal-body {
  margin: 1rem 0 1.25rem;
  color: #475569;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-default-button {
  padding: 0.5rem 0.9rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background: #ffffff;
  cursor: pointer;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 300ms ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 300ms ease, opacity 300ms ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(16px) scale(0.96);
  opacity: 0;
}
\`;

const Modal: FC<{ visible: boolean; onClose?: () => void }> = (props) => (
  <Teleport to="body">
    <>
      <style>{modalStyles}</style>
      <Transition name="modal" type="transition" duration={300} appear>
        {props.visible ? (
          <div className="modal-mask" onClick={() => props.onClose && props.onClose()}>
            <div className="modal-container" onClick={(event: any) => event.stopPropagation()}>
              <div className="modal-header">
                <h3>Custom Header</h3>
              </div>
              <div className="modal-body">
                <p>Custom body content is rendered inside the transitioned modal.</p>
              </div>
              <div className="modal-footer">
                <button className="modal-default-button" onClick={() => props.onClose && props.onClose()}>
                  OK
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Transition>
    </>
  </Teleport>
);

const ensureLateTarget = (shellId: string, targetId: string) => {
  if (typeof document === 'undefined') return;
  const shell = document.getElementById(shellId);
  if (!shell || document.getElementById(targetId)) return;
  const target = document.createElement('div');
  target.id = targetId;
  target.className = 'mt-3 min-h-16 rounded-box border border-dashed border-info/50 bg-base-100 p-3';
  target.textContent = 'late target created';
  shell.appendChild(target);
};

const clearLateTargetShell = (shellId: string) => {
  if (typeof document === 'undefined') return;
  document.getElementById(shellId)?.replaceChildren();
};

const LateTargetHost: FC<{ shellId: string; label: string }> = (props) => {
  return (
    <div className="mt-3 rounded-box border border-base-300 bg-base-100 p-3">
      <div className="text-xs font-medium uppercase tracking-wide text-base-content/50">{props.label}</div>
      <div id={props.shellId} />
    </div>
  );
};

const ModalExample: FC = () => {
  const visibleModal = ref(false);
  const normalRun = ref(0);
  const normalActive = ref(false);
  const deferRun = ref(0);
  const normalTargetId = 'modal-normal-late-target-' + normalRun.value;
  const deferTargetId = 'modal-defer-late-target-' + deferRun.value;

  if (normalRun.value > 0) {
    queueMicrotask(() => ensureLateTarget('modal-normal-late-shell', normalTargetId));
  }
  if (deferRun.value > 0) {
    queueMicrotask(() => ensureLateTarget('modal-defer-late-shell', deferTargetId));
  }

  return (
    <div className="grid gap-6">
      <div className="card bg-base-100 shadow">
        <div className="card-body grid gap-4">
          <button id="visible-modal" className="btn btn-primary w-fit" onClick={() => (visibleModal.value = true)}>
            Visible Modal
          </button>
          <Modal visible={visibleModal.value} onClose={() => (visibleModal.value = false)} />
        </div>
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body grid gap-4">
          <div>
            <h2 className="card-title text-xl">Teleport defer 对照</h2>
            <p className="text-sm text-base-content/70">
              目标在同一轮更新末尾才出现：普通 Teleport 查找一次后结束，defer 会在微任务里再查找。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <section className="rounded-box border border-base-300 p-4">
              <div className="font-medium">不使用 defer</div>
              <button
                id="run-normal-teleport"
                className="btn btn-outline btn-sm mt-3"
                onClick={() => {
                  const nextRun = normalRun.value + 1;
                  clearLateTargetShell('modal-normal-late-shell');
                  normalActive.value = true;
                  queueMicrotask(() =>
                    ensureLateTarget('modal-normal-late-shell', 'modal-normal-late-target-' + nextRun),
                  );
                  queueMicrotask(() => {
                    normalActive.value = false;
                  });
                  normalRun.value = nextRun;
                }}
              >
                Run normal
              </button>
              {normalRun.value > 0 ? (
                <p className="mt-2 text-xs text-base-content/60">
                  target 已晚到；普通 Teleport 没有再次解析。
                </p>
              ) : null}
              {normalActive.value && normalRun.value > 0 ? (
                <Teleport to={'#' + normalTargetId}>
                  <div className="alert alert-warning mt-3 py-3">Normal payload</div>
                </Teleport>
              ) : null}
              <LateTargetHost shellId="modal-normal-late-shell" label="late target" />
            </section>
            <section className="rounded-box border border-info/40 p-4">
              <div className="font-medium">使用 defer</div>
              <button
                id="run-defer-teleport"
                className="btn btn-primary btn-sm mt-3"
                onClick={() => {
                  const nextRun = deferRun.value + 1;
                  clearLateTargetShell('modal-defer-late-shell');
                  queueMicrotask(() =>
                    ensureLateTarget('modal-defer-late-shell', 'modal-defer-late-target-' + nextRun),
                  );
                  deferRun.value = nextRun;
                }}
              >
                Run defer
              </button>
              {deferRun.value > 0 ? (
                <p className="mt-2 text-xs text-base-content/60">
                  target 晚到后，defer 重新解析并传送内容。
                </p>
              ) : null}
              {deferRun.value > 0 ? (
                <Teleport to={'#' + deferTargetId} defer>
                  <div className="alert alert-info mt-3 py-3">Deferred payload</div>
                </Teleport>
              ) : null}
              <LateTargetHost shellId="modal-defer-late-shell" label="late target" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalExample;`,W=n=>{let a=d(n.onClose),o=d(n.visible);return f(e(()=>{let e=u();p(e,P(` `));let n=A(`style`,e);p(e,n),j(()=>{i(n,H)}),p(e,P(` `));let s=_(`rue:component:anchor`);return p(e,s),j(()=>{let n=r(h,()=>({name:`modal`,type:`transition`,duration:300,appear:!0,__rueTransitionChildFactory:()=>o.get()?c(Object.assign(e=>{let n=L().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],o=n.childNodes[0].childNodes[2].childNodes[0];r.className=`modal-mask`;let s=e=>{let t=()=>{a.get()&&a.get()()};typeof t==`function`&&t(e)};r.addEventListener(`click`,s),t(()=>r.removeEventListener(`click`,s)),i.className=`modal-container`;let c=e=>{let t=e=>{e.stopPropagation()};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),o.className=`modal-default-button`;let l=e=>{let t=()=>{a.get()&&a.get()()};typeof t==`function`&&t(e)};return o.addEventListener(`click`,l),t(()=>o.removeEventListener(`click`,l)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):null})),i=r(b,()=>({to:`body`,children:n}));y(()=>O(i,e,s))}),p(e,P(` `)),e},!0),e=>m(()=>{a.set(e.onClose),o.set(e.visible)}),()=>n)},G=(e,t)=>{if(typeof document>`u`)return;let n=document.getElementById(e);if(!n||document.getElementById(t))return;let r=document.createElement(`div`);r.id=t,r.className=`mt-3 min-h-16 rounded-box border border-dashed border-info/50 bg-base-100 p-3`,r.textContent=`late target created`,n.appendChild(r)},K=e=>{typeof document>`u`||document.getElementById(e)?.replaceChildren()},q=e=>{let t=d(e.label),n=d(e.shellId);return f(c(Object.assign(e=>{let r=R().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=r.childNodes[0].childNodes[0],o=a.parentNode,s;j(()=>{let e=n.get();Object.is(s,e)||(s=e,e==null||e===!1?i.removeAttribute(`id`):i.setAttribute(`id`,String(e)))});let c=l(``);return o.insertBefore(c,a),o.removeChild(a),M(c,()=>t.get()),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.label),n.set(e.shellId)}),()=>e)},J=()=>{let{visibleModal:e,normalRun:r,normalActive:i,deferRun:d,activeTab:f,normalTargetId:p,__rue_phase2_normalTargetId:m,deferTargetId:h,__rue_phase2_deferTargetId:_}=w(`useSetup:0:0`,()=>v(()=>{let e=E(!1),t=E(0),n=E(!1),r=E(0),i=E(`preview`),o=a(()=>`modal-normal-late-target-`+t.value);o.get();let s=o,c=a(()=>`modal-defer-late-target-`+r.value);c.get();let l=c;return t.value>0&&queueMicrotask(()=>G(`modal-normal-late-shell`,s.get())),r.value>0&&queueMicrotask(()=>G(`modal-defer-late-shell`,l.get())),{visibleModal:e,normalRun:t,normalActive:n,deferRun:r,activeTab:i,normalTargetId:o,__rue_phase2_normalTargetId:s,deferTargetId:c,__rue_phase2_deferTargetId:l}}));return C(I,()=>({children:[(e,t,r)=>n(e,r,()=>c(Object.assign(e=>{let t=u();return t.appendChild(z().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>n(e,r,()=>c(Object.assign(e=>{let t=u(),n=B().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),N(i,`role`,`tab`),j(()=>{o(i,`tab ${f.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{f.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),s(()=>i.removeEventListener(`click`,c)),N(a,`role`,`tab`),j(()=>{o(a,`tab ${f.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{f.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(a,o,s)=>n(a,s,()=>c(Object.assign(a=>{let o=u(),s=V().content.cloneNode(!0),m=s.firstChild,_=m.childNodes[0],v=_.parentNode,y=m.childNodes[1],w=y.parentNode;return o.appendChild(s),x(v,_,()=>{let e=f.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=g(`div`,e);return t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`,T(t,F,()=>({className:`h-full`,lang:`tsx`,code:U})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(Object.assign(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),x(w,y,()=>{let a=f.value===`preview`;return a?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(a=>{let o=g(`div`,a);o.className=`grid gap-6`;let s=g(`div`,o);S(o,s),s.className=`card bg-base-100 shadow`;let f=g(`div`,s);S(s,f),f.className=`card-body grid gap-4`;let m=g(`button`,f);S(f,m),m.setAttribute(`id`,`visible-modal`),m.className=`btn btn-primary w-fit`;let _=t=>{let n=()=>{e.value=!0};typeof n==`function`&&n(t)};m.addEventListener(`click`,_),t(()=>m.removeEventListener(`click`,_)),S(m,l(`Visible Modal`)),T(f,W,()=>({visible:e.value,onClose:()=>{e.value=!1}}));let v=g(`div`,o);S(o,v),v.className=`card bg-base-100 shadow`;let y=g(`div`,v);S(v,y),y.className=`card-body grid gap-4`;let x=g(`div`,y);S(y,x);let w=g(`h2`,x);S(x,w),w.className=`card-title text-xl`,S(w,l(`Teleport defer 对照`));let E=g(`p`,x);S(x,E),E.className=`text-sm text-base-content/70`,S(E,l(`目标在同一轮更新末尾才出现：普通 Teleport 查找一次后结束，defer 会在微任务里再查找。`));let O=g(`div`,y);S(y,O),O.className=`grid gap-4 md:grid-cols-2`;let k=g(`section`,O);S(O,k),k.className=`rounded-box border border-base-300 p-4`;let A=g(`div`,k);S(k,A),A.className=`font-medium`,S(A,l(`不使用 defer`));let j=g(`button`,k);S(k,j),j.setAttribute(`id`,`run-normal-teleport`),j.className=`btn btn-outline btn-sm mt-3`;let M=e=>{let t=()=>{let e=r.value+1;K(`modal-normal-late-shell`),i.value=!0,queueMicrotask(()=>G(`modal-normal-late-shell`,`modal-normal-late-target-`+e)),queueMicrotask(()=>{i.value=!1}),r.value=e};typeof t==`function`&&t(e)};j.addEventListener(`click`,M),t(()=>j.removeEventListener(`click`,M)),S(j,l(`Run normal`)),D(()=>r.value>0?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=g(`p`,e);return t.className=`mt-2 text-xs text-base-content/60`,S(t,l(`target 已晚到；普通 Teleport 没有再次解析。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(k),D(()=>i.value&&r.value>0?{__rue_compiled_branch_key:!0,create:()=>C(b,()=>({to:`#`+p.get(),children:(e,t,r)=>n(e,r,()=>c(Object.assign(e=>{let t=u(),n=g(`div`,t);return S(t,n),n.className=`alert alert-warning mt-3 py-3`,S(n,l(`Normal payload`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(k),T(k,q,()=>({shellId:`modal-normal-late-shell`,label:`late target`}));let N=g(`section`,O);S(O,N),N.className=`rounded-box border border-info/40 p-4`;let P=g(`div`,N);S(N,P),P.className=`font-medium`,S(P,l(`使用 defer`));let F=g(`button`,N);S(N,F),F.setAttribute(`id`,`run-defer-teleport`),F.className=`btn btn-primary btn-sm mt-3`;let I=e=>{let t=()=>{let e=d.value+1;K(`modal-defer-late-shell`),queueMicrotask(()=>G(`modal-defer-late-shell`,`modal-defer-late-target-`+e)),d.value=e};typeof t==`function`&&t(e)};return F.addEventListener(`click`,I),t(()=>F.removeEventListener(`click`,I)),S(F,l(`Run defer`)),D(()=>d.value>0?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=g(`p`,e);return t.className=`mt-2 text-xs text-base-content/60`,S(t,l(`target 晚到后，defer 重新解析并传送内容。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(N),D(()=>d.value>0?{__rue_compiled_branch_key:!0,create:()=>C(b,()=>({to:`#`+h.get(),defer:!0,children:(e,t,r)=>n(e,r,()=>c(Object.assign(e=>{let t=u(),n=g(`div`,t);return S(t,n),n.className=`alert alert-info mt-3 py-3`,S(n,l(`Deferred payload`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(N),T(N,q,()=>({shellId:`modal-defer-late-shell`,label:`late target`})),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0}))}:typeof a==`number`||typeof a==`bigint`?{__rue_compiled_branch_key:a,create:()=>c(Object.assign(e=>{let t=l(typeof a==`string`||typeof a==`number`||typeof a==`bigint`?a:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})))]}))};export{J as default};