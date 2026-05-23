import{$ as e,G as t,H as n,J as r,K as i,W as a,at as o,d as s,kt as c,l,q as u,st as d,tt as f,xt as p}from"./vapor-runtime-BAZOdMd8.js";import{n as m}from"./vapor-helpers-vapor-BvUp1QnH.js";var h=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],g=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],_=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],v=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],y=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],b=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],x=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],S=700,C=220,w={t:20,r:16,b:36,l:16},T=S-w.l-w.r,E=C-w.t-w.b,D=80,O=v.map(e=>{let t=w.l+T/Math.max(v.length-1,1)*v.indexOf(e);return{...e,x:t,mysqlY:w.t+E-e.mysql/D*E,pgY:w.t+E-e.pg/D*E,redisY:w.t+E-e.redis/D*E,apiY:w.t+E-e.api/D*E}}),k=e=>O.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...y.map(e=>e.value)),te=`
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
`,ne=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),re=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ie={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ae={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},oe=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>s(v=>{let T=t(),A=i(`style`,T);n(T,A),c(()=>{d(A,te)});let j=i(`div`,T);n(T,j),f(j,`bi-scope bi-page`);let M=i(`section`,j);n(j,M),f(M,`bi-hero bi-card`);let N=i(`div`,M);n(M,N);let P=i(`p`,N);n(N,P),f(P,`bi-kicker`),n(P,u(`BI Platform Architecture / Realtime Monitor`));let se=i(`h1`,N);n(N,se),n(se,u(`多源异构数据接入架构，实时驱动业务决策`));let F=i(`p`,N);n(N,F),f(F,`bi-hero-desc`),n(F,u(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=i(`div`,N);n(N,I),f(I,`bi-tags`);let L=i(`span`,I);n(I,L),f(L,`bi-tag`);let ce=i(`span`,L);n(L,ce),f(ce,`dot`),n(L,u(`6 数据源在线`));let R=i(`span`,I);n(I,R),f(R,`bi-tag`),n(R,u(`CDC 实时同步`));let z=i(`span`,I);n(I,z),f(z,`bi-tag`),n(z,u(`ETL 批处理`));let le=i(`span`,I);n(I,le),f(le,`bi-tag`),n(le,u(`四层仓储存档`));let ue=i(`span`,I);n(I,ue),f(ue,`bi-tag`),n(ue,u(`GraphQL + REST 双协议`));let B=i(`div`,M);n(M,B),f(B,`bi-metrics-grid`);let de=a(`rue:list:start`),fe=a(`rue:list:end`);n(B,de),n(B,fe);let pe=new Map;c(()=>{pe=m({items:_||[],getKey:(e,t)=>e.label,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(o,u,m,h,g)=>{l(s(()=>{let s=t(),u=i(`div`,s);n(s,u),c(()=>{e(u,`key`,String(o.label))}),f(u,`bi-metric-card`);let m=i(`div`,u);n(u,m),f(m,`bi-metric-label`);let h=a(`rue:slot:anchor`);n(m,h),c(()=>{let e=o.label;p(()=>l(e,m,h))});let g=i(`div`,u);n(u,g),f(g,`bi-metric-value`);let _=r(g);n(g,_),c(()=>{d(_,o.value)});let v=i(`span`,u);n(u,v),c(()=>{f(v,String(`bi-metric-delta ${o.delta.startsWith(`+`)&&o.label===`异常告警`?`down`:`up`}`))});let y=a(`rue:slot:anchor`);return n(v,y),c(()=>{let e=o.delta;p(()=>l(e,v,y))}),s}),u,m)}})});let V=i(`section`,j);n(j,V),f(V,`bi-card`);let me=i(`div`,V);n(V,me),o(me,{padding:`28px 28px 0`});let H=i(`div`,me);n(me,H),f(H,`bi-section-title`);let he=i(`div`,H);n(H,he);let ge=i(`p`,he);n(he,ge),f(ge,`bi-eyebrow`),n(ge,u(`Data Sources`));let _e=i(`h2`,he);n(he,_e),n(_e,u(`数据源连接池`));let ve=i(`p`,H);n(H,ve),n(ve,u(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let ye=i(`div`,V);n(V,ye),f(ye,`bi-sources-grid`);let be=a(`rue:list:start`),xe=a(`rue:list:end`);n(ye,be),n(ye,xe);let Se=new Map;c(()=>{Se=m({items:h||[],getKey:(e,t)=>e.id,elements:Se,parent:ye,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(h,g,_,v,y)=>{l(s(()=>{let g=t(),_=i(`div`,g);n(g,_),c(()=>{e(_,`key`,String(h.id))}),f(_,`bi-src`);let v=i(`div`,_);n(_,v),f(v,`bi-src-head`);let y=i(`div`,v);n(v,y),c(()=>{f(y,String(`bi-src-icon ${ie[h.id]}`))});let b=a(`rue:slot:anchor`);n(y,b),c(()=>{let e=h.icon;p(()=>l(e,y,b))});let x=i(`div`,v);n(v,x),o(x,{flex:1});let S=i(`div`,x);n(x,S),o(S,{display:`flex`,alignItems:`center`,gap:8});let C=i(`span`,S);n(S,C),f(C,`bi-src-name`);let w=a(`rue:slot:anchor`);n(C,w),c(()=>{let e=h.name;p(()=>l(e,C,w))});let T=i(`span`,S);n(S,T),c(()=>{f(T,String(`bi-status-dot ${h.status}`))});let E=i(`span`,x);n(x,E),c(()=>{f(E,String(`bi-src-type ${ae[h.id]}`))});let D=a(`rue:slot:anchor`);n(E,D),c(()=>{let e=h.type;p(()=>l(e,E,D))});let O=i(`div`,_);n(_,O),f(O,`bi-src-stats`);let k=i(`div`,O);n(O,k);let ee=i(`div`,k);n(k,ee),f(ee,`bi-src-stat-label`),n(ee,u(`QPS`));let te=i(`div`,k);n(k,te),f(te,`bi-src-stat-value`);let oe=a(`rue:slot:anchor`);n(te,oe),c(()=>{let e=ne(h.qps);p(()=>l(e,te,oe))});let A=i(`div`,O);n(O,A);let j=i(`div`,A);n(A,j),f(j,`bi-src-stat-label`),n(j,u(`延迟`));let M=i(`div`,A);n(A,M),f(M,`bi-src-stat-value`);let N=a(`rue:slot:anchor`);n(M,N),c(()=>{let e=re(h.latency);p(()=>l(e,M,N))});let P=i(`div`,O);n(O,P);let se=i(`div`,P);n(P,se),f(se,`bi-src-stat-label`),n(se,u(`可用率`));let F=i(`div`,P);n(P,F),f(F,`bi-src-stat-value`);let I=a(`rue:slot:anchor`);n(F,I),c(()=>{let e=h.uptime;p(()=>l(e,F,I))});let L=i(`div`,_);n(_,L),f(L,`bi-src-conn-bar`);let ce=i(`div`,L);n(L,ce),c(()=>{f(ce,String(`bi-src-conn-fill ${ie[h.id]}`))}),c(()=>{o(ce,{width:`${h.connections/h.maxConn*100}%`})});let R=i(`div`,_);n(_,R),o(R,{marginTop:6,display:`flex`,justifyContent:`space-between`});let z=i(`span`,R);n(R,z),f(z,`bi-src-stat-unit`);let le=a(`rue:slot:anchor`);n(z,le),c(()=>{let e=h.connections;p(()=>l(e,z,le))}),n(z,u(` / `));let ue=a(`rue:slot:anchor`);n(z,ue),c(()=>{let e=h.maxConn;p(()=>l(e,z,ue))}),n(z,u(` 连接`));let B=i(`div`,_);n(_,B),f(B,`bi-src-dbs`);let de=a(`rue:list:start`),fe=a(`rue:list:end`);n(B,de),n(B,fe);let pe=new Map;return c(()=>{pe=m({items:h.databases||[],getKey:(e,t)=>e,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(a,o,u,p,m)=>{l(s(()=>{let o=t(),s=i(`span`,o);n(o,s),c(()=>{e(s,`key`,String(a))}),f(s,`bi-src-db`);let l=r(s);return n(s,l),c(()=>{d(l,a)}),o}),o,u)}})}),g}),g,_)}})});let U=i(`section`,j);n(j,U),f(U,`bi-card`);let Ce=i(`div`,U);n(U,Ce),o(Ce,{padding:`28px 28px 0`});let W=i(`div`,Ce);n(Ce,W),f(W,`bi-section-title`);let we=i(`div`,W);n(W,we);let Te=i(`p`,we);n(we,Te),f(Te,`bi-eyebrow`),n(Te,u(`Data Pipeline`));let Ee=i(`h2`,we);n(we,Ee),n(Ee,u(`数据处理管线`));let De=i(`p`,W);n(W,De),n(De,u(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let Oe=i(`div`,U);n(U,Oe),f(Oe,`bi-pipeline`);let ke=a(`rue:list:start`),Ae=a(`rue:list:end`);n(Oe,ke),n(Oe,Ae);let je=new Map;c(()=>{je=m({items:g||[],getKey:(e,t)=>e.id,elements:je,parent:Oe,before:Ae,singleRoot:!0,start:ke,renderItem:(o,u,h,_,v)=>{l(s(()=>{let u=t(),h=i(`div`,u);n(u,h),c(()=>{e(h,`key`,String(o.id))}),f(h,`bi-pipe-stage`);let _=i(`div`,h);n(h,_),f(_,`bi-pipe-icon`);let y=a(`rue:slot:anchor`);n(_,y),c(()=>{let e=o.icon;p(()=>l(e,_,y))});let b=i(`div`,h);n(h,b),f(b,`bi-pipe-name`);let x=a(`rue:slot:anchor`);n(b,x),c(()=>{let e=o.name;p(()=>l(e,b,x))});let S=i(`div`,h);n(h,S),f(S,`bi-pipe-desc`);let C=a(`rue:slot:anchor`);n(S,C),c(()=>{let e=o.desc;p(()=>l(e,S,C))});let w=i(`div`,h);n(h,w),f(w,`bi-pipe-items`);let T=a(`rue:list:start`),E=a(`rue:list:end`);n(w,T),n(w,E);let D=new Map;c(()=>{D=m({items:o.items||[],getKey:(e,t)=>e,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(a,o,u,p,m)=>{l(s(()=>{let o=t(),s=i(`span`,o);n(o,s),c(()=>{e(s,`key`,String(a))}),f(s,`bi-pipe-item`);let l=r(s);return n(s,l),c(()=>{d(l,a)}),o}),o,u)}})});let O=a(`rue:slot:anchor`);return n(h,O),c(()=>{let e=v<g.length-1?s(()=>{let e=t(),r=i(`div`,e);return n(e,r),f(r,`bi-pipe-arrow`),e}):``;p(()=>l(e,h,O))}),u}),u,h)}})});let G=i(`section`,j);n(j,G),f(G,`bi-chart-section`);let K=i(`article`,G);n(G,K),f(K,`bi-card bi-chart-card`);let Me=i(`div`,K);n(K,Me),f(Me,`bi-section-title`);let Ne=i(`div`,Me);n(Me,Ne);let Pe=i(`p`,Ne);n(Ne,Pe),f(Pe,`bi-eyebrow`),n(Pe,u(`Latency Monitor`));let Fe=i(`h2`,Ne);n(Ne,Fe),n(Fe,u(`24H 延迟趋势`));let Ie=i(`div`,K);n(K,Ie),f(Ie,`bi-chart-shell`);let q=i(`svg`,Ie);n(Ie,q),c(()=>{e(q,`viewBox`,String(`0 0 ${S} ${C}`))}),f(q,`bi-chart-svg`),e(q,`role`,`img`),e(q,`aria-label`,`24小时延迟趋势图`);let Le=i(`defs`,q);n(q,Le);let J=i(`linearGradient`,Le);n(Le,J),e(J,`id`,`biLatMysql`),e(J,`x1`,`0`),e(J,`x2`,`0`),e(J,`y1`,`0`),e(J,`y2`,`1`);let Re=i(`stop`,J);n(J,Re),e(Re,`offset`,`0%`),e(Re,`stopColor`,`var(--b-mysql)`),e(Re,`stopOpacity`,`0.25`);let ze=i(`stop`,J);n(J,ze),e(ze,`offset`,`100%`),e(ze,`stopColor`,`var(--b-mysql)`),e(ze,`stopOpacity`,`0`);let Y=i(`linearGradient`,Le);n(Le,Y),e(Y,`id`,`biLatApi`),e(Y,`x1`,`0`),e(Y,`x2`,`0`),e(Y,`y1`,`0`),e(Y,`y2`,`1`);let Be=i(`stop`,Y);n(Y,Be),e(Be,`offset`,`0%`),e(Be,`stopColor`,`var(--b-api)`),e(Be,`stopOpacity`,`0.2`);let Ve=i(`stop`,Y);n(Y,Ve),e(Ve,`offset`,`100%`),e(Ve,`stopColor`,`var(--b-api)`),e(Ve,`stopOpacity`,`0`);let He=a(`rue:list:start`),Ue=a(`rue:list:end`);n(q,He),n(q,Ue);let We=new Map;c(()=>{We=m({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:We,parent:q,before:Ue,singleRoot:!0,trackIndex:!1,start:He,renderItem:(a,o,p,m,h)=>{l(s(()=>{let o=t(),s=w.t+E-a*E,l=i(`g`,o);n(o,l),c(()=>{e(l,`key`,String(a))});let p=i(`line`,l);n(l,p),c(()=>{e(p,`x1`,String(w.l))}),c(()=>{e(p,`y1`,String(s))}),c(()=>{e(p,`x2`,String(S-w.r))}),c(()=>{e(p,`y2`,String(s))}),f(p,`bi-grid-line`);let m=i(`text`,l);n(l,m),c(()=>{e(m,`x`,String(w.l+4))}),c(()=>{e(m,`y`,String(s-6))}),f(m,`bi-grid-label`);let h=r(m);return n(m,h),c(()=>{d(h,(D*a).toFixed(0))}),n(m,u(`ms`)),o}),o,p)}})});let Ge=i(`path`,q);n(q,Ge),c(()=>{e(Ge,`d`,String(`${k(`mysqlY`)} L ${O[O.length-1].x} ${w.t+E} L ${O[0].x} ${w.t+E} Z`))}),e(Ge,`fill`,`url(#biLatMysql)`);let Ke=i(`path`,q);n(q,Ke),c(()=>{e(Ke,`d`,String(k(`apiY`)))}),f(Ke,`bi-line-path`),e(Ke,`stroke`,`var(--b-api)`);let qe=i(`path`,q);n(q,qe),c(()=>{e(qe,`d`,String(k(`mysqlY`)))}),f(qe,`bi-line-path`),e(qe,`stroke`,`var(--b-mysql)`);let Je=i(`path`,q);n(q,Je),c(()=>{e(Je,`d`,String(k(`pgY`)))}),f(Je,`bi-line-path`),e(Je,`stroke`,`var(--b-pg)`);let Ye=i(`path`,q);n(q,Ye),c(()=>{e(Ye,`d`,String(k(`redisY`)))}),f(Ye,`bi-line-path`),e(Ye,`stroke`,`var(--b-redis)`);let Xe=a(`rue:list:start`),Ze=a(`rue:list:end`);n(q,Xe),n(q,Ze);let Qe=new Map;c(()=>{Qe=m({items:O||[],getKey:(e,t)=>e.label,elements:Qe,parent:q,before:Ze,singleRoot:!0,trackIndex:!1,start:Xe,renderItem:(a,o,u,p,m)=>{l(s(()=>{let o=t(),s=i(`g`,o);n(o,s),c(()=>{e(s,`key`,String(a.label))});let l=i(`text`,s);n(s,l),c(()=>{e(l,`x`,String(a.x))}),c(()=>{e(l,`y`,String(C-8))}),e(l,`textAnchor`,`middle`),f(l,`bi-axis-label`);let u=r(l);n(l,u),c(()=>{d(u,a.label)});let p=i(`circle`,s);n(s,p),c(()=>{e(p,`cx`,String(a.x))}),c(()=>{e(p,`cy`,String(a.mysqlY))}),e(p,`r`,`3.5`),e(p,`fill`,`var(--b-mysql)`),e(p,`opacity`,`0.85`);let m=i(`circle`,s);n(s,m),c(()=>{e(m,`cx`,String(a.x))}),c(()=>{e(m,`cy`,String(a.pgY))}),e(m,`r`,`3.5`),e(m,`fill`,`var(--b-pg)`),e(m,`opacity`,`0.85`);let h=i(`circle`,s);n(s,h),c(()=>{e(h,`cx`,String(a.x))}),c(()=>{e(h,`cy`,String(a.redisY))}),e(h,`r`,`3.5`),e(h,`fill`,`var(--b-redis)`),e(h,`opacity`,`0.85`);let g=i(`circle`,s);return n(s,g),c(()=>{e(g,`cx`,String(a.x))}),c(()=>{e(g,`cy`,String(a.apiY))}),e(g,`r`,`3.5`),e(g,`fill`,`var(--b-api)`),e(g,`opacity`,`0.85`),o}),o,u)}})});let X=i(`g`,q);n(q,X),c(()=>{e(X,`transform`,String(`translate(${S-w.r-100}, ${w.t+4})`))});let $e=i(`circle`,X);n(X,$e),e($e,`cx`,`0`),e($e,`cy`,`0`),e($e,`r`,`4`),e($e,`fill`,`var(--b-mysql)`);let et=i(`text`,X);n(X,et),e(et,`x`,`10`),e(et,`y`,`4`),f(et,`bi-axis-label`),n(et,u(`MySQL`));let tt=i(`circle`,X);n(X,tt),e(tt,`cx`,`50`),e(tt,`cy`,`0`),e(tt,`r`,`4`),e(tt,`fill`,`var(--b-pg)`);let nt=i(`text`,X);n(X,nt),e(nt,`x`,`60`),e(nt,`y`,`4`),f(nt,`bi-axis-label`),n(nt,u(`PG`));let rt=i(`circle`,X);n(X,rt),e(rt,`cx`,`0`),e(rt,`cy`,`16`),e(rt,`r`,`4`),e(rt,`fill`,`var(--b-redis)`);let it=i(`text`,X);n(X,it),e(it,`x`,`10`),e(it,`y`,`20`),f(it,`bi-axis-label`),n(it,u(`Redis`));let at=i(`circle`,X);n(X,at),e(at,`cx`,`50`),e(at,`cy`,`16`),e(at,`r`,`4`),e(at,`fill`,`var(--b-api)`);let ot=i(`text`,X);n(X,ot),e(ot,`x`,`60`),e(ot,`y`,`20`),f(ot,`bi-axis-label`),n(ot,u(`API`));let Z=i(`article`,G);n(G,Z),f(Z,`bi-card bi-tp-card`);let st=i(`div`,Z);n(Z,st),f(st,`bi-section-title`);let ct=i(`div`,st);n(st,ct);let lt=i(`p`,ct);n(ct,lt),f(lt,`bi-eyebrow`),n(lt,u(`Weekly Throughput`));let ut=i(`h2`,ct);n(ct,ut),n(ut,u(`周吞吐量`));let dt=i(`div`,Z);n(Z,dt),f(dt,`bi-tp-bars`);let ft=a(`rue:list:start`),pt=a(`rue:list:end`);n(dt,ft),n(dt,pt);let mt=new Map;c(()=>{mt=m({items:y||[],getKey:(e,t)=>e.time,elements:mt,parent:dt,before:pt,singleRoot:!0,trackIndex:!1,start:ft,renderItem:(m,h,g,_,v)=>{l(s(()=>{let s=t(),h=i(`div`,s);n(s,h),c(()=>{e(h,`key`,String(m.time))}),f(h,`bi-tp-group`);let g=i(`div`,h);n(h,g),f(g,`bi-tp-val`);let _=r(g);n(g,_),c(()=>{d(_,m.value.toFixed(1))}),n(g,u(`T`));let v=i(`div`,h);n(h,v),f(v,`bi-tp-bar-shell`);let y=i(`div`,v);n(v,y),f(y,`bi-tp-fill`),c(()=>{o(y,{height:`${Math.max(8,m.value/ee*100)}%`})});let b=i(`div`,h);n(h,b),f(b,`bi-tp-label`);let x=a(`rue:slot:anchor`);return n(b,x),c(()=>{let e=m.time;p(()=>l(e,b,x))}),s}),h,g)}})});let Q=i(`section`,j);n(j,Q),f(Q,`bi-bottom-grid`);let $=i(`article`,Q);n(Q,$),f($,`bi-card bi-queries-card`);let ht=i(`div`,$);n($,ht),f(ht,`bi-section-title`);let gt=i(`div`,ht);n(ht,gt);let _t=i(`p`,gt);n(gt,_t),f(_t,`bi-eyebrow`),n(_t,u(`Top Queries`));let vt=i(`h2`,gt);n(gt,vt),n(vt,u(`高频查询排行`));let yt=i(`div`,$);n($,yt);let bt=a(`rue:list:start`),xt=a(`rue:list:end`);n(yt,bt),n(yt,xt);let St=new Map;c(()=>{St=m({items:b||[],getKey:(e,t)=>e.rank,elements:St,parent:yt,before:xt,singleRoot:!0,trackIndex:!1,start:bt,renderItem:(r,o,d,m,h)=>{l(s(()=>{let o=t(),s=i(`div`,o);n(o,s),c(()=>{e(s,`key`,String(r.rank))}),f(s,`bi-query-row`);let d=i(`span`,s);n(s,d),c(()=>{f(d,String(`bi-query-rank ${r.rank<=3?`top3`:``}`))});let m=a(`rue:slot:anchor`);n(d,m),c(()=>{let e=r.rank;p(()=>l(e,d,m))});let h=i(`span`,s);n(s,h),f(h,`bi-query-sql`);let g=a(`rue:slot:anchor`);n(h,g),c(()=>{let e=r.sql;p(()=>l(e,h,g))});let _=i(`span`,s);n(s,_),c(()=>{f(_,String(`bi-query-src ${ie[r.source.toLowerCase().replace(` `,`-`)]||ie[r.source===`ClickHouse`?`ch`:r.source===`Redis`?`redis`:r.source===`MySQL`?`mysql`:r.source===`PostgreSQL`?`pg`:r.source===`GraphQL`?`gql`:`api`]}`))});let v=a(`rue:slot:anchor`);n(_,v),c(()=>{let e=r.source;p(()=>l(e,_,v))});let y=i(`span`,s);n(s,y),f(y,`bi-query-freq`);let b=a(`rue:slot:anchor`);n(y,b),c(()=>{let e=r.freq;p(()=>l(e,y,b))});let x=i(`span`,s);n(s,x),c(()=>{f(x,String(`bi-query-ms ${oe(r.avgMs)}`))});let S=a(`rue:slot:anchor`);return n(x,S),c(()=>{let e=r.avgMs;p(()=>l(e,x,S))}),n(x,u(`ms`)),o}),o,d)}})});let Ct=i(`article`,Q);n(Q,Ct),f(Ct,`bi-card bi-alert-card`);let wt=i(`div`,Ct);n(Ct,wt),f(wt,`bi-section-title`);let Tt=i(`div`,wt);n(wt,Tt);let Et=i(`p`,Tt);n(Tt,Et),f(Et,`bi-eyebrow`),n(Et,u(`Alert Center`));let Dt=i(`h2`,Tt);n(Tt,Dt),n(Dt,u(`告警事件`));let Ot=i(`div`,Ct);n(Ct,Ot);let kt=a(`rue:list:start`),At=a(`rue:list:end`);n(Ot,kt),n(Ot,At);let jt=new Map;return c(()=>{jt=m({items:x||[],getKey:(e,t)=>t,elements:jt,parent:Ot,before:At,singleRoot:!0,start:kt,renderItem:(o,u,m,h,g)=>{l(s(()=>{let s=t(),u=i(`div`,s);n(s,u),c(()=>{e(u,`key`,String(g))}),f(u,`bi-alert-row`);let m=i(`span`,u);n(u,m),f(m,`bi-alert-time`);let h=a(`rue:slot:anchor`);n(m,h),c(()=>{let e=o.time;p(()=>l(e,m,h))});let _=i(`span`,u);n(u,_),c(()=>{f(_,String(`bi-alert-level ${o.level}`))});let v=a(`rue:slot:anchor`);n(_,v),c(()=>{let e=o.level;p(()=>l(e,_,v))});let y=i(`span`,u);n(u,y),f(y,`bi-alert-msg`);let b=a(`rue:slot:anchor`);n(y,b),c(()=>{let e=o.message;p(()=>l(e,y,b))});let x=i(`span`,u);n(u,x),c(()=>{f(x,String(`bi-alert-resolved ${o.resolved?`yes`:`no`}`))});let S=r(x);return n(x,S),c(()=>{d(S,o.resolved?`已恢复`:`处理中`)}),s}),u,m)}})}),T});export{A as default};