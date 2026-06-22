import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as ee,o as l,on as u,pt as d,rt as f,t as p,tn as te,tt as m,vt as h,yt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-C5NjdoiC.js";import{r as y}from"./SidebarPlaygroundExample-DpItFif-.js";var ne=()=>c(t=>{let n=f(`span`,t);return d(n,`scoped-style-chip`),e(n,s(`子组件内容：通过 :deep() 命中`)),n}),re=()=>c(t=>{let n=f(`div`,t);d(n,`scoped-style-deep-widget`);let r=f(`div`,n);e(n,r),d(r,`scoped-style-deep-widget-head`);let i=f(`span`,r);e(r,i),e(i,s(`Deep child widget`));let a=f(`strong`,r);e(r,a),e(a,s(`78%`));let c=f(`div`,n);e(n,c),d(c,`scoped-style-deep-bars`),o(c,`aria-hidden`,`true`);let ee=f(`span`,c);e(c,ee),h(ee,{width:`78%`});let l=f(`span`,c);e(c,l),h(l,{width:`54%`});let u=f(`span`,c);e(c,u),h(u,{width:`92%`});let p=f(`p`,n);return e(n,p),e(p,s(`这个组件内部的 class 由父组件的 :deep() 接管。`)),n}),ie=()=>c(t=>{let n=f(`section`,t);d(n,`scoped-style-panel scoped-style-global-target rounded-box border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`);let r=f(`div`,n);e(n,r),d(r,`inline-flex rounded-full border border-base-300 px-2 py-1 text-xs font-semibold uppercase`),e(r,s(`child component`));let i=f(`h2`,n);e(n,i),d(i,`mt-3 text-xl font-semibold`),e(i,s(`同名 class，不会被父组件 scoped CSS 命中`));let a=f(`p`,n);return e(n,a),d(a,`mt-2 text-sm opacity-70`),e(a,s(`这个组件也使用 scoped-style-panel；父组件的 scoped 选择器不会穿透到这里，但普通 <style> 会继续全局生效。`)),n}),b=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,x=[`#2563eb`,`#16a34a`,`#dc2626`,`#7c3aed`],ae=()=>{let{raised:te,accent:v,radius:y,gap:b,nextAccent:ae}=_(`useSetup:0:0`,()=>u(()=>{let e=_(`ref:1:0`,()=>n(!0)),t=_(`ref:1:1`,()=>n(`#2563eb`));return{raised:e,accent:t,radius:_(`ref:1:2`,()=>n(`1rem`)),gap:_(`ref:1:3`,()=>n(`0.75rem`)),nextAccent:()=>{t.value=x[(x.indexOf(t.value)+1)%x.length]}}}));return c(n=>{let c=ee(),u=f(`style`,c);e(c,u),a(u,`
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
      `);let _=f(`style`,c);e(c,_),t(()=>{a(_,`
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
      `)});let x=f(`div`,c);e(c,x),d(x,`scoped-style-shell`),o(x,`data-rue-scope-1kl3adz`,``),t(()=>{h(x,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let S=f(`section`,x);e(x,S),d(S,`scoped-style-hero`),o(S,`data-rue-scope-1kl3adz`,``),t(()=>{h(S,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let oe=f(`h2`,S);e(S,oe),o(oe,`data-rue-scope-1kl3adz`,``),t(()=>{h(oe,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(oe,s(`Scoped Style`));let C=f(`p`,S);e(S,C),o(C,`data-rue-scope-1kl3adz`,``),t(()=>{h(C,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(C,s(`在 JSX 组件里写`));let se=f(`code`,C);e(C,se),o(se,`data-rue-scope-1kl3adz`,``),t(()=>{h(se,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let ce=i(se);e(se,ce),a(ce,`<style scoped>`),e(C,s(`，CSS 会只命中当前组件生成的 DOM；现在也支持`));let le=f(`code`,C);e(C,le),o(le,`data-rue-scope-1kl3adz`,``),t(()=>{h(le,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(le,s(`:deep()`)),e(C,s(`、`));let ue=f(`code`,C);e(C,ue),o(ue,`data-rue-scope-1kl3adz`,``),t(()=>{h(ue,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(ue,s(`:slotted()`)),e(C,s(`、`));let de=f(`code`,C);e(C,de),o(de,`data-rue-scope-1kl3adz`,``),t(()=>{h(de,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(de,s(`:global()`)),e(C,s(`和`));let fe=i(C);e(C,fe),a(fe,` `);let pe=f(`code`,C);e(C,pe),o(pe,`data-rue-scope-1kl3adz`,``),t(()=>{h(pe,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(pe,s(`v-bind()`)),e(C,s(`。普通`));let me=f(`code`,C);e(C,me),o(me,`data-rue-scope-1kl3adz`,``),t(()=>{h(me,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let he=i(me);e(me,he),a(he,`<style>`),e(C,s(`仍保持全局。`));let w=f(`div`,S);e(S,w),d(w,`scoped-style-controls`),o(w,`data-rue-scope-1kl3adz`,``),t(()=>{h(w,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let ge=f(`button`,w);e(w,ge),d(ge,`btn btn-sm btn-primary`),r(ge,`click`,()=>{te.value=!te.value}),o(ge,`data-rue-scope-1kl3adz`,``),t(()=>{h(ge,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(ge,s(`切换当前卡片`));let _e=f(`button`,w);e(w,_e),d(_e,`btn btn-sm scoped-style-accent-button`),r(_e,`click`,ae),o(_e,`data-rue-scope-1kl3adz`,``),t(()=>{h(_e,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(_e,s(`换颜色`));let T=f(`label`,w);e(w,T),d(T,`scoped-style-control`),o(T,`data-rue-scope-1kl3adz`,``),t(()=>{h(T,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let ve=f(`span`,T);e(T,ve),o(ve,`data-rue-scope-1kl3adz`,``),t(()=>{h(ve,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(ve,s(`v-bind color`));let ye=f(`input`,T);e(T,ye),o(ye,`type`,`color`),t(()=>{g(ye,v.value)}),r(ye,`input`,e=>{v.value=e.target.value}),o(ye,`data-rue-scope-1kl3adz`,``),t(()=>{h(ye,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let E=f(`label`,w);e(w,E),d(E,`scoped-style-control`),o(E,`data-rue-scope-1kl3adz`,``),t(()=>{h(E,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let be=f(`span`,E);e(E,be),o(be,`data-rue-scope-1kl3adz`,``),t(()=>{h(be,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(be,s(`v-bind radius`));let D=f(`input`,E);e(E,D),o(D,`type`,`range`),o(D,`min`,`0.5`),o(D,`max`,`2.25`),o(D,`step`,`0.05`),t(()=>{g(D,String(parseFloat(y.value)))}),r(D,`input`,e=>{y.value=`${e.target.value}rem`}),o(D,`data-rue-scope-1kl3adz`,``),t(()=>{h(D,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let O=f(`label`,w);e(w,O),d(O,`scoped-style-control`),o(O,`data-rue-scope-1kl3adz`,``),t(()=>{h(O,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let xe=f(`span`,O);e(O,xe),o(xe,`data-rue-scope-1kl3adz`,``),t(()=>{h(xe,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(xe,s(`v-bind gap`));let k=f(`input`,O);e(O,k),o(k,`type`,`range`),o(k,`min`,`0.35`),o(k,`max`,`1.35`),o(k,`step`,`0.05`),t(()=>{g(k,String(parseFloat(b.value)))}),r(k,`input`,e=>{b.value=`${e.target.value}rem`}),o(k,`data-rue-scope-1kl3adz`,``),t(()=>{h(k,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let A=f(`div`,S);e(S,A),d(A,`scoped-style-live-values`),o(A,`data-rue-scope-1kl3adz`,``),t(()=>{h(A,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let j=f(`p`,A);e(A,j),d(j,`scoped-style-current-color`),o(j,`data-rue-scope-1kl3adz`,``),t(()=>{h(j,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Se=f(`span`,j);e(j,Se),d(Se,`scoped-style-swatch`),o(Se,`data-rue-scope-1kl3adz`,``),t(()=>{h(Se,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(j,s(`当前 v-bind color：`));let Ce=f(`strong`,j);e(j,Ce),o(Ce,`data-rue-scope-1kl3adz`,``),t(()=>{h(Ce,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let we=i(Ce);e(Ce,we),t(()=>{a(we,v.value)});let M=f(`p`,A);e(A,M),d(M,`scoped-style-radius-preview`),o(M,`data-rue-scope-1kl3adz`,``),t(()=>{h(M,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Te=f(`span`,M);e(M,Te),o(Te,`data-rue-scope-1kl3adz`,``),t(()=>{h(Te,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Te,s(`当前 v-bind radius`));let Ee=f(`strong`,M);e(M,Ee),o(Ee,`data-rue-scope-1kl3adz`,``),t(()=>{h(Ee,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let De=i(Ee);e(Ee,De),t(()=>{a(De,y.value)});let N=f(`div`,S);e(S,N),d(N,`scoped-style-color-stage`),o(N,`data-rue-scope-1kl3adz`,``),t(()=>{h(N,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let P=f(`div`,N);e(N,P),o(P,`data-rue-scope-1kl3adz`,``),t(()=>{h(P,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Oe=f(`span`,P);e(P,Oe),o(Oe,`data-rue-scope-1kl3adz`,``),t(()=>{h(Oe,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Oe,s(`live v-bind color`));let ke=f(`strong`,P);e(P,ke),o(ke,`data-rue-scope-1kl3adz`,``),t(()=>{h(ke,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Ae=i(ke);e(ke,Ae),t(()=>{a(Ae,v.value)});let je=f(`button`,N);e(N,je),d(je,`btn btn-sm`),r(je,`click`,ae),o(je,`data-rue-scope-1kl3adz`,``),t(()=>{h(je,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(je,s(`下一种颜色`));let F=f(`section`,S);e(S,F),d(F,`scoped-style-explain`),o(F,`aria-label`,`颜色效果说明`),o(F,`data-rue-scope-1kl3adz`,``),t(()=>{h(F,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let I=f(`div`,F);e(F,I),d(I,`scoped-style-explain-head`),o(I,`data-rue-scope-1kl3adz`,``),t(()=>{h(I,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Me=f(`strong`,I);e(I,Me),o(Me,`data-rue-scope-1kl3adz`,``),t(()=>{h(Me,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Me,s(`颜色变化怎么看`));let Ne=f(`code`,I);e(I,Ne),o(Ne,`data-rue-scope-1kl3adz`,``),t(()=>{h(Ne,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Pe=i(Ne);e(Ne,Pe),t(()=>{a(Pe,`accent.value = ${v.value}`)});let L=f(`div`,F);e(F,L),d(L,`scoped-style-watch-grid`),o(L,`data-rue-scope-1kl3adz`,``),t(()=>{h(L,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let R=f(`article`,L);e(L,R),d(R,`scoped-style-watch-card`),o(R,`data-rue-scope-1kl3adz`,``),t(()=>{h(R,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Fe=f(`span`,R);e(R,Fe),o(Fe,`data-rue-scope-1kl3adz`,``),t(()=>{h(Fe,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Fe,s(`1`));let Ie=f(`strong`,R);e(R,Ie),o(Ie,`data-rue-scope-1kl3adz`,``),t(()=>{h(Ie,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Ie,s(`先看上面的大色块`));let Le=f(`p`,R);e(R,Le),o(Le,`data-rue-scope-1kl3adz`,``),t(()=>{h(Le,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Le,s(`它的背景直接写的是`));let Re=f(`code`,Le);e(Le,Re),o(Re,`data-rue-scope-1kl3adz`,``),t(()=>{h(Re,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Re,s(`v-bind(accent.value)`)),e(Le,s(`；点按钮后这里应该整块换色。`));let z=f(`article`,L);e(L,z),d(z,`scoped-style-watch-card`),o(z,`data-rue-scope-1kl3adz`,``),t(()=>{h(z,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let ze=f(`span`,z);e(z,ze),o(ze,`data-rue-scope-1kl3adz`,``),t(()=>{h(ze,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(ze,s(`2`));let Be=f(`strong`,z);e(z,Be),o(Be,`data-rue-scope-1kl3adz`,``),t(()=>{h(Be,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Be,s(`拖 radius 看圆角`));let Ve=f(`p`,z);e(z,Ve),o(Ve,`data-rue-scope-1kl3adz`,``),t(()=>{h(Ve,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Ve,s(`左侧大卡片、三个数字块和上方 radius 预览块都绑定了同一个 radius CSS 变量。`));let B=f(`article`,L);e(L,B),d(B,`scoped-style-watch-card`),o(B,`data-rue-scope-1kl3adz`,``),t(()=>{h(B,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let He=f(`span`,B);e(B,He),o(He,`data-rue-scope-1kl3adz`,``),t(()=>{h(He,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(He,s(`3`));let Ue=f(`strong`,B);e(B,Ue),o(Ue,`data-rue-scope-1kl3adz`,``),t(()=>{h(Ue,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Ue,s(`最后看右侧对照`));let V=f(`p`,B);e(B,V),o(V,`data-rue-scope-1kl3adz`,``),t(()=>{h(V,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(V,s(`右侧同名 class 不吃 scoped 选择器；只有橙色`));let We=f(`code`,V);e(V,We),o(We,`data-rue-scope-1kl3adz`,``),t(()=>{h(We,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Ge=i(We);e(We,Ge),a(Ge,`<style>`);let Ke=i(V);e(V,Ke),a(Ke,` `),e(V,s(`全局样式会命中。`));let H=f(`div`,x);e(x,H),d(H,`scoped-style-grid`),o(H,`data-rue-scope-1kl3adz`,``),t(()=>{h(H,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let U=f(`section`,H);e(H,U),t(()=>{d(U,`scoped-style-panel scoped-style-global-target ${te.value?`is-raised`:``}`)}),o(U,`aria-label`,`当前组件样式卡片`),o(U,`data-rue-scope-1kl3adz`,``),t(()=>{h(U,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let qe=f(`div`,U);e(U,qe),d(qe,`scoped-style-kicker`),o(qe,`data-rue-scope-1kl3adz`,``),t(()=>{h(qe,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(qe,s(`current component`));let Je=f(`h2`,U);e(U,Je),o(Je,`data-rue-scope-1kl3adz`,``),t(()=>{h(Je,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Je,s(`当前组件内生效`));let Ye=f(`p`,U);e(U,Ye),o(Ye,`data-rue-scope-1kl3adz`,``),t(()=>{h(Ye,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Ye,s(`编译器会给这些 DOM 加上同一个 data-rue-scope-* 属性，并改写选择器。`));let W=f(`div`,U);e(U,W),d(W,`scoped-style-metrics`),o(W,`data-rue-scope-1kl3adz`,``),t(()=>{h(W,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let G=f(`div`,W);e(W,G),d(G,`scoped-style-metric`),o(G,`data-rue-scope-1kl3adz`,``),t(()=>{h(G,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Xe=f(`strong`,G);e(G,Xe),o(Xe,`data-rue-scope-1kl3adz`,``),t(()=>{h(Xe,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Xe,s(`1`));let Ze=f(`span`,G);e(G,Ze),o(Ze,`data-rue-scope-1kl3adz`,``),t(()=>{h(Ze,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Ze,s(`scope id`));let K=f(`div`,W);e(W,K),d(K,`scoped-style-metric`),o(K,`data-rue-scope-1kl3adz`,``),t(()=>{h(K,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Qe=f(`strong`,K);e(K,Qe),o(Qe,`data-rue-scope-1kl3adz`,``),t(()=>{h(Qe,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(Qe,s(`0`));let $e=f(`span`,K);e(K,$e),o($e,`data-rue-scope-1kl3adz`,``),t(()=>{h($e,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e($e,s(`global leak`));let q=f(`div`,W);e(W,q),d(q,`scoped-style-metric`),o(q,`data-rue-scope-1kl3adz`,``),t(()=>{h(q,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let et=f(`strong`,q);e(q,et),o(et,`data-rue-scope-1kl3adz`,``),t(()=>{h(et,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(et,s(`v-bind`));let tt=f(`span`,q);e(q,tt),o(tt,`data-rue-scope-1kl3adz`,``),t(()=>{h(tt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(tt,s(`css vars`));let nt=m(`rue:component:anchor`);e(U,nt),l(p(ne,{}),U,nt);let rt=m(`rue:component:anchor`);e(U,rt),l(p(re,{}),U,rt);let it=f(`span`,U);e(U,it),d(it,`scoped-style-slot-pill`),o(it,`data-rue-scope-1kl3adz`,``),t(()=>{h(it,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(it,s(`:slotted target`));let at=f(`span`,U);e(U,at),d(at,`scoped-style-slot-pill is-hot`),o(at,`data-rue-scope-1kl3adz`,``),t(()=>{h(at,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(at,s(`:slotted + v-bind`));let ot=m(`rue:component:anchor`);e(H,ot),l(p(ie,{}),H,ot);let J=f(`section`,x);e(x,J),d(J,`scoped-style-lab-grid`),o(J,`aria-label`,`scoped selector lab`),o(J,`data-rue-scope-1kl3adz`,``),t(()=>{h(J,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let Y=f(`article`,J);e(J,Y),d(Y,`scoped-style-lab-card`),o(Y,`data-rue-scope-1kl3adz`,``),t(()=>{h(Y,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let st=f(`span`,Y);e(Y,st),d(st,`scoped-style-lab-badge`),o(st,`data-rue-scope-1kl3adz`,``),t(()=>{h(st,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(st,s(`normal`));let ct=f(`strong`,Y);e(Y,ct),o(ct,`data-rue-scope-1kl3adz`,``),t(()=>{h(ct,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(ct,s(`当前组件 DOM`));let lt=f(`p`,Y);e(Y,lt),o(lt,`data-rue-scope-1kl3adz`,``),t(()=>{h(lt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(lt,s(`普通选择器会被追加 data-rue-scope-*，只命中本组件生成的元素。`));let X=f(`article`,J);e(J,X),d(X,`scoped-style-lab-card`),o(X,`data-rue-scope-1kl3adz`,``),t(()=>{h(X,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let ut=f(`span`,X);e(X,ut),d(ut,`scoped-style-lab-badge`),o(ut,`data-rue-scope-1kl3adz`,``),t(()=>{h(ut,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(ut,s(`:deep()`));let dt=f(`strong`,X);e(X,dt),o(dt,`data-rue-scope-1kl3adz`,``),t(()=>{h(dt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(dt,s(`子组件内部 DOM`));let ft=f(`p`,X);e(X,ft),o(ft,`data-rue-scope-1kl3adz`,``),t(()=>{h(ft,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(ft,s(`父组件可以显式穿透到 DeepWidget 的内部 class。`));let Z=f(`article`,J);e(J,Z),d(Z,`scoped-style-lab-card scoped-style-global-target`),o(Z,`data-rue-scope-1kl3adz`,``),t(()=>{h(Z,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let pt=f(`span`,Z);e(Z,pt),d(pt,`scoped-style-lab-badge`),o(pt,`data-rue-scope-1kl3adz`,``),t(()=>{h(pt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(pt,s(`plain style`));let mt=f(`strong`,Z);e(Z,mt),o(mt,`data-rue-scope-1kl3adz`,``),t(()=>{h(mt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(mt,s(`普通 <style>`));let ht=f(`p`,Z);e(Z,ht),o(ht,`data-rue-scope-1kl3adz`,``),t(()=>{h(ht,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(ht,s(`这个橙色内描边没有 scope 限制，会命中所有同名 class。`));let Q=f(`article`,J);e(J,Q),d(Q,`scoped-style-lab-card scoped-style-plain-alert`),o(Q,`data-rue-scope-1kl3adz`,``),t(()=>{h(Q,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let gt=f(`span`,Q);e(Q,gt),d(gt,`scoped-style-lab-badge`),o(gt,`data-rue-scope-1kl3adz`,``),t(()=>{h(gt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(gt,s(`:global()`));let _t=f(`strong`,Q);e(Q,_t),d(_t,`scoped-style-global-badge`),o(_t,`data-rue-scope-1kl3adz`,``),t(()=>{h(_t,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(_t,s(`保留全局选择器`));let vt=f(`p`,Q);e(Q,vt),o(vt,`data-rue-scope-1kl3adz`,``),t(()=>{h(vt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(vt,s(`用于少量确实需要外溢的样式，仍可读取 v-bind CSS 变量。`));let $=f(`p`,x);e(x,$),d($,`scoped-style-global-note text-sm`),o($,`data-rue-scope-1kl3adz`,``),t(()=>{h($,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let yt=f(`strong`,$);e($,yt),o(yt,`data-rue-scope-1kl3adz`,``),t(()=>{h(yt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})}),e(yt,s(`:global()`)),e($,s(`会保留全局选择器；右侧子组件和选择器矩阵里的橙色描边来自普通`));let bt=i($);e($,bt),a(bt,` `);let xt=f(`code`,$);e($,xt),o(xt,`data-rue-scope-1kl3adz`,``),t(()=>{h(xt,{"--rue-v-bind-1kl3adz-aj1e7s":v.value,"--rue-v-bind-1kl3adz-180hqf0":y.value,"--rue-v-bind-1kl3adz-jcvaj4":b.value})});let St=i(xt);return e(xt,St),a(St,`<style>`),e($,s(`，说明非 scoped 样式仍会全局命中同名 class。`)),c})},S=()=>{let{activeTab:i}=_(`useSetup:0:0:dup1`,()=>u(()=>({activeTab:_(`ref:1:4`,()=>n(`preview`))})));return c(n=>{let a=ee(),u=m(`rue:component:anchor`);return e(a,u),l(p(y,{children:c(()=>{let n=ee(),a=f(`h1`,n);e(n,a),d(a,`mb-4 text-5xl font-semibold md:mb-4`),e(a,s(`Scoped Style 组件作用域样式`));let u=f(`div`,n);e(n,u),o(u,`role`,`tablist`),d(u,`tabs tabs-box`);let h=f(`button`,u);e(u,h),o(h,`role`,`tab`),t(()=>{d(h,`tab ${i.value===`preview`?`tab-active`:``}`)}),r(h,`click`,()=>{i.value=`preview`}),e(h,s(`效果`));let g=f(`button`,u);e(u,g),o(g,`role`,`tab`),t(()=>{d(g,`tab ${i.value===`code`?`tab-active`:``}`)}),r(g,`click`,()=>{i.value=`code`}),e(g,s(`代码`));let _=f(`div`,n);e(n,_),d(_,`mt-4 grid items-start gap-6 md:grid-cols-1`);let y=m(`rue:slot:anchor`);e(_,y),t(()=>{let t=i.value===`preview`?c(()=>{let t=ee(),n=f(`div`,t);e(t,n),d(n,`card bg-base-100 shadow`);let r=f(`div`,n);e(n,r),d(r,`card-body`);let i=m(`rue:component:anchor`);return e(r,i),l(p(ae,{}),r,i),t}):``;te(()=>l(t,_,y))}),e(_,s(` `));let ne=m(`rue:slot:anchor`);return e(_,ne),t(()=>{let n=i.value===`code`?c(()=>{let n=ee(),r=f(`div`,n);e(n,r),d(r,`card overflow-auto bg-base-100 shadow`);let i=f(`div`,r);e(r,i),d(i,`card-body p-0`);let a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:b,title:`Scoped style TSX`});te(()=>l(e,i,a))}),n}):``;te(()=>l(n,_,ne))}),n})}),a,u),a})};export{S as default};