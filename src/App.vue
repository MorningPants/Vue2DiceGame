<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/game">Game</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 20px 0;
}

nav a {
  margin: 0 20px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 18px;
}
</style>
