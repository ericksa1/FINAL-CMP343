<template>
  <div class="workout-form">
    <h2>Log Workout</h2>
    <form @submit.prevent="submitWorkout">
      <input type="text" v-model="workout.name" placeholder="Workout Name" required>
      <input type="number" v-model="workout.duration" placeholder="Duration (minutes)" required>
      <button type="submit">Log Workout</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workout: {
        name: '',
        duration: 0,
      },
    };
  },
  methods: {
    submitWorkout() {
      // Handle workout logging logic
    },
  },
};
</script>

<style scoped>
.workout-form {
  /* Add your styles here */
}
</style>
