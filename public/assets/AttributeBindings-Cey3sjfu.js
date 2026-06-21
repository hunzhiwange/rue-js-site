import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,gt as o,in as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as _}from"./Code-4SUSUwRg.js";import{r as v}from"./SidebarPlaygroundExample-BEWYUWOl.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>s(()=>{let e=g(`ref:1:0`,()=>t(`Hello World!`)),n=g(`ref:1:1`,()=>t(!0)),r=g(`ref:1:2`,()=>t(`green`));return{message:e,isRed:n,color:r,toggleRed:()=>{n.value=!n.value},toggleColor:()=>{r.value=r.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>t(`preview`))}}));return c(t=>{let s=m(),g=a(`rue:component:anchor`);return n(s,g),d(p(v,{children:c(()=>{let t=m(),s=u(`h1`,t);n(t,s),i(s,`text-5xl font-semibold mb-4 md:mb-4`),n(s,f(`Attribute 绑定（移植自 Vue）`));let g=u(`div`,t);n(t,g),l(g,`role`,`tablist`),i(g,`tabs tabs-box`);let v=u(`button`,g);n(g,v),l(v,`role`,`tab`),h(()=>{i(v,`tab ${w.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{w.value=`preview`}),n(v,f(`效果`));let T=u(`button`,g);n(g,T),l(T,`role`,`tab`),h(()=>{i(T,`tab ${w.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{w.value=`code`}),n(T,f(`代码`));let E=u(`div`,t);n(t,E),i(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);n(E,D),h(()=>{let t=w.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),h(()=>{let t=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,E,D))}),n(E,f(` `));let O=a(`rue:slot:anchor`);return n(E,O),h(()=>{let t=w.value===`preview`?c(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let a=u(`div`,t);n(t,a),i(a,`card-body grid gap-4`);let s=u(`p`,a);n(a,s);let c=u(`span`,s);n(s,c),h(()=>{l(c,`title`,String(y.value))}),n(c,f(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let d=u(`p`,a);n(a,d),h(()=>{i(d,`cursor-pointer ${b.value?`text-red-600`:``}`)}),r(d,`click`,S),n(d,f(`This should be red, but click me to toggle it.`));let p=u(`p`,a);return n(a,p),i(p,`cursor-pointer`),h(()=>{o(p,{color:x.value})}),r(p,`click`,C),n(p,f(`This should be green, and should toggle between green and blue on click.`)),e}):``;e(()=>d(t,E,O))}),t})}),s,g),s})};export{y as default};