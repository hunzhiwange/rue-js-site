import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,ft as u,l as d,ot as f,qt as p,s as m,t as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as _}from"./Code-5DOEyGxf.js";import{r as v}from"./SidebarPlaygroundExample-cASgDpH3.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>p(()=>{let e=g(`ref:1:0`,()=>i(`Hello World!`)),t=g(`ref:1:1`,()=>i(!0)),n=g(`ref:1:2`,()=>i(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>i(`preview`))}}));return d(i=>{let p=r(),g=s(`rue:component:anchor`);return o(p,g),m(h(v,{children:d(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`Attribute 绑定（移植自 Vue）`));let g=e(`div`,i);o(i,g),f(g,`role`,`tablist`),c(g,`tabs tabs-box`);let v=e(`button`,g);o(g,v),f(v,`role`,`tab`),a(()=>{c(v,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),n(v,`click`,()=>{w.value=`preview`}),o(v,l(`效果`));let T=e(`button`,g);o(g,T),f(T,`role`,`tab`),a(()=>{c(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),n(T,`click`,()=>{w.value=`code`}),o(T,l(`代码`));let E=e(`div`,i);o(i,E),c(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=s(`rue:slot:anchor`);o(E,D),a(()=>{let n=w.value===`code`?d(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,E,D))}),o(E,l(` `));let O=s(`rue:slot:anchor`);return o(E,O),a(()=>{let i=w.value===`preview`?d(()=>{let t=r(),i=e(`div`,t);o(t,i),c(i,`card bg-base-100 shadow`);let s=e(`div`,i);o(i,s),c(s,`card-body grid gap-4`);let d=e(`p`,s);o(s,d);let p=e(`span`,d);o(d,p),a(()=>{f(p,`title`,String(y.value))}),o(p,l(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let m=e(`p`,s);o(s,m),a(()=>{c(m,String(`cursor-pointer ${b.value?`text-red-600`:``}`))}),n(m,`click`,S),o(m,l(`This should be red... but click me to toggle it.`));let h=e(`p`,s);return o(s,h),c(h,`cursor-pointer`),a(()=>{u(h,{color:x.value})}),n(h,`click`,C),o(h,l(`This should be green, and should toggle between green and blue on click.`)),t}):``;t(()=>m(i,E,O))}),i})}),p,g),p})};export{y as default};