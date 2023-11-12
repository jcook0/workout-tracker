<script setup>
</script>

<template>
    <nav>
        <a id="siteName">Workout Tracker</a>
        <a id="siteLink"><router-link to="/">Home</router-link></a>
        <a id="siteLink"><router-link to="/createExercise">Create Exercise</router-link></a>
    </nav>
</template>

<style scoped>

#siteName {
    font-weight: 600;
    font-size: 1.1em;
}

a {
    white-space: nowrap;
}


@media screen and (max-width: 600px) {
    nav a {
        padding: 2px;
        float: none;
        display:block;
        width: 100%;
        text-align: left;
    }
}

</style>