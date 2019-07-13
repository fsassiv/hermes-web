<template>
  <div class="app__modal-new-room">
    <nav class="app__modal-menu">
      <ul class="app__modal-menu-list">
        <li
          v-for="tab in tabList"
          :key="tab._id"
          :id="tab._id"
          class="app__modal-menu-item menu-tab"
          @click="tabClick"
          :class="{active:tab.active}"
        >{{tab._id}}. {{tab.label}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [
        { _id: 1, label: "Titulo", comp: "", active: true },
        { _id: 2, label: "Data e hora", comp: "", active: false },
        { _id: 3, label: "Participantes", comp: "", active: false },
        { _id: 4, label: "Confirmação", comp: "", active: false }
      ]
    };
  },
  created() {
    this.$emit("componentCreated", { progress: { display: true } });
  },
  methods: {
    tabClick(e) {
      var tabList = this.tabList;
      tabList.forEach(item => {
        item.active = false;
        if (e.target.id == item._id) {
          item.active = true;
        }
      });
    }
  }
};
</script>
