<template>
  <div class="notifications-tab">
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
</template>

<script>
import NoficationsItem from "../../components/NotificationsItem";

export default {
  components: {
    NoficationsItem
  }
};
</script>

<style>
</style>
