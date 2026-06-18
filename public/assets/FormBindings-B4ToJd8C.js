import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,ft as u,l as d,ot as f,pt as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as ee}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as b}from"./Code-CZqShVUj.js";import{r as x}from"./SidebarPlaygroundExample-5H7RL-T7.js";var S=()=>{let{text:S,checked:te,checkedNames:ne,picked:C,selected:w,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>h(()=>{let e=y(`ref:1:0`,()=>r(`Edit me`)),t=y(`ref:1:1`,()=>r(!0)),n=y(`ref:1:2`,()=>r([`Jack`])),i=y(`ref:1:3`,()=>r(`One`)),a=y(`ref:1:4`,()=>r(`A`)),o=y(`ref:1:5`,()=>r([`A`]));return{text:e,checked:t,checkedNames:n,picked:i,selected:a,multiSelected:o,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{o.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>r(`preview`))}}));return d(r=>{let h=s(),y=a(`rue:component:anchor`);return n(h,y),g(v(x,{children:d(()=>{let r=s(),h=i(`h1`,r);n(r,h),_(h,`text-5xl font-semibold mb-4 md:mb-4`),n(h,e(`表单绑定（移植自 Vue）`));let y=i(`div`,r);n(r,y),c(y,`role`,`tablist`),_(y,`tabs tabs-box`);let x=i(`button`,y);n(y,x),c(x,`role`,`tab`),o(()=>{_(x,`tab ${T.value===`preview`?`tab-active`:``}`)}),m(x,`click`,()=>{T.value=`preview`}),n(x,e(`效果`));let E=i(`button`,y);n(y,E),c(E,`role`,`tab`),o(()=>{_(E,`tab ${T.value===`code`?`tab-active`:``}`)}),m(E,`click`,()=>{T.value=`code`}),n(E,e(`代码`));let D=i(`div`,r);n(r,D),_(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=a(`rue:slot:anchor`);n(D,O),o(()=>{let e=T.value===`code`?d(()=>{let e=s(),r=i(`div`,e);n(e,r),_(r,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let c=i(`div`,r);n(r,c),_(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=v(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});t(()=>g(e,c,l))}),e}):``;t(()=>g(e,D,O))}),n(D,e(` `));let k=a(`rue:slot:anchor`);return n(D,k),o(()=>{let r=T.value===`preview`?d(()=>{let t=s(),r=i(`div`,t);n(t,r),_(r,`card bg-base-100 shadow`);let h=i(`div`,r);n(r,h),_(h,`card-body grid gap-6`);let v=i(`div`,h);n(h,v);let y=i(`h2`,v);n(v,y),_(y,`text-lg font-semibold mb-2`),n(y,e(`Text Input`));let b=i(`input`,v);n(v,b),_(b,`input input-bordered w-full`),o(()=>{u(b,S.value)}),m(b,`input`,e=>{S.value=e.target.value}),c(b,`placeholder`,`Edit me`);let x=i(`p`,v);n(v,x),_(x,`mt-2 text-gray-700`);let T=l(x);n(x,T),o(()=>{p(T,S.value)});let E=i(`div`,h);n(h,E);let D=i(`h2`,E);n(E,D),_(D,`text-lg font-semibold mb-2`),n(D,e(`Checkbox`));let O=i(`div`,E);n(E,O),_(O,`flex items-center gap-2`);let k=i(`input`,O);n(O,k),c(k,`id`,`checkbox`),c(k,`type`,`checkbox`),_(k,`checkbox`),o(()=>{f(k,!!te.value)}),m(k,`change`,e=>{te.value=e.target.checked});let A=i(`label`,O);n(O,A),c(A,`htmlFor`,`checkbox`),_(A,`select-none`),n(A,e(`Checked: `));let oe=l(A);n(A,oe),o(()=>{p(oe,String(te.value))});let j=i(`div`,h);n(h,j);let M=i(`h2`,j);n(j,M),_(M,`text-lg font-semibold mb-2`),n(M,e(`Multi Checkbox`));let N=i(`div`,j);n(j,N),_(N,`flex items-center gap-4 flex-wrap`);let se=a(`rue:list:start`),ce=a(`rue:list:end`);n(N,se),n(N,ce);let le=new Map;o(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(e,t,r,a,h)=>{g(d(()=>{let t=s(),r=i(`label`,t);n(t,r),o(()=>{c(r,`key`,String(e))}),_(r,`inline-flex items-center gap-2`);let a=i(`input`,r);n(r,a),c(a,`type`,`checkbox`),_(a,`checkbox`),o(()=>{u(a,e)}),o(()=>{f(a,!!ne.value.includes(e))}),m(a,`change`,t=>ie(e,t.target.checked));let d=i(`span`,r);n(r,d);let h=l(d);return n(d,h),o(()=>{p(h,e)}),t}),t,r)}})});let P=i(`p`,j);n(j,P),_(P,`mt-2 text-gray-700`),n(P,e(`Checked names: `));let ue=l(P);n(P,ue),o(()=>{p(ue,ne.value.join(`, `))});let F=i(`div`,h);n(h,F);let I=i(`h2`,F);n(F,I),_(I,`text-lg font-semibold mb-2`),n(I,e(`Radio`));let L=i(`div`,F);n(F,L),_(L,`flex items-center gap-4 flex-wrap`);let R=i(`label`,L);n(L,R),c(R,`htmlFor`,`one`),_(R,`inline-flex items-center gap-2`);let z=i(`input`,R);n(R,z),c(z,`id`,`one`),c(z,`type`,`radio`),_(z,`radio`),c(z,`value`,`One`),o(()=>{f(z,C.value===`One`)}),m(z,`change`,()=>{C.value=`One`});let de=i(`span`,R);n(R,de),n(de,e(`One`));let B=i(`label`,L);n(L,B),c(B,`htmlFor`,`two`),_(B,`inline-flex items-center gap-2`);let V=i(`input`,B);n(B,V),c(V,`id`,`two`),c(V,`type`,`radio`),_(V,`radio`),c(V,`value`,`Two`),o(()=>{f(V,C.value===`Two`)}),m(V,`change`,()=>{C.value=`Two`});let fe=i(`span`,B);n(B,fe),n(fe,e(`Two`));let H=i(`p`,F);n(F,H),_(H,`mt-2 text-gray-700`),n(H,e(`Picked: `));let pe=l(H);n(H,pe),o(()=>{p(pe,C.value)});let U=i(`div`,h);n(h,U);let W=i(`h2`,U);n(U,W),_(W,`text-lg font-semibold mb-2`),n(W,e(`Select`));let G=i(`select`,U);n(U,G),_(G,`select select-bordered`),o(()=>{u(G,w.value)}),m(G,`change`,e=>{w.value=e.target.value});let K=i(`option`,G);n(G,K),c(K,`value`,``),n(K,e(`Please select one`));let q=i(`option`,G);n(G,q),c(q,`value`,`A`),n(q,e(`A`));let J=i(`option`,G);n(G,J),c(J,`value`,`B`),n(J,e(`B`));let Y=i(`option`,G);n(G,Y),c(Y,`value`,`C`),n(Y,e(`C`));let X=i(`p`,U);n(U,X),_(X,`mt-2 text-gray-700`),n(X,e(`Selected: `));let me=l(X);n(X,me),o(()=>{p(me,w.value)});let Z=i(`div`,h);n(h,Z);let he=i(`h2`,Z);n(Z,he),_(he,`text-lg font-semibold mb-2`),n(he,e(`Multi Select`));let Q=i(`select`,Z);n(Z,Q),_(Q,`select select-bordered w-[160px]`),c(Q,`multiple`,``),o(()=>{u(Q,re.value)}),m(Q,`change`,ae);let ge=i(`option`,Q);n(Q,ge),c(ge,`value`,`A`),n(ge,e(`A`));let _e=i(`option`,Q);n(Q,_e),c(_e,`value`,`B`),n(_e,e(`B`));let ve=i(`option`,Q);n(Q,ve),c(ve,`value`,`C`),n(ve,e(`C`));let $=i(`p`,Z);n(Z,$),_($,`mt-2 text-gray-700`),n($,e(`Selected: `));let ye=l($);return n($,ye),o(()=>{p(ye,re.value.join(`, `))}),t}):``;t(()=>g(r,D,k))}),r})}),h,y),h})};export{S as default};