import{B as e,Bt as t,Dt as n,F as r,I as i,M as a,Mt as o,Tt as s,Ut as c,V as l,Vt as u,W as d,Wt as f,X as p,Y as m,en as h,f as g,fn as _,gn as v,h as y,hn as b,in as x,mn as S,nt as C,p as w,pn as T,qt as E,sn as D,st as O,u as k,yn as A,z as j,zt as M}from"./rue-runtime-BWbIfNT8.js";import{t as N}from"./Code-C5ZhIIr9.js";import{r as P}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var F=A(`<div></div>`),I=A(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带有排序和过滤器的网格（移植自 Vue）</h1>`),L=A(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),R=A(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),z=(n,r,a)=>{let o=d(j(n,`columns`)),s=d(j(n,`data`)),S=d(j(n,`filterKey`)),C=d(j(n,`onSort`)),O=d(j(n,`sortDirection`)),A=d(j(n,`sortKey`)),N=e=>e.charAt(0).toUpperCase()+e.slice(1),P=()=>{let e=s.get();if(S.get()){let t=String(S.get()).toLowerCase();e=e.filter(e=>Object.keys(e).some(n=>String(e[n]).toLowerCase().includes(t)))}if(A.get()){let t=A.get(),n=O.get();e=e.slice().sort((e,r)=>{let i=e[t],a=r[t];return(i===a?0:i>a?1:-1)*n})}return e};return i(f(e=>{let n=F().content.cloneNode(!0).firstChild;return c(n,null,()=>P().length?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let n=b(`table`,e);n.setAttribute(`class`,`min-w-full border-2 border-emerald-500 rounded-md bg-base-100`);let r=b(`thead`,n);_(n,r);let i=b(`tr`,r);_(r,i);let a=T(`rue:list:end`);_(i,a);let s=[];E(()=>{let e=o.get()||[];s=y(i,a,s,e,(e,t)=>e,(e,n)=>{let r=d(e);return w((e,n,i)=>{let a=()=>f(e=>{let n=b(`th`,e),i;x(()=>{let e=`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${A.get()===r.get()?`text-white`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),D(k(e,n,`click`,()=>()=>C.get()(r.get())));let a=T(`rue:compiled-slot`);_(n,a),t({parent:n,before:a},()=>(e=>(t,n,r)=>M(N(e))(t,n,r))(r.get()),()=>({}));let o=b(`span`,n);_(n,o);let s;return x(()=>{let e=`ml-2 inline-block align-middle opacity-80 ${A.get()===r.get()&&O.get()>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,o.setAttribute(`class`,t))}),[n,n]});return e==null?a():u(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),D(()=>g(s));let c=b(`tbody`,n);_(n,c);let l=T(`rue:list:end`);_(c,l);let h=[];return E(()=>{let e=P()||[];h=y(c,l,h,e,(e,t)=>t,(e,t)=>{let n=d(e);return w((e,t,r)=>{let i=()=>f(e=>{let t=b(`tr`,e),r=T(`rue:list:end`);_(t,r);let i=[];return E(()=>{let e=o.get()||[];i=y(r.parentNode,r,i,e,(e,t)=>e,(e,t)=>{let r=d(e);return w((e,t,i)=>{let a=()=>m(e=>{let t=b(`td`,e);t.setAttribute(`class`,`bg-base-200 text-base-content min-w-[120px] px-5 py-2`);let i=v(``);return _(t,i),p(i,()=>String(n.get()[r.get()])),[t,t]});return e==null?a():u(e,i,a)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),D(()=>g(i)),[t,t]});return e==null?i():u(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),D(()=>g(h)),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=b(`p`,e);return t.setAttribute(`class`,`text-base-content`),_(t,v(`No matches found.`)),[t,t]})}),[n,n]}),e=>h(()=>{o.set(e.columns),s.set(e.data),S.set(e.filterKey),C.set(e.onSort),O.set(e.sortDirection),A.set(e.sortKey)}),()=>e(n))},B=(e,i,d)=>{let[p,m]=O(`SortFilterGrid:hook:0`,``),[h,g]=O(`SortFilterGrid:hook:1`,``),[y,w]=O(`SortFilterGrid:hook:2`,1),E=[`name`,`power`],A=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],j=e=>{m(e.target.value)},M=e=>{if(h.get()===e){w(e=>e*-1);return}g(e),w(-1)},[F,B]=O(`SortFilterGrid:hook:3`,`preview`);return C(()=>(()=>{let e=f(e=>{let i=S(),d=R().content.cloneNode(!0),m=d.firstChild,g=m.childNodes[0],C=g.parentNode,w=m.childNodes[1],O=w.parentNode;i.appendChild(d),c(C,g,()=>{let e=F.get()===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=b(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let n=b(`div`,t);return _(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,N,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

type Row = Record<string, string | number>;

const DemoGrid: FC<{ data: Row[]; columns: string[]; filterKey: string }> = (props) => {
  const sortKey = ref<string>('');
  const sortOrders = ref<Record<string, number>>(props.columns.reduce((o, k) => { (o as any)[k] = 1; return o; }, {} as Record<string, number>));

  const filteredData = computed(() => {
    let data: Row[] = props.data;
    let filterKey = props.filterKey;
    if (filterKey) {
      const q = String(filterKey).toLowerCase();
      data = data.filter((row) => Object.keys(row).some((key) => String(row[key]).toLowerCase().includes(q)));
    }
    const key = sortKey.value;
    if (key) {
      const order = sortOrders.value[key];
      data = data.slice().sort((a, b) => {
        const av = a[key] as any;
        const bv = b[key] as any;
        return (av === bv ? 0 : av > bv ? 1 : -1) * order;
      });
    }
    return data;
  });

  const sortBy = (key: string) => {
    sortKey.value = key;
    sortOrders.value[key] = (sortOrders.value[key] || 1) * -1;
  };

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div>
      {filteredData.value.length ? (
        <table className="min-w-full border-2 border-emerald-500 rounded-md bg-base-100">
          <thead>
            <tr>
              {props.columns.map((key) => (
                <th
                  key={key}
                  className={\`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 \${sortKey.value === key ? 'text-white' : ''}\`}
                  onClick={() => sortBy(key)}
                >
                  {capitalize(key)}
                  <span className={\`ml-2 inline-block align-middle opacity-80 \${sortOrders.value[key] > 0 ? 'border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0' : 'border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0'}\`}></span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.value.map((entry, idx) => (
              <tr key={idx}>
                {props.columns.map((key) => (
                  <td key={key} className="bg-base-200 text-base-content min-w-[120px] px-5 py-2">{String(entry[key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-base-content">No matches found.</p>
      )}
    </div>
  );
};

const SortFilterGrid: FC = () => {
  const searchQuery = ref('');
  const gridColumns = ['name', 'power'];
  const gridData: Row[] = [
    { name: 'Chuck Norris', power: Infinity },
    { name: 'Bruce Lee', power: 9000 },
    { name: 'Jackie Chan', power: 7000 },
    { name: 'Jet Li', power: 8000 },
  ];
  const updateQuery = (e: any) => { searchQuery.value = (e.target as HTMLInputElement).value; };
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <form id="search" className="flex items-center gap-2">
          <span>Search</span>
          <input
            name="query"
            className="input input-bordered"
            value={searchQuery.value}
            onInput={updateQuery}
          />
        </form>
        <DemoGrid data={gridData} columns={gridColumns} filterKey={searchQuery.value} />
      </div>
    </div>
  );
};

export default SortFilterGrid;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=v(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=S();return[t.firstChild,t.lastChild]})}}),t({parent:O,before:w},()=>F.get()===`preview`?(e,r,i)=>u(e,i,()=>f(()=>{let e=S(),r=b(`div`,e);_(e,r),n(r,`card bg-base-100 shadow`);let i=b(`div`,r);_(r,i),n(i,`card-body grid gap-4`);let c=b(`form`,i);_(i,c),s(c,`id`,`search`),n(c,`flex items-center gap-2`);let l=b(`span`,c);_(c,l),_(l,v(`Search`));let d=b(`input`,c);_(c,d),s(d,`name`,`query`),n(d,`input input-bordered`),x(()=>{o(d,p.get())});let f=e=>{let t=j;typeof t==`function`&&t(e)};d.addEventListener(`input`,f),D(()=>d.removeEventListener(`input`,f));let m=T(`rue:component:anchor`);_(i,m),t({parent:i,before:m},()=>(e,t,n)=>u(e,n,()=>a(z,()=>({key:`${p.get()||`all`}-${h.get()||`none`}-${y.get()}`,data:A,columns:E,filterKey:p.get(),sortKey:h.get(),sortDirection:y.get(),onSort:M}))),()=>({}));let g=v(``),C=v(``);return e.insertBefore(g,e.firstChild),e.appendChild(C),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>l(e=>{let t=v(``);return[t,t]});return e==null?r():u(e,n,r)},()=>({}));let k=v(``),P=v(``);return i.insertBefore(k,i.firstChild),i.appendChild(P),[i.firstChild,i.lastChild]});return a(P,()=>({children:[l(e=>{let t=I().content.cloneNode(!0).firstChild;return[t,t]}),f(e=>{let t=L().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;x(()=>{let e=`tab ${F.get()===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),D(k(e,n,`click`,()=>()=>{B(`preview`)})),r.setAttribute(`role`,`tab`);let a;return x(()=>{let e=`tab ${F.get()===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),D(k(e,r,`click`,()=>()=>{B(`code`)})),[t,t]}),e]}))})())};export{B as default};