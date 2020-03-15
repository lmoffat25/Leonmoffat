<template lang="html">
  <header>
    <!-- animation mobile -->
    <div id="color_block_mobile"></div>

    <div id="color_block"></div>

    <div id="content_block">
      <div id="content">
        <h1 id='headTitle'>{{title}}</h1>
        <div id="sub_under">
          <p class="blk">{{text}}</p>
          <button id="button" class='button btn-wht'>{{button}}</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'Leon Moffat',
      text: 'Hello, I\'m a web developer. Prepare to enter my world',
      button: 'Click to enter'
    }
  }
};
</script>

<style lang="scss">
  $primary-color: #1f1d1d;    //dark gray
  $secondary-color: #FFFFFF; // white
  $black: #000000;           // black
  $hover-color: #999999;     // light gray

  header {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;

    flex-flow: row;

    height: 100vh;
    width: 100%;

    position: relative;
  }
  h1 {
    background-image: url("../assets/medias/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    height: 0;
    font-size: 5em;
    padding: 200px 0 0 0;
    margin-top: 0;
  }
  #color_block_mobile {
    z-index: 1;
  }

  #color_block {
    z-index: 1;

    width: 33%;
    height: 100%;

    background: $black;
    position: relative;

    &:after {
      content:'';
      position: absolute;
      right: -10vw;
      bottom: 0;
      top:0;
      border-style: solid;
      border-color: transparent;
      border-width: 50vh 5vw;
      border-bottom-color: $black;
      border-left-color: $black;
    }
  }

  #content_block {

  position: absolute;
    width: 100%;
    height: 100%;

    background: $secondary-color;

    display: -webkit-flex;
    display: -ms-flex;
    display: flex;

    flex-flow: column;

    justify-content:center;

    align-items: flex-end;
  }

  #sub_under {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;

    flex-flow: column;

    align-items: center;

    padding-right: 1.5em;
  }

  #content {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;

    flex-flow: column;

    align-items: center;

    width: 35vw;
    padding-right: 10%;
  }


  //Animation
  #color_block.bigger {
    transition: width 1s;
    width: 40vw;
  }
  body header #color_block.retract {
    transition: width 1s;
    width: 35vw;
  }
  body header #color_block.fill {
    transition: width 1s;
    width: 100vw;
  }


  //Responsive
  @media (max-width: 500px) {
    #color_block {
      width: 15%;
      display: none;
    }
    #color_block_mobile {
      display: block;

      width: 100vw;
      height: .1vh;

      background-color: white;

      position: absolute;
      top: 0;
      left: 0;
    }
    #color_block_mobile.bigger_mobile {
      transition: height 1s;
      height: 100vh;
    }
    #content{
      padding-right: 0;
      transform: translate(-50%);
      width: 50vw;
    }
    #content > h1, #content > p {
      text-align: center;
    }
  }
</style>
