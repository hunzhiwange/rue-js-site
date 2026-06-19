import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,ct as s,et as c,ht as l,l as u,lt as d,mt as f,nt as p,o as m,st as h,t as g,tt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as ee}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as b}from"./Code-BIscIyEp.js";import{r as x}from"./SidebarPlaygroundExample-CEz1fABX.js";var S=()=>{let{text:S,checked:C,checkedNames:te,picked:w,selected:ne,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>o(()=>{let e=y(`ref:1:0`,()=>v(`Edit me`)),t=y(`ref:1:1`,()=>v(!0)),n=y(`ref:1:2`,()=>v([`Jack`])),r=y(`ref:1:3`,()=>v(`One`)),i=y(`ref:1:4`,()=>v(`A`)),a=y(`ref:1:5`,()=>v([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:i,multiSelected:a,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{a.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>v(`preview`))}}));return u(o=>{let v=e(),y=t(`rue:component:anchor`);return i(v,y),m(g(x,{children:u(()=>{let o=e(),v=c(`h1`,o);i(o,v),d(v,`text-5xl font-semibold mb-4 md:mb-4`),i(v,_(`表单绑定（移植自 Vue）`));let y=c(`div`,o);i(o,y),h(y,`role`,`tablist`),d(y,`tabs tabs-box`);let x=c(`button`,y);i(y,x),h(x,`role`,`tab`),n(()=>{d(x,`tab ${T.value===`preview`?`tab-active`:``}`)}),a(x,`click`,()=>{T.value=`preview`}),i(x,_(`效果`));let E=c(`button`,y);i(y,E),h(E,`role`,`tab`),n(()=>{d(E,`tab ${T.value===`code`?`tab-active`:``}`)}),a(E,`click`,()=>{T.value=`code`}),i(E,_(`代码`));let D=c(`div`,o);i(o,D),d(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=t(`rue:slot:anchor`);i(D,O),n(()=>{let a=T.value===`code`?u(()=>{let a=e(),o=c(`div`,a);i(a,o),d(o,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let s=c(`div`,o);i(o,s),d(s,`card-body p-0`);let l=t(`rue:component:anchor`);return i(s,l),n(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});r(()=>m(e,s,l))}),a}):``;r(()=>m(a,D,O))}),i(D,_(` `));let k=t(`rue:slot:anchor`);return i(D,k),n(()=>{let o=T.value===`preview`?u(()=>{let r=e(),o=c(`div`,r);i(r,o),d(o,`card bg-base-100 shadow`);let g=c(`div`,o);i(o,g),d(g,`card-body grid gap-6`);let v=c(`div`,g);i(g,v);let y=c(`h2`,v);i(v,y),d(y,`text-lg font-semibold mb-2`),i(y,_(`Text Input`));let b=c(`input`,v);i(v,b),d(b,`input input-bordered w-full`),n(()=>{f(b,S.value)}),a(b,`input`,e=>{S.value=e.target.value}),h(b,`placeholder`,`Edit me`);let x=c(`p`,v);i(v,x),d(x,`mt-2 text-gray-700`);let T=p(x);i(x,T),n(()=>{l(T,S.value)});let E=c(`div`,g);i(g,E);let D=c(`h2`,E);i(E,D),d(D,`text-lg font-semibold mb-2`),i(D,_(`Checkbox`));let O=c(`div`,E);i(E,O),d(O,`flex items-center gap-2`);let k=c(`input`,O);i(O,k),h(k,`id`,`checkbox`),h(k,`type`,`checkbox`),d(k,`checkbox`),n(()=>{s(k,!!C.value)}),a(k,`change`,e=>{C.value=e.target.checked});let A=c(`label`,O);i(O,A),h(A,`htmlFor`,`checkbox`),d(A,`select-none`),i(A,_(`Checked: `));let oe=p(A);i(A,oe),n(()=>{l(oe,String(C.value))});let j=c(`div`,g);i(g,j);let M=c(`h2`,j);i(j,M),d(M,`text-lg font-semibold mb-2`),i(M,_(`Multi Checkbox`));let N=c(`div`,j);i(j,N),d(N,`flex items-center gap-4 flex-wrap`);let se=t(`rue:list:start`),ce=t(`rue:list:end`);i(N,se),i(N,ce);let le=new Map;n(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(t,r,o,g,_)=>{m(u(()=>{let r=e(),o=c(`label`,r);i(r,o),n(()=>{h(o,`key`,String(t))}),d(o,`inline-flex items-center gap-2`);let u=c(`input`,o);i(o,u),h(u,`type`,`checkbox`),d(u,`checkbox`),n(()=>{f(u,t)}),n(()=>{s(u,!!te.value.includes(t))}),a(u,`change`,e=>ie(t,e.target.checked));let m=c(`span`,o);i(o,m);let g=p(m);return i(m,g),n(()=>{l(g,t)}),r}),r,o)}})});let P=c(`p`,j);i(j,P),d(P,`mt-2 text-gray-700`),i(P,_(`Checked names: `));let ue=p(P);i(P,ue),n(()=>{l(ue,te.value.join(`, `))});let F=c(`div`,g);i(g,F);let de=c(`h2`,F);i(F,de),d(de,`text-lg font-semibold mb-2`),i(de,_(`Radio`));let I=c(`div`,F);i(F,I),d(I,`flex items-center gap-4 flex-wrap`);let L=c(`label`,I);i(I,L),h(L,`htmlFor`,`one`),d(L,`inline-flex items-center gap-2`);let R=c(`input`,L);i(L,R),h(R,`id`,`one`),h(R,`type`,`radio`),d(R,`radio`),h(R,`value`,`One`),n(()=>{s(R,w.value===`One`)}),a(R,`change`,()=>{w.value=`One`});let fe=c(`span`,L);i(L,fe),i(fe,_(`One`));let z=c(`label`,I);i(I,z),h(z,`htmlFor`,`two`),d(z,`inline-flex items-center gap-2`);let B=c(`input`,z);i(z,B),h(B,`id`,`two`),h(B,`type`,`radio`),d(B,`radio`),h(B,`value`,`Two`),n(()=>{s(B,w.value===`Two`)}),a(B,`change`,()=>{w.value=`Two`});let pe=c(`span`,z);i(z,pe),i(pe,_(`Two`));let V=c(`p`,F);i(F,V),d(V,`mt-2 text-gray-700`),i(V,_(`Picked: `));let me=p(V);i(V,me),n(()=>{l(me,w.value)});let H=c(`div`,g);i(g,H);let U=c(`h2`,H);i(H,U),d(U,`text-lg font-semibold mb-2`),i(U,_(`Select`));let W=c(`select`,H);i(H,W),d(W,`select select-bordered`),n(()=>{f(W,ne.value)}),a(W,`change`,e=>{ne.value=e.target.value});let G=c(`option`,W);i(W,G),h(G,`value`,``),i(G,_(`Please select one`));let K=c(`option`,W);i(W,K),h(K,`value`,`A`),i(K,_(`A`));let q=c(`option`,W);i(W,q),h(q,`value`,`B`),i(q,_(`B`));let J=c(`option`,W);i(W,J),h(J,`value`,`C`),i(J,_(`C`));let Y=c(`p`,H);i(H,Y),d(Y,`mt-2 text-gray-700`),i(Y,_(`Selected: `));let he=p(Y);i(Y,he),n(()=>{l(he,ne.value)});let X=c(`div`,g);i(g,X);let Z=c(`h2`,X);i(X,Z),d(Z,`text-lg font-semibold mb-2`),i(Z,_(`Multi Select`));let Q=c(`select`,X);i(X,Q),d(Q,`select select-bordered w-[160px]`),h(Q,`multiple`,``),n(()=>{f(Q,re.value)}),a(Q,`change`,ae);let ge=c(`option`,Q);i(Q,ge),h(ge,`value`,`A`),i(ge,_(`A`));let _e=c(`option`,Q);i(Q,_e),h(_e,`value`,`B`),i(_e,_(`B`));let ve=c(`option`,Q);i(Q,ve),h(ve,`value`,`C`),i(ve,_(`C`));let $=c(`p`,X);i(X,$),d($,`mt-2 text-gray-700`),i($,_(`Selected: `));let ye=p($);return i($,ye),n(()=>{l(ye,re.value.join(`, `))}),r}):``;r(()=>m(o,D,k))}),o})}),v,y),v})};export{S as default};