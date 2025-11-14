import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types'

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([
    { id: 1, name: 'Alice', bio: '' },
    { id: 2, name: 'Bob', bio: '' },
    { id: 3, name: 'Charlie', bio: '' },
  ])
  const userCount = computed(() => users.value.length)

  function addUser(name: string) {
    users.value.push({ id: userCount.value + 1, name, bio: '' })
  }
  const getUsers = () => {
    return users.value
  }
  return { userCount, addUser, getUsers }
})
