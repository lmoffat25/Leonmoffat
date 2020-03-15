<template lang="html">
  <div class="">

    <header class='container-fluid d-flex column justify-content-center'>
      <div class="container d-flex column justify-content-center col-md-8">
        <h1>Toques et Méditerranée</h1>
        <p>
          <strong>Toques et méditérrané</strong> est un <strong>restaurant et épicerie fine</strong> spécialisé dans les <strong>produit méditérranéens</strong>.
          Ce site est le premier d'une série de deux pour l'entreprise. Mon objectif était de créer <strong>une boutique</strong> qui représente bien la qualité des produits et de l'épicerie.
        </p>
      </div>
    </header>
    <main class="">
      <div class=" img1 col-10 col-md-11 col-lg-8 m-a"></div>

      <h2 class="m-a m-t-b-l light">PREUVE D'ELEGENCE</h2>

      <div class="img2 m-b-l"></div>

      <p class="col-md-8 m-a">
        La boutique est crée avec <strong>Prestashop</strong>. Un outil génial pour vendre mais très limitant d'un point de vu <strong>design</strong>.
        La difficulté était de se démarquer des autres <strong>boutiques</strong>. On s'est donc focalisé principalement sur l'harmonie colorée.
        Car c'est la différence qui sera le plus visible.
      </p>

      <div class="grid ligne m-t-b-l">
        <div class="grid1"></div>
        <div class="grid2 m-t-m"></div>
        <div class="grid3 m-t-l"></div>
      </div>

      <div class="container col-md-8 d-flex column justify-content-center m-t-b-l">
        <p>
          <strong>Toques et méditerranée</strong> est la deuxième boutique sur laquelle je travaille.
          J'ai maintenant l'expérience pour en entreprendre d'autres avec cet outil.
        </p>
        <a class="m-a button" href="https://epicerie-produits-mediterraneens.com/" target=_blank>Voir site</a>
      </div>
    </main>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  header {
    height: 80vh;
  }
  h2{
    width: fit-content;
  }
  .img1 {
    height: 500px;

    background-image: url('../assets/medias/toques-accueil2.jpg');
    background-position: top;
    background-size: cover;
  }
  .img2 {
    height: 500px;

    background-image: url('../assets/medias/plats.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }

  .grid {
    div { background-position: center; background-size: cover; height: 300px; width:300px;}
    .grid1 {
      background-image: url('../assets/medias/toque1.jpg');
    }
    .grid2 {
      background-image: url('../assets/medias/toque2.jpg');
    }
    .grid3 {
      background-image: url('../assets/medias/toque3.jpg');
    }
  }

  @media screen and (max-width: 767px) {
    #app > div:nth-child(2) > main > div.grid.ligne.m-t-b-l {
      flex-flow: column;
      div {
        margin: 1em 0;
      }
    }
  }
</style>
