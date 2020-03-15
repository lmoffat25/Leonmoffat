<template lang="html">
  <div class="">
    <header class='ligne container'>
      <div class="col-md-6">
        <h1>Vins du Jura</h1>
        <p>
          Les <strong>Vins du Jura</strong> est un entreprise productrice de <strong>vins</strong> dans l'Est de la France. Ils sont les seuls à pouvoir faire du <strong>Vin Jaune</strong>. Un <strong>vin</strong> avec un goût particulièrement incompris.
          Il paraît pour de nombreuses personnes comme un <strong>vin mauvais</strong> ou qui a tourné. Alors que bien accompagné, il se déguste très bien. Notre mission était de faire connaître et comprendre ce fameux <strong>vin</strong>.
        </p>
      </div>
        <img  class="col-5 col-md-4" src="../assets/medias/affichejura.jpg" alt="">
    </header>
    <main class=''>
      <div class='d-flex columns justify-content-center m-t-b-l'>
        <div class="container ligne">
          <img data-aos='fade-right' class=' col-md-8 col-lg-5' src="../assets/medias/vigne.jpg" alt="">
          <div class="col-md-7">
            <h2>Mon travail</h2>
            <p>
              Nous étions une 20ène divisés en 4 équipes à travailler sur ce projet. Chaque équipe a proposé une <strong>stratégie</strong>. Dès le départ on a trouvé deux moyens de communications, le off et online. Chacun avait sa tâche à accomplir, la mienne était de concevoir une <strong>stratégie de contenu</strong> pour internet.
            </p><hr/>
            <p>
              Je me suis focalisé sur les <strong>réseaux sociaux</strong>. Nottament<strong> Facebook, Youtube et Instagram</strong> qui était à son pic de popularité. Mon objectif était de trouver la façon la moins couteuse de produire une grande quantité de contenu. J'ai décidé de me diriger sur <strong>la vidéo</strong>, qui était le plus rentable et encore grandement mis en avant sur <strong>Instagram</strong>.
            </p>
          </div>
        </div>
      </div>
      <div class="container m-b-m d-flex column align-items-center">
          <img class='col-md-8 m-t-b-m m-a' src="../assets/medias/budget.jpg" alt="">
          <p class='m-a col-md-8'>
            Ce qui nous a démarqué des autres est la crédibilité de notre plan. Nous avons fixé deux budget en fonction de leurs préférences et ce pour chaque média. Au final nous avons obtenu deux budget globaux et leur impact.
            Je vous laisse jeter un oeil à mon dossier.
          </p>
          <a class='button' href="src/assets/fichiers/dossierRS.pdf" target=_blank>Voir dossier</a>
      </div>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 990px) {
  #app > div:nth-child(2) > main > div.d-flex.columns.justify-content-center.m-t-b-l > div {
    display: flex;
    flex-flow: column;

    img {
      max-height: 200px;
    }
  }
}
@media screen and (max-width: 767px) {
  header.ligne {
    flex-flow: column;
  }
}
</style>
