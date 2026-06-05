CREATE TABLE metrics (id uuid primary key, name text not null, value double precision, ts timestamptz default now());
CREATE INDEX idx_metrics_ts ON metrics(ts);
