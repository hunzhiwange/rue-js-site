import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,ct as u,d,l as f,mt as p,o as m,ot as h,s as g,t as _,u as v,ut as y}from"./vapor-runtime-B3ypJaOM.js";import{a as b}from"./vapor-helpers-vapor-CER7Yupw.js";import{t as x}from"./BaseTransition-CqCmv0d9.js";import{t as S}from"./Teleport-L-_X0ppR.js";import{t as C}from"./Code-DOCCgQFa.js";import{t as w}from"./SidebarPlaygroundExample-DwVZAGT7.js";var T=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>T(e,t)),t):(t.push(e),t),E=e=>Array.isArray(e)?e.map(e=>E(e)):e,D=e=>T(e)[0]??null,O=e=>e!=null&&e!==!1,k=e=>({...e,children:E(e.children)}),A=t=>{let n=p(()=>{let n=r(`span`);n.style.display=`contents`;let i=e(`rue-transition-start`),o=e(`rue-transition-end`);return a(n,i),a(n,o),{container:n,startEl:i,endEl:o,propsSig:u(k(t),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function i(){let e=n.startEl.nextSibling||null;for(;e&&e!==n.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function o(){v([],n.container,n.startEl,n.endEl)}return m(()=>{n.started||(n.started=!0,n.effect=l(()=>{let e=n.propsSig.get(),{runEnter:t,runLeave:r}=x(e),a=D(e.children),s=O(a),c=Symbol(`transition-render`);if(n.renderVersion=c,s)v(a,n.container,n.startEl,n.endEl),n.prevShown||(n.firstRender?queueMicrotask(()=>{if(n.renderVersion!==c)return;let r=i();r&&t(r,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(n.renderVersion!==c)return;let e=i();e&&t(e,`enter`)}));else if(n.prevShown){let e=i();e?r(e,()=>o()):o()}else o();n.prevShown=s,n.firstRender=!1}))}),g(()=>{n.effect&&=(n.effect.dispose(),null),n.started=!1}),d(()=>(n.propsSig.set(k(t)),n.container))},j=`
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

export default ModalExample;`,N=c=>d(u=>{let p=t(),m=r(`style`,p);a(p,m),l(()=>{o(m,j)});let h=e(`rue:component:anchor`);a(p,h);let g=d(()=>{let e=t(),o=r(`div`,e);a(e,o),n(o,`modal-mask`),i(o,`click`,()=>{c.onClose&&c.onClose()});let l=r(`div`,o);a(o,l),n(l,`modal-container`),i(l,`click`,e=>{e.stopPropagation()});let u=r(`div`,l);a(l,u),n(u,`modal-header`);let d=r(`h3`,u);a(u,d),a(d,s(`Custom Header`));let f=r(`div`,l);a(l,f),n(f,`modal-body`);let p=r(`p`,f);a(f,p),a(p,s(`Custom body content here...`));let m=r(`div`,l);a(l,m),n(m,`modal-footer`);let h=r(`button`,m);return a(m,h),n(h,`modal-default-button`),i(h,`click`,()=>{c.onClose&&c.onClose()}),a(h,s(`OK`)),e});return f(_(S,{to:`body`,children:_(A,{name:`modal`,type:`transition`,duration:300,appear:!0,children:c.visible?g:void 0})}),p,h),p}),P=()=>{let{visibleModal:o,activeTab:u}=b(`useSetup:0:0`,()=>p(()=>({visibleModal:b(`ref:1:0`,()=>h(!1)),activeTab:b(`ref:1:1`,()=>h(`preview`))})));return d(p=>{let m=t(),h=e(`rue:component:anchor`);return a(m,h),f(_(w,{children:d(()=>{let p=t(),m=r(`h1`,p);a(p,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`带过渡动效的模态框（移植自 Vue）`));let h=r(`div`,p);a(p,h),c(h,`role`,`tablist`),n(h,`tabs tabs-box`);let g=r(`button`,h);a(h,g),c(g,`role`,`tab`),l(()=>{n(g,String(`tab ${u.value===`preview`?`tab-active`:``}`))}),i(g,`click`,()=>{u.value=`preview`}),a(g,s(`效果`));let v=r(`button`,h);a(h,v),c(v,`role`,`tab`),l(()=>{n(v,String(`tab ${u.value===`code`?`tab-active`:``}`))}),i(v,`click`,()=>{u.value=`code`}),a(v,s(`代码`));let b=r(`div`,p);a(p,b),n(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=e(`rue:slot:anchor`);a(b,x),l(()=>{let i=u.value===`code`?d(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=e(`rue:component:anchor`);return a(o,s),l(()=>{let e=_(C,{className:`h-full`,lang:`tsx`,code:M});y(()=>f(e,o,s))}),i}):``;y(()=>f(i,b,x))}),a(b,s(` `));let S=e(`rue:slot:anchor`);return a(b,S),l(()=>{let p=u.value===`preview`?d(()=>{let u=t(),d=r(`div`,u);a(u,d),n(d,`card bg-base-100 shadow`);let p=r(`div`,d);a(d,p),n(p,`card-body grid gap-4`);let m=r(`button`,p);a(p,m),c(m,`id`,`visible-modal`),n(m,`btn btn-primary w-fit`),i(m,`click`,()=>{o.value=!0}),a(m,s(`Visible Modal`));let h=e(`rue:component:anchor`);return a(p,h),l(()=>{let e=_(N,{visible:o.value,onClose:()=>{o.value=!1}});y(()=>f(e,p,h))}),u}):``;y(()=>f(p,b,S))}),p})}),m,h),m})};export{P as default};