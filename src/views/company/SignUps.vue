<template>
  <div class="sgnup">
    <div class="sgnup__search-wrapper">
      <input
        @focus="active=true"
        @blur="active=false"
        class="sgnup__search-input"
        :class="{active}"
        type="search"
        name
        id
      />
      <i class="sgnup__search-icon fas fa-search"></i>
    </div>
    <div class="app__table sgnup__table">
      <div class="app__trow first">
        <div
          v-for="header in tableData.header"
          :key="header"
          class="app__thead"
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
          <div class="app__tdata">{{data.nome}}</div>
          <div class="app__tdata">{{data.login}}</div>
          <div class="app__tdata">{{data.email}}</div>
          <div class="app__tdata">{{data.setor}}</div>
          <div class="app__tdata action">
            <button class="sgnup__btn">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      tableData: {
        header: ["Avatar", "Nome", "Login", "E-mail", "Setor", ""],
        data: [
          {
            _id: "1",
            avatar: "avatar",
            nome: "Flavio Andrade",
            login: "fandrade",
            email: "flavio.ssiv@gmail.com",
            setor: "front-end",
            action: "lorem"
          },
          {
            _id: "2",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          },
          {
            _id: "3",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          },
          {
            _id: "4",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          },
          {
            _id: "5",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          },
          {
            _id: "6",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          },
          {
            _id: "7",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          },
          {
            _id: "8",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          },
          {
            _id: "9",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          },
          {
            _id: "10",
            avatar: "avatar",
            nome: "nome",
            login: "login",
            email: "email",
            setor: "setor",
            action: "lorem"
          }
        ]
      }
    };
  }
};
</script>
