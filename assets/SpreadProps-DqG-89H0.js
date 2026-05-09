import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,c as s,j as c,pt as l,rt as u,t as d,u as f,ut as p}from"./vapor-runtime-CKndxKFn.js";import{a as m}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as h}from"./Code-B1JFTu6m.js";import{t as g}from"./SidebarPlaygroundExample-DlK8mtjC.js";var _=e=>f(()=>{let n=t(`button`);l(()=>{o(n,String(e.className))});let r=i(`rue:slot:anchor`);return c(n,r),l(()=>{let t=e.text;s(t,n,r)}),n}),v=()=>{let{base:v,extra:y,activeTab:b}=m(`useSetup:0:0`,()=>p(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:m(`ref:1:0`,()=>u(`code`))})));return f(()=>{let u=a(),p=i(`rue:component:anchor`);return c(u,p),s(d(g,{children:f(()=>{let u=a(),p=t(`h1`);c(u,p),o(p,`text-5xl font-semibold mb-4 md:mb-4`),c(p,r(`对象展开属性（spread props）`));let m=t(`div`);c(u,m),n(m,`role`,`tablist`),o(m,`tabs tabs-box`);let g=t(`button`);c(m,g),n(g,`role`,`tab`),l(()=>{o(g,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),e(g,`click`,()=>{b.value=`preview`}),c(g,r(`效果`));let x=t(`button`);c(m,x),n(x,`role`,`tab`),l(()=>{o(x,String(`tab ${b.value===`code`?`tab-active`:``}`))}),e(x,`click`,()=>{b.value=`code`}),c(x,r(`代码`));let S=t(`div`);c(u,S),o(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=i(`rue:slot:anchor`);c(S,C),l(()=>{s(b.value===`code`?f(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);c(n,r),o(r,`card-body p-0`);let u=i(`rue:component:anchor`);return c(r,u),l(()=>{s(d(h,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Button: FC<{ text: string; className?: string }> = (props) => (
  <button className={props.className}>{props.text}</button>
);

const SpreadProps: FC = () => {
  const base = { className: 'px-3 py-2 rounded-md bg-blue-600 text-white' };
  const extra = { text: '确定按钮' };
  return (
    <div className="grid gap-4">
      <Button {...base} {...extra} />
    </div>
  );
};

export default SpreadProps;`}),r,u)}),e}):``,S,C)}),c(S,r(` `));let w=i(`rue:slot:anchor`);return c(S,w),l(()=>{s(b.value===`preview`?f(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow`);let r=t(`div`);c(n,r),o(r,`card-body grid gap-4`);let u=i(`rue:component:anchor`);return c(r,u),l(()=>{s(d(_,{...v,...y}),r,u)}),e}):``,S,w)}),u})}),u,p),u})};export{v as default};