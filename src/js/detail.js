import { deleteNote, getNoteById, updateNote } from './helpers/Notes.js';

document.addEventListener('DOMContentLoaded', async () => {
  const $form = document.querySelector('#form-note-detail');
  const $btnEliminar = document.querySelector('#btn_eliminar');
  const radioBtns = document.querySelectorAll('input[name="importance"]')

  let params = new URLSearchParams(location.search);
  var resp = null;
  var id = params.get('id');

  (async () => {
    resp = await getNoteById(id);
    if (resp.status === 200) {
      $form.elements.titulo.value = resp.data.titulo;
      $form.elements.descripcion.value = resp.data.descripcion;
      
      radioBtns.forEach(element => {
        console.log(resp.data.importancia, element.id)
        if(element.id === resp.data.importancia){
          element.checked = true
        }
      })
    }
  })();

  $btnEliminar.addEventListener("click", async () => {
    const resp = await deleteNote(id)
    if(resp.status === 200){
      location.href = "/"
    }else{
      alert("Error al eliminar la nota")
    }
  })

  $form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData($form);
    const formNewNote = new FormData();

    const importance = document.querySelector(
      'input[name="importance"]:checked'
    ).value;
    formNewNote.append('importancia', importance)
    formNewNote.append('titulo', formData.get("titulo"))
    formNewNote.append('descripcion', formData.get("descripcion"))
    const respUpdate = await updateNote(id, formNewNote);

    if (respUpdate.status !== 200) {
      alert('Hubo un error al actualizar los datos');
    }else{
      location.href = '/'
    }
  });
});
