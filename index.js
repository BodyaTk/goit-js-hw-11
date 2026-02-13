import{a as f,S as h,i as g}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const L="54618871-049329cee24e4d9e5a0e35534";f.defaults.baseURL="https://pixabay.com/api/";function b(o){return f.get("https://pixabay.com/api/",{params:{key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data)}const d=document.querySelector(".gallery"),p=document.querySelector(".loader");let n=null;function S(o){d.innerHTML=o.map(({webformatURL:t,largeImageURL:i,tags:a,likes:e,views:r,comments:s,downloads:y})=>` <li class="gallery-card">
        <a class="gallery-link" href="${i}">
              <img src="${t}" alt="${a}" class="gallery-icon" />
              </a>
              <ul class="icon-info">
               <li>Likes<p>${e}</p></li>
            <li>Views<p>${r}</p></li>
            <li>Comments<p>${s}</p></li>
            <li>Downloads<p>${y}</p></li>
            </ul>
          </li>`).join(""),n?n.refresh():n=new h(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"})}function q(){d.innerHTML=""}function P(){p.classList.add("hiden")}function c(){p.classList.remove("hiden")}const l=o=>{g.error({title:"Error",position:"topRight",message:o})},m=document.querySelector(".form"),u=document.querySelector("[name=search-text]");m.addEventListener("submit",$);function $(o){o.preventDefault();const t=u.value.trim();if(q(),u.reset,t===""){l("Введіть назву");return}else P(),b(t).then(i=>{i.hits.length===0?l("Sorry, there are no images matching your search query. Please try again!"):S(i.hits),c()}).catch(i=>{c(),l("Sorry, there are no images matching your search query. Please try again!")}).finally(()=>m.reset())}
//# sourceMappingURL=index.js.map
