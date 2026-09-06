import{At as e,C as t,Dn as n,Dt as r,E as i,Kt as a,Mt as o,Q as s,Qt as c,Vt as l,_n as u,_t as d,at as f,b as p,ct as m,dt as h,et as g,gn as _,gt as v,kn as y,mn as b,nt as x,pn as S,qt as C,st as w,ut as T,vn as E,vt as D,w as O,wn as k,xt as A,yt as j}from"./rue-runtime-HIMg8Lz8.js";import{t as M}from"./Code-DpH7u0gk.js";import{r as N}from"./SidebarPlaygroundExample-BCPRe0hA.js";var P=E(`<div><!--rue:text-hole:0--></div>`),F=E(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带有排序和过滤器的网格（移植自 Vue）</h1>`),I=E(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),L=E(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),R=e=>{let r=f(e.columns),a=f(e.data),o=f(e.filterKey),s=f(e.onSort),c=f(e.sortDirection),d=f(e.sortKey),h=e=>e.charAt(0).toUpperCase()+e.slice(1),v=()=>{let e=a.get();if(o.get()){let t=String(o.get()).toLowerCase();e=e.filter(e=>Object.keys(e).some(n=>String(e[n]).toLowerCase().includes(t)))}if(d.get()){let t=d.get(),n=c.get();e=e.slice().sort((e,r)=>{let i=e[t],a=r[t];return(i===a?0:i>a?1:-1)*n})}return e};return m(l(Object.assign(e=>{let a=P().content.cloneNode(!0).firstChild,o=a.childNodes[0],m=o.parentNode;return x(m,o,()=>v().length?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let a=_(`table`,e);a.className=`min-w-full border-2 border-emerald-500 rounded-md bg-white`;let o=_(`thead`,a);S(a,o);let u=_(`tr`,o);S(o,u);let m=b(`rue:list:end`);S(u,m);let g=[];k(()=>{let e=r.get()||[];g=O(u,m,g,e,(e,t)=>e,(e,r)=>{let a=f(e);return t((e,t,r)=>i(e,r,()=>l(Object.assign(e=>{let t=_(`th`,e),r;k(()=>{let e=`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${d.get()===a.get()?`text-white`:``}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let i=e=>{let t=()=>s.get()(a.get());typeof t==`function`&&t(e)};t.addEventListener(`click`,i),n(()=>t.removeEventListener(`click`,i));let o=b(`rue:compiled-slot`);S(t,o),k(()=>{let e=h(a.get());y(()=>T(e,t,o))});let l=_(`span`,t);S(t,l);let u;return k(()=>{let e=`ml-2 inline-block align-middle opacity-80 ${d.get()===a.get()&&c.get()>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`,t=e==null?``:String(e);Object.is(u,t)||(u=t,l.className=t)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,a.set(t)})})}),n(()=>p(g));let x=_(`tbody`,a);S(a,x);let C=b(`rue:list:end`);S(x,C);let w=[];return k(()=>{let e=v()||[];w=O(x,C,w,e,(e,t)=>t,(e,a)=>{let o=f(e);return t((e,a,s)=>i(e,s,()=>l(Object.assign(e=>{let a=_(`tr`,e),s=b(`rue:list:end`);S(a,s);let c=[];return k(()=>{let e=r.get()||[];c=O(s.parentNode,s,c,e,(e,t)=>e,(e,n)=>{let r=f(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=_(`td`,e);t.className=`bg-gray-50 min-w-[120px] px-5 py-2`;let n=b(`rue:compiled-slot`);return S(t,n),k(()=>{let e=String(o.get()[r.get()]);y(()=>T(e,t,n))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>p(c)),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,a=n,o.set(t)})})}),n(()=>p(w)),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=_(`p`,e);return t.className=`text-gray-700`,S(t,u(`No matches found.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>g(()=>{r.set(e.columns),a.set(e.data),o.set(e.filterKey),s.set(e.onSort),c.set(e.sortDirection),d.set(e.sortKey)}),()=>e)},z=()=>{let[t,i]=a(`SortFilterGrid:hook:0`,``),[f,p]=a(`SortFilterGrid:hook:1`,``),[b,E]=a(`SortFilterGrid:hook:2`,1),O=[`name`,`power`],P=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],z=e=>{i(e.target.value)},B=e=>{if(f.get()===e){E(e=>e*-1);return}p(e),E(-1)},[V,H]=a(`SortFilterGrid:hook:3`,`preview`);return C(()=>m((()=>{let i=e(()=>{let n=d(),i=L().content.cloneNode(!0),a=i.firstChild,p=a.childNodes[0],m=p.parentNode,g=a.childNodes[1],C=g.parentNode;return n.appendChild(i),x(m,p,()=>{let e=V.get()===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=_(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`;let n=_(`div`,t);return S(t,n),n.className=`card-body p-0`,w(n,M,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),k(()=>{let n=V.get()===`preview`?e(()=>{let e=d(),n=D(`div`,e);h(e,n),s(n,`card bg-base-100 shadow`);let i=D(`div`,n);h(n,i),s(i,`card-body grid gap-4`);let a=D(`form`,i);h(i,a),A(a,`id`,`search`),s(a,`flex items-center gap-2`);let l=D(`span`,a);h(a,l),h(l,j(`Search`));let u=D(`input`,a);h(a,u),A(u,`name`,`query`),s(u,`input input-bordered`),k(()=>{r(u,t.get())});let p=e=>{let t=z;typeof t==`function`&&t(e)};u.addEventListener(`input`,p),c(()=>u.removeEventListener(`input`,p));let m=v(`rue:component:anchor`);return h(i,m),k(()=>{let e=o(R,()=>({key:`${t.get()||`all`}-${f.get()||`none`}-${b.get()}`,data:P,columns:O,filterKey:t.get(),sortKey:f.get(),sortDirection:b.get(),onSort:B}));y(()=>T(e,i,m))}),e},!0):``;y(()=>T(n,C,g))}),n});return o(N,()=>({children:[l(e=>F().content.cloneNode(!0).firstChild),l(Object.assign(e=>{let t=I().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;k(()=>{let e=`tab ${V.get()===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{H(`preview`)};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;k(()=>{let e=`tab ${V.get()===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{H(`code`)};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i]}))})(),e=>g(()=>{})))};export{z as default};