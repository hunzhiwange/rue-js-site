import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,at as c,d as l,kt as u,l as d,q as f,t as p,tt as m,xt as h}from"./vapor-runtime-ACs_OvwU.js";import{a as g}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as _}from"./Code-CliOXHNE.js";import{t as v}from"./SidebarPlaygroundExample-DXnPmR3z.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>t(()=>{let e=g(`ref:1:0`,()=>s(`Hello World!`)),t=g(`ref:1:1`,()=>s(!0)),n=g(`ref:1:2`,()=>s(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>s(`preview`))}}));return l(t=>{let s=n(),g=o(`rue:component:anchor`);return r(s,g),d(p(v,{children:l(()=>{let t=n(),s=i(`h1`,t);r(t,s),m(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,f(`Attribute 绑定（移植自 Vue）`));let g=i(`div`,t);r(t,g),e(g,`role`,`tablist`),m(g,`tabs tabs-box`);let v=i(`button`,g);r(g,v),e(v,`role`,`tab`),u(()=>{m(v,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),a(v,`click`,()=>{w.value=`preview`}),r(v,f(`效果`));let T=i(`button`,g);r(g,T),e(T,`role`,`tab`),u(()=>{m(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),a(T,`click`,()=>{w.value=`code`}),r(T,f(`代码`));let E=i(`div`,t);r(t,E),m(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=o(`rue:slot:anchor`);r(E,D),u(()=>{let e=w.value===`code`?l(()=>{let e=n(),t=i(`div`,e);r(e,t),m(t,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let a=i(`div`,t);r(t,a),m(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),u(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});h(()=>d(e,a,s))}),e}):``;h(()=>d(e,E,D))}),r(E,f(` `));let O=o(`rue:slot:anchor`);return r(E,O),u(()=>{let t=w.value===`preview`?l(()=>{let t=n(),o=i(`div`,t);r(t,o),m(o,`card bg-base-100 shadow`);let s=i(`div`,o);r(o,s),m(s,`card-body grid gap-4`);let l=i(`p`,s);r(s,l);let d=i(`span`,l);r(l,d),u(()=>{e(d,`title`,String(y.value))}),r(d,f(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let p=i(`p`,s);r(s,p),u(()=>{m(p,String(`cursor-pointer ${b.value?`text-red-600`:``}`))}),a(p,`click`,S),r(p,f(`This should be red... but click me to toggle it.`));let h=i(`p`,s);return r(s,h),m(h,`cursor-pointer`),u(()=>{c(h,{color:x.value})}),a(h,`click`,C),r(h,f(`This should be green, and should toggle between green and blue on click.`)),t}):``;h(()=>d(t,E,O))}),t})}),s,g),s})};export{y as default};