import{Bt as e,H as t,Ht as n,Jt as r,U as i,Ut as a,V as o,Vt as s,Wt as c,Y as l,_t as u,dn as d,en as f,fn as p,gn as m,gt as h,hn as g,i as _,in as v,mn as y,n as b,pn as x,sn as S,st as C,tt as w,u as T,vn as E,vt as D,yn as O,yt as k,zt as A}from"./rue-runtime-Cv6BZekS.js";import{t as j}from"./Code-BzFVdc3U.js";import{r as M}from"./SidebarPlaygroundExample-rFyhXfC_.js";var N=O(`<div class="modal-mask"><div class="modal-container"><div class="modal-header"><h3>Custom Header</h3></div><div class="modal-body"><p>Custom body content is rendered inside the transitioned modal.</p></div><div class="modal-footer"><button class="modal-default-button">OK</button></div></div></div>`),P=O(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带过渡动效的模态框（移植自 Vue）</h1>`),F=O(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),I=O(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),L=`
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

export default ModalExample;`,z=(e,t,n)=>{let r=D(h(e,`onClose`)),a=D(h(e,`visible`));return i(c(e=>{let t=y();p(t,m(` `));let n=g(`style`,t);p(t,n),v(()=>{E(n,L)}),p(t,m(` `)),_(()=>({to:`body`,children:(e,t,n)=>{let i=()=>c(e=>{let t=y();b(()=>({name:`modal`,type:`transition`,duration:300,appear:!0,childKey:a.get(),children:a.get()?(e,t,n)=>{let i=()=>c(e=>{let t=N().content.cloneNode(!0).firstChild,n=t,i=t.childNodes[0],a=t.childNodes[0].childNodes[2].childNodes[0];n.setAttribute(`class`,`modal-mask`),S(T(e,n,`click`,()=>()=>{r.get()&&r.get()()})),i.setAttribute(`class`,`modal-container`);let o=e=>{let t=e=>{e.stopPropagation()};typeof t==`function`&&t(e)};return i.addEventListener(`click`,o),S(()=>i.removeEventListener(`click`,o)),a.setAttribute(`class`,`modal-default-button`),S(T(e,a,`click`,()=>()=>{r.get()&&r.get()()})),[t,t]});return e==null?i():s(e,n,i)}:(e,t,n)=>{let r=()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})).__rue_compiled_mount(t,null);let n=m(``),i=m(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():s(e,n,i)}})).__rue_compiled_mount(t,null),p(t,m(` `));let i=m(``),o=m(``);return t.insertBefore(i,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]}),e=>f(()=>{r.set(e.onClose),a.set(e.visible)}),()=>u(e))},B=(e,t)=>{if(typeof document>`u`)return;let n=document.getElementById(e);if(!n||document.getElementById(t))return;let r=document.createElement(`div`);r.id=t,r.className=`mt-3 min-h-16 rounded-box border border-dashed border-info/50 bg-base-100 p-3`,r.textContent=`late target created`,n.appendChild(r)},V=e=>{typeof document>`u`||document.getElementById(e)?.replaceChildren()},H=(t,n,r)=>{let a=D(h(t,`label`)),o=D(h(t,`shellId`));return i(c(t=>{let n=g(`div`,t);n.setAttribute(`class`,`mt-3 rounded-box border border-base-300 bg-base-100 p-3`);let r=g(`div`,n);p(n,r),r.setAttribute(`class`,`text-xs font-medium uppercase tracking-wide text-base-content/50`);let i=x(`rue:compiled-slot`);p(r,i),e({parent:r,before:i},()=>A(a.get()),()=>({}));let s=g(`div`,n);p(n,s);let c;return v(()=>{let e=o.get();Object.is(c,e)||(c=e,e==null||e===!1?s.removeAttribute(`id`):s.setAttribute(`id`,String(e)))}),[n,n]}),e=>f(()=>{a.set(e.label),o.set(e.shellId)}),()=>u(t))},U=(e,i,u)=>l(()=>n(()=>{let{visibleModal:e,normalRun:i,normalActive:l,deferRun:u,activeTab:f,normalTargetId:h,__rue_phase2_normalTargetId:b,deferTargetId:x,__rue_phase2_deferTargetId:E}=r(`ModalExample:setup-region:0`,()=>{let e=C(!1),t=C(0),n=C(!1),r=C(0),i=C(`preview`),a=w(()=>`modal-normal-late-target-`+t.value);d(()=>a.get());let o=a,s=w(()=>`modal-defer-late-target-`+r.value);return d(()=>s.get()),{visibleModal:e,normalRun:t,normalActive:n,deferRun:r,activeTab:i,normalTargetId:a,__rue_phase2_normalTargetId:o,deferTargetId:s,__rue_phase2_deferTargetId:s}});return i.value>0&&queueMicrotask(()=>B(`modal-normal-late-shell`,b.get())),u.value>0&&queueMicrotask(()=>B(`modal-defer-late-shell`,E.get())),{__rue_compiled_branch_key:0,create:()=>o(M,()=>({children:(r,o,d)=>{let b=()=>c(r=>{let o=y();o.appendChild(P().content.cloneNode(!0));let d=F().content.cloneNode(!0),b=d.firstChild,C=b.childNodes[0],w=b.childNodes[1];o.appendChild(d),C.setAttribute(`role`,`tab`);let E;v(()=>{let e=`tab ${f.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(E,t)||(E=t,C.setAttribute(`class`,t))}),S(T(r,C,`click`,()=>()=>{f.value=`preview`})),w.setAttribute(`role`,`tab`);let D;v(()=>{let e=`tab ${f.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,w.setAttribute(`class`,t))}),S(T(r,w,`click`,()=>()=>{f.value=`code`}));let O=I().content.cloneNode(!0),A=O.firstChild,M=A.childNodes[0],N=M.parentNode,L=A.childNodes[1],U=L.parentNode;o.appendChild(O),a(N,M,()=>{let e=f.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let n=g(`div`,e);return n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`),t(n,j,()=>({className:`h-full`,lang:`tsx`,code:R})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>k(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}}),a(U,L,()=>{let r=f.value===`preview`;return r?{__rue_compiled_branch_key:!0,create:()=>c(r=>{let a=g(`div`,r);a.setAttribute(`class`,`grid gap-6`);let o=g(`div`,a);p(a,o),o.setAttribute(`class`,`card bg-base-100 shadow`);let c=g(`div`,o);p(o,c),c.setAttribute(`class`,`card-body grid gap-4`);let d=g(`button`,c);p(c,d),d.setAttribute(`id`,`visible-modal`),d.setAttribute(`class`,`btn btn-primary w-fit`),S(T(r,d,`click`,()=>()=>{e.value=!0})),p(d,m(`Visible Modal`)),t(c,z,()=>({visible:e.value,onClose:()=>{e.value=!1}}));let f=g(`div`,a);p(a,f),f.setAttribute(`class`,`card bg-base-100 shadow`);let v=g(`div`,f);p(f,v),v.setAttribute(`class`,`card-body grid gap-4`);let b=g(`div`,v);p(v,b);let C=g(`h2`,b);p(b,C),C.setAttribute(`class`,`card-title text-xl`),p(C,m(`Teleport defer 对照`));let w=g(`p`,b);p(b,w),w.setAttribute(`class`,`text-sm text-base-content/70`),p(w,m(`目标在同一轮更新末尾才出现：普通 Teleport 查找一次后结束，defer 会在微任务里再查找。`));let E=g(`div`,v);p(v,E),E.setAttribute(`class`,`grid gap-4 md:grid-cols-2`);let D=g(`section`,E);p(E,D),D.setAttribute(`class`,`rounded-box border border-base-300 p-4`);let O=g(`div`,D);p(D,O),O.setAttribute(`class`,`font-medium`),p(O,m(`不使用 defer`));let A=g(`button`,D);p(D,A),A.setAttribute(`id`,`run-normal-teleport`),A.setAttribute(`class`,`btn btn-outline btn-sm mt-3`),S(T(r,A,`click`,()=>()=>{let e=i.value+1;V(`modal-normal-late-shell`),l.value=!0,queueMicrotask(()=>B(`modal-normal-late-shell`,`modal-normal-late-target-`+e)),queueMicrotask(()=>{l.value=!1}),i.value=e})),p(A,m(`Run normal`)),n(()=>i.value>0?{__rue_compiled_branch_key:!0,create:()=>k(e=>{let t=g(`p`,e);return t.setAttribute(`class`,`mt-2 text-xs text-base-content/60`),p(t,m(`target 已晚到；普通 Teleport 没有再次解析。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(D),n(()=>l.value&&i.value>0?{__rue_compiled_branch_key:!0,create:()=>_(()=>({to:`#`+h.get(),children:(e,t,n)=>{let r=()=>k(e=>{let t=y(),n=g(`div`,t);p(t,n),n.setAttribute(`class`,`alert alert-warning mt-3 py-3`),p(n,m(`Normal payload`));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}))}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(D),t(D,H,()=>({shellId:`modal-normal-late-shell`,label:`late target`}));let j=g(`section`,E);p(E,j),j.setAttribute(`class`,`rounded-box border border-info/40 p-4`);let M=g(`div`,j);p(j,M),M.setAttribute(`class`,`font-medium`),p(M,m(`使用 defer`));let N=g(`button`,j);return p(j,N),N.setAttribute(`id`,`run-defer-teleport`),N.setAttribute(`class`,`btn btn-primary btn-sm mt-3`),S(T(r,N,`click`,()=>()=>{let e=u.value+1;V(`modal-defer-late-shell`),queueMicrotask(()=>B(`modal-defer-late-shell`,`modal-defer-late-target-`+e)),u.value=e})),p(N,m(`Run defer`)),n(()=>u.value>0?{__rue_compiled_branch_key:!0,create:()=>k(e=>{let t=g(`p`,e);return t.setAttribute(`class`,`mt-2 text-xs text-base-content/60`),p(t,m(`target 晚到后，defer 重新解析并传送内容。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(j),n(()=>u.value>0?{__rue_compiled_branch_key:!0,create:()=>_(()=>({to:`#`+x.get(),defer:!0,children:(e,t,n)=>{let r=()=>k(e=>{let t=y(),n=g(`div`,t);p(t,n),n.setAttribute(`class`,`alert alert-info mt-3 py-3`),p(n,m(`Deferred payload`));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}))}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(j),t(j,H,()=>({shellId:`modal-defer-late-shell`,label:`late target`})),[a,a]})}:typeof r==`number`||typeof r==`bigint`?{__rue_compiled_branch_key:r,create:()=>k(e=>{let t=m(typeof r==`string`||typeof r==`number`||typeof r==`bigint`?r:``);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>k(e=>{let t=y();return[t.firstChild,t.lastChild]})}});let W=m(``),G=m(``);return o.insertBefore(W,o.firstChild),o.appendChild(G),[o.firstChild,o.lastChild]});return r==null?b():s(r,d,b)}}))}}));export{U as default};