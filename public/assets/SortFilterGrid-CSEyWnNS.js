import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Tt as o,U as s,W as c,Z as l,at as u,it as d,l as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v,n as y}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as b}from"./Code-BCLFq1E3.js";import{t as x}from"./SidebarPlaygroundExample-CdMvdgT7.js";var S=o=>{let d=v(`useSetup:0:0`,()=>h(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=o.data;if(o.filterKey){let e=String(o.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(o.sortKey){let e=o.sortKey,n=o.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:m}=d,{currentRows:b}=d;return f(d=>{let h=c(`div`,d),v=i(`rue:slot:anchor`);return t(h,v),n(()=>{let d=b.length?f(()=>{let r=s(),d=c(`table`,r);t(r,d),e(d,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let h=c(`thead`,d);t(d,h);let v=c(`tr`,h);t(h,v);let x=i(`rue:list:start`),S=i(`rue:list:end`);t(v,x),t(v,S);let C=new Map;n(()=>{C=y({items:o.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(r,a,u,d,h)=>{p(f(()=>{let a=s(),u=c(`th`,a);t(a,u),n(()=>{l(u,`key`,String(r))}),n(()=>{e(u,String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${o.sortKey===r?`text-white`:``}`))}),_(u,`click`,()=>o.onSort(r));let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let e=m(r);g(()=>p(e,u,d))});let f=c(`span`,u);return t(u,f),n(()=>{e(f,String(`ml-2 inline-block align-middle opacity-80 ${o.sortKey===r&&o.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`))}),a}),a,u)}})});let w=c(`tbody`,d);t(d,w);let T=i(`rue:list:start`),E=i(`rue:list:end`);t(w,T),t(w,E);let D=new Map;return n(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(r,d,m,h,g)=>{p(f(()=>{let d=s(),m=c(`tr`,d);t(d,m),n(()=>{l(m,`key`,String(g))});let h=i(`rue:list:start`),_=i(`rue:list:end`);t(m,h),t(m,_);let v=new Map;return n(()=>{v=y({items:o.columns||[],getKey:(e,t)=>e,elements:v,parent:m,before:_,singleRoot:!0,trackIndex:!1,start:h,renderItem:(i,o,d,m,h)=>{p(f(()=>{let o=s(),d=c(`td`,o);t(o,d),n(()=>{l(d,`key`,String(i))}),e(d,`bg-gray-50 min-w-[120px] px-5 py-2`);let f=a(d);return t(d,f),n(()=>{u(f,String(r[i]))}),o}),o,d)}})}),d}),d,m)}})}),r}):f(()=>{let n=s(),i=c(`p`,n);return t(n,i),e(i,`text-gray-700`),t(i,r(`No matches found.`)),n});g(()=>p(d,h,v))}),h})},C=()=>{let{searchQuery:a,setSearchQuery:u,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>h(()=>{let[e,t]=v(`useState:1:0`,()=>o(``)),[n,r]=v(`useState:1:1`,()=>o(``)),[i,a]=v(`useState:1:2`,()=>o(1)),s=[`name`,`power`],c=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],l=e=>{t(e.target.value)},u=e=>{if(n.value===e){a(e=>{e.value*=-1});return}r(e),a(-1)},[d,f]=v(`useState:1:3`,()=>o(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:r,sortDirection:i,setSortDirection:a,gridColumns:s,gridData:c,updateQuery:l,sortBy:u,activeTab:d,setActiveTab:f}}));return f(o=>{let u=s(),h=i(`rue:component:anchor`);return t(u,h),p(m(x,{children:f(()=>{let o=s(),u=c(`h1`,o);t(o,u),e(u,`text-5xl font-semibold mb-4 md:mb-4`),t(u,r(`带有排序和过滤器的网格（移植自 Vue）`));let h=c(`div`,o);t(o,h),l(h,`role`,`tablist`),e(h,`tabs tabs-box`);let v=c(`button`,h);t(h,v),l(v,`role`,`tab`),n(()=>{e(v,String(`tab ${A.value===`preview`?`tab-active`:``}`))}),_(v,`click`,()=>{j(`preview`)}),t(v,r(`效果`));let x=c(`button`,h);t(h,x),l(x,`role`,`tab`),n(()=>{e(x,String(`tab ${A.value===`code`?`tab-active`:``}`))}),_(x,`click`,()=>{j(`code`)}),t(x,r(`代码`));let C=c(`div`,o);t(o,C),e(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=i(`rue:slot:anchor`);t(C,T),n(()=>{let r=A.value===`code`?f(()=>{let r=s(),a=c(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let o=c(`div`,a);t(a,o),e(o,`card-body p-0`);let l=i(`rue:component:anchor`);return t(o,l),n(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});g(()=>p(e,o,l))}),r}):``;g(()=>p(r,C,T))}),t(C,r(` `));let M=i(`rue:slot:anchor`);return t(C,M),n(()=>{let o=A.value===`preview`?f(()=>{let o=s(),u=c(`div`,o);t(o,u),e(u,`card bg-base-100 shadow`);let f=c(`div`,u);t(u,f),e(f,`card-body grid gap-4`);let h=c(`form`,f);t(f,h),l(h,`id`,`search`),e(h,`flex items-center gap-2`);let v=c(`span`,h);t(h,v),t(v,r(`Search`));let b=c(`input`,h);t(h,b),l(b,`name`,`query`),e(b,`input input-bordered`),n(()=>{d(b,a.value)}),_(b,`input`,O);let x=i(`rue:component:anchor`);return t(f,x),n(()=>{let e=m(S,{key:`${a.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:a.value,sortKey:y.value,sortDirection:w.value,onSort:k});g(()=>p(e,f,x))}),o}):``;g(()=>p(o,C,M))}),o})}),u,h),u})};export{C as default};