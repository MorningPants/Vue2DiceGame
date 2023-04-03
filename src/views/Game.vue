<template>
    <div class="game">
      <h1>Dice Game</h1>
      <p>Roll the dice and see what you get!</p>
      <button @click="rollDice">Roll Dice</button>
      <p>You rolled: {{ diceRoll }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GameView',
    data() {
      return {
        diceRoll: ''
      }
    },
    methods: {
      rollDice() {
        // generate a random number between 1 and 6
        const roll = Math.floor(Math.random() * 6) + 1
        this.diceRoll = roll
      }
    }
  }
  </script>
  
  <style>
  .game {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  