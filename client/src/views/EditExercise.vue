<script setup>
import {ref, inject} from 'vue'

const exercise = inject('exercise');

</script>

<template>
    <article>
        <h2>Edit Exercise</h2>
        <p>Must contain valid name, reps, weight, unit, and date.</p>
        <form onSubmit="">
            <label htmlFor="name">Exercise</label>
            <input required type="text" value={name} onChange="setName" id="name" />

            <label htmlFor="reps">Reps</label>
            <input required type="number" value={reps} onChange="setReps" id="reps" />

            <label htmlFor="weight">Weight</label>
            <input required type="number" value={weight} onChange="setWeight" id="weight" />

            <label htmlFor="unit">Unit</label>
            <select required name="unit" id="unit" value={unit} onChange="setUnit">
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
                <option value="miles">miles</option>
                <option value="kms">kms</option>
            </select>

            <label htmlFor="date">Date</label>
            <input required type="date" value={date} onChange="setDate" id="date" />

            <label htmlFor="submit">
            <button onClick={editExercise} id="submit">Save</button></label>
        </form>
    </article>
</template>