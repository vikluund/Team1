<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <RouterLink class="navbar-brand" to="/"
        ><img src="../assets/media/AventurasLogo.png" class="img-fluid" alt="Logo" />
      </RouterLink>
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
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            Aventuras
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
        </button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/Season"
                >Season</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/Activities"
                >Activities</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/inspiration"
                >Inspiration</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/about"
                >About</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/contact"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<style scoped>

@media (min-width: 415px) {
  .navbar-toggler {
    display: none;
  }
}
.navbar {
  background-color: transparent;
}
.offcanvas-header {
  background-color: rgb(87, 87, 87);
}
.offcanvas-title {
  color: white;
}
.navbar-brand {
  color: white;
  font-family: monospace;
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
.btn-close {
  color: white;
  background-color: white;
}
.offcanvas-body {
  background-color: rgb(66, 66, 66);
  background-image: url(../assets/imgs/R2D2OffCanvas.png);
  background-position: center;
  background-repeat: no-repeat;
}

.nav-link {
  color: white;
}
</style>
