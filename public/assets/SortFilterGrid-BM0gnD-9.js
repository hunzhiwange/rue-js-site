import{$t as e,Q as t,Z as n,_t as r,an as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v,n as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./Code-4SUSUwRg.js";import{r as x}from"./SidebarPlaygroundExample-BEWYUWOl.js";var S=r=>{let i=v(`useSetup:0:0`,()=>s(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=r.data;if(r.filterKey){let e=String(r.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(r.sortKey){let e=r.sortKey,n=r.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:m}=i,{currentRows:b}=i;return l(i=>{let s=d(`div`,i),v=o(`rue:slot:anchor`);return t(s,v),_(()=>{let i=b.length?l(()=>{let i=h(),s=d(`table`,i);t(i,s),a(s,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let p=d(`thead`,s);t(s,p);let v=d(`tr`,p);t(p,v);let x=o(`rue:list:start`),S=o(`rue:list:end`);t(v,x),t(v,S);let C=new Map;_(()=>{C=y({items:r.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(i,s,c,p,g)=>{f(l(()=>{let s=h(),c=d(`th`,s);t(s,c),_(()=>{u(c,`key`,String(i))}),_(()=>{a(c,`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${r.sortKey===i?`text-white`:``}`)}),n(c,`click`,()=>r.onSort(i));let l=o(`rue:slot:anchor`);t(c,l),_(()=>{let t=m(i);e(()=>f(t,c,l))});let p=d(`span`,c);return t(c,p),_(()=>{a(p,`ml-2 inline-block align-middle opacity-80 ${r.sortKey===i&&r.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`)}),s}),s,c)}})});let w=d(`tbody`,s);t(s,w);let T=o(`rue:list:start`),E=o(`rue:list:end`);t(w,T),t(w,E);let D=new Map;return _(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(e,n,i,s,p)=>{f(l(()=>{let n=h(),i=d(`tr`,n);t(n,i),_(()=>{u(i,`key`,String(p))});let s=o(`rue:list:start`),m=o(`rue:list:end`);t(i,s),t(i,m);let v=new Map;return _(()=>{v=y({items:r.columns||[],getKey:(e,t)=>e,elements:v,parent:i,before:m,singleRoot:!0,trackIndex:!1,start:s,renderItem:(n,r,i,o,s)=>{f(l(()=>{let r=h(),i=d(`td`,r);t(r,i),_(()=>{u(i,`key`,String(n))}),a(i,`bg-gray-50 min-w-[120px] px-5 py-2`);let o=c(i);return t(i,o),_(()=>{g(o,String(e[n]))}),r}),r,i)}})}),n}),n,i)}})}),i}):l(()=>{let e=h(),n=d(`p`,e);return t(e,n),a(n,`text-gray-700`),t(n,p(`No matches found.`)),e});e(()=>f(i,s,v))}),s})},C=()=>{let{searchQuery:c,setSearchQuery:g,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>s(()=>{let[e,t]=v(`useState:1:0`,()=>i(``)),[n,r]=v(`useState:1:1`,()=>i(``)),[a,o]=v(`useState:1:2`,()=>i(1)),s=[`name`,`power`],c=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],l=e=>{t(e.target.value)},u=e=>{if(n.value===e){o(e=>{e.value*=-1});return}r(e),o(-1)},[d,f]=v(`useState:1:3`,()=>i(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:r,sortDirection:a,setSortDirection:o,gridColumns:s,gridData:c,updateQuery:l,sortBy:u,activeTab:d,setActiveTab:f}}));return l(i=>{let s=h(),g=o(`rue:component:anchor`);return t(s,g),f(m(x,{children:l(()=>{let i=h(),s=d(`h1`,i);t(i,s),a(s,`text-5xl font-semibold mb-4 md:mb-4`),t(s,p(`带有排序和过滤器的网格（移植自 Vue）`));let g=d(`div`,i);t(i,g),u(g,`role`,`tablist`),a(g,`tabs tabs-box`);let v=d(`button`,g);t(g,v),u(v,`role`,`tab`),_(()=>{a(v,`tab ${A.value===`preview`?`tab-active`:``}`)}),n(v,`click`,()=>{j(`preview`)}),t(v,p(`效果`));let x=d(`button`,g);t(g,x),u(x,`role`,`tab`),_(()=>{a(x,`tab ${A.value===`code`?`tab-active`:``}`)}),n(x,`click`,()=>{j(`code`)}),t(x,p(`代码`));let C=d(`div`,i);t(i,C),a(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=o(`rue:slot:anchor`);t(C,T),_(()=>{let n=A.value===`code`?l(()=>{let n=h(),r=d(`div`,n);t(n,r),a(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let i=d(`div`,r);t(r,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return t(i,s),_(()=>{let t=m(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});e(()=>f(t,i,s))}),n}):``;e(()=>f(n,C,T))}),t(C,p(` `));let M=o(`rue:slot:anchor`);return t(C,M),_(()=>{let i=A.value===`preview`?l(()=>{let i=h(),s=d(`div`,i);t(i,s),a(s,`card bg-base-100 shadow`);let l=d(`div`,s);t(s,l),a(l,`card-body grid gap-4`);let g=d(`form`,l);t(l,g),u(g,`id`,`search`),a(g,`flex items-center gap-2`);let v=d(`span`,g);t(g,v),t(v,p(`Search`));let b=d(`input`,g);t(g,b),u(b,`name`,`query`),a(b,`input input-bordered`),_(()=>{r(b,c.value)}),n(b,`input`,O);let x=o(`rue:component:anchor`);return t(l,x),_(()=>{let t=m(S,{key:`${c.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:c.value,sortKey:y.value,sortDirection:w.value,onSort:k});e(()=>f(t,l,x))}),i}):``;e(()=>f(i,C,M))}),i})}),s,g),s})};export{C as default};