<template>
  <div class="schdls">
    <div class="app__content-item half">
      <input
        class="schdls__date-input"
        v-model="date"
        type="text"
        v-mask="'##/##/####'"
        placeholder="Selecione uma data"
      >
      <DatePick
        class="schdls__date-picker"
        v-model="date"
        :format="'DD/MM/YYYY'"
        :startWeekOnSunday="true"
        :hasInputElement="false"
        :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']"
        :months="[
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]"
      />
    </div>
    <div
      class="app__content-item half"
    >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatem rerum obcaecati corrupti exercitationem, doloribus porro velit! Ratione doloribus repellat quo iusto at! Fuga accusantium tempore aliquam laboriosam? Ducimus, amet?</div>
  </div>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

export default {
  data() {
    return {
      date: ""
    };
  },
  components: {
    DatePick
  }
};
</script>

<style>
</style>
