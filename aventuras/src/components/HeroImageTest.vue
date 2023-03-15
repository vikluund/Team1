<script setup></script>

<template>
  <div class="hero-wrapper">
    <img src="../assets/media/HeroImageTest.png" alt="" />
    <div class="hero-text">
      <h1>AVENTURAS</h1>
    </div>
  </div>
  <div class="infoText">
    <h2>DISCOVER IT. LOVE IT. CHERISH IT.</h2>
    <!-- <p>Book your new adventures today!</p> -->
  </div>
</template>

<style scoped>
.hero-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-wrapper img {
  margin: 0 auto;
  height: auto;
  max-width: 100%;
  overflow-x: hidden;
}

.hero-text  {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  border: 0.3vw solid white;
  padding: 2vw;
  font-family: 'Montserrat', sans-serif;
}

.hero-text h1 {
  font-size: 5vw;
}
.infoText {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  font-family: 'Montserrat', sans-serif;
  padding-top: 10vh;
  padding-bottom: 5vh;
}
.infoText h2 {
  font-size: 4vw;
}
.infoText p {
  margin-top: 5vh;
  margin-bottom: 6vh;
  font-size: 3vw;
}
</style>
