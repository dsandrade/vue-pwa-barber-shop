<template>
  <div class="login">
    <div class="center-flex center-login">
      <img
        class="login-logo"
        src="https://barbershop.southcentralus.cloudapp.azure.com/static/img/logo.png" alt="BarberShop PWA"
      >
      <div class="center-flex">
        <input
          type="text"
          v-model="login"
          :placeholder="loginPlaceholder"
          @focus="loginPlaceholder = ''"
          @blur="loginPlaceholder = 'Digite aqui o seu usuário'"
          class="input-login-form"
        >
        <input
          type="password"
          v-model="password"
          :placeholder="passwordPlaceholder"
          @focus="passwordPlaceholder = ''"
          @blur="passwordPlaceholder = 'Digite aqui o seu usuário'"
          class="input-login-form"
          style="margin-top: 3%;"
        >
        <button
          type="submit"
          class="button-login-form"
          style="margin-top: 3%;"
        >LOG IN</button>
      </div>
      <div style="text-align: center; margin-top: 4%; margin-bottom: 4%;">
        <span class="span-items">
          Esqueceu a senha? | <span>Criar nova conta?</span>
        </span>
      </div>
    </div>
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
<style>
  .login {
    background: url(https://barbershop.southcentralus.cloudapp.azure.com/static/img/login.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    width: 100vw;
    height: 100vh;
  }

  .center-login {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
  }

  .center-flex {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }

  .login-logo {
    width: 100%;
    max-width: 350px;
  }

  .span-items {
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }

  .span-items span {
    color: #E57953;
  }

  .input-login-form {
    padding: 3vw 10vh;
    text-align: center;
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid transparent;
    color: #fff;
    cursor: text;
  }

  .button-login-form {
    padding: 3vw 17vh;;
    white-space: nowrap;
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
</style>
