<template>
      <v-row align="center" justify="center" class="mt-16" style="width: 100vw;">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-toolbar color="indigo" dark flat>
              <v-toolbar-title>Log In</v-toolbar-title>
            </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                            <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="passwordRules" :type="showPassword ? 'text' : 'password'" label="Password" required
                                @click:append="showPassword = !showPassword"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="indigo darken-1" @click="login" :disabled="!valid">Login</v-btn>
                        <v-btn text color="primary" @click="$router.push('/signup')">Create account</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
</template>
  
<script>

export default {
    name: 'LoginView',
    props: {
        isLoggedIn: Boolean
    },
    data: () => ({
        valid: false,
        email: '',
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'Email must be valid',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 8 || 'Password must be at least 8 characters',
        ],
        showPassword: false,
    }),
    methods: {
        login() {
            this.$store.commit('login')
            this.$router.push('/')

        }
    }
}
</script>
  