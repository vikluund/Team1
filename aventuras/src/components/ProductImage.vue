<script setup></script>

<template>
  <div class="productHero">
    <img src="../assets/media/Winter.jpg" alt="Hero Image Product">
    <div class="productHeroText">
    <h1>Product Page</h1>
    </div>
  </div>
</template>

<style scoped>
.productHero{
  position: relative;
}
.productHero img {
  margin: 0 auto;
  height: auto;
  max-width: 100%;
  overflow-x: hidden;
}
.productHero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.productHeroText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  padding: 50px;
  border: 8px solid rgb(255, 255, 255);
}
.productHeroText h1 {
  font-size: 6.5em;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 18px #000000a1;
  font-family: 'Advent Pro';
}
</style>
