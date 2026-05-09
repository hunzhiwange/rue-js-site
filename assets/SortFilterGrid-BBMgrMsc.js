import{$ as e,A as t,F as n,H as r,I as i,J as a,L as o,N as s,P as c,W as l,Y as u,c as d,j as f,pt as p,rt as m,t as h,u as g,ut as _}from"./vapor-runtime-CKndxKFn.js";import{a as v,n as y}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as b}from"./Code-B1JFTu6m.js";import{t as x}from"./SidebarPlaygroundExample-DlK8mtjC.js";var S=a=>{let{sortKey:h,capitalize:b}=v(`useSetup:0:0`,()=>_(()=>({sortKey:v(`ref:1:0`,()=>m(``)),capitalize:e=>e.charAt(0).toUpperCase()+e.slice(1)}))),x=v(`ref:1:1`,()=>m(a.columns.reduce((e,t)=>(e[t]=1,e),{}))),S=v(`computed:1:2`,()=>e(()=>{let e=a.data,t=a.filterKey;if(t){let n=String(t).toLowerCase();e=e.filter(e=>Object.keys(e).some(t=>String(e[t]).toLowerCase().includes(n)))}let n=h.value;if(n){let t=x.value[n];e=e.slice().sort((e,r)=>{let i=e[n],a=r[n];return(i===a?0:i>a?1:-1)*t})}return e})),C=e=>{h.value=e,x.value[e]=(x.value[e]||1)*-1};return g(()=>{let e=n(`div`),m=s(`rue:slot:anchor`);return f(e,m),p(()=>{d(S.get().length?g(()=>{let e=c(),i=n(`table`);f(e,i),l(i,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let m=n(`thead`);f(i,m);let _=n(`tr`);f(m,_);let v=s(`rue:list:start`),w=s(`rue:list:end`);f(_,v),f(_,w);let T=new Map;p(()=>{T=y({items:a.columns||[],getKey:(e,t)=>e,elements:T,parent:_,before:w,singleRoot:!0,start:v,renderItem:(e,i,a,s,m)=>{d(g(()=>{let i=c(),a=n(`th`);f(i,a),p(()=>{r(a,`key`,String(e))}),p(()=>{l(a,String(`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${h.value===e?`text-white`:``}`))}),t(a,`click`,()=>C(e));let s=o(a);f(a,s),p(()=>{u(s,b(e))});let d=n(`span`);return f(a,d),p(()=>{l(d,String(`ml-2 inline-block align-middle opacity-80 ${x.value[e]>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`))}),i}),i,a)}})});let E=n(`tbody`);f(i,E);let D=s(`rue:list:start`),O=s(`rue:list:end`);f(E,D),f(E,O);let k=new Map;return p(()=>{k=y({items:S.get()||[],getKey:(e,t)=>t,elements:k,parent:E,before:O,singleRoot:!0,start:D,renderItem:(e,t,i,m,h)=>{d(g(()=>{let t=c(),i=n(`tr`);f(t,i),p(()=>{r(i,`key`,String(h))});let m=s(`rue:list:start`),_=s(`rue:list:end`);f(i,m),f(i,_);let v=new Map;return p(()=>{v=y({items:a.columns||[],getKey:(e,t)=>e,elements:v,parent:i,before:_,singleRoot:!0,start:m,renderItem:(t,i,a,s,m)=>{d(g(()=>{let i=c(),a=n(`td`);f(i,a),p(()=>{r(a,`key`,String(t))}),l(a,`bg-gray-50 min-w-[120px] px-5 py-2`);let s=o(a);return f(a,s),p(()=>{u(s,String(e[t]))}),i}),i,a)}})}),t}),t,i)}})}),e}):g(()=>{let e=c(),t=n(`p`);return f(e,t),l(t,`text-gray-700`),f(t,i(`No matches found.`)),e}),e,m)}),e})},C=()=>{let{searchQuery:e,gridColumns:o,gridData:u,updateQuery:y,activeTab:C}=v(`useSetup:0:0`,()=>_(()=>{let e=v(`ref:1:3`,()=>m(``));return{searchQuery:e,gridColumns:[`name`,`power`],gridData:[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],updateQuery:t=>{e.value=t.target.value},activeTab:v(`ref:1:4`,()=>m(`preview`))}}));return g(()=>{let m=c(),_=s(`rue:component:anchor`);return f(m,_),d(h(x,{children:g(()=>{let m=c(),_=n(`h1`);f(m,_),l(_,`text-5xl font-semibold mb-4 md:mb-4`),f(_,i(`带有排序和过滤器的网格（移植自 Vue）`));let v=n(`div`);f(m,v),r(v,`role`,`tablist`),l(v,`tabs tabs-box`);let x=n(`button`);f(v,x),r(x,`role`,`tab`),p(()=>{l(x,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),t(x,`click`,()=>{C.value=`preview`}),f(x,i(`效果`));let w=n(`button`);f(v,w),r(w,`role`,`tab`),p(()=>{l(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),t(w,`click`,()=>{C.value=`code`}),f(w,i(`代码`));let T=n(`div`);f(m,T),l(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=s(`rue:slot:anchor`);f(T,E),p(()=>{d(C.value===`code`?g(()=>{let e=c(),t=n(`div`);f(e,t),l(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let r=n(`div`);f(t,r),l(r,`card-body p-0`);let i=s(`rue:component:anchor`);return f(r,i),p(()=>{d(h(b,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`}),r,i)}),e}):``,T,E)}),f(T,i(` `));let D=s(`rue:slot:anchor`);return f(T,D),p(()=>{d(C.value===`preview`?g(()=>{let m=c(),g=n(`div`);f(m,g),l(g,`card bg-base-100 shadow`);let _=n(`div`);f(g,_),l(_,`card-body grid gap-4`);let v=n(`form`);f(_,v),r(v,`id`,`search`),l(v,`flex items-center gap-2`);let b=n(`span`);f(v,b),f(b,i(`Search`));let x=n(`input`);f(v,x),r(x,`name`,`query`),l(x,`input input-bordered`),p(()=>{a(x,e.value)}),t(x,`input`,y);let C=s(`rue:component:anchor`);return f(_,C),p(()=>{d(h(S,{data:u,columns:o,filterKey:e.value}),_,C)}),m}):``,T,D)}),m})}),m,_),m})};export{C as default};