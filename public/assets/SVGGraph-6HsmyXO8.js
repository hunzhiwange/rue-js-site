import{B as e,Bt as t,Dt as n,F as r,Gt as i,I as a,Kt as o,M as s,Mt as c,P as l,Tt as u,Ut as d,V as f,Vt as p,W as m,Wt as h,X as g,Xt as _,Y as v,Zt as y,_n as b,ct as x,en as S,f as C,fn as w,gn as T,h as E,hn as D,in as O,mn as k,mt as A,nt as j,p as M,pn as N,qt as P,sn as F,st as I,u as L,vn as R,yn as z,z as B,zt as V}from"./rue-runtime-BWbIfNT8.js";import{t as H}from"./Code-C5ZhIIr9.js";import{r as U}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var W=i([`length`],[!1]),G=z(`<text><!--rue:text-hole:0--></text>`),K=z(`<g><polygon></polygon><circle cx="100" cy="100" r="80"></circle><!--rue:text-hole:0--></g>`),q=z(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">SVG 图像（移植自 Vue）</h1>`),J=z(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),Y=z(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`);function X(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var Z=(n,r,i)=>{let o=m(B(n,`index`)),s=m(B(n,`stat`)),c=m(B(n,`total`)),l=x(()=>X(+s.get().value+10,o.get(),c.get()));return j(()=>a(h(()=>{let e=k(),n=G().content.cloneNode(!0),r=n.firstChild,i=r,a=r.childNodes[0],o=a.parentNode;e.appendChild(n);let c;O(()=>{let e=l.get().x;Object.is(c,e)||(c=e,e==null||e===!1?i.removeAttribute(`x`):i.setAttribute(`x`,String(e)))});let u;O(()=>{let e=l.get().y;Object.is(u,e)||(u=e,e==null||e===!1?i.removeAttribute(`y`):i.setAttribute(`y`,String(e)))}),t({parent:o,before:a},()=>V(s.get().label),()=>({}));let d=T(``),f=T(``);return e.insertBefore(d,e.firstChild),e.appendChild(f),[e.firstChild,e.lastChild]}),e=>S(()=>{o.set(e.index),s.set(e.stat),c.set(e.total)}),()=>e(n)))},Q=(t,n,r)=>{let i=m(B(t,`stats`)),o=x(()=>{let e=i.get().length;return i.get().map((t,n)=>{let{x:r,y:i}=X(t.value,n,e);return`${r},${i}`}).join(` `)});return j(()=>a(h(e=>{let t=K().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[2],a=r.parentNode,s;O(()=>{let e=o.get();Object.is(s,e)||(s=e,e==null||e===!1?n.removeAttribute(`points`):n.setAttribute(`points`,String(e)))});let c=[];return P(()=>{let e=i.get()||[];c=E(a,r,c,e,(e,t)=>e.label+t,(e,t)=>{let n=m(e),r=m(t);return M((e,t,a)=>{let o=()=>l(Z,()=>({stat:n.get(),index:r.get(),total:i.get().length}));return e==null?o():p(e,a,o)},(i,a)=>{e=i,t=a,n.set(i),r.set(a)},void 0)},!0,!1)}),F(()=>C(c)),[t,t]}),e=>S(()=>{i.set(e.stats)}),()=>e(t)))},$=(e,i,a)=>{let l=A(``),[x,S]=I(`SVGGraph:hook:0`,[{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]),z=A(`preview`),B=e=>{e.preventDefault(),l.value.trim()&&(_(y(x),`push`)({label:l.value,value:100}),l.value=``)},G=e=>{o(x,W)>3?_(y(x),`splice`)(x.get().indexOf(e),1):alert(`Can't delete more!`)},K=(e,t)=>{let n=Number(t.target.value);S(t=>t.map(t=>t.label===e.label?{...t,value:n}:t))};return j(()=>(()=>{let e=h(e=>{let i=k(),a=Y().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],g=s.parentNode,_=o.childNodes[1],v=_.parentNode;i.appendChild(a),d(g,s,()=>{let e=z.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=D(`div`,e);return t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`),r(t,H,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, useState, computed } from '@rue-js/rue';

type Stat = { label: string; value: number };

function valueToPoint(value: number, index: number, total: number) {
  const x = 0;
  const y = -value * 0.8;
  const angle = ((Math.PI * 2) / total) * index;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const tx = x * cos - y * sin + 100;
  const ty = x * sin + y * cos + 100;
  return { x: tx, y: ty };
}

const AxisLabel: FC<{ stat: Stat; index: number; total: number }> = (props) => {
  const point = computed(() => valueToPoint(+props.stat.value + 10, props.index, props.total));
  return <text x={point.value.x} y={point.value.y}>{props.stat.label}</text>;
};

const PolyGraph: FC<{ stats: Stat[] }> = (props) => {
  const points = computed(() => {
    const total = props.stats.length;
    return props.stats
      .map((stat, i) => {
        const { x, y } = valueToPoint(stat.value, i, total);
        return '\${x},\${y}';
      })
      .join(' ');
  });
  return (
    <g>
      <polygon points={points.value}></polygon>
      <circle cx={100} cy={100} r={80}></circle>
      {props.stats.map((stat, index) => (
        <AxisLabel key={stat.label + index} stat={stat} index={index} total={props.stats.length} />
      ))}
    </g>
  );
};

const SVGGraph: FC = () => {
  const newLabel = ref('');
  const [stats, setStats] = useState<Stat[]>([
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
    { label: 'D', value: 100 },
    { label: 'E', value: 100 },
    { label: 'F', value: 100 },
  ]);
  const add = (e: any) => { e.preventDefault(); if (!newLabel.value.trim()) return; stats.push({ label: newLabel.value, value: 100 }); newLabel.value = ''; };
  const remove = (stat: Stat) => { if (stats.length > 3) { stats.splice(stats.indexOf(stat), 1); } else { alert("Can't delete more!"); } };
  const updateValue = (s: Stat, e: any) => { const value = Number((e.target as HTMLInputElement).value)
    setStats(previous => previous.map(item => item.label === s.label ? { ...item, value } : item)); };
  return (
      <>
      <style>{\`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph .raw { padding: 10px; }
\`}</style>
      <div className="card bg-base-100 shadow">
        <div className="card-body grid gap-4 rue-svg-graph">
          <svg width={200} height={200}>
            <PolyGraph stats={stats} />
          </svg>
          <div className="grid gap-3">
            {stats.map(stat => (
              <div key={stat.label} className="flex items-center gap-3">
                <label>{stat.label}</label>
                <input
                  type="range"
                  className="range range-primary flex-1"
                  value={stat.value}
                  min={0}
                  max={100}
                  onInput={(e: any) => updateValue(stat, e)}
                />
                <span className="w-10 text-right">{stat.value}</span>
                <button className="btn btn-error btn-sm" onClick={() => remove(stat)}>
                  X
                </button>
              </div>
            ))}
          </div>
          <form className="flex items-center gap-2" onSubmit={add}>
            <input
              name="newlabel"
              className="input input-bordered"
              value={newLabel.value}
              onInput={(e: any) => {
                newLabel.value = (e.target as HTMLInputElement).value
              }}
            />
            <button className="btn btn-success" onClick={add}>
              Add a Stat
            </button>
          </form>
          <pre className="raw">{JSON.stringify([...stats], null, 2)}</pre>
        </div>
      </div>
    </>
  );
};

export default SVGGraph;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>f(t=>{let n=T(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>f(e=>{let t=k();return[t.firstChild,t.lastChild]})}}),t({parent:v,before:_},()=>z.value===`preview`?(e,i,a)=>p(e,a,()=>h(e=>{let i=k(),a=D(`div`,i);w(i,a),n(a,`card bg-base-100 shadow`);let o=D(`div`,a);w(a,o),n(o,`card-body grid gap-4 rue-svg-graph`);let s=D(`svg`,o);w(o,s),u(s,`width`,`200`),u(s,`height`,`200`),r(s,Q,()=>({stats:x.get()}));let d=D(`div`,o);w(o,d),n(d,`grid gap-3`);let f=N(`rue:list:end`);w(d,f);let g=[];P(()=>{let e=x.get()||[];g=E(d,f,g,e,(e,t)=>e.label,(e,n)=>{let r=m(e);return M((e,n,i)=>{let a=()=>h(e=>{let n=D(`div`,e);n.setAttribute(`class`,`flex items-center gap-3`);let i=D(`label`,n);w(n,i);let a=N(`rue:compiled-slot`);w(i,a),t({parent:i,before:a},()=>V(r.get().label),()=>({}));let o=D(`input`,n);w(n,o),o.setAttribute(`type`,`range`),o.setAttribute(`class`,`range range-primary flex-1`);let s;O(()=>{let e=r.get().value,t=e==null?``:String(e);Object.is(s,t)||(s=t,o.value=t)}),o.setAttribute(`min`,`0`),o.setAttribute(`max`,`100`);let c=e=>{let t=e=>K(r.get(),e);typeof t==`function`&&t(e)};o.addEventListener(`input`,c),F(()=>o.removeEventListener(`input`,c));let l=D(`span`,n);w(n,l),l.setAttribute(`class`,`w-10 text-right`);let u=N(`rue:compiled-slot`);w(l,u),t({parent:l,before:u},()=>V(r.get().value),()=>({}));let d=D(`button`,n);return w(n,d),d.setAttribute(`class`,`btn btn-error btn-sm`),F(L(e,d,`click`,()=>()=>G(r.get()))),w(d,T(`X`)),[n,n]});return e==null?a():p(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),F(()=>C(g));let _=D(`form`,o);w(o,_),n(_,`flex items-center gap-2`);let v=e=>{let t=B;typeof t==`function`&&t(e)};_.addEventListener(`submit`,v),F(()=>_.removeEventListener(`submit`,v));let y=D(`input`,_);w(_,y),u(y,`name`,`newlabel`),n(y,`input input-bordered`),O(()=>{c(y,l.value)});let S=e=>{let t=e=>{l.value=e.target.value};typeof t==`function`&&t(e)};y.addEventListener(`input`,S),F(()=>y.removeEventListener(`input`,S));let A=D(`button`,_);w(_,A),n(A,`btn btn-success`);let j=e=>{let t=B;typeof t==`function`&&t(e)};A.addEventListener(`click`,j),F(()=>A.removeEventListener(`click`,j)),w(A,T(`Add a Stat`));let I=D(`pre`,o);w(o,I),n(I,`raw`);let z=b(I);w(I,z),O(()=>{R(z,JSON.stringify([...x.get()],null,2))});let H=T(``),U=T(``);return i.insertBefore(H,i.firstChild),i.appendChild(U),[i.firstChild,i.lastChild]})):(e,t,n)=>{let r=()=>f(e=>{let t=T(``);return[t,t]});return e==null?r():p(e,n,r)},()=>({}));let y=T(``),S=T(``);return i.insertBefore(y,i.firstChild),i.appendChild(S),[i.firstChild,i.lastChild]});return s(U,()=>({children:[v(e=>{let t=D(`style`,e),n=T(``);return w(t,n),g(n,()=>`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`),[t,t]}),f(e=>{let t=q().content.cloneNode(!0).firstChild;return[t,t]}),h(e=>{let t=J().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;O(()=>{let e=`tab ${z.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),F(L(e,n,`click`,()=>()=>{z.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return O(()=>{let e=`tab ${z.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),F(L(e,r,`click`,()=>()=>{z.value=`code`})),[t,t]}),e]}))})())};export{$ as default};