<script setup>
// import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!--Card-->
  <div id="booking-form" class="card shadow mb-5 bg-white rounded">
    <!--Card-Body-->
    <div class="card-body">
      <!--Card-Title-->
      <p class="title"> RESERVE YOUR SPOT TODAY</p>
      <div class="icons text-center">
        <i class="bi bi-calendar-check" style="font-size: 48px; color: #2a5024"></i>
      </div>
<br>
      <!--First Row-->
      <div class="form-group">

        <input
          type="text"
          v-model="firstName"
          class="form-control"
          id="first"
          placeholder="First name"
        />
      </div>
      <br />
      <div class="form-group">

        <input
          type="text"
          v-model="lastName"
          class="form-control"
          id="last"
          placeholder="Last name"
        />
      </div>
      <br />
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="E-mail" v-model="email" />
      </div>

      <br />

      <!--Third Row-->
      <div class="row">
        <div class="col-sm-6">
          <label for="departure">Date</label>
          <input
            type="date"
            id="date-picker-example"
            class="form-control datepicker mb-4"
            style="font-family: Arial, FontAwesome"
          />
        </div>
      </div>

      <!--Fourth Row-->

      <div class="row">
        <div class="col-sm-4">
          <select class="browser-default custom-select mb-4" id="select">
            <option value="" disabled="" selected="">Adults (18+)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="col-sm-4">
          <select class="browser-default custom-select mb-4" id="select">
            <option value="" disabled="" selected="">Kids (13-17)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <input
        @click="onClick"
        type="button"
        class="btn btn-primary float-right mt-5"
        id="btn-book-now"
        value="Book now"
        :disabled="firstName.length === 0 && lastName.length === 0"
      />

      <!-- <label id="message" v-if="message !== null" class="form-label" for="form5Example21">
      {{message}}</label> -->
    </div>
  </div>
  <span id="message" v-if="message !== null"
    ><i id="confirm" class="bi bi-check-circle-fill"></i>{{ message }}
  </span>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      firstName: '',
      lastName: '',
      email: ''
    }
  },

  methods: {
    onClick(event) {
      this.message = `Thanks  ${this.firstName}  ${this.lastName}. You will receive a booking confirmation to your email address ${this.email} `
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
.card {
  margin: auto;
  border: solid 1px #dbdad7;
  width: 60%;
  padding-left: 10px !important;
  padding-bottom: 10px !important;
  padding-right: 10px !important;
  padding-top: 0px !important;
}

.card-title {
  margin: auto;
  padding: 15px;
  color: white;
  width: 80%;
}

div.card-body {
  padding: 0px;
}
.custom-select {
  width: 100%;
}

.btn2 {
  margin-left: 10%;
}
/* input {
  outline: 0 !important;
  border-width: 0 0 2px !important;
  border-color: #d1d1cf !important;
} */
input:focus {
  border-color: #5e5e5d !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

select {
  outline: 0 !important;
  border-width: 0 0 2px !important;
  border-color: #d1d1cf !important;
}

select:focus {
  border-color: #d1d1cf !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.radiobtn {
  margin-left: 3.5%;
}

.icons {
  margin: auto !important;
}

.fa {
  border-radius: 25px;
  width: 10%;
  margin-left: 5%;
  border: solid 2px #dbdad7;
  margin-top: 5%;
  text-align: center;
}

.title {
  margin-top: 5vh;
  margin-bottom: 5vh;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-family: 'Advent Pro';
  color: #2a5024;
}
#booking-form {
  margin-top: 20vh;
  border: solid 7px #2a5024;
}
#btn-book-now {
  background-color: white;
  color: #2a5024;
  text-align: center;
  /* transition: all 0.5s ease; */
  font-weight: 500;
  border: solid 3px #2a5024;
}
#btn-book-now:hover {
  color: white;
  background-color: #2a5024;
}
#confirm {
  font-size: 20px;
  color: rgb(39, 193, 25);
}

#message {
  display: flex;
  justify-content: center;
  color: #2a5024;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10vh;
}

@media only screen and (max-width: 600px) {
  .card {
    margin: auto;
    border: solid 1px #dbdad7;
    width: 90%;
    padding-left: 10px !important;
    padding-bottom: 10px !important;
    padding-right: 10px !important;
    padding-top: 0px !important;
  }

  .fa {
    border-radius: 25px;
    width: 15%;
    margin-left: 5%;
    border: solid 2px #dbdad7;
    margin-top: 5%;
    text-align: center;
  }

  #booking-form {
    margin-top: 20vh;
  }

  #message {
    margin-left: 20px;
  }
}
</style>
