import{$ as e,B as t,D as n,Dt as r,G as i,H as a,O as o,P as s,U as c,W as l,Z as u,_t as d,at as f,ht as p,j as m,l as h,s as g,t as _,wt as v,yt as y,z as b}from"./vapor-runtime-C1rlwc61.js";import{a as x}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as S}from"./BaseTransition-BUHIgwhj.js";import{t as C}from"./Teleport-C_QtYL7W.js";import{t as w}from"./Code-BCLFq1E3.js";import{t as T}from"./SidebarPlaygroundExample-CdMvdgT7.js";var E=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>E(e,t)),t):(t.push(e),t),D=e=>Array.isArray(e)?e.map(e=>D(e)):e,O=e=>E(e)[0]??null,k=e=>e!=null&&e!==!1,A=e=>({...e,children:D(e.children)}),j=e=>{let i=v(()=>{let n=l(`span`);n.style.display=`contents`;let r=a(`rue-transition-start`),i=a(`rue-transition-end`);return t(n,r),t(n,i),{container:n,startEl:r,endEl:i,propsSig:d(A(e),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function c(){let e=i.startEl.nextSibling||null;for(;e&&e!==i.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function u(){m([],i.container,i.startEl,i.endEl)}return n(()=>{i.started||(i.started=!0,i.effect=r(()=>{let e=i.propsSig.get(),{runEnter:t,runLeave:n}=S(e),r=O(e.children),a=k(r),o=Symbol(`transition-render`);if(i.renderVersion=o,a)m(r,i.container,i.startEl,i.endEl),i.prevShown||(i.firstRender?queueMicrotask(()=>{if(i.renderVersion!==o)return;let n=c();n&&t(n,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(i.renderVersion!==o)return;let e=c();e&&t(e,`enter`)}));else if(i.prevShown){let e=c();e?n(e,()=>u()):u()}else u();i.prevShown=a,i.firstRender=!1}))}),o(()=>{i.effect&&=(i.effect.dispose(),null),i.started=!1}),s(()=>(i.propsSig.set(A(e)),i.container))},M=`
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
                <p>Custom body content here...</p>
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

export default ModalExample;`,P=n=>h(o=>{let s=c(),u=l(`style`,s);t(s,u),r(()=>{f(u,M)});let d=a(`rue:component:anchor`);t(s,d);let p=h(()=>{let r=c(),a=l(`div`,r);t(r,a),e(a,`modal-mask`),b(a,`click`,()=>{n.onClose&&n.onClose()});let o=l(`div`,a);t(a,o),e(o,`modal-container`),b(o,`click`,e=>{e.stopPropagation()});let s=l(`div`,o);t(o,s),e(s,`modal-header`);let u=l(`h3`,s);t(s,u),t(u,i(`Custom Header`));let d=l(`div`,o);t(o,d),e(d,`modal-body`);let f=l(`p`,d);t(d,f),t(f,i(`Custom body content here...`));let p=l(`div`,o);t(o,p),e(p,`modal-footer`);let m=l(`button`,p);return t(p,m),e(m,`modal-default-button`),b(m,`click`,()=>{n.onClose&&n.onClose()}),t(m,i(`OK`)),r});return g(_(C,{to:`body`,children:_(j,{name:`modal`,type:`transition`,duration:300,appear:!0,children:n.visible?p:void 0})}),s,d),s}),F=()=>{let{visibleModal:n,activeTab:o}=x(`useSetup:0:0`,()=>v(()=>({visibleModal:x(`ref:1:0`,()=>p(!1)),activeTab:x(`ref:1:1`,()=>p(`preview`))})));return h(s=>{let d=c(),f=a(`rue:component:anchor`);return t(d,f),g(_(T,{children:h(()=>{let s=c(),d=l(`h1`,s);t(s,d),e(d,`text-5xl font-semibold mb-4 md:mb-4`),t(d,i(`带过渡动效的模态框（移植自 Vue）`));let f=l(`div`,s);t(s,f),u(f,`role`,`tablist`),e(f,`tabs tabs-box`);let p=l(`button`,f);t(f,p),u(p,`role`,`tab`),r(()=>{e(p,String(`tab ${o.value===`preview`?`tab-active`:``}`))}),b(p,`click`,()=>{o.value=`preview`}),t(p,i(`效果`));let m=l(`button`,f);t(f,m),u(m,`role`,`tab`),r(()=>{e(m,String(`tab ${o.value===`code`?`tab-active`:``}`))}),b(m,`click`,()=>{o.value=`code`}),t(m,i(`代码`));let v=l(`div`,s);t(s,v),e(v,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=a(`rue:slot:anchor`);t(v,x),r(()=>{let n=o.value===`code`?h(()=>{let n=c(),i=l(`div`,n);t(n,i),e(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let o=a(`rue:component:anchor`);return t(i,o),r(()=>{let e=_(w,{className:`h-full`,lang:`tsx`,code:N});y(()=>g(e,i,o))}),n}):``;y(()=>g(n,v,x))}),t(v,i(` `));let S=a(`rue:slot:anchor`);return t(v,S),r(()=>{let s=o.value===`preview`?h(()=>{let o=c(),s=l(`div`,o);t(o,s),e(s,`card bg-base-100 shadow`);let d=l(`div`,s);t(s,d),e(d,`card-body grid gap-4`);let f=l(`button`,d);t(d,f),u(f,`id`,`visible-modal`),e(f,`btn btn-primary w-fit`),b(f,`click`,()=>{n.value=!0}),t(f,i(`Visible Modal`));let p=a(`rue:component:anchor`);return t(d,p),r(()=>{let e=_(P,{visible:n.value,onClose:()=>{n.value=!1}});y(()=>g(e,d,p))}),o}):``;y(()=>g(s,v,S))}),s})}),d,f),d})};export{F as default};