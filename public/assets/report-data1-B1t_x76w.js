import{At as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p}from"./vapor-runtime-ygJWVcNn.js";import{n as m}from"./vapor-helpers-vapor-CMwHgsXf.js";var h=[{sum_date:`2026-03-18`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-19`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-20`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-21`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-22`,orders_count:0,orders_clients:0,returns_count:0,returns_clients:0,orders_total:`0.00`,returns_total:`0.00`,all_amount:`0.00`,avg_client_price:`0.00`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-23`,orders_count:1,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`57.50`,returns_total:`0.00`,all_amount:`57.50`,avg_client_price:`57.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:1,admin_order_total:`57.50`},{sum_date:`2026-03-24`,orders_count:4,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1568363.40`,returns_total:`0.00`,all_amount:`1568363.40`,avg_client_price:`392090.85`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1568363.40`},{sum_date:`2026-03-25`,orders_count:2,orders_clients:2,returns_count:0,returns_clients:0,orders_total:`1475.00`,returns_total:`0.00`,all_amount:`1475.00`,avg_client_price:`737.50`,self_order_clients:0,self_order_total:`0.00`,admin_order_clients:2,admin_order_total:`1475.00`},{sum_date:`2026-03-26`,orders_count:6,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`19291.50`,returns_total:`0.00`,all_amount:`19291.50`,avg_client_price:`3215.25`,self_order_clients:1,self_order_total:`19291.50`,admin_order_clients:0,admin_order_total:`0.00`},{sum_date:`2026-03-27`,orders_count:8,orders_clients:1,returns_count:0,returns_clients:0,orders_total:`48337.00`,returns_total:`0.00`,all_amount:`48337.00`,avg_client_price:`6042.13`,self_order_clients:1,self_order_total:`11122.00`,admin_order_clients:1,admin_order_total:`37215.00`}].map(e=>({sumDate:e.sum_date,ordersCount:e.orders_count,ordersClients:e.orders_clients,returnsCount:e.returns_count,returnsClients:e.returns_clients,ordersTotal:Number(e.orders_total),returnsTotal:Number(e.returns_total),allAmount:Number(e.all_amount),avgClientPrice:Number(e.avg_client_price),selfOrderClients:e.self_order_clients,selfOrderTotal:Number(e.self_order_total),adminOrderClients:e.admin_order_clients,adminOrderTotal:Number(e.admin_order_total)})),g=new Intl.NumberFormat(`zh-CN`,{style:`currency`,currency:`CNY`,minimumFractionDigits:2,maximumFractionDigits:2}),_=new Intl.NumberFormat(`zh-CN`),v=h.reduce((e,t)=>e+t.ordersCount,0),y=h.reduce((e,t)=>e+t.allAmount,0),b=h.reduce((e,t)=>e+t.returnsTotal,0),x=h.filter(e=>e.ordersCount>0).length,S=h.length-x,ee=h.reduce((e,t)=>e+t.adminOrderTotal,0),C=h.reduce((e,t)=>e+t.selfOrderTotal,0),te=h.reduce((e,t)=>e+t.ordersClients,0),w=h.reduce((e,t)=>t.allAmount>e.allAmount?t:e),T=y>0?w.allAmount/y:0,E=y>0?ee/y:0,ne=y>0?C/y:0,D=x>0?y/x:0,re=v>0?y/v:0,ie=760,ae=300,O={top:24,right:18,bottom:42,left:18},k=ie-O.left-O.right,A=ae-O.top-O.bottom,oe=Math.max(...h.map(e=>e.allAmount),1),se=Math.max(...h.map(e=>e.ordersCount),1),ce=h.map((e,t)=>({row:e,x:O.left+k/Math.max(h.length-1,1)*t,y:O.top+A-e.allAmount/oe*A})),le=ce.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `),ue=`${le} L ${ce[ce.length-1]?.x??0} ${ae-O.bottom} L ${ce[0]?.x??0} ${ae-O.bottom} Z`,de=[0,.25,.5,.75,1].map(e=>({step:e,y:O.top+A-e*A})),fe=52,pe=2*Math.PI*fe,me=pe*(1-E),j=e=>g.format(e),M=e=>e>=1e4?`\xa5${(e/1e4).toFixed(e>=1e5?2:1)}万`:j(e),he=e=>`${(e*100).toFixed(1)}%`,ge=e=>{let[,t,n]=e.split(`-`);return`${t}.${n}`},_e=e=>{let[,t,n]=e.split(`-`);return`${t}月${n}日`},ve=`${_e(h[0]?.sumDate??``)} - ${_e(h[h.length-1]?.sumDate??``)}`,ye=[{label:`窗口成交额`,value:M(y),detail:`总金额 ${j(y)}`},{label:`成交笔数`,value:_.format(v),detail:`活跃交易日 ${x} 天`},{label:`渠道结构`,value:he(E),detail:`后台代客下单占比`},{label:`笔均成交`,value:M(re),detail:`活跃日均 ${M(D)}`}],be=[{title:`启动前半段静默明显`,text:`前 ${S} 天未产生订单，交易在 03 月 23 日后才进入有效启动阶段，说明活动或客户需求集中释放。`},{title:`03 月 24 日单点爆发`,text:`${_e(w.sumDate)} 贡献 ${he(T)} 的窗口成交额，金额达到 ${j(w.allAmount)}，需要结合大客户或集中采购场景复盘来源。`},{title:`退货风险暂未出现`,text:`退货笔数与退货金额均为 0，当前净额与订单额完全一致，短期内销售质量表现稳定。`}],xe=h.map(e=>{let t=[];return e.allAmount===0&&t.push(`静默`),e.sumDate===w.sumDate&&t.push(`峰值`),e.selfOrderTotal>0&&e.adminOrderTotal>0?t.push(`双通路`):e.selfOrderTotal>0?t.push(`自主下单`):e.adminOrderTotal>0&&t.push(`后台代下单`),{...e,label:ge(e.sumDate),amountRatio:oe>0?e.allAmount/oe:0,notes:t.join(` / `)||`无波动`}}),Se=`
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
`,N=()=>f(g=>{let D=a(),re=c(`style`,D);l(D,re),u(()=>{n(re,Se)});let k=c(`div`,D);l(D,k),r(k,`report-data1-scope report-page`);let A=c(`section`,k);l(k,A),r(A,`report-hero report-card`);let N=c(`div`,A);l(A,N),r(N,`report-hero-copy`);let Ce=c(`p`,N);l(N,Ce),r(Ce,`report-kicker`),l(Ce,s(`Data Pulse / March 2026`));let we=c(`h1`,N);l(N,we),l(we,s(`10 日经营数据从静默切换到集中爆发，峰值日几乎决定整段窗口表现。`));let P=c(`p`,N);l(N,P),r(P,`report-hero-text`),l(P,s(`统计区间为 `));let Te=i(`rue:slot:anchor`);l(P,Te),u(()=>{let e=ve;d(()=>p(e,P,Te))}),l(P,s(`。窗口总成交额达到 `));let Ee=i(`rue:slot:anchor`);l(P,Ee),u(()=>{let e=j(y);d(()=>p(e,P,Ee))}),l(P,s(`，共形成`));let De=o(P);l(P,De),n(De,` `),l(P,s(` `));let Oe=o(P);l(P,Oe),u(()=>{n(Oe,_.format(v))}),l(P,s(` 笔订单， 其中`));let ke=o(P);l(P,ke),n(ke,` `),l(P,s(` `));let Ae=i(`rue:slot:anchor`);l(P,Ae),u(()=>{let e=_e(w.sumDate);d(()=>p(e,P,Ae))}),l(P,s(` 单日贡献 `));let je=i(`rue:slot:anchor`);l(P,je),u(()=>{let e=he(T);d(()=>p(e,P,je))}),l(P,s(` ，而退货金额维持在 `));let Me=i(`rue:slot:anchor`);l(P,Me),u(()=>{let e=j(b);d(()=>p(e,P,Me))}),l(P,s(`。`));let F=c(`div`,N);l(N,F),r(F,`report-hero-tags`);let Ne=c(`span`,F);l(F,Ne),r(Ne,`report-tag`);let Pe=i(`rue:slot:anchor`);l(Ne,Pe),u(()=>{let e=S;d(()=>p(e,Ne,Pe))}),l(Ne,s(` 天静默期`));let Fe=c(`span`,F);l(F,Fe),r(Fe,`report-tag`);let Ie=i(`rue:slot:anchor`);l(Fe,Ie),u(()=>{let e=x;d(()=>p(e,Fe,Ie))}),l(Fe,s(` 天有效成交`));let Le=c(`span`,F);l(F,Le),r(Le,`report-tag`),l(Le,s(`客户记录 `));let Re=o(Le);l(Le,Re),u(()=>{n(Re,_.format(te))});let I=c(`div`,A);l(A,I),r(I,`report-hero-board`);let L=c(`div`,I);l(I,L),r(L,`report-board-header`);let ze=c(`span`,L);l(L,ze),r(ze,`report-board-label`),l(ze,s(`峰值日`));let Be=c(`span`,L);l(L,Be),r(Be,`report-board-date`);let Ve=i(`rue:slot:anchor`);l(Be,Ve),u(()=>{let e=_e(w.sumDate);d(()=>p(e,Be,Ve))});let He=c(`div`,I);l(I,He),r(He,`report-board-value`);let Ue=i(`rue:slot:anchor`);l(He,Ue),u(()=>{let e=M(w.allAmount);d(()=>p(e,He,Ue))});let R=c(`p`,I);l(I,R),r(R,`report-board-copy`),l(R,s(`单日完成 `));let We=o(R);l(R,We),u(()=>{n(We,_.format(w.ordersCount))}),l(R,s(` 笔订单，客户均额`));let Ge=o(R);l(R,Ge),n(Ge,` `),l(R,s(` `));let Ke=i(`rue:slot:anchor`);l(R,Ke),u(()=>{let e=M(w.avgClientPrice);d(()=>p(e,R,Ke))}),l(R,s(`。`));let qe=c(`div`,I);l(I,qe),r(qe,`report-sparkline`);let Je=i(`rue:list:start`),Ye=i(`rue:list:end`);l(qe,Je),l(qe,Ye);let Xe=new Map;u(()=>{Xe=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:Xe,parent:qe,before:Ye,singleRoot:!0,trackIndex:!1,start:Je,renderItem:(n,o,s,m,h)=>{p(f(()=>{let o=a(),s=c(`div`,o);l(o,s),u(()=>{t(s,`key`,String(n.sumDate))}),r(s,`report-spark-item`);let f=c(`span`,s);l(s,f),u(()=>{r(f,`report-spark-bar ${n.sumDate===w.sumDate?`is-peak`:``}`)}),u(()=>{let t={height:`${Math.max(10,n.amountRatio*100)}%`};e(f,t)});let m=c(`span`,s);l(s,m),r(m,`report-spark-label`);let h=i(`rue:slot:anchor`);return l(m,h),u(()=>{let e=n.label;d(()=>p(e,m,h))}),o}),o,s)}})});let Ze=c(`section`,k);l(k,Ze),r(Ze,`report-kpi-grid`);let Qe=i(`rue:list:start`),$e=i(`rue:list:end`);l(Ze,Qe),l(Ze,$e);let et=new Map;u(()=>{et=m({items:ye||[],getKey:(e,t)=>e.label,elements:et,parent:Ze,before:$e,singleRoot:!0,trackIndex:!1,start:Qe,renderItem:(e,s,m,h,g)=>{p(f(()=>{let s=a(),f=c(`article`,s);l(s,f),u(()=>{t(f,`key`,String(e.label))}),r(f,`report-kpi-card report-card`);let m=c(`p`,f);l(f,m);let h=i(`rue:slot:anchor`);l(m,h),u(()=>{let t=e.label;d(()=>p(t,m,h))});let g=c(`h2`,f);l(f,g);let _=o(g);l(g,_),u(()=>{n(_,e.value)});let v=c(`span`,f);l(f,v);let y=i(`rue:slot:anchor`);return l(v,y),u(()=>{let t=e.detail;d(()=>p(t,v,y))}),s}),s,m)}})});let z=c(`section`,k);l(k,z),r(z,`report-panel-grid report-panel-grid-primary`);let B=c(`article`,z);l(z,B),r(B,`report-card report-chart-card report-chart-wide`);let V=c(`div`,B);l(B,V),r(V,`report-panel-header`);let tt=c(`div`,V);l(V,tt);let nt=c(`p`,tt);l(tt,nt),r(nt,`report-panel-eyebrow`),l(nt,s(`GMV Trend`));let rt=c(`h2`,tt);l(tt,rt),l(rt,s(`成交金额波动`));let it=c(`div`,V);l(V,it),r(it,`report-panel-summary`),l(it,s(`03.24 抬升整段曲线，后续三天维持正向成交尾流。`));let at=c(`div`,B);l(B,at),r(at,`report-chart-shell`);let H=c(`svg`,at);l(at,H),u(()=>{t(H,`viewBox`,String(`0 0 ${ie} ${ae}`))}),r(H,`report-svg-chart`),t(H,`role`,`img`),t(H,`aria-label`,`每日成交金额趋势图`);let ot=c(`defs`,H);l(H,ot);let U=c(`linearGradient`,ot);l(ot,U),t(U,`id`,`reportAreaGradient`),t(U,`x1`,`0`),t(U,`x2`,`0`),t(U,`y1`,`0`),t(U,`y2`,`1`);let st=c(`stop`,U);l(U,st),t(st,`offset`,`0%`),r(st,`report-stop-area-top`);let ct=c(`stop`,U);l(U,ct),t(ct,`offset`,`100%`),r(ct,`report-stop-area-bottom`);let W=c(`linearGradient`,ot);l(ot,W),t(W,`id`,`reportLineGradient`),t(W,`x1`,`0`),t(W,`x2`,`1`),t(W,`y1`,`0`),t(W,`y2`,`0`);let lt=c(`stop`,W);l(W,lt),t(lt,`offset`,`0%`),r(lt,`report-stop-line-start`);let ut=c(`stop`,W);l(W,ut),t(ut,`offset`,`100%`),r(ut,`report-stop-line-end`);let dt=i(`rue:list:start`),ft=i(`rue:list:end`);l(H,dt),l(H,ft);let pt=new Map;u(()=>{pt=m({items:de||[],getKey:(e,t)=>e.step,elements:pt,parent:H,before:ft,singleRoot:!0,trackIndex:!1,start:dt,renderItem:(e,i,s,d,m)=>{p(f(()=>{let i=a(),s=c(`g`,i);l(i,s),u(()=>{t(s,`key`,String(e.step))});let d=c(`line`,s);l(s,d),u(()=>{t(d,`x1`,String(O.left))}),u(()=>{t(d,`y1`,String(e.y))}),u(()=>{t(d,`x2`,String(ie-O.right))}),u(()=>{t(d,`y2`,String(e.y))}),r(d,`report-grid-line`);let f=c(`text`,s);l(s,f),u(()=>{t(f,`x`,String(O.left+6))}),u(()=>{t(f,`y`,String(e.y-8))}),r(f,`report-grid-label`);let p=o(f);return l(f,p),u(()=>{n(p,M(oe*e.step))}),i}),i,s)}})});let mt=c(`path`,H);l(H,mt),u(()=>{t(mt,`d`,String(ue))}),t(mt,`fill`,`url(#reportAreaGradient)`);let ht=c(`path`,H);l(H,ht),u(()=>{t(ht,`d`,String(le))}),r(ht,`report-line-path`),t(ht,`stroke`,`url(#reportLineGradient)`);let gt=i(`rue:list:start`),_t=i(`rue:list:end`);l(H,gt),l(H,_t);let vt=new Map;u(()=>{vt=m({items:ce||[],getKey:(e,t)=>e.row.sumDate,elements:vt,parent:H,before:_t,singleRoot:!0,trackIndex:!1,start:gt,renderItem:(e,i,s,d,m)=>{p(f(()=>{let i=a(),s=c(`g`,i);l(i,s),u(()=>{t(s,`key`,String(e.row.sumDate))});let d=c(`circle`,s);l(s,d),u(()=>{t(d,`cx`,String(e.x))}),u(()=>{t(d,`cy`,String(e.y))}),u(()=>{t(d,`r`,String(e.row.sumDate===w.sumDate?7:4.5))}),r(d,`report-point-outer`);let f=c(`circle`,s);l(s,f),u(()=>{t(f,`cx`,String(e.x))}),u(()=>{t(f,`cy`,String(e.y))}),t(f,`r`,`3.2`),r(f,`report-point-inner`);let p=c(`text`,s);l(s,p),u(()=>{t(p,`x`,String(e.x))}),u(()=>{t(p,`y`,String(ae-12))}),t(p,`text-anchor`,`middle`),r(p,`report-axis-label`);let m=o(p);return l(p,m),u(()=>{n(m,ge(e.row.sumDate))}),i}),i,s)}})});let G=c(`article`,z);l(z,G),r(G,`report-card report-channel-card`);let yt=c(`div`,G);l(G,yt),r(yt,`report-panel-header`);let bt=c(`div`,yt);l(yt,bt);let xt=c(`p`,bt);l(bt,xt),r(xt,`report-panel-eyebrow`),l(xt,s(`Channel Mix`));let St=c(`h2`,bt);l(bt,St),l(St,s(`下单渠道分布`));let K=c(`div`,G);l(G,K),r(K,`report-channel-body`);let q=c(`svg`,K);l(K,q),t(q,`viewBox`,`0 0 160 160`),r(q,`report-donut`),t(q,`role`,`img`),t(q,`aria-label`,`下单渠道占比图`);let Ct=c(`circle`,q);l(q,Ct),t(Ct,`cx`,`80`),t(Ct,`cy`,`80`),u(()=>{t(Ct,`r`,String(fe))}),r(Ct,`report-donut-track`);let J=c(`circle`,q);l(q,J),t(J,`cx`,`80`),t(J,`cy`,`80`),u(()=>{t(J,`r`,String(fe))}),r(J,`report-donut-admin`),u(()=>{t(J,`stroke-dasharray`,String(`${pe}`))}),t(J,`stroke-dashoffset`,`0`);let Y=c(`circle`,q);l(q,Y),t(Y,`cx`,`80`),t(Y,`cy`,`80`),u(()=>{t(Y,`r`,String(fe))}),r(Y,`report-donut-self`),u(()=>{t(Y,`stroke-dasharray`,String(`${pe*ne} ${pe}`))}),u(()=>{t(Y,`stroke-dashoffset`,String(-me))});let X=c(`div`,K);l(K,X),r(X,`report-channel-center`);let wt=c(`strong`,X);l(X,wt);let Tt=i(`rue:slot:anchor`);l(wt,Tt),u(()=>{let e=he(E);d(()=>p(e,wt,Tt))});let Et=c(`span`,X);l(X,Et),l(Et,s(`后台代客`));let Dt=c(`div`,G);l(G,Dt),r(Dt,`report-channel-list`);let Z=c(`div`,Dt);l(Dt,Z),r(Z,`report-channel-item`);let Ot=c(`span`,Z);l(Z,Ot),r(Ot,`report-dot report-dot-admin`);let kt=c(`div`,Z);l(Z,kt);let At=c(`strong`,kt);l(kt,At),l(At,s(`后台代客下单`));let jt=c(`p`,kt);l(kt,jt);let Mt=i(`rue:slot:anchor`);l(jt,Mt),u(()=>{let e=j(ee);d(()=>p(e,jt,Mt))});let Nt=c(`span`,Z);l(Z,Nt);let Pt=i(`rue:slot:anchor`);l(Nt,Pt),u(()=>{let e=he(E);d(()=>p(e,Nt,Pt))});let Q=c(`div`,Dt);l(Dt,Q),r(Q,`report-channel-item`);let Ft=c(`span`,Q);l(Q,Ft),r(Ft,`report-dot report-dot-self`);let It=c(`div`,Q);l(Q,It);let Lt=c(`strong`,It);l(It,Lt),l(Lt,s(`客户自主下单`));let Rt=c(`p`,It);l(It,Rt);let zt=i(`rue:slot:anchor`);l(Rt,zt),u(()=>{let e=j(C);d(()=>p(e,Rt,zt))});let Bt=c(`span`,Q);l(Q,Bt);let Vt=i(`rue:slot:anchor`);l(Bt,Vt),u(()=>{let e=he(ne);d(()=>p(e,Bt,Vt))});let Ht=c(`section`,k);l(k,Ht),r(Ht,`report-panel-grid`);let Ut=c(`article`,Ht);l(Ht,Ut),r(Ut,`report-card report-chart-card`);let Wt=c(`div`,Ut);l(Ut,Wt),r(Wt,`report-panel-header`);let Gt=c(`div`,Wt);l(Wt,Gt);let Kt=c(`p`,Gt);l(Gt,Kt),r(Kt,`report-panel-eyebrow`),l(Kt,s(`Order Volume`));let qt=c(`h2`,Gt);l(Gt,qt),l(qt,s(`每日订单笔数`));let Jt=c(`div`,Wt);l(Wt,Jt),r(Jt,`report-panel-summary`),l(Jt,s(`尾段交易频次持续升高，03.27 以 8 笔达到订单数峰值。`));let Yt=c(`div`,Ut);l(Ut,Yt),r(Yt,`report-bars`);let Xt=i(`rue:list:start`),Zt=i(`rue:list:end`);l(Yt,Xt),l(Yt,Zt);let Qt=new Map;u(()=>{Qt=m({items:h||[],getKey:(e,t)=>e.sumDate,elements:Qt,parent:Yt,before:Zt,singleRoot:!0,trackIndex:!1,start:Xt,renderItem:(s,m,h,g,v)=>{p(f(()=>{let f=a(),m=c(`div`,f);l(f,m),u(()=>{t(m,`key`,String(s.sumDate))}),r(m,`report-bar-group`);let h=c(`div`,m);l(m,h),r(h,`report-bar-shell`);let g=c(`div`,h);l(h,g),u(()=>{r(g,`report-bar-fill ${s.sumDate===w.sumDate?`is-accent`:``}`)}),u(()=>{let t={height:`${Math.max(8,s.ordersCount/se*100)}%`};e(g,t)});let v=c(`strong`,m);l(m,v);let y=o(v);l(v,y),u(()=>{n(y,_.format(s.ordersCount))});let b=c(`span`,m);l(m,b);let x=i(`rue:slot:anchor`);return l(b,x),u(()=>{let e=ge(s.sumDate);d(()=>p(e,b,x))}),f}),m,h)}})});let $t=c(`article`,Ht);l(Ht,$t),r($t,`report-card report-insight-card`);let en=c(`div`,$t);l($t,en),r(en,`report-panel-header`);let tn=c(`div`,en);l(en,tn);let nn=c(`p`,tn);l(tn,nn),r(nn,`report-panel-eyebrow`),l(nn,s(`Signals`));let rn=c(`h2`,tn);l(tn,rn),l(rn,s(`关键观察`));let an=c(`div`,$t);l($t,an),r(an,`report-insight-list`);let on=i(`rue:list:start`),sn=i(`rue:list:end`);l(an,on),l(an,sn);let cn=new Map;u(()=>{cn=m({items:be||[],getKey:(e,t)=>e.title,elements:cn,parent:an,before:sn,singleRoot:!0,trackIndex:!1,start:on,renderItem:(e,n,o,s,m)=>{p(f(()=>{let n=a(),o=c(`article`,n);l(n,o),u(()=>{t(o,`key`,String(e.title))}),r(o,`report-insight-item`);let s=c(`h3`,o);l(o,s);let f=i(`rue:slot:anchor`);l(s,f),u(()=>{let t=e.title;d(()=>p(t,s,f))});let m=c(`p`,o);l(o,m);let h=i(`rue:slot:anchor`);return l(m,h),u(()=>{let t=e.text;d(()=>p(t,m,h))}),n}),n,o)}})});let ln=c(`section`,k);l(k,ln),r(ln,`report-card report-timeline-card`);let $=c(`div`,ln);l(ln,$),r($,`report-panel-header`);let un=c(`div`,$);l($,un);let dn=c(`p`,un);l(un,dn),r(dn,`report-panel-eyebrow`),l(dn,s(`Daily Playback`));let fn=c(`h2`,un);l(un,fn),l(fn,s(`逐日回放`));let pn=c(`div`,$);l($,pn),r(pn,`report-panel-summary`),l(pn,s(`按金额强度缩放，便于观察 10 天窗口内的启动、放量与回落节奏。`));let mn=c(`div`,ln);l(ln,mn),r(mn,`report-timeline-list`);let hn=i(`rue:list:start`),gn=i(`rue:list:end`);l(mn,hn),l(mn,gn);let _n=new Map;return u(()=>{_n=m({items:xe||[],getKey:(e,t)=>e.sumDate,elements:_n,parent:mn,before:gn,singleRoot:!0,trackIndex:!1,start:hn,renderItem:(m,h,g,v,y)=>{p(f(()=>{let f=a(),h=c(`div`,f);l(f,h),u(()=>{t(h,`key`,String(m.sumDate))}),r(h,`report-timeline-row`);let g=c(`div`,h);l(h,g),r(g,`report-timeline-main`);let v=c(`strong`,g);l(g,v);let y=i(`rue:slot:anchor`);l(v,y),u(()=>{let e=m.label;d(()=>p(e,v,y))});let b=c(`span`,g);l(g,b);let x=i(`rue:slot:anchor`);l(b,x),u(()=>{let e=m.notes;d(()=>p(e,b,x))});let S=c(`div`,h);l(h,S),r(S,`report-timeline-track`);let ee=c(`span`,S);l(S,ee),r(ee,`report-timeline-fill`),u(()=>{let t={width:`${Math.max(4,m.amountRatio*100)}%`};e(ee,t)});let C=c(`div`,h);l(h,C),r(C,`report-timeline-metrics`);let te=c(`strong`,C);l(C,te);let w=i(`rue:slot:anchor`);l(te,w),u(()=>{let e=M(m.allAmount);d(()=>p(e,te,w))});let T=c(`span`,C);l(C,T);let E=o(T);l(T,E),u(()=>{n(E,_.format(m.ordersCount))}),l(T,s(` 笔 / 客户均额`));let ne=o(T);l(T,ne),n(ne,` `),l(T,s(` `));let D=i(`rue:slot:anchor`);return l(T,D),u(()=>{let e=M(m.avgClientPrice);d(()=>p(e,T,D))}),f}),h,g)}})}),D});export{N as default};