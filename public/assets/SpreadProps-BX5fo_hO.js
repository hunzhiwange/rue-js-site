import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,ot as f,s as p,t as m}from"./vapor-runtime-DHPuOjqh.js";import{a as h}from"./vapor-helpers-vapor-CJFAWine.js";import{t as g}from"./Code-Ds9lKLk6.js";import{t as _}from"./SidebarPlaygroundExample-KML-rOvA.js";var v=t=>d(n=>{let r=e(`button`,n);s(()=>{l(r,String(t.className))});let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.text;a(()=>p(e,r,i))}),r}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>n(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>r(`code`))})));return d(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),p(m(_,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`对象展开属性（spread props）`));let h=e(`div`,n);o(n,h),f(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),f(_,`role`,`tab`),s(()=>{l(_,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(_,`click`,()=>{x.value=`preview`}),o(_,u(`效果`));let S=e(`button`,h);o(h,S),f(S,`role`,`tab`),s(()=>{l(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{x.value=`code`}),o(S,u(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=x.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,C,w))}),o(C,u(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let t=x.value===`preview`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(v,{...y,...b});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,C,T))}),n})}),r,h),r})};export{y as default};