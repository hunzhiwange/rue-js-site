import{$ as e,G as t,H as n,J as r,K as i,W as a,at as o,d as s,kt as c,l,q as u,st as d,tt as f,xt as p}from"./vapor-runtime-ACs_OvwU.js";import{n as m}from"./vapor-helpers-vapor-BFB_fGs4.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
.report-data1-scope.report-page {
  --rp: var(--color-primary);
  --rp-c: var(--color-primary-content);
  --rs: var(--color-secondary);
  --rs-c: var(--color-secondary-content);
  --ra: var(--color-accent);
  --ra-c: var(--color-accent-content);
  --r-base: var(--color-base-100);
  --r-base2: var(--color-base-200);
  --r-base3: var(--color-base-300);
  --r-content: var(--color-base-content);
  --r-neutral: var(--color-neutral);
  --r-neutral-c: var(--color-neutral-content);

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .report-data1-scope.report-page {
    padding: 0 32px;
  }
}

@media (min-width: 1280px) {
  .report-data1-scope.report-page {
    padding: 0 48px;
  }
}

.report-data1-scope .report-card {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid color-mix(in oklch, var(--r-base3) 60%, transparent);
  background:
    radial-gradient(ellipse 60% 50% at 95% -10%, color-mix(in oklch, var(--rp) 14%, transparent), transparent),
    radial-gradient(ellipse 40% 60% at 5% 110%, color-mix(in oklch, var(--rs) 10%, transparent), transparent),
    color-mix(in oklch, var(--r-base2) 55%, var(--r-base));
  box-shadow:
    0 4px 24px color-mix(in oklch, var(--r-base3) 30%, transparent),
    0 20px 60px -12px color-mix(in oklch, var(--r-base3) 40%, transparent);
  backdrop-filter: blur(2px);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.report-data1-scope .report-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in oklch, var(--rp) 30%, transparent) 0%,
    transparent 40%,
    transparent 60%,
    color-mix(in oklch, var(--ra) 20%, transparent) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.6;
  transition: opacity 0.4s ease;
}

.report-data1-scope .report-card:hover::before {
  opacity: 1;
}

.report-data1-scope .report-card:hover {
  box-shadow:
    0 4px 32px color-mix(in oklch, var(--rp) 12%, transparent),
    0 24px 80px -12px color-mix(in oklch, var(--r-base3) 40%, transparent);
  transform: translateY(-2px);
}

.report-data1-scope .report-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
  gap: 24px;
  padding: 36px;
}

.report-data1-scope .report-kicker,
.report-data1-scope .report-panel-eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--rp);
}

.report-data1-scope .report-hero-copy h1,
.report-data1-scope .report-panel-header h2,
.report-data1-scope .report-kpi-card h2,
.report-data1-scope .report-insight-item h3 {
  margin: 0;
}

.report-data1-scope .report-hero-copy h1 {
  max-width: 18ch;
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.05;
  color: var(--r-content);
  letter-spacing: -0.02em;
}

.report-data1-scope .report-hero-text,
.report-data1-scope .report-board-copy,
.report-data1-scope .report-panel-summary,
.report-data1-scope .report-channel-item p,
.report-data1-scope .report-insight-item p,
.report-data1-scope .report-timeline-main span,
.report-data1-scope .report-timeline-metrics span,
.report-data1-scope .report-kpi-card span {
  color: color-mix(in oklch, var(--r-content) 68%, transparent);
  line-height: 1.75;
}

.report-data1-scope .report-hero-text {
  max-width: 68ch;
  margin: 18px 0 0;
}

