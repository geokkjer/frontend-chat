export interface User {
  id: number
  name: string
  email: string
}
export interface Message {
  id: number
  userId: number
  content: string
}
