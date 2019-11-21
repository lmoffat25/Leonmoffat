<section class="<?php if($page=='videommi'|| $page=='defi'|| $page=='boss'){echo "";}else{echo "bgwhite";} ?> container-fluid  ligne monTravail">
    <div class="container col-md-5 nmlz" data-aos="fade-in">
        <h2>Mon travail</h2>
        <div>
          <p>
            <?= $line[3] //Texte ?>
          </p>
        </div>
    </div>

    <img src="../media/<?= $line[4]//image ?>" alt="Première page du plan de communication - Léon Moffat" class="col-xs-6 col-sm-6 col-md-3 dosrs" data-aos="fade-left">
</section>
