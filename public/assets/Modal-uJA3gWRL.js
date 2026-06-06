import{$ as e,J as t,Kt as n,L as r,Lt as i,O as a,P as o,Q as s,Vt as c,Y as l,Yt as u,Z as d,ct as f,et as p,j as m,l as h,mt as g,ot as _,s as v,t as y,zt as b}from"./vapor-runtime-DHPuOjqh.js";import{a as x}from"./vapor-helpers-vapor-CJFAWine.js";import{t as S}from"./BaseTransition-BinKqaWI.js";import{t as C}from"./Teleport-CRIVj57P.js";import{t as w}from"./Code-Ds9lKLk6.js";import{t as T}from"./SidebarPlaygroundExample-KML-rOvA.js";var E=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>E(e,t)),t):(t.push(e),t),D=e=>Array.isArray(e)?e.map(e=>D(e)):e,O=e=>E(e)[0]??null,k=e=>e!=null&&e!==!1,A=e=>({...e,children:D(e.children)}),j=t=>{let i=n(()=>{let n=e(`span`);n.style.display=`contents`;let r=d(`rue-transition-start`),i=d(`rue-transition-end`);return l(n,r),l(n,i),{container:n,startEl:r,endEl:i,propsSig:b(A(t),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function s(){let e=i.startEl.nextSibling||null;for(;e&&e!==i.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function c(){o([],i.container,i.startEl,i.endEl)}return a(()=>{i.started||(i.started=!0,i.effect=u(()=>{let e=i.propsSig.get(),{runEnter:t,runLeave:n}=S(e),r=O(e.children),a=k(r),l=Symbol(`transition-render`);if(i.renderVersion=l,a)o(r,i.container,i.startEl,i.endEl),i.prevShown||(i.firstRender?queueMicrotask(()=>{if(i.renderVersion!==l)return;let n=s();n&&t(n,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(i.renderVersion!==l)return;let e=s();e&&t(e,`enter`)}));else if(i.prevShown){let e=s();e?n(e,()=>c()):c()}else c();i.prevShown=a,i.firstRender=!1}))}),m(()=>{i.effect&&=(i.effect.dispose(),null),i.started=!1}),r(()=>(i.propsSig.set(A(t)),i.container))},M=`
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

export default ModalExample;`,P=n=>h(r=>{let i=s(),a=e(`style`,i);l(i,a),u(()=>{g(a,M)});let o=d(`rue:component:anchor`);l(i,o);let c=h(()=>{let r=s(),i=e(`div`,r);l(r,i),f(i,`modal-mask`),t(i,`click`,()=>{n.onClose&&n.onClose()});let a=e(`div`,i);l(i,a),f(a,`modal-container`),t(a,`click`,e=>{e.stopPropagation()});let o=e(`div`,a);l(a,o),f(o,`modal-header`);let c=e(`h3`,o);l(o,c),l(c,p(`Custom Header`));let u=e(`div`,a);l(a,u),f(u,`modal-body`);let d=e(`p`,u);l(u,d),l(d,p(`Custom body content here...`));let m=e(`div`,a);l(a,m),f(m,`modal-footer`);let h=e(`button`,m);return l(m,h),f(h,`modal-default-button`),t(h,`click`,()=>{n.onClose&&n.onClose()}),l(h,p(`OK`)),r});return v(y(C,{to:`body`,children:y(j,{name:`modal`,type:`transition`,duration:300,appear:!0,children:n.visible?c:void 0})}),i,o),i}),F=()=>{let{visibleModal:r,activeTab:a}=x(`useSetup:0:0`,()=>n(()=>({visibleModal:x(`ref:1:0`,()=>i(!1)),activeTab:x(`ref:1:1`,()=>i(`preview`))})));return h(n=>{let i=s(),o=d(`rue:component:anchor`);return l(i,o),v(y(T,{children:h(()=>{let n=s(),i=e(`h1`,n);l(n,i),f(i,`text-5xl font-semibold mb-4 md:mb-4`),l(i,p(`带过渡动效的模态框（移植自 Vue）`));let o=e(`div`,n);l(n,o),_(o,`role`,`tablist`),f(o,`tabs tabs-box`);let m=e(`button`,o);l(o,m),_(m,`role`,`tab`),u(()=>{f(m,String(`tab ${a.value===`preview`?`tab-active`:``}`))}),t(m,`click`,()=>{a.value=`preview`}),l(m,p(`效果`));let g=e(`button`,o);l(o,g),_(g,`role`,`tab`),u(()=>{f(g,String(`tab ${a.value===`code`?`tab-active`:``}`))}),t(g,`click`,()=>{a.value=`code`}),l(g,p(`代码`));let b=e(`div`,n);l(n,b),f(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=d(`rue:slot:anchor`);l(b,x),u(()=>{let t=a.value===`code`?h(()=>{let t=s(),n=e(`div`,t);l(t,n),f(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=d(`rue:component:anchor`);return l(n,r),u(()=>{let e=y(w,{className:`h-full`,lang:`tsx`,code:N});c(()=>v(e,n,r))}),t}):``;c(()=>v(t,b,x))}),l(b,p(` `));let S=d(`rue:slot:anchor`);return l(b,S),u(()=>{let n=a.value===`preview`?h(()=>{let n=s(),i=e(`div`,n);l(n,i),f(i,`card bg-base-100 shadow`);let a=e(`div`,i);l(i,a),f(a,`card-body grid gap-4`);let o=e(`button`,a);l(a,o),_(o,`id`,`visible-modal`),f(o,`btn btn-primary w-fit`),t(o,`click`,()=>{r.value=!0}),l(o,p(`Visible Modal`));let m=d(`rue:component:anchor`);return l(a,m),u(()=>{let e=y(P,{visible:r.value,onClose:()=>{r.value=!1}});c(()=>v(e,a,m))}),n}):``;c(()=>v(n,b,S))}),n})}),i,o),i})};export{F as default};