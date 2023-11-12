<script setup>

defineProps({
  exercises: Array,
  onEdit: Function,
  onDelete: Function,
})

</script>

<template>
  <table v-if="exercises.length > 0" id="exercises">
    <thead>
      <tr>
        <th>Name</th>
        <th>Reps</th>
        <th>Weight</th>
        <th>Unit</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody v-for="exercise in exercises" :key="exercise._id">
      <tr>
        <td>{{ exercise.name }}</td>
        <td>{{ exercise.reps }}</td>
        <td>{{ exercise.weight }}</td>
        <td>{{ exercise.unit }}</td>
        <td>{{ new Date(exercise.date).toLocaleDateString("en-US") }}</td>
        <td><button class="danger" @click="onDelete(exercise._id)">Delete</button><button @click="onEdit(exercise)" >Edit</button></td>
      </tr>

    </tbody>
  </table>

  <h3 v-else>No exercises found.</h3>
</template>

<style scoped>

table {
  border-collapse: collapse; /* Merge cell borders */
  background-color: black; /* Background color of the table */
}

th, td {
border: 1px solid rgba(0, 0, 0, 0.518); /* Black border for table headers and cells */
  padding: 13px; /* Padding inside table cells */
  text-align: left; /* Text alignment within cells */
  color: white; /* Text color */
}

th {
  background-color: #333; /* Background color for table header cells */
}

tr:nth-child(even) {
  background-color: #555; /* Background color for even rows */
}

tr:nth-child(odd) {
  background-color: #444; /* Background color for odd rows */
}

</style>
