const t=/^#[A-Za-z]*$/i;const s=(s,e)=>{const n="string"==typeof e?function(s){const e=s.split(" "),n=[],r=[];for(let s=0;s<e.length;s++){const o=e[s];c=o,t.test(c)?n.push(o.slice(1)):r.push(o)}var c;return{searchTags:n,searchString:r.join(" ")}}(e):e,{searchTags:r,searchString:c}=n;return s.filter((t=>r.length<1||t.tags.some((t=>r.some((s=>t.includes(s))))))).filter((t=>{const s=t.title.toLowerCase();return c.includes(s)||s.includes(c)}))};export{s as filterPosts};
