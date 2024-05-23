<?php
include './includes/head.php';

?>
<header class="header-app container">
  <div class="content-logo">
    <h2><a href="/">App Notas</a></h2>
    <img src="./assets/icons/document.svg" alt="">
  </div>
  <!-- <div class="search-container" role="search" id="search-form">
    <button>
      <img height="30px" width="40px" src="./assets/icons/search-outline.svg" alt="">
    </button>
    <input type="text" placeholder="Bucar alguna nota...">
  </div> -->
</header>
<main class="container container-detail">
  <form id="form-note-detail">
    <input name="titulo" class="form-note-detail__input" placeholder="Ingrese un titulo" type="text">
    <textarea name="descripcion" class="form-note-detail__input" placeholder="Ingresa una descripcion" cols="30" rows="10"></textarea>
    <div class="radio-btn-container">
      <h3>
        Importancia
      </h3>
      <div class="radio-btn-container__content-input radio-btn-container__content-input--darkText">
        <label for="high">
          Alta
        </label>
        <input class="radio-btn__high" id="high" type="radio" value="high" name="importance">

        <label for="medium">
          Media
        </label>
        <input class="radio-btn__medium" id="medium" type="radio" value="medium" name="importance">

        <label for="no-importante">
          Sin importancia
        </label>
        <input checked class="radio-btn__no-importance" id="no-importante" type="radio" value="no-important" name="importance">
      </div>
    </div>
    <button class="btn-formNote">
      Guardar
    </button>
    <button type="button" id="btn_eliminar" class="btn-formNote">
      Eliminar
    </button>
  </form>

</main>



<script type="module" src="./js/detail.js"></script>
</body>

</html>