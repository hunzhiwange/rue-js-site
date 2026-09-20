import{Bt as e,Dt as t,F as n,H as r,I as i,Mt as a,Tt as o,U as s,Ut as c,Vt as l,Wt as u,Y as d,_t as f,en as p,et as m,f as h,fn as g,gn as _,gt as v,h as y,hn as b,in as x,mn as S,p as C,pn as w,qt as T,sn as E,u as D,vt as O,yn as k,yt as A,z as j,zt as M}from"./rue-runtime-Cv6BZekS.js";import{t as N}from"./Code-BzFVdc3U.js";import{r as P}from"./SidebarPlaygroundExample-rFyhXfC_.js";var F=k(`<div></div>`),I=k(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带有排序和过滤器的网格（移植自 Vue）</h1>`),L=k(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),R=k(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),z=(t,r,a)=>{let o=O(v(t,`columns`)),d=O(v(t,`data`)),m=O(v(t,`filterKey`)),S=O(v(t,`onSort`)),k=O(v(t,`sortDirection`)),j=O(v(t,`sortKey`)),N=e=>e.charAt(0).toUpperCase()+e.slice(1),P=()=>{let e=d.get();if(m.get()){let t=String(m.get()).toLowerCase();e=e.filter(e=>Object.keys(e).some(n=>String(e[n]).toLowerCase().includes(t)))}if(j.get()){let t=j.get(),n=k.get();e=e.slice().sort((e,r)=>{let i=e[t],a=r[t];return(i===a?0:i>a?1:-1)*n})}return e};return s(u(t=>{let r=F().content.cloneNode(!0).firstChild;return c(r,null,()=>P().length?{__rue_compiled_branch_key:!0,create:()=>u(t=>{let r=b(`table`,t);r.setAttribute(`class`,`min-w-full border-2 border-emerald-500 rounded-md bg-white`);let a=b(`thead`,r);g(r,a);let s=b(`tr`,a);g(a,s);let c=w(`rue:list:end`);g(s,c);let d=[];T(()=>{let t=o.get()||[];d=y(s,c,d,t,(e,t)=>e,(t,n)=>{let r=O(t);return C((t,n,i)=>{let a=()=>u(t=>{let n=b(`th`,t),i;x(()=>{let e=`bg-emerald-500 text-white/90 cursor-pointer select-none px-5 py-2 ${j.get()===r.get()?`text-white`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),E(D(t,n,`click`,()=>()=>S.get()(r.get())));let a=w(`rue:compiled-slot`);g(n,a),e({parent:n,before:a},()=>(e=>(t,n,r)=>M(N(e))(t,n,r))(r.get()),()=>({}));let o=b(`span`,n);g(n,o);let s;return x(()=>{let e=`ml-2 inline-block align-middle opacity-80 ${j.get()===r.get()&&k.get()>0?`border-l-4 border-r-4 border-b-4 border-transparent border-b-white h-0 w-0`:`border-l-4 border-r-4 border-t-4 border-transparent border-t-white h-0 w-0`}`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,o.setAttribute(`class`,t))}),[n,n]});return t==null?a():l(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),E(()=>h(d));let f=b(`tbody`,r);g(r,f);let p=w(`rue:list:end`);g(f,p);let m=[];return T(()=>{let e=P()||[];m=y(f,p,m,e,(e,t)=>t,(e,t)=>{let r=O(e);return C((e,t,a)=>{let s=()=>u(e=>{let t=b(`tr`,e),a=w(`rue:list:end`);g(t,a);let s=[];return T(()=>{let e=o.get()||[];s=y(a.parentNode,a,s,e,(e,t)=>e,(e,t)=>{let a=O(e);return C((e,t,o)=>{let s=()=>n(e=>{let t=b(`td`,e);t.setAttribute(`class`,`bg-gray-50 min-w-[120px] px-5 py-2`);let n=_(``);return g(t,n),i(n,()=>String(r.get()[a.get()])),[t,t]});return e==null?s():l(e,o,s)},(n,r)=>{e=n,t=r,a.set(n)},void 0)},!1,!1)}),E(()=>h(s)),[t,t]});return e==null?s():l(e,a,s)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),E(()=>h(m)),[r,r]})}:{__rue_compiled_branch_key:!1,create:()=>A(e=>{let t=b(`p`,e);return t.setAttribute(`class`,`text-gray-700`),g(t,_(`No matches found.`)),[t,t]})}),[r,r]}),e=>p(()=>{o.set(e.columns),d.set(e.data),m.set(e.filterKey),S.set(e.onSort),k.set(e.sortDirection),j.set(e.sortKey)}),()=>f(t))},B=(n,i,s)=>{let[f,p]=m(`SortFilterGrid:hook:0`,``),[h,v]=m(`SortFilterGrid:hook:1`,``),[y,C]=m(`SortFilterGrid:hook:2`,1),T=[`name`,`power`],O=[{name:`Chuck Norris`,power:1/0},{name:`Bruce Lee`,power:9e3},{name:`Jackie Chan`,power:7e3},{name:`Jet Li`,power:8e3}],k=e=>{p(e.target.value)},M=e=>{if(h.get()===e){C(e=>e*-1);return}v(e),C(-1)},[F,B]=m(`SortFilterGrid:hook:3`,`preview`);return d(()=>(()=>{let n=u(n=>{let i=S(),s=R().content.cloneNode(!0),d=s.firstChild,p=d.childNodes[0],m=p.parentNode,v=d.childNodes[1],C=v.parentNode;i.appendChild(s),c(m,p,()=>{let e=F.get()===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let t=b(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let n=b(`div`,t);return g(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,N,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, computed } from '@rue-js/rue';

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

export default SortFilterGrid;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>A(t=>{let n=_(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>A(e=>{let t=S();return[t.firstChild,t.lastChild]})}}),e({parent:C,before:v},()=>F.get()===`preview`?(n,r,i)=>l(n,i,()=>u(()=>{let n=S(),r=b(`div`,n);g(n,r),t(r,`card bg-base-100 shadow`);let i=b(`div`,r);g(r,i),t(i,`card-body grid gap-4`);let s=b(`form`,i);g(i,s),o(s,`id`,`search`),t(s,`flex items-center gap-2`);let c=b(`span`,s);g(s,c),g(c,_(`Search`));let u=b(`input`,s);g(s,u),o(u,`name`,`query`),t(u,`input input-bordered`),x(()=>{a(u,f.get())});let d=e=>{let t=k;typeof t==`function`&&t(e)};u.addEventListener(`input`,d),E(()=>u.removeEventListener(`input`,d));let p=w(`rue:component:anchor`);g(i,p),e({parent:i,before:p},()=>(e,t,n)=>l(e,n,()=>j(z,()=>({key:`${f.get()||`all`}-${h.get()||`none`}-${y.get()}`,data:O,columns:T,filterKey:f.get(),sortKey:h.get(),sortDirection:y.get(),onSort:M}))),()=>({}));let m=_(``),v=_(``);return n.insertBefore(m,n.firstChild),n.appendChild(v),[n.firstChild,n.lastChild]})):(e,t,n)=>{let r=()=>A(e=>{let t=_(``);return[t,t]});return e==null?r():l(e,n,r)},()=>({}));let D=_(``),P=_(``);return i.insertBefore(D,i.firstChild),i.appendChild(P),[i.firstChild,i.lastChild]});return j(P,()=>({children:[A(e=>{let t=I().content.cloneNode(!0).firstChild;return[t,t]}),u(e=>{let t=L().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;x(()=>{let e=`tab ${F.get()===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),E(D(e,n,`click`,()=>()=>{B(`preview`)})),r.setAttribute(`role`,`tab`);let a;return x(()=>{let e=`tab ${F.get()===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),E(D(e,r,`click`,()=>()=>{B(`code`)})),[t,t]}),n]}))})())};export{B as default};