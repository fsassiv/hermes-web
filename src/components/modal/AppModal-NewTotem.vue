<template>
  <div class="app-modal__totem">
    <AppModalNavbar @tabClick="tabClick" :tabList="tabList" />
    <div class="app__modal-tab-wrapper">
      <keep-alive>
        <component :is="currentTab[0].tabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import AppModalNavbar from "./AppModalNavbar";
import tDefinition from "./newTotemTabs/definition";
import tDepart from "./newTotemTabs/dep";
import tChekup from "./newTotemTabs/checkup";

export default {
  data() {
    return {
      tabList: [
        {
          _id: 1,
          label: "Nome e instituição",
          comp: "",
          active: true,
          tabComponent: "tDefinition"
        },
        {
          _id: 2,
          label: "Setor",
          comp: "",
          active: false,
          tabComponent: "tDepart"
        },
        {
          _id: 3,
          label: "Confirmação",
          comp: "",
          active: false,
          tabComponent: "tChekup"
        }
      ]
    };
  },
  computed: {
    currentTab() {
      return this.tabList.filter(item => item.active);
    }
  },
  created() {
    this.$emit("componentCreated", { progress: { display: true } });
  },
  mounted() {
    this.$emit("updateProgress", {
      total: this.tabList.length,
      current: 1
    });
  },
  methods: {
    tabClick(e) {
      var tabList = this.tabList;
      tabList.forEach(item => {
        item.active = false;
        if (e.target.id == item._id) {
          item.active = true;
          this.$emit("updateProgress", {
            total: this.tabList.length,
            current: item._id
          });
        }
      });
    }
  },
  components: {
    AppModalNavbar,
    tDefinition,
    tDepart,
    tChekup
  }
};
</script>