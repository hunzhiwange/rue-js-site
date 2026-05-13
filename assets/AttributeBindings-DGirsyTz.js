import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,Y as s,_t as c,bt as l,c as u,j as d,lt as f,pt as p,t as m,u as h}from"./vapor-runtime-D3a-68js.js";import{a as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as _}from"./Code-2C2psoH3.js";import{t as v}from"./SidebarPlaygroundExample-DKa0aI1C.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>c(()=>{let e=g(`ref:1:0`,()=>f(`Hello World!`)),t=g(`ref:1:1`,()=>f(!0)),n=g(`ref:1:2`,()=>f(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>f(`preview`))}}));return h(()=>{let c=e(),f=a(`rue:component:anchor`);return i(c,f),u(m(v,{children:h(()=>{let c=e(),f=n(`h1`);i(c,f),t(f,`text-5xl font-semibold mb-4 md:mb-4`),i(f,r(`Attribute 绑定（移植自 Vue）`));let g=n(`div`);i(c,g),o(g,`role`,`tablist`),t(g,`tabs tabs-box`);let v=n(`button`);i(g,v),o(v,`role`,`tab`),l(()=>{t(v,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),d(v,`click`,()=>{w.value=`preview`}),i(v,r(`效果`));let T=n(`button`);i(g,T),o(T,`role`,`tab`),l(()=>{t(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),d(T,`click`,()=>{w.value=`code`}),i(T,r(`代码`));let E=n(`div`);i(c,E),t(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);i(E,D),l(()=>{let r=w.value===`code`?h(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),l(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});p(()=>u(e,s,c))}),r}):``;p(()=>u(r,E,D))}),i(E,r(` `));let O=a(`rue:slot:anchor`);return i(E,O),l(()=>{let a=w.value===`preview`?h(()=>{let a=e(),c=n(`div`);i(a,c),t(c,`card bg-base-100 shadow`);let u=n(`div`);i(c,u),t(u,`card-body grid gap-4`);let f=n(`p`);i(u,f);let p=n(`span`);i(f,p),l(()=>{o(p,`title`,String(y.value))}),i(p,r(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let m=n(`p`);i(u,m),l(()=>{t(m,String(`cursor-pointer ${b.value?`text-red-600`:``}`))}),d(m,`click`,S),i(m,r(`This should be red... but click me to toggle it.`));let h=n(`p`);return i(u,h),t(h,`cursor-pointer`),l(()=>{s(h,{color:x.value})}),d(h,`click`,C),i(h,r(`This should be green, and should toggle between green and blue on click.`)),a}):``;p(()=>u(a,E,O))}),c})}),c,f),c})};export{y as default};