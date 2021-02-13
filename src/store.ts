import { Instance, types } from 'mobx-state-tree'

const User = types.model({
  id: types.number,
  username: types.string,
  avatar: types.string
})

const Post = types.model({
  sender_id: types.number,
  sender_username: types.string,
  sender_avatar: types.string,
  text: types.string,
  date: types.string
})

const Message = types.model({
  sender_id: types.number,
  sender_username: types.string,
  sender_avatar: types.string,
  recipient_id: types.number,
  recipient_username: types.string,
  recipient_avatar: types.string,
  text: types.string,
  date: types.string
})

const Store = types
  .model({
    currentUserId: types.number,
    users: types.array(User),
    posts: types.array(Post),
    messages: types.array(Message)
  })
  .actions((self) => ({
    createPost(sender_id: number, text: string) {
      self.posts.push({
        sender_id,
        sender_username: self.users[sender_id].username,
        sender_avatar: self.users[sender_id].avatar,
        text,
        date: getCurrentDate()
      })
    },
    createMessage(sender_id: number, recipient_id: number, text: string) {
      self.messages.push({
        sender_id,
        sender_username: self.users[sender_id].username,
        sender_avatar: self.users[sender_id].avatar,
        recipient_id,
        recipient_username: self.users[sender_id].username,
        recipient_avatar: self.users[sender_id].avatar,
        text,
        date: getCurrentDate()
      })
    },
    filterMessages(sender_id: number, recipient_id: number) {
      return self.messages.filter((message) => message.sender_id === sender_id && message.recipient_id === recipient_id)
    }
  }))

const store = Store.create({
  currentUserId: 0,
  users: [
    {
      id: 0,
      username: 'vpech',
      avatar:
        'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 1,
      username: 'nnull',
      avatar:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
    },
    {
      id: 2,
      username: 'sergejar',
      avatar:
        'https://images.unsplash.com/photo-1500389723459-ca24a5564899?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBzaGFkb3d8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60'
    }
  ],
  posts: [
    {
      sender_id: 0,
      text: 'Sample post, u know',
      date: '11 Nov, 17:08',
      sender_username: 'vpech',
      sender_avatar:
        'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60'
    },
    {
      sender_id: 1,
      text: 'Another sample post',
      date: '12 Nov, 17:42',
      sender_username: 'nnull',
      sender_avatar:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
    }
  ],
  messages: [
    {
      sender_id: 0,
      sender_username: 'vpech',
      sender_avatar:
        'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60',
      recipient_id: 1,
      recipient_username: 'nnull',
      recipient_avatar:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
      text: 'Sup',
      date: '11 Nov, 10:08'
    },
    {
      sender_id: 1,
      sender_username: 'nnull',
      sender_avatar:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
      recipient_id: 0,
      recipient_username: 'vpech',
      recipient_avatar:
        'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60',
      text: 'Hey',
      date: '11 Nov, 10:47'
    }
  ]
})

const getCurrentDate = () =>
  new Intl.DateTimeFormat('en-GB', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(Date.now())

export interface IStore extends Instance<typeof store> {}
export interface IUser extends Instance<typeof User> {}

export default store
