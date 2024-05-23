const createNote = async (data) => {
  try {
    const response = await fetch('../../controllers/NoteController.php', {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      throw new Error('Error al crear una nota');
    }
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 400,
      message: 'Error al crear una nota',
    };
  }
};
const updateNote = async (id, noteData) => {
  try {
    const response = await fetch(
      `../../controllers/NoteController.php?id=${id}`,
      {
        body: noteData,
        method: 'POST',
      }
    );
    if (!response.ok) {
      throw new Error('Error al crear una nota');
    }
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 400,
      message: 'Error al crear una nota',
    };
  }
};

const deleteNote = async (id) => {
  try {
    const response = await fetch(
      `../../controllers/NoteController.php?id=${id}`,
      {
        method: "DELETE"
      }
    );
    if (!response.ok) {
      throw new Error('Error al crear una nota');
    }
    return {
      status: 200,
    };
  } catch (error) {
    return {
      status: 400,
      message: 'Error al crear una nota',
    };
  }
};

const getNote = async () => {
  try {
    const response = await fetch('../../controllers/NoteController.php');
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error('Error al crear una nota');
    }
    return {
      status: 200,
      data,
    };
  } catch (error) {
    return {
      status: 400,
      message: 'Error al crear una nota',
    };
  }
};

const getNoteById = async (id) => {
  try {
    const response = await fetch(
      `../../controllers/NoteController.php?id=${id}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Error al crear una nota');
    }
    return {
      status: 200,
      data,
    };
  } catch (error) {
    return {
      status: 400,
      message: 'Error al crear una nota',
    };
  }
};

export { createNote, updateNote, deleteNote, getNote, getNoteById };
