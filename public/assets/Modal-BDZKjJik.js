import{$ as e,E as t,L as n,N as r,Q as i,Qt as a,Vt as o,Wt as s,X as c,Y as l,Yt as u,et as d,ht as f,k as p,l as m,lt as h,o as g,st as _,t as v,tt as y,zt as b}from"./vapor-runtime-CXIalONM.js";import{a as x}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as S}from"./BaseTransition-fN4CMjMP.js";import{t as C}from"./Teleport-DbaANAG7.js";import{t as w}from"./Code-BIscIyEp.js";import{r as T}from"./SidebarPlaygroundExample-CEz1fABX.js";var E=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>E(e,t)),t):(t.push(e),t),D=e=>Array.isArray(e)?e.map(e=>D(e)):e,O=e=>E(e)[0]??null,k=e=>e!=null&&e!==!1,A=e=>({...e,children:D(e.children)}),j=e=>{let s=u(()=>{let t=d(`span`);t.style.display=`contents`;let n=i(`rue-transition-start`),r=i(`rue-transition-end`);return c(t,n),c(t,r),{container:t,startEl:n,endEl:r,propsSig:o(A(e),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function l(){let e=s.startEl.nextSibling||null;for(;e&&e!==s.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function f(){r([],s.container,s.startEl,s.endEl)}return t(()=>{s.started||(s.started=!0,s.effect=a(()=>{let e=s.propsSig.get(),{runEnter:t,runLeave:n}=S(e),i=O(e.children),a=k(i),o=Symbol(`transition-render`);if(s.renderVersion=o,a)r(i,s.container,s.startEl,s.endEl),s.prevShown||(s.firstRender?queueMicrotask(()=>{if(s.renderVersion!==o)return;let n=l();n&&t(n,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(s.renderVersion!==o)return;let e=l();e&&t(e,`enter`)}));else if(s.prevShown){let e=l();e?n(e,()=>f()):f()}else f();s.prevShown=a,s.firstRender=!1}))}),p(()=>{s.effect&&=(s.effect.dispose(),null),s.started=!1}),n(()=>(s.propsSig.set(A(e)),s.container))},M=`
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

export default ModalExample;`,P=t=>m(n=>{let r=e(),o=d(`style`,r);c(r,o),a(()=>{f(o,M)});let s=i(`rue:component:anchor`);c(r,s);let u=m(()=>{let n=e(),r=d(`div`,n);c(n,r),h(r,`modal-mask`),l(r,`click`,()=>{t.onClose&&t.onClose()});let i=d(`div`,r);c(r,i),h(i,`modal-container`),l(i,`click`,e=>{e.stopPropagation()});let a=d(`div`,i);c(i,a),h(a,`modal-header`);let o=d(`h3`,a);c(a,o),c(o,y(`Custom Header`));let s=d(`div`,i);c(i,s),h(s,`modal-body`);let u=d(`p`,s);c(s,u),c(u,y(`Custom body content is rendered inside the transitioned modal.`));let f=d(`div`,i);c(i,f),h(f,`modal-footer`);let p=d(`button`,f);return c(f,p),h(p,`modal-default-button`),l(p,`click`,()=>{t.onClose&&t.onClose()}),c(p,y(`OK`)),n});return g(v(C,{to:`body`,children:v(j,{name:`modal`,type:`transition`,duration:300,appear:!0,children:t.visible?u:void 0})}),r,s),r}),F=()=>{let{visibleModal:t,activeTab:n}=x(`useSetup:0:0`,()=>u(()=>({visibleModal:x(`ref:1:0`,()=>b(!1)),activeTab:x(`ref:1:1`,()=>b(`preview`))})));return m(r=>{let o=e(),u=i(`rue:component:anchor`);return c(o,u),g(v(T,{children:m(()=>{let r=e(),o=d(`h1`,r);c(r,o),h(o,`text-5xl font-semibold mb-4 md:mb-4`),c(o,y(`带过渡动效的模态框（移植自 Vue）`));let u=d(`div`,r);c(r,u),_(u,`role`,`tablist`),h(u,`tabs tabs-box`);let f=d(`button`,u);c(u,f),_(f,`role`,`tab`),a(()=>{h(f,`tab ${n.value===`preview`?`tab-active`:``}`)}),l(f,`click`,()=>{n.value=`preview`}),c(f,y(`效果`));let p=d(`button`,u);c(u,p),_(p,`role`,`tab`),a(()=>{h(p,`tab ${n.value===`code`?`tab-active`:``}`)}),l(p,`click`,()=>{n.value=`code`}),c(p,y(`代码`));let b=d(`div`,r);c(r,b),h(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=i(`rue:slot:anchor`);c(b,x),a(()=>{let t=n.value===`code`?m(()=>{let t=e(),n=d(`div`,t);c(t,n),h(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=i(`rue:component:anchor`);return c(n,r),a(()=>{let e=v(w,{className:`h-full`,lang:`tsx`,code:N});s(()=>g(e,n,r))}),t}):``;s(()=>g(t,b,x))}),c(b,y(` `));let S=i(`rue:slot:anchor`);return c(b,S),a(()=>{let r=n.value===`preview`?m(()=>{let n=e(),r=d(`div`,n);c(n,r),h(r,`card bg-base-100 shadow`);let o=d(`div`,r);c(r,o),h(o,`card-body grid gap-4`);let u=d(`button`,o);c(o,u),_(u,`id`,`visible-modal`),h(u,`btn btn-primary w-fit`),l(u,`click`,()=>{t.value=!0}),c(u,y(`Visible Modal`));let f=i(`rue:component:anchor`);return c(o,f),a(()=>{let e=v(P,{visible:t.value,onClose:()=>{t.value=!1}});s(()=>g(e,o,f))}),n}):``;s(()=>g(r,b,S))}),r})}),o,u),o})};export{F as default};