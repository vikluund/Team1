<script setup></script>
<template>
  <footer id="all-footer" class="bg-dark text-center text-white">
    <div class="container p-4">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-youtube"></i
        ></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i
        ></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i
        ></a>
      </section>

      <section class="newsletter">
        <form @submit="onSubmit" action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Sign up for newsletter</strong>
              </p>
            </div>

            <div class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input type="email" v-model="userName" id="form5Example21" class="form-control" />
                <label
                  id="message"
                  v-if="message !== null"
                  class="form-label"
                  for="form5Example21"
                  >{{ message }}</label
                >
              </div>
            </div>

            <div class="col-auto">
              <input
                type="submit"
                :disabled="userName.length === 0"
                class="btn btn-outline-light mb-4"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </section>

      <section class="mb-4">
        <div class="col">
          <RouterLink class="navbar-brand" to="/"
            ><img src="../assets/media/AventurasLogo2nd.png" class="img-fluid" alt="Logo" />
          </RouterLink>
        </div>
      </section>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2020 Copyright:
      <RouterLink class="navbar-brand" to="/">Aventuras.com</RouterLink>
    </div>
    <!-- <RouterView /> -->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      userName: ''
    }
  },

  methods: {
    onSubmit(event) {
      this.message = `Thank you for subscribing!`
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
#message {
  color: #33de15;
  font-weight: 600;
  font-size: 20px;
}
/* #form5Example21{
    width: 325px;
    width:90%;

} */

/* #all-footer > div.container.p-4 > section.newsletter > form > div{
    margin-right: 90px;
} */
/* .newsletter{
    margin-right: 60px;
} */
</style>
