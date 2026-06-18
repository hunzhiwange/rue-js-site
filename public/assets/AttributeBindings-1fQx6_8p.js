import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,dt as l,l as u,q as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as _}from"./Code-CZqShVUj.js";import{r as v}from"./SidebarPlaygroundExample-5H7RL-T7.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>f(()=>{let e=g(`ref:1:0`,()=>r(`Hello World!`)),t=g(`ref:1:1`,()=>r(!0)),n=g(`ref:1:2`,()=>r(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>r(`preview`))}}));return u(r=>{let f=s(),g=a(`rue:component:anchor`);return n(f,g),p(h(v,{children:u(()=>{let r=s(),f=i(`h1`,r);n(r,f),m(f,`text-5xl font-semibold mb-4 md:mb-4`),n(f,e(`Attribute 绑定（移植自 Vue）`));let g=i(`div`,r);n(r,g),c(g,`role`,`tablist`),m(g,`tabs tabs-box`);let v=i(`button`,g);n(g,v),c(v,`role`,`tab`),o(()=>{m(v,`tab ${w.value===`preview`?`tab-active`:``}`)}),d(v,`click`,()=>{w.value=`preview`}),n(v,e(`效果`));let T=i(`button`,g);n(g,T),c(T,`role`,`tab`),o(()=>{m(T,`tab ${w.value===`code`?`tab-active`:``}`)}),d(T,`click`,()=>{w.value=`code`}),n(T,e(`代码`));let E=i(`div`,r);n(r,E),m(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);n(E,D),o(()=>{let e=w.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),m(r,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let c=i(`div`,r);n(r,c),m(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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
          This should be red, but click me to toggle it.
        </p>

        <p className="cursor-pointer" style={{ color: color.value }} onClick={toggleColor}>
          This should be green, and should toggle between green and blue on click.
        </p>
      </div>
    </div>
  );
};

export default AttributeBindings;`});t(()=>p(e,c,l))}),e}):``;t(()=>p(e,E,D))}),n(E,e(` `));let O=a(`rue:slot:anchor`);return n(E,O),o(()=>{let r=w.value===`preview`?u(()=>{let t=s(),r=i(`div`,t);n(t,r),m(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),m(a,`card-body grid gap-4`);let u=i(`p`,a);n(a,u);let f=i(`span`,u);n(u,f),o(()=>{c(f,`title`,String(y.value))}),n(f,e(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let p=i(`p`,a);n(a,p),o(()=>{m(p,`cursor-pointer ${b.value?`text-red-600`:``}`)}),d(p,`click`,S),n(p,e(`This should be red, but click me to toggle it.`));let h=i(`p`,a);return n(a,h),m(h,`cursor-pointer`),o(()=>{l(h,{color:x.value})}),d(h,`click`,C),n(h,e(`This should be green, and should toggle between green and blue on click.`)),t}):``;t(()=>p(r,E,O))}),r})}),f,g),f})};export{y as default};