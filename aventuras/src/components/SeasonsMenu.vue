<template>
  <div class="seasons-wrapper">
    <h2 class="seasons-text">Pick your adventure by season</h2>
    <div class="seasons-container">
      <div :class="season.class" v-for="(season, index) in seasons" :key="index">
        <RouterLink :to="season.linkPath" class="seasons-link"
          ><p class="border-white">{{ season.name }}</p></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seasons: [
        {
          name: 'Spring',
          class: 'season1',
          linkPath: '/spring'
        },
        {
          name: 'Summer',
          class: 'season2',
          linkPath: '/summer'
        },
        {
          name: 'Autumn',
          class: 'season3',
          linkPath: '/autumn'
        },
        {
          name: 'Winter',
          class: 'season4',
          linkPath: '/winter'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

.season1 {
  grid-area: spring;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(../assets/media/seasonmenu-spring.jpg) no-repeat center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(../assets/media/seasonmenu-spring.jpg) no-repeat center;
}
.season2 {
  grid-area: summer;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(../assets/media/seasonmenu-summer.jpg) no-repeat center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(../assets/media/seasonmenu-summer.jpg) no-repeat center;
}
.season3 {
  grid-area: autumn;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(../assets/media/seasonmenu-autumn.jpg) no-repeat center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(../assets/media/seasonmenu-autumn.jpg) no-repeat center;
}
.season4 {
  grid-area: winter;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(../assets/media/seasonmenu-winter.jpg) no-repeat center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(../assets/media/seasonmenu-winter.jpg) no-repeat center;
}

.season1,
.season2,
.season3,
.season4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  background-size: cover;
}
.seasons-wrapper {
  margin: 5vh 0;
}

.seasons-text {
  text-transform: uppercase;
  text-align: center;
  color: #2a5024;
  margin: 2rem 0;
}
.seasons-container {
  width: 100%;
  display: grid;
  grid-template-areas:
    'spring'
    'summer'
    'autumn'
    'winter';
  background-color: #c7c7c7;
}

.seasons-container > div {
  text-align: center;
  font-size: 30px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
}

.seasons-link {
  margin: 0 10vw;
}

.border-white {
  padding: 25px 40px;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 4px solid #ffffff;
}

.border-white:hover {
  background: #fff;
  color: #000;
  mix-blend-mode: screen;
  backdrop-filter: blur(1.5px);
  transform: scale(1.02);
}

.border-white:active {
  transform: scale(0.96);
}

/* ---- media query ----*/
@media (min-width: 768px) {
  .seasons-container {
    grid-template-areas:
      'spring summer'
      'autumn winter';
  }
}

.seasons-container > div {
  font-size: 38px;
}
</style>
