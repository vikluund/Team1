<script setup></script>

<template>
  <div class="productHero">
    <div class="productHeroWrapper">
    <img src="../assets/media/Winter.jpg" alt="Hero Image Product">
    <div class="productHeroText">
    <h1>Product Page</h1>
    </div>
  </div>
  </div>
</template>

<style scoped>
.productHero{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.productHeroWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.productHero img {
  margin: 0 auto;
  height: auto;
  max-width: 100%;
  overflow-x: hidden;
}
.productHeroWrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.productHeroText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding: 2vw;
  width: 55vw;
  border: 0.7vw solid rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.productHeroText h1 {
  font-size: 6vw;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 18px #000000a1;
  font-family: 'Montserrat', sans-serif;
}
</style>
