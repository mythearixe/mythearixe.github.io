const BROWSER_JS_T = {
    nothingFoundForXxx: query => 'Nothing found for \'{query}\''.replace('{query}', query),
    showingFeaturedItems: 'Showing featured items',
    showingXxxResultsForXxx: (count, query) => 'Showing {count} results for \'{query}\''.replace('{count}', count).replace('{query}', query),
    xxxAndOthers: (xxx, othersLink) => '{xxx} and <a href="{others_link}">others</a>'.replace('{xxx}', xxx).replace('{others_link}', othersLink)
};
const LABEL_MODE = false;
const ARTISTS = [];
const RELEASES = [{
    
    cover: 'cover_160.jpg?NSvzOfbY-3Q',
    title: 'ISOKNOCK - THRASH (mythearixe DnB Edit)',
    tracks: [
        {
    
    
    number: '1.',
    title: 'ISOKNOCK - THRASH (Mythearixe DnB Edit)',
    url: 'thrash-dnb/1/'
}

    ],
    url: 'thrash-dnb/'
}
,
{
    
    cover: 'cover_160.jpg?fpqsQNDOwMk',
    title: 'before mythearixe',
    tracks: [
        {
    
    
    number: '1.',
    title: '3 nam 1 cuoc tinh',
    url: 'before-mythearixe/1/'
}
,
{
    
    
    number: '2.',
    title: 'that ultrasonic tutorial',
    url: 'before-mythearixe/2/'
}
,
{
    
    
    number: '3.',
    title: 'untitled',
    url: 'before-mythearixe/3/'
}
,
{
    
    
    number: '4.',
    title: 'bunny girl senpai',
    url: 'before-mythearixe/4/'
}
,
{
    
    
    number: '5.',
    title: 'dancin',
    url: 'before-mythearixe/5/'
}
,
{
    
    
    number: '6.',
    title: 'mr bean',
    url: 'before-mythearixe/6/'
}
,
{
    
    
    number: '7.',
    title: 'toxic',
    url: 'before-mythearixe/7/'
}
,
{
    
    
    number: '8.',
    title: 'untitled',
    url: 'before-mythearixe/8/'
}
,
{
    
    
    number: '9.',
    title: 'untitled',
    url: 'before-mythearixe/9/'
}
,
{
    
    
    number: '10.',
    title: 'untitled',
    url: 'before-mythearixe/10/'
}
,
{
    
    
    number: '11.',
    title: 'untitled',
    url: 'before-mythearixe/11/'
}
,
{
    
    
    number: '12.',
    title: 'but i wont',
    url: 'before-mythearixe/12/'
}
,
{
    
    
    number: '13.',
    title: 'untitled',
    url: 'before-mythearixe/13/'
}
,
{
    
    
    number: '14.',
    title: 'look what you made me do',
    url: 'before-mythearixe/14/'
}
,
{
    
    
    number: '15.',
    title: 'zodiac',
    url: 'before-mythearixe/15/'
}
,
{
    
    
    number: '16.',
    title: '(I don\'t wanna) Walk Away',
    url: 'before-mythearixe/16/'
}
,
{
    
    
    number: '17.',
    title: 'Ghibli',
    url: 'before-mythearixe/17/'
}
,
{
    
    
    number: '18.',
    title: '2023',
    url: 'before-mythearixe/18/'
}
,
{
    
    
    number: '19.',
    title: 'untitled',
    url: 'before-mythearixe/19/'
}
,
{
    
    
    number: '20.',
    title: 'killers in the jungle',
    url: 'before-mythearixe/20/'
}
,
{
    
    
    number: '21.',
    title: 'untitled',
    url: 'before-mythearixe/21/'
}
,
{
    
    
    number: '22.',
    title: 'ditto',
    url: 'before-mythearixe/22/'
}
,
{
    
    
    number: '23.',
    title: 'suzume',
    url: 'before-mythearixe/23/'
}
,
{
    
    
    number: '24.',
    title: 'hear the rumble',
    url: 'before-mythearixe/24/'
}
,
{
    
    
    number: '25.',
    title: 'untitled',
    url: 'before-mythearixe/25/'
}
,
{
    
    
    number: '26.',
    title: 'untitled',
    url: 'before-mythearixe/26/'
}
,
{
    
    
    number: '27.',
    title: 'untitled',
    url: 'before-mythearixe/27/'
}
,
{
    
    
    number: '28.',
    title: 'untitled',
    url: 'before-mythearixe/28/'
}
,
{
    
    
    number: '29.',
    title: 'interstellar',
    url: 'before-mythearixe/29/'
}
,
{
    
    
    number: '30.',
    title: 'truoc khi em ton tai',
    url: 'before-mythearixe/30/'
}
,
{
    
    
    number: '31.',
    title: 'glow up',
    url: 'before-mythearixe/31/'
}
,
{
    
    
    number: '32.',
    title: 'the kitchen seems a bit unfamiliar',
    url: 'before-mythearixe/32/'
}
,
{
    
    
    number: '33.',
    title: 'the arc start here',
    url: 'before-mythearixe/33/'
}
,
{
    
    
    number: '34.',
    title: 'eve psyche and bluebeard\'s wife',
    url: 'before-mythearixe/34/'
}
,
{
    
    
    number: '35.',
    title: 'if the party was over and our time on earth was through',
    url: 'before-mythearixe/35/'
}
,
{
    
    
    number: '36.',
    title: '🗓️',
    url: 'before-mythearixe/36/'
}
,
{
    
    
    number: '37.',
    title: 'Thuyen Khong Ben Doi',
    url: 'before-mythearixe/37/'
}

    ],
    url: 'before-mythearixe/'
}
];
const browser=document.querySelector(`#browser`),browseButtonFooter=document.querySelector(`footer button.browse`),browseButtonHeader=document.querySelector(`header button.browse`),browseResults=browser.querySelector(`#results`),closeButton=browser.querySelector(`button`),searchField=browser.querySelector(`input`),statusField=browser.querySelector(`[role="status"]`),indexSuffix=window.location.pathname.endsWith(`index.html`)?`index.html`:``,rootPrefix=browser.dataset.rootPrefix;function truncateArtistList(e,i){let a=40;if(e.length>2){let o=e.reduce((e,i)=>e+i.name.length,0),s=(e.length-1)*2;if(o+s>a){if(LABEL_MODE){let o=0,s=e.filter(e=>o===0?(o+=e.name.length,!0):(o+=e.name.length,o<a)),c=s.map(e=>{let i=e.externalPage??`${rootPrefix}${e.url}${indexSuffix}`;return`<a href="${i}">${e.name}</a>`}).join(`, `);return BROWSER_JS_T.xxxAndOthers(c,i)}let o=`<a href="${rootPrefix}${e[0].url}${indexSuffix}">${e[0].name}</a>`;return BROWSER_JS_T.xxxAndOthers(o,i)}}return e.map(e=>{let i=e.externalPage??`${rootPrefix}${e.url}${indexSuffix}`;return`<a href="${i}">${e.name}</a>`}).join(`, `)}for(let e of RELEASES){let i;e.cover?(i=document.createElement(`img`),i.src=rootPrefix+e.url+e.cover):(i=document.createElement(`img`),i.classList.add(`procedural`),i.src=rootPrefix+e.url+e.coverProcedural);let a=document.createElement(`a`);a.href=rootPrefix+e.url+indexSuffix;let s=a.cloneNode(!0);s.tabIndex=-1,s.appendChild(i),a.dataset.searchable=`true`,a.textContent=e.title;let c=document.createElement(`div`);if(c.appendChild(a),e.artists){let i=document.createElement(`div`);i.classList.add(`artists`),i.innerHTML=truncateArtistList(e.artists,`${rootPrefix}${e.url}`),c.appendChild(i)}let l=document.createElement(`div`);l.appendChild(s),l.appendChild(c),browseResults.appendChild(l);for(let a of e.tracks){let e;a.cover?(e=document.createElement(`img`),e.src=rootPrefix+a.url+a.cover):e=i.cloneNode(!0);let s=document.createElement(`span`);s.classList.add(`number`),s.textContent=a.number;let c=document.createElement(`a`);c.href=rootPrefix+a.url+indexSuffix;let l=c.cloneNode(!0);l.tabIndex=-1,l.appendChild(e),c.dataset.searchable=`true`,c.textContent=a.title;let u=document.createElement(`div`);if(u.appendChild(s),u.appendChild(c),a.artists){let e=document.createElement(`div`);e.classList.add(`artists`),e.innerHTML=truncateArtistList(a.artists,`${rootPrefix}${a.url}`),u.appendChild(e)}let d=document.createElement(`div`);d.appendChild(l),d.appendChild(u),d.dataset.track=``,d.style.setProperty(`display`,`none`),browseResults.appendChild(d)}}for(let e of ARTISTS){let i=document.createElement(`a`);i.href=rootPrefix+e.url+indexSuffix;let a;e.image?(a=document.createElement(`img`),a.classList.add(`crop`),a.src=rootPrefix+e.url+e.image):(a=document.createElement(`span`),a.classList.add(`placeholder`));let s=i.cloneNode(!0);s.tabIndex=-1,s.appendChild(a),i.dataset.searchable=`true`,i.textContent=e.name;let c=document.createElement(`div`);c.appendChild(i);let l=document.createElement(`div`);l.appendChild(s),l.appendChild(c),browseResults.appendChild(l)}function hideBrowser(){let s=browseButtonFooter.ariaExpanded===`true`?browseButtonFooter:browseButtonHeader;browser.classList.remove(`active`),s.setAttribute(`aria-expanded`,`false`),searchField.value=``,statusField.removeAttribute(`aria-label`),statusField.textContent=``;for(let e of browseResults.children){let i=e.dataset.track===void 0;e.style.setProperty(`display`,i?null:`none`)}s.focus()}function showBrowser(i){browser.classList.add(`active`),i.setAttribute(`aria-expanded`,`true`),searchField.focus(),statusField.setAttribute(`aria-label`,BROWSER_JS_T.showingFeaturedItems),statusField.textContent=``}document.body.addEventListener(`focusin`,i=>{browser.classList.contains(`active`)&&!browser.contains(i.target)&&searchField.focus()}),browser.addEventListener(`focusout`,i=>{browser.classList.contains(`active`)&&i.relatedTarget&&!browser.contains(i.relatedTarget)&&hideBrowser()}),browser.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.preventDefault(),hideBrowser())}),browseButtonFooter.addEventListener(`click`,()=>showBrowser(browseButtonFooter)),browseButtonHeader.addEventListener(`click`,()=>showBrowser(browseButtonHeader)),closeButton.addEventListener(`click`,hideBrowser),searchField.addEventListener(`input`,()=>{let e=searchField.value.trim();if(e.length){let i=new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),`i`),a=0;for(let e of browseResults.children){let o=e.querySelector(`[data-searchable]`).textContent,s=i.test(o);e.style.setProperty(`display`,s?null:`none`),s&&(a+=1)}a===0?(statusField.removeAttribute(`aria-label`),statusField.textContent=BROWSER_JS_T.nothingFoundForXxx(e)):(statusField.setAttribute(`aria-label`,BROWSER_JS_T.showingXxxResultsForXxx(a,e)),statusField.textContent=``)}else{for(let e of browseResults.children){let i=e.dataset.track===void 0;e.style.setProperty(`display`,i?null:`none`)}statusField.setAttribute(`aria-label`,BROWSER_JS_T.showingFeaturedItems),statusField.textContent=``}});