.report-data1-scope .report-hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.report-data1-scope .report-tag {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid color-mix(in oklch, var(--rp) 28%, transparent);
  background: color-mix(in oklch, var(--rp) 12%, transparent);
  color: var(--rp);
  font-size: 13px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.report-data1-scope .report-tag:hover {
  background: color-mix(in oklch, var(--rp) 22%, transparent);
  border-color: color-mix(in oklch, var(--rp) 45%, transparent);
  transform: translateY(-1px);
}

.report-data1-scope .report-hero-board {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  padding: 24px;
  border-radius: 24px;
  background:
    radial-gradient(ellipse 80% 50% at 20% 5%, color-mix(in oklch, var(--rp) 18%, transparent), transparent),
    color-mix(in oklch, var(--r-base3) 60%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 60%, transparent);
  box-shadow: 0 8px 32px color-mix(in oklch, var(--r-base3) 40%, transparent);
}

.report-data1-scope .report-board-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.report-data1-scope .report-board-label,
.report-data1-scope .report-board-date {
  font-size: 13px;
  font-weight: 700;
}

.report-data1-scope .report-board-label {
  color: color-mix(in oklch, var(--r-content) 55%, transparent);
}

.report-data1-scope .report-board-date {
  color: var(--rp);
}

.report-data1-scope .report-board-value {
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 800;
  line-height: 1;
  color: var(--r-content);
  background: linear-gradient(135deg, var(--r-content) 30%, var(--rp));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.report-data1-scope .report-board-copy {
  margin: 0;
}

.report-data1-scope .report-sparkline {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  min-height: 140px;
}

.report-data1-scope .report-spark-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-height: 140px;
}

.report-data1-scope .report-spark-bar {
  width: 100%;
  min-height: 10px;
  border-radius: 999px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--rp) 85%, var(--ra)), color-mix(in oklch, var(--rp) 30%, transparent));
  box-shadow: 0 10px 25px color-mix(in oklch, var(--rp) 22%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-spark-bar:hover {
  box-shadow: 0 10px 32px color-mix(in oklch, var(--rp) 38%, transparent);
  transform: scaleX(1.1);
}

.report-data1-scope .report-spark-bar.is-peak {
  background: linear-gradient(180deg, color-mix(in oklch, var(--rs) 90%, var(--rp)), color-mix(in oklch, var(--rp) 30%, transparent));
  box-shadow: 0 10px 28px color-mix(in oklch, var(--rs) 32%, transparent);
}

.report-data1-scope .report-spark-label,
.report-data1-scope .report-axis-label,
.report-data1-scope .report-grid-label {
  font-size: 11px;
  fill: color-mix(in oklch, var(--r-content) 50%, transparent);
  color: color-mix(in oklch, var(--r-content) 50%, transparent);
}

.report-data1-scope .report-kpi-grid,
.report-data1-scope .report-panel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.report-data1-scope .report-panel-grid-primary {
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.75fr);
}

.report-data1-scope .report-kpi-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.report-data1-scope .report-kpi-card {
  padding: 22px 22px 20px;
}

.report-data1-scope .report-kpi-card p {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp);
}

.report-data1-scope .report-kpi-card h2 {
  margin-top: 16px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1;
  color: var(--r-content);
}

.report-data1-scope .report-kpi-card span {
  display: block;
  margin-top: 12px;
}

.report-data1-scope .report-chart-card,
.report-data1-scope .report-channel-card,
.report-data1-scope .report-insight-card,
.report-data1-scope .report-timeline-card {
  padding: 24px;
}

.report-data1-scope .report-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.report-data1-scope .report-panel-header h2 {
  font-size: 28px;
  color: var(--r-content);
}

.report-data1-scope .report-panel-summary {
  max-width: 28ch;
  font-size: 14px;
}

.report-data1-scope .report-chart-shell {
  overflow: hidden;
  border-radius: 24px;
  background: color-mix(in oklch, var(--r-base3) 50%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 50%, transparent);
  box-shadow: inset 0 2px 12px color-mix(in oklch, var(--r-base3) 30%, transparent);
}

.report-data1-scope .report-svg-chart {
  display: block;
  width: 100%;
  height: auto;
}

