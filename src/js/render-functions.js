import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function createGallery(images) {
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        ` <li class="gallery-card">
        <a class="gallery-link" href="${largeImageURL}">
              <img src="${webformatURL}" alt="${tags}" class="gallery-icon" />
              <ul class="icon-info">
               <li>Likes<p>${likes}</p></li>
            <li>Views<p>${views}</p></li>
            <li>Comments<p>${comments}</p></li>
            <li>Downloads<p>${downloads}</p></li>
            </ul>
          </li>`
    )
    .join('');
  let lightbox = new SimpleLightbox('.gallery-link', {
    captionDelay: 250,
    showCounter: false,
    captionsData: 'alt',
  });
  lightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.add('hiden');
}

function hideLoader() {
  loader.classList.remove('hiden');
}
export const errorMessage = msg => {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    message: msg,
  });
};

export { createGallery, clearGallery, showLoader, hideLoader };
