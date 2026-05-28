import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,ot as p,t as m}from"./vapor-runtime-BR_2rwNk.js";import{a as h}from"./vapor-helpers-vapor-DkadWylb.js";import{t as g}from"./Code-B_4lzH85.js";import{t as _}from"./SidebarPlaygroundExample-CtM-WHq_.js";var v=t=>u(n=>{let r=e(`div`,n);l(r,`card bg-base-100 border`);let i=e(`div`,r);o(r,i),l(i,`card-body space-y-1`);let u=e(`div`,i);o(i,u),l(u,`font-semibold`);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.title;a(()=>f(e,u,d))});let p=e(`div`,i);o(i,p);let m=c(`rue:children:anchor`);return o(p,m),s(()=>{let e=t.children;a(()=>f(e,p,m))}),r}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>n(()=>({activeTab:h(`ref:1:0`,()=>r(`code`))})));return u(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),f(m(_,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`children 插槽与嵌套`));let h=e(`div`,n);o(n,h),p(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),p(_,`role`,`tab`),s(()=>{l(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),t(_,`click`,()=>{y.value=`preview`}),o(_,d(`效果`));let b=e(`button`,h);o(h,b),p(b,`role`,`tab`),s(()=>{l(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),t(b,`click`,()=>{y.value=`code`}),o(b,d(`代码`));let x=e(`div`,n);o(n,x),l(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=c(`rue:slot:anchor`);o(x,S),s(()=>{let t=y.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,x,S))}),o(x,d(` `));let C=c(`rue:slot:anchor`);return o(x,C),s(()=>{let t=y.value===`preview`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body grid gap-4`);let a=c(`rue:component:anchor`);return o(r,a),f(m(v,{title:`外层`,children:m(v,{title:`内层`,children:u(()=>{let t=i(),n=e(`span`,t);return o(t,n),o(n,d(`嵌套子元素`)),t})})}),r,a),t}):``;a(()=>f(t,x,C))}),n})}),r,h),r})};export{y as default};