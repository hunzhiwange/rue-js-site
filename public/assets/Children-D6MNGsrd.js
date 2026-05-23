import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-EUvELKQT.js";import{a as h}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as g}from"./Code-BdVklNCb.js";import{t as _}from"./SidebarPlaygroundExample-1AA0CIwm.js";var v=e=>c(t=>{let n=i(`div`,t);p(n,`card bg-base-100 border`);let a=i(`div`,n);r(n,a),p(a,`card-body space-y-1`);let s=i(`div`,a);r(a,s),p(s,`font-semibold`);let c=o(`rue:slot:anchor`);r(s,c),l(()=>{let t=e.title;m(()=>u(t,s,c))});let d=i(`div`,a);r(a,d);let f=o(`rue:children:anchor`);return r(d,f),l(()=>{let t=e.children;m(()=>u(t,d,f))}),n}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>t(()=>({activeTab:h(`ref:1:0`,()=>s(`code`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(_,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),p(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,d(`children 插槽与嵌套`));let h=i(`div`,t);r(t,h),e(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);r(h,_),e(_,`role`,`tab`),l(()=>{p(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),a(_,`click`,()=>{y.value=`preview`}),r(_,d(`效果`));let b=i(`button`,h);r(h,b),e(b,`role`,`tab`),l(()=>{p(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),a(b,`click`,()=>{y.value=`code`}),r(b,d(`代码`));let x=i(`div`,t);r(t,x),p(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=o(`rue:slot:anchor`);r(x,S),l(()=>{let e=y.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let a=i(`div`,t);r(t,a),p(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),l(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Box: FC<{ title: string }> = (props) => (
  <div className="border p-2 rounded-md space-y-1">
    <div className="font-semibold">{props.title}</div>
    <div>{props.children}</div>
  </div>
);

const Children: FC = () => (
  <div className="grid gap-4">
    <Box title="外层">
      <Box title="内层">
        <span>嵌套子元素</span>
      </Box>
    </Box>
  </div>
);

export default Children;`});m(()=>u(e,a,s))}),e}):``;m(()=>u(e,x,S))}),r(x,d(` `));let C=o(`rue:slot:anchor`);return r(x,C),l(()=>{let e=y.value===`preview`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),p(t,`card bg-base-100 shadow`);let a=i(`div`,t);r(t,a),p(a,`card-body grid gap-4`);let s=o(`rue:component:anchor`);return r(a,s),u(f(v,{title:`外层`,children:f(v,{title:`内层`,children:c(()=>{let e=n(),t=i(`span`,e);return r(e,t),r(t,d(`嵌套子元素`)),e})})}),a,s),e}):``;m(()=>u(e,x,C))}),t})}),s,h),s})};export{y as default};