import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,et as u,kt as d,l as f,ot as p,q as m,st as h,t as g,tt as _,xt as v}from"./vapor-runtime-ACs_OvwU.js";import{a as y,n as ee}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as b}from"./Code-CliOXHNE.js";import{t as x}from"./SidebarPlaygroundExample-DXnPmR3z.js";var S=()=>{let{text:S,checked:C,checkedNames:te,picked:w,selected:T,multiSelected:ne,toggleCheckedName:re,onMultiSelectChange:ie,activeTab:E}=y(`useSetup:0:0`,()=>t(()=>{let e=y(`ref:1:0`,()=>c(`Edit me`)),t=y(`ref:1:1`,()=>c(!0)),n=y(`ref:1:2`,()=>c([`Jack`])),r=y(`ref:1:3`,()=>c(`One`)),i=y(`ref:1:4`,()=>c(`A`)),a=y(`ref:1:5`,()=>c([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:i,multiSelected:a,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{a.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>c(`preview`))}}));return l(t=>{let c=n(),y=s(`rue:component:anchor`);return r(c,y),f(g(x,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),_(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,m(`表单绑定（移植自 Vue）`));let y=a(`div`,t);r(t,y),e(y,`role`,`tablist`),_(y,`tabs tabs-box`);let x=a(`button`,y);r(y,x),e(x,`role`,`tab`),d(()=>{_(x,String(`tab ${E.value===`preview`?`tab-active`:``}`))}),o(x,`click`,()=>{E.value=`preview`}),r(x,m(`效果`));let D=a(`button`,y);r(y,D),e(D,`role`,`tab`),d(()=>{_(D,String(`tab ${E.value===`code`?`tab-active`:``}`))}),o(D,`click`,()=>{E.value=`code`}),r(D,m(`代码`));let O=a(`div`,t);r(t,O),_(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=s(`rue:slot:anchor`);r(O,k),d(()=>{let e=E.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),_(t,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let i=a(`div`,t);r(t,i),_(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});v(()=>f(e,i,o))}),e}):``;v(()=>f(e,O,k))}),r(O,m(` `));let A=s(`rue:slot:anchor`);return r(O,A),d(()=>{let t=E.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),_(c,`card bg-base-100 shadow`);let g=a(`div`,c);r(c,g),_(g,`card-body grid gap-6`);let v=a(`div`,g);r(g,v);let y=a(`h2`,v);r(v,y),_(y,`text-lg font-semibold mb-2`),r(y,m(`Text Input`));let b=a(`input`,v);r(v,b),_(b,`input input-bordered w-full`),d(()=>{p(b,S.value)}),o(b,`input`,e=>{S.value=e.target.value}),e(b,`placeholder`,`Edit me`);let x=a(`p`,v);r(v,x),_(x,`mt-2 text-gray-700`);let E=i(x);r(x,E),d(()=>{h(E,S.value)});let D=a(`div`,g);r(g,D);let O=a(`h2`,D);r(D,O),_(O,`text-lg font-semibold mb-2`),r(O,m(`Checkbox`));let k=a(`div`,D);r(D,k),_(k,`flex items-center gap-2`);let A=a(`input`,k);r(k,A),e(A,`id`,`checkbox`),e(A,`type`,`checkbox`),_(A,`checkbox`),d(()=>{u(A,!!C.value)}),o(A,`change`,e=>{C.value=e.target.checked});let j=a(`label`,k);r(k,j),e(j,`htmlFor`,`checkbox`),_(j,`select-none`),r(j,m(`Checked: `));let ae=i(j);r(j,ae),d(()=>{h(ae,String(C.value))});let M=a(`div`,g);r(g,M);let N=a(`h2`,M);r(M,N),_(N,`text-lg font-semibold mb-2`),r(N,m(`Multi Checkbox`));let P=a(`div`,M);r(M,P),_(P,`flex items-center gap-4 flex-wrap`);let oe=s(`rue:list:start`),se=s(`rue:list:end`);r(P,oe),r(P,se);let ce=new Map;d(()=>{ce=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:ce,parent:P,before:se,singleRoot:!0,trackIndex:!1,start:oe,renderItem:(t,s,c,m,g)=>{f(l(()=>{let s=n(),c=a(`label`,s);r(s,c),d(()=>{e(c,`key`,String(t))}),_(c,`inline-flex items-center gap-2`);let l=a(`input`,c);r(c,l),e(l,`type`,`checkbox`),_(l,`checkbox`),d(()=>{p(l,t)}),d(()=>{u(l,!!te.value.includes(t))}),o(l,`change`,e=>re(t,e.target.checked));let f=a(`span`,c);r(c,f);let m=i(f);return r(f,m),d(()=>{h(m,t)}),s}),s,c)}})});let F=a(`p`,M);r(M,F),_(F,`mt-2 text-gray-700`),r(F,m(`Checked names: `));let le=i(F);r(F,le),d(()=>{h(le,te.value.join(`, `))});let I=a(`div`,g);r(g,I);let L=a(`h2`,I);r(I,L),_(L,`text-lg font-semibold mb-2`),r(L,m(`Radio`));let R=a(`div`,I);r(I,R),_(R,`flex items-center gap-4 flex-wrap`);let z=a(`label`,R);r(R,z),e(z,`htmlFor`,`one`),_(z,`inline-flex items-center gap-2`);let B=a(`input`,z);r(z,B),e(B,`id`,`one`),e(B,`type`,`radio`),_(B,`radio`),e(B,`value`,`One`),d(()=>{u(B,w.value===`One`)}),o(B,`change`,()=>{w.value=`One`});let ue=a(`span`,z);r(z,ue),r(ue,m(`One`));let V=a(`label`,R);r(R,V),e(V,`htmlFor`,`two`),_(V,`inline-flex items-center gap-2`);let H=a(`input`,V);r(V,H),e(H,`id`,`two`),e(H,`type`,`radio`),_(H,`radio`),e(H,`value`,`Two`),d(()=>{u(H,w.value===`Two`)}),o(H,`change`,()=>{w.value=`Two`});let de=a(`span`,V);r(V,de),r(de,m(`Two`));let U=a(`p`,I);r(I,U),_(U,`mt-2 text-gray-700`),r(U,m(`Picked: `));let fe=i(U);r(U,fe),d(()=>{h(fe,w.value)});let W=a(`div`,g);r(g,W);let G=a(`h2`,W);r(W,G),_(G,`text-lg font-semibold mb-2`),r(G,m(`Select`));let K=a(`select`,W);r(W,K),_(K,`select select-bordered`),d(()=>{p(K,T.value)}),o(K,`change`,e=>{T.value=e.target.value});let q=a(`option`,K);r(K,q),e(q,`value`,``),r(q,m(`Please select one`));let J=a(`option`,K);r(K,J),e(J,`value`,`A`),r(J,m(`A`));let Y=a(`option`,K);r(K,Y),e(Y,`value`,`B`),r(Y,m(`B`));let pe=a(`option`,K);r(K,pe),e(pe,`value`,`C`),r(pe,m(`C`));let X=a(`p`,W);r(W,X),_(X,`mt-2 text-gray-700`),r(X,m(`Selected: `));let me=i(X);r(X,me),d(()=>{h(me,T.value)});let Z=a(`div`,g);r(g,Z);let he=a(`h2`,Z);r(Z,he),_(he,`text-lg font-semibold mb-2`),r(he,m(`Multi Select`));let Q=a(`select`,Z);r(Z,Q),_(Q,`select select-bordered w-[160px]`),e(Q,`multiple`,``),d(()=>{p(Q,ne.value)}),o(Q,`change`,ie);let ge=a(`option`,Q);r(Q,ge),e(ge,`value`,`A`),r(ge,m(`A`));let _e=a(`option`,Q);r(Q,_e),e(_e,`value`,`B`),r(_e,m(`B`));let ve=a(`option`,Q);r(Q,ve),e(ve,`value`,`C`),r(ve,m(`C`));let $=a(`p`,Z);r(Z,$),_($,`mt-2 text-gray-700`),r($,m(`Selected: `));let ye=i($);return r($,ye),d(()=>{h(ye,ne.value.join(`, `))}),t}):``;v(()=>f(t,O,A))}),t})}),c,y),c})};export{S as default};