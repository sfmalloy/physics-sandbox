function $(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(B)}function L(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ct(t,n,e){t.$$.on_destroy.push(I(n,e))}function lt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],u=Math.max(n.dirty.length,r.length);for(let s=0;s<u;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function ot(t,n,e,i,r,o){if(r){const u=O(n,e,i,o);t.p(u,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:K(1,r,g=>n[e[g]].claim_order,l))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const o=[],u=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);s>=c;s--)u.push(n[s]);s--}for(;s>=0;s--)u.push(n[s]);o.reverse(),u.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<u.length;c++){for(;l<o.length&&u[c].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(u[c],a)}}function Q(t,n){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function dt(){return S(" ")}function _t(){return S("")}function ht(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function mt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function yt(t){return t===""?null:+t}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){X(t);const o=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const s=t[u];if(n(s)){const c=e(s);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),s}}for(let u=t.claim_info.last_index-1;u>=0;u--){const s=t[u];if(n(s)){const c=e(s);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Y(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const o=[];for(let u=0;u<r.attributes.length;u++){const s=r.attributes[u];e[s.name]||o.push(s.name)}o.forEach(u=>r.removeAttribute(u))},()=>i(n))}function gt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function xt(t){return Z(t," ")}function bt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n){t.value=n??""}function wt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n){return new t(n)}let p;function m(t){p=t}function T(){if(!p)throw new Error("Function called outside component initialization");return p}function Et(t){T().$$.on_mount.push(t)}function Nt(t){T().$$.after_update.push(t)}const h=[],k=[],x=[],E=[],D=Promise.resolve();let N=!1;function q(){N||(N=!0,D.then(z))}function At(){return q(),D}function A(t){x.push(t)}function St(t){E.push(t)}const v=new Set;let _=0;function z(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const n=h[_];_++,m(n),tt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(m(null),h.length=0,_=0;k.length;)k.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(h.length);for(;E.length;)E.pop()();N=!1,v.clear(),m(t)}function tt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const b=new Set;let d;function jt(){d={r:0,c:[],p:d}}function Ct(){d.r||y(d.c),d=d.p}function nt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Mt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function kt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Bt(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const u=t.$$.on_mount.map(B).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...u):y(u),t.$$.on_mount=[]}),o.forEach(A)}function it(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(h.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,r,o,u,s=[-1]){const c=p;m(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};u&&u(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...j)=>{const C=j.length?j[0]:g;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&rt(t,f)),g}):[],l.update(),a=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);l.fragment&&l.fragment.l(f),f.forEach(R)}else l.fragment&&l.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),J(),z()}m(c)}class Pt{$destroy(){it(this,1),this.$destroy=$}$on(n,e){if(!L(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{At as A,$ as B,lt as C,ot as D,ft as E,st as F,Q as G,ct as H,$t as I,ht as J,y as K,yt as L,k as M,kt as N,mt as O,St as P,Pt as S,dt as a,at as b,xt as c,Ct as d,_t as e,nt as f,jt as g,R as h,Ot as i,Nt as j,U as k,gt as l,V as m,pt as n,Et as o,wt as p,S as q,Z as r,ut as s,Mt as t,bt as u,vt as v,Bt as w,Lt as x,et as y,it as z};
