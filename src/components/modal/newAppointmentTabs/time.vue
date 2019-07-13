<template>
  <div class="app__box">
    <h5 class="app__label">Selecione data</h5>
    <div class="column">
      <div class="left">
        <DatePick
          v-model="date"
          :format="'DD/MM/YYYY HH:mm'"
          :startWeekOnSunday="true"
          :hasInputElement="false"
          :pickTime="true"
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
      <div class="right">
        <label for class="app__label">Informe o horario</label>
        <input type="text" class="app__input" v-model="date" />
        <label for class="app__label">Informe tipo</label>
        <v-select v-model="selected" class="app__select w-100" :options="types"></v-select>
      </div>
    </div>
  </div>
</template>
<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

export default {
  data() {
    return {
      date: "",
      time: {
        start: "",
        end: ""
      },
      selected: "",
      types: [
        {
          _id: "1",
          label: "Reuniao 1"
        },
        {
          _id: "2",
          label: "Reuniao 2"
        },
        {
          _id: "3",
          label: "Reuniao 3"
        }
      ]
    };
  },
  components: {
    DatePick
  },
  methods: {
    isPastDate(date) {
      const currentDate = new Date();
      return date < currentDate;
    }
  }
};
</script>
<style scoped>
.app__input {
  font-size: 14px;
}
.column {
  display: flex;
}
input {
  display: inline-block;
  width: 100%;
}
select {
  margin-top: 10px;
  display: block;
  width: 100%;
  border: none;
}
.left {
  width: 55%;
  margin-right: 5%;
}
.right {
  width: 40%;
}
</style>


