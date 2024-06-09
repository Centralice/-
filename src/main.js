import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

const formEl = document.querySelector('.search-form');
const container = document.querySelector('.container');
const loadMore = document.querySelector('.load-more');

loadMore.style.visibility = 'visible';

let query = '';
let page = 1;

formEl.addEventListener('submit', handleSearch);
loadMore.addEventListener('click', onLoadMore);

async function handleSearch(event) {
  event.preventDefault();

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
      getImages(query, page);
      formEl.reset();
    }
  } catch (error) {
    alert(error);
  }
}

// async function onLoadMore() {
//   try {
//     page += 1;
//     getImages(query, page);
//   } catch(error) {
//     console.log(error.message);
//   }
// }
