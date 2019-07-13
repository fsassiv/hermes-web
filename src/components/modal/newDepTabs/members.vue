<template>
  <div class="app__box">
    <p class="app__label">Adicione usuario(s) ao setor</p>
    <div class="column">
      <div class="half">
        <div class="app__search-wrapper">
          <i class="fas fa-search"></i>
          <input class="app__search-input" type="search" name id />
        </div>
        <draggable
          class="member-list to-invite"
          tag="ul"
          v-model="depList"
          v-bind="dragOptions"
          @start="isDragging=true"
          @end="isDragging=false"
        >
          <li class="member" v-for="dep in depList" :key="dep._id">
            <img class="member-avatar" src alt />
            <div class="member-info">
              <p class="member-name">{{dep.name}}</p>
              <p class="member-jobtitle">{{dep.jobtitle}}</p>
            </div>
            <button class="member-btn member-add">
              <i class="fas fa-plus"></i>
            </button>
          </li>
        </draggable>
      </div>
      <div class="half">
        <p class="app__label">Adicionados</p>
        <draggable class="member-list invited" tag="ul" v-model="depList2" v-bind="dragOptions">
          <li class="member" v-for="member in depList2" :key="member._id">
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
      depList: [{ _id: "1", avatar: "", name: "Flavio", jobtitle: "Fron-end" }],
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
      selected: "",
      selectList: ["Vue.js", "React", "Angular"],
      depList2: [],
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
  }
};
</script>
