<template>
  <div class="app__modal-new-company">
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
import ncCompany from "./newCompanyTabs/company";
import ncCustom from "./newCompanyTabs/custom";
import ncCheckup from "./newCompanyTabs/checkup";

export default {
  data() {
    return {
      tabList: [
        {
          _id: 1,
          label: "Instituição",
          comp: "",
          active: true,
          tabComponent: "ncCompany"
        },
        {
          _id: 2,
          label: "Personalização",
          comp: "",
          active: false,
          tabComponent: "ncCustom"
        },
        {
          _id: 3,
          label: "Confirmação",
          comp: "",
          active: false,
          tabComponent: "ncCheckup"
        }
      ]
    };
  },
  computed: {
    currentTab() {
      return this.tabList.filter(item => item.active);
    }
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
    ncCompany,
    ncCustom,
    ncCheckup
  }
};
</script>
