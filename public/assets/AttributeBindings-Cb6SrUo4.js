import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,rt as u,s as d,t as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./Code-BCLFq1E3.js";import{t as v}from"./SidebarPlaygroundExample-CdMvdgT7.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>p(()=>{let e=g(`ref:1:0`,()=>c(`Hello World!`)),t=g(`ref:1:1`,()=>c(!0)),n=g(`ref:1:2`,()=>c(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>c(`preview`))}}));return l(c=>{let p=a(),g=i(`rue:component:anchor`);return t(p,g),d(f(v,{children:l(()=>{let c=a(),p=o(`h1`,c);t(c,p),e(p,`text-5xl font-semibold mb-4 md:mb-4`),t(p,r(`Attribute 绑定（移植自 Vue）`));let g=o(`div`,c);t(c,g),s(g,`role`,`tablist`),e(g,`tabs tabs-box`);let v=o(`button`,g);t(g,v),s(v,`role`,`tab`),n(()=>{e(v,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),h(v,`click`,()=>{w.value=`preview`}),t(v,r(`效果`));let T=o(`button`,g);t(g,T),s(T,`role`,`tab`),n(()=>{e(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),h(T,`click`,()=>{w.value=`code`}),t(T,r(`代码`));let E=o(`div`,c);t(c,E),e(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=i(`rue:slot:anchor`);t(E,D),n(()=>{let r=w.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});m(()=>d(e,c,l))}),r}):``;m(()=>d(r,E,D))}),t(E,r(` `));let O=i(`rue:slot:anchor`);return t(E,O),n(()=>{let i=w.value===`preview`?l(()=>{let i=a(),c=o(`div`,i);t(i,c),e(c,`card bg-base-100 shadow`);let l=o(`div`,c);t(c,l),e(l,`card-body grid gap-4`);let d=o(`p`,l);t(l,d);let f=o(`span`,d);t(d,f),n(()=>{s(f,`title`,String(y.value))}),t(f,r(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let p=o(`p`,l);t(l,p),n(()=>{e(p,String(`cursor-pointer ${b.value?`text-red-600`:``}`))}),h(p,`click`,S),t(p,r(`This should be red... but click me to toggle it.`));let m=o(`p`,l);return t(l,m),e(m,`cursor-pointer`),n(()=>{u(m,{color:x.value})}),h(m,`click`,C),t(m,r(`This should be green, and should toggle between green and blue on click.`)),i}):``;m(()=>d(i,E,O))}),c})}),p,g),p})};export{y as default};