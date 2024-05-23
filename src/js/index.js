import { CardNote } from '../components/CardNote.js';
import { createNote, getNote } from './helpers/Notes.js';
import { generateRandomId } from './helpers/generateid.js';

document.addEventListener('DOMContentLoaded', () => {
  const $buttomNoteToggle = document.querySelector('#buttonNoteToggle');
  const $noteFormAdd = document.querySelector('#form-note');
  const $containerForm = document.querySelector('#container-form');
  const $gridContentCardNotes = document.querySelector('#gridContentCardNotes');

  //Abrir formulario
  $buttomNoteToggle.addEventListener('click', () => {
    $containerForm.classList.toggle('activ');
  });

  //Solicitar informacion y renderizar en pantalla en cuanto se cargue el la pagina
  (async () => {
    const resp = await getNote();

    if (resp.status === 200) {
      resp.data.forEach((element) => {
        const card = new CardNote(
          element.id,
          element.titulo,
          element.descripcion,
          element.importancia
        );
        $gridContentCardNotes.insertAdjacentHTML('beforeend', card.render());
      });
    }
  })();

  //Mandar informacion
  $noteFormAdd.addEventListener('submit', async (e) => {
    e.preventDefault();

    const importance = document.querySelector(
      'input[name="importance"]:checked'
    ).value;

    const formData = new FormData($noteFormAdd);

    if (formData.get('titulo') !== '' && formData.get('descripcion') !== '') {
      const NEWformData = new FormData();

      NEWformData.append('id', generateRandomId());
      NEWformData.append('titulo', formData.get('titulo'));
      NEWformData.append('descripcion', formData.get('descripcion'));
      NEWformData.append('importancia', importance);

      const resp = await createNote(NEWformData);

      if (resp.status === 200) {
        $containerForm.classList.toggle('activ');
        const card = new CardNote(
          formData.get('id'),
          formData.get('titulo'),
          formData.get('descripcion'),
          importance
        );
        $gridContentCardNotes.insertAdjacentHTML('beforeend', card.render());
        document.location.reload();
      } else {
        alert(resp.message);
      }
    }
  });
});
