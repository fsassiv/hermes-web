<template>
  <div class="c__index">
    <div class="c__top">
      <div class="c__logo">
        <AppLogoSmallWhite class="c__logo-svg" />
        <h4 class="c__logo-title">Hermes</h4>
      </div>
      <AppSubMenu @notificationsClick="handleNotificationsClick" />
    </div>
    <main class="app__main">
      <h3 class="app__route-title app-title with-bar">{{$route.name}}</h3>
      <transition name="show" mode="out-in">
        <router-view class="app__content"></router-view>
      </transition>
      <ActionBtn :options="$route.meta" @handleClick="handleClick" />
    </main>
    <AppNavigation />
    <NotificationView :options="notifications" />
    <!-- LOAD MODAL DYNAMICLY -->
    <component :is="modalComponent" :status="modalStatus" @closeModal="handleClick"></component>
    <!-- CONFIRMATION BUTTON -->
    <AppModalConfirmation :settings="modalConfSettings" v-show="modalConfSettings.visible" />
    <footer class="c__footer">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</footer>
  </div>
</template>
<script>
import AppNavigation from "../../components/AppNavigation";
import AppSubMenu from "../../components/SubMenu";
import NotificationView from "../../components/NotificationView";

export default {
  data() {
    return {
      modalComponent: "",
      items: [],
      active: false,
      routeOptions: {
        text: "Ação padrao",
        icon: "plus",
        eventName: "default"
      },
      notifications: {
        barStatus: false
      },
      modalStatus: false,
      modalConfSettings: {
        visible: false,
        svgIcon: "AppLogoSmall",
        title: "Agendamento concluído",
        msg: "lorem ipsun blah blah blah"
      }
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
      this.modalComponent == "AppModal"
        ? (this.modalComponent = "")
        : (this.modalComponent = "AppModal");
    },
    handleNotificationsClick() {
      this.notifications.barStatus = true;
    }
  },
  components: {
    AppNavigation,
    AppSubMenu,
    NotificationView
  }
};
</script>
<style scoped>
.show-enter-active,
.show-leave-active {
  transition: opacity 0.5s;
}
.show-enter, .show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


