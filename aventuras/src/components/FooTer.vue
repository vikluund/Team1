<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
<footer id="all-footer" class="bg-dark text-center text-white">
  <div class="container p-4">
    <section class="mb-4">


      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-youtube"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

    </section>

    <section class="">
      <form @submit="onSubmit" action="">

        <div class="row d-flex justify-content-center">

          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input type="email" v-model="userName" id="form5Example21" class="form-control"  />
              <label id="message" v-if="message !== null" class="form-label" for="form5Example21">{{ message }}</label>
            </div>
          </div>


          <div class="col-auto">

            <input type="submit" :disabled="userName.length === 0" class="btn btn-outline-light mb-4" value="Subscribe" />

          </div>

        </div>

      </form>
    </section>

    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>

  </div>

  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
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
        message : null,
        userName:""
    };
  },

  methods: {
    onSubmit(event) {
        // this.message =`Thanks for subscribing  ${this.userName}`
         this.message =`Thanks for subscribing `
       event.preventDefault()
    },
  },

};
</script>

<style scoped>

#all-footer{
    margin-top: 30vh;
}

#message{
    color: red;
    font-weight: 600;
    font-size: 20px;


}
/*
#all-footer{
    position: fixed;
} */

</style>