.report-data1-scope .report-grid-line {
  stroke: color-mix(in oklch, var(--r-content) 10%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.report-data1-scope .report-line-path {
  fill: none;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.report-data1-scope .report-point-outer {
  fill: var(--r-base2);
  stroke: color-mix(in oklch, var(--rp) 80%, var(--r-content));
  stroke-width: 2;
  transition: r 0.3s ease;
}

.report-data1-scope .report-point-inner {
  fill: var(--rp);
}

.report-data1-scope .report-channel-body {
  position: relative;
  display: grid;
  place-items: center;
  padding: 10px 0 20px;
}

.report-data1-scope .report-donut {
  width: min(100%, 220px);
  height: auto;
}

.report-data1-scope .report-donut-track,
.report-data1-scope .report-donut-admin,
.report-data1-scope .report-donut-self {
  fill: none;
  stroke-width: 16;
  transform: rotate(-90deg);
  transform-origin: 80px 80px;
  stroke-linecap: round;
}

.report-data1-scope .report-donut-track {
  stroke: color-mix(in oklch, var(--r-content) 10%, transparent);
}

.report-data1-scope .report-donut-admin {
  stroke: var(--rp);
  filter: drop-shadow(0 0 6px color-mix(in oklch, var(--rp) 40%, transparent));
}

.report-data1-scope .report-donut-self {
  stroke: var(--ra);
  filter: drop-shadow(0 0 6px color-mix(in oklch, var(--ra) 40%, transparent));
}

.report-data1-scope .report-channel-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  pointer-events: none;
}

.report-data1-scope .report-channel-center strong {
  font-size: 32px;
  color: var(--r-content);
}

.report-data1-scope .report-channel-center span {
  font-size: 13px;
  color: color-mix(in oklch, var(--r-content) 60%, transparent);
}

.report-data1-scope .report-channel-list {
  display: grid;
  gap: 14px;
}

.report-data1-scope .report-channel-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  background: color-mix(in oklch, var(--r-base2) 30%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 30%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-channel-item:hover {
  background: color-mix(in oklch, var(--r-base2) 50%, var(--r-base));
  border-color: color-mix(in oklch, var(--r-base3) 50%, transparent);
  transform: translateX(4px);
}

.report-data1-scope .report-channel-item strong,
.report-data1-scope .report-timeline-main strong,
.report-data1-scope .report-timeline-metrics strong {
  display: block;
  color: var(--r-content);
}

.report-data1-scope .report-channel-item p {
  margin: 4px 0 0;
  font-size: 13px;
}

.report-data1-scope .report-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.report-data1-scope .report-dot-admin {
  background: var(--rp);
  box-shadow: 0 0 18px color-mix(in oklch, var(--rp) 42%, transparent);
}

.report-data1-scope .report-dot-self {
  background: var(--ra);
  box-shadow: 0 0 18px color-mix(in oklch, var(--ra) 42%, transparent);
}

.report-data1-scope .report-bars {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 14px;
  align-items: end;
  min-height: 280px;
  padding: 18px;
  border-radius: 24px;
  background: color-mix(in oklch, var(--r-base3) 40%, var(--r-base2));
  border: 1px solid color-mix(in oklch, var(--r-base3) 45%, transparent);
  box-shadow: inset 0 2px 12px color-mix(in oklch, var(--r-base3) 25%, transparent);
}

.report-data1-scope .report-bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-height: 244px;
}

.report-data1-scope .report-bar-shell {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  padding: 0 4px;
}

.report-data1-scope .report-bar-fill {
  width: 100%;
  min-height: 8px;
  border-radius: 18px 18px 6px 6px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--ra) 80%, var(--rs)), color-mix(in oklch, var(--ra) 18%, transparent));
  box-shadow: 0 4px 16px color-mix(in oklch, var(--ra) 18%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-bar-fill:hover {
  box-shadow: 0 6px 24px color-mix(in oklch, var(--ra) 30%, transparent);
  filter: brightness(1.1);
}

.report-data1-scope .report-bar-fill.is-accent {
  background: linear-gradient(180deg, color-mix(in oklch, var(--rp) 80%, var(--ra)), color-mix(in oklch, var(--rp) 18%, transparent));
  box-shadow: 0 4px 16px color-mix(in oklch, var(--rp) 18%, transparent);
}

.report-data1-scope .report-bar-fill.is-accent:hover {
  box-shadow: 0 6px 24px color-mix(in oklch, var(--rp) 30%, transparent);
}

.report-data1-scope .report-bar-group strong {
  font-size: 18px;
  color: var(--r-content);
}

.report-data1-scope .report-bar-group span {
  color: color-mix(in oklch, var(--r-content) 55%, transparent);
  font-size: 12px;
}

.report-data1-scope .report-insight-list {
  display: grid;
  gap: 14px;
}

.report-data1-scope .report-insight-item {
  padding: 18px 18px 16px;
  border-radius: 22px;
  background: color-mix(in oklch, var(--r-base2) 30%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 30%, transparent);
  border-left: 3px solid color-mix(in oklch, var(--rp) 50%, var(--rs));
  transition: all 0.3s ease;
}

.report-data1-scope .report-insight-item:hover {
  background: color-mix(in oklch, var(--r-base2) 50%, var(--r-base));
  border-left-color: var(--rp);
  transform: translateX(4px);
}

.report-data1-scope .report-insight-item h3 {
  margin-bottom: 8px;
  font-size: 18px;
  color: var(--r-content);
}

.report-data1-scope .report-insight-item p {
  margin: 0;
}

.report-data1-scope .report-timeline-list {
  display: grid;
  gap: 12px;
}

.report-data1-scope .report-timeline-row {
  display: grid;
  grid-template-columns: minmax(110px, 0.3fr) minmax(0, 1fr) minmax(220px, 0.55fr);
  gap: 18px;
  align-items: center;
  padding: 16px 18px;
  border-radius: 22px;
  background: color-mix(in oklch, var(--r-base2) 25%, var(--r-base));
  border: 1px solid color-mix(in oklch, var(--r-base3) 25%, transparent);
  transition: all 0.3s ease;
}

.report-data1-scope .report-timeline-row:hover {
  background: color-mix(in oklch, var(--r-base2) 45%, var(--r-base));
  transform: translateX(4px);
}

.report-data1-scope .report-timeline-main span,
.report-data1-scope .report-timeline-metrics span {
  display: block;
  margin-top: 4px;
  font-size: 13px;
}

.report-data1-scope .report-timeline-track {
  position: relative;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: color-mix(in oklch, var(--r-content) 10%, transparent);
}

.report-data1-scope .report-timeline-fill {
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--rs), var(--ra));
  box-shadow: 0 0 12px color-mix(in oklch, var(--rp) 20%, transparent);
  transition: filter 0.3s ease;
}

