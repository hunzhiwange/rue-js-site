import{$ as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,V as s,W as c,d as l,kt as u,l as d,ot as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-BAZOdMd8.js";import{a as v,n as y}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as b}from"./Code-DY4Ua5uc.js";import{t as x}from"./SidebarPlaygroundExample-B8LFNSBu.js";var S=t=>{let f=v(`useSetup:0:0`,()=>n(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),n=t.data;if(t.filterKey){let e=String(t.filterKey).toLowerCase();n=n.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(t.sortKey){let e=t.sortKey,r=t.sortDirection;n=n.slice().sort((t,n)=>{let i=t[e],a=n[e];return(i===a?0:i>a?1:-1)*r})}return{capitalize:e,currentRows:n}})),{capitalize:h}=f,{currentRows:b}=f;return l(n=>{let f=o(`div`,n),v=c(`rue:slot:anchor`);return i(f,v),u(()=>{let n=b.length?l(()=>{let n=r(),f=o(`table`,n);i(n,f),g(f,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let p=o(`thead`,f);i(f,p);let v=o(`tr`,p);i(p,v);let x=c(`rue:list:start`),S=c(`rue:list:end`);i(v,x),i(v,S);let C=new Map;u(()=>{C=y({items:t.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(n,a,f,p,m)=>{d(l(()=>{let a=r(),l=o(`th`,a);i(a,l),u(()=>{e(l,`key`,String(n))}),u(()=>{g(l,String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${t.sortKey===n?`text-white`:``}`))}),s(l,`click`,()=>t.onSort(n));let f=c(`rue:slot:anchor`);i(l,f),u(()=>{let e=h(n);_(()=>d(e,l,f))});let p=o(`span`,l);return i(l,p),u(()=>{g(p,String(`ml-2 inline-block align-middle opacity-80 ${t.sortKey===n&&t.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`))}),a}),a,f)}})});let w=o(`tbody`,f);i(f,w);let T=c(`rue:list:start`),E=c(`rue:list:end`);i(w,T),i(w,E);let D=new Map;return u(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(n,s,f,p,h)=>{d(l(()=>{let s=r(),f=o(`tr`,s);i(s,f),u(()=>{e(f,`key`,String(h))});let p=c(`rue:list:start`),_=c(`rue:list:end`);i(f,p),i(f,_);let v=new Map;return u(()=>{v=y({items:t.columns||[],getKey:(e,t)=>e,elements:v,parent:f,before:_,singleRoot:!0,trackIndex:!1,start:p,renderItem:(t,s,c,f,p)=>{d(l(()=>{let s=r(),c=o(`td`,s);i(s,c),u(()=>{e(c,`key`,String(t))}),g(c,`bg-gray-50 min-w-[120px] px-5 py-2`);let l=a(c);return i(c,l),u(()=>{m(l,String(n[t]))}),s}),s,c)}})}),s}),s,f)}})}),n}):l(()=>{let e=r(),t=o(`p`,e);return i(e,t),g(t,`text-gray-700`),i(t,p(`No matches found.`)),e});_(()=>d(n,f,v))}),f})},C=()=>{let{searchQuery:a,setSearchQuery:m,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>n(()=>{let[e,n]=v(`useState:1:0`,()=>t(``)),[r,i]=v(`useState:1:1`,()=>t(``)),[a,o]=v(`useState:1:2`,()=>t(1)),s=[`name`,`power`],c=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],l=e=>{n(e.target.value)},u=e=>{if(r.value===e){o(e=>{e.value*=-1});return}i(e),o(-1)},[d,f]=v(`useState:1:3`,()=>t(`preview`));return{searchQuery:e,setSearchQuery:n,sortKey:r,setSortKey:i,sortDirection:a,setSortDirection:o,gridColumns:s,gridData:c,updateQuery:l,sortBy:u,activeTab:d,setActiveTab:f}}));return l(t=>{let n=r(),m=c(`rue:component:anchor`);return i(n,m),d(h(x,{children:l(()=>{let t=r(),n=o(`h1`,t);i(t,n),g(n,`text-5xl font-semibold mb-4 md:mb-4`),i(n,p(`带有排序和过滤器的网格（移植自 Vue）`));let m=o(`div`,t);i(t,m),e(m,`role`,`tablist`),g(m,`tabs tabs-box`);let v=o(`button`,m);i(m,v),e(v,`role`,`tab`),u(()=>{g(v,String(`tab ${A.value===`preview`?`tab-active`:``}`))}),s(v,`click`,()=>{j(`preview`)}),i(v,p(`效果`));let x=o(`button`,m);i(m,x),e(x,`role`,`tab`),u(()=>{g(x,String(`tab ${A.value===`code`?`tab-active`:``}`))}),s(x,`click`,()=>{j(`code`)}),i(x,p(`代码`));let C=o(`div`,t);i(t,C),g(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=c(`rue:slot:anchor`);i(C,T),u(()=>{let e=A.value===`code`?l(()=>{let e=r(),t=o(`div`,e);i(e,t),g(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let n=o(`div`,t);i(t,n),g(n,`card-body p-0`);let a=c(`rue:component:anchor`);return i(n,a),u(()=>{let e=h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});_(()=>d(e,n,a))}),e}):``;_(()=>d(e,C,T))}),i(C,p(` `));let M=c(`rue:slot:anchor`);return i(C,M),u(()=>{let t=A.value===`preview`?l(()=>{let t=r(),n=o(`div`,t);i(t,n),g(n,`card bg-base-100 shadow`);let l=o(`div`,n);i(n,l),g(l,`card-body grid gap-4`);let m=o(`form`,l);i(l,m),e(m,`id`,`search`),g(m,`flex items-center gap-2`);let v=o(`span`,m);i(m,v),i(v,p(`Search`));let b=o(`input`,m);i(m,b),e(b,`name`,`query`),g(b,`input input-bordered`),u(()=>{f(b,a.value)}),s(b,`input`,O);let x=c(`rue:component:anchor`);return i(l,x),u(()=>{let e=h(S,{key:`${a.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:a.value,sortKey:y.value,sortDirection:w.value,onSort:k});_(()=>d(e,l,x))}),t}):``;_(()=>d(t,C,M))}),t})}),n,m),n})};export{C as default};