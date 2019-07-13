<template>
  <div class="app__box">
    <p class="app__label">Confirme as informações do agendamento</p>
    <div class="app__box__resume-top">
      <div class="column">
        <div class="half">
          <h4 class="app__box__resume-title">Reunião da liderança</h4>
          <p
            class="app__box__resume-description"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="half">
          <p class="app__box__resume-title">Reunião da liderança</p>
          <p
            class="app__box__resume-description"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a sit laudantium</p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="half is-6">
        <div class="app__chkup-box">
          <p class="app__label">Setores</p>
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
      <div class="half is-4">
        <div class="app__chkup-box app__white-box">
          <div class="totem__qrcode-display"></div>
          <input type="text" class="totem__machine-code" />
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
        { _id: "2", avatar: "", name: "Flavio", jobtitle: "Fron-end" },
        { _id: "3", avatar: "", name: "Flavio", jobtitle: "Fron-end" },
        { _id: "4", avatar: "", name: "Flavio", jobtitle: "Fron-end" }
      ]
    };
  }
};
</script>

<style scoped>
.member {
  background-color: #edf0f8;
  justify-content: flex-start;
}

.member-list {
  border: none;
}
.member-avatar {
  margin-right: 20px;
}
</style>
