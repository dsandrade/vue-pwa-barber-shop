<template>
  <div id="app">
    <div class="content">
      <!--<header>-->
      <!--<span>Vue.js PWA</span>-->
      <!--</header>-->
      <main>
        <img
          class="login-logo"
          src="https://barbershop.southcentralus.cloudapp.azure.com/static/img/logo.png" alt="BarberShop PWA"
        >
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .login-logo {
    width: 100%;
    max-width: 350px;
  }

  html {
    background: url(https://barbershop.southcentralus.cloudapp.azure.com/static/img/login.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
