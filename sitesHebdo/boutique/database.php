<?php
  function getDatabaseConnexion() {
    try {
      $user = "sql7312732";
      $pass = "tls43jMlVr";
      $pdo = new PDO('mysql:host=sql7.freemysqlhosting.net; dbname=sql7312732',$user, $pass);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $pdo;
    }catch (PDOException $e) {
      print "Erreur !: " . $e->getMessage() . "<br/>";
      die();
    }
  }

  $con = getDatabaseConnexion();
  $stmt=$con->prepare('select * from chausettes');
  $stmt->execute();

  $stmtb=$con->prepare('select * from projets');
  $stmtb->execute();
?>
