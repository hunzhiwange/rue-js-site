import{At as e,Dt as t,E as n,Et as r,Ot as i,Q as a,Qt as o,Vt as s,_n as c,_t as l,ct as u,dt as d,et as f,gn as p,hn as m,kn as h,nt as g,pn as _,qt as v,rt as y,st as b,tn as x,ut as S,vn as C,vt as ee,wn as w,xt as T,yt as E}from"./rue-runtime-HIMg8Lz8.js";import{t as D}from"./Code-DpH7u0gk.js";import{r as O}from"./SidebarPlaygroundExample-BCPRe0hA.js";var k=C(`<div class="scoped-style-deep-widget"><div class="scoped-style-deep-widget-head"><span>Deep child widget</span><strong>78%</strong></div><div class="scoped-style-deep-bars" aria-hidden="true"><span></span><span></span><span></span></div><p>这个组件内部的 class 由父组件的 :deep() 接管。</p></div>`),te=C(`<div class="scoped-style-shell" data-rue-scope-1854ue2=""><section class="scoped-style-hero" data-rue-scope-1854ue2=""><h2 data-rue-scope-1854ue2="">Scoped Style</h2><p data-rue-scope-1854ue2="">在 JSX 组件里写 <code data-rue-scope-1854ue2="">&lt;style scoped&gt;</code>，CSS 会只命中当前组件生成的 DOM；现在也支持 <code data-rue-scope-1854ue2="">:deep()</code>、<code data-rue-scope-1854ue2="">:slotted()</code>、<code data-rue-scope-1854ue2="">:global()</code> 和 <code data-rue-scope-1854ue2="">v-bind()</code>。普通 <code data-rue-scope-1854ue2="">&lt;style&gt;</code> 仍保持全局。</p><div class="scoped-style-controls" data-rue-scope-1854ue2=""><button class="btn btn-sm btn-primary" data-rue-scope-1854ue2="">切换当前卡片</button><button class="btn btn-sm scoped-style-accent-button" data-rue-scope-1854ue2="">换颜色</button><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind color</span><input type="color" data-rue-scope-1854ue2=""></label><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind radius</span><input type="range" min="0.5" max="2.25" step="0.05" data-rue-scope-1854ue2=""></label><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind gap</span><input type="range" min="0.35" max="1.35" step="0.05" data-rue-scope-1854ue2=""></label></div><div class="scoped-style-live-values" data-rue-scope-1854ue2=""><p class="scoped-style-current-color" data-rue-scope-1854ue2=""><span class="scoped-style-swatch" data-rue-scope-1854ue2=""></span> 当前 v-bind color：<strong data-rue-scope-1854ue2=""><!--rue:text-hole:0--></strong></p><p class="scoped-style-radius-preview" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">当前 v-bind radius</span><strong data-rue-scope-1854ue2=""><!--rue:text-hole:1--></strong></p></div><div class="scoped-style-color-stage" data-rue-scope-1854ue2=""><div data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">live v-bind color</span><strong data-rue-scope-1854ue2=""><!--rue:text-hole:2--></strong></div><button class="btn btn-sm" data-rue-scope-1854ue2="">下一种颜色</button></div><section class="scoped-style-explain" aria-label="颜色效果说明" data-rue-scope-1854ue2=""><div class="scoped-style-explain-head" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">颜色变化怎么看</strong><code data-rue-scope-1854ue2=""><!--rue:text-hole:3--></code></div><div class="scoped-style-watch-grid" data-rue-scope-1854ue2=""><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">1</span><strong data-rue-scope-1854ue2="">先看上面的大色块</strong><p data-rue-scope-1854ue2="">它的背景直接写的是 <code data-rue-scope-1854ue2="">v-bind(accent.value)</code>；点按钮后这里应该整块换色。</p></article><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">2</span><strong data-rue-scope-1854ue2="">拖 radius 看圆角</strong><p data-rue-scope-1854ue2="">左侧大卡片、三个数字块和上方 radius 预览块都绑定了同一个 radius CSS 变量。</p></article><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">3</span><strong data-rue-scope-1854ue2="">最后看右侧对照</strong><p data-rue-scope-1854ue2="">右侧同名 class 不吃 scoped 选择器；只有橙色 <code data-rue-scope-1854ue2="">&lt;style&gt;</code> 全局样式会命中。</p></article></div></section></section><div class="scoped-style-grid" data-rue-scope-1854ue2=""><section aria-label="当前组件样式卡片" data-rue-scope-1854ue2=""><div class="scoped-style-kicker" data-rue-scope-1854ue2="">current component</div><h2 data-rue-scope-1854ue2="">当前组件内生效</h2><p data-rue-scope-1854ue2="">编译器会给这些 DOM 加上同一个 data-rue-scope-* 属性，并改写选择器。</p><div class="scoped-style-metrics" data-rue-scope-1854ue2=""><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">1</strong><span data-rue-scope-1854ue2="">scope id</span></div><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">0</strong><span data-rue-scope-1854ue2="">global leak</span></div><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">v-bind</strong><span data-rue-scope-1854ue2="">css vars</span></div></div><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><span class="scoped-style-slot-pill" data-rue-scope-1854ue2="">:slotted target</span><span class="scoped-style-slot-pill is-hot" data-rue-scope-1854ue2="">:slotted + v-bind</span></section><!--rue:opaque-hole:6--></div><section class="scoped-style-lab-grid" aria-label="scoped selector lab" data-rue-scope-1854ue2=""><article class="scoped-style-lab-card" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">normal</span><strong data-rue-scope-1854ue2="">当前组件 DOM</strong><p data-rue-scope-1854ue2="">普通选择器会被追加 data-rue-scope-*，只命中本组件生成的元素。</p></article><article class="scoped-style-lab-card" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">:deep()</span><strong data-rue-scope-1854ue2="">子组件内部 DOM</strong><p data-rue-scope-1854ue2="">父组件可以显式穿透到 DeepWidget 的内部 class。</p></article><article class="scoped-style-lab-card scoped-style-global-target" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">plain style</span><strong data-rue-scope-1854ue2="">普通 &lt;style&gt;</strong><p data-rue-scope-1854ue2="">这个橙色内描边没有 scope 限制，会命中所有同名 class。</p></article><article class="scoped-style-lab-card scoped-style-plain-alert" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">:global()</span><strong class="scoped-style-global-badge" data-rue-scope-1854ue2="">保留全局选择器</strong><p data-rue-scope-1854ue2="">用于少量确实需要外溢的样式，仍可读取 v-bind CSS 变量。</p></article></section><p class="scoped-style-global-note text-sm" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">:global()</strong> 会保留全局选择器；右侧子组件和选择器矩阵里的橙色描边来自普通 <code data-rue-scope-1854ue2="">&lt;style&gt;</code>，说明非 scoped 样式仍会全局命中同名 class。</p></div>`),A=C(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">Scoped Style 组件作用域样式</h1>`),j=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),M=C(`<div class="mt-4 grid items-start gap-6 md:grid-cols-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ne=()=>u(s(Object.assign(e=>{let t=p(`span`,e);return t.className=`scoped-style-chip`,_(t,c(`子组件内容：通过 :deep() 命中`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{})),re=()=>u(s(Object.assign(e=>{let t=k().content.cloneNode(!0).firstChild,n=t.childNodes[1].childNodes[0],r=t.childNodes[1].childNodes[1],i=t.childNodes[1].childNodes[2];return Object.assign(n.style,{width:`78%`}),Object.assign(r.style,{width:`54%`}),Object.assign(i.style,{width:`92%`}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{})),ie=()=>u(s(Object.assign(e=>{let t=p(`section`,e);t.className=`scoped-style-panel scoped-style-global-target rounded-box border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`;let n=p(`div`,t);_(t,n),n.className=`inline-flex rounded-full border border-base-300 px-2 py-1 text-xs font-semibold uppercase`,_(n,c(`child component`));let r=p(`h2`,t);_(t,r),r.className=`mt-3 text-xl font-semibold`,_(r,c(`同名 class，不会被父组件 scoped CSS 命中`));let i=p(`p`,t);return _(t,i),i.className=`mt-2 text-sm opacity-70`,_(i,c(`这个组件也使用 scoped-style-panel；父组件的 scoped 选择器不会穿透到这里，但普通 <style> 会继续全局生效。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{})),N=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,P=[`#2563eb`,`#16a34a`,`#dc2626`,`#7c3aed`],F=()=>{let n=x(!0),s=x(`#2563eb`),c=x(`1rem`),p=x(`0.75rem`),g=()=>{let e=P.indexOf(s.value);s.value=P[(e+1)%P.length]};return v(()=>u(e(()=>{let e=l();d(e,E(` `));let u=ee(`style`,e);d(e,u),i(u,`
        .scoped-style-shell[data-rue-scope-1854ue2] {
          display: grid;
          gap: 1rem;
        }

        .scoped-style-hero[data-rue-scope-1854ue2] {
          display: grid;
          gap: 0.75rem;
          padding: 1.25rem;
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 28%, transparent);
          border-radius: 8px;
          background:
            linear-gradient(135deg, color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 14%, transparent), transparent 44%),
            color-mix(in oklab, Canvas 92%, #f8fafc);
        }

        .scoped-style-hero h2[data-rue-scope-1854ue2] {
          margin: 0;
          font-size: clamp(1.75rem, 5vw, 3rem);
          line-height: 1.05;
        }

        .scoped-style-hero p[data-rue-scope-1854ue2],
        .scoped-style-panel p[data-rue-scope-1854ue2],
        .scoped-style-lab-card p[data-rue-scope-1854ue2] {
          margin: 0;
          color: color-mix(in oklab, currentColor 68%, transparent);
        }

        .scoped-style-grid[data-rue-scope-1854ue2] {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .scoped-style-controls[data-rue-scope-1854ue2] {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .scoped-style-accent-button[data-rue-scope-1854ue2] {
          border-color: var(--rue-v-bind-1854ue2-aj1e7s);
          background: var(--rue-v-bind-1854ue2-aj1e7s);
          color: white;
        }

        .scoped-style-control[data-rue-scope-1854ue2] {
          display: inline-grid;
          min-width: 10rem;
          gap: 0.35rem;
          padding: 0.65rem 0.75rem;
          border: 1px solid color-mix(in oklab, currentColor 14%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, Canvas 96%, transparent);
        }

        .scoped-style-control span[data-rue-scope-1854ue2] {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          opacity: 0.62;
        }

        .scoped-style-current-color[data-rue-scope-1854ue2] {
          display: inline-flex;
          width: max-content;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.65rem;
          border-radius: 999px;
          background: color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 12%, Canvas);
          font-size: 0.85rem;
        }

        .scoped-style-swatch[data-rue-scope-1854ue2] {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 999px;
          background: var(--rue-v-bind-1854ue2-aj1e7s);
          box-shadow: inset 0 0 0 1px color-mix(in oklab, black 20%, transparent);
        }

        .scoped-style-current-color strong[data-rue-scope-1854ue2] {
          color: var(--rue-v-bind-1854ue2-aj1e7s);
        }

        .scoped-style-live-values[data-rue-scope-1854ue2] {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .scoped-style-radius-preview[data-rue-scope-1854ue2] {
          display: inline-flex;
          min-width: 11rem;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.45rem 0.65rem;
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 42%, transparent);
          border-radius: var(--rue-v-bind-1854ue2-180hqf0);
          background: #ffffff;
          color: #0f172a;
          box-shadow: inset 0 0 0 0.25rem color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 12%, transparent);
          transition:
            border-radius 160ms ease,
            box-shadow 160ms ease;
        }

        .scoped-style-radius-preview span[data-rue-scope-1854ue2] {
          color: #475569;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .scoped-style-radius-preview strong[data-rue-scope-1854ue2] {
          color: var(--rue-v-bind-1854ue2-aj1e7s);
        }

        .scoped-style-color-stage[data-rue-scope-1854ue2] {
          display: grid;
          min-height: 8rem;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          background:
            radial-gradient(circle at 16% 18%, rgba(255, 255, 255, 0.28), transparent 28%),
            linear-gradient(135deg, var(--rue-v-bind-1854ue2-aj1e7s) 0%, color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 72%, #111827) 54%, #111827 100%);
          color: white;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.24),
            0 20px 45px color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 34%, transparent);
          transition:
            background 160ms ease,
            box-shadow 160ms ease;
        }

        .scoped-style-color-stage span[data-rue-scope-1854ue2] {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          opacity: 0.78;
        }

        .scoped-style-color-stage strong[data-rue-scope-1854ue2] {
          display: block;
          margin-top: 0.25rem;
          color: white;
          font-size: clamp(2rem, 7vw, 4.25rem);
          line-height: 1;
        }

        .scoped-style-color-stage button[data-rue-scope-1854ue2] {
          border: 1px solid rgba(255, 255, 255, 0.38);
          background: rgba(255, 255, 255, 0.16);
          color: white;
        }

        .scoped-style-color-stage button[data-rue-scope-1854ue2]:hover {
          background: rgba(255, 255, 255, 0.24);
        }

        .scoped-style-explain[data-rue-scope-1854ue2] {
          display: grid;
          gap: 0.85rem;
          padding: 1rem;
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 34%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 7%, Canvas);
        }

        .scoped-style-explain-head[data-rue-scope-1854ue2] {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .scoped-style-explain-head strong[data-rue-scope-1854ue2] {
          color: var(--rue-v-bind-1854ue2-aj1e7s);
          font-size: 1.05rem;
        }

        .scoped-style-explain-head code[data-rue-scope-1854ue2] {
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
          background: var(--rue-v-bind-1854ue2-aj1e7s);
          color: white;
          font-size: 0.8rem;
        }

        .scoped-style-watch-grid[data-rue-scope-1854ue2] {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .scoped-style-watch-card[data-rue-scope-1854ue2] {
          display: grid;
          gap: 0.45rem;
          padding: 0.85rem;
          border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, Canvas 96%, transparent);
        }

        .scoped-style-watch-card span[data-rue-scope-1854ue2] {
          display: inline-grid;
          width: 1.65rem;
          height: 1.65rem;
          place-items: center;
          border-radius: 999px;
          background: var(--rue-v-bind-1854ue2-aj1e7s);
          color: white;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .scoped-style-watch-card strong[data-rue-scope-1854ue2] {
          color: var(--rue-v-bind-1854ue2-aj1e7s);
        }

        .scoped-style-watch-card p[data-rue-scope-1854ue2] {
          margin: 0;
          color: color-mix(in oklab, currentColor 70%, transparent);
          font-size: 0.88rem;
        }

        .scoped-style-panel[data-rue-scope-1854ue2] {
          position: relative;
          min-height: 14rem;
          overflow: hidden;
          padding: 1rem;
          border: 2px solid color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 58%, #ffffff);
          border-radius: var(--rue-v-bind-1854ue2-180hqf0);
          background:
            linear-gradient(180deg, color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 14%, #ffffff), #f8fbff),
            #ffffff;
          color: #0f172a;
          transition:
            border-color 160ms ease,
            border-radius 160ms ease,
            box-shadow 160ms ease,
            transform 160ms ease;
        }

        .scoped-style-panel[data-rue-scope-1854ue2]::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 0.35rem;
          background: linear-gradient(90deg, var(--rue-v-bind-1854ue2-aj1e7s), #f59e0b);
        }

        .scoped-style-panel.is-raised[data-rue-scope-1854ue2] {
          box-shadow:
            0 18px 45px color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 24%, transparent),
            0 0 0 1px rgba(15, 23, 42, 0.05);
          transform: translateY(-2px);
        }

        .scoped-style-kicker[data-rue-scope-1854ue2] {
          width: max-content;
          margin-bottom: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: 999px;
          background: var(--rue-v-bind-1854ue2-aj1e7s);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .scoped-style-metrics[data-rue-scope-1854ue2] {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .scoped-style-metric[data-rue-scope-1854ue2] {
          padding: 0.75rem;
          border-radius: var(--rue-v-bind-1854ue2-180hqf0);
          background: #ffffff;
          color: #0f172a;
          box-shadow:
            inset 0 0 0 1px color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 18%, transparent),
            0 8px 20px rgba(15, 23, 42, 0.08);
          transition: border-radius 160ms ease;
        }

        .scoped-style-metric strong[data-rue-scope-1854ue2] {
          display: block;
          color: #0f172a;
          font-size: 1.25rem;
        }

        .scoped-style-metric span[data-rue-scope-1854ue2] {
          color: #475569;
          font-weight: 600;
        }

        .scoped-style-panel[data-rue-scope-1854ue2] .scoped-style-chip {
          display: inline-flex;
          margin-top: 1rem;
          padding: 0.35rem 0.6rem;
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 42%, transparent);
          border-radius: 999px;
          color: var(--rue-v-bind-1854ue2-aj1e7s);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .scoped-style-panel[data-rue-scope-1854ue2] .scoped-style-deep-widget {
          display: grid;
          gap: var(--rue-v-bind-1854ue2-jcvaj4);
          margin-top: 1rem;
          padding: var(--rue-v-bind-1854ue2-jcvaj4);
          border: 1px solid color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 38%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 8%, Canvas);
        }

        .scoped-style-panel[data-rue-scope-1854ue2] .scoped-style-deep-widget-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          font-size: 0.9rem;
        }

        .scoped-style-panel[data-rue-scope-1854ue2] .scoped-style-deep-widget-head strong {
          color: var(--rue-v-bind-1854ue2-aj1e7s);
          font-size: 1.1rem;
        }

        .scoped-style-panel[data-rue-scope-1854ue2] .scoped-style-deep-bars {
          display: grid;
          gap: 0.35rem;
        }

        .scoped-style-panel[data-rue-scope-1854ue2] .scoped-style-deep-bars span {
          display: block;
          height: 0.45rem;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--rue-v-bind-1854ue2-aj1e7s), #f59e0b);
        }

        [data-rue-scope-1854ue2] .scoped-style-slot-pill {
          display: inline-flex;
          margin-top: 0.75rem;
          margin-right: 0.5rem;
          padding: 0.28rem 0.55rem;
          border-radius: 999px;
          outline: 1px solid color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 54%, transparent);
          outline-offset: 2px;
          font-size: 0.78rem;
        }

        [data-rue-scope-1854ue2] .scoped-style-slot-pill.is-hot {
          background: color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 18%, Canvas);
          color: var(--rue-v-bind-1854ue2-aj1e7s);
          font-weight: 700;
        }

        .scoped-style-lab-grid[data-rue-scope-1854ue2] {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .scoped-style-lab-card[data-rue-scope-1854ue2] {
          display: grid;
          min-height: 8.5rem;
          gap: 0.5rem;
          align-content: start;
          padding: var(--rue-v-bind-1854ue2-jcvaj4);
          border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
          border-radius: 8px;
          background: color-mix(in oklab, Canvas 96%, #f8fafc);
        }

        .scoped-style-lab-card strong[data-rue-scope-1854ue2] {
          color: var(--rue-v-bind-1854ue2-aj1e7s);
        }

        .scoped-style-lab-badge[data-rue-scope-1854ue2] {
          width: max-content;
          padding: 0.2rem 0.5rem;
          border-radius: 999px;
          background: color-mix(in oklab, var(--rue-v-bind-1854ue2-aj1e7s) 12%, Canvas);
          color: var(--rue-v-bind-1854ue2-aj1e7s);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .scoped-style-global-note strong,
        .scoped-style-global-badge {
          color: var(--rue-v-bind-1854ue2-aj1e7s);
          font-weight: 800;
        }

        @media (max-width: 1024px) {
          .scoped-style-lab-grid[data-rue-scope-1854ue2] {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .scoped-style-grid[data-rue-scope-1854ue2],
          .scoped-style-metrics[data-rue-scope-1854ue2],
          .scoped-style-lab-grid[data-rue-scope-1854ue2] {
            grid-template-columns: 1fr;
          }

          .scoped-style-color-stage[data-rue-scope-1854ue2] {
            grid-template-columns: 1fr;
          }

          .scoped-style-watch-grid[data-rue-scope-1854ue2] {
            grid-template-columns: 1fr;
          }
        }
      `),d(e,E(` `));let f=ee(`style`,e);d(e,f),w(()=>{i(f,`
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
      `)}),d(e,E(` `));let _=te().content.cloneNode(!0),v=_.firstChild,y=v,x=v.childNodes[0],C=v.childNodes[0].childNodes[0],D=v.childNodes[0].childNodes[1],O=v.childNodes[0].childNodes[1].childNodes[1],k=v.childNodes[0].childNodes[1].childNodes[3],A=v.childNodes[0].childNodes[1].childNodes[5],j=v.childNodes[0].childNodes[1].childNodes[7],M=v.childNodes[0].childNodes[1].childNodes[9],N=v.childNodes[0].childNodes[1].childNodes[11],P=v.childNodes[0].childNodes[2],F=v.childNodes[0].childNodes[2].childNodes[0],I=v.childNodes[0].childNodes[2].childNodes[1],L=v.childNodes[0].childNodes[2].childNodes[2],ae=v.childNodes[0].childNodes[2].childNodes[2].childNodes[0],R=v.childNodes[0].childNodes[2].childNodes[2].childNodes[1],z=v.childNodes[0].childNodes[2].childNodes[3],oe=v.childNodes[0].childNodes[2].childNodes[3].childNodes[0],B=v.childNodes[0].childNodes[2].childNodes[3].childNodes[1],V=v.childNodes[0].childNodes[2].childNodes[4],se=v.childNodes[0].childNodes[2].childNodes[4].childNodes[0],H=v.childNodes[0].childNodes[2].childNodes[4].childNodes[1],U=v.childNodes[0].childNodes[3],W=v.childNodes[0].childNodes[3].childNodes[0],G=v.childNodes[0].childNodes[3].childNodes[0].childNodes[0],ce=v.childNodes[0].childNodes[3].childNodes[0].childNodes[2],K=v.childNodes[0].childNodes[3].childNodes[1],le=v.childNodes[0].childNodes[3].childNodes[1].childNodes[0],ue=v.childNodes[0].childNodes[3].childNodes[1].childNodes[1],q=v.childNodes[0].childNodes[4],de=v.childNodes[0].childNodes[4].childNodes[0],fe=v.childNodes[0].childNodes[4].childNodes[0].childNodes[0],pe=v.childNodes[0].childNodes[4].childNodes[0].childNodes[1],J=v.childNodes[0].childNodes[4].childNodes[1],Y=v.childNodes[0].childNodes[5],X=v.childNodes[0].childNodes[5].childNodes[0],me=v.childNodes[0].childNodes[5].childNodes[0].childNodes[0],he=v.childNodes[0].childNodes[5].childNodes[0].childNodes[1],ge=v.childNodes[0].childNodes[5].childNodes[1],Z=v.childNodes[0].childNodes[5].childNodes[1].childNodes[0],_e=v.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[0],ve=v.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[1],ye=v.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[2],be=v.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[2].childNodes[1],xe=v.childNodes[0].childNodes[5].childNodes[1].childNodes[1],Se=v.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[0],Ce=v.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[1],we=v.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[2],Te=v.childNodes[0].childNodes[5].childNodes[1].childNodes[2],Ee=v.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[0],De=v.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[1],Oe=v.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[2],ke=v.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[2].childNodes[1],Ae=v.childNodes[1],Q=v.childNodes[1].childNodes[0],je=v.childNodes[1].childNodes[0].childNodes[0],Me=v.childNodes[1].childNodes[0].childNodes[1],Ne=v.childNodes[1].childNodes[0].childNodes[2],Pe=v.childNodes[1].childNodes[0].childNodes[3],Fe=v.childNodes[1].childNodes[0].childNodes[3].childNodes[0],Ie=v.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[0],Le=v.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[1],Re=v.childNodes[1].childNodes[0].childNodes[3].childNodes[1],ze=v.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[0],Be=v.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[1],Ve=v.childNodes[1].childNodes[0].childNodes[3].childNodes[2],He=v.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[0],Ue=v.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[1],We=v.childNodes[1].childNodes[0].childNodes[6],Ge=v.childNodes[1].childNodes[0].childNodes[7],$=v.childNodes[2],Ke=v.childNodes[2].childNodes[0],qe=v.childNodes[2].childNodes[0].childNodes[0],Je=v.childNodes[2].childNodes[0].childNodes[1],Ye=v.childNodes[2].childNodes[0].childNodes[2],Xe=v.childNodes[2].childNodes[1],Ze=v.childNodes[2].childNodes[1].childNodes[0],Qe=v.childNodes[2].childNodes[1].childNodes[1],$e=v.childNodes[2].childNodes[1].childNodes[2],et=v.childNodes[2].childNodes[2],tt=v.childNodes[2].childNodes[2].childNodes[0],nt=v.childNodes[2].childNodes[2].childNodes[1],rt=v.childNodes[2].childNodes[2].childNodes[2],it=v.childNodes[2].childNodes[3],at=v.childNodes[2].childNodes[3].childNodes[0],ot=v.childNodes[2].childNodes[3].childNodes[1],st=v.childNodes[2].childNodes[3].childNodes[2],ct=v.childNodes[3],lt=v.childNodes[3].childNodes[0],ut=v.childNodes[3].childNodes[2],dt=v.childNodes[0].childNodes[3].childNodes[0].childNodes[2].childNodes[0],ft=dt.parentNode,pt=v.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],mt=pt.parentNode,ht=v.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[0],gt=ht.parentNode,_t=v.childNodes[0].childNodes[5].childNodes[0].childNodes[1].childNodes[0],vt=_t.parentNode,yt=v.childNodes[1].childNodes[0].childNodes[4],bt=yt.parentNode,xt=v.childNodes[1].childNodes[0].childNodes[5],St=xt.parentNode,Ct=v.childNodes[1].childNodes[1],wt=Ct.parentNode;e.appendChild(_),a(y,`scoped-style-shell`),T(y,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(y,e)}),a(x,`scoped-style-hero`),T(x,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(x,e)}),T(C,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(C,e)}),T(D,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(D,e)}),T(O,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(O,e)}),T(k,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(k,e)}),T(A,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(A,e)}),T(j,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(j,e)}),T(M,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(M,e)}),T(N,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(N,e)}),a(P,`scoped-style-controls`),T(P,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(P,e)}),a(F,`btn btn-sm btn-primary`);let Tt=e=>{let t=()=>{n.value=!n.value};typeof t==`function`&&t(e)};F.addEventListener(`click`,Tt),o(()=>F.removeEventListener(`click`,Tt)),T(F,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(F,e)}),a(I,`btn btn-sm scoped-style-accent-button`);let Et=e=>{let t=g;typeof t==`function`&&t(e)};I.addEventListener(`click`,Et),o(()=>I.removeEventListener(`click`,Et)),T(I,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(I,e)}),a(L,`scoped-style-control`),T(L,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(L,e)}),T(ae,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ae,e)}),T(R,`type`,`color`),w(()=>{t(R,s.value)});let Dt=e=>{let t=e=>{s.value=e.target.value};typeof t==`function`&&t(e)};R.addEventListener(`input`,Dt),o(()=>R.removeEventListener(`input`,Dt)),T(R,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(R,e)}),a(z,`scoped-style-control`),T(z,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(z,e)}),T(oe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(oe,e)}),T(B,`type`,`range`),T(B,`min`,`0.5`),T(B,`max`,`2.25`),T(B,`step`,`0.05`),w(()=>{t(B,String(parseFloat(c.value)))});let Ot=e=>{let t=e=>{c.value=`${e.target.value}rem`};typeof t==`function`&&t(e)};B.addEventListener(`input`,Ot),o(()=>B.removeEventListener(`input`,Ot)),T(B,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(B,e)}),a(V,`scoped-style-control`),T(V,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(V,e)}),T(se,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(se,e)}),T(H,`type`,`range`),T(H,`min`,`0.35`),T(H,`max`,`1.35`),T(H,`step`,`0.05`),w(()=>{t(H,String(parseFloat(p.value)))});let kt=e=>{let t=e=>{p.value=`${e.target.value}rem`};typeof t==`function`&&t(e)};H.addEventListener(`input`,kt),o(()=>H.removeEventListener(`input`,kt)),T(H,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(H,e)}),a(U,`scoped-style-live-values`),T(U,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(U,e)}),a(W,`scoped-style-current-color`),T(W,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(W,e)}),a(G,`scoped-style-swatch`),T(G,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(G,e)}),T(ce,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ce,e)}),a(K,`scoped-style-radius-preview`),T(K,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(K,e)}),T(le,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(le,e)}),T(ue,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ue,e)}),a(q,`scoped-style-color-stage`),T(q,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(q,e)}),T(de,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(de,e)}),T(fe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(fe,e)}),T(pe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(pe,e)}),a(J,`btn btn-sm`);let At=e=>{let t=g;typeof t==`function`&&t(e)};J.addEventListener(`click`,At),o(()=>J.removeEventListener(`click`,At)),T(J,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(J,e)}),a(Y,`scoped-style-explain`),T(Y,`aria-label`,`颜色效果说明`),T(Y,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Y,e)}),a(X,`scoped-style-explain-head`),T(X,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(X,e)}),T(me,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(me,e)}),T(he,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(he,e)}),a(ge,`scoped-style-watch-grid`),T(ge,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ge,e)}),a(Z,`scoped-style-watch-card`),T(Z,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Z,e)}),T(_e,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(_e,e)}),T(ve,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ve,e)}),T(ye,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ye,e)}),T(be,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(be,e)}),a(xe,`scoped-style-watch-card`),T(xe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(xe,e)}),T(Se,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Se,e)}),T(Ce,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ce,e)}),T(we,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(we,e)}),a(Te,`scoped-style-watch-card`),T(Te,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Te,e)}),T(Ee,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ee,e)}),T(De,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(De,e)}),T(Oe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Oe,e)}),T(ke,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ke,e)}),a(Ae,`scoped-style-grid`),T(Ae,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ae,e)}),w(()=>{a(Q,`scoped-style-panel scoped-style-global-target ${n.value?`is-raised`:``}`)}),T(Q,`aria-label`,`当前组件样式卡片`),T(Q,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Q,e)}),a(je,`scoped-style-kicker`),T(je,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(je,e)}),T(Me,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Me,e)}),T(Ne,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ne,e)}),a(Pe,`scoped-style-metrics`),T(Pe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Pe,e)}),a(Fe,`scoped-style-metric`),T(Fe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Fe,e)}),T(Ie,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ie,e)}),T(Le,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Le,e)}),a(Re,`scoped-style-metric`),T(Re,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Re,e)}),T(ze,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ze,e)}),T(Be,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Be,e)}),a(Ve,`scoped-style-metric`),T(Ve,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ve,e)}),T(He,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(He,e)}),T(Ue,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ue,e)}),a(We,`scoped-style-slot-pill`),T(We,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(We,e)}),a(Ge,`scoped-style-slot-pill is-hot`),T(Ge,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ge,e)}),a($,`scoped-style-lab-grid`),T($,`aria-label`,`scoped selector lab`),T($,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r($,e)}),a(Ke,`scoped-style-lab-card`),T(Ke,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ke,e)}),a(qe,`scoped-style-lab-badge`),T(qe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(qe,e)}),T(Je,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Je,e)}),T(Ye,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ye,e)}),a(Xe,`scoped-style-lab-card`),T(Xe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Xe,e)}),a(Ze,`scoped-style-lab-badge`),T(Ze,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Ze,e)}),T(Qe,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(Qe,e)}),T($e,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r($e,e)}),a(et,`scoped-style-lab-card scoped-style-global-target`),T(et,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(et,e)}),a(tt,`scoped-style-lab-badge`),T(tt,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(tt,e)}),T(nt,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(nt,e)}),T(rt,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(rt,e)}),a(it,`scoped-style-lab-card scoped-style-plain-alert`),T(it,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(it,e)}),a(at,`scoped-style-lab-badge`),T(at,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(at,e)}),a(ot,`scoped-style-global-badge`),T(ot,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ot,e)}),T(st,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(st,e)}),a(ct,`scoped-style-global-note text-sm`),T(ct,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ct,e)}),T(lt,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(lt,e)}),T(ut,`data-rue-scope-1854ue2`,``),w(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":s.value,"--rue-v-bind-1854ue2-180hqf0":c.value,"--rue-v-bind-1854ue2-jcvaj4":p.value};r(ut,e)}),w(()=>{let e=s.value;h(()=>S(e,ft,dt))}),w(()=>{let e=c.value;h(()=>S(e,mt,pt))}),w(()=>{let e=s.value;h(()=>S(e,gt,ht))}),w(()=>{let e=`accent.value = ${s.value}`;h(()=>S(e,vt,_t))});let jt=m(bt);b(jt,ne,()=>({})),bt.insertBefore(jt,yt);let Mt=m(St);b(Mt,re,()=>({})),St.insertBefore(Mt,xt);let Nt=m(wt);return b(Nt,ie,()=>({})),wt.insertBefore(Nt,Ct),d(e,E(` `)),e},!0),e=>f(()=>{})))},I=()=>{let e=x(`preview`);return v(()=>u(y(O,()=>({children:[(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l();return t.appendChild(A().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r,i)=>n(t,i,()=>s(Object.assign(t=>{let n=l(),r=j().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[0],c=i.childNodes[1];n.appendChild(r),T(s,`role`,`tab`),w(()=>{a(s,`tab ${e.value===`preview`?`tab-active`:``}`)});let u=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};s.addEventListener(`click`,u),o(()=>s.removeEventListener(`click`,u)),T(c,`role`,`tab`),w(()=>{a(c,`tab ${e.value===`code`?`tab-active`:``}`)});let d=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return c.addEventListener(`click`,d),o(()=>c.removeEventListener(`click`,d)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(t,r,i)=>n(t,i,()=>s(Object.assign(t=>{let n=l(),r=M().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],o=a.parentNode,u=i.childNodes[1],d=u.parentNode;return n.appendChild(r),g(o,a,()=>{let t=e.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=p(`div`,e);t.className=`card bg-base-100 shadow`;let n=p(`div`,t);return _(t,n),n.className=`card-body`,b(n,F,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>s(Object.assign(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),g(d,u,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=p(`div`,e);t.className=`card overflow-auto bg-base-100 shadow`;let n=p(`div`,t);return _(t,n),n.className=`card-body p-0`,b(n,D,()=>({className:`h-full`,lang:`tsx`,code:N,title:`Scoped style TSX`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>s(Object.assign(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>f(()=>{})))};export{I as default};