import{$ as e,Ht as t,J as n,Jt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,ft as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v,n as y}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as b}from"./Code-CZqShVUj.js";import{r as x}from"./SidebarPlaygroundExample-5H7RL-T7.js";var S=r=>{let u=v(`useSetup:0:0`,()=>m(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=r.data;if(r.filterKey){let e=String(r.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(r.sortKey){let e=r.sortKey,n=r.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:_}=u,{currentRows:b}=u;return d(u=>{let m=i(`div`,u),v=a(`rue:slot:anchor`);return n(m,v),o(()=>{let u=b.length?d(()=>{let e=s(),u=i(`table`,e);n(e,u),g(u,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let m=i(`thead`,u);n(u,m);let v=i(`tr`,m);n(m,v);let x=a(`rue:list:start`),S=a(`rue:list:end`);n(v,x),n(v,S);let C=new Map;o(()=>{C=y({items:r.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(e,l,u,f,m)=>{h(d(()=>{let l=s(),u=i(`th`,l);n(l,u),o(()=>{c(u,`key`,String(e))}),o(()=>{g(u,`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${r.sortKey===e?`text-white`:``}`)}),p(u,`click`,()=>r.onSort(e));let d=a(`rue:slot:anchor`);n(u,d),o(()=>{let n=_(e);t(()=>h(n,u,d))});let f=i(`span`,u);return n(u,f),o(()=>{g(f,`ml-2 inline-block align-middle opacity-80 ${r.sortKey===e&&r.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`)}),l}),l,u)}})});let w=i(`tbody`,u);n(u,w);let T=a(`rue:list:start`),E=a(`rue:list:end`);n(w,T),n(w,E);let D=new Map;return o(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(e,t,u,p,m)=>{h(d(()=>{let t=s(),u=i(`tr`,t);n(t,u),o(()=>{c(u,`key`,String(m))});let p=a(`rue:list:start`),_=a(`rue:list:end`);n(u,p),n(u,_);let v=new Map;return o(()=>{v=y({items:r.columns||[],getKey:(e,t)=>e,elements:v,parent:u,before:_,singleRoot:!0,trackIndex:!1,start:p,renderItem:(t,r,a,u,p)=>{h(d(()=>{let r=s(),a=i(`td`,r);n(r,a),o(()=>{c(a,`key`,String(t))}),g(a,`bg-gray-50 min-w-[120px] px-5 py-2`);let u=l(a);return n(a,u),o(()=>{f(u,String(e[t]))}),r}),r,a)}})}),t}),t,u)}})}),e}):d(()=>{let t=s(),r=i(`p`,t);return n(t,r),g(r,`text-gray-700`),n(r,e(`No matches found.`)),t});t(()=>h(u,m,v))}),m})},C=()=>{let{searchQuery:l,setSearchQuery:f,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>m(()=>{let[e,t]=v(`useState:1:0`,()=>r(``)),[n,i]=v(`useState:1:1`,()=>r(``)),[a,o]=v(`useState:1:2`,()=>r(1)),s=[`name`,`power`],c=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],l=e=>{t(e.target.value)},u=e=>{if(n.value===e){o(e=>{e.value*=-1});return}i(e),o(-1)},[d,f]=v(`useState:1:3`,()=>r(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:i,sortDirection:a,setSortDirection:o,gridColumns:s,gridData:c,updateQuery:l,sortBy:u,activeTab:d,setActiveTab:f}}));return d(r=>{let f=s(),m=a(`rue:component:anchor`);return n(f,m),h(_(x,{children:d(()=>{let r=s(),f=i(`h1`,r);n(r,f),g(f,`text-5xl font-semibold mb-4 md:mb-4`),n(f,e(`带有排序和过滤器的网格（移植自 Vue）`));let m=i(`div`,r);n(r,m),c(m,`role`,`tablist`),g(m,`tabs tabs-box`);let v=i(`button`,m);n(m,v),c(v,`role`,`tab`),o(()=>{g(v,`tab ${A.value===`preview`?`tab-active`:``}`)}),p(v,`click`,()=>{j(`preview`)}),n(v,e(`效果`));let x=i(`button`,m);n(m,x),c(x,`role`,`tab`),o(()=>{g(x,`tab ${A.value===`code`?`tab-active`:``}`)}),p(x,`click`,()=>{j(`code`)}),n(x,e(`代码`));let C=i(`div`,r);n(r,C),g(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);n(C,T),o(()=>{let e=A.value===`code`?d(()=>{let e=s(),r=i(`div`,e);n(e,r),g(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let c=i(`div`,r);n(r,c),g(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=_(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});t(()=>h(e,c,l))}),e}):``;t(()=>h(e,C,T))}),n(C,e(` `));let M=a(`rue:slot:anchor`);return n(C,M),o(()=>{let r=A.value===`preview`?d(()=>{let r=s(),d=i(`div`,r);n(r,d),g(d,`card bg-base-100 shadow`);let f=i(`div`,d);n(d,f),g(f,`card-body grid gap-4`);let m=i(`form`,f);n(f,m),c(m,`id`,`search`),g(m,`flex items-center gap-2`);let v=i(`span`,m);n(m,v),n(v,e(`Search`));let b=i(`input`,m);n(m,b),c(b,`name`,`query`),g(b,`input input-bordered`),o(()=>{u(b,l.value)}),p(b,`input`,O);let x=a(`rue:component:anchor`);return n(f,x),o(()=>{let e=_(S,{key:`${l.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:l.value,sortKey:y.value,sortDirection:w.value,onSort:k});t(()=>h(e,f,x))}),r}):``;t(()=>h(r,C,M))}),r})}),f,m),f})};export{C as default};