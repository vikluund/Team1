<template>
  <div id="main-container">
    <!-- <section>
      <h1>Autumn looks great in green</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea veritatis repudiandae
        delectus ipsam voluptate harum reprehenderit possimus alias aliquam consequatur, cupiditate
        autem facilis et. Modi eligendi commodi voluptate consequuntur?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Vel ea veritatis repudiandae delectus ipsam voluptate harum
        reprehenderit possimus alias aliquam consequatur, cupiditate autem facilis et. Modi eligendi
        commodi voluptate consequuntur?
      </p>
    </section> -->
    <div class="main-container">
      <div id="card-container">
        <div class="content1"></div>
        <div class="content2">
          <h3>BASK IN NATURE'S POWER</h3>
          <p>
            Don't think just because summer is over, waterfall chasing just goes away. In fact,
            you'll often be able to experience the full force of Barron Falls through Autumn as the
            rains continue to replenish the land.
          </p>
          <button><a href="#">More information</a></button>
        </div>
        <div class="content3">
          <h3>BASK IN NATURE'S POWER</h3>
          <p>
            Don't think just because summer is over, waterfall chasing just goes away. In fact,
            you'll often be able to experience the full force of Barron Falls through Autumn as the
            rains continue to replenish the land.
          </p>
          <button><a href="#">More information</a></button>
        </div>
        <div class="content4"></div>
        <div class="content5"></div>
        <div class="content6">
          <h3>BASK IN NATURE'S POWER</h3>
          <p>
            Don't think just because summer is over, waterfall chasing just goes away. In fact,
            you'll often be able to experience the full force of Barron Falls through Autumn as the
            rains continue to replenish the land.
          </p>
          <button><a href="#">More information</a></button>
        </div>
        <div class="content7">
          <h3>BASK IN NATURE'S POWER</h3>
          <p>
            Don't think just because summer is over, waterfall chasing just goes away. In fact,
            you'll often be able to experience the full force of Barron Falls through Autumn as the
            rains continue to replenish the land.
          </p>
          <button><a href="#">More information</a></button>
        </div>
        <div class="content8"></div>
        <div class="content9"></div>
        <div class="content10">
          <h3>BASK IN NATURE'S POWER</h3>
          <p>
            Don't think just because summer is over, waterfall chasing just goes away. In fact,
            you'll often be able to experience the full force of Barron Falls through Autumn as the
            rains continue to replenish the land.
          </p>
          <button><a href="#">More information</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h3 {
  margin-bottom: 2rem;
  font-size: 2rem;
}

a {
  text-decoration: none;
  margin-top: 1rem;
  color: black;
}

section {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

section h1 {
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

section p {
  padding: 1rem;
}

button {
  width: 30%;
  margin-top: 2rem;
  border-radius: 4px;
  border: none;
  padding: 0.4rem;
}
h2 {
  margin-bottom: 1rem;
}

.main-container {
  margin: 3rem 0;
}

#card-container {
  display: grid;
  height: 120vh;
  grid-template-columns: 50% 50%;
  grid-template-rows: 18fr 10fr 18fr 10fr 18fr;
  grid-template-areas:
    'content1 content2'
    'content3 content4'
    'content5 content6'
    'content7 content8'
    'content9 content10';
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 550px) {
  .content1 {
    width: 100%;
    height: auto;
    background-size: relative;
    background-position: center center;
  }
}
.content1 {
  grid-area: content1;
  background-image: url(../assets/media/10.jpg);
  height: 60vh;
  width: 100%;
  background-size: cover;
  object-position: center;
  border-radius: 5px;
  background-position: center center;
}

@media only screen and (max-width: 550px) {
  .content2 {
    padding: 1rem;
  }
}
.content2 {
  grid-area: content2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem;
}

.content3 {
  grid-area: content3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
}

@media only screen and (max-width: 550px) {
  .content4 {
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center center;
  }
}

.content4 {
  grid-area: content4;
  background-image: url(../assets/media/9.jpg);
  height: 60vh;
  width: 100%;
  background-size: cover;
  object-fit: fill;
  border-radius: 5px;
}

@media only screen and (max-width: 550px) {
  .content5 {
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center center;
  }
}
.content5 {
  grid-area: content5;
  background-image: url(../assets/media/3.jpg);
  height: 60vh;
  width: 100%;
  background-size: cover;
  object-position: center;
  border-radius: 5px;
}

.content6 {
  grid-area: content6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
}

.content7 {
  grid-area: content7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
}

@media only screen and (max-width: 550px) {
  .content8 {
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center center;
  }
}
.content8 {
  grid-area: content8;
  background-image: url(../assets/media/walking.jpg);
  height: 60vh;
  width: 100%;
  background-size: cover;
  object-position: center;
  border-radius: 5px;
}

@media only screen and (max-width: 550px) {
  .content9 {
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center center;
  }
}
.content9 {
  grid-area: content9;
  background-image: url(../assets/media/2.jpg);
  height: 60vh;
  width: 100%;
  background-size: cover;
  object-position: center;
  border-radius: 5px;
}

.content10 {
  grid-area: content10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
}

@media only screen and (max-width: 550px) {
  #card-container {
    grid-template-columns: 1fr;
    grid-template-rows: 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr;
    grid-template-areas:
      'content1'
      'content2'
      'content4'
      'content3'
      'content5'
      'content6'
      'content8'
      'content7'
      'content9'
      'content10';
  }
}
</style>
