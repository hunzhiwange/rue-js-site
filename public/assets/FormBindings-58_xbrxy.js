import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Q as o,U as s,W as c,Z as l,at as u,ht as d,it as f,l as p,s as m,t as h,wt as g,yt as _,z as v}from"./vapor-runtime-C1rlwc61.js";import{a as y,n as ee}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as b}from"./Code-BCLFq1E3.js";import{t as x}from"./SidebarPlaygroundExample-CdMvdgT7.js";var S=()=>{let{text:S,checked:C,checkedNames:te,picked:w,selected:T,multiSelected:ne,toggleCheckedName:re,onMultiSelectChange:ie,activeTab:E}=y(`useSetup:0:0`,()=>g(()=>{let e=y(`ref:1:0`,()=>d(`Edit me`)),t=y(`ref:1:1`,()=>d(!0)),n=y(`ref:1:2`,()=>d([`Jack`])),r=y(`ref:1:3`,()=>d(`One`)),i=y(`ref:1:4`,()=>d(`A`)),a=y(`ref:1:5`,()=>d([`A`]));return{text:e,checked:t,checkedNames:n,picked:r,selected:i,multiSelected:a,toggleCheckedName:(e,t)=>{n.value=t?Array.from(new Set([...n.value,e])):n.value.filter(t=>t!==e)},onMultiSelectChange:e=>{a.value=Array.from(e.target.selectedOptions).map(e=>e.value)},activeTab:y(`ref:1:6`,()=>d(`preview`))}}));return p(d=>{let g=s(),y=i(`rue:component:anchor`);return t(g,y),m(h(x,{children:p(()=>{let d=s(),g=c(`h1`,d);t(d,g),e(g,`text-5xl font-semibold mb-4 md:mb-4`),t(g,r(`表单绑定（移植自 Vue）`));let y=c(`div`,d);t(d,y),l(y,`role`,`tablist`),e(y,`tabs tabs-box`);let x=c(`button`,y);t(y,x),l(x,`role`,`tab`),n(()=>{e(x,String(`tab ${E.value===`preview`?`tab-active`:``}`))}),v(x,`click`,()=>{E.value=`preview`}),t(x,r(`效果`));let D=c(`button`,y);t(y,D),l(D,`role`,`tab`),n(()=>{e(D,String(`tab ${E.value===`code`?`tab-active`:``}`))}),v(D,`click`,()=>{E.value=`code`}),t(D,r(`代码`));let O=c(`div`,d);t(d,O),e(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=i(`rue:slot:anchor`);t(O,k),n(()=>{let r=E.value===`code`?p(()=>{let r=s(),a=c(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto h-[520px] md:h-[720px]`);let o=c(`div`,a);t(a,o),e(o,`card-body p-0`);let l=i(`rue:component:anchor`);return t(o,l),n(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default FormBindings;`});_(()=>m(e,o,l))}),r}):``;_(()=>m(r,O,k))}),t(O,r(` `));let A=i(`rue:slot:anchor`);return t(O,A),n(()=>{let d=E.value===`preview`?p(()=>{let d=s(),h=c(`div`,d);t(d,h),e(h,`card bg-base-100 shadow`);let g=c(`div`,h);t(h,g),e(g,`card-body grid gap-6`);let _=c(`div`,g);t(g,_);let y=c(`h2`,_);t(_,y),e(y,`text-lg font-semibold mb-2`),t(y,r(`Text Input`));let b=c(`input`,_);t(_,b),e(b,`input input-bordered w-full`),n(()=>{f(b,S.value)}),v(b,`input`,e=>{S.value=e.target.value}),l(b,`placeholder`,`Edit me`);let x=c(`p`,_);t(_,x),e(x,`mt-2 text-gray-700`);let E=a(x);t(x,E),n(()=>{u(E,S.value)});let D=c(`div`,g);t(g,D);let O=c(`h2`,D);t(D,O),e(O,`text-lg font-semibold mb-2`),t(O,r(`Checkbox`));let k=c(`div`,D);t(D,k),e(k,`flex items-center gap-2`);let A=c(`input`,k);t(k,A),l(A,`id`,`checkbox`),l(A,`type`,`checkbox`),e(A,`checkbox`),n(()=>{o(A,!!C.value)}),v(A,`change`,e=>{C.value=e.target.checked});let j=c(`label`,k);t(k,j),l(j,`htmlFor`,`checkbox`),e(j,`select-none`),t(j,r(`Checked: `));let ae=a(j);t(j,ae),n(()=>{u(ae,String(C.value))});let M=c(`div`,g);t(g,M);let N=c(`h2`,M);t(M,N),e(N,`text-lg font-semibold mb-2`),t(N,r(`Multi Checkbox`));let P=c(`div`,M);t(M,P),e(P,`flex items-center gap-4 flex-wrap`);let oe=i(`rue:list:start`),se=i(`rue:list:end`);t(P,oe),t(P,se);let ce=new Map;n(()=>{ce=ee({items:[`Jack`,`John`,`Mike`],getKey:(e,t)=>e,elements:ce,parent:P,before:se,singleRoot:!0,trackIndex:!1,start:oe,renderItem:(r,i,d,h,g)=>{m(p(()=>{let i=s(),d=c(`label`,i);t(i,d),n(()=>{l(d,`key`,String(r))}),e(d,`inline-flex items-center gap-2`);let p=c(`input`,d);t(d,p),l(p,`type`,`checkbox`),e(p,`checkbox`),n(()=>{f(p,r)}),n(()=>{o(p,!!te.value.includes(r))}),v(p,`change`,e=>re(r,e.target.checked));let m=c(`span`,d);t(d,m);let h=a(m);return t(m,h),n(()=>{u(h,r)}),i}),i,d)}})});let F=c(`p`,M);t(M,F),e(F,`mt-2 text-gray-700`),t(F,r(`Checked names: `));let le=a(F);t(F,le),n(()=>{u(le,te.value.join(`, `))});let I=c(`div`,g);t(g,I);let L=c(`h2`,I);t(I,L),e(L,`text-lg font-semibold mb-2`),t(L,r(`Radio`));let R=c(`div`,I);t(I,R),e(R,`flex items-center gap-4 flex-wrap`);let z=c(`label`,R);t(R,z),l(z,`htmlFor`,`one`),e(z,`inline-flex items-center gap-2`);let B=c(`input`,z);t(z,B),l(B,`id`,`one`),l(B,`type`,`radio`),e(B,`radio`),l(B,`value`,`One`),n(()=>{o(B,w.value===`One`)}),v(B,`change`,()=>{w.value=`One`});let ue=c(`span`,z);t(z,ue),t(ue,r(`One`));let V=c(`label`,R);t(R,V),l(V,`htmlFor`,`two`),e(V,`inline-flex items-center gap-2`);let H=c(`input`,V);t(V,H),l(H,`id`,`two`),l(H,`type`,`radio`),e(H,`radio`),l(H,`value`,`Two`),n(()=>{o(H,w.value===`Two`)}),v(H,`change`,()=>{w.value=`Two`});let de=c(`span`,V);t(V,de),t(de,r(`Two`));let U=c(`p`,I);t(I,U),e(U,`mt-2 text-gray-700`),t(U,r(`Picked: `));let fe=a(U);t(U,fe),n(()=>{u(fe,w.value)});let W=c(`div`,g);t(g,W);let G=c(`h2`,W);t(W,G),e(G,`text-lg font-semibold mb-2`),t(G,r(`Select`));let K=c(`select`,W);t(W,K),e(K,`select select-bordered`),n(()=>{f(K,T.value)}),v(K,`change`,e=>{T.value=e.target.value});let q=c(`option`,K);t(K,q),l(q,`value`,``),t(q,r(`Please select one`));let J=c(`option`,K);t(K,J),l(J,`value`,`A`),t(J,r(`A`));let Y=c(`option`,K);t(K,Y),l(Y,`value`,`B`),t(Y,r(`B`));let pe=c(`option`,K);t(K,pe),l(pe,`value`,`C`),t(pe,r(`C`));let X=c(`p`,W);t(W,X),e(X,`mt-2 text-gray-700`),t(X,r(`Selected: `));let me=a(X);t(X,me),n(()=>{u(me,T.value)});let Z=c(`div`,g);t(g,Z);let he=c(`h2`,Z);t(Z,he),e(he,`text-lg font-semibold mb-2`),t(he,r(`Multi Select`));let Q=c(`select`,Z);t(Z,Q),e(Q,`select select-bordered w-[160px]`),l(Q,`multiple`,``),n(()=>{f(Q,ne.value)}),v(Q,`change`,ie);let ge=c(`option`,Q);t(Q,ge),l(ge,`value`,`A`),t(ge,r(`A`));let _e=c(`option`,Q);t(Q,_e),l(_e,`value`,`B`),t(_e,r(`B`));let ve=c(`option`,Q);t(Q,ve),l(ve,`value`,`C`),t(ve,r(`C`));let $=c(`p`,Z);t(Z,$),e($,`mt-2 text-gray-700`),t($,r(`Selected: `));let ye=a($);return t($,ye),n(()=>{u(ye,ne.value.join(`, `))}),d}):``;_(()=>m(d,O,A))}),d})}),g,y),g})};export{S as default};