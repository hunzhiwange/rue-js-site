import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,l,mt as u,nt as d,o as f,t as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as _}from"./Code-D5UqTwV6.js";import{r as v}from"./SidebarPlaygroundExample-D2vGHFCu.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>a(()=>{let e=g(`ref:1:0`,()=>n(`Hello World!`)),t=g(`ref:1:1`,()=>n(!0)),r=g(`ref:1:2`,()=>n(`green`));return{message:e,isRed:t,color:r,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{r.value=r.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>n(`preview`))}}));return l(n=>{let a=c(),g=e(`rue:component:anchor`);return o(a,g),f(p(v,{children:l(()=>{let n=c(),a=m(`h1`,n);o(n,a),h(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`Attribute 绑定（移植自 Vue）`));let g=m(`div`,n);o(n,g),s(g,`role`,`tablist`),h(g,`tabs tabs-box`);let v=m(`button`,g);o(g,v),s(v,`role`,`tab`),t(()=>{h(v,`tab ${w.value===`preview`?`tab-active`:``}`)}),i(v,`click`,()=>{w.value=`preview`}),o(v,d(`效果`));let T=m(`button`,g);o(g,T),s(T,`role`,`tab`),t(()=>{h(T,`tab ${w.value===`code`?`tab-active`:``}`)}),i(T,`click`,()=>{w.value=`code`}),o(T,d(`代码`));let E=m(`div`,n);o(n,E),h(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);o(E,D),t(()=>{let n=w.value===`code`?l(()=>{let n=c(),i=m(`div`,n);o(n,i),h(i,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let a=m(`div`,i);o(i,a),h(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,E,D))}),o(E,d(` `));let O=e(`rue:slot:anchor`);return o(E,O),t(()=>{let e=w.value===`preview`?l(()=>{let e=c(),n=m(`div`,e);o(e,n),h(n,`card bg-base-100 shadow`);let r=m(`div`,n);o(n,r),h(r,`card-body grid gap-4`);let a=m(`p`,r);o(r,a);let l=m(`span`,a);o(a,l),t(()=>{s(l,`title`,String(y.value))}),o(l,d(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let f=m(`p`,r);o(r,f),t(()=>{h(f,`cursor-pointer ${b.value?`text-red-600`:``}`)}),i(f,`click`,S),o(f,d(`This should be red, but click me to toggle it.`));let p=m(`p`,r);return o(r,p),h(p,`cursor-pointer`),t(()=>{u(p,{color:x.value})}),i(p,`click`,C),o(p,d(`This should be green, and should toggle between green and blue on click.`)),e}):``;r(()=>f(e,E,O))}),n})}),a,g),a})};export{y as default};