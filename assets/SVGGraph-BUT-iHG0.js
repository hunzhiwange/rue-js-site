import{$ as e,A as t,F as n,H as r,I as i,J as a,L as o,N as s,P as c,W as l,Y as u,c as d,j as f,l as p,nt as m,pt as h,rt as g,t as _,u as v,ut as y}from"./vapor-runtime-BZZbPG7x.js";import{a as b,n as x}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as S}from"./Code-C8wy38VS.js";import{t as C}from"./SidebarPlaygroundExample-Dv_xU0wR.js";function w(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var T=t=>{let i=b(`computed:1:0`,()=>e(()=>w(+t.stat.value+10,t.index,t.total)));return v(()=>{let e=n(`text`);h(()=>{r(e,`x`,String(i.get().x))}),h(()=>{r(e,`y`,String(i.get().y))});let a=s(`rue:slot:anchor`);return f(e,a),h(()=>{let n=t.stat.label;d(n,e,a)}),e})},E=t=>{let i=b(`computed:1:1`,()=>e(()=>{let e=t.stats.length;return t.stats.map((t,n)=>{let{x:r,y:i}=w(t.value,n,e);return`${r},${i}`}).join(` `)}));return v(()=>{let e=n(`g`),a=n(`polygon`);f(e,a),h(()=>{r(a,`points`,String(i.get()))});let o=n(`circle`);f(e,o),r(o,`cx`,`100`),r(o,`cy`,`100`),r(o,`r`,`80`);let c=s(`rue:list:start`),l=s(`rue:list:end`);f(e,c),f(e,l);let u=new Map;return h(()=>{u=x({items:t.stats||[],getKey:(e,t)=>e.label+t,elements:u,parent:c.parentNode,before:l,start:c,renderItem:(e,n,r,i,a)=>{p(_(T,{key:e.label+a,stat:e,index:a,total:t.stats.length}),n,r,i)}})}),e})},D=()=>{let{newLabel:e,stats:p,activeTab:w,add:T,remove:D,updateValue:O}=b(`useSetup:0:0`,()=>y(()=>{let e=b(`ref:1:2`,()=>g(``)),t=b(`reactive:1:3`,()=>m([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:b(`ref:1:4`,()=>g(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return v(()=>{let m=c(),g=s(`rue:component:anchor`);return f(m,g),d(_(C,{children:v(()=>{let m=c(),g=n(`style`);f(m,g),h(()=>{u(g,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let y=n(`h1`);f(m,y),l(y,`text-5xl font-semibold mb-4 md:mb-4`),f(y,i(`SVG 图像（移植自 Vue）`));let b=n(`div`);f(m,b),r(b,`role`,`tablist`),l(b,`tabs tabs-box`);let C=n(`button`);f(b,C),r(C,`role`,`tab`),h(()=>{l(C,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),t(C,`click`,()=>{w.value=`preview`}),f(C,i(`效果`));let k=n(`button`);f(b,k),r(k,`role`,`tab`),h(()=>{l(k,String(`tab ${w.value===`code`?`tab-active`:``}`))}),t(k,`click`,()=>{w.value=`code`}),f(k,i(`代码`));let A=n(`div`);f(m,A),l(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=s(`rue:slot:anchor`);f(A,j),h(()=>{d(w.value===`code`?v(()=>{let e=c(),t=n(`div`);f(e,t),l(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let r=s(`rue:component:anchor`);return f(t,r),h(()=>{d(_(S,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`}),t,r)}),e}):``,A,j)}),f(A,i(` `));let M=s(`rue:slot:anchor`);return f(A,M),h(()=>{d(w.value===`preview`?v(()=>{let m=c(),g=n(`div`);f(m,g),l(g,`card bg-base-100 shadow`);let y=n(`div`);f(g,y),l(y,`card-body grid gap-4 rue-svg-graph`);let b=n(`svg`);f(y,b),r(b,`width`,`200`),r(b,`height`,`200`);let S=s(`rue:component:anchor`);f(b,S),h(()=>{d(_(E,{stats:p}),b,S)});let C=n(`div`);f(y,C),l(C,`grid gap-3`);let w=s(`rue:list:start`),k=s(`rue:list:end`);f(C,w),f(C,k);let A=new Map;h(()=>{A=x({items:p||[],getKey:(e,t)=>e.label,elements:A,parent:C,before:k,singleRoot:!0,start:w,renderItem:(e,p,m,g,_)=>{d(v(()=>{let p=c(),m=n(`div`);f(p,m),h(()=>{r(m,`key`,String(e.label))}),l(m,`flex items-center gap-3`);let g=n(`label`);f(m,g);let _=s(`rue:slot:anchor`);f(g,_),h(()=>{let t=e.label;d(t,g,_)});let v=n(`input`);f(m,v),r(v,`type`,`range`),l(v,`range range-primary flex-1`),h(()=>{a(v,e.value)}),r(v,`min`,`0`),r(v,`max`,`100`),t(v,`input`,t=>O(e,t));let y=n(`span`);f(m,y),l(y,`w-10 text-right`);let b=o(y);f(y,b),h(()=>{u(b,e.value)});let x=n(`button`);return f(m,x),l(x,`btn btn-error btn-sm`),t(x,`click`,()=>D(e)),f(x,i(`X`)),p}),p,m)}})});let j=n(`form`);f(y,j),l(j,`flex items-center gap-2`),t(j,`submit`,T);let M=n(`input`);f(j,M),r(M,`name`,`newlabel`),l(M,`input input-bordered`),h(()=>{a(M,e.value)}),t(M,`input`,t=>{e.value=t.target.value});let N=n(`button`);f(j,N),l(N,`btn btn-success`),t(N,`click`,T),f(N,i(`Add a Stat`));let P=n(`pre`);f(y,P),l(P,`raw`);let F=o(P);return f(P,F),h(()=>{u(F,JSON.stringify(p,null,2))}),m}):``,A,M)}),m})}),m,g),m})};export{D as default};