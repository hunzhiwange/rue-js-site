import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,ot as d,qt as f,s as p,t as m}from"./vapor-runtime-aZAg0Qkw.js";import{a as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as g}from"./Code-5DOEyGxf.js";import{r as _}from"./SidebarPlaygroundExample-cASgDpH3.js";var v=n=>u(r=>{let i=e(`div`,r);c(i,`card bg-base-100 border`);let l=e(`div`,i);o(i,l),c(l,`card-body space-y-1`);let u=e(`div`,l);o(l,u),c(u,`font-semibold`);let d=s(`rue:slot:anchor`);o(u,d),a(()=>{let e=n.title;t(()=>p(e,u,d))});let f=e(`div`,l);o(l,f);let m=s(`rue:children:anchor`);return o(f,m),a(()=>{let e=n.children;t(()=>p(e,f,m))}),i}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>i(`code`))})));return u(i=>{let f=r(),h=s(`rue:component:anchor`);return o(f,h),p(m(_,{children:u(()=>{let i=r(),f=e(`h1`,i);o(i,f),c(f,`text-5xl font-semibold mb-4 md:mb-4`),o(f,l(`children 插槽与嵌套`));let h=e(`div`,i);o(i,h),d(h,`role`,`tablist`),c(h,`tabs tabs-box`);let _=e(`button`,h);o(h,_),d(_,`role`,`tab`),a(()=>{c(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),n(_,`click`,()=>{y.value=`preview`}),o(_,l(`效果`));let b=e(`button`,h);o(h,b),d(b,`role`,`tab`),a(()=>{c(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),n(b,`click`,()=>{y.value=`code`}),o(b,l(`代码`));let x=e(`div`,i);o(i,x),c(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=s(`rue:slot:anchor`);o(x,S),a(()=>{let n=y.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});t(()=>p(e,l,u))}),n}):``;t(()=>p(n,x,S))}),o(x,l(` `));let C=s(`rue:slot:anchor`);return o(x,C),a(()=>{let n=y.value===`preview`?u(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`card bg-base-100 shadow`);let i=e(`div`,n);o(n,i),c(i,`card-body grid gap-4`);let a=s(`rue:component:anchor`);return o(i,a),p(m(v,{title:`外层`,children:m(v,{title:`内层`,children:u(()=>{let t=r(),n=e(`span`,t);return o(t,n),o(n,l(`嵌套子元素`)),t})})}),i,a),t}):``;t(()=>p(n,x,C))}),i})}),f,h),f})};export{y as default};