import{$ as e,Bt as t,Ht as n,J as r,L as i,O as a,P as o,Q as s,Rt as c,Xt as l,Y as u,Z as d,ct as f,et as p,j as m,l as h,mt as g,ot as _,qt as v,s as y,t as b}from"./vapor-runtime-aZAg0Qkw.js";import{a as x}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as S}from"./BaseTransition-5OHAQ87f.js";import{t as C}from"./Teleport-BlQahZtB.js";import{t as w}from"./Code-5DOEyGxf.js";import{r as T}from"./SidebarPlaygroundExample-cASgDpH3.js";var E=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>E(e,t)),t):(t.push(e),t),D=e=>Array.isArray(e)?e.map(e=>D(e)):e,O=e=>E(e)[0]??null,k=e=>e!=null&&e!==!1,A=e=>({...e,children:D(e.children)}),j=n=>{let r=v(()=>{let r=e(`span`);r.style.display=`contents`;let i=d(`rue-transition-start`),a=d(`rue-transition-end`);return u(r,i),u(r,a),{container:r,startEl:i,endEl:a,propsSig:t(A(n),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function s(){let e=r.startEl.nextSibling||null;for(;e&&e!==r.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function c(){o([],r.container,r.startEl,r.endEl)}return a(()=>{r.started||(r.started=!0,r.effect=l(()=>{let e=r.propsSig.get(),{runEnter:t,runLeave:n}=S(e),i=O(e.children),a=k(i),l=Symbol(`transition-render`);if(r.renderVersion=l,a)o(i,r.container,r.startEl,r.endEl),r.prevShown||(r.firstRender?queueMicrotask(()=>{if(r.renderVersion!==l)return;let n=s();n&&t(n,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(r.renderVersion!==l)return;let e=s();e&&t(e,`enter`)}));else if(r.prevShown){let e=s();e?n(e,()=>c()):c()}else c();r.prevShown=a,r.firstRender=!1}))}),m(()=>{r.effect&&=(r.effect.dispose(),null),r.started=!1}),i(()=>(r.propsSig.set(A(n)),r.container))},M=`
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

export default ModalExample;`,P=t=>h(n=>{let i=s(),a=e(`style`,i);u(i,a),l(()=>{g(a,M)});let o=d(`rue:component:anchor`);u(i,o);let c=h(()=>{let n=s(),i=e(`div`,n);u(n,i),f(i,`modal-mask`),r(i,`click`,()=>{t.onClose&&t.onClose()});let a=e(`div`,i);u(i,a),f(a,`modal-container`),r(a,`click`,e=>{e.stopPropagation()});let o=e(`div`,a);u(a,o),f(o,`modal-header`);let c=e(`h3`,o);u(o,c),u(c,p(`Custom Header`));let l=e(`div`,a);u(a,l),f(l,`modal-body`);let d=e(`p`,l);u(l,d),u(d,p(`Custom body content here...`));let m=e(`div`,a);u(a,m),f(m,`modal-footer`);let h=e(`button`,m);return u(m,h),f(h,`modal-default-button`),r(h,`click`,()=>{t.onClose&&t.onClose()}),u(h,p(`OK`)),n});return y(b(C,{to:`body`,children:b(j,{name:`modal`,type:`transition`,duration:300,appear:!0,children:t.visible?c:void 0})}),i,o),i}),F=()=>{let{visibleModal:t,activeTab:i}=x(`useSetup:0:0`,()=>v(()=>({visibleModal:x(`ref:1:0`,()=>c(!1)),activeTab:x(`ref:1:1`,()=>c(`preview`))})));return h(a=>{let o=s(),c=d(`rue:component:anchor`);return u(o,c),y(b(T,{children:h(()=>{let a=s(),o=e(`h1`,a);u(a,o),f(o,`text-5xl font-semibold mb-4 md:mb-4`),u(o,p(`带过渡动效的模态框（移植自 Vue）`));let c=e(`div`,a);u(a,c),_(c,`role`,`tablist`),f(c,`tabs tabs-box`);let m=e(`button`,c);u(c,m),_(m,`role`,`tab`),l(()=>{f(m,String(`tab ${i.value===`preview`?`tab-active`:``}`))}),r(m,`click`,()=>{i.value=`preview`}),u(m,p(`效果`));let g=e(`button`,c);u(c,g),_(g,`role`,`tab`),l(()=>{f(g,String(`tab ${i.value===`code`?`tab-active`:``}`))}),r(g,`click`,()=>{i.value=`code`}),u(g,p(`代码`));let v=e(`div`,a);u(a,v),f(v,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=d(`rue:slot:anchor`);u(v,x),l(()=>{let t=i.value===`code`?h(()=>{let t=s(),r=e(`div`,t);u(t,r),f(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=d(`rue:component:anchor`);return u(r,i),l(()=>{let e=b(w,{className:`h-full`,lang:`tsx`,code:N});n(()=>y(e,r,i))}),t}):``;n(()=>y(t,v,x))}),u(v,p(` `));let S=d(`rue:slot:anchor`);return u(v,S),l(()=>{let a=i.value===`preview`?h(()=>{let i=s(),a=e(`div`,i);u(i,a),f(a,`card bg-base-100 shadow`);let o=e(`div`,a);u(a,o),f(o,`card-body grid gap-4`);let c=e(`button`,o);u(o,c),_(c,`id`,`visible-modal`),f(c,`btn btn-primary w-fit`),r(c,`click`,()=>{t.value=!0}),u(c,p(`Visible Modal`));let m=d(`rue:component:anchor`);return u(o,m),l(()=>{let e=b(P,{visible:t.value,onClose:()=>{t.value=!1}});n(()=>y(e,o,m))}),i}):``;n(()=>y(a,v,S))}),a})}),o,c),o})};export{F as default};