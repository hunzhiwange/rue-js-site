import{Q as e,Vt as t,Xt as n,Z as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,t as p,tn as m,tt as h,wt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Transition-ddE8wpt4.js";import{t as y}from"./Teleport-bniowk5x.js";import{t as b}from"./Code-BoXKy3gJ.js";import{r as x}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var S=`
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

export default ModalExample;`,w=n=>s(a=>{let u=c(),m=f(`style`,u);e(u,m),t(()=>{i(m,S)});let g=h(`rue:component:anchor`);return e(u,g),l(p(y,{to:`body`,children:p(v,{name:`modal`,type:`transition`,duration:300,appear:!0,__rueTransitionChildFactory:()=>n.visible?s(()=>{let t=c(),i=f(`div`,t);e(t,i),d(i,`modal-mask`),r(i,`click`,()=>{n.onClose&&n.onClose()});let a=f(`div`,i);e(i,a),d(a,`modal-container`),r(a,`click`,e=>{e.stopPropagation()});let s=f(`div`,a);e(a,s),d(s,`modal-header`);let l=f(`h3`,s);e(s,l),e(l,o(`Custom Header`));let u=f(`div`,a);e(a,u),d(u,`modal-body`);let p=f(`p`,u);e(u,p),e(p,o(`Custom body content is rendered inside the transitioned modal.`));let m=f(`div`,a);e(a,m),d(m,`modal-footer`);let h=f(`button`,m);return e(m,h),d(h,`modal-default-button`),r(h,`click`,()=>{n.onClose&&n.onClose()}),e(h,o(`OK`)),t}):null})}),u,g),u}),T=(e,t)=>{if(typeof document>`u`)return;let n=document.getElementById(e);if(!n||document.getElementById(t))return;let r=document.createElement(`div`);r.id=t,r.className=`mt-3 min-h-16 rounded-box border border-dashed border-info/50 bg-base-100 p-3`,r.textContent=`late target created`,n.appendChild(r)},E=e=>{typeof document>`u`||document.getElementById(e)?.replaceChildren()},D=n=>s(r=>{let i=f(`div`,r);d(i,`mt-3 rounded-box border border-base-300 bg-base-100 p-3`);let o=f(`div`,i);e(i,o),d(o,`text-xs font-medium uppercase tracking-wide text-base-content/50`);let s=h(`rue:slot:anchor`);e(o,s),t(()=>{let e=n.label;m(()=>l(e,o,s))});let c=f(`div`,i);return e(i,c),t(()=>{a(c,`id`,String(n.shellId))}),i}),O=()=>{let{visibleModal:i,normalRun:v,normalActive:S,deferRun:O,activeTab:k,normalTargetId:A,deferTargetId:j}=_(`useSetup:0:0`,()=>u(()=>{let e=_(`ref:1:0`,()=>n(!1)),t=_(`ref:1:1`,()=>n(0)),r=_(`ref:1:2`,()=>n(!1)),i=_(`ref:1:3`,()=>n(0)),a=_(`ref:1:4`,()=>n(`preview`)),o=_(`computed:1:5`,()=>g(()=>`modal-normal-late-target-`+t.value)),s=o,c=_(`computed:1:6`,()=>g(()=>`modal-defer-late-target-`+i.value)),l=c;return t.value>0&&queueMicrotask(()=>T(`modal-normal-late-shell`,s.get())),i.value>0&&queueMicrotask(()=>T(`modal-defer-late-shell`,l.get())),{visibleModal:e,normalRun:t,normalActive:r,deferRun:i,activeTab:a,normalTargetId:o,deferTargetId:c}}));return s(n=>{let u=c(),g=h(`rue:component:anchor`);return e(u,g),l(p(x,{children:s(()=>{let n=c(),u=f(`h1`,n);e(n,u),d(u,`text-5xl font-semibold mb-4 md:mb-4`),e(u,o(`带过渡动效的模态框（移植自 Vue）`));let g=f(`div`,n);e(n,g),a(g,`role`,`tablist`),d(g,`tabs tabs-box`);let _=f(`button`,g);e(g,_),a(_,`role`,`tab`),t(()=>{d(_,`tab ${k.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{k.value=`preview`}),e(_,o(`效果`));let x=f(`button`,g);e(g,x),a(x,`role`,`tab`),t(()=>{d(x,`tab ${k.value===`code`?`tab-active`:``}`)}),r(x,`click`,()=>{k.value=`code`}),e(x,o(`代码`));let M=f(`div`,n);e(n,M),d(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=h(`rue:slot:anchor`);e(M,N),t(()=>{let n=k.value===`code`?s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=h(`rue:component:anchor`);return e(r,i),t(()=>{let e=p(b,{className:`h-full`,lang:`tsx`,code:C});m(()=>l(e,r,i))}),n}):``;m(()=>l(n,M,N))}),e(M,o(` `));let P=h(`rue:slot:anchor`);return e(M,P),t(()=>{let n=k.value===`preview`?s(()=>{let n=c(),u=f(`div`,n);e(n,u),d(u,`grid gap-6`);let g=f(`div`,u);e(u,g),d(g,`card bg-base-100 shadow`);let _=f(`div`,g);e(g,_),d(_,`card-body grid gap-4`);let b=f(`button`,_);e(_,b),a(b,`id`,`visible-modal`),d(b,`btn btn-primary w-fit`),r(b,`click`,()=>{i.value=!0}),e(b,o(`Visible Modal`));let x=h(`rue:component:anchor`);e(_,x),t(()=>{let e=p(w,{visible:i.value,onClose:()=>{i.value=!1}});m(()=>l(e,_,x))});let C=f(`div`,u);e(u,C),d(C,`card bg-base-100 shadow`);let k=f(`div`,C);e(C,k),d(k,`card-body grid gap-4`);let M=f(`div`,k);e(k,M);let N=f(`h2`,M);e(M,N),d(N,`card-title text-xl`),e(N,o(`Teleport defer 对照`));let P=f(`p`,M);e(M,P),d(P,`text-sm text-base-content/70`),e(P,o(`目标在同一轮更新末尾才出现：普通 Teleport 查找一次后结束，defer 会在微任务里再查找。`));let F=f(`div`,k);e(k,F),d(F,`grid gap-4 md:grid-cols-2`);let I=f(`section`,F);e(F,I),d(I,`rounded-box border border-base-300 p-4`);let L=f(`div`,I);e(I,L),d(L,`font-medium`),e(L,o(`不使用 defer`));let R=f(`button`,I);e(I,R),a(R,`id`,`run-normal-teleport`),d(R,`btn btn-outline btn-sm mt-3`),r(R,`click`,()=>{let e=v.value+1;E(`modal-normal-late-shell`),S.value=!0,queueMicrotask(()=>T(`modal-normal-late-shell`,`modal-normal-late-target-`+e)),queueMicrotask(()=>{S.value=!1}),v.value=e}),e(R,o(`Run normal`));let z=h(`rue:slot:anchor`);e(I,z),t(()=>{let t=v.value>0?s(()=>{let t=c(),n=f(`p`,t);return e(t,n),d(n,`mt-2 text-xs text-base-content/60`),e(n,o(`target 已晚到；普通 Teleport 没有再次解析。`)),t}):``;m(()=>l(t,I,z))}),e(I,o(` `));let B=h(`rue:slot:anchor`);e(I,B),t(()=>{let n=S.value&&v.value>0?s(()=>{let n=c(),r=h(`rue:component:anchor`);e(n,r);let i=s(()=>{let t=c(),n=f(`div`,t);return e(t,n),d(n,`alert alert-warning mt-3 py-3`),e(n,o(`Normal payload`)),t});return t(()=>{let e=p(y,{to:`#`+A.get(),children:i});m(()=>l(e,n,r))}),n}):``;m(()=>l(n,I,B))});let V=h(`rue:component:anchor`);e(I,V),l(p(D,{shellId:`modal-normal-late-shell`,label:`late target`}),I,V);let H=f(`section`,F);e(F,H),d(H,`rounded-box border border-info/40 p-4`);let U=f(`div`,H);e(H,U),d(U,`font-medium`),e(U,o(`使用 defer`));let W=f(`button`,H);e(H,W),a(W,`id`,`run-defer-teleport`),d(W,`btn btn-primary btn-sm mt-3`),r(W,`click`,()=>{let e=O.value+1;E(`modal-defer-late-shell`),queueMicrotask(()=>T(`modal-defer-late-shell`,`modal-defer-late-target-`+e)),O.value=e}),e(W,o(`Run defer`));let G=h(`rue:slot:anchor`);e(H,G),t(()=>{let t=O.value>0?s(()=>{let t=c(),n=f(`p`,t);return e(t,n),d(n,`mt-2 text-xs text-base-content/60`),e(n,o(`target 晚到后，defer 重新解析并传送内容。`)),t}):``;m(()=>l(t,H,G))}),e(H,o(` `));let K=h(`rue:slot:anchor`);e(H,K),t(()=>{let n=O.value>0?s(()=>{let n=c(),r=h(`rue:component:anchor`);e(n,r);let i=s(()=>{let t=c(),n=f(`div`,t);return e(t,n),d(n,`alert alert-info mt-3 py-3`),e(n,o(`Deferred payload`)),t});return t(()=>{let e=p(y,{to:`#`+j.get(),defer:!0,children:i});m(()=>l(e,n,r))}),n}):``;m(()=>l(n,H,K))});let q=h(`rue:component:anchor`);return e(H,q),l(p(D,{shellId:`modal-defer-late-shell`,label:`late target`}),H,q),n}):``;m(()=>l(n,M,P))}),n})}),u,g),u})};export{O as default};