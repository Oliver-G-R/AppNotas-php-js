<?php
include '../db/database.php';

class NotesController
{
  private $conn;

  public function __construct()
  {
    $this->conn = Database::getConnection();
  }


  public function handleRequest()
  {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
      if (isset($_GET['id'])) {
        $this->getNoteById();
      } else {
        $this->getNotes();
      }
    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && !isset($_GET["id"])) {
      $this->createNote();
    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET["id"])) {
      echo $_GET["id"];
      $this->updateNote();
    } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
      $this->deleteNote();
    } else {
      echo "Método HTTP no soportado.";
    }
  }

  public function getNotes()
  {
    $query = "SELECT * FROM Notas";
    $resp = mysqli_query($this->conn, $query);

    if ($resp) {
      $data = array(); // Un arreglo para almacenar los resultados

      // Recorre los resultados y agrégalos al arreglo
      while ($fila = $resp->fetch_assoc()) {
        $data[] = $fila;
      }

      // Convierte el arreglo en formato JSON
      $json = json_encode($data);

      // Establece la cabecera para indicar que se envía una respuesta JSON
      header('Content-Type: application/json');

      // Envía el JSON como respuesta
      echo $json;
    } else {
      throw new Exception("Error en la inserción: " . mysqli_error($this->conn));
    }
  }



  public function getNoteById()
  {
    $id = $_GET['id'];
    $query = "SELECT * FROM Notas WHERE id = '$id'";
    $resp = mysqli_query($this->conn, $query);

    if ($resp) {
      if (mysqli_num_rows($resp) > 0) {
        // Existe una nota con el ID proporcionado, procesa los resultados
        $noteData = mysqli_fetch_assoc($resp);
        // Haz algo con los datos de la nota, como devolverlos como JSON
        header('Content-Type: application/json');
        echo json_encode($noteData);
      } else {
        // No se encontró una nota con el ID proporcionado
        echo "Nota no encontrada.";
      }
    } else {
      throw new Exception("Error en la inserción: " . mysqli_error($this->conn));
    }
  }

  public function createNote()
  {
    $id = $_POST['id'];
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $importancia = $_POST['importancia'];

    $query = "INSERT INTO Notas (id, titulo, descripcion, importancia) VALUES ('$id', '$titulo', '$descripcion', '$importancia')";

    if (mysqli_query($this->conn, $query)) {
      echo "Datos insertados correctamente.";
    } else {
      throw new Exception("Error en la inserción: " . mysqli_error($this->conn));
    }
  }

  public function updateNote()
  {
    $id = $_GET['id'];
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];
    $importancia = $_POST['importancia'];
    $query = "UPDATE Notas SET titulo = '$titulo', descripcion = '$descripcion', importancia = '$importancia' WHERE id = '$id'";
    $resp = mysqli_query($this->conn, $query);
    if ($resp) {
    http_response_code(200);
    } else {
      throw new Exception("Error al actualizar los datos : " . mysqli_error($this->conn));
    }
  }

  public function deleteNote()
  {
    $id = $_GET['id'];
    $query = "DELETE FROM Notas WHERE id = '$id'";
    $resp = mysqli_query($this->conn, $query);

    if ($resp) {
      http_response_code(200);
      } else {
        throw new Exception("Error al actualizar los datos : " . mysqli_error($this->conn));
      }
  }
}

$notesController = new NotesController();
$notesController->handleRequest();
