<template>
  <div class="home mt-5">
    <h1>Welcome, {{ toUpper(name) }}</h1>
    <router-link to="/about">About</router-link>&nbsp;
    <button class="btn-danger " @click="Logout">Logout</button>
  </div>
</template>

<script>
import {ref ,onBeforeMount} from 'vue';
import firebase from "firebase/compat";

export default {
  setup (){

    const name = ref("")
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if(user) {
        name.value = user.email.split('@')[0];
      }
    });
    const toUpper = (item) => {
      return item.toUpperCase()
    }
    const Logout = () => {
      firebase
          .auth()
          .signOut()
          .then(() => console.log("Signed out"))
          .catch(err => (err.message))
    }

    return {
      name,
      Logout,
      toUpper
    }
  }
}

</script>
