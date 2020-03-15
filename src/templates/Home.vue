<template lang="html">
  <div>
    <header>
      <span></span>

      <h1>{{title}}</h1>                                  <!-- Title -->

      <p id="scroll">{{scroll}}</p>                       <!-- Scrol Indicator -->

      <div id="canvas"></div>
    </header>

    <main class="">
      <section id="sec1" class='container-fluid d-flex'>
        <div class="container d-flex">
          <p id="intro" class="col-sm-12 col-md-8 m-0a">Salut ! Je m'appelle <strong>Léon Moffat</strong>. J'ai 20 ans et je viens d'obtenir mon diplôme en MMI à Montbéliard. C'est dernières années je me suis essayé à de nombreux domaines. Toujours à la recherche de nouvelles connaissances et à élargir mon esprit à de nouvelles disciplines. Deux sont sortie du lot pour moi. Le <strong>dévelopement web</strong> et le <strong>web marketing</strong>.</p> <!-- Intro -->

          <div id="contSec1" class="container d-flex justify-content-between">
            <img data-aos="fade-right" class="col-md-6 col-lg-5" src="..\assets\medias\mockups.png" alt="">
            <p class='col-sm-12 col-md-6'>Ma passion pour internet a grandie aux côtés de mes travaux. J'ai particié et mené à bien de nombreux <strong>sites</strong> et plans de <strong>communications</strong>. Ma vision des choses, mon travail et celui acharné de mon équipe a permi à plusieurs de nos travaux de sortir du lot. Entre idée la plus originale de la promo ou plan le plus concret, innovant et fonctionnel. Ici je vous présente ce sur quoi j'ai travaillé ces derniers temps.</p>
          </div>
        </div>
      </section>
      <div id='anchor'></div>

      <section id="sec2" class=" bgWhite">
        <div  class="container">

          <div id='projects' class="container">

            <div data-aos='fade-up' id='project1'class=""></div>
            <div data-aos='fade-up' data-aos-delay="700" id='project2'class=""></div>
            <div data-aos='fade-up' data-aos-delay="300" id='project3'class=""></div>
            <div data-aos='fade-up' data-aos-delay="500" id='project4'class=""></div>
            <div data-aos='fade-up' id='project5'class=""></div>
            <div data-aos='fade-up' id='project6'class=""></div>
            <div data-aos='fade-up' id='project7'class=""></div>
            <div data-aos='fade-up' id='project8'class=""></div>
            <div data-aos='fade-up' id='project9'class=""></div>
            <div data-aos='fade-up' id='project10'class=""></div>

          </div>

          <div id='projects_mobile' class='container'>

            <div data-aos='fade-up' class="" id='projectMob1'></div>
            <div data-aos='fade-up' class="" id='projectMob2'></div>
            <div data-aos='fade-up' class="" id='projectMob3'></div>
            <div data-aos='fade-up' class="" id='projectMob4'></div>
            <div data-aos='fade-up' class="" id='projectMob5'></div>
            <div data-aos='fade-up' class="" id='projectMob6'></div>

          </div>

        </div>

      </section>
      <div id='anchor2'></div>
      <section id="sec3" class='container-fluid d-flex'>
        <div class="container d-flex justify-content-between">
          <p class='col-md-8 col-lg-6'>Aujourd'hui, je travaille tous les jours sur ce qu'il me plait. Ma vocation est d'améliorer la <strong>visibilté web</strong> d'entreprises locales. J'ai eu la chance de travailler sur des projets qui me tiennent vraiment à coeur. Sur des <strong>sites</strong> utilisés tous les jours. Demain me réserve bien des surprises, est-ce que vous choisirait d'en faire partie ?</p>
          <img data-aos='fade-left' class='col-md-4 col-lg-5' src="../assets/medias/hebdo.png" alt="">
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Bienvenue',
        scroll: 'Scroll down',
        intro: "",
        textSec1: "",
        titleSec2: "Mes Projets",
        textSec3: ""
      }
    }
  };

</script>

