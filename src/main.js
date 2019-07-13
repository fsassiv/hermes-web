import "@fortawesome/fontawesome-free/js/all.min";
import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import AppLogoSmall from "./assets/Logo-small.vue";
import AppLogoSmallWhite from "./assets/Logo-small-white.vue";
import ActionBtn from "./components/ActionBtn.vue";
import AppModal from "./components/modal/AppModal.vue";
import AppModalConfirmation from "./components/modal/AppModalConfirmation.vue";
import AppModalBtn from "./components/modal/AppModalBtn.vue";
import VueTheMask from "vue-the-mask";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("AppLogoSmall", AppLogoSmall);
Vue.component("AppLogoSmallWhite", AppLogoSmallWhite);
Vue.component("ActionBtn", ActionBtn);
Vue.component("AppModal", AppModal);
Vue.component("AppModalBtn", AppModalBtn);
Vue.component("AppModalConfirmation", AppModalConfirmation);
Vue.component("v-select", vSelect);

Vue.use(VueTheMask);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

//Service worker set up
const prod = process.env.NODE_ENV === "production";
//Production SW
const prodSW = prod;
//Development SW
const devSW = !prod;
//Test support for SW
if ("serviceWorker" in navigator) {
  //Production SW
  if (prodSW) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service Worker Registered!");
      })
      .catch(err => {
        console.error;
      });
    //Development SW
  } else if (devSW) {
    navigator.serviceWorker
      .register("/service-worker-dev.js")
      .then(() => {
        console.log("Dev Service Worker Registered!");
      })
      .catch(err => {
        console.log("Dev SW error:");
        console.error(err);
      });
  }
} else {
  console.log("Service worker not supported!");
}
