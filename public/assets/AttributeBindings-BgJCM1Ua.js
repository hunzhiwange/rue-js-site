import{F as e,P as t,Ut as n,V as r,Vt as i,Wt as a,fn as o,gn as s,hn as c,in as l,mn as u,mt as d,nt as f,sn as p,u as m,yn as h}from"./rue-runtime-BWbIfNT8.js";import{t as g}from"./Code-C5ZhIIr9.js";import{r as _}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var v=h(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Attribute 绑定（移植自 Vue）</h1>`),y=h(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),b=h(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),x=(h,x,S)=>{let C=d(`Hello World!`),w=d(!0),T=d(`green`),E=()=>{w.value=!w.value},D=()=>{T.value=T.value===`green`?`blue`:`green`},O=d(`preview`);return f(()=>t(_,()=>({children:(t,d,f)=>{let h=()=>a(t=>{let i=u();i.appendChild(v().content.cloneNode(!0));let d=y().content.cloneNode(!0),f=d.firstChild,h=f.childNodes[0],_=f.childNodes[1];i.appendChild(d),h.setAttribute(`role`,`tab`);let x;l(()=>{let e=`tab ${O.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,h.setAttribute(`class`,t))}),p(m(t,h,`click`,()=>()=>{O.value=`preview`})),_.setAttribute(`role`,`tab`);let S;l(()=>{let e=`tab ${O.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,_.setAttribute(`class`,t))}),p(m(t,_,`click`,()=>()=>{O.value=`code`}));let k=b().content.cloneNode(!0),A=k.firstChild,j=A.childNodes[0],M=j.parentNode,N=A.childNodes[1],P=N.parentNode;i.appendChild(k),n(M,j,()=>{let t=O.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>a(t=>{let n=c(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let r=c(`div`,n);return o(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,g,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>r(e=>{let n=s(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>r(e=>{let t=u();return[t.firstChild,t.lastChild]})}}),n(P,N,()=>{let e=O.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>a(e=>{let t=c(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let n=c(`div`,t);o(t,n),n.setAttribute(`class`,`card-body grid gap-4`);let r=c(`p`,n);o(n,r);let i=c(`span`,r);o(r,i);let a;l(()=>{let e=C.value;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`title`):i.setAttribute(`title`,String(e)))}),o(i,s(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let u=c(`p`,n);o(n,u);let d;l(()=>{let e=`cursor-pointer ${w.value?`text-red-600`:``}`,t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,u.setAttribute(`class`,t))});let f=e=>{let t=E;typeof t==`function`&&t(e)};u.addEventListener(`click`,f),p(()=>u.removeEventListener(`click`,f)),o(u,s(`This should be red, but click me to toggle it.`));let m=c(`p`,n);o(n,m),m.setAttribute(`class`,`cursor-pointer`);let h;l(()=>{let e=T.value,t=e===!1||e==null?``:String(e);Object.is(h,t)||(h=t,m.style.color=t)});let g=e=>{let t=D;typeof t==`function`&&t(e)};return m.addEventListener(`click`,g),p(()=>m.removeEventListener(`click`,g)),o(m,s(`This should be green, and should toggle between green and blue on click.`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(t=>{let n=s(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>r(e=>{let t=u();return[t.firstChild,t.lastChild]})}});let F=s(``),I=s(``);return i.insertBefore(F,i.firstChild),i.appendChild(I),[i.firstChild,i.lastChild]});return t==null?h():i(t,f,h)}})))};export{x as default};