import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,l as c,lt as l,o as u,st as d,t as f,tt as p,zt as m}from"./vapor-runtime-CXIalONM.js";import{a as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as g}from"./Code-BIscIyEp.js";import{r as _}from"./SidebarPlaygroundExample-CEz1fABX.js";var v=e=>c(a=>{let o=s(`button`,a);n(()=>{l(o,e.className)});let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let t=e.text;r(()=>u(t,o,c))}),o}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>o(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>m(`code`))})));return c(o=>{let m=e(),h=t(`rue:component:anchor`);return i(m,h),u(f(_,{children:c(()=>{let o=e(),m=s(`h1`,o);i(o,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,p(`对象展开属性（spread props）`));let h=s(`div`,o);i(o,h),d(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=s(`button`,h);i(h,_),d(_,`role`,`tab`),n(()=>{l(_,`tab ${x.value===`preview`?`tab-active`:``}`)}),a(_,`click`,()=>{x.value=`preview`}),i(_,p(`效果`));let S=s(`button`,h);i(h,S),d(S,`role`,`tab`),n(()=>{l(S,`tab ${x.value===`code`?`tab-active`:``}`)}),a(S,`click`,()=>{x.value=`code`}),i(S,p(`代码`));let C=s(`div`,o);i(o,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=t(`rue:slot:anchor`);i(C,w),n(()=>{let a=x.value===`code`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),l(c,`card-body p-0`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,C,w))}),i(C,p(` `));let T=t(`rue:slot:anchor`);return i(C,T),n(()=>{let a=x.value===`preview`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow`);let c=s(`div`,o);i(o,c),l(c,`card-body grid gap-4`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=f(v,{...y,...b});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,C,T))}),o})}),m,h),m})};export{y as default};