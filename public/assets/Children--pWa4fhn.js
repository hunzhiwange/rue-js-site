import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m}from"./vapor-runtime-BuwLbCGk.js";import{a as h}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as g}from"./Code-DQxnq0in.js";import{t as _}from"./SidebarPlaygroundExample-BwOo72z2.js";var v=t=>c(i=>{let o=r(`div`,i);n(o,`card bg-base-100 border`);let s=r(`div`,o);a(o,s),n(s,`card-body space-y-1`);let c=r(`div`,s);a(s,c),n(c,`font-semibold`);let u=e(`rue:slot:anchor`);a(c,u),m(()=>{let e=t.title;l(()=>d(e,c,u))});let f=r(`div`,s);a(s,f);let p=e(`rue:children:anchor`);return a(f,p),m(()=>{let e=t.children;l(()=>d(e,f,p))}),o}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>u(()=>({activeTab:h(`ref:1:0`,()=>f(`code`))})));return c(u=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),d(p(_,{children:c(()=>{let u=t(),f=r(`h1`,u);a(u,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`children 插槽与嵌套`));let h=r(`div`,u);a(u,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),m(()=>{n(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{y.value=`preview`}),a(_,o(`效果`));let b=r(`button`,h);a(h,b),s(b,`role`,`tab`),m(()=>{n(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),i(b,`click`,()=>{y.value=`code`}),a(b,o(`代码`));let x=r(`div`,u);a(u,x),n(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=e(`rue:slot:anchor`);a(x,S),m(()=>{let i=y.value===`code`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),m(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});l(()=>d(e,s,c))}),i}):``;l(()=>d(i,x,S))}),a(x,o(` `));let C=e(`rue:slot:anchor`);return a(x,C),m(()=>{let i=y.value===`preview`?c(()=>{let i=t(),s=r(`div`,i);a(i,s),n(s,`card bg-base-100 shadow`);let l=r(`div`,s);a(s,l),n(l,`card-body grid gap-4`);let u=e(`rue:component:anchor`);return a(l,u),d(p(v,{title:`外层`,children:p(v,{title:`内层`,children:c(()=>{let e=t(),n=r(`span`,e);return a(e,n),a(n,o(`嵌套子元素`)),e})})}),l,u),i}):``;l(()=>d(i,x,C))}),u})}),f,h),f})};export{y as default};