/*  Making Divs elements */
function makeListItemDiv() {
    const listDiv = document.createElement('div')
    listDiv.className = 'trello-list'
    const listTitle = document.createElement('p')
    listTitle.innerHTML = 'Insert a title'
    listDiv.appendChild(listTitle)
    return listDiv
}

function makeToDoDiv(){
    const itemDiv = document.createElement('div')
    itemDiv.className = 'list-item'
    return itemDiv
}

function makeFooterDiv(id, listDiv){

    // Footer Div
    const footerDiv = document.createElement('div')
    footerDiv.className = 'item-footer'
    footerDiv.id = `footer-${id}`

    // Input 
    const footerInp = document.createElement('input')
    footerInp.className = 'input-bar'
    footerInp.id = `inp-${id}`
    footerInp.placeholder = 'Insert a task'

    // Button
    const footerBtn = document.createElement('button')
    footerBtn.className = 'add-button'
    footerBtn.id = id
    footerBtn.innerHTML = '+'

    // Add listener to button
    addingListenerToAddBtn(id, footerBtn, listDiv, footerDiv, footerInp)
    footerDiv.appendChild(footerInp)
    footerDiv.appendChild(footerBtn)
    return footerDiv
}

/*
    ADDING NEW LIST
*/
const addListListener = document.getElementById('add-list')
addListListener.addEventListener('click', () => {
    const listDiv = makeListItemDiv()
    const trelloBoard = document.getElementsByClassName('body-board')
    const listDivs = document.getElementsByClassName('trello-list')
    const footerDiv = makeFooterDiv(listDivs.length, listDiv)
    listDiv.appendChild(footerDiv)
    trelloBoard[0].insertBefore(listDiv, addListListener)
})

/*
    Adding item within list
*/
function addingListenerToAddBtn(id, btn, listDiv, footerDiv, inputText){

    btn.addEventListener('click', () => {
        const itemDiv = makeToDoDiv()
        itemDiv.innerHTML = inputText.value
        inputText.value = ''
    
        listDiv.insertBefore(itemDiv, footerDiv)
    }) 
}

const addBtn = document.getElementById('0')
const listDiv = document.getElementById(`list-${addBtn.id}`)
const footerDiv = document.getElementById(`footer-${addBtn.id}`)
const inputText = document.getElementById(`inp-${addBtn.id}`)
addingListenerToAddBtn('0', addBtn, listDiv, footerDiv, inputText )