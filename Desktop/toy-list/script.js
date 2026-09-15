

const toys = ['მანქანა', 'თოჯინა', 'ტყლარწი']
const lists = document.getElementById('lists')
const submit = document.getElementById('submit')
const toyInput = document.getElementById('submit')

function renderToys(){
    
    toys.forEach(toy => {
        const li = document.createElement('li')
        li.textContent = toy
        lists.appendChild(li)
    })
}

renderToys();