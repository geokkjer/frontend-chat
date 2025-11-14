import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types'

export const useUsersStore = defineStore('users', () => {
  const currentUser = ref(1)
  const users = ref<User[]>([
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
    },
    {
      id: 3,
      name: 'Charlie',
      email: 'charlie@example.com',
    },
    {
      id: 4,
      name: 'Diana',
      email: 'diana@example.com',
    },
    {
      id: 5,
      name: 'Ethan',
      email: 'ethan@example.com',
    },
  ])

  const userCount = computed(() => users.value.length)

  const addUser = (name: string, email: string) => {
    users.value.push({ id: userCount.value + 1, name, email })
  }
  const getUsers = () => {
    return users.value
  }
  const writeUsersToFile = () => {
    // TODO: Implement file writing logic here
    const newUsers = users.value
    return newUsers
  }
  return { userCount, addUser, getUsers, writeUsersToFile, currentUser }
})
