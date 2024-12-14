const categoriesEl = document.querySelector('#categories');

const liEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${liEl.length}`); 

liEl.forEach(item => {
    const textEl = item.querySelector('h2').textContent;
    const element = item.querySelectorAll('li').length;

    console.log(`Category: ${textEl}`);
    console.log(`Elements: ${element}`);

});
