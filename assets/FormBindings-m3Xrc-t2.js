import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,W as c,X as l,Z as u,_t as d,bt as f,c as p,j as m,lt as h,pt as g,t as _,u as v}from"./vapor-runtime-D3a-68js.js";import{a as y,n as ee}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as b}from"./Code-2C2psoH3.js";import{t as x}from"./SidebarPlaygroundExample-DKa0aI1C.js";var S=()=>{let{text:S,checked:C,checkedNames:te,picked:w,selected:T,multiSelected:ne,toggleCheckedName:re,onMultiSelectChange:ie,activeTab:E}=y(`useSetup:0:0`,()=>d(()=>{let e=y(`ref:1:0`,()=>h(`Edit me`)),t=y(`ref:1:1`,()=>h(!0)),n=y(`ref:1:2`,()=>h([`Jack`])),r=y(`ref:1:3`,()=>h(`One`)),i=y(`ref:1:4`,()=>h(`A`)),a=y(`ref:1:5`,()=>h([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:i,multiSelected:a,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{a.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>h(`preview`))}}));return v(()=>{let d=e(),h=a(`rue:component:anchor`);return i(d,h),p(_(x,{children:v(()=>{let d=e(),h=n(`h1`);i(d,h),t(h,`text-5xl font-semibold mb-4 md:mb-4`),i(h,r(`表单绑定（移植自 Vue）`));let y=n(`div`);i(d,y),s(y,`role`,`tablist`),t(y,`tabs tabs-box`);let x=n(`button`);i(y,x),s(x,`role`,`tab`),f(()=>{t(x,String(`tab ${E.value===`preview`?`tab-active`:``}`))}),m(x,`click`,()=>{E.value=`preview`}),i(x,r(`效果`));let D=n(`button`);i(y,D),s(D,`role`,`tab`),f(()=>{t(D,String(`tab ${E.value===`code`?`tab-active`:``}`))}),m(D,`click`,()=>{E.value=`code`}),i(D,r(`代码`));let O=n(`div`);i(d,O),t(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=a(`rue:slot:anchor`);i(O,k),f(()=>{let r=E.value===`code`?v(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),f(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});g(()=>p(e,s,c))}),r}):``;g(()=>p(r,O,k))}),i(O,r(` `));let A=a(`rue:slot:anchor`);return i(O,A),f(()=>{let d=E.value===`preview`?v(()=>{let d=e(),h=n(`div`);i(d,h),t(h,`card bg-base-100 shadow`);let g=n(`div`);i(h,g),t(g,`card-body grid gap-6`);let _=n(`div`);i(g,_);let y=n(`h2`);i(_,y),t(y,`text-lg font-semibold mb-2`),i(y,r(`Text Input`));let b=n(`input`);i(_,b),t(b,`input input-bordered w-full`),f(()=>{l(b,S.value)}),m(b,`input`,e=>{S.value=e.target.value}),s(b,`placeholder`,`Edit me`);let x=n(`p`);i(_,x),t(x,`mt-2 text-gray-700`);let E=o(x);i(x,E),f(()=>{u(E,S.value)});let D=n(`div`);i(g,D);let O=n(`h2`);i(D,O),t(O,`text-lg font-semibold mb-2`),i(O,r(`Checkbox`));let k=n(`div`);i(D,k),t(k,`flex items-center gap-2`);let A=n(`input`);i(k,A),s(A,`id`,`checkbox`),s(A,`type`,`checkbox`),t(A,`checkbox`),f(()=>{c(A,!!C.value)}),m(A,`change`,e=>{C.value=e.target.checked});let j=n(`label`);i(k,j),s(j,`htmlFor`,`checkbox`),t(j,`select-none`),i(j,r(`Checked: `));let ae=o(j);i(j,ae),f(()=>{u(ae,String(C.value))});let M=n(`div`);i(g,M);let N=n(`h2`);i(M,N),t(N,`text-lg font-semibold mb-2`),i(N,r(`Multi Checkbox`));let P=n(`div`);i(M,P),t(P,`flex items-center gap-4 flex-wrap`);let oe=a(`rue:list:start`),se=a(`rue:list:end`);i(P,oe),i(P,se);let ce=new Map;f(()=>{ce=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:ce,parent:P,before:se,singleRoot:!0,trackIndex:!1,start:oe,renderItem:(r,a,d,h,g)=>{p(v(()=>{let a=e(),d=n(`label`);i(a,d),f(()=>{s(d,`key`,String(r))}),t(d,`inline-flex items-center gap-2`);let p=n(`input`);i(d,p),s(p,`type`,`checkbox`),t(p,`checkbox`),f(()=>{l(p,r)}),f(()=>{c(p,!!te.value.includes(r))}),m(p,`change`,e=>re(r,e.target.checked));let h=n(`span`);i(d,h);let g=o(h);return i(h,g),f(()=>{u(g,r)}),a}),a,d)}})});let F=n(`p`);i(M,F),t(F,`mt-2 text-gray-700`),i(F,r(`Checked names: `));let le=o(F);i(F,le),f(()=>{u(le,te.value.join(`, `))});let I=n(`div`);i(g,I);let L=n(`h2`);i(I,L),t(L,`text-lg font-semibold mb-2`),i(L,r(`Radio`));let R=n(`div`);i(I,R),t(R,`flex items-center gap-4 flex-wrap`);let z=n(`label`);i(R,z),s(z,`htmlFor`,`one`),t(z,`inline-flex items-center gap-2`);let B=n(`input`);i(z,B),s(B,`id`,`one`),s(B,`type`,`radio`),t(B,`radio`),s(B,`value`,`One`),f(()=>{c(B,w.value===`One`)}),m(B,`change`,()=>{w.value=`One`});let ue=n(`span`);i(z,ue),i(ue,r(`One`));let V=n(`label`);i(R,V),s(V,`htmlFor`,`two`),t(V,`inline-flex items-center gap-2`);let H=n(`input`);i(V,H),s(H,`id`,`two`),s(H,`type`,`radio`),t(H,`radio`),s(H,`value`,`Two`),f(()=>{c(H,w.value===`Two`)}),m(H,`change`,()=>{w.value=`Two`});let de=n(`span`);i(V,de),i(de,r(`Two`));let U=n(`p`);i(I,U),t(U,`mt-2 text-gray-700`),i(U,r(`Picked: `));let fe=o(U);i(U,fe),f(()=>{u(fe,w.value)});let W=n(`div`);i(g,W);let G=n(`h2`);i(W,G),t(G,`text-lg font-semibold mb-2`),i(G,r(`Select`));let K=n(`select`);i(W,K),t(K,`select select-bordered`),f(()=>{l(K,T.value)}),m(K,`change`,e=>{T.value=e.target.value});let q=n(`option`);i(K,q),s(q,`value`,``),i(q,r(`Please select one`));let J=n(`option`);i(K,J),s(J,`value`,`A`),i(J,r(`A`));let Y=n(`option`);i(K,Y),s(Y,`value`,`B`),i(Y,r(`B`));let pe=n(`option`);i(K,pe),s(pe,`value`,`C`),i(pe,r(`C`));let X=n(`p`);i(W,X),t(X,`mt-2 text-gray-700`),i(X,r(`Selected: `));let me=o(X);i(X,me),f(()=>{u(me,T.value)});let Z=n(`div`);i(g,Z);let he=n(`h2`);i(Z,he),t(he,`text-lg font-semibold mb-2`),i(he,r(`Multi Select`));let Q=n(`select`);i(Z,Q),t(Q,`select select-bordered w-[160px]`),s(Q,`multiple`,``),f(()=>{l(Q,ne.value)}),m(Q,`change`,ie);let ge=n(`option`);i(Q,ge),s(ge,`value`,`A`),i(ge,r(`A`));let _e=n(`option`);i(Q,_e),s(_e,`value`,`B`),i(_e,r(`B`));let ve=n(`option`);i(Q,ve),s(ve,`value`,`C`),i(ve,r(`C`));let $=n(`p`);i(Z,$),t($,`mt-2 text-gray-700`),i($,r(`Selected: `));let ye=o($);return i($,ye),f(()=>{u(ye,ne.value.join(`, `))}),d}):``;g(()=>p(d,O,A))}),d})}),d,h),d})};export{S as default};