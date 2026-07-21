import{At as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p}from"./vapor-runtime-ygJWVcNn.js";import{n as m}from"./vapor-helpers-vapor-CMwHgsXf.js";var h=[{id:`mysql`,name:`MySQL`,type:`SQL`,icon:`M`,status:`active`,qps:12480,latency:3.2,connections:248,maxConn:500,uptime:`99.97%`,color:`mysql`,databases:[`erp_prod`,`crm_master`,`ods_layer`],querySample:`SELECT * FROM orders WHERE date >= ?`},{id:`postgresql`,name:`PostgreSQL`,type:`SQL`,icon:`P`,status:`active`,qps:8920,latency:2.8,connections:176,maxConn:400,uptime:`99.99%`,color:`pg`,databases:[`analytics_dw`,`report_stage`,`dim_tables`],querySample:`SELECT SUM(amount) FROM fact_sales GROUP BY dim_date`},{id:`clickhouse`,name:`ClickHouse`,type:`OLAP`,icon:`C`,status:`active`,qps:45200,latency:12.5,connections:64,maxConn:200,uptime:`99.95%`,color:`ch`,databases:[`bi_engine`,`log_analytics`,`metrics_store`],querySample:`SELECT avg(duration) FROM access_log WHERE ts > now() - INTERVAL 1 HOUR`},{id:`redis`,name:`Redis Cluster`,type:`CACHE`,icon:`R`,status:`active`,qps:285e3,latency:.12,connections:512,maxConn:1e3,uptime:`99.999%`,color:`redis`,databases:[`cache-session`,`cache-report`,`realtime-metrics`],querySample:`GET report:dashboard:daily:20260422`},{id:`rest-api`,name:`REST API`,type:`HTTP`,icon:`A`,status:`warning`,qps:3200,latency:45.6,connections:96,maxConn:200,uptime:`99.82%`,color:`api`,databases:[`/api/v2/sales`,`/api/v2/inventory`,`/api/v2/users`],querySample:`GET /api/v2/sales/aggregate?period=monthly`},{id:`graphql`,name:`GraphQL`,type:`HTTP`,icon:`G`,status:`active`,qps:5600,latency:18.3,connections:128,maxConn:300,uptime:`99.91%`,color:`gql`,databases:[`Query.sales`,`Query.inventory`,`Mutation.sync`],querySample:`{ sales(filter: {date: {gte: "2026-04"}}) { total count } }`}],g=[{id:`ingest`,name:`数据采集`,desc:`实时 CDC + 批量 ETL`,icon:`⬇`,items:[`Debezium CDC`,`Airflow ETL`,`Fluentd Log`]},{id:`transform`,name:`数据清洗`,desc:`标准化 / 去重 / 关联`,icon:`⚙`,items:[`Spark Transform`,`dbt Models`,`Great Expectations`]},{id:`storage`,name:`数据存储`,desc:`分层仓储 ODS/DWD/DWS/ADS`,icon:`🗄`,items:[`Hive Metastore`,`Iceberg Tables`,`Redis Cache`]},{id:`serve`,name:`数据服务`,desc:`API 网关 + 查询引擎`,icon:`⚡`,items:[`GraphQL Engine`,`REST Gateway`,`SQL Proxy`]},{id:`visual`,name:`可视化层`,desc:`报表 / 仪表盘 / 大屏`,icon:`📊`,items:[`BI Dashboard`,`Report Builder`,`Realtime Screen`]}],_=[{label:`总 QPS`,value:`360,120`,delta:`+12.4%`,up:!0},{label:`平均延迟`,value:`6.8ms`,delta:`-8.2%`,up:!0},{label:`活跃连接`,value:`1,224`,delta:`+3.1%`,up:!0},{label:`数据吞吐`,value:`2.4TB/h`,delta:`+18.7%`,up:!0},{label:`任务成功率`,value:`99.86%`,delta:`+0.05%`,up:!0},{label:`异常告警`,value:`3`,delta:`-57.1%`,up:!0}],v=[{label:`00:00`,mysql:2.1,pg:1.8,ch:8.2,redis:.08,api:32.1,gql:14.2},{label:`04:00`,mysql:1.9,pg:1.6,ch:7.5,redis:.07,api:28.4,gql:12.8},{label:`08:00`,mysql:3.8,pg:3.2,ch:15.1,redis:.14,api:52.3,gql:22.1},{label:`12:00`,mysql:4.2,pg:3.6,ch:18.4,redis:.16,api:68.7,gql:28.5},{label:`16:00`,mysql:3.5,pg:3,ch:14.2,redis:.13,api:45.8,gql:19.4},{label:`20:00`,mysql:2.8,pg:2.4,ch:11.3,redis:.1,api:38.2,gql:16.8},{label:`Now`,mysql:3.2,pg:2.8,ch:12.5,redis:.12,api:45.6,gql:18.3}],y=[{time:`Mon`,value:1.8},{time:`Tue`,value:2.1},{time:`Wed`,value:2.6},{time:`Thu`,value:2.4},{time:`Fri`,value:3.1},{time:`Sat`,value:1.9},{time:`Sun`,value:2.4}],b=[{rank:1,sql:`SELECT SUM(gmv) FROM fact_daily WHERE ds = ?`,source:`ClickHouse`,freq:`2,400/h`,avgMs:8.2},{rank:2,sql:`SELECT COUNT(DISTINCT uid) FROM access_log WHERE ...`,source:`ClickHouse`,freq:`1,800/h`,avgMs:12.4},{rank:3,sql:`GET report:dashboard:realtime:*`,source:`Redis`,freq:`12,000/h`,avgMs:.08},{rank:4,sql:`SELECT * FROM orders WHERE status = ? LIMIT 100`,source:`MySQL`,freq:`960/h`,avgMs:3.4},{rank:5,sql:`{ sales { daily { amount count } } }`,source:`GraphQL`,freq:`680/h`,avgMs:18.1},{rank:6,sql:`SELECT dim_region, SUM(revenue) FROM dws_sales ...`,source:`PostgreSQL`,freq:`520/h`,avgMs:2.6},{rank:7,sql:`GET /api/v2/inventory/snapshot?warehouse=ALL`,source:`REST API`,freq:`340/h`,avgMs:52.3},{rank:8,sql:`SELECT avg(duration_ms) FROM metrics WHERE ts > ...`,source:`ClickHouse`,freq:`1,200/h`,avgMs:6.8}],x=[{time:`14:32:08`,level:`warn`,source:`REST API`,message:`P99 延迟超过 200ms 阈值 (当前 218ms)`,resolved:!0},{time:`13:18:45`,level:`error`,source:`MySQL`,message:`慢查询告警: DELETE FROM log_table 执行 12.3s`,resolved:!0},{time:`11:05:22`,level:`warn`,source:`Redis`,message:`Node-3 内存使用率达 88%`,resolved:!1},{time:`09:47:11`,level:`info`,source:`ClickHouse`,message:`Part merge 完成，释放 42GB 磁盘空间`,resolved:!0},{time:`08:22:33`,level:`error`,source:`GraphQL`,message:`Schema 注册中心连接超时 3 次`,resolved:!0},{time:`06:15:07`,level:`info`,source:`Airflow`,message:`ETL dag_daily_sales 执行成功，耗时 4m32s`,resolved:!0}],S=700,C=220,w={t:20,r:16,b:36,l:16},T=S-w.l-w.r,E=C-w.t-w.b,D=80,O=v.map(e=>{let t=w.l+T/Math.max(v.length-1,1)*v.indexOf(e);return{...e,x:t,mysqlY:w.t+E-e.mysql/D*E,pgY:w.t+E-e.pg/D*E,redisY:w.t+E-e.redis/D*E,apiY:w.t+E-e.api/D*E}}),k=e=>O.map((t,n)=>`${n===0?`M`:`L`} ${t.x} ${t[e]}`).join(` `),ee=Math.max(...y.map(e=>e.value)),te=`
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
`,ne=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e),re=e=>e<1?`${(e*1e3).toFixed(0)}μs`:`${e.toFixed(1)}ms`,ie={mysql:`mysql`,pg:`pg`,ch:`ch`,redis:`redis`,api:`api`,gql:`gql`},ae={mysql:`sql`,pg:`sql`,ch:`olap`,redis:`cache`,api:`http`,gql:`http`},oe=e=>e<5?`fast`:e<30?`med`:`slow`,A=()=>f(v=>{let T=a(),A=c(`style`,T);l(T,A),u(()=>{n(A,te)});let j=c(`div`,T);l(T,j),r(j,`bi-scope bi-page`);let M=c(`section`,j);l(j,M),r(M,`bi-hero bi-card`);let N=c(`div`,M);l(M,N);let P=c(`p`,N);l(N,P),r(P,`bi-kicker`),l(P,s(`BI Platform Architecture / Realtime Monitor`));let se=c(`h1`,N);l(N,se),l(se,s(`多源异构数据接入架构，实时驱动业务决策`));let F=c(`p`,N);l(N,F),r(F,`bi-hero-desc`),l(F,s(`统一接入 MySQL、PostgreSQL、ClickHouse、Redis Cluster、REST API、GraphQL 等六大数据源， 通过 CDC 实时采集 + ETL 批量清洗的混合管道，将数据经过 ODS → DWD → DWS → ADS 四层治理后， 对外提供毫秒级查询服务。当前集群整体 QPS 达 360K+，平均响应延迟 6.8ms。`));let I=c(`div`,N);l(N,I),r(I,`bi-tags`);let L=c(`span`,I);l(I,L),r(L,`bi-tag`);let ce=c(`span`,L);l(L,ce),r(ce,`dot`),l(L,s(`6 数据源在线`));let R=c(`span`,I);l(I,R),r(R,`bi-tag`),l(R,s(`CDC 实时同步`));let z=c(`span`,I);l(I,z),r(z,`bi-tag`),l(z,s(`ETL 批处理`));let le=c(`span`,I);l(I,le),r(le,`bi-tag`),l(le,s(`四层仓储存档`));let ue=c(`span`,I);l(I,ue),r(ue,`bi-tag`),l(ue,s(`GraphQL + REST 双协议`));let B=c(`div`,M);l(M,B),r(B,`bi-metrics-grid`);let de=i(`rue:list:start`),fe=i(`rue:list:end`);l(B,de),l(B,fe);let pe=new Map;u(()=>{pe=m({items:_||[],getKey:(e,t)=>e.label,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(e,s,m,h,g)=>{p(f(()=>{let s=a(),f=c(`div`,s);l(s,f),u(()=>{t(f,`key`,String(e.label))}),r(f,`bi-metric-card`);let m=c(`div`,f);l(f,m),r(m,`bi-metric-label`);let h=i(`rue:slot:anchor`);l(m,h),u(()=>{let t=e.label;d(()=>p(t,m,h))});let g=c(`div`,f);l(f,g),r(g,`bi-metric-value`);let _=o(g);l(g,_),u(()=>{n(_,e.value)});let v=c(`span`,f);l(f,v),u(()=>{r(v,`bi-metric-delta ${e.delta.startsWith(`+`)&&e.label===`异常告警`?`down`:`up`}`)});let y=i(`rue:slot:anchor`);return l(v,y),u(()=>{let t=e.delta;d(()=>p(t,v,y))}),s}),s,m)}})});let V=c(`section`,j);l(j,V),r(V,`bi-card`);let me=c(`div`,V);l(V,me),e(me,{padding:`28px 28px 0`});let H=c(`div`,me);l(me,H),r(H,`bi-section-title`);let he=c(`div`,H);l(H,he);let ge=c(`p`,he);l(he,ge),r(ge,`bi-eyebrow`),l(ge,s(`Data Sources`));let _e=c(`h2`,he);l(he,_e),l(_e,s(`数据源连接池`));let ve=c(`p`,H);l(H,ve),l(ve,s(`实时监控六大异构数据源的连接状态、QPS、延迟与健康度。`));let ye=c(`div`,V);l(V,ye),r(ye,`bi-sources-grid`);let be=i(`rue:list:start`),xe=i(`rue:list:end`);l(ye,be),l(ye,xe);let Se=new Map;u(()=>{Se=m({items:h||[],getKey:(e,t)=>e.id,elements:Se,parent:ye,before:xe,singleRoot:!0,trackIndex:!1,start:be,renderItem:(h,g,_,v,y)=>{p(f(()=>{let g=a(),_=c(`div`,g);l(g,_),u(()=>{t(_,`key`,String(h.id))}),r(_,`bi-src`);let v=c(`div`,_);l(_,v),r(v,`bi-src-head`);let y=c(`div`,v);l(v,y),u(()=>{r(y,`bi-src-icon ${ie[h.id]}`)});let b=i(`rue:slot:anchor`);l(y,b),u(()=>{let e=h.icon;d(()=>p(e,y,b))});let x=c(`div`,v);l(v,x),e(x,{flex:1});let S=c(`div`,x);l(x,S),e(S,{display:`flex`,alignItems:`center`,gap:8});let C=c(`span`,S);l(S,C),r(C,`bi-src-name`);let w=i(`rue:slot:anchor`);l(C,w),u(()=>{let e=h.name;d(()=>p(e,C,w))});let T=c(`span`,S);l(S,T),u(()=>{r(T,`bi-status-dot ${h.status}`)});let E=c(`span`,x);l(x,E),u(()=>{r(E,`bi-src-type ${ae[h.id]}`)});let D=i(`rue:slot:anchor`);l(E,D),u(()=>{let e=h.type;d(()=>p(e,E,D))});let O=c(`div`,_);l(_,O),r(O,`bi-src-stats`);let k=c(`div`,O);l(O,k);let ee=c(`div`,k);l(k,ee),r(ee,`bi-src-stat-label`),l(ee,s(`QPS`));let te=c(`div`,k);l(k,te),r(te,`bi-src-stat-value`);let oe=i(`rue:slot:anchor`);l(te,oe),u(()=>{let e=ne(h.qps);d(()=>p(e,te,oe))});let A=c(`div`,O);l(O,A);let j=c(`div`,A);l(A,j),r(j,`bi-src-stat-label`),l(j,s(`延迟`));let M=c(`div`,A);l(A,M),r(M,`bi-src-stat-value`);let N=i(`rue:slot:anchor`);l(M,N),u(()=>{let e=re(h.latency);d(()=>p(e,M,N))});let P=c(`div`,O);l(O,P);let se=c(`div`,P);l(P,se),r(se,`bi-src-stat-label`),l(se,s(`可用率`));let F=c(`div`,P);l(P,F),r(F,`bi-src-stat-value`);let I=i(`rue:slot:anchor`);l(F,I),u(()=>{let e=h.uptime;d(()=>p(e,F,I))});let L=c(`div`,_);l(_,L),r(L,`bi-src-conn-bar`);let ce=c(`div`,L);l(L,ce),u(()=>{r(ce,`bi-src-conn-fill ${ie[h.id]}`)}),u(()=>{let t={width:`${h.connections/h.maxConn*100}%`};e(ce,t)});let R=c(`div`,_);l(_,R),e(R,{marginTop:6,display:`flex`,justifyContent:`space-between`});let z=c(`span`,R);l(R,z),r(z,`bi-src-stat-unit`);let le=i(`rue:slot:anchor`);l(z,le),u(()=>{let e=h.connections;d(()=>p(e,z,le))}),l(z,s(` / `));let ue=i(`rue:slot:anchor`);l(z,ue),u(()=>{let e=h.maxConn;d(()=>p(e,z,ue))}),l(z,s(` 连接`));let B=c(`div`,_);l(_,B),r(B,`bi-src-dbs`);let de=i(`rue:list:start`),fe=i(`rue:list:end`);l(B,de),l(B,fe);let pe=new Map;return u(()=>{pe=m({items:h.databases||[],getKey:(e,t)=>e,elements:pe,parent:B,before:fe,singleRoot:!0,trackIndex:!1,start:de,renderItem:(e,i,s,d,m)=>{p(f(()=>{let i=a(),s=c(`span`,i);l(i,s),u(()=>{t(s,`key`,String(e))}),r(s,`bi-src-db`);let d=o(s);return l(s,d),u(()=>{n(d,e)}),i}),i,s)}})}),g}),g,_)}})});let U=c(`section`,j);l(j,U),r(U,`bi-card`);let Ce=c(`div`,U);l(U,Ce),e(Ce,{padding:`28px 28px 0`});let W=c(`div`,Ce);l(Ce,W),r(W,`bi-section-title`);let we=c(`div`,W);l(W,we);let Te=c(`p`,we);l(we,Te),r(Te,`bi-eyebrow`),l(Te,s(`Data Pipeline`));let Ee=c(`h2`,we);l(we,Ee),l(Ee,s(`数据处理管线`));let De=c(`p`,W);l(W,De),l(De,s(`五阶段数据生命周期：从采集到可视化的全链路自动化。`));let Oe=c(`div`,U);l(U,Oe),r(Oe,`bi-pipeline`);let ke=i(`rue:list:start`),Ae=i(`rue:list:end`);l(Oe,ke),l(Oe,Ae);let je=new Map;u(()=>{je=m({items:g||[],getKey:(e,t)=>e.id,elements:je,parent:Oe,before:Ae,singleRoot:!0,start:ke,renderItem:(e,s,h,_,v)=>{p(f(()=>{let s=a(),h=c(`div`,s);l(s,h),u(()=>{t(h,`key`,String(e.id))}),r(h,`bi-pipe-stage`);let _=c(`div`,h);l(h,_),r(_,`bi-pipe-icon`);let y=i(`rue:slot:anchor`);l(_,y),u(()=>{let t=e.icon;d(()=>p(t,_,y))});let b=c(`div`,h);l(h,b),r(b,`bi-pipe-name`);let x=i(`rue:slot:anchor`);l(b,x),u(()=>{let t=e.name;d(()=>p(t,b,x))});let S=c(`div`,h);l(h,S),r(S,`bi-pipe-desc`);let C=i(`rue:slot:anchor`);l(S,C),u(()=>{let t=e.desc;d(()=>p(t,S,C))});let w=c(`div`,h);l(h,w),r(w,`bi-pipe-items`);let T=i(`rue:list:start`),E=i(`rue:list:end`);l(w,T),l(w,E);let D=new Map;u(()=>{D=m({items:e.items||[],getKey:(e,t)=>e,elements:D,parent:w,before:E,singleRoot:!0,trackIndex:!1,start:T,renderItem:(e,i,s,d,m)=>{p(f(()=>{let i=a(),s=c(`span`,i);l(i,s),u(()=>{t(s,`key`,String(e))}),r(s,`bi-pipe-item`);let d=o(s);return l(s,d),u(()=>{n(d,e)}),i}),i,s)}})});let O=i(`rue:slot:anchor`);return l(h,O),u(()=>{let e=v<g.length-1?f(()=>{let e=a(),t=c(`div`,e);return l(e,t),r(t,`bi-pipe-arrow`),e}):``;d(()=>p(e,h,O))}),s}),s,h)}})});let G=c(`section`,j);l(j,G),r(G,`bi-chart-section`);let K=c(`article`,G);l(G,K),r(K,`bi-card bi-chart-card`);let Me=c(`div`,K);l(K,Me),r(Me,`bi-section-title`);let Ne=c(`div`,Me);l(Me,Ne);let Pe=c(`p`,Ne);l(Ne,Pe),r(Pe,`bi-eyebrow`),l(Pe,s(`Latency Monitor`));let Fe=c(`h2`,Ne);l(Ne,Fe),l(Fe,s(`24H 延迟趋势`));let Ie=c(`div`,K);l(K,Ie),r(Ie,`bi-chart-shell`);let q=c(`svg`,Ie);l(Ie,q),u(()=>{t(q,`viewBox`,String(`0 0 ${S} ${C}`))}),r(q,`bi-chart-svg`),t(q,`role`,`img`),t(q,`aria-label`,`24小时延迟趋势图`);let Le=c(`defs`,q);l(q,Le);let J=c(`linearGradient`,Le);l(Le,J),t(J,`id`,`biLatMysql`),t(J,`x1`,`0`),t(J,`x2`,`0`),t(J,`y1`,`0`),t(J,`y2`,`1`);let Re=c(`stop`,J);l(J,Re),t(Re,`offset`,`0%`),t(Re,`stopColor`,`var(--b-mysql)`),t(Re,`stopOpacity`,`0.25`);let ze=c(`stop`,J);l(J,ze),t(ze,`offset`,`100%`),t(ze,`stopColor`,`var(--b-mysql)`),t(ze,`stopOpacity`,`0`);let Y=c(`linearGradient`,Le);l(Le,Y),t(Y,`id`,`biLatApi`),t(Y,`x1`,`0`),t(Y,`x2`,`0`),t(Y,`y1`,`0`),t(Y,`y2`,`1`);let Be=c(`stop`,Y);l(Y,Be),t(Be,`offset`,`0%`),t(Be,`stopColor`,`var(--b-api)`),t(Be,`stopOpacity`,`0.2`);let Ve=c(`stop`,Y);l(Y,Ve),t(Ve,`offset`,`100%`),t(Ve,`stopColor`,`var(--b-api)`),t(Ve,`stopOpacity`,`0`);let He=i(`rue:list:start`),Ue=i(`rue:list:end`);l(q,He),l(q,Ue);let We=new Map;u(()=>{We=m({items:[0,.25,.5,.75,1],getKey:(e,t)=>e,elements:We,parent:q,before:Ue,singleRoot:!0,trackIndex:!1,start:He,renderItem:(e,i,d,m,h)=>{p(f(()=>{let i=a(),d=w.t+E-e*E,f=c(`g`,i);l(i,f),u(()=>{t(f,`key`,String(e))});let p=c(`line`,f);l(f,p),u(()=>{t(p,`x1`,String(w.l))}),u(()=>{t(p,`y1`,String(d))}),u(()=>{t(p,`x2`,String(S-w.r))}),u(()=>{t(p,`y2`,String(d))}),r(p,`bi-grid-line`);let m=c(`text`,f);l(f,m),u(()=>{t(m,`x`,String(w.l+4))}),u(()=>{t(m,`y`,String(d-6))}),r(m,`bi-grid-label`);let h=o(m);return l(m,h),u(()=>{n(h,(D*e).toFixed(0))}),l(m,s(`ms`)),i}),i,d)}})});let Ge=c(`path`,q);l(q,Ge),u(()=>{t(Ge,`d`,String(`${k(`mysqlY`)} L ${O[O.length-1].x} ${w.t+E} L ${O[0].x} ${w.t+E} Z`))}),t(Ge,`fill`,`url(#biLatMysql)`);let Ke=c(`path`,q);l(q,Ke),u(()=>{t(Ke,`d`,String(k(`apiY`)))}),r(Ke,`bi-line-path`),t(Ke,`stroke`,`var(--b-api)`);let qe=c(`path`,q);l(q,qe),u(()=>{t(qe,`d`,String(k(`mysqlY`)))}),r(qe,`bi-line-path`),t(qe,`stroke`,`var(--b-mysql)`);let Je=c(`path`,q);l(q,Je),u(()=>{t(Je,`d`,String(k(`pgY`)))}),r(Je,`bi-line-path`),t(Je,`stroke`,`var(--b-pg)`);let Ye=c(`path`,q);l(q,Ye),u(()=>{t(Ye,`d`,String(k(`redisY`)))}),r(Ye,`bi-line-path`),t(Ye,`stroke`,`var(--b-redis)`);let Xe=i(`rue:list:start`),Ze=i(`rue:list:end`);l(q,Xe),l(q,Ze);let Qe=new Map;u(()=>{Qe=m({items:O||[],getKey:(e,t)=>e.label,elements:Qe,parent:q,before:Ze,singleRoot:!0,trackIndex:!1,start:Xe,renderItem:(e,i,s,d,m)=>{p(f(()=>{let i=a(),s=c(`g`,i);l(i,s),u(()=>{t(s,`key`,String(e.label))});let d=c(`text`,s);l(s,d),u(()=>{t(d,`x`,String(e.x))}),u(()=>{t(d,`y`,String(C-8))}),t(d,`textAnchor`,`middle`),r(d,`bi-axis-label`);let f=o(d);l(d,f),u(()=>{n(f,e.label)});let p=c(`circle`,s);l(s,p),u(()=>{t(p,`cx`,String(e.x))}),u(()=>{t(p,`cy`,String(e.mysqlY))}),t(p,`r`,`3.5`),t(p,`fill`,`var(--b-mysql)`),t(p,`opacity`,`0.85`);let m=c(`circle`,s);l(s,m),u(()=>{t(m,`cx`,String(e.x))}),u(()=>{t(m,`cy`,String(e.pgY))}),t(m,`r`,`3.5`),t(m,`fill`,`var(--b-pg)`),t(m,`opacity`,`0.85`);let h=c(`circle`,s);l(s,h),u(()=>{t(h,`cx`,String(e.x))}),u(()=>{t(h,`cy`,String(e.redisY))}),t(h,`r`,`3.5`),t(h,`fill`,`var(--b-redis)`),t(h,`opacity`,`0.85`);let g=c(`circle`,s);return l(s,g),u(()=>{t(g,`cx`,String(e.x))}),u(()=>{t(g,`cy`,String(e.apiY))}),t(g,`r`,`3.5`),t(g,`fill`,`var(--b-api)`),t(g,`opacity`,`0.85`),i}),i,s)}})});let X=c(`g`,q);l(q,X),u(()=>{t(X,`transform`,String(`translate(${S-w.r-100}, ${w.t+4})`))});let $e=c(`circle`,X);l(X,$e),t($e,`cx`,`0`),t($e,`cy`,`0`),t($e,`r`,`4`),t($e,`fill`,`var(--b-mysql)`);let et=c(`text`,X);l(X,et),t(et,`x`,`10`),t(et,`y`,`4`),r(et,`bi-axis-label`),l(et,s(`MySQL`));let tt=c(`circle`,X);l(X,tt),t(tt,`cx`,`50`),t(tt,`cy`,`0`),t(tt,`r`,`4`),t(tt,`fill`,`var(--b-pg)`);let nt=c(`text`,X);l(X,nt),t(nt,`x`,`60`),t(nt,`y`,`4`),r(nt,`bi-axis-label`),l(nt,s(`PG`));let rt=c(`circle`,X);l(X,rt),t(rt,`cx`,`0`),t(rt,`cy`,`16`),t(rt,`r`,`4`),t(rt,`fill`,`var(--b-redis)`);let it=c(`text`,X);l(X,it),t(it,`x`,`10`),t(it,`y`,`20`),r(it,`bi-axis-label`),l(it,s(`Redis`));let at=c(`circle`,X);l(X,at),t(at,`cx`,`50`),t(at,`cy`,`16`),t(at,`r`,`4`),t(at,`fill`,`var(--b-api)`);let ot=c(`text`,X);l(X,ot),t(ot,`x`,`60`),t(ot,`y`,`20`),r(ot,`bi-axis-label`),l(ot,s(`API`));let Z=c(`article`,G);l(G,Z),r(Z,`bi-card bi-tp-card`);let st=c(`div`,Z);l(Z,st),r(st,`bi-section-title`);let ct=c(`div`,st);l(st,ct);let lt=c(`p`,ct);l(ct,lt),r(lt,`bi-eyebrow`),l(lt,s(`Weekly Throughput`));let ut=c(`h2`,ct);l(ct,ut),l(ut,s(`周吞吐量`));let dt=c(`div`,Z);l(Z,dt),r(dt,`bi-tp-bars`);let ft=i(`rue:list:start`),pt=i(`rue:list:end`);l(dt,ft),l(dt,pt);let mt=new Map;u(()=>{mt=m({items:y||[],getKey:(e,t)=>e.time,elements:mt,parent:dt,before:pt,singleRoot:!0,trackIndex:!1,start:ft,renderItem:(m,h,g,_,v)=>{p(f(()=>{let f=a(),h=c(`div`,f);l(f,h),u(()=>{t(h,`key`,String(m.time))}),r(h,`bi-tp-group`);let g=c(`div`,h);l(h,g),r(g,`bi-tp-val`);let _=o(g);l(g,_),u(()=>{n(_,m.value.toFixed(1))}),l(g,s(`T`));let v=c(`div`,h);l(h,v),r(v,`bi-tp-bar-shell`);let y=c(`div`,v);l(v,y),r(y,`bi-tp-fill`),u(()=>{let t={height:`${Math.max(8,m.value/ee*100)}%`};e(y,t)});let b=c(`div`,h);l(h,b),r(b,`bi-tp-label`);let x=i(`rue:slot:anchor`);return l(b,x),u(()=>{let e=m.time;d(()=>p(e,b,x))}),f}),h,g)}})});let Q=c(`section`,j);l(j,Q),r(Q,`bi-bottom-grid`);let $=c(`article`,Q);l(Q,$),r($,`bi-card bi-queries-card`);let ht=c(`div`,$);l($,ht),r(ht,`bi-section-title`);let gt=c(`div`,ht);l(ht,gt);let _t=c(`p`,gt);l(gt,_t),r(_t,`bi-eyebrow`),l(_t,s(`Top Queries`));let vt=c(`h2`,gt);l(gt,vt),l(vt,s(`高频查询排行`));let yt=c(`div`,$);l($,yt);let bt=i(`rue:list:start`),xt=i(`rue:list:end`);l(yt,bt),l(yt,xt);let St=new Map;u(()=>{St=m({items:b||[],getKey:(e,t)=>e.rank,elements:St,parent:yt,before:xt,singleRoot:!0,trackIndex:!1,start:bt,renderItem:(e,n,o,m,h)=>{p(f(()=>{let n=a(),o=c(`div`,n);l(n,o),u(()=>{t(o,`key`,String(e.rank))}),r(o,`bi-query-row`);let f=c(`span`,o);l(o,f),u(()=>{r(f,`bi-query-rank ${e.rank<=3?`top3`:``}`)});let m=i(`rue:slot:anchor`);l(f,m),u(()=>{let t=e.rank;d(()=>p(t,f,m))});let h=c(`span`,o);l(o,h),r(h,`bi-query-sql`);let g=i(`rue:slot:anchor`);l(h,g),u(()=>{let t=e.sql;d(()=>p(t,h,g))});let _=c(`span`,o);l(o,_),u(()=>{r(_,`bi-query-src ${ie[e.source.toLowerCase().replace(` `,`-`)]||ie[e.source===`ClickHouse`?`ch`:e.source===`Redis`?`redis`:e.source===`MySQL`?`mysql`:e.source===`PostgreSQL`?`pg`:e.source===`GraphQL`?`gql`:`api`]}`)});let v=i(`rue:slot:anchor`);l(_,v),u(()=>{let t=e.source;d(()=>p(t,_,v))});let y=c(`span`,o);l(o,y),r(y,`bi-query-freq`);let b=i(`rue:slot:anchor`);l(y,b),u(()=>{let t=e.freq;d(()=>p(t,y,b))});let x=c(`span`,o);l(o,x),u(()=>{r(x,`bi-query-ms ${oe(e.avgMs)}`)});let S=i(`rue:slot:anchor`);return l(x,S),u(()=>{let t=e.avgMs;d(()=>p(t,x,S))}),l(x,s(`ms`)),n}),n,o)}})});let Ct=c(`article`,Q);l(Q,Ct),r(Ct,`bi-card bi-alert-card`);let wt=c(`div`,Ct);l(Ct,wt),r(wt,`bi-section-title`);let Tt=c(`div`,wt);l(wt,Tt);let Et=c(`p`,Tt);l(Tt,Et),r(Et,`bi-eyebrow`),l(Et,s(`Alert Center`));let Dt=c(`h2`,Tt);l(Tt,Dt),l(Dt,s(`告警事件`));let Ot=c(`div`,Ct);l(Ct,Ot);let kt=i(`rue:list:start`),At=i(`rue:list:end`);l(Ot,kt),l(Ot,At);let jt=new Map;return u(()=>{jt=m({items:x||[],getKey:(e,t)=>t,elements:jt,parent:Ot,before:At,singleRoot:!0,start:kt,renderItem:(e,s,m,h,g)=>{p(f(()=>{let s=a(),f=c(`div`,s);l(s,f),u(()=>{t(f,`key`,String(g))}),r(f,`bi-alert-row`);let m=c(`span`,f);l(f,m),r(m,`bi-alert-time`);let h=i(`rue:slot:anchor`);l(m,h),u(()=>{let t=e.time;d(()=>p(t,m,h))});let _=c(`span`,f);l(f,_),u(()=>{r(_,`bi-alert-level ${e.level}`)});let v=i(`rue:slot:anchor`);l(_,v),u(()=>{let t=e.level;d(()=>p(t,_,v))});let y=c(`span`,f);l(f,y),r(y,`bi-alert-msg`);let b=i(`rue:slot:anchor`);l(y,b),u(()=>{let t=e.message;d(()=>p(t,y,b))});let x=c(`span`,f);l(f,x),u(()=>{r(x,`bi-alert-resolved ${e.resolved?`yes`:`no`}`)});let S=o(x);return l(x,S),u(()=>{n(S,e.resolved?`已恢复`:`处理中`)}),s}),s,m)}})}),T});export{A as default};