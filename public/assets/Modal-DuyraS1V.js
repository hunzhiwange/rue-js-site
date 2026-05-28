import{$ as e,H as t,I as n,J as r,Kt as i,Lt as a,N as o,Q as s,Vt as c,Y as l,Yt as u,Z as d,ct as f,d as p,et as m,l as h,mt as g,ot as _,t as v,z as y,zt as b}from"./vapor-runtime-BR_2rwNk.js";import{a as x}from"./vapor-helpers-vapor-DkadWylb.js";import{t as S}from"./BaseTransition-1Kaff2kD.js";import{t as C}from"./Teleport-1QQ9jpSF.js";import{t as w}from"./Code-B_4lzH85.js";import{t as T}from"./SidebarPlaygroundExample-CtM-WHq_.js";var E=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>E(e,t)),t):(t.push(e),t),D=e=>Array.isArray(e)?e.map(e=>D(e)):e,O=e=>E(e)[0]??null,k=e=>e!=null&&e!==!1,A=e=>({...e,children:D(e.children)}),j=r=>{let a=i(()=>{let t=e(`span`);t.style.display=`contents`;let n=d(`rue-transition-start`),i=d(`rue-transition-end`);return l(t,n),l(t,i),{container:t,startEl:n,endEl:i,propsSig:b(A(r),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function s(){let e=a.startEl.nextSibling||null;for(;e&&e!==a.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function c(){y([],a.container,a.startEl,a.endEl)}return o(()=>{a.started||(a.started=!0,a.effect=u(()=>{let e=a.propsSig.get(),{runEnter:t,runLeave:n}=S(e),r=O(e.children),i=k(r),o=Symbol(`transition-render`);if(a.renderVersion=o,i)y(r,a.container,a.startEl,a.endEl),a.prevShown||(a.firstRender?queueMicrotask(()=>{if(a.renderVersion!==o)return;let n=s();n&&t(n,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(a.renderVersion!==o)return;let e=s();e&&t(e,`enter`)}));else if(a.prevShown){let e=s();e?n(e,()=>c()):c()}else c();a.prevShown=i,a.firstRender=!1}))}),n(()=>{a.effect&&=(a.effect.dispose(),null),a.started=!1}),t(()=>(a.propsSig.set(A(r)),a.container))},M=`
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

export default ModalExample;`,P=t=>p(n=>{let i=s(),a=e(`style`,i);l(i,a),u(()=>{g(a,M)});let o=d(`rue:component:anchor`);l(i,o);let c=p(()=>{let n=s(),i=e(`div`,n);l(n,i),f(i,`modal-mask`),r(i,`click`,()=>{t.onClose&&t.onClose()});let a=e(`div`,i);l(i,a),f(a,`modal-container`),r(a,`click`,e=>{e.stopPropagation()});let o=e(`div`,a);l(a,o),f(o,`modal-header`);let c=e(`h3`,o);l(o,c),l(c,m(`Custom Header`));let u=e(`div`,a);l(a,u),f(u,`modal-body`);let d=e(`p`,u);l(u,d),l(d,m(`Custom body content here...`));let p=e(`div`,a);l(a,p),f(p,`modal-footer`);let h=e(`button`,p);return l(p,h),f(h,`modal-default-button`),r(h,`click`,()=>{t.onClose&&t.onClose()}),l(h,m(`OK`)),n});return h(v(C,{to:`body`,children:v(j,{name:`modal`,type:`transition`,duration:300,appear:!0,children:t.visible?c:void 0})}),i,o),i}),F=()=>{let{visibleModal:t,activeTab:n}=x(`useSetup:0:0`,()=>i(()=>({visibleModal:x(`ref:1:0`,()=>a(!1)),activeTab:x(`ref:1:1`,()=>a(`preview`))})));return p(i=>{let a=s(),o=d(`rue:component:anchor`);return l(a,o),h(v(T,{children:p(()=>{let i=s(),a=e(`h1`,i);l(i,a),f(a,`text-5xl font-semibold mb-4 md:mb-4`),l(a,m(`带过渡动效的模态框（移植自 Vue）`));let o=e(`div`,i);l(i,o),_(o,`role`,`tablist`),f(o,`tabs tabs-box`);let g=e(`button`,o);l(o,g),_(g,`role`,`tab`),u(()=>{f(g,String(`tab ${n.value===`preview`?`tab-active`:``}`))}),r(g,`click`,()=>{n.value=`preview`}),l(g,m(`效果`));let y=e(`button`,o);l(o,y),_(y,`role`,`tab`),u(()=>{f(y,String(`tab ${n.value===`code`?`tab-active`:``}`))}),r(y,`click`,()=>{n.value=`code`}),l(y,m(`代码`));let b=e(`div`,i);l(i,b),f(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=d(`rue:slot:anchor`);l(b,x),u(()=>{let t=n.value===`code`?p(()=>{let t=s(),n=e(`div`,t);l(t,n),f(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=d(`rue:component:anchor`);return l(n,r),u(()=>{let e=v(w,{className:`h-full`,lang:`tsx`,code:N});c(()=>h(e,n,r))}),t}):``;c(()=>h(t,b,x))}),l(b,m(` `));let S=d(`rue:slot:anchor`);return l(b,S),u(()=>{let i=n.value===`preview`?p(()=>{let n=s(),i=e(`div`,n);l(n,i),f(i,`card bg-base-100 shadow`);let a=e(`div`,i);l(i,a),f(a,`card-body grid gap-4`);let o=e(`button`,a);l(a,o),_(o,`id`,`visible-modal`),f(o,`btn btn-primary w-fit`),r(o,`click`,()=>{t.value=!0}),l(o,m(`Visible Modal`));let p=d(`rue:component:anchor`);return l(a,p),u(()=>{let e=v(P,{visible:t.value,onClose:()=>{t.value=!1}});c(()=>h(e,a,p))}),n}):``;c(()=>h(i,b,S))}),i})}),a,o),a})};export{F as default};