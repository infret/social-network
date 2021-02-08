import { Instance, types } from 'mobx-state-tree'

const Post = types.model({
  sender_id: types.number,
  text: types.string,
  date: types.string
})

const Store = types
  .model({
    posts: types.array(Post)
  })
  .actions((self) => ({
    createPost(sender_id: number, text: string, date: string) {
      self.posts.push({ sender_id, text, date })
    },
    filterPosts(sender_id: number) {
      // let postsToRender: IPost[] = []
      // Object.values(self.posts).forEach((post) => {
      //   if (post.sender_id === sender_id) {
      //     postsToRender.push({
      //       sender_id: post.sender_id,
      //       text: post.date,
      //       date: post.date
      //     })
      //   }
      // })
      // console.log(postsToRender)
      // return postsToRender
      return self.posts
    }
  }))

// function getPosts(sender_id: number = -1) {
//   let postsToRender: renderInterface[] = []
//   posts.forEach((item, i) => {
//     if (sender_id === -1) {
//       postsToRender.push({
//         sender_id: posts[i].sender_id,
//         name: initialState.users[posts[i].sender_id].username,
//         avatar: initialState.users[posts[i].sender_id].avatar,
//         text: posts[i].text,
//         date: posts[i].date
//       })
//     } else {
//       if (posts[i].sender_id === sender_id) {
//         postsToRender.push({
//           sender_id: posts[i].sender_id,
//           name: initialState.users[sender_id].username,
//           avatar: initialState.users[sender_id].avatar,
//           text: posts[i].text,
//           date: posts[i].date
//         })
//       }
//     }
//   })
//   return postsToRender
// }

const store = Store.create({
  posts: [
    {
      sender_id: 0,
      text: 'Sample post, u know',
      date: '11 Nov, 17:08'
    },
    {
      sender_id: 1,
      text: 'Another sample post',
      date: '12 Nov, 17:42'
    }
  ]
})

export interface IPost extends Instance<typeof Post> {}
export interface IStore extends Instance<typeof store> {}

export default store
