<script setup>
import BooKing from '../components/BooKing.vue'
</script>

<template>
  <div v-for="product in getData($route.params.id)" :key="product.id" class="productHero">
    <div class="productHeroWrapper">
      <img :src="product.heroimg" alt="Hero Image Product" />
      <div class="productHeroText">
        <h1>{{ product.herotext }}</h1>
      </div>
    </div>
  </div>
  <h1 v-for="product in getData($route.params.id)" :key="product.id" class="product-title">
    {{ product.title }}
  </h1>
  <div v-for="product in getData($route.params.id)" :key="product.id" class="products">
    <div class="productText">
      <h2>{{ product.infotitle }}</h2>
      <p>{{ product.infotext }}</p>
    </div>
    <img :src="product.infoimg" alt="Product Image 1" class="theImage" />
  </div>
  <div v-for="product in getData($route.params.id)" :key="product.id" class="productsTwo">
    <div class="productsTwo-text">
      <h2>{{ product.herotext2 }}</h2>
    </div>
    <div class="overlay"></div>
    <img :src="product.heroimg2" alt="Product Image 1" />
  </div>
  <BooKing />
</template>

<script>
import Product from '../product.json'

export default {
  data() {
    return {
      products: Product
    }
  },
  methods: {
    getData(id) {
      let data = this.products
      return data.filter((item) => {
        return item.id == id
      })
    }
  }
}
</script>

<style scoped>
.productHero {
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
  content: '';
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
  width: auto;
  height: auto;
  border: 0.7vw solid rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.productHeroText h1 {
  font-size: 4vw;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 18px #000000a1;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding-left: 1vw;
  padding-right: 1vw;
}
.product-title {
  text-align: center;
  position: relative;
  padding-top: 5vh;
  font-size: 4.5rem;
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
  font-size: 1.2rem;
}
.productsTwo {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 90vh;
  margin-bottom: 10vh;
  position: relative;
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
  width: auto;
  height: auto;
  padding-left: 2vw;
  padding-right: 2vw;
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
  text-align: center;
}
.productsTwo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.booking {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10%;
  height: 80vh;
  width: 80vw;
  background-color: rgb(57, 57, 57);
}
@media (max-width: 768px) {
  .productHeroText h1 {
    font-size: 1.4rem;
  }
  .products {
    padding-left: 0;
    flex-direction: column;
  }
  .theImage {
    width: 80%;
    margin: 0;
  }
  .product-title {
    font-size: 2rem;
  }
  .productText h2 {
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
  .productsTwo-text {
    width: auto;
    height: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 35%;
    border-width: 4px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .productsTwo-text h2 {
    font-size: 18px;
    text-align: center;
  }
}
</style>
