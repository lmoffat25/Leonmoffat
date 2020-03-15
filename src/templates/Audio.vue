<template lang="html">
  <div class="">
    <header class='container d-flex align-items-center justify-content-center'>
      <div class="col-sm-12 col-md-8 column justify-content-center">
        <h2>L'épopée D'arwen</h2>
        <p>
          Ce projet est une histoire audio réalisée en 24h. Un thème nous a été donné lors d'une compétition et nous devions en créer un oeuvre.
          Le thème était "erreur 404". On a mis nos talents de <strong>videastes</strong> et notre sens de l'humour à l'épreuve dans ce projet.
          Puisqu'on approchait de la fin de nos études, on a voulu incorporer quelques blagues sur nos professeurs.
        </p>
      </div>
    </header>
    <main class=''>
      <div class="container d-flex column align-items-center justify-content-center m-b-m">
        <iframe  height='500px' width="80%" src="https://www.youtube.com/embed/qAkXnECJNCo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="m-b-s"></iframe>
        <p class='col-md-8' >
          Cette histoire audio est un de mes travaux préférés. Entre le travail d'équipe, le dépassement de sois, la compétition et le resultat final.
          On a passé un incroyable moment, en plus de tester nos capacités.
        </p>
      </div>
      <div class="container d-flex ligne m-b-m">
        <p class="col-sm-12 col-md-6">
          Le point le plus difficile pour nous a été d'écrire des personnages. Ils devaient être crédible malgrés leurs courtes apparitions. Alors on s'est basé sur les personnes qui les interprêteront.
          Les imaginant et leurs donnant des traîts qui ressemblent aux doubleurs.
        </p>
        <img class='col-sm-12 col-md-4' src="../assets/medias/troll.jpg" alt="">
      </div>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  #app > div:nth-child(2) > header {
    height:90vh;
  }
  @media (max-width: 768px) {
    #app > div:nth-child(2) > main > div.container.d-flex.ligne.m-b-m {
      flex-flow: column;
    }
  }
</style>
