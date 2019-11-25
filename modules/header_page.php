
<header class="container-fluid <?php if(!empty($white)){echo 'bgwhite';}else{echo '';} ?>">
    <nav class="container-fluid col-md-8 logo">
        <a href="../index.php"><img src="../media/<?php if(!empty($white)){echo 'logo_leonMoffat.png';}else{echo 'logo.svg';} ?>"  alt="logo du site de Léon Moffat"></a>
    </nav>
    <div class="container ligne">
        <div class="ligne" style="position: relative; height: 100%; width: 100%;">
            <img src="../media/<?= $line[0] ?>" alt="Mockup du site What a world par Léon Moffat" class="animated fadeIn img_desk <?php if($page=='vinsjura'){echo "col-md-6 col-sm-5 col-xs-3";} ?>" />
            <img src="../media/<?= $line[0] ?>" alt="Mockup du site What a world pour mobile - Léon Moffat" class="animated fadeInUp img_mobile" />
        </div>
        <div class="col-md-6 mxheight">
            <h1 class="animated fadeInRight"><?= $line[1] ?></h1>
            <p>
                <?= $line[2] ?>
            </p>
        </div>
    </div>
</header>
