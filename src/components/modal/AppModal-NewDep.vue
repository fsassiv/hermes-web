<template>
  <div class="app-modal__dep">
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
import dTitle from "./newDepTabs/title";
import dIcon from "./newDepTabs/icon";
import dMembers from "./newDepTabs/members";
import dCheckup from "./newDepTabs/checkup";

export default {
  data() {
    return {
      tabList: [
        {
          _id: 1,
          label: "Nome",
          comp: "",
          active: true,
          tabComponent: "dTitle"
        },
        {
          _id: 2,
          label: "Icone",
          comp: "",
          active: false,
          tabComponent: "dIcon"
        },
        {
          _id: 3,
          label: "Pessoas",
          comp: "",
          active: false,
          tabComponent: "dMembers"
        },
        {
          _id: 4,
          label: "Confirmação",
          comp: "",
          active: false,
          tabComponent: "dCheckup"
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
    dTitle,
    dIcon,
    dMembers,
    dCheckup
  }
};
</script>