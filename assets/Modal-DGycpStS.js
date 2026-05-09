import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,Y as s,at as c,c as l,j as u,l as d,o as f,pt as p,rt as m,s as h,t as g,u as _,ut as v}from"./vapor-runtime-CKndxKFn.js";import{a as y}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as b}from"./BaseTransition-CK0PN5gh.js";import{t as x}from"./Teleport-DBllQu8z.js";import{t as S}from"./Code-B1JFTu6m.js";import{t as C}from"./SidebarPlaygroundExample-DlK8mtjC.js";var w=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>w(e,t)),t):(t.push(e),t),T=e=>Array.isArray(e)?e.map(e=>T(e)):e,E=e=>w(e)[0]??null,D=e=>e!=null&&e!==!1,O=e=>({...e,children:T(e.children)}),k=e=>{let n=v(()=>{let n=t(`span`);n.style.display=`contents`;let r=i(`rue-transition-start`),a=i(`rue-transition-end`);return u(n,r),u(n,a),{container:n,startEl:r,endEl:a,propsSig:c(O(e),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function r(){let e=n.startEl.nextSibling||null;for(;e&&e!==n.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function a(){d([],n.container,n.startEl,n.endEl)}return f(()=>{n.started||(n.started=!0,n.effect=p(()=>{let e=n.propsSig.get(),{runEnter:t,runLeave:i}=b(e),o=E(e.children),s=D(o),c=Symbol(`transition-render`);if(n.renderVersion=c,s)d(o,n.container,n.startEl,n.endEl),n.prevShown||(n.firstRender?queueMicrotask(()=>{if(n.renderVersion!==c)return;let i=r();i&&t(i,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(n.renderVersion!==c)return;let e=r();e&&t(e,`enter`)}));else if(n.prevShown){let e=r();e?i(e,()=>a()):a()}else a();n.prevShown=s,n.firstRender=!1}))}),h(()=>{n.effect&&=(n.effect.dispose(),null),n.started=!1}),_(()=>(n.propsSig.set(O(e)),n.container))},A=`
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
`,j=`import { type FC, Teleport, Transition, ref } from '@rue-js/rue';

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

export default ModalExample;`,M=n=>_(()=>{let c=a(),d=t(`style`);u(c,d),p(()=>{s(d,A)});let f=i(`rue:component:anchor`);return u(c,f),l(g(x,{to:`body`,children:_(()=>{let s=a(),c=i(`rue:component:anchor`);u(s,c);let d=_(()=>{let i=a(),s=t(`div`);u(i,s),o(s,`modal-mask`),e(s,`click`,()=>{n.onClose&&n.onClose()});let c=t(`div`);u(s,c),o(c,`modal-container`),e(c,`click`,e=>{e.stopPropagation()});let l=t(`div`);u(c,l),o(l,`modal-header`);let d=t(`h3`);u(l,d),u(d,r(`Custom Header`));let f=t(`div`);u(c,f),o(f,`modal-body`);let p=t(`p`);u(f,p),u(p,r(`Custom body content here...`));let m=t(`div`);u(c,m),o(m,`modal-footer`);let h=t(`button`);return u(m,h),o(h,`modal-default-button`),e(h,`click`,()=>{n.onClose&&n.onClose()}),u(h,r(`OK`)),i});return p(()=>{l(g(k,{name:`modal`,type:`transition`,duration:300,appear:!0,children:n.visible?d:void 0}),s,c)}),s})}),c,f),c}),N=()=>{let{visibleModal:s,activeTab:c}=y(`useSetup:0:0`,()=>v(()=>({visibleModal:y(`ref:1:0`,()=>m(!1)),activeTab:y(`ref:1:1`,()=>m(`preview`))})));return _(()=>{let d=a(),f=i(`rue:component:anchor`);return u(d,f),l(g(C,{children:_(()=>{let d=a(),f=t(`h1`);u(d,f),o(f,`text-5xl font-semibold mb-4 md:mb-4`),u(f,r(`带过渡动效的模态框（移植自 Vue）`));let m=t(`div`);u(d,m),n(m,`role`,`tablist`),o(m,`tabs tabs-box`);let h=t(`button`);u(m,h),n(h,`role`,`tab`),p(()=>{o(h,String(`tab ${c.value===`preview`?`tab-active`:``}`))}),e(h,`click`,()=>{c.value=`preview`}),u(h,r(`效果`));let v=t(`button`);u(m,v),n(v,`role`,`tab`),p(()=>{o(v,String(`tab ${c.value===`code`?`tab-active`:``}`))}),e(v,`click`,()=>{c.value=`code`}),u(v,r(`代码`));let y=t(`div`);u(d,y),o(y,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let b=i(`rue:slot:anchor`);u(y,b),p(()=>{l(c.value===`code`?_(()=>{let e=a(),n=t(`div`);u(e,n),o(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=i(`rue:component:anchor`);return u(n,r),p(()=>{l(g(S,{className:`h-full`,lang:`tsx`,code:j}),n,r)}),e}):``,y,b)}),u(y,r(` `));let x=i(`rue:slot:anchor`);return u(y,x),p(()=>{l(c.value===`preview`?_(()=>{let c=a(),d=t(`div`);u(c,d),o(d,`card bg-base-100 shadow`);let f=t(`div`);u(d,f),o(f,`card-body grid gap-4`);let m=t(`button`);u(f,m),n(m,`id`,`visible-modal`),o(m,`btn btn-primary w-fit`),e(m,`click`,()=>{s.value=!0}),u(m,r(`Visible Modal`));let h=i(`rue:component:anchor`);return u(f,h),p(()=>{l(g(M,{visible:s.value,onClose:()=>{s.value=!1}}),f,h)}),c}):``,y,x)}),d})}),d,f),d})};export{N as default};