import{Dn as e,E as t,Q as n,Qt as r,Vt as i,_n as a,_t as o,ct as s,et as c,gn as l,nt as u,pn as d,qt as f,rt as p,st as m,tn as h,vn as g,wn as _,xt as v}from"./rue-runtime-HIMg8Lz8.js";import{t as y}from"./Code-DpH7u0gk.js";import{r as b}from"./SidebarPlaygroundExample-BCPRe0hA.js";var x=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Attribute 绑定（移植自 Vue）</h1>`),S=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),C=g(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),w=()=>{let g=h(`Hello World!`),w=h(!0),T=h(`green`),E=()=>{w.value=!w.value},D=()=>{T.value=T.value===`green`?`blue`:`green`},O=h(`preview`);return f(()=>s(p(b,()=>({children:[(e,n,r)=>t(e,r,()=>i(Object.assign(e=>{let t=o();return t.appendChild(x().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,a,s)=>t(e,s,()=>i(Object.assign(e=>{let t=o(),i=S().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0],c=a.childNodes[1];t.appendChild(i),v(s,`role`,`tab`),_(()=>{n(s,`tab ${O.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{O.value=`preview`};typeof t==`function`&&t(e)};s.addEventListener(`click`,l),r(()=>s.removeEventListener(`click`,l)),v(c,`role`,`tab`),_(()=>{n(c,`tab ${O.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{O.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),r(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r,s)=>t(n,s,()=>i(Object.assign(t=>{let n=o(),r=C().content.cloneNode(!0),s=r.firstChild,c=s.childNodes[0],f=c.parentNode,p=s.childNodes[1],h=p.parentNode;return n.appendChild(r),u(f,c,()=>{let e=O.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=l(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`;let n=l(`div`,t);return d(t,n),n.className=`card-body p-0`,m(n,y,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=a(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=o();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),u(h,p,()=>{let t=O.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let n=l(`div`,t);n.className=`card bg-base-100 shadow`;let r=l(`div`,n);d(n,r),r.className=`card-body grid gap-4`;let i=l(`p`,r);d(r,i);let o=l(`span`,i);d(i,o);let s;_(()=>{let e=g.value;Object.is(s,e)||(s=e,e==null||e===!1?o.removeAttribute(`title`):o.setAttribute(`title`,String(e)))}),d(o,a(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let c=l(`p`,r);d(r,c);let u;_(()=>{let e=`cursor-pointer ${w.value?`text-red-600`:``}`,t=e==null?``:String(e);Object.is(u,t)||(u=t,c.className=t)});let f=e=>{let t=E;typeof t==`function`&&t(e)};c.addEventListener(`click`,f),e(()=>c.removeEventListener(`click`,f)),d(c,a(`This should be red, but click me to toggle it.`));let p=l(`p`,r);d(r,p),p.className=`cursor-pointer`;let m;_(()=>{let e=T.value,t=e==null?``:String(e);Object.is(m,t)||(m=t,p.style.color=t)});let h=e=>{let t=D;typeof t==`function`&&t(e)};return p.addEventListener(`click`,h),e(()=>p.removeEventListener(`click`,h)),d(p,a(`This should be green, and should toggle between green and blue on click.`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=a(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=o();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>c(()=>{})))};export{w as default};