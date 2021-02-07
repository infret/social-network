import { getSnapshot, Instance, types } from 'mobx-state-tree'

const Post = types.model({
  sender_id: types.number,
  text: types.string,
  date: types.string
})

const Store = types
  .model({
    posts: types.map(Post)
  })
  .actions((self) => ({
    createPost(sender_id: number, text: string, date: string) {
      self.posts.set(
        Math.floor(Math.random() * 100).toString(),
        Post.create({ sender_id, text, date })
      )
      console.log(getSnapshot(store))
    }
  }))

const store = Store.create({
  posts: {}
})

export interface IPost extends Instance<typeof Post> {}
export interface IStore extends Instance<typeof store> {}

export default store
