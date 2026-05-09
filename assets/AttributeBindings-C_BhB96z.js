import{A as e,F as t,H as n,I as r,N as i,P as a,W as o,c as s,j as c,pt as l,q as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as g}from"./Code-B1JFTu6m.js";import{t as _}from"./SidebarPlaygroundExample-DlK8mtjC.js";var v=()=>{let{message:v,isRed:y,color:b,toggleRed:x,toggleColor:S,activeTab:C}=h(`useSetup:0:0`,()=>m(()=>{let e=h(`ref:1:0`,()=>d(`Hello World!`)),t=h(`ref:1:1`,()=>d(!0)),n=h(`ref:1:2`,()=>d(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:h(`ref:1:3`,()=>d(`preview`))}}));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return c(d,m),s(f(_,{children:p(()=>{let d=a(),m=t(`h1`);c(d,m),o(m,`text-5xl font-semibold mb-4 md:mb-4`),c(m,r(`Attribute 绑定（移植自 Vue）`));let h=t(`div`);c(d,h),n(h,`role`,`tablist`),o(h,`tabs tabs-box`);let _=t(`button`);c(h,_),n(_,`role`,`tab`),l(()=>{o(_,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),e(_,`click`,()=>{C.value=`preview`}),c(_,r(`效果`));let w=t(`button`);c(h,w),n(w,`role`,`tab`),l(()=>{o(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),e(w,`click`,()=>{C.value=`code`}),c(w,r(`代码`));let T=t(`div`);c(d,T),o(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);c(T,E),l(()=>{s(C.value===`code`?p(()=>{let e=a(),n=t(`div`);c(e,n),o(n,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let r=t(`div`);c(n,r),o(r,`card-body p-0`);let u=i(`rue:component:anchor`);return c(r,u),l(()=>{s(f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const AttributeBindings: FC = () => {
  const message = ref('Hello World!');
  const isRed = ref(true);
  const color = ref<'green' | 'blue'>('green');

  const toggleRed = () => {
    isRed.value = !isRed.value;
  };

  const toggleColor = () => {
    color.value = color.value === 'green' ? 'blue' : 'green';
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <p>
          <span title={message.value}>
            Hover your mouse over me for a few seconds to see my dynamically bound title!
          </span>
        </p>

        <p
          className={\`cursor-pointer \${isRed.value ? 'text-red-600' : ''}\`}
          onClick={toggleRed}
        >
          This should be red... but click me to toggle it.
        </p>

        <p className="cursor-pointer" style={{ color: color.value }} onClick={toggleColor}>
          This should be green, and should toggle between green and blue on click.
        </p>
      </div>
    </div>
  );
};

export default AttributeBindings;`}),r,u)}),e}):``,T,E)}),c(T,r(` `));let D=i(`rue:slot:anchor`);return c(T,D),l(()=>{s(C.value===`preview`?p(()=>{let i=a(),s=t(`div`);c(i,s),o(s,`card bg-base-100 shadow`);let d=t(`div`);c(s,d),o(d,`card-body grid gap-4`);let f=t(`p`);c(d,f);let p=t(`span`);c(f,p),l(()=>{n(p,`title`,String(v.value))}),c(p,r(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let m=t(`p`);c(d,m),l(()=>{o(m,String(`cursor-pointer ${y.value?`text-red-600`:``}`))}),e(m,`click`,x),c(m,r(`This should be red... but click me to toggle it.`));let h=t(`p`);return c(d,h),o(h,`cursor-pointer`),l(()=>{u(h,{color:b.value})}),e(h,`click`,S),c(h,r(`This should be green, and should toggle between green and blue on click.`)),i}):``,T,D)}),d})}),d,m),d})};export{v as default};