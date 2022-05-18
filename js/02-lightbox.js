import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryElements = document.querySelector(".gallery");
const markupElements = createImageMarkup(galleryItems);
galleryElements.insertAdjacentHTML("afterbegin", markupElements);
function createImageMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, decription }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${decription}" />
</a>
    `;
    })
    .join("");
}
const lightBox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
