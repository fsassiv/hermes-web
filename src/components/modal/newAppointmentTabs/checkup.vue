<template>
  <div class="app__box">
    <p class="app__label">Confirme as informações do agendamento</p>
    <div class="app__box__resume-top">
      <h4 class="app__box__resume-title">Reunião da liderança</h4>
      <p
        class="app__box__resume-description"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur a sit laudantium, facere veritatis sunt fuga sed ducimus mollitia enim iste fugit incidunt, at odit neque. Esse perspiciatis consequatur iste!</p>
    </div>
    <div class="app__box__resume-details">
      <div class="column is-4">
        <div class="app__box__resume-label">
          <i class="far fa-calendar-alt"></i>
          <span class="value">08,JUNHO 2019</span>
        </div>
        <div class="app__box__resume-label">
          <i class="far fa-clock"></i>
          <span class="value">10:00h - 12:00h</span>
        </div>
        <div class="app__box__resume-label">
          <i class="fas fa-thumbtack"></i>
          <span class="value">Reunião</span>
        </div>
      </div>
      <div class="column is-6">
        <div class="app__box__resume-members">
          <p class="title">Participantes</p>
          <ul class="app__box__resume-list">
            <li class="app__box__resume-item">
              <img src alt class="avatar" />
              <div class="info">
                <p class="name">nome</p>
                <p class="jobtitle">Analista</p>
              </div>
            </li>
            <li class="app__box__resume-item">
              <img src alt class="avatar" />
              <div class="info">
                <p class="name">nome</p>
                <p class="jobtitle">Analista</p>
              </div>
            </li>
            <li class="app__box__resume-item">
              <img src alt class="avatar" />
              <div class="info">
                <p class="name">nome</p>
                <p class="jobtitle">Analista</p>
              </div>
            </li>
            <li class="app__box__resume-item">
              <img src alt class="avatar" />
              <div class="info">
                <p class="name">nome</p>
                <p class="jobtitle">Analista</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  height: 25vh;
  max-height: 25vh;
}
.column.is-4 {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.column.is-6 {
  width: 60%;
}
</style>
