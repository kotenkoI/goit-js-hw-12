function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
          <a class="gallery-link" href="${webformatURL}">
        <img class="gallery-image" src="${largeImageURL}" alt="${tags}" />
      </a>
        <div class="image-info">
    <ul class="infoBlock">
    <li class="title">Likes</li>
    <li class="info">${likes}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Views</li>
    <li class="info">${views}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Comments</li>
    <li class="info">${comments}</li>
    </ul>
    <ul class="infoBlock">
    <li class="title">Downloads</li>
    <li class="info">${downloads}</li>
    </ul>
    </div>
  </li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}