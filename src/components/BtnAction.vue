<template>
  <button @click="$emit('handleClick',options.eventName)" class="btn btn--main has-icon">
    {{options.text}}
    <i class="btn-icon btn-action">
      <i class="fas" :class="'fa-'+options.icon"></i>
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
