const categories = document.querySelectorAll(".item");
console.log(`Namber of categories:`, categories.length)

categories.forEach((item) => {
 
    const title = item.firstElementChild.textContent;
    const elements = item.lastElementChild.children.length;
    
    console.log(`category:`, title )
    console.log(`element:`, elements)
});

