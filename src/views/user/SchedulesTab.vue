<template>
  <div class="appointments-tab">
    <div class="tab__header">
      <h3 class="app-title tab__header-title with-bar">Agendamentos</h3>
      <div
        class="tab__search-wrapper"
        @mouseleave="compressSearch"
        @click="expandSearch"
        :class="{active:searchBarStatus}"
      >
        <input type="search" v-model="searchInput" name id class="tab__search-input" />
        <i class="tab__search-icon fas fa-search"></i>
      </div>
    </div>
    <div class="u__schedules-wrapper">
      <div class="u__schedules-display">
        <a href="#" class="u__schedules-d-btn mode-row" @click="filterDisplay">
          <i class="fas fa-bars"></i>
        </a>
        <a href="#" class="u__schedules-d-btn mode-column g-90" @click="filterDisplay">
          <i class="fas fa-bars"></i>
        </a>
        <a href="#" class="u__schedules-d-btn mode-blocks" @click="filterDisplay">
          <i class="fas fa-th-large"></i>
        </a>
      </div>
      <ul class="u__schedules-list default">
        <li class="u__schedules-item">
          <div class="time-box">
            <div class="time-box-content">
              <div class="time-box-day">22</div>
              <div class="time-box-details">
                <span class="time-box-month">Junho</span>
                <br />
                <span class="time-box-duration">
                  <i class="far fa-clock"></i>
                  10:00H - 12:00H
                </span>
              </div>
            </div>
          </div>
          <div class="info-box">
            <h5 class="info-box-title">Gaia 0.4</h5>
            <p class="info-box-text">Lorem, ipsum dolor.</p>
            <ul class="app__members relative">
              <MemberItem class="plus" :counter="2" />
              <MemberItem class="first" />
              <MemberItem class="second" />
              <MemberItem class="third" />
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <ActionBtn :options="$route.meta" @handleClick="handleClick" />
    <!-- LOAD MODAL DYNAMICLY -->
    <component :is="modalComponent" :status="modalStatus" @closeModal="handleClick"></component>
    <!-- CONFIRMATION BUTTON -->
    <AppModalConfirmation :settings="modalConfSettings" v-show="modalConfSettings.visible" />
  </div>
</template>

<script>
import MemberItem from "../../components/MemberItem";

export default {
  data() {
    return {
      modalComponent: "",
      modalStatus: false,
      searchBarStatus: false,
      searchInput: "",
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
      this.modalComponent == "AppModal"
        ? (this.modalComponent = "")
        : (this.modalComponent = "AppModal");
    },
    expandSearch() {
      this.searchBarStatus = true;
      document.querySelector(".tab__search-input").focus();
    },
    compressSearch() {
      this.searchBarStatus = false;
      this.searchInput = "";
      document.querySelector(".tab__search-input").blur();
    },
    filterDisplay(elem) {
      // elem.target.classList.add("active");

      if (elem.target.classList.contains("active")) return false;
      var filterBtns = document.querySelectorAll(".u__schedules-d-btn");
      //remove active for all btns
      filterBtns.forEach(filter => {
        filter.classList.remove("active");
      });

      elem.target.classList.add("active");
    }
  },
  components: {
    MemberItem
  }
};
</script>

<style scoped>
.btn.btn--main {
  bottom: 50px;
}

.member {
  right: unset;
}
.member.plus {
  left: 45px;
  z-index: 4;
}
.member.first {
  left: 0;
  z-index: 1;
}

.member.second {
  left: 15px;
  z-index: 2;
}
.member.third {
  left: 30px;
  z-index: 3;
}
.notifications__list {
  min-height: 40vh;
}
</style>
