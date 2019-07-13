<template>
  <li class="notifications__item">
    <span class="item-indicator"></span>
    <span class="item-date">Qua 15:56</span>
    <div class="content">
      <img
        src="https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png"
        alt
        class="content__avatar"
      >
      <p class="content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="bottom">
      <ul class="app__members relative">
        <MemberItem class="plus" :counter="2"/>
        <MemberItem class="first"/>
        <MemberItem class="second"/>
      </ul>
      <div class="notifications__request active">
        <p class="text">Aceitar agendamento?</p>
        <button class="notifications__btn-cancel">
          <i class="fas fa-times"></i>
        </button>
        <button class="notifications__btn-accept">
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
  </li>
</template>
<script>
import MemberItem from "./MemberItem";
export default {
  components: {
    MemberItem
  }
};
</script>
