import{Bt as e,C as t,Dn as n,Et as r,K as i,L as a,Lt as o,Mt as s,S as c,V as l,W as ee,X as u,Y as d,_n as f,_t as p,at as m,bn as te,fn as h,ft as g,gn as ne,hn as _,ht as v,it as y,kn as b,nt as re,ot as x,pn as ie,pt as S,q as C,rt as w,st as ae,wn as T,x as oe,z as E}from"./rue-runtime-CwEGJ854.js";import{t as D}from"./Code-B3jCYMAr.js";import{r as O}from"./SidebarPlaygroundExample-EGR0CyDT.js";var k=f(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">表单绑定（移植自 Vue）</h1>`),A=f(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),j=f(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),M=()=>{let f=e(`Edit me`),M=e(!0),N=e([`Jack`]),P=e(`One`),F=e(`A`),I=e([`A`]),se=(e,t)=>{N.value=t?Array.from(new Set([...N.value,e])):N.value.filter(t=>t!==e)},ce=e=>{let t=Array.from(e.target.selectedOptions);I.value=t.map(e=>e.value)},L=e(`preview`);return s(()=>C((()=>{let e=v(()=>{let e=re(),s=j().content.cloneNode(!0),p=s.firstChild,C=p.childNodes[0],E=C.parentNode,O=p.childNodes[1],k=O.parentNode;return e.appendChild(s),l(E,C,()=>{let e=L.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=_(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`;let n=_(`div`,t);return h(t,n),n.className=`card-body p-0`,i(n,D,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=ne(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=re();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),T(()=>{let e=L.value===`preview`?v(()=>{let e=re(),i=w(`div`,e);u(e,i),a(i,`card bg-base-100 shadow`);let s=w(`div`,i);u(i,s),a(s,`card-body grid gap-6`);let l=w(`div`,s);u(s,l);let d=w(`h2`,l);u(l,d),a(d,`text-lg font-semibold mb-2`),u(d,y(`Text Input`));let p=w(`input`,l);u(l,p),a(p,`input input-bordered w-full`),T(()=>{g(p,f.value)});let v=e=>{let t=e=>{f.value=e.target.value};typeof t==`function`&&t(e)};p.addEventListener(`input`,v),o(()=>p.removeEventListener(`input`,v)),x(p,`placeholder`,`Edit me`);let b=w(`p`,l);u(l,b),a(b,`mt-2 text-gray-700`);let C=m(b);u(b,C),T(()=>{S(C,f.value)});let E=w(`div`,s);u(s,E);let D=w(`h2`,E);u(E,D),a(D,`text-lg font-semibold mb-2`),u(D,y(`Checkbox`));let O=w(`div`,E);u(E,O),a(O,`flex items-center gap-2`);let k=w(`input`,O);u(O,k),x(k,`id`,`checkbox`),x(k,`type`,`checkbox`),a(k,`checkbox`),T(()=>{ae(k,!!M.value)});let A=e=>{let t=e=>{M.value=e.target.checked};typeof t==`function`&&t(e)};k.addEventListener(`change`,A),o(()=>k.removeEventListener(`change`,A));let j=w(`label`,O);u(O,j),x(j,`htmlFor`,`checkbox`),a(j,`select-none`),u(j,y(`Checked: `));let L=m(j);u(j,L),T(()=>{S(L,String(M.value))});let R=w(`div`,s);u(s,R);let le=w(`h2`,R);u(R,le),a(le,`text-lg font-semibold mb-2`),u(le,y(`Multi Checkbox`));let z=w(`div`,R);u(R,z),a(z,`flex items-center gap-4 flex-wrap`);let ue=ie(`rue:list:end`);h(z,ue);let de=[];T(()=>{de=t(z,ue,de,[`Jack`,`John`,`Mike`],(e,t)=>e,(e,t)=>{let i=ee(e),a=ee(t);return c((e,t,a)=>oe(e,a,()=>r(Object.assign(e=>{let t=_(`label`,e);t.className=`inline-flex items-center gap-2`;let r=_(`input`,t);h(t,r),r.setAttribute(`type`,`checkbox`),r.className=`checkbox`;let a;T(()=>{let e=i.get(),t=e==null?``:String(e);Object.is(a,t)||(a=t,g(r,t))});let o;T(()=>{let e=!!N.value.includes(i.get());Object.is(o,e)||(o=e,r.checked=e)});let s=e=>{let t=e=>se(i.get(),e.target.checked);typeof t==`function`&&t(e)};r.addEventListener(`change`,s),n(()=>r.removeEventListener(`change`,s));let c=_(`span`,t);h(t,c);let l=ne(``);return h(c,l),te(l,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r)=>{e=n,t=r,i.set(n),a.set(r)})})});let B=w(`p`,R);u(R,B),a(B,`mt-2 text-gray-700`),u(B,y(`Checked names: `));let fe=m(B);u(B,fe),T(()=>{S(fe,N.value.join(`, `))});let V=w(`div`,s);u(s,V);let pe=w(`h2`,V);u(V,pe),a(pe,`text-lg font-semibold mb-2`),u(pe,y(`Radio`));let H=w(`div`,V);u(V,H),a(H,`flex items-center gap-4 flex-wrap`);let U=w(`label`,H);u(H,U),x(U,`htmlFor`,`one`),a(U,`inline-flex items-center gap-2`);let W=w(`input`,U);u(U,W),x(W,`id`,`one`),x(W,`type`,`radio`),a(W,`radio`),x(W,`value`,`One`),T(()=>{ae(W,P.value===`One`)});let me=e=>{let t=()=>{P.value=`One`};typeof t==`function`&&t(e)};W.addEventListener(`change`,me),o(()=>W.removeEventListener(`change`,me));let he=w(`span`,U);u(U,he),u(he,y(`One`));let G=w(`label`,H);u(H,G),x(G,`htmlFor`,`two`),a(G,`inline-flex items-center gap-2`);let K=w(`input`,G);u(G,K),x(K,`id`,`two`),x(K,`type`,`radio`),a(K,`radio`),x(K,`value`,`Two`),T(()=>{ae(K,P.value===`Two`)});let ge=e=>{let t=()=>{P.value=`Two`};typeof t==`function`&&t(e)};K.addEventListener(`change`,ge),o(()=>K.removeEventListener(`change`,ge));let _e=w(`span`,G);u(G,_e),u(_e,y(`Two`));let q=w(`p`,V);u(V,q),a(q,`mt-2 text-gray-700`),u(q,y(`Picked: `));let ve=m(q);u(q,ve),T(()=>{S(ve,P.value)});let J=w(`div`,s);u(s,J);let ye=w(`h2`,J);u(J,ye),a(ye,`text-lg font-semibold mb-2`),u(ye,y(`Select`));let Y=w(`select`,J);u(J,Y),a(Y,`select select-bordered`),T(()=>{g(Y,F.value)});let be=e=>{let t=e=>{F.value=e.target.value};typeof t==`function`&&t(e)};Y.addEventListener(`change`,be),o(()=>Y.removeEventListener(`change`,be));let xe=w(`option`,Y);u(Y,xe),x(xe,`value`,``),u(xe,y(`Please select one`));let Se=w(`option`,Y);u(Y,Se),x(Se,`value`,`A`),u(Se,y(`A`));let Ce=w(`option`,Y);u(Y,Ce),x(Ce,`value`,`B`),u(Ce,y(`B`));let we=w(`option`,Y);u(Y,we),x(we,`value`,`C`),u(we,y(`C`));let X=w(`p`,J);u(J,X),a(X,`mt-2 text-gray-700`),u(X,y(`Selected: `));let Te=m(X);u(X,Te),T(()=>{S(Te,F.value)});let Z=w(`div`,s);u(s,Z);let Ee=w(`h2`,Z);u(Z,Ee),a(Ee,`text-lg font-semibold mb-2`),u(Ee,y(`Multi Select`));let Q=w(`select`,Z);u(Z,Q),a(Q,`select select-bordered w-[160px]`),x(Q,`multiple`,``),T(()=>{g(Q,I.value)});let De=e=>{let t=ce;typeof t==`function`&&t(e)};Q.addEventListener(`change`,De),o(()=>Q.removeEventListener(`change`,De));let Oe=w(`option`,Q);u(Q,Oe),x(Oe,`value`,`A`),u(Oe,y(`A`));let ke=w(`option`,Q);u(Q,ke),x(ke,`value`,`B`),u(ke,y(`B`));let Ae=w(`option`,Q);u(Q,Ae),x(Ae,`value`,`C`),u(Ae,y(`C`));let $=w(`p`,Z);u(Z,$),a($,`mt-2 text-gray-700`),u($,y(`Selected: `));let je=m($);return u($,je),T(()=>{S(je,I.value.join(`, `))}),e},!0):``;b(()=>d(e,k,O))}),e});return p(O,()=>({children:[r(e=>k().content.cloneNode(!0).firstChild),r(Object.assign(e=>{let t=A().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;T(()=>{let e=`tab ${L.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{L.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;T(()=>{let e=`tab ${L.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{L.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e]}))})(),e=>E(()=>{})))};export{M as default};