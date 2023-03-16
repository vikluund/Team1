<template>
  <div id="card-container">
    <div class="title-section">
      <div class="logo-container">
        <img src="../assets/media/mountains-icon.png" alt="mountains-logo" class="logo" />
      </div>
    </div>
    <!-- Right side picture card -->
    <div class="card mb-4 border-0" id="first" style="max-width: 100%">
      <div class="row g-0">
        <!-- Ändrar columerna i bootstrap, gör bilder större -->
        <div class="col-md-6">
          <img src="../assets/media/Horse2.jpg" class="img-fluid" alt="..." />
        </div>
        <!-- Ändrar columerna, nu är alla columnera 12 tilsammans (bootstrap),
            så att texten är brevid bilden  -->
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <h3 class="card-title">HORSE RIDING TOUR</h3>
            <div class="line"></div>
            <p class="card-text">
              Enjoy riding the Icelandic horse in private through stunning nature. Choose from
              unique adventures through the highlands on the oldest trails in Iceland or experience
              the magic on the long stretches of silky smooth black and white beaches, where you can
              experience the tölt, which is a gait unique to the Icelandic horse.⁣⁣
            </p>

            <!-- <button type="button" style="float: right" class="btn"> -->
            <router-link
              :to="'/product/' + 1"
              class="btn"
              @click="toProduct(1)"
              style="float: right"
              >More info</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Left side picture -->
    <div class="card mb-4 border-0" id="second" style="max-width: 100%" dir="rtl">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="../assets/media/Snork2.jpg" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <!-- <div class="content1"> -->
            <h3 class="card-title">SAFARI SHARK WHALE</h3>
            <div class="line2"></div>
            <p class="card-text">
              Put on a mask, look beneath the surface and be mesmerised by the world below in Coral
              Bay. Start your adventure exploring this amazing underwater universe, with its
              colourful coral gardens and its abundant marine life. Let us take you on a tour of a
              lifetime for a chance to swim with the biggest fish in the sea, the majestic Whale
              Sharks.
            </p>
            <router-link
              :to="'/product/' + 2"
              class="btn"
              @click="toProduct(2)"
              style="float: right"
              >More info</router-link
            >
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Right side picture -->
    <div class="card mb-4 border-0" id="third" style="max-width: 100%">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="../assets/media/climb1.jpg" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <h3 class="card-title">HIKE AND MOUNTAIN CLIMB</h3>
            <div class="line"></div>
            <p class="card-text">
              Take a deep breath and escape to a trail where birds serenade, fresh air rejuvenates,
              and blue skies mesmerise. Whether you're chasing endorphins on a trek or connecting
              with the ground beneath your feet on an effortless walk, a hiking adventure is a
              much-needed release from the rollercoaster of life. Chase the clouds above the cliffs!
            </p>
            <router-link
              :to="'/product/' + 3"
              class="btn"
              @click="toProduct(3)"
              style="float: right"
              >More info</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Right side picture -->
    <div class="card mb-4 border-0" id="fourth" style="max-width: 100%" dir="rtl">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="../assets/media/HeroImageRaft.jpg" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <h3 class="card-title">BALI RAFTING</h3>
            <div class="line2"></div>
            <p class="card-text">
              All your imagination about Bali doesn’t have to be stuck to the beach, because
              adventure awaits you in this paradise. Bali Rafting or also known as White water
              rafting bali is one of the most favorite activities that must be on your booked-list
              during your vacation in Bali.
            </p>
            <router-link
              :to="'/product/' + 4"
              class="btn"
              @click="toProduct(4)"
              style="float: right"
              >More info</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Right side picture -->
    <div class="card mb-4 border-0" id="fifth" style="max-width: 100%">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="../assets/media/Ski1.jpg" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <h3 class="card-title">ALPINE SKIING TOUR</h3>
            <div class="line"></div>
            <p class="card-text">
              An alpine skiing tour means making a worthwhile effort to achieve some good skiing. It
              also means magnificent views, powder snow and unspoiled terrain: a perfect combination
              of peace, quiet and action. Your guide chooses a suitable “”mountain of the day””
              based on prevailing weather and snow conditions.
            </p>
            <router-link
              :to="'/product/' + 5"
              class="btn"
              @click="toProduct(5)"
              style="float: right"
              >More info</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mobile mode */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 9vh;
  margin-top: 9vh;
}

.logo-container img {
  display: inline-block;
}

.logo {
  padding-top: 1.5vh;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#card-container > div:nth-child(2) > div > div:nth-child(2) > div {
  padding: 3vw;
}

#card-container > div:nth-child(3) > div > div:nth-child(2) > div {
  padding: 3vw;
}

#card-container > div:nth-child(4) > div > div:nth-child(2) > div {
  padding: 3vw;
}

#card-container > div:nth-child(5) > div > div:nth-child(2) > div {
  padding: 3vw;
}

#card-container > div:nth-child(6) > div > div:nth-child(2) > div {
  padding: 3vw;
}

.title-section {
  margin: 1.3vh 0;
}

.top-title {
  text-align: center;
  height: 1.4vh;
  font-family: 'Montserrat', sans-serif;
}
.btn {
  border-radius: 3px;
  background-color: #2a5024;
  border: none;
  color: white;
  padding: 0.8vh;
  padding-bottom: 1vh;
  margin-top: 0.5vh;
  margin-bottom: 0.8vh;
  background-color: white;
  color: #2a5024;
  font-weight: 500;
  border: solid 3px #2a5024;
}

.btn:hover {
  color: white;
  background-color: #2a5024;
}
.line2 {
  content: '';
  display: block;
  width: 6em;
  max-width: 70%;
  border: 2px solid #2a5024;
  margin-bottom: 1em auto 0;
  right: 100px;
  float: left;
}
.line {
  content: '';
  display: block;
  width: 6em;
  max-width: 70%;
  border: 2px solid #2a5024;
  margin-bottom: 1em auto 0;
  left: 0;
}

.card-text {
  font-size: 24px;
  margin-top: 3rem;
}
.card {
  padding: 0 !important;
  margin: 0 !important;
}

.card-title {
  height: 3rem;
}

.logo {
  width: 6rem;
  height: auto;
}

.btn {
  margin-bottom: 2rem;
}

/* Desktop mode */
@media (min-width: 768px) {
  .btn {
    margin-bottom: 0;
  }

  .logo {
    width: 10vw;
    height: auto;
    margin-top: 9vh;
    margin-bottom: 9vh;
  }

  .card-title {
    height: 3rem;
  }

  #card-container > div:nth-child(2) > div > div:nth-child(2) > div {
    margin: 0 30px;
    padding: 0;
    padding-top: 5vh;
  }

  #card-container > div:nth-child(3) > div > div:nth-child(2) > div {
    margin: 0 30px;
    padding: 0;
    padding-top: 5vh;
  }

  #card-container > div:nth-child(4) > div > div:nth-child(2) > div {
    margin: 0 30px;
    padding: 0;
    padding-top: 5vh;
  }

  #card-container > div:nth-child(5) > div > div:nth-child(2) > div {
    margin: 0 30px;
    padding: 0;
    padding-top: 5vh;
  }

  #card-container > div:nth-child(6) > div > div:nth-child(2) > div {
    margin: 0 30px;
    padding: 0;
    padding-top: 5vh;
  }
}
</style>

<script>
export default {
  methods: {
    toProduct(id) {
      this.$router.push({ name: 'product', params: { id: id } })
    }
  }
}
</script>
