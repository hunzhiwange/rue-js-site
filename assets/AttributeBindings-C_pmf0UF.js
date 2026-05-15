import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,X as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h}from"./vapor-runtime-Bp8DIxJg.js";import{a as g}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as _}from"./Code-D55WiaDx.js";import{t as v}from"./SidebarPlaygroundExample-Cpkm7O-2.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>f(()=>{let e=g(`ref:1:0`,()=>p(`Hello World!`)),t=g(`ref:1:1`,()=>p(!0)),n=g(`ref:1:2`,()=>p(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>p(`preview`))}}));return u(f=>{let p=t(),g=e(`rue:component:anchor`);return a(p,g),d(m(v,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,o(`Attribute 绑定（移植自 Vue）`));let g=r(`div`,f);a(f,g),s(g,`role`,`tablist`),n(g,`tabs tabs-box`);let v=r(`button`,g);a(g,v),s(v,`role`,`tab`),l(()=>{n(v,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{w.value=`preview`}),a(v,o(`效果`));let T=r(`button`,g);a(g,T),s(T,`role`,`tab`),l(()=>{n(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),i(T,`click`,()=>{w.value=`code`}),a(T,o(`代码`));let E=r(`div`,f);a(f,E),n(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);a(E,D),l(()=>{let i=w.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});h(()=>d(e,s,c))}),i}):``;h(()=>d(i,E,D))}),a(E,o(` `));let O=e(`rue:slot:anchor`);return a(E,O),l(()=>{let e=w.value===`preview`?u(()=>{let e=t(),u=r(`div`,e);a(e,u),n(u,`card bg-base-100 shadow`);let d=r(`div`,u);a(u,d),n(d,`card-body grid gap-4`);let f=r(`p`,d);a(d,f);let p=r(`span`,f);a(f,p),l(()=>{s(p,`title`,String(y.value))}),a(p,o(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let m=r(`p`,d);a(d,m),l(()=>{n(m,String(`cursor-pointer ${b.value?`text-red-600`:``}`))}),i(m,`click`,S),a(m,o(`This should be red... but click me to toggle it.`));let h=r(`p`,d);return a(d,h),n(h,`cursor-pointer`),l(()=>{c(h,{color:x.value})}),i(h,`click`,C),a(h,o(`This should be green, and should toggle between green and blue on click.`)),e}):``;h(()=>d(e,E,O))}),f})}),p,g),p})};export{y as default};