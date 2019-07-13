<template>
  <button @click="$emit('handleClick',options.action.event)" class="btn btn--main has-icon">
    {{options.action.text}}
    <i class="btn-icon btn-action">
      <i class="fas" :class="'fa-'+options.action.icon"></i>
    </i>
  </button>
</template>
<script>
export default {
  props: {
    options: ""
  }
};
</script>
<style scoped>
.btn-action {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
