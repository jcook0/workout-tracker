<script setup>
//import Exercise from './components/Exercise.vue'
//import ExerciseList from "./components/ExerciseList.vue"
import Nav from "./components/Nav.vue"
import {ref, provide } from 'vue'

const exercise = ref([])
provide('exercise', exercise);

</script>

<template>
  <div id="app" class="bg-image">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
