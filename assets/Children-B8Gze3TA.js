import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,c as s,j as c,pt as l,rt as u,t as d,u as f,ut as p}from"./vapor-runtime-BZZbPG7x.js";import{a as m}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as h}from"./Code-C8wy38VS.js";import{t as g}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var _=e=>f(()=>{let n=t(`div`);o(n,`card bg-base-100 border`);let r=t(`div`);c(n,r),o(r,`card-body space-y-1`);let a=t(`div`);c(r,a),o(a,`font-semibold`);let u=i(`rue:slot:anchor`);c(a,u),l(()=>{let t=e.title;s(t,a,u)});let d=t(`div`);c(r,d);let f=i(`rue:children:anchor`);return c(d,f),l(()=>{let t=e.children;s(t,d,f)}),n}),v=()=>{let{activeTab:v}=m(`useSetup:0:0`,()=>p(()=>({activeTab:m(`ref:1:0`,()=>u(`code`))})));return f(()=>{let u=a(),p=i(`rue:component:anchor`);return c(u,p),s(d(g,{children:f(()=>{let u=a(),p=t(`h1`);c(u,p),o(p,`text-5xl font-semibold mb-4 md:mb-4`),c(p,r(`children 插槽与嵌套`));let m=t(`div`);c(u,m),n(m,`role`,`tablist`),o(m,`tabs tabs-box`);let g=t(`button`);c(m,g),n(g,`role`,`tab`),l(()=>{o(g,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),e(g,`click`,()=>{v.value=`preview`}),c(g,r(`效果`));let y=t(`button`);c(m,y),n(y,`role`,`tab`),l(()=>{o(y,String(`tab ${v.value===`code`?`tab-active`:``}`))}),e(y,`click`,()=>{v.value=`code`}),c(y,r(`代码`));let b=t(`div`);c(u,b),o(b,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let x=i(`rue:slot:anchor`);c(b,x),l(()=>{s(v.value===`code`?f(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let r=t(`div`);c(n,r),o(r,`card-body p-0`);let u=i(`rue:component:anchor`);return c(r,u),l(()=>{s(d(h,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`}),r,u)}),e}):``,b,x)}),c(b,r(` `));let S=i(`rue:slot:anchor`);return c(b,S),l(()=>{s(v.value===`preview`?f(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow`);let l=t(`div`);c(n,l),o(l,`card-body grid gap-4`);let u=i(`rue:component:anchor`);return c(l,u),s(d(_,{title:`外层`,children:f(()=>{let e=a(),n=i(`rue:component:anchor`);return c(e,n),s(d(_,{title:`内层`,children:f(()=>{let e=a(),n=t(`span`);return c(e,n),c(n,r(`嵌套子元素`)),e})}),e,n),e})}),l,u),e}):``,b,S)}),u})}),u,p),u})};export{v as default};