import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as g}from"./Code-4SUSUwRg.js";import{r as _}from"./SidebarPlaygroundExample-BEWYUWOl.js";var v=t=>s(r=>{let o=l(`div`,r);i(o,`card bg-base-100 border`);let s=l(`div`,o);n(o,s),i(s,`card-body space-y-1`);let c=l(`div`,s);n(s,c),i(c,`font-semibold`);let d=a(`rue:slot:anchor`);n(c,d),m(()=>{let n=t.title;e(()=>u(n,c,d))});let f=l(`div`,s);n(s,f);let p=a(`rue:children:anchor`);return n(f,p),m(()=>{let n=t.children;e(()=>u(n,f,p))}),o}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>o(()=>({activeTab:h(`ref:1:0`,()=>t(`code`))})));return s(t=>{let o=p(),h=a(`rue:component:anchor`);return n(o,h),u(f(_,{children:s(()=>{let t=p(),o=l(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,d(`children 插槽与嵌套`));let h=l(`div`,t);n(t,h),c(h,`role`,`tablist`),i(h,`tabs tabs-box`);let _=l(`button`,h);n(h,_),c(_,`role`,`tab`),m(()=>{i(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),r(_,`click`,()=>{y.value=`preview`}),n(_,d(`效果`));let b=l(`button`,h);n(h,b),c(b,`role`,`tab`),m(()=>{i(b,`tab ${y.value===`code`?`tab-active`:``}`)}),r(b,`click`,()=>{y.value=`code`}),n(b,d(`代码`));let x=l(`div`,t);n(t,x),i(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=a(`rue:slot:anchor`);n(x,S),m(()=>{let t=y.value===`code`?s(()=>{let t=p(),r=l(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let o=l(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),m(()=>{let t=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});e(()=>u(t,o,s))}),t}):``;e(()=>u(t,x,S))}),n(x,d(` `));let C=a(`rue:slot:anchor`);return n(x,C),m(()=>{let t=y.value===`preview`?s(()=>{let e=p(),t=l(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let r=l(`div`,t);n(t,r),i(r,`card-body grid gap-4`);let o=a(`rue:component:anchor`);return n(r,o),u(f(v,{title:`外层`,children:f(v,{title:`内层`,children:s(()=>{let e=p(),t=l(`span`,e);return n(e,t),n(t,d(`嵌套子元素`)),e})})}),r,o),e}):``;e(()=>u(t,x,C))}),t})}),o,h),o})};export{y as default};