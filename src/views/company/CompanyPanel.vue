<template>
  <div class="company">
    <div class="app__table company__table">
      <div class="app__trow first company__table">
        <div
          v-for="header in tableData.header"
          :key="header"
          class="app__thead"
          :class="header=='Nome'?'':'text-center'"
        >{{header=='Avatar'?'':header}}</div>
      </div>
      <div class="app__table-content">
        <div v-for="data in tableData.data" :key="data._id" class="app__trow">
          <div class="app__tdata bold">{{data.nome}}</div>
          <div class="app__tdata bold text-center">{{data.q_dep}}</div>
          <div class="app__tdata bold text-center">{{data.q_totem}}</div>
          <div class="app__tdata bold text-center">{{data.q_members}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: {
        header: ["Nome", "Qnt. setor", "Qnt. Totem", "Qnt. Colaborador(es)"],
        data: [
          {
            _id: "1",
            nome: "Drummond",
            q_dep: "6",
            q_totem: "1",
            q_members: "4"
          },
          {
            _id: "2",
            nome: "Tel",
            q_dep: "6",
            q_totem: "1",
            q_members: "4"
          },
          {
            _id: "3",
            nome: "WTF",
            q_dep: "2",
            q_totem: "2",
            q_members: "6"
          }
        ]
      }
    };
  }
};
</script>

