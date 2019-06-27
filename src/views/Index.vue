<template>
  <div class="index">
    <div class="index__logo-animated left logo-fade delay-two"></div>
    <div class="index__logo-animated bottom logo-fade"></div>
    <div class="index__logo-animated top logo-fade delay-one"></div>
    <div class="index__banner">
      <h1 class="index__banner-title app-title with-bar">Hermes</h1>
      <p
        class="index__banner-text"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti beatae ducimus, voluptates nulla nam rerum maxime distinctio in dignissimos! Maiores sed nesciunt atque, praesentium id corporis quae non totam!</p>
    </div>

    <div class="index__login-panel">
      <AppLogoSmall class="index__login-logo"/>
      <form @submit.prevent="handleSubmit" class="index__login-form">
        <h4 class="index__login-title app-title with-bar">Login</h4>
        <input
          v-model="user.username"
          type="text"
          id="index__login-username"
          class="index__login-username"
          placeholder="Digite aqui seu ID ou Email…"
        >
        <input
          v-model="user.password"
          type="password"
          id="index__login-password"
          class="index__login-password"
          placeholder="Digite aqui sua Senha…"
        >
        <div class="index__login-bottom">
          <a href="#" class="index__login-recover-pw">Não lembro minha senha.</a>
          <button @click.prevent="handleSubmit" class="index__login-submit btn has-icon">
            Entrar
            <button class="btn-icon">
              <i class="fas fa-arrow-right"></i>
            </button>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LogoSmall from "../assets/Logo-small";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {
    this.$nextTick(function() {
      document.getElementById("index__login-username").focus();
    });
  },
  methods: {
    handleSubmit() {
      this.$router.push("/company/schedules");
    }
  }
};
</script>

<style>
</style>
