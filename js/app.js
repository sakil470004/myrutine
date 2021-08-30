const allCardId = document.getElementById('all-card-id');

//ceate list 
function createItemEl(index) {
    // List Item
    const listEl = document.createElement('li');

    listEl.classList.add('card');
    listEl.innerHTML = `  
    <div class="container">
        <h4><b>John Doe</b></h4>
        <p id="${index}" ondblclick="makePeditable('${index}')">Architect & Engineer</p>
    </div>`;

    // listEl.contentEditable = true;
    // Append
    allCardId.appendChild(listEl);
}


for (var i = 0; i < 10; i++) {
    createItemEl(i);
}

//dobble click text editable 
const makePeditable = (index) => {
    const editableId = document.getElementById(index)
    console.log(editableId)
    editableId.contentEditable=true;
    

}
