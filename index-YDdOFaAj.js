(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const a=["html","head","title","base","link","meta","style","body","article","section","nav","aside","h1","h2","h3","h4","h5","h6","hgroup","header","footer","address","p","hr","pre","blockquote","ol","ul","menu","li","dl","dt","dd","figure","figcaption","main","search","div","a","em","strong","small","s","cite","q","dfn","abbr","ruby","rt","rp","data","time","code","var","samp","kbd","sub","sup","i","b","u","mark","bdi","bdo","span","br","wbr","area","ins","del","picture","source","img","iframe","embed","object","video","audio","track","map","table","caption","colgroup","col","tbody","thead","tfoot","tr","td","th","form","label","input","button","select","datalist","optgroup","option","textarea","output","progress","meter","fieldset","legend","details","summary","dialog","script","noscript","template","slot","canvas"],g=5*60,u=document.querySelector(".taglist"),c=document.querySelector(".prompt"),m=document.querySelector("time");let i=a.slice(0),d=g,p;const h=()=>{a.forEach((e,r)=>{const s=document.createElement("div");s.classList.add("tag","hide-tag",`tag-${r+1}`),s.textContent=`${"·".repeat(e.length)}··`,u.append(s)})},f=(e,r=!1)=>{const s=a.findIndex(t=>t===e)+1,n=u.querySelector(`.tag-${s}`);n.textContent=`<${e}>`,n.classList.remove("hide-tag"),r&&n.classList.add("no")},b=e=>i.filter(r=>r!==e),y=e=>{i.includes(e)&&(f(e),i=b(e)),c.value=""};c.addEventListener("keydown",({key:e})=>{console.log(e);const r=c.value.toLowerCase().replace(/[<>]/g,"");e==="Enter"&&y(r)});const v=()=>{m.classList.add("off"),clearInterval(p),c.outerHTML=`<h2>${a.length-i.length}/${a.length} elemento(s)</h2>`,i.forEach(e=>{f(e,!0)})},L=e=>{e<1&&v();const r=String(~~(e/60)).padStart(2,"0"),s=String(e-Number(r)*60).padStart(2,"0");return`${r}:${s}`},S=()=>{d--,m.textContent=L(d)};p=setInterval(()=>S(),1e3);h();c.focus();