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

const list = document.querySelector('.gallery');

const item = images.map((image) => `<li><img src=${image.url} alt=${image.alt}</li>`).join("");

list.classList.add("js-list__img")

list.insertAdjacentHTML("beforeend", item)


console.log(list)
console.log(item)

// !========
// при задавані класу на (ul) не працює (CSS), перебрала безліч варіантів щоб задати клас на (li) не виходить.
// щось не розібралась