import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{t as _}from"./SidebarPlaygroundExample-CdMvdgT7.js";var v=r=>l(a=>{let s=o(`div`,a);e(s,`card bg-base-100 border`);let c=o(`div`,s);t(s,c),e(c,`card-body space-y-1`);let l=o(`div`,c);t(c,l),e(l,`font-semibold`);let d=i(`rue:slot:anchor`);t(l,d),n(()=>{let e=r.title;p(()=>u(e,l,d))});let f=o(`div`,c);t(c,f);let m=i(`rue:children:anchor`);return t(f,m),n(()=>{let e=r.children;p(()=>u(e,f,m))}),s}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>f(()=>({activeTab:h(`ref:1:0`,()=>c(`code`))})));return l(c=>{let f=a(),h=i(`rue:component:anchor`);return t(f,h),u(d(_,{children:l(()=>{let c=a(),f=o(`h1`,c);t(c,f),e(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,r(`children 插槽与嵌套`));let h=o(`div`,c);t(c,h),s(h,`role`,`tablist`),e(h,`tabs tabs-box`);let _=o(`button`,h);t(h,_),s(_,`role`,`tab`),n(()=>{e(_,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),m(_,`click`,()=>{y.value=`preview`}),t(_,r(`效果`));let b=o(`button`,h);t(h,b),s(b,`role`,`tab`),n(()=>{e(b,String(`tab ${y.value===`code`?`tab-active`:``}`))}),m(b,`click`,()=>{y.value=`code`}),t(b,r(`代码`));let x=o(`div`,c);t(c,x),e(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=i(`rue:slot:anchor`);t(x,S),n(()=>{let r=y.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto h-[220px] md:h-[440px]`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=d(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default Children;`});p(()=>u(e,c,l))}),r}):``;p(()=>u(r,x,S))}),t(x,r(` `));let C=i(`rue:slot:anchor`);return t(x,C),n(()=>{let n=y.value===`preview`?l(()=>{let n=a(),s=o(`div`,n);t(n,s),e(s,`card bg-base-100 shadow`);let c=o(`div`,s);t(s,c),e(c,`card-body grid gap-4`);let f=i(`rue:component:anchor`);return t(c,f),u(d(v,{title:`外层`,children:d(v,{title:`内层`,children:l(()=>{let e=a(),n=o(`span`,e);return t(e,n),t(n,r(`嵌套子元素`)),e})})}),c,f),n}):``;p(()=>u(n,x,C))}),c})}),f,h),f})};export{y as default};