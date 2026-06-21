import{$t as e,Q as t,dt as n,et as r,gt as i,it as a,l as o,lt as s,nt as c,o as l,rt as u,tt as d,vt as f,zt as p}from"./vapor-runtime-DsQWl-IB.js";import{n as m}from"./vapor-helpers-vapor-Dg64FcpK.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
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
`,N=()=>o(g=>{let D=d(),re=c(`style`,D);t(D,re),p(()=>{f(re,Se)});let k=c(`div`,D);t(D,k),n(k,`report-data1-scope report-page`);let A=c(`section`,k);t(k,A),n(A,`report-hero report-card`);let N=c(`div`,A);t(A,N),n(N,`report-hero-copy`);let Ce=c(`p`,N);t(N,Ce),n(Ce,`report-kicker`),t(Ce,u(`Data Pulse / March 2026`));let we=c(`h1`,N);t(N,we),t(we,u(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=c(`p`,N);t(N,P),n(P,`report-hero-text`),t(P,u(`统计区间为 `));let Te=r(`rue:slot:anchor`);t(P,Te),p(()=>{let t=ve;e(()=>l(t,P,Te))}),t(P,u(`。窗口总成交额达到 `));let Ee=r(`rue:slot:anchor`);t(P,Ee),p(()=>{let t=j(y);e(()=>l(t,P,Ee))}),t(P,u(`，共形成`));let De=a(P);t(P,De),f(De,` `),t(P,u(` `));let Oe=a(P);t(P,Oe),p(()=>{f(Oe,_.format(v))}),t(P,u(` 笔订单， 其中`));let ke=a(P);t(P,ke),f(ke,` `),t(P,u(` `));let Ae=r(`rue:slot:anchor`);t(P,Ae),p(()=>{let t=_e(w.sumDate);e(()=>l(t,P,Ae))}),t(P,u(` 单日贡献 `));let je=r(`rue:slot:anchor`);t(P,je),p(()=>{let t=he(T);e(()=>l(t,P,je))}),t(P,u(` ，而退货金额维持在 `));let Me=r(`rue:slot:anchor`);t(P,Me),p(()=>{let t=j(b);e(()=>l(t,P,Me))}),t(P,u(`。`));let F=c(`div`,N);t(N,F),n(F,`report-hero-tags`);let Ne=c(`span`,F);t(F,Ne),n(Ne,`report-tag`);let Pe=r(`rue:slot:anchor`);t(Ne,Pe),p(()=>{let t=S;e(()=>l(t,Ne,Pe))}),t(Ne,u(` 天静默期`));let Fe=c(`span`,F);t(F,Fe),n(Fe,`report-tag`);let Ie=r(`rue:slot:anchor`);t(Fe,Ie),p(()=>{let t=x;e(()=>l(t,Fe,Ie))}),t(Fe,u(` 天有效成交`));let Le=c(`span`,F);t(F,Le),n(Le,`report-tag`),t(Le,u(`客户记录 `));let Re=a(Le);t(Le,Re),p(()=>{f(Re,_.format(te))});let I=c(`div`,A);t(A,I),n(I,`report-hero-board`);let L=c(`div`,I);t(I,L),n(L,`report-board-header`);let ze=c(`span`,L);t(L,ze),n(ze,`report-board-label`),t(ze,u(`峰值日`));let Be=c(`span`,L);t(L,Be),n(Be,`report-board-date`);let Ve=r(`rue:slot:anchor`);t(Be,Ve),p(()=>{let t=_e(w.sumDate);e(()=>l(t,Be,Ve))});let He=c(`div`,I);t(I,He),n(He,`report-board-value`);let Ue=r(`rue:slot:anchor`);t(He,Ue),p(()=>{let t=M(w.allAmount);e(()=>l(t,He,Ue))});let R=c(`p`,I);t(I,R),n(R,`report-board-copy`),t(R,u(`单日完成 `));let We=a(R);t(R,We),p(()=>{f(We,_.format(w.ordersCount))}),t(R,u(` 笔订单，客户均额`));let Ge=a(R);t(R,Ge),f(Ge,` `),t(R,u(` `));let Ke=r(`rue:slot:anchor`);t(R,Ke),p(()=>{let t=M(w.avgClientPrice);e(()=>l(t,R,Ke))}),t(R,u(`。`));let qe=c(`div`,I);t(I,qe),n(qe,`report-sparkline`);let Je=r(`rue:list:start`),Ye=r(`rue:list:end`);t(qe,Je),t(qe,Ye);let Xe=new Map;p(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(a,u,f,m,h)=>{l(o(()=>{let o=d(),u=c(`div`,o);t(o,u),p(()=>{s(u,`key`,String(a.sumDate))}),n(u,`report-spark-item`);let f=c(`span`,u);t(u,f),p(()=>{n(f,`report-spark-bar ${a.sumDate===w.sumDate?`is-peak`:``}`)}),p(()=>{i(f,{height:`${Math.max(10,a.amountRatio*100)}%`})});let m=c(`span`,u);t(u,m),n(m,`report-spark-label`);let h=r(`rue:slot:anchor`);return t(m,h),p(()=>{let t=a.label;e(()=>l(t,m,h))}),o}),u,f)}})});let Ze=c(`section`,k);t(k,Ze),n(Ze,`report-kpi-grid`);let Qe=r(`rue:list:start`),$e=r(`rue:list:end`);t(Ze,Qe),t(Ze,$e);let et=new Map;p(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(i,u,m,h,g)=>{l(o(()=>{let o=d(),u=c(`article`,o);t(o,u),p(()=>{s(u,`key`,String(i.label))}),n(u,`report-kpi-card report-card`);let m=c(`p`,u);t(u,m);let h=r(`rue:slot:anchor`);t(m,h),p(()=>{let t=i.label;e(()=>l(t,m,h))});let g=c(`h2`,u);t(u,g);let _=a(g);t(g,_),p(()=>{f(_,i.value)});let v=c(`span`,u);t(u,v);let y=r(`rue:slot:anchor`);return t(v,y),p(()=>{let t=i.detail;e(()=>l(t,v,y))}),o}),u,m)}})});let z=c(`section`,k);t(k,z),n(z,`report-panel-grid report-panel-grid-primary`);let B=c(`article`,z);t(z,B),n(B,`report-card report-chart-card report-chart-wide`);let V=c(`div`,B);t(B,V),n(V,`report-panel-header`);let tt=c(`div`,V);t(V,tt);let nt=c(`p`,tt);t(tt,nt),n(nt,`report-panel-eyebrow`),t(nt,u(`GMV Trend`));let rt=c(`h2`,tt);t(tt,rt),t(rt,u(`成交金额波动`));let it=c(`div`,V);t(V,it),n(it,`report-panel-summary`),t(it,u(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=c(`div`,B);t(B,at),n(at,`report-chart-shell`);let H=c(`svg`,at);t(at,H),p(()=>{s(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),n(H,`report-svg-chart`),s(H,`role`,`img`),s(H,`aria-label`,`每日成交金额趋势图`);let ot=c(`defs`,H);t(H,ot);let U=c(`linearGradient`,ot);t(ot,U),s(U,`id`,`reportAreaGradient`),s(U,`x1`,`0`),s(U,`x2`,`0`),s(U,`y1`,`0`),s(U,`y2`,`1`);let st=c(`stop`,U);t(U,st),s(st,`offset`,`0%`),n(st,`report-stop-area-top`);let ct=c(`stop`,U);t(U,ct),s(ct,`offset`,`100%`),n(ct,`report-stop-area-bottom`);let W=c(`linearGradient`,ot);t(ot,W),s(W,`id`,`reportLineGradient`),s(W,`x1`,`0`),s(W,`x2`,`1`),s(W,`y1`,`0`),s(W,`y2`,`0`);let lt=c(`stop`,W);t(W,lt),s(lt,`offset`,`0%`),n(lt,`report-stop-line-start`);let ut=c(`stop`,W);t(W,ut),s(ut,`offset`,`100%`),n(ut,`report-stop-line-end`);let dt=r(`rue:list:start`),ft=r(`rue:list:end`);t(H,dt),t(H,ft);let pt=new Map;p(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(e,r,i,u,m)=>{l(o(()=>{let r=d(),i=c(`g`,r);t(r,i),p(()=>{s(i,`key`,String(e.step))});let o=c(`line`,i);t(i,o),p(()=>{s(o,`x1`,String(O.left))}),p(()=>{s(o,`y1`,String(e.y))}),p(()=>{s(o,`x2`,String(ie-O.right))}),p(()=>{s(o,`y2`,String(e.y))}),n(o,`report-grid-line`);let l=c(`text`,i);t(i,l),p(()=>{s(l,`x`,String(O.left+6))}),p(()=>{s(l,`y`,String(e.y-8))}),n(l,`report-grid-label`);let u=a(l);return t(l,u),p(()=>{f(u,M(oe*e.step))}),r}),r,i)}})});let mt=c(`path`,H);t(H,mt),p(()=>{s(mt,`d`,String(ue))}),s(mt,`fill`,`url(#reportAreaGradient)`);let ht=c(`path`,H);t(H,ht),p(()=>{s(ht,`d`,String(le))}),n(ht,`report-line-path`),s(ht,`stroke`,`url(#reportLineGradient)`);let gt=r(`rue:list:start`),_t=r(`rue:list:end`);t(H,gt),t(H,_t);let vt=new Map;p(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(e,r,i,u,m)=>{l(o(()=>{let r=d(),i=c(`g`,r);t(r,i),p(()=>{s(i,`key`,String(e.row.sumDate))});let o=c(`circle`,i);t(i,o),p(()=>{s(o,`cx`,String(e.x))}),p(()=>{s(o,`cy`,String(e.y))}),p(()=>{s(o,`r`,String(e.row.sumDate===w.sumDate?7:4.5))}),n(o,`report-point-outer`);let l=c(`circle`,i);t(i,l),p(()=>{s(l,`cx`,String(e.x))}),p(()=>{s(l,`cy`,String(e.y))}),s(l,`r`,`3.2`),n(l,`report-point-inner`);let u=c(`text`,i);t(i,u),p(()=>{s(u,`x`,String(e.x))}),p(()=>{s(u,`y`,String(ae-12))}),s(u,`text-anchor`,`middle`),n(u,`report-axis-label`);let m=a(u);return t(u,m),p(()=>{f(m,ge(e.row.sumDate))}),r}),r,i)}})});let G=c(`article`,z);t(z,G),n(G,`report-card report-channel-card`);let yt=c(`div`,G);t(G,yt),n(yt,`report-panel-header`);let bt=c(`div`,yt);t(yt,bt);let xt=c(`p`,bt);t(bt,xt),n(xt,`report-panel-eyebrow`),t(xt,u(`Channel Mix`));let St=c(`h2`,bt);t(bt,St),t(St,u(`下单渠道分布`));let K=c(`div`,G);t(G,K),n(K,`report-channel-body`);let q=c(`svg`,K);t(K,q),s(q,`viewBox`,`0 0 160 160`),n(q,`report-donut`),s(q,`role`,`img`),s(q,`aria-label`,`下单渠道占比图`);let Ct=c(`circle`,q);t(q,Ct),s(Ct,`cx`,`80`),s(Ct,`cy`,`80`),p(()=>{s(Ct,`r`,String(fe))}),n(Ct,`report-donut-track`);let J=c(`circle`,q);t(q,J),s(J,`cx`,`80`),s(J,`cy`,`80`),p(()=>{s(J,`r`,String(fe))}),n(J,`report-donut-admin`),p(()=>{s(J,`stroke-dasharray`,String(`${pe}`))}),s(J,`stroke-dashoffset`,`0`);let Y=c(`circle`,q);t(q,Y),s(Y,`cx`,`80`),s(Y,`cy`,`80`),p(()=>{s(Y,`r`,String(fe))}),n(Y,`report-donut-self`),p(()=>{s(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),p(()=>{s(Y,`stroke-dashoffset`,String(-me))});let X=c(`div`,K);t(K,X),n(X,`report-channel-center`);let wt=c(`strong`,X);t(X,wt);let Tt=r(`rue:slot:anchor`);t(wt,Tt),p(()=>{let t=he(E);e(()=>l(t,wt,Tt))});let Et=c(`span`,X);t(X,Et),t(Et,u(`后台代客`));let Dt=c(`div`,G);t(G,Dt),n(Dt,`report-channel-list`);let Z=c(`div`,Dt);t(Dt,Z),n(Z,`report-channel-item`);let Ot=c(`span`,Z);t(Z,Ot),n(Ot,`report-dot report-dot-admin`);let kt=c(`div`,Z);t(Z,kt);let At=c(`strong`,kt);t(kt,At),t(At,u(`后台代客下单`));let jt=c(`p`,kt);t(kt,jt);let Mt=r(`rue:slot:anchor`);t(jt,Mt),p(()=>{let t=j(ee);e(()=>l(t,jt,Mt))});let Nt=c(`span`,Z);t(Z,Nt);let Pt=r(`rue:slot:anchor`);t(Nt,Pt),p(()=>{let t=he(E);e(()=>l(t,Nt,Pt))});let Q=c(`div`,Dt);t(Dt,Q),n(Q,`report-channel-item`);let Ft=c(`span`,Q);t(Q,Ft),n(Ft,`report-dot report-dot-self`);let It=c(`div`,Q);t(Q,It);let Lt=c(`strong`,It);t(It,Lt),t(Lt,u(`客户自主下单`));let Rt=c(`p`,It);t(It,Rt);let zt=r(`rue:slot:anchor`);t(Rt,zt),p(()=>{let t=j(C);e(()=>l(t,Rt,zt))});let Bt=c(`span`,Q);t(Q,Bt);let Vt=r(`rue:slot:anchor`);t(Bt,Vt),p(()=>{let t=he(ne);e(()=>l(t,Bt,Vt))});let Ht=c(`section`,k);t(k,Ht),n(Ht,`report-panel-grid`);let Ut=c(`article`,Ht);t(Ht,Ut),n(Ut,`report-card report-chart-card`);let Wt=c(`div`,Ut);t(Ut,Wt),n(Wt,`report-panel-header`);let Gt=c(`div`,Wt);t(Wt,Gt);let Kt=c(`p`,Gt);t(Gt,Kt),n(Kt,`report-panel-eyebrow`),t(Kt,u(`Order Volume`));let qt=c(`h2`,Gt);t(Gt,qt),t(qt,u(`每日订单笔数`));let Jt=c(`div`,Wt);t(Wt,Jt),n(Jt,`report-panel-summary`),t(Jt,u(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=c(`div`,Ut);t(Ut,Yt),n(Yt,`report-bars`);let Xt=r(`rue:list:start`),Zt=r(`rue:list:end`);t(Yt,Xt),t(Yt,Zt);let Qt=new Map;p(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(u,m,h,g,v)=>{l(o(()=>{let o=d(),m=c(`div`,o);t(o,m),p(()=>{s(m,`key`,String(u.sumDate))}),n(m,`report-bar-group`);let h=c(`div`,m);t(m,h),n(h,`report-bar-shell`);let g=c(`div`,h);t(h,g),p(()=>{n(g,`report-bar-fill ${u.sumDate===w.sumDate?`is-accent`:``}`)}),p(()=>{i(g,{height:`${Math.max(8,u.ordersCount/se*100)}%`})});let v=c(`strong`,m);t(m,v);let y=a(v);t(v,y),p(()=>{f(y,_.format(u.ordersCount))});let b=c(`span`,m);t(m,b);let x=r(`rue:slot:anchor`);return t(b,x),p(()=>{let t=ge(u.sumDate);e(()=>l(t,b,x))}),o}),m,h)}})});let $t=c(`article`,Ht);t(Ht,$t),n($t,`report-card report-insight-card`);let en=c(`div`,$t);t($t,en),n(en,`report-panel-header`);let tn=c(`div`,en);t(en,tn);let nn=c(`p`,tn);t(tn,nn),n(nn,`report-panel-eyebrow`),t(nn,u(`Signals`));let rn=c(`h2`,tn);t(tn,rn),t(rn,u(`关键观察`));let an=c(`div`,$t);t($t,an),n(an,`report-insight-list`);let on=r(`rue:list:start`),sn=r(`rue:list:end`);t(an,on),t(an,sn);let cn=new Map;p(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(i,a,u,f,m)=>{l(o(()=>{let a=d(),o=c(`article`,a);t(a,o),p(()=>{s(o,`key`,String(i.title))}),n(o,`report-insight-item`);let u=c(`h3`,o);t(o,u);let f=r(`rue:slot:anchor`);t(u,f),p(()=>{let t=i.title;e(()=>l(t,u,f))});let m=c(`p`,o);t(o,m);let h=r(`rue:slot:anchor`);return t(m,h),p(()=>{let t=i.text;e(()=>l(t,m,h))}),a}),a,u)}})});let ln=c(`section`,k);t(k,ln),n(ln,`report-card report-timeline-card`);let $=c(`div`,ln);t(ln,$),n($,`report-panel-header`);let un=c(`div`,$);t($,un);let dn=c(`p`,un);t(un,dn),n(dn,`report-panel-eyebrow`),t(dn,u(`Daily Playback`));let fn=c(`h2`,un);t(un,fn),t(fn,u(`逐日回放`));let pn=c(`div`,$);t($,pn),n(pn,`report-panel-summary`),t(pn,u(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=c(`div`,ln);t(ln,mn),n(mn,`report-timeline-list`);let hn=r(`rue:list:start`),gn=r(`rue:list:end`);t(mn,hn),t(mn,gn);let _n=new Map;return p(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{l(o(()=>{let o=d(),h=c(`div`,o);t(o,h),p(()=>{s(h,`key`,String(m.sumDate))}),n(h,`report-timeline-row`);let g=c(`div`,h);t(h,g),n(g,`report-timeline-main`);let v=c(`strong`,g);t(g,v);let y=r(`rue:slot:anchor`);t(v,y),p(()=>{let t=m.label;e(()=>l(t,v,y))});let b=c(`span`,g);t(g,b);let x=r(`rue:slot:anchor`);t(b,x),p(()=>{let t=m.notes;e(()=>l(t,b,x))});let S=c(`div`,h);t(h,S),n(S,`report-timeline-track`);let ee=c(`span`,S);t(S,ee),n(ee,`report-timeline-fill`),p(()=>{i(ee,{width:`${Math.max(4,m.amountRatio*100)}%`})});let C=c(`div`,h);t(h,C),n(C,`report-timeline-metrics`);let te=c(`strong`,C);t(C,te);let w=r(`rue:slot:anchor`);t(te,w),p(()=>{let t=M(m.allAmount);e(()=>l(t,te,w))});let T=c(`span`,C);t(C,T);let E=a(T);t(T,E),p(()=>{f(E,_.format(m.ordersCount))}),t(T,u(` 笔 / 客户均额`));let ne=a(T);t(T,ne),f(ne,` `),t(T,u(` `));let D=r(`rue:slot:anchor`);return t(T,D),p(()=>{let t=M(m.avgClientPrice);e(()=>l(t,T,D))}),o}),h,g)}})}),D});export{N as default};