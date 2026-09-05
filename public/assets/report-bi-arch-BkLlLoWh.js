import{B as e,C as t,Et as n,L as r,S as i,W as a,X as o,Y as s,_n as c,at as l,bn as u,dt as d,fn as f,gn as p,hn as m,ht as h,it as g,kn as _,nt as v,ot as y,pn as b,pt as x,q as S,rt as C,tt as w,wn as T,x as E,z as ee}from"./rue-runtime-CwEGJ854.js";var te=c(`<div class="bi-scope bi-page"><section class="bi-hero bi-card"><div><p class="bi-kicker">BI Platform Architecture / Realtime Monitor</p><h1>多源异构数据接入架构，实时驱动业务决策</h1><p class="bi-hero-desc">统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。</p><div class="bi-tags"><span class="bi-tag"><span class="dot"></span>6 数据源在线</span><span class="bi-tag">CDC 实时同步</span><span class="bi-tag">ETL 批处理</span><span class="bi-tag">四层仓储存档</span><span class="bi-tag">GraphQL + REST 双协议</span></div></div><div class="bi-metrics-grid"><!--rue:text-hole:0--></div></section><section class="bi-card"><div><div class="bi-section-title"><div><p class="bi-eyebrow">Data Sources</p><h2>数据源连接池</h2></div><p>实时监控六大异构数据源的连接状态、QPS、延迟与健康度。</p></div></div><div class="bi-sources-grid"><!--rue:text-hole:1--></div></section><section class="bi-card"><div><div class="bi-section-title"><div><p class="bi-eyebrow">Data Pipeline</p><h2>数据处理管线</h2></div><p>五阶段数据生命周期：从采集到可视化的全链路自动化。</p></div></div><div class="bi-pipeline"><!--rue:text-hole:2--></div></section><section class="bi-chart-section"><article class="bi-card bi-chart-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Latency Monitor</p><h2>24H 延迟趋势</h2></div></div><div class="bi-chart-shell"><!--rue:opaque-hole:3--></div></article><article class="bi-card bi-tp-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Weekly Throughput</p><h2>周吞吐量</h2></div></div><div class="bi-tp-bars"><!--rue:text-hole:4--></div></article></section><section class="bi-bottom-grid"><article class="bi-card bi-queries-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Top Queries</p><h2>高频查询排行</h2></div></div><div><!--rue:text-hole:5--></div></article><article class="bi-card bi-alert-card"><div class="bi-section-title"><div><p class="bi-eyebrow">Alert Center</p><h2>告警事件</h2></div></div><div><!--rue:text-hole:6--></div></article></section></div>`),D=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],O=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],ne=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],k=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],re=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],A=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],ie=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],j=700,ae=220,M={t:20,r:16,b:36,l:16},N=j-M.l-M.r,P=ae-M.t-M.b,F=80,I=k.map(e=>{let t=M.l+N/Math.max(k.length-1,1)*k.indexOf(e);return{...e,x:t,mysqlY:M.t+P-e.mysql/F*P,pgY:M.t+P-e.pg/F*P,redisY:M.t+P-e.redis/F*P,apiY:M.t+P-e.api/F*P}}),L=e=>I.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),oe=Math.max(...re.map(e=>e.value)),se=`
.bi-scope.bi-page {
  --b-bg: var(--color-base-100);
  --b-bg2: var(--color-base-200);
  --b-bg3: var(--color-base-300);
  --b-c: var(--color-base-content);
  --b-p: var(--color-primary);
  --b-pc: var(--color-primary-content);
  --b-s: var(--color-secondary);
  --b-sc: var(--color-secondary-content);
  --b-a: var(--color-accent);
  --b-ac: var(--color-accent-content);
  --b-ok: oklch(0.72 0.19 155);
  --b-warn: oklch(0.75 0.18 75);
  --b-err: oklch(0.65 0.22 25);
  --b-mysql: oklch(0.65 0.2 250);
  --b-pg: oklch(0.6 0.18 165);
  --b-ch: oklch(0.72 0.2 300);
  --b-redis: oklch(0.65 0.24 15);
  --b-api: oklch(0.68 0.16 85);
  --b-gql: oklch(0.7 0.2 280);
  --b-glass: color-mix(in oklch, var(--b-bg2) 55%, transparent);
  --b-glass2: color-mix(in oklch, var(--b-bg3) 35%, transparent);

  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 24px;
  font-family: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
}

@media (min-width: 768px) { .bi-scope.bi-page { padding: 0 36px; } }
@media (min-width: 1280px) { .bi-scope.bi-page { padding: 0 48px; } }

.bi-scope .bi-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid var(--b-glass2);
  background:
    radial-gradient(ellipse 70% 50% at 100% -10%, color-mix(in oklch, var(--b-p) 12%, transparent), transparent),
    radial-gradient(ellipse 50% 60% at 0% 110%, color-mix(in oklch, var(--b-s) 8%, transparent), transparent),
    var(--b-glass);
  box-shadow:
    0 4px 24px color-mix(in oklch, var(--b-bg3) 25%, transparent),
    0 16px 48px -8px color-mix(in oklch, var(--b-bg3) 35%, transparent);
  backdrop-filter: blur(4px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.bi-scope .bi-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    color-mix(in oklch, var(--b-p) 25%, transparent),
    transparent 40%,
    transparent 60%,
    color-mix(in oklch, var(--b-a) 18%, transparent)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 0.4s ease;
}

.bi-scope .bi-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px color-mix(in oklch, var(--b-p) 10%, transparent), 0 24px 64px -8px color-mix(in oklch, var(--b-bg3) 35%, transparent); }
.bi-scope .bi-card:hover::before { opacity: 1; }

.bi-scope .bi-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(340px, 0.85fr);
  gap: 32px;
  padding: 40px;
}

.bi-scope .bi-kicker {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--b-p);
}

.bi-scope .bi-hero h1 {
  margin: 0;
  font-size: clamp(30px, 4.5vw, 52px);
  line-height: 1.08;
  font-weight: 800;
  color: var(--b-c);
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, var(--b-c) 40%, var(--b-p));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bi-scope .bi-hero-desc {
  margin: 18px 0 0;
  max-width: 60ch;
  line-height: 1.8;
  color: color-mix(in oklch, var(--b-c) 65%, transparent);
}

.bi-scope .bi-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.bi-scope .bi-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 700;
  border: 1px solid color-mix(in oklch, var(--b-p) 25%, transparent);
  background: color-mix(in oklch, var(--b-p) 10%, transparent);
  color: var(--b-p);
  transition: all 0.3s ease;
}

.bi-scope .bi-tag:hover {
  background: color-mix(in oklch, var(--b-p) 20%, transparent);
  transform: translateY(-1px);
}

.bi-scope .bi-tag .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--b-ok);
  box-shadow: 0 0 8px color-mix(in oklch, var(--b-ok) 50%, transparent);
  animation: biPulse 2s ease-in-out infinite;
}

.bi-scope .bi-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.bi-scope .bi-metric-card {
  padding: 20px;
  border-radius: 18px;
  background: color-mix(in oklch, var(--b-bg3) 40%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-metric-card:hover {
  background: color-mix(in oklch, var(--b-bg3) 55%, var(--b-bg2));
  transform: translateY(-2px);
}

.bi-scope .bi-metric-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-metric-value {
  margin-top: 8px;
  font-size: clamp(24px, 2.5vw, 34px);
  font-weight: 800;
  color: var(--b-c);
  line-height: 1;
}

.bi-scope .bi-metric-delta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
}

.bi-scope .bi-metric-delta.up {
  color: var(--b-ok);
  background: color-mix(in oklch, var(--b-ok) 12%, transparent);
}

.bi-scope .bi-metric-delta.down {
  color: var(--b-err);
  background: color-mix(in oklch, var(--b-err) 12%, transparent);
}

.bi-scope .bi-section-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.bi-scope .bi-section-title h2 {
  margin: 0;
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-section-title p {
  margin: 0;
  font-size: 14px;
  color: color-mix(in oklch, var(--b-c) 55%, transparent);
  max-width: 36ch;
}

.bi-scope .bi-eyebrow {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--b-p);
}

.bi-scope .bi-sources-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 28px;
}

.bi-scope .bi-src {
  padding: 22px;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg2) 35%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 30%, transparent);
  transition: all 0.35s ease;
  cursor: default;
}

.bi-scope .bi-src:hover {
  background: color-mix(in oklch, var(--b-bg2) 55%, var(--b-bg));
  border-color: color-mix(in oklch, var(--b-bg3) 55%, transparent);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px color-mix(in oklch, var(--b-bg3) 25%, transparent);
}

.bi-scope .bi-src-head {
  display: flex;
  align-items: center;
  gap: 14px;
}

.bi-scope .bi-src-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 900;
  color: white;
  flex-shrink: 0;
}

.bi-scope .bi-src-icon.mysql { background: linear-gradient(135deg, var(--b-mysql), oklch(0.5 0.15 250)); }
.bi-scope .bi-src-icon.pg { background: linear-gradient(135deg, var(--b-pg), oklch(0.45 0.12 165)); }
.bi-scope .bi-src-icon.ch { background: linear-gradient(135deg, var(--b-ch), oklch(0.55 0.15 300)); }
.bi-scope .bi-src-icon.redis { background: linear-gradient(135deg, var(--b-redis), oklch(0.5 0.18 15)); }
.bi-scope .bi-src-icon.api { background: linear-gradient(135deg, var(--b-api), oklch(0.5 0.12 85)); }
.bi-scope .bi-src-icon.gql { background: linear-gradient(135deg, var(--b-gql), oklch(0.55 0.15 280)); }

.bi-scope .bi-src-name {
  font-size: 17px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-src-type {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-radius: 999px;
  text-transform: uppercase;
}

.bi-scope .bi-src-type.sql { color: var(--b-mysql); background: color-mix(in oklch, var(--b-mysql) 12%, transparent); }
.bi-scope .bi-src-type.olap { color: var(--b-ch); background: color-mix(in oklch, var(--b-ch) 12%, transparent); }
.bi-scope .bi-src-type.cache { color: var(--b-redis); background: color-mix(in oklch, var(--b-redis) 12%, transparent); }
.bi-scope .bi-src-type.http { color: var(--b-api); background: color-mix(in oklch, var(--b-api) 12%, transparent); }

.bi-scope .bi-src-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
}

.bi-scope .bi-src-stat-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--b-c) 45%, transparent);
}

.bi-scope .bi-src-stat-value {
  margin-top: 4px;
  font-size: 16px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-src-stat-unit {
  font-size: 11px;
  font-weight: 600;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-src-conn-bar {
  width: 100%;
  height: 4px;
  border-radius: 999px;
  margin-top: 6px;
  background: color-mix(in oklch, var(--b-c) 8%, transparent);
  overflow: hidden;
}

.bi-scope .bi-src-conn-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s ease;
}

.bi-scope .bi-src-conn-fill.mysql { background: var(--b-mysql); }
.bi-scope .bi-src-conn-fill.pg { background: var(--b-pg); }
.bi-scope .bi-src-conn-fill.ch { background: var(--b-ch); }
.bi-scope .bi-src-conn-fill.redis { background: var(--b-redis); }
.bi-scope .bi-src-conn-fill.api { background: var(--b-api); }
.bi-scope .bi-src-conn-fill.gql { background: var(--b-gql); }

.bi-scope .bi-src-dbs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.bi-scope .bi-src-db {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--b-bg3) 50%, var(--b-bg2));
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
}

.bi-scope .bi-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.bi-scope .bi-status-dot.active { background: var(--b-ok); box-shadow: 0 0 10px color-mix(in oklch, var(--b-ok) 50%, transparent); }
.bi-scope .bi-status-dot.warning { background: var(--b-warn); box-shadow: 0 0 10px color-mix(in oklch, var(--b-warn) 50%, transparent); animation: biPulse 1.5s ease-in-out infinite; }

.bi-scope .bi-pipeline {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
  padding: 28px;
  position: relative;
}

.bi-scope .bi-pipe-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 20px 12px;
  position: relative;
  z-index: 1;
}

.bi-scope .bi-pipe-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 24px;
  background: linear-gradient(135deg, color-mix(in oklch, var(--b-p) 20%, var(--b-bg2)), color-mix(in oklch, var(--b-a) 15%, var(--b-bg3)));
  border: 1px solid color-mix(in oklch, var(--b-p) 25%, transparent);
  box-shadow: 0 4px 16px color-mix(in oklch, var(--b-p) 12%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-pipe-stage:hover .bi-pipe-icon {
  transform: scale(1.1);
  box-shadow: 0 8px 24px color-mix(in oklch, var(--b-p) 20%, transparent);
}

.bi-scope .bi-pipe-name {
  font-size: 15px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-pipe-desc {
  font-size: 12px;
  color: color-mix(in oklch, var(--b-c) 55%, transparent);
  line-height: 1.6;
}

.bi-scope .bi-pipe-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.bi-scope .bi-pipe-item {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: color-mix(in oklch, var(--b-bg3) 45%, var(--b-bg2));
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  border: 1px solid color-mix(in oklch, var(--b-bg3) 35%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-pipe-arrow {
  position: absolute;
  top: 48px;
  right: -14px;
  width: 28px;
  height: 2px;
  z-index: 0;
}

.bi-scope .bi-pipe-arrow::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--b-p), var(--b-a));
  opacity: 0.4;
}

.bi-scope .bi-pipe-arrow::after {
  content: '';
  position: absolute;
  right: 0;
  top: -4px;
  border: 5px solid transparent;
  border-left: 7px solid var(--b-a);
  opacity: 0.4;
}

.bi-scope .bi-chart-section {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.85fr);
  gap: 20px;
}

.bi-scope .bi-chart-card {
  padding: 28px;
}

.bi-scope .bi-chart-shell {
  overflow: hidden;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg3) 40%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 40%, transparent);
  box-shadow: inset 0 2px 10px color-mix(in oklch, var(--b-bg3) 20%, transparent);
}

.bi-scope .bi-chart-svg {
  display: block;
  width: 100%;
  height: auto;
}

.bi-scope .bi-grid-line {
  stroke: color-mix(in oklch, var(--b-c) 8%, transparent);
  stroke-width: 1;
  stroke-dasharray: 4 8;
}

.bi-scope .bi-grid-label {
  font-size: 10px;
  fill: color-mix(in oklch, var(--b-c) 40%, transparent);
}

.bi-scope .bi-axis-label {
  font-size: 10px;
  fill: color-mix(in oklch, var(--b-c) 45%, transparent);
}

.bi-scope .bi-line-path {
  fill: none;
  stroke-width: 2.5;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.bi-scope .bi-tp-card { padding: 28px; }

.bi-scope .bi-tp-bars {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  min-height: 180px;
  padding: 16px;
  border-radius: 20px;
  background: color-mix(in oklch, var(--b-bg3) 35%, var(--b-bg2));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 35%, transparent);
}

.bi-scope .bi-tp-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.bi-scope .bi-tp-bar-shell {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: flex-end;
}

.bi-scope .bi-tp-fill {
  width: 100%;
  min-height: 8px;
  border-radius: 14px 14px 4px 4px;
  background: linear-gradient(180deg, color-mix(in oklch, var(--b-p) 80%, var(--b-a)), color-mix(in oklch, var(--b-p) 20%, transparent));
  box-shadow: 0 6px 20px color-mix(in oklch, var(--b-p) 18%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-tp-fill:hover {
  filter: brightness(1.15);
  box-shadow: 0 8px 28px color-mix(in oklch, var(--b-p) 28%, transparent);
}

.bi-scope .bi-tp-val {
  font-size: 15px;
  font-weight: 800;
  color: var(--b-c);
}

.bi-scope .bi-tp-label {
  font-size: 11px;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
}

.bi-scope .bi-queries-card { padding: 28px; }

.bi-scope .bi-query-row {
  display: grid;
  grid-template-columns: 36px minmax(0, 1.2fr) auto auto auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: color-mix(in oklch, var(--b-bg2) 25%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 25%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-query-row:hover {
  background: color-mix(in oklch, var(--b-bg2) 45%, var(--b-bg));
  transform: translateX(4px);
}

.bi-scope .bi-query-row + .bi-query-row {
  margin-top: 10px;
}

.bi-scope .bi-query-rank {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 800;
  color: var(--b-c);
  background: color-mix(in oklch, var(--b-bg3) 45%, var(--b-bg2));
}

.bi-scope .bi-query-rank.top3 {
  background: linear-gradient(135deg, var(--b-p), var(--b-a));
  color: white;
}

.bi-scope .bi-query-sql {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: color-mix(in oklch, var(--b-c) 70%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bi-scope .bi-query-src {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-query-src.mysql { color: var(--b-mysql); background: color-mix(in oklch, var(--b-mysql) 10%, transparent); }
.bi-scope .bi-query-src.pg { color: var(--b-pg); background: color-mix(in oklch, var(--b-pg) 10%, transparent); }
.bi-scope .bi-query-src.ch { color: var(--b-ch); background: color-mix(in oklch, var(--b-ch) 10%, transparent); }
.bi-scope .bi-query-src.redis { color: var(--b-redis); background: color-mix(in oklch, var(--b-redis) 10%, transparent); }
.bi-scope .bi-query-src.api { color: var(--b-api); background: color-mix(in oklch, var(--b-api) 10%, transparent); }
.bi-scope .bi-query-src.gql { color: var(--b-gql); background: color-mix(in oklch, var(--b-gql) 10%, transparent); }

.bi-scope .bi-query-freq {
  font-size: 12px;
  font-weight: 700;
  color: color-mix(in oklch, var(--b-c) 60%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-query-ms {
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.bi-scope .bi-query-ms.fast { color: var(--b-ok); }
.bi-scope .bi-query-ms.med { color: var(--b-warn); }
.bi-scope .bi-query-ms.slow { color: var(--b-err); }

.bi-scope .bi-alert-card { padding: 28px; }

.bi-scope .bi-alert-row {
  display: grid;
  grid-template-columns: auto auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: color-mix(in oklch, var(--b-bg2) 25%, var(--b-bg));
  border: 1px solid color-mix(in oklch, var(--b-bg3) 25%, transparent);
  transition: all 0.3s ease;
}

.bi-scope .bi-alert-row:hover {
  background: color-mix(in oklch, var(--b-bg2) 45%, var(--b-bg));
  transform: translateX(4px);
}

.bi-scope .bi-alert-row + .bi-alert-row {
  margin-top: 10px;
}

.bi-scope .bi-alert-time {
  font-size: 12px;
  font-weight: 600;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: color-mix(in oklch, var(--b-c) 50%, transparent);
  white-space: nowrap;
}

.bi-scope .bi-alert-level {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-alert-level.error { color: var(--b-err); background: color-mix(in oklch, var(--b-err) 12%, transparent); }
.bi-scope .bi-alert-level.warn { color: var(--b-warn); background: color-mix(in oklch, var(--b-warn) 12%, transparent); }
.bi-scope .bi-alert-level.info { color: var(--b-p); background: color-mix(in oklch, var(--b-p) 12%, transparent); }

.bi-scope .bi-alert-msg {
  font-size: 13px;
  color: color-mix(in oklch, var(--b-c) 70%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bi-scope .bi-alert-resolved {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.bi-scope .bi-alert-resolved.yes { color: var(--b-ok); background: color-mix(in oklch, var(--b-ok) 10%, transparent); }
.bi-scope .bi-alert-resolved.no { color: var(--b-warn); background: color-mix(in oklch, var(--b-warn) 10%, transparent); }

.bi-scope .bi-bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
}

@keyframes biPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes biFloatIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.bi-scope .bi-card {
  animation: biFloatIn 0.6s ease both;
}

.bi-scope .bi-metric-card:nth-child(1) { animation: biFloatIn 0.5s ease both; animation-delay: 0ms; }
.bi-scope .bi-metric-card:nth-child(2) { animation: biFloatIn 0.5s ease both; animation-delay: 60ms; }
.bi-scope .bi-metric-card:nth-child(3) { animation: biFloatIn 0.5s ease both; animation-delay: 120ms; }
.bi-scope .bi-metric-card:nth-child(4) { animation: biFloatIn 0.5s ease both; animation-delay: 180ms; }
.bi-scope .bi-metric-card:nth-child(5) { animation: biFloatIn 0.5s ease both; animation-delay: 240ms; }
.bi-scope .bi-metric-card:nth-child(6) { animation: biFloatIn 0.5s ease both; animation-delay: 300ms; }

@media (max-width: 1100px) {
  .bi-scope .bi-hero { grid-template-columns: 1fr; }
  .bi-scope .bi-sources-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-scope .bi-pipeline { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .bi-scope .bi-chart-section,
  .bi-scope .bi-bottom-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-metrics-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .bi-scope.bi-page { padding: 0 12px; gap: 16px; }
  .bi-scope .bi-sources-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-pipeline { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bi-scope .bi-metrics-grid { grid-template-columns: 1fr; }
  .bi-scope .bi-hero { padding: 24px; }
  .bi-scope .bi-query-row { grid-template-columns: 28px minmax(0, 1fr) auto; }
  .bi-scope .bi-query-src, .bi-scope .bi-query-freq, .bi-scope .bi-query-ms { display: none; }
  .bi-scope .bi-alert-row { grid-template-columns: auto minmax(0, 1fr) auto; }
  .bi-scope .bi-alert-time { display: none; }
}
`,ce=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),le=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ue={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},de={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},R=e=>e<5?`fast`:e<30?`med`:`slow`,z=()=>S(h(()=>{let c=v();o(c,g(` `));let S=C(`style`,c);o(c,S),T(()=>{x(S,se)}),o(c,g(` `));let ee=te().content.cloneNode(!0),k=ee.firstChild,N=k.childNodes[1].childNodes[0],z=k.childNodes[2].childNodes[0],fe=k.childNodes[0].childNodes[1].childNodes[0],pe=fe.parentNode,B=k.childNodes[1].childNodes[1].childNodes[0],me=B.parentNode,he=k.childNodes[2].childNodes[1].childNodes[0],ge=he.parentNode,_e=k.childNodes[3].childNodes[0].childNodes[1].childNodes[0],ve=_e.parentNode,ye=k.childNodes[3].childNodes[1].childNodes[1].childNodes[0],be=ye.parentNode,xe=k.childNodes[4].childNodes[0].childNodes[1].childNodes[0],Se=xe.parentNode,Ce=k.childNodes[4].childNodes[1].childNodes[1].childNodes[0],we=Ce.parentNode;c.appendChild(ee),d(N,{padding:`28px 28px 0`}),d(z,{padding:`28px 28px 0`});let Te=[];T(()=>{Te=t(pe,fe,Te,ne||[],(e,t)=>e.label,(e,t)=>{let r=a(e),o=a(t);return i((e,t,i)=>E(e,i,()=>n(Object.assign(e=>{let t=m(`div`,e);t.className=`bi-metric-card`;let n=m(`div`,t);f(t,n),n.className=`bi-metric-label`;let i=p(``);f(n,i),u(i,()=>r.get().label);let a=m(`div`,t);f(t,a),a.className=`bi-metric-value`;let o=p(``);f(a,o),u(o,()=>r.get().value);let s=m(`span`,t);f(t,s);let c;T(()=>{let e=`bi-metric-delta ${r.get().delta.startsWith(`+`)&&r.get().label===`异常告警`?`down`:`up`}`,t=e==null?``:String(e);Object.is(c,t)||(c=t,s.className=t)});let l=p(``);return f(s,l),u(l,()=>r.get().delta),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n),o.set(i)})})});let Ee=[];T(()=>{Ee=t(me,B,Ee,D||[],(e,t)=>e.id,(e,r)=>{let o=a(e),c=a(r);return i((e,r,c)=>E(e,c,()=>n(Object.assign(e=>{let r=m(`div`,e);r.className=`bi-src`;let c=m(`div`,r);f(r,c),c.className=`bi-src-head`;let l=m(`div`,c);f(c,l);let d;T(()=>{let e=`bi-src-icon ${ue[o.get().id]}`,t=e==null?``:String(e);Object.is(d,t)||(d=t,l.className=t)});let h=p(``);f(l,h),u(h,()=>o.get().icon);let g=m(`div`,c);f(c,g),Object.assign(g.style,{flex:1});let v=m(`div`,g);f(g,v),Object.assign(v.style,{display:`flex`,alignItems:`center`,gap:8});let y=m(`span`,v);f(v,y),y.className=`bi-src-name`;let x=p(``);f(y,x),u(x,()=>o.get().name);let S=m(`span`,v);f(v,S);let C;T(()=>{let e=`bi-status-dot ${o.get().status}`,t=e==null?``:String(e);Object.is(C,t)||(C=t,S.className=t)});let w=m(`span`,g);f(g,w);let ee;T(()=>{let e=`bi-src-type ${de[o.get().id]}`,t=e==null?``:String(e);Object.is(ee,t)||(ee=t,w.className=t)});let te=p(``);f(w,te),u(te,()=>o.get().type);let D=m(`div`,r);f(r,D),D.className=`bi-src-stats`;let O=m(`div`,D);f(D,O);let ne=m(`div`,O);f(O,ne),ne.className=`bi-src-stat-label`,f(ne,p(`QPS`));let k=m(`div`,O);f(O,k),k.className=`bi-src-stat-value`;let re=b(`rue:compiled-slot`);f(k,re),T(()=>{let e=ce(o.get().qps);_(()=>s(e,k,re))});let A=m(`div`,D);f(D,A);let ie=m(`div`,A);f(A,ie),ie.className=`bi-src-stat-label`,f(ie,p(`延迟`));let j=m(`div`,A);f(A,j),j.className=`bi-src-stat-value`;let ae=b(`rue:compiled-slot`);f(j,ae),T(()=>{let e=le(o.get().latency);_(()=>s(e,j,ae))});let M=m(`div`,D);f(D,M);let N=m(`div`,M);f(M,N),N.className=`bi-src-stat-label`,f(N,p(`可用率`));let P=m(`div`,M);f(M,P),P.className=`bi-src-stat-value`;let F=p(``);f(P,F),u(F,()=>o.get().uptime);let I=m(`div`,r);f(r,I),I.className=`bi-src-conn-bar`;let L=m(`div`,I);f(I,L);let oe;T(()=>{let e=`bi-src-conn-fill ${ue[o.get().id]}`,t=e==null?``:String(e);Object.is(oe,t)||(oe=t,L.className=t)});let se;T(()=>{let e=`${o.get().connections/o.get().maxConn*100}%`,t=e==null?``:String(e);Object.is(se,t)||(se=t,L.style.width=t)});let R=m(`div`,r);f(r,R),Object.assign(R.style,{marginTop:6,display:`flex`,justifyContent:`space-between`});let z=m(`span`,R);f(R,z),z.className=`bi-src-stat-unit`;let fe=p(``);f(z,fe),u(fe,()=>o.get().connections),f(z,p(` / `));let pe=p(``);f(z,pe),u(pe,()=>o.get().maxConn),f(z,p(` 连接`));let B=m(`div`,r);f(r,B),B.className=`bi-src-dbs`;let me=b(`rue:list:end`);f(B,me);let he=[];return T(()=>{let e=o.get().databases||[];he=t(B,me,he,e,(e,t)=>e,(e,t)=>{let r=a(e),o=a(t);return i((e,t,i)=>E(e,i,()=>n(Object.assign(e=>{let t=m(`span`,e);t.className=`bi-src-db`;let n=p(``);return f(t,n),u(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n),o.set(i)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,o.set(t),c.set(n)})})});let De=[];T(()=>{De=t(ge,he,De,O||[],(e,t)=>e.id,(r,o)=>{let s=a(r),c=a(o);return i((r,o,l)=>E(r,l,()=>n(Object.assign(r=>{let o=m(`div`,r);o.className=`bi-pipe-stage`;let l=m(`div`,o);f(o,l),l.className=`bi-pipe-icon`;let d=p(``);f(l,d),u(d,()=>s.get().icon);let h=m(`div`,o);f(o,h),h.className=`bi-pipe-name`;let g=p(``);f(h,g),u(g,()=>s.get().name);let _=m(`div`,o);f(o,_),_.className=`bi-pipe-desc`;let y=p(``);f(_,y),u(y,()=>s.get().desc);let x=m(`div`,o);f(o,x),x.className=`bi-pipe-items`;let S=b(`rue:list:end`);f(x,S);let C=[];return T(()=>{let e=s.get().items||[];C=t(x,S,C,e,(e,t)=>e,(e,t)=>{let r=a(e),o=a(t);return i((e,t,i)=>E(e,i,()=>n(Object.assign(e=>{let t=m(`span`,e);t.className=`bi-pipe-item`;let n=p(``);return f(t,n),u(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n),o.set(i)})})}),e(()=>{let e=c.get()<O.length-1;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=m(`div`,e);return t.className=`bi-pipe-arrow`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=v();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(o),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{r=e,o=t,s.set(e),c.set(t)})})});let V=C(`svg`,ve);o(ve,V),ve.insertBefore(V,_e),T(()=>{y(V,`viewBox`,String(`0 0 ${j} ${ae}`))}),r(V,`bi-chart-svg`),y(V,`role`,`img`),y(V,`aria-label`,`24小时延迟趋势图`);let H=C(`defs`,V);o(V,H);let U=C(`linearGradient`,H);o(H,U),y(U,`id`,`biLatMysql`),y(U,`x1`,`0`),y(U,`x2`,`0`),y(U,`y1`,`0`),y(U,`y2`,`1`);let Oe=C(`stop`,U);o(U,Oe),y(Oe,`offset`,`0%`),y(Oe,`stopColor`,`var(--b-mysql)`),y(Oe,`stopOpacity`,`0.25`);let ke=C(`stop`,U);o(U,ke),y(ke,`offset`,`100%`),y(ke,`stopColor`,`var(--b-mysql)`),y(ke,`stopOpacity`,`0`);let W=C(`linearGradient`,H);o(H,W),y(W,`id`,`biLatApi`),y(W,`x1`,`0`),y(W,`x2`,`0`),y(W,`y1`,`0`),y(W,`y2`,`1`);let Ae=C(`stop`,W);o(W,Ae),y(Ae,`offset`,`0%`),y(Ae,`stopColor`,`var(--b-api)`),y(Ae,`stopOpacity`,`0.2`);let je=C(`stop`,W);o(W,je),y(je,`offset`,`100%`),y(je,`stopColor`,`var(--b-api)`),y(je,`stopOpacity`,`0`);let Me=w(`rue:slot:anchor`);o(V,Me),T(()=>{let e=[0,.25,.5,.75,1].map(e=>{let t=M.t+P-e*P;return h(n=>{let i=C(`g`,n),a=C(`line`,i);o(i,a),T(()=>{y(a,`x1`,String(M.l))}),T(()=>{y(a,`y1`,String(t))}),T(()=>{y(a,`x2`,String(j-M.r))}),T(()=>{y(a,`y2`,String(t))}),r(a,`bi-grid-line`);let s=C(`text`,i);o(i,s),T(()=>{y(s,`x`,String(M.l+4))}),T(()=>{y(s,`y`,String(t-6))}),r(s,`bi-grid-label`);let c=l(s);return o(s,c),T(()=>{x(c,(F*e).toFixed(0))}),o(s,g(`ms`)),i})});_(()=>s(e,V,Me))});let Ne=C(`path`,V);o(V,Ne),T(()=>{y(Ne,`d`,String(`${L(`mysqlY`)} L ${I[I.length-1].x} ${M.t+P} L ${I[0].x} ${M.t+P} Z`))}),y(Ne,`fill`,`url(#biLatMysql)`);let Pe=C(`path`,V);o(V,Pe),T(()=>{y(Pe,`d`,String(L(`apiY`)))}),r(Pe,`bi-line-path`),y(Pe,`stroke`,`var(--b-api)`);let Fe=C(`path`,V);o(V,Fe),T(()=>{y(Fe,`d`,String(L(`mysqlY`)))}),r(Fe,`bi-line-path`),y(Fe,`stroke`,`var(--b-mysql)`);let Ie=C(`path`,V);o(V,Ie),T(()=>{y(Ie,`d`,String(L(`pgY`)))}),r(Ie,`bi-line-path`),y(Ie,`stroke`,`var(--b-pg)`);let Le=C(`path`,V);o(V,Le),T(()=>{y(Le,`d`,String(L(`redisY`)))}),r(Le,`bi-line-path`),y(Le,`stroke`,`var(--b-redis)`);let Re=w(`rue:slot:anchor`);o(V,Re),T(()=>{let e=I.map(e=>h(()=>{let t=v(),n=C(`g`,t);o(t,n);let i=C(`text`,n);o(n,i),T(()=>{y(i,`x`,String(e.x))}),T(()=>{y(i,`y`,`212`)}),y(i,`textAnchor`,`middle`),r(i,`bi-axis-label`);let a=l(i);o(i,a),T(()=>{x(a,e.label)});let s=C(`circle`,n);o(n,s),T(()=>{y(s,`cx`,String(e.x))}),T(()=>{y(s,`cy`,String(e.mysqlY))}),y(s,`r`,`3.5`),y(s,`fill`,`var(--b-mysql)`),y(s,`opacity`,`0.85`);let c=C(`circle`,n);o(n,c),T(()=>{y(c,`cx`,String(e.x))}),T(()=>{y(c,`cy`,String(e.pgY))}),y(c,`r`,`3.5`),y(c,`fill`,`var(--b-pg)`),y(c,`opacity`,`0.85`);let u=C(`circle`,n);o(n,u),T(()=>{y(u,`cx`,String(e.x))}),T(()=>{y(u,`cy`,String(e.redisY))}),y(u,`r`,`3.5`),y(u,`fill`,`var(--b-redis)`),y(u,`opacity`,`0.85`);let d=C(`circle`,n);return o(n,d),T(()=>{y(d,`cx`,String(e.x))}),T(()=>{y(d,`cy`,String(e.apiY))}),y(d,`r`,`3.5`),y(d,`fill`,`var(--b-api)`),y(d,`opacity`,`0.85`),t},!0));_(()=>s(e,V,Re))});let G=C(`g`,V);o(V,G),T(()=>{y(G,`transform`,String(`translate(${j-M.r-100}, ${M.t+4})`))});let K=C(`circle`,G);o(G,K),y(K,`cx`,`0`),y(K,`cy`,`0`),y(K,`r`,`4`),y(K,`fill`,`var(--b-mysql)`);let q=C(`text`,G);o(G,q),y(q,`x`,`10`),y(q,`y`,`4`),r(q,`bi-axis-label`),o(q,g(`MySQL`));let J=C(`circle`,G);o(G,J),y(J,`cx`,`50`),y(J,`cy`,`0`),y(J,`r`,`4`),y(J,`fill`,`var(--b-pg)`);let Y=C(`text`,G);o(G,Y),y(Y,`x`,`60`),y(Y,`y`,`4`),r(Y,`bi-axis-label`),o(Y,g(`PG`));let X=C(`circle`,G);o(G,X),y(X,`cx`,`0`),y(X,`cy`,`16`),y(X,`r`,`4`),y(X,`fill`,`var(--b-redis)`);let Z=C(`text`,G);o(G,Z),y(Z,`x`,`10`),y(Z,`y`,`20`),r(Z,`bi-axis-label`),o(Z,g(`Redis`));let Q=C(`circle`,G);o(G,Q),y(Q,`cx`,`50`),y(Q,`cy`,`16`),y(Q,`r`,`4`),y(Q,`fill`,`var(--b-api)`);let $=C(`text`,G);o(G,$),y($,`x`,`60`),y($,`y`,`20`),r($,`bi-axis-label`),o($,g(`API`));let ze=[];T(()=>{ze=t(be,ye,ze,re||[],(e,t)=>e.time,(e,t)=>{let r=a(e),o=a(t);return i((e,t,i)=>E(e,i,()=>n(Object.assign(e=>{let t=m(`div`,e);t.className=`bi-tp-group`;let n=m(`div`,t);f(t,n),n.className=`bi-tp-val`;let i=b(`rue:compiled-slot`);f(n,i),T(()=>{let e=r.get().value.toFixed(1);_(()=>s(e,n,i))}),f(n,p(`T`));let a=m(`div`,t);f(t,a),a.className=`bi-tp-bar-shell`;let o=m(`div`,a);f(a,o),o.className=`bi-tp-fill`;let c;T(()=>{let e={height:`${Math.max(8,r.get().value/oe*100)}%`};Object.is(c,e)||(c=e,d(o,e))});let l=m(`div`,t);f(t,l),l.className=`bi-tp-label`;let h=p(``);return f(l,h),u(h,()=>r.get().time),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n),o.set(i)})})});let Be=[];T(()=>{Be=t(Se,xe,Be,A||[],(e,t)=>e.rank,(e,t)=>{let r=a(e),o=a(t);return i((e,t,i)=>E(e,i,()=>n(Object.assign(e=>{let t=m(`div`,e);t.className=`bi-query-row`;let n=m(`span`,t);f(t,n);let i;T(()=>{let e=`bi-query-rank ${r.get().rank<=3?`top3`:``}`,t=e==null?``:String(e);Object.is(i,t)||(i=t,n.className=t)});let a=p(``);f(n,a),u(a,()=>r.get().rank);let o=m(`span`,t);f(t,o),o.className=`bi-query-sql`;let s=p(``);f(o,s),u(s,()=>r.get().sql);let c=m(`span`,t);f(t,c);let l;T(()=>{let e=`bi-query-src ${ue[r.get().source.toLowerCase().replace(` `,`-`)]||ue[r.get().source===`ClickHouse`?`ch`:r.get().source===`Redis`?`redis`:r.get().source===`MySQL`?`mysql`:r.get().source===`PostgreSQL`?`pg`:r.get().source===`GraphQL`?`gql`:`api`]}`,t=e==null?``:String(e);Object.is(l,t)||(l=t,c.className=t)});let d=p(``);f(c,d),u(d,()=>r.get().source);let h=m(`span`,t);f(t,h),h.className=`bi-query-freq`;let g=p(``);f(h,g),u(g,()=>r.get().freq);let _=m(`span`,t);f(t,_);let v;T(()=>{let e=`bi-query-ms ${R(r.get().avgMs)}`,t=e==null?``:String(e);Object.is(v,t)||(v=t,_.className=t)});let y=p(``);return f(_,y),u(y,()=>r.get().avgMs),f(_,p(`ms`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n),o.set(i)})})});let Ve=[];return T(()=>{Ve=t(we,Ce,Ve,ie||[],(e,t)=>t,(e,t)=>{let r=a(e),o=a(t);return i((e,t,i)=>E(e,i,()=>n(Object.assign(e=>{let t=m(`div`,e);t.className=`bi-alert-row`;let n=m(`span`,t);f(t,n),n.className=`bi-alert-time`;let i=p(``);f(n,i),u(i,()=>r.get().time);let a=m(`span`,t);f(t,a);let o;T(()=>{let e=`bi-alert-level ${r.get().level}`,t=e==null?``:String(e);Object.is(o,t)||(o=t,a.className=t)});let s=p(``);f(a,s),u(s,()=>r.get().level);let c=m(`span`,t);f(t,c),c.className=`bi-alert-msg`;let l=p(``);f(c,l),u(l,()=>r.get().message);let d=m(`span`,t);f(t,d);let h;T(()=>{let e=`bi-alert-resolved ${r.get().resolved?`yes`:`no`}`,t=e==null?``:String(e);Object.is(h,t)||(h=t,d.className=t)});let g=p(``);return f(d,g),u(g,()=>r.get().resolved?`已恢复`:`处理中`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n),o.set(i)})})}),o(c,g(` `)),c},!0),e=>ee(()=>{}));export{z as default};