<script setup>
import { ref } from 'vue'
import { router, globalStore } from '../main.js'
import axios from 'axios';

const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
const day = today.getDate().toString().padStart(2, '0');


const formattedDate = `${year}-${month}-${day}`;

const name = ref('')
const reps = ref('')
const weight = ref('')
const unit = ref('')
const date = ref(formattedDate)

const createExercise = async () => {
    const newExercise = { name: name.value, reps: reps.value, weight: weight.value, unit: unit.value, date: date.value};

    axios.post(`http://localhost:5555/exercises/${globalStore.user.uid}`, newExercise, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            console.log('POST successful', response);
            alert("Successfully created the exercise!");
            router.push("/")
        })
        .catch(error => {
            // Handle error
            alert(`Failed to create exercise.`);
            console.error('Error making POST request', error);
        });
};

</script>

<template>
    <article>
        <h2>Create Exercise</h2>
        <p>Must contain valid name, reps, weight, unit, and date.</p>
        <form @submit.prevent="createExercise">
            <label htmlFor="name">Exercise</label>
            <input required type="text" placeholder="Exercise name" autocomplete="one-time-code" id="name" v-model="name" />

            <label htmlFor="reps">Reps</label>
            <input required type="number" placeholder="Reps performed" id="reps" v-model="reps" />

            <label htmlFor="weight">Weight</label>
            <input required type="number" placeholder="Weight used" id="weight" v-model="weight" />

            <label htmlFor="unit">Unit</label>
            <select required name="unit" id="unit" v-model="unit">
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
                <option value="miles">miles</option>
                <option value="kms">kms</option>
            </select>

            <label htmlFor="date">Date</label>
            <input required type="date" onChange="setDate" id="date" v-model="date" min="2020-01-01" />

            <label htmlFor="submit">
                <input type="submit" value="Create" id="submit"></label>
        </form>
    </article>
</template>