import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as g}from"./Code-C5NjdoiC.js";import{r as _}from"./SidebarPlaygroundExample-DpItFif-.js";var v=n=>o(r=>{let i=d(`button`,r);t(()=>{u(i,n.className)});let a=m(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.text;p(()=>c(e,i,a))}),i}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>l(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>n(`code`))})));return o(n=>{let l=s(),h=m(`rue:component:anchor`);return e(l,h),c(f(_,{children:o(()=>{let n=s(),l=d(`h1`,n);e(n,l),u(l,`text-5xl font-semibold mb-4 md:mb-4`),e(l,a(`对象展开属性（spread props）`));let h=d(`div`,n);e(n,h),i(h,`role`,`tablist`),u(h,`tabs tabs-box`);let _=d(`button`,h);e(h,_),i(_,`role`,`tab`),t(()=>{u(_,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{x.value=`preview`}),e(_,a(`效果`));let S=d(`button`,h);e(h,S),i(S,`role`,`tab`),t(()=>{u(S,`tab ${x.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{x.value=`code`}),e(S,a(`代码`));let C=d(`div`,n);e(n,C),u(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=m(`rue:slot:anchor`);e(C,w),t(()=>{let n=x.value===`code`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow overflow-auto`);let i=d(`div`,r);e(r,i),u(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,C,w))}),e(C,a(` `));let T=m(`rue:slot:anchor`);return e(C,T),t(()=>{let n=x.value===`preview`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow`);let i=d(`div`,r);e(r,i),u(i,`card-body grid gap-4`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(v,{...y,...b});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,C,T))}),n})}),l,h),l})};export{y as default};