import{$ as e,$t as t,Bt as n,E as r,Gt as i,Ht as a,L as o,N as s,R as c,X as l,Xt as u,Z as d,ct as f,et as p,gt as m,k as h,l as g,nt as _,o as v,t as y,tt as b,ut as x}from"./vapor-runtime-CKrmRMZX.js";import{a as S}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as C}from"./BaseTransition-CAbV5vwn.js";import{t as w}from"./Teleport-DXcSJ21D.js";import{t as T}from"./Code-D5UqTwV6.js";import{r as E}from"./SidebarPlaygroundExample-D2vGHFCu.js";var D=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>D(e,t)),t):(t.push(e),t),O=e=>Array.isArray(e)?e.map(e=>O(e)):e,k=e=>D(e)[0]??null,A=e=>e!=null&&e!==!1,j=e=>({...e,children:O(e.children)}),M=n=>{let i=u(()=>{let t=b(`span`);t.style.display=`contents`;let r=e(`rue-transition-start`),i=e(`rue-transition-end`);return d(t,r),d(t,i),{container:t,startEl:r,endEl:i,propsSig:a(j(n),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function c(){let e=i.startEl.nextSibling||null;for(;e&&e!==i.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function l(){s([],i.container,i.startEl,i.endEl)}return r(()=>{i.started||(i.started=!0,i.effect=t(()=>{let e=i.propsSig.get(),{runEnter:t,runLeave:n}=C(e),r=k(e.children),a=A(r),o=Symbol(`transition-render`);if(i.renderVersion=o,a)s(r,i.container,i.startEl,i.endEl),i.prevShown||(i.firstRender?queueMicrotask(()=>{if(i.renderVersion!==o)return;let n=c();n&&t(n,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(i.renderVersion!==o)return;let e=c();e&&t(e,`enter`)}));else if(i.prevShown){let e=c();e?n(e,()=>l()):l()}else l();i.prevShown=a,i.firstRender=!1}))}),h(()=>{i.effect&&=(i.effect.dispose(),null),i.started=!1}),o(()=>(i.propsSig.set(j(n)),i.container))};c(M,`Transition`);var N=`
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
`,P=`import { type FC, Teleport, Transition, ref } from '@rue-js/rue';

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

export default ModalExample;`,F=n=>g(r=>{let i=p(),a=b(`style`,i);d(i,a),t(()=>{m(a,N)});let o=e(`rue:component:anchor`);d(i,o);let s=g(()=>{let e=p(),t=b(`div`,e);d(e,t),x(t,`modal-mask`),l(t,`click`,()=>{n.onClose&&n.onClose()});let r=b(`div`,t);d(t,r),x(r,`modal-container`),l(r,`click`,e=>{e.stopPropagation()});let i=b(`div`,r);d(r,i),x(i,`modal-header`);let a=b(`h3`,i);d(i,a),d(a,_(`Custom Header`));let o=b(`div`,r);d(r,o),x(o,`modal-body`);let s=b(`p`,o);d(o,s),d(s,_(`Custom body content is rendered inside the transitioned modal.`));let c=b(`div`,r);d(r,c),x(c,`modal-footer`);let u=b(`button`,c);return d(c,u),x(u,`modal-default-button`),l(u,`click`,()=>{n.onClose&&n.onClose()}),d(u,_(`OK`)),e});return v(y(w,{to:`body`,children:y(M,{name:`modal`,type:`transition`,duration:300,appear:!0,children:n.visible?s:void 0})}),i,o),i}),I=()=>{let{visibleModal:r,activeTab:a}=S(`useSetup:0:0`,()=>u(()=>({visibleModal:S(`ref:1:0`,()=>n(!1)),activeTab:S(`ref:1:1`,()=>n(`preview`))})));return g(n=>{let o=p(),s=e(`rue:component:anchor`);return d(o,s),v(y(E,{children:g(()=>{let n=p(),o=b(`h1`,n);d(n,o),x(o,`text-5xl font-semibold mb-4 md:mb-4`),d(o,_(`带过渡动效的模态框（移植自 Vue）`));let s=b(`div`,n);d(n,s),f(s,`role`,`tablist`),x(s,`tabs tabs-box`);let c=b(`button`,s);d(s,c),f(c,`role`,`tab`),t(()=>{x(c,`tab ${a.value===`preview`?`tab-active`:``}`)}),l(c,`click`,()=>{a.value=`preview`}),d(c,_(`效果`));let u=b(`button`,s);d(s,u),f(u,`role`,`tab`),t(()=>{x(u,`tab ${a.value===`code`?`tab-active`:``}`)}),l(u,`click`,()=>{a.value=`code`}),d(u,_(`代码`));let m=b(`div`,n);d(n,m),x(m,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let h=e(`rue:slot:anchor`);d(m,h),t(()=>{let n=a.value===`code`?g(()=>{let n=p(),r=b(`div`,n);d(n,r),x(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let a=e(`rue:component:anchor`);return d(r,a),t(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:P});i(()=>v(e,r,a))}),n}):``;i(()=>v(n,m,h))}),d(m,_(` `));let S=e(`rue:slot:anchor`);return d(m,S),t(()=>{let n=a.value===`preview`?g(()=>{let n=p(),a=b(`div`,n);d(n,a),x(a,`card bg-base-100 shadow`);let o=b(`div`,a);d(a,o),x(o,`card-body grid gap-4`);let s=b(`button`,o);d(o,s),f(s,`id`,`visible-modal`),x(s,`btn btn-primary w-fit`),l(s,`click`,()=>{r.value=!0}),d(s,_(`Visible Modal`));let c=e(`rue:component:anchor`);return d(o,c),t(()=>{let e=y(F,{visible:r.value,onClose:()=>{r.value=!1}});i(()=>v(e,o,c))}),n}):``;i(()=>v(n,m,S))}),n})}),o,s),o})};export{I as default};