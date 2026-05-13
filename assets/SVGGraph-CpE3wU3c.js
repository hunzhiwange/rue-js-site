import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,X as c,Z as l,_t as u,at as d,bt as f,c as p,ct as m,j as h,l as g,lt as _,pt as v,t as y,u as b}from"./vapor-runtime-D3a-68js.js";import{a as x,n as S}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as C}from"./Code-2C2psoH3.js";import{t as w}from"./SidebarPlaygroundExample-DKa0aI1C.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=e=>{let{point:t}=x(`useSetup:0:0`,()=>u(()=>({point:x(`computed:1:0`,()=>d(()=>T(+e.stat.value+10,e.index,e.total)))})));return b(()=>{let r=n(`text`);f(()=>{s(r,`x`,String(t.get().x))}),f(()=>{s(r,`y`,String(t.get().y))});let o=a(`rue:slot:anchor`);return i(r,o),f(()=>{let t=e.stat.label;v(()=>p(t,r,o))}),r})},D=e=>{let{points:t}=x(`useSetup:0:0:dup1`,()=>u(()=>({points:x(`computed:1:1`,()=>d(()=>{let t=e.stats.length;return e.stats.map((e,n)=>{let{x:r,y:i}=T(e.value,n,t);return`${r},${i}`}).join(` `)}))})));return b(()=>{let r=n(`g`),o=n(`polygon`);i(r,o),f(()=>{s(o,`points`,String(t.get()))});let c=n(`circle`);i(r,c),s(c,`cx`,`100`),s(c,`cy`,`100`),s(c,`r`,`80`);let l=a(`rue:list:start`),u=a(`rue:list:end`);i(r,l),i(r,u);let d=new Map;return f(()=>{d=S({items:e.stats||[],getKey:(e,t)=>e.label+t,elements:d,parent:l.parentNode,before:u,start:l,renderItem:(t,n,r,i,a)=>{g(y(E,{key:t.label+a,stat:t,index:a,total:e.stats.length}),n,r,i)}})}),r})},O=()=>{let{newLabel:d,stats:g,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>u(()=>{let e=x(`ref:1:2`,()=>_(``)),t=x(`reactive:1:3`,()=>m([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:x(`ref:1:4`,()=>_(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return b(()=>{let u=e(),m=a(`rue:component:anchor`);return i(u,m),p(y(w,{children:b(()=>{let u=e(),m=n(`style`);i(u,m),f(()=>{l(m,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let _=n(`h1`);i(u,_),t(_,`text-5xl font-semibold mb-4 md:mb-4`),i(_,r(`SVG 图像（移植自 Vue）`));let x=n(`div`);i(u,x),s(x,`role`,`tablist`),t(x,`tabs tabs-box`);let w=n(`button`);i(x,w),s(w,`role`,`tab`),f(()=>{t(w,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),h(w,`click`,()=>{T.value=`preview`}),i(w,r(`效果`));let A=n(`button`);i(x,A),s(A,`role`,`tab`),f(()=>{t(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),h(A,`click`,()=>{T.value=`code`}),i(A,r(`代码`));let j=n(`div`);i(u,j),t(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=a(`rue:slot:anchor`);i(j,M),f(()=>{let r=T.value===`code`?b(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let s=a(`rue:component:anchor`);return i(o,s),f(()=>{let e=y(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});v(()=>p(e,o,s))}),r}):``;v(()=>p(r,j,M))}),i(j,r(` `));let N=a(`rue:slot:anchor`);return i(j,N),f(()=>{let u=T.value===`preview`?b(()=>{let u=e(),m=n(`div`);i(u,m),t(m,`card bg-base-100 shadow`);let _=n(`div`);i(m,_),t(_,`card-body grid gap-4 rue-svg-graph`);let x=n(`svg`);i(_,x),s(x,`width`,`200`),s(x,`height`,`200`);let C=a(`rue:component:anchor`);i(x,C),f(()=>{let e=y(D,{stats:g});v(()=>p(e,x,C))});let w=n(`div`);i(_,w),t(w,`grid gap-3`);let T=a(`rue:list:start`),A=a(`rue:list:end`);i(w,T),i(w,A);let j=new Map;f(()=>{j=S({items:g||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(u,d,m,g,_)=>{p(b(()=>{let d=e(),m=n(`div`);i(d,m),f(()=>{s(m,`key`,String(u.label))}),t(m,`flex items-center gap-3`);let g=n(`label`);i(m,g);let _=a(`rue:slot:anchor`);i(g,_),f(()=>{let e=u.label;v(()=>p(e,g,_))});let y=n(`input`);i(m,y),s(y,`type`,`range`),t(y,`range range-primary flex-1`),f(()=>{c(y,u.value)}),s(y,`min`,`0`),s(y,`max`,`100`),h(y,`input`,e=>k(u,e));let b=n(`span`);i(m,b),t(b,`w-10 text-right`);let x=o(b);i(b,x),f(()=>{l(x,u.value)});let S=n(`button`);return i(m,S),t(S,`btn btn-error btn-sm`),h(S,`click`,()=>O(u)),i(S,r(`X`)),d}),d,m)}})});let M=n(`form`);i(_,M),t(M,`flex items-center gap-2`),h(M,`submit`,E);let N=n(`input`);i(M,N),s(N,`name`,`newlabel`),t(N,`input input-bordered`),f(()=>{c(N,d.value)}),h(N,`input`,e=>{d.value=e.target.value});let P=n(`button`);i(M,P),t(P,`btn btn-success`),h(P,`click`,E),i(P,r(`Add a Stat`));let F=n(`pre`);i(_,F),t(F,`raw`);let I=o(F);return i(F,I),f(()=>{l(I,JSON.stringify(g,null,2))}),u}):``;v(()=>p(u,j,N))}),u})}),u,m),u})};export{O as default};