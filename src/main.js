import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';

const formEl = document.querySelector('.search-form');
const container = document.querySelector('.container');

formEl.addEventListener('submit', handleSearch);

// function handleSearch(event) {
//   event.preventDefault();

//   container.innerHTML = '';
//   const query = event.target.elements.search.value.trim();
//   if (!query) {
//     iziToast.error({
//       message: 'Ay caramba! No empty fields, please',
//       messageColor: '#ffffff',
//       backgroundColor: '#d00000',
//       position: 'topRight',
//       timeout: 5000,
//     });
//   } else {
//     getImages(query);
//     formEl.reset();
//   }
// }

async function handleSearch(event) {
  event.preventDefault();

  container.innerHTML = '';
  const query = event.target.elements.search.value.trim();

  try {
    if(!query) {
      iziToast.error({
      message: 'Ay caramba! No empty fields, please',
      messageColor: '#ffffff',
      backgroundColor: '#d00000',
      position: 'topRight',
      timeout: 5000,
    });  
    } else {
      getImages(query);
      formEl.reset();
    }
  }
  catch(error) {
    console.log(error);
  }
}
