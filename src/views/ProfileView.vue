<script setup lang="ts">

import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<template>
  <h1>Welcome to the Profile View!</h1>
  <p>User ID: {{ route.params.id }}</p>
</template>

<style scoped>
h1 {
  color: white;
}
</style>
