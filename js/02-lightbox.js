import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerEl.innerHTML = imagesMarkup;

function createItemsMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});