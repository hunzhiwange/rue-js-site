import{$ as e,J as t,Kt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,pt as m,qt as h,t as g,tt as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v,n as y}from"./vapor-helpers-vapor-DkadWylb.js";import{t as b}from"./Code-B_4lzH85.js";import{t as x}from"./SidebarPlaygroundExample-CtM-WHq_.js";var S=m=>{let h=v(`useSetup:0:0`,()=>n(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=m.data;if(m.filterKey){let e=String(m.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(m.sortKey){let e=m.sortKey,n=m.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:g}=h,{currentRows:b}=h;return l(n=>{let h=e(`div`,n),v=s(`rue:slot:anchor`);return a(h,v),o(()=>{let n=b.length?l(()=>{let n=r(),u=e(`table`,n);a(n,u),c(u,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let h=e(`thead`,u);a(u,h);let v=e(`tr`,h);a(h,v);let x=s(`rue:list:start`),S=s(`rue:list:end`);a(v,x),a(v,S);let C=new Map;o(()=>{C=y({items:m.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(n,u,f,h,_)=>{d(l(()=>{let l=r(),u=e(`th`,l);a(l,u),o(()=>{p(u,`key`,String(n))}),o(()=>{c(u,String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${m.sortKey===n?`text-white`:``}`))}),t(u,`click`,()=>m.onSort(n));let f=s(`rue:slot:anchor`);a(u,f),o(()=>{let e=g(n);i(()=>d(e,u,f))});let h=e(`span`,u);return a(u,h),o(()=>{c(h,String(`ml-2 inline-block align-middle opacity-80 ${m.sortKey===n&&m.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`))}),l}),u,f)}})});let w=e(`tbody`,u);a(u,w);let T=s(`rue:list:start`),E=s(`rue:list:end`);a(w,T),a(w,E);let D=new Map;return o(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(t,n,i,u,h)=>{d(l(()=>{let n=r(),i=e(`tr`,n);a(n,i),o(()=>{p(i,`key`,String(h))});let u=s(`rue:list:start`),g=s(`rue:list:end`);a(i,u),a(i,g);let v=new Map;return o(()=>{v=y({items:m.columns||[],getKey:(e,t)=>e,elements:v,parent:i,before:g,singleRoot:!0,trackIndex:!1,start:u,renderItem:(n,i,s,u,m)=>{d(l(()=>{let i=r(),s=e(`td`,i);a(i,s),o(()=>{p(s,`key`,String(n))}),c(s,`bg-gray-50 min-w-[120px] px-5 py-2`);let l=_(s);return a(s,l),o(()=>{f(l,String(t[n]))}),i}),i,s)}})}),n}),n,i)}})}),n}):l(()=>{let t=r(),n=e(`p`,t);return a(t,n),c(n,`text-gray-700`),a(n,u(`No matches found.`)),t});i(()=>d(n,h,v))}),h})},C=()=>{let{searchQuery:f,setSearchQuery:_,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>n(()=>{let[e,t]=v(`useState:1:0`,()=>h(``)),[n,r]=v(`useState:1:1`,()=>h(``)),[i,a]=v(`useState:1:2`,()=>h(1)),o=[`name`,`power`],s=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],c=e=>{t(e.target.value)},l=e=>{if(n.value===e){a(e=>{e.value*=-1});return}r(e),a(-1)},[u,d]=v(`useState:1:3`,()=>h(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:r,sortDirection:i,setSortDirection:a,gridColumns:o,gridData:s,updateQuery:c,sortBy:l,activeTab:u,setActiveTab:d}}));return l(n=>{let h=r(),_=s(`rue:component:anchor`);return a(h,_),d(g(x,{children:l(()=>{let n=r(),h=e(`h1`,n);a(n,h),c(h,`text-5xl font-semibold mb-4 md:mb-4`),a(h,u(`带有排序和过滤器的网格（移植自 Vue）`));let _=e(`div`,n);a(n,_),p(_,`role`,`tablist`),c(_,`tabs tabs-box`);let v=e(`button`,_);a(_,v),p(v,`role`,`tab`),o(()=>{c(v,String(`tab ${A.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{j(`preview`)}),a(v,u(`效果`));let x=e(`button`,_);a(_,x),p(x,`role`,`tab`),o(()=>{c(x,String(`tab ${A.value===`code`?`tab-active`:``}`))}),t(x,`click`,()=>{j(`code`)}),a(x,u(`代码`));let C=e(`div`,n);a(n,C),c(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=s(`rue:slot:anchor`);a(C,T),o(()=>{let t=A.value===`code`?l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let l=e(`div`,n);a(n,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return a(l,u),o(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});i(()=>d(e,l,u))}),t}):``;i(()=>d(t,C,T))}),a(C,u(` `));let M=s(`rue:slot:anchor`);return a(C,M),o(()=>{let n=A.value===`preview`?l(()=>{let n=r(),l=e(`div`,n);a(n,l),c(l,`card bg-base-100 shadow`);let h=e(`div`,l);a(l,h),c(h,`card-body grid gap-4`);let _=e(`form`,h);a(h,_),p(_,`id`,`search`),c(_,`flex items-center gap-2`);let v=e(`span`,_);a(_,v),a(v,u(`Search`));let b=e(`input`,_);a(_,b),p(b,`name`,`query`),c(b,`input input-bordered`),o(()=>{m(b,f.value)}),t(b,`input`,O);let x=s(`rue:component:anchor`);return a(h,x),o(()=>{let e=g(S,{key:`${f.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:f.value,sortKey:y.value,sortDirection:w.value,onSort:k});i(()=>d(e,h,x))}),n}):``;i(()=>d(n,C,M))}),n})}),h,_),h})};export{C as default};