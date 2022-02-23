<template>
  <div class="login">

    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4 mx-auto">
          <h2>Login</h2>
          <form @submit.prevent="Login">

            <div class="form-group">
              <input type="text" class="form-control" placeholder="email@email.com" v-model="email">
            </div>
            <div class="form-group mt-2">
              <input type="password" class="form-control" placeholder="password..." v-model="password">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Enter</button>
            <p class="mt-3">Need an acoount ? <router-link to="/register">Register here</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import firebase from "firebase/compat";

export default {
  setup (){
    const email = ref("")
    const password = ref("");

    const Login = () => {
      firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(data => console.log(data))
          .catch(err => alert(err.message))
    }

    return {
      Login,
      email,
      password
    }
  }
}
</script>