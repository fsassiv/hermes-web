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
          <a href="#" class="u__menu-ctrl-logout">Sair</a>
        </div>
      </div>
    </header>
    <div class="column">
      <div class="half appointments-tab">
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
                  <li class="member first"></li>
                  <li class="member second"></li>
                  <li class="member third"></li>
                  <li class="member plus"></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="half notifications-tab">
        <div class="u__banner" style="background-image:url(../../../../public/img/Banner.png)">
          <img src alt />
        </div>
        <div class="notifications-content">
          <h3 class="app-title with-bar">Notificações</h3>
          <p
            class="notifications-text"
          >NOTIFICAÇÕES de tudo vinculado ao seu perfil ficaram sempre aqui.</p>
          <ul class="notifications__list">
            <NoficationsItem />
            <NoficationsItem />
            <NoficationsItem />
          </ul>
        </div>
      </div>
    </div>
    <footer
      class="u__footer"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, unde. Commodi omnis praesentium debitis minima. Voluptatem perferendis sunt nam qui quasi fugit eos tenetur, architecto, velit officia corporis perspiciatis. Reiciendis?</footer>
  </div>
</template>
<script>
import NoficationsItem from "../../components/NotificationsItem";
export default {
  data() {
    return {
      active: false,
      searchBarStatus: false,
      searchInput: ""
    };
  },
  methods: {
    handleClick() {
      this.active = !this.active;
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
    NoficationsItem
  }
};
</script>

<style scoped>
.half {
  width: 50%;
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
