import{a as u,S as y,i as h}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="54618871-049329cee24e4d9e5a0e35534";u.defaults.baseURL="https://pixabay.com/api/";function L(o){return u.get("https://pixabay.com/api/",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data)}const f=document.querySelector(".gallery"),d=document.querySelector(".loader");function S(o){f.innerHTML=o.map(({webformatURL:t,largeImageURL:i,tags:a,likes:e,views:r,comments:s,downloads:m})=>` <li class="gallery-card">
        <a class="gallery-link" href="${i}">
              <img src="${t}" alt="${a}" class="gallery-icon" />
              </a>
              <ul class="icon-info">
               <li>Likes<p>${e}</p></li>
            <li>Views<p>${r}</p></li>
            <li>Comments<p>${s}</p></li>
            <li>Downloads<p>${m}</p></li>
            </ul>
          </li>`).join(""),new y(".gallery-link",{captionDelay:250,showCounter:!1,captionsData:"alt"})}function b(){f.innerHTML=""}function q(){d.classList.add("hiden")}function l(){d.classList.remove("hiden")}const n=o=>{h.error({title:"Error",position:"topRight",message:o})},p=document.querySelector(".form"),c=document.querySelector("[name=search-text]");p.addEventListener("submit",P);function P(o){o.preventDefault();const t=c.value.trim();if(b(),c.reset,t===""){n("Введіть назву");return}else q(),L(t).then(i=>{i.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):S(i.hits),l()}).catch(i=>{l(),n("Sorry, there are no images matching your search query. Please try again!")}).finally(()=>p.reset())}
//# sourceMappingURL=index.js.map
