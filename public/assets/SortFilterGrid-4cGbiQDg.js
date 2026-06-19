import{$ as e,Q as t,Qt as n,Wt as r,X as i,Xt as a,Y as o,Yt as s,et as c,ht as l,l as u,lt as d,mt as f,nt as p,o as m,st as h,t as g,tt as _}from"./vapor-runtime-CXIalONM.js";import{a as v,n as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as b}from"./Code-BIscIyEp.js";import{r as x}from"./SidebarPlaygroundExample-CEz1fABX.js";var S=a=>{let f=v(`useSetup:0:0`,()=>s(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=a.data;if(a.filterKey){let e=String(a.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(a.sortKey){let e=a.sortKey,n=a.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:g}=f,{currentRows:b}=f;return u(s=>{let f=c(`div`,s),v=t(`rue:slot:anchor`);return i(f,v),n(()=>{let s=b.length?u(()=>{let s=e(),f=c(`table`,s);i(s,f),d(f,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let _=c(`thead`,f);i(f,_);let v=c(`tr`,_);i(_,v);let x=t(`rue:list:start`),S=t(`rue:list:end`);i(v,x),i(v,S);let C=new Map;n(()=>{C=y({items:a.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(s,l,f,p,_)=>{m(u(()=>{let l=e(),u=c(`th`,l);i(l,u),n(()=>{h(u,`key`,String(s))}),n(()=>{d(u,`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${a.sortKey===s?`text-white`:``}`)}),o(u,`click`,()=>a.onSort(s));let f=t(`rue:slot:anchor`);i(u,f),n(()=>{let e=g(s);r(()=>m(e,u,f))});let p=c(`span`,u);return i(u,p),n(()=>{d(p,`ml-2 inline-block align-middle opacity-80 ${a.sortKey===s&&a.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`)}),l}),l,f)}})});let w=c(`tbody`,f);i(f,w);let T=t(`rue:list:start`),E=t(`rue:list:end`);i(w,T),i(w,E);let D=new Map;return n(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(r,o,s,f,g)=>{m(u(()=>{let o=e(),s=c(`tr`,o);i(o,s),n(()=>{h(s,`key`,String(g))});let f=t(`rue:list:start`),_=t(`rue:list:end`);i(s,f),i(s,_);let v=new Map;return n(()=>{v=y({items:a.columns||[],getKey:(e,t)=>e,elements:v,parent:s,before:_,singleRoot:!0,trackIndex:!1,start:f,renderItem:(t,a,o,s,f)=>{m(u(()=>{let a=e(),o=c(`td`,a);i(a,o),n(()=>{h(o,`key`,String(t))}),d(o,`bg-gray-50 min-w-[120px] px-5 py-2`);let s=p(o);return i(o,s),n(()=>{l(s,String(r[t]))}),a}),a,o)}})}),o}),o,s)}})}),s}):u(()=>{let t=e(),n=c(`p`,t);return i(t,n),d(n,`text-gray-700`),i(n,_(`No matches found.`)),t});r(()=>m(s,f,v))}),f})},C=()=>{let{searchQuery:l,setSearchQuery:p,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>s(()=>{let[e,t]=v(`useState:1:0`,()=>a(``)),[n,r]=v(`useState:1:1`,()=>a(``)),[i,o]=v(`useState:1:2`,()=>a(1)),s=[`name`,`power`],c=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],l=e=>{t(e.target.value)},u=e=>{if(n.value===e){o(e=>{e.value*=-1});return}r(e),o(-1)},[d,f]=v(`useState:1:3`,()=>a(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:r,sortDirection:i,setSortDirection:o,gridColumns:s,gridData:c,updateQuery:l,sortBy:u,activeTab:d,setActiveTab:f}}));return u(a=>{let s=e(),p=t(`rue:component:anchor`);return i(s,p),m(g(x,{children:u(()=>{let a=e(),s=c(`h1`,a);i(a,s),d(s,`text-5xl font-semibold mb-4 md:mb-4`),i(s,_(`带有排序和过滤器的网格（移植自 Vue）`));let p=c(`div`,a);i(a,p),h(p,`role`,`tablist`),d(p,`tabs tabs-box`);let v=c(`button`,p);i(p,v),h(v,`role`,`tab`),n(()=>{d(v,`tab ${A.value===`preview`?`tab-active`:``}`)}),o(v,`click`,()=>{j(`preview`)}),i(v,_(`效果`));let x=c(`button`,p);i(p,x),h(x,`role`,`tab`),n(()=>{d(x,`tab ${A.value===`code`?`tab-active`:``}`)}),o(x,`click`,()=>{j(`code`)}),i(x,_(`代码`));let C=c(`div`,a);i(a,C),d(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=t(`rue:slot:anchor`);i(C,T),n(()=>{let a=A.value===`code`?u(()=>{let a=e(),o=c(`div`,a);i(a,o),d(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let s=c(`div`,o);i(o,s),d(s,`card-body p-0`);let l=t(`rue:component:anchor`);return i(s,l),n(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});r(()=>m(e,s,l))}),a}):``;r(()=>m(a,C,T))}),i(C,_(` `));let M=t(`rue:slot:anchor`);return i(C,M),n(()=>{let a=A.value===`preview`?u(()=>{let a=e(),s=c(`div`,a);i(a,s),d(s,`card bg-base-100 shadow`);let u=c(`div`,s);i(s,u),d(u,`card-body grid gap-4`);let p=c(`form`,u);i(u,p),h(p,`id`,`search`),d(p,`flex items-center gap-2`);let v=c(`span`,p);i(p,v),i(v,_(`Search`));let b=c(`input`,p);i(p,b),h(b,`name`,`query`),d(b,`input input-bordered`),n(()=>{f(b,l.value)}),o(b,`input`,O);let x=t(`rue:component:anchor`);return i(u,x),n(()=>{let e=g(S,{key:`${l.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:l.value,sortKey:y.value,sortDirection:w.value,onSort:k});r(()=>m(e,u,x))}),a}):``;r(()=>m(a,C,M))}),a})}),s,p),s})};export{C as default};