import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,dt as u,gt as d,kt as f,l as p,ot as m,q as h,st as g,t as _,tt as v,u as y,xt as b}from"./vapor-runtime-BAZOdMd8.js";import{a as x,n as S}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as C}from"./Code-DY4Ua5uc.js";import{t as w}from"./SidebarPlaygroundExample-B8LFNSBu.js";function T(e,t,n){let r=-e*.8,i=Math.PI*2/n*t,a=Math.cos(i),o=Math.sin(i);return{x:0*a-r*o+100,y:0*o+r*a+100}}var E=n=>{let{point:i}=x(`useSetup:0:0`,()=>t(()=>({point:x(`computed:1:0`,()=>u(()=>T(+n.stat.value+10,n.index,n.total)))})));return l(t=>{let o=a(`text`,t);f(()=>{e(o,`x`,String(i.get().x))}),f(()=>{e(o,`y`,String(i.get().y))});let c=s(`rue:slot:anchor`);return r(o,c),f(()=>{let e=n.stat.label;b(()=>p(e,o,c))}),o})},D=n=>{let{points:i}=x(`useSetup:0:0:dup1`,()=>t(()=>({points:x(`computed:1:1`,()=>u(()=>{let e=n.stats.length;return n.stats.map((t,n)=>{let{x:r,y:i}=T(t.value,n,e);return`${r},${i}`}).join(` `)}))})));return l(t=>{let o=a(`g`,t),c=a(`polygon`,o);r(o,c),f(()=>{e(c,`points`,String(i.get()))});let l=a(`circle`,o);r(o,l),e(l,`cx`,`100`),e(l,`cy`,`100`),e(l,`r`,`80`);let u=s(`rue:list:start`),d=s(`rue:list:end`);r(o,u),r(o,d);let p=new Map;return f(()=>{p=S({items:n.stats||[],getKey:(e,t)=>e.label+t,elements:p,parent:u.parentNode,before:d,start:u,renderItem:(e,t,r,i,a)=>{y(_(E,{key:e.label+a,stat:e,index:a,total:n.stats.length}),t,r,i)}})}),o})},O=()=>{let{newLabel:u,stats:y,activeTab:T,add:E,remove:O,updateValue:k}=x(`useSetup:0:0:dup2`,()=>t(()=>{let e=x(`ref:1:2`,()=>c(``)),t=x(`reactive:1:3`,()=>d([{label:`A`,value:100},{label:`B`,value:100},{label:`C`,value:100},{label:`D`,value:100},{label:`E`,value:100},{label:`F`,value:100}]));return{newLabel:e,stats:t,activeTab:x(`ref:1:4`,()=>c(`preview`)),add:n=>{n.preventDefault(),e.value.trim()&&(t.push({label:e.value,value:100}),e.value=``)},remove:e=>{t.length>3?t.splice(t.indexOf(e),1):alert(`Can't delete more!`)},updateValue:(e,t)=>{e.value=Number(t.target.value)}}}));return l(t=>{let c=n(),d=s(`rue:component:anchor`);return r(c,d),p(_(w,{children:l(()=>{let t=n(),c=a(`style`,t);r(t,c),f(()=>{g(c,`
.rue-svg-graph { padding: 10px; }
.rue-svg-graph polygon { fill: #42b983; opacity: 0.75; }
.rue-svg-graph circle { fill: transparent; stroke: #999; }
.rue-svg-graph text { font-size: 10px; fill: #666; }
.rue-svg-graph label { display: inline-block; margin-left: 10px; width: 20px; }
.rue-svg-graph #raw {  background: #f5f5f5; padding: 10px; }
`)});let d=a(`h1`,t);r(t,d),v(d,`text-5xl font-semibold mb-4 md:mb-4`),r(d,h(`SVG 图像（移植自 Vue）`));let x=a(`div`,t);r(t,x),e(x,`role`,`tablist`),v(x,`tabs tabs-box`);let w=a(`button`,x);r(x,w),e(w,`role`,`tab`),f(()=>{v(w,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),o(w,`click`,()=>{T.value=`preview`}),r(w,h(`效果`));let A=a(`button`,x);r(x,A),e(A,`role`,`tab`),f(()=>{v(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),o(A,`click`,()=>{T.value=`code`}),r(A,h(`代码`));let j=a(`div`,t);r(t,j),v(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=s(`rue:slot:anchor`);r(j,M),f(()=>{let e=T.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),v(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[720px]`);let i=s(`rue:component:anchor`);return r(t,i),f(()=>{let e=_(C,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref, reactive, computed } from '@rue-js/rue';

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

export default SVGGraph;`});b(()=>p(e,t,i))}),e}):``;b(()=>p(e,j,M))}),r(j,h(` `));let N=s(`rue:slot:anchor`);return r(j,N),f(()=>{let t=T.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),v(c,`card bg-base-100 shadow`);let d=a(`div`,c);r(c,d),v(d,`card-body grid gap-4 rue-svg-graph`);let x=a(`svg`,d);r(d,x),e(x,`width`,`200`),e(x,`height`,`200`);let C=s(`rue:component:anchor`);r(x,C),f(()=>{let e=_(D,{stats:y});b(()=>p(e,x,C))});let w=a(`div`,d);r(d,w),v(w,`grid gap-3`);let T=s(`rue:list:start`),A=s(`rue:list:end`);r(w,T),r(w,A);let j=new Map;f(()=>{j=S({items:y||[],getKey:(e,t)=>e.label,elements:j,parent:w,before:A,singleRoot:!0,trackIndex:!1,start:T,renderItem:(t,c,u,d,_)=>{p(l(()=>{let c=n(),l=a(`div`,c);r(c,l),f(()=>{e(l,`key`,String(t.label))}),v(l,`flex items-center gap-3`);let u=a(`label`,l);r(l,u);let d=s(`rue:slot:anchor`);r(u,d),f(()=>{let e=t.label;b(()=>p(e,u,d))});let _=a(`input`,l);r(l,_),e(_,`type`,`range`),v(_,`range range-primary flex-1`),f(()=>{m(_,t.value)}),e(_,`min`,`0`),e(_,`max`,`100`),o(_,`input`,e=>k(t,e));let y=a(`span`,l);r(l,y),v(y,`w-10 text-right`);let x=i(y);r(y,x),f(()=>{g(x,t.value)});let S=a(`button`,l);return r(l,S),v(S,`btn btn-error btn-sm`),o(S,`click`,()=>O(t)),r(S,h(`X`)),c}),c,u)}})});let M=a(`form`,d);r(d,M),v(M,`flex items-center gap-2`),o(M,`submit`,E);let N=a(`input`,M);r(M,N),e(N,`name`,`newlabel`),v(N,`input input-bordered`),f(()=>{m(N,u.value)}),o(N,`input`,e=>{u.value=e.target.value});let P=a(`button`,M);r(M,P),v(P,`btn btn-success`),o(P,`click`,E),r(P,h(`Add a Stat`));let F=a(`pre`,d);r(d,F),v(F,`raw`);let I=i(F);return r(F,I),f(()=>{g(I,JSON.stringify(y,null,2))}),t}):``;b(()=>p(t,j,N))}),t})}),c,d),c})};export{O as default};