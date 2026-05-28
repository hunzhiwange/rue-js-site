import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,ft as f,l as p,ot as m,t as h}from"./vapor-runtime-BR_2rwNk.js";import{a as g}from"./vapor-helpers-vapor-DkadWylb.js";import{t as _}from"./Code-B_4lzH85.js";import{t as v}from"./SidebarPlaygroundExample-CtM-WHq_.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>n(()=>{let e=g(`ref:1:0`,()=>r(`Hello World!`)),t=g(`ref:1:1`,()=>r(!0)),n=g(`ref:1:2`,()=>r(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>r(`preview`))}}));return u(n=>{let r=i(),g=c(`rue:component:anchor`);return o(r,g),p(h(v,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`Attribute 绑定（移植自 Vue）`));let g=e(`div`,n);o(n,g),m(g,`role`,`tablist`),l(g,`tabs tabs-box`);let v=e(`button`,g);o(g,v),m(v,`role`,`tab`),s(()=>{l(v,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{w.value=`preview`}),o(v,d(`效果`));let T=e(`button`,g);o(g,T),m(T,`role`,`tab`),s(()=>{l(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),t(T,`click`,()=>{w.value=`code`}),o(T,d(`代码`));let E=e(`div`,n);o(n,E),l(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=c(`rue:slot:anchor`);o(E,D),s(()=>{let t=w.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});a(()=>p(e,r,u))}),t}):``;a(()=>p(t,E,D))}),o(E,d(` `));let O=c(`rue:slot:anchor`);return o(E,O),s(()=>{let n=w.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-4`);let c=e(`p`,a);o(a,c);let u=e(`span`,c);o(c,u),s(()=>{m(u,`title`,String(y.value))}),o(u,d(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let p=e(`p`,a);o(a,p),s(()=>{l(p,String(`cursor-pointer ${b.value?`text-red-600`:``}`))}),t(p,`click`,S),o(p,d(`This should be red... but click me to toggle it.`));let h=e(`p`,a);return o(a,h),l(h,`cursor-pointer`),s(()=>{f(h,{color:x.value})}),t(h,`click`,C),o(h,d(`This should be green, and should toggle between green and blue on click.`)),n}):``;a(()=>p(n,E,O))}),n})}),r,g),r})};export{y as default};