<script setup>

import Nav from "./components/Nav.vue"
import {ref, provide } from 'vue'

</script>

<template>
  <div id="app" class="bg-image">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
