import {saveNote,deleteNote,getNoteById,updateNote} from "./socket.js"

const notesList = document.querySelector('#notes')

const title = document.querySelector('#title')
const description = document.querySelector('#description')
let savedId = ''

const noteUI = note => {
   const div = document.createElement('div')
   div.innerHTML = `
   <div class=' card card-body rounded mb-2 shadow animate__animated animate__fadeInUp'>
       <div class='overflow-auto'>
       <h1 class="card-title">${note.title}</h1>
       <p class="card-text">${note.description}</p>
            <div>
            <button class="btn btn-danger delete" data-id="${note._id}">Delete</button>
            <button class="btn btn-secondary update" data-id="${note._id}">Edit</button>
             </div>
             </div>
   </div>
   `

   const btnDelete = div.querySelector('.delete')
   const btnUpdate = div.querySelector('.update')
   btnDelete.addEventListener('click',e=>deleteNote(btnDelete.dataset.id))
   btnUpdate.addEventListener('click',e=>getNoteById(btnUpdate.dataset.id))
   
   return div
}


export const renderNotes = (notes) => {
    notesList.innerHTML = ''
    notes.forEach(note => notesList.append(noteUI(note)))
} 

export const onHandleSubmit = (e) => {
    e.preventDefault();
    if(savedId){
        updateNote(savedId,title.value,description.value)
    }else{
        saveNote(title.value, description.value);
    }

    title.value = ''
    description.value = ''
    savedId = ''
    
};

export const appendNote = note => {
    notesList.append(noteUI(note))
}

export const fillForm = note => {
    title.value = note.title
    description.value = note.description
    savedId = note._id

}