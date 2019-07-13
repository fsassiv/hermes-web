<template>
  <div class="app__box">
    <p class="app__label">Confirme as informações do setor</p>
    <div class="app__box__resume-top">
      <div class="column">
        <div class="half is-3 flex-i-center">
          <AppLogoSmall />
        </div>
        <div class="half is-7">
          <p class="app__box__resume-title">Liderança</p>
          <p
            class="app__box__resume-description"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a sit laudantium</p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="half is-7">
        <div class="app__white-box">
          <p class="app__label">Participantes</p>
          <ul class="app__dep-list member-list">
            <li class="member" v-for="dep in depList" :key="dep._id">
              <img class="member-avatar" src alt />
              <div class="member-info">
                <p class="member-name">{{dep.name}}</p>
                <p class="member-jobtitle">{{dep.jobtitle}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      depList: [
        { _id: "1", avatar: "", name: "Flavio", jobtitle: "Fron-end" },
        { _id: "2", avatar: "", name: "Flavio", jobtitle: "Fron-end" }
      ]
    };
  }
};
</script>
<style scoped>
.member {
  justify-content: flex-start;
  background-color: #edf0f8;
}
.member-avatar {
  margin-right: 20px;
}

.app__white-box {
  justify-content: flex-start;
}
</style>
