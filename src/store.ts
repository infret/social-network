import { Instance, types } from 'mobx-state-tree'

const Post = types.model({
  id: types.number,
  img: types.string,
  date: types.number
})

const Message = types.model({
  recipient_id: types.number,
  text: types.string,
  date: types.number
})

const Comment = types.model({
  post_id: types.number,
  text: types.string,
  date: types.number
})

const User = types.model({
  id: types.number,
  username: types.string,
  avatar: types.string,
  status: types.string,
  posts: types.array(Post),
  messages: types.array(Message),
  comments: types.array(Comment),
  following: types.array(types.number),
  likedPosts: types.array(types.number)
})

const Store = types
  .model({
    currentUserId: types.number,
    searchBy: types.string,
    users: types.array(User),
    posts: types.array(Post),
    messages: types.array(Message)
  })
  .actions((self) => ({
    createPost(img: string) {
      self.users[self.currentUserId].posts.push({
        id: self.posts.length + 1000,
        img,
        date: Date.now() / 1000
      })
    },
    createMessage(text: string, recipient_id: number) {
      self.users[self.currentUserId].messages.push({
        recipient_id,
        text,
        date: Date.now() / 1000
      })
    },
    createComment(text: string, post_id: number) {
      self.users[self.currentUserId].comments.push({
        post_id,
        text,
        date: Date.now() / 1000
      })
    },
    toggleLike(id: number) {
      self.users[self.currentUserId].likedPosts.includes(id)
        ? self.users[self.currentUserId].likedPosts.splice(
            self.users[self.currentUserId].likedPosts.indexOf(id),
            1
          )
        : self.users[self.currentUserId].likedPosts.push(id)
    },
    toggleFollow(id: number) {
      self.users[self.currentUserId].following.includes(id)
        ? self.users[self.currentUserId].following.splice(
            self.users[self.currentUserId].following.indexOf(id),
            1
          )
        : self.users[self.currentUserId].following.push(id)
    },
    setSearch(search: string) {
      self.searchBy = search
    }
  }))

const store = Store.create({
  currentUserId: 0,
  searchBy: '',
  users: [
    {
      id: 0,
      username: 'vladislavpechkin',
      avatar:
        'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60',
      status: `The Creator in person`,
      posts: [
        {
          id: 0,
          date: 1613840000,
          img:
            'https://images.unsplash.com/photo-1613572596126-23969094b944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        },
        {
          id: 4,
          date: 1613849000,
          img:
            'https://images.unsplash.com/photo-1613586020253-fb6fe0b04269?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
        }
      ],
      messages: [
        {
          recipient_id: 1,
          text: 'Sup',
          date: 1613847000
        },
        {
          recipient_id: 2,
          text: 'How are you?',
          date: 1613840000
        }
      ],
      comments: [
        {
          post_id: 0,
          text: 'Sample post with text and image',
          date: 1613840000
        },
        {
          post_id: 3,
          text:
            "Sample comment with a ton of post-related text. There are so many words that they look like they wouldn't fit, but they do with some text wrapping and comment sizing.",
          date: 1613899000
        },
        {
          post_id: 2,
          text: 'Sample comment',
          date: 1613847000
        }
      ],
      following: [1, 2, 3, 4],
      likedPosts: [3, 4]
    },
    {
      id: 1,
      username: 'ryanmiller',
      avatar:
        'https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1427&q=80',
      status: `Somewhat busy nowadays`,
      posts: [
        {
          id: 1,
          date: 1613820000,
          img:
            'https://images.unsplash.com/photo-1613568409506-e70370442e6e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
        }
      ],
      messages: [
        {
          recipient_id: 0,
          text: 'Hey',
          date: 1613848000
        }
      ],
      comments: [
        {
          post_id: 1,
          text: 'Sample post from me',
          date: 1613820000
        }
      ],
      following: [0],
      likedPosts: [1]
    },
    {
      id: 2,
      username: 'russelcooper',
      avatar:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
      status: `All everybody wants is to drink molten chocolate in front of the window in the rainy day`,
      posts: [
        {
          id: 2,
          date: 1613700000,
          img:
            'https://images.unsplash.com/photo-1564869115811-96da66f0557f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwZ3JlZW58ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
        }
      ],
      messages: [
        {
          recipient_id: 0,
          text: `I'm fine. What's about you?`,
          date: 1613848000
        }
      ],
      comments: [
        {
          post_id: 3,
          text: 'Another sample comment',
          date: 1613847000
        }
      ],
      following: [0, 1, 4],
      likedPosts: [3]
    },
    {
      id: 3,
      username: 'anastasialeonore',
      avatar:
        'https://images.unsplash.com/photo-1511963211013-83bba110595d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      status: `Self-taught photographer`,
      posts: [],
      messages: [],
      comments: [
        {
          post_id: 3,
          text: 'More sample comments on this post!',
          date: 1613849000
        }
      ],
      following: [0, 2],
      likedPosts: [1, 3, 4]
    },
    {
      id: 4,
      username: 'alicehierro',
      avatar:
        'https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2lsaG91ZXR0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      status: `be better than you were yesterday!`,
      posts: [
        {
          id: 3,
          text: '',
          date: 1613841000,
          img:
            'https://images.unsplash.com/photo-1613591767283-c120294bb16b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
        }
      ],
      messages: [],
      comments: [
        { post_id: 3, text: 'Post with some text about this and that', date: 1613841000 },
        {
          post_id: 4,
          text: 'Sample comment from sample user',
          date: 1613847000
        }
      ],
      following: [0, 1],
      likedPosts: []
    }
  ]
})

export function timeSince(date: number) {
  let time: number = Math.round((Date.now() / 1000 - date) / 60)
  if (time <= 1) {
    return 'just now'
  }
  if (time > 1 && time < 60) {
    return Math.round(time) + ' minutes ago'
  }
  if (time > 60 && time < 1440) {
    return Math.round(time / 60) === 1 ? '1 hour ago' : Math.round(time / 60) + ' hours ago'
  }
  if (time > 1440 && time < 43829.1) {
    return Math.round(time / 1440) === 1 ? '1 day ago' : Math.round(time / 1440) + ' days ago'
  }
  if (time > 43829.1 && time < 525949.2) {
    return Math.round(time / 43829.1) === 1
      ? '1 month ago'
      : Math.round(time / 43829.1) + ' months ago'
  }
  if (time > 525949.2) {
    return Math.round(time / 525949.2) === 1
      ? '1 year ago'
      : Math.round(time / 525949.2) + 'years ago'
  }
}

export interface IStore extends Instance<typeof store> {}
export interface IUser extends Instance<typeof User> {}
export interface IPost extends Instance<typeof Post> {}

const saveState = (state: IStore) => {
  window.sessionStorage.setItem('app_state', JSON.stringify(state))
}

const loadState = () => {
  const savedState = window.sessionStorage.getItem('app_state')
  return savedState ? (JSON.parse(savedState) as IStore) : undefined
}

export default store
