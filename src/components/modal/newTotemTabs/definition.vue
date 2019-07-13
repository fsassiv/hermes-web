<template>
  <div class="app__box">
    <label for="box-title" class="box-label app__label">Nome</label>
    <input type="text" id="box-title" class="box-title app__input" value />
    <label for="box-description" class="box-label app__label">Informações adicionais</label>
    <textarea name id="box-description" class="app__textarea small"></textarea>
    <div class="column">
      <div class="half">
        <p class="app__label">Vincular</p>
        <draggable
          class="member-list to-invite"
          tag="ul"
          v-model="toLink"
          v-bind="dragOptions"
          @start="isDragging=true"
          @end="isDragging=false"
        >
          <li class="member" v-for="member in toLink" :key="member._id">
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
        <p class="app__label">Vinculadas</p>
        <draggable class="member-list invited" tag="ul" v-model="linked" v-bind="dragOptions">
          <li class="member" v-for="member in linked" :key="member._id">
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
      toLink: [
        { _id: "1", name: "Flavio", jobtitle: "Fron-end" },
        {
          _id: "2",
          name: "Flavio",
          jobtitle: "Full-stach javascript"
        }
      ],
      linked: [],
      options: {
        dropzoneSelector: "ul",
        draggableSelector: "li",
        excludeOlderBrowsers: true,
        multipleDropzonesItemsDraggingEnabled: false,
        showDropzoneAreas: true,
        onDrop: function(event) {},
        onDragstart: function(event) {},
        onDragend: function(event) {}
      },
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

