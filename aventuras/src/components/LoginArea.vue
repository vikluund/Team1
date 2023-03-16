<template>
  <div class="login-wrapper">
    <!-- LOGIN button -->
    <div v-if="!loginStore.member.auth">
      <button class="button-login" @click="$router.push('/login')">LOGIN</button>
    </div>
    <div v-else class="auth-wrapper">
      <div class="user-wrapper">
        <RouterLink class="nav-link" :to="'/' + this.loginStore.member.username"
          ><img class="circle-user-img" src="../assets/media/circle-user-icon-small.png" /><span
            id="username-text"
            >{{ loginStore.member.username }}</span
          >
        </RouterLink>
      </div>
      <RouterLink class="nav-link" to="/"
        ><button @click="loginStore.logout()" class="button-logout" to="/">
          LOGOUT
        </button></RouterLink
      >
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/login.js'

export default {
  setup() {
    const loginStore = useAuthStore()

    return { loginStore }
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
.login-wrapper {
  margin-top: 5px;
}

.button-login {
  margin-top: -3px;
  padding: 1px 8px;
  font-size: 12px;
  text-align: center;
  color: #000;
  background-color: #fff;
  border: 1px solid #fff;
}

.button-login:hover {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
}

.button-logout {
  margin-top: -3px;
  padding: 1px 8px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #000;
}

.button-logout:hover {
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
}

.auth-wrapper {
  display: flex;
  justify-content: space-between;
}

.user-wrapper {
  margin-right: 6px;
}

#username-text {
  text-transform: uppercase;
  margin-right: 8px;
}

.circle-user-img {
  margin-right: 6px;
  margin-bottom: 4px;
  height: 16px;
  width: 16px;
}

.nav-link {
  color: #fff;
}
</style>
