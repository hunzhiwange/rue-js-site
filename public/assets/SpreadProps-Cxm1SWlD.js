import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-ACs_OvwU.js";import{a as h}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as g}from"./Code-CliOXHNE.js";import{t as _}from"./SidebarPlaygroundExample-DXnPmR3z.js";var v=e=>c(t=>{let n=i(`button`,t);l(()=>{p(n,String(e.className))});let a=o(`rue:slot:anchor`);return r(n,a),l(()=>{let t=e.text;m(()=>u(t,n,a))}),n}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>t(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>s(`code`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(_,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),p(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,d(`对象展开属性（spread props）`));let h=i(`div`,t);r(t,h),e(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);r(h,_),e(_,`role`,`tab`),l(()=>{p(_,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),a(_,`click`,()=>{x.value=`preview`}),r(_,d(`效果`));let S=i(`button`,h);r(h,S),e(S,`role`,`tab`),l(()=>{p(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),a(S,`click`,()=>{x.value=`code`}),r(S,d(`代码`));let C=i(`div`,t);r(t,C),p(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=o(`rue:slot:anchor`);r(C,w),l(()=>{let e=x.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,t);r(t,a),p(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),l(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});m(()=>u(e,a,s))}),e}):``;m(()=>u(e,C,w))}),r(C,d(` `));let T=o(`rue:slot:anchor`);return r(C,T),l(()=>{let e=x.value===`preview`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow`);let a=i(`div`,t);r(t,a),p(a,`card-body grid gap-4`);let s=o(`rue:component:anchor`);return r(a,s),l(()=>{let e=f(v,{...y,...b});m(()=>u(e,a,s))}),e}):``;m(()=>u(e,C,T))}),t})}),s,h),s})};export{y as default};