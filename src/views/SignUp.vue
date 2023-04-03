<template>
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Email:
          <input type="email" v-model="email" required>
        </label>
        <br>
        <label>
          Password:
          <input type="password" v-model="password" required>
        </label>
        <br>
        <button type="submit" @click.prevent="signUp">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpView",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      signUp() {
        // handle sign up logic here
      },
    },
  };
  </script>
  