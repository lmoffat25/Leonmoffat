<!DOCTYPE html>
<html lang="fr">
<head>
    <?php include ("modules/main_head.php") ?>
</head>
<body id="accueil">
    <?php include ("modules/header_main.php") ?>

    <main>
      <?php include ("section/intro.php") ?>
        <!--
            SITES INTERNET
        -->
        <?php include ("section/main_sitesweb.php") ?>
        <!--
            PROJETS COMMUNICATIONS
         -->
        <?php include ("section/main_comm.php") ?>
        <!--
            AUTRES PROJETS
        -->
        <?php include ("section/main_autres.php") ?>
    </main>
    <?php include ("modules/footer.php") ?>
</body>
</html>
