export function createMarkup(images) {
  return `<ul class="img-list">${images
    .map(
      img => `<li class="item"><a class="link" href="${img.largeImageURL}"><img class="image"
//        src="${img.webformatURL}" alt="${img.tags}"></a><div class="info"><div><h3>Likes</h3><p>${img.likes}</p></div><div><h3>Views</h3><p>${img.views}</p></div><div><h3>Comments</h3><p>${img.comments}</p></div><div><h3>Downloads</h3><p>${img.downloads}</p></div></div></li>`
    )
    .join('')}</ul>`;
}
