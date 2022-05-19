import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryElements = document.querySelector(".gallery");
const markupElements = createImageMarkup(galleryItems);

function createImageMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join("");
}
galleryElements.insertAdjacentHTML("beforeend", markupElements);
let lightBox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
lightBox.on("show.simplelightbox", function () {});

console.log(galleryItems);
