import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,ot as d,qt as f,s as p,t as m}from"./vapor-runtime-aZAg0Qkw.js";import{a as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as g}from"./Code-5DOEyGxf.js";import{r as _}from"./SidebarPlaygroundExample-cASgDpH3.js";var v=n=>u(r=>{let i=e(`button`,r);a(()=>{c(i,String(n.className))});let l=s(`rue:slot:anchor`);return o(i,l),a(()=>{let e=n.text;t(()=>p(e,i,l))}),i}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>f(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>i(`code`))})));return u(i=>{let f=r(),h=s(`rue:component:anchor`);return o(f,h),p(m(_,{children:u(()=>{let i=r(),f=e(`h1`,i);o(i,f),c(f,`text-5xl font-semibold mb-4 md:mb-4`),o(f,l(`对象展开属性（spread props）`));let h=e(`div`,i);o(i,h),d(h,`role`,`tablist`),c(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),d(_,`role`,`tab`),a(()=>{c(_,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),n(_,`click`,()=>{x.value=`preview`}),o(_,l(`效果`));let S=e(`button`,h);o(h,S),d(S,`role`,`tab`),a(()=>{c(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{x.value=`code`}),o(S,l(`代码`));let C=e(`div`,i);o(i,C),c(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=s(`rue:slot:anchor`);o(C,w),a(()=>{let n=x.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});t(()=>p(e,l,u))}),n}):``;t(()=>p(n,C,w))}),o(C,l(` `));let T=s(`rue:slot:anchor`);return o(C,T),a(()=>{let n=x.value===`preview`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow`);let l=e(`div`,i);o(i,l),c(l,`card-body grid gap-4`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=m(v,{...y,...b});t(()=>p(e,l,u))}),n}):``;t(()=>p(n,C,T))}),i})}),f,h),f})};export{y as default};