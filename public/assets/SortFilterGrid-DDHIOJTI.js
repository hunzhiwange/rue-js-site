import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,jt as s,mt as c,ot as l,pt as u,st as d,tn as f,vn as p,wn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v,n as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./Code-DhoWkRkB.js";import{r as x}from"./SidebarPlaygroundExample-B78jsvoF.js";var S=s=>{let m=v(`useSetup:0:0`,()=>e(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=s.data;if(s.filterKey){let e=String(s.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(s.sortKey){let e=s.sortKey,n=s.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:_}=m,{currentRows:b}=m;return h(e=>{let m=u(`div`,e),v=i(`rue:slot:anchor`);return d(m,v),f(()=>{let e=b.length?h(()=>{let e=a(),c=u(`table`,e);d(e,c),r(c,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let m=u(`thead`,c);d(c,m);let v=u(`tr`,m);d(m,v);let x=i(`rue:list:start`),S=i(`rue:list:end`);d(v,x),d(v,S);let C=new Map;f(()=>{C=y({items:s.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(e,n,o,c,m)=>{g(h(()=>{let n=a(),o=u(`th`,n);d(n,o),f(()=>{t(o,`key`,String(e))}),f(()=>{r(o,`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${s.sortKey===e?`text-white`:``}`)}),l(o,`click`,()=>s.onSort(e));let c=i(`rue:slot:anchor`);d(o,c),f(()=>{let t=_(e);p(()=>g(t,o,c))});let m=u(`span`,o);return d(o,m),f(()=>{r(m,`ml-2 inline-block align-middle opacity-80 ${s.sortKey===e&&s.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`)}),n}),n,o)}})});let w=u(`tbody`,c);d(c,w);let T=i(`rue:list:start`),E=i(`rue:list:end`);d(w,T),d(w,E);let D=new Map;return f(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(e,c,l,p,m)=>{g(h(()=>{let c=a(),l=u(`tr`,c);d(c,l),f(()=>{t(l,`key`,String(m))});let p=i(`rue:list:start`),_=i(`rue:list:end`);d(l,p),d(l,_);let v=new Map;return f(()=>{v=y({items:s.columns||[],getKey:(e,t)=>e,elements:v,parent:l,before:_,singleRoot:!0,trackIndex:!1,start:p,renderItem:(i,s,c,l,p)=>{g(h(()=>{let s=a(),c=u(`td`,s);d(s,c),f(()=>{t(c,`key`,String(i))}),r(c,`bg-gray-50 min-w-[120px] px-5 py-2`);let l=o(c);return d(c,l),f(()=>{n(l,String(e[i]))}),s}),s,c)}})}),c}),c,l)}})}),e}):h(()=>{let e=a(),t=u(`p`,e);return d(e,t),r(t,`text-gray-700`),d(t,c(`No matches found.`)),e});p(()=>g(e,m,v))}),m})},C=()=>{let{searchQuery:n,setSearchQuery:o,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>e(()=>{let[e,t]=v(`useState:1:0`,()=>m(``)),[n,r]=v(`useState:1:1`,()=>m(``)),[i,a]=v(`useState:1:2`,()=>m(1)),o=[`name`,`power`],s=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],c=e=>{t(e.target.value)},l=e=>{if(n.value===e){a(e=>{e.value*=-1});return}r(e),a(-1)},[u,d]=v(`useState:1:3`,()=>m(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:r,sortDirection:i,setSortDirection:a,gridColumns:o,gridData:s,updateQuery:c,sortBy:l,activeTab:u,setActiveTab:d}}));return h(e=>{let o=a(),m=i(`rue:component:anchor`);return d(o,m),g(_(x,{children:h(()=>{let e=a(),o=u(`h1`,e);d(e,o),r(o,`text-5xl font-semibold mb-4 md:mb-4`),d(o,c(`带有排序和过滤器的网格（移植自 Vue）`));let m=u(`div`,e);d(e,m),t(m,`role`,`tablist`),r(m,`tabs tabs-box`);let v=u(`button`,m);d(m,v),t(v,`role`,`tab`),f(()=>{r(v,`tab ${A.value===`preview`?`tab-active`:``}`)}),l(v,`click`,()=>{j(`preview`)}),d(v,c(`效果`));let x=u(`button`,m);d(m,x),t(x,`role`,`tab`),f(()=>{r(x,`tab ${A.value===`code`?`tab-active`:``}`)}),l(x,`click`,()=>{j(`code`)}),d(x,c(`代码`));let C=u(`div`,e);d(e,C),r(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=i(`rue:slot:anchor`);d(C,T),f(()=>{let e=A.value===`code`?h(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});p(()=>g(e,n,o))}),e}):``;p(()=>g(e,C,T))}),d(C,c(` `));let M=i(`rue:slot:anchor`);return d(C,M),f(()=>{let e=A.value===`preview`?h(()=>{let e=a(),o=u(`div`,e);d(e,o),r(o,`card bg-base-100 shadow`);let m=u(`div`,o);d(o,m),r(m,`card-body grid gap-4`);let h=u(`form`,m);d(m,h),t(h,`id`,`search`),r(h,`flex items-center gap-2`);let v=u(`span`,h);d(h,v),d(v,c(`Search`));let b=u(`input`,h);d(h,b),t(b,`name`,`query`),r(b,`input input-bordered`),f(()=>{s(b,n.value)}),l(b,`input`,O);let x=i(`rue:component:anchor`);return d(m,x),f(()=>{let e=_(S,{key:`${n.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:n.value,sortKey:y.value,sortDirection:w.value,onSort:k});p(()=>g(e,m,x))}),e}):``;p(()=>g(e,C,M))}),e})}),o,m),o})};export{C as default};