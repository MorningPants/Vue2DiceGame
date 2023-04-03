<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Dice Game</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/game">Game</v-btn>
      <v-btn v-if="!isLoggedIn" to="/login">Login</v-btn>
      <v-btn v-if="!isLoggedIn" to="/signup">Sign Up</v-btn>
      <v-btn v-if="isLoggedIn" @click="logout">Logout</v-btn>
    </v-app-bar>

    <v-content>
      <router-view :isLoggedIn="isLoggedIn" @logout="logout"></router-view>
    </v-content>
  </v-app>
</template>

<script>
// export default {
//   name: 'App',
//   data () {
//     return {
//       isLoggedIn: false
//     }
//   },
//   methods: {
//     logout () {
//       // Add your logout logic here
//       this.isLoggedIn = false
//     }
//   }
// }
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn
    })
  },
  methods: {
    logout () {
      this.$store.commit('logout');
    }
  }
}
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
a{
  border-radius: 5px;
}
header > div > a{
  margin: 0 5px;
}

</style>
