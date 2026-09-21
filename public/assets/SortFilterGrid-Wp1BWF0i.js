import{B as e,Bt as t,Dt as n,F as r,I as i,M as a,Mt as o,Tt as s,Ut as c,V as l,Vt as u,W as d,Wt as f,en as p,f as m,fn as h,gn as g,h as _,hn as v,in as y,mn as b,nt as x,p as S,pn as C,qt as w,sn as T,st as E,u as D,yn as O,z as k,zt as A}from"./rue-runtime-BWbIfNT8.js";import{t as j}from"./Code-C5ZhIIr9.js";import{r as M}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var N=O(`<div></div>`),P=O(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带有排序和过滤器的网格（移植自 Vue）</h1>`),F=O(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),I=O(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),L=(n,r,a)=>{let o=d(k(n,`columns`)),s=d(k(n,`data`)),b=d(k(n,`filterKey`)),x=d(k(n,`onSort`)),E=d(k(n,`sortDirection`)),O=d(k(n,`sortKey`)),j=e=>e.charAt(0).toUpperCase()+e.slice(1),M=()=>{let e=s.get();if(b.get()){let t=String(b.get()).toLowerCase();e=e.filter(e=>Object.keys(e).some(n=>String(e[n]).toLowerCase().includes(t)))}if(O.get()){let t=O.get(),n=E.get();e=e.slice().sort((e,r)=>{let i=e[t],a=r[t];return(i===a?0:i>a?1:-1)*n})}return e};return i(f(e=>{let n=N().content.cloneNode(!0).firstChild;return c(n,null,()=>M().length?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let n=v(`table`,e);n.setAttribute(`class`,`min-w-full border-2 border-emerald-500 rounded-md bg-base-100`);let r=v(`thead`,n);h(n,r);let i=v(`tr`,r);h(r,i);let a=C(`rue:list:end`);h(i,a);let s=[];w(()=>{let e=o.get()||[];s=_(i,a,s,e,(e,t)=>e,(e,n)=>{let r=d(e);return S((e,n,i)=>{let a=()=>f(e=>{let n=v(`th`,e),i;y(()=>{let e=`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${O.get()===r.get()?`text-white`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),T(D(e,n,`click`,()=>()=>x.get()(r.get())));let a=C(`rue:compiled-slot`);h(n,a),t({parent:n,before:a},()=>(e=>(t,n,r)=>A(j(e))(t,n,r))(r.get()),()=>({}));let o=v(`span`,n);h(n,o);let s;return y(()=>{let e=`ml-2 inline-block align-middle opacity-80 ${O.get()===r.get()&&E.get()>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,o.setAttribute(`class`,t))}),[n,n]});return e==null?a():u(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),T(()=>m(s));let c=v(`tbody`,n);h(n,c);let l=C(`rue:list:end`);h(c,l);let p=[];return w(()=>{let e=M()||[];p=_(c,l,p,e,(e,t)=>t,(e,n)=>{let r=d(e);return S((e,n,i)=>{let a=()=>f(e=>{let n=v(`tr`,e),i=C(`rue:list:end`);h(n,i);let a=[];return w(()=>{let e=o.get()||[];a=_(i.parentNode,i,a,e,(e,t)=>e,(e,n)=>{let i=d(e);return S((e,n,a)=>{let o=()=>f(e=>{let n=v(`td`,e);n.setAttribute(`class`,`bg-base-200 text-base-content min-w-[120px] px-5 py-2`);let a=C(`rue:compiled-slot`);return h(n,a),t({parent:n,before:a},()=>A(r.get()[i.get()]),()=>({})),[n,n]});return e==null?o():u(e,a,o)},(t,r)=>{e=t,n=r,i.set(t)},void 0)},!1,!1)}),T(()=>m(a)),[n,n]});return e==null?a():u(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),T(()=>m(p)),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v(`p`,e);return t.setAttribute(`class`,`text-base-content`),h(t,g(`No matches found.`)),[t,t]})}),[n,n]}),e=>p(()=>{o.set(e.columns),s.set(e.data),b.set(e.filterKey),x.set(e.onSort),E.set(e.sortDirection),O.set(e.sortKey)}),()=>e(n))},R=(e,i,d)=>{let[p,m]=E(`SortFilterGrid:hook:0`,``),[_,S]=E(`SortFilterGrid:hook:1`,``),[w,O]=E(`SortFilterGrid:hook:2`,1),k=[`name`,`power`],A=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],N=e=>{m(e.target.value)},R=e=>{if(_.get()===e){O(e=>e*-1);return}S(e),O(-1)},[z,B]=E(`SortFilterGrid:hook:3`,`preview`);return x(()=>(()=>{let e=f(e=>{let i=b(),d=I().content.cloneNode(!0),m=d.firstChild,x=m.childNodes[0],S=x.parentNode,E=m.childNodes[1],D=E.parentNode;i.appendChild(d),c(S,x,()=>{let e=z.get()===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=v(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let n=v(`div`,t);return h(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,j,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=b();return[t.firstChild,t.lastChild]})}}),t({parent:D,before:E},()=>z.get()===`preview`?(e,r,i)=>u(e,i,()=>f(()=>{let e=b(),r=v(`div`,e);h(e,r),n(r,`card bg-base-100 shadow`);let i=v(`div`,r);h(r,i),n(i,`card-body grid gap-4`);let c=v(`form`,i);h(i,c),s(c,`id`,`search`),n(c,`flex items-center gap-2`);let l=v(`span`,c);h(c,l),h(l,g(`Search`));let d=v(`input`,c);h(c,d),s(d,`name`,`query`),n(d,`input input-bordered`),y(()=>{o(d,p.get())});let f=e=>{let t=N;typeof t==`function`&&t(e)};d.addEventListener(`input`,f),T(()=>d.removeEventListener(`input`,f));let m=C(`rue:component:anchor`);h(i,m),t({parent:i,before:m},()=>(e,t,n)=>u(e,n,()=>a(L,()=>({key:`${p.get()||`all`}-${_.get()||`none`}-${w.get()}`,data:A,columns:k,filterKey:p.get(),sortKey:_.get(),sortDirection:w.get(),onSort:R}))),()=>({}));let x=g(``),S=g(``);return e.insertBefore(x,e.firstChild),e.appendChild(S),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>l(e=>{let t=g(``);return[t,t]});return e==null?r():u(e,n,r)},()=>({}));let O=g(``),M=g(``);return i.insertBefore(O,i.firstChild),i.appendChild(M),[i.firstChild,i.lastChild]});return a(M,()=>({children:[l(e=>{let t=P().content.cloneNode(!0).firstChild;return[t,t]}),f(e=>{let t=F().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;y(()=>{let e=`tab ${z.get()===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),T(D(e,n,`click`,()=>()=>{B(`preview`)})),r.setAttribute(`role`,`tab`);let a;return y(()=>{let e=`tab ${z.get()===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),T(D(e,r,`click`,()=>()=>{B(`code`)})),[t,t]}),e]}))})())};export{R as default};