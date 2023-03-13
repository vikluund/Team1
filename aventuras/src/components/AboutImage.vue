<script setup></script>

<template>
  <About />
  <div class="about-wrapper">
    <img src="../assets/media/HeroAbout.png" alt="" />
    <div class="about-text">
      <h1>ABOUT US</h1>
    </div>
  </div>
  <div class="visionText">
    <h2>OUR VISION</h2>
    <p>
      To create a world, where everyone is encouraged to travel. We believe that travelling broadens
      the mind and changes the way you think. The people you meet and the experiences you have give
      you an improved ability to empathise with different situations and people.
    </p>
  </div>
</template>

<style scoped>
.about-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.about-wrapper img {
  margin: 0 auto;
  height: auto;
  max-width: 100%;
  overflow-x: hidden;
}

.about-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  border: 0.3vw solid white;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
}

.about-text {
  font-size: 5vw;
}
.visionText {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  font-family: 'Montserrat', sans-serif;
  padding-top: 10vh;
  padding-bottom: 5vh;
}
</style>
