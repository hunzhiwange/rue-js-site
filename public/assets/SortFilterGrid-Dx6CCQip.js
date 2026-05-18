import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,d as u,dt as d,gt as f,ht as p,l as m,t as h,vt as g,z as _}from"./vapor-runtime-BuwLbCGk.js";import{a as v,n as y}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as b}from"./Code-DQxnq0in.js";import{t as x}from"./SidebarPlaygroundExample-BwOo72z2.js";var S=l=>{let f=v(`useSetup:0:0`,()=>p(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=l.data;if(l.filterKey){let e=String(l.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(l.sortKey){let e=l.sortKey,n=l.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:h}=f,{currentRows:b}=f;return u(f=>{let p=r(`div`,f),v=e(`rue:slot:anchor`);return a(p,v),g(()=>{let f=b.length?u(()=>{let s=t(),f=r(`table`,s);a(s,f),n(f,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let p=r(`thead`,f);a(f,p);let v=r(`tr`,p);a(p,v);let x=e(`rue:list:start`),S=e(`rue:list:end`);a(v,x),a(v,S);let C=new Map;g(()=>{C=y({items:l.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(o,s,f,p,_)=>{m(u(()=>{let s=t(),u=r(`th`,s);a(s,u),g(()=>{c(u,`key`,String(o))}),g(()=>{n(u,String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${l.sortKey===o?`text-white`:``}`))}),i(u,`click`,()=>l.onSort(o));let f=e(`rue:slot:anchor`);a(u,f),g(()=>{let e=h(o);d(()=>m(e,u,f))});let p=r(`span`,u);return a(u,p),g(()=>{n(p,String(`ml-2 inline-block align-middle opacity-80 ${l.sortKey===o&&l.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`))}),s}),s,f)}})});let w=r(`tbody`,f);a(f,w);let T=e(`rue:list:start`),E=e(`rue:list:end`);a(w,T),a(w,E);let D=new Map;return g(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(i,s,d,f,p)=>{m(u(()=>{let s=t(),d=r(`tr`,s);a(s,d),g(()=>{c(d,`key`,String(p))});let f=e(`rue:list:start`),h=e(`rue:list:end`);a(d,f),a(d,h);let v=new Map;return g(()=>{v=y({items:l.columns||[],getKey:(e,t)=>e,elements:v,parent:d,before:h,singleRoot:!0,trackIndex:!1,start:f,renderItem:(e,s,l,d,f)=>{m(u(()=>{let s=t(),l=r(`td`,s);a(s,l),g(()=>{c(l,`key`,String(e))}),n(l,`bg-gray-50 min-w-[120px] px-5 py-2`);let u=_(l);return a(l,u),g(()=>{o(u,String(i[e]))}),s}),s,l)}})}),s}),s,d)}})}),s}):u(()=>{let e=t(),i=r(`p`,e);return a(e,i),n(i,`text-gray-700`),a(i,s(`No matches found.`)),e});d(()=>m(f,p,v))}),p})},C=()=>{let{searchQuery:o,setSearchQuery:_,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>p(()=>{let[e,t]=v(`useState:1:0`,()=>f(``)),[n,r]=v(`useState:1:1`,()=>f(``)),[i,a]=v(`useState:1:2`,()=>f(1)),o=[`name`,`power`],s=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],c=e=>{t(e.target.value)},l=e=>{if(n.value===e){a(e=>{e.value*=-1});return}r(e),a(-1)},[u,d]=v(`useState:1:3`,()=>f(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:r,sortDirection:i,setSortDirection:a,gridColumns:o,gridData:s,updateQuery:c,sortBy:l,activeTab:u,setActiveTab:d}}));return u(f=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),m(h(x,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`带有排序和过滤器的网格（移植自 Vue）`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let v=r(`button`,_);a(_,v),c(v,`role`,`tab`),g(()=>{n(v,String(`tab ${A.value===`preview`?`tab-active`:``}`))}),i(v,`click`,()=>{j(`preview`)}),a(v,s(`效果`));let x=r(`button`,_);a(_,x),c(x,`role`,`tab`),g(()=>{n(x,String(`tab ${A.value===`code`?`tab-active`:``}`))}),i(x,`click`,()=>{j(`code`)}),a(x,s(`代码`));let C=r(`div`,f);a(f,C),n(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);a(C,T),g(()=>{let i=A.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),g(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});d(()=>m(e,s,c))}),i}):``;d(()=>m(i,C,T))}),a(C,s(` `));let M=e(`rue:slot:anchor`);return a(C,M),g(()=>{let f=A.value===`preview`?u(()=>{let u=t(),f=r(`div`,u);a(u,f),n(f,`card bg-base-100 shadow`);let p=r(`div`,f);a(f,p),n(p,`card-body grid gap-4`);let _=r(`form`,p);a(p,_),c(_,`id`,`search`),n(_,`flex items-center gap-2`);let v=r(`span`,_);a(_,v),a(v,s(`Search`));let b=r(`input`,_);a(_,b),c(b,`name`,`query`),n(b,`input input-bordered`),g(()=>{l(b,o.value)}),i(b,`input`,O);let x=e(`rue:component:anchor`);return a(p,x),g(()=>{let e=h(S,{key:`${o.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:o.value,sortKey:y.value,sortDirection:w.value,onSort:k});d(()=>m(e,p,x))}),u}):``;d(()=>m(f,C,M))}),f})}),p,_),p})};export{C as default};