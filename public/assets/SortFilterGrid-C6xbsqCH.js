import{$ as e,$t as t,Gt as n,X as r,Xt as i,Z as a,Zt as o,ct as s,et as c,gt as l,ht as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v,n as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as b}from"./Code-D5UqTwV6.js";import{r as x}from"./SidebarPlaygroundExample-D2vGHFCu.js";var S=o=>{let u=v(`useSetup:0:0`,()=>i(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=o.data;if(o.filterKey){let e=String(o.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(o.sortKey){let e=o.sortKey,n=o.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:h}=u,{currentRows:b}=u;return d(i=>{let u=g(`div`,i),v=e(`rue:slot:anchor`);return a(u,v),t(()=>{let i=b.length?d(()=>{let i=c(),u=g(`table`,i);a(i,u),_(u,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let f=g(`thead`,u);a(u,f);let v=g(`tr`,f);a(f,v);let x=e(`rue:list:start`),S=e(`rue:list:end`);a(v,x),a(v,S);let C=new Map;t(()=>{C=y({items:o.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(i,l,u,f,m)=>{p(d(()=>{let l=c(),u=g(`th`,l);a(l,u),t(()=>{s(u,`key`,String(i))}),t(()=>{_(u,`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${o.sortKey===i?`text-white`:``}`)}),r(u,`click`,()=>o.onSort(i));let d=e(`rue:slot:anchor`);a(u,d),t(()=>{let e=h(i);n(()=>p(e,u,d))});let f=g(`span`,u);return a(u,f),t(()=>{_(f,`ml-2 inline-block align-middle opacity-80 ${o.sortKey===i&&o.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`)}),l}),l,u)}})});let w=g(`tbody`,u);a(u,w);let T=e(`rue:list:start`),E=e(`rue:list:end`);a(w,T),a(w,E);let D=new Map;return t(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(n,r,i,u,f)=>{p(d(()=>{let r=c(),i=g(`tr`,r);a(r,i),t(()=>{s(i,`key`,String(f))});let u=e(`rue:list:start`),h=e(`rue:list:end`);a(i,u),a(i,h);let v=new Map;return t(()=>{v=y({items:o.columns||[],getKey:(e,t)=>e,elements:v,parent:i,before:h,singleRoot:!0,trackIndex:!1,start:u,renderItem:(e,r,i,o,u)=>{p(d(()=>{let r=c(),i=g(`td`,r);a(r,i),t(()=>{s(i,`key`,String(e))}),_(i,`bg-gray-50 min-w-[120px] px-5 py-2`);let o=m(i);return a(i,o),t(()=>{l(o,String(n[e]))}),r}),r,i)}})}),r}),r,i)}})}),i}):d(()=>{let e=c(),t=g(`p`,e);return a(e,t),_(t,`text-gray-700`),a(t,f(`No matches found.`)),e});n(()=>p(i,u,v))}),u})},C=()=>{let{searchQuery:l,setSearchQuery:m,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>i(()=>{let[e,t]=v(`useState:1:0`,()=>o(``)),[n,r]=v(`useState:1:1`,()=>o(``)),[i,a]=v(`useState:1:2`,()=>o(1)),s=[`name`,`power`],c=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],l=e=>{t(e.target.value)},u=e=>{if(n.value===e){a(e=>{e.value*=-1});return}r(e),a(-1)},[d,f]=v(`useState:1:3`,()=>o(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:r,sortDirection:i,setSortDirection:a,gridColumns:s,gridData:c,updateQuery:l,sortBy:u,activeTab:d,setActiveTab:f}}));return d(i=>{let o=c(),m=e(`rue:component:anchor`);return a(o,m),p(h(x,{children:d(()=>{let i=c(),o=g(`h1`,i);a(i,o),_(o,`text-5xl font-semibold mb-4 md:mb-4`),a(o,f(`带有排序和过滤器的网格（移植自 Vue）`));let m=g(`div`,i);a(i,m),s(m,`role`,`tablist`),_(m,`tabs tabs-box`);let v=g(`button`,m);a(m,v),s(v,`role`,`tab`),t(()=>{_(v,`tab ${A.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{j(`preview`)}),a(v,f(`效果`));let x=g(`button`,m);a(m,x),s(x,`role`,`tab`),t(()=>{_(x,`tab ${A.value===`code`?`tab-active`:``}`)}),r(x,`click`,()=>{j(`code`)}),a(x,f(`代码`));let C=g(`div`,i);a(i,C),_(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);a(C,T),t(()=>{let r=A.value===`code`?d(()=>{let r=c(),i=g(`div`,r);a(r,i),_(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let o=g(`div`,i);a(i,o),_(o,`card-body p-0`);let s=e(`rue:component:anchor`);return a(o,s),t(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});n(()=>p(e,o,s))}),r}):``;n(()=>p(r,C,T))}),a(C,f(` `));let M=e(`rue:slot:anchor`);return a(C,M),t(()=>{let i=A.value===`preview`?d(()=>{let i=c(),o=g(`div`,i);a(i,o),_(o,`card bg-base-100 shadow`);let d=g(`div`,o);a(o,d),_(d,`card-body grid gap-4`);let m=g(`form`,d);a(d,m),s(m,`id`,`search`),_(m,`flex items-center gap-2`);let v=g(`span`,m);a(m,v),a(v,f(`Search`));let b=g(`input`,m);a(m,b),s(b,`name`,`query`),_(b,`input input-bordered`),t(()=>{u(b,l.value)}),r(b,`input`,O);let x=e(`rue:component:anchor`);return a(d,x),t(()=>{let e=h(S,{key:`${l.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:l.value,sortKey:y.value,sortDirection:w.value,onSort:k});n(()=>p(e,d,x))}),i}):``;n(()=>p(i,C,M))}),i})}),o,m),o})};export{C as default};