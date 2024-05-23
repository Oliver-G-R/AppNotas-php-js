<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'oliver');
define('DB_PASS', 'G7815GRO');
define('DB_NAME', 'AppNotas');

class Database
{
  public static function getConnection()
  {
    $connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($connection->connect_error) {
      die("Error de conexión a la base de datos: " . $connection->connect_error);
    }

    return $connection;
  }
}
