import{Bt as e,Dt as t,F as n,Gt as r,H as i,I as a,Kt as o,Mt as s,Tt as c,U as l,Ut as u,V as d,Vt as f,Wt as p,Xt as m,Y as h,Zt as g,_n as _,_t as v,en as y,et as b,f as x,fn as S,gn as C,gt as w,h as T,hn as E,in as D,mn as O,p as k,pn as A,qt as j,sn as M,st as N,tt as P,u as F,vn as I,vt as L,yn as R,yt as z,z as B,zt as V}from"./rue-runtime-Cv6BZekS.js";import{t as H}from"./Code-BzFVdc3U.js";import{r as U}from"./SidebarPlaygroundExample-rFyhXfC_.js";var W=r([`length`],[!1]),G=R(`<text><!--rue:text-hole:0--></text>`),K=R(`<g><polygon></polygon><circle cx="100" cy="100" r="80"></circle><!--rue:text-hole:0--></g>`),q=R(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">SVG 图像（移植自 Vue）</h1>`),J=R(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),Y=R(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`);function X(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var Z=(t,n,r)=>{let i=L(w(t,`index`)),a=L(w(t,`stat`)),o=L(w(t,`total`)),s=P(()=>X(+a.get().value+10,i.get(),o.get()));return h(()=>l(p(()=>{let t=O(),n=G().content.cloneNode(!0),r=n.firstChild,i=r,o=r.childNodes[0],c=o.parentNode;t.appendChild(n);let l;D(()=>{let e=s.get().x;Object.is(l,e)||(l=e,e==null||e===!1?i.removeAttribute(`x`):i.setAttribute(`x`,String(e)))});let u;D(()=>{let e=s.get().y;Object.is(u,e)||(u=e,e==null||e===!1?i.removeAttribute(`y`):i.setAttribute(`y`,String(e)))}),e({parent:c,before:o},()=>V(a.get().label),()=>({}));let d=C(``),f=C(``);return t.insertBefore(d,t.firstChild),t.appendChild(f),[t.firstChild,t.lastChild]}),e=>y(()=>{i.set(e.index),a.set(e.stat),o.set(e.total)}),()=>v(t)))},Q=(e,t,n)=>{let r=L(w(e,`stats`)),i=P(()=>{let e=r.get().length;return r.get().map((t,n)=>{let{x:r,y:i}=X(t.value,n,e);return`${r},${i}`}).join(` `)});return h(()=>l(p(e=>{let t=K().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=t.childNodes[2],o=a.parentNode,s;D(()=>{let e=i.get();Object.is(s,e)||(s=e,e==null||e===!1?n.removeAttribute(`points`):n.setAttribute(`points`,String(e)))});let c=[];return j(()=>{let e=r.get()||[];c=T(o,a,c,e,(e,t)=>e.label+t,(e,t)=>{let n=L(e),i=L(t);return k((e,t,a)=>{let o=()=>d(Z,()=>({stat:n.get(),index:i.get(),total:r.get().length}));return e==null?o():f(e,a,o)},(r,a)=>{e=r,t=a,n.set(r),i.set(a)},void 0)},!0,!1)}),M(()=>x(c)),[t,t]}),e=>y(()=>{r.set(e.stats)}),()=>v(e)))},$=(r,l,d)=>{let v=N(``),[y,w]=b(`SVGGraph:hook:0`,[{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]),P=N(`preview`),R=e=>{e.preventDefault(),v.value.trim()&&(m(g(y),`push`)({label:v.value,value:100}),v.value=``)},G=e=>{o(y,W)>3?m(g(y),`splice`)(y.get().indexOf(e),1):alert(`Can't delete more!`)},K=(e,t)=>{let n=Number(t.target.value);w(t=>t.map(t=>t.label===e.label?{...t,value:n}:t))};return h(()=>(()=>{let r=p(n=>{let r=O(),a=Y().content.cloneNode(!0),o=a.firstChild,l=o.childNodes[0],d=l.parentNode,m=o.childNodes[1],h=m.parentNode;r.appendChild(a),u(d,l,()=>{let e=P.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>p(e=>{let t=E(`div`,e);return t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`),i(t,H,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, useState, computed } from '@rue-js/rue';

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

export default SVGGraph;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>z(t=>{let n=C(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>z(e=>{let t=O();return[t.firstChild,t.lastChild]})}}),e({parent:h,before:m},()=>P.value===`preview`?(n,r,a)=>f(n,a,()=>p(n=>{let r=O(),a=E(`div`,r);S(r,a),t(a,`card bg-base-100 shadow`);let o=E(`div`,a);S(a,o),t(o,`card-body grid gap-4 rue-svg-graph`);let l=E(`svg`,o);S(o,l),c(l,`width`,`200`),c(l,`height`,`200`),i(l,Q,()=>({stats:y.get()}));let u=E(`div`,o);S(o,u),t(u,`grid gap-3`);let d=A(`rue:list:end`);S(u,d);let m=[];j(()=>{let t=y.get()||[];m=T(u,d,m,t,(e,t)=>e.label,(t,n)=>{let r=L(t);return k((t,n,i)=>{let a=()=>p(t=>{let n=E(`div`,t);n.setAttribute(`class`,`flex items-center gap-3`);let i=E(`label`,n);S(n,i);let a=A(`rue:compiled-slot`);S(i,a),e({parent:i,before:a},()=>V(r.get().label),()=>({}));let o=E(`input`,n);S(n,o),o.setAttribute(`type`,`range`),o.setAttribute(`class`,`range range-primary flex-1`);let s;D(()=>{let e=r.get().value,t=e==null?``:String(e);Object.is(s,t)||(s=t,o.value=t)}),o.setAttribute(`min`,`0`),o.setAttribute(`max`,`100`);let c=e=>{let t=e=>K(r.get(),e);typeof t==`function`&&t(e)};o.addEventListener(`input`,c),M(()=>o.removeEventListener(`input`,c));let l=E(`span`,n);S(n,l),l.setAttribute(`class`,`w-10 text-right`);let u=A(`rue:compiled-slot`);S(l,u),e({parent:l,before:u},()=>V(r.get().value),()=>({}));let d=E(`button`,n);return S(n,d),d.setAttribute(`class`,`btn btn-error btn-sm`),M(F(t,d,`click`,()=>()=>G(r.get()))),S(d,C(`X`)),[n,n]});return t==null?a():f(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),M(()=>x(m));let h=E(`form`,o);S(o,h),t(h,`flex items-center gap-2`);let g=e=>{let t=R;typeof t==`function`&&t(e)};h.addEventListener(`submit`,g),M(()=>h.removeEventListener(`submit`,g));let b=E(`input`,h);S(h,b),c(b,`name`,`newlabel`),t(b,`input input-bordered`),D(()=>{s(b,v.value)});let w=e=>{let t=e=>{v.value=e.target.value};typeof t==`function`&&t(e)};b.addEventListener(`input`,w),M(()=>b.removeEventListener(`input`,w));let N=E(`button`,h);S(h,N),t(N,`btn btn-success`);let P=e=>{let t=R;typeof t==`function`&&t(e)};N.addEventListener(`click`,P),M(()=>N.removeEventListener(`click`,P)),S(N,C(`Add a Stat`));let z=E(`pre`,o);S(o,z),t(z,`raw`);let B=_(z);S(z,B),D(()=>{I(B,JSON.stringify([...y.get()],null,2))});let H=C(``),U=C(``);return r.insertBefore(H,r.firstChild),r.appendChild(U),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>z(e=>{let t=C(``);return[t,t]});return e==null?r():f(e,n,r)},()=>({}));let g=C(``),b=C(``);return r.insertBefore(g,r.firstChild),r.appendChild(b),[r.firstChild,r.lastChild]});return B(U,()=>({children:[n(e=>{let t=E(`style`,e),n=C(``);return S(t,n),a(n,()=>`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`),[t,t]}),z(e=>{let t=q().content.cloneNode(!0).firstChild;return[t,t]}),p(e=>{let t=J().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;D(()=>{let e=`tab ${P.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),M(F(e,n,`click`,()=>()=>{P.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return D(()=>{let e=`tab ${P.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),M(F(e,r,`click`,()=>()=>{P.value=`code`})),[t,t]}),r]}))})())};export{$ as default};