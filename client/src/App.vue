<script setup>

import Nav from "./components/Nav.vue"
import { getAuth, signInAnonymously } from 'firebase/auth'
import { ref, onMounted } from 'vue'

onMounted(() => {
  let auth = getAuth();
  if (auth.currentUser == null) {
    signInAnonymously(auth)
      .then(() => {

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Sign in failed")
        console.log(errorCode, errorMessage)
      });

  }
})

</script>

<template>
  <div id="app" class="bg-image">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
