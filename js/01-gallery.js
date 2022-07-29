import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);

function createItemsMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryContainerEl.innerHTML = imagesMarkup;

const onGalleryContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
  console.log(e.target.dataset.source)
    
    
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}"width="800" height="600">`);

  instance.show();
};
    
galleryContainerEl.addEventListener("click", onGalleryContainerClick);
