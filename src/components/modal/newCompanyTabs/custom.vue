<template>
  <div class="app__box">
    <p class="app__label">Personalize a apresentação da sua instituição</p>
    <div class="column">
      <div class="half">
        <div class="company__column">
          <p class="app__label">Foto de Capa</p>
          <img src="../../../assets/Capa.png" alt class="company__photo" />
          <p class="app__label">1. Foto capa totem</p>
          <label for="wallpaper" class="app__input-file">Wallpaper</label>
          <input style="display:none" type="file" name id="wallpaper" accept="image/*" />
        </div>
      </div>
      <div class="half">
        <div class="company__column">
          <p class="app__label">Totem</p>
          <img src="../../../assets/Totem.png" alt class="company__photo" />
          <p class="app__label">1. Foto capa totem</p>
          <label for="photo1" class="app__input-file">Photo 1</label>
          <input type="file" name style="display:none" id="photo1" accept="image/*" />
          <p class="app__label">2. Foto capa totem</p>
          <label for="photo2" class="app__input-file">Photo 2</label>
          <input type="file" name style="display:none" id="photo2" accept="image/*" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

