<template>
  <li class="schdls__item">
    <span class="schdls__the-date">Qua 15:56</span>
    <div class="schdls__time-panel">
      <span class="clock-icon far fa-clock"></span>
      <div class="clock-values">
        <div class="clock-start">12:00H</div>
        <span class="clock-idctr"></span>
        <div class="clock-end">12:00H</div>
      </div>
    </div>
    <div class="schdls__info-panel">
      <img
        src="https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png"
        alt
        class="schdls__info-avatar"
      >
      <p class="schdls__info-text">
        <span class="bold">Lorem ipsum</span> dolor sit, amet consectetur adipisicing elit. Dignissimos, nostrum!
      </p>
    </div>
    <ul class="app__members">
      <MemberItem class="first"/>
      <MemberItem class="second"/>
      <MemberItem class="third"/>
    </ul>
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

