import{At as e,C as t,Dn as n,Dt as r,E as i,Mt as a,Ot as o,P as s,Q as c,Qt as l,Vt as u,_n as d,_t as f,at as p,b as m,bt as h,ct as g,dt as _,et as v,gn as y,kn as b,mn as x,nt as S,pn as C,qt as w,rt as T,st as E,tn as D,ut as O,vn as k,vt as A,w as j,wn as M,xn as N,xt as P,yt as F,z as I}from"./rue-runtime-HIMg8Lz8.js";import{t as L}from"./Code-DpH7u0gk.js";import{r as R}from"./SidebarPlaygroundExample-BCPRe0hA.js";var z=k(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">SVG 图像（移植自 Vue）</h1>`),B=k(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),V=k(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`);function H(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var U=t=>{let n=p(t.index),r=p(t.stat),i=p(t.total),a=s(()=>H(+r.get().value+10,n.get(),i.get()));return w(()=>g(e(()=>{let e=f(),t=A(`text`,e);_(e,t),M(()=>{P(t,`x`,String(a.get().x))}),M(()=>{P(t,`y`,String(a.get().y))});let n=h(t);return _(t,n),M(()=>{o(n,r.get().label)}),e},!0),e=>v(()=>{n.set(e.index),r.set(e.stat),i.set(e.total)}),()=>t))},W=r=>{let a=p(r.stats),o=s(()=>{let e=a.get().length;return a.get().map((t,n)=>{let{x:r,y:i}=H(t.value,n,e);return`${r},${i}`}).join(` `)});return w(()=>g(e(()=>{let e=f(),r=A(`g`,e);_(e,r);let s=A(`polygon`,r);_(r,s),M(()=>{P(s,`points`,String(o.get()))});let c=A(`circle`,r);_(r,c),P(c,`cx`,`100`),P(c,`cy`,`100`),P(c,`r`,`80`);let l=x(`rue:list:end`);C(r,l);let u=[];return M(()=>{let e=a.get()||[];u=j(r,l,u,e,(e,t)=>e.label+t,(e,n)=>{let r=p(e),o=p(n);return t((e,t,n)=>i(e,n,()=>T(U,()=>({stat:r.get(),index:o.get(),total:a.get().length}))),(t,i)=>{e=t,n=i,r.set(t),o.set(i)})})}),n(()=>m(u)),e},!0),e=>v(()=>{a.set(e.stats)}),()=>r))},G=()=>{let s=D(``),T=I([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]),k=D(`preview`),H=e=>{e.preventDefault(),s.value.trim()&&(T.push({label:s.value,value:100}),s.value=``)},U=e=>{T.length>3?T.splice(T.indexOf(e),1):alert(`Can't delete more!`)},G=(e,t)=>{e.value=Number(t.target.value)};return w(()=>g((()=>{let g=e(()=>{let e=f(),t=A(`style`,e);return _(e,t),M(()=>{o(t,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)}),e}),v=e(()=>{let a=f(),g=V().content.cloneNode(!0),v=g.firstChild,w=v.childNodes[0],D=w.parentNode,I=v.childNodes[1],R=I.parentNode;return a.appendChild(g),S(D,w,()=>{let e=k.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>u(Object.assign(e=>{let t=y(`div`,e);return t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`,E(t,L,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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
  const stats = reactive<Stat[]>([
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
    { label: 'D', value: 100 },
    { label: 'E', value: 100 },
    { label: 'F', value: 100 },
  ]);
  const add = (e: any) => { e.preventDefault(); if (!newLabel.value.trim()) return; stats.push({ label: newLabel.value, value: 100 }); newLabel.value = ''; };
  const remove = (stat: Stat) => { if (stats.length > 3) { stats.splice(stats.indexOf(stat), 1); } else { alert("Can't delete more!"); } };
  const updateValue = (s: Stat, e: any) => { s.value = Number((e.target as HTMLInputElement).value); };
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
          <pre className="raw">{JSON.stringify(stats, null, 2)}</pre>
        </div>
      </div>
    </>
  );
};

export default SVGGraph;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>u(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>u(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),M(()=>{let a=k.value===`preview`?e(()=>{let e=f(),a=A(`div`,e);_(e,a),c(a,`card bg-base-100 shadow`);let g=A(`div`,a);_(a,g),c(g,`card-body grid gap-4 rue-svg-graph`);let v=A(`svg`,g);_(g,v),P(v,`width`,`200`),P(v,`height`,`200`),E(v,W,()=>({stats:T}));let b=A(`div`,g);_(g,b),c(b,`grid gap-3`);let S=x(`rue:list:end`);C(b,S);let w=[];M(()=>{w=j(b,S,w,T||[],(e,t)=>e.label,(e,a)=>{let o=p(e);return t((e,t,a)=>i(e,a,()=>u(Object.assign(e=>{let t=y(`div`,e);t.className=`flex items-center gap-3`;let i=y(`label`,t);C(t,i);let a=d(``);C(i,a),N(a,()=>o.get().label);let s=y(`input`,t);C(t,s),s.setAttribute(`type`,`range`),s.className=`range range-primary flex-1`;let c;M(()=>{let e=o.get().value,t=e==null?``:String(e);Object.is(c,t)||(c=t,r(s,t))}),s.setAttribute(`min`,`0`),s.setAttribute(`max`,`100`);let l=e=>{let t=e=>G(o.get(),e);typeof t==`function`&&t(e)};s.addEventListener(`input`,l),n(()=>s.removeEventListener(`input`,l));let u=y(`span`,t);C(t,u),u.className=`w-10 text-right`;let f=d(``);C(u,f),N(f,()=>o.get().value);let p=y(`button`,t);C(t,p),p.className=`btn btn-error btn-sm`;let m=e=>{let t=()=>U(o.get());typeof t==`function`&&t(e)};return p.addEventListener(`click`,m),n(()=>p.removeEventListener(`click`,m)),C(p,d(`X`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,a=n,o.set(t)})})}),n(()=>m(w));let D=A(`form`,g);_(g,D),c(D,`flex items-center gap-2`);let O=e=>{let t=H;typeof t==`function`&&t(e)};D.addEventListener(`submit`,O),l(()=>D.removeEventListener(`submit`,O));let k=A(`input`,D);_(D,k),P(k,`name`,`newlabel`),c(k,`input input-bordered`),M(()=>{r(k,s.value)});let I=e=>{let t=e=>{s.value=e.target.value};typeof t==`function`&&t(e)};k.addEventListener(`input`,I),l(()=>k.removeEventListener(`input`,I));let L=A(`button`,D);_(D,L),c(L,`btn btn-success`);let R=e=>{let t=H;typeof t==`function`&&t(e)};L.addEventListener(`click`,R),l(()=>L.removeEventListener(`click`,R)),_(L,F(`Add a Stat`));let z=A(`pre`,g);_(g,z),c(z,`raw`);let B=h(z);return _(z,B),M(()=>{o(B,JSON.stringify(T,null,2))}),e},!0):``;b(()=>O(a,R,I))}),a});return a(R,()=>({children:[g,u(e=>z().content.cloneNode(!0).firstChild),u(Object.assign(e=>{let t=B().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;M(()=>{let e=`tab ${k.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{k.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;M(()=>{let e=`tab ${k.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{k.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),v]}))})(),e=>v(()=>{})))};export{G as default};