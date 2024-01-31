// let a = 34

// let b = a
// a = 78



// console.log(a);
// console.log(b);


// let arr = {
//     name: "ali",
//     age: "14"
// }


// let arr2 = arr

// arr.name = "arr3"

// console.log(arr);
// console.log(arr2);
let btn = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btnSpan = document.querySelector(".btn3 span")
let span = document.querySelector(".div-span")

btn.addEventListener('click' , function(){
    span.textContent = span.innerText - 1
    btnSpan.textContent = btnSpan.textContent - 50
})
btn2.addEventListener('click' , function(){
    span.textContent = 1*span.innerText + 1
    btnSpan.textContent = 1*btnSpan.textContent + 50
})

