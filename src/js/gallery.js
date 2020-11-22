import pictures from './gallery-items.js';
const refs = {
  galleryContainer: document.querySelector('ul.gallery'),
  lightbox: document.querySelector('.lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]')
};

const cardsMarkup = creatGalleryMarkup(pictures);

refs.galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

refs.galleryContainer.addEventListener('click', onClickHandler);

function creatGalleryMarkup(pictures) {
    return pictures.map(({original, preview, description}) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    }).join('');
    
};

function onClickHandler(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== 'IMG') {
        return;
    }
        const imageRef = e.target;
        const largeImageURL = imageRef.dataset.source;
        console.log(largeImageURL)
   
        refs.lightbox.src = largeImageURL;
        refs.lightbox.classList.add('is-open');
        refs.lightbox.querySelector('.lightbox__image').src = largeImageURL;
        refs.lightbox.querySelector('.lightbox__image').alt = imageRef.alt;
   
    };

refs.btn.addEventListener('click', onCloseHandler);

function onCloseHandler(e) {
  if(e.target.nodeName === "BUTTON") {
      refs.lightbox.classList.remove('is-open');
    };
};




