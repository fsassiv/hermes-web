<template>
  <div class="c__sub-menu" :class="{active:active}">
    <div class="top">
      <img
        src="https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png"
        alt
        class="c__sub-img"
      >
      <h5 class="c__sub-label">Welcome The Future</h5>
      <span>|</span>
      <a
        href
        class="c__sub-action c__sub-action-notification"
        :class="{'has-notification':notifications!=''}"
        @click.prevent="$emit('notificationsClick')"
      >
        <i class="fas fa-bell"></i>
      </a>
      <a href @click.prevent="active=!active" class="c__sub-action c__sub-action-settings">
        <i class="fas fa-cog"></i>
      </a>
    </div>
    <div class="content">
      <a href @click.prevent class="profile-link">Perfil</a>
    </div>
    <a href @click.prevent="handleLogOut" class="c__sub-action c__sub-action-logout">Sair</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      notifications: ""
    };
  },
  methods: {
    handleLogOut() {
      this.$router.push("/");
    }
  }
};
</script>

