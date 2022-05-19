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
       <div class = "gallery__item">
    <a class = "gallery__link" href = "large-image.jpg">
    <img class = "gallery__image" 
    src = "${preview}"
    data-source = "${original}"
    alt = "${decription}"
    />
    </a>
    </div>
    `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onImageclick);
function onImageclick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const largeImageEl = event.target.dataset.source;
  const image = basicLightbox.create(
    `
		<img width="1400" height="900" src="${largeImageEl}">
	`,
    {
      onShow: (image) => {
        window.addEventListener("keydown", onEscDown, { once: true });
      },

      onClose: (image) => {
        window.removeEventListener("keydown", onEscDown);
      },
    }
  );

  image.show();

  function onEscDown(event) {
    if (event.code === "Escape") {
      console.log(event);
      image.close();
    }
  }
}
