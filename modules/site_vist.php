<section class="container-fluid vist <?php if($page=='mezclamayor'){echo'bgwhite';}else{echo "";} ?>">
    <div class="container col-xs-6 col-md-8">
      <h3 class="<?php if($page=='mezclamayor'){echo'bgwhite';}else{echo "";} ?>">Visitez le site internet</h3>
      <p>
        <?= $line[11] ?>
      </p>
      <div class="buttons column">
        <a href="<?php if($page=='mezclamayor'){echo'http://mezclamayor.com';}else{echo"../fichiers/maquette_waw.pdf";} ?>" target=_blank class="bouton <?php if($page=='mezclamayor'){echo'bouton_white';}else{echo"";} ?>"><?php if($page=='mezclamayor'){echo'Mezcla mayor';}else{echo"What a World";} ?></a>
      </div>
      <a href="../template/<?= $line[10] ?>"  ><img class="links" <?php if($page=='mezclamayor'){echo'style="border: 1px solid gray;"';}else{echo"";} ?> src="../media/<?= $line[12] ?>" alt="Page d'accueil de <?= $page ?> - Léon Moffat"></a>
    </div>
</section>
style="border: 1px solid gray;"
