<template>
  <div class="page-header header-filter"></div>
  <div class="main main-raised">
    <div class="profile-content">
      <div class="container">
        <div class="row">
          <div class="profile-wrapper">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="profile">
                <div class="avatar">
                  <img src="../assets/media/profile-img1.png" class="img-raised rounded-circle" />
                </div>
                <div class="name">
                  <h3 class="title">{{ loginStore.member.username }}</h3>
                  <h6 class="profile-location">{{ loginStore.member.location }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="description text-center">
          <p>This is a user profile page.</p>
        </div>
        <div class="row">
          <div class="col">
            <div class="profile-tabs">
              <ul class="nav nav-pills mb-3 justify-content-center" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" href="#" role="tab"> Upcoming Trips </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="tab"> Favorites </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" role="tab"> Your Reviews </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center gallery">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 18rem">
                <img class="card-img-top" src="../assets/media/Horse3.jpg" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">HORSE RIDING TOUR</h5>
                  <p class="card-text">
                    Enjoy riding the Icelandic horse in private through stunning nature. Choose from
                    unique adventures through the highlands on the oldest trails in Iceland or
                    experience the magic on the long stretches of silky smooth black and white
                    beaches, where you can experience the tölt, which is a gait unique to the
                    Icelandic horse.
                  </p>
                </div>
                <div class="card-body">
                  <a href="#" class="card-link">Information</a>
                  <a href="#" class="card-link">Cancel Activity</a>
                </div>
              </div>
            </div>
            <!-- col2-->
            <div class="col">
              <div class="card" style="width: 18rem">
                <img
                  class="card-img-top"
                  src="../assets/media/HeroImageRaft.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">BALI RAFTING</h5>
                  <p class="card-text">
                    All your imagination about Bali doesn't have to be stuck to the beach, because
                    adventure awaits you in this paradise. Bali Rafting or also known as White water
                    rafting bali is one of the most favorite activities that must be on your
                    booked-list during your vacation in Bali.
                  </p>
                </div>
                <div class="card-body">
                  <a href="#" class="card-link">Information</a>
                  <a href="#" class="card-link">Cancel Activity</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/login.js'

export default {
  setup() {
    const loginStore = useAuthStore()

    return { loginStore }
  },
  //if not logged in, redirect to login-page
  mounted() {
    if (!this.loginStore.member.auth) {
      this.$router.replace({ path: '/login' })
    }
  }
}
</script>

<style scoped>
p,
h1,
h2,
h3,
h4 {
  font-family: 'Montserrat', sans-serif;
}
a {
  color: #2a5023;
}

.profile-wrapper,
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.fixed-top {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
}

.profile-page .page-header {
  height: 300px;
  background-position: center;
}

.page-header {
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.2)),
    url(../assets/media/Hund2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
.main-raised {
  margin: -5rem 4rem 8rem;
  border-radius: 3px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1), 0 6px 30px 5px rgba(0, 0, 0, 0.08),
    0 8px 10px -5px rgba(0, 0, 0, 0.07);
}

.profile-content {
  padding: 1rem 2rem 6rem;
}

.main {
  background: #fff;
  position: relative;
  z-index: 3;
}
.card-text {
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: left;
  line-height: 1.6;
}

.card-title {
  font-weight: 600;
}

.profile-page .profile {
  text-align: center;
}

.profile-page .profile img {
  margin: 0 auto;
  -webkit-transform: translate3d(0, -50%, 0);
  -moz-transform: translate3d(0, -50%, 0);
  -o-transform: translate3d(0, -50%, 0);
  -ms-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}

.img-raised {
  margin-top: -5rem;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.2), 0 8px 10px -5px rgba(0, 0, 0, 0.25);
  width: 150px;
}

.rounded-circle {
  border-radius: 50% !important;
}

.title {
  margin-top: 30px;
  margin-bottom: 5px;
  font-weight: 600;
}

.profile-location {
  font-size: 0.8rem;
}

.description {
  font-size: 1.4rem;
  margin-bottom: 25px;
}

.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery .col {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.nav-link {
  background-color: #fff;
  color: #000;
  border: #a5a5a5 solid 1px;
  margin: 4px 5px;
  border-radius: 2px;
}

.nav-link:hover {
  background-color: #e9e9e9;
}

.nav-item .active {
  background-color: #4a8140;
  color: #fff;
  border: #2a5023 solid 1px;
}

.nav-item .active:hover {
  background-color: #2a5023;
}

.profile-page .description {
  margin: 1rem auto;
  font-weight: 400;
}
.profile-page .gallery {
  width: 100%;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .img-raised {
    margin-top: -5rem;
    width: 200px;
  }

  .main-raised {
    margin: -5rem 10vw 14vh;
    border-radius: 3px;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1), 0 6px 30px 5px rgba(0, 0, 0, 0.08),
      0 8px 10px -5px rgba(0, 0, 0, 0.07);
  }
}
</style>
