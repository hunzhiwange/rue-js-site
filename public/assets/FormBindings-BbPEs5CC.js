import{F as e,G as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,Z as u,d,dt as f,ht as p,l as m,st as h,t as g,vt as _,z as v}from"./vapor-runtime-BuwLbCGk.js";import{a as y,n as ee}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as b}from"./Code-DQxnq0in.js";import{t as x}from"./SidebarPlaygroundExample-BwOo72z2.js";var S=()=>{let{text:S,checked:C,checkedNames:te,picked:w,selected:ne,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>p(()=>{let e=y(`ref:1:0`,()=>h(`Edit me`)),t=y(`ref:1:1`,()=>h(!0)),n=y(`ref:1:2`,()=>h([`Jack`])),r=y(`ref:1:3`,()=>h(`One`)),i=y(`ref:1:4`,()=>h(`A`)),a=y(`ref:1:5`,()=>h([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:i,multiSelected:a,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{a.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>h(`preview`))}}));return d(p=>{let h=n(),y=e(`rue:component:anchor`);return o(h,y),m(g(x,{children:d(()=>{let p=n(),h=i(`h1`,p);o(p,h),r(h,`text-5xl font-semibold mb-4 md:mb-4`),o(h,c(`表单绑定（移植自 Vue）`));let y=i(`div`,p);o(p,y),l(y,`role`,`tablist`),r(y,`tabs tabs-box`);let x=i(`button`,y);o(y,x),l(x,`role`,`tab`),_(()=>{r(x,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),a(x,`click`,()=>{T.value=`preview`}),o(x,c(`效果`));let E=i(`button`,y);o(y,E),l(E,`role`,`tab`),_(()=>{r(E,String(`tab ${T.value===`code`?`tab-active`:``}`))}),a(E,`click`,()=>{T.value=`code`}),o(E,c(`代码`));let D=i(`div`,p);o(p,D),r(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=e(`rue:slot:anchor`);o(D,O),_(()=>{let t=T.value===`code`?d(()=>{let t=n(),a=i(`div`,t);o(t,a),r(a,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let s=i(`div`,a);o(a,s),r(s,`card-body p-0`);let c=e(`rue:component:anchor`);return o(s,c),_(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});f(()=>m(e,s,c))}),t}):``;f(()=>m(t,D,O))}),o(D,c(` `));let k=e(`rue:slot:anchor`);return o(D,k),_(()=>{let p=T.value===`preview`?d(()=>{let f=n(),p=i(`div`,f);o(f,p),r(p,`card bg-base-100 shadow`);let h=i(`div`,p);o(p,h),r(h,`card-body grid gap-6`);let g=i(`div`,h);o(h,g);let y=i(`h2`,g);o(g,y),r(y,`text-lg font-semibold mb-2`),o(y,c(`Text Input`));let b=i(`input`,g);o(g,b),r(b,`input input-bordered w-full`),_(()=>{u(b,S.value)}),a(b,`input`,e=>{S.value=e.target.value}),l(b,`placeholder`,`Edit me`);let x=i(`p`,g);o(g,x),r(x,`mt-2 text-gray-700`);let T=v(x);o(x,T),_(()=>{s(T,S.value)});let E=i(`div`,h);o(h,E);let D=i(`h2`,E);o(E,D),r(D,`text-lg font-semibold mb-2`),o(D,c(`Checkbox`));let O=i(`div`,E);o(E,O),r(O,`flex items-center gap-2`);let k=i(`input`,O);o(O,k),l(k,`id`,`checkbox`),l(k,`type`,`checkbox`),r(k,`checkbox`),_(()=>{t(k,!!C.value)}),a(k,`change`,e=>{C.value=e.target.checked});let A=i(`label`,O);o(O,A),l(A,`htmlFor`,`checkbox`),r(A,`select-none`),o(A,c(`Checked: `));let oe=v(A);o(A,oe),_(()=>{s(oe,String(C.value))});let j=i(`div`,h);o(h,j);let M=i(`h2`,j);o(j,M),r(M,`text-lg font-semibold mb-2`),o(M,c(`Multi Checkbox`));let N=i(`div`,j);o(j,N),r(N,`flex items-center gap-4 flex-wrap`);let se=e(`rue:list:start`),ce=e(`rue:list:end`);o(N,se),o(N,ce);let le=new Map;_(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(e,c,f,p,h)=>{m(d(()=>{let c=n(),d=i(`label`,c);o(c,d),_(()=>{l(d,`key`,String(e))}),r(d,`inline-flex items-center gap-2`);let f=i(`input`,d);o(d,f),l(f,`type`,`checkbox`),r(f,`checkbox`),_(()=>{u(f,e)}),_(()=>{t(f,!!te.value.includes(e))}),a(f,`change`,t=>ie(e,t.target.checked));let p=i(`span`,d);o(d,p);let m=v(p);return o(p,m),_(()=>{s(m,e)}),c}),c,f)}})});let P=i(`p`,j);o(j,P),r(P,`mt-2 text-gray-700`),o(P,c(`Checked names: `));let ue=v(P);o(P,ue),_(()=>{s(ue,te.value.join(`, `))});let F=i(`div`,h);o(h,F);let de=i(`h2`,F);o(F,de),r(de,`text-lg font-semibold mb-2`),o(de,c(`Radio`));let I=i(`div`,F);o(F,I),r(I,`flex items-center gap-4 flex-wrap`);let L=i(`label`,I);o(I,L),l(L,`htmlFor`,`one`),r(L,`inline-flex items-center gap-2`);let R=i(`input`,L);o(L,R),l(R,`id`,`one`),l(R,`type`,`radio`),r(R,`radio`),l(R,`value`,`One`),_(()=>{t(R,w.value===`One`)}),a(R,`change`,()=>{w.value=`One`});let fe=i(`span`,L);o(L,fe),o(fe,c(`One`));let z=i(`label`,I);o(I,z),l(z,`htmlFor`,`two`),r(z,`inline-flex items-center gap-2`);let B=i(`input`,z);o(z,B),l(B,`id`,`two`),l(B,`type`,`radio`),r(B,`radio`),l(B,`value`,`Two`),_(()=>{t(B,w.value===`Two`)}),a(B,`change`,()=>{w.value=`Two`});let pe=i(`span`,z);o(z,pe),o(pe,c(`Two`));let V=i(`p`,F);o(F,V),r(V,`mt-2 text-gray-700`),o(V,c(`Picked: `));let me=v(V);o(V,me),_(()=>{s(me,w.value)});let H=i(`div`,h);o(h,H);let U=i(`h2`,H);o(H,U),r(U,`text-lg font-semibold mb-2`),o(U,c(`Select`));let W=i(`select`,H);o(H,W),r(W,`select select-bordered`),_(()=>{u(W,ne.value)}),a(W,`change`,e=>{ne.value=e.target.value});let G=i(`option`,W);o(W,G),l(G,`value`,``),o(G,c(`Please select one`));let K=i(`option`,W);o(W,K),l(K,`value`,`A`),o(K,c(`A`));let q=i(`option`,W);o(W,q),l(q,`value`,`B`),o(q,c(`B`));let J=i(`option`,W);o(W,J),l(J,`value`,`C`),o(J,c(`C`));let Y=i(`p`,H);o(H,Y),r(Y,`mt-2 text-gray-700`),o(Y,c(`Selected: `));let he=v(Y);o(Y,he),_(()=>{s(he,ne.value)});let X=i(`div`,h);o(h,X);let Z=i(`h2`,X);o(X,Z),r(Z,`text-lg font-semibold mb-2`),o(Z,c(`Multi Select`));let Q=i(`select`,X);o(X,Q),r(Q,`select select-bordered w-[160px]`),l(Q,`multiple`,``),_(()=>{u(Q,re.value)}),a(Q,`change`,ae);let ge=i(`option`,Q);o(Q,ge),l(ge,`value`,`A`),o(ge,c(`A`));let _e=i(`option`,Q);o(Q,_e),l(_e,`value`,`B`),o(_e,c(`B`));let ve=i(`option`,Q);o(Q,ve),l(ve,`value`,`C`),o(ve,c(`C`));let $=i(`p`,X);o(X,$),r($,`mt-2 text-gray-700`),o($,c(`Selected: `));let ye=v($);return o($,ye),_(()=>{s(ye,re.value.join(`, `))}),f}):``;f(()=>m(p,D,k))}),p})}),h,y),h})};export{S as default};