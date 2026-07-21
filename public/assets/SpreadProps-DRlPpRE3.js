import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,ot as o,pn as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,t as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./Code-DhoWkRkB.js";import{r as _}from"./SidebarPlaygroundExample-B78jsvoF.js";var v=e=>f(t=>{let i=c(`button`,t);u(()=>{n(i,e.className)});let a=r(`rue:slot:anchor`);return l(i,a),u(()=>{let t=e.text;d(()=>p(t,i,a))}),i}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>e(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>s(`code`))})));return f(e=>{let s=i(),h=r(`rue:component:anchor`);return l(s,h),p(m(_,{children:f(()=>{let e=i(),s=c(`h1`,e);l(e,s),n(s,`text-5xl font-semibold mb-4 md:mb-4`),l(s,a(`对象展开属性（spread props）`));let h=c(`div`,e);l(e,h),t(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=c(`button`,h);l(h,_),t(_,`role`,`tab`),u(()=>{n(_,`tab ${x.value===`preview`?`tab-active`:``}`)}),o(_,`click`,()=>{x.value=`preview`}),l(_,a(`效果`));let S=c(`button`,h);l(h,S),t(S,`role`,`tab`),u(()=>{n(S,`tab ${x.value===`code`?`tab-active`:``}`)}),o(S,`click`,()=>{x.value=`code`}),l(S,a(`代码`));let C=c(`div`,e);l(e,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=r(`rue:slot:anchor`);l(C,w),u(()=>{let e=x.value===`code`?f(()=>{let e=i(),t=c(`div`,e);l(e,t),n(t,`card bg-base-100 shadow overflow-auto`);let a=c(`div`,t);l(t,a),n(a,`card-body p-0`);let o=r(`rue:component:anchor`);return l(a,o),u(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});d(()=>p(e,a,o))}),e}):``;d(()=>p(e,C,w))}),l(C,a(` `));let T=r(`rue:slot:anchor`);return l(C,T),u(()=>{let e=x.value===`preview`?f(()=>{let e=i(),t=c(`div`,e);l(e,t),n(t,`card bg-base-100 shadow`);let a=c(`div`,t);l(t,a),n(a,`card-body grid gap-4`);let o=r(`rue:component:anchor`);return l(a,o),u(()=>{let e=m(v,{...y,...b});d(()=>p(e,a,o))}),e}):``;d(()=>p(e,C,T))}),e})}),s,h),s})};export{y as default};