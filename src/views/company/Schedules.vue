<template>
  <div class="schdls">
    <div class="app__content-item half">
      <!-- <input
        class="schdls__date-input"
        v-model="date.day"
        type="text"
        v-mask="'##/##/####'"
        placeholder="Selecione uma data"
      >-->
      <DatePick
        class="schdls__date-picker"
        v-model="date"
        :format="'DD/MM/YYYY'"
        :startWeekOnSunday="true"
        :hasInputElement="false"
        :pickTime="false"
        :isDateDisabled="isPastDate"
        :selectableYearRange="1"
        :nextMonthCaption="'Próximo mês'"
        :prevMonthCaption="''"
        :setTimeCaption="'Defina a hora'"
        :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']"
        :months="[
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]"
      />
    </div>
    <div class="app__content-item half">
      <div class="schdls__header">
        <h5 class="schdls__title">
          Programações do dia
          <a href class="schdls__date">{{theDay}}</a>
        </h5>
        <a href="#" class="schdls__btn-filter">
          <i class="fas fa-sliders-h"></i>
        </a>
      </div>
      <ul class="schdls__list">
        <ScheduledItem/>
      </ul>
    </div>
  </div>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import ScheduledItem from "../../components/ScheduledItem";

export default {
  data() {
    return {
      date: ""
    };
  },
  computed: {
    theDay() {
      return this.date.substr(0, 2);
    }
  },
  methods: {
    isPastDate(date) {
      const currentDate = new Date();
      return date < currentDate;
    }
  },
  components: {
    DatePick,
    ScheduledItem
  }
};
</script>

<style>
</style>
