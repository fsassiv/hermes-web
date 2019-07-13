<template>
  <div class="app__modal-new-appointment">
    <AppModalNavbar @tabClick="tabClick" :tabList="tabList" />
    <div class="app__modal-tab-wrapper">
      <!-- {{currentTab[0]}} -->
      <keep-alive>
        <component :is="currentTab[0].tabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import AppModalNavbar from "./AppModalNavbar";
import naTitle from "./newAppointmentTabs/title";
import naTime from "./newAppointmentTabs/time";
import naMembers from "./newAppointmentTabs/members";
import naCheckUp from "./newAppointmentTabs/checkup";

export default {
  props: {
    options: {
      stepActions: [
        {
          title: {
            type: String,
            required: true
          }
        }
      ]
    }
  },
  data() {
    return {
      tabList: [
        {
          _id: 1,
          label: "Titulo",
          comp: "",
          active: true,
          tabComponent: "naTitle"
        },
        {
          _id: 2,
          label: "Data e hora",
          comp: "",
          active: false,
          tabComponent: "naTime"
        },
        {
          _id: 3,
          label: "Participantes",
          comp: "",
          active: false,
          tabComponent: "naMembers"
        },
        {
          _id: 4,
          label: "Confirmação",
          comp: "",
          active: false,
          tabComponent: "naCheckUp"
        }
      ]
    };
  },
  created() {
    this.$emit("componentCreated", { progress: { display: true } });
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
    naTitle,
    naTime,
    naMembers,
    naCheckUp,
    AppModalNavbar
  }
};
</script>
