<?php
include 'database.php';
  function createUser($name, $image, $prix) {
		try {
			$con = getDatabaseConnexion();
			$sql = "INSERT INTO chausettes (name, Image, prix)
					VALUES ('$name', '$Image', '$prix')";
	    	$con->execute($sql);
		}
	    catch(PDOException $e) {
	    	echo $sql . "<br>" . $e->getMessage();
	    }
	}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form class="" action="add.php" method="post">
      <p>Titre</p>
      <input type="text" name="Titre" value="<?php $name ?>">
      <p>Image</p>
      <input type="text" name="Image" value="">
      <input type="submit" name="submit" value="submit">
      <a href="index.php?action=ajout&amp;n=<?php echo !empty($name)?$name:''; ?>&amp;i=<?php echo !empty($image)?$image:''; ?>&amp;p=<?php !empty($prix)?$prix:''; ?>">Envoyer</a>
      <a href="index.php">Retour</a>
    </form>
  </body>
</html>
