<template>
  <div id="app">
    <div id="menu">
      <nav id="mainNav" class="m-t-s container d-flex justify-content-between fixed">
        <router-link class="routes" to='/Home'><img src=".\assets\medias\logo.svg" alt=""></router-link>
        <ul class="col-md-8 p-b-s d-flex">                <!-- Menu -->
          <li class='relat'>
            <a>Web</a>
            <ul class='subMenu p0 abslt'>
              <li class=""><router-link class="routes" to="/Baf">Fédération</router-link></li>
              <li class=""><router-link class="routes" to="/ToquesMed">Epicerie</router-link></li>
              <li class=""><router-link class="routes" to="/Mezclamayor">Mezclamayor</router-link></li>
              <li class=""><router-link class="routes" to="/WhataWorld">What a world</router-link></li>
            </ul>
          </li>
          <li class='relat'>
            <a>Communication</a>
            <ul class='subMenu p0 abslt'>
              <li><router-link class="routes" to="/VinsJura">Vins du Jura</router-link></li>
            </ul>
          </li>
          <li class='relat'>
            <a>Autre</a>
            <ul class='subMenu p0 abslt'>
              <li><router-link class='routes' to='/HistoireAudio'>Histoire Audio</router-link></li>
            </ul>
          </li>
          <li><a href="mailto:leonmfft@gmail.com">Contact</a></li>
        </ul>
        <div class="lang">                                <!-- Lang -->
          <a class='m-r-xs' href="#">Fr</a>/<a id='en' class='m-l-xs' href="#">En</a>
        </div>
      </nav>

      <nav id="mobNav" class="fixed">

        <div class="contains">
          <button class="menu-icon" type="button">
            <span class="menu-icon-box">
              <span class="menu-icon-inner"></span>
            </span>
          </button>
        </div>


        <div class="menu">
          <div class="menu-inner">
            <ul>
              <li><router-link class="routes" to='/Home'>Accueil</router-link></li>
              <li>
                <a href="#">Sites Web</a>
                <ul>
                  <li class=""><router-link class="routes" to="/Baf">Fédération</router-link></li>
                  <li class=""><router-link class="routes" to="/ToquesMed">Epicerie</router-link></li>
                  <li class=""><router-link class="routes" to="/Mezclamayor">Mezclamayor</router-link></li>
                  <li class=""><router-link class="routes" to="/WhataWorld">What a world</router-link></li>
                </ul>
              </li>
              <li>
                <a href="#">Communication</a>
                <ul>
                  <li><router-link class="routes" to="/VinsJura">Vins du Jura</router-link></li>
                </ul>
              </li>
              <li>
                <a href="#">Autres</a>
                <ul>
                  <li><router-link class='routes' to='/HistoireAudio'>Histoire Audio</router-link></li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
  #mobNav {
    width: 100vw;
  }
</style>
