import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,pt as m,s as h,st as g,t as _,tt as v}from"./vapor-runtime-DHPuOjqh.js";import{a as y,n as ee}from"./vapor-helpers-vapor-CJFAWine.js";import{t as b}from"./Code-Ds9lKLk6.js";import{t as x}from"./SidebarPlaygroundExample-KML-rOvA.js";var S=()=>{let{text:S,checked:te,checkedNames:ne,picked:C,selected:w,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>n(()=>{let e=y(`ref:1:0`,()=>r(`Edit me`)),t=y(`ref:1:1`,()=>r(!0)),n=y(`ref:1:2`,()=>r([`Jack`])),i=y(`ref:1:3`,()=>r(`One`)),a=y(`ref:1:4`,()=>r(`A`)),o=y(`ref:1:5`,()=>r([`A`]));return{text:e,checked:t,checkedNames:n,picked:i,selected:a,multiSelected:o,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{o.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>r(`preview`))}}));return d(n=>{let r=i(),y=c(`rue:component:anchor`);return o(r,y),h(_(x,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`表单绑定（移植自 Vue）`));let y=e(`div`,n);o(n,y),p(y,`role`,`tablist`),l(y,`tabs tabs-box`);let x=e(`button`,y);o(y,x),p(x,`role`,`tab`),s(()=>{l(x,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),t(x,`click`,()=>{T.value=`preview`}),o(x,u(`效果`));let E=e(`button`,y);o(y,E),p(E,`role`,`tab`),s(()=>{l(E,String(`tab ${T.value===`code`?`tab-active`:``}`))}),t(E,`click`,()=>{T.value=`code`}),o(E,u(`代码`));let D=e(`div`,n);o(n,D),l(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=c(`rue:slot:anchor`);o(D,O),s(()=>{let t=T.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});a(()=>h(e,r,u))}),t}):``;a(()=>h(t,D,O))}),o(D,u(` `));let k=c(`rue:slot:anchor`);return o(D,k),s(()=>{let n=T.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-6`);let _=e(`div`,a);o(a,_);let y=e(`h2`,_);o(_,y),l(y,`text-lg font-semibold mb-2`),o(y,u(`Text Input`));let b=e(`input`,_);o(_,b),l(b,`input input-bordered w-full`),s(()=>{m(b,S.value)}),t(b,`input`,e=>{S.value=e.target.value}),p(b,`placeholder`,`Edit me`);let x=e(`p`,_);o(_,x),l(x,`mt-2 text-gray-700`);let T=v(x);o(x,T),s(()=>{f(T,S.value)});let E=e(`div`,a);o(a,E);let D=e(`h2`,E);o(E,D),l(D,`text-lg font-semibold mb-2`),o(D,u(`Checkbox`));let O=e(`div`,E);o(E,O),l(O,`flex items-center gap-2`);let k=e(`input`,O);o(O,k),p(k,`id`,`checkbox`),p(k,`type`,`checkbox`),l(k,`checkbox`),s(()=>{g(k,!!te.value)}),t(k,`change`,e=>{te.value=e.target.checked});let A=e(`label`,O);o(O,A),p(A,`htmlFor`,`checkbox`),l(A,`select-none`),o(A,u(`Checked: `));let oe=v(A);o(A,oe),s(()=>{f(oe,String(te.value))});let j=e(`div`,a);o(a,j);let M=e(`h2`,j);o(j,M),l(M,`text-lg font-semibold mb-2`),o(M,u(`Multi Checkbox`));let N=e(`div`,j);o(j,N),l(N,`flex items-center gap-4 flex-wrap`);let se=c(`rue:list:start`),ce=c(`rue:list:end`);o(N,se),o(N,ce);let le=new Map;s(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(n,r,a,c,u)=>{h(d(()=>{let r=i(),a=e(`label`,r);o(r,a),s(()=>{p(a,`key`,String(n))}),l(a,`inline-flex items-center gap-2`);let c=e(`input`,a);o(a,c),p(c,`type`,`checkbox`),l(c,`checkbox`),s(()=>{m(c,n)}),s(()=>{g(c,!!ne.value.includes(n))}),t(c,`change`,e=>ie(n,e.target.checked));let u=e(`span`,a);o(a,u);let d=v(u);return o(u,d),s(()=>{f(d,n)}),r}),r,a)}})});let P=e(`p`,j);o(j,P),l(P,`mt-2 text-gray-700`),o(P,u(`Checked names: `));let ue=v(P);o(P,ue),s(()=>{f(ue,ne.value.join(`, `))});let F=e(`div`,a);o(a,F);let I=e(`h2`,F);o(F,I),l(I,`text-lg font-semibold mb-2`),o(I,u(`Radio`));let L=e(`div`,F);o(F,L),l(L,`flex items-center gap-4 flex-wrap`);let R=e(`label`,L);o(L,R),p(R,`htmlFor`,`one`),l(R,`inline-flex items-center gap-2`);let z=e(`input`,R);o(R,z),p(z,`id`,`one`),p(z,`type`,`radio`),l(z,`radio`),p(z,`value`,`One`),s(()=>{g(z,C.value===`One`)}),t(z,`change`,()=>{C.value=`One`});let de=e(`span`,R);o(R,de),o(de,u(`One`));let B=e(`label`,L);o(L,B),p(B,`htmlFor`,`two`),l(B,`inline-flex items-center gap-2`);let V=e(`input`,B);o(B,V),p(V,`id`,`two`),p(V,`type`,`radio`),l(V,`radio`),p(V,`value`,`Two`),s(()=>{g(V,C.value===`Two`)}),t(V,`change`,()=>{C.value=`Two`});let fe=e(`span`,B);o(B,fe),o(fe,u(`Two`));let H=e(`p`,F);o(F,H),l(H,`mt-2 text-gray-700`),o(H,u(`Picked: `));let pe=v(H);o(H,pe),s(()=>{f(pe,C.value)});let U=e(`div`,a);o(a,U);let W=e(`h2`,U);o(U,W),l(W,`text-lg font-semibold mb-2`),o(W,u(`Select`));let G=e(`select`,U);o(U,G),l(G,`select select-bordered`),s(()=>{m(G,w.value)}),t(G,`change`,e=>{w.value=e.target.value});let K=e(`option`,G);o(G,K),p(K,`value`,``),o(K,u(`Please select one`));let q=e(`option`,G);o(G,q),p(q,`value`,`A`),o(q,u(`A`));let J=e(`option`,G);o(G,J),p(J,`value`,`B`),o(J,u(`B`));let Y=e(`option`,G);o(G,Y),p(Y,`value`,`C`),o(Y,u(`C`));let X=e(`p`,U);o(U,X),l(X,`mt-2 text-gray-700`),o(X,u(`Selected: `));let me=v(X);o(X,me),s(()=>{f(me,w.value)});let Z=e(`div`,a);o(a,Z);let he=e(`h2`,Z);o(Z,he),l(he,`text-lg font-semibold mb-2`),o(he,u(`Multi Select`));let Q=e(`select`,Z);o(Z,Q),l(Q,`select select-bordered w-[160px]`),p(Q,`multiple`,``),s(()=>{m(Q,re.value)}),t(Q,`change`,ae);let ge=e(`option`,Q);o(Q,ge),p(ge,`value`,`A`),o(ge,u(`A`));let _e=e(`option`,Q);o(Q,_e),p(_e,`value`,`B`),o(_e,u(`B`));let ve=e(`option`,Q);o(Q,ve),p(ve,`value`,`C`),o(ve,u(`C`));let $=e(`p`,Z);o(Z,$),l($,`mt-2 text-gray-700`),o($,u(`Selected: `));let ye=v($);return o($,ye),s(()=>{f(ye,re.value.join(`, `))}),n}):``;a(()=>h(n,D,k))}),n})}),r,y),r})};export{S as default};