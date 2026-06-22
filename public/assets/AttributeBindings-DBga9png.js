import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m,vt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as _}from"./Code-C5NjdoiC.js";import{r as v}from"./SidebarPlaygroundExample-DpItFif-.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>l(()=>{let e=g(`ref:1:0`,()=>n(`Hello World!`)),t=g(`ref:1:1`,()=>n(!0)),r=g(`ref:1:2`,()=>n(`green`));return{message:e,isRed:t,color:r,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{r.value=r.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>n(`preview`))}}));return o(n=>{let l=s(),g=m(`rue:component:anchor`);return e(l,g),c(f(v,{children:o(()=>{let n=s(),l=d(`h1`,n);e(n,l),u(l,`text-5xl font-semibold mb-4 md:mb-4`),e(l,a(`Attribute 绑定（移植自 Vue）`));let g=d(`div`,n);e(n,g),i(g,`role`,`tablist`),u(g,`tabs tabs-box`);let v=d(`button`,g);e(g,v),i(v,`role`,`tab`),t(()=>{u(v,`tab ${w.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{w.value=`preview`}),e(v,a(`效果`));let T=d(`button`,g);e(g,T),i(T,`role`,`tab`),t(()=>{u(T,`tab ${w.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{w.value=`code`}),e(T,a(`代码`));let E=d(`div`,n);e(n,E),u(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=m(`rue:slot:anchor`);e(E,D),t(()=>{let n=w.value===`code`?o(()=>{let n=s(),r=d(`div`,n);e(n,r),u(r,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let i=d(`div`,r);e(r,i),u(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});p(()=>c(e,i,a))}),n}):``;p(()=>c(n,E,D))}),e(E,a(` `));let O=m(`rue:slot:anchor`);return e(E,O),t(()=>{let n=w.value===`preview`?o(()=>{let n=s(),o=d(`div`,n);e(n,o),u(o,`card bg-base-100 shadow`);let c=d(`div`,o);e(o,c),u(c,`card-body grid gap-4`);let l=d(`p`,c);e(c,l);let f=d(`span`,l);e(l,f),t(()=>{i(f,`title`,String(y.value))}),e(f,a(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let p=d(`p`,c);e(c,p),t(()=>{u(p,`cursor-pointer ${b.value?`text-red-600`:``}`)}),r(p,`click`,S),e(p,a(`This should be red, but click me to toggle it.`));let m=d(`p`,c);return e(c,m),u(m,`cursor-pointer`),t(()=>{h(m,{color:x.value})}),r(m,`click`,C),e(m,a(`This should be green, and should toggle between green and blue on click.`)),n}):``;p(()=>c(n,E,O))}),n})}),l,g),l})};export{y as default};