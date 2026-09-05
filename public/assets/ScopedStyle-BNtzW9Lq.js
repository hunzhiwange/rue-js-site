import{Bt as e,Et as t,H as n,K as r,L as i,Lt as a,Mt as o,V as s,X as c,Y as l,_n as u,dt as d,fn as f,ft as p,gn as m,hn as h,ht as g,it as _,kn as v,mn as y,nt as b,ot as x,pt as ee,q as S,rt as te,wn as C,x as w,z as T}from"./rue-runtime-CwEGJ854.js";import{t as E}from"./Code-B3jCYMAr.js";import{r as D}from"./SidebarPlaygroundExample-EGR0CyDT.js";var O=u(`<div class="scoped-style-deep-widget"><div class="scoped-style-deep-widget-head"><span>Deep child widget</span><strong>78%</strong></div><div class="scoped-style-deep-bars" aria-hidden="true"><span></span><span></span><span></span></div><p>这个组件内部的 class 由父组件的 :deep() 接管。</p></div>`),ne=u(`<div class="scoped-style-shell" data-rue-scope-1854ue2=""><section class="scoped-style-hero" data-rue-scope-1854ue2=""><h2 data-rue-scope-1854ue2="">Scoped Style</h2><p data-rue-scope-1854ue2="">在 JSX 组件里写 <code data-rue-scope-1854ue2="">&lt;style scoped&gt;</code>，CSS 会只命中当前组件生成的 DOM；现在也支持 <code data-rue-scope-1854ue2="">:deep()</code>、<code data-rue-scope-1854ue2="">:slotted()</code>、<code data-rue-scope-1854ue2="">:global()</code> 和 <code data-rue-scope-1854ue2="">v-bind()</code>。普通 <code data-rue-scope-1854ue2="">&lt;style&gt;</code> 仍保持全局。</p><div class="scoped-style-controls" data-rue-scope-1854ue2=""><button class="btn btn-sm btn-primary" data-rue-scope-1854ue2="">切换当前卡片</button><button class="btn btn-sm scoped-style-accent-button" data-rue-scope-1854ue2="">换颜色</button><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind color</span><input type="color" data-rue-scope-1854ue2=""></label><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind radius</span><input type="range" min="0.5" max="2.25" step="0.05" data-rue-scope-1854ue2=""></label><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind gap</span><input type="range" min="0.35" max="1.35" step="0.05" data-rue-scope-1854ue2=""></label></div><div class="scoped-style-live-values" data-rue-scope-1854ue2=""><p class="scoped-style-current-color" data-rue-scope-1854ue2=""><span class="scoped-style-swatch" data-rue-scope-1854ue2=""></span> 当前 v-bind color：<strong data-rue-scope-1854ue2=""><!--rue:text-hole:0--></strong></p><p class="scoped-style-radius-preview" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">当前 v-bind radius</span><strong data-rue-scope-1854ue2=""><!--rue:text-hole:1--></strong></p></div><div class="scoped-style-color-stage" data-rue-scope-1854ue2=""><div data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">live v-bind color</span><strong data-rue-scope-1854ue2=""><!--rue:text-hole:2--></strong></div><button class="btn btn-sm" data-rue-scope-1854ue2="">下一种颜色</button></div><section class="scoped-style-explain" aria-label="颜色效果说明" data-rue-scope-1854ue2=""><div class="scoped-style-explain-head" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">颜色变化怎么看</strong><code data-rue-scope-1854ue2=""><!--rue:text-hole:3--></code></div><div class="scoped-style-watch-grid" data-rue-scope-1854ue2=""><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">1</span><strong data-rue-scope-1854ue2="">先看上面的大色块</strong><p data-rue-scope-1854ue2="">它的背景直接写的是 <code data-rue-scope-1854ue2="">v-bind(accent.value)</code>；点按钮后这里应该整块换色。</p></article><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">2</span><strong data-rue-scope-1854ue2="">拖 radius 看圆角</strong><p data-rue-scope-1854ue2="">左侧大卡片、三个数字块和上方 radius 预览块都绑定了同一个 radius CSS 变量。</p></article><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">3</span><strong data-rue-scope-1854ue2="">最后看右侧对照</strong><p data-rue-scope-1854ue2="">右侧同名 class 不吃 scoped 选择器；只有橙色 <code data-rue-scope-1854ue2="">&lt;style&gt;</code> 全局样式会命中。</p></article></div></section></section><div class="scoped-style-grid" data-rue-scope-1854ue2=""><section aria-label="当前组件样式卡片" data-rue-scope-1854ue2=""><div class="scoped-style-kicker" data-rue-scope-1854ue2="">current component</div><h2 data-rue-scope-1854ue2="">当前组件内生效</h2><p data-rue-scope-1854ue2="">编译器会给这些 DOM 加上同一个 data-rue-scope-* 属性，并改写选择器。</p><div class="scoped-style-metrics" data-rue-scope-1854ue2=""><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">1</strong><span data-rue-scope-1854ue2="">scope id</span></div><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">0</strong><span data-rue-scope-1854ue2="">global leak</span></div><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">v-bind</strong><span data-rue-scope-1854ue2="">css vars</span></div></div><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><span class="scoped-style-slot-pill" data-rue-scope-1854ue2="">:slotted target</span><span class="scoped-style-slot-pill is-hot" data-rue-scope-1854ue2="">:slotted + v-bind</span></section><!--rue:opaque-hole:6--></div><section class="scoped-style-lab-grid" aria-label="scoped selector lab" data-rue-scope-1854ue2=""><article class="scoped-style-lab-card" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">normal</span><strong data-rue-scope-1854ue2="">当前组件 DOM</strong><p data-rue-scope-1854ue2="">普通选择器会被追加 data-rue-scope-*，只命中本组件生成的元素。</p></article><article class="scoped-style-lab-card" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">:deep()</span><strong data-rue-scope-1854ue2="">子组件内部 DOM</strong><p data-rue-scope-1854ue2="">父组件可以显式穿透到 DeepWidget 的内部 class。</p></article><article class="scoped-style-lab-card scoped-style-global-target" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">plain style</span><strong data-rue-scope-1854ue2="">普通 &lt;style&gt;</strong><p data-rue-scope-1854ue2="">这个橙色内描边没有 scope 限制，会命中所有同名 class。</p></article><article class="scoped-style-lab-card scoped-style-plain-alert" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">:global()</span><strong class="scoped-style-global-badge" data-rue-scope-1854ue2="">保留全局选择器</strong><p data-rue-scope-1854ue2="">用于少量确实需要外溢的样式，仍可读取 v-bind CSS 变量。</p></article></section><p class="scoped-style-global-note text-sm" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">:global()</strong> 会保留全局选择器；右侧子组件和选择器矩阵里的橙色描边来自普通 <code data-rue-scope-1854ue2="">&lt;style&gt;</code>，说明非 scoped 样式仍会全局命中同名 class。</p></div>`),k=u(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">Scoped Style 组件作用域样式</h1>`),re=u(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),ie=u(`<div class="mt-4 grid items-start gap-6 md:grid-cols-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ae=()=>S(t(Object.assign(e=>{let t=h(`span`,e);return t.className=`scoped-style-chip`,f(t,m(`子组件内容：通过 :deep() 命中`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{})),oe=()=>S(t(Object.assign(e=>{let t=O().content.cloneNode(!0).firstChild,n=t.childNodes[1].childNodes[0],r=t.childNodes[1].childNodes[1],i=t.childNodes[1].childNodes[2];return Object.assign(n.style,{width:`78%`}),Object.assign(r.style,{width:`54%`}),Object.assign(i.style,{width:`92%`}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{})),se=()=>S(t(Object.assign(e=>{let t=h(`section`,e);t.className=`scoped-style-panel scoped-style-global-target rounded-box border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`;let n=h(`div`,t);f(t,n),n.className=`inline-flex rounded-full border border-base-300 px-2 py-1 text-xs font-semibold uppercase`,f(n,m(`child component`));let r=h(`h2`,t);f(t,r),r.className=`mt-3 text-xl font-semibold`,f(r,m(`同名 class，不会被父组件 scoped CSS 命中`));let i=h(`p`,t);return f(t,i),i.className=`mt-2 text-sm opacity-70`,f(i,m(`这个组件也使用 scoped-style-panel；父组件的 scoped 选择器不会穿透到这里，但普通 <style> 会继续全局生效。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{})),A=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,j=[`#2563eb`,`#16a34a`,`#dc2626`,`#7c3aed`],M=()=>{let t=e(!0),n=e(`#2563eb`),s=e(`1rem`),u=e(`0.75rem`),f=()=>{let e=j.indexOf(n.value);n.value=j[(e+1)%j.length]};return o(()=>S(g(()=>{let e=b();c(e,_(` `));let o=te(`style`,e);c(e,o),ee(o,`
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
      `),c(e,_(` `));let m=te(`style`,e);c(e,m),C(()=>{ee(m,`
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
      `)}),c(e,_(` `));let h=ne().content.cloneNode(!0),g=h.firstChild,S=g,w=g.childNodes[0],T=g.childNodes[0].childNodes[0],E=g.childNodes[0].childNodes[1],D=g.childNodes[0].childNodes[1].childNodes[1],O=g.childNodes[0].childNodes[1].childNodes[3],k=g.childNodes[0].childNodes[1].childNodes[5],re=g.childNodes[0].childNodes[1].childNodes[7],ie=g.childNodes[0].childNodes[1].childNodes[9],A=g.childNodes[0].childNodes[1].childNodes[11],j=g.childNodes[0].childNodes[2],M=g.childNodes[0].childNodes[2].childNodes[0],N=g.childNodes[0].childNodes[2].childNodes[1],P=g.childNodes[0].childNodes[2].childNodes[2],ce=g.childNodes[0].childNodes[2].childNodes[2].childNodes[0],F=g.childNodes[0].childNodes[2].childNodes[2].childNodes[1],I=g.childNodes[0].childNodes[2].childNodes[3],le=g.childNodes[0].childNodes[2].childNodes[3].childNodes[0],L=g.childNodes[0].childNodes[2].childNodes[3].childNodes[1],R=g.childNodes[0].childNodes[2].childNodes[4],ue=g.childNodes[0].childNodes[2].childNodes[4].childNodes[0],z=g.childNodes[0].childNodes[2].childNodes[4].childNodes[1],B=g.childNodes[0].childNodes[3],V=g.childNodes[0].childNodes[3].childNodes[0],H=g.childNodes[0].childNodes[3].childNodes[0].childNodes[0],de=g.childNodes[0].childNodes[3].childNodes[0].childNodes[2],U=g.childNodes[0].childNodes[3].childNodes[1],fe=g.childNodes[0].childNodes[3].childNodes[1].childNodes[0],pe=g.childNodes[0].childNodes[3].childNodes[1].childNodes[1],W=g.childNodes[0].childNodes[4],me=g.childNodes[0].childNodes[4].childNodes[0],he=g.childNodes[0].childNodes[4].childNodes[0].childNodes[0],ge=g.childNodes[0].childNodes[4].childNodes[0].childNodes[1],G=g.childNodes[0].childNodes[4].childNodes[1],K=g.childNodes[0].childNodes[5],q=g.childNodes[0].childNodes[5].childNodes[0],_e=g.childNodes[0].childNodes[5].childNodes[0].childNodes[0],ve=g.childNodes[0].childNodes[5].childNodes[0].childNodes[1],ye=g.childNodes[0].childNodes[5].childNodes[1],J=g.childNodes[0].childNodes[5].childNodes[1].childNodes[0],be=g.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[0],xe=g.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[1],Se=g.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[2],Ce=g.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[2].childNodes[1],Y=g.childNodes[0].childNodes[5].childNodes[1].childNodes[1],we=g.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[0],Te=g.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[1],Ee=g.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[2],X=g.childNodes[0].childNodes[5].childNodes[1].childNodes[2],De=g.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[0],Oe=g.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[1],ke=g.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[2],Ae=g.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[2].childNodes[1],je=g.childNodes[1],Z=g.childNodes[1].childNodes[0],Me=g.childNodes[1].childNodes[0].childNodes[0],Ne=g.childNodes[1].childNodes[0].childNodes[1],Pe=g.childNodes[1].childNodes[0].childNodes[2],Fe=g.childNodes[1].childNodes[0].childNodes[3],Ie=g.childNodes[1].childNodes[0].childNodes[3].childNodes[0],Le=g.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[0],Re=g.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[1],ze=g.childNodes[1].childNodes[0].childNodes[3].childNodes[1],Be=g.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[0],Ve=g.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[1],He=g.childNodes[1].childNodes[0].childNodes[3].childNodes[2],Ue=g.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[0],We=g.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[1],Ge=g.childNodes[1].childNodes[0].childNodes[6],Ke=g.childNodes[1].childNodes[0].childNodes[7],Q=g.childNodes[2],qe=g.childNodes[2].childNodes[0],Je=g.childNodes[2].childNodes[0].childNodes[0],Ye=g.childNodes[2].childNodes[0].childNodes[1],Xe=g.childNodes[2].childNodes[0].childNodes[2],Ze=g.childNodes[2].childNodes[1],Qe=g.childNodes[2].childNodes[1].childNodes[0],$e=g.childNodes[2].childNodes[1].childNodes[1],et=g.childNodes[2].childNodes[1].childNodes[2],tt=g.childNodes[2].childNodes[2],nt=g.childNodes[2].childNodes[2].childNodes[0],rt=g.childNodes[2].childNodes[2].childNodes[1],it=g.childNodes[2].childNodes[2].childNodes[2],at=g.childNodes[2].childNodes[3],ot=g.childNodes[2].childNodes[3].childNodes[0],st=g.childNodes[2].childNodes[3].childNodes[1],ct=g.childNodes[2].childNodes[3].childNodes[2],$=g.childNodes[3],lt=g.childNodes[3].childNodes[0],ut=g.childNodes[3].childNodes[2],dt=g.childNodes[0].childNodes[3].childNodes[0].childNodes[2].childNodes[0],ft=dt.parentNode,pt=g.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],mt=pt.parentNode,ht=g.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[0],gt=ht.parentNode,_t=g.childNodes[0].childNodes[5].childNodes[0].childNodes[1].childNodes[0],vt=_t.parentNode,yt=g.childNodes[1].childNodes[0].childNodes[4],bt=yt.parentNode,xt=g.childNodes[1].childNodes[0].childNodes[5],St=xt.parentNode,Ct=g.childNodes[1].childNodes[1],wt=Ct.parentNode;e.appendChild(h),i(S,`scoped-style-shell`),x(S,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(S,e)}),i(w,`scoped-style-hero`),x(w,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(w,e)}),x(T,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(T,e)}),x(E,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(E,e)}),x(D,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(D,e)}),x(O,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(O,e)}),x(k,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(k,e)}),x(re,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(re,e)}),x(ie,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ie,e)}),x(A,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(A,e)}),i(j,`scoped-style-controls`),x(j,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(j,e)}),i(M,`btn btn-sm btn-primary`);let Tt=e=>{let n=()=>{t.value=!t.value};typeof n==`function`&&n(e)};M.addEventListener(`click`,Tt),a(()=>M.removeEventListener(`click`,Tt)),x(M,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(M,e)}),i(N,`btn btn-sm scoped-style-accent-button`);let Et=e=>{let t=f;typeof t==`function`&&t(e)};N.addEventListener(`click`,Et),a(()=>N.removeEventListener(`click`,Et)),x(N,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(N,e)}),i(P,`scoped-style-control`),x(P,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(P,e)}),x(ce,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ce,e)}),x(F,`type`,`color`),C(()=>{p(F,n.value)});let Dt=e=>{let t=e=>{n.value=e.target.value};typeof t==`function`&&t(e)};F.addEventListener(`input`,Dt),a(()=>F.removeEventListener(`input`,Dt)),x(F,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(F,e)}),i(I,`scoped-style-control`),x(I,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(I,e)}),x(le,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(le,e)}),x(L,`type`,`range`),x(L,`min`,`0.5`),x(L,`max`,`2.25`),x(L,`step`,`0.05`),C(()=>{p(L,String(parseFloat(s.value)))});let Ot=e=>{let t=e=>{s.value=`${e.target.value}rem`};typeof t==`function`&&t(e)};L.addEventListener(`input`,Ot),a(()=>L.removeEventListener(`input`,Ot)),x(L,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(L,e)}),i(R,`scoped-style-control`),x(R,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(R,e)}),x(ue,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ue,e)}),x(z,`type`,`range`),x(z,`min`,`0.35`),x(z,`max`,`1.35`),x(z,`step`,`0.05`),C(()=>{p(z,String(parseFloat(u.value)))});let kt=e=>{let t=e=>{u.value=`${e.target.value}rem`};typeof t==`function`&&t(e)};z.addEventListener(`input`,kt),a(()=>z.removeEventListener(`input`,kt)),x(z,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(z,e)}),i(B,`scoped-style-live-values`),x(B,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(B,e)}),i(V,`scoped-style-current-color`),x(V,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(V,e)}),i(H,`scoped-style-swatch`),x(H,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(H,e)}),x(de,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(de,e)}),i(U,`scoped-style-radius-preview`),x(U,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(U,e)}),x(fe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(fe,e)}),x(pe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(pe,e)}),i(W,`scoped-style-color-stage`),x(W,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(W,e)}),x(me,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(me,e)}),x(he,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(he,e)}),x(ge,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ge,e)}),i(G,`btn btn-sm`);let At=e=>{let t=f;typeof t==`function`&&t(e)};G.addEventListener(`click`,At),a(()=>G.removeEventListener(`click`,At)),x(G,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(G,e)}),i(K,`scoped-style-explain`),x(K,`aria-label`,`颜色效果说明`),x(K,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(K,e)}),i(q,`scoped-style-explain-head`),x(q,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(q,e)}),x(_e,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(_e,e)}),x(ve,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ve,e)}),i(ye,`scoped-style-watch-grid`),x(ye,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ye,e)}),i(J,`scoped-style-watch-card`),x(J,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(J,e)}),x(be,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(be,e)}),x(xe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(xe,e)}),x(Se,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Se,e)}),x(Ce,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ce,e)}),i(Y,`scoped-style-watch-card`),x(Y,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Y,e)}),x(we,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(we,e)}),x(Te,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Te,e)}),x(Ee,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ee,e)}),i(X,`scoped-style-watch-card`),x(X,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(X,e)}),x(De,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(De,e)}),x(Oe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Oe,e)}),x(ke,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ke,e)}),x(Ae,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ae,e)}),i(je,`scoped-style-grid`),x(je,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(je,e)}),C(()=>{i(Z,`scoped-style-panel scoped-style-global-target ${t.value?`is-raised`:``}`)}),x(Z,`aria-label`,`当前组件样式卡片`),x(Z,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Z,e)}),i(Me,`scoped-style-kicker`),x(Me,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Me,e)}),x(Ne,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ne,e)}),x(Pe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Pe,e)}),i(Fe,`scoped-style-metrics`),x(Fe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Fe,e)}),i(Ie,`scoped-style-metric`),x(Ie,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ie,e)}),x(Le,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Le,e)}),x(Re,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Re,e)}),i(ze,`scoped-style-metric`),x(ze,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ze,e)}),x(Be,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Be,e)}),x(Ve,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ve,e)}),i(He,`scoped-style-metric`),x(He,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(He,e)}),x(Ue,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ue,e)}),x(We,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(We,e)}),i(Ge,`scoped-style-slot-pill`),x(Ge,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ge,e)}),i(Ke,`scoped-style-slot-pill is-hot`),x(Ke,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ke,e)}),i(Q,`scoped-style-lab-grid`),x(Q,`aria-label`,`scoped selector lab`),x(Q,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Q,e)}),i(qe,`scoped-style-lab-card`),x(qe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(qe,e)}),i(Je,`scoped-style-lab-badge`),x(Je,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Je,e)}),x(Ye,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ye,e)}),x(Xe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Xe,e)}),i(Ze,`scoped-style-lab-card`),x(Ze,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Ze,e)}),i(Qe,`scoped-style-lab-badge`),x(Qe,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(Qe,e)}),x($e,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d($e,e)}),x(et,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(et,e)}),i(tt,`scoped-style-lab-card scoped-style-global-target`),x(tt,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(tt,e)}),i(nt,`scoped-style-lab-badge`),x(nt,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(nt,e)}),x(rt,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(rt,e)}),x(it,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(it,e)}),i(at,`scoped-style-lab-card scoped-style-plain-alert`),x(at,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(at,e)}),i(ot,`scoped-style-lab-badge`),x(ot,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ot,e)}),i(st,`scoped-style-global-badge`),x(st,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(st,e)}),x(ct,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ct,e)}),i($,`scoped-style-global-note text-sm`),x($,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d($,e)}),x(lt,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(lt,e)}),x(ut,`data-rue-scope-1854ue2`,``),C(()=>{let e={"--rue-v-bind-1854ue2-aj1e7s":n.value,"--rue-v-bind-1854ue2-180hqf0":s.value,"--rue-v-bind-1854ue2-jcvaj4":u.value};d(ut,e)}),C(()=>{let e=n.value;v(()=>l(e,ft,dt))}),C(()=>{let e=s.value;v(()=>l(e,mt,pt))}),C(()=>{let e=n.value;v(()=>l(e,gt,ht))}),C(()=>{let e=`accent.value = ${n.value}`;v(()=>l(e,vt,_t))});let jt=y(bt);r(jt,ae,()=>({})),bt.insertBefore(jt,yt);let Mt=y(St);r(Mt,oe,()=>({})),St.insertBefore(Mt,xt);let Nt=y(wt);return r(Nt,se,()=>({})),wt.insertBefore(Nt,Ct),c(e,_(` `)),e},!0),e=>T(()=>{})))},N=()=>{let c=e(`preview`);return o(()=>S(n(D,()=>({children:[(e,n,r)=>w(e,r,()=>t(Object.assign(e=>{let t=b();return t.appendChild(k().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,r)=>w(e,r,()=>t(Object.assign(e=>{let t=b(),n=re().content.cloneNode(!0),r=n.firstChild,o=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),x(o,`role`,`tab`),C(()=>{i(o,`tab ${c.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{c.value=`preview`};typeof t==`function`&&t(e)};o.addEventListener(`click`,l),a(()=>o.removeEventListener(`click`,l)),x(s,`role`,`tab`),C(()=>{i(s,`tab ${c.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{c.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,u),a(()=>s.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,i)=>w(e,i,()=>t(Object.assign(e=>{let n=b(),i=ie().content.cloneNode(!0),a=i.firstChild,o=a.childNodes[0],l=o.parentNode,u=a.childNodes[1],d=u.parentNode;return n.appendChild(i),s(l,o,()=>{let e=c.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>t(Object.assign(e=>{let t=h(`div`,e);t.className=`card bg-base-100 shadow`;let n=h(`div`,t);return f(t,n),n.className=`card-body`,r(n,M,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>t(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(Object.assign(e=>{let t=b();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),s(d,u,()=>{let e=c.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>t(Object.assign(e=>{let t=h(`div`,e);t.className=`card overflow-auto bg-base-100 shadow`;let n=h(`div`,t);return f(t,n),n.className=`card-body p-0`,r(n,E,()=>({className:`h-full`,lang:`tsx`,code:A,title:`Scoped style TSX`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>t(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(Object.assign(e=>{let t=b();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>T(()=>{})))};export{N as default};