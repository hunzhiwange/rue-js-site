import{Bt as e,Dt as t,Et as n,H as r,Mt as i,Qt as ee,Tt as a,Ut as o,Vt as s,Wt as c,Y as l,_n as u,f as te,fn as d,gn as f,h as ne,hn as p,in as m,mn as h,p as re,pn as ie,qt as ae,sn as g,st as _,u as v,vn as y,vt as oe,yn as b,yt as x,z as S}from"./rue-runtime-Cv6BZekS.js";import{t as se}from"./Code-BzFVdc3U.js";import{r as C}from"./SidebarPlaygroundExample-rFyhXfC_.js";var w=b(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">表单绑定（移植自 Vue）</h1>`),T=b(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),E=b(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),D=(b,D,O)=>{let k=_(`Edit me`),A=_(!0),j=_([`Jack`]),M=_(`One`),N=_(`A`),ce=_([`A`]),le=(e,t)=>{j.value=t?Array.from(new Set([...j.value,e])):j.value.filter(t=>t!==e)},ue=e=>{let t=Array.from(e.target.selectedOptions);ce.value=t.map(e=>e.value)},P=_(`preview`);return l(()=>(()=>{let l=c(l=>{let _=h(),v=E().content.cloneNode(!0),b=v.firstChild,S=b.childNodes[0],C=S.parentNode,w=b.childNodes[1],T=w.parentNode;_.appendChild(v),o(C,S,()=>{let e=P.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=p(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let n=p(`div`,t);return d(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,se,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>x(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>x(e=>{let t=h();return[t.firstChild,t.lastChild]})}}),e({parent:T,before:w},()=>P.value===`preview`?(e,r,o)=>s(e,o,()=>c(e=>{let r=h(),o=p(`div`,r);d(r,o),t(o,`card bg-base-100 shadow`);let l=p(`div`,o);d(o,l),t(l,`card-body grid gap-6`);let _=p(`div`,l);d(l,_);let v=p(`h2`,_);d(_,v),t(v,`text-lg font-semibold mb-2`),d(v,f(`Text Input`));let b=p(`input`,_);d(_,b),t(b,`input input-bordered w-full`),m(()=>{i(b,k.value)});let x=e=>{let t=e=>{k.value=e.target.value};typeof t==`function`&&t(e)};b.addEventListener(`input`,x),g(()=>b.removeEventListener(`input`,x)),a(b,`placeholder`,`Edit me`);let S=p(`p`,_);d(_,S),t(S,`mt-2 text-gray-700`);let se=u(S);d(S,se),m(()=>{y(se,k.value)});let C=p(`div`,l);d(l,C);let w=p(`h2`,C);d(C,w),t(w,`text-lg font-semibold mb-2`),d(w,f(`Checkbox`));let T=p(`div`,C);d(C,T),t(T,`flex items-center gap-2`);let E=p(`input`,T);d(T,E),a(E,`id`,`checkbox`),a(E,`type`,`checkbox`),t(E,`checkbox`),m(()=>{n(E,!!A.value)});let D=e=>{let t=e=>{A.value=e.target.checked};typeof t==`function`&&t(e)};E.addEventListener(`change`,D),g(()=>E.removeEventListener(`change`,D));let O=p(`label`,T);d(T,O),a(O,`htmlFor`,`checkbox`),t(O,`select-none`),d(O,f(`Checked: `));let P=u(O);d(O,P),m(()=>{y(P,String(A.value))});let F=p(`div`,l);d(l,F);let de=p(`h2`,F);d(F,de),t(de,`text-lg font-semibold mb-2`),d(de,f(`Multi Checkbox`));let I=p(`div`,F);d(F,I),t(I,`flex items-center gap-4 flex-wrap`);let fe=ie(`rue:list:end`);d(I,fe);let L=[];ae(()=>{L=ne(I,fe,L,[`Jack`,`John`,`Mike`],(e,t)=>e,(e,t)=>{let n=oe(e);return re((e,t,r)=>{let i=()=>c(e=>{let t=p(`label`,e);t.setAttribute(`class`,`inline-flex items-center gap-2`);let r=p(`input`,t);d(t,r),r.setAttribute(`type`,`checkbox`),r.setAttribute(`class`,`checkbox`);let i;m(()=>{let e=n.get(),t=e==null?``:String(e);Object.is(i,t)||(i=t,r.value=t)});let a;m(()=>{let e=!!j.value.includes(n.get());Object.is(a,e)||(a=e,r.checked=e)});let o=e=>{let t=e=>le(n.get(),e.target.checked);typeof t==`function`&&t(e)};r.addEventListener(`change`,o),g(()=>r.removeEventListener(`change`,o));let s=p(`span`,t);d(t,s);let c=f(``);return d(s,c),ee(c,()=>n.get()),[t,t]});return e==null?i():s(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),g(()=>te(L));let R=p(`p`,F);d(F,R),t(R,`mt-2 text-gray-700`),d(R,f(`Checked names: `));let pe=u(R);d(R,pe),m(()=>{y(pe,j.value.join(`, `))});let z=p(`div`,l);d(l,z);let B=p(`h2`,z);d(z,B),t(B,`text-lg font-semibold mb-2`),d(B,f(`Radio`));let V=p(`div`,z);d(z,V),t(V,`flex items-center gap-4 flex-wrap`);let H=p(`label`,V);d(V,H),a(H,`htmlFor`,`one`),t(H,`inline-flex items-center gap-2`);let U=p(`input`,H);d(H,U),a(U,`id`,`one`),a(U,`type`,`radio`),t(U,`radio`),a(U,`value`,`One`),m(()=>{n(U,M.value===`One`)});let me=e=>{let t=()=>{M.value=`One`};typeof t==`function`&&t(e)};U.addEventListener(`change`,me),g(()=>U.removeEventListener(`change`,me));let he=p(`span`,H);d(H,he),d(he,f(`One`));let W=p(`label`,V);d(V,W),a(W,`htmlFor`,`two`),t(W,`inline-flex items-center gap-2`);let G=p(`input`,W);d(W,G),a(G,`id`,`two`),a(G,`type`,`radio`),t(G,`radio`),a(G,`value`,`Two`),m(()=>{n(G,M.value===`Two`)});let ge=e=>{let t=()=>{M.value=`Two`};typeof t==`function`&&t(e)};G.addEventListener(`change`,ge),g(()=>G.removeEventListener(`change`,ge));let _e=p(`span`,W);d(W,_e),d(_e,f(`Two`));let K=p(`p`,z);d(z,K),t(K,`mt-2 text-gray-700`),d(K,f(`Picked: `));let ve=u(K);d(K,ve),m(()=>{y(ve,M.value)});let q=p(`div`,l);d(l,q);let ye=p(`h2`,q);d(q,ye),t(ye,`text-lg font-semibold mb-2`),d(ye,f(`Select`));let J=p(`select`,q);d(q,J),t(J,`select select-bordered`),m(()=>{i(J,N.value)});let be=e=>{let t=e=>{N.value=e.target.value};typeof t==`function`&&t(e)};J.addEventListener(`change`,be),g(()=>J.removeEventListener(`change`,be));let xe=p(`option`,J);d(J,xe),a(xe,`value`,``),d(xe,f(`Please select one`));let Se=p(`option`,J);d(J,Se),a(Se,`value`,`A`),d(Se,f(`A`));let Ce=p(`option`,J);d(J,Ce),a(Ce,`value`,`B`),d(Ce,f(`B`));let we=p(`option`,J);d(J,we),a(we,`value`,`C`),d(we,f(`C`));let Y=p(`p`,q);d(q,Y),t(Y,`mt-2 text-gray-700`),d(Y,f(`Selected: `));let Te=u(Y);d(Y,Te),m(()=>{y(Te,N.value)});let X=p(`div`,l);d(l,X);let Z=p(`h2`,X);d(X,Z),t(Z,`text-lg font-semibold mb-2`),d(Z,f(`Multi Select`));let Q=p(`select`,X);d(X,Q),t(Q,`select select-bordered w-[160px]`),a(Q,`multiple`,``),m(()=>{i(Q,ce.value)});let Ee=e=>{let t=ue;typeof t==`function`&&t(e)};Q.addEventListener(`change`,Ee),g(()=>Q.removeEventListener(`change`,Ee));let De=p(`option`,Q);d(Q,De),a(De,`value`,`A`),d(De,f(`A`));let Oe=p(`option`,Q);d(Q,Oe),a(Oe,`value`,`B`),d(Oe,f(`B`));let ke=p(`option`,Q);d(Q,ke),a(ke,`value`,`C`),d(ke,f(`C`));let $=p(`p`,X);d(X,$),t($,`mt-2 text-gray-700`),d($,f(`Selected: `));let Ae=u($);d($,Ae),m(()=>{y(Ae,ce.value.join(`, `))});let je=f(``),Me=f(``);return r.insertBefore(je,r.firstChild),r.appendChild(Me),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>x(e=>{let t=f(``);return[t,t]});return e==null?r():s(e,n,r)},()=>({}));let D=f(``),O=f(``);return _.insertBefore(D,_.firstChild),_.appendChild(O),[_.firstChild,_.lastChild]});return S(C,()=>({children:[x(e=>{let t=w().content.cloneNode(!0).firstChild;return[t,t]}),c(e=>{let t=T().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;m(()=>{let e=`tab ${P.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),g(v(e,n,`click`,()=>()=>{P.value=`preview`})),r.setAttribute(`role`,`tab`);let ee;return m(()=>{let e=`tab ${P.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(ee,t)||(ee=t,r.setAttribute(`class`,t))}),g(v(e,r,`click`,()=>()=>{P.value=`code`})),[t,t]}),l]}))})())};export{D as default};