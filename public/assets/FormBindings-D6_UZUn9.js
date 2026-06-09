import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,pt as p,qt as m,s as h,st as g,t as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as ee}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as b}from"./Code-5DOEyGxf.js";import{r as x}from"./SidebarPlaygroundExample-cASgDpH3.js";var S=()=>{let{text:S,checked:te,checkedNames:ne,picked:C,selected:w,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>m(()=>{let e=y(`ref:1:0`,()=>i(`Edit me`)),t=y(`ref:1:1`,()=>i(!0)),n=y(`ref:1:2`,()=>i([`Jack`])),r=y(`ref:1:3`,()=>i(`One`)),a=y(`ref:1:4`,()=>i(`A`)),o=y(`ref:1:5`,()=>i([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:a,multiSelected:o,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{o.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>i(`preview`))}}));return u(i=>{let m=r(),y=s(`rue:component:anchor`);return o(m,y),h(_(x,{children:u(()=>{let i=r(),m=e(`h1`,i);o(i,m),c(m,`text-5xl font-semibold mb-4 md:mb-4`),o(m,l(`表单绑定（移植自 Vue）`));let y=e(`div`,i);o(i,y),f(y,`role`,`tablist`),c(y,`tabs tabs-box`);let x=e(`button`,y);o(y,x),f(x,`role`,`tab`),a(()=>{c(x,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),n(x,`click`,()=>{T.value=`preview`}),o(x,l(`效果`));let E=e(`button`,y);o(y,E),f(E,`role`,`tab`),a(()=>{c(E,String(`tab ${T.value===`code`?`tab-active`:``}`))}),n(E,`click`,()=>{T.value=`code`}),o(E,l(`代码`));let D=e(`div`,i);o(i,D),c(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=s(`rue:slot:anchor`);o(D,O),a(()=>{let n=T.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});t(()=>h(e,l,u))}),n}):``;t(()=>h(n,D,O))}),o(D,l(` `));let k=s(`rue:slot:anchor`);return o(D,k),a(()=>{let i=T.value===`preview`?u(()=>{let t=r(),i=e(`div`,t);o(t,i),c(i,`card bg-base-100 shadow`);let m=e(`div`,i);o(i,m),c(m,`card-body grid gap-6`);let _=e(`div`,m);o(m,_);let y=e(`h2`,_);o(_,y),c(y,`text-lg font-semibold mb-2`),o(y,l(`Text Input`));let b=e(`input`,_);o(_,b),c(b,`input input-bordered w-full`),a(()=>{p(b,S.value)}),n(b,`input`,e=>{S.value=e.target.value}),f(b,`placeholder`,`Edit me`);let x=e(`p`,_);o(_,x),c(x,`mt-2 text-gray-700`);let T=v(x);o(x,T),a(()=>{d(T,S.value)});let E=e(`div`,m);o(m,E);let D=e(`h2`,E);o(E,D),c(D,`text-lg font-semibold mb-2`),o(D,l(`Checkbox`));let O=e(`div`,E);o(E,O),c(O,`flex items-center gap-2`);let k=e(`input`,O);o(O,k),f(k,`id`,`checkbox`),f(k,`type`,`checkbox`),c(k,`checkbox`),a(()=>{g(k,!!te.value)}),n(k,`change`,e=>{te.value=e.target.checked});let A=e(`label`,O);o(O,A),f(A,`htmlFor`,`checkbox`),c(A,`select-none`),o(A,l(`Checked: `));let oe=v(A);o(A,oe),a(()=>{d(oe,String(te.value))});let j=e(`div`,m);o(m,j);let M=e(`h2`,j);o(j,M),c(M,`text-lg font-semibold mb-2`),o(M,l(`Multi Checkbox`));let N=e(`div`,j);o(j,N),c(N,`flex items-center gap-4 flex-wrap`);let se=s(`rue:list:start`),ce=s(`rue:list:end`);o(N,se),o(N,ce);let le=new Map;a(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(t,i,s,l,m)=>{h(u(()=>{let i=r(),s=e(`label`,i);o(i,s),a(()=>{f(s,`key`,String(t))}),c(s,`inline-flex items-center gap-2`);let l=e(`input`,s);o(s,l),f(l,`type`,`checkbox`),c(l,`checkbox`),a(()=>{p(l,t)}),a(()=>{g(l,!!ne.value.includes(t))}),n(l,`change`,e=>ie(t,e.target.checked));let u=e(`span`,s);o(s,u);let m=v(u);return o(u,m),a(()=>{d(m,t)}),i}),i,s)}})});let P=e(`p`,j);o(j,P),c(P,`mt-2 text-gray-700`),o(P,l(`Checked names: `));let ue=v(P);o(P,ue),a(()=>{d(ue,ne.value.join(`, `))});let F=e(`div`,m);o(m,F);let I=e(`h2`,F);o(F,I),c(I,`text-lg font-semibold mb-2`),o(I,l(`Radio`));let L=e(`div`,F);o(F,L),c(L,`flex items-center gap-4 flex-wrap`);let R=e(`label`,L);o(L,R),f(R,`htmlFor`,`one`),c(R,`inline-flex items-center gap-2`);let z=e(`input`,R);o(R,z),f(z,`id`,`one`),f(z,`type`,`radio`),c(z,`radio`),f(z,`value`,`One`),a(()=>{g(z,C.value===`One`)}),n(z,`change`,()=>{C.value=`One`});let de=e(`span`,R);o(R,de),o(de,l(`One`));let B=e(`label`,L);o(L,B),f(B,`htmlFor`,`two`),c(B,`inline-flex items-center gap-2`);let V=e(`input`,B);o(B,V),f(V,`id`,`two`),f(V,`type`,`radio`),c(V,`radio`),f(V,`value`,`Two`),a(()=>{g(V,C.value===`Two`)}),n(V,`change`,()=>{C.value=`Two`});let fe=e(`span`,B);o(B,fe),o(fe,l(`Two`));let H=e(`p`,F);o(F,H),c(H,`mt-2 text-gray-700`),o(H,l(`Picked: `));let pe=v(H);o(H,pe),a(()=>{d(pe,C.value)});let U=e(`div`,m);o(m,U);let W=e(`h2`,U);o(U,W),c(W,`text-lg font-semibold mb-2`),o(W,l(`Select`));let G=e(`select`,U);o(U,G),c(G,`select select-bordered`),a(()=>{p(G,w.value)}),n(G,`change`,e=>{w.value=e.target.value});let K=e(`option`,G);o(G,K),f(K,`value`,``),o(K,l(`Please select one`));let q=e(`option`,G);o(G,q),f(q,`value`,`A`),o(q,l(`A`));let J=e(`option`,G);o(G,J),f(J,`value`,`B`),o(J,l(`B`));let Y=e(`option`,G);o(G,Y),f(Y,`value`,`C`),o(Y,l(`C`));let X=e(`p`,U);o(U,X),c(X,`mt-2 text-gray-700`),o(X,l(`Selected: `));let me=v(X);o(X,me),a(()=>{d(me,w.value)});let Z=e(`div`,m);o(m,Z);let he=e(`h2`,Z);o(Z,he),c(he,`text-lg font-semibold mb-2`),o(he,l(`Multi Select`));let Q=e(`select`,Z);o(Z,Q),c(Q,`select select-bordered w-[160px]`),f(Q,`multiple`,``),a(()=>{p(Q,re.value)}),n(Q,`change`,ae);let ge=e(`option`,Q);o(Q,ge),f(ge,`value`,`A`),o(ge,l(`A`));let _e=e(`option`,Q);o(Q,_e),f(_e,`value`,`B`),o(_e,l(`B`));let ve=e(`option`,Q);o(Q,ve),f(ve,`value`,`C`),o(ve,l(`C`));let $=e(`p`,Z);o(Z,$),c($,`mt-2 text-gray-700`),o($,l(`Selected: `));let ye=v($);return o($,ye),a(()=>{d(ye,re.value.join(`, `))}),t}):``;t(()=>h(i,D,k))}),i})}),m,y),m})};export{S as default};