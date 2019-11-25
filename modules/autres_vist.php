<!--
** Fin de page pour pages Autres
-->

<section class="container-fluid vist bgwhite">
    <div class="">
        <h3><?= $line[6] //titre ?></h3>
        <p>
          <?= $line[7] //texte ?>
        </p>
    </div>
    <?php
      if($page=="boss"){
        echo "<a href=''../fichiers/GoreVerbinski.pdf' target=_blank class='bouton bouton_white'>Voir site</a>";
      }else {
        echo "<iframe width='560' height='315' src='$line[8]' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
      }
    ?>
    <div class="p-t-s column">
      <h3><?= $line[9] ?></h3>
      <a href="../template/<?= $line[10] //Lien ?>" class="bouton bouton_white">visitez</a>
    </div>
</section>
