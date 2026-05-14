import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,d,l as f,mt as p,nt as m,ot as h,t as g,ut as _,z as v}from"./vapor-runtime-Dfq7aA8z.js";import{a as y,n as b}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as x}from"./Code-CLTo4rRM.js";import{t as S}from"./SidebarPlaygroundExample-DOFGFBd1.js";var C=l=>{let{sortKey:g,sortOrders:x,filteredData:S,sortBy:C,capitalize:w}=y(`useSetup:0:0`,()=>p(()=>{let e=y(`ref:1:0`,()=>h(``)),t=y(`ref:1:1`,()=>h(l.columns.reduce((e,t)=>(e[t]=1,e),{})));return{sortKey:e,sortOrders:t,filteredData:y(`computed:1:2`,()=>m(()=>{let n=l.data,r=l.filterKey;if(r){let e=String(r).toLowerCase();n=n.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}let i=e.value;if(i){let e=t.value[i];n=n.slice().sort((t,n)=>{let r=t[i],a=n[i];return(r===a?0:r>a?1:-1)*e})}return n})),sortBy:n=>{e.value=n,t.value[n]=(t.value[n]||1)*-1},capitalize:e=>e.charAt(0).toUpperCase()+e.slice(1)}}));return d(p=>{let m=r(`div`,p),h=e(`rue:slot:anchor`);return a(m,h),u(()=>{let p=S.get().length?d(()=>{let s=t(),p=r(`table`,s);a(s,p),n(p,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let m=r(`thead`,p);a(p,m);let h=r(`tr`,m);a(m,h);let y=e(`rue:list:start`),T=e(`rue:list:end`);a(h,y),a(h,T);let E=new Map;u(()=>{E=b({items:l.columns||[],getKey:(e,t)=>e,elements:E,parent:h,before:T,singleRoot:!0,trackIndex:!1,start:y,renderItem:(o,s,l,p,m)=>{f(d(()=>{let s=t(),l=r(`th`,s);a(s,l),u(()=>{c(l,`key`,String(o))}),u(()=>{n(l,String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${g.value===o?`text-white`:``}`))}),i(l,`click`,()=>C(o));let d=e(`rue:slot:anchor`);a(l,d),u(()=>{let e=w(o);_(()=>f(e,l,d))});let p=r(`span`,l);return a(l,p),u(()=>{n(p,String(`ml-2 inline-block align-middle opacity-80 ${x.value[o]>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`))}),s}),s,l)}})});let D=r(`tbody`,p);a(p,D);let O=e(`rue:list:start`),k=e(`rue:list:end`);a(D,O),a(D,k);let A=new Map;return u(()=>{A=b({items:S.get()||[],getKey:(e,t)=>t,elements:A,parent:D,before:k,singleRoot:!0,start:O,renderItem:(i,s,p,m,h)=>{f(d(()=>{let s=t(),p=r(`tr`,s);a(s,p),u(()=>{c(p,`key`,String(h))});let m=e(`rue:list:start`),g=e(`rue:list:end`);a(p,m),a(p,g);let _=new Map;return u(()=>{_=b({items:l.columns||[],getKey:(e,t)=>e,elements:_,parent:p,before:g,singleRoot:!0,trackIndex:!1,start:m,renderItem:(e,s,l,p,m)=>{f(d(()=>{let s=t(),l=r(`td`,s);a(s,l),u(()=>{c(l,`key`,String(e))}),n(l,`bg-gray-50 min-w-[120px] px-5 py-2`);let d=v(l);return a(l,d),u(()=>{o(d,String(i[e]))}),s}),s,l)}})}),s}),s,p)}})}),s}):d(()=>{let e=t(),i=r(`p`,e);return a(e,i),n(i,`text-gray-700`),a(i,s(`No matches found.`)),e});_(()=>f(p,m,h))}),m})},w=()=>{let{searchQuery:o,gridColumns:m,gridData:v,updateQuery:b,activeTab:w}=y(`useSetup:0:0:dup1`,()=>p(()=>{let e=y(`ref:1:3`,()=>h(``));return{searchQuery:e,gridColumns:[`name`,`power`],gridData:[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],updateQuery:t=>{e.value=t.target.value},activeTab:y(`ref:1:4`,()=>h(`preview`))}}));return d(p=>{let h=t(),y=e(`rue:component:anchor`);return a(h,y),f(g(S,{children:d(()=>{let p=t(),h=r(`h1`,p);a(p,h),n(h,`text-5xl font-semibold mb-4 md:mb-4`),a(h,s(`带有排序和过滤器的网格（移植自 Vue）`));let y=r(`div`,p);a(p,y),c(y,`role`,`tablist`),n(y,`tabs tabs-box`);let S=r(`button`,y);a(y,S),c(S,`role`,`tab`),u(()=>{n(S,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),i(S,`click`,()=>{w.value=`preview`}),a(S,s(`效果`));let T=r(`button`,y);a(y,T),c(T,`role`,`tab`),u(()=>{n(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),i(T,`click`,()=>{w.value=`code`}),a(T,s(`代码`));let E=r(`div`,p);a(p,E),n(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let D=e(`rue:slot:anchor`);a(E,D),u(()=>{let i=w.value===`code`?d(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),u(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});_(()=>f(e,s,c))}),i}):``;_(()=>f(i,E,D))}),a(E,s(` `));let O=e(`rue:slot:anchor`);return a(E,O),u(()=>{let p=w.value===`preview`?d(()=>{let d=t(),p=r(`div`,d);a(d,p),n(p,`card bg-base-100 shadow`);let h=r(`div`,p);a(p,h),n(h,`card-body grid gap-4`);let y=r(`form`,h);a(h,y),c(y,`id`,`search`),n(y,`flex items-center gap-2`);let x=r(`span`,y);a(y,x),a(x,s(`Search`));let S=r(`input`,y);a(y,S),c(S,`name`,`query`),n(S,`input input-bordered`),u(()=>{l(S,o.value)}),i(S,`input`,b);let w=e(`rue:component:anchor`);return a(h,w),u(()=>{let e=g(C,{data:v,columns:m,filterKey:o.value});_(()=>f(e,h,w))}),d}):``;_(()=>f(p,E,O))}),p})}),h,y),h})};export{w as default};