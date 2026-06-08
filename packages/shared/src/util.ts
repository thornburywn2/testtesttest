export function fmt(n:number){ return n.toLocaleString() }
export function pct(a:number,b:number){ return b? a/b*100:0 }
export function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
