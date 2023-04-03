<template>
    <v-container style="width: 100vw; text-align: center;">
      <v-row align="center" justify="center" class="mt-16">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-card-title class="headline">
              Welcome to Dice Game!
            </v-card-title>
            <v-card-actions>
              <router-link to="/game" class="primary">
                <v-btn>
                  Start Game
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
  