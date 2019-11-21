<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Chaussettes vente</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/typographie.css">
    <link rel="stylesheet" href="assets/stylesgraphiques.css">
    <link rel="stylesheet" href="assets/misesenpage.css">

    <link rel="stylesheet" href="assets/styles.css">
  </head>
  <body>
    <header>
      <div class="navigation parentszw">
        <nav>
          <ul class="row">
            <li><a href="index.php">Accueil</a></li>
            <li><a href="panier.php">Panier</a></li>
          </ul>
        </nav>
      </div>
      <div class="ctr incol parentszh">
        <h1>Vente privée de chien</h1>
        <a class="button" href="#chaussettes">Voir nos meilleurs chiens</a>
      </div>

    </header>
    <main>
      <?php include 'database.php'; ?>
      <section id="chaussettes" class="grille-vente">
        
        <div class="text">
          <h2>Notre selection pour vous</h2>
          <p>Choissiez vos chiens, achetez les, recevez les.</p>
        </div>

        <!-- Div qui charge les contenus de la bdd et les affiches. -->
          <div class="grille ctr">
            <div class=" row">
              <?php while ($row = $stmt->fetch()) { ?>
                <a href="panier.php?action=ajout&amp;l=<?php echo $row['name'] ?>&amp;q=1&amp;p=<?php echo $row['prix'] ?>" >
                <div class="item col-lg-4 incol ctr">
                    <img src="<?php echo $row['Image'] ?>" alt="">
                    <p><?php echo $row['name'] ?> <?php echo $row['prix'] ?>€</p>
                  <a class="button" href="panier.php?action=ajout&amp;l=<?php echo $row['name'] ?>&amp;q=1&amp;p=<?php echo $row['prix'] ?>" >Ajouter au panier</a>
                </div>
              </a>
              <?php }  ?>
            </div>
          </div>


      </section>
    </main>
    <footer>

    </footer>
  </body>
</html>
