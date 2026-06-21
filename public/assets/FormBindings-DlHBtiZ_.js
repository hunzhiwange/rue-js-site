import{$t as e,Jt as t,Q as n,Z as r,_t as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as ee}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./Code-4SUSUwRg.js";import{r as x}from"./SidebarPlaygroundExample-BEWYUWOl.js";var S=()=>{let{text:S,checked:C,checkedNames:te,picked:w,selected:T,multiSelected:ne,toggleCheckedName:re,onMultiSelectChange:ie,activeTab:E}=y(`useSetup:0:0`,()=>s(()=>{let e=y(`ref:1:0`,()=>t(`Edit me`)),n=y(`ref:1:1`,()=>t(!0)),r=y(`ref:1:2`,()=>t([`Jack`])),i=y(`ref:1:3`,()=>t(`One`)),a=y(`ref:1:4`,()=>t(`A`)),o=y(`ref:1:5`,()=>t([`A`]));return{text:e,checked:n,checkedNames:r,picked:i,selected:a,multiSelected:o,toggleCheckedName:(e,t)=>{r.value=t?Array.from(new Set([...r.value,e])):r.value.filter(t=>t!==e)},onMultiSelectChange:e=>{o.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>t(`preview`))}}));return l(t=>{let s=h(),y=o(`rue:component:anchor`);return n(s,y),f(m(x,{children:l(()=>{let t=h(),s=d(`h1`,t);n(t,s),a(s,`text-5xl font-semibold mb-4 md:mb-4`),n(s,p(`表单绑定（移植自 Vue）`));let y=d(`div`,t);n(t,y),u(y,`role`,`tablist`),a(y,`tabs tabs-box`);let x=d(`button`,y);n(y,x),u(x,`role`,`tab`),v(()=>{a(x,`tab ${E.value===`preview`?`tab-active`:``}`)}),r(x,`click`,()=>{E.value=`preview`}),n(x,p(`效果`));let D=d(`button`,y);n(y,D),u(D,`role`,`tab`),v(()=>{a(D,`tab ${E.value===`code`?`tab-active`:``}`)}),r(D,`click`,()=>{E.value=`code`}),n(D,p(`代码`));let O=d(`div`,t);n(t,O),a(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=o(`rue:slot:anchor`);n(O,k),v(()=>{let t=E.value===`code`?l(()=>{let t=h(),r=d(`div`,t);n(t,r),a(r,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let i=d(`div`,r);n(r,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return n(i,s),v(()=>{let t=m(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});e(()=>f(t,i,s))}),t}):``;e(()=>f(t,O,k))}),n(O,p(` `));let A=o(`rue:slot:anchor`);return n(O,A),v(()=>{let t=E.value===`preview`?l(()=>{let e=h(),t=d(`div`,e);n(e,t),a(t,`card bg-base-100 shadow`);let s=d(`div`,t);n(t,s),a(s,`card-body grid gap-6`);let m=d(`div`,s);n(s,m);let y=d(`h2`,m);n(m,y),a(y,`text-lg font-semibold mb-2`),n(y,p(`Text Input`));let b=d(`input`,m);n(m,b),a(b,`input input-bordered w-full`),v(()=>{i(b,S.value)}),r(b,`input`,e=>{S.value=e.target.value}),u(b,`placeholder`,`Edit me`);let x=d(`p`,m);n(m,x),a(x,`mt-2 text-gray-700`);let E=c(x);n(x,E),v(()=>{_(E,S.value)});let D=d(`div`,s);n(s,D);let O=d(`h2`,D);n(D,O),a(O,`text-lg font-semibold mb-2`),n(O,p(`Checkbox`));let k=d(`div`,D);n(D,k),a(k,`flex items-center gap-2`);let A=d(`input`,k);n(k,A),u(A,`id`,`checkbox`),u(A,`type`,`checkbox`),a(A,`checkbox`),v(()=>{g(A,!!C.value)}),r(A,`change`,e=>{C.value=e.target.checked});let j=d(`label`,k);n(k,j),u(j,`htmlFor`,`checkbox`),a(j,`select-none`),n(j,p(`Checked: `));let ae=c(j);n(j,ae),v(()=>{_(ae,String(C.value))});let M=d(`div`,s);n(s,M);let N=d(`h2`,M);n(M,N),a(N,`text-lg font-semibold mb-2`),n(N,p(`Multi Checkbox`));let P=d(`div`,M);n(M,P),a(P,`flex items-center gap-4 flex-wrap`);let oe=o(`rue:list:start`),se=o(`rue:list:end`);n(P,oe),n(P,se);let ce=new Map;v(()=>{ce=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:ce,parent:P,before:se,singleRoot:!0,trackIndex:!1,start:oe,renderItem:(e,t,o,s,p)=>{f(l(()=>{let t=h(),o=d(`label`,t);n(t,o),v(()=>{u(o,`key`,String(e))}),a(o,`inline-flex items-center gap-2`);let s=d(`input`,o);n(o,s),u(s,`type`,`checkbox`),a(s,`checkbox`),v(()=>{i(s,e)}),v(()=>{g(s,!!te.value.includes(e))}),r(s,`change`,t=>re(e,t.target.checked));let l=d(`span`,o);n(o,l);let f=c(l);return n(l,f),v(()=>{_(f,e)}),t}),t,o)}})});let F=d(`p`,M);n(M,F),a(F,`mt-2 text-gray-700`),n(F,p(`Checked names: `));let le=c(F);n(F,le),v(()=>{_(le,te.value.join(`, `))});let I=d(`div`,s);n(s,I);let L=d(`h2`,I);n(I,L),a(L,`text-lg font-semibold mb-2`),n(L,p(`Radio`));let R=d(`div`,I);n(I,R),a(R,`flex items-center gap-4 flex-wrap`);let z=d(`label`,R);n(R,z),u(z,`htmlFor`,`one`),a(z,`inline-flex items-center gap-2`);let B=d(`input`,z);n(z,B),u(B,`id`,`one`),u(B,`type`,`radio`),a(B,`radio`),u(B,`value`,`One`),v(()=>{g(B,w.value===`One`)}),r(B,`change`,()=>{w.value=`One`});let ue=d(`span`,z);n(z,ue),n(ue,p(`One`));let V=d(`label`,R);n(R,V),u(V,`htmlFor`,`two`),a(V,`inline-flex items-center gap-2`);let H=d(`input`,V);n(V,H),u(H,`id`,`two`),u(H,`type`,`radio`),a(H,`radio`),u(H,`value`,`Two`),v(()=>{g(H,w.value===`Two`)}),r(H,`change`,()=>{w.value=`Two`});let de=d(`span`,V);n(V,de),n(de,p(`Two`));let U=d(`p`,I);n(I,U),a(U,`mt-2 text-gray-700`),n(U,p(`Picked: `));let fe=c(U);n(U,fe),v(()=>{_(fe,w.value)});let W=d(`div`,s);n(s,W);let G=d(`h2`,W);n(W,G),a(G,`text-lg font-semibold mb-2`),n(G,p(`Select`));let K=d(`select`,W);n(W,K),a(K,`select select-bordered`),v(()=>{i(K,T.value)}),r(K,`change`,e=>{T.value=e.target.value});let q=d(`option`,K);n(K,q),u(q,`value`,``),n(q,p(`Please select one`));let J=d(`option`,K);n(K,J),u(J,`value`,`A`),n(J,p(`A`));let Y=d(`option`,K);n(K,Y),u(Y,`value`,`B`),n(Y,p(`B`));let pe=d(`option`,K);n(K,pe),u(pe,`value`,`C`),n(pe,p(`C`));let X=d(`p`,W);n(W,X),a(X,`mt-2 text-gray-700`),n(X,p(`Selected: `));let me=c(X);n(X,me),v(()=>{_(me,T.value)});let Z=d(`div`,s);n(s,Z);let he=d(`h2`,Z);n(Z,he),a(he,`text-lg font-semibold mb-2`),n(he,p(`Multi Select`));let Q=d(`select`,Z);n(Z,Q),a(Q,`select select-bordered w-[160px]`),u(Q,`multiple`,``),v(()=>{i(Q,ne.value)}),r(Q,`change`,ie);let ge=d(`option`,Q);n(Q,ge),u(ge,`value`,`A`),n(ge,p(`A`));let _e=d(`option`,Q);n(Q,_e),u(_e,`value`,`B`),n(_e,p(`B`));let ve=d(`option`,Q);n(Q,ve),u(ve,`value`,`C`),n(ve,p(`C`));let $=d(`p`,Z);n(Z,$),a($,`mt-2 text-gray-700`),n($,p(`Selected: `));let ye=c($);return n($,ye),v(()=>{_(ye,ne.value.join(`, `))}),e}):``;e(()=>f(t,O,A))}),t})}),s,y),s})};export{S as default};