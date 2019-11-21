<div class="container p-b-m">
  <h2>Projets les plus récents</h2>
  <p>CAUTION ! Ces sites ne sont pas du tout optimisés !</p>
</div>
<div id="hebdo" class="container">

  <!-- Liste de sites -->
  <?php while ($row = $stmtb->fetch()) { ?>
  <a class="site col-lg-3" href="<?php echo $row['link'] ?>">
    <div class="site" style="overflow:hidden;">
      <img src="<?php echo $row['Image'] ?>" alt="Page d'accueil d'un site Parallax">
    </div>
    <p><?php echo $row['name'] ?></p>
  </a>
<?php }  ?>
</div>
