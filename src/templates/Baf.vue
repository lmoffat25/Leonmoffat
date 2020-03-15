<template lang="html">
  <div class="">
    <header class='container ligne'>
      <div class=" col-md-8">
        <h1>{{title}}</h1>
        <p>
          La <strong>BAF</strong> est la <strong>fédération des associations étudiante de Franche Comté</strong>. Ils mettent toutes les <strong>association étudiantes</strong> de la région sous un même drapeau.
          Ils apportent également de l'aide aux <strong>étudiants de Franche Comté</strong> en organisants de nombreux évènements.
          L'ancien site ne répondait plus à leurs besoins. Il n'était pas utilisable non plus.
          Le but de ce projet était de clarifier leurs discours et leur permettre de facilement gérer la plateforme. Leur marque devait s'étendre à toute la <strong>Franche-Comté</strong> et plus seulement <strong>Besançon</strong>.
        </p>
      </div>
      <!-- <div class="col-md-5 ">
        <img class="" src="" alt="">
      </div> -->
    </header>
    <main class='container-fluid relat'>

      <img class='abslt' src="../assets/medias/mockup-baf.png" alt="">

      <section id='pres1' class='container'>
        <div class="ligne">

          <div data-aos='fade-up' class="col-12 blockMobile m-b-s"></div>

          <div data-aos='fade-up' data-aos-delay='300' class="blocks"></div>
          <div data-aos='fade-up' class="m-b-m blocks"></div>
          <div data-aos='fade-up' data-aos-delay='300' class="blocks"></div>

        </div>
        <p class='col-md-8 m-a'>
          Le design devait renvoyer au reste de leur charte graphique. Le logo ne pouvait pas être changé non plus. Sachant qu'aucun de ces élément n'avait été réalisé par un <strong>designer</strong> mais par les <strong>étudiants de l'association</strong> eux même.
          Nous nous somme basé sur des variantes des couleurs du logo et de leurs documents officiels. Le site doit parler aux <strong>étudiants</strong> mais aussi aux administratifs de de la <strong>ville de Besançon</strong>. On a trouvé un compromis entre un design famillier
          et professionnel.
        </p>
      </section>

      <section id='pres2'>
        <div class="container">

          <div class="top ligne">

            <div class="top-left img col-md-6">
              <div class=""></div>
            </div>

            <div class="top-right img d-flex column col-md-6">
              <div class=""></div>
              <div class=""></div>
            </div>
          </div>

          <div class="bottom img col-md-12 d-flex justify-content-between">
            <div class=""></div>
            <div class=""></div>
            <div class=""></div>
          </div>

        </div>
      </section>

      <section id='pres3' class='container d-flex algn-center justify-content-end'>
        <div class="col-md-6">
          <p>
            On s'est bien amusé sur ce projet qui nous as appris beaucoup de choses. Nottament dans les relations clients.
            Aujourd'hui le site est en ligne, pourra être repris par le prochain bureau et utilisé pendant plusieurs années.
            Vous pouvez le visiter avec le bouton ci-dessous.
          </p>
          <a href="https://baf-fc.fr/" target=_blank class='button'>Voir site</a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'BAF Franche-Comté',
    }
  }
}
</script>

<style lang="scss" scoped>

main>img:first-of-type{
  bottom:0;
  left:0;
  width:30vw;
}
section {
  height: 100vh;
}
  #pres1>div>div.blockMobile {
    background-image: url('../assets/medias/baf-accueil.jpg');
    background-size: cover;
    background-position: center;
    height: 300px;

    display: none;
  }
  #pres1>div>div.blocks {
    height: 60vh;
    width: 300px;
    background-image: url('../assets/medias/baf-accueil.jpg');
    background-size: cover;
    background-position: center;
    &:nth-child(2) {
      background-position: left;
    }
    &:nth-child(4) {
      background-position: right;
    }
  }

  #pres2 {
    >div {
      height: 100%;
      overflow: hidden;

      .bottom {
        height: 40%;
        div {
          width: 33%;
          &:nth-child(2) {
            margin: 0 1em;
          }
        }
      }
    }

    .top {
      height: 60%;
      margin-bottom: 1em;

      >div {
        height: 100%;
        // margin-bottom: 1em;
        }
        .top-left {
          div {
            background-image: url('../assets/medias/slider.jpg');
          }
        }
        .top-right {
          padding:0;

          div {
            &:nth-child(1) {
              margin-bottom: .5em;
              background-image: url('../assets/medias/formation-baf.jpg');
            }
            &:nth-child(2) {
              margin-top: .5em;
              background-image: url('../assets/medias/agorae.jpg');
            }
          }
        }

      }
      .bottom {
        div {
          &:nth-child(1) {
            background-image: url('../assets/medias/video.jpg');
          }
          &:nth-child(2) {
            background-image: url('../assets/medias/footer.jpg');
          }
          &:nth-child(3) {
            background-image: url('../assets/medias/legume.jpg');
          }
        }
      }

    .img {
      div {
        height: 100%;
        width: auto;
        // background-image: url('../assets/medias/baf-accueil.jpg');
        background-position: center;
        background-size: cover;
        overflow: hidden;
      }
    }
  }


@media screen and (max-width: 767px) {
  .blocks {
    display: none;
  }
  .blockMobile {
    display: block!important;
  }
}

</style>
