import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </div>
      </li>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", selectImg);
function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const largeImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${largeImg}" alt="${event.target.alt}">`);
  instance.show();
}

console.log(galleryItems);
