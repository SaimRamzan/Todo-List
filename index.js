
let textEnter = document.querySelector('.paragraph');
let submitButton = document.querySelector('.submit');
let addedValue= document.querySelector('.lineByLine');
// console.log(input);
submitButton.addEventListener('click',()=>{
    let input = document.getElementById('input').value
    if (!input) {
        alert("Empty input")
    }
    let textData = textEnter.innerHTML = input
    let createList =document.createElement('lineByLine')
    createList.innerHTML=`
    <p class="paragraph">${textData}</p>
    <i class="fa-solid fa-circle-xmark fa-lg" style="color: #dc5881;"></i>
    `
    addedValue.appendChild(createList);
})