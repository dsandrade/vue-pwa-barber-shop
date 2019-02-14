<template>
  <div class="full-container">
    <header class="center-flex fix-top">
      <span>Barber List</span>
    </header>
    <main>
      <b-container>
        <router-view></router-view>
      </b-container>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'

  export default {
    name: 'full',
    components: {
      'footer-component': Footer
    }
  }
</script>

<style>
  .span-down-div {
    position: absolute;
    bottom: 0;
    padding-bottom: 10px;
  }

  .container {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .center-flex {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
  }

  .login-logo {
    width: 100%;
    max-width: 350px;
  }

  input {
    outline: none!important;
  }

  button {
    outline: none!important;
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
    height: 60px;
    padding: 0 16px 0 24px;
    background-color: #8D4D41;
    color: #ffffff;
  }

  header span {
    height: 100%;
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 20px;
  }

  .fix-bottom {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
  }

  .fix-top {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
  }
</style>
