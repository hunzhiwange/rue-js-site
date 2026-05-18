import{C as e,E as t,F as n,I as r,K as i,L as a,M as o,N as s,Q as c,R as l,S as u,W as d,d as f,dt as p,ht as m,k as h,l as g,lt as _,st as v,t as y,vt as b}from"./vapor-runtime-BuwLbCGk.js";import{a as x}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as S}from"./BaseTransition-LQJuH5W-.js";import{t as C}from"./Teleport-CCFUppnX.js";import{t as w}from"./Code-DQxnq0in.js";import{t as T}from"./SidebarPlaygroundExample-BwOo72z2.js";var E=(e,t=[])=>e==null||e===!1?t:Array.isArray(e)?(e.forEach(e=>E(e,t)),t):(t.push(e),t),D=e=>Array.isArray(e)?e.map(e=>D(e)):e,O=e=>E(e)[0]??null,k=e=>e!=null&&e!==!1,A=e=>({...e,children:D(e.children)}),j=r=>{let i=m(()=>{let e=a(`span`);e.style.display=`contents`;let t=n(`rue-transition-start`),i=n(`rue-transition-end`);return s(e,t),s(e,i),{container:e,startEl:t,endEl:i,propsSig:_(A(r),{},!0),prevShown:!1,firstRender:!0,started:!1,effect:null}});function o(){let e=i.startEl.nextSibling||null;for(;e&&e!==i.endEl;){if(e.nodeType===1)return e;e=e.nextSibling||null}return null}function c(){t([],i.container,i.startEl,i.endEl)}return u(()=>{i.started||(i.started=!0,i.effect=b(()=>{let e=i.propsSig.get(),{runEnter:n,runLeave:r}=S(e),a=O(e.children),s=k(a),l=Symbol(`transition-render`);if(i.renderVersion=l,s)t(a,i.container,i.startEl,i.endEl),i.prevShown||(i.firstRender?queueMicrotask(()=>{if(i.renderVersion!==l)return;let t=o();t&&n(t,e.appear?`appear`:`enter`)}):queueMicrotask(()=>{if(i.renderVersion!==l)return;let e=o();e&&n(e,`enter`)}));else if(i.prevShown){let e=o();e?r(e,()=>c()):c()}else c();i.prevShown=s,i.firstRender=!1}))}),e(()=>{i.effect&&=(i.effect.dispose(),null),i.started=!1}),h(()=>(i.propsSig.set(A(r)),i.container))},M=`
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

export default ModalExample;`,P=e=>f(t=>{let u=r(),d=a(`style`,u);s(u,d),b(()=>{c(d,M)});let p=n(`rue:component:anchor`);s(u,p);let m=f(()=>{let t=r(),n=a(`div`,t);s(t,n),i(n,`modal-mask`),o(n,`click`,()=>{e.onClose&&e.onClose()});let c=a(`div`,n);s(n,c),i(c,`modal-container`),o(c,`click`,e=>{e.stopPropagation()});let u=a(`div`,c);s(c,u),i(u,`modal-header`);let d=a(`h3`,u);s(u,d),s(d,l(`Custom Header`));let f=a(`div`,c);s(c,f),i(f,`modal-body`);let p=a(`p`,f);s(f,p),s(p,l(`Custom body content here...`));let m=a(`div`,c);s(c,m),i(m,`modal-footer`);let h=a(`button`,m);return s(m,h),i(h,`modal-default-button`),o(h,`click`,()=>{e.onClose&&e.onClose()}),s(h,l(`OK`)),t});return g(y(C,{to:`body`,children:y(j,{name:`modal`,type:`transition`,duration:300,appear:!0,children:e.visible?m:void 0})}),u,p),u}),F=()=>{let{visibleModal:e,activeTab:t}=x(`useSetup:0:0`,()=>m(()=>({visibleModal:x(`ref:1:0`,()=>v(!1)),activeTab:x(`ref:1:1`,()=>v(`preview`))})));return f(c=>{let u=r(),m=n(`rue:component:anchor`);return s(u,m),g(y(T,{children:f(()=>{let c=r(),u=a(`h1`,c);s(c,u),i(u,`text-5xl font-semibold mb-4 md:mb-4`),s(u,l(`带过渡动效的模态框（移植自 Vue）`));let m=a(`div`,c);s(c,m),d(m,`role`,`tablist`),i(m,`tabs tabs-box`);let h=a(`button`,m);s(m,h),d(h,`role`,`tab`),b(()=>{i(h,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),o(h,`click`,()=>{t.value=`preview`}),s(h,l(`效果`));let _=a(`button`,m);s(m,_),d(_,`role`,`tab`),b(()=>{i(_,String(`tab ${t.value===`code`?`tab-active`:``}`))}),o(_,`click`,()=>{t.value=`code`}),s(_,l(`代码`));let v=a(`div`,c);s(c,v),i(v,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=n(`rue:slot:anchor`);s(v,x),b(()=>{let e=t.value===`code`?f(()=>{let e=r(),t=a(`div`,e);s(e,t),i(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let o=n(`rue:component:anchor`);return s(t,o),b(()=>{let e=y(w,{className:`h-full`,lang:`tsx`,code:N});p(()=>g(e,t,o))}),e}):``;p(()=>g(e,v,x))}),s(v,l(` `));let S=n(`rue:slot:anchor`);return s(v,S),b(()=>{let c=t.value===`preview`?f(()=>{let t=r(),c=a(`div`,t);s(t,c),i(c,`card bg-base-100 shadow`);let u=a(`div`,c);s(c,u),i(u,`card-body grid gap-4`);let f=a(`button`,u);s(u,f),d(f,`id`,`visible-modal`),i(f,`btn btn-primary w-fit`),o(f,`click`,()=>{e.value=!0}),s(f,l(`Visible Modal`));let m=n(`rue:component:anchor`);return s(u,m),b(()=>{let t=y(P,{visible:e.value,onClose:()=>{e.value=!1}});p(()=>g(t,u,m))}),t}):``;p(()=>g(c,v,S))}),c})}),u,m),u})};export{F as default};