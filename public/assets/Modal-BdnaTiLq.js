import{Cn as e,Ct as t,Lt as n,Mt as r,Tt as i,dt as a,ft as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Transition-CNKiaMmY.js";import{t as y}from"./Teleport-o1_mE_9C.js";import{t as b}from"./Code-DhoWkRkB.js";import{r as x}from"./SidebarPlaygroundExample-B78jsvoF.js";var S=`
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
`,C=`import { type FC, Teleport, Transition, ref } from '@rue-js/rue';

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

export default ModalExample;`,w=e=>m(t=>{let n=o(),l=u(`style`,n);d(n,l),f(()=>{r(l,S)});let p=a(`rue:component:anchor`);return d(n,p),h(g(y,{to:`body`,children:g(v,{name:`modal`,type:`transition`,duration:300,appear:!0,__rueTransitionChildFactory:()=>e.visible?m(()=>{let t=o(),n=u(`div`,t);d(t,n),i(n,`modal-mask`),c(n,`click`,()=>{e.onClose&&e.onClose()});let r=u(`div`,n);d(n,r),i(r,`modal-container`),c(r,`click`,e=>{e.stopPropagation()});let a=u(`div`,r);d(r,a),i(a,`modal-header`);let l=u(`h3`,a);d(a,l),d(l,s(`Custom Header`));let f=u(`div`,r);d(r,f),i(f,`modal-body`);let p=u(`p`,f);d(f,p),d(p,s(`Custom body content is rendered inside the transitioned modal.`));let m=u(`div`,r);d(r,m),i(m,`modal-footer`);let h=u(`button`,m);return d(m,h),i(h,`modal-default-button`),c(h,`click`,()=>{e.onClose&&e.onClose()}),d(h,s(`OK`)),t}):null})}),n,p),n}),T=(e,t)=>{if(typeof document>`u`)return;let n=document.getElementById(e);if(!n||document.getElementById(t))return;let r=document.createElement(`div`);r.id=t,r.className=`mt-3 min-h-16 rounded-box border border-dashed border-info/50 bg-base-100 p-3`,r.textContent=`late target created`,n.appendChild(r)},E=e=>{typeof document>`u`||document.getElementById(e)?.replaceChildren()},D=e=>m(n=>{let r=u(`div`,n);i(r,`mt-3 rounded-box border border-base-300 bg-base-100 p-3`);let o=u(`div`,r);d(r,o),i(o,`text-xs font-medium uppercase tracking-wide text-base-content/50`);let s=a(`rue:slot:anchor`);d(o,s),f(()=>{let t=e.label;p(()=>h(t,o,s))});let c=u(`div`,r);return d(r,c),f(()=>{t(c,`id`,String(e.shellId))}),r}),O=()=>{let{visibleModal:r,normalRun:v,normalActive:S,deferRun:O,activeTab:k,normalTargetId:A,deferTargetId:j}=_(`useSetup:0:0`,()=>e(()=>{let e=_(`ref:1:0`,()=>l(!1)),t=_(`ref:1:1`,()=>l(0)),r=_(`ref:1:2`,()=>l(!1)),i=_(`ref:1:3`,()=>l(0)),a=_(`ref:1:4`,()=>l(`preview`)),o=_(`computed:1:5`,()=>n(()=>`modal-normal-late-target-`+t.value)),s=o,c=_(`computed:1:6`,()=>n(()=>`modal-defer-late-target-`+i.value)),u=c;return t.value>0&&queueMicrotask(()=>T(`modal-normal-late-shell`,s.get())),i.value>0&&queueMicrotask(()=>T(`modal-defer-late-shell`,u.get())),{visibleModal:e,normalRun:t,normalActive:r,deferRun:i,activeTab:a,normalTargetId:o,deferTargetId:c}}));return m(e=>{let n=o(),l=a(`rue:component:anchor`);return d(n,l),h(g(x,{children:m(()=>{let e=o(),n=u(`h1`,e);d(e,n),i(n,`text-5xl font-semibold mb-4 md:mb-4`),d(n,s(`带过渡动效的模态框（移植自 Vue）`));let l=u(`div`,e);d(e,l),t(l,`role`,`tablist`),i(l,`tabs tabs-box`);let _=u(`button`,l);d(l,_),t(_,`role`,`tab`),f(()=>{i(_,`tab ${k.value===`preview`?`tab-active`:``}`)}),c(_,`click`,()=>{k.value=`preview`}),d(_,s(`效果`));let x=u(`button`,l);d(l,x),t(x,`role`,`tab`),f(()=>{i(x,`tab ${k.value===`code`?`tab-active`:``}`)}),c(x,`click`,()=>{k.value=`code`}),d(x,s(`代码`));let M=u(`div`,e);d(e,M),i(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=a(`rue:slot:anchor`);d(M,N),f(()=>{let e=k.value===`code`?m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let n=a(`rue:component:anchor`);return d(t,n),f(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:C});p(()=>h(e,t,n))}),e}):``;p(()=>h(e,M,N))}),d(M,s(` `));let P=a(`rue:slot:anchor`);return d(M,P),f(()=>{let e=k.value===`preview`?m(()=>{let e=o(),n=u(`div`,e);d(e,n),i(n,`grid gap-6`);let l=u(`div`,n);d(n,l),i(l,`card bg-base-100 shadow`);let _=u(`div`,l);d(l,_),i(_,`card-body grid gap-4`);let b=u(`button`,_);d(_,b),t(b,`id`,`visible-modal`),i(b,`btn btn-primary w-fit`),c(b,`click`,()=>{r.value=!0}),d(b,s(`Visible Modal`));let x=a(`rue:component:anchor`);d(_,x),f(()=>{let e=g(w,{visible:r.value,onClose:()=>{r.value=!1}});p(()=>h(e,_,x))});let C=u(`div`,n);d(n,C),i(C,`card bg-base-100 shadow`);let k=u(`div`,C);d(C,k),i(k,`card-body grid gap-4`);let M=u(`div`,k);d(k,M);let N=u(`h2`,M);d(M,N),i(N,`card-title text-xl`),d(N,s(`Teleport defer 对照`));let P=u(`p`,M);d(M,P),i(P,`text-sm text-base-content/70`),d(P,s(`目标在同一轮更新末尾才出现：普通 Teleport 查找一次后结束，defer 会在微任务里再查找。`));let F=u(`div`,k);d(k,F),i(F,`grid gap-4 md:grid-cols-2`);let I=u(`section`,F);d(F,I),i(I,`rounded-box border border-base-300 p-4`);let L=u(`div`,I);d(I,L),i(L,`font-medium`),d(L,s(`不使用 defer`));let R=u(`button`,I);d(I,R),t(R,`id`,`run-normal-teleport`),i(R,`btn btn-outline btn-sm mt-3`),c(R,`click`,()=>{let e=v.value+1;E(`modal-normal-late-shell`),S.value=!0,queueMicrotask(()=>T(`modal-normal-late-shell`,`modal-normal-late-target-`+e)),queueMicrotask(()=>{S.value=!1}),v.value=e}),d(R,s(`Run normal`));let z=a(`rue:slot:anchor`);d(I,z),f(()=>{let e=v.value>0?m(()=>{let e=o(),t=u(`p`,e);return d(e,t),i(t,`mt-2 text-xs text-base-content/60`),d(t,s(`target 已晚到；普通 Teleport 没有再次解析。`)),e}):``;p(()=>h(e,I,z))}),d(I,s(` `));let B=a(`rue:slot:anchor`);d(I,B),f(()=>{let e=S.value&&v.value>0?m(()=>{let e=o(),t=a(`rue:component:anchor`);d(e,t);let n=m(()=>{let e=o(),t=u(`div`,e);return d(e,t),i(t,`alert alert-warning mt-3 py-3`),d(t,s(`Normal payload`)),e});return f(()=>{let r=g(y,{to:`#`+A.get(),children:n});p(()=>h(r,e,t))}),e}):``;p(()=>h(e,I,B))});let V=a(`rue:component:anchor`);d(I,V),h(g(D,{shellId:`modal-normal-late-shell`,label:`late target`}),I,V);let H=u(`section`,F);d(F,H),i(H,`rounded-box border border-info/40 p-4`);let U=u(`div`,H);d(H,U),i(U,`font-medium`),d(U,s(`使用 defer`));let W=u(`button`,H);d(H,W),t(W,`id`,`run-defer-teleport`),i(W,`btn btn-primary btn-sm mt-3`),c(W,`click`,()=>{let e=O.value+1;E(`modal-defer-late-shell`),queueMicrotask(()=>T(`modal-defer-late-shell`,`modal-defer-late-target-`+e)),O.value=e}),d(W,s(`Run defer`));let G=a(`rue:slot:anchor`);d(H,G),f(()=>{let e=O.value>0?m(()=>{let e=o(),t=u(`p`,e);return d(e,t),i(t,`mt-2 text-xs text-base-content/60`),d(t,s(`target 晚到后，defer 重新解析并传送内容。`)),e}):``;p(()=>h(e,H,G))}),d(H,s(` `));let K=a(`rue:slot:anchor`);d(H,K),f(()=>{let e=O.value>0?m(()=>{let e=o(),t=a(`rue:component:anchor`);d(e,t);let n=m(()=>{let e=o(),t=u(`div`,e);return d(e,t),i(t,`alert alert-info mt-3 py-3`),d(t,s(`Deferred payload`)),e});return f(()=>{let r=g(y,{to:`#`+j.get(),defer:!0,children:n});p(()=>h(r,e,t))}),e}):``;p(()=>h(e,H,K))});let q=a(`rue:component:anchor`);return d(H,q),h(g(D,{shellId:`modal-defer-late-shell`,label:`late target`}),H,q),e}):``;p(()=>h(e,M,P))}),e})}),n,l),n})};export{O as default};