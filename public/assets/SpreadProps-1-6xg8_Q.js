import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,ot as p,t as m}from"./vapor-runtime-BR_2rwNk.js";import{a as h}from"./vapor-helpers-vapor-DkadWylb.js";import{t as g}from"./Code-B_4lzH85.js";import{t as _}from"./SidebarPlaygroundExample-CtM-WHq_.js";var v=t=>u(n=>{let r=e(`button`,n);s(()=>{l(r,String(t.className))});let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.text;a(()=>f(e,r,i))}),r}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>n(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>r(`code`))})));return u(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),f(m(_,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`对象展开属性（spread props）`));let h=e(`div`,n);o(n,h),p(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),p(_,`role`,`tab`),s(()=>{l(_,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),t(_,`click`,()=>{x.value=`preview`}),o(_,d(`效果`));let S=e(`button`,h);o(h,S),p(S,`role`,`tab`),s(()=>{l(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{x.value=`code`}),o(S,d(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=x.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,C,w))}),o(C,d(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let t=x.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(v,{...y,...b});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,C,T))}),n})}),r,h),r})};export{y as default};