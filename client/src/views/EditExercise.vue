<script setup>
import { ref, onMounted } from 'vue'
import { globalStore } from '../main.js'
import axios from 'axios';

const name = ref('')
const reps = ref('')
const weight = ref('')
const unit = ref('')
const date = ref('')

const editExercise = async () => {

    let newExercise = {
        name: name.value,
        reps: reps.value,
        weight: weight.value,
        unit: unit.value,
        date: date.value
    }

    axios.put(`http://localhost:5555/editExercises/${globalStore.user.uid}/${globalStore.exercise._id}`, newExercise, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            alert("Successfully edited the exercise!");
        })
        .catch(error => {
            // Handle error
            alert(`Failed to edit exercise.`);
            console.error('Error making PUT request', error);
        });
};

onMounted(() => {
    //console.log(globalStore.exercise);
    name.value = globalStore.exercise.name
    reps.value = globalStore.exercise.reps
    weight.value = globalStore.exercise.weight
    unit.value = globalStore.exercise.unit
    date.value = globalStore.exercise.date
})

</script>

<template>
    <article>
        <h2>Edit Exercise</h2>
        <p>Must contain valid name, reps, weight, unit, and date.</p>
        <form @submit.prevent="editExercise">
            <label htmlFor="name">Exercise</label>
            <input required type="text" placeholder="Exercise name" id="name" v-model="name" />

            <label htmlFor="reps">Reps</label>
            <input required type="number" placeholder="Reps performed"  id="reps" v-model="reps" />

            <label htmlFor="weight">Weight</label>
            <input required type="number" placeholder="Weight used"  id="weight" v-model="weight" />

            <label htmlFor="unit">Unit</label>
            <select required name="unit" id="unit"  v-model="unit">
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
                <option value="miles">miles</option>
                <option value="kms">kms</option>
            </select>

            <label htmlFor="date">Date</label>
            <input required type="date"  id="date" v-model="date" min="2020-01-01" />

            <label htmlFor="submit">
            <input type="submit" value="Save" id="submit"></label>
        </form>
    </article>
</template>