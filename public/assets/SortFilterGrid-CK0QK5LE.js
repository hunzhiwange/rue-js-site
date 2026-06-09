import{$ as e,Ht as t,J as n,Jt as r,Q as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,pt as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v,n as y}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as b}from"./Code-5DOEyGxf.js";import{r as x}from"./SidebarPlaygroundExample-cASgDpH3.js";var S=r=>{let p=v(`useSetup:0:0`,()=>m(()=>{let e=e=>e.charAt(0).toUpperCase()+e.slice(1),t=r.data;if(r.filterKey){let e=String(r.filterKey).toLowerCase();t=t.filter(t=>Object.keys(t).some(n=>String(t[n]).toLowerCase().includes(e)))}if(r.sortKey){let e=r.sortKey,n=r.sortDirection;t=t.slice().sort((t,r)=>{let i=t[e],a=r[e];return(i===a?0:i>a?1:-1)*n})}return{capitalize:e,currentRows:t}})),{capitalize:g}=p,{currentRows:b}=p;return u(p=>{let m=e(`div`,p),v=s(`rue:slot:anchor`);return o(m,v),a(()=>{let p=b.length?u(()=>{let l=i(),p=e(`table`,l);o(l,p),c(p,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let m=e(`thead`,p);o(p,m);let v=e(`tr`,m);o(m,v);let x=s(`rue:list:start`),S=s(`rue:list:end`);o(v,x),o(v,S);let C=new Map;a(()=>{C=y({items:r.columns||[],getKey:(e,t)=>e,elements:C,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(l,d,p,m,_)=>{h(u(()=>{let u=i(),d=e(`th`,u);o(u,d),a(()=>{f(d,`key`,String(l))}),a(()=>{c(d,String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${r.sortKey===l?`text-white`:``}`))}),n(d,`click`,()=>r.onSort(l));let p=s(`rue:slot:anchor`);o(d,p),a(()=>{let e=g(l);t(()=>h(e,d,p))});let m=e(`span`,d);return o(d,m),a(()=>{c(m,String(`ml-2 inline-block align-middle opacity-80 ${r.sortKey===l&&r.sortDirection>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`))}),u}),d,p)}})});let w=e(`tbody`,p);o(p,w);let T=s(`rue:list:start`),E=s(`rue:list:end`);o(w,T),o(w,E);let D=new Map;return a(()=>{D=y({items:b||[],getKey:(e,t)=>t,elements:D,parent:w,before:E,singleRoot:!0,start:T,renderItem:(t,n,l,p,m)=>{h(u(()=>{let n=i(),l=e(`tr`,n);o(n,l),a(()=>{f(l,`key`,String(m))});let p=s(`rue:list:start`),g=s(`rue:list:end`);o(l,p),o(l,g);let v=new Map;return a(()=>{v=y({items:r.columns||[],getKey:(e,t)=>e,elements:v,parent:l,before:g,singleRoot:!0,trackIndex:!1,start:p,renderItem:(n,r,s,l,p)=>{h(u(()=>{let r=i(),s=e(`td`,r);o(r,s),a(()=>{f(s,`key`,String(n))}),c(s,`bg-gray-50 min-w-[120px] px-5 py-2`);let l=_(s);return o(s,l),a(()=>{d(l,String(t[n]))}),r}),r,s)}})}),n}),n,l)}})}),l}):u(()=>{let t=i(),n=e(`p`,t);return o(t,n),c(n,`text-gray-700`),o(n,l(`No matches found.`)),t});t(()=>h(p,m,v))}),m})},C=()=>{let{searchQuery:d,setSearchQuery:_,sortKey:y,setSortKey:C,sortDirection:w,setSortDirection:T,gridColumns:E,gridData:D,updateQuery:O,sortBy:k,activeTab:A,setActiveTab:j}=v(`useSetup:0:0:dup1`,()=>m(()=>{let[e,t]=v(`useState:1:0`,()=>r(``)),[n,i]=v(`useState:1:1`,()=>r(``)),[a,o]=v(`useState:1:2`,()=>r(1)),s=[`name`,`power`],c=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],l=e=>{t(e.target.value)},u=e=>{if(n.value===e){o(e=>{e.value*=-1});return}i(e),o(-1)},[d,f]=v(`useState:1:3`,()=>r(`preview`));return{searchQuery:e,setSearchQuery:t,sortKey:n,setSortKey:i,sortDirection:a,setSortDirection:o,gridColumns:s,gridData:c,updateQuery:l,sortBy:u,activeTab:d,setActiveTab:f}}));return u(r=>{let m=i(),_=s(`rue:component:anchor`);return o(m,_),h(g(x,{children:u(()=>{let r=i(),m=e(`h1`,r);o(r,m),c(m,`text-5xl font-semibold mb-4 md:mb-4`),o(m,l(`带有排序和过滤器的网格（移植自 Vue）`));let _=e(`div`,r);o(r,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let v=e(`button`,_);o(_,v),f(v,`role`,`tab`),a(()=>{c(v,String(`tab ${A.value===`preview`?`tab-active`:``}`))}),n(v,`click`,()=>{j(`preview`)}),o(v,l(`效果`));let x=e(`button`,_);o(_,x),f(x,`role`,`tab`),a(()=>{c(x,String(`tab ${A.value===`code`?`tab-active`:``}`))}),n(x,`click`,()=>{j(`code`)}),o(x,l(`代码`));let C=e(`div`,r);o(r,C),c(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=s(`rue:slot:anchor`);o(C,T),a(()=>{let n=A.value===`code`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),c(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let l=e(`div`,r);o(r,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=g(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`});t(()=>h(e,l,u))}),n}):``;t(()=>h(n,C,T))}),o(C,l(` `));let M=s(`rue:slot:anchor`);return o(C,M),a(()=>{let r=A.value===`preview`?u(()=>{let r=i(),u=e(`div`,r);o(r,u),c(u,`card bg-base-100 shadow`);let m=e(`div`,u);o(u,m),c(m,`card-body grid gap-4`);let _=e(`form`,m);o(m,_),f(_,`id`,`search`),c(_,`flex items-center gap-2`);let v=e(`span`,_);o(_,v),o(v,l(`Search`));let b=e(`input`,_);o(_,b),f(b,`name`,`query`),c(b,`input input-bordered`),a(()=>{p(b,d.value)}),n(b,`input`,O);let x=s(`rue:component:anchor`);return o(m,x),a(()=>{let e=g(S,{key:`${d.value||`all`}-${y.value||`none`}-${w.value}`,data:D,columns:E,filterKey:d.value,sortKey:y.value,sortDirection:w.value,onSort:k});t(()=>h(e,m,x))}),r}):``;t(()=>h(r,C,M))}),r})}),m,_),m})};export{C as default};