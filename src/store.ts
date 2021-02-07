export let initialState = {
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
  messages: [
    {
      sender_id: 0,
      recipient_id: 1,
      text: 'Sup',
      date: '11 Nov, 10:08'
    },
    {
      sender_id: 1,
      recipient_id: 0,
      text: 'Hey',
      date: '11 Nov, 10:47'
    }
  ],
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
}

export function getCurrentDate() {
  return new Intl.DateTimeFormat('en-GB', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(Date.now())
}
