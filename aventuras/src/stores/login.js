import { defineStore } from 'pinia'

export const useAuthStore = defineStore('login', {
  state: () => ({
    member: {
      username: 'Alice',
      password: '123',
      location: 'Stockholm, Sweden',
      description: 'This is a user profile page.',
      auth: false
    }
  }),
  actions: {
    login() {
      this.member.auth = true
      console.log('Logged in')
    },
    logout() {
      this.member.auth = false
      console.log('Logged out')
    }
  }
})
