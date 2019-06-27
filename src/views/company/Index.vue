<template>
  <div class="c__index">
    <div class="c__top">
      <div class="c__logo">
        <AppLogoSmallWhite class="c__logo-svg"/>
        <h4 class="c__logo-title">Hermes</h4>
      </div>
      <AppSubMenu/>
    </div>
    <main class="app__main">
      <h3 class="app__route-title app-title with-bar">{{$route.name}}</h3>

      <transition name="show" mode="out-in">
        <router-view class="app__content"></router-view>
      </transition>
      <ActionBtn :options="routeOptions" @handleClick="handleClick"/>
    </main>
    <AppNavigation/>
  </div>
</template>
<script>
import AppNavigation from "../../components/AppNavigation";
import AppSubMenu from "../../components/SubMenu";

export default {
  data() {
    return {
      items: [],
      active: false,
      routeOptions: {
        text: "Ação padrao",
        icon: "plus",
        eventName: "default"
      }
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
    }
  },
  components: {
    AppNavigation,
    AppSubMenu
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


