import{Bt as e,Dt as t,Et as n,F as r,M as i,Mt as a,Qt as ee,Tt as o,Ut as s,V as c,Vt as l,W as te,Wt as u,_n as d,f as ne,fn as f,gn as p,h as re,hn as m,in as h,mn as ie,mt as g,nt as _,p as ae,pn as oe,qt as se,sn as v,u as y,vn as b,yn as x}from"./rue-runtime-BWbIfNT8.js";import{t as S}from"./Code-C5ZhIIr9.js";import{r as C}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var w=x(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">表单绑定（移植自 Vue）</h1>`),T=x(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),E=x(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),D=(x,D,O)=>{let k=g(`Edit me`),A=g(!0),j=g([`Jack`]),M=g(`One`),ce=g(`A`),le=g([`A`]),ue=(e,t)=>{j.value=t?Array.from(new Set([...j.value,e])):j.value.filter(t=>t!==e)},de=e=>{let t=Array.from(e.target.selectedOptions);le.value=t.map(e=>e.value)},N=g(`preview`);return _(()=>(()=>{let g=u(i=>{let g=ie(),_=E().content.cloneNode(!0),y=_.firstChild,x=y.childNodes[0],C=x.parentNode,w=y.childNodes[1],T=w.parentNode;g.appendChild(_),s(C,x,()=>{let e=N.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let t=m(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let n=m(`div`,t);return f(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,S,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>c(e=>{let t=ie();return[t.firstChild,t.lastChild]})}}),e({parent:T,before:w},()=>N.value===`preview`?(e,r,i)=>l(e,i,()=>u(e=>{let r=ie(),i=m(`div`,r);f(r,i),t(i,`card bg-base-100 shadow`);let s=m(`div`,i);f(i,s),t(s,`card-body grid gap-6`);let c=m(`div`,s);f(s,c);let g=m(`h2`,c);f(c,g),t(g,`text-lg font-semibold mb-2`),f(g,p(`Text Input`));let _=m(`input`,c);f(c,_),t(_,`input input-bordered w-full`),h(()=>{a(_,k.value)});let y=e=>{let t=e=>{k.value=e.target.value};typeof t==`function`&&t(e)};_.addEventListener(`input`,y),v(()=>_.removeEventListener(`input`,y)),o(_,`placeholder`,`Edit me`);let x=m(`p`,c);f(c,x),t(x,`mt-2 text-gray-700`);let S=d(x);f(x,S),h(()=>{b(S,k.value)});let C=m(`div`,s);f(s,C);let w=m(`h2`,C);f(C,w),t(w,`text-lg font-semibold mb-2`),f(w,p(`Checkbox`));let T=m(`div`,C);f(C,T),t(T,`flex items-center gap-2`);let E=m(`input`,T);f(T,E),o(E,`id`,`checkbox`),o(E,`type`,`checkbox`),t(E,`checkbox`),h(()=>{n(E,!!A.value)});let D=e=>{let t=e=>{A.value=e.target.checked};typeof t==`function`&&t(e)};E.addEventListener(`change`,D),v(()=>E.removeEventListener(`change`,D));let O=m(`label`,T);f(T,O),o(O,`htmlFor`,`checkbox`),t(O,`select-none`),f(O,p(`Checked: `));let N=d(O);f(O,N),h(()=>{b(N,String(A.value))});let P=m(`div`,s);f(s,P);let F=m(`h2`,P);f(P,F),t(F,`text-lg font-semibold mb-2`),f(F,p(`Multi Checkbox`));let I=m(`div`,P);f(P,I),t(I,`flex items-center gap-4 flex-wrap`);let fe=oe(`rue:list:end`);f(I,fe);let L=[];se(()=>{L=re(I,fe,L,[`Jack`,`John`,`Mike`],(e,t)=>e,(e,t)=>{let n=te(e);return ae((e,t,r)=>{let i=()=>u(e=>{let t=m(`label`,e);t.setAttribute(`class`,`inline-flex items-center gap-2`);let r=m(`input`,t);f(t,r),r.setAttribute(`type`,`checkbox`),r.setAttribute(`class`,`checkbox`);let i;h(()=>{let e=n.get(),t=e==null?``:String(e);Object.is(i,t)||(i=t,r.value=t)});let a;h(()=>{let e=!!j.value.includes(n.get());Object.is(a,e)||(a=e,r.checked=e)});let o=e=>{let t=e=>ue(n.get(),e.target.checked);typeof t==`function`&&t(e)};r.addEventListener(`change`,o),v(()=>r.removeEventListener(`change`,o));let s=m(`span`,t);f(t,s);let c=p(``);return f(s,c),ee(c,()=>n.get()),[t,t]});return e==null?i():l(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),v(()=>ne(L));let R=m(`p`,P);f(P,R),t(R,`mt-2 text-gray-700`),f(R,p(`Checked names: `));let pe=d(R);f(R,pe),h(()=>{b(pe,j.value.join(`, `))});let z=m(`div`,s);f(s,z);let B=m(`h2`,z);f(z,B),t(B,`text-lg font-semibold mb-2`),f(B,p(`Radio`));let V=m(`div`,z);f(z,V),t(V,`flex items-center gap-4 flex-wrap`);let H=m(`label`,V);f(V,H),o(H,`htmlFor`,`one`),t(H,`inline-flex items-center gap-2`);let U=m(`input`,H);f(H,U),o(U,`id`,`one`),o(U,`type`,`radio`),t(U,`radio`),o(U,`value`,`One`),h(()=>{n(U,M.value===`One`)});let me=e=>{let t=()=>{M.value=`One`};typeof t==`function`&&t(e)};U.addEventListener(`change`,me),v(()=>U.removeEventListener(`change`,me));let he=m(`span`,H);f(H,he),f(he,p(`One`));let W=m(`label`,V);f(V,W),o(W,`htmlFor`,`two`),t(W,`inline-flex items-center gap-2`);let G=m(`input`,W);f(W,G),o(G,`id`,`two`),o(G,`type`,`radio`),t(G,`radio`),o(G,`value`,`Two`),h(()=>{n(G,M.value===`Two`)});let ge=e=>{let t=()=>{M.value=`Two`};typeof t==`function`&&t(e)};G.addEventListener(`change`,ge),v(()=>G.removeEventListener(`change`,ge));let _e=m(`span`,W);f(W,_e),f(_e,p(`Two`));let K=m(`p`,z);f(z,K),t(K,`mt-2 text-gray-700`),f(K,p(`Picked: `));let ve=d(K);f(K,ve),h(()=>{b(ve,M.value)});let q=m(`div`,s);f(s,q);let ye=m(`h2`,q);f(q,ye),t(ye,`text-lg font-semibold mb-2`),f(ye,p(`Select`));let J=m(`select`,q);f(q,J),t(J,`select select-bordered`),h(()=>{a(J,ce.value)});let be=e=>{let t=e=>{ce.value=e.target.value};typeof t==`function`&&t(e)};J.addEventListener(`change`,be),v(()=>J.removeEventListener(`change`,be));let xe=m(`option`,J);f(J,xe),o(xe,`value`,``),f(xe,p(`Please select one`));let Se=m(`option`,J);f(J,Se),o(Se,`value`,`A`),f(Se,p(`A`));let Ce=m(`option`,J);f(J,Ce),o(Ce,`value`,`B`),f(Ce,p(`B`));let we=m(`option`,J);f(J,we),o(we,`value`,`C`),f(we,p(`C`));let Y=m(`p`,q);f(q,Y),t(Y,`mt-2 text-gray-700`),f(Y,p(`Selected: `));let Te=d(Y);f(Y,Te),h(()=>{b(Te,ce.value)});let X=m(`div`,s);f(s,X);let Z=m(`h2`,X);f(X,Z),t(Z,`text-lg font-semibold mb-2`),f(Z,p(`Multi Select`));let Q=m(`select`,X);f(X,Q),t(Q,`select select-bordered w-[160px]`),o(Q,`multiple`,``),h(()=>{a(Q,le.value)});let Ee=e=>{let t=de;typeof t==`function`&&t(e)};Q.addEventListener(`change`,Ee),v(()=>Q.removeEventListener(`change`,Ee));let De=m(`option`,Q);f(Q,De),o(De,`value`,`A`),f(De,p(`A`));let Oe=m(`option`,Q);f(Q,Oe),o(Oe,`value`,`B`),f(Oe,p(`B`));let ke=m(`option`,Q);f(Q,ke),o(ke,`value`,`C`),f(ke,p(`C`));let $=m(`p`,X);f(X,$),t($,`mt-2 text-gray-700`),f($,p(`Selected: `));let Ae=d($);f($,Ae),h(()=>{b(Ae,le.value.join(`, `))});let je=p(``),Me=p(``);return r.insertBefore(je,r.firstChild),r.appendChild(Me),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>c(e=>{let t=p(``);return[t,t]});return e==null?r():l(e,n,r)},()=>({}));let D=p(``),O=p(``);return g.insertBefore(D,g.firstChild),g.appendChild(O),[g.firstChild,g.lastChild]});return i(C,()=>({children:[c(e=>{let t=w().content.cloneNode(!0).firstChild;return[t,t]}),u(e=>{let t=T().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;h(()=>{let e=`tab ${N.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),v(y(e,n,`click`,()=>()=>{N.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return h(()=>{let e=`tab ${N.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),v(y(e,r,`click`,()=>()=>{N.value=`code`})),[t,t]}),g]}))})())};export{D as default};