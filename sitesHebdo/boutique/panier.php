<?php
session_start();
include_once("fonction-panier.php");

$erreur = false;

$action = (isset($_POST['action'])? $_POST['action']:  (isset($_GET['action'])? $_GET['action']:null )) ;
if($action !== null)
{
  if(!in_array($action,array('ajout', 'suppression', 'refresh')))
  $erreur=true;

  //récuperation des variables en POST ou GET
  $l = (isset($_POST['l'])? $_POST['l']:  (isset($_GET['l'])? $_GET['l']:null )) ;
  $p = (isset($_POST['p'])? $_POST['p']:  (isset($_GET['p'])? $_GET['p']:null )) ;
  $q = (isset($_POST['q'])? $_POST['q']:  (isset($_GET['q'])? $_GET['q']:null )) ;

  //Suppression des espaces verticaux
  $l = preg_replace('#\v#', '',$l);
  //On verifie que $p soit un float
  $p = floatval($p);

  //On traite $q qui peut etre un entier simple ou un tableau d'entier

  if (is_array($q)){
    $QteArticle = array();
    $i=0;
    foreach ($q as $contenu){
      $QteArticle[$i++] = intval($contenu);
    }
  }
  else
  $q = intval($q);

}

if (!$erreur){
  switch($action){
    Case "ajout":
    ajouterArticle($l,$q,$p);
    break;

    Case "suppression":
    supprimerArticle($l);
    break;

    Case "refresh" :
    for ($i = 0 ; $i < count($QteArticle) ; $i++)
    {
      modifierQTeArticle($_SESSION['panier']['libelleProduit'][$i],round($QteArticle[$i]));
    }
    break;

    Default:
    break;
  }
}
echo '<?xml version="1.0" encoding="utf-8"?>';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Panier</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/typographie.css">
  <link rel="stylesheet" href="assets/stylesgraphiques.css">
  <link rel="stylesheet" href="assets/misesenpage.css">

  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <header style="height:auto;">
    <div class="navigation parentszw">
      <nav>
        <ul class="row">
          <li><a href="index.php">Accueil</a></li>
          <li><a href="panier.php">Panier</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <form class="" action="panier.php" method="post">
    <h1 class="szh2" colspan="4">Votre Panier</h1>
    <table style="width: 400px">
      <tr>
        <td>Libellé</td>
        <td>Quantité</td>
        <td>Prix Unitaire</td>
        <td>Supprimer</td>
      </tr>
      <?php
      if (creationPanier())
	{
		$nbArticles=count($_SESSION['panier']['libelleProduit']);
		if ($nbArticles <= 0)
		echo "<tr><td>Votre panier est vide </ td></tr>";
		else
		{
			for ($i=0 ;$i < $nbArticles ; $i++)
			{
				echo "<tr>";
				echo "<td>".htmlspecialchars($_SESSION['panier']['libelleProduit'][$i])."</ td>";
				echo "<td><input type=\"text\" size=\"4\" name=\"q[]\" value=\"".htmlspecialchars($_SESSION['panier']['qteProduit'][$i])."\"/></td>";
				echo "<td>".htmlspecialchars($_SESSION['panier']['prixProduit'][$i])."</td>";
				echo "<td><a href=\"".htmlspecialchars("panier.php?action=suppression&l=".rawurlencode($_SESSION['panier']['libelleProduit'][$i]))."\">Retirer</a></td>";
				echo "</tr>";
			}

			echo "<tr><td class=\"noborder\" colspan=\"2\"> </td>";
			echo "<td colspan=\"2\">";
			echo "Total : $".MontantGlobal();
			echo "</td></tr>";

			echo "<tr><td class=\"noborder\" colspan=\"4\">";
			echo "<input class=\"button\" type=\"submit\" value=\"Rafraichir\"/>";
      // Refresh quand change valeur
      echo "<input type=\"hidden\" name=\"action\" value=\"refresh\"/>";

			echo "</td></tr>";
		}
	}
      ?>
    </table>
    <a style="display: block;" class="button" href='index.php'>Retour</a>
  </form>
</body>
