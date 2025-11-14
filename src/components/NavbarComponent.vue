<script setup lang="ts">
import type { User } from '@/types'
import PickUser from './PickUser.vue';

const props = defineProps<{
  userCount: number
  users: User[],
  currentUser: number
}>()


</script>
<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link
      :to="{
        name: 'profile',
        params: { id: props.currentUser }
      }">
      Profile
    </router-link></li>
    <li><router-link to="/chat">Chat</router-link></li>
    <li style="float:right">
      <PickUser :users="props.users" />
    </li>
  </ul>
</template>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: white;
  background-color: #333;
}

li {
  float: left;
  color: white;
}
</style>
