<template>
  <div class="dep">
    <div class="column">
      <div class="half is-4">
        <ul class="dep__list">
          <li class="dep__item" @click="handleClick" :class="{active}">
            <img src="../../assets/logo-one-color.png" alt class="dep__icon" />
            <p class="dep__item-title">Liderança</p>
          </li>
        </ul>
      </div>
      <div class="half is-6">
        <div class="dep__panel">
          <div class="dep__description">
            <button class="dep__description-edit">
              <i class="far fa-edit"></i>
            </button>
            <h5 class="dep__description-title">Lidernça</h5>
            <p
              class="dep__description-text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, reprehenderit. Necessitatibus eos explicabo vero minus est quo repellat, distinctio nostrum labore eveniet qui incidunt deserunt error officiis dolorem doloribus amet?</p>
          </div>
          <div class="dep__wrapper">
            <div class="dep__wrapper-top">
              <p class="dep__label">Vinculados ao sertor</p>
              <button class="dep__filter-btn">
                <i class="fas fa-sliders-h"></i>
              </button>
            </div>
            <div class="dep__add-btn">
              <span class="dep__add-btn-icon">
                <i class="fas fa-plus"></i>
              </span>
              Vincular novo colaborador
            </div>
            <ul class="dep__member-list">
              <li class="dep__member-item member">
                <img src alt class="member-avatar" />
                <div class="member-info">
                  <p class="dep__member-name member-name">Flavio</p>
                </div>
                <button class="member-btn">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </li>
              <li class="dep__member-item member">
                <img src alt class="member-avatar" />
                <div class="member-info">
                  <p class="dep__member-name member-name">Flavio</p>
                </div>
                <button class="member-btn">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      let btn = document.querySelector(".btn--main");
      btn.classList.add("left");
    });
  },
  beforeDestroy() {
    let btn = document.querySelector(".btn--main");
    btn.classList.remove("left");
  },
  methods: {
    handleClick() {
      this.active = !this.active;
    }
  }
};
</script>

<style>
</style>
