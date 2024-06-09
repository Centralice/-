import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

import { createMarkup } from '/js/render-functions';

const loader = document.querySelector('.loader');



export async function getImages(query) {
  const params = {
    key: '44273329-392765d5a069e216bf7d20a4c',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const url = `https://pixabay.com/api/?${params}`;

  loader.classList.add('is-on');

  try {
    const response = await axios(url, { params });
    if (response.data.hits.length) {
      const container = document.querySelector('.container');
      createMarkup(response.data.hits);
      container.insertAdjacentHTML(
        'beforeend',
        createMarkup(response.data.hits)
      );
      const lightbox = new SimpleLightbox('.container a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    } else {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query',
        messageColor: '#ffffff',
        backgroundColor: '#0077b6',
        position: 'topRight',
        timeout: 5000,
      });
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.classList.remove('is-on');
  }
}
