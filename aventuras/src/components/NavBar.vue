<script setup>
import LoginArea from '../components/LoginArea.vue'
import LoginAreaMobile from '../components/LoginAreaMobile.vue'
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
                          <h5 class="card-title">
                            <RouterLink class="nav-link" aria-current="page" to="/product/1">
                              SPRING</RouterLink
                            >
                          </h5>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card" style="width: 12rem">
                          <img src="../assets/media/Summer.png" class="card-img-top" alt="..." />
                          <h5 class="card-title">
                            <RouterLink class="nav-link" aria-current="page" to="/product/2">
                              SUMMER</RouterLink
                            >
                          </h5>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card" style="width: 12rem">
                          <img src="../assets/media/Autumn.png" class="card-img-top" alt="..." />
                          <h5 class="card-title">
                            <RouterLink class="nav-link" aria-current="page" to="/product/3">
                              AUTUMN</RouterLink
                            >
                          </h5>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card" style="width: 12rem">
                          <img src="../assets/media/Winter.png" class="card-img-top" alt="..." />
                          <h5 class="card-title">
                            <RouterLink class="nav-link" aria-current="page" to="/product/4">
                              WINTER</RouterLink
                            >
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div class="col">
            <RouterLink class="navbar-brand" to="/"
              ><img src="../assets/media/AventurasLogo2nd.png" class="img-fluid" alt="Logo" />
            </RouterLink>
          </div>
          <div class="col">
            <span class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/about">ABOUT</RouterLink>
            </span>
          </div>
          <div class="col">
            <span class="nav-item">
              <LoginArea />
            </span>
          </div>
        </div>
      </div>
      <div class="navbar-logo d-block d-md-none">
        <RouterLink class="navbar-brand" to="/"
          ><img src="../assets/media/AventurasLogo2nd.png" class="img-fluid" alt="Logo" />
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
              <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <a href="#seasonLink" class="nav-link" aria-current="page">Season</a>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <LoginAreaMobile />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 967px) {
  .container {
    display: none;
  }
}

@media (min-width: 768px) {
  .navbar {
    top: 10px;
    padding-bottom: 12px;
    border-color: white;
    border-style: solid;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom-width: 1px;
    margin-left: 200px;
    margin-right: 200px;
    font-family: 'Montserrat', sans-serif;
    font-size: small;
    justify-items: center;
  }
}
.fixed-top {
  position: absolute;
}
.img-fluid {
  margin-top: -5px;
}
.card {
  border: transparent;
}
.card-img-top {
  border-radius: 0;
  filter: brightness(55%);
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
  height: 180px;
  background-color: rgba(15, 15, 15, 0.5);
}
.offcanvas-top > .offcanvas-body {
  padding-top: 23px;
  padding-right: 0px;
}
.offcanvas-body .row {
  padding-left: 5%;
}
.btn-primary {
  background-color: transparent;
  border: transparent;
  border-color: transparent;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: small;
  margin: -20px;
  padding: 9px 0 0;
}

.btn-primary.focus,
.btn-primary:focus {
  box-shadow: none;
  border: transparent;
}
.offcanvas-end {
  width: 60%;
  background-color: rgba(40, 88, 20, 0.8);
  font-family: 'Montserrat', sans-serif;
}
.offcanvas-header {
  background-color: rgb(53, 52, 52);
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
  color: transparent;
  border: 0px;
  padding-top: 0px;
  padding-right: 8px;
}
.offcanvas-end > .offcanvas-body {
  background-color: rgba(66, 66, 66, 0.6);
}
.nav-link {
  color: white;
  padding-top: 5px;
}
</style>
