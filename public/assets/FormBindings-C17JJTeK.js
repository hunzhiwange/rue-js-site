import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,jt as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m,wt as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as ee}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./Code-DhoWkRkB.js";import{r as x}from"./SidebarPlaygroundExample-B78jsvoF.js";var S=()=>{let{text:S,checked:te,checkedNames:ne,picked:C,selected:w,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>e(()=>{let e=y(`ref:1:0`,()=>u(`Edit me`)),t=y(`ref:1:1`,()=>u(!0)),n=y(`ref:1:2`,()=>u([`Jack`])),r=y(`ref:1:3`,()=>u(`One`)),i=y(`ref:1:4`,()=>u(`A`)),a=y(`ref:1:5`,()=>u([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:i,multiSelected:a,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{let t=Array.from(e.target.selectedOptions);a.value=t.map(e=>e.value)},activeTab:y(`ref:1:6`,()=>u(`preview`))}}));return g(e=>{let u=a(),y=i(`rue:component:anchor`);return f(u,y),_(v(x,{children:g(()=>{let e=a(),u=d(`h1`,e);f(e,u),r(u,`text-5xl font-semibold mb-4 md:mb-4`),f(u,c(`表单绑定（移植自 Vue）`));let y=d(`div`,e);f(e,y),t(y,`role`,`tablist`),r(y,`tabs tabs-box`);let x=d(`button`,y);f(y,x),t(x,`role`,`tab`),p(()=>{r(x,`tab ${T.value===`preview`?`tab-active`:``}`)}),l(x,`click`,()=>{T.value=`preview`}),f(x,c(`效果`));let E=d(`button`,y);f(y,E),t(E,`role`,`tab`),p(()=>{r(E,`tab ${T.value===`code`?`tab-active`:``}`)}),l(E,`click`,()=>{T.value=`code`}),f(E,c(`代码`));let D=d(`div`,e);f(e,D),r(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=i(`rue:slot:anchor`);f(D,O),p(()=>{let e=T.value===`code`?g(()=>{let e=a(),t=d(`div`,e);f(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let n=d(`div`,t);f(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return f(n,o),p(()=>{let e=v(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});m(()=>_(e,n,o))}),e}):``;m(()=>_(e,D,O))}),f(D,c(` `));let k=i(`rue:slot:anchor`);return f(D,k),p(()=>{let e=T.value===`preview`?g(()=>{let e=a(),u=d(`div`,e);f(e,u),r(u,`card bg-base-100 shadow`);let m=d(`div`,u);f(u,m),r(m,`card-body grid gap-6`);let v=d(`div`,m);f(m,v);let y=d(`h2`,v);f(v,y),r(y,`text-lg font-semibold mb-2`),f(y,c(`Text Input`));let b=d(`input`,v);f(v,b),r(b,`input input-bordered w-full`),p(()=>{s(b,S.value)}),l(b,`input`,e=>{S.value=e.target.value}),t(b,`placeholder`,`Edit me`);let x=d(`p`,v);f(v,x),r(x,`mt-2 text-gray-700`);let T=o(x);f(x,T),p(()=>{n(T,S.value)});let E=d(`div`,m);f(m,E);let D=d(`h2`,E);f(E,D),r(D,`text-lg font-semibold mb-2`),f(D,c(`Checkbox`));let O=d(`div`,E);f(E,O),r(O,`flex items-center gap-2`);let k=d(`input`,O);f(O,k),t(k,`id`,`checkbox`),t(k,`type`,`checkbox`),r(k,`checkbox`),p(()=>{h(k,!!te.value)}),l(k,`change`,e=>{te.value=e.target.checked});let A=d(`label`,O);f(O,A),t(A,`htmlFor`,`checkbox`),r(A,`select-none`),f(A,c(`Checked: `));let oe=o(A);f(A,oe),p(()=>{n(oe,String(te.value))});let j=d(`div`,m);f(m,j);let M=d(`h2`,j);f(j,M),r(M,`text-lg font-semibold mb-2`),f(M,c(`Multi Checkbox`));let N=d(`div`,j);f(j,N),r(N,`flex items-center gap-4 flex-wrap`);let se=i(`rue:list:start`),ce=i(`rue:list:end`);f(N,se),f(N,ce);let le=new Map;p(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(e,i,c,u,m)=>{_(g(()=>{let i=a(),c=d(`label`,i);f(i,c),p(()=>{t(c,`key`,String(e))}),r(c,`inline-flex items-center gap-2`);let u=d(`input`,c);f(c,u),t(u,`type`,`checkbox`),r(u,`checkbox`),p(()=>{s(u,e)}),p(()=>{h(u,!!ne.value.includes(e))}),l(u,`change`,t=>ie(e,t.target.checked));let m=d(`span`,c);f(c,m);let g=o(m);return f(m,g),p(()=>{n(g,e)}),i}),i,c)}})});let P=d(`p`,j);f(j,P),r(P,`mt-2 text-gray-700`),f(P,c(`Checked names: `));let ue=o(P);f(P,ue),p(()=>{n(ue,ne.value.join(`, `))});let F=d(`div`,m);f(m,F);let I=d(`h2`,F);f(F,I),r(I,`text-lg font-semibold mb-2`),f(I,c(`Radio`));let L=d(`div`,F);f(F,L),r(L,`flex items-center gap-4 flex-wrap`);let R=d(`label`,L);f(L,R),t(R,`htmlFor`,`one`),r(R,`inline-flex items-center gap-2`);let z=d(`input`,R);f(R,z),t(z,`id`,`one`),t(z,`type`,`radio`),r(z,`radio`),t(z,`value`,`One`),p(()=>{h(z,C.value===`One`)}),l(z,`change`,()=>{C.value=`One`});let de=d(`span`,R);f(R,de),f(de,c(`One`));let B=d(`label`,L);f(L,B),t(B,`htmlFor`,`two`),r(B,`inline-flex items-center gap-2`);let V=d(`input`,B);f(B,V),t(V,`id`,`two`),t(V,`type`,`radio`),r(V,`radio`),t(V,`value`,`Two`),p(()=>{h(V,C.value===`Two`)}),l(V,`change`,()=>{C.value=`Two`});let fe=d(`span`,B);f(B,fe),f(fe,c(`Two`));let H=d(`p`,F);f(F,H),r(H,`mt-2 text-gray-700`),f(H,c(`Picked: `));let pe=o(H);f(H,pe),p(()=>{n(pe,C.value)});let U=d(`div`,m);f(m,U);let W=d(`h2`,U);f(U,W),r(W,`text-lg font-semibold mb-2`),f(W,c(`Select`));let G=d(`select`,U);f(U,G),r(G,`select select-bordered`),p(()=>{s(G,w.value)}),l(G,`change`,e=>{w.value=e.target.value});let K=d(`option`,G);f(G,K),t(K,`value`,``),f(K,c(`Please select one`));let q=d(`option`,G);f(G,q),t(q,`value`,`A`),f(q,c(`A`));let J=d(`option`,G);f(G,J),t(J,`value`,`B`),f(J,c(`B`));let Y=d(`option`,G);f(G,Y),t(Y,`value`,`C`),f(Y,c(`C`));let X=d(`p`,U);f(U,X),r(X,`mt-2 text-gray-700`),f(X,c(`Selected: `));let me=o(X);f(X,me),p(()=>{n(me,w.value)});let Z=d(`div`,m);f(m,Z);let he=d(`h2`,Z);f(Z,he),r(he,`text-lg font-semibold mb-2`),f(he,c(`Multi Select`));let Q=d(`select`,Z);f(Z,Q),r(Q,`select select-bordered w-[160px]`),t(Q,`multiple`,``),p(()=>{s(Q,re.value)}),l(Q,`change`,ae);let ge=d(`option`,Q);f(Q,ge),t(ge,`value`,`A`),f(ge,c(`A`));let _e=d(`option`,Q);f(Q,_e),t(_e,`value`,`B`),f(_e,c(`B`));let ve=d(`option`,Q);f(Q,ve),t(ve,`value`,`C`),f(ve,c(`C`));let $=d(`p`,Z);f(Z,$),r($,`mt-2 text-gray-700`),f($,c(`Selected: `));let ye=o($);return f($,ye),p(()=>{n(ye,re.value.join(`, `))}),e}):``;m(()=>_(e,D,k))}),e})}),u,y),u})};export{S as default};