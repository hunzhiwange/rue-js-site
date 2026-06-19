import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,nt as u,o as d,t as f,tt as p,ut as m}from"./vapor-runtime-CKrmRMZX.js";import{a as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as g}from"./Code-D5UqTwV6.js";import{r as _}from"./SidebarPlaygroundExample-D2vGHFCu.js";var v=n=>l(i=>{let a=p(`button`,i);t(()=>{m(a,n.className)});let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.text;r(()=>d(e,a,s))}),a}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>a(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>n(`code`))})));return l(n=>{let a=c(),h=e(`rue:component:anchor`);return o(a,h),d(f(_,{children:l(()=>{let n=c(),a=p(`h1`,n);o(n,a),m(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,u(`对象展开属性（spread props）`));let h=p(`div`,n);o(n,h),s(h,`role`,`tablist`),m(h,`tabs tabs-box`);let _=p(`button`,h);o(h,_),s(_,`role`,`tab`),t(()=>{m(_,`tab ${x.value===`preview`?`tab-active`:``}`)}),i(_,`click`,()=>{x.value=`preview`}),o(_,u(`效果`));let S=p(`button`,h);o(h,S),s(S,`role`,`tab`),t(()=>{m(S,`tab ${x.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{x.value=`code`}),o(S,u(`代码`));let C=p(`div`,n);o(n,C),m(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=e(`rue:slot:anchor`);o(C,w),t(()=>{let n=x.value===`code`?l(()=>{let n=c(),i=p(`div`,n);o(n,i),m(i,`card bg-base-100 shadow overflow-auto`);let a=p(`div`,i);o(i,a),m(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});r(()=>d(e,a,s))}),n}):``;r(()=>d(n,C,w))}),o(C,u(` `));let T=e(`rue:slot:anchor`);return o(C,T),t(()=>{let n=x.value===`preview`?l(()=>{let n=c(),i=p(`div`,n);o(n,i),m(i,`card bg-base-100 shadow`);let a=p(`div`,i);o(i,a),m(a,`card-body grid gap-4`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=f(v,{...y,...b});r(()=>d(e,a,s))}),n}):``;r(()=>d(n,C,T))}),n})}),a,h),a})};export{y as default};