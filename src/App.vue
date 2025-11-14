<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from './stores/users'
const usersStore = useUsersStore()
const userIndex = ref(1);
</script>

<template>
  <router-view
    class="navbar"
    name="navbar"
    :userCount="usersStore.userCount"
    :users="usersStore.getUsers()"
    :currentUser="usersStore.currentUser"
  />
  <router-view
    class="hero"
    name="hero"
    :userName="usersStore.getUsers()[userIndex]?.name"
  />
  <router-view />
</template>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: whitesmoke;
    margin-top: 60px;
    background-color: #2c3e50;
}
</style>
