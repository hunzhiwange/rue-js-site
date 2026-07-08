import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ft as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _,yt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as ee}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./Code-BoXKy3gJ.js";import{r as x}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var S=()=>{let{text:S,checked:te,checkedNames:ne,picked:C,selected:w,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>f(()=>{let e=y(`ref:1:0`,()=>n(`Edit me`)),t=y(`ref:1:1`,()=>n(!0)),r=y(`ref:1:2`,()=>n([`Jack`])),i=y(`ref:1:3`,()=>n(`One`)),a=y(`ref:1:4`,()=>n(`A`)),o=y(`ref:1:5`,()=>n([`A`]));return{text:e,checked:t,checkedNames:r,picked:i,selected:a,multiSelected:o,toggleCheckedName:(e,t)=>{r.value=t?Array.from(new Set([...r.value,e])):r.value.filter(t=>t!==e)},onMultiSelectChange:e=>{o.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>n(`preview`))}}));return l(n=>{let f=u(),y=_(`rue:component:anchor`);return e(f,y),d(h(x,{children:l(()=>{let n=u(),f=m(`h1`,n);e(n,f),p(f,`text-5xl font-semibold mb-4 md:mb-4`),e(f,c(`表单绑定（移植自 Vue）`));let y=m(`div`,n);e(n,y),o(y,`role`,`tablist`),p(y,`tabs tabs-box`);let x=m(`button`,y);e(y,x),o(x,`role`,`tab`),t(()=>{p(x,`tab ${T.value===`preview`?`tab-active`:``}`)}),r(x,`click`,()=>{T.value=`preview`}),e(x,c(`效果`));let E=m(`button`,y);e(y,E),o(E,`role`,`tab`),t(()=>{p(E,`tab ${T.value===`code`?`tab-active`:``}`)}),r(E,`click`,()=>{T.value=`code`}),e(E,c(`代码`));let D=m(`div`,n);e(n,D),p(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=_(`rue:slot:anchor`);e(D,O),t(()=>{let n=T.value===`code`?l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let i=m(`div`,r);e(r,i),p(i,`card-body p-0`);let a=_(`rue:component:anchor`);return e(i,a),t(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});g(()=>d(e,i,a))}),n}):``;g(()=>d(n,D,O))}),e(D,c(` `));let k=_(`rue:slot:anchor`);return e(D,k),t(()=>{let n=T.value===`preview`?l(()=>{let n=u(),f=m(`div`,n);e(n,f),p(f,`card bg-base-100 shadow`);let h=m(`div`,f);e(f,h),p(h,`card-body grid gap-6`);let g=m(`div`,h);e(h,g);let y=m(`h2`,g);e(g,y),p(y,`text-lg font-semibold mb-2`),e(y,c(`Text Input`));let b=m(`input`,g);e(g,b),p(b,`input input-bordered w-full`),t(()=>{v(b,S.value)}),r(b,`input`,e=>{S.value=e.target.value}),o(b,`placeholder`,`Edit me`);let x=m(`p`,g);e(g,x),p(x,`mt-2 text-gray-700`);let T=i(x);e(x,T),t(()=>{a(T,S.value)});let E=m(`div`,h);e(h,E);let D=m(`h2`,E);e(E,D),p(D,`text-lg font-semibold mb-2`),e(D,c(`Checkbox`));let O=m(`div`,E);e(E,O),p(O,`flex items-center gap-2`);let k=m(`input`,O);e(O,k),o(k,`id`,`checkbox`),o(k,`type`,`checkbox`),p(k,`checkbox`),t(()=>{s(k,!!te.value)}),r(k,`change`,e=>{te.value=e.target.checked});let A=m(`label`,O);e(O,A),o(A,`htmlFor`,`checkbox`),p(A,`select-none`),e(A,c(`Checked: `));let oe=i(A);e(A,oe),t(()=>{a(oe,String(te.value))});let j=m(`div`,h);e(h,j);let M=m(`h2`,j);e(j,M),p(M,`text-lg font-semibold mb-2`),e(M,c(`Multi Checkbox`));let N=m(`div`,j);e(j,N),p(N,`flex items-center gap-4 flex-wrap`);let se=_(`rue:list:start`),ce=_(`rue:list:end`);e(N,se),e(N,ce);let le=new Map;t(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(n,c,f,h,g)=>{d(l(()=>{let c=u(),l=m(`label`,c);e(c,l),t(()=>{o(l,`key`,String(n))}),p(l,`inline-flex items-center gap-2`);let d=m(`input`,l);e(l,d),o(d,`type`,`checkbox`),p(d,`checkbox`),t(()=>{v(d,n)}),t(()=>{s(d,!!ne.value.includes(n))}),r(d,`change`,e=>ie(n,e.target.checked));let f=m(`span`,l);e(l,f);let h=i(f);return e(f,h),t(()=>{a(h,n)}),c}),c,f)}})});let P=m(`p`,j);e(j,P),p(P,`mt-2 text-gray-700`),e(P,c(`Checked names: `));let ue=i(P);e(P,ue),t(()=>{a(ue,ne.value.join(`, `))});let F=m(`div`,h);e(h,F);let I=m(`h2`,F);e(F,I),p(I,`text-lg font-semibold mb-2`),e(I,c(`Radio`));let L=m(`div`,F);e(F,L),p(L,`flex items-center gap-4 flex-wrap`);let R=m(`label`,L);e(L,R),o(R,`htmlFor`,`one`),p(R,`inline-flex items-center gap-2`);let z=m(`input`,R);e(R,z),o(z,`id`,`one`),o(z,`type`,`radio`),p(z,`radio`),o(z,`value`,`One`),t(()=>{s(z,C.value===`One`)}),r(z,`change`,()=>{C.value=`One`});let de=m(`span`,R);e(R,de),e(de,c(`One`));let B=m(`label`,L);e(L,B),o(B,`htmlFor`,`two`),p(B,`inline-flex items-center gap-2`);let V=m(`input`,B);e(B,V),o(V,`id`,`two`),o(V,`type`,`radio`),p(V,`radio`),o(V,`value`,`Two`),t(()=>{s(V,C.value===`Two`)}),r(V,`change`,()=>{C.value=`Two`});let fe=m(`span`,B);e(B,fe),e(fe,c(`Two`));let H=m(`p`,F);e(F,H),p(H,`mt-2 text-gray-700`),e(H,c(`Picked: `));let pe=i(H);e(H,pe),t(()=>{a(pe,C.value)});let U=m(`div`,h);e(h,U);let W=m(`h2`,U);e(U,W),p(W,`text-lg font-semibold mb-2`),e(W,c(`Select`));let G=m(`select`,U);e(U,G),p(G,`select select-bordered`),t(()=>{v(G,w.value)}),r(G,`change`,e=>{w.value=e.target.value});let K=m(`option`,G);e(G,K),o(K,`value`,``),e(K,c(`Please select one`));let q=m(`option`,G);e(G,q),o(q,`value`,`A`),e(q,c(`A`));let J=m(`option`,G);e(G,J),o(J,`value`,`B`),e(J,c(`B`));let Y=m(`option`,G);e(G,Y),o(Y,`value`,`C`),e(Y,c(`C`));let X=m(`p`,U);e(U,X),p(X,`mt-2 text-gray-700`),e(X,c(`Selected: `));let me=i(X);e(X,me),t(()=>{a(me,w.value)});let Z=m(`div`,h);e(h,Z);let he=m(`h2`,Z);e(Z,he),p(he,`text-lg font-semibold mb-2`),e(he,c(`Multi Select`));let Q=m(`select`,Z);e(Z,Q),p(Q,`select select-bordered w-[160px]`),o(Q,`multiple`,``),t(()=>{v(Q,re.value)}),r(Q,`change`,ae);let ge=m(`option`,Q);e(Q,ge),o(ge,`value`,`A`),e(ge,c(`A`));let _e=m(`option`,Q);e(Q,_e),o(_e,`value`,`B`),e(_e,c(`B`));let ve=m(`option`,Q);e(Q,ve),o(ve,`value`,`C`),e(ve,c(`C`));let $=m(`p`,Z);e(Z,$),p($,`mt-2 text-gray-700`),e($,c(`Selected: `));let ye=i($);return e($,ye),t(()=>{a(ye,re.value.join(`, `))}),n}):``;g(()=>d(n,D,k))}),n})}),f,y),f})};export{S as default};