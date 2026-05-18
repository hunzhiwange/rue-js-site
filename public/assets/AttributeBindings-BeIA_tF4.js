import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,X as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as _}from"./Code-DQxnq0in.js";import{t as v}from"./SidebarPlaygroundExample-BwOo72z2.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>d(()=>{let e=g(`ref:1:0`,()=>p(`Hello World!`)),t=g(`ref:1:1`,()=>p(!0)),n=g(`ref:1:2`,()=>p(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>p(`preview`))}}));return l(d=>{let p=t(),g=e(`rue:component:anchor`);return a(p,g),f(m(v,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,o(`Attribute 绑定（移植自 Vue）`));let g=r(`div`,d);a(d,g),s(g,`role`,`tablist`),n(g,`tabs tabs-box`);let v=r(`button`,g);a(g,v),s(v,`role`,`tab`),h(()=>{n(v,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{w.value=`preview`}),a(v,o(`效果`));let T=r(`button`,g);a(g,T),s(T,`role`,`tab`),h(()=>{n(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),i(T,`click`,()=>{w.value=`code`}),a(T,o(`代码`));let E=r(`div`,d);a(d,E),n(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);a(E,D),h(()=>{let i=w.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,E,D))}),a(E,o(` `));let O=e(`rue:slot:anchor`);return a(E,O),h(()=>{let e=w.value===`preview`?l(()=>{let e=t(),l=r(`div`,e);a(e,l),n(l,`card bg-base-100 shadow`);let u=r(`div`,l);a(l,u),n(u,`card-body grid gap-4`);let d=r(`p`,u);a(u,d);let f=r(`span`,d);a(d,f),h(()=>{s(f,`title`,String(y.value))}),a(f,o(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let p=r(`p`,u);a(u,p),h(()=>{n(p,String(`cursor-pointer ${b.value?`text-red-600`:``}`))}),i(p,`click`,S),a(p,o(`This should be red... but click me to toggle it.`));let m=r(`p`,u);return a(u,m),n(m,`cursor-pointer`),h(()=>{c(m,{color:x.value})}),i(m,`click`,C),a(m,o(`This should be green, and should toggle between green and blue on click.`)),e}):``;u(()=>f(e,E,O))}),d})}),p,g),p})};export{y as default};