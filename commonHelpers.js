import{a as L,S as b,i as f}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();async function m(t,o){const l="https://pixabay.com/api/",s={key:"43032032-8eb24f10be4f06f56a6a96441",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await L.get(l,{params:s})).data}function v({webformatURL:t,largeImageURL:o,tags:l,likes:s,views:e,comments:r,downloads:a}){return`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
        <img loading="lazy" class="gallery-image" src="${o}" alt="${l}" />
      </a>
        <div class="image-info">
    <ul class="infoBlock">
    <li class="title">Likes</li>
    <li class="info">${s}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Views</li>
    <li class="info">${e}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Comments</li>
    <li class="info">${r}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Downloads</li>
    <li class="info">${a}</li>
    </ul>
    </div>
  </li>`}function M(t){return t.map(v).join("")}function g(t){const o=M(t);i.gallery.insertAdjacentHTML("beforeend",o),S.refresh()}const S=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),i={formEl:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadMore")};let c,n=1,h=0;const E=15;i.formEl.addEventListener("submit",P);i.btnLoadMore.addEventListener("click",q);d();u();async function P(t){if(t.preventDefault(),p(),u(),c=t.target.elements.request.value.trim(),i.gallery.innerHTML="",n=1,!c){d(),u(),f.error({message:"Please enter a request",position:"topRight"});return}try{const o=await m(c,n);if(console.log(o),o.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h=Math.ceil(o.totalHits/E),g(o.hits),y()}catch(o){console.log(o)}d(),i.formEl.reset()}async function q(){n+=1,p();try{const t=await m(c,n);g(t.hits)}catch(t){console.log(t)}B(),w(),d()}function y(){i.btnLoadMore.classList.remove("is-hidden")}function u(){i.btnLoadMore.classList.add("is-hidden")}function w(){n>=h?(u(),f.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):y()}function d(){i.loaderEl.classList.add("is-hidden")}function p(){i.loaderEl.classList.remove("is-hidden")}function B(){const t=i.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map