
// <ul id="gallery"></ul>


// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
//   css-классы.

  const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
  const mark = createImages(images);
  console.log("~ createImages ", mark );
function createImages (images) {
  return images.map(({url, alt}) => {
    return `<li> <img  src="${url}" alt="${alt}" > </li>`;
  }).join('');
  }; 

   
  const listRef = document.querySelector('#gallery');
  console.log("~ listRef ", listRef )


 listRef.insertAdjacentHTML('beforeend', mark);

  const elements = images.map(e => {
      const tegs = document.createElement('li');
      tegs.textContent = e.url;
      return tegs;
  });
  console.log("~ elements", elements);

  // listRef.appendChild(elements);