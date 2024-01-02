let submitButton = document.querySelector('.submit');
let addedValue= document.querySelector('.lineByLine');
let input = document.getElementById('input');
// why erroron enter
input.addEventListener('keyup',(event)=>{
    console.log(event);
    if (event.key == 'Enter') {
        let input = document.getElementById('input').value.trim()

        document.getElementById('input').value = '';
        if (input !== '') {
            let createList =document.createElement('div')
            createList.innerHTML=`
            <div class="newCreateLine">
            <input id="checkbox" type="checkbox">
            <p class="paragraph">${input}</p>
            <i id="delete" class="fa-solid fa-circle-xmark fa-lg"></i>
        </div>`
        createList.querySelector('#delete').addEventListener('click', ()=>{
            deleteButton(createList)
        });
        document.getElementById('selectedDelete').addEventListener('click', () => {
            selectDeleted(createList);
        });
        addedValue.appendChild(createList);
        }
    }
})


submitButton.addEventListener('click',()=>{
    let input = document.getElementById('input').value.trim()

    document.getElementById('input').value = '';
    if (input !== '') {
        let createList =document.createElement('div')
        createList.innerHTML=`
        <div class="newCreateLine">
        <input id="checkbox" type="checkbox">
        <p class="paragraph">${input}</p>
        <i id="delete" class="fa-solid fa-circle-xmark fa-lg"></i>
    </div>`
    createList.querySelector('#delete').addEventListener('click', ()=>{
        deleteButton(createList)
    });
    document.getElementById('selectedDelete').addEventListener('click', () => {
        selectDeleted(createList);
    });
    addedValue.appendChild(createList);
    }
})

let  deleteButton = (ind)=>{
    ind.remove()
}
let selectDeleted = (div)=>{
    let checkBoxTure = div.querySelector('#checkbox')
    if (checkBoxTure.checked ) {
        div.remove()
    }   
}


