<template>
  <div class="home center-flex">

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        loginPlaceholder: 'Digite aqui o seu usuário',
        passwordPlaceholder: 'Digite aqui sua senha',
        login: '',
        password: '',
        msg: 'Welcome to Your Vue.js PWA'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .home {
    .span-items {
      font-size: 18px;
      color: #fff;
      cursor: pointer;
    }

    .span-items span {
      color: #E57953;
    }

    .input-login-form {
      padding: 6% 20%;
      text-align: center;
      border-radius: 100px;
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid transparent;
      color: #fff;
      cursor: text;
    }

    .button-login-form {
      padding: 5% 35%;
      text-align: center;
      border-radius: 50px;
      border: 0px;
      background-color: #fff;
      color: #E57953;
      font-size: 20px;
      cursor: pointer;
    }

    .input-login-form::placeholder {
      color: #fff;
    }
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
