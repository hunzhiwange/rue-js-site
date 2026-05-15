import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m}from"./vapor-runtime-Bp8DIxJg.js";import{a as h}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as g}from"./Code-D55WiaDx.js";import{t as _}from"./SidebarPlaygroundExample-Cpkm7O-2.js";var v=t=>l(i=>{let o=r(`div`,i);n(o,`card bg-base-100 border`);let s=r(`div`,o);a(o,s),n(s,`card-body space-y-1`);let l=r(`div`,s);a(s,l),n(l,`font-semibold`);let d=e(`rue:slot:anchor`);a(l,d),c(()=>{let e=t.title;m(()=>u(e,l,d))});let f=r(`div`,s);a(s,f);let p=e(`rue:children:anchor`);return a(f,p),c(()=>{let e=t.children;m(()=>u(e,f,p))}),o}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>d(()=>({activeTab:h(`ref:1:0`,()=>f(`code`))})));return l(d=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),u(p(_,{children:l(()=>{let d=t(),f=r(`h1`,d);a(d,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`children 插槽与嵌套`));let h=r(`div`,d);a(d,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),c(()=>{n(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{y.value=`preview`}),a(_,o(`效果`));let b=r(`button`,h);a(h,b),s(b,`role`,`tab`),c(()=>{n(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),i(b,`click`,()=>{y.value=`code`}),a(b,o(`代码`));let x=r(`div`,d);a(d,x),n(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=e(`rue:slot:anchor`);a(x,S),c(()=>{let i=y.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let l=e(`rue:component:anchor`);return a(s,l),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});m(()=>u(e,s,l))}),i}):``;m(()=>u(i,x,S))}),a(x,o(` `));let C=e(`rue:slot:anchor`);return a(x,C),c(()=>{let i=y.value===`preview`?l(()=>{let i=t(),s=r(`div`,i);a(i,s),n(s,`card bg-base-100 shadow`);let c=r(`div`,s);a(s,c),n(c,`card-body grid gap-4`);let d=e(`rue:component:anchor`);return a(c,d),u(p(v,{title:`外层`,children:p(v,{title:`内层`,children:l(()=>{let e=t(),n=r(`span`,e);return a(e,n),a(n,o(`嵌套子元素`)),e})})}),c,d),i}):``;m(()=>u(i,x,C))}),d})}),f,h),f})};export{y as default};