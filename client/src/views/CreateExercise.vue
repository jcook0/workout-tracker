<script setup>
import { ref } from 'vue'

const name = ref('')
const reps = ref('')
const weight = ref('')
const unit = ref('')
const date = ref('')

const createExercise = async () => {
    const newExercise = { name: name.value, reps: reps.value, weight: weight.value, unit: unit.value, date: date.value };
    console.log(newExercise)
    const response = await fetch('http://localhost:5555/exercises', {
        method: 'post',
        body: JSON.stringify(newExercise),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 201) {
        alert("Successfully created the exercise!");
    } else {
        const errMessage = await response.json();
        if (errMessage.errors !== undefined) {
            alert(`Failed to create exercise. Status ${response.status}. ${errMessage.errors[0].msg}`);
        }
        else {
            alert(`Failed to create exercise. Status ${response.status}. ${errMessage.error}`);
        }
    }
    window.location="/"
};

</script>

<template>
    <article>
        <h2>Create Exercise</h2>
        <p>Must contain valid name, reps, weight, unit, and date.</p>
        <form @submit.prevent="createExercise">
            <label htmlFor="name">Exercise</label>
            <input required type="text" placeholder="Exercise name" id="name" v-model="name" />

            <label htmlFor="reps">Reps</label>
            <input required type="number" placeholder="Reps performed" id="reps" v-model="reps" />

            <label htmlFor="weight">Weight</label>
            <input required type="number" placeholder="Weight used" id="weight" v-model="weight" />

            <label htmlFor="unit">Unit</label>
            <select required name="unit" id="unit" v-model="unit">
                <option>---Select---</option>
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
                <option value="miles">miles</option>
                <option value="kms">kms</option>
            </select>

            <label htmlFor="date">Date</label>
            <input required type="date" onChange="setDate" id="date" v-model="date" />

            <label htmlFor="submit">
                <input type="submit" value="Create" id="submit"></label>
        </form>
    </article>
</template>