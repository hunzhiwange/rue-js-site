import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{t as _}from"./SidebarPlaygroundExample-CdMvdgT7.js";var v=r=>l(a=>{let s=o(`button`,a);n(()=>{e(s,String(r.className))});let c=i(`rue:slot:anchor`);return t(s,c),n(()=>{let e=r.text;p(()=>u(e,s,c))}),s}),y=()=>{let{base:y,extra:b,activeTab:x}=h(`useSetup:0:0`,()=>f(()=>({base:{className:`btn btn-primary`},extra:{text:`确定按钮`},activeTab:h(`ref:1:0`,()=>c(`code`))})));return l(c=>{let f=a(),h=i(`rue:component:anchor`);return t(f,h),u(d(_,{children:l(()=>{let c=a(),f=o(`h1`,c);t(c,f),e(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,r(`对象展开属性（spread props）`));let h=o(`div`,c);t(c,h),s(h,`role`,`tablist`),e(h,`tabs tabs-box`);let _=o(`button`,h);t(h,_),s(_,`role`,`tab`),n(()=>{e(_,String(`tab ${x.value===`preview`?`tab-active`:``}`))}),m(_,`click`,()=>{x.value=`preview`}),t(_,r(`效果`));let S=o(`button`,h);t(h,S),s(S,`role`,`tab`),n(()=>{e(S,String(`tab ${x.value===`code`?`tab-active`:``}`))}),m(S,`click`,()=>{x.value=`code`}),t(S,r(`代码`));let C=o(`div`,c);t(c,C),e(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);t(C,w),n(()=>{let r=x.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=d(g,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

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

export default SpreadProps;`});p(()=>u(e,c,l))}),r}):``;p(()=>u(r,C,w))}),t(C,r(` `));let T=i(`rue:slot:anchor`);return t(C,T),n(()=>{let r=x.value===`preview`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow`);let c=o(`div`,s);t(s,c),e(c,`card-body grid gap-4`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=d(v,{...y,...b});p(()=>u(e,c,l))}),r}):``;p(()=>u(r,C,T))}),c})}),f,h),f})};export{y as default};