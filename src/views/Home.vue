<template>
    <div class="home">
      <h1>Welcome to the Dice Game!</h1>
      <p>Click on the "Play Game" button to get started.</p>
      <router-link to="/game">
        <button>Play Game</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView'
  }
  </script>
  
  <style>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  