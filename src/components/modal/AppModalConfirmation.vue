<template>
  <div class="app__modal">
    <div class="app__modal-box small">
      <component class="logo" :is="settings.svgIcon"></component>
      <h4 class="title app-title with-bar">{{settings.title}}</h4>
      <p class="msg">{{settings.msg}}</p>
      <div class="footer">
        <button class="btn" @click="settings.visible=false">Ok</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.app__modal-box {
  position: relative;
  background-color: #edf0f8;
  padding: 50px 50px 30px;
}
.app__modal-box .footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  height: 60px;
}

.logo {
  display: inline-block;
  width: 100%;
  height: 150px;
  margin-bottom: 30px;
}

.title {
  font-size: 17px;
  line-height: 40px;
  margin-bottom: 15px;
}

.title::before {
  width: 20%;
}

.msg {
  font-size: 14px;
  color: #888791;
}

.btn {
  position: absolute;
  right: 6px;
  bottom: 100%;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  display: inline-block;
  padding: 0;
}
</style>
