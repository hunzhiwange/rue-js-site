import{H as e,Ut as t,V as n,Vt as r,Wt as i,Y as a,fn as o,gn as s,hn as c,in as l,mn as u,sn as d,st as f,u as p,yn as m,yt as h}from"./rue-runtime-Cv6BZekS.js";import{t as g}from"./Code-BzFVdc3U.js";import{r as _}from"./SidebarPlaygroundExample-rFyhXfC_.js";var v=m(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Attribute 绑定（移植自 Vue）</h1>`),y=m(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),b=m(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),x=(m,x,S)=>{let C=f(`Hello World!`),w=f(!0),T=f(`green`),E=()=>{w.value=!w.value},D=()=>{T.value=T.value===`green`?`blue`:`green`},O=f(`preview`);return a(()=>n(_,()=>({children:(n,a,f)=>{let m=()=>i(n=>{let r=u();r.appendChild(v().content.cloneNode(!0));let a=y().content.cloneNode(!0),f=a.firstChild,m=f.childNodes[0],_=f.childNodes[1];r.appendChild(a),m.setAttribute(`role`,`tab`);let x;l(()=>{let e=`tab ${O.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,m.setAttribute(`class`,t))}),d(p(n,m,`click`,()=>()=>{O.value=`preview`})),_.setAttribute(`role`,`tab`);let S;l(()=>{let e=`tab ${O.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,_.setAttribute(`class`,t))}),d(p(n,_,`click`,()=>()=>{O.value=`code`}));let k=b().content.cloneNode(!0),A=k.firstChild,j=A.childNodes[0],M=j.parentNode,N=A.childNodes[1],P=N.parentNode;r.appendChild(k),t(M,j,()=>{let t=O.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>i(t=>{let n=c(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[320px] md:h-[620px]`);let r=c(`div`,n);return o(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,g,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default AttributeBindings;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>h(e=>{let n=s(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=u();return[t.firstChild,t.lastChild]})}}),t(P,N,()=>{let e=O.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>i(e=>{let t=c(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let n=c(`div`,t);o(t,n),n.setAttribute(`class`,`card-body grid gap-4`);let r=c(`p`,n);o(n,r);let i=c(`span`,r);o(r,i);let a;l(()=>{let e=C.value;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`title`):i.setAttribute(`title`,String(e)))}),o(i,s(`Hover your mouse over me for a few seconds to see my dynamically bound title!`));let u=c(`p`,n);o(n,u);let f;l(()=>{let e=`cursor-pointer ${w.value?`text-red-600`:``}`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,u.setAttribute(`class`,t))});let p=e=>{let t=E;typeof t==`function`&&t(e)};u.addEventListener(`click`,p),d(()=>u.removeEventListener(`click`,p)),o(u,s(`This should be red, but click me to toggle it.`));let m=c(`p`,n);o(n,m),m.setAttribute(`class`,`cursor-pointer`);let h;l(()=>{let e=T.value,t=e===!1||e==null?``:String(e);Object.is(h,t)||(h=t,m.style.color=t)});let g=e=>{let t=D;typeof t==`function`&&t(e)};return m.addEventListener(`click`,g),d(()=>m.removeEventListener(`click`,g)),o(m,s(`This should be green, and should toggle between green and blue on click.`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>h(t=>{let n=s(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=u();return[t.firstChild,t.lastChild]})}});let F=s(``),I=s(``);return r.insertBefore(F,r.firstChild),r.appendChild(I),[r.firstChild,r.lastChild]});return n==null?m():r(n,f,m)}})))};export{x as default};