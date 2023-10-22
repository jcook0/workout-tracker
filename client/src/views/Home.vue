<script setup>
import ExerciseList from "../components/ExerciseList.vue"
import { ref, onMounted  } from 'vue'

const exercises = ref([])

// RETRIEVE the list of exercises
const loadExercises = async () => {
    const response = await fetch('http://localhost:5555/exercises');
    const e = await response.json();
    exercises.value = e
}

// UPDATE an exercise
const onEditExercise = async exercise => {
    console.log("TEST")
    //exercises.value = exercise
    //$router.push('/editExercise');
    window.location="/editExercise"
}


// DELETE an exercise
//:exercises={exercises} :onEdit={onEditExercise} :onDelete={onDeleteExercise}
const onDeleteExercise = async _id => {
    const response = await fetch(`http://localhost:5555/exercises/${_id}`, { method: 'DELETE' });
    if (response.status === 204) {
        loadExercises()
        alert("Successfully deleted exercise!");
    } else {
        console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        alert("Failed to delete exercise.");
    }
}

onMounted ( ()=> {
    loadExercises()
})


</script>

<template>
    <article>
        <h2>Table of Exercises</h2>
        <p>Create, Edit, and Delete exercises.</p>
        <ExerciseList :exercises="exercises" :onEdit="onEditExercise" :onDelete="onDeleteExercise" />
    </article>
</template>
