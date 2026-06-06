import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,l as u,rt as d,s as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{n as m}from"./vapor-helpers-vapor-HR6N5lMH.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
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
`,N=()=>u(g=>{let D=o(),re=s(`style`,D);t(D,re),n(()=>{l(re,Se)});let k=s(`div`,D);t(D,k),e(k,`report-data1-scope report-page`);let A=s(`section`,k);t(k,A),e(A,`report-hero report-card`);let N=s(`div`,A);t(A,N),e(N,`report-hero-copy`);let Ce=s(`p`,N);t(N,Ce),e(Ce,`report-kicker`),t(Ce,r(`Data Pulse / March 2026`));let we=s(`h1`,N);t(N,we),t(we,r(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=s(`p`,N);t(N,P),e(P,`report-hero-text`),t(P,r(`统计区间为 `));let Te=a(P);t(P,Te),n(()=>{l(Te,ve)}),t(P,r(`。窗口总成交额达到 `));let Ee=i(`rue:slot:anchor`);t(P,Ee),n(()=>{let e=j(y);p(()=>f(e,P,Ee))}),t(P,r(`，共形成`));let De=a(P);t(P,De),l(De,` `),t(P,r(` `));let Oe=a(P);t(P,Oe),n(()=>{l(Oe,_.format(v))}),t(P,r(` 笔订单， 其中`));let ke=a(P);t(P,ke),l(ke,` `),t(P,r(` `));let Ae=i(`rue:slot:anchor`);t(P,Ae),n(()=>{let e=_e(w.sumDate);p(()=>f(e,P,Ae))}),t(P,r(` 单日贡献 `));let je=i(`rue:slot:anchor`);t(P,je),n(()=>{let e=he(T);p(()=>f(e,P,je))}),t(P,r(` ，而退货金额维持在 `));let Me=i(`rue:slot:anchor`);t(P,Me),n(()=>{let e=j(b);p(()=>f(e,P,Me))}),t(P,r(`。`));let F=s(`div`,N);t(N,F),e(F,`report-hero-tags`);let Ne=s(`span`,F);t(F,Ne),e(Ne,`report-tag`);let Pe=a(Ne);t(Ne,Pe),n(()=>{l(Pe,S)}),t(Ne,r(` 天静默期`));let Fe=s(`span`,F);t(F,Fe),e(Fe,`report-tag`);let Ie=a(Fe);t(Fe,Ie),n(()=>{l(Ie,x)}),t(Fe,r(` 天有效成交`));let Le=s(`span`,F);t(F,Le),e(Le,`report-tag`),t(Le,r(`客户记录 `));let Re=a(Le);t(Le,Re),n(()=>{l(Re,_.format(te))});let I=s(`div`,A);t(A,I),e(I,`report-hero-board`);let L=s(`div`,I);t(I,L),e(L,`report-board-header`);let ze=s(`span`,L);t(L,ze),e(ze,`report-board-label`),t(ze,r(`峰值日`));let Be=s(`span`,L);t(L,Be),e(Be,`report-board-date`);let Ve=i(`rue:slot:anchor`);t(Be,Ve),n(()=>{let e=_e(w.sumDate);p(()=>f(e,Be,Ve))});let He=s(`div`,I);t(I,He),e(He,`report-board-value`);let Ue=i(`rue:slot:anchor`);t(He,Ue),n(()=>{let e=M(w.allAmount);p(()=>f(e,He,Ue))});let R=s(`p`,I);t(I,R),e(R,`report-board-copy`),t(R,r(`单日完成 `));let We=a(R);t(R,We),n(()=>{l(We,_.format(w.ordersCount))}),t(R,r(` 笔订单，客户均额`));let Ge=a(R);t(R,Ge),l(Ge,` `),t(R,r(` `));let Ke=i(`rue:slot:anchor`);t(R,Ke),n(()=>{let e=M(w.avgClientPrice);p(()=>f(e,R,Ke))}),t(R,r(`。`));let qe=s(`div`,I);t(I,qe),e(qe,`report-sparkline`);let Je=i(`rue:list:start`),Ye=i(`rue:list:end`);t(qe,Je),t(qe,Ye);let Xe=new Map;n(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(r,a,l,m,h)=>{f(u(()=>{let a=o(),l=s(`div`,a);t(a,l),n(()=>{c(l,`key`,String(r.sumDate))}),e(l,`report-spark-item`);let u=s(`span`,l);t(l,u),n(()=>{e(u,String(`report-spark-bar ${r.sumDate===w.sumDate?`is-peak`:``}`))}),n(()=>{d(u,{height:`${Math.max(10,r.amountRatio*100)}%`})});let m=s(`span`,l);t(l,m),e(m,`report-spark-label`);let h=i(`rue:slot:anchor`);return t(m,h),n(()=>{let e=r.label;p(()=>f(e,m,h))}),a}),a,l)}})});let Ze=s(`section`,k);t(k,Ze),e(Ze,`report-kpi-grid`);let Qe=i(`rue:list:start`),$e=i(`rue:list:end`);t(Ze,Qe),t(Ze,$e);let et=new Map;n(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(r,d,m,h,g)=>{f(u(()=>{let u=o(),d=s(`article`,u);t(u,d),n(()=>{c(d,`key`,String(r.label))}),e(d,`report-kpi-card report-card`);let m=s(`p`,d);t(d,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let e=r.label;p(()=>f(e,m,h))});let g=s(`h2`,d);t(d,g);let _=a(g);t(g,_),n(()=>{l(_,r.value)});let v=s(`span`,d);t(d,v);let y=i(`rue:slot:anchor`);return t(v,y),n(()=>{let e=r.detail;p(()=>f(e,v,y))}),u}),d,m)}})});let z=s(`section`,k);t(k,z),e(z,`report-panel-grid report-panel-grid-primary`);let B=s(`article`,z);t(z,B),e(B,`report-card report-chart-card report-chart-wide`);let V=s(`div`,B);t(B,V),e(V,`report-panel-header`);let tt=s(`div`,V);t(V,tt);let nt=s(`p`,tt);t(tt,nt),e(nt,`report-panel-eyebrow`),t(nt,r(`GMV Trend`));let rt=s(`h2`,tt);t(tt,rt),t(rt,r(`成交金额波动`));let it=s(`div`,V);t(V,it),e(it,`report-panel-summary`),t(it,r(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=s(`div`,B);t(B,at),e(at,`report-chart-shell`);let H=s(`svg`,at);t(at,H),n(()=>{c(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),e(H,`report-svg-chart`),c(H,`role`,`img`),c(H,`aria-label`,`每日成交金额趋势图`);let ot=s(`defs`,H);t(H,ot);let U=s(`linearGradient`,ot);t(ot,U),c(U,`id`,`reportAreaGradient`),c(U,`x1`,`0`),c(U,`x2`,`0`),c(U,`y1`,`0`),c(U,`y2`,`1`);let st=s(`stop`,U);t(U,st),c(st,`offset`,`0%`),e(st,`report-stop-area-top`);let ct=s(`stop`,U);t(U,ct),c(ct,`offset`,`100%`),e(ct,`report-stop-area-bottom`);let W=s(`linearGradient`,ot);t(ot,W),c(W,`id`,`reportLineGradient`),c(W,`x1`,`0`),c(W,`x2`,`1`),c(W,`y1`,`0`),c(W,`y2`,`0`);let lt=s(`stop`,W);t(W,lt),c(lt,`offset`,`0%`),e(lt,`report-stop-line-start`);let ut=s(`stop`,W);t(W,ut),c(ut,`offset`,`100%`),e(ut,`report-stop-line-end`);let dt=i(`rue:list:start`),ft=i(`rue:list:end`);t(H,dt),t(H,ft);let pt=new Map;n(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(r,i,d,p,m)=>{f(u(()=>{let i=o(),u=s(`g`,i);t(i,u),n(()=>{c(u,`key`,String(r.step))});let d=s(`line`,u);t(u,d),n(()=>{c(d,`x1`,String(O.left))}),n(()=>{c(d,`y1`,String(r.y))}),n(()=>{c(d,`x2`,String(ie-O.right))}),n(()=>{c(d,`y2`,String(r.y))}),e(d,`report-grid-line`);let f=s(`text`,u);t(u,f),n(()=>{c(f,`x`,String(O.left+6))}),n(()=>{c(f,`y`,String(r.y-8))}),e(f,`report-grid-label`);let p=a(f);return t(f,p),n(()=>{l(p,M(oe*r.step))}),i}),i,d)}})});let mt=s(`path`,H);t(H,mt),n(()=>{c(mt,`d`,String(ue))}),c(mt,`fill`,`url(#reportAreaGradient)`);let ht=s(`path`,H);t(H,ht),n(()=>{c(ht,`d`,String(le))}),e(ht,`report-line-path`),c(ht,`stroke`,`url(#reportLineGradient)`);let gt=i(`rue:list:start`),_t=i(`rue:list:end`);t(H,gt),t(H,_t);let vt=new Map;n(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(r,i,d,p,m)=>{f(u(()=>{let i=o(),u=s(`g`,i);t(i,u),n(()=>{c(u,`key`,String(r.row.sumDate))});let d=s(`circle`,u);t(u,d),n(()=>{c(d,`cx`,String(r.x))}),n(()=>{c(d,`cy`,String(r.y))}),n(()=>{c(d,`r`,String(r.row.sumDate===w.sumDate?7:4.5))}),e(d,`report-point-outer`);let f=s(`circle`,u);t(u,f),n(()=>{c(f,`cx`,String(r.x))}),n(()=>{c(f,`cy`,String(r.y))}),c(f,`r`,`3.2`),e(f,`report-point-inner`);let p=s(`text`,u);t(u,p),n(()=>{c(p,`x`,String(r.x))}),n(()=>{c(p,`y`,String(ae-12))}),c(p,`text-anchor`,`middle`),e(p,`report-axis-label`);let m=a(p);return t(p,m),n(()=>{l(m,ge(r.row.sumDate))}),i}),i,d)}})});let G=s(`article`,z);t(z,G),e(G,`report-card report-channel-card`);let yt=s(`div`,G);t(G,yt),e(yt,`report-panel-header`);let bt=s(`div`,yt);t(yt,bt);let xt=s(`p`,bt);t(bt,xt),e(xt,`report-panel-eyebrow`),t(xt,r(`Channel Mix`));let St=s(`h2`,bt);t(bt,St),t(St,r(`下单渠道分布`));let K=s(`div`,G);t(G,K),e(K,`report-channel-body`);let q=s(`svg`,K);t(K,q),c(q,`viewBox`,`0 0 160 160`),e(q,`report-donut`),c(q,`role`,`img`),c(q,`aria-label`,`下单渠道占比图`);let Ct=s(`circle`,q);t(q,Ct),c(Ct,`cx`,`80`),c(Ct,`cy`,`80`),n(()=>{c(Ct,`r`,String(fe))}),e(Ct,`report-donut-track`);let J=s(`circle`,q);t(q,J),c(J,`cx`,`80`),c(J,`cy`,`80`),n(()=>{c(J,`r`,String(fe))}),e(J,`report-donut-admin`),n(()=>{c(J,`stroke-dasharray`,String(`${pe}`))}),c(J,`stroke-dashoffset`,`0`);let Y=s(`circle`,q);t(q,Y),c(Y,`cx`,`80`),c(Y,`cy`,`80`),n(()=>{c(Y,`r`,String(fe))}),e(Y,`report-donut-self`),n(()=>{c(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),n(()=>{c(Y,`stroke-dashoffset`,String(-me))});let X=s(`div`,K);t(K,X),e(X,`report-channel-center`);let wt=s(`strong`,X);t(X,wt);let Tt=i(`rue:slot:anchor`);t(wt,Tt),n(()=>{let e=he(E);p(()=>f(e,wt,Tt))});let Et=s(`span`,X);t(X,Et),t(Et,r(`后台代客`));let Dt=s(`div`,G);t(G,Dt),e(Dt,`report-channel-list`);let Z=s(`div`,Dt);t(Dt,Z),e(Z,`report-channel-item`);let Ot=s(`span`,Z);t(Z,Ot),e(Ot,`report-dot report-dot-admin`);let kt=s(`div`,Z);t(Z,kt);let At=s(`strong`,kt);t(kt,At),t(At,r(`后台代客下单`));let jt=s(`p`,kt);t(kt,jt);let Mt=i(`rue:slot:anchor`);t(jt,Mt),n(()=>{let e=j(ee);p(()=>f(e,jt,Mt))});let Nt=s(`span`,Z);t(Z,Nt);let Pt=i(`rue:slot:anchor`);t(Nt,Pt),n(()=>{let e=he(E);p(()=>f(e,Nt,Pt))});let Q=s(`div`,Dt);t(Dt,Q),e(Q,`report-channel-item`);let Ft=s(`span`,Q);t(Q,Ft),e(Ft,`report-dot report-dot-self`);let It=s(`div`,Q);t(Q,It);let Lt=s(`strong`,It);t(It,Lt),t(Lt,r(`客户自主下单`));let Rt=s(`p`,It);t(It,Rt);let zt=i(`rue:slot:anchor`);t(Rt,zt),n(()=>{let e=j(C);p(()=>f(e,Rt,zt))});let Bt=s(`span`,Q);t(Q,Bt);let Vt=i(`rue:slot:anchor`);t(Bt,Vt),n(()=>{let e=he(ne);p(()=>f(e,Bt,Vt))});let Ht=s(`section`,k);t(k,Ht),e(Ht,`report-panel-grid`);let Ut=s(`article`,Ht);t(Ht,Ut),e(Ut,`report-card report-chart-card`);let Wt=s(`div`,Ut);t(Ut,Wt),e(Wt,`report-panel-header`);let Gt=s(`div`,Wt);t(Wt,Gt);let Kt=s(`p`,Gt);t(Gt,Kt),e(Kt,`report-panel-eyebrow`),t(Kt,r(`Order Volume`));let qt=s(`h2`,Gt);t(Gt,qt),t(qt,r(`每日订单笔数`));let Jt=s(`div`,Wt);t(Wt,Jt),e(Jt,`report-panel-summary`),t(Jt,r(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=s(`div`,Ut);t(Ut,Yt),e(Yt,`report-bars`);let Xt=i(`rue:list:start`),Zt=i(`rue:list:end`);t(Yt,Xt),t(Yt,Zt);let Qt=new Map;n(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(r,m,h,g,v)=>{f(u(()=>{let u=o(),m=s(`div`,u);t(u,m),n(()=>{c(m,`key`,String(r.sumDate))}),e(m,`report-bar-group`);let h=s(`div`,m);t(m,h),e(h,`report-bar-shell`);let g=s(`div`,h);t(h,g),n(()=>{e(g,String(`report-bar-fill ${r.sumDate===w.sumDate?`is-accent`:``}`))}),n(()=>{d(g,{height:`${Math.max(8,r.ordersCount/se*100)}%`})});let v=s(`strong`,m);t(m,v);let y=a(v);t(v,y),n(()=>{l(y,_.format(r.ordersCount))});let b=s(`span`,m);t(m,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let e=ge(r.sumDate);p(()=>f(e,b,x))}),u}),m,h)}})});let $t=s(`article`,Ht);t(Ht,$t),e($t,`report-card report-insight-card`);let en=s(`div`,$t);t($t,en),e(en,`report-panel-header`);let tn=s(`div`,en);t(en,tn);let nn=s(`p`,tn);t(tn,nn),e(nn,`report-panel-eyebrow`),t(nn,r(`Signals`));let rn=s(`h2`,tn);t(tn,rn),t(rn,r(`关键观察`));let an=s(`div`,$t);t($t,an),e(an,`report-insight-list`);let on=i(`rue:list:start`),sn=i(`rue:list:end`);t(an,on),t(an,sn);let cn=new Map;n(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(r,a,l,d,m)=>{f(u(()=>{let a=o(),l=s(`article`,a);t(a,l),n(()=>{c(l,`key`,String(r.title))}),e(l,`report-insight-item`);let u=s(`h3`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let e=r.title;p(()=>f(e,u,d))});let m=s(`p`,l);t(l,m);let h=i(`rue:slot:anchor`);return t(m,h),n(()=>{let e=r.text;p(()=>f(e,m,h))}),a}),a,l)}})});let ln=s(`section`,k);t(k,ln),e(ln,`report-card report-timeline-card`);let $=s(`div`,ln);t(ln,$),e($,`report-panel-header`);let un=s(`div`,$);t($,un);let dn=s(`p`,un);t(un,dn),e(dn,`report-panel-eyebrow`),t(dn,r(`Daily Playback`));let fn=s(`h2`,un);t(un,fn),t(fn,r(`逐日回放`));let pn=s(`div`,$);t($,pn),e(pn,`report-panel-summary`),t(pn,r(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=s(`div`,ln);t(ln,mn),e(mn,`report-timeline-list`);let hn=i(`rue:list:start`),gn=i(`rue:list:end`);t(mn,hn),t(mn,gn);let _n=new Map;return n(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{f(u(()=>{let u=o(),h=s(`div`,u);t(u,h),n(()=>{c(h,`key`,String(m.sumDate))}),e(h,`report-timeline-row`);let g=s(`div`,h);t(h,g),e(g,`report-timeline-main`);let v=s(`strong`,g);t(g,v);let y=i(`rue:slot:anchor`);t(v,y),n(()=>{let e=m.label;p(()=>f(e,v,y))});let b=s(`span`,g);t(g,b);let x=i(`rue:slot:anchor`);t(b,x),n(()=>{let e=m.notes;p(()=>f(e,b,x))});let S=s(`div`,h);t(h,S),e(S,`report-timeline-track`);let ee=s(`span`,S);t(S,ee),e(ee,`report-timeline-fill`),n(()=>{d(ee,{width:`${Math.max(4,m.amountRatio*100)}%`})});let C=s(`div`,h);t(h,C),e(C,`report-timeline-metrics`);let te=s(`strong`,C);t(C,te);let w=i(`rue:slot:anchor`);t(te,w),n(()=>{let e=M(m.allAmount);p(()=>f(e,te,w))});let T=s(`span`,C);t(C,T);let E=a(T);t(T,E),n(()=>{l(E,_.format(m.ordersCount))}),t(T,r(` 笔 / 客户均额`));let ne=a(T);t(T,ne),l(ne,` `),t(T,r(` `));let D=i(`rue:slot:anchor`);return t(T,D),n(()=>{let e=M(m.avgClientPrice);p(()=>f(e,T,D))}),u}),h,g)}})}),D});export{N as default};