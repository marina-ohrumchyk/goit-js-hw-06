const list = document.getElementById('ingredients');

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

list.append(
  ...ingredients.map(item => {
    let itemList = document.createElement('li');
    itemList.textContent = item;
    return itemList;
  })
);

console.log(list);

