<script setup>
import ProductImage from "../components/ProductImage.vue"
</script>

<template>
  <ProductImage />
  <h1 class="product-title">Trip to the Mountain Range</h1>
  <div class="products">
    <div class="productText">
    <h2>Enjoy the Cool Breeze in the Alps</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus consequatur libero aliquid aspernatur quo doloremque officia. Tempora earum ipsam non doloremque quidem aut nam sit, reiciendis recusandae architecto quos odio.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus consequatur libero aliquid aspernatur quo doloremque officia. Tempora earum ipsam non doloremque quidem aut nam sit, reiciendis recusandae architecto quos odio.</p>
    </div>
    <img src="../assets/media/alessio-soggetti-xqBllPa7XEs-unsplash.jpg" alt="Product Image 1" class="theImage">
  </div>
  <div class="productsTwo">
    <img src="../assets/media/glade-optics-ttGLlNElbCc-unsplash.jpg" alt="Product Image 1" class="theImage">
  </div>
</template>

<style scoped>

.product-title{
  text-align: center;
  position: relative;
  padding-top: 5vh;
  font-size: 4em;
  font-family: 'Advent Pro';
  text-shadow: 1px 1px 2px #000000a1;
}
.products {
  display: flex;
  align-items: center;
  padding-top: 10vh;
  padding-left: 6vw;
  padding-bottom: 10vh;
}
.theImage {
  width: 600px;
  height: auto;
  margin-right: 20px;
  border-radius: 3%;
}
.productText {
  margin: 8vw;
  padding: 2vw;
  flex: 1;
  max-width: 800px;
  line-height: 1.4;
  border-left: 4px solid rgb(12, 150, 177);
  border-bottom: 4px solid rgb(12, 150, 177);
  font-family: 'Montserrat';
}
.productsTwo {
  display: flex;
  align-items: center;
  padding-top: 10vh;
  padding-left: 6vw;
  padding-bottom: 10vh;
}
</style>
