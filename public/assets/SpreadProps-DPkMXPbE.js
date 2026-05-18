import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m}from"./vapor-runtime-BuwLbCGk.js";import{a as h}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as g}from"./Code-DQxnq0in.js";import{t as _}from"./SidebarPlaygroundExample-BwOo72z2.js";var v=t=>c(i=>{let o=r(`button`,i);m(()=>{n(o,String(t.className))});let s=e(`rue:slot:anchor`);return a(o,s),m(()=>{let e=t.text;l(()=>d(e,o,s))}),o}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>u(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>f(`code`))})));return c(u=>{let f=t(),h=e(`rue:component:anchor`);return a(f,h),d(p(_,{children:c(()=>{let u=t(),f=r(`h1`,u);a(u,f),n(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,o(`对象展开属性（spread props）`));let h=r(`div`,u);a(u,h),s(h,`role`,`tablist`),n(h,`tabs tabs-box`);let _=r(`button`,h);a(h,_),s(_,`role`,`tab`),m(()=>{n(_,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),i(_,`click`,()=>{x.value=`preview`}),a(_,o(`效果`));let S=r(`button`,h);a(h,S),s(S,`role`,`tab`),m(()=>{n(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),i(S,`click`,()=>{x.value=`code`}),a(S,o(`代码`));let C=r(`div`,u);a(u,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);a(C,w),m(()=>{let i=x.value===`code`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),m(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Button: FC<{ text: string; className?: string }> = (props) => (
  <button className={props.className}>{props.text}</button>
);

const SpreadProps: FC = () => {
  const base = { className: 'px-3 py-2 rounded-md bg-blue-600 text-white' };
  const extra = { text: '确定按钮' };
  return (
    <div className="grid gap-4">
      <Button {...base} {...extra} />
    </div>
  );
};

export default SpreadProps;`});l(()=>d(e,s,c))}),i}):``;l(()=>d(i,C,w))}),a(C,o(` `));let T=e(`rue:slot:anchor`);return a(C,T),m(()=>{let i=x.value===`preview`?c(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow`);let s=r(`div`,o);a(o,s),n(s,`card-body grid gap-4`);let c=e(`rue:component:anchor`);return a(s,c),m(()=>{let e=p(v,{...y,...b});l(()=>d(e,s,c))}),i}):``;l(()=>d(i,C,T))}),u})}),f,h),f})};export{y as default};