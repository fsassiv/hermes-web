<template>
  <div class="totem">
    <div class="column">
      <div class="is-3">
        <div class="totem__machine">
          <TotemLogo />
          <p
            class="totem__resume"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consectetur, ipsam libero modi debitis laboriosam corporis ad atque neque nemo illum quo itaque deserunt.</p>
          <input type="text" class="totem__machine-code" placeholder="Gere um novo código" />
          <button class="btn totem__machine-btn">Gerar QR Code</button>
        </div>
      </div>
      <div class="is-7">
        <div class="app__table sgnup__table">
          <div class="app__trow first">
            <div
              v-for="header in tableData.header"
              :key="header"
              class="app__thead small"
              :class="header=='Avatar'?'avatar':''"
            >{{header=='Avatar'?'':header}}</div>
          </div>
          <div class="app__table-content">
            <div v-for="data in tableData.data" :key="data._id" class="app__trow">
              <div class="app__tdata avatar">
                <img
                  src="https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png"
                  alt
                  class="avatar-img"
                />
              </div>
              <div class="app__tdata small">{{data.nome}}</div>
              <div class="app__tdata small bold">{{data.qnt}}</div>
              <div
                class="app__tdata small bold status-data"
                :class="data.status=='Online'?'online':'offline'"
              >
                <i class="fas fa-circle"></i>
                &nbsp;
                <span>{{data.status}}</span>
              </div>
              <div class="app__tdata small action">
                <button class="sgnup__btn">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TotemLogo from "../../assets/TotemLogo";

export default {
  data() {
    return {
      tableData: {
        header: ["Avatar", "Nome", "Qnt. Setor", "Status", ""],
        data: [
          {
            _id: "1",
            nome: "Flavio Andrade",
            qnt: "20",
            status: "Online",
            action: "lorem"
          },
          {
            _id: "2",
            nome: "nome",
            qnt: "13",
            status: "Offline",
            action: "lorem"
          }
        ]
      }
    };
  },
  components: {
    TotemLogo
  }
};
</script>

<style scoped>
.column {
  display: flex;
  justify-content: space-between;
  height: 60vh;
  max-height: 60vh;
  width: 100%;
  margin-bottom: 5vh;
}

.is-3 {
  width: 28%;
}
.is-7 {
  width: 68%;
}

.btn {
  height: 36px;
  border-radius: 4px;
  font-size: 11px;
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 0;
}
</style>
