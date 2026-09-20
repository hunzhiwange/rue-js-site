import{B as e,Bt as t,F as n,Ht as r,I as i,Jt as a,P as o,Ut as s,V as c,Vt as l,W as u,Wt as d,ct as f,dn as p,en as m,fn as h,gn as g,hn as _,i as v,in as y,mn as b,mt as x,n as S,nt as C,pn as w,sn as T,u as E,vn as D,yn as O,z as k,zt as A}from"./rue-runtime-BWbIfNT8.js";import{t as j}from"./Code-C5ZhIIr9.js";import{r as M}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var N=O(`<div class="modal-mask"><div class="modal-container"><div class="modal-header"><h3>Custom Header</h3></div><div class="modal-body"><p>Custom body content is rendered inside the transitioned modal.</p></div><div class="modal-footer"><button class="modal-default-button">OK</button></div></div></div>`),P=O(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带过渡动效的模态框（移植自 Vue）</h1>`),F=O(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),I=O(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),L=`
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
`,R=`import { type FC, Teleport, Transition, ref } from '@rue-js/rue';

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

export default ModalExample;`,z=(t,n,r)=>{let a=u(k(t,`onClose`)),o=u(k(t,`visible`));return i(d(e=>{let t=b();h(t,g(` `));let n=_(`style`,t);h(t,n),y(()=>{D(n,L)}),h(t,g(` `)),v(()=>({to:`body`,children:(e,t,n)=>{let r=()=>d(e=>{let t=b();S(()=>({name:`modal`,type:`transition`,duration:300,appear:!0,childKey:o.get(),children:o.get()?(e,t,n)=>{let r=()=>d(e=>{let t=N().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=t.childNodes[0].childNodes[2].childNodes[0];n.setAttribute(`class`,`modal-mask`),T(E(e,n,`click`,()=>()=>{a.get()&&a.get()()})),r.setAttribute(`class`,`modal-container`);let o=e=>{let t=e=>{e.stopPropagation()};typeof t==`function`&&t(e)};return r.addEventListener(`click`,o),T(()=>r.removeEventListener(`click`,o)),i.setAttribute(`class`,`modal-default-button`),T(E(e,i,`click`,()=>()=>{a.get()&&a.get()()})),[t,t]});return e==null?r():l(e,n,r)}:(e,t,n)=>{let r=()=>c(e=>{let t=b();return[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})).__rue_compiled_mount(t,null);let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})).__rue_compiled_mount(t,null),h(t,g(` `));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]}),e=>m(()=>{a.set(e.onClose),o.set(e.visible)}),()=>e(t))},B=(e,t)=>{if(typeof document>`u`)return;let n=document.getElementById(e);if(!n||document.getElementById(t))return;let r=document.createElement(`div`);r.id=t,r.className=`mt-3 min-h-16 rounded-box border border-dashed border-info/50 bg-base-100 p-3`,r.textContent=`late target created`,n.appendChild(r)},V=e=>{typeof document>`u`||document.getElementById(e)?.replaceChildren()},H=(n,r,a)=>{let o=u(k(n,`label`)),s=u(k(n,`shellId`));return i(d(e=>{let n=_(`div`,e);n.setAttribute(`class`,`mt-3 rounded-box border border-base-300 bg-base-100 p-3`);let r=_(`div`,n);h(n,r),r.setAttribute(`class`,`text-xs font-medium uppercase tracking-wide text-base-content/50`);let i=w(`rue:compiled-slot`);h(r,i),t({parent:r,before:i},()=>A(o.get()),()=>({}));let a=_(`div`,n);h(n,a);let c;return y(()=>{let e=s.get();Object.is(c,e)||(c=e,e==null||e===!1?a.removeAttribute(`id`):a.setAttribute(`id`,String(e)))}),[n,n]}),e=>m(()=>{o.set(e.label),s.set(e.shellId)}),()=>e(n))},U=(e,t,i)=>C(()=>r(()=>{let{visibleModal:e,normalRun:t,normalActive:i,deferRun:u,activeTab:m,normalTargetId:S,__rue_phase2_normalTargetId:C,deferTargetId:w,__rue_phase2_deferTargetId:D}=a(`ModalExample:setup-region:0`,()=>{let e=x(!1),t=x(0),n=x(!1),r=x(0),i=x(`preview`),a=f(()=>`modal-normal-late-target-`+t.value);p(()=>a.get());let o=a,s=f(()=>`modal-defer-late-target-`+r.value);return p(()=>s.get()),{visibleModal:e,normalRun:t,normalActive:n,deferRun:r,activeTab:i,normalTargetId:a,__rue_phase2_normalTargetId:o,deferTargetId:s,__rue_phase2_deferTargetId:s}});return t.value>0&&queueMicrotask(()=>B(`modal-normal-late-shell`,C.get())),u.value>0&&queueMicrotask(()=>B(`modal-defer-late-shell`,D.get())),{__rue_compiled_branch_key:0,create:()=>o(M,()=>({children:(a,o,f)=>{let p=()=>d(a=>{let o=b();o.appendChild(P().content.cloneNode(!0));let f=F().content.cloneNode(!0),p=f.firstChild,x=p.childNodes[0],C=p.childNodes[1];o.appendChild(f),x.setAttribute(`role`,`tab`);let D;y(()=>{let e=`tab ${m.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,x.setAttribute(`class`,t))}),T(E(a,x,`click`,()=>()=>{m.value=`preview`})),C.setAttribute(`role`,`tab`);let O;y(()=>{let e=`tab ${m.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,C.setAttribute(`class`,t))}),T(E(a,C,`click`,()=>()=>{m.value=`code`}));let k=I().content.cloneNode(!0),A=k.firstChild,M=A.childNodes[0],N=M.parentNode,L=A.childNodes[1],U=L.parentNode;o.appendChild(k),s(N,M,()=>{let e=m.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>d(e=>{let t=_(`div`,e);return t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`),n(t,j,()=>({className:`h-full`,lang:`tsx`,code:R})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>c(e=>{let t=b();return[t.firstChild,t.lastChild]})}}),s(U,L,()=>{let a=m.value===`preview`;return a?{__rue_compiled_branch_key:!0,create:()=>d(a=>{let o=_(`div`,a);o.setAttribute(`class`,`grid gap-6`);let s=_(`div`,o);h(o,s),s.setAttribute(`class`,`card bg-base-100 shadow`);let d=_(`div`,s);h(s,d),d.setAttribute(`class`,`card-body grid gap-4`);let f=_(`button`,d);h(d,f),f.setAttribute(`id`,`visible-modal`),f.setAttribute(`class`,`btn btn-primary w-fit`),T(E(a,f,`click`,()=>()=>{e.value=!0})),h(f,g(`Visible Modal`)),n(d,z,()=>({visible:e.value,onClose:()=>{e.value=!1}}));let p=_(`div`,o);h(o,p),p.setAttribute(`class`,`card bg-base-100 shadow`);let m=_(`div`,p);h(p,m),m.setAttribute(`class`,`card-body grid gap-4`);let y=_(`div`,m);h(m,y);let x=_(`h2`,y);h(y,x),x.setAttribute(`class`,`card-title text-xl`),h(x,g(`Teleport defer 对照`));let C=_(`p`,y);h(y,C),C.setAttribute(`class`,`text-sm text-base-content/70`),h(C,g(`目标在同一轮更新末尾才出现：普通 Teleport 查找一次后结束，defer 会在微任务里再查找。`));let D=_(`div`,m);h(m,D),D.setAttribute(`class`,`grid gap-4 md:grid-cols-2`);let O=_(`section`,D);h(D,O),O.setAttribute(`class`,`rounded-box border border-base-300 p-4`);let k=_(`div`,O);h(O,k),k.setAttribute(`class`,`font-medium`),h(k,g(`不使用 defer`));let A=_(`button`,O);h(O,A),A.setAttribute(`id`,`run-normal-teleport`),A.setAttribute(`class`,`btn btn-outline btn-sm mt-3`),T(E(a,A,`click`,()=>()=>{let e=t.value+1;V(`modal-normal-late-shell`),i.value=!0,queueMicrotask(()=>B(`modal-normal-late-shell`,`modal-normal-late-target-`+e)),queueMicrotask(()=>{i.value=!1}),t.value=e})),h(A,g(`Run normal`)),r(()=>t.value>0?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=_(`p`,e);return t.setAttribute(`class`,`mt-2 text-xs text-base-content/60`),h(t,g(`target 已晚到；普通 Teleport 没有再次解析。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>c(e=>{let t=b();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(O),r(()=>i.value&&t.value>0?{__rue_compiled_branch_key:!0,create:()=>v(()=>({to:`#`+S.get(),children:(e,t,n)=>{let r=()=>c(e=>{let t=b(),n=_(`div`,t);h(t,n),n.setAttribute(`class`,`alert alert-warning mt-3 py-3`),h(n,g(`Normal payload`));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}))}:{__rue_compiled_branch_key:!1,create:()=>c(e=>{let t=b();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(O),n(O,H,()=>({shellId:`modal-normal-late-shell`,label:`late target`}));let j=_(`section`,D);h(D,j),j.setAttribute(`class`,`rounded-box border border-info/40 p-4`);let M=_(`div`,j);h(j,M),M.setAttribute(`class`,`font-medium`),h(M,g(`使用 defer`));let N=_(`button`,j);return h(j,N),N.setAttribute(`id`,`run-defer-teleport`),N.setAttribute(`class`,`btn btn-primary btn-sm mt-3`),T(E(a,N,`click`,()=>()=>{let e=u.value+1;V(`modal-defer-late-shell`),queueMicrotask(()=>B(`modal-defer-late-shell`,`modal-defer-late-target-`+e)),u.value=e})),h(N,g(`Run defer`)),r(()=>u.value>0?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=_(`p`,e);return t.setAttribute(`class`,`mt-2 text-xs text-base-content/60`),h(t,g(`target 晚到后，defer 重新解析并传送内容。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>c(e=>{let t=b();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(j),r(()=>u.value>0?{__rue_compiled_branch_key:!0,create:()=>v(()=>({to:`#`+w.get(),defer:!0,children:(e,t,n)=>{let r=()=>c(e=>{let t=b(),n=_(`div`,t);h(t,n),n.setAttribute(`class`,`alert alert-info mt-3 py-3`),h(n,g(`Deferred payload`));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}))}:{__rue_compiled_branch_key:!1,create:()=>c(e=>{let t=b();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(j),n(j,H,()=>({shellId:`modal-defer-late-shell`,label:`late target`})),[o,o]})}:typeof a==`number`||typeof a==`bigint`?{__rue_compiled_branch_key:a,create:()=>c(e=>{let t=g(typeof a==`string`||typeof a==`number`||typeof a==`bigint`?a:``);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>c(e=>{let t=b();return[t.firstChild,t.lastChild]})}});let W=g(``),G=g(``);return o.insertBefore(W,o.firstChild),o.appendChild(G),[o.firstChild,o.lastChild]});return a==null?p():l(a,f,p)}}))}}));export{U as default};