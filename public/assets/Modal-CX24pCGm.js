import{$t as e,Jt as t,Q as n,St as r,Z as i,dt as a,et as o,in as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Transition-BACSrr7q.js";import{t as y}from"./Teleport-u7K6crFD.js";import{t as b}from"./Code-4SUSUwRg.js";import{r as x}from"./SidebarPlaygroundExample-BEWYUWOl.js";var S=`
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

export default ModalExample;`,w=e=>c(t=>{let r=m(),s=u(`style`,r);n(r,s),g(()=>{h(s,S)});let l=o(`rue:component:anchor`);return n(r,l),d(p(y,{to:`body`,children:p(v,{name:`modal`,type:`transition`,duration:300,appear:!0,__rueTransitionChildFactory:()=>e.visible?c(()=>{let t=m(),r=u(`div`,t);n(t,r),a(r,`modal-mask`),i(r,`click`,()=>{e.onClose&&e.onClose()});let o=u(`div`,r);n(r,o),a(o,`modal-container`),i(o,`click`,e=>{e.stopPropagation()});let s=u(`div`,o);n(o,s),a(s,`modal-header`);let c=u(`h3`,s);n(s,c),n(c,f(`Custom Header`));let l=u(`div`,o);n(o,l),a(l,`modal-body`);let d=u(`p`,l);n(l,d),n(d,f(`Custom body content is rendered inside the transitioned modal.`));let p=u(`div`,o);n(o,p),a(p,`modal-footer`);let h=u(`button`,p);return n(p,h),a(h,`modal-default-button`),i(h,`click`,()=>{e.onClose&&e.onClose()}),n(h,f(`OK`)),t}):null})}),r,l),r}),T=(e,t)=>{if(typeof document>`u`)return;let n=document.getElementById(e);if(!n||document.getElementById(t))return;let r=document.createElement(`div`);r.id=t,r.className=`mt-3 min-h-16 rounded-box border border-dashed border-info/50 bg-base-100 p-3`,r.textContent=`late target created`,n.appendChild(r)},E=e=>{typeof document>`u`||document.getElementById(e)?.replaceChildren()},D=t=>c(r=>{let i=u(`div`,r);a(i,`mt-3 rounded-box border border-base-300 bg-base-100 p-3`);let s=u(`div`,i);n(i,s),a(s,`text-xs font-medium uppercase tracking-wide text-base-content/50`);let c=o(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.label;e(()=>d(n,s,c))});let f=u(`div`,i);return n(i,f),g(()=>{l(f,`id`,String(t.shellId))}),i}),O=()=>{let{visibleModal:h,normalRun:v,normalActive:S,deferRun:O,activeTab:k,normalTargetId:A,deferTargetId:j}=_(`useSetup:0:0`,()=>s(()=>{let e=_(`ref:1:0`,()=>t(!1)),n=_(`ref:1:1`,()=>t(0)),i=_(`ref:1:2`,()=>t(!1)),a=_(`ref:1:3`,()=>t(0)),o=_(`ref:1:4`,()=>t(`preview`)),s=_(`computed:1:5`,()=>r(()=>`modal-normal-late-target-`+n.value)),c=s,l=_(`computed:1:6`,()=>r(()=>`modal-defer-late-target-`+a.value)),u=l;return n.value>0&&queueMicrotask(()=>T(`modal-normal-late-shell`,c.get())),a.value>0&&queueMicrotask(()=>T(`modal-defer-late-shell`,u.get())),{visibleModal:e,normalRun:n,normalActive:i,deferRun:a,activeTab:o,normalTargetId:s,deferTargetId:l}}));return c(t=>{let r=m(),s=o(`rue:component:anchor`);return n(r,s),d(p(x,{children:c(()=>{let t=m(),r=u(`h1`,t);n(t,r),a(r,`text-5xl font-semibold mb-4 md:mb-4`),n(r,f(`带过渡动效的模态框（移植自 Vue）`));let s=u(`div`,t);n(t,s),l(s,`role`,`tablist`),a(s,`tabs tabs-box`);let _=u(`button`,s);n(s,_),l(_,`role`,`tab`),g(()=>{a(_,`tab ${k.value===`preview`?`tab-active`:``}`)}),i(_,`click`,()=>{k.value=`preview`}),n(_,f(`效果`));let x=u(`button`,s);n(s,x),l(x,`role`,`tab`),g(()=>{a(x,`tab ${k.value===`code`?`tab-active`:``}`)}),i(x,`click`,()=>{k.value=`code`}),n(x,f(`代码`));let M=u(`div`,t);n(t,M),a(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=o(`rue:slot:anchor`);n(M,N),g(()=>{let t=k.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),a(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=o(`rue:component:anchor`);return n(r,i),g(()=>{let t=p(b,{className:`h-full`,lang:`tsx`,code:C});e(()=>d(t,r,i))}),t}):``;e(()=>d(t,M,N))}),n(M,f(` `));let P=o(`rue:slot:anchor`);return n(M,P),g(()=>{let t=k.value===`preview`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),a(r,`grid gap-6`);let s=u(`div`,r);n(r,s),a(s,`card bg-base-100 shadow`);let _=u(`div`,s);n(s,_),a(_,`card-body grid gap-4`);let b=u(`button`,_);n(_,b),l(b,`id`,`visible-modal`),a(b,`btn btn-primary w-fit`),i(b,`click`,()=>{h.value=!0}),n(b,f(`Visible Modal`));let x=o(`rue:component:anchor`);n(_,x),g(()=>{let t=p(w,{visible:h.value,onClose:()=>{h.value=!1}});e(()=>d(t,_,x))});let C=u(`div`,r);n(r,C),a(C,`card bg-base-100 shadow`);let k=u(`div`,C);n(C,k),a(k,`card-body grid gap-4`);let M=u(`div`,k);n(k,M);let N=u(`h2`,M);n(M,N),a(N,`card-title text-xl`),n(N,f(`Teleport defer 对照`));let P=u(`p`,M);n(M,P),a(P,`text-sm text-base-content/70`),n(P,f(`目标在同一轮更新末尾才出现：普通 Teleport 查找一次后结束，defer 会在微任务里再查找。`));let F=u(`div`,k);n(k,F),a(F,`grid gap-4 md:grid-cols-2`);let I=u(`section`,F);n(F,I),a(I,`rounded-box border border-base-300 p-4`);let L=u(`div`,I);n(I,L),a(L,`font-medium`),n(L,f(`不使用 defer`));let R=u(`button`,I);n(I,R),l(R,`id`,`run-normal-teleport`),a(R,`btn btn-outline btn-sm mt-3`),i(R,`click`,()=>{let e=v.value+1;E(`modal-normal-late-shell`),S.value=!0,queueMicrotask(()=>T(`modal-normal-late-shell`,`modal-normal-late-target-`+e)),queueMicrotask(()=>{S.value=!1}),v.value=e}),n(R,f(`Run normal`));let z=o(`rue:slot:anchor`);n(I,z),g(()=>{let t=v.value>0?c(()=>{let e=m(),t=u(`p`,e);return n(e,t),a(t,`mt-2 text-xs text-base-content/60`),n(t,f(`target 已晚到；普通 Teleport 没有再次解析。`)),e}):``;e(()=>d(t,I,z))}),n(I,f(` `));let B=o(`rue:slot:anchor`);n(I,B),g(()=>{let t=S.value&&v.value>0?c(()=>{let t=m(),r=o(`rue:component:anchor`);n(t,r);let i=c(()=>{let e=m(),t=u(`div`,e);return n(e,t),a(t,`alert alert-warning mt-3 py-3`),n(t,f(`Normal payload`)),e});return g(()=>{let n=p(y,{to:`#`+A.get(),children:i});e(()=>d(n,t,r))}),t}):``;e(()=>d(t,I,B))});let V=o(`rue:component:anchor`);n(I,V),d(p(D,{shellId:`modal-normal-late-shell`,label:`late target`}),I,V);let H=u(`section`,F);n(F,H),a(H,`rounded-box border border-info/40 p-4`);let U=u(`div`,H);n(H,U),a(U,`font-medium`),n(U,f(`使用 defer`));let W=u(`button`,H);n(H,W),l(W,`id`,`run-defer-teleport`),a(W,`btn btn-primary btn-sm mt-3`),i(W,`click`,()=>{let e=O.value+1;E(`modal-defer-late-shell`),queueMicrotask(()=>T(`modal-defer-late-shell`,`modal-defer-late-target-`+e)),O.value=e}),n(W,f(`Run defer`));let G=o(`rue:slot:anchor`);n(H,G),g(()=>{let t=O.value>0?c(()=>{let e=m(),t=u(`p`,e);return n(e,t),a(t,`mt-2 text-xs text-base-content/60`),n(t,f(`target 晚到后，defer 重新解析并传送内容。`)),e}):``;e(()=>d(t,H,G))}),n(H,f(` `));let K=o(`rue:slot:anchor`);n(H,K),g(()=>{let t=O.value>0?c(()=>{let t=m(),r=o(`rue:component:anchor`);n(t,r);let i=c(()=>{let e=m(),t=u(`div`,e);return n(e,t),a(t,`alert alert-info mt-3 py-3`),n(t,f(`Deferred payload`)),e});return g(()=>{let n=p(y,{to:`#`+j.get(),defer:!0,children:i});e(()=>d(n,t,r))}),t}):``;e(()=>d(t,H,K))});let q=o(`rue:component:anchor`);return n(H,q),d(p(D,{shellId:`modal-defer-late-shell`,label:`late target`}),H,q),t}):``;e(()=>d(t,M,P))}),t})}),r,s),r})};export{O as default};