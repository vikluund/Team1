<script setup>
import ProductImage from "../components/ProductImage.vue"
import BooKing from "../components/BooKing.vue"
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
  <div class="productsTwo-text"><h2>Bring your friends and family</h2></div>
    <!-- <div class="overlay"></div>
    <img src="../assets/media/glade-optics-ttGLlNElbCc-unsplash.jpg" alt="Product Image 1"> -->
  </div>
  <BooKing />
</template>

<style scoped>

.product-title{
  text-align: center;
  position: relative;
  padding-top: 5vh;
  font-size: 6vw;
  font-family: 'Montserrat';
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
  width: 40vw;
  height: auto;
  margin-right: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
.productText {
  margin: 8vw;
  padding-left: 2vw;
  padding-bottom: 2vw;
  flex: 1;
  max-width: 800px;
  line-height: 1.4;
  border-left: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(to bottom right, rgb(15, 115, 11), rgb(255, 255, 255)) 1 5%;
  /* border-left: 4px solid rgb(15, 115, 11);
  border-bottom: 4px solid rgb(15, 115, 11); */
  font-family: 'Montserrat';
}
.productText h2 {
  font-size: 2vw;
  padding-bottom: 5vh;
  margin-top: 0;
  font-weight: 500;
}
.productText p {
  font-size: 1vw;
}
.productsTwo {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 90vh;
  margin-bottom: 10vh;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../assets/media/glade-optics-ttGLlNElbCc-unsplash.jpg);
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.productsTwo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 24vw;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0.4vw solid rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  left: 85%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.productsTwo-text h2 {
  font-size: 2.5em;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 18px #000000a1;
  font-family: 'Montserrat';
}
.productsTwo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
} */
.booking {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10%;
  height: 80vh;
  width: 80vw;
  background-color: rgb(57, 57, 57);
}
@media (max-width: 768px){
  .products {
    padding-left: 0;
    flex-direction: column;
  }
  .theImage {
    width: 80%;
    margin: 0;
  }
  .productText h2{
    font-size: 20px;
  }
  .productText p {
    font-size: 16px;
  }
  .productsTwo {
    width: 100%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .productsTwo-text{
    width: 48vw;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 29%;
    border-width: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    padding-right: 0;
  }
  .productsTwo-text h2 {
    font-size: 18px;
  }
  /* .productsTwo img {
    margin: 0 auto;
    height: auto;
    max-width: 100%;
    overflow-x: hidden;
  }
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 32.8%;
    height: 31vh;
  } */

}
</style>
