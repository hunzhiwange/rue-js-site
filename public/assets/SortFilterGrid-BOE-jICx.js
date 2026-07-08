import{Q as e,Vt as t,Z as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,sn as p,t as m,tn as h,tt as g,yt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v,n as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./Code-BoXKy3gJ.js";import{r as x}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var S=p=>{let m=v(`useSetup:0:0`,()=>u(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=p.data;if(p.filterKey){let e=String(p.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(p.sortKey){let e=p.sortKey,n=p.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:_}=m,{currentRows:b}=m;return s(u=>{let m=f(`div`,u),v=g(`rue:slot:anchor`);return e(m,v),t(()=>{let u=b.length?s(()=>{let o=c(),u=f(`table`,o);e(o,u),d(u,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let m=f(`thead`,u);e(u,m);let v=f(`tr`,m);e(m,v);let x=g(`rue:list:start`),S=g(`rue:list:end`);e(v,x),e(v,S);let C=new Map;t(()=>{C=y({items:p.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(r,i,o,u,m)=>{l(s(()=>{let i=c(),o=f(`th`,i);e(i,o),t(()=>{a(o,`key`,String(r))}),t(()=>{d(o,`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${p.sortKey===r?`text-white`:``}`)}),n(o,`click`,()=>p.onSort(r));let s=g(`rue:slot:anchor`);e(o,s),t(()=>{let e=_(r);h(()=>l(e,o,s))});let u=f(`span`,o);return e(o,u),t(()=>{d(u,`ml-2 inline-block align-middle opacity-80 ${p.sortKey===r&&p.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`)}),i}),i,o)}})});let w=f(`tbody`,u);e(u,w);let T=g(`rue:list:start`),E=g(`rue:list:end`);e(w,T),e(w,E);let D=new Map;return t(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(n,o,u,m,h)=>{l(s(()=>{let o=c(),u=f(`tr`,o);e(o,u),t(()=>{a(u,`key`,String(h))});let m=g(`rue:list:start`),_=g(`rue:list:end`);e(u,m),e(u,_);let v=new Map;return t(()=>{v=y({items:p.columns||[],getKey:(e,t)=>e,elements:v,parent:u,before:_,singleRoot:!0,trackIndex:!1,start:m,renderItem:(o,u,p,m,h)=>{l(s(()=>{let s=c(),l=f(`td`,s);e(s,l),t(()=>{a(l,`key`,String(o))}),d(l,`bg-gray-50 min-w-[120px] px-5 py-2`);let u=r(l);return e(l,u),t(()=>{i(u,String(n[o]))}),s}),u,p)}})}),o}),o,u)}})}),o}):s(()=>{let t=c(),n=f(`p`,t);return e(t,n),d(n,`text-gray-700`),e(n,o(`No matches found.`)),t});h(()=>l(u,m,v))}),m})},C=()=>{let{searchQuery:r,setSearchQuery:i,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>u(()=>{let[e,t]=v(`useState:1:0`,()=>p(``)),[n,r]=v(`useState:1:1`,()=>p(``)),[i,a]=v(`useState:1:2`,()=>p(1)),o=[`name`,`power`],s=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],c=e=>{t(e.target.value)},l=e=>{if(n.value===e){a(e=>{e.value*=-1});return}r(e),a(-1)},[u,d]=v(`useState:1:3`,()=>p(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:r,sortDirection:i,setSortDirection:a,gridColumns:o,gridData:s,updateQuery:c,sortBy:l,activeTab:u,setActiveTab:d}}));return s(i=>{let u=c(),p=g(`rue:component:anchor`);return e(u,p),l(m(x,{children:s(()=>{let i=c(),u=f(`h1`,i);e(i,u),d(u,`text-5xl font-semibold mb-4 md:mb-4`),e(u,o(`带有排序和过滤器的网格（移植自 Vue）`));let p=f(`div`,i);e(i,p),a(p,`role`,`tablist`),d(p,`tabs tabs-box`);let v=f(`button`,p);e(p,v),a(v,`role`,`tab`),t(()=>{d(v,`tab ${A.value===`preview`?`tab-active`:``}`)}),n(v,`click`,()=>{j(`preview`)}),e(v,o(`效果`));let x=f(`button`,p);e(p,x),a(x,`role`,`tab`),t(()=>{d(x,`tab ${A.value===`code`?`tab-active`:``}`)}),n(x,`click`,()=>{j(`code`)}),e(x,o(`代码`));let C=f(`div`,i);e(i,C),d(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=g(`rue:slot:anchor`);e(C,T),t(()=>{let n=A.value===`code`?s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let i=f(`div`,r);e(r,i),d(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});h(()=>l(e,i,a))}),n}):``;h(()=>l(n,C,T))}),e(C,o(` `));let M=g(`rue:slot:anchor`);return e(C,M),t(()=>{let i=A.value===`preview`?s(()=>{let i=c(),s=f(`div`,i);e(i,s),d(s,`card bg-base-100 shadow`);let u=f(`div`,s);e(s,u),d(u,`card-body grid gap-4`);let p=f(`form`,u);e(u,p),a(p,`id`,`search`),d(p,`flex items-center gap-2`);let v=f(`span`,p);e(p,v),e(v,o(`Search`));let b=f(`input`,p);e(p,b),a(b,`name`,`query`),d(b,`input input-bordered`),t(()=>{_(b,r.value)}),n(b,`input`,O);let x=g(`rue:component:anchor`);return e(u,x),t(()=>{let e=m(S,{key:`${r.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:r.value,sortKey:y.value,sortDirection:w.value,onSort:k});h(()=>l(e,u,x))}),i}):``;h(()=>l(i,C,M))}),i})}),u,p),u})};export{C as default};