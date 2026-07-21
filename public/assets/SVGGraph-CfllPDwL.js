import{Cn as e,Ct as t,Kt as n,Lt as r,Mt as i,Tt as a,dt as o,ft as s,ht as c,jt as l,mt as u,ot as d,pn as f,pt as p,st as m,tn as h,vn as g}from"./context-8lXZvIn-.js";import{l as _,o as v,s as y,t as b}from"./vapor-runtime-ygJWVcNn.js";import{a as x,n as S}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as C}from"./Code-DhoWkRkB.js";import{r as w}from"./SidebarPlaygroundExample-B78jsvoF.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=n=>{let{point:i}=x(`useSetup:0:0`,()=>e(()=>({point:x(`computed:1:0`,()=>r(()=>T(+n.stat.value+10,n.index,n.total)))})));return _(e=>{let r=p(`text`,e);h(()=>{t(r,`x`,String(i.get().x))}),h(()=>{t(r,`y`,String(i.get().y))});let a=o(`rue:slot:anchor`);return m(r,a),h(()=>{let e=n.stat.label;g(()=>v(e,r,a))}),r})},D=n=>{let{points:i}=x(`useSetup:0:0:dup1`,()=>e(()=>({points:x(`computed:1:1`,()=>r(()=>{let e=n.stats.length;return n.stats.map((t,n)=>{let{x:r,y:i}=T(t.value,n,e);return`${r},${i}`}).join(` `)}))})));return _(e=>{let r=p(`g`,e),a=p(`polygon`,r);m(r,a),h(()=>{t(a,`points`,String(i.get()))});let s=p(`circle`,r);m(r,s),t(s,`cx`,`100`),t(s,`cy`,`100`),t(s,`r`,`80`);let c=o(`rue:list:start`),l=o(`rue:list:end`);m(r,c),m(r,l);let u=new Map;return h(()=>{u=S({items:n.stats||[],getKey:(e,t)=>e.label+t,elements:u,parent:c.parentNode,before:l,start:c,renderItem:(e,t,r,i,a)=>{y(b(E,{key:e.label+a,stat:e,index:a,total:n.stats.length}),t,r,i)}})}),r})},O=()=>{let{newLabel:r,stats:y,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>e(()=>{let e=x(`ref:1:2`,()=>f(``)),t=x(`reactive:1:3`,()=>n([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:x(`ref:1:4`,()=>f(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return _(e=>{let n=s(),f=o(`rue:component:anchor`);return m(n,f),v(b(w,{children:_(()=>{let e=s(),n=p(`style`,e);m(e,n),h(()=>{i(n,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let f=p(`h1`,e);m(e,f),a(f,`text-5xl font-semibold mb-4 md:mb-4`),m(f,u(`SVG 图像（移植自 Vue）`));let x=p(`div`,e);m(e,x),t(x,`role`,`tablist`),a(x,`tabs tabs-box`);let w=p(`button`,x);m(x,w),t(w,`role`,`tab`),h(()=>{a(w,`tab ${T.value===`preview`?`tab-active`:``}`)}),d(w,`click`,()=>{T.value=`preview`}),m(w,u(`效果`));let A=p(`button`,x);m(x,A),t(A,`role`,`tab`),h(()=>{a(A,`tab ${T.value===`code`?`tab-active`:``}`)}),d(A,`click`,()=>{T.value=`code`}),m(A,u(`代码`));let j=p(`div`,e);m(e,j),a(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=o(`rue:slot:anchor`);m(j,M),h(()=>{let e=T.value===`code`?_(()=>{let e=s(),t=p(`div`,e);m(e,t),a(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let n=o(`rue:component:anchor`);return m(t,n),h(()=>{let e=b(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});g(()=>v(e,t,n))}),e}):``;g(()=>v(e,j,M))}),m(j,u(` `));let N=o(`rue:slot:anchor`);return m(j,N),h(()=>{let e=T.value===`preview`?_(()=>{let e=s(),n=p(`div`,e);m(e,n),a(n,`card bg-base-100 shadow`);let f=p(`div`,n);m(n,f),a(f,`card-body grid gap-4 rue-svg-graph`);let x=p(`svg`,f);m(f,x),t(x,`width`,`200`),t(x,`height`,`200`);let C=o(`rue:component:anchor`);m(x,C),h(()=>{let e=b(D,{stats:y});g(()=>v(e,x,C))});let w=p(`div`,f);m(f,w),a(w,`grid gap-3`);let T=o(`rue:list:start`),A=o(`rue:list:end`);m(w,T),m(w,A);let j=new Map;h(()=>{j=S({items:y||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(e,n,r,f,y)=>{v(_(()=>{let n=s(),r=p(`div`,n);m(n,r),h(()=>{t(r,`key`,String(e.label))}),a(r,`flex items-center gap-3`);let f=p(`label`,r);m(r,f);let _=o(`rue:slot:anchor`);m(f,_),h(()=>{let t=e.label;g(()=>v(t,f,_))});let y=p(`input`,r);m(r,y),t(y,`type`,`range`),a(y,`range range-primary flex-1`),h(()=>{l(y,e.value)}),t(y,`min`,`0`),t(y,`max`,`100`),d(y,`input`,t=>k(e,t));let b=p(`span`,r);m(r,b),a(b,`w-10 text-right`);let x=c(b);m(b,x),h(()=>{i(x,e.value)});let S=p(`button`,r);return m(r,S),a(S,`btn btn-error btn-sm`),d(S,`click`,()=>O(e)),m(S,u(`X`)),n}),n,r)}})});let M=p(`form`,f);m(f,M),a(M,`flex items-center gap-2`),d(M,`submit`,E);let N=p(`input`,M);m(M,N),t(N,`name`,`newlabel`),a(N,`input input-bordered`),h(()=>{l(N,r.value)}),d(N,`input`,e=>{r.value=e.target.value});let P=p(`button`,M);m(M,P),a(P,`btn btn-success`),d(P,`click`,E),m(P,u(`Add a Stat`));let F=p(`pre`,f);m(f,F),a(F,`raw`);let I=c(F);return m(F,I),h(()=>{i(I,JSON.stringify(y,null,2))}),e}):``;g(()=>v(e,j,N))}),e})}),n,f),n})};export{O as default};