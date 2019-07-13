<template>
  <nav class="app__modal-menu">
    <ul class="app__modal-menu-list">
      <li
        v-for="tab in tabList"
        :key="tab._id"
        :id="tab._id"
        class="app__modal-menu-item menu-tab"
        @click="$emit('tabClick',$event)"
        :class="{active:tab.active}"
      >{{tab._id}}. {{tab.label}}</li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    tabList: ""
  }
};
</script>
