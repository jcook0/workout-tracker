<script setup>
import ExerciseList from "../components/ExerciseList.vue"
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { globalStore, router } from '../main.js'

const exercises = ref([])

// retrieve the list of exercises
const loadExercises = async () => {
    const response = await axios.get(`https://workout-tracker-ijx0.onrender.com:5555/allExercises/${globalStore.user.uid}`);
    const e = response.data;
    e.sort((a, b) => (a.date > b.date ? -1 : 1)) // sort exercises by date

    exercises.value = e
}

// update an exercise
const onEditExercise = async exercise => {
    globalStore.exercise = exercise
    router.push('/editExercise')
}

// delete an exercise
const onDeleteExercise = async _id => {

    axios.delete(`https://workout-tracker-ijx0.onrender.com:5555/exercises/${globalStore.user.uid}/${_id}`)
        .then(response => {
            // Handle success
            console.log('Delete successful', response);
            alert("Successfully deleted exercise!");
            loadExercises()
        })
        .catch(error => {
            // Handle error
            console.error('Error deleting resource', error);
            alert("Failed to delete exercise.");
        });

}

onMounted(() => {
    loadExercises()
})

</script>

<template>
    <article>
        <div>
            <h2>Table of Exercises</h2>
            <p>Create, Edit, and Delete exercises.</p>
            <p>You are signed in as user {{ globalStore.user.uid }} </p>
            <ExerciseList :exercises="exercises" :onEdit="onEditExercise" :onDelete="onDeleteExercise" />
        </div>
    </article>
</template>
