<template>
  <div class="app__box">
    <h5 class="app__label">Selecione membros</h5>
    <div class="column">
      <div class="half">
        <div class="top">
          <input class="app__search-input" type="search" name id />
        </div>
        <!-- <ul class="member-list to-invite">
          <li class="member">
            <img class="member-avatar" src alt />
            <div class="member-info">
              <p class="member-name">nome</p>
              <p class="member-jobtitle">Analista</p>
            </div>
            <button class="member-btn member-add">
              <i class="fas fa-plus"></i>
            </button>
          </li>
          <li class="member">
            <img class="member-avatar" src alt />
            <div class="member-info">
              <p class="member-name">nome</p>
              <p class="member-jobtitle">Analista</p>
            </div>
            <button class="member-btn member-add">
              <i class="fas fa-plus"></i>
            </button>
          </li>
        </ul>-->
        <draggable
          class="member-list to-invite"
          tag="ul"
          v-model="membersList"
          v-bind="dragOptions"
          @start="isDragging=true"
          @end="isDragging=false"
        >
          <li class="member" v-for="member in membersList" :key="member._id">
            <img class="member-avatar" src alt />
            <div class="member-info">
              <p class="member-name">{{member.name}}</p>
              <p class="member-jobtitle">{{member.jobtitle}}</p>
            </div>
            <button class="member-btn member-add">
              <i class="fas fa-plus"></i>
            </button>
          </li>
        </draggable>
      </div>
      <div class="half">
        <div class="top">
          <div class="add-wrapper" :class="{active:addMember}">
            <button class="add-external" @click="showAddMember">
              <button class="btn-icon">
                <i class="far fa-user"></i>
              </button>
              <p>Adicionar Externo</p>
              <button class="btn-icon">
                <i class="fas fa-chevron-up"></i>
              </button>
            </button>
            <!-- form -->
            <form class="add__form" @submit.prevent>
              <input type="text" id="new-member-name" placeholder="Nome completo" />
              <input type="text" id="new-member-label" placeholder="Rótulo" />
              <input type="email" name id="new-member-email" placeholder="E-mail" />
              <button
                @click.prevent="submitNewMember"
                class="add-member__btn"
                type="submit"
              >Adicionar</button>
            </form>
          </div>
        </div>
        <draggable class="member-list invited" tag="ul" v-model="list2" v-bind="dragOptions">
          <li class="member" v-for="member in list2" :key="member._id">
            <img class="member-avatar" src alt />
            <div class="member-info">
              <p class="member-name">{{member.name}}</p>
              <p class="member-jobtitle">{{member.jobtitle}}</p>
            </div>
            <button class="member-btn member-add">
              <i class="fas fa-plus"></i>
            </button>
          </li>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      membersList: [
        { _id: "1", avatar: "", name: "Flavio", jobtitle: "Fron-end" },
        {
          _id: "2",
          avatar: "",
          name: "Flavio",
          jobtitle: "Full-stach javascript"
        },
        {
          _id: "3",
          avatar: "",
          name: "Rafael",
          jobtitle: "Full-stach everythin"
        },
        {
          _id: "4",
          avatar: "",
          name: "Rafael 2",
          jobtitle: "Full-stach everythin"
        },
        {
          _id: "5",
          avatar: "",
          name: "Rafael 3",
          jobtitle: "Full-stach everythin"
        },
        {
          _id: "6",
          avatar: "",
          name: "Rafael 4",
          jobtitle: "Full-stach everythin"
        }
      ],
      addMember: false,
      options: {
        dropzoneSelector: "ul",
        draggableSelector: "li",
        excludeOlderBrowsers: true,
        multipleDropzonesItemsDraggingEnabled: true,
        showDropzoneAreas: true,
        onDrop: function(event) {},
        onDragstart: function(event) {},
        onDragend: function(event) {}
      },
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: true
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    }
  },
  components: {
    draggable
  },
  methods: {
    showAddMember() {
      this.addMember = !this.addMember;
    },
    submitNewMember() {
      console.log("New Member Submitted");
    }
  }
};
</script>

<style scoped>
.column {
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
}
.half {
  width: 49%;
}
.half .top {
  height: 44px;
  margin-bottom: 10px;
  position: relative;
}
ul.member-list {
  border-top: 1px solid #c9cedb;
  min-height: 50px;
  max-height: 85%;
  overflow-y: auto;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-right: 5px;
}
li.member {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  height: 45px;
  cursor: pointer;
  border-radius: 7px;
  background-color: white;
  margin-bottom: 5px;
}
img.member-avatar {
  width: 30px;
  height: 30px;
  object-fit: contain;
  border-radius: 15px;
  background-color: red;
}

.member-info {
  width: 65%;
}

.member-name {
  font-size: 12px;
  line-height: 18px;
  color: #3c3341;
}
.member-jobtitle {
  font-size: 7px;
  line-height: 10px;
  color: #888791;
}
.member-btn {
  width: 22px;
  height: 22px;
  border-radius: 11px;
  color: #dbdee9;
}
.member-btn svg {
  color: #443b49;
  transform: scale(0.75);
}
.add-wrapper {
  position: relative;
  width: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#e15550),
    to(#ef7f55)
  );
  height: 44px;
  border-radius: 22px;
  z-index: 10;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
}
.add-wrapper.active {
  border-radius: 12px;
  height: 222px;
}

.add-external {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  text-align: center;
  font-weight: normal;
  font-size: 12px;
  height: 44px;
  border-radius: 22px;
  color: white;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#e15550),
    to(#ef7f55)
  );
  background: linear-gradient(to right, #e15550, #ef7f55);
}
.add-external > * {
  position: static;
  margin-top: unset;
}

.add__form {
  padding: 0 26px;
  margin-top: 5px;
}
.add__form input {
  background-color: rgba(255, 255, 255, 0.25);
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  height: 35px;
  padding: 9px 20px;
  color: white;
}
input::placeholder {
  color: white;
}

.add-member__btn {
  color: #3c3341;
  font-size: 12px;
  box-shadow: 0 3px 6px rgba(229, 70, 21, 0.4);
  height: 30px;
  border-radius: 15px;
  padding: 5px 15px;
  background-color: white;
  float: right;
  cursor: pointer;
}
</style>

