<template>
  <div class="app__modal active" @click.self="$emit('closeModal')">
    <div class="app__modal-box" :class="{active:boxStatus,big:bigClass}">
      <div class="header">
        <h3 class="title app-title with-bar">{{$route.meta.modalTitle}}</h3>
      </div>
      <component
        @componentCreated="handleCriation"
        :is="modalComponent"
        @updateProgress="updateProgress"
        class="content"
      ></component>
      <div class="footer">
        <div class="app__modal-progress" v-show="progress.display">
          <div class="progress-counter">0{{progress.currentStep}}/0{{progress.totalSteps}}</div>
          <div class="progress-bar">
            <div class="progress-indicator" :style="{width:progressWidth+'%'}"></div>
          </div>
        </div>
      </div>
      <AppModalBtn :finalStep="progress.finalStep" @clickModalBtn="handleClick" />
    </div>
  </div>
</template>
<script>
import AppModalNewCompany from "./AppModal-NewCompany";
import AppModalNewAppointment from "./AppModal-NewAppointment";
import AppModalNewRoom from "./AppModal-NewRoom";
import AppModalNewSignUps from "./AppModal-NewSignUps";
import AppModalNewTotem from "./AppModal-NewTotem";
import AppModalNewDep from "./AppModal-NewDep";

export default {
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      boxStatus: false,
      modalComponent: this.$route.meta.modalComponent,
      progress: {
        display: true,
        totalSteps: "",
        currentStep: "",
        finalStep: false
      }
    };
  },
  computed: {
    bigClass() {
      if (
        this.modalComponent == "AppModalNewTotem" ||
        this.modalComponent == "AppModalNewCompany" ||
        this.modalComponent == "AppModalNewDep"
      ) {
        return true;
      }
    },
    modalStatus() {
      return this.status;
    },
    progressWidth: function() {
      const { currentStep, totalSteps } = this.progress;
      return (currentStep / totalSteps) * 100;
    }
  },
  mounted() {
    setTimeout(() => {
      this.boxStatus = true;
    }, 100);
  },
  methods: {
    handleClick() {
      let tabItems = document.querySelectorAll(".app__modal-menu-item");
      if (this.progress.currentStep < this.progress.totalSteps) {
        this.progress.currentStep++;
      }
      if (this.progress.currentStep >= this.progress.totalSteps) {
        this.progress.finalStep = true;
      }
    },
    handleCriation({ progress }) {
      this.progress.display = progress.display;
    },
    updateProgress(progress) {
      this.progress.totalSteps = progress.total;
      this.progress.currentStep = progress.current;
    }
  },
  components: {
    AppModalNewCompany,
    AppModalNewAppointment,
    AppModalNewRoom,
    AppModalNewSignUps,
    AppModalNewTotem,
    AppModalNewDep
  }
};
</script>