.report-data1-scope .report-timeline-row:hover .report-timeline-fill {
  filter: brightness(1.15);
}

.report-data1-scope .report-stop-area-top {
  stop-color: var(--rp);
  stop-opacity: 0.45;
}

.report-data1-scope .report-stop-area-bottom {
  stop-color: var(--rp);
  stop-opacity: 0;
}

.report-data1-scope .report-stop-line-start {
  stop-color: var(--rs);
}

.report-data1-scope .report-stop-line-end {
  stop-color: var(--ra);
}

@keyframes reportData1FloatIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.report-data1-scope .report-card,
.report-data1-scope .report-kpi-card {
  animation: reportData1FloatIn 0.6s ease both;
}

.report-data1-scope .report-kpi-card:nth-child(1) { animation-delay: 0ms; }
.report-data1-scope .report-kpi-card:nth-child(2) { animation-delay: 80ms; }
.report-data1-scope .report-kpi-card:nth-child(3) { animation-delay: 160ms; }
.report-data1-scope .report-kpi-card:nth-child(4) { animation-delay: 240ms; }

.report-data1-scope .report-timeline-row:nth-child(odd) {
  border-left: 3px solid color-mix(in oklch, var(--rp) 30%, var(--rs));
}

.report-data1-scope .report-timeline-row:nth-child(even) {
  border-left: 3px solid color-mix(in oklch, var(--ra) 30%, var(--rp));
}

@media (max-width: 1100px) {
  .report-data1-scope .report-kpi-grid,
  .report-data1-scope .report-panel-grid,
  .report-data1-scope .report-panel-grid-primary,
  .report-data1-scope .report-hero {
    grid-template-columns: 1fr;
  }

  .report-data1-scope .report-panel-header {
    flex-direction: column;
  }

  .report-data1-scope .report-panel-summary {
    max-width: none;
  }

  .report-data1-scope .report-timeline-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .report-data1-scope .report-kpi-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .report-data1-scope .report-bars,
  .report-data1-scope .report-sparkline {
    gap: 8px;
  }
}

