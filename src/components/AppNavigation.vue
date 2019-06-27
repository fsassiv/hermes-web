<template>
  <div class="app__navigation">
    <h4 class="app__navigation-title">Menu</h4>
    <ul class="app__navigation-list">
      <li v-for="item in items" :key="item.id" class="app__navigation-item">
        <router-link :to="'/company/'+item.path" tag="a" class="app__navigation-link">
          <span class="icon" :class="item.icon"></span>
          <p class="text">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {
    this.$router.options.routes[1].children.forEach((route, id) => {
      this.items.push({
        id,
        icon: route.meta.icon,
        name: route.name,
        path: route.path
      });
    });
  },
  data() {
    return {
      items: []
    };
  }
};
</script>
