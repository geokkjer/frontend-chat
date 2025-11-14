import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Message } from '@/types'

export const useChatStore = defineStore('chat', () => {
  const chatLog = ref<Message[]>([])

  function addMessage(message: Message) {
    chatLog.value.push(message)
  }

  const getChatLog = () => {
    return chatLog.value
  }

  return { addMessage, getChatLog }
})
