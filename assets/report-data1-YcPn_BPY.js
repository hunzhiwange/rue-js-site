import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,X as c,_t as l,d as u,l as d,ut as f,z as p}from"./vapor-runtime-Dfq7aA8z.js";import{n as m}from"./vapor-helpers-vapor-CpxsbTjB.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
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
`,N=()=>u(g=>{let D=t(),re=r(`style`,D);i(D,re),l(()=>{a(re,Se)});let k=r(`div`,D);i(D,k),n(k,`report-data1-scope report-page`);let A=r(`section`,k);i(k,A),n(A,`report-hero report-card`);let N=r(`div`,A);i(A,N),n(N,`report-hero-copy`);let Ce=r(`p`,N);i(N,Ce),n(Ce,`report-kicker`),i(Ce,o(`Data Pulse / March 2026`));let we=r(`h1`,N);i(N,we),i(we,o(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=r(`p`,N);i(N,P),n(P,`report-hero-text`),i(P,o(`统计区间为 `));let Te=p(P);i(P,Te),l(()=>{a(Te,ve)}),i(P,o(`。窗口总成交额达到 `));let Ee=e(`rue:slot:anchor`);i(P,Ee),l(()=>{let e=j(y);f(()=>d(e,P,Ee))}),i(P,o(`，共形成`));let De=p(P);i(P,De),a(De,` `),i(P,o(` `));let Oe=p(P);i(P,Oe),l(()=>{a(Oe,_.format(v))}),i(P,o(` 笔订单， 其中`));let ke=p(P);i(P,ke),a(ke,` `),i(P,o(` `));let Ae=e(`rue:slot:anchor`);i(P,Ae),l(()=>{let e=_e(w.sumDate);f(()=>d(e,P,Ae))}),i(P,o(` 单日贡献 `));let je=e(`rue:slot:anchor`);i(P,je),l(()=>{let e=he(T);f(()=>d(e,P,je))}),i(P,o(` ，而退货金额维持在 `));let Me=e(`rue:slot:anchor`);i(P,Me),l(()=>{let e=j(b);f(()=>d(e,P,Me))}),i(P,o(`。`));let F=r(`div`,N);i(N,F),n(F,`report-hero-tags`);let Ne=r(`span`,F);i(F,Ne),n(Ne,`report-tag`);let Pe=p(Ne);i(Ne,Pe),l(()=>{a(Pe,S)}),i(Ne,o(` 天静默期`));let Fe=r(`span`,F);i(F,Fe),n(Fe,`report-tag`);let Ie=p(Fe);i(Fe,Ie),l(()=>{a(Ie,x)}),i(Fe,o(` 天有效成交`));let Le=r(`span`,F);i(F,Le),n(Le,`report-tag`),i(Le,o(`客户记录 `));let Re=p(Le);i(Le,Re),l(()=>{a(Re,_.format(te))});let I=r(`div`,A);i(A,I),n(I,`report-hero-board`);let L=r(`div`,I);i(I,L),n(L,`report-board-header`);let ze=r(`span`,L);i(L,ze),n(ze,`report-board-label`),i(ze,o(`峰值日`));let Be=r(`span`,L);i(L,Be),n(Be,`report-board-date`);let Ve=e(`rue:slot:anchor`);i(Be,Ve),l(()=>{let e=_e(w.sumDate);f(()=>d(e,Be,Ve))});let He=r(`div`,I);i(I,He),n(He,`report-board-value`);let Ue=e(`rue:slot:anchor`);i(He,Ue),l(()=>{let e=M(w.allAmount);f(()=>d(e,He,Ue))});let R=r(`p`,I);i(I,R),n(R,`report-board-copy`),i(R,o(`单日完成 `));let We=p(R);i(R,We),l(()=>{a(We,_.format(w.ordersCount))}),i(R,o(` 笔订单，客户均额`));let Ge=p(R);i(R,Ge),a(Ge,` `),i(R,o(` `));let Ke=e(`rue:slot:anchor`);i(R,Ke),l(()=>{let e=M(w.avgClientPrice);f(()=>d(e,R,Ke))}),i(R,o(`。`));let qe=r(`div`,I);i(I,qe),n(qe,`report-sparkline`);let Je=e(`rue:list:start`),Ye=e(`rue:list:end`);i(qe,Je),i(qe,Ye);let Xe=new Map;l(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(a,o,p,m,h)=>{d(u(()=>{let o=t(),u=r(`div`,o);i(o,u),l(()=>{s(u,`key`,String(a.sumDate))}),n(u,`report-spark-item`);let p=r(`span`,u);i(u,p),l(()=>{n(p,String(`report-spark-bar ${a.sumDate===w.sumDate?`is-peak`:``}`))}),l(()=>{c(p,{height:`${Math.max(10,a.amountRatio*100)}%`})});let m=r(`span`,u);i(u,m),n(m,`report-spark-label`);let h=e(`rue:slot:anchor`);return i(m,h),l(()=>{let e=a.label;f(()=>d(e,m,h))}),o}),o,p)}})});let Ze=r(`section`,k);i(k,Ze),n(Ze,`report-kpi-grid`);let Qe=e(`rue:list:start`),$e=e(`rue:list:end`);i(Ze,Qe),i(Ze,$e);let et=new Map;l(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(o,c,m,h,g)=>{d(u(()=>{let c=t(),u=r(`article`,c);i(c,u),l(()=>{s(u,`key`,String(o.label))}),n(u,`report-kpi-card report-card`);let m=r(`p`,u);i(u,m);let h=e(`rue:slot:anchor`);i(m,h),l(()=>{let e=o.label;f(()=>d(e,m,h))});let g=r(`h2`,u);i(u,g);let _=p(g);i(g,_),l(()=>{a(_,o.value)});let v=r(`span`,u);i(u,v);let y=e(`rue:slot:anchor`);return i(v,y),l(()=>{let e=o.detail;f(()=>d(e,v,y))}),c}),c,m)}})});let z=r(`section`,k);i(k,z),n(z,`report-panel-grid report-panel-grid-primary`);let B=r(`article`,z);i(z,B),n(B,`report-card report-chart-card report-chart-wide`);let V=r(`div`,B);i(B,V),n(V,`report-panel-header`);let tt=r(`div`,V);i(V,tt);let nt=r(`p`,tt);i(tt,nt),n(nt,`report-panel-eyebrow`),i(nt,o(`GMV Trend`));let rt=r(`h2`,tt);i(tt,rt),i(rt,o(`成交金额波动`));let it=r(`div`,V);i(V,it),n(it,`report-panel-summary`),i(it,o(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=r(`div`,B);i(B,at),n(at,`report-chart-shell`);let H=r(`svg`,at);i(at,H),l(()=>{s(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),n(H,`report-svg-chart`),s(H,`role`,`img`),s(H,`aria-label`,`每日成交金额趋势图`);let ot=r(`defs`,H);i(H,ot);let U=r(`linearGradient`,ot);i(ot,U),s(U,`id`,`reportAreaGradient`),s(U,`x1`,`0`),s(U,`x2`,`0`),s(U,`y1`,`0`),s(U,`y2`,`1`);let st=r(`stop`,U);i(U,st),s(st,`offset`,`0%`),n(st,`report-stop-area-top`);let ct=r(`stop`,U);i(U,ct),s(ct,`offset`,`100%`),n(ct,`report-stop-area-bottom`);let W=r(`linearGradient`,ot);i(ot,W),s(W,`id`,`reportLineGradient`),s(W,`x1`,`0`),s(W,`x2`,`1`),s(W,`y1`,`0`),s(W,`y2`,`0`);let lt=r(`stop`,W);i(W,lt),s(lt,`offset`,`0%`),n(lt,`report-stop-line-start`);let ut=r(`stop`,W);i(W,ut),s(ut,`offset`,`100%`),n(ut,`report-stop-line-end`);let dt=e(`rue:list:start`),ft=e(`rue:list:end`);i(H,dt),i(H,ft);let pt=new Map;l(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(e,o,c,f,m)=>{d(u(()=>{let o=t(),c=r(`g`,o);i(o,c),l(()=>{s(c,`key`,String(e.step))});let u=r(`line`,c);i(c,u),l(()=>{s(u,`x1`,String(O.left))}),l(()=>{s(u,`y1`,String(e.y))}),l(()=>{s(u,`x2`,String(ie-O.right))}),l(()=>{s(u,`y2`,String(e.y))}),n(u,`report-grid-line`);let d=r(`text`,c);i(c,d),l(()=>{s(d,`x`,String(O.left+6))}),l(()=>{s(d,`y`,String(e.y-8))}),n(d,`report-grid-label`);let f=p(d);return i(d,f),l(()=>{a(f,M(oe*e.step))}),o}),o,c)}})});let mt=r(`path`,H);i(H,mt),l(()=>{s(mt,`d`,String(ue))}),s(mt,`fill`,`url(#reportAreaGradient)`);let ht=r(`path`,H);i(H,ht),l(()=>{s(ht,`d`,String(le))}),n(ht,`report-line-path`),s(ht,`stroke`,`url(#reportLineGradient)`);let gt=e(`rue:list:start`),_t=e(`rue:list:end`);i(H,gt),i(H,_t);let vt=new Map;l(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(e,o,c,f,m)=>{d(u(()=>{let o=t(),c=r(`g`,o);i(o,c),l(()=>{s(c,`key`,String(e.row.sumDate))});let u=r(`circle`,c);i(c,u),l(()=>{s(u,`cx`,String(e.x))}),l(()=>{s(u,`cy`,String(e.y))}),l(()=>{s(u,`r`,String(e.row.sumDate===w.sumDate?7:4.5))}),n(u,`report-point-outer`);let d=r(`circle`,c);i(c,d),l(()=>{s(d,`cx`,String(e.x))}),l(()=>{s(d,`cy`,String(e.y))}),s(d,`r`,`3.2`),n(d,`report-point-inner`);let f=r(`text`,c);i(c,f),l(()=>{s(f,`x`,String(e.x))}),l(()=>{s(f,`y`,String(ae-12))}),s(f,`text-anchor`,`middle`),n(f,`report-axis-label`);let m=p(f);return i(f,m),l(()=>{a(m,ge(e.row.sumDate))}),o}),o,c)}})});let G=r(`article`,z);i(z,G),n(G,`report-card report-channel-card`);let yt=r(`div`,G);i(G,yt),n(yt,`report-panel-header`);let bt=r(`div`,yt);i(yt,bt);let xt=r(`p`,bt);i(bt,xt),n(xt,`report-panel-eyebrow`),i(xt,o(`Channel Mix`));let St=r(`h2`,bt);i(bt,St),i(St,o(`下单渠道分布`));let K=r(`div`,G);i(G,K),n(K,`report-channel-body`);let q=r(`svg`,K);i(K,q),s(q,`viewBox`,`0 0 160 160`),n(q,`report-donut`),s(q,`role`,`img`),s(q,`aria-label`,`下单渠道占比图`);let Ct=r(`circle`,q);i(q,Ct),s(Ct,`cx`,`80`),s(Ct,`cy`,`80`),l(()=>{s(Ct,`r`,String(fe))}),n(Ct,`report-donut-track`);let J=r(`circle`,q);i(q,J),s(J,`cx`,`80`),s(J,`cy`,`80`),l(()=>{s(J,`r`,String(fe))}),n(J,`report-donut-admin`),l(()=>{s(J,`stroke-dasharray`,String(`${pe}`))}),s(J,`stroke-dashoffset`,`0`);let Y=r(`circle`,q);i(q,Y),s(Y,`cx`,`80`),s(Y,`cy`,`80`),l(()=>{s(Y,`r`,String(fe))}),n(Y,`report-donut-self`),l(()=>{s(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),l(()=>{s(Y,`stroke-dashoffset`,String(-me))});let X=r(`div`,K);i(K,X),n(X,`report-channel-center`);let wt=r(`strong`,X);i(X,wt);let Tt=e(`rue:slot:anchor`);i(wt,Tt),l(()=>{let e=he(E);f(()=>d(e,wt,Tt))});let Et=r(`span`,X);i(X,Et),i(Et,o(`后台代客`));let Dt=r(`div`,G);i(G,Dt),n(Dt,`report-channel-list`);let Z=r(`div`,Dt);i(Dt,Z),n(Z,`report-channel-item`);let Ot=r(`span`,Z);i(Z,Ot),n(Ot,`report-dot report-dot-admin`);let kt=r(`div`,Z);i(Z,kt);let At=r(`strong`,kt);i(kt,At),i(At,o(`后台代客下单`));let jt=r(`p`,kt);i(kt,jt);let Mt=e(`rue:slot:anchor`);i(jt,Mt),l(()=>{let e=j(ee);f(()=>d(e,jt,Mt))});let Nt=r(`span`,Z);i(Z,Nt);let Pt=e(`rue:slot:anchor`);i(Nt,Pt),l(()=>{let e=he(E);f(()=>d(e,Nt,Pt))});let Q=r(`div`,Dt);i(Dt,Q),n(Q,`report-channel-item`);let Ft=r(`span`,Q);i(Q,Ft),n(Ft,`report-dot report-dot-self`);let It=r(`div`,Q);i(Q,It);let Lt=r(`strong`,It);i(It,Lt),i(Lt,o(`客户自主下单`));let Rt=r(`p`,It);i(It,Rt);let zt=e(`rue:slot:anchor`);i(Rt,zt),l(()=>{let e=j(C);f(()=>d(e,Rt,zt))});let Bt=r(`span`,Q);i(Q,Bt);let Vt=e(`rue:slot:anchor`);i(Bt,Vt),l(()=>{let e=he(ne);f(()=>d(e,Bt,Vt))});let Ht=r(`section`,k);i(k,Ht),n(Ht,`report-panel-grid`);let Ut=r(`article`,Ht);i(Ht,Ut),n(Ut,`report-card report-chart-card`);let Wt=r(`div`,Ut);i(Ut,Wt),n(Wt,`report-panel-header`);let Gt=r(`div`,Wt);i(Wt,Gt);let Kt=r(`p`,Gt);i(Gt,Kt),n(Kt,`report-panel-eyebrow`),i(Kt,o(`Order Volume`));let qt=r(`h2`,Gt);i(Gt,qt),i(qt,o(`每日订单笔数`));let Jt=r(`div`,Wt);i(Wt,Jt),n(Jt,`report-panel-summary`),i(Jt,o(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=r(`div`,Ut);i(Ut,Yt),n(Yt,`report-bars`);let Xt=e(`rue:list:start`),Zt=e(`rue:list:end`);i(Yt,Xt),i(Yt,Zt);let Qt=new Map;l(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(o,m,h,g,v)=>{d(u(()=>{let u=t(),m=r(`div`,u);i(u,m),l(()=>{s(m,`key`,String(o.sumDate))}),n(m,`report-bar-group`);let h=r(`div`,m);i(m,h),n(h,`report-bar-shell`);let g=r(`div`,h);i(h,g),l(()=>{n(g,String(`report-bar-fill ${o.sumDate===w.sumDate?`is-accent`:``}`))}),l(()=>{c(g,{height:`${Math.max(8,o.ordersCount/se*100)}%`})});let v=r(`strong`,m);i(m,v);let y=p(v);i(v,y),l(()=>{a(y,_.format(o.ordersCount))});let b=r(`span`,m);i(m,b);let x=e(`rue:slot:anchor`);return i(b,x),l(()=>{let e=ge(o.sumDate);f(()=>d(e,b,x))}),u}),m,h)}})});let $t=r(`article`,Ht);i(Ht,$t),n($t,`report-card report-insight-card`);let en=r(`div`,$t);i($t,en),n(en,`report-panel-header`);let tn=r(`div`,en);i(en,tn);let nn=r(`p`,tn);i(tn,nn),n(nn,`report-panel-eyebrow`),i(nn,o(`Signals`));let rn=r(`h2`,tn);i(tn,rn),i(rn,o(`关键观察`));let an=r(`div`,$t);i($t,an),n(an,`report-insight-list`);let on=e(`rue:list:start`),sn=e(`rue:list:end`);i(an,on),i(an,sn);let cn=new Map;l(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(a,o,c,p,m)=>{d(u(()=>{let o=t(),c=r(`article`,o);i(o,c),l(()=>{s(c,`key`,String(a.title))}),n(c,`report-insight-item`);let u=r(`h3`,c);i(c,u);let p=e(`rue:slot:anchor`);i(u,p),l(()=>{let e=a.title;f(()=>d(e,u,p))});let m=r(`p`,c);i(c,m);let h=e(`rue:slot:anchor`);return i(m,h),l(()=>{let e=a.text;f(()=>d(e,m,h))}),o}),o,c)}})});let ln=r(`section`,k);i(k,ln),n(ln,`report-card report-timeline-card`);let $=r(`div`,ln);i(ln,$),n($,`report-panel-header`);let un=r(`div`,$);i($,un);let dn=r(`p`,un);i(un,dn),n(dn,`report-panel-eyebrow`),i(dn,o(`Daily Playback`));let fn=r(`h2`,un);i(un,fn),i(fn,o(`逐日回放`));let pn=r(`div`,$);i($,pn),n(pn,`report-panel-summary`),i(pn,o(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=r(`div`,ln);i(ln,mn),n(mn,`report-timeline-list`);let hn=e(`rue:list:start`),gn=e(`rue:list:end`);i(mn,hn),i(mn,gn);let _n=new Map;return l(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{d(u(()=>{let u=t(),h=r(`div`,u);i(u,h),l(()=>{s(h,`key`,String(m.sumDate))}),n(h,`report-timeline-row`);let g=r(`div`,h);i(h,g),n(g,`report-timeline-main`);let v=r(`strong`,g);i(g,v);let y=e(`rue:slot:anchor`);i(v,y),l(()=>{let e=m.label;f(()=>d(e,v,y))});let b=r(`span`,g);i(g,b);let x=e(`rue:slot:anchor`);i(b,x),l(()=>{let e=m.notes;f(()=>d(e,b,x))});let S=r(`div`,h);i(h,S),n(S,`report-timeline-track`);let ee=r(`span`,S);i(S,ee),n(ee,`report-timeline-fill`),l(()=>{c(ee,{width:`${Math.max(4,m.amountRatio*100)}%`})});let C=r(`div`,h);i(h,C),n(C,`report-timeline-metrics`);let te=r(`strong`,C);i(C,te);let w=e(`rue:slot:anchor`);i(te,w),l(()=>{let e=M(m.allAmount);f(()=>d(e,te,w))});let T=r(`span`,C);i(C,T);let E=p(T);i(T,E),l(()=>{a(E,_.format(m.ordersCount))}),i(T,o(` 笔 / 客户均额`));let ne=p(T);i(T,ne),a(ne,` `),i(T,o(` `));let D=e(`rue:slot:anchor`);return i(T,D),l(()=>{let e=M(m.avgClientPrice);f(()=>d(e,T,D))}),u}),h,g)}})}),D});export{N as default};