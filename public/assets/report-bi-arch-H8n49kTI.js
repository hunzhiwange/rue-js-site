import{Q as e,Vt as t,at as n,bt as r,dt as i,it as a,l as o,nt as s,o as c,pt as l,rt as u,tn as d,tt as f,vt as p}from"./vapor-runtime-x7F5M-49.js";import{n as m}from"./vapor-helpers-vapor-D1LP4JjK.js";var h=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],g=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],_=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],v=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],y=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],b=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],x=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],S=700,C=220,w={t:20,r:16,b:36,l:16},T=S-w.l-w.r,E=C-w.t-w.b,D=80,O=v.map(e=>{let t=w.l+T/Math.max(v.length-1,1)*v.indexOf(e);return{...e,x:t,mysqlY:w.t+E-e.mysql/D*E,pgY:w.t+E-e.pg/D*E,redisY:w.t+E-e.redis/D*E,apiY:w.t+E-e.api/D*E}}),k=e=>O.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...y.map(e=>e.value)),te=`
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
`,ne=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),re=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ie={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ae={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},oe=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>o(v=>{let T=s(),A=u(`style`,T);e(T,A),t(()=>{r(A,te)});let j=u(`div`,T);e(T,j),l(j,`bi-scope bi-page`);let M=u(`section`,j);e(j,M),l(M,`bi-hero bi-card`);let N=u(`div`,M);e(M,N);let P=u(`p`,N);e(N,P),l(P,`bi-kicker`),e(P,a(`BI Platform Architecture / Realtime Monitor`));let se=u(`h1`,N);e(N,se),e(se,a(`多源异构数据接入架构，实时驱动业务决策`));let F=u(`p`,N);e(N,F),l(F,`bi-hero-desc`),e(F,a(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=u(`div`,N);e(N,I),l(I,`bi-tags`);let L=u(`span`,I);e(I,L),l(L,`bi-tag`);let ce=u(`span`,L);e(L,ce),l(ce,`dot`),e(L,a(`6 数据源在线`));let R=u(`span`,I);e(I,R),l(R,`bi-tag`),e(R,a(`CDC 实时同步`));let z=u(`span`,I);e(I,z),l(z,`bi-tag`),e(z,a(`ETL 批处理`));let le=u(`span`,I);e(I,le),l(le,`bi-tag`),e(le,a(`四层仓储存档`));let ue=u(`span`,I);e(I,ue),l(ue,`bi-tag`),e(ue,a(`GraphQL + REST 双协议`));let B=u(`div`,M);e(M,B),l(B,`bi-metrics-grid`);let de=f(`rue:list:start`),fe=f(`rue:list:end`);e(B,de),e(B,fe);let pe=new Map;t(()=>{pe=m({items:_||[],getKey:(e,t)=>e.label,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(a,p,m,h,g)=>{c(o(()=>{let o=s(),p=u(`div`,o);e(o,p),t(()=>{i(p,`key`,String(a.label))}),l(p,`bi-metric-card`);let m=u(`div`,p);e(p,m),l(m,`bi-metric-label`);let h=f(`rue:slot:anchor`);e(m,h),t(()=>{let e=a.label;d(()=>c(e,m,h))});let g=u(`div`,p);e(p,g),l(g,`bi-metric-value`);let _=n(g);e(g,_),t(()=>{r(_,a.value)});let v=u(`span`,p);e(p,v),t(()=>{l(v,`bi-metric-delta ${a.delta.startsWith(`+`)&&a.label===`异常告警`?`down`:`up`}`)});let y=f(`rue:slot:anchor`);return e(v,y),t(()=>{let e=a.delta;d(()=>c(e,v,y))}),o}),p,m)}})});let V=u(`section`,j);e(j,V),l(V,`bi-card`);let me=u(`div`,V);e(V,me),p(me,{padding:`28px 28px 0`});let H=u(`div`,me);e(me,H),l(H,`bi-section-title`);let he=u(`div`,H);e(H,he);let ge=u(`p`,he);e(he,ge),l(ge,`bi-eyebrow`),e(ge,a(`Data Sources`));let _e=u(`h2`,he);e(he,_e),e(_e,a(`数据源连接池`));let ve=u(`p`,H);e(H,ve),e(ve,a(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let ye=u(`div`,V);e(V,ye),l(ye,`bi-sources-grid`);let be=f(`rue:list:start`),xe=f(`rue:list:end`);e(ye,be),e(ye,xe);let Se=new Map;t(()=>{Se=m({items:h||[],getKey:(e,t)=>e.id,elements:Se,parent:ye,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(h,g,_,v,y)=>{c(o(()=>{let g=s(),_=u(`div`,g);e(g,_),t(()=>{i(_,`key`,String(h.id))}),l(_,`bi-src`);let v=u(`div`,_);e(_,v),l(v,`bi-src-head`);let y=u(`div`,v);e(v,y),t(()=>{l(y,`bi-src-icon ${ie[h.id]}`)});let b=f(`rue:slot:anchor`);e(y,b),t(()=>{let e=h.icon;d(()=>c(e,y,b))});let x=u(`div`,v);e(v,x),p(x,{flex:1});let S=u(`div`,x);e(x,S),p(S,{display:`flex`,alignItems:`center`,gap:8});let C=u(`span`,S);e(S,C),l(C,`bi-src-name`);let w=f(`rue:slot:anchor`);e(C,w),t(()=>{let e=h.name;d(()=>c(e,C,w))});let T=u(`span`,S);e(S,T),t(()=>{l(T,`bi-status-dot ${h.status}`)});let E=u(`span`,x);e(x,E),t(()=>{l(E,`bi-src-type ${ae[h.id]}`)});let D=f(`rue:slot:anchor`);e(E,D),t(()=>{let e=h.type;d(()=>c(e,E,D))});let O=u(`div`,_);e(_,O),l(O,`bi-src-stats`);let k=u(`div`,O);e(O,k);let ee=u(`div`,k);e(k,ee),l(ee,`bi-src-stat-label`),e(ee,a(`QPS`));let te=u(`div`,k);e(k,te),l(te,`bi-src-stat-value`);let oe=f(`rue:slot:anchor`);e(te,oe),t(()=>{let e=ne(h.qps);d(()=>c(e,te,oe))});let A=u(`div`,O);e(O,A);let j=u(`div`,A);e(A,j),l(j,`bi-src-stat-label`),e(j,a(`延迟`));let M=u(`div`,A);e(A,M),l(M,`bi-src-stat-value`);let N=f(`rue:slot:anchor`);e(M,N),t(()=>{let e=re(h.latency);d(()=>c(e,M,N))});let P=u(`div`,O);e(O,P);let se=u(`div`,P);e(P,se),l(se,`bi-src-stat-label`),e(se,a(`可用率`));let F=u(`div`,P);e(P,F),l(F,`bi-src-stat-value`);let I=f(`rue:slot:anchor`);e(F,I),t(()=>{let e=h.uptime;d(()=>c(e,F,I))});let L=u(`div`,_);e(_,L),l(L,`bi-src-conn-bar`);let ce=u(`div`,L);e(L,ce),t(()=>{l(ce,`bi-src-conn-fill ${ie[h.id]}`)}),t(()=>{p(ce,{width:`${h.connections/h.maxConn*100}%`})});let R=u(`div`,_);e(_,R),p(R,{marginTop:6,display:`flex`,justifyContent:`space-between`});let z=u(`span`,R);e(R,z),l(z,`bi-src-stat-unit`);let le=f(`rue:slot:anchor`);e(z,le),t(()=>{let e=h.connections;d(()=>c(e,z,le))}),e(z,a(` / `));let ue=f(`rue:slot:anchor`);e(z,ue),t(()=>{let e=h.maxConn;d(()=>c(e,z,ue))}),e(z,a(` 连接`));let B=u(`div`,_);e(_,B),l(B,`bi-src-dbs`);let de=f(`rue:list:start`),fe=f(`rue:list:end`);e(B,de),e(B,fe);let pe=new Map;return t(()=>{pe=m({items:h.databases||[],getKey:(e,t)=>e,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(a,d,f,p,m)=>{c(o(()=>{let o=s(),c=u(`span`,o);e(o,c),t(()=>{i(c,`key`,String(a))}),l(c,`bi-src-db`);let d=n(c);return e(c,d),t(()=>{r(d,a)}),o}),d,f)}})}),g}),g,_)}})});let U=u(`section`,j);e(j,U),l(U,`bi-card`);let Ce=u(`div`,U);e(U,Ce),p(Ce,{padding:`28px 28px 0`});let W=u(`div`,Ce);e(Ce,W),l(W,`bi-section-title`);let we=u(`div`,W);e(W,we);let Te=u(`p`,we);e(we,Te),l(Te,`bi-eyebrow`),e(Te,a(`Data Pipeline`));let Ee=u(`h2`,we);e(we,Ee),e(Ee,a(`数据处理管线`));let De=u(`p`,W);e(W,De),e(De,a(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let Oe=u(`div`,U);e(U,Oe),l(Oe,`bi-pipeline`);let ke=f(`rue:list:start`),Ae=f(`rue:list:end`);e(Oe,ke),e(Oe,Ae);let je=new Map;t(()=>{je=m({items:g||[],getKey:(e,t)=>e.id,elements:je,parent:Oe,before:Ae,singleRoot:!0,start:ke,renderItem:(a,p,h,_,v)=>{c(o(()=>{let p=s(),h=u(`div`,p);e(p,h),t(()=>{i(h,`key`,String(a.id))}),l(h,`bi-pipe-stage`);let _=u(`div`,h);e(h,_),l(_,`bi-pipe-icon`);let y=f(`rue:slot:anchor`);e(_,y),t(()=>{let e=a.icon;d(()=>c(e,_,y))});let b=u(`div`,h);e(h,b),l(b,`bi-pipe-name`);let x=f(`rue:slot:anchor`);e(b,x),t(()=>{let e=a.name;d(()=>c(e,b,x))});let S=u(`div`,h);e(h,S),l(S,`bi-pipe-desc`);let C=f(`rue:slot:anchor`);e(S,C),t(()=>{let e=a.desc;d(()=>c(e,S,C))});let w=u(`div`,h);e(h,w),l(w,`bi-pipe-items`);let T=f(`rue:list:start`),E=f(`rue:list:end`);e(w,T),e(w,E);let D=new Map;t(()=>{D=m({items:a.items||[],getKey:(e,t)=>e,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(a,d,f,p,m)=>{c(o(()=>{let o=s(),c=u(`span`,o);e(o,c),t(()=>{i(c,`key`,String(a))}),l(c,`bi-pipe-item`);let d=n(c);return e(c,d),t(()=>{r(d,a)}),o}),d,f)}})});let O=f(`rue:slot:anchor`);return e(h,O),t(()=>{let t=v<g.length-1?o(()=>{let t=s(),n=u(`div`,t);return e(t,n),l(n,`bi-pipe-arrow`),t}):``;d(()=>c(t,h,O))}),p}),p,h)}})});let G=u(`section`,j);e(j,G),l(G,`bi-chart-section`);let K=u(`article`,G);e(G,K),l(K,`bi-card bi-chart-card`);let Me=u(`div`,K);e(K,Me),l(Me,`bi-section-title`);let Ne=u(`div`,Me);e(Me,Ne);let Pe=u(`p`,Ne);e(Ne,Pe),l(Pe,`bi-eyebrow`),e(Pe,a(`Latency Monitor`));let Fe=u(`h2`,Ne);e(Ne,Fe),e(Fe,a(`24H 延迟趋势`));let Ie=u(`div`,K);e(K,Ie),l(Ie,`bi-chart-shell`);let q=u(`svg`,Ie);e(Ie,q),t(()=>{i(q,`viewBox`,String(`0 0 ${S} ${C}`))}),l(q,`bi-chart-svg`),i(q,`role`,`img`),i(q,`aria-label`,`24小时延迟趋势图`);let Le=u(`defs`,q);e(q,Le);let J=u(`linearGradient`,Le);e(Le,J),i(J,`id`,`biLatMysql`),i(J,`x1`,`0`),i(J,`x2`,`0`),i(J,`y1`,`0`),i(J,`y2`,`1`);let Re=u(`stop`,J);e(J,Re),i(Re,`offset`,`0%`),i(Re,`stopColor`,`var(--b-mysql)`),i(Re,`stopOpacity`,`0.25`);let ze=u(`stop`,J);e(J,ze),i(ze,`offset`,`100%`),i(ze,`stopColor`,`var(--b-mysql)`),i(ze,`stopOpacity`,`0`);let Y=u(`linearGradient`,Le);e(Le,Y),i(Y,`id`,`biLatApi`),i(Y,`x1`,`0`),i(Y,`x2`,`0`),i(Y,`y1`,`0`),i(Y,`y2`,`1`);let Be=u(`stop`,Y);e(Y,Be),i(Be,`offset`,`0%`),i(Be,`stopColor`,`var(--b-api)`),i(Be,`stopOpacity`,`0.2`);let Ve=u(`stop`,Y);e(Y,Ve),i(Ve,`offset`,`100%`),i(Ve,`stopColor`,`var(--b-api)`),i(Ve,`stopOpacity`,`0`);let He=f(`rue:list:start`),Ue=f(`rue:list:end`);e(q,He),e(q,Ue);let We=new Map;t(()=>{We=m({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:We,parent:q,before:Ue,singleRoot:!0,trackIndex:!1,start:He,renderItem:(d,f,p,m,h)=>{c(o(()=>{let o=s(),c=w.t+E-d*E,f=u(`g`,o);e(o,f),t(()=>{i(f,`key`,String(d))});let p=u(`line`,f);e(f,p),t(()=>{i(p,`x1`,String(w.l))}),t(()=>{i(p,`y1`,String(c))}),t(()=>{i(p,`x2`,String(S-w.r))}),t(()=>{i(p,`y2`,String(c))}),l(p,`bi-grid-line`);let m=u(`text`,f);e(f,m),t(()=>{i(m,`x`,String(w.l+4))}),t(()=>{i(m,`y`,String(c-6))}),l(m,`bi-grid-label`);let h=n(m);return e(m,h),t(()=>{r(h,(D*d).toFixed(0))}),e(m,a(`ms`)),o}),f,p)}})});let Ge=u(`path`,q);e(q,Ge),t(()=>{i(Ge,`d`,String(`${k(`mysqlY`)} L ${O[O.length-1].x} ${w.t+E} L ${O[0].x} ${w.t+E} Z`))}),i(Ge,`fill`,`url(#biLatMysql)`);let Ke=u(`path`,q);e(q,Ke),t(()=>{i(Ke,`d`,String(k(`apiY`)))}),l(Ke,`bi-line-path`),i(Ke,`stroke`,`var(--b-api)`);let qe=u(`path`,q);e(q,qe),t(()=>{i(qe,`d`,String(k(`mysqlY`)))}),l(qe,`bi-line-path`),i(qe,`stroke`,`var(--b-mysql)`);let Je=u(`path`,q);e(q,Je),t(()=>{i(Je,`d`,String(k(`pgY`)))}),l(Je,`bi-line-path`),i(Je,`stroke`,`var(--b-pg)`);let Ye=u(`path`,q);e(q,Ye),t(()=>{i(Ye,`d`,String(k(`redisY`)))}),l(Ye,`bi-line-path`),i(Ye,`stroke`,`var(--b-redis)`);let Xe=f(`rue:list:start`),Ze=f(`rue:list:end`);e(q,Xe),e(q,Ze);let Qe=new Map;t(()=>{Qe=m({items:O||[],getKey:(e,t)=>e.label,elements:Qe,parent:q,before:Ze,singleRoot:!0,trackIndex:!1,start:Xe,renderItem:(a,d,f,p,m)=>{c(o(()=>{let o=s(),c=u(`g`,o);e(o,c),t(()=>{i(c,`key`,String(a.label))});let d=u(`text`,c);e(c,d),t(()=>{i(d,`x`,String(a.x))}),t(()=>{i(d,`y`,String(C-8))}),i(d,`textAnchor`,`middle`),l(d,`bi-axis-label`);let f=n(d);e(d,f),t(()=>{r(f,a.label)});let p=u(`circle`,c);e(c,p),t(()=>{i(p,`cx`,String(a.x))}),t(()=>{i(p,`cy`,String(a.mysqlY))}),i(p,`r`,`3.5`),i(p,`fill`,`var(--b-mysql)`),i(p,`opacity`,`0.85`);let m=u(`circle`,c);e(c,m),t(()=>{i(m,`cx`,String(a.x))}),t(()=>{i(m,`cy`,String(a.pgY))}),i(m,`r`,`3.5`),i(m,`fill`,`var(--b-pg)`),i(m,`opacity`,`0.85`);let h=u(`circle`,c);e(c,h),t(()=>{i(h,`cx`,String(a.x))}),t(()=>{i(h,`cy`,String(a.redisY))}),i(h,`r`,`3.5`),i(h,`fill`,`var(--b-redis)`),i(h,`opacity`,`0.85`);let g=u(`circle`,c);return e(c,g),t(()=>{i(g,`cx`,String(a.x))}),t(()=>{i(g,`cy`,String(a.apiY))}),i(g,`r`,`3.5`),i(g,`fill`,`var(--b-api)`),i(g,`opacity`,`0.85`),o}),d,f)}})});let X=u(`g`,q);e(q,X),t(()=>{i(X,`transform`,String(`translate(${S-w.r-100}, ${w.t+4})`))});let $e=u(`circle`,X);e(X,$e),i($e,`cx`,`0`),i($e,`cy`,`0`),i($e,`r`,`4`),i($e,`fill`,`var(--b-mysql)`);let et=u(`text`,X);e(X,et),i(et,`x`,`10`),i(et,`y`,`4`),l(et,`bi-axis-label`),e(et,a(`MySQL`));let tt=u(`circle`,X);e(X,tt),i(tt,`cx`,`50`),i(tt,`cy`,`0`),i(tt,`r`,`4`),i(tt,`fill`,`var(--b-pg)`);let nt=u(`text`,X);e(X,nt),i(nt,`x`,`60`),i(nt,`y`,`4`),l(nt,`bi-axis-label`),e(nt,a(`PG`));let rt=u(`circle`,X);e(X,rt),i(rt,`cx`,`0`),i(rt,`cy`,`16`),i(rt,`r`,`4`),i(rt,`fill`,`var(--b-redis)`);let it=u(`text`,X);e(X,it),i(it,`x`,`10`),i(it,`y`,`20`),l(it,`bi-axis-label`),e(it,a(`Redis`));let at=u(`circle`,X);e(X,at),i(at,`cx`,`50`),i(at,`cy`,`16`),i(at,`r`,`4`),i(at,`fill`,`var(--b-api)`);let ot=u(`text`,X);e(X,ot),i(ot,`x`,`60`),i(ot,`y`,`20`),l(ot,`bi-axis-label`),e(ot,a(`API`));let Z=u(`article`,G);e(G,Z),l(Z,`bi-card bi-tp-card`);let st=u(`div`,Z);e(Z,st),l(st,`bi-section-title`);let ct=u(`div`,st);e(st,ct);let lt=u(`p`,ct);e(ct,lt),l(lt,`bi-eyebrow`),e(lt,a(`Weekly Throughput`));let ut=u(`h2`,ct);e(ct,ut),e(ut,a(`周吞吐量`));let dt=u(`div`,Z);e(Z,dt),l(dt,`bi-tp-bars`);let ft=f(`rue:list:start`),pt=f(`rue:list:end`);e(dt,ft),e(dt,pt);let mt=new Map;t(()=>{mt=m({items:y||[],getKey:(e,t)=>e.time,elements:mt,parent:dt,before:pt,singleRoot:!0,trackIndex:!1,start:ft,renderItem:(m,h,g,_,v)=>{c(o(()=>{let o=s(),h=u(`div`,o);e(o,h),t(()=>{i(h,`key`,String(m.time))}),l(h,`bi-tp-group`);let g=u(`div`,h);e(h,g),l(g,`bi-tp-val`);let _=n(g);e(g,_),t(()=>{r(_,m.value.toFixed(1))}),e(g,a(`T`));let v=u(`div`,h);e(h,v),l(v,`bi-tp-bar-shell`);let y=u(`div`,v);e(v,y),l(y,`bi-tp-fill`),t(()=>{p(y,{height:`${Math.max(8,m.value/ee*100)}%`})});let b=u(`div`,h);e(h,b),l(b,`bi-tp-label`);let x=f(`rue:slot:anchor`);return e(b,x),t(()=>{let e=m.time;d(()=>c(e,b,x))}),o}),h,g)}})});let Q=u(`section`,j);e(j,Q),l(Q,`bi-bottom-grid`);let $=u(`article`,Q);e(Q,$),l($,`bi-card bi-queries-card`);let ht=u(`div`,$);e($,ht),l(ht,`bi-section-title`);let gt=u(`div`,ht);e(ht,gt);let _t=u(`p`,gt);e(gt,_t),l(_t,`bi-eyebrow`),e(_t,a(`Top Queries`));let vt=u(`h2`,gt);e(gt,vt),e(vt,a(`高频查询排行`));let yt=u(`div`,$);e($,yt);let bt=f(`rue:list:start`),xt=f(`rue:list:end`);e(yt,bt),e(yt,xt);let St=new Map;t(()=>{St=m({items:b||[],getKey:(e,t)=>e.rank,elements:St,parent:yt,before:xt,singleRoot:!0,trackIndex:!1,start:bt,renderItem:(n,r,p,m,h)=>{c(o(()=>{let r=s(),o=u(`div`,r);e(r,o),t(()=>{i(o,`key`,String(n.rank))}),l(o,`bi-query-row`);let p=u(`span`,o);e(o,p),t(()=>{l(p,`bi-query-rank ${n.rank<=3?`top3`:``}`)});let m=f(`rue:slot:anchor`);e(p,m),t(()=>{let e=n.rank;d(()=>c(e,p,m))});let h=u(`span`,o);e(o,h),l(h,`bi-query-sql`);let g=f(`rue:slot:anchor`);e(h,g),t(()=>{let e=n.sql;d(()=>c(e,h,g))});let _=u(`span`,o);e(o,_),t(()=>{l(_,`bi-query-src ${ie[n.source.toLowerCase().replace(` `,`-`)]||ie[n.source===`ClickHouse`?`ch`:n.source===`Redis`?`redis`:n.source===`MySQL`?`mysql`:n.source===`PostgreSQL`?`pg`:n.source===`GraphQL`?`gql`:`api`]}`)});let v=f(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.source;d(()=>c(e,_,v))});let y=u(`span`,o);e(o,y),l(y,`bi-query-freq`);let b=f(`rue:slot:anchor`);e(y,b),t(()=>{let e=n.freq;d(()=>c(e,y,b))});let x=u(`span`,o);e(o,x),t(()=>{l(x,`bi-query-ms ${oe(n.avgMs)}`)});let S=f(`rue:slot:anchor`);return e(x,S),t(()=>{let e=n.avgMs;d(()=>c(e,x,S))}),e(x,a(`ms`)),r}),r,p)}})});let Ct=u(`article`,Q);e(Q,Ct),l(Ct,`bi-card bi-alert-card`);let wt=u(`div`,Ct);e(Ct,wt),l(wt,`bi-section-title`);let Tt=u(`div`,wt);e(wt,Tt);let Et=u(`p`,Tt);e(Tt,Et),l(Et,`bi-eyebrow`),e(Et,a(`Alert Center`));let Dt=u(`h2`,Tt);e(Tt,Dt),e(Dt,a(`告警事件`));let Ot=u(`div`,Ct);e(Ct,Ot);let kt=f(`rue:list:start`),At=f(`rue:list:end`);e(Ot,kt),e(Ot,At);let jt=new Map;return t(()=>{jt=m({items:x||[],getKey:(e,t)=>t,elements:jt,parent:Ot,before:At,singleRoot:!0,start:kt,renderItem:(a,p,m,h,g)=>{c(o(()=>{let o=s(),p=u(`div`,o);e(o,p),t(()=>{i(p,`key`,String(g))}),l(p,`bi-alert-row`);let m=u(`span`,p);e(p,m),l(m,`bi-alert-time`);let h=f(`rue:slot:anchor`);e(m,h),t(()=>{let e=a.time;d(()=>c(e,m,h))});let _=u(`span`,p);e(p,_),t(()=>{l(_,`bi-alert-level ${a.level}`)});let v=f(`rue:slot:anchor`);e(_,v),t(()=>{let e=a.level;d(()=>c(e,_,v))});let y=u(`span`,p);e(p,y),l(y,`bi-alert-msg`);let b=f(`rue:slot:anchor`);e(y,b),t(()=>{let e=a.message;d(()=>c(e,y,b))});let x=u(`span`,p);e(p,x),t(()=>{l(x,`bi-alert-resolved ${a.resolved?`yes`:`no`}`)});let S=n(x);return e(x,S),t(()=>{r(S,a.resolved?`已恢复`:`处理中`)}),o}),p,m)}})}),T});export{A as default};