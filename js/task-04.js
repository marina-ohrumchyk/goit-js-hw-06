const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
     }
}
const decrementBtn = document.querySelector('button[data-action = "decrement"]');
const incrementBtn = document.querySelector('button[data-action = "increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function  (event) {
    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function  (event) {
    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});


// const counterValue = 0 ;
    
// const decrementBtn = document.querySelector('button[data-action = "decrement"]');
// const incrementBtn = document.querySelector('button[data-action = "increment"]');
// const valueEl = document.querySelector('#value');

// decrementBtn.addEventListener('click', function  (event) {
    
//     console.log(counter);
//     valueEl.textContent = counterValue.value;
// });

// incrementBtn.addEventListener('click', function  (event) {
   
//     console.log(counter);
//     valueEl.textContent = counterValue.value;
// });