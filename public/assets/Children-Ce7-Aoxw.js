import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,l as c,lt as l,o as u,st as d,t as f,tt as p,zt as m}from"./vapor-runtime-CXIalONM.js";import{a as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as g}from"./Code-BIscIyEp.js";import{r as _}from"./SidebarPlaygroundExample-CEz1fABX.js";var v=e=>c(a=>{let o=s(`div`,a);l(o,`card bg-base-100 border`);let c=s(`div`,o);i(o,c),l(c,`card-body space-y-1`);let d=s(`div`,c);i(c,d),l(d,`font-semibold`);let f=t(`rue:slot:anchor`);i(d,f),n(()=>{let t=e.title;r(()=>u(t,d,f))});let p=s(`div`,c);i(c,p);let m=t(`rue:children:anchor`);return i(p,m),n(()=>{let t=e.children;r(()=>u(t,p,m))}),o}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>o(()=>({activeTab:h(`ref:1:0`,()=>m(`code`))})));return c(o=>{let m=e(),h=t(`rue:component:anchor`);return i(m,h),u(f(_,{children:c(()=>{let o=e(),m=s(`h1`,o);i(o,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,p(`children 插槽与嵌套`));let h=s(`div`,o);i(o,h),d(h,`role`,`tablist`),l(h,`tabs tabs-box`);let _=s(`button`,h);i(h,_),d(_,`role`,`tab`),n(()=>{l(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),a(_,`click`,()=>{y.value=`preview`}),i(_,p(`效果`));let b=s(`button`,h);i(h,b),d(b,`role`,`tab`),n(()=>{l(b,`tab ${y.value===`code`?`tab-active`:``}`)}),a(b,`click`,()=>{y.value=`code`}),i(b,p(`代码`));let x=s(`div`,o);i(o,x),l(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=t(`rue:slot:anchor`);i(x,S),n(()=>{let a=y.value===`code`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let c=s(`div`,o);i(o,c),l(c,`card-body p-0`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,x,S))}),i(x,p(` `));let C=t(`rue:slot:anchor`);return i(x,C),n(()=>{let n=y.value===`preview`?c(()=>{let n=e(),r=s(`div`,n);i(n,r),l(r,`card bg-base-100 shadow`);let a=s(`div`,r);i(r,a),l(a,`card-body grid gap-4`);let o=t(`rue:component:anchor`);return i(a,o),u(f(v,{title:`外层`,children:f(v,{title:`内层`,children:c(()=>{let t=e(),n=s(`span`,t);return i(t,n),i(n,p(`嵌套子元素`)),t})})}),a,o),n}):``;r(()=>u(n,x,C))}),o})}),m,h),m})};export{y as default};