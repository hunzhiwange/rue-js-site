import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,at as d,d as f,l as p,mt as m,nt as h,ot as g,t as _,u as v,ut as y,z as b}from"./vapor-runtime-Dfq7aA8z.js";import{a as x,n as S}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as C}from"./Code-CLTo4rRM.js";import{t as w}from"./SidebarPlaygroundExample-DOFGFBd1.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=t=>{let{point:n}=x(`useSetup:0:0`,()=>m(()=>({point:x(`computed:1:0`,()=>h(()=>T(+t.stat.value+10,t.index,t.total)))})));return f(i=>{let o=r(`text`,i);u(()=>{c(o,`x`,String(n.get().x))}),u(()=>{c(o,`y`,String(n.get().y))});let s=e(`rue:slot:anchor`);return a(o,s),u(()=>{let e=t.stat.label;y(()=>p(e,o,s))}),o})},D=t=>{let{points:n}=x(`useSetup:0:0:dup1`,()=>m(()=>({points:x(`computed:1:1`,()=>h(()=>{let e=t.stats.length;return t.stats.map((t,n)=>{let{x:r,y:i}=T(t.value,n,e);return`${r},${i}`}).join(` `)}))})));return f(i=>{let o=r(`g`,i),s=r(`polygon`,o);a(o,s),u(()=>{c(s,`points`,String(n.get()))});let l=r(`circle`,o);a(o,l),c(l,`cx`,`100`),c(l,`cy`,`100`),c(l,`r`,`80`);let d=e(`rue:list:start`),f=e(`rue:list:end`);a(o,d),a(o,f);let p=new Map;return u(()=>{p=S({items:t.stats||[],getKey:(e,t)=>e.label+t,elements:p,parent:d.parentNode,before:f,start:d,renderItem:(e,n,r,i,a)=>{v(_(E,{key:e.label+a,stat:e,index:a,total:t.stats.length}),n,r,i)}})}),o})},O=()=>{let{newLabel:h,stats:v,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>m(()=>{let e=x(`ref:1:2`,()=>g(``)),t=x(`reactive:1:3`,()=>d([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:x(`ref:1:4`,()=>g(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return f(d=>{let m=t(),g=e(`rue:component:anchor`);return a(m,g),p(_(w,{children:f(()=>{let d=t(),m=r(`style`,d);a(d,m),u(()=>{o(m,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let g=r(`h1`,d);a(d,g),n(g,`text-5xl font-semibold mb-4 md:mb-4`),a(g,s(`SVG 图像（移植自 Vue）`));let x=r(`div`,d);a(d,x),c(x,`role`,`tablist`),n(x,`tabs tabs-box`);let w=r(`button`,x);a(x,w),c(w,`role`,`tab`),u(()=>{n(w,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),i(w,`click`,()=>{T.value=`preview`}),a(w,s(`效果`));let A=r(`button`,x);a(x,A),c(A,`role`,`tab`),u(()=>{n(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),i(A,`click`,()=>{T.value=`code`}),a(A,s(`代码`));let j=r(`div`,d);a(d,j),n(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=e(`rue:slot:anchor`);a(j,M),u(()=>{let i=T.value===`code`?f(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let s=e(`rue:component:anchor`);return a(o,s),u(()=>{let e=_(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});y(()=>p(e,o,s))}),i}):``;y(()=>p(i,j,M))}),a(j,s(` `));let N=e(`rue:slot:anchor`);return a(j,N),u(()=>{let d=T.value===`preview`?f(()=>{let d=t(),m=r(`div`,d);a(d,m),n(m,`card bg-base-100 shadow`);let g=r(`div`,m);a(m,g),n(g,`card-body grid gap-4 rue-svg-graph`);let x=r(`svg`,g);a(g,x),c(x,`width`,`200`),c(x,`height`,`200`);let C=e(`rue:component:anchor`);a(x,C),u(()=>{let e=_(D,{stats:v});y(()=>p(e,x,C))});let w=r(`div`,g);a(g,w),n(w,`grid gap-3`);let T=e(`rue:list:start`),A=e(`rue:list:end`);a(w,T),a(w,A);let j=new Map;u(()=>{j=S({items:v||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(d,m,h,g,_)=>{p(f(()=>{let f=t(),m=r(`div`,f);a(f,m),u(()=>{c(m,`key`,String(d.label))}),n(m,`flex items-center gap-3`);let h=r(`label`,m);a(m,h);let g=e(`rue:slot:anchor`);a(h,g),u(()=>{let e=d.label;y(()=>p(e,h,g))});let _=r(`input`,m);a(m,_),c(_,`type`,`range`),n(_,`range range-primary flex-1`),u(()=>{l(_,d.value)}),c(_,`min`,`0`),c(_,`max`,`100`),i(_,`input`,e=>k(d,e));let v=r(`span`,m);a(m,v),n(v,`w-10 text-right`);let x=b(v);a(v,x),u(()=>{o(x,d.value)});let S=r(`button`,m);return a(m,S),n(S,`btn btn-error btn-sm`),i(S,`click`,()=>O(d)),a(S,s(`X`)),f}),m,h)}})});let M=r(`form`,g);a(g,M),n(M,`flex items-center gap-2`),i(M,`submit`,E);let N=r(`input`,M);a(M,N),c(N,`name`,`newlabel`),n(N,`input input-bordered`),u(()=>{l(N,h.value)}),i(N,`input`,e=>{h.value=e.target.value});let P=r(`button`,M);a(M,P),n(P,`btn btn-success`),i(P,`click`,E),a(P,s(`Add a Stat`));let F=r(`pre`,g);a(g,F),n(F,`raw`);let I=b(F);return a(F,I),u(()=>{o(I,JSON.stringify(v,null,2))}),d}):``;y(()=>p(d,j,N))}),d})}),m,g),m})};export{O as default};