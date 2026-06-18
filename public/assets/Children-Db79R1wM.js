import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,q as u,qt as d,s as f,st as p,t as m}from"./vapor-runtime-iQZthBPQ.js";import{a as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as g}from"./Code-CZqShVUj.js";import{r as _}from"./SidebarPlaygroundExample-5H7RL-T7.js";var v=e=>l(r=>{let s=i(`div`,r);p(s,`card bg-base-100 border`);let c=i(`div`,s);n(s,c),p(c,`card-body space-y-1`);let l=i(`div`,c);n(c,l),p(l,`font-semibold`);let u=a(`rue:slot:anchor`);n(l,u),o(()=>{let n=e.title;t(()=>f(n,l,u))});let d=i(`div`,c);n(c,d);let m=a(`rue:children:anchor`);return n(d,m),o(()=>{let n=e.children;t(()=>f(n,d,m))}),s}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>d(()=>({activeTab:h(`ref:1:0`,()=>r(`code`))})));return l(r=>{let d=s(),h=a(`rue:component:anchor`);return n(d,h),f(m(_,{children:l(()=>{let r=s(),d=i(`h1`,r);n(r,d),p(d,`text-5xl font-semibold mb-4 md:mb-4`),n(d,e(`children 插槽与嵌套`));let h=i(`div`,r);n(r,h),c(h,`role`,`tablist`),p(h,`tabs tabs-box`);let _=i(`button`,h);n(h,_),c(_,`role`,`tab`),o(()=>{p(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),u(_,`click`,()=>{y.value=`preview`}),n(_,e(`效果`));let b=i(`button`,h);n(h,b),c(b,`role`,`tab`),o(()=>{p(b,`tab ${y.value===`code`?`tab-active`:``}`)}),u(b,`click`,()=>{y.value=`code`}),n(b,e(`代码`));let x=i(`div`,r);n(r,x),p(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=a(`rue:slot:anchor`);n(x,S),o(()=>{let e=y.value===`code`?l(()=>{let e=s(),r=i(`div`,e);n(e,r),p(r,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let c=i(`div`,r);n(r,c),p(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=m(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});t(()=>f(e,c,l))}),e}):``;t(()=>f(e,x,S))}),n(x,e(` `));let C=a(`rue:slot:anchor`);return n(x,C),o(()=>{let r=y.value===`preview`?l(()=>{let t=s(),r=i(`div`,t);n(t,r),p(r,`card bg-base-100 shadow`);let o=i(`div`,r);n(r,o),p(o,`card-body grid gap-4`);let c=a(`rue:component:anchor`);return n(o,c),f(m(v,{title:`外层`,children:m(v,{title:`内层`,children:l(()=>{let t=s(),r=i(`span`,t);return n(t,r),n(r,e(`嵌套子元素`)),t})})}),o,c),t}):``;t(()=>f(r,x,C))}),r})}),d,h),d})};export{y as default};