import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,l as c,lt as l,o as u,pt as d,st as f,t as p,tt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as _}from"./Code-BIscIyEp.js";import{r as v}from"./SidebarPlaygroundExample-CEz1fABX.js";var y=()=>{let{message:y,isRed:b,color:x,toggleRed:S,toggleColor:C,activeTab:w}=g(`useSetup:0:0`,()=>o(()=>{let e=g(`ref:1:0`,()=>h(`Hello World!`)),t=g(`ref:1:1`,()=>h(!0)),n=g(`ref:1:2`,()=>h(`green`));return{message:e,isRed:t,color:n,toggleRed:()=>{t.value=!t.value},toggleColor:()=>{n.value=n.value===`green`?`blue`:`green`},activeTab:g(`ref:1:3`,()=>h(`preview`))}}));return c(o=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),u(p(v,{children:c(()=>{let o=e(),h=s(`h1`,o);i(o,h),l(h,`text-5xl font-semibold mb-4 md:mb-4`),i(h,m(`Attribute 绑定（移植自 Vue）`));let g=s(`div`,o);i(o,g),f(g,`role`,`tablist`),l(g,`tabs tabs-box`);let v=s(`button`,g);i(g,v),f(v,`role`,`tab`),n(()=>{l(v,`tab ${w.value===`preview`?`tab-active`:``}`)}),a(v,`click`,()=>{w.value=`preview`}),i(v,m(`效果`));let T=s(`button`,g);i(g,T),f(T,`role`,`tab`),n(()=>{l(T,`tab ${w.value===`code`?`tab-active`:``}`)}),a(T,`click`,()=>{w.value=`code`}),i(T,m(`代码`));let E=s(`div`,o);i(o,E),l(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=t(`rue:slot:anchor`);i(E,D),n(()=>{let a=w.value===`code`?c(()=>{let a=e(),o=s(`div`,a);i(a,o),l(o,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let c=s(`div`,o);i(o,c),l(c,`card-body p-0`);let d=t(`rue:component:anchor`);return i(c,d),n(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`});r(()=>u(e,c,d))}),a}):``;r(()=>u(a,E,D))}),i(E,m(` `));let O=t(`rue:slot:anchor`);return i(E,O),n(()=>{let t=w.value===`preview`?c(()=>{let t=e(),r=s(`div`,t);i(t,r),l(r,`card bg-base-100 shadow`);let o=s(`div`,r);i(r,o),l(o,`card-body grid gap-4`);let c=s(`p`,o);i(o,c);let u=s(`span`,c);i(c,u),n(()=>{f(u,`title`,String(y.value))}),i(u,m(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let p=s(`p`,o);i(o,p),n(()=>{l(p,`cursor-pointer ${b.value?`text-red-600`:``}`)}),a(p,`click`,S),i(p,m(`This should be red, but click me to toggle it.`));let h=s(`p`,o);return i(o,h),l(h,`cursor-pointer`),n(()=>{d(h,{color:x.value})}),a(h,`click`,C),i(h,m(`This should be green, and should toggle between green and blue on click.`)),t}):``;r(()=>u(t,E,O))}),o})}),h,g),h})};export{y as default};