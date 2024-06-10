import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

const formEl = document.querySelector('.search-form');
const container = document.querySelector('.container');
const loadMore = document.querySelector('.load-more');
import { loader } from './js/pixabay-api';

let query;
let page = 1;

formEl.addEventListener('submit', handleSearch);
loadMore.addEventListener('click', onLoadMore);

async function handleSearch(event) {
  event.preventDefault();
  loadMore.style.visibility = 'hidden';  

  page = 1;
  container.innerHTML = '';
  query = event.target.elements.search.value.trim();


  try {
    if (!query) {
      iziToast.error({
        message: 'Ay caramba! No empty fields, please',
        messageColor: '#ffffff',
        backgroundColor: '#d00000',
        position: 'topRight',
        timeout: 5000,
      });
    } else {
      await getImages(query, page);

      formEl.reset();
    }
  } catch (error) {
    alert(error);
  }
}

async function onLoadMore() {
  try {
    loadMore.disabled = true;
    page += 1;
    loader.classList.add('is-on');
    await getImages(query, page);

    const card = document.querySelector('.item');
    const imgEl = document.querySelector('.image');
    const cardHeight = card.getBoundingClientRect().height;
    const imgHeight = imgEl.getBoundingClientRect().height;
    const totalHeight = cardHeight + imgHeight;
    window.scrollBy({
      left: 0,
      top: totalHeight,
      behavior: 'smooth',
    });

  } catch (error) {
    alert(error.message);
  } finally {
    loadMore.disabled = false;
  }
}
