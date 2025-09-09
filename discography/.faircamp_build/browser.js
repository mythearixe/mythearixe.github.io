const BROWSER_JS_T = {
    nothingFoundForXxx: query => 'Nothing found for \'{query}\''.replace('{query}', query),
    showingFeaturedItems: 'Showing featured items',
    showingXxxResultsForXxx: (count, query) => 'Showing {count} results for \'{query}\''.replace('{count}', count).replace('{query}', query),
    xxxAndOthers: (xxx, othersLink) => '{xxx} and <a href="{others_link}">others</a>'.replace('{xxx}', xxx).replace('{others_link}', othersLink)
};
const LABEL_MODE = true;
const ARTISTS = [{
    
    name: 'mythearixe',
    url: 'mythearixe/'
}
];
const RELEASES = [{
    artists: [
    {name:'mythearixe',url:'mythearixe/'}
],

    cover: 'cover_160.jpg?fpqsQNDOwMk',
    title: 'lostfound1999',
    tracks: [
        {
    artists:[],
    
    number: '1.',
    title: '(I don\'t wanna) Walk Away',
    url: 'lostfound1999/1/'
}
,
{
    artists:[],
    
    number: '2.',
    title: 'Thuyen Khong Ben Doi',
    url: 'lostfound1999/2/'
}
,
{
    artists:[],
    
    number: '3.',
    title: 'suzume',
    url: 'lostfound1999/3/'
}

    ],
    url: 'lostfound1999/'
}
];
const browser=document.querySelector(`#browser`),browseButtonFooter=document.querySelector(`footer button.browse`),browseButtonHeader=document.querySelector(`header button.browse`),browseResults=browser.querySelector(`#results`),closeButton=browser.querySelector(`button`),searchField=browser.querySelector(`input`),statusField=browser.querySelector(`[role="status"]`),indexSuffix=window.location.pathname.endsWith(`index.html`)?`index.html`:``,rootPrefix=browser.dataset.rootPrefix;function truncateArtistList(e,i){let a=40;if(e.length>2){let o=e.reduce((e,i)=>e+i.name.length,0),s=(e.length-1)*2;if(o+s>a){if(LABEL_MODE){let o=0,s=e.filter(e=>o===0?(o+=e.name.length,!0):(o+=e.name.length,o<a)),c=s.map(e=>{let i=e.externalPage??`${rootPrefix}${e.url}${indexSuffix}`;return`<a href="${i}">${e.name}</a>`}).join(`, `);return BROWSER_JS_T.xxxAndOthers(c,i)}let o=`<a href="${rootPrefix}${e[0].url}${indexSuffix}">${e[0].name}</a>`;return BROWSER_JS_T.xxxAndOthers(o,i)}}return e.map(e=>{let i=e.externalPage??`${rootPrefix}${e.url}${indexSuffix}`;return`<a href="${i}">${e.name}</a>`}).join(`, `)}for(let e of RELEASES){let i;e.cover?(i=document.createElement(`img`),i.src=rootPrefix+e.url+e.cover):(i=document.createElement(`img`),i.classList.add(`procedural`),i.src=rootPrefix+e.url+e.coverProcedural);let a=document.createElement(`a`);a.href=rootPrefix+e.url+indexSuffix;let s=a.cloneNode(!0);s.tabIndex=-1,s.appendChild(i),a.dataset.searchable=`true`,a.textContent=e.title;let c=document.createElement(`div`);if(c.appendChild(a),e.artists){let i=document.createElement(`div`);i.classList.add(`artists`),i.innerHTML=truncateArtistList(e.artists,`${rootPrefix}${e.url}`),c.appendChild(i)}let l=document.createElement(`div`);l.appendChild(s),l.appendChild(c),browseResults.appendChild(l);for(let a of e.tracks){let e;a.cover?(e=document.createElement(`img`),e.src=rootPrefix+a.url+a.cover):e=i.cloneNode(!0);let s=document.createElement(`span`);s.classList.add(`number`),s.textContent=a.number;let c=document.createElement(`a`);c.href=rootPrefix+a.url+indexSuffix;let l=c.cloneNode(!0);l.tabIndex=-1,l.appendChild(e),c.dataset.searchable=`true`,c.textContent=a.title;let u=document.createElement(`div`);if(u.appendChild(s),u.appendChild(c),a.artists){let e=document.createElement(`div`);e.classList.add(`artists`),e.innerHTML=truncateArtistList(a.artists,`${rootPrefix}${a.url}`),u.appendChild(e)}let d=document.createElement(`div`);d.appendChild(l),d.appendChild(u),d.dataset.track=``,d.style.setProperty(`display`,`none`),browseResults.appendChild(d)}}for(let e of ARTISTS){let i=document.createElement(`a`);i.href=rootPrefix+e.url+indexSuffix;let a;e.image?(a=document.createElement(`img`),a.classList.add(`crop`),a.src=rootPrefix+e.url+e.image):(a=document.createElement(`span`),a.classList.add(`placeholder`));let s=i.cloneNode(!0);s.tabIndex=-1,s.appendChild(a),i.dataset.searchable=`true`,i.textContent=e.name;let c=document.createElement(`div`);c.appendChild(i);let l=document.createElement(`div`);l.appendChild(s),l.appendChild(c),browseResults.appendChild(l)}function hideBrowser(){let s=browseButtonFooter.ariaExpanded===`true`?browseButtonFooter:browseButtonHeader;browser.classList.remove(`active`),s.setAttribute(`aria-expanded`,`false`),searchField.value=``,statusField.removeAttribute(`aria-label`),statusField.textContent=``;for(let e of browseResults.children){let i=e.dataset.track===void 0;e.style.setProperty(`display`,i?null:`none`)}s.focus()}function showBrowser(i){browser.classList.add(`active`),i.setAttribute(`aria-expanded`,`true`),searchField.focus(),statusField.setAttribute(`aria-label`,BROWSER_JS_T.showingFeaturedItems),statusField.textContent=``}document.body.addEventListener(`focusin`,i=>{browser.classList.contains(`active`)&&!browser.contains(i.target)&&searchField.focus()}),browser.addEventListener(`focusout`,i=>{browser.classList.contains(`active`)&&i.relatedTarget&&!browser.contains(i.relatedTarget)&&hideBrowser()}),browser.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.preventDefault(),hideBrowser())}),browseButtonFooter.addEventListener(`click`,()=>showBrowser(browseButtonFooter)),browseButtonHeader.addEventListener(`click`,()=>showBrowser(browseButtonHeader)),closeButton.addEventListener(`click`,hideBrowser),searchField.addEventListener(`input`,()=>{let e=searchField.value.trim();if(e.length){let i=new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),`i`),a=0;for(let e of browseResults.children){let o=e.querySelector(`[data-searchable]`).textContent,s=i.test(o);e.style.setProperty(`display`,s?null:`none`),s&&(a+=1)}a===0?(statusField.removeAttribute(`aria-label`),statusField.textContent=BROWSER_JS_T.nothingFoundForXxx(e)):(statusField.setAttribute(`aria-label`,BROWSER_JS_T.showingXxxResultsForXxx(a,e)),statusField.textContent=``)}else{for(let e of browseResults.children){let i=e.dataset.track===void 0;e.style.setProperty(`display`,i?null:`none`)}statusField.setAttribute(`aria-label`,BROWSER_JS_T.showingFeaturedItems),statusField.textContent=``}});