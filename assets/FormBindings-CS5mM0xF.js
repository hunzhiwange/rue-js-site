import{A as e,F as t,H as n,I as r,J as i,L as a,N as o,P as s,U as c,W as l,Y as u,c as d,j as f,pt as p,rt as m,t as h,u as g,ut as _}from"./vapor-runtime-BZZbPG7x.js";import{a as v,n as ee}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as y}from"./Code-C8wy38VS.js";import{t as b}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var x=()=>{let{text:x,checked:S,checkedNames:te,picked:C,selected:w,multiSelected:ne,toggleCheckedName:re,onMultiSelectChange:ie,activeTab:T}=v(`useSetup:0:0`,()=>_(()=>{let e=v(`ref:1:0`,()=>m(`Edit me`)),t=v(`ref:1:1`,()=>m(!0)),n=v(`ref:1:2`,()=>m([`Jack`])),r=v(`ref:1:3`,()=>m(`One`)),i=v(`ref:1:4`,()=>m(`A`)),a=v(`ref:1:5`,()=>m([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:i,multiSelected:a,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{a.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:v(`ref:1:6`,()=>m(`preview`))}}));return g(()=>{let m=s(),_=o(`rue:component:anchor`);return f(m,_),d(h(b,{children:g(()=>{let m=s(),_=t(`h1`);f(m,_),l(_,`text-5xl font-semibold mb-4 md:mb-4`),f(_,r(`表单绑定（移植自 Vue）`));let v=t(`div`);f(m,v),n(v,`role`,`tablist`),l(v,`tabs tabs-box`);let b=t(`button`);f(v,b),n(b,`role`,`tab`),p(()=>{l(b,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),e(b,`click`,()=>{T.value=`preview`}),f(b,r(`效果`));let E=t(`button`);f(v,E),n(E,`role`,`tab`),p(()=>{l(E,String(`tab ${T.value===`code`?`tab-active`:``}`))}),e(E,`click`,()=>{T.value=`code`}),f(E,r(`代码`));let D=t(`div`);f(m,D),l(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=o(`rue:slot:anchor`);f(D,O),p(()=>{d(T.value===`code`?g(()=>{let e=s(),n=t(`div`);f(e,n),l(n,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let r=t(`div`);f(n,r),l(r,`card-body p-0`);let i=o(`rue:component:anchor`);return f(r,i),p(()=>{d(h(y,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`}),r,i)}),e}):``,D,O)}),f(D,r(` `));let k=o(`rue:slot:anchor`);return f(D,k),p(()=>{d(T.value===`preview`?g(()=>{let m=s(),h=t(`div`);f(m,h),l(h,`card bg-base-100 shadow`);let _=t(`div`);f(h,_),l(_,`card-body grid gap-6`);let v=t(`div`);f(_,v);let y=t(`h2`);f(v,y),l(y,`text-lg font-semibold mb-2`),f(y,r(`Text Input`));let b=t(`input`);f(v,b),l(b,`input input-bordered w-full`),p(()=>{i(b,x.value)}),e(b,`input`,e=>{x.value=e.target.value}),n(b,`placeholder`,`Edit me`);let T=t(`p`);f(v,T),l(T,`mt-2 text-gray-700`);let E=a(T);f(T,E),p(()=>{u(E,x.value)});let D=t(`div`);f(_,D);let O=t(`h2`);f(D,O),l(O,`text-lg font-semibold mb-2`),f(O,r(`Checkbox`));let k=t(`div`);f(D,k),l(k,`flex items-center gap-2`);let A=t(`input`);f(k,A),n(A,`id`,`checkbox`),n(A,`type`,`checkbox`),l(A,`checkbox`),p(()=>{c(A,!!S.value)}),e(A,`change`,e=>{S.value=e.target.checked});let j=t(`label`);f(k,j),n(j,`htmlFor`,`checkbox`),l(j,`select-none`),f(j,r(`Checked: `));let ae=a(j);f(j,ae),p(()=>{u(ae,String(S.value))});let M=t(`div`);f(_,M);let N=t(`h2`);f(M,N),l(N,`text-lg font-semibold mb-2`),f(N,r(`Multi Checkbox`));let P=t(`div`);f(M,P),l(P,`flex items-center gap-4 flex-wrap`);let oe=o(`rue:list:start`),se=o(`rue:list:end`);f(P,oe),f(P,se);let ce=new Map;p(()=>{ce=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:ce,parent:P,before:se,singleRoot:!0,start:oe,renderItem:(r,o,m,h,_)=>{d(g(()=>{let o=s(),d=t(`label`);f(o,d),p(()=>{n(d,`key`,String(r))}),l(d,`inline-flex items-center gap-2`);let m=t(`input`);f(d,m),n(m,`type`,`checkbox`),l(m,`checkbox`),p(()=>{i(m,r)}),p(()=>{c(m,!!te.value.includes(r))}),e(m,`change`,e=>re(r,e.target.checked));let h=t(`span`);f(d,h);let g=a(h);return f(h,g),p(()=>{u(g,r)}),o}),o,m)}})});let F=t(`p`);f(M,F),l(F,`mt-2 text-gray-700`),f(F,r(`Checked names: `));let le=a(F);f(F,le),p(()=>{u(le,te.value.join(`, `))});let I=t(`div`);f(_,I);let ue=t(`h2`);f(I,ue),l(ue,`text-lg font-semibold mb-2`),f(ue,r(`Radio`));let L=t(`div`);f(I,L),l(L,`flex items-center gap-4 flex-wrap`);let R=t(`label`);f(L,R),n(R,`htmlFor`,`one`),l(R,`inline-flex items-center gap-2`);let z=t(`input`);f(R,z),n(z,`id`,`one`),n(z,`type`,`radio`),l(z,`radio`),n(z,`value`,`One`),p(()=>{c(z,C.value===`One`)}),e(z,`change`,()=>{C.value=`One`});let de=t(`span`);f(R,de),f(de,r(`One`));let B=t(`label`);f(L,B),n(B,`htmlFor`,`two`),l(B,`inline-flex items-center gap-2`);let V=t(`input`);f(B,V),n(V,`id`,`two`),n(V,`type`,`radio`),l(V,`radio`),n(V,`value`,`Two`),p(()=>{c(V,C.value===`Two`)}),e(V,`change`,()=>{C.value=`Two`});let fe=t(`span`);f(B,fe),f(fe,r(`Two`));let H=t(`p`);f(I,H),l(H,`mt-2 text-gray-700`),f(H,r(`Picked: `));let pe=a(H);f(H,pe),p(()=>{u(pe,C.value)});let U=t(`div`);f(_,U);let W=t(`h2`);f(U,W),l(W,`text-lg font-semibold mb-2`),f(W,r(`Select`));let G=t(`select`);f(U,G),l(G,`select select-bordered`),p(()=>{i(G,w.value)}),e(G,`change`,e=>{w.value=e.target.value});let K=t(`option`);f(G,K),n(K,`value`,``),f(K,r(`Please select one`));let q=t(`option`);f(G,q),n(q,`value`,`A`),f(q,r(`A`));let J=t(`option`);f(G,J),n(J,`value`,`B`),f(J,r(`B`));let Y=t(`option`);f(G,Y),n(Y,`value`,`C`),f(Y,r(`C`));let X=t(`p`);f(U,X),l(X,`mt-2 text-gray-700`),f(X,r(`Selected: `));let me=a(X);f(X,me),p(()=>{u(me,w.value)});let Z=t(`div`);f(_,Z);let he=t(`h2`);f(Z,he),l(he,`text-lg font-semibold mb-2`),f(he,r(`Multi Select`));let Q=t(`select`);f(Z,Q),l(Q,`select select-bordered w-[160px]`),n(Q,`multiple`,``),p(()=>{i(Q,ne.value)}),e(Q,`change`,ie);let ge=t(`option`);f(Q,ge),n(ge,`value`,`A`),f(ge,r(`A`));let _e=t(`option`);f(Q,_e),n(_e,`value`,`B`),f(_e,r(`B`));let ve=t(`option`);f(Q,ve),n(ve,`value`,`C`),f(ve,r(`C`));let $=t(`p`);f(Z,$),l($,`mt-2 text-gray-700`),f($,r(`Selected: `));let ye=a($);return f($,ye),p(()=>{u(ye,ne.value.join(`, `))}),m}):``,D,k)}),m})}),m,_),m})};export{x as default};