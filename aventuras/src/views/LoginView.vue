<template>
  <div class="background">
    <div class="overlay-dark">
      <div class="login-wrapper">
        <div id="top-part"><h2 id="logo-text">Aventuras</h2></div>
        <div id="bottom-part">
          <div id="login">
            <h1 class="login-text">Profile Login</h1>
            <div class="input-wrapper">
              <label class="label-text" for="user">Username</label>
              <input
                type="text"
                name="username"
                v-model="input.username"
                placeholder="Type your username"
                id="user"
              />
              <label class="label-text" for="password">Password</label>
              <input
                type="password"
                name="password"
                v-model="input.password"
                placeholder="Type your password"
                id="password"
              />
            </div>
            <div v-if="message" class="login-message">{{ message }}</div>
            <div v-else class="login-message-space">-</div>
            <button class="login-form-button" type="button" @click="login()">SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/login.js'

/* loginStore.auth*/

export default {
  setup() {
    const loginStore = useAuthStore()

    return { loginStore }
  },
  data() {
    return {
      input: {
        username: '',
        password: ''
      },
      message: ''
    }
  },
  methods: {
    login() {
      if (this.input.username != '' && this.input.password != '') {
        if (
          this.input.username == this.loginStore.member.username &&
          this.input.password == this.loginStore.member.password
        ) {
          this.loginStore.login()
          this.$router.replace({ path: '/' + this.loginStore.member.username })
        } else {
          this.message = 'The username and/or password is incorrect'
        }
      } else {
        this.message = 'Please write the username and password'
      }
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
.background {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(../assets/media/climb2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.overlay-dark {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(241, 253, 221, 0.3));
  backdrop-filter: blur(1px);
}

#login {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 40px 30px 40px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.login-text {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

input {
  width: auto;
  margin-bottom: 1rem;
  padding: 0.4rem;
  background-color: #eeeeee;
  border: 2px solid #eeeeee;
  border-radius: 2px;
}

input:focus {
  border: 2px solid #8a8a8a;
  outline: none;
}

#user {
  background-image: none;
}

#password {
  background-image: none;
}

.label-text {
  font-weight: 600;
}

.login-form-button {
  padding: 0.5rem 4rem;
  margin: 1rem auto;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  background-color: #2a5023;
  border: 2px solid #2a5023;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.login-form-button:hover {
  color: #2a5023;
  background-color: #fff;
  border: 2px solid #2a5023;
}

.login-message {
  color: #cc1515;
  font-size: 0.8rem;
}

.login-message-space {
  font-size: 0.8rem;
  visibility: hidden;
}

.login-wrapper {
  padding-top: 1vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: auto;
}

#top-part {
  color: #fff;
  font-size: 1.6rem;
  text-transform: uppercase;
  text-align: center;
  background-color: #000;
  padding: 0.75rem 4rem;
  margin-top: 10px;
}

#logo-text {
  margin: 0.5rem 0;
}

#bottom-part {
  background-color: #fff;
  margin-bottom: 10px;
}

/* ---- Media query ---- */

@media (min-width: 768px) {
  .login-wrapper {
    width: 500px;
    padding-top: 8vh;
    padding-bottom: 8vh;
  }

  #top-part {
    font-size: 1.8rem;
    margin-top: 65px;
  }

  #bottom-part {
    margin-bottom: 50px;
  }

  input {
    width: 16rem;
  }

  .login-text {
    font-size: 1.8rem;
  }

  #user {
    background-image: url('../assets/media/user-icon-small.png');
    opacity: 0.7;
    background-position: 9px 9px;
    background-repeat: no-repeat;
    padding-left: 45px;
  }

  #password {
    background-image: url('../assets/media/password-icon-small.png');
    opacity: 0.7;
    background-position: 9px 9px;
    background-repeat: no-repeat;
    padding-left: 45px;
  }

  .login-form-button {
    padding: 0.5rem 5.5rem;
  }

  #login {
    padding: 50px 50px 70px;
  }

  .login-text {
    font-size: 1.6rem;
  }

  .login-form-button {
    font-size: 18px;
  }
}
</style>
