

<template>
      <v-row align="center" justify="center" class="mt-16" style="width: 100vw;">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-toolbar color="indigo" dark flat>
              <v-toolbar-title>Sign Up</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="signUp">
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form.password"
                  :rules="passwordRules"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form.confirmPassword"
                  :rules="confirmPasswordRules"
                  label="Confirm Password"
                  type="password"
                  required
                ></v-text-field>
                <v-card-actions>
                  <v-btn type="submit" color="primary" class="mr-4" :disabled="!valid">
                    Sign Up
                  </v-btn>
                  <router-link to="/login">
                    <v-btn>
                      Login
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </template>
  
  
  <script>
  export default {
    name: "SignUpView",
    data() {
      return {
        form: {
          email: "",
          password: "",
          confirmPassword: "",
        },
        emailRules: [
          (v) => !!v || "Email is required",
          v => /.+@.+/.test(v) || 'Email must be valid',
        ],
        passwordRules: [
          (v) => !!v || "Password is required",
          (v) => v.length >= 8 || "Password must be at least 8 characters",
        ],
        confirmPasswordRules: [
          (v) => !!v || "Confirm password is required",
          (v) => v === this.form.password || "Passwords must match",
        ],
      };
    },
    methods: {
      signUp() {
            this.$store.commit('login')
            this.$router.push('/')
      },
    },
  };
  </script>
  