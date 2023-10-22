<script setup>
</script>

<template>
    <nav>
        <a id="siteName">Workout Tracker</a>
        <a><router-link to="/">Home</router-link></a>
        <a><router-link to="/createExercise">Create Exercise</router-link></a>
    </nav>
</template>

<style scoped>
    nav {
        background-color: #000000ab;
        padding: 1.1em;
        padding-right: 7em;
    }
</style>