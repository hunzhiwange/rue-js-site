import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,nt as u,o as d,t as f,tt as p,ut as m}from"./vapor-runtime-CKrmRMZX.js";import{a as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as g}from"./Code-D5UqTwV6.js";import{r as _}from"./SidebarPlaygroundExample-D2vGHFCu.js";var v=n=>l(i=>{let a=p(`div`,i);o(a,u(`你好，`));let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.name;r(()=>d(e,a,s))}),a}),y=()=>{let{activeTab:y}=h(`useSetup:0:0`,()=>a(()=>({activeTab:h(`ref:1:0`,()=>n(`code`))})));return l(n=>{let a=c(),h=e(`rue:component:anchor`);return o(a,h),d(f(_,{children:l(()=>{let n=c(),a=p(`h1`,n);o(n,a),m(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,u(`组件与 Props 传递`));let h=p(`div`,n);o(n,h),s(h,`role`,`tablist`),m(h,`tabs tabs-box`);let _=p(`button`,h);o(h,_),s(_,`role`,`tab`),t(()=>{m(_,`tab ${y.value===`preview`?`tab-active`:``}`)}),i(_,`click`,()=>{y.value=`preview`}),o(_,u(`效果`));let b=p(`button`,h);o(h,b),s(b,`role`,`tab`),t(()=>{m(b,`tab ${y.value===`code`?`tab-active`:``}`)}),i(b,`click`,()=>{y.value=`code`}),o(b,u(`代码`));let x=p(`div`,n);o(n,x),m(x,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let S=e(`rue:slot:anchor`);o(x,S),t(()=>{let n=y.value===`code`?l(()=>{let n=c(),i=p(`div`,n);o(n,i),m(i,`card bg-base-100 shadow overflow-auto`);let a=p(`div`,i);o(i,a),m(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const Hello: FC<{ name: string }> = (props) => <div>你好，{props.name}</div>;

const Components: FC = () => (
  <div className="grid gap-4">
    <Hello name="Rue" />
    <Hello name="World" />
  </div>
);

export default Components;`});r(()=>d(e,a,s))}),n}):``;r(()=>d(n,x,S))}),o(x,u(` `));let C=e(`rue:slot:anchor`);return o(x,C),t(()=>{let t=y.value===`preview`?l(()=>{let t=c(),n=p(`div`,t);o(t,n),m(n,`card bg-base-100 shadow`);let r=p(`div`,n);o(n,r),m(r,`card-body grid gap-4`);let i=e(`rue:component:anchor`);o(r,i),d(f(v,{name:`Rue`}),r,i);let a=e(`rue:component:anchor`);return o(r,a),d(f(v,{name:`World`}),r,a),t}):``;r(()=>d(t,x,C))}),n})}),a,h),a})};export{y as default};