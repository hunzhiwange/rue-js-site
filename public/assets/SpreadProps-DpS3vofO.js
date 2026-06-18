import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,q as u,qt as d,s as f,st as p,t as m}from"./vapor-runtime-iQZthBPQ.js";import{a as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as g}from"./Code-CZqShVUj.js";import{r as _}from"./SidebarPlaygroundExample-5H7RL-T7.js";var v=e=>l(r=>{let s=i(`button`,r);o(()=>{p(s,e.className)});let c=a(`rue:slot:anchor`);return n(s,c),o(()=>{let n=e.text;t(()=>f(n,s,c))}),s}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>d(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>r(`code`))})));return l(r=>{let d=s(),h=a(`rue:component:anchor`);return n(d,h),f(m(_,{children:l(()=>{let r=s(),d=i(`h1`,r);n(r,d),p(d,`text-5xl font-semibold mb-4 md:mb-4`),n(d,e(`对象展开属性（spread props）`));let h=i(`div`,r);n(r,h),c(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);n(h,_),c(_,`role`,`tab`),o(()=>{p(_,`tab ${x.value===`preview`?`tab-active`:``}`)}),u(_,`click`,()=>{x.value=`preview`}),n(_,e(`效果`));let S=i(`button`,h);n(h,S),c(S,`role`,`tab`),o(()=>{p(S,`tab ${x.value===`code`?`tab-active`:``}`)}),u(S,`click`,()=>{x.value=`code`}),n(S,e(`代码`));let C=i(`div`,r);n(r,C),p(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),o(()=>{let e=x.value===`code`?l(()=>{let e=s(),r=i(`div`,e);n(e,r),p(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),p(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});t(()=>f(e,c,l))}),e}):``;t(()=>f(e,C,w))}),n(C,e(` `));let T=a(`rue:slot:anchor`);return n(C,T),o(()=>{let e=x.value===`preview`?l(()=>{let e=s(),r=i(`div`,e);n(e,r),p(r,`card bg-base-100 shadow`);let c=i(`div`,r);n(r,c),p(c,`card-body grid gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=m(v,{...y,...b});t(()=>f(e,c,l))}),e}):``;t(()=>f(e,C,T))}),r})}),d,h),d})};export{y as default};