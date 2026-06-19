import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,ht as u,l as d,lt as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as ee}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as b}from"./Code-D5UqTwV6.js";import{r as x}from"./SidebarPlaygroundExample-D2vGHFCu.js";var S=()=>{let{text:S,checked:te,checkedNames:ne,picked:C,selected:w,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>a(()=>{let e=y(`ref:1:0`,()=>n(`Edit me`)),t=y(`ref:1:1`,()=>n(!0)),r=y(`ref:1:2`,()=>n([`Jack`])),i=y(`ref:1:3`,()=>n(`One`)),a=y(`ref:1:4`,()=>n(`A`)),o=y(`ref:1:5`,()=>n([`A`]));return{text:e,checked:t,checkedNames:r,picked:i,selected:a,multiSelected:o,toggleCheckedName:(e,t)=>{r.value=t?Array.from(new Set([...r.value,e])):r.value.filter(t=>t!==e)},onMultiSelectChange:e=>{o.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>n(`preview`))}}));return d(n=>{let a=c(),y=e(`rue:component:anchor`);return o(a,y),m(g(x,{children:d(()=>{let n=c(),a=_(`h1`,n);o(n,a),v(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,p(`表单绑定（移植自 Vue）`));let y=_(`div`,n);o(n,y),s(y,`role`,`tablist`),v(y,`tabs tabs-box`);let x=_(`button`,y);o(y,x),s(x,`role`,`tab`),t(()=>{v(x,`tab ${T.value===`preview`?`tab-active`:``}`)}),i(x,`click`,()=>{T.value=`preview`}),o(x,p(`效果`));let E=_(`button`,y);o(y,E),s(E,`role`,`tab`),t(()=>{v(E,`tab ${T.value===`code`?`tab-active`:``}`)}),i(E,`click`,()=>{T.value=`code`}),o(E,p(`代码`));let D=_(`div`,n);o(n,D),v(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=e(`rue:slot:anchor`);o(D,O),t(()=>{let n=T.value===`code`?d(()=>{let n=c(),i=_(`div`,n);o(n,i),v(i,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let a=_(`div`,i);o(i,a),v(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});r(()=>m(e,a,s))}),n}):``;r(()=>m(n,D,O))}),o(D,p(` `));let k=e(`rue:slot:anchor`);return o(D,k),t(()=>{let n=T.value===`preview`?d(()=>{let n=c(),r=_(`div`,n);o(n,r),v(r,`card bg-base-100 shadow`);let a=_(`div`,r);o(r,a),v(a,`card-body grid gap-6`);let g=_(`div`,a);o(a,g);let y=_(`h2`,g);o(g,y),v(y,`text-lg font-semibold mb-2`),o(y,p(`Text Input`));let b=_(`input`,g);o(g,b),v(b,`input input-bordered w-full`),t(()=>{u(b,S.value)}),i(b,`input`,e=>{S.value=e.target.value}),s(b,`placeholder`,`Edit me`);let x=_(`p`,g);o(g,x),v(x,`mt-2 text-gray-700`);let T=h(x);o(x,T),t(()=>{l(T,S.value)});let E=_(`div`,a);o(a,E);let D=_(`h2`,E);o(E,D),v(D,`text-lg font-semibold mb-2`),o(D,p(`Checkbox`));let O=_(`div`,E);o(E,O),v(O,`flex items-center gap-2`);let k=_(`input`,O);o(O,k),s(k,`id`,`checkbox`),s(k,`type`,`checkbox`),v(k,`checkbox`),t(()=>{f(k,!!te.value)}),i(k,`change`,e=>{te.value=e.target.checked});let A=_(`label`,O);o(O,A),s(A,`htmlFor`,`checkbox`),v(A,`select-none`),o(A,p(`Checked: `));let oe=h(A);o(A,oe),t(()=>{l(oe,String(te.value))});let j=_(`div`,a);o(a,j);let M=_(`h2`,j);o(j,M),v(M,`text-lg font-semibold mb-2`),o(M,p(`Multi Checkbox`));let N=_(`div`,j);o(j,N),v(N,`flex items-center gap-4 flex-wrap`);let se=e(`rue:list:start`),ce=e(`rue:list:end`);o(N,se),o(N,ce);let le=new Map;t(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(e,n,r,a,p)=>{m(d(()=>{let n=c(),r=_(`label`,n);o(n,r),t(()=>{s(r,`key`,String(e))}),v(r,`inline-flex items-center gap-2`);let a=_(`input`,r);o(r,a),s(a,`type`,`checkbox`),v(a,`checkbox`),t(()=>{u(a,e)}),t(()=>{f(a,!!ne.value.includes(e))}),i(a,`change`,t=>ie(e,t.target.checked));let d=_(`span`,r);o(r,d);let p=h(d);return o(d,p),t(()=>{l(p,e)}),n}),n,r)}})});let P=_(`p`,j);o(j,P),v(P,`mt-2 text-gray-700`),o(P,p(`Checked names: `));let ue=h(P);o(P,ue),t(()=>{l(ue,ne.value.join(`, `))});let F=_(`div`,a);o(a,F);let I=_(`h2`,F);o(F,I),v(I,`text-lg font-semibold mb-2`),o(I,p(`Radio`));let L=_(`div`,F);o(F,L),v(L,`flex items-center gap-4 flex-wrap`);let R=_(`label`,L);o(L,R),s(R,`htmlFor`,`one`),v(R,`inline-flex items-center gap-2`);let z=_(`input`,R);o(R,z),s(z,`id`,`one`),s(z,`type`,`radio`),v(z,`radio`),s(z,`value`,`One`),t(()=>{f(z,C.value===`One`)}),i(z,`change`,()=>{C.value=`One`});let de=_(`span`,R);o(R,de),o(de,p(`One`));let B=_(`label`,L);o(L,B),s(B,`htmlFor`,`two`),v(B,`inline-flex items-center gap-2`);let V=_(`input`,B);o(B,V),s(V,`id`,`two`),s(V,`type`,`radio`),v(V,`radio`),s(V,`value`,`Two`),t(()=>{f(V,C.value===`Two`)}),i(V,`change`,()=>{C.value=`Two`});let fe=_(`span`,B);o(B,fe),o(fe,p(`Two`));let H=_(`p`,F);o(F,H),v(H,`mt-2 text-gray-700`),o(H,p(`Picked: `));let pe=h(H);o(H,pe),t(()=>{l(pe,C.value)});let U=_(`div`,a);o(a,U);let W=_(`h2`,U);o(U,W),v(W,`text-lg font-semibold mb-2`),o(W,p(`Select`));let G=_(`select`,U);o(U,G),v(G,`select select-bordered`),t(()=>{u(G,w.value)}),i(G,`change`,e=>{w.value=e.target.value});let K=_(`option`,G);o(G,K),s(K,`value`,``),o(K,p(`Please select one`));let q=_(`option`,G);o(G,q),s(q,`value`,`A`),o(q,p(`A`));let J=_(`option`,G);o(G,J),s(J,`value`,`B`),o(J,p(`B`));let Y=_(`option`,G);o(G,Y),s(Y,`value`,`C`),o(Y,p(`C`));let X=_(`p`,U);o(U,X),v(X,`mt-2 text-gray-700`),o(X,p(`Selected: `));let me=h(X);o(X,me),t(()=>{l(me,w.value)});let Z=_(`div`,a);o(a,Z);let he=_(`h2`,Z);o(Z,he),v(he,`text-lg font-semibold mb-2`),o(he,p(`Multi Select`));let Q=_(`select`,Z);o(Z,Q),v(Q,`select select-bordered w-[160px]`),s(Q,`multiple`,``),t(()=>{u(Q,re.value)}),i(Q,`change`,ae);let ge=_(`option`,Q);o(Q,ge),s(ge,`value`,`A`),o(ge,p(`A`));let _e=_(`option`,Q);o(Q,_e),s(_e,`value`,`B`),o(_e,p(`B`));let ve=_(`option`,Q);o(Q,ve),s(ve,`value`,`C`),o(ve,p(`C`));let $=_(`p`,Z);o(Z,$),v($,`mt-2 text-gray-700`),o($,p(`Selected: `));let ye=h($);return o($,ye),t(()=>{l(ye,re.value.join(`, `))}),n}):``;r(()=>m(n,D,k))}),n})}),a,y),a})};export{S as default};