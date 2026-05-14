import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m}from"./vapor-runtime-Dfq7aA8z.js";import{a as h}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as g}from"./Code-CLTo4rRM.js";import{t as _}from"./SidebarPlaygroundExample-DOFGFBd1.js";var v=t=>l(i=>{let o=r(`button`,i);c(()=>{n(o,String(t.className))});let s=e(`rue:slot:anchor`);return a(o,s),c(()=>{let e=t.text;m(()=>u(e,o,s))}),o}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>d(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>f(`code`))})));return l(d=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),u(p(_,{children:l(()=>{let d=t(),f=r(`h1`,d);a(d,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`对象展开属性（spread props）`));let h=r(`div`,d);a(d,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),c(()=>{n(_,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{x.value=`preview`}),a(_,o(`效果`));let S=r(`button`,h);a(h,S),s(S,`role`,`tab`),c(()=>{n(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{x.value=`code`}),a(S,o(`代码`));let C=r(`div`,d);a(d,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),c(()=>{let i=x.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let l=e(`rue:component:anchor`);return a(s,l),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});m(()=>u(e,s,l))}),i}):``;m(()=>u(i,C,w))}),a(C,o(` `));let T=e(`rue:slot:anchor`);return a(C,T),c(()=>{let i=x.value===`preview`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow`);let s=r(`div`,o);a(o,s),n(s,`card-body grid gap-4`);let l=e(`rue:component:anchor`);return a(s,l),c(()=>{let e=p(v,{...y,...b});m(()=>u(e,s,l))}),i}):``;m(()=>u(i,C,T))}),d})}),f,h),f})};export{y as default};