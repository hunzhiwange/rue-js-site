import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,ot as o,pn as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,t as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./Code-DhoWkRkB.js";import{r as _}from"./SidebarPlaygroundExample-B78jsvoF.js";var v=e=>f(t=>{let i=c(`div`,t);n(i,`card bg-base-100 border`);let a=c(`div`,i);l(i,a),n(a,`card-body space-y-1`);let o=c(`div`,a);l(a,o),n(o,`font-semibold`);let s=r(`rue:slot:anchor`);l(o,s),u(()=>{let t=e.title;d(()=>p(t,o,s))});let f=c(`div`,a);l(a,f);let m=r(`rue:children:anchor`);return l(f,m),u(()=>{let t=e.children;d(()=>p(t,f,m))}),i}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>e(()=>({activeTab:h(`ref:1:0`,()=>s(`code`))})));return f(e=>{let s=i(),h=r(`rue:component:anchor`);return l(s,h),p(m(_,{children:f(()=>{let e=i(),s=c(`h1`,e);l(e,s),n(s,`text-5xl font-semibold mb-4 md:mb-4`),l(s,a(`children 插槽与嵌套`));let h=c(`div`,e);l(e,h),t(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=c(`button`,h);l(h,_),t(_,`role`,`tab`),u(()=>{n(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),o(_,`click`,()=>{y.value=`preview`}),l(_,a(`效果`));let b=c(`button`,h);l(h,b),t(b,`role`,`tab`),u(()=>{n(b,`tab ${y.value===`code`?`tab-active`:``}`)}),o(b,`click`,()=>{y.value=`code`}),l(b,a(`代码`));let x=c(`div`,e);l(e,x),n(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=r(`rue:slot:anchor`);l(x,S),u(()=>{let e=y.value===`code`?f(()=>{let e=i(),t=c(`div`,e);l(e,t),n(t,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let a=c(`div`,t);l(t,a),n(a,`card-body p-0`);let o=r(`rue:component:anchor`);return l(a,o),u(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});d(()=>p(e,a,o))}),e}):``;d(()=>p(e,x,S))}),l(x,a(` `));let C=r(`rue:slot:anchor`);return l(x,C),u(()=>{let e=y.value===`preview`?f(()=>{let e=i(),t=c(`div`,e);l(e,t),n(t,`card bg-base-100 shadow`);let o=c(`div`,t);l(t,o),n(o,`card-body grid gap-4`);let s=r(`rue:component:anchor`);return l(o,s),p(m(v,{title:`外层`,children:m(v,{title:`内层`,children:f(()=>{let e=i(),t=c(`span`,e);return l(e,t),l(t,a(`嵌套子元素`)),e})})}),o,s),e}):``;d(()=>p(e,x,C))}),e})}),s,h),s})};export{y as default};