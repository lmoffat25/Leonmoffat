<template lang="html">
  <div class="">
    <header class='ligne'>
      <div class="col-md-5">
        <img class="prt-width" src="../assets/medias/mockup-waw.png" alt="">
      </div>
      <div class="col-md-6">
        <h1>What a World</h1>
        <p>
            What a world est né d'une envie à mon groupe et moi de faire découvrir le monde et faciliter les échanges entre différentes populations. Son but était d'aider à préparer ses voyages simplement. Le <strong>site</strong> offrait de nombreuses informations sur chaque pays, et d'anciens voyageurs pouvait donner avis et conseils sur la destination. Parmi les nombreuses propositions de <strong>projet</strong>, la nôtre a été la plus populaire dans la
            <a href="https://www.facebook.com/pg/mmimontbeliard/community/?ref=page_internal">promotion</a>.
        </p>
      </div>
    </header>
    <main class="bgWhite">
      <div id='anchor'></div>
      <section class="container ligne justify-content-between">
        <div class="col-md-7">
          <h2>Mon travail</h2>
          <div class="">
            <p>
                En groupe de trois et en quatre mois, nous avons réalisé la <strong>conception</strong> <strong>le design</strong> et <strong>le développement</strong> du <strong>site</strong>. Je me suis principalement occupé du <strong>développement front</strong> et du <strong>marketing</strong>. Nous avons pour l'occasion ouvert des pages
                <a href="https://www.facebook.com/wawwhataworld/">Facebook</a> et <a href="https://www.instagram.com/waw_whataworld/?hl=fr">Instagram</a>. Sur lesquels nous publiions régulièrement et avons
                <a href="https://www.facebook.com/wawwhataworld/photos/a.412673825840818/412674132507454/?type=3&theater">boosté une publication</a>. C'était mes débuts dans le <strong>web marketing</strong> et c'est ce qui m'a donné envie de me spécialiser dans la <strong>communication</strong>. J'ai donc rédigé des <strong>rapports</strong> et des <strong>plans de communications</strong> pour préparer nos actions sur le net.
            </p>
            <a href="#"></a>
          </div>
        </div>
        <div data-aos='fade-left' class="col-md-5">
          <img id="wawMock" src="../assets/medias/waw-mockup.png" alt="">
        </div>
      </section>
      <div id='anchor2'></div>
    </main>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
//Variables
$font-color: #b9b9b9 ;
$primary-color: #1f1d1d;    //dark gray
$secondary-color: #FFFFFF; // white
$black: #000000;           // black
$hover-color: #999999;     // light gray

  #wawMock {
    width: 250%;
  }
  header { position: relative; }
  header:after {
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

  @media screen and (max-width: 767px) {
    #app > div:nth-child(2) > main > section {
      flex-flow: column;
      #wawMock {
        width: 100%;
      }
    }
  }
</style>
