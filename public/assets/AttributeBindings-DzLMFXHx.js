import{Bt as e,Dn as t,Et as n,H as r,K as i,L as a,Lt as o,Mt as s,V as c,_n as l,fn as u,gn as d,hn as f,nt as p,ot as m,q as h,wn as g,x as _,z as v}from"./rue-runtime-CwEGJ854.js";import{t as y}from"./Code-DUvGro8N.js";import{r as b}from"./SidebarPlaygroundExample-EGR0CyDT.js";var x=l(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Attribute 绑定（移植自 Vue）</h1>`),S=l(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),C=l(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),w=()=>{let l=e(`Hello World!`),w=e(!0),T=e(`green`),E=()=>{w.value=!w.value},D=()=>{T.value=T.value===`green`?`blue`:`green`},O=e(`preview`);return s(()=>h(r(b,()=>({children:[(e,t,r)=>_(e,r,()=>n(Object.assign(e=>{let t=p();return t.appendChild(x().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>_(e,r,()=>n(Object.assign(e=>{let t=p(),n=S().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),m(i,`role`,`tab`),g(()=>{a(i,`tab ${O.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{O.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),o(()=>i.removeEventListener(`click`,c)),m(s,`role`,`tab`),g(()=>{a(s,`tab ${O.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{O.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,l),o(()=>s.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,a)=>_(e,a,()=>n(Object.assign(e=>{let r=p(),a=C().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],m=s.parentNode,h=o.childNodes[1],_=h.parentNode;return r.appendChild(a),c(m,s,()=>{let e=O.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=f(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`;let n=f(`div`,t);return u(t,n),n.className=`card-body p-0`,i(n,y,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=p();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),c(_,h,()=>{let e=O.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let n=f(`div`,e);n.className=`card bg-base-100 shadow`;let r=f(`div`,n);u(n,r),r.className=`card-body grid gap-4`;let i=f(`p`,r);u(r,i);let a=f(`span`,i);u(i,a);let o;g(()=>{let e=l.value;Object.is(o,e)||(o=e,e==null||e===!1?a.removeAttribute(`title`):a.setAttribute(`title`,String(e)))}),u(a,d(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let s=f(`p`,r);u(r,s);let c;g(()=>{let e=`cursor-pointer ${w.value?`text-red-600`:``}`,t=e==null?``:String(e);Object.is(c,t)||(c=t,s.className=t)});let p=e=>{let t=E;typeof t==`function`&&t(e)};s.addEventListener(`click`,p),t(()=>s.removeEventListener(`click`,p)),u(s,d(`This should be red, but click me to toggle it.`));let m=f(`p`,r);u(r,m),m.className=`cursor-pointer`;let h;g(()=>{let e=T.value,t=e==null?``:String(e);Object.is(h,t)||(h=t,m.style.color=t)});let _=e=>{let t=D;typeof t==`function`&&t(e)};return m.addEventListener(`click`,_),t(()=>m.removeEventListener(`click`,_)),u(m,d(`This should be green, and should toggle between green and blue on click.`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=p();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]})),e=>v(()=>{})))};export{w as default};