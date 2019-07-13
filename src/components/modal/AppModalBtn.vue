<template>
  <button class="app__modal-btn btn has-icon" @click="$emit('clickModalBtn')">
    {{btnLabel}}
    <button class="btn-icon">
      <i class="fas fa-arrow-right"></i>
    </button>
  </button>
</template>
<script>
export default {
  props: {
    finalStep: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnLabel() {
      if (this.finalStep) {
        return "Confirmar";
      } else {
        return "Próximo";
      }
    }
  }
};
</script>
