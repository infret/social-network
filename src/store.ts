import { toJS } from 'mobx'
import { Instance, types } from 'mobx-state-tree'

let set = false

const User = types.model({
  id: types.number,
  username: types.string,
  avatar: types.string,
  status: types.string,
  likedPosts: types.array(types.number)
})

const Post = types.model({
  id: types.number,
  sender_id: types.number,
  text: types.string,
  img: types.string,
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
    createPost(sender_id: number, text: string, img: string) {
      self.posts.push({
        id: self.posts.length,
        sender_id,
        img,
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
    toggleLike(id: number) {
      self.users[self.currentUserId].likedPosts.includes(id)
        ? self.users[self.currentUserId].likedPosts.splice(
            self.users[self.currentUserId].likedPosts.indexOf(id),
            1
          )
        : self.users[self.currentUserId].likedPosts.push(id)
    }
  }))

const store = Store.create({
  currentUserId: 0,
  users: [
    {
      id: 0,
      username: 'vladislavpechkin',
      avatar:
        'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60',
      status: `The Creator in person`,
      likedPosts: []
    },
    {
      id: 1,
      username: 'ryanmiller',
      avatar:
        'https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1427&q=80',
      status: `Somewhat busy nowadays`,
      likedPosts: [1]
    },
    {
      id: 2,
      username: 'russelcooper',
      avatar:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
      status: `All everybody wants is to drink molten chocolate in front of the window in the rainy day`,
      likedPosts: []
    },
    {
      id: 3,
      username: 'anastasialeonore',
      avatar:
        'https://images.unsplash.com/photo-1511963211013-83bba110595d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      status: `Self-taught photographer`,
      likedPosts: [1]
    },
    {
      id: 4,
      username: 'alicehierro',
      avatar:
        'https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2lsaG91ZXR0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      status: `be better than you were yesterday!`,
      likedPosts: []
    }
  ],
  posts: [
    {
      id: 0,
      sender_id: 0,
      text: 'Sample post with text and image',
      date: '11 Nov, 17:08',
      img:
        'https://images.unsplash.com/photo-1613572596126-23969094b944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 1,
      sender_id: 1,
      text: 'Another sample post from me',
      date: '1 Feb, 7:12',
      img:
        'https://images.unsplash.com/photo-1613568409506-e70370442e6e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      id: 2,
      sender_id: 2,
      text: 'Post without image but with some text',
      date: '22 Aug, 11:22',
      img: ''
    },
    {
      id: 3,
      sender_id: 4,
      text: '',
      date: '4 Jan, 13:59',
      img:
        'https://images.unsplash.com/photo-1613591767283-c120294bb16b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      id: 4,
      sender_id: 0,
      text: '',
      date: '30 May, 4:11',
      img:
        'https://images.unsplash.com/photo-1613586020253-fb6fe0b04269?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
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
