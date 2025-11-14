<script setup lang="ts">
import type { User } from '@/types'
const props = defineProps<{
  users: User[]
}>()
</script>
<template>
    <h4>Pick a User:</h4>
      <select>
        <option v-for="(user, index) in props.users" :key="index" :value="user.name">{{ user.name }}</option>
      </select>
</template>
<style scoped>
h4 {
    color: white;
}
select {
    background-color: #555;
    color: white;
    border: none;
    padding: 5px;
}
</style>
