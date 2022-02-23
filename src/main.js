import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase  from "firebase/compat";
const firebaseConfig = {
  apiKey: "AIzaSyAWIq4--_fos3cJbfyZnGhBHcng7d34Ho0",
  authDomain: "auth-cobreak.firebaseapp.com",
  projectId: "auth-cobreak",
  storageBucket: "auth-cobreak.appspot.com",
  messagingSenderId: "346178465814",
  appId: "1:346178465814:web:469f38d90bf6c42d36c537"
};
firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
