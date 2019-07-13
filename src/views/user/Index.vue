<template>
  <div class="u_index">
    <header class="u__header">
      <div class="u__header-logo">
        <AppLogoSmall />
        <h3 class="app-title u__header-title with-bar">Hermes</h3>
      </div>
      <div class="u__menu" :class="{active}">
        <img src="../../assets/Capa.png" alt class="u__menu-img" />
        <div class="u__menu-opt">
          <span class="u__menu-name">Tárcia</span>|
          <button class="u__menu-settings" @click="handleClick">
            <i class="fas fa-cog"></i>
          </button>
        </div>
        <div class="u__menu-ctrl" :class="{active}" @mouseleave="active=false">
          <a href="#" class="u__menu-ctrl-btn">Perfil</a>
          <a href="#" class="u__menu-ctrl-btn">Gerenciador</a>
          <a href="#" @click.prevent="handleLogOut" class="u__menu-ctrl-logout">Sair</a>
        </div>
      </div>
    </header>
    <div class="column">
      <!-- APPOITMENT TAB -->
      <AppointmentTab class="half" />
      <!-- NOTIFICATIONS TAB -->
      <NoficationsTab class="half" />
    </div>
    <footer
      class="u__footer"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, unde. Commodi omnis praesentium debitis minima. Voluptatem perferendis sunt nam qui quasi fugit eos tenetur, architecto, velit officia corporis perspiciatis. Reiciendis?</footer>
  </div>
</template>
<script>
// import NoficationsItem from "../../components/NotificationsItem";
import NoficationsTab from "./NotificationsTab";
import AppointmentTab from "./SchedulesTab";

export default {
  data() {
    return {
      active: false
    };
  },
  methods: {
    handleClick() {
      this.active = !this.active;
    },
    handleLogOut() {
      this.$router.push("/");
    }
  },
  components: {
    NoficationsTab,
    AppointmentTab
  }
};
</script>

<style scoped>
.half {
  width: 50%;
}
</style>
