import{F as e,G as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,Z as u,_t as d,d as f,l as p,mt as m,ot as h,t as g,ut as _,z as v}from"./vapor-runtime-Dfq7aA8z.js";import{a as y,n as ee}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as b}from"./Code-CLTo4rRM.js";import{t as x}from"./SidebarPlaygroundExample-DOFGFBd1.js";var S=()=>{let{text:S,checked:C,checkedNames:te,picked:w,selected:ne,multiSelected:re,toggleCheckedName:ie,onMultiSelectChange:ae,activeTab:T}=y(`useSetup:0:0`,()=>m(()=>{let e=y(`ref:1:0`,()=>h(`Edit me`)),t=y(`ref:1:1`,()=>h(!0)),n=y(`ref:1:2`,()=>h([`Jack`])),r=y(`ref:1:3`,()=>h(`One`)),i=y(`ref:1:4`,()=>h(`A`)),a=y(`ref:1:5`,()=>h([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:i,multiSelected:a,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{a.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>h(`preview`))}}));return f(m=>{let h=n(),y=e(`rue:component:anchor`);return o(h,y),p(g(x,{children:f(()=>{let m=n(),h=i(`h1`,m);o(m,h),r(h,`text-5xl font-semibold mb-4 md:mb-4`),o(h,c(`表单绑定（移植自 Vue）`));let y=i(`div`,m);o(m,y),l(y,`role`,`tablist`),r(y,`tabs tabs-box`);let x=i(`button`,y);o(y,x),l(x,`role`,`tab`),d(()=>{r(x,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),a(x,`click`,()=>{T.value=`preview`}),o(x,c(`效果`));let E=i(`button`,y);o(y,E),l(E,`role`,`tab`),d(()=>{r(E,String(`tab ${T.value===`code`?`tab-active`:``}`))}),a(E,`click`,()=>{T.value=`code`}),o(E,c(`代码`));let D=i(`div`,m);o(m,D),r(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=e(`rue:slot:anchor`);o(D,O),d(()=>{let t=T.value===`code`?f(()=>{let t=n(),a=i(`div`,t);o(t,a),r(a,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let s=i(`div`,a);o(a,s),r(s,`card-body p-0`);let c=e(`rue:component:anchor`);return o(s,c),d(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});_(()=>p(e,s,c))}),t}):``;_(()=>p(t,D,O))}),o(D,c(` `));let k=e(`rue:slot:anchor`);return o(D,k),d(()=>{let m=T.value===`preview`?f(()=>{let m=n(),h=i(`div`,m);o(m,h),r(h,`card bg-base-100 shadow`);let g=i(`div`,h);o(h,g),r(g,`card-body grid gap-6`);let _=i(`div`,g);o(g,_);let y=i(`h2`,_);o(_,y),r(y,`text-lg font-semibold mb-2`),o(y,c(`Text Input`));let b=i(`input`,_);o(_,b),r(b,`input input-bordered w-full`),d(()=>{u(b,S.value)}),a(b,`input`,e=>{S.value=e.target.value}),l(b,`placeholder`,`Edit me`);let x=i(`p`,_);o(_,x),r(x,`mt-2 text-gray-700`);let T=v(x);o(x,T),d(()=>{s(T,S.value)});let E=i(`div`,g);o(g,E);let D=i(`h2`,E);o(E,D),r(D,`text-lg font-semibold mb-2`),o(D,c(`Checkbox`));let O=i(`div`,E);o(E,O),r(O,`flex items-center gap-2`);let k=i(`input`,O);o(O,k),l(k,`id`,`checkbox`),l(k,`type`,`checkbox`),r(k,`checkbox`),d(()=>{t(k,!!C.value)}),a(k,`change`,e=>{C.value=e.target.checked});let A=i(`label`,O);o(O,A),l(A,`htmlFor`,`checkbox`),r(A,`select-none`),o(A,c(`Checked: `));let oe=v(A);o(A,oe),d(()=>{s(oe,String(C.value))});let j=i(`div`,g);o(g,j);let M=i(`h2`,j);o(j,M),r(M,`text-lg font-semibold mb-2`),o(M,c(`Multi Checkbox`));let N=i(`div`,j);o(j,N),r(N,`flex items-center gap-4 flex-wrap`);let se=e(`rue:list:start`),ce=e(`rue:list:end`);o(N,se),o(N,ce);let le=new Map;d(()=>{le=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:le,parent:N,before:ce,singleRoot:!0,trackIndex:!1,start:se,renderItem:(e,c,m,h,g)=>{p(f(()=>{let c=n(),f=i(`label`,c);o(c,f),d(()=>{l(f,`key`,String(e))}),r(f,`inline-flex items-center gap-2`);let p=i(`input`,f);o(f,p),l(p,`type`,`checkbox`),r(p,`checkbox`),d(()=>{u(p,e)}),d(()=>{t(p,!!te.value.includes(e))}),a(p,`change`,t=>ie(e,t.target.checked));let m=i(`span`,f);o(f,m);let h=v(m);return o(m,h),d(()=>{s(h,e)}),c}),c,m)}})});let P=i(`p`,j);o(j,P),r(P,`mt-2 text-gray-700`),o(P,c(`Checked names: `));let ue=v(P);o(P,ue),d(()=>{s(ue,te.value.join(`, `))});let F=i(`div`,g);o(g,F);let de=i(`h2`,F);o(F,de),r(de,`text-lg font-semibold mb-2`),o(de,c(`Radio`));let I=i(`div`,F);o(F,I),r(I,`flex items-center gap-4 flex-wrap`);let L=i(`label`,I);o(I,L),l(L,`htmlFor`,`one`),r(L,`inline-flex items-center gap-2`);let R=i(`input`,L);o(L,R),l(R,`id`,`one`),l(R,`type`,`radio`),r(R,`radio`),l(R,`value`,`One`),d(()=>{t(R,w.value===`One`)}),a(R,`change`,()=>{w.value=`One`});let fe=i(`span`,L);o(L,fe),o(fe,c(`One`));let z=i(`label`,I);o(I,z),l(z,`htmlFor`,`two`),r(z,`inline-flex items-center gap-2`);let B=i(`input`,z);o(z,B),l(B,`id`,`two`),l(B,`type`,`radio`),r(B,`radio`),l(B,`value`,`Two`),d(()=>{t(B,w.value===`Two`)}),a(B,`change`,()=>{w.value=`Two`});let pe=i(`span`,z);o(z,pe),o(pe,c(`Two`));let V=i(`p`,F);o(F,V),r(V,`mt-2 text-gray-700`),o(V,c(`Picked: `));let me=v(V);o(V,me),d(()=>{s(me,w.value)});let H=i(`div`,g);o(g,H);let U=i(`h2`,H);o(H,U),r(U,`text-lg font-semibold mb-2`),o(U,c(`Select`));let W=i(`select`,H);o(H,W),r(W,`select select-bordered`),d(()=>{u(W,ne.value)}),a(W,`change`,e=>{ne.value=e.target.value});let G=i(`option`,W);o(W,G),l(G,`value`,``),o(G,c(`Please select one`));let K=i(`option`,W);o(W,K),l(K,`value`,`A`),o(K,c(`A`));let q=i(`option`,W);o(W,q),l(q,`value`,`B`),o(q,c(`B`));let J=i(`option`,W);o(W,J),l(J,`value`,`C`),o(J,c(`C`));let Y=i(`p`,H);o(H,Y),r(Y,`mt-2 text-gray-700`),o(Y,c(`Selected: `));let he=v(Y);o(Y,he),d(()=>{s(he,ne.value)});let X=i(`div`,g);o(g,X);let Z=i(`h2`,X);o(X,Z),r(Z,`text-lg font-semibold mb-2`),o(Z,c(`Multi Select`));let Q=i(`select`,X);o(X,Q),r(Q,`select select-bordered w-[160px]`),l(Q,`multiple`,``),d(()=>{u(Q,re.value)}),a(Q,`change`,ae);let ge=i(`option`,Q);o(Q,ge),l(ge,`value`,`A`),o(ge,c(`A`));let _e=i(`option`,Q);o(Q,_e),l(_e,`value`,`B`),o(_e,c(`B`));let ve=i(`option`,Q);o(Q,ve),l(ve,`value`,`C`),o(ve,c(`C`));let $=i(`p`,X);o(X,$),r($,`mt-2 text-gray-700`),o($,c(`Selected: `));let ye=v($);return o($,ye),d(()=>{s(ye,re.value.join(`, `))}),m}):``;_(()=>p(m,D,k))}),m})}),h,y),h})};export{S as default};