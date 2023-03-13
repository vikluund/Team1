<template>
  <div id="card-container">
    <div class="title-section">
      <h2 class="top-title">Our top activities</h2>
      <div class="underline"></div>
    </div>
    <!-- Right side picture card -->
    <div class="card mb-4 border-0" style="max-width: 100%">
      <div class="row g-0">
        <!-- Ändrar columerna i bootstrap, gör bilder större -->
        <div class="col-md-6">
          <img src="../assets/img/3.png" class="img-fluid" alt="..." />
        </div>
        <!-- Ändrar columerna, nu är alla columnera 12 tilsammans (bootstrap),
          så att texten är brevid bilden  -->
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <h3 class="card-title">Icelandic horse tour</h3>
            <div class="line"></div>
            <p class="card-text">
              Enjoy riding the Icelandic horse in private through stunning
              nature and relax in the comfort of our exclusive facilities.
              Choose from unique adventures through the highlands on the oldest
              trails in Iceland or experience.
            </p>

            <!-- <button type="button" style="float: right" class="btn"> -->
            <router-link
              to="/about"

              class="btn"
              style="float: right"
              >More information</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Left side picture -->
    <div class="card mb-4 border-0" style="max-width: 100%" dir="rtl">
      <div class="row g-0">
        <div class="col-md-6">
          <img
            src="../assets/img/MicrosoftTeams-image (14).png"
            class="img-fluid"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <!-- <div class="content1"> -->
            <h3 class="card-title">Experience whale shark</h3>
            <div class="line2"></div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. This is a wider card with supporting text below as a
              natural lead-in to additional content.
            </p>
            <router-link to="/about" class="btn"
              >More information</router-link
            >
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Right side picture -->
    <div class="card mb-4 border-0" style="max-width: 100%">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="../assets/img/3.png" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <h3 class="card-title">HIT THE TRAILS</h3>
            <div class="line"></div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <router-link
              to="/about"

              class="btn"
              style="float: right"
              >More information</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Right side picture -->
    <div class="card mb-4 border-0" style="max-width: 100%" dir="rtl">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="../assets/img/2.jpg" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <h3 class="card-title">HIT THE TRAILS</h3>
            <div class="line2"></div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <router-link to="/about" class="btn"
              >More information</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Right side picture -->
    <div class="card mb-4 border-0" style="max-width: 100%">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="../assets/img/3.png" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="text-align: left">
            <h3 class="card-title">HIT THE TRAILS</h3>
            <div class="line"></div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
            <router-link
              to="/about"
              class="btn"
              style="float: right"
              >More information</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @media (min-width: 390px) {
    .card-title {
      height: 3rem;
    }

    #card-container > div:nth-child(2) > div > div:nth-child(2) > div {
      margin: 0 30px;
    }

    #card-container > div:nth-child(3) > div > div:nth-child(2) > div {
      margin: 0 30px;
    }

    #card-container > div:nth-child(4) > div > div:nth-child(2) > div {
      margin: 0 30px;
    }

    #card-container > div:nth-child(5) > div > div:nth-child(2) > div {
      margin: 0 30px;
    }

    #card-container > div:nth-child(6) > div > div:nth-child(2) > div {
      margin: 0 30px;
    }
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

  .underline {
    display: flex;
    border-bottom: #2a5024 3px solid;
    width: 10%;
    margin-left: 45%;
    display: inline-block;
    position: relative;
  }

  .title-section {
    margin: 3rem 0;
  }

  .top-title {
    text-align: center;
    height: 3rem;
  }
  .btn {
    /* border-radius: 0; */
    /* border: none; */
    padding: 0.5rem;
    margin-top: 1rem;
    background-color: white;
  color: #2a5024;
  border: solid 3px #2a5024;
  font-weight: 500;
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
</style>

<script></script>
