import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhVj6a2gZdRBuS6iKTAgqW3X0Y_6dfZUs",
  authDomain: "mycheck-c45a9.firebaseapp.com",
  databaseURL: "https://mycheck-c45a9-default-rtdb.firebaseio.com",
  projectId: "mycheck-c45a9",
  storageBucket: "mycheck-c45a9.appspot.com",
  messagingSenderId: "869238408775",
  appId: "1:869238408775:web:8b33622c99acbd77b4d362",
  measurementId: "G-0P18VNL73M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
