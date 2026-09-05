import{C as e,Dn as t,Et as n,K as r,L as i,Lt as a,Mt as o,S as s,V as c,W as l,X as u,Y as d,_n as f,_t as p,fn as m,ft as h,gn as g,hn as _,ht as v,it as y,jt as b,kn as x,nt as S,ot as C,pn as w,q as T,rt as E,tt as D,wn as O,x as k,z as A}from"./rue-runtime-CwEGJ854.js";import{t as j}from"./Code-B3jCYMAr.js";import{r as M}from"./SidebarPlaygroundExample-EGR0CyDT.js";var N=f(`<div><!--rue:text-hole:0--></div>`),P=f(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带有排序和过滤器的网格（移植自 Vue）</h1>`),F=f(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),I=f(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),L=r=>{let i=l(r.columns),a=l(r.data),o=l(r.filterKey),u=l(r.onSort),f=l(r.sortDirection),p=l(r.sortKey),h=e=>e.charAt(0).toUpperCase()+e.slice(1),v=()=>{let e=a.get();if(o.get()){let t=String(o.get()).toLowerCase();e=e.filter(e=>Object.keys(e).some(n=>String(e[n]).toLowerCase().includes(t)))}if(p.get()){let t=p.get(),n=f.get();e=e.slice().sort((e,r)=>{let i=e[t],a=r[t];return(i===a?0:i>a?1:-1)*n})}return e};return T(n(Object.assign(r=>{let a=N().content.cloneNode(!0).firstChild,o=a.childNodes[0],y=o.parentNode;return c(y,o,()=>v().length?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(r=>{let a=_(`table`,r);a.className=`min-w-full border-2 border-emerald-500 rounded-md bg-white`;let o=_(`thead`,a);m(a,o);let c=_(`tr`,o);m(o,c);let g=w(`rue:list:end`);m(c,g);let y=[];O(()=>{let r=i.get()||[];y=e(c,g,y,r,(e,t)=>e,(e,r)=>{let i=l(e),a=l(r);return s((e,r,a)=>k(e,a,()=>n(Object.assign(e=>{let n=_(`th`,e),r;O(()=>{let e=`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${p.get()===i.get()?`text-white`:``}`,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let a=e=>{let t=()=>u.get()(i.get());typeof t==`function`&&t(e)};n.addEventListener(`click`,a),t(()=>n.removeEventListener(`click`,a));let o=w(`rue:compiled-slot`);m(n,o),O(()=>{let e=h(i.get());x(()=>d(e,n,o))});let s=_(`span`,n);m(n,s);let c;return O(()=>{let e=`ml-2 inline-block align-middle opacity-80 ${p.get()===i.get()&&f.get()>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`,t=e==null?``:String(e);Object.is(c,t)||(c=t,s.className=t)}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,i.set(t),a.set(n)})})});let b=_(`tbody`,a);m(a,b);let S=w(`rue:list:end`);m(b,S);let C=[];return O(()=>{let t=v()||[];C=e(b,S,C,t,(e,t)=>t,(t,r)=>{let a=l(t),o=l(r);return s((t,r,o)=>k(t,o,()=>n(Object.assign(t=>{let r=_(`tr`,t),o=w(`rue:list:end`);m(r,o);let c=[];return O(()=>{let t=i.get()||[];c=e(o.parentNode,o,c,t,(e,t)=>e,(e,t)=>{let r=l(e),i=l(t);return s((e,t,i)=>k(e,i,()=>n(Object.assign(e=>{let t=_(`td`,e);t.className=`bg-gray-50 min-w-[120px] px-5 py-2`;let n=w(`rue:compiled-slot`);return m(t,n),O(()=>{let e=String(a.get()[r.get()]);x(()=>d(e,t,n))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),(e,n)=>{t=e,r=n,a.set(e),o.set(n)})})}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=_(`p`,e);return t.className=`text-gray-700`,m(t,g(`No matches found.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{i.set(e.columns),a.set(e.data),o.set(e.filterKey),u.set(e.onSort),f.set(e.sortDirection),p.set(e.sortKey)}),()=>r)},R=()=>{let[e,s]=b(`SortFilterGrid:hook:0`,``),[l,f]=b(`SortFilterGrid:hook:1`,``),[w,k]=b(`SortFilterGrid:hook:2`,1),N=[`name`,`power`],R=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],z=e=>{s(e.target.value)},B=e=>{if(l.value===e){k(e=>{e.value*=-1});return}f(e),k(-1)},[V,H]=b(`SortFilterGrid:hook:3`,`preview`);return o(()=>T((()=>{let o=v(()=>{let t=S(),o=I().content.cloneNode(!0),s=o.firstChild,f=s.childNodes[0],b=f.parentNode,T=s.childNodes[1],k=T.parentNode;return t.appendChild(o),c(b,f,()=>{let e=V.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=_(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`;let n=_(`div`,t);return m(t,n),n.className=`card-body p-0`,r(n,j,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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
        <table className="min-w-full border-2 border-emerald-500 rounded-md bg-white">
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
                  <td key={key} className="bg-gray-50 min-w-[120px] px-5 py-2">{String(entry[key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-700">No matches found.</p>
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

export default SortFilterGrid;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=S();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),O(()=>{let t=V.value===`preview`?v(()=>{let t=S(),n=E(`div`,t);u(t,n),i(n,`card bg-base-100 shadow`);let r=E(`div`,n);u(n,r),i(r,`card-body grid gap-4`);let o=E(`form`,r);u(r,o),C(o,`id`,`search`),i(o,`flex items-center gap-2`);let s=E(`span`,o);u(o,s),u(s,y(`Search`));let c=E(`input`,o);u(o,c),C(c,`name`,`query`),i(c,`input input-bordered`),O(()=>{h(c,e.value)});let f=e=>{let t=z;typeof t==`function`&&t(e)};c.addEventListener(`input`,f),a(()=>c.removeEventListener(`input`,f));let m=D(`rue:component:anchor`);return u(r,m),O(()=>{let t=p(L,()=>({key:`${e.value||`all`}-${l.value||`none`}-${w.value}`,data:R,columns:N,filterKey:e.value,sortKey:l.value,sortDirection:w.value,onSort:B}));x(()=>d(t,r,m))}),t},!0):``;x(()=>d(t,k,T))}),t});return p(M,()=>({children:[n(e=>P().content.cloneNode(!0).firstChild),n(Object.assign(e=>{let n=F().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;O(()=>{let e=`tab ${V.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{H(`preview`)};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;O(()=>{let e=`tab ${V.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{H(`code`)};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),o]}))})(),e=>A(()=>{})))};export{R as default};