<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <RouterLink to="/" active-class="active">Home</RouterLink>
    <RouterLink to="/about" active-class="active">About</RouterLink>
  </div>
</template>

<style scoped>


.active {
    font-weight: 900;
    color: blue;
    text-decoration: none;
}
</style>
