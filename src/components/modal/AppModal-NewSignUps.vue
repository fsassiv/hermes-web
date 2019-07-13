<template>
  <div class="app-modal__signups">
    <form @submit.prevent class="sgnup__form">
      <label for="sgnup__name" class="sgnup__form-label">Nome*</label>
      <input id="sgnup__name" type="text" class="sgnup__form-input bold" />
      <label for="sgnup__email" class="sgnup__form-label">E-mail*</label>
      <input id="sgnup__email" type="email" class="sgnup__form-input" />
      <div class="column">
        <div class="half">
          <label for="sgnup__jobtitle" class="sgnup__form-label">Cargo/ Função</label>
          <input id="sgnup__jobtitle" type="text" class="sgnup__form-input" />
        </div>
        <div class="half">
          <label for="sgnup__dep" class="sgnup__form-label">Setor</label>
          <select name id="sgnup__dep" class="sgnup__form-input">
            <option value="01">Liderança</option>
            <option value="02">Gestão</option>
            <option value="03">Recursos Humanos</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  created() {
    this.$emit("componentCreated", { progress: { display: false } });
  }
};
</script>
<style scoped>
.column {
  justify-content: space-between;
  display: flex;
}
.half {
  width: 48%;
}
</style>
