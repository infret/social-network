export interface userInterface {
  username: string
  avatar: string
  id: number
}

export interface messageInterface {
  sender_id: number
  recipient_id: number
  text: string
  date: string
}

export interface postInterface {
  sender_id: number
  text: string
  date: string
}

export interface stateInterface {
  currentUserId: number
  users: userInterface[]
  messages: messageInterface[]
  posts: postInterface[]
}

export interface renderInterface {
  text: string
  date: string
  name: string
  avatar: string
  sender_id: number
}
