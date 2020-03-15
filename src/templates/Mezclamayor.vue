<template lang="html">
  <div class="">
    <header class="container-fluid ligne ">
      <div class=" col-md-5">
        <img class="prt-width" src="../assets/medias/mockup-mez.png" alt="">
        <!-- <img src="../assets/medias/mezclamayor-accueil-mobile.jpg" alt=""> -->
      </div>
      <div class="col-md-6">
        <h1>{{title}}</h1>
        <p><a href="http://mezclamayor.com/">Mezcla mayor</a> est un site de présentation pour un groupe de musique latino. Le but du <strong>site</strong> est de donner de la visibilité au groupe et permettre aux professionnels de les contacter.
        Pour ce <strong>projet</strong>, je me suis occupé du contenu textuel de la <strong>communication</strong> et du maquettage en <strong>html / css / js</strong>. J’ai également été nommé chef d’équipe pour assurer le bon déroulement du projet.</p>
      </div>
    </header>
    <main>
      <section class="container-fluid ligne m-b-l">

        <div id="trigger-left" class="container col-lg-4 d-flex column justify-content-between"> <!-- Left part -->
          <div data-aos="fade-up" class="">
            <h2>{{secTitle}}</h2>
            <p >
                Mon rôle principal était de gérer la <strong>communication</strong> du projet et sa gestion. J'ai donc étudié leurs actions de <strong>communication</strong> actuelles, leur présence sur internet et proposé de nombreuses options pour améliorer la visibilité du groupe. J'ai rédigé de nombreux <strong>dossiers</strong> pour aider notre commanditaire à gérer son <strong>site</strong>. J'ai également revu la gestion de leur page
                <a href="https://www.facebook.com/MezclaMayor/">Facebook</a> et crée un <a href="https://www.instagram.com/mezclamayor/?hl=fr">compte Instagram</a>. C'est sur ces derniers qu'ils publient leurs actualités.
            </p>
          </div>
          <div data-aos="fade-up" class="">
            <p>
                {{callToAction}}
            </p>
            <a class="button" href="src/assets/fichiers/mezclamayor.pdf" target=_blank >{{bouton}}</a>
          </div>
        </div>

        <div data-aos='fade-up' class="col-lg-4"> <!-- Middle -->
          <img class="prt-width" src="../assets/medias/iphoneMezclaMayor.png" alt="">
        </div>

        <div data-aos="fade-up" class="col-lg-4"> <!-- right -->
          <p>
              Un atout important du <a href="http://mezclamayor.com/">site</a> était son système de gestion de contenu, qui était alimenté par les
              <a href="https://www.instagram.com/mezclamayor/?hl=fr">réseaux sociaux</a> directement. Cela facilitait l'utilisation du site pour les administrateurs, mettait le site à jour régulièrement et créer une présence forte sur ces médias sociaux.
          </p>
        </div>

      </section>
    </main>

  </div>
</template>

<script>
export default {
  watch:{
    $route (Home, Mezclamayor){
      console.log('This worked');
    }
  },
  data () {
    return {
      title: 'Mezcla Mayor',
      secTitle: 'Mon travail',
      callToAction: 'Vous pouvez consulter certains de mes dossiers ici',
      bouton: 'Voir dossier'
    }
  }
}
</script>

<style lang="scss" scoped>
  //Variables
  $font-color: #b9b9b9 ;
  $primary-color: #1f1d1d;    //dark gray
  $secondary-color: #FFFFFF; // white
  $black: #000000;           // black
  $hover-color: #999999;     // light gray

  #trigger-left {
    height: 90vh;
  }

  @media screen and (max-width: 767px) {
    #app > div:nth-child(2) > main > section {
      flex-flow: column;

      #trigger-left {
        height: auto;
        > div:nth-child(2) {
          text-align: center;
        }
      }
    }
    #app > div:nth-child(2) > main > section > div:nth-child(2) {
      display: flex;
      justify-content: center;

      img {
        width: 25%;
        margin: 2rem 0;
      }
    }
  }

</style>
