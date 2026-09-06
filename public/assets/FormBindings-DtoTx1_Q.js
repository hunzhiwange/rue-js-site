import{At as e,C as t,Dn as n,Dt as r,E as i,Mt as a,Ot as o,Q as s,Qt as c,St as l,Vt as u,_n as ee,_t as te,at as ne,b as re,bt as d,ct as f,dt as p,et as m,gn as h,kn as g,mn as ie,nt as _,pn as v,qt as y,st as b,tn as x,ut as S,vn as C,vt as w,w as ae,wn as T,xn as oe,xt as E,yt as D}from"./rue-runtime-HIMg8Lz8.js";import{t as O}from"./Code-DpH7u0gk.js";import{r as k}from"./SidebarPlaygroundExample-BCPRe0hA.js";var A=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">表单绑定（移植自 Vue）</h1>`),se=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),j=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),M=()=>{let C=x(`Edit me`),M=x(!0),N=x([`Jack`]),P=x(`One`),ce=x(`A`),le=x([`A`]),ue=(e,t)=>{N.value=t?Array.from(new Set([...N.value,e])):N.value.filter(t=>t!==e)},de=e=>{let t=Array.from(e.target.selectedOptions);le.value=t.map(e=>e.value)},F=x(`preview`);return y(()=>f((()=>{let f=e(()=>{let a=te(),f=j().content.cloneNode(!0),m=f.firstChild,y=m.childNodes[0],x=y.parentNode,k=m.childNodes[1],A=k.parentNode;return a.appendChild(f),_(x,y,()=>{let e=F.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>u(Object.assign(e=>{let t=h(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`;let n=h(`div`,t);return v(t,n),n.className=`card-body p-0`,b(n,O,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const FormBindings: FC = () => {
  const text = ref('Edit me');
  const checked = ref(true);
  const checkedNames = ref<string[]>(['Jack']);
  const picked = ref<'One' | 'Two'>('One');
  const selected = ref<'A' | 'B' | 'C'>('A');
  const multiSelected = ref<string[]>(['A']);

  const toggleCheckedName = (name: string, nextChecked: boolean) => {
    checkedNames.value = nextChecked
      ? Array.from(new Set([...checkedNames.value, name]))
      : checkedNames.value.filter(n => n !== name);
  };

  const onMultiSelectChange = (e: any) => {
    const opts = Array.from((e.target as HTMLSelectElement).selectedOptions);
    multiSelected.value = opts.map(o => o.value);
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Text Input</h2>
          <input
            className="input input-bordered w-full"
            value={text.value}
            onInput={(e: any) => {
              text.value = (e.target as HTMLInputElement).value
            }}
            placeholder="Edit me"
          />
          <p className="mt-2 text-gray-700">{text.value}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Checkbox</h2>
          <div className="flex items-center gap-2">
            <input
              id="checkbox"
              type="checkbox"
              className="checkbox"
              checked={checked.value}
              onChange={(e: any) => {
                checked.value = (e.target as HTMLInputElement).checked
              }}
            />
            <label htmlFor="checkbox" className="select-none">
              Checked: {String(checked.value)}
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Multi Checkbox</h2>
          <div className="flex items-center gap-4 flex-wrap">
            {['Jack', 'John', 'Mike'].map(name => (
              <label key={name} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  value={name}
                  checked={checkedNames.value.includes(name)}
                  onChange={(e: any) =>
                    toggleCheckedName(name, (e.target as HTMLInputElement).checked)
                  }
                />
                <span>{name}</span>
              </label>
            ))}
          </div>
          <p className="mt-2 text-gray-700">Checked names: {checkedNames.value.join(', ')}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Radio</h2>
          <div className="flex items-center gap-4 flex-wrap">
            <label htmlFor="one" className="inline-flex items-center gap-2">
              <input
                id="one"
                type="radio"
                className="radio"
                value="One"
                checked={picked.value === 'One'}
                onChange={() => {
                  picked.value = 'One'
                }}
              />
              <span>One</span>
            </label>
            <label htmlFor="two" className="inline-flex items-center gap-2">
              <input
                id="two"
                type="radio"
                className="radio"
                value="Two"
                checked={picked.value === 'Two'}
                onChange={() => {
                  picked.value = 'Two'
                }}
              />
              <span>Two</span>
            </label>
          </div>
          <p className="mt-2 text-gray-700">Picked: {picked.value}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Select</h2>
          <select
            className="select select-bordered"
            value={selected.value}
            onChange={(e: any) => {
              selected.value = (e.target as HTMLSelectElement).value as any
            }}
          >
            <option value="">Please select one</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <p className="mt-2 text-gray-700">Selected: {selected.value}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Multi Select</h2>
          <select
            className="select select-bordered w-[160px]"
            multiple
            value={multiSelected.value}
            onChange={onMultiSelectChange}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <p className="mt-2 text-gray-700">Selected: {multiSelected.value.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default FormBindings;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>u(Object.assign(t=>{let n=ee(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>u(Object.assign(e=>{let t=te();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),T(()=>{let a=F.value===`preview`?e(()=>{let e=te(),a=w(`div`,e);p(e,a),s(a,`card bg-base-100 shadow`);let f=w(`div`,a);p(a,f),s(f,`card-body grid gap-6`);let m=w(`div`,f);p(f,m);let g=w(`h2`,m);p(m,g),s(g,`text-lg font-semibold mb-2`),p(g,D(`Text Input`));let _=w(`input`,m);p(m,_),s(_,`input input-bordered w-full`),T(()=>{r(_,C.value)});let y=e=>{let t=e=>{C.value=e.target.value};typeof t==`function`&&t(e)};_.addEventListener(`input`,y),c(()=>_.removeEventListener(`input`,y)),E(_,`placeholder`,`Edit me`);let b=w(`p`,m);p(m,b),s(b,`mt-2 text-gray-700`);let x=d(b);p(b,x),T(()=>{o(x,C.value)});let S=w(`div`,f);p(f,S);let O=w(`h2`,S);p(S,O),s(O,`text-lg font-semibold mb-2`),p(O,D(`Checkbox`));let k=w(`div`,S);p(S,k),s(k,`flex items-center gap-2`);let A=w(`input`,k);p(k,A),E(A,`id`,`checkbox`),E(A,`type`,`checkbox`),s(A,`checkbox`),T(()=>{l(A,!!M.value)});let se=e=>{let t=e=>{M.value=e.target.checked};typeof t==`function`&&t(e)};A.addEventListener(`change`,se),c(()=>A.removeEventListener(`change`,se));let j=w(`label`,k);p(k,j),E(j,`htmlFor`,`checkbox`),s(j,`select-none`),p(j,D(`Checked: `));let F=d(j);p(j,F),T(()=>{o(F,String(M.value))});let I=w(`div`,f);p(f,I);let fe=w(`h2`,I);p(I,fe),s(fe,`text-lg font-semibold mb-2`),p(fe,D(`Multi Checkbox`));let L=w(`div`,I);p(I,L),s(L,`flex items-center gap-4 flex-wrap`);let pe=ie(`rue:list:end`);v(L,pe);let R=[];T(()=>{R=ae(L,pe,R,[`Jack`,`John`,`Mike`],(e,t)=>e,(e,a)=>{let o=ne(e);return t((e,t,a)=>i(e,a,()=>u(Object.assign(e=>{let t=h(`label`,e);t.className=`inline-flex items-center gap-2`;let i=h(`input`,t);v(t,i),i.setAttribute(`type`,`checkbox`),i.className=`checkbox`;let a;T(()=>{let e=o.get(),t=e==null?``:String(e);Object.is(a,t)||(a=t,r(i,t))});let s;T(()=>{let e=!!N.value.includes(o.get());Object.is(s,e)||(s=e,i.checked=e)});let c=e=>{let t=e=>ue(o.get(),e.target.checked);typeof t==`function`&&t(e)};i.addEventListener(`change`,c),n(()=>i.removeEventListener(`change`,c));let l=h(`span`,t);v(t,l);let u=ee(``);return v(l,u),oe(u,()=>o.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,a=n,o.set(t)})})}),n(()=>re(R));let z=w(`p`,I);p(I,z),s(z,`mt-2 text-gray-700`),p(z,D(`Checked names: `));let me=d(z);p(z,me),T(()=>{o(me,N.value.join(`, `))});let B=w(`div`,f);p(f,B);let V=w(`h2`,B);p(B,V),s(V,`text-lg font-semibold mb-2`),p(V,D(`Radio`));let H=w(`div`,B);p(B,H),s(H,`flex items-center gap-4 flex-wrap`);let U=w(`label`,H);p(H,U),E(U,`htmlFor`,`one`),s(U,`inline-flex items-center gap-2`);let W=w(`input`,U);p(U,W),E(W,`id`,`one`),E(W,`type`,`radio`),s(W,`radio`),E(W,`value`,`One`),T(()=>{l(W,P.value===`One`)});let he=e=>{let t=()=>{P.value=`One`};typeof t==`function`&&t(e)};W.addEventListener(`change`,he),c(()=>W.removeEventListener(`change`,he));let ge=w(`span`,U);p(U,ge),p(ge,D(`One`));let G=w(`label`,H);p(H,G),E(G,`htmlFor`,`two`),s(G,`inline-flex items-center gap-2`);let K=w(`input`,G);p(G,K),E(K,`id`,`two`),E(K,`type`,`radio`),s(K,`radio`),E(K,`value`,`Two`),T(()=>{l(K,P.value===`Two`)});let _e=e=>{let t=()=>{P.value=`Two`};typeof t==`function`&&t(e)};K.addEventListener(`change`,_e),c(()=>K.removeEventListener(`change`,_e));let ve=w(`span`,G);p(G,ve),p(ve,D(`Two`));let q=w(`p`,B);p(B,q),s(q,`mt-2 text-gray-700`),p(q,D(`Picked: `));let ye=d(q);p(q,ye),T(()=>{o(ye,P.value)});let J=w(`div`,f);p(f,J);let be=w(`h2`,J);p(J,be),s(be,`text-lg font-semibold mb-2`),p(be,D(`Select`));let Y=w(`select`,J);p(J,Y),s(Y,`select select-bordered`),T(()=>{r(Y,ce.value)});let xe=e=>{let t=e=>{ce.value=e.target.value};typeof t==`function`&&t(e)};Y.addEventListener(`change`,xe),c(()=>Y.removeEventListener(`change`,xe));let Se=w(`option`,Y);p(Y,Se),E(Se,`value`,``),p(Se,D(`Please select one`));let Ce=w(`option`,Y);p(Y,Ce),E(Ce,`value`,`A`),p(Ce,D(`A`));let we=w(`option`,Y);p(Y,we),E(we,`value`,`B`),p(we,D(`B`));let Te=w(`option`,Y);p(Y,Te),E(Te,`value`,`C`),p(Te,D(`C`));let X=w(`p`,J);p(J,X),s(X,`mt-2 text-gray-700`),p(X,D(`Selected: `));let Ee=d(X);p(X,Ee),T(()=>{o(Ee,ce.value)});let Z=w(`div`,f);p(f,Z);let De=w(`h2`,Z);p(Z,De),s(De,`text-lg font-semibold mb-2`),p(De,D(`Multi Select`));let Q=w(`select`,Z);p(Z,Q),s(Q,`select select-bordered w-[160px]`),E(Q,`multiple`,``),T(()=>{r(Q,le.value)});let Oe=e=>{let t=de;typeof t==`function`&&t(e)};Q.addEventListener(`change`,Oe),c(()=>Q.removeEventListener(`change`,Oe));let ke=w(`option`,Q);p(Q,ke),E(ke,`value`,`A`),p(ke,D(`A`));let Ae=w(`option`,Q);p(Q,Ae),E(Ae,`value`,`B`),p(Ae,D(`B`));let je=w(`option`,Q);p(Q,je),E(je,`value`,`C`),p(je,D(`C`));let $=w(`p`,Z);p(Z,$),s($,`mt-2 text-gray-700`),p($,D(`Selected: `));let Me=d($);return p($,Me),T(()=>{o(Me,le.value.join(`, `))}),e},!0):``;g(()=>S(a,A,k))}),a});return a(k,()=>({children:[u(e=>A().content.cloneNode(!0).firstChild),u(Object.assign(e=>{let t=se().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;T(()=>{let e=`tab ${F.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{F.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;T(()=>{let e=`tab ${F.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{F.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),f]}))})(),e=>m(()=>{})))};export{M as default};