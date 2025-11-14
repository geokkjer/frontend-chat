export interface User {
  id: number
  name: string
  bio: string
}
export interface Message {
  id: number
  userId: number
  content: string
}
