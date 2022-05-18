import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createImageCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);
function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, decription }) => {
      return `
       <li class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" 
    src = "${preview}"
    data-source = "${original}"
    alt = "${decription}"
    />
    </a>
    </li>
    `;
    })
    .join("");
}
//console.log(createImageCardMarkup(galleryItems));

// import * as basicLightbox from "basiclightbox";
// galleryContainer.addEventListener("click", onImageclick);
// function onImageclick(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains("gallery__image")) return;
// }
const image = basicLightbox.create(`
    <img width="1400" height="900" src="${preview}">
  `);
image.show();
