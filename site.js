const page=document.body.dataset.page;
const target=document.querySelector('#content');
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dateText=s=>{if(!s)return '';const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});};
const photo=(file,alt)=>file?`<img loading="lazy" src="assets/${encodeURI(file)}" alt="${escapeHTML(alt)}">`:'';
const item=(html)=>`<article class="entry">${html}</article>`;
function render(data){
 if(page==='timeline')return `<div class="grid">${data.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(e=>item(`<span class="date">${escapeHTML(dateText(e.date))}</span><p>${escapeHTML(e.text)}</p>${photo(e.photo,'Journal photo')}`)).join('')}</div>`;
 if(page==='photos')return `<div class="photo-grid">${data.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(e=>item(`${e.image?photo(e.image,e.caption):'<div class="empty-photo">YOUR PHOTO HERE</div>'}<span class="date">${escapeHTML(dateText(e.date))}</span><p>${escapeHTML(e.caption)}</p>`)).join('')}</div>`;
 if(page==='rabbit-holes')return `<div class="grid">${data.map(e=>item(`<span class="date">${escapeHTML(dateText(e.date))}</span><h2>${escapeHTML(e.title)}</h2><p>${escapeHTML(e.text)}</p><ul>${(e.links||[]).filter(l=>/^https?:\/\//i.test(l.url)).map(l=>`<li><a href="${escapeHTML(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(l.label)}</a></li>`).join('')}</ul>`)).join('')}</div>`;
 if(page==='projects')return `<div class="grid">${data.map(e=>item(`<span class="pill">${escapeHTML(e.status)}</span><h2>${escapeHTML(e.title)}</h2><p>${escapeHTML(e.description)}</p>${/^https?:\/\//i.test(e.url||'')?`<a href="${escapeHTML(e.url)}" target="_blank" rel="noopener noreferrer">VISIT PROJECT ↗</a>`:''}`)).join('')}</div>`;
 if(page==='year-in-review')return `<div class="stats"><div class="stat"><b>${escapeHTML(data.year)}</b>THE YEAR</div><div class="stat"><b>${escapeHTML(data.tripsTaken)}</b>TRIPS TAKEN</div><div class="stat"><b>${escapeHTML((data.highlights||[]).length)}</b>HIGHLIGHTS</div></div><div class="grid" style="margin-top:35px">${item(`<h2>Favorite month</h2><p>${escapeHTML(data.favoriteMonth||'To be decided...')}</p>`)}${item(`<h2>Biggest accomplishment</h2><p>${escapeHTML(data.biggestAccomplishment||'Still writing this chapter...')}</p>`)}</div><h2>Highlights</h2><div class="grid">${(data.highlights||[]).map(h=>item(`<p>${escapeHTML(h)}</p>`)).join('')}</div>`;
 return '';
}
fetch(`content/${page}.json`,{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('Content file not found');return r.json()}).then(data=>{target.innerHTML=render(data)}).catch(err=>{target.innerHTML=`<div class="error">Couldn't load this page's content. Check the JSON file in the content folder and make sure your site is opened through GitHub Pages (not as a local file).<br>${escapeHTML(err.message)}</div>`;});
