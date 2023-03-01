<script setup></script>

<template>
  <div class="hero-wrapper">
    <div class="hero-text">
      <h1>AVENTURAS</h1>
    </div>
  </div>
  <div class="infoText">
    <h2>DISCOVER IT. LOVE IT. CHERISH IT.</h2>
    <p>Book your new adventures today!</p>
  </div>
</template>

<style scoped>
.hero-wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/media/HeroImageTest.png');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  border-style: solid;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
}

.infoText {
  position: absolute;
  text-align: center;
  margin-top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: 'Montserrat', sans-serif;
}

p {
  margin-top: 50px;
}
</style>
