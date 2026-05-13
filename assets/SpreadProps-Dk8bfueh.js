import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,j as u,lt as d,pt as f,t as p,u as m}from"./vapor-runtime-D3a-68js.js";import{a as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as g}from"./Code-2C2psoH3.js";import{t as _}from"./SidebarPlaygroundExample-DKa0aI1C.js";var v=e=>m(()=>{let r=n(`button`);c(()=>{t(r,String(e.className))});let o=a(`rue:slot:anchor`);return i(r,o),c(()=>{let t=e.text;f(()=>l(t,r,o))}),r}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>s(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>d(`code`))})));return m(()=>{let s=e(),d=a(`rue:component:anchor`);return i(s,d),l(p(_,{children:m(()=>{let s=e(),d=n(`h1`);i(s,d),t(d,`text-5xl font-semibold mb-4 md:mb-4`),i(d,r(`对象展开属性（spread props）`));let h=n(`div`);i(s,h),o(h,`role`,`tablist`),t(h,`tabs tabs-box`);let _=n(`button`);i(h,_),o(_,`role`,`tab`),c(()=>{t(_,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),u(_,`click`,()=>{x.value=`preview`}),i(_,r(`效果`));let S=n(`button`);i(h,S),o(S,`role`,`tab`),c(()=>{t(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),u(S,`click`,()=>{x.value=`code`}),i(S,r(`代码`));let C=n(`div`);i(s,C),t(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);i(C,w),c(()=>{let r=x.value===`code`?m(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let u=a(`rue:component:anchor`);return i(s,u),c(()=>{let e=p(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});f(()=>l(e,s,u))}),r}):``;f(()=>l(r,C,w))}),i(C,r(` `));let T=a(`rue:slot:anchor`);return i(C,T),c(()=>{let r=x.value===`preview`?m(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow`);let s=n(`div`);i(o,s),t(s,`card-body grid gap-4`);let u=a(`rue:component:anchor`);return i(s,u),c(()=>{let e=p(v,{...y,...b});f(()=>l(e,s,u))}),r}):``;f(()=>l(r,C,T))}),s})}),s,d),s})};export{y as default};