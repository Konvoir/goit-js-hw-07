const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  

  const listIngredients = ingredients.map(e => {
    const teg = document.createElement('li');
    teg.textContent = e;
    return teg;
  });

  const lists = document.querySelector('ul');

  lists.append(...listIngredients);
