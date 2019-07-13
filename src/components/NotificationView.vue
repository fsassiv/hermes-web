<template>
  <div class="notifications" :class="{active:options.barStatus}" @click.self="fadeNotifications">
    <div class="notifications__panel" :class="{active:options.barStatus}">
      <div class="content">
        <h3 class="app-title with-bar">Notificações</h3>
        <p
          class="notifications__text"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. At, soluta recusandae.</p>
        <ul class="notifications__list">
          <NoficationsItem/>
          <NoficationsItem/>
          <NoficationsItem/>
          <NoficationsItem/>
          <NoficationsItem/>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import NoficationsItem from "./NotificationsItem";

export default {
  props: {
    options: {
      barStatus: {
        type: Boolean,
        default: false
      }
    }
  },
  methods: {
    fadeNotifications() {
      this.options.barStatus = false;
    }
  },
  components: {
    NoficationsItem
  }
};
</script>
