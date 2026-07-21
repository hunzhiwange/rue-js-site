import{At as e,Cn as t,Ct as n,Mt as r,Tt as i,dt as a,ft as ee,ht as o,jt as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as te}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{r as y}from"./SidebarPlaygroundExample-B78jsvoF.js";var ne=()=>h(e=>{let t=d(`span`,e);return i(t,`scoped-style-chip`),f(t,c(`子组件内容：通过 :deep() 命中`)),t}),re=()=>h(t=>{let r=d(`div`,t);i(r,`scoped-style-deep-widget`);let a=d(`div`,r);f(r,a),i(a,`scoped-style-deep-widget-head`);let ee=d(`span`,a);f(a,ee),f(ee,c(`Deep child widget`));let o=d(`strong`,a);f(a,o),f(o,c(`78%`));let s=d(`div`,r);f(r,s),i(s,`scoped-style-deep-bars`),n(s,`aria-hidden`,`true`);let l=d(`span`,s);f(s,l),e(l,{width:`78%`});let u=d(`span`,s);f(s,u),e(u,{width:`54%`});let p=d(`span`,s);f(s,p),e(p,{width:`92%`});let m=d(`p`,r);return f(r,m),f(m,c(`这个组件内部的 class 由父组件的 :deep() 接管。`)),r}),ie=()=>h(e=>{let t=d(`section`,e);i(t,`scoped-style-panel scoped-style-global-target rounded-box border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`);let n=d(`div`,t);f(t,n),i(n,`inline-flex rounded-full border border-base-300 px-2 py-1 text-xs font-semibold uppercase`),f(n,c(`child component`));let r=d(`h2`,t);f(t,r),i(r,`mt-3 text-xl font-semibold`),f(r,c(`同名 class，不会被父组件 scoped CSS 命中`));let a=d(`p`,t);return f(t,a),i(a,`mt-2 text-sm opacity-70`),f(a,c(`这个组件也使用 scoped-style-panel；父组件的 scoped 选择器不会穿透到这里，但普通 <style> 会继续全局生效。`)),t}),b=`import { type FC, ref } from '@rue-js/rue';

const ChildChip: FC = () => <span className="chip">child via :deep()</span>;
const ChildWidget: FC = () => (
  <div className="deep-widget">
    <strong>Deep child widget</strong>
    <span className="bar" />
  </div>
);
const accents = ['#2563eb', '#16a34a', '#dc2626'] as const;

const Mirror: FC = () => (
  <section className="card global-hit">
    子组件同名 class 不会被父组件 scoped CSS 命中
  </section>
);

const Demo: FC = () => {
  const accent = ref('#2563eb');
  const radius = ref('1rem');
  const gap = ref('0.75rem');
  const nextAccent = () => {
    accent.value = accents[(accents.indexOf(accent.value as any) + 1) % accents.length];
  };

  return (
    <>
      <style scoped>{\`
        .card {
          border: 1px solid color-mix(in oklab, v-bind(accent.value) 44%, transparent);
          border-radius: v-bind('radius.value');
          background: color-mix(in oklab, v-bind(accent.value) 10%, Canvas);
        }

        .swatch {
          display: inline-block;
          width: 3rem;
          height: 1.5rem;
          border-radius: 0.5rem;
          background: v-bind(accent.value);
        }

        .color-stage {
          min-height: 5rem;
          padding: 1rem;
          border-radius: v-bind('radius.value');
          background: linear-gradient(135deg, v-bind(accent.value), #111827);
          color: white;
        }

        .card :deep(.chip) {
          color: v-bind(accent.value);
          font-weight: 700;
        }

        .card :deep(.deep-widget) {
          padding: v-bind('gap.value');
          border: 1px solid color-mix(in oklab, v-bind(accent.value) 38%, transparent);
        }

        .card :deep(.bar) {
          display: block;
          height: 0.5rem;
          border-radius: 999px;
          background: v-bind(accent.value);
        }

        :slotted(.slot-pill) {
          outline: 1px solid color-mix(in oklab, v-bind(accent.value) 54%, transparent);
          outline-offset: 2px;
        }

        :global(.global-note strong) {
          color: v-bind(accent.value);
        }
      \`}</style>

      <style>{\`
        .global-hit {
          box-shadow: inset 0 0 0 2px rgba(245, 158, 11, 0.24);
        }

        .global-hit::after {
          content: 'plain <style> global';
        }
      \`}</style>

      <section className="card global-hit">
        <button onClick={nextAccent}>换颜色</button>
        <span className="swatch">{accent.value}</span>
        <div className="color-stage">大色块也来自 v-bind(accent.value)</div>
        <ChildChip />
        <ChildWidget />
        <span className="slot-pill">:slotted target</span>
      </section>

      <Mirror />

      <p className="global-note">
        :global() 保留选择器；普通 &lt;style&gt; 仍是全局样式。
      </p>
    </>
  );
};

export default Demo;`,x=[`#2563eb`,`#16a34a`,`#dc2626`,`#7c3aed`],ae=()=>{let{raised:m,accent:v,radius:y,gap:b,nextAccent:ae}=_(`useSetup:0:0`,()=>t(()=>{let e=_(`ref:1:0`,()=>u(!0)),t=_(`ref:1:1`,()=>u(`#2563eb`));return{raised:e,accent:t,radius:_(`ref:1:2`,()=>u(`1rem`)),gap:_(`ref:1:3`,()=>u(`0.75rem`)),nextAccent:()=>{let e=x.indexOf(t.value);t.value=x[(e+1)%x.length]}}}));return h(t=>{let u=ee(),h=d(`style`,u);f(u,h),r(h,`
        .scoped-style-shell[data-rue-scope-1kl3adz] {
          display: grid;
          gap: 1rem;
        }

        .scoped-style-hero[data-rue-scope-1kl3adz] {
          display: grid;
          gap: 0.75rem;
          padding: 1.25rem;
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 28%, transparent);
          border-radius: 8px;
          background:
            linear-gradient(135deg, color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 14%, transparent), transparent 44%),
            color-mix(in oklab, Canvas 92%, #f8fafc);
        }

        .scoped-style-hero h2[data-rue-scope-1kl3adz] {
          margin: 0;
          font-size: clamp(1.75rem, 5vw, 3rem);
          line-height: 1.05;
        }

        .scoped-style-hero p[data-rue-scope-1kl3adz],
        .scoped-style-panel p[data-rue-scope-1kl3adz],
        .scoped-style-lab-card p[data-rue-scope-1kl3adz] {
          margin: 0;
          color: color-mix(in oklab, currentColor 68%, transparent);
        }

        .scoped-style-grid[data-rue-scope-1kl3adz] {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .scoped-style-controls[data-rue-scope-1kl3adz] {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .scoped-style-accent-button[data-rue-scope-1kl3adz] {
          border-color: var(--rue-v-bind-1kl3adz-aj1e7s);
          background: var(--rue-v-bind-1kl3adz-aj1e7s);
          color: white;
        }

        .scoped-style-control[data-rue-scope-1kl3adz] {
          display: inline-grid;
          min-width: 10rem;
          gap: 0.35rem;
          padding: 0.65rem 0.75rem;
          border: 1px solid color-mix(in oklab, currentColor 14%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, Canvas 96%, transparent);
        }

        .scoped-style-control span[data-rue-scope-1kl3adz] {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          opacity: 0.62;
        }

        .scoped-style-current-color[data-rue-scope-1kl3adz] {
          display: inline-flex;
          width: max-content;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.65rem;
          border-radius: 999px;
          background: color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 12%, Canvas);
          font-size: 0.85rem;
        }

        .scoped-style-swatch[data-rue-scope-1kl3adz] {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 999px;
          background: var(--rue-v-bind-1kl3adz-aj1e7s);
          box-shadow: inset 0 0 0 1px color-mix(in oklab, black 20%, transparent);
        }

        .scoped-style-current-color strong[data-rue-scope-1kl3adz] {
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
        }

        .scoped-style-live-values[data-rue-scope-1kl3adz] {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .scoped-style-radius-preview[data-rue-scope-1kl3adz] {
          display: inline-flex;
          min-width: 11rem;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.45rem 0.65rem;
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 42%, transparent);
          border-radius: var(--rue-v-bind-1kl3adz-180hqf0);
          background: #ffffff;
          color: #0f172a;
          box-shadow: inset 0 0 0 0.25rem color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 12%, transparent);
          transition:
            border-radius 160ms ease,
            box-shadow 160ms ease;
        }

        .scoped-style-radius-preview span[data-rue-scope-1kl3adz] {
          color: #475569;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .scoped-style-radius-preview strong[data-rue-scope-1kl3adz] {
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
        }

        .scoped-style-color-stage[data-rue-scope-1kl3adz] {
          display: grid;
          min-height: 8rem;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          background:
            radial-gradient(circle at 16% 18%, rgba(255, 255, 255, 0.28), transparent 28%),
            linear-gradient(135deg, var(--rue-v-bind-1kl3adz-aj1e7s) 0%, color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 72%, #111827) 54%, #111827 100%);
          color: white;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.24),
            0 20px 45px color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 34%, transparent);
          transition:
            background 160ms ease,
            box-shadow 160ms ease;
        }

        .scoped-style-color-stage span[data-rue-scope-1kl3adz] {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          opacity: 0.78;
        }

        .scoped-style-color-stage strong[data-rue-scope-1kl3adz] {
          display: block;
          margin-top: 0.25rem;
          color: white;
          font-size: clamp(2rem, 7vw, 4.25rem);
          line-height: 1;
        }

        .scoped-style-color-stage button[data-rue-scope-1kl3adz] {
          border: 1px solid rgba(255, 255, 255, 0.38);
          background: rgba(255, 255, 255, 0.16);
          color: white;
        }

        .scoped-style-color-stage button[data-rue-scope-1kl3adz]:hover {
          background: rgba(255, 255, 255, 0.24);
        }

        .scoped-style-explain[data-rue-scope-1kl3adz] {
          display: grid;
          gap: 0.85rem;
          padding: 1rem;
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 34%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 7%, Canvas);
        }

        .scoped-style-explain-head[data-rue-scope-1kl3adz] {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .scoped-style-explain-head strong[data-rue-scope-1kl3adz] {
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
          font-size: 1.05rem;
        }

        .scoped-style-explain-head code[data-rue-scope-1kl3adz] {
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
          background: var(--rue-v-bind-1kl3adz-aj1e7s);
          color: white;
          font-size: 0.8rem;
        }

        .scoped-style-watch-grid[data-rue-scope-1kl3adz] {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .scoped-style-watch-card[data-rue-scope-1kl3adz] {
          display: grid;
          gap: 0.45rem;
          padding: 0.85rem;
          border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, Canvas 96%, transparent);
        }

        .scoped-style-watch-card span[data-rue-scope-1kl3adz] {
          display: inline-grid;
          width: 1.65rem;
          height: 1.65rem;
          place-items: center;
          border-radius: 999px;
          background: var(--rue-v-bind-1kl3adz-aj1e7s);
          color: white;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .scoped-style-watch-card strong[data-rue-scope-1kl3adz] {
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
        }

        .scoped-style-watch-card p[data-rue-scope-1kl3adz] {
          margin: 0;
          color: color-mix(in oklab, currentColor 70%, transparent);
          font-size: 0.88rem;
        }

        .scoped-style-panel[data-rue-scope-1kl3adz] {
          position: relative;
          min-height: 14rem;
          overflow: hidden;
          padding: 1rem;
          border: 2px solid color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 58%, #ffffff);
          border-radius: var(--rue-v-bind-1kl3adz-180hqf0);
          background:
            linear-gradient(180deg, color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 14%, #ffffff), #f8fbff),
            #ffffff;
          color: #0f172a;
          transition:
            border-color 160ms ease,
            border-radius 160ms ease,
            box-shadow 160ms ease,
            transform 160ms ease;
        }

        .scoped-style-panel[data-rue-scope-1kl3adz]::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 0.35rem;
          background: linear-gradient(90deg, var(--rue-v-bind-1kl3adz-aj1e7s), #f59e0b);
        }

        .scoped-style-panel.is-raised[data-rue-scope-1kl3adz] {
          box-shadow:
            0 18px 45px color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 24%, transparent),
            0 0 0 1px rgba(15, 23, 42, 0.05);
          transform: translateY(-2px);
        }

        .scoped-style-kicker[data-rue-scope-1kl3adz] {
          width: max-content;
          margin-bottom: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: 999px;
          background: var(--rue-v-bind-1kl3adz-aj1e7s);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .scoped-style-metrics[data-rue-scope-1kl3adz] {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .scoped-style-metric[data-rue-scope-1kl3adz] {
          padding: 0.75rem;
          border-radius: var(--rue-v-bind-1kl3adz-180hqf0);
          background: #ffffff;
          color: #0f172a;
          box-shadow:
            inset 0 0 0 1px color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 18%, transparent),
            0 8px 20px rgba(15, 23, 42, 0.08);
          transition: border-radius 160ms ease;
        }

        .scoped-style-metric strong[data-rue-scope-1kl3adz] {
          display: block;
          color: #0f172a;
          font-size: 1.25rem;
        }

        .scoped-style-metric span[data-rue-scope-1kl3adz] {
          color: #475569;
          font-weight: 600;
        }

        .scoped-style-panel[data-rue-scope-1kl3adz] .scoped-style-chip {
          display: inline-flex;
          margin-top: 1rem;
          padding: 0.35rem 0.6rem;
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 42%, transparent);
          border-radius: 999px;
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .scoped-style-panel[data-rue-scope-1kl3adz] .scoped-style-deep-widget {
          display: grid;
          gap: var(--rue-v-bind-1kl3adz-jcvaj4);
          margin-top: 1rem;
          padding: var(--rue-v-bind-1kl3adz-jcvaj4);
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 38%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 8%, Canvas);
        }

        .scoped-style-panel[data-rue-scope-1kl3adz] .scoped-style-deep-widget-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          font-size: 0.9rem;
        }

        .scoped-style-panel[data-rue-scope-1kl3adz] .scoped-style-deep-widget-head strong {
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
          font-size: 1.1rem;
        }

        .scoped-style-panel[data-rue-scope-1kl3adz] .scoped-style-deep-bars {
          display: grid;
          gap: 0.35rem;
        }

        .scoped-style-panel[data-rue-scope-1kl3adz] .scoped-style-deep-bars span {
          display: block;
          height: 0.45rem;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--rue-v-bind-1kl3adz-aj1e7s), #f59e0b);
        }

        [data-rue-scope-1kl3adz] .scoped-style-slot-pill {
          display: inline-flex;
          margin-top: 0.75rem;
          margin-right: 0.5rem;
          padding: 0.28rem 0.55rem;
          border-radius: 999px;
          outline: 1px solid color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 54%, transparent);
          outline-offset: 2px;
          font-size: 0.78rem;
        }

        [data-rue-scope-1kl3adz] .scoped-style-slot-pill.is-hot {
          background: color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 18%, Canvas);
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
          font-weight: 700;
        }

        .scoped-style-lab-grid[data-rue-scope-1kl3adz] {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .scoped-style-lab-card[data-rue-scope-1kl3adz] {
          display: grid;
          min-height: 8.5rem;
          gap: 0.5rem;
          align-content: start;
          padding: var(--rue-v-bind-1kl3adz-jcvaj4);
          border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, Canvas 96%, #f8fafc);
        }

        .scoped-style-lab-card strong[data-rue-scope-1kl3adz] {
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
        }

        .scoped-style-lab-badge[data-rue-scope-1kl3adz] {
          width: max-content;
          padding: 0.2rem 0.5rem;
          border-radius: 999px;
          background: color-mix(in oklab, var(--rue-v-bind-1kl3adz-aj1e7s) 12%, Canvas);
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .scoped-style-global-note strong,
        .scoped-style-global-badge {
          color: var(--rue-v-bind-1kl3adz-aj1e7s);
          font-weight: 800;
        }

        @media (max-width: 1024px) {
          .scoped-style-lab-grid[data-rue-scope-1kl3adz] {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .scoped-style-grid[data-rue-scope-1kl3adz],
          .scoped-style-metrics[data-rue-scope-1kl3adz],
          .scoped-style-lab-grid[data-rue-scope-1kl3adz] {
            grid-template-columns: 1fr;
          }

          .scoped-style-color-stage[data-rue-scope-1kl3adz] {
            grid-template-columns: 1fr;
          }

          .scoped-style-watch-grid[data-rue-scope-1kl3adz] {
            grid-template-columns: 1fr;
          }
        }
      `);let _=d(`style`,u);f(u,_),p(()=>{r(_,`
        .scoped-style-global-target {
          box-shadow: inset 0 0 0 2px rgba(245, 158, 11, 0.24);
        }

        .scoped-style-global-target::after {
          content: "plain <style>";
          display: inline-flex;
          margin-top: 0.75rem;
          padding: 0.28rem 0.55rem;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          color: #92400e;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .scoped-style-plain-alert {
          border-color: rgba(245, 158, 11, 0.45);
          background: rgba(245, 158, 11, 0.1);
        }
      `)});let x=d(`div`,u);f(u,x),i(x,`scoped-style-shell`),n(x,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(x,t)});let S=d(`section`,x);f(x,S),i(S,`scoped-style-hero`),n(S,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(S,t)});let oe=d(`h2`,S);f(S,oe),n(oe,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(oe,t)}),f(oe,c(`Scoped Style`));let C=d(`p`,S);f(S,C),n(C,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(C,t)}),f(C,c(`在 JSX 组件里写`));let se=d(`code`,C);f(C,se),n(se,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(se,t)});let ce=o(se);f(se,ce),r(ce,`<style scoped>`),f(C,c(`，CSS 会只命中当前组件生成的 DOM；现在也支持`));let le=d(`code`,C);f(C,le),n(le,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(le,t)}),f(le,c(`:deep()`)),f(C,c(`、`));let ue=d(`code`,C);f(C,ue),n(ue,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ue,t)}),f(ue,c(`:slotted()`)),f(C,c(`、`));let de=d(`code`,C);f(C,de),n(de,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(de,t)}),f(de,c(`:global()`)),f(C,c(`和`));let fe=o(C);f(C,fe),r(fe,` `);let pe=d(`code`,C);f(C,pe),n(pe,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(pe,t)}),f(pe,c(`v-bind()`)),f(C,c(`。普通`));let me=d(`code`,C);f(C,me),n(me,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(me,t)});let he=o(me);f(me,he),r(he,`<style>`),f(C,c(`仍保持全局。`));let w=d(`div`,S);f(S,w),i(w,`scoped-style-controls`),n(w,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(w,t)});let ge=d(`button`,w);f(w,ge),i(ge,`btn btn-sm btn-primary`),l(ge,`click`,()=>{m.value=!m.value}),n(ge,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ge,t)}),f(ge,c(`切换当前卡片`));let _e=d(`button`,w);f(w,_e),i(_e,`btn btn-sm scoped-style-accent-button`),l(_e,`click`,ae),n(_e,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(_e,t)}),f(_e,c(`换颜色`));let T=d(`label`,w);f(w,T),i(T,`scoped-style-control`),n(T,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(T,t)});let ve=d(`span`,T);f(T,ve),n(ve,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ve,t)}),f(ve,c(`v-bind color`));let ye=d(`input`,T);f(T,ye),n(ye,`type`,`color`),p(()=>{s(ye,v.value)}),l(ye,`input`,e=>{v.value=e.target.value}),n(ye,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ye,t)});let E=d(`label`,w);f(w,E),i(E,`scoped-style-control`),n(E,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(E,t)});let be=d(`span`,E);f(E,be),n(be,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(be,t)}),f(be,c(`v-bind radius`));let D=d(`input`,E);f(E,D),n(D,`type`,`range`),n(D,`min`,`0.5`),n(D,`max`,`2.25`),n(D,`step`,`0.05`),p(()=>{s(D,String(parseFloat(y.value)))}),l(D,`input`,e=>{y.value=`${e.target.value}rem`}),n(D,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(D,t)});let O=d(`label`,w);f(w,O),i(O,`scoped-style-control`),n(O,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(O,t)});let xe=d(`span`,O);f(O,xe),n(xe,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(xe,t)}),f(xe,c(`v-bind gap`));let k=d(`input`,O);f(O,k),n(k,`type`,`range`),n(k,`min`,`0.35`),n(k,`max`,`1.35`),n(k,`step`,`0.05`),p(()=>{s(k,String(parseFloat(b.value)))}),l(k,`input`,e=>{b.value=`${e.target.value}rem`}),n(k,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(k,t)});let A=d(`div`,S);f(S,A),i(A,`scoped-style-live-values`),n(A,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(A,t)});let j=d(`p`,A);f(A,j),i(j,`scoped-style-current-color`),n(j,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(j,t)});let Se=d(`span`,j);f(j,Se),i(Se,`scoped-style-swatch`),n(Se,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Se,t)}),f(j,c(`当前 v-bind color：`));let Ce=d(`strong`,j);f(j,Ce),n(Ce,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Ce,t)});let we=o(Ce);f(Ce,we),p(()=>{r(we,v.value)});let M=d(`p`,A);f(A,M),i(M,`scoped-style-radius-preview`),n(M,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(M,t)});let Te=d(`span`,M);f(M,Te),n(Te,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Te,t)}),f(Te,c(`当前 v-bind radius`));let Ee=d(`strong`,M);f(M,Ee),n(Ee,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Ee,t)});let De=o(Ee);f(Ee,De),p(()=>{r(De,y.value)});let N=d(`div`,S);f(S,N),i(N,`scoped-style-color-stage`),n(N,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(N,t)});let P=d(`div`,N);f(N,P),n(P,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(P,t)});let Oe=d(`span`,P);f(P,Oe),n(Oe,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Oe,t)}),f(Oe,c(`live v-bind color`));let ke=d(`strong`,P);f(P,ke),n(ke,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ke,t)});let Ae=o(ke);f(ke,Ae),p(()=>{r(Ae,v.value)});let je=d(`button`,N);f(N,je),i(je,`btn btn-sm`),l(je,`click`,ae),n(je,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(je,t)}),f(je,c(`下一种颜色`));let F=d(`section`,S);f(S,F),i(F,`scoped-style-explain`),n(F,`aria-label`,`颜色效果说明`),n(F,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(F,t)});let I=d(`div`,F);f(F,I),i(I,`scoped-style-explain-head`),n(I,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(I,t)});let Me=d(`strong`,I);f(I,Me),n(Me,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Me,t)}),f(Me,c(`颜色变化怎么看`));let Ne=d(`code`,I);f(I,Ne),n(Ne,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Ne,t)});let Pe=o(Ne);f(Ne,Pe),p(()=>{r(Pe,`accent.value = ${v.value}`)});let L=d(`div`,F);f(F,L),i(L,`scoped-style-watch-grid`),n(L,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(L,t)});let R=d(`article`,L);f(L,R),i(R,`scoped-style-watch-card`),n(R,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(R,t)});let Fe=d(`span`,R);f(R,Fe),n(Fe,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Fe,t)}),f(Fe,c(`1`));let Ie=d(`strong`,R);f(R,Ie),n(Ie,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Ie,t)}),f(Ie,c(`先看上面的大色块`));let Le=d(`p`,R);f(R,Le),n(Le,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Le,t)}),f(Le,c(`它的背景直接写的是`));let Re=d(`code`,Le);f(Le,Re),n(Re,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Re,t)}),f(Re,c(`v-bind(accent.value)`)),f(Le,c(`；点按钮后这里应该整块换色。`));let z=d(`article`,L);f(L,z),i(z,`scoped-style-watch-card`),n(z,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(z,t)});let ze=d(`span`,z);f(z,ze),n(ze,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ze,t)}),f(ze,c(`2`));let Be=d(`strong`,z);f(z,Be),n(Be,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Be,t)}),f(Be,c(`拖 radius 看圆角`));let Ve=d(`p`,z);f(z,Ve),n(Ve,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Ve,t)}),f(Ve,c(`左侧大卡片、三个数字块和上方 radius 预览块都绑定了同一个 radius CSS 变量。`));let B=d(`article`,L);f(L,B),i(B,`scoped-style-watch-card`),n(B,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(B,t)});let He=d(`span`,B);f(B,He),n(He,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(He,t)}),f(He,c(`3`));let Ue=d(`strong`,B);f(B,Ue),n(Ue,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Ue,t)}),f(Ue,c(`最后看右侧对照`));let V=d(`p`,B);f(B,V),n(V,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(V,t)}),f(V,c(`右侧同名 class 不吃 scoped 选择器；只有橙色`));let We=d(`code`,V);f(V,We),n(We,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(We,t)});let Ge=o(We);f(We,Ge),r(Ge,`<style>`);let Ke=o(V);f(V,Ke),r(Ke,` `),f(V,c(`全局样式会命中。`));let H=d(`div`,x);f(x,H),i(H,`scoped-style-grid`),n(H,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(H,t)});let U=d(`section`,H);f(H,U),p(()=>{i(U,`scoped-style-panel scoped-style-global-target ${m.value?`is-raised`:``}`)}),n(U,`aria-label`,`当前组件样式卡片`),n(U,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(U,t)});let qe=d(`div`,U);f(U,qe),i(qe,`scoped-style-kicker`),n(qe,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(qe,t)}),f(qe,c(`current component`));let Je=d(`h2`,U);f(U,Je),n(Je,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Je,t)}),f(Je,c(`当前组件内生效`));let Ye=d(`p`,U);f(U,Ye),n(Ye,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Ye,t)}),f(Ye,c(`编译器会给这些 DOM 加上同一个 data-rue-scope-* 属性，并改写选择器。`));let W=d(`div`,U);f(U,W),i(W,`scoped-style-metrics`),n(W,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(W,t)});let G=d(`div`,W);f(W,G),i(G,`scoped-style-metric`),n(G,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(G,t)});let Xe=d(`strong`,G);f(G,Xe),n(Xe,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Xe,t)}),f(Xe,c(`1`));let Ze=d(`span`,G);f(G,Ze),n(Ze,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Ze,t)}),f(Ze,c(`scope id`));let K=d(`div`,W);f(W,K),i(K,`scoped-style-metric`),n(K,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(K,t)});let Qe=d(`strong`,K);f(K,Qe),n(Qe,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Qe,t)}),f(Qe,c(`0`));let $e=d(`span`,K);f(K,$e),n($e,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e($e,t)}),f($e,c(`global leak`));let q=d(`div`,W);f(W,q),i(q,`scoped-style-metric`),n(q,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(q,t)});let et=d(`strong`,q);f(q,et),n(et,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(et,t)}),f(et,c(`v-bind`));let tt=d(`span`,q);f(q,tt),n(tt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(tt,t)}),f(tt,c(`css vars`));let nt=a(`rue:component:anchor`);f(U,nt),g(te(ne,{}),U,nt);let rt=a(`rue:component:anchor`);f(U,rt),g(te(re,{}),U,rt);let it=d(`span`,U);f(U,it),i(it,`scoped-style-slot-pill`),n(it,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(it,t)}),f(it,c(`:slotted target`));let at=d(`span`,U);f(U,at),i(at,`scoped-style-slot-pill is-hot`),n(at,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(at,t)}),f(at,c(`:slotted + v-bind`));let ot=a(`rue:component:anchor`);f(H,ot),g(te(ie,{}),H,ot);let J=d(`section`,x);f(x,J),i(J,`scoped-style-lab-grid`),n(J,`aria-label`,`scoped selector lab`),n(J,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(J,t)});let Y=d(`article`,J);f(J,Y),i(Y,`scoped-style-lab-card`),n(Y,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Y,t)});let st=d(`span`,Y);f(Y,st),i(st,`scoped-style-lab-badge`),n(st,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(st,t)}),f(st,c(`normal`));let ct=d(`strong`,Y);f(Y,ct),n(ct,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ct,t)}),f(ct,c(`当前组件 DOM`));let lt=d(`p`,Y);f(Y,lt),n(lt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(lt,t)}),f(lt,c(`普通选择器会被追加 data-rue-scope-*，只命中本组件生成的元素。`));let X=d(`article`,J);f(J,X),i(X,`scoped-style-lab-card`),n(X,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(X,t)});let ut=d(`span`,X);f(X,ut),i(ut,`scoped-style-lab-badge`),n(ut,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ut,t)}),f(ut,c(`:deep()`));let dt=d(`strong`,X);f(X,dt),n(dt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(dt,t)}),f(dt,c(`子组件内部 DOM`));let ft=d(`p`,X);f(X,ft),n(ft,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ft,t)}),f(ft,c(`父组件可以显式穿透到 DeepWidget 的内部 class。`));let Z=d(`article`,J);f(J,Z),i(Z,`scoped-style-lab-card scoped-style-global-target`),n(Z,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Z,t)});let pt=d(`span`,Z);f(Z,pt),i(pt,`scoped-style-lab-badge`),n(pt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(pt,t)}),f(pt,c(`plain style`));let mt=d(`strong`,Z);f(Z,mt),n(mt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(mt,t)}),f(mt,c(`普通 <style>`));let ht=d(`p`,Z);f(Z,ht),n(ht,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(ht,t)}),f(ht,c(`这个橙色内描边没有 scope 限制，会命中所有同名 class。`));let Q=d(`article`,J);f(J,Q),i(Q,`scoped-style-lab-card scoped-style-plain-alert`),n(Q,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(Q,t)});let gt=d(`span`,Q);f(Q,gt),i(gt,`scoped-style-lab-badge`),n(gt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(gt,t)}),f(gt,c(`:global()`));let _t=d(`strong`,Q);f(Q,_t),i(_t,`scoped-style-global-badge`),n(_t,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(_t,t)}),f(_t,c(`保留全局选择器`));let vt=d(`p`,Q);f(Q,vt),n(vt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(vt,t)}),f(vt,c(`用于少量确实需要外溢的样式，仍可读取 v-bind CSS 变量。`));let $=d(`p`,x);f(x,$),i($,`scoped-style-global-note text-sm`),n($,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e($,t)});let yt=d(`strong`,$);f($,yt),n(yt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(yt,t)}),f(yt,c(`:global()`)),f($,c(`会保留全局选择器；右侧子组件和选择器矩阵里的橙色描边来自普通`));let bt=o($);f($,bt),r(bt,` `);let xt=d(`code`,$);f($,xt),n(xt,`data-rue-scope-1kl3adz`,``),p(()=>{let t={"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value};e(xt,t)});let St=o(xt);return f(xt,St),r(St,`<style>`),f($,c(`，说明非 scoped 样式仍会全局命中同名 class。`)),u})},S=()=>{let{activeTab:e}=_(`useSetup:0:0:dup1`,()=>t(()=>({activeTab:_(`ref:1:4`,()=>u(`preview`))})));return h(t=>{let r=ee(),o=a(`rue:component:anchor`);return f(r,o),g(te(y,{children:h(()=>{let t=ee(),r=d(`h1`,t);f(t,r),i(r,`mb-4 text-5xl font-semibold md:mb-4`),f(r,c(`Scoped Style 组件作用域样式`));let o=d(`div`,t);f(t,o),n(o,`role`,`tablist`),i(o,`tabs tabs-box`);let s=d(`button`,o);f(o,s),n(s,`role`,`tab`),p(()=>{i(s,`tab ${e.value===`preview`?`tab-active`:``}`)}),l(s,`click`,()=>{e.value=`preview`}),f(s,c(`效果`));let u=d(`button`,o);f(o,u),n(u,`role`,`tab`),p(()=>{i(u,`tab ${e.value===`code`?`tab-active`:``}`)}),l(u,`click`,()=>{e.value=`code`}),f(u,c(`代码`));let _=d(`div`,t);f(t,_),i(_,`mt-4 grid items-start gap-6 md:grid-cols-1`);let y=a(`rue:slot:anchor`);f(_,y),p(()=>{let t=e.value===`preview`?h(()=>{let e=ee(),t=d(`div`,e);f(e,t),i(t,`card bg-base-100 shadow`);let n=d(`div`,t);f(t,n),i(n,`card-body`);let r=a(`rue:component:anchor`);return f(n,r),g(te(ae,{}),n,r),e}):``;m(()=>g(t,_,y))}),f(_,c(` `));let ne=a(`rue:slot:anchor`);return f(_,ne),p(()=>{let t=e.value===`code`?h(()=>{let e=ee(),t=d(`div`,e);f(e,t),i(t,`card overflow-auto bg-base-100 shadow`);let n=d(`div`,t);f(t,n),i(n,`card-body p-0`);let r=a(`rue:component:anchor`);return f(n,r),p(()=>{let e=te(v,{className:`h-full`,lang:`tsx`,code:b,title:`Scoped style TSX`});m(()=>g(e,n,r))}),e}):``;m(()=>g(t,_,ne))}),t})}),r,o),r})};export{S as default};