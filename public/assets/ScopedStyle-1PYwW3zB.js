import{Bt as e,H as t,Qt as n,Ut as r,V as i,Vt as a,Wt as o,Y as s,fn as c,gn as l,hn as u,in as d,mn as ee,pn as f,sn as p,st as m,u as te,yn as h,yt as g,zt as _}from"./rue-runtime-Cv6BZekS.js";import{t as v}from"./Code-BzFVdc3U.js";import{r as y}from"./SidebarPlaygroundExample-rFyhXfC_.js";var b=h(`<div class="scoped-style-deep-widget"><div class="scoped-style-deep-widget-head"><span>Deep child widget</span><strong>78%</strong></div><div class="scoped-style-deep-bars" aria-hidden="true"><span></span><span></span><span></span></div><p>这个组件内部的 class 由父组件的 :deep() 接管。</p></div>`),ne=h(`<div class="scoped-style-shell" data-rue-scope-1854ue2=""><section class="scoped-style-hero" data-rue-scope-1854ue2=""><h2 data-rue-scope-1854ue2="">Scoped Style</h2><p data-rue-scope-1854ue2="">在 JSX 组件里写 <code data-rue-scope-1854ue2="">&lt;style scoped&gt;</code>，CSS 会只命中当前组件生成的 DOM；现在也支持 <code data-rue-scope-1854ue2="">:deep()</code>、<code data-rue-scope-1854ue2="">:slotted()</code>、<code data-rue-scope-1854ue2="">:global()</code> 和 <code data-rue-scope-1854ue2="">v-bind()</code>。普通 <code data-rue-scope-1854ue2="">&lt;style&gt;</code> 仍保持全局。</p><div class="scoped-style-controls" data-rue-scope-1854ue2=""><button class="btn btn-sm btn-primary" data-rue-scope-1854ue2="">切换当前卡片</button><button class="btn btn-sm scoped-style-accent-button" data-rue-scope-1854ue2="">换颜色</button><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind color</span><input type="color" data-rue-scope-1854ue2=""></label><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind radius</span><input type="range" min="0.5" max="2.25" step="0.05" data-rue-scope-1854ue2=""></label><label class="scoped-style-control" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">v-bind gap</span><input type="range" min="0.35" max="1.35" step="0.05" data-rue-scope-1854ue2=""></label></div><div class="scoped-style-live-values" data-rue-scope-1854ue2=""><p class="scoped-style-current-color" data-rue-scope-1854ue2=""><span class="scoped-style-swatch" data-rue-scope-1854ue2=""></span> 当前 v-bind color：<strong data-rue-scope-1854ue2="">rue:direct-text</strong></p><p class="scoped-style-radius-preview" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">当前 v-bind radius</span><strong data-rue-scope-1854ue2="">rue:direct-text</strong></p></div><div class="scoped-style-color-stage" data-rue-scope-1854ue2=""><div data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">live v-bind color</span><strong data-rue-scope-1854ue2="">rue:direct-text</strong></div><button class="btn btn-sm" data-rue-scope-1854ue2="">下一种颜色</button></div><section class="scoped-style-explain" aria-label="颜色效果说明" data-rue-scope-1854ue2=""><div class="scoped-style-explain-head" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">颜色变化怎么看</strong><code data-rue-scope-1854ue2=""><!--rue:text-hole:3--></code></div><div class="scoped-style-watch-grid" data-rue-scope-1854ue2=""><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">1</span><strong data-rue-scope-1854ue2="">先看上面的大色块</strong><p data-rue-scope-1854ue2="">它的背景直接写的是 <code data-rue-scope-1854ue2="">v-bind(accent.value)</code>；点按钮后这里应该整块换色。</p></article><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">2</span><strong data-rue-scope-1854ue2="">拖 radius 看圆角</strong><p data-rue-scope-1854ue2="">左侧大卡片、三个数字块和上方 radius 预览块都绑定了同一个 radius CSS 变量。</p></article><article class="scoped-style-watch-card" data-rue-scope-1854ue2=""><span data-rue-scope-1854ue2="">3</span><strong data-rue-scope-1854ue2="">最后看右侧对照</strong><p data-rue-scope-1854ue2="">右侧同名 class 不吃 scoped 选择器；只有橙色 <code data-rue-scope-1854ue2="">&lt;style&gt;</code> 全局样式会命中。</p></article></div></section></section><div class="scoped-style-grid" data-rue-scope-1854ue2=""><section aria-label="当前组件样式卡片" data-rue-scope-1854ue2=""><div class="scoped-style-kicker" data-rue-scope-1854ue2="">current component</div><h2 data-rue-scope-1854ue2="">当前组件内生效</h2><p data-rue-scope-1854ue2="">编译器会给这些 DOM 加上同一个 data-rue-scope-* 属性，并改写选择器。</p><div class="scoped-style-metrics" data-rue-scope-1854ue2=""><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">1</strong><span data-rue-scope-1854ue2="">scope id</span></div><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">0</strong><span data-rue-scope-1854ue2="">global leak</span></div><div class="scoped-style-metric" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">v-bind</strong><span data-rue-scope-1854ue2="">css vars</span></div></div><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><span class="scoped-style-slot-pill" data-rue-scope-1854ue2="">:slotted target</span><span class="scoped-style-slot-pill is-hot" data-rue-scope-1854ue2="">:slotted + v-bind</span></section><!--rue:opaque-hole:6--></div><section class="scoped-style-lab-grid" aria-label="scoped selector lab" data-rue-scope-1854ue2=""><article class="scoped-style-lab-card" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">normal</span><strong data-rue-scope-1854ue2="">当前组件 DOM</strong><p data-rue-scope-1854ue2="">普通选择器会被追加 data-rue-scope-*，只命中本组件生成的元素。</p></article><article class="scoped-style-lab-card" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">:deep()</span><strong data-rue-scope-1854ue2="">子组件内部 DOM</strong><p data-rue-scope-1854ue2="">父组件可以显式穿透到 DeepWidget 的内部 class。</p></article><article class="scoped-style-lab-card scoped-style-global-target" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">plain style</span><strong data-rue-scope-1854ue2="">普通 &lt;style&gt;</strong><p data-rue-scope-1854ue2="">这个橙色内描边没有 scope 限制，会命中所有同名 class。</p></article><article class="scoped-style-lab-card scoped-style-plain-alert" data-rue-scope-1854ue2=""><span class="scoped-style-lab-badge" data-rue-scope-1854ue2="">:global()</span><strong class="scoped-style-global-badge" data-rue-scope-1854ue2="">保留全局选择器</strong><p data-rue-scope-1854ue2="">用于少量确实需要外溢的样式，仍可读取 v-bind CSS 变量。</p></article></section><p class="scoped-style-global-note text-sm" data-rue-scope-1854ue2=""><strong data-rue-scope-1854ue2="">:global()</strong> 会保留全局选择器；右侧子组件和选择器矩阵里的橙色描边来自普通 <code data-rue-scope-1854ue2="">&lt;style&gt;</code>，说明非 scoped 样式仍会全局命中同名 class。</p></div>`),re=h(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">Scoped Style 组件作用域样式</h1>`),x=h(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),S=h(`<div class="mt-4 grid items-start gap-6 md:grid-cols-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ie=(e,t,n)=>g(e=>{let t=u(`span`,e);return t.setAttribute(`class`,`scoped-style-chip`),c(t,l(`子组件内容：通过 :deep() 命中`)),[t,t]}),ae=(e,t,n)=>g(e=>{let t=b().content.cloneNode(!0).firstChild,n=t.childNodes[1].childNodes[0],r=t.childNodes[1].childNodes[1],i=t.childNodes[1].childNodes[2];return Object.assign(n.style,{width:`78%`}),Object.assign(r.style,{width:`54%`}),Object.assign(i.style,{width:`92%`}),[t,t]}),oe=(e,t,n)=>g(e=>{let t=u(`section`,e);t.setAttribute(`class`,`scoped-style-panel scoped-style-global-target rounded-box border border-dashed border-base-300 bg-base-100 p-4 shadow-sm`);let n=u(`div`,t);c(t,n),n.setAttribute(`class`,`inline-flex rounded-full border border-base-300 px-2 py-1 text-xs font-semibold uppercase`),c(n,l(`child component`));let r=u(`h2`,t);c(t,r),r.setAttribute(`class`,`mt-3 text-xl font-semibold`),c(r,l(`同名 class，不会被父组件 scoped CSS 命中`));let i=u(`p`,t);return c(t,i),i.setAttribute(`class`,`mt-2 text-sm opacity-70`),c(i,l(`这个组件也使用 scoped-style-panel；父组件的 scoped 选择器不会穿透到这里，但普通 <style> 会继续全局生效。`)),[t,t]}),C=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,w=[`#2563eb`,`#16a34a`,`#dc2626`,`#7c3aed`],T=(t,r,h)=>{let g=m(!0),v=m(`#2563eb`),y=m(`1rem`),b=m(`0.75rem`),re=()=>{let e=w.indexOf(v.value);v.value=w[(e+1)%w.length]};return s(()=>o(t=>{let r=ee(),o=u(`style`,r);c(r,o),c(o,l(`
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
      `));let s=u(`style`,r);c(r,s);let m=l(``);c(s,m),n(m,()=>`
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
      `);let h=ne().content.cloneNode(!0),x=h.firstChild,S=x,C=x.childNodes[0],w=x.childNodes[0].childNodes[0],T=x.childNodes[0].childNodes[1],E=x.childNodes[0].childNodes[1].childNodes[1],se=x.childNodes[0].childNodes[1].childNodes[3],ce=x.childNodes[0].childNodes[1].childNodes[5],le=x.childNodes[0].childNodes[1].childNodes[7],ue=x.childNodes[0].childNodes[1].childNodes[9],de=x.childNodes[0].childNodes[1].childNodes[11],D=x.childNodes[0].childNodes[2],O=x.childNodes[0].childNodes[2].childNodes[0],k=x.childNodes[0].childNodes[2].childNodes[1],A=x.childNodes[0].childNodes[2].childNodes[2],fe=x.childNodes[0].childNodes[2].childNodes[2].childNodes[0],j=x.childNodes[0].childNodes[2].childNodes[2].childNodes[1],M=x.childNodes[0].childNodes[2].childNodes[3],pe=x.childNodes[0].childNodes[2].childNodes[3].childNodes[0],N=x.childNodes[0].childNodes[2].childNodes[3].childNodes[1],P=x.childNodes[0].childNodes[2].childNodes[4],me=x.childNodes[0].childNodes[2].childNodes[4].childNodes[0],F=x.childNodes[0].childNodes[2].childNodes[4].childNodes[1],I=x.childNodes[0].childNodes[3],L=x.childNodes[0].childNodes[3].childNodes[0],R=x.childNodes[0].childNodes[3].childNodes[0].childNodes[0],he=x.childNodes[0].childNodes[3].childNodes[0].childNodes[2],z=x.childNodes[0].childNodes[3].childNodes[1],ge=x.childNodes[0].childNodes[3].childNodes[1].childNodes[0],_e=x.childNodes[0].childNodes[3].childNodes[1].childNodes[1],B=x.childNodes[0].childNodes[4],ve=x.childNodes[0].childNodes[4].childNodes[0],ye=x.childNodes[0].childNodes[4].childNodes[0].childNodes[0],be=x.childNodes[0].childNodes[4].childNodes[0].childNodes[1],V=x.childNodes[0].childNodes[4].childNodes[1],H=x.childNodes[0].childNodes[5],U=x.childNodes[0].childNodes[5].childNodes[0],xe=x.childNodes[0].childNodes[5].childNodes[0].childNodes[0],Se=x.childNodes[0].childNodes[5].childNodes[0].childNodes[1],W=x.childNodes[0].childNodes[5].childNodes[1],G=x.childNodes[0].childNodes[5].childNodes[1].childNodes[0],Ce=x.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[0],we=x.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[1],Te=x.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[2],Ee=x.childNodes[0].childNodes[5].childNodes[1].childNodes[0].childNodes[2].childNodes[1],K=x.childNodes[0].childNodes[5].childNodes[1].childNodes[1],De=x.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[0],Oe=x.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[1],ke=x.childNodes[0].childNodes[5].childNodes[1].childNodes[1].childNodes[2],q=x.childNodes[0].childNodes[5].childNodes[1].childNodes[2],Ae=x.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[0],je=x.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[1],Me=x.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[2],Ne=x.childNodes[0].childNodes[5].childNodes[1].childNodes[2].childNodes[2].childNodes[1],J=x.childNodes[1],Y=x.childNodes[1].childNodes[0],X=x.childNodes[1].childNodes[0].childNodes[0],Pe=x.childNodes[1].childNodes[0].childNodes[1],Fe=x.childNodes[1].childNodes[0].childNodes[2],Ie=x.childNodes[1].childNodes[0].childNodes[3],Le=x.childNodes[1].childNodes[0].childNodes[3].childNodes[0],Re=x.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[0],ze=x.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[1],Be=x.childNodes[1].childNodes[0].childNodes[3].childNodes[1],Ve=x.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[0],He=x.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[1],Ue=x.childNodes[1].childNodes[0].childNodes[3].childNodes[2],We=x.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[0],Ge=x.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[1],Ke=x.childNodes[1].childNodes[0].childNodes[6],qe=x.childNodes[1].childNodes[0].childNodes[7],Z=x.childNodes[2],Je=x.childNodes[2].childNodes[0],Ye=x.childNodes[2].childNodes[0].childNodes[0],Xe=x.childNodes[2].childNodes[0].childNodes[1],Ze=x.childNodes[2].childNodes[0].childNodes[2],Qe=x.childNodes[2].childNodes[1],$e=x.childNodes[2].childNodes[1].childNodes[0],et=x.childNodes[2].childNodes[1].childNodes[1],tt=x.childNodes[2].childNodes[1].childNodes[2],Q=x.childNodes[2].childNodes[2],nt=x.childNodes[2].childNodes[2].childNodes[0],rt=x.childNodes[2].childNodes[2].childNodes[1],it=x.childNodes[2].childNodes[2].childNodes[2],at=x.childNodes[2].childNodes[3],ot=x.childNodes[2].childNodes[3].childNodes[0],st=x.childNodes[2].childNodes[3].childNodes[1],ct=x.childNodes[2].childNodes[3].childNodes[2],$=x.childNodes[3],lt=x.childNodes[3].childNodes[0],ut=x.childNodes[3].childNodes[2],dt=x.childNodes[0].childNodes[3].childNodes[0].childNodes[2].childNodes[0],ft=dt.parentNode,pt=x.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0],mt=pt.parentNode,ht=x.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[0],gt=ht.parentNode,_t=x.childNodes[0].childNodes[5].childNodes[0].childNodes[1].childNodes[0],vt=_t.parentNode,yt=x.childNodes[1].childNodes[0].childNodes[4],bt=yt.parentNode,xt=x.childNodes[1].childNodes[0].childNodes[5],St=xt.parentNode,Ct=x.childNodes[1].childNodes[1],wt=Ct.parentNode,Tt=f(`rue:text-hole:0`);ft.replaceChild(Tt,dt);let Et=f(`rue:text-hole:1`);mt.replaceChild(Et,pt);let Dt=f(`rue:text-hole:2`);gt.replaceChild(Dt,ht),r.appendChild(h),S.setAttribute(`class`,`scoped-style-shell`),S.setAttribute(`data-rue-scope-1854ue2`,``);let Ot;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ot,t)||(Ot=t,S.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let kt;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(kt,t)||(kt=t,S.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let At;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(At,t)||(At=t,S.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),C.setAttribute(`class`,`scoped-style-hero`),C.setAttribute(`data-rue-scope-1854ue2`,``);let jt;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(jt,t)||(jt=t,C.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Mt;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Mt,t)||(Mt=t,C.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Nt;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Nt,t)||(Nt=t,C.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),w.setAttribute(`data-rue-scope-1854ue2`,``);let Pt;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Pt,t)||(Pt=t,w.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Ft;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Ft,t)||(Ft=t,w.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let It;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(It,t)||(It=t,w.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),T.setAttribute(`data-rue-scope-1854ue2`,``);let Lt;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Lt,t)||(Lt=t,T.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Rt;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Rt,t)||(Rt=t,T.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let zt;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(zt,t)||(zt=t,T.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),E.setAttribute(`data-rue-scope-1854ue2`,``);let Bt;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Bt,t)||(Bt=t,E.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Vt;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Vt,t)||(Vt=t,E.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ht;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ht,t)||(Ht=t,E.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),se.setAttribute(`data-rue-scope-1854ue2`,``);let Ut;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ut,t)||(Ut=t,se.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Wt;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Wt,t)||(Wt=t,se.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Gt;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Gt,t)||(Gt=t,se.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ce.setAttribute(`data-rue-scope-1854ue2`,``);let Kt;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Kt,t)||(Kt=t,ce.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let qt;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(qt,t)||(qt=t,ce.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Jt;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Jt,t)||(Jt=t,ce.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),le.setAttribute(`data-rue-scope-1854ue2`,``);let Yt;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Yt,t)||(Yt=t,le.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Xt;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Xt,t)||(Xt=t,le.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Zt;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Zt,t)||(Zt=t,le.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ue.setAttribute(`data-rue-scope-1854ue2`,``);let Qt;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Qt,t)||(Qt=t,ue.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let $t;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is($t,t)||($t=t,ue.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let en;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(en,t)||(en=t,ue.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),de.setAttribute(`data-rue-scope-1854ue2`,``);let tn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(tn,t)||(tn=t,de.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let nn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(nn,t)||(nn=t,de.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let rn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(rn,t)||(rn=t,de.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),D.setAttribute(`class`,`scoped-style-controls`),D.setAttribute(`data-rue-scope-1854ue2`,``);let an;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(an,t)||(an=t,D.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let on;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(on,t)||(on=t,D.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let sn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(sn,t)||(sn=t,D.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),O.setAttribute(`class`,`btn btn-sm btn-primary`),p(te(t,O,`click`,()=>()=>{g.value=!g.value})),O.setAttribute(`data-rue-scope-1854ue2`,``);let cn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(cn,t)||(cn=t,O.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ln;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ln,t)||(ln=t,O.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let un;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(un,t)||(un=t,O.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),k.setAttribute(`class`,`btn btn-sm scoped-style-accent-button`);let dn=e=>{let t=re;typeof t==`function`&&t(e)};k.addEventListener(`click`,dn),p(()=>k.removeEventListener(`click`,dn)),k.setAttribute(`data-rue-scope-1854ue2`,``);let fn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(fn,t)||(fn=t,k.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let pn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(pn,t)||(pn=t,k.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let mn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(mn,t)||(mn=t,k.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),A.setAttribute(`class`,`scoped-style-control`),A.setAttribute(`data-rue-scope-1854ue2`,``);let hn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(hn,t)||(hn=t,A.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let gn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(gn,t)||(gn=t,A.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let _n;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(_n,t)||(_n=t,A.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),fe.setAttribute(`data-rue-scope-1854ue2`,``);let vn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(vn,t)||(vn=t,fe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let yn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(yn,t)||(yn=t,fe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let bn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(bn,t)||(bn=t,fe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),j.setAttribute(`type`,`color`);let xn;d(()=>{let e=v.value,t=e==null?``:String(e);Object.is(xn,t)||(xn=t,j.value=t)});let Sn=e=>{let t=e=>{v.value=e.target.value};typeof t==`function`&&t(e)};j.addEventListener(`input`,Sn),p(()=>j.removeEventListener(`input`,Sn)),j.setAttribute(`data-rue-scope-1854ue2`,``);let Cn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Cn,t)||(Cn=t,j.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let wn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(wn,t)||(wn=t,j.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Tn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Tn,t)||(Tn=t,j.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),M.setAttribute(`class`,`scoped-style-control`),M.setAttribute(`data-rue-scope-1854ue2`,``);let En;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(En,t)||(En=t,M.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Dn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Dn,t)||(Dn=t,M.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let On;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(On,t)||(On=t,M.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),pe.setAttribute(`data-rue-scope-1854ue2`,``);let kn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(kn,t)||(kn=t,pe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let An;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(An,t)||(An=t,pe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let jn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(jn,t)||(jn=t,pe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),N.setAttribute(`type`,`range`),N.setAttribute(`min`,`0.5`),N.setAttribute(`max`,`2.25`),N.setAttribute(`step`,`0.05`);let Mn;d(()=>{let e=String(parseFloat(y.value)),t=e==null?``:String(e);Object.is(Mn,t)||(Mn=t,N.value=t)});let Nn=e=>{let t=e=>{y.value=`${e.target.value}rem`};typeof t==`function`&&t(e)};N.addEventListener(`input`,Nn),p(()=>N.removeEventListener(`input`,Nn)),N.setAttribute(`data-rue-scope-1854ue2`,``);let Pn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Pn,t)||(Pn=t,N.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Fn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Fn,t)||(Fn=t,N.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let In;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(In,t)||(In=t,N.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),P.setAttribute(`class`,`scoped-style-control`),P.setAttribute(`data-rue-scope-1854ue2`,``);let Ln;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ln,t)||(Ln=t,P.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Rn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Rn,t)||(Rn=t,P.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let zn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(zn,t)||(zn=t,P.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),me.setAttribute(`data-rue-scope-1854ue2`,``);let Bn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Bn,t)||(Bn=t,me.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Vn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Vn,t)||(Vn=t,me.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Hn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Hn,t)||(Hn=t,me.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),F.setAttribute(`type`,`range`),F.setAttribute(`min`,`0.35`),F.setAttribute(`max`,`1.35`),F.setAttribute(`step`,`0.05`);let Un;d(()=>{let e=String(parseFloat(b.value)),t=e==null?``:String(e);Object.is(Un,t)||(Un=t,F.value=t)});let Wn=e=>{let t=e=>{b.value=`${e.target.value}rem`};typeof t==`function`&&t(e)};F.addEventListener(`input`,Wn),p(()=>F.removeEventListener(`input`,Wn)),F.setAttribute(`data-rue-scope-1854ue2`,``);let Gn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Gn,t)||(Gn=t,F.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Kn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Kn,t)||(Kn=t,F.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let qn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(qn,t)||(qn=t,F.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),I.setAttribute(`class`,`scoped-style-live-values`),I.setAttribute(`data-rue-scope-1854ue2`,``);let Jn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Jn,t)||(Jn=t,I.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Yn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Yn,t)||(Yn=t,I.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Xn;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Xn,t)||(Xn=t,I.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),L.setAttribute(`class`,`scoped-style-current-color`),L.setAttribute(`data-rue-scope-1854ue2`,``);let Zn;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Zn,t)||(Zn=t,L.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Qn;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Qn,t)||(Qn=t,L.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let $n;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is($n,t)||($n=t,L.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),R.setAttribute(`class`,`scoped-style-swatch`),R.setAttribute(`data-rue-scope-1854ue2`,``);let er;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(er,t)||(er=t,R.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let tr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(tr,t)||(tr=t,R.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let nr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(nr,t)||(nr=t,R.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),he.setAttribute(`data-rue-scope-1854ue2`,``);let rr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(rr,t)||(rr=t,he.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ir;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ir,t)||(ir=t,he.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ar;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ar,t)||(ar=t,he.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),z.setAttribute(`class`,`scoped-style-radius-preview`),z.setAttribute(`data-rue-scope-1854ue2`,``);let or;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(or,t)||(or=t,z.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let sr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(sr,t)||(sr=t,z.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let cr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(cr,t)||(cr=t,z.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ge.setAttribute(`data-rue-scope-1854ue2`,``);let lr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(lr,t)||(lr=t,ge.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ur;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ur,t)||(ur=t,ge.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let dr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(dr,t)||(dr=t,ge.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),_e.setAttribute(`data-rue-scope-1854ue2`,``);let fr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(fr,t)||(fr=t,_e.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let pr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(pr,t)||(pr=t,_e.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let mr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(mr,t)||(mr=t,_e.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),B.setAttribute(`class`,`scoped-style-color-stage`),B.setAttribute(`data-rue-scope-1854ue2`,``);let hr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(hr,t)||(hr=t,B.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let gr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(gr,t)||(gr=t,B.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let _r;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(_r,t)||(_r=t,B.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ve.setAttribute(`data-rue-scope-1854ue2`,``);let vr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(vr,t)||(vr=t,ve.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let yr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(yr,t)||(yr=t,ve.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let br;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(br,t)||(br=t,ve.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ye.setAttribute(`data-rue-scope-1854ue2`,``);let xr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(xr,t)||(xr=t,ye.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Sr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Sr,t)||(Sr=t,ye.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Cr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Cr,t)||(Cr=t,ye.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),be.setAttribute(`data-rue-scope-1854ue2`,``);let wr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(wr,t)||(wr=t,be.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Tr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Tr,t)||(Tr=t,be.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Er;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Er,t)||(Er=t,be.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),V.setAttribute(`class`,`btn btn-sm`);let Dr=e=>{let t=re;typeof t==`function`&&t(e)};V.addEventListener(`click`,Dr),p(()=>V.removeEventListener(`click`,Dr)),V.setAttribute(`data-rue-scope-1854ue2`,``);let Or;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Or,t)||(Or=t,V.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let kr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(kr,t)||(kr=t,V.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ar;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ar,t)||(Ar=t,V.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),H.setAttribute(`class`,`scoped-style-explain`),H.setAttribute(`aria-label`,`颜色效果说明`),H.setAttribute(`data-rue-scope-1854ue2`,``);let jr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(jr,t)||(jr=t,H.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Mr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Mr,t)||(Mr=t,H.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Nr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Nr,t)||(Nr=t,H.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),U.setAttribute(`class`,`scoped-style-explain-head`),U.setAttribute(`data-rue-scope-1854ue2`,``);let Pr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Pr,t)||(Pr=t,U.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Fr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Fr,t)||(Fr=t,U.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ir;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ir,t)||(Ir=t,U.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),xe.setAttribute(`data-rue-scope-1854ue2`,``);let Lr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Lr,t)||(Lr=t,xe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Rr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Rr,t)||(Rr=t,xe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let zr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(zr,t)||(zr=t,xe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Se.setAttribute(`data-rue-scope-1854ue2`,``);let Br;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Br,t)||(Br=t,Se.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Vr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Vr,t)||(Vr=t,Se.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Hr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Hr,t)||(Hr=t,Se.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),W.setAttribute(`class`,`scoped-style-watch-grid`),W.setAttribute(`data-rue-scope-1854ue2`,``);let Ur;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ur,t)||(Ur=t,W.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Wr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Wr,t)||(Wr=t,W.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Gr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Gr,t)||(Gr=t,W.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),G.setAttribute(`class`,`scoped-style-watch-card`),G.setAttribute(`data-rue-scope-1854ue2`,``);let Kr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Kr,t)||(Kr=t,G.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let qr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(qr,t)||(qr=t,G.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Jr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Jr,t)||(Jr=t,G.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ce.setAttribute(`data-rue-scope-1854ue2`,``);let Yr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Yr,t)||(Yr=t,Ce.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Xr;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Xr,t)||(Xr=t,Ce.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Zr;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Zr,t)||(Zr=t,Ce.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),we.setAttribute(`data-rue-scope-1854ue2`,``);let Qr;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Qr,t)||(Qr=t,we.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let $r;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is($r,t)||($r=t,we.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ei;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ei,t)||(ei=t,we.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Te.setAttribute(`data-rue-scope-1854ue2`,``);let ti;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ti,t)||(ti=t,Te.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ni;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ni,t)||(ni=t,Te.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ri;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ri,t)||(ri=t,Te.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ee.setAttribute(`data-rue-scope-1854ue2`,``);let ii;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ii,t)||(ii=t,Ee.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ai;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ai,t)||(ai=t,Ee.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let oi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(oi,t)||(oi=t,Ee.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),K.setAttribute(`class`,`scoped-style-watch-card`),K.setAttribute(`data-rue-scope-1854ue2`,``);let si;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(si,t)||(si=t,K.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ci;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ci,t)||(ci=t,K.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let li;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(li,t)||(li=t,K.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),De.setAttribute(`data-rue-scope-1854ue2`,``);let ui;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ui,t)||(ui=t,De.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let di;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(di,t)||(di=t,De.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let fi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(fi,t)||(fi=t,De.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Oe.setAttribute(`data-rue-scope-1854ue2`,``);let pi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(pi,t)||(pi=t,Oe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let mi;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(mi,t)||(mi=t,Oe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let hi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(hi,t)||(hi=t,Oe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ke.setAttribute(`data-rue-scope-1854ue2`,``);let gi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(gi,t)||(gi=t,ke.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let _i;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(_i,t)||(_i=t,ke.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let vi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(vi,t)||(vi=t,ke.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),q.setAttribute(`class`,`scoped-style-watch-card`),q.setAttribute(`data-rue-scope-1854ue2`,``);let yi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(yi,t)||(yi=t,q.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let bi;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(bi,t)||(bi=t,q.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let xi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(xi,t)||(xi=t,q.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ae.setAttribute(`data-rue-scope-1854ue2`,``);let Si;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Si,t)||(Si=t,Ae.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Ci;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Ci,t)||(Ci=t,Ae.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let wi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(wi,t)||(wi=t,Ae.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),je.setAttribute(`data-rue-scope-1854ue2`,``);let Ti;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ti,t)||(Ti=t,je.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Ei;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Ei,t)||(Ei=t,je.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Di;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Di,t)||(Di=t,je.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Me.setAttribute(`data-rue-scope-1854ue2`,``);let Oi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Oi,t)||(Oi=t,Me.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ki;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ki,t)||(ki=t,Me.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ai;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ai,t)||(Ai=t,Me.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ne.setAttribute(`data-rue-scope-1854ue2`,``);let ji;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ji,t)||(ji=t,Ne.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Mi;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Mi,t)||(Mi=t,Ne.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ni;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ni,t)||(Ni=t,Ne.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),J.setAttribute(`class`,`scoped-style-grid`),J.setAttribute(`data-rue-scope-1854ue2`,``);let Pi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Pi,t)||(Pi=t,J.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Fi;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Fi,t)||(Fi=t,J.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ii;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ii,t)||(Ii=t,J.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))});let Li;d(()=>{let e=`scoped-style-panel scoped-style-global-target ${g.value?`is-raised`:``}`,t=e===!1||e==null?``:String(e);Object.is(Li,t)||(Li=t,Y.setAttribute(`class`,t))}),Y.setAttribute(`aria-label`,`当前组件样式卡片`),Y.setAttribute(`data-rue-scope-1854ue2`,``);let Ri;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ri,t)||(Ri=t,Y.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let zi;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(zi,t)||(zi=t,Y.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Bi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Bi,t)||(Bi=t,Y.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),X.setAttribute(`class`,`scoped-style-kicker`),X.setAttribute(`data-rue-scope-1854ue2`,``);let Vi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Vi,t)||(Vi=t,X.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Hi;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Hi,t)||(Hi=t,X.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ui;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ui,t)||(Ui=t,X.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Pe.setAttribute(`data-rue-scope-1854ue2`,``);let Wi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Wi,t)||(Wi=t,Pe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Gi;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Gi,t)||(Gi=t,Pe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ki;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ki,t)||(Ki=t,Pe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Fe.setAttribute(`data-rue-scope-1854ue2`,``);let qi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(qi,t)||(qi=t,Fe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Ji;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Ji,t)||(Ji=t,Fe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Yi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Yi,t)||(Yi=t,Fe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ie.setAttribute(`class`,`scoped-style-metrics`),Ie.setAttribute(`data-rue-scope-1854ue2`,``);let Xi;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Xi,t)||(Xi=t,Ie.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Zi;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Zi,t)||(Zi=t,Ie.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Qi;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Qi,t)||(Qi=t,Ie.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Le.setAttribute(`class`,`scoped-style-metric`),Le.setAttribute(`data-rue-scope-1854ue2`,``);let $i;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is($i,t)||($i=t,Le.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ea;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ea,t)||(ea=t,Le.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ta;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ta,t)||(ta=t,Le.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Re.setAttribute(`data-rue-scope-1854ue2`,``);let na;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(na,t)||(na=t,Re.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ra;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ra,t)||(ra=t,Re.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ia;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ia,t)||(ia=t,Re.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ze.setAttribute(`data-rue-scope-1854ue2`,``);let aa;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(aa,t)||(aa=t,ze.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let oa;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(oa,t)||(oa=t,ze.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let sa;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(sa,t)||(sa=t,ze.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Be.setAttribute(`class`,`scoped-style-metric`),Be.setAttribute(`data-rue-scope-1854ue2`,``);let ca;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ca,t)||(ca=t,Be.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let la;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(la,t)||(la=t,Be.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ua;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ua,t)||(ua=t,Be.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ve.setAttribute(`data-rue-scope-1854ue2`,``);let da;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(da,t)||(da=t,Ve.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let fa;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(fa,t)||(fa=t,Ve.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let pa;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(pa,t)||(pa=t,Ve.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),He.setAttribute(`data-rue-scope-1854ue2`,``);let ma;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ma,t)||(ma=t,He.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ha;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ha,t)||(ha=t,He.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ga;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ga,t)||(ga=t,He.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ue.setAttribute(`class`,`scoped-style-metric`),Ue.setAttribute(`data-rue-scope-1854ue2`,``);let _a;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(_a,t)||(_a=t,Ue.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let va;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(va,t)||(va=t,Ue.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ya;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ya,t)||(ya=t,Ue.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),We.setAttribute(`data-rue-scope-1854ue2`,``);let ba;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ba,t)||(ba=t,We.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let xa;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(xa,t)||(xa=t,We.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Sa;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Sa,t)||(Sa=t,We.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ge.setAttribute(`data-rue-scope-1854ue2`,``);let Ca;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ca,t)||(Ca=t,Ge.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let wa;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(wa,t)||(wa=t,Ge.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ta;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ta,t)||(Ta=t,Ge.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ke.setAttribute(`class`,`scoped-style-slot-pill`),Ke.setAttribute(`data-rue-scope-1854ue2`,``);let Ea;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ea,t)||(Ea=t,Ke.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Da;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Da,t)||(Da=t,Ke.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Oa;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Oa,t)||(Oa=t,Ke.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),qe.setAttribute(`class`,`scoped-style-slot-pill is-hot`),qe.setAttribute(`data-rue-scope-1854ue2`,``);let ka;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ka,t)||(ka=t,qe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Aa;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Aa,t)||(Aa=t,qe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ja;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ja,t)||(ja=t,qe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Z.setAttribute(`class`,`scoped-style-lab-grid`),Z.setAttribute(`aria-label`,`scoped selector lab`),Z.setAttribute(`data-rue-scope-1854ue2`,``);let Ma;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ma,t)||(Ma=t,Z.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Na;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Na,t)||(Na=t,Z.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Pa;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Pa,t)||(Pa=t,Z.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Je.setAttribute(`class`,`scoped-style-lab-card`),Je.setAttribute(`data-rue-scope-1854ue2`,``);let Fa;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Fa,t)||(Fa=t,Je.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Ia;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Ia,t)||(Ia=t,Je.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let La;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(La,t)||(La=t,Je.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ye.setAttribute(`class`,`scoped-style-lab-badge`),Ye.setAttribute(`data-rue-scope-1854ue2`,``);let Ra;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ra,t)||(Ra=t,Ye.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let za;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(za,t)||(za=t,Ye.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ba;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ba,t)||(Ba=t,Ye.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Xe.setAttribute(`data-rue-scope-1854ue2`,``);let Va;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Va,t)||(Va=t,Xe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Ha;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Ha,t)||(Ha=t,Xe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ua;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ua,t)||(Ua=t,Xe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Ze.setAttribute(`data-rue-scope-1854ue2`,``);let Wa;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Wa,t)||(Wa=t,Ze.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Ga;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Ga,t)||(Ga=t,Ze.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ka;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ka,t)||(Ka=t,Ze.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Qe.setAttribute(`class`,`scoped-style-lab-card`),Qe.setAttribute(`data-rue-scope-1854ue2`,``);let qa;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(qa,t)||(qa=t,Qe.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Ja;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Ja,t)||(Ja=t,Qe.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ya;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ya,t)||(Ya=t,Qe.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),$e.setAttribute(`class`,`scoped-style-lab-badge`),$e.setAttribute(`data-rue-scope-1854ue2`,``);let Xa;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Xa,t)||(Xa=t,$e.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Za;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Za,t)||(Za=t,$e.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Qa;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Qa,t)||(Qa=t,$e.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),et.setAttribute(`data-rue-scope-1854ue2`,``);let $a;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is($a,t)||($a=t,et.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let eo;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(eo,t)||(eo=t,et.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let to;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(to,t)||(to=t,et.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),tt.setAttribute(`data-rue-scope-1854ue2`,``);let no;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(no,t)||(no=t,tt.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let ro;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(ro,t)||(ro=t,tt.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let io;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(io,t)||(io=t,tt.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),Q.setAttribute(`class`,`scoped-style-lab-card scoped-style-global-target`),Q.setAttribute(`data-rue-scope-1854ue2`,``);let ao;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ao,t)||(ao=t,Q.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let oo;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(oo,t)||(oo=t,Q.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let so;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(so,t)||(so=t,Q.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),nt.setAttribute(`class`,`scoped-style-lab-badge`),nt.setAttribute(`data-rue-scope-1854ue2`,``);let co;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(co,t)||(co=t,nt.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let lo;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(lo,t)||(lo=t,nt.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let uo;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(uo,t)||(uo=t,nt.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),rt.setAttribute(`data-rue-scope-1854ue2`,``);let fo;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(fo,t)||(fo=t,rt.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let po;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(po,t)||(po=t,rt.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let mo;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(mo,t)||(mo=t,rt.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),it.setAttribute(`data-rue-scope-1854ue2`,``);let ho;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(ho,t)||(ho=t,it.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let go;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(go,t)||(go=t,it.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let _o;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(_o,t)||(_o=t,it.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),at.setAttribute(`class`,`scoped-style-lab-card scoped-style-plain-alert`),at.setAttribute(`data-rue-scope-1854ue2`,``);let vo;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(vo,t)||(vo=t,at.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let yo;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(yo,t)||(yo=t,at.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let bo;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(bo,t)||(bo=t,at.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ot.setAttribute(`class`,`scoped-style-lab-badge`),ot.setAttribute(`data-rue-scope-1854ue2`,``);let xo;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(xo,t)||(xo=t,ot.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let So;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(So,t)||(So=t,ot.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Co;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Co,t)||(Co=t,ot.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),st.setAttribute(`class`,`scoped-style-global-badge`),st.setAttribute(`data-rue-scope-1854ue2`,``);let wo;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(wo,t)||(wo=t,st.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let To;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(To,t)||(To=t,st.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Eo;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Eo,t)||(Eo=t,st.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ct.setAttribute(`data-rue-scope-1854ue2`,``);let Do;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Do,t)||(Do=t,ct.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Oo;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Oo,t)||(Oo=t,ct.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let ko;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(ko,t)||(ko=t,ct.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),$.setAttribute(`class`,`scoped-style-global-note text-sm`),$.setAttribute(`data-rue-scope-1854ue2`,``);let Ao;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Ao,t)||(Ao=t,$.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let jo;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(jo,t)||(jo=t,$.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Mo;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Mo,t)||(Mo=t,$.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),lt.setAttribute(`data-rue-scope-1854ue2`,``);let No;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(No,t)||(No=t,lt.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Po;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Po,t)||(Po=t,lt.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Fo;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Fo,t)||(Fo=t,lt.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),ut.setAttribute(`data-rue-scope-1854ue2`,``);let Io;d(()=>{let e=v.value,t=e===!1||e==null?``:String(e);Object.is(Io,t)||(Io=t,ut.style.setProperty(`--rue-v-bind-1854ue2-aj1e7s`,t))});let Lo;d(()=>{let e=y.value,t=e===!1||e==null?``:String(e);Object.is(Lo,t)||(Lo=t,ut.style.setProperty(`--rue-v-bind-1854ue2-180hqf0`,t))});let Ro;d(()=>{let e=b.value,t=e===!1||e==null?``:String(e);Object.is(Ro,t)||(Ro=t,ut.style.setProperty(`--rue-v-bind-1854ue2-jcvaj4`,t))}),e({parent:ft,before:Tt},()=>_(v.value),()=>({})),e({parent:mt,before:Et},()=>_(y.value),()=>({})),e({parent:gt,before:Dt},()=>_(v.value),()=>({})),e({parent:vt,before:_t},()=>_(`accent.value = ${v.value}`),()=>({}));let zo=(e,t,n)=>{let r=()=>i(ie,()=>({}));return e==null?r():a(e,n,r)},Bo=yt.nextSibling;bt.removeChild(yt),e({parent:bt,before:Bo},()=>zo,()=>({}));let Vo=(e,t,n)=>{let r=()=>i(ae,()=>({}));return e==null?r():a(e,n,r)},Ho=xt.nextSibling;St.removeChild(xt),e({parent:St,before:Ho},()=>Vo,()=>({}));let Uo=(e,t,n)=>{let r=()=>i(oe,()=>({}));return e==null?r():a(e,n,r)},Wo=Ct.nextSibling;wt.removeChild(Ct),e({parent:wt,before:Wo},()=>Uo,()=>({}));let Go=l(``),Ko=l(``);return r.insertBefore(Go,r.firstChild),r.appendChild(Ko),[r.firstChild,r.lastChild]}))},E=(e,n,f)=>{let h=m(`preview`);return s(()=>i(y,()=>({children:(e,n,i)=>{let s=()=>o(e=>{let n=ee();n.appendChild(re().content.cloneNode(!0));let i=x().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0],f=a.childNodes[1];n.appendChild(i),s.setAttribute(`role`,`tab`);let m;d(()=>{let e=`tab ${h.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,s.setAttribute(`class`,t))}),p(te(e,s,`click`,()=>()=>{h.value=`preview`})),f.setAttribute(`role`,`tab`);let _;d(()=>{let e=`tab ${h.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(_,t)||(_=t,f.setAttribute(`class`,t))}),p(te(e,f,`click`,()=>()=>{h.value=`code`}));let y=S().content.cloneNode(!0),b=y.firstChild,ne=b.childNodes[0],ie=ne.parentNode,ae=b.childNodes[1],oe=ae.parentNode;n.appendChild(y),r(ie,ne,()=>{let e=h.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let n=u(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=u(`div`,n);return c(n,r),r.setAttribute(`class`,`card-body`),t(r,T,()=>({})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>g(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=ee();return[t.firstChild,t.lastChild]})}}),r(oe,ae,()=>{let e=h.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let n=u(`div`,e);n.setAttribute(`class`,`card overflow-auto bg-base-100 shadow`);let r=u(`div`,n);return c(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,v,()=>({className:`h-full`,lang:`tsx`,code:C,title:`Scoped style TSX`})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>g(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=ee();return[t.firstChild,t.lastChild]})}});let w=l(``),E=l(``);return n.insertBefore(w,n.firstChild),n.appendChild(E),[n.firstChild,n.lastChild]});return e==null?s():a(e,i,s)}})))};export{E as default};