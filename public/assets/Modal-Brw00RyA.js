import{$ as e,A as t,D as n,Ht as r,I as i,J as a,Lt as o,N as s,Q as c,X as l,Xt as u,Z as d,at as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y,zt as b}from"./vapor-runtime-iQZthBPQ.js";import{a as x}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as S}from"./BaseTransition-BnE9eveM.js";import{t as C}from"./Teleport--IYhcwEl.js";import{t as w}from"./Code-CZqShVUj.js";import{r as T}from"./SidebarPlaygroundExample-5H7RL-T7.js";var E=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>E(e,t)),t):(t.push(e),t),D=e=>Array.isArray(e)?e.map(e=>D(e)):e,O=e=>E(e)[0]??null,k=e=>e!=null&&e!==!1,A=e=>({...e,children:D(e.children)}),j=e=>{let r=g(()=>{let t=c(`span`);t.style.display=`contents`;let n=l(`rue-transition-start`),r=l(`rue-transition-end`);return a(t,n),a(t,r),{container:t,startEl:n,endEl:r,propsSig:b(A(e),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function o(){let e=r.startEl.nextSibling||null;for(;e&&e!==r.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function d(){s([],r.container,r.startEl,r.endEl)}return n(()=>{r.started||(r.started=!0,r.effect=u(()=>{let e=r.propsSig.get(),{runEnter:t,runLeave:n}=S(e),i=O(e.children),a=k(i),c=Symbol(`transition-render`);if(r.renderVersion=c,a)s(i,r.container,r.startEl,r.endEl),r.prevShown||(r.firstRender?queueMicrotask(()=>{if(r.renderVersion!==c)return;let n=o();n&&t(n,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(r.renderVersion!==c)return;let e=o();e&&t(e,`enter`)}));else if(r.prevShown){let e=o();e?n(e,()=>d()):d()}else d();r.prevShown=a,r.firstRender=!1}))}),t(()=>{r.effect&&=(r.effect.dispose(),null),r.started=!1}),i(()=>(r.propsSig.set(A(e)),r.container))},M=`
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
`,N=`import { type FC, Teleport, Transition, ref } from '@rue-js/rue';

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

const ModalExample: FC = () => {
  const visibleModal = ref(false);

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <button id="visible-modal" className="btn btn-primary w-fit" onClick={() => (visibleModal.value = true)}>
          Visible Modal
        </button>
        <Modal visible={visibleModal.value} onClose={() => (visibleModal.value = false)} />
      </div>
    </div>
  );
};

export default ModalExample;`,P=t=>p(n=>{let r=d(),i=c(`style`,r);a(r,i),u(()=>{m(i,M)});let o=l(`rue:component:anchor`);a(r,o);let s=p(()=>{let n=d(),r=c(`div`,n);a(n,r),v(r,`modal-mask`),h(r,`click`,()=>{t.onClose&&t.onClose()});let i=c(`div`,r);a(r,i),v(i,`modal-container`),h(i,`click`,e=>{e.stopPropagation()});let o=c(`div`,i);a(i,o),v(o,`modal-header`);let s=c(`h3`,o);a(o,s),a(s,e(`Custom Header`));let l=c(`div`,i);a(i,l),v(l,`modal-body`);let u=c(`p`,l);a(l,u),a(u,e(`Custom body content is rendered inside the transitioned modal.`));let f=c(`div`,i);a(i,f),v(f,`modal-footer`);let p=c(`button`,f);return a(f,p),v(p,`modal-default-button`),h(p,`click`,()=>{t.onClose&&t.onClose()}),a(p,e(`OK`)),n});return _(y(C,{to:`body`,children:y(j,{name:`modal`,type:`transition`,duration:300,appear:!0,children:t.visible?s:void 0})}),r,o),r}),F=()=>{let{visibleModal:t,activeTab:n}=x(`useSetup:0:0`,()=>g(()=>({visibleModal:x(`ref:1:0`,()=>o(!1)),activeTab:x(`ref:1:1`,()=>o(`preview`))})));return p(i=>{let o=d(),s=l(`rue:component:anchor`);return a(o,s),_(y(T,{children:p(()=>{let i=d(),o=c(`h1`,i);a(i,o),v(o,`text-5xl font-semibold mb-4 md:mb-4`),a(o,e(`带过渡动效的模态框（移植自 Vue）`));let s=c(`div`,i);a(i,s),f(s,`role`,`tablist`),v(s,`tabs tabs-box`);let m=c(`button`,s);a(s,m),f(m,`role`,`tab`),u(()=>{v(m,`tab ${n.value===`preview`?`tab-active`:``}`)}),h(m,`click`,()=>{n.value=`preview`}),a(m,e(`效果`));let g=c(`button`,s);a(s,g),f(g,`role`,`tab`),u(()=>{v(g,`tab ${n.value===`code`?`tab-active`:``}`)}),h(g,`click`,()=>{n.value=`code`}),a(g,e(`代码`));let b=c(`div`,i);a(i,b),v(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=l(`rue:slot:anchor`);a(b,x),u(()=>{let e=n.value===`code`?p(()=>{let e=d(),t=c(`div`,e);a(e,t),v(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let n=l(`rue:component:anchor`);return a(t,n),u(()=>{let e=y(w,{className:`h-full`,lang:`tsx`,code:N});r(()=>_(e,t,n))}),e}):``;r(()=>_(e,b,x))}),a(b,e(` `));let S=l(`rue:slot:anchor`);return a(b,S),u(()=>{let i=n.value===`preview`?p(()=>{let n=d(),i=c(`div`,n);a(n,i),v(i,`card bg-base-100 shadow`);let o=c(`div`,i);a(i,o),v(o,`card-body grid gap-4`);let s=c(`button`,o);a(o,s),f(s,`id`,`visible-modal`),v(s,`btn btn-primary w-fit`),h(s,`click`,()=>{t.value=!0}),a(s,e(`Visible Modal`));let p=l(`rue:component:anchor`);return a(o,p),u(()=>{let e=y(P,{visible:t.value,onClose:()=>{t.value=!1}});r(()=>_(e,o,p))}),n}):``;r(()=>_(i,b,S))}),i})}),o,s),o})};export{F as default};