import{$ as e,Ht as t,J as n,Q as r,X as i,Xt as a,Z as o,at as s,dt as c,et as l,l as u,pt as d,s as f,st as p}from"./vapor-runtime-iQZthBPQ.js";import{n as m}from"./vapor-helpers-vapor-BjKHCvOa.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
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
`,N=()=>u(g=>{let D=o(),re=r(`style`,D);n(D,re),a(()=>{d(re,Se)});let k=r(`div`,D);n(D,k),p(k,`report-data1-scope report-page`);let A=r(`section`,k);n(k,A),p(A,`report-hero report-card`);let N=r(`div`,A);n(A,N),p(N,`report-hero-copy`);let Ce=r(`p`,N);n(N,Ce),p(Ce,`report-kicker`),n(Ce,e(`Data Pulse / March 2026`));let we=r(`h1`,N);n(N,we),n(we,e(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=r(`p`,N);n(N,P),p(P,`report-hero-text`),n(P,e(`统计区间为 `));let Te=i(`rue:slot:anchor`);n(P,Te),a(()=>{let e=ve;t(()=>f(e,P,Te))}),n(P,e(`。窗口总成交额达到 `));let Ee=i(`rue:slot:anchor`);n(P,Ee),a(()=>{let e=j(y);t(()=>f(e,P,Ee))}),n(P,e(`，共形成`));let De=l(P);n(P,De),d(De,` `),n(P,e(` `));let Oe=l(P);n(P,Oe),a(()=>{d(Oe,_.format(v))}),n(P,e(` 笔订单， 其中`));let ke=l(P);n(P,ke),d(ke,` `),n(P,e(` `));let Ae=i(`rue:slot:anchor`);n(P,Ae),a(()=>{let e=_e(w.sumDate);t(()=>f(e,P,Ae))}),n(P,e(` 单日贡献 `));let je=i(`rue:slot:anchor`);n(P,je),a(()=>{let e=he(T);t(()=>f(e,P,je))}),n(P,e(` ，而退货金额维持在 `));let Me=i(`rue:slot:anchor`);n(P,Me),a(()=>{let e=j(b);t(()=>f(e,P,Me))}),n(P,e(`。`));let F=r(`div`,N);n(N,F),p(F,`report-hero-tags`);let Ne=r(`span`,F);n(F,Ne),p(Ne,`report-tag`);let Pe=i(`rue:slot:anchor`);n(Ne,Pe),a(()=>{let e=S;t(()=>f(e,Ne,Pe))}),n(Ne,e(` 天静默期`));let Fe=r(`span`,F);n(F,Fe),p(Fe,`report-tag`);let Ie=i(`rue:slot:anchor`);n(Fe,Ie),a(()=>{let e=x;t(()=>f(e,Fe,Ie))}),n(Fe,e(` 天有效成交`));let Le=r(`span`,F);n(F,Le),p(Le,`report-tag`),n(Le,e(`客户记录 `));let Re=l(Le);n(Le,Re),a(()=>{d(Re,_.format(te))});let I=r(`div`,A);n(A,I),p(I,`report-hero-board`);let L=r(`div`,I);n(I,L),p(L,`report-board-header`);let ze=r(`span`,L);n(L,ze),p(ze,`report-board-label`),n(ze,e(`峰值日`));let Be=r(`span`,L);n(L,Be),p(Be,`report-board-date`);let Ve=i(`rue:slot:anchor`);n(Be,Ve),a(()=>{let e=_e(w.sumDate);t(()=>f(e,Be,Ve))});let He=r(`div`,I);n(I,He),p(He,`report-board-value`);let Ue=i(`rue:slot:anchor`);n(He,Ue),a(()=>{let e=M(w.allAmount);t(()=>f(e,He,Ue))});let R=r(`p`,I);n(I,R),p(R,`report-board-copy`),n(R,e(`单日完成 `));let We=l(R);n(R,We),a(()=>{d(We,_.format(w.ordersCount))}),n(R,e(` 笔订单，客户均额`));let Ge=l(R);n(R,Ge),d(Ge,` `),n(R,e(` `));let Ke=i(`rue:slot:anchor`);n(R,Ke),a(()=>{let e=M(w.avgClientPrice);t(()=>f(e,R,Ke))}),n(R,e(`。`));let qe=r(`div`,I);n(I,qe),p(qe,`report-sparkline`);let Je=i(`rue:list:start`),Ye=i(`rue:list:end`);n(qe,Je),n(qe,Ye);let Xe=new Map;a(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(e,l,d,m,h)=>{f(u(()=>{let l=o(),u=r(`div`,l);n(l,u),a(()=>{s(u,`key`,String(e.sumDate))}),p(u,`report-spark-item`);let d=r(`span`,u);n(u,d),a(()=>{p(d,`report-spark-bar ${e.sumDate===w.sumDate?`is-peak`:``}`)}),a(()=>{c(d,{height:`${Math.max(10,e.amountRatio*100)}%`})});let m=r(`span`,u);n(u,m),p(m,`report-spark-label`);let h=i(`rue:slot:anchor`);return n(m,h),a(()=>{let n=e.label;t(()=>f(n,m,h))}),l}),l,d)}})});let Ze=r(`section`,k);n(k,Ze),p(Ze,`report-kpi-grid`);let Qe=i(`rue:list:start`),$e=i(`rue:list:end`);n(Ze,Qe),n(Ze,$e);let et=new Map;a(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(e,c,m,h,g)=>{f(u(()=>{let c=o(),u=r(`article`,c);n(c,u),a(()=>{s(u,`key`,String(e.label))}),p(u,`report-kpi-card report-card`);let m=r(`p`,u);n(u,m);let h=i(`rue:slot:anchor`);n(m,h),a(()=>{let n=e.label;t(()=>f(n,m,h))});let g=r(`h2`,u);n(u,g);let _=l(g);n(g,_),a(()=>{d(_,e.value)});let v=r(`span`,u);n(u,v);let y=i(`rue:slot:anchor`);return n(v,y),a(()=>{let n=e.detail;t(()=>f(n,v,y))}),c}),c,m)}})});let z=r(`section`,k);n(k,z),p(z,`report-panel-grid report-panel-grid-primary`);let B=r(`article`,z);n(z,B),p(B,`report-card report-chart-card report-chart-wide`);let V=r(`div`,B);n(B,V),p(V,`report-panel-header`);let tt=r(`div`,V);n(V,tt);let nt=r(`p`,tt);n(tt,nt),p(nt,`report-panel-eyebrow`),n(nt,e(`GMV Trend`));let rt=r(`h2`,tt);n(tt,rt),n(rt,e(`成交金额波动`));let it=r(`div`,V);n(V,it),p(it,`report-panel-summary`),n(it,e(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=r(`div`,B);n(B,at),p(at,`report-chart-shell`);let H=r(`svg`,at);n(at,H),a(()=>{s(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),p(H,`report-svg-chart`),s(H,`role`,`img`),s(H,`aria-label`,`每日成交金额趋势图`);let ot=r(`defs`,H);n(H,ot);let U=r(`linearGradient`,ot);n(ot,U),s(U,`id`,`reportAreaGradient`),s(U,`x1`,`0`),s(U,`x2`,`0`),s(U,`y1`,`0`),s(U,`y2`,`1`);let st=r(`stop`,U);n(U,st),s(st,`offset`,`0%`),p(st,`report-stop-area-top`);let ct=r(`stop`,U);n(U,ct),s(ct,`offset`,`100%`),p(ct,`report-stop-area-bottom`);let W=r(`linearGradient`,ot);n(ot,W),s(W,`id`,`reportLineGradient`),s(W,`x1`,`0`),s(W,`x2`,`1`),s(W,`y1`,`0`),s(W,`y2`,`0`);let lt=r(`stop`,W);n(W,lt),s(lt,`offset`,`0%`),p(lt,`report-stop-line-start`);let ut=r(`stop`,W);n(W,ut),s(ut,`offset`,`100%`),p(ut,`report-stop-line-end`);let dt=i(`rue:list:start`),ft=i(`rue:list:end`);n(H,dt),n(H,ft);let pt=new Map;a(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(e,t,i,c,m)=>{f(u(()=>{let t=o(),i=r(`g`,t);n(t,i),a(()=>{s(i,`key`,String(e.step))});let c=r(`line`,i);n(i,c),a(()=>{s(c,`x1`,String(O.left))}),a(()=>{s(c,`y1`,String(e.y))}),a(()=>{s(c,`x2`,String(ie-O.right))}),a(()=>{s(c,`y2`,String(e.y))}),p(c,`report-grid-line`);let u=r(`text`,i);n(i,u),a(()=>{s(u,`x`,String(O.left+6))}),a(()=>{s(u,`y`,String(e.y-8))}),p(u,`report-grid-label`);let f=l(u);return n(u,f),a(()=>{d(f,M(oe*e.step))}),t}),t,i)}})});let mt=r(`path`,H);n(H,mt),a(()=>{s(mt,`d`,String(ue))}),s(mt,`fill`,`url(#reportAreaGradient)`);let ht=r(`path`,H);n(H,ht),a(()=>{s(ht,`d`,String(le))}),p(ht,`report-line-path`),s(ht,`stroke`,`url(#reportLineGradient)`);let gt=i(`rue:list:start`),_t=i(`rue:list:end`);n(H,gt),n(H,_t);let vt=new Map;a(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(e,t,i,c,m)=>{f(u(()=>{let t=o(),i=r(`g`,t);n(t,i),a(()=>{s(i,`key`,String(e.row.sumDate))});let c=r(`circle`,i);n(i,c),a(()=>{s(c,`cx`,String(e.x))}),a(()=>{s(c,`cy`,String(e.y))}),a(()=>{s(c,`r`,String(e.row.sumDate===w.sumDate?7:4.5))}),p(c,`report-point-outer`);let u=r(`circle`,i);n(i,u),a(()=>{s(u,`cx`,String(e.x))}),a(()=>{s(u,`cy`,String(e.y))}),s(u,`r`,`3.2`),p(u,`report-point-inner`);let f=r(`text`,i);n(i,f),a(()=>{s(f,`x`,String(e.x))}),a(()=>{s(f,`y`,String(ae-12))}),s(f,`text-anchor`,`middle`),p(f,`report-axis-label`);let m=l(f);return n(f,m),a(()=>{d(m,ge(e.row.sumDate))}),t}),t,i)}})});let G=r(`article`,z);n(z,G),p(G,`report-card report-channel-card`);let yt=r(`div`,G);n(G,yt),p(yt,`report-panel-header`);let bt=r(`div`,yt);n(yt,bt);let xt=r(`p`,bt);n(bt,xt),p(xt,`report-panel-eyebrow`),n(xt,e(`Channel Mix`));let St=r(`h2`,bt);n(bt,St),n(St,e(`下单渠道分布`));let K=r(`div`,G);n(G,K),p(K,`report-channel-body`);let q=r(`svg`,K);n(K,q),s(q,`viewBox`,`0 0 160 160`),p(q,`report-donut`),s(q,`role`,`img`),s(q,`aria-label`,`下单渠道占比图`);let Ct=r(`circle`,q);n(q,Ct),s(Ct,`cx`,`80`),s(Ct,`cy`,`80`),a(()=>{s(Ct,`r`,String(fe))}),p(Ct,`report-donut-track`);let J=r(`circle`,q);n(q,J),s(J,`cx`,`80`),s(J,`cy`,`80`),a(()=>{s(J,`r`,String(fe))}),p(J,`report-donut-admin`),a(()=>{s(J,`stroke-dasharray`,String(`${pe}`))}),s(J,`stroke-dashoffset`,`0`);let Y=r(`circle`,q);n(q,Y),s(Y,`cx`,`80`),s(Y,`cy`,`80`),a(()=>{s(Y,`r`,String(fe))}),p(Y,`report-donut-self`),a(()=>{s(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),a(()=>{s(Y,`stroke-dashoffset`,String(-me))});let X=r(`div`,K);n(K,X),p(X,`report-channel-center`);let wt=r(`strong`,X);n(X,wt);let Tt=i(`rue:slot:anchor`);n(wt,Tt),a(()=>{let e=he(E);t(()=>f(e,wt,Tt))});let Et=r(`span`,X);n(X,Et),n(Et,e(`后台代客`));let Dt=r(`div`,G);n(G,Dt),p(Dt,`report-channel-list`);let Z=r(`div`,Dt);n(Dt,Z),p(Z,`report-channel-item`);let Ot=r(`span`,Z);n(Z,Ot),p(Ot,`report-dot report-dot-admin`);let kt=r(`div`,Z);n(Z,kt);let At=r(`strong`,kt);n(kt,At),n(At,e(`后台代客下单`));let jt=r(`p`,kt);n(kt,jt);let Mt=i(`rue:slot:anchor`);n(jt,Mt),a(()=>{let e=j(ee);t(()=>f(e,jt,Mt))});let Nt=r(`span`,Z);n(Z,Nt);let Pt=i(`rue:slot:anchor`);n(Nt,Pt),a(()=>{let e=he(E);t(()=>f(e,Nt,Pt))});let Q=r(`div`,Dt);n(Dt,Q),p(Q,`report-channel-item`);let Ft=r(`span`,Q);n(Q,Ft),p(Ft,`report-dot report-dot-self`);let It=r(`div`,Q);n(Q,It);let Lt=r(`strong`,It);n(It,Lt),n(Lt,e(`客户自主下单`));let Rt=r(`p`,It);n(It,Rt);let zt=i(`rue:slot:anchor`);n(Rt,zt),a(()=>{let e=j(C);t(()=>f(e,Rt,zt))});let Bt=r(`span`,Q);n(Q,Bt);let Vt=i(`rue:slot:anchor`);n(Bt,Vt),a(()=>{let e=he(ne);t(()=>f(e,Bt,Vt))});let Ht=r(`section`,k);n(k,Ht),p(Ht,`report-panel-grid`);let Ut=r(`article`,Ht);n(Ht,Ut),p(Ut,`report-card report-chart-card`);let Wt=r(`div`,Ut);n(Ut,Wt),p(Wt,`report-panel-header`);let Gt=r(`div`,Wt);n(Wt,Gt);let Kt=r(`p`,Gt);n(Gt,Kt),p(Kt,`report-panel-eyebrow`),n(Kt,e(`Order Volume`));let qt=r(`h2`,Gt);n(Gt,qt),n(qt,e(`每日订单笔数`));let Jt=r(`div`,Wt);n(Wt,Jt),p(Jt,`report-panel-summary`),n(Jt,e(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=r(`div`,Ut);n(Ut,Yt),p(Yt,`report-bars`);let Xt=i(`rue:list:start`),Zt=i(`rue:list:end`);n(Yt,Xt),n(Yt,Zt);let Qt=new Map;a(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(e,m,h,g,v)=>{f(u(()=>{let u=o(),m=r(`div`,u);n(u,m),a(()=>{s(m,`key`,String(e.sumDate))}),p(m,`report-bar-group`);let h=r(`div`,m);n(m,h),p(h,`report-bar-shell`);let g=r(`div`,h);n(h,g),a(()=>{p(g,`report-bar-fill ${e.sumDate===w.sumDate?`is-accent`:``}`)}),a(()=>{c(g,{height:`${Math.max(8,e.ordersCount/se*100)}%`})});let v=r(`strong`,m);n(m,v);let y=l(v);n(v,y),a(()=>{d(y,_.format(e.ordersCount))});let b=r(`span`,m);n(m,b);let x=i(`rue:slot:anchor`);return n(b,x),a(()=>{let n=ge(e.sumDate);t(()=>f(n,b,x))}),u}),m,h)}})});let $t=r(`article`,Ht);n(Ht,$t),p($t,`report-card report-insight-card`);let en=r(`div`,$t);n($t,en),p(en,`report-panel-header`);let tn=r(`div`,en);n(en,tn);let nn=r(`p`,tn);n(tn,nn),p(nn,`report-panel-eyebrow`),n(nn,e(`Signals`));let rn=r(`h2`,tn);n(tn,rn),n(rn,e(`关键观察`));let an=r(`div`,$t);n($t,an),p(an,`report-insight-list`);let on=i(`rue:list:start`),sn=i(`rue:list:end`);n(an,on),n(an,sn);let cn=new Map;a(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(e,c,l,d,m)=>{f(u(()=>{let c=o(),l=r(`article`,c);n(c,l),a(()=>{s(l,`key`,String(e.title))}),p(l,`report-insight-item`);let u=r(`h3`,l);n(l,u);let d=i(`rue:slot:anchor`);n(u,d),a(()=>{let n=e.title;t(()=>f(n,u,d))});let m=r(`p`,l);n(l,m);let h=i(`rue:slot:anchor`);return n(m,h),a(()=>{let n=e.text;t(()=>f(n,m,h))}),c}),c,l)}})});let ln=r(`section`,k);n(k,ln),p(ln,`report-card report-timeline-card`);let $=r(`div`,ln);n(ln,$),p($,`report-panel-header`);let un=r(`div`,$);n($,un);let dn=r(`p`,un);n(un,dn),p(dn,`report-panel-eyebrow`),n(dn,e(`Daily Playback`));let fn=r(`h2`,un);n(un,fn),n(fn,e(`逐日回放`));let pn=r(`div`,$);n($,pn),p(pn,`report-panel-summary`),n(pn,e(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=r(`div`,ln);n(ln,mn),p(mn,`report-timeline-list`);let hn=i(`rue:list:start`),gn=i(`rue:list:end`);n(mn,hn),n(mn,gn);let _n=new Map;return a(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{f(u(()=>{let u=o(),h=r(`div`,u);n(u,h),a(()=>{s(h,`key`,String(m.sumDate))}),p(h,`report-timeline-row`);let g=r(`div`,h);n(h,g),p(g,`report-timeline-main`);let v=r(`strong`,g);n(g,v);let y=i(`rue:slot:anchor`);n(v,y),a(()=>{let e=m.label;t(()=>f(e,v,y))});let b=r(`span`,g);n(g,b);let x=i(`rue:slot:anchor`);n(b,x),a(()=>{let e=m.notes;t(()=>f(e,b,x))});let S=r(`div`,h);n(h,S),p(S,`report-timeline-track`);let ee=r(`span`,S);n(S,ee),p(ee,`report-timeline-fill`),a(()=>{c(ee,{width:`${Math.max(4,m.amountRatio*100)}%`})});let C=r(`div`,h);n(h,C),p(C,`report-timeline-metrics`);let te=r(`strong`,C);n(C,te);let w=i(`rue:slot:anchor`);n(te,w),a(()=>{let e=M(m.allAmount);t(()=>f(e,te,w))});let T=r(`span`,C);n(C,T);let E=l(T);n(T,E),a(()=>{d(E,_.format(m.ordersCount))}),n(T,e(` 笔 / 客户均额`));let ne=l(T);n(T,ne),d(ne,` `),n(T,e(` `));let D=i(`rue:slot:anchor`);return n(T,D),a(()=>{let e=M(m.avgClientPrice);t(()=>f(e,T,D))}),u}),h,g)}})}),D});export{N as default};