<style lang="scss">
//Variables
$font-color: #b9b9b9 ;
$primary-color: #1f1d1d;    //dark gray
$secondary-color: #FFFFFF; // white
$black: #000000;           // black
$hover-color: #999999;     // light gray


  header {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;

    position: relative;

    animation: appear .5s ease-in-out;
    h1 {
      animation: appear 1.5s ease-in-out;
    }
    #scroll {
      opacity:0;
      animation: appear 1.5s ease-in-out infinite;
      animation-delay: 1.5s;
    }

    #canvas {
      position: absolute;
      z-index: -1;
    }
  }

  #intro {
    max-height: fit-content;
  }

  #sec1 {
    position: relative;
    overflow-x: hidden;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-style: solid;
      border-color: transparent;
      border-width: 10vh 50vw;
      border-bottom-color: $secondary-color;
      border-left-color: $secondary-color;
    }
    >div {
      flex-flow: column;
      justify-content: space-evenly;


      #contSec1 {
        flex-flow: row;
        align-items: center;
        border-right: 2px solid white;
      }
    }
  }

  #sec3 {
    flex-flow: row;
    align-items: center;

    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      border-style: solid;
      border-color: transparent;
      border-width: 10vh 50vw;
      border-top-color: $secondary-color;
      border-right-color: $secondary-color;
    }
    >div {
      flex-flow: row;
      align-items: center;

      border-left: 2px solid white;
    }
  }



#sec2 {
  min-height: 60vh;
  height: auto;

  #projects_mobile {
    display: none;
  }
  .title {
    margin-bottom: 2em;
  }
  .select {
    background-color: transparent;
    border: none;
    border-right: solid 1px $primary-color;
    color: $primary-color;

    width: 15%;
    &:last-of-type { border:none; }
    &:focus { outline:0; }
    &:hover { color: $hover-color; }
  }
  >div {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 3em;
  }

  > div > div {
    display: grid;
    grid-template-columns: repeat(4, minmax(260px, 1fr));
    grid-template-rows: repeat(9, minmax(79px, 1fr));
    grid-gap:12px;

    div{
      border-radius: 10px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    #project1, #projectMob1 {
      grid-column: 1/2;
      grid-row: 1/3;

      background-image: url('../assets/medias/epopee_petit.jpg');
    }
    #project2, #projectMob2 {
      grid-column: 2/3;
      grid-row: 1/5;

      background-image: url('../assets/medias/mezclamayor-accueil-mobile.jpg');
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
    }
    #project3 {
      grid-column: 3/4;
      grid-row: 1/4;

      background-image: url('../assets/medias/generativeHomePage.jpg');

    }
    #project4, #projectMob3 {
      grid-column: 4/5;
      grid-row: 1/6;

      background-image: url('../assets/medias/toques-accueil.jpg');
      background-position: top;
    }
    #project5 {
      grid-column: 1/2;
      grid-row: 3/6;

      background-image: url('../assets/medias/departmmi_petit.jpg');
    }
    #project6 {
      grid-column: 2/3;
      grid-row: 5/9;

      background-image: url('../assets/medias/whataworld-accueil.jpg');
    }
    #project7, #projectMob4 {
      grid-column: 3/4;
      grid-row: 4/6;

      background-image: url('../assets/medias/baf-accueil.jpg');
    }
    #project8, #projectMob5 {
      grid-column: 1/2;
      grid-row: 6/10;

      background-image: url('../assets/medias/inshtager.jpg');
    }
    #project9 {
      grid-column: 3/4;
      grid-row: 6/10;

      background-image: url('../assets/medias/hebdo-mobile.png');
      background-position: top;
    }
    #project10, #projectMob6 {
      grid-column: 4/5;
      grid-row: 6/9;

      background-image: url('../assets/medias/quicommence.jpg');
      background-position: left;
    }
  }
}


@keyframes appear {
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


@media screen and (max-width: 767px) {



  section {
    height: auto;
    overflow: hidden;
  }
  #sec1 > div #contSec1 {
    flex-flow: column;
    align-items: center;
    border-right: none;
    margin-bottom: 8em;
  }
  #sec2>div> #projects.container {
    display: none;
  }
  #sec2 > div >#projects_mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(9, minmax(79px, 1fr));
    grid-gap:12px;

    #projectMob3 {
      grid-column: 1/2;
      grid-row: 3/6;
    }
    #projectMob6 {
      grid-column: 2/3;
      grid-row: 5/8;
    }
    #projectMob4 {
      grid-column: 2/3;
      grid-row: 8/11;
    }
  }

  #sec3 > div {
    flex-flow: column;
    align-items: center;
    border-left: none;
    margin-top: 5em;
  }
}
</style>
