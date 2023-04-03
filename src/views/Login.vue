<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label>
          Email:
          <input type="email" v-model="email" required />
        </label>
        <label>
          Password:
          <input type="password" v-model="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
      <div v-if="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login() {
        if (this.email === 'user@example.com' && this.password === 'password') {
          this.$router.push('/game')
        } else {
          this.error = 'Invalid email or password'
        }
      }
    }
  }
  </script>
  