@media (max-width: 640px) {
  .report-data1-scope.report-page {
    padding: 0 12px;
    gap: 16px;
  }

  .report-data1-scope .report-hero,
  .report-data1-scope .report-chart-card,
  .report-data1-scope .report-channel-card,
  .report-data1-scope .report-insight-card,
  .report-data1-scope .report-timeline-card {
    padding: 20px;
  }

  .report-data1-scope .report-kpi-grid {
    grid-template-columns: 1fr;
  }

  .report-data1-scope .report-bars,
  .report-data1-scope .report-sparkline {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .report-data1-scope .report-channel-item {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .report-data1-scope .report-channel-item > span:last-child {
    grid-column: 2;
  }
}
`,N=()=>s(g=>{let D=t(),re=i(`style`,D);n(D,re),c(()=>{d(re,Se)});let k=i(`div`,D);n(D,k),f(k,`report-data1-scope report-page`);let A=i(`section`,k);n(k,A),f(A,`report-hero report-card`);let N=i(`div`,A);n(A,N),f(N,`report-hero-copy`);let Ce=i(`p`,N);n(N,Ce),f(Ce,`report-kicker`),n(Ce,u(`Data Pulse / March 2026`));let we=i(`h1`,N);n(N,we),n(we,u(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=i(`p`,N);n(N,P),f(P,`report-hero-text`),n(P,u(`统计区间为 `));let Te=r(P);n(P,Te),c(()=>{d(Te,ve)}),n(P,u(`。窗口总成交额达到 `));let Ee=a(`rue:slot:anchor`);n(P,Ee),c(()=>{let e=j(y);p(()=>l(e,P,Ee))}),n(P,u(`，共形成`));let De=r(P);n(P,De),d(De,` `),n(P,u(` `));let Oe=r(P);n(P,Oe),c(()=>{d(Oe,_.format(v))}),n(P,u(` 笔订单， 其中`));let ke=r(P);n(P,ke),d(ke,` `),n(P,u(` `));let Ae=a(`rue:slot:anchor`);n(P,Ae),c(()=>{let e=_e(w.sumDate);p(()=>l(e,P,Ae))}),n(P,u(` 单日贡献 `));let je=a(`rue:slot:anchor`);n(P,je),c(()=>{let e=he(T);p(()=>l(e,P,je))}),n(P,u(` ，而退货金额维持在 `));let Me=a(`rue:slot:anchor`);n(P,Me),c(()=>{let e=j(b);p(()=>l(e,P,Me))}),n(P,u(`。`));let F=i(`div`,N);n(N,F),f(F,`report-hero-tags`);let Ne=i(`span`,F);n(F,Ne),f(Ne,`report-tag`);let Pe=r(Ne);n(Ne,Pe),c(()=>{d(Pe,S)}),n(Ne,u(` 天静默期`));let Fe=i(`span`,F);n(F,Fe),f(Fe,`report-tag`);let Ie=r(Fe);n(Fe,Ie),c(()=>{d(Ie,x)}),n(Fe,u(` 天有效成交`));let Le=i(`span`,F);n(F,Le),f(Le,`report-tag`),n(Le,u(`客户记录 `));let Re=r(Le);n(Le,Re),c(()=>{d(Re,_.format(te))});let I=i(`div`,A);n(A,I),f(I,`report-hero-board`);let L=i(`div`,I);n(I,L),f(L,`report-board-header`);let ze=i(`span`,L);n(L,ze),f(ze,`report-board-label`),n(ze,u(`峰值日`));let Be=i(`span`,L);n(L,Be),f(Be,`report-board-date`);let Ve=a(`rue:slot:anchor`);n(Be,Ve),c(()=>{let e=_e(w.sumDate);p(()=>l(e,Be,Ve))});let He=i(`div`,I);n(I,He),f(He,`report-board-value`);let Ue=a(`rue:slot:anchor`);n(He,Ue),c(()=>{let e=M(w.allAmount);p(()=>l(e,He,Ue))});let R=i(`p`,I);n(I,R),f(R,`report-board-copy`),n(R,u(`单日完成 `));let We=r(R);n(R,We),c(()=>{d(We,_.format(w.ordersCount))}),n(R,u(` 笔订单，客户均额`));let Ge=r(R);n(R,Ge),d(Ge,` `),n(R,u(` `));let Ke=a(`rue:slot:anchor`);n(R,Ke),c(()=>{let e=M(w.avgClientPrice);p(()=>l(e,R,Ke))}),n(R,u(`。`));let qe=i(`div`,I);n(I,qe),f(qe,`report-sparkline`);let Je=a(`rue:list:start`),Ye=a(`rue:list:end`);n(qe,Je),n(qe,Ye);let Xe=new Map;c(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(r,u,d,m,h)=>{l(s(()=>{let s=t(),u=i(`div`,s);n(s,u),c(()=>{e(u,`key`,String(r.sumDate))}),f(u,`report-spark-item`);let d=i(`span`,u);n(u,d),c(()=>{f(d,String(`report-spark-bar ${r.sumDate===w.sumDate?`is-peak`:``}`))}),c(()=>{o(d,{height:`${Math.max(10,r.amountRatio*100)}%`})});let m=i(`span`,u);n(u,m),f(m,`report-spark-label`);let h=a(`rue:slot:anchor`);return n(m,h),c(()=>{let e=r.label;p(()=>l(e,m,h))}),s}),u,d)}})});let Ze=i(`section`,k);n(k,Ze),f(Ze,`report-kpi-grid`);let Qe=a(`rue:list:start`),$e=a(`rue:list:end`);n(Ze,Qe),n(Ze,$e);let et=new Map;c(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(o,u,m,h,g)=>{l(s(()=>{let s=t(),u=i(`article`,s);n(s,u),c(()=>{e(u,`key`,String(o.label))}),f(u,`report-kpi-card report-card`);let m=i(`p`,u);n(u,m);let h=a(`rue:slot:anchor`);n(m,h),c(()=>{let e=o.label;p(()=>l(e,m,h))});let g=i(`h2`,u);n(u,g);let _=r(g);n(g,_),c(()=>{d(_,o.value)});let v=i(`span`,u);n(u,v);let y=a(`rue:slot:anchor`);return n(v,y),c(()=>{let e=o.detail;p(()=>l(e,v,y))}),s}),u,m)}})});let z=i(`section`,k);n(k,z),f(z,`report-panel-grid report-panel-grid-primary`);let B=i(`article`,z);n(z,B),f(B,`report-card report-chart-card report-chart-wide`);let V=i(`div`,B);n(B,V),f(V,`report-panel-header`);let tt=i(`div`,V);n(V,tt);let nt=i(`p`,tt);n(tt,nt),f(nt,`report-panel-eyebrow`),n(nt,u(`GMV Trend`));let rt=i(`h2`,tt);n(tt,rt),n(rt,u(`成交金额波动`));let it=i(`div`,V);n(V,it),f(it,`report-panel-summary`),n(it,u(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=i(`div`,B);n(B,at),f(at,`report-chart-shell`);let H=i(`svg`,at);n(at,H),c(()=>{e(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),f(H,`report-svg-chart`),e(H,`role`,`img`),e(H,`aria-label`,`每日成交金额趋势图`);let ot=i(`defs`,H);n(H,ot);let U=i(`linearGradient`,ot);n(ot,U),e(U,`id`,`reportAreaGradient`),e(U,`x1`,`0`),e(U,`x2`,`0`),e(U,`y1`,`0`),e(U,`y2`,`1`);let st=i(`stop`,U);n(U,st),e(st,`offset`,`0%`),f(st,`report-stop-area-top`);let ct=i(`stop`,U);n(U,ct),e(ct,`offset`,`100%`),f(ct,`report-stop-area-bottom`);let W=i(`linearGradient`,ot);n(ot,W),e(W,`id`,`reportLineGradient`),e(W,`x1`,`0`),e(W,`x2`,`1`),e(W,`y1`,`0`),e(W,`y2`,`0`);let lt=i(`stop`,W);n(W,lt),e(lt,`offset`,`0%`),f(lt,`report-stop-line-start`);let ut=i(`stop`,W);n(W,ut),e(ut,`offset`,`100%`),f(ut,`report-stop-line-end`);let dt=a(`rue:list:start`),ft=a(`rue:list:end`);n(H,dt),n(H,ft);let pt=new Map;c(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(a,o,u,p,m)=>{l(s(()=>{let o=t(),s=i(`g`,o);n(o,s),c(()=>{e(s,`key`,String(a.step))});let l=i(`line`,s);n(s,l),c(()=>{e(l,`x1`,String(O.left))}),c(()=>{e(l,`y1`,String(a.y))}),c(()=>{e(l,`x2`,String(ie-O.right))}),c(()=>{e(l,`y2`,String(a.y))}),f(l,`report-grid-line`);let u=i(`text`,s);n(s,u),c(()=>{e(u,`x`,String(O.left+6))}),c(()=>{e(u,`y`,String(a.y-8))}),f(u,`report-grid-label`);let p=r(u);return n(u,p),c(()=>{d(p,M(oe*a.step))}),o}),o,u)}})});let mt=i(`path`,H);n(H,mt),c(()=>{e(mt,`d`,String(ue))}),e(mt,`fill`,`url(#reportAreaGradient)`);let ht=i(`path`,H);n(H,ht),c(()=>{e(ht,`d`,String(le))}),f(ht,`report-line-path`),e(ht,`stroke`,`url(#reportLineGradient)`);let gt=a(`rue:list:start`),_t=a(`rue:list:end`);n(H,gt),n(H,_t);let vt=new Map;c(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(a,o,u,p,m)=>{l(s(()=>{let o=t(),s=i(`g`,o);n(o,s),c(()=>{e(s,`key`,String(a.row.sumDate))});let l=i(`circle`,s);n(s,l),c(()=>{e(l,`cx`,String(a.x))}),c(()=>{e(l,`cy`,String(a.y))}),c(()=>{e(l,`r`,String(a.row.sumDate===w.sumDate?7:4.5))}),f(l,`report-point-outer`);let u=i(`circle`,s);n(s,u),c(()=>{e(u,`cx`,String(a.x))}),c(()=>{e(u,`cy`,String(a.y))}),e(u,`r`,`3.2`),f(u,`report-point-inner`);let p=i(`text`,s);n(s,p),c(()=>{e(p,`x`,String(a.x))}),c(()=>{e(p,`y`,String(ae-12))}),e(p,`text-anchor`,`middle`),f(p,`report-axis-label`);let m=r(p);return n(p,m),c(()=>{d(m,ge(a.row.sumDate))}),o}),o,u)}})});let G=i(`article`,z);n(z,G),f(G,`report-card report-channel-card`);let yt=i(`div`,G);n(G,yt),f(yt,`report-panel-header`);let bt=i(`div`,yt);n(yt,bt);let xt=i(`p`,bt);n(bt,xt),f(xt,`report-panel-eyebrow`),n(xt,u(`Channel Mix`));let St=i(`h2`,bt);n(bt,St),n(St,u(`下单渠道分布`));let K=i(`div`,G);n(G,K),f(K,`report-channel-body`);let q=i(`svg`,K);n(K,q),e(q,`viewBox`,`0 0 160 160`),f(q,`report-donut`),e(q,`role`,`img`),e(q,`aria-label`,`下单渠道占比图`);let Ct=i(`circle`,q);n(q,Ct),e(Ct,`cx`,`80`),e(Ct,`cy`,`80`),c(()=>{e(Ct,`r`,String(fe))}),f(Ct,`report-donut-track`);let J=i(`circle`,q);n(q,J),e(J,`cx`,`80`),e(J,`cy`,`80`),c(()=>{e(J,`r`,String(fe))}),f(J,`report-donut-admin`),c(()=>{e(J,`stroke-dasharray`,String(`${pe}`))}),e(J,`stroke-dashoffset`,`0`);let Y=i(`circle`,q);n(q,Y),e(Y,`cx`,`80`),e(Y,`cy`,`80`),c(()=>{e(Y,`r`,String(fe))}),f(Y,`report-donut-self`),c(()=>{e(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),c(()=>{e(Y,`stroke-dashoffset`,String(-me))});let X=i(`div`,K);n(K,X),f(X,`report-channel-center`);let wt=i(`strong`,X);n(X,wt);let Tt=a(`rue:slot:anchor`);n(wt,Tt),c(()=>{let e=he(E);p(()=>l(e,wt,Tt))});let Et=i(`span`,X);n(X,Et),n(Et,u(`后台代客`));let Dt=i(`div`,G);n(G,Dt),f(Dt,`report-channel-list`);let Z=i(`div`,Dt);n(Dt,Z),f(Z,`report-channel-item`);let Ot=i(`span`,Z);n(Z,Ot),f(Ot,`report-dot report-dot-admin`);let kt=i(`div`,Z);n(Z,kt);let At=i(`strong`,kt);n(kt,At),n(At,u(`后台代客下单`));let jt=i(`p`,kt);n(kt,jt);let Mt=a(`rue:slot:anchor`);n(jt,Mt),c(()=>{let e=j(ee);p(()=>l(e,jt,Mt))});let Nt=i(`span`,Z);n(Z,Nt);let Pt=a(`rue:slot:anchor`);n(Nt,Pt),c(()=>{let e=he(E);p(()=>l(e,Nt,Pt))});let Q=i(`div`,Dt);n(Dt,Q),f(Q,`report-channel-item`);let Ft=i(`span`,Q);n(Q,Ft),f(Ft,`report-dot report-dot-self`);let It=i(`div`,Q);n(Q,It);let Lt=i(`strong`,It);n(It,Lt),n(Lt,u(`客户自主下单`));let Rt=i(`p`,It);n(It,Rt);let zt=a(`rue:slot:anchor`);n(Rt,zt),c(()=>{let e=j(C);p(()=>l(e,Rt,zt))});let Bt=i(`span`,Q);n(Q,Bt);let Vt=a(`rue:slot:anchor`);n(Bt,Vt),c(()=>{let e=he(ne);p(()=>l(e,Bt,Vt))});let Ht=i(`section`,k);n(k,Ht),f(Ht,`report-panel-grid`);let Ut=i(`article`,Ht);n(Ht,Ut),f(Ut,`report-card report-chart-card`);let Wt=i(`div`,Ut);n(Ut,Wt),f(Wt,`report-panel-header`);let Gt=i(`div`,Wt);n(Wt,Gt);let Kt=i(`p`,Gt);n(Gt,Kt),f(Kt,`report-panel-eyebrow`),n(Kt,u(`Order Volume`));let qt=i(`h2`,Gt);n(Gt,qt),n(qt,u(`每日订单笔数`));let Jt=i(`div`,Wt);n(Wt,Jt),f(Jt,`report-panel-summary`),n(Jt,u(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=i(`div`,Ut);n(Ut,Yt),f(Yt,`report-bars`);let Xt=a(`rue:list:start`),Zt=a(`rue:list:end`);n(Yt,Xt),n(Yt,Zt);let Qt=new Map;c(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(u,m,h,g,v)=>{l(s(()=>{let s=t(),m=i(`div`,s);n(s,m),c(()=>{e(m,`key`,String(u.sumDate))}),f(m,`report-bar-group`);let h=i(`div`,m);n(m,h),f(h,`report-bar-shell`);let g=i(`div`,h);n(h,g),c(()=>{f(g,String(`report-bar-fill ${u.sumDate===w.sumDate?`is-accent`:``}`))}),c(()=>{o(g,{height:`${Math.max(8,u.ordersCount/se*100)}%`})});let v=i(`strong`,m);n(m,v);let y=r(v);n(v,y),c(()=>{d(y,_.format(u.ordersCount))});let b=i(`span`,m);n(m,b);let x=a(`rue:slot:anchor`);return n(b,x),c(()=>{let e=ge(u.sumDate);p(()=>l(e,b,x))}),s}),m,h)}})});let $t=i(`article`,Ht);n(Ht,$t),f($t,`report-card report-insight-card`);let en=i(`div`,$t);n($t,en),f(en,`report-panel-header`);let tn=i(`div`,en);n(en,tn);let nn=i(`p`,tn);n(tn,nn),f(nn,`report-panel-eyebrow`),n(nn,u(`Signals`));let rn=i(`h2`,tn);n(tn,rn),n(rn,u(`关键观察`));let an=i(`div`,$t);n($t,an),f(an,`report-insight-list`);let on=a(`rue:list:start`),sn=a(`rue:list:end`);n(an,on),n(an,sn);let cn=new Map;c(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(r,o,u,d,m)=>{l(s(()=>{let o=t(),s=i(`article`,o);n(o,s),c(()=>{e(s,`key`,String(r.title))}),f(s,`report-insight-item`);let u=i(`h3`,s);n(s,u);let d=a(`rue:slot:anchor`);n(u,d),c(()=>{let e=r.title;p(()=>l(e,u,d))});let m=i(`p`,s);n(s,m);let h=a(`rue:slot:anchor`);return n(m,h),c(()=>{let e=r.text;p(()=>l(e,m,h))}),o}),o,u)}})});let ln=i(`section`,k);n(k,ln),f(ln,`report-card report-timeline-card`);let $=i(`div`,ln);n(ln,$),f($,`report-panel-header`);let un=i(`div`,$);n($,un);let dn=i(`p`,un);n(un,dn),f(dn,`report-panel-eyebrow`),n(dn,u(`Daily Playback`));let fn=i(`h2`,un);n(un,fn),n(fn,u(`逐日回放`));let pn=i(`div`,$);n($,pn),f(pn,`report-panel-summary`),n(pn,u(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=i(`div`,ln);n(ln,mn),f(mn,`report-timeline-list`);let hn=a(`rue:list:start`),gn=a(`rue:list:end`);n(mn,hn),n(mn,gn);let _n=new Map;return c(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{l(s(()=>{let s=t(),h=i(`div`,s);n(s,h),c(()=>{e(h,`key`,String(m.sumDate))}),f(h,`report-timeline-row`);let g=i(`div`,h);n(h,g),f(g,`report-timeline-main`);let v=i(`strong`,g);n(g,v);let y=a(`rue:slot:anchor`);n(v,y),c(()=>{let e=m.label;p(()=>l(e,v,y))});let b=i(`span`,g);n(g,b);let x=a(`rue:slot:anchor`);n(b,x),c(()=>{let e=m.notes;p(()=>l(e,b,x))});let S=i(`div`,h);n(h,S),f(S,`report-timeline-track`);let ee=i(`span`,S);n(S,ee),f(ee,`report-timeline-fill`),c(()=>{o(ee,{width:`${Math.max(4,m.amountRatio*100)}%`})});let C=i(`div`,h);n(h,C),f(C,`report-timeline-metrics`);let te=i(`strong`,C);n(C,te);let w=a(`rue:slot:anchor`);n(te,w),c(()=>{let e=M(m.allAmount);p(()=>l(e,te,w))});let T=i(`span`,C);n(C,T);let E=r(T);n(T,E),c(()=>{d(E,_.format(m.ordersCount))}),n(T,u(` 笔 / 客户均额`));let ne=r(T);n(T,ne),d(ne,` `),n(T,u(` `));let D=a(`rue:slot:anchor`);return n(T,D),c(()=>{let e=M(m.avgClientPrice);p(()=>l(e,T,D))}),s}),h,g)}})}),D});export{N as default};