<template>
  <li class="member">
    <span v-if="counter" class="counter">{{'+'+counter}}</span>
  </li>
</template>
<script>
export default {
  props: {
    counter: {
      type: Number,
      required: false
    }
  }
};
</script>

