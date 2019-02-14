<template>
  <div class="footer fix-bottom" style="max-height: 56px;">
    <div class="phone-viewport">
      <md-bottom-bar md-type="shift" md-theme="bottom-bar-teal">
        <md-bottom-bar-item
          md-label="Home"
          md-icon="home"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          md-label="Posts"
          md-icon="favorite"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          md-label="Favorites"
          md-icon="favorite"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("bottom-bar-teal", (
    primary: #8D4D41
  ));

  @import "~vue-material/dist/theme/all";
</style>

<style>
  footer {
    height: 60px;
    padding: 0 16px 0 24px;
    background-color: #8D4D41;
    color: #ffffff;
  }

  footer div {
    height: 100%;
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
