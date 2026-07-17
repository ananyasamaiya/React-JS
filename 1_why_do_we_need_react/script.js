let left_arrow = document.querySelector(".left-arrow");
let right_arrow = document.querySelector(".right-arrow");
let basket1Count = document.querySelector(".basket-1 span");
let basket2Count = document.querySelector(".basket-2 span");

let totalApples = 10;
let secondBasket = 0;
let firstBasket = totalApples - secondBasket;

// here we are updating the variable and dom both this is called imperative programming using in javascript
// React is declarative programming here updating in variable will automatically update in browser

// 3 reason to use React
// 1 declarative programming
// 2 component based architecture
// 3 single page application
left_arrow.addEventListener("click", () => {
    if(secondBasket > 0){
        firstBasket++;
        basket1Count.innerHTML = firstBasket;
        secondBasket--;
        basket2Count.innerHTML = secondBasket;
    }
});

right_arrow.addEventListener("click",()=>{
    if(firstBasket > 0){
        firstBasket--;
        basket1Count.innerHTML = firstBasket;
        secondBasket++;
        basket2Count.innerHTML = secondBasket;

    }
});
