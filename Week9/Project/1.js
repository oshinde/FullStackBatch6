const addBtn = document.getElementById('add')
const notes1 = JSON.parse(localStorage.getItem('notesSave'))
if(notes1) {
    notes1.forEach((note)=> {
        console.log("adding",note)
        addNewNote(note)})
}
addBtn.addEventListener('click',()=>addNewNote())
function addNewNote(text=''){
    const note = document.createElement('div')
    note.classList.add('note')    
    note.innerHTML=`<div class="tools">
        <button class="edit" id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    <div class = "main ${text ? "":"hidden"}"></div>
    <textarea class="${text ? "hidden":""}"></textarea>`

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')
    
    textArea.value=text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click',()=>{
        note.remove()
        upDateLS()
    })

    editBtn.addEventListener('click',()=>{
        main.classList.toggle("hidden")
        textArea.classList.toggle("hidden")
    })

    textArea.addEventListener('input',(e)=>{
        const { value } = e.target
        console.log(e, "   ", value)
        main.innerHTML = marked(value)
        upDateLS()
    })
    document.body.appendChild(note)
}
function upDateLS(){
    const textNote = document.querySelectorAll('textarea')
    const notes =[]
    textNote.forEach(note=> notes.push(note.value))
    localStorage.setItem('notesSave', JSON.stringify(notes))
}




