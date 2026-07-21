import{At as e,Cn as t,Ct as n,Tt as r,dt as i,ft as a,mt as o,ot as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as _}from"./Code-DhoWkRkB.js";import{r as v}from"./SidebarPlaygroundExample-B78jsvoF.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>t(()=>{let e=g(`ref:1:0`,()=>c(`Hello World!`)),t=g(`ref:1:1`,()=>c(!0)),n=g(`ref:1:2`,()=>c(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>c(`preview`))}}));return p(t=>{let c=a(),g=i(`rue:component:anchor`);return u(c,g),m(h(v,{children:p(()=>{let t=a(),c=l(`h1`,t);u(t,c),r(c,`text-5xl font-semibold mb-4 md:mb-4`),u(c,o(`Attribute 绑定（移植自 Vue）`));let g=l(`div`,t);u(t,g),n(g,`role`,`tablist`),r(g,`tabs tabs-box`);let v=l(`button`,g);u(g,v),n(v,`role`,`tab`),d(()=>{r(v,`tab ${w.value===`preview`?`tab-active`:``}`)}),s(v,`click`,()=>{w.value=`preview`}),u(v,o(`效果`));let T=l(`button`,g);u(g,T),n(T,`role`,`tab`),d(()=>{r(T,`tab ${w.value===`code`?`tab-active`:``}`)}),s(T,`click`,()=>{w.value=`code`}),u(T,o(`代码`));let E=l(`div`,t);u(t,E),r(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=i(`rue:slot:anchor`);u(E,D),d(()=>{let e=w.value===`code`?p(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let n=l(`div`,t);u(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return u(n,o),d(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});f(()=>m(e,n,o))}),e}):``;f(()=>m(e,E,D))}),u(E,o(` `));let O=i(`rue:slot:anchor`);return u(E,O),d(()=>{let t=w.value===`preview`?p(()=>{let t=a(),i=l(`div`,t);u(t,i),r(i,`card bg-base-100 shadow`);let c=l(`div`,i);u(i,c),r(c,`card-body grid gap-4`);let f=l(`p`,c);u(c,f);let p=l(`span`,f);u(f,p),d(()=>{n(p,`title`,String(y.value))}),u(p,o(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let m=l(`p`,c);u(c,m),d(()=>{r(m,`cursor-pointer ${b.value?`text-red-600`:``}`)}),s(m,`click`,S),u(m,o(`This should be red, but click me to toggle it.`));let h=l(`p`,c);return u(c,h),r(h,`cursor-pointer`),d(()=>{let t={color:x.value};e(h,t)}),s(h,`click`,C),u(h,o(`This should be green, and should toggle between green and blue on click.`)),t}):``;f(()=>m(t,E,O))}),t})}),c,g),c})};export{y as default};