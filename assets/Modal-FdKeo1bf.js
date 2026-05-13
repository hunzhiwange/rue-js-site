import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,Z as s,_t as c,bt as l,c as u,dt as d,j as f,l as p,lt as m,o as h,pt as g,s as _,t as v,u as y}from"./vapor-runtime-D3a-68js.js";import{a as b}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as x}from"./BaseTransition-B6HVmP4a.js";import{t as S}from"./Teleport-B4wG8-un.js";import{t as C}from"./Code-2C2psoH3.js";import{t as w}from"./SidebarPlaygroundExample-DKa0aI1C.js";var T=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>T(e,t)),t):(t.push(e),t),E=e=>Array.isArray(e)?e.map(e=>E(e)):e,D=e=>T(e)[0]??null,O=e=>e!=null&&e!==!1,k=e=>({...e,children:E(e.children)}),A=e=>{let t=c(()=>{let t=n(`span`);t.style.display=`contents`;let r=a(`rue-transition-start`),o=a(`rue-transition-end`);return i(t,r),i(t,o),{container:t,startEl:r,endEl:o,propsSig:d(k(e),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function r(){let e=t.startEl.nextSibling||null;for(;e&&e!==t.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function o(){p([],t.container,t.startEl,t.endEl)}return h(()=>{t.started||(t.started=!0,t.effect=l(()=>{let e=t.propsSig.get(),{runEnter:n,runLeave:i}=x(e),a=D(e.children),s=O(a),c=Symbol(`transition-render`);if(t.renderVersion=c,s)p(a,t.container,t.startEl,t.endEl),t.prevShown||(t.firstRender?queueMicrotask(()=>{if(t.renderVersion!==c)return;let i=r();i&&n(i,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(t.renderVersion!==c)return;let e=r();e&&n(e,`enter`)}));else if(t.prevShown){let e=r();e?i(e,()=>o()):o()}else o();t.prevShown=s,t.firstRender=!1}))}),_(()=>{t.effect&&=(t.effect.dispose(),null),t.started=!1}),y(()=>(t.propsSig.set(k(e)),t.container))},j=`
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
`,M=`import { type FC, Teleport, Transition, ref } from '@rue-js/rue';

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

export default ModalExample;`,N=o=>y(()=>{let c=e(),d=n(`style`);i(c,d),l(()=>{s(d,j)});let p=a(`rue:component:anchor`);i(c,p);let m=y(()=>{let a=e(),s=n(`div`);i(a,s),t(s,`modal-mask`),f(s,`click`,()=>{o.onClose&&o.onClose()});let c=n(`div`);i(s,c),t(c,`modal-container`),f(c,`click`,e=>{e.stopPropagation()});let l=n(`div`);i(c,l),t(l,`modal-header`);let u=n(`h3`);i(l,u),i(u,r(`Custom Header`));let d=n(`div`);i(c,d),t(d,`modal-body`);let p=n(`p`);i(d,p),i(p,r(`Custom body content here...`));let m=n(`div`);i(c,m),t(m,`modal-footer`);let h=n(`button`);return i(m,h),t(h,`modal-default-button`),f(h,`click`,()=>{o.onClose&&o.onClose()}),i(h,r(`OK`)),a});return u(v(S,{to:`body`,children:v(A,{name:`modal`,type:`transition`,duration:300,appear:!0,children:o.visible?m:void 0})}),c,p),c}),P=()=>{let{visibleModal:s,activeTab:d}=b(`useSetup:0:0`,()=>c(()=>({visibleModal:b(`ref:1:0`,()=>m(!1)),activeTab:b(`ref:1:1`,()=>m(`preview`))})));return y(()=>{let c=e(),p=a(`rue:component:anchor`);return i(c,p),u(v(w,{children:y(()=>{let c=e(),p=n(`h1`);i(c,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`带过渡动效的模态框（移植自 Vue）`));let m=n(`div`);i(c,m),o(m,`role`,`tablist`),t(m,`tabs tabs-box`);let h=n(`button`);i(m,h),o(h,`role`,`tab`),l(()=>{t(h,String(`tab ${d.value===`preview`?`tab-active`:``}`))}),f(h,`click`,()=>{d.value=`preview`}),i(h,r(`效果`));let _=n(`button`);i(m,_),o(_,`role`,`tab`),l(()=>{t(_,String(`tab ${d.value===`code`?`tab-active`:``}`))}),f(_,`click`,()=>{d.value=`code`}),i(_,r(`代码`));let b=n(`div`);i(c,b),t(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=a(`rue:slot:anchor`);i(b,x),l(()=>{let r=d.value===`code`?y(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=a(`rue:component:anchor`);return i(o,s),l(()=>{let e=v(C,{className:`h-full`,lang:`tsx`,code:M});g(()=>u(e,o,s))}),r}):``;g(()=>u(r,b,x))}),i(b,r(` `));let S=a(`rue:slot:anchor`);return i(b,S),l(()=>{let c=d.value===`preview`?y(()=>{let c=e(),d=n(`div`);i(c,d),t(d,`card bg-base-100 shadow`);let p=n(`div`);i(d,p),t(p,`card-body grid gap-4`);let m=n(`button`);i(p,m),o(m,`id`,`visible-modal`),t(m,`btn btn-primary w-fit`),f(m,`click`,()=>{s.value=!0}),i(m,r(`Visible Modal`));let h=a(`rue:component:anchor`);return i(p,h),l(()=>{let e=v(N,{visible:s.value,onClose:()=>{s.value=!1}});g(()=>u(e,p,h))}),c}):``;g(()=>u(c,b,S))}),c})}),c,p),c})};export{P as default};