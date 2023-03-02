<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <span class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/">HOME</RouterLink>
            </span>
          </div>
          <div class="col">
            <span class="nav-item">
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                SEASON
              </button>

              <div
                class="offcanvas offcanvas-top"
                tabindex="-1"
                id="offcanvasTop"
                aria-labelledby="offcanvasTopLabel"
              >

                <div class="offcanvas-body">
                  <div class="container text-center">
                    <div class="row align-items-center">
                      <div class="col">
                        <div class="card" style="width: 12rem">
                          <img src="../assets/media/Spring.png" class="card-img-top" alt="..." />
                          <h5 class="card-title">SPRING</h5>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card" style="width: 12rem">
                          <img src="../assets/media/Summer.png" class="card-img-top" alt="..." />
                          <h5 class="card-title">SUMMER</h5>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card" style="width: 12rem">
                          <img src="../assets/media/Autumn.png" class="card-img-top" alt="..." />
                          <h5 class="card-title">AUTUMN</h5>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card" style="width: 12rem">
                          <img src="../assets/media/Winter.png" class="card-img-top" alt="..." />
                          <h5 class="card-title">WINTER</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RouterLink class="nav-link" aria-current="page" to="/season"></RouterLink>
            </span>
          </div>
          <div class="col">
            <span class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/activities"
                >ACTIVITIES</RouterLink
              >
            </span>
          </div>
          <div class="col">
            <RouterLink class="navbar-brand" to="/"
              ><img src="../assets/media/AventurasLogo.png" class="img-fluid" alt="Logo" />
            </RouterLink>
          </div>
          <div class="col">
            <span class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/inspiration"
                >INSPIRATION</RouterLink
              >
            </span>
          </div>
          <div class="col">
            <span class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/contact">CONTACT</RouterLink>
            </span>
          </div>
          <div class="col">
            <span class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/about">ABOUT</RouterLink>
            </span>
          </div>
        </div>
      </div>
      <div class="navbar-logo d-block d-md-none">
        <RouterLink class="navbar-brand" to="/"
          ><img src="../assets/media/AventurasLogo.png" class="img-fluid" alt="Logo" />
        </RouterLink>
      </div>
      <button
        class="navbar-toggler d-block d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <i class="bi bi-grid-3x3-gap-fill"></i>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">AVENTURAS</h5>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/">HOME</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/Season">SEASON</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/Activities"
                >ACTIVITIES</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/inspiration"
                >INSPIRATION</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/about">ABOUT</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/contact">CONTACT</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
@media (max-width: 768px) {
  .container {
    display: none;
  }
}

@media (min-width: 415px) {
  .navbar-toggler {
    display: none;
  }
}
@media (min-width: 768px) {
  .navbar {
    top: 10px;
    padding-bottom: 10px;
    border-color: white;
    border-style: solid;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom-width: 1px;
    margin-left: 200px;
    margin-right: 200px;
    font-family: 'Montserrat', sans-serif;
    font-size: smaller;
  }
}

.card {
    border: transparent;
}

.card-img-top {
    border-bottom-left-radius: 3%;
    border-bottom-right-radius: 3%;
}

.card-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.offcanvas-top {  
    margin-top: 60px;
    height: 25%;
    width: 80%;
    background-color: rgba(66, 66, 66, 0.6);
    margin-left: 10%;
}
.offcanvas-top > .offcanvas-body{
    padding-top: 23px;
    padding-bottom: 0px;
    padding-right: 0;
    padding-left: 30px;
}

.btn-primary {
  background-color: transparent;
  border: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: small;
  margin: -20px;
}
.offcanvas-end {
  width: 50%;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
}
.offcanvas-header {
  background-color: rgb(13, 104, 92);
}
.offcanvas-title {
  color: white;
}
.bi-grid-3x3-gap-fill {
  color: white;
}
.navbar-toggler {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-10%, 50%);
  background-color: transparent;
  color: transparent;
  border: 0px;
}
.offcanvas-end > .offcanvas-body {
  background-color: rgba(66, 66, 66, 0.6);
}

.nav-link {
  color: white;
}
</style>
