import{$ as e,A as t,Et as n,G as r,H as i,I as a,K as o,N as s,V as c,W as l,_t as u,d,k as f,kt as p,l as m,q as h,st as g,t as _,tt as v,xt as y,yt as b}from"./vapor-runtime-EUvELKQT.js";import{a as x}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as S}from"./BaseTransition-C9MIYBLt.js";import{t as C}from"./Teleport-BlmJ3ph6.js";import{t as w}from"./Code-BdVklNCb.js";import{t as T}from"./SidebarPlaygroundExample-1AA0CIwm.js";var E=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>E(e,t)),t):(t.push(e),t),D=e=>Array.isArray(e)?e.map(e=>D(e)):e,O=e=>E(e)[0]??null,k=e=>e!=null&&e!==!1,A=e=>({...e,children:D(e.children)}),j=e=>{let r=n(()=>{let t=o(`span`);t.style.display=`contents`;let n=l(`rue-transition-start`),r=l(`rue-transition-end`);return i(t,n),i(t,r),{container:t,startEl:n,endEl:r,propsSig:b(A(e),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function c(){let e=r.startEl.nextSibling||null;for(;e&&e!==r.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function u(){s([],r.container,r.startEl,r.endEl)}return f(()=>{r.started||(r.started=!0,r.effect=p(()=>{let e=r.propsSig.get(),{runEnter:t,runLeave:n}=S(e),i=O(e.children),a=k(i),o=Symbol(`transition-render`);if(r.renderVersion=o,a)s(i,r.container,r.startEl,r.endEl),r.prevShown||(r.firstRender?queueMicrotask(()=>{if(r.renderVersion!==o)return;let n=c();n&&t(n,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(r.renderVersion!==o)return;let e=c();e&&t(e,`enter`)}));else if(r.prevShown){let e=c();e?n(e,()=>u()):u()}else u();r.prevShown=a,r.firstRender=!1}))}),t(()=>{r.effect&&=(r.effect.dispose(),null),r.started=!1}),a(()=>(r.propsSig.set(A(e)),r.container))},M=`
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

export default ModalExample;`,P=e=>d(t=>{let n=r(),a=o(`style`,n);i(n,a),p(()=>{g(a,M)});let s=l(`rue:component:anchor`);i(n,s);let u=d(()=>{let t=r(),n=o(`div`,t);i(t,n),v(n,`modal-mask`),c(n,`click`,()=>{e.onClose&&e.onClose()});let a=o(`div`,n);i(n,a),v(a,`modal-container`),c(a,`click`,e=>{e.stopPropagation()});let s=o(`div`,a);i(a,s),v(s,`modal-header`);let l=o(`h3`,s);i(s,l),i(l,h(`Custom Header`));let u=o(`div`,a);i(a,u),v(u,`modal-body`);let d=o(`p`,u);i(u,d),i(d,h(`Custom body content here...`));let f=o(`div`,a);i(a,f),v(f,`modal-footer`);let p=o(`button`,f);return i(f,p),v(p,`modal-default-button`),c(p,`click`,()=>{e.onClose&&e.onClose()}),i(p,h(`OK`)),t});return m(_(C,{to:`body`,children:_(j,{name:`modal`,type:`transition`,duration:300,appear:!0,children:e.visible?u:void 0})}),n,s),n}),F=()=>{let{visibleModal:t,activeTab:a}=x(`useSetup:0:0`,()=>n(()=>({visibleModal:x(`ref:1:0`,()=>u(!1)),activeTab:x(`ref:1:1`,()=>u(`preview`))})));return d(n=>{let s=r(),u=l(`rue:component:anchor`);return i(s,u),m(_(T,{children:d(()=>{let n=r(),s=o(`h1`,n);i(n,s),v(s,`text-5xl font-semibold mb-4 md:mb-4`),i(s,h(`带过渡动效的模态框（移植自 Vue）`));let u=o(`div`,n);i(n,u),e(u,`role`,`tablist`),v(u,`tabs tabs-box`);let f=o(`button`,u);i(u,f),e(f,`role`,`tab`),p(()=>{v(f,String(`tab ${a.value===`preview`?`tab-active`:``}`))}),c(f,`click`,()=>{a.value=`preview`}),i(f,h(`效果`));let g=o(`button`,u);i(u,g),e(g,`role`,`tab`),p(()=>{v(g,String(`tab ${a.value===`code`?`tab-active`:``}`))}),c(g,`click`,()=>{a.value=`code`}),i(g,h(`代码`));let b=o(`div`,n);i(n,b),v(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=l(`rue:slot:anchor`);i(b,x),p(()=>{let e=a.value===`code`?d(()=>{let e=r(),t=o(`div`,e);i(e,t),v(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let n=l(`rue:component:anchor`);return i(t,n),p(()=>{let e=_(w,{className:`h-full`,lang:`tsx`,code:N});y(()=>m(e,t,n))}),e}):``;y(()=>m(e,b,x))}),i(b,h(` `));let S=l(`rue:slot:anchor`);return i(b,S),p(()=>{let n=a.value===`preview`?d(()=>{let n=r(),a=o(`div`,n);i(n,a),v(a,`card bg-base-100 shadow`);let s=o(`div`,a);i(a,s),v(s,`card-body grid gap-4`);let u=o(`button`,s);i(s,u),e(u,`id`,`visible-modal`),v(u,`btn btn-primary w-fit`),c(u,`click`,()=>{t.value=!0}),i(u,h(`Visible Modal`));let d=l(`rue:component:anchor`);return i(s,d),p(()=>{let e=_(P,{visible:t.value,onClose:()=>{t.value=!1}});y(()=>m(e,s,d))}),n}):``;y(()=>m(n,b,S))}),n})}),s,u),s})};export{F as default};