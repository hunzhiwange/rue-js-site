import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,X as c,Z as l,_t as u,at as d,bt as f,c as p,j as m,lt as h,pt as g,t as _,u as v}from"./vapor-runtime-D3a-68js.js";import{a as y,n as b}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as x}from"./Code-2C2psoH3.js";import{t as S}from"./SidebarPlaygroundExample-DKa0aI1C.js";var C=c=>{let{sortKey:_,sortOrders:x,filteredData:S,sortBy:C,capitalize:w}=y(`useSetup:0:0`,()=>u(()=>{let e=y(`ref:1:0`,()=>h(``)),t=y(`ref:1:1`,()=>h(c.columns.reduce((e,t)=>(e[t]=1,e),{})));return{sortKey:e,sortOrders:t,filteredData:y(`computed:1:2`,()=>d(()=>{let n=c.data,r=c.filterKey;if(r){let e=String(r).toLowerCase();n=n.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}let i=e.value;if(i){let e=t.value[i];n=n.slice().sort((t,n)=>{let r=t[i],a=n[i];return(r===a?0:r>a?1:-1)*e})}return n})),sortBy:n=>{e.value=n,t.value[n]=(t.value[n]||1)*-1},capitalize:e=>e.charAt(0).toUpperCase()+e.slice(1)}}));return v(()=>{let u=n(`div`),d=a(`rue:slot:anchor`);return i(u,d),f(()=>{let h=S.get().length?v(()=>{let r=e(),u=n(`table`);i(r,u),t(u,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let d=n(`thead`);i(u,d);let h=n(`tr`);i(d,h);let y=a(`rue:list:start`),T=a(`rue:list:end`);i(h,y),i(h,T);let E=new Map;f(()=>{E=b({items:c.columns||[],getKey:(e,t)=>e,elements:E,parent:h,before:T,singleRoot:!0,trackIndex:!1,start:y,renderItem:(r,o,c,l,u)=>{p(v(()=>{let o=e(),c=n(`th`);i(o,c),f(()=>{s(c,`key`,String(r))}),f(()=>{t(c,String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${_.value===r?`text-white`:``}`))}),m(c,`click`,()=>C(r));let l=a(`rue:slot:anchor`);i(c,l),f(()=>{let e=w(r);g(()=>p(e,c,l))});let u=n(`span`);return i(c,u),f(()=>{t(u,String(`ml-2 inline-block align-middle opacity-80 ${x.value[r]>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`))}),o}),o,c)}})});let D=n(`tbody`);i(u,D);let O=a(`rue:list:start`),k=a(`rue:list:end`);i(D,O),i(D,k);let A=new Map;return f(()=>{A=b({items:S.get()||[],getKey:(e,t)=>t,elements:A,parent:D,before:k,singleRoot:!0,start:O,renderItem:(r,u,d,m,h)=>{p(v(()=>{let u=e(),d=n(`tr`);i(u,d),f(()=>{s(d,`key`,String(h))});let m=a(`rue:list:start`),g=a(`rue:list:end`);i(d,m),i(d,g);let _=new Map;return f(()=>{_=b({items:c.columns||[],getKey:(e,t)=>e,elements:_,parent:d,before:g,singleRoot:!0,trackIndex:!1,start:m,renderItem:(a,c,u,d,m)=>{p(v(()=>{let c=e(),u=n(`td`);i(c,u),f(()=>{s(u,`key`,String(a))}),t(u,`bg-gray-50 min-w-[120px] px-5 py-2`);let d=o(u);return i(u,d),f(()=>{l(d,String(r[a]))}),c}),c,u)}})}),u}),u,d)}})}),r}):v(()=>{let a=e(),o=n(`p`);return i(a,o),t(o,`text-gray-700`),i(o,r(`No matches found.`)),a});g(()=>p(h,u,d))}),u})},w=()=>{let{searchQuery:o,gridColumns:l,gridData:d,updateQuery:b,activeTab:w}=y(`useSetup:0:0:dup1`,()=>u(()=>{let e=y(`ref:1:3`,()=>h(``));return{searchQuery:e,gridColumns:[`name`,`power`],gridData:[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],updateQuery:t=>{e.value=t.target.value},activeTab:y(`ref:1:4`,()=>h(`preview`))}}));return v(()=>{let u=e(),h=a(`rue:component:anchor`);return i(u,h),p(_(S,{children:v(()=>{let u=e(),h=n(`h1`);i(u,h),t(h,`text-5xl font-semibold mb-4 md:mb-4`),i(h,r(`带有排序和过滤器的网格（移植自 Vue）`));let y=n(`div`);i(u,y),s(y,`role`,`tablist`),t(y,`tabs tabs-box`);let S=n(`button`);i(y,S),s(S,`role`,`tab`),f(()=>{t(S,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),m(S,`click`,()=>{w.value=`preview`}),i(S,r(`效果`));let T=n(`button`);i(y,T),s(T,`role`,`tab`),f(()=>{t(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),m(T,`click`,()=>{w.value=`code`}),i(T,r(`代码`));let E=n(`div`);i(u,E),t(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=a(`rue:slot:anchor`);i(E,D),f(()=>{let r=w.value===`code`?v(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),f(()=>{let e=_(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});g(()=>p(e,s,c))}),r}):``;g(()=>p(r,E,D))}),i(E,r(` `));let O=a(`rue:slot:anchor`);return i(E,O),f(()=>{let u=w.value===`preview`?v(()=>{let u=e(),h=n(`div`);i(u,h),t(h,`card bg-base-100 shadow`);let v=n(`div`);i(h,v),t(v,`card-body grid gap-4`);let y=n(`form`);i(v,y),s(y,`id`,`search`),t(y,`flex items-center gap-2`);let x=n(`span`);i(y,x),i(x,r(`Search`));let S=n(`input`);i(y,S),s(S,`name`,`query`),t(S,`input input-bordered`),f(()=>{c(S,o.value)}),m(S,`input`,b);let w=a(`rue:component:anchor`);return i(v,w),f(()=>{let e=_(C,{data:d,columns:l,filterKey:o.value});g(()=>p(e,v,w))}),u}):``;g(()=>p(u,E,O))}),u})}),u,h),u})};export{w as default};