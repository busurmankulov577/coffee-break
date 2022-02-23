<template>
  <div class="register">

    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4 mx-auto">
          <h2>Register</h2>
          <form @submit.prevent="Register">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="email@email.com" v-model="email">
            </div>
            <div class="form-group mt-2">
              <input type="password" class="form-control" placeholder="password..." v-model="password">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Register</button>
            <p class="mt-3">Have an acoount ? <router-link to="/login">Log in here</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat";
import {ref} from "vue"

export default {
  setup () {

    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(user => alert(user))
          .catch(err => alert(err.message))
    }
    return {
      Register,
      email,
      password
    }
  }

}
</script>