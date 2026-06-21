import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as g}from"./Code-4SUSUwRg.js";import{r as _}from"./SidebarPlaygroundExample-BEWYUWOl.js";var v=t=>s(r=>{let o=l(`button`,r);m(()=>{i(o,t.className)});let s=a(`rue:slot:anchor`);return n(o,s),m(()=>{let n=t.text;e(()=>u(n,o,s))}),o}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>o(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>t(`code`))})));return s(t=>{let o=p(),h=a(`rue:component:anchor`);return n(o,h),u(f(_,{children:s(()=>{let t=p(),o=l(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,d(`对象展开属性（spread props）`));let h=l(`div`,t);n(t,h),c(h,`role`,`tablist`),i(h,`tabs tabs-box`);let _=l(`button`,h);n(h,_),c(_,`role`,`tab`),m(()=>{i(_,`tab ${x.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{x.value=`preview`}),n(_,d(`效果`));let S=l(`button`,h);n(h,S),c(S,`role`,`tab`),m(()=>{i(S,`tab ${x.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{x.value=`code`}),n(S,d(`代码`));let C=l(`div`,t);n(t,C),i(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),m(()=>{let t=x.value===`code`?s(()=>{let t=p(),r=l(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=l(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),m(()=>{let t=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});e(()=>u(t,o,s))}),t}):``;e(()=>u(t,C,w))}),n(C,d(` `));let T=a(`rue:slot:anchor`);return n(C,T),m(()=>{let t=x.value===`preview`?s(()=>{let t=p(),r=l(`div`,t);n(t,r),i(r,`card bg-base-100 shadow`);let o=l(`div`,r);n(r,o),i(o,`card-body grid gap-4`);let s=a(`rue:component:anchor`);return n(o,s),m(()=>{let t=f(v,{...y,...b});e(()=>u(t,o,s))}),t}):``;e(()=>u(t,C,T))}),t})}),o,h),o})};export{y as default};