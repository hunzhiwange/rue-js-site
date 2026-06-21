import{$t as e,Jt as t,Q as n,Z as r,_t as i,dt as a,et as o,gt as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as ee,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./Code-4SUSUwRg.js";import{r as b}from"./SidebarPlaygroundExample-BEWYUWOl.js";var te=()=>u(e=>{let t=f(`span`,e);return a(t,`scoped-style-chip`),n(t,m(`子组件内容：通过 :deep() 命中`)),t}),ne=()=>u(e=>{let t=f(`div`,e);a(t,`scoped-style-deep-widget`);let r=f(`div`,t);n(t,r),a(r,`scoped-style-deep-widget-head`);let i=f(`span`,r);n(r,i),n(i,m(`Deep child widget`));let o=f(`strong`,r);n(r,o),n(o,m(`78%`));let c=f(`div`,t);n(t,c),a(c,`scoped-style-deep-bars`),d(c,`aria-hidden`,`true`);let l=f(`span`,c);n(c,l),s(l,{width:`78%`});let u=f(`span`,c);n(c,u),s(u,{width:`54%`});let p=f(`span`,c);n(c,p),s(p,{width:`92%`});let h=f(`p`,t);return n(t,h),n(h,m(`这个组件内部的 class 由父组件的 :deep() 接管。`)),t}),re=()=>u(e=>{let t=f(`section`,e);a(t,`scoped-style-panel scoped-style-global-target rounded-box border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`);let r=f(`div`,t);n(t,r),a(r,`inline-flex rounded-full border border-base-300 px-2 py-1 text-xs font-semibold uppercase`),n(r,m(`child component`));let i=f(`h2`,t);n(t,i),a(i,`mt-3 text-xl font-semibold`),n(i,m(`同名 class，不会被父组件 scoped CSS 命中`));let o=f(`p`,t);return n(t,o),a(o,`mt-2 text-sm opacity-70`),n(o,m(`这个组件也使用 scoped-style-panel；父组件的 scoped 选择器不会穿透到这里，但普通 <style> 会继续全局生效。`)),t}),x=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,S=[`#2563eb`,`#16a34a`,`#dc2626`,`#7c3aed`],ie=()=>{let{raised:e,accent:y,radius:b,gap:x,nextAccent:ie}=v(`useSetup:0:0`,()=>c(()=>{let e=v(`ref:1:0`,()=>t(!0)),n=v(`ref:1:1`,()=>t(`#2563eb`));return{raised:e,accent:n,radius:v(`ref:1:2`,()=>t(`1rem`)),gap:v(`ref:1:3`,()=>t(`0.75rem`)),nextAccent:()=>{n.value=S[(S.indexOf(n.value)+1)%S.length]}}}));return u(t=>{let c=ee(),u=f(`style`,c);n(c,u),g(u,`
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
      `);let v=f(`style`,c);n(c,v),_(()=>{g(v,`
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
      `)});let S=f(`div`,c);n(c,S),a(S,`scoped-style-shell`),d(S,`data-rue-scope-1kl3adz`,``),_(()=>{s(S,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let C=f(`section`,S);n(S,C),a(C,`scoped-style-hero`),d(C,`data-rue-scope-1kl3adz`,``),_(()=>{s(C,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let ae=f(`h2`,C);n(C,ae),d(ae,`data-rue-scope-1kl3adz`,``),_(()=>{s(ae,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ae,m(`Scoped Style`));let w=f(`p`,C);n(C,w),d(w,`data-rue-scope-1kl3adz`,``),_(()=>{s(w,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(w,m(`在 JSX 组件里写`));let oe=f(`code`,w);n(w,oe),d(oe,`data-rue-scope-1kl3adz`,``),_(()=>{s(oe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let se=l(oe);n(oe,se),g(se,`<style scoped>`),n(w,m(`，CSS 会只命中当前组件生成的 DOM；现在也支持`));let ce=f(`code`,w);n(w,ce),d(ce,`data-rue-scope-1kl3adz`,``),_(()=>{s(ce,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ce,m(`:deep()`)),n(w,m(`、`));let le=f(`code`,w);n(w,le),d(le,`data-rue-scope-1kl3adz`,``),_(()=>{s(le,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(le,m(`:slotted()`)),n(w,m(`、`));let ue=f(`code`,w);n(w,ue),d(ue,`data-rue-scope-1kl3adz`,``),_(()=>{s(ue,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ue,m(`:global()`)),n(w,m(`和`));let de=l(w);n(w,de),g(de,` `);let fe=f(`code`,w);n(w,fe),d(fe,`data-rue-scope-1kl3adz`,``),_(()=>{s(fe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(fe,m(`v-bind()`)),n(w,m(`。普通`));let pe=f(`code`,w);n(w,pe),d(pe,`data-rue-scope-1kl3adz`,``),_(()=>{s(pe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let me=l(pe);n(pe,me),g(me,`<style>`),n(w,m(`仍保持全局。`));let T=f(`div`,C);n(C,T),a(T,`scoped-style-controls`),d(T,`data-rue-scope-1kl3adz`,``),_(()=>{s(T,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let he=f(`button`,T);n(T,he),a(he,`btn btn-sm btn-primary`),r(he,`click`,()=>{e.value=!e.value}),d(he,`data-rue-scope-1kl3adz`,``),_(()=>{s(he,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(he,m(`切换当前卡片`));let ge=f(`button`,T);n(T,ge),a(ge,`btn btn-sm scoped-style-accent-button`),r(ge,`click`,ie),d(ge,`data-rue-scope-1kl3adz`,``),_(()=>{s(ge,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ge,m(`换颜色`));let E=f(`label`,T);n(T,E),a(E,`scoped-style-control`),d(E,`data-rue-scope-1kl3adz`,``),_(()=>{s(E,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let _e=f(`span`,E);n(E,_e),d(_e,`data-rue-scope-1kl3adz`,``),_(()=>{s(_e,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(_e,m(`v-bind color`));let ve=f(`input`,E);n(E,ve),d(ve,`type`,`color`),_(()=>{i(ve,y.value)}),r(ve,`input`,e=>{y.value=e.target.value}),d(ve,`data-rue-scope-1kl3adz`,``),_(()=>{s(ve,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let D=f(`label`,T);n(T,D),a(D,`scoped-style-control`),d(D,`data-rue-scope-1kl3adz`,``),_(()=>{s(D,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let ye=f(`span`,D);n(D,ye),d(ye,`data-rue-scope-1kl3adz`,``),_(()=>{s(ye,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ye,m(`v-bind radius`));let O=f(`input`,D);n(D,O),d(O,`type`,`range`),d(O,`min`,`0.5`),d(O,`max`,`2.25`),d(O,`step`,`0.05`),_(()=>{i(O,String(parseFloat(b.value)))}),r(O,`input`,e=>{b.value=`${e.target.value}rem`}),d(O,`data-rue-scope-1kl3adz`,``),_(()=>{s(O,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let k=f(`label`,T);n(T,k),a(k,`scoped-style-control`),d(k,`data-rue-scope-1kl3adz`,``),_(()=>{s(k,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let be=f(`span`,k);n(k,be),d(be,`data-rue-scope-1kl3adz`,``),_(()=>{s(be,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(be,m(`v-bind gap`));let A=f(`input`,k);n(k,A),d(A,`type`,`range`),d(A,`min`,`0.35`),d(A,`max`,`1.35`),d(A,`step`,`0.05`),_(()=>{i(A,String(parseFloat(x.value)))}),r(A,`input`,e=>{x.value=`${e.target.value}rem`}),d(A,`data-rue-scope-1kl3adz`,``),_(()=>{s(A,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let j=f(`div`,C);n(C,j),a(j,`scoped-style-live-values`),d(j,`data-rue-scope-1kl3adz`,``),_(()=>{s(j,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let M=f(`p`,j);n(j,M),a(M,`scoped-style-current-color`),d(M,`data-rue-scope-1kl3adz`,``),_(()=>{s(M,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let xe=f(`span`,M);n(M,xe),a(xe,`scoped-style-swatch`),d(xe,`data-rue-scope-1kl3adz`,``),_(()=>{s(xe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(M,m(`当前 v-bind color：`));let Se=f(`strong`,M);n(M,Se),d(Se,`data-rue-scope-1kl3adz`,``),_(()=>{s(Se,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Ce=l(Se);n(Se,Ce),_(()=>{g(Ce,y.value)});let N=f(`p`,j);n(j,N),a(N,`scoped-style-radius-preview`),d(N,`data-rue-scope-1kl3adz`,``),_(()=>{s(N,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let we=f(`span`,N);n(N,we),d(we,`data-rue-scope-1kl3adz`,``),_(()=>{s(we,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(we,m(`当前 v-bind radius`));let Te=f(`strong`,N);n(N,Te),d(Te,`data-rue-scope-1kl3adz`,``),_(()=>{s(Te,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Ee=l(Te);n(Te,Ee),_(()=>{g(Ee,b.value)});let P=f(`div`,C);n(C,P),a(P,`scoped-style-color-stage`),d(P,`data-rue-scope-1kl3adz`,``),_(()=>{s(P,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let De=f(`div`,P);n(P,De),d(De,`data-rue-scope-1kl3adz`,``),_(()=>{s(De,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Oe=f(`span`,De);n(De,Oe),d(Oe,`data-rue-scope-1kl3adz`,``),_(()=>{s(Oe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Oe,m(`live v-bind color`));let ke=f(`strong`,De);n(De,ke),d(ke,`data-rue-scope-1kl3adz`,``),_(()=>{s(ke,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Ae=l(ke);n(ke,Ae),_(()=>{g(Ae,y.value)});let je=f(`button`,P);n(P,je),a(je,`btn btn-sm`),r(je,`click`,ie),d(je,`data-rue-scope-1kl3adz`,``),_(()=>{s(je,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(je,m(`下一种颜色`));let F=f(`section`,C);n(C,F),a(F,`scoped-style-explain`),d(F,`aria-label`,`颜色效果说明`),d(F,`data-rue-scope-1kl3adz`,``),_(()=>{s(F,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let I=f(`div`,F);n(F,I),a(I,`scoped-style-explain-head`),d(I,`data-rue-scope-1kl3adz`,``),_(()=>{s(I,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Me=f(`strong`,I);n(I,Me),d(Me,`data-rue-scope-1kl3adz`,``),_(()=>{s(Me,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Me,m(`颜色变化怎么看`));let Ne=f(`code`,I);n(I,Ne),d(Ne,`data-rue-scope-1kl3adz`,``),_(()=>{s(Ne,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Pe=l(Ne);n(Ne,Pe),_(()=>{g(Pe,`accent.value = ${y.value}`)});let L=f(`div`,F);n(F,L),a(L,`scoped-style-watch-grid`),d(L,`data-rue-scope-1kl3adz`,``),_(()=>{s(L,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let R=f(`article`,L);n(L,R),a(R,`scoped-style-watch-card`),d(R,`data-rue-scope-1kl3adz`,``),_(()=>{s(R,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Fe=f(`span`,R);n(R,Fe),d(Fe,`data-rue-scope-1kl3adz`,``),_(()=>{s(Fe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Fe,m(`1`));let Ie=f(`strong`,R);n(R,Ie),d(Ie,`data-rue-scope-1kl3adz`,``),_(()=>{s(Ie,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Ie,m(`先看上面的大色块`));let Le=f(`p`,R);n(R,Le),d(Le,`data-rue-scope-1kl3adz`,``),_(()=>{s(Le,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Le,m(`它的背景直接写的是`));let Re=f(`code`,Le);n(Le,Re),d(Re,`data-rue-scope-1kl3adz`,``),_(()=>{s(Re,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Re,m(`v-bind(accent.value)`)),n(Le,m(`；点按钮后这里应该整块换色。`));let z=f(`article`,L);n(L,z),a(z,`scoped-style-watch-card`),d(z,`data-rue-scope-1kl3adz`,``),_(()=>{s(z,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let ze=f(`span`,z);n(z,ze),d(ze,`data-rue-scope-1kl3adz`,``),_(()=>{s(ze,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ze,m(`2`));let Be=f(`strong`,z);n(z,Be),d(Be,`data-rue-scope-1kl3adz`,``),_(()=>{s(Be,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Be,m(`拖 radius 看圆角`));let Ve=f(`p`,z);n(z,Ve),d(Ve,`data-rue-scope-1kl3adz`,``),_(()=>{s(Ve,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Ve,m(`左侧大卡片、三个数字块和上方 radius 预览块都绑定了同一个 radius CSS 变量。`));let B=f(`article`,L);n(L,B),a(B,`scoped-style-watch-card`),d(B,`data-rue-scope-1kl3adz`,``),_(()=>{s(B,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let He=f(`span`,B);n(B,He),d(He,`data-rue-scope-1kl3adz`,``),_(()=>{s(He,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(He,m(`3`));let Ue=f(`strong`,B);n(B,Ue),d(Ue,`data-rue-scope-1kl3adz`,``),_(()=>{s(Ue,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Ue,m(`最后看右侧对照`));let V=f(`p`,B);n(B,V),d(V,`data-rue-scope-1kl3adz`,``),_(()=>{s(V,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(V,m(`右侧同名 class 不吃 scoped 选择器；只有橙色`));let We=f(`code`,V);n(V,We),d(We,`data-rue-scope-1kl3adz`,``),_(()=>{s(We,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Ge=l(We);n(We,Ge),g(Ge,`<style>`);let Ke=l(V);n(V,Ke),g(Ke,` `),n(V,m(`全局样式会命中。`));let H=f(`div`,S);n(S,H),a(H,`scoped-style-grid`),d(H,`data-rue-scope-1kl3adz`,``),_(()=>{s(H,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let U=f(`section`,H);n(H,U),_(()=>{a(U,`scoped-style-panel scoped-style-global-target ${e.value?`is-raised`:``}`)}),d(U,`aria-label`,`当前组件样式卡片`),d(U,`data-rue-scope-1kl3adz`,``),_(()=>{s(U,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let qe=f(`div`,U);n(U,qe),a(qe,`scoped-style-kicker`),d(qe,`data-rue-scope-1kl3adz`,``),_(()=>{s(qe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(qe,m(`current component`));let Je=f(`h2`,U);n(U,Je),d(Je,`data-rue-scope-1kl3adz`,``),_(()=>{s(Je,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Je,m(`当前组件内生效`));let Ye=f(`p`,U);n(U,Ye),d(Ye,`data-rue-scope-1kl3adz`,``),_(()=>{s(Ye,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Ye,m(`编译器会给这些 DOM 加上同一个 data-rue-scope-* 属性，并改写选择器。`));let W=f(`div`,U);n(U,W),a(W,`scoped-style-metrics`),d(W,`data-rue-scope-1kl3adz`,``),_(()=>{s(W,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let G=f(`div`,W);n(W,G),a(G,`scoped-style-metric`),d(G,`data-rue-scope-1kl3adz`,``),_(()=>{s(G,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Xe=f(`strong`,G);n(G,Xe),d(Xe,`data-rue-scope-1kl3adz`,``),_(()=>{s(Xe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Xe,m(`1`));let Ze=f(`span`,G);n(G,Ze),d(Ze,`data-rue-scope-1kl3adz`,``),_(()=>{s(Ze,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Ze,m(`scope id`));let K=f(`div`,W);n(W,K),a(K,`scoped-style-metric`),d(K,`data-rue-scope-1kl3adz`,``),_(()=>{s(K,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Qe=f(`strong`,K);n(K,Qe),d(Qe,`data-rue-scope-1kl3adz`,``),_(()=>{s(Qe,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(Qe,m(`0`));let $e=f(`span`,K);n(K,$e),d($e,`data-rue-scope-1kl3adz`,``),_(()=>{s($e,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n($e,m(`global leak`));let q=f(`div`,W);n(W,q),a(q,`scoped-style-metric`),d(q,`data-rue-scope-1kl3adz`,``),_(()=>{s(q,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let et=f(`strong`,q);n(q,et),d(et,`data-rue-scope-1kl3adz`,``),_(()=>{s(et,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(et,m(`v-bind`));let tt=f(`span`,q);n(q,tt),d(tt,`data-rue-scope-1kl3adz`,``),_(()=>{s(tt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(tt,m(`css vars`));let nt=o(`rue:component:anchor`);n(U,nt),p(h(te,{}),U,nt);let rt=o(`rue:component:anchor`);n(U,rt),p(h(ne,{}),U,rt);let it=f(`span`,U);n(U,it),a(it,`scoped-style-slot-pill`),d(it,`data-rue-scope-1kl3adz`,``),_(()=>{s(it,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(it,m(`:slotted target`));let at=f(`span`,U);n(U,at),a(at,`scoped-style-slot-pill is-hot`),d(at,`data-rue-scope-1kl3adz`,``),_(()=>{s(at,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(at,m(`:slotted + v-bind`));let ot=o(`rue:component:anchor`);n(H,ot),p(h(re,{}),H,ot);let J=f(`section`,S);n(S,J),a(J,`scoped-style-lab-grid`),d(J,`aria-label`,`scoped selector lab`),d(J,`data-rue-scope-1kl3adz`,``),_(()=>{s(J,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let Y=f(`article`,J);n(J,Y),a(Y,`scoped-style-lab-card`),d(Y,`data-rue-scope-1kl3adz`,``),_(()=>{s(Y,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let st=f(`span`,Y);n(Y,st),a(st,`scoped-style-lab-badge`),d(st,`data-rue-scope-1kl3adz`,``),_(()=>{s(st,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(st,m(`normal`));let ct=f(`strong`,Y);n(Y,ct),d(ct,`data-rue-scope-1kl3adz`,``),_(()=>{s(ct,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ct,m(`当前组件 DOM`));let lt=f(`p`,Y);n(Y,lt),d(lt,`data-rue-scope-1kl3adz`,``),_(()=>{s(lt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(lt,m(`普通选择器会被追加 data-rue-scope-*，只命中本组件生成的元素。`));let X=f(`article`,J);n(J,X),a(X,`scoped-style-lab-card`),d(X,`data-rue-scope-1kl3adz`,``),_(()=>{s(X,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let ut=f(`span`,X);n(X,ut),a(ut,`scoped-style-lab-badge`),d(ut,`data-rue-scope-1kl3adz`,``),_(()=>{s(ut,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ut,m(`:deep()`));let dt=f(`strong`,X);n(X,dt),d(dt,`data-rue-scope-1kl3adz`,``),_(()=>{s(dt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(dt,m(`子组件内部 DOM`));let ft=f(`p`,X);n(X,ft),d(ft,`data-rue-scope-1kl3adz`,``),_(()=>{s(ft,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ft,m(`父组件可以显式穿透到 DeepWidget 的内部 class。`));let Z=f(`article`,J);n(J,Z),a(Z,`scoped-style-lab-card scoped-style-global-target`),d(Z,`data-rue-scope-1kl3adz`,``),_(()=>{s(Z,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let pt=f(`span`,Z);n(Z,pt),a(pt,`scoped-style-lab-badge`),d(pt,`data-rue-scope-1kl3adz`,``),_(()=>{s(pt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(pt,m(`plain style`));let mt=f(`strong`,Z);n(Z,mt),d(mt,`data-rue-scope-1kl3adz`,``),_(()=>{s(mt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(mt,m(`普通 <style>`));let ht=f(`p`,Z);n(Z,ht),d(ht,`data-rue-scope-1kl3adz`,``),_(()=>{s(ht,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(ht,m(`这个橙色内描边没有 scope 限制，会命中所有同名 class。`));let Q=f(`article`,J);n(J,Q),a(Q,`scoped-style-lab-card scoped-style-plain-alert`),d(Q,`data-rue-scope-1kl3adz`,``),_(()=>{s(Q,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let gt=f(`span`,Q);n(Q,gt),a(gt,`scoped-style-lab-badge`),d(gt,`data-rue-scope-1kl3adz`,``),_(()=>{s(gt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(gt,m(`:global()`));let _t=f(`strong`,Q);n(Q,_t),a(_t,`scoped-style-global-badge`),d(_t,`data-rue-scope-1kl3adz`,``),_(()=>{s(_t,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(_t,m(`保留全局选择器`));let vt=f(`p`,Q);n(Q,vt),d(vt,`data-rue-scope-1kl3adz`,``),_(()=>{s(vt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(vt,m(`用于少量确实需要外溢的样式，仍可读取 v-bind CSS 变量。`));let $=f(`p`,S);n(S,$),a($,`scoped-style-global-note text-sm`),d($,`data-rue-scope-1kl3adz`,``),_(()=>{s($,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let yt=f(`strong`,$);n($,yt),d(yt,`data-rue-scope-1kl3adz`,``),_(()=>{s(yt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})}),n(yt,m(`:global()`)),n($,m(`会保留全局选择器；右侧子组件和选择器矩阵里的橙色描边来自普通`));let bt=l($);n($,bt),g(bt,` `);let xt=f(`code`,$);n($,xt),d(xt,`data-rue-scope-1kl3adz`,``),_(()=>{s(xt,{"--rue-v-bind-1kl3adz-aj1e7s":y.value,"--rue-v-bind-1kl3adz-180hqf0":b.value,"--rue-v-bind-1kl3adz-jcvaj4":x.value})});let St=l(xt);return n(xt,St),g(St,`<style>`),n($,m(`，说明非 scoped 样式仍会全局命中同名 class。`)),c})},C=()=>{let{activeTab:i}=v(`useSetup:0:0:dup1`,()=>c(()=>({activeTab:v(`ref:1:4`,()=>t(`preview`))})));return u(t=>{let s=ee(),c=o(`rue:component:anchor`);return n(s,c),p(h(b,{children:u(()=>{let t=ee(),s=f(`h1`,t);n(t,s),a(s,`mb-4 text-5xl font-semibold md:mb-4`),n(s,m(`Scoped Style 组件作用域样式`));let c=f(`div`,t);n(t,c),d(c,`role`,`tablist`),a(c,`tabs tabs-box`);let l=f(`button`,c);n(c,l),d(l,`role`,`tab`),_(()=>{a(l,`tab ${i.value===`preview`?`tab-active`:``}`)}),r(l,`click`,()=>{i.value=`preview`}),n(l,m(`效果`));let g=f(`button`,c);n(c,g),d(g,`role`,`tab`),_(()=>{a(g,`tab ${i.value===`code`?`tab-active`:``}`)}),r(g,`click`,()=>{i.value=`code`}),n(g,m(`代码`));let v=f(`div`,t);n(t,v),a(v,`mt-4 grid items-start gap-6 md:grid-cols-1`);let b=o(`rue:slot:anchor`);n(v,b),_(()=>{let t=i.value===`preview`?u(()=>{let e=ee(),t=f(`div`,e);n(e,t),a(t,`card bg-base-100 shadow`);let r=f(`div`,t);n(t,r),a(r,`card-body`);let i=o(`rue:component:anchor`);return n(r,i),p(h(ie,{}),r,i),e}):``;e(()=>p(t,v,b))}),n(v,m(` `));let te=o(`rue:slot:anchor`);return n(v,te),_(()=>{let t=i.value===`code`?u(()=>{let t=ee(),r=f(`div`,t);n(t,r),a(r,`card overflow-auto bg-base-100 shadow`);let i=f(`div`,r);n(r,i),a(i,`card-body p-0`);let s=o(`rue:component:anchor`);return n(i,s),_(()=>{let t=h(y,{className:`h-full`,lang:`tsx`,code:x,title:`Scoped style TSX`});e(()=>p(t,i,s))}),t}):``;e(()=>p(t,v,te))}),t})}),s,c),s})};export{C as default};