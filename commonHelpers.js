import{a as p,S as L,i as f}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();async function m(t,o){const l="https://pixabay.com/api/",s={key:"43032032-8eb24f10be4f06f56a6a96441",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await p.get(l,{params:s})).data}function b({webformatURL:t,largeImageURL:o,tags:l,likes:s,views:e,comments:r,downloads:a}){return`<li class="gallery-item">
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
  </li>`}function v(t){return t.map(b).join("")}function g(t){const o=v(t);i.gallery.insertAdjacentHTML("beforeend",o),M.refresh()}const M=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),i={formEl:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadMore")};let d,u=1,h=0;const S=15;i.formEl.addEventListener("submit",E);i.btnLoadMore.addEventListener("click",P);c();n();async function E(t){if(t.preventDefault(),y(),n(),d=t.target.elements.request.value.trim(),i.gallery.innerHTML="",u=1,!d){c(),n(),f.error({message:"Please enter a request",position:"topRight"});return}try{const o=await m(d,u);if(console.log(o),o.hits.length===0){c(),n(),f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h=Math.ceil(o.totalHits/S),g(o.hits),q()}catch(o){console.log(o)}c(),i.formEl.reset()}async function P(){u+=1,y();try{const t=await m(d,u);g(t.hits)}catch(t){console.log(t)}B(),w(),c()}function q(){i.btnLoadMore.classList.remove("is-hidden")}function n(){i.btnLoadMore.classList.add("is-hidden")}function w(){u>=h&&(n(),f.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function c(){i.loaderEl.classList.add("is-hidden")}function y(){i.loaderEl.classList.remove("is-hidden")}function B(){const t=i.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
