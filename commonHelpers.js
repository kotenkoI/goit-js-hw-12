import{a as b,S as P,i as g}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function m(o,e){const a="https://pixabay.com/api/",i={key:"43032032-8eb24f10be4f06f56a6a96441",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return(await b.get(a,{params:i})).data}function v({webformatURL:o,largeImageURL:e,tags:a,likes:i,views:t,comments:r,downloads:n}){return`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
        <img loading="lazy" class="gallery-image" src="${e}" alt="${a}" />
      </a>
        <div class="image-info">
    <ul class="infoBlock">
    <li class="title">Likes</li>
    <li class="info">${i}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Views</li>
    <li class="info">${t}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Comments</li>
    <li class="info">${r}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Downloads</li>
    <li class="info">${n}</li>
    </ul>
    </div>
  </li>`}function M(o){return o.map(v).join("")}function h(o){const e=M(o);s.gallery.insertAdjacentHTML("beforeend",e),S.refresh()}const S=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s={formEl:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadMore")};let d,l=1,y=0;const c=15;s.formEl.addEventListener("submit",E);s.btnLoadMore.addEventListener("click",q);f();u();async function E(o){if(o.preventDefault(),L(),u(),d=o.target.elements.request.value.trim(),s.gallery.innerHTML="",l=1,!d){f(),u(),g.error({message:"Please enter a request",position:"topRight"});return}try{const e=await m(d,l);if(console.log(e),console.log("Number of hits:",e.hits.length),console.log("Current Page:",l),console.log("Per Page:",c),e.hits.length===0){g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(y=Math.ceil(e.totalHits/c),e.hits.length<c){console.log(e.hits.length),console.log(c),console.log(e.hits.length<c),h(e.hits),u();return}h(e.hits),p()}catch(e){console.log(e)}f(),s.formEl.reset()}async function q(){l+=1,L();try{const o=await m(d,l);h(o.hits)}catch(o){console.log(o)}B(),w(),f()}function p(){s.btnLoadMore.classList.remove("is-hidden")}function u(){s.btnLoadMore.classList.add("is-hidden")}function w(){l>=y?(u(),g.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):p()}function f(){s.loaderEl.classList.add("is-hidden")}function L(){s.loaderEl.classList.remove("is-hidden")}function B(){const o=s.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
