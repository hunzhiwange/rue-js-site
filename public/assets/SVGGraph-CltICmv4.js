import{$ as e,Ct as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,c as u,ct as d,et as f,gt as p,l as m,mt as h,ot as g,pt as _,s as v,t as y,tt as b}from"./vapor-runtime-DHPuOjqh.js";import{a as x,n as S}from"./vapor-helpers-vapor-CJFAWine.js";import{t as C}from"./Code-Ds9lKLk6.js";import{t as w}from"./SidebarPlaygroundExample-KML-rOvA.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=t=>{let{point:n}=x(`useSetup:0:0`,()=>r(()=>({point:x(`computed:1:0`,()=>p(()=>T(+t.stat.value+10,t.index,t.total)))})));return m(r=>{let i=e(`text`,r);c(()=>{g(i,`x`,String(n.get().x))}),c(()=>{g(i,`y`,String(n.get().y))});let a=l(`rue:slot:anchor`);return s(i,a),c(()=>{let e=t.stat.label;o(()=>v(e,i,a))}),i})},D=t=>{let{points:n}=x(`useSetup:0:0:dup1`,()=>r(()=>({points:x(`computed:1:1`,()=>p(()=>{let e=t.stats.length;return t.stats.map((t,n)=>{let{x:r,y:i}=T(t.value,n,e);return`${r},${i}`}).join(` `)}))})));return m(r=>{let i=e(`g`,r),a=e(`polygon`,i);s(i,a),c(()=>{g(a,`points`,String(n.get()))});let o=e(`circle`,i);s(i,o),g(o,`cx`,`100`),g(o,`cy`,`100`),g(o,`r`,`80`);let d=l(`rue:list:start`),f=l(`rue:list:end`);s(i,d),s(i,f);let p=new Map;return c(()=>{p=S({items:t.stats||[],getKey:(e,t)=>e.label+t,elements:p,parent:d.parentNode,before:f,start:d,renderItem:(e,n,r,i,a)=>{u(y(E,{key:e.label+a,stat:e,index:a,total:t.stats.length}),n,r,i)}})}),i})},O=()=>{let{newLabel:u,stats:p,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>r(()=>{let e=x(`ref:1:2`,()=>i(``)),n=x(`reactive:1:3`,()=>t([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:n,activeTab:x(`ref:1:4`,()=>i(`preview`)),add:t=>{t.preventDefault(),e.value.trim()&&(n.push({label:e.value,value:100}),e.value=``)},remove:e=>{n.length>3?n.splice(n.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return m(t=>{let r=a(),i=l(`rue:component:anchor`);return s(r,i),v(y(w,{children:m(()=>{let t=a(),r=e(`style`,t);s(t,r),c(()=>{h(r,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let i=e(`h1`,t);s(t,i),d(i,`text-5xl font-semibold mb-4 md:mb-4`),s(i,f(`SVG 图像（移植自 Vue）`));let x=e(`div`,t);s(t,x),g(x,`role`,`tablist`),d(x,`tabs tabs-box`);let w=e(`button`,x);s(x,w),g(w,`role`,`tab`),c(()=>{d(w,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),n(w,`click`,()=>{T.value=`preview`}),s(w,f(`效果`));let A=e(`button`,x);s(x,A),g(A,`role`,`tab`),c(()=>{d(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),n(A,`click`,()=>{T.value=`code`}),s(A,f(`代码`));let j=e(`div`,t);s(t,j),d(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=l(`rue:slot:anchor`);s(j,M),c(()=>{let t=T.value===`code`?m(()=>{let t=a(),n=e(`div`,t);s(t,n),d(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let r=l(`rue:component:anchor`);return s(n,r),c(()=>{let e=y(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});o(()=>v(e,n,r))}),t}):``;o(()=>v(t,j,M))}),s(j,f(` `));let N=l(`rue:slot:anchor`);return s(j,N),c(()=>{let t=T.value===`preview`?m(()=>{let t=a(),r=e(`div`,t);s(t,r),d(r,`card bg-base-100 shadow`);let i=e(`div`,r);s(r,i),d(i,`card-body grid gap-4 rue-svg-graph`);let x=e(`svg`,i);s(i,x),g(x,`width`,`200`),g(x,`height`,`200`);let C=l(`rue:component:anchor`);s(x,C),c(()=>{let e=y(D,{stats:p});o(()=>v(e,x,C))});let w=e(`div`,i);s(i,w),d(w,`grid gap-3`);let T=l(`rue:list:start`),A=l(`rue:list:end`);s(w,T),s(w,A);let j=new Map;c(()=>{j=S({items:p||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,r,i,u,p)=>{v(m(()=>{let r=a(),i=e(`div`,r);s(r,i),c(()=>{g(i,`key`,String(t.label))}),d(i,`flex items-center gap-3`);let u=e(`label`,i);s(i,u);let p=l(`rue:slot:anchor`);s(u,p),c(()=>{let e=t.label;o(()=>v(e,u,p))});let m=e(`input`,i);s(i,m),g(m,`type`,`range`),d(m,`range range-primary flex-1`),c(()=>{_(m,t.value)}),g(m,`min`,`0`),g(m,`max`,`100`),n(m,`input`,e=>k(t,e));let y=e(`span`,i);s(i,y),d(y,`w-10 text-right`);let x=b(y);s(y,x),c(()=>{h(x,t.value)});let S=e(`button`,i);return s(i,S),d(S,`btn btn-error btn-sm`),n(S,`click`,()=>O(t)),s(S,f(`X`)),r}),r,i)}})});let M=e(`form`,i);s(i,M),d(M,`flex items-center gap-2`),n(M,`submit`,E);let N=e(`input`,M);s(M,N),g(N,`name`,`newlabel`),d(N,`input input-bordered`),c(()=>{_(N,u.value)}),n(N,`input`,e=>{u.value=e.target.value});let P=e(`button`,M);s(M,P),d(P,`btn btn-success`),n(P,`click`,E),s(P,f(`Add a Stat`));let F=e(`pre`,i);s(i,F),d(F,`raw`);let I=b(F);return s(F,I),c(()=>{h(I,JSON.stringify(p,null,2))}),t}):``;o(()=>v(t,j,N))}),t})}),r,i),r})};export{O as default};